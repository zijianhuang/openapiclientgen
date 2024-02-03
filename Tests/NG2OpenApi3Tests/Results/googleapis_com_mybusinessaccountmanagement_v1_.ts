import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request message for AccessControl.AcceptInvitation. */
	export interface AcceptInvitationRequest {
	}

	/** Request message for AccessControl.AcceptInvitation. */
	export interface AcceptInvitationRequestFormProperties {
	}
	export function CreateAcceptInvitationRequestFormGroup() {
		return new FormGroup<AcceptInvitationRequestFormProperties>({
		});

	}


	/** An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325). */
	export interface Account {

		/** Required. The name of the account. For an account of type `PERSONAL`, this is the first and last name of the user account. */
		accountName?: string | null;

		/** Output only. Account reference number if provisioned. */
		accountNumber?: string | null;

		/** Immutable. The resource name, in the format `accounts/{account_id}`. */
		name?: string | null;

		/** Additional information stored for an organization. */
		organizationInfo?: OrganizationInfo;

		/** Output only. Specifies the permission level the user has for this account. */
		permissionLevel?: AccountPermissionLevel | null;

		/** Required. Input only. The resource name of the account which will be the primary owner of the account being created. It should be of the form `accounts/{account_id}`. */
		primaryOwner?: string | null;

		/** Output only. Specifies the AccountRole of this account. */
		role?: AccountRole | null;

		/** Required. Contains the type of account. Accounts of type PERSONAL and ORGANIZATION cannot be created using this API. */
		type?: AccountType | null;

		/** Output only. If verified, future locations that are created are automatically connected to Google Maps, and have Google+ pages created, without requiring moderation. */
		verificationState?: AccountVerificationState | null;

		/** Output only. Indicates whether the account is vetted by Google. A vetted account is able to verify locations via the VETTED_PARTNER method. */
		vettedState?: AccountVettedState | null;
	}

	/** An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325). */
	export interface AccountFormProperties {

		/** Required. The name of the account. For an account of type `PERSONAL`, this is the first and last name of the user account. */
		accountName: FormControl<string | null | undefined>,

		/** Output only. Account reference number if provisioned. */
		accountNumber: FormControl<string | null | undefined>,

		/** Immutable. The resource name, in the format `accounts/{account_id}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Specifies the permission level the user has for this account. */
		permissionLevel: FormControl<AccountPermissionLevel | null | undefined>,

		/** Required. Input only. The resource name of the account which will be the primary owner of the account being created. It should be of the form `accounts/{account_id}`. */
		primaryOwner: FormControl<string | null | undefined>,

		/** Output only. Specifies the AccountRole of this account. */
		role: FormControl<AccountRole | null | undefined>,

		/** Required. Contains the type of account. Accounts of type PERSONAL and ORGANIZATION cannot be created using this API. */
		type: FormControl<AccountType | null | undefined>,

		/** Output only. If verified, future locations that are created are automatically connected to Google Maps, and have Google+ pages created, without requiring moderation. */
		verificationState: FormControl<AccountVerificationState | null | undefined>,

		/** Output only. Indicates whether the account is vetted by Google. A vetted account is able to verify locations via the VETTED_PARTNER method. */
		vettedState: FormControl<AccountVettedState | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			permissionLevel: new FormControl<AccountPermissionLevel | null | undefined>(undefined),
			primaryOwner: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<AccountRole | null | undefined>(undefined),
			type: new FormControl<AccountType | null | undefined>(undefined),
			verificationState: new FormControl<AccountVerificationState | null | undefined>(undefined),
			vettedState: new FormControl<AccountVettedState | null | undefined>(undefined),
		});

	}


	/** Additional information stored for an organization. */
	export interface OrganizationInfo {

		/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
		address?: PostalAddress;

		/** Output only. The contact number for the organization. */
		phoneNumber?: string | null;

		/** Output only. The registered domain for the account. */
		registeredDomain?: string | null;
	}

	/** Additional information stored for an organization. */
	export interface OrganizationInfoFormProperties {

		/** Output only. The contact number for the organization. */
		phoneNumber: FormControl<string | null | undefined>,

		/** Output only. The registered domain for the account. */
		registeredDomain: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationInfoFormGroup() {
		return new FormGroup<OrganizationInfoFormProperties>({
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			registeredDomain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
	export interface PostalAddress {

		/** Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas). */
		addressLines?: Array<string>;

		/** Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated. */
		administrativeArea?: string | null;

		/** Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en". */
		languageCode?: string | null;

		/** Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines. */
		locality?: string | null;

		/** Optional. The name of the organization at the address. */
		organization?: string | null;

		/** Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.). */
		postalCode?: string | null;

		/** Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information. */
		recipients?: Array<string>;

		/** Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. */
		regionCode?: string | null;

		/** The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions. */
		revision?: number | null;

		/** Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire). */
		sortingCode?: string | null;

		/** Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts. */
		sublocality?: string | null;
	}

	/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
	export interface PostalAddressFormProperties {

		/** Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated. */
		administrativeArea: FormControl<string | null | undefined>,

		/** Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en". */
		languageCode: FormControl<string | null | undefined>,

		/** Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines. */
		locality: FormControl<string | null | undefined>,

		/** Optional. The name of the organization at the address. */
		organization: FormControl<string | null | undefined>,

		/** Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.). */
		postalCode: FormControl<string | null | undefined>,

		/** Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. */
		regionCode: FormControl<string | null | undefined>,

		/** The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions. */
		revision: FormControl<number | null | undefined>,

		/** Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire). */
		sortingCode: FormControl<string | null | undefined>,

		/** Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts. */
		sublocality: FormControl<string | null | undefined>,
	}
	export function CreatePostalAddressFormGroup() {
		return new FormGroup<PostalAddressFormProperties>({
			administrativeArea: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			organization: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<number | null | undefined>(undefined),
			sortingCode: new FormControl<string | null | undefined>(undefined),
			sublocality: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccountPermissionLevel { PERMISSION_LEVEL_UNSPECIFIED = 'PERMISSION_LEVEL_UNSPECIFIED', OWNER_LEVEL = 'OWNER_LEVEL', MEMBER_LEVEL = 'MEMBER_LEVEL' }

	export enum AccountRole { ACCOUNT_ROLE_UNSPECIFIED = 'ACCOUNT_ROLE_UNSPECIFIED', PRIMARY_OWNER = 'PRIMARY_OWNER', OWNER = 'OWNER', MANAGER = 'MANAGER', SITE_MANAGER = 'SITE_MANAGER' }

	export enum AccountType { ACCOUNT_TYPE_UNSPECIFIED = 'ACCOUNT_TYPE_UNSPECIFIED', PERSONAL = 'PERSONAL', LOCATION_GROUP = 'LOCATION_GROUP', USER_GROUP = 'USER_GROUP', ORGANIZATION = 'ORGANIZATION' }

	export enum AccountVerificationState { VERIFICATION_STATE_UNSPECIFIED = 'VERIFICATION_STATE_UNSPECIFIED', VERIFIED = 'VERIFIED', UNVERIFIED = 'UNVERIFIED', VERIFICATION_REQUESTED = 'VERIFICATION_REQUESTED' }

	export enum AccountVettedState { VETTED_STATE_UNSPECIFIED = 'VETTED_STATE_UNSPECIFIED', NOT_VETTED = 'NOT_VETTED', VETTED = 'VETTED', INVALID = 'INVALID' }


	/** An administrator of an Account or a location. */
	export interface Admin {

		/** Immutable. The name of the Account resource that this Admin refers to. Used when calling locations.admins.create to invite a LocationGroup as an admin. If both this field and `admin` are set on `CREATE` requests, this field takes precedence and the email address in `admin` will be ignored. Format: `accounts/{account}`. */
		account?: string | null;

		/** Optional. The name of the admin. When making the initial invitation, this is the invitee's email address. On `GET` calls, the user's email address is returned if the invitation is still pending. Otherwise, it contains the user's first and last names. This field is only needed to be set during admin creation. */
		admin?: string | null;

		/** Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `locations/{location_id}/admins/{admin_id}` This field will be ignored if set during admin creation. */
		name?: string | null;

		/** Output only. Indicates whether this admin has a pending invitation for the specified resource. */
		pendingInvitation?: boolean | null;

		/** Required. Specifies the role that this admin uses with the specified Account or Location. */
		role?: AdminRole | null;
	}

	/** An administrator of an Account or a location. */
	export interface AdminFormProperties {

		/** Immutable. The name of the Account resource that this Admin refers to. Used when calling locations.admins.create to invite a LocationGroup as an admin. If both this field and `admin` are set on `CREATE` requests, this field takes precedence and the email address in `admin` will be ignored. Format: `accounts/{account}`. */
		account: FormControl<string | null | undefined>,

		/** Optional. The name of the admin. When making the initial invitation, this is the invitee's email address. On `GET` calls, the user's email address is returned if the invitation is still pending. Otherwise, it contains the user's first and last names. This field is only needed to be set during admin creation. */
		admin: FormControl<string | null | undefined>,

		/** Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `locations/{location_id}/admins/{admin_id}` This field will be ignored if set during admin creation. */
		name: FormControl<string | null | undefined>,

		/** Output only. Indicates whether this admin has a pending invitation for the specified resource. */
		pendingInvitation: FormControl<boolean | null | undefined>,

		/** Required. Specifies the role that this admin uses with the specified Account or Location. */
		role: FormControl<AdminRole | null | undefined>,
	}
	export function CreateAdminFormGroup() {
		return new FormGroup<AdminFormProperties>({
			account: new FormControl<string | null | undefined>(undefined),
			admin: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pendingInvitation: new FormControl<boolean | null | undefined>(undefined),
			role: new FormControl<AdminRole | null | undefined>(undefined),
		});

	}

	export enum AdminRole { ADMIN_ROLE_UNSPECIFIED = 'ADMIN_ROLE_UNSPECIFIED', PRIMARY_OWNER = 'PRIMARY_OWNER', OWNER = 'OWNER', MANAGER = 'MANAGER', SITE_MANAGER = 'SITE_MANAGER' }


	/** Request message for AccessControl.DeclineInvitation. */
	export interface DeclineInvitationRequest {
	}

	/** Request message for AccessControl.DeclineInvitation. */
	export interface DeclineInvitationRequestFormProperties {
	}
	export function CreateDeclineInvitationRequestFormGroup() {
		return new FormGroup<DeclineInvitationRequestFormProperties>({
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


	/** Represents a pending invitation. */
	export interface Invitation {

		/** Required. The resource name for the invitation. `accounts/{account_id}/invitations/{invitation_id}`. */
		name?: string | null;

		/** Output only. The invited role on the account. */
		role?: AdminRole | null;

		/** An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325). */
		targetAccount?: Account;

		/** Represents a target location for a pending invitation. */
		targetLocation?: TargetLocation;

		/** Output only. Specifies which target types should appear in the response. */
		targetType?: InvitationTargetType | null;
	}

	/** Represents a pending invitation. */
	export interface InvitationFormProperties {

		/** Required. The resource name for the invitation. `accounts/{account_id}/invitations/{invitation_id}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The invited role on the account. */
		role: FormControl<AdminRole | null | undefined>,

		/** Output only. Specifies which target types should appear in the response. */
		targetType: FormControl<InvitationTargetType | null | undefined>,
	}
	export function CreateInvitationFormGroup() {
		return new FormGroup<InvitationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<AdminRole | null | undefined>(undefined),
			targetType: new FormControl<InvitationTargetType | null | undefined>(undefined),
		});

	}


	/** Represents a target location for a pending invitation. */
	export interface TargetLocation {

		/** The address of the location to which the user is invited. */
		address?: string | null;

		/** The name of the location to which the user is invited. */
		locationName?: string | null;
	}

	/** Represents a target location for a pending invitation. */
	export interface TargetLocationFormProperties {

		/** The address of the location to which the user is invited. */
		address: FormControl<string | null | undefined>,

		/** The name of the location to which the user is invited. */
		locationName: FormControl<string | null | undefined>,
	}
	export function CreateTargetLocationFormGroup() {
		return new FormGroup<TargetLocationFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			locationName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InvitationTargetType { TARGET_TYPE_UNSPECIFIED = 'TARGET_TYPE_UNSPECIFIED', ACCOUNTS_ONLY = 'ACCOUNTS_ONLY', LOCATIONS_ONLY = 'LOCATIONS_ONLY' }


	/** Response message for AccessControl.ListAccountAdmins. */
	export interface ListAccountAdminsResponse {

		/** A collection of Admin instances. */
		accountAdmins?: Array<Admin>;
	}

	/** Response message for AccessControl.ListAccountAdmins. */
	export interface ListAccountAdminsResponseFormProperties {
	}
	export function CreateListAccountAdminsResponseFormGroup() {
		return new FormGroup<ListAccountAdminsResponseFormProperties>({
		});

	}


	/** Response message for Accounts.ListAccounts. */
	export interface ListAccountsResponse {

		/** A collection of accounts to which the user has access. The personal account of the user doing the query will always be the first item of the result, unless it is filtered out. */
		accounts?: Array<Account>;

		/** If the number of accounts exceeds the requested page size, this field is populated with a token to fetch the next page of accounts on a subsequent call to `accounts.list`. If there are no more accounts, this field is not present in the response. */
		nextPageToken?: string | null;
	}

	/** Response message for Accounts.ListAccounts. */
	export interface ListAccountsResponseFormProperties {

		/** If the number of accounts exceeds the requested page size, this field is populated with a token to fetch the next page of accounts on a subsequent call to `accounts.list`. If there are no more accounts, this field is not present in the response. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountsResponseFormGroup() {
		return new FormGroup<ListAccountsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for AccessControl.ListInvitations. */
	export interface ListInvitationsResponse {

		/** A collection of invitations that are pending for the account. The number of invitations listed here cannot exceed 1000. */
		invitations?: Array<Invitation>;
	}

	/** Response message for AccessControl.ListInvitations. */
	export interface ListInvitationsResponseFormProperties {
	}
	export function CreateListInvitationsResponseFormGroup() {
		return new FormGroup<ListInvitationsResponseFormProperties>({
		});

	}


	/** Response message for AccessControl.ListLocationAdmins. */
	export interface ListLocationAdminsResponse {

		/** A collection of Admins. */
		admins?: Array<Admin>;
	}

	/** Response message for AccessControl.ListLocationAdmins. */
	export interface ListLocationAdminsResponseFormProperties {
	}
	export function CreateListLocationAdminsResponseFormGroup() {
		return new FormGroup<ListLocationAdminsResponseFormProperties>({
		});

	}


	/** Request message for AccessControl.TransferLocation. */
	export interface TransferLocationRequest {

		/** Required. Name of the account resource to transfer the location to (for example, "accounts/{account}"). */
		destinationAccount?: string | null;
	}

	/** Request message for AccessControl.TransferLocation. */
	export interface TransferLocationRequestFormProperties {

		/** Required. Name of the account resource to transfer the location to (for example, "accounts/{account}"). */
		destinationAccount: FormControl<string | null | undefined>,
	}
	export function CreateTransferLocationRequestFormGroup() {
		return new FormGroup<TransferLocationRequestFormProperties>({
			destinationAccount: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.
		 * Get v1/accounts
		 * @param {string} filter Optional. A filter constraining the accounts to return. The response includes only entries that match the filter. If `filter` is empty, then no constraints are applied and all accounts (paginated) are retrieved for the requested account. For example, a request with the filter `type=USER_GROUP` will only return user groups. The `type` field is the only supported filter.
		 * @param {number} pageSize Optional. How many accounts to fetch per page. The default and maximum is 20.
		 * @param {string} pageToken Optional. If specified, the next page of accounts is retrieved. The `pageToken` is returned when a call to `accounts.list` returns more results than can fit into the requested page size.
		 * @param {string} parentAccount Optional. The resource name of the account for which the list of directly accessible accounts is to be retrieved. This only makes sense for Organizations and User Groups. If empty, will return `ListAccounts` for the authenticated user. `accounts/{account_id}`.
		 * @return {ListAccountsResponse} Successful response
		 */
		Mybusinessaccountmanagement_accounts_list(filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, parentAccount: string | null | undefined): Observable<ListAccountsResponse> {
			return this.http.get<ListAccountsResponse>(this.baseUri + 'v1/accounts?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parentAccount=' + (parentAccount == null ? '' : encodeURIComponent(parentAccount)), {});
		}

		/**
		 * Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.
		 * Post v1/accounts
		 * @return {Account} Successful response
		 */
		Mybusinessaccountmanagement_accounts_create(requestBody: Account): Observable<Account> {
			return this.http.post<Account>(this.baseUri + 'v1/accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified admin as a manager of the specified location.
		 * Delete v1/{name}
		 * @param {string} name Required. The resource name of the admin to remove from the location.
		 * @return {Empty} Successful response
		 */
		Mybusinessaccountmanagement_locations_admins_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the account to fetch.
		 * @return {Account} Successful response
		 */
		Mybusinessaccountmanagement_accounts_get(name: string): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the Admin for the specified location. Only the AdminRole of the Admin can be updated.
		 * Patch v1/{name}
		 * @param {string} name Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `locations/{location_id}/admins/{admin_id}` This field will be ignored if set during admin creation.
		 * @param {string} updateMask Required. The specific fields that should be updated. The only editable field is role.
		 * @param {boolean} validateOnly Optional. If true, the request is validated without actually updating the account.
		 * @return {Admin} Successful response
		 */
		Mybusinessaccountmanagement_locations_admins_patch(name: string, updateMask: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Admin): Observable<Admin> {
			return this.http.patch<Admin>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Accepts the specified invitation.
		 * Post v1/{name}:accept
		 * @param {string} name Required. The name of the invitation that is being accepted. `accounts/{account_id}/invitations/{invitation_id}`
		 * @return {Empty} Successful response
		 */
		Mybusinessaccountmanagement_accounts_invitations_accept(name: string, requestBody: AcceptInvitationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':accept', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Declines the specified invitation.
		 * Post v1/{name}:decline
		 * @param {string} name Required. The name of the account invitation that is being declined. `accounts/{account_id}/invitations/{invitation_id}`
		 * @return {Empty} Successful response
		 */
		Mybusinessaccountmanagement_accounts_invitations_decline(name: string, requestBody: DeclineInvitationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':decline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account.
		 * Post v1/{name}:transfer
		 * @param {string} name Required. The name of the location to transfer. `locations/{location_id}`.
		 * @return {Empty} Successful response
		 */
		Mybusinessaccountmanagement_locations_transfer(name: string, requestBody: TransferLocationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':transfer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the admins for the specified location.
		 * Get v1/{parent}/admins
		 * @param {string} parent Required. The name of the location to list admins of. `locations/{location_id}/admins`.
		 * @return {ListLocationAdminsResponse} Successful response
		 */
		Mybusinessaccountmanagement_locations_admins_list(parent: string): Observable<ListLocationAdminsResponse> {
			return this.http.get<ListLocationAdminsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/admins', {});
		}

		/**
		 * Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
		 * Post v1/{parent}/admins
		 * @param {string} parent Required. The resource name of the location this admin is created for. `locations/{location_id}/admins`.
		 * @return {Admin} Successful response
		 */
		Mybusinessaccountmanagement_locations_admins_create(parent: string, requestBody: Admin): Observable<Admin> {
			return this.http.post<Admin>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/admins', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists pending invitations for the specified account.
		 * Get v1/{parent}/invitations
		 * @param {string} parent Required. The name of the account from which the list of invitations is being retrieved. `accounts/{account_id}/invitations`
		 * @param {string} filter Optional. Filtering the response is supported via the Invitation.target_type field.
		 * @return {ListInvitationsResponse} Successful response
		 */
		Mybusinessaccountmanagement_accounts_invitations_list(parent: string, filter: string | null | undefined): Observable<ListInvitationsResponse> {
			return this.http.get<ListInvitationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/invitations&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}
	}

}

