import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Account data. After the creation of a new account it may take a few minutes before it is fully operational. The methods delete, insert, and update require the admin role. */
	export interface Account {

		/** Indicates whether the merchant sells adult content. */
		adultContent?: boolean | null;

		/** List of linked AdWords accounts that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected either in the AdWords interface or through the  AdWords API. To delete an active link, or to cancel a link request, remove it from the list. */
		adwordsLinks?: Array<AccountAdwordsLink> | null;
		businessInformation?: AccountBusinessInformation | null;
		googleMyBusinessLink?: AccountGoogleMyBusinessLink | null;

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
		users?: Array<AccountUser> | null;

		/** The merchant's website. */
		websiteUrl?: string | null;

		/** List of linked YouTube channels that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected in the YT Creator Studio interface. To delete an active link, or to cancel a link request, remove it from the list. */
		youtubeChannelLinks?: Array<AccountYouTubeChannelLink> | null;
	}

	export interface AccountAdwordsLink {

		/** Customer ID of the AdWords account. */
		adwordsId?: string | null;

		/**
		 * Status of the link between this Merchant Center account and the AdWords account. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in Google AdWords or `pending` if it's pending approval. Upon insertion, it represents the intended status of the link. Re-uploading a link with status `active` when it's still pending or with status `pending` when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending.
		 * Acceptable values are:
		 * - "`active`"
		 * - "`pending`"
		 */
		status?: string | null;
	}

	export interface AccountBusinessInformation {
		address?: AccountAddress | null;
		customerService?: AccountCustomerService | null;

		/** The phone number of the business. */
		phoneNumber?: string | null;
	}

	export interface AccountAddress {

		/** CLDR country code (e.g. "US"). */
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

	export interface AccountCustomerService {

		/** Customer service email. */
		email?: string | null;

		/** Customer service phone number. */
		phoneNumber?: string | null;

		/** Customer service URL. */
		url?: string | null;
	}

	export interface AccountGoogleMyBusinessLink {

		/** The GMB email address of which a specific account within a GMB account. A sample account within a GMB account could be a business account with set of locations, managed under the GMB account. */
		gmbEmail?: string | null;

		/**
		 * Status of the link between this Merchant Center account and the GMB account.
		 * Acceptable values are:
		 * - "`active`"
		 * - "`pending`"
		 */
		status?: string | null;
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

	export interface AccountYouTubeChannelLink {

		/** Channel ID. */
		channelId?: string | null;

		/** Status of the link between this Merchant Center account and the YouTube channel. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in YT Creator Studio or `pending` if it's pending approval. Upon insertion, it represents the intended status of the link. Re-uploading a link with status `active` when it's still pending or with status `pending` when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending. */
		status?: string | null;
	}

	export interface AccountIdentifier {

		/** The aggregator ID, set for aggregators and subaccounts (in that case, it represents the aggregator of the subaccount). */
		aggregatorId?: string | null;

		/** The merchant account ID, set for individual accounts and subaccounts. */
		merchantId?: string | null;
	}


	/** The status of an account, i.e., information about its products, which is computed offline and not returned immediately at insertion time. */
	export interface AccountStatus {

		/** The ID of the account for which the status is reported. */
		accountId?: string | null;

		/** A list of account level issues. */
		accountLevelIssues?: Array<AccountStatusAccountLevelIssue> | null;

		/** DEPRECATED - never populated. */
		dataQualityIssues?: Array<AccountStatusDataQualityIssue> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountStatus`" */
		kind?: string | null;

		/** List of product-related data by channel, destination, and country. Data in this field may be delayed by up to 30 minutes. */
		products?: Array<AccountStatusProducts> | null;

		/** Whether the account's website is claimed or not. */
		websiteClaimed?: boolean | null;
	}

	export interface AccountStatusAccountLevelIssue {

		/** Country for which this issue is reported. */
		country?: string | null;

		/** The destination the issue applies to. */
		destination?: string | null;

		/** Additional details about the issue. */
		detail?: string | null;

		/** The URL of a web page to help resolving this issue. */
		documentation?: string | null;

		/** Issue identifier. */
		id?: string | null;

		/**
		 * Severity of the issue.
		 * Acceptable values are:
		 * - "`critical`"
		 * - "`error`"
		 * - "`suggestion`"
		 */
		severity?: string | null;

		/** Short description of the issue. */
		title?: string | null;
	}

	export interface AccountStatusDataQualityIssue {
		country?: string | null;
		destination?: string | null;
		detail?: string | null;
		displayedValue?: string | null;
		exampleItems?: Array<AccountStatusExampleItem> | null;
		id?: string | null;
		lastChecked?: string | null;
		location?: string | null;
		numItems?: string | null;

		/**
		 * Acceptable values are:
		 * - "`critical`"
		 * - "`error`"
		 * - "`suggestion`"
		 */
		severity?: string | null;
		submittedValue?: string | null;
	}

	export interface AccountStatusExampleItem {
		itemId?: string | null;
		link?: string | null;
		submittedValue?: string | null;
		title?: string | null;
		valueOnLandingPage?: string | null;
	}

	export interface AccountStatusProducts {

		/**
		 * The channel the data applies to.
		 * Acceptable values are:
		 * - "`local`"
		 * - "`online`"
		 */
		channel?: string | null;

		/** The country the data applies to. */
		country?: string | null;

		/** The destination the data applies to. */
		destination?: string | null;

		/** List of item-level issues. */
		itemLevelIssues?: Array<AccountStatusItemLevelIssue> | null;
		statistics?: AccountStatusStatistics | null;
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


	/** The tax settings of a merchant account. All methods require the admin role. */
	export interface AccountTax {

		/** Required. The ID of the account to which these account tax settings belong. */
		accountId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountTax". */
		kind?: string | null;

		/** Tax rules. Updating the tax rules will enable US taxes (not reversible). Defining no rules is equivalent to not charging tax at all. */
		rules?: Array<AccountTaxTaxRule> | null;
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

	export interface AccountsAuthInfoResponse {

		/**
		 * The account identifiers corresponding to the authenticated user.
		 * - For an individual account: only the merchant ID is defined
		 * - For an aggregator: only the aggregator ID is defined
		 * - For a subaccount of an MCA: both the merchant ID and the aggregator ID are defined.
		 */
		accountIdentifiers?: Array<AccountIdentifier> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountsAuthInfoResponse". */
		kind?: string | null;
	}

	export interface AccountsClaimWebsiteResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountsClaimWebsiteResponse". */
		kind?: string | null;
	}

	export interface AccountsCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<AccountsCustomBatchRequestEntry> | null;
	}


	/** A batch entry encoding a single non-batch accounts request. */
	export interface AccountsCustomBatchRequestEntry {

		/** Account data. After the creation of a new account it may take a few minutes before it is fully operational. The methods delete, insert, and update require the admin role. */
		account?: Account | null;

		/** The ID of the targeted account. Only defined if the method is not `insert`. */
		accountId?: string | null;

		/** An entry ID, unique within the batch request. */
		batchId?: string | null;

		/** Whether the account should be deleted if the account has offers. Only applicable if the method is `delete`. */
		force?: boolean | null;
		linkRequest?: AccountsCustomBatchRequestEntryLinkRequest | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/**
		 * The method of the batch entry.
		 * Acceptable values are:
		 * - "`claimWebsite`"
		 * - "`delete`"
		 * - "`get`"
		 * - "`insert`"
		 * - "`link`"
		 * - "`update`"
		 */
		method?: string | null;

		/** Only applicable if the method is `claimwebsite`. Indicates whether or not to take the claim from another account in case there is a conflict. */
		overwrite?: boolean | null;
	}

	export interface AccountsCustomBatchRequestEntryLinkRequest {

		/**
		 * Action to perform for this link. The `"request"` action is only available to select merchants.
		 * Acceptable values are:
		 * - "`approve`"
		 * - "`remove`"
		 * - "`request`"
		 */
		action?: string | null;

		/**
		 * Type of the link between the two accounts.
		 * Acceptable values are:
		 * - "`channelPartner`"
		 * - "`eCommercePlatform`"
		 */
		linkType?: string | null;

		/** The ID of the linked account. */
		linkedAccountId?: string | null;
	}

	export interface AccountsCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<AccountsCustomBatchResponseEntry> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountsCustomBatchResponse". */
		kind?: string | null;
	}


	/** A batch entry encoding a single non-batch accounts response. */
	export interface AccountsCustomBatchResponseEntry {

		/** Account data. After the creation of a new account it may take a few minutes before it is fully operational. The methods delete, insert, and update require the admin role. */
		account?: Account | null;

		/** The ID of the request entry this entry responds to. */
		batchId?: string | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountsCustomBatchResponseEntry`" */
		kind?: string | null;

		/**
		 * Deprecated. This field is never set.
		 * Acceptable values are:
		 * - "`active`"
		 * - "`inactive`"
		 * - "`pending`"
		 */
		linkStatus?: string | null;
	}


	/** A list of errors returned by a failed batch entry. */
	export interface Errors {

		/** The HTTP status of the first error in `errors`. */
		code?: string | null;

		/** A list of errors. */
		errors?: Array<Error> | null;

		/** The message of the first error in `errors`. */
		message?: string | null;
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

	export interface AccountsLinkRequest {

		/**
		 * Action to perform for this link. The `"request"` action is only available to select merchants.
		 * Acceptable values are:
		 * - "`approve`"
		 * - "`remove`"
		 * - "`request`"
		 */
		action?: string | null;

		/**
		 * Type of the link between the two accounts.
		 * Acceptable values are:
		 * - "`channelPartner`"
		 * - "`eCommercePlatform`"
		 */
		linkType?: string | null;

		/** The ID of the linked account. */
		linkedAccountId?: string | null;
	}

	export interface AccountsLinkResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountsLinkResponse". */
		kind?: string | null;
	}

	export interface AccountsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountsListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of accounts. */
		nextPageToken?: string | null;
		resources?: Array<Account> | null;
	}

	export interface AccountstatusesCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<AccountstatusesCustomBatchRequestEntry> | null;
	}


	/** A batch entry encoding a single non-batch accountstatuses request. */
	export interface AccountstatusesCustomBatchRequestEntry {

		/** The ID of the (sub-)account whose status to get. */
		accountId?: string | null;

		/** An entry ID, unique within the batch request. */
		batchId?: string | null;

		/** If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination. */
		destinations?: Array<string> | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/**
		 * The method of the batch entry.
		 * Acceptable values are:
		 * - "`get`"
		 */
		method?: string | null;
	}

	export interface AccountstatusesCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<AccountstatusesCustomBatchResponseEntry> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountstatusesCustomBatchResponse". */
		kind?: string | null;
	}


	/** A batch entry encoding a single non-batch accountstatuses response. */
	export interface AccountstatusesCustomBatchResponseEntry {

		/** The status of an account, i.e., information about its products, which is computed offline and not returned immediately at insertion time. */
		accountStatus?: AccountStatus | null;

		/** The ID of the request entry this entry responds to. */
		batchId?: string | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors | null;
	}

	export interface AccountstatusesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#accountstatusesListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of account statuses. */
		nextPageToken?: string | null;
		resources?: Array<AccountStatus> | null;
	}

	export interface AccounttaxCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<AccounttaxCustomBatchRequestEntry> | null;
	}


	/** A batch entry encoding a single non-batch accounttax request. */
	export interface AccounttaxCustomBatchRequestEntry {

		/** The ID of the account for which to get/update account tax settings. */
		accountId?: string | null;

		/** The tax settings of a merchant account. All methods require the admin role. */
		accountTax?: AccountTax | null;

		/** An entry ID, unique within the batch request. */
		batchId?: string | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/**
		 * The method of the batch entry.
		 * Acceptable values are:
		 * - "`get`"
		 * - "`update`"
		 */
		method?: string | null;
	}

	export interface AccounttaxCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<AccounttaxCustomBatchResponseEntry> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#accounttaxCustomBatchResponse". */
		kind?: string | null;
	}


	/** A batch entry encoding a single non-batch accounttax response. */
	export interface AccounttaxCustomBatchResponseEntry {

		/** The tax settings of a merchant account. All methods require the admin role. */
		accountTax?: AccountTax | null;

		/** The ID of the request entry this entry responds to. */
		batchId?: string | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accounttaxCustomBatchResponseEntry`" */
		kind?: string | null;
	}

	export interface AccounttaxListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#accounttaxListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of account tax settings. */
		nextPageToken?: string | null;
		resources?: Array<AccountTax> | null;
	}

	export interface Amount {
		pretax?: Price | null;
		tax?: Price | null;
	}

	export interface Price {

		/** The currency of the price. */
		currency?: string | null;

		/** The price represented as a number. */
		value?: string | null;
	}

	export interface BusinessDayConfig {

		/** Regular business days. May not be empty. */
		businessDays?: Array<string> | null;
	}

	export interface CarrierRate {

		/** Carrier service, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved via the `getSupportedCarriers` method. Required. */
		carrierName?: string | null;

		/** Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved via the `getSupportedCarriers` method. Required. */
		carrierService?: string | null;
		flatAdjustment?: Price | null;

		/** Name of the carrier rate. Must be unique per rate group. Required. */
		name?: string | null;

		/** Shipping origin for this carrier rate. Required. */
		originPostalCode?: string | null;

		/** Multiplicative shipping rate modifier as a number in decimal notation. Can be negative. For example `"5.4"` increases the rate by 5.4%, `"-3"` decreases the rate by 3%. Optional. */
		percentageAdjustment?: string | null;
	}

	export interface CarriersCarrier {

		/** The CLDR country code of the carrier (e.g., "US"). Always present. */
		country?: string | null;

		/** The name of the carrier (e.g., `"UPS"`). Always present. */
		name?: string | null;

		/** A list of supported services (e.g., `"ground"`) for that carrier. Contains at least one service. */
		services?: Array<string> | null;
	}

	export interface CustomAttribute {

		/** The name of the attribute. Underscores will be replaced by spaces upon insertion. */
		name?: string | null;

		/**
		 * The type of the attribute.
		 * Acceptable values are:
		 * - "`boolean`"
		 * - "`datetimerange`"
		 * - "`float`"
		 * - "`group`"
		 * - "`int`"
		 * - "`price`"
		 * - "`text`"
		 * - "`time`"
		 * - "`url`"
		 */
		type?: string | null;

		/** Free-form unit of the attribute. Unit can only be used for values of type int, float, or price. */
		unit?: string | null;

		/** The value of the attribute. */
		value?: string | null;
	}

	export interface CustomGroup {

		/** The sub-attributes. */
		attributes?: Array<CustomAttribute> | null;

		/** The name of the group. Underscores will be replaced by spaces upon insertion. */
		name?: string | null;
	}

	export interface CustomerReturnReason {

		/** Description of the reason. */
		description?: string | null;

		/**
		 * Code of the return reason.
		 * Acceptable values are:
		 * - "`betterPriceFound`"
		 * - "`changedMind`"
		 * - "`damagedOrDefectiveItem`"
		 * - "`didNotMatchDescription`"
		 * - "`doesNotFit`"
		 * - "`expiredItem`"
		 * - "`incorrectItemReceived`"
		 * - "`noLongerNeeded`"
		 * - "`notSpecified`"
		 * - "`orderedWrongItem`"
		 * - "`other`"
		 * - "`qualityNotExpected`"
		 * - "`receivedTooLate`"
		 * - "`undeliverable`"
		 */
		reasonCode?: string | null;
	}

	export interface CutoffTime {

		/** Hour of the cutoff time until which an order has to be placed to be processed in the same day. Required. */
		hour?: string | null;

		/** Minute of the cutoff time until which an order has to be placed to be processed in the same day. Required. */
		minute?: string | null;

		/** Timezone identifier for the cutoff time. A list of identifiers can be found in  the AdWords API documentation. E.g. "Europe/Zurich". Required. */
		timezone?: string | null;
	}


	/** Datafeed configuration data. */
	export interface Datafeed {

		/** The two-letter ISO 639-1 language in which the attributes are defined in the data feed. */
		attributeLanguage?: string | null;

		/** [DEPRECATED] Please use targets[].language instead. The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targetCountry`. */
		contentLanguage?: string | null;

		/**
		 * Required. The type of data feed. For product inventory feeds, only feeds for local stores, not online stores, are supported.
		 * Acceptable values are:
		 * - "`local products`"
		 * - "`product inventory`"
		 * - "`products`"
		 */
		contentType?: string | null;

		/** The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required. */
		fetchSchedule?: DatafeedFetchSchedule | null;

		/** Required. The filename of the feed. All feeds must have a unique file name. */
		fileName?: string | null;
		format?: DatafeedFormat | null;

		/** Required for update. The ID of the data feed. */
		id?: string | null;

		/** [DEPRECATED] Please use targets[].includedDestinations instead. The list of intended destinations (corresponds to checked check boxes in Merchant Center). */
		intendedDestinations?: Array<string> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#datafeed`" */
		kind?: string | null;

		/** Required for insert. A descriptive name of the data feed. */
		name?: string | null;

		/** [DEPRECATED] Please use targets[].country instead. The country where the items in the feed will be included in the search index, represented as a CLDR territory code. */
		targetCountry?: string | null;

		/** The targets this feed should apply to (country, language, destinations). */
		targets?: Array<DatafeedTarget> | null;
	}


	/** The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required. */
	export interface DatafeedFetchSchedule {

		/** The day of the month the feed file should be fetched (1-31). */
		dayOfMonth?: string | null;

		/** The URL where the feed file can be fetched. Google Merchant Center will support automatic scheduled uploads using the HTTP, HTTPS, FTP, or SFTP protocols, so the value will need to be a valid link using one of those four protocols. */
		fetchUrl?: string | null;

		/** The hour of the day the feed file should be fetched (0-23). */
		hour?: string | null;

		/** The minute of the hour the feed file should be fetched (0-59). Read-only. */
		minuteOfHour?: string | null;

		/** An optional password for fetch_url. */
		password?: string | null;

		/** Whether the scheduled fetch is paused or not. */
		paused?: boolean | null;

		/** Time zone used for schedule. UTC by default. E.g., "America/Los_Angeles". */
		timeZone?: string | null;

		/** An optional user name for fetch_url. */
		username?: string | null;

		/**
		 * The day of the week the feed file should be fetched.
		 * Acceptable values are:
		 * - "`monday`"
		 * - "`tuesday`"
		 * - "`wednesday`"
		 * - "`thursday`"
		 * - "`friday`"
		 * - "`saturday`"
		 * - "`sunday`"
		 */
		weekday?: string | null;
	}

	export interface DatafeedFormat {

		/**
		 * Delimiter for the separation of values in a delimiter-separated values feed. If not specified, the delimiter will be auto-detected. Ignored for non-DSV data feeds.
		 * Acceptable values are:
		 * - "`pipe`"
		 * - "`tab`"
		 * - "`tilde`"
		 */
		columnDelimiter?: string | null;

		/**
		 * Character encoding scheme of the data feed. If not specified, the encoding will be auto-detected.
		 * Acceptable values are:
		 * - "`latin-1`"
		 * - "`utf-16be`"
		 * - "`utf-16le`"
		 * - "`utf-8`"
		 * - "`windows-1252`"
		 */
		fileEncoding?: string | null;

		/**
		 * Specifies how double quotes are interpreted. If not specified, the mode will be auto-detected. Ignored for non-DSV data feeds.
		 * Acceptable values are:
		 * - "`normal character`"
		 * - "`value quoting`"
		 */
		quotingMode?: string | null;
	}

	export interface DatafeedTarget {

		/** The country where the items in the feed will be included in the search index, represented as a  CLDR territory code. */
		country?: string | null;

		/** The list of destinations to exclude for this target (corresponds to unchecked check boxes in Merchant Center). */
		excludedDestinations?: Array<string> | null;

		/**
		 * The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`.
		 * List of supported destinations (if available to the account):
		 * - DisplayAds
		 * - Shopping
		 * - ShoppingActions
		 * - SurfacesAcrossGoogle
		 */
		includedDestinations?: Array<string> | null;

		/** The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targets[].country`. */
		language?: string | null;
	}


	/** The status of a datafeed, i.e., the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished. */
	export interface DatafeedStatus {

		/** The country for which the status is reported, represented as a  CLDR territory code. */
		country?: string | null;

		/** The ID of the feed for which the status is reported. */
		datafeedId?: string | null;

		/** The list of errors occurring in the feed. */
		errors?: Array<DatafeedStatusError> | null;

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

		/**
		 * The processing status of the feed.
		 * Acceptable values are:
		 * - "`"`failure`": The feed could not be processed or all items had errors.`"
		 * - "`in progress`": The feed is being processed.
		 * - "`none`": The feed has not yet been processed. For example, a feed that has never been uploaded will have this processing status.
		 * - "`success`": The feed was processed successfully, though some items might have had errors.
		 */
		processingStatus?: string | null;

		/** The list of errors occurring in the feed. */
		warnings?: Array<DatafeedStatusError> | null;
	}


	/** An error occurring in the feed, like "invalid price". */
	export interface DatafeedStatusError {

		/** The code of the error, e.g., "validation/invalid_value". */
		code?: string | null;

		/** The number of occurrences of the error in the feed. */
		count?: string | null;

		/** A list of example occurrences of the error, grouped by product. */
		examples?: Array<DatafeedStatusExample> | null;

		/** The error message, e.g., "Invalid price". */
		message?: string | null;
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

	export interface DatafeedsCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<DatafeedsCustomBatchRequestEntry> | null;
	}


	/** A batch entry encoding a single non-batch datafeeds request. */
	export interface DatafeedsCustomBatchRequestEntry {

		/** An entry ID, unique within the batch request. */
		batchId?: string | null;

		/** Datafeed configuration data. */
		datafeed?: Datafeed | null;

		/** The ID of the data feed to get, delete or fetch. */
		datafeedId?: string | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/**
		 * The method of the batch entry.
		 * Acceptable values are:
		 * - "`delete`"
		 * - "`fetchNow`"
		 * - "`get`"
		 * - "`insert`"
		 * - "`update`"
		 */
		method?: string | null;
	}

	export interface DatafeedsCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<DatafeedsCustomBatchResponseEntry> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#datafeedsCustomBatchResponse". */
		kind?: string | null;
	}


	/** A batch entry encoding a single non-batch datafeeds response. */
	export interface DatafeedsCustomBatchResponseEntry {

		/** The ID of the request entry this entry responds to. */
		batchId?: string | null;

		/** Datafeed configuration data. */
		datafeed?: Datafeed | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors | null;
	}

	export interface DatafeedsFetchNowResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#datafeedsFetchNowResponse". */
		kind?: string | null;
	}

	export interface DatafeedsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#datafeedsListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of datafeeds. */
		nextPageToken?: string | null;
		resources?: Array<Datafeed> | null;
	}

	export interface DatafeedstatusesCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<DatafeedstatusesCustomBatchRequestEntry> | null;
	}


	/** A batch entry encoding a single non-batch datafeedstatuses request. */
	export interface DatafeedstatusesCustomBatchRequestEntry {

		/** An entry ID, unique within the batch request. */
		batchId?: string | null;

		/** The country for which to get the datafeed status. If this parameter is provided then language must also be provided. Note that for multi-target datafeeds this parameter is required. */
		country?: string | null;

		/** The ID of the data feed to get. */
		datafeedId?: string | null;

		/** The language for which to get the datafeed status. If this parameter is provided then country must also be provided. Note that for multi-target datafeeds this parameter is required. */
		language?: string | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/**
		 * The method of the batch entry.
		 * Acceptable values are:
		 * - "`get`"
		 */
		method?: string | null;
	}

	export interface DatafeedstatusesCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<DatafeedstatusesCustomBatchResponseEntry> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#datafeedstatusesCustomBatchResponse". */
		kind?: string | null;
	}


	/** A batch entry encoding a single non-batch datafeedstatuses response. */
	export interface DatafeedstatusesCustomBatchResponseEntry {

		/** The ID of the request entry this entry responds to. */
		batchId?: string | null;

		/** The status of a datafeed, i.e., the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished. */
		datafeedStatus?: DatafeedStatus | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors | null;
	}

	export interface DatafeedstatusesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#datafeedstatusesListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of datafeed statuses. */
		nextPageToken?: string | null;
		resources?: Array<DatafeedStatus> | null;
	}

	export interface DeliveryTime {
		cutoffTime?: CutoffTime | null;
		handlingBusinessDayConfig?: BusinessDayConfig | null;

		/** Holiday cutoff definitions. If configured, they specify order cutoff times for holiday-specific shipping. */
		holidayCutoffs?: Array<HolidayCutoff> | null;

		/** Maximum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. Must be greater than or equal to `minHandlingTimeInDays`. */
		maxHandlingTimeInDays?: string | null;

		/** Maximum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Must be greater than or equal to `minTransitTimeInDays`. */
		maxTransitTimeInDays?: string | null;

		/** Minimum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. */
		minHandlingTimeInDays?: string | null;

		/** Minimum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Either `{min,max}TransitTimeInDays` or `transitTimeTable` must be set, but not both. */
		minTransitTimeInDays?: string | null;
		transitBusinessDayConfig?: BusinessDayConfig | null;
		transitTimeTable?: TransitTable | null;
	}

	export interface HolidayCutoff {

		/** Date of the order deadline, in ISO 8601 format. E.g. "2016-11-29" for 29th November 2016. Required. */
		deadlineDate?: string | null;

		/** Hour of the day on the deadline date until which the order has to be placed to qualify for the delivery guarantee. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Required. */
		deadlineHour?: string | null;

		/** Timezone identifier for the deadline hour. A list of identifiers can be found in  the AdWords API documentation. E.g. "Europe/Zurich". Required. */
		deadlineTimezone?: string | null;

		/** Unique identifier for the holiday. Required. */
		holidayId?: string | null;

		/** Date on which the deadline will become visible to consumers in ISO 8601 format. E.g. "2016-10-31" for 31st October 2016. Required. */
		visibleFromDate?: string | null;
	}

	export interface TransitTable {

		/** A list of postal group names. The last value can be `"all other locations"`. Example: `["zone 1", "zone 2", "all other locations"]`. The referred postal code groups must match the delivery country of the service. */
		postalCodeGroupNames?: Array<string> | null;
		rows?: Array<TransitTableTransitTimeRow> | null;

		/** A list of transit time labels. The last value can be `"all other labels"`. Example: `["food", "electronics", "all other labels"]`. */
		transitTimeLabels?: Array<string> | null;
	}

	export interface TransitTableTransitTimeRow {
		values?: Array<TransitTableTransitTimeRowTransitTimeValue> | null;
	}

	export interface TransitTableTransitTimeRowTransitTimeValue {

		/** Must be greater than or equal to `minTransitTimeInDays`. */
		maxTransitTimeInDays?: string | null;

		/** Transit time range (min-max) in business days. 0 means same day delivery, 1 means next day delivery. */
		minTransitTimeInDays?: string | null;
	}

	export interface GmbAccounts {

		/** The ID of the account. */
		accountId?: string | null;

		/** A list of GMB accounts which are available to the merchant. */
		gmbAccounts?: Array<GmbAccountsGmbAccount> | null;
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


	/** A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set. */
	export interface Headers {

		/** A list of location ID sets. Must be non-empty. Can only be set if all other fields are not set. */
		locations?: Array<LocationIdSet> | null;

		/** A list of inclusive number of items upper bounds. The last value can be `"infinity"`. For example `["10", "50", "infinity"]` represents the headers "<= 10 items", " 50 items". Must be non-empty. Can only be set if all other fields are not set. */
		numberOfItems?: Array<string> | null;

		/** A list of postal group names. The last value can be `"all other locations"`. Example: `["zone 1", "zone 2", "all other locations"]`. The referred postal code groups must match the delivery country of the service. Must be non-empty. Can only be set if all other fields are not set. */
		postalCodeGroupNames?: Array<string> | null;

		/** A list of inclusive order price upper bounds. The last price's value can be `"infinity"`. For example `[{"value": "10", "currency": "USD"}, {"value": "500", "currency": "USD"}, {"value": "infinity", "currency": "USD"}]` represents the headers "<= $10", " $500". All prices within a service must have the same currency. Must be non-empty. Can only be set if all other fields are not set. */
		prices?: Array<Price> | null;

		/** A list of inclusive order weight upper bounds. The last weight's value can be `"infinity"`. For example `[{"value": "10", "unit": "kg"}, {"value": "50", "unit": "kg"}, {"value": "infinity", "unit": "kg"}]` represents the headers "<= 10kg", " 50kg". All weights within a service must have the same unit. Must be non-empty. Can only be set if all other fields are not set. */
		weights?: Array<Weight> | null;
	}

	export interface LocationIdSet {

		/** A non-empty list of location IDs. They must all be of the same location type (e.g., state). */
		locationIds?: Array<string> | null;
	}

	export interface Weight {

		/**
		 * Required. The weight unit.
		 * Acceptable values are:
		 * - "`kg`"
		 * - "`lb`"
		 */
		unit?: string | null;

		/** Required. The weight represented as a number. */
		value?: string | null;
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

		/**
		 * The holiday type. Always present.
		 * Acceptable values are:
		 * - "`Christmas`"
		 * - "`Easter`"
		 * - "`Father's Day`"
		 * - "`Halloween`"
		 * - "`Independence Day (USA)`"
		 * - "`Mother's Day`"
		 * - "`Thanksgiving`"
		 * - "`Valentine's Day`"
		 */
		type?: string | null;
	}

	export interface Installment {
		amount?: Price | null;

		/** The number of installments the buyer has to pay. */
		months?: string | null;
	}


	/** (== resource_for v2.inventory ==) */
	export interface Inventory {

		/**
		 * The availability of the product.
		 * Acceptable values are:
		 * - "`in stock`"
		 * - "`out of stock`"
		 * - "`preorder`"
		 */
		availability?: string | null;

		/** Custom label 0 for custom grouping of items in a Shopping campaign. Only supported for online products. */
		customLabel0?: string | null;

		/** Custom label 1 for custom grouping of items in a Shopping campaign. Only supported for online products. */
		customLabel1?: string | null;

		/** Custom label 2 for custom grouping of items in a Shopping campaign. Only supported for online products. */
		customLabel2?: string | null;

		/** Custom label 3 for custom grouping of items in a Shopping campaign. Only supported for online products. */
		customLabel3?: string | null;

		/** Custom label 3 for custom grouping of items in a Shopping campaign. Only supported for online products. */
		customLabel4?: string | null;
		installment?: Installment | null;

		/** The instore product location. Supported only for local products. */
		instoreProductLocation?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#inventory`" */
		kind?: string | null;
		loyaltyPoints?: LoyaltyPoints | null;
		pickup?: InventoryPickup | null;
		price?: Price | null;

		/** The quantity of the product. Must be equal to or greater than zero. Supported only for local products. */
		quantity?: string | null;
		salePrice?: Price | null;

		/** A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as 'null' if undecided. */
		salePriceEffectiveDate?: string | null;

		/** The quantity of the product that is available for selling on Google. Supported only for online products. */
		sellOnGoogleQuantity?: string | null;
	}

	export interface LoyaltyPoints {

		/** Name of loyalty points program. It is recommended to limit the name to 12 full-width characters or 24 Roman characters. */
		name?: string | null;

		/** The retailer's loyalty points in absolute value. */
		pointsValue?: string | null;

		/** The ratio of a point when converted to currency. Google assumes currency based on Merchant Center settings. If ratio is left out, it defaults to 1.0. */
		ratio?: number | null;
	}

	export interface InventoryPickup {

		/**
		 * Whether store pickup is available for this offer and whether the pickup option should be shown as buy, reserve, or not supported. Only supported for local inventory. Unless the value is "not supported", must be submitted together with `pickupSla`.
		 * Acceptable values are:
		 * - "`buy`"
		 * - "`not supported`"
		 * - "`reserve`"
		 * - "`ship to store`"
		 */
		pickupMethod?: string | null;

		/**
		 * The expected date that an order will be ready for pickup, relative to when the order is placed. Only supported for local inventory. Must be submitted together with `pickupMethod`.
		 * Acceptable values are:
		 * - "`five day`"
		 * - "`four day`"
		 * - "`multi day`"
		 * - "`multi week`"
		 * - "`next day`"
		 * - "`same day`"
		 * - "`seven day`"
		 * - "`six day`"
		 * - "`three day`"
		 * - "`two day`"
		 */
		pickupSla?: string | null;
	}

	export interface InventoryCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<InventoryCustomBatchRequestEntry> | null;
	}


	/** A batch entry encoding a single non-batch inventory request. */
	export interface InventoryCustomBatchRequestEntry {

		/** An entry ID, unique within the batch request. */
		batchId?: string | null;

		/** (== resource_for v2.inventory ==) */
		inventory?: Inventory | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/** The ID of the product for which to update price and availability. */
		productId?: string | null;

		/** The code of the store for which to update price and availability. Use `online` to update price and availability of an online product. */
		storeCode?: string | null;
	}

	export interface InventoryCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<InventoryCustomBatchResponseEntry> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#inventoryCustomBatchResponse". */
		kind?: string | null;
	}


	/** A batch entry encoding a single non-batch inventory response. */
	export interface InventoryCustomBatchResponseEntry {

		/** The ID of the request entry this entry responds to. */
		batchId?: string | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#inventoryCustomBatchResponseEntry`" */
		kind?: string | null;
	}

	export interface InventorySetRequest {

		/**
		 * The availability of the product.
		 * Acceptable values are:
		 * - "`in stock`"
		 * - "`out of stock`"
		 * - "`preorder`"
		 */
		availability?: string | null;

		/** Custom label 0 for custom grouping of items in a Shopping campaign. Only supported for online products. */
		customLabel0?: string | null;

		/** Custom label 1 for custom grouping of items in a Shopping campaign. Only supported for online products. */
		customLabel1?: string | null;

		/** Custom label 2 for custom grouping of items in a Shopping campaign. Only supported for online products. */
		customLabel2?: string | null;

		/** Custom label 3 for custom grouping of items in a Shopping campaign. Only supported for online products. */
		customLabel3?: string | null;

		/** Custom label 3 for custom grouping of items in a Shopping campaign. Only supported for online products. */
		customLabel4?: string | null;
		installment?: Installment | null;

		/** The instore product location. Supported only for local products. */
		instoreProductLocation?: string | null;
		loyaltyPoints?: LoyaltyPoints | null;
		pickup?: InventoryPickup | null;
		price?: Price | null;

		/** The quantity of the product. Must be equal to or greater than zero. Supported only for local products. */
		quantity?: string | null;
		salePrice?: Price | null;

		/** A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as 'null' if undecided. */
		salePriceEffectiveDate?: string | null;

		/** The quantity of the product that is available for selling on Google. Supported only for online products. */
		sellOnGoogleQuantity?: string | null;
	}

	export interface InventorySetResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#inventorySetResponse". */
		kind?: string | null;
	}

	export interface InvoiceSummary {

		/** Summary of the total amounts of the additional charges. */
		additionalChargeSummaries?: Array<InvoiceSummaryAdditionalChargeSummary> | null;
		customerBalance?: Amount | null;
		googleBalance?: Amount | null;
		merchantBalance?: Amount | null;
		productTotal?: Amount | null;

		/** Deprecated. */
		promotionSummaries?: Array<Promotion> | null;
	}

	export interface InvoiceSummaryAdditionalChargeSummary {
		totalAmount?: Amount | null;

		/**
		 * [required] Type of the additional charge.
		 * Acceptable values are:
		 * - "`shipping`"
		 */
		type?: string | null;
	}

	export interface Promotion {
		promotionAmount?: Amount | null;

		/** [required] ID of the promotion. */
		promotionId?: string | null;
	}

	export interface LiaAboutPageSettings {

		/**
		 * The status of the verification process for the About page.
		 * Acceptable values are:
		 * - "`active`"
		 * - "`inactive`"
		 * - "`pending`"
		 */
		status?: string | null;

		/** The URL for the About page. */
		url?: string | null;
	}

	export interface LiaCountrySettings {
		about?: LiaAboutPageSettings | null;

		/** Required. CLDR country code (e.g. "US"). */
		country?: string | null;

		/** The status of the "Merchant hosted local storefront" feature. */
		hostedLocalStorefrontActive?: boolean | null;
		inventory?: LiaInventorySettings | null;
		onDisplayToOrder?: LiaOnDisplayToOrderSettings | null;
		posDataProvider?: LiaPosDataProvider | null;

		/** The status of the "Store pickup" feature. */
		storePickupActive?: boolean | null;
	}

	export interface LiaInventorySettings {

		/** The email of the contact for the inventory verification process. */
		inventoryVerificationContactEmail?: string | null;

		/** The name of the contact for the inventory verification process. */
		inventoryVerificationContactName?: string | null;

		/**
		 * The status of the verification contact.
		 * Acceptable values are:
		 * - "`active`"
		 * - "`inactive`"
		 * - "`pending`"
		 */
		inventoryVerificationContactStatus?: string | null;

		/**
		 * The status of the inventory verification process.
		 * Acceptable values are:
		 * - "`active`"
		 * - "`inactive`"
		 * - "`pending`"
		 */
		status?: string | null;
	}

	export interface LiaOnDisplayToOrderSettings {

		/** Shipping cost and policy URL. */
		shippingCostPolicyUrl?: string | null;

		/**
		 * The status of the ?On display to order? feature.
		 * Acceptable values are:
		 * - "`active`"
		 * - "`inactive`"
		 * - "`pending`"
		 */
		status?: string | null;
	}

	export interface LiaPosDataProvider {

		/** The ID of the POS data provider. */
		posDataProviderId?: string | null;

		/** The account ID by which this merchant is known to the POS data provider. */
		posExternalAccountId?: string | null;
	}


	/** Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role. */
	export interface LiaSettings {

		/** The ID of the account to which these LIA settings belong. Ignored upon update, always present in get request responses. */
		accountId?: string | null;

		/** The LIA settings for each country. */
		countrySettings?: Array<LiaCountrySettings> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liaSettings`" */
		kind?: string | null;
	}

	export interface LiasettingsCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<LiasettingsCustomBatchRequestEntry> | null;
	}

	export interface LiasettingsCustomBatchRequestEntry {

		/** The ID of the account for which to get/update account shipping settings. */
		accountId?: string | null;

		/** An entry ID, unique within the batch request. */
		batchId?: string | null;

		/** Inventory validation contact email. Required only for SetInventoryValidationContact. */
		contactEmail?: string | null;

		/** Inventory validation contact name. Required only for SetInventoryValidationContact. */
		contactName?: string | null;

		/** The country code. Required only for RequestInventoryVerification. */
		country?: string | null;

		/** The GMB account. Required only for RequestGmbAccess. */
		gmbEmail?: string | null;

		/** Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role. */
		liaSettings?: LiaSettings | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/**
		 * The method of the batch entry.
		 * Acceptable values are:
		 * - "`get`"
		 * - "`getAccessibleGmbAccounts`"
		 * - "`requestGmbAccess`"
		 * - "`requestInventoryVerification`"
		 * - "`setInventoryVerificationContact`"
		 * - "`update`"
		 */
		method?: string | null;

		/** The ID of POS data provider. Required only for SetPosProvider. */
		posDataProviderId?: string | null;

		/** The account ID by which this merchant is known to the POS provider. */
		posExternalAccountId?: string | null;
	}

	export interface LiasettingsCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<LiasettingsCustomBatchResponseEntry> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsCustomBatchResponse". */
		kind?: string | null;
	}

	export interface LiasettingsCustomBatchResponseEntry {

		/** The ID of the request entry to which this entry responds. */
		batchId?: string | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors | null;
		gmbAccounts?: GmbAccounts | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsCustomBatchResponseEntry`" */
		kind?: string | null;

		/** Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role. */
		liaSettings?: LiaSettings | null;

		/** The list of POS data providers. */
		posDataProviders?: Array<PosDataProviders> | null;
	}

	export interface PosDataProviders {

		/** Country code. */
		country?: string | null;

		/** A list of POS data providers. */
		posDataProviders?: Array<PosDataProvidersPosDataProvider> | null;
	}

	export interface PosDataProvidersPosDataProvider {

		/** The display name of Pos data Provider. */
		displayName?: string | null;

		/** The full name of this POS data Provider. */
		fullName?: string | null;

		/** The ID of the account. */
		providerId?: string | null;
	}

	export interface LiasettingsGetAccessibleGmbAccountsResponse {

		/** The ID of the account. */
		accountId?: string | null;

		/** A list of GMB accounts which are available to the merchant. */
		gmbAccounts?: Array<GmbAccountsGmbAccount> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsGetAccessibleGmbAccountsResponse". */
		kind?: string | null;
	}

	export interface LiasettingsListPosDataProvidersResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsListPosDataProvidersResponse". */
		kind?: string | null;

		/** The list of POS data providers for each eligible country */
		posDataProviders?: Array<PosDataProviders> | null;
	}

	export interface LiasettingsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of LIA settings. */
		nextPageToken?: string | null;
		resources?: Array<LiaSettings> | null;
	}

	export interface LiasettingsRequestGmbAccessResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsRequestGmbAccessResponse". */
		kind?: string | null;
	}

	export interface LiasettingsRequestInventoryVerificationResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsRequestInventoryVerificationResponse". */
		kind?: string | null;
	}

	export interface LiasettingsSetInventoryVerificationContactResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsSetInventoryVerificationContactResponse". */
		kind?: string | null;
	}

	export interface LiasettingsSetPosDataProviderResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#liasettingsSetPosDataProviderResponse". */
		kind?: string | null;
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
		returnItems?: Array<MerchantOrderReturnItem> | null;

		/** Shipments of the return. */
		returnShipments?: Array<ReturnShipment> | null;
	}

	export interface MerchantOrderReturnItem {
		customerReturnReason?: CustomerReturnReason | null;

		/** Product level item ID. If the returned items are of the same product, they will have the same ID. */
		itemId?: string | null;
		merchantReturnReason?: RefundReason | null;
		product?: OrderLineItemProduct | null;

		/** IDs of the return shipments that this return item belongs to. */
		returnShipmentIds?: Array<string> | null;

		/**
		 * State of the item.
		 * Acceptable values are:
		 * - "`canceled`"
		 * - "`new`"
		 * - "`received`"
		 * - "`refunded`"
		 * - "`rejected`"
		 */
		state?: string | null;
	}

	export interface RefundReason {

		/** Description of the reason. */
		description?: string | null;

		/**
		 * Code of the refund reason.
		 * Acceptable values are:
		 * - "`adjustment`"
		 * - "`autoPostInternal`"
		 * - "`autoPostInvalidBillingAddress`"
		 * - "`autoPostNoInventory`"
		 * - "`autoPostPriceError`"
		 * - "`autoPostUndeliverableShippingAddress`"
		 * - "`couponAbuse`"
		 * - "`courtesyAdjustment`"
		 * - "`customerCanceled`"
		 * - "`customerDiscretionaryReturn`"
		 * - "`customerInitiatedMerchantCancel`"
		 * - "`customerSupportRequested`"
		 * - "`deliveredLateByCarrier`"
		 * - "`deliveredTooLate`"
		 * - "`expiredItem`"
		 * - "`failToPushOrderGoogleError`"
		 * - "`failToPushOrderMerchantError`"
		 * - "`failToPushOrderMerchantFulfillmentError`"
		 * - "`failToPushOrderToMerchant`"
		 * - "`failToPushOrderToMerchantOutOfStock`"
		 * - "`feeAdjustment`"
		 * - "`invalidCoupon`"
		 * - "`lateShipmentCredit`"
		 * - "`malformedShippingAddress`"
		 * - "`merchantDidNotShipOnTime`"
		 * - "`noInventory`"
		 * - "`orderTimeout`"
		 * - "`other`"
		 * - "`paymentAbuse`"
		 * - "`paymentDeclined`"
		 * - "`priceAdjustment`"
		 * - "`priceError`"
		 * - "`productArrivedDamaged`"
		 * - "`productNotAsDescribed`"
		 * - "`promoReallocation`"
		 * - "`qualityNotAsExpected`"
		 * - "`returnRefundAbuse`"
		 * - "`shippingCostAdjustment`"
		 * - "`shippingPriceError`"
		 * - "`taxAdjustment`"
		 * - "`taxError`"
		 * - "`undeliverableShippingAddress`"
		 * - "`unsupportedPoBoxAddress`"
		 * - "`wrongProductShipped`"
		 */
		reasonCode?: string | null;
	}

	export interface OrderLineItemProduct {

		/** Brand of the item. */
		brand?: string | null;

		/**
		 * The item's channel (online or local).
		 * Acceptable values are:
		 * - "`local`"
		 * - "`online`"
		 */
		channel?: string | null;

		/**
		 * Condition or state of the item.
		 * Acceptable values are:
		 * - "`new`"
		 * - "`refurbished`"
		 * - "`used`"
		 */
		condition?: string | null;

		/** The two-letter ISO 639-1 language code for the item. */
		contentLanguage?: string | null;

		/** Associated fees at order creation time. */
		fees?: Array<OrderLineItemProductFee> | null;

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
		price?: Price | null;

		/** URL to the cached image shown to the user when order was placed. */
		shownImage?: string | null;

		/** The CLDR territory code of the target country of the product. */
		targetCountry?: string | null;

		/** The title of the product. */
		title?: string | null;

		/** Variant attributes for the item. These are dimensions of the product, such as color, gender, material, pattern, and size. You can find a comprehensive list of variant attributes here. */
		variantAttributes?: Array<OrderLineItemProductVariantAttribute> | null;
	}

	export interface OrderLineItemProductFee {
		amount?: Price | null;

		/** Name of the fee. */
		name?: string | null;
	}

	export interface OrderLineItemProductVariantAttribute {

		/** The dimension of the variant. */
		dimension?: string | null;

		/** The value for the dimension. */
		value?: string | null;
	}

	export interface ReturnShipment {

		/** The date of creation of the shipment, in ISO 8601 format. */
		creationDate?: string | null;

		/** The date of delivery of the shipment, in ISO 8601 format. */
		deliveryDate?: string | null;

		/**
		 * Type of the return method.
		 * Acceptable values are:
		 * - "`byMail`"
		 * - "`contactCustomerSupport`"
		 * - "`returnless`"
		 */
		returnMethodType?: string | null;

		/** Shipment ID generated by Google. */
		shipmentId?: string | null;

		/** Tracking information of the shipment. One return shipment might be handled by several shipping carriers sequentially. */
		shipmentTrackingInfos?: Array<ShipmentTrackingInfo> | null;

		/** The date of shipping of the shipment, in ISO 8601 format. */
		shippingDate?: string | null;

		/**
		 * State of the shipment.
		 * Acceptable values are:
		 * - "`completed`"
		 * - "`new`"
		 * - "`shipped`"
		 * - "`undeliverable`"
		 */
		state?: string | null;
	}

	export interface ShipmentTrackingInfo {

		/**
		 * The shipping carrier that handles the package.
		 * Acceptable values are:
		 * - "`boxtal`"
		 * - "`bpost`"
		 * - "`chronopost`"
		 * - "`colisPrive`"
		 * - "`colissimo`"
		 * - "`cxt`"
		 * - "`deliv`"
		 * - "`dhl`"
		 * - "`dpd`"
		 * - "`dynamex`"
		 * - "`eCourier`"
		 * - "`easypost`"
		 * - "`efw`"
		 * - "`fedex`"
		 * - "`fedexSmartpost`"
		 * - "`geodis`"
		 * - "`gls`"
		 * - "`googleCourier`"
		 * - "`gsx`"
		 * - "`jdLogistics`"
		 * - "`laPoste`"
		 * - "`lasership`"
		 * - "`manual`"
		 * - "`mpx`"
		 * - "`onTrac`"
		 * - "`other`"
		 * - "`tnt`"
		 * - "`uds`"
		 * - "`ups`"
		 * - "`usps`"
		 */
		carrier?: string | null;

		/** The tracking number for the package. */
		trackingNumber?: string | null;
	}

	export interface MinimumOrderValueTable {
		storeCodeSetWithMovs?: Array<MinimumOrderValueTableStoreCodeSetWithMov> | null;
	}


	/** A list of store code sets sharing the same minimum order value. At least two sets are required and the last one must be empty, which signifies 'MOV for all other stores'. Each store code can only appear once across all the sets. All prices within a service must have the same currency. */
	export interface MinimumOrderValueTableStoreCodeSetWithMov {

		/** A list of unique store codes or empty for the catch all. */
		storeCodes?: Array<string> | null;
		value?: Price | null;
	}


	/** Order. Production access (all methods) requires the order manager role. Sandbox access does not. (== resource_for v2.orders ==) (== resource_for v2.1.orders ==) */
	export interface Order {

		/** Whether the order was acknowledged. */
		acknowledged?: boolean | null;

		/**
		 * Deprecated.
		 * Acceptable values are:
		 * - "`googleExpress`"
		 * - "`purchasesOnGoogle`"
		 */
		channelType?: string | null;
		customer?: OrderCustomer | null;
		deliveryDetails?: OrderDeliveryDetails | null;

		/** The REST ID of the order. Globally unique. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#order`" */
		kind?: string | null;

		/** Line items that are ordered. */
		lineItems?: Array<OrderLineItem> | null;
		merchantId?: string | null;

		/** Merchant-provided ID of the order. */
		merchantOrderId?: string | null;
		netAmount?: Price | null;
		paymentMethod?: OrderPaymentMethod | null;

		/**
		 * The status of the payment.
		 * Acceptable values are:
		 * - "`paymentCaptured`"
		 * - "`paymentRejected`"
		 * - "`paymentSecured`"
		 * - "`pendingAuthorization`"
		 */
		paymentStatus?: string | null;
		pickupDetails?: OrderPickupDetails | null;

		/** The date when the order was placed, in ISO 8601 format. */
		placedDate?: string | null;

		/**
		 * The details of the merchant provided promotions applied to the order.
		 * To determine which promotions apply to which products, check the `Promotions[].Benefits[].OfferIds` field against the `LineItems[].Product.OfferId` field for each promotion. If a promotion is applied to more than 1 `offerId`, divide the discount value by the number of affected offers to determine how much discount to apply to each `offerId`.
		 * Examples:
		 * - To calculate the line item level discount for a single specific item: For each promotion, subtract the `Promotions[].Benefits[].Discount.value` amount from the `LineItems[].Price.value`.
		 * - To calculate the line item level discount for multiple quantity of a specific item: For each promotion, divide the `Promotions[].Benefits[].Discount.value` by the quantity of products and substract it from `LineItems[].Product.Price.value` for each quantity item.
		 * Only 1 promotion can be applied to an offerId in a given order. To refund an item which had a promotion applied to it, make sure to refund the amount after first subtracting the promotion discount from the item price.
		 * More details about the program are here.
		 */
		promotions?: Array<OrderLegacyPromotion> | null;

		/** Refunds for the order. */
		refunds?: Array<OrderRefund> | null;

		/** Shipments of the order. */
		shipments?: Array<OrderShipment> | null;
		shippingCost?: Price | null;
		shippingCostTax?: Price | null;

		/**
		 * Deprecated. Shipping details are provided with line items instead.
		 * Acceptable values are:
		 * - "`economy`"
		 * - "`expedited`"
		 * - "`oneDay`"
		 * - "`sameDay`"
		 * - "`standard`"
		 * - "`twoDay`"
		 */
		shippingOption?: string | null;

		/**
		 * The status of the order.
		 * Acceptable values are:
		 * - "`canceled`"
		 * - "`delivered`"
		 * - "`inProgress`"
		 * - "`partiallyDelivered`"
		 * - "`partiallyReturned`"
		 * - "`partiallyShipped`"
		 * - "`pendingShipment`"
		 * - "`returned`"
		 * - "`shipped`"
		 */
		status?: string | null;

		/**
		 * The party responsible for collecting and remitting taxes.
		 * Acceptable values are:
		 * - "`marketplaceFacilitator`"
		 * - "`merchant`"
		 */
		taxCollector?: string | null;
	}

	export interface OrderCustomer {

		/** Deprecated. */
		email?: string | null;

		/** Deprecated. Please use marketingRightsInfo instead. */
		explicitMarketingPreference?: boolean | null;

		/** Full name of the customer. */
		fullName?: string | null;
		invoiceReceivingEmail?: string | null;
		marketingRightsInfo?: OrderCustomerMarketingRightsInfo | null;
	}

	export interface OrderCustomerMarketingRightsInfo {

		/**
		 * Last known customer selection regarding marketing preferences. In certain cases this selection might not be known, so this field would be empty. If a customer selected `granted` in their most recent order, they can be subscribed to marketing emails. Customers who have chosen `denied` must not be subscribed, or must be unsubscribed if already opted-in.
		 * Acceptable values are:
		 * - "`denied`"
		 * - "`granted`"
		 */
		explicitMarketingPreference?: string | null;

		/** Timestamp when last time marketing preference was updated. Could be empty, if user wasn't offered a selection yet. */
		lastUpdatedTimestamp?: string | null;

		/** Email address that can be used for marketing purposes. The field may be empty even if `explicitMarketingPreference` is 'granted'. This happens when retrieving an old order from the customer who deleted their account. */
		marketingEmailAddress?: string | null;
	}

	export interface OrderDeliveryDetails {
		address?: OrderAddress | null;

		/** The phone number of the person receiving the delivery. */
		phoneNumber?: string | null;
	}

	export interface OrderAddress {

		/** CLDR country code (e.g. "US"). */
		country?: string | null;

		/**
		 * Strings representing the lines of the printed label for mailing the order, for example:
		 * John Smith
		 * 1600 Amphitheatre Parkway
		 * Mountain View, CA, 94043
		 * United States
		 */
		fullAddress?: Array<string> | null;

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
		streetAddress?: Array<string> | null;
	}

	export interface OrderLineItem {

		/** Annotations that are attached to the line item. */
		annotations?: Array<OrderMerchantProvidedAnnotation> | null;

		/** Cancellations of the line item. */
		cancellations?: Array<OrderCancellation> | null;

		/** The ID of the line item. */
		id?: string | null;
		price?: Price | null;
		product?: OrderLineItemProduct | null;

		/** Number of items canceled. */
		quantityCanceled?: string | null;

		/** Number of items delivered. */
		quantityDelivered?: string | null;

		/** Number of items ordered. */
		quantityOrdered?: string | null;

		/** Number of items pending. */
		quantityPending?: string | null;

		/** Number of items ready for pickup. */
		quantityReadyForPickup?: string | null;

		/** Number of items returned. */
		quantityReturned?: string | null;

		/** Number of items shipped. */
		quantityShipped?: string | null;
		returnInfo?: OrderLineItemReturnInfo | null;

		/** Returns of the line item. */
		returns?: Array<OrderReturn> | null;
		shippingDetails?: OrderLineItemShippingDetails | null;
		tax?: Price | null;
	}

	export interface OrderMerchantProvidedAnnotation {

		/** Key for additional merchant provided (as key-value pairs) annotation about the line item. */
		key?: string | null;

		/** Value for additional merchant provided (as key-value pairs) annotation about the line item. */
		value?: string | null;
	}

	export interface OrderCancellation {

		/**
		 * The actor that created the cancellation.
		 * Acceptable values are:
		 * - "`customer`"
		 * - "`googleBot`"
		 * - "`googleCustomerService`"
		 * - "`googlePayments`"
		 * - "`googleSabre`"
		 * - "`merchant`"
		 */
		actor?: string | null;

		/** Date on which the cancellation has been created, in ISO 8601 format. */
		creationDate?: string | null;

		/** The quantity that was canceled. */
		quantity?: string | null;

		/**
		 * The reason for the cancellation. Orders that are canceled with a noInventory reason will lead to the removal of the product from Shopping Actions until you make an update to that product. This will not affect your Shopping ads.
		 * Acceptable values are:
		 * - "`autoPostInternal`"
		 * - "`autoPostInvalidBillingAddress`"
		 * - "`autoPostNoInventory`"
		 * - "`autoPostPriceError`"
		 * - "`autoPostUndeliverableShippingAddress`"
		 * - "`couponAbuse`"
		 * - "`customerCanceled`"
		 * - "`customerInitiatedCancel`"
		 * - "`customerSupportRequested`"
		 * - "`failToPushOrderGoogleError`"
		 * - "`failToPushOrderMerchantError`"
		 * - "`failToPushOrderMerchantFulfillmentError`"
		 * - "`failToPushOrderToMerchant`"
		 * - "`failToPushOrderToMerchantOutOfStock`"
		 * - "`invalidCoupon`"
		 * - "`malformedShippingAddress`"
		 * - "`merchantDidNotShipOnTime`"
		 * - "`noInventory`"
		 * - "`orderTimeout`"
		 * - "`other`"
		 * - "`paymentAbuse`"
		 * - "`paymentDeclined`"
		 * - "`priceError`"
		 * - "`returnRefundAbuse`"
		 * - "`shippingPriceError`"
		 * - "`taxError`"
		 * - "`undeliverableShippingAddress`"
		 * - "`unsupportedPoBoxAddress`"
		 */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}

	export interface OrderLineItemReturnInfo {

		/** Required. How many days later the item can be returned. */
		daysToReturn?: number | null;

		/** Required. Whether the item is returnable. */
		isReturnable?: boolean | null;

		/** Required. URL of the item return policy. */
		policyUrl?: string | null;
	}

	export interface OrderReturn {

		/**
		 * The actor that created the refund.
		 * Acceptable values are:
		 * - "`customer`"
		 * - "`googleBot`"
		 * - "`googleCustomerService`"
		 * - "`googlePayments`"
		 * - "`googleSabre`"
		 * - "`merchant`"
		 */
		actor?: string | null;

		/** Date on which the item has been created, in ISO 8601 format. */
		creationDate?: string | null;

		/** Quantity that is returned. */
		quantity?: string | null;

		/**
		 * The reason for the return.
		 * Acceptable values are:
		 * - "`customerDiscretionaryReturn`"
		 * - "`customerInitiatedMerchantCancel`"
		 * - "`deliveredTooLate`"
		 * - "`expiredItem`"
		 * - "`invalidCoupon`"
		 * - "`malformedShippingAddress`"
		 * - "`other`"
		 * - "`productArrivedDamaged`"
		 * - "`productNotAsDescribed`"
		 * - "`qualityNotAsExpected`"
		 * - "`undeliverableShippingAddress`"
		 * - "`unsupportedPoBoxAddress`"
		 * - "`wrongProductShipped`"
		 */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}

	export interface OrderLineItemShippingDetails {

		/** Required. The delivery by date, in ISO 8601 format. */
		deliverByDate?: string | null;
		method?: OrderLineItemShippingDetailsMethod | null;

		/** Required. The ship by date, in ISO 8601 format. */
		shipByDate?: string | null;

		/**
		 * Type of shipment. Indicates whether `deliveryDetails` or `pickupDetails` is applicable for this shipment.
		 * Acceptable values are:
		 * - "`delivery`"
		 * - "`pickup`"
		 */
		type?: string | null;
	}

	export interface OrderLineItemShippingDetailsMethod {

		/** The carrier for the shipping. Optional. See `shipments[].carrier` for a list of acceptable values. */
		carrier?: string | null;

		/** Required. Maximum transit time. */
		maxDaysInTransit?: string | null;

		/** Required. The name of the shipping method. */
		methodName?: string | null;

		/** Required. Minimum transit time. */
		minDaysInTransit?: string | null;
	}

	export interface OrderPaymentMethod {
		billingAddress?: OrderAddress | null;

		/** The card expiration month (January = 1, February = 2 etc.). */
		expirationMonth?: number | null;

		/** The card expiration year (4-digit, e.g. 2015). */
		expirationYear?: number | null;

		/** The last four digits of the card number. */
		lastFourDigits?: string | null;

		/** The billing phone number. */
		phoneNumber?: string | null;

		/**
		 * The type of instrument.
		 * Acceptable values are:
		 * - "`AMEX`"
		 * - "`DISCOVER`"
		 * - "`JCB`"
		 * - "`MASTERCARD`"
		 * - "`UNIONPAY`"
		 * - "`VISA`"
		 * - "``"
		 */
		type?: string | null;
	}

	export interface OrderPickupDetails {
		address?: OrderAddress | null;

		/** Collectors authorized to pick up shipment from the pickup location. */
		collectors?: Array<OrderPickupDetailsCollector> | null;

		/** ID of the pickup location. */
		locationId?: string | null;
	}

	export interface OrderPickupDetailsCollector {

		/** Name of the person picking up the shipment. */
		name?: string | null;

		/** Phone number of the person picking up the shipment. */
		phoneNumber?: string | null;
	}

	export interface OrderLegacyPromotion {
		benefits?: Array<OrderLegacyPromotionBenefit> | null;

		/**
		 * The date and time frame when the promotion is active and ready for validation review. Note that the promotion live time may be delayed for a few hours due to the validation review.
		 * Start date and end date are separated by a forward slash (/). The start date is specified by the format (YYYY-MM-DD), followed by the letter ?T?, the time of the day when the sale starts (in Greenwich Mean Time, GMT), followed by an expression of the time zone for the sale. The end date is in the same format.
		 */
		effectiveDates?: string | null;

		/** Optional. The text code that corresponds to the promotion when applied on the retailer?s website. */
		genericRedemptionCode?: string | null;

		/** The unique ID of the promotion. */
		id?: string | null;

		/** The full title of the promotion. */
		longTitle?: string | null;

		/**
		 * Whether the promotion is applicable to all products or only specific products.
		 * Acceptable values are:
		 * - "`allProducts`"
		 * - "`specificProducts`"
		 */
		productApplicability?: string | null;

		/**
		 * Indicates that the promotion is valid online.
		 * Acceptable values are:
		 * - "`online`"
		 */
		redemptionChannel?: string | null;
	}

	export interface OrderLegacyPromotionBenefit {
		discount?: Price | null;

		/** The OfferId(s) that were purchased in this order and map to this specific benefit of the promotion. */
		offerIds?: Array<string> | null;

		/**
		 * Further describes the benefit of the promotion. Note that we will expand on this enumeration as we support new promotion sub-types.
		 * Acceptable values are:
		 * - "`buyMGetMoneyOff`"
		 * - "`buyMGetNMoneyOff`"
		 * - "`buyMGetNPercentOff`"
		 * - "`buyMGetPercentOff`"
		 * - "`freeGift`"
		 * - "`freeGiftWithItemId`"
		 * - "`freeGiftWithValue`"
		 * - "`freeOvernightShipping`"
		 * - "`freeShipping`"
		 * - "`freeTwoDayShipping`"
		 * - "`moneyOff`"
		 * - "`percentageOff`"
		 * - "`rewardPoints`"
		 * - "`salePrice`"
		 */
		subType?: string | null;
		taxImpact?: Price | null;

		/**
		 * Describes whether the promotion applies to products (e.g. 20% off) or to shipping (e.g. Free Shipping).
		 * Acceptable values are:
		 * - "`product`"
		 * - "`shipping`"
		 */
		type?: string | null;
	}

	export interface OrderRefund {

		/**
		 * The actor that created the refund.
		 * Acceptable values are:
		 * - "`customer`"
		 * - "`googleBot`"
		 * - "`googleCustomerService`"
		 * - "`googlePayments`"
		 * - "`googleSabre`"
		 * - "`merchant`"
		 */
		actor?: string | null;
		amount?: Price | null;

		/** Date on which the item has been created, in ISO 8601 format. */
		creationDate?: string | null;

		/**
		 * The reason for the refund.
		 * Acceptable values are:
		 * - "`adjustment`"
		 * - "`autoPostInternal`"
		 * - "`autoPostInvalidBillingAddress`"
		 * - "`autoPostNoInventory`"
		 * - "`autoPostPriceError`"
		 * - "`autoPostUndeliverableShippingAddress`"
		 * - "`couponAbuse`"
		 * - "`courtesyAdjustment`"
		 * - "`customerCanceled`"
		 * - "`customerDiscretionaryReturn`"
		 * - "`customerInitiatedMerchantCancel`"
		 * - "`customerSupportRequested`"
		 * - "`deliveredLateByCarrier`"
		 * - "`deliveredTooLate`"
		 * - "`expiredItem`"
		 * - "`failToPushOrderGoogleError`"
		 * - "`failToPushOrderMerchantError`"
		 * - "`failToPushOrderMerchantFulfillmentError`"
		 * - "`failToPushOrderToMerchant`"
		 * - "`failToPushOrderToMerchantOutOfStock`"
		 * - "`feeAdjustment`"
		 * - "`invalidCoupon`"
		 * - "`lateShipmentCredit`"
		 * - "`malformedShippingAddress`"
		 * - "`merchantDidNotShipOnTime`"
		 * - "`noInventory`"
		 * - "`orderTimeout`"
		 * - "`other`"
		 * - "`paymentAbuse`"
		 * - "`paymentDeclined`"
		 * - "`priceAdjustment`"
		 * - "`priceError`"
		 * - "`productArrivedDamaged`"
		 * - "`productNotAsDescribed`"
		 * - "`promoReallocation`"
		 * - "`qualityNotAsExpected`"
		 * - "`returnRefundAbuse`"
		 * - "`shippingCostAdjustment`"
		 * - "`shippingPriceError`"
		 * - "`taxAdjustment`"
		 * - "`taxError`"
		 * - "`undeliverableShippingAddress`"
		 * - "`unsupportedPoBoxAddress`"
		 * - "`wrongProductShipped`"
		 */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}

	export interface OrderShipment {

		/**
		 * The carrier handling the shipment.
		 * For supported carriers, Google includes the carrier name and tracking URL in emails to customers. For select supported carriers, Google also automatically updates the shipment status based on the provided shipment ID. Note: You can also use unsupported carriers, but emails to customers will not include the carrier name or tracking URL, and there will be no automatic order status updates.
		 * Supported carriers for US are:
		 * - "`ups`" (United Parcel Service) automatic status updates
		 * - "`usps`" (United States Postal Service) automatic status updates
		 * - "`fedex`" (FedEx) automatic status updates
		 * - "`dhl`" (DHL eCommerce) automatic status updates (US only)
		 * - "`ontrac`" (OnTrac) automatic status updates
		 * - "`dhl express`" (DHL Express)
		 * - "`deliv`" (Deliv)
		 * - "`dynamex`" (TForce)
		 * - "`lasership`" (LaserShip)
		 * - "`mpx`" (Military Parcel Xpress)
		 * - "`uds`" (United Delivery Service)
		 * - "`efw`" (Estes Forwarding Worldwide)
		 * - "`jd logistics`" (JD Logistics)
		 * - "`yunexpress`" (YunExpress)
		 * - "`china post`" (China Post)
		 * - "`china ems`" (China Post Express Mail Service)
		 * - "`singapore post`" (Singapore Post)
		 * - "`pos malaysia`" (Pos Malaysia)
		 * - "`postnl`" (PostNL)
		 * - "`ptt`" (PTT Turkish Post)
		 * - "`eub`" (ePacket)
		 * - "`chukou1`" (Chukou1 Logistics)
		 * Supported carriers for FR are:
		 * - "`la poste`" (La Poste) automatic status updates
		 * - "`colissimo`" (Colissimo by La Poste) automatic status updates
		 * - "`ups`" (United Parcel Service) automatic status updates
		 * - "`chronopost`" (Chronopost by La Poste)
		 * - "`gls`" (General Logistics Systems France)
		 * - "`dpd`" (DPD Group by GeoPost)
		 * - "`bpost`" (Belgian Post Group)
		 * - "`colis prive`" (Colis Privé)
		 * - "`boxtal`" (Boxtal)
		 * - "`geodis`" (GEODIS)
		 * - "`tnt`" (TNT)
		 * - "`db schenker`" (DB Schenker)
		 * - "`aramex`" (Aramex)
		 */
		carrier?: string | null;

		/** Date on which the shipment has been created, in ISO 8601 format. */
		creationDate?: string | null;

		/** Date on which the shipment has been delivered, in ISO 8601 format. Present only if `status` is `delivered` */
		deliveryDate?: string | null;

		/** The ID of the shipment. */
		id?: string | null;

		/** The line items that are shipped. */
		lineItems?: Array<OrderShipmentLineItemShipment> | null;

		/**
		 * The status of the shipment.
		 * Acceptable values are:
		 * - "`delivered`"
		 * - "`readyForPickup`"
		 * - "`shipped`"
		 * - "`undeliverable`"
		 */
		status?: string | null;

		/** The tracking ID for the shipment. */
		trackingId?: string | null;
	}

	export interface OrderShipmentLineItemShipment {

		/** The ID of the line item that is shipped. This value is assigned by Google when an order is created. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the product to ship. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity that is shipped. */
		quantity?: string | null;
	}


	/** Order disbursement. All methods require the payment analyst role. (== resource_for v2.orderreports ==) (== resource_for v2.1.orderreports ==) */
	export interface OrderReportDisbursement {
		disbursementAmount?: Price | null;

		/** The disbursement date, in ISO 8601 format. */
		disbursementCreationDate?: string | null;

		/** The date the disbursement was initiated, in ISO 8601 format. */
		disbursementDate?: string | null;

		/** The ID of the disbursement. */
		disbursementId?: string | null;

		/** The ID of the managing account. */
		merchantId?: string | null;
	}

	export interface OrderReportTransaction {
		disbursementAmount?: Price | null;

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
		productAmount?: Amount | null;
		productAmountWithRemittedTax?: ProductAmount | null;

		/** The date of the transaction, in ISO 8601 format. */
		transactionDate?: string | null;
	}

	export interface ProductAmount {
		priceAmount?: Price | null;
		remittedTaxAmount?: Price | null;
		taxAmount?: Price | null;
	}

	export interface OrderinvoicesCreateChargeInvoiceRequest {

		/** [required] The ID of the invoice. */
		invoiceId?: string | null;
		invoiceSummary?: InvoiceSummary | null;

		/** [required] Invoice details per line item. */
		lineItemInvoices?: Array<ShipmentInvoiceLineItemInvoice> | null;

		/** [required] The ID of the operation, unique across all operations for a given order. */
		operationId?: string | null;

		/** [required] ID of the shipment group. It is assigned by the merchant in the `shipLineItems` method and is used to group multiple line items that have the same kind of shipping charges. */
		shipmentGroupId?: string | null;
	}

	export interface ShipmentInvoiceLineItemInvoice {

		/** ID of the line item. Either lineItemId or productId must be set. */
		lineItemId?: string | null;

		/** ID of the product. This is the REST ID used in the products service. Either lineItemId or productId must be set. */
		productId?: string | null;

		/** [required] The shipment unit ID is assigned by the merchant and defines individual quantities within a line item. The same ID can be assigned to units that are the same while units that differ must be assigned a different ID (for example: free or promotional units). */
		shipmentUnitIds?: Array<string> | null;
		unitInvoice?: UnitInvoice | null;
	}

	export interface UnitInvoice {

		/** Additional charges for a unit, e.g. shipping costs. */
		additionalCharges?: Array<UnitInvoiceAdditionalCharge> | null;

		/** Deprecated. */
		promotions?: Array<Promotion> | null;
		unitPricePretax?: Price | null;

		/** Tax amounts to apply to the unit price. */
		unitPriceTaxes?: Array<UnitInvoiceTaxLine> | null;
	}

	export interface UnitInvoiceAdditionalCharge {
		additionalChargeAmount?: Amount | null;

		/** Deprecated. */
		additionalChargePromotions?: Array<Promotion> | null;

		/**
		 * [required] Type of the additional charge.
		 * Acceptable values are:
		 * - "`shipping`"
		 */
		type?: string | null;
	}

	export interface UnitInvoiceTaxLine {
		taxAmount?: Price | null;

		/** Optional name of the tax type. This should only be provided if `taxType` is `otherFeeTax`. */
		taxName?: string | null;

		/**
		 * [required] Type of the tax.
		 * Acceptable values are:
		 * - "`otherFee`"
		 * - "`otherFeeTax`"
		 * - "`sales`"
		 */
		taxType?: string | null;
	}

	export interface OrderinvoicesCreateChargeInvoiceResponse {

		/**
		 * The status of the execution.
		 * Acceptable values are:
		 * - "duplicate"
		 * - "executed"
		 */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#orderinvoicesCreateChargeInvoiceResponse". */
		kind?: string | null;
	}

	export interface OrderinvoicesCreateRefundInvoiceRequest {

		/** [required] The ID of the invoice. */
		invoiceId?: string | null;

		/** [required] The ID of the operation, unique across all operations for a given order. */
		operationId?: string | null;
		refundOnlyOption?: OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption | null;
		returnOption?: OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption | null;

		/** Invoice details for different shipment groups. */
		shipmentInvoices?: Array<ShipmentInvoice> | null;
	}

	export interface OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption {

		/** Optional description of the refund reason. */
		description?: string | null;

		/**
		 * [required] Reason for the refund.
		 * Acceptable values are:
		 * - "`adjustment`"
		 * - "`autoPostInternal`"
		 * - "`autoPostInvalidBillingAddress`"
		 * - "`autoPostNoInventory`"
		 * - "`autoPostPriceError`"
		 * - "`autoPostUndeliverableShippingAddress`"
		 * - "`couponAbuse`"
		 * - "`courtesyAdjustment`"
		 * - "`customerCanceled`"
		 * - "`customerDiscretionaryReturn`"
		 * - "`customerInitiatedMerchantCancel`"
		 * - "`customerSupportRequested`"
		 * - "`deliveredLateByCarrier`"
		 * - "`deliveredTooLate`"
		 * - "`expiredItem`"
		 * - "`failToPushOrderGoogleError`"
		 * - "`failToPushOrderMerchantError`"
		 * - "`failToPushOrderMerchantFulfillmentError`"
		 * - "`failToPushOrderToMerchant`"
		 * - "`failToPushOrderToMerchantOutOfStock`"
		 * - "`feeAdjustment`"
		 * - "`invalidCoupon`"
		 * - "`lateShipmentCredit`"
		 * - "`malformedShippingAddress`"
		 * - "`merchantDidNotShipOnTime`"
		 * - "`noInventory`"
		 * - "`orderTimeout`"
		 * - "`other`"
		 * - "`paymentAbuse`"
		 * - "`paymentDeclined`"
		 * - "`priceAdjustment`"
		 * - "`priceError`"
		 * - "`productArrivedDamaged`"
		 * - "`productNotAsDescribed`"
		 * - "`promoReallocation`"
		 * - "`qualityNotAsExpected`"
		 * - "`returnRefundAbuse`"
		 * - "`shippingCostAdjustment`"
		 * - "`shippingPriceError`"
		 * - "`taxAdjustment`"
		 * - "`taxError`"
		 * - "`undeliverableShippingAddress`"
		 * - "`unsupportedPoBoxAddress`"
		 * - "`wrongProductShipped`"
		 */
		reason?: string | null;
	}

	export interface OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption {

		/** Optional description of the return reason. */
		description?: string | null;

		/**
		 * [required] Reason for the return.
		 * Acceptable values are:
		 * - "`customerDiscretionaryReturn`"
		 * - "`customerInitiatedMerchantCancel`"
		 * - "`deliveredTooLate`"
		 * - "`expiredItem`"
		 * - "`invalidCoupon`"
		 * - "`malformedShippingAddress`"
		 * - "`other`"
		 * - "`productArrivedDamaged`"
		 * - "`productNotAsDescribed`"
		 * - "`qualityNotAsExpected`"
		 * - "`undeliverableShippingAddress`"
		 * - "`unsupportedPoBoxAddress`"
		 * - "`wrongProductShipped`"
		 */
		reason?: string | null;
	}

	export interface ShipmentInvoice {
		invoiceSummary?: InvoiceSummary | null;

		/** [required] Invoice details per line item. */
		lineItemInvoices?: Array<ShipmentInvoiceLineItemInvoice> | null;

		/** [required] ID of the shipment group. It is assigned by the merchant in the `shipLineItems` method and is used to group multiple line items that have the same kind of shipping charges. */
		shipmentGroupId?: string | null;
	}

	export interface OrderinvoicesCreateRefundInvoiceResponse {

		/**
		 * The status of the execution.
		 * Acceptable values are:
		 * - "duplicate"
		 * - "executed"
		 */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#orderinvoicesCreateRefundInvoiceResponse". */
		kind?: string | null;
	}

	export interface OrderreportsListDisbursementsResponse {

		/** The list of disbursements. */
		disbursements?: Array<OrderReportDisbursement> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#orderreportsListDisbursementsResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of disbursements. */
		nextPageToken?: string | null;
	}

	export interface OrderreportsListTransactionsResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#orderreportsListTransactionsResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of transactions. */
		nextPageToken?: string | null;

		/** The list of transactions. */
		transactions?: Array<OrderReportTransaction> | null;
	}

	export interface OrderreturnsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#orderreturnsListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of returns. */
		nextPageToken?: string | null;
		resources?: Array<MerchantOrderReturn> | null;
	}

	export interface OrdersAcknowledgeRequest {

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;
	}

	export interface OrdersAcknowledgeResponse {

		/**
		 * The status of the execution.
		 * Acceptable values are:
		 * - "duplicate"
		 * - "executed"
		 */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersAcknowledgeResponse". */
		kind?: string | null;
	}

	export interface OrdersAdvanceTestOrderResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersAdvanceTestOrderResponse". */
		kind?: string | null;
	}

	export interface OrdersCancelLineItemRequest {
		amount?: Price | null;
		amountPretax?: Price | null;
		amountTax?: Price | null;

		/** The ID of the line item to cancel. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to cancel. */
		quantity?: string | null;

		/**
		 * The reason for the cancellation.
		 * Acceptable values are:
		 * - "`customerInitiatedCancel`"
		 * - "`invalidCoupon`"
		 * - "`malformedShippingAddress`"
		 * - "`noInventory`"
		 * - "`other`"
		 * - "`priceError`"
		 * - "`shippingPriceError`"
		 * - "`taxError`"
		 * - "`undeliverableShippingAddress`"
		 * - "`unsupportedPoBoxAddress`"
		 */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}

	export interface OrdersCancelLineItemResponse {

		/**
		 * The status of the execution.
		 * Acceptable values are:
		 * - "duplicate"
		 * - "executed"
		 */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelLineItemResponse". */
		kind?: string | null;
	}

	export interface OrdersCancelRequest {

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/**
		 * The reason for the cancellation.
		 * Acceptable values are:
		 * - "`customerInitiatedCancel`"
		 * - "`invalidCoupon`"
		 * - "`malformedShippingAddress`"
		 * - "`noInventory`"
		 * - "`other`"
		 * - "`priceError`"
		 * - "`shippingPriceError`"
		 * - "`taxError`"
		 * - "`undeliverableShippingAddress`"
		 * - "`unsupportedPoBoxAddress`"
		 */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}

	export interface OrdersCancelResponse {

		/**
		 * The status of the execution.
		 * Acceptable values are:
		 * - "duplicate"
		 * - "executed"
		 */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelResponse". */
		kind?: string | null;
	}

	export interface OrdersCancelTestOrderByCustomerRequest {

		/**
		 * The reason for the cancellation.
		 * Acceptable values are:
		 * - "`changedMind`"
		 * - "`orderedWrongItem`"
		 * - "`other`"
		 */
		reason?: string | null;
	}

	export interface OrdersCancelTestOrderByCustomerResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelTestOrderByCustomerResponse". */
		kind?: string | null;
	}

	export interface OrdersCreateTestOrderRequest {

		/**
		 * The  CLDR territory code of the country of the test order to create. Affects the currency and addresses of orders created via `template_name`, or the addresses of orders created via `test_order`.
		 * Acceptable values are:
		 * - "`US`"
		 * - "`FR`"  Defaults to `US`.
		 */
		country?: string | null;

		/**
		 * The test order template to use. Specify as an alternative to `testOrder` as a shortcut for retrieving a template and then creating an order using that template.
		 * Acceptable values are:
		 * - "`template1`"
		 * - "`template1a`"
		 * - "`template1b`"
		 * - "`template2`"
		 * - "`template3`"
		 */
		templateName?: string | null;
		testOrder?: TestOrder | null;
	}

	export interface TestOrder {
		customer?: TestOrderCustomer | null;

		/** Whether the orderinvoices service should support this order. */
		enableOrderinvoices?: boolean | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#testOrder`" */
		kind?: string | null;

		/** Required. Line items that are ordered. At least one line item must be provided. */
		lineItems?: Array<TestOrderLineItem> | null;

		/** Restricted. Do not use. */
		notificationMode?: string | null;
		paymentMethod?: TestOrderPaymentMethod | null;

		/**
		 * Required. Identifier of one of the predefined delivery addresses for the delivery.
		 * Acceptable values are:
		 * - "`dwight`"
		 * - "`jim`"
		 * - "`pam`"
		 */
		predefinedDeliveryAddress?: string | null;

		/**
		 * Identifier of one of the predefined pickup details. Required for orders containing line items with shipping type `pickup`.
		 * Acceptable values are:
		 * - "`dwight`"
		 * - "`jim`"
		 * - "`pam`"
		 */
		predefinedPickupDetails?: string | null;

		/** Deprecated. Ignored if provided. */
		promotions?: Array<OrderLegacyPromotion> | null;
		shippingCost?: Price | null;
		shippingCostTax?: Price | null;

		/**
		 * Required. The requested shipping option.
		 * Acceptable values are:
		 * - "`economy`"
		 * - "`expedited`"
		 * - "`oneDay`"
		 * - "`sameDay`"
		 * - "`standard`"
		 * - "`twoDay`"
		 */
		shippingOption?: string | null;
	}

	export interface TestOrderCustomer {

		/**
		 * Required. Email address of the customer.
		 * Acceptable values are:
		 * - "`pog.dwight.schrute@gmail.com`"
		 * - "`pog.jim.halpert@gmail.com`"
		 * - "`penpog.pam.beesly@gmail.comding`"
		 */
		email?: string | null;

		/** Deprecated. Please use marketingRightsInfo instead. */
		explicitMarketingPreference?: boolean | null;

		/** Full name of the customer. */
		fullName?: string | null;
		marketingRightsInfo?: TestOrderCustomerMarketingRightsInfo | null;
	}

	export interface TestOrderCustomerMarketingRightsInfo {

		/**
		 * Last know user use selection regards marketing preferences. In certain cases selection might not be known, so this field would be empty.
		 * Acceptable values are:
		 * - "`denied`"
		 * - "`granted`"
		 */
		explicitMarketingPreference?: string | null;

		/** Timestamp when last time marketing preference was updated. Could be empty, if user wasn't offered a selection yet. */
		lastUpdatedTimestamp?: string | null;
	}

	export interface TestOrderLineItem {
		product?: TestOrderLineItemProduct | null;

		/** Required. Number of items ordered. */
		quantityOrdered?: string | null;
		returnInfo?: OrderLineItemReturnInfo | null;
		shippingDetails?: OrderLineItemShippingDetails | null;
		unitTax?: Price | null;
	}

	export interface TestOrderLineItemProduct {

		/** Required. Brand of the item. */
		brand?: string | null;

		/**
		 * Deprecated.
		 * Acceptable values are:
		 * - "`online`"
		 */
		channel?: string | null;

		/**
		 * Required. Condition or state of the item.
		 * Acceptable values are:
		 * - "`new`"
		 */
		condition?: string | null;

		/**
		 * Required. The two-letter ISO 639-1 language code for the item.
		 * Acceptable values are:
		 * - "`en`"
		 * - "`fr`"
		 */
		contentLanguage?: string | null;

		/** Fees for the item. Optional. */
		fees?: Array<OrderLineItemProductFee> | null;

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
		price?: Price | null;

		/** Required. The CLDR territory code of the target country of the product. */
		targetCountry?: string | null;

		/** Required. The title of the product. */
		title?: string | null;

		/** Variant attributes for the item. Optional. */
		variantAttributes?: Array<OrderLineItemProductVariantAttribute> | null;
	}

	export interface TestOrderPaymentMethod {

		/** The card expiration month (January = 1, February = 2 etc.). */
		expirationMonth?: number | null;

		/** The card expiration year (4-digit, e.g. 2015). */
		expirationYear?: number | null;

		/** The last four digits of the card number. */
		lastFourDigits?: string | null;

		/**
		 * The billing address.
		 * Acceptable values are:
		 * - "`dwight`"
		 * - "`jim`"
		 * - "`pam`"
		 */
		predefinedBillingAddress?: string | null;

		/**
		 * The type of instrument. Note that real orders might have different values than the four values accepted by `createTestOrder`.
		 * Acceptable values are:
		 * - "`AMEX`"
		 * - "`DISCOVER`"
		 * - "`MASTERCARD`"
		 * - "`VISA`"
		 */
		type?: string | null;
	}

	export interface OrdersCreateTestOrderResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersCreateTestOrderResponse". */
		kind?: string | null;

		/** The ID of the newly created test order. */
		orderId?: string | null;
	}

	export interface OrdersCreateTestReturnRequest {

		/** Returned items. */
		items?: Array<OrdersCustomBatchRequestEntryCreateTestReturnReturnItem> | null;
	}

	export interface OrdersCustomBatchRequestEntryCreateTestReturnReturnItem {

		/** The ID of the line item to return. */
		lineItemId?: string | null;

		/** Quantity that is returned. */
		quantity?: string | null;
	}

	export interface OrdersCreateTestReturnResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersCreateTestReturnResponse". */
		kind?: string | null;

		/** The ID of the newly created test order return. */
		returnId?: string | null;
	}

	export interface OrdersCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<OrdersCustomBatchRequestEntry> | null;
	}

	export interface OrdersCustomBatchRequestEntry {

		/** An entry ID, unique within the batch request. */
		batchId?: string | null;
		cancel?: OrdersCustomBatchRequestEntryCancel | null;
		cancelLineItem?: OrdersCustomBatchRequestEntryCancelLineItem | null;
		inStoreRefundLineItem?: OrdersCustomBatchRequestEntryInStoreRefundLineItem | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/** The merchant order ID. Required for `updateMerchantOrderId` and `getByMerchantOrderId` methods. */
		merchantOrderId?: string | null;

		/**
		 * The method of the batch entry.
		 * Acceptable values are:
		 * - "`acknowledge`"
		 * - "`cancel`"
		 * - "`cancelLineItem`"
		 * - "`get`"
		 * - "`getByMerchantOrderId`"
		 * - "`inStoreRefundLineItem`"
		 * - "`refund`"
		 * - "`rejectReturnLineItem`"
		 * - "`returnLineItem`"
		 * - "`returnRefundLineItem`"
		 * - "`setLineItemMetadata`"
		 * - "`shipLineItems`"
		 * - "`updateLineItemShippingDetails`"
		 * - "`updateMerchantOrderId`"
		 * - "`updateShipment`"
		 */
		method?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. Required for all methods beside `get` and `getByMerchantOrderId`. */
		operationId?: string | null;

		/** The ID of the order. Required for all methods beside `getByMerchantOrderId`. */
		orderId?: string | null;
		refund?: OrdersCustomBatchRequestEntryRefund | null;
		rejectReturnLineItem?: OrdersCustomBatchRequestEntryRejectReturnLineItem | null;
		returnLineItem?: OrdersCustomBatchRequestEntryReturnLineItem | null;
		returnRefundLineItem?: OrdersCustomBatchRequestEntryReturnRefundLineItem | null;
		setLineItemMetadata?: OrdersCustomBatchRequestEntrySetLineItemMetadata | null;
		shipLineItems?: OrdersCustomBatchRequestEntryShipLineItems | null;
		updateLineItemShippingDetails?: OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails | null;
		updateShipment?: OrdersCustomBatchRequestEntryUpdateShipment | null;
	}

	export interface OrdersCustomBatchRequestEntryCancel {

		/**
		 * The reason for the cancellation.
		 * Acceptable values are:
		 * - "`customerInitiatedCancel`"
		 * - "`invalidCoupon`"
		 * - "`malformedShippingAddress`"
		 * - "`noInventory`"
		 * - "`other`"
		 * - "`priceError`"
		 * - "`shippingPriceError`"
		 * - "`taxError`"
		 * - "`undeliverableShippingAddress`"
		 * - "`unsupportedPoBoxAddress`"
		 */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}

	export interface OrdersCustomBatchRequestEntryCancelLineItem {
		amount?: Price | null;
		amountPretax?: Price | null;
		amountTax?: Price | null;

		/** The ID of the line item to cancel. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to cancel. */
		quantity?: string | null;

		/**
		 * The reason for the cancellation.
		 * Acceptable values are:
		 * - "`customerInitiatedCancel`"
		 * - "`invalidCoupon`"
		 * - "`malformedShippingAddress`"
		 * - "`noInventory`"
		 * - "`other`"
		 * - "`priceError`"
		 * - "`shippingPriceError`"
		 * - "`taxError`"
		 * - "`undeliverableShippingAddress`"
		 * - "`unsupportedPoBoxAddress`"
		 */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}

	export interface OrdersCustomBatchRequestEntryInStoreRefundLineItem {
		amountPretax?: Price | null;
		amountTax?: Price | null;

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to return and refund. */
		quantity?: string | null;

		/**
		 * The reason for the return.
		 * Acceptable values are:
		 * - "`customerDiscretionaryReturn`"
		 * - "`customerInitiatedMerchantCancel`"
		 * - "`deliveredTooLate`"
		 * - "`expiredItem`"
		 * - "`invalidCoupon`"
		 * - "`malformedShippingAddress`"
		 * - "`other`"
		 * - "`productArrivedDamaged`"
		 * - "`productNotAsDescribed`"
		 * - "`qualityNotAsExpected`"
		 * - "`undeliverableShippingAddress`"
		 * - "`unsupportedPoBoxAddress`"
		 * - "`wrongProductShipped`"
		 */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}

	export interface OrdersCustomBatchRequestEntryRefund {
		amount?: Price | null;
		amountPretax?: Price | null;
		amountTax?: Price | null;

		/**
		 * The reason for the refund.
		 * Acceptable values are:
		 * - "`adjustment`"
		 * - "`courtesyAdjustment`"
		 * - "`customerCanceled`"
		 * - "`customerDiscretionaryReturn`"
		 * - "`deliveredLateByCarrier`"
		 * - "`feeAdjustment`"
		 * - "`lateShipmentCredit`"
		 * - "`noInventory`"
		 * - "`other`"
		 * - "`priceError`"
		 * - "`productArrivedDamaged`"
		 * - "`productNotAsDescribed`"
		 * - "`shippingCostAdjustment`"
		 * - "`taxAdjustment`"
		 * - "`undeliverableShippingAddress`"
		 * - "`wrongProductShipped`"
		 */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}

	export interface OrdersCustomBatchRequestEntryRejectReturnLineItem {

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to return and refund. */
		quantity?: string | null;

		/**
		 * The reason for the return.
		 * Acceptable values are:
		 * - "`damagedOrUsed`"
		 * - "`missingComponent`"
		 * - "`notEligible`"
		 * - "`other`"
		 * - "`outOfReturnWindow`"
		 */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}

	export interface OrdersCustomBatchRequestEntryReturnLineItem {

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to return. */
		quantity?: string | null;

		/**
		 * The reason for the return.
		 * Acceptable values are:
		 * - "`customerDiscretionaryReturn`"
		 * - "`customerInitiatedMerchantCancel`"
		 * - "`deliveredTooLate`"
		 * - "`expiredItem`"
		 * - "`invalidCoupon`"
		 * - "`malformedShippingAddress`"
		 * - "`other`"
		 * - "`productArrivedDamaged`"
		 * - "`productNotAsDescribed`"
		 * - "`qualityNotAsExpected`"
		 * - "`undeliverableShippingAddress`"
		 * - "`unsupportedPoBoxAddress`"
		 * - "`wrongProductShipped`"
		 */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}

	export interface OrdersCustomBatchRequestEntryReturnRefundLineItem {
		amountPretax?: Price | null;
		amountTax?: Price | null;

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to return and refund. */
		quantity?: string | null;

		/**
		 * The reason for the return.
		 * Acceptable values are:
		 * - "`customerDiscretionaryReturn`"
		 * - "`customerInitiatedMerchantCancel`"
		 * - "`deliveredTooLate`"
		 * - "`expiredItem`"
		 * - "`invalidCoupon`"
		 * - "`malformedShippingAddress`"
		 * - "`other`"
		 * - "`productArrivedDamaged`"
		 * - "`productNotAsDescribed`"
		 * - "`qualityNotAsExpected`"
		 * - "`undeliverableShippingAddress`"
		 * - "`unsupportedPoBoxAddress`"
		 * - "`wrongProductShipped`"
		 */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}

	export interface OrdersCustomBatchRequestEntrySetLineItemMetadata {
		annotations?: Array<OrderMerchantProvidedAnnotation> | null;

		/** The ID of the line item to set metadata. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;
	}

	export interface OrdersCustomBatchRequestEntryShipLineItems {

		/** Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See `shipments[].carrier` in the  Orders resource representation for a list of acceptable values. */
		carrier?: string | null;

		/** Line items to ship. */
		lineItems?: Array<OrderShipmentLineItemShipment> | null;

		/** ID of the shipment group. Required for orders that use the orderinvoices service. */
		shipmentGroupId?: string | null;

		/** Deprecated. Please use shipmentInfo instead. The ID of the shipment. */
		shipmentId?: string | null;

		/** Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs). */
		shipmentInfos?: Array<OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo> | null;

		/** Deprecated. Please use shipmentInfo instead. The tracking ID for the shipment. */
		trackingId?: string | null;
	}

	export interface OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo {

		/** The carrier handling the shipment. See `shipments[].carrier` in the  Orders resource representation for a list of acceptable values. */
		carrier?: string | null;

		/** Required. The ID of the shipment. This is assigned by the merchant and is unique to each shipment. */
		shipmentId?: string | null;

		/** The tracking ID for the shipment. */
		trackingId?: string | null;
	}

	export interface OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails {

		/**
		 * Updated delivery by date, in ISO 8601 format. If not specified only ship by date is updated.
		 * Provided date should be within 1 year timeframe and can not be a date in the past.
		 */
		deliverByDate?: string | null;

		/** The ID of the line item to set metadata. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/**
		 * Updated ship by date, in ISO 8601 format. If not specified only deliver by date is updated.
		 * Provided date should be within 1 year timeframe and can not be a date in the past.
		 */
		shipByDate?: string | null;
	}

	export interface OrdersCustomBatchRequestEntryUpdateShipment {

		/** The carrier handling the shipment. Not updated if missing. See `shipments[].carrier` in the  Orders resource representation for a list of acceptable values. */
		carrier?: string | null;

		/** Date on which the shipment has been delivered, in ISO 8601 format. Optional and can be provided only if `status` is `delivered`. */
		deliveryDate?: string | null;

		/** The ID of the shipment. */
		shipmentId?: string | null;

		/**
		 * New status for the shipment. Not updated if missing.
		 * Acceptable values are:
		 * - "`delivered`"
		 * - "`undeliverable`"
		 */
		status?: string | null;

		/** The tracking ID for the shipment. Not updated if missing. */
		trackingId?: string | null;
	}

	export interface OrdersCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<OrdersCustomBatchResponseEntry> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersCustomBatchResponse". */
		kind?: string | null;
	}

	export interface OrdersCustomBatchResponseEntry {

		/** The ID of the request entry this entry responds to. */
		batchId?: string | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors | null;

		/**
		 * The status of the execution. Only defined if
		 * - the request was successful; and
		 * - the method is not `get`, `getByMerchantOrderId`, or one of the test methods.
		 * Acceptable values are:
		 * - "`duplicate`"
		 * - "`executed`"
		 */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersCustomBatchResponseEntry`" */
		kind?: string | null;

		/** Order. Production access (all methods) requires the order manager role. Sandbox access does not. (== resource_for v2.orders ==) (== resource_for v2.1.orders ==) */
		order?: Order | null;
	}

	export interface OrdersGetByMerchantOrderIdResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersGetByMerchantOrderIdResponse". */
		kind?: string | null;

		/** Order. Production access (all methods) requires the order manager role. Sandbox access does not. (== resource_for v2.orders ==) (== resource_for v2.1.orders ==) */
		order?: Order | null;
	}

	export interface OrdersGetTestOrderTemplateResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersGetTestOrderTemplateResponse". */
		kind?: string | null;
		template?: TestOrder | null;
	}

	export interface OrdersInStoreRefundLineItemRequest {
		amountPretax?: Price | null;
		amountTax?: Price | null;

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to return and refund. */
		quantity?: string | null;

		/**
		 * The reason for the return.
		 * Acceptable values are:
		 * - "`customerDiscretionaryReturn`"
		 * - "`customerInitiatedMerchantCancel`"
		 * - "`deliveredTooLate`"
		 * - "`expiredItem`"
		 * - "`invalidCoupon`"
		 * - "`malformedShippingAddress`"
		 * - "`other`"
		 * - "`productArrivedDamaged`"
		 * - "`productNotAsDescribed`"
		 * - "`qualityNotAsExpected`"
		 * - "`undeliverableShippingAddress`"
		 * - "`unsupportedPoBoxAddress`"
		 * - "`wrongProductShipped`"
		 */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}

	export interface OrdersInStoreRefundLineItemResponse {

		/**
		 * The status of the execution.
		 * Acceptable values are:
		 * - "duplicate"
		 * - "executed"
		 */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersInStoreRefundLineItemResponse". */
		kind?: string | null;
	}

	export interface OrdersListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of orders. */
		nextPageToken?: string | null;
		resources?: Array<Order> | null;
	}

	export interface OrdersRefundRequest {
		amount?: Price | null;
		amountPretax?: Price | null;
		amountTax?: Price | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/**
		 * The reason for the refund.
		 * Acceptable values are:
		 * - "`adjustment`"
		 * - "`courtesyAdjustment`"
		 * - "`customerCanceled`"
		 * - "`customerDiscretionaryReturn`"
		 * - "`deliveredLateByCarrier`"
		 * - "`feeAdjustment`"
		 * - "`lateShipmentCredit`"
		 * - "`noInventory`"
		 * - "`other`"
		 * - "`priceError`"
		 * - "`productArrivedDamaged`"
		 * - "`productNotAsDescribed`"
		 * - "`shippingCostAdjustment`"
		 * - "`taxAdjustment`"
		 * - "`undeliverableShippingAddress`"
		 * - "`wrongProductShipped`"
		 */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}

	export interface OrdersRefundResponse {

		/**
		 * The status of the execution.
		 * Acceptable values are:
		 * - "duplicate"
		 * - "executed"
		 */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersRefundResponse". */
		kind?: string | null;
	}

	export interface OrdersRejectReturnLineItemRequest {

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to return and refund. */
		quantity?: string | null;

		/**
		 * The reason for the return.
		 * Acceptable values are:
		 * - "`damagedOrUsed`"
		 * - "`missingComponent`"
		 * - "`notEligible`"
		 * - "`other`"
		 * - "`outOfReturnWindow`"
		 */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}

	export interface OrdersRejectReturnLineItemResponse {

		/**
		 * The status of the execution.
		 * Acceptable values are:
		 * - "duplicate"
		 * - "executed"
		 */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersRejectReturnLineItemResponse". */
		kind?: string | null;
	}

	export interface OrdersReturnLineItemRequest {

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to return. */
		quantity?: string | null;

		/**
		 * The reason for the return.
		 * Acceptable values are:
		 * - "`customerDiscretionaryReturn`"
		 * - "`customerInitiatedMerchantCancel`"
		 * - "`deliveredTooLate`"
		 * - "`expiredItem`"
		 * - "`invalidCoupon`"
		 * - "`malformedShippingAddress`"
		 * - "`other`"
		 * - "`productArrivedDamaged`"
		 * - "`productNotAsDescribed`"
		 * - "`qualityNotAsExpected`"
		 * - "`undeliverableShippingAddress`"
		 * - "`unsupportedPoBoxAddress`"
		 * - "`wrongProductShipped`"
		 */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}

	export interface OrdersReturnLineItemResponse {

		/**
		 * The status of the execution.
		 * Acceptable values are:
		 * - "duplicate"
		 * - "executed"
		 */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersReturnLineItemResponse". */
		kind?: string | null;
	}

	export interface OrdersReturnRefundLineItemRequest {
		amountPretax?: Price | null;
		amountTax?: Price | null;

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to return and refund. */
		quantity?: string | null;

		/**
		 * The reason for the return.
		 * Acceptable values are:
		 * - "`customerDiscretionaryReturn`"
		 * - "`customerInitiatedMerchantCancel`"
		 * - "`deliveredTooLate`"
		 * - "`expiredItem`"
		 * - "`invalidCoupon`"
		 * - "`malformedShippingAddress`"
		 * - "`other`"
		 * - "`productArrivedDamaged`"
		 * - "`productNotAsDescribed`"
		 * - "`qualityNotAsExpected`"
		 * - "`undeliverableShippingAddress`"
		 * - "`unsupportedPoBoxAddress`"
		 * - "`wrongProductShipped`"
		 */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}

	export interface OrdersReturnRefundLineItemResponse {

		/**
		 * The status of the execution.
		 * Acceptable values are:
		 * - "duplicate"
		 * - "executed"
		 */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersReturnRefundLineItemResponse". */
		kind?: string | null;
	}

	export interface OrdersSetLineItemMetadataRequest {
		annotations?: Array<OrderMerchantProvidedAnnotation> | null;

		/** The ID of the line item to set metadata. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;
	}

	export interface OrdersSetLineItemMetadataResponse {

		/**
		 * The status of the execution.
		 * Acceptable values are:
		 * - "duplicate"
		 * - "executed"
		 */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersSetLineItemMetadataResponse". */
		kind?: string | null;
	}

	export interface OrdersShipLineItemsRequest {

		/** Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See `shipments[].carrier` in the  Orders resource representation for a list of acceptable values. */
		carrier?: string | null;

		/** Line items to ship. */
		lineItems?: Array<OrderShipmentLineItemShipment> | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** ID of the shipment group. Required for orders that use the orderinvoices service. */
		shipmentGroupId?: string | null;

		/** Deprecated. Please use shipmentInfo instead. The ID of the shipment. */
		shipmentId?: string | null;

		/** Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs). */
		shipmentInfos?: Array<OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo> | null;

		/** Deprecated. Please use shipmentInfo instead. The tracking ID for the shipment. */
		trackingId?: string | null;
	}

	export interface OrdersShipLineItemsResponse {

		/**
		 * The status of the execution.
		 * Acceptable values are:
		 * - "duplicate"
		 * - "executed"
		 */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersShipLineItemsResponse". */
		kind?: string | null;
	}

	export interface OrdersUpdateLineItemShippingDetailsRequest {

		/**
		 * Updated delivery by date, in ISO 8601 format. If not specified only ship by date is updated.
		 * Provided date should be within 1 year timeframe and can not be a date in the past.
		 */
		deliverByDate?: string | null;

		/** The ID of the line item to set metadata. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/**
		 * Updated ship by date, in ISO 8601 format. If not specified only deliver by date is updated.
		 * Provided date should be within 1 year timeframe and can not be a date in the past.
		 */
		shipByDate?: string | null;
	}

	export interface OrdersUpdateLineItemShippingDetailsResponse {

		/**
		 * The status of the execution.
		 * Acceptable values are:
		 * - "duplicate"
		 * - "executed"
		 */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateLineItemShippingDetailsResponse". */
		kind?: string | null;
	}

	export interface OrdersUpdateMerchantOrderIdRequest {

		/** The merchant order id to be assigned to the order. Must be unique per merchant. */
		merchantOrderId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;
	}

	export interface OrdersUpdateMerchantOrderIdResponse {

		/**
		 * The status of the execution.
		 * Acceptable values are:
		 * - "duplicate"
		 * - "executed"
		 */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateMerchantOrderIdResponse". */
		kind?: string | null;
	}

	export interface OrdersUpdateShipmentRequest {

		/** The carrier handling the shipment. Not updated if missing. See `shipments[].carrier` in the  Orders resource representation for a list of acceptable values. */
		carrier?: string | null;

		/** Date on which the shipment has been delivered, in ISO 8601 format. Optional and can be provided only if `status` is `delivered`. */
		deliveryDate?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The ID of the shipment. */
		shipmentId?: string | null;

		/**
		 * New status for the shipment. Not updated if missing.
		 * Acceptable values are:
		 * - "`delivered`"
		 * - "`undeliverable`"
		 */
		status?: string | null;

		/** The tracking ID for the shipment. Not updated if missing. */
		trackingId?: string | null;
	}

	export interface OrdersUpdateShipmentResponse {

		/**
		 * The status of the execution.
		 * Acceptable values are:
		 * - "duplicate"
		 * - "executed"
		 */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateShipmentResponse". */
		kind?: string | null;
	}

	export interface PickupCarrierService {

		/** The name of the pickup carrier (e.g., `"UPS"`). Required. */
		carrierName?: string | null;

		/** The name of the pickup service (e.g., `"Access point"`). Required. */
		serviceName?: string | null;
	}

	export interface PickupServicesPickupService {

		/** The name of the carrier (e.g., `"UPS"`). Always present. */
		carrierName?: string | null;

		/** The CLDR country code of the carrier (e.g., "US"). Always present. */
		country?: string | null;

		/** The name of the pickup service (e.g., `"Access point"`). Always present. */
		serviceName?: string | null;
	}

	export interface PosCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<PosCustomBatchRequestEntry> | null;
	}

	export interface PosCustomBatchRequestEntry {

		/** An entry ID, unique within the batch request. */
		batchId?: string | null;

		/** The absolute quantity of an item available at the given store. */
		inventory?: PosInventory | null;

		/** The ID of the POS data provider. */
		merchantId?: string | null;

		/**
		 * The method of the batch entry.
		 * Acceptable values are:
		 * - "`delete`"
		 * - "`get`"
		 * - "`insert`"
		 * - "`inventory`"
		 * - "`sale`"
		 */
		method?: string | null;

		/** The change of the available quantity of an item at the given store. */
		sale?: PosSale | null;

		/** Store resource. */
		store?: PosStore | null;

		/** The store code. Set this only if the method is `delete` or `get`. */
		storeCode?: string | null;

		/** The ID of the account for which to get/submit data. */
		targetMerchantId?: string | null;
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
		price?: Price | null;

		/** Required. The available quantity of the item. */
		quantity?: string | null;

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business. */
		storeCode?: string | null;

		/** Required. The CLDR territory code for the item. */
		targetCountry?: string | null;

		/** Required. The inventory timestamp, in ISO 8601 format. */
		timestamp?: string | null;
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
		price?: Price | null;

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


	/** Store resource. */
	export interface PosStore {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#posStore`" */
		kind?: string | null;

		/** Required. The street address of the store. */
		storeAddress?: string | null;

		/** Required. A store identifier that is unique for the given merchant. */
		storeCode?: string | null;
	}

	export interface PosCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<PosCustomBatchResponseEntry> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#posCustomBatchResponse". */
		kind?: string | null;
	}

	export interface PosCustomBatchResponseEntry {

		/** The ID of the request entry to which this entry responds. */
		batchId?: string | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors | null;

		/** The absolute quantity of an item available at the given store. */
		inventory?: PosInventory | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#posCustomBatchResponseEntry`" */
		kind?: string | null;

		/** The change of the available quantity of an item at the given store. */
		sale?: PosSale | null;

		/** Store resource. */
		store?: PosStore | null;
	}

	export interface PosInventoryRequest {

		/** Required. The two-letter ISO 639-1 language code for the item. */
		contentLanguage?: string | null;

		/** Global Trade Item Number. */
		gtin?: string | null;

		/** Required. A unique identifier for the item. */
		itemId?: string | null;
		price?: Price | null;

		/** Required. The available quantity of the item. */
		quantity?: string | null;

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business. */
		storeCode?: string | null;

		/** Required. The CLDR territory code for the item. */
		targetCountry?: string | null;

		/** Required. The inventory timestamp, in ISO 8601 format. */
		timestamp?: string | null;
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
		price?: Price | null;

		/** Required. The available quantity of the item. */
		quantity?: string | null;

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business. */
		storeCode?: string | null;

		/** Required. The CLDR territory code for the item. */
		targetCountry?: string | null;

		/** Required. The inventory timestamp, in ISO 8601 format. */
		timestamp?: string | null;
	}

	export interface PosListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#posListResponse". */
		kind?: string | null;
		resources?: Array<PosStore> | null;
	}

	export interface PosSaleRequest {

		/** Required. The two-letter ISO 639-1 language code for the item. */
		contentLanguage?: string | null;

		/** Global Trade Item Number. */
		gtin?: string | null;

		/** Required. A unique identifier for the item. */
		itemId?: string | null;
		price?: Price | null;

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

	export interface PosSaleResponse {

		/** Required. The two-letter ISO 639-1 language code for the item. */
		contentLanguage?: string | null;

		/** Global Trade Item Number. */
		gtin?: string | null;

		/** Required. A unique identifier for the item. */
		itemId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#posSaleResponse". */
		kind?: string | null;
		price?: Price | null;

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

	export interface PostalCodeGroup {

		/** The CLDR territory code of the country the postal code group applies to. Required. */
		country?: string | null;

		/** The name of the postal code group, referred to in headers. Required. */
		name?: string | null;

		/** A range of postal codes. Required. */
		postalCodeRanges?: Array<PostalCodeRange> | null;
	}

	export interface PostalCodeRange {

		/** A postal code or a pattern of the form `prefix*` denoting the inclusive lower bound of the range defining the area. Examples values: `"94108"`, `"9410*"`, `"9*"`. Required. */
		postalCodeRangeBegin?: string | null;

		/** A postal code or a pattern of the form `prefix*` denoting the inclusive upper bound of the range defining the area. It must have the same length as `postalCodeRangeBegin`: if `postalCodeRangeBegin` is a postal code then `postalCodeRangeEnd` must be a postal code too; if `postalCodeRangeBegin` is a pattern then `postalCodeRangeEnd` must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching `postalCodeRangeBegin`. */
		postalCodeRangeEnd?: string | null;
	}


	/**
	 * Required product attributes are primarily defined by the products data specification. See the  Products Data Specification Help Center article for information.
	 * Some attributes are country-specific, so make sure you select the appropriate country in the drop-down selector at the top of the page.  
	 * Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.
	 */
	export interface Product {

		/** Additional URLs of images of the item. */
		additionalImageLinks?: Array<string> | null;

		/** Additional categories of the item (formatted as in products data specification). */
		additionalProductTypes?: Array<string> | null;

		/** Set to true if the item is targeted towards adults. */
		adult?: boolean | null;

		/** Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise. */
		adwordsGrouping?: string | null;

		/** Similar to adwords_grouping, but only works on CPC. */
		adwordsLabels?: Array<string> | null;

		/** Allows advertisers to override the item URL when the product is shown within the context of Product Ads. */
		adwordsRedirect?: string | null;

		/**
		 * Target age group of the item.
		 * Acceptable values are:
		 * - "`adult`"
		 * - "`infant`"
		 * - "`kids`"
		 * - "`newborn`"
		 * - "`toddler`"
		 * - "`youngAdult`"
		 */
		ageGroup?: string | null;

		/** Deprecated. Do not use. */
		aspects?: Array<ProductAspect> | null;

		/**
		 * Availability status of the item.
		 * Acceptable values are:
		 * - "`in stock`"
		 * - "`out of stock`"
		 * - "`preorder`"
		 */
		availability?: string | null;

		/** The day a pre-ordered product becomes available for delivery, in ISO 8601 format. */
		availabilityDate?: string | null;

		/** Brand of the item. */
		brand?: string | null;

		/**
		 * Required. The item's channel (online or local).
		 * Acceptable values are:
		 * - "`local`"
		 * - "`online`"
		 */
		channel?: string | null;

		/** Color of the item. */
		color?: string | null;

		/**
		 * Condition or state of the item.
		 * Acceptable values are:
		 * - "`local`"
		 * - "`online`"
		 */
		condition?: string | null;

		/** Required. The two-letter ISO 639-1 language code for the item. */
		contentLanguage?: string | null;
		costOfGoodsSold?: Price | null;

		/** A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form (e.g., `{ "name": "size type", "value": "regular" }`). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Shopping Actions. */
		customAttributes?: Array<CustomAttribute> | null;

		/** A list of custom (merchant-provided) custom attribute groups. */
		customGroups?: Array<CustomGroup> | null;

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
		destinations?: Array<ProductDestination> | null;

		/** An identifier for an item for dynamic remarketing campaigns. */
		displayAdsId?: string | null;

		/** URL directly to your item's landing page for dynamic remarketing campaigns. */
		displayAdsLink?: string | null;

		/** Advertiser-specified recommendations. */
		displayAdsSimilarIds?: Array<string> | null;

		/** Title of an item for dynamic remarketing campaigns. */
		displayAdsTitle?: string | null;

		/** Offer margin for dynamic remarketing campaigns. */
		displayAdsValue?: number | null;

		/**
		 * The energy efficiency class as defined in EU directive 2010/30/EU.
		 * Acceptable values are:
		 * - "`A`"
		 * - "`A+`"
		 * - "`A++`"
		 * - "`A+++`"
		 * - "`B`"
		 * - "`C`"
		 * - "`D`"
		 * - "`E`"
		 * - "`F`"
		 * - "`G`"
		 */
		energyEfficiencyClass?: string | null;

		/** Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in Google Shopping is exposed in `productstatuses` as `googleExpirationDate` and might be earlier if `expirationDate` is too far in the future. */
		expirationDate?: string | null;

		/**
		 * Target gender of the item.
		 * Acceptable values are:
		 * - "`female`"
		 * - "`male`"
		 * - "`unisex`"
		 */
		gender?: string | null;

		/** Google's category of the item (see Google product taxonomy). */
		googleProductCategory?: string | null;

		/** Global Trade Item Number (GTIN) of the item. */
		gtin?: string | null;

		/**
		 * The REST ID of the product. Content API methods that operate on products take this as their `productId` parameter.
		 * The REST ID for a product is of the form channel:contentLanguage:targetCountry:offerId.
		 */
		id?: string | null;

		/** False when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Required according to the Unique Product Identifier Rules for all target countries except for Canada. */
		identifierExists?: boolean | null;

		/** URL of an image of the item. */
		imageLink?: string | null;
		installment?: Installment | null;

		/** Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant for a single price. */
		isBundle?: boolean | null;

		/** Shared identifier for all variants of the same product. */
		itemGroupId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#product`" */
		kind?: string | null;

		/** URL directly linking to your item's page on your website. */
		link?: string | null;
		loyaltyPoints?: LoyaltyPoints | null;

		/** The material of which the item is made. */
		material?: string | null;

		/**
		 * The energy efficiency class as defined in EU directive 2010/30/EU.
		 * Acceptable values are:
		 * - "`A`"
		 * - "`A+`"
		 * - "`A++`"
		 * - "`A+++`"
		 * - "`B`"
		 * - "`C`"
		 * - "`D`"
		 * - "`E`"
		 * - "`F`"
		 * - "`G`"
		 */
		maxEnergyEfficiencyClass?: string | null;

		/** Maximal product handling time (in business days). */
		maxHandlingTime?: string | null;

		/**
		 * The energy efficiency class as defined in EU directive 2010/30/EU.
		 * Acceptable values are:
		 * - "`A`"
		 * - "`A+`"
		 * - "`A++`"
		 * - "`A+++`"
		 * - "`B`"
		 * - "`C`"
		 * - "`D`"
		 * - "`E`"
		 * - "`F`"
		 * - "`G`"
		 */
		minEnergyEfficiencyClass?: string | null;

		/** Minimal product handling time (in business days). */
		minHandlingTime?: string | null;

		/** Link to a mobile-optimized version of the landing page. */
		mobileLink?: string | null;

		/** Manufacturer Part Number (MPN) of the item. */
		mpn?: string | null;

		/** The number of identical products in a merchant-defined multipack. */
		multipack?: string | null;

		/**
		 * Required. A unique identifier for the item. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. Only valid unicode characters are accepted. See the products feed specification for details.
		 * Note: Content API methods that operate on products take the REST ID of the product, not this identifier.
		 */
		offerId?: string | null;

		/** Deprecated. */
		onlineOnly?: boolean | null;

		/** The item's pattern (e.g. polka dots). */
		pattern?: string | null;
		price?: Price | null;

		/** Your category of the item (formatted as in products data specification). */
		productType?: string | null;

		/** The unique ID of a promotion. */
		promotionIds?: Array<string> | null;
		salePrice?: Price | null;

		/** Date range during which the item is on sale (see products data specification). */
		salePriceEffectiveDate?: string | null;

		/** The quantity of the product that is available for selling on Google. Supported only for online products. */
		sellOnGoogleQuantity?: string | null;

		/** Shipping rules. */
		shipping?: Array<ProductShipping> | null;
		shippingHeight?: ProductShippingDimension | null;

		/** The shipping label of the product, used to group product in account-level shipping rules. */
		shippingLabel?: string | null;
		shippingLength?: ProductShippingDimension | null;
		shippingWeight?: ProductShippingWeight | null;
		shippingWidth?: ProductShippingDimension | null;

		/**
		 * System in which the size is specified. Recommended for apparel items.
		 * Acceptable values are:
		 * - "`AU`"
		 * - "`BR`"
		 * - "`CN`"
		 * - "`DE`"
		 * - "`EU`"
		 * - "`FR`"
		 * - "`IT`"
		 * - "`JP`"
		 * - "`MEX`"
		 * - "`UK`"
		 * - "`US`"
		 */
		sizeSystem?: string | null;

		/**
		 * The cut of the item. Recommended for apparel items.
		 * Acceptable values are:
		 * - "`big and tall`"
		 * - "`maternity`"
		 * - "`oversize`"
		 * - "`petite`"
		 * - "`plus`"
		 * - "`regular`"
		 */
		sizeType?: string | null;

		/** Size of the item. Only one value is allowed. For variants with different sizes, insert a separate product for each size with the same `itemGroupId` value (see size definition). */
		sizes?: Array<string> | null;

		/**
		 * The source of the offer, i.e., how the offer was created.
		 * Acceptable values are:
		 * - "`api`"
		 * - "`crawl`"
		 * - "`feed`"
		 */
		source?: string | null;

		/** Required. The CLDR territory code for the item. */
		targetCountry?: string | null;

		/** Tax information. */
		taxes?: Array<ProductTax> | null;

		/** Title of the item. */
		title?: string | null;
		unitPricingBaseMeasure?: ProductUnitPricingBaseMeasure | null;
		unitPricingMeasure?: ProductUnitPricingMeasure | null;

		/** Deprecated. The read-only list of intended destinations which passed validation. */
		validatedDestinations?: Array<string> | null;

		/** Read-only warnings. */
		warnings?: Array<Error> | null;
	}

	export interface ProductAspect {

		/** Deprecated. */
		aspectName?: string | null;

		/** Deprecated. */
		destinationName?: string | null;

		/** Deprecated. */
		intention?: string | null;
	}

	export interface ProductDestination {

		/** The name of the destination. */
		destinationName?: string | null;

		/**
		 * Whether the destination is required, excluded or should be validated.
		 * Acceptable values are:
		 * - "`default`"
		 * - "`excluded`"
		 * - "`optional`"
		 * - "`required`"
		 */
		intention?: string | null;
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
		price?: Price | null;

		/** The geographic region to which a shipping rate applies. */
		region?: string | null;

		/** A free-form description of the service class or delivery speed. */
		service?: string | null;
	}

	export interface ProductShippingDimension {

		/** The unit of value. */
		unit?: string | null;

		/** The dimension of the product used to calculate the shipping cost of the item. */
		value?: number | null;
	}

	export interface ProductShippingWeight {

		/** The unit of value. */
		unit?: string | null;

		/** The weight of the product used to calculate the shipping cost of the item. */
		value?: number | null;
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

		/** Set to true if tax is charged on shipping. */
		taxShip?: boolean | null;
	}

	export interface ProductUnitPricingBaseMeasure {

		/** The unit of the denominator. */
		unit?: string | null;

		/** The denominator of the unit price. */
		value?: string | null;
	}

	export interface ProductUnitPricingMeasure {

		/** The unit of the measure. */
		unit?: string | null;

		/** The measure of an item. */
		value?: number | null;
	}


	/** The status of a product, i.e., information about a product computed asynchronously. */
	export interface ProductStatus {

		/** Date on which the item has been created, in ISO 8601 format. */
		creationDate?: string | null;

		/** DEPRECATED - never populated */
		dataQualityIssues?: Array<ProductStatusDataQualityIssue> | null;

		/** The intended destinations for the product. */
		destinationStatuses?: Array<ProductStatusDestinationStatus> | null;

		/** Date on which the item expires in Google Shopping, in ISO 8601 format. */
		googleExpirationDate?: string | null;

		/** A list of all issues associated with the product. */
		itemLevelIssues?: Array<ProductStatusItemLevelIssue> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#productStatus`" */
		kind?: string | null;

		/** Date on which the item has been last updated, in ISO 8601 format. */
		lastUpdateDate?: string | null;

		/** The link to the product. */
		link?: string | null;

		/**
		 * Required product attributes are primarily defined by the products data specification. See the  Products Data Specification Help Center article for information.
		 * Some attributes are country-specific, so make sure you select the appropriate country in the drop-down selector at the top of the page.
		 * Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.
		 */
		product?: Product | null;

		/** The ID of the product for which status is reported. */
		productId?: string | null;

		/** The title of the product. */
		title?: string | null;
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

	export interface ProductStatusDestinationStatus {

		/** Whether the approval status might change due to further processing. */
		approvalPending?: boolean | null;

		/**
		 * The destination's approval status.
		 * Acceptable values are:
		 * - "`approved`"
		 * - "`disapproved`"
		 */
		approvalStatus?: string | null;

		/** The name of the destination */
		destination?: string | null;

		/**
		 * Provided for backward compatibility only. Always set to "required".
		 * Acceptable values are:
		 * - "`default`"
		 * - "`excluded`"
		 * - "`optional`"
		 * - "`required`"
		 */
		intention?: string | null;
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

	export interface ProductsCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<ProductsCustomBatchRequestEntry> | null;
	}


	/** A batch entry encoding a single non-batch products request. */
	export interface ProductsCustomBatchRequestEntry {

		/** An entry ID, unique within the batch request. */
		batchId?: string | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/**
		 * The method of the batch entry.
		 * Acceptable values are:
		 * - "`delete`"
		 * - "`get`"
		 * - "`insert`"
		 */
		method?: string | null;

		/**
		 * Required product attributes are primarily defined by the products data specification. See the  Products Data Specification Help Center article for information.
		 * Some attributes are country-specific, so make sure you select the appropriate country in the drop-down selector at the top of the page.
		 * Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.
		 */
		product?: Product | null;

		/** The ID of the product to get or delete. Only defined if the method is `get` or `delete`. */
		productId?: string | null;
	}

	export interface ProductsCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<ProductsCustomBatchResponseEntry> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#productsCustomBatchResponse". */
		kind?: string | null;
	}


	/** A batch entry encoding a single non-batch products response. */
	export interface ProductsCustomBatchResponseEntry {

		/** The ID of the request entry this entry responds to. */
		batchId?: string | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#productsCustomBatchResponseEntry`" */
		kind?: string | null;

		/**
		 * Required product attributes are primarily defined by the products data specification. See the  Products Data Specification Help Center article for information.
		 * Some attributes are country-specific, so make sure you select the appropriate country in the drop-down selector at the top of the page.
		 * Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.
		 */
		product?: Product | null;
	}

	export interface ProductsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#productsListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of products. */
		nextPageToken?: string | null;
		resources?: Array<Product> | null;
	}

	export interface ProductstatusesCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<ProductstatusesCustomBatchRequestEntry> | null;
	}


	/** A batch entry encoding a single non-batch productstatuses request. */
	export interface ProductstatusesCustomBatchRequestEntry {

		/** An entry ID, unique within the batch request. */
		batchId?: string | null;

		/** If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination. */
		destinations?: Array<string> | null;
		includeAttributes?: boolean | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/**
		 * The method of the batch entry.
		 * Acceptable values are:
		 * - "`get`"
		 */
		method?: string | null;

		/** The ID of the product whose status to get. */
		productId?: string | null;
	}

	export interface ProductstatusesCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<ProductstatusesCustomBatchResponseEntry> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#productstatusesCustomBatchResponse". */
		kind?: string | null;
	}


	/** A batch entry encoding a single non-batch productstatuses response. */
	export interface ProductstatusesCustomBatchResponseEntry {

		/** The ID of the request entry this entry responds to. */
		batchId?: string | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesCustomBatchResponseEntry`" */
		kind?: string | null;

		/** The status of a product, i.e., information about a product computed asynchronously. */
		productStatus?: ProductStatus | null;
	}

	export interface ProductstatusesListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#productstatusesListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of products statuses. */
		nextPageToken?: string | null;
		resources?: Array<ProductStatus> | null;
	}

	export interface RateGroup {

		/** A list of shipping labels defining the products to which this rate group applies to. This is a disjunction: only one of the labels has to match for the rate group to apply. May only be empty for the last rate group of a service. Required. */
		applicableShippingLabels?: Array<string> | null;

		/** A list of carrier rates that can be referred to by `mainTable` or `singleValue`. */
		carrierRates?: Array<CarrierRate> | null;
		mainTable?: Table | null;

		/** Name of the rate group. Optional. If set has to be unique within shipping service. */
		name?: string | null;

		/** The single value of a rate group or the value of a rate group table's cell. Exactly one of `noShipping`, `flatRate`, `pricePercentage`, `carrierRateName`, `subtableName` must be set. */
		singleValue?: Value | null;

		/** A list of subtables referred to by `mainTable`. Can only be set if `mainTable` is set. */
		subtables?: Array<Table> | null;
	}

	export interface Table {

		/** A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set. */
		columnHeaders?: Headers | null;

		/** Name of the table. Required for subtables, ignored for the main table. */
		name?: string | null;

		/** A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set. */
		rowHeaders?: Headers | null;

		/** The list of rows that constitute the table. Must have the same length as `rowHeaders`. Required. */
		rows?: Array<Row> | null;
	}

	export interface Row {

		/** The list of cells that constitute the row. Must have the same length as `columnHeaders` for two-dimensional tables, a length of 1 for one-dimensional tables. Required. */
		cells?: Array<Value> | null;
	}


	/** The single value of a rate group or the value of a rate group table's cell. Exactly one of `noShipping`, `flatRate`, `pricePercentage`, `carrierRateName`, `subtableName` must be set. */
	export interface Value {

		/** The name of a carrier rate referring to a carrier rate defined in the same rate group. Can only be set if all other fields are not set. */
		carrierRateName?: string | null;
		flatRate?: Price | null;

		/** If true, then the product can't ship. Must be true when set, can only be set if all other fields are not set. */
		noShipping?: boolean | null;

		/** A percentage of the price represented as a number in decimal notation (e.g., `"5.4"`). Can only be set if all other fields are not set. */
		pricePercentage?: string | null;

		/** The name of a subtable. Can only be set in table cells (i.e., not for single values), and only if all other fields are not set. */
		subtableName?: string | null;
	}

	export interface Service {

		/** A boolean exposing the active status of the shipping service. Required. */
		active?: boolean | null;

		/** The CLDR code of the currency to which this service applies. Must match that of the prices in rate groups. */
		currency?: string | null;

		/** The CLDR territory code of the country to which the service applies. Required. */
		deliveryCountry?: string | null;
		deliveryTime?: DeliveryTime | null;

		/**
		 * Eligibility for this service.
		 * Acceptable values are:
		 * - "`All scenarios`"
		 * - "`All scenarios except Shopping Actions`"
		 * - "`Shopping Actions`"
		 */
		eligibility?: string | null;
		minimumOrderValue?: Price | null;
		minimumOrderValueTable?: MinimumOrderValueTable | null;

		/** Free-form name of the service. Must be unique within target account. Required. */
		name?: string | null;
		pickupService?: PickupCarrierService | null;

		/** Shipping rate group definitions. Only the last one is allowed to have an empty `applicableShippingLabels`, which means "everything else". The other `applicableShippingLabels` must not overlap. */
		rateGroups?: Array<RateGroup> | null;

		/**
		 * Type of locations this service ships orders to.
		 * Acceptable values are:
		 * - "`delivery`"
		 * - "`pickup`"
		 */
		shipmentType?: string | null;
	}


	/** The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role. */
	export interface ShippingSettings {

		/** The ID of the account to which these account shipping settings belong. Ignored upon update, always present in get request responses. */
		accountId?: string | null;

		/** A list of postal code groups that can be referred to in `services`. Optional. */
		postalCodeGroups?: Array<PostalCodeGroup> | null;

		/** The target account's list of services. Optional. */
		services?: Array<Service> | null;
	}

	export interface ShippingsettingsCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<ShippingsettingsCustomBatchRequestEntry> | null;
	}


	/** A batch entry encoding a single non-batch shippingsettings request. */
	export interface ShippingsettingsCustomBatchRequestEntry {

		/** The ID of the account for which to get/update account shipping settings. */
		accountId?: string | null;

		/** An entry ID, unique within the batch request. */
		batchId?: string | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/**
		 * The method of the batch entry.
		 * Acceptable values are:
		 * - "`get`"
		 * - "`update`"
		 */
		method?: string | null;

		/** The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role. */
		shippingSettings?: ShippingSettings | null;
	}

	export interface ShippingsettingsCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<ShippingsettingsCustomBatchResponseEntry> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsCustomBatchResponse". */
		kind?: string | null;
	}


	/** A batch entry encoding a single non-batch shipping settings response. */
	export interface ShippingsettingsCustomBatchResponseEntry {

		/** The ID of the request entry to which this entry responds. */
		batchId?: string | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsCustomBatchResponseEntry`" */
		kind?: string | null;

		/** The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role. */
		shippingSettings?: ShippingSettings | null;
	}

	export interface ShippingsettingsGetSupportedCarriersResponse {

		/** A list of supported carriers. May be empty. */
		carriers?: Array<CarriersCarrier> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsGetSupportedCarriersResponse". */
		kind?: string | null;
	}

	export interface ShippingsettingsGetSupportedHolidaysResponse {

		/** A list of holidays applicable for delivery guarantees. May be empty. */
		holidays?: Array<HolidaysHoliday> | null;

		/** Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsGetSupportedHolidaysResponse". */
		kind?: string | null;
	}

	export interface ShippingsettingsGetSupportedPickupServicesResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsGetSupportedPickupServicesResponse". */
		kind?: string | null;

		/** A list of supported pickup services. May be empty. */
		pickupServices?: Array<PickupServicesPickupService> | null;
	}

	export interface ShippingsettingsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsListResponse". */
		kind?: string | null;

		/** The token for the retrieval of the next page of shipping settings. */
		nextPageToken?: string | null;
		resources?: Array<ShippingSettings> | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns information about the authenticated user.
		 * Get accounts/authinfo
		 * @return {void} Successful response
		 */
		Content_accounts_authinfo(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'accounts/authinfo', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
		 * Post accounts/batch
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_accounts_custombatch(dryRun: boolean | null | undefined, requestBody: AccountsCustomBatchRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounts/batch?dryRun=' + dryRun, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves multiple Merchant Center account statuses in a single request.
		 * Post accountstatuses/batch
		 * @return {void} Successful response
		 */
		Content_accountstatuses_custombatch(requestBody: AccountstatusesCustomBatchRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accountstatuses/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves and updates tax settings of multiple accounts in a single request.
		 * Post accounttax/batch
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_accounttax_custombatch(dryRun: boolean | null | undefined, requestBody: AccounttaxCustomBatchRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'accounttax/batch?dryRun=' + dryRun, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
		 * Post datafeeds/batch
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_datafeeds_custombatch(dryRun: boolean | null | undefined, requestBody: DatafeedsCustomBatchRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'datafeeds/batch?dryRun=' + dryRun, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets multiple Merchant Center datafeed statuses in a single request.
		 * Post datafeedstatuses/batch
		 * @return {void} Successful response
		 */
		Content_datafeedstatuses_custombatch(requestBody: DatafeedstatusesCustomBatchRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'datafeedstatuses/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates price and availability for multiple products or stores in a single request. This operation does not update the expiration date of the products.
		 * Post inventory/batch
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_inventory_custombatch(dryRun: boolean | null | undefined, requestBody: InventoryCustomBatchRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'inventory/batch?dryRun=' + dryRun, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves and/or updates the LIA settings of multiple accounts in a single request.
		 * Post liasettings/batch
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_liasettings_custombatch(dryRun: boolean | null | undefined, requestBody: LiasettingsCustomBatchRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'liasettings/batch?dryRun=' + dryRun, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the list of POS data providers that have active settings for the all eiligible countries.
		 * Get liasettings/posdataproviders
		 * @return {void} Successful response
		 */
		Content_liasettings_listposdataproviders(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'liasettings/posdataproviders', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves or modifies multiple orders in a single request.
		 * Post orders/batch
		 * @return {void} Successful response
		 */
		Content_orders_custombatch(requestBody: OrdersCustomBatchRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'orders/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Batches multiple POS-related calls in a single request.
		 * Post pos/batch
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_pos_custombatch(dryRun: boolean | null | undefined, requestBody: PosCustomBatchRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pos/batch?dryRun=' + dryRun, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves, inserts, and deletes multiple products in a single request.
		 * Post products/batch
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_products_custombatch(dryRun: boolean | null | undefined, requestBody: ProductsCustomBatchRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'products/batch?dryRun=' + dryRun, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the statuses of multiple products in a single request.
		 * Post productstatuses/batch
		 * @param {boolean} includeAttributes Flag to include full product data in the results of this request. The default value is false.
		 * @return {void} Successful response
		 */
		Content_productstatuses_custombatch(includeAttributes: boolean | null | undefined, requestBody: ProductstatusesCustomBatchRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'productstatuses/batch?includeAttributes=' + includeAttributes, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves and updates the shipping settings of multiple accounts in a single request.
		 * Post shippingsettings/batch
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_shippingsettings_custombatch(dryRun: boolean | null | undefined, requestBody: ShippingsettingsCustomBatchRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'shippingsettings/batch?dryRun=' + dryRun, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the sub-accounts in your Merchant Center account.
		 * Get {merchantId}/accounts
		 * @param {string} merchantId The ID of the managing account. This must be a multi-client account.
		 * @param {number} maxResults The maximum number of accounts to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Content_accounts_list(merchantId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a Merchant Center sub-account.
		 * Post {merchantId}/accounts
		 * @param {string} merchantId The ID of the managing account. This must be a multi-client account.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_accounts_insert(merchantId: string, dryRun: boolean | null | undefined, requestBody: Account): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account.
		 * @return {void} Successful response
		 */
		Content_accounts_get(merchantId: string, accountId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Merchant Center account.
		 * Put {merchantId}/accounts/{accountId}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_accounts_update(merchantId: string, accountId: string, dryRun: boolean | null | undefined, requestBody: Account): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Claims the website of a Merchant Center sub-account.
		 * Post {merchantId}/accounts/{accountId}/claimwebsite
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account whose website is claimed.
		 * @param {boolean} overwrite Only available to selected merchants. When set to True, this flag removes any existing claim on the requested website by another account and replaces it with a claim from this account.
		 * @return {void} Successful response
		 */
		Content_accounts_claimwebsite(merchantId: string, accountId: string, overwrite: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/claimwebsite&overwrite=' + overwrite + '', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
		 * Post {merchantId}/accounts/{accountId}/link
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account that should be linked.
		 * @return {void} Successful response
		 */
		Content_accounts_link(merchantId: string, accountId: string, requestBody: AccountsLinkRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/link', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the statuses of the sub-accounts in your Merchant Center account.
		 * Get {merchantId}/accountstatuses
		 * @param {string} merchantId The ID of the managing account. This must be a multi-client account.
		 * @param {Array<string>} destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
		 * @param {number} maxResults The maximum number of account statuses to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Content_accountstatuses_list(merchantId: string, destinations: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accountstatuses&' + destinations.map(z => `destinations=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
		 * Get {merchantId}/accountstatuses/{accountId}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account.
		 * @param {Array<string>} destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
		 * @return {void} Successful response
		 */
		Content_accountstatuses_get(merchantId: string, accountId: string, destinations: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accountstatuses/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&' + destinations.map(z => `destinations=${encodeURIComponent(z)}`).join('&') + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the tax settings of the sub-accounts in your Merchant Center account.
		 * Get {merchantId}/accounttax
		 * @param {string} merchantId The ID of the managing account. This must be a multi-client account.
		 * @param {number} maxResults The maximum number of tax settings to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Content_accounttax_list(merchantId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounttax&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the tax settings of the account.
		 * Get {merchantId}/accounttax/{accountId}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to get/update account tax settings.
		 * @return {void} Successful response
		 */
		Content_accounttax_get(merchantId: string, accountId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounttax/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the tax settings of the account.
		 * Put {merchantId}/accounttax/{accountId}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to get/update account tax settings.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_accounttax_update(merchantId: string, accountId: string, dryRun: boolean | null | undefined, requestBody: AccountTax): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounttax/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the configurations for datafeeds in your Merchant Center account.
		 * Get {merchantId}/datafeeds
		 * @param {string} merchantId The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
		 * @param {number} maxResults The maximum number of products to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Content_datafeeds_list(merchantId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeeds&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Registers a datafeed configuration with your Merchant Center account.
		 * Post {merchantId}/datafeeds
		 * @param {string} merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_datafeeds_insert(merchantId: string, dryRun: boolean | null | undefined, requestBody: Datafeed): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeeds&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * @return {void} Successful response
		 */
		Content_datafeeds_get(merchantId: string, datafeedId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeeds/' + (datafeedId == null ? '' : encodeURIComponent(datafeedId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a datafeed configuration of your Merchant Center account.
		 * Put {merchantId}/datafeeds/{datafeedId}
		 * @param {string} merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
		 * @param {string} datafeedId The ID of the datafeed.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_datafeeds_update(merchantId: string, datafeedId: string, dryRun: boolean | null | undefined, requestBody: Datafeed): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeeds/' + (datafeedId == null ? '' : encodeURIComponent(datafeedId)) + '&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Invokes a fetch for the datafeed in your Merchant Center account.
		 * Post {merchantId}/datafeeds/{datafeedId}/fetchNow
		 * @param {string} merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
		 * @param {string} datafeedId The ID of the datafeed to be fetched.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_datafeeds_fetchnow(merchantId: string, datafeedId: string, dryRun: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeeds/' + (datafeedId == null ? '' : encodeURIComponent(datafeedId)) + '/fetchNow&dryRun=' + dryRun + '', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the statuses of the datafeeds in your Merchant Center account.
		 * Get {merchantId}/datafeedstatuses
		 * @param {string} merchantId The ID of the account that manages the datafeeds. This account cannot be a multi-client account.
		 * @param {number} maxResults The maximum number of products to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Content_datafeedstatuses_list(merchantId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeedstatuses&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the status of a datafeed from your Merchant Center account.
		 * Get {merchantId}/datafeedstatuses/{datafeedId}
		 * @param {string} merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
		 * @param {string} datafeedId The ID of the datafeed.
		 * @param {string} country The country for which to get the datafeed status. If this parameter is provided then language must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
		 * @param {string} language The language for which to get the datafeed status. If this parameter is provided then country must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
		 * @return {void} Successful response
		 */
		Content_datafeedstatuses_get(merchantId: string, datafeedId: string, country: string | null | undefined, language: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeedstatuses/' + (datafeedId == null ? '' : encodeURIComponent(datafeedId)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates price and availability of a product in your Merchant Center account.
		 * Post {merchantId}/inventory/{storeCode}/products/{productId}
		 * @param {string} merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
		 * @param {string} storeCode The code of the store for which to update price and availability. Use online to update price and availability of an online product.
		 * @param {string} productId The REST ID of the product for which to update price and availability.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_inventory_set(merchantId: string, storeCode: string, productId: string, dryRun: boolean | null | undefined, requestBody: InventorySetRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/inventory/' + (storeCode == null ? '' : encodeURIComponent(storeCode)) + '/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the LIA settings of the sub-accounts in your Merchant Center account.
		 * Get {merchantId}/liasettings
		 * @param {string} merchantId The ID of the managing account. This must be a multi-client account.
		 * @param {number} maxResults The maximum number of LIA settings to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Content_liasettings_list(merchantId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the LIA settings of the account.
		 * Get {merchantId}/liasettings/{accountId}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to get or update LIA settings.
		 * @return {void} Successful response
		 */
		Content_liasettings_get(merchantId: string, accountId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the LIA settings of the account.
		 * Put {merchantId}/liasettings/{accountId}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to get or update LIA settings.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_liasettings_update(merchantId: string, accountId: string, dryRun: boolean | null | undefined, requestBody: LiaSettings): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the list of accessible Google My Business accounts.
		 * Get {merchantId}/liasettings/{accountId}/accessiblegmbaccounts
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to retrieve accessible Google My Business accounts.
		 * @return {void} Successful response
		 */
		Content_liasettings_getaccessiblegmbaccounts(merchantId: string, accountId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/accessiblegmbaccounts', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Requests access to a specified Google My Business account.
		 * Post {merchantId}/liasettings/{accountId}/requestgmbaccess
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which GMB access is requested.
		 * @param {string} gmbEmail The email of the Google My Business account.
		 * @return {void} Successful response
		 */
		Content_liasettings_requestgmbaccess(merchantId: string, accountId: string, gmbEmail: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/requestgmbaccess&gmbEmail=' + (gmbEmail == null ? '' : encodeURIComponent(gmbEmail)) + '', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Requests inventory validation for the specified country.
		 * Post {merchantId}/liasettings/{accountId}/requestinventoryverification/{country}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} country The country for which inventory validation is requested.
		 * @return {void} Successful response
		 */
		Content_liasettings_requestinventoryverification(merchantId: string, accountId: string, country: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/requestinventoryverification/' + (country == null ? '' : encodeURIComponent(country)) + '', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the inventory verification contract for the specified country.
		 * Post {merchantId}/liasettings/{accountId}/setinventoryverificationcontact
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} contactEmail The email of the inventory verification contact.
		 * @param {string} contactName The name of the inventory verification contact.
		 * @param {string} country The country for which inventory verification is requested.
		 * @param {string} language The language for which inventory verification is requested.
		 * @return {void} Successful response
		 */
		Content_liasettings_setinventoryverificationcontact(merchantId: string, accountId: string, contactEmail: string, contactName: string, country: string, language: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/setinventoryverificationcontact&contactEmail=' + (contactEmail == null ? '' : encodeURIComponent(contactEmail)) + '&contactName=' + (contactName == null ? '' : encodeURIComponent(contactName)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the POS data provider for the specified country.
		 * Post {merchantId}/liasettings/{accountId}/setposdataprovider
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to retrieve accessible Google My Business accounts.
		 * @param {string} country The country for which the POS data provider is selected.
		 * @param {string} posDataProviderId The ID of POS data provider.
		 * @param {string} posExternalAccountId The account ID by which this merchant is known to the POS data provider.
		 * @return {void} Successful response
		 */
		Content_liasettings_setposdataprovider(merchantId: string, accountId: string, country: string, posDataProviderId: string | null | undefined, posExternalAccountId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/setposdataprovider&country=' + (country == null ? '' : encodeURIComponent(country)) + '&posDataProviderId=' + (posDataProviderId == null ? '' : encodeURIComponent(posDataProviderId)) + '&posExternalAccountId=' + (posExternalAccountId == null ? '' : encodeURIComponent(posExternalAccountId)) + '', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.
		 * Post {merchantId}/orderinvoices/{orderId}/createChargeInvoice
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {void} Successful response
		 */
		Content_orderinvoices_createchargeinvoice(merchantId: string, orderId: string, requestBody: OrderinvoicesCreateChargeInvoiceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orderinvoices/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/createChargeInvoice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using createChargeInvoice. All amounts (except for the summary) are incremental with respect to the previous invoice.
		 * Post {merchantId}/orderinvoices/{orderId}/createRefundInvoice
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {void} Successful response
		 */
		Content_orderinvoices_createrefundinvoice(merchantId: string, orderId: string, requestBody: OrderinvoicesCreateRefundInvoiceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orderinvoices/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/createRefundInvoice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a report for disbursements from your Merchant Center account.
		 * Get {merchantId}/orderreports/disbursements
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} disbursementStartDate The first date which disbursements occurred. In ISO 8601 format.
		 * @param {string} disbursementEndDate The last date which disbursements occurred. In ISO 8601 format. Default: current date.
		 * @param {number} maxResults The maximum number of disbursements to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Content_orderreports_listdisbursements(merchantId: string, disbursementStartDate: string, disbursementEndDate: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orderreports/disbursements&disbursementStartDate=' + (disbursementStartDate == null ? '' : encodeURIComponent(disbursementStartDate)) + '&disbursementEndDate=' + (disbursementEndDate == null ? '' : encodeURIComponent(disbursementEndDate)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of transactions for a disbursement from your Merchant Center account.
		 * Get {merchantId}/orderreports/disbursements/{disbursementId}/transactions
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} disbursementId The Google-provided ID of the disbursement (found in Wallet).
		 * @param {string} transactionStartDate The first date in which transaction occurred. In ISO 8601 format.
		 * @param {number} maxResults The maximum number of disbursements to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @param {string} transactionEndDate The last date in which transaction occurred. In ISO 8601 format. Default: current date.
		 * @return {void} Successful response
		 */
		Content_orderreports_listtransactions(merchantId: string, disbursementId: string, transactionStartDate: string, maxResults: number | null | undefined, pageToken: string | null | undefined, transactionEndDate: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orderreports/disbursements/' + (disbursementId == null ? '' : encodeURIComponent(disbursementId)) + '/transactions&transactionStartDate=' + (transactionStartDate == null ? '' : encodeURIComponent(transactionStartDate)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&transactionEndDate=' + (transactionEndDate == null ? '' : encodeURIComponent(transactionEndDate)) + '', { observe: 'response', responseType: 'text' });
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
		 * @return {void} Successful response
		 */
		Content_orderreturns_list(merchantId: string, createdEndDate: string | null | undefined, createdStartDate: string | null | undefined, maxResults: number | null | undefined, orderBy: Content_orderreturns_listOrderBy | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orderreturns&createdEndDate=' + (createdEndDate == null ? '' : encodeURIComponent(createdEndDate)) + '&createdStartDate=' + (createdStartDate == null ? '' : encodeURIComponent(createdStartDate)) + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves an order return from your Merchant Center account.
		 * Get {merchantId}/orderreturns/{returnId}
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} returnId Merchant order return ID generated by Google.
		 * @return {void} Successful response
		 */
		Content_orderreturns_get(merchantId: string, returnId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orderreturns/' + (returnId == null ? '' : encodeURIComponent(returnId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the orders in your Merchant Center account.
		 * Get {merchantId}/orders
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {boolean} acknowledged Obtains orders that match the acknowledgement status. When set to true, obtains orders that have been acknowledged. When false, obtains orders that have not been acknowledged.
		 * We recommend using this filter set to false, in conjunction with the acknowledge call, such that only un-acknowledged orders are returned.
		 * @param {number} maxResults The maximum number of orders to return in the response, used for paging. The default value is 25 orders per page, and the maximum allowed value is 250 orders per page.
		 * @param {string} orderBy Order results by placement date in descending or ascending order.
		 * Acceptable values are:
		 * - placedDateAsc
		 * - placedDateDesc
		 * @param {string} pageToken The token returned by the previous request.
		 * @param {string} placedDateEnd Obtains orders placed before this date (exclusively), in ISO 8601 format.
		 * @param {string} placedDateStart Obtains orders placed after this date (inclusively), in ISO 8601 format.
		 * @param {Array<string>} statuses Obtains orders that match any of the specified statuses. Please note that active is a shortcut for pendingShipment and partiallyShipped, and completed is a shortcut for shipped, partiallyDelivered, delivered, partiallyReturned, returned, and canceled.
		 * @return {void} Successful response
		 */
		Content_orders_list(merchantId: string, acknowledged: boolean | null | undefined, maxResults: number | null | undefined, orderBy: string | null | undefined, pageToken: string | null | undefined, placedDateEnd: string | null | undefined, placedDateStart: string | null | undefined, statuses: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders&acknowledged=' + acknowledged + '&maxResults=' + maxResults + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&placedDateEnd=' + (placedDateEnd == null ? '' : encodeURIComponent(placedDateEnd)) + '&placedDateStart=' + (placedDateStart == null ? '' : encodeURIComponent(placedDateStart)) + '&' + statuses.map(z => `statuses=${encodeURIComponent(z)}`).join('&') + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves an order from your Merchant Center account.
		 * Get {merchantId}/orders/{orderId}
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {void} Successful response
		 */
		Content_orders_get(merchantId: string, orderId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Marks an order as acknowledged.
		 * Post {merchantId}/orders/{orderId}/acknowledge
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {void} Successful response
		 */
		Content_orders_acknowledge(merchantId: string, orderId: string, requestBody: OrdersAcknowledgeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/acknowledge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels all line items in an order, making a full refund.
		 * Post {merchantId}/orders/{orderId}/cancel
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order to cancel.
		 * @return {void} Successful response
		 */
		Content_orders_cancel(merchantId: string, orderId: string, requestBody: OrdersCancelRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a line item, making a full refund.
		 * Post {merchantId}/orders/{orderId}/cancelLineItem
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {void} Successful response
		 */
		Content_orders_cancellineitem(merchantId: string, orderId: string, requestBody: OrdersCancelLineItemRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/cancelLineItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store).
		 * Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.
		 * Post {merchantId}/orders/{orderId}/inStoreRefundLineItem
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {void} Successful response
		 */
		Content_orders_instorerefundlineitem(merchantId: string, orderId: string, requestBody: OrdersInStoreRefundLineItemRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/inStoreRefundLineItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deprecated, please use returnRefundLineItem instead.
		 * Post {merchantId}/orders/{orderId}/refund
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order to refund.
		 * @return {void} Successful response
		 */
		Content_orders_refund(merchantId: string, orderId: string, requestBody: OrdersRefundRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/refund', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Rejects return on an line item.
		 * Post {merchantId}/orders/{orderId}/rejectReturnLineItem
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {void} Successful response
		 */
		Content_orders_rejectreturnlineitem(merchantId: string, orderId: string, requestBody: OrdersRejectReturnLineItemRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/rejectReturnLineItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a line item.
		 * Post {merchantId}/orders/{orderId}/returnLineItem
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {void} Successful response
		 */
		Content_orders_returnlineitem(merchantId: string, orderId: string, requestBody: OrdersReturnLineItemRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/returnLineItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns and refunds a line item. Note that this method can only be called on fully shipped orders.
		 * Post {merchantId}/orders/{orderId}/returnRefundLineItem
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {void} Successful response
		 */
		Content_orders_returnrefundlineitem(merchantId: string, orderId: string, requestBody: OrdersReturnRefundLineItemRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/returnRefundLineItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
		 * Post {merchantId}/orders/{orderId}/setLineItemMetadata
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {void} Successful response
		 */
		Content_orders_setlineitemmetadata(merchantId: string, orderId: string, requestBody: OrdersSetLineItemMetadataRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/setLineItemMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Marks line item(s) as shipped.
		 * Post {merchantId}/orders/{orderId}/shipLineItems
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {void} Successful response
		 */
		Content_orders_shiplineitems(merchantId: string, orderId: string, requestBody: OrdersShipLineItemsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/shipLineItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sandbox only. Creates a test return.
		 * Post {merchantId}/orders/{orderId}/testreturn
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {void} Successful response
		 */
		Content_orders_createtestreturn(merchantId: string, orderId: string, requestBody: OrdersCreateTestReturnRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/testreturn', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates ship by and delivery by dates for a line item.
		 * Post {merchantId}/orders/{orderId}/updateLineItemShippingDetails
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {void} Successful response
		 */
		Content_orders_updatelineitemshippingdetails(merchantId: string, orderId: string, requestBody: OrdersUpdateLineItemShippingDetailsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/updateLineItemShippingDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the merchant order ID for a given order.
		 * Post {merchantId}/orders/{orderId}/updateMerchantOrderId
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {void} Successful response
		 */
		Content_orders_updatemerchantorderid(merchantId: string, orderId: string, requestBody: OrdersUpdateMerchantOrderIdRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/updateMerchantOrderId', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a shipment's status, carrier, and/or tracking ID.
		 * Post {merchantId}/orders/{orderId}/updateShipment
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {void} Successful response
		 */
		Content_orders_updateshipment(merchantId: string, orderId: string, requestBody: OrdersUpdateShipmentRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/updateShipment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves an order using merchant order ID.
		 * Get {merchantId}/ordersbymerchantid/{merchantOrderId}
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} merchantOrderId The merchant order ID to be looked for.
		 * @return {void} Successful response
		 */
		Content_orders_getbymerchantorderid(merchantId: string, merchantOrderId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/ordersbymerchantid/' + (merchantOrderId == null ? '' : encodeURIComponent(merchantOrderId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Submit inventory for the given merchant.
		 * Post {merchantId}/pos/{targetMerchantId}/inventory
		 * @param {string} merchantId The ID of the POS or inventory data provider.
		 * @param {string} targetMerchantId The ID of the target merchant.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_pos_inventory(merchantId: string, targetMerchantId: string, dryRun: boolean | null | undefined, requestBody: PosInventoryRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/pos/' + (targetMerchantId == null ? '' : encodeURIComponent(targetMerchantId)) + '/inventory&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Submit a sale event for the given merchant.
		 * Post {merchantId}/pos/{targetMerchantId}/sale
		 * @param {string} merchantId The ID of the POS or inventory data provider.
		 * @param {string} targetMerchantId The ID of the target merchant.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_pos_sale(merchantId: string, targetMerchantId: string, dryRun: boolean | null | undefined, requestBody: PosSaleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/pos/' + (targetMerchantId == null ? '' : encodeURIComponent(targetMerchantId)) + '/sale&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the stores of the target merchant.
		 * Get {merchantId}/pos/{targetMerchantId}/store
		 * @param {string} merchantId The ID of the POS or inventory data provider.
		 * @param {string} targetMerchantId The ID of the target merchant.
		 * @return {void} Successful response
		 */
		Content_pos_list(merchantId: string, targetMerchantId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/pos/' + (targetMerchantId == null ? '' : encodeURIComponent(targetMerchantId)) + '/store', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a store for the given merchant.
		 * Post {merchantId}/pos/{targetMerchantId}/store
		 * @param {string} merchantId The ID of the POS or inventory data provider.
		 * @param {string} targetMerchantId The ID of the target merchant.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_pos_insert(merchantId: string, targetMerchantId: string, dryRun: boolean | null | undefined, requestBody: PosStore): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/pos/' + (targetMerchantId == null ? '' : encodeURIComponent(targetMerchantId)) + '/store&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * @return {void} Successful response
		 */
		Content_pos_get(merchantId: string, targetMerchantId: string, storeCode: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/pos/' + (targetMerchantId == null ? '' : encodeURIComponent(targetMerchantId)) + '/store/' + (storeCode == null ? '' : encodeURIComponent(storeCode)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.
		 * Get {merchantId}/products
		 * @param {string} merchantId The ID of the account that contains the products. This account cannot be a multi-client account.
		 * @param {boolean} includeInvalidInsertedItems Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
		 * @param {number} maxResults The maximum number of products to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Content_products_list(merchantId: string, includeInvalidInsertedItems: boolean | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/products&includeInvalidInsertedItems=' + includeInvalidInsertedItems + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
		 * Post {merchantId}/products
		 * @param {string} merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_products_insert(merchantId: string, dryRun: boolean | null | undefined, requestBody: Product): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/products&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * @return {void} Successful response
		 */
		Content_products_get(merchantId: string, productId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '', { observe: 'response', responseType: 'text' });
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
		 * @return {void} Successful response
		 */
		Content_productstatuses_list(merchantId: string, destinations: Array<string> | null | undefined, includeAttributes: boolean | null | undefined, includeInvalidInsertedItems: boolean | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/productstatuses&' + destinations.map(z => `destinations=${encodeURIComponent(z)}`).join('&') + '&includeAttributes=' + includeAttributes + '&includeInvalidInsertedItems=' + includeInvalidInsertedItems + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the status of a product from your Merchant Center account.
		 * Get {merchantId}/productstatuses/{productId}
		 * @param {string} merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
		 * @param {string} productId The REST ID of the product.
		 * @param {Array<string>} destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
		 * @param {boolean} includeAttributes Flag to include full product data in the result of this get request. The default value is false.
		 * @return {void} Successful response
		 */
		Content_productstatuses_get(merchantId: string, productId: string, destinations: Array<string> | null | undefined, includeAttributes: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/productstatuses/' + (productId == null ? '' : encodeURIComponent(productId)) + '&' + destinations.map(z => `destinations=${encodeURIComponent(z)}`).join('&') + '&includeAttributes=' + includeAttributes + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the shipping settings of the sub-accounts in your Merchant Center account.
		 * Get {merchantId}/shippingsettings
		 * @param {string} merchantId The ID of the managing account. This must be a multi-client account.
		 * @param {number} maxResults The maximum number of shipping settings to return in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {void} Successful response
		 */
		Content_shippingsettings_list(merchantId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/shippingsettings&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the shipping settings of the account.
		 * Get {merchantId}/shippingsettings/{accountId}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to get/update shipping settings.
		 * @return {void} Successful response
		 */
		Content_shippingsettings_get(merchantId: string, accountId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/shippingsettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the shipping settings of the account.
		 * Put {merchantId}/shippingsettings/{accountId}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to get/update shipping settings.
		 * @param {boolean} dryRun Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).
		 * @return {void} Successful response
		 */
		Content_shippingsettings_update(merchantId: string, accountId: string, dryRun: boolean | null | undefined, requestBody: ShippingSettings): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/shippingsettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&dryRun=' + dryRun + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves supported carriers and carrier services for an account.
		 * Get {merchantId}/supportedCarriers
		 * @param {string} merchantId The ID of the account for which to retrieve the supported carriers.
		 * @return {void} Successful response
		 */
		Content_shippingsettings_getsupportedcarriers(merchantId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/supportedCarriers', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves supported holidays for an account.
		 * Get {merchantId}/supportedHolidays
		 * @param {string} merchantId The ID of the account for which to retrieve the supported holidays.
		 * @return {void} Successful response
		 */
		Content_shippingsettings_getsupportedholidays(merchantId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/supportedHolidays', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves supported pickup services for an account.
		 * Get {merchantId}/supportedPickupServices
		 * @param {string} merchantId The ID of the account for which to retrieve the supported pickup services.
		 * @return {void} Successful response
		 */
		Content_shippingsettings_getsupportedpickupservices(merchantId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/supportedPickupServices', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sandbox only. Creates a test order.
		 * Post {merchantId}/testorders
		 * @param {string} merchantId The ID of the account that should manage the order. This cannot be a multi-client account.
		 * @return {void} Successful response
		 */
		Content_orders_createtestorder(merchantId: string, requestBody: OrdersCreateTestOrderRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/testorders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sandbox only. Moves a test order from state "inProgress" to state "pendingShipment".
		 * Post {merchantId}/testorders/{orderId}/advance
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the test order to modify.
		 * @return {void} Successful response
		 */
		Content_orders_advancetestorder(merchantId: string, orderId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/testorders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/advance', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sandbox only. Cancels a test order for customer-initiated cancellation.
		 * Post {merchantId}/testorders/{orderId}/cancelByCustomer
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the test order to cancel.
		 * @return {void} Successful response
		 */
		Content_orders_canceltestorderbycustomer(merchantId: string, orderId: string, requestBody: OrdersCancelTestOrderByCustomerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/testorders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/cancelByCustomer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.
		 * Get {merchantId}/testordertemplates/{templateName}
		 * @param {string} merchantId The ID of the account that should manage the order. This cannot be a multi-client account.
		 * @param {Content_orders_gettestordertemplateTemplateName} templateName The name of the template to retrieve.
		 * @param {string} country The country of the template to retrieve. Defaults to US.
		 * @return {void} Successful response
		 */
		Content_orders_gettestordertemplate(merchantId: string, templateName: Content_orders_gettestordertemplateTemplateName, country: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/testordertemplates/' + templateName + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '', { observe: 'response', responseType: 'text' });
		}
	}

	export enum Content_orderreturns_listOrderBy { returnCreationTimeAsc = 0, returnCreationTimeDesc = 1 }

	export enum Content_orders_gettestordertemplateTemplateName { template1 = 0, template1a = 1, template1b = 2, template2 = 3, template3 = 4 }

}

