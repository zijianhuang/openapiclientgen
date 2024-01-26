import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The results count for each account. */
	export interface AccountCount {

		/** User's information. */
		account?: UserInfo;

		/** The number of results (messages or files) found for this account. */
		count?: string | null;
	}

	/** The results count for each account. */
	export interface AccountCountFormProperties {

		/** The number of results (messages or files) found for this account. */
		count: FormControl<string | null | undefined>,
	}
	export function CreateAccountCountFormGroup() {
		return new FormGroup<AccountCountFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
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


	/** An error that occurred when querying a specific account */
	export interface AccountCountError {

		/** User's information. */
		account?: UserInfo;

		/** Account query error. */
		errorType?: AccountCountErrorErrorType | null;
	}

	/** An error that occurred when querying a specific account */
	export interface AccountCountErrorFormProperties {

		/** Account query error. */
		errorType: FormControl<AccountCountErrorErrorType | null | undefined>,
	}
	export function CreateAccountCountErrorFormGroup() {
		return new FormGroup<AccountCountErrorFormProperties>({
			errorType: new FormControl<AccountCountErrorErrorType | null | undefined>(undefined),
		});

	}

	export enum AccountCountErrorErrorType { ERROR_TYPE_UNSPECIFIED = 0, WILDCARD_TOO_BROAD = 1, TOO_MANY_TERMS = 2, LOCATION_UNAVAILABLE = 3, UNKNOWN = 4, DEADLINE_EXCEEDED = 5 }


	/** The accounts to search */
	export interface AccountInfo {

		/** A set of accounts to search. */
		emails?: Array<string>;
	}

	/** The accounts to search */
	export interface AccountInfoFormProperties {
	}
	export function CreateAccountInfoFormGroup() {
		return new FormGroup<AccountInfoFormProperties>({
		});

	}


	/** The status of each account creation, and the **HeldAccount**, if successful. */
	export interface AddHeldAccountResult {

		/** An account covered by a hold. This structure is immutable. It can be an individual account or a Google Group, depending on the service. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege. */
		account?: HeldAccount;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: Status;
	}

	/** The status of each account creation, and the **HeldAccount**, if successful. */
	export interface AddHeldAccountResultFormProperties {
	}
	export function CreateAddHeldAccountResultFormGroup() {
		return new FormGroup<AddHeldAccountResultFormProperties>({
		});

	}


	/** An account covered by a hold. This structure is immutable. It can be an individual account or a Google Group, depending on the service. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege. */
	export interface HeldAccount {

		/** The account ID, as provided by the [Admin SDK](https://developers.google.com/admin-sdk/). */
		accountId?: string | null;

		/** The primary email address of the account. If used as an input, this takes precedence over **accountId**. */
		email?: string | null;

		/** Output only. The first name of the account holder. */
		firstName?: string | null;

		/** Output only. When the account was put on hold. */
		holdTime?: string | null;

		/** Output only. The last name of the account holder. */
		lastName?: string | null;
	}

	/** An account covered by a hold. This structure is immutable. It can be an individual account or a Google Group, depending on the service. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege. */
	export interface HeldAccountFormProperties {

		/** The account ID, as provided by the [Admin SDK](https://developers.google.com/admin-sdk/). */
		accountId: FormControl<string | null | undefined>,

		/** The primary email address of the account. If used as an input, this takes precedence over **accountId**. */
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


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
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

		/** A comma-separated list of the account IDs of the accounts to add to the hold. Specify either **emails** or **account_ids**, but not both. */
		accountIds?: Array<string>;

		/** A comma-separated list of the emails of the accounts to add to the hold. Specify either **emails** or **account_ids**, but not both. */
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


	/** Add an account with the permission specified. The role cannot be owner. If an account already has a role in the matter, the existing role is overwritten. */
	export interface AddMatterPermissionsRequest {

		/** Only relevant if **sendEmails** is **true**. To CC the requestor in the email message, set to **true**. To not CC requestor, set to **false**. */
		ccMe?: boolean | null;

		/** Users can be matter owners or collaborators. Each matter has only one owner. All others users who can access the matter are collaborators. When an account is purged, its corresponding MatterPermission resources cease to exist. */
		matterPermission?: MatterPermission;

		/** To send a notification email to the added account, set to **true**. To not send a notification email, set to **false**. */
		sendEmails?: boolean | null;
	}

	/** Add an account with the permission specified. The role cannot be owner. If an account already has a role in the matter, the existing role is overwritten. */
	export interface AddMatterPermissionsRequestFormProperties {

		/** Only relevant if **sendEmails** is **true**. To CC the requestor in the email message, set to **true**. To not CC requestor, set to **false**. */
		ccMe: FormControl<boolean | null | undefined>,

		/** To send a notification email to the added account, set to **true**. To not send a notification email, set to **false**. */
		sendEmails: FormControl<boolean | null | undefined>,
	}
	export function CreateAddMatterPermissionsRequestFormGroup() {
		return new FormGroup<AddMatterPermissionsRequestFormProperties>({
			ccMe: new FormControl<boolean | null | undefined>(undefined),
			sendEmails: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Users can be matter owners or collaborators. Each matter has only one owner. All others users who can access the matter are collaborators. When an account is purged, its corresponding MatterPermission resources cease to exist. */
	export interface MatterPermission {

		/** The account ID, as provided by the [Admin SDK](https://developers.google.com/admin-sdk/). */
		accountId?: string | null;

		/** The user's role for the matter. */
		role?: MatterPermissionRole | null;
	}

	/** Users can be matter owners or collaborators. Each matter has only one owner. All others users who can access the matter are collaborators. When an account is purged, its corresponding MatterPermission resources cease to exist. */
	export interface MatterPermissionFormProperties {

		/** The account ID, as provided by the [Admin SDK](https://developers.google.com/admin-sdk/). */
		accountId: FormControl<string | null | undefined>,

		/** The user's role for the matter. */
		role: FormControl<MatterPermissionRole | null | undefined>,
	}
	export function CreateMatterPermissionFormGroup() {
		return new FormGroup<MatterPermissionFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<MatterPermissionRole | null | undefined>(undefined),
		});

	}

	export enum MatterPermissionRole { ROLE_UNSPECIFIED = 0, COLLABORATOR = 1, OWNER = 2 }


	/** The options for Calendar exports. */
	export interface CalendarExportOptions {

		/** The file format for exported text messages. */
		exportFormat?: CalendarExportOptionsExportFormat | null;
	}

	/** The options for Calendar exports. */
	export interface CalendarExportOptionsFormProperties {

		/** The file format for exported text messages. */
		exportFormat: FormControl<CalendarExportOptionsExportFormat | null | undefined>,
	}
	export function CreateCalendarExportOptionsFormGroup() {
		return new FormGroup<CalendarExportOptionsFormProperties>({
			exportFormat: new FormControl<CalendarExportOptionsExportFormat | null | undefined>(undefined),
		});

	}

	export enum CalendarExportOptionsExportFormat { EXPORT_FORMAT_UNSPECIFIED = 0, MBOX = 1, PST = 2, ICS = 3 }


	/** Additional options for Calendar search */
	export interface CalendarOptions {

		/** Matches only those events whose location contains all of the words in the given set. If the string contains quoted phrases, this method only matches those events whose location contain the exact phrase. Entries in the set are considered in "and". Word splitting example: ["New Zealand"] vs ["New","Zealand"] "New Zealand": matched by both "New and better Zealand": only matched by the later */
		locationQuery?: Array<string>;

		/** Matches only those events that do not contain any of the words in the given set in title, description, location, or attendees. Entries in the set are considered in "or". */
		minusWords?: Array<string>;

		/** Matches only those events whose attendees contain all of the words in the given set. Entries in the set are considered in "and". */
		peopleQuery?: Array<string>;

		/** Matches only events for which the custodian gave one of these responses. If the set is empty or contains ATTENDEE_RESPONSE_UNSPECIFIED there will be no filtering on responses. */
		responseStatuses?: Array<string>;

		/** Search the current version of the Calendar event, but export the contents of the last version saved before 12:00 AM UTC on the specified date. Enter the date in UTC. */
		versionDate?: string | null;
	}

	/** Additional options for Calendar search */
	export interface CalendarOptionsFormProperties {

		/** Search the current version of the Calendar event, but export the contents of the last version saved before 12:00 AM UTC on the specified date. Enter the date in UTC. */
		versionDate: FormControl<string | null | undefined>,
	}
	export function CreateCalendarOptionsFormGroup() {
		return new FormGroup<CalendarOptionsFormProperties>({
			versionDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

	}


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

		/** Represents a matter. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege. */
		matter?: Matter;
	}

	/** Response to a CloseMatterRequest. */
	export interface CloseMatterResponseFormProperties {
	}
	export function CreateCloseMatterResponseFormGroup() {
		return new FormGroup<CloseMatterResponseFormProperties>({
		});

	}


	/** Represents a matter. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege. */
	export interface Matter {

		/** An optional description for the matter. */
		description?: string | null;

		/** The matter ID, which is generated by the server. Leave blank when creating a matter. */
		matterId?: string | null;

		/** Lists the users and their permission for the matter. Currently there is no programmer defined limit on the number of permissions a matter can have. */
		matterPermissions?: Array<MatterPermission>;

		/** The name of the matter. */
		name?: string | null;

		/** The state of the matter. */
		state?: MatterState | null;
	}

	/** Represents a matter. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege. */
	export interface MatterFormProperties {

		/** An optional description for the matter. */
		description: FormControl<string | null | undefined>,

		/** The matter ID, which is generated by the server. Leave blank when creating a matter. */
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


	/** The export file in Cloud Storage */
	export interface CloudStorageFile {

		/** The name of the Cloud Storage bucket for the export file. You can use this value in the Cloud Storage [JSON API](https://cloud.google.com/storage/docs/json_api) or [XML API](https://cloud.google.com/storage/docs/xml-api), but not to list the bucket contents. Instead, you can [get individual export files](https://cloud.google.com/storage/docs/json_api/v1/objects/get) by object name. */
		bucketName?: string | null;

		/** The md5 hash of the file. */
		md5Hash?: string | null;

		/** The name of the Cloud Storage object for the export file. You can use this value in the Cloud Storage [JSON API](https://cloud.google.com/storage/docs/json_api) or [XML API](https://cloud.google.com/storage/docs/xml-api). */
		objectName?: string | null;

		/** The export file size. */
		size?: string | null;
	}

	/** The export file in Cloud Storage */
	export interface CloudStorageFileFormProperties {

		/** The name of the Cloud Storage bucket for the export file. You can use this value in the Cloud Storage [JSON API](https://cloud.google.com/storage/docs/json_api) or [XML API](https://cloud.google.com/storage/docs/xml-api), but not to list the bucket contents. Instead, you can [get individual export files](https://cloud.google.com/storage/docs/json_api/v1/objects/get) by object name. */
		bucketName: FormControl<string | null | undefined>,

		/** The md5 hash of the file. */
		md5Hash: FormControl<string | null | undefined>,

		/** The name of the Cloud Storage object for the export file. You can use this value in the Cloud Storage [JSON API](https://cloud.google.com/storage/docs/json_api) or [XML API](https://cloud.google.com/storage/docs/xml-api). */
		objectName: FormControl<string | null | undefined>,

		/** The export file size. */
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


	/** Export sink for Cloud Storage files. */
	export interface CloudStorageSink {

		/** Output only. The exported files in Cloud Storage. */
		files?: Array<CloudStorageFile>;
	}

	/** Export sink for Cloud Storage files. */
	export interface CloudStorageSinkFormProperties {
	}
	export function CreateCloudStorageSinkFormGroup() {
		return new FormGroup<CloudStorageSinkFormProperties>({
		});

	}


	/** Service-specific options for holds. */
	export interface CorpusQuery {

		/** Options for Drive holds. */
		driveQuery?: HeldDriveQuery;

		/** Query options for group holds. */
		groupsQuery?: HeldGroupsQuery;

		/** Options for Chat holds. */
		hangoutsChatQuery?: HeldHangoutsChatQuery;

		/** Query options for Gmail holds. */
		mailQuery?: HeldMailQuery;

		/** Options for Voice holds. */
		voiceQuery?: HeldVoiceQuery;
	}

	/** Service-specific options for holds. */
	export interface CorpusQueryFormProperties {
	}
	export function CreateCorpusQueryFormGroup() {
		return new FormGroup<CorpusQueryFormProperties>({
		});

	}


	/** Options for Drive holds. */
	export interface HeldDriveQuery {

		/** To include files in shared drives in the hold, set to **true**. */
		includeSharedDriveFiles?: boolean | null;

		/** To include files in Team Drives in the hold, set to **true**. */
		includeTeamDriveFiles?: boolean | null;
	}

	/** Options for Drive holds. */
	export interface HeldDriveQueryFormProperties {

		/** To include files in shared drives in the hold, set to **true**. */
		includeSharedDriveFiles: FormControl<boolean | null | undefined>,

		/** To include files in Team Drives in the hold, set to **true**. */
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

		/** The end time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date. */
		endTime?: string | null;

		/** The start time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date. */
		startTime?: string | null;

		/** The [search operators](https://support.google.com/vault/answer/2474474) used to refine the messages covered by the hold. */
		terms?: string | null;
	}

	/** Query options for group holds. */
	export interface HeldGroupsQueryFormProperties {

		/** The end time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date. */
		endTime: FormControl<string | null | undefined>,

		/** The start time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date. */
		startTime: FormControl<string | null | undefined>,

		/** The [search operators](https://support.google.com/vault/answer/2474474) used to refine the messages covered by the hold. */
		terms: FormControl<string | null | undefined>,
	}
	export function CreateHeldGroupsQueryFormGroup() {
		return new FormGroup<HeldGroupsQueryFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			terms: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for Chat holds. */
	export interface HeldHangoutsChatQuery {

		/** To include messages in Chat spaces the user was a member of, set to **true**. */
		includeRooms?: boolean | null;
	}

	/** Options for Chat holds. */
	export interface HeldHangoutsChatQueryFormProperties {

		/** To include messages in Chat spaces the user was a member of, set to **true**. */
		includeRooms: FormControl<boolean | null | undefined>,
	}
	export function CreateHeldHangoutsChatQueryFormGroup() {
		return new FormGroup<HeldHangoutsChatQueryFormProperties>({
			includeRooms: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Query options for Gmail holds. */
	export interface HeldMailQuery {

		/** The end time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date. */
		endTime?: string | null;

		/** The start time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date. */
		startTime?: string | null;

		/** The [search operators](https://support.google.com/vault/answer/2474474) used to refine the messages covered by the hold. */
		terms?: string | null;
	}

	/** Query options for Gmail holds. */
	export interface HeldMailQueryFormProperties {

		/** The end time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date. */
		endTime: FormControl<string | null | undefined>,

		/** The start time for the query. Specify in GMT. The value is rounded to 12 AM on the specified date. */
		startTime: FormControl<string | null | undefined>,

		/** The [search operators](https://support.google.com/vault/answer/2474474) used to refine the messages covered by the hold. */
		terms: FormControl<string | null | undefined>,
	}
	export function CreateHeldMailQueryFormGroup() {
		return new FormGroup<HeldMailQueryFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			terms: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for Voice holds. */
	export interface HeldVoiceQuery {

		/** A list of data types covered by the hold. Should be non-empty. Order does not matter and duplicates are ignored. */
		coveredData?: Array<string>;
	}

	/** Options for Voice holds. */
	export interface HeldVoiceQueryFormProperties {
	}
	export function CreateHeldVoiceQueryFormGroup() {
		return new FormGroup<HeldVoiceQueryFormProperties>({
		});

	}


	/** Long running operation metadata for CountArtifacts. */
	export interface CountArtifactsMetadata {

		/** End time of count operation. Available when operation is done. */
		endTime?: string | null;

		/** The matter ID of the associated matter. */
		matterId?: string | null;

		/** The query definition used for search and export. */
		query?: Query;

		/** Creation time of count operation. */
		startTime?: string | null;
	}

	/** Long running operation metadata for CountArtifacts. */
	export interface CountArtifactsMetadataFormProperties {

		/** End time of count operation. Available when operation is done. */
		endTime: FormControl<string | null | undefined>,

		/** The matter ID of the associated matter. */
		matterId: FormControl<string | null | undefined>,

		/** Creation time of count operation. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateCountArtifactsMetadataFormGroup() {
		return new FormGroup<CountArtifactsMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			matterId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The query definition used for search and export. */
	export interface Query {

		/** The accounts to search */
		accountInfo?: AccountInfo;

		/** Additional options for Calendar search */
		calendarOptions?: CalendarOptions;

		/** The Google Workspace service to search. */
		corpus?: QueryCorpus | null;

		/** The data source to search. */
		dataScope?: QueryDataScope | null;

		/** Additional options for Drive search */
		driveOptions?: DriveOptions;

		/** The end time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date. */
		endTime?: string | null;

		/** The Chat spaces to search */
		hangoutsChatInfo?: HangoutsChatInfo;

		/** Additional options for Google Chat search */
		hangoutsChatOptions?: HangoutsChatOptions;

		/** Additional options for Gmail search */
		mailOptions?: MailOptions;

		/** The entity to search. This field replaces **searchMethod** to support shared drives. When **searchMethod** is **TEAM_DRIVE**, the response of this field is **SHARED_DRIVE**. */
		method?: QueryMethod | null;

		/** The organizational unit to search */
		orgUnitInfo?: OrgUnitInfo;

		/** The search method to use. */
		searchMethod?: QueryMethod | null;

		/** The shared drives to search */
		sharedDriveInfo?: SharedDriveInfo;

		/** The published site URLs of new Google Sites to search */
		sitesUrlInfo?: SitesUrlInfo;

		/** The start time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date. */
		startTime?: string | null;

		/** Team Drives to search */
		teamDriveInfo?: TeamDriveInfo;

		/** Service-specific [search operators](https://support.google.com/vault/answer/2474474) to filter search results. */
		terms?: string | null;

		/** The time zone name. It should be an IANA TZ name, such as "America/Los_Angeles". For a list of time zone names, see [Time Zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For more information about how Vault uses time zones, see [the Vault help center](https://support.google.com/vault/answer/6092995#time). */
		timeZone?: string | null;

		/** Additional options for Voice search */
		voiceOptions?: VoiceOptions;
	}

	/** The query definition used for search and export. */
	export interface QueryFormProperties {

		/** The Google Workspace service to search. */
		corpus: FormControl<QueryCorpus | null | undefined>,

		/** The data source to search. */
		dataScope: FormControl<QueryDataScope | null | undefined>,

		/** The end time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date. */
		endTime: FormControl<string | null | undefined>,

		/** The entity to search. This field replaces **searchMethod** to support shared drives. When **searchMethod** is **TEAM_DRIVE**, the response of this field is **SHARED_DRIVE**. */
		method: FormControl<QueryMethod | null | undefined>,

		/** The search method to use. */
		searchMethod: FormControl<QueryMethod | null | undefined>,

		/** The start time for the search query. Specify in GMT. The value is rounded to 12 AM on the specified date. */
		startTime: FormControl<string | null | undefined>,

		/** Service-specific [search operators](https://support.google.com/vault/answer/2474474) to filter search results. */
		terms: FormControl<string | null | undefined>,

		/** The time zone name. It should be an IANA TZ name, such as "America/Los_Angeles". For a list of time zone names, see [Time Zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For more information about how Vault uses time zones, see [the Vault help center](https://support.google.com/vault/answer/6092995#time). */
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

	export enum QueryCorpus { CORPUS_TYPE_UNSPECIFIED = 0, DRIVE = 1, MAIL = 2, GROUPS = 3, HANGOUTS_CHAT = 4, VOICE = 5, CALENDAR = 6 }

	export enum QueryDataScope { DATA_SCOPE_UNSPECIFIED = 0, ALL_DATA = 1, HELD_DATA = 2, UNPROCESSED_DATA = 3 }


	/** Additional options for Drive search */
	export interface DriveOptions {

		/** Set whether the results include only content encrypted with [Google Workspace Client-side encryption](https://support.google.com/a?p=cse_ov) content, only unencrypted content, or both. Defaults to both. Currently supported for Drive. */
		clientSideEncryptedOption?: DriveOptionsClientSideEncryptedOption | null;

		/** Set to **true** to include shared drives. */
		includeSharedDrives?: boolean | null;

		/** Set to true to include Team Drive. */
		includeTeamDrives?: boolean | null;

		/** Search the current version of the Drive file, but export the contents of the last version saved before 12:00 AM UTC on the specified date. Enter the date in UTC. */
		versionDate?: string | null;
	}

	/** Additional options for Drive search */
	export interface DriveOptionsFormProperties {

		/** Set whether the results include only content encrypted with [Google Workspace Client-side encryption](https://support.google.com/a?p=cse_ov) content, only unencrypted content, or both. Defaults to both. Currently supported for Drive. */
		clientSideEncryptedOption: FormControl<DriveOptionsClientSideEncryptedOption | null | undefined>,

		/** Set to **true** to include shared drives. */
		includeSharedDrives: FormControl<boolean | null | undefined>,

		/** Set to true to include Team Drive. */
		includeTeamDrives: FormControl<boolean | null | undefined>,

		/** Search the current version of the Drive file, but export the contents of the last version saved before 12:00 AM UTC on the specified date. Enter the date in UTC. */
		versionDate: FormControl<string | null | undefined>,
	}
	export function CreateDriveOptionsFormGroup() {
		return new FormGroup<DriveOptionsFormProperties>({
			clientSideEncryptedOption: new FormControl<DriveOptionsClientSideEncryptedOption | null | undefined>(undefined),
			includeSharedDrives: new FormControl<boolean | null | undefined>(undefined),
			includeTeamDrives: new FormControl<boolean | null | undefined>(undefined),
			versionDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DriveOptionsClientSideEncryptedOption { CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED = 0, CLIENT_SIDE_ENCRYPTED_OPTION_ANY = 1, CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED = 2, CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED = 3 }


	/** The Chat spaces to search */
	export interface HangoutsChatInfo {

		/** A list of Chat spaces IDs, as provided by the [Chat API](https://developers.google.com/chat). There is a limit of exporting from 500 Chat spaces per request. */
		roomId?: Array<string>;
	}

	/** The Chat spaces to search */
	export interface HangoutsChatInfoFormProperties {
	}
	export function CreateHangoutsChatInfoFormGroup() {
		return new FormGroup<HangoutsChatInfoFormProperties>({
		});

	}


	/** Additional options for Google Chat search */
	export interface HangoutsChatOptions {

		/** For searches by account or organizational unit, set to **true** to include rooms. */
		includeRooms?: boolean | null;
	}

	/** Additional options for Google Chat search */
	export interface HangoutsChatOptionsFormProperties {

		/** For searches by account or organizational unit, set to **true** to include rooms. */
		includeRooms: FormControl<boolean | null | undefined>,
	}
	export function CreateHangoutsChatOptionsFormGroup() {
		return new FormGroup<HangoutsChatOptionsFormProperties>({
			includeRooms: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Additional options for Gmail search */
	export interface MailOptions {

		/** Specifies whether the results should include encrypted content, unencrypted content, or both. Defaults to including both. */
		clientSideEncryptedOption?: DriveOptionsClientSideEncryptedOption | null;

		/** Set to **true** to exclude drafts. */
		excludeDrafts?: boolean | null;
	}

	/** Additional options for Gmail search */
	export interface MailOptionsFormProperties {

		/** Specifies whether the results should include encrypted content, unencrypted content, or both. Defaults to including both. */
		clientSideEncryptedOption: FormControl<DriveOptionsClientSideEncryptedOption | null | undefined>,

		/** Set to **true** to exclude drafts. */
		excludeDrafts: FormControl<boolean | null | undefined>,
	}
	export function CreateMailOptionsFormGroup() {
		return new FormGroup<MailOptionsFormProperties>({
			clientSideEncryptedOption: new FormControl<DriveOptionsClientSideEncryptedOption | null | undefined>(undefined),
			excludeDrafts: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum QueryMethod { SEARCH_METHOD_UNSPECIFIED = 0, ACCOUNT = 1, ORG_UNIT = 2, TEAM_DRIVE = 3, ENTIRE_ORG = 4, ROOM = 5, SITES_URL = 6, SHARED_DRIVE = 7 }


	/** The organizational unit to search */
	export interface OrgUnitInfo {

		/** The name of the organizational unit to search, as provided by the [Admin SDK Directory API](https://developers.google.com/admin-sdk/directory/). */
		orgUnitId?: string | null;
	}

	/** The organizational unit to search */
	export interface OrgUnitInfoFormProperties {

		/** The name of the organizational unit to search, as provided by the [Admin SDK Directory API](https://developers.google.com/admin-sdk/directory/). */
		orgUnitId: FormControl<string | null | undefined>,
	}
	export function CreateOrgUnitInfoFormGroup() {
		return new FormGroup<OrgUnitInfoFormProperties>({
			orgUnitId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The shared drives to search */
	export interface SharedDriveInfo {

		/** A list of shared drive IDs, as provided by the [Drive API](https://developers.google.com/drive). */
		sharedDriveIds?: Array<string>;
	}

	/** The shared drives to search */
	export interface SharedDriveInfoFormProperties {
	}
	export function CreateSharedDriveInfoFormGroup() {
		return new FormGroup<SharedDriveInfoFormProperties>({
		});

	}


	/** The published site URLs of new Google Sites to search */
	export interface SitesUrlInfo {

		/** A list of published site URLs. */
		urls?: Array<string>;
	}

	/** The published site URLs of new Google Sites to search */
	export interface SitesUrlInfoFormProperties {
	}
	export function CreateSitesUrlInfoFormGroup() {
		return new FormGroup<SitesUrlInfoFormProperties>({
		});

	}


	/** Team Drives to search */
	export interface TeamDriveInfo {

		/** List of Team Drive IDs, as provided by the [Drive API](https://developers.google.com/drive). */
		teamDriveIds?: Array<string>;
	}

	/** Team Drives to search */
	export interface TeamDriveInfoFormProperties {
	}
	export function CreateTeamDriveInfoFormGroup() {
		return new FormGroup<TeamDriveInfoFormProperties>({
		});

	}


	/** Additional options for Voice search */
	export interface VoiceOptions {

		/** Datatypes to search */
		coveredData?: Array<string>;
	}

	/** Additional options for Voice search */
	export interface VoiceOptionsFormProperties {
	}
	export function CreateVoiceOptionsFormGroup() {
		return new FormGroup<VoiceOptionsFormProperties>({
		});

	}


	/** Count artifacts request. */
	export interface CountArtifactsRequest {

		/** The query definition used for search and export. */
		query?: Query;

		/** Sets the granularity of the count results. */
		view?: CountArtifactsRequestView | null;
	}

	/** Count artifacts request. */
	export interface CountArtifactsRequestFormProperties {

		/** Sets the granularity of the count results. */
		view: FormControl<CountArtifactsRequestView | null | undefined>,
	}
	export function CreateCountArtifactsRequestFormGroup() {
		return new FormGroup<CountArtifactsRequestFormProperties>({
			view: new FormControl<CountArtifactsRequestView | null | undefined>(undefined),
		});

	}

	export enum CountArtifactsRequestView { COUNT_RESULT_VIEW_UNSPECIFIED = 0, TOTAL_COUNT = 1, ALL = 2 }


	/** Definition of the response for method CountArtifacts. */
	export interface CountArtifactsResponse {

		/** Groups specific count metrics. */
		groupsCountResult?: GroupsCountResult;

		/** Gmail and classic Hangouts-specific count metrics. */
		mailCountResult?: MailCountResult;

		/** Total count of messages. */
		totalCount?: string | null;
	}

	/** Definition of the response for method CountArtifacts. */
	export interface CountArtifactsResponseFormProperties {

		/** Total count of messages. */
		totalCount: FormControl<string | null | undefined>,
	}
	export function CreateCountArtifactsResponseFormGroup() {
		return new FormGroup<CountArtifactsResponseFormProperties>({
			totalCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Groups specific count metrics. */
	export interface GroupsCountResult {

		/** Error occurred when querying these accounts. */
		accountCountErrors?: Array<AccountCountError>;

		/** Subtotal count per matching account that have more than zero messages. */
		accountCounts?: Array<AccountCount>;

		/** Total number of accounts that can be queried and have more than zero messages. */
		matchingAccountsCount?: string | null;

		/** When **DataScope** is **HELD_DATA**, these accounts in the request are not queried because they are not on hold. For other data scope, this field is not set. */
		nonQueryableAccounts?: Array<string>;

		/** Total number of accounts involved in this count operation. */
		queriedAccountsCount?: string | null;
	}

	/** Groups specific count metrics. */
	export interface GroupsCountResultFormProperties {

		/** Total number of accounts that can be queried and have more than zero messages. */
		matchingAccountsCount: FormControl<string | null | undefined>,

		/** Total number of accounts involved in this count operation. */
		queriedAccountsCount: FormControl<string | null | undefined>,
	}
	export function CreateGroupsCountResultFormGroup() {
		return new FormGroup<GroupsCountResultFormProperties>({
			matchingAccountsCount: new FormControl<string | null | undefined>(undefined),
			queriedAccountsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Gmail and classic Hangouts-specific count metrics. */
	export interface MailCountResult {

		/** Errors occurred when querying these accounts. */
		accountCountErrors?: Array<AccountCountError>;

		/** Subtotal count per matching account that have more than zero messages. */
		accountCounts?: Array<AccountCount>;

		/** Total number of accounts that can be queried and have more than zero messages. */
		matchingAccountsCount?: string | null;

		/** When **DataScope** is **HELD_DATA** and when account emails are passed in explicitly, the list of accounts in the request that are not queried because they are not on hold in the matter. For other data scopes, this field is not set. */
		nonQueryableAccounts?: Array<string>;

		/** Total number of accounts involved in this count operation. */
		queriedAccountsCount?: string | null;
	}

	/** Gmail and classic Hangouts-specific count metrics. */
	export interface MailCountResultFormProperties {

		/** Total number of accounts that can be queried and have more than zero messages. */
		matchingAccountsCount: FormControl<string | null | undefined>,

		/** Total number of accounts involved in this count operation. */
		queriedAccountsCount: FormControl<string | null | undefined>,
	}
	export function CreateMailCountResultFormGroup() {
		return new FormGroup<MailCountResultFormProperties>({
			matchingAccountsCount: new FormControl<string | null | undefined>(undefined),
			queriedAccountsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for Drive exports. */
	export interface DriveExportOptions {

		/** To include access level information for users with [indirect access](https://support.google.com/vault/answer/6099459#metadata) to files, set to **true**. */
		includeAccessInfo?: boolean | null;
	}

	/** Options for Drive exports. */
	export interface DriveExportOptionsFormProperties {

		/** To include access level information for users with [indirect access](https://support.google.com/vault/answer/6099459#metadata) to files, set to **true**. */
		includeAccessInfo: FormControl<boolean | null | undefined>,
	}
	export function CreateDriveExportOptionsFormGroup() {
		return new FormGroup<DriveExportOptionsFormProperties>({
			includeAccessInfo: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** An export. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege. */
	export interface Export {

		/** Export sink for Cloud Storage files. */
		cloudStorageSink?: CloudStorageSink;

		/** Output only. The time when the export was created. */
		createTime?: string | null;

		/** Additional options for exports */
		exportOptions?: ExportOptions;

		/** Output only. The generated export ID. */
		id?: string | null;

		/** Output only. The matter ID. */
		matterId?: string | null;

		/** The export name. Don't use special characters (~!$'(),;@:/?) in the name, they can prevent you from downloading exports. */
		name?: string | null;

		/** Output only. Identifies the parent export that spawned this child export. This is only set on child exports. */
		parentExportId?: string | null;

		/** The query definition used for search and export. */
		query?: Query;

		/** User's information. */
		requester?: UserInfo;

		/** Progress information for an export. */
		stats?: ExportStats;

		/** Output only. The status of the export. */
		status?: ExportStatus | null;
	}

	/** An export. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege. */
	export interface ExportFormProperties {

		/** Output only. The time when the export was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The generated export ID. */
		id: FormControl<string | null | undefined>,

		/** Output only. The matter ID. */
		matterId: FormControl<string | null | undefined>,

		/** The export name. Don't use special characters (~!$'(),;@:/?) in the name, they can prevent you from downloading exports. */
		name: FormControl<string | null | undefined>,

		/** Output only. Identifies the parent export that spawned this child export. This is only set on child exports. */
		parentExportId: FormControl<string | null | undefined>,

		/** Output only. The status of the export. */
		status: FormControl<ExportStatus | null | undefined>,
	}
	export function CreateExportFormGroup() {
		return new FormGroup<ExportFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			matterId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentExportId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ExportStatus | null | undefined>(undefined),
		});

	}


	/** Additional options for exports */
	export interface ExportOptions {

		/** The options for Calendar exports. */
		calendarOptions?: CalendarExportOptions;

		/** Options for Drive exports. */
		driveOptions?: DriveExportOptions;

		/** Options for Groups exports. */
		groupsOptions?: GroupsExportOptions;

		/** Options for Chat exports. */
		hangoutsChatOptions?: HangoutsChatExportOptions;

		/** Options for Gmail exports. */
		mailOptions?: MailExportOptions;

		/** The requested data region for the export. */
		region?: ExportOptionsRegion | null;

		/** The options for Voice exports. */
		voiceOptions?: VoiceExportOptions;
	}

	/** Additional options for exports */
	export interface ExportOptionsFormProperties {

		/** The requested data region for the export. */
		region: FormControl<ExportOptionsRegion | null | undefined>,
	}
	export function CreateExportOptionsFormGroup() {
		return new FormGroup<ExportOptionsFormProperties>({
			region: new FormControl<ExportOptionsRegion | null | undefined>(undefined),
		});

	}


	/** Options for Groups exports. */
	export interface GroupsExportOptions {

		/** The file format for exported messages. */
		exportFormat?: CalendarExportOptionsExportFormat | null;
	}

	/** Options for Groups exports. */
	export interface GroupsExportOptionsFormProperties {

		/** The file format for exported messages. */
		exportFormat: FormControl<CalendarExportOptionsExportFormat | null | undefined>,
	}
	export function CreateGroupsExportOptionsFormGroup() {
		return new FormGroup<GroupsExportOptionsFormProperties>({
			exportFormat: new FormControl<CalendarExportOptionsExportFormat | null | undefined>(undefined),
		});

	}


	/** Options for Chat exports. */
	export interface HangoutsChatExportOptions {

		/** The file format for exported messages. */
		exportFormat?: CalendarExportOptionsExportFormat | null;
	}

	/** Options for Chat exports. */
	export interface HangoutsChatExportOptionsFormProperties {

		/** The file format for exported messages. */
		exportFormat: FormControl<CalendarExportOptionsExportFormat | null | undefined>,
	}
	export function CreateHangoutsChatExportOptionsFormGroup() {
		return new FormGroup<HangoutsChatExportOptionsFormProperties>({
			exportFormat: new FormControl<CalendarExportOptionsExportFormat | null | undefined>(undefined),
		});

	}


	/** Options for Gmail exports. */
	export interface MailExportOptions {

		/** The file format for exported messages. */
		exportFormat?: CalendarExportOptionsExportFormat | null;

		/** Optional. To enable exporting linked Drive files, set to **true**. */
		exportLinkedDriveFiles?: boolean | null;

		/** To export confidential mode content, set to **true**. */
		showConfidentialModeContent?: boolean | null;

		/** To use the new export system, set to **true**. */
		useNewExport?: boolean | null;
	}

	/** Options for Gmail exports. */
	export interface MailExportOptionsFormProperties {

		/** The file format for exported messages. */
		exportFormat: FormControl<CalendarExportOptionsExportFormat | null | undefined>,

		/** Optional. To enable exporting linked Drive files, set to **true**. */
		exportLinkedDriveFiles: FormControl<boolean | null | undefined>,

		/** To export confidential mode content, set to **true**. */
		showConfidentialModeContent: FormControl<boolean | null | undefined>,

		/** To use the new export system, set to **true**. */
		useNewExport: FormControl<boolean | null | undefined>,
	}
	export function CreateMailExportOptionsFormGroup() {
		return new FormGroup<MailExportOptionsFormProperties>({
			exportFormat: new FormControl<CalendarExportOptionsExportFormat | null | undefined>(undefined),
			exportLinkedDriveFiles: new FormControl<boolean | null | undefined>(undefined),
			showConfidentialModeContent: new FormControl<boolean | null | undefined>(undefined),
			useNewExport: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ExportOptionsRegion { EXPORT_REGION_UNSPECIFIED = 0, ANY = 1, US = 2, EUROPE = 3 }


	/** The options for Voice exports. */
	export interface VoiceExportOptions {

		/** The file format for exported text messages. */
		exportFormat?: CalendarExportOptionsExportFormat | null;
	}

	/** The options for Voice exports. */
	export interface VoiceExportOptionsFormProperties {

		/** The file format for exported text messages. */
		exportFormat: FormControl<CalendarExportOptionsExportFormat | null | undefined>,
	}
	export function CreateVoiceExportOptionsFormGroup() {
		return new FormGroup<VoiceExportOptionsFormProperties>({
			exportFormat: new FormControl<CalendarExportOptionsExportFormat | null | undefined>(undefined),
		});

	}


	/** Progress information for an export. */
	export interface ExportStats {

		/** The number of messages or files already processed for export. */
		exportedArtifactCount?: string | null;

		/** The size of export in bytes. */
		sizeInBytes?: string | null;

		/** The number of messages or files to be exported. */
		totalArtifactCount?: string | null;
	}

	/** Progress information for an export. */
	export interface ExportStatsFormProperties {

		/** The number of messages or files already processed for export. */
		exportedArtifactCount: FormControl<string | null | undefined>,

		/** The size of export in bytes. */
		sizeInBytes: FormControl<string | null | undefined>,

		/** The number of messages or files to be exported. */
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


	/** The organizational unit covered by a hold. This structure is immutable. */
	export interface HeldOrgUnit {

		/** When the organizational unit was put on hold. This property is immutable. */
		holdTime?: string | null;

		/** The organizational unit's immutable ID as provided by the [Admin SDK](https://developers.google.com/admin-sdk/). */
		orgUnitId?: string | null;
	}

	/** The organizational unit covered by a hold. This structure is immutable. */
	export interface HeldOrgUnitFormProperties {

		/** When the organizational unit was put on hold. This property is immutable. */
		holdTime: FormControl<string | null | undefined>,

		/** The organizational unit's immutable ID as provided by the [Admin SDK](https://developers.google.com/admin-sdk/). */
		orgUnitId: FormControl<string | null | undefined>,
	}
	export function CreateHeldOrgUnitFormGroup() {
		return new FormGroup<HeldOrgUnitFormProperties>({
			holdTime: new FormControl<string | null | undefined>(undefined),
			orgUnitId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A hold. A hold prevents the specified Google Workspace service from purging data for specific accounts or all members of an organizational unit. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege. */
	export interface Hold {

		/** If set, the hold applies to the specified accounts and **orgUnit** must be empty. */
		accounts?: Array<HeldAccount>;

		/** The service to be searched. */
		corpus?: QueryCorpus | null;

		/** The unique immutable ID of the hold. Assigned during creation. */
		holdId?: string | null;

		/** The name of the hold. */
		name?: string | null;

		/** The organizational unit covered by a hold. This structure is immutable. */
		orgUnit?: HeldOrgUnit;

		/** Service-specific options for holds. */
		query?: CorpusQuery;

		/** The last time this hold was modified. */
		updateTime?: string | null;
	}

	/** A hold. A hold prevents the specified Google Workspace service from purging data for specific accounts or all members of an organizational unit. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege. */
	export interface HoldFormProperties {

		/** The service to be searched. */
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


	/** The exports for a matter. */
	export interface ListExportsResponse {

		/** The list of exports. */
		exports?: Array<Export>;

		/** Page token to retrieve the next page of results in the list. */
		nextPageToken?: string | null;
	}

	/** The exports for a matter. */
	export interface ListExportsResponseFormProperties {

		/** Page token to retrieve the next page of results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListExportsResponseFormGroup() {
		return new FormGroup<ListExportsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns a list of the accounts covered by a hold. */
	export interface ListHeldAccountsResponse {

		/** The held accounts on a hold. */
		accounts?: Array<HeldAccount>;
	}

	/** Returns a list of the accounts covered by a hold. */
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

		/** Page token to retrieve the next page of results in the list. If this is empty, then there are no more holds to list. */
		nextPageToken?: string | null;
	}

	/** The holds for a matter. */
	export interface ListHoldsResponseFormProperties {

		/** Page token to retrieve the next page of results in the list. If this is empty, then there are no more holds to list. */
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


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Definition of the response for method ListSaveQuery. */
	export interface ListSavedQueriesResponse {

		/** Page token to retrieve the next page of results in the list. If this is empty, then there are no more saved queries to list. */
		nextPageToken?: string | null;

		/** List of saved queries. */
		savedQueries?: Array<SavedQuery>;
	}

	/** Definition of the response for method ListSaveQuery. */
	export interface ListSavedQueriesResponseFormProperties {

		/** Page token to retrieve the next page of results in the list. If this is empty, then there are no more saved queries to list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSavedQueriesResponseFormGroup() {
		return new FormGroup<ListSavedQueriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The definition of a saved query. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege. */
	export interface SavedQuery {

		/** Output only. The server-generated timestamp when the saved query was created. */
		createTime?: string | null;

		/** The name of the saved query. */
		displayName?: string | null;

		/** Output only. The matter ID of the matter the saved query is saved in. The server does not use this field during create and always uses matter ID in the URL. */
		matterId?: string | null;

		/** The query definition used for search and export. */
		query?: Query;

		/** A unique identifier for the saved query. */
		savedQueryId?: string | null;
	}

	/** The definition of a saved query. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege. */
	export interface SavedQueryFormProperties {

		/** Output only. The server-generated timestamp when the saved query was created. */
		createTime: FormControl<string | null | undefined>,

		/** The name of the saved query. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The matter ID of the matter the saved query is saved in. The server does not use this field during create and always uses matter ID in the URL. */
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

		/** The account IDs of the accounts to remove from the hold. */
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

		/** A list of statuses for the deleted accounts. Results have the same order as the request. */
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

		/** Represents a matter. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege. */
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
		 * Lists matters the requestor has access to.
		 * Get v1/matters
		 * @param {number} pageSize The number of matters to return in the response. Default and maximum are 100.
		 * @param {string} pageToken The pagination token as returned in the response.
		 * @param {MatterState} state If set, lists only matters with the specified state. The default lists matters of all states.
		 * @param {Vault_matters_listView} view Specifies how much information about the matter to return in response.
		 * @return {ListMattersResponse} Successful response
		 */
		Vault_matters_list(pageSize: number | null | undefined, pageToken: string | null | undefined, state: MatterState | null | undefined, view: Vault_matters_listView | null | undefined): Observable<ListMattersResponse> {
			return this.http.get<ListMattersResponse>(this.baseUri + 'v1/matters?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&state=' + state + '&view=' + view, {});
		}

		/**
		 * Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.
		 * Post v1/matters
		 * @return {Matter} Successful response
		 */
		Vault_matters_create(requestBody: Matter): Observable<Matter> {
			return this.http.post<Matter>(this.baseUri + 'v1/matters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified matter. Returns the matter with updated state.
		 * Delete v1/matters/{matterId}
		 * @param {string} matterId The matter ID
		 * @return {Matter} Successful response
		 */
		Vault_matters_delete(matterId: string): Observable<Matter> {
			return this.http.delete<Matter>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)), {});
		}

		/**
		 * Gets the specified matter.
		 * Get v1/matters/{matterId}
		 * @param {string} matterId The matter ID.
		 * @param {Vault_matters_listView} view Specifies how much information about the matter to return in the response.
		 * @return {Matter} Successful response
		 */
		Vault_matters_get(matterId: string, view: Vault_matters_listView | null | undefined): Observable<Matter> {
			return this.http.get<Matter>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '&view=' + view, {});
		}

		/**
		 * Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.
		 * Put v1/matters/{matterId}
		 * @param {string} matterId The matter ID.
		 * @return {Matter} Successful response
		 */
		Vault_matters_update(matterId: string, requestBody: Matter): Observable<Matter> {
			return this.http.put<Matter>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists details about the exports in the specified matter.
		 * Get v1/matters/{matterId}/exports
		 * @param {string} matterId The matter ID.
		 * @param {number} pageSize The number of exports to return in the response.
		 * @param {string} pageToken The pagination token as returned in the response.
		 * @return {ListExportsResponse} Successful response
		 */
		Vault_matters_exports_list(matterId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListExportsResponse> {
			return this.http.get<ListExportsResponse>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/exports&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an export.
		 * Post v1/matters/{matterId}/exports
		 * @param {string} matterId The matter ID.
		 * @return {Export} Successful response
		 */
		Vault_matters_exports_create(matterId: string, requestBody: Export): Observable<Export> {
			return this.http.post<Export>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/exports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an export.
		 * Delete v1/matters/{matterId}/exports/{exportId}
		 * @param {string} matterId The matter ID.
		 * @param {string} exportId The export ID.
		 * @return {Empty} Successful response
		 */
		Vault_matters_exports_delete(matterId: string, exportId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/exports/' + (exportId == null ? '' : encodeURIComponent(exportId)), {});
		}

		/**
		 * Gets an export.
		 * Get v1/matters/{matterId}/exports/{exportId}
		 * @param {string} matterId The matter ID.
		 * @param {string} exportId The export ID.
		 * @return {Export} Successful response
		 */
		Vault_matters_exports_get(matterId: string, exportId: string): Observable<Export> {
			return this.http.get<Export>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/exports/' + (exportId == null ? '' : encodeURIComponent(exportId)), {});
		}

		/**
		 * Lists the holds in a matter.
		 * Get v1/matters/{matterId}/holds
		 * @param {string} matterId The matter ID.
		 * @param {number} pageSize The number of holds to return in the response, between 0 and 100 inclusive. Leaving this empty, or as 0, is the same as **page_size** = 100.
		 * @param {string} pageToken The pagination token as returned in the response. An empty token means start from the beginning.
		 * @param {Vault_matters_holds_listView} view The amount of detail to return for a hold.
		 * @return {ListHoldsResponse} Successful response
		 */
		Vault_matters_holds_list(matterId: string, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Vault_matters_holds_listView | null | undefined): Observable<ListHoldsResponse> {
			return this.http.get<ListHoldsResponse>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a hold in the specified matter.
		 * Post v1/matters/{matterId}/holds
		 * @param {string} matterId The matter ID.
		 * @return {Hold} Successful response
		 */
		Vault_matters_holds_create(matterId: string, requestBody: Hold): Observable<Hold> {
			return this.http.post<Hold>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.
		 * Delete v1/matters/{matterId}/holds/{holdId}
		 * @param {string} matterId The matter ID.
		 * @param {string} holdId The hold ID.
		 * @return {Empty} Successful response
		 */
		Vault_matters_holds_delete(matterId: string, holdId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds/' + (holdId == null ? '' : encodeURIComponent(holdId)), {});
		}

		/**
		 * Gets the specified hold.
		 * Get v1/matters/{matterId}/holds/{holdId}
		 * @param {string} matterId The matter ID.
		 * @param {string} holdId The hold ID.
		 * @param {Vault_matters_holds_listView} view The amount of detail to return for a hold.
		 * @return {Hold} Successful response
		 */
		Vault_matters_holds_get(matterId: string, holdId: string, view: Vault_matters_holds_listView | null | undefined): Observable<Hold> {
			return this.http.get<Hold>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds/' + (holdId == null ? '' : encodeURIComponent(holdId)) + '&view=' + view, {});
		}

		/**
		 * Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.
		 * Put v1/matters/{matterId}/holds/{holdId}
		 * @param {string} matterId The matter ID.
		 * @param {string} holdId The ID of the hold.
		 * @return {Hold} Successful response
		 */
		Vault_matters_holds_update(matterId: string, holdId: string, requestBody: Hold): Observable<Hold> {
			return this.http.put<Hold>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds/' + (holdId == null ? '' : encodeURIComponent(holdId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.
		 * Get v1/matters/{matterId}/holds/{holdId}/accounts
		 * @param {string} matterId The matter ID.
		 * @param {string} holdId The hold ID.
		 * @return {ListHeldAccountsResponse} Successful response
		 */
		Vault_matters_holds_accounts_list(matterId: string, holdId: string): Observable<ListHeldAccountsResponse> {
			return this.http.get<ListHeldAccountsResponse>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds/' + (holdId == null ? '' : encodeURIComponent(holdId)) + '/accounts', {});
		}

		/**
		 * Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.
		 * Post v1/matters/{matterId}/holds/{holdId}/accounts
		 * @param {string} matterId The matter ID.
		 * @param {string} holdId The hold ID.
		 * @return {HeldAccount} Successful response
		 */
		Vault_matters_holds_accounts_create(matterId: string, holdId: string, requestBody: HeldAccount): Observable<HeldAccount> {
			return this.http.post<HeldAccount>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds/' + (holdId == null ? '' : encodeURIComponent(holdId)) + '/accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes an account from a hold.
		 * Delete v1/matters/{matterId}/holds/{holdId}/accounts/{accountId}
		 * @param {string} matterId The matter ID.
		 * @param {string} holdId The hold ID.
		 * @param {string} accountId The ID of the account to remove from the hold.
		 * @return {Empty} Successful response
		 */
		Vault_matters_holds_accounts_delete(matterId: string, holdId: string, accountId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds/' + (holdId == null ? '' : encodeURIComponent(holdId)) + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)), {});
		}

		/**
		 * Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.
		 * Post v1/matters/{matterId}/holds/{holdId}:addHeldAccounts
		 * @param {string} matterId The matter ID.
		 * @param {string} holdId The hold ID.
		 * @return {AddHeldAccountsResponse} Successful response
		 */
		Vault_matters_holds_addHeldAccounts(matterId: string, holdId: string, requestBody: AddHeldAccountsRequest): Observable<AddHeldAccountsResponse> {
			return this.http.post<AddHeldAccountsResponse>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds/' + (holdId == null ? '' : encodeURIComponent(holdId)) + ':addHeldAccounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.
		 * Post v1/matters/{matterId}/holds/{holdId}:removeHeldAccounts
		 * @param {string} matterId The matter ID.
		 * @param {string} holdId The hold ID.
		 * @return {RemoveHeldAccountsResponse} Successful response
		 */
		Vault_matters_holds_removeHeldAccounts(matterId: string, holdId: string, requestBody: RemoveHeldAccountsRequest): Observable<RemoveHeldAccountsResponse> {
			return this.http.post<RemoveHeldAccountsResponse>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/holds/' + (holdId == null ? '' : encodeURIComponent(holdId)) + ':removeHeldAccounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the saved queries in a matter.
		 * Get v1/matters/{matterId}/savedQueries
		 * @param {string} matterId The ID of the matter to get the saved queries for.
		 * @param {number} pageSize The maximum number of saved queries to return.
		 * @param {string} pageToken The pagination token as returned in the previous response. An empty token means start from the beginning.
		 * @return {ListSavedQueriesResponse} Successful response
		 */
		Vault_matters_savedQueries_list(matterId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSavedQueriesResponse> {
			return this.http.get<ListSavedQueriesResponse>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/savedQueries&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a saved query.
		 * Post v1/matters/{matterId}/savedQueries
		 * @param {string} matterId The ID of the matter to create the saved query in.
		 * @return {SavedQuery} Successful response
		 */
		Vault_matters_savedQueries_create(matterId: string, requestBody: SavedQuery): Observable<SavedQuery> {
			return this.http.post<SavedQuery>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/savedQueries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified saved query.
		 * Delete v1/matters/{matterId}/savedQueries/{savedQueryId}
		 * @param {string} matterId The ID of the matter to delete the saved query from.
		 * @param {string} savedQueryId ID of the saved query to delete.
		 * @return {Empty} Successful response
		 */
		Vault_matters_savedQueries_delete(matterId: string, savedQueryId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/savedQueries/' + (savedQueryId == null ? '' : encodeURIComponent(savedQueryId)), {});
		}

		/**
		 * Retrieves the specified saved query.
		 * Get v1/matters/{matterId}/savedQueries/{savedQueryId}
		 * @param {string} matterId The ID of the matter to get the saved query from.
		 * @param {string} savedQueryId ID of the saved query to retrieve.
		 * @return {SavedQuery} Successful response
		 */
		Vault_matters_savedQueries_get(matterId: string, savedQueryId: string): Observable<SavedQuery> {
			return this.http.get<SavedQuery>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + '/savedQueries/' + (savedQueryId == null ? '' : encodeURIComponent(savedQueryId)), {});
		}

		/**
		 * Adds an account as a matter collaborator.
		 * Post v1/matters/{matterId}:addPermissions
		 * @param {string} matterId The matter ID.
		 * @return {MatterPermission} Successful response
		 */
		Vault_matters_addPermissions(matterId: string, requestBody: AddMatterPermissionsRequest): Observable<MatterPermission> {
			return this.http.post<MatterPermission>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + ':addPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Closes the specified matter. Returns the matter with updated state.
		 * Post v1/matters/{matterId}:close
		 * @param {string} matterId The matter ID.
		 * @return {CloseMatterResponse} Successful response
		 */
		Vault_matters_close(matterId: string, requestBody: CloseMatterRequest): Observable<CloseMatterResponse> {
			return this.http.post<CloseMatterResponse>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + ':close', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Counts the accounts processed by the specified query.
		 * Post v1/matters/{matterId}:count
		 * @param {string} matterId The matter ID.
		 * @return {Operation} Successful response
		 */
		Vault_matters_count(matterId: string, requestBody: CountArtifactsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + ':count', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes an account as a matter collaborator.
		 * Post v1/matters/{matterId}:removePermissions
		 * @param {string} matterId The matter ID.
		 * @return {Empty} Successful response
		 */
		Vault_matters_removePermissions(matterId: string, requestBody: RemoveMatterPermissionsRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + ':removePermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reopens the specified matter. Returns the matter with updated state.
		 * Post v1/matters/{matterId}:reopen
		 * @param {string} matterId The matter ID.
		 * @return {ReopenMatterResponse} Successful response
		 */
		Vault_matters_reopen(matterId: string, requestBody: ReopenMatterRequest): Observable<ReopenMatterResponse> {
			return this.http.post<ReopenMatterResponse>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + ':reopen', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Undeletes the specified matter. Returns the matter with updated state.
		 * Post v1/matters/{matterId}:undelete
		 * @param {string} matterId The matter ID.
		 * @return {Matter} Successful response
		 */
		Vault_matters_undelete(matterId: string, requestBody: UndeleteMatterRequest): Observable<Matter> {
			return this.http.post<Matter>(this.baseUri + 'v1/matters/' + (matterId == null ? '' : encodeURIComponent(matterId)) + ':undelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {Empty} Successful response
		 */
		Vault_operations_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Vault_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Vault_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Vault_matters_listView { VIEW_UNSPECIFIED = 0, BASIC = 1, FULL = 2 }

	export enum Vault_matters_holds_listView { HOLD_VIEW_UNSPECIFIED = 0, BASIC_HOLD = 1, FULL_HOLD = 2 }

}

