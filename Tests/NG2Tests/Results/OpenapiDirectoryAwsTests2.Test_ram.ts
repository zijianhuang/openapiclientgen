import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AcceptResourceShareInvitationResponse {

		/** Describes an invitation to join a resource share. */
		resourceShareInvitation?: ResourceShareInvitation | null;
		clientToken?: string | null;
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
		resourceShareAssociations?: Array<ResourceShareAssociation> | null;
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

	export enum ResourceShareAssociationAssociationType { PRINCIPAL = 0, RESOURCE = 1 }

	export enum ResourceShareAssociationStatus { ASSOCIATING = 0, ASSOCIATED = 1, FAILED = 2, DISASSOCIATING = 3, DISASSOCIATED = 4 }

	export interface MalformedArnException {
	}

	export interface OperationNotPermittedException {
	}

	export interface ResourceShareInvitationArnNotFoundException {
	}

	export interface ResourceShareInvitationAlreadyAcceptedException {
	}

	export interface ResourceShareInvitationAlreadyRejectedException {
	}

	export interface ResourceShareInvitationExpiredException {
	}

	export interface ServerInternalException {
	}

	export interface ServiceUnavailableException {
	}

	export interface InvalidClientTokenException {
	}

	export interface IdempotentParameterMismatchException {
	}

	export interface AssociateResourceShareResponse {
		resourceShareAssociations?: Array<ResourceShareAssociation> | null;
		clientToken?: string | null;
	}

	export interface UnknownResourceException {
	}

	export interface InvalidStateTransitionException {
	}

	export interface ResourceShareLimitExceededException {
	}

	export interface InvalidParameterException {
	}

	export interface AssociateResourceSharePermissionResponse {
		returnValue?: boolean | null;
		clientToken?: string | null;
	}

	export interface CreateResourceShareResponse {

		/** Describes a resource share. */
		resourceShare?: ResourceShare | null;
		clientToken?: string | null;
	}


	/** Describes a resource share. */
	export interface ResourceShare {
		resourceShareArn?: string | null;
		name?: string | null;
		owningAccountId?: string | null;
		allowExternalPrincipals?: boolean | null;
		status?: ResourceShareStatus | null;
		statusMessage?: string | null;
		tags?: Array<Tag> | null;
		creationTime?: Date | null;
		lastUpdatedTime?: Date | null;
		featureSet?: ResourceShareFeatureSet | null;
	}

	export enum ResourceShareStatus { PENDING = 0, ACTIVE = 1, FAILED = 2, DELETING = 3, DELETED = 4 }


	/** Information about a tag. */
	export interface Tag {
		key?: string | null;
		value?: string | null;
	}

	export enum ResourceShareFeatureSet { CREATED_FROM_POLICY = 0, PROMOTING_TO_STANDARD = 1, STANDARD = 2 }

	export interface TagPolicyViolationException {
	}

	export interface DeleteResourceShareResponse {
		returnValue?: boolean | null;
		clientToken?: string | null;
	}

	export interface DisassociateResourceShareResponse {
		resourceShareAssociations?: Array<ResourceShareAssociation> | null;
		clientToken?: string | null;
	}

	export interface DisassociateResourceSharePermissionResponse {
		returnValue?: boolean | null;
		clientToken?: string | null;
	}

	export interface EnableSharingWithAwsOrganizationResponse {
		returnValue?: boolean | null;
	}

	export interface GetPermissionResponse {

		/** Information about an AWS RAM permission. */
		permission?: ResourceSharePermissionDetail | null;
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

	export interface GetResourcePoliciesResponse {
		policies?: Array<string> | null;
		nextToken?: string | null;
	}

	export interface InvalidNextTokenException {
	}

	export interface ResourceArnNotFoundException {
	}

	export interface GetResourceShareAssociationsResponse {
		resourceShareAssociations?: Array<ResourceShareAssociation> | null;
		nextToken?: string | null;
	}

	export interface GetResourceShareInvitationsResponse {
		resourceShareInvitations?: Array<ResourceShareInvitation> | null;
		nextToken?: string | null;
	}

	export interface InvalidMaxResultsException {
	}

	export interface GetResourceSharesResponse {
		resourceShares?: Array<ResourceShare> | null;
		nextToken?: string | null;
	}


	/** Used to filter information based on tags. */
	export interface TagFilter {
		tagKey?: string | null;
		tagValues?: Array<string> | null;
	}

	export interface ListPendingInvitationResourcesResponse {
		resources?: Array<Resource> | null;
		nextToken?: string | null;
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

	export enum ResourceStatus { AVAILABLE = 0, ZONAL_RESOURCE_INACCESSIBLE = 1, LIMIT_EXCEEDED = 2, UNAVAILABLE = 3, PENDING = 4 }

	export interface MissingRequiredParameterException {
	}

	export interface ListPermissionsResponse {
		permissions?: Array<ResourceSharePermissionSummary> | null;
		nextToken?: string | null;
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

	export interface ListPrincipalsResponse {
		principals?: Array<Principal> | null;
		nextToken?: string | null;
	}


	/** Describes a principal for use with AWS Resource Access Manager. */
	export interface Principal {
		id?: string | null;
		resourceShareArn?: string | null;
		creationTime?: Date | null;
		lastUpdatedTime?: Date | null;
		external?: boolean | null;
	}

	export interface ListResourceSharePermissionsResponse {
		permissions?: Array<ResourceSharePermissionSummary> | null;
		nextToken?: string | null;
	}

	export interface ListResourceTypesResponse {
		resourceTypes?: Array<ServiceNameAndResourceType> | null;
		nextToken?: string | null;
	}


	/** Information about the shareable resource types and the AWS services to which they belong. */
	export interface ServiceNameAndResourceType {
		resourceType?: string | null;
		serviceName?: string | null;
	}

	export interface ListResourcesResponse {
		resources?: Array<Resource> | null;
		nextToken?: string | null;
	}

	export interface InvalidResourceTypeException {
	}

	export interface PromoteResourceShareCreatedFromPolicyResponse {
		returnValue?: boolean | null;
	}

	export interface RejectResourceShareInvitationResponse {

		/** Describes an invitation to join a resource share. */
		resourceShareInvitation?: ResourceShareInvitation | null;
		clientToken?: string | null;
	}

	export interface TagResourceResponse {
	}

	export interface TagLimitExceededException {
	}

	export interface UntagResourceResponse {
	}

	export interface UpdateResourceShareResponse {

		/** Describes a resource share. */
		resourceShare?: ResourceShare | null;
		clientToken?: string | null;
	}

	export interface AcceptResourceShareInvitationRequest {
		resourceShareInvitationArn: string;
		clientToken?: string | null;
	}

	export interface AssociateResourceSharePermissionRequest {
		resourceShareArn: string;
		permissionArn: string;
		replace?: boolean | null;
		clientToken?: string | null;
	}

	export interface AssociateResourceShareRequest {
		resourceShareArn: string;
		resourceArns?: Array<string> | null;
		principals?: Array<string> | null;
		clientToken?: string | null;
	}

	export interface CreateResourceShareRequest {
		name: string;
		resourceArns?: Array<string> | null;
		principals?: Array<string> | null;
		tags?: Array<Tag> | null;
		allowExternalPrincipals?: boolean | null;
		clientToken?: string | null;
		permissionArns?: Array<string> | null;
	}

	export interface DeleteResourceShareRequest {
	}

	export interface DisassociateResourceSharePermissionRequest {
		resourceShareArn: string;
		permissionArn: string;
		clientToken?: string | null;
	}

	export interface DisassociateResourceShareRequest {
		resourceShareArn: string;
		resourceArns?: Array<string> | null;
		principals?: Array<string> | null;
		clientToken?: string | null;
	}

	export interface EnableSharingWithAwsOrganizationRequest {
	}

	export interface GetPermissionRequest {
		permissionArn: string;
		permissionVersion?: number | null;
	}

	export interface GetResourcePoliciesRequest {
		resourceArns: Array<string>;
		principal?: string | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export enum ResourceShareAssociationType { PRINCIPAL = 0, RESOURCE = 1 }

	export interface GetResourceShareAssociationsRequest {
		associationType: ResourceShareAssociationAssociationType;
		resourceShareArns?: Array<string> | null;
		resourceArn?: string | null;
		principal?: string | null;
		associationStatus?: ResourceShareAssociationStatus | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export interface GetResourceShareInvitationsRequest {
		resourceShareInvitationArns?: Array<string> | null;
		resourceShareArns?: Array<string> | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export enum ResourceOwner { SELF = 0, OTHER_ACCOUNTS = 1 }

	export interface GetResourceSharesRequest {
		resourceShareArns?: Array<string> | null;
		resourceShareStatus?: ResourceShareStatus | null;
		resourceOwner: GetResourceSharesRequestResourceOwner;
		name?: string | null;
		tagFilters?: Array<TagFilter> | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export enum GetResourceSharesRequestResourceOwner { SELF = 0, OTHER_ACCOUNTS = 1 }

	export interface ListPendingInvitationResourcesRequest {
		resourceShareInvitationArn: string;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export interface ListPermissionsRequest {
		resourceType?: string | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export interface ListPrincipalsRequest {
		resourceOwner: ListPrincipalsRequestResourceOwner;
		resourceArn?: string | null;
		principals?: Array<string> | null;
		resourceType?: string | null;
		resourceShareArns?: Array<string> | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export enum ListPrincipalsRequestResourceOwner { SELF = 0, OTHER_ACCOUNTS = 1 }

	export interface ListResourceSharePermissionsRequest {
		resourceShareArn: string;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export interface ListResourceTypesRequest {
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export interface ListResourcesRequest {
		resourceOwner: ListResourcesRequestResourceOwner;
		principal?: string | null;
		resourceType?: string | null;
		resourceArns?: Array<string> | null;
		resourceShareArns?: Array<string> | null;
		nextToken?: string | null;
		maxResults?: number | null;
	}

	export enum ListResourcesRequestResourceOwner { SELF = 0, OTHER_ACCOUNTS = 1 }

	export interface PromoteResourceShareCreatedFromPolicyRequest {
	}

	export interface RejectResourceShareInvitationRequest {
		resourceShareInvitationArn: string;
		clientToken?: string | null;
	}

	export interface TagResourceRequest {
		resourceShareArn: string;
		tags: Array<Tag>;
	}

	export interface UntagResourceRequest {
		resourceShareArn: string;
		tagKeys: Array<string>;
	}

	export interface UpdateResourceShareRequest {
		resourceShareArn: string;
		name?: string | null;
		allowExternalPrincipals?: boolean | null;
		clientToken?: string | null;
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

	export interface AssociateResourceSharePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource share.
		 * Required
		 */
		resourceShareArn: string;

		/** The Amazon Resource Names (ARN) of the resources. */
		resourceArns?: Array<string> | null;

		/** The principals. */
		principals?: Array<string> | null;

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;
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

	export interface CreateResourceSharePostBody {

		/**
		 * The name of the resource share.
		 * Required
		 */
		name: string;

		/** The Amazon Resource Names (ARN) of the resources to associate with the resource share. */
		resourceArns?: Array<string> | null;

		/** The principals to associate with the resource share. The possible values are IDs of AWS accounts, the ARN of an OU or organization from AWS Organizations. */
		principals?: Array<string> | null;

		/** One or more tags. */
		tags?: Array<Tag> | null;

		/** Indicates whether principals outside your AWS organization can be associated with a resource share. */
		allowExternalPrincipals?: boolean | null;

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;

		/** The ARNs of the permissions to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. */
		permissionArns?: Array<string> | null;
	}

	export interface DisassociateResourceSharePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource share.
		 * Required
		 */
		resourceShareArn: string;

		/** The Amazon Resource Names (ARNs) of the resources. */
		resourceArns?: Array<string> | null;

		/** The principals. */
		principals?: Array<string> | null;

		/** A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. */
		clientToken?: string | null;
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

	export interface GetPermissionPostBody {

		/**
		 * The ARN of the permission.
		 * Required
		 */
		permissionArn: string;

		/** The identifier for the version of the permission. */
		permissionVersion?: number | null;
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

	export interface GetResourceShareAssociationsPostBody {

		/**
		 * The association type. Specify <code>PRINCIPAL</code> to list the principals that are associated with the specified resource share. Specify <code>RESOURCE</code> to list the resources that are associated with the specified resource share.
		 * Required
		 */
		associationType: ResourceShareAssociationAssociationType;

		/** The Amazon Resource Names (ARN) of the resource shares. */
		resourceShareArns?: Array<string> | null;

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

	export interface GetResourceShareInvitationsPostBody {

		/** The Amazon Resource Names (ARN) of the invitations. */
		resourceShareInvitationArns?: Array<string> | null;

		/** The Amazon Resource Names (ARN) of the resource shares. */
		resourceShareArns?: Array<string> | null;

		/** The token for the next page of results. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
	}

	export interface GetResourceSharesPostBody {

		/** The Amazon Resource Names (ARN) of the resource shares. */
		resourceShareArns?: Array<string> | null;

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
		tagFilters?: Array<TagFilter> | null;

		/** The token for the next page of results. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
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

	export interface ListPrincipalsPostBody {

		/**
		 * The type of owner.
		 * Required
		 */
		resourceOwner: ListPrincipalsPostBodyResourceOwner;

		/** The Amazon Resource Name (ARN) of the resource. */
		resourceArn?: string | null;

		/** The principals. */
		principals?: Array<string> | null;

		/** <p>The resource type.</p> <p>Valid values: <code>codebuild:Project</code> | <code>codebuild:ReportGroup</code> | <code>ec2:CapacityReservation</code> | <code>ec2:DedicatedHost</code> | <code>ec2:Subnet</code> | <code>ec2:TrafficMirrorTarget</code> | <code>ec2:TransitGateway</code> | <code>imagebuilder:Component</code> | <code>imagebuilder:Image</code> | <code>imagebuilder:ImageRecipe</code> | <code>license-manager:LicenseConfiguration</code> I <code>resource-groups:Group</code> | <code>rds:Cluster</code> | <code>route53resolver:ResolverRule</code> </p> */
		resourceType?: string | null;

		/** The Amazon Resource Names (ARN) of the resource shares. */
		resourceShareArns?: Array<string> | null;

		/** The token for the next page of results. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
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
		resourceArns?: Array<string> | null;

		/** The Amazon Resource Names (ARN) of the resource shares. */
		resourceShareArns?: Array<string> | null;

		/** The token for the next page of results. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
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

}

