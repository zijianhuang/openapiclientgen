import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Information about the user, the user's Drive, and system capabilities. */
	export interface About {

		/** Whether the user has installed the requesting app. */
		appInstalled?: boolean;

		/** Whether the user can create shared drives. */
		canCreateDrives?: boolean;

		/** Deprecated - use canCreateDrives instead. */
		canCreateTeamDrives?: boolean;

		/** A list of themes that are supported for shared drives. */
		AboutDriveThemes?: Array<AboutDriveThemes>;

		/** A map of source MIME type to possible targets for all supported exports. */
		exportFormats?: {[id: string]: Array<string> };

		/** The currently supported folder colors as RGB hex strings. */
		folderColorPalette?: Array<string>;

		/** A map of source MIME type to possible targets for all supported imports. */
		importFormats?: {[id: string]: Array<string> };

		/** Identifies what kind of resource this is. Value: the fixed string "drive#about". */
		kind?: string;

		/** A map of maximum import sizes by MIME type, in bytes. */
		maxImportSizes?: {[id: string]: string };

		/** The maximum upload size in bytes. */
		maxUploadSize?: string;

		/** The user's storage quota limits and usage. All fields are measured in bytes. */
		storageQuota?: AboutStorageQuota;

		/** Deprecated - use driveThemes instead. */
		AboutTeamDriveThemes?: Array<AboutTeamDriveThemes>;

		/** Information about a Drive user. */
		user?: User;
	}

	export interface AboutDriveThemes {

		/** A link to this theme's background image. */
		backgroundImageLink?: string;

		/** The color of this theme as an RGB hex string. */
		colorRgb?: string;

		/** The ID of the theme. */
		id?: string;
	}

	export interface AboutStorageQuota {

		/** The usage limit, if applicable. This will not be present if the user has unlimited storage. */
		limit?: string;

		/** The total usage across all services. */
		usage?: string;

		/** The usage by all files in Google Drive. */
		usageInDrive?: string;

		/** The usage by trashed files in Google Drive. */
		usageInDriveTrash?: string;
	}

	export interface AboutTeamDriveThemes {

		/** Deprecated - use driveThemes/backgroundImageLink instead. */
		backgroundImageLink?: string;

		/** Deprecated - use driveThemes/colorRgb instead. */
		colorRgb?: string;

		/** Deprecated - use driveThemes/id instead. */
		id?: string;
	}


	/** Information about a Drive user. */
	export interface User {

		/** A plain text displayable name for this user. */
		displayName?: string;

		/** The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester. */
		emailAddress?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#user". */
		kind?: string;

		/** Whether this user is the requesting user. */
		me?: boolean;

		/** The user's ID as visible in Permission resources. */
		permissionId?: string;

		/** A link to the user's profile photo, if available. */
		photoLink?: string;
	}


	/** A change to a file or shared drive. */
	export interface Change {

		/** The type of the change. Possible values are file and drive. */
		changeType?: string;

		/** Representation of a shared drive. */
		drive?: Drive;

		/** The ID of the shared drive associated with this change. */
		driveId?: string;

		/** The metadata for a file. */
		file?: File;

		/** The ID of the file which has changed. */
		fileId?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#change". */
		kind?: string;

		/** Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access. */
		removed?: boolean;

		/** Deprecated: use the drive collection instead. */
		teamDrive?: TeamDrive;

		/** Deprecated - use driveId instead. */
		teamDriveId?: string;

		/** The time of this change (RFC 3339 date-time). */
		time?: Date;

		/** Deprecated - use changeType instead. */
		type?: string;
	}


	/** Representation of a shared drive. */
	export interface Drive {

		/** An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on drive.drives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set. */
		backgroundImageFile?: DriveBackgroundImageFile;

		/** A short-lived link to this shared drive's background image. */
		backgroundImageLink?: string;

		/** Capabilities the current user has on this shared drive. */
		capabilities?: DriveCapabilities;

		/** The color of this shared drive as an RGB hex string. It can only be set on a drive.drives.update request that does not set themeId. */
		colorRgb?: string;

		/** The time at which the shared drive was created (RFC 3339 date-time). */
		createdTime?: Date;

		/** Whether the shared drive is hidden from default view. */
		hidden?: boolean;

		/** The ID of this shared drive which is also the ID of the top level folder of this shared drive. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#drive". */
		kind?: string;

		/** The name of this shared drive. */
		name?: string;

		/** A set of restrictions that apply to this shared drive or items inside this shared drive. */
		restrictions?: DriveRestrictions;

		/** The ID of the theme from which the background image and color will be set. The set of possible driveThemes can be retrieved from a drive.about.get response. When not specified on a drive.drives.create request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile. */
		themeId?: string;
	}

	export interface DriveBackgroundImageFile {

		/** The ID of an image file in Google Drive to use for the background image. */
		id?: string;

		/** The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high. */
		width?: number;

		/** The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image. */
		xCoordinate?: number;

		/** The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image. */
		yCoordinate?: number;
	}

	export interface DriveCapabilities {

		/** Whether the current user can add children to folders in this shared drive. */
		canAddChildren?: boolean;

		/** Whether the current user can change the copyRequiresWriterPermission restriction of this shared drive. */
		canChangeCopyRequiresWriterPermissionRestriction?: boolean;

		/** Whether the current user can change the domainUsersOnly restriction of this shared drive. */
		canChangeDomainUsersOnlyRestriction?: boolean;

		/** Whether the current user can change the background of this shared drive. */
		canChangeDriveBackground?: boolean;

		/** Whether the current user can change the driveMembersOnly restriction of this shared drive. */
		canChangeDriveMembersOnlyRestriction?: boolean;

		/** Whether the current user can comment on files in this shared drive. */
		canComment?: boolean;

		/** Whether the current user can copy files in this shared drive. */
		canCopy?: boolean;

		/** Whether the current user can delete children from folders in this shared drive. */
		canDeleteChildren?: boolean;

		/** Whether the current user can delete this shared drive. Attempting to delete the shared drive may still fail if there are untrashed items inside the shared drive. */
		canDeleteDrive?: boolean;

		/** Whether the current user can download files in this shared drive. */
		canDownload?: boolean;

		/** Whether the current user can edit files in this shared drive */
		canEdit?: boolean;

		/** Whether the current user can list the children of folders in this shared drive. */
		canListChildren?: boolean;

		/** Whether the current user can add members to this shared drive or remove them or change their role. */
		canManageMembers?: boolean;

		/** Whether the current user can read the revisions resource of files in this shared drive. */
		canReadRevisions?: boolean;

		/** Whether the current user can rename files or folders in this shared drive. */
		canRename?: boolean;

		/** Whether the current user can rename this shared drive. */
		canRenameDrive?: boolean;

		/** Whether the current user can share files or folders in this shared drive. */
		canShare?: boolean;

		/** Whether the current user can trash children from folders in this shared drive. */
		canTrashChildren?: boolean;
	}

	export interface DriveRestrictions {

		/** Whether administrative privileges on this shared drive are required to modify restrictions. */
		adminManagedRestrictions?: boolean;

		/** Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside this shared drive. */
		copyRequiresWriterPermission?: boolean;

		/** Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of this shared drive. */
		domainUsersOnly?: boolean;

		/** Whether access to items inside this shared drive is restricted to its members. */
		driveMembersOnly?: boolean;
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
		copyRequiresWriterPermission?: boolean;

		/** The time at which the file was created (RFC 3339 date-time). */
		createdTime?: Date;

		/** A short description of the file. */
		description?: string;

		/** ID of the shared drive the file resides in. Only populated for items in shared drives. */
		driveId?: string;

		/** Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder. */
		explicitlyTrashed?: boolean;

		/** Links for exporting Google Docs to specific formats. */
		exportLinks?: {[id: string]: string };

		/** The final component of fullFileExtension. This is only available for files with binary content in Google Drive. */
		fileExtension?: string;

		/**
		 * The color for a folder as an RGB hex string. The supported colors are published in the folderColorPalette field of the About resource.
		 * If an unsupported color is specified, the closest color in the palette will be used instead.
		 */
		folderColorRgb?: string;

		/**
		 * The full file extension extracted from the name field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive.
		 * This is automatically updated when the name field changes, however it is not cleared if the new name does not contain a valid extension.
		 */
		fullFileExtension?: string;

		/** Whether there are permissions directly on this file. This field is only populated for items in shared drives. */
		hasAugmentedPermissions?: boolean;

		/** Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field. */
		hasThumbnail?: boolean;

		/** The ID of the file's head revision. This is currently only available for files with binary content in Google Drive. */
		headRevisionId?: string;

		/** A static, unauthenticated link to the file's icon. */
		iconLink?: string;

		/** The ID of the file. */
		id?: string;

		/** Additional metadata about image media, if available. */
		imageMediaMetadata?: FileImageMediaMetadata;

		/** Whether the file was created or opened by the requesting app. */
		isAppAuthorized?: boolean;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#file". */
		kind?: string;

		/** Information about a Drive user. */
		lastModifyingUser?: User;

		/** The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive. */
		md5Checksum?: string;

		/**
		 * The MIME type of the file.
		 * Google Drive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new revision is uploaded.
		 * If a file is created with a Google Doc MIME type, the uploaded content will be imported if possible. The supported import formats are published in the About resource.
		 */
		mimeType?: string;

		/** Whether the file has been modified by this user. */
		modifiedByMe?: boolean;

		/** The last time the file was modified by the user (RFC 3339 date-time). */
		modifiedByMeTime?: Date;

		/**
		 * The last time the file was modified by anyone (RFC 3339 date-time).
		 * Note that setting modifiedTime will also update modifiedByMeTime for the user.
		 */
		modifiedTime?: Date;

		/** The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant. */
		name?: string;

		/** The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Google Drive. */
		originalFilename?: string;

		/** Whether the user owns the file. Not populated for items in shared drives. */
		ownedByMe?: boolean;

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
		quotaBytesUsed?: string;

		/** Whether the file has been shared. Not populated for items in shared drives. */
		shared?: boolean;

		/** The time at which the file was shared with the user, if applicable (RFC 3339 date-time). */
		sharedWithMeTime?: Date;

		/** Information about a Drive user. */
		sharingUser?: User;

		/** Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut. */
		shortcutDetails?: FileShortcutDetails;

		/** The size of the file's content in bytes. This is only applicable to files with binary content in Google Drive. */
		size?: string;

		/** The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'. */
		spaces?: Array<string>;

		/** Whether the user has starred the file. */
		starred?: boolean;

		/** Deprecated - use driveId instead. */
		teamDriveId?: string;

		/** A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. */
		thumbnailLink?: string;

		/** The thumbnail version for use in thumbnail cache invalidation. */
		thumbnailVersion?: string;

		/** Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, and other users cannot see files in the owner's trash. */
		trashed?: boolean;

		/** The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives. */
		trashedTime?: Date;

		/** Information about a Drive user. */
		trashingUser?: User;

		/** A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user. */
		version?: string;

		/** Additional metadata about video media. This may not be available immediately upon upload. */
		videoMediaMetadata?: FileVideoMediaMetadata;

		/** Whether the file has been viewed by this user. */
		viewedByMe?: boolean;

		/** The last time the file was viewed by the user (RFC 3339 date-time). */
		viewedByMeTime?: Date;

		/** Deprecated - use copyRequiresWriterPermission instead. */
		viewersCanCopyContent?: boolean;

		/** A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive. */
		webContentLink?: string;

		/** A link for opening the file in a relevant Google editor or viewer in a browser. */
		webViewLink?: string;

		/** Whether users with only writer permission can modify the file's permissions. Not populated for items in shared drives. */
		writersCanShare?: boolean;
	}

	export interface FileCapabilities {

		/** Whether the current user can add children to this folder. This is always false when the item is not a folder. */
		canAddChildren?: boolean;

		/** Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files. */
		canAddMyDriveParent?: boolean;

		/** Whether the current user can change the copyRequiresWriterPermission restriction of this file. */
		canChangeCopyRequiresWriterPermission?: boolean;

		/** Deprecated */
		canChangeViewersCanCopyContent?: boolean;

		/** Whether the current user can comment on this file. */
		canComment?: boolean;

		/** Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder. */
		canCopy?: boolean;

		/** Whether the current user can delete this file. */
		canDelete?: boolean;

		/** Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives. */
		canDeleteChildren?: boolean;

		/** Whether the current user can download this file. */
		canDownload?: boolean;

		/** Whether the current user can edit this file. Other factors may limit the type of changes a user can make to a file. For example, see canChangeCopyRequiresWriterPermission or canModifyContent. */
		canEdit?: boolean;

		/** Whether the current user can list the children of this folder. This is always false when the item is not a folder. */
		canListChildren?: boolean;

		/** Whether the current user can modify the content of this file. */
		canModifyContent?: boolean;

		/** Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives. */
		canMoveChildrenOutOfDrive?: boolean;

		/** Deprecated - use canMoveChildrenOutOfDrive instead. */
		canMoveChildrenOutOfTeamDrive?: boolean;

		/** Whether the current user can move children of this folder within the shared drive. This is false when the item is not a folder. Only populated for items in shared drives. */
		canMoveChildrenWithinDrive?: boolean;

		/** Deprecated - use canMoveChildrenWithinDrive instead. */
		canMoveChildrenWithinTeamDrive?: boolean;

		/** Deprecated - use canMoveItemOutOfDrive instead. */
		canMoveItemIntoTeamDrive?: boolean;

		/** Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added. */
		canMoveItemOutOfDrive?: boolean;

		/** Deprecated - use canMoveItemOutOfDrive instead. */
		canMoveItemOutOfTeamDrive?: boolean;

		/** Whether the current user can move this item within this shared drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added. Only populated for items in shared drives. */
		canMoveItemWithinDrive?: boolean;

		/** Deprecated - use canMoveItemWithinDrive instead. */
		canMoveItemWithinTeamDrive?: boolean;

		/** Deprecated - use canMoveItemWithinDrive or canMoveItemOutOfDrive instead. */
		canMoveTeamDriveItem?: boolean;

		/** Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives. */
		canReadDrive?: boolean;

		/** Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read. */
		canReadRevisions?: boolean;

		/** Deprecated - use canReadDrive instead. */
		canReadTeamDrive?: boolean;

		/** Whether the current user can remove children from this folder. This is always false when the item is not a folder. For a folder in a shared drive, use canDeleteChildren or canTrashChildren instead. */
		canRemoveChildren?: boolean;

		/** Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files. */
		canRemoveMyDriveParent?: boolean;

		/** Whether the current user can rename this file. */
		canRename?: boolean;

		/** Whether the current user can modify the sharing settings for this file. */
		canShare?: boolean;

		/** Whether the current user can move this file to trash. */
		canTrash?: boolean;

		/** Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives. */
		canTrashChildren?: boolean;

		/** Whether the current user can restore this file from trash. */
		canUntrash?: boolean;
	}

	export interface FileContentHints {

		/** Text to be indexed for the file to improve fullText queries. This is limited to 128KB in length and may contain HTML elements. */
		indexableText?: string;

		/** A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail. */
		thumbnail?: FileContentHintsThumbnail;
	}

	export interface FileContentHintsThumbnail {

		/** The thumbnail data encoded with URL-safe Base64 (RFC 4648 section 5). */
		image?: string;

		/** The MIME type of the thumbnail. */
		mimeType?: string;
	}

	export interface FileImageMediaMetadata {

		/** The aperture used to create the photo (f-number). */
		aperture?: number;

		/** The make of the camera used to create the photo. */
		cameraMake?: string;

		/** The model of the camera used to create the photo. */
		cameraModel?: string;

		/** The color space of the photo. */
		colorSpace?: string;

		/** The exposure bias of the photo (APEX value). */
		exposureBias?: number;

		/** The exposure mode used to create the photo. */
		exposureMode?: string;

		/** The length of the exposure, in seconds. */
		exposureTime?: number;

		/** Whether a flash was used to create the photo. */
		flashUsed?: boolean;

		/** The focal length used to create the photo, in millimeters. */
		focalLength?: number;

		/** The height of the image in pixels. */
		height?: number;

		/** The ISO speed used to create the photo. */
		isoSpeed?: number;

		/** The lens used to create the photo. */
		lens?: string;

		/** Geographic location information stored in the image. */
		location?: FileImageMediaMetadataLocation;

		/** The smallest f-number of the lens at the focal length used to create the photo (APEX value). */
		maxApertureValue?: number;

		/** The metering mode used to create the photo. */
		meteringMode?: string;

		/** The number of clockwise 90 degree rotations applied from the image's original orientation. */
		rotation?: number;

		/** The type of sensor used to create the photo. */
		sensor?: string;

		/** The distance to the subject of the photo, in meters. */
		subjectDistance?: number;

		/** The date and time the photo was taken (EXIF DateTime). */
		time?: string;

		/** The white balance mode used to create the photo. */
		whiteBalance?: string;

		/** The width of the image in pixels. */
		width?: number;
	}

	export interface FileImageMediaMetadataLocation {

		/** The altitude stored in the image. */
		altitude?: number;

		/** The latitude stored in the image. */
		latitude?: number;

		/** The longitude stored in the image. */
		longitude?: number;
	}


	/** A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy. */
	export interface Permission {

		/** Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone. */
		allowFileDiscovery?: boolean;

		/** Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions. */
		deleted?: boolean;

		/**
		 * The "pretty" name of the value of the permission. The following is a list of examples for each type of permission:
		 * - user - User's full name, as defined for their Google account, such as "Joe Smith."
		 * - group - Name of the Google Group, such as "The Company Administrators."
		 * - domain - String domain name, such as "thecompany.com."
		 * - anyone - No displayName is present.
		 */
		displayName?: string;

		/** The domain to which this permission refers. */
		domain?: string;

		/** The email address of the user or group to which this permission refers. */
		emailAddress?: string;

		/**
		 * The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions:
		 * - They can only be set on user and group permissions
		 * - The time must be in the future
		 * - The time cannot be more than a year in the future
		 */
		expirationTime?: Date;

		/** The ID of this permission. This is a unique identifier for the grantee, and is published in User resources as permissionId. IDs should be treated as opaque values. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#permission". */
		kind?: string;

		/** Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items. */
		PermissionPermissionDetails?: Array<PermissionPermissionDetails>;

		/** A link to the user's profile photo, if available. */
		photoLink?: string;

		/**
		 * The role granted by this permission. While new values may be supported in the future, the following are currently allowed:
		 * - owner
		 * - organizer
		 * - fileOrganizer
		 * - writer
		 * - commenter
		 * - reader
		 */
		role?: string;

		/** Deprecated - use permissionDetails instead. */
		PermissionTeamDrivePermissionDetails?: Array<PermissionTeamDrivePermissionDetails>;

		/**
		 * The type of the grantee. Valid values are:
		 * - user
		 * - group
		 * - domain
		 * - anyone  When creating a permission, if type is user or group, you must provide an emailAddress for the user or group. When type is domain, you must provide a domain. There isn't extra information required for a anyone type.
		 */
		type?: string;
	}

	export interface PermissionPermissionDetails {

		/** Whether this permission is inherited. This field is always populated. This is an output-only field. */
		inherited?: boolean;

		/** The ID of the item from which this permission is inherited. This is an output-only field. */
		inheritedFrom?: string;

		/**
		 * The permission type for this user. While new values may be added in future, the following are currently possible:
		 * - file
		 * - member
		 */
		permissionType?: string;

		/**
		 * The primary role for this user. While new values may be added in the future, the following are currently possible:
		 * - organizer
		 * - fileOrganizer
		 * - writer
		 * - commenter
		 * - reader
		 */
		role?: string;
	}

	export interface PermissionTeamDrivePermissionDetails {

		/** Deprecated - use permissionDetails/inherited instead. */
		inherited?: boolean;

		/** Deprecated - use permissionDetails/inheritedFrom instead. */
		inheritedFrom?: string;

		/** Deprecated - use permissionDetails/role instead. */
		role?: string;

		/** Deprecated - use permissionDetails/permissionType instead. */
		teamDrivePermissionType?: string;
	}

	export interface FileShortcutDetails {

		/** The ID of the file that this shortcut points to. */
		targetId?: string;

		/** The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created. */
		targetMimeType?: string;
	}

	export interface FileVideoMediaMetadata {

		/** The duration of the video in milliseconds. */
		durationMillis?: string;

		/** The height of the video in pixels. */
		height?: number;

		/** The width of the video in pixels. */
		width?: number;
	}


	/** Deprecated: use the drive collection instead. */
	export interface TeamDrive {

		/** An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on drive.teamdrives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set. */
		backgroundImageFile?: TeamDriveBackgroundImageFile;

		/** A short-lived link to this Team Drive's background image. */
		backgroundImageLink?: string;

		/** Capabilities the current user has on this Team Drive. */
		capabilities?: TeamDriveCapabilities;

		/** The color of this Team Drive as an RGB hex string. It can only be set on a drive.teamdrives.update request that does not set themeId. */
		colorRgb?: string;

		/** The time at which the Team Drive was created (RFC 3339 date-time). */
		createdTime?: Date;

		/** The ID of this Team Drive which is also the ID of the top level folder of this Team Drive. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#teamDrive". */
		kind?: string;

		/** The name of this Team Drive. */
		name?: string;

		/** A set of restrictions that apply to this Team Drive or items inside this Team Drive. */
		restrictions?: TeamDriveRestrictions;

		/** The ID of the theme from which the background image and color will be set. The set of possible teamDriveThemes can be retrieved from a drive.about.get response. When not specified on a drive.teamdrives.create request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile. */
		themeId?: string;
	}

	export interface TeamDriveBackgroundImageFile {

		/** The ID of an image file in Drive to use for the background image. */
		id?: string;

		/** The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high. */
		width?: number;

		/** The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image. */
		xCoordinate?: number;

		/** The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image. */
		yCoordinate?: number;
	}

	export interface TeamDriveCapabilities {

		/** Whether the current user can add children to folders in this Team Drive. */
		canAddChildren?: boolean;

		/** Whether the current user can change the copyRequiresWriterPermission restriction of this Team Drive. */
		canChangeCopyRequiresWriterPermissionRestriction?: boolean;

		/** Whether the current user can change the domainUsersOnly restriction of this Team Drive. */
		canChangeDomainUsersOnlyRestriction?: boolean;

		/** Whether the current user can change the background of this Team Drive. */
		canChangeTeamDriveBackground?: boolean;

		/** Whether the current user can change the teamMembersOnly restriction of this Team Drive. */
		canChangeTeamMembersOnlyRestriction?: boolean;

		/** Whether the current user can comment on files in this Team Drive. */
		canComment?: boolean;

		/** Whether the current user can copy files in this Team Drive. */
		canCopy?: boolean;

		/** Whether the current user can delete children from folders in this Team Drive. */
		canDeleteChildren?: boolean;

		/** Whether the current user can delete this Team Drive. Attempting to delete the Team Drive may still fail if there are untrashed items inside the Team Drive. */
		canDeleteTeamDrive?: boolean;

		/** Whether the current user can download files in this Team Drive. */
		canDownload?: boolean;

		/** Whether the current user can edit files in this Team Drive */
		canEdit?: boolean;

		/** Whether the current user can list the children of folders in this Team Drive. */
		canListChildren?: boolean;

		/** Whether the current user can add members to this Team Drive or remove them or change their role. */
		canManageMembers?: boolean;

		/** Whether the current user can read the revisions resource of files in this Team Drive. */
		canReadRevisions?: boolean;

		/** Deprecated - use canDeleteChildren or canTrashChildren instead. */
		canRemoveChildren?: boolean;

		/** Whether the current user can rename files or folders in this Team Drive. */
		canRename?: boolean;

		/** Whether the current user can rename this Team Drive. */
		canRenameTeamDrive?: boolean;

		/** Whether the current user can share files or folders in this Team Drive. */
		canShare?: boolean;

		/** Whether the current user can trash children from folders in this Team Drive. */
		canTrashChildren?: boolean;
	}

	export interface TeamDriveRestrictions {

		/** Whether administrative privileges on this Team Drive are required to modify restrictions. */
		adminManagedRestrictions?: boolean;

		/** Whether the options to copy, print, or download files inside this Team Drive, should be disabled for readers and commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside this Team Drive. */
		copyRequiresWriterPermission?: boolean;

		/** Whether access to this Team Drive and items inside this Team Drive is restricted to users of the domain to which this Team Drive belongs. This restriction may be overridden by other sharing policies controlled outside of this Team Drive. */
		domainUsersOnly?: boolean;

		/** Whether access to items inside this Team Drive is restricted to members of this Team Drive. */
		teamMembersOnly?: boolean;
	}


	/** A list of changes for a user. */
	export interface ChangeList {

		/** The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		changes?: Array<Change>;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#changeList". */
		kind?: string;

		/** The starting page token for future changes. This will be present only if the end of the current changes list has been reached. */
		newStartPageToken?: string;

		/** The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string;
	}


	/** An notification channel used to watch for resource changes. */
	export interface Channel {

		/** The address where notifications are delivered for this channel. */
		address?: string;

		/** Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. */
		expiration?: string;

		/** A UUID or similar unique string that identifies this channel. */
		id?: string;

		/** Identifies this as a notification channel used to watch for changes to a resource, which is "api#channel". */
		kind?: string;

		/** Additional parameters controlling delivery channel behavior. Optional. */
		params?: {[id: string]: string };

		/** A Boolean value to indicate whether payload is wanted. Optional. */
		payload?: boolean;

		/** An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. */
		resourceId?: string;

		/** A version-specific identifier for the watched resource. */
		resourceUri?: string;

		/** An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. */
		token?: string;

		/** The type of delivery mechanism used for this channel. */
		type?: string;
	}


	/** A comment on a file. */
	export interface Comment {

		/** A region of the document represented as a JSON string. See anchor documentation for details on how to define and interpret anchor properties. */
		anchor?: string;

		/** Information about a Drive user. */
		author?: User;

		/** The plain text content of the comment. This field is used for setting the content, while htmlContent should be displayed. */
		content?: string;

		/** The time at which the comment was created (RFC 3339 date-time). */
		createdTime?: Date;

		/** Whether the comment has been deleted. A deleted comment has no content. */
		deleted?: boolean;

		/** The content of the comment with HTML formatting. */
		htmlContent?: string;

		/** The ID of the comment. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#comment". */
		kind?: string;

		/** The last time the comment or any of its replies was modified (RFC 3339 date-time). */
		modifiedTime?: Date;

		/** The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment. */
		quotedFileContent?: CommentQuotedFileContent;

		/** The full list of replies to the comment in chronological order. */
		replies?: Array<Reply>;

		/** Whether the comment has been resolved by one of its replies. */
		resolved?: boolean;
	}

	export interface CommentQuotedFileContent {

		/** The MIME type of the quoted content. */
		mimeType?: string;

		/** The quoted content itself. This is interpreted as plain text if set through the API. */
		value?: string;
	}


	/** A reply to a comment on a file. */
	export interface Reply {

		/**
		 * The action the reply performed to the parent comment. Valid values are:
		 * - resolve
		 * - reopen
		 */
		action?: string;

		/** Information about a Drive user. */
		author?: User;

		/** The plain text content of the reply. This field is used for setting the content, while htmlContent should be displayed. This is required on creates if no action is specified. */
		content?: string;

		/** The time at which the reply was created (RFC 3339 date-time). */
		createdTime?: Date;

		/** Whether the reply has been deleted. A deleted reply has no content. */
		deleted?: boolean;

		/** The content of the reply with HTML formatting. */
		htmlContent?: string;

		/** The ID of the reply. */
		id?: string;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#reply". */
		kind?: string;

		/** The last time the reply was modified (RFC 3339 date-time). */
		modifiedTime?: Date;
	}


	/** A list of comments on a file. */
	export interface CommentList {

		/** The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		comments?: Array<Comment>;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#commentList". */
		kind?: string;

		/** The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string;
	}


	/** A list of shared drives. */
	export interface DriveList {

		/** The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		drives?: Array<Drive>;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#driveList". */
		kind?: string;

		/** The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string;
	}


	/** A list of files. */
	export interface FileList {

		/** The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		files?: Array<File>;

		/** Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the "allDrives" corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as "user" or "drive". */
		incompleteSearch?: boolean;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#fileList". */
		kind?: string;

		/** The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string;
	}


	/** A list of generated file IDs which can be provided in create requests. */
	export interface GeneratedIds {

		/** The IDs generated for the requesting user in the specified space. */
		ids?: Array<string>;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#generatedIds". */
		kind?: string;

		/** The type of file that can be created with these IDs. */
		space?: string;
	}


	/** A list of permissions for a file. */
	export interface PermissionList {

		/** Identifies what kind of resource this is. Value: the fixed string "drive#permissionList". */
		kind?: string;

		/** The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string;

		/** The list of permissions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		permissions?: Array<Permission>;
	}


	/** A list of replies to a comment on a file. */
	export interface ReplyList {

		/** Identifies what kind of resource this is. Value: the fixed string "drive#replyList". */
		kind?: string;

		/** The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string;

		/** The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		replies?: Array<Reply>;
	}


	/** The metadata for a revision to a file. */
	export interface Revision {

		/** Links for exporting Google Docs to specific formats. */
		exportLinks?: {[id: string]: string };

		/** The ID of the revision. */
		id?: string;

		/**
		 * Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file.
		 * This field is only applicable to files with binary content in Drive.
		 */
		keepForever?: boolean;

		/** Identifies what kind of resource this is. Value: the fixed string "drive#revision". */
		kind?: string;

		/** Information about a Drive user. */
		lastModifyingUser?: User;

		/** The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive. */
		md5Checksum?: string;

		/** The MIME type of the revision. */
		mimeType?: string;

		/** The last time the revision was modified (RFC 3339 date-time). */
		modifiedTime?: Date;

		/** The original filename used to create this revision. This is only applicable to files with binary content in Drive. */
		originalFilename?: string;

		/** Whether subsequent revisions will be automatically republished. This is only applicable to Google Docs. */
		publishAuto?: boolean;

		/** Whether this revision is published. This is only applicable to Google Docs. */
		published?: boolean;

		/** Whether this revision is published outside the domain. This is only applicable to Google Docs. */
		publishedOutsideDomain?: boolean;

		/** The size of the revision's content in bytes. This is only applicable to files with binary content in Drive. */
		size?: string;
	}


	/** A list of revisions of a file. */
	export interface RevisionList {

		/** Identifies what kind of resource this is. Value: the fixed string "drive#revisionList". */
		kind?: string;

		/** The page token for the next page of revisions. This will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string;

		/** The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		revisions?: Array<Revision>;
	}

	export interface StartPageToken {

		/** Identifies what kind of resource this is. Value: the fixed string "drive#startPageToken". */
		kind?: string;

		/** The starting page token for listing changes. */
		startPageToken?: string;
	}


	/** A list of Team Drives. */
	export interface TeamDriveList {

		/** Identifies what kind of resource this is. Value: the fixed string "drive#teamDriveList". */
		kind?: string;

		/** The page token for the next page of Team Drives. This will be absent if the end of the Team Drives list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string;

		/** The list of Team Drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		teamDrives?: Array<TeamDrive>;
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
		Drive_changes_list(pageToken: string, driveId: string, includeCorpusRemovals: boolean, includeItemsFromAllDrives: boolean, includeRemoved: boolean, includeTeamDriveItems: boolean, pageSize: number, restrictToMyDrive: boolean, spaces: string, supportsAllDrives: boolean, supportsTeamDrives: boolean, teamDriveId: string): Observable<HttpResponse<string>> {
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
		Drive_changes_getStartPageToken(driveId: string, supportsAllDrives: boolean, supportsTeamDrives: boolean, teamDriveId: string): Observable<HttpResponse<string>> {
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
		Drive_changes_watch(pageToken: string, driveId: string, includeCorpusRemovals: boolean, includeItemsFromAllDrives: boolean, includeRemoved: boolean, includeTeamDriveItems: boolean, pageSize: number, restrictToMyDrive: boolean, spaces: string, supportsAllDrives: boolean, supportsTeamDrives: boolean, teamDriveId: string, requestBody: Channel): Observable<HttpResponse<string>> {
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
		Drive_drives_list(pageSize: number, pageToken: string, q: string, useDomainAdminAccess: boolean): Observable<HttpResponse<string>> {
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
		Drive_drives_get(driveId: string, useDomainAdminAccess: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'drives/' + (driveId == null ? '' : encodeURIComponent(driveId)) + '&useDomainAdminAccess=' + useDomainAdminAccess, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the metadate for a shared drive.
		 * Patch drives/{driveId}
		 * @param {string} driveId The ID of the shared drive.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
		 * @return {void} Successful response
		 */
		Drive_drives_update(driveId: string, useDomainAdminAccess: boolean, requestBody: Drive): Observable<HttpResponse<string>> {
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
		Drive_files_list(corpora: string, corpus: Drive_files_listCorpus, driveId: string, includeItemsFromAllDrives: boolean, includeTeamDriveItems: boolean, orderBy: string, pageSize: number, pageToken: string, q: string, spaces: string, supportsAllDrives: boolean, supportsTeamDrives: boolean, teamDriveId: string): Observable<HttpResponse<string>> {
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
		Drive_files_create(enforceSingleParent: boolean, ignoreDefaultVisibility: boolean, keepRevisionForever: boolean, ocrLanguage: string, supportsAllDrives: boolean, supportsTeamDrives: boolean, useContentAsIndexableText: boolean, requestBody: File): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'files?enforceSingleParent=' + enforceSingleParent + '&ignoreDefaultVisibility=' + ignoreDefaultVisibility + '&keepRevisionForever=' + keepRevisionForever + '&ocrLanguage=' + (ocrLanguage == null ? '' : encodeURIComponent(ocrLanguage)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&useContentAsIndexableText=' + useContentAsIndexableText, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates a set of file IDs which can be provided in create or copy requests.
		 * Get files/generateIds
		 * @param {number} count The number of IDs to return.
		 * @param {string} space The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'.
		 * @return {void} Successful response
		 */
		Drive_files_generateIds(count: number, space: string): Observable<HttpResponse<string>> {
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
		Drive_files_delete(fileId: string, supportsAllDrives: boolean, supportsTeamDrives: boolean): Observable<HttpResponse<string>> {
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
		Drive_files_get(fileId: string, acknowledgeAbuse: boolean, supportsAllDrives: boolean, supportsTeamDrives: boolean): Observable<HttpResponse<string>> {
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
		Drive_comments_list(fileId: string, includeDeleted: boolean, pageSize: number, pageToken: string, startModifiedTime: string): Observable<HttpResponse<string>> {
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
		Drive_comments_get(fileId: string, commentId: string, includeDeleted: boolean): Observable<HttpResponse<string>> {
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
		Drive_replies_list(fileId: string, commentId: string, includeDeleted: boolean, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
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
		Drive_replies_get(fileId: string, commentId: string, replyId: string, includeDeleted: boolean): Observable<HttpResponse<string>> {
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
		Drive_files_copy(fileId: string, enforceSingleParent: boolean, ignoreDefaultVisibility: boolean, keepRevisionForever: boolean, ocrLanguage: string, supportsAllDrives: boolean, supportsTeamDrives: boolean, requestBody: File): Observable<HttpResponse<string>> {
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
		Drive_permissions_list(fileId: string, pageSize: number, pageToken: string, supportsAllDrives: boolean, supportsTeamDrives: boolean, useDomainAdminAccess: boolean): Observable<HttpResponse<string>> {
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
		Drive_permissions_create(fileId: string, emailMessage: string, enforceSingleParent: boolean, moveToNewOwnersRoot: boolean, sendNotificationEmail: boolean, supportsAllDrives: boolean, supportsTeamDrives: boolean, transferOwnership: boolean, useDomainAdminAccess: boolean, requestBody: Permission): Observable<HttpResponse<string>> {
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
		Drive_permissions_delete(fileId: string, permissionId: string, supportsAllDrives: boolean, supportsTeamDrives: boolean, useDomainAdminAccess: boolean): Observable<HttpResponse<string>> {
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
		Drive_permissions_get(fileId: string, permissionId: string, supportsAllDrives: boolean, supportsTeamDrives: boolean, useDomainAdminAccess: boolean): Observable<HttpResponse<string>> {
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
		Drive_permissions_update(fileId: string, permissionId: string, removeExpiration: boolean, supportsAllDrives: boolean, supportsTeamDrives: boolean, transferOwnership: boolean, useDomainAdminAccess: boolean, requestBody: Permission): Observable<HttpResponse<string>> {
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
		Drive_revisions_list(fileId: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
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
		Drive_revisions_get(fileId: string, revisionId: string, acknowledgeAbuse: boolean): Observable<HttpResponse<string>> {
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
		Drive_files_watch(fileId: string, acknowledgeAbuse: boolean, supportsAllDrives: boolean, supportsTeamDrives: boolean, requestBody: Channel): Observable<HttpResponse<string>> {
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
		Drive_teamdrives_list(pageSize: number, pageToken: string, q: string, useDomainAdminAccess: boolean): Observable<HttpResponse<string>> {
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
		Drive_teamdrives_get(teamDriveId: string, useDomainAdminAccess: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'teamdrives/' + (teamDriveId == null ? '' : encodeURIComponent(teamDriveId)) + '&useDomainAdminAccess=' + useDomainAdminAccess, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deprecated use drives.update instead
		 * Patch teamdrives/{teamDriveId}
		 * @param {string} teamDriveId The ID of the Team Drive
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
		 * @return {void} Successful response
		 */
		Drive_teamdrives_update(teamDriveId: string, useDomainAdminAccess: boolean, requestBody: TeamDrive): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'teamdrives/' + (teamDriveId == null ? '' : encodeURIComponent(teamDriveId)) + '&useDomainAdminAccess=' + useDomainAdminAccess, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Drive_files_listCorpus { domain = 0, user = 1 }

}

