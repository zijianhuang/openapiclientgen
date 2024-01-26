import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An item with user information and settings. */
	export interface About {

		/** Information about supported additional roles per file type. The most specific type takes precedence. */
		AboutAdditionalRoleInfo?: Array<AboutAdditionalRoleInfo>;

		/** Whether the user can create shared drives. */
		canCreateDrives?: boolean | null;

		/** Deprecated: Use `canCreateDrives` instead. */
		canCreateTeamDrives?: boolean | null;

		/** The domain sharing policy for the current user. Possible values are: * `allowed` * `allowedWithWarning` * `incomingOnly` * `disallowed` */
		domainSharingPolicy?: string | null;

		/** A list of themes that are supported for shared drives. */
		AboutDriveThemes?: Array<AboutDriveThemes>;

		/** The ETag of the item. */
		etag?: string | null;

		/** The allowable export formats. */
		AboutExportFormats?: Array<AboutExportFormats>;

		/** List of additional features enabled on this account. */
		AboutFeatures?: Array<AboutFeatures>;

		/** The palette of allowable folder colors as RGB hex strings. */
		folderColorPalette?: Array<string>;

		/** The allowable import formats. */
		AboutImportFormats?: Array<AboutImportFormats>;

		/** A boolean indicating whether the authenticated app is installed by the authenticated user. */
		isCurrentAppInstalled?: boolean | null;

		/** This is always `drive#about`. */
		kind?: string | null;

		/** The user's language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/). */
		languageCode?: string | null;

		/** The largest change id. */
		largestChangeId?: string | null;

		/** List of max upload sizes for each file type. The most specific type takes precedence. */
		AboutMaxUploadSizes?: Array<AboutMaxUploadSizes>;

		/** The name of the current user. */
		name?: string | null;

		/** The current user's ID as visible in the permissions collection. */
		permissionId?: string | null;

		/** The amount of storage quota used by different Google services. */
		AboutQuotaBytesByService?: Array<AboutQuotaBytesByService>;

		/** The total number of quota bytes. This is only relevant when quotaType is LIMITED. */
		quotaBytesTotal?: string | null;

		/** The number of quota bytes used by Google Drive. */
		quotaBytesUsed?: string | null;

		/** The number of quota bytes used by all Google apps (Drive, Picasa, etc.). */
		quotaBytesUsedAggregate?: string | null;

		/** The number of quota bytes used by trashed items. */
		quotaBytesUsedInTrash?: string | null;

		/** The type of the user's storage quota. Possible values are: * `LIMITED` * `UNLIMITED` */
		quotaType?: string | null;

		/** The number of remaining change ids, limited to no more than 2500. */
		remainingChangeIds?: string | null;

		/** The id of the root folder. */
		rootFolderId?: string | null;

		/** A link back to this item. */
		selfLink?: string | null;

		/** Deprecated: Use `driveThemes` instead. */
		AboutTeamDriveThemes?: Array<AboutTeamDriveThemes>;

		/** Information about a Drive user. */
		user?: User;
	}

	/** An item with user information and settings. */
	export interface AboutFormProperties {

		/** Whether the user can create shared drives. */
		canCreateDrives: FormControl<boolean | null | undefined>,

		/** Deprecated: Use `canCreateDrives` instead. */
		canCreateTeamDrives: FormControl<boolean | null | undefined>,

		/** The domain sharing policy for the current user. Possible values are: * `allowed` * `allowedWithWarning` * `incomingOnly` * `disallowed` */
		domainSharingPolicy: FormControl<string | null | undefined>,

		/** The ETag of the item. */
		etag: FormControl<string | null | undefined>,

		/** A boolean indicating whether the authenticated app is installed by the authenticated user. */
		isCurrentAppInstalled: FormControl<boolean | null | undefined>,

		/** This is always `drive#about`. */
		kind: FormControl<string | null | undefined>,

		/** The user's language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/). */
		languageCode: FormControl<string | null | undefined>,

		/** The largest change id. */
		largestChangeId: FormControl<string | null | undefined>,

		/** The name of the current user. */
		name: FormControl<string | null | undefined>,

		/** The current user's ID as visible in the permissions collection. */
		permissionId: FormControl<string | null | undefined>,

		/** The total number of quota bytes. This is only relevant when quotaType is LIMITED. */
		quotaBytesTotal: FormControl<string | null | undefined>,

		/** The number of quota bytes used by Google Drive. */
		quotaBytesUsed: FormControl<string | null | undefined>,

		/** The number of quota bytes used by all Google apps (Drive, Picasa, etc.). */
		quotaBytesUsedAggregate: FormControl<string | null | undefined>,

		/** The number of quota bytes used by trashed items. */
		quotaBytesUsedInTrash: FormControl<string | null | undefined>,

		/** The type of the user's storage quota. Possible values are: * `LIMITED` * `UNLIMITED` */
		quotaType: FormControl<string | null | undefined>,

		/** The number of remaining change ids, limited to no more than 2500. */
		remainingChangeIds: FormControl<string | null | undefined>,

		/** The id of the root folder. */
		rootFolderId: FormControl<string | null | undefined>,

		/** A link back to this item. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateAboutFormGroup() {
		return new FormGroup<AboutFormProperties>({
			canCreateDrives: new FormControl<boolean | null | undefined>(undefined),
			canCreateTeamDrives: new FormControl<boolean | null | undefined>(undefined),
			domainSharingPolicy: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			isCurrentAppInstalled: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			largestChangeId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			permissionId: new FormControl<string | null | undefined>(undefined),
			quotaBytesTotal: new FormControl<string | null | undefined>(undefined),
			quotaBytesUsed: new FormControl<string | null | undefined>(undefined),
			quotaBytesUsedAggregate: new FormControl<string | null | undefined>(undefined),
			quotaBytesUsedInTrash: new FormControl<string | null | undefined>(undefined),
			quotaType: new FormControl<string | null | undefined>(undefined),
			remainingChangeIds: new FormControl<string | null | undefined>(undefined),
			rootFolderId: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AboutAdditionalRoleInfo {

		/** The supported additional roles per primary role. */
		AboutAdditionalRoleInfoRoleSets?: Array<AboutAdditionalRoleInfoRoleSets>;

		/** The content type that this additional role info applies to. */
		type?: string | null;
	}
	export interface AboutAdditionalRoleInfoFormProperties {

		/** The content type that this additional role info applies to. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAboutAdditionalRoleInfoFormGroup() {
		return new FormGroup<AboutAdditionalRoleInfoFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AboutAdditionalRoleInfoRoleSets {

		/** The supported additional roles with the primary role. */
		additionalRoles?: Array<string>;

		/** A primary permission role. */
		primaryRole?: string | null;
	}
	export interface AboutAdditionalRoleInfoRoleSetsFormProperties {

		/** A primary permission role. */
		primaryRole: FormControl<string | null | undefined>,
	}
	export function CreateAboutAdditionalRoleInfoRoleSetsFormGroup() {
		return new FormGroup<AboutAdditionalRoleInfoRoleSetsFormProperties>({
			primaryRole: new FormControl<string | null | undefined>(undefined),
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

	export interface AboutExportFormats {

		/** The content type to convert from. */
		source?: string | null;

		/** The possible content types to convert to. */
		targets?: Array<string>;
	}
	export interface AboutExportFormatsFormProperties {

		/** The content type to convert from. */
		source: FormControl<string | null | undefined>,
	}
	export function CreateAboutExportFormatsFormGroup() {
		return new FormGroup<AboutExportFormatsFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AboutFeatures {

		/** The name of the feature. */
		featureName?: string | null;

		/** The request limit rate for this feature, in queries per second. */
		featureRate?: number | null;
	}
	export interface AboutFeaturesFormProperties {

		/** The name of the feature. */
		featureName: FormControl<string | null | undefined>,

		/** The request limit rate for this feature, in queries per second. */
		featureRate: FormControl<number | null | undefined>,
	}
	export function CreateAboutFeaturesFormGroup() {
		return new FormGroup<AboutFeaturesFormProperties>({
			featureName: new FormControl<string | null | undefined>(undefined),
			featureRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AboutImportFormats {

		/** The imported file's content type to convert from. */
		source?: string | null;

		/** The possible content types to convert to. */
		targets?: Array<string>;
	}
	export interface AboutImportFormatsFormProperties {

		/** The imported file's content type to convert from. */
		source: FormControl<string | null | undefined>,
	}
	export function CreateAboutImportFormatsFormGroup() {
		return new FormGroup<AboutImportFormatsFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AboutMaxUploadSizes {

		/** The max upload size for this type. */
		size?: string | null;

		/** The file type. */
		type?: string | null;
	}
	export interface AboutMaxUploadSizesFormProperties {

		/** The max upload size for this type. */
		size: FormControl<string | null | undefined>,

		/** The file type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAboutMaxUploadSizesFormGroup() {
		return new FormGroup<AboutMaxUploadSizesFormProperties>({
			size: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AboutQuotaBytesByService {

		/** The storage quota bytes used by the service. */
		bytesUsed?: string | null;

		/** The service's name, e.g. DRIVE, GMAIL, or PHOTOS. */
		serviceName?: string | null;
	}
	export interface AboutQuotaBytesByServiceFormProperties {

		/** The storage quota bytes used by the service. */
		bytesUsed: FormControl<string | null | undefined>,

		/** The service's name, e.g. DRIVE, GMAIL, or PHOTOS. */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateAboutQuotaBytesByServiceFormGroup() {
		return new FormGroup<AboutQuotaBytesByServiceFormProperties>({
			bytesUsed: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AboutTeamDriveThemes {

		/** Deprecated: Use `driveThemes/backgroundImageLink` instead. */
		backgroundImageLink?: string | null;

		/** Deprecated: Use `driveThemes/colorRgb` instead. */
		colorRgb?: string | null;

		/** Deprecated: Use `driveThemes/id` instead. */
		id?: string | null;
	}
	export interface AboutTeamDriveThemesFormProperties {

		/** Deprecated: Use `driveThemes/backgroundImageLink` instead. */
		backgroundImageLink: FormControl<string | null | undefined>,

		/** Deprecated: Use `driveThemes/colorRgb` instead. */
		colorRgb: FormControl<string | null | undefined>,

		/** Deprecated: Use `driveThemes/id` instead. */
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

		/** Output only. A plain text displayable name for this user. */
		displayName?: string | null;

		/** Output only. The email address of the user. */
		emailAddress?: string | null;

		/** Output only. Whether this user is the same as the authenticated user for whom the request was made. */
		isAuthenticatedUser?: boolean | null;

		/** Output only. This is always `drive#user`. */
		kind?: string | null;

		/** Output only. The user's ID as visible in the permissions collection. */
		permissionId?: string | null;

		/** Output only. The user's profile picture. */
		picture?: UserPicture;
	}

	/** Information about a Drive user. */
	export interface UserFormProperties {

		/** Output only. A plain text displayable name for this user. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The email address of the user. */
		emailAddress: FormControl<string | null | undefined>,

		/** Output only. Whether this user is the same as the authenticated user for whom the request was made. */
		isAuthenticatedUser: FormControl<boolean | null | undefined>,

		/** Output only. This is always `drive#user`. */
		kind: FormControl<string | null | undefined>,

		/** Output only. The user's ID as visible in the permissions collection. */
		permissionId: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			isAuthenticatedUser: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			permissionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserPicture {

		/** Output Only. A URL that points to a profile picture of this user. */
		url?: string | null;
	}
	export interface UserPictureFormProperties {

		/** Output Only. A URL that points to a profile picture of this user. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateUserPictureFormGroup() {
		return new FormGroup<UserPictureFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The apps resource provides a list of the apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details. Some resource methods (such as `apps.get`) require an `appId`. Use the `apps.list` method to retrieve the ID for an installed application. */
	export interface App {

		/** Whether the app is authorized to access data on the user's Drive. */
		authorized?: boolean | null;

		/** The template url to create a new file with this app in a given folder. The template will contain {folderId} to be replaced by the folder to create the new file in. */
		createInFolderTemplate?: string | null;

		/** The url to create a new file with this app. */
		createUrl?: string | null;

		/** Whether the app has drive-wide scope. An app with drive-wide scope can access all files in the user's drive. */
		hasDriveWideScope?: boolean | null;

		/** The various icons for the app. */
		AppIcons?: Array<AppIcons>;

		/** The ID of the app. */
		id?: string | null;

		/** Whether the app is installed. */
		installed?: boolean | null;

		/** This is always `drive#app`. */
		kind?: string | null;

		/** A long description of the app. */
		longDescription?: string | null;

		/** The name of the app. */
		name?: string | null;

		/** The type of object this app creates (e.g. Chart). If empty, the app name should be used instead. */
		objectType?: string | null;

		/** The template url for opening files with this app. The template will contain `{ids}` and/or `{exportIds}` to be replaced by the actual file ids. See Open Files for the full documentation. */
		openUrlTemplate?: string | null;

		/** The list of primary file extensions. */
		primaryFileExtensions?: Array<string>;

		/** The list of primary mime types. */
		primaryMimeTypes?: Array<string>;

		/** The ID of the product listing for this app. */
		productId?: string | null;

		/** A link to the product listing for this app. */
		productUrl?: string | null;

		/** The list of secondary file extensions. */
		secondaryFileExtensions?: Array<string>;

		/** The list of secondary mime types. */
		secondaryMimeTypes?: Array<string>;

		/** A short description of the app. */
		shortDescription?: string | null;

		/** Whether this app supports creating new objects. */
		supportsCreate?: boolean | null;

		/** Whether this app supports importing from Docs Editors. */
		supportsImport?: boolean | null;

		/** Whether this app supports opening more than one file. */
		supportsMultiOpen?: boolean | null;

		/** Whether this app supports creating new files when offline. */
		supportsOfflineCreate?: boolean | null;

		/** Whether the app is selected as the default handler for the types it supports. */
		useByDefault?: boolean | null;
	}

	/** The apps resource provides a list of the apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details. Some resource methods (such as `apps.get`) require an `appId`. Use the `apps.list` method to retrieve the ID for an installed application. */
	export interface AppFormProperties {

		/** Whether the app is authorized to access data on the user's Drive. */
		authorized: FormControl<boolean | null | undefined>,

		/** The template url to create a new file with this app in a given folder. The template will contain {folderId} to be replaced by the folder to create the new file in. */
		createInFolderTemplate: FormControl<string | null | undefined>,

		/** The url to create a new file with this app. */
		createUrl: FormControl<string | null | undefined>,

		/** Whether the app has drive-wide scope. An app with drive-wide scope can access all files in the user's drive. */
		hasDriveWideScope: FormControl<boolean | null | undefined>,

		/** The ID of the app. */
		id: FormControl<string | null | undefined>,

		/** Whether the app is installed. */
		installed: FormControl<boolean | null | undefined>,

		/** This is always `drive#app`. */
		kind: FormControl<string | null | undefined>,

		/** A long description of the app. */
		longDescription: FormControl<string | null | undefined>,

		/** The name of the app. */
		name: FormControl<string | null | undefined>,

		/** The type of object this app creates (e.g. Chart). If empty, the app name should be used instead. */
		objectType: FormControl<string | null | undefined>,

		/** The template url for opening files with this app. The template will contain `{ids}` and/or `{exportIds}` to be replaced by the actual file ids. See Open Files for the full documentation. */
		openUrlTemplate: FormControl<string | null | undefined>,

		/** The ID of the product listing for this app. */
		productId: FormControl<string | null | undefined>,

		/** A link to the product listing for this app. */
		productUrl: FormControl<string | null | undefined>,

		/** A short description of the app. */
		shortDescription: FormControl<string | null | undefined>,

		/** Whether this app supports creating new objects. */
		supportsCreate: FormControl<boolean | null | undefined>,

		/** Whether this app supports importing from Docs Editors. */
		supportsImport: FormControl<boolean | null | undefined>,

		/** Whether this app supports opening more than one file. */
		supportsMultiOpen: FormControl<boolean | null | undefined>,

		/** Whether this app supports creating new files when offline. */
		supportsOfflineCreate: FormControl<boolean | null | undefined>,

		/** Whether the app is selected as the default handler for the types it supports. */
		useByDefault: FormControl<boolean | null | undefined>,
	}
	export function CreateAppFormGroup() {
		return new FormGroup<AppFormProperties>({
			authorized: new FormControl<boolean | null | undefined>(undefined),
			createInFolderTemplate: new FormControl<string | null | undefined>(undefined),
			createUrl: new FormControl<string | null | undefined>(undefined),
			hasDriveWideScope: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			installed: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			longDescription: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			openUrlTemplate: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			productUrl: new FormControl<string | null | undefined>(undefined),
			shortDescription: new FormControl<string | null | undefined>(undefined),
			supportsCreate: new FormControl<boolean | null | undefined>(undefined),
			supportsImport: new FormControl<boolean | null | undefined>(undefined),
			supportsMultiOpen: new FormControl<boolean | null | undefined>(undefined),
			supportsOfflineCreate: new FormControl<boolean | null | undefined>(undefined),
			useByDefault: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AppIcons {

		/** Category of the icon. Allowed values are: * `application` - icon for the application * `document` - icon for a file associated with the app * `documentShared` - icon for a shared file associated with the app */
		category?: string | null;

		/** URL for the icon. */
		iconUrl?: string | null;

		/** Size of the icon. Represented as the maximum of the width and height. */
		size?: number | null;
	}
	export interface AppIconsFormProperties {

		/** Category of the icon. Allowed values are: * `application` - icon for the application * `document` - icon for a file associated with the app * `documentShared` - icon for a shared file associated with the app */
		category: FormControl<string | null | undefined>,

		/** URL for the icon. */
		iconUrl: FormControl<string | null | undefined>,

		/** Size of the icon. Represented as the maximum of the width and height. */
		size: FormControl<number | null | undefined>,
	}
	export function CreateAppIconsFormGroup() {
		return new FormGroup<AppIconsFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			iconUrl: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A list of third-party applications which the user has installed or given access to Google Drive. */
	export interface AppList {

		/** List of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest). */
		defaultAppIds?: Array<string>;

		/** The ETag of the list. */
		etag?: string | null;

		/** The list of apps. */
		items?: Array<App>;

		/** This is always `drive#appList`. */
		kind?: string | null;

		/** A link back to this list. */
		selfLink?: string | null;
	}

	/** A list of third-party applications which the user has installed or given access to Google Drive. */
	export interface AppListFormProperties {

		/** The ETag of the list. */
		etag: FormControl<string | null | undefined>,

		/** This is always `drive#appList`. */
		kind: FormControl<string | null | undefined>,

		/** A link back to this list. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateAppListFormGroup() {
		return new FormGroup<AppListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representation of a change to a file or shared drive. */
	export interface Change {

		/** The type of the change. Possible values are `file` and `drive`. */
		changeType?: string | null;

		/** Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access. */
		deleted?: boolean | null;

		/** Representation of a shared drive. Some resource methods (such as `drives.update`) require a `driveId`. Use the `drives.list` method to retrieve the ID for a shared drive. */
		drive?: Drive;

		/** The ID of the shared drive associated with this change. */
		driveId?: string | null;

		/** The metadata for a file. Some resource methods (such as `files.update`) require a `fileId`. Use the `files.list` method to retrieve the ID for a file. */
		file?: File;

		/** The ID of the file associated with this change. */
		fileId?: string | null;

		/** The ID of the change. */
		id?: string | null;

		/** This is always `drive#change`. */
		kind?: string | null;

		/** The time of this modification. */
		modificationDate?: Date | null;

		/** A link back to this change. */
		selfLink?: string | null;

		/** Deprecated: Use the `drive` collection instead. */
		teamDrive?: TeamDrive;

		/** Deprecated: Use `driveId` instead. */
		teamDriveId?: string | null;

		/** Deprecated: Use `changeType` instead. */
		type?: string | null;
	}

	/** Representation of a change to a file or shared drive. */
	export interface ChangeFormProperties {

		/** The type of the change. Possible values are `file` and `drive`. */
		changeType: FormControl<string | null | undefined>,

		/** Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access. */
		deleted: FormControl<boolean | null | undefined>,

		/** The ID of the shared drive associated with this change. */
		driveId: FormControl<string | null | undefined>,

		/** The ID of the file associated with this change. */
		fileId: FormControl<string | null | undefined>,

		/** The ID of the change. */
		id: FormControl<string | null | undefined>,

		/** This is always `drive#change`. */
		kind: FormControl<string | null | undefined>,

		/** The time of this modification. */
		modificationDate: FormControl<Date | null | undefined>,

		/** A link back to this change. */
		selfLink: FormControl<string | null | undefined>,

		/** Deprecated: Use `driveId` instead. */
		teamDriveId: FormControl<string | null | undefined>,

		/** Deprecated: Use `changeType` instead. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateChangeFormGroup() {
		return new FormGroup<ChangeFormProperties>({
			changeType: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			driveId: new FormControl<string | null | undefined>(undefined),
			fileId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			modificationDate: new FormControl<Date | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			teamDriveId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representation of a shared drive. Some resource methods (such as `drives.update`) require a `driveId`. Use the `drives.list` method to retrieve the ID for a shared drive. */
	export interface Drive {

		/** An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on `drive.drives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set. */
		backgroundImageFile?: DriveBackgroundImageFile;

		/** Output only. A short-lived link to this shared drive's background image. */
		backgroundImageLink?: string | null;

		/** Output only. Capabilities the current user has on this shared drive. */
		capabilities?: DriveCapabilities;

		/** The color of this shared drive as an RGB hex string. It can only be set on a `drive.drives.update` request that does not set `themeId`. */
		colorRgb?: string | null;

		/** The time at which the shared drive was created (RFC 3339 date-time). */
		createdDate?: Date | null;

		/** Whether the shared drive is hidden from default view. */
		hidden?: boolean | null;

		/** Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive. */
		id?: string | null;

		/** Output only. This is always `drive#drive` */
		kind?: string | null;

		/** The name of this shared drive. */
		name?: string | null;

		/** Output only. The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`. */
		orgUnitId?: string | null;

		/** A set of restrictions that apply to this shared drive or items inside this shared drive. */
		restrictions?: DriveRestrictions;

		/** The ID of the theme from which the background image and color will be set. The set of possible `driveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.drives.insert` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`. */
		themeId?: string | null;
	}

	/** Representation of a shared drive. Some resource methods (such as `drives.update`) require a `driveId`. Use the `drives.list` method to retrieve the ID for a shared drive. */
	export interface DriveFormProperties {

		/** Output only. A short-lived link to this shared drive's background image. */
		backgroundImageLink: FormControl<string | null | undefined>,

		/** The color of this shared drive as an RGB hex string. It can only be set on a `drive.drives.update` request that does not set `themeId`. */
		colorRgb: FormControl<string | null | undefined>,

		/** The time at which the shared drive was created (RFC 3339 date-time). */
		createdDate: FormControl<Date | null | undefined>,

		/** Whether the shared drive is hidden from default view. */
		hidden: FormControl<boolean | null | undefined>,

		/** Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive. */
		id: FormControl<string | null | undefined>,

		/** Output only. This is always `drive#drive` */
		kind: FormControl<string | null | undefined>,

		/** The name of this shared drive. */
		name: FormControl<string | null | undefined>,

		/** Output only. The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`. */
		orgUnitId: FormControl<string | null | undefined>,

		/** The ID of the theme from which the background image and color will be set. The set of possible `driveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.drives.insert` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`. */
		themeId: FormControl<string | null | undefined>,
	}
	export function CreateDriveFormGroup() {
		return new FormGroup<DriveFormProperties>({
			backgroundImageLink: new FormControl<string | null | undefined>(undefined),
			colorRgb: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orgUnitId: new FormControl<string | null | undefined>(undefined),
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

		/** Output only. Whether the current user can add children to folders in this shared drive. */
		canAddChildren?: boolean | null;

		/** Output only. Whether the current user can change the `copyRequiresWriterPermission` restriction of this shared drive. */
		canChangeCopyRequiresWriterPermissionRestriction?: boolean | null;

		/** Output only. Whether the current user can change the `domainUsersOnly` restriction of this shared drive. */
		canChangeDomainUsersOnlyRestriction?: boolean | null;

		/** Output only. Whether the current user can change the background of this shared drive. */
		canChangeDriveBackground?: boolean | null;

		/** Output only. Whether the current user can change the `driveMembersOnly` restriction of this shared drive. */
		canChangeDriveMembersOnlyRestriction?: boolean | null;

		/** Output only. Whether the current user can change the `sharingFoldersRequiresOrganizerPermission` restriction of this shared drive. */
		canChangeSharingFoldersRequiresOrganizerPermissionRestriction?: boolean | null;

		/** Output only. Whether the current user can comment on files in this shared drive. */
		canComment?: boolean | null;

		/** Output only. Whether the current user can copy files in this shared drive. */
		canCopy?: boolean | null;

		/** Output only. Whether the current user can delete children from folders in this shared drive. */
		canDeleteChildren?: boolean | null;

		/** Output only. Whether the current user can delete this shared drive. Attempting to delete the shared drive may still fail if there are untrashed items inside the shared drive. */
		canDeleteDrive?: boolean | null;

		/** Output only. Whether the current user can download files in this shared drive. */
		canDownload?: boolean | null;

		/** Output only. Whether the current user can edit files in this shared drive */
		canEdit?: boolean | null;

		/** Output only. Whether the current user can list the children of folders in this shared drive. */
		canListChildren?: boolean | null;

		/** Output only. Whether the current user can add members to this shared drive or remove them or change their role. */
		canManageMembers?: boolean | null;

		/** Output only. Whether the current user can read the revisions resource of files in this shared drive. */
		canReadRevisions?: boolean | null;

		/** Output only. Whether the current user can rename files or folders in this shared drive. */
		canRename?: boolean | null;

		/** Output only. Whether the current user can rename this shared drive. */
		canRenameDrive?: boolean | null;

		/** Output only. Whether the current user can reset the shared drive restrictions to defaults. */
		canResetDriveRestrictions?: boolean | null;

		/** Output only. Whether the current user can share files or folders in this shared drive. */
		canShare?: boolean | null;

		/** Output only. Whether the current user can trash children from folders in this shared drive. */
		canTrashChildren?: boolean | null;
	}
	export interface DriveCapabilitiesFormProperties {

		/** Output only. Whether the current user can add children to folders in this shared drive. */
		canAddChildren: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can change the `copyRequiresWriterPermission` restriction of this shared drive. */
		canChangeCopyRequiresWriterPermissionRestriction: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can change the `domainUsersOnly` restriction of this shared drive. */
		canChangeDomainUsersOnlyRestriction: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can change the background of this shared drive. */
		canChangeDriveBackground: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can change the `driveMembersOnly` restriction of this shared drive. */
		canChangeDriveMembersOnlyRestriction: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can change the `sharingFoldersRequiresOrganizerPermission` restriction of this shared drive. */
		canChangeSharingFoldersRequiresOrganizerPermissionRestriction: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can comment on files in this shared drive. */
		canComment: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can copy files in this shared drive. */
		canCopy: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can delete children from folders in this shared drive. */
		canDeleteChildren: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can delete this shared drive. Attempting to delete the shared drive may still fail if there are untrashed items inside the shared drive. */
		canDeleteDrive: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can download files in this shared drive. */
		canDownload: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can edit files in this shared drive */
		canEdit: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can list the children of folders in this shared drive. */
		canListChildren: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can add members to this shared drive or remove them or change their role. */
		canManageMembers: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can read the revisions resource of files in this shared drive. */
		canReadRevisions: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can rename files or folders in this shared drive. */
		canRename: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can rename this shared drive. */
		canRenameDrive: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can reset the shared drive restrictions to defaults. */
		canResetDriveRestrictions: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can share files or folders in this shared drive. */
		canShare: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can trash children from folders in this shared drive. */
		canTrashChildren: FormControl<boolean | null | undefined>,
	}
	export function CreateDriveCapabilitiesFormGroup() {
		return new FormGroup<DriveCapabilitiesFormProperties>({
			canAddChildren: new FormControl<boolean | null | undefined>(undefined),
			canChangeCopyRequiresWriterPermissionRestriction: new FormControl<boolean | null | undefined>(undefined),
			canChangeDomainUsersOnlyRestriction: new FormControl<boolean | null | undefined>(undefined),
			canChangeDriveBackground: new FormControl<boolean | null | undefined>(undefined),
			canChangeDriveMembersOnlyRestriction: new FormControl<boolean | null | undefined>(undefined),
			canChangeSharingFoldersRequiresOrganizerPermissionRestriction: new FormControl<boolean | null | undefined>(undefined),
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
			canResetDriveRestrictions: new FormControl<boolean | null | undefined>(undefined),
			canShare: new FormControl<boolean | null | undefined>(undefined),
			canTrashChildren: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DriveRestrictions {

		/** Whether administrative privileges on this shared drive are required to modify restrictions. */
		adminManagedRestrictions?: boolean | null;

		/** Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When this restriction is set to `true`, it will override the similarly named field to `true` for any file inside this shared drive. */
		copyRequiresWriterPermission?: boolean | null;

		/** Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of this shared drive. */
		domainUsersOnly?: boolean | null;

		/** Whether access to items inside this shared drive is restricted to its members. */
		driveMembersOnly?: boolean | null;

		/** If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders. */
		sharingFoldersRequiresOrganizerPermission?: boolean | null;
	}
	export interface DriveRestrictionsFormProperties {

		/** Whether administrative privileges on this shared drive are required to modify restrictions. */
		adminManagedRestrictions: FormControl<boolean | null | undefined>,

		/** Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When this restriction is set to `true`, it will override the similarly named field to `true` for any file inside this shared drive. */
		copyRequiresWriterPermission: FormControl<boolean | null | undefined>,

		/** Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of this shared drive. */
		domainUsersOnly: FormControl<boolean | null | undefined>,

		/** Whether access to items inside this shared drive is restricted to its members. */
		driveMembersOnly: FormControl<boolean | null | undefined>,

		/** If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders. */
		sharingFoldersRequiresOrganizerPermission: FormControl<boolean | null | undefined>,
	}
	export function CreateDriveRestrictionsFormGroup() {
		return new FormGroup<DriveRestrictionsFormProperties>({
			adminManagedRestrictions: new FormControl<boolean | null | undefined>(undefined),
			copyRequiresWriterPermission: new FormControl<boolean | null | undefined>(undefined),
			domainUsersOnly: new FormControl<boolean | null | undefined>(undefined),
			driveMembersOnly: new FormControl<boolean | null | undefined>(undefined),
			sharingFoldersRequiresOrganizerPermission: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The metadata for a file. Some resource methods (such as `files.update`) require a `fileId`. Use the `files.list` method to retrieve the ID for a file. */
	export interface File {

		/** Output only. A link for opening the file in a relevant Google editor or viewer. */
		alternateLink?: string | null;

		/** Output only. Whether this file is in the Application Data folder. */
		appDataContents?: boolean | null;

		/** Output only. Deprecated: Use `capabilities/canComment` instead. */
		canComment?: boolean | null;

		/** Output only. Deprecated: Use `capabilities/canReadRevisions` instead. */
		canReadRevisions?: boolean | null;

		/** Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take. */
		capabilities?: FileCapabilities;

		/** Restrictions for accessing the content of the file. Only populated if such a restriction exists. */
		contentRestrictions?: Array<ContentRestriction>;

		/** Whether the options to copy, print, or download this file, should be disabled for readers and commenters. */
		copyRequiresWriterPermission?: boolean | null;

		/** Output only. Deprecated: Use `capabilities/canCopy` instead. */
		copyable?: boolean | null;

		/** Create time for this file (formatted RFC 3339 timestamp). */
		createdDate?: Date | null;

		/** Output only. A link to open this file with the user's default app for this file. Only populated when the drive.apps.readonly scope is used. */
		defaultOpenWithLink?: string | null;

		/** A short description of the file. */
		description?: string | null;

		/** Output only. Short lived download URL for the file. This field is only populated for files with content stored in Google Drive; it is not populated for Google Docs or shortcut files. */
		downloadUrl?: string | null;

		/** Output only. ID of the shared drive the file resides in. Only populated for items in shared drives. */
		driveId?: string | null;

		/** Output only. Deprecated: Use `capabilities/canEdit` instead. */
		editable?: boolean | null;

		/** Output only. A link for embedding the file. */
		embedLink?: string | null;

		/** Output only. ETag of the file. */
		etag?: string | null;

		/** Output only. Whether this file has been explicitly trashed, as opposed to recursively trashed. */
		explicitlyTrashed?: boolean | null;

		/** Output only. Links for exporting Docs Editors files to specific formats. */
		exportLinks?: {[id: string]: string };

		/** Output only. The final component of `fullFileExtension` with trailing text that does not appear to be part of the extension removed. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
		fileExtension?: string | null;

		/** Output only. Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders. */
		fileSize?: string | null;

		/** Folder color as an RGB hex string if the file is a folder or a shortcut to a folder. The list of supported colors is available in the folderColorPalette field of the About resource. If an unsupported color is specified, it will be changed to the closest color in the palette. */
		folderColorRgb?: string | null;

		/** Output only. The full file extension; extracted from the title. May contain multiple concatenated extensions, such as "tar.gz". Removing an extension from the title does not clear this field; however, changing the extension on the title does update this field. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
		fullFileExtension?: string | null;

		/** Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives. */
		hasAugmentedPermissions?: boolean | null;

		/** Output only. Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field. */
		hasThumbnail?: boolean | null;

		/** Output only. The ID of the file's head revision. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
		headRevisionId?: string | null;

		/** Output only. A link to the file's icon. */
		iconLink?: string | null;

		/** The ID of the file. */
		id?: string | null;

		/** Output only. Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content. */
		imageMediaMetadata?: FileImageMediaMetadata;

		/** Indexable text attributes for the file (can only be written) */
		indexableText?: FileIndexableText;

		/** Output only. Whether the file was created or opened by the requesting app. */
		isAppAuthorized?: boolean | null;

		/** Output only. The type of file. This is always `drive#file`. */
		kind?: string | null;

		/** Output only. An overview of the labels on the file. */
		labelInfo?: FileLabelInfo;

		/** A group of labels for the file. */
		labels?: FileLabels;

		/** Information about a Drive user. */
		lastModifyingUser?: User;

		/** Output only. Name of the last user to modify this file. */
		lastModifyingUserName?: string | null;

		/** Last time this file was viewed by the user (formatted RFC 3339 timestamp). */
		lastViewedByMeDate?: Date | null;

		/** Contains details about the link URLs that clients are using to refer to this item. */
		linkShareMetadata?: FileLinkShareMetadata;

		/** Deprecated. */
		markedViewedByMeDate?: Date | null;

		/** Output only. An MD5 checksum for the content of this file. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
		md5Checksum?: string | null;

		/** The MIME type of the file. This is only mutable on update when uploading new content. This field can be left blank, and the mimetype will be determined from the uploaded content's MIME type. */
		mimeType?: string | null;

		/** Last time this file was modified by the user (formatted RFC 3339 timestamp). Note that setting modifiedDate will also update the modifiedByMe date for the user which set the date. */
		modifiedByMeDate?: Date | null;

		/** Last time this file was modified by anyone (formatted RFC 3339 timestamp). This is only mutable on update when the setModifiedDate parameter is set. */
		modifiedDate?: Date | null;

		/** Output only. A map of the id of each of the user's apps to a link to open this file with that app. Only populated when the drive.apps.readonly scope is used. */
		openWithLinks?: {[id: string]: string };

		/** The original filename of the uploaded content if available, or else the original value of the `title` field. This is only available for files with binary content in Google Drive. */
		originalFilename?: string | null;

		/** Output only. Whether the file is owned by the current user. Not populated for items in shared drives. */
		ownedByMe?: boolean | null;

		/** Output only. Name(s) of the owner(s) of this file. Not populated for items in shared drives. */
		ownerNames?: Array<string>;

		/** Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives. */
		owners?: Array<User>;

		/** Collection of parent folders which contain this file. If not specified as part of an insert request, the file will be placed directly in the user's My Drive folder. If not specified as part of a copy request, the file will inherit any discoverable parents of the source file. Update requests can also use the `addParents` and `removeParents` parameters to modify the parents list. */
		parents?: Array<ParentReference>;

		/** Output only. List of permission IDs for users with access to this file. */
		permissionIds?: Array<string>;

		/** Output only. The list of permissions for users with access to this file. Not populated for items in shared drives. */
		permissions?: Array<Permission>;

		/** The list of properties. */
		properties?: Array<Property>;

		/** Output only. The number of quota bytes used by this file. */
		quotaBytesUsed?: string | null;

		/** Output only. A key needed to access the item via a shared link. */
		resourceKey?: string | null;

		/** Output only. A link back to this file. */
		selfLink?: string | null;

		/** Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
		sha1Checksum?: string | null;

		/** Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
		sha256Checksum?: string | null;

		/** Output only. Deprecated: Use `capabilities/canShare` instead. */
		shareable?: boolean | null;

		/** Output only. Whether the file has been shared. Not populated for items in shared drives. */
		shared?: boolean | null;

		/** Time at which this file was shared with the user (formatted RFC 3339 timestamp). */
		sharedWithMeDate?: Date | null;

		/** Information about a Drive user. */
		sharingUser?: User;

		/** Shortcut file details. Only populated for shortcut files, which have the mimeType field set to `application/vnd.google-apps.shortcut`. */
		shortcutDetails?: FileShortcutDetails;

		/** Output only. The list of spaces which contain the file. Supported values are `drive`, `appDataFolder` and `photos`. */
		spaces?: Array<string>;

		/** Output only. Deprecated: Use `driveId` instead. */
		teamDriveId?: string | null;

		/** A thumbnail for the file. This will only be used if a standard thumbnail cannot be generated. */
		thumbnail?: FileThumbnail;

		/** Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `Files.thumbnailLink` must be fetched using a credentialed request. */
		thumbnailLink?: string | null;

		/** Output only. The thumbnail version for use in thumbnail cache invalidation. */
		thumbnailVersion?: string | null;

		/** The title of this file. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the title is constant. */
		title?: string | null;

		/** The time that the item was trashed (formatted RFC 3339 timestamp). Only populated for items in shared drives. */
		trashedDate?: Date | null;

		/** Information about a Drive user. */
		trashingUser?: User;

		/** A permission for a file. A permission grants a user, group, domain, or the world access to a file or a folder hierarchy. Some resource methods (such as `permissions.update`) require a `permissionId`. Use the `permissions.list` method to retrieve the ID for a file, folder, or shared drive. */
		userPermission?: Permission;

		/** Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the requesting user. */
		version?: string | null;

		/** Output only. Metadata about video media. This will only be present for video types. */
		videoMediaMetadata?: FileVideoMediaMetadata;

		/** Output only. A link for downloading the content of the file in a browser using cookie based authentication. In cases where the content is shared publicly, the content can be downloaded without any credentials. */
		webContentLink?: string | null;

		/** Output only. A link only available on public folders for viewing their static web assets (HTML, CSS, JS, etc) via Google Drive's Website Hosting. */
		webViewLink?: string | null;

		/** Whether writers can share the document with other users. Not populated for items in shared drives. */
		writersCanShare?: boolean | null;
	}

	/** The metadata for a file. Some resource methods (such as `files.update`) require a `fileId`. Use the `files.list` method to retrieve the ID for a file. */
	export interface FileFormProperties {

		/** Output only. A link for opening the file in a relevant Google editor or viewer. */
		alternateLink: FormControl<string | null | undefined>,

		/** Output only. Whether this file is in the Application Data folder. */
		appDataContents: FormControl<boolean | null | undefined>,

		/** Output only. Deprecated: Use `capabilities/canComment` instead. */
		canComment: FormControl<boolean | null | undefined>,

		/** Output only. Deprecated: Use `capabilities/canReadRevisions` instead. */
		canReadRevisions: FormControl<boolean | null | undefined>,

		/** Whether the options to copy, print, or download this file, should be disabled for readers and commenters. */
		copyRequiresWriterPermission: FormControl<boolean | null | undefined>,

		/** Output only. Deprecated: Use `capabilities/canCopy` instead. */
		copyable: FormControl<boolean | null | undefined>,

		/** Create time for this file (formatted RFC 3339 timestamp). */
		createdDate: FormControl<Date | null | undefined>,

		/** Output only. A link to open this file with the user's default app for this file. Only populated when the drive.apps.readonly scope is used. */
		defaultOpenWithLink: FormControl<string | null | undefined>,

		/** A short description of the file. */
		description: FormControl<string | null | undefined>,

		/** Output only. Short lived download URL for the file. This field is only populated for files with content stored in Google Drive; it is not populated for Google Docs or shortcut files. */
		downloadUrl: FormControl<string | null | undefined>,

		/** Output only. ID of the shared drive the file resides in. Only populated for items in shared drives. */
		driveId: FormControl<string | null | undefined>,

		/** Output only. Deprecated: Use `capabilities/canEdit` instead. */
		editable: FormControl<boolean | null | undefined>,

		/** Output only. A link for embedding the file. */
		embedLink: FormControl<string | null | undefined>,

		/** Output only. ETag of the file. */
		etag: FormControl<string | null | undefined>,

		/** Output only. Whether this file has been explicitly trashed, as opposed to recursively trashed. */
		explicitlyTrashed: FormControl<boolean | null | undefined>,

		/** Output only. Links for exporting Docs Editors files to specific formats. */
		exportLinks: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The final component of `fullFileExtension` with trailing text that does not appear to be part of the extension removed. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
		fileExtension: FormControl<string | null | undefined>,

		/** Output only. Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders. */
		fileSize: FormControl<string | null | undefined>,

		/** Folder color as an RGB hex string if the file is a folder or a shortcut to a folder. The list of supported colors is available in the folderColorPalette field of the About resource. If an unsupported color is specified, it will be changed to the closest color in the palette. */
		folderColorRgb: FormControl<string | null | undefined>,

		/** Output only. The full file extension; extracted from the title. May contain multiple concatenated extensions, such as "tar.gz". Removing an extension from the title does not clear this field; however, changing the extension on the title does update this field. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
		fullFileExtension: FormControl<string | null | undefined>,

		/** Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives. */
		hasAugmentedPermissions: FormControl<boolean | null | undefined>,

		/** Output only. Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field. */
		hasThumbnail: FormControl<boolean | null | undefined>,

		/** Output only. The ID of the file's head revision. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
		headRevisionId: FormControl<string | null | undefined>,

		/** Output only. A link to the file's icon. */
		iconLink: FormControl<string | null | undefined>,

		/** The ID of the file. */
		id: FormControl<string | null | undefined>,

		/** Output only. Whether the file was created or opened by the requesting app. */
		isAppAuthorized: FormControl<boolean | null | undefined>,

		/** Output only. The type of file. This is always `drive#file`. */
		kind: FormControl<string | null | undefined>,

		/** Output only. Name of the last user to modify this file. */
		lastModifyingUserName: FormControl<string | null | undefined>,

		/** Last time this file was viewed by the user (formatted RFC 3339 timestamp). */
		lastViewedByMeDate: FormControl<Date | null | undefined>,

		/** Deprecated. */
		markedViewedByMeDate: FormControl<Date | null | undefined>,

		/** Output only. An MD5 checksum for the content of this file. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
		md5Checksum: FormControl<string | null | undefined>,

		/** The MIME type of the file. This is only mutable on update when uploading new content. This field can be left blank, and the mimetype will be determined from the uploaded content's MIME type. */
		mimeType: FormControl<string | null | undefined>,

		/** Last time this file was modified by the user (formatted RFC 3339 timestamp). Note that setting modifiedDate will also update the modifiedByMe date for the user which set the date. */
		modifiedByMeDate: FormControl<Date | null | undefined>,

		/** Last time this file was modified by anyone (formatted RFC 3339 timestamp). This is only mutable on update when the setModifiedDate parameter is set. */
		modifiedDate: FormControl<Date | null | undefined>,

		/** Output only. A map of the id of each of the user's apps to a link to open this file with that app. Only populated when the drive.apps.readonly scope is used. */
		openWithLinks: FormControl<{[id: string]: string } | null | undefined>,

		/** The original filename of the uploaded content if available, or else the original value of the `title` field. This is only available for files with binary content in Google Drive. */
		originalFilename: FormControl<string | null | undefined>,

		/** Output only. Whether the file is owned by the current user. Not populated for items in shared drives. */
		ownedByMe: FormControl<boolean | null | undefined>,

		/** Output only. The number of quota bytes used by this file. */
		quotaBytesUsed: FormControl<string | null | undefined>,

		/** Output only. A key needed to access the item via a shared link. */
		resourceKey: FormControl<string | null | undefined>,

		/** Output only. A link back to this file. */
		selfLink: FormControl<string | null | undefined>,

		/** Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
		sha1Checksum: FormControl<string | null | undefined>,

		/** Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files. */
		sha256Checksum: FormControl<string | null | undefined>,

		/** Output only. Deprecated: Use `capabilities/canShare` instead. */
		shareable: FormControl<boolean | null | undefined>,

		/** Output only. Whether the file has been shared. Not populated for items in shared drives. */
		shared: FormControl<boolean | null | undefined>,

		/** Time at which this file was shared with the user (formatted RFC 3339 timestamp). */
		sharedWithMeDate: FormControl<Date | null | undefined>,

		/** Output only. Deprecated: Use `driveId` instead. */
		teamDriveId: FormControl<string | null | undefined>,

		/** Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in `Files.thumbnailLink` must be fetched using a credentialed request. */
		thumbnailLink: FormControl<string | null | undefined>,

		/** Output only. The thumbnail version for use in thumbnail cache invalidation. */
		thumbnailVersion: FormControl<string | null | undefined>,

		/** The title of this file. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the title is constant. */
		title: FormControl<string | null | undefined>,

		/** The time that the item was trashed (formatted RFC 3339 timestamp). Only populated for items in shared drives. */
		trashedDate: FormControl<Date | null | undefined>,

		/** Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the requesting user. */
		version: FormControl<string | null | undefined>,

		/** Output only. A link for downloading the content of the file in a browser using cookie based authentication. In cases where the content is shared publicly, the content can be downloaded without any credentials. */
		webContentLink: FormControl<string | null | undefined>,

		/** Output only. A link only available on public folders for viewing their static web assets (HTML, CSS, JS, etc) via Google Drive's Website Hosting. */
		webViewLink: FormControl<string | null | undefined>,

		/** Whether writers can share the document with other users. Not populated for items in shared drives. */
		writersCanShare: FormControl<boolean | null | undefined>,
	}
	export function CreateFileFormGroup() {
		return new FormGroup<FileFormProperties>({
			alternateLink: new FormControl<string | null | undefined>(undefined),
			appDataContents: new FormControl<boolean | null | undefined>(undefined),
			canComment: new FormControl<boolean | null | undefined>(undefined),
			canReadRevisions: new FormControl<boolean | null | undefined>(undefined),
			copyRequiresWriterPermission: new FormControl<boolean | null | undefined>(undefined),
			copyable: new FormControl<boolean | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			defaultOpenWithLink: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			downloadUrl: new FormControl<string | null | undefined>(undefined),
			driveId: new FormControl<string | null | undefined>(undefined),
			editable: new FormControl<boolean | null | undefined>(undefined),
			embedLink: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			explicitlyTrashed: new FormControl<boolean | null | undefined>(undefined),
			exportLinks: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			fileExtension: new FormControl<string | null | undefined>(undefined),
			fileSize: new FormControl<string | null | undefined>(undefined),
			folderColorRgb: new FormControl<string | null | undefined>(undefined),
			fullFileExtension: new FormControl<string | null | undefined>(undefined),
			hasAugmentedPermissions: new FormControl<boolean | null | undefined>(undefined),
			hasThumbnail: new FormControl<boolean | null | undefined>(undefined),
			headRevisionId: new FormControl<string | null | undefined>(undefined),
			iconLink: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isAppAuthorized: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lastModifyingUserName: new FormControl<string | null | undefined>(undefined),
			lastViewedByMeDate: new FormControl<Date | null | undefined>(undefined),
			markedViewedByMeDate: new FormControl<Date | null | undefined>(undefined),
			md5Checksum: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			modifiedByMeDate: new FormControl<Date | null | undefined>(undefined),
			modifiedDate: new FormControl<Date | null | undefined>(undefined),
			openWithLinks: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			originalFilename: new FormControl<string | null | undefined>(undefined),
			ownedByMe: new FormControl<boolean | null | undefined>(undefined),
			quotaBytesUsed: new FormControl<string | null | undefined>(undefined),
			resourceKey: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			sha1Checksum: new FormControl<string | null | undefined>(undefined),
			sha256Checksum: new FormControl<string | null | undefined>(undefined),
			shareable: new FormControl<boolean | null | undefined>(undefined),
			shared: new FormControl<boolean | null | undefined>(undefined),
			sharedWithMeDate: new FormControl<Date | null | undefined>(undefined),
			teamDriveId: new FormControl<string | null | undefined>(undefined),
			thumbnailLink: new FormControl<string | null | undefined>(undefined),
			thumbnailVersion: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			trashedDate: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			webContentLink: new FormControl<string | null | undefined>(undefined),
			webViewLink: new FormControl<string | null | undefined>(undefined),
			writersCanShare: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface FileCapabilities {

		/** Output only. Whether the current user is the pending owner of the file. Not populated for shared drive files. */
		canAcceptOwnership?: boolean | null;

		/** Output only. Whether the current user can add children to this folder. This is always false when the item is not a folder. */
		canAddChildren?: boolean | null;

		/** Output only. Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is false when the item is not a folder. Only populated for items in shared drives. */
		canAddFolderFromAnotherDrive?: boolean | null;

		/** Output only. Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files. */
		canAddMyDriveParent?: boolean | null;

		/** Output only. Whether the current user can change the `copyRequiresWriterPermission` restriction of this file. */
		canChangeCopyRequiresWriterPermission?: boolean | null;

		/** Output only. Deprecated. */
		canChangeRestrictedDownload?: boolean | null;

		/** Output only. Whether the current user can change the securityUpdateEnabled field on link share metadata. */
		canChangeSecurityUpdateEnabled?: boolean | null;

		/** Output only. Whether the current user can comment on this file. */
		canComment?: boolean | null;

		/** Output only. Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder. */
		canCopy?: boolean | null;

		/** Output only. Whether the current user can delete this file. */
		canDelete?: boolean | null;

		/** Output only. Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives. */
		canDeleteChildren?: boolean | null;

		/** Output only. Whether the current user can download this file. */
		canDownload?: boolean | null;

		/** Output only. Whether the current user can edit this file. Other factors may limit the type of changes a user can make to a file. For example, see `canChangeCopyRequiresWriterPermission` or `canModifyContent`. */
		canEdit?: boolean | null;

		/** Output only. Whether the current user can list the children of this folder. This is always false when the item is not a folder. */
		canListChildren?: boolean | null;

		/** Output only. Whether the current user can modify the content of this file. */
		canModifyContent?: boolean | null;

		/** Deprecated: Output only. Use one of `canModifyEditorContentRestriction`, `canModifyOwnerContentRestriction` or `canRemoveContentRestriction`. */
		canModifyContentRestriction?: boolean | null;

		/** Output only. Whether the current user can add or modify content restrictions on the file which are editor restricted. */
		canModifyEditorContentRestriction?: boolean | null;

		/** Output only. Whether the current user can modify the labels on the file. */
		canModifyLabels?: boolean | null;

		/** Output only. Whether the current user can add or modify content restrictions which are owner restricted. */
		canModifyOwnerContentRestriction?: boolean | null;

		/** Output only. Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives. */
		canMoveChildrenOutOfDrive?: boolean | null;

		/** Output only. Deprecated: Use `canMoveChildrenOutOfDrive` instead. */
		canMoveChildrenOutOfTeamDrive?: boolean | null;

		/** Output only. Whether the current user can move children of this folder within this drive. This is false when the item is not a folder. Note that a request to move the child may still fail depending on the current user's access to the child and to the destination folder. */
		canMoveChildrenWithinDrive?: boolean | null;

		/** Output only. Deprecated: Use `canMoveChildrenWithinDrive` instead. */
		canMoveChildrenWithinTeamDrive?: boolean | null;

		/** Output only. Deprecated: Use `canMoveItemOutOfDrive` instead. */
		canMoveItemIntoTeamDrive?: boolean | null;

		/** Output only. Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added. */
		canMoveItemOutOfDrive?: boolean | null;

		/** Output only. Deprecated: Use `canMoveItemOutOfDrive` instead. */
		canMoveItemOutOfTeamDrive?: boolean | null;

		/** Output only. Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added and the parent that is being removed. */
		canMoveItemWithinDrive?: boolean | null;

		/** Output only. Deprecated: Use `canMoveItemWithinDrive` instead. */
		canMoveItemWithinTeamDrive?: boolean | null;

		/** Output only. Deprecated: Use `canMoveItemWithinDrive` or `canMoveItemOutOfDrive` instead. */
		canMoveTeamDriveItem?: boolean | null;

		/** Output only. Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives. */
		canReadDrive?: boolean | null;

		/** Output only. Whether the current user can read the labels on the file. */
		canReadLabels?: boolean | null;

		/** Output only. Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read. */
		canReadRevisions?: boolean | null;

		/** Output only. Deprecated: Use `canReadDrive` instead. */
		canReadTeamDrive?: boolean | null;

		/** Output only. Whether the current user can remove children from this folder. This is always false when the item is not a folder. For a folder in a shared drive, use `canDeleteChildren` or `canTrashChildren` instead. */
		canRemoveChildren?: boolean | null;

		/** Output only. Whether there is a content restriction on the file that can be removed by the current user. */
		canRemoveContentRestriction?: boolean | null;

		/** Output only. Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files. */
		canRemoveMyDriveParent?: boolean | null;

		/** Output only. Whether the current user can rename this file. */
		canRename?: boolean | null;

		/** Output only. Whether the current user can modify the sharing settings for this file. */
		canShare?: boolean | null;

		/** Output only. Whether the current user can move this file to trash. */
		canTrash?: boolean | null;

		/** Output only. Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives. */
		canTrashChildren?: boolean | null;

		/** Output only. Whether the current user can restore this file from trash. */
		canUntrash?: boolean | null;
	}
	export interface FileCapabilitiesFormProperties {

		/** Output only. Whether the current user is the pending owner of the file. Not populated for shared drive files. */
		canAcceptOwnership: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can add children to this folder. This is always false when the item is not a folder. */
		canAddChildren: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is false when the item is not a folder. Only populated for items in shared drives. */
		canAddFolderFromAnotherDrive: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files. */
		canAddMyDriveParent: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can change the `copyRequiresWriterPermission` restriction of this file. */
		canChangeCopyRequiresWriterPermission: FormControl<boolean | null | undefined>,

		/** Output only. Deprecated. */
		canChangeRestrictedDownload: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can change the securityUpdateEnabled field on link share metadata. */
		canChangeSecurityUpdateEnabled: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can comment on this file. */
		canComment: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder. */
		canCopy: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can delete this file. */
		canDelete: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives. */
		canDeleteChildren: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can download this file. */
		canDownload: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can edit this file. Other factors may limit the type of changes a user can make to a file. For example, see `canChangeCopyRequiresWriterPermission` or `canModifyContent`. */
		canEdit: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can list the children of this folder. This is always false when the item is not a folder. */
		canListChildren: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can modify the content of this file. */
		canModifyContent: FormControl<boolean | null | undefined>,

		/** Deprecated: Output only. Use one of `canModifyEditorContentRestriction`, `canModifyOwnerContentRestriction` or `canRemoveContentRestriction`. */
		canModifyContentRestriction: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can add or modify content restrictions on the file which are editor restricted. */
		canModifyEditorContentRestriction: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can modify the labels on the file. */
		canModifyLabels: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can add or modify content restrictions which are owner restricted. */
		canModifyOwnerContentRestriction: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives. */
		canMoveChildrenOutOfDrive: FormControl<boolean | null | undefined>,

		/** Output only. Deprecated: Use `canMoveChildrenOutOfDrive` instead. */
		canMoveChildrenOutOfTeamDrive: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can move children of this folder within this drive. This is false when the item is not a folder. Note that a request to move the child may still fail depending on the current user's access to the child and to the destination folder. */
		canMoveChildrenWithinDrive: FormControl<boolean | null | undefined>,

		/** Output only. Deprecated: Use `canMoveChildrenWithinDrive` instead. */
		canMoveChildrenWithinTeamDrive: FormControl<boolean | null | undefined>,

		/** Output only. Deprecated: Use `canMoveItemOutOfDrive` instead. */
		canMoveItemIntoTeamDrive: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added. */
		canMoveItemOutOfDrive: FormControl<boolean | null | undefined>,

		/** Output only. Deprecated: Use `canMoveItemOutOfDrive` instead. */
		canMoveItemOutOfTeamDrive: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added and the parent that is being removed. */
		canMoveItemWithinDrive: FormControl<boolean | null | undefined>,

		/** Output only. Deprecated: Use `canMoveItemWithinDrive` instead. */
		canMoveItemWithinTeamDrive: FormControl<boolean | null | undefined>,

		/** Output only. Deprecated: Use `canMoveItemWithinDrive` or `canMoveItemOutOfDrive` instead. */
		canMoveTeamDriveItem: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives. */
		canReadDrive: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can read the labels on the file. */
		canReadLabels: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read. */
		canReadRevisions: FormControl<boolean | null | undefined>,

		/** Output only. Deprecated: Use `canReadDrive` instead. */
		canReadTeamDrive: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can remove children from this folder. This is always false when the item is not a folder. For a folder in a shared drive, use `canDeleteChildren` or `canTrashChildren` instead. */
		canRemoveChildren: FormControl<boolean | null | undefined>,

		/** Output only. Whether there is a content restriction on the file that can be removed by the current user. */
		canRemoveContentRestriction: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files. */
		canRemoveMyDriveParent: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can rename this file. */
		canRename: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can modify the sharing settings for this file. */
		canShare: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can move this file to trash. */
		canTrash: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives. */
		canTrashChildren: FormControl<boolean | null | undefined>,

		/** Output only. Whether the current user can restore this file from trash. */
		canUntrash: FormControl<boolean | null | undefined>,
	}
	export function CreateFileCapabilitiesFormGroup() {
		return new FormGroup<FileCapabilitiesFormProperties>({
			canAcceptOwnership: new FormControl<boolean | null | undefined>(undefined),
			canAddChildren: new FormControl<boolean | null | undefined>(undefined),
			canAddFolderFromAnotherDrive: new FormControl<boolean | null | undefined>(undefined),
			canAddMyDriveParent: new FormControl<boolean | null | undefined>(undefined),
			canChangeCopyRequiresWriterPermission: new FormControl<boolean | null | undefined>(undefined),
			canChangeRestrictedDownload: new FormControl<boolean | null | undefined>(undefined),
			canChangeSecurityUpdateEnabled: new FormControl<boolean | null | undefined>(undefined),
			canComment: new FormControl<boolean | null | undefined>(undefined),
			canCopy: new FormControl<boolean | null | undefined>(undefined),
			canDelete: new FormControl<boolean | null | undefined>(undefined),
			canDeleteChildren: new FormControl<boolean | null | undefined>(undefined),
			canDownload: new FormControl<boolean | null | undefined>(undefined),
			canEdit: new FormControl<boolean | null | undefined>(undefined),
			canListChildren: new FormControl<boolean | null | undefined>(undefined),
			canModifyContent: new FormControl<boolean | null | undefined>(undefined),
			canModifyContentRestriction: new FormControl<boolean | null | undefined>(undefined),
			canModifyEditorContentRestriction: new FormControl<boolean | null | undefined>(undefined),
			canModifyLabels: new FormControl<boolean | null | undefined>(undefined),
			canModifyOwnerContentRestriction: new FormControl<boolean | null | undefined>(undefined),
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
			canReadLabels: new FormControl<boolean | null | undefined>(undefined),
			canReadRevisions: new FormControl<boolean | null | undefined>(undefined),
			canReadTeamDrive: new FormControl<boolean | null | undefined>(undefined),
			canRemoveChildren: new FormControl<boolean | null | undefined>(undefined),
			canRemoveContentRestriction: new FormControl<boolean | null | undefined>(undefined),
			canRemoveMyDriveParent: new FormControl<boolean | null | undefined>(undefined),
			canRename: new FormControl<boolean | null | undefined>(undefined),
			canShare: new FormControl<boolean | null | undefined>(undefined),
			canTrash: new FormControl<boolean | null | undefined>(undefined),
			canTrashChildren: new FormControl<boolean | null | undefined>(undefined),
			canUntrash: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A restriction for accessing the content of the file. */
	export interface ContentRestriction {

		/** Whether the content restriction can only be modified or removed by a user who owns the file. For files in shared drives, any user with `organizer` capabilities can modify or remove this content restriction. */
		ownerRestricted?: boolean | null;

		/** Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified. */
		readOnly?: boolean | null;

		/** Reason for why the content of the file is restricted. This is only mutable on requests that also set `readOnly=true`. */
		reason?: string | null;

		/** Information about a Drive user. */
		restrictingUser?: User;

		/** The time at which the content restriction was set (formatted RFC 3339 timestamp). Only populated if readOnly is true. */
		restrictionDate?: Date | null;

		/** Output only. Whether the content restriction was applied by the system, for example due to an esignature. Users cannot modify or remove system restricted content restrictions. */
		systemRestricted?: boolean | null;

		/** Output only. The type of the content restriction. Currently the only possible value is `globalContentRestriction`. */
		type?: string | null;
	}

	/** A restriction for accessing the content of the file. */
	export interface ContentRestrictionFormProperties {

		/** Whether the content restriction can only be modified or removed by a user who owns the file. For files in shared drives, any user with `organizer` capabilities can modify or remove this content restriction. */
		ownerRestricted: FormControl<boolean | null | undefined>,

		/** Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified. */
		readOnly: FormControl<boolean | null | undefined>,

		/** Reason for why the content of the file is restricted. This is only mutable on requests that also set `readOnly=true`. */
		reason: FormControl<string | null | undefined>,

		/** The time at which the content restriction was set (formatted RFC 3339 timestamp). Only populated if readOnly is true. */
		restrictionDate: FormControl<Date | null | undefined>,

		/** Output only. Whether the content restriction was applied by the system, for example due to an esignature. Users cannot modify or remove system restricted content restrictions. */
		systemRestricted: FormControl<boolean | null | undefined>,

		/** Output only. The type of the content restriction. Currently the only possible value is `globalContentRestriction`. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateContentRestrictionFormGroup() {
		return new FormGroup<ContentRestrictionFormProperties>({
			ownerRestricted: new FormControl<boolean | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			restrictionDate: new FormControl<Date | null | undefined>(undefined),
			systemRestricted: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileImageMediaMetadata {

		/** Output only. The aperture used to create the photo (f-number). */
		aperture?: number | null;

		/** Output only. The make of the camera used to create the photo. */
		cameraMake?: string | null;

		/** Output only. The model of the camera used to create the photo. */
		cameraModel?: string | null;

		/** Output only. The color space of the photo. */
		colorSpace?: string | null;

		/** Output only. The date and time the photo was taken (EXIF format timestamp). */
		date?: string | null;

		/** Output only. The exposure bias of the photo (APEX value). */
		exposureBias?: number | null;

		/** Output only. The exposure mode used to create the photo. */
		exposureMode?: string | null;

		/** Output only. The length of the exposure, in seconds. */
		exposureTime?: number | null;

		/** Output only. Whether a flash was used to create the photo. */
		flashUsed?: boolean | null;

		/** Output only. The focal length used to create the photo, in millimeters. */
		focalLength?: number | null;

		/** Output only. The height of the image in pixels. */
		height?: number | null;

		/** Output only. The ISO speed used to create the photo. */
		isoSpeed?: number | null;

		/** Output only. The lens used to create the photo. */
		lens?: string | null;

		/** Output only. Geographic location information stored in the image. */
		location?: FileImageMediaMetadataLocation;

		/** Output only. The smallest f-number of the lens at the focal length used to create the photo (APEX value). */
		maxApertureValue?: number | null;

		/** Output only. The metering mode used to create the photo. */
		meteringMode?: string | null;

		/** Output only. The number of clockwise 90 degree rotations applied from the image's original orientation. */
		rotation?: number | null;

		/** Output only. The type of sensor used to create the photo. */
		sensor?: string | null;

		/** Output only. The distance to the subject of the photo, in meters. */
		subjectDistance?: number | null;

		/** Output only. The white balance mode used to create the photo. */
		whiteBalance?: string | null;

		/** Output only. The width of the image in pixels. */
		width?: number | null;
	}
	export interface FileImageMediaMetadataFormProperties {

		/** Output only. The aperture used to create the photo (f-number). */
		aperture: FormControl<number | null | undefined>,

		/** Output only. The make of the camera used to create the photo. */
		cameraMake: FormControl<string | null | undefined>,

		/** Output only. The model of the camera used to create the photo. */
		cameraModel: FormControl<string | null | undefined>,

		/** Output only. The color space of the photo. */
		colorSpace: FormControl<string | null | undefined>,

		/** Output only. The date and time the photo was taken (EXIF format timestamp). */
		date: FormControl<string | null | undefined>,

		/** Output only. The exposure bias of the photo (APEX value). */
		exposureBias: FormControl<number | null | undefined>,

		/** Output only. The exposure mode used to create the photo. */
		exposureMode: FormControl<string | null | undefined>,

		/** Output only. The length of the exposure, in seconds. */
		exposureTime: FormControl<number | null | undefined>,

		/** Output only. Whether a flash was used to create the photo. */
		flashUsed: FormControl<boolean | null | undefined>,

		/** Output only. The focal length used to create the photo, in millimeters. */
		focalLength: FormControl<number | null | undefined>,

		/** Output only. The height of the image in pixels. */
		height: FormControl<number | null | undefined>,

		/** Output only. The ISO speed used to create the photo. */
		isoSpeed: FormControl<number | null | undefined>,

		/** Output only. The lens used to create the photo. */
		lens: FormControl<string | null | undefined>,

		/** Output only. The smallest f-number of the lens at the focal length used to create the photo (APEX value). */
		maxApertureValue: FormControl<number | null | undefined>,

		/** Output only. The metering mode used to create the photo. */
		meteringMode: FormControl<string | null | undefined>,

		/** Output only. The number of clockwise 90 degree rotations applied from the image's original orientation. */
		rotation: FormControl<number | null | undefined>,

		/** Output only. The type of sensor used to create the photo. */
		sensor: FormControl<string | null | undefined>,

		/** Output only. The distance to the subject of the photo, in meters. */
		subjectDistance: FormControl<number | null | undefined>,

		/** Output only. The white balance mode used to create the photo. */
		whiteBalance: FormControl<string | null | undefined>,

		/** Output only. The width of the image in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateFileImageMediaMetadataFormGroup() {
		return new FormGroup<FileImageMediaMetadataFormProperties>({
			aperture: new FormControl<number | null | undefined>(undefined),
			cameraMake: new FormControl<string | null | undefined>(undefined),
			cameraModel: new FormControl<string | null | undefined>(undefined),
			colorSpace: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
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
			whiteBalance: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FileImageMediaMetadataLocation {

		/** Output only. The altitude stored in the image. */
		altitude?: number | null;

		/** Output only. The latitude stored in the image. */
		latitude?: number | null;

		/** Output only. The longitude stored in the image. */
		longitude?: number | null;
	}
	export interface FileImageMediaMetadataLocationFormProperties {

		/** Output only. The altitude stored in the image. */
		altitude: FormControl<number | null | undefined>,

		/** Output only. The latitude stored in the image. */
		latitude: FormControl<number | null | undefined>,

		/** Output only. The longitude stored in the image. */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateFileImageMediaMetadataLocationFormGroup() {
		return new FormGroup<FileImageMediaMetadataLocationFormProperties>({
			altitude: new FormControl<number | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FileIndexableText {

		/** The text to be indexed for this file. */
		text?: string | null;
	}
	export interface FileIndexableTextFormProperties {

		/** The text to be indexed for this file. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateFileIndexableTextFormGroup() {
		return new FormGroup<FileIndexableTextFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileLabelInfo {

		/** Output only. The set of labels on the file as requested by the label IDs in the `includeLabels` parameter. By default, no labels are returned. */
		labels?: Array<Label>;
	}
	export interface FileLabelInfoFormProperties {
	}
	export function CreateFileLabelInfoFormGroup() {
		return new FormGroup<FileLabelInfoFormProperties>({
		});

	}


	/** Representation of a label and label fields. */
	export interface Label {

		/** A map of the fields on the label, keyed by the field's ID. */
		fields?: {[id: string]: LabelField };

		/** The ID of the label. */
		id?: string | null;

		/** This is always `drive#label` */
		kind?: string | null;

		/** The revision ID of the label. */
		revisionId?: string | null;
	}

	/** Representation of a label and label fields. */
	export interface LabelFormProperties {

		/** A map of the fields on the label, keyed by the field's ID. */
		fields: FormControl<{[id: string]: LabelField } | null | undefined>,

		/** The ID of the label. */
		id: FormControl<string | null | undefined>,

		/** This is always `drive#label` */
		kind: FormControl<string | null | undefined>,

		/** The revision ID of the label. */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateLabelFormGroup() {
		return new FormGroup<LabelFormProperties>({
			fields: new FormControl<{[id: string]: LabelField } | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representation of field, which is a typed key-value pair. */
	export interface LabelField {

		/** Only present if valueType is dateString. RFC 3339 formatted date: YYYY-MM-DD. */
		dateString?: Array<string>;

		/** The identifier of this label field. */
		id?: string | null;

		/** Only present if `valueType` is `integer`. */
		integer?: Array<string>;

		/** This is always `drive#labelField`. */
		kind?: string | null;

		/** Only present if `valueType` is `selection` */
		selection?: Array<string>;

		/** Only present if `valueType` is `text`. */
		text?: Array<string>;

		/** Only present if `valueType` is `user`. */
		user?: Array<User>;

		/** The field type. While new values may be supported in the future, the following are currently allowed: * `dateString` * `integer` * `selection` * `text` * `user` */
		valueType?: string | null;
	}

	/** Representation of field, which is a typed key-value pair. */
	export interface LabelFieldFormProperties {

		/** The identifier of this label field. */
		id: FormControl<string | null | undefined>,

		/** This is always `drive#labelField`. */
		kind: FormControl<string | null | undefined>,

		/** The field type. While new values may be supported in the future, the following are currently allowed: * `dateString` * `integer` * `selection` * `text` * `user` */
		valueType: FormControl<string | null | undefined>,
	}
	export function CreateLabelFieldFormGroup() {
		return new FormGroup<LabelFieldFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			valueType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileLabels {

		/** Output only. Deprecated. */
		hidden?: boolean | null;

		/** Output only. Whether the file has been modified by this user. */
		modified?: boolean | null;

		/** Output only. Deprecated: Use `copyRequiresWriterPermission` instead. */
		restricted?: boolean | null;

		/** Whether this file is starred by the user. */
		starred?: boolean | null;

		/** Whether this file has been trashed. This label applies to all users accessing the file; however, only owners are allowed to see and untrash files. */
		trashed?: boolean | null;

		/** Whether this file has been viewed by this user. */
		viewed?: boolean | null;
	}
	export interface FileLabelsFormProperties {

		/** Output only. Deprecated. */
		hidden: FormControl<boolean | null | undefined>,

		/** Output only. Whether the file has been modified by this user. */
		modified: FormControl<boolean | null | undefined>,

		/** Output only. Deprecated: Use `copyRequiresWriterPermission` instead. */
		restricted: FormControl<boolean | null | undefined>,

		/** Whether this file is starred by the user. */
		starred: FormControl<boolean | null | undefined>,

		/** Whether this file has been trashed. This label applies to all users accessing the file; however, only owners are allowed to see and untrash files. */
		trashed: FormControl<boolean | null | undefined>,

		/** Whether this file has been viewed by this user. */
		viewed: FormControl<boolean | null | undefined>,
	}
	export function CreateFileLabelsFormGroup() {
		return new FormGroup<FileLabelsFormProperties>({
			hidden: new FormControl<boolean | null | undefined>(undefined),
			modified: new FormControl<boolean | null | undefined>(undefined),
			restricted: new FormControl<boolean | null | undefined>(undefined),
			starred: new FormControl<boolean | null | undefined>(undefined),
			trashed: new FormControl<boolean | null | undefined>(undefined),
			viewed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface FileLinkShareMetadata {

		/** Output only. Whether the file is eligible for security update. */
		securityUpdateEligible?: boolean | null;

		/** Output only. Whether the security update is enabled for this file. */
		securityUpdateEnabled?: boolean | null;
	}
	export interface FileLinkShareMetadataFormProperties {

		/** Output only. Whether the file is eligible for security update. */
		securityUpdateEligible: FormControl<boolean | null | undefined>,

		/** Output only. Whether the security update is enabled for this file. */
		securityUpdateEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateFileLinkShareMetadataFormGroup() {
		return new FormGroup<FileLinkShareMetadataFormProperties>({
			securityUpdateEligible: new FormControl<boolean | null | undefined>(undefined),
			securityUpdateEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A reference to a file's parent. Some resource methods (such as `parents.get`) require a `parentId`. Use the `parents.list` method to retrieve the ID for a parent. */
	export interface ParentReference {

		/** The ID of the parent. */
		id?: string | null;

		/** Output only. Whether or not the parent is the root folder. */
		isRoot?: boolean | null;

		/** Output only. This is always `drive#parentReference`. */
		kind?: string | null;

		/** Output only. A link to the parent. */
		parentLink?: string | null;

		/** Output only. A link back to this reference. */
		selfLink?: string | null;
	}

	/** A reference to a file's parent. Some resource methods (such as `parents.get`) require a `parentId`. Use the `parents.list` method to retrieve the ID for a parent. */
	export interface ParentReferenceFormProperties {

		/** The ID of the parent. */
		id: FormControl<string | null | undefined>,

		/** Output only. Whether or not the parent is the root folder. */
		isRoot: FormControl<boolean | null | undefined>,

		/** Output only. This is always `drive#parentReference`. */
		kind: FormControl<string | null | undefined>,

		/** Output only. A link to the parent. */
		parentLink: FormControl<string | null | undefined>,

		/** Output only. A link back to this reference. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateParentReferenceFormGroup() {
		return new FormGroup<ParentReferenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			isRoot: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			parentLink: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A permission for a file. A permission grants a user, group, domain, or the world access to a file or a folder hierarchy. Some resource methods (such as `permissions.update`) require a `permissionId`. Use the `permissions.list` method to retrieve the ID for a file, folder, or shared drive. */
	export interface Permission {

		/** Additional roles for this user. Only `commenter` is currently allowed, though more may be supported in the future. */
		additionalRoles?: Array<string>;

		/** Output only. Deprecated. */
		authKey?: string | null;

		/** Output only. Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions. */
		deleted?: boolean | null;

		/** Output only. The domain name of the entity this permission refers to. This is an output-only field which is present when the permission type is `user`, `group` or `domain`. */
		domain?: string | null;

		/** Output only. The email address of the user or group this permission refers to. This is an output-only field which is present when the permission type is `user` or `group`. */
		emailAddress?: string | null;

		/** Output only. The ETag of the permission. */
		etag?: string | null;

		/** The time at which this permission will expire (RFC 3339 date-time). Expiration dates have the following restrictions: - They can only be set on user and group permissions - The date must be in the future - The date cannot be more than a year in the future - The date can only be set on drive.permissions.update or drive.permissions.patch requests */
		expirationDate?: Date | null;

		/** The ID of the user this permission refers to, and identical to the `permissionId` in the About and Files resources. When making a `drive.permissions.insert` request, exactly one of the `id` or `value` fields must be specified unless the permission type is `anyone`, in which case both `id` and `value` are ignored. */
		id?: string | null;

		/** Output only. This is always `drive#permission`. */
		kind?: string | null;

		/** Output only. The name for this permission. */
		name?: string | null;

		/** Whether the account associated with this permission is a pending owner. Only populated for `user` type permissions for files that are not in a shared drive. */
		pendingOwner?: boolean | null;

		/** Output only. Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items. */
		PermissionPermissionDetails?: Array<PermissionPermissionDetails>;

		/** Output only. A link to the profile photo, if available. */
		photoLink?: string | null;

		/** The primary role for this user. While new values may be supported in the future, the following are currently allowed: * `owner` * `organizer` * `fileOrganizer` * `writer` * `reader` */
		role?: string | null;

		/** Output only. A link back to this permission. */
		selfLink?: string | null;

		/** Output only. Deprecated: Use `permissionDetails` instead. */
		PermissionTeamDrivePermissionDetails?: Array<PermissionTeamDrivePermissionDetails>;

		/** The account type. Allowed values are: * `user` * `group` * `domain` * `anyone` */
		type?: string | null;

		/** The email address or domain name for the entity. This is used during inserts and is not populated in responses. When making a `drive.permissions.insert` request, exactly one of the `id` or `value` fields must be specified unless the permission type is `anyone`, in which case both `id` and `value` are ignored. */
		value?: string | null;

		/** Indicates the view for this permission. Only populated for permissions that belong to a view. `published` is the only supported value. */
		view?: string | null;

		/** Whether the link is required for this permission. */
		withLink?: boolean | null;
	}

	/** A permission for a file. A permission grants a user, group, domain, or the world access to a file or a folder hierarchy. Some resource methods (such as `permissions.update`) require a `permissionId`. Use the `permissions.list` method to retrieve the ID for a file, folder, or shared drive. */
	export interface PermissionFormProperties {

		/** Output only. Deprecated. */
		authKey: FormControl<string | null | undefined>,

		/** Output only. Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions. */
		deleted: FormControl<boolean | null | undefined>,

		/** Output only. The domain name of the entity this permission refers to. This is an output-only field which is present when the permission type is `user`, `group` or `domain`. */
		domain: FormControl<string | null | undefined>,

		/** Output only. The email address of the user or group this permission refers to. This is an output-only field which is present when the permission type is `user` or `group`. */
		emailAddress: FormControl<string | null | undefined>,

		/** Output only. The ETag of the permission. */
		etag: FormControl<string | null | undefined>,

		/** The time at which this permission will expire (RFC 3339 date-time). Expiration dates have the following restrictions: - They can only be set on user and group permissions - The date must be in the future - The date cannot be more than a year in the future - The date can only be set on drive.permissions.update or drive.permissions.patch requests */
		expirationDate: FormControl<Date | null | undefined>,

		/** The ID of the user this permission refers to, and identical to the `permissionId` in the About and Files resources. When making a `drive.permissions.insert` request, exactly one of the `id` or `value` fields must be specified unless the permission type is `anyone`, in which case both `id` and `value` are ignored. */
		id: FormControl<string | null | undefined>,

		/** Output only. This is always `drive#permission`. */
		kind: FormControl<string | null | undefined>,

		/** Output only. The name for this permission. */
		name: FormControl<string | null | undefined>,

		/** Whether the account associated with this permission is a pending owner. Only populated for `user` type permissions for files that are not in a shared drive. */
		pendingOwner: FormControl<boolean | null | undefined>,

		/** Output only. A link to the profile photo, if available. */
		photoLink: FormControl<string | null | undefined>,

		/** The primary role for this user. While new values may be supported in the future, the following are currently allowed: * `owner` * `organizer` * `fileOrganizer` * `writer` * `reader` */
		role: FormControl<string | null | undefined>,

		/** Output only. A link back to this permission. */
		selfLink: FormControl<string | null | undefined>,

		/** The account type. Allowed values are: * `user` * `group` * `domain` * `anyone` */
		type: FormControl<string | null | undefined>,

		/** The email address or domain name for the entity. This is used during inserts and is not populated in responses. When making a `drive.permissions.insert` request, exactly one of the `id` or `value` fields must be specified unless the permission type is `anyone`, in which case both `id` and `value` are ignored. */
		value: FormControl<string | null | undefined>,

		/** Indicates the view for this permission. Only populated for permissions that belong to a view. `published` is the only supported value. */
		view: FormControl<string | null | undefined>,

		/** Whether the link is required for this permission. */
		withLink: FormControl<boolean | null | undefined>,
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
			authKey: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pendingOwner: new FormControl<boolean | null | undefined>(undefined),
			photoLink: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			view: new FormControl<string | null | undefined>(undefined),
			withLink: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PermissionPermissionDetails {

		/** Output only. Additional roles for this user. Only `commenter` is currently possible, though more may be supported in the future. */
		additionalRoles?: Array<string>;

		/** Output only. Whether this permission is inherited. This field is always populated. This is an output-only field. */
		inherited?: boolean | null;

		/** Output only. The ID of the item from which this permission is inherited. This is an output-only field. */
		inheritedFrom?: string | null;

		/** Output only. The permission type for this user. While new values may be added in future, the following are currently possible: * `file` * `member` */
		permissionType?: string | null;

		/** Output only. The primary role for this user. While new values may be added in the future, the following are currently possible: * `organizer` * `fileOrganizer` * `writer` * `reader` */
		role?: string | null;
	}
	export interface PermissionPermissionDetailsFormProperties {

		/** Output only. Whether this permission is inherited. This field is always populated. This is an output-only field. */
		inherited: FormControl<boolean | null | undefined>,

		/** Output only. The ID of the item from which this permission is inherited. This is an output-only field. */
		inheritedFrom: FormControl<string | null | undefined>,

		/** Output only. The permission type for this user. While new values may be added in future, the following are currently possible: * `file` * `member` */
		permissionType: FormControl<string | null | undefined>,

		/** Output only. The primary role for this user. While new values may be added in the future, the following are currently possible: * `organizer` * `fileOrganizer` * `writer` * `reader` */
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

		/** Output only. Deprecated: Use `permissionDetails/additionalRoles` instead. */
		additionalRoles?: Array<string>;

		/** Output only. Deprecated: Use `permissionDetails/inherited` instead. */
		inherited?: boolean | null;

		/** Output only. Deprecated: Use `permissionDetails/inheritedFrom` instead. */
		inheritedFrom?: string | null;

		/** Output only. Deprecated: Use `permissionDetails/role` instead. */
		role?: string | null;

		/** Output only. Deprecated: Use `permissionDetails/permissionType` instead. */
		teamDrivePermissionType?: string | null;
	}
	export interface PermissionTeamDrivePermissionDetailsFormProperties {

		/** Output only. Deprecated: Use `permissionDetails/inherited` instead. */
		inherited: FormControl<boolean | null | undefined>,

		/** Output only. Deprecated: Use `permissionDetails/inheritedFrom` instead. */
		inheritedFrom: FormControl<string | null | undefined>,

		/** Output only. Deprecated: Use `permissionDetails/role` instead. */
		role: FormControl<string | null | undefined>,

		/** Output only. Deprecated: Use `permissionDetails/permissionType` instead. */
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


	/** A key-value pair attached to a file that is either public or private to an application. The following limits apply to file properties: * Maximum of 100 properties total per file * Maximum of 30 private properties per app * Maximum of 30 public properties * Maximum of 124 bytes size limit on (key + value) string in UTF-8 encoding for a single property Some resource methods (such as `properties.update`) require a `propertyKey`. Use the `properties.list` method to retrieve the key for a property. */
	export interface Property {

		/** Output only. ETag of the property. */
		etag?: string | null;

		/** The key of this property. */
		key?: string | null;

		/** Output only. This is always `drive#property`. */
		kind?: string | null;

		/** Output only. The link back to this property. */
		selfLink?: string | null;

		/** The value of this property. */
		value?: string | null;

		/** The visibility of this property. Allowed values are PRIVATE (default) and PUBLIC. Private properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties. */
		visibility?: string | null;
	}

	/** A key-value pair attached to a file that is either public or private to an application. The following limits apply to file properties: * Maximum of 100 properties total per file * Maximum of 30 private properties per app * Maximum of 30 public properties * Maximum of 124 bytes size limit on (key + value) string in UTF-8 encoding for a single property Some resource methods (such as `properties.update`) require a `propertyKey`. Use the `properties.list` method to retrieve the key for a property. */
	export interface PropertyFormProperties {

		/** Output only. ETag of the property. */
		etag: FormControl<string | null | undefined>,

		/** The key of this property. */
		key: FormControl<string | null | undefined>,

		/** Output only. This is always `drive#property`. */
		kind: FormControl<string | null | undefined>,

		/** Output only. The link back to this property. */
		selfLink: FormControl<string | null | undefined>,

		/** The value of this property. */
		value: FormControl<string | null | undefined>,

		/** The visibility of this property. Allowed values are PRIVATE (default) and PUBLIC. Private properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties. */
		visibility: FormControl<string | null | undefined>,
	}
	export function CreatePropertyFormGroup() {
		return new FormGroup<PropertyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			visibility: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileShortcutDetails {

		/** The ID of the file that this shortcut points to. */
		targetId?: string | null;

		/** Output only. The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created. */
		targetMimeType?: string | null;

		/** Output only. The ResourceKey for the target file. */
		targetResourceKey?: string | null;
	}
	export interface FileShortcutDetailsFormProperties {

		/** The ID of the file that this shortcut points to. */
		targetId: FormControl<string | null | undefined>,

		/** Output only. The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created. */
		targetMimeType: FormControl<string | null | undefined>,

		/** Output only. The ResourceKey for the target file. */
		targetResourceKey: FormControl<string | null | undefined>,
	}
	export function CreateFileShortcutDetailsFormGroup() {
		return new FormGroup<FileShortcutDetailsFormProperties>({
			targetId: new FormControl<string | null | undefined>(undefined),
			targetMimeType: new FormControl<string | null | undefined>(undefined),
			targetResourceKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileThumbnail {

		/** The URL-safe Base64 encoded bytes of the thumbnail image. It should conform to RFC 4648 section 5. */
		image?: string | null;

		/** The MIME type of the thumbnail. */
		mimeType?: string | null;
	}
	export interface FileThumbnailFormProperties {

		/** The URL-safe Base64 encoded bytes of the thumbnail image. It should conform to RFC 4648 section 5. */
		image: FormControl<string | null | undefined>,

		/** The MIME type of the thumbnail. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateFileThumbnailFormGroup() {
		return new FormGroup<FileThumbnailFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileVideoMediaMetadata {

		/** Output only. The duration of the video in milliseconds. */
		durationMillis?: string | null;

		/** Output only. The height of the video in pixels. */
		height?: number | null;

		/** Output only. The width of the video in pixels. */
		width?: number | null;
	}
	export interface FileVideoMediaMetadataFormProperties {

		/** Output only. The duration of the video in milliseconds. */
		durationMillis: FormControl<string | null | undefined>,

		/** Output only. The height of the video in pixels. */
		height: FormControl<number | null | undefined>,

		/** Output only. The width of the video in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateFileVideoMediaMetadataFormGroup() {
		return new FormGroup<FileVideoMediaMetadataFormProperties>({
			durationMillis: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Deprecated: Use the `drive` collection instead. */
	export interface TeamDrive {

		/** An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on `drive.teamdrives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set. */
		backgroundImageFile?: TeamDriveBackgroundImageFile;

		/** A short-lived link to this Team Drive's background image. */
		backgroundImageLink?: string | null;

		/** Capabilities the current user has on this Team Drive. */
		capabilities?: TeamDriveCapabilities;

		/** The color of this Team Drive as an RGB hex string. It can only be set on a `drive.teamdrives.update` request that does not set `themeId`. */
		colorRgb?: string | null;

		/** The time at which the Team Drive was created (RFC 3339 date-time). */
		createdDate?: Date | null;

		/** The ID of this Team Drive which is also the ID of the top level folder of this Team Drive. */
		id?: string | null;

		/** This is always `drive#teamDrive` */
		kind?: string | null;

		/** The name of this Team Drive. */
		name?: string | null;

		/** The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`. */
		orgUnitId?: string | null;

		/** A set of restrictions that apply to this Team Drive or items inside this Team Drive. */
		restrictions?: TeamDriveRestrictions;

		/** The ID of the theme from which the background image and color will be set. The set of possible `teamDriveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.teamdrives.insert` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`. */
		themeId?: string | null;
	}

	/** Deprecated: Use the `drive` collection instead. */
	export interface TeamDriveFormProperties {

		/** A short-lived link to this Team Drive's background image. */
		backgroundImageLink: FormControl<string | null | undefined>,

		/** The color of this Team Drive as an RGB hex string. It can only be set on a `drive.teamdrives.update` request that does not set `themeId`. */
		colorRgb: FormControl<string | null | undefined>,

		/** The time at which the Team Drive was created (RFC 3339 date-time). */
		createdDate: FormControl<Date | null | undefined>,

		/** The ID of this Team Drive which is also the ID of the top level folder of this Team Drive. */
		id: FormControl<string | null | undefined>,

		/** This is always `drive#teamDrive` */
		kind: FormControl<string | null | undefined>,

		/** The name of this Team Drive. */
		name: FormControl<string | null | undefined>,

		/** The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`. */
		orgUnitId: FormControl<string | null | undefined>,

		/** The ID of the theme from which the background image and color will be set. The set of possible `teamDriveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.teamdrives.insert` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb` or `backgroundImageFile`. */
		themeId: FormControl<string | null | undefined>,
	}
	export function CreateTeamDriveFormGroup() {
		return new FormGroup<TeamDriveFormProperties>({
			backgroundImageLink: new FormControl<string | null | undefined>(undefined),
			colorRgb: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orgUnitId: new FormControl<string | null | undefined>(undefined),
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

		/** Whether the current user can change the `copyRequiresWriterPermission` restriction of this Team Drive. */
		canChangeCopyRequiresWriterPermissionRestriction?: boolean | null;

		/** Whether the current user can change the `domainUsersOnly` restriction of this Team Drive. */
		canChangeDomainUsersOnlyRestriction?: boolean | null;

		/** Whether the current user can change the `sharingFoldersRequiresOrganizerPermission` restriction of this Team Drive. */
		canChangeSharingFoldersRequiresOrganizerPermissionRestriction?: boolean | null;

		/** Whether the current user can change the background of this Team Drive. */
		canChangeTeamDriveBackground?: boolean | null;

		/** Whether the current user can change the `teamMembersOnly` restriction of this Team Drive. */
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

		/** Deprecated: Use `canDeleteChildren` or `canTrashChildren` instead. */
		canRemoveChildren?: boolean | null;

		/** Whether the current user can rename files or folders in this Team Drive. */
		canRename?: boolean | null;

		/** Whether the current user can rename this Team Drive. */
		canRenameTeamDrive?: boolean | null;

		/** Whether the current user can reset the Team Drive restrictions to defaults. */
		canResetTeamDriveRestrictions?: boolean | null;

		/** Whether the current user can share files or folders in this Team Drive. */
		canShare?: boolean | null;

		/** Whether the current user can trash children from folders in this Team Drive. */
		canTrashChildren?: boolean | null;
	}
	export interface TeamDriveCapabilitiesFormProperties {

		/** Whether the current user can add children to folders in this Team Drive. */
		canAddChildren: FormControl<boolean | null | undefined>,

		/** Whether the current user can change the `copyRequiresWriterPermission` restriction of this Team Drive. */
		canChangeCopyRequiresWriterPermissionRestriction: FormControl<boolean | null | undefined>,

		/** Whether the current user can change the `domainUsersOnly` restriction of this Team Drive. */
		canChangeDomainUsersOnlyRestriction: FormControl<boolean | null | undefined>,

		/** Whether the current user can change the `sharingFoldersRequiresOrganizerPermission` restriction of this Team Drive. */
		canChangeSharingFoldersRequiresOrganizerPermissionRestriction: FormControl<boolean | null | undefined>,

		/** Whether the current user can change the background of this Team Drive. */
		canChangeTeamDriveBackground: FormControl<boolean | null | undefined>,

		/** Whether the current user can change the `teamMembersOnly` restriction of this Team Drive. */
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

		/** Deprecated: Use `canDeleteChildren` or `canTrashChildren` instead. */
		canRemoveChildren: FormControl<boolean | null | undefined>,

		/** Whether the current user can rename files or folders in this Team Drive. */
		canRename: FormControl<boolean | null | undefined>,

		/** Whether the current user can rename this Team Drive. */
		canRenameTeamDrive: FormControl<boolean | null | undefined>,

		/** Whether the current user can reset the Team Drive restrictions to defaults. */
		canResetTeamDriveRestrictions: FormControl<boolean | null | undefined>,

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
			canChangeSharingFoldersRequiresOrganizerPermissionRestriction: new FormControl<boolean | null | undefined>(undefined),
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
			canResetTeamDriveRestrictions: new FormControl<boolean | null | undefined>(undefined),
			canShare: new FormControl<boolean | null | undefined>(undefined),
			canTrashChildren: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TeamDriveRestrictions {

		/** Whether administrative privileges on this Team Drive are required to modify restrictions. */
		adminManagedRestrictions?: boolean | null;

		/** Whether the options to copy, print, or download files inside this Team Drive, should be disabled for readers and commenters. When this restriction is set to `true`, it will override the similarly named field to `true` for any file inside this Team Drive. */
		copyRequiresWriterPermission?: boolean | null;

		/** Whether access to this Team Drive and items inside this Team Drive is restricted to users of the domain to which this Team Drive belongs. This restriction may be overridden by other sharing policies controlled outside of this Team Drive. */
		domainUsersOnly?: boolean | null;

		/** If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders. */
		sharingFoldersRequiresOrganizerPermission?: boolean | null;

		/** Whether access to items inside this Team Drive is restricted to members of this Team Drive. */
		teamMembersOnly?: boolean | null;
	}
	export interface TeamDriveRestrictionsFormProperties {

		/** Whether administrative privileges on this Team Drive are required to modify restrictions. */
		adminManagedRestrictions: FormControl<boolean | null | undefined>,

		/** Whether the options to copy, print, or download files inside this Team Drive, should be disabled for readers and commenters. When this restriction is set to `true`, it will override the similarly named field to `true` for any file inside this Team Drive. */
		copyRequiresWriterPermission: FormControl<boolean | null | undefined>,

		/** Whether access to this Team Drive and items inside this Team Drive is restricted to users of the domain to which this Team Drive belongs. This restriction may be overridden by other sharing policies controlled outside of this Team Drive. */
		domainUsersOnly: FormControl<boolean | null | undefined>,

		/** If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders. */
		sharingFoldersRequiresOrganizerPermission: FormControl<boolean | null | undefined>,

		/** Whether access to items inside this Team Drive is restricted to members of this Team Drive. */
		teamMembersOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateTeamDriveRestrictionsFormGroup() {
		return new FormGroup<TeamDriveRestrictionsFormProperties>({
			adminManagedRestrictions: new FormControl<boolean | null | undefined>(undefined),
			copyRequiresWriterPermission: new FormControl<boolean | null | undefined>(undefined),
			domainUsersOnly: new FormControl<boolean | null | undefined>(undefined),
			sharingFoldersRequiresOrganizerPermission: new FormControl<boolean | null | undefined>(undefined),
			teamMembersOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A list of changes for a user. */
	export interface ChangeList {

		/** The ETag of the list. */
		etag?: string | null;

		/** The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		items?: Array<Change>;

		/** This is always `drive#changeList`. */
		kind?: string | null;

		/** The current largest change ID. */
		largestChangeId?: string | null;

		/** The starting page token for future changes. This will be present only if the end of the current changes list has been reached. */
		newStartPageToken?: string | null;

		/** A link to the next page of changes. */
		nextLink?: string | null;

		/** The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string | null;

		/** A link back to this list. */
		selfLink?: string | null;
	}

	/** A list of changes for a user. */
	export interface ChangeListFormProperties {

		/** The ETag of the list. */
		etag: FormControl<string | null | undefined>,

		/** This is always `drive#changeList`. */
		kind: FormControl<string | null | undefined>,

		/** The current largest change ID. */
		largestChangeId: FormControl<string | null | undefined>,

		/** The starting page token for future changes. This will be present only if the end of the current changes list has been reached. */
		newStartPageToken: FormControl<string | null | undefined>,

		/** A link to the next page of changes. */
		nextLink: FormControl<string | null | undefined>,

		/** The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** A link back to this list. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateChangeListFormGroup() {
		return new FormGroup<ChangeListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			largestChangeId: new FormControl<string | null | undefined>(undefined),
			newStartPageToken: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A notification channel used to watch for resource changes. */
	export interface Channel {

		/** The address where notifications are delivered for this channel. */
		address?: string | null;

		/** Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. */
		expiration?: string | null;

		/** A UUID or similar unique string that identifies this channel. */
		id?: string | null;

		/** Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`. */
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

	/** A notification channel used to watch for resource changes. */
	export interface ChannelFormProperties {

		/** The address where notifications are delivered for this channel. */
		address: FormControl<string | null | undefined>,

		/** Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. */
		expiration: FormControl<string | null | undefined>,

		/** A UUID or similar unique string that identifies this channel. */
		id: FormControl<string | null | undefined>,

		/** Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`. */
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


	/** A list of children of a file. */
	export interface ChildList {

		/** The ETag of the list. */
		etag?: string | null;

		/** The list of children. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		items?: Array<ChildReference>;

		/** This is always `drive#childList`. */
		kind?: string | null;

		/** A link to the next page of children. */
		nextLink?: string | null;

		/** The page token for the next page of children. This will be absent if the end of the children list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string | null;

		/** A link back to this list. */
		selfLink?: string | null;
	}

	/** A list of children of a file. */
	export interface ChildListFormProperties {

		/** The ETag of the list. */
		etag: FormControl<string | null | undefined>,

		/** This is always `drive#childList`. */
		kind: FormControl<string | null | undefined>,

		/** A link to the next page of children. */
		nextLink: FormControl<string | null | undefined>,

		/** The page token for the next page of children. This will be absent if the end of the children list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** A link back to this list. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateChildListFormGroup() {
		return new FormGroup<ChildListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A reference to a folder's child. Some resource methods (such as `children.get`) require a `childId`. Use the `children.list` method to retrieve the ID of the child. */
	export interface ChildReference {

		/** Output only. A link to the child. */
		childLink?: string | null;

		/** The ID of the child. */
		id?: string | null;

		/** Output only. This is always `drive#childReference`. */
		kind?: string | null;

		/** Output only. A link back to this reference. */
		selfLink?: string | null;
	}

	/** A reference to a folder's child. Some resource methods (such as `children.get`) require a `childId`. Use the `children.list` method to retrieve the ID of the child. */
	export interface ChildReferenceFormProperties {

		/** Output only. A link to the child. */
		childLink: FormControl<string | null | undefined>,

		/** The ID of the child. */
		id: FormControl<string | null | undefined>,

		/** Output only. This is always `drive#childReference`. */
		kind: FormControl<string | null | undefined>,

		/** Output only. A link back to this reference. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateChildReferenceFormGroup() {
		return new FormGroup<ChildReferenceFormProperties>({
			childLink: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A comment on a file in Google Drive. Some resource methods (such as `comments.update`) require a `commentId`. Use the `comments.list` method to retrieve the ID for a comment in a file. */
	export interface Comment {

		/** A region of the document represented as a JSON string. For details on defining anchor properties, refer to [Add comments and replies](https://developers.google.com/drive/api/v2/manage-comments). */
		anchor?: string | null;

		/** Information about a Drive user. */
		author?: User;

		/** Output only. The ID of the comment. */
		commentId?: string | null;

		/** The plain text content used to create this comment. This is not HTML safe and should only be used as a starting point to make edits to a comment's content. */
		content?: string | null;

		/** The context of the file which is being commented on. */
		context?: CommentContext;

		/** The date when this comment was first created. */
		createdDate?: Date | null;

		/** Output only. Whether this comment has been deleted. If a comment has been deleted the content will be cleared and this will only represent a comment that once existed. */
		deleted?: boolean | null;

		/** Output only. The file which this comment is addressing. */
		fileId?: string | null;

		/** Output only. The title of the file which this comment is addressing. */
		fileTitle?: string | null;

		/** Output only. HTML formatted content for this comment. */
		htmlContent?: string | null;

		/** Output only. This is always `drive#comment`. */
		kind?: string | null;

		/** The date when this comment or any of its replies were last modified. */
		modifiedDate?: Date | null;

		/** Output only. Replies to this post. */
		replies?: Array<CommentReply>;

		/** Output only. A link back to this comment. */
		selfLink?: string | null;

		/** Output only. The status of this comment. Status can be changed by posting a reply to a comment with the desired status. * `open` - The comment is still open. * `resolved` - The comment has been resolved by one of its replies. */
		status?: string | null;
	}

	/** A comment on a file in Google Drive. Some resource methods (such as `comments.update`) require a `commentId`. Use the `comments.list` method to retrieve the ID for a comment in a file. */
	export interface CommentFormProperties {

		/** A region of the document represented as a JSON string. For details on defining anchor properties, refer to [Add comments and replies](https://developers.google.com/drive/api/v2/manage-comments). */
		anchor: FormControl<string | null | undefined>,

		/** Output only. The ID of the comment. */
		commentId: FormControl<string | null | undefined>,

		/** The plain text content used to create this comment. This is not HTML safe and should only be used as a starting point to make edits to a comment's content. */
		content: FormControl<string | null | undefined>,

		/** The date when this comment was first created. */
		createdDate: FormControl<Date | null | undefined>,

		/** Output only. Whether this comment has been deleted. If a comment has been deleted the content will be cleared and this will only represent a comment that once existed. */
		deleted: FormControl<boolean | null | undefined>,

		/** Output only. The file which this comment is addressing. */
		fileId: FormControl<string | null | undefined>,

		/** Output only. The title of the file which this comment is addressing. */
		fileTitle: FormControl<string | null | undefined>,

		/** Output only. HTML formatted content for this comment. */
		htmlContent: FormControl<string | null | undefined>,

		/** Output only. This is always `drive#comment`. */
		kind: FormControl<string | null | undefined>,

		/** The date when this comment or any of its replies were last modified. */
		modifiedDate: FormControl<Date | null | undefined>,

		/** Output only. A link back to this comment. */
		selfLink: FormControl<string | null | undefined>,

		/** Output only. The status of this comment. Status can be changed by posting a reply to a comment with the desired status. * `open` - The comment is still open. * `resolved` - The comment has been resolved by one of its replies. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			anchor: new FormControl<string | null | undefined>(undefined),
			commentId: new FormControl<string | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			fileId: new FormControl<string | null | undefined>(undefined),
			fileTitle: new FormControl<string | null | undefined>(undefined),
			htmlContent: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			modifiedDate: new FormControl<Date | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentContext {

		/** The MIME type of the context snippet. */
		type?: string | null;

		/** Data representation of the segment of the file being commented on. In the case of a text file for example, this would be the actual text that the comment is about. */
		value?: string | null;
	}
	export interface CommentContextFormProperties {

		/** The MIME type of the context snippet. */
		type: FormControl<string | null | undefined>,

		/** Data representation of the segment of the file being commented on. In the case of a text file for example, this would be the actual text that the comment is about. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCommentContextFormGroup() {
		return new FormGroup<CommentContextFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A comment on a file in Google Drive. Some resource methods (such as `replies.update`) require a `replyId`. Use the `replies.list` method to retrieve the ID for a reply. */
	export interface CommentReply {

		/** Information about a Drive user. */
		author?: User;

		/** The plain text content used to create this reply. This is not HTML safe and should only be used as a starting point to make edits to a reply's content. This field is required on inserts if no verb is specified (resolve/reopen). */
		content?: string | null;

		/** The date when this reply was first created. */
		createdDate?: Date | null;

		/** Output only. Whether this reply has been deleted. If a reply has been deleted the content will be cleared and this will only represent a reply that once existed. */
		deleted?: boolean | null;

		/** Output only. HTML formatted content for this reply. */
		htmlContent?: string | null;

		/** Output only. This is always `drive#commentReply`. */
		kind?: string | null;

		/** The date when this reply was last modified. */
		modifiedDate?: Date | null;

		/** Output only. The ID of the reply. */
		replyId?: string | null;

		/** The action this reply performed to the parent comment. When creating a new reply this is the action to be perform to the parent comment. Possible values are: * `resolve` - To resolve a comment. * `reopen` - To reopen (un-resolve) a comment. */
		verb?: string | null;
	}

	/** A comment on a file in Google Drive. Some resource methods (such as `replies.update`) require a `replyId`. Use the `replies.list` method to retrieve the ID for a reply. */
	export interface CommentReplyFormProperties {

		/** The plain text content used to create this reply. This is not HTML safe and should only be used as a starting point to make edits to a reply's content. This field is required on inserts if no verb is specified (resolve/reopen). */
		content: FormControl<string | null | undefined>,

		/** The date when this reply was first created. */
		createdDate: FormControl<Date | null | undefined>,

		/** Output only. Whether this reply has been deleted. If a reply has been deleted the content will be cleared and this will only represent a reply that once existed. */
		deleted: FormControl<boolean | null | undefined>,

		/** Output only. HTML formatted content for this reply. */
		htmlContent: FormControl<string | null | undefined>,

		/** Output only. This is always `drive#commentReply`. */
		kind: FormControl<string | null | undefined>,

		/** The date when this reply was last modified. */
		modifiedDate: FormControl<Date | null | undefined>,

		/** Output only. The ID of the reply. */
		replyId: FormControl<string | null | undefined>,

		/** The action this reply performed to the parent comment. When creating a new reply this is the action to be perform to the parent comment. Possible values are: * `resolve` - To resolve a comment. * `reopen` - To reopen (un-resolve) a comment. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateCommentReplyFormGroup() {
		return new FormGroup<CommentReplyFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			htmlContent: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			modifiedDate: new FormControl<Date | null | undefined>(undefined),
			replyId: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of comments on a file in Google Drive. */
	export interface CommentList {

		/** The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		items?: Array<Comment>;

		/** This is always `drive#commentList`. */
		kind?: string | null;

		/** A link to the next page of comments. */
		nextLink?: string | null;

		/** The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string | null;

		/** A link back to this list. */
		selfLink?: string | null;
	}

	/** A list of comments on a file in Google Drive. */
	export interface CommentListFormProperties {

		/** This is always `drive#commentList`. */
		kind: FormControl<string | null | undefined>,

		/** A link to the next page of comments. */
		nextLink: FormControl<string | null | undefined>,

		/** The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** A link back to this list. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateCommentListFormGroup() {
		return new FormGroup<CommentListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of replies to a comment on a file in Google Drive. */
	export interface CommentReplyList {

		/** The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		items?: Array<CommentReply>;

		/** This is always `drive#commentReplyList`. */
		kind?: string | null;

		/** A link to the next page of replies. */
		nextLink?: string | null;

		/** The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string | null;

		/** A link back to this list. */
		selfLink?: string | null;
	}

	/** A list of replies to a comment on a file in Google Drive. */
	export interface CommentReplyListFormProperties {

		/** This is always `drive#commentReplyList`. */
		kind: FormControl<string | null | undefined>,

		/** A link to the next page of replies. */
		nextLink: FormControl<string | null | undefined>,

		/** The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** A link back to this list. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateCommentReplyListFormGroup() {
		return new FormGroup<CommentReplyListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of shared drives. */
	export interface DriveList {

		/** The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		items?: Array<Drive>;

		/** This is always `drive#driveList` */
		kind?: string | null;

		/** The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string | null;
	}

	/** A list of shared drives. */
	export interface DriveListFormProperties {

		/** This is always `drive#driveList` */
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

		/** The ETag of the list. */
		etag?: string | null;

		/** Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the "allDrives" corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as "default" or "drive". */
		incompleteSearch?: boolean | null;

		/** The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		items?: Array<File>;

		/** This is always `drive#fileList`. */
		kind?: string | null;

		/** A link to the next page of files. */
		nextLink?: string | null;

		/** The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string | null;

		/** A link back to this list. */
		selfLink?: string | null;
	}

	/** A list of files. */
	export interface FileListFormProperties {

		/** The ETag of the list. */
		etag: FormControl<string | null | undefined>,

		/** Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the "allDrives" corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as "default" or "drive". */
		incompleteSearch: FormControl<boolean | null | undefined>,

		/** This is always `drive#fileList`. */
		kind: FormControl<string | null | undefined>,

		/** A link to the next page of files. */
		nextLink: FormControl<string | null | undefined>,

		/** The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** A link back to this list. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateFileListFormGroup() {
		return new FormGroup<FileListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			incompleteSearch: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of generated IDs which can be provided in insert requests */
	export interface GeneratedIds {

		/** The IDs generated for the requesting user in the specified space. */
		ids?: Array<string>;

		/** This is always `drive#generatedIds` */
		kind?: string | null;

		/** The type of file that can be created with these IDs. */
		space?: string | null;
	}

	/** A list of generated IDs which can be provided in insert requests */
	export interface GeneratedIdsFormProperties {

		/** This is always `drive#generatedIds` */
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


	/** A modification to a label's field. */
	export interface LabelFieldModification {

		/** The ID of the field to be modified. */
		fieldId?: string | null;

		/** This is always `drive#labelFieldModification`. */
		kind?: string | null;

		/** Replaces the value of a dateString Field with these new values. The string must be in the RFC 3339 full-date format: YYYY-MM-DD. */
		setDateValues?: Array<string>;

		/** Replaces the value of an `integer` field with these new values. */
		setIntegerValues?: Array<string>;

		/** Replaces a `selection` field with these new values. */
		setSelectionValues?: Array<string>;

		/** Sets the value of a `text` field. */
		setTextValues?: Array<string>;

		/** Replaces a `user` field with these new values. The values must be valid email addresses. */
		setUserValues?: Array<string>;

		/** Unsets the values for this field. */
		unsetValues?: boolean | null;
	}

	/** A modification to a label's field. */
	export interface LabelFieldModificationFormProperties {

		/** The ID of the field to be modified. */
		fieldId: FormControl<string | null | undefined>,

		/** This is always `drive#labelFieldModification`. */
		kind: FormControl<string | null | undefined>,

		/** Unsets the values for this field. */
		unsetValues: FormControl<boolean | null | undefined>,
	}
	export function CreateLabelFieldModificationFormGroup() {
		return new FormGroup<LabelFieldModificationFormProperties>({
			fieldId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			unsetValues: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A list of labels applied to a file. */
	export interface LabelList {

		/** The list of labels. */
		items?: Array<Label>;

		/** This is always `drive#labelList` */
		kind?: string | null;

		/** The page token for the next page of labels. This field will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string | null;
	}

	/** A list of labels applied to a file. */
	export interface LabelListFormProperties {

		/** This is always `drive#labelList` */
		kind: FormControl<string | null | undefined>,

		/** The page token for the next page of labels. This field will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateLabelListFormGroup() {
		return new FormGroup<LabelListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A modification to a label on a file. A LabelModification can be used to apply a label to a file, update an existing label on a file, or remove a label from a file. */
	export interface LabelModification {

		/** The list of modifications to this label's fields. */
		fieldModifications?: Array<LabelFieldModification>;

		/** This is always `drive#labelModification`. */
		kind?: string | null;

		/** The ID of the label to modify. */
		labelId?: string | null;

		/** If true, the label will be removed from the file. */
		removeLabel?: boolean | null;
	}

	/** A modification to a label on a file. A LabelModification can be used to apply a label to a file, update an existing label on a file, or remove a label from a file. */
	export interface LabelModificationFormProperties {

		/** This is always `drive#labelModification`. */
		kind: FormControl<string | null | undefined>,

		/** The ID of the label to modify. */
		labelId: FormControl<string | null | undefined>,

		/** If true, the label will be removed from the file. */
		removeLabel: FormControl<boolean | null | undefined>,
	}
	export function CreateLabelModificationFormGroup() {
		return new FormGroup<LabelModificationFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			labelId: new FormControl<string | null | undefined>(undefined),
			removeLabel: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request to modify the set of labels on a file. This request may contain many modifications that will either all succeed or all fail atomically. */
	export interface ModifyLabelsRequest {

		/** This is always `drive#modifyLabelsRequest`. */
		kind?: string | null;

		/** The list of modifications to apply to the labels on the file. */
		labelModifications?: Array<LabelModification>;
	}

	/** A request to modify the set of labels on a file. This request may contain many modifications that will either all succeed or all fail atomically. */
	export interface ModifyLabelsRequestFormProperties {

		/** This is always `drive#modifyLabelsRequest`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateModifyLabelsRequestFormGroup() {
		return new FormGroup<ModifyLabelsRequestFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a ModifyLabels request. This contains only those labels which were added or updated by the request. */
	export interface ModifyLabelsResponse {

		/** This is always `drive#modifyLabelsResponse` */
		kind?: string | null;

		/** The list of labels which were added or updated by the request. */
		modifiedLabels?: Array<Label>;
	}

	/** Response to a ModifyLabels request. This contains only those labels which were added or updated by the request. */
	export interface ModifyLabelsResponseFormProperties {

		/** This is always `drive#modifyLabelsResponse` */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateModifyLabelsResponseFormGroup() {
		return new FormGroup<ModifyLabelsResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of a file's parents. */
	export interface ParentList {

		/** The ETag of the list. */
		etag?: string | null;

		/** The list of parents. */
		items?: Array<ParentReference>;

		/** This is always `drive#parentList`. */
		kind?: string | null;

		/** A link back to this list. */
		selfLink?: string | null;
	}

	/** A list of a file's parents. */
	export interface ParentListFormProperties {

		/** The ETag of the list. */
		etag: FormControl<string | null | undefined>,

		/** This is always `drive#parentList`. */
		kind: FormControl<string | null | undefined>,

		/** A link back to this list. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateParentListFormGroup() {
		return new FormGroup<ParentListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An ID for a user or group as seen in Permission items. */
	export interface PermissionId {

		/** The permission ID. */
		id?: string | null;

		/** This is always `drive#permissionId`. */
		kind?: string | null;
	}

	/** An ID for a user or group as seen in Permission items. */
	export interface PermissionIdFormProperties {

		/** The permission ID. */
		id: FormControl<string | null | undefined>,

		/** This is always `drive#permissionId`. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePermissionIdFormGroup() {
		return new FormGroup<PermissionIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of permissions associated with a file. */
	export interface PermissionList {

		/** The ETag of the list. */
		etag?: string | null;

		/** The list of permissions. */
		items?: Array<Permission>;

		/** This is always `drive#permissionList`. */
		kind?: string | null;

		/** The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken?: string | null;

		/** A link back to this list. */
		selfLink?: string | null;
	}

	/** A list of permissions associated with a file. */
	export interface PermissionListFormProperties {

		/** The ETag of the list. */
		etag: FormControl<string | null | undefined>,

		/** This is always `drive#permissionList`. */
		kind: FormControl<string | null | undefined>,

		/** The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** A link back to this list. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreatePermissionListFormGroup() {
		return new FormGroup<PermissionListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of properties, key-value pairs that are either public or private to an application. */
	export interface PropertyList {

		/** The ETag of the list. */
		etag?: string | null;

		/** The list of properties. */
		items?: Array<Property>;

		/** This is always `drive#propertyList`. */
		kind?: string | null;

		/** The link back to this list. */
		selfLink?: string | null;
	}

	/** A collection of properties, key-value pairs that are either public or private to an application. */
	export interface PropertyListFormProperties {

		/** The ETag of the list. */
		etag: FormControl<string | null | undefined>,

		/** This is always `drive#propertyList`. */
		kind: FormControl<string | null | undefined>,

		/** The link back to this list. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreatePropertyListFormGroup() {
		return new FormGroup<PropertyListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A revision of a file. Some resource methods (such as `revisions.update`) require a `revisionId`. Use the `revisions.list` method to retrieve the ID for a revision. */
	export interface Revision {

		/** Output only. Short term download URL for the file. This will only be populated on files with content stored in Drive. */
		downloadUrl?: string | null;

		/** Output only. The ETag of the revision. */
		etag?: string | null;

		/** Output only. Links for exporting Docs Editors files to specific formats. */
		exportLinks?: {[id: string]: string };

		/** Output only. The size of the revision in bytes. This will only be populated on files with content stored in Drive. */
		fileSize?: string | null;

		/** Output only. The ID of the revision. */
		id?: string | null;

		/** Output only. This is always `drive#revision`. */
		kind?: string | null;

		/** Information about a Drive user. */
		lastModifyingUser?: User;

		/** Output only. Name of the last user to modify this revision. */
		lastModifyingUserName?: string | null;

		/** Output only. An MD5 checksum for the content of this revision. This will only be populated on files with content stored in Drive. */
		md5Checksum?: string | null;

		/** Output only. The MIME type of the revision. */
		mimeType?: string | null;

		/** Last time this revision was modified (formatted RFC 3339 timestamp). */
		modifiedDate?: Date | null;

		/** Output only. The original filename when this revision was created. This will only be populated on files with content stored in Drive. */
		originalFilename?: string | null;

		/** Whether this revision is pinned to prevent automatic purging. If not set, the revision is automatically purged 30 days after newer content is uploaded. This field can only be modified on files with content stored in Drive, excluding Docs Editors files. Revisions can also be pinned when they are created through the drive.files.insert/update/copy by using the pinned query parameter. Pinned revisions are stored indefinitely using additional storage quota, up to a maximum of 200 revisions. */
		pinned?: boolean | null;

		/** Whether subsequent revisions will be automatically republished. This is only populated and can only be modified for Docs Editors files. */
		publishAuto?: boolean | null;

		/** Whether this revision is published. This is only populated and can only be modified for Docs Editors files. */
		published?: boolean | null;

		/** Output only. A link to the published revision. This is only populated for Google Sites files. */
		publishedLink?: string | null;

		/** Whether this revision is published outside the domain. This is only populated and can only be modified for Docs Editors files. */
		publishedOutsideDomain?: boolean | null;

		/** Output only. A link back to this revision. */
		selfLink?: string | null;
	}

	/** A revision of a file. Some resource methods (such as `revisions.update`) require a `revisionId`. Use the `revisions.list` method to retrieve the ID for a revision. */
	export interface RevisionFormProperties {

		/** Output only. Short term download URL for the file. This will only be populated on files with content stored in Drive. */
		downloadUrl: FormControl<string | null | undefined>,

		/** Output only. The ETag of the revision. */
		etag: FormControl<string | null | undefined>,

		/** Output only. Links for exporting Docs Editors files to specific formats. */
		exportLinks: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The size of the revision in bytes. This will only be populated on files with content stored in Drive. */
		fileSize: FormControl<string | null | undefined>,

		/** Output only. The ID of the revision. */
		id: FormControl<string | null | undefined>,

		/** Output only. This is always `drive#revision`. */
		kind: FormControl<string | null | undefined>,

		/** Output only. Name of the last user to modify this revision. */
		lastModifyingUserName: FormControl<string | null | undefined>,

		/** Output only. An MD5 checksum for the content of this revision. This will only be populated on files with content stored in Drive. */
		md5Checksum: FormControl<string | null | undefined>,

		/** Output only. The MIME type of the revision. */
		mimeType: FormControl<string | null | undefined>,

		/** Last time this revision was modified (formatted RFC 3339 timestamp). */
		modifiedDate: FormControl<Date | null | undefined>,

		/** Output only. The original filename when this revision was created. This will only be populated on files with content stored in Drive. */
		originalFilename: FormControl<string | null | undefined>,

		/** Whether this revision is pinned to prevent automatic purging. If not set, the revision is automatically purged 30 days after newer content is uploaded. This field can only be modified on files with content stored in Drive, excluding Docs Editors files. Revisions can also be pinned when they are created through the drive.files.insert/update/copy by using the pinned query parameter. Pinned revisions are stored indefinitely using additional storage quota, up to a maximum of 200 revisions. */
		pinned: FormControl<boolean | null | undefined>,

		/** Whether subsequent revisions will be automatically republished. This is only populated and can only be modified for Docs Editors files. */
		publishAuto: FormControl<boolean | null | undefined>,

		/** Whether this revision is published. This is only populated and can only be modified for Docs Editors files. */
		published: FormControl<boolean | null | undefined>,

		/** Output only. A link to the published revision. This is only populated for Google Sites files. */
		publishedLink: FormControl<string | null | undefined>,

		/** Whether this revision is published outside the domain. This is only populated and can only be modified for Docs Editors files. */
		publishedOutsideDomain: FormControl<boolean | null | undefined>,

		/** Output only. A link back to this revision. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateRevisionFormGroup() {
		return new FormGroup<RevisionFormProperties>({
			downloadUrl: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			exportLinks: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			fileSize: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lastModifyingUserName: new FormControl<string | null | undefined>(undefined),
			md5Checksum: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			modifiedDate: new FormControl<Date | null | undefined>(undefined),
			originalFilename: new FormControl<string | null | undefined>(undefined),
			pinned: new FormControl<boolean | null | undefined>(undefined),
			publishAuto: new FormControl<boolean | null | undefined>(undefined),
			published: new FormControl<boolean | null | undefined>(undefined),
			publishedLink: new FormControl<string | null | undefined>(undefined),
			publishedOutsideDomain: new FormControl<boolean | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of revisions of a file. */
	export interface RevisionList {

		/** The ETag of the list. */
		etag?: string | null;

		/** The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. */
		items?: Array<Revision>;

		/** This is always `drive#revisionList`. */
		kind?: string | null;

		/** The page token for the next page of revisions. This field will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded and pagination should be restarted from the first page of results. */
		nextPageToken?: string | null;

		/** A link back to this list. */
		selfLink?: string | null;
	}

	/** A list of revisions of a file. */
	export interface RevisionListFormProperties {

		/** The ETag of the list. */
		etag: FormControl<string | null | undefined>,

		/** This is always `drive#revisionList`. */
		kind: FormControl<string | null | undefined>,

		/** The page token for the next page of revisions. This field will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded and pagination should be restarted from the first page of results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** A link back to this list. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateRevisionListFormGroup() {
		return new FormGroup<RevisionListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartPageToken {

		/** Identifies what kind of resource this is. Value: the fixed string `"drive#startPageToken"`. */
		kind?: string | null;

		/** The starting page token for listing changes. */
		startPageToken?: string | null;
	}
	export interface StartPageTokenFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string `"drive#startPageToken"`. */
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

		/** The list of Team Drives. */
		items?: Array<TeamDrive>;

		/** This is always `drive#teamDriveList` */
		kind?: string | null;

		/** The page token for the next page of Team Drives. */
		nextPageToken?: string | null;
	}

	/** A list of Team Drives. */
	export interface TeamDriveListFormProperties {

		/** This is always `drive#teamDriveList` */
		kind: FormControl<string | null | undefined>,

		/** The page token for the next page of Team Drives. */
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
		 * Gets the information about the current user along with Drive API settings
		 * Get about
		 * @param {boolean} includeSubscribed Whether to count changes outside the My Drive hierarchy. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the `maxChangeIdCount`.
		 * @param {string} maxChangeIdCount Maximum number of remaining change IDs to count
		 * @param {string} startChangeId Change ID to start counting from when calculating number of remaining change IDs
		 * @return {About} Successful response
		 */
		Drive_about_get(includeSubscribed: boolean | null | undefined, maxChangeIdCount: string | null | undefined, startChangeId: string | null | undefined): Observable<About> {
			return this.http.get<About>(this.baseUri + 'about?includeSubscribed=' + includeSubscribed + '&maxChangeIdCount=' + (maxChangeIdCount == null ? '' : encodeURIComponent(maxChangeIdCount)) + '&startChangeId=' + (startChangeId == null ? '' : encodeURIComponent(startChangeId)), {});
		}

		/**
		 * Lists a user's installed apps.
		 * Get apps
		 * @param {string} appFilterExtensions A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If `appFilterMimeTypes` are provided as well, the result is a union of the two resulting app lists.
		 * @param {string} appFilterMimeTypes A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If `appFilterExtensions` are provided as well, the result is a union of the two resulting app lists.
		 * @param {string} languageCode A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
		 * @return {AppList} Successful response
		 */
		Drive_apps_list(appFilterExtensions: string | null | undefined, appFilterMimeTypes: string | null | undefined, languageCode: string | null | undefined): Observable<AppList> {
			return this.http.get<AppList>(this.baseUri + 'apps?appFilterExtensions=' + (appFilterExtensions == null ? '' : encodeURIComponent(appFilterExtensions)) + '&appFilterMimeTypes=' + (appFilterMimeTypes == null ? '' : encodeURIComponent(appFilterMimeTypes)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)), {});
		}

		/**
		 * Gets a specific app.
		 * Get apps/{appId}
		 * @param {string} appId The ID of the app.
		 * @return {App} Successful response
		 */
		Drive_apps_get(appId: string): Observable<App> {
			return this.http.get<App>(this.baseUri + 'apps/' + (appId == null ? '' : encodeURIComponent(appId)), {});
		}

		/**
		 * Lists the changes for a user or shared drive.
		 * Get changes
		 * @param {string} driveId The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
		 * @param {boolean} includeCorpusRemovals Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
		 * @param {boolean} includeDeleted Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
		 * @param {boolean} includeItemsFromAllDrives Whether both My Drive and shared drive items should be included in results.
		 * @param {string} includeLabels A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
		 * @param {string} includePermissionsForView Specifies which additional view's permissions to include in the response. Only `published` is supported.
		 * @param {boolean} includeSubscribed Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result.
		 * @param {boolean} includeTeamDriveItems Deprecated: Use `includeItemsFromAllDrives` instead.
		 * @param {number} maxResults Maximum number of changes to return.
		 * @param {string} pageToken The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response or to the response from the getStartPageToken method.
		 * @param {string} spaces A comma-separated list of spaces to query. Supported values are `drive`, `appDataFolder` and `photos`.
		 * @param {string} startChangeId Deprecated: Use `pageToken` instead.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @param {string} teamDriveId Deprecated: Use `driveId` instead.
		 * @return {ChangeList} Successful response
		 */
		Drive_changes_list(driveId: string | null | undefined, includeCorpusRemovals: boolean | null | undefined, includeDeleted: boolean | null | undefined, includeItemsFromAllDrives: boolean | null | undefined, includeLabels: string | null | undefined, includePermissionsForView: string | null | undefined, includeSubscribed: boolean | null | undefined, includeTeamDriveItems: boolean | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, spaces: string | null | undefined, startChangeId: string | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, teamDriveId: string | null | undefined): Observable<ChangeList> {
			return this.http.get<ChangeList>(this.baseUri + 'changes?driveId=' + (driveId == null ? '' : encodeURIComponent(driveId)) + '&includeCorpusRemovals=' + includeCorpusRemovals + '&includeDeleted=' + includeDeleted + '&includeItemsFromAllDrives=' + includeItemsFromAllDrives + '&includeLabels=' + (includeLabels == null ? '' : encodeURIComponent(includeLabels)) + '&includePermissionsForView=' + (includePermissionsForView == null ? '' : encodeURIComponent(includePermissionsForView)) + '&includeSubscribed=' + includeSubscribed + '&includeTeamDriveItems=' + includeTeamDriveItems + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&spaces=' + (spaces == null ? '' : encodeURIComponent(spaces)) + '&startChangeId=' + (startChangeId == null ? '' : encodeURIComponent(startChangeId)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&teamDriveId=' + (teamDriveId == null ? '' : encodeURIComponent(teamDriveId)), {});
		}

		/**
		 * Gets the starting pageToken for listing future changes.
		 * Get changes/startPageToken
		 * @param {string} driveId The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @param {string} teamDriveId Deprecated: Use `driveId` instead.
		 * @return {StartPageToken} Successful response
		 */
		Drive_changes_getStartPageToken(driveId: string | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, teamDriveId: string | null | undefined): Observable<StartPageToken> {
			return this.http.get<StartPageToken>(this.baseUri + 'changes/startPageToken?driveId=' + (driveId == null ? '' : encodeURIComponent(driveId)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&teamDriveId=' + (teamDriveId == null ? '' : encodeURIComponent(teamDriveId)), {});
		}

		/**
		 * Subscribe to changes for a user.
		 * Post changes/watch
		 * @param {string} driveId The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
		 * @param {boolean} includeCorpusRemovals Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
		 * @param {boolean} includeDeleted Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
		 * @param {boolean} includeItemsFromAllDrives Whether both My Drive and shared drive items should be included in results.
		 * @param {string} includeLabels A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
		 * @param {string} includePermissionsForView Specifies which additional view's permissions to include in the response. Only `published` is supported.
		 * @param {boolean} includeSubscribed Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result.
		 * @param {boolean} includeTeamDriveItems Deprecated: Use `includeItemsFromAllDrives` instead.
		 * @param {number} maxResults Maximum number of changes to return.
		 * @param {string} pageToken The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response or to the response from the getStartPageToken method.
		 * @param {string} spaces A comma-separated list of spaces to query. Supported values are `drive`, `appDataFolder` and `photos`.
		 * @param {string} startChangeId Deprecated: Use `pageToken` instead.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @param {string} teamDriveId Deprecated: Use `driveId` instead.
		 * @return {Channel} Successful response
		 */
		Drive_changes_watch(driveId: string | null | undefined, includeCorpusRemovals: boolean | null | undefined, includeDeleted: boolean | null | undefined, includeItemsFromAllDrives: boolean | null | undefined, includeLabels: string | null | undefined, includePermissionsForView: string | null | undefined, includeSubscribed: boolean | null | undefined, includeTeamDriveItems: boolean | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, spaces: string | null | undefined, startChangeId: string | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, teamDriveId: string | null | undefined, requestBody: Channel): Observable<Channel> {
			return this.http.post<Channel>(this.baseUri + 'changes/watch?driveId=' + (driveId == null ? '' : encodeURIComponent(driveId)) + '&includeCorpusRemovals=' + includeCorpusRemovals + '&includeDeleted=' + includeDeleted + '&includeItemsFromAllDrives=' + includeItemsFromAllDrives + '&includeLabels=' + (includeLabels == null ? '' : encodeURIComponent(includeLabels)) + '&includePermissionsForView=' + (includePermissionsForView == null ? '' : encodeURIComponent(includePermissionsForView)) + '&includeSubscribed=' + includeSubscribed + '&includeTeamDriveItems=' + includeTeamDriveItems + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&spaces=' + (spaces == null ? '' : encodeURIComponent(spaces)) + '&startChangeId=' + (startChangeId == null ? '' : encodeURIComponent(startChangeId)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&teamDriveId=' + (teamDriveId == null ? '' : encodeURIComponent(teamDriveId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deprecated: Use `changes.getStartPageToken` and `changes.list` to retrieve recent changes.
		 * Get changes/{changeId}
		 * @param {string} changeId The ID of the change.
		 * @param {string} driveId The shared drive from which the change will be returned.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @param {string} teamDriveId Deprecated: Use `driveId` instead.
		 * @return {Change} Successful response
		 */
		Drive_changes_get(changeId: string, driveId: string | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, teamDriveId: string | null | undefined): Observable<Change> {
			return this.http.get<Change>(this.baseUri + 'changes/' + (changeId == null ? '' : encodeURIComponent(changeId)) + '&driveId=' + (driveId == null ? '' : encodeURIComponent(driveId)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&teamDriveId=' + (teamDriveId == null ? '' : encodeURIComponent(teamDriveId)), {});
		}

		/**
		 * Stops watching resources through this channel.
		 * Post channels/stop
		 * @return {void} Successful response
		 */
		Drive_channels_stop(requestBody: Channel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channels/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](/drive/api/guides/search-shareddrives) guide.
		 * Get drives
		 * @param {number} maxResults Maximum number of shared drives to return per page.
		 * @param {string} pageToken Page token for shared drives.
		 * @param {string} q Query string for searching shared drives.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned.
		 * @return {DriveList} Successful response
		 */
		Drive_drives_list(maxResults: number | null | undefined, pageToken: string | null | undefined, q: string | null | undefined, useDomainAdminAccess: boolean | null | undefined): Observable<DriveList> {
			return this.http.get<DriveList>(this.baseUri + 'drives?maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&useDomainAdminAccess=' + useDomainAdminAccess, {});
		}

		/**
		 * Creates a new shared drive.
		 * Post drives
		 * @param {string} requestId Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.
		 * @return {Drive} Successful response
		 */
		Drive_drives_insert(requestId: string, requestBody: Drive): Observable<Drive> {
			return this.http.post<Drive>(this.baseUri + 'drives?requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items.
		 * Delete drives/{driveId}
		 * @param {string} driveId The ID of the shared drive.
		 * @param {boolean} allowItemDeletion Whether any items inside the shared drive should also be deleted. This option is only supported when `useDomainAdminAccess` is also set to `true`.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
		 * @return {void} Successful response
		 */
		Drive_drives_delete(driveId: string, allowItemDeletion: boolean | null | undefined, useDomainAdminAccess: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'drives/' + (driveId == null ? '' : encodeURIComponent(driveId)) + '&allowItemDeletion=' + allowItemDeletion + '&useDomainAdminAccess=' + useDomainAdminAccess, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a shared drive's metadata by ID.
		 * Get drives/{driveId}
		 * @param {string} driveId The ID of the shared drive.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
		 * @return {Drive} Successful response
		 */
		Drive_drives_get(driveId: string, useDomainAdminAccess: boolean | null | undefined): Observable<Drive> {
			return this.http.get<Drive>(this.baseUri + 'drives/' + (driveId == null ? '' : encodeURIComponent(driveId)) + '&useDomainAdminAccess=' + useDomainAdminAccess, {});
		}

		/**
		 * Updates the metadata for a shared drive.
		 * Put drives/{driveId}
		 * @param {string} driveId The ID of the shared drive.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
		 * @return {Drive} Successful response
		 */
		Drive_drives_update(driveId: string, useDomainAdminAccess: boolean | null | undefined, requestBody: Drive): Observable<Drive> {
			return this.http.put<Drive>(this.baseUri + 'drives/' + (driveId == null ? '' : encodeURIComponent(driveId)) + '&useDomainAdminAccess=' + useDomainAdminAccess, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Hides a shared drive from the default view.
		 * Post drives/{driveId}/hide
		 * @param {string} driveId The ID of the shared drive.
		 * @return {Drive} Successful response
		 */
		Drive_drives_hide(driveId: string): Observable<Drive> {
			return this.http.post<Drive>(this.baseUri + 'drives/' + (driveId == null ? '' : encodeURIComponent(driveId)) + '/hide', null, {});
		}

		/**
		 * Restores a shared drive to the default view.
		 * Post drives/{driveId}/unhide
		 * @param {string} driveId The ID of the shared drive.
		 * @return {Drive} Successful response
		 */
		Drive_drives_unhide(driveId: string): Observable<Drive> {
			return this.http.post<Drive>(this.baseUri + 'drives/' + (driveId == null ? '' : encodeURIComponent(driveId)) + '/unhide', null, {});
		}

		/**
		 * Lists the user's files. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for files & folders](/drive/api/guides/search-files) guide. *Note:* This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.
		 * Get files
		 * @param {string} corpora Bodies of items (files/documents) to which the query applies. Supported bodies are `default`, `domain`, `drive` and `allDrives`. Prefer `default` or `drive` to `allDrives` for efficiency.
		 * @param {Drive_files_listCorpus} corpus Deprecated: The body of items (files/documents) to which the query applies. Use `corpora` instead.
		 * @param {string} driveId ID of the shared drive to search.
		 * @param {boolean} includeItemsFromAllDrives Whether both My Drive and shared drive items should be included in results.
		 * @param {string} includeLabels A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
		 * @param {string} includePermissionsForView Specifies which additional view's permissions to include in the response. Only `published` is supported.
		 * @param {boolean} includeTeamDriveItems Deprecated: Use `includeItemsFromAllDrives` instead.
		 * @param {number} maxResults The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
		 * @param {string} orderBy A comma-separated list of sort keys. Valid keys are `createdDate`, `folder`, `lastViewedByMeDate`, `modifiedByMeDate`, `modifiedDate`, `quotaBytesUsed`, `recency`, `sharedWithMeDate`, `starred`, `title`, and `title_natural`. Each key sorts ascending by default, but may be reversed with the `desc` modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
		 * @param {string} pageToken Page token for files.
		 * @param {Drive_files_listProjection} projection Deprecated: This parameter has no function.
		 * @param {string} q Query string for searching files.
		 * @param {string} spaces A comma-separated list of spaces to query. Supported values are `drive`, and `appDataFolder`.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @param {string} teamDriveId Deprecated: Use `driveId` instead.
		 * @return {FileList} Successful response
		 */
		Drive_files_list(corpora: string | null | undefined, corpus: Drive_files_listCorpus | null | undefined, driveId: string | null | undefined, includeItemsFromAllDrives: boolean | null | undefined, includeLabels: string | null | undefined, includePermissionsForView: string | null | undefined, includeTeamDriveItems: boolean | null | undefined, maxResults: number | null | undefined, orderBy: string | null | undefined, pageToken: string | null | undefined, projection: Drive_files_listProjection | null | undefined, q: string | null | undefined, spaces: string | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, teamDriveId: string | null | undefined): Observable<FileList> {
			return this.http.get<FileList>(this.baseUri + 'files?corpora=' + (corpora == null ? '' : encodeURIComponent(corpora)) + '&corpus=' + corpus + '&driveId=' + (driveId == null ? '' : encodeURIComponent(driveId)) + '&includeItemsFromAllDrives=' + includeItemsFromAllDrives + '&includeLabels=' + (includeLabels == null ? '' : encodeURIComponent(includeLabels)) + '&includePermissionsForView=' + (includePermissionsForView == null ? '' : encodeURIComponent(includePermissionsForView)) + '&includeTeamDriveItems=' + includeTeamDriveItems + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&projection=' + projection + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&spaces=' + (spaces == null ? '' : encodeURIComponent(spaces)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&teamDriveId=' + (teamDriveId == null ? '' : encodeURIComponent(teamDriveId)), {});
		}

		/**
		 * Generates a set of file IDs which can be provided in insert or copy requests.
		 * Get files/generateIds
		 * @param {number} maxResults Maximum number of IDs to return.
		 * @param {string} space The space in which the IDs can be used to create new files. Supported values are `drive` and `appDataFolder`. (Default: `drive`)
		 * @param {string} type The type of items which the IDs can be used for. Supported values are `files` and `shortcuts`. Note that `shortcuts` are only supported in the `drive` `space`. (Default: `files`)
		 * @return {GeneratedIds} Successful response
		 */
		Drive_files_generateIds(maxResults: number | null | undefined, space: string | null | undefined, type: string | null | undefined): Observable<GeneratedIds> {
			return this.http.get<GeneratedIds>(this.baseUri + 'files/generateIds?maxResults=' + maxResults + '&space=' + (space == null ? '' : encodeURIComponent(space)) + '&type=' + (type == null ? '' : encodeURIComponent(type)), {});
		}

		/**
		 * Permanently deletes all of the user's trashed files.
		 * Delete files/trash
		 * @param {string} driveId If set, empties the trash of the provided shared drive.
		 * @param {boolean} enforceSingleParent Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item is placed under its owner's root.
		 * @return {void} Successful response
		 */
		Drive_files_emptyTrash(driveId: string | null | undefined, enforceSingleParent: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'files/trash?driveId=' + (driveId == null ? '' : encodeURIComponent(driveId)) + '&enforceSingleParent=' + enforceSingleParent, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.
		 * Delete files/{fileId}
		 * @param {string} fileId The ID of the file to delete.
		 * @param {boolean} enforceSingleParent Deprecated: If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item is placed under its owner's root.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @return {void} Successful response
		 */
		Drive_files_delete(fileId: string, enforceSingleParent: boolean | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '&enforceSingleParent=' + enforceSingleParent + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a file's metadata or content by ID. If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/drive/api/reference/rest/v2/files/export) instead. For more information, see [Download & export files](/drive/api/guides/manage-downloads).
		 * Get files/{fileId}
		 * @param {string} fileId The ID for the file in question.
		 * @param {boolean} acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files.
		 * @param {string} includeLabels A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
		 * @param {string} includePermissionsForView Specifies which additional view's permissions to include in the response. Only `published` is supported.
		 * @param {Drive_files_listProjection} projection Deprecated: This parameter has no function.
		 * @param {string} revisionId Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @param {boolean} updateViewedDate Deprecated: Use `files.update` with `modifiedDateBehavior=noChange, updateViewedDate=true` and an empty request body.
		 * @return {File} Successful response
		 */
		Drive_files_get(fileId: string, acknowledgeAbuse: boolean | null | undefined, includeLabels: string | null | undefined, includePermissionsForView: string | null | undefined, projection: Drive_files_listProjection | null | undefined, revisionId: string | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, updateViewedDate: boolean | null | undefined): Observable<File> {
			return this.http.get<File>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '&acknowledgeAbuse=' + acknowledgeAbuse + '&includeLabels=' + (includeLabels == null ? '' : encodeURIComponent(includeLabels)) + '&includePermissionsForView=' + (includePermissionsForView == null ? '' : encodeURIComponent(includePermissionsForView)) + '&projection=' + projection + '&revisionId=' + (revisionId == null ? '' : encodeURIComponent(revisionId)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&updateViewedDate=' + updateViewedDate, {});
		}

		/**
		 * Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
		 * Patch files/{fileId}
		 * @param {string} fileId The ID of the file to update.
		 * @param {string} addParents Comma-separated list of parent IDs to add.
		 * @param {boolean} convert Deprecated: This parameter has no function.
		 * @param {boolean} enforceSingleParent Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead.
		 * @param {string} includeLabels A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
		 * @param {string} includePermissionsForView Specifies which additional view's permissions to include in the response. Only `published` is supported.
		 * @param {Drive_files_patchModifiedDateBehavior} modifiedDateBehavior Determines the behavior in which `modifiedDate` is updated. This overrides `setModifiedDate`.
		 * @param {boolean} newRevision Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the [Drive Help Center](https://support.google.com/drive/answer/2409045). Note that this field is ignored if there is no payload in the request.
		 * @param {boolean} ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
		 * @param {string} ocrLanguage If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
		 * @param {boolean} pinned Whether to pin the new revision. A file can have a maximum of 200 pinned revisions. Note that this field is ignored if there is no payload in the request.
		 * @param {string} removeParents Comma-separated list of parent IDs to remove.
		 * @param {boolean} setModifiedDate Whether to set the modified date using the value supplied in the request body. Setting this field to `true` is equivalent to `modifiedDateBehavior=fromBodyOrNow`, and `false` is equivalent to `modifiedDateBehavior=now`. To prevent any changes to the modified date set `modifiedDateBehavior=noChange`.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @param {string} timedTextLanguage The language of the timed text.
		 * @param {string} timedTextTrackName The timed text track name.
		 * @param {boolean} updateViewedDate Whether to update the view date after successfully updating the file.
		 * @param {boolean} useContentAsIndexableText Whether to use the content as indexable text.
		 * @return {File} Successful response
		 */
		Drive_files_patch(fileId: string, addParents: string | null | undefined, convert: boolean | null | undefined, enforceSingleParent: boolean | null | undefined, includeLabels: string | null | undefined, includePermissionsForView: string | null | undefined, modifiedDateBehavior: Drive_files_patchModifiedDateBehavior | null | undefined, newRevision: boolean | null | undefined, ocr: boolean | null | undefined, ocrLanguage: string | null | undefined, pinned: boolean | null | undefined, removeParents: string | null | undefined, setModifiedDate: boolean | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, timedTextLanguage: string | null | undefined, timedTextTrackName: string | null | undefined, updateViewedDate: boolean | null | undefined, useContentAsIndexableText: boolean | null | undefined, requestBody: File): Observable<File> {
			return this.http.patch<File>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '&addParents=' + (addParents == null ? '' : encodeURIComponent(addParents)) + '&convert=' + convert + '&enforceSingleParent=' + enforceSingleParent + '&includeLabels=' + (includeLabels == null ? '' : encodeURIComponent(includeLabels)) + '&includePermissionsForView=' + (includePermissionsForView == null ? '' : encodeURIComponent(includePermissionsForView)) + '&modifiedDateBehavior=' + modifiedDateBehavior + '&newRevision=' + newRevision + '&ocr=' + ocr + '&ocrLanguage=' + (ocrLanguage == null ? '' : encodeURIComponent(ocrLanguage)) + '&pinned=' + pinned + '&removeParents=' + (removeParents == null ? '' : encodeURIComponent(removeParents)) + '&setModifiedDate=' + setModifiedDate + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&timedTextLanguage=' + (timedTextLanguage == null ? '' : encodeURIComponent(timedTextLanguage)) + '&timedTextTrackName=' + (timedTextTrackName == null ? '' : encodeURIComponent(timedTextTrackName)) + '&updateViewedDate=' + updateViewedDate + '&useContentAsIndexableText=' + useContentAsIndexableText, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists a file's comments.
		 * Get files/{fileId}/comments
		 * @param {string} fileId The ID of the file.
		 * @param {boolean} includeDeleted If set, all comments and replies, including deleted comments and replies (with content stripped) will be returned.
		 * @param {number} maxResults The maximum number of discussions to include in the response, used for paging.
		 * @param {string} pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
		 * @param {string} updatedMin Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp.
		 * @return {CommentList} Successful response
		 */
		Drive_comments_list(fileId: string, includeDeleted: boolean | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, updatedMin: string | null | undefined): Observable<CommentList> {
			return this.http.get<CommentList>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments&includeDeleted=' + includeDeleted + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&updatedMin=' + (updatedMin == null ? '' : encodeURIComponent(updatedMin)), {});
		}

		/**
		 * Creates a new comment on the given file.
		 * Post files/{fileId}/comments
		 * @param {string} fileId The ID of the file.
		 * @return {Comment} Successful response
		 */
		Drive_comments_insert(fileId: string, requestBody: Comment): Observable<Comment> {
			return this.http.post<Comment>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @param {boolean} includeDeleted If set, this will succeed when retrieving a deleted comment, and will include any deleted replies.
		 * @return {Comment} Successful response
		 */
		Drive_comments_get(fileId: string, commentId: string, includeDeleted: boolean | null | undefined): Observable<Comment> {
			return this.http.get<Comment>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '&includeDeleted=' + includeDeleted, {});
		}

		/**
		 * Updates an existing comment.
		 * Patch files/{fileId}/comments/{commentId}
		 * @param {string} fileId The ID of the file.
		 * @param {string} commentId The ID of the comment.
		 * @return {Comment} Successful response
		 */
		Drive_comments_patch(fileId: string, commentId: string, requestBody: Comment): Observable<Comment> {
			return this.http.patch<Comment>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing comment.
		 * Put files/{fileId}/comments/{commentId}
		 * @param {string} fileId The ID of the file.
		 * @param {string} commentId The ID of the comment.
		 * @return {Comment} Successful response
		 */
		Drive_comments_update(fileId: string, commentId: string, requestBody: Comment): Observable<Comment> {
			return this.http.put<Comment>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the replies to a comment.
		 * Get files/{fileId}/comments/{commentId}/replies
		 * @param {string} fileId The ID of the file.
		 * @param {string} commentId The ID of the comment.
		 * @param {boolean} includeDeleted If set, all replies, including deleted replies (with content stripped) will be returned.
		 * @param {number} maxResults The maximum number of replies to include in the response, used for paging.
		 * @param {string} pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {CommentReplyList} Successful response
		 */
		Drive_replies_list(fileId: string, commentId: string, includeDeleted: boolean | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<CommentReplyList> {
			return this.http.get<CommentReplyList>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/replies&includeDeleted=' + includeDeleted + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new reply to the given comment.
		 * Post files/{fileId}/comments/{commentId}/replies
		 * @param {string} fileId The ID of the file.
		 * @param {string} commentId The ID of the comment.
		 * @return {CommentReply} Successful response
		 */
		Drive_replies_insert(fileId: string, commentId: string, requestBody: CommentReply): Observable<CommentReply> {
			return this.http.post<CommentReply>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/replies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Gets a reply.
		 * Get files/{fileId}/comments/{commentId}/replies/{replyId}
		 * @param {string} fileId The ID of the file.
		 * @param {string} commentId The ID of the comment.
		 * @param {string} replyId The ID of the reply.
		 * @param {boolean} includeDeleted If set, this will succeed when retrieving a deleted reply.
		 * @return {CommentReply} Successful response
		 */
		Drive_replies_get(fileId: string, commentId: string, replyId: string, includeDeleted: boolean | null | undefined): Observable<CommentReply> {
			return this.http.get<CommentReply>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/replies/' + (replyId == null ? '' : encodeURIComponent(replyId)) + '&includeDeleted=' + includeDeleted, {});
		}

		/**
		 * Updates an existing reply.
		 * Patch files/{fileId}/comments/{commentId}/replies/{replyId}
		 * @param {string} fileId The ID of the file.
		 * @param {string} commentId The ID of the comment.
		 * @param {string} replyId The ID of the reply.
		 * @return {CommentReply} Successful response
		 */
		Drive_replies_patch(fileId: string, commentId: string, replyId: string, requestBody: CommentReply): Observable<CommentReply> {
			return this.http.patch<CommentReply>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/replies/' + (replyId == null ? '' : encodeURIComponent(replyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing reply.
		 * Put files/{fileId}/comments/{commentId}/replies/{replyId}
		 * @param {string} fileId The ID of the file.
		 * @param {string} commentId The ID of the comment.
		 * @param {string} replyId The ID of the reply.
		 * @return {CommentReply} Successful response
		 */
		Drive_replies_update(fileId: string, commentId: string, replyId: string, requestBody: CommentReply): Observable<CommentReply> {
			return this.http.put<CommentReply>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/replies/' + (replyId == null ? '' : encodeURIComponent(replyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a copy of the specified file.
		 * Post files/{fileId}/copy
		 * @param {string} fileId The ID of the file to copy.
		 * @param {boolean} convert Whether to convert this file to the corresponding Docs Editors format.
		 * @param {boolean} enforceSingleParent Deprecated: Copying files into multiple folders is no longer supported. Use shortcuts instead.
		 * @param {string} includeLabels A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
		 * @param {string} includePermissionsForView Specifies which additional view's permissions to include in the response. Only `published` is supported.
		 * @param {boolean} ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
		 * @param {string} ocrLanguage If `ocr` is true, hints at the language to use. Valid values are BCP 47 codes.
		 * @param {boolean} pinned Whether to pin the head revision of the new copy. A file can have a maximum of 200 pinned revisions.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @param {string} timedTextLanguage The language of the timed text.
		 * @param {string} timedTextTrackName The timed text track name.
		 * @param {Drive_files_insertVisibility} visibility The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false.
		 * @return {File} Successful response
		 */
		Drive_files_copy(fileId: string, convert: boolean | null | undefined, enforceSingleParent: boolean | null | undefined, includeLabels: string | null | undefined, includePermissionsForView: string | null | undefined, ocr: boolean | null | undefined, ocrLanguage: string | null | undefined, pinned: boolean | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, timedTextLanguage: string | null | undefined, timedTextTrackName: string | null | undefined, visibility: Drive_files_insertVisibility | null | undefined, requestBody: File): Observable<File> {
			return this.http.post<File>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/copy&convert=' + convert + '&enforceSingleParent=' + enforceSingleParent + '&includeLabels=' + (includeLabels == null ? '' : encodeURIComponent(includeLabels)) + '&includePermissionsForView=' + (includePermissionsForView == null ? '' : encodeURIComponent(includePermissionsForView)) + '&ocr=' + ocr + '&ocrLanguage=' + (ocrLanguage == null ? '' : encodeURIComponent(ocrLanguage)) + '&pinned=' + pinned + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&timedTextLanguage=' + (timedTextLanguage == null ? '' : encodeURIComponent(timedTextLanguage)) + '&timedTextTrackName=' + (timedTextTrackName == null ? '' : encodeURIComponent(timedTextTrackName)) + '&visibility=' + visibility, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
		 * Get files/{fileId}/export
		 * @param {string} fileId The ID of the file.
		 * @param {string} mimeType Required. The MIME type of the format requested for this export.
		 * @return {void} Successful response
		 */
		Drive_files_export(fileId: string, mimeType: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/export&mimeType=' + (mimeType == null ? '' : encodeURIComponent(mimeType)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the labels on a file.
		 * Get files/{fileId}/listLabels
		 * @param {string} fileId The ID for the file.
		 * @param {number} maxResults The maximum number of labels to return per page. When not set, defaults to 100.
		 * @param {string} pageToken The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response.
		 * @return {LabelList} Successful response
		 */
		Drive_files_listLabels(fileId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<LabelList> {
			return this.http.get<LabelList>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/listLabels&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Modifies the set of labels applied to a file. Returns a list of the labels that were added or modified.
		 * Post files/{fileId}/modifyLabels
		 * @param {string} fileId The ID of the file to which the labels belong.
		 * @return {ModifyLabelsResponse} Successful response
		 */
		Drive_files_modifyLabels(fileId: string, requestBody: ModifyLabelsRequest): Observable<ModifyLabelsResponse> {
			return this.http.post<ModifyLabelsResponse>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/modifyLabels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists a file's parents.
		 * Get files/{fileId}/parents
		 * @param {string} fileId The ID of the file.
		 * @return {ParentList} Successful response
		 */
		Drive_parents_list(fileId: string): Observable<ParentList> {
			return this.http.get<ParentList>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/parents', {});
		}

		/**
		 * Adds a parent folder for a file.
		 * Post files/{fileId}/parents
		 * @param {string} fileId The ID of the file.
		 * @param {boolean} enforceSingleParent Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @return {ParentReference} Successful response
		 */
		Drive_parents_insert(fileId: string, enforceSingleParent: boolean | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, requestBody: ParentReference): Observable<ParentReference> {
			return this.http.post<ParentReference>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/parents&enforceSingleParent=' + enforceSingleParent + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a parent from a file.
		 * Delete files/{fileId}/parents/{parentId}
		 * @param {string} fileId The ID of the file.
		 * @param {string} parentId The ID of the parent.
		 * @param {boolean} enforceSingleParent Deprecated: If an item is not in a shared drive and its last parent is removed, the item is placed under its owner's root.
		 * @return {void} Successful response
		 */
		Drive_parents_delete(fileId: string, parentId: string, enforceSingleParent: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/parents/' + (parentId == null ? '' : encodeURIComponent(parentId)) + '&enforceSingleParent=' + enforceSingleParent, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a specific parent reference.
		 * Get files/{fileId}/parents/{parentId}
		 * @param {string} fileId The ID of the file.
		 * @param {string} parentId The ID of the parent.
		 * @return {ParentReference} Successful response
		 */
		Drive_parents_get(fileId: string, parentId: string): Observable<ParentReference> {
			return this.http.get<ParentReference>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/parents/' + (parentId == null ? '' : encodeURIComponent(parentId)), {});
		}

		/**
		 * Lists a file's or shared drive's permissions.
		 * Get files/{fileId}/permissions
		 * @param {string} fileId The ID for the file or shared drive.
		 * @param {string} includePermissionsForView Specifies which additional view's permissions to include in the response. Only `published` is supported.
		 * @param {number} maxResults The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.
		 * @param {string} pageToken The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
		 * @return {PermissionList} Successful response
		 */
		Drive_permissions_list(fileId: string, includePermissionsForView: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, useDomainAdminAccess: boolean | null | undefined): Observable<PermissionList> {
			return this.http.get<PermissionList>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/permissions&includePermissionsForView=' + (includePermissionsForView == null ? '' : encodeURIComponent(includePermissionsForView)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&useDomainAdminAccess=' + useDomainAdminAccess, {});
		}

		/**
		 * Inserts a permission for a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
		 * Post files/{fileId}/permissions
		 * @param {string} fileId The ID for the file or shared drive.
		 * @param {string} emailMessage A plain text custom message to include in notification emails.
		 * @param {boolean} enforceSingleParent Deprecated: See `moveToNewOwnersRoot` for details.
		 * @param {boolean} moveToNewOwnersRoot This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to `true`, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to `false`, parents are not changed.
		 * @param {boolean} sendNotificationEmails Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the `role` is `owner`.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
		 * @return {Permission} Successful response
		 */
		Drive_permissions_insert(fileId: string, emailMessage: string | null | undefined, enforceSingleParent: boolean | null | undefined, moveToNewOwnersRoot: boolean | null | undefined, sendNotificationEmails: boolean | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, useDomainAdminAccess: boolean | null | undefined, requestBody: Permission): Observable<Permission> {
			return this.http.post<Permission>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/permissions&emailMessage=' + (emailMessage == null ? '' : encodeURIComponent(emailMessage)) + '&enforceSingleParent=' + enforceSingleParent + '&moveToNewOwnersRoot=' + moveToNewOwnersRoot + '&sendNotificationEmails=' + sendNotificationEmails + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&useDomainAdminAccess=' + useDomainAdminAccess, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a permission from a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
		 * Delete files/{fileId}/permissions/{permissionId}
		 * @param {string} fileId The ID for the file or shared drive.
		 * @param {string} permissionId The ID for the permission.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
		 * @return {void} Successful response
		 */
		Drive_permissions_delete(fileId: string, permissionId: string, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, useDomainAdminAccess: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/permissions/' + (permissionId == null ? '' : encodeURIComponent(permissionId)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&useDomainAdminAccess=' + useDomainAdminAccess, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a permission by ID.
		 * Get files/{fileId}/permissions/{permissionId}
		 * @param {string} fileId The ID for the file or shared drive.
		 * @param {string} permissionId The ID for the permission.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
		 * @return {Permission} Successful response
		 */
		Drive_permissions_get(fileId: string, permissionId: string, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, useDomainAdminAccess: boolean | null | undefined): Observable<Permission> {
			return this.http.get<Permission>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/permissions/' + (permissionId == null ? '' : encodeURIComponent(permissionId)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&useDomainAdminAccess=' + useDomainAdminAccess, {});
		}

		/**
		 * Updates a permission using patch semantics. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
		 * Patch files/{fileId}/permissions/{permissionId}
		 * @param {string} fileId The ID for the file or shared drive.
		 * @param {string} permissionId The ID for the permission.
		 * @param {boolean} removeExpiration Whether to remove the expiration date.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @param {boolean} transferOwnership Whether changing a role to `owner` downgrades the current owners to writers. Does nothing if the specified role is not `owner`.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
		 * @return {Permission} Successful response
		 */
		Drive_permissions_patch(fileId: string, permissionId: string, removeExpiration: boolean | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, transferOwnership: boolean | null | undefined, useDomainAdminAccess: boolean | null | undefined, requestBody: Permission): Observable<Permission> {
			return this.http.patch<Permission>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/permissions/' + (permissionId == null ? '' : encodeURIComponent(permissionId)) + '&removeExpiration=' + removeExpiration + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&transferOwnership=' + transferOwnership + '&useDomainAdminAccess=' + useDomainAdminAccess, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a permission. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
		 * Put files/{fileId}/permissions/{permissionId}
		 * @param {string} fileId The ID for the file or shared drive.
		 * @param {string} permissionId The ID for the permission.
		 * @param {boolean} removeExpiration Whether to remove the expiration date.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @param {boolean} transferOwnership Whether changing a role to `owner` downgrades the current owners to writers. Does nothing if the specified role is not `owner`.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
		 * @return {Permission} Successful response
		 */
		Drive_permissions_update(fileId: string, permissionId: string, removeExpiration: boolean | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, transferOwnership: boolean | null | undefined, useDomainAdminAccess: boolean | null | undefined, requestBody: Permission): Observable<Permission> {
			return this.http.put<Permission>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/permissions/' + (permissionId == null ? '' : encodeURIComponent(permissionId)) + '&removeExpiration=' + removeExpiration + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&transferOwnership=' + transferOwnership + '&useDomainAdminAccess=' + useDomainAdminAccess, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists a file's properties.
		 * Get files/{fileId}/properties
		 * @param {string} fileId The ID of the file.
		 * @return {PropertyList} Successful response
		 */
		Drive_properties_list(fileId: string): Observable<PropertyList> {
			return this.http.get<PropertyList>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/properties', {});
		}

		/**
		 * Adds a property to a file, or updates it if it already exists.
		 * Post files/{fileId}/properties
		 * @param {string} fileId The ID of the file.
		 * @return {Property} Successful response
		 */
		Drive_properties_insert(fileId: string, requestBody: Property): Observable<Property> {
			return this.http.post<Property>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/properties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a property.
		 * Delete files/{fileId}/properties/{propertyKey}
		 * @param {string} fileId The ID of the file.
		 * @param {string} propertyKey The key of the property.
		 * @param {string} visibility The visibility of the property.
		 * @return {void} Successful response
		 */
		Drive_properties_delete(fileId: string, propertyKey: string, visibility: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)) + '&visibility=' + (visibility == null ? '' : encodeURIComponent(visibility)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a property by its key.
		 * Get files/{fileId}/properties/{propertyKey}
		 * @param {string} fileId The ID of the file.
		 * @param {string} propertyKey The key of the property.
		 * @param {string} visibility The visibility of the property.
		 * @return {Property} Successful response
		 */
		Drive_properties_get(fileId: string, propertyKey: string, visibility: string | null | undefined): Observable<Property> {
			return this.http.get<Property>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)) + '&visibility=' + (visibility == null ? '' : encodeURIComponent(visibility)), {});
		}

		/**
		 * Updates a property.
		 * Patch files/{fileId}/properties/{propertyKey}
		 * @param {string} fileId The ID of the file.
		 * @param {string} propertyKey The key of the property.
		 * @param {string} visibility The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE)
		 * @return {Property} Successful response
		 */
		Drive_properties_patch(fileId: string, propertyKey: string, visibility: string | null | undefined, requestBody: Property): Observable<Property> {
			return this.http.patch<Property>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)) + '&visibility=' + (visibility == null ? '' : encodeURIComponent(visibility)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a property.
		 * Put files/{fileId}/properties/{propertyKey}
		 * @param {string} fileId The ID of the file.
		 * @param {string} propertyKey The key of the property.
		 * @param {string} visibility The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE)
		 * @return {Property} Successful response
		 */
		Drive_properties_update(fileId: string, propertyKey: string, visibility: string | null | undefined, requestBody: Property): Observable<Property> {
			return this.http.put<Property>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/properties/' + (propertyKey == null ? '' : encodeURIComponent(propertyKey)) + '&visibility=' + (visibility == null ? '' : encodeURIComponent(visibility)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists a file's revisions.
		 * Get files/{fileId}/revisions
		 * @param {string} fileId The ID of the file.
		 * @param {number} maxResults Maximum number of revisions to return.
		 * @param {string} pageToken Page token for revisions. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {RevisionList} Successful response
		 */
		Drive_revisions_list(fileId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<RevisionList> {
			return this.http.get<RevisionList>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/revisions&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
		 * Delete files/{fileId}/revisions/{revisionId}
		 * @param {string} fileId The ID of the file.
		 * @param {string} revisionId The ID of the revision.
		 * @return {void} Successful response
		 */
		Drive_revisions_delete(fileId: string, revisionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/revisions/' + (revisionId == null ? '' : encodeURIComponent(revisionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a specific revision.
		 * Get files/{fileId}/revisions/{revisionId}
		 * @param {string} fileId The ID of the file.
		 * @param {string} revisionId The ID of the revision.
		 * @return {Revision} Successful response
		 */
		Drive_revisions_get(fileId: string, revisionId: string): Observable<Revision> {
			return this.http.get<Revision>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/revisions/' + (revisionId == null ? '' : encodeURIComponent(revisionId)), {});
		}

		/**
		 * Updates a revision.
		 * Patch files/{fileId}/revisions/{revisionId}
		 * @param {string} fileId The ID for the file.
		 * @param {string} revisionId The ID for the revision.
		 * @return {Revision} Successful response
		 */
		Drive_revisions_patch(fileId: string, revisionId: string, requestBody: Revision): Observable<Revision> {
			return this.http.patch<Revision>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/revisions/' + (revisionId == null ? '' : encodeURIComponent(revisionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a revision.
		 * Put files/{fileId}/revisions/{revisionId}
		 * @param {string} fileId The ID for the file.
		 * @param {string} revisionId The ID for the revision.
		 * @return {Revision} Successful response
		 */
		Drive_revisions_update(fileId: string, revisionId: string, requestBody: Revision): Observable<Revision> {
			return this.http.put<Revision>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/revisions/' + (revisionId == null ? '' : encodeURIComponent(revisionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Set the file's updated time to the current server time.
		 * Post files/{fileId}/touch
		 * @param {string} fileId The ID of the file to update.
		 * @param {string} includeLabels A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
		 * @param {string} includePermissionsForView Specifies which additional view's permissions to include in the response. Only `published` is supported.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @return {File} Successful response
		 */
		Drive_files_touch(fileId: string, includeLabels: string | null | undefined, includePermissionsForView: string | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined): Observable<File> {
			return this.http.post<File>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/touch&includeLabels=' + (includeLabels == null ? '' : encodeURIComponent(includeLabels)) + '&includePermissionsForView=' + (includePermissionsForView == null ? '' : encodeURIComponent(includePermissionsForView)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives, null, {});
		}

		/**
		 * Moves a file to the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.
		 * Post files/{fileId}/trash
		 * @param {string} fileId The ID of the file to trash.
		 * @param {string} includeLabels A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
		 * @param {string} includePermissionsForView Specifies which additional view's permissions to include in the response. Only `published` is supported.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @return {File} Successful response
		 */
		Drive_files_trash(fileId: string, includeLabels: string | null | undefined, includePermissionsForView: string | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined): Observable<File> {
			return this.http.post<File>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/trash&includeLabels=' + (includeLabels == null ? '' : encodeURIComponent(includeLabels)) + '&includePermissionsForView=' + (includePermissionsForView == null ? '' : encodeURIComponent(includePermissionsForView)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives, null, {});
		}

		/**
		 * Restores a file from the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.
		 * Post files/{fileId}/untrash
		 * @param {string} fileId The ID of the file to untrash.
		 * @param {string} includeLabels A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
		 * @param {string} includePermissionsForView Specifies which additional view's permissions to include in the response. Only `published` is supported.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @return {File} Successful response
		 */
		Drive_files_untrash(fileId: string, includeLabels: string | null | undefined, includePermissionsForView: string | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined): Observable<File> {
			return this.http.post<File>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/untrash&includeLabels=' + (includeLabels == null ? '' : encodeURIComponent(includeLabels)) + '&includePermissionsForView=' + (includePermissionsForView == null ? '' : encodeURIComponent(includePermissionsForView)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives, null, {});
		}

		/**
		 * Subscribes to changes to a file.
		 * Post files/{fileId}/watch
		 * @param {string} fileId The ID for the file in question.
		 * @param {boolean} acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files.
		 * @param {string} includeLabels A comma-separated list of IDs of labels to include in the `labelInfo` part of the response.
		 * @param {string} includePermissionsForView Specifies which additional view's permissions to include in the response. Only `published` is supported.
		 * @param {Drive_files_listProjection} projection Deprecated: This parameter has no function.
		 * @param {string} revisionId Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @param {boolean} updateViewedDate Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body.
		 * @return {Channel} Successful response
		 */
		Drive_files_watch(fileId: string, acknowledgeAbuse: boolean | null | undefined, includeLabels: string | null | undefined, includePermissionsForView: string | null | undefined, projection: Drive_files_listProjection | null | undefined, revisionId: string | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, updateViewedDate: boolean | null | undefined, requestBody: Channel): Observable<Channel> {
			return this.http.post<Channel>(this.baseUri + 'files/' + (fileId == null ? '' : encodeURIComponent(fileId)) + '/watch&acknowledgeAbuse=' + acknowledgeAbuse + '&includeLabels=' + (includeLabels == null ? '' : encodeURIComponent(includeLabels)) + '&includePermissionsForView=' + (includePermissionsForView == null ? '' : encodeURIComponent(includePermissionsForView)) + '&projection=' + projection + '&revisionId=' + (revisionId == null ? '' : encodeURIComponent(revisionId)) + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives + '&updateViewedDate=' + updateViewedDate, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists a folder's children.
		 * Get files/{folderId}/children
		 * @param {string} folderId The ID of the folder.
		 * @param {number} maxResults Maximum number of children to return.
		 * @param {string} orderBy A comma-separated list of sort keys. Valid keys are `createdDate`, `folder`, `lastViewedByMeDate`, `modifiedByMeDate`, `modifiedDate`, `quotaBytesUsed`, `recency`, `sharedWithMeDate`, `starred`, and `title`. Each key sorts ascending by default, but may be reversed with the `desc` modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
		 * @param {string} pageToken Page token for children.
		 * @param {string} q Query string for searching children.
		 * @return {ChildList} Successful response
		 */
		Drive_children_list(folderId: string, maxResults: number | null | undefined, orderBy: string | null | undefined, pageToken: string | null | undefined, q: string | null | undefined): Observable<ChildList> {
			return this.http.get<ChildList>(this.baseUri + 'files/' + (folderId == null ? '' : encodeURIComponent(folderId)) + '/children&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Inserts a file into a folder.
		 * Post files/{folderId}/children
		 * @param {string} folderId The ID of the folder.
		 * @param {boolean} enforceSingleParent Deprecated: Adding files to multiple folders is no longer supported. Use `shortcuts` instead.
		 * @param {boolean} supportsAllDrives Whether the requesting application supports both My Drives and shared drives.
		 * @param {boolean} supportsTeamDrives Deprecated: Use `supportsAllDrives` instead.
		 * @return {ChildReference} Successful response
		 */
		Drive_children_insert(folderId: string, enforceSingleParent: boolean | null | undefined, supportsAllDrives: boolean | null | undefined, supportsTeamDrives: boolean | null | undefined, requestBody: ChildReference): Observable<ChildReference> {
			return this.http.post<ChildReference>(this.baseUri + 'files/' + (folderId == null ? '' : encodeURIComponent(folderId)) + '/children&enforceSingleParent=' + enforceSingleParent + '&supportsAllDrives=' + supportsAllDrives + '&supportsTeamDrives=' + supportsTeamDrives, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a child from a folder.
		 * Delete files/{folderId}/children/{childId}
		 * @param {string} folderId The ID of the folder.
		 * @param {string} childId The ID of the child.
		 * @param {boolean} enforceSingleParent Deprecated: If an item is not in a shared drive and its last parent is removed, the item is placed under its owner's root.
		 * @return {void} Successful response
		 */
		Drive_children_delete(folderId: string, childId: string, enforceSingleParent: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'files/' + (folderId == null ? '' : encodeURIComponent(folderId)) + '/children/' + (childId == null ? '' : encodeURIComponent(childId)) + '&enforceSingleParent=' + enforceSingleParent, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a specific child reference.
		 * Get files/{folderId}/children/{childId}
		 * @param {string} folderId The ID of the folder.
		 * @param {string} childId The ID of the child.
		 * @return {ChildReference} Successful response
		 */
		Drive_children_get(folderId: string, childId: string): Observable<ChildReference> {
			return this.http.get<ChildReference>(this.baseUri + 'files/' + (folderId == null ? '' : encodeURIComponent(folderId)) + '/children/' + (childId == null ? '' : encodeURIComponent(childId)), {});
		}

		/**
		 * Returns the permission ID for an email address.
		 * Get permissionIds/{email}
		 * @param {string} email The email address for which to return a permission ID
		 * @return {PermissionId} Successful response
		 */
		Drive_permissions_getIdForEmail(email: string): Observable<PermissionId> {
			return this.http.get<PermissionId>(this.baseUri + 'permissionIds/' + (email == null ? '' : encodeURIComponent(email)), {});
		}

		/**
		 * Deprecated: Use `drives.list` instead.
		 * Get teamdrives
		 * @param {number} maxResults Maximum number of Team Drives to return.
		 * @param {string} pageToken Page token for Team Drives.
		 * @param {string} q Query string for searching Team Drives.
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned.
		 * @return {TeamDriveList} Successful response
		 */
		Drive_teamdrives_list(maxResults: number | null | undefined, pageToken: string | null | undefined, q: string | null | undefined, useDomainAdminAccess: boolean | null | undefined): Observable<TeamDriveList> {
			return this.http.get<TeamDriveList>(this.baseUri + 'teamdrives?maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&useDomainAdminAccess=' + useDomainAdminAccess, {});
		}

		/**
		 * Deprecated: Use `drives.insert` instead.
		 * Post teamdrives
		 * @param {string} requestId Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
		 * @return {TeamDrive} Successful response
		 */
		Drive_teamdrives_insert(requestId: string, requestBody: TeamDrive): Observable<TeamDrive> {
			return this.http.post<TeamDrive>(this.baseUri + 'teamdrives?requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deprecated: Use `drives.delete` instead.
		 * Delete teamdrives/{teamDriveId}
		 * @param {string} teamDriveId The ID of the Team Drive
		 * @return {void} Successful response
		 */
		Drive_teamdrives_delete(teamDriveId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'teamdrives/' + (teamDriveId == null ? '' : encodeURIComponent(teamDriveId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deprecated: Use `drives.get` instead.
		 * Get teamdrives/{teamDriveId}
		 * @param {string} teamDriveId The ID of the Team Drive
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
		 * @return {TeamDrive} Successful response
		 */
		Drive_teamdrives_get(teamDriveId: string, useDomainAdminAccess: boolean | null | undefined): Observable<TeamDrive> {
			return this.http.get<TeamDrive>(this.baseUri + 'teamdrives/' + (teamDriveId == null ? '' : encodeURIComponent(teamDriveId)) + '&useDomainAdminAccess=' + useDomainAdminAccess, {});
		}

		/**
		 * Deprecated: Use `drives.update` instead.
		 * Put teamdrives/{teamDriveId}
		 * @param {string} teamDriveId The ID of the Team Drive
		 * @param {boolean} useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
		 * @return {TeamDrive} Successful response
		 */
		Drive_teamdrives_update(teamDriveId: string, useDomainAdminAccess: boolean | null | undefined, requestBody: TeamDrive): Observable<TeamDrive> {
			return this.http.put<TeamDrive>(this.baseUri + 'teamdrives/' + (teamDriveId == null ? '' : encodeURIComponent(teamDriveId)) + '&useDomainAdminAccess=' + useDomainAdminAccess, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Drive_files_listCorpus { DEFAULT = 0, DOMAIN = 1 }

	export enum Drive_files_listProjection { BASIC = 0, FULL = 1 }

	export enum Drive_files_insertVisibility { DEFAULT = 0, PRIVATE = 1 }

	export enum Drive_files_patchModifiedDateBehavior { fromBody = 0, fromBodyIfNeeded = 1, fromBodyOrNow = 2, noChange = 3, now = 4, nowIfNeeded = 5 }

}

