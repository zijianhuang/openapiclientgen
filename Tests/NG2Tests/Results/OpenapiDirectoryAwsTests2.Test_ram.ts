import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptResourceShareInvitationResponse {

		/** Describes an invitation to join a resource share. */
		resourceShareInvitation?: ResourceShareInvitation;
		clientToken?: string | null;
	}
	export interface AcceptResourceShareInvitationResponseFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAcceptResourceShareInvitationResponseFormGroup() {
		return new FormGroup<AcceptResourceShareInvitationResponseFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an invitation to join a resource share. */
	export interface ResourceShareInvitation {
		resourceShareInvitationArn?: string | null;
		resourceShareName?: string | null;
		resourceShareArn?: string | null;
		senderAccountId?: string | null;
		receiverAccountId?: string | null;
		invitationTimestamp?: Date | null;
		status?: ResourceShareInvitationStatus | null;
		resourceShareAssociations?: Array<ResourceShareAssociation>;
	}

	/** Describes an invitation to join a resource share. */
	export interface ResourceShareInvitationFormProperties {
		resourceShareInvitationArn: FormControl<string | null | undefined>,
		resourceShareName: FormControl<string | null | undefined>,
		resourceShareArn: FormControl<string | null | undefined>,
		senderAccountId: FormControl<string | null | undefined>,
		receiverAccountId: FormControl<string | null | undefined>,
		invitationTimestamp: FormControl<Date | null | undefined>,
		status: FormControl<ResourceShareInvitationStatus | null | undefined>,
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
		});

	}

	export enum ResourceShareInvitationStatus { PENDING = 0, ACCEPTED = 1, REJECTED = 2, EXPIRED = 3 }


	/** Describes an association with a resource share. */
	export interface ResourceShareAssociation {
		resourceShareArn?: string | null;
		resourceShareName?: string | null;
		associatedEntity?: string | null;
		associationType?: ResourceShareAssociationAssociationType | null;
		status?: ResourceShareAssociationStatus | null;
		statusMessage?: string | null;
		creationTime?: Date | null;
		lastUpdatedTime?: Date | null;
		external?: boolean | null;
	}

	/** Describes an association with a resource share. */
	export interface ResourceShareAssociationFormProperties {
		resourceShareArn: FormControl<string | null | undefined>,
		resourceShareName: FormControl<string | null | undefined>,
		associatedEntity: FormControl<string | null | undefined>,
		associationType: FormControl<ResourceShareAssociationAssociationType | null | undefined>,
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
			associationType: new FormControl<ResourceShareAssociationAssociationType | null | undefined>(undefined),
			status: new FormControl<ResourceShareAssociationStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			external: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ResourceShareAssociationAssociationType { PRINCIPAL = 0, RESOURCE = 1 }

	export enum ResourceShareAssociationStatus { ASSOCIATING = 0, ASSOCIATED = 1, FAILED = 2, DISASSOCIATING = 3, DISASSOCIATED = 4 }

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
		clientToken?: string | null;
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

	export interface AssociateResourceSharePermissionResponse {
		returnValue?: boolean | null;
		clientToken?: string | null;
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

	export interface CreateResourceShareResponse {

		/** Describes a resource share. */
		resourceShare?: ResourceShare;
		clientToken?: string | null;
	}
	export interface CreateResourceShareResponseFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourceShareResponseFormGroup() {
		return new FormGroup<CreateResourceShareResponseFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a resource share. */
	export interface ResourceShare {
		resourceShareArn?: string | null;
		name?: string | null;
		owningAccountId?: string | null;
		allowExternalPrincipals?: boolean | null;
		status?: ResourceShareStatus | null;
		statusMessage?: string | null;
		tags?: Array<Tag>;
		creationTime?: Date | null;
		lastUpdatedTime?: Date | null;
		featureSet?: ResourceShareFeatureSet | null;
	}

	/** Describes a resource share. */
	export interface ResourceShareFormProperties {
		resourceShareArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		owningAccountId: FormControl<string | null | undefined>,
		allowExternalPrincipals: FormControl<boolean | null | undefined>,
		status: FormControl<ResourceShareStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
		featureSet: FormControl<ResourceShareFeatureSet | null | undefined>,
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
			featureSet: new FormControl<ResourceShareFeatureSet | null | undefined>(undefined),
		});

	}

	export enum ResourceShareStatus { PENDING = 0, ACTIVE = 1, FAILED = 2, DELETING = 3, DELETED = 4 }


	/** Information about a tag. */
	export interface Tag {
		key?: string | null;
		value?: string | null;
	}

	/** Information about a tag. */
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

	export enum ResourceShareFeatureSet { CREATED_FROM_POLICY = 0, PROMOTING_TO_STANDARD = 1, STANDARD = 2 }

	export interface TagPolicyViolationException {
	}
	export interface TagPolicyViolationExceptionFormProperties {
	}
	export function CreateTagPolicyViolationExceptionFormGroup() {
		return new FormGroup<TagPolicyViolationExceptionFormProperties>({
		});

	}

	export interface DeleteResourceShareResponse {
		returnValue?: boolean | null;
		clientToken?: string | null;
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
		clientToken?: string | null;
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
		clientToken?: string | null;
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

		/** Information about an AWS RAM permission. */
		permission?: ResourceSharePermissionDetail;
	}
	export interface GetPermissionResponseFormProperties {
	}
	export function CreateGetPermissionResponseFormGroup() {
		return new FormGroup<GetPermissionResponseFormProperties>({
		});

	}


	/** Information about an AWS RAM permission. */
	export interface ResourceSharePermissionDetail {
		arn?: string | null;
		version?: string | null;
		defaultVersion?: boolean | null;
		name?: string | null;
		resourceType?: string | null;
		permission?: string | null;
		creationTime?: Date | null;
		lastUpdatedTime?: Date | null;
	}

	/** Information about an AWS RAM permission. */
	export interface ResourceSharePermissionDetailFormProperties {
		arn: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		defaultVersion: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		resourceType: FormControl<string | null | undefined>,
		permission: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
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
		});

	}

	export interface GetResourcePoliciesResponse {
		policies?: Array<string>;
		nextToken?: string | null;
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
		nextToken?: string | null;
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
		nextToken?: string | null;
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
		nextToken?: string | null;
	}
	export interface GetResourceSharesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceSharesResponseFormGroup() {
		return new FormGroup<GetResourceSharesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to filter information based on tags. */
	export interface TagFilter {
		tagKey?: string | null;
		tagValues?: Array<string>;
	}

	/** Used to filter information based on tags. */
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
		nextToken?: string | null;
	}
	export interface ListPendingInvitationResourcesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPendingInvitationResourcesResponseFormGroup() {
		return new FormGroup<ListPendingInvitationResourcesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a resource associated with a resource share. */
	export interface Resource {
		arn?: string | null;
		type?: string | null;
		resourceShareArn?: string | null;
		resourceGroupArn?: string | null;
		status?: ResourceStatus | null;
		statusMessage?: string | null;
		creationTime?: Date | null;
		lastUpdatedTime?: Date | null;
	}

	/** Describes a resource associated with a resource share. */
	export interface ResourceFormProperties {
		arn: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		resourceShareArn: FormControl<string | null | undefined>,
		resourceGroupArn: FormControl<string | null | undefined>,
		status: FormControl<ResourceStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
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
		});

	}

	export enum ResourceStatus { AVAILABLE = 0, ZONAL_RESOURCE_INACCESSIBLE = 1, LIMIT_EXCEEDED = 2, UNAVAILABLE = 3, PENDING = 4 }

	export interface MissingRequiredParameterException {
	}
	export interface MissingRequiredParameterExceptionFormProperties {
	}
	export function CreateMissingRequiredParameterExceptionFormGroup() {
		return new FormGroup<MissingRequiredParameterExceptionFormProperties>({
		});

	}

	export interface ListPermissionsResponse {
		permissions?: Array<ResourceSharePermissionSummary>;
		nextToken?: string | null;
	}
	export interface ListPermissionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPermissionsResponseFormGroup() {
		return new FormGroup<ListPermissionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a permission that is associated with a resource share. */
	export interface ResourceSharePermissionSummary {
		arn?: string | null;
		version?: string | null;
		defaultVersion?: boolean | null;
		name?: string | null;
		resourceType?: string | null;
		status?: string | null;
		creationTime?: Date | null;
		lastUpdatedTime?: Date | null;
	}

	/** Information about a permission that is associated with a resource share. */
	export interface ResourceSharePermissionSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		defaultVersion: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		resourceType: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
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
		});

	}

	export interface ListPrincipalsResponse {
		principals?: Array<Principal>;
		nextToken?: string | null;
	}
	export interface ListPrincipalsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPrincipalsResponseFormGroup() {
		return new FormGroup<ListPrincipalsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a principal for use with AWS Resource Access Manager. */
	export interface Principal {
		id?: string | null;
		resourceShareArn?: string | null;
		creationTime?: Date | null;
		lastUpdatedTime?: Date | null;
		external?: boolean | null;
	}

	/** Describes a principal for use with AWS Resource Access Manager. */
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

	export interface ListResourceSharePermissionsResponse {
		permissions?: Array<ResourceSharePermissionSummary>;
		nextToken?: string | null;
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
		nextToken?: string | null;
	}
	export interface ListResourceTypesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceTypesResponseFormGroup() {
		return new FormGroup<ListResourceTypesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the shareable resource types and the AWS services to which they belong. */
	export interface ServiceNameAndResourceType {
		resourceType?: string | null;
		serviceName?: string | null;
	}

	/** Information about the shareable resource types and the AWS services to which they belong. */
	export interface ServiceNameAndResourceTypeFormProperties {
		resourceType: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateServiceNameAndResourceTypeFormGroup() {
		return new FormGroup<ServiceNameAndResourceTypeFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourcesResponse {
		resources?: Array<Resource>;
		nextToken?: string | null;
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

	export interface RejectResourceShareInvitationResponse {

		/** Describes an invitation to join a resource share. */
		resourceShareInvitation?: ResourceShareInvitation;
		clientToken?: string | null;
	}
	export interface RejectResourceShareInvitationResponseFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateRejectResourceShareInvitationResponseFormGroup() {
		return new FormGroup<RejectResourceShareInvitationResponseFormProperties>({
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

	export interface TagLimitExceededException {
	}
	export interface TagLimitExceededExceptionFormProperties {
	}
	export function CreateTagLimitExceededExceptionFormGroup() {
		return new FormGroup<TagLimitExceededExceptionFormProperties>({
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

		/** Describes a resource share. */
		resourceShare?: ResourceShare;
		clientToken?: string | null;
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
		clientToken?: string | null;
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
		clientToken?: string | null;
	}
	export interface AssociateResourceSharePermissionRequestFormProperties {

		/** Required */
		resourceShareArn: FormControl<string | null | undefined>,

		/** Required */
		permissionArn: FormControl<string | null | undefined>,
		replace: FormControl<boolean | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateResourceSharePermissionRequestFormGroup() {
		return new FormGroup<AssociateResourceSharePermissionRequestFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replace: new FormControl<boolean | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateResourceShareRequest {

		/** Required */
		resourceShareArn: string;
		resourceArns?: Array<string>;
		principals?: Array<string>;
		clientToken?: string | null;
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

	export interface CreateResourceShareRequest {

		/** Required */
		name: string;
		resourceArns?: Array<string>;
		principals?: Array<string>;
		tags?: Array<Tag>;
		allowExternalPrincipals?: boolean | null;
		clientToken?: string | null;
		permissionArns?: Array<string>;
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
		clientToken?: string | null;
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
		clientToken?: string | null;
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
		principal?: string | null;
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface GetResourcePoliciesRequestFormProperties {
		principal: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetResourcePoliciesRequestFormGroup() {
		return new FormGroup<GetResourcePoliciesRequestFormProperties>({
			principal: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export enum ResourceShareAssociationType { PRINCIPAL = 0, RESOURCE = 1 }

	export interface GetResourceShareAssociationsRequest {

		/** Required */
		associationType: ResourceShareAssociationAssociationType;
		resourceShareArns?: Array<string>;
		resourceArn?: string | null;
		principal?: string | null;
		associationStatus?: ResourceShareAssociationStatus | null;
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface GetResourceShareAssociationsRequestFormProperties {

		/** Required */
		associationType: FormControl<ResourceShareAssociationAssociationType | null | undefined>,
		resourceArn: FormControl<string | null | undefined>,
		principal: FormControl<string | null | undefined>,
		associationStatus: FormControl<ResourceShareAssociationStatus | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetResourceShareAssociationsRequestFormGroup() {
		return new FormGroup<GetResourceShareAssociationsRequestFormProperties>({
			associationType: new FormControl<ResourceShareAssociationAssociationType | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined),
			principal: new FormControl<string | null | undefined>(undefined),
			associationStatus: new FormControl<ResourceShareAssociationStatus | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface GetResourceShareInvitationsRequest {
		resourceShareInvitationArns?: Array<string>;
		resourceShareArns?: Array<string>;
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface GetResourceShareInvitationsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetResourceShareInvitationsRequestFormGroup() {
		return new FormGroup<GetResourceShareInvitationsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export enum ResourceOwner { SELF = 0, OTHER_ACCOUNTS = 1 }

	export interface GetResourceSharesRequest {
		resourceShareArns?: Array<string>;
		resourceShareStatus?: ResourceShareStatus | null;

		/** Required */
		resourceOwner: GetResourceSharesRequestResourceOwner;
		name?: string | null;
		tagFilters?: Array<TagFilter>;
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface GetResourceSharesRequestFormProperties {
		resourceShareStatus: FormControl<ResourceShareStatus | null | undefined>,

		/** Required */
		resourceOwner: FormControl<GetResourceSharesRequestResourceOwner | null | undefined>,
		name: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetResourceSharesRequestFormGroup() {
		return new FormGroup<GetResourceSharesRequestFormProperties>({
			resourceShareStatus: new FormControl<ResourceShareStatus | null | undefined>(undefined),
			resourceOwner: new FormControl<GetResourceSharesRequestResourceOwner | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export enum GetResourceSharesRequestResourceOwner { SELF = 0, OTHER_ACCOUNTS = 1 }

	export interface ListPendingInvitationResourcesRequest {

		/** Required */
		resourceShareInvitationArn: string;
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface ListPendingInvitationResourcesRequestFormProperties {

		/** Required */
		resourceShareInvitationArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPendingInvitationResourcesRequestFormGroup() {
		return new FormGroup<ListPendingInvitationResourcesRequestFormProperties>({
			resourceShareInvitationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface ListPermissionsRequest {
		resourceType?: string | null;
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface ListPermissionsRequestFormProperties {
		resourceType: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPermissionsRequestFormGroup() {
		return new FormGroup<ListPermissionsRequestFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface ListPrincipalsRequest {

		/** Required */
		resourceOwner: ListPrincipalsRequestResourceOwner;
		resourceArn?: string | null;
		principals?: Array<string>;
		resourceType?: string | null;
		resourceShareArns?: Array<string>;
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface ListPrincipalsRequestFormProperties {

		/** Required */
		resourceOwner: FormControl<ListPrincipalsRequestResourceOwner | null | undefined>,
		resourceArn: FormControl<string | null | undefined>,
		resourceType: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPrincipalsRequestFormGroup() {
		return new FormGroup<ListPrincipalsRequestFormProperties>({
			resourceOwner: new FormControl<ListPrincipalsRequestResourceOwner | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export enum ListPrincipalsRequestResourceOwner { SELF = 0, OTHER_ACCOUNTS = 1 }

	export interface ListResourceSharePermissionsRequest {

		/** Required */
		resourceShareArn: string;
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface ListResourceSharePermissionsRequestFormProperties {

		/** Required */
		resourceShareArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResourceSharePermissionsRequestFormGroup() {
		return new FormGroup<ListResourceSharePermissionsRequestFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface ListResourceTypesRequest {
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface ListResourceTypesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResourceTypesRequestFormGroup() {
		return new FormGroup<ListResourceTypesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface ListResourcesRequest {

		/** Required */
		resourceOwner: ListResourcesRequestResourceOwner;
		principal?: string | null;
		resourceType?: string | null;
		resourceArns?: Array<string>;
		resourceShareArns?: Array<string>;
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface ListResourcesRequestFormProperties {

		/** Required */
		resourceOwner: FormControl<ListResourcesRequestResourceOwner | null | undefined>,
		principal: FormControl<string | null | undefined>,
		resourceType: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResourcesRequestFormGroup() {
		return new FormGroup<ListResourcesRequestFormProperties>({
			resourceOwner: new FormControl<ListResourcesRequestResourceOwner | null | undefined>(undefined, [Validators.required]),
			principal: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export enum ListResourcesRequestResourceOwner { SELF = 0, OTHER_ACCOUNTS = 1 }

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
		clientToken?: string | null;
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

	export interface TagResourceRequest {

		/** Required */
		resourceShareArn: string;

		/** Required */
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		resourceShareArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		resourceShareArn: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		resourceShareArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateResourceShareRequest {

		/** Required */
		resourceShareArn: string;
		name?: string | null;
		allowExternalPrincipals?: boolean | null;
		clientToken?: string | null;
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
		 * Accepts an invitation to a resource share from another AWS account.
		 * Post acceptresourceshareinvitation
		 * @return {AcceptResourceShareInvitationResponse} Success
		 */
		AcceptResourceShareInvitation(requestBody: AcceptResourceShareInvitationPostBody): Observable<AcceptResourceShareInvitationResponse> {
			return this.http.post<AcceptResourceShareInvitationResponse>(this.baseUri + 'acceptresourceshareinvitation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates the specified resource share with the specified principals and resources.
		 * Post associateresourceshare
		 * @return {AssociateResourceShareResponse} Success
		 */
		AssociateResourceShare(requestBody: AssociateResourceSharePostBody): Observable<AssociateResourceShareResponse> {
			return this.http.post<AssociateResourceShareResponse>(this.baseUri + 'associateresourceshare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a permission with a resource share.
		 * Post associateresourcesharepermission
		 * @return {AssociateResourceSharePermissionResponse} Success
		 */
		AssociateResourceSharePermission(requestBody: AssociateResourceSharePermissionPostBody): Observable<AssociateResourceSharePermissionResponse> {
			return this.http.post<AssociateResourceSharePermissionResponse>(this.baseUri + 'associateresourcesharepermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a resource share.
		 * Post createresourceshare
		 * @return {CreateResourceShareResponse} Success
		 */
		CreateResourceShare(requestBody: CreateResourceSharePostBody): Observable<CreateResourceShareResponse> {
			return this.http.post<CreateResourceShareResponse>(this.baseUri + 'createresourceshare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified resource share.
		 * Delete deleteresourceshare#resourceShareArn
		 * @param {string} resourceShareArn The Amazon Resource Name (ARN) of the resource share.
		 * @param {string} clientToken A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * @return {DeleteResourceShareResponse} Success
		 */
		DeleteResourceShare(resourceShareArn: string, clientToken: string | null | undefined): Observable<DeleteResourceShareResponse> {
			return this.http.delete<DeleteResourceShareResponse>(this.baseUri + 'deleteresourceshare#resourceShareArn?resourceShareArn=' + (resourceShareArn == null ? '' : encodeURIComponent(resourceShareArn)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), {});
		}

		/**
		 * Disassociates the specified principals or resources from the specified resource share.
		 * Post disassociateresourceshare
		 * @return {DisassociateResourceShareResponse} Success
		 */
		DisassociateResourceShare(requestBody: DisassociateResourceSharePostBody): Observable<DisassociateResourceShareResponse> {
			return this.http.post<DisassociateResourceShareResponse>(this.baseUri + 'disassociateresourceshare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates an AWS RAM permission from a resource share.
		 * Post disassociateresourcesharepermission
		 * @return {DisassociateResourceSharePermissionResponse} Success
		 */
		DisassociateResourceSharePermission(requestBody: DisassociateResourceSharePermissionPostBody): Observable<DisassociateResourceSharePermissionResponse> {
			return this.http.post<DisassociateResourceSharePermissionResponse>(this.baseUri + 'disassociateresourcesharepermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Enables resource sharing within your AWS Organization.</p> <p>The caller must be the master account for the AWS Organization.</p>
		 * Post enablesharingwithawsorganization
		 * @return {EnableSharingWithAwsOrganizationResponse} Success
		 */
		EnableSharingWithAwsOrganization(): Observable<EnableSharingWithAwsOrganizationResponse> {
			return this.http.post<EnableSharingWithAwsOrganizationResponse>(this.baseUri + 'enablesharingwithawsorganization', null, {});
		}

		/**
		 * Gets the contents of an AWS RAM permission in JSON format.
		 * Post getpermission
		 * @return {GetPermissionResponse} Success
		 */
		GetPermission(requestBody: GetPermissionPostBody): Observable<GetPermissionResponse> {
			return this.http.post<GetPermissionResponse>(this.baseUri + 'getpermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the policies for the specified resources that you own and have shared.
		 * Post getresourcepolicies
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetResourcePoliciesResponse} Success
		 */
		GetResourcePolicies(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetResourcePoliciesPostBody): Observable<GetResourcePoliciesResponse> {
			return this.http.post<GetResourcePoliciesResponse>(this.baseUri + 'getresourcepolicies?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the resources or principals for the resource shares that you own.
		 * Post getresourceshareassociations
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetResourceShareAssociationsResponse} Success
		 */
		GetResourceShareAssociations(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetResourceShareAssociationsPostBody): Observable<GetResourceShareAssociationsResponse> {
			return this.http.post<GetResourceShareAssociationsResponse>(this.baseUri + 'getresourceshareassociations?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the invitations for resource sharing that you've received.
		 * Post getresourceshareinvitations
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetResourceShareInvitationsResponse} Success
		 */
		GetResourceShareInvitations(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetResourceShareInvitationsPostBody): Observable<GetResourceShareInvitationsResponse> {
			return this.http.post<GetResourceShareInvitationsResponse>(this.baseUri + 'getresourceshareinvitations?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the resource shares that you own or the resource shares that are shared with you.
		 * Post getresourceshares
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetResourceSharesResponse} Success
		 */
		GetResourceShares(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetResourceSharesPostBody): Observable<GetResourceSharesResponse> {
			return this.http.post<GetResourceSharesResponse>(this.baseUri + 'getresourceshares?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the resources in a resource share that is shared with you but that the invitation is still pending for.
		 * Post listpendinginvitationresources
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPendingInvitationResourcesResponse} Success
		 */
		ListPendingInvitationResources(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListPendingInvitationResourcesPostBody): Observable<ListPendingInvitationResourcesResponse> {
			return this.http.post<ListPendingInvitationResourcesResponse>(this.baseUri + 'listpendinginvitationresources?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the AWS RAM permissions.
		 * Post listpermissions
		 * @return {ListPermissionsResponse} Success
		 */
		ListPermissions(requestBody: ListPermissionsPostBody): Observable<ListPermissionsResponse> {
			return this.http.post<ListPermissionsResponse>(this.baseUri + 'listpermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the principals that you have shared resources with or that have shared resources with you.
		 * Post listprincipals
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPrincipalsResponse} Success
		 */
		ListPrincipals(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListPrincipalsPostBody): Observable<ListPrincipalsResponse> {
			return this.http.post<ListPrincipalsResponse>(this.baseUri + 'listprincipals?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the AWS RAM permissions that are associated with a resource share.
		 * Post listresourcesharepermissions
		 * @return {ListResourceSharePermissionsResponse} Success
		 */
		ListResourceSharePermissions(requestBody: ListResourceSharePermissionsPostBody): Observable<ListResourceSharePermissionsResponse> {
			return this.http.post<ListResourceSharePermissionsResponse>(this.baseUri + 'listresourcesharepermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the shareable resource types supported by AWS RAM.
		 * Post listresourcetypes
		 * @return {ListResourceTypesResponse} Success
		 */
		ListResourceTypes(requestBody: ListResourceTypesPostBody): Observable<ListResourceTypesResponse> {
			return this.http.post<ListResourceTypesResponse>(this.baseUri + 'listresourcetypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the resources that you added to a resource shares or the resources that are shared with you.
		 * Post listresources
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListResourcesResponse} Success
		 */
		ListResources(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListResourcesPostBody): Observable<ListResourcesResponse> {
			return this.http.post<ListResourcesResponse>(this.baseUri + 'listresources?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Resource shares that were created by attaching a policy to a resource are visible only to the resource share owner, and the resource share cannot be modified in AWS RAM.</p> <p>Use this API action to promote the resource share. When you promote the resource share, it becomes:</p> <ul> <li> <p>Visible to all principals that it is shared with.</p> </li> <li> <p>Modifiable in AWS RAM.</p> </li> </ul>
		 * Post promoteresourcesharecreatedfrompolicy#resourceShareArn
		 * @param {string} resourceShareArn The ARN of the resource share to promote.
		 * @return {PromoteResourceShareCreatedFromPolicyResponse} Success
		 */
		PromoteResourceShareCreatedFromPolicy(resourceShareArn: string): Observable<PromoteResourceShareCreatedFromPolicyResponse> {
			return this.http.post<PromoteResourceShareCreatedFromPolicyResponse>(this.baseUri + 'promoteresourcesharecreatedfrompolicy#resourceShareArn?resourceShareArn=' + (resourceShareArn == null ? '' : encodeURIComponent(resourceShareArn)), null, {});
		}

		/**
		 * Rejects an invitation to a resource share from another AWS account.
		 * Post rejectresourceshareinvitation
		 * @return {RejectResourceShareInvitationResponse} Success
		 */
		RejectResourceShareInvitation(requestBody: RejectResourceShareInvitationPostBody): Observable<RejectResourceShareInvitationResponse> {
			return this.http.post<RejectResourceShareInvitationResponse>(this.baseUri + 'rejectresourceshareinvitation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds the specified tags to the specified resource share that you own.
		 * Post tagresource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tagresource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tags from the specified resource share that you own.
		 * Post untagresource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourcePostBody): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + 'untagresource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified resource share that you own.
		 * Post updateresourceshare
		 * @return {UpdateResourceShareResponse} Success
		 */
		UpdateResourceShare(requestBody: UpdateResourceSharePostBody): Observable<UpdateResourceShareResponse> {
			return this.http.post<UpdateResourceShareResponse>(this.baseUri + 'updateresourceshare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AcceptResourceShareInvitationPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the invitation.
		 * Required
		 */
		resourceShareInvitationArn: string;

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;
	}
	export interface AcceptResourceShareInvitationPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the invitation.
		 * Required
		 */
		resourceShareInvitationArn: FormControl<string | null | undefined>,

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
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
		 * The Amazon Resource Name (ARN) of the resource share.
		 * Required
		 */
		resourceShareArn: string;

		/** The Amazon Resource Names (ARN) of the resources. */
		resourceArns?: Array<string>;

		/** The principals. */
		principals?: Array<string>;

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;
	}
	export interface AssociateResourceSharePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource share.
		 * Required
		 */
		resourceShareArn: FormControl<string | null | undefined>,

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
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
		 * The Amazon Resource Name (ARN) of the resource share.
		 * Required
		 */
		resourceShareArn: string;

		/**
		 * The ARN of the AWS RAM permission to associate with the resource share.
		 * Required
		 */
		permissionArn: string;

		/** Indicates whether the permission should replace the permissions that are currently associated with the resource share. Use <code>true</code> to replace the current permissions. Use <code>false</code> to add the permission to the current permission. */
		replace?: boolean | null;

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;
	}
	export interface AssociateResourceSharePermissionPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource share.
		 * Required
		 */
		resourceShareArn: FormControl<string | null | undefined>,

		/**
		 * The ARN of the AWS RAM permission to associate with the resource share.
		 * Required
		 */
		permissionArn: FormControl<string | null | undefined>,

		/** Indicates whether the permission should replace the permissions that are currently associated with the resource share. Use <code>true</code> to replace the current permissions. Use <code>false</code> to add the permission to the current permission. */
		replace: FormControl<boolean | null | undefined>,

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateResourceSharePermissionPostBodyFormGroup() {
		return new FormGroup<AssociateResourceSharePermissionPostBodyFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permissionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replace: new FormControl<boolean | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateResourceSharePostBody {

		/**
		 * The name of the resource share.
		 * Required
		 */
		name: string;

		/** The Amazon Resource Names (ARN) of the resources to associate with the resource share. */
		resourceArns?: Array<string>;

		/** The principals to associate with the resource share. The possible values are IDs of AWS accounts, the ARN of an OU or organization from AWS Organizations. */
		principals?: Array<string>;

		/** One or more tags. */
		tags?: Array<Tag>;

		/** Indicates whether principals outside your AWS organization can be associated with a resource share. */
		allowExternalPrincipals?: boolean | null;

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;

		/** The ARNs of the permissions to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. */
		permissionArns?: Array<string>;
	}
	export interface CreateResourceSharePostBodyFormProperties {

		/**
		 * The name of the resource share.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Indicates whether principals outside your AWS organization can be associated with a resource share. */
		allowExternalPrincipals: FormControl<boolean | null | undefined>,

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
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
		 * The Amazon Resource Name (ARN) of the resource share.
		 * Required
		 */
		resourceShareArn: string;

		/** The Amazon Resource Names (ARNs) of the resources. */
		resourceArns?: Array<string>;

		/** The principals. */
		principals?: Array<string>;

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;
	}
	export interface DisassociateResourceSharePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource share.
		 * Required
		 */
		resourceShareArn: FormControl<string | null | undefined>,

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
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
		 * The Amazon Resource Name (ARN) of the resource share.
		 * Required
		 */
		resourceShareArn: string;

		/**
		 * The ARN of the permission to disassociate from the resource share.
		 * Required
		 */
		permissionArn: string;

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;
	}
	export interface DisassociateResourceSharePermissionPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource share.
		 * Required
		 */
		resourceShareArn: FormControl<string | null | undefined>,

		/**
		 * The ARN of the permission to disassociate from the resource share.
		 * Required
		 */
		permissionArn: FormControl<string | null | undefined>,

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
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
		 * The ARN of the permission.
		 * Required
		 */
		permissionArn: string;

		/** The identifier for the version of the permission. */
		permissionVersion?: number | null;
	}
	export interface GetPermissionPostBodyFormProperties {

		/**
		 * The ARN of the permission.
		 * Required
		 */
		permissionArn: FormControl<string | null | undefined>,

		/** The identifier for the version of the permission. */
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
		 * The Amazon Resource Names (ARN) of the resources.
		 * Required
		 */
		resourceArns: Array<string>;

		/** The principal. */
		principal?: string | null;

		/** The token for the next page of results. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface GetResourcePoliciesPostBodyFormProperties {

		/** The principal. */
		principal: FormControl<string | null | undefined>,

		/** The token for the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
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
		 * The association type. Specify <code>PRINCIPAL</code> to list the principals that are associated with the specified resource share. Specify <code>RESOURCE</code> to list the resources that are associated with the specified resource share.
		 * Required
		 */
		associationType: ResourceShareAssociationAssociationType;

		/** The Amazon Resource Names (ARN) of the resource shares. */
		resourceShareArns?: Array<string>;

		/** The Amazon Resource Name (ARN) of the resource. You cannot specify this parameter if the association type is <code>PRINCIPAL</code>. */
		resourceArn?: string | null;

		/** The principal. You cannot specify this parameter if the association type is <code>RESOURCE</code>. */
		principal?: string | null;

		/** The association status. */
		associationStatus?: ResourceShareAssociationStatus | null;

		/** The token for the next page of results. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface GetResourceShareAssociationsPostBodyFormProperties {

		/**
		 * The association type. Specify <code>PRINCIPAL</code> to list the principals that are associated with the specified resource share. Specify <code>RESOURCE</code> to list the resources that are associated with the specified resource share.
		 * Required
		 */
		associationType: FormControl<ResourceShareAssociationAssociationType | null | undefined>,

		/** The Amazon Resource Name (ARN) of the resource. You cannot specify this parameter if the association type is <code>PRINCIPAL</code>. */
		resourceArn: FormControl<string | null | undefined>,

		/** The principal. You cannot specify this parameter if the association type is <code>RESOURCE</code>. */
		principal: FormControl<string | null | undefined>,

		/** The association status. */
		associationStatus: FormControl<ResourceShareAssociationStatus | null | undefined>,

		/** The token for the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetResourceShareAssociationsPostBodyFormGroup() {
		return new FormGroup<GetResourceShareAssociationsPostBodyFormProperties>({
			associationType: new FormControl<ResourceShareAssociationAssociationType | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined),
			principal: new FormControl<string | null | undefined>(undefined),
			associationStatus: new FormControl<ResourceShareAssociationStatus | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface GetResourceShareInvitationsPostBody {

		/** The Amazon Resource Names (ARN) of the invitations. */
		resourceShareInvitationArns?: Array<string>;

		/** The Amazon Resource Names (ARN) of the resource shares. */
		resourceShareArns?: Array<string>;

		/** The token for the next page of results. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface GetResourceShareInvitationsPostBodyFormProperties {

		/** The token for the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
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

		/** The Amazon Resource Names (ARN) of the resource shares. */
		resourceShareArns?: Array<string>;

		/** The status of the resource share. */
		resourceShareStatus?: ResourceShareStatus | null;

		/**
		 * The type of owner.
		 * Required
		 */
		resourceOwner: GetResourceSharesPostBodyResourceOwner;

		/** The name of the resource share. */
		name?: string | null;

		/** One or more tag filters. */
		tagFilters?: Array<TagFilter>;

		/** The token for the next page of results. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface GetResourceSharesPostBodyFormProperties {

		/** The status of the resource share. */
		resourceShareStatus: FormControl<ResourceShareStatus | null | undefined>,

		/**
		 * The type of owner.
		 * Required
		 */
		resourceOwner: FormControl<GetResourceSharesPostBodyResourceOwner | null | undefined>,

		/** The name of the resource share. */
		name: FormControl<string | null | undefined>,

		/** The token for the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetResourceSharesPostBodyFormGroup() {
		return new FormGroup<GetResourceSharesPostBodyFormProperties>({
			resourceShareStatus: new FormControl<ResourceShareStatus | null | undefined>(undefined),
			resourceOwner: new FormControl<GetResourceSharesPostBodyResourceOwner | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export enum GetResourceSharesPostBodyResourceOwner { SELF = 0, OTHER_ACCOUNTS = 1 }

	export interface ListPendingInvitationResourcesPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the invitation.
		 * Required
		 */
		resourceShareInvitationArn: string;

		/** The token for the next page of results. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface ListPendingInvitationResourcesPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the invitation.
		 * Required
		 */
		resourceShareInvitationArn: FormControl<string | null | undefined>,

		/** The token for the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPendingInvitationResourcesPostBodyFormGroup() {
		return new FormGroup<ListPendingInvitationResourcesPostBodyFormProperties>({
			resourceShareInvitationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface ListPermissionsPostBody {

		/** Specifies the resource type for which to list permissions. For example, to list only permissions that apply to EC2 subnets, specify <code>ec2:Subnet</code>. */
		resourceType?: string | null;

		/** The token for the next page of results. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface ListPermissionsPostBodyFormProperties {

		/** Specifies the resource type for which to list permissions. For example, to list only permissions that apply to EC2 subnets, specify <code>ec2:Subnet</code>. */
		resourceType: FormControl<string | null | undefined>,

		/** The token for the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPermissionsPostBodyFormGroup() {
		return new FormGroup<ListPermissionsPostBodyFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface ListPrincipalsPostBody {

		/**
		 * The type of owner.
		 * Required
		 */
		resourceOwner: ListPrincipalsPostBodyResourceOwner;

		/** The Amazon Resource Name (ARN) of the resource. */
		resourceArn?: string | null;

		/** The principals. */
		principals?: Array<string>;

		/** <p>The resource type.</p> <p>Valid values: <code>codebuild:Project</code> | <code>codebuild:ReportGroup</code> | <code>ec2:CapacityReservation</code> | <code>ec2:DedicatedHost</code> | <code>ec2:Subnet</code> | <code>ec2:TrafficMirrorTarget</code> | <code>ec2:TransitGateway</code> | <code>imagebuilder:Component</code> | <code>imagebuilder:Image</code> | <code>imagebuilder:ImageRecipe</code> | <code>license-manager:LicenseConfiguration</code> I <code>resource-groups:Group</code> | <code>rds:Cluster</code> | <code>route53resolver:ResolverRule</code> </p> */
		resourceType?: string | null;

		/** The Amazon Resource Names (ARN) of the resource shares. */
		resourceShareArns?: Array<string>;

		/** The token for the next page of results. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface ListPrincipalsPostBodyFormProperties {

		/**
		 * The type of owner.
		 * Required
		 */
		resourceOwner: FormControl<ListPrincipalsPostBodyResourceOwner | null | undefined>,

		/** The Amazon Resource Name (ARN) of the resource. */
		resourceArn: FormControl<string | null | undefined>,

		/** <p>The resource type.</p> <p>Valid values: <code>codebuild:Project</code> | <code>codebuild:ReportGroup</code> | <code>ec2:CapacityReservation</code> | <code>ec2:DedicatedHost</code> | <code>ec2:Subnet</code> | <code>ec2:TrafficMirrorTarget</code> | <code>ec2:TransitGateway</code> | <code>imagebuilder:Component</code> | <code>imagebuilder:Image</code> | <code>imagebuilder:ImageRecipe</code> | <code>license-manager:LicenseConfiguration</code> I <code>resource-groups:Group</code> | <code>rds:Cluster</code> | <code>route53resolver:ResolverRule</code> </p> */
		resourceType: FormControl<string | null | undefined>,

		/** The token for the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPrincipalsPostBodyFormGroup() {
		return new FormGroup<ListPrincipalsPostBodyFormProperties>({
			resourceOwner: new FormControl<ListPrincipalsPostBodyResourceOwner | null | undefined>(undefined, [Validators.required]),
			resourceArn: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export enum ListPrincipalsPostBodyResourceOwner { SELF = 0, OTHER_ACCOUNTS = 1 }

	export interface ListResourceSharePermissionsPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource share.
		 * Required
		 */
		resourceShareArn: string;

		/** The token for the next page of results. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface ListResourceSharePermissionsPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource share.
		 * Required
		 */
		resourceShareArn: FormControl<string | null | undefined>,

		/** The token for the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
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

		/** The token for the next page of results. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface ListResourceTypesPostBodyFormProperties {

		/** The token for the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResourceTypesPostBodyFormGroup() {
		return new FormGroup<ListResourceTypesPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface ListResourcesPostBody {

		/**
		 * The type of owner.
		 * Required
		 */
		resourceOwner: ListResourcesPostBodyResourceOwner;

		/** The principal. */
		principal?: string | null;

		/** <p>The resource type.</p> <p>Valid values: <code>codebuild:Project</code> | <code>codebuild:ReportGroup</code> | <code>ec2:CapacityReservation</code> | <code>ec2:DedicatedHost</code> | <code>ec2:Subnet</code> | <code>ec2:TrafficMirrorTarget</code> | <code>ec2:TransitGateway</code> | <code>imagebuilder:Component</code> | <code>imagebuilder:Image</code> | <code>imagebuilder:ImageRecipe</code> | <code>license-manager:LicenseConfiguration</code> I <code>resource-groups:Group</code> | <code>rds:Cluster</code> | <code>route53resolver:ResolverRule</code> </p> */
		resourceType?: string | null;

		/** The Amazon Resource Names (ARN) of the resources. */
		resourceArns?: Array<string>;

		/** The Amazon Resource Names (ARN) of the resource shares. */
		resourceShareArns?: Array<string>;

		/** The token for the next page of results. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}
	export interface ListResourcesPostBodyFormProperties {

		/**
		 * The type of owner.
		 * Required
		 */
		resourceOwner: FormControl<ListResourcesPostBodyResourceOwner | null | undefined>,

		/** The principal. */
		principal: FormControl<string | null | undefined>,

		/** <p>The resource type.</p> <p>Valid values: <code>codebuild:Project</code> | <code>codebuild:ReportGroup</code> | <code>ec2:CapacityReservation</code> | <code>ec2:DedicatedHost</code> | <code>ec2:Subnet</code> | <code>ec2:TrafficMirrorTarget</code> | <code>ec2:TransitGateway</code> | <code>imagebuilder:Component</code> | <code>imagebuilder:Image</code> | <code>imagebuilder:ImageRecipe</code> | <code>license-manager:LicenseConfiguration</code> I <code>resource-groups:Group</code> | <code>rds:Cluster</code> | <code>route53resolver:ResolverRule</code> </p> */
		resourceType: FormControl<string | null | undefined>,

		/** The token for the next page of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListResourcesPostBodyFormGroup() {
		return new FormGroup<ListResourcesPostBodyFormProperties>({
			resourceOwner: new FormControl<ListResourcesPostBodyResourceOwner | null | undefined>(undefined, [Validators.required]),
			principal: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export enum ListResourcesPostBodyResourceOwner { SELF = 0, OTHER_ACCOUNTS = 1 }

	export interface RejectResourceShareInvitationPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the invitation.
		 * Required
		 */
		resourceShareInvitationArn: string;

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;
	}
	export interface RejectResourceShareInvitationPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the invitation.
		 * Required
		 */
		resourceShareInvitationArn: FormControl<string | null | undefined>,

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateRejectResourceShareInvitationPostBodyFormGroup() {
		return new FormGroup<RejectResourceShareInvitationPostBodyFormProperties>({
			resourceShareInvitationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource share.
		 * Required
		 */
		resourceShareArn: string;

		/**
		 * One or more tags.
		 * Required
		 */
		tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource share.
		 * Required
		 */
		resourceShareArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource share.
		 * Required
		 */
		resourceShareArn: string;

		/**
		 * The tag keys of the tags to remove.
		 * Required
		 */
		tagKeys: Array<string>;
	}
	export interface UntagResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource share.
		 * Required
		 */
		resourceShareArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourcePostBodyFormGroup() {
		return new FormGroup<UntagResourcePostBodyFormProperties>({
			resourceShareArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateResourceSharePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource share.
		 * Required
		 */
		resourceShareArn: string;

		/** The name of the resource share. */
		name?: string | null;

		/** Indicates whether principals outside your AWS organization can be associated with a resource share. */
		allowExternalPrincipals?: boolean | null;

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;
	}
	export interface UpdateResourceSharePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource share.
		 * Required
		 */
		resourceShareArn: FormControl<string | null | undefined>,

		/** The name of the resource share. */
		name: FormControl<string | null | undefined>,

		/** Indicates whether principals outside your AWS organization can be associated with a resource share. */
		allowExternalPrincipals: FormControl<boolean | null | undefined>,

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
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

