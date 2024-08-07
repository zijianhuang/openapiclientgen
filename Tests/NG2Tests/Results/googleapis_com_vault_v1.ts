import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Accounts to search */
	export interface AccountInfo {

		/** A set of accounts to search. */
		emails?: Array<string>;
	}

	/** Accounts to search */
	export interface AccountInfoFormProperties {
	}
	export function CreateAccountInfoFormGroup() {
		return new FormGroup<AccountInfoFormProperties>({
		});

	}


	/**
	 * A status detailing the status of each account creation, and the
	 * HeldAccount, if successful.
	 */
	export interface AddHeldAccountResult {

		/**
		 * An account being held in a particular hold. This structure is immutable.
		 * This can be either a single user or a google group, depending on the corpus.
		 */
		account?: HeldAccount;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		status?: Status;
	}

	/**
	 * A status detailing the status of each account creation, and the
	 * HeldAccount, if successful.
	 */
	export interface AddHeldAccountResultFormProperties {
	}
	export function CreateAddHeldAccountResultFormGroup() {
		return new FormGroup<AddHeldAccountResultFormProperties>({
		});

	}


	/**
	 * An account being held in a particular hold. This structure is immutable.
	 * This can be either a single user or a google group, depending on the corpus.
	 */
	export interface HeldAccount {

		/**
		 * The account's ID as provided by the
		 * <a href="https://developers.google.com/admin-sdk/">Admin SDK</a>.
		 */
		accountId?: string | null;

		/**
		 * The primary email address of the account. If used as an input, this takes
		 * precedence over account ID.
		 */
		email?: string | null;

		/** Output only. The first name of the account holder. */
		firstName?: string | null;

		/** Output only. When the account was put on hold. */
		holdTime?: string | null;

		/** Output only. The last name of the account holder. */
		lastName?: string | null;
	}

	/**
	 * An account being held in a particular hold. This structure is immutable.
	 * This can be either a single user or a google group, depending on the corpus.
	 */
	export interface HeldAccountFormProperties {

		/**
		 * The account's ID as provided by the
		 * <a href="https://developers.google.com/admin-sdk/">Admin SDK</a>.
		 */
		accountId: FormControl<string | null | undefined>,

		/**
		 * The primary email address of the account. If used as an input, this takes
		 * precedence over account ID.
		 */
		email: FormControl<string | null | undefined>,

		/** Output only. The first name of the account holder. */
		firstName: FormControl<string | null | undefined>,

		/** Output only. When the account was put on hold. */
		holdTime: FormControl<string | null | undefined>,

		/** Output only. The last name of the account holder. */
		lastName: FormControl<string | null | undefined>,
	}
	export function CreateHeldAccountFormGroup() {
		return new FormGroup<HeldAccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			holdTime: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}

	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Add a list of accounts to a hold. */
	export interface AddHeldAccountsRequest {

		/**
		 * Account ids to identify which accounts to add. Only account_ids or only
		 * emails should be specified, but not both.
		 */
		accountIds?: Array<string>;

		/**
		 * Emails to identify which accounts to add. Only emails or only account_ids
		 * should be specified, but not both.
		 */
		emails?: Array<string>;
	}

	/** Add a list of accounts to a hold. */
	export interface AddHeldAccountsRequestFormProperties {
	}
	export function CreateAddHeldAccountsRequestFormGroup() {
		return new FormGroup<AddHeldAccountsRequestFormProperties>({
		});

	}


	/** Response for batch create held accounts. */
	export interface AddHeldAccountsResponse {

		/** The list of responses, in the same order as the batch request. */
		responses?: Array<AddHeldAccountResult>;
	}

	/** Response for batch create held accounts. */
	export interface AddHeldAccountsResponseFormProperties {
	}
	export function CreateAddHeldAccountsResponseFormGroup() {
		return new FormGroup<AddHeldAccountsResponseFormProperties>({
		});

	}


	/**
	 * Add an account with the permission specified. The role cannot be owner.
	 * If an account already has a role in the matter, it will be
	 * overwritten.
	 */
	export interface AddMatterPermissionsRequest {

		/**
		 * Only relevant if send_emails is true.
		 * True to CC requestor in the email message.
		 * False to not CC requestor.
		 */
		ccMe?: boolean | null;

		/**
		 * Currently each matter only has one owner, and all others are collaborators.
		 * When an account is purged, its corresponding MatterPermission resources
		 * cease to exist.
		 */
		matterPermission?: MatterPermission;

		/**
		 * True to send notification email to the added account.
		 * False to not send notification email.
		 */
		sendEmails?: boolean | null;
	}

	/**
	 * Add an account with the permission specified. The role cannot be owner.
	 * If an account already has a role in the matter, it will be
	 * overwritten.
	 */
	export interface AddMatterPermissionsRequestFormProperties {

		/**
		 * Only relevant if send_emails is true.
		 * True to CC requestor in the email message.
		 * False to not CC requestor.
		 */
		ccMe: FormControl<boolean | null | undefined>,

		/**
		 * True to send notification email to the added account.
		 * False to not send notification email.
		 */
		sendEmails: FormControl<boolean | null | undefined>,
	}
	export function CreateAddMatterPermissionsRequestFormGroup() {
		return new FormGroup<AddMatterPermissionsRequestFormProperties>({
			ccMe: new FormControl<boolean | null | undefined>(undefined),
			sendEmails: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 * Currently each matter only has one owner, and all others are collaborators.
	 * When an account is purged, its corresponding MatterPermission resources
	 * cease to exist.
	 */
	export interface MatterPermission {

		/**
		 * The account id, as provided by <a
		 * href="https://developers.google.com/admin-sdk/">Admin SDK</a>.
		 */
		accountId?: string | null;

		/** The user's role in this matter. */
		role?: MatterPermissionRole | null;
	}

	/**
	 * Currently each matter only has one owner, and all others are collaborators.
	 * When an account is purged, its corresponding MatterPermission resources
	 * cease to exist.
	 */
	export interface MatterPermissionFormProperties {

		/**
		 * The account id, as provided by <a
		 * href="https://developers.google.com/admin-sdk/">Admin SDK</a>.
		 */
		accountId: FormControl<string | null | undefined>,

		/** The user's role in this matter. */
		role: FormControl<MatterPermissionRole | null | undefined>,
	}
	export function CreateMatterPermissionFormGroup() {
		return new FormGroup<MatterPermissionFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<MatterPermissionRole | null | undefined>(undefined),
		});

	}

	export enum MatterPermissionRole { ROLE_UNSPECIFIED = 0, COLLABORATOR = 1, OWNER = 2 }


	/** Close a matter by ID. */
	export interface CloseMatterRequest {
	}

	/** Close a matter by ID. */
	export interface CloseMatterRequestFormProperties {
	}
	export function CreateCloseMatterRequestFormGroup() {
		return new FormGroup<CloseMatterRequestFormProperties>({
		});

	}


	/** Response to a CloseMatterRequest. */
	export interface CloseMatterResponse {

		/** Represents a matter. */
		matter?: Matter;
	}

	/** Response to a CloseMatterRequest. */
	export interface CloseMatterResponseFormProperties {
	}
	export function CreateCloseMatterResponseFormGroup() {
		return new FormGroup<CloseMatterResponseFormProperties>({
		});

	}


	/** Represents a matter. */
	export interface Matter {

		/** The description of the matter. */
		description?: string | null;

		/**
		 * The matter ID which is generated by the server.
		 * Should be blank when creating a new matter.
		 */
		matterId?: string | null;

		/**
		 * List of users and access to the matter. Currently there is no programmer
		 * defined limit on the number of permissions a matter can have.
		 */
		matterPermissions?: Array<MatterPermission>;

		/** The name of the matter. */
		name?: string | null;

		/** The state of the matter. */
		state?: MatterState | null;
	}

	/** Represents a matter. */
	export interface MatterFormProperties {

		/** The description of the matter. */
		description: FormControl<string | null | undefined>,

		/**
		 * The matter ID which is generated by the server.
		 * Should be blank when creating a new matter.
		 */
		matterId: FormControl<string | null | undefined>,

		/** The name of the matter. */
		name: FormControl<string | null | undefined>,

		/** The state of the matter. */
		state: FormControl<MatterState | null | undefined>,
	}
	export function CreateMatterFormGroup() {
		return new FormGroup<MatterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			matterId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<MatterState | null | undefined>(undefined),
		});

	}

	export enum MatterState { STATE_UNSPECIFIED = 0, OPEN = 1, CLOSED = 2, DELETED = 3 }


	/** An export file on cloud storage */
	export interface CloudStorageFile {

		/**
		 * The cloud storage bucket name of this export file.
		 * Can be used in cloud storage JSON/XML API.
		 */
		bucketName?: string | null;

		/** The md5 hash of the file. */
		md5Hash?: string | null;

		/**
		 * The cloud storage object name of this export file.
		 * Can be used in cloud storage JSON/XML API.
		 */
		objectName?: string | null;

		/** The size of the export file. */
		size?: string | null;
	}

	/** An export file on cloud storage */
	export interface CloudStorageFileFormProperties {

		/**
		 * The cloud storage bucket name of this export file.
		 * Can be used in cloud storage JSON/XML API.
		 */
		bucketName: FormControl<string | null | undefined>,

		/** The md5 hash of the file. */
		md5Hash: FormControl<string | null | undefined>,

		/**
		 * The cloud storage object name of this export file.
		 * Can be used in cloud storage JSON/XML API.
		 */
		objectName: FormControl<string | null | undefined>,

		/** The size of the export file. */
		size: FormControl<string | null | undefined>,
	}
	export function CreateCloudStorageFileFormGroup() {
		return new FormGroup<CloudStorageFileFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			md5Hash: new FormControl<string | null | undefined>(undefined),
			objectName: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Export sink for cloud storage files. */
	export interface CloudStorageSink {

		/** Output only. The exported files on cloud storage. */
		files?: Array<CloudStorageFile>;
	}

	/** Export sink for cloud storage files. */
	export interface CloudStorageSinkFormProperties {
	}
	export function CreateCloudStorageSinkFormGroup() {
		return new FormGroup<CloudStorageSinkFormProperties>({
		});

	}


	/** Corpus specific queries. */
	export interface CorpusQuery {

		/** Query options for Drive holds. */
		driveQuery?: HeldDriveQuery;

		/** Query options for group holds. */
		groupsQuery?: HeldGroupsQuery;

		/** Query options for hangouts chat holds. */
		hangoutsChatQuery?: HeldHangoutsChatQuery;

		/** Query options for mail holds. */
		mailQuery?: HeldMailQuery;
	}

	/** Corpus specific queries. */
	export interface CorpusQueryFormProperties {
	}
	export function CreateCorpusQueryFormGroup() {
		return new FormGroup<CorpusQueryFormProperties>({
		});

	}


	/** Query options for Drive holds. */
	export interface HeldDriveQuery {

		/** If true, include files in shared drives in the hold. */
		includeSharedDriveFiles?: boolean | null;

		/** If true, include files in Team Drives in the hold. */
		includeTeamDriveFiles?: boolean | null;
	}

	/** Query options for Drive holds. */
	export interface HeldDriveQueryFormProperties {

		/** If true, include files in shared drives in the hold. */
		includeSharedDriveFiles: FormControl<boolean | null | undefined>,

		/** If true, include files in Team Drives in the hold. */
		includeTeamDriveFiles: FormControl<boolean | null | undefined>,
	}
	export function CreateHeldDriveQueryFormGroup() {
		return new FormGroup<HeldDriveQueryFormProperties>({
			includeSharedDriveFiles: new FormControl<boolean | null | undefined>(undefined),
			includeTeamDriveFiles: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Query options for group holds. */
	export interface HeldGroupsQuery {

		/**
		 * The end time range for the search query. These timestamps are in GMT and
		 * rounded down to the start of the given date.
		 */
		endTime?: string | null;

		/**
		 * The start time range for the search query. These timestamps are in GMT and
		 * rounded down to the start of the given date.
		 */
		startTime?: string | null;

		/** The search terms for the hold. */
		terms?: string | null;
	}

	/** Query options for group holds. */
	export interface HeldGroupsQueryFormProperties {

		/**
		 * The end time range for the search query. These timestamps are in GMT and
		 * rounded down to the start of the given date.
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * The start time range for the search query. These timestamps are in GMT and
		 * rounded down to the start of the given date.
		 */
		startTime: FormControl<string | null | undefined>,

		/** The search terms for the hold. */
		terms: FormControl<string | null | undefined>,
	}
	export function CreateHeldGroupsQueryFormGroup() {
		return new FormGroup<HeldGroupsQueryFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			terms: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Query options for hangouts chat holds. */
	export interface HeldHangoutsChatQuery {

		/** If true, include rooms the user has participated in. */
		includeRooms?: boolean | null;
	}

	/** Query options for hangouts chat holds. */
	export interface HeldHangoutsChatQueryFormProperties {

		/** If true, include rooms the user has participated in. */
		includeRooms: FormControl<boolean | null | undefined>,
	}
	export function CreateHeldHangoutsChatQueryFormGroup() {
		return new FormGroup<HeldHangoutsChatQueryFormProperties>({
			includeRooms: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Query options for mail holds. */
	export interface HeldMailQuery {

		/**
		 * The end time range for the search query. These timestamps are in GMT and
		 * rounded down to the start of the given date.
		 */
		endTime?: string | null;

		/**
		 * The start time range for the search query. These timestamps are in GMT and
		 * rounded down to the start of the given date.
		 */
		startTime?: string | null;

		/** The search terms for the hold. */
		terms?: string | null;
	}

	/** Query options for mail holds. */
	export interface HeldMailQueryFormProperties {

		/**
		 * The end time range for the search query. These timestamps are in GMT and
		 * rounded down to the start of the given date.
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * The start time range for the search query. These timestamps are in GMT and
		 * rounded down to the start of the given date.
		 */
		startTime: FormControl<string | null | undefined>,

		/** The search terms for the hold. */
		terms: FormControl<string | null | undefined>,
	}
	export function CreateHeldMailQueryFormGroup() {
		return new FormGroup<HeldMailQueryFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			terms: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The options for Drive export. */
	export interface DriveExportOptions {

		/**
		 * Set to true to include access level information for users
		 * with <a
		 * href="https://support.google.com/vault/answer/6099459#metadata">indirect
		 * access</a> to files.
		 */
		includeAccessInfo?: boolean | null;
	}

	/** The options for Drive export. */
	export interface DriveExportOptionsFormProperties {

		/**
		 * Set to true to include access level information for users
		 * with <a
		 * href="https://support.google.com/vault/answer/6099459#metadata">indirect
		 * access</a> to files.
		 */
		includeAccessInfo: FormControl<boolean | null | undefined>,
	}
	export function CreateDriveExportOptionsFormGroup() {
		return new FormGroup<DriveExportOptionsFormProperties>({
			includeAccessInfo: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Drive search advanced options */
	export interface DriveOptions {

		/** Set to true to include shared drive. */
		includeSharedDrives?: boolean | null;

		/** Set to true to include Team Drive. */
		includeTeamDrives?: boolean | null;

		/**
		 * Search the versions of the Drive file
		 * as of the reference date. These timestamps are in GMT and
		 * rounded down to the given date.
		 */
		versionDate?: string | null;
	}

	/** Drive search advanced options */
	export interface DriveOptionsFormProperties {

		/** Set to true to include shared drive. */
		includeSharedDrives: FormControl<boolean | null | undefined>,

		/** Set to true to include Team Drive. */
		includeTeamDrives: FormControl<boolean | null | undefined>,

		/**
		 * Search the versions of the Drive file
		 * as of the reference date. These timestamps are in GMT and
		 * rounded down to the given date.
		 */
		versionDate: FormControl<string | null | undefined>,
	}
	export function CreateDriveOptionsFormGroup() {
		return new FormGroup<DriveOptionsFormProperties>({
			includeSharedDrives: new FormControl<boolean | null | undefined>(undefined),
			includeTeamDrives: new FormControl<boolean | null | undefined>(undefined),
			versionDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}

	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** An export */
	export interface Export {

		/** Export sink for cloud storage files. */
		cloudStorageSink?: CloudStorageSink;

		/** Output only. The time when the export was created. */
		createTime?: string | null;

		/** Export advanced options */
		exportOptions?: ExportOptions;

		/** Output only. The generated export ID. */
		id?: string | null;

		/** Output only. The matter ID. */
		matterId?: string | null;

		/** The export name. */
		name?: string | null;

		/** A query definition relevant for search & export. */
		query?: Query;

		/** User's information. */
		requester?: UserInfo;

		/** Stats of an export. */
		stats?: ExportStats;

		/** Output only. The export status. */
		status?: ExportStatus | null;
	}

	/** An export */
	export interface ExportFormProperties {

		/** Output only. The time when the export was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The generated export ID. */
		id: FormControl<string | null | undefined>,

		/** Output only. The matter ID. */
		matterId: FormControl<string | null | undefined>,

		/** The export name. */
		name: FormControl<string | null | undefined>,

		/** Output only. The export status. */
		status: FormControl<ExportStatus | null | undefined>,
	}
	export function CreateExportFormGroup() {
		return new FormGroup<ExportFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			matterId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ExportStatus | null | undefined>(undefined),
		});

	}


	/** Export advanced options */
	export interface ExportOptions {

		/** The options for Drive export. */
		driveOptions?: DriveExportOptions;

		/** The options for groups export. */
		groupsOptions?: GroupsExportOptions;

		/** The options for hangouts chat export. */
		hangoutsChatOptions?: HangoutsChatExportOptions;

		/** The options for mail export. */
		mailOptions?: MailExportOptions;

		/** The requested export location. */
		region?: ExportOptionsRegion | null;
	}

	/** Export advanced options */
	export interface ExportOptionsFormProperties {

		/** The requested export location. */
		region: FormControl<ExportOptionsRegion | null | undefined>,
	}
	export function CreateExportOptionsFormGroup() {
		return new FormGroup<ExportOptionsFormProperties>({
			region: new FormControl<ExportOptionsRegion | null | undefined>(undefined),
		});

	}


	/** The options for groups export. */
	export interface GroupsExportOptions {

		/** The export format for groups export. */
		exportFormat?: GroupsExportOptionsExportFormat | null;
	}

	/** The options for groups export. */
	export interface GroupsExportOptionsFormProperties {

		/** The export format for groups export. */
		exportFormat: FormControl<GroupsExportOptionsExportFormat | null | undefined>,
	}
	export function CreateGroupsExportOptionsFormGroup() {
		return new FormGroup<GroupsExportOptionsFormProperties>({
			exportFormat: new FormControl<GroupsExportOptionsExportFormat | null | undefined>(undefined),
		});

	}

	export enum GroupsExportOptionsExportFormat { EXPORT_FORMAT_UNSPECIFIED = 0, MBOX = 1, PST = 2 }


	/** The options for hangouts chat export. */
	export interface HangoutsChatExportOptions {

		/** The export format for hangouts chat export. */
		exportFormat?: GroupsExportOptionsExportFormat | null;
	}

	/** The options for hangouts chat export. */
	export interface HangoutsChatExportOptionsFormProperties {

		/** The export format for hangouts chat export. */
		exportFormat: FormControl<GroupsExportOptionsExportFormat | null | undefined>,
	}
	export function CreateHangoutsChatExportOptionsFormGroup() {
		return new FormGroup<HangoutsChatExportOptionsFormProperties>({
			exportFormat: new FormControl<GroupsExportOptionsExportFormat | null | undefined>(undefined),
		});

	}


	/** The options for mail export. */
	export interface MailExportOptions {

		/** The export file format. */
		exportFormat?: GroupsExportOptionsExportFormat | null;

		/** Set to true to export confidential mode content. */
		showConfidentialModeContent?: boolean | null;
	}

	/** The options for mail export. */
	export interface MailExportOptionsFormProperties {

		/** The export file format. */
		exportFormat: FormControl<GroupsExportOptionsExportFormat | null | undefined>,

		/** Set to true to export confidential mode content. */
		showConfidentialModeContent: FormControl<boolean | null | undefined>,
	}
	export function CreateMailExportOptionsFormGroup() {
		return new FormGroup<MailExportOptionsFormProperties>({
			exportFormat: new FormControl<GroupsExportOptionsExportFormat | null | undefined>(undefined),
			showConfidentialModeContent: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ExportOptionsRegion { EXPORT_REGION_UNSPECIFIED = 0, ANY = 1, US = 2, EUROPE = 3 }


	/** A query definition relevant for search & export. */
	export interface Query {

		/** Accounts to search */
		accountInfo?: AccountInfo;

		/** The corpus to search. */
		corpus?: QueryCorpus | null;

		/** The data source to search from. */
		dataScope?: QueryDataScope | null;

		/** Drive search advanced options */
		driveOptions?: DriveOptions;

		/**
		 * The end time range for the search query. These timestamps are in GMT and
		 * rounded down to the start of the given date.
		 */
		endTime?: string | null;

		/** Accounts to search */
		hangoutsChatInfo?: HangoutsChatInfo;

		/** Hangouts chat search advanced options */
		hangoutsChatOptions?: HangoutsChatOptions;

		/** Mail search advanced options */
		mailOptions?: MailOptions;

		/**
		 * The search method to use. This field is similar to the search_method field
		 * but is introduced to support shared drives. It supports all
		 * search method types. In case the search_method is TEAM_DRIVE the response
		 * of this field will be SHARED_DRIVE only.
		 */
		method?: QueryMethod | null;

		/** Org Unit to search */
		orgUnitInfo?: OrgUnitInfo;

		/** The search method to use. */
		searchMethod?: QueryMethod | null;

		/** Shared drives to search */
		sharedDriveInfo?: SharedDriveInfo;

		/**
		 * The start time range for the search query. These timestamps are in GMT and
		 * rounded down to the start of the given date.
		 */
		startTime?: string | null;

		/** Team Drives to search */
		teamDriveInfo?: TeamDriveInfo;

		/**
		 * The corpus-specific
		 * <a href="https://support.google.com/vault/answer/2474474">search
		 * operators</a> used to generate search results.
		 */
		terms?: string | null;

		/**
		 * The time zone name.
		 * It should be an IANA TZ name, such as "America/Los_Angeles".
		 * For more information, see
		 * <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Time
		 * Zone</a>.
		 */
		timeZone?: string | null;
	}

	/** A query definition relevant for search & export. */
	export interface QueryFormProperties {

		/** The corpus to search. */
		corpus: FormControl<QueryCorpus | null | undefined>,

		/** The data source to search from. */
		dataScope: FormControl<QueryDataScope | null | undefined>,

		/**
		 * The end time range for the search query. These timestamps are in GMT and
		 * rounded down to the start of the given date.
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * The search method to use. This field is similar to the search_method field
		 * but is introduced to support shared drives. It supports all
		 * search method types. In case the search_method is TEAM_DRIVE the response
		 * of this field will be SHARED_DRIVE only.
		 */
		method: FormControl<QueryMethod | null | undefined>,

		/** The search method to use. */
		searchMethod: FormControl<QueryMethod | null | undefined>,

		/**
		 * The start time range for the search query. These timestamps are in GMT and
		 * rounded down to the start of the given date.
		 */
		startTime: FormControl<string | null | undefined>,

		/**
		 * The corpus-specific
		 * <a href="https://support.google.com/vault/answer/2474474">search
		 * operators</a> used to generate search results.
		 */
		terms: FormControl<string | null | undefined>,

		/**
		 * The time zone name.
		 * It should be an IANA TZ name, such as "America/Los_Angeles".
		 * For more information, see
		 * <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Time
		 * Zone</a>.
		 */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateQueryFormGroup() {
		return new FormGroup<QueryFormProperties>({
			corpus: new FormControl<QueryCorpus | null | undefined>(undefined),
			dataScope: new FormControl<QueryDataScope | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<QueryMethod | null | undefined>(undefined),
			searchMethod: new FormControl<QueryMethod | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			terms: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QueryCorpus { CORPUS_TYPE_UNSPECIFIED = 0, DRIVE = 1, MAIL = 2, GROUPS = 3, HANGOUTS_CHAT = 4 }

	export enum QueryDataScope { DATA_SCOPE_UNSPECIFIED = 0, ALL_DATA = 1, HELD_DATA = 2, UNPROCESSED_DATA = 3 }


	/** Accounts to search */
	export interface HangoutsChatInfo {

		/** A set of rooms to search. */
		roomId?: Array<string>;
	}

	/** Accounts to search */
	export interface HangoutsChatInfoFormProperties {
	}
	export function CreateHangoutsChatInfoFormGroup() {
		return new FormGroup<HangoutsChatInfoFormProperties>({
		});

	}


	/** Hangouts chat search advanced options */
	export interface HangoutsChatOptions {

		/** Set to true to include rooms. */
		includeRooms?: boolean | null;
	}

	/** Hangouts chat search advanced options */
	export interface HangoutsChatOptionsFormProperties {

		/** Set to true to include rooms. */
		includeRooms: FormControl<boolean | null | undefined>,
	}
	export function CreateHangoutsChatOptionsFormGroup() {
		return new FormGroup<HangoutsChatOptionsFormProperties>({
			includeRooms: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Mail search advanced options */
	export interface MailOptions {

		/** Set to true to exclude drafts. */
		excludeDrafts?: boolean | null;
	}

	/** Mail search advanced options */
	export interface MailOptionsFormProperties {

		/** Set to true to exclude drafts. */
		excludeDrafts: FormControl<boolean | null | undefined>,
	}
	export function CreateMailOptionsFormGroup() {
		return new FormGroup<MailOptionsFormProperties>({
			excludeDrafts: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum QueryMethod { SEARCH_METHOD_UNSPECIFIED = 0, ACCOUNT = 1, ORG_UNIT = 2, TEAM_DRIVE = 3, ENTIRE_ORG = 4, ROOM = 5, SHARED_DRIVE = 6 }


	/** Org Unit to search */
	export interface OrgUnitInfo {

		/**
		 * Org unit to search, as provided by the
		 * <a href="https://developers.google.com/admin-sdk/directory/">Admin SDK
		 * Directory API</a>.
		 */
		orgUnitId?: string | null;
	}

	/** Org Unit to search */
	export interface OrgUnitInfoFormProperties {

		/**
		 * Org unit to search, as provided by the
		 * <a href="https://developers.google.com/admin-sdk/directory/">Admin SDK
		 * Directory API</a>.
		 */
		orgUnitId: FormControl<string | null | undefined>,
	}
	export function CreateOrgUnitInfoFormGroup() {
		return new FormGroup<OrgUnitInfoFormProperties>({
			orgUnitId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Shared drives to search */
	export interface SharedDriveInfo {

		/**
		 * List of Shared drive ids, as provided by <a
		 * href="https://developers.google.com/drive">Drive API</a>.
		 */
		sharedDriveIds?: Array<string>;
	}

	/** Shared drives to search */
	export interface SharedDriveInfoFormProperties {
	}
	export function CreateSharedDriveInfoFormGroup() {
		return new FormGroup<SharedDriveInfoFormProperties>({
		});

	}


	/** Team Drives to search */
	export interface TeamDriveInfo {

		/**
		 * List of Team Drive ids, as provided by <a
		 * href="https://developers.google.com/drive">Drive API</a>.
		 */
		teamDriveIds?: Array<string>;
	}

	/** Team Drives to search */
	export interface TeamDriveInfoFormProperties {
	}
	export function CreateTeamDriveInfoFormGroup() {
		return new FormGroup<TeamDriveInfoFormProperties>({
		});

	}


	/** User's information. */
	export interface UserInfo {

		/** The displayed name of the user. */
		displayName?: string | null;

		/** The email address of the user. */
		email?: string | null;
	}

	/** User's information. */
	export interface UserInfoFormProperties {

		/** The displayed name of the user. */
		displayName: FormControl<string | null | undefined>,

		/** The email address of the user. */
		email: FormControl<string | null | undefined>,
	}
	export function CreateUserInfoFormGroup() {
		return new FormGroup<UserInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Stats of an export. */
	export interface ExportStats {

		/** The number of documents already processed by the export. */
		exportedArtifactCount?: string | null;

		/** The size of export in bytes. */
		sizeInBytes?: string | null;

		/** The number of documents to be exported. */
		totalArtifactCount?: string | null;
	}

	/** Stats of an export. */
	export interface ExportStatsFormProperties {

		/** The number of documents already processed by the export. */
		exportedArtifactCount: FormControl<string | null | undefined>,

		/** The size of export in bytes. */
		sizeInBytes: FormControl<string | null | undefined>,

		/** The number of documents to be exported. */
		totalArtifactCount: FormControl<string | null | undefined>,
	}
	export function CreateExportStatsFormGroup() {
		return new FormGroup<ExportStatsFormProperties>({
			exportedArtifactCount: new FormControl<string | null | undefined>(undefined),
			sizeInBytes: new FormControl<string | null | undefined>(undefined),
			totalArtifactCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExportStatus { EXPORT_STATUS_UNSPECIFIED = 0, COMPLETED = 1, FAILED = 2, IN_PROGRESS = 3 }


	/**
	 * A organizational unit being held in a particular hold.
	 * This structure is immutable.
	 */
	export interface HeldOrgUnit {

		/** When the org unit was put on hold. This property is immutable. */
		holdTime?: string | null;

		/** The org unit's immutable ID as provided by the Admin SDK. */
		orgUnitId?: string | null;
	}

	/**
	 * A organizational unit being held in a particular hold.
	 * This structure is immutable.
	 */
	export interface HeldOrgUnitFormProperties {

		/** When the org unit was put on hold. This property is immutable. */
		holdTime: FormControl<string | null | undefined>,

		/** The org unit's immutable ID as provided by the Admin SDK. */
		orgUnitId: FormControl<string | null | undefined>,
	}
	export function CreateHeldOrgUnitFormGroup() {
		return new FormGroup<HeldOrgUnitFormProperties>({
			holdTime: new FormControl<string | null | undefined>(undefined),
			orgUnitId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Represents a hold within Vault. A hold restricts purging of
	 * artifacts based on the combination of the query and accounts restrictions.
	 * A hold can be configured to either apply to an explicitly configured set
	 * of accounts, or can be applied to all members of an organizational unit.
	 */
	export interface Hold {

		/**
		 * If set, the hold applies to the enumerated accounts and org_unit must be
		 * empty.
		 */
		accounts?: Array<HeldAccount>;

		/** The corpus to be searched. */
		corpus?: QueryCorpus | null;

		/** The unique immutable ID of the hold. Assigned during creation. */
		holdId?: string | null;

		/** The name of the hold. */
		name?: string | null;

		/**
		 * A organizational unit being held in a particular hold.
		 * This structure is immutable.
		 */
		orgUnit?: HeldOrgUnit;

		/** Corpus specific queries. */
		query?: CorpusQuery;

		/** The last time this hold was modified. */
		updateTime?: string | null;
	}

	/**
	 * Represents a hold within Vault. A hold restricts purging of
	 * artifacts based on the combination of the query and accounts restrictions.
	 * A hold can be configured to either apply to an explicitly configured set
	 * of accounts, or can be applied to all members of an organizational unit.
	 */
	export interface HoldFormProperties {

		/** The corpus to be searched. */
		corpus: FormControl<QueryCorpus | null | undefined>,

		/** The unique immutable ID of the hold. Assigned during creation. */
		holdId: FormControl<string | null | undefined>,

		/** The name of the hold. */
		name: FormControl<string | null | undefined>,

		/** The last time this hold was modified. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateHoldFormGroup() {
		return new FormGroup<HoldFormProperties>({
			corpus: new FormControl<QueryCorpus | null | undefined>(undefined),
			holdId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The holds for a matter. */
	export interface ListExportsResponse {

		/** The list of exports. */
		exports?: Array<Export>;

		/** Page token to retrieve the next page of results in the list. */
		nextPageToken?: string | null;
	}

	/** The holds for a matter. */
	export interface ListExportsResponseFormProperties {

		/** Page token to retrieve the next page of results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListExportsResponseFormGroup() {
		return new FormGroup<ListExportsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns a list of held accounts for a hold. */
	export interface ListHeldAccountsResponse {

		/** The held accounts on a hold. */
		accounts?: Array<HeldAccount>;
	}

	/** Returns a list of held accounts for a hold. */
	export interface ListHeldAccountsResponseFormProperties {
	}
	export function CreateListHeldAccountsResponseFormGroup() {
		return new FormGroup<ListHeldAccountsResponseFormProperties>({
		});

	}


	/** The holds for a matter. */
	export interface ListHoldsResponse {

		/** The list of holds. */
		holds?: Array<Hold>;

		/**
		 * Page token to retrieve the next page of results in the list.
		 * If this is empty, then there are no more holds to list.
		 */
		nextPageToken?: string | null;
	}

	/** The holds for a matter. */
	export interface ListHoldsResponseFormProperties {

		/**
		 * Page token to retrieve the next page of results in the list.
		 * If this is empty, then there are no more holds to list.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListHoldsResponseFormGroup() {
		return new FormGroup<ListHoldsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the list of matters. */
	export interface ListMattersResponse {

		/** List of matters. */
		matters?: Array<Matter>;

		/** Page token to retrieve the next page of results in the list. */
		nextPageToken?: string | null;
	}

	/** Provides the list of matters. */
	export interface ListMattersResponseFormProperties {

		/** Page token to retrieve the next page of results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMattersResponseFormGroup() {
		return new FormGroup<ListMattersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the response for method ListSaveQuery. */
	export interface ListSavedQueriesResponse {

		/**
		 * Page token to retrieve the next page of results in the list.
		 * If this is empty, then there are no more saved queries to list.
		 */
		nextPageToken?: string | null;

		/** List of output saved queries. */
		savedQueries?: Array<SavedQuery>;
	}

	/** Definition of the response for method ListSaveQuery. */
	export interface ListSavedQueriesResponseFormProperties {

		/**
		 * Page token to retrieve the next page of results in the list.
		 * If this is empty, then there are no more saved queries to list.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSavedQueriesResponseFormGroup() {
		return new FormGroup<ListSavedQueriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of the saved query. */
	export interface SavedQuery {

		/**
		 * Output only. The server generated timestamp at which saved query was
		 * created.
		 */
		createTime?: string | null;

		/** Name of the saved query. */
		displayName?: string | null;

		/**
		 * Output only. The matter id of the associated matter.
		 * The server does not look at this field during create and always uses matter
		 * id in the URL.
		 */
		matterId?: string | null;

		/** A query definition relevant for search & export. */
		query?: Query;

		/** A unique identifier for the saved query. */
		savedQueryId?: string | null;
	}

	/** Definition of the saved query. */
	export interface SavedQueryFormProperties {

		/**
		 * Output only. The server generated timestamp at which saved query was
		 * created.
		 */
		createTime: FormControl<string | null | undefined>,

		/** Name of the saved query. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Output only. The matter id of the associated matter.
		 * The server does not look at this field during create and always uses matter
		 * id in the URL.
		 */
		matterId: FormControl<string | null | undefined>,

		/** A unique identifier for the saved query. */
		savedQueryId: FormControl<string | null | undefined>,
	}
	export function CreateSavedQueryFormGroup() {
		return new FormGroup<SavedQueryFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			matterId: new FormControl<string | null | undefined>(undefined),
			savedQueryId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Remove a list of accounts from a hold. */
	export interface RemoveHeldAccountsRequest {

		/** Account ids to identify HeldAccounts to remove. */
		accountIds?: Array<string>;
	}

	/** Remove a list of accounts from a hold. */
	export interface RemoveHeldAccountsRequestFormProperties {
	}
	export function CreateRemoveHeldAccountsRequestFormGroup() {
		return new FormGroup<RemoveHeldAccountsRequestFormProperties>({
		});

	}


	/** Response for batch delete held accounts. */
	export interface RemoveHeldAccountsResponse {

		/**
		 * A list of statuses for deleted accounts. Results have the
		 * same order as the request.
		 */
		statuses?: Array<Status>;
	}

	/** Response for batch delete held accounts. */
	export interface RemoveHeldAccountsResponseFormProperties {
	}
	export function CreateRemoveHeldAccountsResponseFormGroup() {
		return new FormGroup<RemoveHeldAccountsResponseFormProperties>({
		});

	}


	/** Remove an account as a matter collaborator. */
	export interface RemoveMatterPermissionsRequest {

		/** The account ID. */
		accountId?: string | null;
	}

	/** Remove an account as a matter collaborator. */
	export interface RemoveMatterPermissionsRequestFormProperties {

		/** The account ID. */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveMatterPermissionsRequestFormGroup() {
		return new FormGroup<RemoveMatterPermissionsRequestFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reopen a matter by ID. */
	export interface ReopenMatterRequest {
	}

	/** Reopen a matter by ID. */
	export interface ReopenMatterRequestFormProperties {
	}
	export function CreateReopenMatterRequestFormGroup() {
		return new FormGroup<ReopenMatterRequestFormProperties>({
		});

	}


	/** Response to a ReopenMatterRequest. */
	export interface ReopenMatterResponse {

		/** Represents a matter. */
		matter?: Matter;
	}

	/** Response to a ReopenMatterRequest. */
	export interface ReopenMatterResponseFormProperties {
	}
	export function CreateReopenMatterResponseFormGroup() {
		return new FormGroup<ReopenMatterResponseFormProperties>({
		});

	}


	/** Undelete a matter by ID. */
	export interface UndeleteMatterRequest {
	}

	/** Undelete a matter by ID. */
	export interface UndeleteMatterRequestFormProperties {
	}
	export function CreateUndeleteMatterRequestFormGroup() {
		return new FormGroup<UndeleteMatterRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists matters the user has access to.
		 * Get v1/matters
		 * @param {number} pageSize The number of matters to return in the response.
		 * Default and maximum are 100.
		 * @param {string} pageToken The pagination token as returned in the response.
		 * @param {MatterState} state If set, list only matters with that specific state. The default is listing
		 * matters of all states.
		 * @param {Vault_matters_listView} view Specifies which parts of the matter to return in response.
		 * @return {void} Successful response
		 */
		Vault_matters_list(pageSize: number | null | undefined, pageToken: string | null | undefined, state: MatterState | null | undefined, view: Vault_matters_listView | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/matters?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&state=' + state + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new matter with the given name and description. The initial state
		 * is open, and the owner is the method caller. Returns the created matter
		 * with default view.
		 * Post v1/matters
		 * @return {void} Successful response
		 */
		Vault_matters_create(requestBody: Matter): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/matters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified matter. Returns matter with updated state.
		 * Delete v1/matters/{matterId}
		 * @param {string} matterId The matter ID
		 * @return {void} Successful response
		 */
		Vault_matters_delete(matterId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified matter.
		 * Get v1/matters/{matterId}
		 * @param {string} matterId The matter ID.
		 * @param {Vault_matters_listView} view Specifies which parts of the Matter to return in the response.
		 * @return {void} Successful response
		 */
		Vault_matters_get(matterId: string, view: Vault_matters_listView | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified matter.
		 * This updates only the name and description of the matter, identified by
		 * matter id. Changes to any other fields are ignored.
		 * Returns the default view of the matter.
		 * Put v1/matters/{matterId}
		 * @param {string} matterId The matter ID.
		 * @return {void} Successful response
		 */
		Vault_matters_update(matterId: string, requestBody: Matter): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists Exports.
		 * Get v1/matters/{matterId}/exports
		 * @param {string} matterId The matter ID.
		 * @param {number} pageSize The number of exports to return in the response.
		 * @param {string} pageToken The pagination token as returned in the response.
		 * @return {void} Successful response
		 */
		Vault_matters_exports_list(matterId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/exports&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an Export.
		 * Post v1/matters/{matterId}/exports
		 * @param {string} matterId The matter ID.
		 * @return {void} Successful response
		 */
		Vault_matters_exports_create(matterId: string, requestBody: Export): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/exports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an Export.
		 * Delete v1/matters/{matterId}/exports/{exportId}
		 * @param {string} matterId The matter ID.
		 * @param {string} exportId The export ID.
		 * @return {void} Successful response
		 */
		Vault_matters_exports_delete(matterId: string, exportId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/exports/' + (exportId == null ? '' : encodeURIComponent(exportId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an Export.
		 * Get v1/matters/{matterId}/exports/{exportId}
		 * @param {string} matterId The matter ID.
		 * @param {string} exportId The export ID.
		 * @return {void} Successful response
		 */
		Vault_matters_exports_get(matterId: string, exportId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/exports/' + (exportId == null ? '' : encodeURIComponent(exportId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists holds within a matter. An empty page token in ListHoldsResponse
		 * denotes no more holds to list.
		 * Get v1/matters/{matterId}/holds
		 * @param {string} matterId The matter ID.
		 * @param {number} pageSize The number of holds to return in the response, between 0 and 100 inclusive.
		 * Leaving this empty, or as 0, is the same as page_size = 100.
		 * @param {string} pageToken The pagination token as returned in the response.
		 * An empty token means start from the beginning.
		 * @param {Vault_matters_holds_listView} view Specifies which parts of the Hold to return.
		 * @return {void} Successful response
		 */
		Vault_matters_holds_list(matterId: string, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Vault_matters_holds_listView | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a hold in the given matter.
		 * Post v1/matters/{matterId}/holds
		 * @param {string} matterId The matter ID.
		 * @return {void} Successful response
		 */
		Vault_matters_holds_create(matterId: string, requestBody: Hold): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a hold by ID. This will release any HeldAccounts on this Hold.
		 * Delete v1/matters/{matterId}/holds/{holdId}
		 * @param {string} matterId The matter ID.
		 * @param {string} holdId The hold ID.
		 * @return {void} Successful response
		 */
		Vault_matters_holds_delete(matterId: string, holdId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds/' + (holdId == null ? '' : encodeURIComponent(holdId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a hold by ID.
		 * Get v1/matters/{matterId}/holds/{holdId}
		 * @param {string} matterId The matter ID.
		 * @param {string} holdId The hold ID.
		 * @param {Vault_matters_holds_listView} view Specifies which parts of the Hold to return.
		 * @return {void} Successful response
		 */
		Vault_matters_holds_get(matterId: string, holdId: string, view: Vault_matters_holds_listView | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds/' + (holdId == null ? '' : encodeURIComponent(holdId)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the OU and/or query parameters of a hold. You cannot add accounts
		 * to a hold that covers an OU, nor can you add OUs to a hold that covers
		 * individual accounts. Accounts listed in the hold will be ignored.
		 * Put v1/matters/{matterId}/holds/{holdId}
		 * @param {string} matterId The matter ID.
		 * @param {string} holdId The ID of the hold.
		 * @return {void} Successful response
		 */
		Vault_matters_holds_update(matterId: string, holdId: string, requestBody: Hold): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds/' + (holdId == null ? '' : encodeURIComponent(holdId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists HeldAccounts for a hold. This will only list individually specified
		 * held accounts. If the hold is on an OU, then use
		 * <a href="https://developers.google.com/admin-sdk/">Admin SDK</a>
		 * to enumerate its members.
		 * Get v1/matters/{matterId}/holds/{holdId}/accounts
		 * @param {string} matterId The matter ID.
		 * @param {string} holdId The hold ID.
		 * @return {void} Successful response
		 */
		Vault_matters_holds_accounts_list(matterId: string, holdId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds/' + (holdId == null ? '' : encodeURIComponent(holdId)) + '/accounts', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a HeldAccount to a hold. Accounts can only be added to a hold that
		 * has no held_org_unit set. Attempting to add an account to an OU-based
		 * hold will result in an error.
		 * Post v1/matters/{matterId}/holds/{holdId}/accounts
		 * @param {string} matterId The matter ID.
		 * @param {string} holdId The hold ID.
		 * @return {void} Successful response
		 */
		Vault_matters_holds_accounts_create(matterId: string, holdId: string, requestBody: HeldAccount): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds/' + (holdId == null ? '' : encodeURIComponent(holdId)) + '/accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a HeldAccount from a hold. If this request leaves the hold with
		 * no held accounts, the hold will not apply to any accounts.
		 * Delete v1/matters/{matterId}/holds/{holdId}/accounts/{accountId}
		 * @param {string} matterId The matter ID.
		 * @param {string} holdId The hold ID.
		 * @param {string} accountId The ID of the account to remove from the hold.
		 * @return {void} Successful response
		 */
		Vault_matters_holds_accounts_delete(matterId: string, holdId: string, accountId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds/' + (holdId == null ? '' : encodeURIComponent(holdId)) + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds HeldAccounts to a hold. Returns a list of accounts that have been
		 * successfully added. Accounts can only be added to an existing account-based
		 * hold.
		 * Post v1/matters/{matterId}/holds/{holdId}:addHeldAccounts
		 * @param {string} matterId The matter ID.
		 * @param {string} holdId The hold ID.
		 * @return {void} Successful response
		 */
		Vault_matters_holds_addHeldAccounts(matterId: string, holdId: string, requestBody: AddHeldAccountsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds/' + (holdId == null ? '' : encodeURIComponent(holdId)) + ':addHeldAccounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes HeldAccounts from a hold. Returns a list of statuses in the same
		 * order as the request. If this request leaves the hold with no held
		 * accounts, the hold will not apply to any accounts.
		 * Post v1/matters/{matterId}/holds/{holdId}:removeHeldAccounts
		 * @param {string} matterId The matter ID.
		 * @param {string} holdId The hold ID.
		 * @return {void} Successful response
		 */
		Vault_matters_holds_removeHeldAccounts(matterId: string, holdId: string, requestBody: RemoveHeldAccountsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds/' + (holdId == null ? '' : encodeURIComponent(holdId)) + ':removeHeldAccounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists saved queries within a matter. An empty page token in
		 * ListSavedQueriesResponse denotes no more saved queries to list.
		 * Get v1/matters/{matterId}/savedQueries
		 * @param {string} matterId The matter id of the parent matter for which the saved queries are to be
		 * retrieved.
		 * @param {number} pageSize The maximum number of saved queries to return.
		 * @param {string} pageToken The pagination token as returned in the previous response.
		 * An empty token means start from the beginning.
		 * @return {void} Successful response
		 */
		Vault_matters_savedQueries_list(matterId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/savedQueries&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a saved query.
		 * Post v1/matters/{matterId}/savedQueries
		 * @param {string} matterId The matter id of the parent matter for which the saved query is to be
		 * created.
		 * @return {void} Successful response
		 */
		Vault_matters_savedQueries_create(matterId: string, requestBody: SavedQuery): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/savedQueries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a saved query by Id.
		 * Delete v1/matters/{matterId}/savedQueries/{savedQueryId}
		 * @param {string} matterId The matter id of the parent matter for which the saved query is to be
		 * deleted.
		 * @param {string} savedQueryId Id of the saved query to be deleted.
		 * @return {void} Successful response
		 */
		Vault_matters_savedQueries_delete(matterId: string, savedQueryId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/savedQueries/' + (savedQueryId == null ? '' : encodeURIComponent(savedQueryId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a saved query by Id.
		 * Get v1/matters/{matterId}/savedQueries/{savedQueryId}
		 * @param {string} matterId The matter id of the parent matter for which the saved query is to be
		 * retrieved.
		 * @param {string} savedQueryId Id of the saved query to be retrieved.
		 * @return {void} Successful response
		 */
		Vault_matters_savedQueries_get(matterId: string, savedQueryId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/savedQueries/' + (savedQueryId == null ? '' : encodeURIComponent(savedQueryId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds an account as a matter collaborator.
		 * Post v1/matters/{matterId}:addPermissions
		 * @param {string} matterId The matter ID.
		 * @return {void} Successful response
		 */
		Vault_matters_addPermissions(matterId: string, requestBody: AddMatterPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + ':addPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Closes the specified matter. Returns matter with updated state.
		 * Post v1/matters/{matterId}:close
		 * @param {string} matterId The matter ID.
		 * @return {void} Successful response
		 */
		Vault_matters_close(matterId: string, requestBody: CloseMatterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + ':close', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes an account as a matter collaborator.
		 * Post v1/matters/{matterId}:removePermissions
		 * @param {string} matterId The matter ID.
		 * @return {void} Successful response
		 */
		Vault_matters_removePermissions(matterId: string, requestBody: RemoveMatterPermissionsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + ':removePermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reopens the specified matter. Returns matter with updated state.
		 * Post v1/matters/{matterId}:reopen
		 * @param {string} matterId The matter ID.
		 * @return {void} Successful response
		 */
		Vault_matters_reopen(matterId: string, requestBody: ReopenMatterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + ':reopen', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Undeletes the specified matter. Returns matter with updated state.
		 * Post v1/matters/{matterId}:undelete
		 * @param {string} matterId The matter ID.
		 * @return {void} Successful response
		 */
		Vault_matters_undelete(matterId: string, requestBody: UndeleteMatterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + ':undelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is
		 * no longer interested in the operation result. It does not cancel the
		 * operation. If the server doesn't support this method, it returns
		 * `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {void} Successful response
		 */
		Vault_operations_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Vault_matters_listView { VIEW_UNSPECIFIED = 0, BASIC = 1, FULL = 2 }

	export enum Vault_matters_holds_listView { HOLD_VIEW_UNSPECIFIED = 0, BASIC_HOLD = 1, FULL_HOLD = 2 }

}

