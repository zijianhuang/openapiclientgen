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

	export interface ActivateUserResponse {

		/** Describes a user. */
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

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Username?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EmailAddress?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		GivenName?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Surname?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		OrganizationId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		RootFolderId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		RecycleBinFolderId?: string | null;
		Status?: UserStatus | null;
		Type?: UserType | null;
		CreatedTimestamp?: Date | null;
		ModifiedTimestamp?: Date | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		TimeZoneId?: string | null;
		Locale?: UserLocale | null;

		/** Describes the storage for a user. */
		Storage?: UserStorageMetadata;
	}

	/** Describes a user. */
	export interface UserFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EmailAddress: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		GivenName: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Surname: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		OrganizationId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		RootFolderId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		RecycleBinFolderId: FormControl<string | null | undefined>,
		Status: FormControl<UserStatus | null | undefined>,
		Type: FormControl<UserType | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		ModifiedTimestamp: FormControl<Date | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		TimeZoneId: FormControl<string | null | undefined>,
		Locale: FormControl<UserLocale | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[&\w+-.@]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[\w\-+.]+(@[a-zA-Z0-9.\-]+\.[a-zA-Z]+)?')]),
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]),
			GivenName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			Surname: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[&\w+-.@]+')]),
			RootFolderId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			RecycleBinFolderId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			Status: new FormControl<UserStatus | null | undefined>(undefined),
			Type: new FormControl<UserType | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			TimeZoneId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			Locale: new FormControl<UserLocale | null | undefined>(undefined),
		});

	}

	export enum UserStatus { ACTIVE = 0, INACTIVE = 1, PENDING = 2 }

	export enum UserType { USER = 0, ADMIN = 1, POWERUSER = 2, MINIMALUSER = 3, WORKSPACESUSER = 4 }

	export enum UserLocale { en = 0, fr = 1, ko = 2, de = 3, es = 4, ja = 5, ru = 6, zh_CN = 7, zh_TW = 8, pt_BR = 9, _default = 10 }


	/** Describes the storage for a user. */
	export interface UserStorageMetadata {
		StorageUtilizedInBytes?: number | null;

		/** Describes the storage for a user. */
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

		/** Minimum: 0 */
		StorageAllocatedInBytes?: number | null;
		StorageType?: StorageRuleTypeStorageType | null;
	}

	/** Describes the storage for a user. */
	export interface StorageRuleTypeFormProperties {

		/** Minimum: 0 */
		StorageAllocatedInBytes: FormControl<number | null | undefined>,
		StorageType: FormControl<StorageRuleTypeStorageType | null | undefined>,
	}
	export function CreateStorageRuleTypeFormGroup() {
		return new FormGroup<StorageRuleTypeFormProperties>({
			StorageAllocatedInBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			StorageType: new FormControl<StorageRuleTypeStorageType | null | undefined>(undefined),
		});

	}

	export enum StorageRuleTypeStorageType { UNLIMITED = 0, QUOTA = 1 }

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

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		PrincipalId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		InviteePrincipalId?: string | null;
		Role?: ShareResultRole | null;
		Status?: ShareResultStatus | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ShareId?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		StatusMessage?: string | null;
	}

	/** Describes the share results of a resource. */
	export interface ShareResultFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		PrincipalId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		InviteePrincipalId: FormControl<string | null | undefined>,
		Role: FormControl<ShareResultRole | null | undefined>,
		Status: FormControl<ShareResultStatus | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ShareId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateShareResultFormGroup() {
		return new FormGroup<ShareResultFormProperties>({
			PrincipalId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[&\w+-.@]+')]),
			InviteePrincipalId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[&\w+-.@]+')]),
			Role: new FormControl<ShareResultRole | null | undefined>(undefined),
			Status: new FormControl<ShareResultStatus | null | undefined>(undefined),
			ShareId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			StatusMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(0)]),
		});

	}

	export enum ShareResultRole { VIEWER = 0, CONTRIBUTOR = 1, OWNER = 2, COOWNER = 3 }

	export enum ShareResultStatus { SUCCESS = 0, FAILURE = 1 }


	/** Describes the recipient type and ID, if available. */
	export interface SharePrincipal {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Id: string;

		/** Required */
		Type: SharePrincipalType;

		/** Required */
		Role: ShareResultRole;
	}

	/** Describes the recipient type and ID, if available. */
	export interface SharePrincipalFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<SharePrincipalType | null | undefined>,

		/** Required */
		Role: FormControl<ShareResultRole | null | undefined>,
	}
	export function CreateSharePrincipalFormGroup() {
		return new FormGroup<SharePrincipalFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[&\w+-.@]+')]),
			Type: new FormControl<SharePrincipalType | null | undefined>(undefined, [Validators.required]),
			Role: new FormControl<ShareResultRole | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SharePrincipalType { USER = 0, GROUP = 1, INVITE = 2, ANONYMOUS = 3, ORGANIZATION = 4 }

	export interface CreateCommentResponse {

		/** Describes a comment. */
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

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		CommentId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ParentId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ThreadId?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Text?: string | null;

		/** Describes a user. */
		Contributor?: User;
		CreatedTimestamp?: Date | null;
		Status?: CommentStatus | null;
		Visibility?: CommentVisibility | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		RecipientId?: string | null;
	}

	/** Describes a comment. */
	export interface CommentFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		CommentId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ParentId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ThreadId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Text: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		Status: FormControl<CommentStatus | null | undefined>,
		Visibility: FormControl<CommentVisibility | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		RecipientId: FormControl<string | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			CommentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			ParentId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			ThreadId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<CommentStatus | null | undefined>(undefined),
			Visibility: new FormControl<CommentVisibility | null | undefined>(undefined),
			RecipientId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[&\w+-.@]+')]),
		});

	}

	export enum CommentStatus { DRAFT = 0, PUBLISHED = 1, DELETED = 2 }

	export enum CommentVisibility { PUBLIC = 0, PRIVATE = 1 }

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

		/** Describes a folder. */
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

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		CreatorId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId?: string | null;
		CreatedTimestamp?: Date | null;
		ModifiedTimestamp?: Date | null;
		ResourceState?: FolderMetadataResourceState | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Signature?: string | null;

		/** Maximum items: 20 */
		Labels?: Array<string>;
		Size?: number | null;
		LatestVersionSize?: number | null;
	}

	/** Describes a folder. */
	export interface FolderMetadataFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		CreatorId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		ModifiedTimestamp: FormControl<Date | null | undefined>,
		ResourceState: FormControl<FolderMetadataResourceState | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Signature: FormControl<string | null | undefined>,
		Size: FormControl<number | null | undefined>,
		LatestVersionSize: FormControl<number | null | undefined>,
	}
	export function CreateFolderMetadataFormGroup() {
		return new FormGroup<FolderMetadataFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[\u0020-\u202D\u202F-\uFFFF]+')]),
			CreatorId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[&\w+-.@]+')]),
			ParentFolderId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ResourceState: new FormControl<FolderMetadataResourceState | null | undefined>(undefined),
			Signature: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(0), Validators.pattern('[&\w+-.@]+')]),
			Size: new FormControl<number | null | undefined>(undefined),
			LatestVersionSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FolderMetadataResourceState { ACTIVE = 0, RESTORING = 1, RECYCLING = 2, RECYCLED = 3 }

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

		/** Describes a subscription. */
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

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		SubscriptionId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EndPoint?: string | null;
		Protocol?: SubscriptionProtocol | null;
	}

	/** Describes a subscription. */
	export interface SubscriptionFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		SubscriptionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EndPoint: FormControl<string | null | undefined>,
		Protocol: FormControl<SubscriptionProtocol | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			SubscriptionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[&\w+-.@]+')]),
			EndPoint: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			Protocol: new FormControl<SubscriptionProtocol | null | undefined>(undefined),
		});

	}

	export enum SubscriptionProtocol { HTTPS = 0 }

	export interface TooManySubscriptionsException {
	}
	export interface TooManySubscriptionsExceptionFormProperties {
	}
	export function CreateTooManySubscriptionsExceptionFormGroup() {
		return new FormGroup<TooManySubscriptionsExceptionFormProperties>({
		});

	}

	export interface CreateUserResponse {

		/** Describes a user. */
		User?: User;
	}
	export interface CreateUserResponseFormProperties {
	}
	export function CreateCreateUserResponseFormGroup() {
		return new FormGroup<CreateUserResponseFormProperties>({
		});

	}

	export enum StorageType { UNLIMITED = 0, QUOTA = 1 }

	export interface DeleteCustomMetadataResponse {
	}
	export interface DeleteCustomMetadataResponseFormProperties {
	}
	export function CreateDeleteCustomMetadataResponseFormGroup() {
		return new FormGroup<DeleteCustomMetadataResponseFormProperties>({
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

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker?: string | null;
	}
	export interface DescribeActivitiesResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeActivitiesResponseFormGroup() {
		return new FormGroup<DescribeActivitiesResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\u0000-\u00FF]+')]),
		});

	}


	/** Describes the activity information. */
	export interface Activity {
		Type?: ActivityType | null;
		TimeStamp?: Date | null;
		IsIndirectActivity?: boolean | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		OrganizationId?: string | null;

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

	/** Describes the activity information. */
	export interface ActivityFormProperties {
		Type: FormControl<ActivityType | null | undefined>,
		TimeStamp: FormControl<Date | null | undefined>,
		IsIndirectActivity: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		OrganizationId: FormControl<string | null | undefined>,
	}
	export function CreateActivityFormGroup() {
		return new FormGroup<ActivityFormProperties>({
			Type: new FormControl<ActivityType | null | undefined>(undefined),
			TimeStamp: new FormControl<Date | null | undefined>(undefined),
			IsIndirectActivity: new FormControl<boolean | null | undefined>(undefined),
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[&\w+-.@]+')]),
		});

	}

	export enum ActivityType { DOCUMENT_CHECKED_IN = 0, DOCUMENT_CHECKED_OUT = 1, DOCUMENT_RENAMED = 2, DOCUMENT_VERSION_UPLOADED = 3, DOCUMENT_VERSION_DELETED = 4, DOCUMENT_VERSION_VIEWED = 5, DOCUMENT_VERSION_DOWNLOADED = 6, DOCUMENT_RECYCLED = 7, DOCUMENT_RESTORED = 8, DOCUMENT_REVERTED = 9, DOCUMENT_SHARED = 10, DOCUMENT_UNSHARED = 11, DOCUMENT_SHARE_PERMISSION_CHANGED = 12, DOCUMENT_SHAREABLE_LINK_CREATED = 13, DOCUMENT_SHAREABLE_LINK_REMOVED = 14, DOCUMENT_SHAREABLE_LINK_PERMISSION_CHANGED = 15, DOCUMENT_MOVED = 16, DOCUMENT_COMMENT_ADDED = 17, DOCUMENT_COMMENT_DELETED = 18, DOCUMENT_ANNOTATION_ADDED = 19, DOCUMENT_ANNOTATION_DELETED = 20, FOLDER_CREATED = 21, FOLDER_DELETED = 22, FOLDER_RENAMED = 23, FOLDER_RECYCLED = 24, FOLDER_RESTORED = 25, FOLDER_SHARED = 26, FOLDER_UNSHARED = 27, FOLDER_SHARE_PERMISSION_CHANGED = 28, FOLDER_SHAREABLE_LINK_CREATED = 29, FOLDER_SHAREABLE_LINK_REMOVED = 30, FOLDER_SHAREABLE_LINK_PERMISSION_CHANGED = 31, FOLDER_MOVED = 32 }


	/** Describes the metadata of the user. */
	export interface UserMetadata {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Username?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		GivenName?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Surname?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EmailAddress?: string | null;
	}

	/** Describes the metadata of the user. */
	export interface UserMetadataFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		GivenName: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Surname: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateUserMetadataFormGroup() {
		return new FormGroup<UserMetadataFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[&\w+-.@]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[\w\-+.]+(@[a-zA-Z0-9.\-]+\.[a-zA-Z]+)?')]),
			GivenName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			Surname: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]),
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

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id?: string | null;
		Name?: string | null;
	}

	/** Describes the metadata of a user group. */
	export interface GroupMetadataFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGroupMetadataFormGroup() {
		return new FormGroup<GroupMetadataFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[&\w+-.@]+')]),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the metadata of a resource. */
	export interface ResourceMetadata {
		Type?: ResourceMetadataType | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		OriginalName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		VersionId?: string | null;

		/** Describes the metadata of the user. */
		Owner?: UserMetadata;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ParentId?: string | null;
	}

	/** Describes the metadata of a resource. */
	export interface ResourceMetadataFormProperties {
		Type: FormControl<ResourceMetadataType | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		OriginalName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		VersionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ParentId: FormControl<string | null | undefined>,
	}
	export function CreateResourceMetadataFormGroup() {
		return new FormGroup<ResourceMetadataFormProperties>({
			Type: new FormControl<ResourceMetadataType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[\u0020-\u202D\u202F-\uFFFF]+')]),
			OriginalName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[\u0020-\u202D\u202F-\uFFFF]+')]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			VersionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			ParentId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
		});

	}

	export enum ResourceMetadataType { FOLDER = 0, DOCUMENT = 1 }


	/** Describes the metadata of a comment. */
	export interface CommentMetadata {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		CommentId?: string | null;

		/** Describes a user. */
		Contributor?: User;
		CreatedTimestamp?: Date | null;
		CommentStatus?: CommentStatus | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		RecipientId?: string | null;
	}

	/** Describes the metadata of a comment. */
	export interface CommentMetadataFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		CommentId: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		CommentStatus: FormControl<CommentStatus | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		RecipientId: FormControl<string | null | undefined>,
	}
	export function CreateCommentMetadataFormGroup() {
		return new FormGroup<CommentMetadataFormProperties>({
			CommentId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			CommentStatus: new FormControl<CommentStatus | null | undefined>(undefined),
			RecipientId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[&\w+-.@]+')]),
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

	export interface DescribeCommentsResponse {
		Comments?: Array<Comment>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker?: string | null;
	}
	export interface DescribeCommentsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCommentsResponseFormGroup() {
		return new FormGroup<DescribeCommentsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\u0000-\u00FF]+')]),
		});

	}

	export interface DescribeDocumentVersionsResponse {
		DocumentVersions?: Array<DocumentVersionMetadata>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker?: string | null;
	}
	export interface DescribeDocumentVersionsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDocumentVersionsResponseFormGroup() {
		return new FormGroup<DescribeDocumentVersionsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** Describes a version of a document. */
	export interface DocumentVersionMetadata {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ContentType?: string | null;
		Size?: number | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Signature?: string | null;
		Status?: DocumentVersionMetadataStatus | null;
		CreatedTimestamp?: Date | null;
		ModifiedTimestamp?: Date | null;
		ContentCreatedTimestamp?: Date | null;
		ContentModifiedTimestamp?: Date | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		CreatorId?: string | null;
		Thumbnail?: DocumentThumbnailUrlMap;
		Source?: DocumentSourceUrlMap;
	}

	/** Describes a version of a document. */
	export interface DocumentVersionMetadataFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ContentType: FormControl<string | null | undefined>,
		Size: FormControl<number | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Signature: FormControl<string | null | undefined>,
		Status: FormControl<DocumentVersionMetadataStatus | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		ModifiedTimestamp: FormControl<Date | null | undefined>,
		ContentCreatedTimestamp: FormControl<Date | null | undefined>,
		ContentModifiedTimestamp: FormControl<Date | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		CreatorId: FormControl<string | null | undefined>,
	}
	export function CreateDocumentVersionMetadataFormGroup() {
		return new FormGroup<DocumentVersionMetadataFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[\u0020-\u202D\u202F-\uFFFF]+')]),
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			Size: new FormControl<number | null | undefined>(undefined),
			Signature: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(0), Validators.pattern('[&\w+-.@]+')]),
			Status: new FormControl<DocumentVersionMetadataStatus | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ContentCreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ContentModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			CreatorId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[&\w+-.@]+')]),
		});

	}

	export enum DocumentVersionMetadataStatus { INITIALIZED = 0, ACTIVE = 1 }

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

	export interface DescribeFolderContentsResponse {
		Folders?: Array<FolderMetadata>;
		Documents?: Array<DocumentMetadata>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker?: string | null;
	}
	export interface DescribeFolderContentsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFolderContentsResponseFormGroup() {
		return new FormGroup<DescribeFolderContentsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** Describes the document. */
	export interface DocumentMetadata {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		CreatorId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId?: string | null;
		CreatedTimestamp?: Date | null;
		ModifiedTimestamp?: Date | null;

		/** Describes a version of a document. */
		LatestVersionMetadata?: DocumentVersionMetadata;
		ResourceState?: FolderMetadataResourceState | null;

		/** Maximum items: 20 */
		Labels?: Array<string>;
	}

	/** Describes the document. */
	export interface DocumentMetadataFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		CreatorId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		ModifiedTimestamp: FormControl<Date | null | undefined>,
		ResourceState: FormControl<FolderMetadataResourceState | null | undefined>,
	}
	export function CreateDocumentMetadataFormGroup() {
		return new FormGroup<DocumentMetadataFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			CreatorId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[&\w+-.@]+')]),
			ParentFolderId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ResourceState: new FormControl<FolderMetadataResourceState | null | undefined>(undefined),
		});

	}

	export interface DescribeGroupsResponse {
		Groups?: Array<GroupMetadata>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker?: string | null;
	}
	export interface DescribeGroupsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGroupsResponseFormGroup() {
		return new FormGroup<DescribeGroupsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\u0000-\u00FF]+')]),
		});

	}

	export interface DescribeNotificationSubscriptionsResponse {

		/** Maximum items: 256 */
		Subscriptions?: Array<Subscription>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker?: string | null;
	}
	export interface DescribeNotificationSubscriptionsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeNotificationSubscriptionsResponseFormGroup() {
		return new FormGroup<DescribeNotificationSubscriptionsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}

	export interface DescribeResourcePermissionsResponse {
		Principals?: Array<Principal>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker?: string | null;
	}
	export interface DescribeResourcePermissionsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResourcePermissionsResponseFormGroup() {
		return new FormGroup<DescribeResourcePermissionsResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** Describes a resource. */
	export interface Principal {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id?: string | null;
		Type?: SharePrincipalType | null;
		Roles?: Array<PermissionInfo>;
	}

	/** Describes a resource. */
	export interface PrincipalFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
		Type: FormControl<SharePrincipalType | null | undefined>,
	}
	export function CreatePrincipalFormGroup() {
		return new FormGroup<PrincipalFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[&\w+-.@]+')]),
			Type: new FormControl<SharePrincipalType | null | undefined>(undefined),
		});

	}


	/** Describes the permissions. */
	export interface PermissionInfo {
		Role?: ShareResultRole | null;
		Type?: PermissionInfoType | null;
	}

	/** Describes the permissions. */
	export interface PermissionInfoFormProperties {
		Role: FormControl<ShareResultRole | null | undefined>,
		Type: FormControl<PermissionInfoType | null | undefined>,
	}
	export function CreatePermissionInfoFormGroup() {
		return new FormGroup<PermissionInfoFormProperties>({
			Role: new FormControl<ShareResultRole | null | undefined>(undefined),
			Type: new FormControl<PermissionInfoType | null | undefined>(undefined),
		});

	}

	export enum PermissionInfoType { DIRECT = 0, INHERITED = 1 }

	export interface DescribeRootFoldersResponse {
		Folders?: Array<FolderMetadata>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker?: string | null;
	}
	export interface DescribeRootFoldersResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRootFoldersResponseFormGroup() {
		return new FormGroup<DescribeRootFoldersResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}

	export interface DescribeUsersResponse {
		Users?: Array<User>;
		TotalNumberOfUsers?: number | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker?: string | null;
	}
	export interface DescribeUsersResponseFormProperties {
		TotalNumberOfUsers: FormControl<number | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUsersResponseFormGroup() {
		return new FormGroup<DescribeUsersResponseFormProperties>({
			TotalNumberOfUsers: new FormControl<number | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
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

		/** Describes a user. */
		User?: User;
	}
	export interface GetCurrentUserResponseFormProperties {
	}
	export function CreateGetCurrentUserResponseFormGroup() {
		return new FormGroup<GetCurrentUserResponseFormProperties>({
		});

	}

	export interface GetDocumentResponse {

		/** Describes the document. */
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

	export interface InvalidPasswordException {
	}
	export interface InvalidPasswordExceptionFormProperties {
	}
	export function CreateInvalidPasswordExceptionFormGroup() {
		return new FormGroup<InvalidPasswordExceptionFormProperties>({
		});

	}

	export interface GetDocumentPathResponse {

		/** Describes the path information of a resource. */
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

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;
	}

	/** Describes the resource path. */
	export interface ResourcePathComponentFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateResourcePathComponentFormGroup() {
		return new FormGroup<ResourcePathComponentFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[&\w+-.@]+')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[\u0020-\u202D\u202F-\uFFFF]+')]),
		});

	}

	export interface GetDocumentVersionResponse {

		/** Describes a version of a document. */
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

		/** Describes a folder. */
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

		/** Describes the path information of a resource. */
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

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker?: string | null;
	}
	export interface GetResourcesResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Marker: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcesResponseFormGroup() {
		return new FormGroup<GetResourcesResponseFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}

	export interface InitiateDocumentVersionUploadResponse {

		/** Describes the document. */
		Metadata?: DocumentMetadata;

		/** Describes the upload. */
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

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		UploadUrl?: string | null;
		SignedHeaders?: SignedHeaderMap;
	}

	/** Describes the upload. */
	export interface UploadMetadataFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		UploadUrl: FormControl<string | null | undefined>,
	}
	export function CreateUploadMetadataFormGroup() {
		return new FormGroup<UploadMetadataFormProperties>({
			UploadUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
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

	export interface InvalidOperationException {
	}
	export interface InvalidOperationExceptionFormProperties {
	}
	export function CreateInvalidOperationExceptionFormGroup() {
		return new FormGroup<InvalidOperationExceptionFormProperties>({
		});

	}

	export interface UpdateUserResponse {

		/** Describes a user. */
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

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		EmailMessage?: string | null;
	}

	/** Set of options which defines notification preferences of given action. */
	export interface NotificationOptionsFormProperties {
		SendEmail: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		EmailMessage: FormControl<string | null | undefined>,
	}
	export function CreateNotificationOptionsFormGroup() {
		return new FormGroup<NotificationOptionsFormProperties>({
			SendEmail: new FormControl<boolean | null | undefined>(undefined),
			EmailMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(0)]),
		});

	}

	export interface AddResourcePermissionsRequest {

		/** Required */
		Principals: Array<SharePrincipal>;

		/** Set of options which defines notification preferences of given action. */
		NotificationOptions?: NotificationOptions;
	}
	export interface AddResourcePermissionsRequestFormProperties {
	}
	export function CreateAddResourcePermissionsRequestFormGroup() {
		return new FormGroup<AddResourcePermissionsRequestFormProperties>({
		});

	}

	export enum BooleanEnumType { TRUE = 0, FALSE = 1 }

	export enum CommentStatusType { DRAFT = 0, PUBLISHED = 1, DELETED = 2 }

	export enum CommentVisibilityType { PUBLIC = 0, PRIVATE = 1 }

	export interface CreateCommentRequest {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ParentId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ThreadId?: string | null;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Text: string;
		Visibility?: CommentVisibility | null;
		NotifyCollaborators?: boolean | null;
	}
	export interface CreateCommentRequestFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ParentId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ThreadId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Text: FormControl<string | null | undefined>,
		Visibility: FormControl<CommentVisibility | null | undefined>,
		NotifyCollaborators: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateCommentRequestFormGroup() {
		return new FormGroup<CreateCommentRequestFormProperties>({
			ParentId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			ThreadId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			Visibility: new FormControl<CommentVisibility | null | undefined>(undefined),
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

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId: string;
	}
	export interface CreateFolderRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId: FormControl<string | null | undefined>,
	}
	export function CreateCreateFolderRequestFormGroup() {
		return new FormGroup<CreateFolderRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[\u0020-\u202D\u202F-\uFFFF]+')]),
			ParentFolderId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
		});

	}

	export interface CreateLabelsRequest {

		/**
		 * Required
		 * Maximum items: 20
		 */
		Labels: Array<string>;
	}
	export interface CreateLabelsRequestFormProperties {
	}
	export function CreateCreateLabelsRequestFormGroup() {
		return new FormGroup<CreateLabelsRequestFormProperties>({
		});

	}

	export enum SubscriptionProtocolType { HTTPS = 0 }

	export enum SubscriptionType { ALL = 0 }

	export interface CreateNotificationSubscriptionRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Endpoint: string;

		/** Required */
		Protocol: SubscriptionProtocol;

		/** Required */
		SubscriptionType: SubscriptionType;
	}
	export interface CreateNotificationSubscriptionRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Endpoint: FormControl<string | null | undefined>,

		/** Required */
		Protocol: FormControl<SubscriptionProtocol | null | undefined>,

		/** Required */
		SubscriptionType: FormControl<SubscriptionType | null | undefined>,
	}
	export function CreateCreateNotificationSubscriptionRequestFormGroup() {
		return new FormGroup<CreateNotificationSubscriptionRequestFormProperties>({
			Endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			Protocol: new FormControl<SubscriptionProtocol | null | undefined>(undefined, [Validators.required]),
			SubscriptionType: new FormControl<SubscriptionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUserRequest {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		OrganizationId?: string | null;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Username: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EmailAddress?: string | null;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		GivenName: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Surname: string;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 4
		 */
		Password: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		TimeZoneId?: string | null;

		/** Describes the storage for a user. */
		StorageRule?: StorageRuleType;
	}
	export interface CreateUserRequestFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		OrganizationId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EmailAddress: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		GivenName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Surname: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 4
		 */
		Password: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		TimeZoneId: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[&\w+-.@]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[\w\-+.]+(@[a-zA-Z0-9.\-]+\.[a-zA-Z]+)?')]),
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]),
			GivenName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			Surname: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(4), Validators.pattern('[\u0020-\u00FF]+')]),
			TimeZoneId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
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

	export enum ResourceSortType { DATE = 0, NAME = 1 }

	export enum OrderType { ASCENDING = 0, DESCENDING = 1 }

	export enum FolderContentType { ALL = 0, DOCUMENT = 1, FOLDER = 2 }

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

	export enum UserFilterType { ALL = 0, ACTIVE_PENDING = 1 }

	export enum UserSortType { USER_NAME = 0, FULL_NAME = 1, STORAGE_LIMIT = 2, USER_STATUS = 3, STORAGE_USED = 4 }

	export interface DescribeUsersRequest {
	}
	export interface DescribeUsersRequestFormProperties {
	}
	export function CreateDescribeUsersRequestFormGroup() {
		return new FormGroup<DescribeUsersRequestFormProperties>({
		});

	}

	export enum ResourceStateType { ACTIVE = 0, RESTORING = 1, RECYCLING = 2, RECYCLED = 3 }

	export enum DocumentSourceType { ORIGINAL = 0, WITH_COMMENTS = 1 }

	export enum DocumentStatusType { INITIALIZED = 0, ACTIVE = 1 }

	export enum DocumentThumbnailType { SMALL = 0, SMALL_HQ = 1, LARGE = 2 }

	export enum DocumentVersionStatus { ACTIVE = 0 }

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

	export enum ResourceCollectionType { SHARED_WITH_ME = 0 }

	export interface GetResourcesRequest {
	}
	export interface GetResourcesRequestFormProperties {
	}
	export function CreateGetResourcesRequestFormGroup() {
		return new FormGroup<GetResourcesRequestFormProperties>({
		});

	}

	export interface InitiateDocumentVersionUploadRequest {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;
		ContentCreatedTimestamp?: Date | null;
		ContentModifiedTimestamp?: Date | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ContentType?: string | null;
		DocumentSizeInBytes?: number | null;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId: string;
	}
	export interface InitiateDocumentVersionUploadRequestFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		ContentCreatedTimestamp: FormControl<Date | null | undefined>,
		ContentModifiedTimestamp: FormControl<Date | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ContentType: FormControl<string | null | undefined>,
		DocumentSizeInBytes: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId: FormControl<string | null | undefined>,
	}
	export function CreateInitiateDocumentVersionUploadRequestFormGroup() {
		return new FormGroup<InitiateDocumentVersionUploadRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[\u0020-\u202D\u202F-\uFFFF]+')]),
			ContentCreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ContentModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			DocumentSizeInBytes: new FormControl<number | null | undefined>(undefined),
			ParentFolderId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
		});

	}

	export enum LocaleType { en = 0, fr = 1, ko = 2, de = 3, es = 4, ja = 5, ru = 6, zh_CN = 7, zh_TW = 8, pt_BR = 9, _default = 10 }

	export enum RoleType { VIEWER = 0, CONTRIBUTOR = 1, OWNER = 2, COOWNER = 3 }

	export enum RolePermissionType { DIRECT = 0, INHERITED = 1 }

	export enum PrincipalType { USER = 0, GROUP = 1, INVITE = 2, ANONYMOUS = 3, ORGANIZATION = 4 }

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

	export enum ResourceType { FOLDER = 0, DOCUMENT = 1 }

	export enum ShareStatusType { SUCCESS = 0, FAILURE = 1 }

	export interface UpdateDocumentRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId?: string | null;
		ResourceState?: FolderMetadataResourceState | null;
	}
	export interface UpdateDocumentRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId: FormControl<string | null | undefined>,
		ResourceState: FormControl<FolderMetadataResourceState | null | undefined>,
	}
	export function CreateUpdateDocumentRequestFormGroup() {
		return new FormGroup<UpdateDocumentRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[\u0020-\u202D\u202F-\uFFFF]+')]),
			ParentFolderId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			ResourceState: new FormControl<FolderMetadataResourceState | null | undefined>(undefined),
		});

	}

	export interface UpdateDocumentVersionRequest {
		VersionStatus?: DocumentVersionStatus | null;
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

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId?: string | null;
		ResourceState?: FolderMetadataResourceState | null;
	}
	export interface UpdateFolderRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId: FormControl<string | null | undefined>,
		ResourceState: FormControl<FolderMetadataResourceState | null | undefined>,
	}
	export function CreateUpdateFolderRequestFormGroup() {
		return new FormGroup<UpdateFolderRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[\u0020-\u202D\u202F-\uFFFF]+')]),
			ParentFolderId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			ResourceState: new FormControl<FolderMetadataResourceState | null | undefined>(undefined),
		});

	}

	export interface UpdateUserRequest {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		GivenName?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Surname?: string | null;
		Type?: UserType | null;

		/** Describes the storage for a user. */
		StorageRule?: StorageRuleType;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		TimeZoneId?: string | null;
		Locale?: UpdateUserRequestLocale | null;
		GrantPoweruserPrivileges?: BooleanEnumType | null;
	}
	export interface UpdateUserRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		GivenName: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Surname: FormControl<string | null | undefined>,
		Type: FormControl<UserType | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		TimeZoneId: FormControl<string | null | undefined>,
		Locale: FormControl<UpdateUserRequestLocale | null | undefined>,
		GrantPoweruserPrivileges: FormControl<BooleanEnumType | null | undefined>,
	}
	export function CreateUpdateUserRequestFormGroup() {
		return new FormGroup<UpdateUserRequestFormProperties>({
			GivenName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			Surname: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			Type: new FormControl<UserType | null | undefined>(undefined),
			TimeZoneId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			Locale: new FormControl<UpdateUserRequestLocale | null | undefined>(undefined),
			GrantPoweruserPrivileges: new FormControl<BooleanEnumType | null | undefined>(undefined),
		});

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
		GetDocumentVersion(DocumentId: string, VersionId: string, fields: string | null | undefined, includeCustomMetadata: boolean | null | undefined): Observable<GetDocumentVersionResponse> {
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
		DescribeResourcePermissions(ResourceId: string, principalId: string | null | undefined, limit: number | null | undefined, marker: string | null | undefined): Observable<DescribeResourcePermissionsResponse> {
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
		CreateCustomMetadata(ResourceId: string, versionid: string | null | undefined, requestBody: CreateCustomMetadataPutBody): Observable<CreateCustomMetadataResponse> {
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
		DeleteLabels(ResourceId: string, labels: Array<string> | null | undefined, deleteAll: boolean | null | undefined): Observable<DeleteLabelsResponse> {
			return this.http.delete<DeleteLabelsResponse>(this.baseUri + 'api/v1/resources/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '/labels&' + labels?.map(z => `labels=${encodeURIComponent(z)}`).join('&') + '&deleteAll=' + deleteAll, {});
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
		DescribeNotificationSubscriptions(OrganizationId: string, marker: string | null | undefined, limit: number | null | undefined): Observable<DescribeNotificationSubscriptionsResponse> {
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
		DescribeUsers(organizationId: string | null | undefined, userIds: string | null | undefined, query: string | null | undefined, include: UserFilterType | null | undefined, order: OrderType | null | undefined, sort: UserSortType | null | undefined, marker: string | null | undefined, limit: number | null | undefined, fields: string | null | undefined, Limit: string | null | undefined, Marker: string | null | undefined): Observable<DescribeUsersResponse> {
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
		GetDocument(DocumentId: string, includeCustomMetadata: boolean | null | undefined): Observable<GetDocumentResponse> {
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
		GetFolder(FolderId: string, includeCustomMetadata: boolean | null | undefined): Observable<GetFolderResponse> {
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
		DescribeFolderContents(FolderId: string, sort: ResourceSortType | null | undefined, order: OrderType | null | undefined, limit: number | null | undefined, marker: string | null | undefined, type: FolderContentType | null | undefined, include: string | null | undefined, Limit: string | null | undefined, Marker: string | null | undefined): Observable<DescribeFolderContentsResponse> {
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
		DescribeActivities(startTime: Date | null | undefined, endTime: Date | null | undefined, organizationId: string | null | undefined, activityTypes: string | null | undefined, resourceId: string | null | undefined, userId: string | null | undefined, includeIndirectActivities: boolean | null | undefined, limit: number | null | undefined, marker: string | null | undefined): Observable<DescribeActivitiesResponse> {
			return this.http.get<DescribeActivitiesResponse>(this.baseUri + 'api/v1/activities?startTime=' + startTime?.toISOString() + '&endTime=' + endTime?.toISOString() + '&organizationId=' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '&activityTypes=' + (activityTypes == null ? '' : encodeURIComponent(activityTypes)) + '&resourceId=' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&includeIndirectActivities=' + includeIndirectActivities + '&limit=' + limit + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)), {});
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
		DescribeComments(DocumentId: string, VersionId: string, limit: number | null | undefined, marker: string | null | undefined): Observable<DescribeCommentsResponse> {
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
		DescribeDocumentVersions(DocumentId: string, marker: string | null | undefined, limit: number | null | undefined, include: string | null | undefined, fields: string | null | undefined, Limit: string | null | undefined, Marker: string | null | undefined): Observable<DescribeDocumentVersionsResponse> {
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
		DescribeGroups(searchQuery: string, organizationId: string | null | undefined, marker: string | null | undefined, limit: number | null | undefined): Observable<DescribeGroupsResponse> {
			return this.http.get<DescribeGroupsResponse>(this.baseUri + 'api/v1/groups#searchQuery?searchQuery=' + (searchQuery == null ? '' : encodeURIComponent(searchQuery)) + '&organizationId=' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&limit=' + limit, {});
		}

		/**
		 * <p>Describes the current user's special folders; the <code>RootFolder</code> and the <code>RecycleBin</code>. <code>RootFolder</code> is the root of user's files and folders and <code>RecycleBin</code> is the root of recycled items. This is not a valid action for SigV4 (administrative API) clients.</p> <p>This action requires an authentication token. To get an authentication token, register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access Control for User Applications</a> in the <i>Amazon WorkDocs Developer Guide</i>.</p>
		 * Get api/v1/me/root#Authentication
		 * @param {number} limit The maximum number of items to return.
		 * @param {string} marker The marker for the next set of results. (You received this marker from a previous call.)
		 * @return {DescribeRootFoldersResponse} Success
		 */
		DescribeRootFolders(limit: number | null | undefined, marker: string | null | undefined): Observable<DescribeRootFoldersResponse> {
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
		GetDocumentPath(DocumentId: string, limit: number | null | undefined, fields: string | null | undefined, marker: string | null | undefined): Observable<GetDocumentPathResponse> {
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
		GetFolderPath(FolderId: string, limit: number | null | undefined, fields: string | null | undefined, marker: string | null | undefined): Observable<GetFolderPathResponse> {
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
		 * @param {string} PrincipalId The principal ID of the resource.
		 * @param {SharePrincipalType} type The principal type of the resource.
		 * @return {void} 
		 */
		RemoveResourcePermission(ResourceId: string, PrincipalId: string, type: SharePrincipalType | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/resources/' + (ResourceId == null ? '' : encodeURIComponent(ResourceId)) + '/permissions/' + (PrincipalId == null ? '' : encodeURIComponent(PrincipalId)) + '&type=' + type, { observe: 'response', responseType: 'text' });
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

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		EmailMessage?: string | null;
	}
	export interface AddResourcePermissionsPostBodyNotificationOptionsFormProperties {
		SendEmail: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		EmailMessage: FormControl<string | null | undefined>,
	}
	export function CreateAddResourcePermissionsPostBodyNotificationOptionsFormGroup() {
		return new FormGroup<AddResourcePermissionsPostBodyNotificationOptionsFormProperties>({
			SendEmail: new FormControl<boolean | null | undefined>(undefined),
			EmailMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(0)]),
		});

	}

	export interface CreateCommentPostBody {

		/**
		 * The ID of the parent comment.
		 * Max length: 128
		 * Min length: 1
		 */
		ParentId?: string | null;

		/**
		 * The ID of the root comment in the thread.
		 * Max length: 128
		 * Min length: 1
		 */
		ThreadId?: string | null;

		/**
		 * The text of the comment.
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Text: string;

		/** The visibility of the comment. Options are either PRIVATE, where the comment is visible only to the comment author and document owner and co-owners, or PUBLIC, where the comment is visible to document owners, co-owners, and contributors. */
		Visibility?: CommentVisibility | null;

		/** Set this parameter to TRUE to send an email out to the document collaborators after the comment is created. */
		NotifyCollaborators?: boolean | null;
	}
	export interface CreateCommentPostBodyFormProperties {

		/**
		 * The ID of the parent comment.
		 * Max length: 128
		 * Min length: 1
		 */
		ParentId: FormControl<string | null | undefined>,

		/**
		 * The ID of the root comment in the thread.
		 * Max length: 128
		 * Min length: 1
		 */
		ThreadId: FormControl<string | null | undefined>,

		/**
		 * The text of the comment.
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Text: FormControl<string | null | undefined>,

		/** The visibility of the comment. Options are either PRIVATE, where the comment is visible only to the comment author and document owner and co-owners, or PUBLIC, where the comment is visible to document owners, co-owners, and contributors. */
		Visibility: FormControl<CommentVisibility | null | undefined>,

		/** Set this parameter to TRUE to send an email out to the document collaborators after the comment is created. */
		NotifyCollaborators: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateCommentPostBodyFormGroup() {
		return new FormGroup<CreateCommentPostBodyFormProperties>({
			ParentId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			ThreadId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
			Visibility: new FormControl<CommentVisibility | null | undefined>(undefined),
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
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * The ID of the parent folder.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId: string;
	}
	export interface CreateFolderPostBodyFormProperties {

		/**
		 * The name of the new folder.
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The ID of the parent folder.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId: FormControl<string | null | undefined>,
	}
	export function CreateCreateFolderPostBodyFormGroup() {
		return new FormGroup<CreateFolderPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[\u0020-\u202D\u202F-\uFFFF]+')]),
			ParentFolderId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
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
		 * Max length: 256
		 * Min length: 1
		 */
		Endpoint: string;

		/**
		 * The protocol to use. The supported value is https, which delivers JSON-encoded messages using HTTPS POST.
		 * Required
		 */
		Protocol: SubscriptionProtocol;

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
		 * Max length: 256
		 * Min length: 1
		 */
		Endpoint: FormControl<string | null | undefined>,

		/**
		 * The protocol to use. The supported value is https, which delivers JSON-encoded messages using HTTPS POST.
		 * Required
		 */
		Protocol: FormControl<SubscriptionProtocol | null | undefined>,

		/**
		 * The notification type.
		 * Required
		 */
		SubscriptionType: FormControl<SubscriptionType | null | undefined>,
	}
	export function CreateCreateNotificationSubscriptionPostBodyFormGroup() {
		return new FormGroup<CreateNotificationSubscriptionPostBodyFormProperties>({
			Endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			Protocol: new FormControl<SubscriptionProtocol | null | undefined>(undefined, [Validators.required]),
			SubscriptionType: new FormControl<SubscriptionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUserPostBody {

		/**
		 * The ID of the organization.
		 * Max length: 256
		 * Min length: 1
		 */
		OrganizationId?: string | null;

		/**
		 * The login name of the user.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Username: string;

		/**
		 * The email address of the user.
		 * Max length: 256
		 * Min length: 1
		 */
		EmailAddress?: string | null;

		/**
		 * The given name of the user.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		GivenName: string;

		/**
		 * The surname of the user.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Surname: string;

		/**
		 * The password of the user.
		 * Required
		 * Max length: 32
		 * Min length: 4
		 */
		Password: string;

		/**
		 * The time zone ID of the user.
		 * Max length: 256
		 * Min length: 1
		 */
		TimeZoneId?: string | null;

		/** Describes the storage for a user. */
		StorageRule?: CreateUserPostBodyStorageRule;
	}
	export interface CreateUserPostBodyFormProperties {

		/**
		 * The ID of the organization.
		 * Max length: 256
		 * Min length: 1
		 */
		OrganizationId: FormControl<string | null | undefined>,

		/**
		 * The login name of the user.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * The email address of the user.
		 * Max length: 256
		 * Min length: 1
		 */
		EmailAddress: FormControl<string | null | undefined>,

		/**
		 * The given name of the user.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		GivenName: FormControl<string | null | undefined>,

		/**
		 * The surname of the user.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Surname: FormControl<string | null | undefined>,

		/**
		 * The password of the user.
		 * Required
		 * Max length: 32
		 * Min length: 4
		 */
		Password: FormControl<string | null | undefined>,

		/**
		 * The time zone ID of the user.
		 * Max length: 256
		 * Min length: 1
		 */
		TimeZoneId: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserPostBodyFormGroup() {
		return new FormGroup<CreateUserPostBodyFormProperties>({
			OrganizationId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[&\w+-.@]+')]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[\w\-+.]+(@[a-zA-Z0-9.\-]+\.[a-zA-Z]+)?')]),
			EmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')]),
			GivenName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			Surname: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(4), Validators.pattern('[\u0020-\u00FF]+')]),
			TimeZoneId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export interface CreateUserPostBodyStorageRule {

		/** Minimum: 0 */
		StorageAllocatedInBytes?: number | null;
		StorageType?: StorageRuleTypeStorageType | null;
	}
	export interface CreateUserPostBodyStorageRuleFormProperties {

		/** Minimum: 0 */
		StorageAllocatedInBytes: FormControl<number | null | undefined>,
		StorageType: FormControl<StorageRuleTypeStorageType | null | undefined>,
	}
	export function CreateCreateUserPostBodyStorageRuleFormGroup() {
		return new FormGroup<CreateUserPostBodyStorageRuleFormProperties>({
			StorageAllocatedInBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			StorageType: new FormControl<StorageRuleTypeStorageType | null | undefined>(undefined),
		});

	}

	export interface UpdateDocumentPatchBody {

		/**
		 * The name of the document.
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * The ID of the parent folder.
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId?: string | null;

		/** The resource state of the document. Only ACTIVE and RECYCLED are supported. */
		ResourceState?: FolderMetadataResourceState | null;
	}
	export interface UpdateDocumentPatchBodyFormProperties {

		/**
		 * The name of the document.
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The ID of the parent folder.
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId: FormControl<string | null | undefined>,

		/** The resource state of the document. Only ACTIVE and RECYCLED are supported. */
		ResourceState: FormControl<FolderMetadataResourceState | null | undefined>,
	}
	export function CreateUpdateDocumentPatchBodyFormGroup() {
		return new FormGroup<UpdateDocumentPatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[\u0020-\u202D\u202F-\uFFFF]+')]),
			ParentFolderId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			ResourceState: new FormControl<FolderMetadataResourceState | null | undefined>(undefined),
		});

	}

	export interface UpdateFolderPatchBody {

		/**
		 * The name of the folder.
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * The ID of the parent folder.
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId?: string | null;

		/** The resource state of the folder. Only ACTIVE and RECYCLED are accepted values from the API. */
		ResourceState?: FolderMetadataResourceState | null;
	}
	export interface UpdateFolderPatchBodyFormProperties {

		/**
		 * The name of the folder.
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The ID of the parent folder.
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId: FormControl<string | null | undefined>,

		/** The resource state of the folder. Only ACTIVE and RECYCLED are accepted values from the API. */
		ResourceState: FormControl<FolderMetadataResourceState | null | undefined>,
	}
	export function CreateUpdateFolderPatchBodyFormGroup() {
		return new FormGroup<UpdateFolderPatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[\u0020-\u202D\u202F-\uFFFF]+')]),
			ParentFolderId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			ResourceState: new FormControl<FolderMetadataResourceState | null | undefined>(undefined),
		});

	}

	export interface UpdateUserPatchBody {

		/**
		 * The given name of the user.
		 * Max length: 64
		 * Min length: 1
		 */
		GivenName?: string | null;

		/**
		 * The surname of the user.
		 * Max length: 64
		 * Min length: 1
		 */
		Surname?: string | null;

		/** The type of the user. */
		Type?: UserType | null;

		/** Describes the storage for a user. */
		StorageRule?: UpdateUserPatchBodyStorageRule;

		/**
		 * The time zone ID of the user.
		 * Max length: 256
		 * Min length: 1
		 */
		TimeZoneId?: string | null;

		/** The locale of the user. */
		Locale?: UpdateUserPatchBodyLocale | null;

		/** Boolean value to determine whether the user is granted Poweruser privileges. */
		GrantPoweruserPrivileges?: BooleanEnumType | null;
	}
	export interface UpdateUserPatchBodyFormProperties {

		/**
		 * The given name of the user.
		 * Max length: 64
		 * Min length: 1
		 */
		GivenName: FormControl<string | null | undefined>,

		/**
		 * The surname of the user.
		 * Max length: 64
		 * Min length: 1
		 */
		Surname: FormControl<string | null | undefined>,

		/** The type of the user. */
		Type: FormControl<UserType | null | undefined>,

		/**
		 * The time zone ID of the user.
		 * Max length: 256
		 * Min length: 1
		 */
		TimeZoneId: FormControl<string | null | undefined>,

		/** The locale of the user. */
		Locale: FormControl<UpdateUserPatchBodyLocale | null | undefined>,

		/** Boolean value to determine whether the user is granted Poweruser privileges. */
		GrantPoweruserPrivileges: FormControl<BooleanEnumType | null | undefined>,
	}
	export function CreateUpdateUserPatchBodyFormGroup() {
		return new FormGroup<UpdateUserPatchBodyFormProperties>({
			GivenName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			Surname: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			Type: new FormControl<UserType | null | undefined>(undefined),
			TimeZoneId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			Locale: new FormControl<UpdateUserPatchBodyLocale | null | undefined>(undefined),
			GrantPoweruserPrivileges: new FormControl<BooleanEnumType | null | undefined>(undefined),
		});

	}

	export interface UpdateUserPatchBodyStorageRule {

		/** Minimum: 0 */
		StorageAllocatedInBytes?: number | null;
		StorageType?: StorageRuleTypeStorageType | null;
	}
	export interface UpdateUserPatchBodyStorageRuleFormProperties {

		/** Minimum: 0 */
		StorageAllocatedInBytes: FormControl<number | null | undefined>,
		StorageType: FormControl<StorageRuleTypeStorageType | null | undefined>,
	}
	export function CreateUpdateUserPatchBodyStorageRuleFormGroup() {
		return new FormGroup<UpdateUserPatchBodyStorageRuleFormProperties>({
			StorageAllocatedInBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			StorageType: new FormControl<StorageRuleTypeStorageType | null | undefined>(undefined),
		});

	}

	export enum UpdateUserPatchBodyLocale { en = 0, fr = 1, ko = 2, de = 3, es = 4, ja = 5, ru = 6, zh_CN = 7, zh_TW = 8, pt_BR = 9, _default = 10 }

	export interface InitiateDocumentVersionUploadPostBody {

		/**
		 * The ID of the document.
		 * Max length: 128
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * The name of the document.
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;

		/** The timestamp when the content of the document was originally created. */
		ContentCreatedTimestamp?: Date | null;

		/** The timestamp when the content of the document was modified. */
		ContentModifiedTimestamp?: Date | null;

		/**
		 * The content type of the document.
		 * Max length: 128
		 * Min length: 1
		 */
		ContentType?: string | null;

		/** The size of the document, in bytes. */
		DocumentSizeInBytes?: number | null;

		/**
		 * The ID of the parent folder.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId: string;
	}
	export interface InitiateDocumentVersionUploadPostBodyFormProperties {

		/**
		 * The ID of the document.
		 * Max length: 128
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * The name of the document.
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** The timestamp when the content of the document was originally created. */
		ContentCreatedTimestamp: FormControl<Date | null | undefined>,

		/** The timestamp when the content of the document was modified. */
		ContentModifiedTimestamp: FormControl<Date | null | undefined>,

		/**
		 * The content type of the document.
		 * Max length: 128
		 * Min length: 1
		 */
		ContentType: FormControl<string | null | undefined>,

		/** The size of the document, in bytes. */
		DocumentSizeInBytes: FormControl<number | null | undefined>,

		/**
		 * The ID of the parent folder.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ParentFolderId: FormControl<string | null | undefined>,
	}
	export function CreateInitiateDocumentVersionUploadPostBodyFormGroup() {
		return new FormGroup<InitiateDocumentVersionUploadPostBodyFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[\u0020-\u202D\u202F-\uFFFF]+')]),
			ContentCreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ContentModifiedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			DocumentSizeInBytes: new FormControl<number | null | undefined>(undefined),
			ParentFolderId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\w+-.@]+')]),
		});

	}

}

