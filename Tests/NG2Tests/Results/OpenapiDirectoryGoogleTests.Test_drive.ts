import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Information about the user, the user's Drive, and system capabilities. */
	export interface About {

		/** Whether the user has installed the requesting app. */
		appInstalled?: boolean | null;

		/** Whether the user can create shared drives. */
		canCreateDrives?: boolean | null;

		/** Deprecated - use canCreateDrives instead. */
		canCreateTeamDrives?: boolean | null;

		/** A list of themes that are supported for shared drives. */
		AboutDriveThemes?: Array<AboutDriveThemes>;

		/** A map of source MIME type to possible targets for all supported exports. */
		exportFormats?: {[id: string]: Array<string> };

		/** The currently supported folder colors as RGB hex strings. */
		folderColorPalette?: Array<string>;

		/** A map of source MIME type to possible targets for all supported imports. */
		importFormats?: {[id: string]: Array<string> };

		/** Identifies what kind of resource this is. Value: the fixed string "drive#about". */
		kind?: string | null;

		/** A map of maximum import sizes by MIME type, in bytes. */
		maxImportSizes?: {[id: string]: string };

		/** The maximum upload size in bytes. */
		maxUploadSize?: string | null;

		/** The user's storage quota limits and usage. All fields are measured in bytes. */
		storageQuota?: AboutStorageQuota;

		/** Deprecated - use driveThemes instead. */
		AboutTeamDriveThemes?: Array<AboutTeamDriveThemes>;

		/** Information about a Drive user. */
		user?: User;
	}

	/** Information about the user, the user's Drive, and system capabilities. */
	export interface AboutFormProperties {

		/** Whether the user has installed the requesting app. */
		appInstalled: FormControl<boolean | null | undefined>,

		/** Whether the user can create shared drives. */
		canCreateDrives: FormControl<boolean | null | undefined>,

		/** Deprecated - use canCreateDrives instead. */
		canCreateTeamDrives: FormControl<boolean | null | undefined>,

		/** A map of source MIME type to possible targets for all supported exports. */
		exportFormats: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/** A map of source MIME type to possible targets for all supported imports. */
		importFormats: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "drive#about". */
		kind: FormControl<string | null | undefined>,

		/** A map of maximum import sizes by MIME type, in bytes. */
		maxImportSizes: FormControl<{[id: string]: string } | null | undefined>,

		/** The maximum upload size in bytes. */
		maxUploadSize: FormControl<string | null | undefined>,
	}
	export function CreateAboutFormGroup() {
		return new FormGroup<AboutFormProperties>({
			appInstalled: new FormControl<boolean | null | undefined>(undefined),
			canCreateDrives: new FormControl<boolean | null | undefined>(undefined),
			canCreateTeamDrives: new FormControl<boolean | null | undefined>(undefined),
			exportFormats: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			importFormats: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			maxImportSizes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			maxUploadSize: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AboutDriveThemes {

		/** A link to this theme's background image. */
		backgroundImageLink?: string | null;

		/** The color of this theme as an RGB hex string. */
		colorRgb?: string | null;

		/** The ID of the theme. */
		id?: string | null;
	}
	export interface AboutDriveThemesFormProperties {

		/** A link to this theme's background image. */
		backgroundImageLink: FormControl<string | null | undefined>,

		/** The color of this theme as an RGB hex string. */
		colorRgb: FormControl<string | null | undefined>,

		/** The ID of the theme. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateAboutDriveThemesFormGroup() {
		return new FormGroup<AboutDriveThemesFormProperties>({
			backgroundImageLink: new FormControl<string | null | undefined>(undefined),
			colorRgb: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AboutStorageQuota {

		/** The usage limit, if applicable. This will not be present if the user has unlimited storage. */
		limit?: string | null;

		/** The total usage across all services. */
		usage?: string | null;

		/** The usage by all files in Google Drive. */
		usageInDrive?: string | null;

		/** The usage by trashed files in Google Drive. */
		usageInDriveTrash?: string | null;
	}
	export interface AboutStorageQuotaFormProperties {

		/** The usage limit, if applicable. This will not be present if the user has unlimited storage. */
		limit: FormControl<string | null | undefined>,

		/** The total usage across all services. */
		usage: FormControl<string | null | undefined>,

		/** The usage by all files in Google Drive. */
		usageInDrive: FormControl<string | null | undefined>,

		/** The usage by trashed files in Google Drive. */
		usageInDriveTrash: FormControl<string | null | undefined>,
	}
	export function CreateAboutStorageQuotaFormGroup() {
		return new FormGroup<AboutStorageQuotaFormProperties>({
			limit: new FormControl<string | null | undefined>(undefined),
			usage: new FormControl<string | null | undefined>(undefined),
			usageInDrive: new FormControl<string | null | undefined>(undefined),
			usageInDriveTrash: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AboutTeamDriveThemes {

		/** Deprecated - use driveThemes/backgroundImageLink instead. */
		backgroundImageLink?: string | null;

		/** Deprecated - use driveThemes/colorRgb instead. */
		colorRgb?: string | null;

		/** Deprecated - use driveThemes/id instead. */
		id?: string | null;
	}
	export interface AboutTeamDriveThemesFormProperties {

		/** Deprecated - use driveThemes/backgroundImageLink instead. */
		backgroundImageLink: FormControl<string | null | undefined>,

		/** Deprecated - use driveThemes/colorRgb instead. */
		colorRgb: FormControl<string | null | undefined>,

		/** Deprecated - use driveThemes/id instead. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateAboutTeamDriveThemesFormGroup() {
		return new FormGroup<AboutTeamDriveThemesFormProperties>({
			backgroundImageLink: new FormControl<string | null | undefined>(undefined),
			colorRgb: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a Drive user. */
	export interface User {

		/** A plain text displayable name for this user. */
		displayName?: string | null;

		/** The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester. */
		emailAddress?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#user". */
		kind?: string | null;

		/** Whether this user is the requesting user. */
		me?: boolean | null;

		/** The user's ID as visible in Permission resources. */
		permissionId?: string | null;

		/** A link to the user's profile photo, if available. */
		photoLink?: string | null;
	}

	/** Information about a Drive user. */
	export interface UserFormProperties {

		/** A plain text displayable name for this user. */
		displayName: FormControl<string | null | undefined>,

		/** The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester. */
		emailAddress: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "drive#user". */
		kind: FormControl<string | null | undefined>,

		/** Whether this user is the requesting user. */
		me: FormControl<boolean | null | undefined>,

		/** The user's ID as visible in Permission resources. */
		permissionId: FormControl<string | null | undefined>,

		/** A link to the user's profile photo, if available. */
		photoLink: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			me: new FormControl<boolean | null | undefined>(undefined),
			permissionId: new FormControl<string | null | undefined>(undefined),
			photoLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A change to a file or shared drive. */
	export interface Change {

		/** The type of the change. Possible values are file and drive. */
		changeType?: string | null;

		/** Representation of a shared drive. */
		drive?: Drive;

		/** The ID of the shared drive associated with this change. */
		driveId?: string | null;

		/** The metadata for a file. */
		file?: File;

		/** The ID of the file which has changed. */
		fileId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#change". */
		kind?: string | null;

		/** Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access. */
		removed?: boolean | null;

		/** Deprecated: use the drive collection instead. */
		teamDrive?: TeamDrive;

		/** Deprecated - use driveId instead. */
		teamDriveId?: string | null;

		/** The time of this change (RFC 3339 date-time). */
		time?: Date | null;

		/** Deprecated - use changeType instead. */
		type?: string | null;
	}

	/** A change to a file or shared drive. */
	export interface ChangeFormProperties {

		/** The type of the change. Possible values are file and drive. */
		changeType: FormControl<string | null | undefined>,

		/** The ID of the shared drive associated with this change. */
		driveId: FormControl<string | null | undefined>,

		/** The ID of the file which has changed. */
		fileId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "drive#change". */
		kind: FormControl<string | null | undefined>,

		/** Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access. */
		removed: FormControl<boolean | null | undefined>,

		/** Deprecated - use driveId instead. */
		teamDriveId: FormControl<string | null | undefined>,

		/** The time of this change (RFC 3339 date-time). */
		time: FormControl<Date | null | undefined>,

		/** Deprecated - use changeType instead. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateChangeFormGroup() {
		return new FormGroup<ChangeFormProperties>({
			changeType: new FormControl<string | null | undefined>(undefined),
			driveId: new FormControl<string | null | undefined>(undefined),
			fileId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			removed: new FormControl<boolean | null | undefined>(undefined),
			teamDriveId: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representation of a shared drive. */
	export interface Drive {

		/** An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on drive.drives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set. */
		backgroundImageFile?: DriveBackgroundImageFile;

		/** A short-lived link to this shared drive's background image. */
		backgroundImageLink?: string | null;

		/** Capabilities the current user has on this shared drive. */
		capabilities?: DriveCapabilities;

		/** The color of this shared drive as an RGB hex string. It can only be set on a drive.drives.update request that does not set themeId. */
		colorRgb?: string | null;

		/** The time at which the shared drive was created (RFC 3339 date-time). */
		createdTime?: Date | null;

		/** Whether the shared drive is hidden from default view. */
		hidden?: boolean | null;

		/** The ID of this shared drive which is also the ID of the top level folder of this shared drive. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#drive". */
		kind?: string | null;

		/** The name of this shared drive. */
		name?: string | null;

		/** A set of restrictions that apply to this shared drive or items inside this shared drive. */
		restrictions?: DriveRestrictions;

		/** The ID of the theme from which the background image and color will be set. The set of possible driveThemes can be retrieved from a drive.about.get response. When not specified on a drive.drives.create request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile. */
		themeId?: string | null;
	}

	/** Representation of a shared drive. */
	export interface DriveFormProperties {

		/** A short-lived link to this shared drive's background image. */
		backgroundImageLink: FormControl<string | null | undefined>,

		/** The color of this shared drive as an RGB hex string. It can only be set on a drive.drives.update request that does not set themeId. */
		colorRgb: FormControl<string | null | undefined>,

		/** The time at which the shared drive was created (RFC 3339 date-time). */
		createdTime: FormControl<Date | null | undefined>,

		/** Whether the shared drive is hidden from default view. */
		hidden: FormControl<boolean | null | undefined>,

		/** The ID of this shared drive which is also the ID of the top level folder of this shared drive. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "drive#drive". */
		kind: FormControl<string | null | undefined>,

		/** The name of this shared drive. */
		name: FormControl<string | null | undefined>,

		/** The ID of the theme from which the background image and color will be set. The set of possible driveThemes can be retrieved from a drive.about.get response. When not specified on a drive.drives.create request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile. */
		themeId: FormControl<string | null | undefined>,
	}
	export function CreateDriveFormGroup() {
		return new FormGroup<DriveFormProperties>({
			backgroundImageLink: new FormControl<string | null | undefined>(undefined),
			colorRgb: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			themeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DriveBackgroundImageFile {

		/** The ID of an image file in Google Drive to use for the background image. */
		id?: string | null;

		/** The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high. */
		width?: number | null;

		/** The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image. */
		xCoordinate?: number | null;

		/** The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image. */
		yCoordinate?: number | null;
	}
	export interface DriveBackgroundImageFileFormProperties {

		/** The ID of an image file in Google Drive to use for the background image. */
		id: FormControl<string | null | undefined>,

		/** The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high. */
		width: FormControl<number | null | undefined>,

		/** The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image. */
		xCoordinate: FormControl<number | null | undefined>,

		/** The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image. */
		yCoordinate: FormControl<number | null | undefined>,
	}
	export function CreateDriveBackgroundImageFileFormGroup() {
		return new FormGroup<DriveBackgroundImageFileFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
			xCoordinate: new FormControl<number | null | undefined>(undefined),
			yCoordinate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DriveCapabilities {

		/** Whether the current user can add children to folders in this shared drive. */
		canAddChildren?: boolean | null;

		/** Whether the current user can change the copyRequiresWriterPermission restriction of this shared drive. */
		canChangeCopyRequiresWriterPermissionRestriction?: boolean | null;

		/** Whether the current user can change the domainUsersOnly restriction of this shared drive. */
		canChangeDomainUsersOnlyRestriction?: boolean | null;

		/** Whether the current user can change the background of this shared drive. */
		canChangeDriveBackground?: boolean | null;

		/** Whether the current user can change the driveMembersOnly restriction of this shared drive. */
		canChangeDriveMembersOnlyRestriction?: boolean | null;

		/** Whether the current user can comment on files in this shared drive. */
		canComment?: boolean | null;

		/** Whether the current user can copy files in this shared drive. */
		canCopy?: boolean | null;

		/** Whether the current user can delete children from folders in this shared drive. */
		canDeleteChildren?: boolean | null;

		/** Whether the current user can delete this shared drive. Attempting to delete the shared drive may still fail if there are untrashed items inside the shared drive. */
		canDeleteDrive?: boolean | null;

		/** Whether the current user can download files in this shared drive. */
		canDownload?: boolean | null;

		/** Whether the current user can edit files in this shared drive */
		canEdit?: boolean | null;

		/** Whether the current user can list the children of folders in this shared drive. */
		canListChildren?: boolean | null;

		/** Whether the current user can add members to this shared drive or remove them or change their role. */
		canManageMembers?: boolean | null;

		/** Whether the current user can read the revisions resource of files in this shared drive. */
		canReadRevisions?: boolean | null;

		/** Whether the current user can rename files or folders in this shared drive. */
		canRename?: boolean | null;

		/** Whether the current user can rename this shared drive. */
		canRenameDrive?: boolean | null;

		/** Whether the current user can share files or folders in this shared drive. */
		canShare?: boolean | null;

		/** Whether the current user can trash children from folders in this shared drive. */
		canTrashChildren?: boolean | null;
	}
	export interface DriveCapabilitiesFormProperties {

		/** Whether the current user can add children to folders in this shared drive. */
		canAddChildren: FormControl<boolean | null | undefined>,

		/** Whether the current user can change the copyRequiresWriterPermission restriction of this shared drive. */
		canChangeCopyRequiresWriterPermissionRestriction: FormControl<boolean | null | undefined>,

		/** Whether the current user can change the domainUsersOnly restriction of this shared drive. */
		canChangeDomainUsersOnlyRestriction: FormControl<boolean | null | undefined>,

		/** Whether the current user can change the background of this shared drive. */
		canChangeDriveBackground: FormControl<boolean | null | undefined>,

		/** Whether the current user can change the driveMembersOnly restriction of this shared drive. */
		canChangeDriveMembersOnlyRestriction: FormControl<boolean | null | undefined>,

		/** Whether the current user can comment on files in this shared drive. */
		canComment: FormControl<boolean | null | undefined>,

		/** Whether the current user can copy files in this shared drive. */
		canCopy: FormControl<boolean | null | undefined>,

		/** Whether the current user can delete children from folders in this shared drive. */
		canDeleteChildren: FormControl<boolean | null | undefined>,

		/** Whether the current user can delete this shared drive. Attempting to delete the shared drive may still fail if there are untrashed items inside the shared drive. */
		canDeleteDrive: FormControl<boolean | null | undefined>,

		/** Whether the current user can download files in this shared drive. */
		canDownload: FormControl<boolean | null | undefined>,

		/** Whether the current user can edit files in this shared drive */
		canEdit: FormControl<boolean | null | undefined>,

		/** Whether the current user can list the children of folders in this shared drive. */
		canListChildren: FormControl<boolean | null | undefined>,

		/** Whether the current user can add members to this shared drive or remove them or change their role. */
		canManageMembers: FormControl<boolean | null | undefined>,

		/** Whether the current user can read the revisions resource of files in this shared drive. */
		canReadRevisions: FormControl<boolean | null | undefined>,

		/** Whether the current user can rename files or folders in this shared drive. */
		canRename: FormControl<boolean | null | undefined>,

		/** Whether the current user can rename this shared drive. */
		canRenameDrive: FormControl<boolean | null | undefined>,

		/** Whether the current user can share files or folders in this shared drive. */
		canShare: FormControl<boolean | null | undefined>,

		/** Whether the current user can trash children from folders in this shared drive. */
		canTrashChildren: FormControl<boolean | null | undefined>,
	}
	export function CreateDriveCapabilitiesFormGroup() {
		return new FormGroup<DriveCapabilitiesFormProperties>({
			canAddChildren: new FormControl<boolean | null | undefined>(undefined),
			canChangeCopyRequiresWriterPermissionRestriction: new FormControl<boolean | null | undefined>(undefined),
			canChangeDomainUsersOnlyRestriction: new FormControl<boolean | null | undefined>(undefined),
			canChangeDriveBackground: new FormControl<boolean | null | undefined>(undefined),
			canChangeDriveMembersOnlyRestriction: new FormControl<boolean | null | undefined>(undefined),
			canComment: new FormControl<boolean | null | undefined>(undefined),
			canCopy: new FormControl<boolean | null | undefined>(undefined),
			canDeleteChildren: new FormControl<boolean | null | undefined>(undefined),
			canDeleteDrive: new FormControl<boolean | null | undefined>(undefined),
			canDownload: new FormControl<boolean | null | undefined>(undefined),
			canEdit: new FormControl<boolean | null | undefined>(undefined),
			canListChildren: new FormControl<boolean | null | undefined>(undefined),
			canManageMembers: new FormControl<boolean | null | undefined>(undefined),
			canReadRevisions: new FormControl<boolean | null | undefined>(undefined),
			canRename: new FormControl<boolean | null | undefined>(undefined),
			canRenameDrive: new FormControl<boolean | null | undefined>(undefined),
			canShare: new FormControl<boolean | null | undefined>(undefined),
			canTrashChildren: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DriveRestrictions {

		/** Whether administrative privileges on this shared drive are required to modify restrictions. */
		adminManagedRestrictions?: boolean | null;

		/** Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside this shared drive. */
		copyRequiresWriterPermission?: boolean | null;

		/** Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of this shared drive. */
		domainUsersOnly?: boolean | null;

		/** Whether access to items inside this shared drive is restricted to its members. */
		driveMembersOnly?: boolean | null;
	}
	export interface DriveRestrictionsFormProperties {

		/** Whether administrative privileges on this shared drive are required to modify restrictions. */
		adminManagedRestrictions: FormControl<boolean | null | undefined>,

		/** Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside this shared drive. */
		copyRequiresWriterPermission: FormControl<boolean | null | undefined>,

		/** Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of this shared drive. */
		domainUsersOnly: FormControl<boolean | null | undefined>,

		/** Whether access to items inside this shared drive is restricted to its members. */
		driveMembersOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateDriveRestrictionsFormGroup() {
		return new FormGroup<DriveRestrictionsFormProperties>({
			adminManagedRestrictions: new FormControl<boolean | null | undefined>(undefined),
			copyRequiresWriterPermission: new FormControl<boolean | null | undefined>(undefined),
			domainUsersOnly: new FormControl<boolean | null | undefined>(undefined),
			driveMembersOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The metadata for a file. */
	export interface File {

		/**
		 * A collection of arbitrary key-value pairs which are private to the requesting app.
		 * Entries with null values are cleared in update and copy requests.
		 */
		appProperties?: {[id: string]: string };

		/** Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take. */
		capabilities?: FileCapabilities;

		/** Additional information about the content of the file. These fields are never populated in responses. */
		contentHints?: FileContentHints;

		/** Whether the options to copy, print, or download this file, should be disabled for readers and commenters. */
		copyRequiresWriterPermission?: boolean | null;

		/** The time at which the file was created (RFC 3339 date-time). */
		createdTime?: Date | null;

		/** A short description of the file. */
		description?: string | null;

		/** ID of the shared drive the file resides in. Only populated for items in shared drives. */
		driveId?: string | null;

		/** Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder. */
		explicitlyTrashed?: boolean | null;

		/** Links for exporting Google Docs to specific formats. */
		exportLinks?: {[id: string]: string };

		/** The final component of fullFileExtension. This is only available for files with binary content in Google Drive. */
		fileExtension?: string | null;

		/**
		 * The color for a folder as an RGB hex string. The supported colors are published in the folderColorPalette field of the About resource.
		 * If an unsupported color is specified, the closest color in the palette will be used instead.
		 */
		folderColorRgb?: string | null;

		/**
		 * The full file extension extracted from the name field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive.
		 * This is automatically updated when the name field changes, however it is not cleared if the new name does not contain a valid extension.
		 */
		fullFileExtension?: string | null;

		/** Whether there are permissions directly on this file. This field is only populated for items in shared drives. */
		hasAugmentedPermissions?: boolean | null;

		/** Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field. */
		hasThumbnail?: boolean | null;

		/** The ID of the file's head revision. This is currently only available for files with binary content in Google Drive. */
		headRevisionId?: string | null;

		/** A static, unauthenticated link to the file's icon. */
		iconLink?: string | null;

		/** The ID of the file. */
		id?: string | null;

		/** Additional metadata about image media, if available. */
		imageMediaMetadata?: FileImageMediaMetadata;

		/** Whether the file was created or opened by the requesting app. */
		isAppAuthorized?: boolean | null;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#file". */
		kind?: string | null;

		/** Information about a Drive user. */
		lastModifyingUser?: User;

		/** The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive. */
		md5Checksum?: string | null;

		/**
		 * The MIME type of the file.
		 * Google Drive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new revision is uploaded.
		 * If a file is created with a Google Doc MIME type, the uploaded content will be imported if possible. The supported import formats are published in the About resource.
		 */
		mimeType?: string | null;

		/** Whether the file has been modified by this user. */
		modifiedByMe?: boolean | null;

		/** The last time the file was modified by the user (RFC 3339 date-time). */
		modifiedByMeTime?: Date | null;

		/**
		 * The last time the file was modified by anyone (RFC 3339 date-time).
		 * Note that setting modifiedTime will also update modifiedByMeTime for the user.
		 */
		modifiedTime?: Date | null;

		/** The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant. */
		name?: string | null;

		/** The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Google Drive. */
		originalFilename?: string | null;

		/** Whether the user owns the file. Not populated for items in shared drives. */
		ownedByMe?: boolean | null;

		/** The owners of the file. Currently, only certain legacy files may have more than one owner. Not populated for items in shared drives. */
		owners?: Array<User>;

		/**
		 * The IDs of the parent folders which contain the file.
		 * If not specified as part of a create request, the file will be placed directly in the user's My Drive folder. If not specified as part of a copy request, the file will inherit any discoverable parents of the source file. Update requests must use the addParents and removeParents parameters to modify the parents list.
		 */
		parents?: Array<string>;

		/** List of permission IDs for users with access to this file. */
		permissionIds?: Array<string>;

		/** The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives. */
		permissions?: Array<Permission>;

		/**
		 * A collection of arbitrary key-value pairs which are visible to all apps.
		 * Entries with null values are cleared in update and copy requests.
		 */
		properties?: {[id: string]: string };

		/** The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled. */
		quotaBytesUsed?: string | null;

		/** Whether the file has been shared. Not populated for items in shared drives. */
		shared?: boolean | null;

		/** The time at which the file was shared with the user, if applicable (RFC 3339 date-time). */
		sharedWithMeTime?: Date | null;

		/** Information about a Drive user. */
		sharingUser?: User;

		/** Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut. */
		shortcutDetails?: FileShortcutDetails;

		/** The size of the file's content in bytes. This is only applicable to files with binary content in Google Drive. */
		size?: string | null;

		/** The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'. */
		spaces?: Array<string>;

		/** Whether the user has starred the file. */
		starred?: boolean | null;

		/** Deprecated - use driveId instead. */
		teamDriveId?: string | null;

		/** A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. */
		thumbnailLink?: string | null;

		/** The thumbnail version for use in thumbnail cache invalidation. */
		thumbnailVersion?: string | null;

		/** Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash. */
		trashed?: boolean | null;

		/** The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives. */
		trashedTime?: Date | null;

		/** Information about a Drive user. */
		trashingUser?: User;

		/** A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user. */
		version?: string | null;

		/** Additional metadata about video media. This may not be available immediately upon upload. */
		videoMediaMetadata?: FileVideoMediaMetadata;

		/** Whether the file has been viewed by this user. */
		viewedByMe?: boolean | null;

		/** The last time the file was viewed by the user (RFC 3339 date-time). */
		viewedByMeTime?: Date | null;

		/** Deprecated - use copyRequiresWriterPermission instead. */
		viewersCanCopyContent?: boolean | null;

		/** A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive. */
		webContentLink?: string | null;

		/** A link for opening the file in a relevant Google editor or viewer in a browser. */
		webViewLink?: string | null;

		/** Whether users with only writer permission can modify the file's permissions. Not populated for items in shared drives. */
		writersCanShare?: boolean | null;
	}

	/** The metadata for a file. */
	export interface FileFormProperties {

		/**
		 * A collection of arbitrary key-value pairs which are private to the requesting app.
		 * Entries with null values are cleared in update and copy requests.
		 */
		appProperties: FormControl<{[id: string]: string } | null | undefined>,

		/** Whether the options to copy, print, or download this file, should be disabled for readers and commenters. */
		copyRequiresWriterPermission: FormControl<boolean | null | undefined>,

		/** The time at which the file was created (RFC 3339 date-time). */
		createdTime: FormControl<Date | null | undefined>,

		/** A short description of the file. */
		description: FormControl<string | null | undefined>,

		/** ID of the shared drive the file resides in. Only populated for items in shared drives. */
		driveId: FormControl<string | null | undefined>,

		/** Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder. */
		explicitlyTrashed: FormControl<boolean | null | undefined>,

		/** Links for exporting Google Docs to specific formats. */
		exportLinks: FormControl<{[id: string]: string } | null | undefined>,

		/** The final component of fullFileExtension. This is only available for files with binary content in Google Drive. */
		fileExtension: FormControl<string | null | undefined>,

		/**
		 * The color for a folder as an RGB hex string. The supported colors are published in the folderColorPalette field of the About resource.
		 * If an unsupported color is specified, the closest color in the palette will be used instead.
		 */
		folderColorRgb: FormControl<string | null | undefined>,

		/**
		 * The full file extension extracted from the name field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive.
		 * This is automatically updated when the name field changes, however it is not cleared if the new name does not contain a valid extension.
		 */
		fullFileExtension: FormControl<string | null | undefined>,

		/** Whether there are permissions directly on this file. This field is only populated for items in shared drives. */
		hasAugmentedPermissions: FormControl<boolean | null | undefined>,

		/** Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field. */
		hasThumbnail: FormControl<boolean | null | undefined>,

		/** The ID of the file's head revision. This is currently only available for files with binary content in Google Drive. */
		headRevisionId: FormControl<string | null | undefined>,

		/** A static, unauthenticated link to the file's icon. */
		iconLink: FormControl<string | null | undefined>,

		/** The ID of the file. */
		id: FormControl<string | null | undefined>,

		/** Whether the file was created or opened by the requesting app. */
		isAppAuthorized: FormControl<boolean | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "drive#file". */
		kind: FormControl<string | null | undefined>,

		/** The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive. */
		md5Checksum: FormControl<string | null | undefined>,

		/**
		 * The MIME type of the file.
		 * Google Drive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new revision is uploaded.
		 * If a file is created with a Google Doc MIME type, the uploaded content will be imported if possible. The supported import formats are published in the About resource.
		 */
		mimeType: FormControl<string | null | undefined>,

		/** Whether the file has been modified by this user. */
		modifiedByMe: FormControl<boolean | null | undefined>,

		/** The last time the file was modified by the user (RFC 3339 date-time). */
		modifiedByMeTime: FormControl<Date | null | undefined>,

		/**
		 * The last time the file was modified by anyone (RFC 3339 date-time).
		 * Note that setting modifiedTime will also update modifiedByMeTime for the user.
		 */
		modifiedTime: FormControl<Date | null | undefined>,

		/** The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant. */
		name: FormControl<string | null | undefined>,

		/** The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Google Drive. */
		originalFilename: FormControl<string | null | undefined>,

		/** Whether the user owns the file. Not populated for items in shared drives. */
		ownedByMe: FormControl<boolean | null | undefined>,

		/**
		 * A collection of arbitrary key-value pairs which are visible to all apps.
		 * Entries with null values are cleared in update and copy requests.
		 */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled. */
		quotaBytesUsed: FormControl<string | null | undefined>,

		/** Whether the file has been shared. Not populated for items in shared drives. */
		shared: FormControl<boolean | null | undefined>,

		/** The time at which the file was shared with the user, if applicable (RFC 3339 date-time). */
		sharedWithMeTime: FormControl<Date | null | undefined>,

		/** The size of the file's content in bytes. This is only applicable to files with binary content in Google Drive. */
		size: FormControl<string | null | undefined>,

		/** Whether the user has starred the file. */
		starred: FormControl<boolean | null | undefined>,

		/** Deprecated - use driveId instead. */
		teamDriveId: FormControl<string | null | undefined>,

		/** A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. */
		thumbnailLink: FormControl<string | null | undefined>,

		/** The thumbnail version for use in thumbnail cache invalidation. */
		thumbnailVersion: FormControl<string | null | undefined>,

		/** Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash. */
		trashed: FormControl<boolean | null | undefined>,

		/** The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives. */
		trashedTime: FormControl<Date | null | undefined>,

		/** A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user. */
		version: FormControl<string | null | undefined>,

		/** Whether the file has been viewed by this user. */
		viewedByMe: FormControl<boolean | null | undefined>,

		/** The last time the file was viewed by the user (RFC 3339 date-time). */
		viewedByMeTime: FormControl<Date | null | undefined>,

		/** Deprecated - use copyRequiresWriterPermission instead. */
		viewersCanCopyContent: FormControl<boolean | null | undefined>,

		/** A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive. */
		webContentLink: FormControl<string | null | undefined>,

		/** A link for opening the file in a relevant Google editor or viewer in a browser. */
		webViewLink: FormControl<string | null | undefined>,

		/** Whether users with only writer permission can modify the file's permissions. Not populated for items in shared drives. */
		writersCanShare: FormControl<boolean | null | undefined>,
	}
	export function CreateFileFormGroup() {
		return new FormGroup<FileFormProperties>({
			appProperties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			copyRequiresWriterPermission: new FormControl<boolean | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			driveId: new FormControl<string | null | undefined>(undefined),
			explicitlyTrashed: new FormControl<boolean | null | undefined>(undefined),
			exportLinks: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			fileExtension: new FormControl<string | null | undefined>(undefined),
			folderColorRgb: new FormControl<string | null | undefined>(undefined),
			fullFileExtension: new FormControl<string | null | undefined>(undefined),
			hasAugmentedPermissions: new FormControl<boolean | null | undefined>(undefined),
			hasThumbnail: new FormControl<boolean | null | undefined>(undefined),
			headRevisionId: new FormControl<string | null | undefined>(undefined),
			iconLink: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isAppAuthorized: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			md5Checksum: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			modifiedByMe: new FormControl<boolean | null | undefined>(undefined),
			modifiedByMeTime: new FormControl<Date | null | undefined>(undefined),
			modifiedTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			originalFilename: new FormControl<string | null | undefined>(undefined),
			ownedByMe: new FormControl<boolean | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			quotaBytesUsed: new FormControl<string | null | undefined>(undefined),
			shared: new FormControl<boolean | null | undefined>(undefined),
			sharedWithMeTime: new FormControl<Date | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			starred: new FormControl<boolean | null | undefined>(undefined),
			teamDriveId: new FormControl<string | null | undefined>(undefined),
			thumbnailLink: new FormControl<string | null | undefined>(undefined),
			thumbnailVersion: new FormControl<string | null | undefined>(undefined),
			trashed: new FormControl<boolean | null | undefined>(undefined),
			trashedTime: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			viewedByMe: new FormControl<boolean | null | undefined>(undefined),
			viewedByMeTime: new FormControl<Date | null | undefined>(undefined),
			viewersCanCopyContent: new FormControl<boolean | null | undefined>(undefined),
			webContentLink: new FormControl<string | null | undefined>(undefined),
			webViewLink: new FormControl<string | null | undefined>(undefined),
			writersCanShare: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface FileCapabilities {

		/** Whether the current user can add children to this folder. This is always false when the item is not a folder. */
		canAddChildren?: boolean | null;

		/** Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files. */
		canAddMyDriveParent?: boolean | null;

		/** Whether the current user can change the copyRequiresWriterPermission restriction of this file. */
		canChangeCopyRequiresWriterPermission?: boolean | null;

		/** Deprecated */
		canChangeViewersCanCopyContent?: boolean | null;

		/** Whether the current user can comment on this file. */
		canComment?: boolean | null;

		/** Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder. */
		canCopy?: boolean | null;

		/** Whether the current user can delete this file. */
		canDelete?: boolean | null;

		/** Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives. */
		canDeleteChildren?: boolean | null;

		/** Whether the current user can download this file. */
		canDownload?: boolean | null;

		/** Whether the current user can edit this file. Other factors may limit the type of changes a user can make to a file. For example, see canChangeCopyRequiresWriterPermission or canModifyContent. */
		canEdit?: boolean | null;

		/** Whether the current user can list the children of this folder. This is always false when the item is not a folder. */
		canListChildren?: boolean | null;

		/** Whether the current user can modify the content of this file. */
		canModifyContent?: boolean | null;

		/** Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives. */
		canMoveChildrenOutOfDrive?: boolean | null;

		/** Deprecated - use canMoveChildrenOutOfDrive instead. */
		canMoveChildrenOutOfTeamDrive?: boolean | null;

		/** Whether the current user can move children of this folder within the shared drive. This is false when the item is not a folder. Only populated for items in shared drives. */
		canMoveChildrenWithinDrive?: boolean | null;

		/** Deprecated - use canMoveChildrenWithinDrive instead. */
		canMoveChildrenWithinTeamDrive?: boolean | null;

		/** Deprecated - use canMoveItemOutOfDrive instead. */
		canMoveItemIntoTeamDrive?: boolean | null;

		/** Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added. */
		canMoveItemOutOfDrive?: boolean | null;

		/** Deprecated - use canMoveItemOutOfDrive instead. */
		canMoveItemOutOfTeamDrive?: boolean | null;

		/** Whether the current user can move this item within this shared drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added. Only populated for items in shared drives. */
		canMoveItemWithinDrive?: boolean | null;

		/** Deprecated - use canMoveItemWithinDrive instead. */
		canMoveItemWithinTeamDrive?: boolean | null;

		/** Deprecated - use canMoveItemWithinDrive or canMoveItemOutOfDrive instead. */
		canMoveTeamDriveItem?: boolean | null;

		/** Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives. */
		canReadDrive?: boolean | null;

		/** Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read. */
		canReadRevisions?: boolean | null;

		/** Deprecated - use canReadDrive instead. */
		canReadTeamDrive?: boolean | null;

		/** Whether the current user can remove children from this folder. This is always false when the item is not a folder. For a folder in a shared drive, use canDeleteChildren or canTrashChildren instead. */
		canRemoveChildren?: boolean | null;

		/** Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files. */
		canRemoveMyDriveParent?: boolean | null;

		/** Whether the current user can rename this file. */
		canRename?: boolean | null;

		/** Whether the current user can modify the sharing settings for this file. */
		canShare?: boolean | null;

		/** Whether the current user can move this file to trash. */
		canTrash?: boolean | null;

		/** Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives. */
		canTrashChildren?: boolean | null;

		/** Whether the current user can restore this file from trash. */
		canUntrash?: boolean | null;
	}
	export interface FileCapabilitiesFormProperties {

		/** Whether the current user can add children to this folder. This is always false when the item is not a folder. */
		canAddChildren: FormControl<boolean | null | undefined>,

		/** Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files. */
		canAddMyDriveParent: FormControl<boolean | null | undefined>,

		/** Whether the current user can change the copyRequiresWriterPermission restriction of this file. */
		canChangeCopyRequiresWriterPermission: FormControl<boolean | null | undefined>,

		/** Deprecated */
		canChangeViewersCanCopyContent: FormControl<boolean | null | undefined>,

		/** Whether the current user can comment on this file. */
		canComment: FormControl<boolean | null | undefined>,

		/** Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder. */
		canCopy: FormControl<boolean | null | undefined>,

		/** Whether the current user can delete this file. */
		canDelete: FormControl<boolean | null | undefined>,

		/** Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives. */
		canDeleteChildren: FormControl<boolean | null | undefined>,

		/** Whether the current user can download this file. */
		canDownload: FormControl<boolean | null | undefined>,

		/** Whether the current user can edit this file. Other factors may limit the type of changes a user can make to a file. For example, see canChangeCopyRequiresWriterPermission or canModifyContent. */
		canEdit: FormControl<boolean | null | undefined>,

		/** Whether the current user can list the children of this folder. This is always false when the item is not a folder. */
		canListChildren: FormControl<boolean | null | undefined>,

		/** Whether the current user can modify the content of this file. */
		canModifyContent: FormControl<boolean | null | undefined>,

		/** Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives. */
		canMoveChildrenOutOfDrive: FormControl<boolean | null | undefined>,

		/** Deprecated - use canMoveChildrenOutOfDrive instead. */
		canMoveChildrenOutOfTeamDrive: FormControl<boolean | null | undefined>,

		/** Whether the current user can move children of this folder within the shared drive. This is false when the item is not a folder. Only populated for items in shared drives. */
		canMoveChildrenWithinDrive: FormControl<boolean | null | undefined>,

		/** Deprecated - use canMoveChildrenWithinDrive instead. */
		canMoveChildrenWithinTeamDrive: FormControl<boolean | null | undefined>,

		/** Deprecated - use canMoveItemOutOfDrive instead. */
		canMoveItemIntoTeamDrive: FormControl<boolean | null | undefined>,

		/** Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added. */
		canMoveItemOutOfDrive: FormControl<boolean | null | undefined>,

		/** Deprecated - use canMoveItemOutOfDrive instead. */
		canMoveItemOutOfTeamDrive: FormControl<boolean | null | undefined>,

		/** Whether the current user can move this item within this shared drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added. Only populated for items in shared drives. */
		canMoveItemWithinDrive: FormControl<boolean | null | undefined>,

		/** Deprecated - use canMoveItemWithinDrive instead. */
		canMoveItemWithinTeamDrive: FormControl<boolean | null | undefined>,

		/** Deprecated - use canMoveItemWithinDrive or canMoveItemOutOfDrive instead. */
		canMoveTeamDriveItem: FormControl<boolean | null | undefined>,

		/** Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives. */
		canReadDrive: FormControl<boolean | null | undefined>,

		/** Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read. */
		canReadRevisions: FormControl<boolean | null | undefined>,

		/** Deprecated - use canReadDrive instead. */
		canReadTeamDrive: FormControl<boolean | null | undefined>,

		/** Whether the current user can remove children from this folder. This is always false when the item is not a folder. For a folder in a shared drive, use canDeleteChildren or canTrashChildren instead. */
		canRemoveChildren: FormControl<boolean | null | undefined>,

		/** Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files. */
		canRemoveMyDriveParent: FormControl<boolean | null | undefined>,

		/** Whether the current user can rename this file. */
		canRename: FormControl<boolean | null | undefined>,

		/** Whether the current user can modify the sharing settings for this file. */
		canShare: FormControl<boolean | null | undefined>,

		/** Whether the current user can move this file to trash. */
		canTrash: FormControl<boolean | null | undefined>,

		/** Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives. */
		canTrashChildren: FormControl<boolean | null | undefined>,

		/** Whether the current user can restore this file from trash. */
		canUntrash: FormControl<boolean | null | undefined>,
	}
	export function CreateFileCapabilitiesFormGroup() {
		return new FormGroup<FileCapabilitiesFormProperties>({
			canAddChildren: new FormControl<boolean | null | undefined>(undefined),
			canAddMyDriveParent: new FormControl<boolean | null | undefined>(undefined),
			canChangeCopyRequiresWriterPermission: new FormControl<boolean | null | undefined>(undefined),
			canChangeViewersCanCopyContent: new FormControl<boolean | null | undefined>(undefined),
			canComment: new FormControl<boolean | null | undefined>(undefined),
			canCopy: new FormControl<boolean | null | undefined>(undefined),
			canDelete: new FormControl<boolean | null | undefined>(undefined),
			canDeleteChildren: new FormControl<boolean | null | undefined>(undefined),
			canDownload: new FormControl<boolean | null | undefined>(undefined),
			canEdit: new FormControl<boolean | null | undefined>(undefined),
			canListChildren: new FormControl<boolean | null | undefined>(undefined),
			canModifyContent: new FormControl<boolean | null | undefined>(undefined),
			canMoveChildrenOutOfDrive: new FormControl<boolean | null | undefined>(undefined),
			canMoveChildrenOutOfTeamDrive: new FormControl<boolean | null | undefined>(undefined),
			canMoveChildrenWithinDrive: new FormControl<boolean | null | undefined>(undefined),
			canMoveChildrenWithinTeamDrive: new FormControl<boolean | null | undefined>(undefined),
			canMoveItemIntoTeamDrive: new FormControl<boolean | null | undefined>(undefined),
			canMoveItemOutOfDrive: new FormControl<boolean | null | undefined>(undefined),
			canMoveItemOutOfTeamDrive: new FormControl<boolean | null | undefined>(undefined),
			canMoveItemWithinDrive: new FormControl<boolean | null | undefined>(undefined),
			canMoveItemWithinTeamDrive: new FormControl<boolean | null | undefined>(undefined),
			canMoveTeamDriveItem: new FormControl<boolean | null | undefined>(undefined),
			canReadDrive: new FormControl<boolean | null | undefined>(undefined),
			canReadRevisions: new FormControl<boolean | null | undefined>(undefined),
			canReadTeamDrive: new FormControl<boolean | null | undefined>(undefined),
			canRemoveChildren: new FormControl<boolean | null | undefined>(undefined),
			canRemoveMyDriveParent: new FormControl<boolean | null | undefined>(undefined),
			canRename: new FormControl<boolean | null | undefined>(undefined),
			canShare: new FormControl<boolean | null | undefined>(undefined),
			canTrash: new FormControl<boolean | null | undefined>(undefined),
			canTrashChildren: new FormControl<boolean | null | undefined>(undefined),
			canUntrash: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface FileContentHints {

		/** Text to be indexed for the file to improve fullText queries. This is limited to 128KB in length and may contain HTML elements. */
		indexableText?: string | null;

		/** A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail. */
		thumbnail?: FileContentHintsThumbnail;
	}
	export interface FileContentHintsFormProperties {

		/** Text to be indexed for the file to improve fullText queries. This is limited to 128KB in length and may contain HTML elements. */
		indexableText: FormControl<string | null | undefined>,
	}
	export function CreateFileContentHintsFormGroup() {
		return new FormGroup<FileContentHintsFormProperties>({
			indexableText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileContentHintsThumbnail {

		/** The thumbnail data encoded with URL-safe Base64 (RFC 4648 section 5). */
		image?: string | null;

		/** The MIME type of the thumbnail. */
		mimeType?: string | null;
	}
	export interface FileContentHintsThumbnailFormProperties {

		/** The thumbnail data encoded with URL-safe Base64 (RFC 4648 section 5). */
		image: FormControl<string | null | undefined>,

		/** The MIME type of the thumbnail. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateFileContentHintsThumbnailFormGroup() {
		return new FormGroup<FileContentHintsThumbnailFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileImageMediaMetadata {

		/** The aperture used to create the photo (f-number). */
		aperture?: number | null;

		/** The make of the camera used to create the photo. */
		cameraMake?: string | null;

		/** The model of the camera used to create the photo. */
		cameraModel?: string | null;

		/** The color space of the photo. */
		colorSpace?: string | null;

		/** The exposure bias of the photo (APEX value). */
		exposureBias?: number | null;

		/** The exposure mode used to create the photo. */
		exposureMode?: string | null;

		/** The length of the exposure, in seconds. */
		exposureTime?: number | null;

		/** Whether a flash was used to create the photo. */
		flashUsed?: boolean | null;

		/** The focal length used to create the photo, in millimeters. */
		focalLength?: number | null;

		/** The height of the image in pixels. */
		height?: number | null;

		/** The ISO speed used to create the photo. */
		isoSpeed?: number | null;

		/** The lens used to create the photo. */
		lens?: string | null;

		/** Geographic location information stored in the image. */
		location?: FileImageMediaMetadataLocation;

		/** The smallest f-number of the lens at the focal length used to create the photo (APEX value). */
		maxApertureValue?: number | null;

		/** The metering mode used to create the photo. */
		meteringMode?: string | null;

		/** The number of clockwise 90 degree rotations applied from the image's original orientation. */
		rotation?: number | null;

		/** The type of sensor used to create the photo. */
		sensor?: string | null;

		/** The distance to the subject of the photo, in meters. */
		subjectDistance?: number | null;

		/** The date and time the photo was taken (EXIF DateTime). */
		time?: string | null;

		/** The white balance mode used to create the photo. */
		whiteBalance?: string | null;

		/** The width of the image in pixels. */
		width?: number | null;
	}
	export interface FileImageMediaMetadataFormProperties {

		/** The aperture used to create the photo (f-number). */
		aperture: FormControl<number | null | undefined>,

		/** The make of the camera used to create the photo. */
		cameraMake: FormControl<string | null | undefined>,

		/** The model of the camera used to create the photo. */
		cameraModel: FormControl<string | null | undefined>,

		/** The color space of the photo. */
		colorSpace: FormControl<string | null | undefined>,

		/** The exposure bias of the photo (APEX value). */
		exposureBias: FormControl<number | null | undefined>,

		/** The exposure mode used to create the photo. */
		exposureMode: FormControl<string | null | undefined>,

		/** The length of the exposure, in seconds. */
		exposureTime: FormControl<number | null | undefined>,

		/** Whether a flash was used to create the photo. */
		flashUsed: FormControl<boolean | null | undefined>,

		/** The focal length used to create the photo, in millimeters. */
		focalLength: FormControl<number | null | undefined>,

		/** The height of the image in pixels. */
		height: FormControl<number | null | undefined>,

		/** The ISO speed used to create the photo. */
		isoSpeed: FormControl<number | null | undefined>,

		/** The lens used to create the photo. */
		lens: FormControl<string | null | undefined>,

		/** The smallest f-number of the lens at the focal length used to create the photo (APEX value). */
		maxApertureValue: FormControl<number | null | undefined>,

		/** The metering mode used to create the photo. */
		meteringMode: FormControl<string | null | undefined>,

		/** The number of clockwise 90 degree rotations applied from the image's original orientation. */
		rotation: FormControl<number | null | undefined>,

		/** The type of sensor used to create the photo. */
		sensor: FormControl<string | null | undefined>,

		/** The distance to the subject of the photo, in meters. */
		subjectDistance: FormControl<number | null | undefined>,

		/** The date and time the photo was taken (EXIF DateTime). */
		time: FormControl<string | null | undefined>,

		/** The white balance mode used to create the photo. */
		whiteBalance: FormControl<string | null | undefined>,

		/** The width of the image in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateFileImageMediaMetadataFormGroup() {
		return new FormGroup<FileImageMediaMetadataFormProperties>({
			aperture: new FormControl<number | null | undefined>(undefined),
			cameraMake: new FormControl<string | null | undefined>(undefined),
			cameraModel: new FormControl<string | null | undefined>(undefined),
			colorSpace: new FormControl<string | null | undefined>(undefined),
			exposureBias: new FormControl<number | null | undefined>(undefined),
			exposureMode: new FormControl<string | null | undefined>(undefined),
			exposureTime: new FormControl<number | null | undefined>(undefined),
			flashUsed: new FormControl<boolean | null | undefined>(undefined),
			focalLength: new FormControl<number | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			isoSpeed: new FormControl<number | null | undefined>(undefined),
			lens: new FormControl<string | null | undefined>(undefined),
			maxApertureValue: new FormControl<number | null | undefined>(undefined),
			meteringMode: new FormControl<string | null | undefined>(undefined),
			rotation: new FormControl<number | null | undefined>(undefined),
			sensor: new FormControl<string | null | undefined>(undefined),
			subjectDistance: new FormControl<number | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
			whiteBalance: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FileImageMediaMetadataLocation {

		/** The altitude stored in the image. */
		altitude?: number | null;

		/** The latitude stored in the image. */
		latitude?: number | null;

		/** The longitude stored in the image. */
		longitude?: number | null;
	}
	export interface FileImageMediaMetadataLocationFormProperties {

		/** The altitude stored in the image. */
		altitude: FormControl<number | null | undefined>,

		/** The latitude stored in the image. */
		latitude: FormControl<number | null | undefined>,

		/** The longitude stored in the image. */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateFileImageMediaMetadataLocationFormGroup() {
		return new FormGroup<FileImageMediaMetadataLocationFormProperties>({
			altitude: new FormControl<number | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy. */
	export interface Permission {

		/** Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone. */
		allowFileDiscovery?: boolean | null;

		/** Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions. */
		deleted?: boolean | null;

		/**
		 * The "pretty" name of the value of the permission. The following is a list of examples for each type of permission:
		 * - user - User's full name, as defined for their Google account, such as "Joe Smith."
		 * - group - Name of the Google Group, such as "The Company Administrators."
		 * - domain - String domain name, such as "thecompany.com."
		 * - anyone - No displayName is present.
		 */
		displayName?: string | null;

		/** The domain to which this permission refers. */
		domain?: string | null;

		/** The email address of the user or group to which this permission refers. */
		emailAddress?: string | null;

		/**
		 * The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions:
		 * - They can only be set on user and group permissions
		 * - The time must be in the future
		 * - The time cannot be more than a year in the future
		 */
		expirationTime?: Date | null;

		/** The ID of this permission. This is a unique identifier for the grantee, and is published in User resources as permissionId. IDs should be treated as opaque values. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#permission". */
		kind?: string | null;

		/** Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items. */
		PermissionPermissionDetails?: Array<PermissionPermissionDetails>;

		/** A link to the user's profile photo, if available. */
		photoLink?: string | null;

		/**
		 * The role granted by this permission. While new values may be supported in the future, the following are currently allowed:
		 * - owner
		 * - organizer
		 * - fileOrganizer
		 * - writer
		 * - commenter
		 * - reader
		 */
		role?: string | null;

		/** Deprecated - use permissionDetails instead. */
		PermissionTeamDrivePermissionDetails?: Array<PermissionTeamDrivePermissionDetails>;

		/**
		 * The type of the grantee. Valid values are:
		 * - user
		 * - group
		 * - domain
		 * - anyone  When creating a permission, if type is user or group, you must provide an emailAddress for the user or group. When type is domain, you must provide a domain. There isn't extra information required for a anyone type.
		 */
		type?: string | null;
	}

	/** A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy. */
	export interface PermissionFormProperties {

		/** Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone. */
		allowFileDiscovery: FormControl<boolean | null | undefined>,

		/** Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions. */
		deleted: FormControl<boolean | null | undefined>,

		/**
		 * The "pretty" name of the value of the permission. The following is a list of examples for each type of permission:
		 * - user - User's full name, as defined for their Google account, such as "Joe Smith."
		 * - group - Name of the Google Group, such as "The Company Administrators."
		 * - domain - String domain name, such as "thecompany.com."
		 * - anyone - No displayName is present.
		 */
		displayName: FormControl<string | null | undefined>,

		/** The domain to which this permission refers. */
		domain: FormControl<string | null | undefined>,

		/** The email address of the user or group to which this permission refers. */
		emailAddress: FormControl<string | null | undefined>,

		/**
		 * The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions:
		 * - They can only be set on user and group permissions
		 * - The time must be in the future
		 * - The time cannot be more than a year in the future
		 */
		expirationTime: FormControl<Date | null | undefined>,

		/** The ID of this permission. This is a unique identifier for the grantee, and is published in User resources as permissionId. IDs should be treated as opaque values. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "drive#permission". */
		kind: FormControl<string | null | undefined>,

		/** A link to the user's profile photo, if available. */
		photoLink: FormControl<string | null | undefined>,

		/**
		 * The role granted by this permission. While new values may be supported in the future, the following are currently allowed:
		 * - owner
		 * - organizer
		 * - fileOrganizer
		 * - writer
		 * - commenter
		 * - reader
		 */
		role: FormControl<string | null | undefined>,

		/**
		 * The type of the grantee. Valid values are:
		 * - user
		 * - group
		 * - domain
		 * - anyone  When creating a permission, if type is user or group, you must provide an emailAddress for the user or group. When type is domain, you must provide a domain. There isn't extra information required for a anyone type.
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
			allowFileDiscovery: new FormControl<boolean | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			expirationTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			photoLink: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PermissionPermissionDetails {

		/** Whether this permission is inherited. This field is always populated. This is an output-only field. */
		inherited?: boolean | null;

		/** The ID of the item from which this permission is inherited. This is an output-only field. */
		inheritedFrom?: string | null;

		/**
		 * The permission type for this user. While new values may be added in future, the following are currently possible:
		 * - file
		 * - member
		 */
		permissionType?: string | null;

		/**
		 * The primary role for this user. While new values may be added in the future, the following are currently possible:
		 * - organizer
		 * - fileOrganizer
		 * - writer
		 * - commenter
		 * - reader
		 */
		role?: string | null;
	}
	export interface PermissionPermissionDetailsFormProperties {

		/** Whether this permission is inherited. This field is always populated. This is an output-only field. */
		inherited: FormControl<boolean | null | undefined>,

		/** The ID of the item from which this permission is inherited. This is an output-only field. */
		inheritedFrom: FormControl<string | null | undefined>,

		/**
		 * The permission type for this user. While new values may be added in future, the following are currently possible:
		 * - file
		 * - member
		 */
		permissionType: FormControl<string | null | undefined>,

		/**
		 * The primary role for this user. While new values may be added in the future, the following are currently possible:
		 * - organizer
		 * - fileOrganizer
		 * - writer
		 * - commenter
		 * - reader
		 */
		role: FormControl<string | null | undefined>,
	}
	export function CreatePermissionPermissionDetailsFormGroup() {
		return new FormGroup<PermissionPermissionDetailsFormProperties>({
			inherited: new FormControl<boolean | null | undefined>(undefined),
			inheritedFrom: new FormControl<string | null | undefined>(undefined),
			permissionType: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PermissionTeamDrivePermissionDetails {

		/** Deprecated - use permissionDetails/inherited instead. */
		inherited?: boolean | null;

		/** Deprecated - use permissionDetails/inheritedFrom instead. */
		inheritedFrom?: string | null;

		/** Deprecated - use permissionDetails/role instead. */
		role?: string | null;

		/** Deprecated - use permissionDetails/permissionType instead. */
		teamDrivePermissionType?: string | null;
	}
	export interface PermissionTeamDrivePermissionDetailsFormProperties {

		/** Deprecated - use permissionDetails/inherited instead. */
		inherited: FormControl<boolean | null | undefined>,

		/** Deprecated - use permissionDetails/inheritedFrom instead. */
		inheritedFrom: FormControl<string | null | undefined>,

		/** Deprecated - use permissionDetails/role instead. */
		role: FormControl<string | null | undefined>,

		/** Deprecated - use permissionDetails/permissionType instead. */
		teamDrivePermissionType: FormControl<string | null | undefined>,
	}
	export function CreatePermissionTeamDrivePermissionDetailsFormGroup() {
		return new FormGroup<PermissionTeamDrivePermissionDetailsFormProperties>({
			inherited: new FormControl<boolean | null | undefined>(undefined),
			inheritedFrom: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
			teamDrivePermissionType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileShortcutDetails {

		/** The ID of the file that this shortcut points to. */
		targetId?: string | null;

		/** The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created. */
		targetMimeType?: string | null;
	}
	export interface FileShortcutDetailsFormProperties {

		/** The ID of the file that this shortcut points to. */
		targetId: FormControl<string | null | undefined>,

		/** The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created. */
		targetMimeType: FormControl<string | null | undefined>,
	}
	export function CreateFileShortcutDetailsFormGroup() {
		return new FormGroup<FileShortcutDetailsFormProperties>({
			targetId: new FormControl<string | null | undefined>(undefined),
			targetMimeType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileVideoMediaMetadata {

		/** The duration of the video in milliseconds. */
		durationMillis?: string | null;

		/** The height of the video in pixels. */
		height?: number | null;

		/** The width of the video in pixels. */
		width?: number | null;
	}
	export interface FileVideoMediaMetadataFormProperties {

		/** The duration of the video in milliseconds. */
		durationMillis: FormControl<string | null | undefined>,

		/** The height of the video in pixels. */
		height: FormControl<number | null | undefined>,

		/** The width of the video in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateFileVideoMediaMetadataFormGroup() {
		return new FormGroup<FileVideoMediaMetadataFormProperties>({
			durationMillis: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Deprecated: use the drive collection instead. */
	export interface TeamDrive {

		/** An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on drive.teamdrives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set. */
		backgroundImageFile?: TeamDriveBackgroundImageFile;

		/** A short-lived link to this Team Drive's background image. */
		backgroundImageLink?: string | null;

		/** Capabilities the current user has on this Team Drive. */
		capabilities?: TeamDriveCapabilities;

		/** The color of this Team Drive as an RGB hex string. It can only be set on a drive.teamdrives.update request that does not set themeId. */
		colorRgb?: string | null;

		/** The time at which the Team Drive was created (RFC 3339 date-time). */
		createdTime?: Date | null;

		/** The ID of this Team Drive which is also the ID of the top level folder of this Team Drive. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#teamDrive". */
		kind?: string | null;

		/** The name of this Team Drive. */
		name?: string | null;

		/** A set of restrictions that apply to this Team Drive or items inside this Team Drive. */
		restrictions?: TeamDriveRestrictions;

		/** The ID of the theme from which the background image and color will be set. The set of possible teamDriveThemes can be retrieved from a drive.about.get response. When not specified on a drive.teamdrives.create request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile. */
		themeId?: string | null;
	}

	/** Deprecated: use the drive collection instead. */
	export interface TeamDriveFormProperties {

		/** A short-lived link to this Team Drive's background image. */
		backgroundImageLink: FormControl<string | null | undefined>,

		/** The color of this Team Drive as an RGB hex string. It can only be set on a drive.teamdrives.update request that does not set themeId. */
		colorRgb: FormControl<string | null | undefined>,

		/** The time at which the Team Drive was created (RFC 3339 date-time). */
		createdTime: FormControl<Date | null | undefined>,

		/** The ID of this Team Drive which is also the ID of the top level folder of this Team Drive. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "drive#teamDrive". */
		kind: FormControl<string | null | undefined>,

		/** The name of this Team Drive. */
		name: FormControl<string | null | undefined>,

		/** The ID of the theme from which the background image and color will be set. The set of possible teamDriveThemes can be retrieved from a drive.about.get response. When not specified on a drive.teamdrives.create request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile. */
		themeId: FormControl<string | null | undefined>,
	}
	export function CreateTeamDriveFormGroup() {
		return new FormGroup<TeamDriveFormProperties>({
			backgroundImageLink: new FormControl<string | null | undefined>(undefined),
			colorRgb: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			themeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TeamDriveBackgroundImageFile {

		/** The ID of an image file in Drive to use for the background image. */
		id?: string | null;

		/** The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high. */
		width?: number | null;

		/** The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image. */
		xCoordinate?: number | null;

		/** The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image. */
		yCoordinate?: number | null;
	}
	export interface TeamDriveBackgroundImageFileFormProperties {

		/** The ID of an image file in Drive to use for the background image. */
		id: FormControl<string | null | undefined>,

		/** The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high. */
		width: FormControl<number | null | undefined>,

		/** The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image. */
		xCoordinate: FormControl<number | null | undefined>,

		/** The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image. */
		yCoordinate: FormControl<number | null | undefined>,
	}
	export function CreateTeamDriveBackgroundImageFileFormGroup() {
		return new FormGroup<TeamDriveBackgroundImageFileFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
			xCoordinate: new FormControl<number | null | undefined>(undefined),
			yCoordinate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TeamDriveCapabilities {

		/** Whether the current user can add children to folders in this Team Drive. */
		canAddChildren?: boolean | null;

		/** Whether the current user can change the copyRequiresWriterPermission restriction of this Team Drive. */
		canChangeCopyRequiresWriterPermissionRestriction?: boolean | null;

		/** Whether the current user can change the domainUsersOnly restriction of this Team Drive. */
		canChangeDomainUsersOnlyRestriction?: boolean | null;

		/** Whether the current user can change the background of this Team Drive. */
		canChangeTeamDriveBackground?: boolean | null;

		/** Whether the current user can change the teamMembersOnly restriction of this Team Drive. */
		canChangeTeamMembersOnlyRestriction?: boolean | null;

		/** Whether the current user can comment on files in this Team Drive. */
		canComment?: boolean | null;

		/** Whether the current user can copy files in this Team Drive. */
		canCopy?: boolean | null;

		/** Whether the current user can delete children from folders in this Team Drive. */
		canDeleteChildren?: boolean | null;

		/** Whether the current user can delete this Team Drive. Attempting to delete the Team Drive may still fail if there are untrashed items inside the Team Drive. */
		canDeleteTeamDrive?: boolean | null;

		/** Whether the current user can download files in this Team Drive. */
		canDownload?: boolean | null;

		/** Whether the current user can edit files in this Team Drive */
		canEdit?: boolean | null;

		/** Whether the current user can list the children of folders in this Team Drive. */
		canListChildren?: boolean | null;

		/** Whether the current user can add members to this Team Drive or remove them or change their role. */
		canManageMembers?: boolean | null;

		/** Whether the current user can read the revisions resource of files in this Team Drive. */
		canReadRevisions?: boolean | null;

		/** Deprecated - use canDeleteChildren or canTrashChildren instead. */
		canRemoveChildren?: boolean | null;

		/** Whether the current user can rename files or folders in this Team Drive. */
		canRename?: boolean | null;

		/** Whether the current user can rename this Team Drive. */
		canRenameTeamDrive?: boolean | null;

		/** Whether the current user can share files or folders in this Team Drive. */
		canShare?: boolean | null;

		/** Whether the current user can trash children from folders in this Team Drive. */
		canTrashChildren?: boolean | null;
	}
	export interface TeamDriveCapabilitiesFormProperties {

		/** Whether the current user can add children to folders in this Team Drive. */
		canAddChildren: FormControl<boolean | null | undefined>,

		/** Whether the current user can change the copyRequiresWriterPermission restriction of this Team Drive. */
		canChangeCopyRequiresWriterPermissionRestriction: FormControl<boolean | null | undefined>,

		/** Whether the current user can change the domainUsersOnly restriction of this Team Drive. */
		canChangeDomainUsersOnlyRestriction: FormControl<boolean | null | undefined>,

		/** Whether the current user can change the background of this Team Drive. */
		canChangeTeamDriveBackground: FormControl<boolean | null | undefined>,

		/** Whether the current user can change the teamMembersOnly restriction of this Team Drive. */
		canChangeTeamMembersOnlyRestriction: FormControl<boolean | null | undefined>,

		/** Whether the current user can comment on files in this Team Drive. */
		canComment: FormControl<boolean | null | undefined>,

		/** Whether the current user can copy files in this Team Drive. */
		canCopy: FormControl<boolean | null | undefined>,

		/** Whether the current user can delete children from folders in this Team Drive. */
		canDeleteChildren: FormControl<boolean | null | undefined>,

		/** Whether the current user can delete this Team Drive. Attempting to delete the Team Drive may still fail if there are untrashed items inside the Team Drive. */
		canDeleteTeamDrive: FormControl<boolean | null | undefined>,

		/** Whether the current user can download files in this Team Drive. */
		canDownload: FormControl<boolean | null | undefined>,

		/** Whether the current user can edit files in this Team Drive */
		canEdit: FormControl<boolean | null | undefined>,

		/** Whether the current user can list the children of folders in this Team Drive. */
		canListChildren: FormControl<boolean | null | undefined>,

		/** Whether the current user can add members to this Team Drive or remove them or change their role. */
		canManageMembers: FormControl<boolean | null | undefined>,

		/** Whether the current user can read the revisions resource of files in this Team Drive. */
		canReadRevisions: FormControl<boolean | null | undefined>,

		/** Deprecated - use canDeleteChildren or canTrashChildren instead. */
		canRemoveChildren: FormControl<boolean | null | undefined>,

		/** Whether the current user can rename files or folders in this Team Drive. */
		canRename: FormControl<boolean | null | undefined>,

		/** Whether the current user can rename this Team Drive. */
		canRenameTeamDrive: FormControl<boolean | null | undefined>,

		/** Whether the current user can share files or folders in this Team Drive. */
		canShare: FormControl<boolean | null | undefined>,

		/** Whether the current user can trash children from folders in this Team Drive. */
		canTrashChildren: FormControl<boolean | null | undefined>,
	}
	export function CreateTeamDriveCapabilitiesFormGroup() {
		return new FormGroup<TeamDriveCapabilitiesFormProperties>({
			canAddChildren: new FormControl<boolean | null | undefined>(undefined),
			canChangeCopyRequiresWriterPermissionRestriction: new FormControl<boolean | null | undefined>(undefined),
			canChangeDomainUsersOnlyRestriction: new FormControl<boolean | null | undefined>(undefined),
			canChangeTeamDriveBackground: new FormControl<boolean | null | undefined>(undefined),
			canChangeTeamMembersOnlyRestriction: new FormControl<boolean | null | undefined>(undefined),
			canComment: new FormControl<boolean | null | undefined>(undefined),
			canCopy: new FormControl<boolean | null | undefined>(undefined),
			canDeleteChildren: new FormControl<boolean | null | undefined>(undefined),
			canDeleteTeamDrive: new FormControl<boolean | null | undefined>(undefined),
			canDownload: new FormControl<boolean | null | undefined>(undefined),
			canEdit: new FormControl<boolean | null | undefined>(undefined),
			canListChildren: new FormControl<boolean | null | undefined>(undefined),
			canManageMembers: new FormControl<boolean | null | undefined>(undefined),
			canReadRevisions: new FormControl<boolean | null | undefined>(undefined),
			canRemoveChildren: new FormControl<boolean | null | undefined>(undefined),
			canRename: new FormControl<boolean | null | undefined>(undefined),
			canRenameTeamDrive: new FormControl<boolean | null | undefined>(undefined),
			canShare: new FormControl<boolean | null | undefined>(undefined),
			canTrashChildren: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TeamDriveRestrictions {

		/** Whether administrative privileges on this Team Drive are required to modify restrictions. */
		adminManagedRestrictions?: boolean | null;

		/** Whether the options to copy, print, or download files inside this Team Drive, should be disabled for readers and commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside this Team Drive. */
		copyRequiresWriterPermission?: boolean | null;

		/** Whether access to this Team Drive and items inside this Team Drive is restricted to users of the domain to which this Team Drive belongs. This restriction may be overridden by other sharing policies controlled outside of this Team Drive. */
		domainUsersOnly?: boolean | null;

		/** Whether access to items inside this Team Drive is restricted to members of this Team Drive. */
		teamMembersOnly?: boolean | null;
	}
	export interface TeamDriveRestrictionsFormProperties {

		/** Whether administrative privileges on this Team Drive are required to modify restrictions. */
		adminManagedRestrictions: FormControl<boolean | null | undefined>,

		/** Whether the options to copy, print, or download files inside this Team Drive, should be disabled for readers and commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside this Team Drive. */
		copyRequiresWriterPermission: FormControl<boolean | null | undefined>,

		/** Whether access to this Team Drive and items inside this Team Drive is restricted to users of the domain to which this Team Drive belongs. This restriction may be overridden by other sharing policies controlled outside of this Team Drive. */
		domainUsersOnly: FormControl<boolean | null | undefined>,

		/** Whether access to items inside this Team Drive is restricted to members of this Team Drive. */
		teamMembersOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateTeamDriveRestrictionsFormGroup() {
		return new FormGroup<TeamDriveRestrictionsFormProperties>({
			adminManagedRestrictions: new FormControl<boolean | null | undefined>(undefined),
			copyRequiresWriterPermission: new FormControl<boolean | null | undefined>(undefined),
			domainUsersOnly: new FormControl<boolean | null | undefined>(undefined),
			teamMembersOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A list of changes for a user. */
	export interface ChangeList {

		/** The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		changes?: Array<Change>;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#changeList". */
		kind?: string | null;

		/** The starting page token for future changes. This will be present only if the end of the current changes list has been reached. */
		newStartPageToken?: string | null;

		/** The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string | null;
	}

	/** A list of changes for a user. */
	export interface ChangeListFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "drive#changeList". */
		kind: FormControl<string | null | undefined>,

		/** The starting page token for future changes. This will be present only if the end of the current changes list has been reached. */
		newStartPageToken: FormControl<string | null | undefined>,

		/** The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateChangeListFormGroup() {
		return new FormGroup<ChangeListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			newStartPageToken: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An notification channel used to watch for resource changes. */
	export interface Channel {

		/** The address where notifications are delivered for this channel. */
		address?: string | null;

		/** Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. */
		expiration?: string | null;

		/** A UUID or similar unique string that identifies this channel. */
		id?: string | null;

		/** Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel". */
		kind?: string | null;

		/** Additional parameters controlling delivery channel behavior. Optional. */
		params?: {[id: string]: string };

		/** A Boolean value to indicate whether payload is wanted. Optional. */
		payload?: boolean | null;

		/** An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. */
		resourceId?: string | null;

		/** A version-specific identifier for the watched resource. */
		resourceUri?: string | null;

		/** An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. */
		token?: string | null;

		/** The type of delivery mechanism used for this channel. */
		type?: string | null;
	}

	/** An notification channel used to watch for resource changes. */
	export interface ChannelFormProperties {

		/** The address where notifications are delivered for this channel. */
		address: FormControl<string | null | undefined>,

		/** Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. */
		expiration: FormControl<string | null | undefined>,

		/** A UUID or similar unique string that identifies this channel. */
		id: FormControl<string | null | undefined>,

		/** Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel". */
		kind: FormControl<string | null | undefined>,

		/** Additional parameters controlling delivery channel behavior. Optional. */
		params: FormControl<{[id: string]: string } | null | undefined>,

		/** A Boolean value to indicate whether payload is wanted. Optional. */
		payload: FormControl<boolean | null | undefined>,

		/** An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. */
		resourceId: FormControl<string | null | undefined>,

		/** A version-specific identifier for the watched resource. */
		resourceUri: FormControl<string | null | undefined>,

		/** An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. */
		token: FormControl<string | null | undefined>,

		/** The type of delivery mechanism used for this channel. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			expiration: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			params: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			payload: new FormControl<boolean | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A comment on a file. */
	export interface Comment {

		/** A region of the document represented as a JSON string. See anchor documentation for details on how to define and interpret anchor properties. */
		anchor?: string | null;

		/** Information about a Drive user. */
		author?: User;

		/** The plain text content of the comment. This field is used for setting the content, while htmlContent should be displayed. */
		content?: string | null;

		/** The time at which the comment was created (RFC 3339 date-time). */
		createdTime?: Date | null;

		/** Whether the comment has been deleted. A deleted comment has no content. */
		deleted?: boolean | null;

		/** The content of the comment with HTML formatting. */
		htmlContent?: string | null;

		/** The ID of the comment. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#comment". */
		kind?: string | null;

		/** The last time the comment or any of its replies was modified (RFC 3339 date-time). */
		modifiedTime?: Date | null;

		/** The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment. */
		quotedFileContent?: CommentQuotedFileContent;

		/** The full list of replies to the comment in chronological order. */
		replies?: Array<Reply>;

		/** Whether the comment has been resolved by one of its replies. */
		resolved?: boolean | null;
	}

	/** A comment on a file. */
	export interface CommentFormProperties {

		/** A region of the document represented as a JSON string. See anchor documentation for details on how to define and interpret anchor properties. */
		anchor: FormControl<string | null | undefined>,

		/** The plain text content of the comment. This field is used for setting the content, while htmlContent should be displayed. */
		content: FormControl<string | null | undefined>,

		/** The time at which the comment was created (RFC 3339 date-time). */
		createdTime: FormControl<Date | null | undefined>,

		/** Whether the comment has been deleted. A deleted comment has no content. */
		deleted: FormControl<boolean | null | undefined>,

		/** The content of the comment with HTML formatting. */
		htmlContent: FormControl<string | null | undefined>,

		/** The ID of the comment. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "drive#comment". */
		kind: FormControl<string | null | undefined>,

		/** The last time the comment or any of its replies was modified (RFC 3339 date-time). */
		modifiedTime: FormControl<Date | null | undefined>,

		/** Whether the comment has been resolved by one of its replies. */
		resolved: FormControl<boolean | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			anchor: new FormControl<string | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			htmlContent: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			modifiedTime: new FormControl<Date | null | undefined>(undefined),
			resolved: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CommentQuotedFileContent {

		/** The MIME type of the quoted content. */
		mimeType?: string | null;

		/** The quoted content itself. This is interpreted as plain text if set through the API. */
		value?: string | null;
	}
	export interface CommentQuotedFileContentFormProperties {

		/** The MIME type of the quoted content. */
		mimeType: FormControl<string | null | undefined>,

		/** The quoted content itself. This is interpreted as plain text if set through the API. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCommentQuotedFileContentFormGroup() {
		return new FormGroup<CommentQuotedFileContentFormProperties>({
			mimeType: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A reply to a comment on a file. */
	export interface Reply {

		/**
		 * The action the reply performed to the parent comment. Valid values are:
		 * - resolve
		 * - reopen
		 */
		action?: string | null;

		/** Information about a Drive user. */
		author?: User;

		/** The plain text content of the reply. This field is used for setting the content, while htmlContent should be displayed. This is required on creates if no action is specified. */
		content?: string | null;

		/** The time at which the reply was created (RFC 3339 date-time). */
		createdTime?: Date | null;

		/** Whether the reply has been deleted. A deleted reply has no content. */
		deleted?: boolean | null;

		/** The content of the reply with HTML formatting. */
		htmlContent?: string | null;

		/** The ID of the reply. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#reply". */
		kind?: string | null;

		/** The last time the reply was modified (RFC 3339 date-time). */
		modifiedTime?: Date | null;
	}

	/** A reply to a comment on a file. */
	export interface ReplyFormProperties {

		/**
		 * The action the reply performed to the parent comment. Valid values are:
		 * - resolve
		 * - reopen
		 */
		action: FormControl<string | null | undefined>,

		/** The plain text content of the reply. This field is used for setting the content, while htmlContent should be displayed. This is required on creates if no action is specified. */
		content: FormControl<string | null | undefined>,

		/** The time at which the reply was created (RFC 3339 date-time). */
		createdTime: FormControl<Date | null | undefined>,

		/** Whether the reply has been deleted. A deleted reply has no content. */
		deleted: FormControl<boolean | null | undefined>,

		/** The content of the reply with HTML formatting. */
		htmlContent: FormControl<string | null | undefined>,

		/** The ID of the reply. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "drive#reply". */
		kind: FormControl<string | null | undefined>,

		/** The last time the reply was modified (RFC 3339 date-time). */
		modifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateReplyFormGroup() {
		return new FormGroup<ReplyFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			htmlContent: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			modifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A list of comments on a file. */
	export interface CommentList {

		/** The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		comments?: Array<Comment>;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#commentList". */
		kind?: string | null;

		/** The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string | null;
	}

	/** A list of comments on a file. */
	export interface CommentListFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "drive#commentList". */
		kind: FormControl<string | null | undefined>,

		/** The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateCommentListFormGroup() {
		return new FormGroup<CommentListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of shared drives. */
	export interface DriveList {

		/** The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		drives?: Array<Drive>;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#driveList". */
		kind?: string | null;

		/** The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string | null;
	}

	/** A list of shared drives. */
	export interface DriveListFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "drive#driveList". */
		kind: FormControl<string | null | undefined>,

		/** The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateDriveListFormGroup() {
		return new FormGroup<DriveListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of files. */
	export interface FileList {

		/** The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		files?: Array<File>;

		/** Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the "allDrives" corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as "user" or "drive". */
		incompleteSearch?: boolean | null;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#fileList". */
		kind?: string | null;

		/** The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string | null;
	}

	/** A list of files. */
	export interface FileListFormProperties {

		/** Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the "allDrives" corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as "user" or "drive". */
		incompleteSearch: FormControl<boolean | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "drive#fileList". */
		kind: FormControl<string | null | undefined>,

		/** The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateFileListFormGroup() {
		return new FormGroup<FileListFormProperties>({
			incompleteSearch: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of generated file IDs which can be provided in create requests. */
	export interface GeneratedIds {

		/** The IDs generated for the requesting user in the specified space. */
		ids?: Array<string>;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#generatedIds". */
		kind?: string | null;

		/** The type of file that can be created with these IDs. */
		space?: string | null;
	}

	/** A list of generated file IDs which can be provided in create requests. */
	export interface GeneratedIdsFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "drive#generatedIds". */
		kind: FormControl<string | null | undefined>,

		/** The type of file that can be created with these IDs. */
		space: FormControl<string | null | undefined>,
	}
	export function CreateGeneratedIdsFormGroup() {
		return new FormGroup<GeneratedIdsFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			space: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of permissions for a file. */
	export interface PermissionList {

		/** Identifies what kind of resource this is. Value: the fixed string "drive#permissionList". */
		kind?: string | null;

		/** The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string | null;

		/** The list of permissions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		permissions?: Array<Permission>;
	}

	/** A list of permissions for a file. */
	export interface PermissionListFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "drive#permissionList". */
		kind: FormControl<string | null | undefined>,

		/** The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreatePermissionListFormGroup() {
		return new FormGroup<PermissionListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of replies to a comment on a file. */
	export interface ReplyList {

		/** Identifies what kind of resource this is. Value: the fixed string "drive#replyList". */
		kind?: string | null;

		/** The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string | null;

		/** The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		replies?: Array<Reply>;
	}

	/** A list of replies to a comment on a file. */
	export interface ReplyListFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "drive#replyList". */
		kind: FormControl<string | null | undefined>,

		/** The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateReplyListFormGroup() {
		return new FormGroup<ReplyListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata for a revision to a file. */
	export interface Revision {

		/** Links for exporting Google Docs to specific formats. */
		exportLinks?: {[id: string]: string };

		/** The ID of the revision. */
		id?: string | null;

		/**
		 * Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file.
		 * This field is only applicable to files with binary content in Drive.
		 */
		keepForever?: boolean | null;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#revision". */
		kind?: string | null;

		/** Information about a Drive user. */
		lastModifyingUser?: User;

		/** The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive. */
		md5Checksum?: string | null;

		/** The MIME type of the revision. */
		mimeType?: string | null;

		/** The last time the revision was modified (RFC 3339 date-time). */
		modifiedTime?: Date | null;

		/** The original filename used to create this revision. This is only applicable to files with binary content in Drive. */
		originalFilename?: string | null;

		/** Whether subsequent revisions will be automatically republished. This is only applicable to Google Docs. */
		publishAuto?: boolean | null;

		/** Whether this revision is published. This is only applicable to Google Docs. */
		published?: boolean | null;

		/** Whether this revision is published outside the domain. This is only applicable to Google Docs. */
		publishedOutsideDomain?: boolean | null;

		/** The size of the revision's content in bytes. This is only applicable to files with binary content in Drive. */
		size?: string | null;
	}

	/** The metadata for a revision to a file. */
	export interface RevisionFormProperties {

		/** Links for exporting Google Docs to specific formats. */
		exportLinks: FormControl<{[id: string]: string } | null | undefined>,

		/** The ID of the revision. */
		id: FormControl<string | null | undefined>,

		/**
		 * Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file.
		 * This field is only applicable to files with binary content in Drive.
		 */
		keepForever: FormControl<boolean | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "drive#revision". */
		kind: FormControl<string | null | undefined>,

		/** The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive. */
		md5Checksum: FormControl<string | null | undefined>,

		/** The MIME type of the revision. */
		mimeType: FormControl<string | null | undefined>,

		/** The last time the revision was modified (RFC 3339 date-time). */
		modifiedTime: FormControl<Date | null | undefined>,

		/** The original filename used to create this revision. This is only applicable to files with binary content in Drive. */
		originalFilename: FormControl<string | null | undefined>,

		/** Whether subsequent revisions will be automatically republished. This is only applicable to Google Docs. */
		publishAuto: FormControl<boolean | null | undefined>,

		/** Whether this revision is published. This is only applicable to Google Docs. */
		published: FormControl<boolean | null | undefined>,

		/** Whether this revision is published outside the domain. This is only applicable to Google Docs. */
		publishedOutsideDomain: FormControl<boolean | null | undefined>,

		/** The size of the revision's content in bytes. This is only applicable to files with binary content in Drive. */
		size: FormControl<string | null | undefined>,
	}
	export function CreateRevisionFormGroup() {
		return new FormGroup<RevisionFormProperties>({
			exportLinks: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			keepForever: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			md5Checksum: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			modifiedTime: new FormControl<Date | null | undefined>(undefined),
			originalFilename: new FormControl<string | null | undefined>(undefined),
			publishAuto: new FormControl<boolean | null | undefined>(undefined),
			published: new FormControl<boolean | null | undefined>(undefined),
			publishedOutsideDomain: new FormControl<boolean | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of revisions of a file. */
	export interface RevisionList {

		/** Identifies what kind of resource this is. Value: the fixed string "drive#revisionList". */
		kind?: string | null;

		/** The page token for the next page of revisions. This will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string | null;

		/** The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		revisions?: Array<Revision>;
	}

	/** A list of revisions of a file. */
	export interface RevisionListFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "drive#revisionList". */
		kind: FormControl<string | null | undefined>,

		/** The page token for the next page of revisions. This will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateRevisionListFormGroup() {
		return new FormGroup<RevisionListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartPageToken {

		/** Identifies what kind of resource this is. Value: the fixed string "drive#startPageToken". */
		kind?: string | null;

		/** The starting page token for listing changes. */
		startPageToken?: string | null;
	}
	export interface StartPageTokenFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "drive#startPageToken". */
		kind: FormControl<string | null | undefined>,

		/** The starting page token for listing changes. */
		startPageToken: FormControl<string | null | undefined>,
	}
	export function CreateStartPageTokenFormGroup() {
		return new FormGroup<StartPageTokenFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			startPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of Team Drives. */
	export interface TeamDriveList {

		/** Identifies what kind of resource this is. Value: the fixed string "drive#teamDriveList". */
		kind?: string | null;

		/** The page token for the next page of Team Drives. This will be absent if the end of the Team Drives list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string | null;

		/** The list of Team Drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		teamDrives?: Array<TeamDrive>;
	}

	/** A list of Team Drives. */
	export interface TeamDriveListFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "drive#teamDriveList". */
		kind: FormControl<string | null | undefined>,

		/** The page token for the next page of Team Drives. This will be absent if the end of the Team Drives list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateTeamDriveListFormGroup() {
		return new FormGroup<TeamDriveListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets information about the user, the user's Drive, and system capabilities.
		 * Get about
		 * @return {void} Successful response
		 */
		Drive_about_get(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'about', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the changes for a user or shared drive.
		 * Get changes
		 * @param {string} pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
		 * @param {string} driveId The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
		 * @param {boolean} includeCorpusRemovals Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
		 * @param {boolean} includeItemsFromAllDrives Deprecated - Whether both My Drive and shared drive items should be included in results. This parameter will only be effective until June 1, 2020. Afterwards shared drive items will be included in the results.
		 * @param {boolean} includeRemoved Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
		 * @param {boolean} includeTeamDriveItems Deprecated use includeItemsFromAllDrives instead.
		 * @param {number} pageSize The maximum number of changes to return per page.
		 * @param {boolean} restrictToMyDrive Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
		 * @param {string} spaces A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
		 * @param {boolean} supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated use supportsAllDrives instead.
		 * @param {string} teamDriveId Deprecated use driveId instead.
		 * @return {void} Successful response
		 */
		Drive_changes_list(pageToken: string, driveId: string | null | undefined, includeCorpusRemovals: boolean | null | undefined, includeItemsFromAllDrives: boolean | null | undefined, includeRemoved: boolean | null | undefined, includeTeamDriveItems: boolean | null | undefined, pageSize: number | null | undefined, restrictToMyDrive: boolean | null | undefined, spaces: string | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, teamDriveId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'changes?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&driveId=' + (driveId == null ? '' : encodeURIComponent(driveId)) + '&includeCorpusRemovals=' + includeCorpusRemovals + '&includeItemsFromAllDrives=' + includeItemsFromAllDrives + '&includeRemoved=' + includeRemoved + '&includeTeamDriveItems=' + includeTeamDriveItems + '&pageSize=' + pageSize + '&restrictToMyDrive=' + restrictToMyDrive + '&spaces=' + (spaces == null ? '' : encodeURIComponent(spaces)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&teamDriveId=' + (teamDriveId == null ? '' : encodeURIComponent(teamDriveId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the starting pageToken for listing future changes.
		 * Get changes/startPageToken
		 * @param {string} driveId The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned.
		 * @param {boolean} supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated use supportsAllDrives instead.
		 * @param {string} teamDriveId Deprecated use driveId instead.
		 * @return {void} Successful response
		 */
		Drive_changes_getStartPageToken(driveId: string | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, teamDriveId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'changes/startPageToken?driveId=' + (driveId == null ? '' : encodeURIComponent(driveId)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&teamDriveId=' + (teamDriveId == null ? '' : encodeURIComponent(teamDriveId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Subscribes to changes for a user.
		 * Post changes/watch
		 * @param {string} pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
		 * @param {string} driveId The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
		 * @param {boolean} includeCorpusRemovals Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
		 * @param {boolean} includeItemsFromAllDrives Deprecated - Whether both My Drive and shared drive items should be included in results. This parameter will only be effective until June 1, 2020. Afterwards shared drive items will be included in the results.
		 * @param {boolean} includeRemoved Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
		 * @param {boolean} includeTeamDriveItems Deprecated use includeItemsFromAllDrives instead.
		 * @param {number} pageSize The maximum number of changes to return per page.
		 * @param {boolean} restrictToMyDrive Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.
		 * @param {string} spaces A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
		 * @param {boolean} supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated use supportsAllDrives instead.
		 * @param {string} teamDriveId Deprecated use driveId instead.
		 * @return {void} Successful response
		 */
		Drive_changes_watch(pageToken: string, driveId: string | null | undefined, includeCorpusRemovals: boolean | null | undefined, includeItemsFromAllDrives: boolean | null | undefined, includeRemoved: boolean | null | undefined, includeTeamDriveItems: boolean | null | undefined, pageSize: number | null | undefined, restrictToMyDrive: boolean | null | undefined, spaces: string | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, teamDriveId: string | null | undefined, requestBody: Channel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'changes/watch?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&driveId=' + (driveId == null ? '' : encodeURIComponent(driveId)) + '&includeCorpusRemovals=' + includeCorpusRemovals + '&includeItemsFromAllDrives=' + includeItemsFromAllDrives + '&includeRemoved=' + includeRemoved + '&includeTeamDriveItems=' + includeTeamDriveItems + '&pageSize=' + pageSize + '&restrictToMyDrive=' + restrictToMyDrive + '&spaces=' + (spaces == null ? '' : encodeURIComponent(spaces)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&teamDriveId=' + (teamDriveId == null ? '' : encodeURIComponent(teamDriveId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Stop watching resources through this channel
		 * Post channels/stop
		 * @return {void} Successful response
		 */
		Drive_channels_stop(requestBody: Channel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channels/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the user's shared drives.
		 * Get drives
		 * @param {number} pageSize Maximum number of shared drives to return.
		 * @param {string} pageToken Page token for shared drives.
		 * @param {string} q Query string for searching shared drives.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned.
		 * @return {void} Successful response
		 */
		Drive_drives_list(pageSize: number | null | undefined, pageToken: string | null | undefined, q: string | null | undefined, useDomainAdminAccess: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'drives?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&useDomainAdminAccess=' + useDomainAdminAccess, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new shared drive.
		 * Post drives
		 * @param {string} requestId An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.
		 * @return {void} Successful response
		 */
		Drive_drives_create(requestId: string, requestBody: Drive): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'drives?requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
		 * Delete drives/{driveId}
		 * @param {string} driveId The ID of the shared drive.
		 * @return {void} Successful response
		 */
		Drive_drives_delete(driveId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'drives/' + (driveId == null ? '' : encodeURIComponent(driveId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a shared drive's metadata by ID.
		 * Get drives/{driveId}
		 * @param {string} driveId The ID of the shared drive.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
		 * @return {void} Successful response
		 */
		Drive_drives_get(driveId: string, useDomainAdminAccess: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'drives/' + (driveId == null ? '' : encodeURIComponent(driveId)) + '&useDomainAdminAccess=' + useDomainAdminAccess, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the metadate for a shared drive.
		 * Patch drives/{driveId}
		 * @param {string} driveId The ID of the shared drive.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
		 * @return {void} Successful response
		 */
		Drive_drives_update(driveId: string, useDomainAdminAccess: boolean | null | undefined, requestBody: Drive): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'drives/' + (driveId == null ? '' : encodeURIComponent(driveId)) + '&useDomainAdminAccess=' + useDomainAdminAccess, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Hides a shared drive from the default view.
		 * Post drives/{driveId}/hide
		 * @param {string} driveId The ID of the shared drive.
		 * @return {void} Successful response
		 */
		Drive_drives_hide(driveId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'drives/' + (driveId == null ? '' : encodeURIComponent(driveId)) + '/hide', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restores a shared drive to the default view.
		 * Post drives/{driveId}/unhide
		 * @param {string} driveId The ID of the shared drive.
		 * @return {void} Successful response
		 */
		Drive_drives_unhide(driveId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'drives/' + (driveId == null ? '' : encodeURIComponent(driveId)) + '/unhide', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists or searches files.
		 * Get files
		 * @param {string} corpora Bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'drive' and 'allDrives'. Prefer 'user' or 'drive' to 'allDrives' for efficiency.
		 * @param {Drive_files_listCorpus} corpus The source of files to list. Deprecated: use 'corpora' instead.
		 * @param {string} driveId ID of the shared drive to search.
		 * @param {boolean} includeItemsFromAllDrives Deprecated - Whether both My Drive and shared drive items should be included in results. This parameter will only be effective until June 1, 2020. Afterwards shared drive items will be included in the results.
		 * @param {boolean} includeTeamDriveItems Deprecated use includeItemsFromAllDrives instead.
		 * @param {string} orderBy A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
		 * @param {number} pageSize The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
		 * @param {string} pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
		 * @param {string} q A query for filtering the file results. See the "Search for Files" guide for supported syntax.
		 * @param {string} spaces A comma-separated list of spaces to query within the corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.
		 * @param {boolean} supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated use supportsAllDrives instead.
		 * @param {string} teamDriveId Deprecated use driveId instead.
		 * @return {void} Successful response
		 */
		Drive_files_list(corpora: string | null | undefined, corpus: Drive_files_listCorpus | null | undefined, driveId: string | null | undefined, includeItemsFromAllDrives: boolean | null | undefined, includeTeamDriveItems: boolean | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, q: string | null | undefined, spaces: string | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, teamDriveId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'files?corpora=' + (corpora == null ? '' : encodeURIComponent(corpora)) + '&corpus=' + corpus + '&driveId=' + (driveId == null ? '' : encodeURIComponent(driveId)) + '&includeItemsFromAllDrives=' + includeItemsFromAllDrives + '&includeTeamDriveItems=' + includeTeamDriveItems + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&spaces=' + (spaces == null ? '' : encodeURIComponent(spaces)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&teamDriveId=' + (teamDriveId == null ? '' : encodeURIComponent(teamDriveId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new file.
		 * Post files
		 * @param {boolean} enforceSingleParent Set to true to opt in to API behavior that aims for all items to have exactly one parent. This parameter will only take effect if the item is not in a shared drive. Requests that specify more than one parent will fail.
		 * @param {boolean} ignoreDefaultVisibility Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
		 * @param {boolean} keepRevisionForever Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
		 * @param {string} ocrLanguage A language hint for OCR processing during image import (ISO 639-1 code).
		 * @param {boolean} supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated use supportsAllDrives instead.
		 * @param {boolean} useContentAsIndexableText Whether to use the uploaded content as indexable text.
		 * @return {void} Successful response
		 */
		Drive_files_create(enforceSingleParent: boolean | null | undefined, ignoreDefaultVisibility: boolean | null | undefined, keepRevisionForever: boolean | null | undefined, ocrLanguage: string | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, useContentAsIndexableText: boolean | null | undefined, requestBody: File): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'files?enforceSingleParent=' + enforceSingleParent + '&ignoreDefaultVisibility=' + ignoreDefaultVisibility + '&keepRevisionForever=' + keepRevisionForever + '&ocrLanguage=' + (ocrLanguage == null ? '' : encodeURIComponent(ocrLanguage)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&useContentAsIndexableText=' + useContentAsIndexableText, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates a set of file IDs which can be provided in create or copy requests.
		 * Get files/generateIds
		 * @param {number} count The number of IDs to return.
		 * @param {string} space The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'.
		 * @return {void} Successful response
		 */
		Drive_files_generateIds(count: number | null | undefined, space: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'files/generateIds?count=' + count + '&space=' + (space == null ? '' : encodeURIComponent(space)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes all of the user's trashed files.
		 * Delete files/trash
		 * @return {void} Successful response
		 */
		Drive_files_emptyTrash(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'files/trash', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.
		 * Delete files/{fileId}
		 * @param {string} fileId The ID of the file.
		 * @param {boolean} supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated use supportsAllDrives instead.
		 * @return {void} Successful response
		 */
		Drive_files_delete(fileId: string, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a file's metadata or content by ID.
		 * Get files/{fileId}
		 * @param {string} fileId The ID of the file.
		 * @param {boolean} acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
		 * @param {boolean} supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated use supportsAllDrives instead.
		 * @return {void} Successful response
		 */
		Drive_files_get(fileId: string, acknowledgeAbuse: boolean | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '&acknowledgeAbuse=' + acknowledgeAbuse + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists a file's comments.
		 * Get files/{fileId}/comments
		 * @param {string} fileId The ID of the file.
		 * @param {boolean} includeDeleted Whether to include deleted comments. Deleted comments will not include their original content.
		 * @param {number} pageSize The maximum number of comments to return per page.
		 * @param {string} pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
		 * @param {string} startModifiedTime The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time).
		 * @return {void} Successful response
		 */
		Drive_comments_list(fileId: string, includeDeleted: boolean | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, startModifiedTime: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments&includeDeleted=' + includeDeleted + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startModifiedTime=' + (startModifiedTime == null ? '' : encodeURIComponent(startModifiedTime)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new comment on a file.
		 * Post files/{fileId}/comments
		 * @param {string} fileId The ID of the file.
		 * @return {void} Successful response
		 */
		Drive_comments_create(fileId: string, requestBody: Comment): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a comment.
		 * Delete files/{fileId}/comments/{commentId}
		 * @param {string} fileId The ID of the file.
		 * @param {string} commentId The ID of the comment.
		 * @return {void} Successful response
		 */
		Drive_comments_delete(fileId: string, commentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a comment by ID.
		 * Get files/{fileId}/comments/{commentId}
		 * @param {string} fileId The ID of the file.
		 * @param {string} commentId The ID of the comment.
		 * @param {boolean} includeDeleted Whether to return deleted comments. Deleted comments will not include their original content.
		 * @return {void} Successful response
		 */
		Drive_comments_get(fileId: string, commentId: string, includeDeleted: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '&includeDeleted=' + includeDeleted, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a comment with patch semantics.
		 * Patch files/{fileId}/comments/{commentId}
		 * @param {string} fileId The ID of the file.
		 * @param {string} commentId The ID of the comment.
		 * @return {void} Successful response
		 */
		Drive_comments_update(fileId: string, commentId: string, requestBody: Comment): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists a comment's replies.
		 * Get files/{fileId}/comments/{commentId}/replies
		 * @param {string} fileId The ID of the file.
		 * @param {string} commentId The ID of the comment.
		 * @param {boolean} includeDeleted Whether to include deleted replies. Deleted replies will not include their original content.
		 * @param {number} pageSize The maximum number of replies to return per page.
		 * @param {string} pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
		 * @return {void} Successful response
		 */
		Drive_replies_list(fileId: string, commentId: string, includeDeleted: boolean | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/replies&includeDeleted=' + includeDeleted + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new reply to a comment.
		 * Post files/{fileId}/comments/{commentId}/replies
		 * @param {string} fileId The ID of the file.
		 * @param {string} commentId The ID of the comment.
		 * @return {void} Successful response
		 */
		Drive_replies_create(fileId: string, commentId: string, requestBody: Reply): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/replies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a reply.
		 * Delete files/{fileId}/comments/{commentId}/replies/{replyId}
		 * @param {string} fileId The ID of the file.
		 * @param {string} commentId The ID of the comment.
		 * @param {string} replyId The ID of the reply.
		 * @return {void} Successful response
		 */
		Drive_replies_delete(fileId: string, commentId: string, replyId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/replies/' + (replyId == null ? '' : encodeURIComponent(replyId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a reply by ID.
		 * Get files/{fileId}/comments/{commentId}/replies/{replyId}
		 * @param {string} fileId The ID of the file.
		 * @param {string} commentId The ID of the comment.
		 * @param {string} replyId The ID of the reply.
		 * @param {boolean} includeDeleted Whether to return deleted replies. Deleted replies will not include their original content.
		 * @return {void} Successful response
		 */
		Drive_replies_get(fileId: string, commentId: string, replyId: string, includeDeleted: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/replies/' + (replyId == null ? '' : encodeURIComponent(replyId)) + '&includeDeleted=' + includeDeleted, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a reply with patch semantics.
		 * Patch files/{fileId}/comments/{commentId}/replies/{replyId}
		 * @param {string} fileId The ID of the file.
		 * @param {string} commentId The ID of the comment.
		 * @param {string} replyId The ID of the reply.
		 * @return {void} Successful response
		 */
		Drive_replies_update(fileId: string, commentId: string, replyId: string, requestBody: Reply): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/replies/' + (replyId == null ? '' : encodeURIComponent(replyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a copy of a file and applies any requested updates with patch semantics.
		 * Post files/{fileId}/copy
		 * @param {string} fileId The ID of the file.
		 * @param {boolean} enforceSingleParent Set to true to opt in to API behavior that aims for all items to have exactly one parent. This parameter will only take effect if the item is not in a shared drive. Requests that specify more than one parent will fail.
		 * @param {boolean} ignoreDefaultVisibility Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.
		 * @param {boolean} keepRevisionForever Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.
		 * @param {string} ocrLanguage A language hint for OCR processing during image import (ISO 639-1 code).
		 * @param {boolean} supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated use supportsAllDrives instead.
		 * @return {void} Successful response
		 */
		Drive_files_copy(fileId: string, enforceSingleParent: boolean | null | undefined, ignoreDefaultVisibility: boolean | null | undefined, keepRevisionForever: boolean | null | undefined, ocrLanguage: string | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, requestBody: File): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/copy&enforceSingleParent=' + enforceSingleParent + '&ignoreDefaultVisibility=' + ignoreDefaultVisibility + '&keepRevisionForever=' + keepRevisionForever + '&ocrLanguage=' + (ocrLanguage == null ? '' : encodeURIComponent(ocrLanguage)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Exports a Google Doc to the requested MIME type and returns the exported content. Please note that the exported content is limited to 10MB.
		 * Get files/{fileId}/export
		 * @param {string} fileId The ID of the file.
		 * @param {string} mimeType The MIME type of the format requested for this export.
		 * @return {void} Successful response
		 */
		Drive_files_export(fileId: string, mimeType: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/export&mimeType=' + (mimeType == null ? '' : encodeURIComponent(mimeType)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists a file's or shared drive's permissions.
		 * Get files/{fileId}/permissions
		 * @param {string} fileId The ID of the file or shared drive.
		 * @param {number} pageSize The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.
		 * @param {string} pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
		 * @param {boolean} supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated use supportsAllDrives instead.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
		 * @return {void} Successful response
		 */
		Drive_permissions_list(fileId: string, pageSize: number | null | undefined, pageToken: string | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, useDomainAdminAccess: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/permissions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&useDomainAdminAccess=' + useDomainAdminAccess, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a permission for a file or shared drive.
		 * Post files/{fileId}/permissions
		 * @param {string} fileId The ID of the file or shared drive.
		 * @param {string} emailMessage A plain text custom message to include in the notification email.
		 * @param {boolean} enforceSingleParent Set to true to opt in to API behavior that aims for all items to have exactly one parent. This parameter will only take effect if the item is not in a shared drive. See moveToNewOwnersRoot for details.
		 * @param {boolean} moveToNewOwnersRoot This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. When set to true, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to false, when enforceSingleParent=true, parents are not changed. If set to false, when enforceSingleParent=false, existing parents are not changed; however, the file will be added to the new owner's My Drive root folder, unless it is already in the new owner's My Drive.
		 * @param {boolean} sendNotificationEmail Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers.
		 * @param {boolean} supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated use supportsAllDrives instead.
		 * @param {boolean} transferOwnership Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
		 * @return {void} Successful response
		 */
		Drive_permissions_create(fileId: string, emailMessage: string | null | undefined, enforceSingleParent: boolean | null | undefined, moveToNewOwnersRoot: boolean | null | undefined, sendNotificationEmail: boolean | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, transferOwnership: boolean | null | undefined, useDomainAdminAccess: boolean | null | undefined, requestBody: Permission): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/permissions&emailMessage=' + (emailMessage == null ? '' : encodeURIComponent(emailMessage)) + '&enforceSingleParent=' + enforceSingleParent + '&moveToNewOwnersRoot=' + moveToNewOwnersRoot + '&sendNotificationEmail=' + sendNotificationEmail + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&transferOwnership=' + transferOwnership + '&useDomainAdminAccess=' + useDomainAdminAccess, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a permission.
		 * Delete files/{fileId}/permissions/{permissionId}
		 * @param {string} fileId The ID of the file or shared drive.
		 * @param {string} permissionId The ID of the permission.
		 * @param {boolean} supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated use supportsAllDrives instead.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
		 * @return {void} Successful response
		 */
		Drive_permissions_delete(fileId: string, permissionId: string, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, useDomainAdminAccess: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/permissions/' + (permissionId == null ? '' : encodeURIComponent(permissionId)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&useDomainAdminAccess=' + useDomainAdminAccess, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a permission by ID.
		 * Get files/{fileId}/permissions/{permissionId}
		 * @param {string} fileId The ID of the file.
		 * @param {string} permissionId The ID of the permission.
		 * @param {boolean} supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated use supportsAllDrives instead.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
		 * @return {void} Successful response
		 */
		Drive_permissions_get(fileId: string, permissionId: string, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, useDomainAdminAccess: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/permissions/' + (permissionId == null ? '' : encodeURIComponent(permissionId)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&useDomainAdminAccess=' + useDomainAdminAccess, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a permission with patch semantics.
		 * Patch files/{fileId}/permissions/{permissionId}
		 * @param {string} fileId The ID of the file or shared drive.
		 * @param {string} permissionId The ID of the permission.
		 * @param {boolean} removeExpiration Whether to remove the expiration date.
		 * @param {boolean} supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated use supportsAllDrives instead.
		 * @param {boolean} transferOwnership Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
		 * @return {void} Successful response
		 */
		Drive_permissions_update(fileId: string, permissionId: string, removeExpiration: boolean | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, transferOwnership: boolean | null | undefined, useDomainAdminAccess: boolean | null | undefined, requestBody: Permission): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/permissions/' + (permissionId == null ? '' : encodeURIComponent(permissionId)) + '&removeExpiration=' + removeExpiration + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&transferOwnership=' + transferOwnership + '&useDomainAdminAccess=' + useDomainAdminAccess, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists a file's revisions.
		 * Get files/{fileId}/revisions
		 * @param {string} fileId The ID of the file.
		 * @param {number} pageSize The maximum number of revisions to return per page.
		 * @param {string} pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
		 * @return {void} Successful response
		 */
		Drive_revisions_list(fileId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/revisions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
		 * Delete files/{fileId}/revisions/{revisionId}
		 * @param {string} fileId The ID of the file.
		 * @param {string} revisionId The ID of the revision.
		 * @return {void} Successful response
		 */
		Drive_revisions_delete(fileId: string, revisionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/revisions/' + (revisionId == null ? '' : encodeURIComponent(revisionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a revision's metadata or content by ID.
		 * Get files/{fileId}/revisions/{revisionId}
		 * @param {string} fileId The ID of the file.
		 * @param {string} revisionId The ID of the revision.
		 * @param {boolean} acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
		 * @return {void} Successful response
		 */
		Drive_revisions_get(fileId: string, revisionId: string, acknowledgeAbuse: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/revisions/' + (revisionId == null ? '' : encodeURIComponent(revisionId)) + '&acknowledgeAbuse=' + acknowledgeAbuse, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a revision with patch semantics.
		 * Patch files/{fileId}/revisions/{revisionId}
		 * @param {string} fileId The ID of the file.
		 * @param {string} revisionId The ID of the revision.
		 * @return {void} Successful response
		 */
		Drive_revisions_update(fileId: string, revisionId: string, requestBody: Revision): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/revisions/' + (revisionId == null ? '' : encodeURIComponent(revisionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Subscribes to changes to a file
		 * Post files/{fileId}/watch
		 * @param {string} fileId The ID of the file.
		 * @param {boolean} acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.
		 * @param {boolean} supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated use supportsAllDrives instead.
		 * @return {void} Successful response
		 */
		Drive_files_watch(fileId: string, acknowledgeAbuse: boolean | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, requestBody: Channel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/watch&acknowledgeAbuse=' + acknowledgeAbuse + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deprecated use drives.list instead.
		 * Get teamdrives
		 * @param {number} pageSize Maximum number of Team Drives to return.
		 * @param {string} pageToken Page token for Team Drives.
		 * @param {string} q Query string for searching Team Drives.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned.
		 * @return {void} Successful response
		 */
		Drive_teamdrives_list(pageSize: number | null | undefined, pageToken: string | null | undefined, q: string | null | undefined, useDomainAdminAccess: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'teamdrives?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&useDomainAdminAccess=' + useDomainAdminAccess, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deprecated use drives.create instead.
		 * Post teamdrives
		 * @param {string} requestId An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
		 * @return {void} Successful response
		 */
		Drive_teamdrives_create(requestId: string, requestBody: TeamDrive): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'teamdrives?requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deprecated use drives.delete instead.
		 * Delete teamdrives/{teamDriveId}
		 * @param {string} teamDriveId The ID of the Team Drive
		 * @return {void} Successful response
		 */
		Drive_teamdrives_delete(teamDriveId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'teamdrives/' + (teamDriveId == null ? '' : encodeURIComponent(teamDriveId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deprecated use drives.get instead.
		 * Get teamdrives/{teamDriveId}
		 * @param {string} teamDriveId The ID of the Team Drive
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
		 * @return {void} Successful response
		 */
		Drive_teamdrives_get(teamDriveId: string, useDomainAdminAccess: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'teamdrives/' + (teamDriveId == null ? '' : encodeURIComponent(teamDriveId)) + '&useDomainAdminAccess=' + useDomainAdminAccess, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deprecated use drives.update instead
		 * Patch teamdrives/{teamDriveId}
		 * @param {string} teamDriveId The ID of the Team Drive
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
		 * @return {void} Successful response
		 */
		Drive_teamdrives_update(teamDriveId: string, useDomainAdminAccess: boolean | null | undefined, requestBody: TeamDrive): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'teamdrives/' + (teamDriveId == null ? '' : encodeURIComponent(teamDriveId)) + '&useDomainAdminAccess=' + useDomainAdminAccess, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Drive_files_listCorpus { domain = 0, user = 1 }

}

