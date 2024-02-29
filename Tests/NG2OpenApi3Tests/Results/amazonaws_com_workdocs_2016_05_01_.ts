import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface EntityNotExistsException {
	}
	export interface EntityNotExistsExceptionFormProperties {
	}
	export function CreateEntityNotExistsExceptionFormGroup() {
		return new FormGroup<EntityNotExistsExceptionFormProperties>({
		});

	}

	export interface ProhibitedStateException {
	}
	export interface ProhibitedStateExceptionFormProperties {
	}
	export function CreateProhibitedStateExceptionFormGroup() {
		return new FormGroup<ProhibitedStateExceptionFormProperties>({
		});

	}

	export interface UnauthorizedOperationException {
	}
	export interface UnauthorizedOperationExceptionFormProperties {
	}
	export function CreateUnauthorizedOperationExceptionFormGroup() {
		return new FormGroup<UnauthorizedOperationExceptionFormProperties>({
		});

	}

	export interface UnauthorizedResourceAccessException {
	}
	export interface UnauthorizedResourceAccessExceptionFormProperties {
	}
	export function CreateUnauthorizedResourceAccessExceptionFormGroup() {
		return new FormGroup<UnauthorizedResourceAccessExceptionFormProperties>({
		});

	}

	export interface FailedDependencyException {
	}
	export interface FailedDependencyExceptionFormProperties {
	}
	export function CreateFailedDependencyExceptionFormGroup() {
		return new FormGroup<FailedDependencyExceptionFormProperties>({
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

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
		});

	}

	export interface ActivateUserResponse {
		User?: User;
	}
	export interface ActivateUserResponseFormProperties {
	}
	export function CreateActivateUserResponseFormGroup() {
		return new FormGroup<ActivateUserResponseFormProperties>({
		});

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
		Status?: UserStatusType;
		Type?: UserType;
		CreatedTimestamp?: Date;
		ModifiedTimestamp?: Date;
		TimeZoneId?: string;
		Locale?: LocaleType;
		Storage?: UserStorageMetadata;
	}

	/** Describes a user. */
	export interface UserFormProperties {
		Id: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		EmailAddress: FormControl<string | null | undefined>,
		GivenName: FormControl<string | null | undefined>,
		Surname: FormControl<string | null | undefined>,
		OrganizationId: FormControl<string | null | undefined>,
		RootFolderId: FormControl<string | null | undefined>,
		RecycleBinFolderId: FormControl<string | null | undefined>,
		Status: FormControl<UserStatusType | null | undefined>,
		Type: FormControl<UserType | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		ModifiedTimestamp: FormControl<Date | null | undefined>,
		TimeZoneId: FormControl<string | null | undefined>,
		Locale: FormControl<LocaleType | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			GivenName: new FormControl<string | null | undefined>(undefined),
			Surname: new FormControl<string | null | undefined>(undefined),
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			RootFolderId: new FormControl<string | null | undefined>(undefined),
			RecycleBinFolderId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<UserStatusType | null | undefined>(undefined),
			Type: new FormControl<UserType | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			TimeZoneId: new FormControl<string | null | undefined>(undefined),
			Locale: new FormControl<LocaleType | null | undefined>(undefined),
		});

	}

	export enum UserStatusType { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE', PENDING = 'PENDING' }

	export enum UserType { USER = 'USER', ADMIN = 'ADMIN', POWERUSER = 'POWERUSER', MINIMALUSER = 'MINIMALUSER', WORKSPACESUSER = 'WORKSPACESUSER' }

	export enum LocaleType { en = 'en', fr = 'fr', ko = 'ko', de = 'de', es = 'es', ja = 'ja', ru = 'ru', zh_CN = 'zh_CN', zh_TW = 'zh_TW', pt_BR = 'pt_BR', default = 'default' }


	/** Describes the storage for a user. */
	export interface UserStorageMetadata {
		StorageUtilizedInBytes?: number | null;
		StorageRule?: StorageRuleType;
	}

	/** Describes the storage for a user. */
	export interface UserStorageMetadataFormProperties {
		StorageUtilizedInBytes: FormControl<number | null | undefined>,
	}
	export function CreateUserStorageMetadataFormGroup() {
		return new FormGroup<UserStorageMetadataFormProperties>({
			StorageUtilizedInBytes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the storage for a user. */
	export interface StorageRuleType {
		StorageAllocatedInBytes?: number | null;
		StorageType?: StorageType;
	}

	/** Describes the storage for a user. */
	export interface StorageRuleTypeFormProperties {
		StorageAllocatedInBytes: FormControl<number | null | undefined>,
		StorageType: FormControl<StorageType | null | undefined>,
	}
	export function CreateStorageRuleTypeFormGroup() {
		return new FormGroup<StorageRuleTypeFormProperties>({
			StorageAllocatedInBytes: new FormControl<number | null | undefined>(undefined),
			StorageType: new FormControl<StorageType | null | undefined>(undefined),
		});

	}

	export enum StorageType { UNLIMITED = 'UNLIMITED', QUOTA = 'QUOTA' }

	export interface AddResourcePermissionsResponse {
		ShareResults?: Array<ShareResult>;
	}
	export interface AddResourcePermissionsResponseFormProperties {
	}
	export function CreateAddResourcePermissionsResponseFormGroup() {
		return new FormGroup<AddResourcePermissionsResponseFormProperties>({
		});

	}


	/** Describes the share results of a resource. */
	export interface ShareResult {
		PrincipalId?: string;
		InviteePrincipalId?: string;
		Role?: RoleType;
		Status?: ShareStatusType;
		ShareId?: string;
		StatusMessage?: string;
	}

	/** Describes the share results of a resource. */
	export interface ShareResultFormProperties {
		PrincipalId: FormControl<string | null | undefined>,
		InviteePrincipalId: FormControl<string | null | undefined>,
		Role: FormControl<RoleType | null | undefined>,
		Status: FormControl<ShareStatusType | null | undefined>,
		ShareId: FormControl<string | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateShareResultFormGroup() {
		return new FormGroup<ShareResultFormProperties>({
			PrincipalId: new FormControl<string | null | undefined>(undefined),
			InviteePrincipalId: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<RoleType | null | undefined>(undefined),
			Status: new FormControl<ShareStatusType | null | undefined>(undefined),
			ShareId: new FormControl<string | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RoleType { VIEWER = 'VIEWER', CONTRIBUTOR = 'CONTRIBUTOR', OWNER = 'OWNER', COOWNER = 'COOWNER' }

	export enum ShareStatusType { SUCCESS = 'SUCCESS', FAILURE = 'FAILURE' }


	/** Describes the recipient type and ID, if available. */
	export interface SharePrincipal {

		/** Required */
		Id: string;

		/** Required */
		Type: PrincipalType;

		/** Required */
		Role: RoleType;
	}

	/** Describes the recipient type and ID, if available. */
	export interface SharePrincipalFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<PrincipalType | null | undefined>,

		/** Required */
		Role: FormControl<RoleType | null | undefined>,
	}
	export function CreateSharePrincipalFormGroup() {
		return new FormGroup<SharePrincipalFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<PrincipalType | null | undefined>(undefined, [Validators.required]),
			Role: new FormControl<RoleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PrincipalType { USER = 'USER', GROUP = 'GROUP', INVITE = 'INVITE', ANONYMOUS = 'ANONYMOUS', ORGANIZATION = 'ORGANIZATION' }

	export interface CreateCommentResponse {
		Comment?: Comment;
	}
	export interface CreateCommentResponseFormProperties {
	}
	export function CreateCreateCommentResponseFormGroup() {
		return new FormGroup<CreateCommentResponseFormProperties>({
		});

	}


	/** Describes a comment. */
	export interface Comment {

		/** Required */
		CommentId: string;
		ParentId?: string;
		ThreadId?: string;
		Text?: string;
		Contributor?: User;
		CreatedTimestamp?: Date;
		Status?: CommentStatusType;
		Visibility?: CommentVisibilityType;
		RecipientId?: string;
	}

	/** Describes a comment. */
	export interface CommentFormProperties {

		/** Required */
		CommentId: FormControl<string | null | undefined>,
		ParentId: FormControl<string | null | undefined>,
		ThreadId: FormControl<string | null | undefined>,
		Text: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		Status: FormControl<CommentStatusType | null | undefined>,
		Visibility: FormControl<CommentVisibilityType | null | undefined>,
		RecipientId: FormControl<string | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			CommentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ParentId: new FormControl<string | null | undefined>(undefined),
			ThreadId: new FormControl<string | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<CommentStatusType | null | undefined>(undefined),
			Visibility: new FormControl<CommentVisibilityType | null | undefined>(undefined),
			RecipientId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CommentStatusType { DRAFT = 'DRAFT', PUBLISHED = 'PUBLISHED', DELETED = 'DELETED' }

	export enum CommentVisibilityType { PUBLIC = 'PUBLIC', PRIVATE = 'PRIVATE' }

	export interface DocumentLockedForCommentsException {
	}
	export interface DocumentLockedForCommentsExceptionFormProperties {
	}
	export function CreateDocumentLockedForCommentsExceptionFormGroup() {
		return new FormGroup<DocumentLockedForCommentsExceptionFormProperties>({
		});

	}

	export interface InvalidCommentOperationException {
	}
	export interface InvalidCommentOperationExceptionFormProperties {
	}
	export function CreateInvalidCommentOperationExceptionFormGroup() {
		return new FormGroup<InvalidCommentOperationExceptionFormProperties>({
		});

	}

	export interface CreateCustomMetadataResponse {
	}
	export interface CreateCustomMetadataResponseFormProperties {
	}
	export function CreateCreateCustomMetadataResponseFormGroup() {
		return new FormGroup<CreateCustomMetadataResponseFormProperties>({
		});

	}

	export interface CustomMetadataLimitExceededException {
	}
	export interface CustomMetadataLimitExceededExceptionFormProperties {
	}
	export function CreateCustomMetadataLimitExceededExceptionFormGroup() {
		return new FormGroup<CustomMetadataLimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateFolderResponse {
		Metadata?: FolderMetadata;
	}
	export interface CreateFolderResponseFormProperties {
	}
	export function CreateCreateFolderResponseFormGroup() {
		return new FormGroup<CreateFolderResponseFormProperties>({
		});

	}


	/** Describes a folder. */
	export interface FolderMetadata {
		Id?: string;
		Name?: string;
		CreatorId?: string;
		ParentFolderId?: string;
		CreatedTimestamp?: Date;
		ModifiedTimestamp?: Date;
		ResourceState?: ResourceStateType;
		Signature?: string;
		Labels?: Array<string>;
		Size?: number | null;
		LatestVersionSize?: number | null;
	}

	/** Describes a folder. */
	export interface FolderMetadataFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		CreatorId: FormControl<string | null | undefined>,
		ParentFolderId: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		ModifiedTimestamp: FormControl<Date | null | undefined>,
		ResourceState: FormControl<ResourceStateType | null | undefined>,
		Signature: FormControl<string | null | undefined>,
		Size: FormControl<number | null | undefined>,
		LatestVersionSize: FormControl<number | null | undefined>,
	}
	export function CreateFolderMetadataFormGroup() {
		return new FormGroup<FolderMetadataFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			CreatorId: new FormControl<string | null | undefined>(undefined),
			ParentFolderId: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ResourceState: new FormControl<ResourceStateType | null | undefined>(undefined),
			Signature: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
			LatestVersionSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ResourceStateType { ACTIVE = 'ACTIVE', RESTORING = 'RESTORING', RECYCLING = 'RECYCLING', RECYCLED = 'RECYCLED' }

	export interface EntityAlreadyExistsException {
	}
	export interface EntityAlreadyExistsExceptionFormProperties {
	}
	export function CreateEntityAlreadyExistsExceptionFormGroup() {
		return new FormGroup<EntityAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface ConflictingOperationException {
	}
	export interface ConflictingOperationExceptionFormProperties {
	}
	export function CreateConflictingOperationExceptionFormGroup() {
		return new FormGroup<ConflictingOperationExceptionFormProperties>({
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

	export interface CreateLabelsResponse {
	}
	export interface CreateLabelsResponseFormProperties {
	}
	export function CreateCreateLabelsResponseFormGroup() {
		return new FormGroup<CreateLabelsResponseFormProperties>({
		});

	}

	export interface TooManyLabelsException {
	}
	export interface TooManyLabelsExceptionFormProperties {
	}
	export function CreateTooManyLabelsExceptionFormGroup() {
		return new FormGroup<TooManyLabelsExceptionFormProperties>({
		});

	}

	export interface CreateNotificationSubscriptionResponse {
		Subscription?: Subscription;
	}
	export interface CreateNotificationSubscriptionResponseFormProperties {
	}
	export function CreateCreateNotificationSubscriptionResponseFormGroup() {
		return new FormGroup<CreateNotificationSubscriptionResponseFormProperties>({
		});

	}


	/** Describes a subscription. */
	export interface Subscription {
		SubscriptionId?: string;
		EndPoint?: string;
		Protocol?: SubscriptionProtocolType;
	}

	/** Describes a subscription. */
	export interface SubscriptionFormProperties {
		SubscriptionId: FormControl<string | null | undefined>,
		EndPoint: FormControl<string | null | undefined>,
		Protocol: FormControl<SubscriptionProtocolType | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			SubscriptionId: new FormControl<string | null | undefined>(undefined),
			EndPoint: new FormControl<string | null | undefined>(undefined),
			Protocol: new FormControl<SubscriptionProtocolType | null | undefined>(undefined),
		});

	}

	export enum SubscriptionProtocolType { HTTPS = 'HTTPS', SQS = 'SQS' }

	export interface TooManySubscriptionsException {
	}
	export interface TooManySubscriptionsExceptionFormProperties {
	}
	export function CreateTooManySubscriptionsExceptionFormGroup() {
		return new FormGroup<TooManySubscriptionsExceptionFormProperties>({
		});

	}

	export interface InvalidArgumentException {
	}
	export interface InvalidArgumentExceptionFormProperties {
	}
	export function CreateInvalidArgumentExceptionFormGroup() {
		return new FormGroup<InvalidArgumentExceptionFormProperties>({
		});

	}

	export interface CreateUserResponse {
		User?: User;
	}
	export interface CreateUserResponseFormProperties {
	}
	export function CreateCreateUserResponseFormGroup() {
		return new FormGroup<CreateUserResponseFormProperties>({
		});

	}

	export interface DeleteCustomMetadataResponse {
	}
	export interface DeleteCustomMetadataResponseFormProperties {
	}
	export function CreateDeleteCustomMetadataResponseFormGroup() {
		return new FormGroup<DeleteCustomMetadataResponseFormProperties>({
		});

	}

	export interface InvalidOperationException {
	}
	export interface InvalidOperationExceptionFormProperties {
	}
	export function CreateInvalidOperationExceptionFormGroup() {
		return new FormGroup<InvalidOperationExceptionFormProperties>({
		});

	}

	export interface DeleteLabelsResponse {
	}
	export interface DeleteLabelsResponseFormProperties {
	}
	export function CreateDeleteLabelsResponseFormGroup() {
		return new FormGroup<DeleteLabelsResponseFormProperties>({
		});

	}

	export interface DescribeActivitiesResponse {
		UserActivities?: Array<Activity>;
		Marker?: string;
	}
	export interface DescribeActivitiesResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeActivitiesResponseFormGroup() {
		return new FormGroup<DescribeActivitiesResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the activity information. */
	export interface Activity {
		Type?: ActivityType;
		TimeStamp?: Date;
		IsIndirectActivity?: boolean | null;
		OrganizationId?: string;
		Initiator?: UserMetadata;
		Participants?: Participants;
		ResourceMetadata?: ResourceMetadata;
		OriginalParent?: ResourceMetadata;
		CommentMetadata?: CommentMetadata;
	}

	/** Describes the activity information. */
	export interface ActivityFormProperties {
		Type: FormControl<ActivityType | null | undefined>,
		TimeStamp: FormControl<Date | null | undefined>,
		IsIndirectActivity: FormControl<boolean | null | undefined>,
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateActivityFormGroup() {
		return new FormGroup<ActivityFormProperties>({
			Type: new FormControl<ActivityType | null | undefined>(undefined),
			TimeStamp: new FormControl<Date | null | undefined>(undefined),
			IsIndirectActivity: new FormControl<boolean | null | undefined>(undefined),
			OrganizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ActivityType { DOCUMENT_CHECKED_IN = 'DOCUMENT_CHECKED_IN', DOCUMENT_CHECKED_OUT = 'DOCUMENT_CHECKED_OUT', DOCUMENT_RENAMED = 'DOCUMENT_RENAMED', DOCUMENT_VERSION_UPLOADED = 'DOCUMENT_VERSION_UPLOADED', DOCUMENT_VERSION_DELETED = 'DOCUMENT_VERSION_DELETED', DOCUMENT_VERSION_VIEWED = 'DOCUMENT_VERSION_VIEWED', DOCUMENT_VERSION_DOWNLOADED = 'DOCUMENT_VERSION_DOWNLOADED', DOCUMENT_RECYCLED = 'DOCUMENT_RECYCLED', DOCUMENT_RESTORED = 'DOCUMENT_RESTORED', DOCUMENT_REVERTED = 'DOCUMENT_REVERTED', DOCUMENT_SHARED = 'DOCUMENT_SHARED', DOCUMENT_UNSHARED = 'DOCUMENT_UNSHARED', DOCUMENT_SHARE_PERMISSION_CHANGED = 'DOCUMENT_SHARE_PERMISSION_CHANGED', DOCUMENT_SHAREABLE_LINK_CREATED = 'DOCUMENT_SHAREABLE_LINK_CREATED', DOCUMENT_SHAREABLE_LINK_REMOVED = 'DOCUMENT_SHAREABLE_LINK_REMOVED', DOCUMENT_SHAREABLE_LINK_PERMISSION_CHANGED = 'DOCUMENT_SHAREABLE_LINK_PERMISSION_CHANGED', DOCUMENT_MOVED = 'DOCUMENT_MOVED', DOCUMENT_COMMENT_ADDED = 'DOCUMENT_COMMENT_ADDED', DOCUMENT_COMMENT_DELETED = 'DOCUMENT_COMMENT_DELETED', DOCUMENT_ANNOTATION_ADDED = 'DOCUMENT_ANNOTATION_ADDED', DOCUMENT_ANNOTATION_DELETED = 'DOCUMENT_ANNOTATION_DELETED', FOLDER_CREATED = 'FOLDER_CREATED', FOLDER_DELETED = 'FOLDER_DELETED', FOLDER_RENAMED = 'FOLDER_RENAMED', FOLDER_RECYCLED = 'FOLDER_RECYCLED', FOLDER_RESTORED = 'FOLDER_RESTORED', FOLDER_SHARED = 'FOLDER_SHARED', FOLDER_UNSHARED = 'FOLDER_UNSHARED', FOLDER_SHARE_PERMISSION_CHANGED = 'FOLDER_SHARE_PERMISSION_CHANGED', FOLDER_SHAREABLE_LINK_CREATED = 'FOLDER_SHAREABLE_LINK_CREATED', FOLDER_SHAREABLE_LINK_REMOVED = 'FOLDER_SHAREABLE_LINK_REMOVED', FOLDER_SHAREABLE_LINK_PERMISSION_CHANGED = 'FOLDER_SHAREABLE_LINK_PERMISSION_CHANGED', FOLDER_MOVED = 'FOLDER_MOVED' }


	/** Describes the metadata of the user. */
	export interface UserMetadata {
		Id?: string;
		Username?: string;
		GivenName?: string;
		Surname?: string;
		EmailAddress?: string;
	}

	/** Describes the metadata of the user. */
	export interface UserMetadataFormProperties {
		Id: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		GivenName: FormControl<string | null | undefined>,
		Surname: FormControl<string | null | undefined>,
		EmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataFormGroup() {
		return new FormGroup<UserMetadataFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			GivenName: new FormControl<string | null | undefined>(undefined),
			Surname: new FormControl<string | null | undefined>(undefined),
			EmailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the users or user groups. */
	export interface Participants {
		Users?: Array<UserMetadata>;
		Groups?: Array<GroupMetadata>;
	}

	/** Describes the users or user groups. */
	export interface ParticipantsFormProperties {
	}
	export function CreateParticipantsFormGroup() {
		return new FormGroup<ParticipantsFormProperties>({
		});

	}


	/** Describes the metadata of a user group. */
	export interface GroupMetadata {
		Id?: string;
		Name?: string;
	}

	/** Describes the metadata of a user group. */
	export interface GroupMetadataFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGroupMetadataFormGroup() {
		return new FormGroup<GroupMetadataFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the metadata of a resource. */
	export interface ResourceMetadata {
		Type?: ResourceType;
		Name?: string;
		OriginalName?: string;
		Id?: string;
		VersionId?: string;
		Owner?: UserMetadata;
		ParentId?: string;
	}

	/** Describes the metadata of a resource. */
	export interface ResourceMetadataFormProperties {
		Type: FormControl<ResourceType | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OriginalName: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
		ParentId: FormControl<string | null | undefined>,
	}
	export function CreateResourceMetadataFormGroup() {
		return new FormGroup<ResourceMetadataFormProperties>({
			Type: new FormControl<ResourceType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OriginalName: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
			ParentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceType { FOLDER = 'FOLDER', DOCUMENT = 'DOCUMENT' }


	/** Describes the metadata of a comment. */
	export interface CommentMetadata {
		CommentId?: string;
		Contributor?: User;
		CreatedTimestamp?: Date;
		CommentStatus?: CommentStatusType;
		RecipientId?: string;
		ContributorId?: string;
	}

	/** Describes the metadata of a comment. */
	export interface CommentMetadataFormProperties {
		CommentId: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		CommentStatus: FormControl<CommentStatusType | null | undefined>,
		RecipientId: FormControl<string | null | undefined>,
		ContributorId: FormControl<string | null | undefined>,
	}
	export function CreateCommentMetadataFormGroup() {
		return new FormGroup<CommentMetadataFormProperties>({
			CommentId: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			CommentStatus: new FormControl<CommentStatusType | null | undefined>(undefined),
			RecipientId: new FormControl<string | null | undefined>(undefined),
			ContributorId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeCommentsResponse {
		Comments?: Array<Comment>;
		Marker?: string;
	}
	export interface DescribeCommentsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCommentsResponseFormGroup() {
		return new FormGroup<DescribeCommentsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDocumentVersionsResponse {
		DocumentVersions?: Array<DocumentVersionMetadata>;
		Marker?: string;
	}
	export interface DescribeDocumentVersionsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDocumentVersionsResponseFormGroup() {
		return new FormGroup<DescribeDocumentVersionsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a version of a document. */
	export interface DocumentVersionMetadata {
		Id?: string;
		Name?: string;
		ContentType?: string;
		Size?: number | null;
		Signature?: string;
		Status?: DocumentStatusType;
		CreatedTimestamp?: Date;
		ModifiedTimestamp?: Date;
		ContentCreatedTimestamp?: Date;
		ContentModifiedTimestamp?: Date;
		CreatorId?: string;
		Thumbnail?: DocumentThumbnailUrlMap;
		Source?: DocumentSourceUrlMap;
	}

	/** Describes a version of a document. */
	export interface DocumentVersionMetadataFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ContentType: FormControl<string | null | undefined>,
		Size: FormControl<number | null | undefined>,
		Signature: FormControl<string | null | undefined>,
		Status: FormControl<DocumentStatusType | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		ModifiedTimestamp: FormControl<Date | null | undefined>,
		ContentCreatedTimestamp: FormControl<Date | null | undefined>,
		ContentModifiedTimestamp: FormControl<Date | null | undefined>,
		CreatorId: FormControl<string | null | undefined>,
	}
	export function CreateDocumentVersionMetadataFormGroup() {
		return new FormGroup<DocumentVersionMetadataFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
			Signature: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DocumentStatusType | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ContentCreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ContentModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			CreatorId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DocumentStatusType { INITIALIZED = 'INITIALIZED', ACTIVE = 'ACTIVE' }

	export interface DocumentThumbnailUrlMap {
	}
	export interface DocumentThumbnailUrlMapFormProperties {
	}
	export function CreateDocumentThumbnailUrlMapFormGroup() {
		return new FormGroup<DocumentThumbnailUrlMapFormProperties>({
		});

	}

	export interface DocumentSourceUrlMap {
	}
	export interface DocumentSourceUrlMapFormProperties {
	}
	export function CreateDocumentSourceUrlMapFormGroup() {
		return new FormGroup<DocumentSourceUrlMapFormProperties>({
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

	export interface DescribeFolderContentsResponse {
		Folders?: Array<FolderMetadata>;
		Documents?: Array<DocumentMetadata>;
		Marker?: string;
	}
	export interface DescribeFolderContentsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFolderContentsResponseFormGroup() {
		return new FormGroup<DescribeFolderContentsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the document. */
	export interface DocumentMetadata {
		Id?: string;
		CreatorId?: string;
		ParentFolderId?: string;
		CreatedTimestamp?: Date;
		ModifiedTimestamp?: Date;
		LatestVersionMetadata?: DocumentVersionMetadata;
		ResourceState?: ResourceStateType;
		Labels?: Array<string>;
	}

	/** Describes the document. */
	export interface DocumentMetadataFormProperties {
		Id: FormControl<string | null | undefined>,
		CreatorId: FormControl<string | null | undefined>,
		ParentFolderId: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		ModifiedTimestamp: FormControl<Date | null | undefined>,
		ResourceState: FormControl<ResourceStateType | null | undefined>,
	}
	export function CreateDocumentMetadataFormGroup() {
		return new FormGroup<DocumentMetadataFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			CreatorId: new FormControl<string | null | undefined>(undefined),
			ParentFolderId: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ResourceState: new FormControl<ResourceStateType | null | undefined>(undefined),
		});

	}

	export interface DescribeGroupsResponse {
		Groups?: Array<GroupMetadata>;
		Marker?: string;
	}
	export interface DescribeGroupsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGroupsResponseFormGroup() {
		return new FormGroup<DescribeGroupsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeNotificationSubscriptionsResponse {
		Subscriptions?: Array<Subscription>;
		Marker?: string;
	}
	export interface DescribeNotificationSubscriptionsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeNotificationSubscriptionsResponseFormGroup() {
		return new FormGroup<DescribeNotificationSubscriptionsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeResourcePermissionsResponse {
		Principals?: Array<Principal>;
		Marker?: string;
	}
	export interface DescribeResourcePermissionsResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResourcePermissionsResponseFormGroup() {
		return new FormGroup<DescribeResourcePermissionsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a resource. */
	export interface Principal {
		Id?: string;
		Type?: PrincipalType;
		Roles?: Array<PermissionInfo>;
	}

	/** Describes a resource. */
	export interface PrincipalFormProperties {
		Id: FormControl<string | null | undefined>,
		Type: FormControl<PrincipalType | null | undefined>,
	}
	export function CreatePrincipalFormGroup() {
		return new FormGroup<PrincipalFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<PrincipalType | null | undefined>(undefined),
		});

	}


	/** Describes the permissions. */
	export interface PermissionInfo {
		Role?: RoleType;
		Type?: RolePermissionType;
	}

	/** Describes the permissions. */
	export interface PermissionInfoFormProperties {
		Role: FormControl<RoleType | null | undefined>,
		Type: FormControl<RolePermissionType | null | undefined>,
	}
	export function CreatePermissionInfoFormGroup() {
		return new FormGroup<PermissionInfoFormProperties>({
			Role: new FormControl<RoleType | null | undefined>(undefined),
			Type: new FormControl<RolePermissionType | null | undefined>(undefined),
		});

	}

	export enum RolePermissionType { DIRECT = 'DIRECT', INHERITED = 'INHERITED' }

	export interface DescribeRootFoldersResponse {
		Folders?: Array<FolderMetadata>;
		Marker?: string;
	}
	export interface DescribeRootFoldersResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRootFoldersResponseFormGroup() {
		return new FormGroup<DescribeRootFoldersResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeUsersResponse {
		Users?: Array<User>;
		TotalNumberOfUsers?: number | null;
		Marker?: string;
	}
	export interface DescribeUsersResponseFormProperties {
		TotalNumberOfUsers: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUsersResponseFormGroup() {
		return new FormGroup<DescribeUsersResponseFormProperties>({
			TotalNumberOfUsers: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RequestedEntityTooLargeException {
	}
	export interface RequestedEntityTooLargeExceptionFormProperties {
	}
	export function CreateRequestedEntityTooLargeExceptionFormGroup() {
		return new FormGroup<RequestedEntityTooLargeExceptionFormProperties>({
		});

	}

	export interface GetCurrentUserResponse {
		User?: User;
	}
	export interface GetCurrentUserResponseFormProperties {
	}
	export function CreateGetCurrentUserResponseFormGroup() {
		return new FormGroup<GetCurrentUserResponseFormProperties>({
		});

	}

	export interface GetDocumentResponse {
		Metadata?: DocumentMetadata;
		CustomMetadata?: CustomMetadataMap;
	}
	export interface GetDocumentResponseFormProperties {
	}
	export function CreateGetDocumentResponseFormGroup() {
		return new FormGroup<GetDocumentResponseFormProperties>({
		});

	}

	export interface CustomMetadataMap {
	}
	export interface CustomMetadataMapFormProperties {
	}
	export function CreateCustomMetadataMapFormGroup() {
		return new FormGroup<CustomMetadataMapFormProperties>({
		});

	}

	export interface GetDocumentPathResponse {
		Path?: ResourcePath;
	}
	export interface GetDocumentPathResponseFormProperties {
	}
	export function CreateGetDocumentPathResponseFormGroup() {
		return new FormGroup<GetDocumentPathResponseFormProperties>({
		});

	}


	/** Describes the path information of a resource. */
	export interface ResourcePath {
		Components?: Array<ResourcePathComponent>;
	}

	/** Describes the path information of a resource. */
	export interface ResourcePathFormProperties {
	}
	export function CreateResourcePathFormGroup() {
		return new FormGroup<ResourcePathFormProperties>({
		});

	}


	/** Describes the resource path. */
	export interface ResourcePathComponent {
		Id?: string;
		Name?: string;
	}

	/** Describes the resource path. */
	export interface ResourcePathComponentFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateResourcePathComponentFormGroup() {
		return new FormGroup<ResourcePathComponentFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDocumentVersionResponse {
		Metadata?: DocumentVersionMetadata;
		CustomMetadata?: CustomMetadataMap;
	}
	export interface GetDocumentVersionResponseFormProperties {
	}
	export function CreateGetDocumentVersionResponseFormGroup() {
		return new FormGroup<GetDocumentVersionResponseFormProperties>({
		});

	}

	export interface GetFolderResponse {
		Metadata?: FolderMetadata;
		CustomMetadata?: CustomMetadataMap;
	}
	export interface GetFolderResponseFormProperties {
	}
	export function CreateGetFolderResponseFormGroup() {
		return new FormGroup<GetFolderResponseFormProperties>({
		});

	}

	export interface GetFolderPathResponse {
		Path?: ResourcePath;
	}
	export interface GetFolderPathResponseFormProperties {
	}
	export function CreateGetFolderPathResponseFormGroup() {
		return new FormGroup<GetFolderPathResponseFormProperties>({
		});

	}

	export interface GetResourcesResponse {
		Folders?: Array<FolderMetadata>;
		Documents?: Array<DocumentMetadata>;
		Marker?: string;
	}
	export interface GetResourcesResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcesResponseFormGroup() {
		return new FormGroup<GetResourcesResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InitiateDocumentVersionUploadResponse {
		Metadata?: DocumentMetadata;
		UploadMetadata?: UploadMetadata;
	}
	export interface InitiateDocumentVersionUploadResponseFormProperties {
	}
	export function CreateInitiateDocumentVersionUploadResponseFormGroup() {
		return new FormGroup<InitiateDocumentVersionUploadResponseFormProperties>({
		});

	}


	/** Describes the upload. */
	export interface UploadMetadata {
		UploadUrl?: string;
		SignedHeaders?: SignedHeaderMap;
	}

	/** Describes the upload. */
	export interface UploadMetadataFormProperties {
		UploadUrl: FormControl<string | null | undefined>,
	}
	export function CreateUploadMetadataFormGroup() {
		return new FormGroup<UploadMetadataFormProperties>({
			UploadUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SignedHeaderMap {
	}
	export interface SignedHeaderMapFormProperties {
	}
	export function CreateSignedHeaderMapFormGroup() {
		return new FormGroup<SignedHeaderMapFormProperties>({
		});

	}

	export interface StorageLimitExceededException {
	}
	export interface StorageLimitExceededExceptionFormProperties {
	}
	export function CreateStorageLimitExceededExceptionFormGroup() {
		return new FormGroup<StorageLimitExceededExceptionFormProperties>({
		});

	}

	export interface StorageLimitWillExceedException {
	}
	export interface StorageLimitWillExceedExceptionFormProperties {
	}
	export function CreateStorageLimitWillExceedExceptionFormGroup() {
		return new FormGroup<StorageLimitWillExceedExceptionFormProperties>({
		});

	}

	export interface DraftUploadOutOfSyncException {
	}
	export interface DraftUploadOutOfSyncExceptionFormProperties {
	}
	export function CreateDraftUploadOutOfSyncExceptionFormGroup() {
		return new FormGroup<DraftUploadOutOfSyncExceptionFormProperties>({
		});

	}

	export interface ResourceAlreadyCheckedOutException {
	}
	export interface ResourceAlreadyCheckedOutExceptionFormProperties {
	}
	export function CreateResourceAlreadyCheckedOutExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyCheckedOutExceptionFormProperties>({
		});

	}

	export interface SearchResourcesResponse {
		Items?: Array<ResponseItem>;
		Marker?: string;
	}
	export interface SearchResourcesResponseFormProperties {
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateSearchResourcesResponseFormGroup() {
		return new FormGroup<SearchResourcesResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of Documents, Folders, Comments, and Document Versions matching the query. */
	export interface ResponseItem {
		ResourceType?: ResponseItemType;
		WebUrl?: string;
		DocumentMetadata?: DocumentMetadata;
		FolderMetadata?: FolderMetadata;
		CommentMetadata?: CommentMetadata;
		DocumentVersionMetadata?: DocumentVersionMetadata;
	}

	/** List of Documents, Folders, Comments, and Document Versions matching the query. */
	export interface ResponseItemFormProperties {
		ResourceType: FormControl<ResponseItemType | null | undefined>,
		WebUrl: FormControl<string | null | undefined>,
	}
	export function CreateResponseItemFormGroup() {
		return new FormGroup<ResponseItemFormProperties>({
			ResourceType: new FormControl<ResponseItemType | null | undefined>(undefined),
			WebUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResponseItemType { DOCUMENT = 'DOCUMENT', FOLDER = 'FOLDER', COMMENT = 'COMMENT', DOCUMENT_VERSION = 'DOCUMENT_VERSION' }

	export enum SearchQueryScopeType { NAME = 'NAME', CONTENT = 'CONTENT' }

	export enum AdditionalResponseFieldType { WEBURL = 'WEBURL' }

	export enum LanguageCodeType { AR = 'AR', BG = 'BG', BN = 'BN', DA = 'DA', DE = 'DE', CS = 'CS', EL = 'EL', EN = 'EN', ES = 'ES', FA = 'FA', FI = 'FI', FR = 'FR', HI = 'HI', HU = 'HU', ID = 'ID', IT = 'IT', JA = 'JA', KO = 'KO', LT = 'LT', LV = 'LV', NL = 'NL', NO = 'NO', PT = 'PT', RO = 'RO', RU = 'RU', SV = 'SV', SW = 'SW', TH = 'TH', TR = 'TR', ZH = 'ZH', DEFAULT = 'DEFAULT' }

	export enum ContentCategoryType { IMAGE = 'IMAGE', DOCUMENT = 'DOCUMENT', PDF = 'PDF', SPREADSHEET = 'SPREADSHEET', PRESENTATION = 'PRESENTATION', AUDIO = 'AUDIO', VIDEO = 'VIDEO', SOURCE_CODE = 'SOURCE_CODE', OTHER = 'OTHER' }

	export enum SearchResourceType { FOLDER = 'FOLDER', DOCUMENT = 'DOCUMENT', COMMENT = 'COMMENT', DOCUMENT_VERSION = 'DOCUMENT_VERSION' }


	/** Filter based on UserIds or GroupIds. */
	export interface SearchPrincipalType {

		/** Required */
		Id: string;
		Roles?: Array<PrincipalRoleType>;
	}

	/** Filter based on UserIds or GroupIds. */
	export interface SearchPrincipalTypeFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateSearchPrincipalTypeFormGroup() {
		return new FormGroup<SearchPrincipalTypeFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PrincipalRoleType { VIEWER = 'VIEWER', CONTRIBUTOR = 'CONTRIBUTOR', OWNER = 'OWNER', COOWNER = 'COOWNER' }

	export enum SearchCollectionType { OWNED = 'OWNED', SHARED_WITH_ME = 'SHARED_WITH_ME' }


	/** Filter based on size (in bytes). */
	export interface LongRangeType {
		StartValue?: number | null;
		EndValue?: number | null;
	}

	/** Filter based on size (in bytes). */
	export interface LongRangeTypeFormProperties {
		StartValue: FormControl<number | null | undefined>,
		EndValue: FormControl<number | null | undefined>,
	}
	export function CreateLongRangeTypeFormGroup() {
		return new FormGroup<LongRangeTypeFormProperties>({
			StartValue: new FormControl<number | null | undefined>(undefined),
			EndValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Filters results based on timestamp range (in epochs). */
	export interface DateRangeType {
		StartValue?: Date;
		EndValue?: Date;
	}

	/** Filters results based on timestamp range (in epochs). */
	export interface DateRangeTypeFormProperties {
		StartValue: FormControl<Date | null | undefined>,
		EndValue: FormControl<Date | null | undefined>,
	}
	export function CreateDateRangeTypeFormGroup() {
		return new FormGroup<DateRangeTypeFormProperties>({
			StartValue: new FormControl<Date | null | undefined>(undefined),
			EndValue: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The result of the sort operation. */
	export interface SearchSortResult {
		Field?: OrderByFieldType;
		Order?: SortOrder;
	}

	/** The result of the sort operation. */
	export interface SearchSortResultFormProperties {
		Field: FormControl<OrderByFieldType | null | undefined>,
		Order: FormControl<SortOrder | null | undefined>,
	}
	export function CreateSearchSortResultFormGroup() {
		return new FormGroup<SearchSortResultFormProperties>({
			Field: new FormControl<OrderByFieldType | null | undefined>(undefined),
			Order: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export enum OrderByFieldType { RELEVANCE = 'RELEVANCE', NAME = 'NAME', SIZE = 'SIZE', CREATED_TIMESTAMP = 'CREATED_TIMESTAMP', MODIFIED_TIMESTAMP = 'MODIFIED_TIMESTAMP' }

	export enum SortOrder { ASC = 'ASC', DESC = 'DESC' }

	export interface UpdateUserResponse {
		User?: User;
	}
	export interface UpdateUserResponseFormProperties {
	}
	export function CreateUpdateUserResponseFormGroup() {
		return new FormGroup<UpdateUserResponseFormProperties>({
		});

	}

	export interface IllegalUserStateException {
	}
	export interface IllegalUserStateExceptionFormProperties {
	}
	export function CreateIllegalUserStateExceptionFormGroup() {
		return new FormGroup<IllegalUserStateExceptionFormProperties>({
		});

	}

	export interface DeactivatingLastSystemUserException {
	}
	export interface DeactivatingLastSystemUserExceptionFormProperties {
	}
	export function CreateDeactivatingLastSystemUserExceptionFormGroup() {
		return new FormGroup<DeactivatingLastSystemUserExceptionFormProperties>({
		});

	}

	export interface AbortDocumentVersionUploadRequest {
	}
	export interface AbortDocumentVersionUploadRequestFormProperties {
	}
	export function CreateAbortDocumentVersionUploadRequestFormGroup() {
		return new FormGroup<AbortDocumentVersionUploadRequestFormProperties>({
		});

	}

	export interface ActivateUserRequest {
	}
	export interface ActivateUserRequestFormProperties {
	}
	export function CreateActivateUserRequestFormGroup() {
		return new FormGroup<ActivateUserRequestFormProperties>({
		});

	}


	/** Set of options which defines notification preferences of given action. */
	export interface NotificationOptions {
		SendEmail?: boolean | null;
		EmailMessage?: string;
	}

	/** Set of options which defines notification preferences of given action. */
	export interface NotificationOptionsFormProperties {
		SendEmail: FormControl<boolean | null | undefined>,
		EmailMessage: FormControl<string | null | undefined>,
	}
	export function CreateNotificationOptionsFormGroup() {
		return new FormGroup<NotificationOptionsFormProperties>({
			SendEmail: new FormControl<boolean | null | undefined>(undefined),
			EmailMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddResourcePermissionsRequest {

		/** Required */
		Principals: Array<SharePrincipal>;
		NotificationOptions?: NotificationOptions;
	}
	export interface AddResourcePermissionsRequestFormProperties {
	}
	export function CreateAddResourcePermissionsRequestFormGroup() {
		return new FormGroup<AddResourcePermissionsRequestFormProperties>({
		});

	}

	export enum BooleanEnumType { TRUE = 'TRUE', FALSE = 'FALSE' }

	export interface CreateCommentRequest {
		ParentId?: string;
		ThreadId?: string;

		/** Required */
		Text: string;
		Visibility?: CommentVisibilityType;
		NotifyCollaborators?: boolean | null;
	}
	export interface CreateCommentRequestFormProperties {
		ParentId: FormControl<string | null | undefined>,
		ThreadId: FormControl<string | null | undefined>,

		/** Required */
		Text: FormControl<string | null | undefined>,
		Visibility: FormControl<CommentVisibilityType | null | undefined>,
		NotifyCollaborators: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateCommentRequestFormGroup() {
		return new FormGroup<CreateCommentRequestFormProperties>({
			ParentId: new FormControl<string | null | undefined>(undefined),
			ThreadId: new FormControl<string | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Visibility: new FormControl<CommentVisibilityType | null | undefined>(undefined),
			NotifyCollaborators: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateCustomMetadataRequest {

		/** Required */
		CustomMetadata: CustomMetadataMap;
	}
	export interface CreateCustomMetadataRequestFormProperties {
	}
	export function CreateCreateCustomMetadataRequestFormGroup() {
		return new FormGroup<CreateCustomMetadataRequestFormProperties>({
		});

	}

	export interface CreateFolderRequest {
		Name?: string;

		/** Required */
		ParentFolderId: string;
	}
	export interface CreateFolderRequestFormProperties {
		Name: FormControl<string | null | undefined>,

		/** Required */
		ParentFolderId: FormControl<string | null | undefined>,
	}
	export function CreateCreateFolderRequestFormGroup() {
		return new FormGroup<CreateFolderRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ParentFolderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateLabelsRequest {

		/** Required */
		Labels: Array<string>;
	}
	export interface CreateLabelsRequestFormProperties {
	}
	export function CreateCreateLabelsRequestFormGroup() {
		return new FormGroup<CreateLabelsRequestFormProperties>({
		});

	}

	export enum SubscriptionType { ALL = 'ALL' }

	export interface CreateNotificationSubscriptionRequest {

		/** Required */
		Endpoint: string;

		/** Required */
		Protocol: SubscriptionProtocolType;

		/** Required */
		SubscriptionType: SubscriptionType;
	}
	export interface CreateNotificationSubscriptionRequestFormProperties {

		/** Required */
		Endpoint: FormControl<string | null | undefined>,

		/** Required */
		Protocol: FormControl<SubscriptionProtocolType | null | undefined>,

		/** Required */
		SubscriptionType: FormControl<SubscriptionType | null | undefined>,
	}
	export function CreateCreateNotificationSubscriptionRequestFormGroup() {
		return new FormGroup<CreateNotificationSubscriptionRequestFormProperties>({
			Endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Protocol: new FormControl<SubscriptionProtocolType | null | undefined>(undefined, [Validators.required]),
			SubscriptionType: new FormControl<SubscriptionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUserRequest {
		OrganizationId?: string;

		/** Required */
		Username: string;
		EmailAddress?: string;

		/** Required */
		GivenName: string;

		/** Required */
		Surname: string;

		/** Required */
		Password: string;
		TimeZoneId?: string;
		StorageRule?: StorageRuleType;
	}
	export interface CreateUserRequestFormProperties {
		OrganizationId: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
		EmailAddress: FormControl<string | null | undefined>,

		/** Required */
		GivenName: FormControl<string | null | undefined>,

		/** Required */
		Surname: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
		TimeZoneId: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			GivenName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Surname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TimeZoneId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeactivateUserRequest {
	}
	export interface DeactivateUserRequestFormProperties {
	}
	export function CreateDeactivateUserRequestFormGroup() {
		return new FormGroup<DeactivateUserRequestFormProperties>({
		});

	}

	export interface DeleteCommentRequest {
	}
	export interface DeleteCommentRequestFormProperties {
	}
	export function CreateDeleteCommentRequestFormGroup() {
		return new FormGroup<DeleteCommentRequestFormProperties>({
		});

	}

	export interface DeleteCustomMetadataRequest {
	}
	export interface DeleteCustomMetadataRequestFormProperties {
	}
	export function CreateDeleteCustomMetadataRequestFormGroup() {
		return new FormGroup<DeleteCustomMetadataRequestFormProperties>({
		});

	}

	export interface DeleteDocumentRequest {
	}
	export interface DeleteDocumentRequestFormProperties {
	}
	export function CreateDeleteDocumentRequestFormGroup() {
		return new FormGroup<DeleteDocumentRequestFormProperties>({
		});

	}

	export interface DeleteDocumentVersionRequest {
	}
	export interface DeleteDocumentVersionRequestFormProperties {
	}
	export function CreateDeleteDocumentVersionRequestFormGroup() {
		return new FormGroup<DeleteDocumentVersionRequestFormProperties>({
		});

	}

	export interface DeleteFolderContentsRequest {
	}
	export interface DeleteFolderContentsRequestFormProperties {
	}
	export function CreateDeleteFolderContentsRequestFormGroup() {
		return new FormGroup<DeleteFolderContentsRequestFormProperties>({
		});

	}

	export interface DeleteFolderRequest {
	}
	export interface DeleteFolderRequestFormProperties {
	}
	export function CreateDeleteFolderRequestFormGroup() {
		return new FormGroup<DeleteFolderRequestFormProperties>({
		});

	}

	export interface DeleteLabelsRequest {
	}
	export interface DeleteLabelsRequestFormProperties {
	}
	export function CreateDeleteLabelsRequestFormGroup() {
		return new FormGroup<DeleteLabelsRequestFormProperties>({
		});

	}

	export interface DeleteNotificationSubscriptionRequest {
	}
	export interface DeleteNotificationSubscriptionRequestFormProperties {
	}
	export function CreateDeleteNotificationSubscriptionRequestFormGroup() {
		return new FormGroup<DeleteNotificationSubscriptionRequestFormProperties>({
		});

	}

	export interface DeleteUserRequest {
	}
	export interface DeleteUserRequestFormProperties {
	}
	export function CreateDeleteUserRequestFormGroup() {
		return new FormGroup<DeleteUserRequestFormProperties>({
		});

	}

	export interface DescribeActivitiesRequest {
	}
	export interface DescribeActivitiesRequestFormProperties {
	}
	export function CreateDescribeActivitiesRequestFormGroup() {
		return new FormGroup<DescribeActivitiesRequestFormProperties>({
		});

	}

	export interface DescribeCommentsRequest {
	}
	export interface DescribeCommentsRequestFormProperties {
	}
	export function CreateDescribeCommentsRequestFormGroup() {
		return new FormGroup<DescribeCommentsRequestFormProperties>({
		});

	}

	export interface DescribeDocumentVersionsRequest {
	}
	export interface DescribeDocumentVersionsRequestFormProperties {
	}
	export function CreateDescribeDocumentVersionsRequestFormGroup() {
		return new FormGroup<DescribeDocumentVersionsRequestFormProperties>({
		});

	}

	export enum ResourceSortType { DATE = 'DATE', NAME = 'NAME' }

	export enum OrderType { ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }

	export enum FolderContentType { ALL = 'ALL', DOCUMENT = 'DOCUMENT', FOLDER = 'FOLDER' }

	export interface DescribeFolderContentsRequest {
	}
	export interface DescribeFolderContentsRequestFormProperties {
	}
	export function CreateDescribeFolderContentsRequestFormGroup() {
		return new FormGroup<DescribeFolderContentsRequestFormProperties>({
		});

	}

	export interface DescribeGroupsRequest {
	}
	export interface DescribeGroupsRequestFormProperties {
	}
	export function CreateDescribeGroupsRequestFormGroup() {
		return new FormGroup<DescribeGroupsRequestFormProperties>({
		});

	}

	export interface DescribeNotificationSubscriptionsRequest {
	}
	export interface DescribeNotificationSubscriptionsRequestFormProperties {
	}
	export function CreateDescribeNotificationSubscriptionsRequestFormGroup() {
		return new FormGroup<DescribeNotificationSubscriptionsRequestFormProperties>({
		});

	}

	export interface DescribeResourcePermissionsRequest {
	}
	export interface DescribeResourcePermissionsRequestFormProperties {
	}
	export function CreateDescribeResourcePermissionsRequestFormGroup() {
		return new FormGroup<DescribeResourcePermissionsRequestFormProperties>({
		});

	}

	export interface DescribeRootFoldersRequest {
	}
	export interface DescribeRootFoldersRequestFormProperties {
	}
	export function CreateDescribeRootFoldersRequestFormGroup() {
		return new FormGroup<DescribeRootFoldersRequestFormProperties>({
		});

	}

	export enum UserFilterType { ALL = 'ALL', ACTIVE_PENDING = 'ACTIVE_PENDING' }

	export enum UserSortType { USER_NAME = 'USER_NAME', FULL_NAME = 'FULL_NAME', STORAGE_LIMIT = 'STORAGE_LIMIT', USER_STATUS = 'USER_STATUS', STORAGE_USED = 'STORAGE_USED' }

	export interface DescribeUsersRequest {
	}
	export interface DescribeUsersRequestFormProperties {
	}
	export function CreateDescribeUsersRequestFormGroup() {
		return new FormGroup<DescribeUsersRequestFormProperties>({
		});

	}

	export enum DocumentSourceType { ORIGINAL = 'ORIGINAL', WITH_COMMENTS = 'WITH_COMMENTS' }

	export enum DocumentThumbnailType { SMALL = 'SMALL', SMALL_HQ = 'SMALL_HQ', LARGE = 'LARGE' }

	export enum DocumentVersionStatus { ACTIVE = 'ACTIVE' }


	/** Filters results based on entity metadata. */
	export interface Filters {
		TextLocales?: Array<LanguageCodeType>;
		ContentCategories?: Array<ContentCategoryType>;
		ResourceTypes?: Array<SearchResourceType>;
		Labels?: Array<string>;
		Principals?: Array<SearchPrincipalType>;
		AncestorIds?: Array<string>;
		SearchCollectionTypes?: Array<SearchCollectionType>;
		SizeRange?: LongRangeType;
		CreatedRange?: DateRangeType;
		ModifiedRange?: DateRangeType;
	}

	/** Filters results based on entity metadata. */
	export interface FiltersFormProperties {
	}
	export function CreateFiltersFormGroup() {
		return new FormGroup<FiltersFormProperties>({
		});

	}

	export interface GetCurrentUserRequest {
	}
	export interface GetCurrentUserRequestFormProperties {
	}
	export function CreateGetCurrentUserRequestFormGroup() {
		return new FormGroup<GetCurrentUserRequestFormProperties>({
		});

	}

	export interface GetDocumentPathRequest {
	}
	export interface GetDocumentPathRequestFormProperties {
	}
	export function CreateGetDocumentPathRequestFormGroup() {
		return new FormGroup<GetDocumentPathRequestFormProperties>({
		});

	}

	export interface GetDocumentRequest {
	}
	export interface GetDocumentRequestFormProperties {
	}
	export function CreateGetDocumentRequestFormGroup() {
		return new FormGroup<GetDocumentRequestFormProperties>({
		});

	}

	export interface GetDocumentVersionRequest {
	}
	export interface GetDocumentVersionRequestFormProperties {
	}
	export function CreateGetDocumentVersionRequestFormGroup() {
		return new FormGroup<GetDocumentVersionRequestFormProperties>({
		});

	}

	export interface GetFolderPathRequest {
	}
	export interface GetFolderPathRequestFormProperties {
	}
	export function CreateGetFolderPathRequestFormGroup() {
		return new FormGroup<GetFolderPathRequestFormProperties>({
		});

	}

	export interface GetFolderRequest {
	}
	export interface GetFolderRequestFormProperties {
	}
	export function CreateGetFolderRequestFormGroup() {
		return new FormGroup<GetFolderRequestFormProperties>({
		});

	}

	export enum ResourceCollectionType { SHARED_WITH_ME = 'SHARED_WITH_ME' }

	export interface GetResourcesRequest {
	}
	export interface GetResourcesRequestFormProperties {
	}
	export function CreateGetResourcesRequestFormGroup() {
		return new FormGroup<GetResourcesRequestFormProperties>({
		});

	}

	export interface InitiateDocumentVersionUploadRequest {
		Id?: string;
		Name?: string;
		ContentCreatedTimestamp?: Date;
		ContentModifiedTimestamp?: Date;
		ContentType?: string;
		DocumentSizeInBytes?: number | null;
		ParentFolderId?: string;
	}
	export interface InitiateDocumentVersionUploadRequestFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ContentCreatedTimestamp: FormControl<Date | null | undefined>,
		ContentModifiedTimestamp: FormControl<Date | null | undefined>,
		ContentType: FormControl<string | null | undefined>,
		DocumentSizeInBytes: FormControl<number | null | undefined>,
		ParentFolderId: FormControl<string | null | undefined>,
	}
	export function CreateInitiateDocumentVersionUploadRequestFormGroup() {
		return new FormGroup<InitiateDocumentVersionUploadRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ContentCreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ContentModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined),
			DocumentSizeInBytes: new FormControl<number | null | undefined>(undefined),
			ParentFolderId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveAllResourcePermissionsRequest {
	}
	export interface RemoveAllResourcePermissionsRequestFormProperties {
	}
	export function CreateRemoveAllResourcePermissionsRequestFormGroup() {
		return new FormGroup<RemoveAllResourcePermissionsRequestFormProperties>({
		});

	}

	export interface RemoveResourcePermissionRequest {
	}
	export interface RemoveResourcePermissionRequestFormProperties {
	}
	export function CreateRemoveResourcePermissionRequestFormGroup() {
		return new FormGroup<RemoveResourcePermissionRequestFormProperties>({
		});

	}

	export interface RestoreDocumentVersionsRequest {
	}
	export interface RestoreDocumentVersionsRequestFormProperties {
	}
	export function CreateRestoreDocumentVersionsRequestFormGroup() {
		return new FormGroup<RestoreDocumentVersionsRequestFormProperties>({
		});

	}

	export interface SearchResourcesRequest {
		QueryText?: string;
		QueryScopes?: Array<SearchQueryScopeType>;
		OrganizationId?: string;
		AdditionalResponseFields?: Array<AdditionalResponseFieldType>;
		Filters?: Filters;
		OrderBy?: Array<SearchSortResult>;
		Limit?: number | null;
		Marker?: string;
	}
	export interface SearchResourcesRequestFormProperties {
		QueryText: FormControl<string | null | undefined>,
		OrganizationId: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateSearchResourcesRequestFormGroup() {
		return new FormGroup<SearchResourcesRequestFormProperties>({
			QueryText: new FormControl<string | null | undefined>(undefined),
			OrganizationId: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDocumentRequest {
		Name?: string;
		ParentFolderId?: string;
		ResourceState?: ResourceStateType;
	}
	export interface UpdateDocumentRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		ParentFolderId: FormControl<string | null | undefined>,
		ResourceState: FormControl<ResourceStateType | null | undefined>,
	}
	export function CreateUpdateDocumentRequestFormGroup() {
		return new FormGroup<UpdateDocumentRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ParentFolderId: new FormControl<string | null | undefined>(undefined),
			ResourceState: new FormControl<ResourceStateType | null | undefined>(undefined),
		});

	}

	export interface UpdateDocumentVersionRequest {
		VersionStatus?: DocumentVersionStatus;
	}
	export interface UpdateDocumentVersionRequestFormProperties {
		VersionStatus: FormControl<DocumentVersionStatus | null | undefined>,
	}
	export function CreateUpdateDocumentVersionRequestFormGroup() {
		return new FormGroup<UpdateDocumentVersionRequestFormProperties>({
			VersionStatus: new FormControl<DocumentVersionStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateFolderRequest {
		Name?: string;
		ParentFolderId?: string;
		ResourceState?: ResourceStateType;
	}
	export interface UpdateFolderRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		ParentFolderId: FormControl<string | null | undefined>,
		ResourceState: FormControl<ResourceStateType | null | undefined>,
	}
	export function CreateUpdateFolderRequestFormGroup() {
		return new FormGroup<UpdateFolderRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ParentFolderId: new FormControl<string | null | undefined>(undefined),
			ResourceState: new FormControl<ResourceStateType | null | undefined>(undefined),
		});

	}

	export interface UpdateUserRequest {
		GivenName?: string;
		Surname?: string;
		Type?: UserType;
		StorageRule?: StorageRuleType;
		TimeZoneId?: string;
		Locale?: LocaleType;
		GrantPoweruserPrivileges?: BooleanEnumType;
	}
	export interface UpdateUserRequestFormProperties {
		GivenName: FormControl<string | null | undefined>,
		Surname: FormControl<string | null | undefined>,
		Type: FormControl<UserType | null | undefined>,
		TimeZoneId: FormControl<string | null | undefined>,
		Locale: FormControl<LocaleType | null | undefined>,
		GrantPoweruserPrivileges: FormControl<BooleanEnumType | null | undefined>,
	}
	export function CreateUpdateUserRequestFormGroup() {
		return new FormGroup<UpdateUserRequestFormProperties>({
			GivenName: new FormControl<string | null | undefined>(undefined),
			Surname: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<UserType | null | undefined>(undefined),
			TimeZoneId: new FormControl<string | null | undefined>(undefined),
			Locale: new FormControl<LocaleType | null | undefined>(undefined),
			GrantPoweruserPrivileges: new FormControl<BooleanEnumType | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Aborts the upload of the specified document version that was previously initiated by <a>InitiateDocumentVersionUpload</a>. The client should make this call only when it no longer intends to upload the document version, or fails to do so.
		 * Delete api/v1/documents/{DocumentId}/versions/{VersionId}
		 * @param {string} DocumentId The ID of the document.
		 *     Min length: 1    Max length: 128
		 * @param {string} VersionId The ID of the version.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		AbortDocumentVersionUpload(DocumentId: string, VersionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)) + '/versions/' + (VersionId == null ? '' : encodeURIComponent(VersionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves version metadata for the specified document.
		 * Get api/v1/documents/{DocumentId}/versions/{VersionId}
		 * @param {string} DocumentId The ID of the document.
		 *     Min length: 1    Max length: 128
		 * @param {string} VersionId The version ID of the document.
		 *     Min length: 1    Max length: 128
		 * @param {string} fields A comma-separated list of values. Specify "SOURCE" to include a URL for the source document.
		 *     Min length: 1    Max length: 256
		 * @param {boolean} includeCustomMetadata Set this to TRUE to include custom metadata in the response.
		 * @return {GetDocumentVersionResponse} Success
		 */
		GetDocumentVersion(DocumentId: string, VersionId: string, fields: string | null | undefined, includeCustomMetadata: boolean | null | undefined): Observable<GetDocumentVersionResponse> {
			return this.http.get<GetDocumentVersionResponse>(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)) + '/versions/' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&includeCustomMetadata=' + includeCustomMetadata, {});
		}

		/**
		 * <p>Changes the status of the document version to ACTIVE. </p> <p>Amazon WorkDocs also sets its document container to ACTIVE. This is the last step in a document upload, after the client uploads the document to an S3-presigned URL returned by <a>InitiateDocumentVersionUpload</a>. </p>
		 * Patch api/v1/documents/{DocumentId}/versions/{VersionId}
		 * @param {string} DocumentId The ID of the document.
		 *     Min length: 1    Max length: 128
		 * @param {string} VersionId The version ID of the document.
		 *     Min length: 1    Max length: 128
		 * @return {void} Success
		 */
		UpdateDocumentVersion(DocumentId: string, VersionId: string, requestBody: UpdateDocumentVersionPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)) + '/versions/' + (VersionId == null ? '' : encodeURIComponent(VersionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Activates the specified user. Only active users can access Amazon WorkDocs.
		 * Post api/v1/users/{UserId}/activation
		 * @param {string} UserId The ID of the user.
		 *     Min length: 1    Max length: 256
		 * @return {ActivateUserResponse} Success
		 */
		ActivateUser(UserId: string): Observable<ActivateUserResponse> {
			return this.http.post<ActivateUserResponse>(this.baseUri + 'api/v1/users/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/activation', null, {});
		}

		/**
		 * Deactivates the specified user, which revokes the user's access to Amazon WorkDocs.
		 * Delete api/v1/users/{UserId}/activation
		 * @param {string} UserId The ID of the user.
		 *     Min length: 1    Max length: 256
		 * @return {void} 
		 */
		DeactivateUser(UserId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/users/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/activation', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a set of permissions for the specified folder or document. The resource permissions are overwritten if the principals already have different permissions.
		 * Post api/v1/resources/{ResourceId}/permissions
		 * @param {string} ResourceId The ID of the resource.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		AddResourcePermissions(ResourceId: string, requestBody: AddResourcePermissionsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/resources/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '/permissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the permissions of a specified resource.
		 * Get api/v1/resources/{ResourceId}/permissions
		 * @param {string} ResourceId The ID of the resource.
		 *     Min length: 1    Max length: 128
		 * @param {string} principalId The ID of the principal to filter permissions by.
		 *     Min length: 1    Max length: 256
		 * @param {number} limit The maximum number of items to return with this call.
		 *     Minimum: 1    Maximum: 999
		 * @param {string} marker The marker for the next set of results. (You received this marker from a previous call)
		 *     Min length: 1    Max length: 2048
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeResourcePermissionsResponse} Success
		 */
		DescribeResourcePermissions(ResourceId: string, principalId: string | null | undefined, limit: number | null | undefined, marker: string | null | undefined, Limit: string | null | undefined, Marker: string | null | undefined): Observable<DescribeResourcePermissionsResponse> {
			return this.http.get<DescribeResourcePermissionsResponse>(this.baseUri + 'api/v1/resources/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '/permissions&principalId=' + (principalId == null ? '' : encodeURIComponent(principalId)) + '&limit=' + limit + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), {});
		}

		/**
		 * Removes all the permissions from the specified resource.
		 * Delete api/v1/resources/{ResourceId}/permissions
		 * @param {string} ResourceId The ID of the resource.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		RemoveAllResourcePermissions(ResourceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/resources/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '/permissions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a new comment to the specified document version.
		 * Post api/v1/documents/{DocumentId}/versions/{VersionId}/comment
		 * @param {string} DocumentId The ID of the document.
		 *     Min length: 1    Max length: 128
		 * @param {string} VersionId The ID of the document version.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		CreateComment(DocumentId: string, VersionId: string, requestBody: CreateCommentPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)) + '/versions/' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '/comment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds one or more custom properties to the specified resource (a folder, document, or version).
		 * Put api/v1/resources/{ResourceId}/customMetadata
		 * @param {string} ResourceId The ID of the resource.
		 *     Min length: 1    Max length: 128
		 * @param {string} versionid The ID of the version, if the custom metadata is being added to a document version.
		 *     Min length: 1    Max length: 128
		 * @return {CreateCustomMetadataResponse} Success
		 */
		CreateCustomMetadata(ResourceId: string, versionid: string | null | undefined, requestBody: CreateCustomMetadataPutBody): Observable<CreateCustomMetadataResponse> {
			return this.http.put<CreateCustomMetadataResponse>(this.baseUri + 'api/v1/resources/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '/customMetadata&versionid=' + (versionid == null ? '' : encodeURIComponent(versionid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes custom metadata from the specified resource.
		 * Delete api/v1/resources/{ResourceId}/customMetadata
		 * @param {string} ResourceId The ID of the resource, either a document or folder.
		 *     Min length: 1    Max length: 128
		 * @param {string} versionId The ID of the version, if the custom metadata is being deleted from a document version.
		 *     Min length: 1    Max length: 128
		 * @param {Array<string>} keys List of properties to remove.
		 *     Maximum items: 8
		 * @param {boolean} deleteAll Flag to indicate removal of all custom metadata properties from the specified resource.
		 * @return {DeleteCustomMetadataResponse} Success
		 */
		DeleteCustomMetadata(ResourceId: string, versionId: string | null | undefined, keys: Array<string> | null | undefined, deleteAll: boolean | null | undefined): Observable<DeleteCustomMetadataResponse> {
			return this.http.delete<DeleteCustomMetadataResponse>(this.baseUri + 'api/v1/resources/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '/customMetadata&versionId=' + (versionId == null ? '' : encodeURIComponent(versionId)) + '&' + keys?.map(z => `keys=${encodeURIComponent(z)}`).join('&') + '&deleteAll=' + deleteAll, {});
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
		 *     Min length: 1    Max length: 128
		 * @return {CreateLabelsResponse} Success
		 */
		CreateLabels(ResourceId: string, requestBody: CreateLabelsPutBody): Observable<CreateLabelsResponse> {
			return this.http.put<CreateLabelsResponse>(this.baseUri + 'api/v1/resources/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '/labels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified list of labels from a resource.
		 * Delete api/v1/resources/{ResourceId}/labels
		 * @param {string} ResourceId The ID of the resource.
		 *     Min length: 1    Max length: 128
		 * @param {Array<string>} labels List of labels to delete from the resource.
		 *     Maximum items: 20
		 * @param {boolean} deleteAll Flag to request removal of all labels from the specified resource.
		 * @return {DeleteLabelsResponse} Success
		 */
		DeleteLabels(ResourceId: string, labels: Array<string> | null | undefined, deleteAll: boolean | null | undefined): Observable<DeleteLabelsResponse> {
			return this.http.delete<DeleteLabelsResponse>(this.baseUri + 'api/v1/resources/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '/labels&' + labels?.map(z => `labels=${encodeURIComponent(z)}`).join('&') + '&deleteAll=' + deleteAll, {});
		}

		/**
		 * <p>Configure Amazon WorkDocs to use Amazon SNS notifications. The endpoint receives a confirmation message, and must confirm the subscription.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/manage-notifications.html">Setting up notifications for an IAM user or role</a> in the <i>Amazon WorkDocs Developer Guide</i>.</p>
		 * Post api/v1/organizations/{OrganizationId}/subscriptions
		 * @param {string} OrganizationId The ID of the organization.
		 *     Min length: 1    Max length: 256
		 * @return {CreateNotificationSubscriptionResponse} Success
		 */
		CreateNotificationSubscription(OrganizationId: string, requestBody: CreateNotificationSubscriptionPostBody): Observable<CreateNotificationSubscriptionResponse> {
			return this.http.post<CreateNotificationSubscriptionResponse>(this.baseUri + 'api/v1/organizations/' + (OrganizationId == null ? '' : encodeURIComponent(OrganizationId)) + '/subscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the specified notification subscriptions.
		 * Get api/v1/organizations/{OrganizationId}/subscriptions
		 * @param {string} OrganizationId The ID of the organization.
		 *     Min length: 1    Max length: 256
		 * @param {string} marker The marker for the next set of results. (You received this marker from a previous call.)
		 *     Min length: 1    Max length: 2048
		 * @param {number} limit The maximum number of items to return with this call.
		 *     Minimum: 1    Maximum: 999
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeNotificationSubscriptionsResponse} Success
		 */
		DescribeNotificationSubscriptions(OrganizationId: string, marker: string | null | undefined, limit: number | null | undefined, Limit: string | null | undefined, Marker: string | null | undefined): Observable<DescribeNotificationSubscriptionsResponse> {
			return this.http.get<DescribeNotificationSubscriptionsResponse>(this.baseUri + 'api/v1/organizations/' + (OrganizationId == null ? '' : encodeURIComponent(OrganizationId)) + '/subscriptions&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&limit=' + limit + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), {});
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
		 *     Min length: 1    Max length: 256
		 * @param {string} userIds The IDs of the users.
		 *     Min length: 1    Max length: 2000
		 * @param {string} query <p>A query to filter users by user name. Remember the following about the <code>Userids</code> and <code>Query</code> parameters:</p> <ul> <li> <p>If you don't use either parameter, the API returns a paginated list of all users on the site.</p> </li> <li> <p>If you use both parameters, the API ignores the <code>Query</code> parameter.</p> </li> <li> <p>The <code>Userid</code> parameter only returns user names that match a corresponding user ID.</p> </li> <li> <p>The <code>Query</code> parameter runs a "prefix" search for users by the <code>GivenName</code>, <code>SurName</code>, or <code>UserName</code> fields included in a <a href="https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateUser.html">CreateUser</a> API call. For example, querying on <code>Ma</code> returns Márcia Oliveira, María García, and Mateo Jackson. If you use multiple characters, the API only returns data that matches all characters. For example, querying on <code>Ma J</code> only returns Mateo Jackson.</p> </li> </ul>
		 *     Min length: 1    Max length: 512
		 * @param {UserFilterType} include The state of the users. Specify "ALL" to include inactive users.
		 * @param {OrderType} order The order for the results.
		 * @param {UserSortType} sort The sorting criteria.
		 * @param {string} marker The marker for the next set of results. (You received this marker from a previous call.)
		 *     Min length: 1    Max length: 2048
		 * @param {number} limit The maximum number of items to return.
		 *     Minimum: 1    Maximum: 999
		 * @param {string} fields A comma-separated list of values. Specify "STORAGE_METADATA" to include the user storage quota and utilization information.
		 *     Min length: 1    Max length: 256
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeUsersResponse} Success
		 */
		DescribeUsers(organizationId: string | null | undefined, userIds: string | null | undefined, query: string | null | undefined, include: UserFilterType | null | undefined, order: OrderType | null | undefined, sort: UserSortType | null | undefined, marker: string | null | undefined, limit: number | null | undefined, fields: string | null | undefined, Limit: string | null | undefined, Marker: string | null | undefined): Observable<DescribeUsersResponse> {
			return this.http.get<DescribeUsersResponse>(this.baseUri + 'api/v1/users?organizationId=' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '&userIds=' + (userIds == null ? '' : encodeURIComponent(userIds)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&include=' + include + '&order=' + order + '&sort=' + sort + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&limit=' + limit + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), {});
		}

		/**
		 * Deletes the specified comment from the document version.
		 * Delete api/v1/documents/{DocumentId}/versions/{VersionId}/comment/{CommentId}
		 * @param {string} DocumentId The ID of the document.
		 *     Min length: 1    Max length: 128
		 * @param {string} VersionId The ID of the document version.
		 *     Min length: 1    Max length: 128
		 * @param {string} CommentId The ID of the comment.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		DeleteComment(DocumentId: string, VersionId: string, CommentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)) + '/versions/' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '/comment/' + (CommentId == null ? '' : encodeURIComponent(CommentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes the specified document and its associated metadata.
		 * Delete api/v1/documents/{DocumentId}
		 * @param {string} DocumentId The ID of the document.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		DeleteDocument(DocumentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details of a document.
		 * Get api/v1/documents/{DocumentId}
		 * @param {string} DocumentId The ID of the document.
		 *     Min length: 1    Max length: 128
		 * @param {boolean} includeCustomMetadata Set this to <code>TRUE</code> to include custom metadata in the response.
		 * @return {GetDocumentResponse} Success
		 */
		GetDocument(DocumentId: string, includeCustomMetadata: boolean | null | undefined): Observable<GetDocumentResponse> {
			return this.http.get<GetDocumentResponse>(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)) + '&includeCustomMetadata=' + includeCustomMetadata, {});
		}

		/**
		 * Updates the specified attributes of a document. The user must have access to both the document and its parent folder, if applicable.
		 * Patch api/v1/documents/{DocumentId}
		 * @param {string} DocumentId The ID of the document.
		 *     Min length: 1    Max length: 128
		 * @return {void} Success
		 */
		UpdateDocument(DocumentId: string, requestBody: UpdateDocumentPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a specific version of a document.
		 * Delete api/v1/documentVersions/{DocumentId}/versions/{VersionId}#deletePriorVersions
		 * @param {string} DocumentId The ID of the document associated with the version being deleted.
		 *     Min length: 1    Max length: 128
		 * @param {string} VersionId The ID of the version being deleted.
		 *     Min length: 1    Max length: 128
		 * @param {boolean} deletePriorVersions Deletes all versions of a document prior to the current version.
		 * @return {void} 
		 */
		DeleteDocumentVersion(DocumentId: string, VersionId: string, deletePriorVersions: boolean): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/documentVersions/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)) + '/versions/' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '#deletePriorVersions&deletePriorVersions=' + deletePriorVersions, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes the specified folder and its contents.
		 * Delete api/v1/folders/{FolderId}
		 * @param {string} FolderId The ID of the folder.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		DeleteFolder(FolderId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/folders/' + (FolderId == null ? '' : encodeURIComponent(FolderId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the metadata of the specified folder.
		 * Get api/v1/folders/{FolderId}
		 * @param {string} FolderId The ID of the folder.
		 *     Min length: 1    Max length: 128
		 * @param {boolean} includeCustomMetadata Set to TRUE to include custom metadata in the response.
		 * @return {GetFolderResponse} Success
		 */
		GetFolder(FolderId: string, includeCustomMetadata: boolean | null | undefined): Observable<GetFolderResponse> {
			return this.http.get<GetFolderResponse>(this.baseUri + 'api/v1/folders/' + (FolderId == null ? '' : encodeURIComponent(FolderId)) + '&includeCustomMetadata=' + includeCustomMetadata, {});
		}

		/**
		 * Updates the specified attributes of the specified folder. The user must have access to both the folder and its parent folder, if applicable.
		 * Patch api/v1/folders/{FolderId}
		 * @param {string} FolderId The ID of the folder.
		 *     Min length: 1    Max length: 128
		 * @return {void} Success
		 */
		UpdateFolder(FolderId: string, requestBody: UpdateFolderPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'api/v1/folders/' + (FolderId == null ? '' : encodeURIComponent(FolderId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the contents of the specified folder.
		 * Delete api/v1/folders/{FolderId}/contents
		 * @param {string} FolderId The ID of the folder.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		DeleteFolderContents(FolderId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/folders/' + (FolderId == null ? '' : encodeURIComponent(FolderId)) + '/contents', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the contents of the specified folder, including its documents and subfolders.</p> <p>By default, Amazon WorkDocs returns the first 100 active document and folder metadata items. If there are more results, the response includes a marker that you can use to request the next set of results. You can also request initialized documents.</p>
		 * Get api/v1/folders/{FolderId}/contents
		 * @param {string} FolderId The ID of the folder.
		 *     Min length: 1    Max length: 128
		 * @param {ResourceSortType} sort The sorting criteria.
		 * @param {OrderType} order The order for the contents of the folder.
		 * @param {number} limit The maximum number of items to return with this call.
		 *     Minimum: 1    Maximum: 999
		 * @param {string} marker The marker for the next set of results. This marker was received from a previous call.
		 *     Min length: 1    Max length: 2048
		 * @param {FolderContentType} type The type of items.
		 * @param {string} include The contents to include. Specify "INITIALIZED" to include initialized documents.
		 *     Min length: 1    Max length: 256
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeFolderContentsResponse} Success
		 */
		DescribeFolderContents(FolderId: string, sort: ResourceSortType | null | undefined, order: OrderType | null | undefined, limit: number | null | undefined, marker: string | null | undefined, type: FolderContentType | null | undefined, include: string | null | undefined, Limit: string | null | undefined, Marker: string | null | undefined): Observable<DescribeFolderContentsResponse> {
			return this.http.get<DescribeFolderContentsResponse>(this.baseUri + 'api/v1/folders/' + (FolderId == null ? '' : encodeURIComponent(FolderId)) + '/contents&sort=' + sort + '&order=' + order + '&limit=' + limit + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&type=' + type + '&include=' + (include == null ? '' : encodeURIComponent(include)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), {});
		}

		/**
		 * Deletes the specified subscription from the specified organization.
		 * Delete api/v1/organizations/{OrganizationId}/subscriptions/{SubscriptionId}
		 * @param {string} SubscriptionId The ID of the subscription.
		 *     Min length: 1    Max length: 256
		 * @param {string} OrganizationId The ID of the organization.
		 *     Min length: 1    Max length: 256
		 * @return {void} Success
		 */
		DeleteNotificationSubscription(SubscriptionId: string, OrganizationId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/organizations/' + (OrganizationId == null ? '' : encodeURIComponent(OrganizationId)) + '/subscriptions/' + (SubscriptionId == null ? '' : encodeURIComponent(SubscriptionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified user from a Simple AD or Microsoft AD directory.</p> <important> <p>Deleting a user immediately and permanently deletes all content in that user's folder structure. Site retention policies do NOT apply to this type of deletion.</p> </important>
		 * Delete api/v1/users/{UserId}
		 * @param {string} UserId The ID of the user.
		 *     Min length: 1    Max length: 256
		 * @return {void} 
		 */
		DeleteUser(UserId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/users/' + (UserId == null ? '' : encodeURIComponent(UserId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified attributes of the specified user, and grants or revokes administrative privileges to the Amazon WorkDocs site.
		 * Patch api/v1/users/{UserId}
		 * @param {string} UserId The ID of the user.
		 *     Min length: 1    Max length: 256
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
		 *     Min length: 1    Max length: 256
		 * @param {string} activityTypes Specifies which activity types to include in the response. If this field is left empty, all activity types are returned.
		 *     Min length: 1    Max length: 1024
		 * @param {string} resourceId The document or folder ID for which to describe activity types.
		 *     Min length: 1    Max length: 256
		 * @param {string} userId The ID of the user who performed the action. The response includes activities pertaining to this user. This is an optional parameter and is only applicable for administrative API (SigV4) requests.
		 *     Min length: 1    Max length: 256
		 * @param {boolean} includeIndirectActivities Includes indirect activities. An indirect activity results from a direct activity performed on a parent resource. For example, sharing a parent folder (the direct activity) shares all of the subfolders and documents within the parent folder (the indirect activity).
		 * @param {number} limit The maximum number of items to return.
		 *     Minimum: 1    Maximum: 999
		 * @param {string} marker The marker for the next set of results.
		 *     Min length: 1    Max length: 12288
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeActivitiesResponse} Success
		 */
		DescribeActivities(startTime: Date | null | undefined, endTime: Date | null | undefined, organizationId: string | null | undefined, activityTypes: string | null | undefined, resourceId: string | null | undefined, userId: string | null | undefined, includeIndirectActivities: boolean | null | undefined, limit: number | null | undefined, marker: string | null | undefined, Limit: string | null | undefined, Marker: string | null | undefined): Observable<DescribeActivitiesResponse> {
			return this.http.get<DescribeActivitiesResponse>(this.baseUri + 'api/v1/activities?startTime=' + startTime?.toISOString() + '&endTime=' + endTime?.toISOString() + '&organizationId=' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '&activityTypes=' + (activityTypes == null ? '' : encodeURIComponent(activityTypes)) + '&resourceId=' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&includeIndirectActivities=' + includeIndirectActivities + '&limit=' + limit + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), {});
		}

		/**
		 * List all the comments for the specified document version.
		 * Get api/v1/documents/{DocumentId}/versions/{VersionId}/comments
		 * @param {string} DocumentId The ID of the document.
		 *     Min length: 1    Max length: 128
		 * @param {string} VersionId The ID of the document version.
		 *     Min length: 1    Max length: 128
		 * @param {number} limit The maximum number of items to return.
		 *     Minimum: 1    Maximum: 999
		 * @param {string} marker The marker for the next set of results. This marker was received from a previous call.
		 *     Min length: 1    Max length: 2048
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeCommentsResponse} Success
		 */
		DescribeComments(DocumentId: string, VersionId: string, limit: number | null | undefined, marker: string | null | undefined, Limit: string | null | undefined, Marker: string | null | undefined): Observable<DescribeCommentsResponse> {
			return this.http.get<DescribeCommentsResponse>(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)) + '/versions/' + (VersionId == null ? '' : encodeURIComponent(VersionId)) + '/comments&limit=' + limit + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), {});
		}

		/**
		 * <p>Retrieves the document versions for the specified document.</p> <p>By default, only active versions are returned.</p>
		 * Get api/v1/documents/{DocumentId}/versions
		 * @param {string} DocumentId The ID of the document.
		 *     Min length: 1    Max length: 128
		 * @param {string} marker The marker for the next set of results. (You received this marker from a previous call.)
		 *     Min length: 1    Max length: 2048
		 * @param {number} limit The maximum number of versions to return with this call.
		 *     Minimum: 1    Maximum: 999
		 * @param {string} include A comma-separated list of values. Specify "INITIALIZED" to include incomplete versions.
		 *     Min length: 1    Max length: 256
		 * @param {string} fields Specify "SOURCE" to include initialized versions and a URL for the source document.
		 *     Min length: 1    Max length: 256
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeDocumentVersionsResponse} Success
		 */
		DescribeDocumentVersions(DocumentId: string, marker: string | null | undefined, limit: number | null | undefined, include: string | null | undefined, fields: string | null | undefined, Limit: string | null | undefined, Marker: string | null | undefined): Observable<DescribeDocumentVersionsResponse> {
			return this.http.get<DescribeDocumentVersionsResponse>(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)) + '/versions&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&limit=' + limit + '&include=' + (include == null ? '' : encodeURIComponent(include)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), {});
		}

		/**
		 * Describes the groups specified by the query. Groups are defined by the underlying Active Directory.
		 * Get api/v1/groups#searchQuery
		 * @param {string} searchQuery A query to describe groups by group name.
		 *     Min length: 1    Max length: 512
		 * @param {string} organizationId The ID of the organization.
		 *     Min length: 1    Max length: 256
		 * @param {string} marker The marker for the next set of results. (You received this marker from a previous call.)
		 *     Min length: 1    Max length: 2048
		 * @param {number} limit The maximum number of items to return with this call.
		 *     Minimum: 1
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeGroupsResponse} Success
		 */
		DescribeGroups(searchQuery: string, organizationId: string | null | undefined, marker: string | null | undefined, limit: number | null | undefined, Limit: string | null | undefined, Marker: string | null | undefined): Observable<DescribeGroupsResponse> {
			return this.http.get<DescribeGroupsResponse>(this.baseUri + 'api/v1/groups#searchQuery?searchQuery=' + (searchQuery == null ? '' : encodeURIComponent(searchQuery)) + '&organizationId=' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&limit=' + limit + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), {});
		}

		/**
		 * <p>Describes the current user's special folders; the <code>RootFolder</code> and the <code>RecycleBin</code>. <code>RootFolder</code> is the root of user's files and folders and <code>RecycleBin</code> is the root of recycled items. This is not a valid action for SigV4 (administrative API) clients.</p> <p>This action requires an authentication token. To get an authentication token, register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access Control for User Applications</a> in the <i>Amazon WorkDocs Developer Guide</i>.</p>
		 * Get api/v1/me/root#Authentication
		 * @param {number} limit The maximum number of items to return.
		 *     Minimum: 1    Maximum: 999
		 * @param {string} marker The marker for the next set of results. (You received this marker from a previous call.)
		 *     Min length: 1    Max length: 2048
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {DescribeRootFoldersResponse} Success
		 */
		DescribeRootFolders(limit: number | null | undefined, marker: string | null | undefined, Limit: string | null | undefined, Marker: string | null | undefined): Observable<DescribeRootFoldersResponse> {
			return this.http.get<DescribeRootFoldersResponse>(this.baseUri + 'api/v1/me/root#Authentication?limit=' + limit + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), {});
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
		 *     Min length: 1    Max length: 256
		 * @param {number} limit The maximum number of levels in the hierarchy to return.
		 *     Minimum: 1    Maximum: 999
		 * @param {string} fields A comma-separated list of values. Specify <code>NAME</code> to include the names of the parent folders.
		 *     Min length: 1    Max length: 256
		 * @param {string} marker This value is not supported.
		 *     Min length: 1    Max length: 2048
		 * @return {GetDocumentPathResponse} Success
		 */
		GetDocumentPath(DocumentId: string, limit: number | null | undefined, fields: string | null | undefined, marker: string | null | undefined): Observable<GetDocumentPathResponse> {
			return this.http.get<GetDocumentPathResponse>(this.baseUri + 'api/v1/documents/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)) + '/path&limit=' + limit + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)), {});
		}

		/**
		 * <p>Retrieves the path information (the hierarchy from the root folder) for the specified folder.</p> <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the requested folder and only includes the IDs of the parent folders in the path. You can limit the maximum number of levels. You can also request the parent folder names.</p>
		 * Get api/v1/folders/{FolderId}/path
		 * @param {string} FolderId The ID of the folder.
		 *     Min length: 1    Max length: 256
		 * @param {number} limit The maximum number of levels in the hierarchy to return.
		 *     Minimum: 1    Maximum: 999
		 * @param {string} fields A comma-separated list of values. Specify "NAME" to include the names of the parent folders.
		 *     Min length: 1    Max length: 256
		 * @param {string} marker This value is not supported.
		 *     Min length: 1    Max length: 2048
		 * @return {GetFolderPathResponse} Success
		 */
		GetFolderPath(FolderId: string, limit: number | null | undefined, fields: string | null | undefined, marker: string | null | undefined): Observable<GetFolderPathResponse> {
			return this.http.get<GetFolderPathResponse>(this.baseUri + 'api/v1/folders/' + (FolderId == null ? '' : encodeURIComponent(FolderId)) + '/path&limit=' + limit + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)) + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)), {});
		}

		/**
		 * Retrieves a collection of resources, including folders and documents. The only <code>CollectionType</code> supported is <code>SHARED_WITH_ME</code>.
		 * Get api/v1/resources
		 * @param {string} userId The user ID for the resource collection. This is a required field for accessing the API operation using IAM credentials.
		 *     Min length: 1    Max length: 256
		 * @param {ResourceCollectionType} collectionType The collection type.
		 * @param {number} limit The maximum number of resources to return.
		 *     Minimum: 1    Maximum: 999
		 * @param {string} marker The marker for the next set of results. This marker was received from a previous call.
		 *     Min length: 1    Max length: 2048
		 * @return {GetResourcesResponse} Success
		 */
		GetResources(userId: string | null | undefined, collectionType: ResourceCollectionType | null | undefined, limit: number | null | undefined, marker: string | null | undefined): Observable<GetResourcesResponse> {
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
		 *     Min length: 1    Max length: 128
		 * @param {string} PrincipalId The principal ID of the resource.
		 *     Min length: 1    Max length: 256
		 * @param {PrincipalType} type The principal type of the resource.
		 * @return {void} 
		 */
		RemoveResourcePermission(ResourceId: string, PrincipalId: string, type: PrincipalType | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/resources/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '/permissions/' + (PrincipalId == null ? '' : encodeURIComponent(PrincipalId)) + '&type=' + type, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Recovers a deleted version of an Amazon WorkDocs document.
		 * Post api/v1/documentVersions/restore/{DocumentId}
		 * @param {string} DocumentId The ID of the document.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		RestoreDocumentVersions(DocumentId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/documentVersions/restore/' + (DocumentId == null ? '' : encodeURIComponent(DocumentId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Searches metadata and the content of folders, documents, document versions, and comments.
		 * Post api/v1/search
		 * @param {string} Limit Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {SearchResourcesResponse} Success
		 */
		SearchResources(Limit: string | null | undefined, Marker: string | null | undefined, requestBody: SearchResourcesPostBody): Observable<SearchResourcesResponse> {
			return this.http.post<SearchResourcesResponse>(this.baseUri + 'api/v1/search?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface UpdateDocumentVersionPatchBody {

		/** The status of the version. */
		VersionStatus?: DocumentVersionStatus | null;
	}
	export interface UpdateDocumentVersionPatchBodyFormProperties {

		/** The status of the version. */
		VersionStatus: FormControl<DocumentVersionStatus | null | undefined>,
	}
	export function CreateUpdateDocumentVersionPatchBodyFormGroup() {
		return new FormGroup<UpdateDocumentVersionPatchBodyFormProperties>({
			VersionStatus: new FormControl<DocumentVersionStatus | null | undefined>(undefined),
		});

	}

	export interface AddResourcePermissionsPostBody {

		/**
		 * The users, groups, or organization being granted permission.
		 * Required
		 */
		Principals: Array<SharePrincipal>;

		/** Set of options which defines notification preferences of given action. */
		NotificationOptions?: AddResourcePermissionsPostBodyNotificationOptions;
	}
	export interface AddResourcePermissionsPostBodyFormProperties {
	}
	export function CreateAddResourcePermissionsPostBodyFormGroup() {
		return new FormGroup<AddResourcePermissionsPostBodyFormProperties>({
		});

	}

	export interface AddResourcePermissionsPostBodyNotificationOptions {
		SendEmail?: boolean | null;
		EmailMessage?: string;
	}
	export interface AddResourcePermissionsPostBodyNotificationOptionsFormProperties {
		SendEmail: FormControl<boolean | null | undefined>,
		EmailMessage: FormControl<string | null | undefined>,
	}
	export function CreateAddResourcePermissionsPostBodyNotificationOptionsFormGroup() {
		return new FormGroup<AddResourcePermissionsPostBodyNotificationOptionsFormProperties>({
			SendEmail: new FormControl<boolean | null | undefined>(undefined),
			EmailMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCommentPostBody {

		/**
		 * The ID of the parent comment.
		 * Min length: 1
		 * Max length: 128
		 */
		ParentId?: string | null;

		/**
		 * The ID of the root comment in the thread.
		 * Min length: 1
		 * Max length: 128
		 */
		ThreadId?: string | null;

		/**
		 * The text of the comment.
		 * Required
		 * Min length: 1
		 * Max length: 2048
		 */
		Text: string;

		/** The visibility of the comment. Options are either PRIVATE, where the comment is visible only to the comment author and document owner and co-owners, or PUBLIC, where the comment is visible to document owners, co-owners, and contributors. */
		Visibility?: CommentVisibilityType | null;

		/** Set this parameter to TRUE to send an email out to the document collaborators after the comment is created. */
		NotifyCollaborators?: boolean | null;
	}
	export interface CreateCommentPostBodyFormProperties {

		/**
		 * The ID of the parent comment.
		 * Min length: 1
		 * Max length: 128
		 */
		ParentId: FormControl<string | null | undefined>,

		/**
		 * The ID of the root comment in the thread.
		 * Min length: 1
		 * Max length: 128
		 */
		ThreadId: FormControl<string | null | undefined>,

		/**
		 * The text of the comment.
		 * Required
		 * Min length: 1
		 * Max length: 2048
		 */
		Text: FormControl<string | null | undefined>,

		/** The visibility of the comment. Options are either PRIVATE, where the comment is visible only to the comment author and document owner and co-owners, or PUBLIC, where the comment is visible to document owners, co-owners, and contributors. */
		Visibility: FormControl<CommentVisibilityType | null | undefined>,

		/** Set this parameter to TRUE to send an email out to the document collaborators after the comment is created. */
		NotifyCollaborators: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateCommentPostBodyFormGroup() {
		return new FormGroup<CreateCommentPostBodyFormProperties>({
			ParentId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+-.@]+')]),
			ThreadId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+-.@]+')]),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2048)]),
			Visibility: new FormControl<CommentVisibilityType | null | undefined>(undefined),
			NotifyCollaborators: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateCustomMetadataPutBody {

		/**
		 * Custom metadata in the form of name-value pairs.
		 * Required
		 */
		CustomMetadata: {[id: string]: string };
	}
	export interface CreateCustomMetadataPutBodyFormProperties {

		/**
		 * Custom metadata in the form of name-value pairs.
		 * Required
		 */
		CustomMetadata: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateCustomMetadataPutBodyFormGroup() {
		return new FormGroup<CreateCustomMetadataPutBodyFormProperties>({
			CustomMetadata: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateFolderPostBody {

		/**
		 * The name of the new folder.
		 * Min length: 1
		 * Max length: 255
		 */
		Name?: string | null;

		/**
		 * The ID of the parent folder.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		ParentFolderId: string;
	}
	export interface CreateFolderPostBodyFormProperties {

		/**
		 * The name of the new folder.
		 * Min length: 1
		 * Max length: 255
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The ID of the parent folder.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		ParentFolderId: FormControl<string | null | undefined>,
	}
	export function CreateCreateFolderPostBodyFormGroup() {
		return new FormGroup<CreateFolderPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[\u0020-\u202D\u202F-\uFFFF]+')]),
			ParentFolderId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+-.@]+')]),
		});

	}

	export interface CreateLabelsPutBody {

		/**
		 * List of labels to add to the resource.
		 * Required
		 * Maximum items: 20
		 */
		Labels: Array<string>;
	}
	export interface CreateLabelsPutBodyFormProperties {
	}
	export function CreateCreateLabelsPutBodyFormGroup() {
		return new FormGroup<CreateLabelsPutBodyFormProperties>({
		});

	}

	export interface CreateNotificationSubscriptionPostBody {

		/**
		 * The endpoint to receive the notifications. If the protocol is HTTPS, the endpoint is a URL that begins with <code>https</code>.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Endpoint: string;

		/**
		 * The protocol to use. The supported value is https, which delivers JSON-encoded messages using HTTPS POST.
		 * Required
		 */
		Protocol: SubscriptionProtocolType;

		/**
		 * The notification type.
		 * Required
		 */
		SubscriptionType: SubscriptionType;
	}
	export interface CreateNotificationSubscriptionPostBodyFormProperties {

		/**
		 * The endpoint to receive the notifications. If the protocol is HTTPS, the endpoint is a URL that begins with <code>https</code>.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Endpoint: FormControl<string | null | undefined>,

		/**
		 * The protocol to use. The supported value is https, which delivers JSON-encoded messages using HTTPS POST.
		 * Required
		 */
		Protocol: FormControl<SubscriptionProtocolType | null | undefined>,

		/**
		 * The notification type.
		 * Required
		 */
		SubscriptionType: FormControl<SubscriptionType | null | undefined>,
	}
	export function CreateCreateNotificationSubscriptionPostBodyFormGroup() {
		return new FormGroup<CreateNotificationSubscriptionPostBodyFormProperties>({
			Endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			Protocol: new FormControl<SubscriptionProtocolType | null | undefined>(undefined, [Validators.required]),
			SubscriptionType: new FormControl<SubscriptionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUserPostBody {

		/**
		 * The ID of the organization.
		 * Min length: 1
		 * Max length: 256
		 */
		OrganizationId?: string | null;

		/**
		 * The login name of the user.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Username: string;

		/**
		 * The email address of the user.
		 * Min length: 1
		 * Max length: 256
		 */
		EmailAddress?: string | null;

		/**
		 * The given name of the user.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		GivenName: string;

		/**
		 * The surname of the user.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Surname: string;

		/**
		 * The password of the user.
		 * Required
		 * Min length: 4
		 * Max length: 32
		 */
		Password: string;

		/**
		 * The time zone ID of the user.
		 * Min length: 1
		 * Max length: 256
		 */
		TimeZoneId?: string | null;

		/** Describes the storage for a user. */
		StorageRule?: CreateUserPostBodyStorageRule;
	}
	export interface CreateUserPostBodyFormProperties {

		/**
		 * The ID of the organization.
		 * Min length: 1
		 * Max length: 256
		 */
		OrganizationId: FormControl<string | null | undefined>,

		/**
		 * The login name of the user.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * The email address of the user.
		 * Min length: 1
		 * Max length: 256
		 */
		EmailAddress: FormControl<string | null | undefined>,

		/**
		 * The given name of the user.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		GivenName: FormControl<string | null | undefined>,

		/**
		 * The surname of the user.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Surname: FormControl<string | null | undefined>,

		/**
		 * The password of the user.
		 * Required
		 * Min length: 4
		 * Max length: 32
		 */
		Password: FormControl<string | null | undefined>,

		/**
		 * The time zone ID of the user.
		 * Min length: 1
		 * Max length: 256
		 */
		TimeZoneId: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserPostBodyFormGroup() {
		return new FormGroup<CreateUserPostBodyFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[&\w+-.@]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[\w\-+.]+(@[a-zA-Z0-9.\-]+\.[a-zA-Z]+)?')]),
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]),
			GivenName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			Surname: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(4), Validators.maxLength(32), Validators.pattern('[\u0020-\u00FF]+')]),
			TimeZoneId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface CreateUserPostBodyStorageRule {
		StorageAllocatedInBytes?: number | null;
		StorageType?: StorageType;
	}
	export interface CreateUserPostBodyStorageRuleFormProperties {
		StorageAllocatedInBytes: FormControl<number | null | undefined>,
		StorageType: FormControl<StorageType | null | undefined>,
	}
	export function CreateCreateUserPostBodyStorageRuleFormGroup() {
		return new FormGroup<CreateUserPostBodyStorageRuleFormProperties>({
			StorageAllocatedInBytes: new FormControl<number | null | undefined>(undefined),
			StorageType: new FormControl<StorageType | null | undefined>(undefined),
		});

	}

	export interface UpdateDocumentPatchBody {

		/**
		 * The name of the document.
		 * Min length: 1
		 * Max length: 255
		 */
		Name?: string | null;

		/**
		 * The ID of the parent folder.
		 * Min length: 1
		 * Max length: 128
		 */
		ParentFolderId?: string | null;

		/** The resource state of the document. Only ACTIVE and RECYCLED are supported. */
		ResourceState?: ResourceStateType | null;
	}
	export interface UpdateDocumentPatchBodyFormProperties {

		/**
		 * The name of the document.
		 * Min length: 1
		 * Max length: 255
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The ID of the parent folder.
		 * Min length: 1
		 * Max length: 128
		 */
		ParentFolderId: FormControl<string | null | undefined>,

		/** The resource state of the document. Only ACTIVE and RECYCLED are supported. */
		ResourceState: FormControl<ResourceStateType | null | undefined>,
	}
	export function CreateUpdateDocumentPatchBodyFormGroup() {
		return new FormGroup<UpdateDocumentPatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[\u0020-\u202D\u202F-\uFFFF]+')]),
			ParentFolderId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+-.@]+')]),
			ResourceState: new FormControl<ResourceStateType | null | undefined>(undefined),
		});

	}

	export interface UpdateFolderPatchBody {

		/**
		 * The name of the folder.
		 * Min length: 1
		 * Max length: 255
		 */
		Name?: string | null;

		/**
		 * The ID of the parent folder.
		 * Min length: 1
		 * Max length: 128
		 */
		ParentFolderId?: string | null;

		/** The resource state of the folder. Only ACTIVE and RECYCLED are accepted values from the API. */
		ResourceState?: ResourceStateType | null;
	}
	export interface UpdateFolderPatchBodyFormProperties {

		/**
		 * The name of the folder.
		 * Min length: 1
		 * Max length: 255
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The ID of the parent folder.
		 * Min length: 1
		 * Max length: 128
		 */
		ParentFolderId: FormControl<string | null | undefined>,

		/** The resource state of the folder. Only ACTIVE and RECYCLED are accepted values from the API. */
		ResourceState: FormControl<ResourceStateType | null | undefined>,
	}
	export function CreateUpdateFolderPatchBodyFormGroup() {
		return new FormGroup<UpdateFolderPatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[\u0020-\u202D\u202F-\uFFFF]+')]),
			ParentFolderId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+-.@]+')]),
			ResourceState: new FormControl<ResourceStateType | null | undefined>(undefined),
		});

	}

	export interface UpdateUserPatchBody {

		/**
		 * The given name of the user.
		 * Min length: 1
		 * Max length: 64
		 */
		GivenName?: string | null;

		/**
		 * The surname of the user.
		 * Min length: 1
		 * Max length: 64
		 */
		Surname?: string | null;

		/** The type of the user. */
		Type?: UserType | null;

		/** Describes the storage for a user. */
		StorageRule?: UpdateUserPatchBodyStorageRule;

		/**
		 * The time zone ID of the user.
		 * Min length: 1
		 * Max length: 256
		 */
		TimeZoneId?: string | null;

		/** The locale of the user. */
		Locale?: LocaleType | null;

		/** Boolean value to determine whether the user is granted Power user privileges. */
		GrantPoweruserPrivileges?: BooleanEnumType | null;
	}
	export interface UpdateUserPatchBodyFormProperties {

		/**
		 * The given name of the user.
		 * Min length: 1
		 * Max length: 64
		 */
		GivenName: FormControl<string | null | undefined>,

		/**
		 * The surname of the user.
		 * Min length: 1
		 * Max length: 64
		 */
		Surname: FormControl<string | null | undefined>,

		/** The type of the user. */
		Type: FormControl<UserType | null | undefined>,

		/**
		 * The time zone ID of the user.
		 * Min length: 1
		 * Max length: 256
		 */
		TimeZoneId: FormControl<string | null | undefined>,

		/** The locale of the user. */
		Locale: FormControl<LocaleType | null | undefined>,

		/** Boolean value to determine whether the user is granted Power user privileges. */
		GrantPoweruserPrivileges: FormControl<BooleanEnumType | null | undefined>,
	}
	export function CreateUpdateUserPatchBodyFormGroup() {
		return new FormGroup<UpdateUserPatchBodyFormProperties>({
			GivenName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			Surname: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64)]),
			Type: new FormControl<UserType | null | undefined>(undefined),
			TimeZoneId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			Locale: new FormControl<LocaleType | null | undefined>(undefined),
			GrantPoweruserPrivileges: new FormControl<BooleanEnumType | null | undefined>(undefined),
		});

	}

	export interface UpdateUserPatchBodyStorageRule {
		StorageAllocatedInBytes?: number | null;
		StorageType?: StorageType;
	}
	export interface UpdateUserPatchBodyStorageRuleFormProperties {
		StorageAllocatedInBytes: FormControl<number | null | undefined>,
		StorageType: FormControl<StorageType | null | undefined>,
	}
	export function CreateUpdateUserPatchBodyStorageRuleFormGroup() {
		return new FormGroup<UpdateUserPatchBodyStorageRuleFormProperties>({
			StorageAllocatedInBytes: new FormControl<number | null | undefined>(undefined),
			StorageType: new FormControl<StorageType | null | undefined>(undefined),
		});

	}

	export interface InitiateDocumentVersionUploadPostBody {

		/**
		 * The ID of the document.
		 * Min length: 1
		 * Max length: 128
		 */
		Id?: string | null;

		/**
		 * The name of the document.
		 * Min length: 1
		 * Max length: 255
		 */
		Name?: string | null;

		/** The timestamp when the content of the document was originally created. */
		ContentCreatedTimestamp?: Date | null;

		/** The timestamp when the content of the document was modified. */
		ContentModifiedTimestamp?: Date | null;

		/**
		 * The content type of the document.
		 * Min length: 1
		 * Max length: 128
		 */
		ContentType?: string | null;

		/**
		 * The size of the document, in bytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DocumentSizeInBytes?: number | null;

		/**
		 * The ID of the parent folder.
		 * Min length: 1
		 * Max length: 128
		 */
		ParentFolderId?: string | null;
	}
	export interface InitiateDocumentVersionUploadPostBodyFormProperties {

		/**
		 * The ID of the document.
		 * Min length: 1
		 * Max length: 128
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * The name of the document.
		 * Min length: 1
		 * Max length: 255
		 */
		Name: FormControl<string | null | undefined>,

		/** The timestamp when the content of the document was originally created. */
		ContentCreatedTimestamp: FormControl<Date | null | undefined>,

		/** The timestamp when the content of the document was modified. */
		ContentModifiedTimestamp: FormControl<Date | null | undefined>,

		/**
		 * The content type of the document.
		 * Min length: 1
		 * Max length: 128
		 */
		ContentType: FormControl<string | null | undefined>,

		/**
		 * The size of the document, in bytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DocumentSizeInBytes: FormControl<number | null | undefined>,

		/**
		 * The ID of the parent folder.
		 * Min length: 1
		 * Max length: 128
		 */
		ParentFolderId: FormControl<string | null | undefined>,
	}
	export function CreateInitiateDocumentVersionUploadPostBodyFormGroup() {
		return new FormGroup<InitiateDocumentVersionUploadPostBodyFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+-.@]+')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[\u0020-\u202D\u202F-\uFFFF]+')]),
			ContentCreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ContentModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			DocumentSizeInBytes: new FormControl<number | null | undefined>(undefined),
			ParentFolderId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+-.@]+')]),
		});

	}

	export interface SearchResourcesPostBody {

		/**
		 * The String to search for. Searches across different text fields based on request parameters. Use double quotes around the query string for exact phrase matches.
		 * Min length: 1
		 * Max length: 512
		 */
		QueryText?: string | null;

		/**
		 * Filter based on the text field type. A Folder has only a name and no content. A Comment has only content and no name. A Document or Document Version has a name and content
		 * Maximum items: 2
		 */
		QueryScopes?: Array<SearchQueryScopeType>;

		/**
		 * Filters based on the resource owner OrgId. This is a mandatory parameter when using Admin SigV4 credentials.
		 * Min length: 1
		 * Max length: 256
		 */
		OrganizationId?: string | null;

		/** A list of attributes to include in the response. Used to request fields that are not normally returned in a standard response. */
		AdditionalResponseFields?: Array<AdditionalResponseFieldType>;

		/** Filters results based on entity metadata. */
		Filters?: SearchResourcesPostBodyFilters;

		/**
		 * Order by results in one or more categories.
		 * Maximum items: 1
		 */
		OrderBy?: Array<SearchSortResult>;

		/**
		 * Max results count per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit?: number | null;

		/**
		 * The marker for the next set of results.
		 * Min length: 1
		 * Max length: 2048
		 */
		Marker?: string | null;
	}
	export interface SearchResourcesPostBodyFormProperties {

		/**
		 * The String to search for. Searches across different text fields based on request parameters. Use double quotes around the query string for exact phrase matches.
		 * Min length: 1
		 * Max length: 512
		 */
		QueryText: FormControl<string | null | undefined>,

		/**
		 * Filters based on the resource owner OrgId. This is a mandatory parameter when using Admin SigV4 credentials.
		 * Min length: 1
		 * Max length: 256
		 */
		OrganizationId: FormControl<string | null | undefined>,

		/**
		 * Max results count per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,

		/**
		 * The marker for the next set of results.
		 * Min length: 1
		 * Max length: 2048
		 */
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateSearchResourcesPostBodyFormGroup() {
		return new FormGroup<SearchResourcesPostBodyFormProperties>({
			QueryText: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('[\u0020-\uFFFF]+')]),
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[&\w+-.@]+')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[\d]+')]),
		});

	}

	export interface SearchResourcesPostBodyFilters {
		TextLocales?: Array<LanguageCodeType>;
		ContentCategories?: Array<ContentCategoryType>;
		ResourceTypes?: Array<SearchResourceType>;
		Labels?: Array<string>;
		Principals?: Array<SearchPrincipalType>;
		AncestorIds?: Array<string>;
		SearchCollectionTypes?: Array<SearchCollectionType>;
		SizeRange?: LongRangeType;
		CreatedRange?: DateRangeType;
		ModifiedRange?: DateRangeType;
	}
	export interface SearchResourcesPostBodyFiltersFormProperties {
	}
	export function CreateSearchResourcesPostBodyFiltersFormGroup() {
		return new FormGroup<SearchResourcesPostBodyFiltersFormProperties>({
		});

	}

}

