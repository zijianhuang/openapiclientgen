import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** JSON template for Analytics account entry. */
	export interface Account {

		/** Child link for an account entry. Points to the list of web properties for this account. */
		childLink?: AccountChildLink;

		/** Time the account was created. */
		created?: Date | null;

		/** Account ID. */
		id?: string | null;

		/** Resource type for Analytics account. */
		kind?: string | null;

		/** Account name. */
		name?: string | null;

		/** Permissions the user has for this account. */
		permissions?: AccountPermissions;

		/** Link for this account. */
		selfLink?: string | null;

		/** Indicates whether this account is starred or not. */
		starred?: boolean | null;

		/** Time the account was last modified. */
		updated?: Date | null;
	}

	/** JSON template for Analytics account entry. */
	export interface AccountFormProperties {

		/** Time the account was created. */
		created: FormControl<Date | null | undefined>,

		/** Account ID. */
		id: FormControl<string | null | undefined>,

		/** Resource type for Analytics account. */
		kind: FormControl<string | null | undefined>,

		/** Account name. */
		name: FormControl<string | null | undefined>,

		/** Link for this account. */
		selfLink: FormControl<string | null | undefined>,

		/** Indicates whether this account is starred or not. */
		starred: FormControl<boolean | null | undefined>,

		/** Time the account was last modified. */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			starred: new FormControl<boolean | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface AccountChildLink {

		/** Link to the list of web properties for this account. */
		href?: string | null;

		/** Type of the child link. Its value is "analytics#webproperties". */
		type?: string | null;
	}
	export interface AccountChildLinkFormProperties {

		/** Link to the list of web properties for this account. */
		href: FormControl<string | null | undefined>,

		/** Type of the child link. Its value is "analytics#webproperties". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAccountChildLinkFormGroup() {
		return new FormGroup<AccountChildLinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountPermissions {

		/** All the permissions that the user has for this account. These include any implied permissions (e.g., EDIT implies VIEW). */
		effective?: Array<string>;
	}
	export interface AccountPermissionsFormProperties {
	}
	export function CreateAccountPermissionsFormGroup() {
		return new FormGroup<AccountPermissionsFormProperties>({
		});

	}


	/** JSON template for a linked account. */
	export interface AccountRef {

		/** Link for this account. */
		href?: string | null;

		/** Account ID. */
		id?: string | null;

		/** Analytics account reference. */
		kind?: string | null;

		/** Account name. */
		name?: string | null;
	}

	/** JSON template for a linked account. */
	export interface AccountRefFormProperties {

		/** Link for this account. */
		href: FormControl<string | null | undefined>,

		/** Account ID. */
		id: FormControl<string | null | undefined>,

		/** Analytics account reference. */
		kind: FormControl<string | null | undefined>,

		/** Account name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAccountRefFormGroup() {
		return new FormGroup<AccountRefFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An AccountSummary collection lists a summary of accounts, properties and views (profiles) to which the user has access. Each resource in the collection corresponds to a single AccountSummary. */
	export interface AccountSummaries {

		/** A list of AccountSummaries. */
		items?: Array<AccountSummary>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number | null;

		/** Collection type. */
		kind?: string | null;

		/** Link to next page for this AccountSummary collection. */
		nextLink?: string | null;

		/** Link to previous page for this AccountSummary collection. */
		previousLink?: string | null;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number | null;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number | null;

		/** Email ID of the authenticated user */
		username?: string | null;
	}

	/** An AccountSummary collection lists a summary of accounts, properties and views (profiles) to which the user has access. Each resource in the collection corresponds to a single AccountSummary. */
	export interface AccountSummariesFormProperties {

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Collection type. */
		kind: FormControl<string | null | undefined>,

		/** Link to next page for this AccountSummary collection. */
		nextLink: FormControl<string | null | undefined>,

		/** Link to previous page for this AccountSummary collection. */
		previousLink: FormControl<string | null | undefined>,

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex: FormControl<number | null | undefined>,

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults: FormControl<number | null | undefined>,

		/** Email ID of the authenticated user */
		username: FormControl<string | null | undefined>,
	}
	export function CreateAccountSummariesFormGroup() {
		return new FormGroup<AccountSummariesFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			previousLink: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles. */
	export interface AccountSummary {

		/** Account ID. */
		id?: string | null;

		/** Resource type for Analytics AccountSummary. */
		kind?: string | null;

		/** Account name. */
		name?: string | null;

		/** Indicates whether this account is starred or not. */
		starred?: boolean | null;

		/** List of web properties under this account. */
		webProperties?: Array<WebPropertySummary>;
	}

	/** JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles. */
	export interface AccountSummaryFormProperties {

		/** Account ID. */
		id: FormControl<string | null | undefined>,

		/** Resource type for Analytics AccountSummary. */
		kind: FormControl<string | null | undefined>,

		/** Account name. */
		name: FormControl<string | null | undefined>,

		/** Indicates whether this account is starred or not. */
		starred: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountSummaryFormGroup() {
		return new FormGroup<AccountSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			starred: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** JSON template for an Analytics WebPropertySummary. WebPropertySummary returns basic information (i.e., summary) for a web property. */
	export interface WebPropertySummary {

		/** Web property ID of the form UA-XXXXX-YY. */
		id?: string | null;

		/** Internal ID for this web property. */
		internalWebPropertyId?: string | null;

		/** Resource type for Analytics WebPropertySummary. */
		kind?: string | null;

		/** Level for this web property. Possible values are STANDARD or PREMIUM. */
		level?: string | null;

		/** Web property name. */
		name?: string | null;

		/** List of profiles under this web property. */
		profiles?: Array<ProfileSummary>;

		/** Indicates whether this web property is starred or not. */
		starred?: boolean | null;

		/** Website url for this web property. */
		websiteUrl?: string | null;
	}

	/** JSON template for an Analytics WebPropertySummary. WebPropertySummary returns basic information (i.e., summary) for a web property. */
	export interface WebPropertySummaryFormProperties {

		/** Web property ID of the form UA-XXXXX-YY. */
		id: FormControl<string | null | undefined>,

		/** Internal ID for this web property. */
		internalWebPropertyId: FormControl<string | null | undefined>,

		/** Resource type for Analytics WebPropertySummary. */
		kind: FormControl<string | null | undefined>,

		/** Level for this web property. Possible values are STANDARD or PREMIUM. */
		level: FormControl<string | null | undefined>,

		/** Web property name. */
		name: FormControl<string | null | undefined>,

		/** Indicates whether this web property is starred or not. */
		starred: FormControl<boolean | null | undefined>,

		/** Website url for this web property. */
		websiteUrl: FormControl<string | null | undefined>,
	}
	export function CreateWebPropertySummaryFormGroup() {
		return new FormGroup<WebPropertySummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			internalWebPropertyId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			starred: new FormControl<boolean | null | undefined>(undefined),
			websiteUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for an Analytics ProfileSummary. ProfileSummary returns basic information (i.e., summary) for a profile. */
	export interface ProfileSummary {

		/** View (profile) ID. */
		id?: string | null;

		/** Resource type for Analytics ProfileSummary. */
		kind?: string | null;

		/** View (profile) name. */
		name?: string | null;

		/** Indicates whether this view (profile) is starred or not. */
		starred?: boolean | null;

		/** View (Profile) type. Supported types: WEB or APP. */
		type?: string | null;
	}

	/** JSON template for an Analytics ProfileSummary. ProfileSummary returns basic information (i.e., summary) for a profile. */
	export interface ProfileSummaryFormProperties {

		/** View (profile) ID. */
		id: FormControl<string | null | undefined>,

		/** Resource type for Analytics ProfileSummary. */
		kind: FormControl<string | null | undefined>,

		/** View (profile) name. */
		name: FormControl<string | null | undefined>,

		/** Indicates whether this view (profile) is starred or not. */
		starred: FormControl<boolean | null | undefined>,

		/** View (Profile) type. Supported types: WEB or APP. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProfileSummaryFormGroup() {
		return new FormGroup<ProfileSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			starred: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile. */
	export interface AccountTicket {

		/** JSON template for Analytics account entry. */
		account?: Account;

		/** Account ticket ID used to access the account ticket. */
		id?: string | null;

		/** Resource type for account ticket. */
		kind?: string | null;

		/** JSON template for an Analytics view (profile). */
		profile?: Profile;

		/** Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in APIs console as a callback URL. */
		redirectUri?: string | null;

		/** JSON template for an Analytics web property. */
		webproperty?: Webproperty;
	}

	/** JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile. */
	export interface AccountTicketFormProperties {

		/** Account ticket ID used to access the account ticket. */
		id: FormControl<string | null | undefined>,

		/** Resource type for account ticket. */
		kind: FormControl<string | null | undefined>,

		/** Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in APIs console as a callback URL. */
		redirectUri: FormControl<string | null | undefined>,
	}
	export function CreateAccountTicketFormGroup() {
		return new FormGroup<AccountTicketFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			redirectUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for an Analytics view (profile). */
	export interface Profile {

		/** Account ID to which this view (profile) belongs. */
		accountId?: string | null;

		/** Indicates whether bot filtering is enabled for this view (profile). */
		botFilteringEnabled?: boolean | null;

		/** Child link for this view (profile). Points to the list of goals for this view (profile). */
		childLink?: ProfileChildLink;

		/** Time this view (profile) was created. */
		created?: Date | null;

		/**
		 * The currency type associated with this view (profile), defaults to USD. The supported values are:
		 * USD, JPY, EUR, GBP, AUD, KRW, BRL, CNY, DKK, RUB, SEK, NOK, PLN, TRY, TWD, HKD, THB, IDR, ARS, MXN, VND, PHP, INR, CHF, CAD, CZK, NZD, HUF, BGN, LTL, ZAR, UAH, AED, BOB, CLP, COP, EGP, HRK, ILS, MAD, MYR, PEN, PKR, RON, RSD, SAR, SGD, VEF, LVL
		 */
		currency?: string | null;

		/** Default page for this view (profile). */
		defaultPage?: string | null;

		/** Indicates whether ecommerce tracking is enabled for this view (profile). */
		eCommerceTracking?: boolean | null;

		/** Indicates whether enhanced ecommerce tracking is enabled for this view (profile). This property can only be enabled if ecommerce tracking is enabled. */
		enhancedECommerceTracking?: boolean | null;

		/** The query parameters that are excluded from this view (profile). */
		excludeQueryParameters?: string | null;

		/** View (Profile) ID. */
		id?: string | null;

		/** Internal ID for the web property to which this view (profile) belongs. */
		internalWebPropertyId?: string | null;

		/** Resource type for Analytics view (profile). */
		kind?: string | null;

		/** Name of this view (profile). */
		name?: string | null;

		/** Parent link for this view (profile). Points to the web property to which this view (profile) belongs. */
		parentLink?: ProfileParentLink;

		/** Permissions the user has for this view (profile). */
		permissions?: ProfilePermissions;

		/** Link for this view (profile). */
		selfLink?: string | null;

		/** Site search category parameters for this view (profile). */
		siteSearchCategoryParameters?: string | null;

		/** The site search query parameters for this view (profile). */
		siteSearchQueryParameters?: string | null;

		/** Indicates whether this view (profile) is starred or not. */
		starred?: boolean | null;

		/** Whether or not Analytics will strip search category parameters from the URLs in your reports. */
		stripSiteSearchCategoryParameters?: boolean | null;

		/** Whether or not Analytics will strip search query parameters from the URLs in your reports. */
		stripSiteSearchQueryParameters?: boolean | null;

		/** Time zone for which this view (profile) has been configured. Time zones are identified by strings from the TZ database. */
		timezone?: string | null;

		/** View (Profile) type. Supported types: WEB or APP. */
		type?: string | null;

		/** Time this view (profile) was last modified. */
		updated?: Date | null;

		/** Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs. */
		webPropertyId?: string | null;

		/** Website URL for this view (profile). */
		websiteUrl?: string | null;
	}

	/** JSON template for an Analytics view (profile). */
	export interface ProfileFormProperties {

		/** Account ID to which this view (profile) belongs. */
		accountId: FormControl<string | null | undefined>,

		/** Indicates whether bot filtering is enabled for this view (profile). */
		botFilteringEnabled: FormControl<boolean | null | undefined>,

		/** Time this view (profile) was created. */
		created: FormControl<Date | null | undefined>,

		/**
		 * The currency type associated with this view (profile), defaults to USD. The supported values are:
		 * USD, JPY, EUR, GBP, AUD, KRW, BRL, CNY, DKK, RUB, SEK, NOK, PLN, TRY, TWD, HKD, THB, IDR, ARS, MXN, VND, PHP, INR, CHF, CAD, CZK, NZD, HUF, BGN, LTL, ZAR, UAH, AED, BOB, CLP, COP, EGP, HRK, ILS, MAD, MYR, PEN, PKR, RON, RSD, SAR, SGD, VEF, LVL
		 */
		currency: FormControl<string | null | undefined>,

		/** Default page for this view (profile). */
		defaultPage: FormControl<string | null | undefined>,

		/** Indicates whether ecommerce tracking is enabled for this view (profile). */
		eCommerceTracking: FormControl<boolean | null | undefined>,

		/** Indicates whether enhanced ecommerce tracking is enabled for this view (profile). This property can only be enabled if ecommerce tracking is enabled. */
		enhancedECommerceTracking: FormControl<boolean | null | undefined>,

		/** The query parameters that are excluded from this view (profile). */
		excludeQueryParameters: FormControl<string | null | undefined>,

		/** View (Profile) ID. */
		id: FormControl<string | null | undefined>,

		/** Internal ID for the web property to which this view (profile) belongs. */
		internalWebPropertyId: FormControl<string | null | undefined>,

		/** Resource type for Analytics view (profile). */
		kind: FormControl<string | null | undefined>,

		/** Name of this view (profile). */
		name: FormControl<string | null | undefined>,

		/** Link for this view (profile). */
		selfLink: FormControl<string | null | undefined>,

		/** Site search category parameters for this view (profile). */
		siteSearchCategoryParameters: FormControl<string | null | undefined>,

		/** The site search query parameters for this view (profile). */
		siteSearchQueryParameters: FormControl<string | null | undefined>,

		/** Indicates whether this view (profile) is starred or not. */
		starred: FormControl<boolean | null | undefined>,

		/** Whether or not Analytics will strip search category parameters from the URLs in your reports. */
		stripSiteSearchCategoryParameters: FormControl<boolean | null | undefined>,

		/** Whether or not Analytics will strip search query parameters from the URLs in your reports. */
		stripSiteSearchQueryParameters: FormControl<boolean | null | undefined>,

		/** Time zone for which this view (profile) has been configured. Time zones are identified by strings from the TZ database. */
		timezone: FormControl<string | null | undefined>,

		/** View (Profile) type. Supported types: WEB or APP. */
		type: FormControl<string | null | undefined>,

		/** Time this view (profile) was last modified. */
		updated: FormControl<Date | null | undefined>,

		/** Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs. */
		webPropertyId: FormControl<string | null | undefined>,

		/** Website URL for this view (profile). */
		websiteUrl: FormControl<string | null | undefined>,
	}
	export function CreateProfileFormGroup() {
		return new FormGroup<ProfileFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			botFilteringEnabled: new FormControl<boolean | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			defaultPage: new FormControl<string | null | undefined>(undefined),
			eCommerceTracking: new FormControl<boolean | null | undefined>(undefined),
			enhancedECommerceTracking: new FormControl<boolean | null | undefined>(undefined),
			excludeQueryParameters: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			internalWebPropertyId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			siteSearchCategoryParameters: new FormControl<string | null | undefined>(undefined),
			siteSearchQueryParameters: new FormControl<string | null | undefined>(undefined),
			starred: new FormControl<boolean | null | undefined>(undefined),
			stripSiteSearchCategoryParameters: new FormControl<boolean | null | undefined>(undefined),
			stripSiteSearchQueryParameters: new FormControl<boolean | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			webPropertyId: new FormControl<string | null | undefined>(undefined),
			websiteUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProfileChildLink {

		/** Link to the list of goals for this view (profile). */
		href?: string | null;

		/** Value is "analytics#goals". */
		type?: string | null;
	}
	export interface ProfileChildLinkFormProperties {

		/** Link to the list of goals for this view (profile). */
		href: FormControl<string | null | undefined>,

		/** Value is "analytics#goals". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProfileChildLinkFormGroup() {
		return new FormGroup<ProfileChildLinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProfileParentLink {

		/** Link to the web property to which this view (profile) belongs. */
		href?: string | null;

		/** Value is "analytics#webproperty". */
		type?: string | null;
	}
	export interface ProfileParentLinkFormProperties {

		/** Link to the web property to which this view (profile) belongs. */
		href: FormControl<string | null | undefined>,

		/** Value is "analytics#webproperty". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProfileParentLinkFormGroup() {
		return new FormGroup<ProfileParentLinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProfilePermissions {

		/** All the permissions that the user has for this view (profile). These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent web property. */
		effective?: Array<string>;
	}
	export interface ProfilePermissionsFormProperties {
	}
	export function CreateProfilePermissionsFormGroup() {
		return new FormGroup<ProfilePermissionsFormProperties>({
		});

	}


	/** JSON template for an Analytics web property. */
	export interface Webproperty {

		/** Account ID to which this web property belongs. */
		accountId?: string | null;

		/** Child link for this web property. Points to the list of views (profiles) for this web property. */
		childLink?: WebpropertyChildLink;

		/** Time this web property was created. */
		created?: Date | null;

		/**
		 * Set to true to reset the retention period of the user identifier with each new event from that user (thus setting the expiration date to current time plus retention period).
		 * Set to false to delete data associated with the user identifier automatically after the rentention period.
		 * This property cannot be set on insert.
		 */
		dataRetentionResetOnNewActivity?: boolean | null;

		/**
		 * The length of time for which user and event data is retained.
		 * This property cannot be set on insert.
		 */
		dataRetentionTtl?: string | null;

		/** Default view (profile) ID. */
		defaultProfileId?: string | null;

		/** Web property ID of the form UA-XXXXX-YY. */
		id?: string | null;

		/** The industry vertical/category selected for this web property. */
		industryVertical?: string | null;

		/** Internal ID for this web property. */
		internalWebPropertyId?: string | null;

		/** Resource type for Analytics WebProperty. */
		kind?: string | null;

		/** Level for this web property. Possible values are STANDARD or PREMIUM. */
		level?: string | null;

		/** Name of this web property. */
		name?: string | null;

		/** Parent link for this web property. Points to the account to which this web property belongs. */
		parentLink?: WebpropertyParentLink;

		/** Permissions the user has for this web property. */
		permissions?: WebpropertyPermissions;

		/** View (Profile) count for this web property. */
		profileCount?: number | null;

		/** Link for this web property. */
		selfLink?: string | null;

		/** Indicates whether this web property is starred or not. */
		starred?: boolean | null;

		/** Time this web property was last modified. */
		updated?: Date | null;

		/** Website url for this web property. */
		websiteUrl?: string | null;
	}

	/** JSON template for an Analytics web property. */
	export interface WebpropertyFormProperties {

		/** Account ID to which this web property belongs. */
		accountId: FormControl<string | null | undefined>,

		/** Time this web property was created. */
		created: FormControl<Date | null | undefined>,

		/**
		 * Set to true to reset the retention period of the user identifier with each new event from that user (thus setting the expiration date to current time plus retention period).
		 * Set to false to delete data associated with the user identifier automatically after the rentention period.
		 * This property cannot be set on insert.
		 */
		dataRetentionResetOnNewActivity: FormControl<boolean | null | undefined>,

		/**
		 * The length of time for which user and event data is retained.
		 * This property cannot be set on insert.
		 */
		dataRetentionTtl: FormControl<string | null | undefined>,

		/** Default view (profile) ID. */
		defaultProfileId: FormControl<string | null | undefined>,

		/** Web property ID of the form UA-XXXXX-YY. */
		id: FormControl<string | null | undefined>,

		/** The industry vertical/category selected for this web property. */
		industryVertical: FormControl<string | null | undefined>,

		/** Internal ID for this web property. */
		internalWebPropertyId: FormControl<string | null | undefined>,

		/** Resource type for Analytics WebProperty. */
		kind: FormControl<string | null | undefined>,

		/** Level for this web property. Possible values are STANDARD or PREMIUM. */
		level: FormControl<string | null | undefined>,

		/** Name of this web property. */
		name: FormControl<string | null | undefined>,

		/** View (Profile) count for this web property. */
		profileCount: FormControl<number | null | undefined>,

		/** Link for this web property. */
		selfLink: FormControl<string | null | undefined>,

		/** Indicates whether this web property is starred or not. */
		starred: FormControl<boolean | null | undefined>,

		/** Time this web property was last modified. */
		updated: FormControl<Date | null | undefined>,

		/** Website url for this web property. */
		websiteUrl: FormControl<string | null | undefined>,
	}
	export function CreateWebpropertyFormGroup() {
		return new FormGroup<WebpropertyFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			dataRetentionResetOnNewActivity: new FormControl<boolean | null | undefined>(undefined),
			dataRetentionTtl: new FormControl<string | null | undefined>(undefined),
			defaultProfileId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			industryVertical: new FormControl<string | null | undefined>(undefined),
			internalWebPropertyId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			profileCount: new FormControl<number | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			starred: new FormControl<boolean | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			websiteUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebpropertyChildLink {

		/** Link to the list of views (profiles) for this web property. */
		href?: string | null;

		/** Type of the parent link. Its value is "analytics#profiles". */
		type?: string | null;
	}
	export interface WebpropertyChildLinkFormProperties {

		/** Link to the list of views (profiles) for this web property. */
		href: FormControl<string | null | undefined>,

		/** Type of the parent link. Its value is "analytics#profiles". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateWebpropertyChildLinkFormGroup() {
		return new FormGroup<WebpropertyChildLinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebpropertyParentLink {

		/** Link to the account for this web property. */
		href?: string | null;

		/** Type of the parent link. Its value is "analytics#account". */
		type?: string | null;
	}
	export interface WebpropertyParentLinkFormProperties {

		/** Link to the account for this web property. */
		href: FormControl<string | null | undefined>,

		/** Type of the parent link. Its value is "analytics#account". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateWebpropertyParentLinkFormGroup() {
		return new FormGroup<WebpropertyParentLinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebpropertyPermissions {

		/** All the permissions that the user has for this web property. These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent account. */
		effective?: Array<string>;
	}
	export interface WebpropertyPermissionsFormProperties {
	}
	export function CreateWebpropertyPermissionsFormGroup() {
		return new FormGroup<WebpropertyPermissionsFormProperties>({
		});

	}


	/** JSON template for an Analytics account tree requests. The account tree request is used in the provisioning api to create an account, property, and view (profile). It contains the basic information required to make these fields. */
	export interface AccountTreeRequest {
		accountName?: string | null;

		/** Resource type for account ticket. */
		kind?: string | null;
		profileName?: string | null;
		timezone?: string | null;
		webpropertyName?: string | null;
		websiteUrl?: string | null;
	}

	/** JSON template for an Analytics account tree requests. The account tree request is used in the provisioning api to create an account, property, and view (profile). It contains the basic information required to make these fields. */
	export interface AccountTreeRequestFormProperties {
		accountName: FormControl<string | null | undefined>,

		/** Resource type for account ticket. */
		kind: FormControl<string | null | undefined>,
		profileName: FormControl<string | null | undefined>,
		timezone: FormControl<string | null | undefined>,
		webpropertyName: FormControl<string | null | undefined>,
		websiteUrl: FormControl<string | null | undefined>,
	}
	export function CreateAccountTreeRequestFormGroup() {
		return new FormGroup<AccountTreeRequestFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			profileName: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			webpropertyName: new FormControl<string | null | undefined>(undefined),
			websiteUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for an Analytics account tree response. The account tree response is used in the provisioning api to return the result of creating an account, property, and view (profile). */
	export interface AccountTreeResponse {

		/** JSON template for Analytics account entry. */
		account?: Account;

		/** Resource type for account ticket. */
		kind?: string | null;

		/** JSON template for an Analytics view (profile). */
		profile?: Profile;

		/** JSON template for an Analytics web property. */
		webproperty?: Webproperty;
	}

	/** JSON template for an Analytics account tree response. The account tree response is used in the provisioning api to return the result of creating an account, property, and view (profile). */
	export interface AccountTreeResponseFormProperties {

		/** Resource type for account ticket. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccountTreeResponseFormGroup() {
		return new FormGroup<AccountTreeResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An account collection provides a list of Analytics accounts to which a user has access. The account collection is the entry point to all management information. Each resource in the collection corresponds to a single Analytics account. */
	export interface Accounts {

		/** A list of accounts. */
		items?: Array<Account>;

		/** The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number | null;

		/** Collection type. */
		kind?: string | null;

		/** Next link for this account collection. */
		nextLink?: string | null;

		/** Previous link for this account collection. */
		previousLink?: string | null;

		/** The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number | null;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number | null;

		/** Email ID of the authenticated user */
		username?: string | null;
	}

	/** An account collection provides a list of Analytics accounts to which a user has access. The account collection is the entry point to all management information. Each resource in the collection corresponds to a single Analytics account. */
	export interface AccountsFormProperties {

		/** The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Collection type. */
		kind: FormControl<string | null | undefined>,

		/** Next link for this account collection. */
		nextLink: FormControl<string | null | undefined>,

		/** Previous link for this account collection. */
		previousLink: FormControl<string | null | undefined>,

		/** The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex: FormControl<number | null | undefined>,

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults: FormControl<number | null | undefined>,

		/** Email ID of the authenticated user */
		username: FormControl<string | null | undefined>,
	}
	export function CreateAccountsFormGroup() {
		return new FormGroup<AccountsFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			previousLink: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for an Google Ads account. */
	export interface AdWordsAccount {

		/** True if auto-tagging is enabled on the Google Ads account. Read-only after the insert operation. */
		autoTaggingEnabled?: boolean | null;

		/** Customer ID. This field is required when creating a Google Ads link. */
		customerId?: string | null;

		/** Resource type for Google Ads account. */
		kind?: string | null;
	}

	/** JSON template for an Google Ads account. */
	export interface AdWordsAccountFormProperties {

		/** True if auto-tagging is enabled on the Google Ads account. Read-only after the insert operation. */
		autoTaggingEnabled: FormControl<boolean | null | undefined>,

		/** Customer ID. This field is required when creating a Google Ads link. */
		customerId: FormControl<string | null | undefined>,

		/** Resource type for Google Ads account. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAdWordsAccountFormGroup() {
		return new FormGroup<AdWordsAccountFormProperties>({
			autoTaggingEnabled: new FormControl<boolean | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request template for the delete upload data request. */
	export interface AnalyticsDataimportDeleteUploadDataRequest {

		/** A list of upload UIDs. */
		customDataImportUids?: Array<string>;
	}

	/** Request template for the delete upload data request. */
	export interface AnalyticsDataimportDeleteUploadDataRequestFormProperties {
	}
	export function CreateAnalyticsDataimportDeleteUploadDataRequestFormGroup() {
		return new FormGroup<AnalyticsDataimportDeleteUploadDataRequestFormProperties>({
		});

	}


	/** JSON template for a metadata column. */
	export interface Column {

		/** Map of attribute name and value for this column. */
		attributes?: {[id: string]: string };

		/** Column id. */
		id?: string | null;

		/** Resource type for Analytics column. */
		kind?: string | null;
	}

	/** JSON template for a metadata column. */
	export interface ColumnFormProperties {

		/** Map of attribute name and value for this column. */
		attributes: FormControl<{[id: string]: string } | null | undefined>,

		/** Column id. */
		id: FormControl<string | null | undefined>,

		/** Resource type for Analytics column. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateColumnFormGroup() {
		return new FormGroup<ColumnFormProperties>({
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lists columns (dimensions and metrics) for a particular report type. */
	export interface Columns {

		/** List of attributes names returned by columns. */
		attributeNames?: Array<string>;

		/** Etag of collection. This etag can be compared with the last response etag to check if response has changed. */
		etag?: string | null;

		/** List of columns for a report type. */
		items?: Array<Column>;

		/** Collection type. */
		kind?: string | null;

		/** Total number of columns returned in the response. */
		totalResults?: number | null;
	}

	/** Lists columns (dimensions and metrics) for a particular report type. */
	export interface ColumnsFormProperties {

		/** Etag of collection. This etag can be compared with the last response etag to check if response has changed. */
		etag: FormControl<string | null | undefined>,

		/** Collection type. */
		kind: FormControl<string | null | undefined>,

		/** Total number of columns returned in the response. */
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateColumnsFormGroup() {
		return new FormGroup<ColumnsFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** JSON template for an Analytics custom data source. */
	export interface CustomDataSource {

		/** Account ID to which this custom data source belongs. */
		accountId?: string | null;
		childLink?: CustomDataSourceChildLink;

		/** Time this custom data source was created. */
		created?: Date | null;

		/** Description of custom data source. */
		description?: string | null;

		/** Custom data source ID. */
		id?: string | null;
		importBehavior?: string | null;

		/** Resource type for Analytics custom data source. */
		kind?: string | null;

		/** Name of this custom data source. */
		name?: string | null;

		/** Parent link for this custom data source. Points to the web property to which this custom data source belongs. */
		parentLink?: CustomDataSourceParentLink;

		/** IDs of views (profiles) linked to the custom data source. */
		profilesLinked?: Array<string>;

		/** Collection of schema headers of the custom data source. */
		schema?: Array<string>;

		/** Link for this Analytics custom data source. */
		selfLink?: string | null;

		/** Type of the custom data source. */
		type?: string | null;

		/** Time this custom data source was last modified. */
		updated?: Date | null;

		/** Upload type of the custom data source. */
		uploadType?: string | null;

		/** Web property ID of the form UA-XXXXX-YY to which this custom data source belongs. */
		webPropertyId?: string | null;
	}

	/** JSON template for an Analytics custom data source. */
	export interface CustomDataSourceFormProperties {

		/** Account ID to which this custom data source belongs. */
		accountId: FormControl<string | null | undefined>,

		/** Time this custom data source was created. */
		created: FormControl<Date | null | undefined>,

		/** Description of custom data source. */
		description: FormControl<string | null | undefined>,

		/** Custom data source ID. */
		id: FormControl<string | null | undefined>,
		importBehavior: FormControl<string | null | undefined>,

		/** Resource type for Analytics custom data source. */
		kind: FormControl<string | null | undefined>,

		/** Name of this custom data source. */
		name: FormControl<string | null | undefined>,

		/** Link for this Analytics custom data source. */
		selfLink: FormControl<string | null | undefined>,

		/** Type of the custom data source. */
		type: FormControl<string | null | undefined>,

		/** Time this custom data source was last modified. */
		updated: FormControl<Date | null | undefined>,

		/** Upload type of the custom data source. */
		uploadType: FormControl<string | null | undefined>,

		/** Web property ID of the form UA-XXXXX-YY to which this custom data source belongs. */
		webPropertyId: FormControl<string | null | undefined>,
	}
	export function CreateCustomDataSourceFormGroup() {
		return new FormGroup<CustomDataSourceFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			importBehavior: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			uploadType: new FormControl<string | null | undefined>(undefined),
			webPropertyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomDataSourceChildLink {

		/** Link to the list of daily uploads for this custom data source. Link to the list of uploads for this custom data source. */
		href?: string | null;

		/** Value is "analytics#dailyUploads". Value is "analytics#uploads". */
		type?: string | null;
	}
	export interface CustomDataSourceChildLinkFormProperties {

		/** Link to the list of daily uploads for this custom data source. Link to the list of uploads for this custom data source. */
		href: FormControl<string | null | undefined>,

		/** Value is "analytics#dailyUploads". Value is "analytics#uploads". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCustomDataSourceChildLinkFormGroup() {
		return new FormGroup<CustomDataSourceChildLinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomDataSourceParentLink {

		/** Link to the web property to which this custom data source belongs. */
		href?: string | null;

		/** Value is "analytics#webproperty". */
		type?: string | null;
	}
	export interface CustomDataSourceParentLinkFormProperties {

		/** Link to the web property to which this custom data source belongs. */
		href: FormControl<string | null | undefined>,

		/** Value is "analytics#webproperty". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCustomDataSourceParentLinkFormGroup() {
		return new FormGroup<CustomDataSourceParentLinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lists Analytics custom data sources to which the user has access. Each resource in the collection corresponds to a single Analytics custom data source. */
	export interface CustomDataSources {

		/** Collection of custom data sources. */
		items?: Array<CustomDataSource>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number | null;

		/** Collection type. */
		kind?: string | null;

		/** Link to next page for this custom data source collection. */
		nextLink?: string | null;

		/** Link to previous page for this custom data source collection. */
		previousLink?: string | null;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number | null;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number | null;

		/** Email ID of the authenticated user */
		username?: string | null;
	}

	/** Lists Analytics custom data sources to which the user has access. Each resource in the collection corresponds to a single Analytics custom data source. */
	export interface CustomDataSourcesFormProperties {

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Collection type. */
		kind: FormControl<string | null | undefined>,

		/** Link to next page for this custom data source collection. */
		nextLink: FormControl<string | null | undefined>,

		/** Link to previous page for this custom data source collection. */
		previousLink: FormControl<string | null | undefined>,

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex: FormControl<number | null | undefined>,

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults: FormControl<number | null | undefined>,

		/** Email ID of the authenticated user */
		username: FormControl<string | null | undefined>,
	}
	export function CreateCustomDataSourcesFormGroup() {
		return new FormGroup<CustomDataSourcesFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			previousLink: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for Analytics Custom Dimension. */
	export interface CustomDimension {

		/** Account ID. */
		accountId?: string | null;

		/** Boolean indicating whether the custom dimension is active. */
		active?: boolean | null;

		/** Time the custom dimension was created. */
		created?: Date | null;

		/** Custom dimension ID. */
		id?: string | null;

		/** Index of the custom dimension. */
		index?: number | null;

		/** Kind value for a custom dimension. Set to "analytics#customDimension". It is a read-only field. */
		kind?: string | null;

		/** Name of the custom dimension. */
		name?: string | null;

		/** Parent link for the custom dimension. Points to the property to which the custom dimension belongs. */
		parentLink?: CustomDimensionParentLink;

		/** Scope of the custom dimension: HIT, SESSION, USER or PRODUCT. */
		scope?: string | null;

		/** Link for the custom dimension */
		selfLink?: string | null;

		/** Time the custom dimension was last modified. */
		updated?: Date | null;

		/** Property ID. */
		webPropertyId?: string | null;
	}

	/** JSON template for Analytics Custom Dimension. */
	export interface CustomDimensionFormProperties {

		/** Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** Boolean indicating whether the custom dimension is active. */
		active: FormControl<boolean | null | undefined>,

		/** Time the custom dimension was created. */
		created: FormControl<Date | null | undefined>,

		/** Custom dimension ID. */
		id: FormControl<string | null | undefined>,

		/** Index of the custom dimension. */
		index: FormControl<number | null | undefined>,

		/** Kind value for a custom dimension. Set to "analytics#customDimension". It is a read-only field. */
		kind: FormControl<string | null | undefined>,

		/** Name of the custom dimension. */
		name: FormControl<string | null | undefined>,

		/** Scope of the custom dimension: HIT, SESSION, USER or PRODUCT. */
		scope: FormControl<string | null | undefined>,

		/** Link for the custom dimension */
		selfLink: FormControl<string | null | undefined>,

		/** Time the custom dimension was last modified. */
		updated: FormControl<Date | null | undefined>,

		/** Property ID. */
		webPropertyId: FormControl<string | null | undefined>,
	}
	export function CreateCustomDimensionFormGroup() {
		return new FormGroup<CustomDimensionFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			webPropertyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomDimensionParentLink {

		/** Link to the property to which the custom dimension belongs. */
		href?: string | null;

		/** Type of the parent link. Set to "analytics#webproperty". */
		type?: string | null;
	}
	export interface CustomDimensionParentLinkFormProperties {

		/** Link to the property to which the custom dimension belongs. */
		href: FormControl<string | null | undefined>,

		/** Type of the parent link. Set to "analytics#webproperty". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCustomDimensionParentLinkFormGroup() {
		return new FormGroup<CustomDimensionParentLinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A custom dimension collection lists Analytics custom dimensions to which the user has access. Each resource in the collection corresponds to a single Analytics custom dimension. */
	export interface CustomDimensions {

		/** Collection of custom dimensions. */
		items?: Array<CustomDimension>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number | null;

		/** Collection type. */
		kind?: string | null;

		/** Link to next page for this custom dimension collection. */
		nextLink?: string | null;

		/** Link to previous page for this custom dimension collection. */
		previousLink?: string | null;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number | null;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number | null;

		/** Email ID of the authenticated user */
		username?: string | null;
	}

	/** A custom dimension collection lists Analytics custom dimensions to which the user has access. Each resource in the collection corresponds to a single Analytics custom dimension. */
	export interface CustomDimensionsFormProperties {

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Collection type. */
		kind: FormControl<string | null | undefined>,

		/** Link to next page for this custom dimension collection. */
		nextLink: FormControl<string | null | undefined>,

		/** Link to previous page for this custom dimension collection. */
		previousLink: FormControl<string | null | undefined>,

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex: FormControl<number | null | undefined>,

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults: FormControl<number | null | undefined>,

		/** Email ID of the authenticated user */
		username: FormControl<string | null | undefined>,
	}
	export function CreateCustomDimensionsFormGroup() {
		return new FormGroup<CustomDimensionsFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			previousLink: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for Analytics Custom Metric. */
	export interface CustomMetric {

		/** Account ID. */
		accountId?: string | null;

		/** Boolean indicating whether the custom metric is active. */
		active?: boolean | null;

		/** Time the custom metric was created. */
		created?: Date | null;

		/** Custom metric ID. */
		id?: string | null;

		/** Index of the custom metric. */
		index?: number | null;

		/** Kind value for a custom metric. Set to "analytics#customMetric". It is a read-only field. */
		kind?: string | null;

		/** Max value of custom metric. */
		max_value?: string | null;

		/** Min value of custom metric. */
		min_value?: string | null;

		/** Name of the custom metric. */
		name?: string | null;

		/** Parent link for the custom metric. Points to the property to which the custom metric belongs. */
		parentLink?: CustomMetricParentLink;

		/** Scope of the custom metric: HIT or PRODUCT. */
		scope?: string | null;

		/** Link for the custom metric */
		selfLink?: string | null;

		/** Data type of custom metric. */
		type?: string | null;

		/** Time the custom metric was last modified. */
		updated?: Date | null;

		/** Property ID. */
		webPropertyId?: string | null;
	}

	/** JSON template for Analytics Custom Metric. */
	export interface CustomMetricFormProperties {

		/** Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** Boolean indicating whether the custom metric is active. */
		active: FormControl<boolean | null | undefined>,

		/** Time the custom metric was created. */
		created: FormControl<Date | null | undefined>,

		/** Custom metric ID. */
		id: FormControl<string | null | undefined>,

		/** Index of the custom metric. */
		index: FormControl<number | null | undefined>,

		/** Kind value for a custom metric. Set to "analytics#customMetric". It is a read-only field. */
		kind: FormControl<string | null | undefined>,

		/** Max value of custom metric. */
		max_value: FormControl<string | null | undefined>,

		/** Min value of custom metric. */
		min_value: FormControl<string | null | undefined>,

		/** Name of the custom metric. */
		name: FormControl<string | null | undefined>,

		/** Scope of the custom metric: HIT or PRODUCT. */
		scope: FormControl<string | null | undefined>,

		/** Link for the custom metric */
		selfLink: FormControl<string | null | undefined>,

		/** Data type of custom metric. */
		type: FormControl<string | null | undefined>,

		/** Time the custom metric was last modified. */
		updated: FormControl<Date | null | undefined>,

		/** Property ID. */
		webPropertyId: FormControl<string | null | undefined>,
	}
	export function CreateCustomMetricFormGroup() {
		return new FormGroup<CustomMetricFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			max_value: new FormControl<string | null | undefined>(undefined),
			min_value: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			webPropertyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomMetricParentLink {

		/** Link to the property to which the custom metric belongs. */
		href?: string | null;

		/** Type of the parent link. Set to "analytics#webproperty". */
		type?: string | null;
	}
	export interface CustomMetricParentLinkFormProperties {

		/** Link to the property to which the custom metric belongs. */
		href: FormControl<string | null | undefined>,

		/** Type of the parent link. Set to "analytics#webproperty". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCustomMetricParentLinkFormGroup() {
		return new FormGroup<CustomMetricParentLinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A custom metric collection lists Analytics custom metrics to which the user has access. Each resource in the collection corresponds to a single Analytics custom metric. */
	export interface CustomMetrics {

		/** Collection of custom metrics. */
		items?: Array<CustomMetric>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number | null;

		/** Collection type. */
		kind?: string | null;

		/** Link to next page for this custom metric collection. */
		nextLink?: string | null;

		/** Link to previous page for this custom metric collection. */
		previousLink?: string | null;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number | null;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number | null;

		/** Email ID of the authenticated user */
		username?: string | null;
	}

	/** A custom metric collection lists Analytics custom metrics to which the user has access. Each resource in the collection corresponds to a single Analytics custom metric. */
	export interface CustomMetricsFormProperties {

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Collection type. */
		kind: FormControl<string | null | undefined>,

		/** Link to next page for this custom metric collection. */
		nextLink: FormControl<string | null | undefined>,

		/** Link to previous page for this custom metric collection. */
		previousLink: FormControl<string | null | undefined>,

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex: FormControl<number | null | undefined>,

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults: FormControl<number | null | undefined>,

		/** Email ID of the authenticated user */
		username: FormControl<string | null | undefined>,
	}
	export function CreateCustomMetricsFormGroup() {
		return new FormGroup<CustomMetricsFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			previousLink: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for Analytics Entity Google Ads Link. */
	export interface EntityAdWordsLink {

		/** A list of Google Ads client accounts. These cannot be MCC accounts. This field is required when creating a Google Ads link. It cannot be empty. */
		adWordsAccounts?: Array<AdWordsAccount>;

		/** Web property being linked. */
		entity?: EntityAdWordsLinkEntity;

		/** Entity Google Ads link ID */
		id?: string | null;

		/** Resource type for entity Google Ads link. */
		kind?: string | null;

		/** Name of the link. This field is required when creating a Google Ads link. */
		name?: string | null;

		/** IDs of linked Views (Profiles) represented as strings. */
		profileIds?: Array<string>;

		/** URL link for this Google Analytics - Google Ads link. */
		selfLink?: string | null;
	}

	/** JSON template for Analytics Entity Google Ads Link. */
	export interface EntityAdWordsLinkFormProperties {

		/** Entity Google Ads link ID */
		id: FormControl<string | null | undefined>,

		/** Resource type for entity Google Ads link. */
		kind: FormControl<string | null | undefined>,

		/** Name of the link. This field is required when creating a Google Ads link. */
		name: FormControl<string | null | undefined>,

		/** URL link for this Google Analytics - Google Ads link. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateEntityAdWordsLinkFormGroup() {
		return new FormGroup<EntityAdWordsLinkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EntityAdWordsLinkEntity {

		/** JSON template for a web property reference. */
		webPropertyRef?: WebPropertyRef;
	}
	export interface EntityAdWordsLinkEntityFormProperties {
	}
	export function CreateEntityAdWordsLinkEntityFormGroup() {
		return new FormGroup<EntityAdWordsLinkEntityFormProperties>({
		});

	}


	/** JSON template for a web property reference. */
	export interface WebPropertyRef {

		/** Account ID to which this web property belongs. */
		accountId?: string | null;

		/** Link for this web property. */
		href?: string | null;

		/** Web property ID of the form UA-XXXXX-YY. */
		id?: string | null;

		/** Internal ID for this web property. */
		internalWebPropertyId?: string | null;

		/** Analytics web property reference. */
		kind?: string | null;

		/** Name of this web property. */
		name?: string | null;
	}

	/** JSON template for a web property reference. */
	export interface WebPropertyRefFormProperties {

		/** Account ID to which this web property belongs. */
		accountId: FormControl<string | null | undefined>,

		/** Link for this web property. */
		href: FormControl<string | null | undefined>,

		/** Web property ID of the form UA-XXXXX-YY. */
		id: FormControl<string | null | undefined>,

		/** Internal ID for this web property. */
		internalWebPropertyId: FormControl<string | null | undefined>,

		/** Analytics web property reference. */
		kind: FormControl<string | null | undefined>,

		/** Name of this web property. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateWebPropertyRefFormGroup() {
		return new FormGroup<WebPropertyRefFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			internalWebPropertyId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An entity Google Ads link collection provides a list of GA-Google Ads links Each resource in this collection corresponds to a single link. */
	export interface EntityAdWordsLinks {

		/** A list of entity Google Ads links. */
		items?: Array<EntityAdWordsLink>;

		/** The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number | null;

		/** Collection type. */
		kind?: string | null;

		/** Next link for this Google Ads link collection. */
		nextLink?: string | null;

		/** Previous link for this Google Ads link collection. */
		previousLink?: string | null;

		/** The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number | null;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number | null;
	}

	/** An entity Google Ads link collection provides a list of GA-Google Ads links Each resource in this collection corresponds to a single link. */
	export interface EntityAdWordsLinksFormProperties {

		/** The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Collection type. */
		kind: FormControl<string | null | undefined>,

		/** Next link for this Google Ads link collection. */
		nextLink: FormControl<string | null | undefined>,

		/** Previous link for this Google Ads link collection. */
		previousLink: FormControl<string | null | undefined>,

		/** The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex: FormControl<number | null | undefined>,

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateEntityAdWordsLinksFormGroup() {
		return new FormGroup<EntityAdWordsLinksFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			previousLink: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity. */
	export interface EntityUserLink {

		/** Entity for this link. It can be an account, a web property, or a view (profile). */
		entity?: EntityUserLinkEntity;

		/** Entity user link ID */
		id?: string | null;

		/** Resource type for entity user link. */
		kind?: string | null;

		/** Permissions the user has for this entity. */
		permissions?: EntityUserLinkPermissions;

		/** Self link for this resource. */
		selfLink?: string | null;

		/** JSON template for a user reference. */
		userRef?: UserRef;
	}

	/** JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity. */
	export interface EntityUserLinkFormProperties {

		/** Entity user link ID */
		id: FormControl<string | null | undefined>,

		/** Resource type for entity user link. */
		kind: FormControl<string | null | undefined>,

		/** Self link for this resource. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateEntityUserLinkFormGroup() {
		return new FormGroup<EntityUserLinkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EntityUserLinkEntity {

		/** JSON template for a linked account. */
		accountRef?: AccountRef;

		/** JSON template for a linked view (profile). */
		profileRef?: ProfileRef;

		/** JSON template for a web property reference. */
		webPropertyRef?: WebPropertyRef;
	}
	export interface EntityUserLinkEntityFormProperties {
	}
	export function CreateEntityUserLinkEntityFormGroup() {
		return new FormGroup<EntityUserLinkEntityFormProperties>({
		});

	}


	/** JSON template for a linked view (profile). */
	export interface ProfileRef {

		/** Account ID to which this view (profile) belongs. */
		accountId?: string | null;

		/** Link for this view (profile). */
		href?: string | null;

		/** View (Profile) ID. */
		id?: string | null;

		/** Internal ID for the web property to which this view (profile) belongs. */
		internalWebPropertyId?: string | null;

		/** Analytics view (profile) reference. */
		kind?: string | null;

		/** Name of this view (profile). */
		name?: string | null;

		/** Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs. */
		webPropertyId?: string | null;
	}

	/** JSON template for a linked view (profile). */
	export interface ProfileRefFormProperties {

		/** Account ID to which this view (profile) belongs. */
		accountId: FormControl<string | null | undefined>,

		/** Link for this view (profile). */
		href: FormControl<string | null | undefined>,

		/** View (Profile) ID. */
		id: FormControl<string | null | undefined>,

		/** Internal ID for the web property to which this view (profile) belongs. */
		internalWebPropertyId: FormControl<string | null | undefined>,

		/** Analytics view (profile) reference. */
		kind: FormControl<string | null | undefined>,

		/** Name of this view (profile). */
		name: FormControl<string | null | undefined>,

		/** Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs. */
		webPropertyId: FormControl<string | null | undefined>,
	}
	export function CreateProfileRefFormGroup() {
		return new FormGroup<ProfileRefFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			internalWebPropertyId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			webPropertyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EntityUserLinkPermissions {

		/** Effective permissions represent all the permissions that a user has for this entity. These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent entity. Effective permissions are read-only. */
		effective?: Array<string>;

		/** Permissions that a user has been assigned at this very level. Does not include any implied or inherited permissions. Local permissions are modifiable. */
		local?: Array<string>;
	}
	export interface EntityUserLinkPermissionsFormProperties {
	}
	export function CreateEntityUserLinkPermissionsFormGroup() {
		return new FormGroup<EntityUserLinkPermissionsFormProperties>({
		});

	}


	/** JSON template for a user reference. */
	export interface UserRef {

		/** Email ID of this user. */
		email?: string | null;

		/** User ID. */
		id?: string | null;
		kind?: string | null;
	}

	/** JSON template for a user reference. */
	export interface UserRefFormProperties {

		/** Email ID of this user. */
		email: FormControl<string | null | undefined>,

		/** User ID. */
		id: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
	}
	export function CreateUserRefFormGroup() {
		return new FormGroup<UserRefFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An entity user link collection provides a list of Analytics ACL links Each resource in this collection corresponds to a single link. */
	export interface EntityUserLinks {

		/** A list of entity user links. */
		items?: Array<EntityUserLink>;

		/** The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number | null;

		/** Collection type. */
		kind?: string | null;

		/** Next link for this account collection. */
		nextLink?: string | null;

		/** Previous link for this account collection. */
		previousLink?: string | null;

		/** The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number | null;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number | null;
	}

	/** An entity user link collection provides a list of Analytics ACL links Each resource in this collection corresponds to a single link. */
	export interface EntityUserLinksFormProperties {

		/** The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Collection type. */
		kind: FormControl<string | null | undefined>,

		/** Next link for this account collection. */
		nextLink: FormControl<string | null | undefined>,

		/** Previous link for this account collection. */
		previousLink: FormControl<string | null | undefined>,

		/** The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex: FormControl<number | null | undefined>,

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateEntityUserLinksFormGroup() {
		return new FormGroup<EntityUserLinksFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			previousLink: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** JSON template for Analytics experiment resource. */
	export interface Experiment {

		/** Account ID to which this experiment belongs. This field is read-only. */
		accountId?: string | null;

		/** Time the experiment was created. This field is read-only. */
		created?: Date | null;

		/** Notes about this experiment. */
		description?: string | null;

		/** If true, the end user will be able to edit the experiment via the Google Analytics user interface. */
		editableInGaUi?: boolean | null;

		/** The ending time of the experiment (the time the status changed from RUNNING to ENDED). This field is present only if the experiment has ended. This field is read-only. */
		endTime?: Date | null;

		/** Boolean specifying whether to distribute traffic evenly across all variations. If the value is False, content experiments follows the default behavior of adjusting traffic dynamically based on variation performance. Optional -- defaults to False. This field may not be changed for an experiment whose status is ENDED. */
		equalWeighting?: boolean | null;

		/** Experiment ID. Required for patch and update. Disallowed for create. */
		id?: string | null;

		/** Internal ID for the web property to which this experiment belongs. This field is read-only. */
		internalWebPropertyId?: string | null;

		/** Resource type for an Analytics experiment. This field is read-only. */
		kind?: string | null;

		/** An integer number in [3, 90]. Specifies the minimum length of the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED. */
		minimumExperimentLengthInDays?: number | null;

		/** Experiment name. This field may not be changed for an experiment whose status is ENDED. This field is required when creating an experiment. */
		name?: string | null;

		/** The metric that the experiment is optimizing. Valid values: "ga:goal(n)Completions", "ga:adsenseAdsClicks", "ga:adsenseAdsViewed", "ga:adsenseRevenue", "ga:bounces", "ga:pageviews", "ga:sessionDuration", "ga:transactions", "ga:transactionRevenue". This field is required if status is "RUNNING" and servingFramework is one of "REDIRECT" or "API". */
		objectiveMetric?: string | null;

		/** Whether the objectiveMetric should be minimized or maximized. Possible values: "MAXIMUM", "MINIMUM". Optional--defaults to "MAXIMUM". Cannot be specified without objectiveMetric. Cannot be modified when status is "RUNNING" or "ENDED". */
		optimizationType?: string | null;

		/** Parent link for an experiment. Points to the view (profile) to which this experiment belongs. */
		parentLink?: ExperimentParentLink;

		/** View (Profile) ID to which this experiment belongs. This field is read-only. */
		profileId?: string | null;

		/** Why the experiment ended. Possible values: "STOPPED_BY_USER", "WINNER_FOUND", "EXPERIMENT_EXPIRED", "ENDED_WITH_NO_WINNER", "GOAL_OBJECTIVE_CHANGED". "ENDED_WITH_NO_WINNER" means that the experiment didn't expire but no winner was projected to be found. If the experiment status is changed via the API to ENDED this field is set to STOPPED_BY_USER. This field is read-only. */
		reasonExperimentEnded?: string | null;

		/** Boolean specifying whether variations URLS are rewritten to match those of the original. This field may not be changed for an experiments whose status is ENDED. */
		rewriteVariationUrlsAsOriginal?: boolean | null;

		/** Link for this experiment. This field is read-only. */
		selfLink?: string | null;

		/**
		 * The framework used to serve the experiment variations and evaluate the results. One of:
		 * - REDIRECT: Google Analytics redirects traffic to different variation pages, reports the chosen variation and evaluates the results.
		 * - API: Google Analytics chooses and reports the variation to serve and evaluates the results; the caller is responsible for serving the selected variation.
		 * - EXTERNAL: The variations will be served externally and the chosen variation reported to Google Analytics. The caller is responsible for serving the selected variation and evaluating the results.
		 */
		servingFramework?: string | null;

		/** The snippet of code to include on the control page(s). This field is read-only. */
		snippet?: string | null;

		/** The starting time of the experiment (the time the status changed from READY_TO_RUN to RUNNING). This field is present only if the experiment has started. This field is read-only. */
		startTime?: Date | null;

		/** Experiment status. Possible values: "DRAFT", "READY_TO_RUN", "RUNNING", "ENDED". Experiments can be created in the "DRAFT", "READY_TO_RUN" or "RUNNING" state. This field is required when creating an experiment. */
		status?: string | null;

		/** A floating-point number in (0, 1]. Specifies the fraction of the traffic that participates in the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED. */
		trafficCoverage?: number | null;

		/** Time the experiment was last modified. This field is read-only. */
		updated?: Date | null;

		/** Array of variations. The first variation in the array is the original. The number of variations may not change once an experiment is in the RUNNING state. At least two variations are required before status can be set to RUNNING. */
		ExperimentVariations?: Array<ExperimentVariations>;

		/** Web property ID to which this experiment belongs. The web property ID is of the form UA-XXXXX-YY. This field is read-only. */
		webPropertyId?: string | null;

		/** A floating-point number in (0, 1). Specifies the necessary confidence level to choose a winner. This field may not be changed for an experiments whose status is ENDED. */
		winnerConfidenceLevel?: number | null;

		/** Boolean specifying whether a winner has been found for this experiment. This field is read-only. */
		winnerFound?: boolean | null;
	}

	/** JSON template for Analytics experiment resource. */
	export interface ExperimentFormProperties {

		/** Account ID to which this experiment belongs. This field is read-only. */
		accountId: FormControl<string | null | undefined>,

		/** Time the experiment was created. This field is read-only. */
		created: FormControl<Date | null | undefined>,

		/** Notes about this experiment. */
		description: FormControl<string | null | undefined>,

		/** If true, the end user will be able to edit the experiment via the Google Analytics user interface. */
		editableInGaUi: FormControl<boolean | null | undefined>,

		/** The ending time of the experiment (the time the status changed from RUNNING to ENDED). This field is present only if the experiment has ended. This field is read-only. */
		endTime: FormControl<Date | null | undefined>,

		/** Boolean specifying whether to distribute traffic evenly across all variations. If the value is False, content experiments follows the default behavior of adjusting traffic dynamically based on variation performance. Optional -- defaults to False. This field may not be changed for an experiment whose status is ENDED. */
		equalWeighting: FormControl<boolean | null | undefined>,

		/** Experiment ID. Required for patch and update. Disallowed for create. */
		id: FormControl<string | null | undefined>,

		/** Internal ID for the web property to which this experiment belongs. This field is read-only. */
		internalWebPropertyId: FormControl<string | null | undefined>,

		/** Resource type for an Analytics experiment. This field is read-only. */
		kind: FormControl<string | null | undefined>,

		/** An integer number in [3, 90]. Specifies the minimum length of the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED. */
		minimumExperimentLengthInDays: FormControl<number | null | undefined>,

		/** Experiment name. This field may not be changed for an experiment whose status is ENDED. This field is required when creating an experiment. */
		name: FormControl<string | null | undefined>,

		/** The metric that the experiment is optimizing. Valid values: "ga:goal(n)Completions", "ga:adsenseAdsClicks", "ga:adsenseAdsViewed", "ga:adsenseRevenue", "ga:bounces", "ga:pageviews", "ga:sessionDuration", "ga:transactions", "ga:transactionRevenue". This field is required if status is "RUNNING" and servingFramework is one of "REDIRECT" or "API". */
		objectiveMetric: FormControl<string | null | undefined>,

		/** Whether the objectiveMetric should be minimized or maximized. Possible values: "MAXIMUM", "MINIMUM". Optional--defaults to "MAXIMUM". Cannot be specified without objectiveMetric. Cannot be modified when status is "RUNNING" or "ENDED". */
		optimizationType: FormControl<string | null | undefined>,

		/** View (Profile) ID to which this experiment belongs. This field is read-only. */
		profileId: FormControl<string | null | undefined>,

		/** Why the experiment ended. Possible values: "STOPPED_BY_USER", "WINNER_FOUND", "EXPERIMENT_EXPIRED", "ENDED_WITH_NO_WINNER", "GOAL_OBJECTIVE_CHANGED". "ENDED_WITH_NO_WINNER" means that the experiment didn't expire but no winner was projected to be found. If the experiment status is changed via the API to ENDED this field is set to STOPPED_BY_USER. This field is read-only. */
		reasonExperimentEnded: FormControl<string | null | undefined>,

		/** Boolean specifying whether variations URLS are rewritten to match those of the original. This field may not be changed for an experiments whose status is ENDED. */
		rewriteVariationUrlsAsOriginal: FormControl<boolean | null | undefined>,

		/** Link for this experiment. This field is read-only. */
		selfLink: FormControl<string | null | undefined>,

		/**
		 * The framework used to serve the experiment variations and evaluate the results. One of:
		 * - REDIRECT: Google Analytics redirects traffic to different variation pages, reports the chosen variation and evaluates the results.
		 * - API: Google Analytics chooses and reports the variation to serve and evaluates the results; the caller is responsible for serving the selected variation.
		 * - EXTERNAL: The variations will be served externally and the chosen variation reported to Google Analytics. The caller is responsible for serving the selected variation and evaluating the results.
		 */
		servingFramework: FormControl<string | null | undefined>,

		/** The snippet of code to include on the control page(s). This field is read-only. */
		snippet: FormControl<string | null | undefined>,

		/** The starting time of the experiment (the time the status changed from READY_TO_RUN to RUNNING). This field is present only if the experiment has started. This field is read-only. */
		startTime: FormControl<Date | null | undefined>,

		/** Experiment status. Possible values: "DRAFT", "READY_TO_RUN", "RUNNING", "ENDED". Experiments can be created in the "DRAFT", "READY_TO_RUN" or "RUNNING" state. This field is required when creating an experiment. */
		status: FormControl<string | null | undefined>,

		/** A floating-point number in (0, 1]. Specifies the fraction of the traffic that participates in the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED. */
		trafficCoverage: FormControl<number | null | undefined>,

		/** Time the experiment was last modified. This field is read-only. */
		updated: FormControl<Date | null | undefined>,

		/** Web property ID to which this experiment belongs. The web property ID is of the form UA-XXXXX-YY. This field is read-only. */
		webPropertyId: FormControl<string | null | undefined>,

		/** A floating-point number in (0, 1). Specifies the necessary confidence level to choose a winner. This field may not be changed for an experiments whose status is ENDED. */
		winnerConfidenceLevel: FormControl<number | null | undefined>,

		/** Boolean specifying whether a winner has been found for this experiment. This field is read-only. */
		winnerFound: FormControl<boolean | null | undefined>,
	}
	export function CreateExperimentFormGroup() {
		return new FormGroup<ExperimentFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			editableInGaUi: new FormControl<boolean | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			equalWeighting: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			internalWebPropertyId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			minimumExperimentLengthInDays: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			objectiveMetric: new FormControl<string | null | undefined>(undefined),
			optimizationType: new FormControl<string | null | undefined>(undefined),
			profileId: new FormControl<string | null | undefined>(undefined),
			reasonExperimentEnded: new FormControl<string | null | undefined>(undefined),
			rewriteVariationUrlsAsOriginal: new FormControl<boolean | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			servingFramework: new FormControl<string | null | undefined>(undefined),
			snippet: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			trafficCoverage: new FormControl<number | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			webPropertyId: new FormControl<string | null | undefined>(undefined),
			winnerConfidenceLevel: new FormControl<number | null | undefined>(undefined),
			winnerFound: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ExperimentParentLink {

		/** Link to the view (profile) to which this experiment belongs. This field is read-only. */
		href?: string | null;

		/** Value is "analytics#profile". This field is read-only. */
		type?: string | null;
	}
	export interface ExperimentParentLinkFormProperties {

		/** Link to the view (profile) to which this experiment belongs. This field is read-only. */
		href: FormControl<string | null | undefined>,

		/** Value is "analytics#profile". This field is read-only. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateExperimentParentLinkFormGroup() {
		return new FormGroup<ExperimentParentLinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExperimentVariations {

		/** The name of the variation. This field is required when creating an experiment. This field may not be changed for an experiment whose status is ENDED. */
		name?: string | null;

		/** Status of the variation. Possible values: "ACTIVE", "INACTIVE". INACTIVE variations are not served. This field may not be changed for an experiment whose status is ENDED. */
		status?: string | null;

		/** The URL of the variation. This field may not be changed for an experiment whose status is RUNNING or ENDED. */
		url?: string | null;

		/** Weight that this variation should receive. Only present if the experiment is running. This field is read-only. */
		weight?: number | null;

		/** True if the experiment has ended and this variation performed (statistically) significantly better than the original. This field is read-only. */
		won?: boolean | null;
	}
	export interface ExperimentVariationsFormProperties {

		/** The name of the variation. This field is required when creating an experiment. This field may not be changed for an experiment whose status is ENDED. */
		name: FormControl<string | null | undefined>,

		/** Status of the variation. Possible values: "ACTIVE", "INACTIVE". INACTIVE variations are not served. This field may not be changed for an experiment whose status is ENDED. */
		status: FormControl<string | null | undefined>,

		/** The URL of the variation. This field may not be changed for an experiment whose status is RUNNING or ENDED. */
		url: FormControl<string | null | undefined>,

		/** Weight that this variation should receive. Only present if the experiment is running. This field is read-only. */
		weight: FormControl<number | null | undefined>,

		/** True if the experiment has ended and this variation performed (statistically) significantly better than the original. This field is read-only. */
		won: FormControl<boolean | null | undefined>,
	}
	export function CreateExperimentVariationsFormGroup() {
		return new FormGroup<ExperimentVariationsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
			won: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An experiment collection lists Analytics experiments to which the user has access. Each view (profile) can have a set of experiments. Each resource in the Experiment collection corresponds to a single Analytics experiment. */
	export interface Experiments {

		/** A list of experiments. */
		items?: Array<Experiment>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number | null;

		/** Collection type. */
		kind?: string | null;

		/** Link to next page for this experiment collection. */
		nextLink?: string | null;

		/** Link to previous page for this experiment collection. */
		previousLink?: string | null;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number | null;

		/** The total number of results for the query, regardless of the number of resources in the result. */
		totalResults?: number | null;

		/** Email ID of the authenticated user */
		username?: string | null;
	}

	/** An experiment collection lists Analytics experiments to which the user has access. Each view (profile) can have a set of experiments. Each resource in the Experiment collection corresponds to a single Analytics experiment. */
	export interface ExperimentsFormProperties {

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Collection type. */
		kind: FormControl<string | null | undefined>,

		/** Link to next page for this experiment collection. */
		nextLink: FormControl<string | null | undefined>,

		/** Link to previous page for this experiment collection. */
		previousLink: FormControl<string | null | undefined>,

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex: FormControl<number | null | undefined>,

		/** The total number of results for the query, regardless of the number of resources in the result. */
		totalResults: FormControl<number | null | undefined>,

		/** Email ID of the authenticated user */
		username: FormControl<string | null | undefined>,
	}
	export function CreateExperimentsFormGroup() {
		return new FormGroup<ExperimentsFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			previousLink: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for an Analytics account filter. */
	export interface Filter {

		/** Account ID to which this filter belongs. */
		accountId?: string | null;

		/** Details for the filter of the type ADVANCED. */
		advancedDetails?: FilterAdvancedDetails;

		/** Time this filter was created. */
		created?: Date | null;

		/** JSON template for an Analytics filter expression. */
		excludeDetails?: FilterExpression;

		/** Filter ID. */
		id?: string | null;

		/** JSON template for an Analytics filter expression. */
		includeDetails?: FilterExpression;

		/** Resource type for Analytics filter. */
		kind?: string | null;

		/** Details for the filter of the type LOWER. */
		lowercaseDetails?: FilterLowercaseDetails;

		/** Name of this filter. */
		name?: string | null;

		/** Parent link for this filter. Points to the account to which this filter belongs. */
		parentLink?: FilterParentLink;

		/** Details for the filter of the type SEARCH_AND_REPLACE. */
		searchAndReplaceDetails?: FilterSearchAndReplaceDetails;

		/** Link for this filter. */
		selfLink?: string | null;

		/** Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE, UPPERCASE, SEARCH_AND_REPLACE and ADVANCED. */
		type?: string | null;

		/** Time this filter was last modified. */
		updated?: Date | null;

		/** Details for the filter of the type UPPER. */
		uppercaseDetails?: FilterUppercaseDetails;
	}

	/** JSON template for an Analytics account filter. */
	export interface FilterFormProperties {

		/** Account ID to which this filter belongs. */
		accountId: FormControl<string | null | undefined>,

		/** Time this filter was created. */
		created: FormControl<Date | null | undefined>,

		/** Filter ID. */
		id: FormControl<string | null | undefined>,

		/** Resource type for Analytics filter. */
		kind: FormControl<string | null | undefined>,

		/** Name of this filter. */
		name: FormControl<string | null | undefined>,

		/** Link for this filter. */
		selfLink: FormControl<string | null | undefined>,

		/** Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE, UPPERCASE, SEARCH_AND_REPLACE and ADVANCED. */
		type: FormControl<string | null | undefined>,

		/** Time this filter was last modified. */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface FilterAdvancedDetails {

		/** Indicates if the filter expressions are case sensitive. */
		caseSensitive?: boolean | null;

		/** Expression to extract from field A. */
		extractA?: string | null;

		/** Expression to extract from field B. */
		extractB?: string | null;

		/** Field A. */
		fieldA?: string | null;

		/** The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. */
		fieldAIndex?: number | null;

		/** Indicates if field A is required to match. */
		fieldARequired?: boolean | null;

		/** Field B. */
		fieldB?: string | null;

		/** The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. */
		fieldBIndex?: number | null;

		/** Indicates if field B is required to match. */
		fieldBRequired?: boolean | null;

		/** Expression used to construct the output value. */
		outputConstructor?: string | null;

		/** Output field. */
		outputToField?: string | null;

		/** The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. */
		outputToFieldIndex?: number | null;

		/** Indicates if the existing value of the output field, if any, should be overridden by the output expression. */
		overrideOutputField?: boolean | null;
	}
	export interface FilterAdvancedDetailsFormProperties {

		/** Indicates if the filter expressions are case sensitive. */
		caseSensitive: FormControl<boolean | null | undefined>,

		/** Expression to extract from field A. */
		extractA: FormControl<string | null | undefined>,

		/** Expression to extract from field B. */
		extractB: FormControl<string | null | undefined>,

		/** Field A. */
		fieldA: FormControl<string | null | undefined>,

		/** The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. */
		fieldAIndex: FormControl<number | null | undefined>,

		/** Indicates if field A is required to match. */
		fieldARequired: FormControl<boolean | null | undefined>,

		/** Field B. */
		fieldB: FormControl<string | null | undefined>,

		/** The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. */
		fieldBIndex: FormControl<number | null | undefined>,

		/** Indicates if field B is required to match. */
		fieldBRequired: FormControl<boolean | null | undefined>,

		/** Expression used to construct the output value. */
		outputConstructor: FormControl<string | null | undefined>,

		/** Output field. */
		outputToField: FormControl<string | null | undefined>,

		/** The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. */
		outputToFieldIndex: FormControl<number | null | undefined>,

		/** Indicates if the existing value of the output field, if any, should be overridden by the output expression. */
		overrideOutputField: FormControl<boolean | null | undefined>,
	}
	export function CreateFilterAdvancedDetailsFormGroup() {
		return new FormGroup<FilterAdvancedDetailsFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
			extractA: new FormControl<string | null | undefined>(undefined),
			extractB: new FormControl<string | null | undefined>(undefined),
			fieldA: new FormControl<string | null | undefined>(undefined),
			fieldAIndex: new FormControl<number | null | undefined>(undefined),
			fieldARequired: new FormControl<boolean | null | undefined>(undefined),
			fieldB: new FormControl<string | null | undefined>(undefined),
			fieldBIndex: new FormControl<number | null | undefined>(undefined),
			fieldBRequired: new FormControl<boolean | null | undefined>(undefined),
			outputConstructor: new FormControl<string | null | undefined>(undefined),
			outputToField: new FormControl<string | null | undefined>(undefined),
			outputToFieldIndex: new FormControl<number | null | undefined>(undefined),
			overrideOutputField: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** JSON template for an Analytics filter expression. */
	export interface FilterExpression {

		/** Determines if the filter is case sensitive. */
		caseSensitive?: boolean | null;

		/** Filter expression value */
		expressionValue?: string | null;

		/**
		 * Field to filter. Possible values:
		 * - Content and Traffic
		 * - PAGE_REQUEST_URI,
		 * - PAGE_HOSTNAME,
		 * - PAGE_TITLE,
		 * - REFERRAL,
		 * - COST_DATA_URI (Campaign target URL),
		 * - HIT_TYPE,
		 * - INTERNAL_SEARCH_TERM,
		 * - INTERNAL_SEARCH_TYPE,
		 * - SOURCE_PROPERTY_TRACKING_ID,
		 * - Campaign or AdGroup
		 * - CAMPAIGN_SOURCE,
		 * - CAMPAIGN_MEDIUM,
		 * - CAMPAIGN_NAME,
		 * - CAMPAIGN_AD_GROUP,
		 * - CAMPAIGN_TERM,
		 * - CAMPAIGN_CONTENT,
		 * - CAMPAIGN_CODE,
		 * - CAMPAIGN_REFERRAL_PATH,
		 * - E-Commerce
		 * - TRANSACTION_COUNTRY,
		 * - TRANSACTION_REGION,
		 * - TRANSACTION_CITY,
		 * - TRANSACTION_AFFILIATION (Store or order location),
		 * - ITEM_NAME,
		 * - ITEM_CODE,
		 * - ITEM_VARIATION,
		 * - TRANSACTION_ID,
		 * - TRANSACTION_CURRENCY_CODE,
		 * - PRODUCT_ACTION_TYPE,
		 * - Audience/Users
		 * - BROWSER,
		 * - BROWSER_VERSION,
		 * - BROWSER_SIZE,
		 * - PLATFORM,
		 * - PLATFORM_VERSION,
		 * - LANGUAGE,
		 * - SCREEN_RESOLUTION,
		 * - SCREEN_COLORS,
		 * - JAVA_ENABLED (Boolean Field),
		 * - FLASH_VERSION,
		 * - GEO_SPEED (Connection speed),
		 * - VISITOR_TYPE,
		 * - GEO_ORGANIZATION (ISP organization),
		 * - GEO_DOMAIN,
		 * - GEO_IP_ADDRESS,
		 * - GEO_IP_VERSION,
		 * - Location
		 * - GEO_COUNTRY,
		 * - GEO_REGION,
		 * - GEO_CITY,
		 * - Event
		 * - EVENT_CATEGORY,
		 * - EVENT_ACTION,
		 * - EVENT_LABEL,
		 * - Other
		 * - CUSTOM_FIELD_1,
		 * - CUSTOM_FIELD_2,
		 * - USER_DEFINED_VALUE,
		 * - Application
		 * - APP_ID,
		 * - APP_INSTALLER_ID,
		 * - APP_NAME,
		 * - APP_VERSION,
		 * - SCREEN,
		 * - IS_APP (Boolean Field),
		 * - IS_FATAL_EXCEPTION (Boolean Field),
		 * - EXCEPTION_DESCRIPTION,
		 * - Mobile device
		 * - IS_MOBILE (Boolean Field, Deprecated. Use DEVICE_CATEGORY=mobile),
		 * - IS_TABLET (Boolean Field, Deprecated. Use DEVICE_CATEGORY=tablet),
		 * - DEVICE_CATEGORY,
		 * - MOBILE_HAS_QWERTY_KEYBOARD (Boolean Field),
		 * - MOBILE_HAS_NFC_SUPPORT (Boolean Field),
		 * - MOBILE_HAS_CELLULAR_RADIO (Boolean Field),
		 * - MOBILE_HAS_WIFI_SUPPORT (Boolean Field),
		 * - MOBILE_BRAND_NAME,
		 * - MOBILE_MODEL_NAME,
		 * - MOBILE_MARKETING_NAME,
		 * - MOBILE_POINTING_METHOD,
		 * - Social
		 * - SOCIAL_NETWORK,
		 * - SOCIAL_ACTION,
		 * - SOCIAL_ACTION_TARGET,
		 * - Custom dimension
		 * - CUSTOM_DIMENSION (See accompanying field index),
		 */
		field?: string | null;

		/** The Index of the custom dimension. Set only if the field is a is CUSTOM_DIMENSION. */
		fieldIndex?: number | null;

		/** Kind value for filter expression */
		kind?: string | null;

		/** Match type for this filter. Possible values are BEGINS_WITH, EQUAL, ENDS_WITH, CONTAINS, or MATCHES. GEO_DOMAIN, GEO_IP_ADDRESS, PAGE_REQUEST_URI, or PAGE_HOSTNAME filters can use any match type; all other filters must use MATCHES. */
		matchType?: string | null;
	}

	/** JSON template for an Analytics filter expression. */
	export interface FilterExpressionFormProperties {

		/** Determines if the filter is case sensitive. */
		caseSensitive: FormControl<boolean | null | undefined>,

		/** Filter expression value */
		expressionValue: FormControl<string | null | undefined>,

		/**
		 * Field to filter. Possible values:
		 * - Content and Traffic
		 * - PAGE_REQUEST_URI,
		 * - PAGE_HOSTNAME,
		 * - PAGE_TITLE,
		 * - REFERRAL,
		 * - COST_DATA_URI (Campaign target URL),
		 * - HIT_TYPE,
		 * - INTERNAL_SEARCH_TERM,
		 * - INTERNAL_SEARCH_TYPE,
		 * - SOURCE_PROPERTY_TRACKING_ID,
		 * - Campaign or AdGroup
		 * - CAMPAIGN_SOURCE,
		 * - CAMPAIGN_MEDIUM,
		 * - CAMPAIGN_NAME,
		 * - CAMPAIGN_AD_GROUP,
		 * - CAMPAIGN_TERM,
		 * - CAMPAIGN_CONTENT,
		 * - CAMPAIGN_CODE,
		 * - CAMPAIGN_REFERRAL_PATH,
		 * - E-Commerce
		 * - TRANSACTION_COUNTRY,
		 * - TRANSACTION_REGION,
		 * - TRANSACTION_CITY,
		 * - TRANSACTION_AFFILIATION (Store or order location),
		 * - ITEM_NAME,
		 * - ITEM_CODE,
		 * - ITEM_VARIATION,
		 * - TRANSACTION_ID,
		 * - TRANSACTION_CURRENCY_CODE,
		 * - PRODUCT_ACTION_TYPE,
		 * - Audience/Users
		 * - BROWSER,
		 * - BROWSER_VERSION,
		 * - BROWSER_SIZE,
		 * - PLATFORM,
		 * - PLATFORM_VERSION,
		 * - LANGUAGE,
		 * - SCREEN_RESOLUTION,
		 * - SCREEN_COLORS,
		 * - JAVA_ENABLED (Boolean Field),
		 * - FLASH_VERSION,
		 * - GEO_SPEED (Connection speed),
		 * - VISITOR_TYPE,
		 * - GEO_ORGANIZATION (ISP organization),
		 * - GEO_DOMAIN,
		 * - GEO_IP_ADDRESS,
		 * - GEO_IP_VERSION,
		 * - Location
		 * - GEO_COUNTRY,
		 * - GEO_REGION,
		 * - GEO_CITY,
		 * - Event
		 * - EVENT_CATEGORY,
		 * - EVENT_ACTION,
		 * - EVENT_LABEL,
		 * - Other
		 * - CUSTOM_FIELD_1,
		 * - CUSTOM_FIELD_2,
		 * - USER_DEFINED_VALUE,
		 * - Application
		 * - APP_ID,
		 * - APP_INSTALLER_ID,
		 * - APP_NAME,
		 * - APP_VERSION,
		 * - SCREEN,
		 * - IS_APP (Boolean Field),
		 * - IS_FATAL_EXCEPTION (Boolean Field),
		 * - EXCEPTION_DESCRIPTION,
		 * - Mobile device
		 * - IS_MOBILE (Boolean Field, Deprecated. Use DEVICE_CATEGORY=mobile),
		 * - IS_TABLET (Boolean Field, Deprecated. Use DEVICE_CATEGORY=tablet),
		 * - DEVICE_CATEGORY,
		 * - MOBILE_HAS_QWERTY_KEYBOARD (Boolean Field),
		 * - MOBILE_HAS_NFC_SUPPORT (Boolean Field),
		 * - MOBILE_HAS_CELLULAR_RADIO (Boolean Field),
		 * - MOBILE_HAS_WIFI_SUPPORT (Boolean Field),
		 * - MOBILE_BRAND_NAME,
		 * - MOBILE_MODEL_NAME,
		 * - MOBILE_MARKETING_NAME,
		 * - MOBILE_POINTING_METHOD,
		 * - Social
		 * - SOCIAL_NETWORK,
		 * - SOCIAL_ACTION,
		 * - SOCIAL_ACTION_TARGET,
		 * - Custom dimension
		 * - CUSTOM_DIMENSION (See accompanying field index),
		 */
		field: FormControl<string | null | undefined>,

		/** The Index of the custom dimension. Set only if the field is a is CUSTOM_DIMENSION. */
		fieldIndex: FormControl<number | null | undefined>,

		/** Kind value for filter expression */
		kind: FormControl<string | null | undefined>,

		/** Match type for this filter. Possible values are BEGINS_WITH, EQUAL, ENDS_WITH, CONTAINS, or MATCHES. GEO_DOMAIN, GEO_IP_ADDRESS, PAGE_REQUEST_URI, or PAGE_HOSTNAME filters can use any match type; all other filters must use MATCHES. */
		matchType: FormControl<string | null | undefined>,
	}
	export function CreateFilterExpressionFormGroup() {
		return new FormGroup<FilterExpressionFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
			expressionValue: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			fieldIndex: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			matchType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FilterLowercaseDetails {

		/** Field to use in the filter. */
		field?: string | null;

		/** The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. */
		fieldIndex?: number | null;
	}
	export interface FilterLowercaseDetailsFormProperties {

		/** Field to use in the filter. */
		field: FormControl<string | null | undefined>,

		/** The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. */
		fieldIndex: FormControl<number | null | undefined>,
	}
	export function CreateFilterLowercaseDetailsFormGroup() {
		return new FormGroup<FilterLowercaseDetailsFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
			fieldIndex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FilterParentLink {

		/** Link to the account to which this filter belongs. */
		href?: string | null;

		/** Value is "analytics#account". */
		type?: string | null;
	}
	export interface FilterParentLinkFormProperties {

		/** Link to the account to which this filter belongs. */
		href: FormControl<string | null | undefined>,

		/** Value is "analytics#account". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFilterParentLinkFormGroup() {
		return new FormGroup<FilterParentLinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FilterSearchAndReplaceDetails {

		/** Determines if the filter is case sensitive. */
		caseSensitive?: boolean | null;

		/** Field to use in the filter. */
		field?: string | null;

		/** The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. */
		fieldIndex?: number | null;

		/** Term to replace the search term with. */
		replaceString?: string | null;

		/** Term to search. */
		searchString?: string | null;
	}
	export interface FilterSearchAndReplaceDetailsFormProperties {

		/** Determines if the filter is case sensitive. */
		caseSensitive: FormControl<boolean | null | undefined>,

		/** Field to use in the filter. */
		field: FormControl<string | null | undefined>,

		/** The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. */
		fieldIndex: FormControl<number | null | undefined>,

		/** Term to replace the search term with. */
		replaceString: FormControl<string | null | undefined>,

		/** Term to search. */
		searchString: FormControl<string | null | undefined>,
	}
	export function CreateFilterSearchAndReplaceDetailsFormGroup() {
		return new FormGroup<FilterSearchAndReplaceDetailsFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			fieldIndex: new FormControl<number | null | undefined>(undefined),
			replaceString: new FormControl<string | null | undefined>(undefined),
			searchString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FilterUppercaseDetails {

		/** Field to use in the filter. */
		field?: string | null;

		/** The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. */
		fieldIndex?: number | null;
	}
	export interface FilterUppercaseDetailsFormProperties {

		/** Field to use in the filter. */
		field: FormControl<string | null | undefined>,

		/** The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION. */
		fieldIndex: FormControl<number | null | undefined>,
	}
	export function CreateFilterUppercaseDetailsFormGroup() {
		return new FormGroup<FilterUppercaseDetailsFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
			fieldIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** JSON template for a profile filter link. */
	export interface FilterRef {

		/** Account ID to which this filter belongs. */
		accountId?: string | null;

		/** Link for this filter. */
		href?: string | null;

		/** Filter ID. */
		id?: string | null;

		/** Kind value for filter reference. */
		kind?: string | null;

		/** Name of this filter. */
		name?: string | null;
	}

	/** JSON template for a profile filter link. */
	export interface FilterRefFormProperties {

		/** Account ID to which this filter belongs. */
		accountId: FormControl<string | null | undefined>,

		/** Link for this filter. */
		href: FormControl<string | null | undefined>,

		/** Filter ID. */
		id: FormControl<string | null | undefined>,

		/** Kind value for filter reference. */
		kind: FormControl<string | null | undefined>,

		/** Name of this filter. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFilterRefFormGroup() {
		return new FormGroup<FilterRefFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter collection lists filters created by users in an Analytics account. Each resource in the collection corresponds to a filter. */
	export interface Filters {

		/** A list of filters. */
		items?: Array<Filter>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number | null;

		/** Collection type. */
		kind?: string | null;

		/** Link to next page for this filter collection. */
		nextLink?: string | null;

		/** Link to previous page for this filter collection. */
		previousLink?: string | null;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number | null;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number | null;

		/** Email ID of the authenticated user */
		username?: string | null;
	}

	/** A filter collection lists filters created by users in an Analytics account. Each resource in the collection corresponds to a filter. */
	export interface FiltersFormProperties {

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Collection type. */
		kind: FormControl<string | null | undefined>,

		/** Link to next page for this filter collection. */
		nextLink: FormControl<string | null | undefined>,

		/** Link to previous page for this filter collection. */
		previousLink: FormControl<string | null | undefined>,

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex: FormControl<number | null | undefined>,

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults: FormControl<number | null | undefined>,

		/** Email ID of the authenticated user */
		username: FormControl<string | null | undefined>,
	}
	export function CreateFiltersFormGroup() {
		return new FormGroup<FiltersFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			previousLink: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Analytics data for a given view (profile). */
	export interface GaData {

		/** Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request. */
		GaDataColumnHeaders?: Array<GaDataColumnHeaders>;

		/** Determines if Analytics data contains samples. */
		containsSampledData?: boolean | null;

		/** The last refreshed time in seconds for Analytics data. */
		dataLastRefreshed?: string | null;
		dataTable?: GaDataDataTable;

		/** Unique ID for this data response. */
		id?: string | null;

		/** The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number | null;

		/** Resource type. */
		kind?: string | null;

		/** Link to next page for this Analytics data query. */
		nextLink?: string | null;

		/** Link to previous page for this Analytics data query. */
		previousLink?: string | null;

		/** Information for the view (profile), for which the Analytics data was requested. */
		profileInfo?: GaDataProfileInfo;

		/** Analytics data request query parameters. */
		query?: GaDataQuery;

		/** Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request. */
		rows?: Array<string>;

		/** The number of samples used to calculate the result. */
		sampleSize?: string | null;

		/** Total size of the sample space from which the samples were selected. */
		sampleSpace?: string | null;

		/** Link to this page. */
		selfLink?: string | null;

		/** The total number of rows for the query, regardless of the number of rows in the response. */
		totalResults?: number | null;

		/** Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request. */
		totalsForAllResults?: {[id: string]: string };
	}

	/** Analytics data for a given view (profile). */
	export interface GaDataFormProperties {

		/** Determines if Analytics data contains samples. */
		containsSampledData: FormControl<boolean | null | undefined>,

		/** The last refreshed time in seconds for Analytics data. */
		dataLastRefreshed: FormControl<string | null | undefined>,

		/** Unique ID for this data response. */
		id: FormControl<string | null | undefined>,

		/** The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Resource type. */
		kind: FormControl<string | null | undefined>,

		/** Link to next page for this Analytics data query. */
		nextLink: FormControl<string | null | undefined>,

		/** Link to previous page for this Analytics data query. */
		previousLink: FormControl<string | null | undefined>,

		/** The number of samples used to calculate the result. */
		sampleSize: FormControl<string | null | undefined>,

		/** Total size of the sample space from which the samples were selected. */
		sampleSpace: FormControl<string | null | undefined>,

		/** Link to this page. */
		selfLink: FormControl<string | null | undefined>,

		/** The total number of rows for the query, regardless of the number of rows in the response. */
		totalResults: FormControl<number | null | undefined>,

		/** Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request. */
		totalsForAllResults: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGaDataFormGroup() {
		return new FormGroup<GaDataFormProperties>({
			containsSampledData: new FormControl<boolean | null | undefined>(undefined),
			dataLastRefreshed: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			previousLink: new FormControl<string | null | undefined>(undefined),
			sampleSize: new FormControl<string | null | undefined>(undefined),
			sampleSpace: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
			totalsForAllResults: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface GaDataColumnHeaders {

		/** Column Type. Either DIMENSION or METRIC. */
		columnType?: string | null;

		/** Data type. Dimension column headers have only STRING as the data type. Metric column headers have data types for metric values such as INTEGER, DOUBLE, CURRENCY etc. */
		dataType?: string | null;

		/** Column name. */
		name?: string | null;
	}
	export interface GaDataColumnHeadersFormProperties {

		/** Column Type. Either DIMENSION or METRIC. */
		columnType: FormControl<string | null | undefined>,

		/** Data type. Dimension column headers have only STRING as the data type. Metric column headers have data types for metric values such as INTEGER, DOUBLE, CURRENCY etc. */
		dataType: FormControl<string | null | undefined>,

		/** Column name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGaDataColumnHeadersFormGroup() {
		return new FormGroup<GaDataColumnHeadersFormProperties>({
			columnType: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GaDataDataTable {
		GaDataDataTableCols?: Array<GaDataDataTableCols>;
		GaDataDataTableRows?: Array<GaDataDataTableRows>;
	}
	export interface GaDataDataTableFormProperties {
	}
	export function CreateGaDataDataTableFormGroup() {
		return new FormGroup<GaDataDataTableFormProperties>({
		});

	}

	export interface GaDataDataTableCols {
		id?: string | null;
		label?: string | null;
		type?: string | null;
	}
	export interface GaDataDataTableColsFormProperties {
		id: FormControl<string | null | undefined>,
		label: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateGaDataDataTableColsFormGroup() {
		return new FormGroup<GaDataDataTableColsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GaDataDataTableRows {
		GaDataDataTableRowsC?: Array<GaDataDataTableRowsC>;
	}
	export interface GaDataDataTableRowsFormProperties {
	}
	export function CreateGaDataDataTableRowsFormGroup() {
		return new FormGroup<GaDataDataTableRowsFormProperties>({
		});

	}

	export interface GaDataDataTableRowsC {
		v?: string | null;
	}
	export interface GaDataDataTableRowsCFormProperties {
		v: FormControl<string | null | undefined>,
	}
	export function CreateGaDataDataTableRowsCFormGroup() {
		return new FormGroup<GaDataDataTableRowsCFormProperties>({
			v: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GaDataProfileInfo {

		/** Account ID to which this view (profile) belongs. */
		accountId?: string | null;

		/** Internal ID for the web property to which this view (profile) belongs. */
		internalWebPropertyId?: string | null;

		/** View (Profile) ID. */
		profileId?: string | null;

		/** View (Profile) name. */
		profileName?: string | null;

		/** Table ID for view (profile). */
		tableId?: string | null;

		/** Web Property ID to which this view (profile) belongs. */
		webPropertyId?: string | null;
	}
	export interface GaDataProfileInfoFormProperties {

		/** Account ID to which this view (profile) belongs. */
		accountId: FormControl<string | null | undefined>,

		/** Internal ID for the web property to which this view (profile) belongs. */
		internalWebPropertyId: FormControl<string | null | undefined>,

		/** View (Profile) ID. */
		profileId: FormControl<string | null | undefined>,

		/** View (Profile) name. */
		profileName: FormControl<string | null | undefined>,

		/** Table ID for view (profile). */
		tableId: FormControl<string | null | undefined>,

		/** Web Property ID to which this view (profile) belongs. */
		webPropertyId: FormControl<string | null | undefined>,
	}
	export function CreateGaDataProfileInfoFormGroup() {
		return new FormGroup<GaDataProfileInfoFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			internalWebPropertyId: new FormControl<string | null | undefined>(undefined),
			profileId: new FormControl<string | null | undefined>(undefined),
			profileName: new FormControl<string | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
			webPropertyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GaDataQuery {

		/** List of analytics dimensions. */
		dimensions?: string | null;

		/** End date. */
		'end-date'?: string | null;

		/** Comma-separated list of dimension or metric filters. */
		filters?: string | null;

		/** Unique table ID. */
		ids?: string | null;

		/** Maximum results per page. */
		'max-results'?: number | null;

		/** List of analytics metrics. */
		metrics?: Array<string>;

		/** Desired sampling level */
		samplingLevel?: string | null;

		/** Analytics advanced segment. */
		segment?: string | null;

		/** List of dimensions or metrics based on which Analytics data is sorted. */
		sort?: Array<string>;

		/** Start date. */
		'start-date'?: string | null;

		/** Start index. */
		'start-index'?: number | null;
	}
	export interface GaDataQueryFormProperties {

		/** List of analytics dimensions. */
		dimensions: FormControl<string | null | undefined>,

		/** End date. */
		'end-date': FormControl<string | null | undefined>,

		/** Comma-separated list of dimension or metric filters. */
		filters: FormControl<string | null | undefined>,

		/** Unique table ID. */
		ids: FormControl<string | null | undefined>,

		/** Maximum results per page. */
		'max-results': FormControl<number | null | undefined>,

		/** Desired sampling level */
		samplingLevel: FormControl<string | null | undefined>,

		/** Analytics advanced segment. */
		segment: FormControl<string | null | undefined>,

		/** Start date. */
		'start-date': FormControl<string | null | undefined>,

		/** Start index. */
		'start-index': FormControl<number | null | undefined>,
	}
	export function CreateGaDataQueryFormGroup() {
		return new FormGroup<GaDataQueryFormProperties>({
			dimensions: new FormControl<string | null | undefined>(undefined),
			'end-date': new FormControl<string | null | undefined>(undefined),
			filters: new FormControl<string | null | undefined>(undefined),
			ids: new FormControl<string | null | undefined>(undefined),
			'max-results': new FormControl<number | null | undefined>(undefined),
			samplingLevel: new FormControl<string | null | undefined>(undefined),
			segment: new FormControl<string | null | undefined>(undefined),
			'start-date': new FormControl<string | null | undefined>(undefined),
			'start-index': new FormControl<number | null | undefined>(undefined),
		});

	}


	/** JSON template for Analytics goal resource. */
	export interface Goal {

		/** Account ID to which this goal belongs. */
		accountId?: string | null;

		/** Determines whether this goal is active. */
		active?: boolean | null;

		/** Time this goal was created. */
		created?: Date | null;

		/** Details for the goal of the type EVENT. */
		eventDetails?: GoalEventDetails;

		/** Goal ID. */
		id?: string | null;

		/** Internal ID for the web property to which this goal belongs. */
		internalWebPropertyId?: string | null;

		/** Resource type for an Analytics goal. */
		kind?: string | null;

		/** Goal name. */
		name?: string | null;

		/** Parent link for a goal. Points to the view (profile) to which this goal belongs. */
		parentLink?: GoalParentLink;

		/** View (Profile) ID to which this goal belongs. */
		profileId?: string | null;

		/** Link for this goal. */
		selfLink?: string | null;

		/** Goal type. Possible values are URL_DESTINATION, VISIT_TIME_ON_SITE, VISIT_NUM_PAGES, AND EVENT. */
		type?: string | null;

		/** Time this goal was last modified. */
		updated?: Date | null;

		/** Details for the goal of the type URL_DESTINATION. */
		urlDestinationDetails?: GoalUrlDestinationDetails;

		/** Goal value. */
		value?: number | null;

		/** Details for the goal of the type VISIT_NUM_PAGES. */
		visitNumPagesDetails?: GoalVisitNumPagesDetails;

		/** Details for the goal of the type VISIT_TIME_ON_SITE. */
		visitTimeOnSiteDetails?: GoalVisitTimeOnSiteDetails;

		/** Web property ID to which this goal belongs. The web property ID is of the form UA-XXXXX-YY. */
		webPropertyId?: string | null;
	}

	/** JSON template for Analytics goal resource. */
	export interface GoalFormProperties {

		/** Account ID to which this goal belongs. */
		accountId: FormControl<string | null | undefined>,

		/** Determines whether this goal is active. */
		active: FormControl<boolean | null | undefined>,

		/** Time this goal was created. */
		created: FormControl<Date | null | undefined>,

		/** Goal ID. */
		id: FormControl<string | null | undefined>,

		/** Internal ID for the web property to which this goal belongs. */
		internalWebPropertyId: FormControl<string | null | undefined>,

		/** Resource type for an Analytics goal. */
		kind: FormControl<string | null | undefined>,

		/** Goal name. */
		name: FormControl<string | null | undefined>,

		/** View (Profile) ID to which this goal belongs. */
		profileId: FormControl<string | null | undefined>,

		/** Link for this goal. */
		selfLink: FormControl<string | null | undefined>,

		/** Goal type. Possible values are URL_DESTINATION, VISIT_TIME_ON_SITE, VISIT_NUM_PAGES, AND EVENT. */
		type: FormControl<string | null | undefined>,

		/** Time this goal was last modified. */
		updated: FormControl<Date | null | undefined>,

		/** Goal value. */
		value: FormControl<number | null | undefined>,

		/** Web property ID to which this goal belongs. The web property ID is of the form UA-XXXXX-YY. */
		webPropertyId: FormControl<string | null | undefined>,
	}
	export function CreateGoalFormGroup() {
		return new FormGroup<GoalFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			internalWebPropertyId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			profileId: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
			webPropertyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoalEventDetails {

		/** List of event conditions. */
		GoalEventDetailsEventConditions?: Array<GoalEventDetailsEventConditions>;

		/** Determines if the event value should be used as the value for this goal. */
		useEventValue?: boolean | null;
	}
	export interface GoalEventDetailsFormProperties {

		/** Determines if the event value should be used as the value for this goal. */
		useEventValue: FormControl<boolean | null | undefined>,
	}
	export function CreateGoalEventDetailsFormGroup() {
		return new FormGroup<GoalEventDetailsFormProperties>({
			useEventValue: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GoalEventDetailsEventConditions {

		/** Type of comparison. Possible values are LESS_THAN, GREATER_THAN or EQUAL. */
		comparisonType?: string | null;

		/** Value used for this comparison. */
		comparisonValue?: string | null;

		/** Expression used for this match. */
		expression?: string | null;

		/** Type of the match to be performed. Possible values are REGEXP, BEGINS_WITH, or EXACT. */
		matchType?: string | null;

		/** Type of this event condition. Possible values are CATEGORY, ACTION, LABEL, or VALUE. */
		type?: string | null;
	}
	export interface GoalEventDetailsEventConditionsFormProperties {

		/** Type of comparison. Possible values are LESS_THAN, GREATER_THAN or EQUAL. */
		comparisonType: FormControl<string | null | undefined>,

		/** Value used for this comparison. */
		comparisonValue: FormControl<string | null | undefined>,

		/** Expression used for this match. */
		expression: FormControl<string | null | undefined>,

		/** Type of the match to be performed. Possible values are REGEXP, BEGINS_WITH, or EXACT. */
		matchType: FormControl<string | null | undefined>,

		/** Type of this event condition. Possible values are CATEGORY, ACTION, LABEL, or VALUE. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoalEventDetailsEventConditionsFormGroup() {
		return new FormGroup<GoalEventDetailsEventConditionsFormProperties>({
			comparisonType: new FormControl<string | null | undefined>(undefined),
			comparisonValue: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			matchType: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoalParentLink {

		/** Link to the view (profile) to which this goal belongs. */
		href?: string | null;

		/** Value is "analytics#profile". */
		type?: string | null;
	}
	export interface GoalParentLinkFormProperties {

		/** Link to the view (profile) to which this goal belongs. */
		href: FormControl<string | null | undefined>,

		/** Value is "analytics#profile". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoalParentLinkFormGroup() {
		return new FormGroup<GoalParentLinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoalUrlDestinationDetails {

		/** Determines if the goal URL must exactly match the capitalization of visited URLs. */
		caseSensitive?: boolean | null;

		/** Determines if the first step in this goal is required. */
		firstStepRequired?: boolean | null;

		/** Match type for the goal URL. Possible values are HEAD, EXACT, or REGEX. */
		matchType?: string | null;

		/** List of steps configured for this goal funnel. */
		GoalUrlDestinationDetailsSteps?: Array<GoalUrlDestinationDetailsSteps>;

		/** URL for this goal. */
		url?: string | null;
	}
	export interface GoalUrlDestinationDetailsFormProperties {

		/** Determines if the goal URL must exactly match the capitalization of visited URLs. */
		caseSensitive: FormControl<boolean | null | undefined>,

		/** Determines if the first step in this goal is required. */
		firstStepRequired: FormControl<boolean | null | undefined>,

		/** Match type for the goal URL. Possible values are HEAD, EXACT, or REGEX. */
		matchType: FormControl<string | null | undefined>,

		/** URL for this goal. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGoalUrlDestinationDetailsFormGroup() {
		return new FormGroup<GoalUrlDestinationDetailsFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
			firstStepRequired: new FormControl<boolean | null | undefined>(undefined),
			matchType: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoalUrlDestinationDetailsSteps {

		/** Step name. */
		name?: string | null;

		/** Step number. */
		number?: number | null;

		/** URL for this step. */
		url?: string | null;
	}
	export interface GoalUrlDestinationDetailsStepsFormProperties {

		/** Step name. */
		name: FormControl<string | null | undefined>,

		/** Step number. */
		number: FormControl<number | null | undefined>,

		/** URL for this step. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGoalUrlDestinationDetailsStepsFormGroup() {
		return new FormGroup<GoalUrlDestinationDetailsStepsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoalVisitNumPagesDetails {

		/** Type of comparison. Possible values are LESS_THAN, GREATER_THAN, or EQUAL. */
		comparisonType?: string | null;

		/** Value used for this comparison. */
		comparisonValue?: string | null;
	}
	export interface GoalVisitNumPagesDetailsFormProperties {

		/** Type of comparison. Possible values are LESS_THAN, GREATER_THAN, or EQUAL. */
		comparisonType: FormControl<string | null | undefined>,

		/** Value used for this comparison. */
		comparisonValue: FormControl<string | null | undefined>,
	}
	export function CreateGoalVisitNumPagesDetailsFormGroup() {
		return new FormGroup<GoalVisitNumPagesDetailsFormProperties>({
			comparisonType: new FormControl<string | null | undefined>(undefined),
			comparisonValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoalVisitTimeOnSiteDetails {

		/** Type of comparison. Possible values are LESS_THAN or GREATER_THAN. */
		comparisonType?: string | null;

		/** Value used for this comparison. */
		comparisonValue?: string | null;
	}
	export interface GoalVisitTimeOnSiteDetailsFormProperties {

		/** Type of comparison. Possible values are LESS_THAN or GREATER_THAN. */
		comparisonType: FormControl<string | null | undefined>,

		/** Value used for this comparison. */
		comparisonValue: FormControl<string | null | undefined>,
	}
	export function CreateGoalVisitTimeOnSiteDetailsFormGroup() {
		return new FormGroup<GoalVisitTimeOnSiteDetailsFormProperties>({
			comparisonType: new FormControl<string | null | undefined>(undefined),
			comparisonValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A goal collection lists Analytics goals to which the user has access. Each view (profile) can have a set of goals. Each resource in the Goal collection corresponds to a single Analytics goal. */
	export interface Goals {

		/** A list of goals. */
		items?: Array<Goal>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number | null;

		/** Collection type. */
		kind?: string | null;

		/** Link to next page for this goal collection. */
		nextLink?: string | null;

		/** Link to previous page for this goal collection. */
		previousLink?: string | null;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number | null;

		/** The total number of results for the query, regardless of the number of resources in the result. */
		totalResults?: number | null;

		/** Email ID of the authenticated user */
		username?: string | null;
	}

	/** A goal collection lists Analytics goals to which the user has access. Each view (profile) can have a set of goals. Each resource in the Goal collection corresponds to a single Analytics goal. */
	export interface GoalsFormProperties {

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Collection type. */
		kind: FormControl<string | null | undefined>,

		/** Link to next page for this goal collection. */
		nextLink: FormControl<string | null | undefined>,

		/** Link to previous page for this goal collection. */
		previousLink: FormControl<string | null | undefined>,

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex: FormControl<number | null | undefined>,

		/** The total number of results for the query, regardless of the number of resources in the result. */
		totalResults: FormControl<number | null | undefined>,

		/** Email ID of the authenticated user */
		username: FormControl<string | null | undefined>,
	}
	export function CreateGoalsFormGroup() {
		return new FormGroup<GoalsFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			previousLink: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for a hash Client Id request resource. */
	export interface HashClientIdRequest {
		clientId?: string | null;
		kind?: string | null;
		webPropertyId?: string | null;
	}

	/** JSON template for a hash Client Id request resource. */
	export interface HashClientIdRequestFormProperties {
		clientId: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
		webPropertyId: FormControl<string | null | undefined>,
	}
	export function CreateHashClientIdRequestFormGroup() {
		return new FormGroup<HashClientIdRequestFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			webPropertyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for a hash Client Id response resource. */
	export interface HashClientIdResponse {
		clientId?: string | null;
		hashedClientId?: string | null;
		kind?: string | null;
		webPropertyId?: string | null;
	}

	/** JSON template for a hash Client Id response resource. */
	export interface HashClientIdResponseFormProperties {
		clientId: FormControl<string | null | undefined>,
		hashedClientId: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
		webPropertyId: FormControl<string | null | undefined>,
	}
	export function CreateHashClientIdResponseFormGroup() {
		return new FormGroup<HashClientIdResponseFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			hashedClientId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			webPropertyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for an Analytics Remarketing Include Conditions. */
	export interface IncludeConditions {

		/** The look-back window lets you specify a time frame for evaluating the behavior that qualifies users for your audience. For example, if your filters include users from Central Asia, and Transactions Greater than 2, and you set the look-back window to 14 days, then any user from Central Asia whose cumulative transactions exceed 2 during the last 14 days is added to the audience. */
		daysToLookBack?: number | null;

		/** Boolean indicating whether this segment is a smart list. https://support.google.com/analytics/answer/4628577 */
		isSmartList?: boolean | null;

		/** Resource type for include conditions. */
		kind?: string | null;

		/** Number of days (in the range 1 to 540) a user remains in the audience. */
		membershipDurationDays?: number | null;

		/** The segment condition that will cause a user to be added to an audience. */
		segment?: string | null;
	}

	/** JSON template for an Analytics Remarketing Include Conditions. */
	export interface IncludeConditionsFormProperties {

		/** The look-back window lets you specify a time frame for evaluating the behavior that qualifies users for your audience. For example, if your filters include users from Central Asia, and Transactions Greater than 2, and you set the look-back window to 14 days, then any user from Central Asia whose cumulative transactions exceed 2 during the last 14 days is added to the audience. */
		daysToLookBack: FormControl<number | null | undefined>,

		/** Boolean indicating whether this segment is a smart list. https://support.google.com/analytics/answer/4628577 */
		isSmartList: FormControl<boolean | null | undefined>,

		/** Resource type for include conditions. */
		kind: FormControl<string | null | undefined>,

		/** Number of days (in the range 1 to 540) a user remains in the audience. */
		membershipDurationDays: FormControl<number | null | undefined>,

		/** The segment condition that will cause a user to be added to an audience. */
		segment: FormControl<string | null | undefined>,
	}
	export function CreateIncludeConditionsFormGroup() {
		return new FormGroup<IncludeConditionsFormProperties>({
			daysToLookBack: new FormControl<number | null | undefined>(undefined),
			isSmartList: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			membershipDurationDays: new FormControl<number | null | undefined>(undefined),
			segment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for an Analytics Remarketing Audience Foreign Link. */
	export interface LinkedForeignAccount {

		/** Account ID to which this linked foreign account belongs. */
		accountId?: string | null;

		/** Boolean indicating whether this is eligible for search. */
		eligibleForSearch?: boolean | null;

		/** Entity ad account link ID. */
		id?: string | null;

		/** Internal ID for the web property to which this linked foreign account belongs. */
		internalWebPropertyId?: string | null;

		/** Resource type for linked foreign account. */
		kind?: string | null;

		/** The foreign account ID. For example the an Google Ads `linkedAccountId` has the following format XXX-XXX-XXXX. */
		linkedAccountId?: string | null;

		/** Remarketing audience ID to which this linked foreign account belongs. */
		remarketingAudienceId?: string | null;

		/** The status of this foreign account link. */
		status?: string | null;

		/** The type of the foreign account. For example, `ADWORDS_LINKS`, `DBM_LINKS`, `MCC_LINKS` or `OPTIMIZE`. */
		type?: string | null;

		/** Web property ID of the form UA-XXXXX-YY to which this linked foreign account belongs. */
		webPropertyId?: string | null;
	}

	/** JSON template for an Analytics Remarketing Audience Foreign Link. */
	export interface LinkedForeignAccountFormProperties {

		/** Account ID to which this linked foreign account belongs. */
		accountId: FormControl<string | null | undefined>,

		/** Boolean indicating whether this is eligible for search. */
		eligibleForSearch: FormControl<boolean | null | undefined>,

		/** Entity ad account link ID. */
		id: FormControl<string | null | undefined>,

		/** Internal ID for the web property to which this linked foreign account belongs. */
		internalWebPropertyId: FormControl<string | null | undefined>,

		/** Resource type for linked foreign account. */
		kind: FormControl<string | null | undefined>,

		/** The foreign account ID. For example the an Google Ads `linkedAccountId` has the following format XXX-XXX-XXXX. */
		linkedAccountId: FormControl<string | null | undefined>,

		/** Remarketing audience ID to which this linked foreign account belongs. */
		remarketingAudienceId: FormControl<string | null | undefined>,

		/** The status of this foreign account link. */
		status: FormControl<string | null | undefined>,

		/** The type of the foreign account. For example, `ADWORDS_LINKS`, `DBM_LINKS`, `MCC_LINKS` or `OPTIMIZE`. */
		type: FormControl<string | null | undefined>,

		/** Web property ID of the form UA-XXXXX-YY to which this linked foreign account belongs. */
		webPropertyId: FormControl<string | null | undefined>,
	}
	export function CreateLinkedForeignAccountFormGroup() {
		return new FormGroup<LinkedForeignAccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			eligibleForSearch: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			internalWebPropertyId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			linkedAccountId: new FormControl<string | null | undefined>(undefined),
			remarketingAudienceId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			webPropertyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Multi-Channel Funnels data for a given view (profile). */
	export interface McfData {

		/** Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request. */
		McfDataColumnHeaders?: Array<McfDataColumnHeaders>;

		/** Determines if the Analytics data contains sampled data. */
		containsSampledData?: boolean | null;

		/** Unique ID for this data response. */
		id?: string | null;

		/** The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number | null;

		/** Resource type. */
		kind?: string | null;

		/** Link to next page for this Analytics data query. */
		nextLink?: string | null;

		/** Link to previous page for this Analytics data query. */
		previousLink?: string | null;

		/** Information for the view (profile), for which the Analytics data was requested. */
		profileInfo?: McfDataProfileInfo;

		/** Analytics data request query parameters. */
		query?: McfDataQuery;

		/** Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request. */
		rows?: Array<string>;

		/** The number of samples used to calculate the result. */
		sampleSize?: string | null;

		/** Total size of the sample space from which the samples were selected. */
		sampleSpace?: string | null;

		/** Link to this page. */
		selfLink?: string | null;

		/** The total number of rows for the query, regardless of the number of rows in the response. */
		totalResults?: number | null;

		/** Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request. */
		totalsForAllResults?: {[id: string]: string };
	}

	/** Multi-Channel Funnels data for a given view (profile). */
	export interface McfDataFormProperties {

		/** Determines if the Analytics data contains sampled data. */
		containsSampledData: FormControl<boolean | null | undefined>,

		/** Unique ID for this data response. */
		id: FormControl<string | null | undefined>,

		/** The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Resource type. */
		kind: FormControl<string | null | undefined>,

		/** Link to next page for this Analytics data query. */
		nextLink: FormControl<string | null | undefined>,

		/** Link to previous page for this Analytics data query. */
		previousLink: FormControl<string | null | undefined>,

		/** The number of samples used to calculate the result. */
		sampleSize: FormControl<string | null | undefined>,

		/** Total size of the sample space from which the samples were selected. */
		sampleSpace: FormControl<string | null | undefined>,

		/** Link to this page. */
		selfLink: FormControl<string | null | undefined>,

		/** The total number of rows for the query, regardless of the number of rows in the response. */
		totalResults: FormControl<number | null | undefined>,

		/** Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request. */
		totalsForAllResults: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateMcfDataFormGroup() {
		return new FormGroup<McfDataFormProperties>({
			containsSampledData: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			previousLink: new FormControl<string | null | undefined>(undefined),
			sampleSize: new FormControl<string | null | undefined>(undefined),
			sampleSpace: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
			totalsForAllResults: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface McfDataColumnHeaders {

		/** Column Type. Either DIMENSION or METRIC. */
		columnType?: string | null;

		/** Data type. Dimension and metric values data types such as INTEGER, DOUBLE, CURRENCY, MCF_SEQUENCE etc. */
		dataType?: string | null;

		/** Column name. */
		name?: string | null;
	}
	export interface McfDataColumnHeadersFormProperties {

		/** Column Type. Either DIMENSION or METRIC. */
		columnType: FormControl<string | null | undefined>,

		/** Data type. Dimension and metric values data types such as INTEGER, DOUBLE, CURRENCY, MCF_SEQUENCE etc. */
		dataType: FormControl<string | null | undefined>,

		/** Column name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMcfDataColumnHeadersFormGroup() {
		return new FormGroup<McfDataColumnHeadersFormProperties>({
			columnType: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface McfDataProfileInfo {

		/** Account ID to which this view (profile) belongs. */
		accountId?: string | null;

		/** Internal ID for the web property to which this view (profile) belongs. */
		internalWebPropertyId?: string | null;

		/** View (Profile) ID. */
		profileId?: string | null;

		/** View (Profile) name. */
		profileName?: string | null;

		/** Table ID for view (profile). */
		tableId?: string | null;

		/** Web Property ID to which this view (profile) belongs. */
		webPropertyId?: string | null;
	}
	export interface McfDataProfileInfoFormProperties {

		/** Account ID to which this view (profile) belongs. */
		accountId: FormControl<string | null | undefined>,

		/** Internal ID for the web property to which this view (profile) belongs. */
		internalWebPropertyId: FormControl<string | null | undefined>,

		/** View (Profile) ID. */
		profileId: FormControl<string | null | undefined>,

		/** View (Profile) name. */
		profileName: FormControl<string | null | undefined>,

		/** Table ID for view (profile). */
		tableId: FormControl<string | null | undefined>,

		/** Web Property ID to which this view (profile) belongs. */
		webPropertyId: FormControl<string | null | undefined>,
	}
	export function CreateMcfDataProfileInfoFormGroup() {
		return new FormGroup<McfDataProfileInfoFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			internalWebPropertyId: new FormControl<string | null | undefined>(undefined),
			profileId: new FormControl<string | null | undefined>(undefined),
			profileName: new FormControl<string | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
			webPropertyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface McfDataQuery {

		/** List of analytics dimensions. */
		dimensions?: string | null;

		/** End date. */
		'end-date'?: string | null;

		/** Comma-separated list of dimension or metric filters. */
		filters?: string | null;

		/** Unique table ID. */
		ids?: string | null;

		/** Maximum results per page. */
		'max-results'?: number | null;

		/** List of analytics metrics. */
		metrics?: Array<string>;

		/** Desired sampling level */
		samplingLevel?: string | null;

		/** Analytics advanced segment. */
		segment?: string | null;

		/** List of dimensions or metrics based on which Analytics data is sorted. */
		sort?: Array<string>;

		/** Start date. */
		'start-date'?: string | null;

		/** Start index. */
		'start-index'?: number | null;
	}
	export interface McfDataQueryFormProperties {

		/** List of analytics dimensions. */
		dimensions: FormControl<string | null | undefined>,

		/** End date. */
		'end-date': FormControl<string | null | undefined>,

		/** Comma-separated list of dimension or metric filters. */
		filters: FormControl<string | null | undefined>,

		/** Unique table ID. */
		ids: FormControl<string | null | undefined>,

		/** Maximum results per page. */
		'max-results': FormControl<number | null | undefined>,

		/** Desired sampling level */
		samplingLevel: FormControl<string | null | undefined>,

		/** Analytics advanced segment. */
		segment: FormControl<string | null | undefined>,

		/** Start date. */
		'start-date': FormControl<string | null | undefined>,

		/** Start index. */
		'start-index': FormControl<number | null | undefined>,
	}
	export function CreateMcfDataQueryFormGroup() {
		return new FormGroup<McfDataQueryFormProperties>({
			dimensions: new FormControl<string | null | undefined>(undefined),
			'end-date': new FormControl<string | null | undefined>(undefined),
			filters: new FormControl<string | null | undefined>(undefined),
			ids: new FormControl<string | null | undefined>(undefined),
			'max-results': new FormControl<number | null | undefined>(undefined),
			samplingLevel: new FormControl<string | null | undefined>(undefined),
			segment: new FormControl<string | null | undefined>(undefined),
			'start-date': new FormControl<string | null | undefined>(undefined),
			'start-index': new FormControl<number | null | undefined>(undefined),
		});

	}


	/** JSON template for an Analytics profile filter link. */
	export interface ProfileFilterLink {

		/** JSON template for a profile filter link. */
		filterRef?: FilterRef;

		/** Profile filter link ID. */
		id?: string | null;

		/** Resource type for Analytics filter. */
		kind?: string | null;

		/** JSON template for a linked view (profile). */
		profileRef?: ProfileRef;

		/**
		 * The rank of this profile filter link relative to the other filters linked to the same profile.
		 * For readonly (i.e., list and get) operations, the rank always starts at 1.
		 * For write (i.e., create, update, or delete) operations, you may specify a value between 0 and 255 inclusively, [0, 255]. In order to insert a link at the end of the list, either don't specify a rank or set a rank to a number greater than the largest rank in the list. In order to insert a link to the beginning of the list specify a rank that is less than or equal to 1. The new link will move all existing filters with the same or lower rank down the list. After the link is inserted/updated/deleted all profile filter links will be renumbered starting at 1.
		 */
		rank?: number | null;

		/** Link for this profile filter link. */
		selfLink?: string | null;
	}

	/** JSON template for an Analytics profile filter link. */
	export interface ProfileFilterLinkFormProperties {

		/** Profile filter link ID. */
		id: FormControl<string | null | undefined>,

		/** Resource type for Analytics filter. */
		kind: FormControl<string | null | undefined>,

		/**
		 * The rank of this profile filter link relative to the other filters linked to the same profile.
		 * For readonly (i.e., list and get) operations, the rank always starts at 1.
		 * For write (i.e., create, update, or delete) operations, you may specify a value between 0 and 255 inclusively, [0, 255]. In order to insert a link at the end of the list, either don't specify a rank or set a rank to a number greater than the largest rank in the list. In order to insert a link to the beginning of the list specify a rank that is less than or equal to 1. The new link will move all existing filters with the same or lower rank down the list. After the link is inserted/updated/deleted all profile filter links will be renumbered starting at 1.
		 */
		rank: FormControl<number | null | undefined>,

		/** Link for this profile filter link. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateProfileFilterLinkFormGroup() {
		return new FormGroup<ProfileFilterLinkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A profile filter link collection lists profile filter links between profiles and filters. Each resource in the collection corresponds to a profile filter link. */
	export interface ProfileFilterLinks {

		/** A list of profile filter links. */
		items?: Array<ProfileFilterLink>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number | null;

		/** Collection type. */
		kind?: string | null;

		/** Link to next page for this profile filter link collection. */
		nextLink?: string | null;

		/** Link to previous page for this profile filter link collection. */
		previousLink?: string | null;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number | null;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number | null;

		/** Email ID of the authenticated user */
		username?: string | null;
	}

	/** A profile filter link collection lists profile filter links between profiles and filters. Each resource in the collection corresponds to a profile filter link. */
	export interface ProfileFilterLinksFormProperties {

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Collection type. */
		kind: FormControl<string | null | undefined>,

		/** Link to next page for this profile filter link collection. */
		nextLink: FormControl<string | null | undefined>,

		/** Link to previous page for this profile filter link collection. */
		previousLink: FormControl<string | null | undefined>,

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex: FormControl<number | null | undefined>,

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults: FormControl<number | null | undefined>,

		/** Email ID of the authenticated user */
		username: FormControl<string | null | undefined>,
	}
	export function CreateProfileFilterLinksFormGroup() {
		return new FormGroup<ProfileFilterLinksFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			previousLink: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A view (profile) collection lists Analytics views (profiles) to which the user has access. Each resource in the collection corresponds to a single Analytics view (profile). */
	export interface Profiles {

		/** A list of views (profiles). */
		items?: Array<Profile>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number | null;

		/** Collection type. */
		kind?: string | null;

		/** Link to next page for this view (profile) collection. */
		nextLink?: string | null;

		/** Link to previous page for this view (profile) collection. */
		previousLink?: string | null;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number | null;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number | null;

		/** Email ID of the authenticated user */
		username?: string | null;
	}

	/** A view (profile) collection lists Analytics views (profiles) to which the user has access. Each resource in the collection corresponds to a single Analytics view (profile). */
	export interface ProfilesFormProperties {

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Collection type. */
		kind: FormControl<string | null | undefined>,

		/** Link to next page for this view (profile) collection. */
		nextLink: FormControl<string | null | undefined>,

		/** Link to previous page for this view (profile) collection. */
		previousLink: FormControl<string | null | undefined>,

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex: FormControl<number | null | undefined>,

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults: FormControl<number | null | undefined>,

		/** Email ID of the authenticated user */
		username: FormControl<string | null | undefined>,
	}
	export function CreateProfilesFormGroup() {
		return new FormGroup<ProfilesFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			previousLink: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Real time data for a given view (profile). */
	export interface RealtimeData {

		/** Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request. */
		RealtimeDataColumnHeaders?: Array<RealtimeDataColumnHeaders>;

		/** Unique ID for this data response. */
		id?: string | null;

		/** Resource type. */
		kind?: string | null;

		/** Information for the view (profile), for which the real time data was requested. */
		profileInfo?: RealtimeDataProfileInfo;

		/** Real time data request query parameters. */
		query?: RealtimeDataQuery;

		/** Real time data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request. */
		rows?: Array<string>;

		/** Link to this page. */
		selfLink?: string | null;

		/** The total number of rows for the query, regardless of the number of rows in the response. */
		totalResults?: number | null;

		/** Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request. */
		totalsForAllResults?: {[id: string]: string };
	}

	/** Real time data for a given view (profile). */
	export interface RealtimeDataFormProperties {

		/** Unique ID for this data response. */
		id: FormControl<string | null | undefined>,

		/** Resource type. */
		kind: FormControl<string | null | undefined>,

		/** Link to this page. */
		selfLink: FormControl<string | null | undefined>,

		/** The total number of rows for the query, regardless of the number of rows in the response. */
		totalResults: FormControl<number | null | undefined>,

		/** Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request. */
		totalsForAllResults: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateRealtimeDataFormGroup() {
		return new FormGroup<RealtimeDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
			totalsForAllResults: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface RealtimeDataColumnHeaders {

		/** Column Type. Either DIMENSION or METRIC. */
		columnType?: string | null;

		/** Data type. Dimension column headers have only STRING as the data type. Metric column headers have data types for metric values such as INTEGER, DOUBLE, CURRENCY etc. */
		dataType?: string | null;

		/** Column name. */
		name?: string | null;
	}
	export interface RealtimeDataColumnHeadersFormProperties {

		/** Column Type. Either DIMENSION or METRIC. */
		columnType: FormControl<string | null | undefined>,

		/** Data type. Dimension column headers have only STRING as the data type. Metric column headers have data types for metric values such as INTEGER, DOUBLE, CURRENCY etc. */
		dataType: FormControl<string | null | undefined>,

		/** Column name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRealtimeDataColumnHeadersFormGroup() {
		return new FormGroup<RealtimeDataColumnHeadersFormProperties>({
			columnType: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RealtimeDataProfileInfo {

		/** Account ID to which this view (profile) belongs. */
		accountId?: string | null;

		/** Internal ID for the web property to which this view (profile) belongs. */
		internalWebPropertyId?: string | null;

		/** View (Profile) ID. */
		profileId?: string | null;

		/** View (Profile) name. */
		profileName?: string | null;

		/** Table ID for view (profile). */
		tableId?: string | null;

		/** Web Property ID to which this view (profile) belongs. */
		webPropertyId?: string | null;
	}
	export interface RealtimeDataProfileInfoFormProperties {

		/** Account ID to which this view (profile) belongs. */
		accountId: FormControl<string | null | undefined>,

		/** Internal ID for the web property to which this view (profile) belongs. */
		internalWebPropertyId: FormControl<string | null | undefined>,

		/** View (Profile) ID. */
		profileId: FormControl<string | null | undefined>,

		/** View (Profile) name. */
		profileName: FormControl<string | null | undefined>,

		/** Table ID for view (profile). */
		tableId: FormControl<string | null | undefined>,

		/** Web Property ID to which this view (profile) belongs. */
		webPropertyId: FormControl<string | null | undefined>,
	}
	export function CreateRealtimeDataProfileInfoFormGroup() {
		return new FormGroup<RealtimeDataProfileInfoFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			internalWebPropertyId: new FormControl<string | null | undefined>(undefined),
			profileId: new FormControl<string | null | undefined>(undefined),
			profileName: new FormControl<string | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
			webPropertyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RealtimeDataQuery {

		/** List of real time dimensions. */
		dimensions?: string | null;

		/** Comma-separated list of dimension or metric filters. */
		filters?: string | null;

		/** Unique table ID. */
		ids?: string | null;

		/** Maximum results per page. */
		'max-results'?: number | null;

		/** List of real time metrics. */
		metrics?: Array<string>;

		/** List of dimensions or metrics based on which real time data is sorted. */
		sort?: Array<string>;
	}
	export interface RealtimeDataQueryFormProperties {

		/** List of real time dimensions. */
		dimensions: FormControl<string | null | undefined>,

		/** Comma-separated list of dimension or metric filters. */
		filters: FormControl<string | null | undefined>,

		/** Unique table ID. */
		ids: FormControl<string | null | undefined>,

		/** Maximum results per page. */
		'max-results': FormControl<number | null | undefined>,
	}
	export function CreateRealtimeDataQueryFormGroup() {
		return new FormGroup<RealtimeDataQueryFormProperties>({
			dimensions: new FormControl<string | null | undefined>(undefined),
			filters: new FormControl<string | null | undefined>(undefined),
			ids: new FormControl<string | null | undefined>(undefined),
			'max-results': new FormControl<number | null | undefined>(undefined),
		});

	}


	/** JSON template for an Analytics remarketing audience. */
	export interface RemarketingAudience {

		/** Account ID to which this remarketing audience belongs. */
		accountId?: string | null;

		/** The simple audience definition that will cause a user to be added to an audience. */
		audienceDefinition?: RemarketingAudienceAudienceDefinition;

		/** The type of audience, either SIMPLE or STATE_BASED. */
		audienceType?: string | null;

		/** Time this remarketing audience was created. */
		created?: Date | null;

		/** The description of this remarketing audience. */
		description?: string | null;

		/** Remarketing Audience ID. */
		id?: string | null;

		/** Internal ID for the web property to which this remarketing audience belongs. */
		internalWebPropertyId?: string | null;

		/** Collection type. */
		kind?: string | null;

		/** The linked ad accounts associated with this remarketing audience. A remarketing audience can have only one linkedAdAccount currently. */
		linkedAdAccounts?: Array<LinkedForeignAccount>;

		/** The views (profiles) that this remarketing audience is linked to. */
		linkedViews?: Array<string>;

		/** The name of this remarketing audience. */
		name?: string | null;

		/** A state based audience definition that will cause a user to be added or removed from an audience. */
		stateBasedAudienceDefinition?: RemarketingAudienceStateBasedAudienceDefinition;

		/** Time this remarketing audience was last modified. */
		updated?: Date | null;

		/** Web property ID of the form UA-XXXXX-YY to which this remarketing audience belongs. */
		webPropertyId?: string | null;
	}

	/** JSON template for an Analytics remarketing audience. */
	export interface RemarketingAudienceFormProperties {

		/** Account ID to which this remarketing audience belongs. */
		accountId: FormControl<string | null | undefined>,

		/** The type of audience, either SIMPLE or STATE_BASED. */
		audienceType: FormControl<string | null | undefined>,

		/** Time this remarketing audience was created. */
		created: FormControl<Date | null | undefined>,

		/** The description of this remarketing audience. */
		description: FormControl<string | null | undefined>,

		/** Remarketing Audience ID. */
		id: FormControl<string | null | undefined>,

		/** Internal ID for the web property to which this remarketing audience belongs. */
		internalWebPropertyId: FormControl<string | null | undefined>,

		/** Collection type. */
		kind: FormControl<string | null | undefined>,

		/** The name of this remarketing audience. */
		name: FormControl<string | null | undefined>,

		/** Time this remarketing audience was last modified. */
		updated: FormControl<Date | null | undefined>,

		/** Web property ID of the form UA-XXXXX-YY to which this remarketing audience belongs. */
		webPropertyId: FormControl<string | null | undefined>,
	}
	export function CreateRemarketingAudienceFormGroup() {
		return new FormGroup<RemarketingAudienceFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			audienceType: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			internalWebPropertyId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			webPropertyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemarketingAudienceAudienceDefinition {

		/** JSON template for an Analytics Remarketing Include Conditions. */
		includeConditions?: IncludeConditions;
	}
	export interface RemarketingAudienceAudienceDefinitionFormProperties {
	}
	export function CreateRemarketingAudienceAudienceDefinitionFormGroup() {
		return new FormGroup<RemarketingAudienceAudienceDefinitionFormProperties>({
		});

	}

	export interface RemarketingAudienceStateBasedAudienceDefinition {

		/** Defines the conditions to exclude users from the audience. */
		excludeConditions?: RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions;

		/** JSON template for an Analytics Remarketing Include Conditions. */
		includeConditions?: IncludeConditions;
	}
	export interface RemarketingAudienceStateBasedAudienceDefinitionFormProperties {
	}
	export function CreateRemarketingAudienceStateBasedAudienceDefinitionFormGroup() {
		return new FormGroup<RemarketingAudienceStateBasedAudienceDefinitionFormProperties>({
		});

	}

	export interface RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions {

		/** Whether to make the exclusion TEMPORARY or PERMANENT. */
		exclusionDuration?: string | null;

		/** The segment condition that will cause a user to be removed from an audience. */
		segment?: string | null;
	}
	export interface RemarketingAudienceStateBasedAudienceDefinitionExcludeConditionsFormProperties {

		/** Whether to make the exclusion TEMPORARY or PERMANENT. */
		exclusionDuration: FormControl<string | null | undefined>,

		/** The segment condition that will cause a user to be removed from an audience. */
		segment: FormControl<string | null | undefined>,
	}
	export function CreateRemarketingAudienceStateBasedAudienceDefinitionExcludeConditionsFormGroup() {
		return new FormGroup<RemarketingAudienceStateBasedAudienceDefinitionExcludeConditionsFormProperties>({
			exclusionDuration: new FormControl<string | null | undefined>(undefined),
			segment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A remarketing audience collection lists Analytics remarketing audiences to which the user has access. Each resource in the collection corresponds to a single Analytics remarketing audience. */
	export interface RemarketingAudiences {

		/** A list of remarketing audiences. */
		items?: Array<RemarketingAudience>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number | null;

		/** Collection type. */
		kind?: string | null;

		/** Link to next page for this remarketing audience collection. */
		nextLink?: string | null;

		/** Link to previous page for this view (profile) collection. */
		previousLink?: string | null;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number | null;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number | null;

		/** Email ID of the authenticated user */
		username?: string | null;
	}

	/** A remarketing audience collection lists Analytics remarketing audiences to which the user has access. Each resource in the collection corresponds to a single Analytics remarketing audience. */
	export interface RemarketingAudiencesFormProperties {

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Collection type. */
		kind: FormControl<string | null | undefined>,

		/** Link to next page for this remarketing audience collection. */
		nextLink: FormControl<string | null | undefined>,

		/** Link to previous page for this view (profile) collection. */
		previousLink: FormControl<string | null | undefined>,

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex: FormControl<number | null | undefined>,

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults: FormControl<number | null | undefined>,

		/** Email ID of the authenticated user */
		username: FormControl<string | null | undefined>,
	}
	export function CreateRemarketingAudiencesFormGroup() {
		return new FormGroup<RemarketingAudiencesFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			previousLink: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for an Analytics segment. */
	export interface Segment {

		/** Time the segment was created. */
		created?: Date | null;

		/** Segment definition. */
		definition?: string | null;

		/** Segment ID. */
		id?: string | null;

		/** Resource type for Analytics segment. */
		kind?: string | null;

		/** Segment name. */
		name?: string | null;

		/** Segment ID. Can be used with the 'segment' parameter in Core Reporting API. */
		segmentId?: string | null;

		/** Link for this segment. */
		selfLink?: string | null;

		/** Type for a segment. Possible values are "BUILT_IN" or "CUSTOM". */
		type?: string | null;

		/** Time the segment was last modified. */
		updated?: Date | null;
	}

	/** JSON template for an Analytics segment. */
	export interface SegmentFormProperties {

		/** Time the segment was created. */
		created: FormControl<Date | null | undefined>,

		/** Segment definition. */
		definition: FormControl<string | null | undefined>,

		/** Segment ID. */
		id: FormControl<string | null | undefined>,

		/** Resource type for Analytics segment. */
		kind: FormControl<string | null | undefined>,

		/** Segment name. */
		name: FormControl<string | null | undefined>,

		/** Segment ID. Can be used with the 'segment' parameter in Core Reporting API. */
		segmentId: FormControl<string | null | undefined>,

		/** Link for this segment. */
		selfLink: FormControl<string | null | undefined>,

		/** Type for a segment. Possible values are "BUILT_IN" or "CUSTOM". */
		type: FormControl<string | null | undefined>,

		/** Time the segment was last modified. */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateSegmentFormGroup() {
		return new FormGroup<SegmentFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			definition: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			segmentId: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** An segment collection lists Analytics segments that the user has access to. Each resource in the collection corresponds to a single Analytics segment. */
	export interface Segments {

		/** A list of segments. */
		items?: Array<Segment>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number | null;

		/** Collection type for segments. */
		kind?: string | null;

		/** Link to next page for this segment collection. */
		nextLink?: string | null;

		/** Link to previous page for this segment collection. */
		previousLink?: string | null;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number | null;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number | null;

		/** Email ID of the authenticated user */
		username?: string | null;
	}

	/** An segment collection lists Analytics segments that the user has access to. Each resource in the collection corresponds to a single Analytics segment. */
	export interface SegmentsFormProperties {

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Collection type for segments. */
		kind: FormControl<string | null | undefined>,

		/** Link to next page for this segment collection. */
		nextLink: FormControl<string | null | undefined>,

		/** Link to previous page for this segment collection. */
		previousLink: FormControl<string | null | undefined>,

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex: FormControl<number | null | undefined>,

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults: FormControl<number | null | undefined>,

		/** Email ID of the authenticated user */
		username: FormControl<string | null | undefined>,
	}
	export function CreateSegmentsFormGroup() {
		return new FormGroup<SegmentsFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			previousLink: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON template for Analytics unsampled report resource. */
	export interface UnsampledReport {

		/** Account ID to which this unsampled report belongs. */
		accountId?: string | null;

		/** Download details for a file stored in Google Cloud Storage. */
		cloudStorageDownloadDetails?: UnsampledReportCloudStorageDownloadDetails;

		/** Time this unsampled report was created. */
		created?: Date | null;

		/** The dimensions for the unsampled report. */
		dimensions?: string | null;

		/** The type of download you need to use for the report data file. Possible values include `GOOGLE_DRIVE` and `GOOGLE_CLOUD_STORAGE`. If the value is `GOOGLE_DRIVE`, see the `driveDownloadDetails` field. If the value is `GOOGLE_CLOUD_STORAGE`, see the `cloudStorageDownloadDetails` field. */
		downloadType?: string | null;

		/** Download details for a file stored in Google Drive. */
		driveDownloadDetails?: UnsampledReportDriveDownloadDetails;

		/** The end date for the unsampled report. */
		'end-date'?: string | null;

		/** The filters for the unsampled report. */
		filters?: string | null;

		/** Unsampled report ID. */
		id?: string | null;

		/** Resource type for an Analytics unsampled report. */
		kind?: string | null;

		/** The metrics for the unsampled report. */
		metrics?: string | null;

		/** View (Profile) ID to which this unsampled report belongs. */
		profileId?: string | null;

		/** The segment for the unsampled report. */
		segment?: string | null;

		/** Link for this unsampled report. */
		selfLink?: string | null;

		/** The start date for the unsampled report. */
		'start-date'?: string | null;

		/** Status of this unsampled report. Possible values are PENDING, COMPLETED, or FAILED. */
		status?: string | null;

		/** Title of the unsampled report. */
		title?: string | null;

		/** Time this unsampled report was last modified. */
		updated?: Date | null;

		/** Web property ID to which this unsampled report belongs. The web property ID is of the form UA-XXXXX-YY. */
		webPropertyId?: string | null;
	}

	/** JSON template for Analytics unsampled report resource. */
	export interface UnsampledReportFormProperties {

		/** Account ID to which this unsampled report belongs. */
		accountId: FormControl<string | null | undefined>,

		/** Time this unsampled report was created. */
		created: FormControl<Date | null | undefined>,

		/** The dimensions for the unsampled report. */
		dimensions: FormControl<string | null | undefined>,

		/** The type of download you need to use for the report data file. Possible values include `GOOGLE_DRIVE` and `GOOGLE_CLOUD_STORAGE`. If the value is `GOOGLE_DRIVE`, see the `driveDownloadDetails` field. If the value is `GOOGLE_CLOUD_STORAGE`, see the `cloudStorageDownloadDetails` field. */
		downloadType: FormControl<string | null | undefined>,

		/** The end date for the unsampled report. */
		'end-date': FormControl<string | null | undefined>,

		/** The filters for the unsampled report. */
		filters: FormControl<string | null | undefined>,

		/** Unsampled report ID. */
		id: FormControl<string | null | undefined>,

		/** Resource type for an Analytics unsampled report. */
		kind: FormControl<string | null | undefined>,

		/** The metrics for the unsampled report. */
		metrics: FormControl<string | null | undefined>,

		/** View (Profile) ID to which this unsampled report belongs. */
		profileId: FormControl<string | null | undefined>,

		/** The segment for the unsampled report. */
		segment: FormControl<string | null | undefined>,

		/** Link for this unsampled report. */
		selfLink: FormControl<string | null | undefined>,

		/** The start date for the unsampled report. */
		'start-date': FormControl<string | null | undefined>,

		/** Status of this unsampled report. Possible values are PENDING, COMPLETED, or FAILED. */
		status: FormControl<string | null | undefined>,

		/** Title of the unsampled report. */
		title: FormControl<string | null | undefined>,

		/** Time this unsampled report was last modified. */
		updated: FormControl<Date | null | undefined>,

		/** Web property ID to which this unsampled report belongs. The web property ID is of the form UA-XXXXX-YY. */
		webPropertyId: FormControl<string | null | undefined>,
	}
	export function CreateUnsampledReportFormGroup() {
		return new FormGroup<UnsampledReportFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			dimensions: new FormControl<string | null | undefined>(undefined),
			downloadType: new FormControl<string | null | undefined>(undefined),
			'end-date': new FormControl<string | null | undefined>(undefined),
			filters: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			metrics: new FormControl<string | null | undefined>(undefined),
			profileId: new FormControl<string | null | undefined>(undefined),
			segment: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			'start-date': new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			webPropertyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnsampledReportCloudStorageDownloadDetails {

		/** Id of the bucket the file object is stored in. */
		bucketId?: string | null;

		/** Id of the file object containing the report data. */
		objectId?: string | null;
	}
	export interface UnsampledReportCloudStorageDownloadDetailsFormProperties {

		/** Id of the bucket the file object is stored in. */
		bucketId: FormControl<string | null | undefined>,

		/** Id of the file object containing the report data. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateUnsampledReportCloudStorageDownloadDetailsFormGroup() {
		return new FormGroup<UnsampledReportCloudStorageDownloadDetailsFormProperties>({
			bucketId: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnsampledReportDriveDownloadDetails {

		/** Id of the document/file containing the report data. */
		documentId?: string | null;
	}
	export interface UnsampledReportDriveDownloadDetailsFormProperties {

		/** Id of the document/file containing the report data. */
		documentId: FormControl<string | null | undefined>,
	}
	export function CreateUnsampledReportDriveDownloadDetailsFormGroup() {
		return new FormGroup<UnsampledReportDriveDownloadDetailsFormProperties>({
			documentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An unsampled report collection lists Analytics unsampled reports to which the user has access. Each view (profile) can have a set of unsampled reports. Each resource in the unsampled report collection corresponds to a single Analytics unsampled report. */
	export interface UnsampledReports {

		/** A list of unsampled reports. */
		items?: Array<UnsampledReport>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number | null;

		/** Collection type. */
		kind?: string | null;

		/** Link to next page for this unsampled report collection. */
		nextLink?: string | null;

		/** Link to previous page for this unsampled report collection. */
		previousLink?: string | null;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number | null;

		/** The total number of results for the query, regardless of the number of resources in the result. */
		totalResults?: number | null;

		/** Email ID of the authenticated user */
		username?: string | null;
	}

	/** An unsampled report collection lists Analytics unsampled reports to which the user has access. Each view (profile) can have a set of unsampled reports. Each resource in the unsampled report collection corresponds to a single Analytics unsampled report. */
	export interface UnsampledReportsFormProperties {

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Collection type. */
		kind: FormControl<string | null | undefined>,

		/** Link to next page for this unsampled report collection. */
		nextLink: FormControl<string | null | undefined>,

		/** Link to previous page for this unsampled report collection. */
		previousLink: FormControl<string | null | undefined>,

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex: FormControl<number | null | undefined>,

		/** The total number of results for the query, regardless of the number of resources in the result. */
		totalResults: FormControl<number | null | undefined>,

		/** Email ID of the authenticated user */
		username: FormControl<string | null | undefined>,
	}
	export function CreateUnsampledReportsFormGroup() {
		return new FormGroup<UnsampledReportsFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			previousLink: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata returned for an upload operation. */
	export interface Upload {

		/** Account Id to which this upload belongs. */
		accountId?: string | null;

		/** Custom data source Id to which this data import belongs. */
		customDataSourceId?: string | null;

		/** Data import errors collection. */
		errors?: Array<string>;

		/** A unique ID for this upload. */
		id?: string | null;

		/** Resource type for Analytics upload. */
		kind?: string | null;

		/** Upload status. Possible values: PENDING, COMPLETED, FAILED, DELETING, DELETED. */
		status?: string | null;

		/** Time this file is uploaded. */
		uploadTime?: Date | null;
	}

	/** Metadata returned for an upload operation. */
	export interface UploadFormProperties {

		/** Account Id to which this upload belongs. */
		accountId: FormControl<string | null | undefined>,

		/** Custom data source Id to which this data import belongs. */
		customDataSourceId: FormControl<string | null | undefined>,

		/** A unique ID for this upload. */
		id: FormControl<string | null | undefined>,

		/** Resource type for Analytics upload. */
		kind: FormControl<string | null | undefined>,

		/** Upload status. Possible values: PENDING, COMPLETED, FAILED, DELETING, DELETED. */
		status: FormControl<string | null | undefined>,

		/** Time this file is uploaded. */
		uploadTime: FormControl<Date | null | undefined>,
	}
	export function CreateUploadFormGroup() {
		return new FormGroup<UploadFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			customDataSourceId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			uploadTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Upload collection lists Analytics uploads to which the user has access. Each custom data source can have a set of uploads. Each resource in the upload collection corresponds to a single Analytics data upload. */
	export interface Uploads {

		/** A list of uploads. */
		items?: Array<Upload>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number | null;

		/** Collection type. */
		kind?: string | null;

		/** Link to next page for this upload collection. */
		nextLink?: string | null;

		/** Link to previous page for this upload collection. */
		previousLink?: string | null;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number | null;

		/** The total number of results for the query, regardless of the number of resources in the result. */
		totalResults?: number | null;
	}

	/** Upload collection lists Analytics uploads to which the user has access. Each custom data source can have a set of uploads. Each resource in the upload collection corresponds to a single Analytics data upload. */
	export interface UploadsFormProperties {

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Collection type. */
		kind: FormControl<string | null | undefined>,

		/** Link to next page for this upload collection. */
		nextLink: FormControl<string | null | undefined>,

		/** Link to previous page for this upload collection. */
		previousLink: FormControl<string | null | undefined>,

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex: FormControl<number | null | undefined>,

		/** The total number of results for the query, regardless of the number of resources in the result. */
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateUploadsFormGroup() {
		return new FormGroup<UploadsFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			previousLink: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** JSON template for a user deletion request resource. */
	export interface UserDeletionRequest {

		/** This marks the point in time for which all user data before should be deleted */
		deletionRequestTime?: Date | null;

		/** Firebase Project Id */
		firebaseProjectId?: string | null;

		/** User ID. */
		id?: UserDeletionRequestId;

		/** Value is "analytics#userDeletionRequest". */
		kind?: string | null;

		/** Property ID */
		propertyId?: string | null;

		/** Web property ID of the form UA-XXXXX-YY. */
		webPropertyId?: string | null;
	}

	/** JSON template for a user deletion request resource. */
	export interface UserDeletionRequestFormProperties {

		/** This marks the point in time for which all user data before should be deleted */
		deletionRequestTime: FormControl<Date | null | undefined>,

		/** Firebase Project Id */
		firebaseProjectId: FormControl<string | null | undefined>,

		/** Value is "analytics#userDeletionRequest". */
		kind: FormControl<string | null | undefined>,

		/** Property ID */
		propertyId: FormControl<string | null | undefined>,

		/** Web property ID of the form UA-XXXXX-YY. */
		webPropertyId: FormControl<string | null | undefined>,
	}
	export function CreateUserDeletionRequestFormGroup() {
		return new FormGroup<UserDeletionRequestFormProperties>({
			deletionRequestTime: new FormControl<Date | null | undefined>(undefined),
			firebaseProjectId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			propertyId: new FormControl<string | null | undefined>(undefined),
			webPropertyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserDeletionRequestId {

		/** Type of user */
		type?: string | null;

		/** The User's id */
		userId?: string | null;
	}
	export interface UserDeletionRequestIdFormProperties {

		/** Type of user */
		type: FormControl<string | null | undefined>,

		/** The User's id */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserDeletionRequestIdFormGroup() {
		return new FormGroup<UserDeletionRequestIdFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A web property collection lists Analytics web properties to which the user has access. Each resource in the collection corresponds to a single Analytics web property. */
	export interface Webproperties {

		/** A list of web properties. */
		items?: Array<Webproperty>;

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage?: number | null;

		/** Collection type. */
		kind?: string | null;

		/** Link to next page for this web property collection. */
		nextLink?: string | null;

		/** Link to previous page for this web property collection. */
		previousLink?: string | null;

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex?: number | null;

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults?: number | null;

		/** Email ID of the authenticated user */
		username?: string | null;
	}

	/** A web property collection lists Analytics web properties to which the user has access. Each resource in the collection corresponds to a single Analytics web property. */
	export interface WebpropertiesFormProperties {

		/** The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. */
		itemsPerPage: FormControl<number | null | undefined>,

		/** Collection type. */
		kind: FormControl<string | null | undefined>,

		/** Link to next page for this web property collection. */
		nextLink: FormControl<string | null | undefined>,

		/** Link to previous page for this web property collection. */
		previousLink: FormControl<string | null | undefined>,

		/** The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. */
		startIndex: FormControl<number | null | undefined>,

		/** The total number of results for the query, regardless of the number of results in the response. */
		totalResults: FormControl<number | null | undefined>,

		/** Email ID of the authenticated user */
		username: FormControl<string | null | undefined>,
	}
	export function CreateWebpropertiesFormGroup() {
		return new FormGroup<WebpropertiesFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
			previousLink: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns Analytics data for a view (profile).
		 * Get data/ga
		 * @param {string} ids Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
		 * @param {string} start_date Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
		 * @param {string} end_date End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday.
		 * @param {string} metrics A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified.
		 * @param {string} dimensions A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
		 * @param {string} filters A comma-separated list of dimension or metric filters to be applied to Analytics data.
		 * @param {boolean} include_empty_rows The response will include empty rows if this parameter is set to true, the default is true
		 * @param {number} max_results The maximum number of entries to include in this feed.
		 * @param {Analytics_data_ga_getOutput} output The selected format for the response. Default format is JSON.
		 * @param {Analytics_data_ga_getSamplingLevel} samplingLevel The desired sampling level.
		 * @param {string} segment An Analytics segment to be applied to data.
		 * @param {string} sort A comma-separated list of dimensions or metrics that determine the sort order for Analytics data.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {GaData} Successful response
		 */
		Analytics_data_ga_get(ids: string, start_date: string, end_date: string, metrics: string, dimensions: string | null | undefined, filters: string | null | undefined, include_empty_rows: boolean | null | undefined, max_results: number | null | undefined, output: Analytics_data_ga_getOutput | null | undefined, samplingLevel: Analytics_data_ga_getSamplingLevel | null | undefined, segment: string | null | undefined, sort: string | null | undefined, start_index: number | null | undefined): Observable<GaData> {
			return this.http.get<GaData>(this.baseUri + 'data/ga?ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&metrics=' + (metrics == null ? '' : encodeURIComponent(metrics)) + '&dimensions=' + (dimensions == null ? '' : encodeURIComponent(dimensions)) + '&filters=' + (filters == null ? '' : encodeURIComponent(filters)) + '&include_empty_rows=' + include_empty_rows + '&max_results=' + max_results + '&output=' + output + '&samplingLevel=' + samplingLevel + '&segment=' + (segment == null ? '' : encodeURIComponent(segment)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&start_index=' + start_index, {});
		}

		/**
		 * Returns Analytics Multi-Channel Funnels data for a view (profile).
		 * Get data/mcf
		 * @param {string} ids Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
		 * @param {string} start_date Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
		 * @param {string} end_date End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
		 * @param {string} metrics A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified.
		 * @param {string} dimensions A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'.
		 * @param {string} filters A comma-separated list of dimension or metric filters to be applied to the Analytics data.
		 * @param {number} max_results The maximum number of entries to include in this feed.
		 * @param {Analytics_data_ga_getSamplingLevel} samplingLevel The desired sampling level.
		 * @param {string} sort A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {McfData} Successful response
		 */
		Analytics_data_mcf_get(ids: string, start_date: string, end_date: string, metrics: string, dimensions: string | null | undefined, filters: string | null | undefined, max_results: number | null | undefined, samplingLevel: Analytics_data_ga_getSamplingLevel | null | undefined, sort: string | null | undefined, start_index: number | null | undefined): Observable<McfData> {
			return this.http.get<McfData>(this.baseUri + 'data/mcf?ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&metrics=' + (metrics == null ? '' : encodeURIComponent(metrics)) + '&dimensions=' + (dimensions == null ? '' : encodeURIComponent(dimensions)) + '&filters=' + (filters == null ? '' : encodeURIComponent(filters)) + '&max_results=' + max_results + '&samplingLevel=' + samplingLevel + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&start_index=' + start_index, {});
		}

		/**
		 * Returns real time data for a view (profile).
		 * Get data/realtime
		 * @param {string} ids Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
		 * @param {string} metrics A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified.
		 * @param {string} dimensions A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'.
		 * @param {string} filters A comma-separated list of dimension or metric filters to be applied to real time data.
		 * @param {number} max_results The maximum number of entries to include in this feed.
		 * @param {string} sort A comma-separated list of dimensions or metrics that determine the sort order for real time data.
		 * @return {RealtimeData} Successful response
		 */
		Analytics_data_realtime_get(ids: string, metrics: string, dimensions: string | null | undefined, filters: string | null | undefined, max_results: number | null | undefined, sort: string | null | undefined): Observable<RealtimeData> {
			return this.http.get<RealtimeData>(this.baseUri + 'data/realtime?ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&metrics=' + (metrics == null ? '' : encodeURIComponent(metrics)) + '&dimensions=' + (dimensions == null ? '' : encodeURIComponent(dimensions)) + '&filters=' + (filters == null ? '' : encodeURIComponent(filters)) + '&max_results=' + max_results + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
		 * Get management/accountSummaries
		 * @param {number} max_results The maximum number of account summaries to include in this response, where the largest acceptable value is 1000.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {AccountSummaries} Successful response
		 */
		Analytics_management_accountSummaries_list(max_results: number | null | undefined, start_index: number | null | undefined): Observable<AccountSummaries> {
			return this.http.get<AccountSummaries>(this.baseUri + 'management/accountSummaries?max_results=' + max_results + '&start_index=' + start_index, {});
		}

		/**
		 * Lists all accounts to which the user has access.
		 * Get management/accounts
		 * @param {number} max_results The maximum number of accounts to include in this response.
		 * @param {number} start_index An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {Accounts} Successful response
		 */
		Analytics_management_accounts_list(max_results: number | null | undefined, start_index: number | null | undefined): Observable<Accounts> {
			return this.http.get<Accounts>(this.baseUri + 'management/accounts?max_results=' + max_results + '&start_index=' + start_index, {});
		}

		/**
		 * Lists account-user links for a given account.
		 * Get management/accounts/{accountId}/entityUserLinks
		 * @param {string} accountId Account ID to retrieve the user links for.
		 * @param {number} max_results The maximum number of account-user links to include in this response.
		 * @param {number} start_index An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {EntityUserLinks} Successful response
		 */
		Analytics_management_accountUserLinks_list(accountId: string, max_results: number | null | undefined, start_index: number | null | undefined): Observable<EntityUserLinks> {
			return this.http.get<EntityUserLinks>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/entityUserLinks&max_results=' + max_results + '&start_index=' + start_index, {});
		}

		/**
		 * Adds a new user to the given account.
		 * Post management/accounts/{accountId}/entityUserLinks
		 * @param {string} accountId Account ID to create the user link for.
		 * @return {EntityUserLink} Successful response
		 */
		Analytics_management_accountUserLinks_insert(accountId: string, requestBody: EntityUserLink): Observable<EntityUserLink> {
			return this.http.post<EntityUserLink>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/entityUserLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a user from the given account.
		 * Delete management/accounts/{accountId}/entityUserLinks/{linkId}
		 * @param {string} accountId Account ID to delete the user link for.
		 * @param {string} linkId Link ID to delete the user link for.
		 * @return {void} Successful response
		 */
		Analytics_management_accountUserLinks_delete(accountId: string, linkId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/entityUserLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates permissions for an existing user on the given account.
		 * Put management/accounts/{accountId}/entityUserLinks/{linkId}
		 * @param {string} accountId Account ID to update the account-user link for.
		 * @param {string} linkId Link ID to update the account-user link for.
		 * @return {EntityUserLink} Successful response
		 */
		Analytics_management_accountUserLinks_update(accountId: string, linkId: string, requestBody: EntityUserLink): Observable<EntityUserLink> {
			return this.http.put<EntityUserLink>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/entityUserLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all filters for an account
		 * Get management/accounts/{accountId}/filters
		 * @param {string} accountId Account ID to retrieve filters for.
		 * @param {number} max_results The maximum number of filters to include in this response.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {Filters} Successful response
		 */
		Analytics_management_filters_list(accountId: string, max_results: number | null | undefined, start_index: number | null | undefined): Observable<Filters> {
			return this.http.get<Filters>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/filters&max_results=' + max_results + '&start_index=' + start_index, {});
		}

		/**
		 * Create a new filter.
		 * Post management/accounts/{accountId}/filters
		 * @param {string} accountId Account ID to create filter for.
		 * @return {Filter} Successful response
		 */
		Analytics_management_filters_insert(accountId: string, requestBody: Filter): Observable<Filter> {
			return this.http.post<Filter>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/filters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a filter.
		 * Delete management/accounts/{accountId}/filters/{filterId}
		 * @param {string} accountId Account ID to delete the filter for.
		 * @param {string} filterId ID of the filter to be deleted.
		 * @return {Filter} Successful response
		 */
		Analytics_management_filters_delete(accountId: string, filterId: string): Observable<Filter> {
			return this.http.delete<Filter>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/filters/' + (filterId == null ? '' : encodeURIComponent(filterId)), {});
		}

		/**
		 * Returns filters to which the user has access.
		 * Get management/accounts/{accountId}/filters/{filterId}
		 * @param {string} accountId Account ID to retrieve filters for.
		 * @param {string} filterId Filter ID to retrieve filters for.
		 * @return {Filter} Successful response
		 */
		Analytics_management_filters_get(accountId: string, filterId: string): Observable<Filter> {
			return this.http.get<Filter>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/filters/' + (filterId == null ? '' : encodeURIComponent(filterId)), {});
		}

		/**
		 * Updates an existing filter. This method supports patch semantics.
		 * Patch management/accounts/{accountId}/filters/{filterId}
		 * @param {string} accountId Account ID to which the filter belongs.
		 * @param {string} filterId ID of the filter to be updated.
		 * @return {Filter} Successful response
		 */
		Analytics_management_filters_patch(accountId: string, filterId: string, requestBody: Filter): Observable<Filter> {
			return this.http.patch<Filter>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/filters/' + (filterId == null ? '' : encodeURIComponent(filterId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing filter.
		 * Put management/accounts/{accountId}/filters/{filterId}
		 * @param {string} accountId Account ID to which the filter belongs.
		 * @param {string} filterId ID of the filter to be updated.
		 * @return {Filter} Successful response
		 */
		Analytics_management_filters_update(accountId: string, filterId: string, requestBody: Filter): Observable<Filter> {
			return this.http.put<Filter>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/filters/' + (filterId == null ? '' : encodeURIComponent(filterId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists web properties to which the user has access.
		 * Get management/accounts/{accountId}/webproperties
		 * @param {string} accountId Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
		 * @param {number} max_results The maximum number of web properties to include in this response.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {Webproperties} Successful response
		 */
		Analytics_management_webproperties_list(accountId: string, max_results: number | null | undefined, start_index: number | null | undefined): Observable<Webproperties> {
			return this.http.get<Webproperties>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties&max_results=' + max_results + '&start_index=' + start_index, {});
		}

		/**
		 * Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
		 * Post management/accounts/{accountId}/webproperties
		 * @param {string} accountId Account ID to create the web property for.
		 * @return {Webproperty} Successful response
		 */
		Analytics_management_webproperties_insert(accountId: string, requestBody: Webproperty): Observable<Webproperty> {
			return this.http.post<Webproperty>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a web property to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}
		 * @param {string} accountId Account ID to retrieve the web property for.
		 * @param {string} webPropertyId ID to retrieve the web property for.
		 * @return {Webproperty} Successful response
		 */
		Analytics_management_webproperties_get(accountId: string, webPropertyId: string): Observable<Webproperty> {
			return this.http.get<Webproperty>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)), {});
		}

		/**
		 * Updates an existing web property. This method supports patch semantics.
		 * Patch management/accounts/{accountId}/webproperties/{webPropertyId}
		 * @param {string} accountId Account ID to which the web property belongs
		 * @param {string} webPropertyId Web property ID
		 * @return {Webproperty} Successful response
		 */
		Analytics_management_webproperties_patch(accountId: string, webPropertyId: string, requestBody: Webproperty): Observable<Webproperty> {
			return this.http.patch<Webproperty>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing web property.
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}
		 * @param {string} accountId Account ID to which the web property belongs
		 * @param {string} webPropertyId Web property ID
		 * @return {Webproperty} Successful response
		 */
		Analytics_management_webproperties_update(accountId: string, webPropertyId: string, requestBody: Webproperty): Observable<Webproperty> {
			return this.http.put<Webproperty>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List custom data sources to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources
		 * @param {string} accountId Account Id for the custom data sources to retrieve.
		 * @param {string} webPropertyId Web property Id for the custom data sources to retrieve.
		 * @param {number} max_results The maximum number of custom data sources to include in this response.
		 * @param {number} start_index A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {CustomDataSources} Successful response
		 */
		Analytics_management_customDataSources_list(accountId: string, webPropertyId: string, max_results: number | null | undefined, start_index: number | null | undefined): Observable<CustomDataSources> {
			return this.http.get<CustomDataSources>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDataSources&max_results=' + max_results + '&start_index=' + start_index, {});
		}

		/**
		 * Delete data associated with a previous upload.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/deleteUploadData
		 * @param {string} accountId Account Id for the uploads to be deleted.
		 * @param {string} webPropertyId Web property Id for the uploads to be deleted.
		 * @param {string} customDataSourceId Custom data source Id for the uploads to be deleted.
		 * @return {void} Successful response
		 */
		Analytics_management_uploads_deleteUploadData(accountId: string, webPropertyId: string, customDataSourceId: string, requestBody: AnalyticsDataimportDeleteUploadDataRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDataSources/' + (customDataSourceId == null ? '' : encodeURIComponent(customDataSourceId)) + '/deleteUploadData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List uploads to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads
		 * @param {string} accountId Account Id for the uploads to retrieve.
		 * @param {string} webPropertyId Web property Id for the uploads to retrieve.
		 * @param {string} customDataSourceId Custom data source Id for uploads to retrieve.
		 * @param {number} max_results The maximum number of uploads to include in this response.
		 * @param {number} start_index A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {Uploads} Successful response
		 */
		Analytics_management_uploads_list(accountId: string, webPropertyId: string, customDataSourceId: string, max_results: number | null | undefined, start_index: number | null | undefined): Observable<Uploads> {
			return this.http.get<Uploads>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDataSources/' + (customDataSourceId == null ? '' : encodeURIComponent(customDataSourceId)) + '/uploads&max_results=' + max_results + '&start_index=' + start_index, {});
		}

		/**
		 * Upload data for a custom data source.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads
		 * @param {string} accountId Account Id associated with the upload.
		 * @param {string} webPropertyId Web property UA-string associated with the upload.
		 * @param {string} customDataSourceId Custom data source Id to which the data being uploaded belongs.
		 * @return {Upload} Successful response
		 */
		Analytics_management_uploads_uploadData(accountId: string, webPropertyId: string, customDataSourceId: string): Observable<Upload> {
			return this.http.post<Upload>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDataSources/' + (customDataSourceId == null ? '' : encodeURIComponent(customDataSourceId)) + '/uploads', null, {});
		}

		/**
		 * List uploads to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads/{uploadId}
		 * @param {string} accountId Account Id for the upload to retrieve.
		 * @param {string} webPropertyId Web property Id for the upload to retrieve.
		 * @param {string} customDataSourceId Custom data source Id for upload to retrieve.
		 * @param {string} uploadId Upload Id to retrieve.
		 * @return {Upload} Successful response
		 */
		Analytics_management_uploads_get(accountId: string, webPropertyId: string, customDataSourceId: string, uploadId: string): Observable<Upload> {
			return this.http.get<Upload>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDataSources/' + (customDataSourceId == null ? '' : encodeURIComponent(customDataSourceId)) + '/uploads/' + (uploadId == null ? '' : encodeURIComponent(uploadId)), {});
		}

		/**
		 * Lists custom dimensions to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions
		 * @param {string} accountId Account ID for the custom dimensions to retrieve.
		 * @param {string} webPropertyId Web property ID for the custom dimensions to retrieve.
		 * @param {number} max_results The maximum number of custom dimensions to include in this response.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {CustomDimensions} Successful response
		 */
		Analytics_management_customDimensions_list(accountId: string, webPropertyId: string, max_results: number | null | undefined, start_index: number | null | undefined): Observable<CustomDimensions> {
			return this.http.get<CustomDimensions>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDimensions&max_results=' + max_results + '&start_index=' + start_index, {});
		}

		/**
		 * Create a new custom dimension.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions
		 * @param {string} accountId Account ID for the custom dimension to create.
		 * @param {string} webPropertyId Web property ID for the custom dimension to create.
		 * @return {CustomDimension} Successful response
		 */
		Analytics_management_customDimensions_insert(accountId: string, webPropertyId: string, requestBody: CustomDimension): Observable<CustomDimension> {
			return this.http.post<CustomDimension>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDimensions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a custom dimension to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}
		 * @param {string} accountId Account ID for the custom dimension to retrieve.
		 * @param {string} webPropertyId Web property ID for the custom dimension to retrieve.
		 * @param {string} customDimensionId The ID of the custom dimension to retrieve.
		 * @return {CustomDimension} Successful response
		 */
		Analytics_management_customDimensions_get(accountId: string, webPropertyId: string, customDimensionId: string): Observable<CustomDimension> {
			return this.http.get<CustomDimension>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDimensions/' + (customDimensionId == null ? '' : encodeURIComponent(customDimensionId)), {});
		}

		/**
		 * Updates an existing custom dimension. This method supports patch semantics.
		 * Patch management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}
		 * @param {string} accountId Account ID for the custom dimension to update.
		 * @param {string} webPropertyId Web property ID for the custom dimension to update.
		 * @param {string} customDimensionId Custom dimension ID for the custom dimension to update.
		 * @param {boolean} ignoreCustomDataSourceLinks Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
		 * @return {CustomDimension} Successful response
		 */
		Analytics_management_customDimensions_patch(accountId: string, webPropertyId: string, customDimensionId: string, ignoreCustomDataSourceLinks: boolean | null | undefined, requestBody: CustomDimension): Observable<CustomDimension> {
			return this.http.patch<CustomDimension>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDimensions/' + (customDimensionId == null ? '' : encodeURIComponent(customDimensionId)) + '&ignoreCustomDataSourceLinks=' + ignoreCustomDataSourceLinks, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing custom dimension.
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}
		 * @param {string} accountId Account ID for the custom dimension to update.
		 * @param {string} webPropertyId Web property ID for the custom dimension to update.
		 * @param {string} customDimensionId Custom dimension ID for the custom dimension to update.
		 * @param {boolean} ignoreCustomDataSourceLinks Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
		 * @return {CustomDimension} Successful response
		 */
		Analytics_management_customDimensions_update(accountId: string, webPropertyId: string, customDimensionId: string, ignoreCustomDataSourceLinks: boolean | null | undefined, requestBody: CustomDimension): Observable<CustomDimension> {
			return this.http.put<CustomDimension>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customDimensions/' + (customDimensionId == null ? '' : encodeURIComponent(customDimensionId)) + '&ignoreCustomDataSourceLinks=' + ignoreCustomDataSourceLinks, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists custom metrics to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics
		 * @param {string} accountId Account ID for the custom metrics to retrieve.
		 * @param {string} webPropertyId Web property ID for the custom metrics to retrieve.
		 * @param {number} max_results The maximum number of custom metrics to include in this response.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {CustomMetrics} Successful response
		 */
		Analytics_management_customMetrics_list(accountId: string, webPropertyId: string, max_results: number | null | undefined, start_index: number | null | undefined): Observable<CustomMetrics> {
			return this.http.get<CustomMetrics>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customMetrics&max_results=' + max_results + '&start_index=' + start_index, {});
		}

		/**
		 * Create a new custom metric.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics
		 * @param {string} accountId Account ID for the custom metric to create.
		 * @param {string} webPropertyId Web property ID for the custom dimension to create.
		 * @return {CustomMetric} Successful response
		 */
		Analytics_management_customMetrics_insert(accountId: string, webPropertyId: string, requestBody: CustomMetric): Observable<CustomMetric> {
			return this.http.post<CustomMetric>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customMetrics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a custom metric to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}
		 * @param {string} accountId Account ID for the custom metric to retrieve.
		 * @param {string} webPropertyId Web property ID for the custom metric to retrieve.
		 * @param {string} customMetricId The ID of the custom metric to retrieve.
		 * @return {CustomMetric} Successful response
		 */
		Analytics_management_customMetrics_get(accountId: string, webPropertyId: string, customMetricId: string): Observable<CustomMetric> {
			return this.http.get<CustomMetric>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customMetrics/' + (customMetricId == null ? '' : encodeURIComponent(customMetricId)), {});
		}

		/**
		 * Updates an existing custom metric. This method supports patch semantics.
		 * Patch management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}
		 * @param {string} accountId Account ID for the custom metric to update.
		 * @param {string} webPropertyId Web property ID for the custom metric to update.
		 * @param {string} customMetricId Custom metric ID for the custom metric to update.
		 * @param {boolean} ignoreCustomDataSourceLinks Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
		 * @return {CustomMetric} Successful response
		 */
		Analytics_management_customMetrics_patch(accountId: string, webPropertyId: string, customMetricId: string, ignoreCustomDataSourceLinks: boolean | null | undefined, requestBody: CustomMetric): Observable<CustomMetric> {
			return this.http.patch<CustomMetric>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customMetrics/' + (customMetricId == null ? '' : encodeURIComponent(customMetricId)) + '&ignoreCustomDataSourceLinks=' + ignoreCustomDataSourceLinks, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing custom metric.
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}
		 * @param {string} accountId Account ID for the custom metric to update.
		 * @param {string} webPropertyId Web property ID for the custom metric to update.
		 * @param {string} customMetricId Custom metric ID for the custom metric to update.
		 * @param {boolean} ignoreCustomDataSourceLinks Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
		 * @return {CustomMetric} Successful response
		 */
		Analytics_management_customMetrics_update(accountId: string, webPropertyId: string, customMetricId: string, ignoreCustomDataSourceLinks: boolean | null | undefined, requestBody: CustomMetric): Observable<CustomMetric> {
			return this.http.put<CustomMetric>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/customMetrics/' + (customMetricId == null ? '' : encodeURIComponent(customMetricId)) + '&ignoreCustomDataSourceLinks=' + ignoreCustomDataSourceLinks, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists webProperty-Google Ads links for a given web property.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks
		 * @param {string} accountId ID of the account which the given web property belongs to.
		 * @param {string} webPropertyId Web property ID to retrieve the Google Ads links for.
		 * @param {number} max_results The maximum number of webProperty-Google Ads links to include in this response.
		 * @param {number} start_index An index of the first webProperty-Google Ads link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {EntityAdWordsLinks} Successful response
		 */
		Analytics_management_webPropertyAdWordsLinks_list(accountId: string, webPropertyId: string, max_results: number | null | undefined, start_index: number | null | undefined): Observable<EntityAdWordsLinks> {
			return this.http.get<EntityAdWordsLinks>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityAdWordsLinks&max_results=' + max_results + '&start_index=' + start_index, {});
		}

		/**
		 * Creates a webProperty-Google Ads link.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks
		 * @param {string} accountId ID of the Google Analytics account to create the link for.
		 * @param {string} webPropertyId Web property ID to create the link for.
		 * @return {EntityAdWordsLink} Successful response
		 */
		Analytics_management_webPropertyAdWordsLinks_insert(accountId: string, webPropertyId: string, requestBody: EntityAdWordsLink): Observable<EntityAdWordsLink> {
			return this.http.post<EntityAdWordsLink>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityAdWordsLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a web property-Google Ads link.
		 * Delete management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}
		 * @param {string} accountId ID of the account which the given web property belongs to.
		 * @param {string} webPropertyId Web property ID to delete the Google Ads link for.
		 * @param {string} webPropertyAdWordsLinkId Web property Google Ads link ID.
		 * @return {void} Successful response
		 */
		Analytics_management_webPropertyAdWordsLinks_delete(accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityAdWordsLinks/' + (webPropertyAdWordsLinkId == null ? '' : encodeURIComponent(webPropertyAdWordsLinkId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a web property-Google Ads link to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}
		 * @param {string} accountId ID of the account which the given web property belongs to.
		 * @param {string} webPropertyId Web property ID to retrieve the Google Ads link for.
		 * @param {string} webPropertyAdWordsLinkId Web property-Google Ads link ID.
		 * @return {EntityAdWordsLink} Successful response
		 */
		Analytics_management_webPropertyAdWordsLinks_get(accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string): Observable<EntityAdWordsLink> {
			return this.http.get<EntityAdWordsLink>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityAdWordsLinks/' + (webPropertyAdWordsLinkId == null ? '' : encodeURIComponent(webPropertyAdWordsLinkId)), {});
		}

		/**
		 * Updates an existing webProperty-Google Ads link. This method supports patch semantics.
		 * Patch management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}
		 * @param {string} accountId ID of the account which the given web property belongs to.
		 * @param {string} webPropertyId Web property ID to retrieve the Google Ads link for.
		 * @param {string} webPropertyAdWordsLinkId Web property-Google Ads link ID.
		 * @return {EntityAdWordsLink} Successful response
		 */
		Analytics_management_webPropertyAdWordsLinks_patch(accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string, requestBody: EntityAdWordsLink): Observable<EntityAdWordsLink> {
			return this.http.patch<EntityAdWordsLink>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityAdWordsLinks/' + (webPropertyAdWordsLinkId == null ? '' : encodeURIComponent(webPropertyAdWordsLinkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing webProperty-Google Ads link.
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}
		 * @param {string} accountId ID of the account which the given web property belongs to.
		 * @param {string} webPropertyId Web property ID to retrieve the Google Ads link for.
		 * @param {string} webPropertyAdWordsLinkId Web property-Google Ads link ID.
		 * @return {EntityAdWordsLink} Successful response
		 */
		Analytics_management_webPropertyAdWordsLinks_update(accountId: string, webPropertyId: string, webPropertyAdWordsLinkId: string, requestBody: EntityAdWordsLink): Observable<EntityAdWordsLink> {
			return this.http.put<EntityAdWordsLink>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityAdWordsLinks/' + (webPropertyAdWordsLinkId == null ? '' : encodeURIComponent(webPropertyAdWordsLinkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists webProperty-user links for a given web property.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks
		 * @param {string} accountId Account ID which the given web property belongs to.
		 * @param {string} webPropertyId Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
		 * @param {number} max_results The maximum number of webProperty-user Links to include in this response.
		 * @param {number} start_index An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {EntityUserLinks} Successful response
		 */
		Analytics_management_webpropertyUserLinks_list(accountId: string, webPropertyId: string, max_results: number | null | undefined, start_index: number | null | undefined): Observable<EntityUserLinks> {
			return this.http.get<EntityUserLinks>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityUserLinks&max_results=' + max_results + '&start_index=' + start_index, {});
		}

		/**
		 * Adds a new user to the given web property.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks
		 * @param {string} accountId Account ID to create the user link for.
		 * @param {string} webPropertyId Web Property ID to create the user link for.
		 * @return {EntityUserLink} Successful response
		 */
		Analytics_management_webpropertyUserLinks_insert(accountId: string, webPropertyId: string, requestBody: EntityUserLink): Observable<EntityUserLink> {
			return this.http.post<EntityUserLink>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityUserLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a user from the given web property.
		 * Delete management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}
		 * @param {string} accountId Account ID to delete the user link for.
		 * @param {string} webPropertyId Web Property ID to delete the user link for.
		 * @param {string} linkId Link ID to delete the user link for.
		 * @return {void} Successful response
		 */
		Analytics_management_webpropertyUserLinks_delete(accountId: string, webPropertyId: string, linkId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityUserLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates permissions for an existing user on the given web property.
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}
		 * @param {string} accountId Account ID to update the account-user link for.
		 * @param {string} webPropertyId Web property ID to update the account-user link for.
		 * @param {string} linkId Link ID to update the account-user link for.
		 * @return {EntityUserLink} Successful response
		 */
		Analytics_management_webpropertyUserLinks_update(accountId: string, webPropertyId: string, linkId: string, requestBody: EntityUserLink): Observable<EntityUserLink> {
			return this.http.put<EntityUserLink>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/entityUserLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists views (profiles) to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles
		 * @param {string} accountId Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
		 * @param {string} webPropertyId Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
		 * @param {number} max_results The maximum number of views (profiles) to include in this response.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {Profiles} Successful response
		 */
		Analytics_management_profiles_list(accountId: string, webPropertyId: string, max_results: number | null | undefined, start_index: number | null | undefined): Observable<Profiles> {
			return this.http.get<Profiles>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles&max_results=' + max_results + '&start_index=' + start_index, {});
		}

		/**
		 * Create a new view (profile).
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/profiles
		 * @param {string} accountId Account ID to create the view (profile) for.
		 * @param {string} webPropertyId Web property ID to create the view (profile) for.
		 * @return {Profile} Successful response
		 */
		Analytics_management_profiles_insert(accountId: string, webPropertyId: string, requestBody: Profile): Observable<Profile> {
			return this.http.post<Profile>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a view (profile).
		 * Delete management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}
		 * @param {string} accountId Account ID to delete the view (profile) for.
		 * @param {string} webPropertyId Web property ID to delete the view (profile) for.
		 * @param {string} profileId ID of the view (profile) to be deleted.
		 * @return {void} Successful response
		 */
		Analytics_management_profiles_delete(accountId: string, webPropertyId: string, profileId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a view (profile) to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}
		 * @param {string} accountId Account ID to retrieve the view (profile) for.
		 * @param {string} webPropertyId Web property ID to retrieve the view (profile) for.
		 * @param {string} profileId View (Profile) ID to retrieve the view (profile) for.
		 * @return {Profile} Successful response
		 */
		Analytics_management_profiles_get(accountId: string, webPropertyId: string, profileId: string): Observable<Profile> {
			return this.http.get<Profile>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)), {});
		}

		/**
		 * Updates an existing view (profile). This method supports patch semantics.
		 * Patch management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}
		 * @param {string} accountId Account ID to which the view (profile) belongs
		 * @param {string} webPropertyId Web property ID to which the view (profile) belongs
		 * @param {string} profileId ID of the view (profile) to be updated.
		 * @return {Profile} Successful response
		 */
		Analytics_management_profiles_patch(accountId: string, webPropertyId: string, profileId: string, requestBody: Profile): Observable<Profile> {
			return this.http.patch<Profile>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing view (profile).
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}
		 * @param {string} accountId Account ID to which the view (profile) belongs
		 * @param {string} webPropertyId Web property ID to which the view (profile) belongs
		 * @param {string} profileId ID of the view (profile) to be updated.
		 * @return {Profile} Successful response
		 */
		Analytics_management_profiles_update(accountId: string, webPropertyId: string, profileId: string, requestBody: Profile): Observable<Profile> {
			return this.http.put<Profile>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists profile-user links for a given view (profile).
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks
		 * @param {string} accountId Account ID which the given view (profile) belongs to.
		 * @param {string} webPropertyId Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
		 * @param {string} profileId View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
		 * @param {number} max_results The maximum number of profile-user links to include in this response.
		 * @param {number} start_index An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {EntityUserLinks} Successful response
		 */
		Analytics_management_profileUserLinks_list(accountId: string, webPropertyId: string, profileId: string, max_results: number | null | undefined, start_index: number | null | undefined): Observable<EntityUserLinks> {
			return this.http.get<EntityUserLinks>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/entityUserLinks&max_results=' + max_results + '&start_index=' + start_index, {});
		}

		/**
		 * Adds a new user to the given view (profile).
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks
		 * @param {string} accountId Account ID to create the user link for.
		 * @param {string} webPropertyId Web Property ID to create the user link for.
		 * @param {string} profileId View (Profile) ID to create the user link for.
		 * @return {EntityUserLink} Successful response
		 */
		Analytics_management_profileUserLinks_insert(accountId: string, webPropertyId: string, profileId: string, requestBody: EntityUserLink): Observable<EntityUserLink> {
			return this.http.post<EntityUserLink>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/entityUserLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a user from the given view (profile).
		 * Delete management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}
		 * @param {string} accountId Account ID to delete the user link for.
		 * @param {string} webPropertyId Web Property ID to delete the user link for.
		 * @param {string} profileId View (Profile) ID to delete the user link for.
		 * @param {string} linkId Link ID to delete the user link for.
		 * @return {void} Successful response
		 */
		Analytics_management_profileUserLinks_delete(accountId: string, webPropertyId: string, profileId: string, linkId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/entityUserLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates permissions for an existing user on the given view (profile).
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}
		 * @param {string} accountId Account ID to update the user link for.
		 * @param {string} webPropertyId Web Property ID to update the user link for.
		 * @param {string} profileId View (Profile ID) to update the user link for.
		 * @param {string} linkId Link ID to update the user link for.
		 * @return {EntityUserLink} Successful response
		 */
		Analytics_management_profileUserLinks_update(accountId: string, webPropertyId: string, profileId: string, linkId: string, requestBody: EntityUserLink): Observable<EntityUserLink> {
			return this.http.put<EntityUserLink>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/entityUserLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists experiments to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments
		 * @param {string} accountId Account ID to retrieve experiments for.
		 * @param {string} webPropertyId Web property ID to retrieve experiments for.
		 * @param {string} profileId View (Profile) ID to retrieve experiments for.
		 * @param {number} max_results The maximum number of experiments to include in this response.
		 * @param {number} start_index An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {Experiments} Successful response
		 */
		Analytics_management_experiments_list(accountId: string, webPropertyId: string, profileId: string, max_results: number | null | undefined, start_index: number | null | undefined): Observable<Experiments> {
			return this.http.get<Experiments>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/experiments&max_results=' + max_results + '&start_index=' + start_index, {});
		}

		/**
		 * Create a new experiment.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments
		 * @param {string} accountId Account ID to create the experiment for.
		 * @param {string} webPropertyId Web property ID to create the experiment for.
		 * @param {string} profileId View (Profile) ID to create the experiment for.
		 * @return {Experiment} Successful response
		 */
		Analytics_management_experiments_insert(accountId: string, webPropertyId: string, profileId: string, requestBody: Experiment): Observable<Experiment> {
			return this.http.post<Experiment>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/experiments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an experiment.
		 * Delete management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}
		 * @param {string} accountId Account ID to which the experiment belongs
		 * @param {string} webPropertyId Web property ID to which the experiment belongs
		 * @param {string} profileId View (Profile) ID to which the experiment belongs
		 * @param {string} experimentId ID of the experiment to delete
		 * @return {void} Successful response
		 */
		Analytics_management_experiments_delete(accountId: string, webPropertyId: string, profileId: string, experimentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/experiments/' + (experimentId == null ? '' : encodeURIComponent(experimentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an experiment to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}
		 * @param {string} accountId Account ID to retrieve the experiment for.
		 * @param {string} webPropertyId Web property ID to retrieve the experiment for.
		 * @param {string} profileId View (Profile) ID to retrieve the experiment for.
		 * @param {string} experimentId Experiment ID to retrieve the experiment for.
		 * @return {Experiment} Successful response
		 */
		Analytics_management_experiments_get(accountId: string, webPropertyId: string, profileId: string, experimentId: string): Observable<Experiment> {
			return this.http.get<Experiment>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/experiments/' + (experimentId == null ? '' : encodeURIComponent(experimentId)), {});
		}

		/**
		 * Update an existing experiment. This method supports patch semantics.
		 * Patch management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}
		 * @param {string} accountId Account ID of the experiment to update.
		 * @param {string} webPropertyId Web property ID of the experiment to update.
		 * @param {string} profileId View (Profile) ID of the experiment to update.
		 * @param {string} experimentId Experiment ID of the experiment to update.
		 * @return {Experiment} Successful response
		 */
		Analytics_management_experiments_patch(accountId: string, webPropertyId: string, profileId: string, experimentId: string, requestBody: Experiment): Observable<Experiment> {
			return this.http.patch<Experiment>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/experiments/' + (experimentId == null ? '' : encodeURIComponent(experimentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update an existing experiment.
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}
		 * @param {string} accountId Account ID of the experiment to update.
		 * @param {string} webPropertyId Web property ID of the experiment to update.
		 * @param {string} profileId View (Profile) ID of the experiment to update.
		 * @param {string} experimentId Experiment ID of the experiment to update.
		 * @return {Experiment} Successful response
		 */
		Analytics_management_experiments_update(accountId: string, webPropertyId: string, profileId: string, experimentId: string, requestBody: Experiment): Observable<Experiment> {
			return this.http.put<Experiment>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/experiments/' + (experimentId == null ? '' : encodeURIComponent(experimentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists goals to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals
		 * @param {string} accountId Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
		 * @param {string} webPropertyId Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
		 * @param {string} profileId View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
		 * @param {number} max_results The maximum number of goals to include in this response.
		 * @param {number} start_index An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {Goals} Successful response
		 */
		Analytics_management_goals_list(accountId: string, webPropertyId: string, profileId: string, max_results: number | null | undefined, start_index: number | null | undefined): Observable<Goals> {
			return this.http.get<Goals>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/goals&max_results=' + max_results + '&start_index=' + start_index, {});
		}

		/**
		 * Create a new goal.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals
		 * @param {string} accountId Account ID to create the goal for.
		 * @param {string} webPropertyId Web property ID to create the goal for.
		 * @param {string} profileId View (Profile) ID to create the goal for.
		 * @return {Goal} Successful response
		 */
		Analytics_management_goals_insert(accountId: string, webPropertyId: string, profileId: string, requestBody: Goal): Observable<Goal> {
			return this.http.post<Goal>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/goals', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a goal to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}
		 * @param {string} accountId Account ID to retrieve the goal for.
		 * @param {string} webPropertyId Web property ID to retrieve the goal for.
		 * @param {string} profileId View (Profile) ID to retrieve the goal for.
		 * @param {string} goalId Goal ID to retrieve the goal for.
		 * @return {Goal} Successful response
		 */
		Analytics_management_goals_get(accountId: string, webPropertyId: string, profileId: string, goalId: string): Observable<Goal> {
			return this.http.get<Goal>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/goals/' + (goalId == null ? '' : encodeURIComponent(goalId)), {});
		}

		/**
		 * Updates an existing goal. This method supports patch semantics.
		 * Patch management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}
		 * @param {string} accountId Account ID to update the goal.
		 * @param {string} webPropertyId Web property ID to update the goal.
		 * @param {string} profileId View (Profile) ID to update the goal.
		 * @param {string} goalId Index of the goal to be updated.
		 * @return {Goal} Successful response
		 */
		Analytics_management_goals_patch(accountId: string, webPropertyId: string, profileId: string, goalId: string, requestBody: Goal): Observable<Goal> {
			return this.http.patch<Goal>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/goals/' + (goalId == null ? '' : encodeURIComponent(goalId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing goal.
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}
		 * @param {string} accountId Account ID to update the goal.
		 * @param {string} webPropertyId Web property ID to update the goal.
		 * @param {string} profileId View (Profile) ID to update the goal.
		 * @param {string} goalId Index of the goal to be updated.
		 * @return {Goal} Successful response
		 */
		Analytics_management_goals_update(accountId: string, webPropertyId: string, profileId: string, goalId: string, requestBody: Goal): Observable<Goal> {
			return this.http.put<Goal>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/goals/' + (goalId == null ? '' : encodeURIComponent(goalId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all profile filter links for a profile.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks
		 * @param {string} accountId Account ID to retrieve profile filter links for.
		 * @param {string} webPropertyId Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
		 * @param {string} profileId Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
		 * @param {number} max_results The maximum number of profile filter links to include in this response.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {ProfileFilterLinks} Successful response
		 */
		Analytics_management_profileFilterLinks_list(accountId: string, webPropertyId: string, profileId: string, max_results: number | null | undefined, start_index: number | null | undefined): Observable<ProfileFilterLinks> {
			return this.http.get<ProfileFilterLinks>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/profileFilterLinks&max_results=' + max_results + '&start_index=' + start_index, {});
		}

		/**
		 * Create a new profile filter link.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks
		 * @param {string} accountId Account ID to create profile filter link for.
		 * @param {string} webPropertyId Web property Id to create profile filter link for.
		 * @param {string} profileId Profile ID to create filter link for.
		 * @return {ProfileFilterLink} Successful response
		 */
		Analytics_management_profileFilterLinks_insert(accountId: string, webPropertyId: string, profileId: string, requestBody: ProfileFilterLink): Observable<ProfileFilterLink> {
			return this.http.post<ProfileFilterLink>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/profileFilterLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a profile filter link.
		 * Delete management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}
		 * @param {string} accountId Account ID to which the profile filter link belongs.
		 * @param {string} webPropertyId Web property Id to which the profile filter link belongs.
		 * @param {string} profileId Profile ID to which the filter link belongs.
		 * @param {string} linkId ID of the profile filter link to delete.
		 * @return {void} Successful response
		 */
		Analytics_management_profileFilterLinks_delete(accountId: string, webPropertyId: string, profileId: string, linkId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/profileFilterLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single profile filter link.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}
		 * @param {string} accountId Account ID to retrieve profile filter link for.
		 * @param {string} webPropertyId Web property Id to retrieve profile filter link for.
		 * @param {string} profileId Profile ID to retrieve filter link for.
		 * @param {string} linkId ID of the profile filter link.
		 * @return {ProfileFilterLink} Successful response
		 */
		Analytics_management_profileFilterLinks_get(accountId: string, webPropertyId: string, profileId: string, linkId: string): Observable<ProfileFilterLink> {
			return this.http.get<ProfileFilterLink>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/profileFilterLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), {});
		}

		/**
		 * Update an existing profile filter link. This method supports patch semantics.
		 * Patch management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}
		 * @param {string} accountId Account ID to which profile filter link belongs.
		 * @param {string} webPropertyId Web property Id to which profile filter link belongs
		 * @param {string} profileId Profile ID to which filter link belongs
		 * @param {string} linkId ID of the profile filter link to be updated.
		 * @return {ProfileFilterLink} Successful response
		 */
		Analytics_management_profileFilterLinks_patch(accountId: string, webPropertyId: string, profileId: string, linkId: string, requestBody: ProfileFilterLink): Observable<ProfileFilterLink> {
			return this.http.patch<ProfileFilterLink>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/profileFilterLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update an existing profile filter link.
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}
		 * @param {string} accountId Account ID to which profile filter link belongs.
		 * @param {string} webPropertyId Web property Id to which profile filter link belongs
		 * @param {string} profileId Profile ID to which filter link belongs
		 * @param {string} linkId ID of the profile filter link to be updated.
		 * @return {ProfileFilterLink} Successful response
		 */
		Analytics_management_profileFilterLinks_update(accountId: string, webPropertyId: string, profileId: string, linkId: string, requestBody: ProfileFilterLink): Observable<ProfileFilterLink> {
			return this.http.put<ProfileFilterLink>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/profileFilterLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists unsampled reports to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports
		 * @param {string} accountId Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported.
		 * @param {string} webPropertyId Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported.
		 * @param {string} profileId View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported.
		 * @param {number} max_results The maximum number of unsampled reports to include in this response.
		 * @param {number} start_index An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {UnsampledReports} Successful response
		 */
		Analytics_management_unsampledReports_list(accountId: string, webPropertyId: string, profileId: string, max_results: number | null | undefined, start_index: number | null | undefined): Observable<UnsampledReports> {
			return this.http.get<UnsampledReports>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/unsampledReports&max_results=' + max_results + '&start_index=' + start_index, {});
		}

		/**
		 * Create a new unsampled report.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports
		 * @param {string} accountId Account ID to create the unsampled report for.
		 * @param {string} webPropertyId Web property ID to create the unsampled report for.
		 * @param {string} profileId View (Profile) ID to create the unsampled report for.
		 * @return {UnsampledReport} Successful response
		 */
		Analytics_management_unsampledReports_insert(accountId: string, webPropertyId: string, profileId: string, requestBody: UnsampledReport): Observable<UnsampledReport> {
			return this.http.post<UnsampledReport>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/unsampledReports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an unsampled report.
		 * Delete management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}
		 * @param {string} accountId Account ID to delete the unsampled report for.
		 * @param {string} webPropertyId Web property ID to delete the unsampled reports for.
		 * @param {string} profileId View (Profile) ID to delete the unsampled report for.
		 * @param {string} unsampledReportId ID of the unsampled report to be deleted.
		 * @return {void} Successful response
		 */
		Analytics_management_unsampledReports_delete(accountId: string, webPropertyId: string, profileId: string, unsampledReportId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/unsampledReports/' + (unsampledReportId == null ? '' : encodeURIComponent(unsampledReportId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single unsampled report.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}
		 * @param {string} accountId Account ID to retrieve unsampled report for.
		 * @param {string} webPropertyId Web property ID to retrieve unsampled reports for.
		 * @param {string} profileId View (Profile) ID to retrieve unsampled report for.
		 * @param {string} unsampledReportId ID of the unsampled report to retrieve.
		 * @return {UnsampledReport} Successful response
		 */
		Analytics_management_unsampledReports_get(accountId: string, webPropertyId: string, profileId: string, unsampledReportId: string): Observable<UnsampledReport> {
			return this.http.get<UnsampledReport>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/unsampledReports/' + (unsampledReportId == null ? '' : encodeURIComponent(unsampledReportId)), {});
		}

		/**
		 * Lists remarketing audiences to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences
		 * @param {string} accountId The account ID of the remarketing audiences to retrieve.
		 * @param {string} webPropertyId The web property ID of the remarketing audiences to retrieve.
		 * @param {number} max_results The maximum number of remarketing audiences to include in this response.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {RemarketingAudiences} Successful response
		 */
		Analytics_management_remarketingAudience_list(accountId: string, webPropertyId: string, max_results: number | null | undefined, start_index: number | null | undefined, type: string | null | undefined): Observable<RemarketingAudiences> {
			return this.http.get<RemarketingAudiences>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/remarketingAudiences&max_results=' + max_results + '&start_index=' + start_index + '&type=' + (type == null ? '' : encodeURIComponent(type)), {});
		}

		/**
		 * Creates a new remarketing audience.
		 * Post management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences
		 * @param {string} accountId The account ID for which to create the remarketing audience.
		 * @param {string} webPropertyId Web property ID for which to create the remarketing audience.
		 * @return {RemarketingAudience} Successful response
		 */
		Analytics_management_remarketingAudience_insert(accountId: string, webPropertyId: string, requestBody: RemarketingAudience): Observable<RemarketingAudience> {
			return this.http.post<RemarketingAudience>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/remarketingAudiences', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a remarketing audience.
		 * Delete management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}
		 * @param {string} accountId Account ID to which the remarketing audience belongs.
		 * @param {string} webPropertyId Web property ID to which the remarketing audience belongs.
		 * @param {string} remarketingAudienceId The ID of the remarketing audience to delete.
		 * @return {void} Successful response
		 */
		Analytics_management_remarketingAudience_delete(accountId: string, webPropertyId: string, remarketingAudienceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/remarketingAudiences/' + (remarketingAudienceId == null ? '' : encodeURIComponent(remarketingAudienceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a remarketing audience to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}
		 * @param {string} accountId The account ID of the remarketing audience to retrieve.
		 * @param {string} webPropertyId The web property ID of the remarketing audience to retrieve.
		 * @param {string} remarketingAudienceId The ID of the remarketing audience to retrieve.
		 * @return {RemarketingAudience} Successful response
		 */
		Analytics_management_remarketingAudience_get(accountId: string, webPropertyId: string, remarketingAudienceId: string): Observable<RemarketingAudience> {
			return this.http.get<RemarketingAudience>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/remarketingAudiences/' + (remarketingAudienceId == null ? '' : encodeURIComponent(remarketingAudienceId)), {});
		}

		/**
		 * Updates an existing remarketing audience. This method supports patch semantics.
		 * Patch management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}
		 * @param {string} accountId The account ID of the remarketing audience to update.
		 * @param {string} webPropertyId The web property ID of the remarketing audience to update.
		 * @param {string} remarketingAudienceId The ID of the remarketing audience to update.
		 * @return {RemarketingAudience} Successful response
		 */
		Analytics_management_remarketingAudience_patch(accountId: string, webPropertyId: string, remarketingAudienceId: string, requestBody: RemarketingAudience): Observable<RemarketingAudience> {
			return this.http.patch<RemarketingAudience>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/remarketingAudiences/' + (remarketingAudienceId == null ? '' : encodeURIComponent(remarketingAudienceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing remarketing audience.
		 * Put management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}
		 * @param {string} accountId The account ID of the remarketing audience to update.
		 * @param {string} webPropertyId The web property ID of the remarketing audience to update.
		 * @param {string} remarketingAudienceId The ID of the remarketing audience to update.
		 * @return {RemarketingAudience} Successful response
		 */
		Analytics_management_remarketingAudience_update(accountId: string, webPropertyId: string, remarketingAudienceId: string, requestBody: RemarketingAudience): Observable<RemarketingAudience> {
			return this.http.put<RemarketingAudience>(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/remarketingAudiences/' + (remarketingAudienceId == null ? '' : encodeURIComponent(remarketingAudienceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Hashes the given Client ID.
		 * Post management/clientId:hashClientId
		 * @return {HashClientIdResponse} Successful response
		 */
		Analytics_management_clientId_hashClientId(requestBody: HashClientIdRequest): Observable<HashClientIdResponse> {
			return this.http.post<HashClientIdResponse>(this.baseUri + 'management/clientId:hashClientId', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists segments to which the user has access.
		 * Get management/segments
		 * @param {number} max_results The maximum number of segments to include in this response.
		 * @param {number} start_index An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 * @return {Segments} Successful response
		 */
		Analytics_management_segments_list(max_results: number | null | undefined, start_index: number | null | undefined): Observable<Segments> {
			return this.http.get<Segments>(this.baseUri + 'management/segments?max_results=' + max_results + '&start_index=' + start_index, {});
		}

		/**
		 * Lists all columns for a report type
		 * Get metadata/{reportType}/columns
		 * @param {string} reportType Report type. Allowed Values: 'ga'. Where 'ga' corresponds to the Core Reporting API
		 * @return {Columns} Successful response
		 */
		Analytics_metadata_columns_list(reportType: string): Observable<Columns> {
			return this.http.get<Columns>(this.baseUri + 'metadata/' + (reportType == null ? '' : encodeURIComponent(reportType)) + '/columns', {});
		}

		/**
		 * Creates an account ticket.
		 * Post provisioning/createAccountTicket
		 * @return {AccountTicket} Successful response
		 */
		Analytics_provisioning_createAccountTicket(requestBody: AccountTicket): Observable<AccountTicket> {
			return this.http.post<AccountTicket>(this.baseUri + 'provisioning/createAccountTicket', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provision account.
		 * Post provisioning/createAccountTree
		 * @return {AccountTreeResponse} Successful response
		 */
		Analytics_provisioning_createAccountTree(requestBody: AccountTreeRequest): Observable<AccountTreeResponse> {
			return this.http.post<AccountTreeResponse>(this.baseUri + 'provisioning/createAccountTree', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Insert or update a user deletion requests.
		 * Post userDeletion/userDeletionRequests:upsert
		 * @return {UserDeletionRequest} Successful response
		 */
		Analytics_userDeletion_userDeletionRequest_upsert(requestBody: UserDeletionRequest): Observable<UserDeletionRequest> {
			return this.http.post<UserDeletionRequest>(this.baseUri + 'userDeletion/userDeletionRequests:upsert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Analytics_data_ga_getOutput { dataTable = 0, json = 1 }

	export enum Analytics_data_ga_getSamplingLevel { DEFAULT = 0, FASTER = 1, HIGHER_PRECISION = 2 }

}

