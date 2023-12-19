import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Information about the action. */
	export interface Action {

		/** The actor of a Drive activity. */
		actor?: Actor;

		/** Data describing the type and additional information of an action. */
		detail?: ActionDetail;

		/** Information about the target of activity. */
		target?: Target;

		/** Information about time ranges. */
		timeRange?: TimeRange;

		/** The action occurred at this specific time. */
		timestamp?: string | null;
	}

	/** Information about the action. */
	export interface ActionFormProperties {

		/** The action occurred at this specific time. */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The actor of a Drive activity. */
	export interface Actor {

		/** Empty message representing an administrator. */
		administrator?: Administrator;

		/**
		 * Empty message representing an anonymous user or indicating the authenticated
		 * user should be anonymized.
		 */
		anonymous?: AnonymousUser;

		/**
		 * Information about an impersonation, where an admin acts on behalf of an end
		 * user. Information about the acting admin is not currently available.
		 */
		impersonation?: Impersonation;

		/** Event triggered by system operations instead of end users. */
		system?: SystemEvent;

		/** Information about an end user. */
		user?: User;
	}

	/** The actor of a Drive activity. */
	export interface ActorFormProperties {
	}
	export function CreateActorFormGroup() {
		return new FormGroup<ActorFormProperties>({
		});

	}


	/** Empty message representing an administrator. */
	export interface Administrator {
	}

	/** Empty message representing an administrator. */
	export interface AdministratorFormProperties {
	}
	export function CreateAdministratorFormGroup() {
		return new FormGroup<AdministratorFormProperties>({
		});

	}


	/**
	 * Empty message representing an anonymous user or indicating the authenticated
	 * user should be anonymized.
	 */
	export interface AnonymousUser {
	}

	/**
	 * Empty message representing an anonymous user or indicating the authenticated
	 * user should be anonymized.
	 */
	export interface AnonymousUserFormProperties {
	}
	export function CreateAnonymousUserFormGroup() {
		return new FormGroup<AnonymousUserFormProperties>({
		});

	}


	/**
	 * Information about an impersonation, where an admin acts on behalf of an end
	 * user. Information about the acting admin is not currently available.
	 */
	export interface Impersonation {

		/** Information about an end user. */
		impersonatedUser?: User;
	}

	/**
	 * Information about an impersonation, where an admin acts on behalf of an end
	 * user. Information about the acting admin is not currently available.
	 */
	export interface ImpersonationFormProperties {
	}
	export function CreateImpersonationFormGroup() {
		return new FormGroup<ImpersonationFormProperties>({
		});

	}


	/** Information about an end user. */
	export interface User {

		/** A user whose account has since been deleted. */
		deletedUser?: DeletedUser;

		/** A known user. */
		knownUser?: KnownUser;

		/** A user about whom nothing is currently known. */
		unknownUser?: UnknownUser;
	}

	/** Information about an end user. */
	export interface UserFormProperties {
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
		});

	}


	/** A user whose account has since been deleted. */
	export interface DeletedUser {
	}

	/** A user whose account has since been deleted. */
	export interface DeletedUserFormProperties {
	}
	export function CreateDeletedUserFormGroup() {
		return new FormGroup<DeletedUserFormProperties>({
		});

	}


	/** A known user. */
	export interface KnownUser {

		/** True if this is the user making the request. */
		isCurrentUser?: boolean | null;

		/**
		 * The identifier for this user that can be used with the People API to get
		 * more information. The format is "people/ACCOUNT_ID". See
		 * https://developers.google.com/people/.
		 */
		personName?: string | null;
	}

	/** A known user. */
	export interface KnownUserFormProperties {

		/** True if this is the user making the request. */
		isCurrentUser: FormControl<boolean | null | undefined>,

		/**
		 * The identifier for this user that can be used with the People API to get
		 * more information. The format is "people/ACCOUNT_ID". See
		 * https://developers.google.com/people/.
		 */
		personName: FormControl<string | null | undefined>,
	}
	export function CreateKnownUserFormGroup() {
		return new FormGroup<KnownUserFormProperties>({
			isCurrentUser: new FormControl<boolean | null | undefined>(undefined),
			personName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A user about whom nothing is currently known. */
	export interface UnknownUser {
	}

	/** A user about whom nothing is currently known. */
	export interface UnknownUserFormProperties {
	}
	export function CreateUnknownUserFormGroup() {
		return new FormGroup<UnknownUserFormProperties>({
		});

	}


	/** Event triggered by system operations instead of end users. */
	export interface SystemEvent {

		/** The type of the system event that may triggered activity. */
		type?: SystemEventType | null;
	}

	/** Event triggered by system operations instead of end users. */
	export interface SystemEventFormProperties {

		/** The type of the system event that may triggered activity. */
		type: FormControl<SystemEventType | null | undefined>,
	}
	export function CreateSystemEventFormGroup() {
		return new FormGroup<SystemEventFormProperties>({
			type: new FormControl<SystemEventType | null | undefined>(undefined),
		});

	}

	export enum SystemEventType { TYPE_UNSPECIFIED = 0, USER_DELETION = 1, TRASH_AUTO_PURGE = 2 }


	/** Data describing the type and additional information of an action. */
	export interface ActionDetail {

		/** A change about comments on an object. */
		comment?: Comment;

		/** An object was created. */
		create?: Create;

		/** An object was deleted. */
		delete?: Delete;

		/** A change in the object's data leak prevention status. */
		dlpChange?: DataLeakPreventionChange;

		/** An empty message indicating an object was edited. */
		edit?: Edit;

		/** An object was moved. */
		move?: Move;

		/** A change of the permission setting on an item. */
		permissionChange?: PermissionChange;

		/** Activity in applications other than Drive. */
		reference?: ApplicationReference;

		/** An object was renamed. */
		rename?: Rename;

		/** A deleted object was restored. */
		restore?: Restore;

		/** Information about settings changes. */
		settingsChange?: SettingsChange;
	}

	/** Data describing the type and additional information of an action. */
	export interface ActionDetailFormProperties {
	}
	export function CreateActionDetailFormGroup() {
		return new FormGroup<ActionDetailFormProperties>({
		});

	}


	/** A change about comments on an object. */
	export interface Comment {

		/** A comment with an assignment. */
		assignment?: Assignment;

		/** Users who are mentioned in this comment. */
		mentionedUsers?: Array<User>;

		/** A regular posted comment. */
		post?: Post;

		/** A suggestion. */
		suggestion?: Suggestion;
	}

	/** A change about comments on an object. */
	export interface CommentFormProperties {
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
		});

	}


	/** A comment with an assignment. */
	export interface Assignment {

		/** Information about an end user. */
		assignedUser?: User;

		/** The sub-type of this event. */
		subtype?: AssignmentSubtype | null;
	}

	/** A comment with an assignment. */
	export interface AssignmentFormProperties {

		/** The sub-type of this event. */
		subtype: FormControl<AssignmentSubtype | null | undefined>,
	}
	export function CreateAssignmentFormGroup() {
		return new FormGroup<AssignmentFormProperties>({
			subtype: new FormControl<AssignmentSubtype | null | undefined>(undefined),
		});

	}

	export enum AssignmentSubtype { SUBTYPE_UNSPECIFIED = 0, ADDED = 1, DELETED = 2, REPLY_ADDED = 3, REPLY_DELETED = 4, RESOLVED = 5, REOPENED = 6, REASSIGNED = 7 }


	/** A regular posted comment. */
	export interface Post {

		/** The sub-type of this event. */
		subtype?: PostSubtype | null;
	}

	/** A regular posted comment. */
	export interface PostFormProperties {

		/** The sub-type of this event. */
		subtype: FormControl<PostSubtype | null | undefined>,
	}
	export function CreatePostFormGroup() {
		return new FormGroup<PostFormProperties>({
			subtype: new FormControl<PostSubtype | null | undefined>(undefined),
		});

	}

	export enum PostSubtype { SUBTYPE_UNSPECIFIED = 0, ADDED = 1, DELETED = 2, REPLY_ADDED = 3, REPLY_DELETED = 4, RESOLVED = 5, REOPENED = 6 }


	/** A suggestion. */
	export interface Suggestion {

		/** The sub-type of this event. */
		subtype?: SuggestionSubtype | null;
	}

	/** A suggestion. */
	export interface SuggestionFormProperties {

		/** The sub-type of this event. */
		subtype: FormControl<SuggestionSubtype | null | undefined>,
	}
	export function CreateSuggestionFormGroup() {
		return new FormGroup<SuggestionFormProperties>({
			subtype: new FormControl<SuggestionSubtype | null | undefined>(undefined),
		});

	}

	export enum SuggestionSubtype { SUBTYPE_UNSPECIFIED = 0, ADDED = 1, DELETED = 2, REPLY_ADDED = 3, REPLY_DELETED = 4, ACCEPTED = 5, REJECTED = 6, ACCEPT_DELETED = 7, REJECT_DELETED = 8 }


	/** An object was created. */
	export interface Create {

		/** An object was created by copying an existing object. */
		copy?: Copy;

		/** An object was created from scratch. */
		new?: New;

		/** An object was uploaded into Drive. */
		upload?: Upload;
	}

	/** An object was created. */
	export interface CreateFormProperties {
	}
	export function CreateCreateFormGroup() {
		return new FormGroup<CreateFormProperties>({
		});

	}


	/** An object was created by copying an existing object. */
	export interface Copy {

		/** A lightweight reference to the target of activity. */
		originalObject?: TargetReference;
	}

	/** An object was created by copying an existing object. */
	export interface CopyFormProperties {
	}
	export function CreateCopyFormGroup() {
		return new FormGroup<CopyFormProperties>({
		});

	}


	/** A lightweight reference to the target of activity. */
	export interface TargetReference {

		/** A lightweight reference to a shared drive. */
		drive?: DriveReference;

		/** A lightweight reference to a Drive item, such as a file or folder. */
		driveItem?: DriveItemReference;

		/** This item is deprecated; please see `DriveReference` instead. */
		teamDrive?: TeamDriveReference;
	}

	/** A lightweight reference to the target of activity. */
	export interface TargetReferenceFormProperties {
	}
	export function CreateTargetReferenceFormGroup() {
		return new FormGroup<TargetReferenceFormProperties>({
		});

	}


	/** A lightweight reference to a shared drive. */
	export interface DriveReference {

		/**
		 * The resource name of the shared drive. The format is
		 * "COLLECTION_ID/DRIVE_ID". Clients should not assume a specific collection
		 * ID for this resource name.
		 */
		name?: string | null;

		/** The title of the shared drive. */
		title?: string | null;
	}

	/** A lightweight reference to a shared drive. */
	export interface DriveReferenceFormProperties {

		/**
		 * The resource name of the shared drive. The format is
		 * "COLLECTION_ID/DRIVE_ID". Clients should not assume a specific collection
		 * ID for this resource name.
		 */
		name: FormControl<string | null | undefined>,

		/** The title of the shared drive. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateDriveReferenceFormGroup() {
		return new FormGroup<DriveReferenceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A lightweight reference to a Drive item, such as a file or folder. */
	export interface DriveItemReference {

		/** A Drive item which is a file. */
		driveFile?: DriveFile;

		/** A Drive item which is a folder. */
		driveFolder?: DriveFolder;

		/** This item is deprecated; please see `DriveFile` instead. */
		file?: File;

		/** This item is deprecated; please see `DriveFolder` instead. */
		folder?: Folder;

		/** The target Drive item. The format is "items/ITEM_ID". */
		name?: string | null;

		/** The title of the Drive item. */
		title?: string | null;
	}

	/** A lightweight reference to a Drive item, such as a file or folder. */
	export interface DriveItemReferenceFormProperties {

		/** The target Drive item. The format is "items/ITEM_ID". */
		name: FormControl<string | null | undefined>,

		/** The title of the Drive item. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateDriveItemReferenceFormGroup() {
		return new FormGroup<DriveItemReferenceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Drive item which is a file. */
	export interface DriveFile {
	}

	/** A Drive item which is a file. */
	export interface DriveFileFormProperties {
	}
	export function CreateDriveFileFormGroup() {
		return new FormGroup<DriveFileFormProperties>({
		});

	}


	/** A Drive item which is a folder. */
	export interface DriveFolder {

		/** The type of Drive folder. */
		type?: DriveFolderType | null;
	}

	/** A Drive item which is a folder. */
	export interface DriveFolderFormProperties {

		/** The type of Drive folder. */
		type: FormControl<DriveFolderType | null | undefined>,
	}
	export function CreateDriveFolderFormGroup() {
		return new FormGroup<DriveFolderFormProperties>({
			type: new FormControl<DriveFolderType | null | undefined>(undefined),
		});

	}

	export enum DriveFolderType { TYPE_UNSPECIFIED = 0, MY_DRIVE_ROOT = 1, SHARED_DRIVE_ROOT = 2, STANDARD_FOLDER = 3 }


	/** This item is deprecated; please see `DriveFile` instead. */
	export interface File {
	}

	/** This item is deprecated; please see `DriveFile` instead. */
	export interface FileFormProperties {
	}
	export function CreateFileFormGroup() {
		return new FormGroup<FileFormProperties>({
		});

	}


	/** This item is deprecated; please see `DriveFolder` instead. */
	export interface Folder {

		/** This field is deprecated; please see `DriveFolder.type` instead. */
		type?: FolderType | null;
	}

	/** This item is deprecated; please see `DriveFolder` instead. */
	export interface FolderFormProperties {

		/** This field is deprecated; please see `DriveFolder.type` instead. */
		type: FormControl<FolderType | null | undefined>,
	}
	export function CreateFolderFormGroup() {
		return new FormGroup<FolderFormProperties>({
			type: new FormControl<FolderType | null | undefined>(undefined),
		});

	}

	export enum FolderType { TYPE_UNSPECIFIED = 0, MY_DRIVE_ROOT = 1, TEAM_DRIVE_ROOT = 2, STANDARD_FOLDER = 3 }


	/** This item is deprecated; please see `DriveReference` instead. */
	export interface TeamDriveReference {

		/** This field is deprecated; please see `DriveReference.name` instead. */
		name?: string | null;

		/** This field is deprecated; please see `DriveReference.title` instead. */
		title?: string | null;
	}

	/** This item is deprecated; please see `DriveReference` instead. */
	export interface TeamDriveReferenceFormProperties {

		/** This field is deprecated; please see `DriveReference.name` instead. */
		name: FormControl<string | null | undefined>,

		/** This field is deprecated; please see `DriveReference.title` instead. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateTeamDriveReferenceFormGroup() {
		return new FormGroup<TeamDriveReferenceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object was created from scratch. */
	export interface New {
	}

	/** An object was created from scratch. */
	export interface NewFormProperties {
	}
	export function CreateNewFormGroup() {
		return new FormGroup<NewFormProperties>({
		});

	}


	/** An object was uploaded into Drive. */
	export interface Upload {
	}

	/** An object was uploaded into Drive. */
	export interface UploadFormProperties {
	}
	export function CreateUploadFormGroup() {
		return new FormGroup<UploadFormProperties>({
		});

	}


	/** An object was deleted. */
	export interface Delete {

		/** The type of delete action taken. */
		type?: DeleteType | null;
	}

	/** An object was deleted. */
	export interface DeleteFormProperties {

		/** The type of delete action taken. */
		type: FormControl<DeleteType | null | undefined>,
	}
	export function CreateDeleteFormGroup() {
		return new FormGroup<DeleteFormProperties>({
			type: new FormControl<DeleteType | null | undefined>(undefined),
		});

	}

	export enum DeleteType { TYPE_UNSPECIFIED = 0, TRASH = 1, PERMANENT_DELETE = 2 }


	/** A change in the object's data leak prevention status. */
	export interface DataLeakPreventionChange {

		/** The type of Data Leak Prevention (DLP) change. */
		type?: DataLeakPreventionChangeType | null;
	}

	/** A change in the object's data leak prevention status. */
	export interface DataLeakPreventionChangeFormProperties {

		/** The type of Data Leak Prevention (DLP) change. */
		type: FormControl<DataLeakPreventionChangeType | null | undefined>,
	}
	export function CreateDataLeakPreventionChangeFormGroup() {
		return new FormGroup<DataLeakPreventionChangeFormProperties>({
			type: new FormControl<DataLeakPreventionChangeType | null | undefined>(undefined),
		});

	}

	export enum DataLeakPreventionChangeType { TYPE_UNSPECIFIED = 0, FLAGGED = 1, CLEARED = 2 }


	/** An empty message indicating an object was edited. */
	export interface Edit {
	}

	/** An empty message indicating an object was edited. */
	export interface EditFormProperties {
	}
	export function CreateEditFormGroup() {
		return new FormGroup<EditFormProperties>({
		});

	}


	/** An object was moved. */
	export interface Move {

		/** The added parent object(s). */
		addedParents?: Array<TargetReference>;

		/** The removed parent object(s). */
		removedParents?: Array<TargetReference>;
	}

	/** An object was moved. */
	export interface MoveFormProperties {
	}
	export function CreateMoveFormGroup() {
		return new FormGroup<MoveFormProperties>({
		});

	}


	/** A change of the permission setting on an item. */
	export interface PermissionChange {

		/** The set of permissions added by this change. */
		addedPermissions?: Array<Permission>;

		/** The set of permissions removed by this change. */
		removedPermissions?: Array<Permission>;
	}

	/** A change of the permission setting on an item. */
	export interface PermissionChangeFormProperties {
	}
	export function CreatePermissionChangeFormGroup() {
		return new FormGroup<PermissionChangeFormProperties>({
		});

	}


	/** The permission setting of an object. */
	export interface Permission {

		/**
		 * If true, the item can be discovered (e.g. in the user's "Shared with me"
		 * collection) without needing a link to the item.
		 */
		allowDiscovery?: boolean | null;

		/** Represents any user (including a logged out user). */
		anyone?: Anyone;

		/** Information about a domain. */
		domain?: Domain;

		/** Information about a group. */
		group?: Group;

		/**
		 * Indicates the
		 * <a href="/drive/web/manage-sharing#roles">Google Drive permissions
		 * role</a>. The role determines a user's ability to read, write, and
		 * comment on items.
		 */
		role?: PermissionRole | null;

		/** Information about an end user. */
		user?: User;
	}

	/** The permission setting of an object. */
	export interface PermissionFormProperties {

		/**
		 * If true, the item can be discovered (e.g. in the user's "Shared with me"
		 * collection) without needing a link to the item.
		 */
		allowDiscovery: FormControl<boolean | null | undefined>,

		/**
		 * Indicates the
		 * <a href="/drive/web/manage-sharing#roles">Google Drive permissions
		 * role</a>. The role determines a user's ability to read, write, and
		 * comment on items.
		 */
		role: FormControl<PermissionRole | null | undefined>,
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
			allowDiscovery: new FormControl<boolean | null | undefined>(undefined),
			role: new FormControl<PermissionRole | null | undefined>(undefined),
		});

	}


	/** Represents any user (including a logged out user). */
	export interface Anyone {
	}

	/** Represents any user (including a logged out user). */
	export interface AnyoneFormProperties {
	}
	export function CreateAnyoneFormGroup() {
		return new FormGroup<AnyoneFormProperties>({
		});

	}


	/** Information about a domain. */
	export interface Domain {

		/** An opaque string used to identify this domain. */
		legacyId?: string | null;

		/** The name of the domain, e.g. "google.com". */
		name?: string | null;
	}

	/** Information about a domain. */
	export interface DomainFormProperties {

		/** An opaque string used to identify this domain. */
		legacyId: FormControl<string | null | undefined>,

		/** The name of the domain, e.g. "google.com". */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			legacyId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a group. */
	export interface Group {

		/** The email address of the group. */
		email?: string | null;

		/** The title of the group. */
		title?: string | null;
	}

	/** Information about a group. */
	export interface GroupFormProperties {

		/** The email address of the group. */
		email: FormControl<string | null | undefined>,

		/** The title of the group. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PermissionRole { ROLE_UNSPECIFIED = 0, OWNER = 1, ORGANIZER = 2, FILE_ORGANIZER = 3, EDITOR = 4, COMMENTER = 5, VIEWER = 6, PUBLISHED_VIEWER = 7 }


	/** Activity in applications other than Drive. */
	export interface ApplicationReference {

		/** The reference type corresponding to this event. */
		type?: ApplicationReferenceType | null;
	}

	/** Activity in applications other than Drive. */
	export interface ApplicationReferenceFormProperties {

		/** The reference type corresponding to this event. */
		type: FormControl<ApplicationReferenceType | null | undefined>,
	}
	export function CreateApplicationReferenceFormGroup() {
		return new FormGroup<ApplicationReferenceFormProperties>({
			type: new FormControl<ApplicationReferenceType | null | undefined>(undefined),
		});

	}

	export enum ApplicationReferenceType { UNSPECIFIED_REFERENCE_TYPE = 0, LINK = 1, DISCUSS = 2 }


	/** An object was renamed. */
	export interface Rename {

		/** The new title of the drive object. */
		newTitle?: string | null;

		/** The previous title of the drive object. */
		oldTitle?: string | null;
	}

	/** An object was renamed. */
	export interface RenameFormProperties {

		/** The new title of the drive object. */
		newTitle: FormControl<string | null | undefined>,

		/** The previous title of the drive object. */
		oldTitle: FormControl<string | null | undefined>,
	}
	export function CreateRenameFormGroup() {
		return new FormGroup<RenameFormProperties>({
			newTitle: new FormControl<string | null | undefined>(undefined),
			oldTitle: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A deleted object was restored. */
	export interface Restore {

		/** The type of restore action taken. */
		type?: RestoreType | null;
	}

	/** A deleted object was restored. */
	export interface RestoreFormProperties {

		/** The type of restore action taken. */
		type: FormControl<RestoreType | null | undefined>,
	}
	export function CreateRestoreFormGroup() {
		return new FormGroup<RestoreFormProperties>({
			type: new FormControl<RestoreType | null | undefined>(undefined),
		});

	}

	export enum RestoreType { TYPE_UNSPECIFIED = 0, UNTRASH = 1 }


	/** Information about settings changes. */
	export interface SettingsChange {

		/** The set of changes made to restrictions. */
		restrictionChanges?: Array<RestrictionChange>;
	}

	/** Information about settings changes. */
	export interface SettingsChangeFormProperties {
	}
	export function CreateSettingsChangeFormGroup() {
		return new FormGroup<SettingsChangeFormProperties>({
		});

	}


	/** Information about restriction policy changes to a feature. */
	export interface RestrictionChange {

		/** The feature which had a change in restriction policy. */
		feature?: RestrictionChangeFeature | null;

		/** The restriction in place after the change. */
		newRestriction?: RestrictionChangeNewRestriction | null;
	}

	/** Information about restriction policy changes to a feature. */
	export interface RestrictionChangeFormProperties {

		/** The feature which had a change in restriction policy. */
		feature: FormControl<RestrictionChangeFeature | null | undefined>,

		/** The restriction in place after the change. */
		newRestriction: FormControl<RestrictionChangeNewRestriction | null | undefined>,
	}
	export function CreateRestrictionChangeFormGroup() {
		return new FormGroup<RestrictionChangeFormProperties>({
			feature: new FormControl<RestrictionChangeFeature | null | undefined>(undefined),
			newRestriction: new FormControl<RestrictionChangeNewRestriction | null | undefined>(undefined),
		});

	}

	export enum RestrictionChangeFeature { FEATURE_UNSPECIFIED = 0, SHARING_OUTSIDE_DOMAIN = 1, DIRECT_SHARING = 2, ITEM_DUPLICATION = 3, DRIVE_FILE_STREAM = 4 }

	export enum RestrictionChangeNewRestriction { RESTRICTION_UNSPECIFIED = 0, UNRESTRICTED = 1, FULLY_RESTRICTED = 2 }


	/** Information about the target of activity. */
	export interface Target {

		/** Information about a shared drive. */
		drive?: Drive;

		/** A Drive item, such as a file or folder. */
		driveItem?: DriveItem;

		/** A comment on a file. */
		fileComment?: FileComment;

		/** This item is deprecated; please see `Drive` instead. */
		teamDrive?: TeamDrive;
	}

	/** Information about the target of activity. */
	export interface TargetFormProperties {
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
		});

	}


	/** Information about a shared drive. */
	export interface Drive {

		/**
		 * The resource name of the shared drive. The format is
		 * "COLLECTION_ID/DRIVE_ID". Clients should not assume a specific collection
		 * ID for this resource name.
		 */
		name?: string | null;

		/** A Drive item, such as a file or folder. */
		root?: DriveItem;

		/** The title of the shared drive. */
		title?: string | null;
	}

	/** Information about a shared drive. */
	export interface DriveFormProperties {

		/**
		 * The resource name of the shared drive. The format is
		 * "COLLECTION_ID/DRIVE_ID". Clients should not assume a specific collection
		 * ID for this resource name.
		 */
		name: FormControl<string | null | undefined>,

		/** The title of the shared drive. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateDriveFormGroup() {
		return new FormGroup<DriveFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Drive item, such as a file or folder. */
	export interface DriveItem {

		/** A Drive item which is a file. */
		driveFile?: DriveFile;

		/** A Drive item which is a folder. */
		driveFolder?: DriveFolder;

		/** This item is deprecated; please see `DriveFile` instead. */
		file?: File;

		/** This item is deprecated; please see `DriveFolder` instead. */
		folder?: Folder;

		/**
		 * The MIME type of the Drive item.  See
		 * https://developers.google.com/drive/v3/web/mime-types.
		 */
		mimeType?: string | null;

		/** The target Drive item. The format is "items/ITEM_ID". */
		name?: string | null;

		/** Information about the owner of a Drive item. */
		owner?: Owner;

		/** The title of the Drive item. */
		title?: string | null;
	}

	/** A Drive item, such as a file or folder. */
	export interface DriveItemFormProperties {

		/**
		 * The MIME type of the Drive item.  See
		 * https://developers.google.com/drive/v3/web/mime-types.
		 */
		mimeType: FormControl<string | null | undefined>,

		/** The target Drive item. The format is "items/ITEM_ID". */
		name: FormControl<string | null | undefined>,

		/** The title of the Drive item. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateDriveItemFormGroup() {
		return new FormGroup<DriveItemFormProperties>({
			mimeType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the owner of a Drive item. */
	export interface Owner {

		/** Information about a domain. */
		domain?: Domain;

		/** A lightweight reference to a shared drive. */
		drive?: DriveReference;

		/** This item is deprecated; please see `DriveReference` instead. */
		teamDrive?: TeamDriveReference;

		/** Information about an end user. */
		user?: User;
	}

	/** Information about the owner of a Drive item. */
	export interface OwnerFormProperties {
	}
	export function CreateOwnerFormGroup() {
		return new FormGroup<OwnerFormProperties>({
		});

	}


	/** A comment on a file. */
	export interface FileComment {

		/**
		 * The comment in the discussion thread. This identifier is an opaque string
		 * compatible with the Drive API; see
		 * https://developers.google.com/drive/v3/reference/comments/get
		 */
		legacyCommentId?: string | null;

		/**
		 * The discussion thread to which the comment was added. This identifier is an
		 * opaque string compatible with the Drive API and references the first
		 * comment in a discussion; see
		 * https://developers.google.com/drive/v3/reference/comments/get
		 */
		legacyDiscussionId?: string | null;

		/**
		 * The link to the discussion thread containing this comment, for example,
		 * "https://docs.google.com/DOCUMENT_ID/edit?disco=THREAD_ID".
		 */
		linkToDiscussion?: string | null;

		/** A Drive item, such as a file or folder. */
		parent?: DriveItem;
	}

	/** A comment on a file. */
	export interface FileCommentFormProperties {

		/**
		 * The comment in the discussion thread. This identifier is an opaque string
		 * compatible with the Drive API; see
		 * https://developers.google.com/drive/v3/reference/comments/get
		 */
		legacyCommentId: FormControl<string | null | undefined>,

		/**
		 * The discussion thread to which the comment was added. This identifier is an
		 * opaque string compatible with the Drive API and references the first
		 * comment in a discussion; see
		 * https://developers.google.com/drive/v3/reference/comments/get
		 */
		legacyDiscussionId: FormControl<string | null | undefined>,

		/**
		 * The link to the discussion thread containing this comment, for example,
		 * "https://docs.google.com/DOCUMENT_ID/edit?disco=THREAD_ID".
		 */
		linkToDiscussion: FormControl<string | null | undefined>,
	}
	export function CreateFileCommentFormGroup() {
		return new FormGroup<FileCommentFormProperties>({
			legacyCommentId: new FormControl<string | null | undefined>(undefined),
			legacyDiscussionId: new FormControl<string | null | undefined>(undefined),
			linkToDiscussion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This item is deprecated; please see `Drive` instead. */
	export interface TeamDrive {

		/** This field is deprecated; please see `Drive.name` instead. */
		name?: string | null;

		/** A Drive item, such as a file or folder. */
		root?: DriveItem;

		/** This field is deprecated; please see `Drive.title` instead. */
		title?: string | null;
	}

	/** This item is deprecated; please see `Drive` instead. */
	export interface TeamDriveFormProperties {

		/** This field is deprecated; please see `Drive.name` instead. */
		name: FormControl<string | null | undefined>,

		/** This field is deprecated; please see `Drive.title` instead. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateTeamDriveFormGroup() {
		return new FormGroup<TeamDriveFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about time ranges. */
	export interface TimeRange {

		/** The end of the time range. */
		endTime?: string | null;

		/** The start of the time range. */
		startTime?: string | null;
	}

	/** Information about time ranges. */
	export interface TimeRangeFormProperties {

		/** The end of the time range. */
		endTime: FormControl<string | null | undefined>,

		/** The start of the time range. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateTimeRangeFormGroup() {
		return new FormGroup<TimeRangeFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * How the individual activities are consolidated. A set of activities may be
	 * consolidated into one combined activity if they are related in some way, such
	 * as one actor performing the same action on multiple targets, or multiple
	 * actors performing the same action on a single target. The strategy defines
	 * the rules for which activities are related.
	 */
	export interface ConsolidationStrategy {

		/**
		 * A strategy which consolidates activities using the grouping rules from the
		 * legacy V1 Activity API. Similar actions occurring within a window of time
		 * can be grouped across multiple targets (such as moving a set of files at
		 * once) or multiple actors (such as several users editing the same item).
		 * Grouping rules for this strategy are specific to each type of action.
		 */
		legacy?: Legacy;

		/** A strategy which does no consolidation of individual activities. */
		none?: NoConsolidation;
	}

	/**
	 * How the individual activities are consolidated. A set of activities may be
	 * consolidated into one combined activity if they are related in some way, such
	 * as one actor performing the same action on multiple targets, or multiple
	 * actors performing the same action on a single target. The strategy defines
	 * the rules for which activities are related.
	 */
	export interface ConsolidationStrategyFormProperties {
	}
	export function CreateConsolidationStrategyFormGroup() {
		return new FormGroup<ConsolidationStrategyFormProperties>({
		});

	}


	/**
	 * A strategy which consolidates activities using the grouping rules from the
	 * legacy V1 Activity API. Similar actions occurring within a window of time
	 * can be grouped across multiple targets (such as moving a set of files at
	 * once) or multiple actors (such as several users editing the same item).
	 * Grouping rules for this strategy are specific to each type of action.
	 */
	export interface Legacy {
	}

	/**
	 * A strategy which consolidates activities using the grouping rules from the
	 * legacy V1 Activity API. Similar actions occurring within a window of time
	 * can be grouped across multiple targets (such as moving a set of files at
	 * once) or multiple actors (such as several users editing the same item).
	 * Grouping rules for this strategy are specific to each type of action.
	 */
	export interface LegacyFormProperties {
	}
	export function CreateLegacyFormGroup() {
		return new FormGroup<LegacyFormProperties>({
		});

	}


	/** A strategy which does no consolidation of individual activities. */
	export interface NoConsolidation {
	}

	/** A strategy which does no consolidation of individual activities. */
	export interface NoConsolidationFormProperties {
	}
	export function CreateNoConsolidationFormGroup() {
		return new FormGroup<NoConsolidationFormProperties>({
		});

	}


	/**
	 * A single Drive activity comprising one or more Actions by one or more
	 * Actors on one or more Targets. Some Action groupings occur spontaneously,
	 * such as moving an item into a shared folder triggering a permission change.
	 * Other groupings of related Actions, such as multiple Actors editing one item
	 * or moving multiple files into a new folder, are controlled by the selection
	 * of a ConsolidationStrategy in the QueryDriveActivityRequest.
	 */
	export interface DriveActivity {

		/** Details on all actions in this activity. */
		actions?: Array<Action>;

		/** All actor(s) responsible for the activity. */
		actors?: Array<Actor>;

		/** Data describing the type and additional information of an action. */
		primaryActionDetail?: ActionDetail;

		/**
		 * All Google Drive objects this activity is about (e.g. file, folder, drive).
		 * This represents the state of the target immediately after the actions
		 * occurred.
		 */
		targets?: Array<Target>;

		/** Information about time ranges. */
		timeRange?: TimeRange;

		/** The activity occurred at this specific time. */
		timestamp?: string | null;
	}

	/**
	 * A single Drive activity comprising one or more Actions by one or more
	 * Actors on one or more Targets. Some Action groupings occur spontaneously,
	 * such as moving an item into a shared folder triggering a permission change.
	 * Other groupings of related Actions, such as multiple Actors editing one item
	 * or moving multiple files into a new folder, are controlled by the selection
	 * of a ConsolidationStrategy in the QueryDriveActivityRequest.
	 */
	export interface DriveActivityFormProperties {

		/** The activity occurred at this specific time. */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateDriveActivityFormGroup() {
		return new FormGroup<DriveActivityFormProperties>({
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for querying Drive activity. */
	export interface QueryDriveActivityRequest {

		/**
		 * Return activities for this Drive folder and all children and descendants.
		 * The format is "items/ITEM_ID".
		 */
		ancestorName?: string | null;

		/**
		 * How the individual activities are consolidated. A set of activities may be
		 * consolidated into one combined activity if they are related in some way, such
		 * as one actor performing the same action on multiple targets, or multiple
		 * actors performing the same action on a single target. The strategy defines
		 * the rules for which activities are related.
		 */
		consolidationStrategy?: ConsolidationStrategy;

		/**
		 * The filtering for items returned from this query request. The format of the
		 * filter string is a sequence of expressions, joined by an optional "AND",
		 * where each expression is of the form "field operator value".
		 * Supported fields:
		 * - <tt>time</tt>: Uses numerical operators on date values either in
		 * terms of milliseconds since Jan 1, 1970 or in RFC 3339 format.
		 * Examples:
		 * - <tt>time > 1452409200000 AND time <= 1492812924310</tt>
		 * - <tt>time >= "2016-01-10T01:02:03-05:00"</tt>
		 * - <tt>detail.action_detail_case</tt>: Uses the "has" operator (:) and
		 * either a singular value or a list of allowed action types enclosed in
		 * parentheses.
		 * Examples:
		 * - <tt>detail.action_detail_case: RENAME</tt>
		 * - <tt>detail.action_detail_case:(CREATE UPLOAD)</tt>
		 * - <tt>-detail.action_detail_case:MOVE</tt>
		 */
		filter?: string | null;

		/**
		 * Return activities for this Drive item. The format is
		 * "items/ITEM_ID".
		 */
		itemName?: string | null;

		/**
		 * The requested number of activities to return. If not set, a default value
		 * is used.
		 */
		pageSize?: number | null;

		/**
		 * The next_page_token value returned from a previous QueryDriveActivity
		 * request, if any.
		 */
		pageToken?: string | null;
	}

	/** The request message for querying Drive activity. */
	export interface QueryDriveActivityRequestFormProperties {

		/**
		 * Return activities for this Drive folder and all children and descendants.
		 * The format is "items/ITEM_ID".
		 */
		ancestorName: FormControl<string | null | undefined>,

		/**
		 * The filtering for items returned from this query request. The format of the
		 * filter string is a sequence of expressions, joined by an optional "AND",
		 * where each expression is of the form "field operator value".
		 * Supported fields:
		 * - <tt>time</tt>: Uses numerical operators on date values either in
		 * terms of milliseconds since Jan 1, 1970 or in RFC 3339 format.
		 * Examples:
		 * - <tt>time > 1452409200000 AND time <= 1492812924310</tt>
		 * - <tt>time >= "2016-01-10T01:02:03-05:00"</tt>
		 * - <tt>detail.action_detail_case</tt>: Uses the "has" operator (:) and
		 * either a singular value or a list of allowed action types enclosed in
		 * parentheses.
		 * Examples:
		 * - <tt>detail.action_detail_case: RENAME</tt>
		 * - <tt>detail.action_detail_case:(CREATE UPLOAD)</tt>
		 * - <tt>-detail.action_detail_case:MOVE</tt>
		 */
		filter: FormControl<string | null | undefined>,

		/**
		 * Return activities for this Drive item. The format is
		 * "items/ITEM_ID".
		 */
		itemName: FormControl<string | null | undefined>,

		/**
		 * The requested number of activities to return. If not set, a default value
		 * is used.
		 */
		pageSize: FormControl<number | null | undefined>,

		/**
		 * The next_page_token value returned from a previous QueryDriveActivity
		 * request, if any.
		 */
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryDriveActivityRequestFormGroup() {
		return new FormGroup<QueryDriveActivityRequestFormProperties>({
			ancestorName: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			itemName: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for querying Drive activity. */
	export interface QueryDriveActivityResponse {

		/** List of activity requested. */
		activities?: Array<DriveActivity>;

		/**
		 * Token to retrieve the next page of results, or
		 * empty if there are no more results in the list.
		 */
		nextPageToken?: string | null;
	}

	/** Response message for querying Drive activity. */
	export interface QueryDriveActivityResponseFormProperties {

		/**
		 * Token to retrieve the next page of results, or
		 * empty if there are no more results in the list.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryDriveActivityResponseFormGroup() {
		return new FormGroup<QueryDriveActivityResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Query past activity in Google Drive.
		 * Post v2/activity:query
		 * @return {void} Successful response
		 */
		Driveactivity_activity_query(requestBody: QueryDriveActivityRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/activity:query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

