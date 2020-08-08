import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface EntityNotExistsException {
	}

	export interface ProhibitedStateException {
	}

	export interface UnauthorizedOperationException {
	}

	export interface UnauthorizedResourceAccessException {
	}

	export interface FailedDependencyException {
	}

	export interface ServiceUnavailableException {
	}

	export interface ActivateUserResponse {

		/** Describes a user. */
		User?: User;
	}


	/** Describes a user. */
	export interface User {
		Id?: string;
		Username?: string;
		EmailAddress?: string;
		GivenName?: string;
		Surname?: string;
		OrganizationId?: string;
		RootFolderId?: string;
		RecycleBinFolderId?: string;
		Status?: UserStatus;
		Type?: UserType;
		CreatedTimestamp?: Date;
		ModifiedTimestamp?: Date;
		TimeZoneId?: string;
		Locale?: UserLocale;

		/** Describes the storage for a user. */
		Storage?: UserStorageMetadata;
	}

	export enum UserStatus { ACTIVE = 0, INACTIVE = 1, PENDING = 2 }

	export enum UserType { USER = 0, ADMIN = 1, POWERUSER = 2, MINIMALUSER = 3, WORKSPACESUSER = 4 }

	export enum UserLocale { en = 0, fr = 1, ko = 2, de = 3, es = 4, ja = 5, ru = 6, zh_CN = 7, zh_TW = 8, pt_BR = 9, _default = 10 }


	/** Describes the storage for a user. */
	export interface UserStorageMetadata {
		StorageUtilizedInBytes?: number;

		/** Describes the storage for a user. */
		StorageRule?: StorageRuleType;
	}


	/** Describes the storage for a user. */
	export interface StorageRuleType {
		StorageAllocatedInBytes?: number;
		StorageType?: StorageRuleTypeStorageType;
	}

	export enum StorageRuleTypeStorageType { UNLIMITED = 0, QUOTA = 1 }

	export interface AddResourcePermissionsResponse {
		ShareResults?: Array<ShareResult>;
	}


	/** Describes the share results of a resource. */
	export interface ShareResult {
		PrincipalId?: string;
		InviteePrincipalId?: string;
		Role?: ShareResultRole;
		Status?: ShareResultStatus;
		ShareId?: string;
		StatusMessage?: string;
	}

	export enum ShareResultRole { VIEWER = 0, CONTRIBUTOR = 1, OWNER = 2, COOWNER = 3 }

	export enum ShareResultStatus { SUCCESS = 0, FAILURE = 1 }


	/** Describes the recipient type and ID, if available. */
	export interface SharePrincipal {
		Id: string;
		Type: SharePrincipalType;
		Role: ShareResultRole;
	}

	export enum SharePrincipalType { USER = 0, GROUP = 1, INVITE = 2, ANONYMOUS = 3, ORGANIZATION = 4 }

	export interface CreateCommentResponse {

		/** Describes a comment. */
		Comment?: Comment;
	}


	/** Describes a comment. */
	export interface Comment {
		CommentId: string;
		ParentId?: string;
		ThreadId?: string;
		Text?: string;

		/** Describes a user. */
		Contributor?: User;
		CreatedTimestamp?: Date;
		Status?: CommentStatus;
		Visibility?: CommentVisibility;
		RecipientId?: string;
	}

	export enum CommentStatus { DRAFT = 0, PUBLISHED = 1, DELETED = 2 }

	export enum CommentVisibility { PUBLIC = 0, PRIVATE = 1 }

	export interface DocumentLockedForCommentsException {
	}

	export interface InvalidCommentOperationException {
	}

	export interface CreateCustomMetadataResponse {
	}

	export interface CustomMetadataLimitExceededException {
	}

	export interface CreateFolderResponse {

		/** Describes a folder. */
		Metadata?: FolderMetadata;
	}


	/** Describes a folder. */
	export interface FolderMetadata {
		Id?: string;
		Name?: string;
		CreatorId?: string;
		ParentFolderId?: string;
		CreatedTimestamp?: Date;
		ModifiedTimestamp?: Date;
		ResourceState?: FolderMetadataResourceState;
		Signature?: string;
		Labels?: Array<string>;
		Size?: number;
		LatestVersionSize?: number;
	}

	export enum FolderMetadataResourceState { ACTIVE = 0, RESTORING = 1, RECYCLING = 2, RECYCLED = 3 }

	export interface EntityAlreadyExistsException {
	}

	export interface ConflictingOperationException {
	}

	export interface LimitExceededException {
	}

	export interface CreateLabelsResponse {
	}

	export interface TooManyLabelsException {
	}

	export interface CreateNotificationSubscriptionResponse {

		/** Describes a subscription. */
		Subscription?: Subscription;
	}


	/** Describes a subscription. */
	export interface Subscription {
		SubscriptionId?: string;
		EndPoint?: string;
		Protocol?: SubscriptionProtocol;
	}

	export enum SubscriptionProtocol { HTTPS = 0 }

	export interface TooManySubscriptionsException {
	}

	export interface CreateUserResponse {

		/** Describes a user. */
		User?: User;
	}

	export enum StorageType { UNLIMITED = 0, QUOTA = 1 }

	export interface DeleteCustomMetadataResponse {
	}

	export interface ConcurrentModificationException {
	}

	export interface DeleteLabelsResponse {
	}

	export interface DescribeActivitiesResponse {
		UserActivities?: Array<Activity>;
		Marker?: string;
	}


	/** Describes the activity information. */
	export interface Activity {
		Type?: ActivityType;
		TimeStamp?: Date;
		IsIndirectActivity?: boolean;
		OrganizationId?: string;

		/** Describes the metadata of the user. */
		Initiator?: UserMetadata;

		/** Describes the users or user groups. */
		Participants?: Participants;

		/** Describes the metadata of a resource. */
		ResourceMetadata?: ResourceMetadata;

		/** Describes the metadata of a resource. */
		OriginalParent?: ResourceMetadata;

		/** Describes the metadata of a comment. */
		CommentMetadata?: CommentMetadata;
	}

	export enum ActivityType { DOCUMENT_CHECKED_IN = 0, DOCUMENT_CHECKED_OUT = 1, DOCUMENT_RENAMED = 2, DOCUMENT_VERSION_UPLOADED = 3, DOCUMENT_VERSION_DELETED = 4, DOCUMENT_VERSION_VIEWED = 5, DOCUMENT_VERSION_DOWNLOADED = 6, DOCUMENT_RECYCLED = 7, DOCUMENT_RESTORED = 8, DOCUMENT_REVERTED = 9, DOCUMENT_SHARED = 10, DOCUMENT_UNSHARED = 11, DOCUMENT_SHARE_PERMISSION_CHANGED = 12, DOCUMENT_SHAREABLE_LINK_CREATED = 13, DOCUMENT_SHAREABLE_LINK_REMOVED = 14, DOCUMENT_SHAREABLE_LINK_PERMISSION_CHANGED = 15, DOCUMENT_MOVED = 16, DOCUMENT_COMMENT_ADDED = 17, DOCUMENT_COMMENT_DELETED = 18, DOCUMENT_ANNOTATION_ADDED = 19, DOCUMENT_ANNOTATION_DELETED = 20, FOLDER_CREATED = 21, FOLDER_DELETED = 22, FOLDER_RENAMED = 23, FOLDER_RECYCLED = 24, FOLDER_RESTORED = 25, FOLDER_SHARED = 26, FOLDER_UNSHARED = 27, FOLDER_SHARE_PERMISSION_CHANGED = 28, FOLDER_SHAREABLE_LINK_CREATED = 29, FOLDER_SHAREABLE_LINK_REMOVED = 30, FOLDER_SHAREABLE_LINK_PERMISSION_CHANGED = 31, FOLDER_MOVED = 32 }


	/** Describes the metadata of the user. */
	export interface UserMetadata {
		Id?: string;
		Username?: string;
		GivenName?: string;
		Surname?: string;
		EmailAddress?: string;
	}


	/** Describes the users or user groups. */
	export interface Participants {
		Users?: Array<UserMetadata>;
		Groups?: Array<GroupMetadata>;
	}


	/** Describes the metadata of a user group. */
	export interface GroupMetadata {
		Id?: string;
		Name?: string;
	}


	/** Describes the metadata of a resource. */
	export interface ResourceMetadata {
		Type?: ResourceMetadataType;
		Name?: string;
		OriginalName?: string;
		Id?: string;
		VersionId?: string;

		/** Describes the metadata of the user. */
		Owner?: UserMetadata;
		ParentId?: string;
	}

	export enum ResourceMetadataType { FOLDER = 0, DOCUMENT = 1 }


	/** Describes the metadata of a comment. */
	export interface CommentMetadata {
		CommentId?: string;

		/** Describes a user. */
		Contributor?: User;
		CreatedTimestamp?: Date;
		CommentStatus?: CommentStatus;
		RecipientId?: string;
	}

	export interface InvalidArgumentException {
	}

	export interface DescribeCommentsResponse {
		Comments?: Array<Comment>;
		Marker?: string;
	}

	export interface DescribeDocumentVersionsResponse {
		DocumentVersions?: Array<DocumentVersionMetadata>;
		Marker?: string;
	}


	/** Describes a version of a document. */
	export interface DocumentVersionMetadata {
		Id?: string;
		Name?: string;
		ContentType?: string;
		Size?: number;
		Signature?: string;
		Status?: DocumentVersionMetadataStatus;
		CreatedTimestamp?: Date;
		ModifiedTimestamp?: Date;
		ContentCreatedTimestamp?: Date;
		ContentModifiedTimestamp?: Date;
		CreatorId?: string;
		Thumbnail?: DocumentThumbnailUrlMap;
		Source?: DocumentSourceUrlMap;
	}

	export enum DocumentVersionMetadataStatus { INITIALIZED = 0, ACTIVE = 1 }

	export interface DocumentThumbnailUrlMap {
	}

	export interface DocumentSourceUrlMap {
	}

	export interface DescribeFolderContentsResponse {
		Folders?: Array<FolderMetadata>;
		Documents?: Array<DocumentMetadata>;
		Marker?: string;
	}


	/** Describes the document. */
	export interface DocumentMetadata {
		Id?: string;
		CreatorId?: string;
		ParentFolderId?: string;
		CreatedTimestamp?: Date;
		ModifiedTimestamp?: Date;

		/** Describes a version of a document. */
		LatestVersionMetadata?: DocumentVersionMetadata;
		ResourceState?: FolderMetadataResourceState;
		Labels?: Array<string>;
	}

	export interface DescribeGroupsResponse {
		Groups?: Array<GroupMetadata>;
		Marker?: string;
	}

	export interface DescribeNotificationSubscriptionsResponse {
		Subscriptions?: Array<Subscription>;
		Marker?: string;
	}

	export interface DescribeResourcePermissionsResponse {
		Principals?: Array<Principal>;
		Marker?: string;
	}


	/** Describes a resource. */
	export interface Principal {
		Id?: string;
		Type?: SharePrincipalType;
		Roles?: Array<PermissionInfo>;
	}


	/** Describes the permissions. */
	export interface PermissionInfo {
		Role?: ShareResultRole;
		Type?: PermissionInfoType;
	}

	export enum PermissionInfoType { DIRECT = 0, INHERITED = 1 }

	export interface DescribeRootFoldersResponse {
		Folders?: Array<FolderMetadata>;
		Marker?: string;
	}

	export interface DescribeUsersResponse {
		Users?: Array<User>;
		TotalNumberOfUsers?: number;
		Marker?: string;
	}

	export interface RequestedEntityTooLargeException {
	}

	export interface GetCurrentUserResponse {

		/** Describes a user. */
		User?: User;
	}

	export interface GetDocumentResponse {

		/** Describes the document. */
		Metadata?: DocumentMetadata;
		CustomMetadata?: CustomMetadataMap;
	}

	export interface CustomMetadataMap {
	}

	export interface InvalidPasswordException {
	}

	export interface GetDocumentPathResponse {

		/** Describes the path information of a resource. */
		Path?: ResourcePath;
	}


	/** Describes the path information of a resource. */
	export interface ResourcePath {
		Components?: Array<ResourcePathComponent>;
	}


	/** Describes the resource path. */
	export interface ResourcePathComponent {
		Id?: string;
		Name?: string;
	}

	export interface GetDocumentVersionResponse {

		/** Describes a version of a document. */
		Metadata?: DocumentVersionMetadata;
		CustomMetadata?: CustomMetadataMap;
	}

	export interface GetFolderResponse {

		/** Describes a folder. */
		Metadata?: FolderMetadata;
		CustomMetadata?: CustomMetadataMap;
	}

	export interface GetFolderPathResponse {

		/** Describes the path information of a resource. */
		Path?: ResourcePath;
	}

	export interface GetResourcesResponse {
		Folders?: Array<FolderMetadata>;
		Documents?: Array<DocumentMetadata>;
		Marker?: string;
	}

	export interface InitiateDocumentVersionUploadResponse {

		/** Describes the document. */
		Metadata?: DocumentMetadata;

		/** Describes the upload. */
		UploadMetadata?: UploadMetadata;
	}


	/** Describes the upload. */
	export interface UploadMetadata {
		UploadUrl?: string;
		SignedHeaders?: SignedHeaderMap;
	}

	export interface SignedHeaderMap {
	}

	export interface StorageLimitExceededException {
	}

	export interface StorageLimitWillExceedException {
	}

	export interface DraftUploadOutOfSyncException {
	}

	export interface ResourceAlreadyCheckedOutException {
	}

	export interface InvalidOperationException {
	}

	export interface UpdateUserResponse {

		/** Describes a user. */
		User?: User;
	}

	export interface IllegalUserStateException {
	}

	export interface DeactivatingLastSystemUserException {
	}

	export interface AbortDocumentVersionUploadRequest {
	}

	export interface ActivateUserRequest {
	}


	/** Set of options which defines notification preferences of given action. */
	export interface NotificationOptions {
		SendEmail?: boolean;
		EmailMessage?: string;
	}

	export interface AddResourcePermissionsRequest {
		Principals: Array<SharePrincipal>;

		/** Set of options which defines notification preferences of given action. */
		NotificationOptions?: NotificationOptions;
	}

	export enum BooleanEnumType { TRUE = 0, FALSE = 1 }

	export enum CommentStatusType { DRAFT = 0, PUBLISHED = 1, DELETED = 2 }

	export enum CommentVisibilityType { PUBLIC = 0, PRIVATE = 1 }

	export interface CreateCommentRequest {
		ParentId?: string;
		ThreadId?: string;
		Text: string;
		Visibility?: CommentVisibility;
		NotifyCollaborators?: boolean;
	}

	export interface CreateCustomMetadataRequest {
		CustomMetadata: CustomMetadataMap;
	}

	export interface CreateFolderRequest {
		Name?: string;
		ParentFolderId: string;
	}

	export interface CreateLabelsRequest {
		Labels: Array<string>;
	}

	export enum SubscriptionProtocolType { HTTPS = 0 }

	export enum SubscriptionType { ALL = 0 }

	export interface CreateNotificationSubscriptionRequest {
		Endpoint: string;
		Protocol: SubscriptionProtocol;
		SubscriptionType: SubscriptionType;
	}

	export interface CreateUserRequest {
		OrganizationId?: string;
		Username: string;
		EmailAddress?: string;
		GivenName: string;
		Surname: string;
		Password: string;
		TimeZoneId?: string;

		/** Describes the storage for a user. */
		StorageRule?: StorageRuleType;
	}

	export interface DeactivateUserRequest {
	}

	export interface DeleteCommentRequest {
	}

	export interface DeleteCustomMetadataRequest {
	}

	export interface DeleteDocumentRequest {
	}

	export interface DeleteFolderContentsRequest {
	}

	export interface DeleteFolderRequest {
	}

	export interface DeleteLabelsRequest {
	}

	export interface DeleteNotificationSubscriptionRequest {
	}

	export interface DeleteUserRequest {
	}

	export interface DescribeActivitiesRequest {
	}

	export interface DescribeCommentsRequest {
	}

	export interface DescribeDocumentVersionsRequest {
	}

	export enum ResourceSortType { DATE = 0, NAME = 1 }

	export enum OrderType { ASCENDING = 0, DESCENDING = 1 }

	export enum FolderContentType { ALL = 0, DOCUMENT = 1, FOLDER = 2 }

	export interface DescribeFolderContentsRequest {
	}

	export interface DescribeGroupsRequest {
	}

	export interface DescribeNotificationSubscriptionsRequest {
	}

	export interface DescribeResourcePermissionsRequest {
	}

	export interface DescribeRootFoldersRequest {
	}

	export enum UserFilterType { ALL = 0, ACTIVE_PENDING = 1 }

	export enum UserSortType { USER_NAME = 0, FULL_NAME = 1, STORAGE_LIMIT = 2, USER_STATUS = 3, STORAGE_USED = 4 }

	export interface DescribeUsersRequest {
	}

	export enum ResourceStateType { ACTIVE = 0, RESTORING = 1, RECYCLING = 2, RECYCLED = 3 }

	export enum DocumentSourceType { ORIGINAL = 0, WITH_COMMENTS = 1 }

	export enum DocumentStatusType { INITIALIZED = 0, ACTIVE = 1 }

	export enum DocumentThumbnailType { SMALL = 0, SMALL_HQ = 1, LARGE = 2 }

	export enum DocumentVersionStatus { ACTIVE = 0 }

	export interface GetCurrentUserRequest {
	}

	export interface GetDocumentPathRequest {
	}

	export interface GetDocumentRequest {
	}

	export interface GetDocumentVersionRequest {
	}

	export interface GetFolderPathRequest {
	}

	export interface GetFolderRequest {
	}

	export enum ResourceCollectionType { SHARED_WITH_ME = 0 }

	export interface GetResourcesRequest {
	}

	export interface InitiateDocumentVersionUploadRequest {
		Id?: string;
		Name?: string;
		ContentCreatedTimestamp?: Date;
		ContentModifiedTimestamp?: Date;
		ContentType?: string;
		DocumentSizeInBytes?: number;
		ParentFolderId: string;
	}

	export enum LocaleType { en = 0, fr = 1, ko = 2, de = 3, es = 4, ja = 5, ru = 6, zh_CN = 7, zh_TW = 8, pt_BR = 9, _default = 10 }

	export enum RoleType { VIEWER = 0, CONTRIBUTOR = 1, OWNER = 2, COOWNER = 3 }

	export enum RolePermissionType { DIRECT = 0, INHERITED = 1 }

	export enum PrincipalType { USER = 0, GROUP = 1, INVITE = 2, ANONYMOUS = 3, ORGANIZATION = 4 }

	export interface RemoveAllResourcePermissionsRequest {
	}

	export interface RemoveResourcePermissionRequest {
	}

	export enum ResourceType { FOLDER = 0, DOCUMENT = 1 }

	export enum ShareStatusType { SUCCESS = 0, FAILURE = 1 }

	export interface UpdateDocumentRequest {
		Name?: string;
		ParentFolderId?: string;
		ResourceState?: FolderMetadataResourceState;
	}

	export interface UpdateDocumentVersionRequest {
		VersionStatus?: DocumentVersionStatus;
	}

	export interface UpdateFolderRequest {
		Name?: string;
		ParentFolderId?: string;
		ResourceState?: FolderMetadataResourceState;
	}

	export interface UpdateUserRequest {
		GivenName?: string;
		Surname?: string;
		Type?: UserType;

		/** Describes the storage for a user. */
		StorageRule?: StorageRuleType;
		TimeZoneId?: string;
		Locale?: UpdateUserRequestLocale;
		GrantPoweruserPrivileges?: BooleanEnumType;
	}

	export enum UpdateUserRequestLocale { en = 0, fr = 1, ko = 2, de = 3, es = 4, ja = 5, ru = 6, zh_CN = 7, zh_TW = 8, pt_BR = 9, _default = 10 }

	export enum UserStatusType { ACTIVE = 0, INACTIVE = 1, PENDING = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Aborts the upload of the specified document version that was previously initiated by <a>InitiateDocumentVersionUpload</a>. The client should make this call only when it no longer intends to upload the document version, or fails to do so.
		 * Delete api/v1/documents/{DocumentId}/versions/{VersionId}
		 * @param {string} DocumentId The ID of the document.
		 * @param {string} VersionId The ID of the version.
		 * @return {void} 
		 */
		AbortDocumentVersionUpload(DocumentId: string, VersionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)) + '/versions/' + (VersionId == null ? '' : encodeURIComponent(VersionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves version metadata for the specified document.
		 * Get api/v1/documents/{DocumentId}/versions/{VersionId}
		 * @param {string} DocumentId The ID of the document.
		 * @param {string} VersionId The version ID of the document.
		 * @param {string} fields A comma-separated list of values. Specify "SOURCE" to include a URL for the source document.
		 * @param {boolean} includeCustomMetadata Set this to TRUE to include custom metadata in the response.
		 * @return {GetDocumentVersionResponse} Success
		 */
		GetDocumentVersion(DocumentId: string, VersionId: string, fields: string, includeCustomMetadata: boolean): Observable<GetDocumentVersionResponse> {
			return this.http.get<GetDocumentVersionResponse>(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)) + '/versions/' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&includeCustomMetadata=' + includeCustomMetadata, {});
		}

		/**
		 * <p>Changes the status of the document version to ACTIVE. </p> <p>Amazon WorkDocs also sets its document container to ACTIVE. This is the last step in a document upload, after the client uploads the document to an S3-presigned URL returned by <a>InitiateDocumentVersionUpload</a>. </p>
		 * Patch api/v1/documents/{DocumentId}/versions/{VersionId}
		 * @param {string} DocumentId The ID of the document.
		 * @param {string} VersionId The version ID of the document.
		 * @return {void} Success
		 */
		UpdateDocumentVersion(DocumentId: string, VersionId: string, requestBody: UpdateDocumentVersionPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)) + '/versions/' + (VersionId == null ? '' : encodeURIComponent(VersionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Activates the specified user. Only active users can access Amazon WorkDocs.
		 * Post api/v1/users/{UserId}/activation
		 * @param {string} UserId The ID of the user.
		 * @return {ActivateUserResponse} Success
		 */
		ActivateUser(UserId: string): Observable<ActivateUserResponse> {
			return this.http.post<ActivateUserResponse>(this.baseUri + 'api/v1/users/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/activation', null, {});
		}

		/**
		 * Deactivates the specified user, which revokes the user's access to Amazon WorkDocs.
		 * Delete api/v1/users/{UserId}/activation
		 * @param {string} UserId The ID of the user.
		 * @return {void} 
		 */
		DeactivateUser(UserId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/users/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/activation', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a set of permissions for the specified folder or document. The resource permissions are overwritten if the principals already have different permissions.
		 * Post api/v1/resources/{ResourceId}/permissions
		 * @param {string} ResourceId The ID of the resource.
		 * @return {void} 
		 */
		AddResourcePermissions(ResourceId: string, requestBody: AddResourcePermissionsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/resources/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '/permissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the permissions of a specified resource.
		 * Get api/v1/resources/{ResourceId}/permissions
		 * @param {string} ResourceId The ID of the resource.
		 * @param {string} principalId The ID of the principal to filter permissions by.
		 * @param {number} limit The maximum number of items to return with this call.
		 * @param {string} marker The marker for the next set of results. (You received this marker from a previous call)
		 * @return {DescribeResourcePermissionsResponse} Success
		 */
		DescribeResourcePermissions(ResourceId: string, principalId: string, limit: number, marker: string): Observable<DescribeResourcePermissionsResponse> {
			return this.http.get<DescribeResourcePermissionsResponse>(this.baseUri + 'api/v1/resources/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '/permissions&principalId=' + (principalId == null ? '' : encodeURIComponent(principalId)) + '&limit=' + limit + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)), {});
		}

		/**
		 * Removes all the permissions from the specified resource.
		 * Delete api/v1/resources/{ResourceId}/permissions
		 * @param {string} ResourceId The ID of the resource.
		 * @return {void} 
		 */
		RemoveAllResourcePermissions(ResourceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/resources/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '/permissions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a new comment to the specified document version.
		 * Post api/v1/documents/{DocumentId}/versions/{VersionId}/comment
		 * @param {string} DocumentId The ID of the document.
		 * @param {string} VersionId The ID of the document version.
		 * @return {void} 
		 */
		CreateComment(DocumentId: string, VersionId: string, requestBody: CreateCommentPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)) + '/versions/' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '/comment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds one or more custom properties to the specified resource (a folder, document, or version).
		 * Put api/v1/resources/{ResourceId}/customMetadata
		 * @param {string} ResourceId The ID of the resource.
		 * @param {string} versionid The ID of the version, if the custom metadata is being added to a document version.
		 * @return {CreateCustomMetadataResponse} Success
		 */
		CreateCustomMetadata(ResourceId: string, versionid: string, requestBody: CreateCustomMetadataPutBody): Observable<CreateCustomMetadataResponse> {
			return this.http.put<CreateCustomMetadataResponse>(this.baseUri + 'api/v1/resources/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '/customMetadata&versionid=' + (versionid == null ? '' : encodeURIComponent(versionid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes custom metadata from the specified resource.
		 * Delete api/v1/resources/{ResourceId}/customMetadata
		 * @param {string} ResourceId The ID of the resource, either a document or folder.
		 * @param {string} versionId The ID of the version, if the custom metadata is being deleted from a document version.
		 * @param {Array<string>} keys List of properties to remove.
		 * @param {boolean} deleteAll Flag to indicate removal of all custom metadata properties from the specified resource.
		 * @return {DeleteCustomMetadataResponse} Success
		 */
		DeleteCustomMetadata(ResourceId: string, versionId: string, keys: Array<string>, deleteAll: boolean): Observable<DeleteCustomMetadataResponse> {
			return this.http.delete<DeleteCustomMetadataResponse>(this.baseUri + 'api/v1/resources/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '/customMetadata&versionId=' + (versionId == null ? '' : encodeURIComponent(versionId)) + '&' + keys.map(z => `keys=${encodeURIComponent(z)}`).join('&') + '&deleteAll=' + deleteAll, {});
		}

		/**
		 * Creates a folder with the specified name and parent folder.
		 * Post api/v1/folders
		 * @return {void} 
		 */
		CreateFolder(requestBody: CreateFolderPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/folders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds the specified list of labels to the given resource (a document or folder)
		 * Put api/v1/resources/{ResourceId}/labels
		 * @param {string} ResourceId The ID of the resource.
		 * @return {CreateLabelsResponse} Success
		 */
		CreateLabels(ResourceId: string, requestBody: CreateLabelsPutBody): Observable<CreateLabelsResponse> {
			return this.http.put<CreateLabelsResponse>(this.baseUri + 'api/v1/resources/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '/labels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified list of labels from a resource.
		 * Delete api/v1/resources/{ResourceId}/labels
		 * @param {string} ResourceId The ID of the resource.
		 * @param {Array<string>} labels List of labels to delete from the resource.
		 * @param {boolean} deleteAll Flag to request removal of all labels from the specified resource.
		 * @return {DeleteLabelsResponse} Success
		 */
		DeleteLabels(ResourceId: string, labels: Array<string>, deleteAll: boolean): Observable<DeleteLabelsResponse> {
			return this.http.delete<DeleteLabelsResponse>(this.baseUri + 'api/v1/resources/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '/labels&' + labels.map(z => `labels=${encodeURIComponent(z)}`).join('&') + '&deleteAll=' + deleteAll, {});
		}

		/**
		 * <p>Configure Amazon WorkDocs to use Amazon SNS notifications. The endpoint receives a confirmation message, and must confirm the subscription.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/subscribe-notifications.html">Subscribe to Notifications</a> in the <i>Amazon WorkDocs Developer Guide</i>.</p>
		 * Post api/v1/organizations/{OrganizationId}/subscriptions
		 * @param {string} OrganizationId The ID of the organization.
		 * @return {CreateNotificationSubscriptionResponse} Success
		 */
		CreateNotificationSubscription(OrganizationId: string, requestBody: CreateNotificationSubscriptionPostBody): Observable<CreateNotificationSubscriptionResponse> {
			return this.http.post<CreateNotificationSubscriptionResponse>(this.baseUri + 'api/v1/organizations/' + (OrganizationId == null ? '' : encodeURIComponent(OrganizationId)) + '/subscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the specified notification subscriptions.
		 * Get api/v1/organizations/{OrganizationId}/subscriptions
		 * @param {string} OrganizationId The ID of the organization.
		 * @param {string} marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} limit The maximum number of items to return with this call.
		 * @return {DescribeNotificationSubscriptionsResponse} Success
		 */
		DescribeNotificationSubscriptions(OrganizationId: string, marker: string, limit: number): Observable<DescribeNotificationSubscriptionsResponse> {
			return this.http.get<DescribeNotificationSubscriptionsResponse>(this.baseUri + 'api/v1/organizations/' + (OrganizationId == null ? '' : encodeURIComponent(OrganizationId)) + '/subscriptions&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&limit=' + limit, {});
		}

		/**
		 * Creates a user in a Simple AD or Microsoft AD directory. The status of a newly created user is "ACTIVE". New users can access Amazon WorkDocs.
		 * Post api/v1/users
		 * @return {void} 
		 */
		CreateUser(requestBody: CreateUserPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the specified users. You can describe all users or filter the results (for example, by status or organization).</p> <p>By default, Amazon WorkDocs returns the first 24 active or pending users. If there are more results, the response includes a marker that you can use to request the next set of results.</p>
		 * Get api/v1/users
		 * @param {string} organizationId The ID of the organization.
		 * @param {string} userIds The IDs of the users.
		 * @param {string} query A query to filter users by user name.
		 * @param {UserFilterType} include The state of the users. Specify "ALL" to include inactive users.
		 * @param {OrderType} order The order for the results.
		 * @param {UserSortType} sort The sorting criteria.
		 * @param {string} marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} limit The maximum number of items to return.
		 * @param {string} fields A comma-separated list of values. Specify "STORAGE_METADATA" to include the user storage quota and utilization information.
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeUsersResponse} Success
		 */
		DescribeUsers(organizationId: string, userIds: string, query: string, include: UserFilterType, order: OrderType, sort: UserSortType, marker: string, limit: number, fields: string, Limit: string, Marker: string): Observable<DescribeUsersResponse> {
			return this.http.get<DescribeUsersResponse>(this.baseUri + 'api/v1/users?organizationId=' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '&userIds=' + (userIds == null ? '' : encodeURIComponent(userIds)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&include=' + include + '&order=' + order + '&sort=' + sort + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&limit=' + limit + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), {});
		}

		/**
		 * Deletes the specified comment from the document version.
		 * Delete api/v1/documents/{DocumentId}/versions/{VersionId}/comment/{CommentId}
		 * @param {string} DocumentId The ID of the document.
		 * @param {string} VersionId The ID of the document version.
		 * @param {string} CommentId The ID of the comment.
		 * @return {void} 
		 */
		DeleteComment(DocumentId: string, VersionId: string, CommentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)) + '/versions/' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '/comment/' + (CommentId == null ? '' : encodeURIComponent(CommentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes the specified document and its associated metadata.
		 * Delete api/v1/documents/{DocumentId}
		 * @param {string} DocumentId The ID of the document.
		 * @return {void} 
		 */
		DeleteDocument(DocumentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details of a document.
		 * Get api/v1/documents/{DocumentId}
		 * @param {string} DocumentId The ID of the document.
		 * @param {boolean} includeCustomMetadata Set this to <code>TRUE</code> to include custom metadata in the response.
		 * @return {GetDocumentResponse} Success
		 */
		GetDocument(DocumentId: string, includeCustomMetadata: boolean): Observable<GetDocumentResponse> {
			return this.http.get<GetDocumentResponse>(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)) + '&includeCustomMetadata=' + includeCustomMetadata, {});
		}

		/**
		 * Updates the specified attributes of a document. The user must have access to both the document and its parent folder, if applicable.
		 * Patch api/v1/documents/{DocumentId}
		 * @param {string} DocumentId The ID of the document.
		 * @return {void} Success
		 */
		UpdateDocument(DocumentId: string, requestBody: UpdateDocumentPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes the specified folder and its contents.
		 * Delete api/v1/folders/{FolderId}
		 * @param {string} FolderId The ID of the folder.
		 * @return {void} 
		 */
		DeleteFolder(FolderId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/folders/' + (FolderId == null ? '' : encodeURIComponent(FolderId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the metadata of the specified folder.
		 * Get api/v1/folders/{FolderId}
		 * @param {string} FolderId The ID of the folder.
		 * @param {boolean} includeCustomMetadata Set to TRUE to include custom metadata in the response.
		 * @return {GetFolderResponse} Success
		 */
		GetFolder(FolderId: string, includeCustomMetadata: boolean): Observable<GetFolderResponse> {
			return this.http.get<GetFolderResponse>(this.baseUri + 'api/v1/folders/' + (FolderId == null ? '' : encodeURIComponent(FolderId)) + '&includeCustomMetadata=' + includeCustomMetadata, {});
		}

		/**
		 * Updates the specified attributes of the specified folder. The user must have access to both the folder and its parent folder, if applicable.
		 * Patch api/v1/folders/{FolderId}
		 * @param {string} FolderId The ID of the folder.
		 * @return {void} Success
		 */
		UpdateFolder(FolderId: string, requestBody: UpdateFolderPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'api/v1/folders/' + (FolderId == null ? '' : encodeURIComponent(FolderId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the contents of the specified folder.
		 * Delete api/v1/folders/{FolderId}/contents
		 * @param {string} FolderId The ID of the folder.
		 * @return {void} 
		 */
		DeleteFolderContents(FolderId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/folders/' + (FolderId == null ? '' : encodeURIComponent(FolderId)) + '/contents', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the contents of the specified folder, including its documents and subfolders.</p> <p>By default, Amazon WorkDocs returns the first 100 active document and folder metadata items. If there are more results, the response includes a marker that you can use to request the next set of results. You can also request initialized documents.</p>
		 * Get api/v1/folders/{FolderId}/contents
		 * @param {string} FolderId The ID of the folder.
		 * @param {ResourceSortType} sort The sorting criteria.
		 * @param {OrderType} order The order for the contents of the folder.
		 * @param {number} limit The maximum number of items to return with this call.
		 * @param {string} marker The marker for the next set of results. This marker was received from a previous call.
		 * @param {FolderContentType} type The type of items.
		 * @param {string} include The contents to include. Specify "INITIALIZED" to include initialized documents.
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeFolderContentsResponse} Success
		 */
		DescribeFolderContents(FolderId: string, sort: ResourceSortType, order: OrderType, limit: number, marker: string, type: FolderContentType, include: string, Limit: string, Marker: string): Observable<DescribeFolderContentsResponse> {
			return this.http.get<DescribeFolderContentsResponse>(this.baseUri + 'api/v1/folders/' + (FolderId == null ? '' : encodeURIComponent(FolderId)) + '/contents&sort=' + sort + '&order=' + order + '&limit=' + limit + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&type=' + type + '&include=' + (include == null ? '' : encodeURIComponent(include)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), {});
		}

		/**
		 * Deletes the specified subscription from the specified organization.
		 * Delete api/v1/organizations/{OrganizationId}/subscriptions/{SubscriptionId}
		 * @param {string} SubscriptionId The ID of the subscription.
		 * @param {string} OrganizationId The ID of the organization.
		 * @return {void} Success
		 */
		DeleteNotificationSubscription(SubscriptionId: string, OrganizationId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/organizations/' + (OrganizationId == null ? '' : encodeURIComponent(OrganizationId)) + '/subscriptions/' + (SubscriptionId == null ? '' : encodeURIComponent(SubscriptionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified user from a Simple AD or Microsoft AD directory.
		 * Delete api/v1/users/{UserId}
		 * @param {string} UserId The ID of the user.
		 * @return {void} 
		 */
		DeleteUser(UserId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/users/' + (UserId == null ? '' : encodeURIComponent(UserId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified attributes of the specified user, and grants or revokes administrative privileges to the Amazon WorkDocs site.
		 * Patch api/v1/users/{UserId}
		 * @param {string} UserId The ID of the user.
		 * @return {UpdateUserResponse} Success
		 */
		UpdateUser(UserId: string, requestBody: UpdateUserPatchBody): Observable<UpdateUserResponse> {
			return this.http.patch<UpdateUserResponse>(this.baseUri + 'api/v1/users/' + (UserId == null ? '' : encodeURIComponent(UserId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the user activities in a specified time period.
		 * Get api/v1/activities
		 * @param {Date} startTime The timestamp that determines the starting time of the activities. The response includes the activities performed after the specified timestamp.
		 * @param {Date} endTime The timestamp that determines the end time of the activities. The response includes the activities performed before the specified timestamp.
		 * @param {string} organizationId The ID of the organization. This is a mandatory parameter when using administrative API (SigV4) requests.
		 * @param {string} activityTypes Specifies which activity types to include in the response. If this field is left empty, all activity types are returned.
		 * @param {string} resourceId The document or folder ID for which to describe activity types.
		 * @param {string} userId The ID of the user who performed the action. The response includes activities pertaining to this user. This is an optional parameter and is only applicable for administrative API (SigV4) requests.
		 * @param {boolean} includeIndirectActivities Includes indirect activities. An indirect activity results from a direct activity performed on a parent resource. For example, sharing a parent folder (the direct activity) shares all of the subfolders and documents within the parent folder (the indirect activity).
		 * @param {number} limit The maximum number of items to return.
		 * @param {string} marker The marker for the next set of results.
		 * @return {DescribeActivitiesResponse} Success
		 */
		DescribeActivities(startTime: Date, endTime: Date, organizationId: string, activityTypes: string, resourceId: string, userId: string, includeIndirectActivities: boolean, limit: number, marker: string): Observable<DescribeActivitiesResponse> {
			return this.http.get<DescribeActivitiesResponse>(this.baseUri + 'api/v1/activities?startTime=' + startTime.toISOString() + '&endTime=' + endTime.toISOString() + '&organizationId=' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '&activityTypes=' + (activityTypes == null ? '' : encodeURIComponent(activityTypes)) + '&resourceId=' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&includeIndirectActivities=' + includeIndirectActivities + '&limit=' + limit + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)), {});
		}

		/**
		 * List all the comments for the specified document version.
		 * Get api/v1/documents/{DocumentId}/versions/{VersionId}/comments
		 * @param {string} DocumentId The ID of the document.
		 * @param {string} VersionId The ID of the document version.
		 * @param {number} limit The maximum number of items to return.
		 * @param {string} marker The marker for the next set of results. This marker was received from a previous call.
		 * @return {DescribeCommentsResponse} Success
		 */
		DescribeComments(DocumentId: string, VersionId: string, limit: number, marker: string): Observable<DescribeCommentsResponse> {
			return this.http.get<DescribeCommentsResponse>(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)) + '/versions/' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '/comments&limit=' + limit + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)), {});
		}

		/**
		 * <p>Retrieves the document versions for the specified document.</p> <p>By default, only active versions are returned.</p>
		 * Get api/v1/documents/{DocumentId}/versions
		 * @param {string} DocumentId The ID of the document.
		 * @param {string} marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} limit The maximum number of versions to return with this call.
		 * @param {string} include A comma-separated list of values. Specify "INITIALIZED" to include incomplete versions.
		 * @param {string} fields Specify "SOURCE" to include initialized versions and a URL for the source document.
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeDocumentVersionsResponse} Success
		 */
		DescribeDocumentVersions(DocumentId: string, marker: string, limit: number, include: string, fields: string, Limit: string, Marker: string): Observable<DescribeDocumentVersionsResponse> {
			return this.http.get<DescribeDocumentVersionsResponse>(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)) + '/versions&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&limit=' + limit + '&include=' + (include == null ? '' : encodeURIComponent(include)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), {});
		}

		/**
		 * Describes the groups specified by the query. Groups are defined by the underlying Active Directory.
		 * Get api/v1/groups#searchQuery
		 * @param {string} searchQuery A query to describe groups by group name.
		 * @param {string} organizationId The ID of the organization.
		 * @param {string} marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @param {number} limit The maximum number of items to return with this call.
		 * @return {DescribeGroupsResponse} Success
		 */
		DescribeGroups(searchQuery: string, organizationId: string, marker: string, limit: number): Observable<DescribeGroupsResponse> {
			return this.http.get<DescribeGroupsResponse>(this.baseUri + 'api/v1/groups#searchQuery?searchQuery=' + (searchQuery == null ? '' : encodeURIComponent(searchQuery)) + '&organizationId=' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&limit=' + limit, {});
		}

		/**
		 * <p>Describes the current user's special folders; the <code>RootFolder</code> and the <code>RecycleBin</code>. <code>RootFolder</code> is the root of user's files and folders and <code>RecycleBin</code> is the root of recycled items. This is not a valid action for SigV4 (administrative API) clients.</p> <p>This action requires an authentication token. To get an authentication token, register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access Control for User Applications</a> in the <i>Amazon WorkDocs Developer Guide</i>.</p>
		 * Get api/v1/me/root#Authentication
		 * @param {number} limit The maximum number of items to return.
		 * @param {string} marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @return {DescribeRootFoldersResponse} Success
		 */
		DescribeRootFolders(limit: number, marker: string): Observable<DescribeRootFoldersResponse> {
			return this.http.get<DescribeRootFoldersResponse>(this.baseUri + 'api/v1/me/root#Authentication?limit=' + limit + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)), {});
		}

		/**
		 * <p>Retrieves details of the current user for whom the authentication token was generated. This is not a valid action for SigV4 (administrative API) clients.</p> <p>This action requires an authentication token. To get an authentication token, register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access Control for User Applications</a> in the <i>Amazon WorkDocs Developer Guide</i>.</p>
		 * Get api/v1/me#Authentication
		 * @return {GetCurrentUserResponse} Success
		 */
		GetCurrentUser(): Observable<GetCurrentUserResponse> {
			return this.http.get<GetCurrentUserResponse>(this.baseUri + 'api/v1/me#Authentication', {});
		}

		/**
		 * <p>Retrieves the path information (the hierarchy from the root folder) for the requested document.</p> <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the requested document and only includes the IDs of the parent folders in the path. You can limit the maximum number of levels. You can also request the names of the parent folders.</p>
		 * Get api/v1/documents/{DocumentId}/path
		 * @param {string} DocumentId The ID of the document.
		 * @param {number} limit The maximum number of levels in the hierarchy to return.
		 * @param {string} fields A comma-separated list of values. Specify <code>NAME</code> to include the names of the parent folders.
		 * @param {string} marker This value is not supported.
		 * @return {GetDocumentPathResponse} Success
		 */
		GetDocumentPath(DocumentId: string, limit: number, fields: string, marker: string): Observable<GetDocumentPathResponse> {
			return this.http.get<GetDocumentPathResponse>(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)) + '/path&limit=' + limit + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)), {});
		}

		/**
		 * <p>Retrieves the path information (the hierarchy from the root folder) for the specified folder.</p> <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the requested folder and only includes the IDs of the parent folders in the path. You can limit the maximum number of levels. You can also request the parent folder names.</p>
		 * Get api/v1/folders/{FolderId}/path
		 * @param {string} FolderId The ID of the folder.
		 * @param {number} limit The maximum number of levels in the hierarchy to return.
		 * @param {string} fields A comma-separated list of values. Specify "NAME" to include the names of the parent folders.
		 * @param {string} marker This value is not supported.
		 * @return {GetFolderPathResponse} Success
		 */
		GetFolderPath(FolderId: string, limit: number, fields: string, marker: string): Observable<GetFolderPathResponse> {
			return this.http.get<GetFolderPathResponse>(this.baseUri + 'api/v1/folders/' + (FolderId == null ? '' : encodeURIComponent(FolderId)) + '/path&limit=' + limit + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)), {});
		}

		/**
		 * Retrieves a collection of resources, including folders and documents. The only <code>CollectionType</code> supported is <code>SHARED_WITH_ME</code>.
		 * Get api/v1/resources
		 * @param {string} userId The user ID for the resource collection. This is a required field for accessing the API operation using IAM credentials.
		 * @param {ResourceCollectionType} collectionType The collection type.
		 * @param {number} limit The maximum number of resources to return.
		 * @param {string} marker The marker for the next set of results. This marker was received from a previous call.
		 * @return {GetResourcesResponse} Success
		 */
		GetResources(userId: string, collectionType: ResourceCollectionType, limit: number, marker: string): Observable<GetResourcesResponse> {
			return this.http.get<GetResourcesResponse>(this.baseUri + 'api/v1/resources?userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&collectionType=' + collectionType + '&limit=' + limit + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)), {});
		}

		/**
		 * <p>Creates a new document object and version object.</p> <p>The client specifies the parent folder ID and name of the document to upload. The ID is optionally specified when creating a new version of an existing document. This is the first step to upload a document. Next, upload the document to the URL returned from the call, and then call <a>UpdateDocumentVersion</a>.</p> <p>To cancel the document upload, call <a>AbortDocumentVersionUpload</a>.</p>
		 * Post api/v1/documents
		 * @return {void} 
		 */
		InitiateDocumentVersionUpload(requestBody: InitiateDocumentVersionUploadPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/documents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the permission for the specified principal from the specified resource.
		 * Delete api/v1/resources/{ResourceId}/permissions/{PrincipalId}
		 * @param {string} ResourceId The ID of the resource.
		 * @param {string} PrincipalId The principal ID of the resource.
		 * @param {SharePrincipalType} type The principal type of the resource.
		 * @return {void} 
		 */
		RemoveResourcePermission(ResourceId: string, PrincipalId: string, type: SharePrincipalType): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/resources/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '/permissions/' + (PrincipalId == null ? '' : encodeURIComponent(PrincipalId)) + '&type=' + type, { observe: 'response', responseType: 'text' });
		}
	}

	export interface UpdateDocumentVersionPatchBody {

		/** The status of the version. */
		VersionStatus?: DocumentVersionStatus;
	}

	export interface AddResourcePermissionsPostBody {

		/** The users, groups, or organization being granted permission. */
		Principals: Array<SharePrincipal>;

		/** Set of options which defines notification preferences of given action. */
		NotificationOptions?: AddResourcePermissionsPostBodyNotificationOptions;
	}

	export interface AddResourcePermissionsPostBodyNotificationOptions {
		SendEmail?: boolean;
		EmailMessage?: string;
	}

	export interface CreateCommentPostBody {

		/**
		 * The ID of the parent comment.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [\w+-.@]+
		 */
		ParentId?: string;

		/**
		 * The ID of the root comment in the thread.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [\w+-.@]+
		 */
		ThreadId?: string;

		/**
		 * The text of the comment.
		 * Max length: 2048
		 * Min length: 1
		 */
		Text: string;

		/** The visibility of the comment. Options are either PRIVATE, where the comment is visible only to the comment author and document owner and co-owners, or PUBLIC, where the comment is visible to document owners, co-owners, and contributors. */
		Visibility?: CommentVisibility;

		/** Set this parameter to TRUE to send an email out to the document collaborators after the comment is created. */
		NotifyCollaborators?: boolean;
	}

	export interface CreateCustomMetadataPutBody {

		/** Custom metadata in the form of name-value pairs. */
		CustomMetadata: {[id: string]: string };
	}

	export interface CreateFolderPostBody {

		/**
		 * The name of the new folder.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [\u0020-\u202D\u202F-\uFFFF]+
		 */
		Name?: string;

		/**
		 * The ID of the parent folder.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [\w+-.@]+
		 */
		ParentFolderId: string;
	}

	export interface CreateLabelsPutBody {

		/**
		 * List of labels to add to the resource.
		 * Maximum items: 20
		 */
		Labels: Array<string>;
	}

	export interface CreateNotificationSubscriptionPostBody {

		/**
		 * The endpoint to receive the notifications. If the protocol is HTTPS, the endpoint is a URL that begins with <code>https</code>.
		 * Max length: 256
		 * Min length: 1
		 */
		Endpoint: string;

		/** The protocol to use. The supported value is https, which delivers JSON-encoded messages using HTTPS POST. */
		Protocol: SubscriptionProtocol;

		/** The notification type. */
		SubscriptionType: SubscriptionType;
	}

	export interface CreateUserPostBody {

		/**
		 * The ID of the organization.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [&\w+-.@]+
		 */
		OrganizationId?: string;

		/**
		 * The login name of the user.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [\w\-+.]+(@[a-zA-Z0-9.\-]+\.[a-zA-Z]+)?
		 */
		Username: string;

		/**
		 * The email address of the user.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}
		 */
		EmailAddress?: string;

		/**
		 * The given name of the user.
		 * Max length: 64
		 * Min length: 1
		 */
		GivenName: string;

		/**
		 * The surname of the user.
		 * Max length: 64
		 * Min length: 1
		 */
		Surname: string;

		/**
		 * The password of the user.
		 * Max length: 32
		 * Min length: 4
		 * Pattern: [\u0020-\u00FF]+
		 */
		Password: string;

		/**
		 * The time zone ID of the user.
		 * Max length: 256
		 * Min length: 1
		 */
		TimeZoneId?: string;

		/** Describes the storage for a user. */
		StorageRule?: CreateUserPostBodyStorageRule;
	}

	export interface CreateUserPostBodyStorageRule {
		StorageAllocatedInBytes?: number;
		StorageType?: StorageRuleTypeStorageType;
	}

	export interface UpdateDocumentPatchBody {

		/**
		 * The name of the document.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [\u0020-\u202D\u202F-\uFFFF]+
		 */
		Name?: string;

		/**
		 * The ID of the parent folder.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [\w+-.@]+
		 */
		ParentFolderId?: string;

		/** The resource state of the document. Only ACTIVE and RECYCLED are supported. */
		ResourceState?: FolderMetadataResourceState;
	}

	export interface UpdateFolderPatchBody {

		/**
		 * The name of the folder.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [\u0020-\u202D\u202F-\uFFFF]+
		 */
		Name?: string;

		/**
		 * The ID of the parent folder.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [\w+-.@]+
		 */
		ParentFolderId?: string;

		/** The resource state of the folder. Only ACTIVE and RECYCLED are accepted values from the API. */
		ResourceState?: FolderMetadataResourceState;
	}

	export interface UpdateUserPatchBody {

		/**
		 * The given name of the user.
		 * Max length: 64
		 * Min length: 1
		 */
		GivenName?: string;

		/**
		 * The surname of the user.
		 * Max length: 64
		 * Min length: 1
		 */
		Surname?: string;

		/** The type of the user. */
		Type?: UserType;

		/** Describes the storage for a user. */
		StorageRule?: UpdateUserPatchBodyStorageRule;

		/**
		 * The time zone ID of the user.
		 * Max length: 256
		 * Min length: 1
		 */
		TimeZoneId?: string;

		/** The locale of the user. */
		Locale?: UpdateUserPatchBodyLocale;

		/** Boolean value to determine whether the user is granted Poweruser privileges. */
		GrantPoweruserPrivileges?: BooleanEnumType;
	}

	export interface UpdateUserPatchBodyStorageRule {
		StorageAllocatedInBytes?: number;
		StorageType?: StorageRuleTypeStorageType;
	}

	export enum UpdateUserPatchBodyLocale { en = 0, fr = 1, ko = 2, de = 3, es = 4, ja = 5, ru = 6, zh_CN = 7, zh_TW = 8, pt_BR = 9, _default = 10 }

	export interface InitiateDocumentVersionUploadPostBody {

		/**
		 * The ID of the document.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [\w+-.@]+
		 */
		Id?: string;

		/**
		 * The name of the document.
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [\u0020-\u202D\u202F-\uFFFF]+
		 */
		Name?: string;

		/** The timestamp when the content of the document was originally created. */
		ContentCreatedTimestamp?: Date;

		/** The timestamp when the content of the document was modified. */
		ContentModifiedTimestamp?: Date;

		/**
		 * The content type of the document.
		 * Max length: 128
		 * Min length: 1
		 */
		ContentType?: string;

		/** The size of the document, in bytes. */
		DocumentSizeInBytes?: number;

		/**
		 * The ID of the parent folder.
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [\w+-.@]+
		 */
		ParentFolderId: string;
	}

}

