import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role. */
	export interface Account {

		/** Output only. How the account is managed. Acceptable values are: - "`manual`" - "`automatic`" */
		accountManagement?: string | null;

		/** Linked Ads accounts that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected either in the Ads interface or through the Google Ads API. To delete an active link, or to cancel a link request, remove it from the list. */
		adsLinks?: Array<AccountAdsLink>;

		/** Indicates whether the merchant sells adult content. */
		adultContent?: boolean | null;

		/** The automatic improvements of the account can be used to automatically update items, improve images and shipping. */
		automaticImprovements?: AccountAutomaticImprovements;

		/** Automatically created label IDs that are assigned to the account by CSS Center. */
		automaticLabelIds?: Array<string>;

		/** The [business identity attributes](https://support.google.com/merchants/answer/10342414) can be used to self-declare attributes that let customers know more about your business. */
		businessIdentity?: AccountBusinessIdentity;
		businessInformation?: AccountBusinessInformation;

		/** Settings for conversion tracking. */
		conversionSettings?: AccountConversionSettings;

		/** ID of CSS the account belongs to. */
		cssId?: string | null;
		googleMyBusinessLink?: AccountGoogleMyBusinessLink;

		/** Required. 64-bit Merchant Center account ID. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#account`". */
		kind?: string | null;

		/** Manually created label IDs that are assigned to the account by CSS. */
		labelIds?: Array<string>;

		/** Required. Display name for the account. */
		name?: string | null;

		/** Client-specific, locally-unique, internal ID for the child account. */
		sellerId?: string | null;

		/** Users with access to the account. Every account (except for subaccounts) must have at least one admin user. */
		users?: Array<AccountUser>;

		/** The merchant's website. */
		websiteUrl?: string | null;

		/** Linked YouTube channels that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected in the YT Creator Studio interface. To delete an active link, or to cancel a link request, remove it from the list. */
		youtubeChannelLinks?: Array<AccountYouTubeChannelLink>;
	}

	/** Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role. */
	export interface AccountFormProperties {

		/** Output only. How the account is managed. Acceptable values are: - "`manual`" - "`automatic`" */
		accountManagement: FormControl<string | null | undefined>,

		/** Indicates whether the merchant sells adult content. */
		adultContent: FormControl<boolean | null | undefined>,

		/** ID of CSS the account belongs to. */
		cssId: FormControl<string | null | undefined>,

		/** Required. 64-bit Merchant Center account ID. */
		id: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#account`". */
		kind: FormControl<string | null | undefined>,

		/** Required. Display name for the account. */
		name: FormControl<string | null | undefined>,

		/** Client-specific, locally-unique, internal ID for the child account. */
		sellerId: FormControl<string | null | undefined>,

		/** The merchant's website. */
		websiteUrl: FormControl<string | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			accountManagement: new FormControl<string | null | undefined>(undefined),
			adultContent: new FormControl<boolean | null | undefined>(undefined),
			cssId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sellerId: new FormControl<string | null | undefined>(undefined),
			websiteUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountAdsLink {

		/** Customer ID of the Ads account. */
		adsId?: string | null;

		/** Status of the link between this Merchant Center account and the Ads account. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in Google Ads or `pending` if it's pending approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status `active` when it's still pending or with status `pending` when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending. Acceptable values are: - "`active`" - "`pending`" */
		status?: string | null;
	}
	export interface AccountAdsLinkFormProperties {

		/** Customer ID of the Ads account. */
		adsId: FormControl<string | null | undefined>,

		/** Status of the link between this Merchant Center account and the Ads account. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in Google Ads or `pending` if it's pending approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status `active` when it's still pending or with status `pending` when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending. Acceptable values are: - "`active`" - "`pending`" */
		status: FormControl<string | null | undefined>,
	}
	export function CreateAccountAdsLinkFormGroup() {
		return new FormGroup<AccountAdsLinkFormProperties>({
			adsId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The automatic improvements of the account can be used to automatically update items, improve images and shipping. */
	export interface AccountAutomaticImprovements {

		/** This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973) */
		imageImprovements?: AccountImageImprovements;

		/** Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown. */
		itemUpdates?: AccountItemUpdates;

		/** Not available for MCAs [accounts](https://support.google.com/merchants/answer/188487). By turning on [automatic shipping improvements](https://support.google.com/merchants/answer/10027038), you are allowing Google to improve the accuracy of your delivery times shown to shoppers using Google. More accurate delivery times, especially when faster, typically lead to better conversion rates. Google will improve your estimated delivery times based on various factors: * Delivery address of an order * Current handling time and shipping time settings * Estimated weekdays or business days * Parcel tracking data */
		shippingImprovements?: AccountShippingImprovements;
	}

	/** The automatic improvements of the account can be used to automatically update items, improve images and shipping. */
	export interface AccountAutomaticImprovementsFormProperties {
	}
	export function CreateAccountAutomaticImprovementsFormGroup() {
		return new FormGroup<AccountAutomaticImprovementsFormProperties>({
		});

	}


	/** This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973) */
	export interface AccountImageImprovements {

		/** Settings for the Automatic Image Improvements. */
		accountImageImprovementsSettings?: AccountImageImprovementsSettings;

		/** Output only. The effective value of allow_automatic_image_improvements. If account_image_improvements_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. */
		effectiveAllowAutomaticImageImprovements?: boolean | null;
	}

	/** This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973) */
	export interface AccountImageImprovementsFormProperties {

		/** Output only. The effective value of allow_automatic_image_improvements. If account_image_improvements_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. */
		effectiveAllowAutomaticImageImprovements: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountImageImprovementsFormGroup() {
		return new FormGroup<AccountImageImprovementsFormProperties>({
			effectiveAllowAutomaticImageImprovements: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Settings for the Automatic Image Improvements. */
	export interface AccountImageImprovementsSettings {

		/** Enables automatic image improvements. */
		allowAutomaticImageImprovements?: boolean | null;
	}

	/** Settings for the Automatic Image Improvements. */
	export interface AccountImageImprovementsSettingsFormProperties {

		/** Enables automatic image improvements. */
		allowAutomaticImageImprovements: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountImageImprovementsSettingsFormGroup() {
		return new FormGroup<AccountImageImprovementsSettingsFormProperties>({
			allowAutomaticImageImprovements: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown. */
	export interface AccountItemUpdates {

		/** Settings for the Automatic Item Updates. */
		accountItemUpdatesSettings?: AccountItemUpdatesSettings;

		/** Output only. The effective value of allow_availability_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. */
		effectiveAllowAvailabilityUpdates?: boolean | null;

		/** Output only. The effective value of allow_condition_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. */
		effectiveAllowConditionUpdates?: boolean | null;

		/** Output only. The effective value of allow_price_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. */
		effectiveAllowPriceUpdates?: boolean | null;

		/** Output only. The effective value of allow_strict_availability_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. */
		effectiveAllowStrictAvailabilityUpdates?: boolean | null;
	}

	/** Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown. */
	export interface AccountItemUpdatesFormProperties {

		/** Output only. The effective value of allow_availability_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. */
		effectiveAllowAvailabilityUpdates: FormControl<boolean | null | undefined>,

		/** Output only. The effective value of allow_condition_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. */
		effectiveAllowConditionUpdates: FormControl<boolean | null | undefined>,

		/** Output only. The effective value of allow_price_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. */
		effectiveAllowPriceUpdates: FormControl<boolean | null | undefined>,

		/** Output only. The effective value of allow_strict_availability_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. */
		effectiveAllowStrictAvailabilityUpdates: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountItemUpdatesFormGroup() {
		return new FormGroup<AccountItemUpdatesFormProperties>({
			effectiveAllowAvailabilityUpdates: new FormControl<boolean | null | undefined>(undefined),
			effectiveAllowConditionUpdates: new FormControl<boolean | null | undefined>(undefined),
			effectiveAllowPriceUpdates: new FormControl<boolean | null | undefined>(undefined),
			effectiveAllowStrictAvailabilityUpdates: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Settings for the Automatic Item Updates. */
	export interface AccountItemUpdatesSettings {

		/** If availability updates are enabled, any previous availability values get overwritten if Google finds an out-of-stock annotation on the offer's page. If additionally `allow_availability_updates` field is set to true, values get overwritten if Google finds an in-stock annotation on the offer’s page. */
		allowAvailabilityUpdates?: boolean | null;

		/** If condition updates are enabled, Google always updates item condition with the condition detected from the details of your product. */
		allowConditionUpdates?: boolean | null;

		/** If price updates are enabled, Google always updates the active price with the crawled information. */
		allowPriceUpdates?: boolean | null;

		/** If allow_availability_updates is enabled, items are automatically updated in all your Shopping target countries. By default, availability updates will only be applied to items that are 'out of stock' on your website but 'in stock' on Shopping. Set this to true to also update items that are 'in stock' on your website, but 'out of stock' on Google Shopping. In order for this field to have an effect, you must also allow availability updates. */
		allowStrictAvailabilityUpdates?: boolean | null;
	}

	/** Settings for the Automatic Item Updates. */
	export interface AccountItemUpdatesSettingsFormProperties {

		/** If availability updates are enabled, any previous availability values get overwritten if Google finds an out-of-stock annotation on the offer's page. If additionally `allow_availability_updates` field is set to true, values get overwritten if Google finds an in-stock annotation on the offer’s page. */
		allowAvailabilityUpdates: FormControl<boolean | null | undefined>,

		/** If condition updates are enabled, Google always updates item condition with the condition detected from the details of your product. */
		allowConditionUpdates: FormControl<boolean | null | undefined>,

		/** If price updates are enabled, Google always updates the active price with the crawled information. */
		allowPriceUpdates: FormControl<boolean | null | undefined>,

		/** If allow_availability_updates is enabled, items are automatically updated in all your Shopping target countries. By default, availability updates will only be applied to items that are 'out of stock' on your website but 'in stock' on Shopping. Set this to true to also update items that are 'in stock' on your website, but 'out of stock' on Google Shopping. In order for this field to have an effect, you must also allow availability updates. */
		allowStrictAvailabilityUpdates: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountItemUpdatesSettingsFormGroup() {
		return new FormGroup<AccountItemUpdatesSettingsFormProperties>({
			allowAvailabilityUpdates: new FormControl<boolean | null | undefined>(undefined),
			allowConditionUpdates: new FormControl<boolean | null | undefined>(undefined),
			allowPriceUpdates: new FormControl<boolean | null | undefined>(undefined),
			allowStrictAvailabilityUpdates: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Not available for MCAs [accounts](https://support.google.com/merchants/answer/188487). By turning on [automatic shipping improvements](https://support.google.com/merchants/answer/10027038), you are allowing Google to improve the accuracy of your delivery times shown to shoppers using Google. More accurate delivery times, especially when faster, typically lead to better conversion rates. Google will improve your estimated delivery times based on various factors: * Delivery address of an order * Current handling time and shipping time settings * Estimated weekdays or business days * Parcel tracking data */
	export interface AccountShippingImprovements {

		/** Enables automatic shipping improvements. */
		allowShippingImprovements?: boolean | null;
	}

	/** Not available for MCAs [accounts](https://support.google.com/merchants/answer/188487). By turning on [automatic shipping improvements](https://support.google.com/merchants/answer/10027038), you are allowing Google to improve the accuracy of your delivery times shown to shoppers using Google. More accurate delivery times, especially when faster, typically lead to better conversion rates. Google will improve your estimated delivery times based on various factors: * Delivery address of an order * Current handling time and shipping time settings * Estimated weekdays or business days * Parcel tracking data */
	export interface AccountShippingImprovementsFormProperties {

		/** Enables automatic shipping improvements. */
		allowShippingImprovements: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountShippingImprovementsFormGroup() {
		return new FormGroup<AccountShippingImprovementsFormProperties>({
			allowShippingImprovements: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The [business identity attributes](https://support.google.com/merchants/answer/10342414) can be used to self-declare attributes that let customers know more about your business. */
	export interface AccountBusinessIdentity {

		/** The account identity type used to specify attributes. */
		blackOwned?: AccountIdentityType;

		/** Required. By setting this field, your business may be included in promotions for all the selected attributes. If you clear this option, it won't affect your identification with any of the attributes. For this field to be set, the merchant must self identify with at least one of the `AccountIdentityType`. If none are included, the request will be considered invalid. */
		includeForPromotions?: boolean | null;

		/** The account identity type used to specify attributes. */
		latinoOwned?: AccountIdentityType;

		/** The account identity type used to specify attributes. */
		smallBusiness?: AccountIdentityType;

		/** The account identity type used to specify attributes. */
		veteranOwned?: AccountIdentityType;

		/** The account identity type used to specify attributes. */
		womenOwned?: AccountIdentityType;
	}

	/** The [business identity attributes](https://support.google.com/merchants/answer/10342414) can be used to self-declare attributes that let customers know more about your business. */
	export interface AccountBusinessIdentityFormProperties {

		/** Required. By setting this field, your business may be included in promotions for all the selected attributes. If you clear this option, it won't affect your identification with any of the attributes. For this field to be set, the merchant must self identify with at least one of the `AccountIdentityType`. If none are included, the request will be considered invalid. */
		includeForPromotions: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountBusinessIdentityFormGroup() {
		return new FormGroup<AccountBusinessIdentityFormProperties>({
			includeForPromotions: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The account identity type used to specify attributes. */
	export interface AccountIdentityType {

		/** Optional. Indicates that the business identifies itself with a given identity type. Setting this field does not automatically mean eligibility for promotions. */
		selfIdentified?: boolean | null;
	}

	/** The account identity type used to specify attributes. */
	export interface AccountIdentityTypeFormProperties {

		/** Optional. Indicates that the business identifies itself with a given identity type. Setting this field does not automatically mean eligibility for promotions. */
		selfIdentified: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountIdentityTypeFormGroup() {
		return new FormGroup<AccountIdentityTypeFormProperties>({
			selfIdentified: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AccountBusinessInformation {
		address?: AccountAddress;
		customerService?: AccountCustomerService;

		/** The 10-digit [Korean business registration number](https://support.google.com/merchants/answer/9037766) separated with dashes in the format: XXX-XX-XXXXX. This field will only be updated if explicitly set. */
		koreanBusinessRegistrationNumber?: string | null;

		/** The phone number of the business in [E.164](https://en.wikipedia.org/wiki/E.164) format. This can only be updated if a verified phone number is not already set. To replace a verified phone number use the `Accounts.requestphoneverification` and `Accounts.verifyphonenumber`. */
		phoneNumber?: string | null;

		/** Verification status of the phone number of the business. This status is read only and can be updated only by successful phone verification. Acceptable values are: - "`verified`" - "`unverified`" */
		phoneVerificationStatus?: string | null;
	}
	export interface AccountBusinessInformationFormProperties {

		/** The 10-digit [Korean business registration number](https://support.google.com/merchants/answer/9037766) separated with dashes in the format: XXX-XX-XXXXX. This field will only be updated if explicitly set. */
		koreanBusinessRegistrationNumber: FormControl<string | null | undefined>,

		/** The phone number of the business in [E.164](https://en.wikipedia.org/wiki/E.164) format. This can only be updated if a verified phone number is not already set. To replace a verified phone number use the `Accounts.requestphoneverification` and `Accounts.verifyphonenumber`. */
		phoneNumber: FormControl<string | null | undefined>,

		/** Verification status of the phone number of the business. This status is read only and can be updated only by successful phone verification. Acceptable values are: - "`verified`" - "`unverified`" */
		phoneVerificationStatus: FormControl<string | null | undefined>,
	}
	export function CreateAccountBusinessInformationFormGroup() {
		return new FormGroup<AccountBusinessInformationFormProperties>({
			koreanBusinessRegistrationNumber: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			phoneVerificationStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountAddress {

		/** CLDR country code (for example, "US"). All MCA sub-accounts inherit the country of their parent MCA by default, however the country can be updated for individual sub-accounts. */
		country?: string | null;

		/** City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs). */
		locality?: string | null;

		/** Postal code or ZIP (for example, "94043"). */
		postalCode?: string | null;

		/** Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC"). */
		region?: string | null;

		/** Street-level part of the address. Use `\n` to add a second line. */
		streetAddress?: string | null;
	}
	export interface AccountAddressFormProperties {

		/** CLDR country code (for example, "US"). All MCA sub-accounts inherit the country of their parent MCA by default, however the country can be updated for individual sub-accounts. */
		country: FormControl<string | null | undefined>,

		/** City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs). */
		locality: FormControl<string | null | undefined>,

		/** Postal code or ZIP (for example, "94043"). */
		postalCode: FormControl<string | null | undefined>,

		/** Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC"). */
		region: FormControl<string | null | undefined>,

		/** Street-level part of the address. Use `\n` to add a second line. */
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


	/** Settings for conversion tracking. */
	export interface AccountConversionSettings {

		/** When enabled, free listing URLs have a parameter to enable conversion tracking for products owned by the current merchant account. See [auto-tagging](https://support.google.com/merchants/answer/11127659). */
		freeListingsAutoTaggingEnabled?: boolean | null;
	}

	/** Settings for conversion tracking. */
	export interface AccountConversionSettingsFormProperties {

		/** When enabled, free listing URLs have a parameter to enable conversion tracking for products owned by the current merchant account. See [auto-tagging](https://support.google.com/merchants/answer/11127659). */
		freeListingsAutoTaggingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountConversionSettingsFormGroup() {
		return new FormGroup<AccountConversionSettingsFormProperties>({
			freeListingsAutoTaggingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AccountGoogleMyBusinessLink {

		/** The ID of the Business Profile. If this is provided, then `gmbEmail` is ignored. The value of this field should match the `accountId` used by the Business Profile API. */
		gmbAccountId?: string | null;

		/** The Business Profile email address of a specific account within a Business Profile. A sample account within a Business Profile could be a business account with set of locations, managed under the Business Profile. */
		gmbEmail?: string | null;

		/** Status of the link between this Merchant Center account and the Business Profile. Acceptable values are: - "`active`" - "`pending`" */
		status?: string | null;
	}
	export interface AccountGoogleMyBusinessLinkFormProperties {

		/** The ID of the Business Profile. If this is provided, then `gmbEmail` is ignored. The value of this field should match the `accountId` used by the Business Profile API. */
		gmbAccountId: FormControl<string | null | undefined>,

		/** The Business Profile email address of a specific account within a Business Profile. A sample account within a Business Profile could be a business account with set of locations, managed under the Business Profile. */
		gmbEmail: FormControl<string | null | undefined>,

		/** Status of the link between this Merchant Center account and the Business Profile. Acceptable values are: - "`active`" - "`pending`" */
		status: FormControl<string | null | undefined>,
	}
	export function CreateAccountGoogleMyBusinessLinkFormGroup() {
		return new FormGroup<AccountGoogleMyBusinessLinkFormProperties>({
			gmbAccountId: new FormControl<string | null | undefined>(undefined),
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

		/** Whether user is a reporting manager. */
		reportingManager?: boolean | null;
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

		/** Whether user is a reporting manager. */
		reportingManager: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountUserFormGroup() {
		return new FormGroup<AccountUserFormProperties>({
			admin: new FormControl<boolean | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			orderManager: new FormControl<boolean | null | undefined>(undefined),
			paymentsAnalyst: new FormControl<boolean | null | undefined>(undefined),
			paymentsManager: new FormControl<boolean | null | undefined>(undefined),
			reportingManager: new FormControl<boolean | null | undefined>(undefined),
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


	/** Credentials allowing Google to call a partner's API on behalf of a merchant. */
	export interface AccountCredentials {

		/** An OAuth access token. */
		accessToken?: string | null;

		/** The amount of time, in seconds, after which the access token is no longer valid. */
		expiresIn?: string | null;

		/** Indicates to Google how Google should use these OAuth tokens. */
		purpose?: AccountCredentialsPurpose | null;
	}

	/** Credentials allowing Google to call a partner's API on behalf of a merchant. */
	export interface AccountCredentialsFormProperties {

		/** An OAuth access token. */
		accessToken: FormControl<string | null | undefined>,

		/** The amount of time, in seconds, after which the access token is no longer valid. */
		expiresIn: FormControl<string | null | undefined>,

		/** Indicates to Google how Google should use these OAuth tokens. */
		purpose: FormControl<AccountCredentialsPurpose | null | undefined>,
	}
	export function CreateAccountCredentialsFormGroup() {
		return new FormGroup<AccountCredentialsFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			expiresIn: new FormControl<string | null | undefined>(undefined),
			purpose: new FormControl<AccountCredentialsPurpose | null | undefined>(undefined),
		});

	}

	export enum AccountCredentialsPurpose { ACCOUNT_CREDENTIALS_PURPOSE_UNSPECIFIED = 0, SHOPIFY_ORDER_MANAGEMENT = 1, SHOPIFY_INTEGRATION = 2 }

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


	/** An issue affecting specific merchant. */
	export interface AccountIssue {

		/** A list of actionable steps that can be executed to solve the issue. An example is requesting a re-review or providing arguments when merchant disagrees with the issue. Actions that are supported in (your) third-party application can be rendered as buttons and should be available to merchant when they expand the issue. */
		actions?: Array<Action>;

		/** Overall impact of the issue. */
		impact?: AccountIssueImpact;

		/** Details of the issue as a pre-rendered HTML. HTML elements contain CSS classes that can be used to customize the style of the content. Always sanitize the HTML before embedding it directly to your application. The sanitizer needs to allow basic HTML tags, such as: `div`, `span`, `p`, `a`, `ul`, `li`, `table`, `tr`, `td`. For example, you can use [DOMPurify](https://www.npmjs.com/package/dompurify). CSS classes: * `issue-detail` - top level container for the detail of the issue * `callout-banners` - section of the `issue-detail` with callout banners * `callout-banner` - single callout banner, inside `callout-banners` * `callout-banner-info` - callout with important information (default) * `callout-banner-warning` - callout with a warning * `callout-banner-error` - callout informing about an error (most severe) * `issue-content` - section of the `issue-detail`, contains multiple `content-element` * `content-element` - content element such as a list, link or paragraph, inside `issue-content` * `root-causes` - unordered list with items describing root causes of the issue, inside `issue-content` * `root-causes-intro` - intro text before the `root-causes` list, inside `issue-content` * `segment` - section of the text, `span` inside paragraph * `segment-attribute` - section of the text that represents a product attribute, for example 'image\_link' * `segment-literal` - section of the text that contains a special value, for example '0-1000 kg' * `segment-bold` - section of the text that should be rendered as bold * `segment-italic` - section of the text that should be rendered as italic * `tooltip` - used on paragraphs that should be rendered with a tooltip. A section of the text in such a paragraph will have a class `tooltip-text` and is intended to be shown in a mouse over dialog. If the style is not used, the `tooltip-text` section would be shown on a new line, after the main part of the text. * `tooltip-text` - marks a section of the text within a `tooltip`, that is intended to be shown in a mouse over dialog. * `tooltip-icon` - marks a section of the text within a `tooltip`, that can be replaced with a tooltip icon, for example '?' or 'i'. By default, this section contains a `br` tag, that is separating the main text and the tooltip text when the style is not used. * `tooltip-style-question` - the tooltip shows helpful information, can use the '?' as an icon. * `tooltip-style-info` - the tooltip adds additional information fitting to the context, can use the 'i' as an icon. * `content-moderation` - marks the paragraph that explains how the issue was identified. * `new-element` - Present for new elements added to the pre-rendered content in the future. To make sure that a new content element does not break your style, you can hide everything with this class. */
		prerenderedContent?: string | null;

		/** Title of the issue. */
		title?: string | null;
	}

	/** An issue affecting specific merchant. */
	export interface AccountIssueFormProperties {

		/** Details of the issue as a pre-rendered HTML. HTML elements contain CSS classes that can be used to customize the style of the content. Always sanitize the HTML before embedding it directly to your application. The sanitizer needs to allow basic HTML tags, such as: `div`, `span`, `p`, `a`, `ul`, `li`, `table`, `tr`, `td`. For example, you can use [DOMPurify](https://www.npmjs.com/package/dompurify). CSS classes: * `issue-detail` - top level container for the detail of the issue * `callout-banners` - section of the `issue-detail` with callout banners * `callout-banner` - single callout banner, inside `callout-banners` * `callout-banner-info` - callout with important information (default) * `callout-banner-warning` - callout with a warning * `callout-banner-error` - callout informing about an error (most severe) * `issue-content` - section of the `issue-detail`, contains multiple `content-element` * `content-element` - content element such as a list, link or paragraph, inside `issue-content` * `root-causes` - unordered list with items describing root causes of the issue, inside `issue-content` * `root-causes-intro` - intro text before the `root-causes` list, inside `issue-content` * `segment` - section of the text, `span` inside paragraph * `segment-attribute` - section of the text that represents a product attribute, for example 'image\_link' * `segment-literal` - section of the text that contains a special value, for example '0-1000 kg' * `segment-bold` - section of the text that should be rendered as bold * `segment-italic` - section of the text that should be rendered as italic * `tooltip` - used on paragraphs that should be rendered with a tooltip. A section of the text in such a paragraph will have a class `tooltip-text` and is intended to be shown in a mouse over dialog. If the style is not used, the `tooltip-text` section would be shown on a new line, after the main part of the text. * `tooltip-text` - marks a section of the text within a `tooltip`, that is intended to be shown in a mouse over dialog. * `tooltip-icon` - marks a section of the text within a `tooltip`, that can be replaced with a tooltip icon, for example '?' or 'i'. By default, this section contains a `br` tag, that is separating the main text and the tooltip text when the style is not used. * `tooltip-style-question` - the tooltip shows helpful information, can use the '?' as an icon. * `tooltip-style-info` - the tooltip adds additional information fitting to the context, can use the 'i' as an icon. * `content-moderation` - marks the paragraph that explains how the issue was identified. * `new-element` - Present for new elements added to the pre-rendered content in the future. To make sure that a new content element does not break your style, you can hide everything with this class. */
		prerenderedContent: FormControl<string | null | undefined>,

		/** Title of the issue. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAccountIssueFormGroup() {
		return new FormGroup<AccountIssueFormProperties>({
			prerenderedContent: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An actionable step that can be executed to solve the issue. */
	export interface Action {

		/** Action that is implemented and performed in (your) third-party application. Represents various functionality that is expected to be available to merchant and will help them with resolving the issue. The application should point the merchant to the place, where they can access the corresponding functionality. If the functionality is not supported, it is recommended to explain the situation to merchant and provide them with instructions how to solve the issue. */
		builtinSimpleAction?: BuiltInSimpleAction;

		/** Label of the action button. */
		buttonLabel?: string | null;

		/** Action that is implemented and performed outside of the third-party application. It should redirect the merchant to the provided URL of an external system where they can perform the action. For example to request a review in the Merchant Center. */
		externalAction?: ExternalAction;

		/** Controlling whether the button is active or disabled. The value is 'false' when the action was already requested or is not available. If the action is not available then a reason will be present. If (your) third-party application shows a disabled button for action that is not available, then it should also show reasons. */
		isAvailable?: boolean | null;

		/** List of reasons why the action is not available. The list of reasons is empty if the action is available. If there is only one reason, it can be displayed next to the disabled button. If there are more reasons, all of them should be displayed, for example in a pop-up dialog. */
		reasons?: Array<ActionReason>;
	}

	/** An actionable step that can be executed to solve the issue. */
	export interface ActionFormProperties {

		/** Label of the action button. */
		buttonLabel: FormControl<string | null | undefined>,

		/** Controlling whether the button is active or disabled. The value is 'false' when the action was already requested or is not available. If the action is not available then a reason will be present. If (your) third-party application shows a disabled button for action that is not available, then it should also show reasons. */
		isAvailable: FormControl<boolean | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			buttonLabel: new FormControl<string | null | undefined>(undefined),
			isAvailable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Action that is implemented and performed in (your) third-party application. Represents various functionality that is expected to be available to merchant and will help them with resolving the issue. The application should point the merchant to the place, where they can access the corresponding functionality. If the functionality is not supported, it is recommended to explain the situation to merchant and provide them with instructions how to solve the issue. */
	export interface BuiltInSimpleAction {

		/** Long text from external source. */
		additionalContent?: BuiltInSimpleActionAdditionalContent;

		/** The attribute that needs to be updated. Present when the type is `EDIT_ITEM_ATTRIBUTE`. This field contains a code for attribute, represented in snake_case. You can find a list of product's attributes, with their codes [here](https://support.google.com/merchants/answer/7052112). */
		attributeCode?: string | null;

		/** The type of action that represents a functionality that is expected to be available in third-party application. */
		type?: BuiltInSimpleActionType | null;
	}

	/** Action that is implemented and performed in (your) third-party application. Represents various functionality that is expected to be available to merchant and will help them with resolving the issue. The application should point the merchant to the place, where they can access the corresponding functionality. If the functionality is not supported, it is recommended to explain the situation to merchant and provide them with instructions how to solve the issue. */
	export interface BuiltInSimpleActionFormProperties {

		/** The attribute that needs to be updated. Present when the type is `EDIT_ITEM_ATTRIBUTE`. This field contains a code for attribute, represented in snake_case. You can find a list of product's attributes, with their codes [here](https://support.google.com/merchants/answer/7052112). */
		attributeCode: FormControl<string | null | undefined>,

		/** The type of action that represents a functionality that is expected to be available in third-party application. */
		type: FormControl<BuiltInSimpleActionType | null | undefined>,
	}
	export function CreateBuiltInSimpleActionFormGroup() {
		return new FormGroup<BuiltInSimpleActionFormProperties>({
			attributeCode: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<BuiltInSimpleActionType | null | undefined>(undefined),
		});

	}


	/** Long text from external source. */
	export interface BuiltInSimpleActionAdditionalContent {

		/** Long text organized into paragraphs. */
		paragraphs?: Array<string>;

		/** Title of the additional content; */
		title?: string | null;
	}

	/** Long text from external source. */
	export interface BuiltInSimpleActionAdditionalContentFormProperties {

		/** Title of the additional content; */
		title: FormControl<string | null | undefined>,
	}
	export function CreateBuiltInSimpleActionAdditionalContentFormGroup() {
		return new FormGroup<BuiltInSimpleActionAdditionalContentFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuiltInSimpleActionType { BUILT_IN_SIMPLE_ACTION_TYPE_UNSPECIFIED = 0, VERIFY_PHONE = 1, CLAIM_WEBSITE = 2, ADD_PRODUCTS = 3, ADD_CONTACT_INFO = 4, LINK_ADS_ACCOUNT = 5, ADD_BUSINESS_REGISTRATION_NUMBER = 6, EDIT_ITEM_ATTRIBUTE = 7, FIX_ACCOUNT_ISSUE = 8, SHOW_ADDITIONAL_CONTENT = 9 }


	/** Action that is implemented and performed outside of the third-party application. It should redirect the merchant to the provided URL of an external system where they can perform the action. For example to request a review in the Merchant Center. */
	export interface ExternalAction {

		/** The type of external action. */
		type?: ExternalActionType | null;

		/** URL to external system, for example Merchant Center, where the merchant can perform the action. */
		uri?: string | null;
	}

	/** Action that is implemented and performed outside of the third-party application. It should redirect the merchant to the provided URL of an external system where they can perform the action. For example to request a review in the Merchant Center. */
	export interface ExternalActionFormProperties {

		/** The type of external action. */
		type: FormControl<ExternalActionType | null | undefined>,

		/** URL to external system, for example Merchant Center, where the merchant can perform the action. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateExternalActionFormGroup() {
		return new FormGroup<ExternalActionFormProperties>({
			type: new FormControl<ExternalActionType | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExternalActionType { EXTERNAL_ACTION_TYPE_UNSPECIFIED = 0, REVIEW_PRODUCT_ISSUE_IN_MERCHANT_CENTER = 1, REVIEW_ACCOUNT_ISSUE_IN_MERCHANT_CENTER = 2, LEGAL_APPEAL_IN_HELP_CENTER = 3, VERIFY_IDENTITY_IN_MERCHANT_CENTER = 4 }


	/** A single reason why the action is not available. */
	export interface ActionReason {

		/** An actionable step that can be executed to solve the issue. */
		action?: Action;

		/** Detailed explanation of the reason. Should be displayed as a hint if present. */
		detail?: string | null;

		/** Messages summarizing the reason, why the action is not available. For example: "Review requested on Jan 03. Review requests can take a few days to complete." */
		message?: string | null;
	}

	/** A single reason why the action is not available. */
	export interface ActionReasonFormProperties {

		/** Detailed explanation of the reason. Should be displayed as a hint if present. */
		detail: FormControl<string | null | undefined>,

		/** Messages summarizing the reason, why the action is not available. For example: "Review requested on Jan 03. Review requests can take a few days to complete." */
		message: FormControl<string | null | undefined>,
	}
	export function CreateActionReasonFormGroup() {
		return new FormGroup<ActionReasonFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Overall impact of the issue. */
	export interface AccountIssueImpact {

		/** Detailed impact breakdown. Explains the types of restriction the issue has in different shopping destinations and territory. If present, it should be rendered to the merchant. Can be shown as a mouse over dropdown or a dialog. Each breakdown item represents a group of regions with the same impact details. */
		breakdowns?: Array<Breakdown>;

		/** Optional. Message summarizing the overall impact of the issue. If present, it should be rendered to the merchant. For example: "Disapproves 90k offers in 25 countries" */
		message?: string | null;

		/** The severity of the issue. */
		severity?: AccountIssueImpactSeverity | null;
	}

	/** Overall impact of the issue. */
	export interface AccountIssueImpactFormProperties {

		/** Optional. Message summarizing the overall impact of the issue. If present, it should be rendered to the merchant. For example: "Disapproves 90k offers in 25 countries" */
		message: FormControl<string | null | undefined>,

		/** The severity of the issue. */
		severity: FormControl<AccountIssueImpactSeverity | null | undefined>,
	}
	export function CreateAccountIssueImpactFormGroup() {
		return new FormGroup<AccountIssueImpactFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<AccountIssueImpactSeverity | null | undefined>(undefined),
		});

	}


	/** A detailed impact breakdown for a group of regions where the impact of the issue on different shopping destinations is the same. */
	export interface Breakdown {

		/** Human readable, localized description of issue's effect on different targets. Should be rendered as a list. For example: * "Products not showing in ads" * "Products not showing organically" */
		details?: Array<string>;

		/** Lists of regions. Should be rendered as a title for this group of details. The full list should be shown to merchant. If the list is too long, it is recommended to make it expandable. */
		regions?: Array<BreakdownRegion>;
	}

	/** A detailed impact breakdown for a group of regions where the impact of the issue on different shopping destinations is the same. */
	export interface BreakdownFormProperties {
	}
	export function CreateBreakdownFormGroup() {
		return new FormGroup<BreakdownFormProperties>({
		});

	}


	/** Region with code and localized name. */
	export interface BreakdownRegion {

		/** The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) */
		code?: string | null;

		/** The localized name of the region. For region with code='001' the value is 'All countries' or the equivalent in other languages. */
		name?: string | null;
	}

	/** Region with code and localized name. */
	export interface BreakdownRegionFormProperties {

		/** The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) */
		code: FormControl<string | null | undefined>,

		/** The localized name of the region. For region with code='001' the value is 'All countries' or the equivalent in other languages. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBreakdownRegionFormGroup() {
		return new FormGroup<BreakdownRegionFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccountIssueImpactSeverity { SEVERITY_UNSPECIFIED = 0, ERROR = 1, WARNING = 2, INFO = 3 }


	/** Label assigned by CSS domain or CSS group to one of its sub-accounts. */
	export interface AccountLabel {

		/** Immutable. The ID of account this label belongs to. */
		accountId?: string | null;

		/** The description of this label. */
		description?: string | null;

		/** Output only. The ID of the label. */
		labelId?: string | null;

		/** Output only. The type of this label. */
		labelType?: AccountLabelLabelType | null;

		/** The display name of this label. */
		name?: string | null;
	}

	/** Label assigned by CSS domain or CSS group to one of its sub-accounts. */
	export interface AccountLabelFormProperties {

		/** Immutable. The ID of account this label belongs to. */
		accountId: FormControl<string | null | undefined>,

		/** The description of this label. */
		description: FormControl<string | null | undefined>,

		/** Output only. The ID of the label. */
		labelId: FormControl<string | null | undefined>,

		/** Output only. The type of this label. */
		labelType: FormControl<AccountLabelLabelType | null | undefined>,

		/** The display name of this label. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAccountLabelFormGroup() {
		return new FormGroup<AccountLabelFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labelId: new FormControl<string | null | undefined>(undefined),
			labelType: new FormControl<AccountLabelLabelType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccountLabelLabelType { LABEL_TYPE_UNSPECIFIED = 0, MANUAL = 1, AUTOMATIC = 2 }


	/**  The return carrier information. This service is designed for merchants enrolled in the Buy on Google program.  */
	export interface AccountReturnCarrier {

		/** Output only. Immutable. The Google-provided unique carrier ID, used to update the resource. */
		carrierAccountId?: string | null;

		/** Name of the carrier account. */
		carrierAccountName?: string | null;

		/** Number of the carrier account. */
		carrierAccountNumber?: string | null;

		/** The carrier code enum. Accepts the values FEDEX or UPS. */
		carrierCode?: AccountReturnCarrierCarrierCode | null;
	}

	/**  The return carrier information. This service is designed for merchants enrolled in the Buy on Google program.  */
	export interface AccountReturnCarrierFormProperties {

		/** Output only. Immutable. The Google-provided unique carrier ID, used to update the resource. */
		carrierAccountId: FormControl<string | null | undefined>,

		/** Name of the carrier account. */
		carrierAccountName: FormControl<string | null | undefined>,

		/** Number of the carrier account. */
		carrierAccountNumber: FormControl<string | null | undefined>,

		/** The carrier code enum. Accepts the values FEDEX or UPS. */
		carrierCode: FormControl<AccountReturnCarrierCarrierCode | null | undefined>,
	}
	export function CreateAccountReturnCarrierFormGroup() {
		return new FormGroup<AccountReturnCarrierFormProperties>({
			carrierAccountId: new FormControl<string | null | undefined>(undefined),
			carrierAccountName: new FormControl<string | null | undefined>(undefined),
			carrierAccountNumber: new FormControl<string | null | undefined>(undefined),
			carrierCode: new FormControl<AccountReturnCarrierCarrierCode | null | undefined>(undefined),
		});

	}

	export enum AccountReturnCarrierCarrierCode { CARRIER_CODE_UNSPECIFIED = 0, FEDEX = 1, UPS = 2 }


	/** The status of an account, that is, information about its products, which is computed offline and not returned immediately at insertion time. */
	export interface AccountStatus {

		/** The ID of the account for which the status is reported. */
		accountId?: string | null;

		/** A list of account level issues. */
		accountLevelIssues?: Array<AccountStatusAccountLevelIssue>;

		/** How the account is managed. Acceptable values are: - "`manual`" - "`automatic`" */
		accountManagement?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountStatus`" */
		kind?: string | null;

		/** List of product-related data by channel, destination, and country. Data in this field may be delayed by up to 30 minutes. */
		products?: Array<AccountStatusProducts>;

		/** Whether the account's website is claimed or not. */
		websiteClaimed?: boolean | null;
	}

	/** The status of an account, that is, information about its products, which is computed offline and not returned immediately at insertion time. */
	export interface AccountStatusFormProperties {

		/** The ID of the account for which the status is reported. */
		accountId: FormControl<string | null | undefined>,

		/** How the account is managed. Acceptable values are: - "`manual`" - "`automatic`" */
		accountManagement: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountStatus`" */
		kind: FormControl<string | null | undefined>,

		/** Whether the account's website is claimed or not. */
		websiteClaimed: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountStatusFormGroup() {
		return new FormGroup<AccountStatusFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			accountManagement: new FormControl<string | null | undefined>(undefined),
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountTax`". */
		kind?: string | null;

		/** Tax rules. Updating the tax rules will enable "US" taxes (not reversible). Defining no rules is equivalent to not charging tax at all. */
		rules?: Array<AccountTaxTaxRule>;
	}

	/** The tax settings of a merchant account. All methods require the admin role. */
	export interface AccountTaxFormProperties {

		/** Required. The ID of the account to which these account tax settings belong. */
		accountId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountTax`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccountTaxFormGroup() {
		return new FormGroup<AccountTaxFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Tax calculation rule to apply in a state or province (US only). */
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

	/** Tax calculation rule to apply in a state or province (US only). */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountsAuthInfoResponse`". */
		kind?: string | null;
	}
	export interface AccountsAuthInfoResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountsAuthInfoResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccountsAuthInfoResponseFormGroup() {
		return new FormGroup<AccountsAuthInfoResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountsClaimWebsiteResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountsClaimWebsiteResponse`". */
		kind?: string | null;
	}
	export interface AccountsClaimWebsiteResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountsClaimWebsiteResponse`". */
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

		/** Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role. */
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

		/** Controls which fields are visible. Only applicable if the method is 'get'. */
		view?: string | null;
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

		/** Controls which fields are visible. Only applicable if the method is 'get'. */
		view: FormControl<string | null | undefined>,
	}
	export function CreateAccountsCustomBatchRequestEntryFormGroup() {
		return new FormGroup<AccountsCustomBatchRequestEntryFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			batchId: new FormControl<number | null | undefined>(undefined),
			force: new FormControl<boolean | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			overwrite: new FormControl<boolean | null | undefined>(undefined),
			view: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountsCustomBatchRequestEntryLinkRequest {

		/** Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`" */
		action?: string | null;

		/** Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" - "`paymentServiceProvider`" - "`localProductManager`" */
		linkType?: string | null;

		/** The ID of the linked account. */
		linkedAccountId?: string | null;

		/** Provided services. Acceptable values are: - "`shoppingAdsProductManagement`" - "`shoppingActionsProductManagement`" - "`shoppingActionsOrderManagement`" - "`paymentProcessing`" - "`localProductManagement`" */
		services?: Array<string>;
	}
	export interface AccountsCustomBatchRequestEntryLinkRequestFormProperties {

		/** Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`" */
		action: FormControl<string | null | undefined>,

		/** Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" - "`paymentServiceProvider`" - "`localProductManager`" */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountsCustomBatchResponse`". */
		kind?: string | null;
	}
	export interface AccountsCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountsCustomBatchResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccountsCustomBatchResponseFormGroup() {
		return new FormGroup<AccountsCustomBatchResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A batch entry encoding a single non-batch accounts response. */
	export interface AccountsCustomBatchResponseEntry {

		/** Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role. */
		account?: Account;

		/** The ID of the request entry this entry responds to. */
		batchId?: number | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountsCustomBatchResponseEntry`" */
		kind?: string | null;
	}

	/** A batch entry encoding a single non-batch accounts response. */
	export interface AccountsCustomBatchResponseEntryFormProperties {

		/** The ID of the request entry this entry responds to. */
		batchId: FormControl<number | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountsCustomBatchResponseEntry`" */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccountsCustomBatchResponseEntryFormGroup() {
		return new FormGroup<AccountsCustomBatchResponseEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
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

		/** Additional information required for E_COMMERCE_PLATFORM link type. */
		eCommercePlatformLinkInfo?: ECommercePlatformLinkInfo;

		/** Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" - "`paymentServiceProvider`" */
		linkType?: string | null;

		/** The ID of the linked account. */
		linkedAccountId?: string | null;

		/** Additional information required for PAYMENT_SERVICE_PROVIDER link type. */
		paymentServiceProviderLinkInfo?: PaymentServiceProviderLinkInfo;

		/** Acceptable values are: - "`shoppingAdsProductManagement`" - "`shoppingActionsProductManagement`" - "`shoppingActionsOrderManagement`" - "`paymentProcessing`" */
		services?: Array<string>;
	}
	export interface AccountsLinkRequestFormProperties {

		/** Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`" */
		action: FormControl<string | null | undefined>,

		/** Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" - "`paymentServiceProvider`" */
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


	/** Additional information required for E_COMMERCE_PLATFORM link type. */
	export interface ECommercePlatformLinkInfo {

		/** The id used by the third party service provider to identify the merchant. */
		externalAccountId?: string | null;
	}

	/** Additional information required for E_COMMERCE_PLATFORM link type. */
	export interface ECommercePlatformLinkInfoFormProperties {

		/** The id used by the third party service provider to identify the merchant. */
		externalAccountId: FormControl<string | null | undefined>,
	}
	export function CreateECommercePlatformLinkInfoFormGroup() {
		return new FormGroup<ECommercePlatformLinkInfoFormProperties>({
			externalAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional information required for PAYMENT_SERVICE_PROVIDER link type. */
	export interface PaymentServiceProviderLinkInfo {

		/** The business country of the merchant account as identified by the third party service provider. */
		externalAccountBusinessCountry?: string | null;

		/** The id used by the third party service provider to identify the merchant. */
		externalAccountId?: string | null;
	}

	/** Additional information required for PAYMENT_SERVICE_PROVIDER link type. */
	export interface PaymentServiceProviderLinkInfoFormProperties {

		/** The business country of the merchant account as identified by the third party service provider. */
		externalAccountBusinessCountry: FormControl<string | null | undefined>,

		/** The id used by the third party service provider to identify the merchant. */
		externalAccountId: FormControl<string | null | undefined>,
	}
	export function CreatePaymentServiceProviderLinkInfoFormGroup() {
		return new FormGroup<PaymentServiceProviderLinkInfoFormProperties>({
			externalAccountBusinessCountry: new FormControl<string | null | undefined>(undefined),
			externalAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountsLinkResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountsLinkResponse`". */
		kind?: string | null;
	}
	export interface AccountsLinkResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountsLinkResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccountsLinkResponseFormGroup() {
		return new FormGroup<AccountsLinkResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountsListLinksResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountsListLinksResponse`". */
		kind?: string | null;

		/** The list of available links. */
		links?: Array<LinkedAccount>;

		/** The token for the retrieval of the next page of links. */
		nextPageToken?: string | null;
	}
	export interface AccountsListLinksResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountsListLinksResponse`". */
		kind: FormControl<string | null | undefined>,

		/** The token for the retrieval of the next page of links. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateAccountsListLinksResponseFormGroup() {
		return new FormGroup<AccountsListLinksResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinkedAccount {

		/** The ID of the linked account. */
		linkedAccountId?: string | null;

		/** List of provided services. */
		services?: Array<LinkService>;
	}
	export interface LinkedAccountFormProperties {

		/** The ID of the linked account. */
		linkedAccountId: FormControl<string | null | undefined>,
	}
	export function CreateLinkedAccountFormGroup() {
		return new FormGroup<LinkedAccountFormProperties>({
			linkedAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinkService {

		/** Service provided to or by the linked account. Acceptable values are: - "`shoppingActionsOrderManagement`" - "`shoppingActionsProductManagement`" - "`shoppingAdsProductManagement`" - "`paymentProcessing`" */
		service?: string | null;

		/** Status of the link Acceptable values are: - "`active`" - "`inactive`" - "`pending`" */
		status?: string | null;
	}
	export interface LinkServiceFormProperties {

		/** Service provided to or by the linked account. Acceptable values are: - "`shoppingActionsOrderManagement`" - "`shoppingActionsProductManagement`" - "`shoppingAdsProductManagement`" - "`paymentProcessing`" */
		service: FormControl<string | null | undefined>,

		/** Status of the link Acceptable values are: - "`active`" - "`inactive`" - "`pending`" */
		status: FormControl<string | null | undefined>,
	}
	export function CreateLinkServiceFormGroup() {
		return new FormGroup<LinkServiceFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountsListResponse`". */
		kind?: string | null;

		/** The token for the retrieval of the next page of accounts. */
		nextPageToken?: string | null;
		resources?: Array<Account>;
	}
	export interface AccountsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountsListResponse`". */
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

	export interface AccountsUpdateLabelsRequest {

		/** The IDs of labels that should be assigned to the account. */
		labelIds?: Array<string>;
	}
	export interface AccountsUpdateLabelsRequestFormProperties {
	}
	export function CreateAccountsUpdateLabelsRequestFormGroup() {
		return new FormGroup<AccountsUpdateLabelsRequestFormProperties>({
		});

	}

	export interface AccountsUpdateLabelsResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountsUpdateLabelsResponse`". */
		kind?: string | null;
	}
	export interface AccountsUpdateLabelsResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountsUpdateLabelsResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccountsUpdateLabelsResponseFormGroup() {
		return new FormGroup<AccountsUpdateLabelsResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountstatusesCustomBatchResponse`". */
		kind?: string | null;
	}
	export interface AccountstatusesCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountstatusesCustomBatchResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccountstatusesCustomBatchResponseFormGroup() {
		return new FormGroup<AccountstatusesCustomBatchResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A batch entry encoding a single non-batch accountstatuses response. */
	export interface AccountstatusesCustomBatchResponseEntry {

		/** The status of an account, that is, information about its products, which is computed offline and not returned immediately at insertion time. */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountstatusesListResponse`". */
		kind?: string | null;

		/** The token for the retrieval of the next page of account statuses. */
		nextPageToken?: string | null;
		resources?: Array<AccountStatus>;
	}
	export interface AccountstatusesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accountstatusesListResponse`". */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accounttaxCustomBatchResponse`". */
		kind?: string | null;
	}
	export interface AccounttaxCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accounttaxCustomBatchResponse`". */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accounttaxListResponse`". */
		kind?: string | null;

		/** The token for the retrieval of the next page of account tax settings. */
		nextPageToken?: string | null;
		resources?: Array<AccountTax>;
	}
	export interface AccounttaxListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#accounttaxListResponse`". */
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


	/** Request message for the ActivateProgram method. */
	export interface ActivateBuyOnGoogleProgramRequest {
	}

	/** Request message for the ActivateProgram method. */
	export interface ActivateBuyOnGoogleProgramRequestFormProperties {
	}
	export function CreateActivateBuyOnGoogleProgramRequestFormGroup() {
		return new FormGroup<ActivateBuyOnGoogleProgramRequestFormProperties>({
		});

	}

	export interface Address {

		/** Required. Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC"). */
		administrativeArea?: string | null;

		/** Required. City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs). */
		city?: string | null;

		/** Required. [CLDR country code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml) (for example, "US"). */
		country?: string | null;

		/** Required. Postal code or ZIP (for example, "94043"). */
		postalCode?: string | null;

		/** Street-level part of the address. Use `\n` to add a second line. */
		streetAddress?: string | null;
	}
	export interface AddressFormProperties {

		/** Required. Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC"). */
		administrativeArea: FormControl<string | null | undefined>,

		/** Required. City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs). */
		city: FormControl<string | null | undefined>,

		/** Required. [CLDR country code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml) (for example, "US"). */
		country: FormControl<string | null | undefined>,

		/** Required. Postal code or ZIP (for example, "94043"). */
		postalCode: FormControl<string | null | undefined>,

		/** Street-level part of the address. Use `\n` to add a second line. */
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


	/** The Alternate Dispute Resolution (ADR) that may be available to merchants in some regions. If present, the link should be shown on the same page as the list of issues. */
	export interface AlternateDisputeResolution {

		/** The label for the alternate dispute resolution link. */
		label?: string | null;

		/** The URL pointing to a page, where merchant can request alternative dispute resolution with an [external body](https://support.google.com/european-union-digital-services-act-redress-options/answer/13535501). */
		uri?: string | null;
	}

	/** The Alternate Dispute Resolution (ADR) that may be available to merchants in some regions. If present, the link should be shown on the same page as the list of issues. */
	export interface AlternateDisputeResolutionFormProperties {

		/** The label for the alternate dispute resolution link. */
		label: FormControl<string | null | undefined>,

		/** The URL pointing to a page, where merchant can request alternative dispute resolution with an [external body](https://support.google.com/european-union-digital-services-act-redress-options/answer/13535501). */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAlternateDisputeResolutionFormGroup() {
		return new FormGroup<AlternateDisputeResolutionFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Amount {
		priceAmount?: Price;
		taxAmount?: Price;
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


	/** Represents attribution settings for conversion sources receiving pre-attribution data. */
	export interface AttributionSettings {

		/** Required. Lookback windows (in days) used for attribution in this source. Supported values are 7, 30, 60, 90. */
		attributionLookbackWindowInDays?: number | null;

		/** Required. Attribution model. */
		attributionModel?: AttributionSettingsAttributionModel | null;

		/** Immutable. Unordered list. List of different conversion types a conversion event can be classified as. A standard "purchase" type will be automatically created if this list is empty at creation time. */
		conversionType?: Array<AttributionSettingsConversionType>;
	}

	/** Represents attribution settings for conversion sources receiving pre-attribution data. */
	export interface AttributionSettingsFormProperties {

		/** Required. Lookback windows (in days) used for attribution in this source. Supported values are 7, 30, 60, 90. */
		attributionLookbackWindowInDays: FormControl<number | null | undefined>,

		/** Required. Attribution model. */
		attributionModel: FormControl<AttributionSettingsAttributionModel | null | undefined>,
	}
	export function CreateAttributionSettingsFormGroup() {
		return new FormGroup<AttributionSettingsFormProperties>({
			attributionLookbackWindowInDays: new FormControl<number | null | undefined>(undefined),
			attributionModel: new FormControl<AttributionSettingsAttributionModel | null | undefined>(undefined),
		});

	}

	export enum AttributionSettingsAttributionModel { ATTRIBUTION_MODEL_UNSPECIFIED = 0, CROSS_CHANNEL_LAST_CLICK = 1, ADS_PREFERRED_LAST_CLICK = 2, CROSS_CHANNEL_DATA_DRIVEN = 3, CROSS_CHANNEL_FIRST_CLICK = 4, CROSS_CHANNEL_LINEAR = 5, CROSS_CHANNEL_POSITION_BASED = 6, CROSS_CHANNEL_TIME_DECAY = 7 }


	/** Message representing a types of conversion events */
	export interface AttributionSettingsConversionType {

		/** Output only. Option indicating if the type should be included in Merchant Center reporting. */
		includeInReporting?: boolean | null;

		/** Output only. Conversion event name, as it'll be reported by the client. */
		name?: string | null;
	}

	/** Message representing a types of conversion events */
	export interface AttributionSettingsConversionTypeFormProperties {

		/** Output only. Option indicating if the type should be included in Merchant Center reporting. */
		includeInReporting: FormControl<boolean | null | undefined>,

		/** Output only. Conversion event name, as it'll be reported by the client. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAttributionSettingsConversionTypeFormGroup() {
		return new FormGroup<AttributionSettingsConversionTypeFormProperties>({
			includeInReporting: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Fields related to the [Best sellers reports](https://support.google.com/merchants/answer/9488679). */
	export interface BestSellers {

		/** Google product category ID to calculate the ranking for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). If a `WHERE` condition on `best_sellers.category_id` is not specified in the query, rankings for all top-level categories are returned. */
		categoryId?: string | null;

		/** Country where the ranking is calculated. A `WHERE` condition on `best_sellers.country_code` is required in the query. */
		countryCode?: string | null;

		/** Popularity rank in the previous week or month. */
		previousRank?: string | null;

		/** Estimated demand in relation to the item with the highest popularity rank in the same category and country in the previous week or month. */
		previousRelativeDemand?: BestSellersPreviousRelativeDemand | null;

		/** Popularity on Shopping ads and free listings, in the selected category and country, based on the estimated number of units sold. */
		rank?: string | null;

		/** Estimated demand in relation to the item with the highest popularity rank in the same category and country. */
		relativeDemand?: BestSellersPreviousRelativeDemand | null;

		/** Change in the estimated demand. Whether it rose, sank or remained flat. */
		relativeDemandChange?: BestSellersRelativeDemandChange | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		reportDate?: Date;

		/** Granularity of the report. The ranking can be done over a week or a month timeframe. A `WHERE` condition on `best_sellers.report_granularity` is required in the query. */
		reportGranularity?: BestSellersReportGranularity | null;
	}

	/** Fields related to the [Best sellers reports](https://support.google.com/merchants/answer/9488679). */
	export interface BestSellersFormProperties {

		/** Google product category ID to calculate the ranking for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). If a `WHERE` condition on `best_sellers.category_id` is not specified in the query, rankings for all top-level categories are returned. */
		categoryId: FormControl<string | null | undefined>,

		/** Country where the ranking is calculated. A `WHERE` condition on `best_sellers.country_code` is required in the query. */
		countryCode: FormControl<string | null | undefined>,

		/** Popularity rank in the previous week or month. */
		previousRank: FormControl<string | null | undefined>,

		/** Estimated demand in relation to the item with the highest popularity rank in the same category and country in the previous week or month. */
		previousRelativeDemand: FormControl<BestSellersPreviousRelativeDemand | null | undefined>,

		/** Popularity on Shopping ads and free listings, in the selected category and country, based on the estimated number of units sold. */
		rank: FormControl<string | null | undefined>,

		/** Estimated demand in relation to the item with the highest popularity rank in the same category and country. */
		relativeDemand: FormControl<BestSellersPreviousRelativeDemand | null | undefined>,

		/** Change in the estimated demand. Whether it rose, sank or remained flat. */
		relativeDemandChange: FormControl<BestSellersRelativeDemandChange | null | undefined>,

		/** Granularity of the report. The ranking can be done over a week or a month timeframe. A `WHERE` condition on `best_sellers.report_granularity` is required in the query. */
		reportGranularity: FormControl<BestSellersReportGranularity | null | undefined>,
	}
	export function CreateBestSellersFormGroup() {
		return new FormGroup<BestSellersFormProperties>({
			categoryId: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			previousRank: new FormControl<string | null | undefined>(undefined),
			previousRelativeDemand: new FormControl<BestSellersPreviousRelativeDemand | null | undefined>(undefined),
			rank: new FormControl<string | null | undefined>(undefined),
			relativeDemand: new FormControl<BestSellersPreviousRelativeDemand | null | undefined>(undefined),
			relativeDemandChange: new FormControl<BestSellersRelativeDemandChange | null | undefined>(undefined),
			reportGranularity: new FormControl<BestSellersReportGranularity | null | undefined>(undefined),
		});

	}

	export enum BestSellersPreviousRelativeDemand { RELATIVE_DEMAND_UNSPECIFIED = 0, VERY_LOW = 1, LOW = 2, MEDIUM = 3, HIGH = 4, VERY_HIGH = 5 }

	export enum BestSellersRelativeDemandChange { RELATIVE_DEMAND_CHANGE_TYPE_UNSPECIFIED = 0, SINKER = 1, FLAT = 2, RISER = 3 }


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface Date {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface DateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BestSellersReportGranularity { REPORT_GRANULARITY_UNSPECIFIED = 0, WEEKLY = 1, MONTHLY = 2 }


	/** Brand fields. Values are only set for fields requested explicitly in the request's search query. */
	export interface Brand {

		/** Name of the brand. */
		name?: string | null;
	}

	/** Brand fields. Values are only set for fields requested explicitly in the request's search query. */
	export interface BrandFormProperties {

		/** Name of the brand. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBrandFormGroup() {
		return new FormGroup<BrandFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
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


	/** A Link from a [Business Messages](https://businessmessages.google) Agent Id to the Merchant Center account. You can create multiple `BusinessMessagesLink` to Merchant Center Account. Only available to selected merchants. See [Create agents to manage brands](https://developers.google.com/business-communications/business-messages/guides/how-to/agents) for more information. */
	export interface BusinessMessagesLink {

		/** Required. Agent ID from Business Messages to link to the Merchant Center account. The Agent ID can be found in the [Business Communications Developer Console](https://developers.google.com/business-communications/business-messages/guides/concepts/developer-console#agent_selection). */
		agentId?: string | null;

		/** Output only. Immutable. The ID uniquely identifying each `BusinessMessagesLink`. */
		businessMessagesLinkId?: string | null;
	}

	/** A Link from a [Business Messages](https://businessmessages.google) Agent Id to the Merchant Center account. You can create multiple `BusinessMessagesLink` to Merchant Center Account. Only available to selected merchants. See [Create agents to manage brands](https://developers.google.com/business-communications/business-messages/guides/how-to/agents) for more information. */
	export interface BusinessMessagesLinkFormProperties {

		/** Required. Agent ID from Business Messages to link to the Merchant Center account. The Agent ID can be found in the [Business Communications Developer Console](https://developers.google.com/business-communications/business-messages/guides/concepts/developer-console#agent_selection). */
		agentId: FormControl<string | null | undefined>,

		/** Output only. Immutable. The ID uniquely identifying each `BusinessMessagesLink`. */
		businessMessagesLinkId: FormControl<string | null | undefined>,
	}
	export function CreateBusinessMessagesLinkFormGroup() {
		return new FormGroup<BusinessMessagesLinkFormProperties>({
			agentId: new FormControl<string | null | undefined>(undefined),
			businessMessagesLinkId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the GetProgramStatus method. */
	export interface BuyOnGoogleProgramStatus {

		/** The business models in which merchant participates. */
		businessModel?: Array<string>;

		/** The customer service pending email. After verification this field becomes empty. */
		customerServicePendingEmail?: string | null;

		/** The pending phone number specified for BuyOnGoogle program. It might be different than account level phone number. In order to update this field the customer_service_pending_phone_region_code must also be set. After verification this field becomes empty. */
		customerServicePendingPhoneNumber?: string | null;

		/** Two letter country code for the pending phone number, for example `CA` for Canadian numbers. See the [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) officially assigned codes. In order to update this field the customer_service_pending_phone_number must also be set. After verification this field becomes empty. */
		customerServicePendingPhoneRegionCode?: string | null;

		/** Output only. The customer service verified email. */
		customerServiceVerifiedEmail?: string | null;

		/** Output only. The verified phone number specified for BuyOnGoogle program. It might be different than account level phone number. */
		customerServiceVerifiedPhoneNumber?: string | null;

		/** Output only. Two letter country code for the verified phone number, for example `CA` for Canadian numbers. See the [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) officially assigned codes. */
		customerServiceVerifiedPhoneRegionCode?: string | null;

		/** The channels through which the merchant is selling. */
		onlineSalesChannel?: BuyOnGoogleProgramStatusOnlineSalesChannel | null;

		/** Output only. The current participation stage for the program. */
		participationStage?: BuyOnGoogleProgramStatusParticipationStage | null;
	}

	/** Response message for the GetProgramStatus method. */
	export interface BuyOnGoogleProgramStatusFormProperties {

		/** The customer service pending email. After verification this field becomes empty. */
		customerServicePendingEmail: FormControl<string | null | undefined>,

		/** The pending phone number specified for BuyOnGoogle program. It might be different than account level phone number. In order to update this field the customer_service_pending_phone_region_code must also be set. After verification this field becomes empty. */
		customerServicePendingPhoneNumber: FormControl<string | null | undefined>,

		/** Two letter country code for the pending phone number, for example `CA` for Canadian numbers. See the [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) officially assigned codes. In order to update this field the customer_service_pending_phone_number must also be set. After verification this field becomes empty. */
		customerServicePendingPhoneRegionCode: FormControl<string | null | undefined>,

		/** Output only. The customer service verified email. */
		customerServiceVerifiedEmail: FormControl<string | null | undefined>,

		/** Output only. The verified phone number specified for BuyOnGoogle program. It might be different than account level phone number. */
		customerServiceVerifiedPhoneNumber: FormControl<string | null | undefined>,

		/** Output only. Two letter country code for the verified phone number, for example `CA` for Canadian numbers. See the [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) officially assigned codes. */
		customerServiceVerifiedPhoneRegionCode: FormControl<string | null | undefined>,

		/** The channels through which the merchant is selling. */
		onlineSalesChannel: FormControl<BuyOnGoogleProgramStatusOnlineSalesChannel | null | undefined>,

		/** Output only. The current participation stage for the program. */
		participationStage: FormControl<BuyOnGoogleProgramStatusParticipationStage | null | undefined>,
	}
	export function CreateBuyOnGoogleProgramStatusFormGroup() {
		return new FormGroup<BuyOnGoogleProgramStatusFormProperties>({
			customerServicePendingEmail: new FormControl<string | null | undefined>(undefined),
			customerServicePendingPhoneNumber: new FormControl<string | null | undefined>(undefined),
			customerServicePendingPhoneRegionCode: new FormControl<string | null | undefined>(undefined),
			customerServiceVerifiedEmail: new FormControl<string | null | undefined>(undefined),
			customerServiceVerifiedPhoneNumber: new FormControl<string | null | undefined>(undefined),
			customerServiceVerifiedPhoneRegionCode: new FormControl<string | null | undefined>(undefined),
			onlineSalesChannel: new FormControl<BuyOnGoogleProgramStatusOnlineSalesChannel | null | undefined>(undefined),
			participationStage: new FormControl<BuyOnGoogleProgramStatusParticipationStage | null | undefined>(undefined),
		});

	}

	export enum BuyOnGoogleProgramStatusOnlineSalesChannel { ONLINE_SALES_CHANNEL_UNSPECIFIED = 0, GOOGLE_EXCLUSIVE = 1, GOOGLE_AND_OTHER_WEBSITES = 2 }

	export enum BuyOnGoogleProgramStatusParticipationStage { PROGRAM_PARTICIPATION_STAGE_UNSPECIFIED = 0, NOT_ELIGIBLE = 1, ELIGIBLE = 2, ONBOARDING = 3, ELIGIBLE_FOR_REVIEW = 4, PENDING_REVIEW = 5, REVIEW_DISAPPROVED = 6, ACTIVE = 7, PAUSED = 8, DEPRECATED = 9 }


	/** Request message for the CaptureOrder method. */
	export interface CaptureOrderRequest {
	}

	/** Request message for the CaptureOrder method. */
	export interface CaptureOrderRequestFormProperties {
	}
	export function CreateCaptureOrderRequestFormGroup() {
		return new FormGroup<CaptureOrderRequestFormProperties>({
		});

	}


	/** Response message for the CaptureOrder method. */
	export interface CaptureOrderResponse {

		/** The status of the execution. Only defined if the request was successful. Acceptable values are: * "duplicate" * "executed" */
		executionStatus?: CaptureOrderResponseExecutionStatus | null;
	}

	/** Response message for the CaptureOrder method. */
	export interface CaptureOrderResponseFormProperties {

		/** The status of the execution. Only defined if the request was successful. Acceptable values are: * "duplicate" * "executed" */
		executionStatus: FormControl<CaptureOrderResponseExecutionStatus | null | undefined>,
	}
	export function CreateCaptureOrderResponseFormGroup() {
		return new FormGroup<CaptureOrderResponseFormProperties>({
			executionStatus: new FormControl<CaptureOrderResponseExecutionStatus | null | undefined>(undefined),
		});

	}

	export enum CaptureOrderResponseExecutionStatus { EXECUTION_STATUS_UNSPECIFIED = 0, EXECUTED = 1, DUPLICATE = 2 }

	export interface CarrierRate {

		/** Carrier service, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved through the `getSupportedCarriers` method. Required. */
		carrierName?: string | null;

		/** Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved through the `getSupportedCarriers` method. Required. */
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

		/** Carrier service, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved through the `getSupportedCarriers` method. Required. */
		carrierName: FormControl<string | null | undefined>,

		/** Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved through the `getSupportedCarriers` method. Required. */
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

		/** The CLDR country code of the carrier (for example, "US"). Always present. */
		country?: string | null;

		/** A list of services supported for EDD (Estimated Delivery Date) calculation. This is the list of valid values for WarehouseBasedDeliveryTime.carrierService. */
		eddServices?: Array<string>;

		/** The name of the carrier (for example, `"UPS"`). Always present. */
		name?: string | null;

		/** A list of supported services (for example, `"ground"`) for that carrier. Contains at least one service. This is the list of valid values for CarrierRate.carrierService. */
		services?: Array<string>;
	}
	export interface CarriersCarrierFormProperties {

		/** The CLDR country code of the carrier (for example, "US"). Always present. */
		country: FormControl<string | null | undefined>,

		/** The name of the carrier (for example, `"UPS"`). Always present. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCarriersCarrierFormGroup() {
		return new FormGroup<CarriersCarrierFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `CheckoutSettings` for a specific merchant ID. */
	export interface CheckoutSettings {

		/** Output only. The effective value of enrollment state for a given merchant ID. If account level settings are present then this value will be a copy of the account level settings. Otherwise, it will have the value of the parent account. */
		effectiveEnrollmentState?: CheckoutSettingsEffectiveEnrollmentState | null;

		/** Output only. The effective value of review state for a given merchant ID. If account level settings are present then this value will be a copy of the account level settings. Otherwise, it will have the value of the parent account. */
		effectiveReviewState?: CheckoutSettingsEffectiveReviewState | null;

		/** Specifications related to the `Checkout` URL. The `UriTemplate` is of the form `https://www.mystore.com/checkout?item_id={id}` where `{id}` will be automatically replaced with data from the merchant account with this attribute [offer_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.offer_id) */
		effectiveUriSettings?: UrlSettings;

		/** Output only. Reflects the merchant enrollment state in `Checkout` feature. */
		enrollmentState?: CheckoutSettingsEffectiveEnrollmentState | null;

		/** Required. The ID of the account. */
		merchantId?: string | null;

		/** Output only. Reflects the merchant review state in `Checkout` feature. This is set based on the data quality reviews of the URL provided by the merchant. A merchant with enrollment state as `ENROLLED` can be in the following review states: `IN_REVIEW`, `APPROVED` or `DISAPPROVED`. A merchant must be in an enrollment_state of `ENROLLED` before a review can begin for the merchant. */
		reviewState?: CheckoutSettingsEffectiveReviewState | null;

		/** Specifications related to the `Checkout` URL. The `UriTemplate` is of the form `https://www.mystore.com/checkout?item_id={id}` where `{id}` will be automatically replaced with data from the merchant account with this attribute [offer_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.offer_id) */
		uriSettings?: UrlSettings;
	}

	/** `CheckoutSettings` for a specific merchant ID. */
	export interface CheckoutSettingsFormProperties {

		/** Output only. The effective value of enrollment state for a given merchant ID. If account level settings are present then this value will be a copy of the account level settings. Otherwise, it will have the value of the parent account. */
		effectiveEnrollmentState: FormControl<CheckoutSettingsEffectiveEnrollmentState | null | undefined>,

		/** Output only. The effective value of review state for a given merchant ID. If account level settings are present then this value will be a copy of the account level settings. Otherwise, it will have the value of the parent account. */
		effectiveReviewState: FormControl<CheckoutSettingsEffectiveReviewState | null | undefined>,

		/** Output only. Reflects the merchant enrollment state in `Checkout` feature. */
		enrollmentState: FormControl<CheckoutSettingsEffectiveEnrollmentState | null | undefined>,

		/** Required. The ID of the account. */
		merchantId: FormControl<string | null | undefined>,

		/** Output only. Reflects the merchant review state in `Checkout` feature. This is set based on the data quality reviews of the URL provided by the merchant. A merchant with enrollment state as `ENROLLED` can be in the following review states: `IN_REVIEW`, `APPROVED` or `DISAPPROVED`. A merchant must be in an enrollment_state of `ENROLLED` before a review can begin for the merchant. */
		reviewState: FormControl<CheckoutSettingsEffectiveReviewState | null | undefined>,
	}
	export function CreateCheckoutSettingsFormGroup() {
		return new FormGroup<CheckoutSettingsFormProperties>({
			effectiveEnrollmentState: new FormControl<CheckoutSettingsEffectiveEnrollmentState | null | undefined>(undefined),
			effectiveReviewState: new FormControl<CheckoutSettingsEffectiveReviewState | null | undefined>(undefined),
			enrollmentState: new FormControl<CheckoutSettingsEffectiveEnrollmentState | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			reviewState: new FormControl<CheckoutSettingsEffectiveReviewState | null | undefined>(undefined),
		});

	}

	export enum CheckoutSettingsEffectiveEnrollmentState { CHECKOUT_ON_MERCHANT_ENROLLMENT_STATE_UNSPECIFIED = 0, INACTIVE = 1, ENROLLED = 2 }

	export enum CheckoutSettingsEffectiveReviewState { CHECKOUT_ON_MERCHANT_REVIEW_STATE_UNSPECIFIED = 0, IN_REVIEW = 1, APPROVED = 2, DISAPPROVED = 3 }


	/** Specifications related to the `Checkout` URL. The `UriTemplate` is of the form `https://www.mystore.com/checkout?item_id={id}` where `{id}` will be automatically replaced with data from the merchant account with this attribute [offer_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.offer_id) */
	export interface UrlSettings {

		/** URL template when the placeholders are expanded will redirect the buyer to the cart page on the merchant website with the selected item in cart. */
		cartUriTemplate?: string | null;

		/** URL template when the placeholders are expanded will redirect the buyer to the merchant checkout page with the item in the cart. */
		checkoutUriTemplate?: string | null;
	}

	/** Specifications related to the `Checkout` URL. The `UriTemplate` is of the form `https://www.mystore.com/checkout?item_id={id}` where `{id}` will be automatically replaced with data from the merchant account with this attribute [offer_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.offer_id) */
	export interface UrlSettingsFormProperties {

		/** URL template when the placeholders are expanded will redirect the buyer to the cart page on the merchant website with the selected item in cart. */
		cartUriTemplate: FormControl<string | null | undefined>,

		/** URL template when the placeholders are expanded will redirect the buyer to the merchant checkout page with the item in the cart. */
		checkoutUriTemplate: FormControl<string | null | undefined>,
	}
	export function CreateUrlSettingsFormGroup() {
		return new FormGroup<UrlSettingsFormProperties>({
			cartUriTemplate: new FormControl<string | null | undefined>(undefined),
			checkoutUriTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Product property for the Cloud Retail API. For example, properties for a TV product could be "Screen-Resolution" or "Screen-Size". */
	export interface CloudExportAdditionalProperties {

		/** Boolean value of the given property. For example for a TV product, "True" or "False" if the screen is UHD. */
		boolValue?: boolean | null;

		/** Float values of the given property. For example for a TV product 1.2345. Maximum number of specified values for this field is 400. Values are stored in an arbitrary but consistent order. */
		floatValue?: Array<number>;

		/** Integer values of the given property. For example, 1080 for a screen resolution of a TV product. Maximum number of specified values for this field is 400. Values are stored in an arbitrary but consistent order. */
		intValue?: Array<string>;

		/** Maximum float value of the given property. For example for a TV product 100.00. */
		maxValue?: number | null;

		/** Minimum float value of the given property. For example for a TV product 1.00. */
		minValue?: number | null;

		/** Name of the given property. For example, "Screen-Resolution" for a TV product. Maximum string size is 256 characters. */
		propertyName?: string | null;

		/** Text value of the given property. For example, "8K(UHD)" could be a text value for a TV product. Maximum number of specified values for this field is 400. Values are stored in an arbitrary but consistent order. Maximum string size is 256 characters. */
		textValue?: Array<string>;

		/** Unit of the given property. For example, "Pixels" for a TV product. Maximum string size is 256 bytes. */
		unitCode?: string | null;
	}

	/** Product property for the Cloud Retail API. For example, properties for a TV product could be "Screen-Resolution" or "Screen-Size". */
	export interface CloudExportAdditionalPropertiesFormProperties {

		/** Boolean value of the given property. For example for a TV product, "True" or "False" if the screen is UHD. */
		boolValue: FormControl<boolean | null | undefined>,

		/** Maximum float value of the given property. For example for a TV product 100.00. */
		maxValue: FormControl<number | null | undefined>,

		/** Minimum float value of the given property. For example for a TV product 1.00. */
		minValue: FormControl<number | null | undefined>,

		/** Name of the given property. For example, "Screen-Resolution" for a TV product. Maximum string size is 256 characters. */
		propertyName: FormControl<string | null | undefined>,

		/** Unit of the given property. For example, "Pixels" for a TV product. Maximum string size is 256 bytes. */
		unitCode: FormControl<string | null | undefined>,
	}
	export function CreateCloudExportAdditionalPropertiesFormGroup() {
		return new FormGroup<CloudExportAdditionalPropertiesFormProperties>({
			boolValue: new FormControl<boolean | null | undefined>(undefined),
			maxValue: new FormControl<number | null | undefined>(undefined),
			minValue: new FormControl<number | null | undefined>(undefined),
			propertyName: new FormControl<string | null | undefined>(undefined),
			unitCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The collection message. */
	export interface Collection {

		/** Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. [Custom label](https://support.google.com/merchants/answer/9674217) */
		customLabel0?: string | null;

		/** Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. */
		customLabel1?: string | null;

		/** Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. */
		customLabel2?: string | null;

		/** Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. */
		customLabel3?: string | null;

		/** Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. */
		customLabel4?: string | null;

		/** This identifies one or more products associated with the collection. Used as a lookup to the corresponding product ID in your product feeds. Provide a maximum of 100 featuredProduct (for collections). Provide up to 10 featuredProduct (for Shoppable Images only) with ID and X and Y coordinates. [featured_product attribute](https://support.google.com/merchants/answer/9703736) */
		featuredProduct?: Array<CollectionFeaturedProduct>;

		/** Your collection's name. [headline attribute](https://support.google.com/merchants/answer/9673580) */
		headline?: Array<string>;

		/** Required. The REST ID of the collection. Content API methods that operate on collections take this as their collectionId parameter. The REST ID for a collection is of the form collectionId. [id attribute](https://support.google.com/merchants/answer/9649290) */
		id?: string | null;

		/** The URL of a collection’s image. [image_link attribute](https://support.google.com/merchants/answer/9703236) */
		imageLink?: Array<string>;

		/** The language of a collection and the language of any featured products linked to the collection. [language attribute](https://support.google.com/merchants/answer/9673781) */
		language?: string | null;

		/** A collection’s landing page. URL directly linking to your collection's page on your website. [link attribute](https://support.google.com/merchants/answer/9673983) */
		link?: string | null;

		/** A collection’s mobile-optimized landing page when you have a different URL for mobile and desktop traffic. [mobile_link attribute](https://support.google.com/merchants/answer/9646123) */
		mobileLink?: string | null;

		/** [product_country attribute](https://support.google.com/merchants/answer/9674155) */
		productCountry?: string | null;
	}

	/** The collection message. */
	export interface CollectionFormProperties {

		/** Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. [Custom label](https://support.google.com/merchants/answer/9674217) */
		customLabel0: FormControl<string | null | undefined>,

		/** Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. */
		customLabel1: FormControl<string | null | undefined>,

		/** Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. */
		customLabel2: FormControl<string | null | undefined>,

		/** Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. */
		customLabel3: FormControl<string | null | undefined>,

		/** Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. */
		customLabel4: FormControl<string | null | undefined>,

		/** Required. The REST ID of the collection. Content API methods that operate on collections take this as their collectionId parameter. The REST ID for a collection is of the form collectionId. [id attribute](https://support.google.com/merchants/answer/9649290) */
		id: FormControl<string | null | undefined>,

		/** The language of a collection and the language of any featured products linked to the collection. [language attribute](https://support.google.com/merchants/answer/9673781) */
		language: FormControl<string | null | undefined>,

		/** A collection’s landing page. URL directly linking to your collection's page on your website. [link attribute](https://support.google.com/merchants/answer/9673983) */
		link: FormControl<string | null | undefined>,

		/** A collection’s mobile-optimized landing page when you have a different URL for mobile and desktop traffic. [mobile_link attribute](https://support.google.com/merchants/answer/9646123) */
		mobileLink: FormControl<string | null | undefined>,

		/** [product_country attribute](https://support.google.com/merchants/answer/9674155) */
		productCountry: FormControl<string | null | undefined>,
	}
	export function CreateCollectionFormGroup() {
		return new FormGroup<CollectionFormProperties>({
			customLabel0: new FormControl<string | null | undefined>(undefined),
			customLabel1: new FormControl<string | null | undefined>(undefined),
			customLabel2: new FormControl<string | null | undefined>(undefined),
			customLabel3: new FormControl<string | null | undefined>(undefined),
			customLabel4: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			mobileLink: new FormControl<string | null | undefined>(undefined),
			productCountry: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The message for FeaturedProduct. [FeaturedProduct](https://support.google.com/merchants/answer/9703736) */
	export interface CollectionFeaturedProduct {

		/** The unique identifier for the product item. */
		offerId?: string | null;

		/** Required. X-coordinate of the product callout on the Shoppable Image. */
		x?: number | null;

		/** Required. Y-coordinate of the product callout on the Shoppable Image. */
		y?: number | null;
	}

	/** The message for FeaturedProduct. [FeaturedProduct](https://support.google.com/merchants/answer/9703736) */
	export interface CollectionFeaturedProductFormProperties {

		/** The unique identifier for the product item. */
		offerId: FormControl<string | null | undefined>,

		/** Required. X-coordinate of the product callout on the Shoppable Image. */
		x: FormControl<number | null | undefined>,

		/** Required. Y-coordinate of the product callout on the Shoppable Image. */
		y: FormControl<number | null | undefined>,
	}
	export function CreateCollectionFeaturedProductFormGroup() {
		return new FormGroup<CollectionFeaturedProductFormProperties>({
			offerId: new FormControl<string | null | undefined>(undefined),
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The collectionstatus message. */
	export interface CollectionStatus {

		/** A list of all issues associated with the collection. */
		collectionLevelIssuses?: Array<CollectionStatusItemLevelIssue>;

		/** Date on which the collection has been created in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z" */
		creationDate?: string | null;

		/** The intended destinations for the collection. */
		destinationStatuses?: Array<CollectionStatusDestinationStatus>;

		/** Required. The ID of the collection for which status is reported. */
		id?: string | null;

		/** Date on which the collection has been last updated in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z" */
		lastUpdateDate?: string | null;
	}

	/** The collectionstatus message. */
	export interface CollectionStatusFormProperties {

		/** Date on which the collection has been created in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z" */
		creationDate: FormControl<string | null | undefined>,

		/** Required. The ID of the collection for which status is reported. */
		id: FormControl<string | null | undefined>,

		/** Date on which the collection has been last updated in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z" */
		lastUpdateDate: FormControl<string | null | undefined>,
	}
	export function CreateCollectionStatusFormGroup() {
		return new FormGroup<CollectionStatusFormProperties>({
			creationDate: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastUpdateDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Issue associated with the collection. */
	export interface CollectionStatusItemLevelIssue {

		/** Country codes (ISO 3166-1 alpha-2) where issue applies to the offer. */
		applicableCountries?: Array<string>;

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

		/** How this issue affects the serving of the collection. */
		servability?: string | null;
	}

	/** Issue associated with the collection. */
	export interface CollectionStatusItemLevelIssueFormProperties {

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

		/** How this issue affects the serving of the collection. */
		servability: FormControl<string | null | undefined>,
	}
	export function CreateCollectionStatusItemLevelIssueFormGroup() {
		return new FormGroup<CollectionStatusItemLevelIssueFormProperties>({
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


	/** Destination status message. */
	export interface CollectionStatusDestinationStatus {

		/** Country codes (ISO 3166-1 alpha-2) where the collection is approved. */
		approvedCountries?: Array<string>;

		/** The name of the destination */
		destination?: string | null;

		/** Country codes (ISO 3166-1 alpha-2) where the collection is disapproved. */
		disapprovedCountries?: Array<string>;

		/** Country codes (ISO 3166-1 alpha-2) where the collection is pending approval. */
		pendingCountries?: Array<string>;

		/** The status for the specified destination in the collections target country. */
		status?: string | null;
	}

	/** Destination status message. */
	export interface CollectionStatusDestinationStatusFormProperties {

		/** The name of the destination */
		destination: FormControl<string | null | undefined>,

		/** The status for the specified destination in the collections target country. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateCollectionStatusDestinationStatusFormGroup() {
		return new FormGroup<CollectionStatusDestinationStatusFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Fields related to [competitive visibility reports] (https://support.google.com/merchants/answer/11366442). */
	export interface CompetitiveVisibility {

		/** [Ads / organic ratio] (https://support.google.com/merchants/answer/11366442#zippy=%2Cadsfree-ratio) shows how often a merchant receives impressions from Shopping ads compared to organic traffic. The number is rounded and bucketed. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
		adsOrganicRatio?: number | null;

		/** Change in visibility based on impressions with respect to the start of the selected time range (or first day with non-zero impressions) for a combined set of merchants with highest visibility approximating the market. Available only in `CompetitiveVisibilityBenchmarkView`. Cannot be filtered on in the 'WHERE' clause. */
		categoryBenchmarkVisibilityTrend?: number | null;

		/** Google product category ID to calculate the report for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). Required in the `SELECT` clause. A `WHERE` condition on `competitive_visibility.category_id` is required in the query. */
		categoryId?: string | null;

		/** The country where impression appeared. Required in the `SELECT` clause. A `WHERE` condition on `competitive_visibility.country_code` is required in the query. */
		countryCode?: string | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		date?: Date;

		/** Domain of your competitor or your domain, if 'is_your_domain' is true. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Required in the `SELECT` clause for `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
		domain?: string | null;

		/** Higher position rate shows how often a competitor’s offer got placed in a higher position on the page than your offer. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
		higherPositionRate?: number | null;

		/** True if this row contains data for your domain. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
		isYourDomain?: boolean | null;

		/** Page overlap rate describes how frequently competing retailers’ offers are shown together with your offers on the same page. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
		pageOverlapRate?: number | null;

		/** Position of the domain in the top merchants ranking for the selected keys (`date`, `category_id`, `country_code`, `listing_type`) based on impressions. 1 is the highest. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
		rank?: string | null;

		/** Relative visibility shows how often your competitors’ offers are shown compared to your offers. In other words, this is the number of displayed impressions of a competitor retailer divided by the number of your displayed impressions during a selected time range for a selected product category and country. Available only in `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
		relativeVisibility?: number | null;

		/** Type of impression listing. Required in the `SELECT` clause. Cannot be filtered on in the 'WHERE' clause. */
		trafficSource?: CompetitiveVisibilityTrafficSource | null;

		/** Change in visibility based on impressions for your domain with respect to the start of the selected time range (or first day with non-zero impressions). Available only in `CompetitiveVisibilityBenchmarkView`. Cannot be filtered on in the 'WHERE' clause. */
		yourDomainVisibilityTrend?: number | null;
	}

	/** Fields related to [competitive visibility reports] (https://support.google.com/merchants/answer/11366442). */
	export interface CompetitiveVisibilityFormProperties {

		/** [Ads / organic ratio] (https://support.google.com/merchants/answer/11366442#zippy=%2Cadsfree-ratio) shows how often a merchant receives impressions from Shopping ads compared to organic traffic. The number is rounded and bucketed. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
		adsOrganicRatio: FormControl<number | null | undefined>,

		/** Change in visibility based on impressions with respect to the start of the selected time range (or first day with non-zero impressions) for a combined set of merchants with highest visibility approximating the market. Available only in `CompetitiveVisibilityBenchmarkView`. Cannot be filtered on in the 'WHERE' clause. */
		categoryBenchmarkVisibilityTrend: FormControl<number | null | undefined>,

		/** Google product category ID to calculate the report for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). Required in the `SELECT` clause. A `WHERE` condition on `competitive_visibility.category_id` is required in the query. */
		categoryId: FormControl<string | null | undefined>,

		/** The country where impression appeared. Required in the `SELECT` clause. A `WHERE` condition on `competitive_visibility.country_code` is required in the query. */
		countryCode: FormControl<string | null | undefined>,

		/** Domain of your competitor or your domain, if 'is_your_domain' is true. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Required in the `SELECT` clause for `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
		domain: FormControl<string | null | undefined>,

		/** Higher position rate shows how often a competitor’s offer got placed in a higher position on the page than your offer. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
		higherPositionRate: FormControl<number | null | undefined>,

		/** True if this row contains data for your domain. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
		isYourDomain: FormControl<boolean | null | undefined>,

		/** Page overlap rate describes how frequently competing retailers’ offers are shown together with your offers on the same page. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
		pageOverlapRate: FormControl<number | null | undefined>,

		/** Position of the domain in the top merchants ranking for the selected keys (`date`, `category_id`, `country_code`, `listing_type`) based on impressions. 1 is the highest. Available only in `CompetitiveVisibilityTopMerchantView` and `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
		rank: FormControl<string | null | undefined>,

		/** Relative visibility shows how often your competitors’ offers are shown compared to your offers. In other words, this is the number of displayed impressions of a competitor retailer divided by the number of your displayed impressions during a selected time range for a selected product category and country. Available only in `CompetitiveVisibilityCompetitorView`. Cannot be filtered on in the 'WHERE' clause. */
		relativeVisibility: FormControl<number | null | undefined>,

		/** Type of impression listing. Required in the `SELECT` clause. Cannot be filtered on in the 'WHERE' clause. */
		trafficSource: FormControl<CompetitiveVisibilityTrafficSource | null | undefined>,

		/** Change in visibility based on impressions for your domain with respect to the start of the selected time range (or first day with non-zero impressions). Available only in `CompetitiveVisibilityBenchmarkView`. Cannot be filtered on in the 'WHERE' clause. */
		yourDomainVisibilityTrend: FormControl<number | null | undefined>,
	}
	export function CreateCompetitiveVisibilityFormGroup() {
		return new FormGroup<CompetitiveVisibilityFormProperties>({
			adsOrganicRatio: new FormControl<number | null | undefined>(undefined),
			categoryBenchmarkVisibilityTrend: new FormControl<number | null | undefined>(undefined),
			categoryId: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			higherPositionRate: new FormControl<number | null | undefined>(undefined),
			isYourDomain: new FormControl<boolean | null | undefined>(undefined),
			pageOverlapRate: new FormControl<number | null | undefined>(undefined),
			rank: new FormControl<string | null | undefined>(undefined),
			relativeVisibility: new FormControl<number | null | undefined>(undefined),
			trafficSource: new FormControl<CompetitiveVisibilityTrafficSource | null | undefined>(undefined),
			yourDomainVisibilityTrend: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CompetitiveVisibilityTrafficSource { UNKNOWN = 0, ORGANIC = 1, ADS = 2, ALL = 3 }


	/** Represents a conversion source owned by a Merchant account. A merchant account can have up to 200 conversion sources. */
	export interface ConversionSource {

		/** Output only. Generated by the Content API upon creation of a new `ConversionSource`. Format: [a-z]{4}:.+ The four characters before the colon represent the type of conversio source. Content after the colon represents the ID of the conversion source within that type. The ID of two different conversion sources might be the same across different types. The following type prefixes are supported: - galk: For GoogleAnalyticsLink sources. - mcdn: For MerchantCenterDestination sources. */
		conversionSourceId?: string | null;

		/** Output only. The time when an archived conversion source becomes permanently deleted and is no longer available to undelete. */
		expireTime?: string | null;

		/** "Google Analytics Link" sources can be used to get conversion data from an existing Google Analytics property into the linked Merchant Center account. */
		googleAnalyticsLink?: GoogleAnalyticsLink;

		/** "Merchant Center Destination" sources can be used to send conversion events from a website using a Google tag directly to a Merchant Center account where the source is created. */
		merchantCenterDestination?: MerchantCenterDestination;

		/** Output only. Current state of this conversion source. Can't be edited through the API. */
		state?: ConversionSourceState | null;
	}

	/** Represents a conversion source owned by a Merchant account. A merchant account can have up to 200 conversion sources. */
	export interface ConversionSourceFormProperties {

		/** Output only. Generated by the Content API upon creation of a new `ConversionSource`. Format: [a-z]{4}:.+ The four characters before the colon represent the type of conversio source. Content after the colon represents the ID of the conversion source within that type. The ID of two different conversion sources might be the same across different types. The following type prefixes are supported: - galk: For GoogleAnalyticsLink sources. - mcdn: For MerchantCenterDestination sources. */
		conversionSourceId: FormControl<string | null | undefined>,

		/** Output only. The time when an archived conversion source becomes permanently deleted and is no longer available to undelete. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. Current state of this conversion source. Can't be edited through the API. */
		state: FormControl<ConversionSourceState | null | undefined>,
	}
	export function CreateConversionSourceFormGroup() {
		return new FormGroup<ConversionSourceFormProperties>({
			conversionSourceId: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ConversionSourceState | null | undefined>(undefined),
		});

	}


	/** "Google Analytics Link" sources can be used to get conversion data from an existing Google Analytics property into the linked Merchant Center account. */
	export interface GoogleAnalyticsLink {

		/** Represents attribution settings for conversion sources receiving pre-attribution data. */
		attributionSettings?: AttributionSettings;

		/** Required. Immutable. ID of the Google Analytics property the merchant is linked to. */
		propertyId?: string | null;

		/** Output only. Name of the Google Analytics property the merchant is linked to. */
		propertyName?: string | null;
	}

	/** "Google Analytics Link" sources can be used to get conversion data from an existing Google Analytics property into the linked Merchant Center account. */
	export interface GoogleAnalyticsLinkFormProperties {

		/** Required. Immutable. ID of the Google Analytics property the merchant is linked to. */
		propertyId: FormControl<string | null | undefined>,

		/** Output only. Name of the Google Analytics property the merchant is linked to. */
		propertyName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAnalyticsLinkFormGroup() {
		return new FormGroup<GoogleAnalyticsLinkFormProperties>({
			propertyId: new FormControl<string | null | undefined>(undefined),
			propertyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** "Merchant Center Destination" sources can be used to send conversion events from a website using a Google tag directly to a Merchant Center account where the source is created. */
	export interface MerchantCenterDestination {

		/** Represents attribution settings for conversion sources receiving pre-attribution data. */
		attributionSettings?: AttributionSettings;

		/** Required. Three-letter currency code (ISO 4217). The currency code defines in which currency the conversions sent to this destination will be reported in Merchant Center. */
		currencyCode?: string | null;

		/** Output only. Merchant Center Destination ID. */
		destinationId?: string | null;

		/** Required. Merchant-specified display name for the destination. This is the name that identifies the conversion source within the Merchant Center UI. Limited to 64 characters. */
		displayName?: string | null;
	}

	/** "Merchant Center Destination" sources can be used to send conversion events from a website using a Google tag directly to a Merchant Center account where the source is created. */
	export interface MerchantCenterDestinationFormProperties {

		/** Required. Three-letter currency code (ISO 4217). The currency code defines in which currency the conversions sent to this destination will be reported in Merchant Center. */
		currencyCode: FormControl<string | null | undefined>,

		/** Output only. Merchant Center Destination ID. */
		destinationId: FormControl<string | null | undefined>,

		/** Required. Merchant-specified display name for the destination. This is the name that identifies the conversion source within the Merchant Center UI. Limited to 64 characters. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateMerchantCenterDestinationFormGroup() {
		return new FormGroup<MerchantCenterDestinationFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			destinationId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConversionSourceState { STATE_UNSPECIFIED = 0, ACTIVE = 1, ARCHIVED = 2, PENDING = 3 }


	/** Information about CSS domain. */
	export interface Css {

		/** Output only. Immutable. The CSS domain ID. */
		cssDomainId?: string | null;

		/** Output only. Immutable. The ID of the CSS group this CSS domain is affiliated with. Only populated for CSS group users. */
		cssGroupId?: string | null;

		/** Output only. Immutable. The CSS domain's display name, used when space is constrained. */
		displayName?: string | null;

		/** Output only. Immutable. The CSS domain's full name. */
		fullName?: string | null;

		/** Output only. Immutable. The CSS domain's homepage. */
		homepageUri?: string | null;

		/** A list of label IDs that are assigned to this CSS domain by its CSS group. Only populated for CSS group users. */
		labelIds?: Array<string>;
	}

	/** Information about CSS domain. */
	export interface CssFormProperties {

		/** Output only. Immutable. The CSS domain ID. */
		cssDomainId: FormControl<string | null | undefined>,

		/** Output only. Immutable. The ID of the CSS group this CSS domain is affiliated with. Only populated for CSS group users. */
		cssGroupId: FormControl<string | null | undefined>,

		/** Output only. Immutable. The CSS domain's display name, used when space is constrained. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Immutable. The CSS domain's full name. */
		fullName: FormControl<string | null | undefined>,

		/** Output only. Immutable. The CSS domain's homepage. */
		homepageUri: FormControl<string | null | undefined>,
	}
	export function CreateCssFormGroup() {
		return new FormGroup<CssFormProperties>({
			cssDomainId: new FormControl<string | null | undefined>(undefined),
			cssGroupId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			homepageUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A message that represents custom attributes. Exactly one of `value` or `groupValues` must be provided. Maximum allowed number of characters for each custom attribute is 10240 (represents sum of characters for name and value). Maximum 2500 custom attributes can be set per merchant, with total size of 102.4kB. */
	export interface CustomAttribute {

		/** Subattributes within this attribute group. Exactly one of value or groupValues must be provided. */
		groupValues?: Array<CustomAttribute>;

		/** The name of the attribute. Underscores will be replaced by spaces upon insertion. */
		name?: string | null;

		/** The value of the attribute. */
		value?: string | null;
	}

	/** A message that represents custom attributes. Exactly one of `value` or `groupValues` must be provided. Maximum allowed number of characters for each custom attribute is 10240 (represents sum of characters for name and value). Maximum 2500 custom attributes can be set per merchant, with total size of 102.4kB. */
	export interface CustomAttributeFormProperties {

		/** The name of the attribute. Underscores will be replaced by spaces upon insertion. */
		name: FormControl<string | null | undefined>,

		/** The value of the attribute. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCustomAttributeFormGroup() {
		return new FormGroup<CustomAttributeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
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

		/** Timezone identifier for the cutoff time (for example, "Europe/Zurich"). List of identifiers. Required. */
		timezone?: string | null;
	}
	export interface CutoffTimeFormProperties {

		/** Hour of the cutoff time until which an order has to be placed to be processed in the same day. Required. */
		hour: FormControl<number | null | undefined>,

		/** Minute of the cutoff time until which an order has to be placed to be processed in the same day. Required. */
		minute: FormControl<number | null | undefined>,

		/** Timezone identifier for the cutoff time (for example, "Europe/Zurich"). List of identifiers. Required. */
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

		/** Required. The type of data feed. For product inventory feeds, only feeds for local stores, not online stores, are supported. Acceptable values are: - "`local products`" - "`product inventory`" - "`products`" */
		contentType?: string | null;

		/** The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required. */
		fetchSchedule?: DatafeedFetchSchedule;

		/** Required. The filename of the feed. All feeds must have a unique file name. */
		fileName?: string | null;
		format?: DatafeedFormat;

		/** Required for update. The ID of the data feed. */
		id?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#datafeed`" */
		kind?: string | null;

		/** Required for insert. A descriptive name of the data feed. */
		name?: string | null;

		/** The targets this feed should apply to (country, language, destinations). */
		targets?: Array<DatafeedTarget>;
	}

	/** Datafeed configuration data. */
	export interface DatafeedFormProperties {

		/** The two-letter ISO 639-1 language in which the attributes are defined in the data feed. */
		attributeLanguage: FormControl<string | null | undefined>,

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
	}
	export function CreateDatafeedFormGroup() {
		return new FormGroup<DatafeedFormProperties>({
			attributeLanguage: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			fileName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
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

		/** Time zone used for schedule. UTC by default. For example, "America/Los_Angeles". */
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

		/** Time zone used for schedule. UTC by default. For example, "America/Los_Angeles". */
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

		/** Deprecated. Use `feedLabel` instead. The country where the items in the feed will be included in the search index, represented as a CLDR territory code. */
		country?: string | null;

		/** The list of destinations to exclude for this target (corresponds to cleared check boxes in Merchant Center). Products that are excluded from all destinations for more than 7 days are automatically deleted. */
		excludedDestinations?: Array<string>;

		/** Feed label for the DatafeedTarget. Either `country` or `feedLabel` is required. If both `feedLabel` and `country` is specified, the values must match. Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-). */
		feedLabel?: string | null;

		/** The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`. */
		includedDestinations?: Array<string>;

		/** The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targets[].country`. */
		language?: string | null;

		/** The countries where the items may be displayed. Represented as a CLDR territory code. Will be ignored for "product inventory" feeds. */
		targetCountries?: Array<string>;
	}
	export interface DatafeedTargetFormProperties {

		/** Deprecated. Use `feedLabel` instead. The country where the items in the feed will be included in the search index, represented as a CLDR territory code. */
		country: FormControl<string | null | undefined>,

		/** Feed label for the DatafeedTarget. Either `country` or `feedLabel` is required. If both `feedLabel` and `country` is specified, the values must match. Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-). */
		feedLabel: FormControl<string | null | undefined>,

		/** The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targets[].country`. */
		language: FormControl<string | null | undefined>,
	}
	export function CreateDatafeedTargetFormGroup() {
		return new FormGroup<DatafeedTargetFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			feedLabel: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of a datafeed, that is, the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished. */
	export interface DatafeedStatus {

		/** The country for which the status is reported, represented as a CLDR territory code. */
		country?: string | null;

		/** The ID of the feed for which the status is reported. */
		datafeedId?: string | null;

		/** The list of errors occurring in the feed. */
		errors?: Array<DatafeedStatusError>;

		/** The feed label status is reported for. */
		feedLabel?: string | null;

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

	/** The status of a datafeed, that is, the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished. */
	export interface DatafeedStatusFormProperties {

		/** The country for which the status is reported, represented as a CLDR territory code. */
		country: FormControl<string | null | undefined>,

		/** The ID of the feed for which the status is reported. */
		datafeedId: FormControl<string | null | undefined>,

		/** The feed label status is reported for. */
		feedLabel: FormControl<string | null | undefined>,

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
			feedLabel: new FormControl<string | null | undefined>(undefined),
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

		/** The code of the error, for example, "validation/invalid_value". */
		code?: string | null;

		/** The number of occurrences of the error in the feed. */
		count?: string | null;

		/** A list of example occurrences of the error, grouped by product. */
		examples?: Array<DatafeedStatusExample>;

		/** The error message, for example, "Invalid price". */
		message?: string | null;
	}

	/** An error occurring in the feed, like "invalid price". */
	export interface DatafeedStatusErrorFormProperties {

		/** The code of the error, for example, "validation/invalid_value". */
		code: FormControl<string | null | undefined>,

		/** The number of occurrences of the error in the feed. */
		count: FormControl<string | null | undefined>,

		/** The error message, for example, "Invalid price". */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#datafeedsCustomBatchResponse`". */
		kind?: string | null;
	}
	export interface DatafeedsCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#datafeedsCustomBatchResponse`". */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#datafeedsFetchNowResponse`". */
		kind?: string | null;
	}
	export interface DatafeedsFetchNowResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#datafeedsFetchNowResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDatafeedsFetchNowResponseFormGroup() {
		return new FormGroup<DatafeedsFetchNowResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatafeedsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#datafeedsListResponse`". */
		kind?: string | null;

		/** The token for the retrieval of the next page of datafeeds. */
		nextPageToken?: string | null;
		resources?: Array<Datafeed>;
	}
	export interface DatafeedsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#datafeedsListResponse`". */
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

		/** Deprecated. Use `feedLabel` instead. The country to get the datafeed status for. If this parameter is provided, then `language` must also be provided. Note that for multi-target datafeeds this parameter is required. */
		country?: string | null;

		/** The ID of the data feed to get. */
		datafeedId?: string | null;

		/** The feed label to get the datafeed status for. If this parameter is provided, then `language` must also be provided. Note that for multi-target datafeeds this parameter is required. */
		feedLabel?: string | null;

		/** The language to get the datafeed status for. If this parameter is provided then `country` must also be provided. Note that for multi-target datafeeds this parameter is required. */
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

		/** Deprecated. Use `feedLabel` instead. The country to get the datafeed status for. If this parameter is provided, then `language` must also be provided. Note that for multi-target datafeeds this parameter is required. */
		country: FormControl<string | null | undefined>,

		/** The ID of the data feed to get. */
		datafeedId: FormControl<string | null | undefined>,

		/** The feed label to get the datafeed status for. If this parameter is provided, then `language` must also be provided. Note that for multi-target datafeeds this parameter is required. */
		feedLabel: FormControl<string | null | undefined>,

		/** The language to get the datafeed status for. If this parameter is provided then `country` must also be provided. Note that for multi-target datafeeds this parameter is required. */
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
			feedLabel: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatafeedstatusesCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<DatafeedstatusesCustomBatchResponseEntry>;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#datafeedstatusesCustomBatchResponse`". */
		kind?: string | null;
	}
	export interface DatafeedstatusesCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#datafeedstatusesCustomBatchResponse`". */
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

		/** The status of a datafeed, that is, the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished. */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#datafeedstatusesListResponse`". */
		kind?: string | null;

		/** The token for the retrieval of the next page of datafeed statuses. */
		nextPageToken?: string | null;
		resources?: Array<DatafeedStatus>;
	}
	export interface DatafeedstatusesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#datafeedstatusesListResponse`". */
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


	/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
	export interface DateTime {

		/** Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. */
		day?: number | null;

		/** Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours?: number | null;

		/** Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. */
		minutes?: number | null;

		/** Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. */
		month?: number | null;

		/** Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. */
		nanos?: number | null;

		/** Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. */
		seconds?: number | null;

		/** Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). */
		timeZone?: TimeZone;

		/** UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. */
		utcOffset?: string | null;

		/** Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. */
		year?: number | null;
	}

	/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
	export interface DateTimeFormProperties {

		/** Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. */
		day: FormControl<number | null | undefined>,

		/** Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours: FormControl<number | null | undefined>,

		/** Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. */
		minutes: FormControl<number | null | undefined>,

		/** Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. */
		month: FormControl<number | null | undefined>,

		/** Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. */
		nanos: FormControl<number | null | undefined>,

		/** Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. */
		seconds: FormControl<number | null | undefined>,

		/** UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. */
		utcOffset: FormControl<string | null | undefined>,

		/** Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateTimeFormGroup() {
		return new FormGroup<DateTimeFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			hours: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
			utcOffset: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). */
	export interface TimeZone {

		/** IANA Time Zone Database time zone, e.g. "America/New_York". */
		id?: string | null;

		/** Optional. IANA Time Zone Database version number, e.g. "2019a". */
		version?: string | null;
	}

	/** Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). */
	export interface TimeZoneFormProperties {

		/** IANA Time Zone Database time zone, e.g. "America/New_York". */
		id: FormControl<string | null | undefined>,

		/** Optional. IANA Time Zone Database version number, e.g. "2019a". */
		version: FormControl<string | null | undefined>,
	}
	export function CreateTimeZoneFormGroup() {
		return new FormGroup<TimeZoneFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A delivery area for the product. Only one of `countryCode` or `postalCodeRange` must be set. */
	export interface DeliveryArea {

		/** Required. The country that the product can be delivered to. Submit a [unicode CLDR region](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) such as `US` or `CH`. */
		countryCode?: string | null;

		/** A range of postal codes that defines the delivery area. Only set `firstPostalCode` when specifying a single postal code. */
		postalCodeRange?: DeliveryAreaPostalCodeRange;

		/** A state, territory, or prefecture. This is supported for the United States, Australia, and Japan. Provide a subdivision code from the ISO 3166-2 code tables ([US](https://en.wikipedia.org/wiki/ISO_3166-2:US), [AU](https://en.wikipedia.org/wiki/ISO_3166-2:AU), or [JP](https://en.wikipedia.org/wiki/ISO_3166-2:JP)) without country prefix (for example, `"NY"`, `"NSW"`, `"03"`). */
		regionCode?: string | null;
	}

	/** A delivery area for the product. Only one of `countryCode` or `postalCodeRange` must be set. */
	export interface DeliveryAreaFormProperties {

		/** Required. The country that the product can be delivered to. Submit a [unicode CLDR region](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) such as `US` or `CH`. */
		countryCode: FormControl<string | null | undefined>,

		/** A state, territory, or prefecture. This is supported for the United States, Australia, and Japan. Provide a subdivision code from the ISO 3166-2 code tables ([US](https://en.wikipedia.org/wiki/ISO_3166-2:US), [AU](https://en.wikipedia.org/wiki/ISO_3166-2:AU), or [JP](https://en.wikipedia.org/wiki/ISO_3166-2:JP)) without country prefix (for example, `"NY"`, `"NSW"`, `"03"`). */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryAreaFormGroup() {
		return new FormGroup<DeliveryAreaFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A range of postal codes that defines the delivery area. Only set `firstPostalCode` when specifying a single postal code. */
	export interface DeliveryAreaPostalCodeRange {

		/** Required. A postal code or a pattern of the form prefix* denoting the inclusive lower bound of the range defining the area. Examples values: `"94108"`, `"9410*"`, `"9*"`. */
		firstPostalCode?: string | null;

		/** A postal code or a pattern of the form prefix* denoting the inclusive upper bound of the range defining the area (for example [070* - 078*] results in the range [07000 - 07899]). It must have the same length as `firstPostalCode`: if `firstPostalCode` is a postal code then `lastPostalCode` must be a postal code too; if firstPostalCode is a pattern then `lastPostalCode` must be a pattern with the same prefix length. Ignored if not set, then the area is defined as being all the postal codes matching `firstPostalCode`. */
		lastPostalCode?: string | null;
	}

	/** A range of postal codes that defines the delivery area. Only set `firstPostalCode` when specifying a single postal code. */
	export interface DeliveryAreaPostalCodeRangeFormProperties {

		/** Required. A postal code or a pattern of the form prefix* denoting the inclusive lower bound of the range defining the area. Examples values: `"94108"`, `"9410*"`, `"9*"`. */
		firstPostalCode: FormControl<string | null | undefined>,

		/** A postal code or a pattern of the form prefix* denoting the inclusive upper bound of the range defining the area (for example [070* - 078*] results in the range [07000 - 07899]). It must have the same length as `firstPostalCode`: if `firstPostalCode` is a postal code then `lastPostalCode` must be a postal code too; if firstPostalCode is a pattern then `lastPostalCode` must be a pattern with the same prefix length. Ignored if not set, then the area is defined as being all the postal codes matching `firstPostalCode`. */
		lastPostalCode: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryAreaPostalCodeRangeFormGroup() {
		return new FormGroup<DeliveryAreaPostalCodeRangeFormProperties>({
			firstPostalCode: new FormControl<string | null | undefined>(undefined),
			lastPostalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeliveryTime {
		cutoffTime?: CutoffTime;
		handlingBusinessDayConfig?: BusinessDayConfig;

		/** Holiday cutoff definitions. If configured, they specify order cutoff times for holiday-specific shipping. */
		holidayCutoffs?: Array<HolidayCutoff>;

		/** Maximum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. Must be greater than or equal to `minHandlingTimeInDays`. */
		maxHandlingTimeInDays?: number | null;

		/** Maximum number of business days that are spent in transit. 0 means same day delivery, 1 means next day delivery. Must be greater than or equal to `minTransitTimeInDays`. */
		maxTransitTimeInDays?: number | null;

		/** Minimum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. */
		minHandlingTimeInDays?: number | null;

		/** Minimum number of business days that are spent in transit. 0 means same day delivery, 1 means next day delivery. Either `{min,max}TransitTimeInDays` or `transitTimeTable` must be set, but not both. */
		minTransitTimeInDays?: number | null;
		transitBusinessDayConfig?: BusinessDayConfig;
		transitTimeTable?: TransitTable;

		/** Indicates that the delivery time should be calculated per warehouse (shipping origin location) based on the settings of the selected carrier. When set, no other transit time related field in DeliveryTime should be set. */
		warehouseBasedDeliveryTimes?: Array<WarehouseBasedDeliveryTime>;
	}
	export interface DeliveryTimeFormProperties {

		/** Maximum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. Must be greater than or equal to `minHandlingTimeInDays`. */
		maxHandlingTimeInDays: FormControl<number | null | undefined>,

		/** Maximum number of business days that are spent in transit. 0 means same day delivery, 1 means next day delivery. Must be greater than or equal to `minTransitTimeInDays`. */
		maxTransitTimeInDays: FormControl<number | null | undefined>,

		/** Minimum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. */
		minHandlingTimeInDays: FormControl<number | null | undefined>,

		/** Minimum number of business days that are spent in transit. 0 means same day delivery, 1 means next day delivery. Either `{min,max}TransitTimeInDays` or `transitTimeTable` must be set, but not both. */
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

		/** Date of the order deadline, in ISO 8601 format. For example, "2016-11-29" for 29th November 2016. Required. */
		deadlineDate?: string | null;

		/** Hour of the day on the deadline date until which the order has to be placed to qualify for the delivery guarantee. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Required. */
		deadlineHour?: number | null;

		/** Timezone identifier for the deadline hour (for example, "Europe/Zurich"). List of identifiers. Required. */
		deadlineTimezone?: string | null;

		/** Unique identifier for the holiday. Required. */
		holidayId?: string | null;

		/** Date on which the deadline will become visible to consumers in ISO 8601 format. For example, "2016-10-31" for 31st October 2016. Required. */
		visibleFromDate?: string | null;
	}
	export interface HolidayCutoffFormProperties {

		/** Date of the order deadline, in ISO 8601 format. For example, "2016-11-29" for 29th November 2016. Required. */
		deadlineDate: FormControl<string | null | undefined>,

		/** Hour of the day on the deadline date until which the order has to be placed to qualify for the delivery guarantee. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Required. */
		deadlineHour: FormControl<number | null | undefined>,

		/** Timezone identifier for the deadline hour (for example, "Europe/Zurich"). List of identifiers. Required. */
		deadlineTimezone: FormControl<string | null | undefined>,

		/** Unique identifier for the holiday. Required. */
		holidayId: FormControl<string | null | undefined>,

		/** Date on which the deadline will become visible to consumers in ISO 8601 format. For example, "2016-10-31" for 31st October 2016. Required. */
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

		/** Required. Carrier, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved through the `listSupportedCarriers` method. */
		carrier?: string | null;

		/** Required. Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved through the `listSupportedCarriers` method. The name of the service must be in the eddSupportedServices list. */
		carrierService?: string | null;

		/** Shipping origin's state. */
		originAdministrativeArea?: string | null;

		/** Shipping origin's city. */
		originCity?: string | null;

		/** Shipping origin's country represented as a [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml). */
		originCountry?: string | null;

		/** Shipping origin. */
		originPostalCode?: string | null;

		/** Shipping origin's street address. */
		originStreetAddress?: string | null;

		/** The name of the warehouse. Warehouse name need to be matched with name. If warehouseName is set, the below fields will be ignored. The warehouse info will be read from warehouse. */
		warehouseName?: string | null;
	}
	export interface WarehouseBasedDeliveryTimeFormProperties {

		/** Required. Carrier, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved through the `listSupportedCarriers` method. */
		carrier: FormControl<string | null | undefined>,

		/** Required. Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved through the `listSupportedCarriers` method. The name of the service must be in the eddSupportedServices list. */
		carrierService: FormControl<string | null | undefined>,

		/** Shipping origin's state. */
		originAdministrativeArea: FormControl<string | null | undefined>,

		/** Shipping origin's city. */
		originCity: FormControl<string | null | undefined>,

		/** Shipping origin's country represented as a [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml). */
		originCountry: FormControl<string | null | undefined>,

		/** Shipping origin. */
		originPostalCode: FormControl<string | null | undefined>,

		/** Shipping origin's street address. */
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


	/** Distance represented by an integer and unit. */
	export interface Distance {

		/** The distance unit. Acceptable values are `None`, `Miles`, and `Kilometers`. */
		unit?: string | null;

		/** The distance represented as a number. */
		value?: string | null;
	}

	/** Distance represented by an integer and unit. */
	export interface DistanceFormProperties {

		/** The distance unit. Acceptable values are `None`, `Miles`, and `Kilometers`. */
		unit: FormControl<string | null | undefined>,

		/** The distance represented as a number. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDistanceFormGroup() {
		return new FormGroup<DistanceFormProperties>({
			unit: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for GetFreeListingsProgramStatus. */
	export interface FreeListingsProgramStatus {

		/** State of the program. `ENABLED` if there are offers for at least one region. */
		globalState?: FreeListingsProgramStatusGlobalState | null;

		/** Status of the program in each region. Regions with the same status and review eligibility are grouped together in `regionCodes`. */
		regionStatuses?: Array<FreeListingsProgramStatusRegionStatus>;
	}

	/** Response message for GetFreeListingsProgramStatus. */
	export interface FreeListingsProgramStatusFormProperties {

		/** State of the program. `ENABLED` if there are offers for at least one region. */
		globalState: FormControl<FreeListingsProgramStatusGlobalState | null | undefined>,
	}
	export function CreateFreeListingsProgramStatusFormGroup() {
		return new FormGroup<FreeListingsProgramStatusFormProperties>({
			globalState: new FormControl<FreeListingsProgramStatusGlobalState | null | undefined>(undefined),
		});

	}

	export enum FreeListingsProgramStatusGlobalState { PROGRAM_STATE_UNSPECIFIED = 0, NOT_ENABLED = 1, NO_OFFERS_UPLOADED = 2, ENABLED = 3 }


	/** Status of program and region. */
	export interface FreeListingsProgramStatusRegionStatus {

		/** Date by which eligibilityStatus will go from `WARNING` to `DISAPPROVED`. Only visible when your eligibilityStatus is WARNING. In [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DD`. */
		disapprovalDate?: string | null;

		/** Eligibility status of the standard free listing program. */
		eligibilityStatus?: FreeListingsProgramStatusRegionStatusEligibilityStatus | null;

		/** Issues that must be fixed to be eligible for review. */
		onboardingIssues?: Array<string>;

		/** The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) codes for all the regions with the same `eligibilityStatus` and `reviewEligibility`. */
		regionCodes?: Array<string>;

		/** If a program is eligible for review in a specific region. Only visible if `eligibilityStatus` is `DISAPPROVED`. */
		reviewEligibilityStatus?: FreeListingsProgramStatusRegionStatusReviewEligibilityStatus | null;

		/** Review ineligibility reason if account is not eligible for review. */
		reviewIneligibilityReason?: FreeListingsProgramStatusRegionStatusReviewIneligibilityReason | null;

		/** Reason a program in a specific region isn’t eligible for review. Only visible if `reviewEligibilityStatus` is `INELIGIBLE`. */
		reviewIneligibilityReasonDescription?: string | null;

		/** Additional details for review ineligibility reasons. */
		reviewIneligibilityReasonDetails?: FreeListingsProgramStatusReviewIneligibilityReasonDetails;

		/** Issues evaluated in the review process. Fix all issues before requesting a review. */
		reviewIssues?: Array<string>;
	}

	/** Status of program and region. */
	export interface FreeListingsProgramStatusRegionStatusFormProperties {

		/** Date by which eligibilityStatus will go from `WARNING` to `DISAPPROVED`. Only visible when your eligibilityStatus is WARNING. In [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DD`. */
		disapprovalDate: FormControl<string | null | undefined>,

		/** Eligibility status of the standard free listing program. */
		eligibilityStatus: FormControl<FreeListingsProgramStatusRegionStatusEligibilityStatus | null | undefined>,

		/** If a program is eligible for review in a specific region. Only visible if `eligibilityStatus` is `DISAPPROVED`. */
		reviewEligibilityStatus: FormControl<FreeListingsProgramStatusRegionStatusReviewEligibilityStatus | null | undefined>,

		/** Review ineligibility reason if account is not eligible for review. */
		reviewIneligibilityReason: FormControl<FreeListingsProgramStatusRegionStatusReviewIneligibilityReason | null | undefined>,

		/** Reason a program in a specific region isn’t eligible for review. Only visible if `reviewEligibilityStatus` is `INELIGIBLE`. */
		reviewIneligibilityReasonDescription: FormControl<string | null | undefined>,
	}
	export function CreateFreeListingsProgramStatusRegionStatusFormGroup() {
		return new FormGroup<FreeListingsProgramStatusRegionStatusFormProperties>({
			disapprovalDate: new FormControl<string | null | undefined>(undefined),
			eligibilityStatus: new FormControl<FreeListingsProgramStatusRegionStatusEligibilityStatus | null | undefined>(undefined),
			reviewEligibilityStatus: new FormControl<FreeListingsProgramStatusRegionStatusReviewEligibilityStatus | null | undefined>(undefined),
			reviewIneligibilityReason: new FormControl<FreeListingsProgramStatusRegionStatusReviewIneligibilityReason | null | undefined>(undefined),
			reviewIneligibilityReasonDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FreeListingsProgramStatusRegionStatusEligibilityStatus { STATE_UNSPECIFIED = 0, APPROVED = 1, DISAPPROVED = 2, WARNING = 3, UNDER_REVIEW = 4, PENDING_REVIEW = 5, ONBOARDING = 6 }

	export enum FreeListingsProgramStatusRegionStatusReviewEligibilityStatus { REVIEW_ELIGIBILITY_UNSPECIFIED = 0, ELIGIBLE = 1, INELIGIBLE = 2 }

	export enum FreeListingsProgramStatusRegionStatusReviewIneligibilityReason { REVIEW_INELIGIBILITY_REASON_UNSPECIFIED = 0, ONBOARDING_ISSUES = 1, NOT_ENOUGH_OFFERS = 2, IN_COOLDOWN_PERIOD = 3, ALREADY_UNDER_REVIEW = 4, NO_REVIEW_REQUIRED = 5, WILL_BE_REVIEWED_AUTOMATICALLY = 6, IS_RETIRED = 7, ALREADY_REVIEWED = 8 }


	/** Additional details for review ineligibility reasons. */
	export interface FreeListingsProgramStatusReviewIneligibilityReasonDetails {

		/** This timestamp represents end of cooldown period for review ineligbility reason `IN_COOLDOWN_PERIOD`. */
		cooldownTime?: string | null;
	}

	/** Additional details for review ineligibility reasons. */
	export interface FreeListingsProgramStatusReviewIneligibilityReasonDetailsFormProperties {

		/** This timestamp represents end of cooldown period for review ineligbility reason `IN_COOLDOWN_PERIOD`. */
		cooldownTime: FormControl<string | null | undefined>,
	}
	export function CreateFreeListingsProgramStatusReviewIneligibilityReasonDetailsFormGroup() {
		return new FormGroup<FreeListingsProgramStatusReviewIneligibilityReasonDetailsFormProperties>({
			cooldownTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing generated recommendations. */
	export interface GenerateRecommendationsResponse {

		/** Recommendations generated for a request. */
		recommendations?: Array<Recommendation>;

		/** Output only. Response token is a string created for each `GenerateRecommendationsResponse`. This token doesn't expire, and is globally unique. This token must be used when reporting interactions for recommendations. */
		responseToken?: string | null;
	}

	/** Response containing generated recommendations. */
	export interface GenerateRecommendationsResponseFormProperties {

		/** Output only. Response token is a string created for each `GenerateRecommendationsResponse`. This token doesn't expire, and is globally unique. This token must be used when reporting interactions for recommendations. */
		responseToken: FormControl<string | null | undefined>,
	}
	export function CreateGenerateRecommendationsResponseFormGroup() {
		return new FormGroup<GenerateRecommendationsResponseFormProperties>({
			responseToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Recommendations are suggested ways to improve your merchant account's performance. For example, to engage with a feature, or start using a new Google product. */
	export interface Recommendation {

		/** Output only. CTAs of this recommendation. Repeated. */
		additionalCallToAction?: Array<RecommendationCallToAction>;

		/** Output only. List of additional localized descriptions for a recommendation. Localication uses the `languageCode` field in `GenerateRecommendations` requests. Not all description types are guaranteed to be present and we recommend to rely on default description. */
		additionalDescriptions?: Array<RecommendationDescription>;

		/** Output only. Any creatives attached to the recommendation. Repeated. */
		creative?: Array<RecommendationCreative>;

		/** Call to action (CTA) that explains how a merchant can implement this recommendation */
		defaultCallToAction?: RecommendationCallToAction;

		/** Optional. Localized recommendation description. The localization the {@link `GenerateRecommendationsRequest.language_code`} field in {@link `GenerateRecommendationsRequest`} requests. */
		defaultDescription?: string | null;

		/** Optional. A numerical score of the impact from the recommendation's description. For example, a recommendation might suggest an upward trend in sales for a certain product. Higher number means larger impact. */
		numericalImpact?: number | null;

		/** Optional. Indicates whether a user needs to pay when they complete the user journey suggested by the recommendation. */
		paid?: boolean | null;

		/** Optional. Localized recommendation name. The localization uses the {@link `GenerateRecommendationsRequest.language_code`} field in {@link `GenerateRecommendationsRequest`} requests. */
		recommendationName?: string | null;

		/** Optional. Subtype of the recommendations. Only applicable when multiple recommendations can be generated per type, and is used as an identifier of recommendation under the same recommendation type. */
		subType?: string | null;

		/** Optional. Localized Recommendation Title. Localization uses the {@link `GenerateRecommendationsRequest.language_code`} field in {@link `GenerateRecommendationsRequest`} requests. */
		title?: string | null;

		/** Output only. Type of the recommendation. List of currently available recommendation types: - OPPORTUNITY_CREATE_NEW_COLLECTION - OPPORTUNITY_CREATE_EMAIL_CAMPAIGN */
		type?: string | null;
	}

	/** Recommendations are suggested ways to improve your merchant account's performance. For example, to engage with a feature, or start using a new Google product. */
	export interface RecommendationFormProperties {

		/** Optional. Localized recommendation description. The localization the {@link `GenerateRecommendationsRequest.language_code`} field in {@link `GenerateRecommendationsRequest`} requests. */
		defaultDescription: FormControl<string | null | undefined>,

		/** Optional. A numerical score of the impact from the recommendation's description. For example, a recommendation might suggest an upward trend in sales for a certain product. Higher number means larger impact. */
		numericalImpact: FormControl<number | null | undefined>,

		/** Optional. Indicates whether a user needs to pay when they complete the user journey suggested by the recommendation. */
		paid: FormControl<boolean | null | undefined>,

		/** Optional. Localized recommendation name. The localization uses the {@link `GenerateRecommendationsRequest.language_code`} field in {@link `GenerateRecommendationsRequest`} requests. */
		recommendationName: FormControl<string | null | undefined>,

		/** Optional. Subtype of the recommendations. Only applicable when multiple recommendations can be generated per type, and is used as an identifier of recommendation under the same recommendation type. */
		subType: FormControl<string | null | undefined>,

		/** Optional. Localized Recommendation Title. Localization uses the {@link `GenerateRecommendationsRequest.language_code`} field in {@link `GenerateRecommendationsRequest`} requests. */
		title: FormControl<string | null | undefined>,

		/** Output only. Type of the recommendation. List of currently available recommendation types: - OPPORTUNITY_CREATE_NEW_COLLECTION - OPPORTUNITY_CREATE_EMAIL_CAMPAIGN */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationFormGroup() {
		return new FormGroup<RecommendationFormProperties>({
			defaultDescription: new FormControl<string | null | undefined>(undefined),
			numericalImpact: new FormControl<number | null | undefined>(undefined),
			paid: new FormControl<boolean | null | undefined>(undefined),
			recommendationName: new FormControl<string | null | undefined>(undefined),
			subType: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Call to action (CTA) that explains how a merchant can implement this recommendation */
	export interface RecommendationCallToAction {

		/** Output only. Intent of the action. This value describes the intent (for example, `OPEN_CREATE_EMAIL_CAMPAIGN_FLOW`) and can vary from recommendation to recommendation. This value can change over time for the same recommendation. Currently available intent values: - OPEN_CREATE_EMAIL_CAMPAIGN_FLOW: Opens a user journey where they can create a marketing email campaign. (No default URL) - OPEN_CREATE_COLLECTION_TAB: Opens a user journey where they can [create a collection](https://support.google.com/merchants/answer/9703228) for their Merchant account. (No default URL) */
		intent?: string | null;

		/** Output only. Localized text of the CTA. Optional. */
		localizedText?: string | null;

		/** Optional. URL of the CTA. This field will only be set for some recommendations where there is a suggested landing URL. Otherwise it will be set to an empty string. We recommend developers to use their own custom landing page according to the description of the intent field above when this uri field is empty. */
		uri?: string | null;
	}

	/** Call to action (CTA) that explains how a merchant can implement this recommendation */
	export interface RecommendationCallToActionFormProperties {

		/** Output only. Intent of the action. This value describes the intent (for example, `OPEN_CREATE_EMAIL_CAMPAIGN_FLOW`) and can vary from recommendation to recommendation. This value can change over time for the same recommendation. Currently available intent values: - OPEN_CREATE_EMAIL_CAMPAIGN_FLOW: Opens a user journey where they can create a marketing email campaign. (No default URL) - OPEN_CREATE_COLLECTION_TAB: Opens a user journey where they can [create a collection](https://support.google.com/merchants/answer/9703228) for their Merchant account. (No default URL) */
		intent: FormControl<string | null | undefined>,

		/** Output only. Localized text of the CTA. Optional. */
		localizedText: FormControl<string | null | undefined>,

		/** Optional. URL of the CTA. This field will only be set for some recommendations where there is a suggested landing URL. Otherwise it will be set to an empty string. We recommend developers to use their own custom landing page according to the description of the intent field above when this uri field is empty. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationCallToActionFormGroup() {
		return new FormGroup<RecommendationCallToActionFormProperties>({
			intent: new FormControl<string | null | undefined>(undefined),
			localizedText: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Google-provided description for the recommendation. */
	export interface RecommendationDescription {

		/** Output only. Text of the description. */
		text?: string | null;

		/** Output only. Type of the description. */
		type?: RecommendationDescriptionType | null;
	}

	/** Google-provided description for the recommendation. */
	export interface RecommendationDescriptionFormProperties {

		/** Output only. Text of the description. */
		text: FormControl<string | null | undefined>,

		/** Output only. Type of the description. */
		type: FormControl<RecommendationDescriptionType | null | undefined>,
	}
	export function CreateRecommendationDescriptionFormGroup() {
		return new FormGroup<RecommendationDescriptionFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<RecommendationDescriptionType | null | undefined>(undefined),
		});

	}

	export enum RecommendationDescriptionType { DESCRIPTION_TYPE_UNSPECIFIED = 0, SHORT = 1, LONG = 2 }


	/** Creative is a multimedia attachment to recommendation that can be used on the frontend. */
	export interface RecommendationCreative {

		/** Type of the creative. */
		type?: RecommendationCreativeType | null;

		/** URL of the creative. */
		uri?: string | null;
	}

	/** Creative is a multimedia attachment to recommendation that can be used on the frontend. */
	export interface RecommendationCreativeFormProperties {

		/** Type of the creative. */
		type: FormControl<RecommendationCreativeType | null | undefined>,

		/** URL of the creative. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationCreativeFormGroup() {
		return new FormGroup<RecommendationCreativeFormProperties>({
			type: new FormControl<RecommendationCreativeType | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RecommendationCreativeType { CREATIVE_TYPE_UNSPECIFIED = 0, VIDEO = 1, PHOTO = 2 }

	export interface GmbAccounts {

		/** The ID of the Merchant Center account. */
		accountId?: string | null;

		/** A list of Business Profiles which are available to the merchant. */
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

		/** The email which identifies the Business Profile. */
		email?: string | null;

		/** Number of listings under this account. */
		listingCount?: string | null;

		/** The name of the Business Profile. */
		name?: string | null;

		/** The type of the Business Profile (User or Business). */
		type?: string | null;
	}
	export interface GmbAccountsGmbAccountFormProperties {

		/** The email which identifies the Business Profile. */
		email: FormControl<string | null | undefined>,

		/** Number of listings under this account. */
		listingCount: FormControl<string | null | undefined>,

		/** The name of the Business Profile. */
		name: FormControl<string | null | undefined>,

		/** The type of the Business Profile (User or Business). */
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

		/** A non-empty list of location IDs. They must all be of the same location type (for example, state). */
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

		/** The CLDR territory code of the country in which the holiday is available. For example, "US", "DE", "GB". A holiday cutoff can only be configured in a shipping settings service with matching delivery country. Always present. */
		countryCode?: string | null;

		/** Date of the holiday, in ISO 8601 format. For example, "2016-12-25" for Christmas 2016. Always present. */
		date?: string | null;

		/** Date on which the order has to arrive at the customer's, in ISO 8601 format. For example, "2016-12-24" for 24th December 2016. Always present. */
		deliveryGuaranteeDate?: string | null;

		/** Hour of the day in the delivery location's timezone on the guaranteed delivery date by which the order has to arrive at the customer's. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Always present. */
		deliveryGuaranteeHour?: string | null;

		/** Unique identifier for the holiday to be used when configuring holiday cutoffs. Always present. */
		id?: string | null;

		/** The holiday type. Always present. Acceptable values are: - "`Christmas`" - "`Easter`" - "`Father's Day`" - "`Halloween`" - "`Independence Day (USA)`" - "`Mother's Day`" - "`Thanksgiving`" - "`Valentine's Day`" */
		type?: string | null;
	}
	export interface HolidaysHolidayFormProperties {

		/** The CLDR territory code of the country in which the holiday is available. For example, "US", "DE", "GB". A holiday cutoff can only be configured in a shipping settings service with matching delivery country. Always present. */
		countryCode: FormControl<string | null | undefined>,

		/** Date of the holiday, in ISO 8601 format. For example, "2016-12-25" for Christmas 2016. Always present. */
		date: FormControl<string | null | undefined>,

		/** Date on which the order has to arrive at the customer's, in ISO 8601 format. For example, "2016-12-24" for 24th December 2016. Always present. */
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


	/** Request message for the `InsertCheckoutSettings` method. */
	export interface InsertCheckoutSettingsRequest {

		/** Specifications related to the `Checkout` URL. The `UriTemplate` is of the form `https://www.mystore.com/checkout?item_id={id}` where `{id}` will be automatically replaced with data from the merchant account with this attribute [offer_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.offer_id) */
		uriSettings?: UrlSettings;
	}

	/** Request message for the `InsertCheckoutSettings` method. */
	export interface InsertCheckoutSettingsRequestFormProperties {
	}
	export function CreateInsertCheckoutSettingsRequestFormGroup() {
		return new FormGroup<InsertCheckoutSettingsRequestFormProperties>({
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
		productTotal?: Amount;
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


	/** The IDs of labels that should be assigned to the CSS domain. */
	export interface LabelIds {

		/** The list of label IDs. */
		labelIds?: Array<string>;
	}

	/** The IDs of labels that should be assigned to the CSS domain. */
	export interface LabelIdsFormProperties {
	}
	export function CreateLabelIdsFormGroup() {
		return new FormGroup<LabelIdsFormProperties>({
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

		/** Required. CLDR country code (for example, "US"). */
		country?: string | null;

		/** The status of the "Merchant hosted local storefront" feature. */
		hostedLocalStorefrontActive?: boolean | null;
		inventory?: LiaInventorySettings;

		/** Omnichannel experience details. */
		omnichannelExperience?: LiaOmnichannelExperience;
		onDisplayToOrder?: LiaOnDisplayToOrderSettings;
		posDataProvider?: LiaPosDataProvider;

		/** The status of the "Store pickup" feature. */
		storePickupActive?: boolean | null;
	}
	export interface LiaCountrySettingsFormProperties {

		/** Required. CLDR country code (for example, "US"). */
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


	/** Omnichannel experience details. */
	export interface LiaOmnichannelExperience {

		/** The CLDR country code (for example, "US"). */
		country?: string | null;

		/** The Local Store Front (LSF) type for this country. Acceptable values are: - "`ghlsf`" (Google-Hosted Local Store Front) - "`mhlsfBasic`" (Merchant-Hosted Local Store Front Basic) - "`mhlsfFull`" (Merchant-Hosted Local Store Front Full) More details about these types can be found here. */
		lsfType?: string | null;

		/** The Pickup types for this country. Acceptable values are: - "`pickupToday`" - "`pickupLater`" */
		pickupTypes?: Array<string>;
	}

	/** Omnichannel experience details. */
	export interface LiaOmnichannelExperienceFormProperties {

		/** The CLDR country code (for example, "US"). */
		country: FormControl<string | null | undefined>,

		/** The Local Store Front (LSF) type for this country. Acceptable values are: - "`ghlsf`" (Google-Hosted Local Store Front) - "`mhlsfBasic`" (Merchant-Hosted Local Store Front Basic) - "`mhlsfFull`" (Merchant-Hosted Local Store Front Full) More details about these types can be found here. */
		lsfType: FormControl<string | null | undefined>,
	}
	export function CreateLiaOmnichannelExperienceFormGroup() {
		return new FormGroup<LiaOmnichannelExperienceFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			lsfType: new FormControl<string | null | undefined>(undefined),
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

		/** The Business Profile. Required only for RequestGmbAccess. */
		gmbEmail?: string | null;

		/** Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role. */
		liaSettings?: LiaSettings;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/** The method of the batch entry. Acceptable values are: - "`get`" - "`getAccessibleGmbAccounts`" - "`requestGmbAccess`" - "`requestInventoryVerification`" - "`setInventoryVerificationContact`" - "`update`" */
		method?: string | null;

		/** Omnichannel experience details. */
		omnichannelExperience?: LiaOmnichannelExperience;

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

		/** The Business Profile. Required only for RequestGmbAccess. */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsCustomBatchResponse`". */
		kind?: string | null;
	}
	export interface LiasettingsCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsCustomBatchResponse`". */
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

		/** Omnichannel experience details. */
		omnichannelExperience?: LiaOmnichannelExperience;

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

		/** A list of Business Profiles which are available to the merchant. */
		gmbAccounts?: Array<GmbAccountsGmbAccount>;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsGetAccessibleGmbAccountsResponse`". */
		kind?: string | null;
	}
	export interface LiasettingsGetAccessibleGmbAccountsResponseFormProperties {

		/** The ID of the Merchant Center account. */
		accountId: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsGetAccessibleGmbAccountsResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiasettingsGetAccessibleGmbAccountsResponseFormGroup() {
		return new FormGroup<LiasettingsGetAccessibleGmbAccountsResponseFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiasettingsListPosDataProvidersResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsListPosDataProvidersResponse`". */
		kind?: string | null;

		/** The list of POS data providers for each eligible country */
		posDataProviders?: Array<PosDataProviders>;
	}
	export interface LiasettingsListPosDataProvidersResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsListPosDataProvidersResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiasettingsListPosDataProvidersResponseFormGroup() {
		return new FormGroup<LiasettingsListPosDataProvidersResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiasettingsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsListResponse`". */
		kind?: string | null;

		/** The token for the retrieval of the next page of LIA settings. */
		nextPageToken?: string | null;
		resources?: Array<LiaSettings>;
	}
	export interface LiasettingsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsListResponse`". */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsRequestGmbAccessResponse`". */
		kind?: string | null;
	}
	export interface LiasettingsRequestGmbAccessResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsRequestGmbAccessResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiasettingsRequestGmbAccessResponseFormGroup() {
		return new FormGroup<LiasettingsRequestGmbAccessResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiasettingsRequestInventoryVerificationResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsRequestInventoryVerificationResponse`". */
		kind?: string | null;
	}
	export interface LiasettingsRequestInventoryVerificationResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsRequestInventoryVerificationResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiasettingsRequestInventoryVerificationResponseFormGroup() {
		return new FormGroup<LiasettingsRequestInventoryVerificationResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiasettingsSetInventoryVerificationContactResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsSetInventoryVerificationContactResponse`". */
		kind?: string | null;
	}
	export interface LiasettingsSetInventoryVerificationContactResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsSetInventoryVerificationContactResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiasettingsSetInventoryVerificationContactResponseFormGroup() {
		return new FormGroup<LiasettingsSetInventoryVerificationContactResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiasettingsSetPosDataProviderResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsSetPosDataProviderResponse`". */
		kind?: string | null;
	}
	export interface LiasettingsSetPosDataProviderResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsSetPosDataProviderResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLiasettingsSetPosDataProviderResponseFormGroup() {
		return new FormGroup<LiasettingsSetPosDataProviderResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the `ListAccountLabels` method. */
	export interface ListAccountLabelsResponse {

		/** The labels from the specified account. */
		accountLabels?: Array<AccountLabel>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for the `ListAccountLabels` method. */
	export interface ListAccountLabelsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountLabelsResponseFormGroup() {
		return new FormGroup<ListAccountLabelsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for listing account return carriers. */
	export interface ListAccountReturnCarrierResponse {

		/** List of all available account return carriers for the merchant. */
		accountReturnCarriers?: Array<AccountReturnCarrier>;
	}

	/** Response for listing account return carriers. */
	export interface ListAccountReturnCarrierResponseFormProperties {
	}
	export function CreateListAccountReturnCarrierResponseFormGroup() {
		return new FormGroup<ListAccountReturnCarrierResponseFormProperties>({
		});

	}


	/** Response message for the `ListBusinessMessagesLinks` method. */
	export interface ListBusinessMessagesLinksResponse {

		/** The `BusinessMessagesLink` resources for the given Merchant Center account. */
		businessMessagesLinks?: Array<BusinessMessagesLink>;

		/** A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for the `ListBusinessMessagesLinks` method. */
	export interface ListBusinessMessagesLinksResponseFormProperties {

		/** A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBusinessMessagesLinksResponseFormGroup() {
		return new FormGroup<ListBusinessMessagesLinksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the ListCollectionStatuses method. */
	export interface ListCollectionStatusesResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The collectionstatuses listed. */
		resources?: Array<CollectionStatus>;
	}

	/** Response message for the ListCollectionStatuses method. */
	export interface ListCollectionStatusesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCollectionStatusesResponseFormGroup() {
		return new FormGroup<ListCollectionStatusesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the ListCollections method. */
	export interface ListCollectionsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The collections listed. */
		resources?: Array<Collection>;
	}

	/** Response message for the ListCollections method. */
	export interface ListCollectionsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCollectionsResponseFormGroup() {
		return new FormGroup<ListCollectionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the ListConversionSources method. */
	export interface ListConversionSourcesResponse {

		/** List of conversion sources. */
		conversionSources?: Array<ConversionSource>;

		/** Token to be used to fetch the next results page. */
		nextPageToken?: string | null;
	}

	/** Response message for the ListConversionSources method. */
	export interface ListConversionSourcesResponseFormProperties {

		/** Token to be used to fetch the next results page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListConversionSourcesResponseFormGroup() {
		return new FormGroup<ListConversionSourcesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for the `ListCsses` method */
	export interface ListCssesResponse {

		/** The CSS domains affiliated with the specified CSS group. */
		csses?: Array<Css>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** The response message for the `ListCsses` method */
	export interface ListCssesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCssesResponseFormGroup() {
		return new FormGroup<ListCssesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the ListMethodQuotas method. */
	export interface ListMethodQuotasResponse {

		/** The current quota usage and limits per each method. */
		methodQuotas?: Array<MethodQuota>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for the ListMethodQuotas method. */
	export interface ListMethodQuotasResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMethodQuotasResponseFormGroup() {
		return new FormGroup<ListMethodQuotasResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The quota information per method in the Content API. */
	export interface MethodQuota {

		/** The method name, for example `products.list`. Method name does not contain version because quota can be shared between different API versions of the same method. */
		method?: string | null;

		/** The current quota limit per day, meaning the maximum number of calls for the method. */
		quotaLimit?: string | null;

		/** The current quota usage, meaning the number of calls already made to the method. */
		quotaUsage?: string | null;
	}

	/** The quota information per method in the Content API. */
	export interface MethodQuotaFormProperties {

		/** The method name, for example `products.list`. Method name does not contain version because quota can be shared between different API versions of the same method. */
		method: FormControl<string | null | undefined>,

		/** The current quota limit per day, meaning the maximum number of calls for the method. */
		quotaLimit: FormControl<string | null | undefined>,

		/** The current quota usage, meaning the number of calls already made to the method. */
		quotaUsage: FormControl<string | null | undefined>,
	}
	export function CreateMethodQuotaFormGroup() {
		return new FormGroup<MethodQuotaFormProperties>({
			method: new FormControl<string | null | undefined>(undefined),
			quotaLimit: new FormControl<string | null | undefined>(undefined),
			quotaUsage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for Promotions.List method. */
	export interface ListPromotionResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of all available promotions for the merchant. */
		promotions?: Array<Promotion>;
	}

	/** Response message for Promotions.List method. */
	export interface ListPromotionResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPromotionResponseFormGroup() {
		return new FormGroup<ListPromotionResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a promotion. See the following articles for more details. * [Promotions feed specification](https://support.google.com/merchants/answer/2906014) * [Local promotions feed specification](https://support.google.com/merchants/answer/10146130) * [Promotions on Buy on Google product data specification](https://support.google.com/merchants/answer/9173673) */
	export interface Promotion {

		/** Product filter by brand for the promotion. */
		brand?: Array<string>;

		/** Product filter by brand exclusion for the promotion. */
		brandExclusion?: Array<string>;

		/** Required. The content language used as part of the unique identifier. `en` content language is available for all target countries. `fr` content language is available for `CA` and `FR` target countries. `de` content language is available for `DE` target country. `nl` content language is available for `NL` target country. `it` content language is available for `IT` target country. `pt` content language is available for `BR` target country. `ja` content language is available for `JP` target country. `ko` content language is available for `KR` target country. */
		contentLanguage?: string | null;

		/** Required. Coupon value type for the promotion. */
		couponValueType?: PromotionCouponValueType | null;

		/** Free gift description for the promotion. */
		freeGiftDescription?: string | null;

		/** Free gift item ID for the promotion. */
		freeGiftItemId?: string | null;

		/** The price represented as a number and currency. */
		freeGiftValue?: PriceAmount;

		/** Generic redemption code for the promotion. To be used with the `offerType` field. */
		genericRedemptionCode?: string | null;

		/** The number of items discounted in the promotion. */
		getThisQuantityDiscounted?: number | null;

		/** Required. Output only. The REST promotion ID to uniquely identify the promotion. Content API methods that operate on promotions take this as their `promotionId` parameter. The REST ID for a promotion is of the form channel:contentLanguage:targetCountry:promotionId The `channel` field has a value of `"online"`, `"in_store"`, or `"online_in_store"`. */
		id?: string | null;

		/** Product filter by item group ID for the promotion. */
		itemGroupId?: Array<string>;

		/** Product filter by item group ID exclusion for the promotion. */
		itemGroupIdExclusion?: Array<string>;

		/** Product filter by item ID for the promotion. */
		itemId?: Array<string>;

		/** Product filter by item ID exclusion for the promotion. */
		itemIdExclusion?: Array<string>;

		/** Maximum purchase quantity for the promotion. */
		limitQuantity?: number | null;

		/** The price represented as a number and currency. */
		limitValue?: PriceAmount;

		/** Required. Long title for the promotion. */
		longTitle?: string | null;

		/** The price represented as a number and currency. */
		minimumPurchaseAmount?: PriceAmount;

		/** Minimum purchase quantity for the promotion. */
		minimumPurchaseQuantity?: number | null;

		/** The price represented as a number and currency. */
		moneyBudget?: PriceAmount;

		/** The price represented as a number and currency. */
		moneyOffAmount?: PriceAmount;

		/** Required. Type of the promotion. */
		offerType?: PromotionOfferType | null;

		/** Order limit for the promotion. */
		orderLimit?: number | null;

		/** The percentage discount offered in the promotion. */
		percentOff?: number | null;

		/** Required. Applicability of the promotion to either all products or only specific products. */
		productApplicability?: PromotionProductApplicability | null;

		/** Product filter by product type for the promotion. */
		productType?: Array<string>;

		/** Product filter by product type exclusion for the promotion. */
		productTypeExclusion?: Array<string>;

		/** Destination ID for the promotion. */
		promotionDestinationIds?: Array<string>;

		/** String representation of the promotion display dates. Deprecated. Use `promotion_display_time_period` instead. */
		promotionDisplayDates?: string | null;

		/** A message that represents a time period. */
		promotionDisplayTimePeriod?: TimePeriod;

		/** String representation of the promotion effective dates. Deprecated. Use `promotion_effective_time_period` instead. */
		promotionEffectiveDates?: string | null;

		/** A message that represents a time period. */
		promotionEffectiveTimePeriod?: TimePeriod;

		/** Required. The user provided promotion ID to uniquely identify the promotion. */
		promotionId?: string | null;

		/** The status of the promotion. */
		promotionStatus?: PromotionPromotionStatus;

		/** URL to the page on the merchant's site where the promotion shows. Local Inventory ads promotions throw an error if no promo url is included. URL is used to confirm that the promotion is valid and can be redeemed. */
		promotionUrl?: string | null;

		/** Required. Redemption channel for the promotion. At least one channel is required. */
		redemptionChannel?: Array<string>;

		/** Shipping service names for the promotion. */
		shippingServiceNames?: Array<string>;

		/** Whether the promotion applies to all stores, or only specified stores. Local Inventory ads promotions throw an error if no store applicability is included. An INVALID_ARGUMENT error is thrown if store_applicability is set to ALL_STORES and store_code or score_code_exclusion is set to a value. */
		storeApplicability?: PromotionStoreApplicability | null;

		/** Store codes to include for the promotion. */
		storeCode?: Array<string>;

		/** Store codes to exclude for the promotion. */
		storeCodeExclusion?: Array<string>;

		/** Required. The target country used as part of the unique identifier. Can be `AU`, `CA`, `DE`, `FR`, `GB`, `IN`, `US`, `BR`, `ES`, `NL`, `JP`, `IT` or `KR`. */
		targetCountry?: string | null;
	}

	/** Represents a promotion. See the following articles for more details. * [Promotions feed specification](https://support.google.com/merchants/answer/2906014) * [Local promotions feed specification](https://support.google.com/merchants/answer/10146130) * [Promotions on Buy on Google product data specification](https://support.google.com/merchants/answer/9173673) */
	export interface PromotionFormProperties {

		/** Required. The content language used as part of the unique identifier. `en` content language is available for all target countries. `fr` content language is available for `CA` and `FR` target countries. `de` content language is available for `DE` target country. `nl` content language is available for `NL` target country. `it` content language is available for `IT` target country. `pt` content language is available for `BR` target country. `ja` content language is available for `JP` target country. `ko` content language is available for `KR` target country. */
		contentLanguage: FormControl<string | null | undefined>,

		/** Required. Coupon value type for the promotion. */
		couponValueType: FormControl<PromotionCouponValueType | null | undefined>,

		/** Free gift description for the promotion. */
		freeGiftDescription: FormControl<string | null | undefined>,

		/** Free gift item ID for the promotion. */
		freeGiftItemId: FormControl<string | null | undefined>,

		/** Generic redemption code for the promotion. To be used with the `offerType` field. */
		genericRedemptionCode: FormControl<string | null | undefined>,

		/** The number of items discounted in the promotion. */
		getThisQuantityDiscounted: FormControl<number | null | undefined>,

		/** Required. Output only. The REST promotion ID to uniquely identify the promotion. Content API methods that operate on promotions take this as their `promotionId` parameter. The REST ID for a promotion is of the form channel:contentLanguage:targetCountry:promotionId The `channel` field has a value of `"online"`, `"in_store"`, or `"online_in_store"`. */
		id: FormControl<string | null | undefined>,

		/** Maximum purchase quantity for the promotion. */
		limitQuantity: FormControl<number | null | undefined>,

		/** Required. Long title for the promotion. */
		longTitle: FormControl<string | null | undefined>,

		/** Minimum purchase quantity for the promotion. */
		minimumPurchaseQuantity: FormControl<number | null | undefined>,

		/** Required. Type of the promotion. */
		offerType: FormControl<PromotionOfferType | null | undefined>,

		/** Order limit for the promotion. */
		orderLimit: FormControl<number | null | undefined>,

		/** The percentage discount offered in the promotion. */
		percentOff: FormControl<number | null | undefined>,

		/** Required. Applicability of the promotion to either all products or only specific products. */
		productApplicability: FormControl<PromotionProductApplicability | null | undefined>,

		/** String representation of the promotion display dates. Deprecated. Use `promotion_display_time_period` instead. */
		promotionDisplayDates: FormControl<string | null | undefined>,

		/** String representation of the promotion effective dates. Deprecated. Use `promotion_effective_time_period` instead. */
		promotionEffectiveDates: FormControl<string | null | undefined>,

		/** Required. The user provided promotion ID to uniquely identify the promotion. */
		promotionId: FormControl<string | null | undefined>,

		/** URL to the page on the merchant's site where the promotion shows. Local Inventory ads promotions throw an error if no promo url is included. URL is used to confirm that the promotion is valid and can be redeemed. */
		promotionUrl: FormControl<string | null | undefined>,

		/** Whether the promotion applies to all stores, or only specified stores. Local Inventory ads promotions throw an error if no store applicability is included. An INVALID_ARGUMENT error is thrown if store_applicability is set to ALL_STORES and store_code or score_code_exclusion is set to a value. */
		storeApplicability: FormControl<PromotionStoreApplicability | null | undefined>,

		/** Required. The target country used as part of the unique identifier. Can be `AU`, `CA`, `DE`, `FR`, `GB`, `IN`, `US`, `BR`, `ES`, `NL`, `JP`, `IT` or `KR`. */
		targetCountry: FormControl<string | null | undefined>,
	}
	export function CreatePromotionFormGroup() {
		return new FormGroup<PromotionFormProperties>({
			contentLanguage: new FormControl<string | null | undefined>(undefined),
			couponValueType: new FormControl<PromotionCouponValueType | null | undefined>(undefined),
			freeGiftDescription: new FormControl<string | null | undefined>(undefined),
			freeGiftItemId: new FormControl<string | null | undefined>(undefined),
			genericRedemptionCode: new FormControl<string | null | undefined>(undefined),
			getThisQuantityDiscounted: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			limitQuantity: new FormControl<number | null | undefined>(undefined),
			longTitle: new FormControl<string | null | undefined>(undefined),
			minimumPurchaseQuantity: new FormControl<number | null | undefined>(undefined),
			offerType: new FormControl<PromotionOfferType | null | undefined>(undefined),
			orderLimit: new FormControl<number | null | undefined>(undefined),
			percentOff: new FormControl<number | null | undefined>(undefined),
			productApplicability: new FormControl<PromotionProductApplicability | null | undefined>(undefined),
			promotionDisplayDates: new FormControl<string | null | undefined>(undefined),
			promotionEffectiveDates: new FormControl<string | null | undefined>(undefined),
			promotionId: new FormControl<string | null | undefined>(undefined),
			promotionUrl: new FormControl<string | null | undefined>(undefined),
			storeApplicability: new FormControl<PromotionStoreApplicability | null | undefined>(undefined),
			targetCountry: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PromotionCouponValueType { COUPON_VALUE_TYPE_UNSPECIFIED = 0, MONEY_OFF = 1, PERCENT_OFF = 2, BUY_M_GET_N_MONEY_OFF = 3, BUY_M_GET_N_PERCENT_OFF = 4, BUY_M_GET_MONEY_OFF = 5, BUY_M_GET_PERCENT_OFF = 6, FREE_GIFT = 7, FREE_GIFT_WITH_VALUE = 8, FREE_GIFT_WITH_ITEM_ID = 9, FREE_SHIPPING_STANDARD = 10, FREE_SHIPPING_OVERNIGHT = 11, FREE_SHIPPING_TWO_DAY = 12 }


	/** The price represented as a number and currency. */
	export interface PriceAmount {

		/** The currency of the price. */
		currency?: string | null;

		/** The price represented as a number. */
		value?: string | null;
	}

	/** The price represented as a number and currency. */
	export interface PriceAmountFormProperties {

		/** The currency of the price. */
		currency: FormControl<string | null | undefined>,

		/** The price represented as a number. */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePriceAmountFormGroup() {
		return new FormGroup<PriceAmountFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PromotionOfferType { OFFER_TYPE_UNSPECIFIED = 0, NO_CODE = 1, GENERIC_CODE = 2 }

	export enum PromotionProductApplicability { PRODUCT_APPLICABILITY_UNSPECIFIED = 0, ALL_PRODUCTS = 1, SPECIFIC_PRODUCTS = 2 }


	/** A message that represents a time period. */
	export interface TimePeriod {

		/** The ending timestamp. */
		endTime?: string | null;

		/** The starting timestamp. */
		startTime?: string | null;
	}

	/** A message that represents a time period. */
	export interface TimePeriodFormProperties {

		/** The ending timestamp. */
		endTime: FormControl<string | null | undefined>,

		/** The starting timestamp. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateTimePeriodFormGroup() {
		return new FormGroup<TimePeriodFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of the promotion. */
	export interface PromotionPromotionStatus {

		/** Date on which the promotion has been created in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z" */
		creationDate?: string | null;

		/** The intended destinations for the promotion. */
		destinationStatuses?: Array<PromotionPromotionStatusDestinationStatus>;

		/** Date on which the promotion status has been last updated in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z" */
		lastUpdateDate?: string | null;

		/** A list of issues associated with the promotion. */
		promotionIssue?: Array<PromotionPromotionStatusPromotionIssue>;
	}

	/** The status of the promotion. */
	export interface PromotionPromotionStatusFormProperties {

		/** Date on which the promotion has been created in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z" */
		creationDate: FormControl<string | null | undefined>,

		/** Date on which the promotion status has been last updated in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z" */
		lastUpdateDate: FormControl<string | null | undefined>,
	}
	export function CreatePromotionPromotionStatusFormGroup() {
		return new FormGroup<PromotionPromotionStatusFormProperties>({
			creationDate: new FormControl<string | null | undefined>(undefined),
			lastUpdateDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The destination status of the promotion. */
	export interface PromotionPromotionStatusDestinationStatus {

		/** The name of the destination. */
		destination?: string | null;

		/** The status for the specified destination. */
		status?: PromotionPromotionStatusDestinationStatusStatus | null;
	}

	/** The destination status of the promotion. */
	export interface PromotionPromotionStatusDestinationStatusFormProperties {

		/** The name of the destination. */
		destination: FormControl<string | null | undefined>,

		/** The status for the specified destination. */
		status: FormControl<PromotionPromotionStatusDestinationStatusStatus | null | undefined>,
	}
	export function CreatePromotionPromotionStatusDestinationStatusFormGroup() {
		return new FormGroup<PromotionPromotionStatusDestinationStatusFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PromotionPromotionStatusDestinationStatusStatus | null | undefined>(undefined),
		});

	}

	export enum PromotionPromotionStatusDestinationStatusStatus { STATE_UNSPECIFIED = 0, IN_REVIEW = 1, REJECTED = 2, LIVE = 3, STOPPED = 4, EXPIRED = 5, PENDING = 6 }


	/** The issue associated with the promotion. */
	export interface PromotionPromotionStatusPromotionIssue {

		/** Code of the issue. */
		code?: string | null;

		/** Explanation of the issue. */
		detail?: string | null;
	}

	/** The issue associated with the promotion. */
	export interface PromotionPromotionStatusPromotionIssueFormProperties {

		/** Code of the issue. */
		code: FormControl<string | null | undefined>,

		/** Explanation of the issue. */
		detail: FormControl<string | null | undefined>,
	}
	export function CreatePromotionPromotionStatusPromotionIssueFormGroup() {
		return new FormGroup<PromotionPromotionStatusPromotionIssueFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PromotionStoreApplicability { STORE_APPLICABILITY_UNSPECIFIED = 0, ALL_STORES = 1, SPECIFIC_STORES = 2 }


	/** Response message for the `ListRegions` method. */
	export interface ListRegionsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The regions from the specified merchant. */
		regions?: Array<Region>;
	}

	/** Response message for the `ListRegions` method. */
	export interface ListRegionsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRegionsResponseFormGroup() {
		return new FormGroup<ListRegionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets. */
	export interface Region {

		/** The display name of the region. */
		displayName?: string | null;

		/** A list of geotargets that defines the region area. */
		geotargetArea?: RegionGeoTargetArea;

		/** Output only. Immutable. Merchant that owns the region. */
		merchantId?: string | null;

		/** A list of postal codes that defines the region area. Note: All regions defined using postal codes are accessible via the account's `ShippingSettings.postalCodeGroups` resource. */
		postalCodeArea?: RegionPostalCodeArea;

		/** Output only. Immutable. The ID uniquely identifying each region. */
		regionId?: string | null;

		/** Output only. Indicates if the region is eligible to use in the Regional Inventory configuration. */
		regionalInventoryEligible?: boolean | null;

		/** Output only. Indicates if the region is eligible to use in the Shipping Services configuration. */
		shippingEligible?: boolean | null;
	}

	/** Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets. */
	export interface RegionFormProperties {

		/** The display name of the region. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Immutable. Merchant that owns the region. */
		merchantId: FormControl<string | null | undefined>,

		/** Output only. Immutable. The ID uniquely identifying each region. */
		regionId: FormControl<string | null | undefined>,

		/** Output only. Indicates if the region is eligible to use in the Regional Inventory configuration. */
		regionalInventoryEligible: FormControl<boolean | null | undefined>,

		/** Output only. Indicates if the region is eligible to use in the Shipping Services configuration. */
		shippingEligible: FormControl<boolean | null | undefined>,
	}
	export function CreateRegionFormGroup() {
		return new FormGroup<RegionFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			regionId: new FormControl<string | null | undefined>(undefined),
			regionalInventoryEligible: new FormControl<boolean | null | undefined>(undefined),
			shippingEligible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A list of geotargets that defines the region area. */
	export interface RegionGeoTargetArea {

		/** Required. A non-empty list of [location IDs](https://developers.google.com/adwords/api/docs/appendix/geotargeting). They must all be of the same location type (e.g., state). */
		geotargetCriteriaIds?: Array<string>;
	}

	/** A list of geotargets that defines the region area. */
	export interface RegionGeoTargetAreaFormProperties {
	}
	export function CreateRegionGeoTargetAreaFormGroup() {
		return new FormGroup<RegionGeoTargetAreaFormProperties>({
		});

	}


	/** A list of postal codes that defines the region area. Note: All regions defined using postal codes are accessible via the account's `ShippingSettings.postalCodeGroups` resource. */
	export interface RegionPostalCodeArea {

		/** Required. A range of postal codes. */
		postalCodes?: Array<RegionPostalCodeAreaPostalCodeRange>;

		/** Required. CLDR territory code or the country the postal code group applies to. */
		regionCode?: string | null;
	}

	/** A list of postal codes that defines the region area. Note: All regions defined using postal codes are accessible via the account's `ShippingSettings.postalCodeGroups` resource. */
	export interface RegionPostalCodeAreaFormProperties {

		/** Required. CLDR territory code or the country the postal code group applies to. */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateRegionPostalCodeAreaFormGroup() {
		return new FormGroup<RegionPostalCodeAreaFormProperties>({
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A range of postal codes that defines the region area. */
	export interface RegionPostalCodeAreaPostalCodeRange {

		/** Required. A postal code or a pattern of the form prefix* denoting the inclusive lower bound of the range defining the area. Examples values: "94108", "9410*", "9*". */
		begin?: string | null;

		/** Optional. A postal code or a pattern of the form prefix* denoting the inclusive upper bound of the range defining the area. It must have the same length as postalCodeRangeBegin: if postalCodeRangeBegin is a postal code then postalCodeRangeEnd must be a postal code too; if postalCodeRangeBegin is a pattern then postalCodeRangeEnd must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching postalCodeRangeBegin. */
		end?: string | null;
	}

	/** A range of postal codes that defines the region area. */
	export interface RegionPostalCodeAreaPostalCodeRangeFormProperties {

		/** Required. A postal code or a pattern of the form prefix* denoting the inclusive lower bound of the range defining the area. Examples values: "94108", "9410*", "9*". */
		begin: FormControl<string | null | undefined>,

		/** Optional. A postal code or a pattern of the form prefix* denoting the inclusive upper bound of the range defining the area. It must have the same length as postalCodeRangeBegin: if postalCodeRangeBegin is a postal code then postalCodeRangeEnd must be a postal code too; if postalCodeRangeBegin is a pattern then postalCodeRangeEnd must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching postalCodeRangeBegin. */
		end: FormControl<string | null | undefined>,
	}
	export function CreateRegionPostalCodeAreaPostalCodeRangeFormGroup() {
		return new FormGroup<RegionPostalCodeAreaPostalCodeRangeFormProperties>({
			begin: new FormControl<string | null | undefined>(undefined),
			end: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the `ListReturnPolicyOnline` method. */
	export interface ListReturnPolicyOnlineResponse {

		/** The retrieved return policies. */
		returnPolicies?: Array<ReturnPolicyOnline>;
	}

	/** Response message for the `ListReturnPolicyOnline` method. */
	export interface ListReturnPolicyOnlineResponseFormProperties {
	}
	export function CreateListReturnPolicyOnlineResponseFormGroup() {
		return new FormGroup<ListReturnPolicyOnlineResponseFormProperties>({
		});

	}


	/** Return policy online object. This is currently used to represent return policies for ads and free listings programs. */
	export interface ReturnPolicyOnline {

		/** The countries of sale where the return policy is applicable. The values must be a valid 2 letter ISO 3166 code, e.g. "US". */
		countries?: Array<string>;

		/** The item conditions that are accepted for returns. This is required to not be empty unless the type of return policy is noReturns. */
		itemConditions?: Array<string>;

		/** The unique user-defined label of the return policy. The same label cannot be used in different return policies for the same country. Policies with the label 'default' will apply to all products, unless a product specifies a return_policy_label attribute. */
		label?: string | null;

		/** The name of the policy as shown in Merchant Center. */
		name?: string | null;

		/** The available policies. */
		policy?: ReturnPolicyOnlinePolicy;

		/** The restocking fee. This can either be a fixed fee or a micro percent. */
		restockingFee?: ReturnPolicyOnlineRestockingFee;

		/** The return methods of how customers can return an item. This value is required to not be empty unless the type of return policy is noReturns. */
		returnMethods?: Array<string>;

		/** Output only. Return policy ID generated by Google. */
		returnPolicyId?: string | null;

		/** The return policy uri. This can used by Google to do a sanity check for the policy. */
		returnPolicyUri?: string | null;

		/** The return reason category information. This required to not be empty unless the type of return policy is noReturns. */
		returnReasonCategoryInfo?: Array<ReturnPolicyOnlineReturnReasonCategoryInfo>;
	}

	/** Return policy online object. This is currently used to represent return policies for ads and free listings programs. */
	export interface ReturnPolicyOnlineFormProperties {

		/** The unique user-defined label of the return policy. The same label cannot be used in different return policies for the same country. Policies with the label 'default' will apply to all products, unless a product specifies a return_policy_label attribute. */
		label: FormControl<string | null | undefined>,

		/** The name of the policy as shown in Merchant Center. */
		name: FormControl<string | null | undefined>,

		/** Output only. Return policy ID generated by Google. */
		returnPolicyId: FormControl<string | null | undefined>,

		/** The return policy uri. This can used by Google to do a sanity check for the policy. */
		returnPolicyUri: FormControl<string | null | undefined>,
	}
	export function CreateReturnPolicyOnlineFormGroup() {
		return new FormGroup<ReturnPolicyOnlineFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			returnPolicyId: new FormControl<string | null | undefined>(undefined),
			returnPolicyUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The available policies. */
	export interface ReturnPolicyOnlinePolicy {

		/** The number of days items can be returned after delivery, where one day is defined to be 24 hours after the delivery timestamp. Required for `numberOfDaysAfterDelivery` returns. */
		days?: string | null;

		/** Policy type. */
		type?: ReturnPolicyOnlinePolicyType | null;
	}

	/** The available policies. */
	export interface ReturnPolicyOnlinePolicyFormProperties {

		/** The number of days items can be returned after delivery, where one day is defined to be 24 hours after the delivery timestamp. Required for `numberOfDaysAfterDelivery` returns. */
		days: FormControl<string | null | undefined>,

		/** Policy type. */
		type: FormControl<ReturnPolicyOnlinePolicyType | null | undefined>,
	}
	export function CreateReturnPolicyOnlinePolicyFormGroup() {
		return new FormGroup<ReturnPolicyOnlinePolicyFormProperties>({
			days: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ReturnPolicyOnlinePolicyType | null | undefined>(undefined),
		});

	}

	export enum ReturnPolicyOnlinePolicyType { TYPE_UNSPECIFIED = 0, NUMBER_OF_DAYS_AFTER_DELIVERY = 1, NO_RETURNS = 2, LIFETIME_RETURNS = 3 }


	/** The restocking fee. This can either be a fixed fee or a micro percent. */
	export interface ReturnPolicyOnlineRestockingFee {

		/** The price represented as a number and currency. */
		fixedFee?: PriceAmount;

		/** Percent of total price in micros. 15,000,000 means 15% of the total price would be charged. */
		microPercent?: number | null;
	}

	/** The restocking fee. This can either be a fixed fee or a micro percent. */
	export interface ReturnPolicyOnlineRestockingFeeFormProperties {

		/** Percent of total price in micros. 15,000,000 means 15% of the total price would be charged. */
		microPercent: FormControl<number | null | undefined>,
	}
	export function CreateReturnPolicyOnlineRestockingFeeFormGroup() {
		return new FormGroup<ReturnPolicyOnlineRestockingFeeFormProperties>({
			microPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The return reason category info wrapper. */
	export interface ReturnPolicyOnlineReturnReasonCategoryInfo {

		/** The corresponding return label source. */
		returnLabelSource?: ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSource | null;

		/** The return reason category. */
		returnReasonCategory?: ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategory | null;

		/** The return shipping fee. This can either be a fixed fee or a boolean to indicate that the customer pays the actual shipping cost. */
		returnShippingFee?: ReturnPolicyOnlineReturnShippingFee;
	}

	/** The return reason category info wrapper. */
	export interface ReturnPolicyOnlineReturnReasonCategoryInfoFormProperties {

		/** The corresponding return label source. */
		returnLabelSource: FormControl<ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSource | null | undefined>,

		/** The return reason category. */
		returnReasonCategory: FormControl<ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategory | null | undefined>,
	}
	export function CreateReturnPolicyOnlineReturnReasonCategoryInfoFormGroup() {
		return new FormGroup<ReturnPolicyOnlineReturnReasonCategoryInfoFormProperties>({
			returnLabelSource: new FormControl<ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSource | null | undefined>(undefined),
			returnReasonCategory: new FormControl<ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategory | null | undefined>(undefined),
		});

	}

	export enum ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSource { RETURN_LABEL_SOURCE_UNSPECIFIED = 0, DOWNLOAD_AND_PRINT = 1, IN_THE_BOX = 2, CUSTOMER_RESPONSIBILITY = 3 }

	export enum ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategory { RETURN_REASON_CATEGORY_UNSPECIFIED = 0, BUYER_REMORSE = 1, ITEM_DEFECT = 2 }


	/** The return shipping fee. This can either be a fixed fee or a boolean to indicate that the customer pays the actual shipping cost. */
	export interface ReturnPolicyOnlineReturnShippingFee {

		/** The price represented as a number and currency. */
		fixedFee?: PriceAmount;

		/** Type of return shipping fee. */
		type?: ReturnPolicyOnlineReturnShippingFeeType | null;
	}

	/** The return shipping fee. This can either be a fixed fee or a boolean to indicate that the customer pays the actual shipping cost. */
	export interface ReturnPolicyOnlineReturnShippingFeeFormProperties {

		/** Type of return shipping fee. */
		type: FormControl<ReturnPolicyOnlineReturnShippingFeeType | null | undefined>,
	}
	export function CreateReturnPolicyOnlineReturnShippingFeeFormGroup() {
		return new FormGroup<ReturnPolicyOnlineReturnShippingFeeFormProperties>({
			type: new FormControl<ReturnPolicyOnlineReturnShippingFeeType | null | undefined>(undefined),
		});

	}

	export enum ReturnPolicyOnlineReturnShippingFeeType { TYPE_UNSPECIFIED = 0, FIXED = 1, CUSTOMER_PAYING_ACTUAL_FEE = 2 }


	/** Local inventory resource. For accepted attribute values, see the local product inventory feed specification. */
	export interface LocalInventory {

		/** The availability of the product. For accepted attribute values, see the local product inventory feed specification. */
		availability?: string | null;

		/** A list of custom (merchant-provided) attributes. Can also be used to submit any attribute of the feed specification in its generic form, for example, `{ "name": "size type", "value": "regular" }`. */
		customAttributes?: Array<CustomAttribute>;

		/** The in-store product location. */
		instoreProductLocation?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#localInventory`" */
		kind?: string | null;

		/** The supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the local product inventory feed specification. */
		pickupMethod?: string | null;

		/** The expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the local product inventory feed specification. */
		pickupSla?: string | null;
		price?: Price;

		/** The quantity of the product. Must be nonnegative. */
		quantity?: number | null;
		salePrice?: Price;

		/** A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates may be specified as 'null' if undecided. */
		salePriceEffectiveDate?: string | null;

		/** Required. The store code of this local inventory resource. */
		storeCode?: string | null;
	}

	/** Local inventory resource. For accepted attribute values, see the local product inventory feed specification. */
	export interface LocalInventoryFormProperties {

		/** The availability of the product. For accepted attribute values, see the local product inventory feed specification. */
		availability: FormControl<string | null | undefined>,

		/** The in-store product location. */
		instoreProductLocation: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#localInventory`" */
		kind: FormControl<string | null | undefined>,

		/** The supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the local product inventory feed specification. */
		pickupMethod: FormControl<string | null | undefined>,

		/** The expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the local product inventory feed specification. */
		pickupSla: FormControl<string | null | undefined>,

		/** The quantity of the product. Must be nonnegative. */
		quantity: FormControl<number | null | undefined>,

		/** A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates may be specified as 'null' if undecided. */
		salePriceEffectiveDate: FormControl<string | null | undefined>,

		/** Required. The store code of this local inventory resource. */
		storeCode: FormControl<string | null | undefined>,
	}
	export function CreateLocalInventoryFormGroup() {
		return new FormGroup<LocalInventoryFormProperties>({
			availability: new FormControl<string | null | undefined>(undefined),
			instoreProductLocation: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			pickupMethod: new FormControl<string | null | undefined>(undefined),
			pickupSla: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			salePriceEffectiveDate: new FormControl<string | null | undefined>(undefined),
			storeCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocalinventoryCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<LocalinventoryCustomBatchRequestEntry>;
	}
	export interface LocalinventoryCustomBatchRequestFormProperties {
	}
	export function CreateLocalinventoryCustomBatchRequestFormGroup() {
		return new FormGroup<LocalinventoryCustomBatchRequestFormProperties>({
		});

	}


	/** Batch entry encoding a single local inventory update request. */
	export interface LocalinventoryCustomBatchRequestEntry {

		/** An entry ID, unique within the batch request. */
		batchId?: number | null;

		/** Local inventory resource. For accepted attribute values, see the local product inventory feed specification. */
		localInventory?: LocalInventory;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/** Method of the batch request entry. Acceptable values are: - "`insert`" */
		method?: string | null;

		/** The ID of the product for which to update local inventory. */
		productId?: string | null;
	}

	/** Batch entry encoding a single local inventory update request. */
	export interface LocalinventoryCustomBatchRequestEntryFormProperties {

		/** An entry ID, unique within the batch request. */
		batchId: FormControl<number | null | undefined>,

		/** The ID of the managing account. */
		merchantId: FormControl<string | null | undefined>,

		/** Method of the batch request entry. Acceptable values are: - "`insert`" */
		method: FormControl<string | null | undefined>,

		/** The ID of the product for which to update local inventory. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateLocalinventoryCustomBatchRequestEntryFormGroup() {
		return new FormGroup<LocalinventoryCustomBatchRequestEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocalinventoryCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<LocalinventoryCustomBatchResponseEntry>;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#localinventoryCustomBatchResponse`". */
		kind?: string | null;
	}
	export interface LocalinventoryCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#localinventoryCustomBatchResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLocalinventoryCustomBatchResponseFormGroup() {
		return new FormGroup<LocalinventoryCustomBatchResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Batch entry encoding a single local inventory update response. */
	export interface LocalinventoryCustomBatchResponseEntry {

		/** The ID of the request entry this entry responds to. */
		batchId?: number | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#localinventoryCustomBatchResponseEntry`" */
		kind?: string | null;
	}

	/** Batch entry encoding a single local inventory update response. */
	export interface LocalinventoryCustomBatchResponseEntryFormProperties {

		/** The ID of the request entry this entry responds to. */
		batchId: FormControl<number | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#localinventoryCustomBatchResponseEntry`" */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateLocalinventoryCustomBatchResponseEntryFormGroup() {
		return new FormGroup<LocalinventoryCustomBatchResponseEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
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
		returnPricingInfo?: ReturnPricingInfo;

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
		merchantRejectionReason?: MerchantRejectionReason;
		merchantReturnReason?: RefundReason;
		product?: OrderLineItemProduct;
		refundableAmount?: MonetaryAmount;

		/** Unit level ID for the return item. Different units of the same product will have different IDs. */
		returnItemId?: string | null;

		/** IDs of the return shipments that this return item belongs to. */
		returnShipmentIds?: Array<string>;

		/** ID of the original shipment group. Provided for shipments with invoice support. */
		shipmentGroupId?: string | null;

		/** ID of the shipment unit assigned by the merchant. Provided for shipments with invoice support. */
		shipmentUnitId?: string | null;

		/** State of the item. Acceptable values are: - "`canceled`" - "`new`" - "`received`" - "`refunded`" - "`rejected`" */
		state?: string | null;
	}
	export interface MerchantOrderReturnItemFormProperties {

		/** Product level item ID. If the returned items are of the same product, they will have the same ID. */
		itemId: FormControl<string | null | undefined>,

		/** Unit level ID for the return item. Different units of the same product will have different IDs. */
		returnItemId: FormControl<string | null | undefined>,

		/** ID of the original shipment group. Provided for shipments with invoice support. */
		shipmentGroupId: FormControl<string | null | undefined>,

		/** ID of the shipment unit assigned by the merchant. Provided for shipments with invoice support. */
		shipmentUnitId: FormControl<string | null | undefined>,

		/** State of the item. Acceptable values are: - "`canceled`" - "`new`" - "`received`" - "`refunded`" - "`rejected`" */
		state: FormControl<string | null | undefined>,
	}
	export function CreateMerchantOrderReturnItemFormGroup() {
		return new FormGroup<MerchantOrderReturnItemFormProperties>({
			itemId: new FormControl<string | null | undefined>(undefined),
			returnItemId: new FormControl<string | null | undefined>(undefined),
			shipmentGroupId: new FormControl<string | null | undefined>(undefined),
			shipmentUnitId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MerchantRejectionReason {

		/** Description of the reason. */
		description?: string | null;

		/** Code of the rejection reason. */
		reasonCode?: string | null;
	}
	export interface MerchantRejectionReasonFormProperties {

		/** Description of the reason. */
		description: FormControl<string | null | undefined>,

		/** Code of the rejection reason. */
		reasonCode: FormControl<string | null | undefined>,
	}
	export function CreateMerchantRejectionReasonFormGroup() {
		return new FormGroup<MerchantRejectionReasonFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			reasonCode: new FormControl<string | null | undefined>(undefined),
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

		/** The CLDR territory code of the target country of the product. */
		targetCountry?: string | null;

		/** The title of the product. */
		title?: string | null;

		/** Variant attributes for the item. These are dimensions of the product, such as color, gender, material, pattern, and size. You can find a comprehensive list of variant attributes here. */
		variantAttributes?: Array<OrderLineItemProductVariantAttribute>;
	}
	export interface OrderLineItemProductFormProperties {

		/** Brand of the item. */
		brand: FormControl<string | null | undefined>,

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

		/** The CLDR territory code of the target country of the product. */
		targetCountry: FormControl<string | null | undefined>,

		/** The title of the product. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateOrderLineItemProductFormGroup() {
		return new FormGroup<OrderLineItemProductFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined),
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

	export interface MonetaryAmount {
		priceAmount?: Price;
		taxAmount?: Price;
	}
	export interface MonetaryAmountFormProperties {
	}
	export function CreateMonetaryAmountFormGroup() {
		return new FormGroup<MonetaryAmountFormProperties>({
		});

	}

	export interface ReturnPricingInfo {

		/** Default option for whether merchant should charge the customer for return shipping costs, based on customer selected return reason and merchant's return policy for the items being returned. */
		chargeReturnShippingFee?: boolean | null;
		maxReturnShippingFee?: MonetaryAmount;
		refundableItemsTotalAmount?: MonetaryAmount;
		refundableShippingAmount?: MonetaryAmount;
		totalRefundedAmount?: MonetaryAmount;
	}
	export interface ReturnPricingInfoFormProperties {

		/** Default option for whether merchant should charge the customer for return shipping costs, based on customer selected return reason and merchant's return policy for the items being returned. */
		chargeReturnShippingFee: FormControl<boolean | null | undefined>,
	}
	export function CreateReturnPricingInfoFormGroup() {
		return new FormGroup<ReturnPricingInfoFormProperties>({
			chargeReturnShippingFee: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ReturnShipment {

		/** The date of creation of the shipment, in ISO 8601 format. */
		creationDate?: string | null;

		/** The date of delivery of the shipment, in ISO 8601 format. */
		deliveryDate?: string | null;

		/** Type of the return method. Acceptable values are: - "`byMail`" - "`contactCustomerSupport`" - "`returnless`" - "`inStore`" */
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

		/** Type of the return method. Acceptable values are: - "`byMail`" - "`contactCustomerSupport`" - "`returnless`" - "`inStore`" */
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


	/** Performance metrics. Values are only set for metrics requested explicitly in the request's search query. */
	export interface Metrics {

		/** Average order size - the average number of items in an order. **This metric cannot be segmented by product dimensions and customer_country_code.** */
		aos?: number | null;

		/** Average order value in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) - the average value (total price of items) of all placed orders. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by product dimensions and customer_country_code.** */
		aovMicros?: number | null;

		/** Number of clicks. */
		clicks?: string | null;

		/** Number of conversions divided by the number of clicks, reported on the impression date. The metric is currently available only for the FREE_PRODUCT_LISTING program. */
		conversionRate?: number | null;

		/** Value of conversions in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) attributed to the product, reported on the conversion date. The metric is currently available only for the FREE_PRODUCT_LISTING program. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. */
		conversionValueMicros?: string | null;

		/** Number of conversions attributed to the product, reported on the conversion date. Depending on the attribution model, a conversion might be distributed across multiple clicks, where each click gets its own credit assigned. This metric is a sum of all such credits. The metric is currently available only for the FREE_PRODUCT_LISTING program. */
		conversions?: number | null;

		/** Click-through rate - the number of clicks merchant's products receive (clicks) divided by the number of times the products are shown (impressions). */
		ctr?: number | null;

		/** Average number of days between an order being placed and the order being fully shipped, reported on the last shipment date. **This metric cannot be segmented by product dimensions and customer_country_code.** */
		daysToShip?: number | null;

		/** Number of times merchant's products are shown. */
		impressions?: string | null;

		/** Average number of days between an item being ordered and the item being **This metric cannot be segmented by customer_country_code.** */
		itemDaysToShip?: number | null;

		/** Percentage of shipped items in relation to all finalized items (shipped or rejected by the merchant; unshipped items are not taken into account), reported on the order date. Item fill rate is lowered by merchant rejections. **This metric cannot be segmented by customer_country_code.** */
		itemFillRate?: number | null;

		/** Total price of ordered items in micros (1 millionth of a standard unit, 1 USD = 1000000 micros). Excludes shipping, taxes (US only), and customer cancellations that happened within 30 minutes of placing the order. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.** */
		orderedItemSalesMicros?: string | null;

		/** Number of ordered items. Excludes customer cancellations that happened within 30 minutes of placing the order. **This metric cannot be segmented by customer_country_code.** */
		orderedItems?: string | null;

		/** Number of placed orders. Excludes customer cancellations that happened within 30 minutes of placing the order. **This metric cannot be segmented by product dimensions and customer_country_code.** */
		orders?: string | null;

		/** Number of ordered items canceled by the merchant, reported on the order date. **This metric cannot be segmented by customer_country_code.** */
		rejectedItems?: string | null;

		/** Total price of returned items divided by the total price of shipped items, reported on the order date. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.** */
		returnRate?: number | null;

		/** Number of ordered items sent back for return, reported on the date when the merchant accepted the return. **This metric cannot be segmented by customer_country_code.** */
		returnedItems?: string | null;

		/** Total price of ordered items sent back for return in micros (1 millionth of a standard unit, 1 USD = 1000000 micros), reported on the date when the merchant accepted the return. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.** */
		returnsMicros?: string | null;

		/** Total price of shipped items in micros (1 millionth of a standard unit, 1 USD = 1000000 micros), reported on the order date. Excludes shipping and taxes (US only). The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.** */
		shippedItemSalesMicros?: string | null;

		/** Number of shipped items, reported on the shipment date. **This metric cannot be segmented by customer_country_code.** */
		shippedItems?: string | null;

		/** Number of fully shipped orders, reported on the last shipment date. **This metric cannot be segmented by product dimensions and customer_country_code.** */
		shippedOrders?: string | null;

		/** Number of ordered items not shipped up until the end of the queried day. If a multi-day period is specified in the search query, the returned value is the average number of unshipped items over the days in the queried period. **This metric cannot be segmented by customer_country_code.** */
		unshippedItems?: number | null;

		/** Number of orders not shipped or partially shipped up until the end of the queried day. If a multi-day period is specified in the search query, the returned value is the average number of unshipped orders over the days in the queried period. **This metric cannot be segmented by product dimensions and customer_country_code.** */
		unshippedOrders?: number | null;
	}

	/** Performance metrics. Values are only set for metrics requested explicitly in the request's search query. */
	export interface MetricsFormProperties {

		/** Average order size - the average number of items in an order. **This metric cannot be segmented by product dimensions and customer_country_code.** */
		aos: FormControl<number | null | undefined>,

		/** Average order value in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) - the average value (total price of items) of all placed orders. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by product dimensions and customer_country_code.** */
		aovMicros: FormControl<number | null | undefined>,

		/** Number of clicks. */
		clicks: FormControl<string | null | undefined>,

		/** Number of conversions divided by the number of clicks, reported on the impression date. The metric is currently available only for the FREE_PRODUCT_LISTING program. */
		conversionRate: FormControl<number | null | undefined>,

		/** Value of conversions in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) attributed to the product, reported on the conversion date. The metric is currently available only for the FREE_PRODUCT_LISTING program. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. */
		conversionValueMicros: FormControl<string | null | undefined>,

		/** Number of conversions attributed to the product, reported on the conversion date. Depending on the attribution model, a conversion might be distributed across multiple clicks, where each click gets its own credit assigned. This metric is a sum of all such credits. The metric is currently available only for the FREE_PRODUCT_LISTING program. */
		conversions: FormControl<number | null | undefined>,

		/** Click-through rate - the number of clicks merchant's products receive (clicks) divided by the number of times the products are shown (impressions). */
		ctr: FormControl<number | null | undefined>,

		/** Average number of days between an order being placed and the order being fully shipped, reported on the last shipment date. **This metric cannot be segmented by product dimensions and customer_country_code.** */
		daysToShip: FormControl<number | null | undefined>,

		/** Number of times merchant's products are shown. */
		impressions: FormControl<string | null | undefined>,

		/** Average number of days between an item being ordered and the item being **This metric cannot be segmented by customer_country_code.** */
		itemDaysToShip: FormControl<number | null | undefined>,

		/** Percentage of shipped items in relation to all finalized items (shipped or rejected by the merchant; unshipped items are not taken into account), reported on the order date. Item fill rate is lowered by merchant rejections. **This metric cannot be segmented by customer_country_code.** */
		itemFillRate: FormControl<number | null | undefined>,

		/** Total price of ordered items in micros (1 millionth of a standard unit, 1 USD = 1000000 micros). Excludes shipping, taxes (US only), and customer cancellations that happened within 30 minutes of placing the order. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.** */
		orderedItemSalesMicros: FormControl<string | null | undefined>,

		/** Number of ordered items. Excludes customer cancellations that happened within 30 minutes of placing the order. **This metric cannot be segmented by customer_country_code.** */
		orderedItems: FormControl<string | null | undefined>,

		/** Number of placed orders. Excludes customer cancellations that happened within 30 minutes of placing the order. **This metric cannot be segmented by product dimensions and customer_country_code.** */
		orders: FormControl<string | null | undefined>,

		/** Number of ordered items canceled by the merchant, reported on the order date. **This metric cannot be segmented by customer_country_code.** */
		rejectedItems: FormControl<string | null | undefined>,

		/** Total price of returned items divided by the total price of shipped items, reported on the order date. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.** */
		returnRate: FormControl<number | null | undefined>,

		/** Number of ordered items sent back for return, reported on the date when the merchant accepted the return. **This metric cannot be segmented by customer_country_code.** */
		returnedItems: FormControl<string | null | undefined>,

		/** Total price of ordered items sent back for return in micros (1 millionth of a standard unit, 1 USD = 1000000 micros), reported on the date when the merchant accepted the return. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.** */
		returnsMicros: FormControl<string | null | undefined>,

		/** Total price of shipped items in micros (1 millionth of a standard unit, 1 USD = 1000000 micros), reported on the order date. Excludes shipping and taxes (US only). The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.** */
		shippedItemSalesMicros: FormControl<string | null | undefined>,

		/** Number of shipped items, reported on the shipment date. **This metric cannot be segmented by customer_country_code.** */
		shippedItems: FormControl<string | null | undefined>,

		/** Number of fully shipped orders, reported on the last shipment date. **This metric cannot be segmented by product dimensions and customer_country_code.** */
		shippedOrders: FormControl<string | null | undefined>,

		/** Number of ordered items not shipped up until the end of the queried day. If a multi-day period is specified in the search query, the returned value is the average number of unshipped items over the days in the queried period. **This metric cannot be segmented by customer_country_code.** */
		unshippedItems: FormControl<number | null | undefined>,

		/** Number of orders not shipped or partially shipped up until the end of the queried day. If a multi-day period is specified in the search query, the returned value is the average number of unshipped orders over the days in the queried period. **This metric cannot be segmented by product dimensions and customer_country_code.** */
		unshippedOrders: FormControl<number | null | undefined>,
	}
	export function CreateMetricsFormGroup() {
		return new FormGroup<MetricsFormProperties>({
			aos: new FormControl<number | null | undefined>(undefined),
			aovMicros: new FormControl<number | null | undefined>(undefined),
			clicks: new FormControl<string | null | undefined>(undefined),
			conversionRate: new FormControl<number | null | undefined>(undefined),
			conversionValueMicros: new FormControl<string | null | undefined>(undefined),
			conversions: new FormControl<number | null | undefined>(undefined),
			ctr: new FormControl<number | null | undefined>(undefined),
			daysToShip: new FormControl<number | null | undefined>(undefined),
			impressions: new FormControl<string | null | undefined>(undefined),
			itemDaysToShip: new FormControl<number | null | undefined>(undefined),
			itemFillRate: new FormControl<number | null | undefined>(undefined),
			orderedItemSalesMicros: new FormControl<string | null | undefined>(undefined),
			orderedItems: new FormControl<string | null | undefined>(undefined),
			orders: new FormControl<string | null | undefined>(undefined),
			rejectedItems: new FormControl<string | null | undefined>(undefined),
			returnRate: new FormControl<number | null | undefined>(undefined),
			returnedItems: new FormControl<string | null | undefined>(undefined),
			returnsMicros: new FormControl<string | null | undefined>(undefined),
			shippedItemSalesMicros: new FormControl<string | null | undefined>(undefined),
			shippedItems: new FormControl<string | null | undefined>(undefined),
			shippedOrders: new FormControl<string | null | undefined>(undefined),
			unshippedItems: new FormControl<number | null | undefined>(undefined),
			unshippedOrders: new FormControl<number | null | undefined>(undefined),
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


	/** Request message for the OnboardProgram method. */
	export interface OnboardBuyOnGoogleProgramRequest {

		/** The customer service email. */
		customerServiceEmail?: string | null;
	}

	/** Request message for the OnboardProgram method. */
	export interface OnboardBuyOnGoogleProgramRequestFormProperties {

		/** The customer service email. */
		customerServiceEmail: FormControl<string | null | undefined>,
	}
	export function CreateOnboardBuyOnGoogleProgramRequestFormGroup() {
		return new FormGroup<OnboardBuyOnGoogleProgramRequestFormProperties>({
			customerServiceEmail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Order. Production access (all methods) requires the order manager role. Sandbox access does not. */
	export interface Order {

		/** Whether the order was acknowledged. */
		acknowledged?: boolean | null;

		/** List of key-value pairs that are attached to a given order. */
		annotations?: Array<OrderOrderAnnotation>;
		billingAddress?: OrderAddress;
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
		netPriceAmount?: Price;
		netTaxAmount?: Price;

		/** The status of the payment. Acceptable values are: - "`paymentCaptured`" - "`paymentRejected`" - "`paymentSecured`" - "`pendingAuthorization`" */
		paymentStatus?: string | null;
		pickupDetails?: OrderPickupDetails;

		/** The date when the order was placed, in ISO 8601 format. */
		placedDate?: string | null;

		/** Promotions associated with the order. To determine which promotions apply to which products, check the `Promotions[].appliedItems[].lineItemId` field against the `LineItems[].id` field for each promotion. If a promotion is applied to more than 1 offerId, divide the discount value by the number of affected offers to determine how much discount to apply to each offerId. Examples: 1. To calculate price paid by the customer for a single line item including the discount: For each promotion, subtract the `LineItems[].adjustments[].priceAdjustment.value` amount from the `LineItems[].Price.value`. 2. To calculate price paid by the customer for a single line item including the discount in case of multiple quantity: For each promotion, divide the `LineItems[].adjustments[].priceAdjustment.value` by the quantity of products then subtract the resulting value from the `LineItems[].Product.Price.value` for each quantity item. Only 1 promotion can be applied to an offerId in a given order. To refund an item which had a promotion applied to it, make sure to refund the amount after first subtracting the promotion discount from the item price. More details about the program are here. */
		promotions?: Array<OrderPromotion>;

		/** Refunds for the order. */
		refunds?: Array<OrderRefund>;

		/** Shipments of the order. */
		shipments?: Array<OrderShipment>;
		shippingCost?: Price;
		shippingCostTax?: Price;

		/** The status of the order. Acceptable values are: - "`canceled`" - "`delivered`" - "`inProgress`" - "`partiallyDelivered`" - "`partiallyReturned`" - "`partiallyShipped`" - "`pendingShipment`" - "`returned`" - "`shipped`" */
		status?: string | null;

		/** The party responsible for collecting and remitting taxes. Acceptable values are: - "`marketplaceFacilitator`" - "`merchant`" */
		taxCollector?: string | null;
	}

	/** Order. Production access (all methods) requires the order manager role. Sandbox access does not. */
	export interface OrderFormProperties {

		/** Whether the order was acknowledged. */
		acknowledged: FormControl<boolean | null | undefined>,

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

		/** The status of the order. Acceptable values are: - "`canceled`" - "`delivered`" - "`inProgress`" - "`partiallyDelivered`" - "`partiallyReturned`" - "`partiallyShipped`" - "`pendingShipment`" - "`returned`" - "`shipped`" */
		status: FormControl<string | null | undefined>,

		/** The party responsible for collecting and remitting taxes. Acceptable values are: - "`marketplaceFacilitator`" - "`merchant`" */
		taxCollector: FormControl<string | null | undefined>,
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
			acknowledged: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			merchantOrderId: new FormControl<string | null | undefined>(undefined),
			paymentStatus: new FormControl<string | null | undefined>(undefined),
			placedDate: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			taxCollector: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderOrderAnnotation {

		/** Key for additional google provided (as key-value pairs) annotation. */
		key?: string | null;

		/** Value for additional google provided (as key-value pairs) annotation. */
		value?: string | null;
	}
	export interface OrderOrderAnnotationFormProperties {

		/** Key for additional google provided (as key-value pairs) annotation. */
		key: FormControl<string | null | undefined>,

		/** Value for additional google provided (as key-value pairs) annotation. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateOrderOrderAnnotationFormGroup() {
		return new FormGroup<OrderOrderAnnotationFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderAddress {

		/** CLDR country code (for example, "US"). */
		country?: string | null;

		/** Strings representing the lines of the printed label for mailing the order, for example: John Smith 1600 Amphitheatre Parkway Mountain View, CA, 94043 United States */
		fullAddress?: Array<string>;

		/** Whether the address is a post office box. */
		isPostOfficeBox?: boolean | null;

		/** City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs). */
		locality?: string | null;

		/** Postal Code or ZIP (for example, "94043"). */
		postalCode?: string | null;

		/** Name of the recipient. */
		recipientName?: string | null;

		/** Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC"). */
		region?: string | null;

		/** Street-level part of the address. Use `\n` to add a second line. */
		streetAddress?: Array<string>;
	}
	export interface OrderAddressFormProperties {

		/** CLDR country code (for example, "US"). */
		country: FormControl<string | null | undefined>,

		/** Whether the address is a post office box. */
		isPostOfficeBox: FormControl<boolean | null | undefined>,

		/** City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs). */
		locality: FormControl<string | null | undefined>,

		/** Postal Code or ZIP (for example, "94043"). */
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

	export interface OrderCustomer {

		/** Full name of the customer. */
		fullName?: string | null;

		/** Email address for the merchant to send value-added tax or invoice documentation of the order. Only the last document sent is made available to the customer. For more information, see About automated VAT invoicing for Buy on Google. */
		invoiceReceivingEmail?: string | null;
		loyaltyInfo?: OrderCustomerLoyaltyInfo;
		marketingRightsInfo?: OrderCustomerMarketingRightsInfo;
	}
	export interface OrderCustomerFormProperties {

		/** Full name of the customer. */
		fullName: FormControl<string | null | undefined>,

		/** Email address for the merchant to send value-added tax or invoice documentation of the order. Only the last document sent is made available to the customer. For more information, see About automated VAT invoicing for Buy on Google. */
		invoiceReceivingEmail: FormControl<string | null | undefined>,
	}
	export function CreateOrderCustomerFormGroup() {
		return new FormGroup<OrderCustomerFormProperties>({
			fullName: new FormControl<string | null | undefined>(undefined),
			invoiceReceivingEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderCustomerLoyaltyInfo {

		/** The loyalty card/membership number. */
		loyaltyNumber?: string | null;

		/** Name of card/membership holder, this field will be populated when */
		name?: string | null;
	}
	export interface OrderCustomerLoyaltyInfoFormProperties {

		/** The loyalty card/membership number. */
		loyaltyNumber: FormControl<string | null | undefined>,

		/** Name of card/membership holder, this field will be populated when */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOrderCustomerLoyaltyInfoFormGroup() {
		return new FormGroup<OrderCustomerLoyaltyInfoFormProperties>({
			loyaltyNumber: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
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

	export interface OrderLineItem {

		/** Price and tax adjustments applied on the line item. */
		adjustments?: Array<OrderLineItemAdjustment>;

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

		/** Number of items undeliverable. */
		quantityUndeliverable?: number | null;
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

		/** Number of items undeliverable. */
		quantityUndeliverable: FormControl<number | null | undefined>,
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
			quantityUndeliverable: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OrderLineItemAdjustment {
		priceAdjustment?: Price;
		taxAdjustment?: Price;

		/** Type of this adjustment. Acceptable values are: - "`promotion`" */
		type?: string | null;
	}
	export interface OrderLineItemAdjustmentFormProperties {

		/** Type of this adjustment. Acceptable values are: - "`promotion`" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateOrderLineItemAdjustmentFormGroup() {
		return new FormGroup<OrderLineItemAdjustmentFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
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

		/** The reason for the cancellation. Orders that are canceled with a noInventory reason will lead to the removal of the product from Buy on Google until you make an update to that product. This won't affect your Shopping ads. Acceptable values are: - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`customerCanceled`" - "`customerInitiatedCancel`" - "`customerSupportRequested`" - "`failToPushOrderGoogleError`" - "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" - "`failToPushOrderToMerchantOutOfStock`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" - "`priceError`" - "`returnRefundAbuse`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`failedToCaptureFunds`" */
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

		/** The reason for the cancellation. Orders that are canceled with a noInventory reason will lead to the removal of the product from Buy on Google until you make an update to that product. This won't affect your Shopping ads. Acceptable values are: - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`customerCanceled`" - "`customerInitiatedCancel`" - "`customerSupportRequested`" - "`failToPushOrderGoogleError`" - "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" - "`failToPushOrderToMerchantOutOfStock`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" - "`priceError`" - "`returnRefundAbuse`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`failedToCaptureFunds`" */
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

		/** The promised time in minutes in which the order will be ready for pickup. This only applies to buy-online-pickup-in-store same-day order. */
		pickupPromiseInMinutes?: number | null;

		/** Required. The ship by date, in ISO 8601 format. */
		shipByDate?: string | null;

		/** Type of shipment. Indicates whether `deliveryDetails` or `pickupDetails` is applicable for this shipment. Acceptable values are: - "`delivery`" - "`pickup`" */
		type?: string | null;
	}
	export interface OrderLineItemShippingDetailsFormProperties {

		/** Required. The delivery by date, in ISO 8601 format. */
		deliverByDate: FormControl<string | null | undefined>,

		/** The promised time in minutes in which the order will be ready for pickup. This only applies to buy-online-pickup-in-store same-day order. */
		pickupPromiseInMinutes: FormControl<number | null | undefined>,

		/** Required. The ship by date, in ISO 8601 format. */
		shipByDate: FormControl<string | null | undefined>,

		/** Type of shipment. Indicates whether `deliveryDetails` or `pickupDetails` is applicable for this shipment. Acceptable values are: - "`delivery`" - "`pickup`" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateOrderLineItemShippingDetailsFormGroup() {
		return new FormGroup<OrderLineItemShippingDetailsFormProperties>({
			deliverByDate: new FormControl<string | null | undefined>(undefined),
			pickupPromiseInMinutes: new FormControl<number | null | undefined>(undefined),
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

	export interface OrderPickupDetails {
		address?: OrderAddress;

		/** Collectors authorized to pick up shipment from the pickup location. */
		collectors?: Array<OrderPickupDetailsCollector>;

		/** ID of the pickup location. */
		locationId?: string | null;

		/** The pickup type of this order. Acceptable values are: - "`merchantStore`" - "`merchantStoreCurbside`" - "`merchantStoreLocker`" - "`thirdPartyPickupPoint`" - "`thirdPartyLocker`" */
		pickupType?: string | null;
	}
	export interface OrderPickupDetailsFormProperties {

		/** ID of the pickup location. */
		locationId: FormControl<string | null | undefined>,

		/** The pickup type of this order. Acceptable values are: - "`merchantStore`" - "`merchantStoreCurbside`" - "`merchantStoreLocker`" - "`thirdPartyPickupPoint`" - "`thirdPartyLocker`" */
		pickupType: FormControl<string | null | undefined>,
	}
	export function CreateOrderPickupDetailsFormGroup() {
		return new FormGroup<OrderPickupDetailsFormProperties>({
			locationId: new FormControl<string | null | undefined>(undefined),
			pickupType: new FormControl<string | null | undefined>(undefined),
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

	export interface OrderPromotion {

		/** Items that this promotion may be applied to. If empty, there are no restrictions on applicable items and quantity. This field will also be empty for shipping promotions because shipping is not tied to any specific item. */
		applicableItems?: Array<OrderPromotionItem>;

		/** Items that this promotion have been applied to. Do not provide for `orders.createtestorder`. This field will be empty for shipping promotions because shipping is not tied to any specific item. */
		appliedItems?: Array<OrderPromotionItem>;

		/** Promotion end time in ISO 8601 format. Date, time, and offset required, for example, "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z". */
		endTime?: string | null;

		/** Required. The party funding the promotion. Only `merchant` is supported for `orders.createtestorder`. Acceptable values are: - "`google`" - "`merchant`" */
		funder?: string | null;

		/** Required. This field is used to identify promotions within merchants' own systems. */
		merchantPromotionId?: string | null;
		priceValue?: Price;

		/** A short title of the promotion to be shown on the checkout page. Do not provide for `orders.createtestorder`. */
		shortTitle?: string | null;

		/** Promotion start time in ISO 8601 format. Date, time, and offset required, for example, "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z". */
		startTime?: string | null;

		/** Required. The category of the promotion. Only `moneyOff` is supported for `orders.createtestorder`. Acceptable values are: - "`buyMGetMoneyOff`" - "`buyMGetNMoneyOff`" - "`buyMGetNPercentOff`" - "`buyMGetPercentOff`" - "`freeGift`" - "`freeGiftWithItemId`" - "`freeGiftWithValue`" - "`freeShippingOvernight`" - "`freeShippingStandard`" - "`freeShippingTwoDay`" - "`moneyOff`" - "`percentOff`" - "`rewardPoints`" - "`salePrice`" */
		subtype?: string | null;
		taxValue?: Price;

		/** Required. The title of the promotion. */
		title?: string | null;

		/** Required. The scope of the promotion. Only `product` is supported for `orders.createtestorder`. Acceptable values are: - "`product`" - "`shipping`" */
		type?: string | null;
	}
	export interface OrderPromotionFormProperties {

		/** Promotion end time in ISO 8601 format. Date, time, and offset required, for example, "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z". */
		endTime: FormControl<string | null | undefined>,

		/** Required. The party funding the promotion. Only `merchant` is supported for `orders.createtestorder`. Acceptable values are: - "`google`" - "`merchant`" */
		funder: FormControl<string | null | undefined>,

		/** Required. This field is used to identify promotions within merchants' own systems. */
		merchantPromotionId: FormControl<string | null | undefined>,

		/** A short title of the promotion to be shown on the checkout page. Do not provide for `orders.createtestorder`. */
		shortTitle: FormControl<string | null | undefined>,

		/** Promotion start time in ISO 8601 format. Date, time, and offset required, for example, "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z". */
		startTime: FormControl<string | null | undefined>,

		/** Required. The category of the promotion. Only `moneyOff` is supported for `orders.createtestorder`. Acceptable values are: - "`buyMGetMoneyOff`" - "`buyMGetNMoneyOff`" - "`buyMGetNPercentOff`" - "`buyMGetPercentOff`" - "`freeGift`" - "`freeGiftWithItemId`" - "`freeGiftWithValue`" - "`freeShippingOvernight`" - "`freeShippingStandard`" - "`freeShippingTwoDay`" - "`moneyOff`" - "`percentOff`" - "`rewardPoints`" - "`salePrice`" */
		subtype: FormControl<string | null | undefined>,

		/** Required. The title of the promotion. */
		title: FormControl<string | null | undefined>,

		/** Required. The scope of the promotion. Only `product` is supported for `orders.createtestorder`. Acceptable values are: - "`product`" - "`shipping`" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateOrderPromotionFormGroup() {
		return new FormGroup<OrderPromotionFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			funder: new FormControl<string | null | undefined>(undefined),
			merchantPromotionId: new FormControl<string | null | undefined>(undefined),
			shortTitle: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			subtype: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderPromotionItem {

		/** The line item ID of a product. Do not provide for `orders.createtestorder`. */
		lineItemId?: string | null;

		/** Required. Offer ID of a product. Only for `orders.createtestorder`. */
		offerId?: string | null;

		/** `orders.createtestorder`. */
		productId?: string | null;

		/** The quantity of the associated product. Do not provide for `orders.createtestorder`. */
		quantity?: number | null;
	}
	export interface OrderPromotionItemFormProperties {

		/** The line item ID of a product. Do not provide for `orders.createtestorder`. */
		lineItemId: FormControl<string | null | undefined>,

		/** Required. Offer ID of a product. Only for `orders.createtestorder`. */
		offerId: FormControl<string | null | undefined>,

		/** `orders.createtestorder`. */
		productId: FormControl<string | null | undefined>,

		/** The quantity of the associated product. Do not provide for `orders.createtestorder`. */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateOrderPromotionItemFormGroup() {
		return new FormGroup<OrderPromotionItemFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			offerId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
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

		/** The carrier handling the shipment. For supported carriers, Google includes the carrier name and tracking URL in emails to customers. For select supported carriers, Google also automatically updates the shipment status based on the provided shipment ID. *Note:* You can also use unsupported carriers, but emails to customers won't include the carrier name or tracking URL, and there will be no automatic order status updates. Supported carriers for "US" are: - "`ups`" (United Parcel Service) *automatic status updates* - "`usps`" (United States Postal Service) *automatic status updates* - "`fedex`" (FedEx) *automatic status updates * - "`dhl`" (DHL eCommerce) *automatic status updates* (US only) - "`ontrac`" (OnTrac) *automatic status updates * - "`dhl express`" (DHL Express) - "`deliv`" (Deliv) - "`dynamex`" (TForce) - "`lasership`" (LaserShip) - "`mpx`" (Military Parcel Xpress) - "`uds`" (United Delivery Service) - "`efw`" (Estes Forwarding Worldwide) - "`jd logistics`" (JD Logistics) - "`yunexpress`" (YunExpress) - "`china post`" (China Post) - "`china ems`" (China Post Express Mail Service) - "`singapore post`" (Singapore Post) - "`pos malaysia`" (Pos Malaysia) - "`postnl`" (PostNL) - "`ptt`" (PTT Turkish Post) - "`eub`" (ePacket) - "`chukou1`" (Chukou1 Logistics) - "`bestex`" (Best Express) - "`canada post`" (Canada Post) - "`purolator`" (Purolator) - "`canpar`" (Canpar) - "`india post`" (India Post) - "`blue dart`" (Blue Dart) - "`delhivery`" (Delhivery) - "`dtdc`" (DTDC) - "`tpc india`" (TPC India) - "`lso`" (Lone Star Overnight) - "`tww`" (Team Worldwide) - "`deliver-it`" (Deliver-IT) - "`cdl last mile`" (CDL Last Mile) Supported carriers for FR are: - "`la poste`" (La Poste) *automatic status updates * - "`colissimo`" (Colissimo by La Poste) *automatic status updates* - "`ups`" (United Parcel Service) *automatic status updates * - "`chronopost`" (Chronopost by La Poste) - "`gls`" (General Logistics Systems France) - "`dpd`" (DPD Group by GeoPost) - "`bpost`" (Belgian Post Group) - "`colis prive`" (Colis Privé) - "`boxtal`" (Boxtal) - "`geodis`" (GEODIS) - "`tnt`" (TNT) - "`db schenker`" (DB Schenker) - "`aramex`" (Aramex) */
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

		/** The shipment group ID of the shipment. This is set in shiplineitems request. */
		shipmentGroupId?: string | null;

		/** The status of the shipment. Acceptable values are: - "`delivered`" - "`readyForPickup`" - "`shipped`" - "`undeliverable`" */
		status?: string | null;

		/** The tracking ID for the shipment. */
		trackingId?: string | null;
	}
	export interface OrderShipmentFormProperties {

		/** The carrier handling the shipment. For supported carriers, Google includes the carrier name and tracking URL in emails to customers. For select supported carriers, Google also automatically updates the shipment status based on the provided shipment ID. *Note:* You can also use unsupported carriers, but emails to customers won't include the carrier name or tracking URL, and there will be no automatic order status updates. Supported carriers for "US" are: - "`ups`" (United Parcel Service) *automatic status updates* - "`usps`" (United States Postal Service) *automatic status updates* - "`fedex`" (FedEx) *automatic status updates * - "`dhl`" (DHL eCommerce) *automatic status updates* (US only) - "`ontrac`" (OnTrac) *automatic status updates * - "`dhl express`" (DHL Express) - "`deliv`" (Deliv) - "`dynamex`" (TForce) - "`lasership`" (LaserShip) - "`mpx`" (Military Parcel Xpress) - "`uds`" (United Delivery Service) - "`efw`" (Estes Forwarding Worldwide) - "`jd logistics`" (JD Logistics) - "`yunexpress`" (YunExpress) - "`china post`" (China Post) - "`china ems`" (China Post Express Mail Service) - "`singapore post`" (Singapore Post) - "`pos malaysia`" (Pos Malaysia) - "`postnl`" (PostNL) - "`ptt`" (PTT Turkish Post) - "`eub`" (ePacket) - "`chukou1`" (Chukou1 Logistics) - "`bestex`" (Best Express) - "`canada post`" (Canada Post) - "`purolator`" (Purolator) - "`canpar`" (Canpar) - "`india post`" (India Post) - "`blue dart`" (Blue Dart) - "`delhivery`" (Delhivery) - "`dtdc`" (DTDC) - "`tpc india`" (TPC India) - "`lso`" (Lone Star Overnight) - "`tww`" (Team Worldwide) - "`deliver-it`" (Deliver-IT) - "`cdl last mile`" (CDL Last Mile) Supported carriers for FR are: - "`la poste`" (La Poste) *automatic status updates * - "`colissimo`" (Colissimo by La Poste) *automatic status updates* - "`ups`" (United Parcel Service) *automatic status updates * - "`chronopost`" (Chronopost by La Poste) - "`gls`" (General Logistics Systems France) - "`dpd`" (DPD Group by GeoPost) - "`bpost`" (Belgian Post Group) - "`colis prive`" (Colis Privé) - "`boxtal`" (Boxtal) - "`geodis`" (GEODIS) - "`tnt`" (TNT) - "`db schenker`" (DB Schenker) - "`aramex`" (Aramex) */
		carrier: FormControl<string | null | undefined>,

		/** Date on which the shipment has been created, in ISO 8601 format. */
		creationDate: FormControl<string | null | undefined>,

		/** Date on which the shipment has been delivered, in ISO 8601 format. Present only if `status` is `delivered` */
		deliveryDate: FormControl<string | null | undefined>,

		/** The ID of the shipment. */
		id: FormControl<string | null | undefined>,

		/** The shipment group ID of the shipment. This is set in shiplineitems request. */
		shipmentGroupId: FormControl<string | null | undefined>,

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
			shipmentGroupId: new FormControl<string | null | undefined>(undefined),
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

		/** The phone number of the carrier fulfilling the delivery. The phone number is formatted as the international notation in ITU-T Recommendation E.123 (for example, "+41 44 668 1800"). */
		carrierPhoneNumber?: string | null;

		/** The date a shipment is scheduled for delivery, in ISO 8601 format. */
		scheduledDate?: string | null;
	}
	export interface OrderShipmentScheduledDeliveryDetailsFormProperties {

		/** The phone number of the carrier fulfilling the delivery. The phone number is formatted as the international notation in ITU-T Recommendation E.123 (for example, "+41 44 668 1800"). */
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
		productAmount?: ProductAmount;

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


	/** Represents a merchant trade from which signals are extracted, e.g. shipping. */
	export interface OrderTrackingSignal {

		/** The price represented as a number and currency. */
		customerShippingFee?: PriceAmount;

		/** Required. The delivery postal code, as a continuous string without spaces or dashes, e.g. "95016". This field will be anonymized in returned OrderTrackingSignal creation response. */
		deliveryPostalCode?: string | null;

		/** Required. The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) for the shipping destination. */
		deliveryRegionCode?: string | null;

		/** Information about line items in the order. */
		lineItems?: Array<OrderTrackingSignalLineItemDetails>;

		/** The Google merchant ID of this order tracking signal. This value is optional. If left unset, the caller's merchant ID is used. You must request access in order to provide data on behalf of another merchant. For more information, see [Submitting Order Tracking Signals](/shopping-content/guides/order-tracking-signals). */
		merchantId?: string | null;

		/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
		orderCreatedTime?: DateTime;

		/** Required. The ID of the order on the merchant side. This field will be hashed in returned OrderTrackingSignal creation response. */
		orderId?: string | null;

		/** Output only. The ID that uniquely identifies this order tracking signal. */
		orderTrackingSignalId?: string | null;

		/** The mapping of the line items to the shipment information. */
		shipmentLineItemMapping?: Array<OrderTrackingSignalShipmentLineItemMapping>;

		/** The shipping information for the order. */
		shippingInfo?: Array<OrderTrackingSignalShippingInfo>;
	}

	/** Represents a merchant trade from which signals are extracted, e.g. shipping. */
	export interface OrderTrackingSignalFormProperties {

		/** Required. The delivery postal code, as a continuous string without spaces or dashes, e.g. "95016". This field will be anonymized in returned OrderTrackingSignal creation response. */
		deliveryPostalCode: FormControl<string | null | undefined>,

		/** Required. The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) for the shipping destination. */
		deliveryRegionCode: FormControl<string | null | undefined>,

		/** The Google merchant ID of this order tracking signal. This value is optional. If left unset, the caller's merchant ID is used. You must request access in order to provide data on behalf of another merchant. For more information, see [Submitting Order Tracking Signals](/shopping-content/guides/order-tracking-signals). */
		merchantId: FormControl<string | null | undefined>,

		/** Required. The ID of the order on the merchant side. This field will be hashed in returned OrderTrackingSignal creation response. */
		orderId: FormControl<string | null | undefined>,

		/** Output only. The ID that uniquely identifies this order tracking signal. */
		orderTrackingSignalId: FormControl<string | null | undefined>,
	}
	export function CreateOrderTrackingSignalFormGroup() {
		return new FormGroup<OrderTrackingSignalFormProperties>({
			deliveryPostalCode: new FormControl<string | null | undefined>(undefined),
			deliveryRegionCode: new FormControl<string | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			orderTrackingSignalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The line items of the order. */
	export interface OrderTrackingSignalLineItemDetails {

		/** Brand of the product. */
		brand?: string | null;

		/** The Global Trade Item Number. */
		gtin?: string | null;

		/** Required. The ID for this line item. */
		lineItemId?: string | null;

		/** The manufacturer part number. */
		mpn?: string | null;

		/** Plain text description of this product (deprecated: Please use product_title instead). */
		productDescription?: string | null;

		/** Required. The Content API REST ID of the product, in the form channel:contentLanguage:targetCountry:offerId. */
		productId?: string | null;

		/** Plain text title of this product. */
		productTitle?: string | null;

		/** The quantity of the line item in the order. */
		quantity?: string | null;

		/** Merchant SKU for this item (deprecated). */
		sku?: string | null;

		/** Universal product code for this item (deprecated: Please use GTIN instead). */
		upc?: string | null;
	}

	/** The line items of the order. */
	export interface OrderTrackingSignalLineItemDetailsFormProperties {

		/** Brand of the product. */
		brand: FormControl<string | null | undefined>,

		/** The Global Trade Item Number. */
		gtin: FormControl<string | null | undefined>,

		/** Required. The ID for this line item. */
		lineItemId: FormControl<string | null | undefined>,

		/** The manufacturer part number. */
		mpn: FormControl<string | null | undefined>,

		/** Plain text description of this product (deprecated: Please use product_title instead). */
		productDescription: FormControl<string | null | undefined>,

		/** Required. The Content API REST ID of the product, in the form channel:contentLanguage:targetCountry:offerId. */
		productId: FormControl<string | null | undefined>,

		/** Plain text title of this product. */
		productTitle: FormControl<string | null | undefined>,

		/** The quantity of the line item in the order. */
		quantity: FormControl<string | null | undefined>,

		/** Merchant SKU for this item (deprecated). */
		sku: FormControl<string | null | undefined>,

		/** Universal product code for this item (deprecated: Please use GTIN instead). */
		upc: FormControl<string | null | undefined>,
	}
	export function CreateOrderTrackingSignalLineItemDetailsFormGroup() {
		return new FormGroup<OrderTrackingSignalLineItemDetailsFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined),
			gtin: new FormControl<string | null | undefined>(undefined),
			lineItemId: new FormControl<string | null | undefined>(undefined),
			mpn: new FormControl<string | null | undefined>(undefined),
			productDescription: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			productTitle: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			upc: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents how many items are in the shipment for the given shipment_id and line_item_id. */
	export interface OrderTrackingSignalShipmentLineItemMapping {

		/** Required. The line item ID. */
		lineItemId?: string | null;

		/** The line item quantity in the shipment. */
		quantity?: string | null;

		/** Required. The shipment ID. This field will be hashed in returned OrderTrackingSignal creation response. */
		shipmentId?: string | null;
	}

	/** Represents how many items are in the shipment for the given shipment_id and line_item_id. */
	export interface OrderTrackingSignalShipmentLineItemMappingFormProperties {

		/** Required. The line item ID. */
		lineItemId: FormControl<string | null | undefined>,

		/** The line item quantity in the shipment. */
		quantity: FormControl<string | null | undefined>,

		/** Required. The shipment ID. This field will be hashed in returned OrderTrackingSignal creation response. */
		shipmentId: FormControl<string | null | undefined>,
	}
	export function CreateOrderTrackingSignalShipmentLineItemMappingFormGroup() {
		return new FormGroup<OrderTrackingSignalShipmentLineItemMappingFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<string | null | undefined>(undefined),
			shipmentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The shipping information for the order. */
	export interface OrderTrackingSignalShippingInfo {

		/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
		actualDeliveryTime?: DateTime;

		/** The name of the shipping carrier for the delivery. This field is required if one of the following fields is absent: earliest_delivery_promise_time, latest_delivery_promise_time, and actual_delivery_time. */
		carrierName?: string | null;

		/** The service type for fulfillment, e.g., GROUND, FIRST_CLASS, etc. */
		carrierServiceName?: string | null;

		/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
		earliestDeliveryPromiseTime?: DateTime;

		/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
		latestDeliveryPromiseTime?: DateTime;

		/** The origin postal code, as a continuous string without spaces or dashes, e.g. "95016". This field will be anonymized in returned OrderTrackingSignal creation response. */
		originPostalCode?: string | null;

		/** The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) for the shipping origin. */
		originRegionCode?: string | null;

		/** Required. The shipment ID. This field will be hashed in returned OrderTrackingSignal creation response. */
		shipmentId?: string | null;

		/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
		shippedTime?: DateTime;

		/** The status of the shipment. */
		shippingStatus?: OrderTrackingSignalShippingInfoShippingStatus | null;

		/** The tracking ID of the shipment. This field is required if one of the following fields is absent: earliest_delivery_promise_time, latest_delivery_promise_time, and actual_delivery_time. */
		trackingId?: string | null;
	}

	/** The shipping information for the order. */
	export interface OrderTrackingSignalShippingInfoFormProperties {

		/** The name of the shipping carrier for the delivery. This field is required if one of the following fields is absent: earliest_delivery_promise_time, latest_delivery_promise_time, and actual_delivery_time. */
		carrierName: FormControl<string | null | undefined>,

		/** The service type for fulfillment, e.g., GROUND, FIRST_CLASS, etc. */
		carrierServiceName: FormControl<string | null | undefined>,

		/** The origin postal code, as a continuous string without spaces or dashes, e.g. "95016". This field will be anonymized in returned OrderTrackingSignal creation response. */
		originPostalCode: FormControl<string | null | undefined>,

		/** The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) for the shipping origin. */
		originRegionCode: FormControl<string | null | undefined>,

		/** Required. The shipment ID. This field will be hashed in returned OrderTrackingSignal creation response. */
		shipmentId: FormControl<string | null | undefined>,

		/** The status of the shipment. */
		shippingStatus: FormControl<OrderTrackingSignalShippingInfoShippingStatus | null | undefined>,

		/** The tracking ID of the shipment. This field is required if one of the following fields is absent: earliest_delivery_promise_time, latest_delivery_promise_time, and actual_delivery_time. */
		trackingId: FormControl<string | null | undefined>,
	}
	export function CreateOrderTrackingSignalShippingInfoFormGroup() {
		return new FormGroup<OrderTrackingSignalShippingInfoFormProperties>({
			carrierName: new FormControl<string | null | undefined>(undefined),
			carrierServiceName: new FormControl<string | null | undefined>(undefined),
			originPostalCode: new FormControl<string | null | undefined>(undefined),
			originRegionCode: new FormControl<string | null | undefined>(undefined),
			shipmentId: new FormControl<string | null | undefined>(undefined),
			shippingStatus: new FormControl<OrderTrackingSignalShippingInfoShippingStatus | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OrderTrackingSignalShippingInfoShippingStatus { SHIPPING_STATE_UNSPECIFIED = 0, SHIPPED = 1, DELIVERED = 2 }

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

		/** Additional charges for a unit, for example, shipping costs. */
		additionalCharges?: Array<UnitInvoiceAdditionalCharge>;
		unitPrice?: Price;

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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#orderinvoicesCreateChargeInvoiceResponse`". */
		kind?: string | null;
	}
	export interface OrderinvoicesCreateChargeInvoiceResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#orderinvoicesCreateChargeInvoiceResponse`". */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#orderinvoicesCreateRefundInvoiceResponse`". */
		kind?: string | null;
	}
	export interface OrderinvoicesCreateRefundInvoiceResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#orderinvoicesCreateRefundInvoiceResponse`". */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#orderreportsListDisbursementsResponse`". */
		kind?: string | null;

		/** The token for the retrieval of the next page of disbursements. */
		nextPageToken?: string | null;
	}
	export interface OrderreportsListDisbursementsResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#orderreportsListDisbursementsResponse`". */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#orderreportsListTransactionsResponse`". */
		kind?: string | null;

		/** The token for the retrieval of the next page of transactions. */
		nextPageToken?: string | null;

		/** The list of transactions. */
		transactions?: Array<OrderReportTransaction>;
	}
	export interface OrderreportsListTransactionsResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#orderreportsListTransactionsResponse`". */
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

	export interface OrderreturnsAcknowledgeRequest {

		/** [required] The ID of the operation, unique across all operations for a given order return. */
		operationId?: string | null;
	}
	export interface OrderreturnsAcknowledgeRequestFormProperties {

		/** [required] The ID of the operation, unique across all operations for a given order return. */
		operationId: FormControl<string | null | undefined>,
	}
	export function CreateOrderreturnsAcknowledgeRequestFormGroup() {
		return new FormGroup<OrderreturnsAcknowledgeRequestFormProperties>({
			operationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderreturnsAcknowledgeResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#orderreturnsAcknowledgeResponse`". */
		kind?: string | null;
	}
	export interface OrderreturnsAcknowledgeResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#orderreturnsAcknowledgeResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrderreturnsAcknowledgeResponseFormGroup() {
		return new FormGroup<OrderreturnsAcknowledgeResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderreturnsCreateOrderReturnRequest {

		/** The list of line items to return. */
		lineItems?: Array<OrderreturnsLineItem>;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The ID of the order. */
		orderId?: string | null;

		/** The way of the package being returned. */
		returnMethodType?: string | null;
	}
	export interface OrderreturnsCreateOrderReturnRequestFormProperties {

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,

		/** The ID of the order. */
		orderId: FormControl<string | null | undefined>,

		/** The way of the package being returned. */
		returnMethodType: FormControl<string | null | undefined>,
	}
	export function CreateOrderreturnsCreateOrderReturnRequestFormGroup() {
		return new FormGroup<OrderreturnsCreateOrderReturnRequestFormProperties>({
			operationId: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			returnMethodType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderreturnsLineItem {

		/** The ID of the line item. This value is assigned by Google when an order is created. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity of this line item. */
		quantity?: number | null;
	}
	export interface OrderreturnsLineItemFormProperties {

		/** The ID of the line item. This value is assigned by Google when an order is created. Either lineItemId or productId is required. */
		lineItemId: FormControl<string | null | undefined>,

		/** The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId: FormControl<string | null | undefined>,

		/** The quantity of this line item. */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateOrderreturnsLineItemFormGroup() {
		return new FormGroup<OrderreturnsLineItemFormProperties>({
			lineItemId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OrderreturnsCreateOrderReturnResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#orderreturnsCreateOrderReturnResponse`". */
		kind?: string | null;

		/** Order return. Production access (all methods) requires the order manager role. Sandbox access does not. */
		orderReturn?: MerchantOrderReturn;
	}
	export interface OrderreturnsCreateOrderReturnResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#orderreturnsCreateOrderReturnResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrderreturnsCreateOrderReturnResponseFormGroup() {
		return new FormGroup<OrderreturnsCreateOrderReturnResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderreturnsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#orderreturnsListResponse`". */
		kind?: string | null;

		/** The token for the retrieval of the next page of returns. */
		nextPageToken?: string | null;
		resources?: Array<MerchantOrderReturn>;
	}
	export interface OrderreturnsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#orderreturnsListResponse`". */
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

	export interface OrderreturnsPartialRefund {
		priceAmount?: Price;
		taxAmount?: Price;
	}
	export interface OrderreturnsPartialRefundFormProperties {
	}
	export function CreateOrderreturnsPartialRefundFormGroup() {
		return new FormGroup<OrderreturnsPartialRefundFormProperties>({
		});

	}

	export interface OrderreturnsProcessRequest {

		/** Option to charge the customer return shipping cost. */
		fullChargeReturnShippingCost?: boolean | null;

		/** [required] The ID of the operation, unique across all operations for a given order return. */
		operationId?: string | null;
		refundShippingFee?: OrderreturnsRefundOperation;

		/** The list of items to return. */
		returnItems?: Array<OrderreturnsReturnItem>;
	}
	export interface OrderreturnsProcessRequestFormProperties {

		/** Option to charge the customer return shipping cost. */
		fullChargeReturnShippingCost: FormControl<boolean | null | undefined>,

		/** [required] The ID of the operation, unique across all operations for a given order return. */
		operationId: FormControl<string | null | undefined>,
	}
	export function CreateOrderreturnsProcessRequestFormGroup() {
		return new FormGroup<OrderreturnsProcessRequestFormProperties>({
			fullChargeReturnShippingCost: new FormControl<boolean | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderreturnsRefundOperation {

		/** If true, the item will be fully refunded. Allowed only when payment_type is FOP. Merchant can choose this refund option to indicate the full remaining amount of corresponding object to be refunded to the customer through FOP. */
		fullRefund?: boolean | null;
		partialRefund?: OrderreturnsPartialRefund;

		/** The payment way of issuing refund. Default value is ORIGINAL_FOP if not set. */
		paymentType?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;

		/** Code of the refund reason. */
		returnRefundReason?: string | null;
	}
	export interface OrderreturnsRefundOperationFormProperties {

		/** If true, the item will be fully refunded. Allowed only when payment_type is FOP. Merchant can choose this refund option to indicate the full remaining amount of corresponding object to be refunded to the customer through FOP. */
		fullRefund: FormControl<boolean | null | undefined>,

		/** The payment way of issuing refund. Default value is ORIGINAL_FOP if not set. */
		paymentType: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,

		/** Code of the refund reason. */
		returnRefundReason: FormControl<string | null | undefined>,
	}
	export function CreateOrderreturnsRefundOperationFormGroup() {
		return new FormGroup<OrderreturnsRefundOperationFormProperties>({
			fullRefund: new FormControl<boolean | null | undefined>(undefined),
			paymentType: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
			returnRefundReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderreturnsReturnItem {
		refund?: OrderreturnsRefundOperation;
		reject?: OrderreturnsRejectOperation;

		/** Unit level ID for the return item. Different units of the same product will have different IDs. */
		returnItemId?: string | null;
	}
	export interface OrderreturnsReturnItemFormProperties {

		/** Unit level ID for the return item. Different units of the same product will have different IDs. */
		returnItemId: FormControl<string | null | undefined>,
	}
	export function CreateOrderreturnsReturnItemFormGroup() {
		return new FormGroup<OrderreturnsReturnItemFormProperties>({
			returnItemId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderreturnsRejectOperation {

		/** The reason for the return. */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrderreturnsRejectOperationFormProperties {

		/** The reason for the return. */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrderreturnsRejectOperationFormGroup() {
		return new FormGroup<OrderreturnsRejectOperationFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderreturnsProcessResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#orderreturnsProcessResponse`". */
		kind?: string | null;
	}
	export interface OrderreturnsProcessResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#orderreturnsProcessResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrderreturnsProcessResponseFormGroup() {
		return new FormGroup<OrderreturnsProcessResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersAcknowledgeResponse`". */
		kind?: string | null;
	}
	export interface OrdersAcknowledgeResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersAcknowledgeResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersAcknowledgeResponseFormGroup() {
		return new FormGroup<OrdersAcknowledgeResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersAdvanceTestOrderResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersAdvanceTestOrderResponse`". */
		kind?: string | null;
	}
	export interface OrdersAdvanceTestOrderResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersAdvanceTestOrderResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersAdvanceTestOrderResponseFormGroup() {
		return new FormGroup<OrdersAdvanceTestOrderResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCancelLineItemRequest {

		/** The ID of the line item to cancel. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to cancel. */
		quantity?: number | null;

		/** The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`failedToCaptureFunds`" */
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

		/** The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`failedToCaptureFunds`" */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersCancelLineItemResponse`". */
		kind?: string | null;
	}
	export interface OrdersCancelLineItemResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersCancelLineItemResponse`". */
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

		/** The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`failedToCaptureFunds`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrdersCancelRequestFormProperties {

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,

		/** The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`failedToCaptureFunds`" */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersCancelResponse`". */
		kind?: string | null;
	}
	export interface OrdersCancelResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersCancelResponse`". */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersCancelTestOrderByCustomerResponse`". */
		kind?: string | null;
	}
	export interface OrdersCancelTestOrderByCustomerResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersCancelTestOrderByCustomerResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCancelTestOrderByCustomerResponseFormGroup() {
		return new FormGroup<OrdersCancelTestOrderByCustomerResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCreateTestOrderRequest {

		/** The CLDR territory code of the country of the test order to create. Affects the currency and addresses of orders created through `template_name`, or the addresses of orders created through `test_order`. Acceptable values are: - "`US`" - "`FR`" Defaults to "`US`". */
		country?: string | null;

		/** The test order template to use. Specify as an alternative to `testOrder` as a shortcut for retrieving a template and then creating an order using that template. Acceptable values are: - "`template1`" - "`template1a`" - "`template1b`" - "`template2`" - "`template3`" */
		templateName?: string | null;
		testOrder?: TestOrder;
	}
	export interface OrdersCreateTestOrderRequestFormProperties {

		/** The CLDR territory code of the country of the test order to create. Affects the currency and addresses of orders created through `template_name`, or the addresses of orders created through `test_order`. Acceptable values are: - "`US`" - "`FR`" Defaults to "`US`". */
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
		deliveryDetails?: TestOrderDeliveryDetails;

		/** Whether the orderinvoices service should support this order. */
		enableOrderinvoices?: boolean | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#testOrder`" */
		kind?: string | null;

		/** Required. Line items that are ordered. At least one line item must be provided. */
		lineItems?: Array<TestOrderLineItem>;

		/** Restricted. Do not use. */
		notificationMode?: string | null;
		pickupDetails?: TestOrderPickupDetails;

		/** Required. The billing address. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" */
		predefinedBillingAddress?: string | null;

		/** Required. Identifier of one of the predefined delivery addresses for the delivery. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" */
		predefinedDeliveryAddress?: string | null;

		/** Required. Email address of the customer. Acceptable values are: - "`pog.dwight.schrute@gmail.com`" - "`pog.jim.halpert@gmail.com`" - "`penpog.pam.beesly@gmail.comding`" */
		predefinedEmail?: string | null;

		/** Identifier of one of the predefined pickup details. Required for orders containing line items with shipping type `pickup`. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" */
		predefinedPickupDetails?: string | null;

		/** Promotions associated with the order. */
		promotions?: Array<OrderPromotion>;
		shippingCost?: Price;

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

		/** Required. The billing address. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" */
		predefinedBillingAddress: FormControl<string | null | undefined>,

		/** Required. Identifier of one of the predefined delivery addresses for the delivery. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" */
		predefinedDeliveryAddress: FormControl<string | null | undefined>,

		/** Required. Email address of the customer. Acceptable values are: - "`pog.dwight.schrute@gmail.com`" - "`pog.jim.halpert@gmail.com`" - "`penpog.pam.beesly@gmail.comding`" */
		predefinedEmail: FormControl<string | null | undefined>,

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
			predefinedBillingAddress: new FormControl<string | null | undefined>(undefined),
			predefinedDeliveryAddress: new FormControl<string | null | undefined>(undefined),
			predefinedEmail: new FormControl<string | null | undefined>(undefined),
			predefinedPickupDetails: new FormControl<string | null | undefined>(undefined),
			shippingOption: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestOrderDeliveryDetails {
		address?: TestOrderAddress;

		/** Whether the order is scheduled delivery order. */
		isScheduledDelivery?: boolean | null;

		/** The phone number of the person receiving the delivery. */
		phoneNumber?: string | null;
	}
	export interface TestOrderDeliveryDetailsFormProperties {

		/** Whether the order is scheduled delivery order. */
		isScheduledDelivery: FormControl<boolean | null | undefined>,

		/** The phone number of the person receiving the delivery. */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateTestOrderDeliveryDetailsFormGroup() {
		return new FormGroup<TestOrderDeliveryDetailsFormProperties>({
			isScheduledDelivery: new FormControl<boolean | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestOrderAddress {

		/** CLDR country code (for example, "US"). */
		country?: string | null;

		/** Strings representing the lines of the printed label for mailing the order, for example: John Smith 1600 Amphitheatre Parkway Mountain View, CA, 94043 United States */
		fullAddress?: Array<string>;

		/** Whether the address is a post office box. */
		isPostOfficeBox?: boolean | null;

		/** City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs). */
		locality?: string | null;

		/** Postal Code or ZIP (for example, "94043"). */
		postalCode?: string | null;

		/** Name of the recipient. */
		recipientName?: string | null;

		/** Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC"). */
		region?: string | null;

		/** Street-level part of the address. Use `\n` to add a second line. */
		streetAddress?: Array<string>;
	}
	export interface TestOrderAddressFormProperties {

		/** CLDR country code (for example, "US"). */
		country: FormControl<string | null | undefined>,

		/** Whether the address is a post office box. */
		isPostOfficeBox: FormControl<boolean | null | undefined>,

		/** City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs). */
		locality: FormControl<string | null | undefined>,

		/** Postal Code or ZIP (for example, "94043"). */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the recipient. */
		recipientName: FormControl<string | null | undefined>,

		/** Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC"). */
		region: FormControl<string | null | undefined>,
	}
	export function CreateTestOrderAddressFormGroup() {
		return new FormGroup<TestOrderAddressFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			isPostOfficeBox: new FormControl<boolean | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			recipientName: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestOrderLineItem {
		product?: TestOrderLineItemProduct;

		/** Required. Number of items ordered. */
		quantityOrdered?: number | null;
		returnInfo?: OrderLineItemReturnInfo;
		shippingDetails?: OrderLineItemShippingDetails;
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

		/** Required. The CLDR territory code of the target country of the product. */
		targetCountry?: string | null;

		/** Required. The title of the product. */
		title?: string | null;

		/** Variant attributes for the item. Optional. */
		variantAttributes?: Array<OrderLineItemProductVariantAttribute>;
	}
	export interface TestOrderLineItemProductFormProperties {

		/** Required. Brand of the item. */
		brand: FormControl<string | null | undefined>,

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

		/** Required. The CLDR territory code of the target country of the product. */
		targetCountry: FormControl<string | null | undefined>,

		/** Required. The title of the product. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateTestOrderLineItemProductFormGroup() {
		return new FormGroup<TestOrderLineItemProductFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined),
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

	export interface TestOrderPickupDetails {

		/** Required. Code of the location defined by provider or merchant. */
		locationCode?: string | null;
		pickupLocationAddress?: TestOrderAddress;

		/** Pickup location type. Acceptable values are: - "`locker`" - "`store`" - "`curbside`" */
		pickupLocationType?: string | null;

		/** Required. all pickup persons set by users. */
		pickupPersons?: Array<TestOrderPickupDetailsPickupPerson>;
	}
	export interface TestOrderPickupDetailsFormProperties {

		/** Required. Code of the location defined by provider or merchant. */
		locationCode: FormControl<string | null | undefined>,

		/** Pickup location type. Acceptable values are: - "`locker`" - "`store`" - "`curbside`" */
		pickupLocationType: FormControl<string | null | undefined>,
	}
	export function CreateTestOrderPickupDetailsFormGroup() {
		return new FormGroup<TestOrderPickupDetailsFormProperties>({
			locationCode: new FormControl<string | null | undefined>(undefined),
			pickupLocationType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestOrderPickupDetailsPickupPerson {

		/** Required. Full name of the pickup person. */
		name?: string | null;

		/** Required. The phone number of the person picking up the items. */
		phoneNumber?: string | null;
	}
	export interface TestOrderPickupDetailsPickupPersonFormProperties {

		/** Required. Full name of the pickup person. */
		name: FormControl<string | null | undefined>,

		/** Required. The phone number of the person picking up the items. */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateTestOrderPickupDetailsPickupPersonFormGroup() {
		return new FormGroup<TestOrderPickupDetailsPickupPersonFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersCreateTestOrderResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersCreateTestOrderResponse`". */
		kind?: string | null;

		/** The ID of the newly created test order. */
		orderId?: string | null;
	}
	export interface OrdersCreateTestOrderResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersCreateTestOrderResponse`". */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersCreateTestReturnResponse`". */
		kind?: string | null;

		/** The ID of the newly created test order return. */
		returnId?: string | null;
	}
	export interface OrdersCreateTestReturnResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersCreateTestReturnResponse`". */
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

	export interface OrdersCustomBatchRequestEntryRefundItemItem {
		amount?: MonetaryAmount;

		/** If true, the full item will be refunded. If this is true, amount shouldn't be provided and will be ignored. */
		fullRefund?: boolean | null;

		/** The ID of the line item. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the product. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The number of products that are refunded. */
		quantity?: number | null;
	}
	export interface OrdersCustomBatchRequestEntryRefundItemItemFormProperties {

		/** If true, the full item will be refunded. If this is true, amount shouldn't be provided and will be ignored. */
		fullRefund: FormControl<boolean | null | undefined>,

		/** The ID of the line item. Either lineItemId or productId is required. */
		lineItemId: FormControl<string | null | undefined>,

		/** The ID of the product. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId: FormControl<string | null | undefined>,

		/** The number of products that are refunded. */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateOrdersCustomBatchRequestEntryRefundItemItemFormGroup() {
		return new FormGroup<OrdersCustomBatchRequestEntryRefundItemItemFormProperties>({
			fullRefund: new FormControl<boolean | null | undefined>(undefined),
			lineItemId: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OrdersCustomBatchRequestEntryRefundItemShipping {
		amount?: Price;

		/** If set to true, all shipping costs for the order will be refunded. If this is true, amount shouldn't be provided and will be ignored. If set to false, submit the amount of the partial shipping refund, excluding the shipping tax. The shipping tax is calculated and handled on Google's side. */
		fullRefund?: boolean | null;
	}
	export interface OrdersCustomBatchRequestEntryRefundItemShippingFormProperties {

		/** If set to true, all shipping costs for the order will be refunded. If this is true, amount shouldn't be provided and will be ignored. If set to false, submit the amount of the partial shipping refund, excluding the shipping tax. The shipping tax is calculated and handled on Google's side. */
		fullRefund: FormControl<boolean | null | undefined>,
	}
	export function CreateOrdersCustomBatchRequestEntryRefundItemShippingFormGroup() {
		return new FormGroup<OrdersCustomBatchRequestEntryRefundItemShippingFormProperties>({
			fullRefund: new FormControl<boolean | null | undefined>(undefined),
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


	/** ScheduledDeliveryDetails used to update the scheduled delivery order. */
	export interface OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails {

		/** The phone number of the carrier fulfilling the delivery. The phone number should be formatted as the international notation in */
		carrierPhoneNumber?: string | null;

		/** The date a shipment is scheduled for delivery, in ISO 8601 format. */
		scheduledDate?: string | null;
	}

	/** ScheduledDeliveryDetails used to update the scheduled delivery order. */
	export interface OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetailsFormProperties {

		/** The phone number of the carrier fulfilling the delivery. The phone number should be formatted as the international notation in */
		carrierPhoneNumber: FormControl<string | null | undefined>,

		/** The date a shipment is scheduled for delivery, in ISO 8601 format. */
		scheduledDate: FormControl<string | null | undefined>,
	}
	export function CreateOrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetailsFormGroup() {
		return new FormGroup<OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetailsFormProperties>({
			carrierPhoneNumber: new FormControl<string | null | undefined>(undefined),
			scheduledDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersGetByMerchantOrderIdResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersGetByMerchantOrderIdResponse`". */
		kind?: string | null;

		/** Order. Production access (all methods) requires the order manager role. Sandbox access does not. */
		order?: Order;
	}
	export interface OrdersGetByMerchantOrderIdResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersGetByMerchantOrderIdResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersGetByMerchantOrderIdResponseFormGroup() {
		return new FormGroup<OrdersGetByMerchantOrderIdResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersGetTestOrderTemplateResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersGetTestOrderTemplateResponse`". */
		kind?: string | null;
		template?: TestOrder;
	}
	export interface OrdersGetTestOrderTemplateResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersGetTestOrderTemplateResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersGetTestOrderTemplateResponseFormGroup() {
		return new FormGroup<OrdersGetTestOrderTemplateResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersInStoreRefundLineItemRequest {

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;
		priceAmount?: Price;

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to return and refund. */
		quantity?: number | null;

		/** The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
		taxAmount?: Price;
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersInStoreRefundLineItemResponse`". */
		kind?: string | null;
	}
	export interface OrdersInStoreRefundLineItemResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersInStoreRefundLineItemResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersInStoreRefundLineItemResponseFormGroup() {
		return new FormGroup<OrdersInStoreRefundLineItemResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersListResponse`". */
		kind?: string | null;

		/** The token for the retrieval of the next page of orders. */
		nextPageToken?: string | null;
		resources?: Array<Order>;
	}
	export interface OrdersListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersListResponse`". */
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

	export interface OrdersRefundItemRequest {

		/** The items that are refunded. Either Item or Shipping must be provided in the request. */
		items?: Array<OrdersCustomBatchRequestEntryRefundItemItem>;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The reason for the refund. Acceptable values are: - "`shippingCostAdjustment`" - "`priceAdjustment`" - "`taxAdjustment`" - "`feeAdjustment`" - "`courtesyAdjustment`" - "`adjustment`" - "`customerCancelled`" - "`noInventory`" - "`productNotAsDescribed`" - "`undeliverableShippingAddress`" - "`wrongProductShipped`" - "`lateShipmentCredit`" - "`deliveredLateByCarrier`" - "`productArrivedDamaged`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
		shipping?: OrdersCustomBatchRequestEntryRefundItemShipping;
	}
	export interface OrdersRefundItemRequestFormProperties {

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,

		/** The reason for the refund. Acceptable values are: - "`shippingCostAdjustment`" - "`priceAdjustment`" - "`taxAdjustment`" - "`feeAdjustment`" - "`courtesyAdjustment`" - "`adjustment`" - "`customerCancelled`" - "`noInventory`" - "`productNotAsDescribed`" - "`undeliverableShippingAddress`" - "`wrongProductShipped`" - "`lateShipmentCredit`" - "`deliveredLateByCarrier`" - "`productArrivedDamaged`" */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrdersRefundItemRequestFormGroup() {
		return new FormGroup<OrdersRefundItemRequestFormProperties>({
			operationId: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersRefundItemResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersRefundItemResponse`". */
		kind?: string | null;
	}
	export interface OrdersRefundItemResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersRefundItemResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersRefundItemResponseFormGroup() {
		return new FormGroup<OrdersRefundItemResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersRefundOrderRequest {
		amount?: MonetaryAmount;

		/** If true, the full order will be refunded, including shipping. If this is true, amount shouldn't be provided and will be ignored. */
		fullRefund?: boolean | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The reason for the refund. Acceptable values are: - "`courtesyAdjustment`" - "`other`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
	}
	export interface OrdersRefundOrderRequestFormProperties {

		/** If true, the full order will be refunded, including shipping. If this is true, amount shouldn't be provided and will be ignored. */
		fullRefund: FormControl<boolean | null | undefined>,

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,

		/** The reason for the refund. Acceptable values are: - "`courtesyAdjustment`" - "`other`" */
		reason: FormControl<string | null | undefined>,

		/** The explanation of the reason. */
		reasonText: FormControl<string | null | undefined>,
	}
	export function CreateOrdersRefundOrderRequestFormGroup() {
		return new FormGroup<OrdersRefundOrderRequestFormProperties>({
			fullRefund: new FormControl<boolean | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersRefundOrderResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersRefundOrderResponse`". */
		kind?: string | null;
	}
	export interface OrdersRefundOrderResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersRefundOrderResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersRefundOrderResponseFormGroup() {
		return new FormGroup<OrdersRefundOrderResponseFormProperties>({
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersRejectReturnLineItemResponse`". */
		kind?: string | null;
	}
	export interface OrdersRejectReturnLineItemResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersRejectReturnLineItemResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersRejectReturnLineItemResponseFormGroup() {
		return new FormGroup<OrdersRejectReturnLineItemResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersReturnRefundLineItemRequest {

		/** The ID of the line item to return. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;
		priceAmount?: Price;

		/** The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** The quantity to return and refund. Quantity is required. */
		quantity?: number | null;

		/** The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" */
		reason?: string | null;

		/** The explanation of the reason. */
		reasonText?: string | null;
		taxAmount?: Price;
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersReturnRefundLineItemResponse`". */
		kind?: string | null;
	}
	export interface OrdersReturnRefundLineItemResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersReturnRefundLineItemResponse`". */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersSetLineItemMetadataResponse`". */
		kind?: string | null;
	}
	export interface OrdersSetLineItemMetadataResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersSetLineItemMetadataResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersSetLineItemMetadataResponseFormGroup() {
		return new FormGroup<OrdersSetLineItemMetadataResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersShipLineItemsRequest {

		/** Line items to ship. */
		lineItems?: Array<OrderShipmentLineItemShipment>;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** ID of the shipment group. Required for orders that use the orderinvoices service. */
		shipmentGroupId?: string | null;

		/** Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs). */
		shipmentInfos?: Array<OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo>;
	}
	export interface OrdersShipLineItemsRequestFormProperties {

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,

		/** ID of the shipment group. Required for orders that use the orderinvoices service. */
		shipmentGroupId: FormControl<string | null | undefined>,
	}
	export function CreateOrdersShipLineItemsRequestFormGroup() {
		return new FormGroup<OrdersShipLineItemsRequestFormProperties>({
			operationId: new FormControl<string | null | undefined>(undefined),
			shipmentGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersShipLineItemsResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersShipLineItemsResponse`". */
		kind?: string | null;
	}
	export interface OrdersShipLineItemsResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersShipLineItemsResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersShipLineItemsResponseFormGroup() {
		return new FormGroup<OrdersShipLineItemsResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersUpdateLineItemShippingDetailsRequest {

		/** Updated delivery by date, in ISO 8601 format. If not specified only ship by date is updated. Provided date should be within 1 year timeframe and can't be a date in the past. */
		deliverByDate?: string | null;

		/** The ID of the line item to set metadata. Either lineItemId or productId is required. */
		lineItemId?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId?: string | null;

		/** Updated ship by date, in ISO 8601 format. If not specified only deliver by date is updated. Provided date should be within 1 year timeframe and can't be a date in the past. */
		shipByDate?: string | null;
	}
	export interface OrdersUpdateLineItemShippingDetailsRequestFormProperties {

		/** Updated delivery by date, in ISO 8601 format. If not specified only ship by date is updated. Provided date should be within 1 year timeframe and can't be a date in the past. */
		deliverByDate: FormControl<string | null | undefined>,

		/** The ID of the line item to set metadata. Either lineItemId or productId is required. */
		lineItemId: FormControl<string | null | undefined>,

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,

		/** The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required. */
		productId: FormControl<string | null | undefined>,

		/** Updated ship by date, in ISO 8601 format. If not specified only deliver by date is updated. Provided date should be within 1 year timeframe and can't be a date in the past. */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersUpdateLineItemShippingDetailsResponse`". */
		kind?: string | null;
	}
	export interface OrdersUpdateLineItemShippingDetailsResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersUpdateLineItemShippingDetailsResponse`". */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersUpdateMerchantOrderIdResponse`". */
		kind?: string | null;
	}
	export interface OrdersUpdateMerchantOrderIdResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersUpdateMerchantOrderIdResponse`". */
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

		/** Date after which the pickup will expire, in ISO 8601 format. Required only when order is buy-online-pickup-in-store(BOPIS) and `status` is `ready for pickup`. */
		lastPickupDate?: string | null;

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId?: string | null;

		/** Date on which the shipment has been ready for pickup, in ISO 8601 format. Optional and can be provided only if `status` is `ready for pickup`. */
		readyPickupDate?: string | null;

		/** ScheduledDeliveryDetails used to update the scheduled delivery order. */
		scheduledDeliveryDetails?: OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails;

		/** The ID of the shipment. */
		shipmentId?: string | null;

		/** New status for the shipment. Not updated if missing. Acceptable values are: - "`delivered`" - "`undeliverable`" - "`readyForPickup`" */
		status?: string | null;

		/** The tracking ID for the shipment. Not updated if missing. */
		trackingId?: string | null;

		/** Date on which the shipment has been undeliverable, in ISO 8601 format. Optional and can be provided only if `status` is `undeliverable`. */
		undeliveredDate?: string | null;
	}
	export interface OrdersUpdateShipmentRequestFormProperties {

		/** The carrier handling the shipment. Not updated if missing. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values. */
		carrier: FormControl<string | null | undefined>,

		/** Date on which the shipment has been delivered, in ISO 8601 format. Optional and can be provided only if `status` is `delivered`. */
		deliveryDate: FormControl<string | null | undefined>,

		/** Date after which the pickup will expire, in ISO 8601 format. Required only when order is buy-online-pickup-in-store(BOPIS) and `status` is `ready for pickup`. */
		lastPickupDate: FormControl<string | null | undefined>,

		/** The ID of the operation. Unique across all operations for a given order. */
		operationId: FormControl<string | null | undefined>,

		/** Date on which the shipment has been ready for pickup, in ISO 8601 format. Optional and can be provided only if `status` is `ready for pickup`. */
		readyPickupDate: FormControl<string | null | undefined>,

		/** The ID of the shipment. */
		shipmentId: FormControl<string | null | undefined>,

		/** New status for the shipment. Not updated if missing. Acceptable values are: - "`delivered`" - "`undeliverable`" - "`readyForPickup`" */
		status: FormControl<string | null | undefined>,

		/** The tracking ID for the shipment. Not updated if missing. */
		trackingId: FormControl<string | null | undefined>,

		/** Date on which the shipment has been undeliverable, in ISO 8601 format. Optional and can be provided only if `status` is `undeliverable`. */
		undeliveredDate: FormControl<string | null | undefined>,
	}
	export function CreateOrdersUpdateShipmentRequestFormGroup() {
		return new FormGroup<OrdersUpdateShipmentRequestFormProperties>({
			carrier: new FormControl<string | null | undefined>(undefined),
			deliveryDate: new FormControl<string | null | undefined>(undefined),
			lastPickupDate: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			readyPickupDate: new FormControl<string | null | undefined>(undefined),
			shipmentId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
			undeliveredDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrdersUpdateShipmentResponse {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersUpdateShipmentResponse`". */
		kind?: string | null;
	}
	export interface OrdersUpdateShipmentResponseFormProperties {

		/** The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" */
		executionStatus: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#ordersUpdateShipmentResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateOrdersUpdateShipmentResponseFormGroup() {
		return new FormGroup<OrdersUpdateShipmentResponseFormProperties>({
			executionStatus: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the PauseProgram method. */
	export interface PauseBuyOnGoogleProgramRequest {
	}

	/** Request message for the PauseProgram method. */
	export interface PauseBuyOnGoogleProgramRequestFormProperties {
	}
	export function CreatePauseBuyOnGoogleProgramRequestFormGroup() {
		return new FormGroup<PauseBuyOnGoogleProgramRequestFormProperties>({
		});

	}

	export interface PickupCarrierService {

		/** The name of the pickup carrier (for example, `"UPS"`). Required. */
		carrierName?: string | null;

		/** The name of the pickup service (for example, `"Access point"`). Required. */
		serviceName?: string | null;
	}
	export interface PickupCarrierServiceFormProperties {

		/** The name of the pickup carrier (for example, `"UPS"`). Required. */
		carrierName: FormControl<string | null | undefined>,

		/** The name of the pickup service (for example, `"Access point"`). Required. */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreatePickupCarrierServiceFormGroup() {
		return new FormGroup<PickupCarrierServiceFormProperties>({
			carrierName: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PickupServicesPickupService {

		/** The name of the carrier (for example, `"UPS"`). Always present. */
		carrierName?: string | null;

		/** The CLDR country code of the carrier (for example, "US"). Always present. */
		country?: string | null;

		/** The name of the pickup service (for example, `"Access point"`). Always present. */
		serviceName?: string | null;
	}
	export interface PickupServicesPickupServiceFormProperties {

		/** The name of the carrier (for example, `"UPS"`). Always present. */
		carrierName: FormControl<string | null | undefined>,

		/** The CLDR country code of the carrier (for example, "US"). Always present. */
		country: FormControl<string | null | undefined>,

		/** The name of the pickup service (for example, `"Access point"`). Always present. */
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

		/** Optional. Supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). */
		pickupMethod?: string | null;

		/** Optional. Expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). */
		pickupSla?: string | null;
		price?: Price;

		/** Required. The available quantity of the item. */
		quantity?: string | null;

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile. */
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

		/** Optional. Supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). */
		pickupMethod: FormControl<string | null | undefined>,

		/** Optional. Expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). */
		pickupSla: FormControl<string | null | undefined>,

		/** Required. The available quantity of the item. */
		quantity: FormControl<string | null | undefined>,

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile. */
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
			pickupMethod: new FormControl<string | null | undefined>(undefined),
			pickupSla: new FormControl<string | null | undefined>(undefined),
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

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile. */
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

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile. */
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

		/** Output only. The matching status of POS store and Google Business Profile store. Possible values are: - "`matched`": The POS store is successfully matched with the Google Business Profile store. - "`failed`": The POS store is not matched with the Google Business Profile store. See matching_status_hint for further details. Note that there is up to 48 hours propagation delay for changes in Merchant Center (e.g. creation of new account, accounts linking) and Google Business Profile (e.g. store address update) which may affect the matching status. In such cases, after a delay call [pos.list](https://developers.google.com/shopping-content/reference/rest/v2.1/pos/list) to retrieve the updated matching status. */
		matchingStatus?: string | null;

		/** Output only. The hint of why the matching has failed. This is only set when matching_status=failed. Possible values are: - "`linked-store-not-found`": There aren't any Google Business Profile stores available for matching. Connect your Merchant Center account with the Google Business Profile account. Or add a new Google Business Profile store corresponding to the POS store. - "`store-match-not-found`": The provided POS store couldn't be matched to any of the connected Google Business Profile stores. Merchant Center account is connected correctly and stores are available on Google Business Profile, but POS store location address does not match with Google Business Profile stores' addresses. Update POS store address or Google Business Profile store address to match correctly. */
		matchingStatusHint?: string | null;

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

		/** Output only. The matching status of POS store and Google Business Profile store. Possible values are: - "`matched`": The POS store is successfully matched with the Google Business Profile store. - "`failed`": The POS store is not matched with the Google Business Profile store. See matching_status_hint for further details. Note that there is up to 48 hours propagation delay for changes in Merchant Center (e.g. creation of new account, accounts linking) and Google Business Profile (e.g. store address update) which may affect the matching status. In such cases, after a delay call [pos.list](https://developers.google.com/shopping-content/reference/rest/v2.1/pos/list) to retrieve the updated matching status. */
		matchingStatus: FormControl<string | null | undefined>,

		/** Output only. The hint of why the matching has failed. This is only set when matching_status=failed. Possible values are: - "`linked-store-not-found`": There aren't any Google Business Profile stores available for matching. Connect your Merchant Center account with the Google Business Profile account. Or add a new Google Business Profile store corresponding to the POS store. - "`store-match-not-found`": The provided POS store couldn't be matched to any of the connected Google Business Profile stores. Merchant Center account is connected correctly and stores are available on Google Business Profile, but POS store location address does not match with Google Business Profile stores' addresses. Update POS store address or Google Business Profile store address to match correctly. */
		matchingStatusHint: FormControl<string | null | undefined>,

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
			matchingStatus: new FormControl<string | null | undefined>(undefined),
			matchingStatusHint: new FormControl<string | null | undefined>(undefined),
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#posCustomBatchResponse`". */
		kind?: string | null;
	}
	export interface PosCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#posCustomBatchResponse`". */
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

		/** Optional. Supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). */
		pickupMethod?: string | null;

		/** Optional. Expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). */
		pickupSla?: string | null;
		price?: Price;

		/** Required. The available quantity of the item. */
		quantity?: string | null;

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile. */
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

		/** Optional. Supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). */
		pickupMethod: FormControl<string | null | undefined>,

		/** Optional. Expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). */
		pickupSla: FormControl<string | null | undefined>,

		/** Required. The available quantity of the item. */
		quantity: FormControl<string | null | undefined>,

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile. */
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
			pickupMethod: new FormControl<string | null | undefined>(undefined),
			pickupSla: new FormControl<string | null | undefined>(undefined),
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#posInventoryResponse`". */
		kind?: string | null;

		/** Optional. Supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). */
		pickupMethod?: string | null;

		/** Optional. Expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). */
		pickupSla?: string | null;
		price?: Price;

		/** Required. The available quantity of the item. */
		quantity?: string | null;

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile. */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#posInventoryResponse`". */
		kind: FormControl<string | null | undefined>,

		/** Optional. Supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). */
		pickupMethod: FormControl<string | null | undefined>,

		/** Optional. Expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the [local product inventory feed specification](https://support.google.com/merchants/answer/3061342). */
		pickupSla: FormControl<string | null | undefined>,

		/** Required. The available quantity of the item. */
		quantity: FormControl<string | null | undefined>,

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile. */
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
			pickupMethod: new FormControl<string | null | undefined>(undefined),
			pickupSla: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<string | null | undefined>(undefined),
			storeCode: new FormControl<string | null | undefined>(undefined),
			targetCountry: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PosListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#posListResponse`". */
		kind?: string | null;
		resources?: Array<PosStore>;
	}
	export interface PosListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#posListResponse`". */
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

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile. */
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

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile. */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#posSaleResponse`". */
		kind?: string | null;
		price?: Price;

		/** Required. The relative change of the available quantity. Negative for items returned. */
		quantity?: string | null;

		/** A unique ID to group items from the same sale event. */
		saleId?: string | null;

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile. */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#posSaleResponse`". */
		kind: FormControl<string | null | undefined>,

		/** Required. The relative change of the available quantity. Negative for items returned. */
		quantity: FormControl<string | null | undefined>,

		/** A unique ID to group items from the same sale event. */
		saleId: FormControl<string | null | undefined>,

		/** Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile. */
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


	/** Price competitiveness fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceCompetitivenessProductView`. https://support.google.com/merchants/answer/9626903 */
	export interface PriceCompetitiveness {

		/** The price benchmark currency (ISO 4217 code). */
		benchmarkPriceCurrencyCode?: string | null;

		/** The latest available price benchmark in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) for the product's catalog in the benchmark country. */
		benchmarkPriceMicros?: string | null;

		/** The country of the price benchmark (ISO 3166 code). */
		countryCode?: string | null;
	}

	/** Price competitiveness fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceCompetitivenessProductView`. https://support.google.com/merchants/answer/9626903 */
	export interface PriceCompetitivenessFormProperties {

		/** The price benchmark currency (ISO 4217 code). */
		benchmarkPriceCurrencyCode: FormControl<string | null | undefined>,

		/** The latest available price benchmark in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) for the product's catalog in the benchmark country. */
		benchmarkPriceMicros: FormControl<string | null | undefined>,

		/** The country of the price benchmark (ISO 3166 code). */
		countryCode: FormControl<string | null | undefined>,
	}
	export function CreatePriceCompetitivenessFormGroup() {
		return new FormGroup<PriceCompetitivenessFormProperties>({
			benchmarkPriceCurrencyCode: new FormControl<string | null | undefined>(undefined),
			benchmarkPriceMicros: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Price insights fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceInsightsProductView`. https://support.google.com/merchants/answer/11916926 */
	export interface PriceInsights {

		/** The predicted change in clicks as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in clicks. */
		predictedClicksChangeFraction?: number | null;

		/** The predicted change in conversions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in conversions). */
		predictedConversionsChangeFraction?: number | null;

		/** *Deprecated*: This field is no longer supported and will start returning 0. The predicted change in gross profit as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in gross profit. */
		predictedGrossProfitChangeFraction?: number | null;

		/** The predicted change in impressions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in impressions. */
		predictedImpressionsChangeFraction?: number | null;

		/** *Deprecated*: This field is no longer supported and will start returning USD for all requests. The predicted monthly gross profit change currency (ISO 4217 code). */
		predictedMonthlyGrossProfitChangeCurrencyCode?: string | null;

		/** *Deprecated*: This field is no longer supported and will start returning 0. The predicted change in gross profit in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) after introducing the suggested price for a month compared to current active price. */
		predictedMonthlyGrossProfitChangeMicros?: string | null;

		/** The suggested price currency (ISO 4217 code). */
		suggestedPriceCurrencyCode?: string | null;

		/** The latest suggested price in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) for the product. */
		suggestedPriceMicros?: string | null;
	}

	/** Price insights fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceInsightsProductView`. https://support.google.com/merchants/answer/11916926 */
	export interface PriceInsightsFormProperties {

		/** The predicted change in clicks as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in clicks. */
		predictedClicksChangeFraction: FormControl<number | null | undefined>,

		/** The predicted change in conversions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in conversions). */
		predictedConversionsChangeFraction: FormControl<number | null | undefined>,

		/** *Deprecated*: This field is no longer supported and will start returning 0. The predicted change in gross profit as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in gross profit. */
		predictedGrossProfitChangeFraction: FormControl<number | null | undefined>,

		/** The predicted change in impressions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in impressions. */
		predictedImpressionsChangeFraction: FormControl<number | null | undefined>,

		/** *Deprecated*: This field is no longer supported and will start returning USD for all requests. The predicted monthly gross profit change currency (ISO 4217 code). */
		predictedMonthlyGrossProfitChangeCurrencyCode: FormControl<string | null | undefined>,

		/** *Deprecated*: This field is no longer supported and will start returning 0. The predicted change in gross profit in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) after introducing the suggested price for a month compared to current active price. */
		predictedMonthlyGrossProfitChangeMicros: FormControl<string | null | undefined>,

		/** The suggested price currency (ISO 4217 code). */
		suggestedPriceCurrencyCode: FormControl<string | null | undefined>,

		/** The latest suggested price in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) for the product. */
		suggestedPriceMicros: FormControl<string | null | undefined>,
	}
	export function CreatePriceInsightsFormGroup() {
		return new FormGroup<PriceInsightsFormProperties>({
			predictedClicksChangeFraction: new FormControl<number | null | undefined>(undefined),
			predictedConversionsChangeFraction: new FormControl<number | null | undefined>(undefined),
			predictedGrossProfitChangeFraction: new FormControl<number | null | undefined>(undefined),
			predictedImpressionsChangeFraction: new FormControl<number | null | undefined>(undefined),
			predictedMonthlyGrossProfitChangeCurrencyCode: new FormControl<string | null | undefined>(undefined),
			predictedMonthlyGrossProfitChangeMicros: new FormControl<string | null | undefined>(undefined),
			suggestedPriceCurrencyCode: new FormControl<string | null | undefined>(undefined),
			suggestedPriceMicros: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Required product attributes are primarily defined by the product data specification. See the Product Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect. */
	export interface Product {

		/** Additional URLs of images of the item. */
		additionalImageLinks?: Array<string>;

		/** Additional cut of the item. Used together with size_type to represent combined size types for apparel items. */
		additionalSizeType?: string | null;

		/** Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise. */
		adsGrouping?: string | null;

		/** Similar to ads_grouping, but only works on CPC. */
		adsLabels?: Array<string>;

		/** Allows advertisers to override the item URL when the product is shown within the context of Product Ads. */
		adsRedirect?: string | null;

		/** Should be set to true if the item is targeted towards adults. */
		adult?: boolean | null;

		/** Target age group of the item. */
		ageGroup?: string | null;

		/** Availability status of the item. */
		availability?: string | null;

		/** The day a pre-ordered product becomes available for delivery, in ISO 8601 format. */
		availabilityDate?: string | null;

		/** Brand of the item. */
		brand?: string | null;

		/** URL for the canonical version of your item's landing page. */
		canonicalLink?: string | null;

		/** Product [certification](https://support.google.com/merchants/answer/13528839), introduced for EU energy efficiency labeling compliance using the [EU EPREL](https://eprel.ec.europa.eu/screen/home) database. */
		certifications?: Array<ProductCertification>;

		/** Required. The item's channel (online or local). Acceptable values are: - "`local`" - "`online`" */
		channel?: string | null;

		/** Extra fields to export to the Cloud Retail program. */
		cloudExportAdditionalProperties?: Array<CloudExportAdditionalProperties>;

		/** Color of the item. */
		color?: string | null;

		/** Condition or state of the item. */
		condition?: string | null;

		/** Required. The two-letter ISO 639-1 language code for the item. */
		contentLanguage?: string | null;
		costOfGoodsSold?: Price;

		/** A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form (for example, `{ "name": "size type", "value": "regular" }`). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Buy on Google (formerly known as Shopping Actions). */
		customAttributes?: Array<CustomAttribute>;

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

		/** The date time when an offer becomes visible in search results across Google’s YouTube surfaces, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. See [Disclosure date](https://support.google.com/merchants/answer/13034208) for more information. */
		disclosureDate?: string | null;

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

		/** The energy efficiency class as defined in EU directive 2010/30/EU. */
		energyEfficiencyClass?: string | null;

		/** The list of destinations to exclude for this target (corresponds to cleared check boxes in Merchant Center). Products that are excluded from all destinations for more than 7 days are automatically deleted. */
		excludedDestinations?: Array<string>;

		/** Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in Google Shopping is exposed in `productstatuses` as `googleExpirationDate` and might be earlier if `expirationDate` is too far in the future. */
		expirationDate?: string | null;

		/** Required for multi-seller accounts. Use this attribute if you're a marketplace uploading products for various sellers to your multi-seller account. */
		externalSellerId?: string | null;

		/** Feed label for the item. Either `targetCountry` or `feedLabel` is required. Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-). */
		feedLabel?: string | null;

		/** Target gender of the item. */
		gender?: string | null;

		/** Google's category of the item (see [Google product taxonomy](https://support.google.com/merchants/answer/1705911)). When querying products, this field will contain the user provided value. There is currently no way to get back the auto assigned google product categories through the API. */
		googleProductCategory?: string | null;

		/** Global Trade Item Number (GTIN) of the item. */
		gtin?: string | null;

		/** The REST ID of the product. Content API methods that operate on products take this as their `productId` parameter. The REST ID for a product has one of the 2 forms channel:contentLanguage: targetCountry: offerId or channel:contentLanguage:feedLabel: offerId. */
		id?: string | null;

		/** False when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Required according to the Unique Product Identifier Rules for all target countries except for Canada. */
		identifierExists?: boolean | null;

		/** URL of an image of the item. */
		imageLink?: string | null;

		/** The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`. */
		includedDestinations?: Array<string>;
		installment?: Installment;

		/** Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant for a single price. */
		isBundle?: boolean | null;

		/** Shared identifier for all variants of the same product. */
		itemGroupId?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#product`" */
		kind?: string | null;

		/** Additional URLs of lifestyle images of the item. Used to explicitly identify images that showcase your item in a real-world context. See the Help Center article for more information. */
		lifestyleImageLinks?: Array<string>;

		/** URL directly linking to your item's page on your website. */
		link?: string | null;

		/** URL template for merchant hosted local storefront. */
		linkTemplate?: string | null;
		loyaltyPoints?: LoyaltyPoints;

		/** The material of which the item is made. */
		material?: string | null;

		/** The energy efficiency class as defined in EU directive 2010/30/EU. */
		maxEnergyEfficiencyClass?: string | null;

		/** Maximal product handling time (in business days). */
		maxHandlingTime?: string | null;

		/** The energy efficiency class as defined in EU directive 2010/30/EU. */
		minEnergyEfficiencyClass?: string | null;

		/** Minimal product handling time (in business days). */
		minHandlingTime?: string | null;

		/** URL for the mobile-optimized version of your item's landing page. */
		mobileLink?: string | null;

		/** URL template for merchant hosted local storefront optimized for mobile devices. */
		mobileLinkTemplate?: string | null;

		/** Manufacturer Part Number (MPN) of the item. */
		mpn?: string | null;

		/** The number of identical products in a merchant-defined multipack. */
		multipack?: string | null;

		/** Required. A unique identifier for the item. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. Only valid unicode characters are accepted. See the products feed specification for details. *Note:* Content API methods that operate on products take the REST ID of the product, *not* this identifier. */
		offerId?: string | null;

		/** The item's pattern (for example, polka dots). */
		pattern?: string | null;

		/** Publication of this item should be temporarily paused. Acceptable values are: - "`ads`" */
		pause?: string | null;

		/** The pick up option for the item. Acceptable values are: - "`buy`" - "`reserve`" - "`ship to store`" - "`not supported`" */
		pickupMethod?: string | null;

		/** Item store pickup timeline. Acceptable values are: - "`same day`" - "`next day`" - "`2-day`" - "`3-day`" - "`4-day`" - "`5-day`" - "`6-day`" - "`7-day`" - "`multi-week`" */
		pickupSla?: string | null;
		price?: Price;

		/** Technical specification or additional product details. */
		productDetails?: Array<ProductProductDetail>;
		productHeight?: ProductDimension;

		/** Bullet points describing the most relevant highlights of a product. */
		productHighlights?: Array<string>;
		productLength?: ProductDimension;

		/** Categories of the item (formatted as in product data specification). */
		productTypes?: Array<string>;
		productWeight?: ProductWeight;
		productWidth?: ProductDimension;

		/** The unique ID of a promotion. */
		promotionIds?: Array<string>;
		salePrice?: Price;

		/** Date range during which the item is on sale (see product data specification ). */
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

		/** List of country codes (ISO 3166-1 alpha-2) to exclude the offer from Shopping Ads destination. Countries from this list are removed from countries configured in MC feed settings. */
		shoppingAdsExcludedCountries?: Array<string>;

		/** System in which the size is specified. Recommended for apparel items. */
		sizeSystem?: string | null;

		/** The cut of the item. Recommended for apparel items. */
		sizeType?: string | null;

		/** Size of the item. Only one value is allowed. For variants with different sizes, insert a separate product for each size with the same `itemGroupId` value (see size definition). */
		sizes?: Array<string>;

		/** The source of the offer, that is, how the offer was created. Acceptable values are: - "`api`" - "`crawl`" - "`feed`" */
		source?: string | null;
		subscriptionCost?: ProductSubscriptionCost;

		/** Required. The CLDR territory code for the item's country of sale. */
		targetCountry?: string | null;

		/** The tax category of the product, used to configure detailed tax nexus in account-level tax settings. */
		taxCategory?: string | null;

		/** Tax information. */
		taxes?: Array<ProductTax>;

		/** Title of the item. */
		title?: string | null;

		/** The transit time label of the product, used to group product in account-level transit time tables. */
		transitTimeLabel?: string | null;
		unitPricingBaseMeasure?: ProductUnitPricingBaseMeasure;
		unitPricingMeasure?: ProductUnitPricingMeasure;

		/** URL of the 3D model of the item to provide more visuals. */
		virtualModelLink?: string | null;
	}

	/**  Required product attributes are primarily defined by the product data specification. See the Product Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect. */
	export interface ProductFormProperties {

		/** Additional cut of the item. Used together with size_type to represent combined size types for apparel items. */
		additionalSizeType: FormControl<string | null | undefined>,

		/** Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise. */
		adsGrouping: FormControl<string | null | undefined>,

		/** Allows advertisers to override the item URL when the product is shown within the context of Product Ads. */
		adsRedirect: FormControl<string | null | undefined>,

		/** Should be set to true if the item is targeted towards adults. */
		adult: FormControl<boolean | null | undefined>,

		/** Target age group of the item. */
		ageGroup: FormControl<string | null | undefined>,

		/** Availability status of the item. */
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

		/** Condition or state of the item. */
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

		/** The date time when an offer becomes visible in search results across Google’s YouTube surfaces, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. See [Disclosure date](https://support.google.com/merchants/answer/13034208) for more information. */
		disclosureDate: FormControl<string | null | undefined>,

		/** An identifier for an item for dynamic remarketing campaigns. */
		displayAdsId: FormControl<string | null | undefined>,

		/** URL directly to your item's landing page for dynamic remarketing campaigns. */
		displayAdsLink: FormControl<string | null | undefined>,

		/** Title of an item for dynamic remarketing campaigns. */
		displayAdsTitle: FormControl<string | null | undefined>,

		/** Offer margin for dynamic remarketing campaigns. */
		displayAdsValue: FormControl<number | null | undefined>,

		/** The energy efficiency class as defined in EU directive 2010/30/EU. */
		energyEfficiencyClass: FormControl<string | null | undefined>,

		/** Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in Google Shopping is exposed in `productstatuses` as `googleExpirationDate` and might be earlier if `expirationDate` is too far in the future. */
		expirationDate: FormControl<string | null | undefined>,

		/** Required for multi-seller accounts. Use this attribute if you're a marketplace uploading products for various sellers to your multi-seller account. */
		externalSellerId: FormControl<string | null | undefined>,

		/** Feed label for the item. Either `targetCountry` or `feedLabel` is required. Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-). */
		feedLabel: FormControl<string | null | undefined>,

		/** Target gender of the item. */
		gender: FormControl<string | null | undefined>,

		/** Google's category of the item (see [Google product taxonomy](https://support.google.com/merchants/answer/1705911)). When querying products, this field will contain the user provided value. There is currently no way to get back the auto assigned google product categories through the API. */
		googleProductCategory: FormControl<string | null | undefined>,

		/** Global Trade Item Number (GTIN) of the item. */
		gtin: FormControl<string | null | undefined>,

		/** The REST ID of the product. Content API methods that operate on products take this as their `productId` parameter. The REST ID for a product has one of the 2 forms channel:contentLanguage: targetCountry: offerId or channel:contentLanguage:feedLabel: offerId. */
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

		/** URL template for merchant hosted local storefront. */
		linkTemplate: FormControl<string | null | undefined>,

		/** The material of which the item is made. */
		material: FormControl<string | null | undefined>,

		/** The energy efficiency class as defined in EU directive 2010/30/EU. */
		maxEnergyEfficiencyClass: FormControl<string | null | undefined>,

		/** Maximal product handling time (in business days). */
		maxHandlingTime: FormControl<string | null | undefined>,

		/** The energy efficiency class as defined in EU directive 2010/30/EU. */
		minEnergyEfficiencyClass: FormControl<string | null | undefined>,

		/** Minimal product handling time (in business days). */
		minHandlingTime: FormControl<string | null | undefined>,

		/** URL for the mobile-optimized version of your item's landing page. */
		mobileLink: FormControl<string | null | undefined>,

		/** URL template for merchant hosted local storefront optimized for mobile devices. */
		mobileLinkTemplate: FormControl<string | null | undefined>,

		/** Manufacturer Part Number (MPN) of the item. */
		mpn: FormControl<string | null | undefined>,

		/** The number of identical products in a merchant-defined multipack. */
		multipack: FormControl<string | null | undefined>,

		/** Required. A unique identifier for the item. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. Only valid unicode characters are accepted. See the products feed specification for details. *Note:* Content API methods that operate on products take the REST ID of the product, *not* this identifier. */
		offerId: FormControl<string | null | undefined>,

		/** The item's pattern (for example, polka dots). */
		pattern: FormControl<string | null | undefined>,

		/** Publication of this item should be temporarily paused. Acceptable values are: - "`ads`" */
		pause: FormControl<string | null | undefined>,

		/** The pick up option for the item. Acceptable values are: - "`buy`" - "`reserve`" - "`ship to store`" - "`not supported`" */
		pickupMethod: FormControl<string | null | undefined>,

		/** Item store pickup timeline. Acceptable values are: - "`same day`" - "`next day`" - "`2-day`" - "`3-day`" - "`4-day`" - "`5-day`" - "`6-day`" - "`7-day`" - "`multi-week`" */
		pickupSla: FormControl<string | null | undefined>,

		/** Date range during which the item is on sale (see product data specification ). */
		salePriceEffectiveDate: FormControl<string | null | undefined>,

		/** The quantity of the product that is available for selling on Google. Supported only for online products. */
		sellOnGoogleQuantity: FormControl<string | null | undefined>,

		/** The shipping label of the product, used to group product in account-level shipping rules. */
		shippingLabel: FormControl<string | null | undefined>,

		/** System in which the size is specified. Recommended for apparel items. */
		sizeSystem: FormControl<string | null | undefined>,

		/** The cut of the item. Recommended for apparel items. */
		sizeType: FormControl<string | null | undefined>,

		/** The source of the offer, that is, how the offer was created. Acceptable values are: - "`api`" - "`crawl`" - "`feed`" */
		source: FormControl<string | null | undefined>,

		/** Required. The CLDR territory code for the item's country of sale. */
		targetCountry: FormControl<string | null | undefined>,

		/** The tax category of the product, used to configure detailed tax nexus in account-level tax settings. */
		taxCategory: FormControl<string | null | undefined>,

		/** Title of the item. */
		title: FormControl<string | null | undefined>,

		/** The transit time label of the product, used to group product in account-level transit time tables. */
		transitTimeLabel: FormControl<string | null | undefined>,

		/** URL of the 3D model of the item to provide more visuals. */
		virtualModelLink: FormControl<string | null | undefined>,
	}
	export function CreateProductFormGroup() {
		return new FormGroup<ProductFormProperties>({
			additionalSizeType: new FormControl<string | null | undefined>(undefined),
			adsGrouping: new FormControl<string | null | undefined>(undefined),
			adsRedirect: new FormControl<string | null | undefined>(undefined),
			adult: new FormControl<boolean | null | undefined>(undefined),
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
			disclosureDate: new FormControl<string | null | undefined>(undefined),
			displayAdsId: new FormControl<string | null | undefined>(undefined),
			displayAdsLink: new FormControl<string | null | undefined>(undefined),
			displayAdsTitle: new FormControl<string | null | undefined>(undefined),
			displayAdsValue: new FormControl<number | null | undefined>(undefined),
			energyEfficiencyClass: new FormControl<string | null | undefined>(undefined),
			expirationDate: new FormControl<string | null | undefined>(undefined),
			externalSellerId: new FormControl<string | null | undefined>(undefined),
			feedLabel: new FormControl<string | null | undefined>(undefined),
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
			linkTemplate: new FormControl<string | null | undefined>(undefined),
			material: new FormControl<string | null | undefined>(undefined),
			maxEnergyEfficiencyClass: new FormControl<string | null | undefined>(undefined),
			maxHandlingTime: new FormControl<string | null | undefined>(undefined),
			minEnergyEfficiencyClass: new FormControl<string | null | undefined>(undefined),
			minHandlingTime: new FormControl<string | null | undefined>(undefined),
			mobileLink: new FormControl<string | null | undefined>(undefined),
			mobileLinkTemplate: new FormControl<string | null | undefined>(undefined),
			mpn: new FormControl<string | null | undefined>(undefined),
			multipack: new FormControl<string | null | undefined>(undefined),
			offerId: new FormControl<string | null | undefined>(undefined),
			pattern: new FormControl<string | null | undefined>(undefined),
			pause: new FormControl<string | null | undefined>(undefined),
			pickupMethod: new FormControl<string | null | undefined>(undefined),
			pickupSla: new FormControl<string | null | undefined>(undefined),
			salePriceEffectiveDate: new FormControl<string | null | undefined>(undefined),
			sellOnGoogleQuantity: new FormControl<string | null | undefined>(undefined),
			shippingLabel: new FormControl<string | null | undefined>(undefined),
			sizeSystem: new FormControl<string | null | undefined>(undefined),
			sizeType: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			targetCountry: new FormControl<string | null | undefined>(undefined),
			taxCategory: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			transitTimeLabel: new FormControl<string | null | undefined>(undefined),
			virtualModelLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Product [certification](https://support.google.com/merchants/answer/13528839), introduced for EU energy efficiency labeling compliance using the [EU EPREL](https://eprel.ec.europa.eu/screen/home) database. */
	export interface ProductCertification {

		/** The certification authority, for example "European_Commission". Maximum length is 2000 characters. */
		certificationAuthority?: string | null;

		/** The certification code, for eaxample "123456". Maximum length is 2000 characters. */
		certificationCode?: string | null;

		/** The name of the certification, for example "EPREL". Maximum length is 2000 characters. */
		certificationName?: string | null;
	}

	/** Product [certification](https://support.google.com/merchants/answer/13528839), introduced for EU energy efficiency labeling compliance using the [EU EPREL](https://eprel.ec.europa.eu/screen/home) database. */
	export interface ProductCertificationFormProperties {

		/** The certification authority, for example "European_Commission". Maximum length is 2000 characters. */
		certificationAuthority: FormControl<string | null | undefined>,

		/** The certification code, for eaxample "123456". Maximum length is 2000 characters. */
		certificationCode: FormControl<string | null | undefined>,

		/** The name of the certification, for example "EPREL". Maximum length is 2000 characters. */
		certificationName: FormControl<string | null | undefined>,
	}
	export function CreateProductCertificationFormGroup() {
		return new FormGroup<ProductCertificationFormProperties>({
			certificationAuthority: new FormControl<string | null | undefined>(undefined),
			certificationCode: new FormControl<string | null | undefined>(undefined),
			certificationName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductProductDetail {

		/** The name of the product detail. */
		attributeName?: string | null;

		/** The value of the product detail. */
		attributeValue?: string | null;

		/** The section header used to group a set of product details. */
		sectionName?: string | null;
	}
	export interface ProductProductDetailFormProperties {

		/** The name of the product detail. */
		attributeName: FormControl<string | null | undefined>,

		/** The value of the product detail. */
		attributeValue: FormControl<string | null | undefined>,

		/** The section header used to group a set of product details. */
		sectionName: FormControl<string | null | undefined>,
	}
	export function CreateProductProductDetailFormGroup() {
		return new FormGroup<ProductProductDetailFormProperties>({
			attributeName: new FormControl<string | null | undefined>(undefined),
			attributeValue: new FormControl<string | null | undefined>(undefined),
			sectionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductDimension {

		/** Required. The length units. Acceptable values are: - "`in`" - "`cm`" */
		unit?: string | null;

		/** Required. The length value represented as a number. The value can have a maximum precision of four decimal places. */
		value?: number | null;
	}
	export interface ProductDimensionFormProperties {

		/** Required. The length units. Acceptable values are: - "`in`" - "`cm`" */
		unit: FormControl<string | null | undefined>,

		/** Required. The length value represented as a number. The value can have a maximum precision of four decimal places. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductDimensionFormGroup() {
		return new FormGroup<ProductDimensionFormProperties>({
			unit: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProductWeight {

		/** Required. The weight unit. Acceptable values are: - "`g`" - "`kg`" - "`oz`" - "`lb`" */
		unit?: string | null;

		/** Required. The weight represented as a number. The weight can have a maximum precision of four decimal places. */
		value?: number | null;
	}
	export interface ProductWeightFormProperties {

		/** Required. The weight unit. Acceptable values are: - "`g`" - "`kg`" - "`oz`" - "`lb`" */
		unit: FormControl<string | null | undefined>,

		/** Required. The weight represented as a number. The weight can have a maximum precision of four decimal places. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductWeightFormGroup() {
		return new FormGroup<ProductWeightFormProperties>({
			unit: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProductShipping {

		/** The CLDR territory code of the country to which an item will ship. */
		country?: string | null;

		/** The location where the shipping is applicable, represented by a location group name. */
		locationGroupName?: string | null;

		/** The numeric ID of a location that the shipping rate applies to as defined in the Google Ads API. */
		locationId?: string | null;

		/** Maximum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it's received if it happens before the cut-off time. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds. */
		maxHandlingTime?: string | null;

		/** Maximum transit time (inclusive) between when the order has shipped and when it's delivered in business days. 0 means that the order is delivered on the same day as it ships. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds. */
		maxTransitTime?: string | null;

		/** Minimum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it's received if it happens before the cut-off time. minHandlingTime can only be present together with maxHandlingTime; but it's not required if maxHandlingTime is present. */
		minHandlingTime?: string | null;

		/** Minimum transit time (inclusive) between when the order has shipped and when it's delivered in business days. 0 means that the order is delivered on the same day as it ships. minTransitTime can only be present together with maxTransitTime; but it's not required if maxTransitTime is present. */
		minTransitTime?: string | null;

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

		/** The numeric ID of a location that the shipping rate applies to as defined in the Google Ads API. */
		locationId: FormControl<string | null | undefined>,

		/** Maximum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it's received if it happens before the cut-off time. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds. */
		maxHandlingTime: FormControl<string | null | undefined>,

		/** Maximum transit time (inclusive) between when the order has shipped and when it's delivered in business days. 0 means that the order is delivered on the same day as it ships. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds. */
		maxTransitTime: FormControl<string | null | undefined>,

		/** Minimum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it's received if it happens before the cut-off time. minHandlingTime can only be present together with maxHandlingTime; but it's not required if maxHandlingTime is present. */
		minHandlingTime: FormControl<string | null | undefined>,

		/** Minimum transit time (inclusive) between when the order has shipped and when it's delivered in business days. 0 means that the order is delivered on the same day as it ships. minTransitTime can only be present together with maxTransitTime; but it's not required if maxTransitTime is present. */
		minTransitTime: FormControl<string | null | undefined>,

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
			maxHandlingTime: new FormControl<string | null | undefined>(undefined),
			maxTransitTime: new FormControl<string | null | undefined>(undefined),
			minHandlingTime: new FormControl<string | null | undefined>(undefined),
			minTransitTime: new FormControl<string | null | undefined>(undefined),
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

	export interface ProductSubscriptionCost {
		amount?: Price;

		/** The type of subscription period. */
		period?: string | null;

		/** The number of subscription periods the buyer has to pay. */
		periodLength?: string | null;
	}
	export interface ProductSubscriptionCostFormProperties {

		/** The type of subscription period. */
		period: FormControl<string | null | undefined>,

		/** The number of subscription periods the buyer has to pay. */
		periodLength: FormControl<string | null | undefined>,
	}
	export function CreateProductSubscriptionCostFormGroup() {
		return new FormGroup<ProductSubscriptionCostFormProperties>({
			period: new FormControl<string | null | undefined>(undefined),
			periodLength: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductTax {

		/** The country within which the item is taxed, specified as a CLDR territory code. */
		country?: string | null;

		/** The numeric ID of a location that the tax rate applies to as defined in the Google Ads API. */
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

		/** The numeric ID of a location that the tax rate applies to as defined in the Google Ads API. */
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


	/** Product cluster fields. A product cluster is a grouping for different offers that represent the same product. Values are only set for fields requested explicitly in the request's search query. */
	export interface ProductCluster {

		/** Brand of the product cluster. */
		brand?: string | null;

		/** Tells if there is at least one product of the brand currently `IN_STOCK` in your product feed across multiple countries, all products are `OUT_OF_STOCK` in your product feed, or `NOT_IN_INVENTORY`. The field doesn't take the Best Sellers report country filter into account. */
		brandInventoryStatus?: ProductClusterBrandInventoryStatus | null;

		/** Product category (1st level) of the product cluster, represented in Google's product taxonomy. */
		categoryL1?: string | null;

		/** Product category (2nd level) of the product cluster, represented in Google's product taxonomy. */
		categoryL2?: string | null;

		/** Product category (3rd level) of the product cluster, represented in Google's product taxonomy. */
		categoryL3?: string | null;

		/** Product category (4th level) of the product cluster, represented in Google's product taxonomy. */
		categoryL4?: string | null;

		/** Product category (5th level) of the product cluster, represented in Google's product taxonomy. */
		categoryL5?: string | null;

		/** Tells whether the product cluster is `IN_STOCK` in your product feed across multiple countries, `OUT_OF_STOCK` in your product feed, or `NOT_IN_INVENTORY` at all. The field doesn't take the Best Sellers report country filter into account. */
		inventoryStatus?: ProductClusterBrandInventoryStatus | null;

		/** Title of the product cluster. */
		title?: string | null;

		/** GTINs of example variants of the product cluster. */
		variantGtins?: Array<string>;
	}

	/** Product cluster fields. A product cluster is a grouping for different offers that represent the same product. Values are only set for fields requested explicitly in the request's search query. */
	export interface ProductClusterFormProperties {

		/** Brand of the product cluster. */
		brand: FormControl<string | null | undefined>,

		/** Tells if there is at least one product of the brand currently `IN_STOCK` in your product feed across multiple countries, all products are `OUT_OF_STOCK` in your product feed, or `NOT_IN_INVENTORY`. The field doesn't take the Best Sellers report country filter into account. */
		brandInventoryStatus: FormControl<ProductClusterBrandInventoryStatus | null | undefined>,

		/** Product category (1st level) of the product cluster, represented in Google's product taxonomy. */
		categoryL1: FormControl<string | null | undefined>,

		/** Product category (2nd level) of the product cluster, represented in Google's product taxonomy. */
		categoryL2: FormControl<string | null | undefined>,

		/** Product category (3rd level) of the product cluster, represented in Google's product taxonomy. */
		categoryL3: FormControl<string | null | undefined>,

		/** Product category (4th level) of the product cluster, represented in Google's product taxonomy. */
		categoryL4: FormControl<string | null | undefined>,

		/** Product category (5th level) of the product cluster, represented in Google's product taxonomy. */
		categoryL5: FormControl<string | null | undefined>,

		/** Tells whether the product cluster is `IN_STOCK` in your product feed across multiple countries, `OUT_OF_STOCK` in your product feed, or `NOT_IN_INVENTORY` at all. The field doesn't take the Best Sellers report country filter into account. */
		inventoryStatus: FormControl<ProductClusterBrandInventoryStatus | null | undefined>,

		/** Title of the product cluster. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateProductClusterFormGroup() {
		return new FormGroup<ProductClusterFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined),
			brandInventoryStatus: new FormControl<ProductClusterBrandInventoryStatus | null | undefined>(undefined),
			categoryL1: new FormControl<string | null | undefined>(undefined),
			categoryL2: new FormControl<string | null | undefined>(undefined),
			categoryL3: new FormControl<string | null | undefined>(undefined),
			categoryL4: new FormControl<string | null | undefined>(undefined),
			categoryL5: new FormControl<string | null | undefined>(undefined),
			inventoryStatus: new FormControl<ProductClusterBrandInventoryStatus | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProductClusterBrandInventoryStatus { INVENTORY_STATUS_UNSPECIFIED = 0, IN_STOCK = 1, OUT_OF_STOCK = 2, NOT_IN_INVENTORY = 3 }


	/** The estimated days to deliver a product after an order is placed. Only authorized shipping signals partners working with a merchant can use this resource. Merchants should use the [`products`](https://developers.google.com/shopping-content/reference/rest/v2.1/products#productshipping) resource instead. */
	export interface ProductDeliveryTime {

		/** Required. A set of associations between `DeliveryArea` and `DeliveryTime` entries. The total number of `areaDeliveryTimes` can be at most 100. */
		areaDeliveryTimes?: Array<ProductDeliveryTimeAreaDeliveryTime>;

		/** The Content API ID of the product. */
		productId?: ProductId;
	}

	/** The estimated days to deliver a product after an order is placed. Only authorized shipping signals partners working with a merchant can use this resource. Merchants should use the [`products`](https://developers.google.com/shopping-content/reference/rest/v2.1/products#productshipping) resource instead. */
	export interface ProductDeliveryTimeFormProperties {
	}
	export function CreateProductDeliveryTimeFormGroup() {
		return new FormGroup<ProductDeliveryTimeFormProperties>({
		});

	}


	/** A pairing of `DeliveryArea` associated with a `DeliveryTime` for this product. */
	export interface ProductDeliveryTimeAreaDeliveryTime {

		/** A delivery area for the product. Only one of `countryCode` or `postalCodeRange` must be set. */
		deliveryArea?: DeliveryArea;

		/** A delivery time for this product. */
		deliveryTime?: ProductDeliveryTimeAreaDeliveryTimeDeliveryTime;
	}

	/** A pairing of `DeliveryArea` associated with a `DeliveryTime` for this product. */
	export interface ProductDeliveryTimeAreaDeliveryTimeFormProperties {
	}
	export function CreateProductDeliveryTimeAreaDeliveryTimeFormGroup() {
		return new FormGroup<ProductDeliveryTimeAreaDeliveryTimeFormProperties>({
		});

	}


	/** A delivery time for this product. */
	export interface ProductDeliveryTimeAreaDeliveryTimeDeliveryTime {

		/** Required. The maximum number of business days (inclusive) between when an order is placed and when the product ships. If a product ships in the same day, set this value to 0. */
		maxHandlingTimeDays?: number | null;

		/** Required. The maximum number of business days (inclusive) between when the product ships and when the product is delivered. */
		maxTransitTimeDays?: number | null;

		/** Required. The minimum number of business days (inclusive) between when an order is placed and when the product ships. If a product ships in the same day, set this value to 0. */
		minHandlingTimeDays?: number | null;

		/** Required. The minimum number of business days (inclusive) between when the product ships and when the product is delivered. */
		minTransitTimeDays?: number | null;
	}

	/** A delivery time for this product. */
	export interface ProductDeliveryTimeAreaDeliveryTimeDeliveryTimeFormProperties {

		/** Required. The maximum number of business days (inclusive) between when an order is placed and when the product ships. If a product ships in the same day, set this value to 0. */
		maxHandlingTimeDays: FormControl<number | null | undefined>,

		/** Required. The maximum number of business days (inclusive) between when the product ships and when the product is delivered. */
		maxTransitTimeDays: FormControl<number | null | undefined>,

		/** Required. The minimum number of business days (inclusive) between when an order is placed and when the product ships. If a product ships in the same day, set this value to 0. */
		minHandlingTimeDays: FormControl<number | null | undefined>,

		/** Required. The minimum number of business days (inclusive) between when the product ships and when the product is delivered. */
		minTransitTimeDays: FormControl<number | null | undefined>,
	}
	export function CreateProductDeliveryTimeAreaDeliveryTimeDeliveryTimeFormGroup() {
		return new FormGroup<ProductDeliveryTimeAreaDeliveryTimeDeliveryTimeFormProperties>({
			maxHandlingTimeDays: new FormControl<number | null | undefined>(undefined),
			maxTransitTimeDays: new FormControl<number | null | undefined>(undefined),
			minHandlingTimeDays: new FormControl<number | null | undefined>(undefined),
			minTransitTimeDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Content API ID of the product. */
	export interface ProductId {

		/** The Content API ID of the product, in the form `channel:contentLanguage:targetCountry:offerId`. */
		productId?: string | null;
	}

	/** The Content API ID of the product. */
	export interface ProductIdFormProperties {

		/** The Content API ID of the product, in the form `channel:contentLanguage:targetCountry:offerId`. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateProductIdFormGroup() {
		return new FormGroup<ProductIdFormProperties>({
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An issue affecting specific product. */
	export interface ProductIssue {

		/** A list of actionable steps that can be executed to solve the issue. An example is requesting a re-review or providing arguments when merchant disagrees with the issue. Actions that are supported in (your) third-party application can be rendered as buttons and should be available to merchant when they expand the issue. */
		actions?: Array<Action>;

		/** Overall impact of product issue. */
		impact?: ProductIssueImpact;

		/** Details of the issue as a pre-rendered HTML. HTML elements contain CSS classes that can be used to customize the style of the content. Always sanitize the HTML before embedding it directly to your application. The sanitizer needs to allow basic HTML tags, such as: `div`, `span`, `p`, `a`, `ul`, `li`, `table`, `tr`, `td`. For example, you can use [DOMPurify](https://www.npmjs.com/package/dompurify). CSS classes: * `issue-detail` - top level container for the detail of the issue * `callout-banners` - section of the `issue-detail` with callout banners * `callout-banner` - single callout banner, inside `callout-banners` * `callout-banner-info` - callout with important information (default) * `callout-banner-warning` - callout with a warning * `callout-banner-error` - callout informing about an error (most severe) * `issue-content` - section of the `issue-detail`, contains multiple `content-element` * `content-element` - content element such as a list, link or paragraph, inside `issue-content` * `root-causes` - unordered list with items describing root causes of the issue, inside `issue-content` * `root-causes-intro` - intro text before the `root-causes` list, inside `issue-content` * `segment` - section of the text, `span` inside paragraph * `segment-attribute` - section of the text that represents a product attribute, for example 'image\_link' * `segment-literal` - section of the text that contains a special value, for example '0-1000 kg' * `segment-bold` - section of the text that should be rendered as bold * `segment-italic` - section of the text that should be rendered as italic * `tooltip` - used on paragraphs that should be rendered with a tooltip. A section of the text in such a paragraph will have a class `tooltip-text` and is intended to be shown in a mouse over dialog. If the style is not used, the `tooltip-text` section would be shown on a new line, after the main part of the text. * `tooltip-text` - marks a section of the text within a `tooltip`, that is intended to be shown in a mouse over dialog. * `tooltip-icon` - marks a section of the text within a `tooltip`, that can be replaced with a tooltip icon, for example '?' or 'i'. By default, this section contains a `br` tag, that is separating the main text and the tooltip text when the style is not used. * `tooltip-style-question` - the tooltip shows helpful information, can use the '?' as an icon. * `tooltip-style-info` - the tooltip adds additional information fitting to the context, can use the 'i' as an icon. * `content-moderation` - marks the paragraph that explains how the issue was identified. * `new-element` - Present for new elements added to the pre-rendered content in the future. To make sure that a new content element does not break your style, you can hide everything with this class. */
		prerenderedContent?: string | null;

		/** Title of the issue. */
		title?: string | null;
	}

	/** An issue affecting specific product. */
	export interface ProductIssueFormProperties {

		/** Details of the issue as a pre-rendered HTML. HTML elements contain CSS classes that can be used to customize the style of the content. Always sanitize the HTML before embedding it directly to your application. The sanitizer needs to allow basic HTML tags, such as: `div`, `span`, `p`, `a`, `ul`, `li`, `table`, `tr`, `td`. For example, you can use [DOMPurify](https://www.npmjs.com/package/dompurify). CSS classes: * `issue-detail` - top level container for the detail of the issue * `callout-banners` - section of the `issue-detail` with callout banners * `callout-banner` - single callout banner, inside `callout-banners` * `callout-banner-info` - callout with important information (default) * `callout-banner-warning` - callout with a warning * `callout-banner-error` - callout informing about an error (most severe) * `issue-content` - section of the `issue-detail`, contains multiple `content-element` * `content-element` - content element such as a list, link or paragraph, inside `issue-content` * `root-causes` - unordered list with items describing root causes of the issue, inside `issue-content` * `root-causes-intro` - intro text before the `root-causes` list, inside `issue-content` * `segment` - section of the text, `span` inside paragraph * `segment-attribute` - section of the text that represents a product attribute, for example 'image\_link' * `segment-literal` - section of the text that contains a special value, for example '0-1000 kg' * `segment-bold` - section of the text that should be rendered as bold * `segment-italic` - section of the text that should be rendered as italic * `tooltip` - used on paragraphs that should be rendered with a tooltip. A section of the text in such a paragraph will have a class `tooltip-text` and is intended to be shown in a mouse over dialog. If the style is not used, the `tooltip-text` section would be shown on a new line, after the main part of the text. * `tooltip-text` - marks a section of the text within a `tooltip`, that is intended to be shown in a mouse over dialog. * `tooltip-icon` - marks a section of the text within a `tooltip`, that can be replaced with a tooltip icon, for example '?' or 'i'. By default, this section contains a `br` tag, that is separating the main text and the tooltip text when the style is not used. * `tooltip-style-question` - the tooltip shows helpful information, can use the '?' as an icon. * `tooltip-style-info` - the tooltip adds additional information fitting to the context, can use the 'i' as an icon. * `content-moderation` - marks the paragraph that explains how the issue was identified. * `new-element` - Present for new elements added to the pre-rendered content in the future. To make sure that a new content element does not break your style, you can hide everything with this class. */
		prerenderedContent: FormControl<string | null | undefined>,

		/** Title of the issue. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateProductIssueFormGroup() {
		return new FormGroup<ProductIssueFormProperties>({
			prerenderedContent: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Overall impact of product issue. */
	export interface ProductIssueImpact {

		/** Detailed impact breakdown. Explains the types of restriction the issue has in different shopping destinations and territory. If present, it should be rendered to the merchant. Can be shown as a mouse over dropdown or a dialog. Each breakdown item represents a group of regions with the same impact details. */
		breakdowns?: Array<Breakdown>;

		/** Optional. Message summarizing the overall impact of the issue. If present, it should be rendered to the merchant. For example: "Limits visibility in France" */
		message?: string | null;

		/** The severity of the issue. */
		severity?: AccountIssueImpactSeverity | null;
	}

	/** Overall impact of product issue. */
	export interface ProductIssueImpactFormProperties {

		/** Optional. Message summarizing the overall impact of the issue. If present, it should be rendered to the merchant. For example: "Limits visibility in France" */
		message: FormControl<string | null | undefined>,

		/** The severity of the issue. */
		severity: FormControl<AccountIssueImpactSeverity | null | undefined>,
	}
	export function CreateProductIssueImpactFormGroup() {
		return new FormGroup<ProductIssueImpactFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<AccountIssueImpactSeverity | null | undefined>(undefined),
		});

	}


	/** The status of a product, that is, information about a product computed asynchronously. */
	export interface ProductStatus {

		/** Date on which the item has been created, in ISO 8601 format. */
		creationDate?: string | null;

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

		/** The ID of the product for which status is reported. */
		productId?: string | null;

		/** The title of the product. */
		title?: string | null;
	}

	/** The status of a product, that is, information about a product computed asynchronously. */
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

	export interface ProductStatusDestinationStatus {

		/** List of country codes (ISO 3166-1 alpha-2) where the offer is approved. */
		approvedCountries?: Array<string>;

		/** The name of the destination */
		destination?: string | null;

		/** List of country codes (ISO 3166-1 alpha-2) where the offer is disapproved. */
		disapprovedCountries?: Array<string>;

		/** List of country codes (ISO 3166-1 alpha-2) where the offer is pending approval. */
		pendingCountries?: Array<string>;

		/** Deprecated. Destination approval status in `targetCountry` of the offer. */
		status?: string | null;
	}
	export interface ProductStatusDestinationStatusFormProperties {

		/** The name of the destination */
		destination: FormControl<string | null | undefined>,

		/** Deprecated. Destination approval status in `targetCountry` of the offer. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateProductStatusDestinationStatusFormGroup() {
		return new FormGroup<ProductStatusDestinationStatusFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductStatusItemLevelIssue {

		/** List of country codes (ISO 3166-1 alpha-2) where issue applies to the offer. */
		applicableCountries?: Array<string>;

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


	/** Product fields. Values are only set for fields requested explicitly in the request's search query. */
	export interface ProductView {

		/** Aggregated destination status. */
		aggregatedDestinationStatus?: ProductViewAggregatedDestinationStatus | null;

		/** Availability of the product. */
		availability?: string | null;

		/** Brand of the product. */
		brand?: string | null;

		/** First level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). */
		categoryL1?: string | null;

		/** Second level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). */
		categoryL2?: string | null;

		/** Third level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). */
		categoryL3?: string | null;

		/** Fourth level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). */
		categoryL4?: string | null;

		/** Fifth level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). */
		categoryL5?: string | null;

		/** Channel of the product (online versus local). */
		channel?: ProductViewChannel | null;

		/** Condition of the product. */
		condition?: string | null;

		/** The time the merchant created the product in timestamp seconds. */
		creationTime?: string | null;

		/** Product price currency code (for example, ISO 4217). Absent if product price is not available. */
		currencyCode?: string | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		expirationDate?: Date;

		/** GTIN of the product. */
		gtin?: Array<string>;

		/** The REST ID of the product, in the form of channel:contentLanguage:targetCountry:offerId. Content API methods that operate on products take this as their productId parameter. Should always be included in the SELECT clause. */
		id?: string | null;

		/** Item group ID provided by the merchant for grouping variants together. */
		itemGroupId?: string | null;

		/** List of item issues for the product. */
		itemIssues?: Array<ProductViewItemIssue>;

		/** Language code of the product in BCP 47 format. */
		languageCode?: string | null;

		/** Merchant-provided id of the product. */
		offerId?: string | null;

		/** Product price specified as micros (1 millionth of a standard unit, 1 USD = 1000000 micros) in the product currency. Absent in case the information about the price of the product is not available. */
		priceMicros?: string | null;

		/** First level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436). */
		productTypeL1?: string | null;

		/** Second level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436). */
		productTypeL2?: string | null;

		/** Third level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436). */
		productTypeL3?: string | null;

		/** Fourth level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436). */
		productTypeL4?: string | null;

		/** Fifth level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436). */
		productTypeL5?: string | null;

		/** The normalized shipping label specified in the feed */
		shippingLabel?: string | null;

		/** Title of the product. */
		title?: string | null;
	}

	/** Product fields. Values are only set for fields requested explicitly in the request's search query. */
	export interface ProductViewFormProperties {

		/** Aggregated destination status. */
		aggregatedDestinationStatus: FormControl<ProductViewAggregatedDestinationStatus | null | undefined>,

		/** Availability of the product. */
		availability: FormControl<string | null | undefined>,

		/** Brand of the product. */
		brand: FormControl<string | null | undefined>,

		/** First level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). */
		categoryL1: FormControl<string | null | undefined>,

		/** Second level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). */
		categoryL2: FormControl<string | null | undefined>,

		/** Third level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). */
		categoryL3: FormControl<string | null | undefined>,

		/** Fourth level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). */
		categoryL4: FormControl<string | null | undefined>,

		/** Fifth level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). */
		categoryL5: FormControl<string | null | undefined>,

		/** Channel of the product (online versus local). */
		channel: FormControl<ProductViewChannel | null | undefined>,

		/** Condition of the product. */
		condition: FormControl<string | null | undefined>,

		/** The time the merchant created the product in timestamp seconds. */
		creationTime: FormControl<string | null | undefined>,

		/** Product price currency code (for example, ISO 4217). Absent if product price is not available. */
		currencyCode: FormControl<string | null | undefined>,

		/** The REST ID of the product, in the form of channel:contentLanguage:targetCountry:offerId. Content API methods that operate on products take this as their productId parameter. Should always be included in the SELECT clause. */
		id: FormControl<string | null | undefined>,

		/** Item group ID provided by the merchant for grouping variants together. */
		itemGroupId: FormControl<string | null | undefined>,

		/** Language code of the product in BCP 47 format. */
		languageCode: FormControl<string | null | undefined>,

		/** Merchant-provided id of the product. */
		offerId: FormControl<string | null | undefined>,

		/** Product price specified as micros (1 millionth of a standard unit, 1 USD = 1000000 micros) in the product currency. Absent in case the information about the price of the product is not available. */
		priceMicros: FormControl<string | null | undefined>,

		/** First level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436). */
		productTypeL1: FormControl<string | null | undefined>,

		/** Second level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436). */
		productTypeL2: FormControl<string | null | undefined>,

		/** Third level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436). */
		productTypeL3: FormControl<string | null | undefined>,

		/** Fourth level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436). */
		productTypeL4: FormControl<string | null | undefined>,

		/** Fifth level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436). */
		productTypeL5: FormControl<string | null | undefined>,

		/** The normalized shipping label specified in the feed */
		shippingLabel: FormControl<string | null | undefined>,

		/** Title of the product. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateProductViewFormGroup() {
		return new FormGroup<ProductViewFormProperties>({
			aggregatedDestinationStatus: new FormControl<ProductViewAggregatedDestinationStatus | null | undefined>(undefined),
			availability: new FormControl<string | null | undefined>(undefined),
			brand: new FormControl<string | null | undefined>(undefined),
			categoryL1: new FormControl<string | null | undefined>(undefined),
			categoryL2: new FormControl<string | null | undefined>(undefined),
			categoryL3: new FormControl<string | null | undefined>(undefined),
			categoryL4: new FormControl<string | null | undefined>(undefined),
			categoryL5: new FormControl<string | null | undefined>(undefined),
			channel: new FormControl<ProductViewChannel | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			itemGroupId: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			offerId: new FormControl<string | null | undefined>(undefined),
			priceMicros: new FormControl<string | null | undefined>(undefined),
			productTypeL1: new FormControl<string | null | undefined>(undefined),
			productTypeL2: new FormControl<string | null | undefined>(undefined),
			productTypeL3: new FormControl<string | null | undefined>(undefined),
			productTypeL4: new FormControl<string | null | undefined>(undefined),
			productTypeL5: new FormControl<string | null | undefined>(undefined),
			shippingLabel: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProductViewAggregatedDestinationStatus { AGGREGATED_STATUS_UNSPECIFIED = 0, NOT_ELIGIBLE_OR_DISAPPROVED = 1, PENDING = 2, ELIGIBLE_LIMITED = 3, ELIGIBLE = 4 }

	export enum ProductViewChannel { CHANNEL_UNSPECIFIED = 0, LOCAL = 1, ONLINE = 2 }


	/** Item issue associated with the product. */
	export interface ProductViewItemIssue {

		/** Type of the item issue. */
		issueType?: ProductViewItemIssueItemIssueType;

		/** Item issue resolution. */
		resolution?: ProductViewItemIssueResolution | null;

		/** Severity of an issue per destination in a region, and aggregated severity. */
		severity?: ProductViewItemIssueItemIssueSeverity;
	}

	/** Item issue associated with the product. */
	export interface ProductViewItemIssueFormProperties {

		/** Item issue resolution. */
		resolution: FormControl<ProductViewItemIssueResolution | null | undefined>,
	}
	export function CreateProductViewItemIssueFormGroup() {
		return new FormGroup<ProductViewItemIssueFormProperties>({
			resolution: new FormControl<ProductViewItemIssueResolution | null | undefined>(undefined),
		});

	}


	/** Type of the item issue. */
	export interface ProductViewItemIssueItemIssueType {

		/** Canonical attribute name for attribute-specific issues. */
		canonicalAttribute?: string | null;

		/** Error code of the issue. */
		code?: string | null;
	}

	/** Type of the item issue. */
	export interface ProductViewItemIssueItemIssueTypeFormProperties {

		/** Canonical attribute name for attribute-specific issues. */
		canonicalAttribute: FormControl<string | null | undefined>,

		/** Error code of the issue. */
		code: FormControl<string | null | undefined>,
	}
	export function CreateProductViewItemIssueItemIssueTypeFormGroup() {
		return new FormGroup<ProductViewItemIssueItemIssueTypeFormProperties>({
			canonicalAttribute: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProductViewItemIssueResolution { UNKNOWN = 0, MERCHANT_ACTION = 1, PENDING_PROCESSING = 2 }


	/** Severity of an issue per destination in a region, and aggregated severity. */
	export interface ProductViewItemIssueItemIssueSeverity {

		/** Severity of an issue aggregated for destination. */
		aggregatedSeverity?: ProductViewItemIssueItemIssueSeverityAggregatedSeverity | null;

		/** Item issue severity for every destination. */
		severityPerDestination?: Array<ProductViewItemIssueIssueSeverityPerDestination>;
	}

	/** Severity of an issue per destination in a region, and aggregated severity. */
	export interface ProductViewItemIssueItemIssueSeverityFormProperties {

		/** Severity of an issue aggregated for destination. */
		aggregatedSeverity: FormControl<ProductViewItemIssueItemIssueSeverityAggregatedSeverity | null | undefined>,
	}
	export function CreateProductViewItemIssueItemIssueSeverityFormGroup() {
		return new FormGroup<ProductViewItemIssueItemIssueSeverityFormProperties>({
			aggregatedSeverity: new FormControl<ProductViewItemIssueItemIssueSeverityAggregatedSeverity | null | undefined>(undefined),
		});

	}

	export enum ProductViewItemIssueItemIssueSeverityAggregatedSeverity { AGGREGATED_ISSUE_SEVERITY_UNSPECIFIED = 0, DISAPPROVED = 1, DEMOTED = 2, PENDING = 3 }


	/** Issue severity for all affected regions in a destination. */
	export interface ProductViewItemIssueIssueSeverityPerDestination {

		/** List of demoted countries in the destination. */
		demotedCountries?: Array<string>;

		/** Issue destination. */
		destination?: string | null;

		/** List of disapproved countries in the destination. */
		disapprovedCountries?: Array<string>;
	}

	/** Issue severity for all affected regions in a destination. */
	export interface ProductViewItemIssueIssueSeverityPerDestinationFormProperties {

		/** Issue destination. */
		destination: FormControl<string | null | undefined>,
	}
	export function CreateProductViewItemIssueIssueSeverityPerDestinationFormGroup() {
		return new FormGroup<ProductViewItemIssueIssueSeverityPerDestinationFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined),
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

		/** The Content API Supplemental Feed ID. If present then product insertion or deletion applies to a supplemental feed instead of primary Content API feed. */
		feedId?: string | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/** The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" - "`update`" */
		method?: string | null;

		/** Required product attributes are primarily defined by the product data specification. See the Product Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect. */
		product?: Product;

		/** The ID of the product to get or mutate. Only defined if the method is `get`, `delete`, or `update`. */
		productId?: string | null;

		/** The comma-separated list of product attributes to be updated. Example: `"title,salePrice"`. Attributes specified in the update mask without a value specified in the body will be deleted from the product. *You must specify the update mask to delete attributes.* Only top-level product attributes can be updated. If not defined, product attributes with set values will be updated and other attributes will stay unchanged. Only defined if the method is `update`. */
		updateMask?: string | null;
	}

	/** A batch entry encoding a single non-batch products request. */
	export interface ProductsCustomBatchRequestEntryFormProperties {

		/** An entry ID, unique within the batch request. */
		batchId: FormControl<number | null | undefined>,

		/** The Content API Supplemental Feed ID. If present then product insertion or deletion applies to a supplemental feed instead of primary Content API feed. */
		feedId: FormControl<string | null | undefined>,

		/** The ID of the managing account. */
		merchantId: FormControl<string | null | undefined>,

		/** The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" - "`update`" */
		method: FormControl<string | null | undefined>,

		/** The ID of the product to get or mutate. Only defined if the method is `get`, `delete`, or `update`. */
		productId: FormControl<string | null | undefined>,

		/** The comma-separated list of product attributes to be updated. Example: `"title,salePrice"`. Attributes specified in the update mask without a value specified in the body will be deleted from the product. *You must specify the update mask to delete attributes.* Only top-level product attributes can be updated. If not defined, product attributes with set values will be updated and other attributes will stay unchanged. Only defined if the method is `update`. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateProductsCustomBatchRequestEntryFormGroup() {
		return new FormGroup<ProductsCustomBatchRequestEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			feedId: new FormControl<string | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductsCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<ProductsCustomBatchResponseEntry>;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#productsCustomBatchResponse`". */
		kind?: string | null;
	}
	export interface ProductsCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#productsCustomBatchResponse`". */
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

		/** Required product attributes are primarily defined by the product data specification. See the Product Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect. */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#productsListResponse`". */
		kind?: string | null;

		/** The token for the retrieval of the next page of products. */
		nextPageToken?: string | null;
		resources?: Array<Product>;
	}
	export interface ProductsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#productsListResponse`". */
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

		/** Deprecated: Setting this field has no effect and attributes are never included. */
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

		/** Deprecated: Setting this field has no effect and attributes are never included. */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesCustomBatchResponse`". */
		kind?: string | null;
	}
	export interface ProductstatusesCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesCustomBatchResponse`". */
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

		/** The status of a product, that is, information about a product computed asynchronously. */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesListResponse`". */
		kind?: string | null;

		/** The token for the retrieval of the next page of products statuses. */
		nextPageToken?: string | null;
		resources?: Array<ProductStatus>;
	}
	export interface ProductstatusesListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesListResponse`". */
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


	/** Settings for Pub/Sub notifications, all methods require that the caller is a direct user of the merchant center account. */
	export interface PubsubNotificationSettings {

		/** Cloud pub/sub topic to which notifications are sent (read-only). */
		cloudTopicName?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#pubsubNotificationSettings`" */
		kind?: string | null;

		/** List of event types. Acceptable values are: - "`orderPendingShipment`" */
		registeredEvents?: Array<string>;
	}

	/** Settings for Pub/Sub notifications, all methods require that the caller is a direct user of the merchant center account. */
	export interface PubsubNotificationSettingsFormProperties {

		/** Cloud pub/sub topic to which notifications are sent (read-only). */
		cloudTopicName: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#pubsubNotificationSettings`" */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePubsubNotificationSettingsFormGroup() {
		return new FormGroup<PubsubNotificationSettingsFormProperties>({
			cloudTopicName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
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

		/** A percentage of the price represented as a number in decimal notation (for example, `"5.4"`). Can only be set if all other fields are not set. */
		pricePercentage?: string | null;

		/** The name of a subtable. Can only be set in table cells (not for single values), and only if all other fields are not set. */
		subtableName?: string | null;
	}

	/** The single value of a rate group or the value of a rate group table's cell. Exactly one of `noShipping`, `flatRate`, `pricePercentage`, `carrierRateName`, `subtableName` must be set. */
	export interface ValueFormProperties {

		/** The name of a carrier rate referring to a carrier rate defined in the same rate group. Can only be set if all other fields are not set. */
		carrierRateName: FormControl<string | null | undefined>,

		/** If true, then the product can't ship. Must be true when set, can only be set if all other fields are not set. */
		noShipping: FormControl<boolean | null | undefined>,

		/** A percentage of the price represented as a number in decimal notation (for example, `"5.4"`). Can only be set if all other fields are not set. */
		pricePercentage: FormControl<string | null | undefined>,

		/** The name of a subtable. Can only be set in table cells (not for single values), and only if all other fields are not set. */
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


	/** Regional inventory resource. contains the regional name and all attributes which are overridden for the specified region. */
	export interface RegionalInventory {

		/** The availability of the product. */
		availability?: string | null;

		/** A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form. */
		customAttributes?: Array<CustomAttribute>;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#regionalInventory`". */
		kind?: string | null;
		price?: Price;

		/** The ID uniquely identifying each region. */
		regionId?: string | null;
		salePrice?: Price;

		/** A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as 'null' if undecided. */
		salePriceEffectiveDate?: string | null;
	}

	/** Regional inventory resource. contains the regional name and all attributes which are overridden for the specified region. */
	export interface RegionalInventoryFormProperties {

		/** The availability of the product. */
		availability: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#regionalInventory`". */
		kind: FormControl<string | null | undefined>,

		/** The ID uniquely identifying each region. */
		regionId: FormControl<string | null | undefined>,

		/** A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as 'null' if undecided. */
		salePriceEffectiveDate: FormControl<string | null | undefined>,
	}
	export function CreateRegionalInventoryFormGroup() {
		return new FormGroup<RegionalInventoryFormProperties>({
			availability: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			regionId: new FormControl<string | null | undefined>(undefined),
			salePriceEffectiveDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegionalinventoryCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<RegionalinventoryCustomBatchRequestEntry>;
	}
	export interface RegionalinventoryCustomBatchRequestFormProperties {
	}
	export function CreateRegionalinventoryCustomBatchRequestFormGroup() {
		return new FormGroup<RegionalinventoryCustomBatchRequestFormProperties>({
		});

	}


	/** A batch entry encoding a single non-batch regional inventory request. */
	export interface RegionalinventoryCustomBatchRequestEntry {

		/** An entry ID, unique within the batch request. */
		batchId?: number | null;

		/** The ID of the managing account. */
		merchantId?: string | null;

		/** Method of the batch request entry. Acceptable values are: - "`insert`" */
		method?: string | null;

		/** The ID of the product for which to update price and availability. */
		productId?: string | null;

		/** Regional inventory resource. contains the regional name and all attributes which are overridden for the specified region. */
		regionalInventory?: RegionalInventory;
	}

	/** A batch entry encoding a single non-batch regional inventory request. */
	export interface RegionalinventoryCustomBatchRequestEntryFormProperties {

		/** An entry ID, unique within the batch request. */
		batchId: FormControl<number | null | undefined>,

		/** The ID of the managing account. */
		merchantId: FormControl<string | null | undefined>,

		/** Method of the batch request entry. Acceptable values are: - "`insert`" */
		method: FormControl<string | null | undefined>,

		/** The ID of the product for which to update price and availability. */
		productId: FormControl<string | null | undefined>,
	}
	export function CreateRegionalinventoryCustomBatchRequestEntryFormGroup() {
		return new FormGroup<RegionalinventoryCustomBatchRequestEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegionalinventoryCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<RegionalinventoryCustomBatchResponseEntry>;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#regionalinventoryCustomBatchResponse`". */
		kind?: string | null;
	}
	export interface RegionalinventoryCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#regionalinventoryCustomBatchResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateRegionalinventoryCustomBatchResponseFormGroup() {
		return new FormGroup<RegionalinventoryCustomBatchResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A batch entry encoding a single non-batch regional inventory response. */
	export interface RegionalinventoryCustomBatchResponseEntry {

		/** The ID of the request entry this entry responds to. */
		batchId?: number | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#regionalinventoryCustomBatchResponseEntry`". */
		kind?: string | null;

		/** Regional inventory resource. contains the regional name and all attributes which are overridden for the specified region. */
		regionalInventory?: RegionalInventory;
	}

	/** A batch entry encoding a single non-batch regional inventory response. */
	export interface RegionalinventoryCustomBatchResponseEntryFormProperties {

		/** The ID of the request entry this entry responds to. */
		batchId: FormControl<number | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#regionalinventoryCustomBatchResponseEntry`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateRegionalinventoryCustomBatchResponseEntryFormGroup() {
		return new FormGroup<RegionalinventoryCustomBatchResponseEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The payload for configuring how the content should be rendered. */
	export interface RenderAccountIssuesRequestPayload {

		/** Optional. How the detailed content should be returned. Default option is to return the content as a pre-rendered HTML text. */
		contentOption?: RenderAccountIssuesRequestPayloadContentOption | null;
	}

	/** The payload for configuring how the content should be rendered. */
	export interface RenderAccountIssuesRequestPayloadFormProperties {

		/** Optional. How the detailed content should be returned. Default option is to return the content as a pre-rendered HTML text. */
		contentOption: FormControl<RenderAccountIssuesRequestPayloadContentOption | null | undefined>,
	}
	export function CreateRenderAccountIssuesRequestPayloadFormGroup() {
		return new FormGroup<RenderAccountIssuesRequestPayloadFormProperties>({
			contentOption: new FormControl<RenderAccountIssuesRequestPayloadContentOption | null | undefined>(undefined),
		});

	}

	export enum RenderAccountIssuesRequestPayloadContentOption { CONTENT_OPTION_UNSPECIFIED = 0, PRE_RENDERED_HTML = 1 }


	/** Response containing support content and actions for listed account issues. */
	export interface RenderAccountIssuesResponse {

		/** The Alternate Dispute Resolution (ADR) that may be available to merchants in some regions. If present, the link should be shown on the same page as the list of issues. */
		alternateDisputeResolution?: AlternateDisputeResolution;

		/** List of account issues for a given account. This list can be shown with compressed, expandable items. In the compressed form, the title and impact should be shown for each issue. Once the issue is expanded, the detailed content and available actions should be rendered. */
		issues?: Array<AccountIssue>;
	}

	/** Response containing support content and actions for listed account issues. */
	export interface RenderAccountIssuesResponseFormProperties {
	}
	export function CreateRenderAccountIssuesResponseFormGroup() {
		return new FormGroup<RenderAccountIssuesResponseFormProperties>({
		});

	}


	/** The payload for configuring how the content should be rendered. */
	export interface RenderProductIssuesRequestPayload {

		/** Optional. How the detailed content should be returned. Default option is to return the content as a pre-rendered HTML text. */
		contentOption?: RenderAccountIssuesRequestPayloadContentOption | null;
	}

	/** The payload for configuring how the content should be rendered. */
	export interface RenderProductIssuesRequestPayloadFormProperties {

		/** Optional. How the detailed content should be returned. Default option is to return the content as a pre-rendered HTML text. */
		contentOption: FormControl<RenderAccountIssuesRequestPayloadContentOption | null | undefined>,
	}
	export function CreateRenderProductIssuesRequestPayloadFormGroup() {
		return new FormGroup<RenderProductIssuesRequestPayloadFormProperties>({
			contentOption: new FormControl<RenderAccountIssuesRequestPayloadContentOption | null | undefined>(undefined),
		});

	}


	/** Response containing support content and actions for listed product issues. */
	export interface RenderProductIssuesResponse {

		/** The Alternate Dispute Resolution (ADR) that may be available to merchants in some regions. If present, the link should be shown on the same page as the list of issues. */
		alternateDisputeResolution?: AlternateDisputeResolution;

		/** List of issues for a given product. This list can be shown with compressed, expandable items. In the compressed form, the title and impact should be shown for each issue. Once the issue is expanded, the detailed content and available actions should be rendered. */
		issues?: Array<ProductIssue>;
	}

	/** Response containing support content and actions for listed product issues. */
	export interface RenderProductIssuesResponseFormProperties {
	}
	export function CreateRenderProductIssuesResponseFormGroup() {
		return new FormGroup<RenderProductIssuesResponseFormProperties>({
		});

	}


	/** Request to report interactions on a recommendation. */
	export interface ReportInteractionRequest {

		/** Required. Type of the interaction that is reported, for example INTERACTION_CLICK. */
		interactionType?: ReportInteractionRequestInteractionType | null;

		/** Required. Token of the response when recommendation was returned. */
		responseToken?: string | null;

		/** Optional. Subtype of the recommendations this interaction happened on. This field must be set only to the value that is returned by {@link `RecommendationsService.GenerateRecommendations`} call. */
		subtype?: string | null;

		/** Required. Type of the recommendations on which this interaction happened. This field must be set only to the value that is returned by {@link `GenerateRecommendationsResponse`} call. */
		type?: string | null;
	}

	/** Request to report interactions on a recommendation. */
	export interface ReportInteractionRequestFormProperties {

		/** Required. Type of the interaction that is reported, for example INTERACTION_CLICK. */
		interactionType: FormControl<ReportInteractionRequestInteractionType | null | undefined>,

		/** Required. Token of the response when recommendation was returned. */
		responseToken: FormControl<string | null | undefined>,

		/** Optional. Subtype of the recommendations this interaction happened on. This field must be set only to the value that is returned by {@link `RecommendationsService.GenerateRecommendations`} call. */
		subtype: FormControl<string | null | undefined>,

		/** Required. Type of the recommendations on which this interaction happened. This field must be set only to the value that is returned by {@link `GenerateRecommendationsResponse`} call. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateReportInteractionRequestFormGroup() {
		return new FormGroup<ReportInteractionRequestFormProperties>({
			interactionType: new FormControl<ReportInteractionRequestInteractionType | null | undefined>(undefined),
			responseToken: new FormControl<string | null | undefined>(undefined),
			subtype: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReportInteractionRequestInteractionType { INTERACTION_TYPE_UNSPECIFIED = 0, INTERACTION_DISMISS = 1, INTERACTION_CLICK = 2 }


	/** Result row returned from the search query. */
	export interface ReportRow {

		/** Fields related to the [Best sellers reports](https://support.google.com/merchants/answer/9488679). */
		bestSellers?: BestSellers;

		/** Brand fields. Values are only set for fields requested explicitly in the request's search query. */
		brand?: Brand;

		/** Fields related to [competitive visibility reports] (https://support.google.com/merchants/answer/11366442). */
		competitiveVisibility?: CompetitiveVisibility;

		/** Performance metrics. Values are only set for metrics requested explicitly in the request's search query. */
		metrics?: Metrics;

		/** Price competitiveness fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceCompetitivenessProductView`. https://support.google.com/merchants/answer/9626903 */
		priceCompetitiveness?: PriceCompetitiveness;

		/** Price insights fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceInsightsProductView`. https://support.google.com/merchants/answer/11916926 */
		priceInsights?: PriceInsights;

		/** Product cluster fields. A product cluster is a grouping for different offers that represent the same product. Values are only set for fields requested explicitly in the request's search query. */
		productCluster?: ProductCluster;

		/** Product fields. Values are only set for fields requested explicitly in the request's search query. */
		productView?: ProductView;

		/** Dimensions according to which metrics are segmented in the response. Values of product dimensions, such as `offer_id`, reflect the state of a product at the time of the corresponding event, for example, impression or order. Segment fields cannot be selected in queries without also selecting at least one metric field. Values are only set for dimensions requested explicitly in the request's search query. */
		segments?: Segments;
	}

	/** Result row returned from the search query. */
	export interface ReportRowFormProperties {
	}
	export function CreateReportRowFormGroup() {
		return new FormGroup<ReportRowFormProperties>({
		});

	}


	/** Dimensions according to which metrics are segmented in the response. Values of product dimensions, such as `offer_id`, reflect the state of a product at the time of the corresponding event, for example, impression or order. Segment fields cannot be selected in queries without also selecting at least one metric field. Values are only set for dimensions requested explicitly in the request's search query. */
	export interface Segments {

		/** Brand of the product. */
		brand?: string | null;

		/** [Product category (1st level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. */
		categoryL1?: string | null;

		/** [Product category (2nd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. */
		categoryL2?: string | null;

		/** [Product category (3rd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. */
		categoryL3?: string | null;

		/** [Product category (4th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. */
		categoryL4?: string | null;

		/** [Product category (5th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. */
		categoryL5?: string | null;

		/** Currency in which price metrics are represented, for example, if you select `ordered_item_sales_micros`, the returned value will be represented by this currency. */
		currencyCode?: string | null;

		/** Custom label 0 for custom grouping of products. */
		customLabel0?: string | null;

		/** Custom label 1 for custom grouping of products. */
		customLabel1?: string | null;

		/** Custom label 2 for custom grouping of products. */
		customLabel2?: string | null;

		/** Custom label 3 for custom grouping of products. */
		customLabel3?: string | null;

		/** Custom label 4 for custom grouping of products. */
		customLabel4?: string | null;

		/** Code of the country where the customer is located at the time of the event. Represented in the ISO 3166 format. If the customer country cannot be determined, a special 'ZZ' code is returned. */
		customerCountryCode?: string | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		date?: Date;

		/** Merchant-provided id of the product. */
		offerId?: string | null;

		/** [Product type (1st level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. */
		productTypeL1?: string | null;

		/** [Product type (2nd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. */
		productTypeL2?: string | null;

		/** [Product type (3rd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. */
		productTypeL3?: string | null;

		/** [Product type (4th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. */
		productTypeL4?: string | null;

		/** [Product type (5th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. */
		productTypeL5?: string | null;

		/** Program to which metrics apply, for example, Free Product Listing. */
		program?: SegmentsProgram | null;

		/** Title of the product. */
		title?: string | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		week?: Date;
	}

	/** Dimensions according to which metrics are segmented in the response. Values of product dimensions, such as `offer_id`, reflect the state of a product at the time of the corresponding event, for example, impression or order. Segment fields cannot be selected in queries without also selecting at least one metric field. Values are only set for dimensions requested explicitly in the request's search query. */
	export interface SegmentsFormProperties {

		/** Brand of the product. */
		brand: FormControl<string | null | undefined>,

		/** [Product category (1st level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. */
		categoryL1: FormControl<string | null | undefined>,

		/** [Product category (2nd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. */
		categoryL2: FormControl<string | null | undefined>,

		/** [Product category (3rd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. */
		categoryL3: FormControl<string | null | undefined>,

		/** [Product category (4th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. */
		categoryL4: FormControl<string | null | undefined>,

		/** [Product category (5th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. */
		categoryL5: FormControl<string | null | undefined>,

		/** Currency in which price metrics are represented, for example, if you select `ordered_item_sales_micros`, the returned value will be represented by this currency. */
		currencyCode: FormControl<string | null | undefined>,

		/** Custom label 0 for custom grouping of products. */
		customLabel0: FormControl<string | null | undefined>,

		/** Custom label 1 for custom grouping of products. */
		customLabel1: FormControl<string | null | undefined>,

		/** Custom label 2 for custom grouping of products. */
		customLabel2: FormControl<string | null | undefined>,

		/** Custom label 3 for custom grouping of products. */
		customLabel3: FormControl<string | null | undefined>,

		/** Custom label 4 for custom grouping of products. */
		customLabel4: FormControl<string | null | undefined>,

		/** Code of the country where the customer is located at the time of the event. Represented in the ISO 3166 format. If the customer country cannot be determined, a special 'ZZ' code is returned. */
		customerCountryCode: FormControl<string | null | undefined>,

		/** Merchant-provided id of the product. */
		offerId: FormControl<string | null | undefined>,

		/** [Product type (1st level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. */
		productTypeL1: FormControl<string | null | undefined>,

		/** [Product type (2nd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. */
		productTypeL2: FormControl<string | null | undefined>,

		/** [Product type (3rd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. */
		productTypeL3: FormControl<string | null | undefined>,

		/** [Product type (4th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. */
		productTypeL4: FormControl<string | null | undefined>,

		/** [Product type (5th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. */
		productTypeL5: FormControl<string | null | undefined>,

		/** Program to which metrics apply, for example, Free Product Listing. */
		program: FormControl<SegmentsProgram | null | undefined>,

		/** Title of the product. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateSegmentsFormGroup() {
		return new FormGroup<SegmentsFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined),
			categoryL1: new FormControl<string | null | undefined>(undefined),
			categoryL2: new FormControl<string | null | undefined>(undefined),
			categoryL3: new FormControl<string | null | undefined>(undefined),
			categoryL4: new FormControl<string | null | undefined>(undefined),
			categoryL5: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			customLabel0: new FormControl<string | null | undefined>(undefined),
			customLabel1: new FormControl<string | null | undefined>(undefined),
			customLabel2: new FormControl<string | null | undefined>(undefined),
			customLabel3: new FormControl<string | null | undefined>(undefined),
			customLabel4: new FormControl<string | null | undefined>(undefined),
			customerCountryCode: new FormControl<string | null | undefined>(undefined),
			offerId: new FormControl<string | null | undefined>(undefined),
			productTypeL1: new FormControl<string | null | undefined>(undefined),
			productTypeL2: new FormControl<string | null | undefined>(undefined),
			productTypeL3: new FormControl<string | null | undefined>(undefined),
			productTypeL4: new FormControl<string | null | undefined>(undefined),
			productTypeL5: new FormControl<string | null | undefined>(undefined),
			program: new FormControl<SegmentsProgram | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SegmentsProgram { PROGRAM_UNSPECIFIED = 0, SHOPPING_ADS = 1, FREE_PRODUCT_LISTING = 2, FREE_LOCAL_PRODUCT_LISTING = 3, BUY_ON_GOOGLE_LISTING = 4 }


	/** Request message for the RequestPhoneVerification method. */
	export interface RequestPhoneVerificationRequest {

		/** Language code [IETF BCP 47 syntax](https://tools.ietf.org/html/bcp47) (for example, en-US). Language code is used to provide localized `SMS` and `PHONE_CALL`. Default language used is en-US if not provided. */
		languageCode?: string | null;

		/** Phone number to be verified. */
		phoneNumber?: string | null;

		/** Required. Two letter country code for the phone number, for example `CA` for Canadian numbers. See the [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) officially assigned codes. */
		phoneRegionCode?: string | null;

		/** Verification method to receive verification code. */
		phoneVerificationMethod?: RequestPhoneVerificationRequestPhoneVerificationMethod | null;
	}

	/** Request message for the RequestPhoneVerification method. */
	export interface RequestPhoneVerificationRequestFormProperties {

		/** Language code [IETF BCP 47 syntax](https://tools.ietf.org/html/bcp47) (for example, en-US). Language code is used to provide localized `SMS` and `PHONE_CALL`. Default language used is en-US if not provided. */
		languageCode: FormControl<string | null | undefined>,

		/** Phone number to be verified. */
		phoneNumber: FormControl<string | null | undefined>,

		/** Required. Two letter country code for the phone number, for example `CA` for Canadian numbers. See the [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) officially assigned codes. */
		phoneRegionCode: FormControl<string | null | undefined>,

		/** Verification method to receive verification code. */
		phoneVerificationMethod: FormControl<RequestPhoneVerificationRequestPhoneVerificationMethod | null | undefined>,
	}
	export function CreateRequestPhoneVerificationRequestFormGroup() {
		return new FormGroup<RequestPhoneVerificationRequestFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			phoneRegionCode: new FormControl<string | null | undefined>(undefined),
			phoneVerificationMethod: new FormControl<RequestPhoneVerificationRequestPhoneVerificationMethod | null | undefined>(undefined),
		});

	}

	export enum RequestPhoneVerificationRequestPhoneVerificationMethod { PHONE_VERIFICATION_METHOD_UNSPECIFIED = 0, SMS = 1, PHONE_CALL = 2 }


	/** Response message for the RequestPhoneVerification method. */
	export interface RequestPhoneVerificationResponse {

		/** The verification ID to use in subsequent calls to `verifyphonenumber`. */
		verificationId?: string | null;
	}

	/** Response message for the RequestPhoneVerification method. */
	export interface RequestPhoneVerificationResponseFormProperties {

		/** The verification ID to use in subsequent calls to `verifyphonenumber`. */
		verificationId: FormControl<string | null | undefined>,
	}
	export function CreateRequestPhoneVerificationResponseFormGroup() {
		return new FormGroup<RequestPhoneVerificationResponseFormProperties>({
			verificationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the RequestReviewProgram method. */
	export interface RequestReviewBuyOnGoogleProgramRequest {
	}

	/** Request message for the RequestReviewProgram method. */
	export interface RequestReviewBuyOnGoogleProgramRequestFormProperties {
	}
	export function CreateRequestReviewBuyOnGoogleProgramRequestFormGroup() {
		return new FormGroup<RequestReviewBuyOnGoogleProgramRequestFormProperties>({
		});

	}


	/** Request message for the RequestReviewFreeListings Program method. */
	export interface RequestReviewFreeListingsRequest {

		/** The code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the country for which review is to be requested. */
		regionCode?: string | null;
	}

	/** Request message for the RequestReviewFreeListings Program method. */
	export interface RequestReviewFreeListingsRequestFormProperties {

		/** The code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the country for which review is to be requested. */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateRequestReviewFreeListingsRequestFormGroup() {
		return new FormGroup<RequestReviewFreeListingsRequestFormProperties>({
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the RequestReviewShoppingAds program method. */
	export interface RequestReviewShoppingAdsRequest {

		/** The code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the country for which review is to be requested. */
		regionCode?: string | null;
	}

	/** Request message for the RequestReviewShoppingAds program method. */
	export interface RequestReviewShoppingAdsRequestFormProperties {

		/** The code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the country for which review is to be requested. */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateRequestReviewShoppingAdsRequestFormGroup() {
		return new FormGroup<RequestReviewShoppingAdsRequestFormProperties>({
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Return address resource. */
	export interface ReturnAddress {
		address?: ReturnAddressAddress;

		/** Required. The country of sale where the return address is applicable. */
		country?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#returnAddress`" */
		kind?: string | null;

		/** Required. The user-defined label of the return address. For the default address, use the label "default". */
		label?: string | null;

		/** Required. The merchant's contact phone number regarding the return. */
		phoneNumber?: string | null;

		/** Return address ID generated by Google. */
		returnAddressId?: string | null;
	}

	/** Return address resource. */
	export interface ReturnAddressFormProperties {

		/** Required. The country of sale where the return address is applicable. */
		country: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#returnAddress`" */
		kind: FormControl<string | null | undefined>,

		/** Required. The user-defined label of the return address. For the default address, use the label "default". */
		label: FormControl<string | null | undefined>,

		/** Required. The merchant's contact phone number regarding the return. */
		phoneNumber: FormControl<string | null | undefined>,

		/** Return address ID generated by Google. */
		returnAddressId: FormControl<string | null | undefined>,
	}
	export function CreateReturnAddressFormGroup() {
		return new FormGroup<ReturnAddressFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			returnAddressId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReturnAddressAddress {

		/** CLDR country code (for example, "US"). */
		country?: string | null;

		/** City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs). */
		locality?: string | null;

		/** Postal code or ZIP (for example, "94043"). */
		postalCode?: string | null;

		/** Name of the recipient to address returns to. */
		recipientName?: string | null;

		/** Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC"). */
		region?: string | null;

		/** Street-level part of the address. May be up to two lines, each line specified as an array element. */
		streetAddress?: Array<string>;
	}
	export interface ReturnAddressAddressFormProperties {

		/** CLDR country code (for example, "US"). */
		country: FormControl<string | null | undefined>,

		/** City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs). */
		locality: FormControl<string | null | undefined>,

		/** Postal code or ZIP (for example, "94043"). */
		postalCode: FormControl<string | null | undefined>,

		/** Name of the recipient to address returns to. */
		recipientName: FormControl<string | null | undefined>,

		/** Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC"). */
		region: FormControl<string | null | undefined>,
	}
	export function CreateReturnAddressAddressFormGroup() {
		return new FormGroup<ReturnAddressAddressFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			recipientName: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Return policy resource. */
	export interface ReturnPolicy {

		/** Required. The country of sale where the return policy is applicable. */
		country?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#returnPolicy`" */
		kind?: string | null;

		/** Required. The user-defined label of the return policy. For the default policy, use the label "default". */
		label?: string | null;

		/** Required. The name of the policy as shown in Merchant Center. */
		name?: string | null;

		/** Return reasons that will incur return fees. */
		nonFreeReturnReasons?: Array<string>;
		policy?: ReturnPolicyPolicy;

		/** Return policy ID generated by Google. */
		returnPolicyId?: string | null;
		returnShippingFee?: Price;

		/** An optional list of seasonal overrides. */
		seasonalOverrides?: Array<ReturnPolicySeasonalOverride>;
	}

	/** Return policy resource. */
	export interface ReturnPolicyFormProperties {

		/** Required. The country of sale where the return policy is applicable. */
		country: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#returnPolicy`" */
		kind: FormControl<string | null | undefined>,

		/** Required. The user-defined label of the return policy. For the default policy, use the label "default". */
		label: FormControl<string | null | undefined>,

		/** Required. The name of the policy as shown in Merchant Center. */
		name: FormControl<string | null | undefined>,

		/** Return policy ID generated by Google. */
		returnPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateReturnPolicyFormGroup() {
		return new FormGroup<ReturnPolicyFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			returnPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReturnPolicyPolicy {

		/** Required. Last day for returning the items. In ISO 8601 format. When specifying the return window like this, set the policy type to "lastReturnDate". Use this for seasonal overrides only. */
		lastReturnDate?: string | null;

		/** The number of days items can be returned after delivery, where one day is defined to be 24 hours after the delivery timestamp. When specifying the return window like this, set the policy type to "numberOfDaysAfterDelivery". Acceptable values are 30, 45, 60, 90, 100, 180, 270 and 365 for the default policy. Additional policies further allow 14, 15, 21 and 28 days, but note that for most items a minimum of 30 days is required for returns. Exceptions may be made for electronics. A policy of less than 30 days can only be applied to those items. */
		numberOfDays?: string | null;

		/** Policy type. Use "lastReturnDate" for seasonal overrides only. Note that for most items a minimum of 30 days is required for returns. Exceptions may be made for electronics or non-returnable items such as food, perishables, and living things. A policy of less than 30 days can only be applied to those items. Acceptable values are: - "`lastReturnDate`" - "`lifetimeReturns`" - "`noReturns`" - "`numberOfDaysAfterDelivery`" */
		type?: string | null;
	}
	export interface ReturnPolicyPolicyFormProperties {

		/** Required. Last day for returning the items. In ISO 8601 format. When specifying the return window like this, set the policy type to "lastReturnDate". Use this for seasonal overrides only. */
		lastReturnDate: FormControl<string | null | undefined>,

		/** The number of days items can be returned after delivery, where one day is defined to be 24 hours after the delivery timestamp. When specifying the return window like this, set the policy type to "numberOfDaysAfterDelivery". Acceptable values are 30, 45, 60, 90, 100, 180, 270 and 365 for the default policy. Additional policies further allow 14, 15, 21 and 28 days, but note that for most items a minimum of 30 days is required for returns. Exceptions may be made for electronics. A policy of less than 30 days can only be applied to those items. */
		numberOfDays: FormControl<string | null | undefined>,

		/** Policy type. Use "lastReturnDate" for seasonal overrides only. Note that for most items a minimum of 30 days is required for returns. Exceptions may be made for electronics or non-returnable items such as food, perishables, and living things. A policy of less than 30 days can only be applied to those items. Acceptable values are: - "`lastReturnDate`" - "`lifetimeReturns`" - "`noReturns`" - "`numberOfDaysAfterDelivery`" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateReturnPolicyPolicyFormGroup() {
		return new FormGroup<ReturnPolicyPolicyFormProperties>({
			lastReturnDate: new FormControl<string | null | undefined>(undefined),
			numberOfDays: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReturnPolicySeasonalOverride {

		/** Required. Last day on which the override applies. In ISO 8601 format. */
		endDate?: string | null;

		/** Required. The name of the seasonal override as shown in Merchant Center. */
		name?: string | null;
		policy?: ReturnPolicyPolicy;

		/** Required. First day on which the override applies. In ISO 8601 format. */
		startDate?: string | null;
	}
	export interface ReturnPolicySeasonalOverrideFormProperties {

		/** Required. Last day on which the override applies. In ISO 8601 format. */
		endDate: FormControl<string | null | undefined>,

		/** Required. The name of the seasonal override as shown in Merchant Center. */
		name: FormControl<string | null | undefined>,

		/** Required. First day on which the override applies. In ISO 8601 format. */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateReturnPolicySeasonalOverrideFormGroup() {
		return new FormGroup<ReturnPolicySeasonalOverrideFormProperties>({
			endDate: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Return shipping label for a Buy on Google merchant-managed return. */
	export interface ReturnShippingLabel {

		/** Name of the carrier. */
		carrier?: string | null;

		/** The URL for the return shipping label in PDF format */
		labelUri?: string | null;

		/** The tracking id of this return label. */
		trackingId?: string | null;
	}

	/** Return shipping label for a Buy on Google merchant-managed return. */
	export interface ReturnShippingLabelFormProperties {

		/** Name of the carrier. */
		carrier: FormControl<string | null | undefined>,

		/** The URL for the return shipping label in PDF format */
		labelUri: FormControl<string | null | undefined>,

		/** The tracking id of this return label. */
		trackingId: FormControl<string | null | undefined>,
	}
	export function CreateReturnShippingLabelFormGroup() {
		return new FormGroup<ReturnShippingLabelFormProperties>({
			carrier: new FormControl<string | null | undefined>(undefined),
			labelUri: new FormControl<string | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReturnaddressCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<ReturnaddressCustomBatchRequestEntry>;
	}
	export interface ReturnaddressCustomBatchRequestFormProperties {
	}
	export function CreateReturnaddressCustomBatchRequestFormGroup() {
		return new FormGroup<ReturnaddressCustomBatchRequestFormProperties>({
		});

	}

	export interface ReturnaddressCustomBatchRequestEntry {

		/** An entry ID, unique within the batch request. */
		batchId?: number | null;

		/** The Merchant Center account ID. */
		merchantId?: string | null;

		/** Method of the batch request entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" */
		method?: string | null;

		/** Return address resource. */
		returnAddress?: ReturnAddress;

		/** The return address ID. This should be set only if the method is `delete` or `get`. */
		returnAddressId?: string | null;
	}
	export interface ReturnaddressCustomBatchRequestEntryFormProperties {

		/** An entry ID, unique within the batch request. */
		batchId: FormControl<number | null | undefined>,

		/** The Merchant Center account ID. */
		merchantId: FormControl<string | null | undefined>,

		/** Method of the batch request entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" */
		method: FormControl<string | null | undefined>,

		/** The return address ID. This should be set only if the method is `delete` or `get`. */
		returnAddressId: FormControl<string | null | undefined>,
	}
	export function CreateReturnaddressCustomBatchRequestEntryFormGroup() {
		return new FormGroup<ReturnaddressCustomBatchRequestEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			returnAddressId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReturnaddressCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<ReturnaddressCustomBatchResponseEntry>;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#returnaddressCustomBatchResponse`". */
		kind?: string | null;
	}
	export interface ReturnaddressCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#returnaddressCustomBatchResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateReturnaddressCustomBatchResponseFormGroup() {
		return new FormGroup<ReturnaddressCustomBatchResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReturnaddressCustomBatchResponseEntry {

		/** The ID of the request entry to which this entry responds. */
		batchId?: number | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#returnaddressCustomBatchResponseEntry`" */
		kind?: string | null;

		/** Return address resource. */
		returnAddress?: ReturnAddress;
	}
	export interface ReturnaddressCustomBatchResponseEntryFormProperties {

		/** The ID of the request entry to which this entry responds. */
		batchId: FormControl<number | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#returnaddressCustomBatchResponseEntry`" */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateReturnaddressCustomBatchResponseEntryFormGroup() {
		return new FormGroup<ReturnaddressCustomBatchResponseEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReturnaddressListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#returnaddressListResponse`". */
		kind?: string | null;

		/** The token for the retrieval of the next page of addresses. */
		nextPageToken?: string | null;
		resources?: Array<ReturnAddress>;
	}
	export interface ReturnaddressListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#returnaddressListResponse`". */
		kind: FormControl<string | null | undefined>,

		/** The token for the retrieval of the next page of addresses. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateReturnaddressListResponseFormGroup() {
		return new FormGroup<ReturnaddressListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReturnpolicyCustomBatchRequest {

		/** The request entries to be processed in the batch. */
		entries?: Array<ReturnpolicyCustomBatchRequestEntry>;
	}
	export interface ReturnpolicyCustomBatchRequestFormProperties {
	}
	export function CreateReturnpolicyCustomBatchRequestFormGroup() {
		return new FormGroup<ReturnpolicyCustomBatchRequestFormProperties>({
		});

	}

	export interface ReturnpolicyCustomBatchRequestEntry {

		/** An entry ID, unique within the batch request. */
		batchId?: number | null;

		/** The Merchant Center account ID. */
		merchantId?: string | null;

		/** Method of the batch request entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" */
		method?: string | null;

		/** Return policy resource. */
		returnPolicy?: ReturnPolicy;

		/** The return policy ID. This should be set only if the method is `delete` or `get`. */
		returnPolicyId?: string | null;
	}
	export interface ReturnpolicyCustomBatchRequestEntryFormProperties {

		/** An entry ID, unique within the batch request. */
		batchId: FormControl<number | null | undefined>,

		/** The Merchant Center account ID. */
		merchantId: FormControl<string | null | undefined>,

		/** Method of the batch request entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" */
		method: FormControl<string | null | undefined>,

		/** The return policy ID. This should be set only if the method is `delete` or `get`. */
		returnPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateReturnpolicyCustomBatchRequestEntryFormGroup() {
		return new FormGroup<ReturnpolicyCustomBatchRequestEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			merchantId: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			returnPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReturnpolicyCustomBatchResponse {

		/** The result of the execution of the batch requests. */
		entries?: Array<ReturnpolicyCustomBatchResponseEntry>;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#returnpolicyCustomBatchResponse`". */
		kind?: string | null;
	}
	export interface ReturnpolicyCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#returnpolicyCustomBatchResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateReturnpolicyCustomBatchResponseFormGroup() {
		return new FormGroup<ReturnpolicyCustomBatchResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReturnpolicyCustomBatchResponseEntry {

		/** The ID of the request entry to which this entry responds. */
		batchId?: number | null;

		/** A list of errors returned by a failed batch entry. */
		errors?: Errors;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#returnpolicyCustomBatchResponseEntry`" */
		kind?: string | null;

		/** Return policy resource. */
		returnPolicy?: ReturnPolicy;
	}
	export interface ReturnpolicyCustomBatchResponseEntryFormProperties {

		/** The ID of the request entry to which this entry responds. */
		batchId: FormControl<number | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#returnpolicyCustomBatchResponseEntry`" */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateReturnpolicyCustomBatchResponseEntryFormGroup() {
		return new FormGroup<ReturnpolicyCustomBatchResponseEntryFormProperties>({
			batchId: new FormControl<number | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReturnpolicyListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#returnpolicyListResponse`". */
		kind?: string | null;
		resources?: Array<ReturnPolicy>;
	}
	export interface ReturnpolicyListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#returnpolicyListResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateReturnpolicyListResponseFormGroup() {
		return new FormGroup<ReturnpolicyListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the ReportService.Search method. */
	export interface SearchRequest {

		/** Number of ReportRows to retrieve in a single page. Defaults to the maximum of 1000. Values above 1000 are coerced to 1000. */
		pageSize?: number | null;

		/** Token of the page to retrieve. If not specified, the first page of results is returned. In order to request the next page of results, the value obtained from `next_page_token` in the previous response should be used. */
		pageToken?: string | null;

		/** Required. Query that defines performance metrics to retrieve and dimensions according to which the metrics are to be segmented. For details on how to construct your query, see the [Query Language guide](https://developers.google.com/shopping-content/guides/reports/query-language/overview). */
		query?: string | null;
	}

	/** Request message for the ReportService.Search method. */
	export interface SearchRequestFormProperties {

		/** Number of ReportRows to retrieve in a single page. Defaults to the maximum of 1000. Values above 1000 are coerced to 1000. */
		pageSize: FormControl<number | null | undefined>,

		/** Token of the page to retrieve. If not specified, the first page of results is returned. In order to request the next page of results, the value obtained from `next_page_token` in the previous response should be used. */
		pageToken: FormControl<string | null | undefined>,

		/** Required. Query that defines performance metrics to retrieve and dimensions according to which the metrics are to be segmented. For details on how to construct your query, see the [Query Language guide](https://developers.google.com/shopping-content/guides/reports/query-language/overview). */
		query: FormControl<string | null | undefined>,
	}
	export function CreateSearchRequestFormGroup() {
		return new FormGroup<SearchRequestFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the ReportService.Search method. */
	export interface SearchResponse {

		/** Token which can be sent as `page_token` to retrieve the next page. If omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Rows that matched the search query. */
		results?: Array<ReportRow>;
	}

	/** Response message for the ReportService.Search method. */
	export interface SearchResponseFormProperties {

		/** Token which can be sent as `page_token` to retrieve the next page. If omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchResponseFormGroup() {
		return new FormGroup<SearchResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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

		/** Type of locations this service ships orders to. Acceptable values are: - "`delivery`" - "`pickup` (deprecated)" - "`local_delivery`" - "`collection_point`" */
		shipmentType?: string | null;

		/** Stores that provide local delivery. Only valid with local delivery fulfillment. */
		storeConfig?: ServiceStoreConfig;
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

		/** Type of locations this service ships orders to. Acceptable values are: - "`delivery`" - "`pickup` (deprecated)" - "`local_delivery`" - "`collection_point`" */
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


	/** Stores that provide local delivery. Only valid with local delivery fulfillment. */
	export interface ServiceStoreConfig {

		/** Time local delivery ends for the day based on the local timezone of the store. `local_cutoff_time` and `store_close_offset_hours` are mutually exclusive. */
		cutoffConfig?: ServiceStoreConfigCutoffConfig;

		/** Distance represented by an integer and unit. */
		serviceRadius?: Distance;

		/** A list of store codes that provide local delivery. If empty, then `store_service_type` must be `all_stores`, or an error is thrown. If not empty, then `store_service_type` must be `selected_stores`, or an error is thrown. */
		storeCodes?: Array<string>;

		/** Indicates whether all stores listed by this merchant provide local delivery or not. Acceptable values are `all stores` and `selected stores` */
		storeServiceType?: string | null;
	}

	/** Stores that provide local delivery. Only valid with local delivery fulfillment. */
	export interface ServiceStoreConfigFormProperties {

		/** Indicates whether all stores listed by this merchant provide local delivery or not. Acceptable values are `all stores` and `selected stores` */
		storeServiceType: FormControl<string | null | undefined>,
	}
	export function CreateServiceStoreConfigFormGroup() {
		return new FormGroup<ServiceStoreConfigFormProperties>({
			storeServiceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Time local delivery ends for the day based on the local timezone of the store. `local_cutoff_time` and `store_close_offset_hours` are mutually exclusive. */
	export interface ServiceStoreConfigCutoffConfig {

		/** Time in hours and minutes in the local timezone when local delivery ends. */
		localCutoffTime?: ServiceStoreConfigCutoffConfigLocalCutoffTime;

		/** Merchants can opt-out of showing n+1 day local delivery when they have a shipping service configured to n day local delivery. For example, if the shipping service defines same-day delivery, and it's past the cut-off, setting this field to `true` results in the calculated shipping service rate returning `NO_DELIVERY_POST_CUTOFF`. In the same example, setting this field to `false` results in the calculated shipping time being one day. This is only for local delivery. */
		noDeliveryPostCutoff?: boolean | null;

		/** Represents cutoff time as the number of hours before store closing. Mutually exclusive with other fields (hour and minute). */
		storeCloseOffsetHours?: string | null;
	}

	/** Time local delivery ends for the day based on the local timezone of the store. `local_cutoff_time` and `store_close_offset_hours` are mutually exclusive. */
	export interface ServiceStoreConfigCutoffConfigFormProperties {

		/** Merchants can opt-out of showing n+1 day local delivery when they have a shipping service configured to n day local delivery. For example, if the shipping service defines same-day delivery, and it's past the cut-off, setting this field to `true` results in the calculated shipping service rate returning `NO_DELIVERY_POST_CUTOFF`. In the same example, setting this field to `false` results in the calculated shipping time being one day. This is only for local delivery. */
		noDeliveryPostCutoff: FormControl<boolean | null | undefined>,

		/** Represents cutoff time as the number of hours before store closing. Mutually exclusive with other fields (hour and minute). */
		storeCloseOffsetHours: FormControl<string | null | undefined>,
	}
	export function CreateServiceStoreConfigCutoffConfigFormGroup() {
		return new FormGroup<ServiceStoreConfigCutoffConfigFormProperties>({
			noDeliveryPostCutoff: new FormControl<boolean | null | undefined>(undefined),
			storeCloseOffsetHours: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Time in hours and minutes in the local timezone when local delivery ends. */
	export interface ServiceStoreConfigCutoffConfigLocalCutoffTime {

		/** Hour local delivery orders must be placed by to process the same day. */
		hour?: string | null;

		/** Minute local delivery orders must be placed by to process the same day. */
		minute?: string | null;
	}

	/** Time in hours and minutes in the local timezone when local delivery ends. */
	export interface ServiceStoreConfigCutoffConfigLocalCutoffTimeFormProperties {

		/** Hour local delivery orders must be placed by to process the same day. */
		hour: FormControl<string | null | undefined>,

		/** Minute local delivery orders must be placed by to process the same day. */
		minute: FormControl<string | null | undefined>,
	}
	export function CreateServiceStoreConfigCutoffConfigLocalCutoffTimeFormGroup() {
		return new FormGroup<ServiceStoreConfigCutoffConfigLocalCutoffTimeFormProperties>({
			hour: new FormControl<string | null | undefined>(undefined),
			minute: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Settlement reports detail order-level and item-level credits and debits between you and Google. */
	export interface SettlementReport {

		/** The end date on which all transactions are included in the report, in ISO 8601 format. */
		endDate?: string | null;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#settlementReport`" */
		kind?: string | null;
		previousBalance?: Price;

		/** The ID of the settlement report. */
		settlementId?: string | null;

		/** The start date on which all transactions are included in the report, in ISO 8601 format. */
		startDate?: string | null;
		transferAmount?: Price;

		/** Date on which transfer for this payment was initiated by Google, in ISO 8601 format. */
		transferDate?: string | null;

		/** The list of bank identifiers used for the transfer. For example, Trace ID for Federal Automated Clearing House (ACH). This may also be known as the Wire ID. */
		transferIds?: Array<string>;
	}

	/**  Settlement reports detail order-level and item-level credits and debits between you and Google. */
	export interface SettlementReportFormProperties {

		/** The end date on which all transactions are included in the report, in ISO 8601 format. */
		endDate: FormControl<string | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "`content#settlementReport`" */
		kind: FormControl<string | null | undefined>,

		/** The ID of the settlement report. */
		settlementId: FormControl<string | null | undefined>,

		/** The start date on which all transactions are included in the report, in ISO 8601 format. */
		startDate: FormControl<string | null | undefined>,

		/** Date on which transfer for this payment was initiated by Google, in ISO 8601 format. */
		transferDate: FormControl<string | null | undefined>,
	}
	export function CreateSettlementReportFormGroup() {
		return new FormGroup<SettlementReportFormProperties>({
			endDate: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			settlementId: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			transferDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settlement transactions give a detailed breakdown of the settlement report. */
	export interface SettlementTransaction {
		amount?: SettlementTransactionAmount;
		identifiers?: SettlementTransactionIdentifiers;

		/** Identifies what kind of resource this is. Value: the fixed string "`content#settlementTransaction`" */
		kind?: string | null;
		transaction?: SettlementTransactionTransaction;
	}

	/** Settlement transactions give a detailed breakdown of the settlement report. */
	export interface SettlementTransactionFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#settlementTransaction`" */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateSettlementTransactionFormGroup() {
		return new FormGroup<SettlementTransactionFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettlementTransactionAmount {
		commission?: SettlementTransactionAmountCommission;

		/** The description of the event. Acceptable values are: - "`taxWithhold`" - "`principal`" - "`principalAdjustment`" - "`shippingFee`" - "`merchantRemittedSalesTax`" - "`googleRemittedSalesTax`" - "`merchantCoupon`" - "`merchantCouponTax`" - "`merchantRemittedDisposalTax`" - "`googleRemittedDisposalTax`" - "`merchantRemittedRedemptionFee`" - "`googleRemittedRedemptionFee`" - "`eeeEcoFee`" - "`furnitureEcoFee`" - "`copyPrivateFee`" - "`eeeEcoFeeCommission`" - "`furnitureEcoFeeCommission`" - "`copyPrivateFeeCommission`" - "`principalRefund`" - "`principalRefundTax`" - "`itemCommission`" - "`adjustmentCommission`" - "`shippingFeeCommission`" - "`commissionRefund`" - "`damaged`" - "`damagedOrDefectiveItem`" - "`expiredItem`" - "`faultyItem`" - "`incorrectItemReceived`" - "`itemMissing`" - "`qualityNotExpected`" - "`receivedTooLate`" - "`storePackageMissing`" - "`transitPackageMissing`" - "`unsuccessfulDeliveryUndeliverable`" - "`wrongChargeInStore`" - "`wrongItem`" - "`returns`" - "`undeliverable`" - "`issueRelatedRefundAndReplacementAmountDescription`" - "`refundFromMerchant`" - "`returnLabelShippingFee`" - "`lumpSumCorrection`" - "`pspFee`" - "`principalRefundDoesNotFit`" - "`principalRefundOrderedWrongItem`" - "`principalRefundQualityNotExpected`" - "`principalRefundBetterPriceFound`" - "`principalRefundNoLongerNeeded`" - "`principalRefundChangedMind`" - "`principalRefundReceivedTooLate`" - "`principalRefundIncorrectItemReceived`" - "`principalRefundDamagedOrDefectiveItem`" - "`principalRefundDidNotMatchDescription`" - "`principalRefundExpiredItem`" */
		description?: string | null;
		transactionAmount?: Price;

		/** The type of the amount. Acceptable values are: - "`itemPrice`" - "`orderPrice`" - "`refund`" - "`earlyRefund`" - "`courtesyRefund`" - "`returnRefund`" - "`returnLabelShippingFeeAmount`" - "`lumpSumCorrectionAmount`" */
		type?: string | null;
	}
	export interface SettlementTransactionAmountFormProperties {

		/** The description of the event. Acceptable values are: - "`taxWithhold`" - "`principal`" - "`principalAdjustment`" - "`shippingFee`" - "`merchantRemittedSalesTax`" - "`googleRemittedSalesTax`" - "`merchantCoupon`" - "`merchantCouponTax`" - "`merchantRemittedDisposalTax`" - "`googleRemittedDisposalTax`" - "`merchantRemittedRedemptionFee`" - "`googleRemittedRedemptionFee`" - "`eeeEcoFee`" - "`furnitureEcoFee`" - "`copyPrivateFee`" - "`eeeEcoFeeCommission`" - "`furnitureEcoFeeCommission`" - "`copyPrivateFeeCommission`" - "`principalRefund`" - "`principalRefundTax`" - "`itemCommission`" - "`adjustmentCommission`" - "`shippingFeeCommission`" - "`commissionRefund`" - "`damaged`" - "`damagedOrDefectiveItem`" - "`expiredItem`" - "`faultyItem`" - "`incorrectItemReceived`" - "`itemMissing`" - "`qualityNotExpected`" - "`receivedTooLate`" - "`storePackageMissing`" - "`transitPackageMissing`" - "`unsuccessfulDeliveryUndeliverable`" - "`wrongChargeInStore`" - "`wrongItem`" - "`returns`" - "`undeliverable`" - "`issueRelatedRefundAndReplacementAmountDescription`" - "`refundFromMerchant`" - "`returnLabelShippingFee`" - "`lumpSumCorrection`" - "`pspFee`" - "`principalRefundDoesNotFit`" - "`principalRefundOrderedWrongItem`" - "`principalRefundQualityNotExpected`" - "`principalRefundBetterPriceFound`" - "`principalRefundNoLongerNeeded`" - "`principalRefundChangedMind`" - "`principalRefundReceivedTooLate`" - "`principalRefundIncorrectItemReceived`" - "`principalRefundDamagedOrDefectiveItem`" - "`principalRefundDidNotMatchDescription`" - "`principalRefundExpiredItem`" */
		description: FormControl<string | null | undefined>,

		/** The type of the amount. Acceptable values are: - "`itemPrice`" - "`orderPrice`" - "`refund`" - "`earlyRefund`" - "`courtesyRefund`" - "`returnRefund`" - "`returnLabelShippingFeeAmount`" - "`lumpSumCorrectionAmount`" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSettlementTransactionAmountFormGroup() {
		return new FormGroup<SettlementTransactionAmountFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettlementTransactionAmountCommission {

		/** The category of the commission. Acceptable values are: - "`animalsAndPetSupplies`" - "`dogCatFoodAndCatLitter`" - "`apparelAndAccessories`" - "`shoesHandbagsAndSunglasses`" - "`costumesAndAccessories`" - "`jewelry`" - "`watches`" - "`hobbiesArtsAndCrafts`" - "`homeAndGarden`" - "`entertainmentCollectibles`" - "`collectibleCoins`" - "`sportsCollectibles`" - "`sportingGoods`" - "`toysAndGames`" - "`musicalInstruments`" - "`giftCards`" - "`babyAndToddler`" - "`babyFoodWipesAndDiapers`" - "`businessAndIndustrial`" - "`camerasOpticsAndPhotography`" - "`consumerElectronics`" - "`electronicsAccessories`" - "`personalComputers`" - "`videoGameConsoles`" - "`foodAndGrocery`" - "`beverages`" - "`tobaccoProducts`" - "`furniture`" - "`hardware`" - "`buildingMaterials`" - "`tools`" - "`healthAndPersonalCare`" - "`beauty`" - "`householdSupplies`" - "`kitchenAndDining`" - "`majorAppliances`" - "`luggageAndBags`" - "`media`" - "`officeSupplies`" - "`softwareAndVideoGames`" - "`vehiclePartsAndAccessories`" - "`vehicleTiresAndWheels`" - "`vehicles`" - "`everythingElse`" */
		category?: string | null;

		/** Rate of the commission in percentage. */
		rate?: string | null;
	}
	export interface SettlementTransactionAmountCommissionFormProperties {

		/** The category of the commission. Acceptable values are: - "`animalsAndPetSupplies`" - "`dogCatFoodAndCatLitter`" - "`apparelAndAccessories`" - "`shoesHandbagsAndSunglasses`" - "`costumesAndAccessories`" - "`jewelry`" - "`watches`" - "`hobbiesArtsAndCrafts`" - "`homeAndGarden`" - "`entertainmentCollectibles`" - "`collectibleCoins`" - "`sportsCollectibles`" - "`sportingGoods`" - "`toysAndGames`" - "`musicalInstruments`" - "`giftCards`" - "`babyAndToddler`" - "`babyFoodWipesAndDiapers`" - "`businessAndIndustrial`" - "`camerasOpticsAndPhotography`" - "`consumerElectronics`" - "`electronicsAccessories`" - "`personalComputers`" - "`videoGameConsoles`" - "`foodAndGrocery`" - "`beverages`" - "`tobaccoProducts`" - "`furniture`" - "`hardware`" - "`buildingMaterials`" - "`tools`" - "`healthAndPersonalCare`" - "`beauty`" - "`householdSupplies`" - "`kitchenAndDining`" - "`majorAppliances`" - "`luggageAndBags`" - "`media`" - "`officeSupplies`" - "`softwareAndVideoGames`" - "`vehiclePartsAndAccessories`" - "`vehicleTiresAndWheels`" - "`vehicles`" - "`everythingElse`" */
		category: FormControl<string | null | undefined>,

		/** Rate of the commission in percentage. */
		rate: FormControl<string | null | undefined>,
	}
	export function CreateSettlementTransactionAmountCommissionFormGroup() {
		return new FormGroup<SettlementTransactionAmountCommissionFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			rate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettlementTransactionIdentifiers {

		/** The identifier of the adjustments, if it's available. */
		adjustmentId?: string | null;

		/** The merchant provided order ID. */
		merchantOrderId?: string | null;

		/** The identifier of the item. */
		orderItemId?: string | null;

		/** The unique ID of the settlement transaction entry. */
		settlementEntryId?: string | null;

		/** The shipment ids for the item. */
		shipmentIds?: Array<string>;

		/** The Google transaction ID. */
		transactionId?: string | null;
	}
	export interface SettlementTransactionIdentifiersFormProperties {

		/** The identifier of the adjustments, if it's available. */
		adjustmentId: FormControl<string | null | undefined>,

		/** The merchant provided order ID. */
		merchantOrderId: FormControl<string | null | undefined>,

		/** The identifier of the item. */
		orderItemId: FormControl<string | null | undefined>,

		/** The unique ID of the settlement transaction entry. */
		settlementEntryId: FormControl<string | null | undefined>,

		/** The Google transaction ID. */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateSettlementTransactionIdentifiersFormGroup() {
		return new FormGroup<SettlementTransactionIdentifiersFormProperties>({
			adjustmentId: new FormControl<string | null | undefined>(undefined),
			merchantOrderId: new FormControl<string | null | undefined>(undefined),
			orderItemId: new FormControl<string | null | undefined>(undefined),
			settlementEntryId: new FormControl<string | null | undefined>(undefined),
			transactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettlementTransactionTransaction {

		/** The time on which the event occurred in ISO 8601 format. */
		postDate?: string | null;

		/** The type of the transaction that occurred. Acceptable values are: - "`order`" - "`reversal`" - "`orderRefund`" - "`reversalRefund`" - "`issueRelatedRefundAndReplacement`" - "`returnLabelShippingFeeTransaction`" - "`reversalIssueRelatedRefundAndReplacement`" - "`reversalReturnLabelShippingFeeTransaction`" - "`lumpSumCorrectionTransaction`" */
		type?: string | null;
	}
	export interface SettlementTransactionTransactionFormProperties {

		/** The time on which the event occurred in ISO 8601 format. */
		postDate: FormControl<string | null | undefined>,

		/** The type of the transaction that occurred. Acceptable values are: - "`order`" - "`reversal`" - "`orderRefund`" - "`reversalRefund`" - "`issueRelatedRefundAndReplacement`" - "`returnLabelShippingFeeTransaction`" - "`reversalIssueRelatedRefundAndReplacement`" - "`reversalReturnLabelShippingFeeTransaction`" - "`lumpSumCorrectionTransaction`" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSettlementTransactionTransactionFormGroup() {
		return new FormGroup<SettlementTransactionTransactionFormProperties>({
			postDate: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettlementreportsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#settlementreportsListResponse`". */
		kind?: string | null;

		/** The token for the retrieval of the next page of returns. */
		nextPageToken?: string | null;
		resources?: Array<SettlementReport>;
	}
	export interface SettlementreportsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#settlementreportsListResponse`". */
		kind: FormControl<string | null | undefined>,

		/** The token for the retrieval of the next page of returns. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSettlementreportsListResponseFormGroup() {
		return new FormGroup<SettlementreportsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettlementtransactionsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#settlementtransactionsListResponse`". */
		kind?: string | null;

		/** The token for the retrieval of the next page of returns. */
		nextPageToken?: string | null;
		resources?: Array<SettlementTransaction>;
	}
	export interface SettlementtransactionsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#settlementtransactionsListResponse`". */
		kind: FormControl<string | null | undefined>,

		/** The token for the retrieval of the next page of returns. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSettlementtransactionsListResponseFormGroup() {
		return new FormGroup<SettlementtransactionsListResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsCustomBatchResponse`". */
		kind?: string | null;
	}
	export interface ShippingsettingsCustomBatchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsCustomBatchResponse`". */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsGetSupportedCarriersResponse`". */
		kind?: string | null;
	}
	export interface ShippingsettingsGetSupportedCarriersResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsGetSupportedCarriersResponse`". */
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

		/** Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsGetSupportedHolidaysResponse`". */
		kind?: string | null;
	}
	export interface ShippingsettingsGetSupportedHolidaysResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsGetSupportedHolidaysResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateShippingsettingsGetSupportedHolidaysResponseFormGroup() {
		return new FormGroup<ShippingsettingsGetSupportedHolidaysResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShippingsettingsGetSupportedPickupServicesResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsGetSupportedPickupServicesResponse`". */
		kind?: string | null;

		/** A list of supported pickup services. May be empty. */
		pickupServices?: Array<PickupServicesPickupService>;
	}
	export interface ShippingsettingsGetSupportedPickupServicesResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsGetSupportedPickupServicesResponse`". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateShippingsettingsGetSupportedPickupServicesResponseFormGroup() {
		return new FormGroup<ShippingsettingsGetSupportedPickupServicesResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShippingsettingsListResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsListResponse`". */
		kind?: string | null;

		/** The token for the retrieval of the next page of shipping settings. */
		nextPageToken?: string | null;
		resources?: Array<ShippingSettings>;
	}
	export interface ShippingsettingsListResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsListResponse`". */
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


	/** Response message for GetShoppingAdsProgramStatus. */
	export interface ShoppingAdsProgramStatus {

		/** State of the program. `ENABLED` if there are offers for at least one region. */
		globalState?: FreeListingsProgramStatusGlobalState | null;

		/** Status of the program in each region. Regions with the same status and review eligibility are grouped together in `regionCodes`. */
		regionStatuses?: Array<ShoppingAdsProgramStatusRegionStatus>;
	}

	/** Response message for GetShoppingAdsProgramStatus. */
	export interface ShoppingAdsProgramStatusFormProperties {

		/** State of the program. `ENABLED` if there are offers for at least one region. */
		globalState: FormControl<FreeListingsProgramStatusGlobalState | null | undefined>,
	}
	export function CreateShoppingAdsProgramStatusFormGroup() {
		return new FormGroup<ShoppingAdsProgramStatusFormProperties>({
			globalState: new FormControl<FreeListingsProgramStatusGlobalState | null | undefined>(undefined),
		});

	}


	/** Status of program and region. */
	export interface ShoppingAdsProgramStatusRegionStatus {

		/** Date by which eligibilityStatus will go from `WARNING` to `DISAPPROVED`. Only visible when your eligibilityStatus is WARNING. In [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DD`. */
		disapprovalDate?: string | null;

		/** Eligibility status of the Shopping Ads program. */
		eligibilityStatus?: FreeListingsProgramStatusRegionStatusEligibilityStatus | null;

		/** Issues that must be fixed to be eligible for review. */
		onboardingIssues?: Array<string>;

		/** The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) codes for all the regions with the same `eligibilityStatus` and `reviewEligibility`. */
		regionCodes?: Array<string>;

		/** If a program is eligible for review in a specific region. Only visible if `eligibilityStatus` is `DISAPPROVED`. */
		reviewEligibilityStatus?: FreeListingsProgramStatusRegionStatusReviewEligibilityStatus | null;

		/** Review ineligibility reason if account is not eligible for review. */
		reviewIneligibilityReason?: FreeListingsProgramStatusRegionStatusReviewIneligibilityReason | null;

		/** Reason a program in a specific region isn’t eligible for review. Only visible if `reviewEligibilityStatus` is `INELIGIBLE`. */
		reviewIneligibilityReasonDescription?: string | null;

		/** Additional details for review ineligibility reasons. */
		reviewIneligibilityReasonDetails?: ShoppingAdsProgramStatusReviewIneligibilityReasonDetails;

		/** Issues evaluated in the review process. Fix all issues before requesting a review. */
		reviewIssues?: Array<string>;
	}

	/** Status of program and region. */
	export interface ShoppingAdsProgramStatusRegionStatusFormProperties {

		/** Date by which eligibilityStatus will go from `WARNING` to `DISAPPROVED`. Only visible when your eligibilityStatus is WARNING. In [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DD`. */
		disapprovalDate: FormControl<string | null | undefined>,

		/** Eligibility status of the Shopping Ads program. */
		eligibilityStatus: FormControl<FreeListingsProgramStatusRegionStatusEligibilityStatus | null | undefined>,

		/** If a program is eligible for review in a specific region. Only visible if `eligibilityStatus` is `DISAPPROVED`. */
		reviewEligibilityStatus: FormControl<FreeListingsProgramStatusRegionStatusReviewEligibilityStatus | null | undefined>,

		/** Review ineligibility reason if account is not eligible for review. */
		reviewIneligibilityReason: FormControl<FreeListingsProgramStatusRegionStatusReviewIneligibilityReason | null | undefined>,

		/** Reason a program in a specific region isn’t eligible for review. Only visible if `reviewEligibilityStatus` is `INELIGIBLE`. */
		reviewIneligibilityReasonDescription: FormControl<string | null | undefined>,
	}
	export function CreateShoppingAdsProgramStatusRegionStatusFormGroup() {
		return new FormGroup<ShoppingAdsProgramStatusRegionStatusFormProperties>({
			disapprovalDate: new FormControl<string | null | undefined>(undefined),
			eligibilityStatus: new FormControl<FreeListingsProgramStatusRegionStatusEligibilityStatus | null | undefined>(undefined),
			reviewEligibilityStatus: new FormControl<FreeListingsProgramStatusRegionStatusReviewEligibilityStatus | null | undefined>(undefined),
			reviewIneligibilityReason: new FormControl<FreeListingsProgramStatusRegionStatusReviewIneligibilityReason | null | undefined>(undefined),
			reviewIneligibilityReasonDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional details for review ineligibility reasons. */
	export interface ShoppingAdsProgramStatusReviewIneligibilityReasonDetails {

		/** This timestamp represents end of cooldown period for review ineligbility reason `IN_COOLDOWN_PERIOD`. */
		cooldownTime?: string | null;
	}

	/** Additional details for review ineligibility reasons. */
	export interface ShoppingAdsProgramStatusReviewIneligibilityReasonDetailsFormProperties {

		/** This timestamp represents end of cooldown period for review ineligbility reason `IN_COOLDOWN_PERIOD`. */
		cooldownTime: FormControl<string | null | undefined>,
	}
	export function CreateShoppingAdsProgramStatusReviewIneligibilityReasonDetailsFormGroup() {
		return new FormGroup<ShoppingAdsProgramStatusReviewIneligibilityReasonDetailsFormProperties>({
			cooldownTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the UndeleteConversionSource method. */
	export interface UndeleteConversionSourceRequest {
	}

	/** Request message for the UndeleteConversionSource method. */
	export interface UndeleteConversionSourceRequestFormProperties {
	}
	export function CreateUndeleteConversionSourceRequestFormGroup() {
		return new FormGroup<UndeleteConversionSourceRequestFormProperties>({
		});

	}


	/** Request message for the VerifyPhoneNumber method. */
	export interface VerifyPhoneNumberRequest {

		/** Verification method used to receive verification code. */
		phoneVerificationMethod?: RequestPhoneVerificationRequestPhoneVerificationMethod | null;

		/** The verification code that was sent to the phone number for validation. */
		verificationCode?: string | null;

		/** The verification ID returned by `requestphoneverification`. */
		verificationId?: string | null;
	}

	/** Request message for the VerifyPhoneNumber method. */
	export interface VerifyPhoneNumberRequestFormProperties {

		/** Verification method used to receive verification code. */
		phoneVerificationMethod: FormControl<RequestPhoneVerificationRequestPhoneVerificationMethod | null | undefined>,

		/** The verification code that was sent to the phone number for validation. */
		verificationCode: FormControl<string | null | undefined>,

		/** The verification ID returned by `requestphoneverification`. */
		verificationId: FormControl<string | null | undefined>,
	}
	export function CreateVerifyPhoneNumberRequestFormGroup() {
		return new FormGroup<VerifyPhoneNumberRequestFormProperties>({
			phoneVerificationMethod: new FormControl<RequestPhoneVerificationRequestPhoneVerificationMethod | null | undefined>(undefined),
			verificationCode: new FormControl<string | null | undefined>(undefined),
			verificationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the VerifyPhoneNumber method. */
	export interface VerifyPhoneNumberResponse {

		/** Verified phone number if verification is successful. This phone number can only be replaced by another verified phone number. */
		verifiedPhoneNumber?: string | null;
	}

	/** Response message for the VerifyPhoneNumber method. */
	export interface VerifyPhoneNumberResponseFormProperties {

		/** Verified phone number if verification is successful. This phone number can only be replaced by another verified phone number. */
		verifiedPhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateVerifyPhoneNumberResponseFormGroup() {
		return new FormGroup<VerifyPhoneNumberResponseFormProperties>({
			verifiedPhoneNumber: new FormControl<string | null | undefined>(undefined),
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
		 * @return {AccountsCustomBatchResponse} Successful response
		 */
		Content_accounts_custombatch(requestBody: AccountsCustomBatchRequest): Observable<AccountsCustomBatchResponse> {
			return this.http.post<AccountsCustomBatchResponse>(this.baseUri + 'accounts/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the `BusinessMessagesLink` resources for Merchant Center account.
		 * Get accounts/{accountId}/businessmessageslinks
		 * @param {string} accountId Required. The ID of the account.
		 * @param {number} pageSize Optional. The maximum number of `BusinessMessagesLink` resources for the Merchant Center account to return. Defaults to 50; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListBusinessMessagesLinks` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListBusinessMessagesLinks` must match the call that provided the page token.
		 * @return {ListBusinessMessagesLinksResponse} Successful response
		 */
		Content_accounts_businessmessageslinks_list(accountId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBusinessMessagesLinksResponse> {
			return this.http.get<ListBusinessMessagesLinksResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/businessmessageslinks&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a `BusinessMessagesLink` in Merchant Center account.
		 * Post accounts/{accountId}/businessmessageslinks
		 * @param {string} accountId Required. The ID of the Merchant Center account.
		 * @return {BusinessMessagesLink} Successful response
		 */
		Content_accounts_businessmessageslinks_create(accountId: string, requestBody: BusinessMessagesLink): Observable<BusinessMessagesLink> {
			return this.http.post<BusinessMessagesLink>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/businessmessageslinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified `BusinessMessagesLink` resource from Merchant Center account.
		 * Delete accounts/{accountId}/businessmessageslinks/{businessMessagesLinkId}
		 * @param {string} accountId Required. The ID of the Merchant Center account.
		 * @param {string} businessMessagesLinkId Required. The identifier for the Business Messages Link.
		 * @return {void} Successful response
		 */
		Content_accounts_businessmessageslinks_delete(accountId: string, businessMessagesLinkId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/businessmessageslinks/' + (businessMessagesLinkId == null ? '' : encodeURIComponent(businessMessagesLinkId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves `BusinessMessagesLink` in Merchant Center account.
		 * Get accounts/{accountId}/businessmessageslinks/{businessMessagesLinkId}
		 * @param {string} accountId Required. The ID of the Merchant Center account.
		 * @param {string} businessMessagesLinkId Required. The identifier for the Business Messages Link.
		 * @return {BusinessMessagesLink} Successful response
		 */
		Content_accounts_businessmessageslinks_get(accountId: string, businessMessagesLinkId: string): Observable<BusinessMessagesLink> {
			return this.http.get<BusinessMessagesLink>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/businessmessageslinks/' + (businessMessagesLinkId == null ? '' : encodeURIComponent(businessMessagesLinkId)), {});
		}

		/**
		 * Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.
		 * Post accounts/{accountId}/credentials
		 * @param {string} accountId Required. The merchant id of the account these credentials belong to.
		 * @return {AccountCredentials} Successful response
		 */
		Content_accounts_credentials_create(accountId: string, requestBody: AccountCredentials): Observable<AccountCredentials> {
			return this.http.post<AccountCredentials>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/credentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the labels assigned to an account.
		 * Get accounts/{accountId}/labels
		 * @param {string} accountId Required. The account id for whose labels are to be listed.
		 * @param {number} pageSize The maximum number of labels to return. The service may return fewer than this value. If unspecified, at most 50 labels will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListAccountLabels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountLabels` must match the call that provided the page token.
		 * @return {ListAccountLabelsResponse} Successful response
		 */
		Content_accounts_labels_list(accountId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAccountLabelsResponse> {
			return this.http.get<ListAccountLabelsResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/labels&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new label, not assigned to any account.
		 * Post accounts/{accountId}/labels
		 * @param {string} accountId Required. The id of the account this label belongs to.
		 * @return {AccountLabel} Successful response
		 */
		Content_accounts_labels_create(accountId: string, requestBody: AccountLabel): Observable<AccountLabel> {
			return this.http.post<AccountLabel>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/labels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a label and removes it from all accounts to which it was assigned.
		 * Delete accounts/{accountId}/labels/{labelId}
		 * @param {string} accountId Required. The id of the account that owns the label.
		 * @param {string} labelId Required. The id of the label to delete.
		 * @return {void} Successful response
		 */
		Content_accounts_labels_delete(accountId: string, labelId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/labels/' + (labelId == null ? '' : encodeURIComponent(labelId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a label.
		 * Patch accounts/{accountId}/labels/{labelId}
		 * @param {string} accountId Required. The id of the account this label belongs to.
		 * @param {string} labelId Required. The id of the label to update.
		 * @return {AccountLabel} Successful response
		 */
		Content_accounts_labels_patch(accountId: string, labelId: string, requestBody: AccountLabel): Observable<AccountLabel> {
			return this.http.patch<AccountLabel>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/labels/' + (labelId == null ? '' : encodeURIComponent(labelId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists available return carriers in the merchant account.
		 * Get accounts/{accountId}/returncarrier
		 * @param {string} accountId Required. The Merchant Center Account Id under which the Return Carrier is to be linked.
		 * @return {ListAccountReturnCarrierResponse} Successful response
		 */
		Content_accounts_returncarrier_list(accountId: string): Observable<ListAccountReturnCarrierResponse> {
			return this.http.get<ListAccountReturnCarrierResponse>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/returncarrier', {});
		}

		/**
		 * Links return carrier to a merchant account.
		 * Post accounts/{accountId}/returncarrier
		 * @param {string} accountId Required. The Merchant Center Account Id under which the Return Carrier is to be linked.
		 * @return {AccountReturnCarrier} Successful response
		 */
		Content_accounts_returncarrier_create(accountId: string, requestBody: AccountReturnCarrier): Observable<AccountReturnCarrier> {
			return this.http.post<AccountReturnCarrier>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/returncarrier', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a return carrier in the merchant account.
		 * Delete accounts/{accountId}/returncarrier/{carrierAccountId}
		 * @param {string} accountId Required. The Merchant Center Account Id under which the Return Carrier is to be linked.
		 * @param {string} carrierAccountId Required. The Google-provided unique carrier ID, used to update the resource.
		 * @return {void} Successful response
		 */
		Content_accounts_returncarrier_delete(accountId: string, carrierAccountId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/returncarrier/' + (carrierAccountId == null ? '' : encodeURIComponent(carrierAccountId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a return carrier in the merchant account.
		 * Patch accounts/{accountId}/returncarrier/{carrierAccountId}
		 * @param {string} accountId Required. The Merchant Center Account Id under which the Return Carrier is to be linked.
		 * @param {string} carrierAccountId Required. The Google-provided unique carrier ID, used to update the resource.
		 * @return {AccountReturnCarrier} Successful response
		 */
		Content_accounts_returncarrier_patch(accountId: string, carrierAccountId: string, requestBody: AccountReturnCarrier): Observable<AccountReturnCarrier> {
			return this.http.patch<AccountReturnCarrier>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/returncarrier/' + (carrierAccountId == null ? '' : encodeURIComponent(carrierAccountId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @return {AccounttaxCustomBatchResponse} Successful response
		 */
		Content_accounttax_custombatch(requestBody: AccounttaxCustomBatchRequest): Observable<AccounttaxCustomBatchResponse> {
			return this.http.post<AccounttaxCustomBatchResponse>(this.baseUri + 'accounttax/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
		 * Post datafeeds/batch
		 * @return {DatafeedsCustomBatchResponse} Successful response
		 */
		Content_datafeeds_custombatch(requestBody: DatafeedsCustomBatchRequest): Observable<DatafeedsCustomBatchResponse> {
			return this.http.post<DatafeedsCustomBatchResponse>(this.baseUri + 'datafeeds/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @return {LiasettingsCustomBatchResponse} Successful response
		 */
		Content_liasettings_custombatch(requestBody: LiasettingsCustomBatchRequest): Observable<LiasettingsCustomBatchResponse> {
			return this.http.post<LiasettingsCustomBatchResponse>(this.baseUri + 'liasettings/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Updates local inventory for multiple products or stores in a single request.
		 * Post localinventory/batch
		 * @return {LocalinventoryCustomBatchResponse} Successful response
		 */
		Content_localinventory_custombatch(requestBody: LocalinventoryCustomBatchRequest): Observable<LocalinventoryCustomBatchResponse> {
			return this.http.post<LocalinventoryCustomBatchResponse>(this.baseUri + 'localinventory/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Batches multiple POS-related calls in a single request.
		 * Post pos/batch
		 * @return {PosCustomBatchResponse} Successful response
		 */
		Content_pos_custombatch(requestBody: PosCustomBatchRequest): Observable<PosCustomBatchResponse> {
			return this.http.post<PosCustomBatchResponse>(this.baseUri + 'pos/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves, inserts, and deletes multiple products in a single request.
		 * Post products/batch
		 * @return {ProductsCustomBatchResponse} Successful response
		 */
		Content_products_custombatch(requestBody: ProductsCustomBatchRequest): Observable<ProductsCustomBatchResponse> {
			return this.http.post<ProductsCustomBatchResponse>(this.baseUri + 'products/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the statuses of multiple products in a single request.
		 * Post productstatuses/batch
		 * @return {ProductstatusesCustomBatchResponse} Successful response
		 */
		Content_productstatuses_custombatch(requestBody: ProductstatusesCustomBatchRequest): Observable<ProductstatusesCustomBatchResponse> {
			return this.http.post<ProductstatusesCustomBatchResponse>(this.baseUri + 'productstatuses/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates regional inventory for multiple products or regions in a single request.
		 * Post regionalinventory/batch
		 * @return {RegionalinventoryCustomBatchResponse} Successful response
		 */
		Content_regionalinventory_custombatch(requestBody: RegionalinventoryCustomBatchRequest): Observable<RegionalinventoryCustomBatchResponse> {
			return this.http.post<RegionalinventoryCustomBatchResponse>(this.baseUri + 'regionalinventory/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Batches multiple return address related calls in a single request.
		 * Post returnaddress/batch
		 * @return {ReturnaddressCustomBatchResponse} Successful response
		 */
		Content_returnaddress_custombatch(requestBody: ReturnaddressCustomBatchRequest): Observable<ReturnaddressCustomBatchResponse> {
			return this.http.post<ReturnaddressCustomBatchResponse>(this.baseUri + 'returnaddress/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Batches multiple return policy related calls in a single request.
		 * Post returnpolicy/batch
		 * @return {ReturnpolicyCustomBatchResponse} Successful response
		 */
		Content_returnpolicy_custombatch(requestBody: ReturnpolicyCustomBatchRequest): Observable<ReturnpolicyCustomBatchResponse> {
			return this.http.post<ReturnpolicyCustomBatchResponse>(this.baseUri + 'returnpolicy/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves and updates the shipping settings of multiple accounts in a single request.
		 * Post shippingsettings/batch
		 * @return {ShippingsettingsCustomBatchResponse} Successful response
		 */
		Content_shippingsettings_custombatch(requestBody: ShippingsettingsCustomBatchRequest): Observable<ShippingsettingsCustomBatchResponse> {
			return this.http.post<ShippingsettingsCustomBatchResponse>(this.baseUri + 'shippingsettings/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists CSS domains affiliated with a CSS group.
		 * Get {cssGroupId}/csses
		 * @param {string} cssGroupId Required. The CSS group ID of CSS domains to be listed.
		 * @param {number} pageSize The maximum number of CSS domains to return. The service may return fewer than this value. If unspecified, at most 50 CSS domains will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListCsses` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCsses` must match the call that provided the page token.
		 * @return {ListCssesResponse} Successful response
		 */
		Content_csses_list(cssGroupId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCssesResponse> {
			return this.http.get<ListCssesResponse>(this.baseUri + (cssGroupId == null ? '' : encodeURIComponent(cssGroupId)) + '/csses&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Retrieves a single CSS domain by ID.
		 * Get {cssGroupId}/csses/{cssDomainId}
		 * @param {string} cssGroupId Required. The ID of the managing account. If this parameter is not the same as [cssDomainId](#cssDomainId), then this ID must be a CSS group ID and `cssDomainId` must be the ID of a CSS domain affiliated with this group.
		 * @param {string} cssDomainId Required. The ID of the CSS domain to return.
		 * @return {Css} Successful response
		 */
		Content_csses_get(cssGroupId: string, cssDomainId: string): Observable<Css> {
			return this.http.get<Css>(this.baseUri + (cssGroupId == null ? '' : encodeURIComponent(cssGroupId)) + '/csses/' + (cssDomainId == null ? '' : encodeURIComponent(cssDomainId)) + '', {});
		}

		/**
		 * Updates labels that are assigned to a CSS domain by its CSS group.
		 * Post {cssGroupId}/csses/{cssDomainId}/updatelabels
		 * @param {string} cssGroupId Required. The CSS group ID of the updated CSS domain.
		 * @param {string} cssDomainId Required. The ID of the updated CSS domain.
		 * @return {Css} Successful response
		 */
		Content_csses_updatelabels(cssGroupId: string, cssDomainId: string, requestBody: LabelIds): Observable<Css> {
			return this.http.post<Css>(this.baseUri + (cssGroupId == null ? '' : encodeURIComponent(cssGroupId)) + '/csses/' + (cssDomainId == null ? '' : encodeURIComponent(cssDomainId)) + '/updatelabels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the sub-accounts in your Merchant Center account.
		 * Get {merchantId}/accounts
		 * @param {string} merchantId The ID of the managing account. This must be a multi-client account.
		 * @param {string} label If view is set to "css", only return accounts that are assigned label with given ID.
		 * @param {number} maxResults The maximum number of accounts to return in the response, used for paging.
		 * @param {string} name If set, only the accounts with the given name (case sensitive) will be returned.
		 * @param {string} pageToken The token returned by the previous request.
		 * @param {Content_accounts_listView} view Controls which fields will be populated. Acceptable values are: "merchant" and "css". The default value is "merchant".
		 * @return {AccountsListResponse} Successful response
		 */
		Content_accounts_list(merchantId: string, label: string | null | undefined, maxResults: number | null | undefined, name: string | null | undefined, pageToken: string | null | undefined, view: Content_accounts_listView | null | undefined): Observable<AccountsListResponse> {
			return this.http.get<AccountsListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts&label=' + (label == null ? '' : encodeURIComponent(label)) + '&maxResults=' + maxResults + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view + '', {});
		}

		/**
		 * Creates a Merchant Center sub-account.
		 * Post {merchantId}/accounts
		 * @param {string} merchantId The ID of the managing account. This must be a multi-client account.
		 * @return {Account} Successful response
		 */
		Content_accounts_insert(merchantId: string, requestBody: Account): Observable<Account> {
			return this.http.post<Account>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Merchant Center sub-account.
		 * Delete {merchantId}/accounts/{accountId}
		 * @param {string} merchantId The ID of the managing account. This must be a multi-client account, and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account.
		 * @param {boolean} force Option to delete sub-accounts with products. The default value is false.
		 * @return {void} Successful response
		 */
		Content_accounts_delete(merchantId: string, accountId: string, force: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&force=' + force + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a Merchant Center account.
		 * Get {merchantId}/accounts/{accountId}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account.
		 * @param {Content_accounts_listView} view Controls which fields will be populated. Acceptable values are: "merchant" and "css". The default value is "merchant".
		 * @return {Account} Successful response
		 */
		Content_accounts_get(merchantId: string, accountId: string, view: Content_accounts_listView | null | undefined): Observable<Account> {
			return this.http.get<Account>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&view=' + view + '', {});
		}

		/**
		 * Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
		 * Put {merchantId}/accounts/{accountId}
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account.
		 * @return {Account} Successful response
		 */
		Content_accounts_update(merchantId: string, accountId: string, requestBody: Account): Observable<Account> {
			return this.http.put<Account>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Claims the website of a Merchant Center sub-account. Merchant accounts with approved third-party CSSs aren't required to claim a website.
		 * Post {merchantId}/accounts/{accountId}/claimwebsite
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account whose website is claimed.
		 * @param {boolean} overwrite Only available to selected merchants, for example multi-client accounts (MCAs) and their sub-accounts. When set to `True`, this option removes any existing claim on the requested website and replaces it with a claim from the account that makes the request.
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
		 * Returns the list of accounts linked to your Merchant Center account.
		 * Get {merchantId}/accounts/{accountId}/listlinks
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to list links.
		 * @param {number} maxResults The maximum number of links to return in the response, used for pagination. The minimum allowed value is 5 results per page. If provided value is lower than 5, it will be automatically increased to 5.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {AccountsListLinksResponse} Successful response
		 */
		Content_accounts_listlinks(merchantId: string, accountId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<AccountsListLinksResponse> {
			return this.http.get<AccountsListLinksResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/listlinks&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Request verification code to start phone verification.
		 * Post {merchantId}/accounts/{accountId}/requestphoneverification
		 * @param {string} merchantId Required. The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId Required. The ID of the account.
		 * @return {RequestPhoneVerificationResponse} Successful response
		 */
		Content_accounts_requestphoneverification(merchantId: string, accountId: string, requestBody: RequestPhoneVerificationRequest): Observable<RequestPhoneVerificationResponse> {
			return this.http.post<RequestPhoneVerificationResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/requestphoneverification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates labels that are assigned to the Merchant Center account by CSS user.
		 * Post {merchantId}/accounts/{accountId}/updatelabels
		 * @param {string} merchantId The ID of the managing account.
		 * @param {string} accountId The ID of the account whose labels are updated.
		 * @return {AccountsUpdateLabelsResponse} Successful response
		 */
		Content_accounts_updatelabels(merchantId: string, accountId: string, requestBody: AccountsUpdateLabelsRequest): Observable<AccountsUpdateLabelsResponse> {
			return this.http.post<AccountsUpdateLabelsResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/updatelabels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.
		 * Post {merchantId}/accounts/{accountId}/verifyphonenumber
		 * @param {string} merchantId Required. The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.
		 * @param {string} accountId Required. The ID of the account.
		 * @return {VerifyPhoneNumberResponse} Successful response
		 */
		Content_accounts_verifyphonenumber(merchantId: string, accountId: string, requestBody: VerifyPhoneNumberRequest): Observable<VerifyPhoneNumberResponse> {
			return this.http.post<VerifyPhoneNumberResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/verifyphonenumber', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the statuses of the sub-accounts in your Merchant Center account.
		 * Get {merchantId}/accountstatuses
		 * @param {string} merchantId The ID of the managing account. This must be a multi-client account.
		 * @param {Array<string>} destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
		 * @param {number} maxResults The maximum number of account statuses to return in the response, used for paging.
		 * @param {string} name If set, only the accounts with the given name (case sensitive) will be returned.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {AccountstatusesListResponse} Successful response
		 */
		Content_accountstatuses_list(merchantId: string, destinations: Array<string> | null | undefined, maxResults: number | null | undefined, name: string | null | undefined, pageToken: string | null | undefined): Observable<AccountstatusesListResponse> {
			return this.http.get<AccountstatusesListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accountstatuses&' + destinations?.map(z => `destinations=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
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
		 * @return {AccountTax} Successful response
		 */
		Content_accounttax_update(merchantId: string, accountId: string, requestBody: AccountTax): Observable<AccountTax> {
			return this.http.put<AccountTax>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/accounttax/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a status of the BoG program for your Merchant Center account.
		 * Get {merchantId}/buyongoogleprograms/{regionCode}
		 * @param {string} merchantId Required. The ID of the account.
		 * @param {string} regionCode Required. The Program region code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Currently only US is available.
		 * @return {BuyOnGoogleProgramStatus} Successful response
		 */
		Content_buyongoogleprograms_get(merchantId: string, regionCode: string): Observable<BuyOnGoogleProgramStatus> {
			return this.http.get<BuyOnGoogleProgramStatus>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/buyongoogleprograms/' + (regionCode == null ? '' : encodeURIComponent(regionCode)) + '', {});
		}

		/**
		 * Updates the status of the BoG program for your Merchant Center account.
		 * Patch {merchantId}/buyongoogleprograms/{regionCode}
		 * @param {string} merchantId Required. The ID of the account.
		 * @param {string} regionCode Required. The program region code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Currently only US is available.
		 * @param {string} updateMask The list of fields to update. If the update mask is not provided, then all the fields set in buyOnGoogleProgramStatus will be updated. Clearing fields is only possible if update mask is provided.
		 * @return {BuyOnGoogleProgramStatus} Successful response
		 */
		Content_buyongoogleprograms_patch(merchantId: string, regionCode: string, updateMask: string | null | undefined, requestBody: BuyOnGoogleProgramStatus): Observable<BuyOnGoogleProgramStatus> {
			return this.http.patch<BuyOnGoogleProgramStatus>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/buyongoogleprograms/' + (regionCode == null ? '' : encodeURIComponent(regionCode)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reactivates the BoG program in your Merchant Center account. Moves the program to the active state when allowed, for example, when paused. This method is only available to selected merchants.
		 * Post {merchantId}/buyongoogleprograms/{regionCode}/activate
		 * @param {string} merchantId Required. The ID of the account.
		 * @param {string} regionCode Required. The program region code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Currently only US is available.
		 * @return {void} Successful response
		 */
		Content_buyongoogleprograms_activate(merchantId: string, regionCode: string, requestBody: ActivateBuyOnGoogleProgramRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/buyongoogleprograms/' + (regionCode == null ? '' : encodeURIComponent(regionCode)) + '/activate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Onboards the BoG program in your Merchant Center account. By using this method, you agree to the [Terms of Service](https://merchants.google.com/mc/termsofservice/transactions/US/latest). Calling this method is only possible if the authenticated account is the same as the merchant id in the request. Calling this method multiple times will only accept Terms of Service if the latest version is not currently signed.
		 * Post {merchantId}/buyongoogleprograms/{regionCode}/onboard
		 * @param {string} merchantId Required. The ID of the account.
		 * @param {string} regionCode Required. The program region code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Currently only US is available.
		 * @return {void} Successful response
		 */
		Content_buyongoogleprograms_onboard(merchantId: string, regionCode: string, requestBody: OnboardBuyOnGoogleProgramRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/buyongoogleprograms/' + (regionCode == null ? '' : encodeURIComponent(regionCode)) + '/onboard', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Pauses the BoG program in your Merchant Center account. This method is only available to selected merchants.
		 * Post {merchantId}/buyongoogleprograms/{regionCode}/pause
		 * @param {string} merchantId Required. The ID of the account.
		 * @param {string} regionCode Required. The program region code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Currently only US is available.
		 * @return {void} Successful response
		 */
		Content_buyongoogleprograms_pause(merchantId: string, regionCode: string, requestBody: PauseBuyOnGoogleProgramRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/buyongoogleprograms/' + (regionCode == null ? '' : encodeURIComponent(regionCode)) + '/pause', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Requests review and then activates the BoG program in your Merchant Center account for the first time. Moves the program to the REVIEW_PENDING state. This method is only available to selected merchants.
		 * Post {merchantId}/buyongoogleprograms/{regionCode}/requestreview
		 * @param {string} merchantId Required. The ID of the account.
		 * @param {string} regionCode Required. The program region code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Currently only US is available.
		 * @return {void} Successful response
		 */
		Content_buyongoogleprograms_requestreview(merchantId: string, regionCode: string, requestBody: RequestReviewBuyOnGoogleProgramRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/buyongoogleprograms/' + (regionCode == null ? '' : encodeURIComponent(regionCode)) + '/requestreview', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested.
		 * Get {merchantId}/collections
		 * @param {string} merchantId Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
		 * @param {number} pageSize The maximum number of collections to return in the response, used for paging. Defaults to 50; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
		 * @return {ListCollectionsResponse} Successful response
		 */
		Content_collections_list(merchantId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCollectionsResponse> {
			return this.http.get<ListCollectionsResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/collections&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request.
		 * Post {merchantId}/collections
		 * @param {string} merchantId Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
		 * @return {Collection} Successful response
		 */
		Content_collections_create(merchantId: string, requestBody: Collection): Observable<Collection> {
			return this.http.post<Collection>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/collections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a collection from your Merchant Center account.
		 * Delete {merchantId}/collections/{collectionId}
		 * @param {string} merchantId Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
		 * @param {string} collectionId Required. The collectionId of the collection. CollectionId is the same as the REST ID of the collection.
		 * @return {void} Successful response
		 */
		Content_collections_delete(merchantId: string, collectionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/collections/' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a collection from your Merchant Center account.
		 * Get {merchantId}/collections/{collectionId}
		 * @param {string} merchantId Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
		 * @param {string} collectionId Required. The REST ID of the collection.
		 * @return {Collection} Successful response
		 */
		Content_collections_get(merchantId: string, collectionId: string): Observable<Collection> {
			return this.http.get<Collection>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/collections/' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '', {});
		}

		/**
		 * Lists the statuses of the collections in your Merchant Center account.
		 * Get {merchantId}/collectionstatuses
		 * @param {string} merchantId Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
		 * @param {number} pageSize The maximum number of collection statuses to return in the response, used for paging. Defaults to 50; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
		 * @return {ListCollectionStatusesResponse} Successful response
		 */
		Content_collectionstatuses_list(merchantId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCollectionStatusesResponse> {
			return this.http.get<ListCollectionStatusesResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/collectionstatuses&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Gets the status of a collection from your Merchant Center account.
		 * Get {merchantId}/collectionstatuses/{collectionId}
		 * @param {string} merchantId Required. The ID of the account that contains the collection. This account cannot be a multi-client account.
		 * @param {string} collectionId Required. The collectionId of the collection. CollectionId is the same as the REST ID of the collection.
		 * @return {CollectionStatus} Successful response
		 */
		Content_collectionstatuses_get(merchantId: string, collectionId: string): Observable<CollectionStatus> {
			return this.http.get<CollectionStatus>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/collectionstatuses/' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '', {});
		}

		/**
		 * Retrieves the list of conversion sources the caller has access to.
		 * Get {merchantId}/conversionsources
		 * @param {string} merchantId Required. The ID of the account that owns the new conversion source.
		 * @param {number} pageSize The maximum number of conversion sources to return in a page. If no `page_size` is specified, `100` is used as the default value. The maximum value is `200`. Values above `200` will be coerced to `200`. Regardless of pagination, at most `200` conversion sources are returned in total.
		 * @param {string} pageToken Page token.
		 * @param {boolean} showDeleted If true, also returns archived conversion sources.
		 * @return {ListConversionSourcesResponse} Successful response
		 */
		Content_conversionsources_list(merchantId: string, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<ListConversionSourcesResponse> {
			return this.http.get<ListConversionSourcesResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/conversionsources&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted + '', {});
		}

		/**
		 * Creates a new conversion source.
		 * Post {merchantId}/conversionsources
		 * @param {string} merchantId Required. The ID of the account that owns the new conversion source.
		 * @return {ConversionSource} Successful response
		 */
		Content_conversionsources_create(merchantId: string, requestBody: ConversionSource): Observable<ConversionSource> {
			return this.http.post<ConversionSource>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/conversionsources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Archives an existing conversion source. It will be recoverable for 30 days. This archiving behavior is not typical in the Content API and unique to this service.
		 * Delete {merchantId}/conversionsources/{conversionSourceId}
		 * @param {string} merchantId Required. The ID of the account that owns the new conversion source.
		 * @param {string} conversionSourceId Required. The ID of the conversion source to be deleted.
		 * @return {void} Successful response
		 */
		Content_conversionsources_delete(merchantId: string, conversionSourceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/conversionsources/' + (conversionSourceId == null ? '' : encodeURIComponent(conversionSourceId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches a conversion source.
		 * Get {merchantId}/conversionsources/{conversionSourceId}
		 * @param {string} merchantId Required. The ID of the account that owns the new conversion source.
		 * @param {string} conversionSourceId Required. The REST ID of the collection.
		 * @return {ConversionSource} Successful response
		 */
		Content_conversionsources_get(merchantId: string, conversionSourceId: string): Observable<ConversionSource> {
			return this.http.get<ConversionSource>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/conversionsources/' + (conversionSourceId == null ? '' : encodeURIComponent(conversionSourceId)) + '', {});
		}

		/**
		 * Updates information of an existing conversion source.
		 * Patch {merchantId}/conversionsources/{conversionSourceId}
		 * @param {string} merchantId Required. The ID of the account that owns the new conversion source.
		 * @param {string} conversionSourceId Required. The ID of the conversion source to be updated.
		 * @param {string} updateMask Required. List of fields being updated.
		 * @return {ConversionSource} Successful response
		 */
		Content_conversionsources_patch(merchantId: string, conversionSourceId: string, updateMask: string | null | undefined, requestBody: ConversionSource): Observable<ConversionSource> {
			return this.http.patch<ConversionSource>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/conversionsources/' + (conversionSourceId == null ? '' : encodeURIComponent(conversionSourceId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Re-enables an archived conversion source.
		 * Post {merchantId}/conversionsources/{conversionSourceId}:undelete
		 * @param {string} merchantId Required. The ID of the account that owns the new conversion source.
		 * @param {string} conversionSourceId Required. The ID of the conversion source to be undeleted.
		 * @return {void} Successful response
		 */
		Content_conversionsources_undelete(merchantId: string, conversionSourceId: string, requestBody: UndeleteConversionSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/conversionsources/' + (conversionSourceId == null ? '' : encodeURIComponent(conversionSourceId)) + ':undelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * @return {Datafeed} Successful response
		 */
		Content_datafeeds_insert(merchantId: string, requestBody: Datafeed): Observable<Datafeed> {
			return this.http.post<Datafeed>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeeds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a datafeed configuration from your Merchant Center account.
		 * Delete {merchantId}/datafeeds/{datafeedId}
		 * @param {string} merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
		 * @param {string} datafeedId The ID of the datafeed.
		 * @return {void} Successful response
		 */
		Content_datafeeds_delete(merchantId: string, datafeedId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeeds/' + (datafeedId == null ? '' : encodeURIComponent(datafeedId)) + '', { observe: 'response', responseType: 'text' });
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
		 * @return {Datafeed} Successful response
		 */
		Content_datafeeds_update(merchantId: string, datafeedId: string, requestBody: Datafeed): Observable<Datafeed> {
			return this.http.put<Datafeed>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeeds/' + (datafeedId == null ? '' : encodeURIComponent(datafeedId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the [Products service](https://developers.google.com/shopping-content/reference/rest/v2.1/products) to update your product data.
		 * Post {merchantId}/datafeeds/{datafeedId}/fetchNow
		 * @param {string} merchantId The ID of the account that manages the datafeed. This account cannot be a multi-client account.
		 * @param {string} datafeedId The ID of the datafeed to be fetched.
		 * @return {DatafeedsFetchNowResponse} Successful response
		 */
		Content_datafeeds_fetchnow(merchantId: string, datafeedId: string): Observable<DatafeedsFetchNowResponse> {
			return this.http.post<DatafeedsFetchNowResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeeds/' + (datafeedId == null ? '' : encodeURIComponent(datafeedId)) + '/fetchNow', null, {});
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
		 * @param {string} country Deprecated. Use `feedLabel` instead. The country to get the datafeed status for. If this parameter is provided then `language` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
		 * @param {string} feedLabel The feed label to get the datafeed status for. If this parameter is provided then `language` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
		 * @param {string} language The language to get the datafeed status for. If this parameter is provided then `country` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
		 * @return {DatafeedStatus} Successful response
		 */
		Content_datafeedstatuses_get(merchantId: string, datafeedId: string, country: string | null | undefined, feedLabel: string | null | undefined, language: string | null | undefined): Observable<DatafeedStatus> {
			return this.http.get<DatafeedStatus>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/datafeedstatuses/' + (datafeedId == null ? '' : encodeURIComponent(datafeedId)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&feedLabel=' + (feedLabel == null ? '' : encodeURIComponent(feedLabel)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '', {});
		}

		/**
		 * Retrieves the status and review eligibility for the free listing program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
		 * Get {merchantId}/freelistingsprogram
		 * @param {string} merchantId Required. The ID of the account.
		 * @return {FreeListingsProgramStatus} Successful response
		 */
		Content_freelistingsprogram_get(merchantId: string): Observable<FreeListingsProgramStatus> {
			return this.http.get<FreeListingsProgramStatus>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/freelistingsprogram', {});
		}

		/**
		 * Deletes `Checkout` settings and unenrolls merchant from `Checkout` program.
		 * Delete {merchantId}/freelistingsprogram/checkoutsettings
		 * @param {string} merchantId Required. The ID of the account.
		 * @return {void} Successful response
		 */
		Content_freelistingsprogram_checkoutsettings_delete(merchantId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/freelistingsprogram/checkoutsettings', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets Checkout settings for the given merchant. This includes information about review state, enrollment state and URL settings.
		 * Get {merchantId}/freelistingsprogram/checkoutsettings
		 * @param {string} merchantId Required. The ID of the account.
		 * @return {CheckoutSettings} Successful response
		 */
		Content_freelistingsprogram_checkoutsettings_get(merchantId: string): Observable<CheckoutSettings> {
			return this.http.get<CheckoutSettings>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/freelistingsprogram/checkoutsettings', {});
		}

		/**
		 * Enrolls merchant in `Checkout` program.
		 * Post {merchantId}/freelistingsprogram/checkoutsettings
		 * @param {string} merchantId Required. The ID of the account.
		 * @return {CheckoutSettings} Successful response
		 */
		Content_freelistingsprogram_checkoutsettings_insert(merchantId: string, requestBody: InsertCheckoutSettingsRequest): Observable<CheckoutSettings> {
			return this.http.post<CheckoutSettings>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/freelistingsprogram/checkoutsettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Requests a review of free listings in a specific region. This method deprecated. Use the `MerchantSupportService` to view product and account issues and request a review.
		 * Post {merchantId}/freelistingsprogram/requestreview
		 * @param {string} merchantId Required. The ID of the account.
		 * @return {void} Successful response
		 */
		Content_freelistingsprogram_requestreview(merchantId: string, requestBody: RequestReviewFreeListingsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/freelistingsprogram/requestreview', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * @return {LiaSettings} Successful response
		 */
		Content_liasettings_update(merchantId: string, accountId: string, requestBody: LiaSettings): Observable<LiaSettings> {
			return this.http.put<LiaSettings>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the list of accessible Business Profiles.
		 * Get {merchantId}/liasettings/{accountId}/accessiblegmbaccounts
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to retrieve accessible Business Profiles.
		 * @return {LiasettingsGetAccessibleGmbAccountsResponse} Successful response
		 */
		Content_liasettings_getaccessiblegmbaccounts(merchantId: string, accountId: string): Observable<LiasettingsGetAccessibleGmbAccountsResponse> {
			return this.http.get<LiasettingsGetAccessibleGmbAccountsResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/accessiblegmbaccounts', {});
		}

		/**
		 * Requests access to a specified Business Profile.
		 * Post {merchantId}/liasettings/{accountId}/requestgmbaccess
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which Business Profile access is requested.
		 * @param {string} gmbEmail The email of the Business Profile.
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
		 * Sets the omnichannel experience for the specified country. Only supported for merchants whose POS data provider is trusted to enable the corresponding experience. For more context, see these help articles [about LFP](https://support.google.com/merchants/answer/7676652) and [how to get started](https://support.google.com/merchants/answer/7676578) with it.
		 * Post {merchantId}/liasettings/{accountId}/setomnichannelexperience
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to retrieve accessible Business Profiles.
		 * @param {string} country The CLDR country code (for example, "US") for which the omnichannel experience is selected.
		 * @param {string} lsfType The Local Store Front (LSF) type for this country. Acceptable values are: - "`ghlsf`" (Google-Hosted Local Store Front) - "`mhlsfBasic`" (Merchant-Hosted Local Store Front Basic) - "`mhlsfFull`" (Merchant-Hosted Local Store Front Full) More details about these types can be found here.
		 * @param {Array<string>} pickupTypes The Pickup types for this country. Acceptable values are: - "`pickupToday`" - "`pickupLater`" 
		 * @return {LiaOmnichannelExperience} Successful response
		 */
		Content_liasettings_setomnichannelexperience(merchantId: string, accountId: string, country: string | null | undefined, lsfType: string | null | undefined, pickupTypes: Array<string> | null | undefined): Observable<LiaOmnichannelExperience> {
			return this.http.post<LiaOmnichannelExperience>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/setomnichannelexperience&country=' + (country == null ? '' : encodeURIComponent(country)) + '&lsfType=' + (lsfType == null ? '' : encodeURIComponent(lsfType)) + '&' + pickupTypes?.map(z => `pickupTypes=${encodeURIComponent(z)}`).join('&') + '', null, {});
		}

		/**
		 * Sets the POS data provider for the specified country.
		 * Post {merchantId}/liasettings/{accountId}/setposdataprovider
		 * @param {string} merchantId The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.
		 * @param {string} accountId The ID of the account for which to retrieve accessible Business Profiles.
		 * @param {string} country The country for which the POS data provider is selected.
		 * @param {string} posDataProviderId The ID of POS data provider.
		 * @param {string} posExternalAccountId The account ID by which this merchant is known to the POS data provider.
		 * @return {LiasettingsSetPosDataProviderResponse} Successful response
		 */
		Content_liasettings_setposdataprovider(merchantId: string, accountId: string, country: string, posDataProviderId: string | null | undefined, posExternalAccountId: string | null | undefined): Observable<LiasettingsSetPosDataProviderResponse> {
			return this.http.post<LiasettingsSetPosDataProviderResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/liasettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/setposdataprovider&country=' + (country == null ? '' : encodeURIComponent(country)) + '&posDataProviderId=' + (posDataProviderId == null ? '' : encodeURIComponent(posDataProviderId)) + '&posExternalAccountId=' + (posExternalAccountId == null ? '' : encodeURIComponent(posExternalAccountId)) + '', null, {});
		}

		/**
		 * Provide a list of merchant's issues with a support content and available actions. This content and actions are meant to be rendered and shown in third-party applications.
		 * Post {merchantId}/merchantsupport/renderaccountissues
		 * @param {string} merchantId Required. The ID of the account to fetch issues for.
		 * @param {string} languageCode Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize support content. If not set, the result will be in default language `en-US`.
		 * @param {string} timeZone Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in support content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC.
		 * @return {RenderAccountIssuesResponse} Successful response
		 */
		Content_merchantsupport_renderaccountissues(merchantId: string, languageCode: string | null | undefined, timeZone: string | null | undefined, requestBody: RenderAccountIssuesRequestPayload): Observable<RenderAccountIssuesResponse> {
			return this.http.post<RenderAccountIssuesResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/merchantsupport/renderaccountissues&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&timeZone=' + (timeZone == null ? '' : encodeURIComponent(timeZone)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provide a list of issues for merchant's product with a support content and available actions. This content and actions are meant to be rendered and shown in third-party applications.
		 * Post {merchantId}/merchantsupport/renderproductissues/{productId}
		 * @param {string} merchantId Required. The ID of the account that contains the product.
		 * @param {string} productId Required. The [REST_ID](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.id) of the product to fetch issues for.
		 * @param {string} languageCode Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize support content. If not set, the result will be in default language `en-US`.
		 * @param {string} timeZone Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in support content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC.
		 * @return {RenderProductIssuesResponse} Successful response
		 */
		Content_merchantsupport_renderproductissues(merchantId: string, productId: string, languageCode: string | null | undefined, timeZone: string | null | undefined, requestBody: RenderProductIssuesRequestPayload): Observable<RenderProductIssuesResponse> {
			return this.http.post<RenderProductIssuesResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/merchantsupport/renderproductissues/' + (productId == null ? '' : encodeURIComponent(productId)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&timeZone=' + (timeZone == null ? '' : encodeURIComponent(timeZone)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @param {boolean} acknowledged Obtains order returns that match the acknowledgement status. When set to true, obtains order returns that have been acknowledged. When false, obtains order returns that have not been acknowledged. When not provided, obtains order returns regardless of their acknowledgement status. We recommend using this filter set to `false`, in conjunction with the `acknowledge` call, such that only un-acknowledged order returns are returned. 
		 * @param {string} createdEndDate Obtains order returns created before this date (inclusively), in ISO 8601 format.
		 * @param {string} createdStartDate Obtains order returns created after this date (inclusively), in ISO 8601 format.
		 * @param {Array<string>} googleOrderIds Obtains order returns with the specified order ids. If this parameter is provided, createdStartDate, createdEndDate, shipmentType, shipmentStatus, shipmentState and acknowledged parameters must be not set. Note: if googleOrderId and shipmentTrackingNumber parameters are provided, the obtained results will include all order returns that either match the specified order id or the specified tracking number.
		 * @param {number} maxResults The maximum number of order returns to return in the response, used for paging. The default value is 25 returns per page, and the maximum allowed value is 250 returns per page.
		 * @param {Content_orderreturns_listOrderBy} orderBy Return the results in the specified order.
		 * @param {string} pageToken The token returned by the previous request.
		 * @param {Array<string>} shipmentStates Obtains order returns that match any shipment state provided in this parameter. When this parameter is not provided, order returns are obtained regardless of their shipment states.
		 * @param {Array<string>} shipmentStatus Obtains order returns that match any shipment status provided in this parameter. When this parameter is not provided, order returns are obtained regardless of their shipment statuses.
		 * @param {Array<string>} shipmentTrackingNumbers Obtains order returns with the specified tracking numbers. If this parameter is provided, createdStartDate, createdEndDate, shipmentType, shipmentStatus, shipmentState and acknowledged parameters must be not set. Note: if googleOrderId and shipmentTrackingNumber parameters are provided, the obtained results will include all order returns that either match the specified order id or the specified tracking number.
		 * @param {Array<string>} shipmentTypes Obtains order returns that match any shipment type provided in this parameter. When this parameter is not provided, order returns are obtained regardless of their shipment types.
		 * @return {OrderreturnsListResponse} Successful response
		 */
		Content_orderreturns_list(merchantId: string, acknowledged: boolean | null | undefined, createdEndDate: string | null | undefined, createdStartDate: string | null | undefined, googleOrderIds: Array<string> | null | undefined, maxResults: number | null | undefined, orderBy: Content_orderreturns_listOrderBy | null | undefined, pageToken: string | null | undefined, shipmentStates: Array<string> | null | undefined, shipmentStatus: Array<string> | null | undefined, shipmentTrackingNumbers: Array<string> | null | undefined, shipmentTypes: Array<string> | null | undefined): Observable<OrderreturnsListResponse> {
			return this.http.get<OrderreturnsListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orderreturns&acknowledged=' + acknowledged + '&createdEndDate=' + (createdEndDate == null ? '' : encodeURIComponent(createdEndDate)) + '&createdStartDate=' + (createdStartDate == null ? '' : encodeURIComponent(createdStartDate)) + '&' + googleOrderIds?.map(z => `googleOrderIds=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + shipmentStates?.map(z => `shipmentStates=${encodeURIComponent(z)}`).join('&') + '&' + shipmentStatus?.map(z => `shipmentStatus=${encodeURIComponent(z)}`).join('&') + '&' + shipmentTrackingNumbers?.map(z => `shipmentTrackingNumbers=${encodeURIComponent(z)}`).join('&') + '&' + shipmentTypes?.map(z => `shipmentTypes=${encodeURIComponent(z)}`).join('&') + '', {});
		}

		/**
		 * Create return in your Merchant Center account.
		 * Post {merchantId}/orderreturns/createOrderReturn
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @return {OrderreturnsCreateOrderReturnResponse} Successful response
		 */
		Content_orderreturns_createorderreturn(merchantId: string, requestBody: OrderreturnsCreateOrderReturnRequest): Observable<OrderreturnsCreateOrderReturnResponse> {
			return this.http.post<OrderreturnsCreateOrderReturnResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orderreturns/createOrderReturn', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Acks an order return in your Merchant Center account.
		 * Post {merchantId}/orderreturns/{returnId}/acknowledge
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} returnId The ID of the return.
		 * @return {OrderreturnsAcknowledgeResponse} Successful response
		 */
		Content_orderreturns_acknowledge(merchantId: string, returnId: string, requestBody: OrderreturnsAcknowledgeRequest): Observable<OrderreturnsAcknowledgeResponse> {
			return this.http.post<OrderreturnsAcknowledgeResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orderreturns/' + (returnId == null ? '' : encodeURIComponent(returnId)) + '/acknowledge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Links a return shipping label to a return id. You can only create one return label per return id. Since the label is sent to the buyer, the linked return label cannot be updated or deleted. If you try to create multiple return shipping labels for a single return id, every create request except the first will fail.
		 * Post {merchantId}/orderreturns/{returnId}/labels
		 * @param {string} merchantId Required. The merchant the Return Shipping Label belongs to.
		 * @param {string} returnId Required. Provide the Google-generated merchant order return ID.
		 * @return {ReturnShippingLabel} Successful response
		 */
		Content_orderreturns_labels_create(merchantId: string, returnId: string, requestBody: ReturnShippingLabel): Observable<ReturnShippingLabel> {
			return this.http.post<ReturnShippingLabel>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orderreturns/' + (returnId == null ? '' : encodeURIComponent(returnId)) + '/labels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Processes return in your Merchant Center account.
		 * Post {merchantId}/orderreturns/{returnId}/process
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} returnId The ID of the return.
		 * @return {OrderreturnsProcessResponse} Successful response
		 */
		Content_orderreturns_process(merchantId: string, returnId: string, requestBody: OrderreturnsProcessRequest): Observable<OrderreturnsProcessResponse> {
			return this.http.post<OrderreturnsProcessResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orderreturns/' + (returnId == null ? '' : encodeURIComponent(returnId)) + '/process', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @param {Array<string>} statuses Obtains orders that match any of the specified statuses. Note that `active` is a shortcut for `pendingShipment` and `partiallyShipped`, and `completed` is a shortcut for `shipped`, `partiallyDelivered`, `delivered`, `partiallyReturned`, `returned`, and `canceled`.
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
		 * Capture funds from the customer for the current order total. This method should be called after the merchant verifies that they are able and ready to start shipping the order. This method blocks until a response is received from the payment processsor. If this method succeeds, the merchant is guaranteed to receive funds for the order after shipment. If the request fails, it can be retried or the order may be cancelled. This method cannot be called after the entire order is already shipped. A rejected error code is returned when the payment service provider has declined the charge. This indicates a problem between the PSP and either the merchant's or customer's account. Sometimes this error will be resolved by the customer. We recommend retrying these errors once per day or cancelling the order with reason `failedToCaptureFunds` if the items cannot be held.
		 * Post {merchantId}/orders/{orderId}/captureOrder
		 * @param {string} merchantId Required. The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId Required. The ID of the Order.
		 * @return {CaptureOrderResponse} Successful response
		 */
		Content_orders_captureOrder(merchantId: string, orderId: string, requestBody: CaptureOrderRequest): Observable<CaptureOrderResponse> {
			return this.http.post<CaptureOrderResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/captureOrder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (for example, cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding through Google then through an in-store return.
		 * Post {merchantId}/orders/{orderId}/inStoreRefundLineItem
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {OrdersInStoreRefundLineItemResponse} Successful response
		 */
		Content_orders_instorerefundlineitem(merchantId: string, orderId: string, requestBody: OrdersInStoreRefundLineItemRequest): Observable<OrdersInStoreRefundLineItemResponse> {
			return this.http.post<OrdersInStoreRefundLineItemResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/inStoreRefundLineItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Issues a partial or total refund for items and shipment.
		 * Post {merchantId}/orders/{orderId}/refunditem
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order to refund.
		 * @return {OrdersRefundItemResponse} Successful response
		 */
		Content_orders_refunditem(merchantId: string, orderId: string, requestBody: OrdersRefundItemRequest): Observable<OrdersRefundItemResponse> {
			return this.http.post<OrdersRefundItemResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/refunditem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Issues a partial or total refund for an order.
		 * Post {merchantId}/orders/{orderId}/refundorder
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order to refund.
		 * @return {OrdersRefundOrderResponse} Successful response
		 */
		Content_orders_refundorder(merchantId: string, orderId: string, requestBody: OrdersRefundOrderRequest): Observable<OrdersRefundOrderResponse> {
			return this.http.post<OrdersRefundOrderResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/refundorder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Returns and refunds a line item. Note that this method can only be called on fully shipped orders. The Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.
		 * Post {merchantId}/orders/{orderId}/returnRefundLineItem
		 * @param {string} merchantId The ID of the account that manages the order. This cannot be a multi-client account.
		 * @param {string} orderId The ID of the order.
		 * @return {OrdersReturnRefundLineItemResponse} Successful response
		 */
		Content_orders_returnrefundlineitem(merchantId: string, orderId: string, requestBody: OrdersReturnRefundLineItemRequest): Observable<OrdersReturnRefundLineItemResponse> {
			return this.http.post<OrdersReturnRefundLineItemResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/orders/' + (orderId == null ? '' : encodeURIComponent(orderId)) + '/returnRefundLineItem', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided through other methods. Submitted key-value pairs can be retrieved as part of the orders resource.
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
		 * Creates new order tracking signal.
		 * Post {merchantId}/ordertrackingsignals
		 * @param {string} merchantId The ID of the merchant for which the order signal is created.
		 * @return {OrderTrackingSignal} Successful response
		 */
		Content_ordertrackingsignals_create(merchantId: string, requestBody: OrderTrackingSignal): Observable<OrderTrackingSignal> {
			return this.http.post<OrderTrackingSignal>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/ordertrackingsignals', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Submit inventory for the given merchant.
		 * Post {merchantId}/pos/{targetMerchantId}/inventory
		 * @param {string} merchantId The ID of the POS or inventory data provider.
		 * @param {string} targetMerchantId The ID of the target merchant.
		 * @return {PosInventoryResponse} Successful response
		 */
		Content_pos_inventory(merchantId: string, targetMerchantId: string, requestBody: PosInventoryRequest): Observable<PosInventoryResponse> {
			return this.http.post<PosInventoryResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/pos/' + (targetMerchantId == null ? '' : encodeURIComponent(targetMerchantId)) + '/inventory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Submit a sale event for the given merchant.
		 * Post {merchantId}/pos/{targetMerchantId}/sale
		 * @param {string} merchantId The ID of the POS or inventory data provider.
		 * @param {string} targetMerchantId The ID of the target merchant.
		 * @return {PosSaleResponse} Successful response
		 */
		Content_pos_sale(merchantId: string, targetMerchantId: string, requestBody: PosSaleRequest): Observable<PosSaleResponse> {
			return this.http.post<PosSaleResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/pos/' + (targetMerchantId == null ? '' : encodeURIComponent(targetMerchantId)) + '/sale', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @return {PosStore} Successful response
		 */
		Content_pos_insert(merchantId: string, targetMerchantId: string, requestBody: PosStore): Observable<PosStore> {
			return this.http.post<PosStore>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/pos/' + (targetMerchantId == null ? '' : encodeURIComponent(targetMerchantId)) + '/store', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a store for the given merchant.
		 * Delete {merchantId}/pos/{targetMerchantId}/store/{storeCode}
		 * @param {string} merchantId The ID of the POS or inventory data provider.
		 * @param {string} targetMerchantId The ID of the target merchant.
		 * @param {string} storeCode A store code that is unique per merchant.
		 * @return {void} Successful response
		 */
		Content_pos_delete(merchantId: string, targetMerchantId: string, storeCode: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/pos/' + (targetMerchantId == null ? '' : encodeURIComponent(targetMerchantId)) + '/store/' + (storeCode == null ? '' : encodeURIComponent(storeCode)) + '', { observe: 'response', responseType: 'text' });
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
		 * Creates or updates the delivery time of a product.
		 * Post {merchantId}/productdeliverytime
		 * @param {string} merchantId The Google merchant ID of the account that contains the product. This account cannot be a multi-client account.
		 * @return {ProductDeliveryTime} Successful response
		 */
		Content_productdeliverytime_create(merchantId: string, requestBody: ProductDeliveryTime): Observable<ProductDeliveryTime> {
			return this.http.post<ProductDeliveryTime>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/productdeliverytime', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the delivery time of a product.
		 * Delete {merchantId}/productdeliverytime/{productId}
		 * @param {string} merchantId Required. The Google merchant ID of the account that contains the product. This account cannot be a multi-client account.
		 * @param {string} productId Required. The Content API ID of the product, in the form `channel:contentLanguage:targetCountry:offerId`.
		 * @return {void} Successful response
		 */
		Content_productdeliverytime_delete(merchantId: string, productId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/productdeliverytime/' + (productId == null ? '' : encodeURIComponent(productId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets `productDeliveryTime` by `productId`.
		 * Get {merchantId}/productdeliverytime/{productId}
		 * @param {string} merchantId Required. The Google merchant ID of the account that contains the product. This account cannot be a multi-client account.
		 * @param {string} productId Required. The Content API ID of the product, in the form `channel:contentLanguage:targetCountry:offerId`.
		 * @return {ProductDeliveryTime} Successful response
		 */
		Content_productdeliverytime_get(merchantId: string, productId: string): Observable<ProductDeliveryTime> {
			return this.http.get<ProductDeliveryTime>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/productdeliverytime/' + (productId == null ? '' : encodeURIComponent(productId)) + '', {});
		}

		/**
		 * Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.
		 * Get {merchantId}/products
		 * @param {string} merchantId The ID of the account that contains the products. This account cannot be a multi-client account.
		 * @param {number} maxResults The maximum number of products to return in the response, used for paging. The default value is 25. The maximum value is 250.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {ProductsListResponse} Successful response
		 */
		Content_products_list(merchantId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<ProductsListResponse> {
			return this.http.get<ProductsListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/products&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
		 * Post {merchantId}/products
		 * @param {string} merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
		 * @param {string} feedId The Content API Supplemental Feed ID. If present then product insertion applies to the data in a supplemental feed.
		 * @return {Product} Successful response
		 */
		Content_products_insert(merchantId: string, feedId: string | null | undefined, requestBody: Product): Observable<Product> {
			return this.http.post<Product>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/products&feedId=' + (feedId == null ? '' : encodeURIComponent(feedId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a product from your Merchant Center account.
		 * Delete {merchantId}/products/{productId}
		 * @param {string} merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
		 * @param {string} productId The REST ID of the product.
		 * @param {string} feedId The Content API Supplemental Feed ID. If present then product deletion applies to the data in a supplemental feed. If absent, entire product will be deleted.
		 * @return {void} Successful response
		 */
		Content_products_delete(merchantId: string, productId: string, feedId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '&feedId=' + (feedId == null ? '' : encodeURIComponent(feedId)) + '', { observe: 'response', responseType: 'text' });
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
		 * Updates an existing product in your Merchant Center account. Only updates attributes provided in the request.
		 * Patch {merchantId}/products/{productId}
		 * @param {string} merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
		 * @param {string} productId The REST ID of the product for which to update.
		 * @param {string} updateMask The comma-separated list of product attributes to be updated. Example: `"title,salePrice"`. Attributes specified in the update mask without a value specified in the body will be deleted from the product. *You must specify the update mask to delete attributes.* Only top-level product attributes can be updated. If not defined, product attributes with set values will be updated and other attributes will stay unchanged.
		 * @return {Product} Successful response
		 */
		Content_products_update(merchantId: string, productId: string, updateMask: string | null | undefined, requestBody: Product): Observable<Product> {
			return this.http.patch<Product>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the local inventory of a product in your Merchant Center account.
		 * Post {merchantId}/products/{productId}/localinventory
		 * @param {string} merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
		 * @param {string} productId The REST ID of the product for which to update local inventory.
		 * @return {LocalInventory} Successful response
		 */
		Content_localinventory_insert(merchantId: string, productId: string, requestBody: LocalInventory): Observable<LocalInventory> {
			return this.http.post<LocalInventory>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/localinventory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.
		 * Post {merchantId}/products/{productId}/regionalinventory
		 * @param {string} merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
		 * @param {string} productId The REST ID of the product for which to update the regional inventory.
		 * @return {RegionalInventory} Successful response
		 */
		Content_regionalinventory_insert(merchantId: string, productId: string, requestBody: RegionalInventory): Observable<RegionalInventory> {
			return this.http.post<RegionalInventory>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/regionalinventory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the statuses of the products in your Merchant Center account.
		 * Get {merchantId}/productstatuses
		 * @param {string} merchantId The ID of the account that contains the products. This account cannot be a multi-client account.
		 * @param {Array<string>} destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
		 * @param {number} maxResults The maximum number of product statuses to return in the response, used for paging. The default value is 25. The maximum value is 250.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {ProductstatusesListResponse} Successful response
		 */
		Content_productstatuses_list(merchantId: string, destinations: Array<string> | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<ProductstatusesListResponse> {
			return this.http.get<ProductstatusesListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/productstatuses&' + destinations?.map(z => `destinations=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Gets the status of a product from your Merchant Center account.
		 * Get {merchantId}/productstatuses/{productId}
		 * @param {string} merchantId The ID of the account that contains the product. This account cannot be a multi-client account.
		 * @param {string} productId The REST ID of the product.
		 * @param {Array<string>} destinations If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
		 * @return {ProductStatus} Successful response
		 */
		Content_productstatuses_get(merchantId: string, productId: string, destinations: Array<string> | null | undefined): Observable<ProductStatus> {
			return this.http.get<ProductStatus>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/productstatuses/' + (productId == null ? '' : encodeURIComponent(productId)) + '&' + destinations?.map(z => `destinations=${encodeURIComponent(z)}`).join('&') + '', {});
		}

		/**
		 * List all promotions from your Merchant Center account.
		 * Get {merchantId}/promotions
		 * @param {string} merchantId Required. The ID of the account that contains the collection.
		 * @param {string} countryCode [CLDR country code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) (for example, "US"), used as a filter on promotions target country.
		 * @param {string} languageCode The two-letter ISO 639-1 language code associated with the promotions, used as a filter.
		 * @param {number} pageSize The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 labels will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListPromotion` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotion` must match the call that provided the page token.
		 * @return {ListPromotionResponse} Successful response
		 */
		Content_promotions_list(merchantId: string, countryCode: string | null | undefined, languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPromotionResponse> {
			return this.http.get<ListPromotionResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/promotions&countryCode=' + (countryCode == null ? '' : encodeURIComponent(countryCode)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead. To [end or delete] (https://developers.google.com/shopping-content/guides/promotions#end_a_promotion) a promotion update the time period of the promotion to a time that has already passed.
		 * Post {merchantId}/promotions
		 * @param {string} merchantId Required. The ID of the account that contains the collection.
		 * @return {Promotion} Successful response
		 */
		Content_promotions_create(merchantId: string, requestBody: Promotion): Observable<Promotion> {
			return this.http.post<Promotion>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/promotions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a promotion from your Merchant Center account.
		 * Get {merchantId}/promotions/{id}
		 * @param {string} merchantId Required. The ID of the account that contains the collection.
		 * @param {string} id Required. REST ID of the promotion to retrieve.
		 * @return {Promotion} Successful response
		 */
		Content_promotions_get(merchantId: string, id: string): Observable<Promotion> {
			return this.http.get<Promotion>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/promotions/' + (id == null ? '' : encodeURIComponent(id)) + '', {});
		}

		/**
		 * Retrieves a Merchant Center account's pubsub notification settings.
		 * Get {merchantId}/pubsubnotificationsettings
		 * @param {string} merchantId The ID of the account for which to get pubsub notification settings.
		 * @return {PubsubNotificationSettings} Successful response
		 */
		Content_pubsubnotificationsettings_get(merchantId: string): Observable<PubsubNotificationSettings> {
			return this.http.get<PubsubNotificationSettings>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/pubsubnotificationsettings', {});
		}

		/**
		 * Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request.
		 * Put {merchantId}/pubsubnotificationsettings
		 * @param {string} merchantId The ID of the account.
		 * @return {PubsubNotificationSettings} Successful response
		 */
		Content_pubsubnotificationsettings_update(merchantId: string, requestBody: PubsubNotificationSettings): Observable<PubsubNotificationSettings> {
			return this.http.put<PubsubNotificationSettings>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/pubsubnotificationsettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the daily call quota and usage per method for your Merchant Center account.
		 * Get {merchantId}/quotas
		 * @param {string} merchantId Required. The ID of the account that has quota. This account must be an admin.
		 * @param {number} pageSize The maximum number of quotas to return in the response, used for paging. Defaults to 500; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
		 * @return {ListMethodQuotasResponse} Successful response
		 */
		Content_quotas_list(merchantId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListMethodQuotasResponse> {
			return this.http.get<ListMethodQuotasResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/quotas&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Generates recommendations for a merchant.
		 * Get {merchantId}/recommendations/generate
		 * @param {string} merchantId Required. The ID of the account to fetch recommendations for.
		 * @param {Array<string>} allowedTag Optional. List of allowed tags. Tags are a set of predefined strings that describe the category that individual recommendation types belong to. User can specify zero or more tags in this field to indicate what categories of recommendations they want to receive. Current list of supported tags: - TREND
		 * @param {string} languageCode Optional. Language code of the client. If not set, the result will be in default language (English). This language code affects all fields prefixed with "localized". This should be set to ISO 639-1 country code. List of currently verified supported language code: en, fr, cs, da, de, es, it, nl, no, pl, pt, pt, fi, sv, vi, tr, th, ko, zh-CN, zh-TW, ja, id, hi
		 * @return {GenerateRecommendationsResponse} Successful response
		 */
		Content_recommendations_generate(merchantId: string, allowedTag: Array<string> | null | undefined, languageCode: string | null | undefined): Observable<GenerateRecommendationsResponse> {
			return this.http.get<GenerateRecommendationsResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/recommendations/generate&' + allowedTag?.map(z => `allowedTag=${encodeURIComponent(z)}`).join('&') + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '', {});
		}

		/**
		 * Reports an interaction on a recommendation for a merchant.
		 * Post {merchantId}/recommendations/reportInteraction
		 * @param {string} merchantId Required. The ID of the account that wants to report an interaction.
		 * @return {void} Successful response
		 */
		Content_recommendations_reportInteraction(merchantId: string, requestBody: ReportInteractionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/recommendations/reportInteraction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the regions in your Merchant Center account.
		 * Get {merchantId}/regions
		 * @param {string} merchantId Required. The id of the merchant for which to list region definitions.
		 * @param {number} pageSize The maximum number of regions to return. The service may return fewer than this value. If unspecified, at most 50 rules will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListRegions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRegions` must match the call that provided the page token.
		 * @return {ListRegionsResponse} Successful response
		 */
		Content_regions_list(merchantId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListRegionsResponse> {
			return this.http.get<ListRegionsResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/regions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Creates a region definition in your Merchant Center account.
		 * Post {merchantId}/regions
		 * @param {string} merchantId Required. The id of the merchant for which to create region definition.
		 * @param {string} regionId Required. The id of the region to create.
		 * @return {Region} Successful response
		 */
		Content_regions_create(merchantId: string, regionId: string | null | undefined, requestBody: Region): Observable<Region> {
			return this.http.post<Region>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/regions&regionId=' + (regionId == null ? '' : encodeURIComponent(regionId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a region definition from your Merchant Center account.
		 * Delete {merchantId}/regions/{regionId}
		 * @param {string} merchantId Required. The id of the merchant for which to delete region definition.
		 * @param {string} regionId Required. The id of the region to delete.
		 * @return {void} Successful response
		 */
		Content_regions_delete(merchantId: string, regionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/regions/' + (regionId == null ? '' : encodeURIComponent(regionId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a region defined in your Merchant Center account.
		 * Get {merchantId}/regions/{regionId}
		 * @param {string} merchantId Required. The id of the merchant for which to retrieve region definition.
		 * @param {string} regionId Required. The id of the region to retrieve.
		 * @return {Region} Successful response
		 */
		Content_regions_get(merchantId: string, regionId: string): Observable<Region> {
			return this.http.get<Region>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/regions/' + (regionId == null ? '' : encodeURIComponent(regionId)) + '', {});
		}

		/**
		 * Updates a region definition in your Merchant Center account.
		 * Patch {merchantId}/regions/{regionId}
		 * @param {string} merchantId Required. The id of the merchant for which to update region definition.
		 * @param {string} regionId Required. The id of the region to update.
		 * @param {string} updateMask Optional. The comma-separated field mask indicating the fields to update. Example: `"displayName,postalCodeArea.regionCode"`.
		 * @return {Region} Successful response
		 */
		Content_regions_patch(merchantId: string, regionId: string, updateMask: string | null | undefined, requestBody: Region): Observable<Region> {
			return this.http.patch<Region>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/regions/' + (regionId == null ? '' : encodeURIComponent(regionId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves merchant performance mertrics matching the search query and optionally segmented by selected dimensions.
		 * Post {merchantId}/reports/search
		 * @param {string} merchantId Required. Id of the merchant making the call. Must be a standalone account or an MCA subaccount.
		 * @return {SearchResponse} Successful response
		 */
		Content_reports_search(merchantId: string, requestBody: SearchRequest): Observable<SearchResponse> {
			return this.http.post<SearchResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/reports/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the return addresses of the Merchant Center account.
		 * Get {merchantId}/returnaddress
		 * @param {string} merchantId The Merchant Center account to list return addresses for.
		 * @param {string} country List only return addresses applicable to the given country of sale. When omitted, all return addresses are listed.
		 * @param {number} maxResults The maximum number of addresses in the response, used for paging.
		 * @param {string} pageToken The token returned by the previous request.
		 * @return {ReturnaddressListResponse} Successful response
		 */
		Content_returnaddress_list(merchantId: string, country: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<ReturnaddressListResponse> {
			return this.http.get<ReturnaddressListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/returnaddress&country=' + (country == null ? '' : encodeURIComponent(country)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '', {});
		}

		/**
		 * Inserts a return address for the Merchant Center account.
		 * Post {merchantId}/returnaddress
		 * @param {string} merchantId The Merchant Center account to insert a return address for.
		 * @return {ReturnAddress} Successful response
		 */
		Content_returnaddress_insert(merchantId: string, requestBody: ReturnAddress): Observable<ReturnAddress> {
			return this.http.post<ReturnAddress>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/returnaddress', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a return address for the given Merchant Center account.
		 * Delete {merchantId}/returnaddress/{returnAddressId}
		 * @param {string} merchantId The Merchant Center account from which to delete the given return address.
		 * @param {string} returnAddressId Return address ID generated by Google.
		 * @return {void} Successful response
		 */
		Content_returnaddress_delete(merchantId: string, returnAddressId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/returnaddress/' + (returnAddressId == null ? '' : encodeURIComponent(returnAddressId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a return address of the Merchant Center account.
		 * Get {merchantId}/returnaddress/{returnAddressId}
		 * @param {string} merchantId The Merchant Center account to get a return address for.
		 * @param {string} returnAddressId Return address ID generated by Google.
		 * @return {ReturnAddress} Successful response
		 */
		Content_returnaddress_get(merchantId: string, returnAddressId: string): Observable<ReturnAddress> {
			return this.http.get<ReturnAddress>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/returnaddress/' + (returnAddressId == null ? '' : encodeURIComponent(returnAddressId)) + '', {});
		}

		/**
		 * Lists the return policies of the Merchant Center account.
		 * Get {merchantId}/returnpolicy
		 * @param {string} merchantId The Merchant Center account to list return policies for.
		 * @return {ReturnpolicyListResponse} Successful response
		 */
		Content_returnpolicy_list(merchantId: string): Observable<ReturnpolicyListResponse> {
			return this.http.get<ReturnpolicyListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/returnpolicy', {});
		}

		/**
		 * Inserts a return policy for the Merchant Center account.
		 * Post {merchantId}/returnpolicy
		 * @param {string} merchantId The Merchant Center account to insert a return policy for.
		 * @return {ReturnPolicy} Successful response
		 */
		Content_returnpolicy_insert(merchantId: string, requestBody: ReturnPolicy): Observable<ReturnPolicy> {
			return this.http.post<ReturnPolicy>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/returnpolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a return policy for the given Merchant Center account.
		 * Delete {merchantId}/returnpolicy/{returnPolicyId}
		 * @param {string} merchantId The Merchant Center account from which to delete the given return policy.
		 * @param {string} returnPolicyId Return policy ID generated by Google.
		 * @return {void} Successful response
		 */
		Content_returnpolicy_delete(merchantId: string, returnPolicyId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/returnpolicy/' + (returnPolicyId == null ? '' : encodeURIComponent(returnPolicyId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a return policy of the Merchant Center account.
		 * Get {merchantId}/returnpolicy/{returnPolicyId}
		 * @param {string} merchantId The Merchant Center account to get a return policy for.
		 * @param {string} returnPolicyId Return policy ID generated by Google.
		 * @return {ReturnPolicy} Successful response
		 */
		Content_returnpolicy_get(merchantId: string, returnPolicyId: string): Observable<ReturnPolicy> {
			return this.http.get<ReturnPolicy>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/returnpolicy/' + (returnPolicyId == null ? '' : encodeURIComponent(returnPolicyId)) + '', {});
		}

		/**
		 * Lists all existing return policies.
		 * Get {merchantId}/returnpolicyonline
		 * @param {string} merchantId Required. The id of the merchant for which to retrieve the return policy online object.
		 * @return {ListReturnPolicyOnlineResponse} Successful response
		 */
		Content_returnpolicyonline_list(merchantId: string): Observable<ListReturnPolicyOnlineResponse> {
			return this.http.get<ListReturnPolicyOnlineResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/returnpolicyonline', {});
		}

		/**
		 * Creates a new return policy.
		 * Post {merchantId}/returnpolicyonline
		 * @param {string} merchantId Required. The id of the merchant for which to retrieve the return policy online object.
		 * @return {ReturnPolicyOnline} Successful response
		 */
		Content_returnpolicyonline_create(merchantId: string, requestBody: ReturnPolicyOnline): Observable<ReturnPolicyOnline> {
			return this.http.post<ReturnPolicyOnline>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/returnpolicyonline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing return policy.
		 * Delete {merchantId}/returnpolicyonline/{returnPolicyId}
		 * @param {string} merchantId Required. The id of the merchant for which to retrieve the return policy online object.
		 * @param {string} returnPolicyId Required. The id of the return policy to delete.
		 * @return {void} Successful response
		 */
		Content_returnpolicyonline_delete(merchantId: string, returnPolicyId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/returnpolicyonline/' + (returnPolicyId == null ? '' : encodeURIComponent(returnPolicyId)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an existing return policy.
		 * Get {merchantId}/returnpolicyonline/{returnPolicyId}
		 * @param {string} merchantId Required. The id of the merchant for which to retrieve the return policy online object.
		 * @param {string} returnPolicyId Required. The id of the return policy to retrieve.
		 * @return {ReturnPolicyOnline} Successful response
		 */
		Content_returnpolicyonline_get(merchantId: string, returnPolicyId: string): Observable<ReturnPolicyOnline> {
			return this.http.get<ReturnPolicyOnline>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/returnpolicyonline/' + (returnPolicyId == null ? '' : encodeURIComponent(returnPolicyId)) + '', {});
		}

		/**
		 * Updates an existing return policy.
		 * Patch {merchantId}/returnpolicyonline/{returnPolicyId}
		 * @param {string} merchantId Required. The id of the merchant for which to retrieve the return policy online object.
		 * @param {string} returnPolicyId Required. The id of the return policy to update.
		 * @return {ReturnPolicyOnline} Successful response
		 */
		Content_returnpolicyonline_patch(merchantId: string, returnPolicyId: string, requestBody: ReturnPolicyOnline): Observable<ReturnPolicyOnline> {
			return this.http.patch<ReturnPolicyOnline>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/returnpolicyonline/' + (returnPolicyId == null ? '' : encodeURIComponent(returnPolicyId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of settlement reports from your Merchant Center account.
		 * Get {merchantId}/settlementreports
		 * @param {string} merchantId The Merchant Center account to list settlements for.
		 * @param {number} maxResults The maximum number of settlements to return in the response, used for paging. The default value is 200 returns per page, and the maximum allowed value is 5000 returns per page.
		 * @param {string} pageToken The token returned by the previous request.
		 * @param {string} transferEndDate Obtains settlements which have transactions before this date (inclusively), in ISO 8601 format.
		 * @param {string} transferStartDate Obtains settlements which have transactions after this date (inclusively), in ISO 8601 format.
		 * @return {SettlementreportsListResponse} Successful response
		 */
		Content_settlementreports_list(merchantId: string, maxResults: number | null | undefined, pageToken: string | null | undefined, transferEndDate: string | null | undefined, transferStartDate: string | null | undefined): Observable<SettlementreportsListResponse> {
			return this.http.get<SettlementreportsListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/settlementreports&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&transferEndDate=' + (transferEndDate == null ? '' : encodeURIComponent(transferEndDate)) + '&transferStartDate=' + (transferStartDate == null ? '' : encodeURIComponent(transferStartDate)) + '', {});
		}

		/**
		 * Retrieves a settlement report from your Merchant Center account.
		 * Get {merchantId}/settlementreports/{settlementId}
		 * @param {string} merchantId The Merchant Center account of the settlement report.
		 * @param {string} settlementId The Google-provided ID of the settlement.
		 * @return {SettlementReport} Successful response
		 */
		Content_settlementreports_get(merchantId: string, settlementId: string): Observable<SettlementReport> {
			return this.http.get<SettlementReport>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/settlementreports/' + (settlementId == null ? '' : encodeURIComponent(settlementId)) + '', {});
		}

		/**
		 * Retrieves a list of transactions for the settlement.
		 * Get {merchantId}/settlementreports/{settlementId}/transactions
		 * @param {string} merchantId The Merchant Center account to list transactions for.
		 * @param {string} settlementId The Google-provided ID of the settlement.
		 * @param {number} maxResults The maximum number of transactions to return in the response, used for paging. The default value is 200 transactions per page, and the maximum allowed value is 5000 transactions per page.
		 * @param {string} pageToken The token returned by the previous request.
		 * @param {Array<string>} transactionIds The list of transactions to return. If not set, all transactions will be returned.
		 * @return {SettlementtransactionsListResponse} Successful response
		 */
		Content_settlementtransactions_list(merchantId: string, settlementId: string, maxResults: number | null | undefined, pageToken: string | null | undefined, transactionIds: Array<string> | null | undefined): Observable<SettlementtransactionsListResponse> {
			return this.http.get<SettlementtransactionsListResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/settlementreports/' + (settlementId == null ? '' : encodeURIComponent(settlementId)) + '/transactions&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + transactionIds?.map(z => `transactionIds=${encodeURIComponent(z)}`).join('&') + '', {});
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
		 * @return {ShippingSettings} Successful response
		 */
		Content_shippingsettings_update(merchantId: string, accountId: string, requestBody: ShippingSettings): Observable<ShippingSettings> {
			return this.http.put<ShippingSettings>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/shippingsettings/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
		 * Get {merchantId}/shoppingadsprogram
		 * @param {string} merchantId Required. The ID of the account.
		 * @return {ShoppingAdsProgramStatus} Successful response
		 */
		Content_shoppingadsprogram_get(merchantId: string): Observable<ShoppingAdsProgramStatus> {
			return this.http.get<ShoppingAdsProgramStatus>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/shoppingadsprogram', {});
		}

		/**
		 * Requests a review of Shopping ads in a specific region. This method deprecated. Use the `MerchantSupportService` to view product and account issues and request a review.
		 * Post {merchantId}/shoppingadsprogram/requestreview
		 * @param {string} merchantId Required. The ID of the account.
		 * @return {void} Successful response
		 */
		Content_shoppingadsprogram_requestreview(merchantId: string, requestBody: RequestReviewShoppingAdsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/shoppingadsprogram/requestreview', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * @param {string} country The country of the template to retrieve. Defaults to "`US`".
		 * @return {OrdersGetTestOrderTemplateResponse} Successful response
		 */
		Content_orders_gettestordertemplate(merchantId: string, templateName: Content_orders_gettestordertemplateTemplateName, country: string | null | undefined): Observable<OrdersGetTestOrderTemplateResponse> {
			return this.http.get<OrdersGetTestOrderTemplateResponse>(this.baseUri + (merchantId == null ? '' : encodeURIComponent(merchantId)) + '/testordertemplates/' + templateName + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '', {});
		}
	}

	export enum Content_accounts_listView { MERCHANT = 0, CSS = 1 }

	export enum Content_orderreturns_listOrderBy { RETURN_CREATION_TIME_DESC = 0, RETURN_CREATION_TIME_ASC = 1 }

	export enum Content_orders_gettestordertemplateTemplateName { TEMPLATE1 = 0, TEMPLATE2 = 1, TEMPLATE1A = 2, TEMPLATE1B = 3, TEMPLATE3 = 4, TEMPLATE4 = 5 }

}

