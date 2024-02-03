import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptResourceShareInvitationResponse {
		resourceShareInvitation?: ResourceShareInvitation;
		clientToken?: string;
	}
	export interface AcceptResourceShareInvitationResponseFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAcceptResourceShareInvitationResponseFormGroup() {
		return new FormGroup<AcceptResourceShareInvitationResponseFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an invitation for an Amazon Web Services account to join a resource share. */
	export interface ResourceShareInvitation {
		resourceShareInvitationArn?: string;
		resourceShareName?: string;
		resourceShareArn?: string;
		senderAccountId?: string;
		receiverAccountId?: string;
		invitationTimestamp?: Date;
		status?: ResourceShareInvitationStatus;
		resourceShareAssociations?: Array<ResourceShareAssociation>;
		receiverArn?: string;
	}

	/** Describes an invitation for an Amazon Web Services account to join a resource share. */
	export interface ResourceShareInvitationFormProperties {
		resourceShareInvitationArn: FormControl<string | null | undefined>,
		resourceShareName: FormControl<string | null | undefined>,
		resourceShareArn: FormControl<string | null | undefined>,
		senderAccountId: FormControl<string | null | undefined>,
		receiverAccountId: FormControl<string | null | undefined>,
		invitationTimestamp: FormControl<Date | null | undefined>,
		status: FormControl<ResourceShareInvitationStatus | null | undefined>,
		receiverArn: FormControl<string | null | undefined>,
	}
	export function CreateResourceShareInvitationFormGroup() {
		return new FormGroup<ResourceShareInvitationFormProperties>({
			resourceShareInvitationArn: new FormControl<string | null | undefined>(undefined),
			resourceShareName: new FormControl<string | null | undefined>(undefined),
			resourceShareArn: new FormControl<string | null | undefined>(undefined),
			senderAccountId: new FormControl<string | null | undefined>(undefined),
			receiverAccountId: new FormControl<string | null | undefined>(undefined),
			invitationTimestamp: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ResourceShareInvitationStatus | null | undefined>(undefined),
			receiverArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceShareInvitationStatus { PENDING = 'PENDING', ACCEPTED = 'ACCEPTED', REJECTED = 'REJECTED', EXPIRED = 'EXPIRED' }


	/** Describes an association between a resource share and either a principal or a resource. */
	export interface ResourceShareAssociation {
		resourceShareArn?: string;
		resourceShareName?: string;
		associatedEntity?: string;
		associationType?: ResourceShareAssociationType;
		status?: ResourceShareAssociationStatus;
		statusMessage?: string;
		creationTime?: Date;
		lastUpdatedTime?: Date;
		external?: boolean | null;
	}

	/** Describes an association between a resource share and either a principal or a resource. */
	export interface ResourceShareAssociationFormProperties {
		resourceShareArn: FormControl<string | null | undefined>,
		resourceShareName: FormControl<string | null | undefined>,
		associatedEntity: FormControl<string | null | undefined>,
		associationType: FormControl<ResourceShareAssociationType | null | undefined>,
		status: FormControl<ResourceShareAssociationStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
		external: FormControl<boolean | null | undefined>,
	}
	export function CreateResourceShareAssociationFormGroup() {
		return new FormGroup<ResourceShareAssociationFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined),
			resourceShareName: new FormControl<string | null | undefined>(undefined),
			associatedEntity: new FormControl<string | null | undefined>(undefined),
			associationType: new FormControl<ResourceShareAssociationType | null | undefined>(undefined),
			status: new FormControl<ResourceShareAssociationStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			external: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ResourceShareAssociationType { PRINCIPAL = 'PRINCIPAL', RESOURCE = 'RESOURCE' }

	export enum ResourceShareAssociationStatus { ASSOCIATING = 'ASSOCIATING', ASSOCIATED = 'ASSOCIATED', FAILED = 'FAILED', DISASSOCIATING = 'DISASSOCIATING', DISASSOCIATED = 'DISASSOCIATED' }

	export interface MalformedArnException {
	}
	export interface MalformedArnExceptionFormProperties {
	}
	export function CreateMalformedArnExceptionFormGroup() {
		return new FormGroup<MalformedArnExceptionFormProperties>({
		});

	}

	export interface OperationNotPermittedException {
	}
	export interface OperationNotPermittedExceptionFormProperties {
	}
	export function CreateOperationNotPermittedExceptionFormGroup() {
		return new FormGroup<OperationNotPermittedExceptionFormProperties>({
		});

	}

	export interface ResourceShareInvitationArnNotFoundException {
	}
	export interface ResourceShareInvitationArnNotFoundExceptionFormProperties {
	}
	export function CreateResourceShareInvitationArnNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceShareInvitationArnNotFoundExceptionFormProperties>({
		});

	}

	export interface ResourceShareInvitationAlreadyAcceptedException {
	}
	export interface ResourceShareInvitationAlreadyAcceptedExceptionFormProperties {
	}
	export function CreateResourceShareInvitationAlreadyAcceptedExceptionFormGroup() {
		return new FormGroup<ResourceShareInvitationAlreadyAcceptedExceptionFormProperties>({
		});

	}

	export interface ResourceShareInvitationAlreadyRejectedException {
	}
	export interface ResourceShareInvitationAlreadyRejectedExceptionFormProperties {
	}
	export function CreateResourceShareInvitationAlreadyRejectedExceptionFormGroup() {
		return new FormGroup<ResourceShareInvitationAlreadyRejectedExceptionFormProperties>({
		});

	}

	export interface ResourceShareInvitationExpiredException {
	}
	export interface ResourceShareInvitationExpiredExceptionFormProperties {
	}
	export function CreateResourceShareInvitationExpiredExceptionFormGroup() {
		return new FormGroup<ResourceShareInvitationExpiredExceptionFormProperties>({
		});

	}

	export interface ServerInternalException {
	}
	export interface ServerInternalExceptionFormProperties {
	}
	export function CreateServerInternalExceptionFormGroup() {
		return new FormGroup<ServerInternalExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface InvalidClientTokenException {
	}
	export interface InvalidClientTokenExceptionFormProperties {
	}
	export function CreateInvalidClientTokenExceptionFormGroup() {
		return new FormGroup<InvalidClientTokenExceptionFormProperties>({
		});

	}

	export interface IdempotentParameterMismatchException {
	}
	export interface IdempotentParameterMismatchExceptionFormProperties {
	}
	export function CreateIdempotentParameterMismatchExceptionFormGroup() {
		return new FormGroup<IdempotentParameterMismatchExceptionFormProperties>({
		});

	}

	export interface AssociateResourceShareResponse {
		resourceShareAssociations?: Array<ResourceShareAssociation>;
		clientToken?: string;
	}
	export interface AssociateResourceShareResponseFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateResourceShareResponseFormGroup() {
		return new FormGroup<AssociateResourceShareResponseFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnknownResourceException {
	}
	export interface UnknownResourceExceptionFormProperties {
	}
	export function CreateUnknownResourceExceptionFormGroup() {
		return new FormGroup<UnknownResourceExceptionFormProperties>({
		});

	}

	export interface InvalidStateTransitionException {
	}
	export interface InvalidStateTransitionExceptionFormProperties {
	}
	export function CreateInvalidStateTransitionExceptionFormGroup() {
		return new FormGroup<InvalidStateTransitionExceptionFormProperties>({
		});

	}

	export interface ResourceShareLimitExceededException {
	}
	export interface ResourceShareLimitExceededExceptionFormProperties {
	}
	export function CreateResourceShareLimitExceededExceptionFormGroup() {
		return new FormGroup<ResourceShareLimitExceededExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface AssociateResourceSharePermissionResponse {
		returnValue?: boolean | null;
		clientToken?: string;
	}
	export interface AssociateResourceSharePermissionResponseFormProperties {
		returnValue: FormControl<boolean | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateResourceSharePermissionResponseFormGroup() {
		return new FormGroup<AssociateResourceSharePermissionResponseFormProperties>({
			returnValue: new FormControl<boolean | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePermissionResponse {
		permission?: ResourceSharePermissionSummary;
		clientToken?: string;
	}
	export interface CreatePermissionResponseFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePermissionResponseFormGroup() {
		return new FormGroup<CreatePermissionResponseFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an RAM permission. */
	export interface ResourceSharePermissionSummary {
		arn?: string;
		version?: string;
		defaultVersion?: boolean | null;
		name?: string;
		resourceType?: string;
		status?: string;
		creationTime?: Date;
		lastUpdatedTime?: Date;
		isResourceTypeDefault?: boolean | null;
		permissionType?: PermissionType;
		featureSet?: PermissionFeatureSet;
		tags?: Array<Tag>;
	}

	/** Information about an RAM permission. */
	export interface ResourceSharePermissionSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		defaultVersion: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		resourceType: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
		isResourceTypeDefault: FormControl<boolean | null | undefined>,
		permissionType: FormControl<PermissionType | null | undefined>,
		featureSet: FormControl<PermissionFeatureSet | null | undefined>,
	}
	export function CreateResourceSharePermissionSummaryFormGroup() {
		return new FormGroup<ResourceSharePermissionSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			defaultVersion: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			isResourceTypeDefault: new FormControl<boolean | null | undefined>(undefined),
			permissionType: new FormControl<PermissionType | null | undefined>(undefined),
			featureSet: new FormControl<PermissionFeatureSet | null | undefined>(undefined),
		});

	}

	export enum PermissionType { CUSTOMER_MANAGED = 'CUSTOMER_MANAGED', AWS_MANAGED = 'AWS_MANAGED' }

	export enum PermissionFeatureSet { CREATED_FROM_POLICY = 'CREATED_FROM_POLICY', PROMOTING_TO_STANDARD = 'PROMOTING_TO_STANDARD', STANDARD = 'STANDARD' }


	/** <p>A structure containing a tag. A tag is metadata that you can attach to your resources to help organize and categorize them. You can also use them to help you secure your resources. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p> */
	export interface Tag {
		key?: string;
		value?: string;
	}

	/** <p>A structure containing a tag. A tag is metadata that you can attach to your resources to help organize and categorize them. You can also use them to help you secure your resources. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference Guide</i>.</p> */
	export interface TagFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidPolicyException {
	}
	export interface InvalidPolicyExceptionFormProperties {
	}
	export function CreateInvalidPolicyExceptionFormGroup() {
		return new FormGroup<InvalidPolicyExceptionFormProperties>({
		});

	}

	export interface PermissionAlreadyExistsException {
	}
	export interface PermissionAlreadyExistsExceptionFormProperties {
	}
	export function CreatePermissionAlreadyExistsExceptionFormGroup() {
		return new FormGroup<PermissionAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface MalformedPolicyTemplateException {
	}
	export interface MalformedPolicyTemplateExceptionFormProperties {
	}
	export function CreateMalformedPolicyTemplateExceptionFormGroup() {
		return new FormGroup<MalformedPolicyTemplateExceptionFormProperties>({
		});

	}

	export interface PermissionLimitExceededException {
	}
	export interface PermissionLimitExceededExceptionFormProperties {
	}
	export function CreatePermissionLimitExceededExceptionFormGroup() {
		return new FormGroup<PermissionLimitExceededExceptionFormProperties>({
		});

	}

	export interface CreatePermissionVersionResponse {

		/** Information about a RAM managed permission. */
		permission?: ResourceSharePermissionDetail;
		clientToken?: string;
	}
	export interface CreatePermissionVersionResponseFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePermissionVersionResponseFormGroup() {
		return new FormGroup<CreatePermissionVersionResponseFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a RAM managed permission. */
	export interface ResourceSharePermissionDetail {
		arn?: string;
		version?: string;
		defaultVersion?: boolean | null;
		name?: string;
		resourceType?: string;
		permission?: string;
		creationTime?: Date;
		lastUpdatedTime?: Date;
		isResourceTypeDefault?: boolean | null;
		permissionType?: PermissionType;
		featureSet?: PermissionFeatureSet;
		status?: PermissionStatus;
		tags?: Array<Tag>;
	}

	/** Information about a RAM managed permission. */
	export interface ResourceSharePermissionDetailFormProperties {
		arn: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		defaultVersion: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		resourceType: FormControl<string | null | undefined>,
		permission: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
		isResourceTypeDefault: FormControl<boolean | null | undefined>,
		permissionType: FormControl<PermissionType | null | undefined>,
		featureSet: FormControl<PermissionFeatureSet | null | undefined>,
		status: FormControl<PermissionStatus | null | undefined>,
	}
	export function CreateResourceSharePermissionDetailFormGroup() {
		return new FormGroup<ResourceSharePermissionDetailFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			defaultVersion: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			permission: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			isResourceTypeDefault: new FormControl<boolean | null | undefined>(undefined),
			permissionType: new FormControl<PermissionType | null | undefined>(undefined),
			featureSet: new FormControl<PermissionFeatureSet | null | undefined>(undefined),
			status: new FormControl<PermissionStatus | null | undefined>(undefined),
		});

	}

	export enum PermissionStatus { ATTACHABLE = 'ATTACHABLE', UNATTACHABLE = 'UNATTACHABLE', DELETING = 'DELETING', DELETED = 'DELETED' }

	export interface PermissionVersionsLimitExceededException {
	}
	export interface PermissionVersionsLimitExceededExceptionFormProperties {
	}
	export function CreatePermissionVersionsLimitExceededExceptionFormGroup() {
		return new FormGroup<PermissionVersionsLimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateResourceShareResponse {
		resourceShare?: ResourceShare;
		clientToken?: string;
	}
	export interface CreateResourceShareResponseFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourceShareResponseFormGroup() {
		return new FormGroup<CreateResourceShareResponseFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a resource share in RAM. */
	export interface ResourceShare {
		resourceShareArn?: string;
		name?: string;
		owningAccountId?: string;
		allowExternalPrincipals?: boolean | null;
		status?: ResourceShareStatus;
		statusMessage?: string;
		tags?: Array<Tag>;
		creationTime?: Date;
		lastUpdatedTime?: Date;
		featureSet?: PermissionFeatureSet;
	}

	/** Describes a resource share in RAM. */
	export interface ResourceShareFormProperties {
		resourceShareArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		owningAccountId: FormControl<string | null | undefined>,
		allowExternalPrincipals: FormControl<boolean | null | undefined>,
		status: FormControl<ResourceShareStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
		featureSet: FormControl<PermissionFeatureSet | null | undefined>,
	}
	export function CreateResourceShareFormGroup() {
		return new FormGroup<ResourceShareFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owningAccountId: new FormControl<string | null | undefined>(undefined),
			allowExternalPrincipals: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<ResourceShareStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			featureSet: new FormControl<PermissionFeatureSet | null | undefined>(undefined),
		});

	}

	export enum ResourceShareStatus { PENDING = 'PENDING', ACTIVE = 'ACTIVE', FAILED = 'FAILED', DELETING = 'DELETING', DELETED = 'DELETED' }

	export interface TagPolicyViolationException {
	}
	export interface TagPolicyViolationExceptionFormProperties {
	}
	export function CreateTagPolicyViolationExceptionFormGroup() {
		return new FormGroup<TagPolicyViolationExceptionFormProperties>({
		});

	}

	export interface TagLimitExceededException {
	}
	export interface TagLimitExceededExceptionFormProperties {
	}
	export function CreateTagLimitExceededExceptionFormGroup() {
		return new FormGroup<TagLimitExceededExceptionFormProperties>({
		});

	}

	export interface DeletePermissionResponse {
		returnValue?: boolean | null;
		clientToken?: string;
		permissionStatus?: PermissionStatus;
	}
	export interface DeletePermissionResponseFormProperties {
		returnValue: FormControl<boolean | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		permissionStatus: FormControl<PermissionStatus | null | undefined>,
	}
	export function CreateDeletePermissionResponseFormGroup() {
		return new FormGroup<DeletePermissionResponseFormProperties>({
			returnValue: new FormControl<boolean | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			permissionStatus: new FormControl<PermissionStatus | null | undefined>(undefined),
		});

	}

	export interface DeletePermissionVersionResponse {
		returnValue?: boolean | null;
		clientToken?: string;
		permissionStatus?: PermissionStatus;
	}
	export interface DeletePermissionVersionResponseFormProperties {
		returnValue: FormControl<boolean | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		permissionStatus: FormControl<PermissionStatus | null | undefined>,
	}
	export function CreateDeletePermissionVersionResponseFormGroup() {
		return new FormGroup<DeletePermissionVersionResponseFormProperties>({
			returnValue: new FormControl<boolean | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			permissionStatus: new FormControl<PermissionStatus | null | undefined>(undefined),
		});

	}

	export interface DeleteResourceShareResponse {
		returnValue?: boolean | null;
		clientToken?: string;
	}
	export interface DeleteResourceShareResponseFormProperties {
		returnValue: FormControl<boolean | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourceShareResponseFormGroup() {
		return new FormGroup<DeleteResourceShareResponseFormProperties>({
			returnValue: new FormControl<boolean | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateResourceShareResponse {
		resourceShareAssociations?: Array<ResourceShareAssociation>;
		clientToken?: string;
	}
	export interface DisassociateResourceShareResponseFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateResourceShareResponseFormGroup() {
		return new FormGroup<DisassociateResourceShareResponseFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateResourceSharePermissionResponse {
		returnValue?: boolean | null;
		clientToken?: string;
	}
	export interface DisassociateResourceSharePermissionResponseFormProperties {
		returnValue: FormControl<boolean | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateResourceSharePermissionResponseFormGroup() {
		return new FormGroup<DisassociateResourceSharePermissionResponseFormProperties>({
			returnValue: new FormControl<boolean | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnableSharingWithAwsOrganizationResponse {
		returnValue?: boolean | null;
	}
	export interface EnableSharingWithAwsOrganizationResponseFormProperties {
		returnValue: FormControl<boolean | null | undefined>,
	}
	export function CreateEnableSharingWithAwsOrganizationResponseFormGroup() {
		return new FormGroup<EnableSharingWithAwsOrganizationResponseFormProperties>({
			returnValue: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetPermissionResponse {
		permission?: ResourceSharePermissionDetail;
	}
	export interface GetPermissionResponseFormProperties {
	}
	export function CreateGetPermissionResponseFormGroup() {
		return new FormGroup<GetPermissionResponseFormProperties>({
		});

	}

	export interface GetResourcePoliciesResponse {
		policies?: Array<string>;
		nextToken?: string;
	}
	export interface GetResourcePoliciesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePoliciesResponseFormGroup() {
		return new FormGroup<GetResourcePoliciesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface ResourceArnNotFoundException {
	}
	export interface ResourceArnNotFoundExceptionFormProperties {
	}
	export function CreateResourceArnNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceArnNotFoundExceptionFormProperties>({
		});

	}

	export interface GetResourceShareAssociationsResponse {
		resourceShareAssociations?: Array<ResourceShareAssociation>;
		nextToken?: string;
	}
	export interface GetResourceShareAssociationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceShareAssociationsResponseFormGroup() {
		return new FormGroup<GetResourceShareAssociationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetResourceShareInvitationsResponse {
		resourceShareInvitations?: Array<ResourceShareInvitation>;
		nextToken?: string;
	}
	export interface GetResourceShareInvitationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceShareInvitationsResponseFormGroup() {
		return new FormGroup<GetResourceShareInvitationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidMaxResultsException {
	}
	export interface InvalidMaxResultsExceptionFormProperties {
	}
	export function CreateInvalidMaxResultsExceptionFormGroup() {
		return new FormGroup<InvalidMaxResultsExceptionFormProperties>({
		});

	}

	export interface GetResourceSharesResponse {
		resourceShares?: Array<ResourceShare>;
		nextToken?: string;
	}
	export interface GetResourceSharesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceSharesResponseFormGroup() {
		return new FormGroup<GetResourceSharesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A tag key and optional list of possible values that you can use to filter results for tagged resources. */
	export interface TagFilter {
		tagKey?: string;
		tagValues?: Array<string>;
	}

	/** A tag key and optional list of possible values that you can use to filter results for tagged resources. */
	export interface TagFilterFormProperties {
		tagKey: FormControl<string | null | undefined>,
	}
	export function CreateTagFilterFormGroup() {
		return new FormGroup<TagFilterFormProperties>({
			tagKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPendingInvitationResourcesResponse {
		resources?: Array<Resource>;
		nextToken?: string;
	}
	export interface ListPendingInvitationResourcesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPendingInvitationResourcesResponseFormGroup() {
		return new FormGroup<ListPendingInvitationResourcesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a resource associated with a resource share in RAM. */
	export interface Resource {
		arn?: string;
		type?: string;
		resourceShareArn?: string;
		resourceGroupArn?: string;
		status?: ResourceStatus;
		statusMessage?: string;
		creationTime?: Date;
		lastUpdatedTime?: Date;
		resourceRegionScope?: ResourceRegionScope;
	}

	/** Describes a resource associated with a resource share in RAM. */
	export interface ResourceFormProperties {
		arn: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		resourceShareArn: FormControl<string | null | undefined>,
		resourceGroupArn: FormControl<string | null | undefined>,
		status: FormControl<ResourceStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
		resourceRegionScope: FormControl<ResourceRegionScope | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			resourceShareArn: new FormControl<string | null | undefined>(undefined),
			resourceGroupArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ResourceStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			resourceRegionScope: new FormControl<ResourceRegionScope | null | undefined>(undefined),
		});

	}

	export enum ResourceStatus { AVAILABLE = 'AVAILABLE', ZONAL_RESOURCE_INACCESSIBLE = 'ZONAL_RESOURCE_INACCESSIBLE', LIMIT_EXCEEDED = 'LIMIT_EXCEEDED', UNAVAILABLE = 'UNAVAILABLE', PENDING = 'PENDING' }

	export enum ResourceRegionScope { REGIONAL = 'REGIONAL', GLOBAL = 'GLOBAL' }

	export interface MissingRequiredParameterException {
	}
	export interface MissingRequiredParameterExceptionFormProperties {
	}
	export function CreateMissingRequiredParameterExceptionFormGroup() {
		return new FormGroup<MissingRequiredParameterExceptionFormProperties>({
		});

	}

	export interface ListPermissionAssociationsResponse {
		permissions?: Array<AssociatedPermission>;
		nextToken?: string;
	}
	export interface ListPermissionAssociationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPermissionAssociationsResponseFormGroup() {
		return new FormGroup<ListPermissionAssociationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that describes a managed permission associated with a resource share. */
	export interface AssociatedPermission {
		arn?: string;
		permissionVersion?: string;
		defaultVersion?: boolean | null;
		resourceType?: string;
		status?: string;
		featureSet?: PermissionFeatureSet;
		lastUpdatedTime?: Date;
		resourceShareArn?: string;
	}

	/** An object that describes a managed permission associated with a resource share. */
	export interface AssociatedPermissionFormProperties {
		arn: FormControl<string | null | undefined>,
		permissionVersion: FormControl<string | null | undefined>,
		defaultVersion: FormControl<boolean | null | undefined>,
		resourceType: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		featureSet: FormControl<PermissionFeatureSet | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
		resourceShareArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociatedPermissionFormGroup() {
		return new FormGroup<AssociatedPermissionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			permissionVersion: new FormControl<string | null | undefined>(undefined),
			defaultVersion: new FormControl<boolean | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			featureSet: new FormControl<PermissionFeatureSet | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			resourceShareArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPermissionVersionsResponse {
		permissions?: Array<ResourceSharePermissionSummary>;
		nextToken?: string;
	}
	export interface ListPermissionVersionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPermissionVersionsResponseFormGroup() {
		return new FormGroup<ListPermissionVersionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPermissionsResponse {
		permissions?: Array<ResourceSharePermissionSummary>;
		nextToken?: string;
	}
	export interface ListPermissionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPermissionsResponseFormGroup() {
		return new FormGroup<ListPermissionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPrincipalsResponse {
		principals?: Array<Principal>;
		nextToken?: string;
	}
	export interface ListPrincipalsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPrincipalsResponseFormGroup() {
		return new FormGroup<ListPrincipalsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a principal for use with Resource Access Manager. */
	export interface Principal {
		id?: string;
		resourceShareArn?: string;
		creationTime?: Date;
		lastUpdatedTime?: Date;
		external?: boolean | null;
	}

	/** Describes a principal for use with Resource Access Manager. */
	export interface PrincipalFormProperties {
		id: FormControl<string | null | undefined>,
		resourceShareArn: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
		external: FormControl<boolean | null | undefined>,
	}
	export function CreatePrincipalFormGroup() {
		return new FormGroup<PrincipalFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			resourceShareArn: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			external: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListReplacePermissionAssociationsWorkResponse {
		replacePermissionAssociationsWorks?: Array<ReplacePermissionAssociationsWork>;
		nextToken?: string;
	}
	export interface ListReplacePermissionAssociationsWorkResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReplacePermissionAssociationsWorkResponseFormGroup() {
		return new FormGroup<ListReplacePermissionAssociationsWorkResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that represents the background work that RAM performs when you invoke the <a>ReplacePermissionAssociations</a> operation. */
	export interface ReplacePermissionAssociationsWork {
		id?: string;
		fromPermissionArn?: string;
		fromPermissionVersion?: string;
		toPermissionArn?: string;
		toPermissionVersion?: string;
		status?: ReplacePermissionAssociationsWorkStatus;
		statusMessage?: string;
		creationTime?: Date;
		lastUpdatedTime?: Date;
	}

	/** A structure that represents the background work that RAM performs when you invoke the <a>ReplacePermissionAssociations</a> operation. */
	export interface ReplacePermissionAssociationsWorkFormProperties {
		id: FormControl<string | null | undefined>,
		fromPermissionArn: FormControl<string | null | undefined>,
		fromPermissionVersion: FormControl<string | null | undefined>,
		toPermissionArn: FormControl<string | null | undefined>,
		toPermissionVersion: FormControl<string | null | undefined>,
		status: FormControl<ReplacePermissionAssociationsWorkStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateReplacePermissionAssociationsWorkFormGroup() {
		return new FormGroup<ReplacePermissionAssociationsWorkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			fromPermissionArn: new FormControl<string | null | undefined>(undefined),
			fromPermissionVersion: new FormControl<string | null | undefined>(undefined),
			toPermissionArn: new FormControl<string | null | undefined>(undefined),
			toPermissionVersion: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReplacePermissionAssociationsWorkStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ReplacePermissionAssociationsWorkStatus { IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED', FAILED = 'FAILED' }

	export interface ListResourceSharePermissionsResponse {
		permissions?: Array<ResourceSharePermissionSummary>;
		nextToken?: string;
	}
	export interface ListResourceSharePermissionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceSharePermissionsResponseFormGroup() {
		return new FormGroup<ListResourceSharePermissionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourceTypesResponse {
		resourceTypes?: Array<ServiceNameAndResourceType>;
		nextToken?: string;
	}
	export interface ListResourceTypesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceTypesResponseFormGroup() {
		return new FormGroup<ListResourceTypesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a shareable resource type and the Amazon Web Services service to which resources of that type belong. */
	export interface ServiceNameAndResourceType {
		resourceType?: string;
		serviceName?: string;
		resourceRegionScope?: ResourceRegionScope;
	}

	/** Information about a shareable resource type and the Amazon Web Services service to which resources of that type belong. */
	export interface ServiceNameAndResourceTypeFormProperties {
		resourceType: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		resourceRegionScope: FormControl<ResourceRegionScope | null | undefined>,
	}
	export function CreateServiceNameAndResourceTypeFormGroup() {
		return new FormGroup<ServiceNameAndResourceTypeFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			resourceRegionScope: new FormControl<ResourceRegionScope | null | undefined>(undefined),
		});

	}

	export interface ListResourcesResponse {
		resources?: Array<Resource>;
		nextToken?: string;
	}
	export interface ListResourcesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesResponseFormGroup() {
		return new FormGroup<ListResourcesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidResourceTypeException {
	}
	export interface InvalidResourceTypeExceptionFormProperties {
	}
	export function CreateInvalidResourceTypeExceptionFormGroup() {
		return new FormGroup<InvalidResourceTypeExceptionFormProperties>({
		});

	}

	export interface PromotePermissionCreatedFromPolicyResponse {

		/** Information about an RAM permission. */
		permission?: ResourceSharePermissionSummary;
		clientToken?: string;
	}
	export interface PromotePermissionCreatedFromPolicyResponseFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreatePromotePermissionCreatedFromPolicyResponseFormGroup() {
		return new FormGroup<PromotePermissionCreatedFromPolicyResponseFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PromoteResourceShareCreatedFromPolicyResponse {
		returnValue?: boolean | null;
	}
	export interface PromoteResourceShareCreatedFromPolicyResponseFormProperties {
		returnValue: FormControl<boolean | null | undefined>,
	}
	export function CreatePromoteResourceShareCreatedFromPolicyResponseFormGroup() {
		return new FormGroup<PromoteResourceShareCreatedFromPolicyResponseFormProperties>({
			returnValue: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UnmatchedPolicyPermissionException {
	}
	export interface UnmatchedPolicyPermissionExceptionFormProperties {
	}
	export function CreateUnmatchedPolicyPermissionExceptionFormGroup() {
		return new FormGroup<UnmatchedPolicyPermissionExceptionFormProperties>({
		});

	}

	export interface RejectResourceShareInvitationResponse {
		resourceShareInvitation?: ResourceShareInvitation;
		clientToken?: string;
	}
	export interface RejectResourceShareInvitationResponseFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateRejectResourceShareInvitationResponseFormGroup() {
		return new FormGroup<RejectResourceShareInvitationResponseFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReplacePermissionAssociationsResponse {
		replacePermissionAssociationsWork?: ReplacePermissionAssociationsWork;
		clientToken?: string;
	}
	export interface ReplacePermissionAssociationsResponseFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateReplacePermissionAssociationsResponseFormGroup() {
		return new FormGroup<ReplacePermissionAssociationsResponseFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetDefaultPermissionVersionResponse {
		returnValue?: boolean | null;
		clientToken?: string;
	}
	export interface SetDefaultPermissionVersionResponseFormProperties {
		returnValue: FormControl<boolean | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateSetDefaultPermissionVersionResponseFormGroup() {
		return new FormGroup<SetDefaultPermissionVersionResponseFormProperties>({
			returnValue: new FormControl<boolean | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
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

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateResourceShareResponse {
		resourceShare?: ResourceShare;
		clientToken?: string;
	}
	export interface UpdateResourceShareResponseFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourceShareResponseFormGroup() {
		return new FormGroup<UpdateResourceShareResponseFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AcceptResourceShareInvitationRequest {

		/** Required */
		resourceShareInvitationArn: string;
		clientToken?: string;
	}
	export interface AcceptResourceShareInvitationRequestFormProperties {

		/** Required */
		resourceShareInvitationArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAcceptResourceShareInvitationRequestFormGroup() {
		return new FormGroup<AcceptResourceShareInvitationRequestFormProperties>({
			resourceShareInvitationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateResourceSharePermissionRequest {

		/** Required */
		resourceShareArn: string;

		/** Required */
		permissionArn: string;
		replace?: boolean | null;
		clientToken?: string;
		permissionVersion?: number | null;
	}
	export interface AssociateResourceSharePermissionRequestFormProperties {

		/** Required */
		resourceShareArn: FormControl<string | null | undefined>,

		/** Required */
		permissionArn: FormControl<string | null | undefined>,
		replace: FormControl<boolean | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		permissionVersion: FormControl<number | null | undefined>,
	}
	export function CreateAssociateResourceSharePermissionRequestFormGroup() {
		return new FormGroup<AssociateResourceSharePermissionRequestFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replace: new FormControl<boolean | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			permissionVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AssociateResourceShareRequest {

		/** Required */
		resourceShareArn: string;
		resourceArns?: Array<string>;
		principals?: Array<string>;
		clientToken?: string;
		sources?: Array<string>;
	}
	export interface AssociateResourceShareRequestFormProperties {

		/** Required */
		resourceShareArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateResourceShareRequestFormGroup() {
		return new FormGroup<AssociateResourceShareRequestFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePermissionRequest {

		/** Required */
		name: string;

		/** Required */
		resourceType: string;

		/** Required */
		policyTemplate: string;
		clientToken?: string;
		tags?: Array<Tag>;
	}
	export interface CreatePermissionRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		resourceType: FormControl<string | null | undefined>,

		/** Required */
		policyTemplate: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePermissionRequestFormGroup() {
		return new FormGroup<CreatePermissionRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePermissionVersionRequest {

		/** Required */
		permissionArn: string;

		/** Required */
		policyTemplate: string;
		clientToken?: string;
	}
	export interface CreatePermissionVersionRequestFormProperties {

		/** Required */
		permissionArn: FormControl<string | null | undefined>,

		/** Required */
		policyTemplate: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePermissionVersionRequestFormGroup() {
		return new FormGroup<CreatePermissionVersionRequestFormProperties>({
			permissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateResourceShareRequest {

		/** Required */
		name: string;
		resourceArns?: Array<string>;
		principals?: Array<string>;
		tags?: Array<Tag>;
		allowExternalPrincipals?: boolean | null;
		clientToken?: string;
		permissionArns?: Array<string>;
		sources?: Array<string>;
	}
	export interface CreateResourceShareRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		allowExternalPrincipals: FormControl<boolean | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourceShareRequestFormGroup() {
		return new FormGroup<CreateResourceShareRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			allowExternalPrincipals: new FormControl<boolean | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletePermissionRequest {
	}
	export interface DeletePermissionRequestFormProperties {
	}
	export function CreateDeletePermissionRequestFormGroup() {
		return new FormGroup<DeletePermissionRequestFormProperties>({
		});

	}

	export interface DeletePermissionVersionRequest {
	}
	export interface DeletePermissionVersionRequestFormProperties {
	}
	export function CreateDeletePermissionVersionRequestFormGroup() {
		return new FormGroup<DeletePermissionVersionRequestFormProperties>({
		});

	}

	export interface DeleteResourceShareRequest {
	}
	export interface DeleteResourceShareRequestFormProperties {
	}
	export function CreateDeleteResourceShareRequestFormGroup() {
		return new FormGroup<DeleteResourceShareRequestFormProperties>({
		});

	}

	export interface DisassociateResourceSharePermissionRequest {

		/** Required */
		resourceShareArn: string;

		/** Required */
		permissionArn: string;
		clientToken?: string;
	}
	export interface DisassociateResourceSharePermissionRequestFormProperties {

		/** Required */
		resourceShareArn: FormControl<string | null | undefined>,

		/** Required */
		permissionArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateResourceSharePermissionRequestFormGroup() {
		return new FormGroup<DisassociateResourceSharePermissionRequestFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateResourceShareRequest {

		/** Required */
		resourceShareArn: string;
		resourceArns?: Array<string>;
		principals?: Array<string>;
		clientToken?: string;
		sources?: Array<string>;
	}
	export interface DisassociateResourceShareRequestFormProperties {

		/** Required */
		resourceShareArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateResourceShareRequestFormGroup() {
		return new FormGroup<DisassociateResourceShareRequestFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnableSharingWithAwsOrganizationRequest {
	}
	export interface EnableSharingWithAwsOrganizationRequestFormProperties {
	}
	export function CreateEnableSharingWithAwsOrganizationRequestFormGroup() {
		return new FormGroup<EnableSharingWithAwsOrganizationRequestFormProperties>({
		});

	}

	export interface GetPermissionRequest {

		/** Required */
		permissionArn: string;
		permissionVersion?: number | null;
	}
	export interface GetPermissionRequestFormProperties {

		/** Required */
		permissionArn: FormControl<string | null | undefined>,
		permissionVersion: FormControl<number | null | undefined>,
	}
	export function CreateGetPermissionRequestFormGroup() {
		return new FormGroup<GetPermissionRequestFormProperties>({
			permissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permissionVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetResourcePoliciesRequest {

		/** Required */
		resourceArns: Array<string>;
		principal?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetResourcePoliciesRequestFormProperties {
		principal: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetResourcePoliciesRequestFormGroup() {
		return new FormGroup<GetResourcePoliciesRequestFormProperties>({
			principal: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetResourceShareAssociationsRequest {

		/** Required */
		associationType: ResourceShareAssociationType;
		resourceShareArns?: Array<string>;
		resourceArn?: string;
		principal?: string;
		associationStatus?: ResourceShareAssociationStatus;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetResourceShareAssociationsRequestFormProperties {

		/** Required */
		associationType: FormControl<ResourceShareAssociationType | null | undefined>,
		resourceArn: FormControl<string | null | undefined>,
		principal: FormControl<string | null | undefined>,
		associationStatus: FormControl<ResourceShareAssociationStatus | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetResourceShareAssociationsRequestFormGroup() {
		return new FormGroup<GetResourceShareAssociationsRequestFormProperties>({
			associationType: new FormControl<ResourceShareAssociationType | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined),
			principal: new FormControl<string | null | undefined>(undefined),
			associationStatus: new FormControl<ResourceShareAssociationStatus | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetResourceShareInvitationsRequest {
		resourceShareInvitationArns?: Array<string>;
		resourceShareArns?: Array<string>;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetResourceShareInvitationsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetResourceShareInvitationsRequestFormGroup() {
		return new FormGroup<GetResourceShareInvitationsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ResourceOwner { SELF = 'SELF', 'OTHER-ACCOUNTS' = 'OTHER-ACCOUNTS' }

	export interface GetResourceSharesRequest {
		resourceShareArns?: Array<string>;
		resourceShareStatus?: ResourceShareStatus;

		/** Required */
		resourceOwner: ResourceOwner;
		name?: string;
		tagFilters?: Array<TagFilter>;
		nextToken?: string;
		maxResults?: number | null;
		permissionArn?: string;
		permissionVersion?: number | null;
	}
	export interface GetResourceSharesRequestFormProperties {
		resourceShareStatus: FormControl<ResourceShareStatus | null | undefined>,

		/** Required */
		resourceOwner: FormControl<ResourceOwner | null | undefined>,
		name: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		permissionArn: FormControl<string | null | undefined>,
		permissionVersion: FormControl<number | null | undefined>,
	}
	export function CreateGetResourceSharesRequestFormGroup() {
		return new FormGroup<GetResourceSharesRequestFormProperties>({
			resourceShareStatus: new FormControl<ResourceShareStatus | null | undefined>(undefined),
			resourceOwner: new FormControl<ResourceOwner | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			permissionArn: new FormControl<string | null | undefined>(undefined),
			permissionVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ResourceRegionScopeFilter { ALL = 'ALL', REGIONAL = 'REGIONAL', GLOBAL = 'GLOBAL' }

	export interface ListPendingInvitationResourcesRequest {

		/** Required */
		resourceShareInvitationArn: string;
		nextToken?: string;
		maxResults?: number | null;
		resourceRegionScope?: ResourceRegionScopeFilter;
	}
	export interface ListPendingInvitationResourcesRequestFormProperties {

		/** Required */
		resourceShareInvitationArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		resourceRegionScope: FormControl<ResourceRegionScopeFilter | null | undefined>,
	}
	export function CreateListPendingInvitationResourcesRequestFormGroup() {
		return new FormGroup<ListPendingInvitationResourcesRequestFormProperties>({
			resourceShareInvitationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			resourceRegionScope: new FormControl<ResourceRegionScopeFilter | null | undefined>(undefined),
		});

	}

	export interface ListPermissionAssociationsRequest {
		permissionArn?: string;
		permissionVersion?: number | null;
		associationStatus?: ResourceShareAssociationStatus;
		resourceType?: string;
		featureSet?: PermissionFeatureSet;
		defaultVersion?: boolean | null;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListPermissionAssociationsRequestFormProperties {
		permissionArn: FormControl<string | null | undefined>,
		permissionVersion: FormControl<number | null | undefined>,
		associationStatus: FormControl<ResourceShareAssociationStatus | null | undefined>,
		resourceType: FormControl<string | null | undefined>,
		featureSet: FormControl<PermissionFeatureSet | null | undefined>,
		defaultVersion: FormControl<boolean | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPermissionAssociationsRequestFormGroup() {
		return new FormGroup<ListPermissionAssociationsRequestFormProperties>({
			permissionArn: new FormControl<string | null | undefined>(undefined),
			permissionVersion: new FormControl<number | null | undefined>(undefined),
			associationStatus: new FormControl<ResourceShareAssociationStatus | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			featureSet: new FormControl<PermissionFeatureSet | null | undefined>(undefined),
			defaultVersion: new FormControl<boolean | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPermissionVersionsRequest {

		/** Required */
		permissionArn: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListPermissionVersionsRequestFormProperties {

		/** Required */
		permissionArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPermissionVersionsRequestFormGroup() {
		return new FormGroup<ListPermissionVersionsRequestFormProperties>({
			permissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PermissionTypeFilter { ALL = 'ALL', AWS_MANAGED = 'AWS_MANAGED', CUSTOMER_MANAGED = 'CUSTOMER_MANAGED' }

	export interface ListPermissionsRequest {
		resourceType?: string;
		nextToken?: string;
		maxResults?: number | null;
		permissionType?: PermissionTypeFilter;
	}
	export interface ListPermissionsRequestFormProperties {
		resourceType: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		permissionType: FormControl<PermissionTypeFilter | null | undefined>,
	}
	export function CreateListPermissionsRequestFormGroup() {
		return new FormGroup<ListPermissionsRequestFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			permissionType: new FormControl<PermissionTypeFilter | null | undefined>(undefined),
		});

	}

	export interface ListPrincipalsRequest {

		/** Required */
		resourceOwner: ResourceOwner;
		resourceArn?: string;
		principals?: Array<string>;
		resourceType?: string;
		resourceShareArns?: Array<string>;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListPrincipalsRequestFormProperties {

		/** Required */
		resourceOwner: FormControl<ResourceOwner | null | undefined>,
		resourceArn: FormControl<string | null | undefined>,
		resourceType: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPrincipalsRequestFormGroup() {
		return new FormGroup<ListPrincipalsRequestFormProperties>({
			resourceOwner: new FormControl<ResourceOwner | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListReplacePermissionAssociationsWorkRequest {
		workIds?: Array<string>;
		status?: ReplacePermissionAssociationsWorkStatus;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListReplacePermissionAssociationsWorkRequestFormProperties {
		status: FormControl<ReplacePermissionAssociationsWorkStatus | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListReplacePermissionAssociationsWorkRequestFormGroup() {
		return new FormGroup<ListReplacePermissionAssociationsWorkRequestFormProperties>({
			status: new FormControl<ReplacePermissionAssociationsWorkStatus | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListResourceSharePermissionsRequest {

		/** Required */
		resourceShareArn: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListResourceSharePermissionsRequestFormProperties {

		/** Required */
		resourceShareArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResourceSharePermissionsRequestFormGroup() {
		return new FormGroup<ListResourceSharePermissionsRequestFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListResourceTypesRequest {
		nextToken?: string;
		maxResults?: number | null;
		resourceRegionScope?: ResourceRegionScopeFilter;
	}
	export interface ListResourceTypesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		resourceRegionScope: FormControl<ResourceRegionScopeFilter | null | undefined>,
	}
	export function CreateListResourceTypesRequestFormGroup() {
		return new FormGroup<ListResourceTypesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			resourceRegionScope: new FormControl<ResourceRegionScopeFilter | null | undefined>(undefined),
		});

	}

	export interface ListResourcesRequest {

		/** Required */
		resourceOwner: ResourceOwner;
		principal?: string;
		resourceType?: string;
		resourceArns?: Array<string>;
		resourceShareArns?: Array<string>;
		nextToken?: string;
		maxResults?: number | null;
		resourceRegionScope?: ResourceRegionScopeFilter;
	}
	export interface ListResourcesRequestFormProperties {

		/** Required */
		resourceOwner: FormControl<ResourceOwner | null | undefined>,
		principal: FormControl<string | null | undefined>,
		resourceType: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		resourceRegionScope: FormControl<ResourceRegionScopeFilter | null | undefined>,
	}
	export function CreateListResourcesRequestFormGroup() {
		return new FormGroup<ListResourcesRequestFormProperties>({
			resourceOwner: new FormControl<ResourceOwner | null | undefined>(undefined, [Validators.required]),
			principal: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			resourceRegionScope: new FormControl<ResourceRegionScopeFilter | null | undefined>(undefined),
		});

	}

	export interface PromotePermissionCreatedFromPolicyRequest {

		/** Required */
		permissionArn: string;

		/** Required */
		name: string;
		clientToken?: string;
	}
	export interface PromotePermissionCreatedFromPolicyRequestFormProperties {

		/** Required */
		permissionArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreatePromotePermissionCreatedFromPolicyRequestFormGroup() {
		return new FormGroup<PromotePermissionCreatedFromPolicyRequestFormProperties>({
			permissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PromoteResourceShareCreatedFromPolicyRequest {
	}
	export interface PromoteResourceShareCreatedFromPolicyRequestFormProperties {
	}
	export function CreatePromoteResourceShareCreatedFromPolicyRequestFormGroup() {
		return new FormGroup<PromoteResourceShareCreatedFromPolicyRequestFormProperties>({
		});

	}

	export interface RejectResourceShareInvitationRequest {

		/** Required */
		resourceShareInvitationArn: string;
		clientToken?: string;
	}
	export interface RejectResourceShareInvitationRequestFormProperties {

		/** Required */
		resourceShareInvitationArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateRejectResourceShareInvitationRequestFormGroup() {
		return new FormGroup<RejectResourceShareInvitationRequestFormProperties>({
			resourceShareInvitationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReplacePermissionAssociationsRequest {

		/** Required */
		fromPermissionArn: string;
		fromPermissionVersion?: number | null;

		/** Required */
		toPermissionArn: string;
		clientToken?: string;
	}
	export interface ReplacePermissionAssociationsRequestFormProperties {

		/** Required */
		fromPermissionArn: FormControl<string | null | undefined>,
		fromPermissionVersion: FormControl<number | null | undefined>,

		/** Required */
		toPermissionArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateReplacePermissionAssociationsRequestFormGroup() {
		return new FormGroup<ReplacePermissionAssociationsRequestFormProperties>({
			fromPermissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fromPermissionVersion: new FormControl<number | null | undefined>(undefined),
			toPermissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceShareFeatureSet { CREATED_FROM_POLICY = 'CREATED_FROM_POLICY', PROMOTING_TO_STANDARD = 'PROMOTING_TO_STANDARD', STANDARD = 'STANDARD' }

	export interface SetDefaultPermissionVersionRequest {

		/** Required */
		permissionArn: string;

		/** Required */
		permissionVersion: number;
		clientToken?: string;
	}
	export interface SetDefaultPermissionVersionRequestFormProperties {

		/** Required */
		permissionArn: FormControl<string | null | undefined>,

		/** Required */
		permissionVersion: FormControl<number | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateSetDefaultPermissionVersionRequestFormGroup() {
		return new FormGroup<SetDefaultPermissionVersionRequestFormProperties>({
			permissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permissionVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {
		resourceShareArn?: string;

		/** Required */
		tags: Array<Tag>;
		resourceArn?: string;
	}
	export interface TagResourceRequestFormProperties {
		resourceShareArn: FormControl<string | null | undefined>,
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined),
			resourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UntagResourceRequest {
		resourceShareArn?: string;

		/** Required */
		tagKeys: Array<string>;
		resourceArn?: string;
	}
	export interface UntagResourceRequestFormProperties {
		resourceShareArn: FormControl<string | null | undefined>,
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined),
			resourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateResourceShareRequest {

		/** Required */
		resourceShareArn: string;
		name?: string;
		allowExternalPrincipals?: boolean | null;
		clientToken?: string;
	}
	export interface UpdateResourceShareRequestFormProperties {

		/** Required */
		resourceShareArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		allowExternalPrincipals: FormControl<boolean | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourceShareRequestFormGroup() {
		return new FormGroup<UpdateResourceShareRequestFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			allowExternalPrincipals: new FormControl<boolean | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Accepts an invitation to a resource share from another Amazon Web Services account. After you accept the invitation, the resources included in the resource share are available to interact with in the relevant Amazon Web Services Management Consoles and tools.
		 * Post acceptresourceshareinvitation
		 * @return {AcceptResourceShareInvitationResponse} Success
		 */
		AcceptResourceShareInvitation(requestBody: AcceptResourceShareInvitationPostBody): Observable<AcceptResourceShareInvitationResponse> {
			return this.http.post<AcceptResourceShareInvitationResponse>(this.baseUri + 'acceptresourceshareinvitation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds the specified list of principals and list of resources to a resource share. Principals that already have access to this resource share immediately receive access to the added resources. Newly added principals immediately receive access to the resources shared in this resource share.
		 * Post associateresourceshare
		 * @return {AssociateResourceShareResponse} Success
		 */
		AssociateResourceShare(requestBody: AssociateResourceSharePostBody): Observable<AssociateResourceShareResponse> {
			return this.http.post<AssociateResourceShareResponse>(this.baseUri + 'associateresourceshare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds or replaces the RAM permission for a resource type included in a resource share. You can have exactly one permission associated with each resource type in the resource share. You can add a new RAM permission only if there are currently no resources of that resource type currently in the resource share.
		 * Post associateresourcesharepermission
		 * @return {AssociateResourceSharePermissionResponse} Success
		 */
		AssociateResourceSharePermission(requestBody: AssociateResourceSharePermissionPostBody): Observable<AssociateResourceSharePermissionResponse> {
			return this.http.post<AssociateResourceSharePermissionResponse>(this.baseUri + 'associateresourcesharepermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a customer managed permission for a specified resource type that you can attach to resource shares. It is created in the Amazon Web Services Region in which you call the operation.
		 * Post createpermission
		 * @return {CreatePermissionResponse} Success
		 */
		CreatePermission(requestBody: CreatePermissionPostBody): Observable<CreatePermissionResponse> {
			return this.http.post<CreatePermissionResponse>(this.baseUri + 'createpermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new version of the specified customer managed permission. The new version is automatically set as the default version of the customer managed permission. New resource shares automatically use the default permission. Existing resource shares continue to use their original permission versions, but you can use <a>ReplacePermissionAssociations</a> to update them.</p> <p>If the specified customer managed permission already has the maximum of 5 versions, then you must delete one of the existing versions before you can create a new one.</p>
		 * Post createpermissionversion
		 * @return {CreatePermissionVersionResponse} Success
		 */
		CreatePermissionVersion(requestBody: CreatePermissionVersionPostBody): Observable<CreatePermissionVersionResponse> {
			return this.http.post<CreatePermissionVersionResponse>(this.baseUri + 'createpermissionversion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a resource share. You can provide a list of the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for the resources that you want to share, a list of principals you want to share the resources with, and the permissions to grant those principals.</p> <note> <p>Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it.</p> </note>
		 * Post createresourceshare
		 * @return {CreateResourceShareResponse} Success
		 */
		CreateResourceShare(requestBody: CreateResourceSharePostBody): Observable<CreateResourceShareResponse> {
			return this.http.post<CreateResourceShareResponse>(this.baseUri + 'createresourceshare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified customer managed permission in the Amazon Web Services Region in which you call this operation. You can delete a customer managed permission only if it isn't attached to any resource share. The operation deletes all versions associated with the customer managed permission.
		 * Delete deletepermission#permissionArn
		 * @param {string} permissionArn Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the customer managed permission that you want to delete.
		 * @param {string} clientToken <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
		 * @return {DeletePermissionResponse} Success
		 */
		DeletePermission(permissionArn: string, clientToken: string | null | undefined): Observable<DeletePermissionResponse> {
			return this.http.delete<DeletePermissionResponse>(this.baseUri + 'deletepermission#permissionArn?permissionArn=' + (permissionArn == null ? '' : encodeURIComponent(permissionArn)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), {});
		}

		/**
		 * <p>Deletes one version of a customer managed permission. The version you specify must not be attached to any resource share and must not be the default version for the permission.</p> <p>If a customer managed permission has the maximum of 5 versions, then you must delete at least one version before you can create another.</p>
		 * Delete deletepermissionversion#permissionArn&permissionVersion
		 * @param {string} permissionArn Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the permission with the version you want to delete.
		 * @param {number} permissionVersion <p>Specifies the version number to delete.</p> <p>You can't delete the default version for a customer managed permission.</p> <p>You can't delete a version if it's the only version of the permission. You must either first create another version, or delete the permission completely.</p> <p>You can't delete a version if it is attached to any resource shares. If the version is the default, you must first use <a>SetDefaultPermissionVersion</a> to set a different version as the default for the customer managed permission, and then use <a>AssociateResourceSharePermission</a> to update your resource shares to use the new default version.</p>
		 * @param {string} clientToken <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
		 * @return {DeletePermissionVersionResponse} Success
		 */
		DeletePermissionVersion(permissionArn: string, permissionVersion: number, clientToken: string | null | undefined): Observable<DeletePermissionVersionResponse> {
			return this.http.delete<DeletePermissionVersionResponse>(this.baseUri + 'deletepermissionversion#permissionArn&permissionVersion?permissionArn=' + (permissionArn == null ? '' : encodeURIComponent(permissionArn)) + '&permissionVersion=' + permissionVersion + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), {});
		}

		/**
		 * <p>Deletes the specified resource share.</p> <important> <p>This doesn't delete any of the resources that were associated with the resource share; it only stops the sharing of those resources through this resource share.</p> </important>
		 * Delete deleteresourceshare#resourceShareArn
		 * @param {string} resourceShareArn Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share to delete.
		 * @param {string} clientToken <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
		 * @return {DeleteResourceShareResponse} Success
		 */
		DeleteResourceShare(resourceShareArn: string, clientToken: string | null | undefined): Observable<DeleteResourceShareResponse> {
			return this.http.delete<DeleteResourceShareResponse>(this.baseUri + 'deleteresourceshare#resourceShareArn?resourceShareArn=' + (resourceShareArn == null ? '' : encodeURIComponent(resourceShareArn)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), {});
		}

		/**
		 * Removes the specified principals or resources from participating in the specified resource share.
		 * Post disassociateresourceshare
		 * @return {DisassociateResourceShareResponse} Success
		 */
		DisassociateResourceShare(requestBody: DisassociateResourceSharePostBody): Observable<DisassociateResourceShareResponse> {
			return this.http.post<DisassociateResourceShareResponse>(this.baseUri + 'disassociateresourceshare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a managed permission from a resource share. Permission changes take effect immediately. You can remove a managed permission from a resource share only if there are currently no resources of the relevant resource type currently attached to the resource share.
		 * Post disassociateresourcesharepermission
		 * @return {DisassociateResourceSharePermissionResponse} Success
		 */
		DisassociateResourceSharePermission(requestBody: DisassociateResourceSharePermissionPostBody): Observable<DisassociateResourceSharePermissionResponse> {
			return this.http.post<DisassociateResourceSharePermissionResponse>(this.baseUri + 'disassociateresourcesharepermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enables resource sharing within your organization in Organizations. This operation creates a service-linked role called <code>AWSServiceRoleForResourceAccessManager</code> that has the IAM managed policy named AWSResourceAccessManagerServiceRolePolicy attached. This role permits RAM to retrieve information about the organization and its structure. This lets you share resources with all of the accounts in the calling account's organization by specifying the organization ID, or all of the accounts in an organizational unit (OU) by specifying the OU ID. Until you enable sharing within the organization, you can specify only individual Amazon Web Services accounts, or for supported resource types, IAM roles and users.</p> <p>You must call this operation from an IAM role or user in the organization's management account.</p> <p/>
		 * Post enablesharingwithawsorganization
		 * @return {EnableSharingWithAwsOrganizationResponse} Success
		 */
		EnableSharingWithAwsOrganization(): Observable<EnableSharingWithAwsOrganizationResponse> {
			return this.http.post<EnableSharingWithAwsOrganizationResponse>(this.baseUri + 'enablesharingwithawsorganization', null, {});
		}

		/**
		 * Retrieves the contents of a managed permission in JSON format.
		 * Post getpermission
		 * @return {GetPermissionResponse} Success
		 */
		GetPermission(requestBody: GetPermissionPostBody): Observable<GetPermissionResponse> {
			return this.http.post<GetPermissionResponse>(this.baseUri + 'getpermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the resource policies for the specified resources that you own and have shared.
		 * Post getresourcepolicies
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetResourcePoliciesResponse} Success
		 */
		GetResourcePolicies(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetResourcePoliciesPostBody): Observable<GetResourcePoliciesResponse> {
			return this.http.post<GetResourcePoliciesResponse>(this.baseUri + 'getresourcepolicies?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the lists of resources and principals that associated for resource shares that you own.
		 * Post getresourceshareassociations
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetResourceShareAssociationsResponse} Success
		 */
		GetResourceShareAssociations(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetResourceShareAssociationsPostBody): Observable<GetResourceShareAssociationsResponse> {
			return this.http.post<GetResourceShareAssociationsResponse>(this.baseUri + 'getresourceshareassociations?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves details about invitations that you have received for resource shares.
		 * Post getresourceshareinvitations
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetResourceShareInvitationsResponse} Success
		 */
		GetResourceShareInvitations(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetResourceShareInvitationsPostBody): Observable<GetResourceShareInvitationsResponse> {
			return this.http.post<GetResourceShareInvitationsResponse>(this.baseUri + 'getresourceshareinvitations?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves details about the resource shares that you own or that are shared with you.
		 * Post getresourceshares
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetResourceSharesResponse} Success
		 */
		GetResourceShares(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetResourceSharesPostBody): Observable<GetResourceSharesResponse> {
			return this.http.post<GetResourceSharesResponse>(this.baseUri + 'getresourceshares?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the resources in a resource share that is shared with you but for which the invitation is still <code>PENDING</code>. That means that you haven't accepted or rejected the invitation and the invitation hasn't expired.
		 * Post listpendinginvitationresources
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPendingInvitationResourcesResponse} Success
		 */
		ListPendingInvitationResources(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListPendingInvitationResourcesPostBody): Observable<ListPendingInvitationResourcesResponse> {
			return this.http.post<ListPendingInvitationResourcesResponse>(this.baseUri + 'listpendinginvitationresources?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the managed permission and its associations to any resource shares that use this managed permission. This lets you see which resource shares use which versions of the specified managed permission.
		 * Post listpermissionassociations
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPermissionAssociationsResponse} Success
		 */
		ListPermissionAssociations(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListPermissionAssociationsPostBody): Observable<ListPermissionAssociationsResponse> {
			return this.http.post<ListPermissionAssociationsResponse>(this.baseUri + 'listpermissionassociations?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the available versions of the specified RAM permission.
		 * Post listpermissionversions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPermissionVersionsResponse} Success
		 */
		ListPermissionVersions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListPermissionVersionsPostBody): Observable<ListPermissionVersionsResponse> {
			return this.http.post<ListPermissionVersionsResponse>(this.baseUri + 'listpermissionversions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of available RAM permissions that you can use for the supported resource types.
		 * Post listpermissions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPermissionsResponse} Success
		 */
		ListPermissions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListPermissionsPostBody): Observable<ListPermissionsResponse> {
			return this.http.post<ListPermissionsResponse>(this.baseUri + 'listpermissions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the principals that you are sharing resources with or that are sharing resources with you.
		 * Post listprincipals
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPrincipalsResponse} Success
		 */
		ListPrincipals(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListPrincipalsPostBody): Observable<ListPrincipalsResponse> {
			return this.http.post<ListPrincipalsResponse>(this.baseUri + 'listprincipals?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the current status of the asynchronous tasks performed by RAM when you perform the <a>ReplacePermissionAssociationsWork</a> operation.
		 * Post listreplacepermissionassociationswork
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListReplacePermissionAssociationsWorkResponse} Success
		 */
		ListReplacePermissionAssociationsWork(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListReplacePermissionAssociationsWorkPostBody): Observable<ListReplacePermissionAssociationsWorkResponse> {
			return this.http.post<ListReplacePermissionAssociationsWorkResponse>(this.baseUri + 'listreplacepermissionassociationswork?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the RAM permissions that are associated with a resource share.
		 * Post listresourcesharepermissions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListResourceSharePermissionsResponse} Success
		 */
		ListResourceSharePermissions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListResourceSharePermissionsPostBody): Observable<ListResourceSharePermissionsResponse> {
			return this.http.post<ListResourceSharePermissionsResponse>(this.baseUri + 'listresourcesharepermissions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the resource types that can be shared by RAM.
		 * Post listresourcetypes
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListResourceTypesResponse} Success
		 */
		ListResourceTypes(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListResourceTypesPostBody): Observable<ListResourceTypesResponse> {
			return this.http.post<ListResourceTypesResponse>(this.baseUri + 'listresourcetypes?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the resources that you added to a resource share or the resources that are shared with you.
		 * Post listresources
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListResourcesResponse} Success
		 */
		ListResources(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListResourcesPostBody): Observable<ListResourcesResponse> {
			return this.http.post<ListResourcesResponse>(this.baseUri + 'listresources?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation creates a separate, fully manageable customer managed permission that has the same IAM permissions as the original resource-based policy. You can associate this customer managed permission to any resource shares.</p> <p>Before you use <a>PromoteResourceShareCreatedFromPolicy</a>, you should first run this operation to ensure that you have an appropriate customer managed permission that can be associated with the promoted resource share.</p> <note> <ul> <li> <p>The original <code>CREATED_FROM_POLICY</code> policy isn't deleted, and resource shares using that original policy aren't automatically updated.</p> </li> <li> <p>You can't modify a <code>CREATED_FROM_POLICY</code> resource share so you can't associate the new customer managed permission by using <code>ReplacePermsissionAssociations</code>. However, if you use <a>PromoteResourceShareCreatedFromPolicy</a>, that operation automatically associates the fully manageable customer managed permission to the newly promoted <code>STANDARD</code> resource share.</p> </li> <li> <p>After you promote a resource share, if the original <code>CREATED_FROM_POLICY</code> managed permission has no other associations to A resource share, then RAM automatically deletes it.</p> </li> </ul> </note>
		 * Post promotepermissioncreatedfrompolicy
		 * @return {PromotePermissionCreatedFromPolicyResponse} Success
		 */
		PromotePermissionCreatedFromPolicy(requestBody: PromotePermissionCreatedFromPolicyPostBody): Observable<PromotePermissionCreatedFromPolicyResponse> {
			return this.http.post<PromotePermissionCreatedFromPolicyResponse>(this.baseUri + 'promotepermissioncreatedfrompolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.</p> <p>This operation promotes the resource share to a <code>STANDARD</code> resource share that is fully manageable in RAM. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with.</p> <important> <p>Before you perform this operation, you should first run <a>PromotePermissionCreatedFromPolicy</a>to ensure that you have an appropriate customer managed permission that can be associated with this resource share after its is promoted. If this operation can't find a managed permission that exactly matches the existing <code>CREATED_FROM_POLICY</code> permission, then this operation fails.</p> </important>
		 * Post promoteresourcesharecreatedfrompolicy#resourceShareArn
		 * @param {string} resourceShareArn Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share to promote.
		 * @return {PromoteResourceShareCreatedFromPolicyResponse} Success
		 */
		PromoteResourceShareCreatedFromPolicy(resourceShareArn: string): Observable<PromoteResourceShareCreatedFromPolicyResponse> {
			return this.http.post<PromoteResourceShareCreatedFromPolicyResponse>(this.baseUri + 'promoteresourcesharecreatedfrompolicy#resourceShareArn?resourceShareArn=' + (resourceShareArn == null ? '' : encodeURIComponent(resourceShareArn)), null, {});
		}

		/**
		 * Rejects an invitation to a resource share from another Amazon Web Services account.
		 * Post rejectresourceshareinvitation
		 * @return {RejectResourceShareInvitationResponse} Success
		 */
		RejectResourceShareInvitation(requestBody: RejectResourceShareInvitationPostBody): Observable<RejectResourceShareInvitationResponse> {
			return this.http.post<RejectResourceShareInvitationResponse>(this.baseUri + 'rejectresourceshareinvitation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates all resource shares that use a managed permission to a different managed permission. This operation always applies the default version of the target managed permission. You can optionally specify that the update applies to only resource shares that currently use a specified version. This enables you to update to the latest version, without changing the which managed permission is used.</p> <p>You can use this operation to update all of your resource shares to use the current default version of the permission by specifying the same value for the <code>fromPermissionArn</code> and <code>toPermissionArn</code> parameters.</p> <p>You can use the optional <code>fromPermissionVersion</code> parameter to update only those resources that use a specified version of the managed permission to the new managed permission.</p> <important> <p>To successfully perform this operation, you must have permission to update the resource-based policy on all affected resource types.</p> </important>
		 * Post replacepermissionassociations
		 * @return {ReplacePermissionAssociationsResponse} Success
		 */
		ReplacePermissionAssociations(requestBody: ReplacePermissionAssociationsPostBody): Observable<ReplacePermissionAssociationsResponse> {
			return this.http.post<ReplacePermissionAssociationsResponse>(this.baseUri + 'replacepermissionassociations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Designates the specified version number as the default version for the specified customer managed permission. New resource shares automatically use this new default permission. Existing resource shares continue to use their original permission version, but you can use <a>ReplacePermissionAssociations</a> to update them.
		 * Post setdefaultpermissionversion
		 * @return {SetDefaultPermissionVersionResponse} Success
		 */
		SetDefaultPermissionVersion(requestBody: SetDefaultPermissionVersionPostBody): Observable<SetDefaultPermissionVersionResponse> {
			return this.http.post<SetDefaultPermissionVersionResponse>(this.baseUri + 'setdefaultpermissionversion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds the specified tag keys and values to a resource share or managed permission. If you choose a resource share, the tags are attached to only the resource share, not to the resources that are in the resource share.</p> <p>The tags on a managed permission are the same for all versions of the managed permission.</p>
		 * Post tagresource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tagresource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tag key and value pairs from the specified resource share or managed permission.
		 * Post untagresource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourcePostBody): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + 'untagresource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies some of the properties of the specified resource share.
		 * Post updateresourceshare
		 * @return {UpdateResourceShareResponse} Success
		 */
		UpdateResourceShare(requestBody: UpdateResourceSharePostBody): Observable<UpdateResourceShareResponse> {
			return this.http.post<UpdateResourceShareResponse>(this.baseUri + 'updateresourceshare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AcceptResourceShareInvitationPostBody {

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation that you want to accept.
		 * Required
		 */
		resourceShareInvitationArn: string;

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken?: string | null;
	}
	export interface AcceptResourceShareInvitationPostBodyFormProperties {

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation that you want to accept.
		 * Required
		 */
		resourceShareInvitationArn: FormControl<string | null | undefined>,

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAcceptResourceShareInvitationPostBodyFormGroup() {
		return new FormGroup<AcceptResourceShareInvitationPostBodyFormProperties>({
			resourceShareInvitationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateResourceSharePostBody {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to add principals or resources to.
		 * Required
		 */
		resourceShareArn: string;

		/** Specifies a list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resources that you want to share. This can be <code>null</code> if you want to add only principals. */
		resourceArns?: Array<string>;

		/** <p>Specifies a list of principals to whom you want to the resource share. This can be <code>null</code> if you want to add only resources.</p> <p>What the principals can do with the resources in the share is determined by the RAM permissions that you associate with the resource share. See <a>AssociateResourceSharePermission</a>.</p> <p>You can include the following values:</p> <ul> <li> <p>An Amazon Web Services account ID, for example: <code>123456789012</code> </p> </li> <li> <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example: <code>organizations::123456789012:organization/o-exampleorgid</code> </p> </li> <li> <p>An ARN of an organizational unit (OU) in Organizations, for example: <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code> </p> </li> <li> <p>An ARN of an IAM role, for example: <code>iam::123456789012:role/rolename</code> </p> </li> <li> <p>An ARN of an IAM user, for example: <code>iam::123456789012user/username</code> </p> </li> </ul> <note> <p>Not all resource types can be shared with IAM roles and users. For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User Guide</i>.</p> </note> */
		principals?: Array<string>;

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken?: string | null;

		/** Specifies from which source accounts the service principal has access to the resources in this resource share. */
		sources?: Array<string>;
	}
	export interface AssociateResourceSharePostBodyFormProperties {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to add principals or resources to.
		 * Required
		 */
		resourceShareArn: FormControl<string | null | undefined>,

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateResourceSharePostBodyFormGroup() {
		return new FormGroup<AssociateResourceSharePostBodyFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateResourceSharePermissionPostBody {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share to which you want to add or replace permissions.
		 * Required
		 */
		resourceShareArn: string;

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the RAM permission to associate with the resource share. To find the ARN for a permission, use either the <a>ListPermissions</a> operation or go to the <a href="https://console.aws.amazon.com/ram/home#Permissions:">Permissions library</a> page in the RAM console and then choose the name of the permission. The ARN is displayed on the detail page.
		 * Required
		 */
		permissionArn: string;

		/** <p>Specifies whether the specified permission should replace the existing permission associated with the resource share. Use <code>true</code> to replace the current permissions. Use <code>false</code> to add the permission to a resource share that currently doesn't have a permission. The default value is <code>false</code>.</p> <note> <p>A resource share can have only one permission per resource type. If a resource share already has a permission for the specified resource type and you don't set <code>replace</code> to <code>true</code> then the operation returns an error. This helps prevent accidental overwriting of a permission.</p> </note> */
		replace?: boolean | null;

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken?: string | null;

		/** <p>Specifies the version of the RAM permission to associate with the resource share. You can specify <i>only</i> the version that is currently set as the default version for the permission. If you also set the <code>replace</code> pararameter to <code>true</code>, then this operation updates an outdated version of the permission to the current default version.</p> <note> <p>You don't need to specify this parameter because the default behavior is to use the version that is currently set as the default version for the permission. This parameter is supported for backwards compatibility.</p> </note> */
		permissionVersion?: number | null;
	}
	export interface AssociateResourceSharePermissionPostBodyFormProperties {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share to which you want to add or replace permissions.
		 * Required
		 */
		resourceShareArn: FormControl<string | null | undefined>,

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the RAM permission to associate with the resource share. To find the ARN for a permission, use either the <a>ListPermissions</a> operation or go to the <a href="https://console.aws.amazon.com/ram/home#Permissions:">Permissions library</a> page in the RAM console and then choose the name of the permission. The ARN is displayed on the detail page.
		 * Required
		 */
		permissionArn: FormControl<string | null | undefined>,

		/** <p>Specifies whether the specified permission should replace the existing permission associated with the resource share. Use <code>true</code> to replace the current permissions. Use <code>false</code> to add the permission to a resource share that currently doesn't have a permission. The default value is <code>false</code>.</p> <note> <p>A resource share can have only one permission per resource type. If a resource share already has a permission for the specified resource type and you don't set <code>replace</code> to <code>true</code> then the operation returns an error. This helps prevent accidental overwriting of a permission.</p> </note> */
		replace: FormControl<boolean | null | undefined>,

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken: FormControl<string | null | undefined>,

		/** <p>Specifies the version of the RAM permission to associate with the resource share. You can specify <i>only</i> the version that is currently set as the default version for the permission. If you also set the <code>replace</code> pararameter to <code>true</code>, then this operation updates an outdated version of the permission to the current default version.</p> <note> <p>You don't need to specify this parameter because the default behavior is to use the version that is currently set as the default version for the permission. This parameter is supported for backwards compatibility.</p> </note> */
		permissionVersion: FormControl<number | null | undefined>,
	}
	export function CreateAssociateResourceSharePermissionPostBodyFormGroup() {
		return new FormGroup<AssociateResourceSharePermissionPostBodyFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replace: new FormControl<boolean | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			permissionVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreatePermissionPostBody {

		/**
		 * Specifies the name of the customer managed permission. The name must be unique within the Amazon Web Services Region.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		name: string;

		/**
		 * <p>Specifies the name of the resource type that this customer managed permission applies to.</p> <p>The format is <code> <i>&lt;service-code&gt;</i>:<i>&lt;resource-type&gt;</i> </code> and is not case sensitive. For example, to specify an Amazon EC2 Subnet, you can use the string <code>ec2:subnet</code>. To see the list of valid values for this parameter, query the <a>ListResourceTypes</a> operation.</p>
		 * Required
		 */
		resourceType: string;

		/**
		 * <p>A string in JSON format string that contains the following elements of a resource-based policy:</p> <ul> <li> <p> <b>Effect</b>: must be set to <code>ALLOW</code>.</p> </li> <li> <p> <b>Action</b>: specifies the actions that are allowed by this customer managed permission. The list must contain only actions that are supported by the specified resource type. For a list of all actions supported by each resource type, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> <li> <p> <b>Condition</b>: (optional) specifies conditional parameters that must evaluate to true when a user attempts an action for that action to be allowed. For more information about the Condition element, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM policies: Condition element</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> </ul> <p>This template can't include either the <code>Resource</code> or <code>Principal</code> elements. Those are both filled in by RAM when it instantiates the resource-based policy on each resource shared using this managed permission. The <code>Resource</code> comes from the ARN of the specific resource that you are sharing. The <code>Principal</code> comes from the list of identities added to the resource share.</p>
		 * Required
		 */
		policyTemplate: string;

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken?: string | null;

		/** Specifies a list of one or more tag key and value pairs to attach to the permission. */
		tags?: Array<Tag>;
	}
	export interface CreatePermissionPostBodyFormProperties {

		/**
		 * Specifies the name of the customer managed permission. The name must be unique within the Amazon Web Services Region.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * <p>Specifies the name of the resource type that this customer managed permission applies to.</p> <p>The format is <code> <i>&lt;service-code&gt;</i>:<i>&lt;resource-type&gt;</i> </code> and is not case sensitive. For example, to specify an Amazon EC2 Subnet, you can use the string <code>ec2:subnet</code>. To see the list of valid values for this parameter, query the <a>ListResourceTypes</a> operation.</p>
		 * Required
		 */
		resourceType: FormControl<string | null | undefined>,

		/**
		 * <p>A string in JSON format string that contains the following elements of a resource-based policy:</p> <ul> <li> <p> <b>Effect</b>: must be set to <code>ALLOW</code>.</p> </li> <li> <p> <b>Action</b>: specifies the actions that are allowed by this customer managed permission. The list must contain only actions that are supported by the specified resource type. For a list of all actions supported by each resource type, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> <li> <p> <b>Condition</b>: (optional) specifies conditional parameters that must evaluate to true when a user attempts an action for that action to be allowed. For more information about the Condition element, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM policies: Condition element</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> </ul> <p>This template can't include either the <code>Resource</code> or <code>Principal</code> elements. Those are both filled in by RAM when it instantiates the resource-based policy on each resource shared using this managed permission. The <code>Resource</code> comes from the ARN of the specific resource that you are sharing. The <code>Principal</code> comes from the list of identities added to the resource share.</p>
		 * Required
		 */
		policyTemplate: FormControl<string | null | undefined>,

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePermissionPostBodyFormGroup() {
		return new FormGroup<CreatePermissionPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36), Validators.pattern('[\w.-]*')]),
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePermissionVersionPostBody {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the customer managed permission you're creating a new version for.
		 * Required
		 */
		permissionArn: string;

		/**
		 * <p>A string in JSON format string that contains the following elements of a resource-based policy:</p> <ul> <li> <p> <b>Effect</b>: must be set to <code>ALLOW</code>.</p> </li> <li> <p> <b>Action</b>: specifies the actions that are allowed by this customer managed permission. The list must contain only actions that are supported by the specified resource type. For a list of all actions supported by each resource type, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> <li> <p> <b>Condition</b>: (optional) specifies conditional parameters that must evaluate to true when a user attempts an action for that action to be allowed. For more information about the Condition element, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM policies: Condition element</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> </ul> <p>This template can't include either the <code>Resource</code> or <code>Principal</code> elements. Those are both filled in by RAM when it instantiates the resource-based policy on each resource shared using this managed permission. The <code>Resource</code> comes from the ARN of the specific resource that you are sharing. The <code>Principal</code> comes from the list of identities added to the resource share.</p>
		 * Required
		 */
		policyTemplate: string;

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken?: string | null;
	}
	export interface CreatePermissionVersionPostBodyFormProperties {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the customer managed permission you're creating a new version for.
		 * Required
		 */
		permissionArn: FormControl<string | null | undefined>,

		/**
		 * <p>A string in JSON format string that contains the following elements of a resource-based policy:</p> <ul> <li> <p> <b>Effect</b>: must be set to <code>ALLOW</code>.</p> </li> <li> <p> <b>Action</b>: specifies the actions that are allowed by this customer managed permission. The list must contain only actions that are supported by the specified resource type. For a list of all actions supported by each resource type, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> <li> <p> <b>Condition</b>: (optional) specifies conditional parameters that must evaluate to true when a user attempts an action for that action to be allowed. For more information about the Condition element, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM policies: Condition element</a> in the <i>Identity and Access Management User Guide</i>.</p> </li> </ul> <p>This template can't include either the <code>Resource</code> or <code>Principal</code> elements. Those are both filled in by RAM when it instantiates the resource-based policy on each resource shared using this managed permission. The <code>Resource</code> comes from the ARN of the specific resource that you are sharing. The <code>Principal</code> comes from the list of identities added to the resource share.</p>
		 * Required
		 */
		policyTemplate: FormControl<string | null | undefined>,

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePermissionVersionPostBodyFormGroup() {
		return new FormGroup<CreatePermissionVersionPostBodyFormProperties>({
			permissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateResourceSharePostBody {

		/**
		 * Specifies the name of the resource share.
		 * Required
		 */
		name: string;

		/** Specifies a list of one or more ARNs of the resources to associate with the resource share. */
		resourceArns?: Array<string>;

		/** <p>Specifies a list of one or more principals to associate with the resource share.</p> <p>You can include the following values:</p> <ul> <li> <p>An Amazon Web Services account ID, for example: <code>123456789012</code> </p> </li> <li> <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example: <code>organizations::123456789012:organization/o-exampleorgid</code> </p> </li> <li> <p>An ARN of an organizational unit (OU) in Organizations, for example: <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code> </p> </li> <li> <p>An ARN of an IAM role, for example: <code>iam::123456789012:role/rolename</code> </p> </li> <li> <p>An ARN of an IAM user, for example: <code>iam::123456789012user/username</code> </p> </li> </ul> <note> <p>Not all resource types can be shared with IAM roles and users. For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User Guide</i>.</p> </note> */
		principals?: Array<string>;

		/** Specifies one or more tags to attach to the resource share itself. It doesn't attach the tags to the resources associated with the resource share. */
		tags?: Array<Tag>;

		/** Specifies whether principals outside your organization in Organizations can be associated with a resource share. A value of <code>true</code> lets you share with individual Amazon Web Services accounts that are <i>not</i> in your organization. A value of <code>false</code> only has meaning if your account is a member of an Amazon Web Services Organization. The default value is <code>true</code>. */
		allowExternalPrincipals?: boolean | null;

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken?: string | null;

		/** Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the RAM permission to associate with the resource share. If you do not specify an ARN for the permission, RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share. */
		permissionArns?: Array<string>;

		/** Specifies from which source accounts the service principal has access to the resources in this resource share. */
		sources?: Array<string>;
	}
	export interface CreateResourceSharePostBodyFormProperties {

		/**
		 * Specifies the name of the resource share.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Specifies whether principals outside your organization in Organizations can be associated with a resource share. A value of <code>true</code> lets you share with individual Amazon Web Services accounts that are <i>not</i> in your organization. A value of <code>false</code> only has meaning if your account is a member of an Amazon Web Services Organization. The default value is <code>true</code>. */
		allowExternalPrincipals: FormControl<boolean | null | undefined>,

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourceSharePostBodyFormGroup() {
		return new FormGroup<CreateResourceSharePostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			allowExternalPrincipals: new FormControl<boolean | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateResourceSharePostBody {

		/**
		 * Specifies <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to remove resources or principals from.
		 * Required
		 */
		resourceShareArn: string;

		/** Specifies a list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> for one or more resources that you want to remove from the resource share. After the operation runs, these resources are no longer shared with principals associated with the resource share. */
		resourceArns?: Array<string>;

		/** <p>Specifies a list of one or more principals that no longer are to have access to the resources in this resource share.</p> <p>You can include the following values:</p> <ul> <li> <p>An Amazon Web Services account ID, for example: <code>123456789012</code> </p> </li> <li> <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example: <code>organizations::123456789012:organization/o-exampleorgid</code> </p> </li> <li> <p>An ARN of an organizational unit (OU) in Organizations, for example: <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code> </p> </li> <li> <p>An ARN of an IAM role, for example: <code>iam::123456789012:role/rolename</code> </p> </li> <li> <p>An ARN of an IAM user, for example: <code>iam::123456789012user/username</code> </p> </li> </ul> <note> <p>Not all resource types can be shared with IAM roles and users. For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User Guide</i>.</p> </note> */
		principals?: Array<string>;

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken?: string | null;

		/** Specifies from which source accounts the service principal no longer has access to the resources in this resource share. */
		sources?: Array<string>;
	}
	export interface DisassociateResourceSharePostBodyFormProperties {

		/**
		 * Specifies <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to remove resources or principals from.
		 * Required
		 */
		resourceShareArn: FormControl<string | null | undefined>,

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateResourceSharePostBodyFormGroup() {
		return new FormGroup<DisassociateResourceSharePostBodyFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateResourceSharePermissionPostBody {

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to remove the managed permission from.
		 * Required
		 */
		resourceShareArn: string;

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission to disassociate from the resource share. Changes to permissions take effect immediately.
		 * Required
		 */
		permissionArn: string;

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken?: string | null;
	}
	export interface DisassociateResourceSharePermissionPostBodyFormProperties {

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to remove the managed permission from.
		 * Required
		 */
		resourceShareArn: FormControl<string | null | undefined>,

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission to disassociate from the resource share. Changes to permissions take effect immediately.
		 * Required
		 */
		permissionArn: FormControl<string | null | undefined>,

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateResourceSharePermissionPostBodyFormGroup() {
		return new FormGroup<DisassociateResourceSharePermissionPostBodyFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPermissionPostBody {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the permission whose contents you want to retrieve. To find the ARN for a permission, use either the <a>ListPermissions</a> operation or go to the <a href="https://console.aws.amazon.com/ram/home#Permissions:">Permissions library</a> page in the RAM console and then choose the name of the permission. The ARN is displayed on the detail page.
		 * Required
		 */
		permissionArn: string;

		/** <p>Specifies the version number of the RAM permission to retrieve. If you don't specify this parameter, the operation retrieves the default version.</p> <p>To see the list of available versions, use <a>ListPermissionVersions</a>.</p> */
		permissionVersion?: number | null;
	}
	export interface GetPermissionPostBodyFormProperties {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the permission whose contents you want to retrieve. To find the ARN for a permission, use either the <a>ListPermissions</a> operation or go to the <a href="https://console.aws.amazon.com/ram/home#Permissions:">Permissions library</a> page in the RAM console and then choose the name of the permission. The ARN is displayed on the detail page.
		 * Required
		 */
		permissionArn: FormControl<string | null | undefined>,

		/** <p>Specifies the version number of the RAM permission to retrieve. If you don't specify this parameter, the operation retrieves the default version.</p> <p>To see the list of available versions, use <a>ListPermissionVersions</a>.</p> */
		permissionVersion: FormControl<number | null | undefined>,
	}
	export function CreateGetPermissionPostBodyFormGroup() {
		return new FormGroup<GetPermissionPostBodyFormProperties>({
			permissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permissionVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetResourcePoliciesPostBody {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resources whose policies you want to retrieve.
		 * Required
		 */
		resourceArns: Array<string>;

		/** Specifies the principal. */
		principal?: string | null;

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken?: string | null;

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface GetResourcePoliciesPostBodyFormProperties {

		/** Specifies the principal. */
		principal: FormControl<string | null | undefined>,

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetResourcePoliciesPostBodyFormGroup() {
		return new FormGroup<GetResourcePoliciesPostBodyFormProperties>({
			principal: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface GetResourceShareAssociationsPostBody {

		/**
		 * <p>Specifies whether you want to retrieve the associations that involve a specified resource or principal.</p> <ul> <li> <p> <code>PRINCIPAL</code> – list the principals whose associations you want to see.</p> </li> <li> <p> <code>RESOURCE</code> – list the resources whose associations you want to see.</p> </li> </ul>
		 * Required
		 */
		associationType: ResourceShareAssociationType;

		/** Specifies a list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resource share whose associations you want to retrieve. */
		resourceShareArns?: Array<string>;

		/** <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of a resource whose resource shares you want to retrieve.</p> <p>You cannot specify this parameter if the association type is <code>PRINCIPAL</code>.</p> */
		resourceArn?: string | null;

		/** <p>Specifies the ID of the principal whose resource shares you want to retrieve. This can be an Amazon Web Services account ID, an organization ID, an organizational unit ID, or the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an individual IAM role or user.</p> <p>You cannot specify this parameter if the association type is <code>RESOURCE</code>.</p> */
		principal?: string | null;

		/** Specifies that you want to retrieve only associations that have this status. */
		associationStatus?: ResourceShareAssociationStatus | null;

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken?: string | null;

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface GetResourceShareAssociationsPostBodyFormProperties {

		/**
		 * <p>Specifies whether you want to retrieve the associations that involve a specified resource or principal.</p> <ul> <li> <p> <code>PRINCIPAL</code> – list the principals whose associations you want to see.</p> </li> <li> <p> <code>RESOURCE</code> – list the resources whose associations you want to see.</p> </li> </ul>
		 * Required
		 */
		associationType: FormControl<ResourceShareAssociationType | null | undefined>,

		/** <p>Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of a resource whose resource shares you want to retrieve.</p> <p>You cannot specify this parameter if the association type is <code>PRINCIPAL</code>.</p> */
		resourceArn: FormControl<string | null | undefined>,

		/** <p>Specifies the ID of the principal whose resource shares you want to retrieve. This can be an Amazon Web Services account ID, an organization ID, an organizational unit ID, or the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an individual IAM role or user.</p> <p>You cannot specify this parameter if the association type is <code>RESOURCE</code>.</p> */
		principal: FormControl<string | null | undefined>,

		/** Specifies that you want to retrieve only associations that have this status. */
		associationStatus: FormControl<ResourceShareAssociationStatus | null | undefined>,

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetResourceShareAssociationsPostBodyFormGroup() {
		return new FormGroup<GetResourceShareAssociationsPostBodyFormProperties>({
			associationType: new FormControl<ResourceShareAssociationType | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined),
			principal: new FormControl<string | null | undefined>(undefined),
			associationStatus: new FormControl<ResourceShareAssociationStatus | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface GetResourceShareInvitationsPostBody {

		/** Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of the resource share invitations you want information about. */
		resourceShareInvitationArns?: Array<string>;

		/** Specifies that you want details about invitations only for the resource shares described by this list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> */
		resourceShareArns?: Array<string>;

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken?: string | null;

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface GetResourceShareInvitationsPostBodyFormProperties {

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetResourceShareInvitationsPostBodyFormGroup() {
		return new FormGroup<GetResourceShareInvitationsPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface GetResourceSharesPostBody {

		/** Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> of individual resource shares that you want information about. */
		resourceShareArns?: Array<string>;

		/** Specifies that you want to retrieve details of only those resource shares that have this status. */
		resourceShareStatus?: ResourceShareStatus | null;

		/**
		 * <p>Specifies that you want to retrieve details of only those resource shares that match the following:</p> <ul> <li> <p> <b> <code>SELF</code> </b> – resource shares that your account shares with other accounts</p> </li> <li> <p> <b> <code>OTHER-ACCOUNTS</code> </b> – resource shares that other accounts share with your account</p> </li> </ul>
		 * Required
		 */
		resourceOwner: ResourceOwner;

		/** Specifies the name of an individual resource share that you want to retrieve details about. */
		name?: string | null;

		/** Specifies that you want to retrieve details of only those resource shares that match the specified tag keys and values. */
		tagFilters?: Array<TagFilter>;

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken?: string | null;

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;

		/** Specifies that you want to retrieve details of only those resource shares that use the managed permission with this <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a>. */
		permissionArn?: string | null;

		/** Specifies that you want to retrieve details for only those resource shares that use the specified version of the managed permission. */
		permissionVersion?: number | null;
	}
	export interface GetResourceSharesPostBodyFormProperties {

		/** Specifies that you want to retrieve details of only those resource shares that have this status. */
		resourceShareStatus: FormControl<ResourceShareStatus | null | undefined>,

		/**
		 * <p>Specifies that you want to retrieve details of only those resource shares that match the following:</p> <ul> <li> <p> <b> <code>SELF</code> </b> – resource shares that your account shares with other accounts</p> </li> <li> <p> <b> <code>OTHER-ACCOUNTS</code> </b> – resource shares that other accounts share with your account</p> </li> </ul>
		 * Required
		 */
		resourceOwner: FormControl<ResourceOwner | null | undefined>,

		/** Specifies the name of an individual resource share that you want to retrieve details about. */
		name: FormControl<string | null | undefined>,

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,

		/** Specifies that you want to retrieve details of only those resource shares that use the managed permission with this <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a>. */
		permissionArn: FormControl<string | null | undefined>,

		/** Specifies that you want to retrieve details for only those resource shares that use the specified version of the managed permission. */
		permissionVersion: FormControl<number | null | undefined>,
	}
	export function CreateGetResourceSharesPostBodyFormGroup() {
		return new FormGroup<GetResourceSharesPostBodyFormProperties>({
			resourceShareStatus: new FormControl<ResourceShareStatus | null | undefined>(undefined),
			resourceOwner: new FormControl<ResourceOwner | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
			permissionArn: new FormControl<string | null | undefined>(undefined),
			permissionVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPendingInvitationResourcesPostBody {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation. You can use <a>GetResourceShareInvitations</a> to find the ARN of the invitation.
		 * Required
		 */
		resourceShareInvitationArn: string;

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken?: string | null;

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;

		/** <p>Specifies that you want the results to include only resources that have the specified scope.</p> <ul> <li> <p> <code>ALL</code> – the results include both global and regional resources or resource types.</p> </li> <li> <p> <code>GLOBAL</code> – the results include only global resources or resource types.</p> </li> <li> <p> <code>REGIONAL</code> – the results include only regional resources or resource types.</p> </li> </ul> <p>The default value is <code>ALL</code>.</p> */
		resourceRegionScope?: ResourceRegionScopeFilter | null;
	}
	export interface ListPendingInvitationResourcesPostBodyFormProperties {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation. You can use <a>GetResourceShareInvitations</a> to find the ARN of the invitation.
		 * Required
		 */
		resourceShareInvitationArn: FormControl<string | null | undefined>,

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>Specifies that you want the results to include only resources that have the specified scope.</p> <ul> <li> <p> <code>ALL</code> – the results include both global and regional resources or resource types.</p> </li> <li> <p> <code>GLOBAL</code> – the results include only global resources or resource types.</p> </li> <li> <p> <code>REGIONAL</code> – the results include only regional resources or resource types.</p> </li> </ul> <p>The default value is <code>ALL</code>.</p> */
		resourceRegionScope: FormControl<ResourceRegionScopeFilter | null | undefined>,
	}
	export function CreateListPendingInvitationResourcesPostBodyFormGroup() {
		return new FormGroup<ListPendingInvitationResourcesPostBodyFormProperties>({
			resourceShareInvitationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
			resourceRegionScope: new FormControl<ResourceRegionScopeFilter | null | undefined>(undefined),
		});

	}

	export interface ListPermissionAssociationsPostBody {

		/** Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission. */
		permissionArn?: string | null;

		/** Specifies that you want to list only those associations with resource shares that use this version of the managed permission. If you don't provide a value for this parameter, then the operation returns information about associations with resource shares that use any version of the managed permission. */
		permissionVersion?: number | null;

		/** Specifies that you want to list only those associations with resource shares that match this status. */
		associationStatus?: ResourceShareAssociationStatus | null;

		/** Specifies that you want to list only those associations with resource shares that include at least one resource of this resource type. */
		resourceType?: string | null;

		/** Specifies that you want to list only those associations with resource shares that have a <code>featureSet</code> with this value. */
		featureSet?: PermissionFeatureSet | null;

		/** <p>When <code>true</code>, specifies that you want to list only those associations with resource shares that use the default version of the specified managed permission.</p> <p>When <code>false</code> (the default value), lists associations with resource shares that use any version of the specified managed permission.</p> */
		defaultVersion?: boolean | null;

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken?: string | null;

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface ListPermissionAssociationsPostBodyFormProperties {

		/** Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission. */
		permissionArn: FormControl<string | null | undefined>,

		/** Specifies that you want to list only those associations with resource shares that use this version of the managed permission. If you don't provide a value for this parameter, then the operation returns information about associations with resource shares that use any version of the managed permission. */
		permissionVersion: FormControl<number | null | undefined>,

		/** Specifies that you want to list only those associations with resource shares that match this status. */
		associationStatus: FormControl<ResourceShareAssociationStatus | null | undefined>,

		/** Specifies that you want to list only those associations with resource shares that include at least one resource of this resource type. */
		resourceType: FormControl<string | null | undefined>,

		/** Specifies that you want to list only those associations with resource shares that have a <code>featureSet</code> with this value. */
		featureSet: FormControl<PermissionFeatureSet | null | undefined>,

		/** <p>When <code>true</code>, specifies that you want to list only those associations with resource shares that use the default version of the specified managed permission.</p> <p>When <code>false</code> (the default value), lists associations with resource shares that use any version of the specified managed permission.</p> */
		defaultVersion: FormControl<boolean | null | undefined>,

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPermissionAssociationsPostBodyFormGroup() {
		return new FormGroup<ListPermissionAssociationsPostBodyFormProperties>({
			permissionArn: new FormControl<string | null | undefined>(undefined),
			permissionVersion: new FormControl<number | null | undefined>(undefined),
			associationStatus: new FormControl<ResourceShareAssociationStatus | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			featureSet: new FormControl<PermissionFeatureSet | null | undefined>(undefined),
			defaultVersion: new FormControl<boolean | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface ListPermissionVersionsPostBody {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the RAM permission whose versions you want to list. You can use the <code>permissionVersion</code> parameter on the <a>AssociateResourceSharePermission</a> operation to specify a non-default version to attach.
		 * Required
		 */
		permissionArn: string;

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken?: string | null;

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface ListPermissionVersionsPostBodyFormProperties {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the RAM permission whose versions you want to list. You can use the <code>permissionVersion</code> parameter on the <a>AssociateResourceSharePermission</a> operation to specify a non-default version to attach.
		 * Required
		 */
		permissionArn: FormControl<string | null | undefined>,

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPermissionVersionsPostBodyFormGroup() {
		return new FormGroup<ListPermissionVersionsPostBodyFormProperties>({
			permissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface ListPermissionsPostBody {

		/** <p>Specifies that you want to list only those permissions that apply to the specified resource type. This parameter is not case sensitive.</p> <p>For example, to list only permissions that apply to Amazon EC2 subnets, specify <code>ec2:subnet</code>. You can use the <a>ListResourceTypes</a> operation to get the specific string required.</p> */
		resourceType?: string | null;

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken?: string | null;

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;

		/** <p>Specifies that you want to list only permissions of this type:</p> <ul> <li> <p> <code>AWS</code> – returns only Amazon Web Services managed permissions.</p> </li> <li> <p> <code>LOCAL</code> – returns only customer managed permissions</p> </li> <li> <p> <code>ALL</code> – returns both Amazon Web Services managed permissions and customer managed permissions.</p> </li> </ul> <p>If you don't specify this parameter, the default is <code>All</code>.</p> */
		permissionType?: PermissionTypeFilter | null;
	}
	export interface ListPermissionsPostBodyFormProperties {

		/** <p>Specifies that you want to list only those permissions that apply to the specified resource type. This parameter is not case sensitive.</p> <p>For example, to list only permissions that apply to Amazon EC2 subnets, specify <code>ec2:subnet</code>. You can use the <a>ListResourceTypes</a> operation to get the specific string required.</p> */
		resourceType: FormControl<string | null | undefined>,

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>Specifies that you want to list only permissions of this type:</p> <ul> <li> <p> <code>AWS</code> – returns only Amazon Web Services managed permissions.</p> </li> <li> <p> <code>LOCAL</code> – returns only customer managed permissions</p> </li> <li> <p> <code>ALL</code> – returns both Amazon Web Services managed permissions and customer managed permissions.</p> </li> </ul> <p>If you don't specify this parameter, the default is <code>All</code>.</p> */
		permissionType: FormControl<PermissionTypeFilter | null | undefined>,
	}
	export function CreateListPermissionsPostBodyFormGroup() {
		return new FormGroup<ListPermissionsPostBodyFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
			permissionType: new FormControl<PermissionTypeFilter | null | undefined>(undefined),
		});

	}

	export interface ListPrincipalsPostBody {

		/**
		 * <p>Specifies that you want to list information for only resource shares that match the following:</p> <ul> <li> <p> <b> <code>SELF</code> </b> – principals that your account is sharing resources with</p> </li> <li> <p> <b> <code>OTHER-ACCOUNTS</code> </b> – principals that are sharing resources with your account</p> </li> </ul>
		 * Required
		 */
		resourceOwner: ResourceOwner;

		/** Specifies that you want to list principal information for the resource share with the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a>. */
		resourceArn?: string | null;

		/** <p>Specifies that you want to list information for only the listed principals.</p> <p>You can include the following values:</p> <ul> <li> <p>An Amazon Web Services account ID, for example: <code>123456789012</code> </p> </li> <li> <p>An <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of an organization in Organizations, for example: <code>organizations::123456789012:organization/o-exampleorgid</code> </p> </li> <li> <p>An ARN of an organizational unit (OU) in Organizations, for example: <code>organizations::123456789012:ou/o-exampleorgid/ou-examplerootid-exampleouid123</code> </p> </li> <li> <p>An ARN of an IAM role, for example: <code>iam::123456789012:role/rolename</code> </p> </li> <li> <p>An ARN of an IAM user, for example: <code>iam::123456789012user/username</code> </p> </li> </ul> <note> <p>Not all resource types can be shared with IAM roles and users. For more information, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/permissions.html#permissions-rbp-supported-resource-types">Sharing with IAM roles and users</a> in the <i>Resource Access Manager User Guide</i>.</p> </note> */
		principals?: Array<string>;

		/** <p>Specifies that you want to list information for only principals associated with resource shares that include the specified resource type.</p> <p>For a list of valid values, query the <a>ListResourceTypes</a> operation.</p> */
		resourceType?: string | null;

		/** Specifies that you want to list information for only principals associated with the resource shares specified by a list the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>. */
		resourceShareArns?: Array<string>;

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken?: string | null;

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface ListPrincipalsPostBodyFormProperties {

		/**
		 * <p>Specifies that you want to list information for only resource shares that match the following:</p> <ul> <li> <p> <b> <code>SELF</code> </b> – principals that your account is sharing resources with</p> </li> <li> <p> <b> <code>OTHER-ACCOUNTS</code> </b> – principals that are sharing resources with your account</p> </li> </ul>
		 * Required
		 */
		resourceOwner: FormControl<ResourceOwner | null | undefined>,

		/** Specifies that you want to list principal information for the resource share with the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a>. */
		resourceArn: FormControl<string | null | undefined>,

		/** <p>Specifies that you want to list information for only principals associated with resource shares that include the specified resource type.</p> <p>For a list of valid values, query the <a>ListResourceTypes</a> operation.</p> */
		resourceType: FormControl<string | null | undefined>,

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPrincipalsPostBodyFormGroup() {
		return new FormGroup<ListPrincipalsPostBodyFormProperties>({
			resourceOwner: new FormControl<ResourceOwner | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface ListReplacePermissionAssociationsWorkPostBody {

		/** A list of IDs. These values come from the <code>id</code>field of the <code>replacePermissionAssociationsWork</code>structure returned by the <a>ReplacePermissionAssociations</a> operation. */
		workIds?: Array<string>;

		/** Specifies that you want to see only the details about requests with a status that matches this value. */
		status?: ReplacePermissionAssociationsWorkStatus | null;

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken?: string | null;

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface ListReplacePermissionAssociationsWorkPostBodyFormProperties {

		/** Specifies that you want to see only the details about requests with a status that matches this value. */
		status: FormControl<ReplacePermissionAssociationsWorkStatus | null | undefined>,

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListReplacePermissionAssociationsWorkPostBodyFormGroup() {
		return new FormGroup<ListReplacePermissionAssociationsWorkPostBodyFormProperties>({
			status: new FormControl<ReplacePermissionAssociationsWorkStatus | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface ListResourceSharePermissionsPostBody {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share for which you want to retrieve the associated permissions.
		 * Required
		 */
		resourceShareArn: string;

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken?: string | null;

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface ListResourceSharePermissionsPostBodyFormProperties {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share for which you want to retrieve the associated permissions.
		 * Required
		 */
		resourceShareArn: FormControl<string | null | undefined>,

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResourceSharePermissionsPostBodyFormGroup() {
		return new FormGroup<ListResourceSharePermissionsPostBodyFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface ListResourceTypesPostBody {

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken?: string | null;

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;

		/** <p>Specifies that you want the results to include only resources that have the specified scope.</p> <ul> <li> <p> <code>ALL</code> – the results include both global and regional resources or resource types.</p> </li> <li> <p> <code>GLOBAL</code> – the results include only global resources or resource types.</p> </li> <li> <p> <code>REGIONAL</code> – the results include only regional resources or resource types.</p> </li> </ul> <p>The default value is <code>ALL</code>.</p> */
		resourceRegionScope?: ResourceRegionScopeFilter | null;
	}
	export interface ListResourceTypesPostBodyFormProperties {

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>Specifies that you want the results to include only resources that have the specified scope.</p> <ul> <li> <p> <code>ALL</code> – the results include both global and regional resources or resource types.</p> </li> <li> <p> <code>GLOBAL</code> – the results include only global resources or resource types.</p> </li> <li> <p> <code>REGIONAL</code> – the results include only regional resources or resource types.</p> </li> </ul> <p>The default value is <code>ALL</code>.</p> */
		resourceRegionScope: FormControl<ResourceRegionScopeFilter | null | undefined>,
	}
	export function CreateListResourceTypesPostBodyFormGroup() {
		return new FormGroup<ListResourceTypesPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
			resourceRegionScope: new FormControl<ResourceRegionScopeFilter | null | undefined>(undefined),
		});

	}

	export interface ListResourcesPostBody {

		/**
		 * <p>Specifies that you want to list only the resource shares that match the following:</p> <ul> <li> <p> <b> <code>SELF</code> </b> – resources that your account shares with other accounts</p> </li> <li> <p> <b> <code>OTHER-ACCOUNTS</code> </b> – resources that other accounts share with your account</p> </li> </ul>
		 * Required
		 */
		resourceOwner: ResourceOwner;

		/** Specifies that you want to list only the resource shares that are associated with the specified principal. */
		principal?: string | null;

		/** <p>Specifies that you want to list only the resource shares that include resources of the specified resource type.</p> <p>For valid values, query the <a>ListResourceTypes</a> operation.</p> */
		resourceType?: string | null;

		/** Specifies that you want to list only the resource shares that include resources with the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>. */
		resourceArns?: Array<string>;

		/** Specifies that you want to list only resources in the resource shares identified by the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a>. */
		resourceShareArns?: Array<string>;

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken?: string | null;

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;

		/** <p>Specifies that you want the results to include only resources that have the specified scope.</p> <ul> <li> <p> <code>ALL</code> – the results include both global and regional resources or resource types.</p> </li> <li> <p> <code>GLOBAL</code> – the results include only global resources or resource types.</p> </li> <li> <p> <code>REGIONAL</code> – the results include only regional resources or resource types.</p> </li> </ul> <p>The default value is <code>ALL</code>.</p> */
		resourceRegionScope?: ResourceRegionScopeFilter | null;
	}
	export interface ListResourcesPostBodyFormProperties {

		/**
		 * <p>Specifies that you want to list only the resource shares that match the following:</p> <ul> <li> <p> <b> <code>SELF</code> </b> – resources that your account shares with other accounts</p> </li> <li> <p> <b> <code>OTHER-ACCOUNTS</code> </b> – resources that other accounts share with your account</p> </li> </ul>
		 * Required
		 */
		resourceOwner: FormControl<ResourceOwner | null | undefined>,

		/** Specifies that you want to list only the resource shares that are associated with the specified principal. */
		principal: FormControl<string | null | undefined>,

		/** <p>Specifies that you want to list only the resource shares that include resources of the specified resource type.</p> <p>For valid values, query the <a>ListResourceTypes</a> operation.</p> */
		resourceType: FormControl<string | null | undefined>,

		/** Specifies that you want to receive the next page of results. Valid only if you received a <code>NextToken</code> response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's <code>NextToken</code> response to request the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Specifies the total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the number you specify, the <code>NextToken</code> response element is returned with a value (not null). Include the specified value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,

		/** <p>Specifies that you want the results to include only resources that have the specified scope.</p> <ul> <li> <p> <code>ALL</code> – the results include both global and regional resources or resource types.</p> </li> <li> <p> <code>GLOBAL</code> – the results include only global resources or resource types.</p> </li> <li> <p> <code>REGIONAL</code> – the results include only regional resources or resource types.</p> </li> </ul> <p>The default value is <code>ALL</code>.</p> */
		resourceRegionScope: FormControl<ResourceRegionScopeFilter | null | undefined>,
	}
	export function CreateListResourcesPostBodyFormGroup() {
		return new FormGroup<ListResourcesPostBodyFormProperties>({
			resourceOwner: new FormControl<ResourceOwner | null | undefined>(undefined, [Validators.required]),
			principal: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
			resourceRegionScope: new FormControl<ResourceRegionScopeFilter | null | undefined>(undefined),
		});

	}

	export interface PromotePermissionCreatedFromPolicyPostBody {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the <code>CREATED_FROM_POLICY</code> permission that you want to promote. You can get this <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> by calling the <a>ListResourceSharePermissions</a> operation.
		 * Required
		 */
		permissionArn: string;

		/**
		 * Specifies a name for the promoted customer managed permission.
		 * Required
		 */
		name: string;

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken?: string | null;
	}
	export interface PromotePermissionCreatedFromPolicyPostBodyFormProperties {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the <code>CREATED_FROM_POLICY</code> permission that you want to promote. You can get this <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> by calling the <a>ListResourceSharePermissions</a> operation.
		 * Required
		 */
		permissionArn: FormControl<string | null | undefined>,

		/**
		 * Specifies a name for the promoted customer managed permission.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreatePromotePermissionCreatedFromPolicyPostBodyFormGroup() {
		return new FormGroup<PromotePermissionCreatedFromPolicyPostBodyFormProperties>({
			permissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RejectResourceShareInvitationPostBody {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation that you want to reject.
		 * Required
		 */
		resourceShareInvitationArn: string;

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken?: string | null;
	}
	export interface RejectResourceShareInvitationPostBodyFormProperties {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the invitation that you want to reject.
		 * Required
		 */
		resourceShareInvitationArn: FormControl<string | null | undefined>,

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateRejectResourceShareInvitationPostBodyFormGroup() {
		return new FormGroup<RejectResourceShareInvitationPostBodyFormProperties>({
			resourceShareInvitationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReplacePermissionAssociationsPostBody {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that you want to replace.
		 * Required
		 */
		fromPermissionArn: string;

		/** Specifies that you want to updated the permissions for only those resource shares that use the specified version of the managed permission. */
		fromPermissionVersion?: number | null;

		/**
		 * <p>Specifies the ARN of the managed permission that you want to associate with resource shares in place of the one specified by <code>fromPerssionArn</code> and <code>fromPermissionVersion</code>.</p> <p>The operation always associates the version that is currently the default for the specified managed permission.</p>
		 * Required
		 */
		toPermissionArn: string;

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken?: string | null;
	}
	export interface ReplacePermissionAssociationsPostBodyFormProperties {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that you want to replace.
		 * Required
		 */
		fromPermissionArn: FormControl<string | null | undefined>,

		/** Specifies that you want to updated the permissions for only those resource shares that use the specified version of the managed permission. */
		fromPermissionVersion: FormControl<number | null | undefined>,

		/**
		 * <p>Specifies the ARN of the managed permission that you want to associate with resource shares in place of the one specified by <code>fromPerssionArn</code> and <code>fromPermissionVersion</code>.</p> <p>The operation always associates the version that is currently the default for the specified managed permission.</p>
		 * Required
		 */
		toPermissionArn: FormControl<string | null | undefined>,

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateReplacePermissionAssociationsPostBodyFormGroup() {
		return new FormGroup<ReplacePermissionAssociationsPostBodyFormProperties>({
			fromPermissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fromPermissionVersion: new FormControl<number | null | undefined>(undefined),
			toPermissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetDefaultPermissionVersionPostBody {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the customer managed permission whose default version you want to change.
		 * Required
		 */
		permissionArn: string;

		/**
		 * Specifies the version number that you want to designate as the default for customer managed permission. To see a list of all available version numbers, use <a>ListPermissionVersions</a>.
		 * Required
		 */
		permissionVersion: number;

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken?: string | null;
	}
	export interface SetDefaultPermissionVersionPostBodyFormProperties {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the customer managed permission whose default version you want to change.
		 * Required
		 */
		permissionArn: FormControl<string | null | undefined>,

		/**
		 * Specifies the version number that you want to designate as the default for customer managed permission. To see a list of all available version numbers, use <a>ListPermissionVersions</a>.
		 * Required
		 */
		permissionVersion: FormControl<number | null | undefined>,

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateSetDefaultPermissionVersionPostBodyFormGroup() {
		return new FormGroup<SetDefaultPermissionVersionPostBodyFormProperties>({
			permissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permissionVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/** Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to add tags to. You must specify <i>either</i> <code>resourceShareArn</code>, or <code>resourceArn</code>, but not both. */
		resourceShareArn?: string | null;

		/**
		 * A list of one or more tag key and value pairs. The tag key must be present and not be an empty string. The tag value must be present but can be an empty string.
		 * Required
		 */
		tags: Array<Tag>;

		/** Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that you want to add tags to. You must specify <i>either</i> <code>resourceArn</code>, or <code>resourceShareArn</code>, but not both. */
		resourceArn?: string | null;
	}
	export interface TagResourcePostBodyFormProperties {

		/** Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to add tags to. You must specify <i>either</i> <code>resourceShareArn</code>, or <code>resourceArn</code>, but not both. */
		resourceShareArn: FormControl<string | null | undefined>,

		/** Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that you want to add tags to. You must specify <i>either</i> <code>resourceArn</code>, or <code>resourceShareArn</code>, but not both. */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined),
			resourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UntagResourcePostBody {

		/** Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to remove tags from. The tags are removed from the resource share, not the resources in the resource share. You must specify either <code>resourceShareArn</code>, or <code>resourceArn</code>, but not both. */
		resourceShareArn?: string | null;

		/**
		 * Specifies a list of one or more tag keys that you want to remove.
		 * Required
		 */
		tagKeys: Array<string>;

		/** Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that you want to remove tags from. You must specify either <code>resourceArn</code>, or <code>resourceShareArn</code>, but not both. */
		resourceArn?: string | null;
	}
	export interface UntagResourcePostBodyFormProperties {

		/** Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to remove tags from. The tags are removed from the resource share, not the resources in the resource share. You must specify either <code>resourceShareArn</code>, or <code>resourceArn</code>, but not both. */
		resourceShareArn: FormControl<string | null | undefined>,

		/** Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the managed permission that you want to remove tags from. You must specify either <code>resourceArn</code>, or <code>resourceShareArn</code>, but not both. */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourcePostBodyFormGroup() {
		return new FormGroup<UntagResourcePostBodyFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined),
			resourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateResourceSharePostBody {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to modify.
		 * Required
		 */
		resourceShareArn: string;

		/** If specified, the new name that you want to attach to the resource share. */
		name?: string | null;

		/** Specifies whether principals outside your organization in Organizations can be associated with a resource share. */
		allowExternalPrincipals?: boolean | null;

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken?: string | null;
	}
	export interface UpdateResourceSharePostBodyFormProperties {

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the resource share that you want to modify.
		 * Required
		 */
		resourceShareArn: FormControl<string | null | undefined>,

		/** If specified, the new name that you want to attach to the resource share. */
		name: FormControl<string | null | undefined>,

		/** Specifies whether principals outside your organization in Organizations can be associated with a resource share. */
		allowExternalPrincipals: FormControl<boolean | null | undefined>,

		/** <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p> */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourceSharePostBodyFormGroup() {
		return new FormGroup<UpdateResourceSharePostBodyFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			allowExternalPrincipals: new FormControl<boolean | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

}

