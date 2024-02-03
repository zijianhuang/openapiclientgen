import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Account data. After the creation of a new account it may take a few minutes before it is fully operational. The methods delete, insert, and update require the admin role. */
	export interface Account {

		/** Indicates whether the merchant sells adult content. */
		adultContent?: boolean | null;

		/** List of linked AdWords accounts that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected either in the AdWords interface or through the AdWords API. To delete an active link, or to cancel a link request, remove it from the list. */
		adwordsLinks?: Array<AccountAdwordsLink>;
		businessInformation?: AccountBusinessInformation;
		googleMyBusinessLink?: AccountGoogleMyBusinessLink;

		/** Required for update. Merchant Center account ID. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#account`" */
		kind?: string | null;

		/** Required. Display name for the account. */
		name?: string | null;

		/** [DEPRECATED] This field is never returned and will be ignored if provided. */
		reviewsUrl?: string | null;

		/** Client-specific, locally-unique, internal ID for the child account. */
		sellerId?: string | null;

		/** Users with access to the account. Every account (except for subaccounts) must have at least one admin user. */
		users?: Array<AccountUser>;

		/** The merchant's website. */
		websiteUrl?: string | null;

		/** List of linked YouTube channels that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected in the YT Creator Studio interface. To delete an active link, or to cancel a link request, remove it from the list. */
		youtubeChannelLinks?: Array<AccountYouTubeChannelLink>;
	}

	/** Account data. After the creation of a new account it may take a few minutes before it is fully operational. The methods delete, insert, and update require the admin role. */
	export interface AccountFormProperties {

		/** Indicates whether the merchant sells adult content. */
		adultContent: FormControl<boolean | null | undefined>,

		/** Required for update. Merchant Center account ID. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#account`" */
		kind: FormControl<string | null | undefined>,

		/** Required. Display name for the account. */
		name: FormControl<string | null | undefined>,

		/** [DEPRECATED] This field is never returned and will be ignored if provided. */
		reviewsUrl: FormControl<string | null | undefined>,

		/** Client-specific, locally-unique, internal ID for the child account. */
		sellerId: FormControl<string | null | undefined>,

		/** The merchant's website. */
		websiteUrl: FormControl<string | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			adultContent: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reviewsUrl: new FormControl<string | null | undefined>(undefined),
			sellerId: new FormControl<string | null | undefined>(undefined),
			websiteUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountAdwordsLink {

		/** Customer ID of the AdWords account. */
		adwordsId?: string | null;

		/** Status of the link between this Merchant Center account and the AdWords account. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in Google AdWords or `pending` if it's pending approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status `active` when it's still pending or with status `pending` when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending. Acceptable values are: - "`active`" - "`pending`" */
		status?: string | null;
	}
	export interface AccountAdwordsLinkFormProperties {

		/** Customer ID of the AdWords account. */
		adwordsId: FormControl<string | null | undefined>,

		/** Status of the link between this Merchant Center account and the AdWords account. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in Google AdWords or `pending` if it's pending approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status `active` when it's still pending or with status `pending` when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending. Acceptable values are: - "`active`" - "`pending`" */
		status: FormControl<string | null | undefined>,
	}
	export function CreateAccountAdwordsLinkFormGroup() {
		return new FormGroup<AccountAdwordsLinkFormProperties>({
			adwordsId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountBusinessInformation {
		address?: AccountAddress;
		customerService?: AccountCustomerService;

		/** The 10-digit [Korean business registration number](https://support.google.com/merchants/answer/9037766) separated with dashes in the format: XXX-XX-XXXXX. This field will only be updated if explicitly set. */
		koreanBusinessRegistrationNumber?: string | null;

		/** The phone number of the business. */
		phoneNumber?: string | null;
	}
	export interface AccountBusinessInformationFormProperties {

		/** The 10-digit [Korean business registration number](https://support.google.com/merchants/answer/9037766) separated with dashes in the format: XXX-XX-XXXXX. This field will only be updated if explicitly set. */
		koreanBusinessRegistrationNumber: FormControl<string | null | undefined>,

		/** The phone number of the business. */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateAccountBusinessInformationFormGroup() {
		return new FormGroup<AccountBusinessInformationFormProperties>({
			koreanBusinessRegistrationNumber: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountAddress {

		/** CLDR country code (e.g. "US"). This value cannot be set for a sub-account of an MCA. All MCA sub-accounts inherit the country of their parent MCA. */
		country?: string | null;

		/** City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs). */
		locality?: string | null;

		/** Postal code or ZIP (e.g. "94043"). */
		postalCode?: string | null;

		/** Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC"). */
		region?: string | null;

		/** Street-level part of the address. */
		streetAddress?: string | null;
	}
	export interface AccountAddressFormProperties {

		/** CLDR country code (e.g. "US"). This value cannot be set for a sub-account of an MCA. All MCA sub-accounts inherit the country of their parent MCA. */
		country: FormControl<string | null | undefined>,

		/** City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs). */
		locality: FormControl<string | null | undefined>,

		/** Postal code or ZIP (e.g. "94043"). */
		postalCode: FormControl<string | null | undefined>,

		/** Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC"). */
		region: FormControl<string | null | undefined>,

		/** Street-level part of the address. */
		streetAddress: FormControl<string | null | undefined>,
	}
	export function CreateAccountAddressFormGroup() {
		return new FormGroup<AccountAddressFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			streetAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountCustomerService {

		/** Customer service email. */
		email?: string | null;

		/** Customer service phone number. */
		phoneNumber?: string | null;

		/** Customer service URL. */
		url?: string | null;
	}
	export interface AccountCustomerServiceFormProperties {

		/** Customer service email. */
		email: FormControl<string | null | undefined>,

		/** Customer service phone number. */
		phoneNumber: FormControl<string | null | undefined>,

		/** Customer service URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAccountCustomerServiceFormGroup() {
		return new FormGroup<AccountCustomerServiceFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountGoogleMyBusinessLink {

		/** The GMB email address of which a specific account within a GMB account. A sample account within a GMB account could be a business account with set of locations, managed under the GMB account. */
		gmbEmail?: string | null;

		/** Status of the link between this Merchant Center account and the GMB account. Acceptable values are: - "`active`" - "`pending`" */
		status?: string | null;
	}
	export interface AccountGoogleMyBusinessLinkFormProperties {

		/** The GMB email address of which a specific account within a GMB account. A sample account within a GMB account could be a business account with set of locations, managed under the GMB account. */
		gmbEmail: FormControl<string | null | undefined>,

		/** Status of the link between this Merchant Center account and the GMB account. Acceptable values are: - "`active`" - "`pending`" */
		status: FormControl<string | null | undefined>,
	}
	export function CreateAccountGoogleMyBusinessLinkFormGroup() {
		return new FormGroup<AccountGoogleMyBusinessLinkFormProperties>({
			gmbEmail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountUser {

		/** Whether user is an admin. */
		admin?: boolean | null;

		/** User's email address. */
		emailAddress?: string | null;

		/** Whether user is an order manager. */
		orderManager?: boolean | null;

		/** Whether user can access payment statements. */
		paymentsAnalyst?: boolean | null;

		/** Whether user can manage payment settings. */
		paymentsManager?: boolean | null;
	}
	export interface AccountUserFormProperties {

		/** Whether user is an admin. */
		admin: FormControl<boolean | null | undefined>,

		/** User's email address. */
		emailAddress: FormControl<string | null | undefined>,

		/** Whether user is an order manager. */
		orderManager: FormControl<boolean | null | undefined>,

		/** Whether user can access payment statements. */
		paymentsAnalyst: FormControl<boolean | null | undefined>,

		/** Whether user can manage payment settings. */
		paymentsManager: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountUserFormGroup() {
		return new FormGroup<AccountUserFormProperties>({
			admin: new FormControl<boolean | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			orderManager: new FormControl<boolean | null | undefined>(undefined),
			paymentsAnalyst: new FormControl<boolean | null | undefined>(undefined),
			paymentsManager: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AccountYouTubeChannelLink {

		/** Channel ID. */
		channelId?: string | null;

		/** Status of the link between this Merchant Center account and the YouTube channel. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in YT Creator Studio or `pending` if it's pending approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status `active` when it's still pending or with status `pending` when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending. */
		status?: string | null;
	}
	export interface AccountYouTubeChannelLinkFormProperties {

		/** Channel ID. */
		channelId: FormControl<string | null | undefined>,

		/** Status of the link between this Merchant Center account and the YouTube channel. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in YT Creator Studio or `pending` if it's pending approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status `active` when it's still pending or with status `pending` when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateAccountYouTubeChannelLinkFormGroup() {
		return new FormGroup<AccountYouTubeChannelLinkFormProperties>({
			channelId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountIdentifier {

		/** The aggregator ID, set for aggregators and subaccounts (in that case, it represents the aggregator of the subaccount). */
		aggregatorId?: string | null;

		/** The merchant account ID, set for individual accounts and subaccounts. */
		merchantId?: string | null;
	}
	export interface AccountIdentifierFormProperties {

		/** The aggregator ID, set for aggregators and subaccounts (in that case, it represents the aggregator of the subaccount). */
		aggregatorId: FormControl<string | null | undefined>,

		/** The merchant account ID, set for individual accounts and subaccounts. */
		merchantId: FormControl<string | null | undefined>,
	}
	export function CreateAccountIdentifierFormGroup() {
		return new FormGroup<AccountIdentifierFormProperties>({
			aggregatorId: new FormControl<string | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of an account, i.e., information about its products, which is computed offline and not returned immediately at insertion time. */
	export interface AccountStatus {

		/** The ID of the account for which the status is reported. */
		accountId?: string | null;

		/** A list of account level issues. */
		accountLevelIssues?: Array<AccountStatusAccountLevelIssue>;

		/** DEPRECATED - never populated. */
		dataQualityIssues?: Array<AccountStatusDataQualityIssue>;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountStatus`" */
		kind?: string | null;

		/** List of product-related data by channel, destination, and country. Data in this field may be delayed by up to 30 minutes. */
		products?: Array<AccountStatusProducts>;

		/** Whether the account's website is claimed or not. */
		websiteClaimed?: boolean | null;
	}

	/** The status of an account, i.e., information about its products, which is computed offline and not returned immediately at insertion time. */
	export interface AccountStatusFormProperties {

		/** The ID of the account for which the status is reported. */
		accountId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountStatus`" */
		kind: FormControl<string | null | undefined>,

		/** Whether the account's website is claimed or not. */
		websiteClaimed: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountStatusFormGroup() {
		return new FormGroup<AccountStatusFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			websiteClaimed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AccountStatusAccountLevelIssue {

		/** Country for which this issue is reported. */
		country?: string | null;

		/** The destination the issue applies to. If this field is empty then the issue applies to all available destinations. */
		destination?: string | null;

		/** Additional details about the issue. */
		detail?: string | null;

		/** The URL of a web page to help resolving this issue. */
		documentation?: string | null;

		/** Issue identifier. */
		id?: string | null;

		/** Severity of the issue. Acceptable values are: - "`critical`" - "`error`" - "`suggestion`" */
		severity?: string | null;

		/** Short description of the issue. */
		title?: string | null;
	}
	export interface AccountStatusAccountLevelIssueFormProperties {

		/** Country for which this issue is reported. */
		country: FormControl<string | null | undefined>,

		/** The destination the issue applies to. If this field is empty then the issue applies to all available destinations. */
		destination: FormControl<string | null | undefined>,

		/** Additional details about the issue. */
		detail: FormControl<string | null | undefined>,

		/** The URL of a web page to help resolving this issue. */
		documentation: FormControl<string | null | undefined>,

		/** Issue identifier. */
		id: FormControl<string | null | undefined>,

		/** Severity of the issue. Acceptable values are: - "`critical`" - "`error`" - "`suggestion`" */
		severity: FormControl<string | null | undefined>,

		/** Short description of the issue. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAccountStatusAccountLevelIssueFormGroup() {
		return new FormGroup<AccountStatusAccountLevelIssueFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			documentation: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountStatusDataQualityIssue {
		country?: string | null;
		destination?: string | null;
		detail?: string | null;
		displayedValue?: string | null;
		exampleItems?: Array<AccountStatusExampleItem>;
		id?: string | null;
		lastChecked?: string | null;
		location?: string | null;
		numItems?: number | null;

		/** Acceptable values are: - "`critical`" - "`error`" - "`suggestion`" */
		severity?: string | null;
		submittedValue?: string | null;
	}
	export interface AccountStatusDataQualityIssueFormProperties {
		country: FormControl<string | null | undefined>,
		destination: FormControl<string | null | undefined>,
		detail: FormControl<string | null | undefined>,
		displayedValue: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastChecked: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		numItems: FormControl<number | null | undefined>,

		/** Acceptable values are: - "`critical`" - "`error`" - "`suggestion`" */
		severity: FormControl<string | null | undefined>,
		submittedValue: FormControl<string | null | undefined>,
	}
	export function CreateAccountStatusDataQualityIssueFormGroup() {
		return new FormGroup<AccountStatusDataQualityIssueFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			displayedValue: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastChecked: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			numItems: new FormControl<number | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			submittedValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountStatusExampleItem {
		itemId?: string | null;
		link?: string | null;
		submittedValue?: string | null;
		title?: string | null;
		valueOnLandingPage?: string | null;
	}
	export interface AccountStatusExampleItemFormProperties {
		itemId: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		submittedValue: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		valueOnLandingPage: FormControl<string | null | undefined>,
	}
	export function CreateAccountStatusExampleItemFormGroup() {
		return new FormGroup<AccountStatusExampleItemFormProperties>({
			itemId: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			submittedValue: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			valueOnLandingPage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountStatusProducts {

		/** The channel the data applies to. Acceptable values are: - "`local`" - "`online`" */
		channel?: string | null;

		/** The country the data applies to. */
		country?: string | null;

		/** The destination the data applies to. */
		destination?: string | null;

		/** List of item-level issues. */
		itemLevelIssues?: Array<AccountStatusItemLevelIssue>;
		statistics?: AccountStatusStatistics;
	}
	export interface AccountStatusProductsFormProperties {

		/** The channel the data applies to. Acceptable values are: - "`local`" - "`online`" */
		channel: FormControl<string | null | undefined>,

		/** The country the data applies to. */
		country: FormControl<string | null | undefined>,

		/** The destination the data applies to. */
		destination: FormControl<string | null | undefined>,
	}
	export function CreateAccountStatusProductsFormGroup() {
		return new FormGroup<AccountStatusProductsFormProperties>({
			channel: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountStatusItemLevelIssue {

		/** The attribute's name, if the issue is caused by a single attribute. */
		attributeName?: string | null;

		/** The error code of the issue. */
		code?: string | null;

		/** A short issue description in English. */
		description?: string | null;

		/** A detailed issue description in English. */
		detail?: string | null;

		/** The URL of a web page to help with resolving this issue. */
		documentation?: string | null;

		/** Number of items with this issue. */
		numItems?: string | null;

		/** Whether the issue can be resolved by the merchant. */
		resolution?: string | null;

		/** How this issue affects serving of the offer. */
		servability?: string | null;
	}
	export interface AccountStatusItemLevelIssueFormProperties {

		/** The attribute's name, if the issue is caused by a single attribute. */
		attributeName: FormControl<string | null | undefined>,

		/** The error code of the issue. */
		code: FormControl<string | null | undefined>,

		/** A short issue description in English. */
		description: FormControl<string | null | undefined>,

		/** A detailed issue description in English. */
		detail: FormControl<string | null | undefined>,

		/** The URL of a web page to help with resolving this issue. */
		documentation: FormControl<string | null | undefined>,

		/** Number of items with this issue. */
		numItems: FormControl<string | null | undefined>,

		/** Whether the issue can be resolved by the merchant. */
		resolution: FormControl<string | null | undefined>,

		/** How this issue affects serving of the offer. */
		servability: FormControl<string | null | undefined>,
	}
	export function CreateAccountStatusItemLevelIssueFormGroup() {
		return new FormGroup<AccountStatusItemLevelIssueFormProperties>({
			attributeName: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			documentation: new FormControl<string | null | undefined>(undefined),
			numItems: new FormControl<string | null | undefined>(undefined),
			resolution: new FormControl<string | null | undefined>(undefined),
			servability: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountStatusStatistics {

		/** Number of active offers. */
		active?: string | null;

		/** Number of disapproved offers. */
		disapproved?: string | null;

		/** Number of expiring offers. */
		expiring?: string | null;

		/** Number of pending offers. */
		pending?: string | null;
	}
	export interface AccountStatusStatisticsFormProperties {

		/** Number of active offers. */
		active: FormControl<string | null | undefined>,

		/** Number of disapproved offers. */
		disapproved: FormControl<string | null | undefined>,

		/** Number of expiring offers. */
		expiring: FormControl<string | null | undefined>,

		/** Number of pending offers. */
		pending: FormControl<string | null | undefined>,
	}
	export function CreateAccountStatusStatisticsFormGroup() {
		return new FormGroup<AccountStatusStatisticsFormProperties>({
			active: new FormControl<string | null | undefined>(undefined),
			disapproved: new FormControl<string | null | undefined>(undefined),
			expiring: new FormControl<string | null | undefined>(undefined),
			pending: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The tax settings of a merchant account. All methods require the admin role. */
	export interface AccountTax {

		/** Required. The ID of the account to which these account tax settings belong. */
		accountId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountTax". */
		kind?: string | null;

		/** Tax rules. Updating the tax rules will enable US taxes (not reversible). Defining no rules is equivalent to not charging tax at all. */
		rules?: Array<AccountTaxTaxRule>;
	}

	/** The tax settings of a merchant account. All methods require the admin role. */
	export interface AccountTaxFormProperties {

		/** Required. The ID of the account to which these account tax settings belong. */
		accountId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountTax". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccountTaxFormGroup() {
		return new FormGroup<AccountTaxFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Tax calculation rule to apply in a state or province (USA only). */
	export interface AccountTaxTaxRule {

		/** Country code in which tax is applicable. */
		country?: string | null;

		/** Required. State (or province) is which the tax is applicable, described by its location ID (also called criteria ID). */
		locationId?: string | null;

		/** Explicit tax rate in percent, represented as a floating point number without the percentage character. Must not be negative. */
		ratePercent?: string | null;

		/** If true, shipping charges are also taxed. */
		shippingTaxed?: boolean | null;

		/** Whether the tax rate is taken from a global tax table or specified explicitly. */
		useGlobalRate?: boolean | null;
	}

	/** Tax calculation rule to apply in a state or province (USA only). */
	export interface AccountTaxTaxRuleFormProperties {

		/** Country code in which tax is applicable. */
		country: FormControl<string | null | undefined>,

		/** Required. State (or province) is which the tax is applicable, described by its location ID (also called criteria ID). */
		locationId: FormControl<string | null | undefined>,

		/** Explicit tax rate in percent, represented as a floating point number without the percentage character. Must not be negative. */
		ratePercent: FormControl<string | null | undefined>,

		/** If true, shipping charges are also taxed. */
		shippingTaxed: FormControl<boolean | null | undefined>,

		/** Whether the tax rate is taken from a global tax table or specified explicitly. */
		useGlobalRate: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountTaxTaxRuleFormGroup() {
		return new FormGroup<AccountTaxTaxRuleFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			ratePercent: new FormControl<string | null | undefined>(undefined),
			shippingTaxed: new FormControl<boolean | null | undefined>(undefined),
			useGlobalRate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AccountsAuthInfoResponse {

		/** The account identifiers corresponding to the authenticated user. - For an individual account: only the merchant ID is defined - For an aggregator: only the aggregator ID is defined - For a subaccount of an MCA: both the merchant ID and the aggregator ID are defined. */
		accountIdentifiers?: Array<AccountIdentifier>;

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountsAuthInfoResponse". */
		kind?: string | null;
	}
	export interface AccountsAuthInfoResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountsAuthInfoResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccountsAuthInfoResponseFormGroup() {
		return new FormGroup<AccountsAuthInfoResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountsClaimWebsiteResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountsClaimWebsiteResponse". */
		kind?: string | null;
	}
	export interface AccountsClaimWebsiteResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountsClaimWebsiteResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccountsClaimWebsiteResponseFormGroup() {
		return new FormGroup<AccountsClaimWebsiteResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountsCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<AccountsCustomBatchRequestEntry>;
	}
	export interface AccountsCustomBatchRequestFormProperties {
	}
	export function CreateAccountsCustomBatchRequestFormGroup() {
		return new FormGroup<AccountsCustomBatchRequestFormProperties>({
		});

	}


	/** A batch entry encoding a single non-batch accounts request. */
	export interface AccountsCustomBatchRequestEntry {

		/** Account data. After the creation of a new account it may take a few minutes before it is fully operational. The methods delete, insert, and update require the admin role. */
		account?: Account;

		/** The ID of the targeted account. Only defined if the method is not `insert`. */
		accountId?: string | null;

		/** An entry ID, unique within the batch request. */
		batchId?: number | null;

		/** Whether the account should be deleted if the account has offers. Only applicable if the method is `delete`. */
		force?: boolean | null;

		/** Label IDs for the 'updatelabels' request. */
		labelIds?: Array<string>;
		linkRequest?: AccountsCustomBatchRequestEntryLinkRequest;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/** The method of the batch entry. Acceptable values are: - "`claimWebsite`" - "`delete`" - "`get`" - "`insert`" - "`link`" - "`update`" */
		method?: string | null;

		/** Only applicable if the method is `claimwebsite`. Indicates whether or not to take the claim from another account in case there is a conflict. */
		overwrite?: boolean | null;
	}

	/** A batch entry encoding a single non-batch accounts request. */
	export interface AccountsCustomBatchRequestEntryFormProperties {

		/** The ID of the targeted account. Only defined if the method is not `insert`. */
		accountId: FormControl<string | null | undefined>,

		/** An entry ID, unique within the batch request. */
		batchId: FormControl<number | null | undefined>,

		/** Whether the account should be deleted if the account has offers. Only applicable if the method is `delete`. */
		force: FormControl<boolean | null | undefined>,

		/** The ID of the managing account. */
		merchantId: FormControl<string | null | undefined>,

		/** The method of the batch entry. Acceptable values are: - "`claimWebsite`" - "`delete`" - "`get`" - "`insert`" - "`link`" - "`update`" */
		method: FormControl<string | null | undefined>,

		/** Only applicable if the method is `claimwebsite`. Indicates whether or not to take the claim from another account in case there is a conflict. */
		overwrite: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountsCustomBatchRequestEntryFormGroup() {
		return new FormGroup<AccountsCustomBatchRequestEntryFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			batchId: new FormControl<number | null | undefined>(undefined),
			force: new FormControl<boolean | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			overwrite: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AccountsCustomBatchRequestEntryLinkRequest {

		/** Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`" */
		action?: string | null;

		/** Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" */
		linkType?: string | null;

		/** The ID of the linked account. */
		linkedAccountId?: string | null;
	}
	export interface AccountsCustomBatchRequestEntryLinkRequestFormProperties {

		/** Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`" */
		action: FormControl<string | null | undefined>,

		/** Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" */
		linkType: FormControl<string | null | undefined>,

		/** The ID of the linked account. */
		linkedAccountId: FormControl<string | null | undefined>,
	}
	export function CreateAccountsCustomBatchRequestEntryLinkRequestFormGroup() {
		return new FormGroup<AccountsCustomBatchRequestEntryLinkRequestFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			linkType: new FormControl<string | null | undefined>(undefined),
			linkedAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountsCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<AccountsCustomBatchResponseEntry>;

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountsCustomBatchResponse". */
		kind?: string | null;
	}
	export interface AccountsCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountsCustomBatchResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccountsCustomBatchResponseFormGroup() {
		return new FormGroup<AccountsCustomBatchResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A batch entry encoding a single non-batch accounts response. */
	export interface AccountsCustomBatchResponseEntry {

		/** Account data. After the creation of a new account it may take a few minutes before it is fully operational. The methods delete, insert, and update require the admin role. */
		account?: Account;

		/** The ID of the request entry this entry responds to. */
		batchId?: number | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountsCustomBatchResponseEntry`" */
		kind?: string | null;

		/** Deprecated. This field is never set. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" */
		linkStatus?: string | null;
	}

	/** A batch entry encoding a single non-batch accounts response. */
	export interface AccountsCustomBatchResponseEntryFormProperties {

		/** The ID of the request entry this entry responds to. */
		batchId: FormControl<number | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountsCustomBatchResponseEntry`" */
		kind: FormControl<string | null | undefined>,

		/** Deprecated. This field is never set. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" */
		linkStatus: FormControl<string | null | undefined>,
	}
	export function CreateAccountsCustomBatchResponseEntryFormGroup() {
		return new FormGroup<AccountsCustomBatchResponseEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			linkStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of errors returned by a failed batch entry. */
	export interface Errors {

		/** The HTTP status of the first error in `errors`. */
		code?: number | null;

		/** A list of errors. */
		errors?: Array<Error>;

		/** The message of the first error in `errors`. */
		message?: string | null;
	}

	/** A list of errors returned by a failed batch entry. */
	export interface ErrorsFormProperties {

		/** The HTTP status of the first error in `errors`. */
		code: FormControl<number | null | undefined>,

		/** The message of the first error in `errors`. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorsFormGroup() {
		return new FormGroup<ErrorsFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error returned by the API. */
	export interface Error {

		/** The domain of the error. */
		domain?: string | null;

		/** A description of the error. */
		message?: string | null;

		/** The error code. */
		reason?: string | null;
	}

	/** An error returned by the API. */
	export interface ErrorFormProperties {

		/** The domain of the error. */
		domain: FormControl<string | null | undefined>,

		/** A description of the error. */
		message: FormControl<string | null | undefined>,

		/** The error code. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountsLinkRequest {

		/** Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`" */
		action?: string | null;

		/** Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" */
		linkType?: string | null;

		/** The ID of the linked account. */
		linkedAccountId?: string | null;
	}
	export interface AccountsLinkRequestFormProperties {

		/** Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`" */
		action: FormControl<string | null | undefined>,

		/** Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" */
		linkType: FormControl<string | null | undefined>,

		/** The ID of the linked account. */
		linkedAccountId: FormControl<string | null | undefined>,
	}
	export function CreateAccountsLinkRequestFormGroup() {
		return new FormGroup<AccountsLinkRequestFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			linkType: new FormControl<string | null | undefined>(undefined),
			linkedAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountsLinkResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountsLinkResponse". */
		kind?: string | null;
	}
	export interface AccountsLinkResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountsLinkResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccountsLinkResponseFormGroup() {
		return new FormGroup<AccountsLinkResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountsListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of accounts. */
		nextPageToken?: string | null;
		resources?: Array<Account>;
	}
	export interface AccountsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token for the retrieval of the next page of accounts. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateAccountsListResponseFormGroup() {
		return new FormGroup<AccountsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountstatusesCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<AccountstatusesCustomBatchRequestEntry>;
	}
	export interface AccountstatusesCustomBatchRequestFormProperties {
	}
	export function CreateAccountstatusesCustomBatchRequestFormGroup() {
		return new FormGroup<AccountstatusesCustomBatchRequestFormProperties>({
		});

	}


	/** A batch entry encoding a single non-batch accountstatuses request. */
	export interface AccountstatusesCustomBatchRequestEntry {

		/** The ID of the (sub-)account whose status to get. */
		accountId?: string | null;

		/** An entry ID, unique within the batch request. */
		batchId?: number | null;

		/** If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination. */
		destinations?: Array<string>;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/** The method of the batch entry. Acceptable values are: - "`get`" */
		method?: string | null;
	}

	/** A batch entry encoding a single non-batch accountstatuses request. */
	export interface AccountstatusesCustomBatchRequestEntryFormProperties {

		/** The ID of the (sub-)account whose status to get. */
		accountId: FormControl<string | null | undefined>,

		/** An entry ID, unique within the batch request. */
		batchId: FormControl<number | null | undefined>,

		/** The ID of the managing account. */
		merchantId: FormControl<string | null | undefined>,

		/** The method of the batch entry. Acceptable values are: - "`get`" */
		method: FormControl<string | null | undefined>,
	}
	export function CreateAccountstatusesCustomBatchRequestEntryFormGroup() {
		return new FormGroup<AccountstatusesCustomBatchRequestEntryFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			batchId: new FormControl<number | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountstatusesCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<AccountstatusesCustomBatchResponseEntry>;

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountstatusesCustomBatchResponse". */
		kind?: string | null;
	}
	export interface AccountstatusesCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountstatusesCustomBatchResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccountstatusesCustomBatchResponseFormGroup() {
		return new FormGroup<AccountstatusesCustomBatchResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A batch entry encoding a single non-batch accountstatuses response. */
	export interface AccountstatusesCustomBatchResponseEntry {

		/** The status of an account, i.e., information about its products, which is computed offline and not returned immediately at insertion time. */
		accountStatus?: AccountStatus;

		/** The ID of the request entry this entry responds to. */
		batchId?: number | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors;
	}

	/** A batch entry encoding a single non-batch accountstatuses response. */
	export interface AccountstatusesCustomBatchResponseEntryFormProperties {

		/** The ID of the request entry this entry responds to. */
		batchId: FormControl<number | null | undefined>,
	}
	export function CreateAccountstatusesCustomBatchResponseEntryFormGroup() {
		return new FormGroup<AccountstatusesCustomBatchResponseEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AccountstatusesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountstatusesListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of account statuses. */
		nextPageToken?: string | null;
		resources?: Array<AccountStatus>;
	}
	export interface AccountstatusesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountstatusesListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token for the retrieval of the next page of account statuses. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateAccountstatusesListResponseFormGroup() {
		return new FormGroup<AccountstatusesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccounttaxCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<AccounttaxCustomBatchRequestEntry>;
	}
	export interface AccounttaxCustomBatchRequestFormProperties {
	}
	export function CreateAccounttaxCustomBatchRequestFormGroup() {
		return new FormGroup<AccounttaxCustomBatchRequestFormProperties>({
		});

	}


	/** A batch entry encoding a single non-batch accounttax request. */
	export interface AccounttaxCustomBatchRequestEntry {

		/** The ID of the account for which to get/update account tax settings. */
		accountId?: string | null;

		/** The tax settings of a merchant account. All methods require the admin role. */
		accountTax?: AccountTax;

		/** An entry ID, unique within the batch request. */
		batchId?: number | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/** The method of the batch entry. Acceptable values are: - "`get`" - "`update`" */
		method?: string | null;
	}

	/** A batch entry encoding a single non-batch accounttax request. */
	export interface AccounttaxCustomBatchRequestEntryFormProperties {

		/** The ID of the account for which to get/update account tax settings. */
		accountId: FormControl<string | null | undefined>,

		/** An entry ID, unique within the batch request. */
		batchId: FormControl<number | null | undefined>,

		/** The ID of the managing account. */
		merchantId: FormControl<string | null | undefined>,

		/** The method of the batch entry. Acceptable values are: - "`get`" - "`update`" */
		method: FormControl<string | null | undefined>,
	}
	export function CreateAccounttaxCustomBatchRequestEntryFormGroup() {
		return new FormGroup<AccounttaxCustomBatchRequestEntryFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			batchId: new FormControl<number | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccounttaxCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<AccounttaxCustomBatchResponseEntry>;

		/** Identifies what kind of resource this is. Value: the fixed string "content#accounttaxCustomBatchResponse". */
		kind?: string | null;
	}
	export interface AccounttaxCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#accounttaxCustomBatchResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccounttaxCustomBatchResponseFormGroup() {
		return new FormGroup<AccounttaxCustomBatchResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A batch entry encoding a single non-batch accounttax response. */
	export interface AccounttaxCustomBatchResponseEntry {

		/** The tax settings of a merchant account. All methods require the admin role. */
		accountTax?: AccountTax;

		/** The ID of the request entry this entry responds to. */
		batchId?: number | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accounttaxCustomBatchResponseEntry`" */
		kind?: string | null;
	}

	/** A batch entry encoding a single non-batch accounttax response. */
	export interface AccounttaxCustomBatchResponseEntryFormProperties {

		/** The ID of the request entry this entry responds to. */
		batchId: FormControl<number | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accounttaxCustomBatchResponseEntry`" */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccounttaxCustomBatchResponseEntryFormGroup() {
		return new FormGroup<AccounttaxCustomBatchResponseEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccounttaxListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#accounttaxListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of account tax settings. */
		nextPageToken?: string | null;
		resources?: Array<AccountTax>;
	}
	export interface AccounttaxListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#accounttaxListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token for the retrieval of the next page of account tax settings. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateAccounttaxListResponseFormGroup() {
		return new FormGroup<AccounttaxListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Address {

		/** Required. Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC"). */
		administrativeArea?: string | null;

		/** Required. City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs). */
		city?: string | null;

		/** Required. [CLDR country code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml)(e.g. "US"). */
		country?: string | null;

		/** Required. Postal code or ZIP (e.g. "94043"). Required. */
		postalCode?: string | null;

		/** Street-level part of the address. */
		streetAddress?: string | null;
	}
	export interface AddressFormProperties {

		/** Required. Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC"). */
		administrativeArea: FormControl<string | null | undefined>,

		/** Required. City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs). */
		city: FormControl<string | null | undefined>,

		/** Required. [CLDR country code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml)(e.g. "US"). */
		country: FormControl<string | null | undefined>,

		/** Required. Postal code or ZIP (e.g. "94043"). Required. */
		postalCode: FormControl<string | null | undefined>,

		/** Street-level part of the address. */
		streetAddress: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			administrativeArea: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			streetAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Amount {
		pretax?: Price;
		tax?: Price;
	}
	export interface AmountFormProperties {
	}
	export function CreateAmountFormGroup() {
		return new FormGroup<AmountFormProperties>({
		});

	}

	export interface Price {

		/** The currency of the price. */
		currency?: string | null;

		/** The price represented as a number. */
		value?: string | null;
	}
	export interface PriceFormProperties {

		/** The currency of the price. */
		currency: FormControl<string | null | undefined>,

		/** The price represented as a number. */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePriceFormGroup() {
		return new FormGroup<PriceFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BusinessDayConfig {

		/** Regular business days, such as '"monday"'. May not be empty. */
		businessDays?: Array<string>;
	}
	export interface BusinessDayConfigFormProperties {
	}
	export function CreateBusinessDayConfigFormGroup() {
		return new FormGroup<BusinessDayConfigFormProperties>({
		});

	}

	export interface CarrierRate {

		/** Carrier service, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved via the `getSupportedCarriers` method. Required. */
		carrierName?: string | null;

		/** Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved via the `getSupportedCarriers` method. Required. */
		carrierService?: string | null;
		flatAdjustment?: Price;

		/** Name of the carrier rate. Must be unique per rate group. Required. */
		name?: string | null;

		/** Shipping origin for this carrier rate. Required. */
		originPostalCode?: string | null;

		/** Multiplicative shipping rate modifier as a number in decimal notation. Can be negative. For example `"5.4"` increases the rate by 5.4%, `"-3"` decreases the rate by 3%. Optional. */
		percentageAdjustment?: string | null;
	}
	export interface CarrierRateFormProperties {

		/** Carrier service, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved via the `getSupportedCarriers` method. Required. */
		carrierName: FormControl<string | null | undefined>,

		/** Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved via the `getSupportedCarriers` method. Required. */
		carrierService: FormControl<string | null | undefined>,

		/** Name of the carrier rate. Must be unique per rate group. Required. */
		name: FormControl<string | null | undefined>,

		/** Shipping origin for this carrier rate. Required. */
		originPostalCode: FormControl<string | null | undefined>,

		/** Multiplicative shipping rate modifier as a number in decimal notation. Can be negative. For example `"5.4"` increases the rate by 5.4%, `"-3"` decreases the rate by 3%. Optional. */
		percentageAdjustment: FormControl<string | null | undefined>,
	}
	export function CreateCarrierRateFormGroup() {
		return new FormGroup<CarrierRateFormProperties>({
			carrierName: new FormControl<string | null | undefined>(undefined),
			carrierService: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			originPostalCode: new FormControl<string | null | undefined>(undefined),
			percentageAdjustment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CarriersCarrier {

		/** The CLDR country code of the carrier (e.g., "US"). Always present. */
		country?: string | null;

		/** A list of services supported for EDD (Estimated Delivery Date) calculation. This is the list of valid values for WarehouseBasedDeliveryTime.carrierService. */
		eddServices?: Array<string>;

		/** The name of the carrier (e.g., `"UPS"`). Always present. */
		name?: string | null;

		/** A list of supported services (e.g., `"ground"`) for that carrier. Contains at least one service. This is the list of valid values for CarrierRate.carrierService. */
		services?: Array<string>;
	}
	export interface CarriersCarrierFormProperties {

		/** The CLDR country code of the carrier (e.g., "US"). Always present. */
		country: FormControl<string | null | undefined>,

		/** The name of the carrier (e.g., `"UPS"`). Always present. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCarriersCarrierFormGroup() {
		return new FormGroup<CarriersCarrierFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomAttribute {

		/** The name of the attribute. Underscores will be replaced by spaces upon insertion. */
		name?: string | null;

		/** The type of the attribute. Acceptable values are: - "`boolean`" - "`datetimerange`" - "`float`" - "`group`" - "`int`" - "`price`" - "`text`" - "`time`" - "`url`" */
		type?: string | null;

		/** Free-form unit of the attribute. Unit can only be used for values of type int, float, or price. */
		unit?: string | null;

		/** The value of the attribute. */
		value?: string | null;
	}
	export interface CustomAttributeFormProperties {

		/** The name of the attribute. Underscores will be replaced by spaces upon insertion. */
		name: FormControl<string | null | undefined>,

		/** The type of the attribute. Acceptable values are: - "`boolean`" - "`datetimerange`" - "`float`" - "`group`" - "`int`" - "`price`" - "`text`" - "`time`" - "`url`" */
		type: FormControl<string | null | undefined>,

		/** Free-form unit of the attribute. Unit can only be used for values of type int, float, or price. */
		unit: FormControl<string | null | undefined>,

		/** The value of the attribute. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCustomAttributeFormGroup() {
		return new FormGroup<CustomAttributeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomGroup {

		/** The sub-attributes. */
		attributes?: Array<CustomAttribute>;

		/** The name of the group. Underscores will be replaced by spaces upon insertion. */
		name?: string | null;
	}
	export interface CustomGroupFormProperties {

		/** The name of the group. Underscores will be replaced by spaces upon insertion. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCustomGroupFormGroup() {
		return new FormGroup<CustomGroupFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerReturnReason {

		/** Description of the reason. */
		description?: string | null;

		/** Code of the return reason. Acceptable values are: - "`betterPriceFound`" - "`changedMind`" - "`damagedOrDefectiveItem`" - "`didNotMatchDescription`" - "`doesNotFit`" - "`expiredItem`" - "`incorrectItemReceived`" - "`noLongerNeeded`" - "`notSpecified`" - "`orderedWrongItem`" - "`other`" - "`qualityNotExpected`" - "`receivedTooLate`" - "`undeliverable`" */
		reasonCode?: string | null;
	}
	export interface CustomerReturnReasonFormProperties {

		/** Description of the reason. */
		description: FormControl<string | null | undefined>,

		/** Code of the return reason. Acceptable values are: - "`betterPriceFound`" - "`changedMind`" - "`damagedOrDefectiveItem`" - "`didNotMatchDescription`" - "`doesNotFit`" - "`expiredItem`" - "`incorrectItemReceived`" - "`noLongerNeeded`" - "`notSpecified`" - "`orderedWrongItem`" - "`other`" - "`qualityNotExpected`" - "`receivedTooLate`" - "`undeliverable`" */
		reasonCode: FormControl<string | null | undefined>,
	}
	export function CreateCustomerReturnReasonFormGroup() {
		return new FormGroup<CustomerReturnReasonFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			reasonCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CutoffTime {

		/** Hour of the cutoff time until which an order has to be placed to be processed in the same day. Required. */
		hour?: number | null;

		/** Minute of the cutoff time until which an order has to be placed to be processed in the same day. Required. */
		minute?: number | null;

		/** Timezone identifier for the cutoff time. A list of identifiers can be found in the AdWords API documentation. E.g. "Europe/Zurich". Required. */
		timezone?: string | null;
	}
	export interface CutoffTimeFormProperties {

		/** Hour of the cutoff time until which an order has to be placed to be processed in the same day. Required. */
		hour: FormControl<number | null | undefined>,

		/** Minute of the cutoff time until which an order has to be placed to be processed in the same day. Required. */
		minute: FormControl<number | null | undefined>,

		/** Timezone identifier for the cutoff time. A list of identifiers can be found in the AdWords API documentation. E.g. "Europe/Zurich". Required. */
		timezone: FormControl<string | null | undefined>,
	}
	export function CreateCutoffTimeFormGroup() {
		return new FormGroup<CutoffTimeFormProperties>({
			hour: new FormControl<number | null | undefined>(undefined),
			minute: new FormControl<number | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Datafeed configuration data. */
	export interface Datafeed {

		/** The two-letter ISO 639-1 language in which the attributes are defined in the data feed. */
		attributeLanguage?: string | null;

		/** [DEPRECATED] Please use targets[].language instead. The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targetCountry`. */
		contentLanguage?: string | null;

		/** Required. The type of data feed. For product inventory feeds, only feeds for local stores, not online stores, are supported. Acceptable values are: - "`local products`" - "`product inventory`" - "`products`" */
		contentType?: string | null;

		/** The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required. */
		fetchSchedule?: DatafeedFetchSchedule;

		/** Required. The filename of the feed. All feeds must have a unique file name. */
		fileName?: string | null;
		format?: DatafeedFormat;

		/** Required for update. The ID of the data feed. */
		id?: string | null;

		/** [DEPRECATED] Please use targets[].includedDestinations instead. The list of intended destinations (corresponds to checked check boxes in Merchant Center). */
		intendedDestinations?: Array<string>;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#datafeed`" */
		kind?: string | null;

		/** Required for insert. A descriptive name of the data feed. */
		name?: string | null;

		/** [DEPRECATED] Please use targets[].country instead. The country where the items in the feed will be included in the search index, represented as a CLDR territory code. */
		targetCountry?: string | null;

		/** The targets this feed should apply to (country, language, destinations). */
		targets?: Array<DatafeedTarget>;
	}

	/** Datafeed configuration data. */
	export interface DatafeedFormProperties {

		/** The two-letter ISO 639-1 language in which the attributes are defined in the data feed. */
		attributeLanguage: FormControl<string | null | undefined>,

		/** [DEPRECATED] Please use targets[].language instead. The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targetCountry`. */
		contentLanguage: FormControl<string | null | undefined>,

		/** Required. The type of data feed. For product inventory feeds, only feeds for local stores, not online stores, are supported. Acceptable values are: - "`local products`" - "`product inventory`" - "`products`" */
		contentType: FormControl<string | null | undefined>,

		/** Required. The filename of the feed. All feeds must have a unique file name. */
		fileName: FormControl<string | null | undefined>,

		/** Required for update. The ID of the data feed. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#datafeed`" */
		kind: FormControl<string | null | undefined>,

		/** Required for insert. A descriptive name of the data feed. */
		name: FormControl<string | null | undefined>,

		/** [DEPRECATED] Please use targets[].country instead. The country where the items in the feed will be included in the search index, represented as a CLDR territory code. */
		targetCountry: FormControl<string | null | undefined>,
	}
	export function CreateDatafeedFormGroup() {
		return new FormGroup<DatafeedFormProperties>({
			attributeLanguage: new FormControl<string | null | undefined>(undefined),
			contentLanguage: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			fileName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			targetCountry: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required. */
	export interface DatafeedFetchSchedule {

		/** The day of the month the feed file should be fetched (1-31). */
		dayOfMonth?: number | null;

		/** The URL where the feed file can be fetched. Google Merchant Center will support automatic scheduled uploads using the HTTP, HTTPS, FTP, or SFTP protocols, so the value will need to be a valid link using one of those four protocols. */
		fetchUrl?: string | null;

		/** The hour of the day the feed file should be fetched (0-23). */
		hour?: number | null;

		/** The minute of the hour the feed file should be fetched (0-59). Read-only. */
		minuteOfHour?: number | null;

		/** An optional password for fetch_url. */
		password?: string | null;

		/** Whether the scheduled fetch is paused or not. */
		paused?: boolean | null;

		/** Time zone used for schedule. UTC by default. E.g., "America/Los_Angeles". */
		timeZone?: string | null;

		/** An optional user name for fetch_url. */
		username?: string | null;

		/** The day of the week the feed file should be fetched. Acceptable values are: - "`monday`" - "`tuesday`" - "`wednesday`" - "`thursday`" - "`friday`" - "`saturday`" - "`sunday`" */
		weekday?: string | null;
	}

	/** The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required. */
	export interface DatafeedFetchScheduleFormProperties {

		/** The day of the month the feed file should be fetched (1-31). */
		dayOfMonth: FormControl<number | null | undefined>,

		/** The URL where the feed file can be fetched. Google Merchant Center will support automatic scheduled uploads using the HTTP, HTTPS, FTP, or SFTP protocols, so the value will need to be a valid link using one of those four protocols. */
		fetchUrl: FormControl<string | null | undefined>,

		/** The hour of the day the feed file should be fetched (0-23). */
		hour: FormControl<number | null | undefined>,

		/** The minute of the hour the feed file should be fetched (0-59). Read-only. */
		minuteOfHour: FormControl<number | null | undefined>,

		/** An optional password for fetch_url. */
		password: FormControl<string | null | undefined>,

		/** Whether the scheduled fetch is paused or not. */
		paused: FormControl<boolean | null | undefined>,

		/** Time zone used for schedule. UTC by default. E.g., "America/Los_Angeles". */
		timeZone: FormControl<string | null | undefined>,

		/** An optional user name for fetch_url. */
		username: FormControl<string | null | undefined>,

		/** The day of the week the feed file should be fetched. Acceptable values are: - "`monday`" - "`tuesday`" - "`wednesday`" - "`thursday`" - "`friday`" - "`saturday`" - "`sunday`" */
		weekday: FormControl<string | null | undefined>,
	}
	export function CreateDatafeedFetchScheduleFormGroup() {
		return new FormGroup<DatafeedFetchScheduleFormProperties>({
			dayOfMonth: new FormControl<number | null | undefined>(undefined),
			fetchUrl: new FormControl<string | null | undefined>(undefined),
			hour: new FormControl<number | null | undefined>(undefined),
			minuteOfHour: new FormControl<number | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			paused: new FormControl<boolean | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			weekday: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatafeedFormat {

		/** Delimiter for the separation of values in a delimiter-separated values feed. If not specified, the delimiter will be auto-detected. Ignored for non-DSV data feeds. Acceptable values are: - "`pipe`" - "`tab`" - "`tilde`" */
		columnDelimiter?: string | null;

		/** Character encoding scheme of the data feed. If not specified, the encoding will be auto-detected. Acceptable values are: - "`latin-1`" - "`utf-16be`" - "`utf-16le`" - "`utf-8`" - "`windows-1252`" */
		fileEncoding?: string | null;

		/** Specifies how double quotes are interpreted. If not specified, the mode will be auto-detected. Ignored for non-DSV data feeds. Acceptable values are: - "`normal character`" - "`value quoting`" */
		quotingMode?: string | null;
	}
	export interface DatafeedFormatFormProperties {

		/** Delimiter for the separation of values in a delimiter-separated values feed. If not specified, the delimiter will be auto-detected. Ignored for non-DSV data feeds. Acceptable values are: - "`pipe`" - "`tab`" - "`tilde`" */
		columnDelimiter: FormControl<string | null | undefined>,

		/** Character encoding scheme of the data feed. If not specified, the encoding will be auto-detected. Acceptable values are: - "`latin-1`" - "`utf-16be`" - "`utf-16le`" - "`utf-8`" - "`windows-1252`" */
		fileEncoding: FormControl<string | null | undefined>,

		/** Specifies how double quotes are interpreted. If not specified, the mode will be auto-detected. Ignored for non-DSV data feeds. Acceptable values are: - "`normal character`" - "`value quoting`" */
		quotingMode: FormControl<string | null | undefined>,
	}
	export function CreateDatafeedFormatFormGroup() {
		return new FormGroup<DatafeedFormatFormProperties>({
			columnDelimiter: new FormControl<string | null | undefined>(undefined),
			fileEncoding: new FormControl<string | null | undefined>(undefined),
			quotingMode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatafeedTarget {

		/** The country where the items in the feed will be included in the search index, represented as a CLDR territory code. */
		country?: string | null;

		/** The list of destinations to exclude for this target (corresponds to unchecked check boxes in Merchant Center). */
		excludedDestinations?: Array<string>;

		/** The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`. List of supported destinations (if available to the account): - DisplayAds - Shopping - ShoppingActions - SurfacesAcrossGoogle */
		includedDestinations?: Array<string>;

		/** The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targets[].country`. */
		language?: string | null;
	}
	export interface DatafeedTargetFormProperties {

		/** The country where the items in the feed will be included in the search index, represented as a CLDR territory code. */
		country: FormControl<string | null | undefined>,

		/** The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targets[].country`. */
		language: FormControl<string | null | undefined>,
	}
	export function CreateDatafeedTargetFormGroup() {
		return new FormGroup<DatafeedTargetFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of a datafeed, i.e., the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished. */
	export interface DatafeedStatus {

		/** The country for which the status is reported, represented as a CLDR territory code. */
		country?: string | null;

		/** The ID of the feed for which the status is reported. */
		datafeedId?: string | null;

		/** The list of errors occurring in the feed. */
		errors?: Array<DatafeedStatusError>;

		/** The number of items in the feed that were processed. */
		itemsTotal?: string | null;

		/** The number of items in the feed that were valid. */
		itemsValid?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#datafeedStatus`" */
		kind?: string | null;

		/** The two-letter ISO 639-1 language for which the status is reported. */
		language?: string | null;

		/** The last date at which the feed was uploaded. */
		lastUploadDate?: string | null;

		/** The processing status of the feed. Acceptable values are: - "`"`failure`": The feed could not be processed or all items had errors.`" - "`in progress`": The feed is being processed. - "`none`": The feed has not yet been processed. For example, a feed that has never been uploaded will have this processing status. - "`success`": The feed was processed successfully, though some items might have had errors. */
		processingStatus?: string | null;

		/** The list of errors occurring in the feed. */
		warnings?: Array<DatafeedStatusError>;
	}

	/** The status of a datafeed, i.e., the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished. */
	export interface DatafeedStatusFormProperties {

		/** The country for which the status is reported, represented as a CLDR territory code. */
		country: FormControl<string | null | undefined>,

		/** The ID of the feed for which the status is reported. */
		datafeedId: FormControl<string | null | undefined>,

		/** The number of items in the feed that were processed. */
		itemsTotal: FormControl<string | null | undefined>,

		/** The number of items in the feed that were valid. */
		itemsValid: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#datafeedStatus`" */
		kind: FormControl<string | null | undefined>,

		/** The two-letter ISO 639-1 language for which the status is reported. */
		language: FormControl<string | null | undefined>,

		/** The last date at which the feed was uploaded. */
		lastUploadDate: FormControl<string | null | undefined>,

		/** The processing status of the feed. Acceptable values are: - "`"`failure`": The feed could not be processed or all items had errors.`" - "`in progress`": The feed is being processed. - "`none`": The feed has not yet been processed. For example, a feed that has never been uploaded will have this processing status. - "`success`": The feed was processed successfully, though some items might have had errors. */
		processingStatus: FormControl<string | null | undefined>,
	}
	export function CreateDatafeedStatusFormGroup() {
		return new FormGroup<DatafeedStatusFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			datafeedId: new FormControl<string | null | undefined>(undefined),
			itemsTotal: new FormControl<string | null | undefined>(undefined),
			itemsValid: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			lastUploadDate: new FormControl<string | null | undefined>(undefined),
			processingStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error occurring in the feed, like "invalid price". */
	export interface DatafeedStatusError {

		/** The code of the error, e.g., "validation/invalid_value". */
		code?: string | null;

		/** The number of occurrences of the error in the feed. */
		count?: string | null;

		/** A list of example occurrences of the error, grouped by product. */
		examples?: Array<DatafeedStatusExample>;

		/** The error message, e.g., "Invalid price". */
		message?: string | null;
	}

	/** An error occurring in the feed, like "invalid price". */
	export interface DatafeedStatusErrorFormProperties {

		/** The code of the error, e.g., "validation/invalid_value". */
		code: FormControl<string | null | undefined>,

		/** The number of occurrences of the error in the feed. */
		count: FormControl<string | null | undefined>,

		/** The error message, e.g., "Invalid price". */
		message: FormControl<string | null | undefined>,
	}
	export function CreateDatafeedStatusErrorFormGroup() {
		return new FormGroup<DatafeedStatusErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An example occurrence for a particular error. */
	export interface DatafeedStatusExample {

		/** The ID of the example item. */
		itemId?: string | null;

		/** Line number in the data feed where the example is found. */
		lineNumber?: string | null;

		/** The problematic value. */
		value?: string | null;
	}

	/** An example occurrence for a particular error. */
	export interface DatafeedStatusExampleFormProperties {

		/** The ID of the example item. */
		itemId: FormControl<string | null | undefined>,

		/** Line number in the data feed where the example is found. */
		lineNumber: FormControl<string | null | undefined>,

		/** The problematic value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDatafeedStatusExampleFormGroup() {
		return new FormGroup<DatafeedStatusExampleFormProperties>({
			itemId: new FormControl<string | null | undefined>(undefined),
			lineNumber: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatafeedsCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<DatafeedsCustomBatchRequestEntry>;
	}
	export interface DatafeedsCustomBatchRequestFormProperties {
	}
	export function CreateDatafeedsCustomBatchRequestFormGroup() {
		return new FormGroup<DatafeedsCustomBatchRequestFormProperties>({
		});

	}


	/** A batch entry encoding a single non-batch datafeeds request. */
	export interface DatafeedsCustomBatchRequestEntry {

		/** An entry ID, unique within the batch request. */
		batchId?: number | null;

		/** Datafeed configuration data. */
		datafeed?: Datafeed;

		/** The ID of the data feed to get, delete or fetch. */
		datafeedId?: string | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/** The method of the batch entry. Acceptable values are: - "`delete`" - "`fetchNow`" - "`get`" - "`insert`" - "`update`" */
		method?: string | null;
	}

	/** A batch entry encoding a single non-batch datafeeds request. */
	export interface DatafeedsCustomBatchRequestEntryFormProperties {

		/** An entry ID, unique within the batch request. */
		batchId: FormControl<number | null | undefined>,

		/** The ID of the data feed to get, delete or fetch. */
		datafeedId: FormControl<string | null | undefined>,

		/** The ID of the managing account. */
		merchantId: FormControl<string | null | undefined>,

		/** The method of the batch entry. Acceptable values are: - "`delete`" - "`fetchNow`" - "`get`" - "`insert`" - "`update`" */
		method: FormControl<string | null | undefined>,
	}
	export function CreateDatafeedsCustomBatchRequestEntryFormGroup() {
		return new FormGroup<DatafeedsCustomBatchRequestEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			datafeedId: new FormControl<string | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatafeedsCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<DatafeedsCustomBatchResponseEntry>;

		/** Identifies what kind of resource this is. Value: the fixed string "content#datafeedsCustomBatchResponse". */
		kind?: string | null;
	}
	export interface DatafeedsCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#datafeedsCustomBatchResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDatafeedsCustomBatchResponseFormGroup() {
		return new FormGroup<DatafeedsCustomBatchResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A batch entry encoding a single non-batch datafeeds response. */
	export interface DatafeedsCustomBatchResponseEntry {

		/** The ID of the request entry this entry responds to. */
		batchId?: number | null;

		/** Datafeed configuration data. */
		datafeed?: Datafeed;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors;
	}

	/** A batch entry encoding a single non-batch datafeeds response. */
	export interface DatafeedsCustomBatchResponseEntryFormProperties {

		/** The ID of the request entry this entry responds to. */
		batchId: FormControl<number | null | undefined>,
	}
	export function CreateDatafeedsCustomBatchResponseEntryFormGroup() {
		return new FormGroup<DatafeedsCustomBatchResponseEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DatafeedsFetchNowResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#datafeedsFetchNowResponse". */
		kind?: string | null;
	}
	export interface DatafeedsFetchNowResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#datafeedsFetchNowResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDatafeedsFetchNowResponseFormGroup() {
		return new FormGroup<DatafeedsFetchNowResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatafeedsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#datafeedsListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of datafeeds. */
		nextPageToken?: string | null;
		resources?: Array<Datafeed>;
	}
	export interface DatafeedsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#datafeedsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token for the retrieval of the next page of datafeeds. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateDatafeedsListResponseFormGroup() {
		return new FormGroup<DatafeedsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatafeedstatusesCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<DatafeedstatusesCustomBatchRequestEntry>;
	}
	export interface DatafeedstatusesCustomBatchRequestFormProperties {
	}
	export function CreateDatafeedstatusesCustomBatchRequestFormGroup() {
		return new FormGroup<DatafeedstatusesCustomBatchRequestFormProperties>({
		});

	}


	/** A batch entry encoding a single non-batch datafeedstatuses request. */
	export interface DatafeedstatusesCustomBatchRequestEntry {

		/** An entry ID, unique within the batch request. */
		batchId?: number | null;

		/** The country for which to get the datafeed status. If this parameter is provided then language must also be provided. Note that for multi-target datafeeds this parameter is required. */
		country?: string | null;

		/** The ID of the data feed to get. */
		datafeedId?: string | null;

		/** The language for which to get the datafeed status. If this parameter is provided then country must also be provided. Note that for multi-target datafeeds this parameter is required. */
		language?: string | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/** The method of the batch entry. Acceptable values are: - "`get`" */
		method?: string | null;
	}

	/** A batch entry encoding a single non-batch datafeedstatuses request. */
	export interface DatafeedstatusesCustomBatchRequestEntryFormProperties {

		/** An entry ID, unique within the batch request. */
		batchId: FormControl<number | null | undefined>,

		/** The country for which to get the datafeed status. If this parameter is provided then language must also be provided. Note that for multi-target datafeeds this parameter is required. */
		country: FormControl<string | null | undefined>,

		/** The ID of the data feed to get. */
		datafeedId: FormControl<string | null | undefined>,

		/** The language for which to get the datafeed status. If this parameter is provided then country must also be provided. Note that for multi-target datafeeds this parameter is required. */
		language: FormControl<string | null | undefined>,

		/** The ID of the managing account. */
		merchantId: FormControl<string | null | undefined>,

		/** The method of the batch entry. Acceptable values are: - "`get`" */
		method: FormControl<string | null | undefined>,
	}
	export function CreateDatafeedstatusesCustomBatchRequestEntryFormGroup() {
		return new FormGroup<DatafeedstatusesCustomBatchRequestEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			datafeedId: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatafeedstatusesCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<DatafeedstatusesCustomBatchResponseEntry>;

		/** Identifies what kind of resource this is. Value: the fixed string "content#datafeedstatusesCustomBatchResponse". */
		kind?: string | null;
	}
	export interface DatafeedstatusesCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#datafeedstatusesCustomBatchResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDatafeedstatusesCustomBatchResponseFormGroup() {
		return new FormGroup<DatafeedstatusesCustomBatchResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A batch entry encoding a single non-batch datafeedstatuses response. */
	export interface DatafeedstatusesCustomBatchResponseEntry {

		/** The ID of the request entry this entry responds to. */
		batchId?: number | null;

		/** The status of a datafeed, i.e., the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished. */
		datafeedStatus?: DatafeedStatus;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors;
	}

	/** A batch entry encoding a single non-batch datafeedstatuses response. */
	export interface DatafeedstatusesCustomBatchResponseEntryFormProperties {

		/** The ID of the request entry this entry responds to. */
		batchId: FormControl<number | null | undefined>,
	}
	export function CreateDatafeedstatusesCustomBatchResponseEntryFormGroup() {
		return new FormGroup<DatafeedstatusesCustomBatchResponseEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DatafeedstatusesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#datafeedstatusesListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of datafeed statuses. */
		nextPageToken?: string | null;
		resources?: Array<DatafeedStatus>;
	}
	export interface DatafeedstatusesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#datafeedstatusesListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token for the retrieval of the next page of datafeed statuses. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateDatafeedstatusesListResponseFormGroup() {
		return new FormGroup<DatafeedstatusesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeliveryTime {
		cutoffTime?: CutoffTime;
		handlingBusinessDayConfig?: BusinessDayConfig;

		/** Holiday cutoff definitions. If configured, they specify order cutoff times for holiday-specific shipping. */
		holidayCutoffs?: Array<HolidayCutoff>;

		/** Maximum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. Must be greater than or equal to `minHandlingTimeInDays`. */
		maxHandlingTimeInDays?: number | null;

		/** Maximum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Must be greater than or equal to `minTransitTimeInDays`. */
		maxTransitTimeInDays?: number | null;

		/** Minimum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. */
		minHandlingTimeInDays?: number | null;

		/** Minimum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Either `{min,max}TransitTimeInDays` or `transitTimeTable` must be set, but not both. */
		minTransitTimeInDays?: number | null;
		transitBusinessDayConfig?: BusinessDayConfig;
		transitTimeTable?: TransitTable;

		/** Indicates that the delivery time should be calculated per warehouse (shipping origin location) based on the settings of the selected carrier. When set, no other transit time related field in DeliveryTime should be set. */
		warehouseBasedDeliveryTimes?: Array<WarehouseBasedDeliveryTime>;
	}
	export interface DeliveryTimeFormProperties {

		/** Maximum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. Must be greater than or equal to `minHandlingTimeInDays`. */
		maxHandlingTimeInDays: FormControl<number | null | undefined>,

		/** Maximum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Must be greater than or equal to `minTransitTimeInDays`. */
		maxTransitTimeInDays: FormControl<number | null | undefined>,

		/** Minimum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. */
		minHandlingTimeInDays: FormControl<number | null | undefined>,

		/** Minimum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Either `{min,max}TransitTimeInDays` or `transitTimeTable` must be set, but not both. */
		minTransitTimeInDays: FormControl<number | null | undefined>,
	}
	export function CreateDeliveryTimeFormGroup() {
		return new FormGroup<DeliveryTimeFormProperties>({
			maxHandlingTimeInDays: new FormControl<number | null | undefined>(undefined),
			maxTransitTimeInDays: new FormControl<number | null | undefined>(undefined),
			minHandlingTimeInDays: new FormControl<number | null | undefined>(undefined),
			minTransitTimeInDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface HolidayCutoff {

		/** Date of the order deadline, in ISO 8601 format. E.g. "2016-11-29" for 29th November 2016. Required. */
		deadlineDate?: string | null;

		/** Hour of the day on the deadline date until which the order has to be placed to qualify for the delivery guarantee. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Required. */
		deadlineHour?: number | null;

		/** Timezone identifier for the deadline hour. A list of identifiers can be found in the AdWords API documentation. E.g. "Europe/Zurich". Required. */
		deadlineTimezone?: string | null;

		/** Unique identifier for the holiday. Required. */
		holidayId?: string | null;

		/** Date on which the deadline will become visible to consumers in ISO 8601 format. E.g. "2016-10-31" for 31st October 2016. Required. */
		visibleFromDate?: string | null;
	}
	export interface HolidayCutoffFormProperties {

		/** Date of the order deadline, in ISO 8601 format. E.g. "2016-11-29" for 29th November 2016. Required. */
		deadlineDate: FormControl<string | null | undefined>,

		/** Hour of the day on the deadline date until which the order has to be placed to qualify for the delivery guarantee. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Required. */
		deadlineHour: FormControl<number | null | undefined>,

		/** Timezone identifier for the deadline hour. A list of identifiers can be found in the AdWords API documentation. E.g. "Europe/Zurich". Required. */
		deadlineTimezone: FormControl<string | null | undefined>,

		/** Unique identifier for the holiday. Required. */
		holidayId: FormControl<string | null | undefined>,

		/** Date on which the deadline will become visible to consumers in ISO 8601 format. E.g. "2016-10-31" for 31st October 2016. Required. */
		visibleFromDate: FormControl<string | null | undefined>,
	}
	export function CreateHolidayCutoffFormGroup() {
		return new FormGroup<HolidayCutoffFormProperties>({
			deadlineDate: new FormControl<string | null | undefined>(undefined),
			deadlineHour: new FormControl<number | null | undefined>(undefined),
			deadlineTimezone: new FormControl<string | null | undefined>(undefined),
			holidayId: new FormControl<string | null | undefined>(undefined),
			visibleFromDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TransitTable {

		/** A list of postal group names. The last value can be `"all other locations"`. Example: `["zone 1", "zone 2", "all other locations"]`. The referred postal code groups must match the delivery country of the service. */
		postalCodeGroupNames?: Array<string>;
		rows?: Array<TransitTableTransitTimeRow>;

		/** A list of transit time labels. The last value can be `"all other labels"`. Example: `["food", "electronics", "all other labels"]`. */
		transitTimeLabels?: Array<string>;
	}
	export interface TransitTableFormProperties {
	}
	export function CreateTransitTableFormGroup() {
		return new FormGroup<TransitTableFormProperties>({
		});

	}

	export interface TransitTableTransitTimeRow {
		values?: Array<TransitTableTransitTimeRowTransitTimeValue>;
	}
	export interface TransitTableTransitTimeRowFormProperties {
	}
	export function CreateTransitTableTransitTimeRowFormGroup() {
		return new FormGroup<TransitTableTransitTimeRowFormProperties>({
		});

	}

	export interface TransitTableTransitTimeRowTransitTimeValue {

		/** Must be greater than or equal to `minTransitTimeInDays`. */
		maxTransitTimeInDays?: number | null;

		/** Transit time range (min-max) in business days. 0 means same day delivery, 1 means next day delivery. */
		minTransitTimeInDays?: number | null;
	}
	export interface TransitTableTransitTimeRowTransitTimeValueFormProperties {

		/** Must be greater than or equal to `minTransitTimeInDays`. */
		maxTransitTimeInDays: FormControl<number | null | undefined>,

		/** Transit time range (min-max) in business days. 0 means same day delivery, 1 means next day delivery. */
		minTransitTimeInDays: FormControl<number | null | undefined>,
	}
	export function CreateTransitTableTransitTimeRowTransitTimeValueFormGroup() {
		return new FormGroup<TransitTableTransitTimeRowTransitTimeValueFormProperties>({
			maxTransitTimeInDays: new FormControl<number | null | undefined>(undefined),
			minTransitTimeInDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface WarehouseBasedDeliveryTime {

		/** Required. Carrier, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved via the `listSupportedCarriers` method. */
		carrier?: string | null;

		/** Required. Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved via the `listSupportedCarriers` method. The name of the service must be in the eddSupportedServices list. */
		carrierService?: string | null;

		/** Shipping origin's state. */
		originAdministrativeArea?: string | null;

		/** Shipping origin's city. */
		originCity?: string | null;

		/** Shipping origin's country represented as a [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml). */
		originCountry?: string | null;

		/** Shipping origin. */
		originPostalCode?: string | null;

		/** Shipping origin's street address */
		originStreetAddress?: string | null;

		/** The name of the warehouse. Warehouse name need to be matched with name. If warehouseName is set, the below fields will be ignored. The warehouse info will be read from warehouse. */
		warehouseName?: string | null;
	}
	export interface WarehouseBasedDeliveryTimeFormProperties {

		/** Required. Carrier, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved via the `listSupportedCarriers` method. */
		carrier: FormControl<string | null | undefined>,

		/** Required. Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved via the `listSupportedCarriers` method. The name of the service must be in the eddSupportedServices list. */
		carrierService: FormControl<string | null | undefined>,

		/** Shipping origin's state. */
		originAdministrativeArea: FormControl<string | null | undefined>,

		/** Shipping origin's city. */
		originCity: FormControl<string | null | undefined>,

		/** Shipping origin's country represented as a [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml). */
		originCountry: FormControl<string | null | undefined>,

		/** Shipping origin. */
		originPostalCode: FormControl<string | null | undefined>,

		/** Shipping origin's street address */
		originStreetAddress: FormControl<string | null | undefined>,

		/** The name of the warehouse. Warehouse name need to be matched with name. If warehouseName is set, the below fields will be ignored. The warehouse info will be read from warehouse. */
		warehouseName: FormControl<string | null | undefined>,
	}
	export function CreateWarehouseBasedDeliveryTimeFormGroup() {
		return new FormGroup<WarehouseBasedDeliveryTimeFormProperties>({
			carrier: new FormControl<string | null | undefined>(undefined),
			carrierService: new FormControl<string | null | undefined>(undefined),
			originAdministrativeArea: new FormControl<string | null | undefined>(undefined),
			originCity: new FormControl<string | null | undefined>(undefined),
			originCountry: new FormControl<string | null | undefined>(undefined),
			originPostalCode: new FormControl<string | null | undefined>(undefined),
			originStreetAddress: new FormControl<string | null | undefined>(undefined),
			warehouseName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GmbAccounts {

		/** The ID of the Merchant Center account. */
		accountId?: string | null;

		/** A list of GMB accounts which are available to the merchant. */
		gmbAccounts?: Array<GmbAccountsGmbAccount>;
	}
	export interface GmbAccountsFormProperties {

		/** The ID of the Merchant Center account. */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateGmbAccountsFormGroup() {
		return new FormGroup<GmbAccountsFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GmbAccountsGmbAccount {

		/** The email which identifies the GMB account. */
		email?: string | null;

		/** Number of listings under this account. */
		listingCount?: string | null;

		/** The name of the GMB account. */
		name?: string | null;

		/** The type of the GMB account (User or Business). */
		type?: string | null;
	}
	export interface GmbAccountsGmbAccountFormProperties {

		/** The email which identifies the GMB account. */
		email: FormControl<string | null | undefined>,

		/** Number of listings under this account. */
		listingCount: FormControl<string | null | undefined>,

		/** The name of the GMB account. */
		name: FormControl<string | null | undefined>,

		/** The type of the GMB account (User or Business). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGmbAccountsGmbAccountFormGroup() {
		return new FormGroup<GmbAccountsGmbAccountFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			listingCount: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set. */
	export interface Headers {

		/** A list of location ID sets. Must be non-empty. Can only be set if all other fields are not set. */
		locations?: Array<LocationIdSet>;

		/** A list of inclusive number of items upper bounds. The last value can be `"infinity"`. For example `["10", "50", "infinity"]` represents the headers "<= 10 items", "<= 50 items", and "> 50 items". Must be non-empty. Can only be set if all other fields are not set. */
		numberOfItems?: Array<string>;

		/** A list of postal group names. The last value can be `"all other locations"`. Example: `["zone 1", "zone 2", "all other locations"]`. The referred postal code groups must match the delivery country of the service. Must be non-empty. Can only be set if all other fields are not set. */
		postalCodeGroupNames?: Array<string>;

		/** A list of inclusive order price upper bounds. The last price's value can be `"infinity"`. For example `[{"value": "10", "currency": "USD"}, {"value": "500", "currency": "USD"}, {"value": "infinity", "currency": "USD"}]` represents the headers "<= $10", "<= $500", and "> $500". All prices within a service must have the same currency. Must be non-empty. Can only be set if all other fields are not set. */
		prices?: Array<Price>;

		/** A list of inclusive order weight upper bounds. The last weight's value can be `"infinity"`. For example `[{"value": "10", "unit": "kg"}, {"value": "50", "unit": "kg"}, {"value": "infinity", "unit": "kg"}]` represents the headers "<= 10kg", "<= 50kg", and "> 50kg". All weights within a service must have the same unit. Must be non-empty. Can only be set if all other fields are not set. */
		weights?: Array<Weight>;
	}

	/** A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set. */
	export interface HeadersFormProperties {
	}
	export function CreateHeadersFormGroup() {
		return new FormGroup<HeadersFormProperties>({
		});

	}

	export interface LocationIdSet {

		/** A non-empty list of location IDs. They must all be of the same location type (e.g., state). */
		locationIds?: Array<string>;
	}
	export interface LocationIdSetFormProperties {
	}
	export function CreateLocationIdSetFormGroup() {
		return new FormGroup<LocationIdSetFormProperties>({
		});

	}

	export interface Weight {

		/** Required. The weight unit. Acceptable values are: - "`kg`" - "`lb`" */
		unit?: string | null;

		/** Required. The weight represented as a number. The weight can have a maximum precision of four decimal places. */
		value?: string | null;
	}
	export interface WeightFormProperties {

		/** Required. The weight unit. Acceptable values are: - "`kg`" - "`lb`" */
		unit: FormControl<string | null | undefined>,

		/** Required. The weight represented as a number. The weight can have a maximum precision of four decimal places. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateWeightFormGroup() {
		return new FormGroup<WeightFormProperties>({
			unit: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HolidaysHoliday {

		/** The CLDR territory code of the country in which the holiday is available. E.g. "US", "DE", "GB". A holiday cutoff can only be configured in a shipping settings service with matching delivery country. Always present. */
		countryCode?: string | null;

		/** Date of the holiday, in ISO 8601 format. E.g. "2016-12-25" for Christmas 2016. Always present. */
		date?: string | null;

		/** Date on which the order has to arrive at the customer's, in ISO 8601 format. E.g. "2016-12-24" for 24th December 2016. Always present. */
		deliveryGuaranteeDate?: string | null;

		/** Hour of the day in the delivery location's timezone on the guaranteed delivery date by which the order has to arrive at the customer's. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Always present. */
		deliveryGuaranteeHour?: string | null;

		/** Unique identifier for the holiday to be used when configuring holiday cutoffs. Always present. */
		id?: string | null;

		/** The holiday type. Always present. Acceptable values are: - "`Christmas`" - "`Easter`" - "`Father's Day`" - "`Halloween`" - "`Independence Day (USA)`" - "`Mother's Day`" - "`Thanksgiving`" - "`Valentine's Day`" */
		type?: string | null;
	}
	export interface HolidaysHolidayFormProperties {

		/** The CLDR territory code of the country in which the holiday is available. E.g. "US", "DE", "GB". A holiday cutoff can only be configured in a shipping settings service with matching delivery country. Always present. */
		countryCode: FormControl<string | null | undefined>,

		/** Date of the holiday, in ISO 8601 format. E.g. "2016-12-25" for Christmas 2016. Always present. */
		date: FormControl<string | null | undefined>,

		/** Date on which the order has to arrive at the customer's, in ISO 8601 format. E.g. "2016-12-24" for 24th December 2016. Always present. */
		deliveryGuaranteeDate: FormControl<string | null | undefined>,

		/** Hour of the day in the delivery location's timezone on the guaranteed delivery date by which the order has to arrive at the customer's. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Always present. */
		deliveryGuaranteeHour: FormControl<string | null | undefined>,

		/** Unique identifier for the holiday to be used when configuring holiday cutoffs. Always present. */
		id: FormControl<string | null | undefined>,

		/** The holiday type. Always present. Acceptable values are: - "`Christmas`" - "`Easter`" - "`Father's Day`" - "`Halloween`" - "`Independence Day (USA)`" - "`Mother's Day`" - "`Thanksgiving`" - "`Valentine's Day`" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateHolidaysHolidayFormGroup() {
		return new FormGroup<HolidaysHolidayFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			deliveryGuaranteeDate: new FormControl<string | null | undefined>(undefined),
			deliveryGuaranteeHour: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Installment {
		amount?: Price;

		/** The number of installments the buyer has to pay. */
		months?: string | null;
	}
	export interface InstallmentFormProperties {

		/** The number of installments the buyer has to pay. */
		months: FormControl<string | null | undefined>,
	}
	export function CreateInstallmentFormGroup() {
		return new FormGroup<InstallmentFormProperties>({
			months: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoiceSummary {

		/** Summary of the total amounts of the additional charges. */
		additionalChargeSummaries?: Array<InvoiceSummaryAdditionalChargeSummary>;
		customerBalance?: Amount;
		googleBalance?: Amount;
		merchantBalance?: Amount;
		productTotal?: Amount;

		/** Deprecated. */
		promotionSummaries?: Array<Promotion>;
	}
	export interface InvoiceSummaryFormProperties {
	}
	export function CreateInvoiceSummaryFormGroup() {
		return new FormGroup<InvoiceSummaryFormProperties>({
		});

	}

	export interface InvoiceSummaryAdditionalChargeSummary {
		totalAmount?: Amount;

		/** [required] Type of the additional charge. Acceptable values are: - "`shipping`" */
		type?: string | null;
	}
	export interface InvoiceSummaryAdditionalChargeSummaryFormProperties {

		/** [required] Type of the additional charge. Acceptable values are: - "`shipping`" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceSummaryAdditionalChargeSummaryFormGroup() {
		return new FormGroup<InvoiceSummaryAdditionalChargeSummaryFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Promotion {
		promotionAmount?: Amount;

		/** [required] ID of the promotion. */
		promotionId?: string | null;
	}
	export interface PromotionFormProperties {

		/** [required] ID of the promotion. */
		promotionId: FormControl<string | null | undefined>,
	}
	export function CreatePromotionFormGroup() {
		return new FormGroup<PromotionFormProperties>({
			promotionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiaAboutPageSettings {

		/** The status of the verification process for the About page. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" */
		status?: string | null;

		/** The URL for the About page. */
		url?: string | null;
	}
	export interface LiaAboutPageSettingsFormProperties {

		/** The status of the verification process for the About page. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" */
		status: FormControl<string | null | undefined>,

		/** The URL for the About page. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateLiaAboutPageSettingsFormGroup() {
		return new FormGroup<LiaAboutPageSettingsFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiaCountrySettings {
		about?: LiaAboutPageSettings;

		/** Required. CLDR country code (e.g. "US"). */
		country?: string | null;

		/** The status of the "Merchant hosted local storefront" feature. */
		hostedLocalStorefrontActive?: boolean | null;
		inventory?: LiaInventorySettings;
		onDisplayToOrder?: LiaOnDisplayToOrderSettings;
		posDataProvider?: LiaPosDataProvider;

		/** The status of the "Store pickup" feature. */
		storePickupActive?: boolean | null;
	}
	export interface LiaCountrySettingsFormProperties {

		/** Required. CLDR country code (e.g. "US"). */
		country: FormControl<string | null | undefined>,

		/** The status of the "Merchant hosted local storefront" feature. */
		hostedLocalStorefrontActive: FormControl<boolean | null | undefined>,

		/** The status of the "Store pickup" feature. */
		storePickupActive: FormControl<boolean | null | undefined>,
	}
	export function CreateLiaCountrySettingsFormGroup() {
		return new FormGroup<LiaCountrySettingsFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			hostedLocalStorefrontActive: new FormControl<boolean | null | undefined>(undefined),
			storePickupActive: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface LiaInventorySettings {

		/** The email of the contact for the inventory verification process. */
		inventoryVerificationContactEmail?: string | null;

		/** The name of the contact for the inventory verification process. */
		inventoryVerificationContactName?: string | null;

		/** The status of the verification contact. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" */
		inventoryVerificationContactStatus?: string | null;

		/** The status of the inventory verification process. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" */
		status?: string | null;
	}
	export interface LiaInventorySettingsFormProperties {

		/** The email of the contact for the inventory verification process. */
		inventoryVerificationContactEmail: FormControl<string | null | undefined>,

		/** The name of the contact for the inventory verification process. */
		inventoryVerificationContactName: FormControl<string | null | undefined>,

		/** The status of the verification contact. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" */
		inventoryVerificationContactStatus: FormControl<string | null | undefined>,

		/** The status of the inventory verification process. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" */
		status: FormControl<string | null | undefined>,
	}
	export function CreateLiaInventorySettingsFormGroup() {
		return new FormGroup<LiaInventorySettingsFormProperties>({
			inventoryVerificationContactEmail: new FormControl<string | null | undefined>(undefined),
			inventoryVerificationContactName: new FormControl<string | null | undefined>(undefined),
			inventoryVerificationContactStatus: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiaOnDisplayToOrderSettings {

		/** Shipping cost and policy URL. */
		shippingCostPolicyUrl?: string | null;

		/** The status of the ?On display to order? feature. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" */
		status?: string | null;
	}
	export interface LiaOnDisplayToOrderSettingsFormProperties {

		/** Shipping cost and policy URL. */
		shippingCostPolicyUrl: FormControl<string | null | undefined>,

		/** The status of the ?On display to order? feature. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" */
		status: FormControl<string | null | undefined>,
	}
	export function CreateLiaOnDisplayToOrderSettingsFormGroup() {
		return new FormGroup<LiaOnDisplayToOrderSettingsFormProperties>({
			shippingCostPolicyUrl: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiaPosDataProvider {

		/** The ID of the POS data provider. */
		posDataProviderId?: string | null;

		/** The account ID by which this merchant is known to the POS data provider. */
		posExternalAccountId?: string | null;
	}
	export interface LiaPosDataProviderFormProperties {

		/** The ID of the POS data provider. */
		posDataProviderId: FormControl<string | null | undefined>,

		/** The account ID by which this merchant is known to the POS data provider. */
		posExternalAccountId: FormControl<string | null | undefined>,
	}
	export function CreateLiaPosDataProviderFormGroup() {
		return new FormGroup<LiaPosDataProviderFormProperties>({
			posDataProviderId: new FormControl<string | null | undefined>(undefined),
			posExternalAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role. */
	export interface LiaSettings {

		/** The ID of the account to which these LIA settings belong. Ignored upon update, always present in get request responses. */
		accountId?: string | null;

		/** The LIA settings for each country. */
		countrySettings?: Array<LiaCountrySettings>;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liaSettings`" */
		kind?: string | null;
	}

	/** Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role. */
	export interface LiaSettingsFormProperties {

		/** The ID of the account to which these LIA settings belong. Ignored upon update, always present in get request responses. */
		accountId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liaSettings`" */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiaSettingsFormGroup() {
		return new FormGroup<LiaSettingsFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiasettingsCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<LiasettingsCustomBatchRequestEntry>;
	}
	export interface LiasettingsCustomBatchRequestFormProperties {
	}
	export function CreateLiasettingsCustomBatchRequestFormGroup() {
		return new FormGroup<LiasettingsCustomBatchRequestFormProperties>({
		});

	}

	export interface LiasettingsCustomBatchRequestEntry {

		/** The ID of the account for which to get/update account LIA settings. */
		accountId?: string | null;

		/** An entry ID, unique within the batch request. */
		batchId?: number | null;

		/** Inventory validation contact email. Required only for SetInventoryValidationContact. */
		contactEmail?: string | null;

		/** Inventory validation contact name. Required only for SetInventoryValidationContact. */
		contactName?: string | null;

		/** The country code. Required only for RequestInventoryVerification. */
		country?: string | null;

		/** The GMB account. Required only for RequestGmbAccess. */
		gmbEmail?: string | null;

		/** Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role. */
		liaSettings?: LiaSettings;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/** The method of the batch entry. Acceptable values are: - "`get`" - "`getAccessibleGmbAccounts`" - "`requestGmbAccess`" - "`requestInventoryVerification`" - "`setInventoryVerificationContact`" - "`update`" */
		method?: string | null;

		/** The ID of POS data provider. Required only for SetPosProvider. */
		posDataProviderId?: string | null;

		/** The account ID by which this merchant is known to the POS provider. */
		posExternalAccountId?: string | null;
	}
	export interface LiasettingsCustomBatchRequestEntryFormProperties {

		/** The ID of the account for which to get/update account LIA settings. */
		accountId: FormControl<string | null | undefined>,

		/** An entry ID, unique within the batch request. */
		batchId: FormControl<number | null | undefined>,

		/** Inventory validation contact email. Required only for SetInventoryValidationContact. */
		contactEmail: FormControl<string | null | undefined>,

		/** Inventory validation contact name. Required only for SetInventoryValidationContact. */
		contactName: FormControl<string | null | undefined>,

		/** The country code. Required only for RequestInventoryVerification. */
		country: FormControl<string | null | undefined>,

		/** The GMB account. Required only for RequestGmbAccess. */
		gmbEmail: FormControl<string | null | undefined>,

		/** The ID of the managing account. */
		merchantId: FormControl<string | null | undefined>,

		/** The method of the batch entry. Acceptable values are: - "`get`" - "`getAccessibleGmbAccounts`" - "`requestGmbAccess`" - "`requestInventoryVerification`" - "`setInventoryVerificationContact`" - "`update`" */
		method: FormControl<string | null | undefined>,

		/** The ID of POS data provider. Required only for SetPosProvider. */
		posDataProviderId: FormControl<string | null | undefined>,

		/** The account ID by which this merchant is known to the POS provider. */
		posExternalAccountId: FormControl<string | null | undefined>,
	}
	export function CreateLiasettingsCustomBatchRequestEntryFormGroup() {
		return new FormGroup<LiasettingsCustomBatchRequestEntryFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			batchId: new FormControl<number | null | undefined>(undefined),
			contactEmail: new FormControl<string | null | undefined>(undefined),
			contactName: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			gmbEmail: new FormControl<string | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			posDataProviderId: new FormControl<string | null | undefined>(undefined),
			posExternalAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiasettingsCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<LiasettingsCustomBatchResponseEntry>;

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsCustomBatchResponse". */
		kind?: string | null;
	}
	export interface LiasettingsCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsCustomBatchResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiasettingsCustomBatchResponseFormGroup() {
		return new FormGroup<LiasettingsCustomBatchResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiasettingsCustomBatchResponseEntry {

		/** The ID of the request entry to which this entry responds. */
		batchId?: number | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors;
		gmbAccounts?: GmbAccounts;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsCustomBatchResponseEntry`" */
		kind?: string | null;

		/** Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role. */
		liaSettings?: LiaSettings;

		/** The list of POS data providers. */
		posDataProviders?: Array<PosDataProviders>;
	}
	export interface LiasettingsCustomBatchResponseEntryFormProperties {

		/** The ID of the request entry to which this entry responds. */
		batchId: FormControl<number | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsCustomBatchResponseEntry`" */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiasettingsCustomBatchResponseEntryFormGroup() {
		return new FormGroup<LiasettingsCustomBatchResponseEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PosDataProviders {

		/** Country code. */
		country?: string | null;

		/** A list of POS data providers. */
		posDataProviders?: Array<PosDataProvidersPosDataProvider>;
	}
	export interface PosDataProvidersFormProperties {

		/** Country code. */
		country: FormControl<string | null | undefined>,
	}
	export function CreatePosDataProvidersFormGroup() {
		return new FormGroup<PosDataProvidersFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PosDataProvidersPosDataProvider {

		/** The display name of Pos data Provider. */
		displayName?: string | null;

		/** The full name of this POS data Provider. */
		fullName?: string | null;

		/** The ID of the account. */
		providerId?: string | null;
	}
	export interface PosDataProvidersPosDataProviderFormProperties {

		/** The display name of Pos data Provider. */
		displayName: FormControl<string | null | undefined>,

		/** The full name of this POS data Provider. */
		fullName: FormControl<string | null | undefined>,

		/** The ID of the account. */
		providerId: FormControl<string | null | undefined>,
	}
	export function CreatePosDataProvidersPosDataProviderFormGroup() {
		return new FormGroup<PosDataProvidersPosDataProviderFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiasettingsGetAccessibleGmbAccountsResponse {

		/** The ID of the Merchant Center account. */
		accountId?: string | null;

		/** A list of GMB accounts which are available to the merchant. */
		gmbAccounts?: Array<GmbAccountsGmbAccount>;

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsGetAccessibleGmbAccountsResponse". */
		kind?: string | null;
	}
	export interface LiasettingsGetAccessibleGmbAccountsResponseFormProperties {

		/** The ID of the Merchant Center account. */
		accountId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsGetAccessibleGmbAccountsResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiasettingsGetAccessibleGmbAccountsResponseFormGroup() {
		return new FormGroup<LiasettingsGetAccessibleGmbAccountsResponseFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiasettingsListPosDataProvidersResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsListPosDataProvidersResponse". */
		kind?: string | null;

		/** The list of POS data providers for each eligible country */
		posDataProviders?: Array<PosDataProviders>;
	}
	export interface LiasettingsListPosDataProvidersResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsListPosDataProvidersResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiasettingsListPosDataProvidersResponseFormGroup() {
		return new FormGroup<LiasettingsListPosDataProvidersResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiasettingsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of LIA settings. */
		nextPageToken?: string | null;
		resources?: Array<LiaSettings>;
	}
	export interface LiasettingsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token for the retrieval of the next page of LIA settings. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateLiasettingsListResponseFormGroup() {
		return new FormGroup<LiasettingsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiasettingsRequestGmbAccessResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsRequestGmbAccessResponse". */
		kind?: string | null;
	}
	export interface LiasettingsRequestGmbAccessResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsRequestGmbAccessResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiasettingsRequestGmbAccessResponseFormGroup() {
		return new FormGroup<LiasettingsRequestGmbAccessResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiasettingsRequestInventoryVerificationResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsRequestInventoryVerificationResponse". */
		kind?: string | null;
	}
	export interface LiasettingsRequestInventoryVerificationResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsRequestInventoryVerificationResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiasettingsRequestInventoryVerificationResponseFormGroup() {
		return new FormGroup<LiasettingsRequestInventoryVerificationResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiasettingsSetInventoryVerificationContactResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsSetInventoryVerificationContactResponse". */
		kind?: string | null;
	}
	export interface LiasettingsSetInventoryVerificationContactResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsSetInventoryVerificationContactResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiasettingsSetInventoryVerificationContactResponseFormGroup() {
		return new FormGroup<LiasettingsSetInventoryVerificationContactResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiasettingsSetPosDataProviderResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsSetPosDataProviderResponse". */
		kind?: string | null;
	}
	export interface LiasettingsSetPosDataProviderResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsSetPosDataProviderResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiasettingsSetPosDataProviderResponseFormGroup() {
		return new FormGroup<LiasettingsSetPosDataProviderResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LoyaltyPoints {

		/** Name of loyalty points program. It is recommended to limit the name to 12 full-width characters or 24 Roman characters. */
		name?: string | null;

		/** The retailer's loyalty points in absolute value. */
		pointsValue?: string | null;

		/** The ratio of a point when converted to currency. Google assumes currency based on Merchant Center settings. If ratio is left out, it defaults to 1.0. */
		ratio?: number | null;
	}
	export interface LoyaltyPointsFormProperties {

		/** Name of loyalty points program. It is recommended to limit the name to 12 full-width characters or 24 Roman characters. */
		name: FormControl<string | null | undefined>,

		/** The retailer's loyalty points in absolute value. */
		pointsValue: FormControl<string | null | undefined>,

		/** The ratio of a point when converted to currency. Google assumes currency based on Merchant Center settings. If ratio is left out, it defaults to 1.0. */
		ratio: FormControl<number | null | undefined>,
	}
	export function CreateLoyaltyPointsFormGroup() {
		return new FormGroup<LoyaltyPointsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			pointsValue: new FormControl<string | null | undefined>(undefined),
			ratio: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Order return. Production access (all methods) requires the order manager role. Sandbox access does not. */
	export interface MerchantOrderReturn {

		/** The date of creation of the return, in ISO 8601 format. */
		creationDate?: string | null;

		/** Merchant defined order ID. */
		merchantOrderId?: string | null;

		/** Google order ID. */
		orderId?: string | null;

		/** Order return ID generated by Google. */
		orderReturnId?: string | null;

		/** Items of the return. */
		returnItems?: Array<MerchantOrderReturnItem>;

		/** Shipments of the return. */
		returnShipments?: Array<ReturnShipment>;
	}

	/** Order return. Production access (all methods) requires the order manager role. Sandbox access does not. */
	export interface MerchantOrderReturnFormProperties {

		/** The date of creation of the return, in ISO 8601 format. */
		creationDate: FormControl<string | null | undefined>,

		/** Merchant defined order ID. */
		merchantOrderId: FormControl<string | null | undefined>,

		/** Google order ID. */
		orderId: FormControl<string | null | undefined>,

		/** Order return ID generated by Google. */
		orderReturnId: FormControl<string | null | undefined>,
	}
	export function CreateMerchantOrderReturnFormGroup() {
		return new FormGroup<MerchantOrderReturnFormProperties>({
			creationDate: new FormControl<string | null | undefined>(undefined),
			merchantOrderId: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			orderReturnId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MerchantOrderReturnItem {
		customerReturnReason?: CustomerReturnReason;

		/** Product level item ID. If the returned items are of the same product, they will have the same ID. */
		itemId?: string | null;
		merchantReturnReason?: RefundReason;
		product?: OrderLineItemProduct;

		/** IDs of the return shipments that this return item belongs to. */
		returnShipmentIds?: Array<string>;

		/** State of the item. Acceptable values are: - "`canceled`" - "`new`" - "`received`" - "`refunded`" - "`rejected`" */
		state?: string | null;
	}
	export interface MerchantOrderReturnItemFormProperties {

		/** Product level item ID. If the returned items are of the same product, they will have the same ID. */
		itemId: FormControl<string | null | undefined>,

		/** State of the item. Acceptable values are: - "`canceled`" - "`new`" - "`received`" - "`refunded`" - "`rejected`" */
		state: FormControl<string | null | undefined>,
	}
	export function CreateMerchantOrderReturnItemFormGroup() {
		return new FormGroup<MerchantOrderReturnItemFormProperties>({
			itemId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RefundReason {

		/** Description of the reason. */
		description?: string | null;

		/** Code of the refund reason. Acceptable values are: - "`adjustment`" - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`customerSupportRequested`" - "`deliveredLateByCarrier`" - "`deliveredTooLate`" - "`expiredItem`" - "`failToPushOrderGoogleError`" - "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" - "`failToPushOrderToMerchantOutOfStock`" - "`feeAdjustment`" - "`invalidCoupon`" - "`lateShipmentCredit`" - "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" - "`priceAdjustment`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`promoReallocation`" - "`qualityNotAsExpected`" - "`returnRefundAbuse`" - "`shippingCostAdjustment`" - "`shippingPriceError`" - "`taxAdjustment`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reasonCode?: string | null;
	}
	export interface RefundReasonFormProperties {

		/** Description of the reason. */
		description: FormControl<string | null | undefined>,

		/** Code of the refund reason. Acceptable values are: - "`adjustment`" - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`customerSupportRequested`" - "`deliveredLateByCarrier`" - "`deliveredTooLate`" - "`expiredItem`" - "`failToPushOrderGoogleError`" - "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" - "`failToPushOrderToMerchantOutOfStock`" - "`feeAdjustment`" - "`invalidCoupon`" - "`lateShipmentCredit`" - "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" - "`priceAdjustment`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`promoReallocation`" - "`qualityNotAsExpected`" - "`returnRefundAbuse`" - "`shippingCostAdjustment`" - "`shippingPriceError`" - "`taxAdjustment`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reasonCode: FormControl<string | null | undefined>,
	}
	export function CreateRefundReasonFormGroup() {
		return new FormGroup<RefundReasonFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			reasonCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderLineItemProduct {

		/** Brand of the item. */
		brand?: string | null;

		/** The item's channel (online or local). Acceptable values are: - "`local`" - "`online`" */
		channel?: string | null;

		/** Condition or state of the item. Acceptable values are: - "`new`" - "`refurbished`" - "`used`" */
		condition?: string | null;

		/** The two-letter ISO 639-1 language code for the item. */
		contentLanguage?: string | null;

		/** Associated fees at order creation time. */
		fees?: Array<OrderLineItemProductFee>;

		/** Global Trade Item Number (GTIN) of the item. */
		gtin?: string | null;

		/** The REST ID of the product. */
		id?: string | null;

		/** URL of an image of the item. */
		imageLink?: string | null;

		/** Shared identifier for all variants of the same product. */
		itemGroupId?: string | null;

		/** Manufacturer Part Number (MPN) of the item. */
		mpn?: string | null;

		/** An identifier of the item. */
		offerId?: string | null;
		price?: Price;

		/** URL to the cached image shown to the user when order was placed. */
		shownImage?: string | null;

		/** The CLDR territory // code of the target country of the product. */
		targetCountry?: string | null;

		/** The title of the product. */
		title?: string | null;

		/** Variant attributes for the item. These are dimensions of the product, such as color, gender, material, pattern, and size. You can find a comprehensive list of variant attributes here. */
		variantAttributes?: Array<OrderLineItemProductVariantAttribute>;
	}
	export interface OrderLineItemProductFormProperties {

		/** Brand of the item. */
		brand: FormControl<string | null | undefined>,

		/** The item's channel (online or local). Acceptable values are: - "`local`" - "`online`" */
		channel: FormControl<string | null | undefined>,

		/** Condition or state of the item. Acceptable values are: - "`new`" - "`refurbished`" - "`used`" */
		condition: FormControl<string | null | undefined>,

		/** The two-letter ISO 639-1 language code for the item. */
		contentLanguage: FormControl<string | null | undefined>,

		/** Global Trade Item Number (GTIN) of the item. */
		gtin: FormControl<string | null | undefined>,

		/** The REST ID of the product. */
		id: FormControl<string | null | undefined>,

		/** URL of an image of the item. */
		imageLink: FormControl<string | null | undefined>,

		/** Shared identifier for all variants of the same product. */
		itemGroupId: FormControl<string | null | undefined>,

		/** Manufacturer Part Number (MPN) of the item. */
		mpn: FormControl<string | null | undefined>,

		/** An identifier of the item. */
		offerId: FormControl<string | null | undefined>,

		/** URL to the cached image shown to the user when order was placed. */
		shownImage: FormControl<string | null | undefined>,

		/** The CLDR territory // code of the target country of the product. */
		targetCountry: FormControl<string | null | undefined>,

		/** The title of the product. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateOrderLineItemProductFormGroup() {
		return new FormGroup<OrderLineItemProductFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined),
			channel: new FormControl<string | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			contentLanguage: new FormControl<string | null | undefined>(undefined),
			gtin: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageLink: new FormControl<string | null | undefined>(undefined),
			itemGroupId: new FormControl<string | null | undefined>(undefined),
			mpn: new FormControl<string | null | undefined>(undefined),
			offerId: new FormControl<string | null | undefined>(undefined),
			shownImage: new FormControl<string | null | undefined>(undefined),
			targetCountry: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderLineItemProductFee {
		amount?: Price;

		/** Name of the fee. */
		name?: string | null;
	}
	export interface OrderLineItemProductFeeFormProperties {

		/** Name of the fee. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOrderLineItemProductFeeFormGroup() {
		return new FormGroup<OrderLineItemProductFeeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderLineItemProductVariantAttribute {

		/** The dimension of the variant. */
		dimension?: string | null;

		/** The value for the dimension. */
		value?: string | null;
	}
	export interface OrderLineItemProductVariantAttributeFormProperties {

		/** The dimension of the variant. */
		dimension: FormControl<string | null | undefined>,

		/** The value for the dimension. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateOrderLineItemProductVariantAttributeFormGroup() {
		return new FormGroup<OrderLineItemProductVariantAttributeFormProperties>({
			dimension: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReturnShipment {

		/** The date of creation of the shipment, in ISO 8601 format. */
		creationDate?: string | null;

		/** The date of delivery of the shipment, in ISO 8601 format. */
		deliveryDate?: string | null;

		/** Type of the return method. Acceptable values are: - "`byMail`" - "`contactCustomerSupport`" - "`returnless`" */
		returnMethodType?: string | null;

		/** Shipment ID generated by Google. */
		shipmentId?: string | null;

		/** Tracking information of the shipment. One return shipment might be handled by several shipping carriers sequentially. */
		shipmentTrackingInfos?: Array<ShipmentTrackingInfo>;

		/** The date of shipping of the shipment, in ISO 8601 format. */
		shippingDate?: string | null;

		/** State of the shipment. Acceptable values are: - "`completed`" - "`new`" - "`shipped`" - "`undeliverable`" - "`pending`" */
		state?: string | null;
	}
	export interface ReturnShipmentFormProperties {

		/** The date of creation of the shipment, in ISO 8601 format. */
		creationDate: FormControl<string | null | undefined>,

		/** The date of delivery of the shipment, in ISO 8601 format. */
		deliveryDate: FormControl<string | null | undefined>,

		/** Type of the return method. Acceptable values are: - "`byMail`" - "`contactCustomerSupport`" - "`returnless`" */
		returnMethodType: FormControl<string | null | undefined>,

		/** Shipment ID generated by Google. */
		shipmentId: FormControl<string | null | undefined>,

		/** The date of shipping of the shipment, in ISO 8601 format. */
		shippingDate: FormControl<string | null | undefined>,

		/** State of the shipment. Acceptable values are: - "`completed`" - "`new`" - "`shipped`" - "`undeliverable`" - "`pending`" */
		state: FormControl<string | null | undefined>,
	}
	export function CreateReturnShipmentFormGroup() {
		return new FormGroup<ReturnShipmentFormProperties>({
			creationDate: new FormControl<string | null | undefined>(undefined),
			deliveryDate: new FormControl<string | null | undefined>(undefined),
			returnMethodType: new FormControl<string | null | undefined>(undefined),
			shipmentId: new FormControl<string | null | undefined>(undefined),
			shippingDate: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShipmentTrackingInfo {

		/** The shipping carrier that handles the package. Acceptable values are: - "`boxtal`" - "`bpost`" - "`chronopost`" - "`colisPrive`" - "`colissimo`" - "`cxt`" - "`deliv`" - "`dhl`" - "`dpd`" - "`dynamex`" - "`eCourier`" - "`easypost`" - "`efw`" - "`fedex`" - "`fedexSmartpost`" - "`geodis`" - "`gls`" - "`googleCourier`" - "`gsx`" - "`jdLogistics`" - "`laPoste`" - "`lasership`" - "`manual`" - "`mpx`" - "`onTrac`" - "`other`" - "`tnt`" - "`uds`" - "`ups`" - "`usps`" */
		carrier?: string | null;

		/** The tracking number for the package. */
		trackingNumber?: string | null;
	}
	export interface ShipmentTrackingInfoFormProperties {

		/** The shipping carrier that handles the package. Acceptable values are: - "`boxtal`" - "`bpost`" - "`chronopost`" - "`colisPrive`" - "`colissimo`" - "`cxt`" - "`deliv`" - "`dhl`" - "`dpd`" - "`dynamex`" - "`eCourier`" - "`easypost`" - "`efw`" - "`fedex`" - "`fedexSmartpost`" - "`geodis`" - "`gls`" - "`googleCourier`" - "`gsx`" - "`jdLogistics`" - "`laPoste`" - "`lasership`" - "`manual`" - "`mpx`" - "`onTrac`" - "`other`" - "`tnt`" - "`uds`" - "`ups`" - "`usps`" */
		carrier: FormControl<string | null | undefined>,

		/** The tracking number for the package. */
		trackingNumber: FormControl<string | null | undefined>,
	}
	export function CreateShipmentTrackingInfoFormGroup() {
		return new FormGroup<ShipmentTrackingInfoFormProperties>({
			carrier: new FormControl<string | null | undefined>(undefined),
			trackingNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MinimumOrderValueTable {
		storeCodeSetWithMovs?: Array<MinimumOrderValueTableStoreCodeSetWithMov>;
	}
	export interface MinimumOrderValueTableFormProperties {
	}
	export function CreateMinimumOrderValueTableFormGroup() {
		return new FormGroup<MinimumOrderValueTableFormProperties>({
		});

	}


	/** A list of store code sets sharing the same minimum order value. At least two sets are required and the last one must be empty, which signifies 'MOV for all other stores'. Each store code can only appear once across all the sets. All prices within a service must have the same currency. */
	export interface MinimumOrderValueTableStoreCodeSetWithMov {

		/** A list of unique store codes or empty for the catch all. */
		storeCodes?: Array<string>;
		value?: Price;
	}

	/** A list of store code sets sharing the same minimum order value. At least two sets are required and the last one must be empty, which signifies 'MOV for all other stores'. Each store code can only appear once across all the sets. All prices within a service must have the same currency. */
	export interface MinimumOrderValueTableStoreCodeSetWithMovFormProperties {
	}
	export function CreateMinimumOrderValueTableStoreCodeSetWithMovFormGroup() {
		return new FormGroup<MinimumOrderValueTableStoreCodeSetWithMovFormProperties>({
		});

	}


	/** Order. Production access (all methods) requires the order manager role. Sandbox access does not. */
	export interface Order {

		/** Whether the order was acknowledged. */
		acknowledged?: boolean | null;

		/** Deprecated. Acceptable values are: - "`googleExpress`" - "`purchasesOnGoogle`" */
		channelType?: string | null;
		customer?: OrderCustomer;
		deliveryDetails?: OrderDeliveryDetails;

		/** The REST ID of the order. Globally unique. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#order`" */
		kind?: string | null;

		/** Line items that are ordered. */
		lineItems?: Array<OrderLineItem>;
		merchantId?: string | null;

		/** Merchant-provided ID of the order. */
		merchantOrderId?: string | null;
		netAmount?: Price;
		paymentMethod?: OrderPaymentMethod;

		/** The status of the payment. Acceptable values are: - "`paymentCaptured`" - "`paymentRejected`" - "`paymentSecured`" - "`pendingAuthorization`" */
		paymentStatus?: string | null;
		pickupDetails?: OrderPickupDetails;

		/** The date when the order was placed, in ISO 8601 format. */
		placedDate?: string | null;

		/** The details of the merchant provided promotions applied to the order. To determine which promotions apply to which products, check the `Promotions[].Benefits[].OfferIds` field against the `LineItems[].Product.OfferId` field for each promotion. If a promotion is applied to more than 1 `offerId`, divide the discount value by the number of affected offers to determine how much discount to apply to each `offerId`. Examples: 1. To calculate the line item level discount for a single specific item: For each promotion, subtract the `Promotions[].Benefits[].Discount.value` amount from the `LineItems[].Price.value`. 2. To calculate the line item level discount for multiple quantity of a specific item: For each promotion, divide the `Promotions[].Benefits[].Discount.value` by the quantity of products and substract it from `LineItems[].Product.Price.value` for each quantity item. Only 1 promotion can be applied to an offerId in a given order. To refund an item which had a promotion applied to it, make sure to refund the amount after first subtracting the promotion discount from the item price. More details about the program are here. */
		promotions?: Array<OrderLegacyPromotion>;

		/** Refunds for the order. */
		refunds?: Array<OrderRefund>;

		/** Shipments of the order. */
		shipments?: Array<OrderShipment>;
		shippingCost?: Price;
		shippingCostTax?: Price;

		/** Deprecated. Shipping details are provided with line items instead. Acceptable values are: - "`economy`" - "`expedited`" - "`oneDay`" - "`sameDay`" - "`standard`" - "`twoDay`" */
		shippingOption?: string | null;

		/** The status of the order. Acceptable values are: - "`canceled`" - "`delivered`" - "`inProgress`" - "`partiallyDelivered`" - "`partiallyReturned`" - "`partiallyShipped`" - "`pendingShipment`" - "`returned`" - "`shipped`" */
		status?: string | null;

		/** The party responsible for collecting and remitting taxes. Acceptable values are: - "`marketplaceFacilitator`" - "`merchant`" */
		taxCollector?: string | null;
	}

	/** Order. Production access (all methods) requires the order manager role. Sandbox access does not. */
	export interface OrderFormProperties {

		/** Whether the order was acknowledged. */
		acknowledged: FormControl<boolean | null | undefined>,

		/** Deprecated. Acceptable values are: - "`googleExpress`" - "`purchasesOnGoogle`" */
		channelType: FormControl<string | null | undefined>,

		/** The REST ID of the order. Globally unique. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#order`" */
		kind: FormControl<string | null | undefined>,
		merchantId: FormControl<string | null | undefined>,

		/** Merchant-provided ID of the order. */
		merchantOrderId: FormControl<string | null | undefined>,

		/** The status of the payment. Acceptable values are: - "`paymentCaptured`" - "`paymentRejected`" - "`paymentSecured`" - "`pendingAuthorization`" */
		paymentStatus: FormControl<string | null | undefined>,

		/** The date when the order was placed, in ISO 8601 format. */
		placedDate: FormControl<string | null | undefined>,

		/** Deprecated. Shipping details are provided with line items instead. Acceptable values are: - "`economy`" - "`expedited`" - "`oneDay`" - "`sameDay`" - "`standard`" - "`twoDay`" */
		shippingOption: FormControl<string | null | undefined>,

		/** The status of the order. Acceptable values are: - "`canceled`" - "`delivered`" - "`inProgress`" - "`partiallyDelivered`" - "`partiallyReturned`" - "`partiallyShipped`" - "`pendingShipment`" - "`returned`" - "`shipped`" */
		status: FormControl<string | null | undefined>,

		/** The party responsible for collecting and remitting taxes. Acceptable values are: - "`marketplaceFacilitator`" - "`merchant`" */
		taxCollector: FormControl<string | null | undefined>,
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
			acknowledged: new FormControl<boolean | null | undefined>(undefined),
			channelType: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			merchantOrderId: new FormControl<string | null | undefined>(undefined),
			paymentStatus: new FormControl<string | null | undefined>(undefined),
			placedDate: new FormControl<string | null | undefined>(undefined),
			shippingOption: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			taxCollector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderCustomer {

		/** Deprecated. */
		email?: string | null;

		/** Deprecated. Please use marketingRightsInfo instead. */
		explicitMarketingPreference?: boolean | null;

		/** Full name of the customer. */
		fullName?: string | null;

		/** Email address for the merchant to send value-added tax or invoice documentation of the order. Only the last document sent is made available to the customer. For more information, see About automated VAT invoicing for Buy on Google. */
		invoiceReceivingEmail?: string | null;
		marketingRightsInfo?: OrderCustomerMarketingRightsInfo;
	}
	export interface OrderCustomerFormProperties {

		/** Deprecated. */
		email: FormControl<string | null | undefined>,

		/** Deprecated. Please use marketingRightsInfo instead. */
		explicitMarketingPreference: FormControl<boolean | null | undefined>,

		/** Full name of the customer. */
		fullName: FormControl<string | null | undefined>,

		/** Email address for the merchant to send value-added tax or invoice documentation of the order. Only the last document sent is made available to the customer. For more information, see About automated VAT invoicing for Buy on Google. */
		invoiceReceivingEmail: FormControl<string | null | undefined>,
	}
	export function CreateOrderCustomerFormGroup() {
		return new FormGroup<OrderCustomerFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			explicitMarketingPreference: new FormControl<boolean | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			invoiceReceivingEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderCustomerMarketingRightsInfo {

		/** Last known customer selection regarding marketing preferences. In certain cases this selection might not be known, so this field would be empty. If a customer selected `granted` in their most recent order, they can be subscribed to marketing emails. Customers who have chosen `denied` must not be subscribed, or must be unsubscribed if already opted-in. Acceptable values are: - "`denied`" - "`granted`" */
		explicitMarketingPreference?: string | null;

		/** Timestamp when last time marketing preference was updated. Could be empty, if user wasn't offered a selection yet. */
		lastUpdatedTimestamp?: string | null;

		/** Email address that can be used for marketing purposes. The field may be empty even if `explicitMarketingPreference` is 'granted'. This happens when retrieving an old order from the customer who deleted their account. */
		marketingEmailAddress?: string | null;
	}
	export interface OrderCustomerMarketingRightsInfoFormProperties {

		/** Last known customer selection regarding marketing preferences. In certain cases this selection might not be known, so this field would be empty. If a customer selected `granted` in their most recent order, they can be subscribed to marketing emails. Customers who have chosen `denied` must not be subscribed, or must be unsubscribed if already opted-in. Acceptable values are: - "`denied`" - "`granted`" */
		explicitMarketingPreference: FormControl<string | null | undefined>,

		/** Timestamp when last time marketing preference was updated. Could be empty, if user wasn't offered a selection yet. */
		lastUpdatedTimestamp: FormControl<string | null | undefined>,

		/** Email address that can be used for marketing purposes. The field may be empty even if `explicitMarketingPreference` is 'granted'. This happens when retrieving an old order from the customer who deleted their account. */
		marketingEmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateOrderCustomerMarketingRightsInfoFormGroup() {
		return new FormGroup<OrderCustomerMarketingRightsInfoFormProperties>({
			explicitMarketingPreference: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
			marketingEmailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderDeliveryDetails {
		address?: OrderAddress;

		/** The phone number of the person receiving the delivery. */
		phoneNumber?: string | null;
	}
	export interface OrderDeliveryDetailsFormProperties {

		/** The phone number of the person receiving the delivery. */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateOrderDeliveryDetailsFormGroup() {
		return new FormGroup<OrderDeliveryDetailsFormProperties>({
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderAddress {

		/** CLDR country code (e.g. "US"). */
		country?: string | null;

		/** Strings representing the lines of the printed label for mailing the order, for example: John Smith 1600 Amphitheatre Parkway Mountain View, CA, 94043 United States */
		fullAddress?: Array<string>;

		/** Whether the address is a post office box. */
		isPostOfficeBox?: boolean | null;

		/** City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs). */
		locality?: string | null;

		/** Postal Code or ZIP (e.g. "94043"). */
		postalCode?: string | null;

		/** Name of the recipient. */
		recipientName?: string | null;

		/** Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC"). */
		region?: string | null;

		/** Street-level part of the address. */
		streetAddress?: Array<string>;
	}
	export interface OrderAddressFormProperties {

		/** CLDR country code (e.g. "US"). */
		country: FormControl<string | null | undefined>,

		/** Whether the address is a post office box. */
		isPostOfficeBox: FormControl<boolean | null | undefined>,

		/** City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs). */
		locality: FormControl<string | null | undefined>,

		/** Postal Code or ZIP (e.g. "94043"). */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the recipient. */
		recipientName: FormControl<string | null | undefined>,

		/** Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC"). */
		region: FormControl<string | null | undefined>,
	}
	export function CreateOrderAddressFormGroup() {
		return new FormGroup<OrderAddressFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			isPostOfficeBox: new FormControl<boolean | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			recipientName: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderLineItem {

		/** Annotations that are attached to the line item. */
		annotations?: Array<OrderMerchantProvidedAnnotation>;

		/** Cancellations of the line item. */
		cancellations?: Array<OrderCancellation>;

		/** The ID of the line item. */
		id?: string | null;
		price?: Price;
		product?: OrderLineItemProduct;

		/** Number of items canceled. */
		quantityCanceled?: number | null;

		/** Number of items delivered. */
		quantityDelivered?: number | null;

		/** Number of items ordered. */
		quantityOrdered?: number | null;

		/** Number of items pending. */
		quantityPending?: number | null;

		/** Number of items ready for pickup. */
		quantityReadyForPickup?: number | null;

		/** Number of items returned. */
		quantityReturned?: number | null;

		/** Number of items shipped. */
		quantityShipped?: number | null;
		returnInfo?: OrderLineItemReturnInfo;

		/** Returns of the line item. */
		returns?: Array<OrderReturn>;
		shippingDetails?: OrderLineItemShippingDetails;
		tax?: Price;
	}
	export interface OrderLineItemFormProperties {

		/** The ID of the line item. */
		id: FormControl<string | null | undefined>,

		/** Number of items canceled. */
		quantityCanceled: FormControl<number | null | undefined>,

		/** Number of items delivered. */
		quantityDelivered: FormControl<number | null | undefined>,

		/** Number of items ordered. */
		quantityOrdered: FormControl<number | null | undefined>,

		/** Number of items pending. */
		quantityPending: FormControl<number | null | undefined>,

		/** Number of items ready for pickup. */
		quantityReadyForPickup: FormControl<number | null | undefined>,

		/** Number of items returned. */
		quantityReturned: FormControl<number | null | undefined>,

		/** Number of items shipped. */
		quantityShipped: FormControl<number | null | undefined>,
	}
	export function CreateOrderLineItemFormGroup() {
		return new FormGroup<OrderLineItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			quantityCanceled: new FormControl<number | null | undefined>(undefined),
			quantityDelivered: new FormControl<number | null | undefined>(undefined),
			quantityOrdered: new FormControl<number | null | undefined>(undefined),
			quantityPending: new FormControl<number | null | undefined>(undefined),
			quantityReadyForPickup: new FormControl<number | null | undefined>(undefined),
			quantityReturned: new FormControl<number | null | undefined>(undefined),
			quantityShipped: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OrderMerchantProvidedAnnotation {

		/** Key for additional merchant provided (as key-value pairs) annotation about the line item. */
		key?: string | null;

		/** Value for additional merchant provided (as key-value pairs) annotation about the line item. */
		value?: string | null;
	}
	export interface OrderMerchantProvidedAnnotationFormProperties {

		/** Key for additional merchant provided (as key-value pairs) annotation about the line item. */
		key: FormControl<string | null | undefined>,

		/** Value for additional merchant provided (as key-value pairs) annotation about the line item. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateOrderMerchantProvidedAnnotationFormGroup() {
		return new FormGroup<OrderMerchantProvidedAnnotationFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderCancellation {

		/** The actor that created the cancellation. Acceptable values are: - "`customer`" - "`googleBot`" - "`googleCustomerService`" - "`googlePayments`" - "`googleSabre`" - "`merchant`" */
		actor?: string | null;

		/** Date on which the cancellation has been created, in ISO 8601 format. */
		creationDate?: string | null;

		/** The quantity that was canceled. */
		quantity?: number | null;

		/** The reason for the cancellation. Orders that are canceled with a noInventory reason will lead to the removal of the product from Buy on Google until you make an update to that product. This will not affect your Shopping ads. Acceptable values are: - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`customerCanceled`" - "`customerInitiatedCancel`" - "`customerSupportRequested`" - "`failToPushOrderGoogleError`" - "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" - "`failToPushOrderToMerchantOutOfStock`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" - "`priceError`" - "`returnRefundAbuse`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrderCancellationFormProperties {

		/** The actor that created the cancellation. Acceptable values are: - "`customer`" - "`googleBot`" - "`googleCustomerService`" - "`googlePayments`" - "`googleSabre`" - "`merchant`" */
		actor: FormControl<string | null | undefined>,

		/** Date on which the cancellation has been created, in ISO 8601 format. */
		creationDate: FormControl<string | null | undefined>,

		/** The quantity that was canceled. */
		quantity: FormControl<number | null | undefined>,

		/** The reason for the cancellation. Orders that are canceled with a noInventory reason will lead to the removal of the product from Buy on Google until you make an update to that product. This will not affect your Shopping ads. Acceptable values are: - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`customerCanceled`" - "`customerInitiatedCancel`" - "`customerSupportRequested`" - "`failToPushOrderGoogleError`" - "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" - "`failToPushOrderToMerchantOutOfStock`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" - "`priceError`" - "`returnRefundAbuse`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrderCancellationFormGroup() {
		return new FormGroup<OrderCancellationFormProperties>({
			actor: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderLineItemReturnInfo {

		/** Required. How many days later the item can be returned. */
		daysToReturn?: number | null;

		/** Required. Whether the item is returnable. */
		isReturnable?: boolean | null;

		/** Required. URL of the item return policy. */
		policyUrl?: string | null;
	}
	export interface OrderLineItemReturnInfoFormProperties {

		/** Required. How many days later the item can be returned. */
		daysToReturn: FormControl<number | null | undefined>,

		/** Required. Whether the item is returnable. */
		isReturnable: FormControl<boolean | null | undefined>,

		/** Required. URL of the item return policy. */
		policyUrl: FormControl<string | null | undefined>,
	}
	export function CreateOrderLineItemReturnInfoFormGroup() {
		return new FormGroup<OrderLineItemReturnInfoFormProperties>({
			daysToReturn: new FormControl<number | null | undefined>(undefined),
			isReturnable: new FormControl<boolean | null | undefined>(undefined),
			policyUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderReturn {

		/** The actor that created the refund. Acceptable values are: - "`customer`" - "`googleBot`" - "`googleCustomerService`" - "`googlePayments`" - "`googleSabre`" - "`merchant`" */
		actor?: string | null;

		/** Date on which the item has been created, in ISO 8601 format. */
		creationDate?: string | null;

		/** Quantity that is returned. */
		quantity?: number | null;

		/** The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrderReturnFormProperties {

		/** The actor that created the refund. Acceptable values are: - "`customer`" - "`googleBot`" - "`googleCustomerService`" - "`googlePayments`" - "`googleSabre`" - "`merchant`" */
		actor: FormControl<string | null | undefined>,

		/** Date on which the item has been created, in ISO 8601 format. */
		creationDate: FormControl<string | null | undefined>,

		/** Quantity that is returned. */
		quantity: FormControl<number | null | undefined>,

		/** The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrderReturnFormGroup() {
		return new FormGroup<OrderReturnFormProperties>({
			actor: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderLineItemShippingDetails {

		/** Required. The delivery by date, in ISO 8601 format. */
		deliverByDate?: string | null;
		method?: OrderLineItemShippingDetailsMethod;

		/** Required. The ship by date, in ISO 8601 format. */
		shipByDate?: string | null;

		/** Type of shipment. Indicates whether `deliveryDetails` or `pickupDetails` is applicable for this shipment. Acceptable values are: - "`delivery`" - "`pickup`" */
		type?: string | null;
	}
	export interface OrderLineItemShippingDetailsFormProperties {

		/** Required. The delivery by date, in ISO 8601 format. */
		deliverByDate: FormControl<string | null | undefined>,

		/** Required. The ship by date, in ISO 8601 format. */
		shipByDate: FormControl<string | null | undefined>,

		/** Type of shipment. Indicates whether `deliveryDetails` or `pickupDetails` is applicable for this shipment. Acceptable values are: - "`delivery`" - "`pickup`" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateOrderLineItemShippingDetailsFormGroup() {
		return new FormGroup<OrderLineItemShippingDetailsFormProperties>({
			deliverByDate: new FormControl<string | null | undefined>(undefined),
			shipByDate: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderLineItemShippingDetailsMethod {

		/** The carrier for the shipping. Optional. See `shipments[].carrier` for a list of acceptable values. */
		carrier?: string | null;

		/** Required. Maximum transit time. */
		maxDaysInTransit?: number | null;

		/** Required. The name of the shipping method. */
		methodName?: string | null;

		/** Required. Minimum transit time. */
		minDaysInTransit?: number | null;
	}
	export interface OrderLineItemShippingDetailsMethodFormProperties {

		/** The carrier for the shipping. Optional. See `shipments[].carrier` for a list of acceptable values. */
		carrier: FormControl<string | null | undefined>,

		/** Required. Maximum transit time. */
		maxDaysInTransit: FormControl<number | null | undefined>,

		/** Required. The name of the shipping method. */
		methodName: FormControl<string | null | undefined>,

		/** Required. Minimum transit time. */
		minDaysInTransit: FormControl<number | null | undefined>,
	}
	export function CreateOrderLineItemShippingDetailsMethodFormGroup() {
		return new FormGroup<OrderLineItemShippingDetailsMethodFormProperties>({
			carrier: new FormControl<string | null | undefined>(undefined),
			maxDaysInTransit: new FormControl<number | null | undefined>(undefined),
			methodName: new FormControl<string | null | undefined>(undefined),
			minDaysInTransit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OrderPaymentMethod {
		billingAddress?: OrderAddress;

		/** The card expiration month (January = 1, February = 2 etc.). */
		expirationMonth?: number | null;

		/** The card expiration year (4-digit, e.g. 2015). */
		expirationYear?: number | null;

		/** The last four digits of the card number. */
		lastFourDigits?: string | null;

		/** The billing phone number. */
		phoneNumber?: string | null;

		/** The type of instrument. Acceptable values are: - "`AMEX`" - "`DISCOVER`" - "`JCB`" - "`MASTERCARD`" - "`UNIONPAY`" - "`VISA`" - "``" */
		type?: string | null;
	}
	export interface OrderPaymentMethodFormProperties {

		/** The card expiration month (January = 1, February = 2 etc.). */
		expirationMonth: FormControl<number | null | undefined>,

		/** The card expiration year (4-digit, e.g. 2015). */
		expirationYear: FormControl<number | null | undefined>,

		/** The last four digits of the card number. */
		lastFourDigits: FormControl<string | null | undefined>,

		/** The billing phone number. */
		phoneNumber: FormControl<string | null | undefined>,

		/** The type of instrument. Acceptable values are: - "`AMEX`" - "`DISCOVER`" - "`JCB`" - "`MASTERCARD`" - "`UNIONPAY`" - "`VISA`" - "``" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateOrderPaymentMethodFormGroup() {
		return new FormGroup<OrderPaymentMethodFormProperties>({
			expirationMonth: new FormControl<number | null | undefined>(undefined),
			expirationYear: new FormControl<number | null | undefined>(undefined),
			lastFourDigits: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderPickupDetails {
		address?: OrderAddress;

		/** Collectors authorized to pick up shipment from the pickup location. */
		collectors?: Array<OrderPickupDetailsCollector>;

		/** ID of the pickup location. */
		locationId?: string | null;
	}
	export interface OrderPickupDetailsFormProperties {

		/** ID of the pickup location. */
		locationId: FormControl<string | null | undefined>,
	}
	export function CreateOrderPickupDetailsFormGroup() {
		return new FormGroup<OrderPickupDetailsFormProperties>({
			locationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderPickupDetailsCollector {

		/** Name of the person picking up the shipment. */
		name?: string | null;

		/** Phone number of the person picking up the shipment. */
		phoneNumber?: string | null;
	}
	export interface OrderPickupDetailsCollectorFormProperties {

		/** Name of the person picking up the shipment. */
		name: FormControl<string | null | undefined>,

		/** Phone number of the person picking up the shipment. */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateOrderPickupDetailsCollectorFormGroup() {
		return new FormGroup<OrderPickupDetailsCollectorFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderLegacyPromotion {
		benefits?: Array<OrderLegacyPromotionBenefit>;

		/** The date and time frame when the promotion is active and ready for validation review. Note that the promotion live time may be delayed for a few hours due to the validation review. Start date and end date are separated by a forward slash (/). The start date is specified by the format (YYYY-MM-DD), followed by the letter ?T?, the time of the day when the sale starts (in Greenwich Mean Time, GMT), followed by an expression of the time zone for the sale. The end date is in the same format. */
		effectiveDates?: string | null;

		/** Optional. The text code that corresponds to the promotion when applied on the retailer?s website. */
		genericRedemptionCode?: string | null;

		/** The unique ID of the promotion. */
		id?: string | null;

		/** The full title of the promotion. */
		longTitle?: string | null;

		/** Whether the promotion is applicable to all products or only specific products. Acceptable values are: - "`allProducts`" - "`specificProducts`" */
		productApplicability?: string | null;

		/** Indicates that the promotion is valid online. Acceptable values are: - "`online`" */
		redemptionChannel?: string | null;
	}
	export interface OrderLegacyPromotionFormProperties {

		/** The date and time frame when the promotion is active and ready for validation review. Note that the promotion live time may be delayed for a few hours due to the validation review. Start date and end date are separated by a forward slash (/). The start date is specified by the format (YYYY-MM-DD), followed by the letter ?T?, the time of the day when the sale starts (in Greenwich Mean Time, GMT), followed by an expression of the time zone for the sale. The end date is in the same format. */
		effectiveDates: FormControl<string | null | undefined>,

		/** Optional. The text code that corresponds to the promotion when applied on the retailer?s website. */
		genericRedemptionCode: FormControl<string | null | undefined>,

		/** The unique ID of the promotion. */
		id: FormControl<string | null | undefined>,

		/** The full title of the promotion. */
		longTitle: FormControl<string | null | undefined>,

		/** Whether the promotion is applicable to all products or only specific products. Acceptable values are: - "`allProducts`" - "`specificProducts`" */
		productApplicability: FormControl<string | null | undefined>,

		/** Indicates that the promotion is valid online. Acceptable values are: - "`online`" */
		redemptionChannel: FormControl<string | null | undefined>,
	}
	export function CreateOrderLegacyPromotionFormGroup() {
		return new FormGroup<OrderLegacyPromotionFormProperties>({
			effectiveDates: new FormControl<string | null | undefined>(undefined),
			genericRedemptionCode: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			longTitle: new FormControl<string | null | undefined>(undefined),
			productApplicability: new FormControl<string | null | undefined>(undefined),
			redemptionChannel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderLegacyPromotionBenefit {
		discount?: Price;

		/** The OfferId(s) that were purchased in this order and map to this specific benefit of the promotion. */
		offerIds?: Array<string>;

		/** Further describes the benefit of the promotion. Note that we will expand on this enumeration as we support new promotion sub-types. Acceptable values are: - "`buyMGetMoneyOff`" - "`buyMGetNMoneyOff`" - "`buyMGetNPercentOff`" - "`buyMGetPercentOff`" - "`freeGift`" - "`freeGiftWithItemId`" - "`freeGiftWithValue`" - "`freeOvernightShipping`" - "`freeShipping`" - "`freeTwoDayShipping`" - "`moneyOff`" - "`percentageOff`" - "`rewardPoints`" - "`salePrice`" */
		subType?: string | null;
		taxImpact?: Price;

		/** Describes whether the promotion applies to products (e.g. 20% off) or to shipping (e.g. Free Shipping). Acceptable values are: - "`product`" - "`shipping`" */
		type?: string | null;
	}
	export interface OrderLegacyPromotionBenefitFormProperties {

		/** Further describes the benefit of the promotion. Note that we will expand on this enumeration as we support new promotion sub-types. Acceptable values are: - "`buyMGetMoneyOff`" - "`buyMGetNMoneyOff`" - "`buyMGetNPercentOff`" - "`buyMGetPercentOff`" - "`freeGift`" - "`freeGiftWithItemId`" - "`freeGiftWithValue`" - "`freeOvernightShipping`" - "`freeShipping`" - "`freeTwoDayShipping`" - "`moneyOff`" - "`percentageOff`" - "`rewardPoints`" - "`salePrice`" */
		subType: FormControl<string | null | undefined>,

		/** Describes whether the promotion applies to products (e.g. 20% off) or to shipping (e.g. Free Shipping). Acceptable values are: - "`product`" - "`shipping`" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateOrderLegacyPromotionBenefitFormGroup() {
		return new FormGroup<OrderLegacyPromotionBenefitFormProperties>({
			subType: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderRefund {

		/** The actor that created the refund. Acceptable values are: - "`customer`" - "`googleBot`" - "`googleCustomerService`" - "`googlePayments`" - "`googleSabre`" - "`merchant`" */
		actor?: string | null;
		amount?: Price;

		/** Date on which the item has been created, in ISO 8601 format. */
		creationDate?: string | null;

		/** The reason for the refund. Acceptable values are: - "`adjustment`" - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`customerSupportRequested`" - "`deliveredLateByCarrier`" - "`deliveredTooLate`" - "`expiredItem`" - "`failToPushOrderGoogleError`" - "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" - "`failToPushOrderToMerchantOutOfStock`" - "`feeAdjustment`" - "`invalidCoupon`" - "`lateShipmentCredit`" - "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" - "`priceAdjustment`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`promoReallocation`" - "`qualityNotAsExpected`" - "`returnRefundAbuse`" - "`shippingCostAdjustment`" - "`shippingPriceError`" - "`taxAdjustment`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrderRefundFormProperties {

		/** The actor that created the refund. Acceptable values are: - "`customer`" - "`googleBot`" - "`googleCustomerService`" - "`googlePayments`" - "`googleSabre`" - "`merchant`" */
		actor: FormControl<string | null | undefined>,

		/** Date on which the item has been created, in ISO 8601 format. */
		creationDate: FormControl<string | null | undefined>,

		/** The reason for the refund. Acceptable values are: - "`adjustment`" - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`customerSupportRequested`" - "`deliveredLateByCarrier`" - "`deliveredTooLate`" - "`expiredItem`" - "`failToPushOrderGoogleError`" - "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" - "`failToPushOrderToMerchantOutOfStock`" - "`feeAdjustment`" - "`invalidCoupon`" - "`lateShipmentCredit`" - "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" - "`priceAdjustment`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`promoReallocation`" - "`qualityNotAsExpected`" - "`returnRefundAbuse`" - "`shippingCostAdjustment`" - "`shippingPriceError`" - "`taxAdjustment`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrderRefundFormGroup() {
		return new FormGroup<OrderRefundFormProperties>({
			actor: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderShipment {

		/** The carrier handling the shipment. For supported carriers, Google includes the carrier name and tracking URL in emails to customers. For select supported carriers, Google also automatically updates the shipment status based on the provided shipment ID. *Note:* You can also use unsupported carriers, but emails to customers will not include the carrier name or tracking URL, and there will be no automatic order status updates. Supported carriers for US are: - "`ups`" (United Parcel Service) *automatic status updates* - "`usps`" (United States Postal Service) *automatic status updates* - "`fedex`" (FedEx) *automatic status updates * - "`dhl`" (DHL eCommerce) *automatic status updates* (US only) - "`ontrac`" (OnTrac) *automatic status updates * - "`dhl express`" (DHL Express) - "`deliv`" (Deliv) - "`dynamex`" (TForce) - "`lasership`" (LaserShip) - "`mpx`" (Military Parcel Xpress) - "`uds`" (United Delivery Service) - "`efw`" (Estes Forwarding Worldwide) - "`jd logistics`" (JD Logistics) - "`yunexpress`" (YunExpress) - "`china post`" (China Post) - "`china ems`" (China Post Express Mail Service) - "`singapore post`" (Singapore Post) - "`pos malaysia`" (Pos Malaysia) - "`postnl`" (PostNL) - "`ptt`" (PTT Turkish Post) - "`eub`" (ePacket) - "`chukou1`" (Chukou1 Logistics) - "`bestex`" (Best Express) - "`canada post`" (Canada Post) - "`purolator`" (Purolator) - "`canpar`" (Canpar) - "`india post`" (India Post) - "`blue dart`" (Blue Dart) - "`delhivery`" (Delhivery) - "`dtdc`" (DTDC) - "`tpc india`" (TPC India) Supported carriers for FR are: - "`la poste`" (La Poste) *automatic status updates * - "`colissimo`" (Colissimo by La Poste) *automatic status updates* - "`ups`" (United Parcel Service) *automatic status updates * - "`chronopost`" (Chronopost by La Poste) - "`gls`" (General Logistics Systems France) - "`dpd`" (DPD Group by GeoPost) - "`bpost`" (Belgian Post Group) - "`colis prive`" (Colis Privé) - "`boxtal`" (Boxtal) - "`geodis`" (GEODIS) - "`tnt`" (TNT) - "`db schenker`" (DB Schenker) - "`aramex`" (Aramex) */
		carrier?: string | null;

		/** Date on which the shipment has been created, in ISO 8601 format. */
		creationDate?: string | null;

		/** Date on which the shipment has been delivered, in ISO 8601 format. Present only if `status` is `delivered` */
		deliveryDate?: string | null;

		/** The ID of the shipment. */
		id?: string | null;

		/** The line items that are shipped. */
		lineItems?: Array<OrderShipmentLineItemShipment>;
		scheduledDeliveryDetails?: OrderShipmentScheduledDeliveryDetails;

		/** The status of the shipment. Acceptable values are: - "`delivered`" - "`readyForPickup`" - "`shipped`" - "`undeliverable`" */
		status?: string | null;

		/** The tracking ID for the shipment. */
		trackingId?: string | null;
	}
	export interface OrderShipmentFormProperties {

		/** The carrier handling the shipment. For supported carriers, Google includes the carrier name and tracking URL in emails to customers. For select supported carriers, Google also automatically updates the shipment status based on the provided shipment ID. *Note:* You can also use unsupported carriers, but emails to customers will not include the carrier name or tracking URL, and there will be no automatic order status updates. Supported carriers for US are: - "`ups`" (United Parcel Service) *automatic status updates* - "`usps`" (United States Postal Service) *automatic status updates* - "`fedex`" (FedEx) *automatic status updates * - "`dhl`" (DHL eCommerce) *automatic status updates* (US only) - "`ontrac`" (OnTrac) *automatic status updates * - "`dhl express`" (DHL Express) - "`deliv`" (Deliv) - "`dynamex`" (TForce) - "`lasership`" (LaserShip) - "`mpx`" (Military Parcel Xpress) - "`uds`" (United Delivery Service) - "`efw`" (Estes Forwarding Worldwide) - "`jd logistics`" (JD Logistics) - "`yunexpress`" (YunExpress) - "`china post`" (China Post) - "`china ems`" (China Post Express Mail Service) - "`singapore post`" (Singapore Post) - "`pos malaysia`" (Pos Malaysia) - "`postnl`" (PostNL) - "`ptt`" (PTT Turkish Post) - "`eub`" (ePacket) - "`chukou1`" (Chukou1 Logistics) - "`bestex`" (Best Express) - "`canada post`" (Canada Post) - "`purolator`" (Purolator) - "`canpar`" (Canpar) - "`india post`" (India Post) - "`blue dart`" (Blue Dart) - "`delhivery`" (Delhivery) - "`dtdc`" (DTDC) - "`tpc india`" (TPC India) Supported carriers for FR are: - "`la poste`" (La Poste) *automatic status updates * - "`colissimo`" (Colissimo by La Poste) *automatic status updates* - "`ups`" (United Parcel Service) *automatic status updates * - "`chronopost`" (Chronopost by La Poste) - "`gls`" (General Logistics Systems France) - "`dpd`" (DPD Group by GeoPost) - "`bpost`" (Belgian Post Group) - "`colis prive`" (Colis Privé) - "`boxtal`" (Boxtal) - "`geodis`" (GEODIS) - "`tnt`" (TNT) - "`db schenker`" (DB Schenker) - "`aramex`" (Aramex) */
		carrier: FormControl<string | null | undefined>,

		/** Date on which the shipment has been created, in ISO 8601 format. */
		creationDate: FormControl<string | null | undefined>,

		/** Date on which the shipment has been delivered, in ISO 8601 format. Present only if `status` is `delivered` */
		deliveryDate: FormControl<string | null | undefined>,

		/** The ID of the shipment. */
		id: FormControl<string | null | undefined>,

		/** The status of the shipment. Acceptable values are: - "`delivered`" - "`readyForPickup`" - "`shipped`" - "`undeliverable`" */
		status: FormControl<string | null | undefined>,

		/** The tracking ID for the shipment. */
		trackingId: FormControl<string | null | undefined>,
	}
	export function CreateOrderShipmentFormGroup() {
		return new FormGroup<OrderShipmentFormProperties>({
			carrier: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<string | null | undefined>(undefined),
			deliveryDate: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderShipmentLineItemShipment {

		/** The ID of the line item that is shipped. This value is assigned by Google when an order is created. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the product to ship. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity that is shipped. */
		quantity?: number | null;
	}
	export interface OrderShipmentLineItemShipmentFormProperties {

		/** The ID of the line item that is shipped. This value is assigned by Google when an order is created. Either lineItemId or productId is required. */
		lineItemId: FormControl<string | null | undefined>,

		/** The ID of the product to ship. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId: FormControl<string | null | undefined>,

		/** The quantity that is shipped. */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateOrderShipmentLineItemShipmentFormGroup() {
		return new FormGroup<OrderShipmentLineItemShipmentFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OrderShipmentScheduledDeliveryDetails {

		/** The phone number of the carrier fulfilling the delivery. The phone number is formatted as the international notation in ITU-T Recommendation E.123 (e.g., "+41 44 668 1800"). */
		carrierPhoneNumber?: string | null;

		/** The date a shipment is scheduled for delivery, in ISO 8601 format. */
		scheduledDate?: string | null;
	}
	export interface OrderShipmentScheduledDeliveryDetailsFormProperties {

		/** The phone number of the carrier fulfilling the delivery. The phone number is formatted as the international notation in ITU-T Recommendation E.123 (e.g., "+41 44 668 1800"). */
		carrierPhoneNumber: FormControl<string | null | undefined>,

		/** The date a shipment is scheduled for delivery, in ISO 8601 format. */
		scheduledDate: FormControl<string | null | undefined>,
	}
	export function CreateOrderShipmentScheduledDeliveryDetailsFormGroup() {
		return new FormGroup<OrderShipmentScheduledDeliveryDetailsFormProperties>({
			carrierPhoneNumber: new FormControl<string | null | undefined>(undefined),
			scheduledDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Order disbursement. All methods require the payment analyst role. */
	export interface OrderReportDisbursement {
		disbursementAmount?: Price;

		/** The disbursement date, in ISO 8601 format. */
		disbursementCreationDate?: string | null;

		/** The date the disbursement was initiated, in ISO 8601 format. */
		disbursementDate?: string | null;

		/** The ID of the disbursement. */
		disbursementId?: string | null;

		/** The ID of the managing account. */
		merchantId?: string | null;
	}

	/** Order disbursement. All methods require the payment analyst role. */
	export interface OrderReportDisbursementFormProperties {

		/** The disbursement date, in ISO 8601 format. */
		disbursementCreationDate: FormControl<string | null | undefined>,

		/** The date the disbursement was initiated, in ISO 8601 format. */
		disbursementDate: FormControl<string | null | undefined>,

		/** The ID of the disbursement. */
		disbursementId: FormControl<string | null | undefined>,

		/** The ID of the managing account. */
		merchantId: FormControl<string | null | undefined>,
	}
	export function CreateOrderReportDisbursementFormGroup() {
		return new FormGroup<OrderReportDisbursementFormProperties>({
			disbursementCreationDate: new FormControl<string | null | undefined>(undefined),
			disbursementDate: new FormControl<string | null | undefined>(undefined),
			disbursementId: new FormControl<string | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderReportTransaction {
		disbursementAmount?: Price;

		/** The date the disbursement was created, in ISO 8601 format. */
		disbursementCreationDate?: string | null;

		/** The date the disbursement was initiated, in ISO 8601 format. */
		disbursementDate?: string | null;

		/** The ID of the disbursement. */
		disbursementId?: string | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/** Merchant-provided ID of the order. */
		merchantOrderId?: string | null;

		/** The ID of the order. */
		orderId?: string | null;
		productAmount?: Amount;
		productAmountWithRemittedTax?: ProductAmount;

		/** The date of the transaction, in ISO 8601 format. */
		transactionDate?: string | null;
	}
	export interface OrderReportTransactionFormProperties {

		/** The date the disbursement was created, in ISO 8601 format. */
		disbursementCreationDate: FormControl<string | null | undefined>,

		/** The date the disbursement was initiated, in ISO 8601 format. */
		disbursementDate: FormControl<string | null | undefined>,

		/** The ID of the disbursement. */
		disbursementId: FormControl<string | null | undefined>,

		/** The ID of the managing account. */
		merchantId: FormControl<string | null | undefined>,

		/** Merchant-provided ID of the order. */
		merchantOrderId: FormControl<string | null | undefined>,

		/** The ID of the order. */
		orderId: FormControl<string | null | undefined>,

		/** The date of the transaction, in ISO 8601 format. */
		transactionDate: FormControl<string | null | undefined>,
	}
	export function CreateOrderReportTransactionFormGroup() {
		return new FormGroup<OrderReportTransactionFormProperties>({
			disbursementCreationDate: new FormControl<string | null | undefined>(undefined),
			disbursementDate: new FormControl<string | null | undefined>(undefined),
			disbursementId: new FormControl<string | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			merchantOrderId: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			transactionDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductAmount {
		priceAmount?: Price;
		remittedTaxAmount?: Price;
		taxAmount?: Price;
	}
	export interface ProductAmountFormProperties {
	}
	export function CreateProductAmountFormGroup() {
		return new FormGroup<ProductAmountFormProperties>({
		});

	}

	export interface OrderinvoicesCreateChargeInvoiceRequest {

		/** [required] The ID of the invoice. */
		invoiceId?: string | null;
		invoiceSummary?: InvoiceSummary;

		/** [required] Invoice details per line item. */
		lineItemInvoices?: Array<ShipmentInvoiceLineItemInvoice>;

		/** [required] The ID of the operation, unique across all operations for a given order. */
		operationId?: string | null;

		/** [required] ID of the shipment group. It is assigned by the merchant in the `shipLineItems` method and is used to group multiple line items that have the same kind of shipping charges. */
		shipmentGroupId?: string | null;
	}
	export interface OrderinvoicesCreateChargeInvoiceRequestFormProperties {

		/** [required] The ID of the invoice. */
		invoiceId: FormControl<string | null | undefined>,

		/** [required] The ID of the operation, unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,

		/** [required] ID of the shipment group. It is assigned by the merchant in the `shipLineItems` method and is used to group multiple line items that have the same kind of shipping charges. */
		shipmentGroupId: FormControl<string | null | undefined>,
	}
	export function CreateOrderinvoicesCreateChargeInvoiceRequestFormGroup() {
		return new FormGroup<OrderinvoicesCreateChargeInvoiceRequestFormProperties>({
			invoiceId: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			shipmentGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShipmentInvoiceLineItemInvoice {

		/** ID of the line item. Either lineItemId or productId must be set. */
		lineItemId?: string | null;

		/** ID of the product. This is the REST ID used in the products service. Either lineItemId or productId must be set. */
		productId?: string | null;

		/** [required] The shipment unit ID is assigned by the merchant and defines individual quantities within a line item. The same ID can be assigned to units that are the same while units that differ must be assigned a different ID (for example: free or promotional units). */
		shipmentUnitIds?: Array<string>;
		unitInvoice?: UnitInvoice;
	}
	export interface ShipmentInvoiceLineItemInvoiceFormProperties {

		/** ID of the line item. Either lineItemId or productId must be set. */
		lineItemId: FormControl<string | null | undefined>,

		/** ID of the product. This is the REST ID used in the products service. Either lineItemId or productId must be set. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateShipmentInvoiceLineItemInvoiceFormGroup() {
		return new FormGroup<ShipmentInvoiceLineItemInvoiceFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnitInvoice {

		/** Additional charges for a unit, e.g. shipping costs. */
		additionalCharges?: Array<UnitInvoiceAdditionalCharge>;

		/** Deprecated. */
		promotions?: Array<Promotion>;
		unitPricePretax?: Price;

		/** Tax amounts to apply to the unit price. */
		unitPriceTaxes?: Array<UnitInvoiceTaxLine>;
	}
	export interface UnitInvoiceFormProperties {
	}
	export function CreateUnitInvoiceFormGroup() {
		return new FormGroup<UnitInvoiceFormProperties>({
		});

	}

	export interface UnitInvoiceAdditionalCharge {
		additionalChargeAmount?: Amount;

		/** Deprecated. */
		additionalChargePromotions?: Array<Promotion>;

		/** [required] Type of the additional charge. Acceptable values are: - "`shipping`" */
		type?: string | null;
	}
	export interface UnitInvoiceAdditionalChargeFormProperties {

		/** [required] Type of the additional charge. Acceptable values are: - "`shipping`" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateUnitInvoiceAdditionalChargeFormGroup() {
		return new FormGroup<UnitInvoiceAdditionalChargeFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnitInvoiceTaxLine {
		taxAmount?: Price;

		/** Optional name of the tax type. This should only be provided if `taxType` is `otherFeeTax`. */
		taxName?: string | null;

		/** [required] Type of the tax. Acceptable values are: - "`otherFee`" - "`otherFeeTax`" - "`sales`" */
		taxType?: string | null;
	}
	export interface UnitInvoiceTaxLineFormProperties {

		/** Optional name of the tax type. This should only be provided if `taxType` is `otherFeeTax`. */
		taxName: FormControl<string | null | undefined>,

		/** [required] Type of the tax. Acceptable values are: - "`otherFee`" - "`otherFeeTax`" - "`sales`" */
		taxType: FormControl<string | null | undefined>,
	}
	export function CreateUnitInvoiceTaxLineFormGroup() {
		return new FormGroup<UnitInvoiceTaxLineFormProperties>({
			taxName: new FormControl<string | null | undefined>(undefined),
			taxType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderinvoicesCreateChargeInvoiceResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#orderinvoicesCreateChargeInvoiceResponse". */
		kind?: string | null;
	}
	export interface OrderinvoicesCreateChargeInvoiceResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "content#orderinvoicesCreateChargeInvoiceResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrderinvoicesCreateChargeInvoiceResponseFormGroup() {
		return new FormGroup<OrderinvoicesCreateChargeInvoiceResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderinvoicesCreateRefundInvoiceRequest {

		/** [required] The ID of the invoice. */
		invoiceId?: string | null;

		/** [required] The ID of the operation, unique across all operations for a given order. */
		operationId?: string | null;
		refundOnlyOption?: OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption;
		returnOption?: OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption;

		/** Invoice details for different shipment groups. */
		shipmentInvoices?: Array<ShipmentInvoice>;
	}
	export interface OrderinvoicesCreateRefundInvoiceRequestFormProperties {

		/** [required] The ID of the invoice. */
		invoiceId: FormControl<string | null | undefined>,

		/** [required] The ID of the operation, unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,
	}
	export function CreateOrderinvoicesCreateRefundInvoiceRequestFormGroup() {
		return new FormGroup<OrderinvoicesCreateRefundInvoiceRequestFormProperties>({
			invoiceId: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption {

		/** Optional description of the refund reason. */
		description?: string | null;

		/** [required] Reason for the refund. Acceptable values are: - "`adjustment`" - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`customerSupportRequested`" - "`deliveredLateByCarrier`" - "`deliveredTooLate`" - "`expiredItem`" - "`failToPushOrderGoogleError`" - "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" - "`failToPushOrderToMerchantOutOfStock`" - "`feeAdjustment`" - "`invalidCoupon`" - "`lateShipmentCredit`" - "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" - "`priceAdjustment`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`promoReallocation`" - "`qualityNotAsExpected`" - "`returnRefundAbuse`" - "`shippingCostAdjustment`" - "`shippingPriceError`" - "`taxAdjustment`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason?: string | null;
	}
	export interface OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOptionFormProperties {

		/** Optional description of the refund reason. */
		description: FormControl<string | null | undefined>,

		/** [required] Reason for the refund. Acceptable values are: - "`adjustment`" - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`customerSupportRequested`" - "`deliveredLateByCarrier`" - "`deliveredTooLate`" - "`expiredItem`" - "`failToPushOrderGoogleError`" - "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" - "`failToPushOrderToMerchantOutOfStock`" - "`feeAdjustment`" - "`invalidCoupon`" - "`lateShipmentCredit`" - "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" - "`priceAdjustment`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`promoReallocation`" - "`qualityNotAsExpected`" - "`returnRefundAbuse`" - "`shippingCostAdjustment`" - "`shippingPriceError`" - "`taxAdjustment`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateOrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOptionFormGroup() {
		return new FormGroup<OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOptionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption {

		/** Optional description of the return reason. */
		description?: string | null;

		/** [required] Reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason?: string | null;
	}
	export interface OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOptionFormProperties {

		/** Optional description of the return reason. */
		description: FormControl<string | null | undefined>,

		/** [required] Reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateOrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOptionFormGroup() {
		return new FormGroup<OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOptionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShipmentInvoice {
		invoiceSummary?: InvoiceSummary;

		/** [required] Invoice details per line item. */
		lineItemInvoices?: Array<ShipmentInvoiceLineItemInvoice>;

		/** [required] ID of the shipment group. It is assigned by the merchant in the `shipLineItems` method and is used to group multiple line items that have the same kind of shipping charges. */
		shipmentGroupId?: string | null;
	}
	export interface ShipmentInvoiceFormProperties {

		/** [required] ID of the shipment group. It is assigned by the merchant in the `shipLineItems` method and is used to group multiple line items that have the same kind of shipping charges. */
		shipmentGroupId: FormControl<string | null | undefined>,
	}
	export function CreateShipmentInvoiceFormGroup() {
		return new FormGroup<ShipmentInvoiceFormProperties>({
			shipmentGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderinvoicesCreateRefundInvoiceResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#orderinvoicesCreateRefundInvoiceResponse". */
		kind?: string | null;
	}
	export interface OrderinvoicesCreateRefundInvoiceResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "content#orderinvoicesCreateRefundInvoiceResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrderinvoicesCreateRefundInvoiceResponseFormGroup() {
		return new FormGroup<OrderinvoicesCreateRefundInvoiceResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderreportsListDisbursementsResponse {

		/** The list of disbursements. */
		disbursements?: Array<OrderReportDisbursement>;

		/** Identifies what kind of resource this is. Value: the fixed string "content#orderreportsListDisbursementsResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of disbursements. */
		nextPageToken?: string | null;
	}
	export interface OrderreportsListDisbursementsResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#orderreportsListDisbursementsResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token for the retrieval of the next page of disbursements. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateOrderreportsListDisbursementsResponseFormGroup() {
		return new FormGroup<OrderreportsListDisbursementsResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderreportsListTransactionsResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#orderreportsListTransactionsResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of transactions. */
		nextPageToken?: string | null;

		/** The list of transactions. */
		transactions?: Array<OrderReportTransaction>;
	}
	export interface OrderreportsListTransactionsResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#orderreportsListTransactionsResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token for the retrieval of the next page of transactions. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateOrderreportsListTransactionsResponseFormGroup() {
		return new FormGroup<OrderreportsListTransactionsResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderreturnsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#orderreturnsListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of returns. */
		nextPageToken?: string | null;
		resources?: Array<MerchantOrderReturn>;
	}
	export interface OrderreturnsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#orderreturnsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token for the retrieval of the next page of returns. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateOrderreturnsListResponseFormGroup() {
		return new FormGroup<OrderreturnsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersAcknowledgeRequest {

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;
	}
	export interface OrdersAcknowledgeRequestFormProperties {

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,
	}
	export function CreateOrdersAcknowledgeRequestFormGroup() {
		return new FormGroup<OrdersAcknowledgeRequestFormProperties>({
			operationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersAcknowledgeResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersAcknowledgeResponse". */
		kind?: string | null;
	}
	export interface OrdersAcknowledgeResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersAcknowledgeResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersAcknowledgeResponseFormGroup() {
		return new FormGroup<OrdersAcknowledgeResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersAdvanceTestOrderResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersAdvanceTestOrderResponse". */
		kind?: string | null;
	}
	export interface OrdersAdvanceTestOrderResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersAdvanceTestOrderResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersAdvanceTestOrderResponseFormGroup() {
		return new FormGroup<OrdersAdvanceTestOrderResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCancelLineItemRequest {
		amount?: Price;
		amountPretax?: Price;
		amountTax?: Price;

		/** The ID of the line item to cancel. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to cancel. */
		quantity?: number | null;

		/** The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrdersCancelLineItemRequestFormProperties {

		/** The ID of the line item to cancel. Either lineItemId or productId is required. */
		lineItemId: FormControl<string | null | undefined>,

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,

		/** The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId: FormControl<string | null | undefined>,

		/** The quantity to cancel. */
		quantity: FormControl<number | null | undefined>,

		/** The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCancelLineItemRequestFormGroup() {
		return new FormGroup<OrdersCancelLineItemRequestFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCancelLineItemResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelLineItemResponse". */
		kind?: string | null;
	}
	export interface OrdersCancelLineItemResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelLineItemResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCancelLineItemResponseFormGroup() {
		return new FormGroup<OrdersCancelLineItemResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCancelRequest {

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrdersCancelRequestFormProperties {

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,

		/** The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCancelRequestFormGroup() {
		return new FormGroup<OrdersCancelRequestFormProperties>({
			operationId: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCancelResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelResponse". */
		kind?: string | null;
	}
	export interface OrdersCancelResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCancelResponseFormGroup() {
		return new FormGroup<OrdersCancelResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCancelTestOrderByCustomerRequest {

		/** The reason for the cancellation. Acceptable values are: - "`changedMind`" - "`orderedWrongItem`" - "`other`" */
		reason?: string | null;
	}
	export interface OrdersCancelTestOrderByCustomerRequestFormProperties {

		/** The reason for the cancellation. Acceptable values are: - "`changedMind`" - "`orderedWrongItem`" - "`other`" */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCancelTestOrderByCustomerRequestFormGroup() {
		return new FormGroup<OrdersCancelTestOrderByCustomerRequestFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCancelTestOrderByCustomerResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelTestOrderByCustomerResponse". */
		kind?: string | null;
	}
	export interface OrdersCancelTestOrderByCustomerResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelTestOrderByCustomerResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCancelTestOrderByCustomerResponseFormGroup() {
		return new FormGroup<OrdersCancelTestOrderByCustomerResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCreateTestOrderRequest {

		/** The CLDR territory code of the country of the test order to create. Affects the currency and addresses of orders created via `template_name`, or the addresses of orders created via `test_order`. Acceptable values are: - "`US`" - "`FR`" Defaults to `US`. */
		country?: string | null;

		/** The test order template to use. Specify as an alternative to `testOrder` as a shortcut for retrieving a template and then creating an order using that template. Acceptable values are: - "`template1`" - "`template1a`" - "`template1b`" - "`template2`" - "`template3`" */
		templateName?: string | null;
		testOrder?: TestOrder;
	}
	export interface OrdersCreateTestOrderRequestFormProperties {

		/** The CLDR territory code of the country of the test order to create. Affects the currency and addresses of orders created via `template_name`, or the addresses of orders created via `test_order`. Acceptable values are: - "`US`" - "`FR`" Defaults to `US`. */
		country: FormControl<string | null | undefined>,

		/** The test order template to use. Specify as an alternative to `testOrder` as a shortcut for retrieving a template and then creating an order using that template. Acceptable values are: - "`template1`" - "`template1a`" - "`template1b`" - "`template2`" - "`template3`" */
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCreateTestOrderRequestFormGroup() {
		return new FormGroup<OrdersCreateTestOrderRequestFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestOrder {
		customer?: TestOrderCustomer;

		/** Whether the orderinvoices service should support this order. */
		enableOrderinvoices?: boolean | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#testOrder`" */
		kind?: string | null;

		/** Required. Line items that are ordered. At least one line item must be provided. */
		lineItems?: Array<TestOrderLineItem>;

		/** Restricted. Do not use. */
		notificationMode?: string | null;
		paymentMethod?: TestOrderPaymentMethod;

		/** Required. Identifier of one of the predefined delivery addresses for the delivery. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" */
		predefinedDeliveryAddress?: string | null;

		/** Identifier of one of the predefined pickup details. Required for orders containing line items with shipping type `pickup`. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" */
		predefinedPickupDetails?: string | null;

		/** Deprecated. Ignored if provided. */
		promotions?: Array<OrderLegacyPromotion>;
		shippingCost?: Price;
		shippingCostTax?: Price;

		/** Required. The requested shipping option. Acceptable values are: - "`economy`" - "`expedited`" - "`oneDay`" - "`sameDay`" - "`standard`" - "`twoDay`" */
		shippingOption?: string | null;
	}
	export interface TestOrderFormProperties {

		/** Whether the orderinvoices service should support this order. */
		enableOrderinvoices: FormControl<boolean | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#testOrder`" */
		kind: FormControl<string | null | undefined>,

		/** Restricted. Do not use. */
		notificationMode: FormControl<string | null | undefined>,

		/** Required. Identifier of one of the predefined delivery addresses for the delivery. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" */
		predefinedDeliveryAddress: FormControl<string | null | undefined>,

		/** Identifier of one of the predefined pickup details. Required for orders containing line items with shipping type `pickup`. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" */
		predefinedPickupDetails: FormControl<string | null | undefined>,

		/** Required. The requested shipping option. Acceptable values are: - "`economy`" - "`expedited`" - "`oneDay`" - "`sameDay`" - "`standard`" - "`twoDay`" */
		shippingOption: FormControl<string | null | undefined>,
	}
	export function CreateTestOrderFormGroup() {
		return new FormGroup<TestOrderFormProperties>({
			enableOrderinvoices: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			notificationMode: new FormControl<string | null | undefined>(undefined),
			predefinedDeliveryAddress: new FormControl<string | null | undefined>(undefined),
			predefinedPickupDetails: new FormControl<string | null | undefined>(undefined),
			shippingOption: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestOrderCustomer {

		/** Required. Email address of the customer. Acceptable values are: - "`pog.dwight.schrute@gmail.com`" - "`pog.jim.halpert@gmail.com`" - "`penpog.pam.beesly@gmail.comding`" */
		email?: string | null;

		/** Deprecated. Please use marketingRightsInfo instead. */
		explicitMarketingPreference?: boolean | null;

		/** Full name of the customer. */
		fullName?: string | null;
		marketingRightsInfo?: TestOrderCustomerMarketingRightsInfo;
	}
	export interface TestOrderCustomerFormProperties {

		/** Required. Email address of the customer. Acceptable values are: - "`pog.dwight.schrute@gmail.com`" - "`pog.jim.halpert@gmail.com`" - "`penpog.pam.beesly@gmail.comding`" */
		email: FormControl<string | null | undefined>,

		/** Deprecated. Please use marketingRightsInfo instead. */
		explicitMarketingPreference: FormControl<boolean | null | undefined>,

		/** Full name of the customer. */
		fullName: FormControl<string | null | undefined>,
	}
	export function CreateTestOrderCustomerFormGroup() {
		return new FormGroup<TestOrderCustomerFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			explicitMarketingPreference: new FormControl<boolean | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestOrderCustomerMarketingRightsInfo {

		/** Last know user use selection regards marketing preferences. In certain cases selection might not be known, so this field would be empty. Acceptable values are: - "`denied`" - "`granted`" */
		explicitMarketingPreference?: string | null;

		/** Timestamp when last time marketing preference was updated. Could be empty, if user wasn't offered a selection yet. */
		lastUpdatedTimestamp?: string | null;
	}
	export interface TestOrderCustomerMarketingRightsInfoFormProperties {

		/** Last know user use selection regards marketing preferences. In certain cases selection might not be known, so this field would be empty. Acceptable values are: - "`denied`" - "`granted`" */
		explicitMarketingPreference: FormControl<string | null | undefined>,

		/** Timestamp when last time marketing preference was updated. Could be empty, if user wasn't offered a selection yet. */
		lastUpdatedTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateTestOrderCustomerMarketingRightsInfoFormGroup() {
		return new FormGroup<TestOrderCustomerMarketingRightsInfoFormProperties>({
			explicitMarketingPreference: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestOrderLineItem {
		product?: TestOrderLineItemProduct;

		/** Required. Number of items ordered. */
		quantityOrdered?: number | null;
		returnInfo?: OrderLineItemReturnInfo;
		shippingDetails?: OrderLineItemShippingDetails;
		unitTax?: Price;
	}
	export interface TestOrderLineItemFormProperties {

		/** Required. Number of items ordered. */
		quantityOrdered: FormControl<number | null | undefined>,
	}
	export function CreateTestOrderLineItemFormGroup() {
		return new FormGroup<TestOrderLineItemFormProperties>({
			quantityOrdered: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TestOrderLineItemProduct {

		/** Required. Brand of the item. */
		brand?: string | null;

		/** Deprecated. Acceptable values are: - "`online`" */
		channel?: string | null;

		/** Required. Condition or state of the item. Acceptable values are: - "`new`" */
		condition?: string | null;

		/** Required. The two-letter ISO 639-1 language code for the item. Acceptable values are: - "`en`" - "`fr`" */
		contentLanguage?: string | null;

		/** Fees for the item. Optional. */
		fees?: Array<OrderLineItemProductFee>;

		/** Global Trade Item Number (GTIN) of the item. Optional. */
		gtin?: string | null;

		/** Required. URL of an image of the item. */
		imageLink?: string | null;

		/** Shared identifier for all variants of the same product. Optional. */
		itemGroupId?: string | null;

		/** Manufacturer Part Number (MPN) of the item. Optional. */
		mpn?: string | null;

		/** Required. An identifier of the item. */
		offerId?: string | null;
		price?: Price;

		/** Required. The CLDR territory // code of the target country of the product. */
		targetCountry?: string | null;

		/** Required. The title of the product. */
		title?: string | null;

		/** Variant attributes for the item. Optional. */
		variantAttributes?: Array<OrderLineItemProductVariantAttribute>;
	}
	export interface TestOrderLineItemProductFormProperties {

		/** Required. Brand of the item. */
		brand: FormControl<string | null | undefined>,

		/** Deprecated. Acceptable values are: - "`online`" */
		channel: FormControl<string | null | undefined>,

		/** Required. Condition or state of the item. Acceptable values are: - "`new`" */
		condition: FormControl<string | null | undefined>,

		/** Required. The two-letter ISO 639-1 language code for the item. Acceptable values are: - "`en`" - "`fr`" */
		contentLanguage: FormControl<string | null | undefined>,

		/** Global Trade Item Number (GTIN) of the item. Optional. */
		gtin: FormControl<string | null | undefined>,

		/** Required. URL of an image of the item. */
		imageLink: FormControl<string | null | undefined>,

		/** Shared identifier for all variants of the same product. Optional. */
		itemGroupId: FormControl<string | null | undefined>,

		/** Manufacturer Part Number (MPN) of the item. Optional. */
		mpn: FormControl<string | null | undefined>,

		/** Required. An identifier of the item. */
		offerId: FormControl<string | null | undefined>,

		/** Required. The CLDR territory // code of the target country of the product. */
		targetCountry: FormControl<string | null | undefined>,

		/** Required. The title of the product. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateTestOrderLineItemProductFormGroup() {
		return new FormGroup<TestOrderLineItemProductFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined),
			channel: new FormControl<string | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			contentLanguage: new FormControl<string | null | undefined>(undefined),
			gtin: new FormControl<string | null | undefined>(undefined),
			imageLink: new FormControl<string | null | undefined>(undefined),
			itemGroupId: new FormControl<string | null | undefined>(undefined),
			mpn: new FormControl<string | null | undefined>(undefined),
			offerId: new FormControl<string | null | undefined>(undefined),
			targetCountry: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestOrderPaymentMethod {

		/** The card expiration month (January = 1, February = 2 etc.). */
		expirationMonth?: number | null;

		/** The card expiration year (4-digit, e.g. 2015). */
		expirationYear?: number | null;

		/** The last four digits of the card number. */
		lastFourDigits?: string | null;

		/** The billing address. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" */
		predefinedBillingAddress?: string | null;

		/** The type of instrument. Note that real orders might have different values than the four values accepted by `createTestOrder`. Acceptable values are: - "`AMEX`" - "`DISCOVER`" - "`MASTERCARD`" - "`VISA`" */
		type?: string | null;
	}
	export interface TestOrderPaymentMethodFormProperties {

		/** The card expiration month (January = 1, February = 2 etc.). */
		expirationMonth: FormControl<number | null | undefined>,

		/** The card expiration year (4-digit, e.g. 2015). */
		expirationYear: FormControl<number | null | undefined>,

		/** The last four digits of the card number. */
		lastFourDigits: FormControl<string | null | undefined>,

		/** The billing address. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" */
		predefinedBillingAddress: FormControl<string | null | undefined>,

		/** The type of instrument. Note that real orders might have different values than the four values accepted by `createTestOrder`. Acceptable values are: - "`AMEX`" - "`DISCOVER`" - "`MASTERCARD`" - "`VISA`" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTestOrderPaymentMethodFormGroup() {
		return new FormGroup<TestOrderPaymentMethodFormProperties>({
			expirationMonth: new FormControl<number | null | undefined>(undefined),
			expirationYear: new FormControl<number | null | undefined>(undefined),
			lastFourDigits: new FormControl<string | null | undefined>(undefined),
			predefinedBillingAddress: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCreateTestOrderResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersCreateTestOrderResponse". */
		kind?: string | null;

		/** The ID of the newly created test order. */
		orderId?: string | null;
	}
	export interface OrdersCreateTestOrderResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersCreateTestOrderResponse". */
		kind: FormControl<string | null | undefined>,

		/** The ID of the newly created test order. */
		orderId: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCreateTestOrderResponseFormGroup() {
		return new FormGroup<OrdersCreateTestOrderResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCreateTestReturnRequest {

		/** Returned items. */
		items?: Array<OrdersCustomBatchRequestEntryCreateTestReturnReturnItem>;
	}
	export interface OrdersCreateTestReturnRequestFormProperties {
	}
	export function CreateOrdersCreateTestReturnRequestFormGroup() {
		return new FormGroup<OrdersCreateTestReturnRequestFormProperties>({
		});

	}

	export interface OrdersCustomBatchRequestEntryCreateTestReturnReturnItem {

		/** The ID of the line item to return. */
		lineItemId?: string | null;

		/** Quantity that is returned. */
		quantity?: number | null;
	}
	export interface OrdersCustomBatchRequestEntryCreateTestReturnReturnItemFormProperties {

		/** The ID of the line item to return. */
		lineItemId: FormControl<string | null | undefined>,

		/** Quantity that is returned. */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateOrdersCustomBatchRequestEntryCreateTestReturnReturnItemFormGroup() {
		return new FormGroup<OrdersCustomBatchRequestEntryCreateTestReturnReturnItemFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OrdersCreateTestReturnResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersCreateTestReturnResponse". */
		kind?: string | null;

		/** The ID of the newly created test order return. */
		returnId?: string | null;
	}
	export interface OrdersCreateTestReturnResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersCreateTestReturnResponse". */
		kind: FormControl<string | null | undefined>,

		/** The ID of the newly created test order return. */
		returnId: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCreateTestReturnResponseFormGroup() {
		return new FormGroup<OrdersCreateTestReturnResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			returnId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<OrdersCustomBatchRequestEntry>;
	}
	export interface OrdersCustomBatchRequestFormProperties {
	}
	export function CreateOrdersCustomBatchRequestFormGroup() {
		return new FormGroup<OrdersCustomBatchRequestFormProperties>({
		});

	}

	export interface OrdersCustomBatchRequestEntry {

		/** An entry ID, unique within the batch request. */
		batchId?: number | null;
		cancel?: OrdersCustomBatchRequestEntryCancel;
		cancelLineItem?: OrdersCustomBatchRequestEntryCancelLineItem;
		inStoreRefundLineItem?: OrdersCustomBatchRequestEntryInStoreRefundLineItem;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/** The merchant order ID. Required for `updateMerchantOrderId` and `getByMerchantOrderId` methods. */
		merchantOrderId?: string | null;

		/** The method of the batch entry. Acceptable values are: - "`acknowledge`" - "`cancel`" - "`cancelLineItem`" - "`get`" - "`getByMerchantOrderId`" - "`inStoreRefundLineItem`" - "`refund`" - "`rejectReturnLineItem`" - "`returnLineItem`" - "`returnRefundLineItem`" - "`setLineItemMetadata`" - "`shipLineItems`" - "`updateLineItemShippingDetails`" - "`updateMerchantOrderId`" - "`updateShipment`" */
		method?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. Required for all methods beside `get` and `getByMerchantOrderId`. */
		operationId?: string | null;

		/** The ID of the order. Required for all methods beside `getByMerchantOrderId`. */
		orderId?: string | null;
		refund?: OrdersCustomBatchRequestEntryRefund;
		rejectReturnLineItem?: OrdersCustomBatchRequestEntryRejectReturnLineItem;
		returnLineItem?: OrdersCustomBatchRequestEntryReturnLineItem;
		returnRefundLineItem?: OrdersCustomBatchRequestEntryReturnRefundLineItem;
		setLineItemMetadata?: OrdersCustomBatchRequestEntrySetLineItemMetadata;
		shipLineItems?: OrdersCustomBatchRequestEntryShipLineItems;
		updateLineItemShippingDetails?: OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails;
		updateShipment?: OrdersCustomBatchRequestEntryUpdateShipment;
	}
	export interface OrdersCustomBatchRequestEntryFormProperties {

		/** An entry ID, unique within the batch request. */
		batchId: FormControl<number | null | undefined>,

		/** The ID of the managing account. */
		merchantId: FormControl<string | null | undefined>,

		/** The merchant order ID. Required for `updateMerchantOrderId` and `getByMerchantOrderId` methods. */
		merchantOrderId: FormControl<string | null | undefined>,

		/** The method of the batch entry. Acceptable values are: - "`acknowledge`" - "`cancel`" - "`cancelLineItem`" - "`get`" - "`getByMerchantOrderId`" - "`inStoreRefundLineItem`" - "`refund`" - "`rejectReturnLineItem`" - "`returnLineItem`" - "`returnRefundLineItem`" - "`setLineItemMetadata`" - "`shipLineItems`" - "`updateLineItemShippingDetails`" - "`updateMerchantOrderId`" - "`updateShipment`" */
		method: FormControl<string | null | undefined>,

		/** The ID of the operation. Unique across all operations for a given order. Required for all methods beside `get` and `getByMerchantOrderId`. */
		operationId: FormControl<string | null | undefined>,

		/** The ID of the order. Required for all methods beside `getByMerchantOrderId`. */
		orderId: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCustomBatchRequestEntryFormGroup() {
		return new FormGroup<OrdersCustomBatchRequestEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			merchantOrderId: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCustomBatchRequestEntryCancel {

		/** The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrdersCustomBatchRequestEntryCancelFormProperties {

		/** The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCustomBatchRequestEntryCancelFormGroup() {
		return new FormGroup<OrdersCustomBatchRequestEntryCancelFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCustomBatchRequestEntryCancelLineItem {
		amount?: Price;
		amountPretax?: Price;
		amountTax?: Price;

		/** The ID of the line item to cancel. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to cancel. */
		quantity?: number | null;

		/** The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrdersCustomBatchRequestEntryCancelLineItemFormProperties {

		/** The ID of the line item to cancel. Either lineItemId or productId is required. */
		lineItemId: FormControl<string | null | undefined>,

		/** The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId: FormControl<string | null | undefined>,

		/** The quantity to cancel. */
		quantity: FormControl<number | null | undefined>,

		/** The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCustomBatchRequestEntryCancelLineItemFormGroup() {
		return new FormGroup<OrdersCustomBatchRequestEntryCancelLineItemFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCustomBatchRequestEntryInStoreRefundLineItem {
		amountPretax?: Price;
		amountTax?: Price;

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to return and refund. */
		quantity?: number | null;

		/** The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrdersCustomBatchRequestEntryInStoreRefundLineItemFormProperties {

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId: FormControl<string | null | undefined>,

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId: FormControl<string | null | undefined>,

		/** The quantity to return and refund. */
		quantity: FormControl<number | null | undefined>,

		/** The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCustomBatchRequestEntryInStoreRefundLineItemFormGroup() {
		return new FormGroup<OrdersCustomBatchRequestEntryInStoreRefundLineItemFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCustomBatchRequestEntryRefund {
		amount?: Price;
		amountPretax?: Price;
		amountTax?: Price;

		/** The reason for the refund. Acceptable values are: - "`adjustment`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`deliveredLateByCarrier`" - "`feeAdjustment`" - "`lateShipmentCredit`" - "`noInventory`" - "`other`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`shippingCostAdjustment`" - "`taxAdjustment`" - "`undeliverableShippingAddress`" - "`wrongProductShipped`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrdersCustomBatchRequestEntryRefundFormProperties {

		/** The reason for the refund. Acceptable values are: - "`adjustment`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`deliveredLateByCarrier`" - "`feeAdjustment`" - "`lateShipmentCredit`" - "`noInventory`" - "`other`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`shippingCostAdjustment`" - "`taxAdjustment`" - "`undeliverableShippingAddress`" - "`wrongProductShipped`" */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCustomBatchRequestEntryRefundFormGroup() {
		return new FormGroup<OrdersCustomBatchRequestEntryRefundFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCustomBatchRequestEntryRejectReturnLineItem {

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to return and refund. */
		quantity?: number | null;

		/** The reason for the return. Acceptable values are: - "`damagedOrUsed`" - "`missingComponent`" - "`notEligible`" - "`other`" - "`outOfReturnWindow`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrdersCustomBatchRequestEntryRejectReturnLineItemFormProperties {

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId: FormControl<string | null | undefined>,

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId: FormControl<string | null | undefined>,

		/** The quantity to return and refund. */
		quantity: FormControl<number | null | undefined>,

		/** The reason for the return. Acceptable values are: - "`damagedOrUsed`" - "`missingComponent`" - "`notEligible`" - "`other`" - "`outOfReturnWindow`" */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCustomBatchRequestEntryRejectReturnLineItemFormGroup() {
		return new FormGroup<OrdersCustomBatchRequestEntryRejectReturnLineItemFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCustomBatchRequestEntryReturnLineItem {

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to return. */
		quantity?: number | null;

		/** The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrdersCustomBatchRequestEntryReturnLineItemFormProperties {

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId: FormControl<string | null | undefined>,

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId: FormControl<string | null | undefined>,

		/** The quantity to return. */
		quantity: FormControl<number | null | undefined>,

		/** The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCustomBatchRequestEntryReturnLineItemFormGroup() {
		return new FormGroup<OrdersCustomBatchRequestEntryReturnLineItemFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCustomBatchRequestEntryReturnRefundLineItem {
		amountPretax?: Price;
		amountTax?: Price;

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to return and refund. */
		quantity?: number | null;

		/** The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrdersCustomBatchRequestEntryReturnRefundLineItemFormProperties {

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId: FormControl<string | null | undefined>,

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId: FormControl<string | null | undefined>,

		/** The quantity to return and refund. */
		quantity: FormControl<number | null | undefined>,

		/** The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCustomBatchRequestEntryReturnRefundLineItemFormGroup() {
		return new FormGroup<OrdersCustomBatchRequestEntryReturnRefundLineItemFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCustomBatchRequestEntrySetLineItemMetadata {
		annotations?: Array<OrderMerchantProvidedAnnotation>;

		/** The ID of the line item to set metadata. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;
	}
	export interface OrdersCustomBatchRequestEntrySetLineItemMetadataFormProperties {

		/** The ID of the line item to set metadata. Either lineItemId or productId is required. */
		lineItemId: FormControl<string | null | undefined>,

		/** The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCustomBatchRequestEntrySetLineItemMetadataFormGroup() {
		return new FormGroup<OrdersCustomBatchRequestEntrySetLineItemMetadataFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCustomBatchRequestEntryShipLineItems {

		/** Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values. */
		carrier?: string | null;

		/** Line items to ship. */
		lineItems?: Array<OrderShipmentLineItemShipment>;

		/** ID of the shipment group. Required for orders that use the orderinvoices service. */
		shipmentGroupId?: string | null;

		/** Deprecated. Please use shipmentInfo instead. The ID of the shipment. */
		shipmentId?: string | null;

		/** Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs). */
		shipmentInfos?: Array<OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo>;

		/** Deprecated. Please use shipmentInfo instead. The tracking ID for the shipment. */
		trackingId?: string | null;
	}
	export interface OrdersCustomBatchRequestEntryShipLineItemsFormProperties {

		/** Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values. */
		carrier: FormControl<string | null | undefined>,

		/** ID of the shipment group. Required for orders that use the orderinvoices service. */
		shipmentGroupId: FormControl<string | null | undefined>,

		/** Deprecated. Please use shipmentInfo instead. The ID of the shipment. */
		shipmentId: FormControl<string | null | undefined>,

		/** Deprecated. Please use shipmentInfo instead. The tracking ID for the shipment. */
		trackingId: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCustomBatchRequestEntryShipLineItemsFormGroup() {
		return new FormGroup<OrdersCustomBatchRequestEntryShipLineItemsFormProperties>({
			carrier: new FormControl<string | null | undefined>(undefined),
			shipmentGroupId: new FormControl<string | null | undefined>(undefined),
			shipmentId: new FormControl<string | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo {

		/** The carrier handling the shipment. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values. */
		carrier?: string | null;

		/** Required. The ID of the shipment. This is assigned by the merchant and is unique to each shipment. */
		shipmentId?: string | null;

		/** The tracking ID for the shipment. */
		trackingId?: string | null;
	}
	export interface OrdersCustomBatchRequestEntryShipLineItemsShipmentInfoFormProperties {

		/** The carrier handling the shipment. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values. */
		carrier: FormControl<string | null | undefined>,

		/** Required. The ID of the shipment. This is assigned by the merchant and is unique to each shipment. */
		shipmentId: FormControl<string | null | undefined>,

		/** The tracking ID for the shipment. */
		trackingId: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCustomBatchRequestEntryShipLineItemsShipmentInfoFormGroup() {
		return new FormGroup<OrdersCustomBatchRequestEntryShipLineItemsShipmentInfoFormProperties>({
			carrier: new FormControl<string | null | undefined>(undefined),
			shipmentId: new FormControl<string | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails {

		/** Updated delivery by date, in ISO 8601 format. If not specified only ship by date is updated. Provided date should be within 1 year timeframe and can not be a date in the past. */
		deliverByDate?: string | null;

		/** The ID of the line item to set metadata. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** Updated ship by date, in ISO 8601 format. If not specified only deliver by date is updated. Provided date should be within 1 year timeframe and can not be a date in the past. */
		shipByDate?: string | null;
	}
	export interface OrdersCustomBatchRequestEntryUpdateLineItemShippingDetailsFormProperties {

		/** Updated delivery by date, in ISO 8601 format. If not specified only ship by date is updated. Provided date should be within 1 year timeframe and can not be a date in the past. */
		deliverByDate: FormControl<string | null | undefined>,

		/** The ID of the line item to set metadata. Either lineItemId or productId is required. */
		lineItemId: FormControl<string | null | undefined>,

		/** The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId: FormControl<string | null | undefined>,

		/** Updated ship by date, in ISO 8601 format. If not specified only deliver by date is updated. Provided date should be within 1 year timeframe and can not be a date in the past. */
		shipByDate: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCustomBatchRequestEntryUpdateLineItemShippingDetailsFormGroup() {
		return new FormGroup<OrdersCustomBatchRequestEntryUpdateLineItemShippingDetailsFormProperties>({
			deliverByDate: new FormControl<string | null | undefined>(undefined),
			lineItemId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			shipByDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCustomBatchRequestEntryUpdateShipment {

		/** The carrier handling the shipment. Not updated if missing. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values. */
		carrier?: string | null;

		/** Date on which the shipment has been delivered, in ISO 8601 format. Optional and can be provided only if `status` is `delivered`. */
		deliveryDate?: string | null;

		/** The ID of the shipment. */
		shipmentId?: string | null;

		/** New status for the shipment. Not updated if missing. Acceptable values are: - "`delivered`" - "`undeliverable`" - "`readyForPickup`" */
		status?: string | null;

		/** The tracking ID for the shipment. Not updated if missing. */
		trackingId?: string | null;
	}
	export interface OrdersCustomBatchRequestEntryUpdateShipmentFormProperties {

		/** The carrier handling the shipment. Not updated if missing. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values. */
		carrier: FormControl<string | null | undefined>,

		/** Date on which the shipment has been delivered, in ISO 8601 format. Optional and can be provided only if `status` is `delivered`. */
		deliveryDate: FormControl<string | null | undefined>,

		/** The ID of the shipment. */
		shipmentId: FormControl<string | null | undefined>,

		/** New status for the shipment. Not updated if missing. Acceptable values are: - "`delivered`" - "`undeliverable`" - "`readyForPickup`" */
		status: FormControl<string | null | undefined>,

		/** The tracking ID for the shipment. Not updated if missing. */
		trackingId: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCustomBatchRequestEntryUpdateShipmentFormGroup() {
		return new FormGroup<OrdersCustomBatchRequestEntryUpdateShipmentFormProperties>({
			carrier: new FormControl<string | null | undefined>(undefined),
			deliveryDate: new FormControl<string | null | undefined>(undefined),
			shipmentId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<OrdersCustomBatchResponseEntry>;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersCustomBatchResponse". */
		kind?: string | null;
	}
	export interface OrdersCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersCustomBatchResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCustomBatchResponseFormGroup() {
		return new FormGroup<OrdersCustomBatchResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCustomBatchResponseEntry {

		/** The ID of the request entry this entry responds to. */
		batchId?: number | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors;

		/** The status of the execution. Only defined if 1. the request was successful; and 2. the method is not `get`, `getByMerchantOrderId`, or one of the test methods. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersCustomBatchResponseEntry`" */
		kind?: string | null;

		/** Order. Production access (all methods) requires the order manager role. Sandbox access does not. */
		order?: Order;
	}
	export interface OrdersCustomBatchResponseEntryFormProperties {

		/** The ID of the request entry this entry responds to. */
		batchId: FormControl<number | null | undefined>,

		/** The status of the execution. Only defined if 1. the request was successful; and 2. the method is not `get`, `getByMerchantOrderId`, or one of the test methods. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersCustomBatchResponseEntry`" */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCustomBatchResponseEntryFormGroup() {
		return new FormGroup<OrdersCustomBatchResponseEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersGetByMerchantOrderIdResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersGetByMerchantOrderIdResponse". */
		kind?: string | null;

		/** Order. Production access (all methods) requires the order manager role. Sandbox access does not. */
		order?: Order;
	}
	export interface OrdersGetByMerchantOrderIdResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersGetByMerchantOrderIdResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersGetByMerchantOrderIdResponseFormGroup() {
		return new FormGroup<OrdersGetByMerchantOrderIdResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersGetTestOrderTemplateResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersGetTestOrderTemplateResponse". */
		kind?: string | null;
		template?: TestOrder;
	}
	export interface OrdersGetTestOrderTemplateResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersGetTestOrderTemplateResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersGetTestOrderTemplateResponseFormGroup() {
		return new FormGroup<OrdersGetTestOrderTemplateResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersInStoreRefundLineItemRequest {
		amountPretax?: Price;
		amountTax?: Price;

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to return and refund. */
		quantity?: number | null;

		/** The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrdersInStoreRefundLineItemRequestFormProperties {

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId: FormControl<string | null | undefined>,

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId: FormControl<string | null | undefined>,

		/** The quantity to return and refund. */
		quantity: FormControl<number | null | undefined>,

		/** The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrdersInStoreRefundLineItemRequestFormGroup() {
		return new FormGroup<OrdersInStoreRefundLineItemRequestFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersInStoreRefundLineItemResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersInStoreRefundLineItemResponse". */
		kind?: string | null;
	}
	export interface OrdersInStoreRefundLineItemResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersInStoreRefundLineItemResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersInStoreRefundLineItemResponseFormGroup() {
		return new FormGroup<OrdersInStoreRefundLineItemResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of orders. */
		nextPageToken?: string | null;
		resources?: Array<Order>;
	}
	export interface OrdersListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token for the retrieval of the next page of orders. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateOrdersListResponseFormGroup() {
		return new FormGroup<OrdersListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersRefundRequest {
		amount?: Price;
		amountPretax?: Price;
		amountTax?: Price;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The reason for the refund. Acceptable values are: - "`adjustment`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`deliveredLateByCarrier`" - "`feeAdjustment`" - "`lateShipmentCredit`" - "`noInventory`" - "`other`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`shippingCostAdjustment`" - "`taxAdjustment`" - "`undeliverableShippingAddress`" - "`wrongProductShipped`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrdersRefundRequestFormProperties {

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,

		/** The reason for the refund. Acceptable values are: - "`adjustment`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`deliveredLateByCarrier`" - "`feeAdjustment`" - "`lateShipmentCredit`" - "`noInventory`" - "`other`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`shippingCostAdjustment`" - "`taxAdjustment`" - "`undeliverableShippingAddress`" - "`wrongProductShipped`" */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrdersRefundRequestFormGroup() {
		return new FormGroup<OrdersRefundRequestFormProperties>({
			operationId: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersRefundResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersRefundResponse". */
		kind?: string | null;
	}
	export interface OrdersRefundResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersRefundResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersRefundResponseFormGroup() {
		return new FormGroup<OrdersRefundResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersRejectReturnLineItemRequest {

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to return and refund. */
		quantity?: number | null;

		/** The reason for the return. Acceptable values are: - "`damagedOrUsed`" - "`missingComponent`" - "`notEligible`" - "`other`" - "`outOfReturnWindow`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrdersRejectReturnLineItemRequestFormProperties {

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId: FormControl<string | null | undefined>,

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId: FormControl<string | null | undefined>,

		/** The quantity to return and refund. */
		quantity: FormControl<number | null | undefined>,

		/** The reason for the return. Acceptable values are: - "`damagedOrUsed`" - "`missingComponent`" - "`notEligible`" - "`other`" - "`outOfReturnWindow`" */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrdersRejectReturnLineItemRequestFormGroup() {
		return new FormGroup<OrdersRejectReturnLineItemRequestFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersRejectReturnLineItemResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersRejectReturnLineItemResponse". */
		kind?: string | null;
	}
	export interface OrdersRejectReturnLineItemResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersRejectReturnLineItemResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersRejectReturnLineItemResponseFormGroup() {
		return new FormGroup<OrdersRejectReturnLineItemResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersReturnLineItemRequest {

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to return. */
		quantity?: number | null;

		/** The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrdersReturnLineItemRequestFormProperties {

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId: FormControl<string | null | undefined>,

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId: FormControl<string | null | undefined>,

		/** The quantity to return. */
		quantity: FormControl<number | null | undefined>,

		/** The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrdersReturnLineItemRequestFormGroup() {
		return new FormGroup<OrdersReturnLineItemRequestFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersReturnLineItemResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersReturnLineItemResponse". */
		kind?: string | null;
	}
	export interface OrdersReturnLineItemResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersReturnLineItemResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersReturnLineItemResponseFormGroup() {
		return new FormGroup<OrdersReturnLineItemResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersReturnRefundLineItemRequest {
		amountPretax?: Price;
		amountTax?: Price;

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to return and refund. Quantity is required. */
		quantity?: number | null;

		/** The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrdersReturnRefundLineItemRequestFormProperties {

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId: FormControl<string | null | undefined>,

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId: FormControl<string | null | undefined>,

		/** The quantity to return and refund. Quantity is required. */
		quantity: FormControl<number | null | undefined>,

		/** The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrdersReturnRefundLineItemRequestFormGroup() {
		return new FormGroup<OrdersReturnRefundLineItemRequestFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersReturnRefundLineItemResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersReturnRefundLineItemResponse". */
		kind?: string | null;
	}
	export interface OrdersReturnRefundLineItemResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersReturnRefundLineItemResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersReturnRefundLineItemResponseFormGroup() {
		return new FormGroup<OrdersReturnRefundLineItemResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersSetLineItemMetadataRequest {
		annotations?: Array<OrderMerchantProvidedAnnotation>;

		/** The ID of the line item to set metadata. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;
	}
	export interface OrdersSetLineItemMetadataRequestFormProperties {

		/** The ID of the line item to set metadata. Either lineItemId or productId is required. */
		lineItemId: FormControl<string | null | undefined>,

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,

		/** The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateOrdersSetLineItemMetadataRequestFormGroup() {
		return new FormGroup<OrdersSetLineItemMetadataRequestFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersSetLineItemMetadataResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersSetLineItemMetadataResponse". */
		kind?: string | null;
	}
	export interface OrdersSetLineItemMetadataResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersSetLineItemMetadataResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersSetLineItemMetadataResponseFormGroup() {
		return new FormGroup<OrdersSetLineItemMetadataResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersShipLineItemsRequest {

		/** Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values. */
		carrier?: string | null;

		/** Line items to ship. */
		lineItems?: Array<OrderShipmentLineItemShipment>;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** ID of the shipment group. Required for orders that use the orderinvoices service. */
		shipmentGroupId?: string | null;

		/** Deprecated. Please use shipmentInfo instead. The ID of the shipment. */
		shipmentId?: string | null;

		/** Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs). */
		shipmentInfos?: Array<OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo>;

		/** Deprecated. Please use shipmentInfo instead. The tracking ID for the shipment. */
		trackingId?: string | null;
	}
	export interface OrdersShipLineItemsRequestFormProperties {

		/** Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values. */
		carrier: FormControl<string | null | undefined>,

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,

		/** ID of the shipment group. Required for orders that use the orderinvoices service. */
		shipmentGroupId: FormControl<string | null | undefined>,

		/** Deprecated. Please use shipmentInfo instead. The ID of the shipment. */
		shipmentId: FormControl<string | null | undefined>,

		/** Deprecated. Please use shipmentInfo instead. The tracking ID for the shipment. */
		trackingId: FormControl<string | null | undefined>,
	}
	export function CreateOrdersShipLineItemsRequestFormGroup() {
		return new FormGroup<OrdersShipLineItemsRequestFormProperties>({
			carrier: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			shipmentGroupId: new FormControl<string | null | undefined>(undefined),
			shipmentId: new FormControl<string | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersShipLineItemsResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersShipLineItemsResponse". */
		kind?: string | null;
	}
	export interface OrdersShipLineItemsResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersShipLineItemsResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersShipLineItemsResponseFormGroup() {
		return new FormGroup<OrdersShipLineItemsResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersUpdateLineItemShippingDetailsRequest {

		/** Updated delivery by date, in ISO 8601 format. If not specified only ship by date is updated. Provided date should be within 1 year timeframe and can not be a date in the past. */
		deliverByDate?: string | null;

		/** The ID of the line item to set metadata. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** Updated ship by date, in ISO 8601 format. If not specified only deliver by date is updated. Provided date should be within 1 year timeframe and can not be a date in the past. */
		shipByDate?: string | null;
	}
	export interface OrdersUpdateLineItemShippingDetailsRequestFormProperties {

		/** Updated delivery by date, in ISO 8601 format. If not specified only ship by date is updated. Provided date should be within 1 year timeframe and can not be a date in the past. */
		deliverByDate: FormControl<string | null | undefined>,

		/** The ID of the line item to set metadata. Either lineItemId or productId is required. */
		lineItemId: FormControl<string | null | undefined>,

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,

		/** The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId: FormControl<string | null | undefined>,

		/** Updated ship by date, in ISO 8601 format. If not specified only deliver by date is updated. Provided date should be within 1 year timeframe and can not be a date in the past. */
		shipByDate: FormControl<string | null | undefined>,
	}
	export function CreateOrdersUpdateLineItemShippingDetailsRequestFormGroup() {
		return new FormGroup<OrdersUpdateLineItemShippingDetailsRequestFormProperties>({
			deliverByDate: new FormControl<string | null | undefined>(undefined),
			lineItemId: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			shipByDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersUpdateLineItemShippingDetailsResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateLineItemShippingDetailsResponse". */
		kind?: string | null;
	}
	export interface OrdersUpdateLineItemShippingDetailsResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateLineItemShippingDetailsResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersUpdateLineItemShippingDetailsResponseFormGroup() {
		return new FormGroup<OrdersUpdateLineItemShippingDetailsResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersUpdateMerchantOrderIdRequest {

		/** The merchant order id to be assigned to the order. Must be unique per merchant. */
		merchantOrderId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;
	}
	export interface OrdersUpdateMerchantOrderIdRequestFormProperties {

		/** The merchant order id to be assigned to the order. Must be unique per merchant. */
		merchantOrderId: FormControl<string | null | undefined>,

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,
	}
	export function CreateOrdersUpdateMerchantOrderIdRequestFormGroup() {
		return new FormGroup<OrdersUpdateMerchantOrderIdRequestFormProperties>({
			merchantOrderId: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersUpdateMerchantOrderIdResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateMerchantOrderIdResponse". */
		kind?: string | null;
	}
	export interface OrdersUpdateMerchantOrderIdResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateMerchantOrderIdResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersUpdateMerchantOrderIdResponseFormGroup() {
		return new FormGroup<OrdersUpdateMerchantOrderIdResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersUpdateShipmentRequest {

		/** The carrier handling the shipment. Not updated if missing. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values. */
		carrier?: string | null;

		/** Date on which the shipment has been delivered, in ISO 8601 format. Optional and can be provided only if `status` is `delivered`. */
		deliveryDate?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The ID of the shipment. */
		shipmentId?: string | null;

		/** New status for the shipment. Not updated if missing. Acceptable values are: - "`delivered`" - "`undeliverable`" - "`readyForPickup`" */
		status?: string | null;

		/** The tracking ID for the shipment. Not updated if missing. */
		trackingId?: string | null;
	}
	export interface OrdersUpdateShipmentRequestFormProperties {

		/** The carrier handling the shipment. Not updated if missing. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values. */
		carrier: FormControl<string | null | undefined>,

		/** Date on which the shipment has been delivered, in ISO 8601 format. Optional and can be provided only if `status` is `delivered`. */
		deliveryDate: FormControl<string | null | undefined>,

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,

		/** The ID of the shipment. */
		shipmentId: FormControl<string | null | undefined>,

		/** New status for the shipment. Not updated if missing. Acceptable values are: - "`delivered`" - "`undeliverable`" - "`readyForPickup`" */
		status: FormControl<string | null | undefined>,

		/** The tracking ID for the shipment. Not updated if missing. */
		trackingId: FormControl<string | null | undefined>,
	}
	export function CreateOrdersUpdateShipmentRequestFormGroup() {
		return new FormGroup<OrdersUpdateShipmentRequestFormProperties>({
			carrier: new FormControl<string | null | undefined>(undefined),
			deliveryDate: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			shipmentId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersUpdateShipmentResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateShipmentResponse". */
		kind?: string | null;
	}
	export interface OrdersUpdateShipmentResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateShipmentResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersUpdateShipmentResponseFormGroup() {
		return new FormGroup<OrdersUpdateShipmentResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PickupCarrierService {

		/** The name of the pickup carrier (e.g., `"UPS"`). Required. */
		carrierName?: string | null;

		/** The name of the pickup service (e.g., `"Access point"`). Required. */
		serviceName?: string | null;
	}
	export interface PickupCarrierServiceFormProperties {

		/** The name of the pickup carrier (e.g., `"UPS"`). Required. */
		carrierName: FormControl<string | null | undefined>,

		/** The name of the pickup service (e.g., `"Access point"`). Required. */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreatePickupCarrierServiceFormGroup() {
		return new FormGroup<PickupCarrierServiceFormProperties>({
			carrierName: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PickupServicesPickupService {

		/** The name of the carrier (e.g., `"UPS"`). Always present. */
		carrierName?: string | null;

		/** The CLDR country code of the carrier (e.g., "US"). Always present. */
		country?: string | null;

		/** The name of the pickup service (e.g., `"Access point"`). Always present. */
		serviceName?: string | null;
	}
	export interface PickupServicesPickupServiceFormProperties {

		/** The name of the carrier (e.g., `"UPS"`). Always present. */
		carrierName: FormControl<string | null | undefined>,

		/** The CLDR country code of the carrier (e.g., "US"). Always present. */
		country: FormControl<string | null | undefined>,

		/** The name of the pickup service (e.g., `"Access point"`). Always present. */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreatePickupServicesPickupServiceFormGroup() {
		return new FormGroup<PickupServicesPickupServiceFormProperties>({
			carrierName: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PosCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<PosCustomBatchRequestEntry>;
	}
	export interface PosCustomBatchRequestFormProperties {
	}
	export function CreatePosCustomBatchRequestFormGroup() {
		return new FormGroup<PosCustomBatchRequestFormProperties>({
		});

	}

	export interface PosCustomBatchRequestEntry {

		/** An entry ID, unique within the batch request. */
		batchId?: number | null;

		/** The absolute quantity of an item available at the given store. */
		inventory?: PosInventory;

		/** The ID of the POS data provider. */
		merchantId?: string | null;

		/** The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" - "`inventory`" - "`sale`" */
		method?: string | null;

		/** The change of the available quantity of an item at the given store. */
		sale?: PosSale;

		/** Store resource. */
		store?: PosStore;

		/** The store code. This should be set only if the method is `delete` or `get`. */
		storeCode?: string | null;

		/** The ID of the account for which to get/submit data. */
		targetMerchantId?: string | null;
	}
	export interface PosCustomBatchRequestEntryFormProperties {

		/** An entry ID, unique within the batch request. */
		batchId: FormControl<number | null | undefined>,

		/** The ID of the POS data provider. */
		merchantId: FormControl<string | null | undefined>,

		/** The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" - "`inventory`" - "`sale`" */
		method: FormControl<string | null | undefined>,

		/** The store code. This should be set only if the method is `delete` or `get`. */
		storeCode: FormControl<string | null | undefined>,

		/** The ID of the account for which to get/submit data. */
		targetMerchantId: FormControl<string | null | undefined>,
	}
	export function CreatePosCustomBatchRequestEntryFormGroup() {
		return new FormGroup<PosCustomBatchRequestEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			storeCode: new FormControl<string | null | undefined>(undefined),
			targetMerchantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The absolute quantity of an item available at the given store. */
	export interface PosInventory {

		/** Required. The two-letter ISO 639-1 language code for the item. */
		contentLanguage?: string | null;

		/** Global Trade Item Number. */
		gtin?: string | null;

		/** Required. A unique identifier for the item. */
		itemId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#posInventory`" */
		kind?: string | null;
		price?: Price;

		/** Required. The available quantity of the item. */
		quantity?: string | null;

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business. */
		storeCode?: string | null;

		/** Required. The CLDR territory code for the item. */
		targetCountry?: string | null;

		/** Required. The inventory timestamp, in ISO 8601 format. */
		timestamp?: string | null;
	}

	/** The absolute quantity of an item available at the given store. */
	export interface PosInventoryFormProperties {

		/** Required. The two-letter ISO 639-1 language code for the item. */
		contentLanguage: FormControl<string | null | undefined>,

		/** Global Trade Item Number. */
		gtin: FormControl<string | null | undefined>,

		/** Required. A unique identifier for the item. */
		itemId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#posInventory`" */
		kind: FormControl<string | null | undefined>,

		/** Required. The available quantity of the item. */
		quantity: FormControl<string | null | undefined>,

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business. */
		storeCode: FormControl<string | null | undefined>,

		/** Required. The CLDR territory code for the item. */
		targetCountry: FormControl<string | null | undefined>,

		/** Required. The inventory timestamp, in ISO 8601 format. */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreatePosInventoryFormGroup() {
		return new FormGroup<PosInventoryFormProperties>({
			contentLanguage: new FormControl<string | null | undefined>(undefined),
			gtin: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<string | null | undefined>(undefined),
			storeCode: new FormControl<string | null | undefined>(undefined),
			targetCountry: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The change of the available quantity of an item at the given store. */
	export interface PosSale {

		/** Required. The two-letter ISO 639-1 language code for the item. */
		contentLanguage?: string | null;

		/** Global Trade Item Number. */
		gtin?: string | null;

		/** Required. A unique identifier for the item. */
		itemId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#posSale`" */
		kind?: string | null;
		price?: Price;

		/** Required. The relative change of the available quantity. Negative for items returned. */
		quantity?: string | null;

		/** A unique ID to group items from the same sale event. */
		saleId?: string | null;

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business. */
		storeCode?: string | null;

		/** Required. The CLDR territory code for the item. */
		targetCountry?: string | null;

		/** Required. The inventory timestamp, in ISO 8601 format. */
		timestamp?: string | null;
	}

	/** The change of the available quantity of an item at the given store. */
	export interface PosSaleFormProperties {

		/** Required. The two-letter ISO 639-1 language code for the item. */
		contentLanguage: FormControl<string | null | undefined>,

		/** Global Trade Item Number. */
		gtin: FormControl<string | null | undefined>,

		/** Required. A unique identifier for the item. */
		itemId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#posSale`" */
		kind: FormControl<string | null | undefined>,

		/** Required. The relative change of the available quantity. Negative for items returned. */
		quantity: FormControl<string | null | undefined>,

		/** A unique ID to group items from the same sale event. */
		saleId: FormControl<string | null | undefined>,

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business. */
		storeCode: FormControl<string | null | undefined>,

		/** Required. The CLDR territory code for the item. */
		targetCountry: FormControl<string | null | undefined>,

		/** Required. The inventory timestamp, in ISO 8601 format. */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreatePosSaleFormGroup() {
		return new FormGroup<PosSaleFormProperties>({
			contentLanguage: new FormControl<string | null | undefined>(undefined),
			gtin: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<string | null | undefined>(undefined),
			saleId: new FormControl<string | null | undefined>(undefined),
			storeCode: new FormControl<string | null | undefined>(undefined),
			targetCountry: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Store resource. */
	export interface PosStore {

		/** The business type of the store. */
		gcidCategory?: Array<string>;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#posStore`" */
		kind?: string | null;

		/** The store phone number. */
		phoneNumber?: string | null;

		/** The Google Place Id of the store location. */
		placeId?: string | null;

		/** Required. The street address of the store. */
		storeAddress?: string | null;

		/** Required. A store identifier that is unique for the given merchant. */
		storeCode?: string | null;

		/** The merchant or store name. */
		storeName?: string | null;

		/** The website url for the store or merchant. */
		websiteUrl?: string | null;
	}

	/** Store resource. */
	export interface PosStoreFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#posStore`" */
		kind: FormControl<string | null | undefined>,

		/** The store phone number. */
		phoneNumber: FormControl<string | null | undefined>,

		/** The Google Place Id of the store location. */
		placeId: FormControl<string | null | undefined>,

		/** Required. The street address of the store. */
		storeAddress: FormControl<string | null | undefined>,

		/** Required. A store identifier that is unique for the given merchant. */
		storeCode: FormControl<string | null | undefined>,

		/** The merchant or store name. */
		storeName: FormControl<string | null | undefined>,

		/** The website url for the store or merchant. */
		websiteUrl: FormControl<string | null | undefined>,
	}
	export function CreatePosStoreFormGroup() {
		return new FormGroup<PosStoreFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			placeId: new FormControl<string | null | undefined>(undefined),
			storeAddress: new FormControl<string | null | undefined>(undefined),
			storeCode: new FormControl<string | null | undefined>(undefined),
			storeName: new FormControl<string | null | undefined>(undefined),
			websiteUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PosCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<PosCustomBatchResponseEntry>;

		/** Identifies what kind of resource this is. Value: the fixed string "content#posCustomBatchResponse". */
		kind?: string | null;
	}
	export interface PosCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#posCustomBatchResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePosCustomBatchResponseFormGroup() {
		return new FormGroup<PosCustomBatchResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PosCustomBatchResponseEntry {

		/** The ID of the request entry to which this entry responds. */
		batchId?: number | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors;

		/** The absolute quantity of an item available at the given store. */
		inventory?: PosInventory;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#posCustomBatchResponseEntry`" */
		kind?: string | null;

		/** The change of the available quantity of an item at the given store. */
		sale?: PosSale;

		/** Store resource. */
		store?: PosStore;
	}
	export interface PosCustomBatchResponseEntryFormProperties {

		/** The ID of the request entry to which this entry responds. */
		batchId: FormControl<number | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#posCustomBatchResponseEntry`" */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePosCustomBatchResponseEntryFormGroup() {
		return new FormGroup<PosCustomBatchResponseEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PosInventoryRequest {

		/** Required. The two-letter ISO 639-1 language code for the item. */
		contentLanguage?: string | null;

		/** Global Trade Item Number. */
		gtin?: string | null;

		/** Required. A unique identifier for the item. */
		itemId?: string | null;
		price?: Price;

		/** Required. The available quantity of the item. */
		quantity?: string | null;

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business. */
		storeCode?: string | null;

		/** Required. The CLDR territory code for the item. */
		targetCountry?: string | null;

		/** Required. The inventory timestamp, in ISO 8601 format. */
		timestamp?: string | null;
	}
	export interface PosInventoryRequestFormProperties {

		/** Required. The two-letter ISO 639-1 language code for the item. */
		contentLanguage: FormControl<string | null | undefined>,

		/** Global Trade Item Number. */
		gtin: FormControl<string | null | undefined>,

		/** Required. A unique identifier for the item. */
		itemId: FormControl<string | null | undefined>,

		/** Required. The available quantity of the item. */
		quantity: FormControl<string | null | undefined>,

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business. */
		storeCode: FormControl<string | null | undefined>,

		/** Required. The CLDR territory code for the item. */
		targetCountry: FormControl<string | null | undefined>,

		/** Required. The inventory timestamp, in ISO 8601 format. */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreatePosInventoryRequestFormGroup() {
		return new FormGroup<PosInventoryRequestFormProperties>({
			contentLanguage: new FormControl<string | null | undefined>(undefined),
			gtin: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<string | null | undefined>(undefined),
			storeCode: new FormControl<string | null | undefined>(undefined),
			targetCountry: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PosInventoryResponse {

		/** Required. The two-letter ISO 639-1 language code for the item. */
		contentLanguage?: string | null;

		/** Global Trade Item Number. */
		gtin?: string | null;

		/** Required. A unique identifier for the item. */
		itemId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#posInventoryResponse". */
		kind?: string | null;
		price?: Price;

		/** Required. The available quantity of the item. */
		quantity?: string | null;

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business. */
		storeCode?: string | null;

		/** Required. The CLDR territory code for the item. */
		targetCountry?: string | null;

		/** Required. The inventory timestamp, in ISO 8601 format. */
		timestamp?: string | null;
	}
	export interface PosInventoryResponseFormProperties {

		/** Required. The two-letter ISO 639-1 language code for the item. */
		contentLanguage: FormControl<string | null | undefined>,

		/** Global Trade Item Number. */
		gtin: FormControl<string | null | undefined>,

		/** Required. A unique identifier for the item. */
		itemId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "content#posInventoryResponse". */
		kind: FormControl<string | null | undefined>,

		/** Required. The available quantity of the item. */
		quantity: FormControl<string | null | undefined>,

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business. */
		storeCode: FormControl<string | null | undefined>,

		/** Required. The CLDR territory code for the item. */
		targetCountry: FormControl<string | null | undefined>,

		/** Required. The inventory timestamp, in ISO 8601 format. */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreatePosInventoryResponseFormGroup() {
		return new FormGroup<PosInventoryResponseFormProperties>({
			contentLanguage: new FormControl<string | null | undefined>(undefined),
			gtin: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<string | null | undefined>(undefined),
			storeCode: new FormControl<string | null | undefined>(undefined),
			targetCountry: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PosListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#posListResponse". */
		kind?: string | null;
		resources?: Array<PosStore>;
	}
	export interface PosListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#posListResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePosListResponseFormGroup() {
		return new FormGroup<PosListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PosSaleRequest {

		/** Required. The two-letter ISO 639-1 language code for the item. */
		contentLanguage?: string | null;

		/** Global Trade Item Number. */
		gtin?: string | null;

		/** Required. A unique identifier for the item. */
		itemId?: string | null;
		price?: Price;

		/** Required. The relative change of the available quantity. Negative for items returned. */
		quantity?: string | null;

		/** A unique ID to group items from the same sale event. */
		saleId?: string | null;

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business. */
		storeCode?: string | null;

		/** Required. The CLDR territory code for the item. */
		targetCountry?: string | null;

		/** Required. The inventory timestamp, in ISO 8601 format. */
		timestamp?: string | null;
	}
	export interface PosSaleRequestFormProperties {

		/** Required. The two-letter ISO 639-1 language code for the item. */
		contentLanguage: FormControl<string | null | undefined>,

		/** Global Trade Item Number. */
		gtin: FormControl<string | null | undefined>,

		/** Required. A unique identifier for the item. */
		itemId: FormControl<string | null | undefined>,

		/** Required. The relative change of the available quantity. Negative for items returned. */
		quantity: FormControl<string | null | undefined>,

		/** A unique ID to group items from the same sale event. */
		saleId: FormControl<string | null | undefined>,

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business. */
		storeCode: FormControl<string | null | undefined>,

		/** Required. The CLDR territory code for the item. */
		targetCountry: FormControl<string | null | undefined>,

		/** Required. The inventory timestamp, in ISO 8601 format. */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreatePosSaleRequestFormGroup() {
		return new FormGroup<PosSaleRequestFormProperties>({
			contentLanguage: new FormControl<string | null | undefined>(undefined),
			gtin: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<string | null | undefined>(undefined),
			saleId: new FormControl<string | null | undefined>(undefined),
			storeCode: new FormControl<string | null | undefined>(undefined),
			targetCountry: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PosSaleResponse {

		/** Required. The two-letter ISO 639-1 language code for the item. */
		contentLanguage?: string | null;

		/** Global Trade Item Number. */
		gtin?: string | null;

		/** Required. A unique identifier for the item. */
		itemId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#posSaleResponse". */
		kind?: string | null;
		price?: Price;

		/** Required. The relative change of the available quantity. Negative for items returned. */
		quantity?: string | null;

		/** A unique ID to group items from the same sale event. */
		saleId?: string | null;

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business. */
		storeCode?: string | null;

		/** Required. The CLDR territory code for the item. */
		targetCountry?: string | null;

		/** Required. The inventory timestamp, in ISO 8601 format. */
		timestamp?: string | null;
	}
	export interface PosSaleResponseFormProperties {

		/** Required. The two-letter ISO 639-1 language code for the item. */
		contentLanguage: FormControl<string | null | undefined>,

		/** Global Trade Item Number. */
		gtin: FormControl<string | null | undefined>,

		/** Required. A unique identifier for the item. */
		itemId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "content#posSaleResponse". */
		kind: FormControl<string | null | undefined>,

		/** Required. The relative change of the available quantity. Negative for items returned. */
		quantity: FormControl<string | null | undefined>,

		/** A unique ID to group items from the same sale event. */
		saleId: FormControl<string | null | undefined>,

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business. */
		storeCode: FormControl<string | null | undefined>,

		/** Required. The CLDR territory code for the item. */
		targetCountry: FormControl<string | null | undefined>,

		/** Required. The inventory timestamp, in ISO 8601 format. */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreatePosSaleResponseFormGroup() {
		return new FormGroup<PosSaleResponseFormProperties>({
			contentLanguage: new FormControl<string | null | undefined>(undefined),
			gtin: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<string | null | undefined>(undefined),
			saleId: new FormControl<string | null | undefined>(undefined),
			storeCode: new FormControl<string | null | undefined>(undefined),
			targetCountry: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostalCodeGroup {

		/** The CLDR territory code of the country the postal code group applies to. Required. */
		country?: string | null;

		/** The name of the postal code group, referred to in headers. Required. */
		name?: string | null;

		/** A range of postal codes. Required. */
		postalCodeRanges?: Array<PostalCodeRange>;
	}
	export interface PostalCodeGroupFormProperties {

		/** The CLDR territory code of the country the postal code group applies to. Required. */
		country: FormControl<string | null | undefined>,

		/** The name of the postal code group, referred to in headers. Required. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePostalCodeGroupFormGroup() {
		return new FormGroup<PostalCodeGroupFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostalCodeRange {

		/** A postal code or a pattern of the form `prefix*` denoting the inclusive lower bound of the range defining the area. Examples values: `"94108"`, `"9410*"`, `"9*"`. Required. */
		postalCodeRangeBegin?: string | null;

		/** A postal code or a pattern of the form `prefix*` denoting the inclusive upper bound of the range defining the area. It must have the same length as `postalCodeRangeBegin`: if `postalCodeRangeBegin` is a postal code then `postalCodeRangeEnd` must be a postal code too; if `postalCodeRangeBegin` is a pattern then `postalCodeRangeEnd` must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching `postalCodeRangeBegin`. */
		postalCodeRangeEnd?: string | null;
	}
	export interface PostalCodeRangeFormProperties {

		/** A postal code or a pattern of the form `prefix*` denoting the inclusive lower bound of the range defining the area. Examples values: `"94108"`, `"9410*"`, `"9*"`. Required. */
		postalCodeRangeBegin: FormControl<string | null | undefined>,

		/** A postal code or a pattern of the form `prefix*` denoting the inclusive upper bound of the range defining the area. It must have the same length as `postalCodeRangeBegin`: if `postalCodeRangeBegin` is a postal code then `postalCodeRangeEnd` must be a postal code too; if `postalCodeRangeBegin` is a pattern then `postalCodeRangeEnd` must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching `postalCodeRangeBegin`. */
		postalCodeRangeEnd: FormControl<string | null | undefined>,
	}
	export function CreatePostalCodeRangeFormGroup() {
		return new FormGroup<PostalCodeRangeFormProperties>({
			postalCodeRangeBegin: new FormControl<string | null | undefined>(undefined),
			postalCodeRangeEnd: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Required product attributes are primarily defined by the products data specification. See the Products Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect. */
	export interface Product {

		/** Additional URLs of images of the item. */
		additionalImageLinks?: Array<string>;

		/** Additional categories of the item (formatted as in products data specification). */
		additionalProductTypes?: Array<string>;

		/** Should be set to true if the item is targeted towards adults. */
		adult?: boolean | null;

		/** Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise. */
		adwordsGrouping?: string | null;

		/** Similar to adwords_grouping, but only works on CPC. */
		adwordsLabels?: Array<string>;

		/** Allows advertisers to override the item URL when the product is shown within the context of Product Ads. */
		adwordsRedirect?: string | null;

		/** Target age group of the item. Acceptable values are: - "`adult`" - "`infant`" - "`kids`" - "`newborn`" - "`toddler`" - "`youngAdult`" */
		ageGroup?: string | null;

		/** Deprecated. Do not use. */
		aspects?: Array<ProductAspect>;

		/** Availability status of the item. Acceptable values are: - "`in stock`" - "`out of stock`" - "`preorder`" */
		availability?: string | null;

		/** The day a pre-ordered product becomes available for delivery, in ISO 8601 format. */
		availabilityDate?: string | null;

		/** Brand of the item. */
		brand?: string | null;

		/** URL for the canonical version of your item's landing page. */
		canonicalLink?: string | null;

		/** Required. The item's channel (online or local). Acceptable values are: - "`local`" - "`online`" */
		channel?: string | null;

		/** Color of the item. */
		color?: string | null;

		/** Condition or state of the item. Acceptable values are: - "`new`" - "`refurbished`" - "`used`" */
		condition?: string | null;

		/** Required. The two-letter ISO 639-1 language code for the item. */
		contentLanguage?: string | null;
		costOfGoodsSold?: Price;

		/** A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form (e.g., `{ "name": "size type", "value": "regular" }`). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Buy on Google (formerly known as Shopping Actions). */
		customAttributes?: Array<CustomAttribute>;

		/** A list of custom (merchant-provided) custom attribute groups. */
		customGroups?: Array<CustomGroup>;

		/** Custom label 0 for custom grouping of items in a Shopping campaign. */
		customLabel0?: string | null;

		/** Custom label 1 for custom grouping of items in a Shopping campaign. */
		customLabel1?: string | null;

		/** Custom label 2 for custom grouping of items in a Shopping campaign. */
		customLabel2?: string | null;

		/** Custom label 3 for custom grouping of items in a Shopping campaign. */
		customLabel3?: string | null;

		/** Custom label 4 for custom grouping of items in a Shopping campaign. */
		customLabel4?: string | null;

		/** Description of the item. */
		description?: string | null;

		/** Specifies the intended destinations for the product. */
		destinations?: Array<ProductDestination>;

		/** An identifier for an item for dynamic remarketing campaigns. */
		displayAdsId?: string | null;

		/** URL directly to your item's landing page for dynamic remarketing campaigns. */
		displayAdsLink?: string | null;

		/** Advertiser-specified recommendations. */
		displayAdsSimilarIds?: Array<string>;

		/** Title of an item for dynamic remarketing campaigns. */
		displayAdsTitle?: string | null;

		/** Offer margin for dynamic remarketing campaigns. */
		displayAdsValue?: number | null;

		/** The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - "`A`" - "`A+`" - "`A++`" - "`A+++`" - "`B`" - "`C`" - "`D`" - "`E`" - "`F`" - "`G`" */
		energyEfficiencyClass?: string | null;

		/** Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in Google Shopping is exposed in `productstatuses` as `googleExpirationDate` and might be earlier if `expirationDate` is too far in the future. */
		expirationDate?: string | null;

		/** Target gender of the item. Acceptable values are: - "`female`" - "`male`" - "`unisex`" */
		gender?: string | null;

		/** Google's category of the item (see [Google product taxonomy](https://support.google.com/merchants/answer/1705911)). When querying products, this field will contain the user provided value. There is currently no way to get back the auto assigned google product categories through the API. */
		googleProductCategory?: string | null;

		/** Global Trade Item Number (GTIN) of the item. */
		gtin?: string | null;

		/** The REST ID of the product. Content API methods that operate on products take this as their `productId` parameter. The REST ID for a product is of the form channel:contentLanguage: targetCountry: offerId. */
		id?: string | null;

		/** False when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Required according to the Unique Product Identifier Rules for all target countries except for Canada. */
		identifierExists?: boolean | null;

		/** URL of an image of the item. */
		imageLink?: string | null;
		installment?: Installment;

		/** Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant for a single price. */
		isBundle?: boolean | null;

		/** Shared identifier for all variants of the same product. */
		itemGroupId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#product`" */
		kind?: string | null;

		/** URL directly linking to your item's page on your website. */
		link?: string | null;
		loyaltyPoints?: LoyaltyPoints;

		/** The material of which the item is made. */
		material?: string | null;

		/** The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - "`A`" - "`A+`" - "`A++`" - "`A+++`" - "`B`" - "`C`" - "`D`" - "`E`" - "`F`" - "`G`" */
		maxEnergyEfficiencyClass?: string | null;

		/** Maximal product handling time (in business days). */
		maxHandlingTime?: string | null;

		/** The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - "`A`" - "`A+`" - "`A++`" - "`A+++`" - "`B`" - "`C`" - "`D`" - "`E`" - "`F`" - "`G`" */
		minEnergyEfficiencyClass?: string | null;

		/** Minimal product handling time (in business days). */
		minHandlingTime?: string | null;

		/** URL for the mobile-optimized version of your item's landing page. */
		mobileLink?: string | null;

		/** Manufacturer Part Number (MPN) of the item. */
		mpn?: string | null;

		/** The number of identical products in a merchant-defined multipack. */
		multipack?: string | null;

		/** Required. A unique identifier for the item. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. Only valid unicode characters are accepted. See the products feed specification for details. *Note:* Content API methods that operate on products take the REST ID of the product, *not* this identifier. */
		offerId?: string | null;

		/** Deprecated. */
		onlineOnly?: boolean | null;

		/** The item's pattern (e.g. polka dots). */
		pattern?: string | null;
		price?: Price;

		/** Your category of the item (formatted as in products data specification). */
		productType?: string | null;

		/** The unique ID of a promotion. */
		promotionIds?: Array<string>;
		salePrice?: Price;

		/** Date range during which the item is on sale (see products data specification ). */
		salePriceEffectiveDate?: string | null;

		/** The quantity of the product that is available for selling on Google. Supported only for online products. */
		sellOnGoogleQuantity?: string | null;

		/** Shipping rules. */
		shipping?: Array<ProductShipping>;
		shippingHeight?: ProductShippingDimension;

		/** The shipping label of the product, used to group product in account-level shipping rules. */
		shippingLabel?: string | null;
		shippingLength?: ProductShippingDimension;
		shippingWeight?: ProductShippingWeight;
		shippingWidth?: ProductShippingDimension;

		/** System in which the size is specified. Recommended for apparel items. Acceptable values are: - "`AU`" - "`BR`" - "`CN`" - "`DE`" - "`EU`" - "`FR`" - "`IT`" - "`JP`" - "`MEX`" - "`UK`" - "`US`" */
		sizeSystem?: string | null;

		/** The cut of the item. Recommended for apparel items. Acceptable values are: - "`big and tall`" - "`maternity`" - "`oversize`" - "`petite`" - "`plus`" - "`regular`" */
		sizeType?: string | null;

		/** Size of the item. Only one value is allowed. For variants with different sizes, insert a separate product for each size with the same `itemGroupId` value (see size definition). */
		sizes?: Array<string>;

		/** The source of the offer, i.e., how the offer was created. Acceptable values are: - "`api`" - "`crawl`" - "`feed`" */
		source?: string | null;

		/** Required. The CLDR territory code for the item. */
		targetCountry?: string | null;

		/** Tax information. */
		taxes?: Array<ProductTax>;

		/** Title of the item. */
		title?: string | null;
		unitPricingBaseMeasure?: ProductUnitPricingBaseMeasure;
		unitPricingMeasure?: ProductUnitPricingMeasure;

		/** Deprecated. The read-only list of intended destinations which passed validation. */
		validatedDestinations?: Array<string>;

		/** Read-only warnings. */
		warnings?: Array<Error>;
	}

	/**  Required product attributes are primarily defined by the products data specification. See the Products Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect. */
	export interface ProductFormProperties {

		/** Should be set to true if the item is targeted towards adults. */
		adult: FormControl<boolean | null | undefined>,

		/** Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise. */
		adwordsGrouping: FormControl<string | null | undefined>,

		/** Allows advertisers to override the item URL when the product is shown within the context of Product Ads. */
		adwordsRedirect: FormControl<string | null | undefined>,

		/** Target age group of the item. Acceptable values are: - "`adult`" - "`infant`" - "`kids`" - "`newborn`" - "`toddler`" - "`youngAdult`" */
		ageGroup: FormControl<string | null | undefined>,

		/** Availability status of the item. Acceptable values are: - "`in stock`" - "`out of stock`" - "`preorder`" */
		availability: FormControl<string | null | undefined>,

		/** The day a pre-ordered product becomes available for delivery, in ISO 8601 format. */
		availabilityDate: FormControl<string | null | undefined>,

		/** Brand of the item. */
		brand: FormControl<string | null | undefined>,

		/** URL for the canonical version of your item's landing page. */
		canonicalLink: FormControl<string | null | undefined>,

		/** Required. The item's channel (online or local). Acceptable values are: - "`local`" - "`online`" */
		channel: FormControl<string | null | undefined>,

		/** Color of the item. */
		color: FormControl<string | null | undefined>,

		/** Condition or state of the item. Acceptable values are: - "`new`" - "`refurbished`" - "`used`" */
		condition: FormControl<string | null | undefined>,

		/** Required. The two-letter ISO 639-1 language code for the item. */
		contentLanguage: FormControl<string | null | undefined>,

		/** Custom label 0 for custom grouping of items in a Shopping campaign. */
		customLabel0: FormControl<string | null | undefined>,

		/** Custom label 1 for custom grouping of items in a Shopping campaign. */
		customLabel1: FormControl<string | null | undefined>,

		/** Custom label 2 for custom grouping of items in a Shopping campaign. */
		customLabel2: FormControl<string | null | undefined>,

		/** Custom label 3 for custom grouping of items in a Shopping campaign. */
		customLabel3: FormControl<string | null | undefined>,

		/** Custom label 4 for custom grouping of items in a Shopping campaign. */
		customLabel4: FormControl<string | null | undefined>,

		/** Description of the item. */
		description: FormControl<string | null | undefined>,

		/** An identifier for an item for dynamic remarketing campaigns. */
		displayAdsId: FormControl<string | null | undefined>,

		/** URL directly to your item's landing page for dynamic remarketing campaigns. */
		displayAdsLink: FormControl<string | null | undefined>,

		/** Title of an item for dynamic remarketing campaigns. */
		displayAdsTitle: FormControl<string | null | undefined>,

		/** Offer margin for dynamic remarketing campaigns. */
		displayAdsValue: FormControl<number | null | undefined>,

		/** The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - "`A`" - "`A+`" - "`A++`" - "`A+++`" - "`B`" - "`C`" - "`D`" - "`E`" - "`F`" - "`G`" */
		energyEfficiencyClass: FormControl<string | null | undefined>,

		/** Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in Google Shopping is exposed in `productstatuses` as `googleExpirationDate` and might be earlier if `expirationDate` is too far in the future. */
		expirationDate: FormControl<string | null | undefined>,

		/** Target gender of the item. Acceptable values are: - "`female`" - "`male`" - "`unisex`" */
		gender: FormControl<string | null | undefined>,

		/** Google's category of the item (see [Google product taxonomy](https://support.google.com/merchants/answer/1705911)). When querying products, this field will contain the user provided value. There is currently no way to get back the auto assigned google product categories through the API. */
		googleProductCategory: FormControl<string | null | undefined>,

		/** Global Trade Item Number (GTIN) of the item. */
		gtin: FormControl<string | null | undefined>,

		/** The REST ID of the product. Content API methods that operate on products take this as their `productId` parameter. The REST ID for a product is of the form channel:contentLanguage: targetCountry: offerId. */
		id: FormControl<string | null | undefined>,

		/** False when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Required according to the Unique Product Identifier Rules for all target countries except for Canada. */
		identifierExists: FormControl<boolean | null | undefined>,

		/** URL of an image of the item. */
		imageLink: FormControl<string | null | undefined>,

		/** Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant for a single price. */
		isBundle: FormControl<boolean | null | undefined>,

		/** Shared identifier for all variants of the same product. */
		itemGroupId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#product`" */
		kind: FormControl<string | null | undefined>,

		/** URL directly linking to your item's page on your website. */
		link: FormControl<string | null | undefined>,

		/** The material of which the item is made. */
		material: FormControl<string | null | undefined>,

		/** The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - "`A`" - "`A+`" - "`A++`" - "`A+++`" - "`B`" - "`C`" - "`D`" - "`E`" - "`F`" - "`G`" */
		maxEnergyEfficiencyClass: FormControl<string | null | undefined>,

		/** Maximal product handling time (in business days). */
		maxHandlingTime: FormControl<string | null | undefined>,

		/** The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - "`A`" - "`A+`" - "`A++`" - "`A+++`" - "`B`" - "`C`" - "`D`" - "`E`" - "`F`" - "`G`" */
		minEnergyEfficiencyClass: FormControl<string | null | undefined>,

		/** Minimal product handling time (in business days). */
		minHandlingTime: FormControl<string | null | undefined>,

		/** URL for the mobile-optimized version of your item's landing page. */
		mobileLink: FormControl<string | null | undefined>,

		/** Manufacturer Part Number (MPN) of the item. */
		mpn: FormControl<string | null | undefined>,

		/** The number of identical products in a merchant-defined multipack. */
		multipack: FormControl<string | null | undefined>,

		/** Required. A unique identifier for the item. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. Only valid unicode characters are accepted. See the products feed specification for details. *Note:* Content API methods that operate on products take the REST ID of the product, *not* this identifier. */
		offerId: FormControl<string | null | undefined>,

		/** Deprecated. */
		onlineOnly: FormControl<boolean | null | undefined>,

		/** The item's pattern (e.g. polka dots). */
		pattern: FormControl<string | null | undefined>,

		/** Your category of the item (formatted as in products data specification). */
		productType: FormControl<string | null | undefined>,

		/** Date range during which the item is on sale (see products data specification ). */
		salePriceEffectiveDate: FormControl<string | null | undefined>,

		/** The quantity of the product that is available for selling on Google. Supported only for online products. */
		sellOnGoogleQuantity: FormControl<string | null | undefined>,

		/** The shipping label of the product, used to group product in account-level shipping rules. */
		shippingLabel: FormControl<string | null | undefined>,

		/** System in which the size is specified. Recommended for apparel items. Acceptable values are: - "`AU`" - "`BR`" - "`CN`" - "`DE`" - "`EU`" - "`FR`" - "`IT`" - "`JP`" - "`MEX`" - "`UK`" - "`US`" */
		sizeSystem: FormControl<string | null | undefined>,

		/** The cut of the item. Recommended for apparel items. Acceptable values are: - "`big and tall`" - "`maternity`" - "`oversize`" - "`petite`" - "`plus`" - "`regular`" */
		sizeType: FormControl<string | null | undefined>,

		/** The source of the offer, i.e., how the offer was created. Acceptable values are: - "`api`" - "`crawl`" - "`feed`" */
		source: FormControl<string | null | undefined>,

		/** Required. The CLDR territory code for the item. */
		targetCountry: FormControl<string | null | undefined>,

		/** Title of the item. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateProductFormGroup() {
		return new FormGroup<ProductFormProperties>({
			adult: new FormControl<boolean | null | undefined>(undefined),
			adwordsGrouping: new FormControl<string | null | undefined>(undefined),
			adwordsRedirect: new FormControl<string | null | undefined>(undefined),
			ageGroup: new FormControl<string | null | undefined>(undefined),
			availability: new FormControl<string | null | undefined>(undefined),
			availabilityDate: new FormControl<string | null | undefined>(undefined),
			brand: new FormControl<string | null | undefined>(undefined),
			canonicalLink: new FormControl<string | null | undefined>(undefined),
			channel: new FormControl<string | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			contentLanguage: new FormControl<string | null | undefined>(undefined),
			customLabel0: new FormControl<string | null | undefined>(undefined),
			customLabel1: new FormControl<string | null | undefined>(undefined),
			customLabel2: new FormControl<string | null | undefined>(undefined),
			customLabel3: new FormControl<string | null | undefined>(undefined),
			customLabel4: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayAdsId: new FormControl<string | null | undefined>(undefined),
			displayAdsLink: new FormControl<string | null | undefined>(undefined),
			displayAdsTitle: new FormControl<string | null | undefined>(undefined),
			displayAdsValue: new FormControl<number | null | undefined>(undefined),
			energyEfficiencyClass: new FormControl<string | null | undefined>(undefined),
			expirationDate: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			googleProductCategory: new FormControl<string | null | undefined>(undefined),
			gtin: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			identifierExists: new FormControl<boolean | null | undefined>(undefined),
			imageLink: new FormControl<string | null | undefined>(undefined),
			isBundle: new FormControl<boolean | null | undefined>(undefined),
			itemGroupId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			material: new FormControl<string | null | undefined>(undefined),
			maxEnergyEfficiencyClass: new FormControl<string | null | undefined>(undefined),
			maxHandlingTime: new FormControl<string | null | undefined>(undefined),
			minEnergyEfficiencyClass: new FormControl<string | null | undefined>(undefined),
			minHandlingTime: new FormControl<string | null | undefined>(undefined),
			mobileLink: new FormControl<string | null | undefined>(undefined),
			mpn: new FormControl<string | null | undefined>(undefined),
			multipack: new FormControl<string | null | undefined>(undefined),
			offerId: new FormControl<string | null | undefined>(undefined),
			onlineOnly: new FormControl<boolean | null | undefined>(undefined),
			pattern: new FormControl<string | null | undefined>(undefined),
			productType: new FormControl<string | null | undefined>(undefined),
			salePriceEffectiveDate: new FormControl<string | null | undefined>(undefined),
			sellOnGoogleQuantity: new FormControl<string | null | undefined>(undefined),
			shippingLabel: new FormControl<string | null | undefined>(undefined),
			sizeSystem: new FormControl<string | null | undefined>(undefined),
			sizeType: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			targetCountry: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductAspect {

		/** Deprecated. */
		aspectName?: string | null;

		/** Deprecated. */
		destinationName?: string | null;

		/** Deprecated. */
		intention?: string | null;
	}
	export interface ProductAspectFormProperties {

		/** Deprecated. */
		aspectName: FormControl<string | null | undefined>,

		/** Deprecated. */
		destinationName: FormControl<string | null | undefined>,

		/** Deprecated. */
		intention: FormControl<string | null | undefined>,
	}
	export function CreateProductAspectFormGroup() {
		return new FormGroup<ProductAspectFormProperties>({
			aspectName: new FormControl<string | null | undefined>(undefined),
			destinationName: new FormControl<string | null | undefined>(undefined),
			intention: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductDestination {

		/** The name of the destination. */
		destinationName?: string | null;

		/** Whether the destination is required, excluded or should be validated. Acceptable values are: - "`default`" - "`excluded`" - "`optional`" - "`required`" */
		intention?: string | null;
	}
	export interface ProductDestinationFormProperties {

		/** The name of the destination. */
		destinationName: FormControl<string | null | undefined>,

		/** Whether the destination is required, excluded or should be validated. Acceptable values are: - "`default`" - "`excluded`" - "`optional`" - "`required`" */
		intention: FormControl<string | null | undefined>,
	}
	export function CreateProductDestinationFormGroup() {
		return new FormGroup<ProductDestinationFormProperties>({
			destinationName: new FormControl<string | null | undefined>(undefined),
			intention: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductShipping {

		/** The CLDR territory code of the country to which an item will ship. */
		country?: string | null;

		/** The location where the shipping is applicable, represented by a location group name. */
		locationGroupName?: string | null;

		/** The numeric ID of a location that the shipping rate applies to as defined in the AdWords API. */
		locationId?: string | null;

		/** The postal code range that the shipping rate applies to, represented by a postal code, a postal code prefix followed by a * wildcard, a range between two postal codes or two postal code prefixes of equal length. */
		postalCode?: string | null;
		price?: Price;

		/** The geographic region to which a shipping rate applies. */
		region?: string | null;

		/** A free-form description of the service class or delivery speed. */
		service?: string | null;
	}
	export interface ProductShippingFormProperties {

		/** The CLDR territory code of the country to which an item will ship. */
		country: FormControl<string | null | undefined>,

		/** The location where the shipping is applicable, represented by a location group name. */
		locationGroupName: FormControl<string | null | undefined>,

		/** The numeric ID of a location that the shipping rate applies to as defined in the AdWords API. */
		locationId: FormControl<string | null | undefined>,

		/** The postal code range that the shipping rate applies to, represented by a postal code, a postal code prefix followed by a * wildcard, a range between two postal codes or two postal code prefixes of equal length. */
		postalCode: FormControl<string | null | undefined>,

		/** The geographic region to which a shipping rate applies. */
		region: FormControl<string | null | undefined>,

		/** A free-form description of the service class or delivery speed. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateProductShippingFormGroup() {
		return new FormGroup<ProductShippingFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			locationGroupName: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductShippingDimension {

		/** The unit of value. */
		unit?: string | null;

		/** The dimension of the product used to calculate the shipping cost of the item. */
		value?: number | null;
	}
	export interface ProductShippingDimensionFormProperties {

		/** The unit of value. */
		unit: FormControl<string | null | undefined>,

		/** The dimension of the product used to calculate the shipping cost of the item. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductShippingDimensionFormGroup() {
		return new FormGroup<ProductShippingDimensionFormProperties>({
			unit: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProductShippingWeight {

		/** The unit of value. */
		unit?: string | null;

		/** The weight of the product used to calculate the shipping cost of the item. */
		value?: number | null;
	}
	export interface ProductShippingWeightFormProperties {

		/** The unit of value. */
		unit: FormControl<string | null | undefined>,

		/** The weight of the product used to calculate the shipping cost of the item. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductShippingWeightFormGroup() {
		return new FormGroup<ProductShippingWeightFormProperties>({
			unit: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProductTax {

		/** The country within which the item is taxed, specified as a CLDR territory code. */
		country?: string | null;

		/** The numeric ID of a location that the tax rate applies to as defined in the AdWords API. */
		locationId?: string | null;

		/** The postal code range that the tax rate applies to, represented by a ZIP code, a ZIP code prefix using * wildcard, a range between two ZIP codes or two ZIP code prefixes of equal length. Examples: 94114, 94*, 94002-95460, 94*-95*. */
		postalCode?: string | null;

		/** The percentage of tax rate that applies to the item price. */
		rate?: number | null;

		/** The geographic region to which the tax rate applies. */
		region?: string | null;

		/** Should be set to true if tax is charged on shipping. */
		taxShip?: boolean | null;
	}
	export interface ProductTaxFormProperties {

		/** The country within which the item is taxed, specified as a CLDR territory code. */
		country: FormControl<string | null | undefined>,

		/** The numeric ID of a location that the tax rate applies to as defined in the AdWords API. */
		locationId: FormControl<string | null | undefined>,

		/** The postal code range that the tax rate applies to, represented by a ZIP code, a ZIP code prefix using * wildcard, a range between two ZIP codes or two ZIP code prefixes of equal length. Examples: 94114, 94*, 94002-95460, 94*-95*. */
		postalCode: FormControl<string | null | undefined>,

		/** The percentage of tax rate that applies to the item price. */
		rate: FormControl<number | null | undefined>,

		/** The geographic region to which the tax rate applies. */
		region: FormControl<string | null | undefined>,

		/** Should be set to true if tax is charged on shipping. */
		taxShip: FormControl<boolean | null | undefined>,
	}
	export function CreateProductTaxFormGroup() {
		return new FormGroup<ProductTaxFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			taxShip: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ProductUnitPricingBaseMeasure {

		/** The unit of the denominator. */
		unit?: string | null;

		/** The denominator of the unit price. */
		value?: string | null;
	}
	export interface ProductUnitPricingBaseMeasureFormProperties {

		/** The unit of the denominator. */
		unit: FormControl<string | null | undefined>,

		/** The denominator of the unit price. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateProductUnitPricingBaseMeasureFormGroup() {
		return new FormGroup<ProductUnitPricingBaseMeasureFormProperties>({
			unit: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductUnitPricingMeasure {

		/** The unit of the measure. */
		unit?: string | null;

		/** The measure of an item. */
		value?: number | null;
	}
	export interface ProductUnitPricingMeasureFormProperties {

		/** The unit of the measure. */
		unit: FormControl<string | null | undefined>,

		/** The measure of an item. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductUnitPricingMeasureFormGroup() {
		return new FormGroup<ProductUnitPricingMeasureFormProperties>({
			unit: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The status of a product, i.e., information about a product computed asynchronously. */
	export interface ProductStatus {

		/** Date on which the item has been created, in ISO 8601 format. */
		creationDate?: string | null;

		/** DEPRECATED - never populated */
		dataQualityIssues?: Array<ProductStatusDataQualityIssue>;

		/** The intended destinations for the product. */
		destinationStatuses?: Array<ProductStatusDestinationStatus>;

		/** Date on which the item expires in Google Shopping, in ISO 8601 format. */
		googleExpirationDate?: string | null;

		/** A list of all issues associated with the product. */
		itemLevelIssues?: Array<ProductStatusItemLevelIssue>;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#productStatus`" */
		kind?: string | null;

		/** Date on which the item has been last updated, in ISO 8601 format. */
		lastUpdateDate?: string | null;

		/** The link to the product. */
		link?: string | null;

		/** Required product attributes are primarily defined by the products data specification. See the Products Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect. */
		product?: Product;

		/** The ID of the product for which status is reported. */
		productId?: string | null;

		/** The title of the product. */
		title?: string | null;
	}

	/** The status of a product, i.e., information about a product computed asynchronously. */
	export interface ProductStatusFormProperties {

		/** Date on which the item has been created, in ISO 8601 format. */
		creationDate: FormControl<string | null | undefined>,

		/** Date on which the item expires in Google Shopping, in ISO 8601 format. */
		googleExpirationDate: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#productStatus`" */
		kind: FormControl<string | null | undefined>,

		/** Date on which the item has been last updated, in ISO 8601 format. */
		lastUpdateDate: FormControl<string | null | undefined>,

		/** The link to the product. */
		link: FormControl<string | null | undefined>,

		/** The ID of the product for which status is reported. */
		productId: FormControl<string | null | undefined>,

		/** The title of the product. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateProductStatusFormGroup() {
		return new FormGroup<ProductStatusFormProperties>({
			creationDate: new FormControl<string | null | undefined>(undefined),
			googleExpirationDate: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			lastUpdateDate: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductStatusDataQualityIssue {
		destination?: string | null;
		detail?: string | null;
		fetchStatus?: string | null;
		id?: string | null;
		location?: string | null;
		severity?: string | null;
		timestamp?: string | null;
		valueOnLandingPage?: string | null;
		valueProvided?: string | null;
	}
	export interface ProductStatusDataQualityIssueFormProperties {
		destination: FormControl<string | null | undefined>,
		detail: FormControl<string | null | undefined>,
		fetchStatus: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		severity: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		valueOnLandingPage: FormControl<string | null | undefined>,
		valueProvided: FormControl<string | null | undefined>,
	}
	export function CreateProductStatusDataQualityIssueFormGroup() {
		return new FormGroup<ProductStatusDataQualityIssueFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			fetchStatus: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			valueOnLandingPage: new FormControl<string | null | undefined>(undefined),
			valueProvided: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductStatusDestinationStatus {

		/** Whether the approval status might change due to further processing. */
		approvalPending?: boolean | null;

		/** The destination's approval status. Acceptable values are: - "`approved`" - "`disapproved`" */
		approvalStatus?: string | null;

		/** The name of the destination */
		destination?: string | null;

		/** Provided for backward compatibility only. Always set to "required". Acceptable values are: - "`default`" - "`excluded`" - "`optional`" - "`required`" */
		intention?: string | null;
	}
	export interface ProductStatusDestinationStatusFormProperties {

		/** Whether the approval status might change due to further processing. */
		approvalPending: FormControl<boolean | null | undefined>,

		/** The destination's approval status. Acceptable values are: - "`approved`" - "`disapproved`" */
		approvalStatus: FormControl<string | null | undefined>,

		/** The name of the destination */
		destination: FormControl<string | null | undefined>,

		/** Provided for backward compatibility only. Always set to "required". Acceptable values are: - "`default`" - "`excluded`" - "`optional`" - "`required`" */
		intention: FormControl<string | null | undefined>,
	}
	export function CreateProductStatusDestinationStatusFormGroup() {
		return new FormGroup<ProductStatusDestinationStatusFormProperties>({
			approvalPending: new FormControl<boolean | null | undefined>(undefined),
			approvalStatus: new FormControl<string | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
			intention: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductStatusItemLevelIssue {

		/** The attribute's name, if the issue is caused by a single attribute. */
		attributeName?: string | null;

		/** The error code of the issue. */
		code?: string | null;

		/** A short issue description in English. */
		description?: string | null;

		/** The destination the issue applies to. */
		destination?: string | null;

		/** A detailed issue description in English. */
		detail?: string | null;

		/** The URL of a web page to help with resolving this issue. */
		documentation?: string | null;

		/** Whether the issue can be resolved by the merchant. */
		resolution?: string | null;

		/** How this issue affects serving of the offer. */
		servability?: string | null;
	}
	export interface ProductStatusItemLevelIssueFormProperties {

		/** The attribute's name, if the issue is caused by a single attribute. */
		attributeName: FormControl<string | null | undefined>,

		/** The error code of the issue. */
		code: FormControl<string | null | undefined>,

		/** A short issue description in English. */
		description: FormControl<string | null | undefined>,

		/** The destination the issue applies to. */
		destination: FormControl<string | null | undefined>,

		/** A detailed issue description in English. */
		detail: FormControl<string | null | undefined>,

		/** The URL of a web page to help with resolving this issue. */
		documentation: FormControl<string | null | undefined>,

		/** Whether the issue can be resolved by the merchant. */
		resolution: FormControl<string | null | undefined>,

		/** How this issue affects serving of the offer. */
		servability: FormControl<string | null | undefined>,
	}
	export function CreateProductStatusItemLevelIssueFormGroup() {
		return new FormGroup<ProductStatusItemLevelIssueFormProperties>({
			attributeName: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			documentation: new FormControl<string | null | undefined>(undefined),
			resolution: new FormControl<string | null | undefined>(undefined),
			servability: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductsCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<ProductsCustomBatchRequestEntry>;
	}
	export interface ProductsCustomBatchRequestFormProperties {
	}
	export function CreateProductsCustomBatchRequestFormGroup() {
		return new FormGroup<ProductsCustomBatchRequestFormProperties>({
		});

	}


	/** A batch entry encoding a single non-batch products request. */
	export interface ProductsCustomBatchRequestEntry {

		/** An entry ID, unique within the batch request. */
		batchId?: number | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/** The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" */
		method?: string | null;

		/** Required product attributes are primarily defined by the products data specification. See the Products Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect. */
		product?: Product;

		/** The ID of the product to get or delete. Only defined if the method is `get` or `delete`. */
		productId?: string | null;
	}

	/** A batch entry encoding a single non-batch products request. */
	export interface ProductsCustomBatchRequestEntryFormProperties {

		/** An entry ID, unique within the batch request. */
		batchId: FormControl<number | null | undefined>,

		/** The ID of the managing account. */
		merchantId: FormControl<string | null | undefined>,

		/** The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" */
		method: FormControl<string | null | undefined>,

		/** The ID of the product to get or delete. Only defined if the method is `get` or `delete`. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateProductsCustomBatchRequestEntryFormGroup() {
		return new FormGroup<ProductsCustomBatchRequestEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductsCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<ProductsCustomBatchResponseEntry>;

		/** Identifies what kind of resource this is. Value: the fixed string "content#productsCustomBatchResponse". */
		kind?: string | null;
	}
	export interface ProductsCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#productsCustomBatchResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateProductsCustomBatchResponseFormGroup() {
		return new FormGroup<ProductsCustomBatchResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A batch entry encoding a single non-batch products response. */
	export interface ProductsCustomBatchResponseEntry {

		/** The ID of the request entry this entry responds to. */
		batchId?: number | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#productsCustomBatchResponseEntry`" */
		kind?: string | null;

		/** Required product attributes are primarily defined by the products data specification. See the Products Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect. */
		product?: Product;
	}

	/** A batch entry encoding a single non-batch products response. */
	export interface ProductsCustomBatchResponseEntryFormProperties {

		/** The ID of the request entry this entry responds to. */
		batchId: FormControl<number | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#productsCustomBatchResponseEntry`" */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateProductsCustomBatchResponseEntryFormGroup() {
		return new FormGroup<ProductsCustomBatchResponseEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#productsListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of products. */
		nextPageToken?: string | null;
		resources?: Array<Product>;
	}
	export interface ProductsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#productsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token for the retrieval of the next page of products. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateProductsListResponseFormGroup() {
		return new FormGroup<ProductsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductstatusesCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<ProductstatusesCustomBatchRequestEntry>;
	}
	export interface ProductstatusesCustomBatchRequestFormProperties {
	}
	export function CreateProductstatusesCustomBatchRequestFormGroup() {
		return new FormGroup<ProductstatusesCustomBatchRequestFormProperties>({
		});

	}


	/** A batch entry encoding a single non-batch productstatuses request. */
	export interface ProductstatusesCustomBatchRequestEntry {

		/** An entry ID, unique within the batch request. */
		batchId?: number | null;

		/** If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination. */
		destinations?: Array<string>;
		includeAttributes?: boolean | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/** The method of the batch entry. Acceptable values are: - "`get`" */
		method?: string | null;

		/** The ID of the product whose status to get. */
		productId?: string | null;
	}

	/** A batch entry encoding a single non-batch productstatuses request. */
	export interface ProductstatusesCustomBatchRequestEntryFormProperties {

		/** An entry ID, unique within the batch request. */
		batchId: FormControl<number | null | undefined>,
		includeAttributes: FormControl<boolean | null | undefined>,

		/** The ID of the managing account. */
		merchantId: FormControl<string | null | undefined>,

		/** The method of the batch entry. Acceptable values are: - "`get`" */
		method: FormControl<string | null | undefined>,

		/** The ID of the product whose status to get. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateProductstatusesCustomBatchRequestEntryFormGroup() {
		return new FormGroup<ProductstatusesCustomBatchRequestEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			includeAttributes: new FormControl<boolean | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductstatusesCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<ProductstatusesCustomBatchResponseEntry>;

		/** Identifies what kind of resource this is. Value: the fixed string "content#productstatusesCustomBatchResponse". */
		kind?: string | null;
	}
	export interface ProductstatusesCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#productstatusesCustomBatchResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateProductstatusesCustomBatchResponseFormGroup() {
		return new FormGroup<ProductstatusesCustomBatchResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A batch entry encoding a single non-batch productstatuses response. */
	export interface ProductstatusesCustomBatchResponseEntry {

		/** The ID of the request entry this entry responds to. */
		batchId?: number | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesCustomBatchResponseEntry`" */
		kind?: string | null;

		/** The status of a product, i.e., information about a product computed asynchronously. */
		productStatus?: ProductStatus;
	}

	/** A batch entry encoding a single non-batch productstatuses response. */
	export interface ProductstatusesCustomBatchResponseEntryFormProperties {

		/** The ID of the request entry this entry responds to. */
		batchId: FormControl<number | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesCustomBatchResponseEntry`" */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateProductstatusesCustomBatchResponseEntryFormGroup() {
		return new FormGroup<ProductstatusesCustomBatchResponseEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductstatusesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#productstatusesListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of products statuses. */
		nextPageToken?: string | null;
		resources?: Array<ProductStatus>;
	}
	export interface ProductstatusesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#productstatusesListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token for the retrieval of the next page of products statuses. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateProductstatusesListResponseFormGroup() {
		return new FormGroup<ProductstatusesListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RateGroup {

		/** A list of shipping labels defining the products to which this rate group applies to. This is a disjunction: only one of the labels has to match for the rate group to apply. May only be empty for the last rate group of a service. Required. */
		applicableShippingLabels?: Array<string>;

		/** A list of carrier rates that can be referred to by `mainTable` or `singleValue`. */
		carrierRates?: Array<CarrierRate>;
		mainTable?: Table;

		/** Name of the rate group. Optional. If set has to be unique within shipping service. */
		name?: string | null;

		/** The single value of a rate group or the value of a rate group table's cell. Exactly one of `noShipping`, `flatRate`, `pricePercentage`, `carrierRateName`, `subtableName` must be set. */
		singleValue?: Value;

		/** A list of subtables referred to by `mainTable`. Can only be set if `mainTable` is set. */
		subtables?: Array<Table>;
	}
	export interface RateGroupFormProperties {

		/** Name of the rate group. Optional. If set has to be unique within shipping service. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRateGroupFormGroup() {
		return new FormGroup<RateGroupFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Table {

		/** A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set. */
		columnHeaders?: Headers;

		/** Name of the table. Required for subtables, ignored for the main table. */
		name?: string | null;

		/** A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set. */
		rowHeaders?: Headers;

		/** The list of rows that constitute the table. Must have the same length as `rowHeaders`. Required. */
		rows?: Array<Row>;
	}
	export interface TableFormProperties {

		/** Name of the table. Required for subtables, ignored for the main table. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTableFormGroup() {
		return new FormGroup<TableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Row {

		/** The list of cells that constitute the row. Must have the same length as `columnHeaders` for two-dimensional tables, a length of 1 for one-dimensional tables. Required. */
		cells?: Array<Value>;
	}
	export interface RowFormProperties {
	}
	export function CreateRowFormGroup() {
		return new FormGroup<RowFormProperties>({
		});

	}


	/** The single value of a rate group or the value of a rate group table's cell. Exactly one of `noShipping`, `flatRate`, `pricePercentage`, `carrierRateName`, `subtableName` must be set. */
	export interface Value {

		/** The name of a carrier rate referring to a carrier rate defined in the same rate group. Can only be set if all other fields are not set. */
		carrierRateName?: string | null;
		flatRate?: Price;

		/** If true, then the product can't ship. Must be true when set, can only be set if all other fields are not set. */
		noShipping?: boolean | null;

		/** A percentage of the price represented as a number in decimal notation (e.g., `"5.4"`). Can only be set if all other fields are not set. */
		pricePercentage?: string | null;

		/** The name of a subtable. Can only be set in table cells (i.e., not for single values), and only if all other fields are not set. */
		subtableName?: string | null;
	}

	/** The single value of a rate group or the value of a rate group table's cell. Exactly one of `noShipping`, `flatRate`, `pricePercentage`, `carrierRateName`, `subtableName` must be set. */
	export interface ValueFormProperties {

		/** The name of a carrier rate referring to a carrier rate defined in the same rate group. Can only be set if all other fields are not set. */
		carrierRateName: FormControl<string | null | undefined>,

		/** If true, then the product can't ship. Must be true when set, can only be set if all other fields are not set. */
		noShipping: FormControl<boolean | null | undefined>,

		/** A percentage of the price represented as a number in decimal notation (e.g., `"5.4"`). Can only be set if all other fields are not set. */
		pricePercentage: FormControl<string | null | undefined>,

		/** The name of a subtable. Can only be set in table cells (i.e., not for single values), and only if all other fields are not set. */
		subtableName: FormControl<string | null | undefined>,
	}
	export function CreateValueFormGroup() {
		return new FormGroup<ValueFormProperties>({
			carrierRateName: new FormControl<string | null | undefined>(undefined),
			noShipping: new FormControl<boolean | null | undefined>(undefined),
			pricePercentage: new FormControl<string | null | undefined>(undefined),
			subtableName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Service {

		/** A boolean exposing the active status of the shipping service. Required. */
		active?: boolean | null;

		/** The CLDR code of the currency to which this service applies. Must match that of the prices in rate groups. */
		currency?: string | null;

		/** The CLDR territory code of the country to which the service applies. Required. */
		deliveryCountry?: string | null;
		deliveryTime?: DeliveryTime;

		/** Eligibility for this service. Acceptable values are: - "`All scenarios`" - "`All scenarios except Shopping Actions`" - "`Shopping Actions`" */
		eligibility?: string | null;
		minimumOrderValue?: Price;
		minimumOrderValueTable?: MinimumOrderValueTable;

		/** Free-form name of the service. Must be unique within target account. Required. */
		name?: string | null;
		pickupService?: PickupCarrierService;

		/** Shipping rate group definitions. Only the last one is allowed to have an empty `applicableShippingLabels`, which means "everything else". The other `applicableShippingLabels` must not overlap. */
		rateGroups?: Array<RateGroup>;

		/** Type of locations this service ships orders to. Acceptable values are: - "`delivery`" - "`pickup`" */
		shipmentType?: string | null;
	}
	export interface ServiceFormProperties {

		/** A boolean exposing the active status of the shipping service. Required. */
		active: FormControl<boolean | null | undefined>,

		/** The CLDR code of the currency to which this service applies. Must match that of the prices in rate groups. */
		currency: FormControl<string | null | undefined>,

		/** The CLDR territory code of the country to which the service applies. Required. */
		deliveryCountry: FormControl<string | null | undefined>,

		/** Eligibility for this service. Acceptable values are: - "`All scenarios`" - "`All scenarios except Shopping Actions`" - "`Shopping Actions`" */
		eligibility: FormControl<string | null | undefined>,

		/** Free-form name of the service. Must be unique within target account. Required. */
		name: FormControl<string | null | undefined>,

		/** Type of locations this service ships orders to. Acceptable values are: - "`delivery`" - "`pickup`" */
		shipmentType: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			deliveryCountry: new FormControl<string | null | undefined>(undefined),
			eligibility: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			shipmentType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role. */
	export interface ShippingSettings {

		/** The ID of the account to which these account shipping settings belong. Ignored upon update, always present in get request responses. */
		accountId?: string | null;

		/** A list of postal code groups that can be referred to in `services`. Optional. */
		postalCodeGroups?: Array<PostalCodeGroup>;

		/** The target account's list of services. Optional. */
		services?: Array<Service>;

		/** Optional. A list of warehouses which can be referred to in `services`. */
		warehouses?: Array<Warehouse>;
	}

	/** The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role. */
	export interface ShippingSettingsFormProperties {

		/** The ID of the account to which these account shipping settings belong. Ignored upon update, always present in get request responses. */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateShippingSettingsFormGroup() {
		return new FormGroup<ShippingSettingsFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A fulfillment warehouse, which stores and handles inventory. */
	export interface Warehouse {
		businessDayConfig?: BusinessDayConfig;
		cutoffTime?: WarehouseCutoffTime;

		/** Required. The number of days it takes for this warehouse to pack up and ship an item. This is on the warehouse level, but can be overridden on the offer level based on the attributes of an item. */
		handlingDays?: string | null;

		/** Required. The name of the warehouse. Must be unique within account. */
		name?: string | null;
		shippingAddress?: Address;
	}

	/** A fulfillment warehouse, which stores and handles inventory. */
	export interface WarehouseFormProperties {

		/** Required. The number of days it takes for this warehouse to pack up and ship an item. This is on the warehouse level, but can be overridden on the offer level based on the attributes of an item. */
		handlingDays: FormControl<string | null | undefined>,

		/** Required. The name of the warehouse. Must be unique within account. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateWarehouseFormGroup() {
		return new FormGroup<WarehouseFormProperties>({
			handlingDays: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WarehouseCutoffTime {

		/** Required. Hour (24-hour clock) of the cutoff time until which an order has to be placed to be processed in the same day by the warehouse. Hour is based on the timezone of warehouse. */
		hour?: number | null;

		/** Required. Minute of the cutoff time until which an order has to be placed to be processed in the same day by the warehouse. Minute is based on the timezone of warehouse. */
		minute?: number | null;
	}
	export interface WarehouseCutoffTimeFormProperties {

		/** Required. Hour (24-hour clock) of the cutoff time until which an order has to be placed to be processed in the same day by the warehouse. Hour is based on the timezone of warehouse. */
		hour: FormControl<number | null | undefined>,

		/** Required. Minute of the cutoff time until which an order has to be placed to be processed in the same day by the warehouse. Minute is based on the timezone of warehouse. */
		minute: FormControl<number | null | undefined>,
	}
	export function CreateWarehouseCutoffTimeFormGroup() {
		return new FormGroup<WarehouseCutoffTimeFormProperties>({
			hour: new FormControl<number | null | undefined>(undefined),
			minute: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ShippingsettingsCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<ShippingsettingsCustomBatchRequestEntry>;
	}
	export interface ShippingsettingsCustomBatchRequestFormProperties {
	}
	export function CreateShippingsettingsCustomBatchRequestFormGroup() {
		return new FormGroup<ShippingsettingsCustomBatchRequestFormProperties>({
		});

	}


	/** A batch entry encoding a single non-batch shippingsettings request. */
	export interface ShippingsettingsCustomBatchRequestEntry {

		/** The ID of the account for which to get/update account shipping settings. */
		accountId?: string | null;

		/** An entry ID, unique within the batch request. */
		batchId?: number | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/** The method of the batch entry. Acceptable values are: - "`get`" - "`update`" */
		method?: string | null;

		/** The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role. */
		shippingSettings?: ShippingSettings;
	}

	/** A batch entry encoding a single non-batch shippingsettings request. */
	export interface ShippingsettingsCustomBatchRequestEntryFormProperties {

		/** The ID of the account for which to get/update account shipping settings. */
		accountId: FormControl<string | null | undefined>,

		/** An entry ID, unique within the batch request. */
		batchId: FormControl<number | null | undefined>,

		/** The ID of the managing account. */
		merchantId: FormControl<string | null | undefined>,

		/** The method of the batch entry. Acceptable values are: - "`get`" - "`update`" */
		method: FormControl<string | null | undefined>,
	}
	export function CreateShippingsettingsCustomBatchRequestEntryFormGroup() {
		return new FormGroup<ShippingsettingsCustomBatchRequestEntryFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			batchId: new FormControl<number | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShippingsettingsCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<ShippingsettingsCustomBatchResponseEntry>;

		/** Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsCustomBatchResponse". */
		kind?: string | null;
	}
	export interface ShippingsettingsCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsCustomBatchResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateShippingsettingsCustomBatchResponseFormGroup() {
		return new FormGroup<ShippingsettingsCustomBatchResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A batch entry encoding a single non-batch shipping settings response. */
	export interface ShippingsettingsCustomBatchResponseEntry {

		/** The ID of the request entry to which this entry responds. */
		batchId?: number | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsCustomBatchResponseEntry`" */
		kind?: string | null;

		/** The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role. */
		shippingSettings?: ShippingSettings;
	}

	/** A batch entry encoding a single non-batch shipping settings response. */
	export interface ShippingsettingsCustomBatchResponseEntryFormProperties {

		/** The ID of the request entry to which this entry responds. */
		batchId: FormControl<number | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsCustomBatchResponseEntry`" */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateShippingsettingsCustomBatchResponseEntryFormGroup() {
		return new FormGroup<ShippingsettingsCustomBatchResponseEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShippingsettingsGetSupportedCarriersResponse {

		/** A list of supported carriers. May be empty. */
		carriers?: Array<CarriersCarrier>;

		/** Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsGetSupportedCarriersResponse". */
		kind?: string | null;
	}
	export interface ShippingsettingsGetSupportedCarriersResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsGetSupportedCarriersResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateShippingsettingsGetSupportedCarriersResponseFormGroup() {
		return new FormGroup<ShippingsettingsGetSupportedCarriersResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShippingsettingsGetSupportedHolidaysResponse {

		/** A list of holidays applicable for delivery guarantees. May be empty. */
		holidays?: Array<HolidaysHoliday>;

		/** Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsGetSupportedHolidaysResponse". */
		kind?: string | null;
	}
	export interface ShippingsettingsGetSupportedHolidaysResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsGetSupportedHolidaysResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateShippingsettingsGetSupportedHolidaysResponseFormGroup() {
		return new FormGroup<ShippingsettingsGetSupportedHolidaysResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShippingsettingsGetSupportedPickupServicesResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsGetSupportedPickupServicesResponse". */
		kind?: string | null;

		/** A list of supported pickup services. May be empty. */
		pickupServices?: Array<PickupServicesPickupService>;
	}
	export interface ShippingsettingsGetSupportedPickupServicesResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsGetSupportedPickupServicesResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateShippingsettingsGetSupportedPickupServicesResponseFormGroup() {
		return new FormGroup<ShippingsettingsGetSupportedPickupServicesResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShippingsettingsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of shipping settings. */
		nextPageToken?: string | null;
		resources?: Array<ShippingSettings>;
	}
	export interface ShippingsettingsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsListResponse". */
		kind: FormControl<string | null | undefined>,

		/** The token for the retrieval of the next page of shipping settings. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateShippingsettingsListResponseFormGroup() {
		return new FormGroup<ShippingsettingsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns information about the authenticated user.
		 * Get accounts/authinfo
		 * @return {AccountsAuthInfoResponse} Successful response
		 */
		Content_accounts_authinfo(): Observable<AccountsAuthInfoResponse> {
			return this.http.get<AccountsAuthInfoResponse>(this.baseUri + 'accounts/authinfo', {});
		}

		/**
		 * Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
		 * Post accounts/batch
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {AccountsCustomBatchResponse} Successful response
		 */
		Content_accounts_custombatch(dryRun: boolean | null | undefined, requestBody: AccountsCustomBatchRequest): Observable<AccountsCustomBatchResponse> {
			return this.http.post<AccountsCustomBatchResponse>(this.baseUri + 'accounts/batch?dryRun=' + dryRun, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves multiple Merchant Center account statuses in a single request.
		 * Post accountstatuses/batch
		 * @return {AccountstatusesCustomBatchResponse} Successful response
		 */
		Content_accountstatuses_custombatch(requestBody: AccountstatusesCustomBatchRequest): Observable<AccountstatusesCustomBatchResponse> {
			return this.http.post<AccountstatusesCustomBatchResponse>(this.baseUri + 'accountstatuses/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves and updates tax settings of multiple accounts in a single request.
		 * Post accounttax/batch
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {AccounttaxCustomBatchResponse} Successful response
		 */
		Content_accounttax_custombatch(dryRun: boolean | null | undefined, requestBody: AccounttaxCustomBatchRequest): Observable<AccounttaxCustomBatchResponse> {
			return this.http.post<AccounttaxCustomBatchResponse>(this.baseUri + 'accounttax/batch?dryRun=' + dryRun, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
		 * Post datafeeds/batch
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {DatafeedsCustomBatchResponse} Successful response
		 */
		Content_datafeeds_custombatch(dryRun: boolean | null | undefined, requestBody: DatafeedsCustomBatchRequest): Observable<DatafeedsCustomBatchResponse> {
			return this.http.post<DatafeedsCustomBatchResponse>(this.baseUri + 'datafeeds/batch?dryRun=' + dryRun, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets multiple Merchant Center datafeed statuses in a single request.
		 * Post datafeedstatuses/batch
		 * @return {DatafeedstatusesCustomBatchResponse} Successful response
		 */
		Content_datafeedstatuses_custombatch(requestBody: DatafeedstatusesCustomBatchRequest): Observable<DatafeedstatusesCustomBatchResponse> {
			return this.http.post<DatafeedstatusesCustomBatchResponse>(this.baseUri + 'datafeedstatuses/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves and/or updates the LIA settings of multiple accounts in a single request.
		 * Post liasettings/batch
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {LiasettingsCustomBatchResponse} Successful response
		 */
		Content_liasettings_custombatch(dryRun: boolean | null | undefined, requestBody: LiasettingsCustomBatchRequest): Observable<LiasettingsCustomBatchResponse> {
			return this.http.post<LiasettingsCustomBatchResponse>(this.baseUri + 'liasettings/batch?dryRun=' + dryRun, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the list of POS data providers that have active settings for the all eiligible countries.
		 * Get liasettings/posdataproviders
		 * @return {LiasettingsListPosDataProvidersResponse} Successful response
		 */
		Content_liasettings_listposdataproviders(): Observable<LiasettingsListPosDataProvidersResponse> {
			return this.http.get<LiasettingsListPosDataProvidersResponse>(this.baseUri + 'liasettings/posdataproviders', {});
		}

		/**
		 * Retrieves or modifies multiple orders in a single request.
		 * Post orders/batch
		 * @return {OrdersCustomBatchResponse} Successful response
		 */
		Content_orders_custombatch(requestBody: OrdersCustomBatchRequest): Observable<OrdersCustomBatchResponse> {
			return this.http.post<OrdersCustomBatchResponse>(this.baseUri + 'orders/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Batches multiple POS-related calls in a single request.
		 * Post pos/batch
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {PosCustomBatchResponse} Successful response
		 */
		Content_pos_custombatch(dryRun: boolean | null | undefined, requestBody: PosCustomBatchRequest): Observable<PosCustomBatchResponse> {
			return this.http.post<PosCustomBatchResponse>(this.baseUri + 'pos/batch?dryRun=' + dryRun, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves, inserts, and deletes multiple products in a single request.
		 * Post products/batch
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {ProductsCustomBatchResponse} Successful response
		 */
		Content_products_custombatch(dryRun: boolean | null | undefined, requestBody: ProductsCustomBatchRequest): Observable<ProductsCustomBatchResponse> {
			return this.http.post<ProductsCustomBatchResponse>(this.baseUri + 'products/batch?dryRun=' + dryRun, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the statuses of multiple products in a single request.
		 * Post productstatuses/batch
		 * @param {boolean} includeAttributes Flag to include full product data in the results of this request. The default value is false.
		 * @return {ProductstatusesCustomBatchResponse} Successful response
		 */
		Content_productstatuses_custombatch(includeAttributes: boolean | null | undefined, requestBody: ProductstatusesCustomBatchRequest): Observable<ProductstatusesCustomBatchResponse> {
			return this.http.post<ProductstatusesCustomBatchResponse>(this.baseUri + 'productstatuses/batch?includeAttributes=' + includeAttributes, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves and updates the shipping settings of multiple accounts in a single request.
		 * Post shippingsettings/batch
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {ShippingsettingsCustomBatchResponse} Successful response
		 */
		Content_shippingsettings_custombatch(dryRun: boolean | null | undefined, requestBody: ShippingsettingsCustomBatchRequest): Observable<ShippingsettingsCustomBatchResponse> {
			return this.http.post<ShippingsettingsCustomBatchResponse>(this.baseUri + 'shippingsettings/batch?dryRun=' + dryRun, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the sub-accounts in your Merchant Center account.
		 * Get {merchantId}/accounts
		 * @param {string} merchantId The ID of the managing account. This must be a multi-client account.
		 * @param {number} maxResults The maximum number of accounts to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {AccountsListResponse} Successful response
		 */
		Content_accounts_list(merchantId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<AccountsListResponse> {
			return this.http.get<AccountsListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Creates a Merchant Center sub-account.
		 * Post {merchantId}/accounts
		 * @param {string} merchantId The ID of the managing account. This must be a multi-client account.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {Account} Successful response
		 */
		Content_accounts_insert(merchantId: string, dryRun: boolean | null | undefined, requestBody: Account): Observable<Account> {
			return this.http.post<Account>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Merchant Center sub-account.
		 * Delete {merchantId}/accounts/{accountId}
		 * @param {string} merchantId The ID of the managing account. This must be a multi-client account, and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @param {boolean} force Flag to delete sub-accounts with products. The default value is false.
		 * @return {void} Successful response
		 */
		Content_accounts_delete(merchantId: string, accountId: string, dryRun: boolean | null | undefined, force: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&dryRun=' + dryRun + '&force=' + force + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a Merchant Center account.
		 * Get {merchantId}/accounts/{accountId}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account.
		 * @return {Account} Successful response
		 */
		Content_accounts_get(merchantId: string, accountId: string): Observable<Account> {
			return this.http.get<Account>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '', {});
		}

		/**
		 * Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
		 * Put {merchantId}/accounts/{accountId}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {Account} Successful response
		 */
		Content_accounts_update(merchantId: string, accountId: string, dryRun: boolean | null | undefined, requestBody: Account): Observable<Account> {
			return this.http.put<Account>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Claims the website of a Merchant Center sub-account.
		 * Post {merchantId}/accounts/{accountId}/claimwebsite
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account whose website is claimed.
		 * @param {boolean} overwrite Only available to selected merchants. When set to `True`, this flag removes any existing claim on the requested website by another account and replaces it with a claim from this account.
		 * @return {AccountsClaimWebsiteResponse} Successful response
		 */
		Content_accounts_claimwebsite(merchantId: string, accountId: string, overwrite: boolean | null | undefined): Observable<AccountsClaimWebsiteResponse> {
			return this.http.post<AccountsClaimWebsiteResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/claimwebsite&overwrite=' + overwrite + '', null, {});
		}

		/**
		 * Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
		 * Post {merchantId}/accounts/{accountId}/link
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account that should be linked.
		 * @return {AccountsLinkResponse} Successful response
		 */
		Content_accounts_link(merchantId: string, accountId: string, requestBody: AccountsLinkRequest): Observable<AccountsLinkResponse> {
			return this.http.post<AccountsLinkResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/link', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the statuses of the sub-accounts in your Merchant Center account.
		 * Get {merchantId}/accountstatuses
		 * @param {string} merchantId The ID of the managing account. This must be a multi-client account.
		 * @param {Array<string>} destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
		 * @param {number} maxResults The maximum number of account statuses to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {AccountstatusesListResponse} Successful response
		 */
		Content_accountstatuses_list(merchantId: string, destinations: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<AccountstatusesListResponse> {
			return this.http.get<AccountstatusesListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accountstatuses&' + destinations?.map(z => `destinations=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
		 * Get {merchantId}/accountstatuses/{accountId}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account.
		 * @param {Array<string>} destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
		 * @return {AccountStatus} Successful response
		 */
		Content_accountstatuses_get(merchantId: string, accountId: string, destinations: Array<string> | null | undefined): Observable<AccountStatus> {
			return this.http.get<AccountStatus>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accountstatuses/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&' + destinations?.map(z => `destinations=${encodeURIComponent(z)}`).join('&') + '', {});
		}

		/**
		 * Lists the tax settings of the sub-accounts in your Merchant Center account.
		 * Get {merchantId}/accounttax
		 * @param {string} merchantId The ID of the managing account. This must be a multi-client account.
		 * @param {number} maxResults The maximum number of tax settings to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {AccounttaxListResponse} Successful response
		 */
		Content_accounttax_list(merchantId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<AccounttaxListResponse> {
			return this.http.get<AccounttaxListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounttax&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Retrieves the tax settings of the account.
		 * Get {merchantId}/accounttax/{accountId}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to get/update account tax settings.
		 * @return {AccountTax} Successful response
		 */
		Content_accounttax_get(merchantId: string, accountId: string): Observable<AccountTax> {
			return this.http.get<AccountTax>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounttax/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '', {});
		}

		/**
		 * Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.
		 * Put {merchantId}/accounttax/{accountId}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to get/update account tax settings.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {AccountTax} Successful response
		 */
		Content_accounttax_update(merchantId: string, accountId: string, dryRun: boolean | null | undefined, requestBody: AccountTax): Observable<AccountTax> {
			return this.http.put<AccountTax>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounttax/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the configurations for datafeeds in your Merchant Center account.
		 * Get {merchantId}/datafeeds
		 * @param {string} merchantId The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
		 * @param {number} maxResults The maximum number of products to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {DatafeedsListResponse} Successful response
		 */
		Content_datafeeds_list(merchantId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<DatafeedsListResponse> {
			return this.http.get<DatafeedsListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeeds&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Registers a datafeed configuration with your Merchant Center account.
		 * Post {merchantId}/datafeeds
		 * @param {string} merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {Datafeed} Successful response
		 */
		Content_datafeeds_insert(merchantId: string, dryRun: boolean | null | undefined, requestBody: Datafeed): Observable<Datafeed> {
			return this.http.post<Datafeed>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeeds&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a datafeed configuration from your Merchant Center account.
		 * Delete {merchantId}/datafeeds/{datafeedId}
		 * @param {string} merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
		 * @param {string} datafeedId The ID of the datafeed.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_datafeeds_delete(merchantId: string, datafeedId: string, dryRun: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeeds/' + (datafeedId == null ? '' : encodeURIComponent(datafeedId)) + '&dryRun=' + dryRun + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a datafeed configuration from your Merchant Center account.
		 * Get {merchantId}/datafeeds/{datafeedId}
		 * @param {string} merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
		 * @param {string} datafeedId The ID of the datafeed.
		 * @return {Datafeed} Successful response
		 */
		Content_datafeeds_get(merchantId: string, datafeedId: string): Observable<Datafeed> {
			return this.http.get<Datafeed>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeeds/' + (datafeedId == null ? '' : encodeURIComponent(datafeedId)) + '', {});
		}

		/**
		 * Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.
		 * Put {merchantId}/datafeeds/{datafeedId}
		 * @param {string} merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
		 * @param {string} datafeedId The ID of the datafeed.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {Datafeed} Successful response
		 */
		Content_datafeeds_update(merchantId: string, datafeedId: string, dryRun: boolean | null | undefined, requestBody: Datafeed): Observable<Datafeed> {
			return this.http.put<Datafeed>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeeds/' + (datafeedId == null ? '' : encodeURIComponent(datafeedId)) + '&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the Products service to update your product data.
		 * Post {merchantId}/datafeeds/{datafeedId}/fetchNow
		 * @param {string} merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
		 * @param {string} datafeedId The ID of the datafeed to be fetched.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {DatafeedsFetchNowResponse} Successful response
		 */
		Content_datafeeds_fetchnow(merchantId: string, datafeedId: string, dryRun: boolean | null | undefined): Observable<DatafeedsFetchNowResponse> {
			return this.http.post<DatafeedsFetchNowResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeeds/' + (datafeedId == null ? '' : encodeURIComponent(datafeedId)) + '/fetchNow&dryRun=' + dryRun + '', null, {});
		}

		/**
		 * Lists the statuses of the datafeeds in your Merchant Center account.
		 * Get {merchantId}/datafeedstatuses
		 * @param {string} merchantId The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
		 * @param {number} maxResults The maximum number of products to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {DatafeedstatusesListResponse} Successful response
		 */
		Content_datafeedstatuses_list(merchantId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<DatafeedstatusesListResponse> {
			return this.http.get<DatafeedstatusesListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeedstatuses&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Retrieves the status of a datafeed from your Merchant Center account.
		 * Get {merchantId}/datafeedstatuses/{datafeedId}
		 * @param {string} merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
		 * @param {string} datafeedId The ID of the datafeed.
		 * @param {string} country The country for which to get the datafeed status. If this parameter is provided then language must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
		 * @param {string} language The language for which to get the datafeed status. If this parameter is provided then country must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
		 * @return {DatafeedStatus} Successful response
		 */
		Content_datafeedstatuses_get(merchantId: string, datafeedId: string, country: string | null | undefined, language: string | null | undefined): Observable<DatafeedStatus> {
			return this.http.get<DatafeedStatus>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeedstatuses/' + (datafeedId == null ? '' : encodeURIComponent(datafeedId)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '', {});
		}

		/**
		 * Lists the LIA settings of the sub-accounts in your Merchant Center account.
		 * Get {merchantId}/liasettings
		 * @param {string} merchantId The ID of the managing account. This must be a multi-client account.
		 * @param {number} maxResults The maximum number of LIA settings to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {LiasettingsListResponse} Successful response
		 */
		Content_liasettings_list(merchantId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<LiasettingsListResponse> {
			return this.http.get<LiasettingsListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Retrieves the LIA settings of the account.
		 * Get {merchantId}/liasettings/{accountId}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to get or update LIA settings.
		 * @return {LiaSettings} Successful response
		 */
		Content_liasettings_get(merchantId: string, accountId: string): Observable<LiaSettings> {
			return this.http.get<LiaSettings>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '', {});
		}

		/**
		 * Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.
		 * Put {merchantId}/liasettings/{accountId}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to get or update LIA settings.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {LiaSettings} Successful response
		 */
		Content_liasettings_update(merchantId: string, accountId: string, dryRun: boolean | null | undefined, requestBody: LiaSettings): Observable<LiaSettings> {
			return this.http.put<LiaSettings>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the list of accessible Google My Business accounts.
		 * Get {merchantId}/liasettings/{accountId}/accessiblegmbaccounts
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to retrieve accessible Google My Business accounts.
		 * @return {LiasettingsGetAccessibleGmbAccountsResponse} Successful response
		 */
		Content_liasettings_getaccessiblegmbaccounts(merchantId: string, accountId: string): Observable<LiasettingsGetAccessibleGmbAccountsResponse> {
			return this.http.get<LiasettingsGetAccessibleGmbAccountsResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/accessiblegmbaccounts', {});
		}

		/**
		 * Requests access to a specified Google My Business account.
		 * Post {merchantId}/liasettings/{accountId}/requestgmbaccess
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which GMB access is requested.
		 * @param {string} gmbEmail The email of the Google My Business account.
		 * @return {LiasettingsRequestGmbAccessResponse} Successful response
		 */
		Content_liasettings_requestgmbaccess(merchantId: string, accountId: string, gmbEmail: string): Observable<LiasettingsRequestGmbAccessResponse> {
			return this.http.post<LiasettingsRequestGmbAccessResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/requestgmbaccess&gmbEmail=' + (gmbEmail == null ? '' : encodeURIComponent(gmbEmail)) + '', null, {});
		}

		/**
		 * Requests inventory validation for the specified country.
		 * Post {merchantId}/liasettings/{accountId}/requestinventoryverification/{country}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} country The country for which inventory validation is requested.
		 * @return {LiasettingsRequestInventoryVerificationResponse} Successful response
		 */
		Content_liasettings_requestinventoryverification(merchantId: string, accountId: string, country: string): Observable<LiasettingsRequestInventoryVerificationResponse> {
			return this.http.post<LiasettingsRequestInventoryVerificationResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/requestinventoryverification/' + (country == null ? '' : encodeURIComponent(country)) + '', null, {});
		}

		/**
		 * Sets the inventory verification contract for the specified country.
		 * Post {merchantId}/liasettings/{accountId}/setinventoryverificationcontact
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} country The country for which inventory verification is requested.
		 * @param {string} language The language for which inventory verification is requested.
		 * @param {string} contactName The name of the inventory verification contact.
		 * @param {string} contactEmail The email of the inventory verification contact.
		 * @return {LiasettingsSetInventoryVerificationContactResponse} Successful response
		 */
		Content_liasettings_setinventoryverificationcontact(merchantId: string, accountId: string, country: string, language: string, contactName: string, contactEmail: string): Observable<LiasettingsSetInventoryVerificationContactResponse> {
			return this.http.post<LiasettingsSetInventoryVerificationContactResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/setinventoryverificationcontact&country=' + (country == null ? '' : encodeURIComponent(country)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&contactName=' + (contactName == null ? '' : encodeURIComponent(contactName)) + '&contactEmail=' + (contactEmail == null ? '' : encodeURIComponent(contactEmail)) + '', null, {});
		}

		/**
		 * Sets the POS data provider for the specified country.
		 * Post {merchantId}/liasettings/{accountId}/setposdataprovider
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to retrieve accessible Google My Business accounts.
		 * @param {string} country The country for which the POS data provider is selected.
		 * @param {string} posDataProviderId The ID of POS data provider.
		 * @param {string} posExternalAccountId The account ID by which this merchant is known to the POS data provider.
		 * @return {LiasettingsSetPosDataProviderResponse} Successful response
		 */
		Content_liasettings_setposdataprovider(merchantId: string, accountId: string, country: string, posDataProviderId: string | null | undefined, posExternalAccountId: string | null | undefined): Observable<LiasettingsSetPosDataProviderResponse> {
			return this.http.post<LiasettingsSetPosDataProviderResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/setposdataprovider&country=' + (country == null ? '' : encodeURIComponent(country)) + '&posDataProviderId=' + (posDataProviderId == null ? '' : encodeURIComponent(posDataProviderId)) + '&posExternalAccountId=' + (posExternalAccountId == null ? '' : encodeURIComponent(posExternalAccountId)) + '', null, {});
		}

		/**
		 * Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.
		 * Post {merchantId}/orderinvoices/{orderId}/createChargeInvoice
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {OrderinvoicesCreateChargeInvoiceResponse} Successful response
		 */
		Content_orderinvoices_createchargeinvoice(merchantId: string, orderId: string, requestBody: OrderinvoicesCreateChargeInvoiceRequest): Observable<OrderinvoicesCreateChargeInvoiceResponse> {
			return this.http.post<OrderinvoicesCreateChargeInvoiceResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orderinvoices/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/createChargeInvoice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.
		 * Post {merchantId}/orderinvoices/{orderId}/createRefundInvoice
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {OrderinvoicesCreateRefundInvoiceResponse} Successful response
		 */
		Content_orderinvoices_createrefundinvoice(merchantId: string, orderId: string, requestBody: OrderinvoicesCreateRefundInvoiceRequest): Observable<OrderinvoicesCreateRefundInvoiceResponse> {
			return this.http.post<OrderinvoicesCreateRefundInvoiceResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orderinvoices/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/createRefundInvoice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a report for disbursements from your Merchant Center account.
		 * Get {merchantId}/orderreports/disbursements
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} disbursementEndDate The last date which disbursements occurred. In ISO 8601 format. Default: current date.
		 * @param {string} disbursementStartDate The first date which disbursements occurred. In ISO 8601 format.
		 * @param {number} maxResults The maximum number of disbursements to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {OrderreportsListDisbursementsResponse} Successful response
		 */
		Content_orderreports_listdisbursements(merchantId: string, disbursementEndDate: string | null | undefined, disbursementStartDate: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<OrderreportsListDisbursementsResponse> {
			return this.http.get<OrderreportsListDisbursementsResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orderreports/disbursements&disbursementEndDate=' + (disbursementEndDate == null ? '' : encodeURIComponent(disbursementEndDate)) + '&disbursementStartDate=' + (disbursementStartDate == null ? '' : encodeURIComponent(disbursementStartDate)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Retrieves a list of transactions for a disbursement from your Merchant Center account.
		 * Get {merchantId}/orderreports/disbursements/{disbursementId}/transactions
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} disbursementId The Google-provided ID of the disbursement (found in Wallet).
		 * @param {number} maxResults The maximum number of disbursements to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @param {string} transactionEndDate The last date in which transaction occurred. In ISO 8601 format. Default: current date.
		 * @param {string} transactionStartDate The first date in which transaction occurred. In ISO 8601 format.
		 * @return {OrderreportsListTransactionsResponse} Successful response
		 */
		Content_orderreports_listtransactions(merchantId: string, disbursementId: string, maxResults: number | null | undefined, pageToken: string | null | undefined, transactionEndDate: string | null | undefined, transactionStartDate: string | null | undefined): Observable<OrderreportsListTransactionsResponse> {
			return this.http.get<OrderreportsListTransactionsResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orderreports/disbursements/' + (disbursementId == null ? '' : encodeURIComponent(disbursementId)) + '/transactions&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&transactionEndDate=' + (transactionEndDate == null ? '' : encodeURIComponent(transactionEndDate)) + '&transactionStartDate=' + (transactionStartDate == null ? '' : encodeURIComponent(transactionStartDate)) + '', {});
		}

		/**
		 * Lists order returns in your Merchant Center account.
		 * Get {merchantId}/orderreturns
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} createdEndDate Obtains order returns created before this date (inclusively), in ISO 8601 format.
		 * @param {string} createdStartDate Obtains order returns created after this date (inclusively), in ISO 8601 format.
		 * @param {number} maxResults The maximum number of order returns to return in the response, used for paging. The default value is 25 returns per page, and the maximum allowed value is 250 returns per page.
		 * @param {Content_orderreturns_listOrderBy} orderBy Return the results in the specified order.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {OrderreturnsListResponse} Successful response
		 */
		Content_orderreturns_list(merchantId: string, createdEndDate: string | null | undefined, createdStartDate: string | null | undefined, maxResults: number | null | undefined, orderBy: Content_orderreturns_listOrderBy | null | undefined, pageToken: string | null | undefined): Observable<OrderreturnsListResponse> {
			return this.http.get<OrderreturnsListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orderreturns&createdEndDate=' + (createdEndDate == null ? '' : encodeURIComponent(createdEndDate)) + '&createdStartDate=' + (createdStartDate == null ? '' : encodeURIComponent(createdStartDate)) + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Retrieves an order return from your Merchant Center account.
		 * Get {merchantId}/orderreturns/{returnId}
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} returnId Merchant order return ID generated by Google.
		 * @return {MerchantOrderReturn} Successful response
		 */
		Content_orderreturns_get(merchantId: string, returnId: string): Observable<MerchantOrderReturn> {
			return this.http.get<MerchantOrderReturn>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orderreturns/' + (returnId == null ? '' : encodeURIComponent(returnId)) + '', {});
		}

		/**
		 * Lists the orders in your Merchant Center account.
		 * Get {merchantId}/orders
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {boolean} acknowledged Obtains orders that match the acknowledgement status. When set to true, obtains orders that have been acknowledged. When false, obtains orders that have not been acknowledged. We recommend using this filter set to `false`, in conjunction with the `acknowledge` call, such that only un-acknowledged orders are returned. 
		 * @param {number} maxResults The maximum number of orders to return in the response, used for paging. The default value is 25 orders per page, and the maximum allowed value is 250 orders per page.
		 * @param {string} orderBy Order results by placement date in descending or ascending order. Acceptable values are: - placedDateAsc - placedDateDesc 
		 * @param {string} pageToken The token returned by the previous request.
		 * @param {string} placedDateEnd Obtains orders placed before this date (exclusively), in ISO 8601 format.
		 * @param {string} placedDateStart Obtains orders placed after this date (inclusively), in ISO 8601 format.
		 * @param {Array<string>} statuses Obtains orders that match any of the specified statuses. Please note that `active` is a shortcut for `pendingShipment` and `partiallyShipped`, and `completed` is a shortcut for `shipped`, `partiallyDelivered`, `delivered`, `partiallyReturned`, `returned`, and `canceled`.
		 * @return {OrdersListResponse} Successful response
		 */
		Content_orders_list(merchantId: string, acknowledged: boolean | null | undefined, maxResults: number | null | undefined, orderBy: string | null | undefined, pageToken: string | null | undefined, placedDateEnd: string | null | undefined, placedDateStart: string | null | undefined, statuses: Array<string> | null | undefined): Observable<OrdersListResponse> {
			return this.http.get<OrdersListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders&acknowledged=' + acknowledged + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&placedDateEnd=' + (placedDateEnd == null ? '' : encodeURIComponent(placedDateEnd)) + '&placedDateStart=' + (placedDateStart == null ? '' : encodeURIComponent(placedDateStart)) + '&' + statuses?.map(z => `statuses=${encodeURIComponent(z)}`).join('&') + '', {});
		}

		/**
		 * Retrieves an order from your Merchant Center account.
		 * Get {merchantId}/orders/{orderId}
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {Order} Successful response
		 */
		Content_orders_get(merchantId: string, orderId: string): Observable<Order> {
			return this.http.get<Order>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '', {});
		}

		/**
		 * Marks an order as acknowledged.
		 * Post {merchantId}/orders/{orderId}/acknowledge
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {OrdersAcknowledgeResponse} Successful response
		 */
		Content_orders_acknowledge(merchantId: string, orderId: string, requestBody: OrdersAcknowledgeRequest): Observable<OrdersAcknowledgeResponse> {
			return this.http.post<OrdersAcknowledgeResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/acknowledge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels all line items in an order, making a full refund.
		 * Post {merchantId}/orders/{orderId}/cancel
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order to cancel.
		 * @return {OrdersCancelResponse} Successful response
		 */
		Content_orders_cancel(merchantId: string, orderId: string, requestBody: OrdersCancelRequest): Observable<OrdersCancelResponse> {
			return this.http.post<OrdersCancelResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels a line item, making a full refund.
		 * Post {merchantId}/orders/{orderId}/cancelLineItem
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {OrdersCancelLineItemResponse} Successful response
		 */
		Content_orders_cancellineitem(merchantId: string, orderId: string, requestBody: OrdersCancelLineItemRequest): Observable<OrdersCancelLineItemResponse> {
			return this.http.post<OrdersCancelLineItemResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/cancelLineItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.
		 * Post {merchantId}/orders/{orderId}/inStoreRefundLineItem
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {OrdersInStoreRefundLineItemResponse} Successful response
		 */
		Content_orders_instorerefundlineitem(merchantId: string, orderId: string, requestBody: OrdersInStoreRefundLineItemRequest): Observable<OrdersInStoreRefundLineItemResponse> {
			return this.http.post<OrdersInStoreRefundLineItemResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/inStoreRefundLineItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deprecated, please use returnRefundLineItem instead.
		 * Post {merchantId}/orders/{orderId}/refund
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order to refund.
		 * @return {OrdersRefundResponse} Successful response
		 */
		Content_orders_refund(merchantId: string, orderId: string, requestBody: OrdersRefundRequest): Observable<OrdersRefundResponse> {
			return this.http.post<OrdersRefundResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/refund', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rejects return on an line item.
		 * Post {merchantId}/orders/{orderId}/rejectReturnLineItem
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {OrdersRejectReturnLineItemResponse} Successful response
		 */
		Content_orders_rejectreturnlineitem(merchantId: string, orderId: string, requestBody: OrdersRejectReturnLineItemRequest): Observable<OrdersRejectReturnLineItemResponse> {
			return this.http.post<OrdersRejectReturnLineItemResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/rejectReturnLineItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a line item.
		 * Post {merchantId}/orders/{orderId}/returnLineItem
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {OrdersReturnLineItemResponse} Successful response
		 */
		Content_orders_returnlineitem(merchantId: string, orderId: string, requestBody: OrdersReturnLineItemRequest): Observable<OrdersReturnLineItemResponse> {
			return this.http.post<OrdersReturnLineItemResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/returnLineItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns and refunds a line item. Note that this method can only be called on fully shipped orders. Please also note that the Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
		 * Post {merchantId}/orders/{orderId}/returnRefundLineItem
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {OrdersReturnRefundLineItemResponse} Successful response
		 */
		Content_orders_returnrefundlineitem(merchantId: string, orderId: string, requestBody: OrdersReturnRefundLineItemRequest): Observable<OrdersReturnRefundLineItemResponse> {
			return this.http.post<OrdersReturnRefundLineItemResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/returnRefundLineItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
		 * Post {merchantId}/orders/{orderId}/setLineItemMetadata
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {OrdersSetLineItemMetadataResponse} Successful response
		 */
		Content_orders_setlineitemmetadata(merchantId: string, orderId: string, requestBody: OrdersSetLineItemMetadataRequest): Observable<OrdersSetLineItemMetadataResponse> {
			return this.http.post<OrdersSetLineItemMetadataResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/setLineItemMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Marks line item(s) as shipped.
		 * Post {merchantId}/orders/{orderId}/shipLineItems
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {OrdersShipLineItemsResponse} Successful response
		 */
		Content_orders_shiplineitems(merchantId: string, orderId: string, requestBody: OrdersShipLineItemsRequest): Observable<OrdersShipLineItemsResponse> {
			return this.http.post<OrdersShipLineItemsResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/shipLineItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sandbox only. Creates a test return.
		 * Post {merchantId}/orders/{orderId}/testreturn
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {OrdersCreateTestReturnResponse} Successful response
		 */
		Content_orders_createtestreturn(merchantId: string, orderId: string, requestBody: OrdersCreateTestReturnRequest): Observable<OrdersCreateTestReturnResponse> {
			return this.http.post<OrdersCreateTestReturnResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/testreturn', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates ship by and delivery by dates for a line item.
		 * Post {merchantId}/orders/{orderId}/updateLineItemShippingDetails
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {OrdersUpdateLineItemShippingDetailsResponse} Successful response
		 */
		Content_orders_updatelineitemshippingdetails(merchantId: string, orderId: string, requestBody: OrdersUpdateLineItemShippingDetailsRequest): Observable<OrdersUpdateLineItemShippingDetailsResponse> {
			return this.http.post<OrdersUpdateLineItemShippingDetailsResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/updateLineItemShippingDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the merchant order ID for a given order.
		 * Post {merchantId}/orders/{orderId}/updateMerchantOrderId
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {OrdersUpdateMerchantOrderIdResponse} Successful response
		 */
		Content_orders_updatemerchantorderid(merchantId: string, orderId: string, requestBody: OrdersUpdateMerchantOrderIdRequest): Observable<OrdersUpdateMerchantOrderIdResponse> {
			return this.http.post<OrdersUpdateMerchantOrderIdResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/updateMerchantOrderId', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a shipment's status, carrier, and/or tracking ID.
		 * Post {merchantId}/orders/{orderId}/updateShipment
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {OrdersUpdateShipmentResponse} Successful response
		 */
		Content_orders_updateshipment(merchantId: string, orderId: string, requestBody: OrdersUpdateShipmentRequest): Observable<OrdersUpdateShipmentResponse> {
			return this.http.post<OrdersUpdateShipmentResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/updateShipment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves an order using merchant order ID.
		 * Get {merchantId}/ordersbymerchantid/{merchantOrderId}
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} merchantOrderId The merchant order ID to be looked for.
		 * @return {OrdersGetByMerchantOrderIdResponse} Successful response
		 */
		Content_orders_getbymerchantorderid(merchantId: string, merchantOrderId: string): Observable<OrdersGetByMerchantOrderIdResponse> {
			return this.http.get<OrdersGetByMerchantOrderIdResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/ordersbymerchantid/' + (merchantOrderId == null ? '' : encodeURIComponent(merchantOrderId)) + '', {});
		}

		/**
		 * Submit inventory for the given merchant.
		 * Post {merchantId}/pos/{targetMerchantId}/inventory
		 * @param {string} merchantId The ID of the POS or inventory data provider.
		 * @param {string} targetMerchantId The ID of the target merchant.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {PosInventoryResponse} Successful response
		 */
		Content_pos_inventory(merchantId: string, targetMerchantId: string, dryRun: boolean | null | undefined, requestBody: PosInventoryRequest): Observable<PosInventoryResponse> {
			return this.http.post<PosInventoryResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/pos/' + (targetMerchantId == null ? '' : encodeURIComponent(targetMerchantId)) + '/inventory&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Submit a sale event for the given merchant.
		 * Post {merchantId}/pos/{targetMerchantId}/sale
		 * @param {string} merchantId The ID of the POS or inventory data provider.
		 * @param {string} targetMerchantId The ID of the target merchant.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {PosSaleResponse} Successful response
		 */
		Content_pos_sale(merchantId: string, targetMerchantId: string, dryRun: boolean | null | undefined, requestBody: PosSaleRequest): Observable<PosSaleResponse> {
			return this.http.post<PosSaleResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/pos/' + (targetMerchantId == null ? '' : encodeURIComponent(targetMerchantId)) + '/sale&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the stores of the target merchant.
		 * Get {merchantId}/pos/{targetMerchantId}/store
		 * @param {string} merchantId The ID of the POS or inventory data provider.
		 * @param {string} targetMerchantId The ID of the target merchant.
		 * @return {PosListResponse} Successful response
		 */
		Content_pos_list(merchantId: string, targetMerchantId: string): Observable<PosListResponse> {
			return this.http.get<PosListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/pos/' + (targetMerchantId == null ? '' : encodeURIComponent(targetMerchantId)) + '/store', {});
		}

		/**
		 * Creates a store for the given merchant.
		 * Post {merchantId}/pos/{targetMerchantId}/store
		 * @param {string} merchantId The ID of the POS or inventory data provider.
		 * @param {string} targetMerchantId The ID of the target merchant.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {PosStore} Successful response
		 */
		Content_pos_insert(merchantId: string, targetMerchantId: string, dryRun: boolean | null | undefined, requestBody: PosStore): Observable<PosStore> {
			return this.http.post<PosStore>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/pos/' + (targetMerchantId == null ? '' : encodeURIComponent(targetMerchantId)) + '/store&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a store for the given merchant.
		 * Delete {merchantId}/pos/{targetMerchantId}/store/{storeCode}
		 * @param {string} merchantId The ID of the POS or inventory data provider.
		 * @param {string} targetMerchantId The ID of the target merchant.
		 * @param {string} storeCode A store code that is unique per merchant.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_pos_delete(merchantId: string, targetMerchantId: string, storeCode: string, dryRun: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/pos/' + (targetMerchantId == null ? '' : encodeURIComponent(targetMerchantId)) + '/store/' + (storeCode == null ? '' : encodeURIComponent(storeCode)) + '&dryRun=' + dryRun + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the given store.
		 * Get {merchantId}/pos/{targetMerchantId}/store/{storeCode}
		 * @param {string} merchantId The ID of the POS or inventory data provider.
		 * @param {string} targetMerchantId The ID of the target merchant.
		 * @param {string} storeCode A store code that is unique per merchant.
		 * @return {PosStore} Successful response
		 */
		Content_pos_get(merchantId: string, targetMerchantId: string, storeCode: string): Observable<PosStore> {
			return this.http.get<PosStore>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/pos/' + (targetMerchantId == null ? '' : encodeURIComponent(targetMerchantId)) + '/store/' + (storeCode == null ? '' : encodeURIComponent(storeCode)) + '', {});
		}

		/**
		 * Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.
		 * Get {merchantId}/products
		 * @param {string} merchantId The ID of the account that contains the products. This account cannot be a multi-client account.
		 * @param {boolean} includeInvalidInsertedItems Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
		 * @param {number} maxResults The maximum number of products to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {ProductsListResponse} Successful response
		 */
		Content_products_list(merchantId: string, includeInvalidInsertedItems: boolean | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<ProductsListResponse> {
			return this.http.get<ProductsListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/products&includeInvalidInsertedItems=' + includeInvalidInsertedItems + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
		 * Post {merchantId}/products
		 * @param {string} merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {Product} Successful response
		 */
		Content_products_insert(merchantId: string, dryRun: boolean | null | undefined, requestBody: Product): Observable<Product> {
			return this.http.post<Product>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/products&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a product from your Merchant Center account.
		 * Delete {merchantId}/products/{productId}
		 * @param {string} merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
		 * @param {string} productId The REST ID of the product.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_products_delete(merchantId: string, productId: string, dryRun: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '&dryRun=' + dryRun + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a product from your Merchant Center account.
		 * Get {merchantId}/products/{productId}
		 * @param {string} merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
		 * @param {string} productId The REST ID of the product.
		 * @return {Product} Successful response
		 */
		Content_products_get(merchantId: string, productId: string): Observable<Product> {
			return this.http.get<Product>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '', {});
		}

		/**
		 * Lists the statuses of the products in your Merchant Center account.
		 * Get {merchantId}/productstatuses
		 * @param {string} merchantId The ID of the account that contains the products. This account cannot be a multi-client account.
		 * @param {Array<string>} destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
		 * @param {boolean} includeAttributes Flag to include full product data in the results of the list request. The default value is false.
		 * @param {boolean} includeInvalidInsertedItems Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
		 * @param {number} maxResults The maximum number of product statuses to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {ProductstatusesListResponse} Successful response
		 */
		Content_productstatuses_list(merchantId: string, destinations: Array<string> | null | undefined, includeAttributes: boolean | null | undefined, includeInvalidInsertedItems: boolean | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<ProductstatusesListResponse> {
			return this.http.get<ProductstatusesListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/productstatuses&' + destinations?.map(z => `destinations=${encodeURIComponent(z)}`).join('&') + '&includeAttributes=' + includeAttributes + '&includeInvalidInsertedItems=' + includeInvalidInsertedItems + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Gets the status of a product from your Merchant Center account.
		 * Get {merchantId}/productstatuses/{productId}
		 * @param {string} merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
		 * @param {string} productId The REST ID of the product.
		 * @param {Array<string>} destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
		 * @param {boolean} includeAttributes Flag to include full product data in the result of this get request. The default value is false.
		 * @return {ProductStatus} Successful response
		 */
		Content_productstatuses_get(merchantId: string, productId: string, destinations: Array<string> | null | undefined, includeAttributes: boolean | null | undefined): Observable<ProductStatus> {
			return this.http.get<ProductStatus>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/productstatuses/' + (productId == null ? '' : encodeURIComponent(productId)) + '&' + destinations?.map(z => `destinations=${encodeURIComponent(z)}`).join('&') + '&includeAttributes=' + includeAttributes + '', {});
		}

		/**
		 * Lists the shipping settings of the sub-accounts in your Merchant Center account.
		 * Get {merchantId}/shippingsettings
		 * @param {string} merchantId The ID of the managing account. This must be a multi-client account.
		 * @param {number} maxResults The maximum number of shipping settings to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {ShippingsettingsListResponse} Successful response
		 */
		Content_shippingsettings_list(merchantId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<ShippingsettingsListResponse> {
			return this.http.get<ShippingsettingsListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/shippingsettings&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Retrieves the shipping settings of the account.
		 * Get {merchantId}/shippingsettings/{accountId}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to get/update shipping settings.
		 * @return {ShippingSettings} Successful response
		 */
		Content_shippingsettings_get(merchantId: string, accountId: string): Observable<ShippingSettings> {
			return this.http.get<ShippingSettings>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/shippingsettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '', {});
		}

		/**
		 * Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.
		 * Put {merchantId}/shippingsettings/{accountId}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to get/update shipping settings.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {ShippingSettings} Successful response
		 */
		Content_shippingsettings_update(merchantId: string, accountId: string, dryRun: boolean | null | undefined, requestBody: ShippingSettings): Observable<ShippingSettings> {
			return this.http.put<ShippingSettings>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/shippingsettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves supported carriers and carrier services for an account.
		 * Get {merchantId}/supportedCarriers
		 * @param {string} merchantId The ID of the account for which to retrieve the supported carriers.
		 * @return {ShippingsettingsGetSupportedCarriersResponse} Successful response
		 */
		Content_shippingsettings_getsupportedcarriers(merchantId: string): Observable<ShippingsettingsGetSupportedCarriersResponse> {
			return this.http.get<ShippingsettingsGetSupportedCarriersResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/supportedCarriers', {});
		}

		/**
		 * Retrieves supported holidays for an account.
		 * Get {merchantId}/supportedHolidays
		 * @param {string} merchantId The ID of the account for which to retrieve the supported holidays.
		 * @return {ShippingsettingsGetSupportedHolidaysResponse} Successful response
		 */
		Content_shippingsettings_getsupportedholidays(merchantId: string): Observable<ShippingsettingsGetSupportedHolidaysResponse> {
			return this.http.get<ShippingsettingsGetSupportedHolidaysResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/supportedHolidays', {});
		}

		/**
		 * Retrieves supported pickup services for an account.
		 * Get {merchantId}/supportedPickupServices
		 * @param {string} merchantId The ID of the account for which to retrieve the supported pickup services.
		 * @return {ShippingsettingsGetSupportedPickupServicesResponse} Successful response
		 */
		Content_shippingsettings_getsupportedpickupservices(merchantId: string): Observable<ShippingsettingsGetSupportedPickupServicesResponse> {
			return this.http.get<ShippingsettingsGetSupportedPickupServicesResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/supportedPickupServices', {});
		}

		/**
		 * Sandbox only. Creates a test order.
		 * Post {merchantId}/testorders
		 * @param {string} merchantId The ID of the account that should manage the order. This cannot be a multi-client account.
		 * @return {OrdersCreateTestOrderResponse} Successful response
		 */
		Content_orders_createtestorder(merchantId: string, requestBody: OrdersCreateTestOrderRequest): Observable<OrdersCreateTestOrderResponse> {
			return this.http.post<OrdersCreateTestOrderResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/testorders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".
		 * Post {merchantId}/testorders/{orderId}/advance
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the test order to modify.
		 * @return {OrdersAdvanceTestOrderResponse} Successful response
		 */
		Content_orders_advancetestorder(merchantId: string, orderId: string): Observable<OrdersAdvanceTestOrderResponse> {
			return this.http.post<OrdersAdvanceTestOrderResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/testorders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/advance', null, {});
		}

		/**
		 * Sandbox only. Cancels a test order for customer-initiated cancellation.
		 * Post {merchantId}/testorders/{orderId}/cancelByCustomer
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the test order to cancel.
		 * @return {OrdersCancelTestOrderByCustomerResponse} Successful response
		 */
		Content_orders_canceltestorderbycustomer(merchantId: string, orderId: string, requestBody: OrdersCancelTestOrderByCustomerRequest): Observable<OrdersCancelTestOrderByCustomerResponse> {
			return this.http.post<OrdersCancelTestOrderByCustomerResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/testorders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/cancelByCustomer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
		 * Get {merchantId}/testordertemplates/{templateName}
		 * @param {string} merchantId The ID of the account that should manage the order. This cannot be a multi-client account.
		 * @param {Content_orders_gettestordertemplateTemplateName} templateName The name of the template to retrieve.
		 * @param {string} country The country of the template to retrieve. Defaults to `US`.
		 * @return {OrdersGetTestOrderTemplateResponse} Successful response
		 */
		Content_orders_gettestordertemplate(merchantId: string, templateName: Content_orders_gettestordertemplateTemplateName, country: string | null | undefined): Observable<OrdersGetTestOrderTemplateResponse> {
			return this.http.get<OrdersGetTestOrderTemplateResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/testordertemplates/' + templateName + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '', {});
		}
	}

	export enum Content_orderreturns_listOrderBy { RETURN_CREATION_TIME_DESC = 'RETURN_CREATION_TIME_DESC', RETURN_CREATION_TIME_ASC = 'RETURN_CREATION_TIME_ASC' }

	export enum Content_orders_gettestordertemplateTemplateName { TEMPLATE1 = 'TEMPLATE1', TEMPLATE2 = 'TEMPLATE2', TEMPLATE1A = 'TEMPLATE1A', TEMPLATE1B = 'TEMPLATE1B', TEMPLATE3 = 'TEMPLATE3' }

}

