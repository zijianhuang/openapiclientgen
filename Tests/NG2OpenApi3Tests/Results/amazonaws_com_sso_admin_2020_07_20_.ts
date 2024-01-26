import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AttachCustomerManagedPolicyReferenceToPermissionSetResponse {
	}
	export interface AttachCustomerManagedPolicyReferenceToPermissionSetResponseFormProperties {
	}
	export function CreateAttachCustomerManagedPolicyReferenceToPermissionSetResponseFormGroup() {
		return new FormGroup<AttachCustomerManagedPolicyReferenceToPermissionSetResponseFormProperties>({
		});

	}

	export interface AttachCustomerManagedPolicyReferenceToPermissionSetRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		PermissionSetArn: string;

		/** Required */
		CustomerManagedPolicyReference: CustomerManagedPolicyReference;
	}
	export interface AttachCustomerManagedPolicyReferenceToPermissionSetRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,
	}
	export function CreateAttachCustomerManagedPolicyReferenceToPermissionSetRequestFormGroup() {
		return new FormGroup<AttachCustomerManagedPolicyReferenceToPermissionSetRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each AWS account where you want to deploy your permission set. */
	export interface CustomerManagedPolicyReference {

		/** Required */
		Name: string;
		Path?: string;
	}

	/** Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each AWS account where you want to deploy your permission set. */
	export interface CustomerManagedPolicyReferenceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
	}
	export function CreateCustomerManagedPolicyReferenceFormGroup() {
		return new FormGroup<CustomerManagedPolicyReferenceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Path: new FormControl<string | null | undefined>(undefined),
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
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

	export interface AttachManagedPolicyToPermissionSetResponse {
	}
	export interface AttachManagedPolicyToPermissionSetResponseFormProperties {
	}
	export function CreateAttachManagedPolicyToPermissionSetResponseFormGroup() {
		return new FormGroup<AttachManagedPolicyToPermissionSetResponseFormProperties>({
		});

	}

	export interface AttachManagedPolicyToPermissionSetRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		PermissionSetArn: string;

		/** Required */
		ManagedPolicyArn: string;
	}
	export interface AttachManagedPolicyToPermissionSetRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,

		/** Required */
		ManagedPolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateAttachManagedPolicyToPermissionSetRequestFormGroup() {
		return new FormGroup<AttachManagedPolicyToPermissionSetRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ManagedPolicyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAccountAssignmentResponse {
		AccountAssignmentCreationStatus?: AccountAssignmentOperationStatus;
	}
	export interface CreateAccountAssignmentResponseFormProperties {
	}
	export function CreateCreateAccountAssignmentResponseFormGroup() {
		return new FormGroup<CreateAccountAssignmentResponseFormProperties>({
		});

	}


	/** The status of the creation or deletion operation of an assignment that a principal needs to access an account. */
	export interface AccountAssignmentOperationStatus {
		Status?: StatusValues;
		RequestId?: string;
		FailureReason?: string;
		TargetId?: string;
		TargetType?: TargetType;
		PermissionSetArn?: string;
		PrincipalType?: PrincipalType;
		PrincipalId?: string;
		CreatedDate?: Date;
	}

	/** The status of the creation or deletion operation of an assignment that a principal needs to access an account. */
	export interface AccountAssignmentOperationStatusFormProperties {
		Status: FormControl<StatusValues | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		TargetId: FormControl<string | null | undefined>,
		TargetType: FormControl<TargetType | null | undefined>,
		PermissionSetArn: FormControl<string | null | undefined>,
		PrincipalType: FormControl<PrincipalType | null | undefined>,
		PrincipalId: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateAccountAssignmentOperationStatusFormGroup() {
		return new FormGroup<AccountAssignmentOperationStatusFormProperties>({
			Status: new FormControl<StatusValues | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			TargetId: new FormControl<string | null | undefined>(undefined),
			TargetType: new FormControl<TargetType | null | undefined>(undefined),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined),
			PrincipalType: new FormControl<PrincipalType | null | undefined>(undefined),
			PrincipalId: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum StatusValues { IN_PROGRESS = 0, FAILED = 1, SUCCEEDED = 2 }

	export enum TargetType { AWS_ACCOUNT = 0 }

	export enum PrincipalType { USER = 0, GROUP = 1 }

	export interface CreateAccountAssignmentRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		TargetId: string;

		/** Required */
		TargetType: TargetType;

		/** Required */
		PermissionSetArn: string;

		/** Required */
		PrincipalType: PrincipalType;

		/** Required */
		PrincipalId: string;
	}
	export interface CreateAccountAssignmentRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		TargetId: FormControl<string | null | undefined>,

		/** Required */
		TargetType: FormControl<TargetType | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,

		/** Required */
		PrincipalType: FormControl<PrincipalType | null | undefined>,

		/** Required */
		PrincipalId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccountAssignmentRequestFormGroup() {
		return new FormGroup<CreateAccountAssignmentRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetType: new FormControl<TargetType | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PrincipalType: new FormControl<PrincipalType | null | undefined>(undefined, [Validators.required]),
			PrincipalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateInstanceAccessControlAttributeConfigurationResponse {
	}
	export interface CreateInstanceAccessControlAttributeConfigurationResponseFormProperties {
	}
	export function CreateCreateInstanceAccessControlAttributeConfigurationResponseFormGroup() {
		return new FormGroup<CreateInstanceAccessControlAttributeConfigurationResponseFormProperties>({
		});

	}

	export interface CreateInstanceAccessControlAttributeConfigurationRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration;
	}
	export interface CreateInstanceAccessControlAttributeConfigurationRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateInstanceAccessControlAttributeConfigurationRequestFormGroup() {
		return new FormGroup<CreateInstanceAccessControlAttributeConfigurationRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the attributes to add to your attribute-based access control (ABAC) configuration. */
	export interface InstanceAccessControlAttributeConfiguration {

		/** Required */
		AccessControlAttributes: Array<AccessControlAttribute>;
	}

	/** Specifies the attributes to add to your attribute-based access control (ABAC) configuration. */
	export interface InstanceAccessControlAttributeConfigurationFormProperties {
	}
	export function CreateInstanceAccessControlAttributeConfigurationFormGroup() {
		return new FormGroup<InstanceAccessControlAttributeConfigurationFormProperties>({
		});

	}


	/** These are IAM Identity Center identity store attributes that you can configure for use in attributes-based access control (ABAC). You can create permissions policies that determine who can access your AWS resources based upon the configured attribute values. When you enable ABAC and specify <code>AccessControlAttributes</code>, IAM Identity Center passes the attribute values of the authenticated user into IAM for use in policy evaluation. */
	export interface AccessControlAttribute {

		/** Required */
		Key: string;

		/** Required */
		Value: AccessControlAttributeValue;
	}

	/** These are IAM Identity Center identity store attributes that you can configure for use in attributes-based access control (ABAC). You can create permissions policies that determine who can access your AWS resources based upon the configured attribute values. When you enable ABAC and specify <code>AccessControlAttributes</code>, IAM Identity Center passes the attribute values of the authenticated user into IAM for use in policy evaluation. */
	export interface AccessControlAttributeFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateAccessControlAttributeFormGroup() {
		return new FormGroup<AccessControlAttributeFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The value used for mapping a specified attribute to an identity source. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/attributemappingsconcept.html">Attribute mappings</a> in the <i>IAM Identity Center User Guide</i>. */
	export interface AccessControlAttributeValue {

		/** Required */
		Source: Array<string>;
	}

	/** The value used for mapping a specified attribute to an identity source. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/attributemappingsconcept.html">Attribute mappings</a> in the <i>IAM Identity Center User Guide</i>. */
	export interface AccessControlAttributeValueFormProperties {
	}
	export function CreateAccessControlAttributeValueFormGroup() {
		return new FormGroup<AccessControlAttributeValueFormProperties>({
		});

	}

	export interface CreatePermissionSetResponse {
		PermissionSet?: PermissionSet;
	}
	export interface CreatePermissionSetResponseFormProperties {
	}
	export function CreateCreatePermissionSetResponseFormGroup() {
		return new FormGroup<CreatePermissionSetResponseFormProperties>({
		});

	}


	/** An entity that contains IAM policies. */
	export interface PermissionSet {
		Name?: string;
		PermissionSetArn?: string;
		Description?: string;
		CreatedDate?: Date;
		SessionDuration?: string;
		RelayState?: string;
	}

	/** An entity that contains IAM policies. */
	export interface PermissionSetFormProperties {
		Name: FormControl<string | null | undefined>,
		PermissionSetArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		SessionDuration: FormControl<string | null | undefined>,
		RelayState: FormControl<string | null | undefined>,
	}
	export function CreatePermissionSetFormGroup() {
		return new FormGroup<PermissionSetFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			SessionDuration: new FormControl<string | null | undefined>(undefined),
			RelayState: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePermissionSetRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		InstanceArn: string;
		SessionDuration?: string;
		RelayState?: string;
		Tags?: Array<Tag>;
	}
	export interface CreatePermissionSetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,
		SessionDuration: FormControl<string | null | undefined>,
		RelayState: FormControl<string | null | undefined>,
	}
	export function CreateCreatePermissionSetRequestFormGroup() {
		return new FormGroup<CreatePermissionSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SessionDuration: new FormControl<string | null | undefined>(undefined),
			RelayState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of key-value pairs that are used to manage the resource. Tags can only be applied to permission sets and cannot be applied to corresponding roles that IAM Identity Center creates in AWS accounts. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A set of key-value pairs that are used to manage the resource. Tags can only be applied to permission sets and cannot be applied to corresponding roles that IAM Identity Center creates in AWS accounts. */
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

	export interface DeleteAccountAssignmentResponse {
		AccountAssignmentDeletionStatus?: AccountAssignmentOperationStatus;
	}
	export interface DeleteAccountAssignmentResponseFormProperties {
	}
	export function CreateDeleteAccountAssignmentResponseFormGroup() {
		return new FormGroup<DeleteAccountAssignmentResponseFormProperties>({
		});

	}

	export interface DeleteAccountAssignmentRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		TargetId: string;

		/** Required */
		TargetType: TargetType;

		/** Required */
		PermissionSetArn: string;

		/** Required */
		PrincipalType: PrincipalType;

		/** Required */
		PrincipalId: string;
	}
	export interface DeleteAccountAssignmentRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		TargetId: FormControl<string | null | undefined>,

		/** Required */
		TargetType: FormControl<TargetType | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,

		/** Required */
		PrincipalType: FormControl<PrincipalType | null | undefined>,

		/** Required */
		PrincipalId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAccountAssignmentRequestFormGroup() {
		return new FormGroup<DeleteAccountAssignmentRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetType: new FormControl<TargetType | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PrincipalType: new FormControl<PrincipalType | null | undefined>(undefined, [Validators.required]),
			PrincipalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteInlinePolicyFromPermissionSetResponse {
	}
	export interface DeleteInlinePolicyFromPermissionSetResponseFormProperties {
	}
	export function CreateDeleteInlinePolicyFromPermissionSetResponseFormGroup() {
		return new FormGroup<DeleteInlinePolicyFromPermissionSetResponseFormProperties>({
		});

	}

	export interface DeleteInlinePolicyFromPermissionSetRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		PermissionSetArn: string;
	}
	export interface DeleteInlinePolicyFromPermissionSetRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteInlinePolicyFromPermissionSetRequestFormGroup() {
		return new FormGroup<DeleteInlinePolicyFromPermissionSetRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteInstanceAccessControlAttributeConfigurationResponse {
	}
	export interface DeleteInstanceAccessControlAttributeConfigurationResponseFormProperties {
	}
	export function CreateDeleteInstanceAccessControlAttributeConfigurationResponseFormGroup() {
		return new FormGroup<DeleteInstanceAccessControlAttributeConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteInstanceAccessControlAttributeConfigurationRequest {

		/** Required */
		InstanceArn: string;
	}
	export interface DeleteInstanceAccessControlAttributeConfigurationRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteInstanceAccessControlAttributeConfigurationRequestFormGroup() {
		return new FormGroup<DeleteInstanceAccessControlAttributeConfigurationRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePermissionSetResponse {
	}
	export interface DeletePermissionSetResponseFormProperties {
	}
	export function CreateDeletePermissionSetResponseFormGroup() {
		return new FormGroup<DeletePermissionSetResponseFormProperties>({
		});

	}

	export interface DeletePermissionSetRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		PermissionSetArn: string;
	}
	export interface DeletePermissionSetRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePermissionSetRequestFormGroup() {
		return new FormGroup<DeletePermissionSetRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePermissionsBoundaryFromPermissionSetResponse {
	}
	export interface DeletePermissionsBoundaryFromPermissionSetResponseFormProperties {
	}
	export function CreateDeletePermissionsBoundaryFromPermissionSetResponseFormGroup() {
		return new FormGroup<DeletePermissionsBoundaryFromPermissionSetResponseFormProperties>({
		});

	}

	export interface DeletePermissionsBoundaryFromPermissionSetRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		PermissionSetArn: string;
	}
	export interface DeletePermissionsBoundaryFromPermissionSetRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,
	}
	export function CreateDeletePermissionsBoundaryFromPermissionSetRequestFormGroup() {
		return new FormGroup<DeletePermissionsBoundaryFromPermissionSetRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAccountAssignmentCreationStatusResponse {
		AccountAssignmentCreationStatus?: AccountAssignmentOperationStatus;
	}
	export interface DescribeAccountAssignmentCreationStatusResponseFormProperties {
	}
	export function CreateDescribeAccountAssignmentCreationStatusResponseFormGroup() {
		return new FormGroup<DescribeAccountAssignmentCreationStatusResponseFormProperties>({
		});

	}

	export interface DescribeAccountAssignmentCreationStatusRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		AccountAssignmentCreationRequestId: string;
	}
	export interface DescribeAccountAssignmentCreationStatusRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		AccountAssignmentCreationRequestId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountAssignmentCreationStatusRequestFormGroup() {
		return new FormGroup<DescribeAccountAssignmentCreationStatusRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountAssignmentCreationRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAccountAssignmentDeletionStatusResponse {
		AccountAssignmentDeletionStatus?: AccountAssignmentOperationStatus;
	}
	export interface DescribeAccountAssignmentDeletionStatusResponseFormProperties {
	}
	export function CreateDescribeAccountAssignmentDeletionStatusResponseFormGroup() {
		return new FormGroup<DescribeAccountAssignmentDeletionStatusResponseFormProperties>({
		});

	}

	export interface DescribeAccountAssignmentDeletionStatusRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		AccountAssignmentDeletionRequestId: string;
	}
	export interface DescribeAccountAssignmentDeletionStatusRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		AccountAssignmentDeletionRequestId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountAssignmentDeletionStatusRequestFormGroup() {
		return new FormGroup<DescribeAccountAssignmentDeletionStatusRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountAssignmentDeletionRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeInstanceAccessControlAttributeConfigurationResponse {
		Status?: InstanceAccessControlAttributeConfigurationStatus;
		StatusReason?: string;
		InstanceAccessControlAttributeConfiguration?: InstanceAccessControlAttributeConfiguration;
	}
	export interface DescribeInstanceAccessControlAttributeConfigurationResponseFormProperties {
		Status: FormControl<InstanceAccessControlAttributeConfigurationStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstanceAccessControlAttributeConfigurationResponseFormGroup() {
		return new FormGroup<DescribeInstanceAccessControlAttributeConfigurationResponseFormProperties>({
			Status: new FormControl<InstanceAccessControlAttributeConfigurationStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceAccessControlAttributeConfigurationStatus { ENABLED = 0, CREATION_IN_PROGRESS = 1, CREATION_FAILED = 2 }

	export interface DescribeInstanceAccessControlAttributeConfigurationRequest {

		/** Required */
		InstanceArn: string;
	}
	export interface DescribeInstanceAccessControlAttributeConfigurationRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInstanceAccessControlAttributeConfigurationRequestFormGroup() {
		return new FormGroup<DescribeInstanceAccessControlAttributeConfigurationRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribePermissionSetResponse {
		PermissionSet?: PermissionSet;
	}
	export interface DescribePermissionSetResponseFormProperties {
	}
	export function CreateDescribePermissionSetResponseFormGroup() {
		return new FormGroup<DescribePermissionSetResponseFormProperties>({
		});

	}

	export interface DescribePermissionSetRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		PermissionSetArn: string;
	}
	export interface DescribePermissionSetRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribePermissionSetRequestFormGroup() {
		return new FormGroup<DescribePermissionSetRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribePermissionSetProvisioningStatusResponse {
		PermissionSetProvisioningStatus?: PermissionSetProvisioningStatus;
	}
	export interface DescribePermissionSetProvisioningStatusResponseFormProperties {
	}
	export function CreateDescribePermissionSetProvisioningStatusResponseFormGroup() {
		return new FormGroup<DescribePermissionSetProvisioningStatusResponseFormProperties>({
		});

	}


	/** A structure that is used to provide the status of the provisioning operation for a specified permission set. */
	export interface PermissionSetProvisioningStatus {
		Status?: StatusValues;
		RequestId?: string;
		AccountId?: string;
		PermissionSetArn?: string;
		FailureReason?: string;
		CreatedDate?: Date;
	}

	/** A structure that is used to provide the status of the provisioning operation for a specified permission set. */
	export interface PermissionSetProvisioningStatusFormProperties {
		Status: FormControl<StatusValues | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		PermissionSetArn: FormControl<string | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
	}
	export function CreatePermissionSetProvisioningStatusFormGroup() {
		return new FormGroup<PermissionSetProvisioningStatusFormProperties>({
			Status: new FormControl<StatusValues | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribePermissionSetProvisioningStatusRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		ProvisionPermissionSetRequestId: string;
	}
	export interface DescribePermissionSetProvisioningStatusRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		ProvisionPermissionSetRequestId: FormControl<string | null | undefined>,
	}
	export function CreateDescribePermissionSetProvisioningStatusRequestFormGroup() {
		return new FormGroup<DescribePermissionSetProvisioningStatusRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProvisionPermissionSetRequestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetachCustomerManagedPolicyReferenceFromPermissionSetResponse {
	}
	export interface DetachCustomerManagedPolicyReferenceFromPermissionSetResponseFormProperties {
	}
	export function CreateDetachCustomerManagedPolicyReferenceFromPermissionSetResponseFormGroup() {
		return new FormGroup<DetachCustomerManagedPolicyReferenceFromPermissionSetResponseFormProperties>({
		});

	}

	export interface DetachCustomerManagedPolicyReferenceFromPermissionSetRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		PermissionSetArn: string;

		/** Required */
		CustomerManagedPolicyReference: CustomerManagedPolicyReference;
	}
	export interface DetachCustomerManagedPolicyReferenceFromPermissionSetRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,
	}
	export function CreateDetachCustomerManagedPolicyReferenceFromPermissionSetRequestFormGroup() {
		return new FormGroup<DetachCustomerManagedPolicyReferenceFromPermissionSetRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetachManagedPolicyFromPermissionSetResponse {
	}
	export interface DetachManagedPolicyFromPermissionSetResponseFormProperties {
	}
	export function CreateDetachManagedPolicyFromPermissionSetResponseFormGroup() {
		return new FormGroup<DetachManagedPolicyFromPermissionSetResponseFormProperties>({
		});

	}

	export interface DetachManagedPolicyFromPermissionSetRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		PermissionSetArn: string;

		/** Required */
		ManagedPolicyArn: string;
	}
	export interface DetachManagedPolicyFromPermissionSetRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,

		/** Required */
		ManagedPolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateDetachManagedPolicyFromPermissionSetRequestFormGroup() {
		return new FormGroup<DetachManagedPolicyFromPermissionSetRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ManagedPolicyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetInlinePolicyForPermissionSetResponse {
		InlinePolicy?: string;
	}
	export interface GetInlinePolicyForPermissionSetResponseFormProperties {
		InlinePolicy: FormControl<string | null | undefined>,
	}
	export function CreateGetInlinePolicyForPermissionSetResponseFormGroup() {
		return new FormGroup<GetInlinePolicyForPermissionSetResponseFormProperties>({
			InlinePolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInlinePolicyForPermissionSetRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		PermissionSetArn: string;
	}
	export interface GetInlinePolicyForPermissionSetRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,
	}
	export function CreateGetInlinePolicyForPermissionSetRequestFormGroup() {
		return new FormGroup<GetInlinePolicyForPermissionSetRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPermissionsBoundaryForPermissionSetResponse {
		PermissionsBoundary?: PermissionsBoundary;
	}
	export interface GetPermissionsBoundaryForPermissionSetResponseFormProperties {
	}
	export function CreateGetPermissionsBoundaryForPermissionSetResponseFormGroup() {
		return new FormGroup<GetPermissionsBoundaryForPermissionSetResponseFormProperties>({
		});

	}


	/** <p>Specifies the configuration of the AWS managed or customer managed policy that you want to set as a permissions boundary. Specify either <code>CustomerManagedPolicyReference</code> to use the name and path of a customer managed policy, or <code>ManagedPolicyArn</code> to use the ARN of an AWS managed policy. A permissions boundary represents the maximum permissions that any policy can grant your role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM entities</a> in the <i>IAM User Guide</i>.</p> <important> <p>Policies used as permissions boundaries don't provide permissions. You must also attach an IAM policy to the role. To learn how the effective permissions for a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the <i>IAM User Guide</i>.</p> </important> */
	export interface PermissionsBoundary {
		CustomerManagedPolicyReference?: CustomerManagedPolicyReference;
		ManagedPolicyArn?: string;
	}

	/** <p>Specifies the configuration of the AWS managed or customer managed policy that you want to set as a permissions boundary. Specify either <code>CustomerManagedPolicyReference</code> to use the name and path of a customer managed policy, or <code>ManagedPolicyArn</code> to use the ARN of an AWS managed policy. A permissions boundary represents the maximum permissions that any policy can grant your role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions boundaries for IAM entities</a> in the <i>IAM User Guide</i>.</p> <important> <p>Policies used as permissions boundaries don't provide permissions. You must also attach an IAM policy to the role. To learn how the effective permissions for a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy evaluation logic</a> in the <i>IAM User Guide</i>.</p> </important> */
	export interface PermissionsBoundaryFormProperties {
		ManagedPolicyArn: FormControl<string | null | undefined>,
	}
	export function CreatePermissionsBoundaryFormGroup() {
		return new FormGroup<PermissionsBoundaryFormProperties>({
			ManagedPolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPermissionsBoundaryForPermissionSetRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		PermissionSetArn: string;
	}
	export interface GetPermissionsBoundaryForPermissionSetRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,
	}
	export function CreateGetPermissionsBoundaryForPermissionSetRequestFormGroup() {
		return new FormGroup<GetPermissionsBoundaryForPermissionSetRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAccountAssignmentCreationStatusResponse {
		AccountAssignmentsCreationStatus?: Array<AccountAssignmentOperationStatusMetadata>;
		NextToken?: string;
	}
	export interface ListAccountAssignmentCreationStatusResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountAssignmentCreationStatusResponseFormGroup() {
		return new FormGroup<ListAccountAssignmentCreationStatusResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the <a>AccountAssignment</a> creation request. */
	export interface AccountAssignmentOperationStatusMetadata {
		Status?: StatusValues;
		RequestId?: string;
		CreatedDate?: Date;
	}

	/** Provides information about the <a>AccountAssignment</a> creation request. */
	export interface AccountAssignmentOperationStatusMetadataFormProperties {
		Status: FormControl<StatusValues | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateAccountAssignmentOperationStatusMetadataFormGroup() {
		return new FormGroup<AccountAssignmentOperationStatusMetadataFormProperties>({
			Status: new FormControl<StatusValues | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAccountAssignmentCreationStatusRequest {

		/** Required */
		InstanceArn: string;
		MaxResults?: number | null;
		NextToken?: string;
		Filter?: OperationStatusFilter;
	}
	export interface ListAccountAssignmentCreationStatusRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountAssignmentCreationStatusRequestFormGroup() {
		return new FormGroup<ListAccountAssignmentCreationStatusRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters he operation status list based on the passed attribute value. */
	export interface OperationStatusFilter {
		Status?: StatusValues;
	}

	/** Filters he operation status list based on the passed attribute value. */
	export interface OperationStatusFilterFormProperties {
		Status: FormControl<StatusValues | null | undefined>,
	}
	export function CreateOperationStatusFilterFormGroup() {
		return new FormGroup<OperationStatusFilterFormProperties>({
			Status: new FormControl<StatusValues | null | undefined>(undefined),
		});

	}

	export interface ListAccountAssignmentDeletionStatusResponse {
		AccountAssignmentsDeletionStatus?: Array<AccountAssignmentOperationStatusMetadata>;
		NextToken?: string;
	}
	export interface ListAccountAssignmentDeletionStatusResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountAssignmentDeletionStatusResponseFormGroup() {
		return new FormGroup<ListAccountAssignmentDeletionStatusResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccountAssignmentDeletionStatusRequest {

		/** Required */
		InstanceArn: string;
		MaxResults?: number | null;
		NextToken?: string;
		Filter?: OperationStatusFilter;
	}
	export interface ListAccountAssignmentDeletionStatusRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountAssignmentDeletionStatusRequestFormGroup() {
		return new FormGroup<ListAccountAssignmentDeletionStatusRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccountAssignmentsResponse {
		AccountAssignments?: Array<AccountAssignment>;
		NextToken?: string;
	}
	export interface ListAccountAssignmentsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountAssignmentsResponseFormGroup() {
		return new FormGroup<ListAccountAssignmentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The assignment that indicates a principal's limited access to a specified AWS account with a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in IAM Identity Center.</p> </note> */
	export interface AccountAssignment {
		AccountId?: string;
		PermissionSetArn?: string;
		PrincipalType?: PrincipalType;
		PrincipalId?: string;
	}

	/** <p>The assignment that indicates a principal's limited access to a specified AWS account with a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in IAM Identity Center.</p> </note> */
	export interface AccountAssignmentFormProperties {
		AccountId: FormControl<string | null | undefined>,
		PermissionSetArn: FormControl<string | null | undefined>,
		PrincipalType: FormControl<PrincipalType | null | undefined>,
		PrincipalId: FormControl<string | null | undefined>,
	}
	export function CreateAccountAssignmentFormGroup() {
		return new FormGroup<AccountAssignmentFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined),
			PrincipalType: new FormControl<PrincipalType | null | undefined>(undefined),
			PrincipalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccountAssignmentsRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		AccountId: string;

		/** Required */
		PermissionSetArn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListAccountAssignmentsRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		AccountId: FormControl<string | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountAssignmentsRequestFormGroup() {
		return new FormGroup<ListAccountAssignmentsRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccountsForProvisionedPermissionSetResponse {
		AccountIds?: Array<string>;
		NextToken?: string;
	}
	export interface ListAccountsForProvisionedPermissionSetResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountsForProvisionedPermissionSetResponseFormGroup() {
		return new FormGroup<ListAccountsForProvisionedPermissionSetResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccountsForProvisionedPermissionSetRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		PermissionSetArn: string;
		ProvisioningStatus?: ProvisioningStatus;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListAccountsForProvisionedPermissionSetRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,
		ProvisioningStatus: FormControl<ProvisioningStatus | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountsForProvisionedPermissionSetRequestFormGroup() {
		return new FormGroup<ListAccountsForProvisionedPermissionSetRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProvisioningStatus: new FormControl<ProvisioningStatus | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProvisioningStatus { LATEST_PERMISSION_SET_PROVISIONED = 0, LATEST_PERMISSION_SET_NOT_PROVISIONED = 1 }

	export interface ListCustomerManagedPolicyReferencesInPermissionSetResponse {
		CustomerManagedPolicyReferences?: Array<CustomerManagedPolicyReference>;
		NextToken?: string;
	}
	export interface ListCustomerManagedPolicyReferencesInPermissionSetResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomerManagedPolicyReferencesInPermissionSetResponseFormGroup() {
		return new FormGroup<ListCustomerManagedPolicyReferencesInPermissionSetResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomerManagedPolicyReferencesInPermissionSetRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		PermissionSetArn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListCustomerManagedPolicyReferencesInPermissionSetRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomerManagedPolicyReferencesInPermissionSetRequestFormGroup() {
		return new FormGroup<ListCustomerManagedPolicyReferencesInPermissionSetRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInstancesResponse {
		Instances?: Array<InstanceMetadata>;
		NextToken?: string;
	}
	export interface ListInstancesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstancesResponseFormGroup() {
		return new FormGroup<ListInstancesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the IAM Identity Center instance. */
	export interface InstanceMetadata {
		InstanceArn?: string;
		IdentityStoreId?: string;
	}

	/** Provides information about the IAM Identity Center instance. */
	export interface InstanceMetadataFormProperties {
		InstanceArn: FormControl<string | null | undefined>,
		IdentityStoreId: FormControl<string | null | undefined>,
	}
	export function CreateInstanceMetadataFormGroup() {
		return new FormGroup<InstanceMetadataFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined),
			IdentityStoreId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInstancesRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListInstancesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstancesRequestFormGroup() {
		return new FormGroup<ListInstancesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListManagedPoliciesInPermissionSetResponse {
		AttachedManagedPolicies?: Array<AttachedManagedPolicy>;
		NextToken?: string;
	}
	export interface ListManagedPoliciesInPermissionSetResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListManagedPoliciesInPermissionSetResponseFormGroup() {
		return new FormGroup<ListManagedPoliciesInPermissionSetResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that stores the details of the AWS managed policy. */
	export interface AttachedManagedPolicy {
		Name?: string;
		Arn?: string;
	}

	/** A structure that stores the details of the AWS managed policy. */
	export interface AttachedManagedPolicyFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateAttachedManagedPolicyFormGroup() {
		return new FormGroup<AttachedManagedPolicyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListManagedPoliciesInPermissionSetRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		PermissionSetArn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListManagedPoliciesInPermissionSetRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListManagedPoliciesInPermissionSetRequestFormGroup() {
		return new FormGroup<ListManagedPoliciesInPermissionSetRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPermissionSetProvisioningStatusResponse {
		PermissionSetsProvisioningStatus?: Array<PermissionSetProvisioningStatusMetadata>;
		NextToken?: string;
	}
	export interface ListPermissionSetProvisioningStatusResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPermissionSetProvisioningStatusResponseFormGroup() {
		return new FormGroup<ListPermissionSetProvisioningStatusResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the permission set provisioning status. */
	export interface PermissionSetProvisioningStatusMetadata {
		Status?: StatusValues;
		RequestId?: string;
		CreatedDate?: Date;
	}

	/** Provides information about the permission set provisioning status. */
	export interface PermissionSetProvisioningStatusMetadataFormProperties {
		Status: FormControl<StatusValues | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
	}
	export function CreatePermissionSetProvisioningStatusMetadataFormGroup() {
		return new FormGroup<PermissionSetProvisioningStatusMetadataFormProperties>({
			Status: new FormControl<StatusValues | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListPermissionSetProvisioningStatusRequest {

		/** Required */
		InstanceArn: string;
		MaxResults?: number | null;
		NextToken?: string;
		Filter?: OperationStatusFilter;
	}
	export interface ListPermissionSetProvisioningStatusRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPermissionSetProvisioningStatusRequestFormGroup() {
		return new FormGroup<ListPermissionSetProvisioningStatusRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPermissionSetsResponse {
		PermissionSets?: Array<string>;
		NextToken?: string;
	}
	export interface ListPermissionSetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPermissionSetsResponseFormGroup() {
		return new FormGroup<ListPermissionSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPermissionSetsRequest {

		/** Required */
		InstanceArn: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListPermissionSetsRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPermissionSetsRequestFormGroup() {
		return new FormGroup<ListPermissionSetsRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPermissionSetsProvisionedToAccountResponse {
		NextToken?: string;
		PermissionSets?: Array<string>;
	}
	export interface ListPermissionSetsProvisionedToAccountResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPermissionSetsProvisionedToAccountResponseFormGroup() {
		return new FormGroup<ListPermissionSetsProvisionedToAccountResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPermissionSetsProvisionedToAccountRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		AccountId: string;
		ProvisioningStatus?: ProvisioningStatus;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListPermissionSetsProvisionedToAccountRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		AccountId: FormControl<string | null | undefined>,
		ProvisioningStatus: FormControl<ProvisioningStatus | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPermissionSetsProvisionedToAccountRequestFormGroup() {
		return new FormGroup<ListPermissionSetsProvisionedToAccountRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProvisioningStatus: new FormControl<ProvisioningStatus | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
		NextToken?: string;
	}
	export interface ListTagsForResourceResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		ResourceArn: string;
		NextToken?: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvisionPermissionSetResponse {
		PermissionSetProvisioningStatus?: PermissionSetProvisioningStatus;
	}
	export interface ProvisionPermissionSetResponseFormProperties {
	}
	export function CreateProvisionPermissionSetResponseFormGroup() {
		return new FormGroup<ProvisionPermissionSetResponseFormProperties>({
		});

	}

	export interface ProvisionPermissionSetRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		PermissionSetArn: string;
		TargetId?: string;

		/** Required */
		TargetType: ProvisionTargetType;
	}
	export interface ProvisionPermissionSetRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,
		TargetId: FormControl<string | null | undefined>,

		/** Required */
		TargetType: FormControl<ProvisionTargetType | null | undefined>,
	}
	export function CreateProvisionPermissionSetRequestFormGroup() {
		return new FormGroup<ProvisionPermissionSetRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetId: new FormControl<string | null | undefined>(undefined),
			TargetType: new FormControl<ProvisionTargetType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ProvisionTargetType { AWS_ACCOUNT = 0, ALL_PROVISIONED_ACCOUNTS = 1 }

	export interface PutInlinePolicyToPermissionSetResponse {
	}
	export interface PutInlinePolicyToPermissionSetResponseFormProperties {
	}
	export function CreatePutInlinePolicyToPermissionSetResponseFormGroup() {
		return new FormGroup<PutInlinePolicyToPermissionSetResponseFormProperties>({
		});

	}

	export interface PutInlinePolicyToPermissionSetRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		PermissionSetArn: string;

		/** Required */
		InlinePolicy: string;
	}
	export interface PutInlinePolicyToPermissionSetRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,

		/** Required */
		InlinePolicy: FormControl<string | null | undefined>,
	}
	export function CreatePutInlinePolicyToPermissionSetRequestFormGroup() {
		return new FormGroup<PutInlinePolicyToPermissionSetRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InlinePolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutPermissionsBoundaryToPermissionSetResponse {
	}
	export interface PutPermissionsBoundaryToPermissionSetResponseFormProperties {
	}
	export function CreatePutPermissionsBoundaryToPermissionSetResponseFormGroup() {
		return new FormGroup<PutPermissionsBoundaryToPermissionSetResponseFormProperties>({
		});

	}

	export interface PutPermissionsBoundaryToPermissionSetRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		PermissionSetArn: string;

		/** Required */
		PermissionsBoundary: PermissionsBoundary;
	}
	export interface PutPermissionsBoundaryToPermissionSetRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,
	}
	export function CreatePutPermissionsBoundaryToPermissionSetRequestFormGroup() {
		return new FormGroup<PutPermissionsBoundaryToPermissionSetRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		InstanceArn: string;

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		InstanceArn: string;

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateInstanceAccessControlAttributeConfigurationResponse {
	}
	export interface UpdateInstanceAccessControlAttributeConfigurationResponseFormProperties {
	}
	export function CreateUpdateInstanceAccessControlAttributeConfigurationResponseFormGroup() {
		return new FormGroup<UpdateInstanceAccessControlAttributeConfigurationResponseFormProperties>({
		});

	}

	export interface UpdateInstanceAccessControlAttributeConfigurationRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration;
	}
	export interface UpdateInstanceAccessControlAttributeConfigurationRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInstanceAccessControlAttributeConfigurationRequestFormGroup() {
		return new FormGroup<UpdateInstanceAccessControlAttributeConfigurationRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatePermissionSetResponse {
	}
	export interface UpdatePermissionSetResponseFormProperties {
	}
	export function CreateUpdatePermissionSetResponseFormGroup() {
		return new FormGroup<UpdatePermissionSetResponseFormProperties>({
		});

	}

	export interface UpdatePermissionSetRequest {

		/** Required */
		InstanceArn: string;

		/** Required */
		PermissionSetArn: string;
		Description?: string;
		SessionDuration?: string;
		RelayState?: string;
	}
	export interface UpdatePermissionSetRequestFormProperties {

		/** Required */
		InstanceArn: FormControl<string | null | undefined>,

		/** Required */
		PermissionSetArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		SessionDuration: FormControl<string | null | undefined>,
		RelayState: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePermissionSetRequestFormGroup() {
		return new FormGroup<UpdatePermissionSetRequestFormProperties>({
			InstanceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			SessionDuration: new FormControl<string | null | undefined>(undefined),
			RelayState: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Attaches the specified customer managed policy to the specified <a>PermissionSet</a>.
		 * Post #X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet
		 * @return {AttachCustomerManagedPolicyReferenceToPermissionSetResponse} Success
		 */
		AttachCustomerManagedPolicyReferenceToPermissionSet(requestBody: AttachCustomerManagedPolicyReferenceToPermissionSetRequest): Observable<AttachCustomerManagedPolicyReferenceToPermissionSetResponse> {
			return this.http.post<AttachCustomerManagedPolicyReferenceToPermissionSetResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches an AWS managed policy ARN to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this operation. Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates to all assigned accounts.</p> </note>
		 * Post #X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet
		 * @return {AttachManagedPolicyToPermissionSetResponse} Success
		 */
		AttachManagedPolicyToPermissionSet(requestBody: AttachManagedPolicyToPermissionSetRequest): Observable<AttachManagedPolicyToPermissionSetResponse> {
			return this.http.post<AttachManagedPolicyToPermissionSetResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.AttachManagedPolicyToPermissionSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Assigns access to a principal for a specified AWS account using a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in IAM Identity Center.</p> </note> <note> <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call <code> <a>ProvisionPermissionSet</a> </code> to make these updates.</p> </note> <note> <p> After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment creation request. </p> </note>
		 * Post #X-Amz-Target=SWBExternalService.CreateAccountAssignment
		 * @return {CreateAccountAssignmentResponse} Success
		 */
		CreateAccountAssignment(requestBody: CreateAccountAssignmentRequest): Observable<CreateAccountAssignmentResponse> {
			return this.http.post<CreateAccountAssignmentResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.CreateAccountAssignment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p> <note> <p>After a successful response, call <code>DescribeInstanceAccessControlAttributeConfiguration</code> to validate that <code>InstanceAccessControlAttributeConfiguration</code> was created.</p> </note>
		 * Post #X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration
		 * @return {CreateInstanceAccessControlAttributeConfigurationResponse} Success
		 */
		CreateInstanceAccessControlAttributeConfiguration(requestBody: CreateInstanceAccessControlAttributeConfigurationRequest): Observable<CreateInstanceAccessControlAttributeConfigurationResponse> {
			return this.http.post<CreateInstanceAccessControlAttributeConfigurationResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.CreateInstanceAccessControlAttributeConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a permission set within a specified IAM Identity Center instance.</p> <note> <p>To grant users and groups access to AWS account resources, use <code> <a>CreateAccountAssignment</a> </code>.</p> </note>
		 * Post #X-Amz-Target=SWBExternalService.CreatePermissionSet
		 * @return {CreatePermissionSetResponse} Success
		 */
		CreatePermissionSet(requestBody: CreatePermissionSetRequest): Observable<CreatePermissionSetResponse> {
			return this.http.post<CreatePermissionSetResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.CreatePermissionSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a principal's access from a specified AWS account using a specified permission set.</p> <note> <p>After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment deletion request.</p> </note>
		 * Post #X-Amz-Target=SWBExternalService.DeleteAccountAssignment
		 * @return {DeleteAccountAssignmentResponse} Success
		 */
		DeleteAccountAssignment(requestBody: DeleteAccountAssignmentRequest): Observable<DeleteAccountAssignmentResponse> {
			return this.http.post<DeleteAccountAssignmentResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.DeleteAccountAssignment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the inline policy from a specified permission set.
		 * Post #X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet
		 * @return {DeleteInlinePolicyFromPermissionSetResponse} Success
		 */
		DeleteInlinePolicyFromPermissionSet(requestBody: DeleteInlinePolicyFromPermissionSetRequest): Observable<DeleteInlinePolicyFromPermissionSetResponse> {
			return this.http.post<DeleteInlinePolicyFromPermissionSetResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.DeleteInlinePolicyFromPermissionSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
		 * Post #X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration
		 * @return {DeleteInstanceAccessControlAttributeConfigurationResponse} Success
		 */
		DeleteInstanceAccessControlAttributeConfiguration(requestBody: DeleteInstanceAccessControlAttributeConfigurationRequest): Observable<DeleteInstanceAccessControlAttributeConfigurationResponse> {
			return this.http.post<DeleteInstanceAccessControlAttributeConfigurationResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified permission set.
		 * Post #X-Amz-Target=SWBExternalService.DeletePermissionSet
		 * @return {DeletePermissionSetResponse} Success
		 */
		DeletePermissionSet(requestBody: DeletePermissionSetRequest): Observable<DeletePermissionSetResponse> {
			return this.http.post<DeletePermissionSetResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.DeletePermissionSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the permissions boundary from a specified <a>PermissionSet</a>.
		 * Post #X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet
		 * @return {DeletePermissionsBoundaryFromPermissionSetResponse} Success
		 */
		DeletePermissionsBoundaryFromPermissionSet(requestBody: DeletePermissionsBoundaryFromPermissionSetRequest): Observable<DeletePermissionsBoundaryFromPermissionSetResponse> {
			return this.http.post<DeletePermissionsBoundaryFromPermissionSetResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.DeletePermissionsBoundaryFromPermissionSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the status of the assignment creation request.
		 * Post #X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus
		 * @return {DescribeAccountAssignmentCreationStatusResponse} Success
		 */
		DescribeAccountAssignmentCreationStatus(requestBody: DescribeAccountAssignmentCreationStatusRequest): Observable<DescribeAccountAssignmentCreationStatusResponse> {
			return this.http.post<DescribeAccountAssignmentCreationStatusResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentCreationStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the status of the assignment deletion request.
		 * Post #X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus
		 * @return {DescribeAccountAssignmentDeletionStatusResponse} Success
		 */
		DescribeAccountAssignmentDeletionStatus(requestBody: DescribeAccountAssignmentDeletionStatusRequest): Observable<DescribeAccountAssignmentDeletionStatusResponse> {
			return this.http.post<DescribeAccountAssignmentDeletionStatusResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.DescribeAccountAssignmentDeletionStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
		 * Post #X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration
		 * @return {DescribeInstanceAccessControlAttributeConfigurationResponse} Success
		 */
		DescribeInstanceAccessControlAttributeConfiguration(requestBody: DescribeInstanceAccessControlAttributeConfigurationRequest): Observable<DescribeInstanceAccessControlAttributeConfigurationResponse> {
			return this.http.post<DescribeInstanceAccessControlAttributeConfigurationResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the details of the permission set.
		 * Post #X-Amz-Target=SWBExternalService.DescribePermissionSet
		 * @return {DescribePermissionSetResponse} Success
		 */
		DescribePermissionSet(requestBody: DescribePermissionSetRequest): Observable<DescribePermissionSetResponse> {
			return this.http.post<DescribePermissionSetResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.DescribePermissionSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the status for the given permission set provisioning request.
		 * Post #X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus
		 * @return {DescribePermissionSetProvisioningStatusResponse} Success
		 */
		DescribePermissionSetProvisioningStatus(requestBody: DescribePermissionSetProvisioningStatusRequest): Observable<DescribePermissionSetProvisioningStatusResponse> {
			return this.http.post<DescribePermissionSetProvisioningStatusResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.DescribePermissionSetProvisioningStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detaches the specified customer managed policy from the specified <a>PermissionSet</a>.
		 * Post #X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet
		 * @return {DetachCustomerManagedPolicyReferenceFromPermissionSetResponse} Success
		 */
		DetachCustomerManagedPolicyReferenceFromPermissionSet(requestBody: DetachCustomerManagedPolicyReferenceFromPermissionSetRequest): Observable<DetachCustomerManagedPolicyReferenceFromPermissionSetResponse> {
			return this.http.post<DetachCustomerManagedPolicyReferenceFromPermissionSetResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detaches the attached AWS managed policy ARN from the specified permission set.
		 * Post #X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet
		 * @return {DetachManagedPolicyFromPermissionSetResponse} Success
		 */
		DetachManagedPolicyFromPermissionSet(requestBody: DetachManagedPolicyFromPermissionSetRequest): Observable<DetachManagedPolicyFromPermissionSetResponse> {
			return this.http.post<DetachManagedPolicyFromPermissionSetResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.DetachManagedPolicyFromPermissionSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Obtains the inline policy assigned to the permission set.
		 * Post #X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet
		 * @return {GetInlinePolicyForPermissionSetResponse} Success
		 */
		GetInlinePolicyForPermissionSet(requestBody: GetInlinePolicyForPermissionSetRequest): Observable<GetInlinePolicyForPermissionSetResponse> {
			return this.http.post<GetInlinePolicyForPermissionSetResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.GetInlinePolicyForPermissionSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Obtains the permissions boundary for a specified <a>PermissionSet</a>.
		 * Post #X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet
		 * @return {GetPermissionsBoundaryForPermissionSetResponse} Success
		 */
		GetPermissionsBoundaryForPermissionSet(requestBody: GetPermissionsBoundaryForPermissionSetRequest): Observable<GetPermissionsBoundaryForPermissionSetResponse> {
			return this.http.post<GetPermissionsBoundaryForPermissionSetResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.GetPermissionsBoundaryForPermissionSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the status of the AWS account assignment creation requests for a specified IAM Identity Center instance.
		 * Post #X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAccountAssignmentCreationStatusResponse} Success
		 */
		ListAccountAssignmentCreationStatus(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAccountAssignmentCreationStatusRequest): Observable<ListAccountAssignmentCreationStatusResponse> {
			return this.http.post<ListAccountAssignmentCreationStatusResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.ListAccountAssignmentCreationStatus?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the status of the AWS account assignment deletion requests for a specified IAM Identity Center instance.
		 * Post #X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAccountAssignmentDeletionStatusResponse} Success
		 */
		ListAccountAssignmentDeletionStatus(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAccountAssignmentDeletionStatusRequest): Observable<ListAccountAssignmentDeletionStatusResponse> {
			return this.http.post<ListAccountAssignmentDeletionStatusResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.ListAccountAssignmentDeletionStatus?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the assignee of the specified AWS account with the specified permission set.
		 * Post #X-Amz-Target=SWBExternalService.ListAccountAssignments
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAccountAssignmentsResponse} Success
		 */
		ListAccountAssignments(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAccountAssignmentsRequest): Observable<ListAccountAssignmentsResponse> {
			return this.http.post<ListAccountAssignmentsResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.ListAccountAssignments?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the AWS accounts where the specified permission set is provisioned.
		 * Post #X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAccountsForProvisionedPermissionSetResponse} Success
		 */
		ListAccountsForProvisionedPermissionSet(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAccountsForProvisionedPermissionSetRequest): Observable<ListAccountsForProvisionedPermissionSetResponse> {
			return this.http.post<ListAccountsForProvisionedPermissionSetResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.ListAccountsForProvisionedPermissionSet?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all customer managed policies attached to a specified <a>PermissionSet</a>.
		 * Post #X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCustomerManagedPolicyReferencesInPermissionSetResponse} Success
		 */
		ListCustomerManagedPolicyReferencesInPermissionSet(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCustomerManagedPolicyReferencesInPermissionSetRequest): Observable<ListCustomerManagedPolicyReferencesInPermissionSetResponse> {
			return this.http.post<ListCustomerManagedPolicyReferencesInPermissionSetResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the IAM Identity Center instances that the caller has access to.
		 * Post #X-Amz-Target=SWBExternalService.ListInstances
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInstancesResponse} Success
		 */
		ListInstances(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListInstancesRequest): Observable<ListInstancesResponse> {
			return this.http.post<ListInstancesResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.ListInstances?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the AWS managed policy that is attached to a specified permission set.
		 * Post #X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListManagedPoliciesInPermissionSetResponse} Success
		 */
		ListManagedPoliciesInPermissionSet(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListManagedPoliciesInPermissionSetRequest): Observable<ListManagedPoliciesInPermissionSetResponse> {
			return this.http.post<ListManagedPoliciesInPermissionSetResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.ListManagedPoliciesInPermissionSet?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.
		 * Post #X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPermissionSetProvisioningStatusResponse} Success
		 */
		ListPermissionSetProvisioningStatus(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPermissionSetProvisioningStatusRequest): Observable<ListPermissionSetProvisioningStatusResponse> {
			return this.http.post<ListPermissionSetProvisioningStatusResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.ListPermissionSetProvisioningStatus?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the <a>PermissionSet</a>s in an IAM Identity Center instance.
		 * Post #X-Amz-Target=SWBExternalService.ListPermissionSets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPermissionSetsResponse} Success
		 */
		ListPermissionSets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPermissionSetsRequest): Observable<ListPermissionSetsResponse> {
			return this.http.post<ListPermissionSetsResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.ListPermissionSets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the permission sets that are provisioned to a specified AWS account.
		 * Post #X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPermissionSetsProvisionedToAccountResponse} Success
		 */
		ListPermissionSetsProvisionedToAccount(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPermissionSetsProvisionedToAccountRequest): Observable<ListPermissionSetsProvisionedToAccountResponse> {
			return this.http.post<ListPermissionSetsProvisionedToAccountResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.ListPermissionSetsProvisionedToAccount?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags that are attached to a specified resource.
		 * Post #X-Amz-Target=SWBExternalService.ListTagsForResource
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(NextToken: string | null | undefined, requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.ListTagsForResource?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The process by which a specified permission set is provisioned to the specified target.
		 * Post #X-Amz-Target=SWBExternalService.ProvisionPermissionSet
		 * @return {ProvisionPermissionSetResponse} Success
		 */
		ProvisionPermissionSet(requestBody: ProvisionPermissionSetRequest): Observable<ProvisionPermissionSetResponse> {
			return this.http.post<ProvisionPermissionSetResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.ProvisionPermissionSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches an inline policy to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p> </note>
		 * Post #X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet
		 * @return {PutInlinePolicyToPermissionSetResponse} Success
		 */
		PutInlinePolicyToPermissionSet(requestBody: PutInlinePolicyToPermissionSetRequest): Observable<PutInlinePolicyToPermissionSetResponse> {
			return this.http.post<PutInlinePolicyToPermissionSetResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.PutInlinePolicyToPermissionSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attaches an AWS managed or customer managed policy to the specified <a>PermissionSet</a> as a permissions boundary.
		 * Post #X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet
		 * @return {PutPermissionsBoundaryToPermissionSetResponse} Success
		 */
		PutPermissionsBoundaryToPermissionSet(requestBody: PutPermissionsBoundaryToPermissionSetRequest): Observable<PutPermissionsBoundaryToPermissionSetResponse> {
			return this.http.post<PutPermissionsBoundaryToPermissionSetResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.PutPermissionsBoundaryToPermissionSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a set of tags with a specified resource.
		 * Post #X-Amz-Target=SWBExternalService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a set of tags from a specified resource.
		 * Post #X-Amz-Target=SWBExternalService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.
		 * Post #X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration
		 * @return {UpdateInstanceAccessControlAttributeConfigurationResponse} Success
		 */
		UpdateInstanceAccessControlAttributeConfiguration(requestBody: UpdateInstanceAccessControlAttributeConfigurationRequest): Observable<UpdateInstanceAccessControlAttributeConfigurationResponse> {
			return this.http.post<UpdateInstanceAccessControlAttributeConfigurationResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing permission set.
		 * Post #X-Amz-Target=SWBExternalService.UpdatePermissionSet
		 * @return {UpdatePermissionSetResponse} Success
		 */
		UpdatePermissionSet(requestBody: UpdatePermissionSetRequest): Observable<UpdatePermissionSetResponse> {
			return this.http.post<UpdatePermissionSetResponse>(this.baseUri + '#X-Amz-Target=SWBExternalService.UpdatePermissionSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AttachCustomerManagedPolicyReferenceToPermissionSetX_Amz_Target { 'SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet' = 0 }

	export enum AttachManagedPolicyToPermissionSetX_Amz_Target { 'SWBExternalService.AttachManagedPolicyToPermissionSet' = 0 }

	export enum CreateAccountAssignmentX_Amz_Target { 'SWBExternalService.CreateAccountAssignment' = 0 }

	export enum CreateInstanceAccessControlAttributeConfigurationX_Amz_Target { 'SWBExternalService.CreateInstanceAccessControlAttributeConfiguration' = 0 }

	export enum CreatePermissionSetX_Amz_Target { 'SWBExternalService.CreatePermissionSet' = 0 }

	export enum DeleteAccountAssignmentX_Amz_Target { 'SWBExternalService.DeleteAccountAssignment' = 0 }

	export enum DeleteInlinePolicyFromPermissionSetX_Amz_Target { 'SWBExternalService.DeleteInlinePolicyFromPermissionSet' = 0 }

	export enum DeleteInstanceAccessControlAttributeConfigurationX_Amz_Target { 'SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration' = 0 }

	export enum DeletePermissionSetX_Amz_Target { 'SWBExternalService.DeletePermissionSet' = 0 }

	export enum DeletePermissionsBoundaryFromPermissionSetX_Amz_Target { 'SWBExternalService.DeletePermissionsBoundaryFromPermissionSet' = 0 }

	export enum DescribeAccountAssignmentCreationStatusX_Amz_Target { 'SWBExternalService.DescribeAccountAssignmentCreationStatus' = 0 }

	export enum DescribeAccountAssignmentDeletionStatusX_Amz_Target { 'SWBExternalService.DescribeAccountAssignmentDeletionStatus' = 0 }

	export enum DescribeInstanceAccessControlAttributeConfigurationX_Amz_Target { 'SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration' = 0 }

	export enum DescribePermissionSetX_Amz_Target { 'SWBExternalService.DescribePermissionSet' = 0 }

	export enum DescribePermissionSetProvisioningStatusX_Amz_Target { 'SWBExternalService.DescribePermissionSetProvisioningStatus' = 0 }

	export enum DetachCustomerManagedPolicyReferenceFromPermissionSetX_Amz_Target { 'SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet' = 0 }

	export enum DetachManagedPolicyFromPermissionSetX_Amz_Target { 'SWBExternalService.DetachManagedPolicyFromPermissionSet' = 0 }

	export enum GetInlinePolicyForPermissionSetX_Amz_Target { 'SWBExternalService.GetInlinePolicyForPermissionSet' = 0 }

	export enum GetPermissionsBoundaryForPermissionSetX_Amz_Target { 'SWBExternalService.GetPermissionsBoundaryForPermissionSet' = 0 }

	export enum ListAccountAssignmentCreationStatusX_Amz_Target { 'SWBExternalService.ListAccountAssignmentCreationStatus' = 0 }

	export enum ListAccountAssignmentDeletionStatusX_Amz_Target { 'SWBExternalService.ListAccountAssignmentDeletionStatus' = 0 }

	export enum ListAccountAssignmentsX_Amz_Target { 'SWBExternalService.ListAccountAssignments' = 0 }

	export enum ListAccountsForProvisionedPermissionSetX_Amz_Target { 'SWBExternalService.ListAccountsForProvisionedPermissionSet' = 0 }

	export enum ListCustomerManagedPolicyReferencesInPermissionSetX_Amz_Target { 'SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet' = 0 }

	export enum ListInstancesX_Amz_Target { 'SWBExternalService.ListInstances' = 0 }

	export enum ListManagedPoliciesInPermissionSetX_Amz_Target { 'SWBExternalService.ListManagedPoliciesInPermissionSet' = 0 }

	export enum ListPermissionSetProvisioningStatusX_Amz_Target { 'SWBExternalService.ListPermissionSetProvisioningStatus' = 0 }

	export enum ListPermissionSetsX_Amz_Target { 'SWBExternalService.ListPermissionSets' = 0 }

	export enum ListPermissionSetsProvisionedToAccountX_Amz_Target { 'SWBExternalService.ListPermissionSetsProvisionedToAccount' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'SWBExternalService.ListTagsForResource' = 0 }

	export enum ProvisionPermissionSetX_Amz_Target { 'SWBExternalService.ProvisionPermissionSet' = 0 }

	export enum PutInlinePolicyToPermissionSetX_Amz_Target { 'SWBExternalService.PutInlinePolicyToPermissionSet' = 0 }

	export enum PutPermissionsBoundaryToPermissionSetX_Amz_Target { 'SWBExternalService.PutPermissionsBoundaryToPermissionSet' = 0 }

	export enum TagResourceX_Amz_Target { 'SWBExternalService.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'SWBExternalService.UntagResource' = 0 }

	export enum UpdateInstanceAccessControlAttributeConfigurationX_Amz_Target { 'SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration' = 0 }

	export enum UpdatePermissionSetX_Amz_Target { 'SWBExternalService.UpdatePermissionSet' = 0 }

}

