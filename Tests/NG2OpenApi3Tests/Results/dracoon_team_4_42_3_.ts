import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Active Directory information */
	export interface ActiveDirectory {

		/**
		 * Unique name for an Active Directory configuration
		 * Required
		 */
		alias: string;

		/**
		 * ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;

		/**
		 * Is available for all customers
		 * Required
		 */
		isGlobalAvailable: boolean;
	}

	/** Active Directory information */
	export interface ActiveDirectoryFormProperties {

		/**
		 * Unique name for an Active Directory configuration
		 * Required
		 */
		alias: FormControl<string | null | undefined>,

		/**
		 * ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Is available for all customers
		 * Required
		 */
		isGlobalAvailable: FormControl<boolean | null | undefined>,
	}
	export function CreateActiveDirectoryFormGroup() {
		return new FormGroup<ActiveDirectoryFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isGlobalAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of Active Directories */
	export interface ActiveDirectoryAuthInfo {

		/**
		 * List of available Active Directories
		 * Required
		 */
		items: Array<ActiveDirectory>;
	}

	/** List of Active Directories */
	export interface ActiveDirectoryAuthInfoFormProperties {
	}
	export function CreateActiveDirectoryAuthInfoFormGroup() {
		return new FormGroup<ActiveDirectoryAuthInfoFormProperties>({
		});

	}


	/** Active Directory configuration */
	export interface ActiveDirectoryConfig {

		/**
		 * If `userImport` is set to `true`,
		 * the user must be member of this Active Directory group to receive a newly created DRACOON account.
		 * Required
		 */
		adExportGroup: string;

		/**
		 * Unique name for an Active Directory configuration
		 * Required
		 */
		alias: string;

		/**
		 * &#128679; Deprecated since v4.10.0
		 * DEPRECATED, will be ignored
		 * Determines whether a room is created for each user that is created by automatic import (like a home folder).
		 * Room's name will equal the user's login name.
		 */
		createHomeFolder?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.10.0
		 * DEPRECATED, will be ignored
		 * ID of the room in which the individual rooms for users will be created.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeFolderParent?: string | null;

		/**
		 * ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;

		/**
		 * Search scope of Active Directory; only users below this node can log on.
		 * Required
		 */
		ldapUsersDomain: string;

		/**
		 * User group that is assigned to users who are created by automatic import.
		 * Reset with `0`
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sdsImportGroup?: string | null;

		/**
		 * Distinguished Name (DN) of Active Directory administrative account
		 * Required
		 */
		serverAdminName: string;

		/**
		 * IPv4 or IPv6 address or host name
		 * Required
		 */
		serverIp: string;

		/**
		 * Port
		 * Required
		 * Minimum: 0
		 * Maximum: 65535
		 */
		serverPort: number;

		/**
		 * SSL finger print of Active Directory server.
		 * Mandatory for LDAPS connections.
		 * Format: `Algorithm/Fingerprint`
		 */
		sslFingerPrint?: string | null;

		/**
		 * Determines whether LDAPS should be used instead of plain LDAP.
		 * Required
		 */
		useLdaps: boolean;

		/**
		 * Name of Active Directory attribute that is used as login name.
		 * Required
		 */
		userFilter: string;

		/**
		 * Determines if a DRACOON account is automatically created for a new user
		 * who successfully logs on with his / her AD / IDP account.
		 * Required
		 */
		userImport: boolean;
	}

	/** Active Directory configuration */
	export interface ActiveDirectoryConfigFormProperties {

		/**
		 * If `userImport` is set to `true`,
		 * the user must be member of this Active Directory group to receive a newly created DRACOON account.
		 * Required
		 */
		adExportGroup: FormControl<string | null | undefined>,

		/**
		 * Unique name for an Active Directory configuration
		 * Required
		 */
		alias: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.10.0
		 * DEPRECATED, will be ignored
		 * Determines whether a room is created for each user that is created by automatic import (like a home folder).
		 * Room's name will equal the user's login name.
		 */
		createHomeFolder: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.10.0
		 * DEPRECATED, will be ignored
		 * ID of the room in which the individual rooms for users will be created.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeFolderParent: FormControl<string | null | undefined>,

		/**
		 * ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Search scope of Active Directory; only users below this node can log on.
		 * Required
		 */
		ldapUsersDomain: FormControl<string | null | undefined>,

		/**
		 * User group that is assigned to users who are created by automatic import.
		 * Reset with `0`
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sdsImportGroup: FormControl<string | null | undefined>,

		/**
		 * Distinguished Name (DN) of Active Directory administrative account
		 * Required
		 */
		serverAdminName: FormControl<string | null | undefined>,

		/**
		 * IPv4 or IPv6 address or host name
		 * Required
		 */
		serverIp: FormControl<string | null | undefined>,

		/**
		 * Port
		 * Required
		 * Minimum: 0
		 * Maximum: 65535
		 */
		serverPort: FormControl<number | null | undefined>,

		/**
		 * SSL finger print of Active Directory server.
		 * Mandatory for LDAPS connections.
		 * Format: `Algorithm/Fingerprint`
		 */
		sslFingerPrint: FormControl<string | null | undefined>,

		/**
		 * Determines whether LDAPS should be used instead of plain LDAP.
		 * Required
		 */
		useLdaps: FormControl<boolean | null | undefined>,

		/**
		 * Name of Active Directory attribute that is used as login name.
		 * Required
		 */
		userFilter: FormControl<string | null | undefined>,

		/**
		 * Determines if a DRACOON account is automatically created for a new user
		 * who successfully logs on with his / her AD / IDP account.
		 * Required
		 */
		userImport: FormControl<boolean | null | undefined>,
	}
	export function CreateActiveDirectoryConfigFormGroup() {
		return new FormGroup<ActiveDirectoryConfigFormProperties>({
			adExportGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			alias: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createHomeFolder: new FormControl<boolean | null | undefined>(undefined),
			homeFolderParent: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ldapUsersDomain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sdsImportGroup: new FormControl<string | null | undefined>(undefined),
			serverAdminName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverPort: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(65535)]),
			sslFingerPrint: new FormControl<string | null | undefined>(undefined),
			useLdaps: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			userFilter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userImport: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of Active Directory configurations */
	export interface ActiveDirectoryConfigList {

		/**
		 * List of Active Directory configurations
		 * Required
		 */
		items: Array<ActiveDirectoryConfig>;
	}

	/** List of Active Directory configurations */
	export interface ActiveDirectoryConfigListFormProperties {
	}
	export function CreateActiveDirectoryConfigListFormGroup() {
		return new FormGroup<ActiveDirectoryConfigListFormProperties>({
		});

	}


	/** Algorithm information */
	export interface AlgorithmVersionInfo {

		/**
		 * Algorithm description
		 * Required
		 */
		description: string;

		/**
		 * Algorithm status
		 * Derived from preference value and threshold
		 * Required
		 */
		status: AlgorithmVersionInfoStatus;

		/**
		 * Algorithm version
		 * Required
		 */
		version: string;
	}

	/** Algorithm information */
	export interface AlgorithmVersionInfoFormProperties {

		/**
		 * Algorithm description
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Algorithm status
		 * Derived from preference value and threshold
		 * Required
		 */
		status: FormControl<AlgorithmVersionInfoStatus | null | undefined>,

		/**
		 * Algorithm version
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateAlgorithmVersionInfoFormGroup() {
		return new FormGroup<AlgorithmVersionInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<AlgorithmVersionInfoStatus | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AlgorithmVersionInfoStatus { REQUIRED = 'REQUIRED', DISCOURAGED = 'DISCOURAGED' }


	/** Information of all available algorithms */
	export interface AlgorithmVersionInfoList {

		/**
		 * List of file key algorithms
		 * Required
		 */
		fileKeyAlgorithms: Array<AlgorithmVersionInfo>;

		/**
		 * List of key pair algorithms
		 * Required
		 */
		keyPairAlgorithms: Array<AlgorithmVersionInfo>;
	}

	/** Information of all available algorithms */
	export interface AlgorithmVersionInfoListFormProperties {
	}
	export function CreateAlgorithmVersionInfoListFormGroup() {
		return new FormGroup<AlgorithmVersionInfoListFormProperties>({
		});

	}


	/** Ranged list of attributes */
	export interface AttributesResponse {

		/**
		 * List of key-value pairs
		 * Required
		 */
		items: Array<KeyValueEntry>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** Ranged list of attributes */
	export interface AttributesResponseFormProperties {
	}
	export function CreateAttributesResponseFormGroup() {
		return new FormGroup<AttributesResponseFormProperties>({
		});

	}


	/** Key-value pair */
	export interface KeyValueEntry {

		/**
		 * Entry key
		 * Required
		 */
		key: string;

		/**
		 * Entry value
		 * Required
		 */
		value: string;
	}

	/** Key-value pair */
	export interface KeyValueEntryFormProperties {

		/**
		 * Entry key
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Entry value
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateKeyValueEntryFormGroup() {
		return new FormGroup<KeyValueEntryFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Range information */
	export interface Range {

		/**
		 * Range limit. Maximum 500.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		limit: string;

		/**
		 * Range offset
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		offset: string;

		/**
		 * Total items available
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		total: string;
	}

	/** Range information */
	export interface RangeFormProperties {

		/**
		 * Range limit. Maximum 500.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		limit: FormControl<string | null | undefined>,

		/**
		 * Range offset
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		offset: FormControl<string | null | undefined>,

		/**
		 * Total items available
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		total: FormControl<string | null | undefined>,
	}
	export function CreateRangeFormGroup() {
		return new FormGroup<RangeFormProperties>({
			limit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Audit node info */
	export interface AuditNodeInfo {

		/**
		 * Number of direct children
		 * (no recursion; for rooms only)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		countChildren?: string | null;

		/**
		 * Node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nodeId: string;

		/** Encryption state */
		nodeIsEncrypted?: boolean | null;

		/**
		 * Node name
		 * Required
		 */
		nodeName: string;

		/**
		 * Parent room ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nodeParentId?: string | null;

		/**
		 * Parent node path
		 * `/` if node is a root node (room)
		 * Required
		 */
		nodeParentPath: string;
	}

	/** Audit node info */
	export interface AuditNodeInfoFormProperties {

		/**
		 * Number of direct children
		 * (no recursion; for rooms only)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		countChildren: FormControl<string | null | undefined>,

		/**
		 * Node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nodeId: FormControl<string | null | undefined>,

		/** Encryption state */
		nodeIsEncrypted: FormControl<boolean | null | undefined>,

		/**
		 * Node name
		 * Required
		 */
		nodeName: FormControl<string | null | undefined>,

		/**
		 * Parent room ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nodeParentId: FormControl<string | null | undefined>,

		/**
		 * Parent node path
		 * `/` if node is a root node (room)
		 * Required
		 */
		nodeParentPath: FormControl<string | null | undefined>,
	}
	export function CreateAuditNodeInfoFormGroup() {
		return new FormGroup<AuditNodeInfoFormProperties>({
			countChildren: new FormControl<string | null | undefined>(undefined),
			nodeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nodeIsEncrypted: new FormControl<boolean | null | undefined>(undefined),
			nodeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nodeParentId: new FormControl<string | null | undefined>(undefined),
			nodeParentPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AuditNodeInfoResponse {

		/**
		 * List of audit node info items
		 * Required
		 */
		items: Array<AuditNodeInfo>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}
	export interface AuditNodeInfoResponseFormProperties {
	}
	export function CreateAuditNodeInfoResponseFormGroup() {
		return new FormGroup<AuditNodeInfoResponseFormProperties>({
		});

	}


	/** Audit node report */
	export interface AuditNodeResponse {

		/**
		 * List of assigned users with permissions
		 * Required
		 */
		auditUserPermissionList: Array<AuditUserPermission>;

		/**
		 * Number of direct children
		 * (no recursion; for rooms only)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nodeCntChildren: number;

		/** Creation date */
		nodeCreatedAt?: Date | null;

		/** User information */
		nodeCreatedBy?: UserInfo;

		/** Is activities log active (for rooms only) */
		nodeHasActivitiesLog?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.10.0
		 * Is recycle bin active (for rooms only)
		 * Recycle bin is always on (disabling is not possible).
		 */
		nodeHasRecycleBin?: boolean | null;

		/**
		 * Node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nodeId: string;

		/** Encryption state */
		nodeIsEncrypted?: boolean | null;

		/**
		 * Node name
		 * Required
		 */
		nodeName: string;

		/**
		 * Parent node ID (room or folder)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nodeParentId?: string | null;

		/**
		 * Parent node path
		 * `/` if node is a root node (room)
		 * Required
		 */
		nodeParentPath: string;

		/**
		 * Quota in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nodeQuota?: string | null;

		/**
		 * Retention period for deleted nodes in days
		 * Minimum: 0
		 * Maximum: 9999
		 */
		nodeRecycleBinRetentionPeriod?: number | null;

		/**
		 * Node size in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nodeSize?: string | null;

		/** Modification date */
		nodeUpdatedAt?: Date | null;

		/** User information */
		nodeUpdatedBy?: UserInfo;
	}

	/** Audit node report */
	export interface AuditNodeResponseFormProperties {

		/**
		 * Number of direct children
		 * (no recursion; for rooms only)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nodeCntChildren: FormControl<number | null | undefined>,

		/** Creation date */
		nodeCreatedAt: FormControl<Date | null | undefined>,

		/** Is activities log active (for rooms only) */
		nodeHasActivitiesLog: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.10.0
		 * Is recycle bin active (for rooms only)
		 * Recycle bin is always on (disabling is not possible).
		 */
		nodeHasRecycleBin: FormControl<boolean | null | undefined>,

		/**
		 * Node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nodeId: FormControl<string | null | undefined>,

		/** Encryption state */
		nodeIsEncrypted: FormControl<boolean | null | undefined>,

		/**
		 * Node name
		 * Required
		 */
		nodeName: FormControl<string | null | undefined>,

		/**
		 * Parent node ID (room or folder)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nodeParentId: FormControl<string | null | undefined>,

		/**
		 * Parent node path
		 * `/` if node is a root node (room)
		 * Required
		 */
		nodeParentPath: FormControl<string | null | undefined>,

		/**
		 * Quota in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nodeQuota: FormControl<string | null | undefined>,

		/**
		 * Retention period for deleted nodes in days
		 * Minimum: 0
		 * Maximum: 9999
		 */
		nodeRecycleBinRetentionPeriod: FormControl<number | null | undefined>,

		/**
		 * Node size in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nodeSize: FormControl<string | null | undefined>,

		/** Modification date */
		nodeUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateAuditNodeResponseFormGroup() {
		return new FormGroup<AuditNodeResponseFormProperties>({
			nodeCntChildren: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			nodeCreatedAt: new FormControl<Date | null | undefined>(undefined),
			nodeHasActivitiesLog: new FormControl<boolean | null | undefined>(undefined),
			nodeHasRecycleBin: new FormControl<boolean | null | undefined>(undefined),
			nodeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nodeIsEncrypted: new FormControl<boolean | null | undefined>(undefined),
			nodeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nodeParentId: new FormControl<string | null | undefined>(undefined),
			nodeParentPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nodeQuota: new FormControl<string | null | undefined>(undefined),
			nodeRecycleBinRetentionPeriod: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(9999)]),
			nodeSize: new FormControl<string | null | undefined>(undefined),
			nodeUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Audit user permissions report */
	export interface AuditUserPermission {

		/**
		 * Node permissions
		 * Required
		 */
		permissions: NodePermissions;

		/**
		 * User first name
		 * Required
		 */
		userFirstName: string;

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userId: string;

		/**
		 * User last name
		 * Required
		 */
		userLastName: string;

		/**
		 * User login name
		 * Required
		 */
		userLogin: string;
	}

	/** Audit user permissions report */
	export interface AuditUserPermissionFormProperties {

		/**
		 * User first name
		 * Required
		 */
		userFirstName: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userId: FormControl<string | null | undefined>,

		/**
		 * User last name
		 * Required
		 */
		userLastName: FormControl<string | null | undefined>,

		/**
		 * User login name
		 * Required
		 */
		userLogin: FormControl<string | null | undefined>,
	}
	export function CreateAuditUserPermissionFormGroup() {
		return new FormGroup<AuditUserPermissionFormProperties>({
			userFirstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userLastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userLogin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Node permissions */
	export interface NodePermissions {

		/**
		 * User / Group may update metadata of nodes: rename files and folders, change classification, etc.
		 * Required
		 */
		change: boolean;

		/**
		 * User / Group may upload files, create folders and copy / move files to this room, overwriting is not possible.
		 * Required
		 */
		create: boolean;

		/**
		 * User / Group may overwrite and remove files / folders, move files from this room.
		 * Required
		 */
		delete: boolean;

		/**
		 * User / Group may permanently remove files / folders from the recycle bin.
		 * Required
		 */
		deleteRecycleBin: boolean;

		/**
		 * User / Group may grant all of the above permissions to other users and groups independently,
		 * may update room metadata and create / update / delete subordinary rooms, has all permissions.
		 * Required
		 */
		manage: boolean;

		/**
		 * User / Group may create Download Shares for files and containers view all previously created Download Shares in this room.
		 * Required
		 */
		manageDownloadShare: boolean;

		/**
		 * User / Group may create Upload Shares for containers, view all previously created Upload Shares in this room.
		 * Required
		 */
		manageUploadShare: boolean;

		/**
		 * User / Group may see all rooms, files and folders in the room and download everything, copy files from this room.
		 * Required
		 */
		read: boolean;

		/**
		 * User / Group may look up files / folders in the recycle bin.
		 * Required
		 */
		readRecycleBin: boolean;

		/**
		 * User / Group may restore files / folders from recycle bin - room permissions required.
		 * Required
		 */
		restoreRecycleBin: boolean;
	}

	/** Node permissions */
	export interface NodePermissionsFormProperties {

		/**
		 * User / Group may update metadata of nodes: rename files and folders, change classification, etc.
		 * Required
		 */
		change: FormControl<boolean | null | undefined>,

		/**
		 * User / Group may upload files, create folders and copy / move files to this room, overwriting is not possible.
		 * Required
		 */
		create: FormControl<boolean | null | undefined>,

		/**
		 * User / Group may overwrite and remove files / folders, move files from this room.
		 * Required
		 */
		delete: FormControl<boolean | null | undefined>,

		/**
		 * User / Group may permanently remove files / folders from the recycle bin.
		 * Required
		 */
		deleteRecycleBin: FormControl<boolean | null | undefined>,

		/**
		 * User / Group may grant all of the above permissions to other users and groups independently,
		 * may update room metadata and create / update / delete subordinary rooms, has all permissions.
		 * Required
		 */
		manage: FormControl<boolean | null | undefined>,

		/**
		 * User / Group may create Download Shares for files and containers view all previously created Download Shares in this room.
		 * Required
		 */
		manageDownloadShare: FormControl<boolean | null | undefined>,

		/**
		 * User / Group may create Upload Shares for containers, view all previously created Upload Shares in this room.
		 * Required
		 */
		manageUploadShare: FormControl<boolean | null | undefined>,

		/**
		 * User / Group may see all rooms, files and folders in the room and download everything, copy files from this room.
		 * Required
		 */
		read: FormControl<boolean | null | undefined>,

		/**
		 * User / Group may look up files / folders in the recycle bin.
		 * Required
		 */
		readRecycleBin: FormControl<boolean | null | undefined>,

		/**
		 * User / Group may restore files / folders from recycle bin - room permissions required.
		 * Required
		 */
		restoreRecycleBin: FormControl<boolean | null | undefined>,
	}
	export function CreateNodePermissionsFormGroup() {
		return new FormGroup<NodePermissionsFormProperties>({
			change: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			create: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			delete: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			deleteRecycleBin: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			manage: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			manageDownloadShare: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			manageUploadShare: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			read: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			readRecycleBin: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			restoreRecycleBin: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** User information */
	export interface UserInfo {

		/**
		 * &#128640; Since v4.11.0
		 * Avatar UUID
		 * Required
		 */
		avatarUuid: string;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Display name
		 * use other fields from `UserInfo` instead to combine a display name
		 */
		displayName?: string | null;

		/**
		 * &#128640; Since v4.11.0
		 * Email
		 */
		email?: string | null;

		/**
		 * &#128640; Since v4.11.0
		 * User first name (mandatory if `userType` is `internal`)
		 * Required
		 */
		firstName: string;

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * &#128640; Since v4.11.0
		 * User last name (mandatory if `userType` is `internal`)
		 * Required
		 */
		lastName: string;

		/**
		 * &#128679; Deprecated since v4.18.0
		 * Job title
		 */
		title?: string | null;

		/**
		 * &#128640; Since v4.13.0
		 * Username (only returned for `internal` users)
		 * Required
		 */
		userName: string;

		/**
		 * &#128640; Since v4.11.0
		 * User type:
		 * * `internal` - ordinary DRACOON user
		 * * `external` - external user without DRACOON account
		 * * `system` - system user (non human &#128125;)
		 * * `deleted` - deleted DRACOON user
		 * Required
		 */
		userType: UserInfoUserType;
	}

	/** User information */
	export interface UserInfoFormProperties {

		/**
		 * &#128640; Since v4.11.0
		 * Avatar UUID
		 * Required
		 */
		avatarUuid: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Display name
		 * use other fields from `UserInfo` instead to combine a display name
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Email
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * User first name (mandatory if `userType` is `internal`)
		 * Required
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * User last name (mandatory if `userType` is `internal`)
		 * Required
		 */
		lastName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.18.0
		 * Job title
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.13.0
		 * Username (only returned for `internal` users)
		 * Required
		 */
		userName: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * User type:
		 * * `internal` - ordinary DRACOON user
		 * * `external` - external user without DRACOON account
		 * * `system` - system user (non human &#128125;)
		 * * `deleted` - deleted DRACOON user
		 * Required
		 */
		userType: FormControl<UserInfoUserType | null | undefined>,
	}
	export function CreateUserInfoFormGroup() {
		return new FormGroup<UserInfoFormProperties>({
			avatarUuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userType: new FormControl<UserInfoUserType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UserInfoUserType { system = 'system', internal = 'internal', external = 'external', deleted = 'deleted' }


	/** Authentication settings */
	export interface AuthConfig {

		/**
		 * List of authentication methods
		 * Required
		 */
		authMethods: Array<AuthMethod>;
	}

	/** Authentication settings */
	export interface AuthConfigFormProperties {
	}
	export function CreateAuthConfigFormGroup() {
		return new FormGroup<AuthConfigFormProperties>({
		});

	}


	/** Authentication method */
	export interface AuthMethod {

		/**
		 * Is enabled
		 * Required
		 */
		isEnabled: boolean;

		/**
		 * Authentication methods:
		 * * `basic`
		 * * `active_directory`
		 * * `radius`
		 * * `openid`
		 * Required
		 */
		name: string;

		/**
		 * Priority (smaller values have higher priority)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: number;
	}

	/** Authentication method */
	export interface AuthMethodFormProperties {

		/**
		 * Is enabled
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Authentication methods:
		 * * `basic`
		 * * `active_directory`
		 * * `radius`
		 * * `openid`
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Priority (smaller values have higher priority)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateAuthMethodFormGroup() {
		return new FormGroup<AuthMethodFormProperties>({
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Auth token restrictions */
	export interface AuthTokenRestrictions {

		/**
		 * &#128640; Since v4.13.0
		 * Restricted OAuth access token validity (in seconds)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accessTokenValidity?: number | null;

		/**
		 * &#128640; Since v4.13.0
		 * Restricted OAuth refresh token validity (in seconds)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		refreshTokenValidity?: number | null;

		/**
		 * &#128640; Since v4.13.0
		 * Defines if OAuth token restrictions are enabled
		 */
		restrictionEnabled?: boolean | null;
	}

	/** Auth token restrictions */
	export interface AuthTokenRestrictionsFormProperties {

		/**
		 * &#128640; Since v4.13.0
		 * Restricted OAuth access token validity (in seconds)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accessTokenValidity: FormControl<number | null | undefined>,

		/**
		 * &#128640; Since v4.13.0
		 * Restricted OAuth refresh token validity (in seconds)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		refreshTokenValidity: FormControl<number | null | undefined>,

		/**
		 * &#128640; Since v4.13.0
		 * Defines if OAuth token restrictions are enabled
		 */
		restrictionEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAuthTokenRestrictionsFormGroup() {
		return new FormGroup<AuthTokenRestrictionsFormProperties>({
			accessTokenValidity: new FormControl<number | null | undefined>(undefined),
			refreshTokenValidity: new FormControl<number | null | undefined>(undefined),
			restrictionEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** User avatar information */
	export interface Avatar {

		/**
		 * Avatar URI
		 * Required
		 */
		avatarUri: string;

		/**
		 * Avatar UUID
		 * Required
		 */
		avatarUuid: string;

		/**
		 * Determines whether user updated his / her avatar with own image
		 * Required
		 */
		isCustomAvatar: boolean;
	}

	/** User avatar information */
	export interface AvatarFormProperties {

		/**
		 * Avatar URI
		 * Required
		 */
		avatarUri: FormControl<string | null | undefined>,

		/**
		 * Avatar UUID
		 * Required
		 */
		avatarUuid: FormControl<string | null | undefined>,

		/**
		 * Determines whether user updated his / her avatar with own image
		 * Required
		 */
		isCustomAvatar: FormControl<boolean | null | undefined>,
	}
	export function CreateAvatarFormGroup() {
		return new FormGroup<AvatarFormProperties>({
			avatarUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			avatarUuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isCustomAvatar: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of user IDs */
	export interface ChangeGroupMembersRequest {

		/**
		 * List of user IDs
		 * Required
		 */
		ids: Array<number>;
	}

	/** List of user IDs */
	export interface ChangeGroupMembersRequestFormProperties {
	}
	export function CreateChangeGroupMembersRequestFormGroup() {
		return new FormGroup<ChangeGroupMembersRequestFormProperties>({
		});

	}


	/** Request model for updating a node comment */
	export interface ChangeNodeCommentRequest {

		/**
		 * Comment text
		 * Required
		 */
		text: string;
	}

	/** Request model for updating a node comment */
	export interface ChangeNodeCommentRequestFormProperties {

		/**
		 * Comment text
		 * Required
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateChangeNodeCommentRequestFormGroup() {
		return new FormGroup<ChangeNodeCommentRequestFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for updating user's password */
	export interface ChangeUserPasswordRequest {

		/**
		 * New password
		 * Required
		 */
		newPassword: string;

		/**
		 * Old password
		 * Required
		 */
		oldPassword: string;
	}

	/** Request model for updating user's password */
	export interface ChangeUserPasswordRequestFormProperties {

		/**
		 * New password
		 * Required
		 */
		newPassword: FormControl<string | null | undefined>,

		/**
		 * Old password
		 * Required
		 */
		oldPassword: FormControl<string | null | undefined>,
	}
	export function CreateChangeUserPasswordRequestFormGroup() {
		return new FormGroup<ChangeUserPasswordRequestFormProperties>({
			newPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			oldPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Password character rules */
	export interface CharacterRules {

		/**
		 * Characters which a password must contain:
		 * * `alpha` - at least one alphabetical character (`uppercase` OR `lowercase`)
		 * * `uppercase` - at least one uppercase character
		 * * `lowercase` - at least one lowercase character
		 * * `numeric` - at least one numeric character
		 * * `special` - at least one special character (letters and digits excluded)
		 * * `all` - combination of `uppercase`, `lowercase`, `numeric` and `special` (available only in request models)
		 * * `none` - none of the above
		 * Required
		 */
		mustContainCharacters: Array<string>;

		/**
		 * Number of characteristics to enforce
		 * e.g. from `["uppercase", "lowercase", "numeric", "special"]`
		 * all 4 character sets can be enforced; but also only 2 of them
		 * Required
		 * Minimum: 0
		 * Maximum: 4
		 */
		numberOfCharacteristicsToEnforce: number;
	}

	/** Password character rules */
	export interface CharacterRulesFormProperties {

		/**
		 * Number of characteristics to enforce
		 * e.g. from `["uppercase", "lowercase", "numeric", "special"]`
		 * all 4 character sets can be enforced; but also only 2 of them
		 * Required
		 * Minimum: 0
		 * Maximum: 4
		 */
		numberOfCharacteristicsToEnforce: FormControl<number | null | undefined>,
	}
	export function CreateCharacterRulesFormGroup() {
		return new FormGroup<CharacterRulesFormProperties>({
			numberOfCharacteristicsToEnforce: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(4)]),
		});

	}


	/** Chunk upload response */
	export interface ChunkUploadResponse {

		/** Hash value of transferred chunk */
		hash?: string | null;

		/**
		 * Chunk size
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size: string;
	}

	/** Chunk upload response */
	export interface ChunkUploadResponseFormProperties {

		/** Hash value of transferred chunk */
		hash: FormControl<string | null | undefined>,

		/**
		 * Chunk size
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size: FormControl<string | null | undefined>,
	}
	export function CreateChunkUploadResponseFormGroup() {
		return new FormGroup<ChunkUploadResponseFormProperties>({
			hash: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Set of classification policies */
	export interface ClassificationPoliciesConfig {

		/** Shares classification policies */
		shareClassificationPolicies?: ShareClassificationPolicies;
	}

	/** Set of classification policies */
	export interface ClassificationPoliciesConfigFormProperties {
	}
	export function CreateClassificationPoliciesConfigFormGroup() {
		return new FormGroup<ClassificationPoliciesConfigFormProperties>({
		});

	}


	/** Shares classification policies */
	export interface ShareClassificationPolicies {

		/**
		 * &#128640; Since v4.30.0
		 * Minimum classification that causes download shares to require a password. `0` means no password will be enforced.
		 */
		classificationRequiresSharePassword?: ShareClassificationPoliciesClassificationRequiresSharePassword;
	}

	/** Shares classification policies */
	export interface ShareClassificationPoliciesFormProperties {

		/**
		 * &#128640; Since v4.30.0
		 * Minimum classification that causes download shares to require a password. `0` means no password will be enforced.
		 */
		classificationRequiresSharePassword: FormControl<ShareClassificationPoliciesClassificationRequiresSharePassword | null | undefined>,
	}
	export function CreateShareClassificationPoliciesFormGroup() {
		return new FormGroup<ShareClassificationPoliciesFormProperties>({
			classificationRequiresSharePassword: new FormControl<ShareClassificationPoliciesClassificationRequiresSharePassword | null | undefined>(undefined),
		});

	}

	export enum ShareClassificationPoliciesClassificationRequiresSharePassword { _0 = 0, _1 = 1, _2 = 2, _3 = 3, _4 = 4 }


	/** Node comment information */
	export interface Comment {

		/**
		 * Creation date
		 * Required
		 */
		createdAt: Date;

		/**
		 * User information
		 * Required
		 */
		createdBy: UserInfo;

		/**
		 * Comment ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Determines whether comment was edited or not
		 * Required
		 */
		isChanged: boolean;

		/**
		 * Determines whether comment was deleted or not
		 * Required
		 */
		isDeleted: boolean;

		/**
		 * Comment text
		 * Required
		 */
		text: string;

		/**
		 * Modification date
		 * Required
		 */
		updatedAt: Date;

		/**
		 * User information
		 * Required
		 */
		updatedBy: UserInfo;
	}

	/** Node comment information */
	export interface CommentFormProperties {

		/**
		 * Creation date
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Comment ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Determines whether comment was edited or not
		 * Required
		 */
		isChanged: FormControl<boolean | null | undefined>,

		/**
		 * Determines whether comment was deleted or not
		 * Required
		 */
		isDeleted: FormControl<boolean | null | undefined>,

		/**
		 * Comment text
		 * Required
		 */
		text: FormControl<string | null | undefined>,

		/**
		 * Modification date
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isChanged: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isDeleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of node comments */
	export interface CommentList {

		/**
		 * List of node comments
		 * Required
		 */
		items: Array<Comment>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of node comments */
	export interface CommentListFormProperties {
	}
	export function CreateCommentListFormGroup() {
		return new FormGroup<CommentListFormProperties>({
		});

	}


	/** Request model for completing a S3 file upload */
	export interface CompleteS3FileUploadRequest {

		/** File key information */
		fileKey?: FileKey;

		/** New file name to store with */
		fileName?: string | null;

		/** Preserve Download Share Links and point them to the new node. */
		keepShareLinks?: boolean | null;

		/**
		 * List of S3 file upload parts
		 * Required
		 */
		parts: Array<S3FileUploadPart>;

		/**
		 * Node conflict resolution strategy:
		 * * `autorename`
		 * * `overwrite`
		 * * `fail`
		 */
		resolutionStrategy?: CompleteS3FileUploadRequestResolutionStrategy | null;
	}

	/** Request model for completing a S3 file upload */
	export interface CompleteS3FileUploadRequestFormProperties {

		/** New file name to store with */
		fileName: FormControl<string | null | undefined>,

		/** Preserve Download Share Links and point them to the new node. */
		keepShareLinks: FormControl<boolean | null | undefined>,

		/**
		 * Node conflict resolution strategy:
		 * * `autorename`
		 * * `overwrite`
		 * * `fail`
		 */
		resolutionStrategy: FormControl<CompleteS3FileUploadRequestResolutionStrategy | null | undefined>,
	}
	export function CreateCompleteS3FileUploadRequestFormGroup() {
		return new FormGroup<CompleteS3FileUploadRequestFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			keepShareLinks: new FormControl<boolean | null | undefined>(undefined),
			resolutionStrategy: new FormControl<CompleteS3FileUploadRequestResolutionStrategy | null | undefined>(undefined),
		});

	}


	/** File key information */
	export interface FileKey {

		/**
		 * Initial vector
		 * Required
		 */
		iv: string;

		/**
		 * Encryption key
		 * Required
		 */
		key: string;

		/**
		 * Authentication tag
		 * (needed with authenticated encryption)
		 * Required
		 */
		tag: string;

		/**
		 * Version
		 * Required
		 */
		version: string;
	}

	/** File key information */
	export interface FileKeyFormProperties {

		/**
		 * Initial vector
		 * Required
		 */
		iv: FormControl<string | null | undefined>,

		/**
		 * Encryption key
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Authentication tag
		 * (needed with authenticated encryption)
		 * Required
		 */
		tag: FormControl<string | null | undefined>,

		/**
		 * Version
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateFileKeyFormGroup() {
		return new FormGroup<FileKeyFormProperties>({
			iv: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** S3 file upload part information */
	export interface S3FileUploadPart {

		/**
		 * Corresponding part ETag
		 * Required
		 */
		partEtag: string;

		/**
		 * Corresponding part number
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		partNumber: number;
	}

	/** S3 file upload part information */
	export interface S3FileUploadPartFormProperties {

		/**
		 * Corresponding part ETag
		 * Required
		 */
		partEtag: FormControl<string | null | undefined>,

		/**
		 * Corresponding part number
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		partNumber: FormControl<number | null | undefined>,
	}
	export function CreateS3FileUploadPartFormGroup() {
		return new FormGroup<S3FileUploadPartFormProperties>({
			partEtag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			partNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CompleteS3FileUploadRequestResolutionStrategy { autorename = 'autorename', overwrite = 'overwrite', fail = 'fail' }


	/** Request model for completing a S3 file upload */
	export interface CompleteS3ShareUploadRequest {

		/**
		 * List of S3 file upload parts
		 * Required
		 */
		parts: Array<S3FileUploadPart>;

		/** List of user file keys */
		userFileKeyList?: Array<UserFileKey>;
	}

	/** Request model for completing a S3 file upload */
	export interface CompleteS3ShareUploadRequestFormProperties {
	}
	export function CreateCompleteS3ShareUploadRequestFormGroup() {
		return new FormGroup<CompleteS3ShareUploadRequestFormProperties>({
		});

	}


	/** User file key */
	export interface UserFileKey {

		/**
		 * File key information
		 * Required
		 */
		fileKey: FileKey;

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userId: string;
	}

	/** User file key */
	export interface UserFileKeyFormProperties {

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserFileKeyFormGroup() {
		return new FormGroup<UserFileKeyFormProperties>({
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * The body must be empty if public upload token is used.
	 * The `resolutionStrategy` in that case will be always `autorename`
	 */
	export interface CompleteUploadRequest {

		/** File key information */
		fileKey?: FileKey;

		/** New file name to store with */
		fileName?: string | null;

		/** Preserve Download Share Links and point them to the new node. */
		keepShareLinks?: boolean | null;

		/**
		 * Node conflict resolution strategy:
		 * * `autorename`
		 * * `overwrite`
		 * * `fail`
		 */
		resolutionStrategy?: CompleteS3FileUploadRequestResolutionStrategy | null;

		/** Mandatory for encrypted shares */
		userFileKeyList?: UserFileKeyList;
	}

	/**
	 * The body must be empty if public upload token is used.
	 * The `resolutionStrategy` in that case will be always `autorename`
	 */
	export interface CompleteUploadRequestFormProperties {

		/** New file name to store with */
		fileName: FormControl<string | null | undefined>,

		/** Preserve Download Share Links and point them to the new node. */
		keepShareLinks: FormControl<boolean | null | undefined>,

		/**
		 * Node conflict resolution strategy:
		 * * `autorename`
		 * * `overwrite`
		 * * `fail`
		 */
		resolutionStrategy: FormControl<CompleteS3FileUploadRequestResolutionStrategy | null | undefined>,
	}
	export function CreateCompleteUploadRequestFormGroup() {
		return new FormGroup<CompleteUploadRequestFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			keepShareLinks: new FormControl<boolean | null | undefined>(undefined),
			resolutionStrategy: new FormControl<CompleteS3FileUploadRequestResolutionStrategy | null | undefined>(undefined),
		});

	}


	/** Mandatory for encrypted shares */
	export interface UserFileKeyList {

		/** List of user file keys */
		items?: Array<UserFileKey>;
	}

	/** Mandatory for encrypted shares */
	export interface UserFileKeyListFormProperties {
	}
	export function CreateUserFileKeyListFormGroup() {
		return new FormGroup<UserFileKeyListFormProperties>({
		});

	}


	/** List of key-value pairs */
	export interface ConfigOptionList {

		/**
		 * List of key-value pairs
		 * Required
		 */
		items: Array<KeyValueEntry>;
	}

	/** List of key-value pairs */
	export interface ConfigOptionListFormProperties {
	}
	export function CreateConfigOptionListFormGroup() {
		return new FormGroup<ConfigOptionListFormProperties>({
		});

	}


	/** Request model for configuring a room */
	export interface ConfigRoomRequest {

		/**
		 * List of group ids
		 * A room requires at least one admin (user or group)
		 */
		adminGroupIds?: Array<number>;

		/**
		 * List of user ids
		 * A room requires at least one admin (user or group)
		 */
		adminIds?: Array<number>;

		/**
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 * Provided (or default) classification is taken from room
		 * when file gets uploaded without any classification.
		 */
		classification?: ConfigRoomRequestClassification;

		/** Is activities log active (for rooms only) */
		hasActivitiesLog?: boolean | null;

		/**
		 * Inherit permissions from parent room
		 * (default: `false` if `parentId` is `0`; otherwise: `true`)
		 */
		inheritPermissions?: boolean | null;

		/**
		 * Behaviour when new users are added to the group:
		 * * `autoallow`
		 * * `pending`
		 * Only relevant if `adminGroupIds` has items.
		 */
		newGroupMemberAcceptance?: ConfigRoomRequestNewGroupMemberAcceptance | null;

		/**
		 * Retention period for deleted nodes in days
		 * Minimum: 0
		 * Maximum: 9999
		 */
		recycleBinRetentionPeriod?: number | null;

		/** Take over existing permissions */
		takeOverPermissions?: boolean | null;
	}

	/** Request model for configuring a room */
	export interface ConfigRoomRequestFormProperties {

		/**
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 * Provided (or default) classification is taken from room
		 * when file gets uploaded without any classification.
		 */
		classification: FormControl<ConfigRoomRequestClassification | null | undefined>,

		/** Is activities log active (for rooms only) */
		hasActivitiesLog: FormControl<boolean | null | undefined>,

		/**
		 * Inherit permissions from parent room
		 * (default: `false` if `parentId` is `0`; otherwise: `true`)
		 */
		inheritPermissions: FormControl<boolean | null | undefined>,

		/**
		 * Behaviour when new users are added to the group:
		 * * `autoallow`
		 * * `pending`
		 * Only relevant if `adminGroupIds` has items.
		 */
		newGroupMemberAcceptance: FormControl<ConfigRoomRequestNewGroupMemberAcceptance | null | undefined>,

		/**
		 * Retention period for deleted nodes in days
		 * Minimum: 0
		 * Maximum: 9999
		 */
		recycleBinRetentionPeriod: FormControl<number | null | undefined>,

		/** Take over existing permissions */
		takeOverPermissions: FormControl<boolean | null | undefined>,
	}
	export function CreateConfigRoomRequestFormGroup() {
		return new FormGroup<ConfigRoomRequestFormProperties>({
			classification: new FormControl<ConfigRoomRequestClassification | null | undefined>(undefined),
			hasActivitiesLog: new FormControl<boolean | null | undefined>(undefined),
			inheritPermissions: new FormControl<boolean | null | undefined>(undefined),
			newGroupMemberAcceptance: new FormControl<ConfigRoomRequestNewGroupMemberAcceptance | null | undefined>(undefined),
			recycleBinRetentionPeriod: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(9999)]),
			takeOverPermissions: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ConfigRoomRequestClassification { _1 = 0, _2 = 1, _3 = 2, _4 = 3 }

	export enum ConfigRoomRequestNewGroupMemberAcceptance { autoallow = 'autoallow', pending = 'pending' }


	/** Copied node information */
	export interface CopyNode {

		/**
		 * Source node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/** New node name */
		name?: string | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampCreation?: Date | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampModification?: Date | null;
	}

	/** Copied node information */
	export interface CopyNodeFormProperties {

		/**
		 * Source node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** New node name */
		name: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampCreation: FormControl<Date | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampModification: FormControl<Date | null | undefined>,
	}
	export function CreateCopyNodeFormGroup() {
		return new FormGroup<CopyNodeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			timestampCreation: new FormControl<Date | null | undefined>(undefined),
			timestampModification: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Request model for copying nodes */
	export interface CopyNodesRequest {

		/** List of nodes to be copied */
		items?: Array<CopyNode>;

		/** Preserve Download Share Links and point them to the new node. */
		keepShareLinks?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.5.0
		 * Node IDs
		 * Please use `items` instead.
		 */
		nodeIds?: Array<number>;

		/**
		 * Node conflict resolution strategy:
		 * * `autorename`
		 * * `overwrite`
		 * * `fail`
		 */
		resolutionStrategy?: CompleteS3FileUploadRequestResolutionStrategy | null;
	}

	/** Request model for copying nodes */
	export interface CopyNodesRequestFormProperties {

		/** Preserve Download Share Links and point them to the new node. */
		keepShareLinks: FormControl<boolean | null | undefined>,

		/**
		 * Node conflict resolution strategy:
		 * * `autorename`
		 * * `overwrite`
		 * * `fail`
		 */
		resolutionStrategy: FormControl<CompleteS3FileUploadRequestResolutionStrategy | null | undefined>,
	}
	export function CreateCopyNodesRequestFormGroup() {
		return new FormGroup<CopyNodesRequestFormProperties>({
			keepShareLinks: new FormControl<boolean | null | undefined>(undefined),
			resolutionStrategy: new FormControl<CompleteS3FileUploadRequestResolutionStrategy | null | undefined>(undefined),
		});

	}


	/** Request model for creating an Active Directory configuration */
	export interface CreateActiveDirectoryConfigRequest {

		/**
		 * If `userImport` is set to `true`,
		 * the user must be member of this Active Directory group to receive a newly created DRACOON account.
		 */
		adExportGroup?: string | null;

		/**
		 * Unique name for an Active Directory configuration
		 * Required
		 */
		alias: string;

		/**
		 * DEPRECATED, will be ignored
		 * Determines whether a room is created for each user that is created by automatic import (like a home folder).
		 * Room's name will equal the user's login name.
		 */
		createHomeFolder?: boolean | null;

		/**
		 * DEPRECATED, will be ignored
		 * ID of the room in which the individual rooms for users will be created.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeFolderParent?: string | null;

		/**
		 * Search scope of Active Directory; only users below this node can log on.
		 * Required
		 */
		ldapUsersDomain: string;

		/**
		 * User group that is assigned to users who are created by automatic import.
		 * Reset with `0`
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sdsImportGroup?: string | null;

		/**
		 * Distinguished Name (DN) of Active Directory administrative account
		 * Required
		 */
		serverAdminName: string;

		/**
		 * Password of Active Directory administrative account
		 * Required
		 */
		serverAdminPassword: string;

		/**
		 * IPv4 or IPv6 address or host name
		 * Required
		 */
		serverIp: string;

		/**
		 * Port
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		serverPort: number;

		/**
		 * SSL finger print of Active Directory server.
		 * Mandatory for LDAPS connections.
		 * Format: `Algorithm/Fingerprint`
		 */
		sslFingerPrint?: string | null;

		/** Determines whether LDAPS should be used instead of plain LDAP. */
		useLdaps?: boolean | null;

		/**
		 * Name of Active Directory attribute that is used as login name.
		 * Required
		 */
		userFilter: string;

		/**
		 * Determines if a DRACOON account is automatically created for a new user
		 * who successfully logs on with his / her AD / IDP account.
		 */
		userImport?: boolean | null;
	}

	/** Request model for creating an Active Directory configuration */
	export interface CreateActiveDirectoryConfigRequestFormProperties {

		/**
		 * If `userImport` is set to `true`,
		 * the user must be member of this Active Directory group to receive a newly created DRACOON account.
		 */
		adExportGroup: FormControl<string | null | undefined>,

		/**
		 * Unique name for an Active Directory configuration
		 * Required
		 */
		alias: FormControl<string | null | undefined>,

		/**
		 * DEPRECATED, will be ignored
		 * Determines whether a room is created for each user that is created by automatic import (like a home folder).
		 * Room's name will equal the user's login name.
		 */
		createHomeFolder: FormControl<boolean | null | undefined>,

		/**
		 * DEPRECATED, will be ignored
		 * ID of the room in which the individual rooms for users will be created.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeFolderParent: FormControl<string | null | undefined>,

		/**
		 * Search scope of Active Directory; only users below this node can log on.
		 * Required
		 */
		ldapUsersDomain: FormControl<string | null | undefined>,

		/**
		 * User group that is assigned to users who are created by automatic import.
		 * Reset with `0`
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sdsImportGroup: FormControl<string | null | undefined>,

		/**
		 * Distinguished Name (DN) of Active Directory administrative account
		 * Required
		 */
		serverAdminName: FormControl<string | null | undefined>,

		/**
		 * Password of Active Directory administrative account
		 * Required
		 */
		serverAdminPassword: FormControl<string | null | undefined>,

		/**
		 * IPv4 or IPv6 address or host name
		 * Required
		 */
		serverIp: FormControl<string | null | undefined>,

		/**
		 * Port
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		serverPort: FormControl<number | null | undefined>,

		/**
		 * SSL finger print of Active Directory server.
		 * Mandatory for LDAPS connections.
		 * Format: `Algorithm/Fingerprint`
		 */
		sslFingerPrint: FormControl<string | null | undefined>,

		/** Determines whether LDAPS should be used instead of plain LDAP. */
		useLdaps: FormControl<boolean | null | undefined>,

		/**
		 * Name of Active Directory attribute that is used as login name.
		 * Required
		 */
		userFilter: FormControl<string | null | undefined>,

		/**
		 * Determines if a DRACOON account is automatically created for a new user
		 * who successfully logs on with his / her AD / IDP account.
		 */
		userImport: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateActiveDirectoryConfigRequestFormGroup() {
		return new FormGroup<CreateActiveDirectoryConfigRequestFormProperties>({
			adExportGroup: new FormControl<string | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createHomeFolder: new FormControl<boolean | null | undefined>(undefined),
			homeFolderParent: new FormControl<string | null | undefined>(undefined),
			ldapUsersDomain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sdsImportGroup: new FormControl<string | null | undefined>(undefined),
			serverAdminName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverAdminPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sslFingerPrint: new FormControl<string | null | undefined>(undefined),
			useLdaps: new FormControl<boolean | null | undefined>(undefined),
			userFilter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userImport: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request model for creating a Download Share */
	export interface CreateDownloadShareRequest {

		/**
		 * &#128679; Deprecated since v4.20.0
		 * Language tag for messages to creator
		 */
		creatorLanguage?: string | null;

		/** Expiration information */
		expiration?: ObjectExpiration;

		/** File key information */
		fileKey?: FileKey;

		/**
		 * &#128640; Since v4.11.0
		 * Internal notes
		 * Maximum: 255
		 */
		internalNotes?: string | null;

		/** Key pair container */
		keyPair?: UserKeyPairContainer;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Notification email content
		 */
		mailBody?: string | null;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * CSV string of recipient email addresses
		 */
		mailRecipients?: string | null;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Notification email subject
		 */
		mailSubject?: string | null;

		/**
		 * Max allowed downloads
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDownloads?: number | null;

		/**
		 * Alias name
		 * (default: name of the shared node)
		 */
		name?: string | null;

		/**
		 * Source node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nodeId: string;

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes?: string | null;

		/**
		 * &#128679; Deprecated since v4.20.0
		 * Notify creator on every download.
		 */
		notifyCreator?: boolean | null;

		/** Access password, not allowed for encrypted shares */
		password?: string | null;

		/** Language tag for messages to receiver */
		receiverLanguage?: string | null;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Notify recipients via email
		 * Please use `POST /shares/downloads/{share_id}/email` API instead.
		 */
		sendMail?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Send share password via SMS
		 * Please use `textMessageRecipients` attribute instead.
		 */
		sendSms?: boolean | null;

		/** Show creator first and last name. */
		showCreatorName?: boolean | null;

		/** Show creator email address. */
		showCreatorUsername?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * CSV string of recipient MSISDNs
		 */
		smsRecipients?: string | null;

		/**
		 * &#128640; Since v4.11.0
		 * List of recipient FQTNs
		 * E.123 / E.164 Format
		 */
		textMessageRecipients?: Array<string>;
	}

	/** Request model for creating a Download Share */
	export interface CreateDownloadShareRequestFormProperties {

		/**
		 * &#128679; Deprecated since v4.20.0
		 * Language tag for messages to creator
		 */
		creatorLanguage: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Internal notes
		 * Maximum: 255
		 */
		internalNotes: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Notification email content
		 */
		mailBody: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * CSV string of recipient email addresses
		 */
		mailRecipients: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Notification email subject
		 */
		mailSubject: FormControl<string | null | undefined>,

		/**
		 * Max allowed downloads
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDownloads: FormControl<number | null | undefined>,

		/**
		 * Alias name
		 * (default: name of the shared node)
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Source node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nodeId: FormControl<string | null | undefined>,

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.20.0
		 * Notify creator on every download.
		 */
		notifyCreator: FormControl<boolean | null | undefined>,

		/** Access password, not allowed for encrypted shares */
		password: FormControl<string | null | undefined>,

		/** Language tag for messages to receiver */
		receiverLanguage: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Notify recipients via email
		 * Please use `POST /shares/downloads/{share_id}/email` API instead.
		 */
		sendMail: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Send share password via SMS
		 * Please use `textMessageRecipients` attribute instead.
		 */
		sendSms: FormControl<boolean | null | undefined>,

		/** Show creator first and last name. */
		showCreatorName: FormControl<boolean | null | undefined>,

		/** Show creator email address. */
		showCreatorUsername: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * CSV string of recipient MSISDNs
		 */
		smsRecipients: FormControl<string | null | undefined>,
	}
	export function CreateCreateDownloadShareRequestFormGroup() {
		return new FormGroup<CreateDownloadShareRequestFormProperties>({
			creatorLanguage: new FormControl<string | null | undefined>(undefined),
			internalNotes: new FormControl<string | null | undefined>(undefined),
			mailBody: new FormControl<string | null | undefined>(undefined),
			mailRecipients: new FormControl<string | null | undefined>(undefined),
			mailSubject: new FormControl<string | null | undefined>(undefined),
			maxDownloads: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nodeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			notes: new FormControl<string | null | undefined>(undefined),
			notifyCreator: new FormControl<boolean | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			receiverLanguage: new FormControl<string | null | undefined>(undefined),
			sendMail: new FormControl<boolean | null | undefined>(undefined),
			sendSms: new FormControl<boolean | null | undefined>(undefined),
			showCreatorName: new FormControl<boolean | null | undefined>(undefined),
			showCreatorUsername: new FormControl<boolean | null | undefined>(undefined),
			smsRecipients: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Expiration information */
	export interface ObjectExpiration {

		/**
		 * enabled / disabled
		 * Required
		 */
		enableExpiration: boolean;

		/** Expiration date */
		expireAt?: Date | null;
	}

	/** Expiration information */
	export interface ObjectExpirationFormProperties {

		/**
		 * enabled / disabled
		 * Required
		 */
		enableExpiration: FormControl<boolean | null | undefined>,

		/** Expiration date */
		expireAt: FormControl<Date | null | undefined>,
	}
	export function CreateObjectExpirationFormGroup() {
		return new FormGroup<ObjectExpirationFormProperties>({
			enableExpiration: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			expireAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Key pair container */
	export interface UserKeyPairContainer {

		/**
		 * Private key container
		 * Required
		 */
		privateKeyContainer: PrivateKeyContainer;

		/**
		 * Public key container
		 * Required
		 */
		publicKeyContainer: PublicKeyContainer;
	}

	/** Key pair container */
	export interface UserKeyPairContainerFormProperties {
	}
	export function CreateUserKeyPairContainerFormGroup() {
		return new FormGroup<UserKeyPairContainerFormProperties>({
		});

	}


	/** Private key container */
	export interface PrivateKeyContainer {

		/**
		 * &#128640; Since v4.24.0
		 * Creation date
		 */
		createdAt?: Date | null;

		/**
		 * &#128640; Since v4.24.0
		 * Created by user
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		createdBy?: string | null;

		/**
		 * Private key
		 * Required
		 */
		privateKey: string;

		/**
		 * Version
		 * Required
		 */
		version: string;
	}

	/** Private key container */
	export interface PrivateKeyContainerFormProperties {

		/**
		 * &#128640; Since v4.24.0
		 * Creation date
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * &#128640; Since v4.24.0
		 * Created by user
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		createdBy: FormControl<string | null | undefined>,

		/**
		 * Private key
		 * Required
		 */
		privateKey: FormControl<string | null | undefined>,

		/**
		 * Version
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreatePrivateKeyContainerFormGroup() {
		return new FormGroup<PrivateKeyContainerFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			privateKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Public key container */
	export interface PublicKeyContainer {

		/**
		 * &#128640; Since v4.24.0
		 * Creation date
		 */
		createdAt?: Date | null;

		/**
		 * &#128640; Since v4.24.0
		 * Created by user
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		createdBy?: string | null;

		/**
		 * Public key
		 * Required
		 */
		publicKey: string;

		/**
		 * Version
		 * Required
		 */
		version: string;
	}

	/** Public key container */
	export interface PublicKeyContainerFormProperties {

		/**
		 * &#128640; Since v4.24.0
		 * Creation date
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * &#128640; Since v4.24.0
		 * Created by user
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		createdBy: FormControl<string | null | undefined>,

		/**
		 * Public key
		 * Required
		 */
		publicKey: FormControl<string | null | undefined>,

		/**
		 * Version
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreatePublicKeyContainerFormGroup() {
		return new FormGroup<PublicKeyContainerFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			publicKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for creating an upload channel */
	export interface CreateFileUploadRequest {

		/**
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 * (default: classification from parent room)
		 */
		classification?: CreateFileUploadRequestClassification;

		/**
		 * &#128640; Since v4.15.0
		 * Upload direct to S3
		 */
		directS3Upload?: boolean | null;

		/** Expiration information */
		expiration?: ObjectExpiration;

		/**
		 * File name
		 * Required
		 */
		name: string;

		/**
		 * User notes
		 * Use empty string to remove.
		 */
		notes?: string | null;

		/**
		 * Parent node ID (room or folder)
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId: string;

		/**
		 * File size in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size?: string | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampCreation?: Date | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampModification?: Date | null;
	}

	/** Request model for creating an upload channel */
	export interface CreateFileUploadRequestFormProperties {

		/**
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 * (default: classification from parent room)
		 */
		classification: FormControl<CreateFileUploadRequestClassification | null | undefined>,

		/**
		 * &#128640; Since v4.15.0
		 * Upload direct to S3
		 */
		directS3Upload: FormControl<boolean | null | undefined>,

		/**
		 * File name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * User notes
		 * Use empty string to remove.
		 */
		notes: FormControl<string | null | undefined>,

		/**
		 * Parent node ID (room or folder)
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId: FormControl<string | null | undefined>,

		/**
		 * File size in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampCreation: FormControl<Date | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampModification: FormControl<Date | null | undefined>,
	}
	export function CreateCreateFileUploadRequestFormGroup() {
		return new FormGroup<CreateFileUploadRequestFormProperties>({
			classification: new FormControl<CreateFileUploadRequestClassification | null | undefined>(undefined),
			directS3Upload: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			notes: new FormControl<string | null | undefined>(undefined),
			parentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined),
			timestampCreation: new FormControl<Date | null | undefined>(undefined),
			timestampModification: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CreateFileUploadRequestClassification { _1 = 0, _2 = 1, _3 = 2, _4 = 3 }


	/** Upload channel information */
	export interface CreateFileUploadResponse {

		/**
		 * Upload token
		 * Required
		 */
		token: string;

		/**
		 * Upload (channel) ID
		 * Required
		 */
		uploadId: string;

		/**
		 * (public) Upload URL
		 * Required
		 */
		uploadUrl: string;
	}

	/** Upload channel information */
	export interface CreateFileUploadResponseFormProperties {

		/**
		 * Upload token
		 * Required
		 */
		token: FormControl<string | null | undefined>,

		/**
		 * Upload (channel) ID
		 * Required
		 */
		uploadId: FormControl<string | null | undefined>,

		/**
		 * (public) Upload URL
		 * Required
		 */
		uploadUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateFileUploadResponseFormGroup() {
		return new FormGroup<CreateFileUploadResponseFormProperties>({
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uploadId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uploadUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for creating a folder */
	export interface CreateFolderRequest {

		/**
		 * &#128640; Since v4.30.0
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 * Provided (or default) classification is taken from room
		 * when file gets uploaded without any classification.
		 */
		classification?: CreateFolderRequestClassification;

		/**
		 * Name
		 * Required
		 */
		name: string;

		/**
		 * User notes
		 * Use empty string to remove.
		 */
		notes?: string | null;

		/**
		 * Parent node ID (room or folder)
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId: string;

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampCreation?: Date | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampModification?: Date | null;
	}

	/** Request model for creating a folder */
	export interface CreateFolderRequestFormProperties {

		/**
		 * &#128640; Since v4.30.0
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 * Provided (or default) classification is taken from room
		 * when file gets uploaded without any classification.
		 */
		classification: FormControl<CreateFolderRequestClassification | null | undefined>,

		/**
		 * Name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * User notes
		 * Use empty string to remove.
		 */
		notes: FormControl<string | null | undefined>,

		/**
		 * Parent node ID (room or folder)
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampCreation: FormControl<Date | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampModification: FormControl<Date | null | undefined>,
	}
	export function CreateCreateFolderRequestFormGroup() {
		return new FormGroup<CreateFolderRequestFormProperties>({
			classification: new FormControl<CreateFolderRequestClassification | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			notes: new FormControl<string | null | undefined>(undefined),
			parentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestampCreation: new FormControl<Date | null | undefined>(undefined),
			timestampModification: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CreateFolderRequestClassification { _1 = 0, _2 = 1, _3 = 2, _4 = 3 }


	/** Request model for creating a group */
	export interface CreateGroupRequest {

		/** Expiration information */
		expiration?: ObjectExpiration;

		/**
		 * Group name
		 * Required
		 */
		name: string;
	}

	/** Request model for creating a group */
	export interface CreateGroupRequestFormProperties {

		/**
		 * Group name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupRequestFormGroup() {
		return new FormGroup<CreateGroupRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for creating a key pair */
	export interface CreateKeyPairRequest {

		/**
		 * Private key container
		 * Required
		 */
		previousPrivateKey: PrivateKeyContainer;

		/**
		 * Private key container
		 * Required
		 */
		privateKeyContainer: PrivateKeyContainer;

		/**
		 * Public key container
		 * Required
		 */
		publicKeyContainer: PublicKeyContainer;
	}

	/** Request model for creating a key pair */
	export interface CreateKeyPairRequestFormProperties {
	}
	export function CreateCreateKeyPairRequestFormGroup() {
		return new FormGroup<CreateKeyPairRequestFormProperties>({
		});

	}


	/** Request model for creating a node comment */
	export interface CreateNodeCommentRequest {

		/**
		 * Comment text
		 * Required
		 */
		text: string;
	}

	/** Request model for creating a node comment */
	export interface CreateNodeCommentRequestFormProperties {

		/**
		 * Comment text
		 * Required
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateCreateNodeCommentRequestFormGroup() {
		return new FormGroup<CreateNodeCommentRequestFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for creating an OAuth client */
	export interface CreateOAuthClientRequest {

		/**
		 * Validity of the access token in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accessTokenValidity?: number | null;

		/**
		 * &#128640; Since v4.22.0
		 * Validity of the approval interval in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		approvalValidity?: number | null;

		/** ID of the OAuth client */
		clientId?: string | null;

		/**
		 * Name, which is shown at the client configuration and authorization.
		 * Required
		 */
		clientName: string;

		/** Secret, which client uses at authentication. */
		clientSecret?: string | null;

		/** Determines whether client is a confidential or public client. */
		clientType?: CreateOAuthClientRequestClientType | null;

		/**
		 * Authorized grant types
		 * * `authorization_code`
		 * * `implicit`
		 * * `password`
		 * * `client_credentials`
		 * * `refresh_token`
		 * cf. [RFC 6749](https://tools.ietf.org/html/rfc6749)
		 * Required
		 */
		grantTypes: Array<string>;

		/**
		 * URIs, to which a user is redirected after authorization.
		 * Required
		 */
		redirectUris: Array<string>;

		/**
		 * Validity of the refresh token in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		refreshTokenValidity?: number | null;
	}

	/** Request model for creating an OAuth client */
	export interface CreateOAuthClientRequestFormProperties {

		/**
		 * Validity of the access token in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accessTokenValidity: FormControl<number | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Validity of the approval interval in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		approvalValidity: FormControl<number | null | undefined>,

		/** ID of the OAuth client */
		clientId: FormControl<string | null | undefined>,

		/**
		 * Name, which is shown at the client configuration and authorization.
		 * Required
		 */
		clientName: FormControl<string | null | undefined>,

		/** Secret, which client uses at authentication. */
		clientSecret: FormControl<string | null | undefined>,

		/** Determines whether client is a confidential or public client. */
		clientType: FormControl<CreateOAuthClientRequestClientType | null | undefined>,

		/**
		 * Validity of the refresh token in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		refreshTokenValidity: FormControl<number | null | undefined>,
	}
	export function CreateCreateOAuthClientRequestFormGroup() {
		return new FormGroup<CreateOAuthClientRequestFormProperties>({
			accessTokenValidity: new FormControl<number | null | undefined>(undefined),
			approvalValidity: new FormControl<number | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			clientName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			clientType: new FormControl<CreateOAuthClientRequestClientType | null | undefined>(undefined),
			refreshTokenValidity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CreateOAuthClientRequestClientType { confidential = 'confidential', public = 'public' }


	/** Request model for creating an OpenID Connect IDP configuration */
	export interface CreateOpenIdIdpConfigRequest {

		/**
		 * URL of the authorization endpoint
		 * Required
		 */
		authorizationEndPointUrl: string;

		/**
		 * ID of the OpenID client
		 * Required
		 */
		clientId: string;

		/**
		 * Secret, which client uses at authentication.
		 * Required
		 */
		clientSecret: string;

		/** Name of the claim which is used for the user mapping fallback. */
		fallbackMappingClaim?: string | null;

		/**
		 * &#128640; Since v4.11.0
		 * Flow, which is used at authentication
		 */
		flow?: CreateOpenIdIdpConfigRequestFlow | null;

		/**
		 * Issuer identifier of the IDP
		 * The value is a case sensitive URL.
		 * Required
		 */
		issuer: string;

		/**
		 * URL of the JWKS endpoint
		 * Required
		 */
		jwksEndPointUrl: string;

		/**
		 * Name of the claim which is used for the user mapping.
		 * Required
		 */
		mappingClaim: string;

		/**
		 * Name of the IDP
		 * Required
		 */
		name: string;

		/**
		 * PKCE code challenge method.
		 * cf. [RFC 7636](https://tools.ietf.org/html/rfc7636)
		 */
		pkceChallengeMethod?: string | null;

		/**
		 * Determines whether PKCE is enabled.
		 * cf. [RFC 7636](https://tools.ietf.org/html/rfc7636)
		 */
		pkceEnabled?: boolean | null;

		/**
		 * URIs, to which a user is redirected after authorization.
		 * Required
		 */
		redirectUris: Array<string>;

		/**
		 * List of requested scopes
		 * Required
		 */
		scopes: Array<string>;

		/**
		 * URL of the token endpoint
		 * Required
		 */
		tokenEndPointUrl: string;

		/**
		 * Determines if a DRACOON account is automatically created for a new user
		 * who successfully logs on with his / her AD / IDP account.
		 */
		userImportEnabled?: boolean | null;

		/**
		 * User group that is assigned to users who are created by automatic import.
		 * Reset with `0`
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userImportGroup?: string | null;

		/**
		 * URL of the user info endpoint
		 * Required
		 */
		userInfoEndPointUrl: string;

		/**
		 * &#128640; Since v4.23.0
		 * Source, which is used to get user information at the import or update of a user.
		 */
		userInfoSource?: CreateOpenIdIdpConfigRequestUserInfoSource | null;

		/**
		 * URL of the user management UI.
		 * Use empty string to remove.
		 */
		userManagementUrl?: string | null;

		/**
		 * Determines if the DRACOON account is updated with data from AD / IDP.
		 * For OpenID Connect, the scopes `email` and `profile` are needed.
		 */
		userUpdateEnabled?: boolean | null;
	}

	/** Request model for creating an OpenID Connect IDP configuration */
	export interface CreateOpenIdIdpConfigRequestFormProperties {

		/**
		 * URL of the authorization endpoint
		 * Required
		 */
		authorizationEndPointUrl: FormControl<string | null | undefined>,

		/**
		 * ID of the OpenID client
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/**
		 * Secret, which client uses at authentication.
		 * Required
		 */
		clientSecret: FormControl<string | null | undefined>,

		/** Name of the claim which is used for the user mapping fallback. */
		fallbackMappingClaim: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Flow, which is used at authentication
		 */
		flow: FormControl<CreateOpenIdIdpConfigRequestFlow | null | undefined>,

		/**
		 * Issuer identifier of the IDP
		 * The value is a case sensitive URL.
		 * Required
		 */
		issuer: FormControl<string | null | undefined>,

		/**
		 * URL of the JWKS endpoint
		 * Required
		 */
		jwksEndPointUrl: FormControl<string | null | undefined>,

		/**
		 * Name of the claim which is used for the user mapping.
		 * Required
		 */
		mappingClaim: FormControl<string | null | undefined>,

		/**
		 * Name of the IDP
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * PKCE code challenge method.
		 * cf. [RFC 7636](https://tools.ietf.org/html/rfc7636)
		 */
		pkceChallengeMethod: FormControl<string | null | undefined>,

		/**
		 * Determines whether PKCE is enabled.
		 * cf. [RFC 7636](https://tools.ietf.org/html/rfc7636)
		 */
		pkceEnabled: FormControl<boolean | null | undefined>,

		/**
		 * URL of the token endpoint
		 * Required
		 */
		tokenEndPointUrl: FormControl<string | null | undefined>,

		/**
		 * Determines if a DRACOON account is automatically created for a new user
		 * who successfully logs on with his / her AD / IDP account.
		 */
		userImportEnabled: FormControl<boolean | null | undefined>,

		/**
		 * User group that is assigned to users who are created by automatic import.
		 * Reset with `0`
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userImportGroup: FormControl<string | null | undefined>,

		/**
		 * URL of the user info endpoint
		 * Required
		 */
		userInfoEndPointUrl: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.23.0
		 * Source, which is used to get user information at the import or update of a user.
		 */
		userInfoSource: FormControl<CreateOpenIdIdpConfigRequestUserInfoSource | null | undefined>,

		/**
		 * URL of the user management UI.
		 * Use empty string to remove.
		 */
		userManagementUrl: FormControl<string | null | undefined>,

		/**
		 * Determines if the DRACOON account is updated with data from AD / IDP.
		 * For OpenID Connect, the scopes `email` and `profile` are needed.
		 */
		userUpdateEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateOpenIdIdpConfigRequestFormGroup() {
		return new FormGroup<CreateOpenIdIdpConfigRequestFormProperties>({
			authorizationEndPointUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fallbackMappingClaim: new FormControl<string | null | undefined>(undefined),
			flow: new FormControl<CreateOpenIdIdpConfigRequestFlow | null | undefined>(undefined),
			issuer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jwksEndPointUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mappingClaim: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pkceChallengeMethod: new FormControl<string | null | undefined>(undefined),
			pkceEnabled: new FormControl<boolean | null | undefined>(undefined),
			tokenEndPointUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userImportEnabled: new FormControl<boolean | null | undefined>(undefined),
			userImportGroup: new FormControl<string | null | undefined>(undefined),
			userInfoEndPointUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userInfoSource: new FormControl<CreateOpenIdIdpConfigRequestUserInfoSource | null | undefined>(undefined),
			userManagementUrl: new FormControl<string | null | undefined>(undefined),
			userUpdateEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CreateOpenIdIdpConfigRequestFlow { authorization_code = 'authorization_code', hybrid = 'hybrid' }

	export enum CreateOpenIdIdpConfigRequestUserInfoSource { user_info_endpoint = 'user_info_endpoint', id_token = 'id_token' }


	/** Request model for creating a room */
	export interface CreateRoomRequest {

		/**
		 * List of group ids
		 * A room requires at least one admin (user or group)
		 */
		adminGroupIds?: Array<number>;

		/**
		 * List of user ids
		 * A room requires at least one admin (user or group)
		 */
		adminIds?: Array<number>;

		/**
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 * Provided (or default) classification is taken from room
		 * when file gets uploaded without any classification.
		 */
		classification?: CreateRoomRequestClassification;

		/** Is activities log active (for rooms only) */
		hasActivitiesLog?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.10.0
		 * Is recycle bin active (for rooms only)
		 * Recycle bin is always on (disabling is not possible).
		 */
		hasRecycleBin?: boolean | null;

		/**
		 * Inherit permissions from parent room
		 * (default: `false` if `parentId` is `0`; otherwise: `true`)
		 */
		inheritPermissions?: boolean | null;

		/**
		 * Name
		 * Required
		 */
		name: string;

		/**
		 * Behaviour when new users are added to the group:
		 * * `autoallow`
		 * * `pending`
		 * Only relevant if `adminGroupIds` has items.
		 */
		newGroupMemberAcceptance?: ConfigRoomRequestNewGroupMemberAcceptance | null;

		/**
		 * User notes
		 * Use empty string to remove.
		 */
		notes?: string | null;

		/**
		 * Parent room ID or `null` (not 0) to create a top level room
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId?: string | null;

		/**
		 * Quota in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quota?: string | null;

		/**
		 * Retention period for deleted nodes in days
		 * Minimum: 0
		 * Maximum: 9999
		 */
		recycleBinRetentionPeriod?: number | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampCreation?: Date | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampModification?: Date | null;
	}

	/** Request model for creating a room */
	export interface CreateRoomRequestFormProperties {

		/**
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 * Provided (or default) classification is taken from room
		 * when file gets uploaded without any classification.
		 */
		classification: FormControl<CreateRoomRequestClassification | null | undefined>,

		/** Is activities log active (for rooms only) */
		hasActivitiesLog: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.10.0
		 * Is recycle bin active (for rooms only)
		 * Recycle bin is always on (disabling is not possible).
		 */
		hasRecycleBin: FormControl<boolean | null | undefined>,

		/**
		 * Inherit permissions from parent room
		 * (default: `false` if `parentId` is `0`; otherwise: `true`)
		 */
		inheritPermissions: FormControl<boolean | null | undefined>,

		/**
		 * Name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Behaviour when new users are added to the group:
		 * * `autoallow`
		 * * `pending`
		 * Only relevant if `adminGroupIds` has items.
		 */
		newGroupMemberAcceptance: FormControl<ConfigRoomRequestNewGroupMemberAcceptance | null | undefined>,

		/**
		 * User notes
		 * Use empty string to remove.
		 */
		notes: FormControl<string | null | undefined>,

		/**
		 * Parent room ID or `null` (not 0) to create a top level room
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId: FormControl<string | null | undefined>,

		/**
		 * Quota in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quota: FormControl<string | null | undefined>,

		/**
		 * Retention period for deleted nodes in days
		 * Minimum: 0
		 * Maximum: 9999
		 */
		recycleBinRetentionPeriod: FormControl<number | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampCreation: FormControl<Date | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampModification: FormControl<Date | null | undefined>,
	}
	export function CreateCreateRoomRequestFormGroup() {
		return new FormGroup<CreateRoomRequestFormProperties>({
			classification: new FormControl<CreateRoomRequestClassification | null | undefined>(undefined),
			hasActivitiesLog: new FormControl<boolean | null | undefined>(undefined),
			hasRecycleBin: new FormControl<boolean | null | undefined>(undefined),
			inheritPermissions: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			newGroupMemberAcceptance: new FormControl<ConfigRoomRequestNewGroupMemberAcceptance | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			parentId: new FormControl<string | null | undefined>(undefined),
			quota: new FormControl<string | null | undefined>(undefined),
			recycleBinRetentionPeriod: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(9999)]),
			timestampCreation: new FormControl<Date | null | undefined>(undefined),
			timestampModification: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CreateRoomRequestClassification { _1 = 0, _2 = 1, _3 = 2, _4 = 3 }


	/** Request model for creating an upload channel */
	export interface CreateShareUploadChannelRequest {

		/**
		 * &#128640; Since v4.15.0
		 * Upload direct to S3
		 */
		directS3Upload?: boolean | null;

		/**
		 * File name
		 * Required
		 */
		name: string;

		/** Password */
		password?: string | null;

		/**
		 * File size in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size?: string | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampCreation?: Date | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampModification?: Date | null;
	}

	/** Request model for creating an upload channel */
	export interface CreateShareUploadChannelRequestFormProperties {

		/**
		 * &#128640; Since v4.15.0
		 * Upload direct to S3
		 */
		directS3Upload: FormControl<boolean | null | undefined>,

		/**
		 * File name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Password */
		password: FormControl<string | null | undefined>,

		/**
		 * File size in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampCreation: FormControl<Date | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampModification: FormControl<Date | null | undefined>,
	}
	export function CreateCreateShareUploadChannelRequestFormGroup() {
		return new FormGroup<CreateShareUploadChannelRequestFormProperties>({
			directS3Upload: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			timestampCreation: new FormControl<Date | null | undefined>(undefined),
			timestampModification: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Upload channel information */
	export interface CreateShareUploadChannelResponse {

		/**
		 * Upload (channel) ID
		 * Required
		 */
		uploadId: string;

		/**
		 * (public) Upload URL
		 * Required
		 */
		uploadUrl: string;
	}

	/** Upload channel information */
	export interface CreateShareUploadChannelResponseFormProperties {

		/**
		 * Upload (channel) ID
		 * Required
		 */
		uploadId: FormControl<string | null | undefined>,

		/**
		 * (public) Upload URL
		 * Required
		 */
		uploadUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateShareUploadChannelResponseFormGroup() {
		return new FormGroup<CreateShareUploadChannelResponseFormProperties>({
			uploadId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uploadUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for creating an Upload Share */
	export interface CreateUploadShareRequest {

		/**
		 * &#128679; Deprecated since v4.20.0
		 * Language tag for messages to creator
		 */
		creatorLanguage?: string | null;

		/** Expiration information */
		expiration?: ObjectExpiration;

		/**
		 * Number of days after which uploaded files expire
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		filesExpiryPeriod?: number | null;

		/**
		 * &#128640; Since v4.11.0
		 * Internal notes
		 * Maximum: 255
		 */
		internalNotes?: string | null;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Notification email content
		 */
		mailBody?: string | null;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * CSV string of recipient email addresses
		 */
		mailRecipients?: string | null;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Notification email subject
		 */
		mailSubject?: string | null;

		/**
		 * Maximal total size of uploaded files (in bytes)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxSize?: string | null;

		/**
		 * Maximal amount of files to upload
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxSlots?: number | null;

		/**
		 * Alias name
		 * (default: name of the shared node)
		 */
		name?: string | null;

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes?: string | null;

		/**
		 * &#128679; Deprecated since v4.20.0
		 * Notify creator on every upload.
		 */
		notifyCreator?: boolean | null;

		/** Password */
		password?: string | null;

		/** Language tag for messages to receiver */
		receiverLanguage?: string | null;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Notify recipients via email
		 * Please use `POST /shares/uploads/{share_id}/email` API instead.
		 */
		sendMail?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Send share password via SMS
		 * Please use `textMessageRecipients` attribute instead.
		 */
		sendSms?: boolean | null;

		/**
		 * &#128640; Since v4.11.0
		 * Show creator first and last name.
		 */
		showCreatorName?: boolean | null;

		/**
		 * &#128640; Since v4.11.0
		 * Show creator email address.
		 */
		showCreatorUsername?: boolean | null;

		/** Allow display of already uploaded files */
		showUploadedFiles?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * CSV string of recipient MSISDNs
		 */
		smsRecipients?: string | null;

		/**
		 * Target room or folder ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		targetId: string;

		/**
		 * &#128640; Since v4.11.0
		 * List of recipient FQTNs
		 * E.123 / E.164 Format
		 */
		textMessageRecipients?: Array<string>;
	}

	/** Request model for creating an Upload Share */
	export interface CreateUploadShareRequestFormProperties {

		/**
		 * &#128679; Deprecated since v4.20.0
		 * Language tag for messages to creator
		 */
		creatorLanguage: FormControl<string | null | undefined>,

		/**
		 * Number of days after which uploaded files expire
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		filesExpiryPeriod: FormControl<number | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Internal notes
		 * Maximum: 255
		 */
		internalNotes: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Notification email content
		 */
		mailBody: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * CSV string of recipient email addresses
		 */
		mailRecipients: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Notification email subject
		 */
		mailSubject: FormControl<string | null | undefined>,

		/**
		 * Maximal total size of uploaded files (in bytes)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxSize: FormControl<string | null | undefined>,

		/**
		 * Maximal amount of files to upload
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxSlots: FormControl<number | null | undefined>,

		/**
		 * Alias name
		 * (default: name of the shared node)
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.20.0
		 * Notify creator on every upload.
		 */
		notifyCreator: FormControl<boolean | null | undefined>,

		/** Password */
		password: FormControl<string | null | undefined>,

		/** Language tag for messages to receiver */
		receiverLanguage: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Notify recipients via email
		 * Please use `POST /shares/uploads/{share_id}/email` API instead.
		 */
		sendMail: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Send share password via SMS
		 * Please use `textMessageRecipients` attribute instead.
		 */
		sendSms: FormControl<boolean | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Show creator first and last name.
		 */
		showCreatorName: FormControl<boolean | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Show creator email address.
		 */
		showCreatorUsername: FormControl<boolean | null | undefined>,

		/** Allow display of already uploaded files */
		showUploadedFiles: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * CSV string of recipient MSISDNs
		 */
		smsRecipients: FormControl<string | null | undefined>,

		/**
		 * Target room or folder ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		targetId: FormControl<string | null | undefined>,
	}
	export function CreateCreateUploadShareRequestFormGroup() {
		return new FormGroup<CreateUploadShareRequestFormProperties>({
			creatorLanguage: new FormControl<string | null | undefined>(undefined),
			filesExpiryPeriod: new FormControl<number | null | undefined>(undefined),
			internalNotes: new FormControl<string | null | undefined>(undefined),
			mailBody: new FormControl<string | null | undefined>(undefined),
			mailRecipients: new FormControl<string | null | undefined>(undefined),
			mailSubject: new FormControl<string | null | undefined>(undefined),
			maxSize: new FormControl<string | null | undefined>(undefined),
			maxSlots: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			notifyCreator: new FormControl<boolean | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			receiverLanguage: new FormControl<string | null | undefined>(undefined),
			sendMail: new FormControl<boolean | null | undefined>(undefined),
			sendSms: new FormControl<boolean | null | undefined>(undefined),
			showCreatorName: new FormControl<boolean | null | undefined>(undefined),
			showCreatorUsername: new FormControl<boolean | null | undefined>(undefined),
			showUploadedFiles: new FormControl<boolean | null | undefined>(undefined),
			smsRecipients: new FormControl<string | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for creating an user */
	export interface CreateUserRequest {

		/** User Authentication Data */
		authData?: UserAuthData;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * Authentication methods:
		 * * `sql`
		 * * `active_directory`
		 * * `radius`
		 * * `openid`
		 * use `authData` instead
		 */
		authMethods?: Array<UserAuthMethod>;

		/** Email */
		email?: string | null;

		/** Expiration information */
		expiration?: ObjectExpiration;

		/**
		 * User first name
		 * Required
		 */
		firstName: string;

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Gender
		 * Do NOT use `gender`! It will be ignored.
		 */
		gender?: string | null;

		/**
		 * &#128640; Since v4.12.0
		 * Determines whether user has the role NONMEMBER_VIEWER
		 */
		isNonmemberViewer?: boolean | null;

		/**
		 * User last name
		 * Required
		 */
		lastName: string;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * User login name
		 */
		login?: string | null;

		/** Multi-factor authentication configuration */
		mfaConfig?: MfaConfig;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * Determines whether user has to change his / her initial password.
		 * use `authDate.mustChangePassword` instead
		 */
		needsToChangePassword?: boolean | null;

		/**
		 * &#128640; Since v4.9.0
		 * Notify user about his new account
		 * * default: `true` for `basic` auth type
		 * * default: `false` for `active_directory`, `openid` and `radius` auth types
		 */
		notifyUser?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * An initial password may be preset
		 * use `authData` instead
		 */
		password?: string | null;

		/** Phone number */
		phone?: string | null;

		/** IETF language tag */
		receiverLanguage?: string | null;

		/**
		 * &#128679; Deprecated since v4.18.0
		 * Job title
		 */
		title?: string | null;

		/**
		 * &#128640; Since v4.13.0
		 * Username
		 */
		userName?: string | null;
	}

	/** Request model for creating an user */
	export interface CreateUserRequestFormProperties {

		/** Email */
		email: FormControl<string | null | undefined>,

		/**
		 * User first name
		 * Required
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Gender
		 * Do NOT use `gender`! It will be ignored.
		 */
		gender: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.12.0
		 * Determines whether user has the role NONMEMBER_VIEWER
		 */
		isNonmemberViewer: FormControl<boolean | null | undefined>,

		/**
		 * User last name
		 * Required
		 */
		lastName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.13.0
		 * User login name
		 */
		login: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.13.0
		 * Determines whether user has to change his / her initial password.
		 * use `authDate.mustChangePassword` instead
		 */
		needsToChangePassword: FormControl<boolean | null | undefined>,

		/**
		 * &#128640; Since v4.9.0
		 * Notify user about his new account
		 * * default: `true` for `basic` auth type
		 * * default: `false` for `active_directory`, `openid` and `radius` auth types
		 */
		notifyUser: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.13.0
		 * An initial password may be preset
		 * use `authData` instead
		 */
		password: FormControl<string | null | undefined>,

		/** Phone number */
		phone: FormControl<string | null | undefined>,

		/** IETF language tag */
		receiverLanguage: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.18.0
		 * Job title
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.13.0
		 * Username
		 */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gender: new FormControl<string | null | undefined>(undefined),
			isNonmemberViewer: new FormControl<boolean | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			login: new FormControl<string | null | undefined>(undefined),
			needsToChangePassword: new FormControl<boolean | null | undefined>(undefined),
			notifyUser: new FormControl<boolean | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			receiverLanguage: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User Authentication Data */
	export interface UserAuthData {

		/**
		 * ID of the user's Active Directory.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		adConfigId?: number | null;

		/** User login name */
		login?: string | null;

		/**
		 * Authentication method
		 * Authentication methods:
		 * * `basic`
		 * * `active_directory`
		 * * `radius`
		 * * `openid`
		 * Required
		 */
		method: string;

		/**
		 * Determines whether user has to change his / her password
		 * * default: `true` for `basic` auth type
		 * * default: `false` for `active_directory`, `openid` and `radius` auth types
		 */
		mustChangePassword?: boolean | null;

		/**
		 * ID of the user's OIDC provider.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		oidConfigId?: number | null;

		/**
		 * Password (only relevant for `basic` authentication type)
		 * *NOT* your Active Directory, OpenID or RADIUS password!
		 */
		password?: string | null;
	}

	/** User Authentication Data */
	export interface UserAuthDataFormProperties {

		/**
		 * ID of the user's Active Directory.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		adConfigId: FormControl<number | null | undefined>,

		/** User login name */
		login: FormControl<string | null | undefined>,

		/**
		 * Authentication method
		 * Authentication methods:
		 * * `basic`
		 * * `active_directory`
		 * * `radius`
		 * * `openid`
		 * Required
		 */
		method: FormControl<string | null | undefined>,

		/**
		 * Determines whether user has to change his / her password
		 * * default: `true` for `basic` auth type
		 * * default: `false` for `active_directory`, `openid` and `radius` auth types
		 */
		mustChangePassword: FormControl<boolean | null | undefined>,

		/**
		 * ID of the user's OIDC provider.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		oidConfigId: FormControl<number | null | undefined>,

		/**
		 * Password (only relevant for `basic` authentication type)
		 * *NOT* your Active Directory, OpenID or RADIUS password!
		 */
		password: FormControl<string | null | undefined>,
	}
	export function CreateUserAuthDataFormGroup() {
		return new FormGroup<UserAuthDataFormProperties>({
			adConfigId: new FormControl<number | null | undefined>(undefined),
			login: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mustChangePassword: new FormControl<boolean | null | undefined>(undefined),
			oidConfigId: new FormControl<number | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Authentication method */
	export interface UserAuthMethod {

		/**
		 * Authentication method
		 * Authentication methods:
		 * * `basic`
		 * * `active_directory`
		 * * `radius`
		 * * `openid`
		 * Required
		 */
		authId: string;

		/**
		 * Is enabled
		 * Required
		 */
		isEnabled: boolean;

		/** Authentication method options */
		options?: Array<KeyValueEntry>;
	}

	/** Authentication method */
	export interface UserAuthMethodFormProperties {

		/**
		 * Authentication method
		 * Authentication methods:
		 * * `basic`
		 * * `active_directory`
		 * * `radius`
		 * * `openid`
		 * Required
		 */
		authId: FormControl<string | null | undefined>,

		/**
		 * Is enabled
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUserAuthMethodFormGroup() {
		return new FormGroup<UserAuthMethodFormProperties>({
			authId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Multi-factor authentication configuration */
	export interface MfaConfig {
		mfaEnforced?: boolean | null;
	}

	/** Multi-factor authentication configuration */
	export interface MfaConfigFormProperties {
		mfaEnforced: FormControl<boolean | null | undefined>,
	}
	export function CreateMfaConfigFormGroup() {
		return new FormGroup<MfaConfigFormProperties>({
			mfaEnforced: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request model for creating a webhook */
	export interface CreateWebhookRequest {

		/**
		 * List of names of event types
		 * Required
		 */
		eventTypeNames: Array<string>;

		/** Is enabled */
		isEnabled?: boolean | null;

		/**
		 * Name
		 * Required
		 */
		name: string;

		/** Secret; used for event message signatures */
		secret?: string | null;

		/** If set to true, an example event is being created */
		triggerExampleEvent?: boolean | null;

		/**
		 * URL (must begin with the `HTTPS` scheme)
		 * Required
		 */
		url: string;
	}

	/** Request model for creating a webhook */
	export interface CreateWebhookRequestFormProperties {

		/** Is enabled */
		isEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Secret; used for event message signatures */
		secret: FormControl<string | null | undefined>,

		/** If set to true, an example event is being created */
		triggerExampleEvent: FormControl<boolean | null | undefined>,

		/**
		 * URL (must begin with the `HTTPS` scheme)
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCreateWebhookRequestFormGroup() {
		return new FormGroup<CreateWebhookRequestFormProperties>({
			isEnabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secret: new FormControl<string | null | undefined>(undefined),
			triggerExampleEvent: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Customer information */
	export interface Customer {

		/**
		 * &#128679; Deprecated since v4.8.0
		 * Customer activation code string:
		 * * valid only for types `free` and `demo`
		 * * for `pay` customers it is empty
		 */
		activationCode?: string | null;

		/**
		 * Number of guest user accounts
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntGuestUser: number;

		/**
		 * Number of internal user accounts
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntInternalUser: number;

		/**
		 * Company name
		 * Required
		 */
		companyName: string;

		/**
		 * Creation date
		 * Required
		 */
		createdAt: Date;

		/** List of customer attributes */
		customerAttributes?: CustomerAttributes;

		/**
		 * Customer type
		 * Required
		 */
		customerContractType: CustomerCustomerContractType;

		/**
		 * &#128640; Since v4.21.0
		 * Customer UUID
		 * Required
		 */
		customerUuid: string;

		/**
		 * Unique identifier for the customer
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Customer is locked:
		 * * `false` - unlocked
		 * * `true` - locked
		 * All users of this customer will be blocked and can not login anymore.
		 */
		isLocked?: boolean | null;

		/** Date of last seen login for the customer */
		lastLoginAt?: Date | null;

		/**
		 * &#128679; Deprecated since v4.7.0
		 * Customer lock status:
		 * * `false` - unlocked
		 * * `true` - locked
		 * Please use `isLocked` instead.
		 * All users of this customer will be blocked and can not login anymore.
		 * Required
		 */
		lockStatus: boolean;

		/** Provider customer ID */
		providerCustomerId?: string | null;

		/**
		 * Maximal disc space which can be allocated by customer in bytes. -1 for unlimited
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quotaMax: string;

		/**
		 * Used amount of disc space in bytes
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quotaUsed: string;

		/**
		 * Number of days left for trial period (relevant only for type `demo`)
		 * (not used)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		trialDaysLeft?: number | null;

		/** Modification date */
		updatedAt?: Date | null;

		/**
		 * Maximal number of users
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userMax: number;

		/**
		 * Number of users which are already allocated.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userUsed: number;

		/**
		 * &#128640; Since v4.19.0
		 * Maximal number of webhooks
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		webhooksMax?: string | null;
	}

	/** Customer information */
	export interface CustomerFormProperties {

		/**
		 * &#128679; Deprecated since v4.8.0
		 * Customer activation code string:
		 * * valid only for types `free` and `demo`
		 * * for `pay` customers it is empty
		 */
		activationCode: FormControl<string | null | undefined>,

		/**
		 * Number of guest user accounts
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntGuestUser: FormControl<number | null | undefined>,

		/**
		 * Number of internal user accounts
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntInternalUser: FormControl<number | null | undefined>,

		/**
		 * Company name
		 * Required
		 */
		companyName: FormControl<string | null | undefined>,

		/**
		 * Creation date
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Customer type
		 * Required
		 */
		customerContractType: FormControl<CustomerCustomerContractType | null | undefined>,

		/**
		 * &#128640; Since v4.21.0
		 * Customer UUID
		 * Required
		 */
		customerUuid: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the customer
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Customer is locked:
		 * * `false` - unlocked
		 * * `true` - locked
		 * All users of this customer will be blocked and can not login anymore.
		 */
		isLocked: FormControl<boolean | null | undefined>,

		/** Date of last seen login for the customer */
		lastLoginAt: FormControl<Date | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.7.0
		 * Customer lock status:
		 * * `false` - unlocked
		 * * `true` - locked
		 * Please use `isLocked` instead.
		 * All users of this customer will be blocked and can not login anymore.
		 * Required
		 */
		lockStatus: FormControl<boolean | null | undefined>,

		/** Provider customer ID */
		providerCustomerId: FormControl<string | null | undefined>,

		/**
		 * Maximal disc space which can be allocated by customer in bytes. -1 for unlimited
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quotaMax: FormControl<string | null | undefined>,

		/**
		 * Used amount of disc space in bytes
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quotaUsed: FormControl<string | null | undefined>,

		/**
		 * Number of days left for trial period (relevant only for type `demo`)
		 * (not used)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		trialDaysLeft: FormControl<number | null | undefined>,

		/** Modification date */
		updatedAt: FormControl<Date | null | undefined>,

		/**
		 * Maximal number of users
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userMax: FormControl<number | null | undefined>,

		/**
		 * Number of users which are already allocated.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userUsed: FormControl<number | null | undefined>,

		/**
		 * &#128640; Since v4.19.0
		 * Maximal number of webhooks
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		webhooksMax: FormControl<string | null | undefined>,
	}
	export function CreateCustomerFormGroup() {
		return new FormGroup<CustomerFormProperties>({
			activationCode: new FormControl<string | null | undefined>(undefined),
			cntGuestUser: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			cntInternalUser: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			companyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			customerContractType: new FormControl<CustomerCustomerContractType | null | undefined>(undefined, [Validators.required]),
			customerUuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isLocked: new FormControl<boolean | null | undefined>(undefined),
			lastLoginAt: new FormControl<Date | null | undefined>(undefined),
			lockStatus: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			providerCustomerId: new FormControl<string | null | undefined>(undefined),
			quotaMax: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			quotaUsed: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trialDaysLeft: new FormControl<number | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			userMax: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			userUsed: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			webhooksMax: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of customer attributes */
	export interface CustomerAttributes {

		/**
		 * List of customer attributes
		 * Required
		 */
		items: Array<KeyValueEntry>;
	}

	/** List of customer attributes */
	export interface CustomerAttributesFormProperties {
	}
	export function CreateCustomerAttributesFormGroup() {
		return new FormGroup<CustomerAttributesFormProperties>({
		});

	}

	export enum CustomerCustomerContractType { demo = 'demo', free = 'free', pay = 'pay' }


	/** Customer information */
	export interface CustomerData {

		/**
		 * User accounts limit
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accountsLimit: number;

		/**
		 * User accounts used
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accountsUsed: number;

		/**
		 * Number of guest user accounts
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntGuestUser: number;

		/**
		 * Number of internal user accounts
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntInternalUser: number;

		/**
		 * Clientside encryption for customer enabled
		 * Required
		 */
		customerEncryptionEnabled: boolean;

		/**
		 * Unique identifier for the customer
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Customer is Provider Customer
		 * Required
		 */
		isProviderCustomer: boolean;

		/**
		 * Customer name
		 * Required
		 */
		name: string;

		/**
		 * Space limit (in bytes). -1 for unlimited
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		spaceLimit: string;

		/**
		 * Space used (in bytes)
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		spaceUsed: string;
	}

	/** Customer information */
	export interface CustomerDataFormProperties {

		/**
		 * User accounts limit
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accountsLimit: FormControl<number | null | undefined>,

		/**
		 * User accounts used
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accountsUsed: FormControl<number | null | undefined>,

		/**
		 * Number of guest user accounts
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntGuestUser: FormControl<number | null | undefined>,

		/**
		 * Number of internal user accounts
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntInternalUser: FormControl<number | null | undefined>,

		/**
		 * Clientside encryption for customer enabled
		 * Required
		 */
		customerEncryptionEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Unique identifier for the customer
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Customer is Provider Customer
		 * Required
		 */
		isProviderCustomer: FormControl<boolean | null | undefined>,

		/**
		 * Customer name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Space limit (in bytes). -1 for unlimited
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		spaceLimit: FormControl<string | null | undefined>,

		/**
		 * Space used (in bytes)
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		spaceUsed: FormControl<string | null | undefined>,
	}
	export function CreateCustomerDataFormGroup() {
		return new FormGroup<CustomerDataFormProperties>({
			accountsLimit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			accountsUsed: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			cntGuestUser: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			cntInternalUser: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			customerEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isProviderCustomer: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			spaceLimit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			spaceUsed: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of customers */
	export interface CustomerList {

		/**
		 * List of customers
		 * Required
		 */
		items: Array<Customer>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of customers */
	export interface CustomerListFormProperties {
	}
	export function CreateCustomerListFormGroup() {
		return new FormGroup<CustomerListFormProperties>({
		});

	}


	/** Request model for setting the customer settings */
	export interface CustomerSettingsRequest {

		/** Homeroom Parent Name */
		homeRoomParentName?: string | null;

		/**
		 * Homeroom Quota in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeRoomQuota?: string | null;

		/** Homerooms active */
		homeRoomsActive?: boolean | null;
	}

	/** Request model for setting the customer settings */
	export interface CustomerSettingsRequestFormProperties {

		/** Homeroom Parent Name */
		homeRoomParentName: FormControl<string | null | undefined>,

		/**
		 * Homeroom Quota in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeRoomQuota: FormControl<string | null | undefined>,

		/** Homerooms active */
		homeRoomsActive: FormControl<boolean | null | undefined>,
	}
	export function CreateCustomerSettingsRequestFormGroup() {
		return new FormGroup<CustomerSettingsRequestFormProperties>({
			homeRoomParentName: new FormControl<string | null | undefined>(undefined),
			homeRoomQuota: new FormControl<string | null | undefined>(undefined),
			homeRoomsActive: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Customer settings */
	export interface CustomerSettingsResponse {

		/**
		 * Homeroom Parent ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeRoomParentId?: string | null;

		/** Homeroom Parent Name */
		homeRoomParentName?: string | null;

		/**
		 * Homeroom Quota in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeRoomQuota?: string | null;

		/**
		 * Homerooms active
		 * Required
		 */
		homeRoomsActive: boolean;
	}

	/** Customer settings */
	export interface CustomerSettingsResponseFormProperties {

		/**
		 * Homeroom Parent ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeRoomParentId: FormControl<string | null | undefined>,

		/** Homeroom Parent Name */
		homeRoomParentName: FormControl<string | null | undefined>,

		/**
		 * Homeroom Quota in bytes
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeRoomQuota: FormControl<string | null | undefined>,

		/**
		 * Homerooms active
		 * Required
		 */
		homeRoomsActive: FormControl<boolean | null | undefined>,
	}
	export function CreateCustomerSettingsResponseFormGroup() {
		return new FormGroup<CustomerSettingsResponseFormProperties>({
			homeRoomParentId: new FormControl<string | null | undefined>(undefined),
			homeRoomParentName: new FormControl<string | null | undefined>(undefined),
			homeRoomQuota: new FormControl<string | null | undefined>(undefined),
			homeRoomsActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for deleting nodes from recycle bin */
	export interface DeleteDeletedNodesRequest {

		/**
		 * List of deleted node IDs
		 * Required
		 */
		deletedNodeIds: Array<number>;
	}

	/** Request model for deleting nodes from recycle bin */
	export interface DeleteDeletedNodesRequestFormProperties {
	}
	export function CreateDeleteDeletedNodesRequestFormGroup() {
		return new FormGroup<DeleteDeletedNodesRequestFormProperties>({
		});

	}


	/** Request model for deleting Download Shares */
	export interface DeleteDownloadSharesRequest {

		/**
		 * List of share IDs
		 * Required
		 */
		shareIds: Array<number>;
	}

	/** Request model for deleting Download Shares */
	export interface DeleteDownloadSharesRequestFormProperties {
	}
	export function CreateDeleteDownloadSharesRequestFormGroup() {
		return new FormGroup<DeleteDownloadSharesRequestFormProperties>({
		});

	}


	/** Request model for deleting nodes */
	export interface DeleteNodesRequest {

		/**
		 * List of node IDs
		 * Required
		 */
		nodeIds: Array<number>;
	}

	/** Request model for deleting nodes */
	export interface DeleteNodesRequestFormProperties {
	}
	export function CreateDeleteNodesRequestFormGroup() {
		return new FormGroup<DeleteNodesRequestFormProperties>({
		});

	}


	/** Request model for deleting Upload Shares */
	export interface DeleteUploadSharesRequest {

		/**
		 * List of share IDs
		 * Required
		 */
		shareIds: Array<number>;
	}

	/** Request model for deleting Upload Shares */
	export interface DeleteUploadSharesRequestFormProperties {
	}
	export function CreateDeleteUploadSharesRequestFormGroup() {
		return new FormGroup<DeleteUploadSharesRequestFormProperties>({
		});

	}


	/** Deleted node information (Deleted node can be a folder or file) */
	export interface DeletedNode {

		/** Last access date */
		accessedAt?: Date | null;

		/**
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 * (default: classification from parent room)
		 */
		classification?: DeletedNodeClassification;

		/** Creation date */
		createdAt?: Date | null;

		/** User information */
		createdBy?: UserInfo;

		/** Deletion date */
		deletedAt?: Date | null;

		/** User information */
		deletedBy?: UserInfo;

		/** Expiration date */
		expireAt?: Date | null;

		/**
		 * Node ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Encryption state */
		isEncrypted?: boolean | null;

		/**
		 * Node name
		 * Required
		 */
		name: string;

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes?: string | null;

		/**
		 * Parent node ID (room or folder)
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId: string;

		/**
		 * Parent node path
		 * `/` if node is a root node (room)
		 * Required
		 */
		parentPath: string;

		/**
		 * &#128640; Since v4.37.0
		 * Reference ID. Identical across all versions of a file
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		referenceId?: string | null;

		/**
		 * Node size in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size?: string | null;

		/**
		 * Node type
		 * Required
		 */
		type: DeletedNodeType;

		/** Modification date */
		updatedAt?: Date | null;

		/** User information */
		updatedBy?: UserInfo;
	}

	/** Deleted node information (Deleted node can be a folder or file) */
	export interface DeletedNodeFormProperties {

		/** Last access date */
		accessedAt: FormControl<Date | null | undefined>,

		/**
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 * (default: classification from parent room)
		 */
		classification: FormControl<DeletedNodeClassification | null | undefined>,

		/** Creation date */
		createdAt: FormControl<Date | null | undefined>,

		/** Deletion date */
		deletedAt: FormControl<Date | null | undefined>,

		/** Expiration date */
		expireAt: FormControl<Date | null | undefined>,

		/**
		 * Node ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Encryption state */
		isEncrypted: FormControl<boolean | null | undefined>,

		/**
		 * Node name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes: FormControl<string | null | undefined>,

		/**
		 * Parent node ID (room or folder)
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId: FormControl<string | null | undefined>,

		/**
		 * Parent node path
		 * `/` if node is a root node (room)
		 * Required
		 */
		parentPath: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.37.0
		 * Reference ID. Identical across all versions of a file
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		referenceId: FormControl<string | null | undefined>,

		/**
		 * Node size in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size: FormControl<string | null | undefined>,

		/**
		 * Node type
		 * Required
		 */
		type: FormControl<DeletedNodeType | null | undefined>,

		/** Modification date */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDeletedNodeFormGroup() {
		return new FormGroup<DeletedNodeFormProperties>({
			accessedAt: new FormControl<Date | null | undefined>(undefined),
			classification: new FormControl<DeletedNodeClassification | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			deletedAt: new FormControl<Date | null | undefined>(undefined),
			expireAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isEncrypted: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			notes: new FormControl<string | null | undefined>(undefined),
			parentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceId: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DeletedNodeType | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DeletedNodeClassification { _1 = 0, _2 = 1, _3 = 2, _4 = 3 }

	export enum DeletedNodeType { folder = 'folder', file = 'file' }


	/** Deleted node information (Deleted node can be a folder or file) */
	export interface DeletedNodeSummary {

		/**
		 * Number of deleted versions of this file
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntVersions: number;

		/**
		 * First deleted version
		 * Required
		 */
		firstDeletedAt: Date;

		/**
		 * Last deleted version
		 * Required
		 */
		lastDeletedAt: Date;

		/**
		 * Node ID of last deleted version
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		lastDeletedNodeId: string;

		/**
		 * Node name
		 * Required
		 */
		name: string;

		/**
		 * Parent node ID (room or folder)
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId: string;

		/**
		 * Parent node path
		 * `/` if node is a root node (room)
		 * Required
		 */
		parentPath: string;

		/**
		 * &#128640; Since v4.37.0
		 * Reference ID. Identical across all versions of a file
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		referenceId?: string | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 */
		timestampCreation?: Date | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 */
		timestampModification?: Date | null;

		/**
		 * Node type
		 * Required
		 */
		type: DeletedNodeType;
	}

	/** Deleted node information (Deleted node can be a folder or file) */
	export interface DeletedNodeSummaryFormProperties {

		/**
		 * Number of deleted versions of this file
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntVersions: FormControl<number | null | undefined>,

		/**
		 * First deleted version
		 * Required
		 */
		firstDeletedAt: FormControl<Date | null | undefined>,

		/**
		 * Last deleted version
		 * Required
		 */
		lastDeletedAt: FormControl<Date | null | undefined>,

		/**
		 * Node ID of last deleted version
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		lastDeletedNodeId: FormControl<string | null | undefined>,

		/**
		 * Node name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Parent node ID (room or folder)
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId: FormControl<string | null | undefined>,

		/**
		 * Parent node path
		 * `/` if node is a root node (room)
		 * Required
		 */
		parentPath: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.37.0
		 * Reference ID. Identical across all versions of a file
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		referenceId: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 */
		timestampCreation: FormControl<Date | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 */
		timestampModification: FormControl<Date | null | undefined>,

		/**
		 * Node type
		 * Required
		 */
		type: FormControl<DeletedNodeType | null | undefined>,
	}
	export function CreateDeletedNodeSummaryFormGroup() {
		return new FormGroup<DeletedNodeSummaryFormProperties>({
			cntVersions: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			firstDeletedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastDeletedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastDeletedNodeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			referenceId: new FormControl<string | null | undefined>(undefined),
			timestampCreation: new FormControl<Date | null | undefined>(undefined),
			timestampModification: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<DeletedNodeType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of deleted nodes */
	export interface DeletedNodeSummaryList {

		/**
		 * List of deleted nodes (summary)
		 * Required
		 */
		items: Array<DeletedNodeSummary>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of deleted nodes */
	export interface DeletedNodeSummaryListFormProperties {
	}
	export function CreateDeletedNodeSummaryListFormGroup() {
		return new FormGroup<DeletedNodeSummaryListFormProperties>({
		});

	}


	/** List of deleted versions of nodes */
	export interface DeletedNodeVersionsList {

		/**
		 * List of deleted nodes
		 * Required
		 */
		items: Array<DeletedNode>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of deleted versions of nodes */
	export interface DeletedNodeVersionsListFormProperties {
	}
	export function CreateDeletedNodeVersionsListFormGroup() {
		return new FormGroup<DeletedNodeVersionsListFormProperties>({
		});

	}


	/** Download Share information */
	export interface DownloadShare {

		/**
		 * Share access key to generate secure link
		 * Required
		 */
		accessKey: string;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 * (default: classification from parent room)
		 */
		classification?: DownloadShareClassification;

		/**
		 * Downloads counter (incremented on each download)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntDownloads: number;

		/**
		 * Creation date
		 * Required
		 */
		createdAt: Date;

		/**
		 * User information
		 * Required
		 */
		createdBy: UserInfo;

		/** Path to shared download node */
		dataUrl?: string | null;

		/** Expiration date */
		expireAt?: Date | null;

		/**
		 * Share ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * &#128640; Since v4.11.0
		 * Internal notes
		 * Maximum: 255
		 */
		internalNotes?: string | null;

		/**
		 * Encrypted share
		 * (this only applies to shared files, not folders)
		 */
		isEncrypted?: boolean | null;

		/** Is share protected by password */
		isProtected?: boolean | null;

		/**
		 * Max allowed downloads
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDownloads?: number | null;

		/**
		 * Alias name
		 * Required
		 */
		name: string;

		/**
		 * Source node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nodeId: string;

		/** Path to shared download node */
		nodePath?: string | null;

		/** Node type */
		nodeType?: string | null;

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes?: string | null;

		/**
		 * &#128679; Deprecated since v4.20.0
		 * Notify creator on every download.
		 * Required
		 */
		notifyCreator: boolean;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * CSV string of recipient email addresses
		 */
		recipients?: string | null;

		/** Show creator first and last name. */
		showCreatorName?: boolean | null;

		/** Show creator email address. */
		showCreatorUsername?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * CSV string of recipient MSISDNs
		 */
		smsRecipients?: string | null;

		/** Modification date */
		updatedAt?: Date | null;

		/** User information */
		updatedBy?: UserInfo;
	}

	/** Download Share information */
	export interface DownloadShareFormProperties {

		/**
		 * Share access key to generate secure link
		 * Required
		 */
		accessKey: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 * (default: classification from parent room)
		 */
		classification: FormControl<DownloadShareClassification | null | undefined>,

		/**
		 * Downloads counter (incremented on each download)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntDownloads: FormControl<number | null | undefined>,

		/**
		 * Creation date
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/** Path to shared download node */
		dataUrl: FormControl<string | null | undefined>,

		/** Expiration date */
		expireAt: FormControl<Date | null | undefined>,

		/**
		 * Share ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Internal notes
		 * Maximum: 255
		 */
		internalNotes: FormControl<string | null | undefined>,

		/**
		 * Encrypted share
		 * (this only applies to shared files, not folders)
		 */
		isEncrypted: FormControl<boolean | null | undefined>,

		/** Is share protected by password */
		isProtected: FormControl<boolean | null | undefined>,

		/**
		 * Max allowed downloads
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDownloads: FormControl<number | null | undefined>,

		/**
		 * Alias name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Source node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nodeId: FormControl<string | null | undefined>,

		/** Path to shared download node */
		nodePath: FormControl<string | null | undefined>,

		/** Node type */
		nodeType: FormControl<string | null | undefined>,

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.20.0
		 * Notify creator on every download.
		 * Required
		 */
		notifyCreator: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * CSV string of recipient email addresses
		 */
		recipients: FormControl<string | null | undefined>,

		/** Show creator first and last name. */
		showCreatorName: FormControl<boolean | null | undefined>,

		/** Show creator email address. */
		showCreatorUsername: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * CSV string of recipient MSISDNs
		 */
		smsRecipients: FormControl<string | null | undefined>,

		/** Modification date */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateDownloadShareFormGroup() {
		return new FormGroup<DownloadShareFormProperties>({
			accessKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			classification: new FormControl<DownloadShareClassification | null | undefined>(undefined),
			cntDownloads: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			dataUrl: new FormControl<string | null | undefined>(undefined),
			expireAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			internalNotes: new FormControl<string | null | undefined>(undefined),
			isEncrypted: new FormControl<boolean | null | undefined>(undefined),
			isProtected: new FormControl<boolean | null | undefined>(undefined),
			maxDownloads: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nodeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nodePath: new FormControl<string | null | undefined>(undefined),
			nodeType: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			notifyCreator: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			recipients: new FormControl<string | null | undefined>(undefined),
			showCreatorName: new FormControl<boolean | null | undefined>(undefined),
			showCreatorUsername: new FormControl<boolean | null | undefined>(undefined),
			smsRecipients: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DownloadShareClassification { _1 = 0, _2 = 1, _3 = 2, _4 = 3 }


	/** Request model for sending an email of a Download Share link */
	export interface DownloadShareLinkEmail {

		/**
		 * Notification email content
		 * Required
		 */
		body: string;

		/** Language tag for messages to receiver */
		receiverLanguage?: string | null;

		/**
		 * List of recipient email addresses
		 * Required
		 */
		recipients: Array<string>;
	}

	/** Request model for sending an email of a Download Share link */
	export interface DownloadShareLinkEmailFormProperties {

		/**
		 * Notification email content
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/** Language tag for messages to receiver */
		receiverLanguage: FormControl<string | null | undefined>,
	}
	export function CreateDownloadShareLinkEmailFormGroup() {
		return new FormGroup<DownloadShareLinkEmailFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			receiverLanguage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of Download Shares */
	export interface DownloadShareList {

		/**
		 * List of Download Shares
		 * Required
		 */
		items: Array<DownloadShare>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of Download Shares */
	export interface DownloadShareListFormProperties {
	}
	export function CreateDownloadShareListFormGroup() {
		return new FormGroup<DownloadShareListFormProperties>({
		});

	}


	/** Download URL */
	export interface DownloadTokenGenerateResponse {

		/**
		 * Download URL
		 * Required
		 */
		downloadUrl: string;
	}

	/** Download URL */
	export interface DownloadTokenGenerateResponseFormProperties {

		/**
		 * Download URL
		 * Required
		 */
		downloadUrl: FormControl<string | null | undefined>,
	}
	export function CreateDownloadTokenGenerateResponseFormGroup() {
		return new FormGroup<DownloadTokenGenerateResponseFormProperties>({
			downloadUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Emergency TOTP code */
	export interface EmergencyMfaCodeResponse {

		/**
		 * Emergency TOTP code which can be used instead of standard TOTP code
		 * Required
		 */
		code: string;
	}

	/** Emergency TOTP code */
	export interface EmergencyMfaCodeResponseFormProperties {

		/**
		 * Emergency TOTP code which can be used instead of standard TOTP code
		 * Required
		 */
		code: FormControl<string | null | undefined>,
	}
	export function CreateEmergencyMfaCodeResponseFormGroup() {
		return new FormGroup<EmergencyMfaCodeResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for enabling customer encryption */
	export interface EnableCustomerEncryptionRequest {

		/**
		 * Key pair container
		 * Required
		 */
		dataSpaceRescueKey: UserKeyPairContainer;

		/**
		 * Set `true` to enable encryption for this customer
		 * Required
		 */
		enableCustomerEncryption: boolean;
	}

	/** Request model for enabling customer encryption */
	export interface EnableCustomerEncryptionRequestFormProperties {

		/**
		 * Set `true` to enable encryption for this customer
		 * Required
		 */
		enableCustomerEncryption: FormControl<boolean | null | undefined>,
	}
	export function CreateEnableCustomerEncryptionRequestFormGroup() {
		return new FormGroup<EnableCustomerEncryptionRequestFormProperties>({
			enableCustomerEncryption: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for handling encryption settings for a room */
	export interface EncryptRoomRequest {

		/** Key pair container */
		dataRoomRescueKey?: UserKeyPairContainer;

		/**
		 * Encryption state
		 * Required
		 */
		isEncrypted: boolean;

		/** Use system emergency password (rescue key) for files in this room */
		useDataSpaceRescueKey?: boolean | null;
	}

	/** Request model for handling encryption settings for a room */
	export interface EncryptRoomRequestFormProperties {

		/**
		 * Encryption state
		 * Required
		 */
		isEncrypted: FormControl<boolean | null | undefined>,

		/** Use system emergency password (rescue key) for files in this room */
		useDataSpaceRescueKey: FormControl<boolean | null | undefined>,
	}
	export function CreateEncryptRoomRequestFormGroup() {
		return new FormGroup<EncryptRoomRequestFormProperties>({
			isEncrypted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			useDataSpaceRescueKey: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Encryption states */
	export interface EncryptionInfo {

		/**
		 * DRACOON key state
		 * Required
		 */
		dataSpaceKeyState: EncryptionInfoDataSpaceKeyState;

		/**
		 * Room key state
		 * Required
		 */
		roomKeyState: EncryptionInfoDataSpaceKeyState;

		/**
		 * User key state
		 * Required
		 */
		userKeyState: EncryptionInfoDataSpaceKeyState;
	}

	/** Encryption states */
	export interface EncryptionInfoFormProperties {

		/**
		 * DRACOON key state
		 * Required
		 */
		dataSpaceKeyState: FormControl<EncryptionInfoDataSpaceKeyState | null | undefined>,

		/**
		 * Room key state
		 * Required
		 */
		roomKeyState: FormControl<EncryptionInfoDataSpaceKeyState | null | undefined>,

		/**
		 * User key state
		 * Required
		 */
		userKeyState: FormControl<EncryptionInfoDataSpaceKeyState | null | undefined>,
	}
	export function CreateEncryptionInfoFormGroup() {
		return new FormGroup<EncryptionInfoFormProperties>({
			dataSpaceKeyState: new FormControl<EncryptionInfoDataSpaceKeyState | null | undefined>(undefined, [Validators.required]),
			roomKeyState: new FormControl<EncryptionInfoDataSpaceKeyState | null | undefined>(undefined, [Validators.required]),
			userKeyState: new FormControl<EncryptionInfoDataSpaceKeyState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EncryptionInfoDataSpaceKeyState { none = 'none', available = 'available', pending = 'pending' }


	/** Encryption password policies */
	export interface EncryptionPasswordPolicies {

		/** Password character rules */
		characterRules?: CharacterRules;

		/**
		 * Minimum number of characters a password must contain
		 * Minimum: 1
		 * Maximum: 1024
		 */
		minLength?: number | null;

		/**
		 * Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
		 * (min. 4 character pattern)
		 */
		rejectKeyboardPatterns?: boolean | null;

		/** Determines whether a password must NOT contain user info (first name, last name, email, user name) */
		rejectUserInfo?: boolean | null;

		/** Modification date */
		updatedAt?: Date | null;

		/** User information */
		updatedBy?: UserInfo;
	}

	/** Encryption password policies */
	export interface EncryptionPasswordPoliciesFormProperties {

		/**
		 * Minimum number of characters a password must contain
		 * Minimum: 1
		 * Maximum: 1024
		 */
		minLength: FormControl<number | null | undefined>,

		/**
		 * Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
		 * (min. 4 character pattern)
		 */
		rejectKeyboardPatterns: FormControl<boolean | null | undefined>,

		/** Determines whether a password must NOT contain user info (first name, last name, email, user name) */
		rejectUserInfo: FormControl<boolean | null | undefined>,

		/** Modification date */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateEncryptionPasswordPoliciesFormGroup() {
		return new FormGroup<EncryptionPasswordPoliciesFormProperties>({
			minLength: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1024)]),
			rejectKeyboardPatterns: new FormControl<boolean | null | undefined>(undefined),
			rejectUserInfo: new FormControl<boolean | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Error information */
	export interface ErrorResponse {

		/**
		 * HTTP status code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: number;

		/** Debug information */
		debugInfo?: string | null;

		/**
		 * Internal error code
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorCode?: number | null;

		/**
		 * HTTP status code description
		 * Required
		 */
		message: string;
	}

	/** Error information */
	export interface ErrorResponseFormProperties {

		/**
		 * HTTP status code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** Debug information */
		debugInfo: FormControl<string | null | undefined>,

		/**
		 * Internal error code
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorCode: FormControl<number | null | undefined>,

		/**
		 * HTTP status code description
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			debugInfo: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Event type information */
	export interface EventType {

		/**
		 * ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;

		/**
		 * Name
		 * Required
		 */
		name: string;

		/**
		 * Usable as customer admin webhook
		 * Required
		 */
		usableCustomerAdminWebhook: boolean;

		/**
		 * Usable as node webhook
		 * Required
		 */
		usableNodeWebhook: boolean;

		/**
		 * Usable as push notification
		 * Required
		 */
		usablePushNotification: boolean;

		/**
		 * Usable as tenant webhook
		 * Required
		 */
		usableTenantWebhook: boolean;
	}

	/** Event type information */
	export interface EventTypeFormProperties {

		/**
		 * ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Usable as customer admin webhook
		 * Required
		 */
		usableCustomerAdminWebhook: FormControl<boolean | null | undefined>,

		/**
		 * Usable as node webhook
		 * Required
		 */
		usableNodeWebhook: FormControl<boolean | null | undefined>,

		/**
		 * Usable as push notification
		 * Required
		 */
		usablePushNotification: FormControl<boolean | null | undefined>,

		/**
		 * Usable as tenant webhook
		 * Required
		 */
		usableTenantWebhook: FormControl<boolean | null | undefined>,
	}
	export function CreateEventTypeFormGroup() {
		return new FormGroup<EventTypeFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			usableCustomerAdminWebhook: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			usableNodeWebhook: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			usablePushNotification: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			usableTenantWebhook: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of event types */
	export interface EventTypeList {

		/**
		 * List of event types
		 * Required
		 */
		items: Array<EventType>;
	}

	/** List of event types */
	export interface EventTypeListFormProperties {
	}
	export function CreateEventTypeListFormGroup() {
		return new FormGroup<EventTypeListFormProperties>({
		});

	}


	/** Eventlog settings */
	export interface EventlogConfig {

		/** Is eventlog enabled? */
		enabled?: boolean | null;

		/** Determines whether user’s IP address is logged. */
		logIpEnabled?: boolean | null;

		/**
		 * Retention period (in days) of event log entries.
		 * After that period, all entries are deleted.
		 * Recommended value: 7
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionPeriod?: number | null;
	}

	/** Eventlog settings */
	export interface EventlogConfigFormProperties {

		/** Is eventlog enabled? */
		enabled: FormControl<boolean | null | undefined>,

		/** Determines whether user’s IP address is logged. */
		logIpEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Retention period (in days) of event log entries.
		 * After that period, all entries are deleted.
		 * Recommended value: 7
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionPeriod: FormControl<number | null | undefined>,
	}
	export function CreateEventlogConfigFormGroup() {
		return new FormGroup<EventlogConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			logIpEnabled: new FormControl<boolean | null | undefined>(undefined),
			retentionPeriod: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Failover server information */
	export interface FailoverServer {

		/**
		 * RADIUS Failover Server is active
		 * Required
		 */
		failoverEnabled: boolean;

		/**
		 * RADIUS Failover Server IP Address
		 * Required if failover server is enabled.
		 * Required
		 */
		failoverIpAddress: string;

		/**
		 * RADIUS Failover Server Port
		 * Required if failover server is enabled.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failoverPort: number;
	}

	/** Failover server information */
	export interface FailoverServerFormProperties {

		/**
		 * RADIUS Failover Server is active
		 * Required
		 */
		failoverEnabled: FormControl<boolean | null | undefined>,

		/**
		 * RADIUS Failover Server IP Address
		 * Required if failover server is enabled.
		 * Required
		 */
		failoverIpAddress: FormControl<string | null | undefined>,

		/**
		 * RADIUS Failover Server Port
		 * Required if failover server is enabled.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failoverPort: FormControl<number | null | undefined>,
	}
	export function CreateFailoverServerFormGroup() {
		return new FormGroup<FailoverServerFormProperties>({
			failoverEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			failoverIpAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			failoverPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Feature */
	export interface Feature {

		/**
		 * ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		featureId: number;

		/**
		 * Name
		 * Required
		 */
		featureName: string;

		/**
		 * Is Available
		 * Required
		 */
		isAvailable: boolean;
	}

	/** Feature */
	export interface FeatureFormProperties {

		/**
		 * ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		featureId: FormControl<number | null | undefined>,

		/**
		 * Name
		 * Required
		 */
		featureName: FormControl<string | null | undefined>,

		/**
		 * Is Available
		 * Required
		 */
		isAvailable: FormControl<boolean | null | undefined>,
	}
	export function CreateFeatureFormGroup() {
		return new FormGroup<FeatureFormProperties>({
			featureId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			featureName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** OAuthClientInfo */
	export interface FeaturedOAuthClient {

		/**
		 * Is Available
		 * Required
		 */
		isAvailable: boolean;
		oauthClientName?: string | null;
	}

	/** OAuthClientInfo */
	export interface FeaturedOAuthClientFormProperties {

		/**
		 * Is Available
		 * Required
		 */
		isAvailable: FormControl<boolean | null | undefined>,
		oauthClientName: FormControl<string | null | undefined>,
	}
	export function CreateFeaturedOAuthClientFormGroup() {
		return new FormGroup<FeaturedOAuthClientFormProperties>({
			isAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			oauthClientName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** File key information */
	export interface FileFileKeys {

		/** File key container */
		fileKeyContainer?: FileKeyContainer;

		/**
		 * File ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;
	}

	/** File key information */
	export interface FileFileKeysFormProperties {

		/**
		 * File ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateFileFileKeysFormGroup() {
		return new FormGroup<FileFileKeysFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** File key container */
	export interface FileKeyContainer {

		/**
		 * Initial vector
		 * Required
		 */
		iv: string;

		/**
		 * Encryption key
		 * Required
		 */
		key: string;

		/**
		 * Authentication tag
		 * (needed with authenticated encryption)
		 */
		tag?: string | null;

		/**
		 * Version
		 * Required
		 */
		version: string;
	}

	/** File key container */
	export interface FileKeyContainerFormProperties {

		/**
		 * Initial vector
		 * Required
		 */
		iv: FormControl<string | null | undefined>,

		/**
		 * Encryption key
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Authentication tag
		 * (needed with authenticated encryption)
		 */
		tag: FormControl<string | null | undefined>,

		/**
		 * Version
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateFileKeyContainerFormGroup() {
		return new FormGroup<FileKeyContainerFormProperties>({
			iv: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of File Versions */
	export interface FileVersion {
		deleted?: boolean | null;

		/**
		 * Node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Name
		 * Required
		 */
		name: string;

		/**
		 * Parent node ID (room or folder)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId?: string | null;

		/**
		 * Reference ID. Identical across all versions of a file
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		referenceId: string;
	}

	/** List of File Versions */
	export interface FileVersionFormProperties {
		deleted: FormControl<boolean | null | undefined>,

		/**
		 * Node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Parent node ID (room or folder)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId: FormControl<string | null | undefined>,

		/**
		 * Reference ID. Identical across all versions of a file
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		referenceId: FormControl<string | null | undefined>,
	}
	export function CreateFileVersionFormGroup() {
		return new FormGroup<FileVersionFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentId: new FormControl<string | null | undefined>(undefined),
			referenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of File Versions */
	export interface FileVersionList {

		/**
		 * List of file versions
		 * Required
		 */
		items: Array<FileVersion>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of File Versions */
	export interface FileVersionListFormProperties {
	}
	export function CreateFileVersionListFormGroup() {
		return new FormGroup<FileVersionListFormProperties>({
		});

	}


	/** First administrator user */
	export interface FirstAdminUser {

		/** User Authentication Data */
		authData?: UserAuthData;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * Authentication methods:
		 * * `sql`
		 * * `active_directory`
		 * * `radius`
		 * * `openid`
		 * use `authData` instead
		 */
		authMethods?: Array<UserAuthMethod>;

		/** Email */
		email?: string | null;

		/**
		 * User first name
		 * Required
		 */
		firstName: string;

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Gender
		 */
		gender?: string | null;

		/**
		 * &#128679; Deprecated since v4.7.0
		 * Language ID or ISO 639-1 code
		 */
		language?: string | null;

		/**
		 * User last name
		 * Required
		 */
		lastName: string;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * User login name
		 */
		login?: string | null;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * Determines whether user has to change his / her initial password.
		 * use `authDate.mustChangePassword` instead
		 */
		needsToChangePassword?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * If `true`, the user must change the `userName` at the first login.
		 */
		needsToChangeUserName?: boolean | null;

		/**
		 * Notify user about his new account
		 * * default: `true` for `basic` auth type
		 * * default: `false` for `active_directory`, `openid` and `radius` auth types
		 */
		notifyUser?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * An initial password may be preset
		 * use `authData` instead
		 */
		password?: string | null;

		/** Phone number */
		phone?: string | null;

		/** IETF language tag */
		receiverLanguage?: string | null;

		/**
		 * &#128679; Deprecated since v4.18.0
		 * Job title
		 */
		title?: string | null;

		/**
		 * &#128640; Since v4.13.0
		 * Username
		 */
		userName?: string | null;
	}

	/** First administrator user */
	export interface FirstAdminUserFormProperties {

		/** Email */
		email: FormControl<string | null | undefined>,

		/**
		 * User first name
		 * Required
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Gender
		 */
		gender: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.7.0
		 * Language ID or ISO 639-1 code
		 */
		language: FormControl<string | null | undefined>,

		/**
		 * User last name
		 * Required
		 */
		lastName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.13.0
		 * User login name
		 */
		login: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.13.0
		 * Determines whether user has to change his / her initial password.
		 * use `authDate.mustChangePassword` instead
		 */
		needsToChangePassword: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.13.0
		 * If `true`, the user must change the `userName` at the first login.
		 */
		needsToChangeUserName: FormControl<boolean | null | undefined>,

		/**
		 * Notify user about his new account
		 * * default: `true` for `basic` auth type
		 * * default: `false` for `active_directory`, `openid` and `radius` auth types
		 */
		notifyUser: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.13.0
		 * An initial password may be preset
		 * use `authData` instead
		 */
		password: FormControl<string | null | undefined>,

		/** Phone number */
		phone: FormControl<string | null | undefined>,

		/** IETF language tag */
		receiverLanguage: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.18.0
		 * Job title
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.13.0
		 * Username
		 */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateFirstAdminUserFormGroup() {
		return new FormGroup<FirstAdminUserFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gender: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			login: new FormControl<string | null | undefined>(undefined),
			needsToChangePassword: new FormControl<boolean | null | undefined>(undefined),
			needsToChangeUserName: new FormControl<boolean | null | undefined>(undefined),
			notifyUser: new FormControl<boolean | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			receiverLanguage: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** General settings */
	export interface GeneralSettings {

		/** Auth token restrictions */
		authTokenRestrictions?: AuthTokenRestrictions;

		/**
		 * Activation status of client-side encryption.
		 * Can only be enabled once; disabling is not possible.
		 */
		cryptoEnabled?: boolean | null;

		/** Enable email notification button */
		emailNotificationButtonEnabled?: boolean | null;

		/** Each user has to confirm the EULA at first login. */
		eulaEnabled?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.42.0
		 * Defines if login fields should be hidden
		 */
		hideLoginInputFields?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Determines if the media server is enabled
		 */
		mediaServerEnabled?: boolean | null;

		/**
		 * &#128640; Since v4.9.0
		 * Defines if S3 tags are enabled
		 */
		s3TagsEnabled?: boolean | null;

		/** Allow sending of share passwords via SMS */
		sharePasswordSmsEnabled?: boolean | null;

		/** Defines if S3 is used as storage backend */
		useS3Storage?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.14.0
		 * Allow weak password
		 * * A weak password has to fulfill the following criteria:
		 * * is at least 8 characters long
		 * * contains letters and numbers
		 * * A strong password has to fulfill the following criteria in addition:
		 * * contains at least one special character
		 * * contains upper and lower case characters
		 * Please use `GET /system/config/policies/passwords` API to get configured password policies.
		 */
		weakPasswordEnabled?: boolean | null;
	}

	/** General settings */
	export interface GeneralSettingsFormProperties {

		/**
		 * Activation status of client-side encryption.
		 * Can only be enabled once; disabling is not possible.
		 */
		cryptoEnabled: FormControl<boolean | null | undefined>,

		/** Enable email notification button */
		emailNotificationButtonEnabled: FormControl<boolean | null | undefined>,

		/** Each user has to confirm the EULA at first login. */
		eulaEnabled: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.42.0
		 * Defines if login fields should be hidden
		 */
		hideLoginInputFields: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Determines if the media server is enabled
		 */
		mediaServerEnabled: FormControl<boolean | null | undefined>,

		/**
		 * &#128640; Since v4.9.0
		 * Defines if S3 tags are enabled
		 */
		s3TagsEnabled: FormControl<boolean | null | undefined>,

		/** Allow sending of share passwords via SMS */
		sharePasswordSmsEnabled: FormControl<boolean | null | undefined>,

		/** Defines if S3 is used as storage backend */
		useS3Storage: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.14.0
		 * Allow weak password
		 * * A weak password has to fulfill the following criteria:
		 * * is at least 8 characters long
		 * * contains letters and numbers
		 * * A strong password has to fulfill the following criteria in addition:
		 * * contains at least one special character
		 * * contains upper and lower case characters
		 * Please use `GET /system/config/policies/passwords` API to get configured password policies.
		 */
		weakPasswordEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGeneralSettingsFormGroup() {
		return new FormGroup<GeneralSettingsFormProperties>({
			cryptoEnabled: new FormControl<boolean | null | undefined>(undefined),
			emailNotificationButtonEnabled: new FormControl<boolean | null | undefined>(undefined),
			eulaEnabled: new FormControl<boolean | null | undefined>(undefined),
			hideLoginInputFields: new FormControl<boolean | null | undefined>(undefined),
			mediaServerEnabled: new FormControl<boolean | null | undefined>(undefined),
			s3TagsEnabled: new FormControl<boolean | null | undefined>(undefined),
			sharePasswordSmsEnabled: new FormControl<boolean | null | undefined>(undefined),
			useS3Storage: new FormControl<boolean | null | undefined>(undefined),
			weakPasswordEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** General settings */
	export interface GeneralSettingsInfo {

		/** Auth token restrictions */
		authTokenRestrictions?: AuthTokenRestrictions;

		/**
		 * Activation status of client-side encryption.
		 * Can only be enabled once; disabling is not possible.
		 */
		cryptoEnabled?: boolean | null;

		/** Enable email notification button */
		emailNotificationButtonEnabled?: boolean | null;

		/** Each user has to confirm the EULA at first login. */
		eulaEnabled?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.42.0
		 * Defines if login fields should be hidden
		 */
		hideLoginInputFields?: boolean | null;

		/**
		 * &#128640; Since v4.10.0
		 * Homeroom Parent ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeRoomParentId?: string | null;

		/**
		 * &#128640; Since v4.10.0
		 * Homerooms active
		 * Required
		 */
		homeRoomsActive: boolean;

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Determines if the media server is enabled
		 */
		mediaServerEnabled?: boolean | null;

		/**
		 * &#128640; Since v4.9.0
		 * Defines if S3 tags are enabled
		 */
		s3TagsEnabled?: boolean | null;

		/** Allow sending of share passwords via SMS */
		sharePasswordSmsEnabled?: boolean | null;

		/**
		 * &#128640; Since v4.30.0
		 * Subscription Plan
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subscriptionPlan: number;

		/** Defines if S3 is used as storage backend */
		useS3Storage?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.14.0
		 * Allow weak password
		 * * A weak password has to fulfill the following criteria:
		 * * is at least 8 characters long
		 * * contains letters and numbers
		 * * A strong password has to fulfill the following criteria in addition:
		 * * contains at least one special character
		 * * contains upper and lower case characters
		 * Please use `GET /system/config/policies/passwords` API to get configured password policies.
		 */
		weakPasswordEnabled?: boolean | null;
	}

	/** General settings */
	export interface GeneralSettingsInfoFormProperties {

		/**
		 * Activation status of client-side encryption.
		 * Can only be enabled once; disabling is not possible.
		 */
		cryptoEnabled: FormControl<boolean | null | undefined>,

		/** Enable email notification button */
		emailNotificationButtonEnabled: FormControl<boolean | null | undefined>,

		/** Each user has to confirm the EULA at first login. */
		eulaEnabled: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.42.0
		 * Defines if login fields should be hidden
		 */
		hideLoginInputFields: FormControl<boolean | null | undefined>,

		/**
		 * &#128640; Since v4.10.0
		 * Homeroom Parent ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeRoomParentId: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.10.0
		 * Homerooms active
		 * Required
		 */
		homeRoomsActive: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Determines if the media server is enabled
		 */
		mediaServerEnabled: FormControl<boolean | null | undefined>,

		/**
		 * &#128640; Since v4.9.0
		 * Defines if S3 tags are enabled
		 */
		s3TagsEnabled: FormControl<boolean | null | undefined>,

		/** Allow sending of share passwords via SMS */
		sharePasswordSmsEnabled: FormControl<boolean | null | undefined>,

		/**
		 * &#128640; Since v4.30.0
		 * Subscription Plan
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subscriptionPlan: FormControl<number | null | undefined>,

		/** Defines if S3 is used as storage backend */
		useS3Storage: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.14.0
		 * Allow weak password
		 * * A weak password has to fulfill the following criteria:
		 * * is at least 8 characters long
		 * * contains letters and numbers
		 * * A strong password has to fulfill the following criteria in addition:
		 * * contains at least one special character
		 * * contains upper and lower case characters
		 * Please use `GET /system/config/policies/passwords` API to get configured password policies.
		 */
		weakPasswordEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGeneralSettingsInfoFormGroup() {
		return new FormGroup<GeneralSettingsInfoFormProperties>({
			cryptoEnabled: new FormControl<boolean | null | undefined>(undefined),
			emailNotificationButtonEnabled: new FormControl<boolean | null | undefined>(undefined),
			eulaEnabled: new FormControl<boolean | null | undefined>(undefined),
			hideLoginInputFields: new FormControl<boolean | null | undefined>(undefined),
			homeRoomParentId: new FormControl<string | null | undefined>(undefined),
			homeRoomsActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			mediaServerEnabled: new FormControl<boolean | null | undefined>(undefined),
			s3TagsEnabled: new FormControl<boolean | null | undefined>(undefined),
			sharePasswordSmsEnabled: new FormControl<boolean | null | undefined>(undefined),
			subscriptionPlan: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			useS3Storage: new FormControl<boolean | null | undefined>(undefined),
			weakPasswordEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request model for generating presigned URLs */
	export interface GeneratePresignedUrlsRequest {

		/**
		 * First part number of a range of requested presigned URLs (for S3 it is: `1`)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		firstPartNumber: number;

		/**
		 * Last part number of a range of requested presigned URLs
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lastPartNumber: number;

		/**
		 * `Content-Length` header size for each presigned URL (in bytes)
		 * *MUST* be >= 5 MB except the last part.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size: string;
	}

	/** Request model for generating presigned URLs */
	export interface GeneratePresignedUrlsRequestFormProperties {

		/**
		 * First part number of a range of requested presigned URLs (for S3 it is: `1`)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		firstPartNumber: FormControl<number | null | undefined>,

		/**
		 * Last part number of a range of requested presigned URLs
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lastPartNumber: FormControl<number | null | undefined>,

		/**
		 * `Content-Length` header size for each presigned URL (in bytes)
		 * *MUST* be >= 5 MB except the last part.
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size: FormControl<string | null | undefined>,
	}
	export function CreateGeneratePresignedUrlsRequestFormGroup() {
		return new FormGroup<GeneratePresignedUrlsRequestFormProperties>({
			firstPartNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lastPartNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Group information */
	export interface Group {

		/**
		 * Amount of users
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntUsers: number;

		/**
		 * Creation date
		 * Required
		 */
		createdAt: Date;

		/**
		 * User information
		 * Required
		 */
		createdBy: UserInfo;

		/** Expiration date */
		expireAt?: Date | null;

		/** List of roles */
		groupRoles?: RoleList;

		/**
		 * Unique identifier for the group
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Group name
		 * Required
		 */
		name: string;

		/** Modification date */
		updatedAt?: Date | null;

		/** User information */
		updatedBy?: UserInfo;
	}

	/** Group information */
	export interface GroupFormProperties {

		/**
		 * Amount of users
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntUsers: FormControl<number | null | undefined>,

		/**
		 * Creation date
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/** Expiration date */
		expireAt: FormControl<Date | null | undefined>,

		/**
		 * Unique identifier for the group
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Group name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Modification date */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			cntUsers: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			expireAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** List of roles */
	export interface RoleList {

		/**
		 * List of roles
		 * Required
		 */
		items: Array<Role>;
	}

	/** List of roles */
	export interface RoleListFormProperties {
	}
	export function CreateRoleListFormGroup() {
		return new FormGroup<RoleListFormProperties>({
		});

	}


	/** Role information */
	export interface Role {

		/**
		 * Role description
		 * Required
		 */
		description: string;

		/**
		 * Unique identifier for the role
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;

		/** List of reachable right over role */
		items?: Array<Right>;

		/**
		 * Role (unique) name
		 * Required
		 */
		name: string;
	}

	/** Role information */
	export interface RoleFormProperties {

		/**
		 * Role description
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the role
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Role (unique) name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRoleFormGroup() {
		return new FormGroup<RoleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Right information */
	export interface Right {

		/**
		 * Right description
		 * Required
		 */
		description: string;

		/**
		 * Unique identifier for the right
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;

		/**
		 * Right (unique) name
		 * Required
		 */
		name: string;
	}

	/** Right information */
	export interface RightFormProperties {

		/**
		 * Right description
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the right
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Right (unique) name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRightFormGroup() {
		return new FormGroup<RightFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Group IDs */
	export interface GroupIds {

		/**
		 * List of group IDs
		 * Required
		 */
		ids: Array<number>;
	}

	/** Group IDs */
	export interface GroupIdsFormProperties {
	}
	export function CreateGroupIdsFormGroup() {
		return new FormGroup<GroupIdsFormProperties>({
		});

	}


	/** Group information */
	export interface GroupInfo {

		/**
		 * Unique identifier for the group
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Group name
		 * Required
		 */
		name: string;
	}

	/** Group information */
	export interface GroupInfoFormProperties {

		/**
		 * Unique identifier for the group
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Group name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGroupInfoFormGroup() {
		return new FormGroup<GroupInfoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of groups */
	export interface GroupList {

		/**
		 * List of groups
		 * Required
		 */
		items: Array<Group>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of groups */
	export interface GroupListFormProperties {
	}
	export function CreateGroupListFormGroup() {
		return new FormGroup<GroupListFormProperties>({
		});

	}


	/** User information */
	export interface GroupUser {

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Display name
		 * use information from `UserInfo` instead to combine a display name
		 * Required
		 */
		displayName: string;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Email
		 * use `email` from `UserInfo` instead
		 * Required
		 */
		email: string;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Unique identifier for the user
		 * use `id` from `UserInfo` instead
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Determines whether user is a member of the group or not
		 * Required
		 */
		isMember: boolean;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * User login name
		 * Required
		 */
		login: string;

		/**
		 * User information
		 * Required
		 */
		userInfo: UserInfo;
	}

	/** User information */
	export interface GroupUserFormProperties {

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Display name
		 * use information from `UserInfo` instead to combine a display name
		 * Required
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Email
		 * use `email` from `UserInfo` instead
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Unique identifier for the user
		 * use `id` from `UserInfo` instead
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Determines whether user is a member of the group or not
		 * Required
		 */
		isMember: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * User login name
		 * Required
		 */
		login: FormControl<string | null | undefined>,
	}
	export function CreateGroupUserFormGroup() {
		return new FormGroup<GroupUserFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isMember: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			login: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of users */
	export interface GroupUserList {

		/**
		 * List of group-user mappings
		 * Required
		 */
		items: Array<GroupUser>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of users */
	export interface GroupUserListFormProperties {
	}
	export function CreateGroupUserListFormGroup() {
		return new FormGroup<GroupUserListFormProperties>({
		});

	}


	/** Set of guest user policies */
	export interface GuestUsersPoliciesConfig {

		/**
		 * Determines whether the invite of users to rooms is enabled.
		 * Required
		 */
		isInviteUsersEnabled: boolean;
	}

	/** Set of guest user policies */
	export interface GuestUsersPoliciesConfigFormProperties {

		/**
		 * Determines whether the invite of users to rooms is enabled.
		 * Required
		 */
		isInviteUsersEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGuestUsersPoliciesConfigFormGroup() {
		return new FormGroup<GuestUsersPoliciesConfigFormProperties>({
			isInviteUsersEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Infrastructure properties */
	export interface InfrastructureProperties {

		/**
		 * &#128640; Since v4.21.0
		 * Determines if the DRACOON Core is deployed in the cloud environment
		 */
		isDracoonCloud?: boolean | null;

		/** Determines if the media server is enabled */
		mediaServerConfigEnabled?: boolean | null;

		/** Suggested S3 Region */
		s3DefaultRegion?: string | null;

		/**
		 * &#128640; Since v4.15.0
		 * Enforce direct upload to S3
		 */
		s3EnforceDirectUpload?: boolean | null;

		/** Allow sending of share passwords via SMS */
		smsConfigEnabled?: boolean | null;

		/**
		 * &#128640; Since v4.21.0
		 * Current tenant UUID
		 */
		tenantUuid?: string | null;
	}

	/** Infrastructure properties */
	export interface InfrastructurePropertiesFormProperties {

		/**
		 * &#128640; Since v4.21.0
		 * Determines if the DRACOON Core is deployed in the cloud environment
		 */
		isDracoonCloud: FormControl<boolean | null | undefined>,

		/** Determines if the media server is enabled */
		mediaServerConfigEnabled: FormControl<boolean | null | undefined>,

		/** Suggested S3 Region */
		s3DefaultRegion: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.15.0
		 * Enforce direct upload to S3
		 */
		s3EnforceDirectUpload: FormControl<boolean | null | undefined>,

		/** Allow sending of share passwords via SMS */
		smsConfigEnabled: FormControl<boolean | null | undefined>,

		/**
		 * &#128640; Since v4.21.0
		 * Current tenant UUID
		 */
		tenantUuid: FormControl<string | null | undefined>,
	}
	export function CreateInfrastructurePropertiesFormGroup() {
		return new FormGroup<InfrastructurePropertiesFormProperties>({
			isDracoonCloud: new FormControl<boolean | null | undefined>(undefined),
			mediaServerConfigEnabled: new FormControl<boolean | null | undefined>(undefined),
			s3DefaultRegion: new FormControl<string | null | undefined>(undefined),
			s3EnforceDirectUpload: new FormControl<boolean | null | undefined>(undefined),
			smsConfigEnabled: new FormControl<boolean | null | undefined>(undefined),
			tenantUuid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Room information */
	export interface LastAdminGroupRoom {

		/**
		 * Room ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Room name
		 * Required
		 */
		name: string;

		/**
		 * Parent room ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId?: string | null;

		/**
		 * Parent node path
		 * `/` if node is a root node (room)
		 * Required
		 */
		parentPath: string;
	}

	/** Room information */
	export interface LastAdminGroupRoomFormProperties {

		/**
		 * Room ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Room name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Parent room ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId: FormControl<string | null | undefined>,

		/**
		 * Parent node path
		 * `/` if node is a root node (room)
		 * Required
		 */
		parentPath: FormControl<string | null | undefined>,
	}
	export function CreateLastAdminGroupRoomFormGroup() {
		return new FormGroup<LastAdminGroupRoomFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentId: new FormControl<string | null | undefined>(undefined),
			parentPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of (last admin group) rooms */
	export interface LastAdminGroupRoomList {

		/**
		 * List of last admin rooms
		 * Required
		 */
		items: Array<LastAdminGroupRoom>;
	}

	/** List of (last admin group) rooms */
	export interface LastAdminGroupRoomListFormProperties {
	}
	export function CreateLastAdminGroupRoomListFormGroup() {
		return new FormGroup<LastAdminGroupRoomListFormProperties>({
		});

	}


	/** Room information */
	export interface LastAdminUserRoom {

		/**
		 * Room ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Determines whether user is last admin of a room due to being the last member of last admin group
		 * Required
		 */
		lastAdminInGroup: boolean;

		/**
		 * ID of the last admin group where the user is the only remaining member
		 * (returned only if `lastAdminInGroup` is `true`)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		lastAdminInGroupId?: string | null;

		/**
		 * Room name
		 * Required
		 */
		name: string;

		/**
		 * Parent room ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId?: string | null;

		/**
		 * Parent node path
		 * `/` if node is a root node (room)
		 * Required
		 */
		parentPath: string;
	}

	/** Room information */
	export interface LastAdminUserRoomFormProperties {

		/**
		 * Room ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Determines whether user is last admin of a room due to being the last member of last admin group
		 * Required
		 */
		lastAdminInGroup: FormControl<boolean | null | undefined>,

		/**
		 * ID of the last admin group where the user is the only remaining member
		 * (returned only if `lastAdminInGroup` is `true`)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		lastAdminInGroupId: FormControl<string | null | undefined>,

		/**
		 * Room name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Parent room ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId: FormControl<string | null | undefined>,

		/**
		 * Parent node path
		 * `/` if node is a root node (room)
		 * Required
		 */
		parentPath: FormControl<string | null | undefined>,
	}
	export function CreateLastAdminUserRoomFormGroup() {
		return new FormGroup<LastAdminUserRoomFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastAdminInGroup: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			lastAdminInGroupId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentId: new FormControl<string | null | undefined>(undefined),
			parentPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of (last admin user) rooms */
	export interface LastAdminUserRoomList {

		/**
		 * List of last admin rooms
		 * Required
		 */
		items: Array<LastAdminUserRoom>;
	}

	/** List of (last admin user) rooms */
	export interface LastAdminUserRoomListFormProperties {
	}
	export function CreateLastAdminUserRoomListFormGroup() {
		return new FormGroup<LastAdminUserRoomListFormProperties>({
		});

	}


	/** Log event information */
	export interface LogEvent {

		/** Attribute 1 */
		attribute1?: string | null;

		/** Attribute 2 */
		attribute2?: string | null;

		/** Attribute 3 */
		attribute3?: string | null;

		/** Auth parent source ID */
		authParentSource?: string | null;

		/** Auth parent target ID */
		authParentTarget?: string | null;

		/**
		 * Unique identifier for the customer
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		customerId?: string | null;

		/**
		 * Event ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Event description
		 * Required
		 */
		message: string;

		/**
		 * Object ID 1
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		objectId1?: string | null;

		/**
		 * Object ID 2
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		objectId2?: string | null;

		/** Object name 1 */
		objectName1?: string | null;

		/** Object name 2 */
		objectName2?: string | null;

		/**
		 * Object type 1
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		objectType1?: number | null;

		/**
		 * Object type 2
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		objectType2?: number | null;

		/**
		 * Operation type ID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		operationId?: number | null;

		/** Operation name */
		operationName?: string | null;

		/**
		 * Operation status:
		 * * `0` - Success
		 * * `2` - Error
		 */
		status?: LogEventStatus;

		/**
		 * Event timestamp
		 * Required
		 */
		time: Date;

		/** Client */
		userClient?: string | null;

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userId: string;

		/** User IP */
		userIp?: string | null;

		/** Username */
		userName?: string | null;
	}

	/** Log event information */
	export interface LogEventFormProperties {

		/** Attribute 1 */
		attribute1: FormControl<string | null | undefined>,

		/** Attribute 2 */
		attribute2: FormControl<string | null | undefined>,

		/** Attribute 3 */
		attribute3: FormControl<string | null | undefined>,

		/** Auth parent source ID */
		authParentSource: FormControl<string | null | undefined>,

		/** Auth parent target ID */
		authParentTarget: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the customer
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		customerId: FormControl<string | null | undefined>,

		/**
		 * Event ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Event description
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/**
		 * Object ID 1
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		objectId1: FormControl<string | null | undefined>,

		/**
		 * Object ID 2
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		objectId2: FormControl<string | null | undefined>,

		/** Object name 1 */
		objectName1: FormControl<string | null | undefined>,

		/** Object name 2 */
		objectName2: FormControl<string | null | undefined>,

		/**
		 * Object type 1
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		objectType1: FormControl<number | null | undefined>,

		/**
		 * Object type 2
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		objectType2: FormControl<number | null | undefined>,

		/**
		 * Operation type ID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		operationId: FormControl<number | null | undefined>,

		/** Operation name */
		operationName: FormControl<string | null | undefined>,

		/**
		 * Operation status:
		 * * `0` - Success
		 * * `2` - Error
		 */
		status: FormControl<LogEventStatus | null | undefined>,

		/**
		 * Event timestamp
		 * Required
		 */
		time: FormControl<Date | null | undefined>,

		/** Client */
		userClient: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userId: FormControl<string | null | undefined>,

		/** User IP */
		userIp: FormControl<string | null | undefined>,

		/** Username */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateLogEventFormGroup() {
		return new FormGroup<LogEventFormProperties>({
			attribute1: new FormControl<string | null | undefined>(undefined),
			attribute2: new FormControl<string | null | undefined>(undefined),
			attribute3: new FormControl<string | null | undefined>(undefined),
			authParentSource: new FormControl<string | null | undefined>(undefined),
			authParentTarget: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			objectId1: new FormControl<string | null | undefined>(undefined),
			objectId2: new FormControl<string | null | undefined>(undefined),
			objectName1: new FormControl<string | null | undefined>(undefined),
			objectName2: new FormControl<string | null | undefined>(undefined),
			objectType1: new FormControl<number | null | undefined>(undefined),
			objectType2: new FormControl<number | null | undefined>(undefined),
			operationId: new FormControl<number | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<LogEventStatus | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			userClient: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userIp: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LogEventStatus { _0 = 0, _2 = 1 }


	/** List of log events */
	export interface LogEventList {

		/**
		 * List of log events
		 * Required
		 */
		items: Array<LogEvent>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of log events */
	export interface LogEventListFormProperties {
	}
	export function CreateLogEventListFormGroup() {
		return new FormGroup<LogEventListFormProperties>({
		});

	}


	/** Log operation */
	export interface LogOperation {

		/**
		 * Operation type ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;

		/**
		 * Determines whether log operation is deprecated or not
		 * Required
		 */
		isDeprecated: boolean;

		/**
		 * Operation name
		 * Required
		 */
		name: string;
	}

	/** Log operation */
	export interface LogOperationFormProperties {

		/**
		 * Operation type ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Determines whether log operation is deprecated or not
		 * Required
		 */
		isDeprecated: FormControl<boolean | null | undefined>,

		/**
		 * Operation name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLogOperationFormGroup() {
		return new FormGroup<LogOperationFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isDeprecated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of log operations */
	export interface LogOperationList {

		/**
		 * List of all log operations
		 * Required
		 */
		operationList: Array<LogOperation>;
	}

	/** List of log operations */
	export interface LogOperationListFormProperties {
	}
	export function CreateLogOperationListFormGroup() {
		return new FormGroup<LogOperationListFormProperties>({
		});

	}


	/** Login password policies */
	export interface LoginPasswordPolicies {

		/**
		 * Password character rules
		 * Required
		 */
		characterRules: CharacterRules;

		/**
		 * Minimum number of characters a password must contain
		 * Required
		 * Minimum: 1
		 * Maximum: 1024
		 */
		minLength: number;

		/**
		 * Number of passwords to archive
		 * (must be between `0` and `10`; `0` means that password history is disabled)
		 * Required
		 * Minimum: 1
		 * Maximum: 10
		 */
		numberOfArchivedPasswords: number;

		/**
		 * Password expiration information
		 * Required
		 */
		passwordExpiration: PasswordExpiration;

		/**
		 * Determines whether a password must NOT contain word(s) from a dictionary
		 * Required
		 */
		rejectDictionaryWords: boolean;

		/**
		 * Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
		 * (min. 4 character pattern)
		 * Required
		 */
		rejectKeyboardPatterns: boolean;

		/**
		 * Determines whether a password must NOT contain user info (first name, last name, email, user name)
		 * Required
		 */
		rejectUserInfo: boolean;

		/**
		 * Modification date
		 * Required
		 */
		updatedAt: Date;

		/**
		 * User information
		 * Required
		 */
		updatedBy: UserInfo;

		/**
		 * User lockout information
		 * Required
		 */
		userLockout: UserLockout;
	}

	/** Login password policies */
	export interface LoginPasswordPoliciesFormProperties {

		/**
		 * Minimum number of characters a password must contain
		 * Required
		 * Minimum: 1
		 * Maximum: 1024
		 */
		minLength: FormControl<number | null | undefined>,

		/**
		 * Number of passwords to archive
		 * (must be between `0` and `10`; `0` means that password history is disabled)
		 * Required
		 * Minimum: 1
		 * Maximum: 10
		 */
		numberOfArchivedPasswords: FormControl<number | null | undefined>,

		/**
		 * Determines whether a password must NOT contain word(s) from a dictionary
		 * Required
		 */
		rejectDictionaryWords: FormControl<boolean | null | undefined>,

		/**
		 * Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
		 * (min. 4 character pattern)
		 * Required
		 */
		rejectKeyboardPatterns: FormControl<boolean | null | undefined>,

		/**
		 * Determines whether a password must NOT contain user info (first name, last name, email, user name)
		 * Required
		 */
		rejectUserInfo: FormControl<boolean | null | undefined>,

		/**
		 * Modification date
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateLoginPasswordPoliciesFormGroup() {
		return new FormGroup<LoginPasswordPoliciesFormProperties>({
			minLength: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(1024)]),
			numberOfArchivedPasswords: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(10)]),
			rejectDictionaryWords: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			rejectKeyboardPatterns: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			rejectUserInfo: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Password expiration information */
	export interface PasswordExpiration {

		/**
		 * Determines whether password expiration is enabled
		 * Required
		 */
		enabled: boolean;

		/**
		 * Maximum allowed password age (in days)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxPasswordAge?: number | null;
	}

	/** Password expiration information */
	export interface PasswordExpirationFormProperties {

		/**
		 * Determines whether password expiration is enabled
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * Maximum allowed password age (in days)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxPasswordAge: FormControl<number | null | undefined>,
	}
	export function CreatePasswordExpirationFormGroup() {
		return new FormGroup<PasswordExpirationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			maxPasswordAge: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** User lockout information */
	export interface UserLockout {

		/**
		 * Determines whether user lockout is enabled
		 * Required
		 */
		enabled: boolean;

		/**
		 * Amount of minutes a user has to wait to make another login attempt after `maxNumberOfLoginFailures` has been exceeded
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lockoutPeriod?: number | null;

		/**
		 * Maximum allowed number of failed login attempts
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxNumberOfLoginFailures?: number | null;
	}

	/** User lockout information */
	export interface UserLockoutFormProperties {

		/**
		 * Determines whether user lockout is enabled
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * Amount of minutes a user has to wait to make another login attempt after `maxNumberOfLoginFailures` has been exceeded
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lockoutPeriod: FormControl<number | null | undefined>,

		/**
		 * Maximum allowed number of failed login attempts
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxNumberOfLoginFailures: FormControl<number | null | undefined>,
	}
	export function CreateUserLockoutFormGroup() {
		return new FormGroup<UserLockoutFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			lockoutPeriod: new FormControl<number | null | undefined>(undefined),
			maxNumberOfLoginFailures: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** User credentials */
	export interface LoginRequest {

		/** Authentication methods */
		authType?: LoginRequestAuthType | null;

		/**
		 * &#128679; Deprecated since v4.7.0
		 * Language ID or ISO 639-1 code
		 */
		language?: string | null;

		/**
		 * &#128679; Deprecated since v4.7.0
		 * User login name
		 */
		login?: string | null;

		/**
		 * Password
		 * Required
		 */
		password: string;

		/**
		 * For RADIUS Access-Challenge
		 * If a `replyState` is returned, it must be included as `state` in the following request.
		 */
		state?: string | null;

		/** RADIUS Token */
		token?: string | null;

		/**
		 * &#128640; Since v4.13.0
		 * Username
		 */
		userName?: string | null;
	}

	/** User credentials */
	export interface LoginRequestFormProperties {

		/** Authentication methods */
		authType: FormControl<LoginRequestAuthType | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.7.0
		 * Language ID or ISO 639-1 code
		 */
		language: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.7.0
		 * User login name
		 */
		login: FormControl<string | null | undefined>,

		/**
		 * Password
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * For RADIUS Access-Challenge
		 * If a `replyState` is returned, it must be included as `state` in the following request.
		 */
		state: FormControl<string | null | undefined>,

		/** RADIUS Token */
		token: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.13.0
		 * Username
		 */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateLoginRequestFormGroup() {
		return new FormGroup<LoginRequestFormProperties>({
			authType: new FormControl<LoginRequestAuthType | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			login: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LoginRequestAuthType { basic = 'basic', active_directory = 'active_directory', radius = 'radius' }


	/** Authentication token */
	export interface LoginResponse {

		/**
		 * Authentication token
		 * Required
		 */
		token: string;
	}

	/** Authentication token */
	export interface LoginResponseFormProperties {

		/**
		 * Authentication token
		 * Required
		 */
		token: FormControl<string | null | undefined>,
	}
	export function CreateLoginResponseFormGroup() {
		return new FormGroup<LoginResponseFormProperties>({
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Set of multi-factor authentication policies */
	export interface MfaPoliciesConfig {

		/**
		 * Determines whether multi-factor authentication is enforced
		 * Required
		 */
		isMfaEnforced: boolean;
	}

	/** Set of multi-factor authentication policies */
	export interface MfaPoliciesConfigFormProperties {

		/**
		 * Determines whether multi-factor authentication is enforced
		 * Required
		 */
		isMfaEnforced: FormControl<boolean | null | undefined>,
	}
	export function CreateMfaPoliciesConfigFormGroup() {
		return new FormGroup<MfaPoliciesConfigFormProperties>({
			isMfaEnforced: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the save-to-send-out information of a MFA-setup */
	export interface MfaSetupStatus {

		/**
		 * Creation date
		 * Required
		 */
		createdAt: Date;

		/**
		 * ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Type of second factor authentication
		 * Required
		 */
		mfaType: MfaSetupStatusMfaType;

		/**
		 * A name to identify the MFA setup by the user. Default is MFA-type followed by a number
		 * Required
		 */
		name: string;
	}

	/** Contains the save-to-send-out information of a MFA-setup */
	export interface MfaSetupStatusFormProperties {

		/**
		 * Creation date
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Type of second factor authentication
		 * Required
		 */
		mfaType: FormControl<MfaSetupStatusMfaType | null | undefined>,

		/**
		 * A name to identify the MFA setup by the user. Default is MFA-type followed by a number
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMfaSetupStatusFormGroup() {
		return new FormGroup<MfaSetupStatusFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mfaType: new FormControl<MfaSetupStatusMfaType | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MfaSetupStatusMfaType { TOTP = 'TOTP', EMERGENCY = 'EMERGENCY', U2F = 'U2F' }

	export interface MfaTotpConfirmationRequest {

		/**
		 * ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Generated valid OTP
		 * Required
		 */
		otp: string;
	}
	export interface MfaTotpConfirmationRequestFormProperties {

		/**
		 * ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Generated valid OTP
		 * Required
		 */
		otp: FormControl<string | null | undefined>,
	}
	export function CreateMfaTotpConfirmationRequestFormGroup() {
		return new FormGroup<MfaTotpConfirmationRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			otp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Missing keys information */
	export interface MissingKeysResponse {

		/** List of file keys */
		files?: Array<FileFileKeys>;

		/** List of user ID and file ID mappings */
		items?: Array<UserIdFileIdItem>;

		/** Range information */
		range?: Range;

		/** List of user public keys */
		users?: Array<UserUserPublicKey>;
	}

	/** Missing keys information */
	export interface MissingKeysResponseFormProperties {
	}
	export function CreateMissingKeysResponseFormGroup() {
		return new FormGroup<MissingKeysResponseFormProperties>({
		});

	}


	/** User ID and file ID mapping */
	export interface UserIdFileIdItem {

		/**
		 * File ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		fileId?: string | null;

		/**
		 * Unique identifier for the user
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userId?: string | null;
	}

	/** User ID and file ID mapping */
	export interface UserIdFileIdItemFormProperties {

		/**
		 * File ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		fileId: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the user
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserIdFileIdItemFormGroup() {
		return new FormGroup<UserIdFileIdItemFormProperties>({
			fileId: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Public key information */
	export interface UserUserPublicKey {

		/**
		 * Unique identifier for the user
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Public key container */
		publicKeyContainer?: PublicKeyContainer;
	}

	/** Public key information */
	export interface UserUserPublicKeyFormProperties {

		/**
		 * Unique identifier for the user
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUserUserPublicKeyFormGroup() {
		return new FormGroup<UserUserPublicKeyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Moved node information */
	export interface MoveNode {

		/**
		 * Source node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/** New node name */
		name?: string | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampCreation?: Date | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampModification?: Date | null;
	}

	/** Moved node information */
	export interface MoveNodeFormProperties {

		/**
		 * Source node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** New node name */
		name: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampCreation: FormControl<Date | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampModification: FormControl<Date | null | undefined>,
	}
	export function CreateMoveNodeFormGroup() {
		return new FormGroup<MoveNodeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			timestampCreation: new FormControl<Date | null | undefined>(undefined),
			timestampModification: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Request model for moving nodes */
	export interface MoveNodesRequest {

		/** List of nodes to be moved */
		items?: Array<MoveNode>;

		/** Preserve Download Share Links and point them to the new node. */
		keepShareLinks?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.5.0
		 * Node IDs
		 * Please use `items` instead.
		 */
		nodeIds?: Array<number>;

		/**
		 * Node conflict resolution strategy:
		 * * `autorename`
		 * * `overwrite`
		 * * `fail`
		 */
		resolutionStrategy?: CompleteS3FileUploadRequestResolutionStrategy | null;
	}

	/** Request model for moving nodes */
	export interface MoveNodesRequestFormProperties {

		/** Preserve Download Share Links and point them to the new node. */
		keepShareLinks: FormControl<boolean | null | undefined>,

		/**
		 * Node conflict resolution strategy:
		 * * `autorename`
		 * * `overwrite`
		 * * `fail`
		 */
		resolutionStrategy: FormControl<CompleteS3FileUploadRequestResolutionStrategy | null | undefined>,
	}
	export function CreateMoveNodesRequestFormGroup() {
		return new FormGroup<MoveNodesRequestFormProperties>({
			keepShareLinks: new FormControl<boolean | null | undefined>(undefined),
			resolutionStrategy: new FormControl<CompleteS3FileUploadRequestResolutionStrategy | null | undefined>(undefined),
		});

	}


	/** Request model for creating a customer */
	export interface NewCustomerRequest {

		/**
		 * &#128679; Deprecated since v4.8.0
		 * Customer activation code string:
		 * * valid only for types `free` and `demo`
		 * * for `pay` customers it is empty
		 */
		activationCode?: string | null;

		/** Company name */
		companyName?: string | null;

		/** List of customer attributes */
		customerAttributes?: CustomerAttributes;

		/**
		 * Customer type
		 * Required
		 */
		customerContractType: CustomerCustomerContractType;

		/**
		 * First administrator user
		 * Required
		 */
		firstAdminUser: FirstAdminUser;

		/**
		 * Customer is locked:
		 * * `false` - unlocked
		 * * `true` - locked
		 * All users of this customer will be blocked and can not login anymore.
		 */
		isLocked?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.7.0
		 * Customer lock status:
		 * * `false` - unlocked
		 * * `true` - locked
		 * Please use `isLocked` instead.
		 * All users of this customer will be blocked and can not login anymore.
		 */
		lockStatus?: boolean | null;

		/** Provider customer ID */
		providerCustomerId?: string | null;

		/**
		 * Maximal disc space which can be allocated by customer in bytes. -1 for unlimited
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quotaMax: string;

		/**
		 * Number of days left for trial period (relevant only for type `demo`)
		 * (not used)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		trialDays?: number | null;

		/**
		 * Maximal number of users
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userMax: number;

		/**
		 * &#128640; Since v4.19.0
		 * Maximal number of webhooks
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		webhooksMax?: string | null;
	}

	/** Request model for creating a customer */
	export interface NewCustomerRequestFormProperties {

		/**
		 * &#128679; Deprecated since v4.8.0
		 * Customer activation code string:
		 * * valid only for types `free` and `demo`
		 * * for `pay` customers it is empty
		 */
		activationCode: FormControl<string | null | undefined>,

		/** Company name */
		companyName: FormControl<string | null | undefined>,

		/**
		 * Customer type
		 * Required
		 */
		customerContractType: FormControl<CustomerCustomerContractType | null | undefined>,

		/**
		 * Customer is locked:
		 * * `false` - unlocked
		 * * `true` - locked
		 * All users of this customer will be blocked and can not login anymore.
		 */
		isLocked: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.7.0
		 * Customer lock status:
		 * * `false` - unlocked
		 * * `true` - locked
		 * Please use `isLocked` instead.
		 * All users of this customer will be blocked and can not login anymore.
		 */
		lockStatus: FormControl<boolean | null | undefined>,

		/** Provider customer ID */
		providerCustomerId: FormControl<string | null | undefined>,

		/**
		 * Maximal disc space which can be allocated by customer in bytes. -1 for unlimited
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quotaMax: FormControl<string | null | undefined>,

		/**
		 * Number of days left for trial period (relevant only for type `demo`)
		 * (not used)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		trialDays: FormControl<number | null | undefined>,

		/**
		 * Maximal number of users
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userMax: FormControl<number | null | undefined>,

		/**
		 * &#128640; Since v4.19.0
		 * Maximal number of webhooks
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		webhooksMax: FormControl<string | null | undefined>,
	}
	export function CreateNewCustomerRequestFormGroup() {
		return new FormGroup<NewCustomerRequestFormProperties>({
			activationCode: new FormControl<string | null | undefined>(undefined),
			companyName: new FormControl<string | null | undefined>(undefined),
			customerContractType: new FormControl<CustomerCustomerContractType | null | undefined>(undefined, [Validators.required]),
			isLocked: new FormControl<boolean | null | undefined>(undefined),
			lockStatus: new FormControl<boolean | null | undefined>(undefined),
			providerCustomerId: new FormControl<string | null | undefined>(undefined),
			quotaMax: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trialDays: new FormControl<number | null | undefined>(undefined),
			userMax: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			webhooksMax: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Customer information */
	export interface NewCustomerResponse {

		/**
		 * &#128679; Deprecated since v4.8.0
		 * Customer activation code string:
		 * * valid only for types `free` and `demo`
		 * * for `pay` customers it is empty
		 */
		activationCode?: string | null;

		/**
		 * Company name
		 * Required
		 */
		companyName: string;

		/** Creation date */
		createdAt?: Date | null;

		/** List of customer attributes */
		customerAttributes?: CustomerAttributes;

		/**
		 * Customer type
		 * Required
		 */
		customerContractType: CustomerCustomerContractType;

		/**
		 * &#128640; Since v4.21.0
		 * Customer UUID
		 * Required
		 */
		customerUuid: string;

		/**
		 * First administrator user
		 * Required
		 */
		firstAdminUser: FirstAdminUser;

		/**
		 * Unique identifier for the customer
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/**
		 * Customer is locked:
		 * * `false` - unlocked
		 * * `true` - locked
		 * All users of this customer will be blocked and can not login anymore.
		 */
		isLocked?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.7.0
		 * Customer lock status:
		 * * `false` - unlocked
		 * * `true` - locked
		 * Please use `isLocked` instead.
		 * All users of this customer will be blocked and can not login anymore.
		 * Required
		 */
		lockStatus: boolean;

		/** Provider customer ID */
		providerCustomerId?: string | null;

		/**
		 * Maximal disc space which can be allocated by customer in bytes. -1 for unlimited
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quotaMax: string;

		/**
		 * Number of days left for trial period (relevant only for type `demo`)
		 * (not used)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		trialDays?: number | null;

		/**
		 * Maximal number of users
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userMax: number;

		/**
		 * &#128640; Since v4.19.0
		 * Maximal number of webhooks
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		webhooksMax?: string | null;
	}

	/** Customer information */
	export interface NewCustomerResponseFormProperties {

		/**
		 * &#128679; Deprecated since v4.8.0
		 * Customer activation code string:
		 * * valid only for types `free` and `demo`
		 * * for `pay` customers it is empty
		 */
		activationCode: FormControl<string | null | undefined>,

		/**
		 * Company name
		 * Required
		 */
		companyName: FormControl<string | null | undefined>,

		/** Creation date */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Customer type
		 * Required
		 */
		customerContractType: FormControl<CustomerCustomerContractType | null | undefined>,

		/**
		 * &#128640; Since v4.21.0
		 * Customer UUID
		 * Required
		 */
		customerUuid: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the customer
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Customer is locked:
		 * * `false` - unlocked
		 * * `true` - locked
		 * All users of this customer will be blocked and can not login anymore.
		 */
		isLocked: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.7.0
		 * Customer lock status:
		 * * `false` - unlocked
		 * * `true` - locked
		 * Please use `isLocked` instead.
		 * All users of this customer will be blocked and can not login anymore.
		 * Required
		 */
		lockStatus: FormControl<boolean | null | undefined>,

		/** Provider customer ID */
		providerCustomerId: FormControl<string | null | undefined>,

		/**
		 * Maximal disc space which can be allocated by customer in bytes. -1 for unlimited
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quotaMax: FormControl<string | null | undefined>,

		/**
		 * Number of days left for trial period (relevant only for type `demo`)
		 * (not used)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		trialDays: FormControl<number | null | undefined>,

		/**
		 * Maximal number of users
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userMax: FormControl<number | null | undefined>,

		/**
		 * &#128640; Since v4.19.0
		 * Maximal number of webhooks
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		webhooksMax: FormControl<string | null | undefined>,
	}
	export function CreateNewCustomerResponseFormGroup() {
		return new FormGroup<NewCustomerResponseFormProperties>({
			activationCode: new FormControl<string | null | undefined>(undefined),
			companyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			customerContractType: new FormControl<CustomerCustomerContractType | null | undefined>(undefined, [Validators.required]),
			customerUuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			isLocked: new FormControl<boolean | null | undefined>(undefined),
			lockStatus: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			providerCustomerId: new FormControl<string | null | undefined>(undefined),
			quotaMax: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trialDays: new FormControl<number | null | undefined>(undefined),
			userMax: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			webhooksMax: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Node information (Node can be a room, folder or file) */
	export interface Node {

		/**
		 * &#128640; Since v4.15.0
		 * Auth parent room ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		authParentId?: string | null;

		/**
		 * Version of last change in this node or a node further down the tree.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		branchVersion?: string | null;

		/**
		 * &#128679; Deprecated since v4.10.0
		 * Child nodes list (if requested)
		 * (for rooms / folders only)
		 */
		children?: Array<Node>;

		/**
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 */
		classification?: NodeClassification;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Number of direct children
		 * (no recursion; for rooms / folders only)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntChildren?: number | null;

		/**
		 * Returns the number of comments of this node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntComments?: number | null;

		/**
		 * Number of deleted versions of this file / folder
		 * (for rooms / folders only)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntDeletedVersions?: number | null;

		/**
		 * Returns the number of Download Shares of this node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntDownloadShares?: number | null;

		/**
		 * &#128640; Since v4.11.0
		 * Amount of direct child files where this node is the parent node
		 * (no recursion; for rooms / folders only)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntFiles?: number | null;

		/**
		 * &#128640; Since v4.11.0
		 * Amount of direct child folders where this node is the parent node
		 * (no recursion; for rooms / folders only)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntFolders?: number | null;

		/**
		 * &#128640; Since v4.11.0
		 * Amount of direct child rooms where this node is the parent node
		 * (no recursion; for rooms only)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntRooms?: number | null;

		/**
		 * Returns the number of Upload Shares of this node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntUploadShares?: number | null;

		/** Creation date */
		createdAt?: Date | null;

		/** User information */
		createdBy?: UserInfo;

		/** Encryption states */
		encryptionInfo?: EncryptionInfo;

		/** Expiration date */
		expireAt?: Date | null;

		/** File type / extension (for files only) */
		fileType?: string | null;

		/** Is activities log active (for rooms only) */
		hasActivitiesLog?: boolean | null;

		/** MD5 hash of file */
		hash?: string | null;

		/**
		 * Node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Inherit permissions from parent room
		 * (default: `false` if `parentId` is `0`; otherwise: `true`)
		 */
		inheritPermissions?: boolean | null;

		/**
		 * &#128640; Since v4.11.0
		 * Determines whether node is browsable by client (for rooms only)
		 */
		isBrowsable?: boolean | null;

		/** Encryption state */
		isEncrypted?: boolean | null;

		/** Node is marked as favorite (for rooms / folders only) */
		isFavorite?: boolean | null;

		/** Media server media token */
		mediaToken?: string | null;

		/** File media type (for files only) */
		mediaType?: string | null;

		/**
		 * Name
		 * Required
		 */
		name: string;

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes?: string | null;

		/**
		 * Parent node ID (room or folder)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId?: string | null;

		/**
		 * Parent node path
		 * `/` if node is a root node (room)
		 */
		parentPath?: string | null;

		/** Node permissions */
		permissions?: NodePermissions;

		/**
		 * Quota in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quota?: string | null;

		/**
		 * Retention period for deleted nodes in days
		 * Minimum: 0
		 * Maximum: 9999
		 */
		recycleBinRetentionPeriod?: number | null;

		/**
		 * &#128640; Since v4.37.0
		 * Reference ID. Identical across all versions of a file
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		referenceId?: string | null;

		/**
		 * Node size in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size?: string | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 */
		timestampCreation?: Date | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 */
		timestampModification?: Date | null;

		/**
		 * Node type
		 * Required
		 */
		type: NodeType;

		/** Modification date */
		updatedAt?: Date | null;

		/** User information */
		updatedBy?: UserInfo;
	}

	/** Node information (Node can be a room, folder or file) */
	export interface NodeFormProperties {

		/**
		 * &#128640; Since v4.15.0
		 * Auth parent room ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		authParentId: FormControl<string | null | undefined>,

		/**
		 * Version of last change in this node or a node further down the tree.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		branchVersion: FormControl<string | null | undefined>,

		/**
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 */
		classification: FormControl<NodeClassification | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Number of direct children
		 * (no recursion; for rooms / folders only)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntChildren: FormControl<number | null | undefined>,

		/**
		 * Returns the number of comments of this node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntComments: FormControl<number | null | undefined>,

		/**
		 * Number of deleted versions of this file / folder
		 * (for rooms / folders only)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntDeletedVersions: FormControl<number | null | undefined>,

		/**
		 * Returns the number of Download Shares of this node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntDownloadShares: FormControl<number | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Amount of direct child files where this node is the parent node
		 * (no recursion; for rooms / folders only)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntFiles: FormControl<number | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Amount of direct child folders where this node is the parent node
		 * (no recursion; for rooms / folders only)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntFolders: FormControl<number | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Amount of direct child rooms where this node is the parent node
		 * (no recursion; for rooms only)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntRooms: FormControl<number | null | undefined>,

		/**
		 * Returns the number of Upload Shares of this node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntUploadShares: FormControl<number | null | undefined>,

		/** Creation date */
		createdAt: FormControl<Date | null | undefined>,

		/** Expiration date */
		expireAt: FormControl<Date | null | undefined>,

		/** File type / extension (for files only) */
		fileType: FormControl<string | null | undefined>,

		/** Is activities log active (for rooms only) */
		hasActivitiesLog: FormControl<boolean | null | undefined>,

		/** MD5 hash of file */
		hash: FormControl<string | null | undefined>,

		/**
		 * Node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Inherit permissions from parent room
		 * (default: `false` if `parentId` is `0`; otherwise: `true`)
		 */
		inheritPermissions: FormControl<boolean | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Determines whether node is browsable by client (for rooms only)
		 */
		isBrowsable: FormControl<boolean | null | undefined>,

		/** Encryption state */
		isEncrypted: FormControl<boolean | null | undefined>,

		/** Node is marked as favorite (for rooms / folders only) */
		isFavorite: FormControl<boolean | null | undefined>,

		/** Media server media token */
		mediaToken: FormControl<string | null | undefined>,

		/** File media type (for files only) */
		mediaType: FormControl<string | null | undefined>,

		/**
		 * Name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes: FormControl<string | null | undefined>,

		/**
		 * Parent node ID (room or folder)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId: FormControl<string | null | undefined>,

		/**
		 * Parent node path
		 * `/` if node is a root node (room)
		 */
		parentPath: FormControl<string | null | undefined>,

		/**
		 * Quota in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quota: FormControl<string | null | undefined>,

		/**
		 * Retention period for deleted nodes in days
		 * Minimum: 0
		 * Maximum: 9999
		 */
		recycleBinRetentionPeriod: FormControl<number | null | undefined>,

		/**
		 * &#128640; Since v4.37.0
		 * Reference ID. Identical across all versions of a file
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		referenceId: FormControl<string | null | undefined>,

		/**
		 * Node size in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 */
		timestampCreation: FormControl<Date | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 */
		timestampModification: FormControl<Date | null | undefined>,

		/**
		 * Node type
		 * Required
		 */
		type: FormControl<NodeType | null | undefined>,

		/** Modification date */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateNodeFormGroup() {
		return new FormGroup<NodeFormProperties>({
			authParentId: new FormControl<string | null | undefined>(undefined),
			branchVersion: new FormControl<string | null | undefined>(undefined),
			classification: new FormControl<NodeClassification | null | undefined>(undefined),
			cntChildren: new FormControl<number | null | undefined>(undefined),
			cntComments: new FormControl<number | null | undefined>(undefined),
			cntDeletedVersions: new FormControl<number | null | undefined>(undefined),
			cntDownloadShares: new FormControl<number | null | undefined>(undefined),
			cntFiles: new FormControl<number | null | undefined>(undefined),
			cntFolders: new FormControl<number | null | undefined>(undefined),
			cntRooms: new FormControl<number | null | undefined>(undefined),
			cntUploadShares: new FormControl<number | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			expireAt: new FormControl<Date | null | undefined>(undefined),
			fileType: new FormControl<string | null | undefined>(undefined),
			hasActivitiesLog: new FormControl<boolean | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			inheritPermissions: new FormControl<boolean | null | undefined>(undefined),
			isBrowsable: new FormControl<boolean | null | undefined>(undefined),
			isEncrypted: new FormControl<boolean | null | undefined>(undefined),
			isFavorite: new FormControl<boolean | null | undefined>(undefined),
			mediaToken: new FormControl<string | null | undefined>(undefined),
			mediaType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			notes: new FormControl<string | null | undefined>(undefined),
			parentId: new FormControl<string | null | undefined>(undefined),
			parentPath: new FormControl<string | null | undefined>(undefined),
			quota: new FormControl<string | null | undefined>(undefined),
			recycleBinRetentionPeriod: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(9999)]),
			referenceId: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			timestampCreation: new FormControl<Date | null | undefined>(undefined),
			timestampModification: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<NodeType | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum NodeClassification { _1 = 0, _2 = 1, _3 = 2, _4 = 3 }

	export enum NodeType { room = 'room', folder = 'folder', file = 'file' }


	/** List of nodes */
	export interface NodeList {

		/**
		 * List of nodes
		 * Required
		 */
		items: Array<Node>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of nodes */
	export interface NodeListFormProperties {
	}
	export function CreateNodeListFormGroup() {
		return new FormGroup<NodeListFormProperties>({
		});

	}


	/** Parent node */
	export interface NodeParent {

		/**
		 * Node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Node name
		 * Required
		 */
		name: string;

		/**
		 * Parent node ID (room or folder)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId?: string | null;

		/**
		 * Node type
		 * Required
		 */
		type: string;
	}

	/** Parent node */
	export interface NodeParentFormProperties {

		/**
		 * Node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Node name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Parent node ID (room or folder)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId: FormControl<string | null | undefined>,

		/**
		 * Node type
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNodeParentFormGroup() {
		return new FormGroup<NodeParentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of parent nodes */
	export interface NodeParentList {

		/** List of node parents */
		items?: Array<NodeParent>;
	}

	/** List of parent nodes */
	export interface NodeParentListFormProperties {
	}
	export function CreateNodeParentListFormGroup() {
		return new FormGroup<NodeParentListFormProperties>({
		});

	}


	/** Notification channel information */
	export interface NotificationChannel {

		/**
		 * Channel frequency (aggregation window size in minutes)
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		frequency: string;

		/**
		 * Channel ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;

		/**
		 * Determines whether channel is enabled
		 * Required
		 */
		isEnabled: boolean;

		/**
		 * Name
		 * Required
		 */
		name: string;

		/**
		 * Channel type (only `EMAIL` available at the moment)
		 * Required
		 */
		type: string;
	}

	/** Notification channel information */
	export interface NotificationChannelFormProperties {

		/**
		 * Channel frequency (aggregation window size in minutes)
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		frequency: FormControl<string | null | undefined>,

		/**
		 * Channel ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Determines whether channel is enabled
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Channel type (only `EMAIL` available at the moment)
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNotificationChannelFormGroup() {
		return new FormGroup<NotificationChannelFormProperties>({
			frequency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for switching notification channel status */
	export interface NotificationChannelActivationRequest {

		/**
		 * Channel ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		channelId: number;

		/**
		 * Determines whether channel is enabled
		 * Required
		 */
		isEnabled: boolean;
	}

	/** Request model for switching notification channel status */
	export interface NotificationChannelActivationRequestFormProperties {

		/**
		 * Channel ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		channelId: FormControl<number | null | undefined>,

		/**
		 * Determines whether channel is enabled
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateNotificationChannelActivationRequestFormGroup() {
		return new FormGroup<NotificationChannelActivationRequestFormProperties>({
			channelId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of notification channels */
	export interface NotificationChannelList {

		/**
		 * List of notification channels
		 * Required
		 */
		items: Array<NotificationChannel>;
	}

	/** List of notification channels */
	export interface NotificationChannelListFormProperties {
	}
	export function CreateNotificationChannelListFormGroup() {
		return new FormGroup<NotificationChannelListFormProperties>({
		});

	}


	/** Notification configuration information */
	export interface NotificationConfig {

		/**
		 * List of notification channel IDs
		 * Required
		 */
		channelIds: Array<number>;

		/**
		 * Event type name
		 * Required
		 */
		eventTypeName: string;

		/**
		 * Notification configuration ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Scope ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		scopeId: number;
	}

	/** Notification configuration information */
	export interface NotificationConfigFormProperties {

		/**
		 * Event type name
		 * Required
		 */
		eventTypeName: FormControl<string | null | undefined>,

		/**
		 * Notification configuration ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Scope ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		scopeId: FormControl<number | null | undefined>,
	}
	export function CreateNotificationConfigFormGroup() {
		return new FormGroup<NotificationConfigFormProperties>({
			eventTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scopeId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for updating notification configuration */
	export interface NotificationConfigChangeRequest {

		/**
		 * List of notification channel IDs.
		 * Leave empty to disable notifications.
		 * Required
		 */
		channelIds: Array<number>;
	}

	/** Request model for updating notification configuration */
	export interface NotificationConfigChangeRequestFormProperties {
	}
	export function CreateNotificationConfigChangeRequestFormGroup() {
		return new FormGroup<NotificationConfigChangeRequestFormProperties>({
		});

	}


	/** List of notification configurations */
	export interface NotificationConfigList {

		/**
		 * List of notification configurations
		 * Required
		 */
		items: Array<NotificationConfig>;
	}

	/** List of notification configurations */
	export interface NotificationConfigListFormProperties {
	}
	export function CreateNotificationConfigListFormGroup() {
		return new FormGroup<NotificationConfigListFormProperties>({
		});

	}


	/** Notification scope information */
	export interface NotificationScope {

		/**
		 * Scope ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;

		/**
		 * Name
		 * Required
		 */
		name: string;
	}

	/** Notification scope information */
	export interface NotificationScopeFormProperties {

		/**
		 * Scope ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNotificationScopeFormGroup() {
		return new FormGroup<NotificationScopeFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of notification scopes */
	export interface NotificationScopeList {

		/**
		 * List of notification scopes
		 * Required
		 */
		items: Array<NotificationScope>;
	}

	/** List of notification scopes */
	export interface NotificationScopeListFormProperties {
	}
	export function CreateNotificationScopeListFormGroup() {
		return new FormGroup<NotificationScopeListFormProperties>({
		});

	}


	/** OAuth client approval information */
	export interface OAuthApproval {

		/**
		 * ID of the OAuth client
		 * Required
		 */
		clientId: string;

		/**
		 * Name, which is shown at the client configuration and authorization.
		 * Required
		 */
		clientName: string;

		/** Expiration date of the approval */
		expiresAt?: Date | null;
	}

	/** OAuth client approval information */
	export interface OAuthApprovalFormProperties {

		/**
		 * ID of the OAuth client
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/**
		 * Name, which is shown at the client configuration and authorization.
		 * Required
		 */
		clientName: FormControl<string | null | undefined>,

		/** Expiration date of the approval */
		expiresAt: FormControl<Date | null | undefined>,
	}
	export function CreateOAuthApprovalFormGroup() {
		return new FormGroup<OAuthApprovalFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiresAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** OAuth authorization */
	export interface OAuthAuthorization {

		/**
		 * ID of the OAuth client
		 * Required
		 */
		clientId: string;

		/**
		 * Name, which is shown at the client configuration and authorization.
		 * Required
		 */
		clientName: string;

		/**
		 * &#128640; Since v4.13.0
		 * Creation date of the authorization
		 */
		createdAt?: Date | null;

		/** Expiration date of the authorization */
		expiresAt?: Date | null;

		/**
		 * &#128640; Since v4.12.0
		 * ID of the OAuth authorization
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/**
		 * &#128640; Since v4.25.0
		 * Determines whether authorization matches the one from Authorization Header
		 */
		isCurrentAuthorization?: boolean | null;

		/**
		 * &#128640; Since v4.12.0
		 * Determines whether client is a standard client.
		 */
		isStandard?: boolean | null;

		/**
		 * &#128640; Since v4.13.0
		 * Usage date of the authorization
		 * (Time of last usage.)
		 */
		usedAt?: Date | null;

		/**
		 * &#128640; Since v4.12.0
		 * User agent category.
		 * Required
		 */
		userAgentCategory: OAuthAuthorizationUserAgentCategory;

		/**
		 * &#128640; Since v4.12.0
		 * User agent info.
		 */
		userAgentInfo?: string | null;

		/**
		 * &#128640; Since v4.12.0
		 * User agent OS.
		 */
		userAgentOs?: string | null;

		/**
		 * &#128640; Since v4.12.0
		 * User agent type.
		 */
		userAgentType?: string | null;
	}

	/** OAuth authorization */
	export interface OAuthAuthorizationFormProperties {

		/**
		 * ID of the OAuth client
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/**
		 * Name, which is shown at the client configuration and authorization.
		 * Required
		 */
		clientName: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.13.0
		 * Creation date of the authorization
		 */
		createdAt: FormControl<Date | null | undefined>,

		/** Expiration date of the authorization */
		expiresAt: FormControl<Date | null | undefined>,

		/**
		 * &#128640; Since v4.12.0
		 * ID of the OAuth authorization
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.25.0
		 * Determines whether authorization matches the one from Authorization Header
		 */
		isCurrentAuthorization: FormControl<boolean | null | undefined>,

		/**
		 * &#128640; Since v4.12.0
		 * Determines whether client is a standard client.
		 */
		isStandard: FormControl<boolean | null | undefined>,

		/**
		 * &#128640; Since v4.13.0
		 * Usage date of the authorization
		 * (Time of last usage.)
		 */
		usedAt: FormControl<Date | null | undefined>,

		/**
		 * &#128640; Since v4.12.0
		 * User agent category.
		 * Required
		 */
		userAgentCategory: FormControl<OAuthAuthorizationUserAgentCategory | null | undefined>,

		/**
		 * &#128640; Since v4.12.0
		 * User agent info.
		 */
		userAgentInfo: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.12.0
		 * User agent OS.
		 */
		userAgentOs: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.12.0
		 * User agent type.
		 */
		userAgentType: FormControl<string | null | undefined>,
	}
	export function CreateOAuthAuthorizationFormGroup() {
		return new FormGroup<OAuthAuthorizationFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			expiresAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isCurrentAuthorization: new FormControl<boolean | null | undefined>(undefined),
			isStandard: new FormControl<boolean | null | undefined>(undefined),
			usedAt: new FormControl<Date | null | undefined>(undefined),
			userAgentCategory: new FormControl<OAuthAuthorizationUserAgentCategory | null | undefined>(undefined, [Validators.required]),
			userAgentInfo: new FormControl<string | null | undefined>(undefined),
			userAgentOs: new FormControl<string | null | undefined>(undefined),
			userAgentType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OAuthAuthorizationUserAgentCategory { browser = 'browser', native = 'native', unknown = 'unknown' }


	/** OAuth client information */
	export interface OAuthClient {

		/**
		 * Validity of the access token in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accessTokenValidity?: number | null;

		/**
		 * &#128640; Since v4.22.0
		 * Validity of the approval interval in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		approvalValidity?: number | null;

		/**
		 * ID of the OAuth client
		 * Required
		 */
		clientId: string;

		/** Name, which is shown at the client configuration and authorization. */
		clientName?: string | null;

		/** Secret, which client uses at authentication. */
		clientSecret?: string | null;

		/** Determines whether client is a confidential or public client. */
		clientType?: CreateOAuthClientRequestClientType | null;

		/**
		 * Authorized grant types
		 * * `authorization_code`
		 * * `implicit`
		 * * `password`
		 * * `client_credentials`
		 * * `refresh_token`
		 * cf. [RFC 6749](https://tools.ietf.org/html/rfc6749)
		 * Required
		 */
		grantTypes: Array<string>;

		/** Determines whether client is enabled. */
		isEnabled?: boolean | null;

		/** Determines whether client is an external client. */
		isExternal?: boolean | null;

		/** Determines whether client is a standard client. */
		isStandard?: boolean | null;

		/** URIs, to which a user is redirected after authorization. */
		redirectUris?: Array<string>;

		/**
		 * Validity of the refresh token in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		refreshTokenValidity?: number | null;
	}

	/** OAuth client information */
	export interface OAuthClientFormProperties {

		/**
		 * Validity of the access token in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accessTokenValidity: FormControl<number | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Validity of the approval interval in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		approvalValidity: FormControl<number | null | undefined>,

		/**
		 * ID of the OAuth client
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/** Name, which is shown at the client configuration and authorization. */
		clientName: FormControl<string | null | undefined>,

		/** Secret, which client uses at authentication. */
		clientSecret: FormControl<string | null | undefined>,

		/** Determines whether client is a confidential or public client. */
		clientType: FormControl<CreateOAuthClientRequestClientType | null | undefined>,

		/** Determines whether client is enabled. */
		isEnabled: FormControl<boolean | null | undefined>,

		/** Determines whether client is an external client. */
		isExternal: FormControl<boolean | null | undefined>,

		/** Determines whether client is a standard client. */
		isStandard: FormControl<boolean | null | undefined>,

		/**
		 * Validity of the refresh token in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		refreshTokenValidity: FormControl<number | null | undefined>,
	}
	export function CreateOAuthClientFormGroup() {
		return new FormGroup<OAuthClientFormProperties>({
			accessTokenValidity: new FormControl<number | null | undefined>(undefined),
			approvalValidity: new FormControl<number | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientName: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			clientType: new FormControl<CreateOAuthClientRequestClientType | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined),
			isExternal: new FormControl<boolean | null | undefined>(undefined),
			isStandard: new FormControl<boolean | null | undefined>(undefined),
			refreshTokenValidity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List of OpenID Connect providers */
	export interface OpenIdAuthInfo {

		/**
		 * List of available OpenID Connect identity providers
		 * Required
		 */
		items: Array<OpenIdProvider>;
	}

	/** List of OpenID Connect providers */
	export interface OpenIdAuthInfoFormProperties {
	}
	export function CreateOpenIdAuthInfoFormGroup() {
		return new FormGroup<OpenIdAuthInfoFormProperties>({
		});

	}


	/** OpenID Connect provider information */
	export interface OpenIdProvider {

		/**
		 * ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;

		/**
		 * Is available for all customers
		 * Required
		 */
		isGlobalAvailable: boolean;

		/**
		 * Issuer identifier of the IDP
		 * The value is a case sensitive URL.
		 * Required
		 */
		issuer: string;

		/**
		 * Name of the claim which is used for the user mapping.
		 * Required
		 */
		mappingClaim: string;

		/**
		 * Name of the IDP
		 * Required
		 */
		name: string;

		/**
		 * URL of the user management UI.
		 * Use empty string to remove.
		 */
		userManagementUrl?: string | null;
	}

	/** OpenID Connect provider information */
	export interface OpenIdProviderFormProperties {

		/**
		 * ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Is available for all customers
		 * Required
		 */
		isGlobalAvailable: FormControl<boolean | null | undefined>,

		/**
		 * Issuer identifier of the IDP
		 * The value is a case sensitive URL.
		 * Required
		 */
		issuer: FormControl<string | null | undefined>,

		/**
		 * Name of the claim which is used for the user mapping.
		 * Required
		 */
		mappingClaim: FormControl<string | null | undefined>,

		/**
		 * Name of the IDP
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * URL of the user management UI.
		 * Use empty string to remove.
		 */
		userManagementUrl: FormControl<string | null | undefined>,
	}
	export function CreateOpenIdProviderFormGroup() {
		return new FormGroup<OpenIdProviderFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isGlobalAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			issuer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mappingClaim: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userManagementUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OpenID Connect IDP configuration */
	export interface OpenIdIdpConfig {

		/** URL of the authorization endpoint */
		authorizationEndPointUrl?: string | null;

		/** ID of the OpenID client */
		clientId?: string | null;

		/** Secret, which client uses at authentication. */
		clientSecret?: string | null;

		/** Name of the claim which is used for the user mapping fallback. */
		fallbackMappingClaim?: string | null;

		/**
		 * &#128640; Since v4.11.0
		 * Flow, which is used at authentication
		 */
		flow?: CreateOpenIdIdpConfigRequestFlow | null;

		/**
		 * ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;

		/**
		 * Issuer identifier of the IDP
		 * The value is a case sensitive URL.
		 */
		issuer?: string | null;

		/** URL of the JWKS endpoint */
		jwksEndPointUrl?: string | null;

		/** Name of the claim which is used for the user mapping. */
		mappingClaim?: string | null;

		/** Name of the IDP */
		name?: string | null;

		/**
		 * PKCE code challenge method.
		 * cf. [RFC 7636](https://tools.ietf.org/html/rfc7636)
		 */
		pkceChallengeMethod?: string | null;

		/**
		 * Determines whether PKCE is enabled.
		 * cf. [RFC 7636](https://tools.ietf.org/html/rfc7636)
		 */
		pkceEnabled?: boolean | null;

		/** URIs, to which a user is redirected after authorization. */
		redirectUris?: Array<string>;

		/**
		 * List of requested scopes
		 * Usually `openid` and the names of the requested claims.
		 */
		scopes?: Array<string>;

		/** URL of the token endpoint */
		tokenEndPointUrl?: string | null;

		/**
		 * Determines if a DRACOON account is automatically created for a new user
		 * who successfully logs on with his / her AD / IDP account.
		 */
		userImportEnabled?: boolean | null;

		/**
		 * User group that is assigned to users who are created by automatic import.
		 * Reset with `0`
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userImportGroup?: string | null;

		/** URL of the user info endpoint */
		userInfoEndPointUrl?: string | null;

		/**
		 * &#128640; Since v4.23.0
		 * Source, which is used to get user information at the import or update of a user.
		 */
		userInfoSource?: CreateOpenIdIdpConfigRequestUserInfoSource | null;

		/**
		 * URL of the user management UI.
		 * Use empty string to remove.
		 */
		userManagementUrl?: string | null;

		/**
		 * Determines if the DRACOON account is updated with data from AD / IDP.
		 * For OpenID Connect, the scopes `email` and `profile` are needed.
		 */
		userUpdateEnabled?: boolean | null;
	}

	/** OpenID Connect IDP configuration */
	export interface OpenIdIdpConfigFormProperties {

		/** URL of the authorization endpoint */
		authorizationEndPointUrl: FormControl<string | null | undefined>,

		/** ID of the OpenID client */
		clientId: FormControl<string | null | undefined>,

		/** Secret, which client uses at authentication. */
		clientSecret: FormControl<string | null | undefined>,

		/** Name of the claim which is used for the user mapping fallback. */
		fallbackMappingClaim: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Flow, which is used at authentication
		 */
		flow: FormControl<CreateOpenIdIdpConfigRequestFlow | null | undefined>,

		/**
		 * ID
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Issuer identifier of the IDP
		 * The value is a case sensitive URL.
		 */
		issuer: FormControl<string | null | undefined>,

		/** URL of the JWKS endpoint */
		jwksEndPointUrl: FormControl<string | null | undefined>,

		/** Name of the claim which is used for the user mapping. */
		mappingClaim: FormControl<string | null | undefined>,

		/** Name of the IDP */
		name: FormControl<string | null | undefined>,

		/**
		 * PKCE code challenge method.
		 * cf. [RFC 7636](https://tools.ietf.org/html/rfc7636)
		 */
		pkceChallengeMethod: FormControl<string | null | undefined>,

		/**
		 * Determines whether PKCE is enabled.
		 * cf. [RFC 7636](https://tools.ietf.org/html/rfc7636)
		 */
		pkceEnabled: FormControl<boolean | null | undefined>,

		/** URL of the token endpoint */
		tokenEndPointUrl: FormControl<string | null | undefined>,

		/**
		 * Determines if a DRACOON account is automatically created for a new user
		 * who successfully logs on with his / her AD / IDP account.
		 */
		userImportEnabled: FormControl<boolean | null | undefined>,

		/**
		 * User group that is assigned to users who are created by automatic import.
		 * Reset with `0`
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userImportGroup: FormControl<string | null | undefined>,

		/** URL of the user info endpoint */
		userInfoEndPointUrl: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.23.0
		 * Source, which is used to get user information at the import or update of a user.
		 */
		userInfoSource: FormControl<CreateOpenIdIdpConfigRequestUserInfoSource | null | undefined>,

		/**
		 * URL of the user management UI.
		 * Use empty string to remove.
		 */
		userManagementUrl: FormControl<string | null | undefined>,

		/**
		 * Determines if the DRACOON account is updated with data from AD / IDP.
		 * For OpenID Connect, the scopes `email` and `profile` are needed.
		 */
		userUpdateEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateOpenIdIdpConfigFormGroup() {
		return new FormGroup<OpenIdIdpConfigFormProperties>({
			authorizationEndPointUrl: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			fallbackMappingClaim: new FormControl<string | null | undefined>(undefined),
			flow: new FormControl<CreateOpenIdIdpConfigRequestFlow | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			issuer: new FormControl<string | null | undefined>(undefined),
			jwksEndPointUrl: new FormControl<string | null | undefined>(undefined),
			mappingClaim: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pkceChallengeMethod: new FormControl<string | null | undefined>(undefined),
			pkceEnabled: new FormControl<boolean | null | undefined>(undefined),
			tokenEndPointUrl: new FormControl<string | null | undefined>(undefined),
			userImportEnabled: new FormControl<boolean | null | undefined>(undefined),
			userImportGroup: new FormControl<string | null | undefined>(undefined),
			userInfoEndPointUrl: new FormControl<string | null | undefined>(undefined),
			userInfoSource: new FormControl<CreateOpenIdIdpConfigRequestUserInfoSource | null | undefined>(undefined),
			userManagementUrl: new FormControl<string | null | undefined>(undefined),
			userUpdateEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Set of password policies */
	export interface PasswordPoliciesConfig {

		/** Encryption password policies */
		encryptionPasswordPolicies?: EncryptionPasswordPolicies;

		/** Login password policies */
		loginPasswordPolicies?: LoginPasswordPolicies;

		/** Shares password policies */
		sharesPasswordPolicies?: SharesPasswordPolicies;
	}

	/** Set of password policies */
	export interface PasswordPoliciesConfigFormProperties {
	}
	export function CreatePasswordPoliciesConfigFormGroup() {
		return new FormGroup<PasswordPoliciesConfigFormProperties>({
		});

	}


	/** Shares password policies */
	export interface SharesPasswordPolicies {

		/** Password character rules */
		characterRules?: CharacterRules;

		/**
		 * Minimum number of characters a password must contain
		 * Minimum: 1
		 * Maximum: 1024
		 */
		minLength?: number | null;

		/** Determines whether a password must NOT contain word(s) from a dictionary */
		rejectDictionaryWords?: boolean | null;

		/**
		 * Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
		 * (min. 4 character pattern)
		 */
		rejectKeyboardPatterns?: boolean | null;

		/** Determines whether a password must NOT contain user info (first name, last name, email, user name) */
		rejectUserInfo?: boolean | null;

		/** Modification date */
		updatedAt?: Date | null;

		/** User information */
		updatedBy?: UserInfo;
	}

	/** Shares password policies */
	export interface SharesPasswordPoliciesFormProperties {

		/**
		 * Minimum number of characters a password must contain
		 * Minimum: 1
		 * Maximum: 1024
		 */
		minLength: FormControl<number | null | undefined>,

		/** Determines whether a password must NOT contain word(s) from a dictionary */
		rejectDictionaryWords: FormControl<boolean | null | undefined>,

		/**
		 * Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
		 * (min. 4 character pattern)
		 */
		rejectKeyboardPatterns: FormControl<boolean | null | undefined>,

		/** Determines whether a password must NOT contain user info (first name, last name, email, user name) */
		rejectUserInfo: FormControl<boolean | null | undefined>,

		/** Modification date */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateSharesPasswordPoliciesFormGroup() {
		return new FormGroup<SharesPasswordPoliciesFormProperties>({
			minLength: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1024)]),
			rejectDictionaryWords: new FormControl<boolean | null | undefined>(undefined),
			rejectKeyboardPatterns: new FormControl<boolean | null | undefined>(undefined),
			rejectUserInfo: new FormControl<boolean | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** List of violated password policies */
	export interface PasswordPolicyViolationResponse {

		/**
		 * HTTP status code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: number;

		/** Debug information */
		debugInfo?: string | null;

		/**
		 * Internal error code
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorCode?: number | null;

		/**
		 * HTTP status code description
		 * Required
		 */
		message: string;

		/** List of violated password policies */
		violatedPasswordPolicies?: Array<ViolatedPasswordPolicy>;
	}

	/** List of violated password policies */
	export interface PasswordPolicyViolationResponseFormProperties {

		/**
		 * HTTP status code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** Debug information */
		debugInfo: FormControl<string | null | undefined>,

		/**
		 * Internal error code
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorCode: FormControl<number | null | undefined>,

		/**
		 * HTTP status code description
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreatePasswordPolicyViolationResponseFormGroup() {
		return new FormGroup<PasswordPolicyViolationResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			debugInfo: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Violated password policy information */
	export interface ViolatedPasswordPolicy {

		/** Message from password validator */
		message?: string | null;

		/** Name of the violated password policy */
		name?: string | null;
	}

	/** Violated password policy information */
	export interface ViolatedPasswordPolicyFormProperties {

		/** Message from password validator */
		message: FormControl<string | null | undefined>,

		/** Name of the violated password policy */
		name: FormControl<string | null | undefined>,
	}
	export function CreateViolatedPasswordPolicyFormGroup() {
		return new FormGroup<ViolatedPasswordPolicyFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pending assignment information */
	export interface PendingAssignment {

		/**
		 * Unique identifier for the group
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		groupId: string;

		/**
		 * Room ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		roomId: string;

		/**
		 * Room name
		 * Required
		 */
		roomName: string;

		/**
		 * Acceptance state:
		 * * `ACCEPTED`
		 * * `WAITING`
		 * * `DENIED`
		 * Required
		 */
		state: PendingAssignmentState;

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userId: string;
	}

	/** Pending assignment information */
	export interface PendingAssignmentFormProperties {

		/**
		 * Unique identifier for the group
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		groupId: FormControl<string | null | undefined>,

		/**
		 * Room ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		roomId: FormControl<string | null | undefined>,

		/**
		 * Room name
		 * Required
		 */
		roomName: FormControl<string | null | undefined>,

		/**
		 * Acceptance state:
		 * * `ACCEPTED`
		 * * `WAITING`
		 * * `DENIED`
		 * Required
		 */
		state: FormControl<PendingAssignmentState | null | undefined>,

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreatePendingAssignmentFormGroup() {
		return new FormGroup<PendingAssignmentFormProperties>({
			groupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roomId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roomName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<PendingAssignmentState | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PendingAssignmentState { ACCEPTED = 'ACCEPTED', DENIED = 'DENIED', WAITING = 'WAITING' }


	/** Pending assignment information */
	export interface PendingAssignmentData {

		/**
		 * Group information
		 * Required
		 */
		groupInfo: GroupInfo;

		/**
		 * Pending group information
		 * Required
		 */
		pendingGroupData: PendingGroupData;

		/**
		 * Pending user information
		 * Required
		 */
		pendingUserData: PendingUserData;

		/**
		 * Room ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		roomId: string;

		/**
		 * Room name
		 * Required
		 */
		roomName: string;

		/**
		 * Acceptance state:
		 * * `ACCEPTED`
		 * * `WAITING`
		 * * `DENIED`
		 * Required
		 */
		state: PendingAssignmentState;

		/**
		 * User information
		 * Required
		 */
		userInfo: UserInfo;
	}

	/** Pending assignment information */
	export interface PendingAssignmentDataFormProperties {

		/**
		 * Room ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		roomId: FormControl<string | null | undefined>,

		/**
		 * Room name
		 * Required
		 */
		roomName: FormControl<string | null | undefined>,

		/**
		 * Acceptance state:
		 * * `ACCEPTED`
		 * * `WAITING`
		 * * `DENIED`
		 * Required
		 */
		state: FormControl<PendingAssignmentState | null | undefined>,
	}
	export function CreatePendingAssignmentDataFormGroup() {
		return new FormGroup<PendingAssignmentDataFormProperties>({
			roomId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roomName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<PendingAssignmentState | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Pending group information */
	export interface PendingGroupData {

		/**
		 * Unique identifier for the group
		 * use `id` from `GroupInfo` instead
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Group name
		 * use `name` from `GroupInfo` instead
		 * Required
		 */
		name: string;
	}

	/** Pending group information */
	export interface PendingGroupDataFormProperties {

		/**
		 * Unique identifier for the group
		 * use `id` from `GroupInfo` instead
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Group name
		 * use `name` from `GroupInfo` instead
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePendingGroupDataFormGroup() {
		return new FormGroup<PendingGroupDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Pending user information */
	export interface PendingUserData {

		/**
		 * Display name
		 * use information from `UserInfo` instead to combine a display name
		 * Required
		 */
		displayName: string;

		/**
		 * Email
		 * use `email` from `UserInfo` instead
		 * Required
		 */
		email: string;

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * User login name
		 * Required
		 */
		login: string;
	}

	/** Pending user information */
	export interface PendingUserDataFormProperties {

		/**
		 * Display name
		 * use information from `UserInfo` instead to combine a display name
		 * Required
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Email
		 * use `email` from `UserInfo` instead
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * User login name
		 * Required
		 */
		login: FormControl<string | null | undefined>,
	}
	export function CreatePendingUserDataFormGroup() {
		return new FormGroup<PendingUserDataFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			login: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of pending assignments */
	export interface PendingAssignmentList {

		/**
		 * List of pending assignment information
		 * Required
		 */
		items: Array<PendingAssignmentData>;

		/** Range information */
		range?: Range;
	}

	/** List of pending assignments */
	export interface PendingAssignmentListFormProperties {
	}
	export function CreatePendingAssignmentListFormGroup() {
		return new FormGroup<PendingAssignmentListFormProperties>({
		});

	}


	/** Request model for handling pending assignments */
	export interface PendingAssignmentsRequest {

		/**
		 * List of pending assignments
		 * Required
		 */
		items: Array<PendingAssignment>;
	}

	/** Request model for handling pending assignments */
	export interface PendingAssignmentsRequestFormProperties {
	}
	export function CreatePendingAssignmentsRequestFormGroup() {
		return new FormGroup<PendingAssignmentsRequestFormProperties>({
		});

	}


	/** Presigned URL information */
	export interface PresignedUrl {

		/**
		 * Corresponding part number
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		partNumber: number;

		/**
		 * S3 presigned URL
		 * Required
		 */
		url: string;
	}

	/** Presigned URL information */
	export interface PresignedUrlFormProperties {

		/**
		 * Corresponding part number
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		partNumber: FormControl<number | null | undefined>,

		/**
		 * S3 presigned URL
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePresignedUrlFormGroup() {
		return new FormGroup<PresignedUrlFormProperties>({
			partNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of generated presigned URLs */
	export interface PresignedUrlList {

		/**
		 * List of S3 presigned URLs
		 * Required
		 */
		urls: Array<PresignedUrl>;
	}

	/** List of generated presigned URLs */
	export interface PresignedUrlListFormProperties {
	}
	export function CreatePresignedUrlListFormGroup() {
		return new FormGroup<PresignedUrlListFormProperties>({
		});

	}


	/** ProductPackageResponse */
	export interface ProductPackageResponse {

		/**
		 * OAuth Client Information
		 * Required
		 */
		clients: Array<FeaturedOAuthClient>;

		/**
		 * Features
		 * Required
		 */
		features: Array<Feature>;

		/**
		 * ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		productPackageId: string;

		/**
		 * Name
		 * Required
		 */
		productPackageName: string;
	}

	/** ProductPackageResponse */
	export interface ProductPackageResponseFormProperties {

		/**
		 * ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		productPackageId: FormControl<string | null | undefined>,

		/**
		 * Name
		 * Required
		 */
		productPackageName: FormControl<string | null | undefined>,
	}
	export function CreateProductPackageResponseFormGroup() {
		return new FormGroup<ProductPackageResponseFormProperties>({
			productPackageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productPackageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** ProductPackageResponseList */
	export interface ProductPackageResponseList {

		/**
		 * Packages
		 * Required
		 */
		packages: Array<ProductPackageResponse>;
	}

	/** ProductPackageResponseList */
	export interface ProductPackageResponseListFormProperties {
	}
	export function CreateProductPackageResponseListFormGroup() {
		return new FormGroup<ProductPackageResponseListFormProperties>({
		});

	}


	/** User profile attributes */
	export interface ProfileAttributes {

		/**
		 * List of key-value pairs
		 * Required
		 */
		items: Array<KeyValueEntry>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** User profile attributes */
	export interface ProfileAttributesFormProperties {
	}
	export function CreateProfileAttributesFormGroup() {
		return new FormGroup<ProfileAttributesFormProperties>({
		});

	}


	/** Request model for setting user profile attributes */
	export interface ProfileAttributesRequest {

		/**
		 * List of key-value pairs
		 * Required
		 */
		items: Array<KeyValueEntry>;
	}

	/** Request model for setting user profile attributes */
	export interface ProfileAttributesRequestFormProperties {
	}
	export function CreateProfileAttributesRequestFormGroup() {
		return new FormGroup<ProfileAttributesRequestFormProperties>({
		});

	}


	/** Download Share information */
	export interface PublicDownloadShare {

		/**
		 * Creation date
		 * Required
		 */
		createdAt: Date;

		/**
		 * Creator name
		 * Required
		 */
		creatorName: string;

		/** Creator username */
		creatorUsername?: string | null;

		/** Expiration date */
		expireAt?: Date | null;

		/** File key information */
		fileKey?: FileKey;

		/**
		 * File name
		 * Required
		 */
		fileName: string;

		/**
		 * &#128640; Since v4.11.0
		 * Determines whether Download Share has a limit for amount of downloads
		 * Required
		 */
		hasDownloadLimit: boolean;

		/** Encryption state */
		isEncrypted?: boolean | null;

		/**
		 * Is share protected by password
		 * Required
		 */
		isProtected: boolean;

		/**
		 * Downloads limit reached
		 * Required
		 */
		limitReached: boolean;

		/**
		 * &#128640; Since v4.11.0
		 * * `application/zip` (for folders and rooms)
		 * * actual file media type (for files only)
		 * Required
		 */
		mediaType: string;

		/** Share display name (alias name) */
		name?: string | null;

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes?: string | null;

		/** Private key container */
		privateKeyContainer?: PrivateKeyContainer;

		/**
		 * File size or container size not compressed (in bytes)
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size: string;
	}

	/** Download Share information */
	export interface PublicDownloadShareFormProperties {

		/**
		 * Creation date
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Creator name
		 * Required
		 */
		creatorName: FormControl<string | null | undefined>,

		/** Creator username */
		creatorUsername: FormControl<string | null | undefined>,

		/** Expiration date */
		expireAt: FormControl<Date | null | undefined>,

		/**
		 * File name
		 * Required
		 */
		fileName: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Determines whether Download Share has a limit for amount of downloads
		 * Required
		 */
		hasDownloadLimit: FormControl<boolean | null | undefined>,

		/** Encryption state */
		isEncrypted: FormControl<boolean | null | undefined>,

		/**
		 * Is share protected by password
		 * Required
		 */
		isProtected: FormControl<boolean | null | undefined>,

		/**
		 * Downloads limit reached
		 * Required
		 */
		limitReached: FormControl<boolean | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * * `application/zip` (for folders and rooms)
		 * * actual file media type (for files only)
		 * Required
		 */
		mediaType: FormControl<string | null | undefined>,

		/** Share display name (alias name) */
		name: FormControl<string | null | undefined>,

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes: FormControl<string | null | undefined>,

		/**
		 * File size or container size not compressed (in bytes)
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size: FormControl<string | null | undefined>,
	}
	export function CreatePublicDownloadShareFormGroup() {
		return new FormGroup<PublicDownloadShareFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			creatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creatorUsername: new FormControl<string | null | undefined>(undefined),
			expireAt: new FormControl<Date | null | undefined>(undefined),
			fileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hasDownloadLimit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isEncrypted: new FormControl<boolean | null | undefined>(undefined),
			isProtected: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			limitReached: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			mediaType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for generating download URL */
	export interface PublicDownloadTokenGenerateRequest {

		/** Password (only for password-protected shares) */
		password?: string | null;
	}

	/** Request model for generating download URL */
	export interface PublicDownloadTokenGenerateRequestFormProperties {

		/** Password (only for password-protected shares) */
		password: FormControl<string | null | undefined>,
	}
	export function CreatePublicDownloadTokenGenerateRequestFormGroup() {
		return new FormGroup<PublicDownloadTokenGenerateRequestFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Download URL */
	export interface PublicDownloadTokenGenerateResponse {

		/** Download URL */
		downloadUrl?: string | null;
	}

	/** Download URL */
	export interface PublicDownloadTokenGenerateResponseFormProperties {

		/** Download URL */
		downloadUrl: FormControl<string | null | undefined>,
	}
	export function CreatePublicDownloadTokenGenerateResponseFormGroup() {
		return new FormGroup<PublicDownloadTokenGenerateResponseFormProperties>({
			downloadUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Upload Share information */
	export interface PublicUploadShare {

		/**
		 * Creation date
		 * Required
		 */
		createdAt: Date;

		/**
		 * &#128640; Since v4.11.0
		 * Creator name
		 * Required
		 */
		creatorName: string;

		/**
		 * &#128640; Since v4.11.0
		 * Creator username
		 */
		creatorUsername?: string | null;

		/** Expiration date */
		expireAt?: Date | null;

		/** Encryption state */
		isEncrypted?: boolean | null;

		/**
		 * Is share protected by password
		 * Required
		 */
		isProtected: boolean;

		/** Share display name (alias name) */
		name?: string | null;

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes?: string | null;

		/**
		 * Remaining size
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		remainingSize?: string | null;

		/**
		 * Remaining slots
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		remainingSlots?: number | null;

		/** Allow display of already uploaded files */
		showUploadedFiles?: boolean | null;

		/** List of (public) uploaded files */
		uploadedFiles?: Array<PublicUploadedFileData>;

		/** List of user public keys */
		userUserPublicKeyList?: UserUserPublicKeyList;
	}

	/** Upload Share information */
	export interface PublicUploadShareFormProperties {

		/**
		 * Creation date
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Creator name
		 * Required
		 */
		creatorName: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Creator username
		 */
		creatorUsername: FormControl<string | null | undefined>,

		/** Expiration date */
		expireAt: FormControl<Date | null | undefined>,

		/** Encryption state */
		isEncrypted: FormControl<boolean | null | undefined>,

		/**
		 * Is share protected by password
		 * Required
		 */
		isProtected: FormControl<boolean | null | undefined>,

		/** Share display name (alias name) */
		name: FormControl<string | null | undefined>,

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes: FormControl<string | null | undefined>,

		/**
		 * Remaining size
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		remainingSize: FormControl<string | null | undefined>,

		/**
		 * Remaining slots
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		remainingSlots: FormControl<number | null | undefined>,

		/** Allow display of already uploaded files */
		showUploadedFiles: FormControl<boolean | null | undefined>,
	}
	export function CreatePublicUploadShareFormGroup() {
		return new FormGroup<PublicUploadShareFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			creatorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creatorUsername: new FormControl<string | null | undefined>(undefined),
			expireAt: new FormControl<Date | null | undefined>(undefined),
			isEncrypted: new FormControl<boolean | null | undefined>(undefined),
			isProtected: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			remainingSize: new FormControl<string | null | undefined>(undefined),
			remainingSlots: new FormControl<number | null | undefined>(undefined),
			showUploadedFiles: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** File information */
	export interface PublicUploadedFileData {

		/**
		 * Creation date
		 * Required
		 */
		createdAt: Date;

		/** Hash value of transferred file */
		hash?: string | null;

		/**
		 * Name
		 * Required
		 */
		name: string;

		/**
		 * File size in byte
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size: string;
	}

	/** File information */
	export interface PublicUploadedFileDataFormProperties {

		/**
		 * Creation date
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/** Hash value of transferred file */
		hash: FormControl<string | null | undefined>,

		/**
		 * Name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * File size in byte
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size: FormControl<string | null | undefined>,
	}
	export function CreatePublicUploadedFileDataFormGroup() {
		return new FormGroup<PublicUploadedFileDataFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			hash: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of user public keys */
	export interface UserUserPublicKeyList {

		/**
		 * List of user public keys
		 * Required
		 */
		items: Array<UserUserPublicKey>;
	}

	/** List of user public keys */
	export interface UserUserPublicKeyListFormProperties {
	}
	export function CreateUserUserPublicKeyListFormGroup() {
		return new FormGroup<UserUserPublicKeyListFormProperties>({
		});

	}


	/** RADIUS challenge reply */
	export interface RadiusChallengeResponse {

		/**
		 * HTTP status code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: number;

		/** Debug information */
		debugInfo?: string | null;

		/**
		 * Internal error code
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorCode?: number | null;

		/**
		 * HTTP status code description
		 * Required
		 */
		message: string;

		/**
		 * RADIUS Reply-Message
		 * Instruction how to handle the situation.
		 * Required
		 */
		replyMessage: string;

		/**
		 * For RADIUS Access-Challenge
		 * If a `replyState` is returned, it must be included as `state` in the following request.
		 * Required
		 */
		replyState: string;
	}

	/** RADIUS challenge reply */
	export interface RadiusChallengeResponseFormProperties {

		/**
		 * HTTP status code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** Debug information */
		debugInfo: FormControl<string | null | undefined>,

		/**
		 * Internal error code
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorCode: FormControl<number | null | undefined>,

		/**
		 * HTTP status code description
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/**
		 * RADIUS Reply-Message
		 * Instruction how to handle the situation.
		 * Required
		 */
		replyMessage: FormControl<string | null | undefined>,

		/**
		 * For RADIUS Access-Challenge
		 * If a `replyState` is returned, it must be included as `state` in the following request.
		 * Required
		 */
		replyState: FormControl<string | null | undefined>,
	}
	export function CreateRadiusChallengeResponseFormGroup() {
		return new FormGroup<RadiusChallengeResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			debugInfo: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replyMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replyState: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** RADIUS configuration */
	export interface RadiusConfig {

		/** Failover server information */
		failoverServer?: FailoverServer;

		/**
		 * RADIUS Server IP Address
		 * Required
		 */
		ipAddress: string;

		/**
		 * Sequence order of concatenated PIN and one-time token
		 * Required
		 */
		otpPinFirst: boolean;

		/**
		 * RADIUS Server Port
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: number;

		/**
		 * Shared Secret to access the RADIUS server
		 * Required
		 */
		sharedSecret: string;
	}

	/** RADIUS configuration */
	export interface RadiusConfigFormProperties {

		/**
		 * RADIUS Server IP Address
		 * Required
		 */
		ipAddress: FormControl<string | null | undefined>,

		/**
		 * Sequence order of concatenated PIN and one-time token
		 * Required
		 */
		otpPinFirst: FormControl<boolean | null | undefined>,

		/**
		 * RADIUS Server Port
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: FormControl<number | null | undefined>,

		/**
		 * Shared Secret to access the RADIUS server
		 * Required
		 */
		sharedSecret: FormControl<string | null | undefined>,
	}
	export function CreateRadiusConfigFormGroup() {
		return new FormGroup<RadiusConfigFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			otpPinFirst: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sharedSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for creating a RADIUS configuration */
	export interface RadiusConfigCreateRequest {

		/** Failover server information */
		failoverServer?: FailoverServer;

		/**
		 * RADIUS Server IP Address
		 * Required
		 */
		ipAddress: string;

		/** Sequence order of concatenated PIN and one-time token */
		otpPinFirst?: boolean | null;

		/**
		 * RADIUS Server Port
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: number;

		/**
		 * Shared Secret to access the RADIUS server
		 * Required
		 */
		sharedSecret: string;
	}

	/** Request model for creating a RADIUS configuration */
	export interface RadiusConfigCreateRequestFormProperties {

		/**
		 * RADIUS Server IP Address
		 * Required
		 */
		ipAddress: FormControl<string | null | undefined>,

		/** Sequence order of concatenated PIN and one-time token */
		otpPinFirst: FormControl<boolean | null | undefined>,

		/**
		 * RADIUS Server Port
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: FormControl<number | null | undefined>,

		/**
		 * Shared Secret to access the RADIUS server
		 * Required
		 */
		sharedSecret: FormControl<string | null | undefined>,
	}
	export function CreateRadiusConfigCreateRequestFormGroup() {
		return new FormGroup<RadiusConfigCreateRequestFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			otpPinFirst: new FormControl<boolean | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sharedSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for updating a RADIUS configuration */
	export interface RadiusConfigUpdateRequest {

		/** Failover server information */
		failoverServer?: FailoverServer;

		/** RADIUS Server IP Address */
		ipAddress?: string | null;

		/** Sequence order of concatenated PIN and one-time token */
		otpPinFirst?: boolean | null;

		/**
		 * RADIUS Server Port
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port?: number | null;

		/** Shared Secret to access the RADIUS server */
		sharedSecret?: string | null;
	}

	/** Request model for updating a RADIUS configuration */
	export interface RadiusConfigUpdateRequestFormProperties {

		/** RADIUS Server IP Address */
		ipAddress: FormControl<string | null | undefined>,

		/** Sequence order of concatenated PIN and one-time token */
		otpPinFirst: FormControl<boolean | null | undefined>,

		/**
		 * RADIUS Server Port
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: FormControl<number | null | undefined>,

		/** Shared Secret to access the RADIUS server */
		sharedSecret: FormControl<string | null | undefined>,
	}
	export function CreateRadiusConfigUpdateRequestFormGroup() {
		return new FormGroup<RadiusConfigUpdateRequestFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined),
			otpPinFirst: new FormControl<boolean | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			sharedSecret: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Recover usernames for email */
	export interface RecoverUserNameRequest {

		/** IETF language tag */
		creatorLanguage?: string | null;

		/**
		 * Email
		 * Required
		 */
		email: string;
	}

	/** Recover usernames for email */
	export interface RecoverUserNameRequestFormProperties {

		/** IETF language tag */
		creatorLanguage: FormControl<string | null | undefined>,

		/**
		 * Email
		 * Required
		 */
		email: FormControl<string | null | undefined>,
	}
	export function CreateRecoverUserNameRequestFormGroup() {
		return new FormGroup<RecoverUserNameRequestFormProperties>({
			creatorLanguage: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for reseting user's login password */
	export interface ResetPasswordRequest {

		/** IETF language tag */
		creatorLanguage?: string | null;

		/**
		 * &#128679; Deprecated since v4.7.0
		 * Language ID or ISO 639-1 code
		 */
		language?: string | null;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * User login name
		 */
		login?: string | null;

		/**
		 * &#128640; Since v4.13.0
		 * Username
		 */
		userName?: string | null;
	}

	/** Request model for reseting user's login password */
	export interface ResetPasswordRequestFormProperties {

		/** IETF language tag */
		creatorLanguage: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.7.0
		 * Language ID or ISO 639-1 code
		 */
		language: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.13.0
		 * User login name
		 */
		login: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.13.0
		 * Username
		 */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateResetPasswordRequestFormGroup() {
		return new FormGroup<ResetPasswordRequestFormProperties>({
			creatorLanguage: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			login: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Password reset information */
	export interface ResetPasswordTokenValidateResponse {

		/**
		 * &#128679; Deprecated since v4.14.0
		 * Allow weak password
		 * Please use `loginPasswordPolicies` instead
		 */
		allowSystemGlobalWeakPassword?: boolean | null;

		/**
		 * User first name
		 * Required
		 */
		firstName: string;

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Gender
		 */
		gender?: string | null;

		/**
		 * User last name
		 * Required
		 */
		lastName: string;

		/** Login password policies */
		loginPasswordPolicies?: LoginPasswordPolicies;

		/**
		 * &#128679; Deprecated since v4.18.0
		 * Job title
		 */
		title?: string | null;
	}

	/** Password reset information */
	export interface ResetPasswordTokenValidateResponseFormProperties {

		/**
		 * &#128679; Deprecated since v4.14.0
		 * Allow weak password
		 * Please use `loginPasswordPolicies` instead
		 */
		allowSystemGlobalWeakPassword: FormControl<boolean | null | undefined>,

		/**
		 * User first name
		 * Required
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Gender
		 */
		gender: FormControl<string | null | undefined>,

		/**
		 * User last name
		 * Required
		 */
		lastName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.18.0
		 * Job title
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateResetPasswordTokenValidateResponseFormGroup() {
		return new FormGroup<ResetPasswordTokenValidateResponseFormProperties>({
			allowSystemGlobalWeakPassword: new FormControl<boolean | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gender: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** New password */
	export interface ResetPasswordWithTokenRequest {

		/**
		 * New password
		 * Required
		 */
		password: string;
	}

	/** New password */
	export interface ResetPasswordWithTokenRequestFormProperties {

		/**
		 * New password
		 * Required
		 */
		password: FormControl<string | null | undefined>,
	}
	export function CreateResetPasswordWithTokenRequestFormGroup() {
		return new FormGroup<ResetPasswordWithTokenRequestFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for restoring deleted nodes */
	export interface RestoreDeletedNodesRequest {

		/**
		 * List of deleted node IDs
		 * Required
		 */
		deletedNodeIds: Array<number>;

		/** Preserve Download Share Links and point them to the new node. */
		keepShareLinks?: boolean | null;

		/**
		 * Node parent ID
		 * (default: previous parent ID)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId?: string | null;

		/**
		 * Node conflict resolution strategy:
		 * * `autorename`
		 * * `overwrite`
		 * * `fail`
		 */
		resolutionStrategy?: CompleteS3FileUploadRequestResolutionStrategy | null;
	}

	/** Request model for restoring deleted nodes */
	export interface RestoreDeletedNodesRequestFormProperties {

		/** Preserve Download Share Links and point them to the new node. */
		keepShareLinks: FormControl<boolean | null | undefined>,

		/**
		 * Node parent ID
		 * (default: previous parent ID)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId: FormControl<string | null | undefined>,

		/**
		 * Node conflict resolution strategy:
		 * * `autorename`
		 * * `overwrite`
		 * * `fail`
		 */
		resolutionStrategy: FormControl<CompleteS3FileUploadRequestResolutionStrategy | null | undefined>,
	}
	export function CreateRestoreDeletedNodesRequestFormGroup() {
		return new FormGroup<RestoreDeletedNodesRequestFormProperties>({
			keepShareLinks: new FormControl<boolean | null | undefined>(undefined),
			parentId: new FormControl<string | null | undefined>(undefined),
			resolutionStrategy: new FormControl<CompleteS3FileUploadRequestResolutionStrategy | null | undefined>(undefined),
		});

	}


	/** Group information */
	export interface RoleGroup {

		/**
		 * Unique identifier for the group
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Is group member of the role
		 * Required
		 */
		isMember: boolean;

		/**
		 * Group name
		 * Required
		 */
		name: string;
	}

	/** Group information */
	export interface RoleGroupFormProperties {

		/**
		 * Unique identifier for the group
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Is group member of the role
		 * Required
		 */
		isMember: FormControl<boolean | null | undefined>,

		/**
		 * Group name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRoleGroupFormGroup() {
		return new FormGroup<RoleGroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isMember: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of groups with assigned role */
	export interface RoleGroupList {

		/**
		 * List of role-group mappings
		 * Required
		 */
		items: Array<RoleGroup>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of groups with assigned role */
	export interface RoleGroupListFormProperties {
	}
	export function CreateRoleGroupListFormGroup() {
		return new FormGroup<RoleGroupListFormProperties>({
		});

	}


	/** User information */
	export interface RoleUser {

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Display name
		 * use information from `UserInfo` instead to combine a display name
		 * Required
		 */
		displayName: string;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Unique identifier for the user
		 * use `id` from `UserInfo` instead
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Is user member of the role
		 * Required
		 */
		isMember: boolean;

		/**
		 * User information
		 * Required
		 */
		userInfo: UserInfo;
	}

	/** User information */
	export interface RoleUserFormProperties {

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Display name
		 * use information from `UserInfo` instead to combine a display name
		 * Required
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Unique identifier for the user
		 * use `id` from `UserInfo` instead
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Is user member of the role
		 * Required
		 */
		isMember: FormControl<boolean | null | undefined>,
	}
	export function CreateRoleUserFormGroup() {
		return new FormGroup<RoleUserFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isMember: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of users with assigned role */
	export interface RoleUserList {

		/**
		 * List of role-user mappings
		 * Required
		 */
		items: Array<RoleUser>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of users with assigned role */
	export interface RoleUserListFormProperties {
	}
	export function CreateRoleUserListFormGroup() {
		return new FormGroup<RoleUserListFormProperties>({
		});

	}


	/** Room information */
	export interface RoomData {

		/**
		 * &#128679; Deprecated since v4.10.0
		 * List of rooms, where this room is a parent (if exist)
		 */
		children?: Array<RoomData>;

		/**
		 * Returns the number of Download Shares of this node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntDownloadShares?: number | null;

		/**
		 * Returns the number of Upload Shares of this node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntUploadShares?: number | null;

		/** Expiration date */
		createdAt?: Date | null;

		/** User information */
		createdBy?: UserInfo;

		/**
		 * &#128679; Deprecated since v4.10.0
		 * Is recycle bin active (for rooms only)
		 * Recycle bin is always on (disabling is not possible).
		 * Required
		 */
		hasRecycleBin: boolean;

		/**
		 * Room ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Encryption state
		 * Required
		 */
		isEncrypted: boolean;

		/** Node is marked as favorite (for rooms / folders only) */
		isFavorite?: boolean | null;

		/**
		 * Is user granted room permissions
		 * Required
		 */
		isGranted: boolean;

		/**
		 * Name
		 * Required
		 */
		name: string;

		/**
		 * Parent node ID (room or folder)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId?: string | null;

		/** Node permissions */
		permissions?: NodePermissions;

		/**
		 * Quota in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quota?: string | null;

		/**
		 * Retention period for deleted nodes in days
		 * Required
		 * Minimum: 0
		 * Maximum: 9999
		 */
		recycleBinRetentionPeriod: number;

		/**
		 * Room size
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size?: string | null;

		/** Node type */
		type?: RoomDataType | null;

		/** Modification date */
		updatedAt?: Date | null;

		/** User information */
		updatedBy?: UserInfo;
	}

	/** Room information */
	export interface RoomDataFormProperties {

		/**
		 * Returns the number of Download Shares of this node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntDownloadShares: FormControl<number | null | undefined>,

		/**
		 * Returns the number of Upload Shares of this node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntUploadShares: FormControl<number | null | undefined>,

		/** Expiration date */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.10.0
		 * Is recycle bin active (for rooms only)
		 * Recycle bin is always on (disabling is not possible).
		 * Required
		 */
		hasRecycleBin: FormControl<boolean | null | undefined>,

		/**
		 * Room ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Encryption state
		 * Required
		 */
		isEncrypted: FormControl<boolean | null | undefined>,

		/** Node is marked as favorite (for rooms / folders only) */
		isFavorite: FormControl<boolean | null | undefined>,

		/**
		 * Is user granted room permissions
		 * Required
		 */
		isGranted: FormControl<boolean | null | undefined>,

		/**
		 * Name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Parent node ID (room or folder)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		parentId: FormControl<string | null | undefined>,

		/**
		 * Quota in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quota: FormControl<string | null | undefined>,

		/**
		 * Retention period for deleted nodes in days
		 * Required
		 * Minimum: 0
		 * Maximum: 9999
		 */
		recycleBinRetentionPeriod: FormControl<number | null | undefined>,

		/**
		 * Room size
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size: FormControl<string | null | undefined>,

		/** Node type */
		type: FormControl<RoomDataType | null | undefined>,

		/** Modification date */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateRoomDataFormGroup() {
		return new FormGroup<RoomDataFormProperties>({
			cntDownloadShares: new FormControl<number | null | undefined>(undefined),
			cntUploadShares: new FormControl<number | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			hasRecycleBin: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isEncrypted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isFavorite: new FormControl<boolean | null | undefined>(undefined),
			isGranted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentId: new FormControl<string | null | undefined>(undefined),
			quota: new FormControl<string | null | undefined>(undefined),
			recycleBinRetentionPeriod: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(9999)]),
			size: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<RoomDataType | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum RoomDataType { room = 'room' }


	/** Group information */
	export interface RoomGroup {

		/**
		 * Unique identifier for the group
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Is user granted room permissions
		 * Required
		 */
		isGranted: boolean;

		/**
		 * Group name
		 * Required
		 */
		name: string;

		/**
		 * Behaviour when new users are added to the group:
		 * * `autoallow`
		 * * `pending`
		 * Only relevant if `adminGroupIds` has items.
		 */
		newGroupMemberAcceptance?: ConfigRoomRequestNewGroupMemberAcceptance | null;

		/** Node permissions */
		permissions?: NodePermissions;
	}

	/** Group information */
	export interface RoomGroupFormProperties {

		/**
		 * Unique identifier for the group
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Is user granted room permissions
		 * Required
		 */
		isGranted: FormControl<boolean | null | undefined>,

		/**
		 * Group name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Behaviour when new users are added to the group:
		 * * `autoallow`
		 * * `pending`
		 * Only relevant if `adminGroupIds` has items.
		 */
		newGroupMemberAcceptance: FormControl<ConfigRoomRequestNewGroupMemberAcceptance | null | undefined>,
	}
	export function CreateRoomGroupFormGroup() {
		return new FormGroup<RoomGroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isGranted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			newGroupMemberAcceptance: new FormControl<ConfigRoomRequestNewGroupMemberAcceptance | null | undefined>(undefined),
		});

	}


	/** List of groups */
	export interface RoomGroupList {

		/**
		 * List of room-group mappings
		 * Required
		 */
		items: Array<RoomGroup>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of groups */
	export interface RoomGroupListFormProperties {
	}
	export function CreateRoomGroupListFormGroup() {
		return new FormGroup<RoomGroupListFormProperties>({
		});

	}


	/** Request model for granting group(s) to the room */
	export interface RoomGroupsAddBatchRequest {

		/**
		 * List of room-group mappings
		 * Required
		 */
		items: Array<RoomGroupsAddBatchRequestItem>;
	}

	/** Request model for granting group(s) to the room */
	export interface RoomGroupsAddBatchRequestFormProperties {
	}
	export function CreateRoomGroupsAddBatchRequestFormGroup() {
		return new FormGroup<RoomGroupsAddBatchRequestFormProperties>({
		});

	}


	/** Request item model for granting group to the room */
	export interface RoomGroupsAddBatchRequestItem {

		/**
		 * Unique identifier for the group
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Behaviour when new users are added to the group:
		 * * `autoallow`
		 * * `pending`
		 * Only relevant if `adminGroupIds` has items.
		 */
		newGroupMemberAcceptance?: ConfigRoomRequestNewGroupMemberAcceptance | null;

		/**
		 * Node permissions
		 * Required
		 */
		permissions: NodePermissions;
	}

	/** Request item model for granting group to the room */
	export interface RoomGroupsAddBatchRequestItemFormProperties {

		/**
		 * Unique identifier for the group
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Behaviour when new users are added to the group:
		 * * `autoallow`
		 * * `pending`
		 * Only relevant if `adminGroupIds` has items.
		 */
		newGroupMemberAcceptance: FormControl<ConfigRoomRequestNewGroupMemberAcceptance | null | undefined>,
	}
	export function CreateRoomGroupsAddBatchRequestItemFormGroup() {
		return new FormGroup<RoomGroupsAddBatchRequestItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			newGroupMemberAcceptance: new FormControl<ConfigRoomRequestNewGroupMemberAcceptance | null | undefined>(undefined),
		});

	}


	/** Request model for revoking group(s) from the room */
	export interface RoomGroupsDeleteBatchRequest {

		/**
		 * List of group IDs
		 * Required
		 */
		ids: Array<number>;
	}

	/** Request model for revoking group(s) from the room */
	export interface RoomGroupsDeleteBatchRequestFormProperties {
	}
	export function CreateRoomGroupsDeleteBatchRequestFormGroup() {
		return new FormGroup<RoomGroupsDeleteBatchRequestFormProperties>({
		});

	}


	/** Request model for adding a guest user to the room */
	export interface RoomGuestUserAddRequest {

		/**
		 * List of room-user mappings
		 * Required
		 */
		roomGuestInvitations: Array<RoomGuestUserInvitation>;
	}

	/** Request model for adding a guest user to the room */
	export interface RoomGuestUserAddRequestFormProperties {
	}
	export function CreateRoomGuestUserAddRequestFormGroup() {
		return new FormGroup<RoomGuestUserAddRequestFormProperties>({
		});

	}


	/** Request item model for inviting a guest user to a room */
	export interface RoomGuestUserInvitation {

		/**
		 * Email
		 * Required
		 */
		email: string;

		/**
		 * User first name
		 * Required
		 */
		firstName: string;

		/**
		 * User last name
		 * Required
		 */
		lastName: string;
	}

	/** Request item model for inviting a guest user to a room */
	export interface RoomGuestUserInvitationFormProperties {

		/**
		 * Email
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * User first name
		 * Required
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * User last name
		 * Required
		 */
		lastName: FormControl<string | null | undefined>,
	}
	export function CreateRoomGuestUserInvitationFormGroup() {
		return new FormGroup<RoomGuestUserInvitationFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Room Polices */
	export interface RoomPolicies {

		/**
		 * Default policy room expiration period in seconds.
		 * All files in a room will have their expiration date set to this period after their respective upload.
		 * 0 means no default expiration policy is set.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		defaultExpirationPeriod: number;
	}

	/** Room Polices */
	export interface RoomPoliciesFormProperties {

		/**
		 * Default policy room expiration period in seconds.
		 * All files in a room will have their expiration date set to this period after their respective upload.
		 * 0 means no default expiration policy is set.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		defaultExpirationPeriod: FormControl<number | null | undefined>,
	}
	export function CreateRoomPoliciesFormGroup() {
		return new FormGroup<RoomPoliciesFormProperties>({
			defaultExpirationPeriod: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Room Policies */
	export interface RoomPoliciesRequest {

		/**
		 * Default policy room expiration period in seconds.
		 * All files in a room will have their expiration date set to this period after their respective upload.
		 * 0 means no default expiration policy is set.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		defaultExpirationPeriod?: number | null;
	}

	/** Room Policies */
	export interface RoomPoliciesRequestFormProperties {

		/**
		 * Default policy room expiration period in seconds.
		 * All files in a room will have their expiration date set to this period after their respective upload.
		 * 0 means no default expiration policy is set.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		defaultExpirationPeriod: FormControl<number | null | undefined>,
	}
	export function CreateRoomPoliciesRequestFormGroup() {
		return new FormGroup<RoomPoliciesRequestFormProperties>({
			defaultExpirationPeriod: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List of rooms */
	export interface RoomTreeDataList {

		/**
		 * List of room data information
		 * Required
		 */
		items: Array<RoomData>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of rooms */
	export interface RoomTreeDataListFormProperties {
	}
	export function CreateRoomTreeDataListFormGroup() {
		return new FormGroup<RoomTreeDataListFormProperties>({
		});

	}


	/** User information */
	export interface RoomUser {

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Display name
		 * use information from `UserInfo` instead to combine a display name
		 * Required
		 */
		displayName: string;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Email
		 * use `email` from `UserInfo` instead
		 * Required
		 */
		email: string;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Unique identifier for the user
		 * use `id` from `UserInfo` instead
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Is user granted room permissions
		 * Required
		 */
		isGranted: boolean;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * User login name
		 * Required
		 */
		login: string;

		/** Node permissions */
		permissions?: NodePermissions;

		/** Public key container */
		publicKeyContainer?: PublicKeyContainer;

		/**
		 * User information
		 * Required
		 */
		userInfo: UserInfo;
	}

	/** User information */
	export interface RoomUserFormProperties {

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Display name
		 * use information from `UserInfo` instead to combine a display name
		 * Required
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Email
		 * use `email` from `UserInfo` instead
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * Unique identifier for the user
		 * use `id` from `UserInfo` instead
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Is user granted room permissions
		 * Required
		 */
		isGranted: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * User login name
		 * Required
		 */
		login: FormControl<string | null | undefined>,
	}
	export function CreateRoomUserFormGroup() {
		return new FormGroup<RoomUserFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isGranted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			login: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of users */
	export interface RoomUserList {

		/**
		 * List of room-user mappings
		 * Required
		 */
		items: Array<RoomUser>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of users */
	export interface RoomUserListFormProperties {
	}
	export function CreateRoomUserListFormGroup() {
		return new FormGroup<RoomUserListFormProperties>({
		});

	}


	/** Request model for granting user(s) to the room */
	export interface RoomUsersAddBatchRequest {

		/**
		 * List of room-user mappings
		 * Required
		 */
		items: Array<RoomUsersAddBatchRequestItem>;
	}

	/** Request model for granting user(s) to the room */
	export interface RoomUsersAddBatchRequestFormProperties {
	}
	export function CreateRoomUsersAddBatchRequestFormGroup() {
		return new FormGroup<RoomUsersAddBatchRequestFormProperties>({
		});

	}


	/** Request item model for granting user to the room */
	export interface RoomUsersAddBatchRequestItem {

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Node permissions
		 * Required
		 */
		permissions: NodePermissions;
	}

	/** Request item model for granting user to the room */
	export interface RoomUsersAddBatchRequestItemFormProperties {

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateRoomUsersAddBatchRequestItemFormGroup() {
		return new FormGroup<RoomUsersAddBatchRequestItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for revoking user(s) from the room */
	export interface RoomUsersDeleteBatchRequest {

		/**
		 * List of user IDs
		 * Required
		 */
		ids: Array<number>;
	}

	/** Request model for revoking user(s) from the room */
	export interface RoomUsersDeleteBatchRequestFormProperties {
	}
	export function CreateRoomUsersDeleteBatchRequestFormGroup() {
		return new FormGroup<RoomUsersDeleteBatchRequestFormProperties>({
		});

	}


	/** Webhook information */
	export interface RoomWebhook {

		/**
		 * Determines whether webhook is assigned to the room.
		 * Required
		 */
		isAssigned: boolean;

		/**
		 * Webhook information
		 * Required
		 */
		webhook: Webhook;
	}

	/** Webhook information */
	export interface RoomWebhookFormProperties {

		/**
		 * Determines whether webhook is assigned to the room.
		 * Required
		 */
		isAssigned: FormControl<boolean | null | undefined>,
	}
	export function CreateRoomWebhookFormGroup() {
		return new FormGroup<RoomWebhookFormProperties>({
			isAssigned: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Webhook information */
	export interface Webhook {

		/**
		 * Creation date
		 * Required
		 */
		createdAt: Date;

		/** User information */
		createdBy?: UserInfo;

		/**
		 * List of names of event types
		 * Required
		 */
		eventTypeNames: Array<string>;

		/**
		 * Expiration date / time
		 * Required
		 */
		expireAt: Date;

		/**
		 * Last HTTP status code when a webhook is disabled due to delivery failures
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failStatus?: number | null;

		/**
		 * ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Is enabled
		 * Required
		 */
		isEnabled: boolean;

		/**
		 * Name
		 * Required
		 */
		name: string;

		/** Secret; used for event message signatures */
		secret?: string | null;

		/**
		 * Modification date
		 * Required
		 */
		updatedAt: Date;

		/** User information */
		updatedBy?: UserInfo;

		/**
		 * URL
		 * Required
		 */
		url: string;
	}

	/** Webhook information */
	export interface WebhookFormProperties {

		/**
		 * Creation date
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Expiration date / time
		 * Required
		 */
		expireAt: FormControl<Date | null | undefined>,

		/**
		 * Last HTTP status code when a webhook is disabled due to delivery failures
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failStatus: FormControl<number | null | undefined>,

		/**
		 * ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Is enabled
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Secret; used for event message signatures */
		secret: FormControl<string | null | undefined>,

		/**
		 * Modification date
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,

		/**
		 * URL
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebhookFormGroup() {
		return new FormGroup<WebhookFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			expireAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			failStatus: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secret: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for handling webhook assignments */
	export interface RoomWebhookAssignment {

		/**
		 * Determines whether webhook is assigned to the room.
		 * Required
		 */
		isAssigned: boolean;

		/**
		 * Webhook ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		webhookId: string;
	}

	/** Request model for handling webhook assignments */
	export interface RoomWebhookAssignmentFormProperties {

		/**
		 * Determines whether webhook is assigned to the room.
		 * Required
		 */
		isAssigned: FormControl<boolean | null | undefined>,

		/**
		 * Webhook ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		webhookId: FormControl<string | null | undefined>,
	}
	export function CreateRoomWebhookAssignmentFormGroup() {
		return new FormGroup<RoomWebhookAssignmentFormProperties>({
			isAssigned: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			webhookId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of webhooks */
	export interface RoomWebhookList {

		/**
		 * List of webhooks
		 * Required
		 */
		items: Array<RoomWebhook>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of webhooks */
	export interface RoomWebhookListFormProperties {
	}
	export function CreateRoomWebhookListFormGroup() {
		return new FormGroup<RoomWebhookListFormProperties>({
		});

	}


	/** S3 configuration */
	export interface S3Config {

		/**
		 * Determines whether Access Key ID is defined
		 * Required
		 */
		accessKeyDefined: boolean;

		/**
		 * &#128679; Deprecated since v4.24.0
		 * S3 bucket name
		 * use `bucketUrl` instead
		 */
		bucketName?: string | null;

		/**
		 * S3 object storage bucket URL
		 * Required
		 */
		bucketUrl: string;

		/**
		 * &#128679; Deprecated since v4.24.0
		 * S3 object storage endpoint URL
		 * use `bucketUrl` instead
		 */
		endpointUrl?: string | null;

		/** S3 region */
		region?: string | null;

		/**
		 * Determines whether Access Secret Key is defined
		 * Required
		 */
		secretKeyDefined: boolean;
	}

	/** S3 configuration */
	export interface S3ConfigFormProperties {

		/**
		 * Determines whether Access Key ID is defined
		 * Required
		 */
		accessKeyDefined: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.24.0
		 * S3 bucket name
		 * use `bucketUrl` instead
		 */
		bucketName: FormControl<string | null | undefined>,

		/**
		 * S3 object storage bucket URL
		 * Required
		 */
		bucketUrl: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.24.0
		 * S3 object storage endpoint URL
		 * use `bucketUrl` instead
		 */
		endpointUrl: FormControl<string | null | undefined>,

		/** S3 region */
		region: FormControl<string | null | undefined>,

		/**
		 * Determines whether Access Secret Key is defined
		 * Required
		 */
		secretKeyDefined: FormControl<boolean | null | undefined>,
	}
	export function CreateS3ConfigFormGroup() {
		return new FormGroup<S3ConfigFormProperties>({
			accessKeyDefined: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			bucketName: new FormControl<string | null | undefined>(undefined),
			bucketUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endpointUrl: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			secretKeyDefined: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for creating a S3 configuration */
	export interface S3ConfigCreateRequest {

		/**
		 * Access Key ID
		 * Required
		 */
		accessKey: string;

		/**
		 * &#128679; Deprecated since v4.24.0
		 * S3 bucket name
		 * use `bucketUrl` instead
		 */
		bucketName?: string | null;

		/** S3 object storage bucket URL */
		bucketUrl?: string | null;

		/**
		 * &#128679; Deprecated since v4.24.0
		 * S3 object storage endpoint URL
		 * use `bucketUrl` instead
		 */
		endpointUrl?: string | null;

		/** S3 region */
		region?: string | null;

		/**
		 * Secret Access Key
		 * Required
		 */
		secretKey: string;
	}

	/** Request model for creating a S3 configuration */
	export interface S3ConfigCreateRequestFormProperties {

		/**
		 * Access Key ID
		 * Required
		 */
		accessKey: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.24.0
		 * S3 bucket name
		 * use `bucketUrl` instead
		 */
		bucketName: FormControl<string | null | undefined>,

		/** S3 object storage bucket URL */
		bucketUrl: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.24.0
		 * S3 object storage endpoint URL
		 * use `bucketUrl` instead
		 */
		endpointUrl: FormControl<string | null | undefined>,

		/** S3 region */
		region: FormControl<string | null | undefined>,

		/**
		 * Secret Access Key
		 * Required
		 */
		secretKey: FormControl<string | null | undefined>,
	}
	export function CreateS3ConfigCreateRequestFormGroup() {
		return new FormGroup<S3ConfigCreateRequestFormProperties>({
			accessKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bucketName: new FormControl<string | null | undefined>(undefined),
			bucketUrl: new FormControl<string | null | undefined>(undefined),
			endpointUrl: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			secretKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for updating a S3 configuration */
	export interface S3ConfigUpdateRequest {

		/** Access Key ID */
		accessKey?: string | null;

		/**
		 * &#128679; Deprecated since v4.24.0
		 * S3 bucket name
		 * use `bucketUrl` instead
		 */
		bucketName?: string | null;

		/** S3 object storage bucket URL */
		bucketUrl?: string | null;

		/**
		 * &#128679; Deprecated since v4.24.0
		 * S3 object storage endpoint URL
		 * use `bucketUrl` instead
		 */
		endpointUrl?: string | null;

		/** S3 region */
		region?: string | null;

		/** Secret Access Key */
		secretKey?: string | null;
	}

	/** Request model for updating a S3 configuration */
	export interface S3ConfigUpdateRequestFormProperties {

		/** Access Key ID */
		accessKey: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.24.0
		 * S3 bucket name
		 * use `bucketUrl` instead
		 */
		bucketName: FormControl<string | null | undefined>,

		/** S3 object storage bucket URL */
		bucketUrl: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.24.0
		 * S3 object storage endpoint URL
		 * use `bucketUrl` instead
		 */
		endpointUrl: FormControl<string | null | undefined>,

		/** S3 region */
		region: FormControl<string | null | undefined>,

		/** Secret Access Key */
		secretKey: FormControl<string | null | undefined>,
	}
	export function CreateS3ConfigUpdateRequestFormGroup() {
		return new FormGroup<S3ConfigUpdateRequestFormProperties>({
			accessKey: new FormControl<string | null | undefined>(undefined),
			bucketName: new FormControl<string | null | undefined>(undefined),
			bucketUrl: new FormControl<string | null | undefined>(undefined),
			endpointUrl: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			secretKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** S3 file upload status information */
	export interface S3FileUploadStatus {

		/** Error information */
		errorDetails?: ErrorResponse;

		/** Node information (Node can be a room, folder or file) */
		node?: Node;

		/**
		 * S3 file upload status:
		 * * `transfer` - upload in progress
		 * * `finishing` - completing file upload
		 * * `done` - file upload successully done
		 * * `error` - an error occurred while file upload
		 * Required
		 */
		status: string;
	}

	/** S3 file upload status information */
	export interface S3FileUploadStatusFormProperties {

		/**
		 * S3 file upload status:
		 * * `transfer` - upload in progress
		 * * `finishing` - completing file upload
		 * * `done` - file upload successully done
		 * * `error` - an error occurred while file upload
		 * Required
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateS3FileUploadStatusFormGroup() {
		return new FormGroup<S3FileUploadStatusFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** S3 file upload status information */
	export interface S3ShareUploadStatus {

		/** Error information */
		errorDetails?: ErrorResponse;

		/**
		 * File name
		 * Required
		 */
		fileName: string;

		/**
		 * File size in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size?: string | null;

		/**
		 * S3 file upload status:
		 * * `transfer` - upload in progress
		 * * `finishing` - completing file upload
		 * * `done` - file upload successully done
		 * * `error` - an error occurred while file upload
		 * Required
		 */
		status: string;
	}

	/** S3 file upload status information */
	export interface S3ShareUploadStatusFormProperties {

		/**
		 * File name
		 * Required
		 */
		fileName: FormControl<string | null | undefined>,

		/**
		 * File size in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size: FormControl<string | null | undefined>,

		/**
		 * S3 file upload status:
		 * * `transfer` - upload in progress
		 * * `finishing` - completing file upload
		 * * `done` - file upload successully done
		 * * `error` - an error occurred while file upload
		 * Required
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateS3ShareUploadStatusFormGroup() {
		return new FormGroup<S3ShareUploadStatusFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** S3 tag information */
	export interface S3Tag {

		/**
		 * S3 tag ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Determines whether S3 is mandatory or not */
		isMandatory?: boolean | null;

		/** S3 tag key */
		key?: string | null;

		/** S3 tag value */
		value?: string | null;
	}

	/** S3 tag information */
	export interface S3TagFormProperties {

		/**
		 * S3 tag ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Determines whether S3 is mandatory or not */
		isMandatory: FormControl<boolean | null | undefined>,

		/** S3 tag key */
		key: FormControl<string | null | undefined>,

		/** S3 tag value */
		value: FormControl<string | null | undefined>,
	}
	export function CreateS3TagFormGroup() {
		return new FormGroup<S3TagFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			isMandatory: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request model for creating a S3 tag */
	export interface S3TagCreateRequest {

		/** Determines whether S3 is mandatory or not */
		isMandatory?: boolean | null;

		/**
		 * S3 tag key
		 * Required
		 */
		key: string;

		/**
		 * S3 tag value
		 * Required
		 */
		value: string;
	}

	/** Request model for creating a S3 tag */
	export interface S3TagCreateRequestFormProperties {

		/** Determines whether S3 is mandatory or not */
		isMandatory: FormControl<boolean | null | undefined>,

		/**
		 * S3 tag key
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * S3 tag value
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateS3TagCreateRequestFormGroup() {
		return new FormGroup<S3TagCreateRequestFormProperties>({
			isMandatory: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of S3 tag IDs */
	export interface S3TagIds {

		/**
		 * List of S3 tag IDs
		 * Required
		 */
		ids: Array<number>;
	}

	/** List of S3 tag IDs */
	export interface S3TagIdsFormProperties {
	}
	export function CreateS3TagIdsFormGroup() {
		return new FormGroup<S3TagIdsFormProperties>({
		});

	}


	/** List of S3 tags */
	export interface S3TagList {

		/** List of configured S3 tags */
		items?: Array<S3Tag>;
	}

	/** List of S3 tags */
	export interface S3TagListFormProperties {
	}
	export function CreateS3TagListFormGroup() {
		return new FormGroup<S3TagListFormProperties>({
		});

	}


	/** DRACOON server time */
	export interface SdsServerTime {

		/** DRACOON server time */
		time?: Date | null;
	}

	/** DRACOON server time */
	export interface SdsServerTimeFormProperties {

		/** DRACOON server time */
		time: FormControl<Date | null | undefined>,
	}
	export function CreateSdsServerTimeFormGroup() {
		return new FormGroup<SdsServerTimeFormProperties>({
			time: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Software version information */
	export interface SoftwareVersionData {

		/**
		 * Build date
		 * Required
		 */
		buildDate: Date;

		/**
		 * &#128640; Since v4.24.0
		 * Determines if the DRACOON Core is deployed in the cloud environment
		 */
		isDracoonCloud?: boolean | null;

		/**
		 * REST API version
		 * Required
		 */
		restApiVersion: string;

		/**
		 * Revision number
		 * Required
		 */
		scmRevisionNumber: string;

		/**
		 * DRACOON server version
		 * Required
		 */
		sdsServerVersion: string;
	}

	/** Software version information */
	export interface SoftwareVersionDataFormProperties {

		/**
		 * Build date
		 * Required
		 */
		buildDate: FormControl<Date | null | undefined>,

		/**
		 * &#128640; Since v4.24.0
		 * Determines if the DRACOON Core is deployed in the cloud environment
		 */
		isDracoonCloud: FormControl<boolean | null | undefined>,

		/**
		 * REST API version
		 * Required
		 */
		restApiVersion: FormControl<string | null | undefined>,

		/**
		 * Revision number
		 * Required
		 */
		scmRevisionNumber: FormControl<string | null | undefined>,

		/**
		 * DRACOON server version
		 * Required
		 */
		sdsServerVersion: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareVersionDataFormGroup() {
		return new FormGroup<SoftwareVersionDataFormProperties>({
			buildDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			isDracoonCloud: new FormControl<boolean | null | undefined>(undefined),
			restApiVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scmRevisionNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sdsServerVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Subscribed download share information */
	export interface SubscribedDownloadShare {

		/**
		 * Auth parent room ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		authParentId?: string | null;

		/**
		 * Share ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;
	}

	/** Subscribed download share information */
	export interface SubscribedDownloadShareFormProperties {

		/**
		 * Auth parent room ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		authParentId: FormControl<string | null | undefined>,

		/**
		 * Share ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSubscribedDownloadShareFormGroup() {
		return new FormGroup<SubscribedDownloadShareFormProperties>({
			authParentId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of subscribed download shares */
	export interface SubscribedDownloadShareList {

		/**
		 * List of subscribed download shares
		 * Required
		 */
		items: Array<SubscribedDownloadShare>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of subscribed download shares */
	export interface SubscribedDownloadShareListFormProperties {
	}
	export function CreateSubscribedDownloadShareListFormGroup() {
		return new FormGroup<SubscribedDownloadShareListFormProperties>({
		});

	}


	/** Subscribed node information */
	export interface SubscribedNode {

		/**
		 * Auth parent room ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		authParentId?: string | null;

		/**
		 * Node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/** Node type */
		type?: NodeType | null;
	}

	/** Subscribed node information */
	export interface SubscribedNodeFormProperties {

		/**
		 * Auth parent room ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		authParentId: FormControl<string | null | undefined>,

		/**
		 * Node ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Node type */
		type: FormControl<NodeType | null | undefined>,
	}
	export function CreateSubscribedNodeFormGroup() {
		return new FormGroup<SubscribedNodeFormProperties>({
			authParentId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<NodeType | null | undefined>(undefined),
		});

	}


	/** List of subscribed nodes */
	export interface SubscribedNodeList {

		/**
		 * List of subscribed nodes
		 * Required
		 */
		items: Array<SubscribedNode>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of subscribed nodes */
	export interface SubscribedNodeListFormProperties {
	}
	export function CreateSubscribedNodeListFormGroup() {
		return new FormGroup<SubscribedNodeListFormProperties>({
		});

	}


	/** Subscribed upload share information */
	export interface SubscribedUploadShare {

		/**
		 * Share ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Target room or folder ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		targetNodeId?: string | null;
	}

	/** Subscribed upload share information */
	export interface SubscribedUploadShareFormProperties {

		/**
		 * Share ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Target room or folder ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		targetNodeId: FormControl<string | null | undefined>,
	}
	export function CreateSubscribedUploadShareFormGroup() {
		return new FormGroup<SubscribedUploadShareFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetNodeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of subscribed upload shares */
	export interface SubscribedUploadShareList {

		/**
		 * List of subscribed upload shares
		 * Required
		 */
		items: Array<SubscribedUploadShare>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of subscribed upload shares */
	export interface SubscribedUploadShareListFormProperties {
	}
	export function CreateSubscribedUploadShareListFormGroup() {
		return new FormGroup<SubscribedUploadShareListFormProperties>({
		});

	}

	export interface SubscriptionPlanRequest {

		/**
		 * subscription plan id
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subscriptionPlanId: number;
	}
	export interface SubscriptionPlanRequestFormProperties {

		/**
		 * subscription plan id
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subscriptionPlanId: FormControl<number | null | undefined>,
	}
	export function CreateSubscriptionPlanRequestFormGroup() {
		return new FormGroup<SubscriptionPlanRequestFormProperties>({
			subscriptionPlanId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubscriptionPlanResponse {

		/**
		 * subscription plan id
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subscriptionPlanId: number;
	}
	export interface SubscriptionPlanResponseFormProperties {

		/**
		 * subscription plan id
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subscriptionPlanId: FormControl<number | null | undefined>,
	}
	export function CreateSubscriptionPlanResponseFormGroup() {
		return new FormGroup<SubscriptionPlanResponseFormProperties>({
			subscriptionPlanId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Syslog settings */
	export interface SyslogConfig {

		/** Is syslog enabled? */
		enabled?: boolean | null;

		/** Syslog server (IP or FQDN) */
		host?: string | null;

		/** Determines whether user’s IP address is logged. */
		logIpEnabled?: boolean | null;

		/**
		 * Syslog server port
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port?: number | null;

		/** Protocol to connect to syslog server */
		protocol?: SyslogConfigProtocol | null;
	}

	/** Syslog settings */
	export interface SyslogConfigFormProperties {

		/** Is syslog enabled? */
		enabled: FormControl<boolean | null | undefined>,

		/** Syslog server (IP or FQDN) */
		host: FormControl<string | null | undefined>,

		/** Determines whether user’s IP address is logged. */
		logIpEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Syslog server port
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: FormControl<number | null | undefined>,

		/** Protocol to connect to syslog server */
		protocol: FormControl<SyslogConfigProtocol | null | undefined>,
	}
	export function CreateSyslogConfigFormGroup() {
		return new FormGroup<SyslogConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			logIpEnabled: new FormControl<boolean | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<SyslogConfigProtocol | null | undefined>(undefined),
		});

	}

	export enum SyslogConfigProtocol { TCP = 'TCP', UDP = 'UDP' }


	/** System defaults */
	export interface SystemDefaults {

		/**
		 * Default expiration period for Download Shares in days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		downloadShareDefaultExpirationPeriod?: number | null;

		/**
		 * Default expiration period for all uploaded files in days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fileDefaultExpirationPeriod?: number | null;

		/**
		 * &#128679; Deprecated since v4.42.0
		 * Defines if login fields should be hidden
		 */
		hideLoginInputFields?: boolean | null;

		/** Define which language should be default. */
		languageDefault?: string | null;

		/**
		 * &#128640; Since v4.12.0
		 * Defines if new users get the role Non Member Viewer by default
		 */
		nonmemberViewerDefault?: boolean | null;

		/**
		 * Default expiration period for Upload Shares in days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		uploadShareDefaultExpirationPeriod?: number | null;
	}

	/** System defaults */
	export interface SystemDefaultsFormProperties {

		/**
		 * Default expiration period for Download Shares in days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		downloadShareDefaultExpirationPeriod: FormControl<number | null | undefined>,

		/**
		 * Default expiration period for all uploaded files in days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fileDefaultExpirationPeriod: FormControl<number | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.42.0
		 * Defines if login fields should be hidden
		 */
		hideLoginInputFields: FormControl<boolean | null | undefined>,

		/** Define which language should be default. */
		languageDefault: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.12.0
		 * Defines if new users get the role Non Member Viewer by default
		 */
		nonmemberViewerDefault: FormControl<boolean | null | undefined>,

		/**
		 * Default expiration period for Upload Shares in days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		uploadShareDefaultExpirationPeriod: FormControl<number | null | undefined>,
	}
	export function CreateSystemDefaultsFormGroup() {
		return new FormGroup<SystemDefaultsFormProperties>({
			downloadShareDefaultExpirationPeriod: new FormControl<number | null | undefined>(undefined),
			fileDefaultExpirationPeriod: new FormControl<number | null | undefined>(undefined),
			hideLoginInputFields: new FormControl<boolean | null | undefined>(undefined),
			languageDefault: new FormControl<string | null | undefined>(undefined),
			nonmemberViewerDefault: new FormControl<boolean | null | undefined>(undefined),
			uploadShareDefaultExpirationPeriod: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** System information (default language and authentication methods) */
	export interface SystemInfo {

		/**
		 * &#128679; Deprecated since v4.13.0
		 * Authentication methods:
		 * * `sql`
		 * * `active_directory`
		 * * `radius`
		 * * `openid`
		 * use `authData` instead
		 * Required
		 */
		authMethods: Array<AuthMethod>;

		/**
		 * &#128679; Deprecated since v4.42.0
		 * Defines if login fields should be hidden
		 * Required
		 */
		hideLoginInputFields: boolean;

		/**
		 * System default language
		 * cf. [RFC 5646](https://tools.ietf.org/html/rfc5646)
		 * Required
		 */
		languageDefault: string;

		/**
		 * &#128640; Since v4.15.0
		 * Determines whether S3 direct upload is enforced or not
		 * Required
		 */
		s3EnforceDirectUpload: boolean;

		/**
		 * &#128640; Since v4.14.0
		 * List of S3 Hosts for CSP header
		 * Required
		 */
		s3Hosts: Array<string>;

		/**
		 * &#128640; Since v4.21.0
		 * Defines if S3 is used as storage backend
		 * Required
		 */
		useS3Storage: boolean;
	}

	/** System information (default language and authentication methods) */
	export interface SystemInfoFormProperties {

		/**
		 * &#128679; Deprecated since v4.42.0
		 * Defines if login fields should be hidden
		 * Required
		 */
		hideLoginInputFields: FormControl<boolean | null | undefined>,

		/**
		 * System default language
		 * cf. [RFC 5646](https://tools.ietf.org/html/rfc5646)
		 * Required
		 */
		languageDefault: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.15.0
		 * Determines whether S3 direct upload is enforced or not
		 * Required
		 */
		s3EnforceDirectUpload: FormControl<boolean | null | undefined>,

		/**
		 * &#128640; Since v4.21.0
		 * Defines if S3 is used as storage backend
		 * Required
		 */
		useS3Storage: FormControl<boolean | null | undefined>,
	}
	export function CreateSystemInfoFormGroup() {
		return new FormGroup<SystemInfoFormProperties>({
			hideLoginInputFields: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			languageDefault: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			s3EnforceDirectUpload: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			useS3Storage: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for testing connection for Active Directory configuration */
	export interface TestActiveDirectoryConfigRequest {

		/**
		 * Search scope of Active Directory; only users below this node can log on.
		 * Required
		 */
		ldapUsersDomain: string;

		/**
		 * Distinguished Name (DN) of Active Directory administrative account
		 * Required
		 */
		serverAdminName: string;

		/**
		 * Password of Active Directory administrative account
		 * Required
		 */
		serverAdminPassword: string;

		/**
		 * IPv4 or IPv6 address or host name
		 * Required
		 */
		serverIp: string;

		/**
		 * Port
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		serverPort: number;

		/**
		 * SSL finger print of Active Directory server.
		 * Mandatory for LDAPS connections.
		 * Format: `Algorithm/Fingerprint`
		 */
		sslFingerPrint?: string | null;

		/** Determines whether LDAPS should be used instead of plain LDAP. */
		useLdaps?: boolean | null;
	}

	/** Request model for testing connection for Active Directory configuration */
	export interface TestActiveDirectoryConfigRequestFormProperties {

		/**
		 * Search scope of Active Directory; only users below this node can log on.
		 * Required
		 */
		ldapUsersDomain: FormControl<string | null | undefined>,

		/**
		 * Distinguished Name (DN) of Active Directory administrative account
		 * Required
		 */
		serverAdminName: FormControl<string | null | undefined>,

		/**
		 * Password of Active Directory administrative account
		 * Required
		 */
		serverAdminPassword: FormControl<string | null | undefined>,

		/**
		 * IPv4 or IPv6 address or host name
		 * Required
		 */
		serverIp: FormControl<string | null | undefined>,

		/**
		 * Port
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		serverPort: FormControl<number | null | undefined>,

		/**
		 * SSL finger print of Active Directory server.
		 * Mandatory for LDAPS connections.
		 * Format: `Algorithm/Fingerprint`
		 */
		sslFingerPrint: FormControl<string | null | undefined>,

		/** Determines whether LDAPS should be used instead of plain LDAP. */
		useLdaps: FormControl<boolean | null | undefined>,
	}
	export function CreateTestActiveDirectoryConfigRequestFormGroup() {
		return new FormGroup<TestActiveDirectoryConfigRequestFormProperties>({
			ldapUsersDomain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverAdminName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverAdminPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sslFingerPrint: new FormControl<string | null | undefined>(undefined),
			useLdaps: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response model for testing connection for Active Directory configuration */
	export interface TestActiveDirectoryConfigResponse {

		/**
		 * Search scope of Active Directory; only users below this node can log on.
		 * Required
		 */
		ldapUsersDomain: string;

		/**
		 * Distinguished Name (DN) of Active Directory administrative account
		 * Required
		 */
		serverAdminName: string;

		/**
		 * Password of Active Directory administrative account
		 * Required
		 */
		serverAdminPassword: string;

		/**
		 * IPv4 or IPv6 address or host name
		 * Required
		 */
		serverIp: string;

		/**
		 * Port
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		serverPort: number;

		/**
		 * SSL finger print of Active Directory server.
		 * Mandatory for LDAPS connections.
		 * Format: `Algorithm/Fingerprint`
		 */
		sslFingerPrint?: string | null;

		/**
		 * Determines whether LDAPS should be used instead of plain LDAP.
		 * Required
		 */
		useLdaps: boolean;
	}

	/** Response model for testing connection for Active Directory configuration */
	export interface TestActiveDirectoryConfigResponseFormProperties {

		/**
		 * Search scope of Active Directory; only users below this node can log on.
		 * Required
		 */
		ldapUsersDomain: FormControl<string | null | undefined>,

		/**
		 * Distinguished Name (DN) of Active Directory administrative account
		 * Required
		 */
		serverAdminName: FormControl<string | null | undefined>,

		/**
		 * Password of Active Directory administrative account
		 * Required
		 */
		serverAdminPassword: FormControl<string | null | undefined>,

		/**
		 * IPv4 or IPv6 address or host name
		 * Required
		 */
		serverIp: FormControl<string | null | undefined>,

		/**
		 * Port
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		serverPort: FormControl<number | null | undefined>,

		/**
		 * SSL finger print of Active Directory server.
		 * Mandatory for LDAPS connections.
		 * Format: `Algorithm/Fingerprint`
		 */
		sslFingerPrint: FormControl<string | null | undefined>,

		/**
		 * Determines whether LDAPS should be used instead of plain LDAP.
		 * Required
		 */
		useLdaps: FormControl<boolean | null | undefined>,
	}
	export function CreateTestActiveDirectoryConfigResponseFormGroup() {
		return new FormGroup<TestActiveDirectoryConfigResponseFormProperties>({
			ldapUsersDomain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverAdminName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverAdminPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverIp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sslFingerPrint: new FormControl<string | null | undefined>(undefined),
			useLdaps: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Third-party dependency information */
	export interface ThirdPartyDependenciesData {

		/**
		 * Third party dependencies artifactId
		 * Required
		 */
		artifactId: string;

		/**
		 * Third party dependencies description
		 * Required
		 */
		description: string;

		/**
		 * Third party dependencies groupId
		 * Required
		 */
		groupId: string;

		/**
		 * Third party dependencies id
		 * Required
		 */
		id: string;

		/**
		 * Third party dependencies licenses type
		 * Required
		 */
		licenses: Array<string>;

		/**
		 * Third party dependencies name
		 * Required
		 */
		name: string;

		/**
		 * Third party dependencies type
		 * Required
		 */
		type: string;

		/**
		 * Third party dependencies url
		 * Required
		 */
		url: string;

		/**
		 * Third party dependencies version
		 * Required
		 */
		version: string;
	}

	/** Third-party dependency information */
	export interface ThirdPartyDependenciesDataFormProperties {

		/**
		 * Third party dependencies artifactId
		 * Required
		 */
		artifactId: FormControl<string | null | undefined>,

		/**
		 * Third party dependencies description
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Third party dependencies groupId
		 * Required
		 */
		groupId: FormControl<string | null | undefined>,

		/**
		 * Third party dependencies id
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Third party dependencies name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Third party dependencies type
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * Third party dependencies url
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * Third party dependencies version
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateThirdPartyDependenciesDataFormGroup() {
		return new FormGroup<ThirdPartyDependenciesDataFormProperties>({
			artifactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains QR code URL and OTP URI for TOTP setup */
	export interface TotpSetupResponse {

		/**
		 * ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * URI containing secret key, issuer and account information
		 * Required
		 */
		otpUri: string;

		/**
		 * TOTP data URL (QR Code)
		 * Required
		 */
		qrCode: string;

		/**
		 * Secret key used for setup of TOTP authentication
		 * Required
		 */
		secret: string;
	}

	/** Contains QR code URL and OTP URI for TOTP setup */
	export interface TotpSetupResponseFormProperties {

		/**
		 * ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * URI containing secret key, issuer and account information
		 * Required
		 */
		otpUri: FormControl<string | null | undefined>,

		/**
		 * TOTP data URL (QR Code)
		 * Required
		 */
		qrCode: FormControl<string | null | undefined>,

		/**
		 * Secret key used for setup of TOTP authentication
		 * Required
		 */
		secret: FormControl<string | null | undefined>,
	}
	export function CreateTotpSetupResponseFormGroup() {
		return new FormGroup<TotpSetupResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			otpUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			qrCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for updating an Active Directory configuration */
	export interface UpdateActiveDirectoryConfigRequest {

		/**
		 * If `userImport` is set to `true`,
		 * the user must be member of this Active Directory group to receive a newly created DRACOON account.
		 */
		adExportGroup?: string | null;

		/** Unique name for an Active Directory configuration */
		alias?: string | null;

		/**
		 * DEPRECATED, will be ignored
		 * Determines whether a room is created for each user that is created by automatic import (like a home folder).
		 * Room's name will equal the user's login name.
		 */
		createHomeFolder?: boolean | null;

		/**
		 * DEPRECATED, will be ignored
		 * ID of the room in which the individual rooms for users will be created.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeFolderParent?: string | null;

		/** Search scope of Active Directory; only users below this node can log on. */
		ldapUsersDomain?: string | null;

		/**
		 * User group that is assigned to users who are created by automatic import.
		 * Reset with `0`
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sdsImportGroup?: string | null;

		/** Distinguished Name (DN) of Active Directory administrative account */
		serverAdminName?: string | null;

		/** Password of Active Directory administrative account */
		serverAdminPassword?: string | null;

		/** IPv4 or IPv6 address or host name */
		serverIp?: string | null;

		/**
		 * Port
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		serverPort?: number | null;

		/**
		 * SSL finger print of Active Directory server.
		 * Mandatory for LDAPS connections.
		 * Format: `Algorithm/Fingerprint`
		 */
		sslFingerPrint?: string | null;

		/** Determines whether LDAPS should be used instead of plain LDAP. */
		useLdaps?: boolean | null;

		/** Name of Active Directory attribute that is used as login name. */
		userFilter?: string | null;

		/**
		 * Determines if a DRACOON account is automatically created for a new user
		 * who successfully logs on with his / her AD / IDP account.
		 */
		userImport?: boolean | null;
	}

	/** Request model for updating an Active Directory configuration */
	export interface UpdateActiveDirectoryConfigRequestFormProperties {

		/**
		 * If `userImport` is set to `true`,
		 * the user must be member of this Active Directory group to receive a newly created DRACOON account.
		 */
		adExportGroup: FormControl<string | null | undefined>,

		/** Unique name for an Active Directory configuration */
		alias: FormControl<string | null | undefined>,

		/**
		 * DEPRECATED, will be ignored
		 * Determines whether a room is created for each user that is created by automatic import (like a home folder).
		 * Room's name will equal the user's login name.
		 */
		createHomeFolder: FormControl<boolean | null | undefined>,

		/**
		 * DEPRECATED, will be ignored
		 * ID of the room in which the individual rooms for users will be created.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeFolderParent: FormControl<string | null | undefined>,

		/** Search scope of Active Directory; only users below this node can log on. */
		ldapUsersDomain: FormControl<string | null | undefined>,

		/**
		 * User group that is assigned to users who are created by automatic import.
		 * Reset with `0`
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sdsImportGroup: FormControl<string | null | undefined>,

		/** Distinguished Name (DN) of Active Directory administrative account */
		serverAdminName: FormControl<string | null | undefined>,

		/** Password of Active Directory administrative account */
		serverAdminPassword: FormControl<string | null | undefined>,

		/** IPv4 or IPv6 address or host name */
		serverIp: FormControl<string | null | undefined>,

		/**
		 * Port
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		serverPort: FormControl<number | null | undefined>,

		/**
		 * SSL finger print of Active Directory server.
		 * Mandatory for LDAPS connections.
		 * Format: `Algorithm/Fingerprint`
		 */
		sslFingerPrint: FormControl<string | null | undefined>,

		/** Determines whether LDAPS should be used instead of plain LDAP. */
		useLdaps: FormControl<boolean | null | undefined>,

		/** Name of Active Directory attribute that is used as login name. */
		userFilter: FormControl<string | null | undefined>,

		/**
		 * Determines if a DRACOON account is automatically created for a new user
		 * who successfully logs on with his / her AD / IDP account.
		 */
		userImport: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateActiveDirectoryConfigRequestFormGroup() {
		return new FormGroup<UpdateActiveDirectoryConfigRequestFormProperties>({
			adExportGroup: new FormControl<string | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
			createHomeFolder: new FormControl<boolean | null | undefined>(undefined),
			homeFolderParent: new FormControl<string | null | undefined>(undefined),
			ldapUsersDomain: new FormControl<string | null | undefined>(undefined),
			sdsImportGroup: new FormControl<string | null | undefined>(undefined),
			serverAdminName: new FormControl<string | null | undefined>(undefined),
			serverAdminPassword: new FormControl<string | null | undefined>(undefined),
			serverIp: new FormControl<string | null | undefined>(undefined),
			serverPort: new FormControl<number | null | undefined>(undefined),
			sslFingerPrint: new FormControl<string | null | undefined>(undefined),
			useLdaps: new FormControl<boolean | null | undefined>(undefined),
			userFilter: new FormControl<string | null | undefined>(undefined),
			userImport: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request model for updating auth token settings */
	export interface UpdateAuthTokenRestrictions {

		/**
		 * &#128640; Since v4.13.0
		 * Restricted OAuth access token validity (in seconds)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accessTokenValidity?: number | null;

		/**
		 * &#128640; Since v4.13.0
		 * Defines if OAuth token restrictions are enabled
		 * Required
		 */
		overwriteEnabled: boolean;

		/**
		 * &#128640; Since v4.13.0
		 * Restricted OAuth refresh token validity (in seconds)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		refreshTokenValidity?: number | null;
	}

	/** Request model for updating auth token settings */
	export interface UpdateAuthTokenRestrictionsFormProperties {

		/**
		 * &#128640; Since v4.13.0
		 * Restricted OAuth access token validity (in seconds)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accessTokenValidity: FormControl<number | null | undefined>,

		/**
		 * &#128640; Since v4.13.0
		 * Defines if OAuth token restrictions are enabled
		 * Required
		 */
		overwriteEnabled: FormControl<boolean | null | undefined>,

		/**
		 * &#128640; Since v4.13.0
		 * Restricted OAuth refresh token validity (in seconds)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		refreshTokenValidity: FormControl<number | null | undefined>,
	}
	export function CreateUpdateAuthTokenRestrictionsFormGroup() {
		return new FormGroup<UpdateAuthTokenRestrictionsFormProperties>({
			accessTokenValidity: new FormControl<number | null | undefined>(undefined),
			overwriteEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			refreshTokenValidity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Set of classification policies */
	export interface UpdateClassificationPoliciesConfig {

		/** Shares classification policies */
		shareClassificationPolicies?: ShareClassificationPolicies;
	}

	/** Set of classification policies */
	export interface UpdateClassificationPoliciesConfigFormProperties {
	}
	export function CreateUpdateClassificationPoliciesConfigFormGroup() {
		return new FormGroup<UpdateClassificationPoliciesConfigFormProperties>({
		});

	}


	/** Request model for updating a customer */
	export interface UpdateCustomerRequest {

		/** Company name */
		companyName?: string | null;

		/**
		 * Customer type
		 * Required
		 */
		customerContractType: CustomerCustomerContractType;

		/**
		 * Customer is locked:
		 * * `false` - unlocked
		 * * `true` - locked
		 * All users of this customer will be blocked and can not login anymore.
		 */
		isLocked?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.7.0
		 * Customer lock status:
		 * * `false` - unlocked
		 * * `true` - locked
		 * Please use `isLocked` instead.
		 * All users of this customer will be blocked and can not login anymore.
		 */
		lockStatus?: boolean | null;

		/** Provider customer ID */
		providerCustomerId?: string | null;

		/**
		 * Maximal disc space which can be allocated by customer in bytes. -1 for unlimited
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quotaMax?: string | null;

		/**
		 * Maximal number of users
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userMax?: number | null;

		/**
		 * &#128640; Since v4.19.0
		 * Maximal number of webhooks
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		webhooksMax?: string | null;
	}

	/** Request model for updating a customer */
	export interface UpdateCustomerRequestFormProperties {

		/** Company name */
		companyName: FormControl<string | null | undefined>,

		/**
		 * Customer type
		 * Required
		 */
		customerContractType: FormControl<CustomerCustomerContractType | null | undefined>,

		/**
		 * Customer is locked:
		 * * `false` - unlocked
		 * * `true` - locked
		 * All users of this customer will be blocked and can not login anymore.
		 */
		isLocked: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.7.0
		 * Customer lock status:
		 * * `false` - unlocked
		 * * `true` - locked
		 * Please use `isLocked` instead.
		 * All users of this customer will be blocked and can not login anymore.
		 */
		lockStatus: FormControl<boolean | null | undefined>,

		/** Provider customer ID */
		providerCustomerId: FormControl<string | null | undefined>,

		/**
		 * Maximal disc space which can be allocated by customer in bytes. -1 for unlimited
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quotaMax: FormControl<string | null | undefined>,

		/**
		 * Maximal number of users
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userMax: FormControl<number | null | undefined>,

		/**
		 * &#128640; Since v4.19.0
		 * Maximal number of webhooks
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		webhooksMax: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCustomerRequestFormGroup() {
		return new FormGroup<UpdateCustomerRequestFormProperties>({
			companyName: new FormControl<string | null | undefined>(undefined),
			customerContractType: new FormControl<CustomerCustomerContractType | null | undefined>(undefined, [Validators.required]),
			isLocked: new FormControl<boolean | null | undefined>(undefined),
			lockStatus: new FormControl<boolean | null | undefined>(undefined),
			providerCustomerId: new FormControl<string | null | undefined>(undefined),
			quotaMax: new FormControl<string | null | undefined>(undefined),
			userMax: new FormControl<number | null | undefined>(undefined),
			webhooksMax: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Customer information */
	export interface UpdateCustomerResponse {

		/**
		 * &#128679; Deprecated since v4.8.0
		 * Customer activation code string:
		 * * valid only for types `free` and `demo`
		 * * for `pay` customers it is empty
		 */
		activationCode?: string | null;

		/**
		 * Company name
		 * Required
		 */
		companyName: string;

		/** Creation date */
		createdAt?: Date | null;

		/** List of customer attributes */
		customerAttributes?: CustomerAttributes;

		/**
		 * Customer type
		 * Required
		 */
		customerContractType: CustomerCustomerContractType;

		/**
		 * &#128640; Since v4.21.0
		 * Customer UUID
		 * Required
		 */
		customerUuid: string;

		/**
		 * Unique identifier for the customer
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Customer is locked:
		 * * `false` - unlocked
		 * * `true` - locked
		 * All users of this customer will be blocked and can not login anymore.
		 */
		isLocked?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.7.0
		 * Customer lock status:
		 * * `false` - unlocked
		 * * `true` - locked
		 * Please use `isLocked` instead.
		 * All users of this customer will be blocked and can not login anymore.
		 * Required
		 */
		lockStatus: boolean;

		/** Provider customer ID */
		providerCustomerId?: string | null;

		/**
		 * Maximal disc space which can be allocated by customer in bytes. -1 for unlimited
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quotaMax: string;

		/**
		 * Number of days left for trial period (relevant only for type `demo`)
		 * (not used)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		trialDays?: number | null;

		/** Modification date */
		updatedAt?: Date | null;

		/**
		 * Maximal number of users
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userMax: number;

		/**
		 * &#128640; Since v4.19.0
		 * Maximal number of webhooks
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		webhooksMax?: string | null;
	}

	/** Customer information */
	export interface UpdateCustomerResponseFormProperties {

		/**
		 * &#128679; Deprecated since v4.8.0
		 * Customer activation code string:
		 * * valid only for types `free` and `demo`
		 * * for `pay` customers it is empty
		 */
		activationCode: FormControl<string | null | undefined>,

		/**
		 * Company name
		 * Required
		 */
		companyName: FormControl<string | null | undefined>,

		/** Creation date */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Customer type
		 * Required
		 */
		customerContractType: FormControl<CustomerCustomerContractType | null | undefined>,

		/**
		 * &#128640; Since v4.21.0
		 * Customer UUID
		 * Required
		 */
		customerUuid: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the customer
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Customer is locked:
		 * * `false` - unlocked
		 * * `true` - locked
		 * All users of this customer will be blocked and can not login anymore.
		 */
		isLocked: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.7.0
		 * Customer lock status:
		 * * `false` - unlocked
		 * * `true` - locked
		 * Please use `isLocked` instead.
		 * All users of this customer will be blocked and can not login anymore.
		 * Required
		 */
		lockStatus: FormControl<boolean | null | undefined>,

		/** Provider customer ID */
		providerCustomerId: FormControl<string | null | undefined>,

		/**
		 * Maximal disc space which can be allocated by customer in bytes. -1 for unlimited
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quotaMax: FormControl<string | null | undefined>,

		/**
		 * Number of days left for trial period (relevant only for type `demo`)
		 * (not used)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		trialDays: FormControl<number | null | undefined>,

		/** Modification date */
		updatedAt: FormControl<Date | null | undefined>,

		/**
		 * Maximal number of users
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		userMax: FormControl<number | null | undefined>,

		/**
		 * &#128640; Since v4.19.0
		 * Maximal number of webhooks
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		webhooksMax: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCustomerResponseFormGroup() {
		return new FormGroup<UpdateCustomerResponseFormProperties>({
			activationCode: new FormControl<string | null | undefined>(undefined),
			companyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			customerContractType: new FormControl<CustomerCustomerContractType | null | undefined>(undefined, [Validators.required]),
			customerUuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isLocked: new FormControl<boolean | null | undefined>(undefined),
			lockStatus: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			providerCustomerId: new FormControl<string | null | undefined>(undefined),
			quotaMax: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trialDays: new FormControl<number | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			userMax: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			webhooksMax: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request model for updating a Download Share */
	export interface UpdateDownloadShareRequest {

		/** Country shorthand symbol (cf. ISO 3166-2) */
		defaultCountry?: string | null;

		/** Expiration information */
		expiration?: ObjectExpiration;

		/**
		 * &#128640; Since v4.11.0
		 * Internal notes
		 * Maximum: 255
		 */
		internalNotes?: string | null;

		/**
		 * Max allowed downloads
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDownloads?: number | null;

		/** Alias name */
		name?: string | null;

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes?: string | null;

		/**
		 * &#128679; Deprecated since v4.20.0
		 * Notify creator on every download.
		 */
		notifyCreator?: boolean | null;

		/** Access password, not allowed for encrypted shares */
		password?: string | null;

		/** Language tag for messages to receiver */
		receiverLanguage?: string | null;

		/** Set 'true' to reset 'maxDownloads' for Download Share. */
		resetMaxDownloads?: boolean | null;

		/** Set 'true' to reset 'password' for Download Share. */
		resetPassword?: boolean | null;

		/** Show creator first and last name. */
		showCreatorName?: boolean | null;

		/** Show creator email address. */
		showCreatorUsername?: boolean | null;

		/**
		 * List of recipient FQTNs
		 * E.123 / E.164 Format
		 */
		textMessageRecipients?: Array<string>;
	}

	/** Request model for updating a Download Share */
	export interface UpdateDownloadShareRequestFormProperties {

		/** Country shorthand symbol (cf. ISO 3166-2) */
		defaultCountry: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Internal notes
		 * Maximum: 255
		 */
		internalNotes: FormControl<string | null | undefined>,

		/**
		 * Max allowed downloads
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDownloads: FormControl<number | null | undefined>,

		/** Alias name */
		name: FormControl<string | null | undefined>,

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.20.0
		 * Notify creator on every download.
		 */
		notifyCreator: FormControl<boolean | null | undefined>,

		/** Access password, not allowed for encrypted shares */
		password: FormControl<string | null | undefined>,

		/** Language tag for messages to receiver */
		receiverLanguage: FormControl<string | null | undefined>,

		/** Set 'true' to reset 'maxDownloads' for Download Share. */
		resetMaxDownloads: FormControl<boolean | null | undefined>,

		/** Set 'true' to reset 'password' for Download Share. */
		resetPassword: FormControl<boolean | null | undefined>,

		/** Show creator first and last name. */
		showCreatorName: FormControl<boolean | null | undefined>,

		/** Show creator email address. */
		showCreatorUsername: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDownloadShareRequestFormGroup() {
		return new FormGroup<UpdateDownloadShareRequestFormProperties>({
			defaultCountry: new FormControl<string | null | undefined>(undefined),
			internalNotes: new FormControl<string | null | undefined>(undefined),
			maxDownloads: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			notifyCreator: new FormControl<boolean | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			receiverLanguage: new FormControl<string | null | undefined>(undefined),
			resetMaxDownloads: new FormControl<boolean | null | undefined>(undefined),
			resetPassword: new FormControl<boolean | null | undefined>(undefined),
			showCreatorName: new FormControl<boolean | null | undefined>(undefined),
			showCreatorUsername: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request model for updating a list of Download Shares */
	export interface UpdateDownloadSharesBulkRequest {

		/** Expiration information */
		expiration?: ObjectExpiration;

		/**
		 * Max allowed downloads
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDownloads?: number | null;

		/**
		 * List of ids
		 * Required
		 */
		objectIds: Array<number>;

		/** Set 'true' to reset 'maxDownloads' for Download Share. */
		resetMaxDownloads?: boolean | null;

		/** Show creator first and last name. */
		showCreatorName?: boolean | null;

		/** Show creator email address. */
		showCreatorUsername?: boolean | null;
	}

	/** Request model for updating a list of Download Shares */
	export interface UpdateDownloadSharesBulkRequestFormProperties {

		/**
		 * Max allowed downloads
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDownloads: FormControl<number | null | undefined>,

		/** Set 'true' to reset 'maxDownloads' for Download Share. */
		resetMaxDownloads: FormControl<boolean | null | undefined>,

		/** Show creator first and last name. */
		showCreatorName: FormControl<boolean | null | undefined>,

		/** Show creator email address. */
		showCreatorUsername: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDownloadSharesBulkRequestFormGroup() {
		return new FormGroup<UpdateDownloadSharesBulkRequestFormProperties>({
			maxDownloads: new FormControl<number | null | undefined>(undefined),
			resetMaxDownloads: new FormControl<boolean | null | undefined>(undefined),
			showCreatorName: new FormControl<boolean | null | undefined>(undefined),
			showCreatorUsername: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request model for updating encryption password policies */
	export interface UpdateEncryptionPasswordPolicies {

		/** Password character rules */
		characterRules?: CharacterRules;

		/**
		 * Minimum number of characters a password must contain
		 * Minimum: 1
		 * Maximum: 1024
		 */
		minLength?: number | null;

		/**
		 * Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
		 * (min. 4 character pattern)
		 */
		rejectKeyboardPatterns?: boolean | null;

		/** Determines whether a password must NOT contain user info (first name, last name, email, user name) */
		rejectUserInfo?: boolean | null;
	}

	/** Request model for updating encryption password policies */
	export interface UpdateEncryptionPasswordPoliciesFormProperties {

		/**
		 * Minimum number of characters a password must contain
		 * Minimum: 1
		 * Maximum: 1024
		 */
		minLength: FormControl<number | null | undefined>,

		/**
		 * Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
		 * (min. 4 character pattern)
		 */
		rejectKeyboardPatterns: FormControl<boolean | null | undefined>,

		/** Determines whether a password must NOT contain user info (first name, last name, email, user name) */
		rejectUserInfo: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateEncryptionPasswordPoliciesFormGroup() {
		return new FormGroup<UpdateEncryptionPasswordPoliciesFormProperties>({
			minLength: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1024)]),
			rejectKeyboardPatterns: new FormControl<boolean | null | undefined>(undefined),
			rejectUserInfo: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request model for updating eventlog settings */
	export interface UpdateEventlogConfig {

		/** Is eventlog enabled? */
		enabled?: boolean | null;

		/** Determines whether user’s IP address is logged. */
		logIpEnabled?: boolean | null;

		/**
		 * Retention period (in days) of event log entries.
		 * After that period, all entries are deleted.
		 * Recommended value: 7
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionPeriod?: number | null;
	}

	/** Request model for updating eventlog settings */
	export interface UpdateEventlogConfigFormProperties {

		/** Is eventlog enabled? */
		enabled: FormControl<boolean | null | undefined>,

		/** Determines whether user’s IP address is logged. */
		logIpEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Retention period (in days) of event log entries.
		 * After that period, all entries are deleted.
		 * Recommended value: 7
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionPeriod: FormControl<number | null | undefined>,
	}
	export function CreateUpdateEventlogConfigFormGroup() {
		return new FormGroup<UpdateEventlogConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			logIpEnabled: new FormControl<boolean | null | undefined>(undefined),
			retentionPeriod: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request model for updating favorites */
	export interface UpdateFavoritesBulkRequest {

		/**
		 * Sets the favorite attribute to true or false on each file in an array of nodes.
		 * Required
		 */
		isFavorite: boolean;

		/**
		 * List of ids
		 * Required
		 */
		objectIds: Array<number>;
	}

	/** Request model for updating favorites */
	export interface UpdateFavoritesBulkRequestFormProperties {

		/**
		 * Sets the favorite attribute to true or false on each file in an array of nodes.
		 * Required
		 */
		isFavorite: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateFavoritesBulkRequestFormGroup() {
		return new FormGroup<UpdateFavoritesBulkRequestFormProperties>({
			isFavorite: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for updating file's metadata */
	export interface UpdateFileRequest {

		/**
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		classification?: number | null;

		/** Expiration information */
		expiration?: ObjectExpiration;

		/** File name */
		name?: string | null;

		/**
		 * User notes
		 * Use empty string to remove.
		 */
		notes?: string | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampCreation?: Date | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampModification?: Date | null;
	}

	/** Request model for updating file's metadata */
	export interface UpdateFileRequestFormProperties {

		/**
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		classification: FormControl<number | null | undefined>,

		/** File name */
		name: FormControl<string | null | undefined>,

		/**
		 * User notes
		 * Use empty string to remove.
		 */
		notes: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampCreation: FormControl<Date | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampModification: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateFileRequestFormGroup() {
		return new FormGroup<UpdateFileRequestFormProperties>({
			classification: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			timestampCreation: new FormControl<Date | null | undefined>(undefined),
			timestampModification: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Request model for updating files */
	export interface UpdateFilesBulkRequest {

		/**
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		classification?: number | null;

		/** Expiration information */
		expiration?: ObjectExpiration;

		/**
		 * List of ids
		 * Required
		 */
		objectIds: Array<number>;
	}

	/** Request model for updating files */
	export interface UpdateFilesBulkRequestFormProperties {

		/**
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		classification: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFilesBulkRequestFormGroup() {
		return new FormGroup<UpdateFilesBulkRequestFormProperties>({
			classification: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request model for updating folder's metadata */
	export interface UpdateFolderRequest {

		/**
		 * &#128640; Since v4.30.0
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 * Provided (or default) classification is taken from room
		 * when file gets uploaded without any classification.
		 */
		classification?: UpdateFolderRequestClassification;

		/** Folder name */
		name?: string | null;

		/**
		 * User notes
		 * Use empty string to remove.
		 */
		notes?: string | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampCreation?: Date | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampModification?: Date | null;
	}

	/** Request model for updating folder's metadata */
	export interface UpdateFolderRequestFormProperties {

		/**
		 * &#128640; Since v4.30.0
		 * Classification ID:
		 * * `1` - public
		 * * `2` - internal
		 * * `3` - confidential
		 * * `4` - strictly confidential
		 * Provided (or default) classification is taken from room
		 * when file gets uploaded without any classification.
		 */
		classification: FormControl<UpdateFolderRequestClassification | null | undefined>,

		/** Folder name */
		name: FormControl<string | null | undefined>,

		/**
		 * User notes
		 * Use empty string to remove.
		 */
		notes: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampCreation: FormControl<Date | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 * (default: current server datetime in UTC format)
		 */
		timestampModification: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateFolderRequestFormGroup() {
		return new FormGroup<UpdateFolderRequestFormProperties>({
			classification: new FormControl<UpdateFolderRequestClassification | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			timestampCreation: new FormControl<Date | null | undefined>(undefined),
			timestampModification: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum UpdateFolderRequestClassification { _1 = 0, _2 = 1, _3 = 2, _4 = 3 }


	/** Request model for updating general settings */
	export interface UpdateGeneralSettings {

		/** Request model for updating auth token settings */
		authTokenRestrictions?: UpdateAuthTokenRestrictions;

		/**
		 * Activation status of client-side encryption.
		 * Can only be enabled once; disabling is not possible.
		 */
		cryptoEnabled?: boolean | null;

		/** Enable email notification button */
		emailNotificationButtonEnabled?: boolean | null;

		/** Each user has to confirm the EULA at first login. */
		eulaEnabled?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * Defines if login fields should be hidden
		 */
		hideLoginInputFields?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Determines if the media server is enabled
		 */
		mediaServerEnabled?: boolean | null;

		/**
		 * &#128640; Since v4.9.0
		 * Defines if S3 tags are enabled
		 */
		s3TagsEnabled?: boolean | null;

		/** Allow sending of share passwords via SMS */
		sharePasswordSmsEnabled?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.14.0
		 * Allow weak password
		 * * A weak password has to fulfill the following criteria:
		 * * is at least 8 characters long
		 * * contains letters and numbers
		 * * A strong password has to fulfill the following criteria in addition:
		 * * contains at least one special character
		 * * contains upper and lower case characters
		 * Please use `PUT /system/config/policies/passwords` API to change configured password policies.
		 */
		weakPasswordEnabled?: boolean | null;
	}

	/** Request model for updating general settings */
	export interface UpdateGeneralSettingsFormProperties {

		/**
		 * Activation status of client-side encryption.
		 * Can only be enabled once; disabling is not possible.
		 */
		cryptoEnabled: FormControl<boolean | null | undefined>,

		/** Enable email notification button */
		emailNotificationButtonEnabled: FormControl<boolean | null | undefined>,

		/** Each user has to confirm the EULA at first login. */
		eulaEnabled: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.13.0
		 * Defines if login fields should be hidden
		 */
		hideLoginInputFields: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Determines if the media server is enabled
		 */
		mediaServerEnabled: FormControl<boolean | null | undefined>,

		/**
		 * &#128640; Since v4.9.0
		 * Defines if S3 tags are enabled
		 */
		s3TagsEnabled: FormControl<boolean | null | undefined>,

		/** Allow sending of share passwords via SMS */
		sharePasswordSmsEnabled: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.14.0
		 * Allow weak password
		 * * A weak password has to fulfill the following criteria:
		 * * is at least 8 characters long
		 * * contains letters and numbers
		 * * A strong password has to fulfill the following criteria in addition:
		 * * contains at least one special character
		 * * contains upper and lower case characters
		 * Please use `PUT /system/config/policies/passwords` API to change configured password policies.
		 */
		weakPasswordEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateGeneralSettingsFormGroup() {
		return new FormGroup<UpdateGeneralSettingsFormProperties>({
			cryptoEnabled: new FormControl<boolean | null | undefined>(undefined),
			emailNotificationButtonEnabled: new FormControl<boolean | null | undefined>(undefined),
			eulaEnabled: new FormControl<boolean | null | undefined>(undefined),
			hideLoginInputFields: new FormControl<boolean | null | undefined>(undefined),
			mediaServerEnabled: new FormControl<boolean | null | undefined>(undefined),
			s3TagsEnabled: new FormControl<boolean | null | undefined>(undefined),
			sharePasswordSmsEnabled: new FormControl<boolean | null | undefined>(undefined),
			weakPasswordEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request model for updating group's metadata */
	export interface UpdateGroupRequest {

		/** Expiration information */
		expiration?: ObjectExpiration;

		/** Group name */
		name?: string | null;
	}

	/** Request model for updating group's metadata */
	export interface UpdateGroupRequestFormProperties {

		/** Group name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupRequestFormGroup() {
		return new FormGroup<UpdateGroupRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Set of guest user policies */
	export interface UpdateGuestUsersPoliciesConfig {

		/**
		 * Determines whether the invite of users to rooms is enabled.
		 * Required
		 */
		isInviteUsersEnabled: boolean;
	}

	/** Set of guest user policies */
	export interface UpdateGuestUsersPoliciesConfigFormProperties {

		/**
		 * Determines whether the invite of users to rooms is enabled.
		 * Required
		 */
		isInviteUsersEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateGuestUsersPoliciesConfigFormGroup() {
		return new FormGroup<UpdateGuestUsersPoliciesConfigFormProperties>({
			isInviteUsersEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for updating login password policies */
	export interface UpdateLoginPasswordPolicies {

		/** Password character rules */
		characterRules?: CharacterRules;

		/**
		 * &#128679; Deprecated since v4.24.0
		 * Determines whether a login password change should be enforced for all users
		 * Only takes effect, if login password policies get stricter
		 */
		enforceLoginPasswordChange?: boolean | null;

		/**
		 * Minimum number of characters a password must contain
		 * Minimum: 1
		 * Maximum: 1024
		 */
		minLength?: number | null;

		/**
		 * Number of passwords to archive
		 * (must be between `0` and `10`; `0` means that password history is disabled)
		 * Minimum: 1
		 * Maximum: 10
		 */
		numberOfArchivedPasswords?: number | null;

		/** Password expiration information */
		passwordExpiration?: PasswordExpiration;

		/** Determines whether a password must NOT contain word(s) from a dictionary */
		rejectDictionaryWords?: boolean | null;

		/**
		 * Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
		 * (min. 4 character pattern)
		 */
		rejectKeyboardPatterns?: boolean | null;

		/** Determines whether a password must NOT contain user info (first name, last name, email, user name) */
		rejectUserInfo?: boolean | null;

		/** User lockout information */
		userLockout?: UserLockout;
	}

	/** Request model for updating login password policies */
	export interface UpdateLoginPasswordPoliciesFormProperties {

		/**
		 * &#128679; Deprecated since v4.24.0
		 * Determines whether a login password change should be enforced for all users
		 * Only takes effect, if login password policies get stricter
		 */
		enforceLoginPasswordChange: FormControl<boolean | null | undefined>,

		/**
		 * Minimum number of characters a password must contain
		 * Minimum: 1
		 * Maximum: 1024
		 */
		minLength: FormControl<number | null | undefined>,

		/**
		 * Number of passwords to archive
		 * (must be between `0` and `10`; `0` means that password history is disabled)
		 * Minimum: 1
		 * Maximum: 10
		 */
		numberOfArchivedPasswords: FormControl<number | null | undefined>,

		/** Determines whether a password must NOT contain word(s) from a dictionary */
		rejectDictionaryWords: FormControl<boolean | null | undefined>,

		/**
		 * Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
		 * (min. 4 character pattern)
		 */
		rejectKeyboardPatterns: FormControl<boolean | null | undefined>,

		/** Determines whether a password must NOT contain user info (first name, last name, email, user name) */
		rejectUserInfo: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateLoginPasswordPoliciesFormGroup() {
		return new FormGroup<UpdateLoginPasswordPoliciesFormProperties>({
			enforceLoginPasswordChange: new FormControl<boolean | null | undefined>(undefined),
			minLength: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1024)]),
			numberOfArchivedPasswords: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			rejectDictionaryWords: new FormControl<boolean | null | undefined>(undefined),
			rejectKeyboardPatterns: new FormControl<boolean | null | undefined>(undefined),
			rejectUserInfo: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Set of multi-factor authentication policies */
	export interface UpdateMfaPoliciesConfig {

		/**
		 * Determines whether multi-factor authentication is enforced
		 * Required
		 */
		isMfaEnforced: boolean;
	}

	/** Set of multi-factor authentication policies */
	export interface UpdateMfaPoliciesConfigFormProperties {

		/**
		 * Determines whether multi-factor authentication is enforced
		 * Required
		 */
		isMfaEnforced: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateMfaPoliciesConfigFormGroup() {
		return new FormGroup<UpdateMfaPoliciesConfigFormProperties>({
			isMfaEnforced: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for updating an OAuth client */
	export interface UpdateOAuthClientRequest {

		/**
		 * Validity of the access token in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accessTokenValidity?: number | null;

		/**
		 * &#128640; Since v4.22.0
		 * Validity of the approval interval in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		approvalValidity?: number | null;

		/** Name, which is shown at the client configuration and authorization. */
		clientName?: string | null;

		/** Secret, which client uses at authentication. */
		clientSecret?: string | null;

		/** Determines whether client is a confidential or public client. */
		clientType?: CreateOAuthClientRequestClientType | null;

		/**
		 * Authorized grant types
		 * * `authorization_code`
		 * * `implicit`
		 * * `password`
		 * * `client_credentials`
		 * * `refresh_token`
		 * cf. [RFC 6749](https://tools.ietf.org/html/rfc6749)
		 * Required
		 */
		grantTypes: Array<string>;

		/** Determines whether client is enabled. */
		isEnabled?: boolean | null;

		/** URIs, to which a user is redirected after authorization. */
		redirectUris?: Array<string>;

		/**
		 * Validity of the refresh token in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		refreshTokenValidity?: number | null;
	}

	/** Request model for updating an OAuth client */
	export interface UpdateOAuthClientRequestFormProperties {

		/**
		 * Validity of the access token in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accessTokenValidity: FormControl<number | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Validity of the approval interval in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		approvalValidity: FormControl<number | null | undefined>,

		/** Name, which is shown at the client configuration and authorization. */
		clientName: FormControl<string | null | undefined>,

		/** Secret, which client uses at authentication. */
		clientSecret: FormControl<string | null | undefined>,

		/** Determines whether client is a confidential or public client. */
		clientType: FormControl<CreateOAuthClientRequestClientType | null | undefined>,

		/** Determines whether client is enabled. */
		isEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Validity of the refresh token in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		refreshTokenValidity: FormControl<number | null | undefined>,
	}
	export function CreateUpdateOAuthClientRequestFormGroup() {
		return new FormGroup<UpdateOAuthClientRequestFormProperties>({
			accessTokenValidity: new FormControl<number | null | undefined>(undefined),
			approvalValidity: new FormControl<number | null | undefined>(undefined),
			clientName: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			clientType: new FormControl<CreateOAuthClientRequestClientType | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined),
			refreshTokenValidity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request model for updating an OpenID Connect IDP configuration */
	export interface UpdateOpenIdIdpConfigRequest {

		/** URL of the authorization endpoint */
		authorizationEndPointUrl?: string | null;

		/** ID of the OpenID client */
		clientId?: string | null;

		/** Secret, which client uses at authentication. */
		clientSecret?: string | null;

		/** Name of the claim which is used for the user mapping fallback. */
		fallbackMappingClaim?: string | null;

		/**
		 * &#128640; Since v4.11.0
		 * Flow, which is used at authentication
		 */
		flow?: CreateOpenIdIdpConfigRequestFlow | null;

		/**
		 * Issuer identifier of the IDP
		 * The value is a case sensitive URL.
		 */
		issuer?: string | null;

		/** URL of the JWKS endpoint */
		jwksEndPointUrl?: string | null;

		/** Name of the claim which is used for the user mapping. */
		mappingClaim?: string | null;

		/** Name of the IDP */
		name?: string | null;

		/**
		 * PKCE code challenge method.
		 * cf. [RFC 7636](https://tools.ietf.org/html/rfc7636)
		 */
		pkceChallengeMethod?: string | null;

		/**
		 * Determines whether PKCE is enabled.
		 * cf. [RFC 7636](https://tools.ietf.org/html/rfc7636)
		 */
		pkceEnabled?: boolean | null;

		/** URIs, to which a user is redirected after authorization. */
		redirectUris?: Array<string>;

		/** Set `true` to reset `fallbackMappingClaim`. */
		resetFallbackMappingClaim?: boolean | null;

		/**
		 * List of requested scopes
		 * Usually `openid` and the names of the requested claims.
		 */
		scopes?: Array<string>;

		/** URL of the token endpoint */
		tokenEndPointUrl?: string | null;

		/**
		 * Determines if a DRACOON account is automatically created for a new user
		 * who successfully logs on with his / her AD / IDP account.
		 */
		userImportEnabled?: boolean | null;

		/**
		 * User group that is assigned to users who are created by automatic import.
		 * Reset with `0`
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userImportGroup?: string | null;

		/** URL of the user info endpoint */
		userInfoEndPointUrl?: string | null;

		/**
		 * &#128640; Since v4.23.0
		 * Source, which is used to get user information at the import or update of a user.
		 */
		userInfoSource?: CreateOpenIdIdpConfigRequestUserInfoSource | null;

		/**
		 * URL of the user management UI.
		 * Use empty string to remove.
		 */
		userManagementUrl?: string | null;

		/**
		 * Determines if the DRACOON account is updated with data from AD / IDP.
		 * For OpenID Connect, the scopes `email` and `profile` are needed.
		 */
		userUpdateEnabled?: boolean | null;
	}

	/** Request model for updating an OpenID Connect IDP configuration */
	export interface UpdateOpenIdIdpConfigRequestFormProperties {

		/** URL of the authorization endpoint */
		authorizationEndPointUrl: FormControl<string | null | undefined>,

		/** ID of the OpenID client */
		clientId: FormControl<string | null | undefined>,

		/** Secret, which client uses at authentication. */
		clientSecret: FormControl<string | null | undefined>,

		/** Name of the claim which is used for the user mapping fallback. */
		fallbackMappingClaim: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Flow, which is used at authentication
		 */
		flow: FormControl<CreateOpenIdIdpConfigRequestFlow | null | undefined>,

		/**
		 * Issuer identifier of the IDP
		 * The value is a case sensitive URL.
		 */
		issuer: FormControl<string | null | undefined>,

		/** URL of the JWKS endpoint */
		jwksEndPointUrl: FormControl<string | null | undefined>,

		/** Name of the claim which is used for the user mapping. */
		mappingClaim: FormControl<string | null | undefined>,

		/** Name of the IDP */
		name: FormControl<string | null | undefined>,

		/**
		 * PKCE code challenge method.
		 * cf. [RFC 7636](https://tools.ietf.org/html/rfc7636)
		 */
		pkceChallengeMethod: FormControl<string | null | undefined>,

		/**
		 * Determines whether PKCE is enabled.
		 * cf. [RFC 7636](https://tools.ietf.org/html/rfc7636)
		 */
		pkceEnabled: FormControl<boolean | null | undefined>,

		/** Set `true` to reset `fallbackMappingClaim`. */
		resetFallbackMappingClaim: FormControl<boolean | null | undefined>,

		/** URL of the token endpoint */
		tokenEndPointUrl: FormControl<string | null | undefined>,

		/**
		 * Determines if a DRACOON account is automatically created for a new user
		 * who successfully logs on with his / her AD / IDP account.
		 */
		userImportEnabled: FormControl<boolean | null | undefined>,

		/**
		 * User group that is assigned to users who are created by automatic import.
		 * Reset with `0`
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userImportGroup: FormControl<string | null | undefined>,

		/** URL of the user info endpoint */
		userInfoEndPointUrl: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.23.0
		 * Source, which is used to get user information at the import or update of a user.
		 */
		userInfoSource: FormControl<CreateOpenIdIdpConfigRequestUserInfoSource | null | undefined>,

		/**
		 * URL of the user management UI.
		 * Use empty string to remove.
		 */
		userManagementUrl: FormControl<string | null | undefined>,

		/**
		 * Determines if the DRACOON account is updated with data from AD / IDP.
		 * For OpenID Connect, the scopes `email` and `profile` are needed.
		 */
		userUpdateEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateOpenIdIdpConfigRequestFormGroup() {
		return new FormGroup<UpdateOpenIdIdpConfigRequestFormProperties>({
			authorizationEndPointUrl: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			fallbackMappingClaim: new FormControl<string | null | undefined>(undefined),
			flow: new FormControl<CreateOpenIdIdpConfigRequestFlow | null | undefined>(undefined),
			issuer: new FormControl<string | null | undefined>(undefined),
			jwksEndPointUrl: new FormControl<string | null | undefined>(undefined),
			mappingClaim: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pkceChallengeMethod: new FormControl<string | null | undefined>(undefined),
			pkceEnabled: new FormControl<boolean | null | undefined>(undefined),
			resetFallbackMappingClaim: new FormControl<boolean | null | undefined>(undefined),
			tokenEndPointUrl: new FormControl<string | null | undefined>(undefined),
			userImportEnabled: new FormControl<boolean | null | undefined>(undefined),
			userImportGroup: new FormControl<string | null | undefined>(undefined),
			userInfoEndPointUrl: new FormControl<string | null | undefined>(undefined),
			userInfoSource: new FormControl<CreateOpenIdIdpConfigRequestUserInfoSource | null | undefined>(undefined),
			userManagementUrl: new FormControl<string | null | undefined>(undefined),
			userUpdateEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request model for updating a set of password policies */
	export interface UpdatePasswordPoliciesConfig {

		/** Request model for updating encryption password policies */
		encryptionPasswordPolicies?: UpdateEncryptionPasswordPolicies;

		/** Request model for updating login password policies */
		loginPasswordPolicies?: UpdateLoginPasswordPolicies;

		/** Request model for updating shares password policies */
		sharesPasswordPolicies?: UpdateSharesPasswordPolicies;
	}

	/** Request model for updating a set of password policies */
	export interface UpdatePasswordPoliciesConfigFormProperties {
	}
	export function CreateUpdatePasswordPoliciesConfigFormGroup() {
		return new FormGroup<UpdatePasswordPoliciesConfigFormProperties>({
		});

	}


	/** Request model for updating shares password policies */
	export interface UpdateSharesPasswordPolicies {

		/** Password character rules */
		characterRules?: CharacterRules;

		/**
		 * Minimum number of characters a password must contain
		 * Minimum: 1
		 * Maximum: 1024
		 */
		minLength?: number | null;

		/** Determines whether a password must NOT contain word(s) from a dictionary */
		rejectDictionaryWords?: boolean | null;

		/**
		 * Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
		 * (min. 4 character pattern)
		 */
		rejectKeyboardPatterns?: boolean | null;

		/** Determines whether a password must NOT contain user info (first name, last name, email, user name) */
		rejectUserInfo?: boolean | null;
	}

	/** Request model for updating shares password policies */
	export interface UpdateSharesPasswordPoliciesFormProperties {

		/**
		 * Minimum number of characters a password must contain
		 * Minimum: 1
		 * Maximum: 1024
		 */
		minLength: FormControl<number | null | undefined>,

		/** Determines whether a password must NOT contain word(s) from a dictionary */
		rejectDictionaryWords: FormControl<boolean | null | undefined>,

		/**
		 * Determines whether a password must NOT contain keyboard patterns (e.g. `qwertz`, `asdf`)
		 * (min. 4 character pattern)
		 */
		rejectKeyboardPatterns: FormControl<boolean | null | undefined>,

		/** Determines whether a password must NOT contain user info (first name, last name, email, user name) */
		rejectUserInfo: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSharesPasswordPoliciesFormGroup() {
		return new FormGroup<UpdateSharesPasswordPoliciesFormProperties>({
			minLength: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1024)]),
			rejectDictionaryWords: new FormControl<boolean | null | undefined>(undefined),
			rejectKeyboardPatterns: new FormControl<boolean | null | undefined>(undefined),
			rejectUserInfo: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request model for updating room's metadata */
	export interface UpdateRoomRequest {

		/** Name */
		name?: string | null;

		/**
		 * User notes
		 * Use empty string to remove.
		 */
		notes?: string | null;

		/**
		 * Quota in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quota?: string | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 */
		timestampCreation?: Date | null;

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 */
		timestampModification?: Date | null;
	}

	/** Request model for updating room's metadata */
	export interface UpdateRoomRequestFormProperties {

		/** Name */
		name: FormControl<string | null | undefined>,

		/**
		 * User notes
		 * Use empty string to remove.
		 */
		notes: FormControl<string | null | undefined>,

		/**
		 * Quota in byte
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		quota: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the node was created on external file system
		 */
		timestampCreation: FormControl<Date | null | undefined>,

		/**
		 * &#128640; Since v4.22.0
		 * Time the content of a node was last modified on external file system
		 */
		timestampModification: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateRoomRequestFormGroup() {
		return new FormGroup<UpdateRoomRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			quota: new FormControl<string | null | undefined>(undefined),
			timestampCreation: new FormControl<Date | null | undefined>(undefined),
			timestampModification: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Request model for handling webhook assignments */
	export interface UpdateRoomWebhookRequest {

		/**
		 * Assign a webhook to a room to use it for node actions within the room
		 * Required
		 */
		items: Array<RoomWebhookAssignment>;
	}

	/** Request model for handling webhook assignments */
	export interface UpdateRoomWebhookRequestFormProperties {
	}
	export function CreateUpdateRoomWebhookRequestFormGroup() {
		return new FormGroup<UpdateRoomWebhookRequestFormProperties>({
		});

	}


	/** Request model for updating subscriptions */
	export interface UpdateSubscriptionsBulkRequest {

		/**
		 * Creates or deletes a subscription on each item in an array of objects.
		 * Required
		 */
		isSubscribed: boolean;

		/**
		 * List of ids
		 * Required
		 */
		objectIds: Array<number>;
	}

	/** Request model for updating subscriptions */
	export interface UpdateSubscriptionsBulkRequestFormProperties {

		/**
		 * Creates or deletes a subscription on each item in an array of objects.
		 * Required
		 */
		isSubscribed: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSubscriptionsBulkRequestFormGroup() {
		return new FormGroup<UpdateSubscriptionsBulkRequestFormProperties>({
			isSubscribed: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request model for updating syslog settings */
	export interface UpdateSyslogConfig {

		/** Is syslog enabled? */
		enabled?: boolean | null;

		/** Syslog server (IP or FQDN) */
		host?: string | null;

		/** Determines whether user’s IP address is logged. */
		logIpEnabled?: boolean | null;

		/**
		 * Syslog server port
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port?: number | null;

		/** Protocol to connect to syslog server */
		protocol?: SyslogConfigProtocol | null;
	}

	/** Request model for updating syslog settings */
	export interface UpdateSyslogConfigFormProperties {

		/** Is syslog enabled? */
		enabled: FormControl<boolean | null | undefined>,

		/** Syslog server (IP or FQDN) */
		host: FormControl<string | null | undefined>,

		/** Determines whether user’s IP address is logged. */
		logIpEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Syslog server port
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: FormControl<number | null | undefined>,

		/** Protocol to connect to syslog server */
		protocol: FormControl<SyslogConfigProtocol | null | undefined>,
	}
	export function CreateUpdateSyslogConfigFormGroup() {
		return new FormGroup<UpdateSyslogConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			logIpEnabled: new FormControl<boolean | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<SyslogConfigProtocol | null | undefined>(undefined),
		});

	}


	/** Request model for updating system defaults */
	export interface UpdateSystemDefaults {

		/**
		 * Default expiration period for Download Shares in days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		downloadShareDefaultExpirationPeriod?: number | null;

		/**
		 * Default expiration period for all uploaded files in days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fileDefaultExpirationPeriod?: number | null;

		/** Define which language should be default. */
		languageDefault?: string | null;

		/**
		 * &#128640; Since v4.12.0
		 * Defines if new users get the role Non Member Viewer by default
		 */
		nonmemberViewerDefault?: boolean | null;

		/**
		 * Default expiration period for Upload Shares in days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		uploadShareDefaultExpirationPeriod?: number | null;
	}

	/** Request model for updating system defaults */
	export interface UpdateSystemDefaultsFormProperties {

		/**
		 * Default expiration period for Download Shares in days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		downloadShareDefaultExpirationPeriod: FormControl<number | null | undefined>,

		/**
		 * Default expiration period for all uploaded files in days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fileDefaultExpirationPeriod: FormControl<number | null | undefined>,

		/** Define which language should be default. */
		languageDefault: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.12.0
		 * Defines if new users get the role Non Member Viewer by default
		 */
		nonmemberViewerDefault: FormControl<boolean | null | undefined>,

		/**
		 * Default expiration period for Upload Shares in days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		uploadShareDefaultExpirationPeriod: FormControl<number | null | undefined>,
	}
	export function CreateUpdateSystemDefaultsFormGroup() {
		return new FormGroup<UpdateSystemDefaultsFormProperties>({
			downloadShareDefaultExpirationPeriod: new FormControl<number | null | undefined>(undefined),
			fileDefaultExpirationPeriod: new FormControl<number | null | undefined>(undefined),
			languageDefault: new FormControl<string | null | undefined>(undefined),
			nonmemberViewerDefault: new FormControl<boolean | null | undefined>(undefined),
			uploadShareDefaultExpirationPeriod: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request model for updating an Upload Share */
	export interface UpdateUploadShareRequest {

		/** Country shorthand symbol (cf. ISO 3166-2) */
		defaultCountry?: string | null;

		/** Expiration information */
		expiration?: ObjectExpiration;

		/**
		 * Number of days after which uploaded files expire
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		filesExpiryPeriod?: number | null;

		/**
		 * &#128640; Since v4.11.0
		 * Internal notes
		 * Maximum: 255
		 */
		internalNotes?: string | null;

		/**
		 * Maximal total size of uploaded files (in bytes)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxSize?: string | null;

		/**
		 * Maximal amount of files to upload
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxSlots?: number | null;

		/** Alias name */
		name?: string | null;

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes?: string | null;

		/**
		 * &#128679; Deprecated since v4.20.0
		 * Notify creator on every upload.
		 */
		notifyCreator?: boolean | null;

		/** Password */
		password?: string | null;

		/** Language tag for messages to receiver */
		receiverLanguage?: string | null;

		/** Set 'true' to reset 'filesExpiryPeriod' for Upload Share */
		resetFilesExpiryPeriod?: boolean | null;

		/** Set 'true' to reset 'maxSize' for Upload Share */
		resetMaxSize?: boolean | null;

		/** Set 'true' to reset 'maxSlots' for Upload Share */
		resetMaxSlots?: boolean | null;

		/** Set 'true' to reset 'password' for Upload Share. */
		resetPassword?: boolean | null;

		/** Show creator first and last name. */
		showCreatorName?: boolean | null;

		/** Show creator email address. */
		showCreatorUsername?: boolean | null;

		/** Allow display of already uploaded files */
		showUploadedFiles?: boolean | null;

		/**
		 * List of recipient FQTNs
		 * E.123 / E.164 Format
		 */
		textMessageRecipients?: Array<string>;
	}

	/** Request model for updating an Upload Share */
	export interface UpdateUploadShareRequestFormProperties {

		/** Country shorthand symbol (cf. ISO 3166-2) */
		defaultCountry: FormControl<string | null | undefined>,

		/**
		 * Number of days after which uploaded files expire
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		filesExpiryPeriod: FormControl<number | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Internal notes
		 * Maximum: 255
		 */
		internalNotes: FormControl<string | null | undefined>,

		/**
		 * Maximal total size of uploaded files (in bytes)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxSize: FormControl<string | null | undefined>,

		/**
		 * Maximal amount of files to upload
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxSlots: FormControl<number | null | undefined>,

		/** Alias name */
		name: FormControl<string | null | undefined>,

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.20.0
		 * Notify creator on every upload.
		 */
		notifyCreator: FormControl<boolean | null | undefined>,

		/** Password */
		password: FormControl<string | null | undefined>,

		/** Language tag for messages to receiver */
		receiverLanguage: FormControl<string | null | undefined>,

		/** Set 'true' to reset 'filesExpiryPeriod' for Upload Share */
		resetFilesExpiryPeriod: FormControl<boolean | null | undefined>,

		/** Set 'true' to reset 'maxSize' for Upload Share */
		resetMaxSize: FormControl<boolean | null | undefined>,

		/** Set 'true' to reset 'maxSlots' for Upload Share */
		resetMaxSlots: FormControl<boolean | null | undefined>,

		/** Set 'true' to reset 'password' for Upload Share. */
		resetPassword: FormControl<boolean | null | undefined>,

		/** Show creator first and last name. */
		showCreatorName: FormControl<boolean | null | undefined>,

		/** Show creator email address. */
		showCreatorUsername: FormControl<boolean | null | undefined>,

		/** Allow display of already uploaded files */
		showUploadedFiles: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateUploadShareRequestFormGroup() {
		return new FormGroup<UpdateUploadShareRequestFormProperties>({
			defaultCountry: new FormControl<string | null | undefined>(undefined),
			filesExpiryPeriod: new FormControl<number | null | undefined>(undefined),
			internalNotes: new FormControl<string | null | undefined>(undefined),
			maxSize: new FormControl<string | null | undefined>(undefined),
			maxSlots: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			notifyCreator: new FormControl<boolean | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			receiverLanguage: new FormControl<string | null | undefined>(undefined),
			resetFilesExpiryPeriod: new FormControl<boolean | null | undefined>(undefined),
			resetMaxSize: new FormControl<boolean | null | undefined>(undefined),
			resetMaxSlots: new FormControl<boolean | null | undefined>(undefined),
			resetPassword: new FormControl<boolean | null | undefined>(undefined),
			showCreatorName: new FormControl<boolean | null | undefined>(undefined),
			showCreatorUsername: new FormControl<boolean | null | undefined>(undefined),
			showUploadedFiles: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request model for updating a list of Download Shares */
	export interface UpdateUploadSharesBulkRequest {

		/** Expiration information */
		expiration?: ObjectExpiration;

		/**
		 * Number of days after which uploaded files expire
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		filesExpiryPeriod?: number | null;

		/**
		 * Maximal total size of uploaded files (in bytes)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxSize?: string | null;

		/**
		 * Maximal amount of files to upload
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxSlots?: number | null;

		/**
		 * List of ids
		 * Required
		 */
		objectIds: Array<number>;

		/** Set 'true' to reset 'filesExpiryPeriod' for Upload Share */
		resetFilesExpiryPeriod?: boolean | null;

		/** Set 'true' to reset 'maxSize' for Upload Share */
		resetMaxSize?: boolean | null;

		/** Set 'true' to reset 'maxSlots' for Upload Share */
		resetMaxSlots?: boolean | null;

		/** Show creator first and last name. */
		showCreatorName?: boolean | null;

		/** Show creator email address. */
		showCreatorUsername?: boolean | null;

		/** Allow display of already uploaded files */
		showUploadedFiles?: boolean | null;
	}

	/** Request model for updating a list of Download Shares */
	export interface UpdateUploadSharesBulkRequestFormProperties {

		/**
		 * Number of days after which uploaded files expire
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		filesExpiryPeriod: FormControl<number | null | undefined>,

		/**
		 * Maximal total size of uploaded files (in bytes)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxSize: FormControl<string | null | undefined>,

		/**
		 * Maximal amount of files to upload
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxSlots: FormControl<number | null | undefined>,

		/** Set 'true' to reset 'filesExpiryPeriod' for Upload Share */
		resetFilesExpiryPeriod: FormControl<boolean | null | undefined>,

		/** Set 'true' to reset 'maxSize' for Upload Share */
		resetMaxSize: FormControl<boolean | null | undefined>,

		/** Set 'true' to reset 'maxSlots' for Upload Share */
		resetMaxSlots: FormControl<boolean | null | undefined>,

		/** Show creator first and last name. */
		showCreatorName: FormControl<boolean | null | undefined>,

		/** Show creator email address. */
		showCreatorUsername: FormControl<boolean | null | undefined>,

		/** Allow display of already uploaded files */
		showUploadedFiles: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateUploadSharesBulkRequestFormGroup() {
		return new FormGroup<UpdateUploadSharesBulkRequestFormProperties>({
			filesExpiryPeriod: new FormControl<number | null | undefined>(undefined),
			maxSize: new FormControl<string | null | undefined>(undefined),
			maxSlots: new FormControl<number | null | undefined>(undefined),
			resetFilesExpiryPeriod: new FormControl<boolean | null | undefined>(undefined),
			resetMaxSize: new FormControl<boolean | null | undefined>(undefined),
			resetMaxSlots: new FormControl<boolean | null | undefined>(undefined),
			showCreatorName: new FormControl<boolean | null | undefined>(undefined),
			showCreatorUsername: new FormControl<boolean | null | undefined>(undefined),
			showUploadedFiles: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request model for updating user account information */
	export interface UpdateUserAccountRequest {

		/**
		 * Accept EULA
		 * Present, if EULA is system global active.
		 * cf. `GET system/config/settings/general` - `eulaEnabled`
		 * If accepted can not be undone.
		 */
		acceptEULA?: boolean | null;

		/** Email */
		email?: string | null;

		/** User first name */
		firstName?: string | null;

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Gender
		 * Do NOT use `gender`! It will be ignored.
		 */
		gender?: string | null;

		/**
		 * &#128640; Since v4.20.0
		 * IETF language tag
		 */
		language?: string | null;

		/** User last name */
		lastName?: string | null;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * User login name
		 */
		login?: string | null;

		/** Phone number */
		phone?: string | null;

		/**
		 * &#128679; Deprecated since v4.18.0
		 * Job title
		 */
		title?: string | null;

		/**
		 * &#128640; Since v4.13.0
		 * Username
		 */
		userName?: string | null;
	}

	/** Request model for updating user account information */
	export interface UpdateUserAccountRequestFormProperties {

		/**
		 * Accept EULA
		 * Present, if EULA is system global active.
		 * cf. `GET system/config/settings/general` - `eulaEnabled`
		 * If accepted can not be undone.
		 */
		acceptEULA: FormControl<boolean | null | undefined>,

		/** Email */
		email: FormControl<string | null | undefined>,

		/** User first name */
		firstName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Gender
		 * Do NOT use `gender`! It will be ignored.
		 */
		gender: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.20.0
		 * IETF language tag
		 */
		language: FormControl<string | null | undefined>,

		/** User last name */
		lastName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.13.0
		 * User login name
		 */
		login: FormControl<string | null | undefined>,

		/** Phone number */
		phone: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.18.0
		 * Job title
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.13.0
		 * Username
		 */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserAccountRequestFormGroup() {
		return new FormGroup<UpdateUserAccountRequestFormProperties>({
			acceptEULA: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			login: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request model for updating user's metadata */
	export interface UpdateUserRequest {

		/** User Authentication Data Update Request */
		authData?: UserAuthDataUpdateRequest;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * Authentication methods:
		 * * `sql`
		 * * `active_directory`
		 * * `radius`
		 * * `openid`
		 * use `authData` instead
		 */
		authMethods?: Array<UserAuthMethod>;

		/** Email */
		email?: string | null;

		/** Expiration information */
		expiration?: ObjectExpiration;

		/** User first name */
		firstName?: string | null;

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Gender
		 * Do NOT use `gender`! It will be ignored.
		 */
		gender?: string | null;

		/**
		 * User is locked:
		 * * `false` - unlocked
		 * * `true` - locked
		 * User is locked and can not login anymore.
		 */
		isLocked?: boolean | null;

		/** User last name */
		lastName?: string | null;

		/**
		 * &#128679; Deprecated since v4.7.0
		 * User lock status:
		 * * `0` - locked
		 * * `1` - Web access allowed
		 * * `2` - Web and mobile access allowed
		 * Please use `isLocked` instead.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lockStatus?: number | null;

		/** Multi-factor authentication configuration */
		mfaConfig?: MfaConfig;

		/** Phone number */
		phone?: string | null;

		/** IETF language tag */
		receiverLanguage?: string | null;

		/**
		 * &#128679; Deprecated since v4.18.0
		 * Job title
		 */
		title?: string | null;

		/**
		 * &#128640; Since v4.13.0
		 * Username
		 */
		userName?: string | null;
	}

	/** Request model for updating user's metadata */
	export interface UpdateUserRequestFormProperties {

		/** Email */
		email: FormControl<string | null | undefined>,

		/** User first name */
		firstName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Gender
		 * Do NOT use `gender`! It will be ignored.
		 */
		gender: FormControl<string | null | undefined>,

		/**
		 * User is locked:
		 * * `false` - unlocked
		 * * `true` - locked
		 * User is locked and can not login anymore.
		 */
		isLocked: FormControl<boolean | null | undefined>,

		/** User last name */
		lastName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.7.0
		 * User lock status:
		 * * `0` - locked
		 * * `1` - Web access allowed
		 * * `2` - Web and mobile access allowed
		 * Please use `isLocked` instead.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lockStatus: FormControl<number | null | undefined>,

		/** Phone number */
		phone: FormControl<string | null | undefined>,

		/** IETF language tag */
		receiverLanguage: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.18.0
		 * Job title
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.13.0
		 * Username
		 */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserRequestFormGroup() {
		return new FormGroup<UpdateUserRequestFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			isLocked: new FormControl<boolean | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			lockStatus: new FormControl<number | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			receiverLanguage: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User Authentication Data Update Request */
	export interface UserAuthDataUpdateRequest {

		/**
		 * ID of the user's Active Directory.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		adConfigId?: number | null;

		/** User login name */
		login?: string | null;

		/**
		 * Authentication method
		 * Authentication methods:
		 * * `basic`
		 * * `active_directory`
		 * * `radius`
		 * * `openid`
		 */
		method?: string | null;

		/**
		 * ID of the user's OIDC provider.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		oidConfigId?: number | null;
	}

	/** User Authentication Data Update Request */
	export interface UserAuthDataUpdateRequestFormProperties {

		/**
		 * ID of the user's Active Directory.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		adConfigId: FormControl<number | null | undefined>,

		/** User login name */
		login: FormControl<string | null | undefined>,

		/**
		 * Authentication method
		 * Authentication methods:
		 * * `basic`
		 * * `active_directory`
		 * * `radius`
		 * * `openid`
		 */
		method: FormControl<string | null | undefined>,

		/**
		 * ID of the user's OIDC provider.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		oidConfigId: FormControl<number | null | undefined>,
	}
	export function CreateUserAuthDataUpdateRequestFormGroup() {
		return new FormGroup<UserAuthDataUpdateRequestFormProperties>({
			adConfigId: new FormControl<number | null | undefined>(undefined),
			login: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			oidConfigId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request model for updating a webhook */
	export interface UpdateWebhookRequest {

		/** List of names of event types */
		eventTypeNames?: Array<string>;

		/** Is enabled */
		isEnabled?: boolean | null;

		/** Name */
		name?: string | null;

		/** Secret; used for event message signatures */
		secret?: string | null;

		/** If set to true, an example event is being created */
		triggerExampleEvent?: boolean | null;

		/** URL (must begin with the `HTTPS` scheme) */
		url?: string | null;
	}

	/** Request model for updating a webhook */
	export interface UpdateWebhookRequestFormProperties {

		/** Is enabled */
		isEnabled: FormControl<boolean | null | undefined>,

		/** Name */
		name: FormControl<string | null | undefined>,

		/** Secret; used for event message signatures */
		secret: FormControl<string | null | undefined>,

		/** If set to true, an example event is being created */
		triggerExampleEvent: FormControl<boolean | null | undefined>,

		/** URL (must begin with the `HTTPS` scheme) */
		url: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWebhookRequestFormGroup() {
		return new FormGroup<UpdateWebhookRequestFormProperties>({
			isEnabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
			triggerExampleEvent: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Upload Share information */
	export interface UploadShare {

		/**
		 * Share access key to generate secure link
		 * Required
		 */
		accessKey: string;

		/**
		 * Total amount of existing files uploaded with this share.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntFiles?: number | null;

		/**
		 * Total amount of uploads conducted with this share.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntUploads?: number | null;

		/**
		 * Creation date
		 * Required
		 */
		createdAt: Date;

		/**
		 * User information
		 * Required
		 */
		createdBy: UserInfo;

		/** Upload Share URL */
		dataUrl?: string | null;

		/** Expiration date */
		expireAt?: Date | null;

		/**
		 * Number of days after which uploaded files expire
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		filesExpiryPeriod?: number | null;

		/**
		 * Share ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * &#128640; Since v4.11.0
		 * Internal notes
		 * Maximum: 255
		 */
		internalNotes?: string | null;

		/** Encryption state */
		isEncrypted?: boolean | null;

		/**
		 * Is share protected by password
		 * Required
		 */
		isProtected: boolean;

		/**
		 * Maximal total size of uploaded files (in bytes)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxSize?: string | null;

		/**
		 * Maximal amount of files to upload
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxSlots?: number | null;

		/**
		 * Alias name
		 * Required
		 */
		name: string;

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes?: string | null;

		/**
		 * &#128679; Deprecated since v4.20.0
		 * Notify creator on every upload.
		 * Required
		 */
		notifyCreator: boolean;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * CSV string of recipient email addresses
		 */
		recipients?: string | null;

		/**
		 * &#128640; Since v4.11.0
		 * Show creator first and last name.
		 */
		showCreatorName?: boolean | null;

		/**
		 * &#128640; Since v4.11.0
		 * Show creator email address.
		 */
		showCreatorUsername?: boolean | null;

		/** Allow display of already uploaded files */
		showUploadedFiles?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.11.0
		 * CSV string of recipient MSISDNs
		 */
		smsRecipients?: string | null;

		/**
		 * Target room or folder ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		targetId: string;

		/** Path to shared upload node */
		targetPath?: string | null;

		/** Node type */
		targetType?: string | null;

		/** Modification date */
		updatedAt?: Date | null;

		/** User information */
		updatedBy?: UserInfo;
	}

	/** Upload Share information */
	export interface UploadShareFormProperties {

		/**
		 * Share access key to generate secure link
		 * Required
		 */
		accessKey: FormControl<string | null | undefined>,

		/**
		 * Total amount of existing files uploaded with this share.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntFiles: FormControl<number | null | undefined>,

		/**
		 * Total amount of uploads conducted with this share.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cntUploads: FormControl<number | null | undefined>,

		/**
		 * Creation date
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/** Upload Share URL */
		dataUrl: FormControl<string | null | undefined>,

		/** Expiration date */
		expireAt: FormControl<Date | null | undefined>,

		/**
		 * Number of days after which uploaded files expire
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		filesExpiryPeriod: FormControl<number | null | undefined>,

		/**
		 * Share ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Internal notes
		 * Maximum: 255
		 */
		internalNotes: FormControl<string | null | undefined>,

		/** Encryption state */
		isEncrypted: FormControl<boolean | null | undefined>,

		/**
		 * Is share protected by password
		 * Required
		 */
		isProtected: FormControl<boolean | null | undefined>,

		/**
		 * Maximal total size of uploaded files (in bytes)
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxSize: FormControl<string | null | undefined>,

		/**
		 * Maximal amount of files to upload
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxSlots: FormControl<number | null | undefined>,

		/**
		 * Alias name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * User notes
		 * Maximum: 255
		 */
		notes: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.20.0
		 * Notify creator on every upload.
		 * Required
		 */
		notifyCreator: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * CSV string of recipient email addresses
		 */
		recipients: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Show creator first and last name.
		 */
		showCreatorName: FormControl<boolean | null | undefined>,

		/**
		 * &#128640; Since v4.11.0
		 * Show creator email address.
		 */
		showCreatorUsername: FormControl<boolean | null | undefined>,

		/** Allow display of already uploaded files */
		showUploadedFiles: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.11.0
		 * CSV string of recipient MSISDNs
		 */
		smsRecipients: FormControl<string | null | undefined>,

		/**
		 * Target room or folder ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		targetId: FormControl<string | null | undefined>,

		/** Path to shared upload node */
		targetPath: FormControl<string | null | undefined>,

		/** Node type */
		targetType: FormControl<string | null | undefined>,

		/** Modification date */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateUploadShareFormGroup() {
		return new FormGroup<UploadShareFormProperties>({
			accessKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cntFiles: new FormControl<number | null | undefined>(undefined),
			cntUploads: new FormControl<number | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			dataUrl: new FormControl<string | null | undefined>(undefined),
			expireAt: new FormControl<Date | null | undefined>(undefined),
			filesExpiryPeriod: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			internalNotes: new FormControl<string | null | undefined>(undefined),
			isEncrypted: new FormControl<boolean | null | undefined>(undefined),
			isProtected: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			maxSize: new FormControl<string | null | undefined>(undefined),
			maxSlots: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			notes: new FormControl<string | null | undefined>(undefined),
			notifyCreator: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			recipients: new FormControl<string | null | undefined>(undefined),
			showCreatorName: new FormControl<boolean | null | undefined>(undefined),
			showCreatorUsername: new FormControl<boolean | null | undefined>(undefined),
			showUploadedFiles: new FormControl<boolean | null | undefined>(undefined),
			smsRecipients: new FormControl<string | null | undefined>(undefined),
			targetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetPath: new FormControl<string | null | undefined>(undefined),
			targetType: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Request model for sending an email of an Upload Share link */
	export interface UploadShareLinkEmail {

		/**
		 * Notification email content
		 * Required
		 */
		body: string;

		/** Language tag for messages to receiver */
		receiverLanguage?: string | null;

		/**
		 * List of recipient email addresses
		 * Required
		 */
		recipients: Array<string>;
	}

	/** Request model for sending an email of an Upload Share link */
	export interface UploadShareLinkEmailFormProperties {

		/**
		 * Notification email content
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/** Language tag for messages to receiver */
		receiverLanguage: FormControl<string | null | undefined>,
	}
	export function CreateUploadShareLinkEmailFormGroup() {
		return new FormGroup<UploadShareLinkEmailFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			receiverLanguage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of Upload Shares */
	export interface UploadShareList {

		/**
		 * List of Upload Shares
		 * Required
		 */
		items: Array<UploadShare>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of Upload Shares */
	export interface UploadShareListFormProperties {
	}
	export function CreateUploadShareListFormGroup() {
		return new FormGroup<UploadShareListFormProperties>({
		});

	}


	/** User information */
	export interface UserAccount {

		/**
		 * User Authentication Data
		 * Required
		 */
		authData: UserAuthData;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * Authentication methods:
		 * * `sql`
		 * * `active_directory`
		 * * `radius`
		 * * `openid`
		 * use `authData` instead
		 */
		authMethods?: Array<UserAuthMethod>;

		/** Email */
		email?: string | null;

		/** Expiration date */
		expireAt?: Date | null;

		/**
		 * User first name
		 * Required
		 */
		firstName: string;

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Gender
		 */
		gender?: string | null;

		/**
		 * User has manageable rooms
		 * Required
		 */
		hasManageableRooms: boolean;

		/**
		 * Homeroom ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeRoomId?: string | null;

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * User has generated private key.
		 * Possible if client-side encryption is active for this customer
		 */
		isEncryptionEnabled?: boolean | null;

		/**
		 * User is locked:
		 * * `false` - unlocked
		 * * `true` - locked
		 * User is locked and can not login anymore.
		 * Required
		 */
		isLocked: boolean;

		/**
		 * &#128640; Since v4.20.0
		 * IETF language tag
		 * Required
		 */
		language: string;

		/** Last failed logon date */
		lastLoginFailAt?: Date | null;

		/**
		 * &#128679; Deprecated since v4.6.0
		 * Last failed logon IP address
		 */
		lastLoginFailIp?: string | null;

		/** Last successful logon date */
		lastLoginSuccessAt?: Date | null;

		/**
		 * &#128679; Deprecated since v4.6.0
		 * Last successful logon IP address
		 */
		lastLoginSuccessIp?: string | null;

		/**
		 * User last name
		 * Required
		 */
		lastName: string;

		/**
		 * &#128679; Deprecated since v4.7.0
		 * User lock status:
		 * * `0` - locked
		 * * `1` - Web access allowed
		 * * `2` - Web and mobile access allowed
		 * Please use `isLocked` instead.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lockStatus: number;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * User login name
		 */
		login?: string | null;

		/**
		 * &#128640; Since v4.13.0
		 * If `true`, the user must set the `email` at the first login.
		 */
		mustSetEmail?: boolean | null;

		/**
		 * User has accepted EULA.
		 * Present, if EULA is system global active.
		 * cf. `GET system/config/settings/general` - `eulaEnabled`
		 */
		needsToAcceptEULA?: boolean | null;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * Determines whether user has to change his / her password
		 * Required
		 */
		needsToChangePassword: boolean;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * If `true`, the user must change the `userName` at the first login.
		 */
		needsToChangeUserName?: boolean | null;

		/** Phone number */
		phone?: string | null;

		/**
		 * &#128679; Deprecated since v4.18.0
		 * Job title
		 */
		title?: string | null;

		/** User custom attributes (list of key-value pairs) */
		userAttributes?: UserAttributes;

		/** All groups the user is member of */
		userGroups?: Array<UserGroup>;

		/**
		 * &#128640; Since v4.13.0
		 * Username
		 * Required
		 */
		userName: string;

		/**
		 * List of roles
		 * Required
		 */
		userRoles: RoleList;
	}

	/** User information */
	export interface UserAccountFormProperties {

		/** Email */
		email: FormControl<string | null | undefined>,

		/** Expiration date */
		expireAt: FormControl<Date | null | undefined>,

		/**
		 * User first name
		 * Required
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Gender
		 */
		gender: FormControl<string | null | undefined>,

		/**
		 * User has manageable rooms
		 * Required
		 */
		hasManageableRooms: FormControl<boolean | null | undefined>,

		/**
		 * Homeroom ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeRoomId: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * User has generated private key.
		 * Possible if client-side encryption is active for this customer
		 */
		isEncryptionEnabled: FormControl<boolean | null | undefined>,

		/**
		 * User is locked:
		 * * `false` - unlocked
		 * * `true` - locked
		 * User is locked and can not login anymore.
		 * Required
		 */
		isLocked: FormControl<boolean | null | undefined>,

		/**
		 * &#128640; Since v4.20.0
		 * IETF language tag
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/** Last failed logon date */
		lastLoginFailAt: FormControl<Date | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.6.0
		 * Last failed logon IP address
		 */
		lastLoginFailIp: FormControl<string | null | undefined>,

		/** Last successful logon date */
		lastLoginSuccessAt: FormControl<Date | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.6.0
		 * Last successful logon IP address
		 */
		lastLoginSuccessIp: FormControl<string | null | undefined>,

		/**
		 * User last name
		 * Required
		 */
		lastName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.7.0
		 * User lock status:
		 * * `0` - locked
		 * * `1` - Web access allowed
		 * * `2` - Web and mobile access allowed
		 * Please use `isLocked` instead.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lockStatus: FormControl<number | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.13.0
		 * User login name
		 */
		login: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.13.0
		 * If `true`, the user must set the `email` at the first login.
		 */
		mustSetEmail: FormControl<boolean | null | undefined>,

		/**
		 * User has accepted EULA.
		 * Present, if EULA is system global active.
		 * cf. `GET system/config/settings/general` - `eulaEnabled`
		 */
		needsToAcceptEULA: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.13.0
		 * Determines whether user has to change his / her password
		 * Required
		 */
		needsToChangePassword: FormControl<boolean | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.13.0
		 * If `true`, the user must change the `userName` at the first login.
		 */
		needsToChangeUserName: FormControl<boolean | null | undefined>,

		/** Phone number */
		phone: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.18.0
		 * Job title
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.13.0
		 * Username
		 * Required
		 */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateUserAccountFormGroup() {
		return new FormGroup<UserAccountFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			expireAt: new FormControl<Date | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gender: new FormControl<string | null | undefined>(undefined),
			hasManageableRooms: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			homeRoomId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			isLocked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastLoginFailAt: new FormControl<Date | null | undefined>(undefined),
			lastLoginFailIp: new FormControl<string | null | undefined>(undefined),
			lastLoginSuccessAt: new FormControl<Date | null | undefined>(undefined),
			lastLoginSuccessIp: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lockStatus: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			login: new FormControl<string | null | undefined>(undefined),
			mustSetEmail: new FormControl<boolean | null | undefined>(undefined),
			needsToAcceptEULA: new FormControl<boolean | null | undefined>(undefined),
			needsToChangePassword: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			needsToChangeUserName: new FormControl<boolean | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** User custom attributes (list of key-value pairs) */
	export interface UserAttributes {

		/**
		 * List of key-value pairs
		 * Required
		 */
		items: Array<KeyValueEntry>;
	}

	/** User custom attributes (list of key-value pairs) */
	export interface UserAttributesFormProperties {
	}
	export function CreateUserAttributesFormGroup() {
		return new FormGroup<UserAttributesFormProperties>({
		});

	}


	/** Group information */
	export interface UserGroup {

		/**
		 * Unique identifier for the group
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * Determines whether user is a member of the group or not
		 * Required
		 */
		isMember: boolean;

		/**
		 * Group name
		 * Required
		 */
		name: string;
	}

	/** Group information */
	export interface UserGroupFormProperties {

		/**
		 * Unique identifier for the group
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Determines whether user is a member of the group or not
		 * Required
		 */
		isMember: FormControl<boolean | null | undefined>,

		/**
		 * Group name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserGroupFormGroup() {
		return new FormGroup<UserGroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isMember: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** User information */
	export interface UserData {

		/**
		 * User Authentication Data
		 * Required
		 */
		authData: UserAuthData;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * Authentication methods:
		 * * `sql`
		 * * `active_directory`
		 * * `radius`
		 * * `openid`
		 * use `authData` instead
		 */
		authMethods?: Array<UserAuthMethod>;

		/**
		 * &#128640; Since v4.11.0
		 * Avatar UUID
		 * Required
		 */
		avatarUuid: string;

		/** Email */
		email?: string | null;

		/** Expiration date */
		expireAt?: Date | null;

		/**
		 * User first name
		 * Required
		 */
		firstName: string;

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Gender
		 */
		gender?: string | null;

		/** User has manageable rooms */
		hasManageableRooms?: boolean | null;

		/**
		 * Homeroom ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeRoomId?: string | null;

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * User has generated private key.
		 * Possible if client-side encryption is active for this customer
		 */
		isEncryptionEnabled?: boolean | null;

		/**
		 * User is locked:
		 * * `false` - unlocked
		 * * `true` - locked
		 * User is locked and can not login anymore.
		 * Required
		 */
		isLocked: boolean;

		/** Determines whether multi-factor authentication is enabled */
		isMfaEnabled?: boolean | null;

		/** Determines whether multi-factor authentication is enforced */
		isMfaEnforced?: boolean | null;

		/** Last successful logon date */
		lastLoginSuccessAt?: Date | null;

		/**
		 * User last name
		 * Required
		 */
		lastName: string;

		/**
		 * &#128679; Deprecated since v4.7.0
		 * User lock status:
		 * * `0` - locked
		 * * `1` - Web access allowed
		 * * `2` - Web and mobile access allowed
		 * Please use `isLocked` instead.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lockStatus: number;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * User login name
		 */
		login?: string | null;

		/** Phone number */
		phone?: string | null;

		/** Public key container */
		publicKeyContainer?: PublicKeyContainer;

		/**
		 * &#128679; Deprecated since v4.18.0
		 * Job title
		 */
		title?: string | null;

		/** User custom attributes (list of key-value pairs) */
		userAttributes?: UserAttributes;

		/**
		 * &#128640; Since v4.13.0
		 * Username
		 * Required
		 */
		userName: string;

		/** List of roles */
		userRoles?: RoleList;
	}

	/** User information */
	export interface UserDataFormProperties {

		/**
		 * &#128640; Since v4.11.0
		 * Avatar UUID
		 * Required
		 */
		avatarUuid: FormControl<string | null | undefined>,

		/** Email */
		email: FormControl<string | null | undefined>,

		/** Expiration date */
		expireAt: FormControl<Date | null | undefined>,

		/**
		 * User first name
		 * Required
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Gender
		 */
		gender: FormControl<string | null | undefined>,

		/** User has manageable rooms */
		hasManageableRooms: FormControl<boolean | null | undefined>,

		/**
		 * Homeroom ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeRoomId: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * User has generated private key.
		 * Possible if client-side encryption is active for this customer
		 */
		isEncryptionEnabled: FormControl<boolean | null | undefined>,

		/**
		 * User is locked:
		 * * `false` - unlocked
		 * * `true` - locked
		 * User is locked and can not login anymore.
		 * Required
		 */
		isLocked: FormControl<boolean | null | undefined>,

		/** Determines whether multi-factor authentication is enabled */
		isMfaEnabled: FormControl<boolean | null | undefined>,

		/** Determines whether multi-factor authentication is enforced */
		isMfaEnforced: FormControl<boolean | null | undefined>,

		/** Last successful logon date */
		lastLoginSuccessAt: FormControl<Date | null | undefined>,

		/**
		 * User last name
		 * Required
		 */
		lastName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.7.0
		 * User lock status:
		 * * `0` - locked
		 * * `1` - Web access allowed
		 * * `2` - Web and mobile access allowed
		 * Please use `isLocked` instead.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lockStatus: FormControl<number | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.13.0
		 * User login name
		 */
		login: FormControl<string | null | undefined>,

		/** Phone number */
		phone: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.18.0
		 * Job title
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.13.0
		 * Username
		 * Required
		 */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateUserDataFormGroup() {
		return new FormGroup<UserDataFormProperties>({
			avatarUuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined),
			expireAt: new FormControl<Date | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gender: new FormControl<string | null | undefined>(undefined),
			hasManageableRooms: new FormControl<boolean | null | undefined>(undefined),
			homeRoomId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			isLocked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isMfaEnabled: new FormControl<boolean | null | undefined>(undefined),
			isMfaEnforced: new FormControl<boolean | null | undefined>(undefined),
			lastLoginSuccessAt: new FormControl<Date | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lockStatus: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			login: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of request models for setting a user file key(s) */
	export interface UserFileKeySetBatchRequest {

		/**
		 * List of user file keys
		 * Required
		 */
		items: Array<UserFileKeySetRequest>;
	}

	/** List of request models for setting a user file key(s) */
	export interface UserFileKeySetBatchRequestFormProperties {
	}
	export function CreateUserFileKeySetBatchRequestFormGroup() {
		return new FormGroup<UserFileKeySetBatchRequestFormProperties>({
		});

	}


	/** Request model for setting a user file key */
	export interface UserFileKeySetRequest {

		/**
		 * File ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		fileId: string;

		/**
		 * File key information
		 * Required
		 */
		fileKey: FileKey;

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userId: string;
	}

	/** Request model for setting a user file key */
	export interface UserFileKeySetRequestFormProperties {

		/**
		 * File ID
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		fileId: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserFileKeySetRequestFormGroup() {
		return new FormGroup<UserFileKeySetRequestFormProperties>({
			fileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of groups */
	export interface UserGroupList {

		/**
		 * List of user-group mappings
		 * Required
		 */
		items: Array<UserGroup>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of groups */
	export interface UserGroupListFormProperties {
	}
	export function CreateUserGroupListFormGroup() {
		return new FormGroup<UserGroupListFormProperties>({
		});

	}


	/** User IDs */
	export interface UserIds {

		/**
		 * List of user IDs
		 * Required
		 */
		ids: Array<number>;
	}

	/** User IDs */
	export interface UserIdsFormProperties {
	}
	export function CreateUserIdsFormGroup() {
		return new FormGroup<UserIdsFormProperties>({
		});

	}


	/** User information */
	export interface UserItem {

		/**
		 * &#128640; Since v4.11.0
		 * Avatar UUID
		 * Required
		 */
		avatarUuid: string;

		/** Creation date */
		createdAt?: Date | null;

		/** Email */
		email?: string | null;

		/** Expiration date */
		expireAt?: Date | null;

		/**
		 * User first name
		 * Required
		 */
		firstName: string;

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Gender
		 */
		gender?: string | null;

		/**
		 * &#128679; Deprecated since v4.27.0
		 * User has manageable rooms
		 */
		hasManageableRooms?: boolean | null;

		/**
		 * Homeroom ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeRoomId?: string | null;

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/**
		 * User has generated private key.
		 * Possible if client-side encryption is active for this customer
		 */
		isEncryptionEnabled?: boolean | null;

		/**
		 * User is locked:
		 * * `false` - unlocked
		 * * `true` - locked
		 * User is locked and can not login anymore.
		 * Required
		 */
		isLocked: boolean;

		/** Last successful logon date */
		lastLoginSuccessAt?: Date | null;

		/**
		 * User last name
		 * Required
		 */
		lastName: string;

		/**
		 * &#128679; Deprecated since v4.7.0
		 * User lock status:
		 * * `0` - locked
		 * * `1` - Web access allowed
		 * * `2` - Web and mobile access allowed
		 * Please use `isLocked` instead.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lockStatus: number;

		/**
		 * &#128679; Deprecated since v4.13.0
		 * User login name
		 * Required
		 */
		login: string;

		/** Phone number */
		phone?: string | null;

		/**
		 * &#128679; Deprecated since v4.18.0
		 * Job title
		 */
		title?: string | null;

		/** User custom attributes (list of key-value pairs) */
		userAttributes?: UserAttributes;

		/**
		 * &#128640; Since v4.13.0
		 * Username
		 * Required
		 */
		userName: string;

		/** List of roles */
		userRoles?: RoleList;
	}

	/** User information */
	export interface UserItemFormProperties {

		/**
		 * &#128640; Since v4.11.0
		 * Avatar UUID
		 * Required
		 */
		avatarUuid: FormControl<string | null | undefined>,

		/** Creation date */
		createdAt: FormControl<Date | null | undefined>,

		/** Email */
		email: FormControl<string | null | undefined>,

		/** Expiration date */
		expireAt: FormControl<Date | null | undefined>,

		/**
		 * User first name
		 * Required
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.12.0
		 * Gender
		 */
		gender: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.27.0
		 * User has manageable rooms
		 */
		hasManageableRooms: FormControl<boolean | null | undefined>,

		/**
		 * Homeroom ID
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		homeRoomId: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the user
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * User has generated private key.
		 * Possible if client-side encryption is active for this customer
		 */
		isEncryptionEnabled: FormControl<boolean | null | undefined>,

		/**
		 * User is locked:
		 * * `false` - unlocked
		 * * `true` - locked
		 * User is locked and can not login anymore.
		 * Required
		 */
		isLocked: FormControl<boolean | null | undefined>,

		/** Last successful logon date */
		lastLoginSuccessAt: FormControl<Date | null | undefined>,

		/**
		 * User last name
		 * Required
		 */
		lastName: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.7.0
		 * User lock status:
		 * * `0` - locked
		 * * `1` - Web access allowed
		 * * `2` - Web and mobile access allowed
		 * Please use `isLocked` instead.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lockStatus: FormControl<number | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.13.0
		 * User login name
		 * Required
		 */
		login: FormControl<string | null | undefined>,

		/** Phone number */
		phone: FormControl<string | null | undefined>,

		/**
		 * &#128679; Deprecated since v4.18.0
		 * Job title
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * &#128640; Since v4.13.0
		 * Username
		 * Required
		 */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateUserItemFormGroup() {
		return new FormGroup<UserItemFormProperties>({
			avatarUuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			expireAt: new FormControl<Date | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gender: new FormControl<string | null | undefined>(undefined),
			hasManageableRooms: new FormControl<boolean | null | undefined>(undefined),
			homeRoomId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			isLocked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			lastLoginSuccessAt: new FormControl<Date | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lockStatus: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			login: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of users */
	export interface UserList {

		/**
		 * List of users
		 * Required
		 */
		items: Array<UserItem>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of users */
	export interface UserListFormProperties {
	}
	export function CreateUserListFormGroup() {
		return new FormGroup<UserListFormProperties>({
		});

	}


	/** Contains information about the user's MFA status */
	export interface UserMfaStatusResponse {

		/**
		 * Determines whether multi-factor authentication is enforced
		 * Required
		 */
		mfaEnforced: boolean;

		/**
		 * Information about the second factor authentication method setup by the user
		 * Required
		 */
		mfaSetups: Array<MfaSetupStatus>;
	}

	/** Contains information about the user's MFA status */
	export interface UserMfaStatusResponseFormProperties {

		/**
		 * Determines whether multi-factor authentication is enforced
		 * Required
		 */
		mfaEnforced: FormControl<boolean | null | undefined>,
	}
	export function CreateUserMfaStatusResponseFormGroup() {
		return new FormGroup<UserMfaStatusResponseFormProperties>({
			mfaEnforced: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of webhooks */
	export interface WebhookList {

		/**
		 * List of webhooks
		 * Required
		 */
		items: Array<Webhook>;

		/**
		 * Range information
		 * Required
		 */
		range: Range;
	}

	/** List of webhooks */
	export interface WebhookListFormProperties {
	}
	export function CreateWebhookListFormGroup() {
		return new FormGroup<WebhookListFormProperties>({
		});

	}


	/** Request model for ZIP download */
	export interface ZipDownloadRequest {

		/**
		 * List of node IDs
		 * Required
		 */
		nodeIds: Array<number>;
	}

	/** Request model for ZIP download */
	export interface ZipDownloadRequestFormProperties {
	}
	export function CreateZipDownloadRequestFormGroup() {
		return new FormGroup<ZipDownloadRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Authenticate user (Login)
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.13.0</h3>
		 * ### Description:
		 * Authenticates user and provides an authentication token (`X-Sds-Auth-Token`) that is required for the most operations.
		 * ### Precondition:
		 * Existing user that is **NOT** locked.
		 * ### Postcondition:
		 * User is logged in.
		 * ### Further Information:
		 * The provided token is valid for **two hours**, every usage resets this period to two full hours again.
		 * Logging off invalidates the token.
		 * ### Available authentication methods:
		 * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Authentication Method (`authType`) | Description |
		 * | :--- | :--- |
		 * | `basic` | Log in with credentials stored in the database <br>Formerly known as `sql`.|
		 * | `active_directory` | Log in with Active Directory credentials |
		 * | `radius` | Log in with RADIUS username, PIN and token password.<br>Token (request parameter) may be set, otherwise this parameter is ignored. If token is set, password is optional. |
		 * | `openid` | Please use `POST /auth/openid/login` API to login with OpenID Connect identity |
		 * </details>
		 * Post v4/auth/login
		 * @return {LoginResponse} OK
		 */
		Login(requestBody: LoginRequest): Observable<LoginResponse> {
			return this.http.post<LoginResponse>(this.baseUri + 'v4/auth/login', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initiate OpenID Connect authentication
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.14.0</h3>
		 * ### Description:
		 * This is the first step of the OpenID Connect authentication.
		 * The user is send to the OpenID Connect identity provider to authenticate himself and retrieve an authorization code.
		 * ### Precondition:
		 * None.
		 * ### Postcondition:
		 * User is redirected to OpenID Connect identity provider to authenticate himself.
		 * ### Further Information:
		 * None.
		 * Get v4/auth/openid/login
		 * @param {string} issuer Issuer identifier of the OpenID Connect identity provider
		 * @param {string} redirect_uri Redirect URI to complete the OpenID Connect authentication
		 * @param {string} language Language ID or ISO 639-1 code
		 * @param {boolean} test Flag to test the authentication parameters.
		 * If the request is valid, the API will respond with `204 No Content`.
		 * @return {void} 
		 */
		InitiateOpenIdLogin(issuer: string, redirect_uri: string, language: string, test: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/auth/openid/login?issuer=' + (issuer == null ? '' : encodeURIComponent(issuer)) + '&redirect_uri=' + (redirect_uri == null ? '' : encodeURIComponent(redirect_uri)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&test=' + test, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Complete OpenID Connect authentication
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.14.0</h3>
		 * ### Description:
		 * This is the second step of the OpenID Connect authentication.
		 * The user hands over the authorization code and is logged in.
		 * ### Precondition:
		 * Existing user with activated OpenID Connect authentication that is **NOT** locked.
		 * ### Postcondition:
		 * User is logged in.
		 * ### Further Information:
		 * None.
		 * Post v4/auth/openid/login
		 * @param {string} code Authorization code
		 * @param {string} id_token Identity token
		 * @param {string} state Authentication state
		 * @return {LoginResponse} OK
		 */
		CompleteOpenIdLogin(code: string, id_token: string | null | undefined, state: string): Observable<LoginResponse> {
			return this.http.post<LoginResponse>(this.baseUri + 'v4/auth/openid/login?code=' + (code == null ? '' : encodeURIComponent(code)) + '&id_token=' + (id_token == null ? '' : encodeURIComponent(id_token)) + '&state=' + (state == null ? '' : encodeURIComponent(state)), null, {});
		}

		/**
		 * Ping
		 * ### Description:
		 * Test connection to DRACOON Core Service.
		 * ### Precondition:
		 * None.
		 * ### Postcondition:
		 * `200 OK` with current date string is returned if successful.
		 * ### Further Information:
		 * None.
		 * Get v4/auth/ping
		 * @return {string} OK
		 */
		Ping(): Observable<string> {
			return this.http.get(this.baseUri + 'v4/auth/ping', { responseType: 'text' });
		}

		/**
		 * Recover username
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.13.0</h3>
		 * ### Description:
		 * Request an email with the user names of all accounts connected to the email.
		 * ### Precondition:
		 * Valid email address.
		 * ### Postcondition:
		 * An email is sent to the provided address, with a list of account user names connected to it.
		 * ### Further Information:
		 * None.
		 * Post v4/auth/recover_username
		 * @return {void} 
		 */
		RecoverUserName(requestBody: RecoverUserNameRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/auth/recover_username', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request password reset
		 * ### Description:
		 * Request an email with a password reset token for a certain user to reset password.
		 * ### Precondition:
		 * Registered user account.
		 * ### Postcondition:
		 * Provided user receives email with password reset token.
		 * ### Further Information:
		 * None.
		 * Post v4/auth/reset_password
		 * @return {void} 
		 */
		RequestPasswordReset(requestBody: ResetPasswordRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/auth/reset_password', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Validate information for password reset
		 * ### Description:
		 * Request all information for a password change dialogue e.g. real name of user.
		 * ### Precondition:
		 * User received a password reset token.
		 * ### Postcondition:
		 * Context information is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/auth/reset_password/{token}
		 * @param {string} token Password reset token
		 * @return {ResetPasswordTokenValidateResponse} OK
		 */
		ValidateResetPasswordToken(token: string): Observable<ResetPasswordTokenValidateResponse> {
			return this.http.get<ResetPasswordTokenValidateResponse>(this.baseUri + 'v4/auth/reset_password/' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Reset password
		 * ### Description:
		 * Resets user's password.
		 * ### Precondition:
		 * User received a password reset token.
		 * ### Postcondition:
		 * User's password is reset to the provided password.
		 * ### Further Information:
		 * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
		 * Put v4/auth/reset_password/{token}
		 * @param {string} token Password reset token
		 * @return {void} 
		 */
		ResetPassword(token: string, requestBody: ResetPasswordWithTokenRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/auth/reset_password/' + (token == null ? '' : encodeURIComponent(token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request default values
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
		 * ### Description:
		 * Returns a list of configurable system default values.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * List of configurable default settings is returned.
		 * ### Further Information:
		 * None.
		 * ### Configurable default values:
		 * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description | Value |
		 * | :--- | :--- | :--- |
		 * | `languageDefault` | Defines which language should be default. | `ISO 639-1 code` |
		 * | `downloadShareDefaultExpirationPeriod` | Default expiration period for Download Shares in _days_. | `Integer between 0 and 9999` |
		 * | `uploadShareDefaultExpirationPeriod` | Default expiration period for Upload Shares in _days_. | `Integer between 0 and 9999` |
		 * | `fileDefaultExpirationPeriod` | Default expiration period for all uploaded files in _days_. | `Integer between 0 and 9999` |
		 * | `nonmemberViewerDefault` | Defines if new users get the role _Non Member Viewer_ by default | `true or false` |
		 * </details>
		 * Get v4/config/info/defaults
		 * @return {SystemDefaults} OK
		 */
		RequestSystemDefaultsInfo(): Observable<SystemDefaults> {
			return this.http.get<SystemDefaults>(this.baseUri + 'v4/config/info/defaults', {});
		}

		/**
		 * Request general settings
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
		 * ### Description:
		 * Returns a list of configurable general settings.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * List of configurable general settings is returned.
		 * ### Further Information:
		 * None.
		 * ### Configurable general settings:
		 * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description | Value |
		 * | :--- | :--- | :--- |
		 * | `sharePasswordSmsEnabled` | Determines whether sending of share passwords via SMS is allowed. | `true or false` |
		 * | `cryptoEnabled` | Determines whether client-side encryption is enabled.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
		 * | `emailNotificationButtonEnabled` | Determines whether email notification button is enabled. | `true or false` |
		 * | `eulaEnabled` | Determines whether EULA is enabled.<br>Each user has to confirm the EULA at first login. | `true or false` |
		 * | `useS3Storage` | Defines if S3 is used as storage backend.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
		 * | `s3TagsEnabled` | Determines whether S3 tags are enabled | `true or false` |
		 * | `homeRoomsActive` | Determines whether each AD user has a personal home room | `true or false` |
		 * | `homeRoomParentId` | Defines a node under which all personal home rooms are located. **NULL** if `homeRoomsActive` is `false` | `Long` |
		 * | `subscriptionPlan` | Subscription Plan. <br> 0 = Pro, 1 = Premium, 2 = Basic | `Integer` |
		 * </details>
		 * ### Deprecated general settings:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description | Value |
		 * | :--- | :--- | :--- |
		 * | <del>`mediaServerEnabled`</del> | Determines whether media server is enabled.<br>Returns boolean value dependent on conjunction of `mediaServerConfigEnabled` AND `mediaServerEnabled` | `true or false` |
		 * | <del>`weakPasswordEnabled`</del> | Determines whether weak password is allowed.<br>Use `GET /system/config/policies/passwords` API to get configured password policies. | `true or false` |
		 * </details>
		 * Get v4/config/info/general
		 * @return {GeneralSettingsInfo} OK
		 */
		RequestGeneralSettingsInfo(): Observable<GeneralSettingsInfo> {
			return this.http.get<GeneralSettingsInfo>(this.baseUri + 'v4/config/info/general', {});
		}

		/**
		 * Request infrastructure properties
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
		 * ### Description:
		 * Returns a list of read-only infrastructure properties.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * List of infrastructure properties is returned.
		 * ### Further Information:
		 * Source: `core-service.properties`
		 * ### Read-only infrastructure properties:
		 * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description | Value |
		 * | :--- | :--- | :--- |
		 * | `smsConfigEnabled` | Determines whether sending of share passwords via SMS is **system-wide** enabled. | `true or false` |
		 * | `mediaServerConfigEnabled` | Determines whether media server is **system-wide** enabled. | `true or false` |
		 * | `s3DefaultRegion` | Suggested S3 region | `Region name` |
		 * | `s3EnforceDirectUpload` | Enforce direct upload to S3 | `true or false` |
		 * | `isDracoonCloud` | Determines if the **DRACOON Core** is deployed in the cloud environment | `true or false` |
		 * | `tenantUuid` | Current tenant UUID | `UUID` |
		 * </details>
		 * Get v4/config/info/infrastructure
		 * @return {InfrastructureProperties} OK
		 */
		RequestInfrastructurePropertiesInfo(): Observable<InfrastructureProperties> {
			return this.http.get<InfrastructureProperties>(this.baseUri + 'v4/config/info/infrastructure', {});
		}

		/**
		 * Request list of notification channels
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
		 * ### Description:
		 * Retrieve a list of configured notification channels.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * List of notification channels is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/config/info/notifications/channels
		 * @return {NotificationChannelList} OK
		 */
		RequestNotificationChannelsInfo(): Observable<NotificationChannelList> {
			return this.http.get<NotificationChannelList>(this.baseUri + 'v4/config/info/notifications/channels', {});
		}

		/**
		 * Request algorithms
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
		 * ### Description:
		 * Retrieve a list of available algorithms used for encryption.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * List of available algorithms is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/config/info/policies/algorithms
		 * @return {AlgorithmVersionInfoList} OK
		 */
		RequestAlgorithms(): Observable<AlgorithmVersionInfoList> {
			return this.http.get<AlgorithmVersionInfoList>(this.baseUri + 'v4/config/info/policies/algorithms', {});
		}

		/**
		 * Request classification policies
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.30.0</h3>
		 * ### Description:
		 * Retrieve a list of classification policies:
		 * * `shareClassificationPolicies`
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * List of configured classification policies is returned.
		 * ### Further Information:
		 * `classificationRequiresSharePassword`: When a node has this classification or higher, it cannot be shared without a password. If the node is an encrypted file this policy has no effect. `0` means no password will be enforced.
		 * Get v4/config/info/policies/classifications
		 * @return {ClassificationPoliciesConfig} OK
		 */
		RequestClassificationPoliciesConfigInfo(): Observable<ClassificationPoliciesConfig> {
			return this.http.get<ClassificationPoliciesConfig>(this.baseUri + 'v4/config/info/policies/classifications', {});
		}

		/**
		 * Request guest users policies
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.40.0</h3>
		 * ### Description:
		 * Retrieve a list of guest users policies.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * List of configured guest users policies is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/config/info/policies/guest_users
		 * @return {GuestUsersPoliciesConfig} OK
		 */
		RequestGuestUsersPoliciesConfigInfo(): Observable<GuestUsersPoliciesConfig> {
			return this.http.get<GuestUsersPoliciesConfig>(this.baseUri + 'v4/config/info/policies/guest_users', {});
		}

		/**
		 * Request password policies
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.14.0</h3>
		 * ### Description:
		 * Retrieve a list of configured password policies for all password types:
		 * * `login`
		 * * `shares`
		 * * `encryption`
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * List of configured password policies is returned.
		 * ### Further Information:
		 * None.
		 * ### Available password policies:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Name | Description | Value | Password Type |
		 * | :--- | :--- | :--- | :--- |
		 * | `mustContainCharacters` | Characters which a password must contain:<br><ul><li>`alpha` - at least one alphabetical character (`uppercase` **OR** `lowercase`)<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z<br>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`uppercase` - at least one uppercase character<pre>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`lowercase` - at least one lowercase character<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z</pre></li><li>`numeric` - at least one numeric character<pre>0 1 2 3 4 5 6 7 8 9</pre></li><li>`special` - at least one special character (letters and digits excluded)<pre>! " # $ % ( ) * + , - . / : ; = ? @ [ \ ] ^ _ { &#124; } ~</pre></li><li>`none` - none of the above</li></ul> | <ul><li>`alpha`</li><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li><li>`special`</li><li>`none`</li></ul> | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `numberOfCharacteristicsToEnforce` | Number of characteristics to enforce.<br>e.g. from `["uppercase", "lowercase", "numeric", "special"]`<br>all 4 character sets can be enforced; but also only 2 of them | `Integer between 0 and 4` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `minLength` | Minimum number of characters a password must contain. | `Integer between 1 and 1024` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `rejectDictionaryWords` | Determines whether a password must **NOT** contain word(s) from a dictionary.<br>In `core-service.properties` a path to directory with dictionary files (`*.txt`) can be defined<br>cf. `policies.passwords.dictionary.directory`.<br><br>If this rule gets enabled `policies.passwords.dictionary.directory` must be defined and contain dictionary files.<br>Otherwise, the rule will not have any effect on password validation process. | `true or false` | <ul><li>`login`</li><li>`shares`</li></ul> |
		 * | `rejectUserInfo` | Determines whether a password must **NOT** contain user info.<br>Affects user's **first name**, **last name**, **email** and **user name**. | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `rejectKeyboardPatterns` | Determines whether a password must **NOT** contain keyboard patterns.<br>e.g. `qwertz`, `asdf` (min. 4 character pattern) | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `numberOfArchivedPasswords` | Number of passwords to archive.<br>Value `0` means that password history is disabled. | `Integer between 0 and 10` | <ul><li>`login`</li></ul> |
		 * | `passwordExpiration.enabled` | Determines whether password expiration is enabled. | `true or false` | <ul><li>`login`</li></ul> |
		 * | `maxPasswordAge` | Maximum allowed password age (in **days**) | `positive Integer` | <ul><li>`login`</li></ul> |
		 * | `userLockout.enabled` | Determines whether user lockout is enabled. | `true or false` | <ul><li>`login`</li></ul> |
		 * | `maxNumberOfLoginFailures` | Maximum allowed number of failed login attempts. | `positive Integer` | <ul><li>`login`</li></ul> |
		 * | `lockoutPeriod` | Amount of **minutes** a user has to wait to make another login attempt<br>after `maxNumberOfLoginFailures` has been exceeded. | `positive Integer` | <ul><li>`login`</li></ul> |
		 * </details>
		 * Get v4/config/info/policies/passwords
		 * @return {PasswordPoliciesConfig} OK
		 */
		RequestPasswordPoliciesConfigInfo(): Observable<PasswordPoliciesConfig> {
			return this.http.get<PasswordPoliciesConfig>(this.baseUri + 'v4/config/info/policies/passwords', {});
		}

		/**
		 * Request list of product packages
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.38.0</h3>
		 * ### Description:
		 * Returns a list of product packages.
		 * ### Precondition:
		 * Authenticated user
		 * ### Postcondition:
		 * List of Product Packages is returned.
		 * ### Further Information:
		 * Get v4/config/info/product_packages
		 * @return {ProductPackageResponseList} OK
		 */
		RequestProductPackages(): Observable<ProductPackageResponseList> {
			return this.http.get<ProductPackageResponseList>(this.baseUri + 'v4/config/info/product_packages', {});
		}

		/**
		 * Request list of currently enabled product packages
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.38.0</h3>
		 * ### Description:
		 * Returns a list of currently enabled product packages.
		 * ### Precondition:
		 * Authenticated user
		 * ### Postcondition:
		 * List of currently enabled Product Packages is returned.
		 * ### Further Information:
		 * Get v4/config/info/product_packages/current
		 * @return {ProductPackageResponseList} OK
		 */
		RequestCurrentProductPackages(): Observable<ProductPackageResponseList> {
			return this.http.get<ProductPackageResponseList>(this.baseUri + 'v4/config/info/product_packages/current', {});
		}

		/**
		 * Request list of configured S3 tags
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
		 * ### Description:
		 * Retrieve all configured S3 tags.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * List of configured S3 tags is returned.
		 * ### Further Information:
		 * An empty list is returned if no S3 tags are found / configured.
		 * Get v4/config/info/s3_tags
		 * @return {S3TagList} OK
		 */
		RequestS3TagsInfo(): Observable<S3TagList> {
			return this.http.get<S3TagList>(this.baseUri + 'v4/config/info/s3_tags', {});
		}

		/**
		 * Request system settings
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.6.0</h3>
		 * ### Description:
		 * Returns a list of configurable system settings.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> required.
		 * ### Postcondition:
		 * List of configurable settings is returned.
		 * ### Further Information:
		 * Check for every settings key new corresponding API and key below.
		 * If `eula_active` is true, but **NOT** accepted yet, or password **MUST** be changed, only the following two values are returned:
		 * * `allow_system_global_weak_password`
		 * * `eula_active`
		 * ### Configurable settings
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description | Value |
		 * | :--- | :--- | :--- |
		 * | `branding_server_branding_id` | The branding UUID, which corresponds to _BRANDING-QUALIFIER_ in the new branding server.<br>cf. `GET /system/config/settings/branding` `BrandingConfig.brandingQualifier` | `String` |
		 * | `branding_portal_url` | Access URL to to the Branding Portal<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/branding` `BrandingConfig.brandingProviderUrl` | `String` |
		 * | `dblog` | Write logs to local database.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/eventlog` `EventlogConfig.enabled` | `true or false` |
		 * | `default_downloadshare_expiration_period` | Default expiration period for Download Shares in days<br>cf. `GET /system/config/settings/defaults` `SystemDefaults.downloadShareDefaultExpirationPeriod` | `Integer between 0 and 9999` |
		 * | `default_file_upload_expiration_date` | Default expiration period for all uploaded files in days<br>cf. `GET /system/config/settings/defaults` `SystemDefaults.fileDefaultExpirationPeriod` | `Integer between 0 and 9999` |
		 * | `default_language` | Define which language should be default.<br>cf. `GET /system/config/settings/defaults` `SystemDefaults.languageDefault` | cf. `GET /public/system/info` - `SystemInfo.languageDefault` |
		 * | `default_uploadshare_expiration_period` | Default expiration period for Upload Shares in days<br>cf. `GET /system/config/settings/defaults` `SystemDefaults.uploadShareDefaultExpirationPeriod` | `Integer between 0 and 9999` |
		 * | `enable_client_side_crypto` | Activation status of client-side encryption<br>Can only be enabled once; disabling is **NOT** possible.<br>cf. `GET /system/config/settings/general` `GeneralSettings.cryptoEnabled` | `true or false`<br>default: `false` |
		 * | `eula_active` | Each user has to confirm the EULA at first login.<br>cf. `GET /system/config/settings/general` `GeneralSettings.eulaEnabled` | `true or false` |
		 * | `eventlog_retention_period` | Retention period (in days) of event log entries<br>After that period, all entries are deleted.<br>cf. `GET /system/config/settings/eventlog` `EventlogConfig.retentionPeriod` | `Integer between 0 and 9999`<br>If set to `0`: no logs are deleted<br>Recommended value: `7` |
		 * | `ip_address_logging` | Determines whether a user's IP address is logged.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/eventlog` `EventlogConfig.logIpEnabled`<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.logIpEnabled` | `true or false` |
		 * | `mailserver` | Email server to send emails.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.host` | `DNS name or IPv4 of an email server` |
		 * | `mailserver_authentication_necessary` | Set to `true` if the email server requires authentication.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.authenticationEnabled` | `true or false` |
		 * | `mailserver_password` | **Password is no longer returned.**<br>Check `mailserver_password_set` to determine whether password is set. |  |
		 * | `mailserver_password_set` | Indicates if a password is set for the mailserver (because `mailserver_password` is always returned empty).<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.passwordDefined` | `true or false` |
		 * | `mailserver_port` | Email server port<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.port` | `Valid port number` |
		 * | `mailserver_username` | User ame for email server<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.username` | `Username for authentication` |
		 * | `mailserver_use_ssl` | Email server requires SSL connection?<br>Only visible for _Config Manager_ of Provider Customer.<br>Requires `mailserver_use_starttls` to be `false`<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.username` | `true or false` |
		 * | `mailserver_use_starttls` | Email server requires StartTLS connection?<br>Only visible for _Config Manager_ of Provider Customer.<br>Requires `mailserver_use_ssl` to be `false`<br>cf. `GET /system/config/settings/mail_server` `MailServerConfig.starttlsEnabled` | `true or false` |
		 * | `syslog` | Write logs to a syslog interface.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.enabled` | `true or false` |
		 * | `syslog_host` | Syslog server (IP or FQDN)<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.host` | `DNS name or IPv4 of a syslog server` |
		 * | `syslog_port` | Syslog server port<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.port` | `Valid port number` |
		 * | `syslog_protocol` | Protocol to connect to syslog server.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `GET /system/config/settings/syslog` `SyslogConfig.protocol` | `TCP or UDP` |
		 * | `enable_email_notification_button` | Enable mail notification button.<br>cf. `GET /system/config/settings/general` `GeneralSettings.emailNotificationButtonEnabled` | `true or false` |
		 * | `allow_share_password_sms` | Allow sending of share passwords via SMS.<br>cf. `GET /system/config/settings/general` `GeneralSettings.sharePasswordSmsEnabled` | `true or false` |
		 * | `globally_allow_share_password_sms` | Allow sending of share passwords via SMS **system-wide** (read-only).<br>cf. `GET /system/config/settings/infrastructure` `InfrastructureProperties.smsConfigEnabled` | `true or false` |
		 * | `use_s3_storage` | Defines if S3 is used as storage backend.<br>Can only be enabled once; disabling is **NOT** possible.<br>cf. `GET /system/config/settings/general` `GeneralSettings.useS3Storage` | `true or false` |
		 * | `s3_default_region` |Suggested S3 region (read-only)<br>cf. `GET /system/config/settings/infrastructure` `InfrastructureProperties.s3DefaultRegion` | `Region name` |
		 * </details>
		 * ### Deprecated settings
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description | Value |
		 * | :--- | :--- | :--- |
		 * | <del>`allow_system_global_weak_password`</del> | Determines whether weak password (cf. _Password Policy_ below) is allowed.<br>cf. `GET /system/config/settings/general` `GeneralSettings.weakPasswordEnabled`<br>Use `GET /system/config/policies/passwords` API to get configured password policies. | `true or false` |
		 * | <del>`branding_server_customer`</del> | The UUID of the branding server customer, which corresponds to customer key in the branding server. | `String` |
		 * | <del>`branding_server_url`</del> | Access URL to to the Branding Server.<br>Only visible for _Config Manager_ of Provider Customer. | `String` |
		 * | <del>`email_from`</del> | Sender of system-generated emails<br>Only visible for _Config Manager_ of Provider Customer.<br>**Moved to branding** | `Valid email address` |
		 * | <del>`email_to_sales`</del> | Contact email address for customers to request more user licenses or data volume.<br>**Moved to branding** | `Valid email address` |
		 * | <del>`email_to_support`</del> | Support email address for users<br>**Moved to branding** | `Valid email address` |
		 * | <del>`file_size_js`</del> | Maximum file size (in bytes) for downloads of encrypted files with JavaScript.<br>Bigger files will require a JavaApplet. | `Integer`<br>Recommended value: `10485760` (=`10MB`) |
		 * | <del>`system_name`</del> | System name<br>**Moved to branding** use `product.title` | `Display name of the DRACOON` |
		 * </details>
		 * Get v4/config/settings
		 * @return {ConfigOptionList} OK
		 */
		RequestSystemSettings(): Observable<ConfigOptionList> {
			return this.http.get<ConfigOptionList>(this.baseUri + 'v4/config/settings', {});
		}

		/**
		 * Update system settings
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.6.0</h3>
		 * ### Description:
		 * Update configurable settings.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * One or more global settings gets changed.
		 * ### Further Information:
		 * This API is deprecated and will be removed in the future.
		 * Check for every settings key new corresponding API and key below.
		 * ### Configurable settings:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description | Value |
		 * | :--- | :--- | :--- |
		 * | `branding_server_branding_id` | The branding UUID, which corresponds to _BRANDING-QUALIFIER_ in the new branding server.<br>cf. `PUT /system/config/settings/branding` `BrandingConfig.brandingQualifier` | `String` |
		 * | `branding_portal_url` | Access URL to to the Branding Portal<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/branding` `BrandingConfig.brandingProviderUrl` | `String` |
		 * | `dblog` | Write logs to local database.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/eventlog` `EventlogConfig.enabled` | `true or false` |
		 * | `default_downloadshare_expiration_period` | Default expiration period for Download Shares in days<br>cf. `PUT /system/config/settings/defaults` `SystemDefaults.downloadShareDefaultExpirationPeriod` | `Integer between 0 and 9999`<br>Set `0` to disable. |
		 * | `default_file_upload_expiration_date` | Default expiration period for all uploaded files in days<br>cf. `PUT /system/config/settings/defaults` `SystemDefaults.fileDefaultExpirationPeriod` | `Integer between 0 and 9999`<br>Set `0` to disable. |
		 * | `default_language` | Define which language should be default.<br>cf. `PUT /system/config/settings/defaults` `SystemDefaults.languageDefault` | cf. `GET /public/system/info` - `SystemInfo.languageDefault` |
		 * | `default_uploadshare_expiration_period` | Default expiration period for Upload Shares in days<br>cf. `PUT /system/config/settings/defaults` `SystemDefaults.uploadShareDefaultExpirationPeriod` | `Integer between 0 and 9999`<br>Set `0` to disable. |
		 * | `enable_client_side_crypto` | Activation status of client-side encryption<br>Can only be enabled once; disabling is **NOT** possible.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.cryptoEnabled` | `true or false`<br>default: `false` |
		 * | `eula_active` | Each user has to confirm the EULA at first login.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.eulaEnabled` | `true or false` |
		 * | `eventlog_retention_period` | Retention period (in days) of event log entries<br>After that period, all entries are deleted.<br>cf. `PUT /system/config/settings/eventlog` `EventlogConfig.retentionPeriod` | `Integer between 0 and 9999`<br>If set to `0`: no logs are deleted<br>Recommended value: `7` |
		 * | `ip_address_logging` | Determines whether a user's IP address is logged.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/eventlog` `EventlogConfig.logIpEnabled`<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.logIpEnabled` | `true or false` |
		 * | `mailserver` | Email server to send emails.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.host` | `DNS name or IPv4 of an email server` |
		 * | `mailserver_authentication_necessary` | Set to `true` if the email server requires authentication.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.authenticationEnabled` | `true or false` |
		 * | `mailserver_password` | Password for email server<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.password` | `Password for authentication` |
		 * | `mailserver_port` | Email server port<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.port` | `Valid port number` |
		 * | `mailserver_username` | Username for email server<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.username` | `Username for authentication` |
		 * | `mailserver_use_ssl` | Email server requires SSL connection?<br>Only visible for _Config Manager_ of Provider Customer.<br>Requires `mailserver_use_starttls` to be `false`<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.username` | `true or false` |
		 * | `mailserver_use_starttls` | Email server requires StartTLS connection?<br>Only visible for _Config Manager_ of Provider Customer.<br>Requires `mailserver_use_ssl` to be `false`<br>cf. `PUT /system/config/settings/mail_server` `MailServerConfig.starttlsEnabled` | `true or false` |
		 * | `syslog` | Write logs to a syslog interface.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.enabled` | `true or false` |
		 * | `syslog_host` | Syslog server (IP or FQDN)<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.host` | `DNS name or IPv4 of a syslog server` |
		 * | `syslog_port` | Syslog server port<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.port` | `Valid port number` |
		 * | `syslog_protocol` | Protocol to connect to syslog server.<br>Only visible for _Config Manager_ of Provider Customer.<br>cf. `PUT /system/config/settings/syslog` `SyslogConfig.protocol` | `TCP or UDP` |
		 * | `enable_email_notification_button` | Enable mail notification button.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.emailNotificationButtonEnabled` | `true or false` |
		 * | `allow_share_password_sms` | Allow sending of share passwords via SMS.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.sharePasswordSmsEnabled` | `true or false` |
		 * </details>
		 * ### Deprecated settings:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description | Value |
		 * | :--- | :--- | :--- |
		 * | <del>`allow_system_global_weak_password`</del> | Determines whether weak password (cf. _Password Policy_ below) is allowed.<br>cf. `PUT /system/config/settings/general` `GeneralSettings.weakPasswordEnabled`<br>Use `PUT /system/config/policies/passwords` API to change configured password policies. | `true or false` |
		 * | <del>`branding_server_customer`</del> | The UUID of the branding server customer, which corresponds to customer key in the branding server. | `String` |
		 * | <del>`branding_server_url`</del> | Access URL to to the Branding Server.<br>Only visible for _Config Manager_ of Provider Customer. | `String` |
		 * | <del>`email_from`</del> | Sender of system-generated emails<br>Only visible for _Config Manager_ of Provider Customer.<br>**Moved to branding** | `Valid email address` |
		 * | <del>`email_to_sales`</del> | Contact email address for customers to request more user licenses or data volume.<br>**Moved to branding** | `Valid email address` |
		 * | <del>`email_to_support`</del> | Support email address for users<br>**Moved to branding** | `Valid email address` |
		 * | <del>`file_size_js`</del> | Maximum file size (in bytes) for downloads of encrypted files with JavaScript.<br>Bigger files will require a JavaApplet. | `Integer`<br>Recommended value: `10485760` (=`10MB`) |
		 * | <del>`system_name`</del> | System name<br>**Moved to branding** use `product.title` | `Display name of the DRACOON` |
		 * </details>
		 * Put v4/config/settings
		 * @return {void} 
		 */
		UpdateSystemSettings(requestBody: ConfigOptionList): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/config/settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Download avatar
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
		 * ### Description:
		 * Download avatar for given user ID and UUID.
		 * ### Precondition:
		 * Valid UUID.
		 * ### Postcondition:
		 * Stream is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/downloads/avatar/{user_id}/{uuid}
		 * @param {string} user_id User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} uuid UUID of the avatar
		 * @return {void} OK
		 */
		DownloadAvatar(user_id: string, uuid: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/downloads/avatar/' + user_id + '/' + (uuid == null ? '' : encodeURIComponent(uuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Download ZIP archive
		 * ### Description:
		 * Download multiple files in a ZIP archive.
		 * ### Precondition:
		 * Valid download token.
		 * ### Postcondition:
		 * Stream is returned.
		 * ### Further Information:
		 * Create a download token with `POST /nodes/zip` API.
		 * Get v4/downloads/zip/{token}
		 * @param {string} token Download token
		 * @return {void} OK
		 */
		DownloadZipArchiveViaToken(token: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/downloads/zip/' + (token == null ? '' : encodeURIComponent(token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Download file
		 * ### Description:
		 * Download a file.
		 * ### Precondition:
		 * Valid download token.
		 * ### Postcondition:
		 * Stream is returned.
		 * ### Further Information:
		 * Range requests are supported.
		 * Get v4/downloads/{token}
		 * @param {string} token Download token
		 * @param {boolean} generic_mimetype Always return `application/octet-stream` instead of specific mimetype
		 * @param {boolean} inline Use Content-Disposition: `inline` instead of `attachment`
		 * @return {void} OK
		 */
		DownloadFileViaToken(token: string, generic_mimetype: boolean | null | undefined, inline: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/downloads/' + (token == null ? '' : encodeURIComponent(token)) + '&generic_mimetype=' + generic_mimetype + '&inline=' + inline, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request nodes
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.31.0</h3>
		 * ### Description:
		 * Retrieve a list of all nodes of type room under a certain parent.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read audit log</span> required.
		 * ### Postcondition:
		 * List of rooms.
		 * ### Further Information:
		 * For rooms on root level, use parent_id = 0.
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `nodeName:cn:searchString_1|nodeIsEncrypted:eq:true`
		 * Filter by node name containing `searchString_1` **AND** node is encrypted .
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `nodeId` | Node ID filter | `eq` | Node ID equals value. | `positive Integer` |
		 * | `nodeName` | Node name filter | `cn, eq, sw` | Node name contains / equals / starts with value. | `search String` |
		 * | `nodeIsEncrypted` | Encrypted node filter | `eq` |  | `true or false` |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort fields are supported.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `nodeName:asc`
		 * Sort by `nodeName` ascending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `nodeId` | Node ID |
		 * | `nodeName` | Node name |
		 * </details>
		 * Get v4/eventlog/audits/node_info
		 * @param {string} parent_id Parent node ID.
		 * Only rooms can be parents.
		 * Parent ID `0` or empty is the root node.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @return {AuditNodeInfoResponse} OK
		 */
		RequestAuditNodeInfo(parent_id: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined, sort: string | null | undefined): Observable<AuditNodeInfoResponse> {
			return this.http.get<AuditNodeInfoResponse>(this.baseUri + 'v4/eventlog/audits/node_info?parent_id=' + parent_id + '&offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Request node assigned users with permissions
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.32.0</h3>
		 * ### Description:
		 * Retrieve a list of all nodes of type room, and the room assignment users with permissions.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read audit log</span> required.
		 * ### Postcondition:
		 * List of rooms and their assigned users is returned.
		 * ### Further Information:
		 * Output is limited to **500** entries.
		 * For more results please use filter criteria and the `limit` parameter.
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Except for `userName`, `userFirstName` and  `userLastName` - these are connected via logical disjunction (**OR**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `userName:cn:searchString_1|userFirstName:cn:searchString_2|nodeId:eq:2`
		 * Filter by user login containing `searchString_1` **OR** first name containing `searchString_2` **AND** node ID equals `2`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `nodeId` | Node ID filter | `eq` | Node ID equals value. | `positive Integer` |
		 * | `nodeName` | Node name filter | `cn, eq` | Node name contains / equals value. | `search String` |
		 * | `nodeParentId` | Node parent ID filter | `eq` | Parent ID equals value. | `positive Integer`<br>Parent ID `0` is the root node. |
		 * | `userId` | User ID filter | `eq` | User ID equals value. | `positive Integer` |
		 * | `userName` | Username (login) filter | `cn, eq` | Username contains / equals value. | `search String` |
		 * | `userFirstName` | User first name filter | `cn, eq` | User first name contains / equals value. | `search String` |
		 * | `userLastName` | User last name filter | `cn, eq` | User last name contains / equals value. | `search String` |
		 * | `permissionsManage` | Filter the users that do (not) have `manage` permissions in this room | `eq` |  | `true or false` |
		 * | `nodeIsEncrypted` | Encrypted node filter | `eq` |  | `true or false` |
		 * | `nodeHasActivitiesLog` | Activities log filter | `eq` |  | `true or false` |
		 * </details>
		 * ### Deprecated filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | <del>`nodeHasRecycleBin`</del> | Recycle bin filter<br>**Filter has no effect!** | `eq` |  | `true or false` |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort fields are supported.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `nodeName:asc`
		 * Sort by `nodeName` ascending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `nodeId` | Node ID |
		 * | `nodeName` | Node name |
		 * | `nodeParentId` | Node parent ID |
		 * | `nodeSize` | Node size |
		 * | `nodeQuota` | Node quota |
		 * </details>
		 * Get v4/eventlog/audits/nodes
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @return {Array<AuditNodeResponse>} OK
		 */
		RequestAuditNodeUserData(offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined, sort: string | null | undefined): Observable<Array<AuditNodeResponse>> {
			return this.http.get<Array<AuditNodeResponse>>(this.baseUri + 'v4/eventlog/audits/nodes?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Request system events
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>
		 * ### Description:
		 * Retrieve eventlog (audit log) events.
		 * ### Precondition:
		 * Role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Log Auditor</span> required.
		 * ### Postcondition:
		 * List of audit log events is returned.
		 * ### Further Information:
		 * Output is limited to **500** entries.
		 * For more results please use filter criteria and paging (`offset` + `limit`).
		 * Allowed `Accept-Header`:
		 * * `Accept: application/json`
		 * * `Accept: text/csv`
		 * ---
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort fields are supported.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `time:desc`
		 * Sort by `time` descending (default sort option).
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `time` | Event timestamp |
		 * </details>
		 * Get v4/eventlog/events
		 * @param {string} sort Sort string
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} date_start Filter events from given date 
		 * e.g. `2015-12-31T23:59:00`
		 * @param {string} date_end Filter events until given date 
		 * e.g. `2015-12-31T23:59:00`
		 * @param {number} type Operation ID 
		 * cf. `GET /eventlog/operations`
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} user_id User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {LogEventStatus} status Operation status:
		 * * `0` - Success
		 * * `2` - Error
		 * @param {string} user_client User client
		 * @return {LogEventList} OK
		 */
		RequestLogEventsAsJson(sort: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, date_start: string | null | undefined, date_end: string | null | undefined, type: number | null | undefined, user_id: string | null | undefined, status: LogEventStatus | null | undefined, user_client: string | null | undefined): Observable<LogEventList> {
			return this.http.get<LogEventList>(this.baseUri + 'v4/eventlog/events?sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&offset=' + offset + '&limit=' + limit + '&date_start=' + (date_start == null ? '' : encodeURIComponent(date_start)) + '&date_end=' + (date_end == null ? '' : encodeURIComponent(date_end)) + '&type=' + type + '&user_id=' + user_id + '&status=' + status + '&user_client=' + (user_client == null ? '' : encodeURIComponent(user_client)), {});
		}

		/**
		 * Request allowed Log Operations
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>
		 * ### Description:
		 * Retrieve eventlog (audit log) operation IDs and the associated log operation description.
		 * ### Precondition:
		 * Role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Log Auditor</span> required.
		 * ### Postcondition:
		 * List of available log operations is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/eventlog/operations
		 * @param {boolean} is_deprecated Show only deprecated operations
		 * @return {LogOperationList} OK
		 */
		RequestLogOperations(is_deprecated: boolean | null | undefined): Observable<LogOperationList> {
			return this.http.get<LogOperationList>(this.baseUri + 'v4/eventlog/operations?is_deprecated=' + is_deprecated, {});
		}

		/**
		 * Request list of user groups
		 * ### Description:
		 * Returns a list of user groups.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.
		 * ### Postcondition:
		 * List of user groups is returned.
		 * ### Further Information:
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `name:cn:searchString`
		 * Filter by group name containing `searchString`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `name` | Group name filter | `cn` | Group name contains value. | `search String` |
		 * | `hasRole` | (**`NEW`**) Group role filter<br>For more information about roles check **`GET /roles`** API | `eq` | Group role equals value. | <ul><li>`CONFIG_MANAGER` - Manages global configuration</li><li>`USER_MANAGER` - Manages users</li><li>`GROUP_MANAGER` - Manages user groups</li><li>`ROOM_MANAGER` - Manages top level rooms</li><li>`LOG_AUDITOR` - Reads audit logs</li><li>`NONMEMBER_VIEWER` - Views users and groups when having room _"manage"_ permission</li></ul> |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort fields are supported.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `name:asc|expireAt:desc`
		 * Sort by `name` ascending **AND** by `expireAt` descending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `name` | Group name |
		 * | `createdAt` | Creation date |
		 * | `expireAt` | Expiration date |
		 * | `cntUsers` | Amount of users |
		 * </details>
		 * Get v4/groups
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @return {GroupList} OK
		 */
		RequestGroups(offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined, sort: string | null | undefined): Observable<GroupList> {
			return this.http.get<GroupList>(this.baseUri + 'v4/groups?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Create new user group
		 * ### Description:
		 * Create a new user group.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.
		 * ### Postcondition:
		 * A new user group is created.
		 * ### Further Information:
		 * * If a group should **NOT** expire, leave `expireAt` empty.
		 * * Group names are limited to **150** characters
		 * * Forbidden characters in group name: [`<`, `>`]
		 * Post v4/groups
		 * @return {void} 
		 */
		CreateGroup(requestBody: CreateGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove user group
		 * ### Description:
		 * Delete a user group.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete groups</span> required.
		 * ### Postcondition:
		 * User group is deleted.
		 * ### Further Information:
		 * None.
		 * Delete v4/groups/{group_id}
		 * @param {string} group_id Group ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		RemoveGroup(group_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/groups/' + group_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request user group
		 * ### Description:
		 * Retrieve detailed information about a user group.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.
		 * ### Postcondition:
		 * User group is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/groups/{group_id}
		 * @param {string} group_id Group ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Group} OK
		 */
		RequestGroup(group_id: string): Observable<Group> {
			return this.http.get<Group>(this.baseUri + 'v4/groups/' + group_id, {});
		}

		/**
		 * Update user group's metadata
		 * ### Description:
		 * Update user group's metadata .
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.
		 * ### Postcondition:
		 * User group's metadata is changed.
		 * ### Further Information:
		 * * If a group should **NOT** expire, leave `expireAt` empty.
		 * * Group names are limited to **150** characters
		 * * **All** characters are allowed.
		 * Put v4/groups/{group_id}
		 * @param {string} group_id Group ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Group} OK
		 */
		UpdateGroup(group_id: string, requestBody: UpdateGroupRequest): Observable<Group> {
			return this.http.put<Group>(this.baseUri + 'v4/groups/' + group_id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request rooms where the group is defined as last admin group
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
		 * ### Description:
		 * Retrieve a list of all rooms where the group is defined as last admin group.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.
		 * ### Postcondition:
		 * List of rooms is returned.
		 * ### Further Information:
		 * An empty list is returned if no rooms were found where the group is defined as last admin group.
		 * Get v4/groups/{group_id}/last_admin_rooms
		 * @param {string} group_id Group ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {LastAdminGroupRoomList} OK
		 */
		RequestLastAdminRoomsGroups(group_id: string): Observable<LastAdminGroupRoomList> {
			return this.http.get<LastAdminGroupRoomList>(this.baseUri + 'v4/groups/' + group_id + '/last_admin_rooms', {});
		}

		/**
		 * Request list of roles assigned to the group
		 * ### Description:
		 * Retrieve a list of all roles granted to a group.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.
		 * ### Postcondition:
		 * List of granted roles is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/groups/{group_id}/roles
		 * @param {string} group_id Group ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {RoleList} OK
		 */
		RequestGroupRoles(group_id: string): Observable<RoleList> {
			return this.http.get<RoleList>(this.baseUri + 'v4/groups/' + group_id + '/roles', {});
		}

		/**
		 * Request rooms granted to the group or / and rooms that can be granted
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.10.0</h3>
		 * ### Description:
		 * Retrieves a list of rooms granted to the group and / or that can be granted.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.
		 * ### Postcondition:
		 * List of rooms is returned.
		 * ### Further Information:
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `isGranted:eq:false|name:cn:searchString`
		 * Get all rooms where the group is **NOT** granted **AND** whose name is like `searchString`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `name` | Room name filter | `cn` | Room name contains value. | `search String` |
		 * | `isGranted` | Filter rooms which the group is (not) granted | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
		 * | `effectivePerm` | Filter rooms with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`:  DIRECT **AND** EFFECTIVE permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**. | `eq` |  | `true or false`<br>default: `true` |
		 * </details>
		 * Get v4/groups/{group_id}/rooms
		 * @param {string} group_id Group ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @return {RoomTreeDataList} OK
		 */
		RequestGroupRooms(group_id: string, offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined): Observable<RoomTreeDataList> {
			return this.http.get<RoomTreeDataList>(this.baseUri + 'v4/groups/' + group_id + '/rooms?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Remove group members
		 * ### Description:
		 * Remove group members.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.
		 * ### Postcondition:
		 * Provided users are removed from the user group.
		 * ### Further Information:
		 * Batch function.
		 * The provided users are removed from the user group. Maximum number of users to remove in one request is 200.
		 * Delete v4/groups/{group_id}/users
		 * @param {string} group_id Group ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Group} OK
		 */
		RemoveGroupMembers(group_id: string): Observable<Group> {
			return this.http.delete<Group>(this.baseUri + 'v4/groups/' + group_id + '/users', {});
		}

		/**
		 * Request group member users or / and users who can become a member
		 * ### Description:
		 * Retrieve a list of group member users or / and users who can become a member.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.
		 * ### Postcondition:
		 * List of users is returned.
		 * ### Further Information:
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `isMember:eq:false|user:cn:searchString`
		 * Get all users that are **NOT** in this group **AND** whose (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) is like `searchString`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `user` | User filter | `cn` | User contains value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`). | `search String` |
		 * | `isMember` | Filter group members | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
		 * </details>
		 * ### Deprecated filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | <del>`displayName`</del> | User display name filter (use `user` filter) | `cn` | User display name contains value (`firstName` **OR** `lastName` **OR** `email`). | `search String` |
		 * </details>
		 * Get v4/groups/{group_id}/users
		 * @param {string} group_id Group ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @return {GroupUserList} OK
		 */
		RequestGroupMembers(group_id: string, offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined): Observable<GroupUserList> {
			return this.http.get<GroupUserList>(this.baseUri + 'v4/groups/' + group_id + '/users?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Add group members
		 * ### Description:
		 * Add members to a group.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change groups</span> required.
		 * ### Postcondition:
		 * New members are added to the group.
		 * ### Further Information:
		 * Batch function.
		 * The newly provided members will be added to the existing ones.
		 * Post v4/groups/{group_id}/users
		 * @param {string} group_id Group ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Group} OK
		 */
		AddGroupMembers(group_id: string, requestBody: ChangeGroupMembersRequest): Observable<Group> {
			return this.http.post<Group>(this.baseUri + 'v4/groups/' + group_id + '/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request subscription plan
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.36.0</h3>
		 * ### Description:
		 * Get the subscription plan id of the current tenant
		 * ### Precondition:
		 * Valid `X-SDS-Service-Token` Header
		 * ### Postcondition:
		 * Returns SubscriptionPlanResponse model that includes subscription plan id.
		 * ### Further Information:
		 * None.
		 * Get v4/internal/tenant/subscription_plan
		 * @return {SubscriptionPlanResponse} OK
		 */
		InternalRequestSubscriptionPlan(): Observable<SubscriptionPlanResponse> {
			return this.http.get<SubscriptionPlanResponse>(this.baseUri + 'v4/internal/tenant/subscription_plan', {});
		}

		/**
		 * Set subscription plan
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.36.0</h3>
		 * ### Description:
		 * Change the subscription plan id of the current tenant
		 * ### Precondition:
		 * Valid `X-SDS-Service-Token` Header
		 * ### Postcondition:
		 * The subscription plan of the current tenant is set to the given value.
		 * Returns SubscriptionPlanResponse model that includes subscription plan id.
		 * ### Further Information:
		 * None.
		 * Put v4/internal/tenant/subscription_plan
		 * @return {SubscriptionPlanResponse} OK
		 */
		InternalSetSubscriptionPlan(requestBody: SubscriptionPlanRequest): Observable<SubscriptionPlanResponse> {
			return this.http.put<SubscriptionPlanResponse>(this.baseUri + 'v4/internal/tenant/subscription_plan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove nodes
		 * ### Description:
		 * Delete nodes (room, folder or file).
		 * ### Precondition:
		 * Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete</span> permissions on supplied nodes (for folders or files) or on superordinated node (for rooms).
		 * ### Postcondition:
		 * Nodes are deleted.
		 * ### Further Information:
		 * Nodes **MUST** be in same parent.
		 * Delete v4/nodes
		 * @return {void} 
		 */
		RemoveNodes(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/nodes', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request list of nodes
		 * ### Description:
		 * Provides a hierarchical list of file system nodes (rooms, folders or files) of a given parent that are accessible by the current user.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * List of nodes is returned.
		 * ### Further Information:
		 * `EncryptionInfo` is **NOT** provided.
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `type:eq:room:folder|perm:eq:read`
		 * Get nodes where type equals (`room` **OR** `folder`) **AND** user has `read` permissions.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `type` | Node type filter | `eq` | Node type equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `type:eq:room:folder` | <ul><li>`room`</li><li>`folder`</li><li>`file`</li></ul> |
		 * | `perm` | Permission filter | `eq` | Permission equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `perm:eq:read:create:delete` | <ul><li>`manage`</li><li>`read`</li><li>`change`</li><li>`create`</li><li>`delete`</li><li>`manageDownloadShare`</li><li>`manageUploadShare`</li><li>`canReadRecycleBin`</li><li>`canRestoreRecycleBin`</li><li>`canDeleteRecycleBin`</li></ul> |
		 * | `childPerm` | Same as `perm`, but less restrictive (applies to child nodes only).<br>Child nodes of the parent node which do not meet the filter condition<br>are **NOT** returned. | `eq` | cf. `perm` | cf. `perm` |
		 * | `name` | Node name filter | `cn, eq` | Node name contains / equals value. | `search String` |
		 * | `encrypted` | Node encryption status filter | `eq` |  | `true or false` |
		 * | `branchVersion` | Node branch version filter | `ge, le` | Branch version is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `branchVersion:ge:1423280937404`&#124;`branchVersion:le:1523280937404` | `version number` |
		 * | `timestampCreation` | Creation timestamp filter | `ge, le` | Creation timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampCreation:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampCreation:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |
		 * | `timestampModification` | Modification timestamp filter | `ge, le` | Modification timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampModification:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampModification:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |
		 * | `referenceId`           | Reference ID filter               | `eq` | Reference ID equals value.   | `Integer ` |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort criteria are possible.
		 * Fields are connected via logical conjunction **AND**.
		 * Nodes are sorted by type first, then by sent sort string.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `name:desc|fileType:asc`
		 * Sort by `name` descending **AND** `fileType` ascending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `name` | Node name |
		 * | `createdAt` | Creation date |
		 * | `createdBy` | Creator first name, last name |
		 * | `updatedAt` | Last modification date |
		 * | `updatedBy` | Last modifier first name, last name |
		 * | `fileType` | File type (extension) |
		 * | `classification` | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |
		 * | `size` | Node size |
		 * | `cntDeletedVersions` | Number of deleted versions of this file / folder (**NOT** recursive; for files and folders only) |
		 * | `timestampCreation` | Creation timestamp |
		 * | `timestampModification` | Modification timestamp |
		 * </details>
		 * ### Deprecated sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | <del>`cntChildren`</del> | Number of direct children (**NOT** recursive; for rooms and folders only) |
		 * </details>
		 * Get v4/nodes
		 * @param {number} depth_level * `0` - top level nodes only
		 * * `n` (any positive number) - include `n` levels starting from the current node
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} parent_id Parent node ID.
		 * Only rooms and folders can be parents.
		 * Parent ID `0` or empty is the root node.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {boolean} room_manager Show all rooms for management perspective.
		 * Only possible for _Rooms Managers_ / _Room Admins_.
		 * For all other users, it will be ignored.
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {NodeList} OK
		 */
		RequestNodes(depth_level: number | null | undefined, parent_id: string | null | undefined, room_manager: boolean | null | undefined, filter: string | null | undefined, sort: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined): Observable<NodeList> {
			return this.http.get<NodeList>(this.baseUri + 'v4/nodes?depth_level=' + depth_level + '&parent_id=' + parent_id + '&room_manager=' + room_manager + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Remove node comment
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
		 * ### Description:
		 * Delete an existing comment for a specific node.
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node and is the creator of the comment **OR** <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span> in auth parent room.
		 * ### Postcondition:
		 * Comment is deleted.
		 * ### Further Information:
		 * None.
		 * Delete v4/nodes/comments/{comment_id}
		 * @param {string} comment_id Comment ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		RemoveNodeComment(comment_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/nodes/comments/' + comment_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Edit node comment
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
		 * ### Description:
		 * Edit the text of an existing comment for a specific node.
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node and is the creator of the comment.
		 * ### Postcondition:
		 * Comments text gets changed.
		 * ### Further Information:
		 * Maximum allowed text length: **65535** characters.
		 * Put v4/nodes/comments/{comment_id}
		 * @param {string} comment_id Comment ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Comment} OK
		 */
		UpdateNodeComment(comment_id: string, requestBody: ChangeNodeCommentRequest): Observable<Comment> {
			return this.http.put<Comment>(this.baseUri + 'v4/nodes/comments/' + comment_id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove nodes from recycle bin
		 * ### Description:
		 * Permanently remove a list of nodes from the recycle bin.
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete recycle bin</span> permissions in parent room.
		 * ### Postcondition:
		 * All provided nodes are removed.
		 * ### Further Information:
		 * The removal of deleted nodes from the recycle bin is irreversible.
		 * Delete v4/nodes/deleted_nodes
		 * @return {void} 
		 */
		RemoveDeletedNodes(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/nodes/deleted_nodes', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restore deleted nodes
		 * ### Description:
		 * Restore a list of deleted nodes.
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in parent room and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; restore recycle bin</span> permissions.
		 * ### Postcondition:
		 * The selected files are moved from the recycle bin to the chosen productive container.
		 * ### Further Information:
		 * If no parent ID is provided, the node is restored to its previous location.
		 * The default resolution strategy is `autorename` that adds numbers to the file name until the conflict is solved.
		 * If an existing file is overwritten, it is moved to the recycle bin instead of the restored one.
		 * Download share id (if exists) gets changed if:
		 * - node with the same name exists in the target container
		 * - `resolutionStrategy` is `overwrite`
		 * - `keepShareLinks` is `true`
		 * Post v4/nodes/deleted_nodes/actions/restore
		 * @return {void} 
		 */
		RestoreNodes(requestBody: RestoreDeletedNodesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/nodes/deleted_nodes/actions/restore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request deleted node
		 * ### Description:
		 * Get metadata of a deleted node.
		 * ### Precondition:
		 * User can access parent room and has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read recycle bin</span> permissions.
		 * ### Postcondition:
		 * Requested deleted node is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/nodes/deleted_nodes/{deleted_node_id}
		 * @param {string} deleted_node_id Deleted node ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {DeletedNode} OK
		 */
		RequestDeletedNode(deleted_node_id: string): Observable<DeletedNode> {
			return this.http.get<DeletedNode>(this.baseUri + 'v4/nodes/deleted_nodes/' + deleted_node_id, {});
		}

		/**
		 * Mark or unmark a list of nodes (room, folder or file) as favorite
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
		 * ### Description:
		 * Marks or unmarks a list of nodes (room, folder or file) as favorite.
		 * ### Precondition:
		 * Authenticated user is allowed to <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128065; see</span> the node (i.e. `isBrowsable = true`).
		 * ### Postcondition:
		 * Nodes gets marked as favorite.
		 * ### Further Information:
		 * Maximum number of nodes is 200.
		 * Put v4/nodes/favorites
		 * @return {void} 
		 */
		UpdateFavorites(requestBody: UpdateFavoritesBulkRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/nodes/favorites', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a list of  file’s metadata
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
		 * ### Description:
		 * Updates a list of file’s metadata.
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change</span> permissions in parent room.
		 * ### Postcondition:
		 * File's metadata is changed.
		 * ### Further Information:
		 * Maximum number of files is 200
		 * Put v4/nodes/files
		 * @return {void} 
		 */
		UpdateFiles(requestBody: UpdateFilesBulkRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/nodes/files', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Set file keys for a list of users and files
		 * ### Description:
		 * Sets symmetric file keys for several users and files.
		 * ### Precondition:
		 * User has file keys for the files.
		 * Only settable by users that own one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span>
		 * ### Postcondition:
		 * Stores new file keys for other users.
		 * ### Further Information:
		 * Only users with copies of the file key (encrypted with their public keys) can access a certain file.
		 * This endpoint is used for the distribution of file keys amongst an authorized user base.
		 * User can set file key for himself.
		 * The users who already have a file key are ignored and keep the distributed file key
		 * Post v4/nodes/files/keys
		 * @return {void} 
		 */
		SetUserFileKeys(requestBody: UserFileKeySetBatchRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/nodes/files/keys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create new file upload channel
		 * ### Description:
		 * This endpoint creates a new upload channel which is the first step in any file upload workflow.
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the parent container (room or folder).
		 * ### Postcondition:
		 * A new upload channel for a file is created.
		 * Its ID and an upload token are returned.
		 * ### Further Information:
		 * The upload ID is used for uploads with `X-Sds-Auth-Token` header, the upload token can be used for uploads without authentication header.
		 * Please provide the size of the intended upload so that the quota can be checked in advanced and no data is transferred unnecessarily.
		 * Notes are limited to **255** characters.
		 * ### Node naming convention:
		 * * Node (room, folder, file) names are limited to **150** characters.
		 * * Illegal names:
		 * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
		 * * Illegal characters in names:
		 * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
		 * Post v4/nodes/files/uploads
		 * @return {void} 
		 */
		CreateFileUploadChannel(requestBody: CreateFileUploadRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/nodes/files/uploads', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel file upload
		 * ### Description:
		 * Cancel a (S3) file upload and destroy the upload channel.
		 * ### Precondition:
		 * An upload channel has been created and user has to be the creator of the upload channel.
		 * ### Postcondition:
		 * The upload channel is removed and all temporary uploaded data is purged.
		 * ### Further Information:
		 * It is recommended to notify the API about cancelled uploads if possible.
		 * Delete v4/nodes/files/uploads/{upload_id}
		 * @param {string} upload_id Upload channel ID
		 * @return {void} 
		 */
		CancelFileUpload(upload_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/nodes/files/uploads/' + (upload_id == null ? '' : encodeURIComponent(upload_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request status of S3 file upload
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>
		 * ### Description:
		 * Request status of a S3 file upload.
		 * ### Precondition:
		 * An upload channel has been created and user has to be the creator of the upload channel.
		 * ### Postcondition:
		 * Status of S3 multipart upload request is returned.
		 * ### Further Information:
		 * None.
		 * ### Possible errors:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Http Status | Error Code | Description |
		 * | :--- | :--- | :--- |
		 * | `400 Bad Request` | `-80000` | Mandatory fields cannot be empty |
		 * | `400 Bad Request` | `-80001` | Invalid positive number |
		 * | `400 Bad Request` | `-80002` | Invalid number |
		 * | `400 Bad Request` | `-40001` | (Target) room is not encrypted |
		 * | `400 Bad Request` | `-40755` | Bad file name |
		 * | `400 Bad Request` | `-40763` | File key must be set for an upload into encrypted room |
		 * | `400 Bad Request` | `-50506` | Exceeds the number of files for this Upload Share |
		 * | `403 Forbidden` |  | Access denied |
		 * | `404 Not Found` | `-20501` | Upload not found |
		 * | `404 Not Found` | `-40000` | Container not found |
		 * | `404 Not Found` | `-41000` | Node not found |
		 * | `404 Not Found` | `-70501` | User not found |
		 * | `409 Conflict` | `-40010` | Container cannot be overwritten |
		 * | `409 Conflict` |  | File cannot be overwritten |
		 * | `500 Internal Server Error` |  | System Error |
		 * | `502 Bad Gateway` |  | S3 Error |
		 * | `502 Insufficient Storage` | `-50504` | Exceeds the quota for this Upload Share |
		 * | `502 Insufficient Storage` | `-40200` | Exceeds the free node quota in room |
		 * | `502 Insufficient Storage` | `-90200` | Exceeds the free customer quota |
		 * | `502 Insufficient Storage` | `-90201` | Exceeds the free customer physical disk space |
		 * </details>
		 * Get v4/nodes/files/uploads/{upload_id}
		 * @param {string} upload_id Upload channel ID
		 * @return {S3FileUploadStatus} OK
		 */
		RequestUploadStatusFiles(upload_id: string): Observable<S3FileUploadStatus> {
			return this.http.get<S3FileUploadStatus>(this.baseUri + 'v4/nodes/files/uploads/' + (upload_id == null ? '' : encodeURIComponent(upload_id)), {});
		}

		/**
		 * Complete file upload
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.9.0</h3>
		 * ### Use `uploads` API
		 * ### Description:
		 * Finishes an upload and closes the corresponding upload channel.
		 * ### Precondition:
		 * An upload channel has been created and data has been transmitted.
		 * ### Postcondition:
		 * The upload is finished and the temporary file is moved to the productive environment.
		 * ### Further Information:
		 * The provided file name might be changed in accordance with the resolution strategy:
		 * * **autorename**: changes the file name and adds a number to avoid conflicts.
		 * * **overwrite**: deletes any old file with the same file name.
		 * * **fail**: returns an error; in this case, another `PUT` request with a different file name may be sent.
		 * Please ensure that all chunks have been transferred correctly before finishing the upload.
		 * Download share id (if exists) gets changed if:
		 * - node with the same name exists in the target container
		 * - `resolutionStrategy` is `overwrite`
		 * - `keepShareLinks` is `true`
		 * ### Node naming convention:
		 * * Node (room, folder, file) names are limited to **150** characters.
		 * * Illegal names:
		 * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
		 * * Illegal characters in names:
		 * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
		 * Put v4/nodes/files/uploads/{upload_id}
		 * @param {string} upload_id Upload channel ID
		 * @return {void} 
		 */
		CompleteFileUpload(upload_id: string, requestBody: CompleteUploadRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/nodes/files/uploads/' + (upload_id == null ? '' : encodeURIComponent(upload_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Complete S3 file upload
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>
		 * ### Description:
		 * Finishes a S3 file upload and closes the corresponding upload channel.
		 * ### Precondition:
		 * An upload channel has been created, data has been transmitted and user has to be the creator of the upload channel
		 * ### Postcondition:
		 * Upload channel is closed. S3 multipart upload request is completed.
		 * ### Further Information:
		 * Download share id (if exists) gets changed if:
		 * - node with the same name exists in the target container
		 * - `resolutionStrategy` is `overwrite`
		 * - `keepShareLinks` is `true`
		 * Put v4/nodes/files/uploads/{upload_id}/s3
		 * @param {string} upload_id Upload channel ID
		 * @return {void} 
		 */
		CompleteS3FileUpload(upload_id: string, requestBody: CompleteS3FileUploadRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/nodes/files/uploads/' + (upload_id == null ? '' : encodeURIComponent(upload_id)) + '/s3', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate presigned URLs for S3 file upload
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>
		 * ### Description:
		 * Generate presigned URLs for S3 file upload.
		 * ### Precondition:
		 * An upload channel has been created and user has to be the creator of the upload channel.
		 * ### Postcondition:
		 * List of presigned URLs is returned.
		 * ### Further Information:
		 * The size for each part must be >= 5 MB, except for the last part.
		 * The part number of the first part in S3 is 1 (not 0).
		 * Use HTTP method `PUT` for uploading bytes via presigned URL.
		 * Post v4/nodes/files/uploads/{upload_id}/s3_urls
		 * @param {string} upload_id Upload channel ID
		 * @return {void} 
		 */
		GeneratePresignedUrlsFiles(upload_id: string, requestBody: GeneratePresignedUrlsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/nodes/files/uploads/' + (upload_id == null ? '' : encodeURIComponent(upload_id)) + '/s3_urls', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request list of file versions
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.37.0</h3>
		 * ### Description:
		 * Request a list of file versions. Both nodes and deleted nodes are included, depending on the user's permissions.
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read/read recycle bin</span> permissions in parent room.
		 * ### Postcondition:
		 * List of file versions is returned.
		 * ### Further Information:
		 * Maximum number of file versions is 500. The list is sorted by ID DESC.
		 * Get v4/nodes/files/versions/{reference_id}
		 * @param {string} reference_id Reference ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {FileVersionList} OK
		 */
		RequestFileVersionList(reference_id: string, offset: number | null | undefined, limit: number | null | undefined): Observable<FileVersionList> {
			return this.http.get<FileVersionList>(this.baseUri + 'v4/nodes/files/versions/' + reference_id + '?offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Updates a file’s metadata
		 * ### Description:
		 * Updates a list of file’s metadata.
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change</span> permissions in parent room.
		 * ### Postcondition:
		 * File's metadata is changed.
		 * Put v4/nodes/files/{file_id}
		 * @param {string} file_id File ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Node} OK
		 */
		UpdateFile(file_id: string, requestBody: UpdateFileRequest): Observable<Node> {
			return this.http.put<Node>(this.baseUri + 'v4/nodes/files/' + file_id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request room rescue key
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.24.0</h3>
		 * ### Description:
		 * Returns the file key for the room emergency password / rescue key of a certain file (if available).
		 * ### Precondition:
		 * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.
		 * ### Postcondition:
		 * File key is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/nodes/files/{file_id}/data_room_file_key
		 * @param {string} file_id File ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} version Version (NEW)
		 * @return {FileKey} OK
		 */
		RequestRoomRescueKey(file_id: string, version: string | null | undefined): Observable<FileKey> {
			return this.http.get<FileKey>(this.baseUri + 'v4/nodes/files/' + file_id + '/data_room_file_key?version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Request system rescue key
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.24.0</h3>
		 * ### Description:
		 * Returns the file key for the system emergency password / rescue key of a certain file (if available).
		 * ### Precondition:
		 * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.
		 * ### Postcondition:
		 * File key is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/nodes/files/{file_id}/data_space_file_key
		 * @param {string} file_id File ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} version Version (NEW)
		 * @return {FileKey} OK
		 */
		RequestSystemRescueKey(file_id: string, version: string | null | undefined): Observable<FileKey> {
			return this.http.get<FileKey>(this.baseUri + 'v4/nodes/files/' + file_id + '/data_space_file_key?version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Generate download URL
		 * ### Description:
		 * Create a download URL to retrieve a file without `X-Sds-Auth-Token` Header.
		 * ### Precondition:
		 * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.
		 * ### Postcondition:
		 * Download token is generated and returned.
		 * ### Further Information:
		 * The token is necessary to access `downloads` ressources.
		 * Post v4/nodes/files/{file_id}/downloads
		 * @param {string} file_id File ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {DownloadTokenGenerateResponse} OK
		 */
		GenerateDownloadUrl(file_id: string): Observable<DownloadTokenGenerateResponse> {
			return this.http.post<DownloadTokenGenerateResponse>(this.baseUri + 'v4/nodes/files/' + file_id + '/downloads', null, {});
		}

		/**
		 * Request user's file key
		 * ### Description:
		 * Returns the file key for the current user (if available).
		 * ### Precondition:
		 * User with one of the following permissions in parent room: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>
		 * ### Postcondition:
		 * File key is returned.
		 * ### Further Information:
		 * The symmetric file key is encrypted with the user's public key.
		 * File keys are generated with the workflow _"Generate file keys"_ that starts at `GET /nodes/missingFileKeys`.
		 * Get v4/nodes/files/{file_id}/user_file_key
		 * @param {string} file_id File ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} version Version (NEW)
		 * @return {FileKey} OK
		 */
		RequestUserFileKey(file_id: string, version: string | null | undefined): Observable<FileKey> {
			return this.http.get<FileKey>(this.baseUri + 'v4/nodes/files/' + file_id + '/user_file_key?version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Create new folder
		 * ### Description:
		 * Create a new folder.
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in current room.
		 * ### Postcondition:
		 * New folder is created.
		 * ### Further Information:
		 * Folders **CANNOT** be created on top level (without parent element).
		 * Notes are limited to **255** characters.
		 * ### Node naming convention:
		 * * Node (room, folder, file) names are limited to **150** characters.
		 * * Illegal names:
		 * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
		 * * Illegal characters in names:
		 * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
		 * Post v4/nodes/folders
		 * @return {void} 
		 */
		CreateFolder(requestBody: CreateFolderRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/nodes/folders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates folder’s metadata
		 * ### Description:
		 * Updates folder’s metadata.
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change</span> permissions in parent room.
		 * ### Postcondition:
		 * Folder's metadata is changed.
		 * ### Further Information:
		 * Notes are limited to **255** characters.
		 * ### Node naming convention:
		 * * Node (room, folder, file) names are limited to **150** characters.
		 * * Illegal names:
		 * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
		 * * Illegal characters in names:
		 * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
		 * Put v4/nodes/folders/{folder_id}
		 * @param {string} folder_id Folder ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Node} OK
		 */
		UpdateFolder(folder_id: string, requestBody: UpdateFolderRequest): Observable<Node> {
			return this.http.put<Node>(this.baseUri + 'v4/nodes/folders/' + folder_id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request files without user's file key
		 * ### Description:
		 * Requests a list of missing file keys that may be generated by the current user.
		 * ### Precondition:
		 * User has a key pair.
		 * Only returns users that owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>
		 * ### Postcondition:
		 * None.
		 * ### Further Information:
		 * Clients **SHOULD** regularly request missing file keys to provide access to files for other users.
		 * The returned list is ordered by priority (emergency passwords / rescue keys are returned first).
		 * There is an enforced limit of **100** items per request.
		 * A total value greater than limit signals that there are more entries but does not necessarily reflect the precise
		 * number of total items.
		 * Get v4/nodes/missingFileKeys
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} file_id File ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} user_id User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {RequestMissingFileKeysUse_key} use_key Determines which key should be used (NEW)
		 * @return {MissingKeysResponse} OK
		 */
		RequestMissingFileKeys(offset: number | null | undefined, limit: number | null | undefined, room_id: string | null | undefined, file_id: string | null | undefined, user_id: string | null | undefined, use_key: RequestMissingFileKeysUse_key | null | undefined): Observable<MissingKeysResponse> {
			return this.http.get<MissingKeysResponse>(this.baseUri + 'v4/nodes/missingFileKeys?offset=' + offset + '&limit=' + limit + '&room_id=' + room_id + '&file_id=' + file_id + '&user_id=' + user_id + '&use_key=' + use_key, {});
		}

		/**
		 * Create new room
		 * ### Description:
		 * Creates a new room at the provided parent node.
		 * Creation of top level rooms provided.
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span> permissions in the parent room.
		 * ### Postcondition:
		 * A new room is created.
		 * ### Further Information:
		 * Rooms may only have other rooms as parent.
		 * Rooms on top level do **NOT** have any parent.
		 * Rooms may have rooms as children on n hierarchy levels.
		 * If permission inheritance is disabled, there **MUST** be at least one admin user / group (with neither the group nor the user having an expiration date).
		 * Notes are limited to **255** characters.
		 * Provided (or default) classification is taken from room when file gets uploaded without any classification.
		 * ### Node naming convention:
		 * * Node (room, folder, file) names are limited to **150** characters.
		 * * Illegal names:
		 * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
		 * * Illegal characters in names:
		 * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
		 * Post v4/nodes/rooms
		 * @return {void} 
		 */
		CreateRoom(requestBody: CreateRoomRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/nodes/rooms', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request user-room assignments per group
		 * ### Description:
		 * Requests a list of user-room assignments by groups that have **NOT** been approved yet
		 * These can have the state:
		 * * **WAITING**
		 * * **DENIED**
		 * * **ACCEPTED**
		 * **ACCEPTED** assignments are already removed from the list.
		 * ### Precondition:
		 * None.
		 * ### Postcondition:
		 * List of user-room assignments is returned.
		 * ### Further Information:
		 * Room administrators **SHOULD** regularly request pending assingments to provide access to rooms for other users.
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `state:eq:WAITING`
		 * Filter assignments by state `WAITING`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `userId` | User ID filter | `eq` | User ID equals value. | `positive Integer` |
		 * | `groupId` | Group ID filter | `eq` | Group ID equals value. | `positive Integer` |
		 * | `roomId` | Room ID filter | `eq` | Room ID equals value. | `positive Integer` |
		 * | `state` | Assignment state | `eq` | Assignment state equals value. | `WAITING or DENIED` |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort criteria are possible.
		 * Fields are connected via logical conjunction **AND**.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `userId:desc|state:asc`
		 * Sort by `userId` descending **AND** `state` ascending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `userId` | User ID |
		 * | `groupId` | Group ID |
		 * | `roomId` | Room ID |
		 * | `state` | State |
		 * </details>
		 * Get v4/nodes/rooms/pending
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @return {PendingAssignmentList} OK
		 */
		RequestPendingAssignments(offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined, sort: string | null | undefined): Observable<PendingAssignmentList> {
			return this.http.get<PendingAssignmentList>(this.baseUri + 'v4/nodes/rooms/pending?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Handle user-room assignments per group
		 * ### Description:
		 * Handles a list of user-room assignments by groups that have **NOT** been approved yet
		 * **WAITING** or **DENIED** assignments can be **ACCEPTED**.
		 * ### Precondition:
		 * None.
		 * ### Postcondition:
		 * User-room assignment is approved and the user gets access to the group.
		 * ### Further Information:
		 * Room administrators should **SHOULD** handle pending assignments to provide access to rooms for other users.
		 * Put v4/nodes/rooms/pending
		 * @return {void} 
		 */
		ChangePendingAssignments(requestBody: PendingAssignmentsRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/nodes/rooms/pending', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates room’s metadata
		 * ### Description:
		 * Updates room’s metadata.
		 * ### Precondition:
		 * User is a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span> at superordinated level.
		 * ### Postcondition:
		 * Room's metadata is changed.
		 * ### Further Information:
		 * Notes are limited to **255** characters.
		 * ### Node naming convention:
		 * * Node (room, folder, file) names are limited to **150** characters.
		 * * Illegal names:
		 * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
		 * * Illegal characters in names:
		 * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
		 * Put v4/nodes/rooms/{room_id}
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Node} OK
		 */
		UpdateRoom(room_id: string, requestBody: UpdateRoomRequest): Observable<Node> {
			return this.http.put<Node>(this.baseUri + 'v4/nodes/rooms/' + room_id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Configure room
		 * ### Description:
		 * Configure a room.
		 * ### Precondition:
		 * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
		 * ### Postcondition:
		 * Room's configuration is changed.
		 * ### Further Information:
		 * Provided (or default) classification is taken from room when file gets uploaded without any classification.
		 * To set `adminIds` or `adminGroupIds` the `inheritPermissions` value has to be `false`. Otherwise use:
		 * * `PUT /nodes/rooms/{room_id}/groups`
		 * * `PUT /nodes/rooms/{room_id}/users `
		 * APIs.
		 * Put v4/nodes/rooms/{room_id}/config
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Node} OK
		 */
		ConfigureRoom(room_id: string, requestBody: ConfigRoomRequest): Observable<Node> {
			return this.http.put<Node>(this.baseUri + 'v4/nodes/rooms/' + room_id + '/config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Encrypt room
		 * ### Description:
		 * Activates the client-side encryption for a room.
		 * ### Precondition:
		 * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
		 * ### Postcondition:
		 * Encryption of room is activated.
		 * ### Further Information:
		 * Only empty rooms at the top level may be encrypted.
		 * This endpoint may also be used to disable encryption of an empty room.
		 * Put v4/nodes/rooms/{room_id}/encrypt
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Node} OK
		 */
		EncryptRoom(room_id: string, requestBody: EncryptRoomRequest): Observable<Node> {
			return this.http.put<Node>(this.baseUri + 'v4/nodes/rooms/' + room_id + '/encrypt', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request events of a room
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>
		 * ### Description:
		 * Retrieve syslog (audit log) events related to a room.
		 * ### Precondition:
		 * Requires <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on that room.
		 * ### Postcondition:
		 * List of events is returned.
		 * ### Further Information:
		 * Output may be limited to a certain number of entries.
		 * Please use filter criteria and paging.
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort fields are supported.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `time:desc`
		 * Sort by `time` descending (default sort option).
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `time` | Event timestamp |
		 * </details>
		 * Get v4/nodes/rooms/{room_id}/events
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} sort Sort string
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} date_start Filter events from given date 
		 * e.g. `2015-12-31T23:59:00`
		 * @param {string} date_end Filter events until given date 
		 * e.g. `2015-12-31T23:59:00`
		 * @param {number} type Operation ID 
		 * cf. `GET /eventlog/operations`
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} user_id User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {number} status Operation status:
		 * * `0` - Success
		 * * `2` - Error
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {LogEventList} OK
		 */
		RequestRoomActivitiesLogAsJson(room_id: string, sort: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, date_start: string | null | undefined, date_end: string | null | undefined, type: number | null | undefined, user_id: string | null | undefined, status: number | null | undefined): Observable<LogEventList> {
			return this.http.get<LogEventList>(this.baseUri + 'v4/nodes/rooms/' + room_id + '/events?sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&offset=' + offset + '&limit=' + limit + '&date_start=' + (date_start == null ? '' : encodeURIComponent(date_start)) + '&date_end=' + (date_end == null ? '' : encodeURIComponent(date_end)) + '&type=' + type + '&user_id=' + user_id + '&status=' + status, {});
		}

		/**
		 * Revoke granted group(s) from room
		 * ### Description:
		 * Revoke granted groups from room.
		 * ### Precondition:
		 * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
		 * ### Postcondition:
		 * Group's permissions are revoked.
		 * ### Further Information:
		 * Batch function.
		 * Delete v4/nodes/rooms/{room_id}/groups
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		RevokeRoomGroups(room_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/nodes/rooms/' + room_id + '/groups', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request room granted group(s) or / and group(s) that can be granted
		 * ### Description:
		 * Retrieve a list of groups that are and / or can be granted to the room.
		 * ### Precondition:
		 * Any permissions on target room.
		 * ### Postcondition:
		 * List of groups is returned.
		 * ### Further Information:
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `isGranted:eq:false|name:cn:searchString`
		 * Get all groups that are **NOT** granted to this room **AND** whose name is like `searchString`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `name` | Group name filter | `cn` | Group name contains value. | `search String` |
		 * | `groupId` | Group ID filter | `eq` | Group ID equals value. | `positive Integer` |
		 * | `isGranted` | Filter the groups that have (no) access to this room.<br>**This filter is only available for room administrators.**<br>**Other users can only look for groups in their rooms, so this filter is `true` and **CANNOT** be overridden.** | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
		 * | `permissionsManage` | Filter the groups that do (not) have `manage` permissions in this room. | `eq` |  | `true or false` |
		 * | `effectivePerm` | Filter groups with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`: DIRECT **AND** EFFECTIVE permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**. | `eq` |  | `true or false`<br>default: `false` |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort criteria are possible.
		 * Fields are connected via logical conjunction **AND**.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `name:desc`
		 * Sort by `name` descending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `name` | Group name |
		 * </details>
		 * Get v4/nodes/rooms/{room_id}/groups
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @return {RoomGroupList} OK
		 */
		RequestRoomGroups(room_id: string, offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined, sort: string | null | undefined): Observable<RoomGroupList> {
			return this.http.get<RoomGroupList>(this.baseUri + 'v4/nodes/rooms/' + room_id + '/groups?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Add or change room granted group(s)
		 * ### Description:
		 * All existing group permissions will be overwritten.
		 * ### Precondition:
		 * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>. To add new members, the user needs the right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; non-members add</span>, which is included in any role.
		 * ### Postcondition:
		 * Group's permissions are changed.
		 * ### Further Information:
		 * Batch function.
		 * Put v4/nodes/rooms/{room_id}/groups
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		UpdateRoomGroups(room_id: string, requestBody: RoomGroupsAddBatchRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/nodes/rooms/' + room_id + '/groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add guest users to a room
		 * ### Description:
		 * Add guest users to a room
		 * ### Precondition:
		 * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>. To add new members, the user needs the right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; non-members add</span>, which is included in any role.
		 * <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Guest User Policy</span> needs to be enabled.
		 * ### Postcondition:
		 * New or existing Guest-Users now have guest-permissions for this room
		 * ### Further Information:
		 * Batch function.
		 * Put v4/nodes/rooms/{room_id}/guest_users
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		AddRoomGuestUsers(room_id: string, requestBody: RoomGuestUserAddRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/nodes/rooms/' + room_id + '/guest_users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove rooms's rescue key pair
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
		 * ### Description:
		 * Delete room rescue key pair.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * Key pair is removed (cf. further information below).
		 * ### Further Information:
		 * Please set a new room rescue key pair first and re-encrypt file keys with it.
		 * If no version is set, deleted key pair with lowest preference value.
		 * Although, `version` **SHOULD** be set.
		 * Delete v4/nodes/rooms/{room_id}/keypair
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} version Version (NEW)
		 * @return {void} 
		 */
		RemoveRoomRescueKeyPair(room_id: string, version: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/nodes/rooms/' + room_id + '/keypair?version=' + (version == null ? '' : encodeURIComponent(version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request room rescue key
		 * ### Description:
		 * Retrieve the room rescue key pair.
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in that room.
		 * ### Postcondition:
		 * Key pair is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/nodes/rooms/{room_id}/keypair
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} version Version (NEW)
		 * @return {UserKeyPairContainer} OK
		 */
		RequestRoomRescueKeyPair(room_id: string, version: string | null | undefined): Observable<UserKeyPairContainer> {
			return this.http.get<UserKeyPairContainer>(this.baseUri + 'v4/nodes/rooms/' + room_id + '/keypair?version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Set room's rescue key pair
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
		 * ### Description:
		 * Set room rescue key pair.
		 * ### Precondition:
		 * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
		 * ### Postcondition:
		 * Key pair is set.
		 * ### Further Information:
		 * Room rescue key pair can be used to upgrade algorithm.
		 * Post v4/nodes/rooms/{room_id}/keypair
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		SetRoomRescueKeyPair(room_id: string, requestBody: UserKeyPairContainer): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/nodes/rooms/' + room_id + '/keypair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request all room rescue key pairs
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
		 * ### Description:
		 * Retrieve all room rescue key pairs to allow migrating room-rescue-key-encrypted file keys.
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in that room.
		 * ### Postcondition:
		 * List of key pairs is returned.
		 * ### Further Information:
		 * In the case of an algorithm migration to a room rescue key pair, one should create the new key pair before deleting the old one. This allows re-encrypting file keys with the new key pair, using the old one.
		 * This API allows to retrieve both key pairs, in contrast to `GET /nodes/rooms/{room_id}/keypair`, which only delivers the preferred one.
		 * Get v4/nodes/rooms/{room_id}/keypairs
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Array<UserKeyPairContainer>} OK
		 */
		RequestRoomRescueKeyPairs(room_id: string): Observable<Array<UserKeyPairContainer>> {
			return this.http.get<Array<UserKeyPairContainer>>(this.baseUri + 'v4/nodes/rooms/' + room_id + '/keypairs', {});
		}

		/**
		 * Create key pair and preserve copy of old private key
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
		 * ### Description:
		 * Create room rescue key pair and preserve copy of old private key.
		 * ### Precondition:
		 * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
		 * ### Postcondition:
		 * Room rescue key pair is created.
		 * Copy of old private key is preserved.
		 * ### Further Information:
		 * You can submit your old private key, encrypted with your current password.
		 * This allows migrating file keys encrypted with your old key pair to the new one.
		 * Post v4/nodes/rooms/{room_id}/keypairs
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		CreateAndPreserveRoomRescueKeyPair(room_id: string, requestBody: CreateKeyPairRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/nodes/rooms/' + room_id + '/keypairs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request Room Policies
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.32.0</h3>
		 * ### Description:
		 * Retrieve the room policies:
		 * * `defaultExpirationPeriod`
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in that room.
		 * ### Postcondition:
		 * Room Policies returned.
		 * ### Further Information:
		 * `defaultExpirationPeriod`: Default policy room expiration period in seconds.
		 * All existing and future files in a room will have their expiration date set to this period after their respective upload.
		 * Existing files can be set to expire earlier afterwards.
		 * `0` means no default expiration policy will be enforced.
		 * Get v4/nodes/rooms/{room_id}/policies
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {RoomPolicies} OK
		 */
		RequestRoomPolicies(room_id: string): Observable<RoomPolicies> {
			return this.http.get<RoomPolicies>(this.baseUri + 'v4/nodes/rooms/' + room_id + '/policies', {});
		}

		/**
		 * Set room policies
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.32.0</h3>
		 * ### Description:
		 * Retrieve the room policies:
		 * * `defaultExpirationPeriod`
		 * ### Precondition:
		 * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
		 * ### Postcondition:
		 * Room policy is set.
		 * ### Further Information:
		 * `defaultExpirationPeriod`: Default policy room expiration period in seconds.
		 * All existing and future files in a room will have their expiration date set to this period after their respective upload.
		 * Existing files can be set to expire earlier afterwards.
		 * `0` means no default expiration policy will be enforced. This removes all expiration dates from existing files.
		 * Put v4/nodes/rooms/{room_id}/policies
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		SetRoomPolicies(room_id: string, requestBody: RoomPoliciesRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/nodes/rooms/' + room_id + '/policies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request list of all assigned S3 tags to the room
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
		 * ### Description:
		 * Retrieve a list of S3 tags assigned to a room.
		 * ### Precondition:
		 * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
		 * ### Postcondition:
		 * List of assigned S3 tags is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/nodes/rooms/{room_id}/s3_tags
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {S3TagList} OK
		 */
		RequestRoomS3Tags(room_id: string): Observable<S3TagList> {
			return this.http.get<S3TagList>(this.baseUri + 'v4/nodes/rooms/' + room_id + '/s3_tags', {});
		}

		/**
		 * Set S3 tags for a room
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
		 * ### Description:
		 * Set S3 tags to a room.
		 * ### Precondition:
		 * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
		 * ### Postcondition:
		 * Provided S3 tags are assigned to a room.
		 * ### Further Information:
		 * Every request overrides current S3 tags.
		 * Mandatory S3 tag IDs **MUST** be sent.
		 * Post v4/nodes/rooms/{room_id}/s3_tags
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		SetRoomS3Tags(room_id: string, requestBody: S3TagIds): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/nodes/rooms/' + room_id + '/s3_tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Revoke granted user(s) from room
		 * ### Description:
		 * Revoke granted users from room.
		 * ### Precondition:
		 * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
		 * ### Postcondition:
		 * User's permissions are revoked.
		 * ### Further Information:
		 * Batch function.
		 * Delete v4/nodes/rooms/{room_id}/users
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		RevokeRoomUsers(room_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/nodes/rooms/' + room_id + '/users', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request room granted user(s) or / and user(s) that can be granted
		 * ### Description:
		 * Retrieve a list of users that are and / or can be granted to the room.
		 * ### Precondition:
		 * Any permissions on target room.
		 * ### Postcondition:
		 * None.
		 * ### Further Information:
		 * List of users is returned.
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * > `permissionsManage:eq:true|user:cn:searchString`
		 * Get all users that have `manage` permissions to this room **AND** whose (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) is like `searchString`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `user` | User filter | `cn` | User contains value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`). | `search String` |
		 * | `userId` | User ID filter | `eq` | User ID equals value. | `positive Integer` |
		 * | `isGranted` | Filter the users that have (no) access to this room.<br>**This filter is only available for room administrators.**<br>**Other users can only look for users in their rooms, so this filter is `true` and **CANNOT** be overridden.** | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
		 * | `permissionsManage` | Filter the users that do (not) have `manage` permissions in this room. | `eq` |  | `true or false` |
		 * | `effectivePerm` | Filter users with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`: DIRECT **AND** EFFECTIVE permissions</li><li>`any`: DIRECT **AND** EFFECTIVE **AND** OVER GROUP permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**.<br>OVER GROUP means: e.g. user gets `read` permissions on desired room through **group membership**. | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `false` |
		 * | `hasRole` | User role filter<br>For more Roles information please call `GET /roles API` | `eq`, `neq` | User role  equals value. | <ul><li>`CONFIG_MANAGER` - Manage global configs</li><li>`USER_MANAGER` - Manage Users</li><li>`GROUP_MANAGER` - Manage User-Groups</li><li>`ROOM_MANAGER` - Manage top level Data Rooms</li><li>`LOG_AUDITOR` - Read logs</li><li>`NONMEMBER_VIEWER` - View users and groups when having room manage permission</li><li>`USER` - Regular User role</li><li>`GUEST_USER` - Guest User role</li></ul> |
		 * </details>
		 * ### Deprecated filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | <del>`displayName`</del> | User display name filter (use `user` filter) | `cn` | User display name contains value (`firstName` **OR** `lastName` **OR** `email`). | `search String` |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort criteria are possible.
		 * Fields are connected via logical conjunction **AND**.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `user:desc`
		 * Sort by `user` descending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | **`user`** | User - sort by `firstName`, `lastName`, `username`, `email` (in this order) |
		 * </details>
		 * Get v4/nodes/rooms/{room_id}/users
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @return {RoomUserList} OK
		 */
		RequestRoomUsers(room_id: string, offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined, sort: string | null | undefined): Observable<RoomUserList> {
			return this.http.get<RoomUserList>(this.baseUri + 'v4/nodes/rooms/' + room_id + '/users?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Add or change room granted user(s)
		 * ### Description:
		 * All existing user permissions will be overwritten.
		 * ### Precondition:
		 * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>. To add new members, the user needs the right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; non-members add</span>, which is included in any role.
		 * ### Postcondition:
		 * User's permissions are changed.
		 * ### Further Information:
		 * Batch function.
		 * Put v4/nodes/rooms/{room_id}/users
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		UpdateRoomUsers(room_id: string, requestBody: RoomUsersAddBatchRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/nodes/rooms/' + room_id + '/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request list of webhooks that are assigned or can be assigned to this room
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
		 * ### Description:
		 * Get a list of webhooks for the room scope with their assignment status.
		 * ### Precondition:
		 * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
		 * ### Postcondition:
		 * List of webhooks is returned.
		 * ### Further Information:
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `isAssigned:eq:true`
		 * Get a list of assigned webhooks to the room.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | **`isAssigned`** | Assigned/unassigned webhooks filter | `eq` |  | `true or false` |
		 * </details>
		 * Get v4/nodes/rooms/{room_id}/webhooks
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @return {RoomWebhookList} OK
		 */
		RequestListOfWebhooksForRoom(room_id: string, offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined): Observable<RoomWebhookList> {
			return this.http.get<RoomWebhookList>(this.baseUri + 'v4/nodes/rooms/' + room_id + '/webhooks?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Assign or unassign webhooks to room
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
		 * ### Description:
		 * Handle room webhook assignments.
		 * ### Precondition:
		 * User needs to be a <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Room Administrator</span>.
		 * ### Postcondition:
		 * List of webhooks is returned.
		 * ### Further Information:
		 * None.
		 * ### Available event types:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Name | Description | Scope |
		 * | :--- | :--- | :--- |
		 * | **`downloadshare.created`** | Triggered when a new download share is created in affected room | Node Webhook |
		 * | **`downloadshare.deleted`** | Triggered when a download share is deleted in affected room | Node Webhook |
		 * | **`downloadshare.used`** | Triggered when a download share is utilized in affected room | Node Webhook |
		 * | **`uploadshare.created`** | Triggered when a new upload share is created in affected room | Node Webhook |
		 * | **`uploadshare.deleted`** | Triggered when a upload share is deleted in affected room | Node Webhook |
		 * | **`uploadshare.used`** | Triggered when a new file is uploaded via the upload share in affected room | Node Webhook |
		 * | **`file.created`** | Triggered when a new file is uploaded in affected room | Node Webhook |
		 * | **`folder.created`** | Triggered when a new folder is created in affected room | Node Webhook |
		 * | **`room.created`** | Triggered when a new room is created (in affected room) | Node Webhook |
		 * | **`file.deleted`** | Triggered when a file is deleted in affected room | Node Webhook |
		 * | **`folder.deleted`** | Triggered when a folder is deleted in affected room | Node Webhook |
		 * | **`room.deleted`** | Triggered when a room is deleted in affected room | Node Webhook |
		 * </details>
		 * Put v4/nodes/rooms/{room_id}/webhooks
		 * @param {string} room_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {RoomWebhookList} OK
		 */
		HandleRoomWebhookAssignments(room_id: string, requestBody: UpdateRoomWebhookRequest): Observable<RoomWebhookList> {
			return this.http.put<RoomWebhookList>(this.baseUri + 'v4/nodes/rooms/' + room_id + '/webhooks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Search nodes
		 * ### Description:
		 * Provides a flat list of file system nodes (rooms, folders or files) of a given parent that are accessible by the current user.
		 * ### Precondition:
		 * Authenticated user is allowed to <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128065; see</span> nodes (i.e. `isBrowsable = true`).
		 * ### Postcondition:
		 * List of nodes is returned.
		 * ### Further Information:
		 * Output is limited to **500** entries.
		 * For more results please use filter criteria and paging (`offset` + `limit`).
		 * `EncryptionInfo` is **NOT** provided.
		 * Wildcard character is the asterisk character: `*`
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `type:eq:file|createdAt:ge:2015-01-01`
		 * Get nodes where type equals `file` **AND** file creation date is **>=** `2015-01-01`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME`            | Filter Description                | `OPERATOR` | Operator Description                                                                                                                                                                                                                                                                | `VALUE` |
		 * |:------------------------|:----------------------------------| :--- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| :--- |
		 * | `type`                  | Node type filter                  | `eq` | Node type equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `type:eq:room:folder`                                                                                                                                        | <ul><li>`room`</li><li>`folder`</li><li>`file`</li></ul> |
		 * | `fileType`              | File type filter (file extension) | `cn, eq` | File type contains / equals value.                                                                                                                                                                                                                                                  | `search String` |
		 * | `classification`        | Classification filter             | `eq` | Classification equals value.                                                                                                                                                                                                                                                        | <ul><li>`1` - public</li><li>`2` - internal</li><li>`3` - confidential</li><li>`4` - strictly confidential</li></ul> |
		 * | `createdBy`             | Creator login filter              | `cn, eq` | Creator login contains / equals value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`).                                                                                                                                                                             | `search String` |
		 * | `createdById`           | Creator ID filter                 | `eq` | Creator ID equals value.                                                                                                                                                                                                                                                            | `positive Integer  or -1 for external user` |
		 * | `createdAt`             | Creation date filter              | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01`                                                                | `Date (yyyy-MM-dd)` |
		 * | `updatedBy`             | Last modifier login filter        | `cn, eq` | Last modifier login contains / equals value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`).                                                                                                                                                                       | `search String` |
		 * | `updatedById`           | Last modifier ID filter           | `eq` | Modifier ID equals value.                                                                                                                                                                                                                                                           | `positive Integer or -1 for external user` |
		 * | `updatedAt`             | Last modification date filter     | `ge, le` | Last modification date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `updatedAt:ge:2016-12-31`&#124;`updatedAt:le:2018-01-01`                                                       | `Date (yyyy-MM-dd)` |
		 * | `expireAt`              | Expiration date filter            | `ge, le` | Expiration date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `expireAt:ge:2016-12-31`&#124;`expireAt:le:2018-01-01`                                                                | `Date (yyyy-MM-dd)` |
		 * | `size`                  | Node size filter                  | `ge, le` | Node size is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `size:ge:5`&#124;`size:le:10`                                                                                               | `size in bytes` |
		 * | `isFavorite`            | Favorite filter                   | `eq` |                                                                                                                                                                                                                                                                                     | `true or false` |
		 * | `branchVersion`         | Node branch version filter        | `ge, le` | Branch version is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `branchVersion:ge:1423280937404`&#124;`branchVersion:le:1523280937404`                                                 | `version number` |
		 * | `parentPath`            | Parent path                       | `cn, eq` | Parent path contains / equals  value.                                                                                                                                                                                                                                               | `search String` |
		 * | `timestampCreation`     | Creation timestamp filter         | `ge, le` | Creation timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampCreation:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampCreation:le:2018-01-01T11:00:00.540`             | `Date (yyyy-MM-dd)` |
		 * | `timestampModification` | Modification timestamp filter     | `ge, le` | Modification timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampModification:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampModification:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |
		 * | `referenceId`           | Reference ID filter               | `eq` | Reference ID equals value.                                                                                                                                                                                                                                                          | `Integer ` |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort criteria are possible.
		 * Fields are connected via logical conjunction **AND**.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `name:desc|size:asc`
		 * Sort by `name` descending **AND** `size` ascending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `name` | Node name |
		 * | `createdAt` | Creation date |
		 * | `createdBy` | Creator first name, last name |
		 * | `updatedAt` | Last modification date |
		 * | `updatedBy` | Last modifier first name, last name |
		 * | `fileType` | File type (extension) |
		 * | `classification` | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |
		 * | `size` | Node size |
		 * | `cntDeletedVersions` | Number of deleted versions of this file / folder (**NOT** recursive; for files and folders only) |
		 * | `type` | Node type (room, folder, file) |
		 * | `parentPath` | Parent path |
		 * | `timestampCreation` | Creation timestamp |
		 * | `timestampModification` | Modification timestamp |
		 * </details>
		 * ### Deprecated sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | <del>`cntChildren`</del> | Number of direct children (**NOT** recursive; for rooms and folders only) |
		 * </details>
		 * Get v4/nodes/search
		 * @param {string} search_string Search string
		 * @param {number} depth_level * `0` - top level nodes only (default)
		 * * `-1` - full tree
		 * * `n` (any positive number) - include `n` levels starting from the current node
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} parent_id Parent node ID.
		 * Only rooms and folders can be parents.
		 * Parent ID `0` or empty is the root node.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {NodeList} OK
		 */
		SearchNodes(search_string: string, depth_level: number | null | undefined, parent_id: string | null | undefined, filter: string | null | undefined, sort: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined): Observable<NodeList> {
			return this.http.get<NodeList>(this.baseUri + 'v4/nodes/search?search_string=' + (search_string == null ? '' : encodeURIComponent(search_string)) + '&depth_level=' + depth_level + '&parent_id=' + parent_id + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Generate download URL for ZIP download
		 * ### Description:
		 * Create a download URL to retrieve several files in one ZIP archive.
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in parent room.
		 * ### Postcondition:
		 * Download URL is generated and returned.
		 * ### Further Information:
		 * The token is necessary to access `downloads` resources.
		 * ZIP download is only available for files and folders.
		 * Post v4/nodes/zip
		 * @return {DownloadTokenGenerateResponse} OK
		 */
		GenerateDownloadUrlForZipArchive(requestBody: ZipDownloadRequest): Observable<DownloadTokenGenerateResponse> {
			return this.http.post<DownloadTokenGenerateResponse>(this.baseUri + 'v4/nodes/zip', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Download files / folders as ZIP archive
		 * ### Description:
		 * Download multiple files in a ZIP archive.
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in auth parent room.
		 * ### Postcondition:
		 * Stream is returned.
		 * ### Further Information:
		 * None.
		 * Post v4/nodes/zip/download
		 * @return {void} OK
		 */
		DownloadZipArchive(requestBody: ZipDownloadRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/nodes/zip/download', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove node
		 * ### Description:
		 * Delete node (room, folder or file).
		 * ### Precondition:
		 * Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete</span> permissions on supplied nodes (for folders or files) or on superordinated node (for rooms).
		 * ### Postcondition:
		 * Node gets deleted.
		 * ### Further Information:
		 * None.
		 * Delete v4/nodes/{node_id}
		 * @param {string} node_id Node ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		RemoveNode(node_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/nodes/' + node_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request node
		 * ### Description:
		 * Get node (room, folder or file).
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in auth parent room.
		 * ### Postcondition:
		 * Requested node is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/nodes/{node_id}
		 * @param {string} node_id Node ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Node} OK
		 */
		RequestNode(node_id: string): Observable<Node> {
			return this.http.get<Node>(this.baseUri + 'v4/nodes/' + node_id, {});
		}

		/**
		 * Request list of node comments
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
		 * ### Description:
		 * Get comments for a specific node.
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node.
		 * ### Postcondition:
		 * List with comments (sorted by `createdAt` timestamp) is returned.
		 * ### Further Information:
		 * An empty list is returned if no comments were found.
		 * Output is limited to **500** entries.
		 * For more results please use filter criteria and paging (`offset` + `limit`).
		 * Get v4/nodes/{node_id}/comments
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} node_id Node ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {boolean} hide_deleted Hide deleted comments (default: false)
		 * @return {CommentList} OK
		 */
		RequestNodeComments(offset: number | null | undefined, limit: number | null | undefined, node_id: string, hide_deleted: boolean | null | undefined): Observable<CommentList> {
			return this.http.get<CommentList>(this.baseUri + 'v4/nodes/' + node_id + '/comments?offset=' + offset + '&limit=' + limit + '&hide_deleted=' + hide_deleted, {});
		}

		/**
		 * Create node comment
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
		 * ### Description:
		 * Create a comment for a specific node.
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions on the node.
		 * ### Postcondition:
		 * Comment is created.
		 * ### Further Information:
		 * Maximum allowed text length: **65535** characters.
		 * Post v4/nodes/{node_id}/comments
		 * @param {string} node_id Node ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		CreateNodeComment(node_id: string, requestBody: CreateNodeCommentRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/nodes/' + node_id + '/comments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Copy node(s)
		 * ### Description:
		 * Copies nodes (folder, file) to another parent.
		 * ### Precondition:
		 * Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> permissions in the source parent and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the target parent node.
		 * ### Postcondition:
		 * Nodes are copied to target parent.
		 * ### Further Information:
		 * Nodes **MUST** be in same source parent.
		 * **Rooms **CANNOT** be copied.**
		 * Download share id (if exists) gets changed if:
		 * - node with the same name exists in the target container
		 * - `resolutionStrategy` is `overwrite`
		 * - `keepShareLinks` is `true`
		 * ### Node naming convention:
		 * * Node (room, folder, file) names are limited to **150** characters.
		 * * Illegal names:
		 * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
		 * * Illegal characters in names:
		 * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
		 * Post v4/nodes/{node_id}/copy_to
		 * @param {string} node_id Target parent node ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		CopyNodes(node_id: string, requestBody: CopyNodesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/nodes/' + node_id + '/copy_to', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Empty recycle bin
		 * ### Description:
		 * Empty a recycle bin.
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete recycle bin</span> permissions in parent room.
		 * ### Postcondition:
		 * All files in the recycle bin are permanently removed.
		 * ### Further Information:
		 * Actually removes the previously deleted files from the system.
		 * **This action is irreversible.**
		 * Delete v4/nodes/{node_id}/deleted_nodes
		 * @param {string} node_id Room ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		EmptyDeletedNodes(node_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/nodes/' + node_id + '/deleted_nodes', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request list of deleted nodes
		 * ### Description:
		 * Retrieve a list of deleted nodes in a recycle bin.
		 * ### Precondition:
		 * User can access parent room and has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read recycle bin</span> permissions.
		 * ### Postcondition:
		 * List of deleted nodes is returned.
		 * ### Further Information:
		 * Only room IDs are accepted as parent ID since only rooms may have a recycle bin.
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `type:eq:file:folder|name:cn:searchString_1|parentPath:cn:searchString_2`
		 * Get deleted nodes where type equals (`file` **OR** `folder`) **AND** deleted node name containing `searchString_1` **AND** deleted node parent path containing `searchString 2`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `type` | Node type filter | `eq` | Node type equals value(s).<br>Multiple values are allowed and will be connected via logical disjunction (**OR**).<br>e.g. `type:eq:folder:file` | <ul><li>`folder`</li><li>`file`</li></ul> |
		 * | `name` | Node name filter | `cn` | Node name contains value. | `search String` |
		 * | `parentPath` | Parent path filter | `cn` | Parent path contains value. | `search String` |
		 * | `timestampCreation` | Creation timestamp filter | `ge, le` | Creation timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampCreation:ge:2016-12-31`&#124;<br>`timestampCreation:le:2018-01-01` | `Date (yyyy-MM-dd)` |
		 * | `timestampModification` | Modification timestamp filter | `ge, le` | Modification timestamp is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `timestampModification:ge:2016-12-31T23:00:00.123`&#124;<br>`timestampModification:le:2018-01-01T11:00:00.540` | `Date (yyyy-MM-dd)` |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort criteria are possible.
		 * Fields are connected via logical conjunction **AND**.
		 * Nodes are sorted by type first, then by sent sort string.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `name:desc|timestampCreation:asc`
		 * Sort by `name` descending **AND** `timestampCreation` ascending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `name` | Node name |
		 * | `cntVersions` | Number of deleted versions of this file |
		 * | `firstDeletedAt` | First deleted version |
		 * | `lastDeletedAt` | Last deleted version |
		 * | `parentPath` | Parent path of deleted node |
		 * | `timestampCreation` | Creation timestamp |
		 * | `timestampModification` | Modification timestamp |
		 * </details>
		 * Get v4/nodes/{node_id}/deleted_nodes
		 * @param {string} node_id Parent ID (can only be a room ID)
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DeletedNodeSummaryList} OK
		 */
		RequestDeletedNodesSummary(node_id: string, filter: string | null | undefined, sort: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined): Observable<DeletedNodeSummaryList> {
			return this.http.get<DeletedNodeSummaryList>(this.baseUri + 'v4/nodes/' + node_id + '/deleted_nodes?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Request deleted versions of nodes
		 * ### Description:
		 * Retrieve all deleted versions of a node.
		 * ### Precondition:
		 * User can access parent room and has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read recycle bin</span> permissions.
		 * ### Postcondition:
		 * List of deleted versions of a node is returned.
		 * ### Further Information:
		 * The node is identified by three parameters:
		 * * parent ID
		 * * name
		 * * type (file, folder).
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort criteria are possible.
		 * Fields are connected via logical conjunction **AND**.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `expireAt:desc|size:asc`
		 * Sort by `expireAt` descending **AND** `size` ascending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `expireAt` | Expiration date |
		 * | `accessedAt` | Last access date |
		 * | `size` | Node size |
		 * | `classification` | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |
		 * | `createdAt` | Creation date |
		 * | `createdBy` | Creator first name, last name |
		 * | `updatedAt` | Last modification date |
		 * | `updatedBy` | Last modifier first name, last name |
		 * | `deletedAt` | Deleted date |
		 * | `deletedBy` | Deleter first name, last name |
		 * </details>
		 * Get v4/nodes/{node_id}/deleted_nodes/versions
		 * @param {string} node_id Parent ID (room or folder ID)
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} type Node type
		 * @param {string} name Node name
		 * @param {string} sort Sort string
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DeletedNodeVersionsList} OK
		 */
		RequestDeletedNodeVersions(node_id: string, type: string, name: string, sort: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined): Observable<DeletedNodeVersionsList> {
			return this.http.get<DeletedNodeVersionsList>(this.baseUri + 'v4/nodes/' + node_id + '/deleted_nodes/versions?type=' + (type == null ? '' : encodeURIComponent(type)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Unmark a node (room, folder or file) as favorite
		 * ### Description:
		 * Unmarks a node (room, folder or file) as favorite.
		 * ### Precondition:
		 * Authenticated user is allowed to <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128065; see</span> the node (i.e. `isBrowsable = true`).
		 * ### Postcondition:
		 * A node gets unmarked as favorite.
		 * ### Further Information:
		 * None.
		 * Delete v4/nodes/{node_id}/favorite
		 * @param {string} node_id Node ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		RemoveFavorite(node_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/nodes/' + node_id + '/favorite', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Mark a node (room, folder or file) as favorite
		 * ### Description:
		 * Marks a node (room, folder or file) as favorite.
		 * ### Precondition:
		 * Authenticated user is allowed to <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128065; see</span> the node (i.e. `isBrowsable = true`).
		 * ### Postcondition:
		 * A node gets marked as favorite.
		 * ### Further Information:
		 * None.
		 * Post v4/nodes/{node_id}/favorite
		 * @param {string} node_id Node ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		AddFavorite(node_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/nodes/' + node_id + '/favorite', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Move node(s)
		 * ### Description:
		 * Moves nodes (folder, file) to another parent.
		 * ### Precondition:
		 * Authenticated user with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span> and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete</span> permissions in the source parent and <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the target parent node.
		 * ### Postcondition:
		 * Nodes are moved to target parent.
		 * ### Further Information:
		 * Nodes **MUST** be in same source parent.
		 * **Rooms **CANNOT** be moved.**
		 * Download share id (if exists) gets changed if:
		 * - node with the same name exists in the target container
		 * - `resolutionStrategy` is `overwrite`
		 * - `keepShareLinks` is `true`
		 * ### Node naming convention:
		 * * Node (room, folder, file) names are limited to **150** characters.
		 * * Illegal names:
		 * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
		 * * Illegal characters in names:
		 * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
		 * Post v4/nodes/{node_id}/move_to
		 * @param {string} node_id Target parent node ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Node} OK
		 */
		MoveNodes(node_id: string, requestBody: MoveNodesRequest): Observable<Node> {
			return this.http.post<Node>(this.baseUri + 'v4/nodes/' + node_id + '/move_to', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request list of parent nodes
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
		 * ### Description:
		 * Requests a list of node ancestors, sorted from root node to the node's direct parent node.
		 * ### Precondition:
		 * User is allowed to browse through the node tree until the requested node.
		 * ### Postcondition:
		 * List of parent nodes is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/nodes/{node_id}/parents
		 * @param {string} node_id Node ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {NodeParentList} OK
		 */
		RequestNodeParents(node_id: string): Observable<NodeParentList> {
			return this.http.get<NodeParentList>(this.baseUri + 'v4/nodes/' + node_id + '/parents', {});
		}

		/**
		 * Request list of customers
		 * ### Description:
		 * Receive a list of customers.
		 * ### Precondition:
		 * Authentication with `X-Sds-Service-Token` required.
		 * ### Postcondition:
		 * List of customers is returned.
		 * ### Further Information:
		 * This list returns a maximum of **1000** entries.
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `trialDaysLeft:le:10|userMax:le:100`
		 * Get all customers with `10` trial days left **AND** user maximum **<=** `100`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `id` | Customer ID filter | `eq` | Customer ID equals value. | `positive Integer` |
		 * | `companyName` | Company name filter | `cn` | Company name contains value. | `search String` |
		 * | `customerContractType` | Customer contract type filter | `eq` | Customer contract type equals value. | <ul><li>`demo`</li><li>`free`</li><li>`pay`</li></ul> |
		 * | `trialDaysLeft` | Left trial days filter | `ge, le` | Left trial days are greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `trialDaysLeft:ge:5`&#124;`trialDaysLeft:le:10` |
		 * | `providerCustomerId` | Provider Customer ID filter | `cn, eq` | Provider Customer ID contains / equals value. | `search String` |
		 * | `quotaMax` | Maximum quota filter | `ge, le` | Maximum quota is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `quotaMax:ge:1024`&#124;`quotaMax:le:1073741824` | `positive Integer` |
		 * | `quotaUsed` | Used quota filter | `ge, le` | Used quota is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `quotaUsed:ge:1024`&#124;`quotaUsed:le:1073741824` | `positive Integer` |
		 * | `userMax` | User maximum filter | `ge, le` | User maxiumum is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `userMax:ge:10`&#124;`userMax:le:100` | `positive Integer` |
		 * | `userUsed` | Number of registered users filter | `ge, le` | Number of registered users is is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `userUsed:ge:10`&#124;`userUsed:le:100` | `positive Integer` |
		 * | `isLocked` | Lock status filter | `eq` |  | `true or false` |
		 * | `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
		 * | `updatedAt` | Last modification date filter | `ge, le` | Last modification date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `updatedAt:ge:2016-12-31`&#124;`updatedAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
		 * | `lastLoginAt` | Last login date filter | `ge, le` | Last login date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `lastLoginAt:ge:2016-12-31`&#124;`lastLoginAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
		 * | `userLogin` | User login filter | `eq` | User login name equals value.<br>Search user all logins e.g. `basic`, `active_directory`, `radius`. | `search String` |
		 * | `attributeKey` | Customer attribute key filter | `eq`, `nex` | Customer attribute key equals value / Customer attribute does **NOT** exist at customer | `search String` |
		 * | `attributeValue` | Customer attribute value filter | `eq` | Customer attribute value equals value. | `search String` |
		 * </details>
		 * ### Deprecated filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | <del>`activationCode`</del> | Activation code filter | `cn, eq` | Activation code contains / equals value. | `search String` |
		 * | <del>`lockStatus`</del> | Lock status filter | `eq` |  | <ul><li>`0` - unlocked</li><li>`1` - locked</li></ul> |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort criteria are possible.
		 * Fields are connected via logical conjunction **AND**.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `companyName:desc|userUsed:asc`
		 * Sort by `companyName` descending **AND** `userUsed` ascending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `companyName` | Company name |
		 * | `customerContractType` | Customer contract type |
		 * | `trialDaysLeft` | Number of remaining trial days (demo customers) |
		 * | `providerCustomerId` | Provider Customer ID |
		 * | `quotaMax` | Maximum quota |
		 * | `quotaUsed` | Currently used quota |
		 * | `userMax` | Maximum user number |
		 * | `userUsed` | Number of registered users |
		 * | `isLocked` | Lock status of customer |
		 * | `createdAt` | Creation date |
		 * | `updatedAt` | Last modification date |
		 * | `lastLoginAt` | Last login date of any user of this customer |
		 * </details>
		 * ### Deprecated sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | <del>`lockStatus`</del> | Lock status of customer |
		 * </details>
		 * Get v4/provisioning/customers
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @param {boolean} include_attributes Include custom customer attributes.
		 * @return {CustomerList} OK
		 */
		RequestCustomers(offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined, sort: string | null | undefined, include_attributes: boolean | null | undefined): Observable<CustomerList> {
			return this.http.get<CustomerList>(this.baseUri + 'v4/provisioning/customers?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&include_attributes=' + include_attributes, {});
		}

		/**
		 * Create customer
		 * ### Description:
		 * Create a new customer.
		 * ### Precondition:
		 * Authentication with `X-Sds-Service-Token` required.
		 * ### Postcondition:
		 * A new customer is created.
		 * ### Further Information:
		 * If no company name is set, first letter of the first name separated by dot followed by last name of the first administrator is used (e.g. `J.Doe`).
		 * Max quota has to be at least `1 MB` (= `1.048.576 B`).
		 * If `basic` authentication is enabled, the first administrator will get `basic` authentication by default.
		 * To create a first administrator without `basic` authentication it **MUST** be disabled explicitly.
		 * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
		 * ### Authentication Method Options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Authentication Method | Option Key | Option Value |
		 * | :--- | :--- | :--- |
		 * | `basic` / `sql` | `username` | Unique user identifier |
		 * | `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
		 * |  | `username` | Active Directory username according to authentication setting `userFilter` |
		 * | `radius` | `username` | RADIUS username |
		 * | `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
		 * |  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |
		 * </details>
		 * Post v4/provisioning/customers
		 * @return {void} 
		 */
		CreateCustomer(requestBody: NewCustomerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/provisioning/customers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove customer
		 * ### Description:
		 * Delete a customer.
		 * ### Precondition:
		 * Authentication with `X-Sds-Service-Token` required.
		 * ### Postcondition:
		 * Customer is deleted.
		 * ### Further Information:
		 * None.
		 * Delete v4/provisioning/customers/{customer_id}
		 * @param {string} customer_id Customer ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		RemoveCustomer(customer_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/provisioning/customers/' + customer_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get customer
		 * ### Description:
		 * Receive details of a selected customer.
		 * ### Precondition:
		 * Authentication with `X-Sds-Service-Token` required.
		 * ### Postcondition:
		 * Customer details are returned.
		 * ### Further Information:
		 * None.
		 * Get v4/provisioning/customers/{customer_id}
		 * @param {string} customer_id Customer ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {boolean} include_attributes Include custom customer attributes.
		 * @return {Customer} OK
		 */
		RequestCustomer(customer_id: string, include_attributes: boolean | null | undefined): Observable<Customer> {
			return this.http.get<Customer>(this.baseUri + 'v4/provisioning/customers/' + customer_id + '?include_attributes=' + include_attributes, {});
		}

		/**
		 * Update customer
		 * ### Description:
		 * Change selected attributes of a customer.
		 * ### Precondition:
		 * Authentication with `X-Sds-Service-Token` required.
		 * ### Postcondition:
		 * Selected attributes of customer are updated.
		 * ### Further Information:
		 * None.
		 * Put v4/provisioning/customers/{customer_id}
		 * @param {string} customer_id Customer ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {UpdateCustomerResponse} OK
		 */
		UpdateCustomer(customer_id: string, requestBody: UpdateCustomerRequest): Observable<UpdateCustomerResponse> {
			return this.http.put<UpdateCustomerResponse>(this.baseUri + 'v4/provisioning/customers/' + customer_id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request customer attributes
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.4.0</h3>
		 * ### Description:
		 * Retrieve a list of customer attributes.
		 * ### Precondition:
		 * Authentication with `X-Sds-Service-Token` required.
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read all customers</span> required.
		 * ### Postcondition:
		 * List of attributes is returned.
		 * ### Further Information:
		 * ### Filtering:
		 * Filters are case insensitive.
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `key:cn:searchString_1|value:cn:searchString_2`
		 * Filter by attribute key contains `searchString_1` **AND** attribute value contains `searchString_2`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `key` | Customer attribute key filter | `cn, eq, sw` | Attribute key contains / equals / starts with value. | `search String` |
		 * | `value` | Customer attribute value filter | `cn, eq, sw` | Attribute value contains / equals / starts with value. | `search String` |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort fields are supported.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `key:asc|value:desc`
		 * Sort by `key` ascending **AND** by `value` descending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `key` | Customer attribute key |
		 * | `value` | Customer attribute value |
		 * </details>
		 * Get v4/provisioning/customers/{customer_id}/customerAttributes
		 * @param {string} customer_id Customer ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @return {AttributesResponse} OK
		 */
		RequestCustomerAttributes(customer_id: string, offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined, sort: string | null | undefined): Observable<AttributesResponse> {
			return this.http.get<AttributesResponse>(this.baseUri + 'v4/provisioning/customers/' + customer_id + '/customerAttributes?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Set customer attributes
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.28.0</h3>
		 * ### Description:
		 * Set custom customer attributes.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> required.
		 * ### Postcondition:
		 * Custom customer attributes gets set.
		 * ### Further Information:
		 * Batch function.
		 * All existing customer attributes will be deleted.
		 * * Allowed characters for keys are: `[a-zA-Z0-9_-]`
		 * * Characters are **case-insensitive**.
		 * Post v4/provisioning/customers/{customer_id}/customerAttributes
		 * @param {string} customer_id Customer ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		SetCustomerAttributes(customer_id: string, requestBody: CustomerAttributes): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/provisioning/customers/' + customer_id + '/customerAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add or edit customer attributes
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.4.0</h3>
		 * ### Description:
		 * Add or edit custom customer attributes.
		 * <br/><br/><span style="font-weight: bold; color: red;"> &#128679; **Warning: Please note that the response with HTTP status code 200 (OK) is deprecated and will be replaced with HTTP status code 204 (No content)!**</span><br/>
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> required.
		 * ### Postcondition:
		 * Custom customer attributes get added or edited.
		 * ### Further Information:
		 * Batch function.
		 * If an entry exists before, it will be overwritten.
		 * * Allowed characters for keys are: `[a-zA-Z0-9_-]`
		 * * Characters are **case-insensitive**.
		 * Put v4/provisioning/customers/{customer_id}/customerAttributes
		 * @param {string} customer_id Customer ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Customer} OK **(DEPRECATED: WILL BE REPLACED BY 204: "No content")**
		 */
		UpdateCustomerAttributes(customer_id: string, requestBody: CustomerAttributes): Observable<Customer> {
			return this.http.put<Customer>(this.baseUri + 'v4/provisioning/customers/' + customer_id + '/customerAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove customer attribute
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.4.0</h3>
		 * ### Description:
		 * Delete a custom customer attribute.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> required.
		 * ### Postcondition:
		 * Custom customer attribute gets deleted.
		 * ### Further Information:
		 * * Allowed characters for keys are: `[a-zA-Z0-9_-]`
		 * * Characters are **case-insensitive**.
		 * Delete v4/provisioning/customers/{customer_id}/customerAttributes/{key}
		 * @param {string} customer_id Customer ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} key Key
		 * @return {void} 
		 */
		RemoveCustomerAttribute(customer_id: string, key: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/provisioning/customers/' + customer_id + '/customerAttributes/' + (key == null ? '' : encodeURIComponent(key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request list of customer users
		 * ### Description:
		 * Receive a list of users associated with a certain customer.
		 * ### Precondition:
		 * Authentication with `X-Sds-Service-Token` required.
		 * ### Postcondition:
		 * List of customer users is returned.
		 * ### Further Information:
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Except for `login`, `firstName` and  `lastName` - these are connected via logical disjunction (**OR**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `login:cn:searchString_1|firstName:cn:searchString_2|lockStatus:eq:2`
		 * Filter users by login contains `searchString_1` **OR** firstName contains `searchString_2` **AND** those who are **NOT** locked.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `email` | Email filter | `eq`, `cn` | Email contains value. | `search String` |
		 * | `userName` | User name filter | `eq`, `cn` | UserName contains value. | `search String` |
		 * | `firstName` | User first name filter | `cn` | User first name contains value. | `search String` |
		 * | `lastName` | User last name filter | `cn` | User last name contains value. | `search String` |
		 * | `isLocked` | User lock status filter | `eq` |  | `true or false` |
		 * | `effectiveRoles` | Filter users with DIRECT or DIRECT **AND** EFFECTIVE roles<ul><li>`false`: DIRECT roles</li><li>`true`: DIRECT **AND** EFFECTIVE roles</li></ul>DIRECT means: e.g. user gets role **directly** granted from someone with _grant permission_ right.<br>EFFECTIVE means: e.g. user gets role through **group membership**. | `eq` |  | `true or false`<br>default: `false` |
		 * | `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
		 * | `phone` | Phone filter | `eq` | Phone equals value. | `search String` |
		 * | `isEncryptionEnabled` | Encryption status filter<ul><li>client-side encryption</li><li>private key possession</li></ul> | `eq` |  | `true or false` |
		 * | `hasRole` | (**`NEW`**) User role filter<br>Depends on **effectiveRoles**.<br>For more information about roles check **`GET /roles`** API | `eq`, `neq` | User role equals value. | <ul><li>`CONFIG_MANAGER` - Manages global configuration</li><li>`USER_MANAGER` - Manages users</li><li>`GROUP_MANAGER` - Manages user groups</li><li>`ROOM_MANAGER` - Manages top level rooms</li><li>`LOG_AUDITOR` - Reads audit logs</li><li>`NONMEMBER_VIEWER` - Views users and groups when having room _"manage"_ permission</li><li>`USER` - Regular User role</li><li>`GUEST_USER` - Guest User role</li></ul> |
		 * </details>
		 * ### Deprecated filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | <del>`lockStatus`</del> | User lock status filter | `eq` | User lock status equals value. | <ul><li>`0` - Locked</li><li>`1` - Web access allowed</li><li>`2` - Web and mobile access allowed</li></ul> |
		 * | <del>`login`</del> |  User login filter | `cn` | User login contains value. | `search String` |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort fields are supported.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `firstName:asc|lastLoginSuccessAt:desc`
		 * Sort by `firstName` ascending **AND** by `lastLoginSuccessAt` descending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `userName` | User name |
		 * | `email` | User email |
		 * | `firstName` | User first name |
		 * | `lastName` | User last name |
		 * | `isLocked` | User lock status |
		 * | `lastLoginSuccessAt` | Last successful login date |
		 * | `expireAt` | Expiration date |
		 * | `createdAt` | Creation date |
		 * </details>
		 * ### Deprecated sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | <del>`gender`</del> | Gender |
		 * | <del>`lockStatus`</del> | User lock status |
		 * | <del>`login`</del> | User login |
		 * </details>
		 * Get v4/provisioning/customers/{customer_id}/users
		 * @param {string} customer_id Customer ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @param {boolean} include_attributes Include custom user attributes.
		 * @param {boolean} include_roles Include roles
		 * @param {boolean} include_manageable_rooms Include hasManageableRooms (deprecated)
		 * @return {UserList} OK
		 */
		RequestCustomerUsers(customer_id: string, offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined, sort: string | null | undefined, include_attributes: boolean | null | undefined, include_roles: boolean | null | undefined, include_manageable_rooms: boolean | null | undefined): Observable<UserList> {
			return this.http.get<UserList>(this.baseUri + 'v4/provisioning/customers/' + customer_id + '/users?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&include_attributes=' + include_attributes + '&include_roles=' + include_roles + '&include_manageable_rooms=' + include_manageable_rooms, {});
		}

		/**
		 * Request list of tenant webhooks
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
		 * ### Description:
		 * Get a list of webhooks for the tenant scope.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.
		 * ### Postcondition:
		 * List of webhooks is returned.
		 * ### Further Information:
		 * Output is limited to **500** entries.
		 * For more results please use filter criteria and paging (`offset` + `limit`).
		 * `EncryptionInfo` is **NOT** provided.
		 * Wildcard character is the asterisk character: **`*`**
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `name:cn:goo|createdAt:ge:2015-01-01`
		 * Get webhooks where name contains `goo` **AND** webhook creation date is **>=** `2015-01-01`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | **`id`** | Webhook id filter | `eq` | Webhook id equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**). |`positive number`|
		 * | **`name`** | Webhook type name| `cn, eq` | Webhook name contains / equals value. | `search String` |
		 * | **`isEnabled`** | Webhook isEnabled filter | `eq` |  | `true or false` |
		 * | **`createdAt`** | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
		 * | **`updatedAt`** | Last modification date filter | `ge, le` | Last modification date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `updatedAt:ge:2016-12-31`&#124;`updatedAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
		 * | **`expiration`** | Expiration date filter | `ge, le, eq` | Expiration date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `expiration:ge:2016-12-31`&#124;`expiration:le:2018-01-01` | `Date (yyyy-MM-dd)` |
		 * | **`lastFailStatus`** | Failure status filter | `eq` | Last HTTP status code. Set when a webhook is auto-disabled due to repeated delivery failures |`positive number`|
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort criteria are possible.
		 * Fields are connected via logical conjunction **AND**.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `name:desc|isEnabled:asc`
		 * Sort by `name` descending and `isEnabled` ascending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | **`id`** | Webhook id |
		 * | **`name`** | Webhook name |
		 * | **`isEnabled`** | Webhook isEnabled |
		 * | **`createdAt`** | Creation date |
		 * | **`updatedAt`** | Last modification date |
		 * | **`expiration`** | Expiration date |
		 * </details>
		 * Get v4/provisioning/webhooks
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @return {WebhookList} OK
		 */
		RequestListOfTenantWebhooks(offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined, sort: string | null | undefined): Observable<WebhookList> {
			return this.http.get<WebhookList>(this.baseUri + 'v4/provisioning/webhooks?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Create tenant webhook
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
		 * ### Description:
		 * Create a new webhook for the tenant scope.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.
		 * ### Postcondition:
		 * Webhook is created for given event types.
		 * ### Further Information:
		 * URL must begin with the `HTTPS` scheme.
		 * Webhook names are limited to 150 characters.
		 * ### Available event types:
		 * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Name | Description | Scope |
		 * | :--- | :--- | :--- |
		 * | **`customer.created`** | Triggered when a new customer is created | Tenant Webhook |
		 * | **`customer.deleted`** | Triggered when a user is deleted | Tenant Webhook |
		 * | **`webhook.expiring`** | Triggered 30/20/10/1 days before a webhook expires |  Tenant Webhook |
		 * </details>
		 * Post v4/provisioning/webhooks
		 * @return {void} 
		 */
		CreateTenantWebhook(requestBody: CreateWebhookRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/provisioning/webhooks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request list of event types
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
		 * ### Description:
		 * Get a list of available event types.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.
		 * ### Postcondition:
		 * List of available event types is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/provisioning/webhooks/event_types
		 * @return {EventTypeList} OK
		 */
		RequestListOfEventTypesForTenant(): Observable<EventTypeList> {
			return this.http.get<EventTypeList>(this.baseUri + 'v4/provisioning/webhooks/event_types', {});
		}

		/**
		 * Remove tenant webhook
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
		 * ### Description:
		 * Delete a webhook for the tenant scope.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.
		 * ### Postcondition:
		 * Webhook is deleted.
		 * ### Further Information:
		 * None.
		 * Delete v4/provisioning/webhooks/{webhook_id}
		 * @param {string} webhook_id Webhook ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		RemoveTenantWebhook(webhook_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/provisioning/webhooks/' + webhook_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request tenant webhook
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
		 * ### Description:
		 * Get a specific webhook for the tenant scope.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.
		 * ### Postcondition:
		 * Webhook is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/provisioning/webhooks/{webhook_id}
		 * @param {string} webhook_id Webhook ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Webhook} OK
		 */
		RequestTenantWebhook(webhook_id: string): Observable<Webhook> {
			return this.http.get<Webhook>(this.baseUri + 'v4/provisioning/webhooks/' + webhook_id, {});
		}

		/**
		 * Update tenant webhook
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
		 * ### Description:
		 * Update an existing webhook for the tenant scope.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.
		 * ### Postcondition:
		 * Webhook is updated.
		 * ### Further Information:
		 * URL must begin with the `HTTPS` scheme.
		 * Webhook names are limited to 150 characters.
		 * ### Available event types:
		 * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Name | Description | Scope |
		 * | :--- | :--- | :--- |
		 * | **`customer.created`** | Triggered when a new customer is created | Tenant Webhook |
		 * | **`customer.deleted`** | Triggered when a user is deleted | Tenant Webhook |
		 * | **`webhook.expiring`** | Triggered 30/20/10/1 days before a webhook expires |  Tenant Webhook |
		 * </details>
		 * Put v4/provisioning/webhooks/{webhook_id}
		 * @param {string} webhook_id Webhook ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Webhook} OK
		 */
		UpdateTenantWebhook(webhook_id: string, requestBody: UpdateWebhookRequest): Observable<Webhook> {
			return this.http.put<Webhook>(this.baseUri + 'v4/provisioning/webhooks/' + webhook_id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reset tenant webhook lifetime
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
		 * ### Description:
		 * Reset the lifetime of a webhook for the tenant scope.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage webhook</span> required.
		 * ### Postcondition:
		 * Lifetime of the webhook is reset.
		 * ### Further Information:
		 * None.
		 * Post v4/provisioning/webhooks/{webhook_id}/reset_lifetime
		 * @param {string} webhook_id Webhook ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Webhook} OK
		 */
		ResetTenantWebhookLifetime(webhook_id: string): Observable<Webhook> {
			return this.http.post<Webhook>(this.baseUri + 'v4/provisioning/webhooks/' + webhook_id + '/reset_lifetime', null, {});
		}

		/**
		 * Request public Download Share information
		 * ### Description:
		 * Retrieve the public information of a Download Share.
		 * ### Precondition:
		 * None.
		 * ### Postcondition:
		 * Download Share information is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/public/shares/downloads/{access_key}
		 * @param {string} access_key Access key
		 * @return {PublicDownloadShare} OK
		 */
		RequestPublicDownloadShareInfo(access_key: string): Observable<PublicDownloadShare> {
			return this.http.get<PublicDownloadShare>(this.baseUri + 'v4/public/shares/downloads/' + (access_key == null ? '' : encodeURIComponent(access_key)), {});
		}

		/**
		 * Generate download URL
		 * ### Description:
		 * Generate a download URL to retrieve a shared file.
		 * ### Precondition:
		 * None.
		 * ### Postcondition:
		 * Download URL and token are generated and returned.
		 * ### Further Information:
		 * Use `downloadUrl` the download `token` is deprecated.
		 * Post v4/public/shares/downloads/{access_key}
		 * @param {string} access_key Access key
		 * @return {void} 
		 */
		GenerateDownloadUrlPublic(access_key: string, requestBody: PublicDownloadTokenGenerateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/public/shares/downloads/' + (access_key == null ? '' : encodeURIComponent(access_key)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Download file with token
		 * ### Description:
		 * Download a file (or zip archive if target is a folder or room).
		 * ### Precondition:
		 * Valid download token.
		 * ### Postcondition:
		 * Stream is returned.
		 * ### Further Information:
		 * Range requests are supported.
		 * Range requests are illegal for zip archive download.
		 * Get v4/public/shares/downloads/{access_key}/{token}
		 * @param {string} access_key Access key
		 * @param {string} token Download token
		 * @param {boolean} generic_mimetype Always return `application/octet-stream` instead of specific mimetype
		 * @param {boolean} inline Use Content-Disposition: `inline` instead of `attachment`
		 * @return {void} OK
		 */
		DownloadFileViaTokenPublic(access_key: string, token: string, generic_mimetype: boolean | null | undefined, inline: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/public/shares/downloads/' + (access_key == null ? '' : encodeURIComponent(access_key)) + '/' + (token == null ? '' : encodeURIComponent(token)) + '&generic_mimetype=' + generic_mimetype + '&inline=' + inline, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request public Upload Share information
		 * ### Description:
		 * Provides information about the desired Upload Share.
		 * ### Precondition:
		 * Only `userUserPublicKeyList` is returned to the users who owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span>
		 * ### Postcondition:
		 * None.
		 * ### Further Information:
		 * If no password is set, the returned information is reduced to the following attributes (if available):
		 * * `name`
		 * * `createdAt`
		 * * `isProtected`
		 * * `isEncrypted`
		 * * `showUploadedFiles`
		 * * `userUserPublicKeyList` (if parent is end-to-end encrypted)
		 * Only if the password is transmitted as `X-Sds-Share-Password` header, all values are returned.
		 * Get v4/public/shares/uploads/{access_key}
		 * @param {string} access_key Access key
		 * @return {PublicUploadShare} OK
		 */
		RequestPublicUploadShareInfo(access_key: string): Observable<PublicUploadShare> {
			return this.http.get<PublicUploadShare>(this.baseUri + 'v4/public/shares/uploads/' + (access_key == null ? '' : encodeURIComponent(access_key)), {});
		}

		/**
		 * Create new file upload channel
		 * ### Description:
		 * Create a new upload channel.
		 * ### Precondition:
		 * None.
		 * ### Postcondition:
		 * Upload channel is created and corresponding upload URL, token & upload ID are returned.
		 * ### Further Information:
		 * Use `uploadUrl` the upload `token` is deprecated.
		 * Please provide the size of the intended upload so that the quota can be checked in advanced and no data is transferred unnecessarily.
		 * ### Node naming convention:
		 * * Node (room, folder, file) names are limited to **150** characters.
		 * * Illegal names:
		 * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
		 * * Illegal characters in names:
		 * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
		 * Post v4/public/shares/uploads/{access_key}
		 * @param {string} access_key Access key
		 * @return {void} 
		 */
		CreateShareUploadChannel(access_key: string, requestBody: CreateShareUploadChannelRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/public/shares/uploads/' + (access_key == null ? '' : encodeURIComponent(access_key)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel file upload
		 * ### Description:
		 * Abort (chunked) upload via Upload Share.
		 * ### Precondition:
		 * Valid Upload ID.
		 * ### Postcondition:
		 * Aborts upload and invalidates upload ID / token.
		 * ### Further Information:
		 * None.
		 * Delete v4/public/shares/uploads/{access_key}/{upload_id}
		 * @param {string} access_key Access key
		 * @param {string} upload_id Upload channel ID
		 * @return {void} 
		 */
		CancelFileUploadViaShare(access_key: string, upload_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/public/shares/uploads/' + (access_key == null ? '' : encodeURIComponent(access_key)) + '/' + (upload_id == null ? '' : encodeURIComponent(upload_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request status of S3 file upload
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>
		 * ### Description:
		 * Request status of a S3 file upload.
		 * ### Precondition:
		 * An upload channel has been created and the user has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the parent container (room or folder).
		 * ### Postcondition:
		 * Status of S3 multipart upload request is returned.
		 * ### Further Information:
		 * None.
		 * ### Possible errors:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Http Status | Error Code | Description |
		 * | :--- | :--- | :--- |
		 * | `400 Bad Request` | `-80000` | Mandatory fields cannot be empty |
		 * | `400 Bad Request` | `-80001` | Invalid positive number |
		 * | `400 Bad Request` | `-80002` | Invalid number |
		 * | `400 Bad Request` | `-40001` | (Target) room is not encrypted |
		 * | `400 Bad Request` | `-40755` | Bad file name |
		 * | `400 Bad Request` | `-40763` | File key must be set for an upload into encrypted room |
		 * | `400 Bad Request` | `-50506` | Exceeds the number of files for this Upload Share |
		 * | `403 Forbidden` |  | Access denied |
		 * | `404 Not Found` | `-20501` | Upload not found |
		 * | `404 Not Found` | `-40000` | Container not found |
		 * | `404 Not Found` | `-41000` | Node not found |
		 * | `404 Not Found` | `-70501` | User not found |
		 * | `409 Conflict` | `-40010` | Container cannot be overwritten |
		 * | `409 Conflict` |  | File cannot be overwritten |
		 * | `500 Internal Server Error` |  | System Error |
		 * | `502 Bad Gateway` |  | S3 Error |
		 * | `502 Insufficient Storage` | `-50504` | Exceeds the quota for this Upload Share |
		 * | `502 Insufficient Storage` | `-40200` | Exceeds the free node quota in room |
		 * | `502 Insufficient Storage` | `-90200` | Exceeds the free customer quota |
		 * | `502 Insufficient Storage` | `-90201` | Exceeds the free customer physical disk space |
		 * </details>
		 * Get v4/public/shares/uploads/{access_key}/{upload_id}
		 * @param {string} access_key Access key
		 * @param {string} upload_id Upload channel ID
		 * @return {S3ShareUploadStatus} OK
		 */
		RequestUploadStatusPublic(access_key: string, upload_id: string): Observable<S3ShareUploadStatus> {
			return this.http.get<S3ShareUploadStatus>(this.baseUri + 'v4/public/shares/uploads/' + (access_key == null ? '' : encodeURIComponent(access_key)) + '/' + (upload_id == null ? '' : encodeURIComponent(upload_id)), {});
		}

		/**
		 * Complete file upload
		 * ### Description:
		 * Finalize (chunked) upload via Upload Share.
		 * ### Precondition:
		 * Valid upload ID.
		 * Only returns users that owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span>
		 * ### Postcondition:
		 * Finalizes upload.
		 * ### Further Information:
		 * Chunked uploads (range requests) are supported.
		 * Please ensure that all chunks have been transferred correctly before finishing the upload.
		 * If file hash has been created in time a `201 Created` will be responded and hash will be part of response, otherwise it will be a `202 Accepted` without it.
		 * Put v4/public/shares/uploads/{access_key}/{upload_id}
		 * @param {string} access_key Access key
		 * @param {string} upload_id Upload channel ID
		 * @return {void} 
		 */
		CompleteFileUploadViaShare(access_key: string, upload_id: string, requestBody: UserFileKeyList): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/public/shares/uploads/' + (access_key == null ? '' : encodeURIComponent(access_key)) + '/' + (upload_id == null ? '' : encodeURIComponent(upload_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Complete S3 file upload
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>
		 * ### Description:
		 * Finishes a S3 file upload and closes the corresponding upload channel.
		 * ### Precondition:
		 * Valid upload ID.
		 * Only returns users that owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span>
		 * ### Postcondition:
		 * Upload channel is closed. S3 multipart upload request is completed.
		 * ### Further Information:
		 * None.
		 * Put v4/public/shares/uploads/{access_key}/{upload_id}/s3
		 * @param {string} access_key Access key
		 * @param {string} upload_id Upload channel ID
		 * @return {void} 
		 */
		CompleteS3FileUploadViaShare(access_key: string, upload_id: string, requestBody: CompleteS3ShareUploadRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/public/shares/uploads/' + (access_key == null ? '' : encodeURIComponent(access_key)) + '/' + (upload_id == null ? '' : encodeURIComponent(upload_id)) + '/s3', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate presigned URLs for S3 file upload
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>
		 * ### Description:
		 * Generate presigned URLs for S3 file upload.
		 * ### Precondition:
		 * Valid upload ID
		 * ### Postcondition:
		 * List of presigned URLs is returned.
		 * ### Further Information:
		 * The size for each part must be >= 5 MB, except for the last part.
		 * The part number of the first part in S3 is 1 (not 0).
		 * Use HTTP method `PUT` for uploading bytes via presigned URL.
		 * Post v4/public/shares/uploads/{access_key}/{upload_id}/s3_urls
		 * @param {string} access_key Access key
		 * @param {string} upload_id Upload channel ID
		 * @return {void} 
		 */
		GeneratePresignedUrlsPublic(access_key: string, upload_id: string, requestBody: GeneratePresignedUrlsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/public/shares/uploads/' + (access_key == null ? '' : encodeURIComponent(access_key)) + '/' + (upload_id == null ? '' : encodeURIComponent(upload_id)) + '/s3_urls', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request third-party software dependencies
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
		 * ### Description:
		 * Provides information about used third-party software dependencies.
		 * ### Precondition:
		 * None.
		 * ### Postcondition:
		 * List of the third-party software dependencies used by **DRACOON Core** (referred to as _"Server"_) is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/public/software/third_party_dependencies
		 * @return {Array<ThirdPartyDependenciesData>} OK
		 */
		RequestThirdPartyDependencies(): Observable<Array<ThirdPartyDependenciesData>> {
			return this.http.get<Array<ThirdPartyDependenciesData>>(this.baseUri + 'v4/public/software/third_party_dependencies', {});
		}

		/**
		 * Request software version information
		 * ### Description:
		 * Public software version information.
		 * ### Precondition:
		 * None.
		 * ### Postcondition:
		 * Sofware version information is returned.
		 * ### Further Information:
		 * The version of DRACOON Server consists of two components:
		 * * **API**
		 * * **Core** (referred to as _"Server"_)
		 * which are versioned individually.
		 * Get v4/public/software/version
		 * @return {SoftwareVersionData} OK
		 */
		RequestSoftwareVersion(): Observable<SoftwareVersionData> {
			return this.http.get<SoftwareVersionData>(this.baseUri + 'v4/public/software/version', {});
		}

		/**
		 * Request system information
		 * ### Description:
		 * Provides information about system.
		 * ### Precondition:
		 * None.
		 * ### Postcondition:
		 * System information is returned.
		 * ### Further Information:
		 * Authentication methods are sorted by **priority** attribute.
		 * Smaller values have higher priority.
		 * Authentication method with highest priority is considered as default.
		 * ### System information:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description | Value |
		 * | :--- | :--- | :--- |
		 * | `languageDefault` | Defines which language should be default. | `ISO 639-1 code` |
		 * | `hideLoginInputFields` | Defines if login fields should be hidden. | `true or false` |
		 * | `s3Hosts` | List of available S3 hosts. | `String array` |
		 * | `s3EnforceDirectUpload` | Determines whether S3 direct upload is enforced or not. | `true or false` |
		 * | `useS3Storage` | Determines whether S3 Storage enabled and used. | `true or false` |
		 * </details>
		 * ### Authentication methods:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Authentication Method | Description |
		 * | :--- | :--- |
		 * | `basic` | **Basic** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their credentials stored in the database.<br>Formerly known as `sql`. |
		 * | `active_directory` | **Active Directory** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their Active Directory credentials. |
		 * | `radius` | **RADIUS** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their RADIUS username, their PIN and a token password. |
		 * | `openid` | **OpenID Connect** authentication globally allowed.This option **MUST** be activated to allow users to log in with their OpenID Connect identity. |
		 * | `hideLoginInputFields` | Determines whether input fields for login should be enabled | `true or false` |
		 * </details>
		 * Get v4/public/system/info
		 * @param {boolean} is_enabled Show only enabled authentication methods
		 * @return {SystemInfo} OK
		 */
		RequestSystemInfo(is_enabled: boolean | null | undefined): Observable<SystemInfo> {
			return this.http.get<SystemInfo>(this.baseUri + 'v4/public/system/info?is_enabled=' + is_enabled, {});
		}

		/**
		 * Request Active Directory authentication information
		 * ### Description:
		 * Provides information about Active Directory authentication options.
		 * ### Precondition:
		 * None.
		 * ### Postcondition:
		 * Active Directory authentication options information is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/public/system/info/auth/ad
		 * @param {boolean} is_global_available Show only global available items
		 * @return {ActiveDirectoryAuthInfo} OK
		 */
		RequestActiveDirectoryAuthInfo(is_global_available: boolean | null | undefined): Observable<ActiveDirectoryAuthInfo> {
			return this.http.get<ActiveDirectoryAuthInfo>(this.baseUri + 'v4/public/system/info/auth/ad?is_global_available=' + is_global_available, {});
		}

		/**
		 * Request OpenID Connect provider authentication information
		 * ### Description:
		 * Provides information about OpenID Connect authentication options.
		 * ### Precondition:
		 * None.
		 * ### Postcondition:
		 * OpenID Connect authentication options information is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/public/system/info/auth/openid
		 * @param {boolean} is_global_available Show only global available items
		 * @return {OpenIdAuthInfo} OK
		 */
		RequestOpenIdAuthInfo(is_global_available: boolean | null | undefined): Observable<OpenIdAuthInfo> {
			return this.http.get<OpenIdAuthInfo>(this.baseUri + 'v4/public/system/info/auth/openid?is_global_available=' + is_global_available, {});
		}

		/**
		 * Request system time
		 * ### Description:
		 * Retrieve the actual server time.
		 * ### Precondition:
		 * None.
		 * ### Postcondition:
		 * Server time is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/public/time
		 * @return {SdsServerTime} OK
		 */
		RequestSystemTime(): Observable<SdsServerTime> {
			return this.http.get<SdsServerTime>(this.baseUri + 'v4/public/time', {});
		}

		/**
		 * Request list of subscription scopes
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
		 * ### Description:
		 * Retrieve a list of subscription scopes.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * List of scopes is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/resources/user/notifications/scopes
		 * @return {NotificationScopeList} OK
		 */
		RequestSubscriptionScopes(): Observable<NotificationScopeList> {
			return this.http.get<NotificationScopeList>(this.baseUri + 'v4/resources/user/notifications/scopes', {});
		}

		/**
		 * Request user avatar
		 * ### Description:
		 * Get user avatar.
		 * ### Precondition:
		 * Valid user ID and avatar UUID
		 * ### Postcondition:
		 * Avatar is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/resources/users/{user_id}/avatar/{uuid}
		 * @param {string} uuid UUID of the avatar
		 * @param {string} user_id User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Avatar} OK
		 */
		RequestUserAvatar(uuid: string, user_id: string): Observable<Avatar> {
			return this.http.get<Avatar>(this.baseUri + 'v4/resources/users/' + user_id + '/avatar/' + (uuid == null ? '' : encodeURIComponent(uuid)), {});
		}

		/**
		 * Request all roles with assigned rights
		 * ### Description:
		 * Retrieve a list of all roles with assigned rights.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
		 * ### Postcondition:
		 * List of roles with assigned rights is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/roles
		 * @return {RoleList} OK
		 */
		RequestRoles(): Observable<RoleList> {
			return this.http.get<RoleList>(this.baseUri + 'v4/roles', {});
		}

		/**
		 * Revoke granted role from group(s)
		 * ### Description:
		 * Revoke granted group(s) from a role.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; grant permission on desired role</span> required.
		 * For each role, at least one non-expiring user **MUST** remain who may grant the role.
		 * ### Postcondition:
		 * One or more groups will be removed from a role.
		 * ### Further Information:
		 * None.
		 * Delete v4/roles/{role_id}/groups
		 * @param {number} role_id Role ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {RoleGroupList} OK
		 */
		RevokeRoleGroups(role_id: number): Observable<RoleGroupList> {
			return this.http.delete<RoleGroupList>(this.baseUri + 'v4/roles/' + role_id + '/groups', {});
		}

		/**
		 * Request groups with specific role
		 * ### Description:
		 * Get all groups with a specific role.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read groups</span> required.
		 * ### Postcondition:
		 * List of to the role assigned groups is returned.
		 * ### Further Information:
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `isMember:eq:false|name:cn:searchString`
		 * Get all groups that are **NOT** a member of that role **AND** whose name contains `searchString`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `isMember` | Filter the groups which are (not) member of that role | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
		 * | `name` | Group name filter | `cn` | Group name contains value. | `search String` |
		 * </details>
		 * Get v4/roles/{role_id}/groups
		 * @param {number} role_id Role ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @return {RoleGroupList} OK
		 */
		RequestRoleGroups(role_id: number, offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined): Observable<RoleGroupList> {
			return this.http.get<RoleGroupList>(this.baseUri + 'v4/roles/' + role_id + '/groups?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Assign group(s) to the role
		 * ### Description:
		 * Assign group(s) to a role.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; grant permission on desired role</span> required.
		 * ### Postcondition:
		 * One or more groups will be added to a role.
		 * ### Further Information:
		 * None.
		 * Post v4/roles/{role_id}/groups
		 * @param {number} role_id Role ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {RoleGroupList} OK
		 */
		AddRoleGroups(role_id: number, requestBody: GroupIds): Observable<RoleGroupList> {
			return this.http.post<RoleGroupList>(this.baseUri + 'v4/roles/' + role_id + '/groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Revoke granted role from user(s)
		 * ### Description:
		 * Revoke granted user(s) from a role.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; grant permission on desired role</span> required.
		 * For each role, at least one non-expiring user **MUST** remain who may grant the role.
		 * ### Postcondition:
		 * One or more users will be removed from a role.
		 * ### Further Information:
		 * None.
		 * Delete v4/roles/{role_id}/users
		 * @param {number} role_id Role ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {RoleUserList} OK
		 */
		RevokeRoleUsers(role_id: number): Observable<RoleUserList> {
			return this.http.delete<RoleUserList>(this.baseUri + 'v4/roles/' + role_id + '/users', {});
		}

		/**
		 * Request users with specific role
		 * ### Description:
		 * Get all users with a specific role.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
		 * ### Postcondition:
		 * List of users is returned.
		 * ### Further Information:
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `isMember:eq:false|user:cn:searchString`
		 * Get all users that are **NOT** member of that role **AND** whose (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) is like `searchString`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `user` | User filter | `cn` | User contains value (`firstName` **OR** `lastName` **OR** `email` **OR** `username`). | `search String` |
		 * | `isMember` | Filter the users which are (not) member of that role | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
		 * </details>
		 * ### Deprecated filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | <del>`displayName`</del> | User display name filter (use `user` filter) | `cn` | User display name contains value (`firstName` **OR** `lastName` **OR** `email`). | `search String` |
		 * </details>
		 * Get v4/roles/{role_id}/users
		 * @param {number} role_id Role ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @return {RoleUserList} OK
		 */
		RequestRoleUsers(role_id: number, offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined): Observable<RoleUserList> {
			return this.http.get<RoleUserList>(this.baseUri + 'v4/roles/' + role_id + '/users?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Assign user(s) to the role
		 * ### Description:
		 * Assign user(s) to a role.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; grant permission on desired role</span> required.
		 * ### Postcondition:
		 * One or more users will be added to a role.
		 * ### Further Information:
		 * None.
		 * Post v4/roles/{role_id}/users
		 * @param {number} role_id Role ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {RoleUserList} OK
		 */
		AddRoleUsers(role_id: number, requestBody: UserIds): Observable<RoleUserList> {
			return this.http.post<RoleUserList>(this.baseUri + 'v4/roles/' + role_id + '/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request customer settings
		 * ### Description:
		 * Retrieve customer related settings.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read config</span> required.
		 * ### Postcondition:
		 * List of available settings is returned.
		 * ### Further Information:
		 * None.
		 * ### Configurable customer settings:
		 * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description                                                                                                                                                           | Value |
		 * | :--- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------| :--- |
		 * | `homeRoomParentName` | Name of the container in which all user's home rooms are located.<br>`null` if `homeRoomsActive` is `false`.                                                          | `String` |
		 * | `homeRoomQuota` | Refers to the quota of each single user's home room.<br>`0` represents no quota.<br>`null` if `homeRoomsActive` is `false`.                                           | `positive Long` |
		 * | `homeRoomsActive` | If set to `true`, every user with an Active Directory account or OpenID Connect account gets a personal homeroom.<br>Once activated, this **CANNOT** be deactivated. | `true or false` |
		 * </details>
		 * Get v4/settings
		 * @return {CustomerSettingsResponse} OK
		 */
		RequestSettings(): Observable<CustomerSettingsResponse> {
			return this.http.get<CustomerSettingsResponse>(this.baseUri + 'v4/settings', {});
		}

		/**
		 * Set customer settings
		 * ### Description:
		 * Set customer related settings.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> required.
		 * ### Postcondition:
		 * Provided settings are updated.
		 * ### Further Information:
		 * None.
		 * ### Configurable customer settings
		 * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description                                                                                                                                                          | Value |
		 * | :--- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------| :--- |
		 * | `homeRoomParentName` | Name of the container in which all user's home rooms are located.<br>`null` if `homeRoomsActive` is `false`.                                                         | `String` |
		 * | `homeRoomQuota` | Refers to the quota of each single user's home room.<br>`0` represents no quota.<br>`null` if `homeRoomsActive` is `false`.                                          | `positive Long` |
		 * | `homeRoomsActive` | If set to `true`, every user with an Active Directory account or OpenID Connect account gets a personal homeroom.<br>Once activated, this **CANNOT** be deactivated. | `true or false` |
		 * </details>
		 * ### Node naming convention:
		 * * Node (room, folder, file) names are limited to **150** characters.
		 * * Illegal names:
		 * `'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
		 * * Illegal characters in names:
		 * `'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `
		 * Put v4/settings
		 * @return {CustomerSettingsResponse} OK
		 */
		SetSettings(requestBody: CustomerSettingsRequest): Observable<CustomerSettingsResponse> {
			return this.http.put<CustomerSettingsResponse>(this.baseUri + 'v4/settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove system rescue key pair
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
		 * ### Description:
		 * Remove the system rescue key pair.
		 * ### Precondition:
		 * * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span>
		 * * Existence of own key pair
		 * ### Postcondition:
		 * Key pair is removed (cf. further information below).
		 * ### Further Information:
		 * Please set a new system rescue key pair first and re-encrypt file keys with it.
		 * If no version is set, deleted key pair with lowest preference value.
		 * Although, `version` **SHOULD** be set.
		 * Delete v4/settings/keypair
		 * @param {string} version Version (NEW)
		 * @return {void} 
		 */
		RemoveSystemRescueKeyPair(version: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/settings/keypair?version=' + (version == null ? '' : encodeURIComponent(version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request system rescue key pair
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
		 * ### Description:
		 * Retrieve the system rescue key pair.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span>
		 * ### Postcondition:
		 * Key pair is returned.
		 * ### Further Information:
		 * If more than one key pair exists the one with highest preference value is returned.
		 * Get v4/settings/keypair
		 * @param {string} version Version (NEW)
		 * @return {UserKeyPairContainer} OK
		 */
		RequestSystemRescueKeyPair(version: string | null | undefined): Observable<UserKeyPairContainer> {
			return this.http.get<UserKeyPairContainer>(this.baseUri + 'v4/settings/keypair?version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Activate client-side encryption for customer
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
		 * ### Description:
		 * Set the system rescue key pair and activate client-side encryption for according customer.
		 * ### Precondition:
		 * * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span>
		 * * Existence of own key pair
		 * ### Postcondition:
		 * System rescue key pair is set and client-side encryption is enabled.
		 * ### Further Information:
		 * Sets the ability for this customer to encrypt rooms.
		 * Once enabled on customer level, it **CANNOT** be unset.
		 * On activation, a customer rescue key pair **MUST** be set.
		 * Post v4/settings/keypair
		 * @return {void} 
		 */
		SetSystemRescueKeyPair(requestBody: UserKeyPairContainer): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/settings/keypair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request all system rescue key pairs
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
		 * ### Description:
		 * Retrieve all system rescue key pairs to allow migrating system-rescue-key-encrypted file keys.
		 * ### Precondition:
		 * * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span>
		 * * Existence of own key pair
		 * ### Postcondition:
		 * List of key pairs is returned.
		 * ### Further Information:
		 * In the case of an algorithm migration of a system rescue key, one should create the new key pair before deleting the old one.
		 * This allows re-encrypting file keys with the new key pair, using the old one.
		 * This API allows to retrieve both key pairs, in contrast to `GET /settings/keypair`, which only delivers the preferred one.
		 * Get v4/settings/keypairs
		 * @return {Array<UserKeyPairContainer>} OK
		 */
		RequestAllSystemRescueKeyPairs(): Observable<Array<UserKeyPairContainer>> {
			return this.http.get<Array<UserKeyPairContainer>>(this.baseUri + 'v4/settings/keypairs', {});
		}

		/**
		 * Create system rescue key pair and preserve copy of old private key
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
		 * ### Description:
		 * Create system rescue key pair and preserve copy of old private key.
		 * ### Precondition:
		 * * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span>
		 * * Existence of own key pair
		 * ### Postcondition:
		 * System rescue key pair is created.
		 * Copy of old private key is preserved.
		 * ### Further Information:
		 * You can submit your old private key, encrypted with your current password.
		 * This allows migrating file keys encrypted with your old key pair to the new one.
		 * Post v4/settings/keypairs
		 * @return {void} 
		 */
		CreateAndPreserveKeyPair(requestBody: CreateKeyPairRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/settings/keypairs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request list of notification channels
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
		 * ### Description:
		 * Retrieve a list of configured notification channels.
		 * ### Precondition:
		 * Right _"change config"_ required.
		 * ### Postcondition:
		 * List of notification channels is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/settings/notifications/channels
		 * @return {NotificationChannelList} OK
		 */
		RequestNotificationChannels(): Observable<NotificationChannelList> {
			return this.http.get<NotificationChannelList>(this.baseUri + 'v4/settings/notifications/channels', {});
		}

		/**
		 * Toggle notification channels
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
		 * ### Description:
		 * Toggle configured notification channels.
		 * ### Precondition:
		 * Right _"change config"_ required.
		 * ### Postcondition:
		 * Channel status is switched.
		 * ### Further Information:
		 * None.
		 * Put v4/settings/notifications/channels
		 * @return {NotificationChannelList} OK
		 */
		ToggleNotificationChannels(requestBody: NotificationChannelActivationRequest): Observable<NotificationChannelList> {
			return this.http.put<NotificationChannelList>(this.baseUri + 'v4/settings/notifications/channels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request list of webhooks
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
		 * ### Description:
		 * Get a list of webhooks for the customer scope.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.
		 * ### Postcondition:
		 * List of webhooks is returned.
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `name:cn:goo|createdAt:ge:2015-01-01`
		 * Get webhooks where name contains `goo` **AND** webhook creation date is **>=** `2015-01-01`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | **`id`** | Webhook id filter | `eq` | Webhook id equals value.<br>Multiple values are allowed and will be connected via logical disjunction (**OR**). |`positive number`|
		 * | **`name`** | Webhook type name| `cn, eq` | Webhook name contains / equals value. | `search String` |
		 * | **`isEnabled`** | Webhook isEnabled filter | `eq` |  | `true or false` |
		 * | **`createdAt`** | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
		 * | **`updatedAt`** | Last modification date filter | `ge, le` | Last modification date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `updatedAt:ge:2016-12-31`&#124;`updatedAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
		 * | **`expiration`** | Expiration date filter | `ge, le, eq` | Expiration date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `expiration:ge:2016-12-31`&#124;`expiration:le:2018-01-01` | `Date (yyyy-MM-dd)` |
		 * | **`lastFailStatus`** | Failure status filter | `eq` | Last HTTP status code. Set when a webhook is auto-disabled due to repeated delivery failures |`positive number`|
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort criteria are possible.
		 * Fields are connected via logical conjunction **AND**.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `name:desc|isEnabled:asc`
		 * Sort by `name` descending and `isEnabled` ascending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | **`id`** | Webhook id |
		 * | **`name`** | Webhook name |
		 * | **`isEnabled`** | Webhook isEnabled |
		 * | **`createdAt`** | Creation date |
		 * | **`updatedAt`** | Last modification date |
		 * | **`expiration`** | Expiration date |
		 * </details>
		 * Get v4/settings/webhooks
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @return {WebhookList} OK
		 */
		RequestListOfWebhooks(offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined, sort: string | null | undefined): Observable<WebhookList> {
			return this.http.get<WebhookList>(this.baseUri + 'v4/settings/webhooks?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Create webhook
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
		 * ### Description:
		 * Create a new webhook for the customer scope.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.
		 * ### Postcondition:
		 * Webhook is created for given event types.
		 * ### Further Information:
		 * URL must begin with the `HTTPS` scheme.
		 * Webhook names are limited to 150 characters.
		 * ### Available event types:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Name | Description | Scope |
		 * | :--- | :--- | :--- |
		 * | **`user.created`** | Triggered when a new user is created | Customer Admin Webhook |
		 * | **`user.deleted`** | Triggered when a user is deleted | Customer Admin Webhook |
		 * | **`user.locked`** | Triggered when a user gets locked | Customer Admin Webhook |
		 * |  |  |  |
		 * | **`webhook.expiring`** | Triggered 30/20/10/1 days before a webhook expires |  Customer Admin Webhook |
		 * |  |  |  |
		 * | **`downloadshare.created`** | Triggered when a new download share is created in affected room | Node Webhook |
		 * | **`downloadshare.deleted`** | Triggered when a download share is deleted in affected room | Node Webhook |
		 * | **`downloadshare.used`** | Triggered when a download share is utilized in affected room | Node Webhook |
		 * | **`uploadshare.created`** | Triggered when a new upload share is created in affected room | Node Webhook |
		 * | **`uploadshare.deleted`** | Triggered when a upload share is deleted in affected room | Node Webhook |
		 * | **`uploadshare.used`** | Triggered when a new file is uploaded via the upload share in affected room | Node Webhook |
		 * | **`file.created`** | Triggered when a new file is uploaded in affected room | Node Webhook |
		 * | **`folder.created`** | Triggered when a new folder is created in affected room | Node Webhook |
		 * | **`room.created`** | Triggered when a new room is created (in affected room) | Node Webhook |
		 * | **`file.deleted`** | Triggered when a file is deleted in affected room | Node Webhook |
		 * | **`folder.deleted`** | Triggered when a folder is deleted in affected room | Node Webhook |
		 * | **`room.deleted`** | Triggered when a room is deleted in affected room | Node Webhook |
		 * </details>
		 * Post v4/settings/webhooks
		 * @return {void} 
		 */
		CreateWebhook(requestBody: CreateWebhookRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/settings/webhooks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request list of event types
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
		 * ### Description:
		 * Get a list of available (for <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span>) event types.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.
		 * ### Postcondition:
		 * List of available event types is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/settings/webhooks/event_types
		 * @return {EventTypeList} OK
		 */
		RequestListOfEventTypesForConfigManager(): Observable<EventTypeList> {
			return this.http.get<EventTypeList>(this.baseUri + 'v4/settings/webhooks/event_types', {});
		}

		/**
		 * Remove webhook
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
		 * ### Description:
		 * Delete a webhook for the customer scope.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.
		 * ### Postcondition:
		 * Webhook is deleted.
		 * ### Further Information:
		 * None.
		 * Delete v4/settings/webhooks/{webhook_id}
		 * @param {string} webhook_id Webhook ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		RemoveWebhook(webhook_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/settings/webhooks/' + webhook_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request webhook
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
		 * ### Description:
		 * Get a specific webhook for the customer scope.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.
		 * ### Postcondition:
		 * Webhook is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/settings/webhooks/{webhook_id}
		 * @param {string} webhook_id Webhook ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Webhook} OK
		 */
		RequestWebhook(webhook_id: string): Observable<Webhook> {
			return this.http.get<Webhook>(this.baseUri + 'v4/settings/webhooks/' + webhook_id, {});
		}

		/**
		 * Update webhook
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
		 * ### Description:
		 * Update an existing webhook for the customer scope.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.
		 * ### Postcondition:
		 * Webhook is updated.
		 * ### Further Information:
		 * URL must begin with the `HTTPS` scheme.
		 * Webhook names are limited to 150 characters.
		 * Webhook event types can not be changed from Customer Admin Webhook types to Node Webhook types and vice versa
		 * ### Available event types:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Name | Description | Scope |
		 * | :--- | :--- | :--- |
		 * | **`user.created`** | Triggered when a new user is created | Customer Admin Webhook |
		 * | **`user.deleted`** | Triggered when a user is deleted | Customer Admin Webhook |
		 * | **`user.locked`** | Triggered when a user gets locked | Customer Admin Webhook |
		 * |  |  |  |
		 * | **`webhook.expiring`** | Triggered 30/20/10/1 days before a webhook expires |  Customer Admin Webhook |
		 * |  |  |  |
		 * | **`downloadshare.created`** | Triggered when a new download share is created in affected room | Node Webhook |
		 * | **`downloadshare.deleted`** | Triggered when a download share is deleted in affected room | Node Webhook |
		 * | **`downloadshare.used`** | Triggered when a download share is utilized in affected room | Node Webhook |
		 * | **`uploadshare.created`** | Triggered when a new upload share is created in affected room | Node Webhook |
		 * | **`uploadshare.deleted`** | Triggered when a upload share is deleted in affected room | Node Webhook |
		 * | **`uploadshare.used`** | Triggered when a new file is uploaded via the upload share in affected room | Node Webhook |
		 * | **`file.created`** | Triggered when a new file is uploaded in affected room | Node Webhook |
		 * | **`folder.created`** | Triggered when a new folder is created in affected room | Node Webhook |
		 * | **`room.created`** | Triggered when a new room is created (in affected room) | Node Webhook |
		 * | **`file.deleted`** | Triggered when a file is deleted in affected room | Node Webhook |
		 * | **`folder.deleted`** | Triggered when a folder is deleted in affected room | Node Webhook |
		 * | **`room.deleted`** | Triggered when a room is deleted in affected room | Node Webhook |
		 * </details>
		 * Put v4/settings/webhooks/{webhook_id}
		 * @param {string} webhook_id Webhook ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Webhook} OK
		 */
		UpdateWebhook(webhook_id: string, requestBody: UpdateWebhookRequest): Observable<Webhook> {
			return this.http.put<Webhook>(this.baseUri + 'v4/settings/webhooks/' + webhook_id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reset webhook lifetime
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.19.0</h3>
		 * ### Description:
		 * Reset the lifetime of a webhook for the customer scope.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.
		 * ### Postcondition:
		 * Lifetime of the webhook is reset.
		 * ### Further Information:
		 * None.
		 * Post v4/settings/webhooks/{webhook_id}/reset_lifetime
		 * @param {string} webhook_id Webhook ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Webhook} OK
		 */
		ResetWebhookLifetime(webhook_id: string): Observable<Webhook> {
			return this.http.post<Webhook>(this.baseUri + 'v4/settings/webhooks/' + webhook_id + '/reset_lifetime', null, {});
		}

		/**
		 * Remove Download Shares
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.21.0</h3>
		 * ### Functional Description:
		 * Delete multiple Download Shares.
		 * ### Precondition:
		 * User with _"manage download share"_ permissions on target nodes.
		 * ### Postcondition:
		 * Download Shares are deleted.
		 * ### Further Information:
		 * Only the Download Shares are removed; the referenced files or containers persists.
		 * Delete v4/shares/downloads
		 * @return {void} 
		 */
		DeleteDownloadShares(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/shares/downloads', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request list of Download Shares
		 * ### Description:
		 * Retrieve a list of Download Shares.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * List of available Download Shares is returned.
		 * ### Further Information:
		 * ### Filtering:
		 * All filter fields are connected via logical (**AND**). createdBy and updatedBy searches several user-related attributes.
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `name:cn:searchString_1|createdBy:cn:searchString_2`
		 * Filter by file name contains `searchString_1` **AND** creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains `searchString_2`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `name` | Alias or node name filter | `cn` | Alias or node name contains value. | `search String` |
		 * | `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
		 * | `createdBy` | Creator info filter | `cn, eq` | Creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
		 * | `createdById` | Creator ID filter | `eq` | Creator ID equals value. | `positive Integer` |
		 * | `accessKey` | Share access key filter | `cn` | Share access key contains values. | `search String` |
		 * | `nodeId` | Source node ID | `eq` | Source node (room, folder, file) ID equals value. | `positive Integer` |
		 * | `updatedBy` | Modifier info filter | `cn, eq` | Modifier info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
		 * | `updatedById` | Modifier ID filter | `eq` | Modifier ID equals value. | `positive Integer` |
		 * </details>
		 * ### Deprecated filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | <del>`userId`</del>  | Creator user ID | `eq` | Creator user ID equals value. Use `createdById` instead | `positive Integer` |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort fields are supported.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `name:asc|expireAt:desc`
		 * Sort by `name` ascending **AND** by `expireAt` descending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `name` | Alias or node name |
		 * | `notifyCreator` | Notify creator on every download |
		 * | `expireAt` | Expiration date |
		 * | `createdAt` | Creation date |
		 * | `createdBy` | Creator first name, last name |
		 * | `classification` | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |
		 * </details>
		 * Get v4/shares/downloads
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DownloadShareList} OK
		 */
		RequestDownloadShares(filter: string | null | undefined, sort: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined): Observable<DownloadShareList> {
			return this.http.get<DownloadShareList>(this.baseUri + 'v4/shares/downloads?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Create new Download Share
		 * ### Description:
		 * Create a new Download Share.
		 * ### Precondition:
		 * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
		 * ### Postcondition:
		 * Download Share is created.
		 * ### Further Information:
		 * If the target node is a room: subordinary rooms are excluded from a Download Share.
		 * * `name` is limited to **150** characters.
		 * * `notes` are limited to **255** characters.
		 * * `password` is limited to **1024** characters.
		 * Use `POST /shares/downloads/{share_id}/email` API for sending emails.
		 * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
		 * Please keep in mind that due to various restrictions of different telecommunication providers, non-ASCII characters
		 * may not be displayed correctly in short messages (SMS).
		 * Post v4/shares/downloads
		 * @return {void} 
		 */
		CreateDownloadShare(requestBody: CreateDownloadShareRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/shares/downloads', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a list of Download Shares
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
		 * ### Description:
		 * Update a list of existing Download Shares.
		 * ### Precondition:
		 * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
		 * ### Postcondition:
		 * Download Shares are successfully updated.
		 * ### Further Information:
		 * Maximum number of shares is 200
		 * Put v4/shares/downloads
		 * @return {void} No Content
		 */
		UpdateDownloadShares(requestBody: UpdateDownloadSharesBulkRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/shares/downloads', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove Download Share
		 * ### Description:
		 * Delete a Download Share.
		 * ### Precondition:
		 * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
		 * ### Postcondition:
		 * Download Share is deleted.
		 * ### Further Information:
		 * Only the Download Share is removed; the referenced file or container persists.
		 * Delete v4/shares/downloads/{share_id}
		 * @param {string} share_id Share ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		RemoveDownloadShare(share_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/shares/downloads/' + share_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request Download Share
		 * ### Description:
		 * Retrieve detailed information about one Download Share.
		 * ### Precondition:
		 * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
		 * ### Postcondition:
		 * Download Share is returned
		 * ### Further Information:
		 * None.
		 * Get v4/shares/downloads/{share_id}
		 * @param {string} share_id Share ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {DownloadShare} OK
		 */
		RequestDownloadShare(share_id: string): Observable<DownloadShare> {
			return this.http.get<DownloadShare>(this.baseUri + 'v4/shares/downloads/' + share_id, {});
		}

		/**
		 * Update Download Share
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
		 * ### Description:
		 * Update an existing Download Share.
		 * ### Precondition:
		 * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
		 * ### Postcondition:
		 * Download Share is successfully updated.
		 * ### Further Information:
		 * * `name` is limited to **150** characters.
		 * * `notes` are limited to **255** characters.
		 * * `password` is limited to **1024** characters.
		 * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
		 * Please keep in mind that due to various restrictions of different telecommunication providers, non-ASCII characters
		 * may not be displayed correctly in short messages (SMS).
		 * Put v4/shares/downloads/{share_id}
		 * @param {string} share_id Share ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {DownloadShare} OK
		 */
		UpdateDownloadShare(share_id: string, requestBody: UpdateDownloadShareRequest): Observable<DownloadShare> {
			return this.http.put<DownloadShare>(this.baseUri + 'v4/shares/downloads/' + share_id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Send an existing Download Share link via email
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
		 * ### Description:
		 * Send an email to specific recipients for existing Download Share.
		 * ### Precondition:
		 * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
		 * ### Postcondition:
		 * Download Share link successfully sent.
		 * ### Further Information:
		 * * Forbidden characters in the email body: [`<`, `>`]
		 * Post v4/shares/downloads/{share_id}/email
		 * @param {string} share_id Share ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		SendDownloadShareLinkViaEmail(share_id: string, requestBody: DownloadShareLinkEmail): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/shares/downloads/' + share_id + '/email', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request Download Share via QR Code
		 * ### Description:
		 * Retrieve detailed information about one Download Share.
		 * ### Precondition:
		 * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
		 * ### Postcondition:
		 * Download Share is returned
		 * ### Further Information:
		 * None.
		 * Get v4/shares/downloads/{share_id}/qr
		 * @param {string} share_id Share ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {DownloadShare} OK
		 */
		RequestDownloadShareQr(share_id: string): Observable<DownloadShare> {
			return this.http.get<DownloadShare>(this.baseUri + 'v4/shares/downloads/' + share_id + '/qr', {});
		}

		/**
		 * Remove Upload Shares
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.21.0</h3>
		 * ### Functional Description:
		 * Delete multiple Upload Shares (aka Upload Accounts).
		 * ### Precondition:
		 * User has _"manage upload share"_ permissions on target containers.
		 * ### Postcondition:
		 * Upload Shares are deleted.
		 * ### Further Information:
		 * Only the Upload Shares are removed; already uploaded files and the target container persist.
		 * Delete v4/shares/uploads
		 * @return {void} 
		 */
		DeleteUploadShares(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/shares/uploads', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request list of Upload Shares
		 * ### Description:
		 * Retrieve a list of Upload Shares (aka File Requests).
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * List of available Upload Shares is returned.
		 * ### Further Information:
		 * ### Filtering:
		 * All filter fields are connected via logical (**AND**). createdBy and updatedBy searches several user-related attributes.
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `name:cn:searchString_1|createdBy:cn:searchString_2`
		 * Filter by alias name contains `searchString_1` **AND** creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains `searchString_2`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `name` | Alias name filter | `cn` | Alias name contains value. | `search String` |
		 * | `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
		 * | `createdBy` | Creator info filter | `cn, eq` | Creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
		 * | `createdById` | Creator ID filter | `eq` | Creator ID equals value. | `positive Integer` |
		 * | `accessKey` | Share access key filter | `cn` | Share access key contains values. | `search String` |
		 * | `userId` | Creator user ID | `eq` | Creator user ID equals value. | `positive Integer` |
		 * | `targetId` | Target node ID | `eq` | Target node (room, folder) ID equals value. | `positive Integer` |
		 * | `updatedBy` | Modifier info filter | `cn, eq` | Modifier info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
		 * | `updatedById` | Modifier ID filter | `eq` | Modifier ID equals value. | `positive Integer` |
		 * </details>
		 * ### Deprecated filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | <del>`targetId`</del> | Target node ID | `cn` | Target node (room, folder) ID equals value. | `positive Integer` |
		 * | <del>`userId` </del>| Creator user ID | `eq` | Creator user ID equals value. Use `createdById` instead. | `positive Integer` |
		 * </details>
		 * ---
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort fields are supported.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `name:asc|expireAt:desc`
		 * Sort by `name` ascending **AND** by `expireAt` descending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `name` | Alias name |
		 * | `notifyCreator` | Notify creator on every upload |
		 * | `expireAt` | Expiration date |
		 * | `createdAt` | Creation date |
		 * | `createdBy` | Creator first name, last name |
		 * </details>
		 * Get v4/shares/uploads
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {UploadShareList} OK
		 */
		RequestUploadShares(filter: string | null | undefined, sort: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined): Observable<UploadShareList> {
			return this.http.get<UploadShareList>(this.baseUri + 'v4/shares/uploads?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Create new Upload Share
		 * ### Description:
		 * Create a new Upload Share (aka File Request).
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
		 * ### Postcondition:
		 * Upload Share is created.
		 * ### Further Information:
		 * * `name` is limited to **150** characters.
		 * * `notes` are limited to **255** characters.
		 * * `password` is limited to **1024** characters.
		 * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
		 * Use `POST /shares/uploads/{share_id}/email` API for sending emails.
		 * Please keep in mind that due to various restrictions of different telecommunication providers, non-ASCII characters
		 * may not be displayed correctly in short messages (SMS).
		 * Post v4/shares/uploads
		 * @return {void} 
		 */
		CreateUploadShare(requestBody: CreateUploadShareRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/shares/uploads', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update List of Upload Shares
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
		 * ### Description:
		 * Update a list of existing Upload Shares (aka File Request).
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
		 * ### Postcondition:
		 * Upload Shares successfully updated.
		 * ### Further Information:
		 * Maximum number of shares is 200
		 * Put v4/shares/uploads
		 * @return {void} OK
		 */
		UpdateUploadShares(requestBody: UpdateUploadSharesBulkRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/shares/uploads', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove Upload Share
		 * ### Description:
		 * Delete an Upload Share (aka File Request).
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
		 * ### Postcondition:
		 * Upload Share is deleted.
		 * ### Further Information:
		 * Only the Upload Share is removed; already uploaded files and the target container persist.
		 * Delete v4/shares/uploads/{share_id}
		 * @param {string} share_id Share ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		RemoveUploadShare(share_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/shares/uploads/' + share_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request Upload Share
		 * ### Description:
		 * Retrieve detailed information about one Upload Share (aka File Request).
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
		 * ### Postcondition:
		 * Upload Share is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/shares/uploads/{share_id}
		 * @param {string} share_id Share ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {UploadShare} OK
		 */
		RequestUploadShare(share_id: string): Observable<UploadShare> {
			return this.http.get<UploadShare>(this.baseUri + 'v4/shares/uploads/' + share_id, {});
		}

		/**
		 * Update Upload Share
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
		 * ### Description:
		 * Update existing Upload Share (aka File Request).
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
		 * ### Postcondition:
		 * Upload Share successfully updated.
		 * ### Further Information:
		 * * `name` is limited to **150** characters.
		 * * `notes` are limited to **255** characters.
		 * * `password` is limited to **1024** characters.
		 * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
		 * Please keep in mind that due to various restrictions of different telecommunication providers, non-ASCII characters
		 * may not be displayed correctly in short messages (SMS).
		 * Put v4/shares/uploads/{share_id}
		 * @param {string} share_id Share ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {UploadShare} OK
		 */
		UpdateUploadShare(share_id: string, requestBody: UpdateUploadShareRequest): Observable<UploadShare> {
			return this.http.put<UploadShare>(this.baseUri + 'v4/shares/uploads/' + share_id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Send an existing Upload Share link via email
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
		 * ### Description:
		 * Send an email to specific recipients for existing Upload Share.
		 * ### Precondition:
		 * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
		 * ### Postcondition:
		 * Upload Share link successfully sent.
		 * ### Further Information:
		 * * Forbidden characters in the email body: [`<`, `>`]
		 * Post v4/shares/uploads/{share_id}/email
		 * @param {string} share_id Share ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		SendUploadShareLinkViaEmail(share_id: string, requestBody: UploadShareLinkEmail): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/shares/uploads/' + share_id + '/email', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request Upload Share via QR Code
		 * ### Description:
		 * Retrieve detailed information about one Upload Share (aka File Request).
		 * ### Precondition:
		 * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
		 * ### Postcondition:
		 * Upload Share is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/shares/uploads/{share_id}/qr
		 * @param {string} share_id Share ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {UploadShare} OK
		 */
		RequestUploadShareQr(share_id: string): Observable<UploadShare> {
			return this.http.get<UploadShare>(this.baseUri + 'v4/shares/uploads/' + share_id + '/qr', {});
		}

		/**
		 * Test Active Directory configuration
		 * ### Description:
		 * Test Active Directory configuration.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> of the Provider Customer required.
		 * ### Postcondition:
		 * Active Directory configuration is returned if successful.
		 * ### Further Information:
		 * DRACOON tries to establish a connection with the provided information.
		 * Post v4/system/config/actions/test/ad
		 * @return {TestActiveDirectoryConfigResponse} OK
		 */
		TestAdConfig(requestBody: TestActiveDirectoryConfigRequest): Observable<TestActiveDirectoryConfigResponse> {
			return this.http.post<TestActiveDirectoryConfigResponse>(this.baseUri + 'v4/system/config/actions/test/ad', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Test RADIUS server availability
		 * ### Description:
		 * Test RADIUS configuration.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> of the Provider Customer required.
		 * ### Postcondition:
		 * RADIUS configuration is returned if successful.
		 * ### Further Information:
		 * DRACOON tries to establish a connection with the provided information.
		 * Post v4/system/config/actions/test/radius
		 * @return {void} 
		 */
		TestRadiusConfig(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/system/config/actions/test/radius', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request list of Active Directory configurations
		 * ### Description:
		 * Retrieve a list of configured Active Directories.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> of the Provider Customer required.
		 * ### Postcondition:
		 * List of Active Directory configurations is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/system/config/auth/ads
		 * @return {ActiveDirectoryConfigList} OK
		 */
		RequestAdConfigs(): Observable<ActiveDirectoryConfigList> {
			return this.http.get<ActiveDirectoryConfigList>(this.baseUri + 'v4/system/config/auth/ads', {});
		}

		/**
		 * Create Active Directory configuration
		 * ### Description:
		 * Create a new Active Directory configuration.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> of the Provider Customer required.
		 * ### Postcondition:
		 * New Active Directory configuration created.
		 * ### Further Information:
		 * None.
		 * Post v4/system/config/auth/ads
		 * @return {void} 
		 */
		CreateAdConfig(requestBody: CreateActiveDirectoryConfigRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/system/config/auth/ads', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove Active Directory configuration
		 * ### Description:
		 * Delete an existing Active Directory configuration.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> of the Provider Customer required.
		 * ### Postcondition:
		 * Active Directory configuration is removed.
		 * ### Further Information:
		 * None.
		 * Delete v4/system/config/auth/ads/{ad_id}
		 * @param {number} ad_id Active Directory ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		RemoveAdConfig(ad_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/system/config/auth/ads/' + ad_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request Active Directory configuration
		 * ### Description:
		 * Retrieve the configuration of an Active Directory.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> of the Provider Customer required.
		 * ### Postcondition:
		 * Active Directory configuration is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/system/config/auth/ads/{ad_id}
		 * @param {number} ad_id Active Directory ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ActiveDirectoryConfig} OK
		 */
		RequestAdConfig(ad_id: number): Observable<ActiveDirectoryConfig> {
			return this.http.get<ActiveDirectoryConfig>(this.baseUri + 'v4/system/config/auth/ads/' + ad_id, {});
		}

		/**
		 * Update Active Directory configuration
		 * ### Description:
		 * Update an existing Active Directory configuration.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> of the Provider Customer required.
		 * ### Postcondition:
		 * Active Directory configuration updated.
		 * ### Further Information:
		 * None.
		 * Put v4/system/config/auth/ads/{ad_id}
		 * @param {number} ad_id Active Directory ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ActiveDirectoryConfig} OK
		 */
		UpdateAdConfig(ad_id: number, requestBody: UpdateActiveDirectoryConfigRequest): Observable<ActiveDirectoryConfig> {
			return this.http.put<ActiveDirectoryConfig>(this.baseUri + 'v4/system/config/auth/ads/' + ad_id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request list of OpenID Connect IDP configurations
		 * ### Description:
		 * Retrieve a list of configured OpenID Connect IDPs.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * List of OpenID Connect IDP configurations is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/system/config/auth/openid/idps
		 * @return {Array<OpenIdIdpConfig>} OK
		 */
		RequestOpenIdIdpConfigs(): Observable<Array<OpenIdIdpConfig>> {
			return this.http.get<Array<OpenIdIdpConfig>>(this.baseUri + 'v4/system/config/auth/openid/idps', {});
		}

		/**
		 * Create OpenID Connect IDP configuration
		 * ### Description:
		 * Create new OpenID Connect IDP configuration.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * New OpenID Connect IDP configuration is created.
		 * ### Further Information:
		 * None.
		 * Post v4/system/config/auth/openid/idps
		 * @return {void} 
		 */
		CreateOpenIdIdpConfig(requestBody: CreateOpenIdIdpConfigRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/system/config/auth/openid/idps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove OpenID Connect IDP configuration
		 * ### Description:
		 * Delete an existing OpenID Connect IDP configuration.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * OpenID Connect IDP configuration is removed.
		 * ### Further Information:
		 * None.
		 * Delete v4/system/config/auth/openid/idps/{idp_id}
		 * @param {number} idp_id OpenID Connect IDP configuration ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		RemoveOpenIdIdpConfig(idp_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/system/config/auth/openid/idps/' + idp_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request OpenID Connect IDP configuration
		 * ### Description:
		 * Retrieve an OpenID Connect IDP configuration.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * OpenID Connect IDP configuration is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/system/config/auth/openid/idps/{idp_id}
		 * @param {number} idp_id OpenID Connect IDP configuration ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {OpenIdIdpConfig} OK
		 */
		RequestOpenIdIdpConfig(idp_id: number): Observable<OpenIdIdpConfig> {
			return this.http.get<OpenIdIdpConfig>(this.baseUri + 'v4/system/config/auth/openid/idps/' + idp_id, {});
		}

		/**
		 * Update OpenID Connect IDP configuration
		 * ### Description:
		 * Update an existing OpenID Connect IDP configuration.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * OpenID Connect IDP configuration is updated.
		 * ### Further Information:
		 * None.
		 * Put v4/system/config/auth/openid/idps/{idp_id}
		 * @param {number} idp_id OpenID Connect IDP configuration ID
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {OpenIdIdpConfig} OK
		 */
		UpdateOpenIdIdpConfig(idp_id: number, requestBody: UpdateOpenIdIdpConfigRequest): Observable<OpenIdIdpConfig> {
			return this.http.put<OpenIdIdpConfig>(this.baseUri + 'v4/system/config/auth/openid/idps/' + idp_id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove RADIUS configuration
		 * ### Description:
		 * Delete existing RADIUS configuration.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * RADIUS configuration is deleted.
		 * ### Further Information:
		 * None.
		 * Delete v4/system/config/auth/radius
		 * @return {void} 
		 */
		RemoveRadiusConfig(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/system/config/auth/radius', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request RADIUS configuration
		 * ### Description:
		 * Retrieve a RADIUS configuration.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * RADIUS configuration is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/system/config/auth/radius
		 * @return {RadiusConfig} OK
		 */
		RequestRadiusConfig(): Observable<RadiusConfig> {
			return this.http.get<RadiusConfig>(this.baseUri + 'v4/system/config/auth/radius', {});
		}

		/**
		 * Create RADIUS configuration
		 * ### Description:
		 * Create new RADIUS configuration.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * New RADIUS configuration is created.
		 * ### Further Information:
		 * None.
		 * Post v4/system/config/auth/radius
		 * @return {void} 
		 */
		CreateRadiusConfig(requestBody: RadiusConfigCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/system/config/auth/radius', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update RADIUS configuration
		 * ### Description:
		 * Update existing RADIUS configuration.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * RADIUS configuration is updated.
		 * ### Further Information:
		 * None.
		 * Put v4/system/config/auth/radius
		 * @return {RadiusConfig} OK
		 */
		UpdateRadiusConfig(requestBody: RadiusConfigUpdateRequest): Observable<RadiusConfig> {
			return this.http.put<RadiusConfig>(this.baseUri + 'v4/system/config/auth/radius', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request list of OAuth clients
		 * ### Description:
		 * Retrieve a list of configured OAuth clients.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * List of OAuth clients is returned.
		 * ### Further Information:
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `isStandard:eq:true`
		 * Get standard OAuth clients.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `isStandard` | Standard client filter | `eq` |  | `true or false` |
		 * | `isExternal` | External client filter | `eq` |  | `true or false` |
		 * | `isEnabled` | Enabled/disabled clients filter | `eq` |  | `true or false` |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort criteria are possible.
		 * Fields are connected via logical conjunction **AND**.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `clientName:desc|isStandard:asc`
		 * Sort by `clientName` descending **AND** `isStandard` ascending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `clientName` | Client name |
		 * | `isStandard` | Is a standard client |
		 * | `isExternal` | Is a external client |
		 * | `isEnabled` | Is a enabled client |
		 * </details>
		 * Get v4/system/config/oauth/clients
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @return {Array<OAuthClient>} OK
		 */
		RequestOAuthClients(filter: string | null | undefined, sort: string | null | undefined): Observable<Array<OAuthClient>> {
			return this.http.get<Array<OAuthClient>>(this.baseUri + 'v4/system/config/oauth/clients?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Create OAuth client
		 * ### Description:
		 * Create a new OAuth client.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * New OAuth client created.
		 * ### Further Information:
		 * Client secret **MUST** have:
		 * * at least 12 characters, at most 32 characters
		 * * only lower case characters, upper case characters and digits
		 * * at least 1 lower case character, 1 upper case character and 1 digit
		 * The client secret is optional and will be generated if it is left empty.
		 * Valid grant types are:
		 * * `authorization_code`
		 * * `implicit`
		 * * `password`
		 * * `client_credentials`
		 * * `refresh_token`
		 * Grant type `client_credentials` is currently **NOT** permitted!
		 * Allowed characters for client ID are: `[a-zA-Z0-9_-]`
		 * If grant types `authorization_code` or `implicit` are used, a
		 * redirect URI **MUST** be provided!
		 * Default access token validity: **8 hours**
		 * Default refresh token validity: **30 days**
		 * Default approval validity: **½ year**
		 * Post v4/system/config/oauth/clients
		 * @return {void} 
		 */
		CreateOAuthClient(requestBody: CreateOAuthClientRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/system/config/oauth/clients', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove OAuth client
		 * ### Description:
		 * Delete an existing OAuth client.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * OAuth client is removed.
		 * ### Further Information:
		 * None.
		 * Delete v4/system/config/oauth/clients/{client_id}
		 * @param {string} client_id OAuth client ID
		 * @return {void} 
		 */
		RemoveOAuthClient(client_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/system/config/oauth/clients/' + (client_id == null ? '' : encodeURIComponent(client_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request OAuth client
		 * ### Description:
		 * Retrieve the configuration of an OAuth client.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * OAuth client is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/system/config/oauth/clients/{client_id}
		 * @param {string} client_id OAuth client ID
		 * @return {OAuthClient} OK
		 */
		RequestOAuthClient(client_id: string): Observable<OAuthClient> {
			return this.http.get<OAuthClient>(this.baseUri + 'v4/system/config/oauth/clients/' + (client_id == null ? '' : encodeURIComponent(client_id)), {});
		}

		/**
		 * Update OAuth client
		 * ### Description:
		 * Update an existing OAuth client.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * OAuth client updated.
		 * ### Further Information:
		 * Client secret **MUST** have:
		 * * at least 12 characters, at most 32 characters
		 * * only lower case characters, upper case characters and digits
		 * * at least 1 lower case character, 1 upper case character and 1 digit
		 * The client secret is optional and will be generated if it is left empty.
		 * Valid grant types are:
		 * * `authorization_code`
		 * * `implicit`
		 * * `password`
		 * * `client_credentials`
		 * * `refresh_token`
		 * Grant type `client_credentials` is currently **NOT** permitted!
		 * If grant types `authorization_code` or `implicit` are used, a
		 * redirect URI **MUST** be provided!
		 * Put v4/system/config/oauth/clients/{client_id}
		 * @param {string} client_id OAuth client ID
		 * @return {OAuthClient} OK
		 */
		UpdateOAuthClient(client_id: string, requestBody: UpdateOAuthClientRequest): Observable<OAuthClient> {
			return this.http.put<OAuthClient>(this.baseUri + 'v4/system/config/oauth/clients/' + (client_id == null ? '' : encodeURIComponent(client_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request classification policies
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.30.0</h3>
		 * ### Description:
		 * Retrieve a list of classification policies:
		 * * `shareClassificationPolicies`
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * List of configured classification policies is returned.
		 * ### Further Information:
		 * `classificationRequiresSharePassword`: When a node has this classification or higher, it cannot be shared without a password. If the node is an encrypted file this policy has no effect. `0` means no password will be enforced.
		 * Get v4/system/config/policies/classifications
		 * @return {ClassificationPoliciesConfig} OK
		 */
		RequestClassificationPoliciesConfig(): Observable<ClassificationPoliciesConfig> {
			return this.http.get<ClassificationPoliciesConfig>(this.baseUri + 'v4/system/config/policies/classifications', {});
		}

		/**
		 * Change classification policies
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.30.0</h3>
		 * ### Description:
		 * Change current classification policies:
		 * * `shareClassificationPolicies`
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * Classification policies are changed.
		 * ### Further Information:
		 * `classificationRequiresSharePassword`: When a node has this classification or higher, it cannot be shared without a password. If the node is an encrypted file this policy has no effect. `0` means no password will be enforced.
		 * Put v4/system/config/policies/classifications
		 * @return {ClassificationPoliciesConfig} OK
		 */
		ChangeClassificationPoliciesConfig(requestBody: UpdateClassificationPoliciesConfig): Observable<ClassificationPoliciesConfig> {
			return this.http.put<ClassificationPoliciesConfig>(this.baseUri + 'v4/system/config/policies/classifications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request guest user policies
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.40.0</h3>
		 * ### Description:
		 * Retrieve guest user policies.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> of the Provider Customer required.
		 * ### Postcondition:
		 * Guest user policies are returned.
		 * ### Further Information:
		 * None.
		 * Get v4/system/config/policies/guest_users
		 * @return {GuestUsersPoliciesConfig} OK
		 */
		RequestGuestUsersPoliciesConfig(): Observable<GuestUsersPoliciesConfig> {
			return this.http.get<GuestUsersPoliciesConfig>(this.baseUri + 'v4/system/config/policies/guest_users', {});
		}

		/**
		 * Change guest user policies
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.40.0</h3>
		 * ### Description:
		 * Change current guest user policies.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * Guest user policies are changed.
		 * ### Further Information:
		 * None.
		 * Put v4/system/config/policies/guest_users
		 * @return {GuestUsersPoliciesConfig} OK
		 */
		ChangeGuestUsersPoliciesConfig(requestBody: UpdateGuestUsersPoliciesConfig): Observable<GuestUsersPoliciesConfig> {
			return this.http.put<GuestUsersPoliciesConfig>(this.baseUri + 'v4/system/config/policies/guest_users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request MFA policies
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.37.0</h3>
		 * ### Description:
		 * Retrieve a list of multi-factor authentication policies.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> of the Provider Customer required.
		 * ### Postcondition:
		 * List of configured multi-factor authentication policies is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/system/config/policies/mfa
		 * @return {MfaPoliciesConfig} OK
		 */
		RequestMfaPoliciesConfig(): Observable<MfaPoliciesConfig> {
			return this.http.get<MfaPoliciesConfig>(this.baseUri + 'v4/system/config/policies/mfa', {});
		}

		/**
		 * Change MFA policies
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.37.0</h3>
		 * ### Description:
		 * Change current multi-factor authentication policies.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * Multi-factor authentication policies are changed.
		 * ### Further Information:
		 * None.
		 * Put v4/system/config/policies/mfa
		 * @return {MfaPoliciesConfig} OK
		 */
		ChangeMfaPoliciesConfig(requestBody: UpdateMfaPoliciesConfig): Observable<MfaPoliciesConfig> {
			return this.http.put<MfaPoliciesConfig>(this.baseUri + 'v4/system/config/policies/mfa', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request password policies
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.14.0</h3>
		 * ### Description:
		 * Retrieve a list of configured password policies for all password types:
		 * * `login`
		 * * `shares`
		 * * `encryption`
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * List of configured password policies is returned.
		 * ### Further Information:
		 * None.
		 * ### Available password policies:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Name | Description | Value | Password Type |
		 * | :--- | :--- | :--- | :--- |
		 * | `mustContainCharacters` | Characters which a password must contain:<br><ul><li>`alpha` - at least one alphabetical character (`uppercase` **OR** `lowercase`)<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z<br>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`uppercase` - at least one uppercase character<pre>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`lowercase` - at least one lowercase character<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z</pre></li><li>`numeric` - at least one numeric character<pre>0 1 2 3 4 5 6 7 8 9</pre></li><li>`special` - at least one special character (letters and digits excluded)<pre>! " # $ % ( ) * + , - . / : ; = ? @ [ \ ] ^ _ { &#124; } ~</pre></li><li>`none` - none of the above</li></ul> | <ul><li>`alpha`</li><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li><li>`special`</li><li>`none`</li></ul> | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `numberOfCharacteristicsToEnforce` | Number of characteristics to enforce.<br>e.g. from `["uppercase", "lowercase", "numeric", "special"]`<br>all 4 character sets can be enforced; but also only 2 of them | `Integer between 0 and 4` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `minLength` | Minimum number of characters a password must contain. | `Integer between 1 and 1024` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `rejectDictionaryWords` | Determines whether a password must **NOT** contain word(s) from a dictionary.<br>In `core-service.properties` a path to directory with dictionary files (`*.txt`) can be defined<br>cf. `policies.passwords.dictionary.directory`.<br><br>If this rule gets enabled `policies.passwords.dictionary.directory` must be defined and contain dictionary files.<br>Otherwise, the rule will not have any effect on password validation process. | `true or false` | <ul><li>`login`</li><li>`shares`</li></ul> |
		 * | `rejectUserInfo` | Determines whether a password must **NOT** contain user info.<br>Affects user's **first name**, **last name**, **email** and **user name**. | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `rejectKeyboardPatterns` | Determines whether a password must **NOT** contain keyboard patterns.<br>e.g. `qwertz`, `asdf` (min. 4 character pattern) | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `numberOfArchivedPasswords` | Number of passwords to archive.<br>Value `0` means that password history is disabled. | `Integer between 0 and 10` | <ul><li>`login`</li></ul> |
		 * | `passwordExpiration.enabled` | Determines whether password expiration is enabled. | `true or false` | <ul><li>`login`</li></ul> |
		 * | `maxPasswordAge` | Maximum allowed password age (in **days**) | `positive Integer` | <ul><li>`login`</li></ul> |
		 * | `userLockout.enabled` | Determines whether user lockout is enabled. | `true or false` | <ul><li>`login`</li></ul> |
		 * | `maxNumberOfLoginFailures` | Maximum allowed number of failed login attempts. | `positive Integer` | <ul><li>`login`</li></ul> |
		 * | `lockoutPeriod` | Amount of **minutes** a user has to wait to make another login attempt<br>after `maxNumberOfLoginFailures` has been exceeded. | `positive Integer` | <ul><li>`login`</li></ul> |
		 * </details>
		 * Get v4/system/config/policies/passwords
		 * @return {PasswordPoliciesConfig} OK
		 */
		RequestPasswordPoliciesConfig(): Observable<PasswordPoliciesConfig> {
			return this.http.get<PasswordPoliciesConfig>(this.baseUri + 'v4/system/config/policies/passwords', {});
		}

		/**
		 * Change password policies
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.14.0</h3>
		 * ### Description:
		 * Change current password policies for any password types:
		 * * `login`
		 * * `shares`
		 * * `encryption`
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * Password policies get changed.
		 * ### Further Information:
		 * None.
		 * ### Available password policies:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Name | Description | Value | Recommended Value | Password Type |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `mustContainCharacters` | Characters which a password must contain:<br><ul><li>`alpha` - at least one alphabetical character (`uppercase` **OR** `lowercase`)<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z<br>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`uppercase` - at least one uppercase character<pre>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`lowercase` - at least one lowercase character<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z</pre></li><li>`numeric` - at least one numeric character<pre>0 1 2 3 4 5 6 7 8 9</pre></li><li>`special` - at least one special character (letters and digits excluded)<pre>! " # $ % ( ) * + , - . / : ; = ? @ [ \ ] ^ _ { &#124; } ~</pre></li><li>`none` - none of the above</li><li>`all` - combination of `uppercase`, `lowercase`, `numeric` and `special`</li></ul> | <ul><li>`alpha`</li><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li><li>`special`</li><li>`none`</li><li>`all`</li></ul> | <ul><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li></ul>  | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `numberOfCharacteristicsToEnforce` | Number of characteristics to enforce.<br>e.g. from `["uppercase", "lowercase", "numeric", "special"]`<br>all 4 character sets can be enforced; but also only 2 of them | `Integer between 0 and 4`<br><br>default:<ul><li>`none` - `0`</li><li>`all` - `4`</li><li>otherwise - amount of distinct values<br>cf. `mustContainCharacters` matrix</li></ul> | `3` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `minLength` | Minimum number of characters a password must contain. | `Integer between 1 and 1024` | <ul><li>`login`: `12`</li><li>`shares`: `12`</li><li>`encryption`: `14`</li></ul> | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `rejectDictionaryWords` | Determines whether a password must **NOT** contain word(s) from a dictionary.<br>In `core-service.properties` a path to directory with dictionary files (`*.txt`) can be defined<br>cf. `policies.passwords.dictionary.directory`.<br><br>If this rule gets enabled `policies.passwords.dictionary.directory` must be defined and contain dictionary files.<br>Otherwise, the rule will not have any effect on password validation process. | `true or false` | `true` | <ul><li>`login`</li><li>`shares`</li></ul> |
		 * | `rejectUserInfo` | Determines whether a password must **NOT** contain user info.<br>Affects user's **first name**, **last name**, **email** and **user name**. | `true or false` | `true` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `rejectKeyboardPatterns` | Determines whether a password must **NOT** contain keyboard patterns.<br>e.g. `qwertz`, `asdf` (min. 4 character pattern) | `true or false` | `true` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `numberOfArchivedPasswords` | Number of passwords to archive. | `Integer between 0 and 10`<br>Set `0` to disable password history. | `3` | <ul><li>`login`</li></ul> |
		 * | `passwordExpiration.enabled` | Determines whether password expiration is enabled.<br>Password expiration policy can only be enabled in context with `enforceLoginPasswordChange`. | `true or false` | `false` | <ul><li>`login`</li></ul> |
		 * | `maxPasswordAge` | Maximum allowed password age (in **days**) | `positive Integer` |  | <ul><li>`login`</li></ul> |
		 * | `userLockout.enabled` | Determines whether user lockout is enabled. | `true or false` | `true` | <ul><li>`login`</li></ul> |
		 * | `maxNumberOfLoginFailures` | Maximum allowed number of failed login attempts. | `positive Integer` | `5` | <ul><li>`login`</li></ul> |
		 * | `lockoutPeriod` | Amount of **minutes** a user has to wait to make another login attempt<br>after `maxNumberOfLoginFailures` has been exceeded. | `positive Integer` | `10` | <ul><li>`login`</li></ul> |
		 * </details>
		 * ### Deprecated password policies:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Name | Description | Value | Recommended Value | Password Type |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | <del>`enforceLoginPasswordChange`</del> | Determines whether a login password change should be enforced for all users.<br>Only takes effect, if login password policies get stricter.<br>Use `POST /system/config/policies/passwords/enforce_change` API to enforce a login password change. | `true or false`<br>default: `false` |  | <ul><li>`login`</li></ul> |
		 * </details>
		 * ### `mustContainCharacters` matrix:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * |  | `alpha` | `uppercase` | `lowercase` | `numeric` | `special` | `all` | `none` |
		 * | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
		 * | `alpha` | `alpha` | `uppercase` | `lowercase` | `alpha`<br>`numeric` | `alpha`<br>`special` | `all` | `none` |
		 * | `uppercase` | `uppercase` | `uppercase` | `uppercase`<br>`lowercase` | `uppercase`<br>`numeric` | `uppercase`<br>`special` | `all` | `none` |
		 * | `lowercase` | `lowercase` | `uppercase`<br>`lowercase` | `lowercase` | `lowercase`<br>`numeric` | `lowercase`<br>`special` | `all` | `none` |
		 * | `numeric` | `alpha`<br>`numeric` | `uppercase`<br>`numeric` | `lowercase`<br>`numeric` | `numeric` | `numeric`<br>`special` | `all` | `none` |
		 * | `special` | `alpha`<br>`special` | `uppercase`<br>`special` | `lowercase`<br>`special` | `numeric`<br>`special` | `special` | `all` | `none` |
		 * | `all` | `all` | `all` | `all` | `all` | `all` | `all` | `none` |
		 * | `none` | `none` | `none` |  `none` | `none` | `none` | `none` | `none` |
		 * </details>
		 * Put v4/system/config/policies/passwords
		 * @return {PasswordPoliciesConfig} OK
		 */
		ChangePasswordPoliciesConfig(requestBody: UpdatePasswordPoliciesConfig): Observable<PasswordPoliciesConfig> {
			return this.http.put<PasswordPoliciesConfig>(this.baseUri + 'v4/system/config/policies/passwords', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enforce login password change for all users
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
		 * ### Description:
		 * Enforce login password change for all users.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * Login password change is enforced.
		 * Every user has to change their login password at next login.
		 * ### Further Information:
		 * None.
		 * Post v4/system/config/policies/passwords/enforce_change
		 * @return {void} OK
		 */
		EnforceLoginPasswordChange(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/system/config/policies/passwords/enforce_change', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request password policies for a certain password type
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.14.0</h3>
		 * ### Description:
		 * Retrieve a list of configured password policies for a certain password type:
		 * * `login`
		 * * `shares`
		 * * `encryption`
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * List of configured password policies is returned.
		 * ### Further Information:
		 * None.
		 * ### Available password policies:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Name | Description | Value | Password Type |
		 * | :--- | :--- | :--- | :--- |
		 * | `mustContainCharacters` | Characters which a password must contain:<br><ul><li>`alpha` - at least one alphabetical character (`uppercase` **OR** `lowercase`)<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z<br>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`uppercase` - at least one uppercase character<pre>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</pre></li><li>`lowercase` - at least one lowercase character<pre>a b c d e f g h i j k l m n o p q r s t u v w x y z</pre></li><li>`numeric` - at least one numeric character<pre>0 1 2 3 4 5 6 7 8 9</pre></li><li>`special` - at least one special character (letters and digits excluded)<pre>! " # $ % ( ) * + , - . / : ; = ? @ [ \ ] ^ _ { &#124; } ~</pre></li><li>`none` - none of the above</li></ul> | <ul><li>`alpha`</li><li>`uppercase`</li><li>`lowercase`</li><li>`numeric`</li><li>`special`</li><li>`none`</li></ul> | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `numberOfCharacteristicsToEnforce` | Number of characteristics to enforce.<br>e.g. from `["uppercase", "lowercase", "numeric", "special"]`<br>all 4 character sets can be enforced; but also only 2 of them | `Integer between 0 and 4` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `minLength` | Minimum number of characters a password must contain. | `Integer between 1 and 1024` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `rejectDictionaryWords` | Determines whether a password must **NOT** contain word(s) from a dictionary.<br>In `core-service.properties` a path to directory with dictionary files (`*.txt`) can be defined<br>cf. `policies.passwords.dictionary.directory`.<br><br>If this rule gets enabled `policies.passwords.dictionary.directory` must be defined and contain dictionary files.<br>Otherwise, the rule will not have any effect on password validation process. | `true or false` | <ul><li>`login`</li><li>`shares`</li></ul> |
		 * | `rejectUserInfo` | Determines whether a password must **NOT** contain user info.<br>Affects user's **first name**, **last name**, **email** and **user name**. | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `rejectKeyboardPatterns` | Determines whether a password must **NOT** contain keyboard patterns.<br>e.g. `qwertz`, `asdf` (min. 4 character pattern) | `true or false` | <ul><li>`login`</li><li>`shares`</li><li>`encryption`</li></ul> |
		 * | `numberOfArchivedPasswords` | Number of passwords to archive.<br>Value `0` means that password history is disabled. | `Integer between 0 and 10` | <ul><li>`login`</li></ul> |
		 * | `passwordExpiration.enabled` | Determines whether password expiration is enabled. | `true or false` | <ul><li>`login`</li></ul> |
		 * | `maxPasswordAge` | Maximum allowed password age (in **days**) | `positive Integer` | <ul><li>`login`</li></ul> |
		 * | `userLockout.enabled` | Determines whether user lockout is enabled. | `true or false` | <ul><li>`login`</li></ul> |
		 * | `maxNumberOfLoginFailures` | Maximum allowed number of failed login attempts. | `positive Integer` | <ul><li>`login`</li></ul> |
		 * | `lockoutPeriod` | Amount of **minutes** a user has to wait to make another login attempt<br>after `maxNumberOfLoginFailures` has been exceeded. | `positive Integer` | <ul><li>`login`</li></ul> |
		 * </details>
		 * Get v4/system/config/policies/passwords/{password_type}
		 * @param {RequestPasswordPoliciesForPasswordTypePassword_type} password_type Password type
		 * @return {PasswordPoliciesConfig} OK
		 */
		RequestPasswordPoliciesForPasswordType(password_type: RequestPasswordPoliciesForPasswordTypePassword_type): Observable<PasswordPoliciesConfig> {
			return this.http.get<PasswordPoliciesConfig>(this.baseUri + 'v4/system/config/policies/passwords/' + password_type, {});
		}

		/**
		 * Request authentication settings
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
		 * ### Description:
		 * DRACOON authentication configuration entry point.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * Returns a list of configurable authentication methods.
		 * ### Further Information:
		 * Authentication methods are sorted by priority attribute.
		 * Smaller values have higher priority.
		 * Authentication method with highest priority is considered as default.
		 * Priority **MUST** be a positive value.
		 * ### Configurable authentication settings:
		 * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Authentication Method | Description |
		 * | :--- | :--- |
		 * | `basic` | **Basic** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their credentials stored in the database.<br>Formerly known as `sql`. |
		 * | `active_directory` | **Active Directory** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their Active Directory credentials. |
		 * | `radius` | **RADIUS** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their RADIUS username, their PIN and a token password. |
		 * | `openid` | **OpenID Connect** authentication globally allowed.This option **MUST** be activated to allow users to log in with their OpenID Connect identity. |
		 * </details>
		 * Get v4/system/config/settings/auth
		 * @return {AuthConfig} OK
		 */
		RequestAuthConfig(): Observable<AuthConfig> {
			return this.http.get<AuthConfig>(this.baseUri + 'v4/system/config/settings/auth', {});
		}

		/**
		 * Update authentication settings
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
		 * ### Description:
		 * DRACOON authentication configuration entry point.
		 * Change configurable authentication settings.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * One or more authentication methods gets changed.
		 * ### Further Information:
		 * Authentication methods are sorted by priority attribute.
		 * Smaller values have higher priority.
		 * Authentication method with highest priority is considered as default.
		 * Priority **MUST** be a positive value.
		 * ### Configurable authentication settings:
		 * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Authentication Method | Description |
		 * | :--- | :--- |
		 * | `basic` | **Basic** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their credentials stored in the database.<br>Formerly known as `sql`. |
		 * | `active_directory` | **Active Directory** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their Active Directory credentials. |
		 * | `radius` | **RADIUS** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their RADIUS username, their PIN and a token password. |
		 * | `openid` | **OpenID Connect** authentication globally allowed.This option **MUST** be activated to allow users to log in with their OpenID Connect identity. |
		 * </details>
		 * Put v4/system/config/settings/auth
		 * @return {AuthConfig} OK
		 */
		UpdateAuthConfig(requestBody: AuthConfig): Observable<AuthConfig> {
			return this.http.put<AuthConfig>(this.baseUri + 'v4/system/config/settings/auth', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request system defaults
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
		 * ### Description:
		 * DRACOON system defaults configuration entry point.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * Returns a list of configurable system default values.
		 * ### Further Information:
		 * None.
		 * ### Configurable default values
		 * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description | Value |
		 * | :--- | :--- | :--- |
		 * | `languageDefault` | Defines which language should be default. | `ISO 639-1 code` |
		 * | `downloadShareDefaultExpirationPeriod` | Default expiration period for Download Shares in _days_. | `Integer between 0 and 9999` |
		 * | `uploadShareDefaultExpirationPeriod` | Default expiration period for Upload Shares in _days_. | `Integer between 0 and 9999` |
		 * | `fileDefaultExpirationPeriod` | Default expiration period for all uploaded files in _days_. | `Integer between 0 and 9999` |
		 * | `nonmemberViewerDefault` | Defines if new users get the role _Non Member Viewer_ by default | `true or false` |
		 * </details>
		 * Get v4/system/config/settings/defaults
		 * @return {SystemDefaults} OK
		 */
		RequestSystemDefaults(): Observable<SystemDefaults> {
			return this.http.get<SystemDefaults>(this.baseUri + 'v4/system/config/settings/defaults', {});
		}

		/**
		 * Update system defaults
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
		 * ### Description:
		 * DRACOON system defaults configuration entry point.
		 * Change configurable system default values.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * One or more system default values gets changed.
		 * ### Further Information:
		 * None.
		 * ### Configurable default values
		 * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description | Value |
		 * | :--- | :--- | :--- |
		 * | `languageDefault` | Defines which language should be default. | `ISO 639-1 code` |
		 * | `downloadShareDefaultExpirationPeriod` | Default expiration period for Download Shares in _days_. | `Integer between 0 and 9999`<br>Set `0` to disable. |
		 * | `uploadShareDefaultExpirationPeriod` | Default expiration period for Upload Shares in _days_. | `Integer between 0 and 9999`<br>Set `0` to disable. |
		 * | `fileDefaultExpirationPeriod` | Default expiration period for all uploaded files in _days_. | `Integer between 0 and 9999`<br>Set `0` to disable. |
		 * | `nonmemberViewerDefault` | Defines if new users get the role _Non Member Viewer_ by default | `true or false` |
		 * </details>
		 * Put v4/system/config/settings/defaults
		 * @return {SystemDefaults} OK
		 */
		UpdateSystemDefaults(requestBody: UpdateSystemDefaults): Observable<SystemDefaults> {
			return this.http.put<SystemDefaults>(this.baseUri + 'v4/system/config/settings/defaults', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request eventlog settings
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
		 * ### Description:
		 * DRACOON eventlog configuration entry point.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * Returns a list of configurable eventlog settings.
		 * ### Further Information:
		 * None.
		 * ### Configurable eventlog settings:
		 * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description | Value |
		 * | :--- | :--- | :--- |
		 * | `enabled` | Determines whether eventlog is enabled. | `true or false` |
		 * | `retentionPeriod` | Retention period (in _days_) of eventlog entries.<br>After that period, all entries are deleted. | `Integer between 0 and 9999`<br>If set to `0`: no logs are deleted |
		 * | `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |
		 * </details>
		 * Get v4/system/config/settings/eventlog
		 * @return {EventlogConfig} OK
		 */
		RequestEventlogConfig(): Observable<EventlogConfig> {
			return this.http.get<EventlogConfig>(this.baseUri + 'v4/system/config/settings/eventlog', {});
		}

		/**
		 * Update eventlog settings
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
		 * ### Description:
		 * DRACOON eventlog configuration entry point.
		 * Change configurable eventlog settings.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * One or more eventlog settings gets changed.
		 * ### Further Information:
		 * None.
		 * ### Configurable eventlog settings:
		 * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description | Value |
		 * | :--- | :--- | :--- |
		 * | `enabled` | Determines whether eventlog is enabled. | `true or false` |
		 * | `retentionPeriod` | Retention period (in _days_) of eventlog entries.<br>After that period, all entries are deleted. | `Integer between 0 and 9999`<br>If set to `0`: no logs are deleted<br>Recommended value: 7 |
		 * | `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |
		 * </details>
		 * Put v4/system/config/settings/eventlog
		 * @return {EventlogConfig} OK
		 */
		UpdateEventlogConfig(requestBody: UpdateEventlogConfig): Observable<EventlogConfig> {
			return this.http.put<EventlogConfig>(this.baseUri + 'v4/system/config/settings/eventlog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request general settings
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
		 * ### Description:
		 * DRACOON general settings configuration entry point.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * Returns a list of configurable general settings.
		 * ### Further Information:
		 * ### Auth token restrictions:
		 * A restriction is a lower bound for a token timeout and defines a duration after which a token is invalidated when it wasn't used.
		 * The access/refresh token validity duration of the client is the upper bound. A token is invalidated - in any case - when it has passed.
		 * Auth token restrictions are enabled by default.
		 * * Default access token validity: **2 hours**
		 * * Default refresh token validity: **30 days**
		 * ### Configurable general settings:
		 * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description | Value |
		 * | :--- | :--- | :--- |
		 * | `sharePasswordSmsEnabled` | Determines whether sending of share passwords via SMS is allowed. | `true or false` |
		 * | `cryptoEnabled` | Determines whether client-side encryption is enabled.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
		 * | `emailNotificationButtonEnabled` | Determines whether email notification button is enabled. | `true or false` |
		 * | `eulaEnabled` | Determines whether EULA is enabled.<br>Each user has to confirm the EULA at first login. | `true or false` |
		 * | `useS3Storage` | Defines if S3 is used as storage backend.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
		 * | `s3TagsEnabled` | Determines whether S3 tags are enabled | `true or false` |
		 * | `authTokenRestrictions` | Determines auth token restrictions. (e.g. restricted access token validity) | `object` |
		 * </details>
		 * ### Deprecated configurable general settings:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting                           | Description | Value |
		 * |:----------------------------------| :--- | :--- |
		 * | <del>`mediaServerEnabled`</del>   | Determines whether media server is enabled.<br>Returns boolean value dependent on conjunction of `mediaServerConfigEnabled` AND `mediaServerEnabled` | `true or false` |
		 * | <del>`weakPasswordEnabled`</del>  | Determines whether weak password is allowed.<br>Use `GET /system/config/policies/passwords` API to get configured password policies. | `true or false` |
		 * | <del>`hideLoginInputFields`</del> | Determines whether input fields for login should be enabled | `true or false` |
		 * </details>
		 * Get v4/system/config/settings/general
		 * @return {GeneralSettings} OK
		 */
		RequestGeneralSettings(): Observable<GeneralSettings> {
			return this.http.get<GeneralSettings>(this.baseUri + 'v4/system/config/settings/general', {});
		}

		/**
		 * Update general settings
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
		 * ### Description:
		 * DRACOON general settings configuration entry point.
		 * Change configurable general settings.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * One or more general settings gets changed.
		 * ### Further Information:
		 * Auth token restrictions are enabled by default.
		 * * Default access token validity: **2 hours**
		 * * Default refresh token validity: **30 days**
		 * ### Configurable general settings:
		 * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description | Value |
		 * | :--- | :--- | :--- |
		 * | `sharePasswordSmsEnabled` | Determines whether sending of share passwords via SMS is allowed. | `true or false` |
		 * | `cryptoEnabled` | Determines whether client-side encryption is enabled.<br>Can only be enabled once; disabling is **NOT** possible. | `true or false` |
		 * | `emailNotificationButtonEnabled` | Determines whether email notification button is enabled. | `true or false` |
		 * | `eulaEnabled` | Determines whether EULA is enabled.<br>Each user has to confirm the EULA at first login. | `true or false` |
		 * | `s3TagsEnabled` | Determines whether S3 tags are enabled | `true or false` |
		 * | `authTokenRestrictions` | Determines auth token restrictions. (e.g. restricted access token validity) | `object` |
		 * </details>
		 * ### Deprecated configurable general settings:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting                           | Description | Value |
		 * |:----------------------------------| :--- | :--- |
		 * | <del>`mediaServerEnabled`</del>   | Determines whether media server is enabled.<br>**CANNOT** be enabled if media server configuration is disabled in `core-service.properties`.<br>Check `mediaServerConfigEnabled` with `GET /system/config/settings/infrastructure`. | `true or false` |
		 * | <del>`weakPasswordEnabled`</del>  | Determines whether weak password is allowed.<br>Use `PUT /system/config/policies/passwords` API to change configured password policies. | `true or false` |
		 * | <del>`hideLoginInputFields`</del> | Determines whether input fields for login should be enabled | `true or false` |
		 * </details>
		 * Put v4/system/config/settings/general
		 * @return {GeneralSettings} OK
		 */
		UpdateGeneralSettings(requestBody: UpdateGeneralSettings): Observable<GeneralSettings> {
			return this.http.put<GeneralSettings>(this.baseUri + 'v4/system/config/settings/general', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request infrastructure properties
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
		 * ### Description:
		 * DRACOON infrastructure properties entry point.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * Returns a list of read-only infrastructure properties.
		 * ### Further Information:
		 * Source: `core-service.properties`
		 * ### Read-only infrastructure properties:
		 * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description | Value |
		 * | :--- | :--- | :--- |
		 * | `smsConfigEnabled` | Determines whether sending of share passwords via SMS is **system-wide** enabled. | `true or false` |
		 * | `mediaServerConfigEnabled` | Determines whether media server is **system-wide** enabled. | `true or false` |
		 * | `s3DefaultRegion` | Suggested S3 region | `Region name` |
		 * | `s3EnforceDirectUpload` | Enforce direct upload to S3 | `true or false` |
		 * | `dracoonCloud` | Determines if the **DRACOON Core** is deployed in the cloud environment | `true or false` |
		 * | `tenantUuid` | Current tenant UUID | `UUID` |
		 * </details>
		 * Get v4/system/config/settings/infrastructure
		 * @return {InfrastructureProperties} OK
		 */
		RequestInfrastructureProperties(): Observable<InfrastructureProperties> {
			return this.http.get<InfrastructureProperties>(this.baseUri + 'v4/system/config/settings/infrastructure', {});
		}

		/**
		 * Request syslog settings
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
		 * ### Description:
		 * DRACOON syslog configuration entry point.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * Returns a list of configurable syslog settings.
		 * ### Further Information:
		 * None.
		 * ### Configurable syslog settings:
		 * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description | Value |
		 * | :--- | :--- | :--- |
		 * | `enabled` | Determines whether syslog is enabled. | `true or false` |
		 * | `host` | Syslog server (IP or FQDN) | `DNS name or IPv4 of a syslog server` |
		 * | `port` | Syslog server port | `Valid port number` |
		 * | `protocol` | Protocol to connect to syslog server | `TCP or UDP` |
		 * | `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |
		 * </details>
		 * Get v4/system/config/settings/syslog
		 * @return {SyslogConfig} OK
		 */
		RequestSyslogConfig(): Observable<SyslogConfig> {
			return this.http.get<SyslogConfig>(this.baseUri + 'v4/system/config/settings/syslog', {});
		}

		/**
		 * Update syslog settings
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.6.0</h3>
		 * ### Description:
		 * DRACOON syslog configuration entry point.
		 * Change configurable syslog settings.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * One or more syslog settings gets changed.
		 * ### Further Information:
		 * None.
		 * ### Configurable syslog settings:
		 * <details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Setting | Description | Value |
		 * | :--- | :--- | :--- |
		 * | `enabled` | Set `true` to enable syslog. | `true or false` |
		 * | `host` | Syslog server (IP or FQDN) | `DNS name or IPv4 of a syslog server` |
		 * | `port` | Syslog server port | `Valid port number` |
		 * | `protocol` | Protocol to connect to syslog server | `TCP or UDP` |
		 * | `logIpEnabled` | Determines whether user’s IP address is logged. | `true or false` |
		 * </details>
		 * Put v4/system/config/settings/syslog
		 * @return {SyslogConfig} OK
		 */
		UpdateSyslogConfig(requestBody: UpdateSyslogConfig): Observable<SyslogConfig> {
			return this.http.put<SyslogConfig>(this.baseUri + 'v4/system/config/settings/syslog', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request S3 storage configuration
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>
		 * ### Description:
		 * Retrieve S3 configuration.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * S3 configuration is returned.
		 * ### Further Information:
		 * None.
		 * ### Virtual hosted style access
		 * Example: https://<span style="color:red;">bucket-name</span>.s3.<span style="color:red;">region</span>.amazonaws.com/<span style="color:red;">key-name</span>
		 * Get v4/system/config/storage/s3
		 * @return {S3Config} OK
		 */
		Request3Config(): Observable<S3Config> {
			return this.http.get<S3Config>(this.baseUri + 'v4/system/config/storage/s3', {});
		}

		/**
		 * Create S3 storage configuration
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>
		 * ### Description:
		 * Create new S3 configuration.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * New S3 configuration is created.
		 * ### Further Information:
		 * Forbidden characters in bucket names: [`.`]
		 * `bucketName` and `endpointUrl` are deprecated, use `bucketUrl` instead.
		 * ### Virtual hosted style access
		 * Example: https://<span style="color:red;">bucket-name</span>.s3.<span style="color:red;">region</span>.amazonaws.com/<span style="color:red;">key-name</span>
		 * Post v4/system/config/storage/s3
		 * @return {void} 
		 */
		CreateS3Config(requestBody: S3ConfigCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/system/config/storage/s3', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update S3 storage configuration
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>
		 * ### Description:
		 * Update existing S3 configuration.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * S3 configuration is updated.
		 * ### Further Information:
		 * Forbidden characters in bucket names: [`.`]
		 * `bucketName` and `endpointUrl` are deprecated, use `bucketUrl` instead.
		 * ### Virtual hosted style access
		 * Example: https://<span style="color:red;">bucket-name</span>.s3.<span style="color:red;">region</span>.amazonaws.com/<span style="color:red;">key-name</span>
		 * Put v4/system/config/storage/s3
		 * @return {S3Config} OK
		 */
		UpdateS3Config(requestBody: S3ConfigUpdateRequest): Observable<S3Config> {
			return this.http.put<S3Config>(this.baseUri + 'v4/system/config/storage/s3', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request list of configured S3 tags
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
		 * ### Description:
		 * Retrieve all configured S3 tags.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * S3 tags are returned.
		 * ### Further Information:
		 * An empty list is returned if no S3 tags are found / configured.
		 * Get v4/system/config/storage/s3/tags
		 * @return {S3TagList} OK
		 */
		RequestS3TagList(): Observable<S3TagList> {
			return this.http.get<S3TagList>(this.baseUri + 'v4/system/config/storage/s3/tags', {});
		}

		/**
		 * Create S3 tag
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
		 * ### Description:
		 * Create new S3 tag.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * New S3 tag is created.
		 * ### Further Information:
		 * * Maximum key length: **128** characters.
		 * * Maximum value length: **256** characters.
		 * * Both S3 tag key and value are **case-sensitive** strings.
		 * * Maximum of **20 mandatory S3 tags** is allowed.
		 * Post v4/system/config/storage/s3/tags
		 * @return {void} 
		 */
		CreateS3Tag(requestBody: S3TagCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/system/config/storage/s3/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove S3 tag
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
		 * ### Description:
		 * Delete S3 tag.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * S3 tag gets deleted.
		 * ### Further Information:
		 * None.
		 * Delete v4/system/config/storage/s3/tags/{id}
		 * @param {string} id S3 tag ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		RemoveS3Tag(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/system/config/storage/s3/tags/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request S3 tag
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>
		 * ### Description:
		 * Retrieve single S3 tag.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
		 * role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.
		 * ### Postcondition:
		 * S3 tag is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/system/config/storage/s3/tags/{id}
		 * @param {string} id S3 tag ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {S3Tag} OK
		 */
		RequestS3Tag(id: string): Observable<S3Tag> {
			return this.http.get<S3Tag>(this.baseUri + 'v4/system/config/storage/s3/tags/' + id, {});
		}

		/**
		 * Cancel file upload
		 * ### Description:
		 * Cancel file upload.
		 * ### Precondition:
		 * Valid upload token.
		 * ### Postcondition:
		 * Upload canceled, token invalidated and all already transfered chunks removed.
		 * ### Further Information:
		 * It is recommended to notify the API about cancelled uploads if possible.
		 * Delete v4/uploads/{token}
		 * @param {string} token Upload token
		 * @return {void} 
		 */
		CancelFileUploadByToken(token: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/uploads/' + (token == null ? '' : encodeURIComponent(token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Complete file upload
		 * ### Description:
		 * Finish uploading a file.
		 * ### Precondition:
		 * Valid upload token.
		 * ### Postcondition:
		 * File created.
		 * ### Further Information:
		 * The provided file name might be changed in accordance with the resolution strategy:
		 * * **autorename**: changes the file name and adds a number to avoid conflicts.
		 * * **overwrite**: deletes any old file with the same file name.
		 * * **fail**: returns an error; in this case, another `PUT` request with a different file name may be sent.
		 * Please ensure that all chunks have been transferred correctly before finishing the upload.
		 * Download share id (if exists) gets changed if:
		 * - node with the same name exists in the target container
		 * - `resolutionStrategy` is `overwrite`
		 * - `keepShareLinks` is `true`
		 * Put v4/uploads/{token}
		 * @param {string} token Upload token
		 * @return {void} 
		 */
		CompleteFileUploadByToken(token: string, requestBody: CompleteUploadRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/uploads/' + (token == null ? '' : encodeURIComponent(token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request user account information
		 * ### Description:
		 * Retrieves all information regarding the current user's account.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * User information is returned.
		 * ### Further Information:
		 * Setting the query parameter `more_info` to `true`, causes the API to return more details e.g. the user's groups.
		 * `customer` (`CustomerData`) attribute in `UserAccount` response model is deprecated. Please use response from `GET /user/account/customer` instead.
		 * Get v4/user/account
		 * @param {boolean} more_info Get more info for this user
		 * e.g. list of user groups
		 * @return {UserAccount} OK
		 */
		RequestUserInfo(more_info: boolean | null | undefined): Observable<UserAccount> {
			return this.http.get<UserAccount>(this.baseUri + 'v4/user/account?more_info=' + more_info, {});
		}

		/**
		 * Update user account
		 * ### Description:
		 * Update current user's account.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * User's account is updated.
		 * ### Further Information:
		 * * All input fields are limited to **150** characters.
		 * * **All** characters are allowed.
		 * `customer` (`CustomerData`) attribute in `UserAccount` response model is deprecated. Please use response from `GET /user/account/customer` instead.
		 * Put v4/user/account
		 * @return {UserAccount} OK
		 */
		UpdateUserAccount(requestBody: UpdateUserAccountRequest): Observable<UserAccount> {
			return this.http.put<UserAccount>(this.baseUri + 'v4/user/account', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reset avatar
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
		 * ### Description:
		 * Reset (custom) avatar to default avatar.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * * User's avatar gets deleted.
		 * * Default avatar is set.
		 * ### Further Information:
		 * None.
		 * Delete v4/user/account/avatar
		 * @return {Avatar} OK
		 */
		ResetAvatar(): Observable<Avatar> {
			return this.http.delete<Avatar>(this.baseUri + 'v4/user/account/avatar', {});
		}

		/**
		 * Request avatar
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
		 * ### Description:
		 * Get the avatar.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * Avatar is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/user/account/avatar
		 * @return {Avatar} OK
		 */
		RequestAvatar(): Observable<Avatar> {
			return this.http.get<Avatar>(this.baseUri + 'v4/user/account/avatar', {});
		}

		/**
		 * Request customer information for user
		 * ### Description:
		 * Use this API to get:
		 * * customer name
		 * * used / free space
		 * * used / available
		 * * user account info
		 * of the according customer.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * Customer information is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/user/account/customer
		 * @return {CustomerData} OK
		 */
		RequestCustomerInfo(): Observable<CustomerData> {
			return this.http.get<CustomerData>(this.baseUri + 'v4/user/account/customer', {});
		}

		/**
		 * Activate client-side encryption for customer
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.24.0</h3>
		 * ### Use `POST /settings/keypair` API
		 * ### Description:
		 * Activate client-side encryption for according customer.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.
		 * ### Postcondition:
		 * Client-side encryption is enabled.
		 * ### Further Information:
		 * Sets the ability for this customer to encrypt rooms.
		 * Once enabled on customer level, it **CANNOT** be unset.
		 * On activation, a customer rescue key pair **MUST** be set.
		 * Put v4/user/account/customer
		 * @return {CustomerData} OK
		 */
		EnableCustomerEncryption(requestBody: EnableCustomerEncryptionRequest): Observable<CustomerData> {
			return this.http.put<CustomerData>(this.baseUri + 'v4/user/account/customer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request customer's key pair
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.24.0</h3>
		 * ### Use `GET /settings/keypair` API
		 * ### Description:
		 * Retrieve the customer rescue key pair.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * Key pair is returned.
		 * ### Further Information:
		 * The private key is password-based encrypted with `AES256` / `PBKDF2`.
		 * Get v4/user/account/customer/keypair
		 * @return {UserKeyPairContainer} OK
		 */
		RequestCustomerKeyPair(): Observable<UserKeyPairContainer> {
			return this.http.get<UserKeyPairContainer>(this.baseUri + 'v4/user/account/customer/keypair', {});
		}

		/**
		 * Remove user's key pair
		 * ### Description:
		 * Delete user key pair.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * Key pair is deleted.
		 * ### Further Information:
		 * If parameter `version` is not set and two key versions exist, this API deletes version A.
		 * If two keys with the same version are set, this API deletes the older one.
		 * This will also remove all file keys that were encrypted with the user public key.
		 * If the user had exclusive access to some files, those are removed as well since decrypting them became impossible.
		 * Delete v4/user/account/keypair
		 * @param {string} version Version (NEW)
		 * @return {void} 
		 */
		RemoveUserKeyPair(version: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/user/account/keypair?version=' + (version == null ? '' : encodeURIComponent(version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request user's key pair
		 * ### Description:
		 * Retrieve the user key pair.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * Key pair is returned.
		 * ### Further Information:
		 * The private key is password-based encrypted with `AES256` / `PBKDF2`.
		 * Get v4/user/account/keypair
		 * @param {string} version Version (NEW)
		 * @return {UserKeyPairContainer} OK
		 */
		RequestUserKeyPair(version: string | null | undefined): Observable<UserKeyPairContainer> {
			return this.http.get<UserKeyPairContainer>(this.baseUri + 'v4/user/account/keypair?version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Set user's key pair
		 * ### Description:
		 * Set the user key pair.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * Key pair is set.
		 * ### Further Information:
		 * Overwriting an existing key pair is **NOT** possible.
		 * Please delete the existing key pair first.
		 * The private key is password-based encrypted with `AES256` / `PBKDF2`.
		 * Post v4/user/account/keypair
		 * @return {void} 
		 */
		SetUserKeyPair(requestBody: UserKeyPairContainer): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/user/account/keypair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Request all user key pairs
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
		 * ### Description:
		 * Retrieve all user key pairs to allow re-encrypting file keys without need for a second distributor.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * List of key pairs is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/user/account/keypairs
		 * @return {Array<UserKeyPairContainer>} OK
		 */
		RequestUserKeyPairs(): Observable<Array<UserKeyPairContainer>> {
			return this.http.get<Array<UserKeyPairContainer>>(this.baseUri + 'v4/user/account/keypairs', {});
		}

		/**
		 * Create key pair and preserve copy of old private key
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
		 * ### Description:
		 * Create user key pair and preserve copy of old private key.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * Key pair is created.
		 * Copy of old private key is preserved.
		 * ### Further Information:
		 * You can submit your old private key, encrypted with your current password.
		 * This allows migrating file keys encrypted with your old key pair to the new one.
		 * Post v4/user/account/keypairs
		 * @return {void} 
		 */
		CreateAndPreserveUserKeyPair(requestBody: CreateKeyPairRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/user/account/keypairs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Using emergency-code
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.37.0</h3>
		 * ### Description:
		 * Using emergency code for login
		 * ### Precondition:
		 * User has MFA enabled and is already logged in with account/pw (aka pre-Auth-Role)
		 * ### Postcondition:
		 * All MFA-setups for the user are deleted.
		 * ### Further Information:
		 * Delete v4/user/account/mfa
		 * @return {void} OK
		 */
		UseEmergencyCode(emergency_code: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/user/account/mfa?emergency_code=' + (emergency_code == null ? '' : encodeURIComponent(emergency_code)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request information about the user's mfa status
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.37.0</h3>
		 * ### Description:
		 * Request information about the user's mfa status
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * None.
		 * ### Further Information:
		 * None.
		 * Get v4/user/account/mfa
		 * @return {UserMfaStatusResponse} OK
		 */
		GetMfaStatusForUser(): Observable<UserMfaStatusResponse> {
			return this.http.get<UserMfaStatusResponse>(this.baseUri + 'v4/user/account/mfa', {});
		}

		/**
		 * Request information to setup TOTP as second authentication factor
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.37.0</h3>
		 * ### Description:
		 * Get setup information for multi-factor authentication (TOTP).
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * None.
		 * ### Further Information:
		 * None.
		 * Get v4/user/account/mfa/totp
		 * @return {void} 
		 */
		GetTotpSetupInformation(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/user/account/mfa/totp', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Confirm second factor TOTP setup with a generated OTP
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.37.0</h3>
		 * ### Description:
		 * Confirm second factor TOTP setup with a generated OTP.
		 * ### Precondition:
		 * Authenticated user
		 * ### Postcondition:
		 * Second factor TOTP is enabled.
		 * ### Further Information:
		 * None.
		 * Post v4/user/account/mfa/totp
		 * @return {void} 
		 */
		ConfirmTotpSetup(requestBody: MfaTotpConfirmationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/user/account/mfa/totp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disable a MFA TOTP setup with generated OTP
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.37.0</h3>
		 * ### Description:
		 * Delete multi-factor authentication TOTP setup with a valid OTP code.
		 * ### Precondition:
		 * Authenticated user
		 * Multi-factor authentication is **NOT** enforced
		 * ### Postcondition:
		 * Second factor TOTP is disabled.
		 * ### Further Information:
		 * None.
		 * Delete v4/user/account/mfa/totp/{id}
		 * @param {string} id Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		DeleteMfaTotpSetup(id: string, valid_otp: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/user/account/mfa/totp/' + id + '?valid_otp=' + (valid_otp == null ? '' : encodeURIComponent(valid_otp)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Change user's password
		 * ### Description:
		 * Change the user's password.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * User's password is changed.
		 * ### Further Information:
		 * The password **MUST** comply to configured password policies.
		 * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
		 * Put v4/user/account/password
		 * @return {void} 
		 */
		ChangeUserPassword(requestBody: ChangeUserPasswordRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/user/account/password', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Invalidate authentication token
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.12.0</h3>
		 * ### Description:
		 * Log out a user.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * * User is logged out
		 * * Authentication token gets invalidated.
		 * ### Further Information:
		 * None.
		 * Post v4/user/logout
		 * @param {boolean} everywhere Invalidate all tokens
		 * @return {void} 
		 */
		Logout(everywhere: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/user/logout?everywhere=' + everywhere, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request list of notification configurations
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
		 * ### Description:
		 * Retrieve a list of notification configurations for current user.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * List of available notification configurations is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/user/notifications/config
		 * @return {NotificationConfigList} OK
		 */
		RequestListOfNotificationConfigs(): Observable<NotificationConfigList> {
			return this.http.get<NotificationConfigList>(this.baseUri + 'v4/user/notifications/config', {});
		}

		/**
		 * Update notification configuration
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
		 * ### Description:
		 * Update notification configuration for current user.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * Notification configuration is updated.
		 * ### Further Information:
		 * Leave `channelIds` empty to disable notifications.
		 * Put v4/user/notifications/config/{id}
		 * @param {string} id Unique identifier for a notification configuration
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {NotificationConfig} OK
		 */
		UpdateNotificationConfig(id: string, requestBody: NotificationConfigChangeRequest): Observable<NotificationConfig> {
			return this.http.put<NotificationConfig>(this.baseUri + 'v4/user/notifications/config/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request list of OAuth client approvals
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.22.0</h3>
		 * ### Functional Description:
		 * Retrieve information about all OAuth client approvals.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * None.
		 * ### Further Information:
		 * None.
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort criteria are possible.
		 * Fields are connected via logical conjunction **AND**.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `clientName:desc`
		 * Sort by `clientName` descending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `clientName` | Client name |
		 * </details>
		 * Get v4/user/oauth/approvals
		 * @param {string} sort Sort string
		 * @return {Array<OAuthApproval>} OK
		 */
		RequestOAuthApprovals(sort: string | null | undefined): Observable<Array<OAuthApproval>> {
			return this.http.get<Array<OAuthApproval>>(this.baseUri + 'v4/user/oauth/approvals?sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Remove OAuth client approval
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.22.0</h3>
		 * ### Functional Description:
		 * Delete an OAuth client approval.
		 * ### Precondition:
		 * Authenticated user and valid client ID
		 * ### Postcondition:
		 * OAuth Client approval is revoked.
		 * ### Further Information:
		 * None.
		 * Delete v4/user/oauth/approvals/{client_id}
		 * @param {string} client_id OAuth client ID
		 * @return {void} 
		 */
		RemoveOAuthApproval(client_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/user/oauth/approvals/' + (client_id == null ? '' : encodeURIComponent(client_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request list of OAuth client authorizations
		 * ### Description:
		 * Retrieve information about all OAuth client authorizations.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * List of OAuth client authorizations is returned.
		 * ### Further Information:
		 * ### Filtering:
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `isStandard:eq:true`
		 * Get standard OAuth clients.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `isStandard` | Standard client filter | `eq` |  | `true or false` |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort criteria are possible.
		 * Fields are connected via logical conjunction **AND**.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `clientName:desc`
		 * Sort by `clientName` descending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `clientName` | Client name |
		 * </details>
		 * Get v4/user/oauth/authorizations
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @return {Array<OAuthAuthorization>} OK
		 */
		RequestOAuthAuthorizations(filter: string | null | undefined, sort: string | null | undefined): Observable<Array<OAuthAuthorization>> {
			return this.http.get<Array<OAuthAuthorization>>(this.baseUri + 'v4/user/oauth/authorizations?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Remove all OAuth authorizations of a client
		 * ### Description:
		 * Delete all authorizations of a client.
		 * ### Precondition:
		 * Authenticated user and valid client ID
		 * ### Postcondition:
		 * All authorizations for the client are revoked.
		 * ### Further Information:
		 * None.
		 * Delete v4/user/oauth/authorizations/{client_id}
		 * @param {string} client_id OAuth client ID
		 * @return {void} 
		 */
		RemoveOAuthAuthorizations(client_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/user/oauth/authorizations/' + (client_id == null ? '' : encodeURIComponent(client_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a OAuth authorization
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.12.0</h3>
		 * ### Description:
		 * Delete an authorization.
		 * ### Precondition:
		 * Authenticated user and valid client ID, authorization ID
		 * ### Postcondition:
		 * Authorization is revoked.
		 * ### Further Information:
		 * None.
		 * Delete v4/user/oauth/authorizations/{client_id}/{authorization_id}
		 * @param {string} client_id OAuth client ID
		 * @param {string} authorization_id OAuth authorization ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		RemoveOAuthAuthorization(client_id: string, authorization_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/user/oauth/authorizations/' + (client_id == null ? '' : encodeURIComponent(client_id)) + '/' + authorization_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * (authenticated) Ping
		 * ### Description:
		 * Test connection to DRACOON Server (while authenticated).
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * `200 OK` with principal information is returned if successful.
		 * ### Further Information:
		 * None.
		 * Get v4/user/ping
		 * @return {string} OK
		 */
		PingUser(): Observable<string> {
			return this.http.get(this.baseUri + 'v4/user/ping', { responseType: 'text' });
		}

		/**
		 * Request user profile attributes
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.7.0</h3>
		 * ### Description:
		 * Retrieve a list of user profile attributes.
		 * ### Precondition:
		 * None.
		 * ### Postcondition:
		 * List of attributes is returned.
		 * ### Further Information:
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `key:cn:searchString_1|value:cn:searchString_2`
		 * Filter by attribute key contains `searchString_1` **AND** attribute value contains `searchString_2`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `key` | User profile attribute key filter | `cn, eq, sw` | Attribute key contains / equals / starts with value. | `search String` |
		 * | `value` | User profile attribute value filter | `cn, eq, sw` | Attribute value contains / equals / starts with value. | `search String` |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort fields are supported.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `key:asc|value:desc`
		 * Sort by `key` ascending **AND** by `value` descending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `key` | User profile attribute key |
		 * | `value` | User profile attribute value |
		 * </details>
		 * Get v4/user/profileAttributes
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @return {AttributesResponse} OK
		 */
		RequestProfileAttributes(offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined, sort: string | null | undefined): Observable<AttributesResponse> {
			return this.http.get<AttributesResponse>(this.baseUri + 'v4/user/profileAttributes?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Set user profile attributes
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.12.0</h3>
		 * ### Description:
		 * Set custom user profile attributes.
		 * ### Precondition:
		 * None.
		 * ### Postcondition:
		 * Custom user profile attributes are set.
		 * ### Further Information:
		 * Batch function.
		 * All existing user profile attributes will be deleted.
		 * * Allowed characters for keys are: `[a-zA-Z0-9_-]`
		 * * Characters are **case-insensitive**
		 * * Maximum key length is **255**
		 * * Maximum value length is **4096**
		 * Post v4/user/profileAttributes
		 * @return {void} 
		 */
		SetProfileAttributes(requestBody: ProfileAttributesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/user/profileAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add or edit user profile attributes
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.7.0</h3>
		 * ### Description:
		 * Add or edit custom user profile attributes.
		 * <br/><br/><span style="font-weight: bold; color: red;"> &#128679; **Warning: Please note that the response with HTTP status code 200 (OK) is deprecated and will be replaced with HTTP status code 204 (No content)!**</span><br/>
		 * ### Precondition:
		 * None.
		 * ### Postcondition:
		 * Custom user profile attributes are added or edited.
		 * ### Further Information:
		 * Batch function.
		 * If an entry existed before, it will be overwritten.
		 * Range submodel is never returned.
		 * * Allowed characters for keys are: `[a-zA-Z0-9_-]`
		 * * Characters are **case-insensitive**
		 * * Maximum key length is **255**
		 * * Maximum value length is **4096**
		 * Put v4/user/profileAttributes
		 * @return {ProfileAttributes} OK **(DEPRECATED: WILL BE REPLACED BY 204: "No content")**
		 */
		UpdateProfileAttributes(requestBody: ProfileAttributesRequest): Observable<ProfileAttributes> {
			return this.http.put<ProfileAttributes>(this.baseUri + 'v4/user/profileAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove user profile attribute
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.7.0</h3>
		 * ### Description:
		 * Delete custom user profile attribute.
		 * ### Precondition:
		 * None.
		 * ### Postcondition:
		 * Custom user profile attribute is deleted.
		 * ### Further Information:
		 * Allowed characters for keys are: `[a-zA-Z0-9_-]`
		 * Delete v4/user/profileAttributes/{key}
		 * @param {string} key Key
		 * @return {void} 
		 */
		RemoveProfileAttribute(key: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/user/profileAttributes/' + (key == null ? '' : encodeURIComponent(key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List Download Share subscriptions
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
		 * ### Description:
		 * Retrieve a list of subscribed Download Shares for current user.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * List of subscribed Download Shares is returned.
		 * ### Further Information:
		 * None.
		 * ### Filtering
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `authParentId:eq:#`
		 * Get download shares where `authParentId` equals `#`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | **`downloadShareId`** | Download Share ID filter | `eq` | Download Share ID equals value. | `long value` |
		 * | **`authParentId`** | Auth parent ID filter | `eq` | Auth parent ID equals value. | `long value` |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort criteria are possible.
		 * Fields are connected via logical conjunction **AND**.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `downloadShareId:desc|authParentId:asc`
		 * Sort by `downloadShareId` descending **AND** `authParentId` ascending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | **`downloadShareId`** | Download Share ID |
		 * | **`authParentId`** | Auth parent ID |
		 * </details>
		 * Get v4/user/subscriptions/download_shares
		 * @param {string} filter Filter string
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} sort Sort string
		 * @return {SubscribedDownloadShareList} OK
		 */
		ListDownloadShareSubscriptions(filter: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, sort: string | null | undefined): Observable<SubscribedDownloadShareList> {
			return this.http.get<SubscribedDownloadShareList>(this.baseUri + 'v4/user/subscriptions/download_shares?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&limit=' + limit + '&offset=' + offset + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Subscribe or Unsubscribe a List of Download Shares for notifications
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
		 * ### Description:
		 * Subscribe/Unsubscribe download shares for notifications.
		 * ### Precondition:
		 * User with _"manage download share"_ permissions on target node.
		 * ### Postcondition:
		 * Download shares are subscribed or unsubscribed.
		 * Notifications for these download shares will be triggered in the future.
		 * ### Further Information:
		 * Maximum number of subscriptions is 200.
		 * Put v4/user/subscriptions/download_shares
		 * @return {void} 
		 */
		SubscribeDownloadShares(requestBody: UpdateSubscriptionsBulkRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/user/subscriptions/download_shares', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unsubscribe Download Share from notifications
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
		 * ### Description:
		 * Unsubscribe Download Share from notifications.
		 * ### Precondition:
		 * User with _"manage download share"_ permissions on target node.
		 * ### Postcondition:
		 * Download Share is unsubscribed.
		 * Notifications for this Download Share are disabled.
		 * ### Further Information:
		 * None.
		 * Delete v4/user/subscriptions/download_shares/{share_id}
		 * @param {string} share_id Share ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		UnsubscribeDownloadShare(share_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/user/subscriptions/download_shares/' + share_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Subscribe Download Share for notifications
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
		 * ### Description:
		 * Subscribe Download Share for notifications.
		 * ### Precondition:
		 * User with _"manage download share"_ permissions on target node.
		 * ### Postcondition:
		 * Download Share is subscribed.
		 * Notifications for this Download Share will be triggered in the future.
		 * ### Further Information:
		 * None.
		 * Post v4/user/subscriptions/download_shares/{share_id}
		 * @param {string} share_id Share ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		SubscribeDownloadShare(share_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/user/subscriptions/download_shares/' + share_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List node subscriptions
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
		 * ### Description:
		 * Retrieve a list of subscribed nodes for current user.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * List of subscribed nodes is returned.
		 * ### Further Information:
		 * None.
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `authParentId:eq:#`
		 * Get nodes where `authParentId` equals `#`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | **`nodeId`** | Node ID filter | `eq` | Node ID equals value. | `long value` |
		 * | **`authParentId`** | Auth parent ID filter | `eq` | Auth parent ID equals value. | `long value` |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort criteria are possible.
		 * Fields are connected via logical conjunction **AND**.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `nodeId:desc|authParentId:asc`
		 * Sort by `nodeId` descending **AND** `authParentId` ascending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | **`nodeId`** | Node ID |
		 * | **`authParentId`** | Auth parent ID |
		 * </details>
		 * Get v4/user/subscriptions/nodes
		 * @param {string} filter Filter string
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} sort Sort string
		 * @return {SubscribedNodeList} OK
		 */
		ListNodeSubscriptions(filter: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, sort: string | null | undefined): Observable<SubscribedNodeList> {
			return this.http.get<SubscribedNodeList>(this.baseUri + 'v4/user/subscriptions/nodes?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&limit=' + limit + '&offset=' + offset + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Subscribe or Unsubscribe a List of nodes for notifications
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
		 * ### Description:
		 * Subscribe/Unsubscribe nodes for notifications.
		 * ### Precondition:
		 * User has _"read"_ permissions in auth parent room.
		 * ### Postcondition:
		 * Nodes are subscribed or unsubscribed.
		 * Notifications for these nodes will be triggered in the future.
		 * ### Further Information:
		 * Maximum number of subscriptions is 200.
		 * Put v4/user/subscriptions/nodes
		 * @return {void} 
		 */
		UpdateNodeSubscriptions(requestBody: UpdateSubscriptionsBulkRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/user/subscriptions/nodes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unsubscribe node from notifications
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
		 * ### Description:
		 * Unsubscribe node from notifications.
		 * ### Precondition:
		 * User has _"read"_ permissions in auth parent room.
		 * ### Postcondition:
		 * Node is unsubscribed.
		 * Notifications for this node are disabled.
		 * ### Further Information:
		 * None.
		 * Delete v4/user/subscriptions/nodes/{node_id}
		 * @param {string} node_id Node ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		UnsubscribeNode(node_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/user/subscriptions/nodes/' + node_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Subscribe node for notifications
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
		 * ### Description:
		 * Subscribe node for notifications.
		 * ### Precondition:
		 * User has _"read"_ permissions in auth parent room.
		 * ### Postcondition:
		 * Node is subscribed.
		 * Notifications for this node will be triggered in the future.
		 * ### Further Information:
		 * None.
		 * Post v4/user/subscriptions/nodes/{node_id}
		 * @param {string} node_id Node ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		SubscribeNode(node_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/user/subscriptions/nodes/' + node_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List Upload Share subscriptions
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
		 * ### Description:
		 * Retrieve a list of subscribed Upload Shares for current user.
		 * ### Precondition:
		 * Authenticated user.
		 * ### Postcondition:
		 * List of subscribed Upload Shares is returned.
		 * ### Further Information:
		 * None.
		 * ### Filtering
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `targetNodeId:eq:#`
		 * Get upload shares where `targetNodeId` equals `#`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | **`uploadShareId`** | Upload Share ID filter | `eq` | Upload Share ID equals value. | `long value` |
		 * | **`targetNodeId`** | Target node ID filter | `eq` | Target node ID equals value. | `long value` |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort criteria are possible.
		 * Fields are connected via logical conjunction **AND**.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `uploadShareId:desc|targetNodeId:asc`
		 * Sort by `uploadShareId` descending **AND** `targetNodeId` ascending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | **`uploadShareId`** | Upload Share ID |
		 * | **`targetNodeId`** | Target node ID |
		 * </details>
		 * Get v4/user/subscriptions/upload_shares
		 * @param {string} filter Filter string
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} sort Sort string
		 * @return {SubscribedUploadShareList} OK
		 */
		ListUploadShareSubscriptions(filter: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined, sort: string | null | undefined): Observable<SubscribedUploadShareList> {
			return this.http.get<SubscribedUploadShareList>(this.baseUri + 'v4/user/subscriptions/upload_shares?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&limit=' + limit + '&offset=' + offset + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Subscribe or Unsubscribe a List of Upload Shares for notifications
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
		 * ### Description:
		 * Subscribe/Unsubscribe upload shares for notifications.
		 * ### Precondition:
		 * User with _"manage upload share"_ permissions on target node.
		 * ### Postcondition:
		 * Upload shares are subscribed or unsubscribed.
		 * Notifications for these upload shares will be triggered in the future.
		 * ### Further Information:
		 * Maximum number of subscriptions is 200.
		 * Put v4/user/subscriptions/upload_shares
		 * @return {void} 
		 */
		SubscribeUploadShares(requestBody: UpdateSubscriptionsBulkRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/user/subscriptions/upload_shares', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unsubscribe Upload Share from notifications
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
		 * ### Description:
		 * Unsubscribe Upload Share from notifications.
		 * ### Precondition:
		 * User with _"manage upload share"_ permissions on target node.
		 * ### Postcondition:
		 * Upload Share is unsubscribed.
		 * Notifications for this Upload Share are disabled.
		 * ### Further Information:
		 * None.
		 * Delete v4/user/subscriptions/upload_shares/{share_id}
		 * @param {string} share_id Share ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		UnsubscribeUploadShare(share_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/user/subscriptions/upload_shares/' + share_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Subscribe Upload Share for notifications
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
		 * ### Description:
		 * Subscribe Upload Share for notifications.
		 * ### Precondition:
		 * User with _"manage upload share"_ permissions on target node.
		 * ### Postcondition:
		 * Upload Share is subscribed.
		 * Notifications for this Upload Share will be triggered in the future.
		 * ### Further Information:
		 * None.
		 * Post v4/user/subscriptions/upload_shares/{share_id}
		 * @param {string} share_id Share ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		SubscribeUploadShare(share_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/user/subscriptions/upload_shares/' + share_id, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request users
		 * ### Description:
		 * Returns a list of DRACOON users.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
		 * ### Postcondition:
		 * List of users is returned.
		 * ### Further Information:
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Except for `login`, `firstName` and  `lastName` - these are connected via logical disjunction (**OR**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `login:cn:searchString_1|firstName:cn:searchString_2|lockStatus:eq:2`
		 * Filter users by login contains `searchString_1` **OR** firstName contains `searchString_2` **AND** those who are **NOT** locked.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR`  | Operator Description | `VALUE`                                                                                                                                                                                                                                                                                                                                                                                              |
		 * | :--- | :--- |:------------| :--- |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
		 * | `email` | Email filter | `eq`, `cn`  | Email contains value. | `search String`                                                                                                                                                                                                                                                                                                                                                                                      |
		 * | `userName` | User name filter | `eq`, `cn`  | UserName contains value. | `search String`                                                                                                                                                                                                                                                                                                                                                                                      |
		 * | `firstName` | User first name filter | `cn`        | User first name contains value. | `search String`                                                                                                                                                                                                                                                                                                                                                                                      |
		 * | `lastName` | User last name filter | `cn`        | User last name contains value. | `search String`                                                                                                                                                                                                                                                                                                                                                                                      |
		 * | `isLocked` | User lock status filter | `eq`        |  | `true or false`                                                                                                                                                                                                                                                                                                                                                                                      |
		 * | `effectiveRoles` | Filter users with DIRECT or DIRECT **AND** EFFECTIVE roles<ul><li>`false`: DIRECT roles</li><li>`true`: DIRECT **AND** EFFECTIVE roles</li></ul>DIRECT means: e.g. user gets role **directly** granted from someone with _grant permission_ right.<br>EFFECTIVE means: e.g. user gets role through **group membership**. | `eq`        |  | `true or false`<br>default: `false`                                                                                                                                                                                                                                                                                                                                                                  |
		 * | `createdAt` | Creation date filter | `ge, le`    | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)`                                                                                                                                                                                                                                                                                                                                                                                  |
		 * | `phone` | Phone filter | `eq`        | Phone equals value. | `search String`                                                                                                                                                                                                                                                                                                                                                                                      |
		 * | `isEncryptionEnabled` | Encryption status filter<ul><li>client-side encryption</li><li>private key possession</li></ul> | `eq`        |  | `true or false`                                                                                                                                                                                                                                                                                                                                                                                      |
		 * | `hasRole` | User role filter<br>Depends on **effectiveRoles**.<br>For more Roles information please call `GET /roles API` | `eq`, `neq` | User role  equals value. | <ul><li>`CONFIG_MANAGER` - Manage global configs</li><li>`USER_MANAGER` - Manage Users</li><li>`GROUP_MANAGER` - Manage User-Groups</li><li>`ROOM_MANAGER` - Manage top level Data Rooms</li><li>`LOG_AUDITOR` - Read logs</li><li>`NONMEMBER_VIEWER` - View users and groups when having room manage permission</li><li>`USER` - Regular User role</li><li>`GUEST_USER` - Guest User role</li></ul> |
		 * </details>
		 * ### Deprecated filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | <del>`lockStatus`</del> | User lock status filter | `eq` | User lock status equals value. | <ul><li>`0` - Locked</li><li>`1` - Web access allowed</li><li>`2` - Web and mobile access allowed</li></ul> |
		 * | <del>`login`</del> | User login filter | `cn` | User login contains value. | `search String` |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort fields are supported.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `firstName:asc|lastLoginSuccessAt:desc`
		 * Sort by `firstName` ascending **AND** by `lastLoginSuccessAt` descending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `userName` | User name |
		 * | `email` | User email |
		 * | `firstName` | User first name |
		 * | `lastName` | User last name |
		 * | `isLocked` | User lock status |
		 * | `lastLoginSuccessAt` | Last successful login date |
		 * | `expireAt` | Expiration date |
		 * | `createdAt` | Creation date |
		 * </details>
		 * ### Deprecated sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | <del>`gender`</del> | Gender |
		 * | <del>`lockStatus`</del> | User lock status |
		 * | <del>`login`</del> | User login |
		 * </details>
		 * Get v4/users
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @param {boolean} include_attributes Include custom user attributes.
		 * @param {boolean} include_roles Include roles
		 * @param {boolean} include_manageable_rooms Include hasManageableRooms (deprecated)
		 * @return {UserList} OK
		 */
		RequestUsers(offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined, sort: string | null | undefined, include_attributes: boolean | null | undefined, include_roles: boolean | null | undefined, include_manageable_rooms: boolean | null | undefined): Observable<UserList> {
			return this.http.get<UserList>(this.baseUri + 'v4/users?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&include_attributes=' + include_attributes + '&include_roles=' + include_roles + '&include_manageable_rooms=' + include_manageable_rooms, {});
		}

		/**
		 * Create new user
		 * ### Description:
		 * Create a new user.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
		 * ### Postcondition:
		 * New user is created.
		 * ### Further Information:
		 * * If a user should **NOT** expire, leave `expireAt` empty.
		 * * All input fields are limited to **150** characters
		 * * Forbidden characters in first or last name: [`<`, `>`]
		 * * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
		 * ### Authentication Method Options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Authentication Method | Option Key | Option Value |
		 * | :--- | :--- | :--- |
		 * | `basic` / `sql` | `username` | Unique user identifier |
		 * | `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
		 * |  | `username` | Active Directory username according to authentication setting `userFilter` |
		 * | `radius` | `username` | RADIUS username |
		 * | `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
		 * |  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |
		 * </details>
		 * Post v4/users
		 * @return {void} 
		 */
		CreateUser(requestBody: CreateUserRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove user
		 * ### Description:
		 * Delete a user.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; delete users</span> required.
		 * ### Postcondition:
		 * User is deleted.
		 * ### Further Information:
		 * User **CANNOT** be deleted if he is a last room administrator of any room.
		 * Delete v4/users/{user_id}
		 * @param {string} user_id User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		RemoveUser(user_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/users/' + user_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Request user
		 * ### Description:
		 * Retrieve detailed information about a single user.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
		 * ### Postcondition:
		 * User information is returned.
		 * ### Further Information:
		 * None.
		 * ### Authentication Method Options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Authentication Method | Option Key | Option Value |
		 * | :--- | :--- | :--- |
		 * | `basic` / `sql` | `username` | Unique user identifier |
		 * | `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
		 * |  | `username` | Active Directory username according to authentication setting `userFilter` |
		 * | `radius` | `username` | RADIUS username |
		 * | `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
		 * |  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |
		 * </details>
		 * Get v4/users/{user_id}
		 * @param {string} user_id User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {boolean} effective_roles Filter users with DIRECT or DIRECT **AND** EFFECTIVE roles.
		 * * `false`: DIRECT roles
		 * * `true`: DIRECT **AND** EFFECTIVE roles
		 * DIRECT means: e.g. user gets role **directly** granted from someone with _grant permission_ right.
		 * EFFECTIVE means: e.g. user gets role through **group membership**.
		 * @return {UserData} OK
		 */
		RequestUser(user_id: string, effective_roles: boolean | null | undefined): Observable<UserData> {
			return this.http.get<UserData>(this.baseUri + 'v4/users/' + user_id + '?effective_roles=' + effective_roles, {});
		}

		/**
		 * Update user's metadata
		 * ### Description:
		 * Update user's metadata.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
		 * ### Postcondition:
		 * User's metadata is updated.
		 * ### Further Information:
		 * * If a user should **NOT** expire, leave `expireAt` empty.
		 * * All input fields are limited to **150** characters
		 * * **All** characters are allowed.
		 * ### Authentication Method Options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | Authentication Method | Option Key | Option Value |
		 * | :--- | :--- | :--- |
		 * | `basic` / `sql` | `username` | Unique user identifier |
		 * | `active_directory` | `ad_config_id` (optional) | Active Directory configuration ID |
		 * |  | `username` | Active Directory username according to authentication setting `userFilter` |
		 * | `radius` | `username` | RADIUS username |
		 * | `openid` | `openid_config_id` (optional) | OpenID Connect configuration ID |
		 * |  | `username` | OpenID Connect username according to authentication setting `mappingClaim` |
		 * </details>
		 * Put v4/users/{user_id}
		 * @param {string} user_id User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {UserData} OK
		 */
		UpdateUser(user_id: string, requestBody: UpdateUserRequest): Observable<UserData> {
			return this.http.put<UserData>(this.baseUri + 'v4/users/' + user_id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Request groups that user is a member of or / and can become a member
		 * ### Description:
		 * Retrieves a list of groups a user is member of and / or can become a member.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
		 * ### Postcondition:
		 * List of groups is returned.
		 * ### Further Information:
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `isMember:eq:false|name:cn:searchString`
		 * Get all groups that the user is **NOT** member of **AND** whose name is like `searchString`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `name` | Group name filter | `cn` | Group name contains value. | `search String` |
		 * | `isMember` | Filter the groups which the user is (not) member of | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
		 * </details>
		 * Get v4/users/{user_id}/groups
		 * @param {string} user_id User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @return {UserGroupList} OK
		 */
		RequestUserGroups(user_id: string, offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined): Observable<UserGroupList> {
			return this.http.get<UserGroupList>(this.baseUri + 'v4/users/' + user_id + '/groups?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Request rooms where the user is last admin
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.10.0</h3>
		 * ### Description:
		 * Retrieve a list of all rooms where the user is last admin (except homeroom and its subordinary rooms).
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
		 * ### Postcondition:
		 * List of rooms is returned.
		 * ### Further Information:
		 * An empty list is returned if no rooms were found where the user is last admin.
		 * Get v4/users/{user_id}/last_admin_rooms
		 * @param {string} user_id User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {LastAdminUserRoomList} OK
		 */
		RequestLastAdminRoomsUsers(user_id: string): Observable<LastAdminUserRoomList> {
			return this.http.get<LastAdminUserRoomList>(this.baseUri + 'v4/users/' + user_id + '/last_admin_rooms', {});
		}

		/**
		 * Request emergency MFA code
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.37.0</h3>
		 * ### Description:
		 * Request emergency MFA code for a specific user.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
		 * ### Postcondition:
		 * Emergency MFA code is returned.
		 * ### Further Information:
		 * Emergency code can be used instead of standard MFA authentication to disable all MFA setups.
		 * Post v4/users/{user_id}/mfa/emergency_code
		 * @param {string} user_id Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {EmergencyMfaCodeResponse} OK
		 */
		RequestEmergencyMfaCode(user_id: string): Observable<EmergencyMfaCodeResponse> {
			return this.http.post<EmergencyMfaCodeResponse>(this.baseUri + 'v4/users/' + user_id + '/mfa/emergency_code', null, {});
		}

		/**
		 * Request user's granted roles
		 * ### Description:
		 * Retrieve a list of all roles granted to a user.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
		 * ### Postcondition:
		 * List of granted roles is returned.
		 * ### Further Information:
		 * None.
		 * Get v4/users/{user_id}/roles
		 * @param {string} user_id User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {RoleList} OK
		 */
		RequestUserRoles(user_id: string): Observable<RoleList> {
			return this.http.get<RoleList>(this.baseUri + 'v4/users/' + user_id + '/roles', {});
		}

		/**
		 * Request rooms granted to the user or / and rooms that can be granted
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.10.0</h3>
		 * ### Description:
		 * Retrieves a list of rooms granted to the user and / or that can be granted.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read users</span> required.
		 * ### Postcondition:
		 * List of rooms is returned.
		 * ### Further Information:
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `isGranted:eq:true|isLastAdmin:eq:true|name:cn:searchString`
		 * Get all rooms that the user is granted **AND** is last admin **AND** whose name is like `searchString`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `name` | Room name filter | `cn` | Room name contains value. | `search String` |
		 * | `isGranted` | Filter the rooms which the user is (not) granted. | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `true` |
		 * | `isLastAdmin` | Filter the rooms which the user is last room administrator.<br>Only in connection with `isGranted:eq:true` filter possible. | `eq` |  | `true` |
		 * | `effectivePerm` | Filter rooms with DIRECT or DIRECT **AND** EFFECTIVE permissions<ul><li>`false`: DIRECT permissions</li><li>`true`: DIRECT **AND** EFFECTIVE permissions</li><li>`any`: DIRECT **AND** EFFECTIVE **AND** OVER GROUP permissions</li></ul>DIRECT means: e.g. room administrator grants `read` permissions to group of users **directly** on desired room.<br>EFFECTIVE means: e.g. group of users gets `read` permissions on desired room through **inheritance**.<br>OVER GROUP means: e.g. user gets `read` permissions on desired room through **group membership**. | `eq` |  | <ul><li>`true`</li><li>`false`</li><li>`any`</li></ul>default: `false` |
		 * </details>
		 * Get v4/users/{user_id}/rooms
		 * @param {string} user_id User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @return {RoomTreeDataList} OK
		 */
		RequestUsersRooms(user_id: string, offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined): Observable<RoomTreeDataList> {
			return this.http.get<RoomTreeDataList>(this.baseUri + 'v4/users/' + user_id + '/rooms?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Request custom user attributes
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.12.0</h3>
		 * ### Description:
		 * Retrieve a list of user attributes.
		 * ### Precondition:
		 * None.
		 * ### Postcondition:
		 * List of attributes is returned.
		 * ### Further Information:
		 * ### Filtering:
		 * All filter fields are connected via logical conjunction (**AND**)
		 * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `key:cn:searchString_1|value:cn:searchString_2`
		 * Filter by attribute key contains `searchString_1` **AND** attribute value contains `searchString_2`.
		 * </details>
		 * ### Filtering options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
		 * | :--- | :--- | :--- | :--- | :--- |
		 * | `key` | User attribute key filter | `cn, eq, sw` | Attribute key contains / equals / starts with value. | `search String` |
		 * | `value` | User attribute value filter | `cn, eq, sw` | Attribute value contains / equals / starts with value. | `search String` |
		 * </details>
		 * ---
		 * ### Sorting:
		 * Sort string syntax: `FIELD_NAME:ORDER`
		 * `ORDER` can be `asc` or `desc`.
		 * Multiple sort fields are supported.
		 * <details style="padding-left: 10px">
		 * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
		 * `key:asc|value:desc`
		 * Sort by `key` ascending **AND** by `value` descending.
		 * </details>
		 * ### Sorting options:
		 * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
		 * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
		 * | `FIELD_NAME` | Description |
		 * | :--- | :--- |
		 * | `key` | User attribute key |
		 * | `value` | User attribute value |
		 * </details>
		 * Get v4/users/{user_id}/userAttributes
		 * @param {string} user_id User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {number} offset Range offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Range limit.
		 * Maximum 500.
		 *  For more results please use paging (`offset` + `limit`).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter Filter string
		 * @param {string} sort Sort string
		 * @return {AttributesResponse} OK
		 */
		RequestUserAttributes(user_id: string, offset: number | null | undefined, limit: number | null | undefined, filter: string | null | undefined, sort: string | null | undefined): Observable<AttributesResponse> {
			return this.http.get<AttributesResponse>(this.baseUri + 'v4/users/' + user_id + '/userAttributes?offset=' + offset + '&limit=' + limit + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Set custom user attributes
		 * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.28.0</h3>
		 * ### Description:
		 * Set custom user attributes.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
		 * ### Postcondition:
		 * Custom user attributes are set.
		 * ### Further Information:
		 * Batch function.
		 * All existing user attributes will be deleted.
		 * * Allowed characters for keys are: `[a-zA-Z0-9_-]`
		 * * Characters are **case-insensitive**.
		 * Post v4/users/{user_id}/userAttributes
		 * @param {string} user_id User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} 
		 */
		SetUserAttributes(user_id: string, requestBody: UserAttributes): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/users/' + user_id + '/userAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add or edit custom user attributes
		 * ### Description:
		 * Add or edit custom user attributes.
		 * <br/><br/><span style="font-weight: bold; color: red;"> &#128679; **Warning: Please note that the response with HTTP status code 200 (OK) is deprecated and will be replaced with HTTP status code 204 (No content)!**</span><br/>
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
		 * ### Postcondition:
		 * Custom user attributes gets added or edited.
		 * ### Further Information:
		 * Batch function.
		 * If an entry exists before, it will be overwritten.
		 * * Allowed characters for keys are: `[a-zA-Z0-9_-]`
		 * * Characters are **case-insensitive**.
		 * Put v4/users/{user_id}/userAttributes
		 * @param {string} user_id User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {UserData} OK **(DEPRECATED: WILL BE REPLACED BY 204: "No content")**
		 */
		UpdateUserAttributes(user_id: string, requestBody: UserAttributes): Observable<UserData> {
			return this.http.put<UserData>(this.baseUri + 'v4/users/' + user_id + '/userAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove custom user attribute
		 * ### Description:
		 * Delete custom user attribute.
		 * ### Precondition:
		 * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change users</span> required.
		 * ### Postcondition:
		 * Custom user attribute is deleted.
		 * ### Further Information:
		 * * Allowed characters for keys are: `[a-zA-Z0-9_-]`
		 * * Characters are **case-insensitive**.
		 * Delete v4/users/{user_id}/userAttributes/{key}
		 * @param {string} user_id User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} key Key
		 * @return {void} No Content
		 */
		RemoveUserAttribute(user_id: string, key: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/users/' + user_id + '/userAttributes/' + (key == null ? '' : encodeURIComponent(key)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum RequestAuditNodeUserDataX_Sds_Date_Format { UTC = 'UTC', LOCAL = 'LOCAL', OFFSET = 'OFFSET', EPOCH = 'EPOCH', LEET = 'LEET' }

	export enum RequestMissingFileKeysUse_key { room_rescue_key = 'room_rescue_key', system_rescue_key = 'system_rescue_key', previous_user_key = 'previous_user_key', previous_room_rescue_key = 'previous_room_rescue_key', previous_system_rescue_key = 'previous_system_rescue_key' }

	export enum RequestPasswordPoliciesForPasswordTypePassword_type { login = 'login', encryption = 'encryption', shares = 'shares' }

}
