import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request message for CloudChannelService.ActivateEntitlement. */
	export interface GoogleCloudChannelV1ActivateEntitlementRequest {

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId?: string | null;
	}

	/** Request message for CloudChannelService.ActivateEntitlement. */
	export interface GoogleCloudChannelV1ActivateEntitlementRequestFormProperties {

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ActivateEntitlementRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ActivateEntitlementRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information needed to create an Admin User for Google Workspace. */
	export interface GoogleCloudChannelV1AdminUser {

		/** Primary email of the admin user. */
		email?: string | null;

		/** Family name of the admin user. */
		familyName?: string | null;

		/** Given name of the admin user. */
		givenName?: string | null;
	}

	/** Information needed to create an Admin User for Google Workspace. */
	export interface GoogleCloudChannelV1AdminUserFormProperties {

		/** Primary email of the admin user. */
		email: FormControl<string | null | undefined>,

		/** Family name of the admin user. */
		familyName: FormControl<string | null | undefined>,

		/** Given name of the admin user. */
		givenName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1AdminUserFormGroup() {
		return new FormGroup<GoogleCloudChannelV1AdminUserFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			familyName: new FormControl<string | null | undefined>(undefined),
			givenName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Association links that an entitlement has to other entitlements. */
	export interface GoogleCloudChannelV1AssociationInfo {

		/** The name of the base entitlement, for which this entitlement is an add-on. */
		baseEntitlement?: string | null;
	}

	/** Association links that an entitlement has to other entitlements. */
	export interface GoogleCloudChannelV1AssociationInfoFormProperties {

		/** The name of the base entitlement, for which this entitlement is an add-on. */
		baseEntitlement: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1AssociationInfoFormGroup() {
		return new FormGroup<GoogleCloudChannelV1AssociationInfoFormProperties>({
			baseEntitlement: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the Billable SKU information. */
	export interface GoogleCloudChannelV1BillableSku {

		/** Resource name of Service which contains Repricing SKU. Format: services/{service}. Example: "services/B7D9-FDCB-15D8". */
		service?: string | null;

		/** Unique human readable name for the Service. */
		serviceDisplayName?: string | null;

		/** Resource name of Billable SKU. Format: billableSkus/{sku}. Example: billableSkus/6E1B-6634-470F". */
		sku?: string | null;

		/** Unique human readable name for the SKU. */
		skuDisplayName?: string | null;
	}

	/** Represents the Billable SKU information. */
	export interface GoogleCloudChannelV1BillableSkuFormProperties {

		/** Resource name of Service which contains Repricing SKU. Format: services/{service}. Example: "services/B7D9-FDCB-15D8". */
		service: FormControl<string | null | undefined>,

		/** Unique human readable name for the Service. */
		serviceDisplayName: FormControl<string | null | undefined>,

		/** Resource name of Billable SKU. Format: billableSkus/{sku}. Example: billableSkus/6E1B-6634-470F". */
		sku: FormControl<string | null | undefined>,

		/** Unique human readable name for the SKU. */
		skuDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1BillableSkuFormGroup() {
		return new FormGroup<GoogleCloudChannelV1BillableSkuFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
			serviceDisplayName: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			skuDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a billing account. */
	export interface GoogleCloudChannelV1BillingAccount {

		/** Output only. The time when this billing account was created. */
		createTime?: string | null;

		/** Output only. The 3-letter currency code defined in ISO 4217. */
		currencyCode?: string | null;

		/** Display name of the billing account. */
		displayName?: string | null;

		/** Output only. Resource name of the billing account. Format: accounts/{account_id}/billingAccounts/{billing_account_id}. */
		name?: string | null;

		/** Output only. The CLDR region code. */
		regionCode?: string | null;
	}

	/** Represents a billing account. */
	export interface GoogleCloudChannelV1BillingAccountFormProperties {

		/** Output only. The time when this billing account was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The 3-letter currency code defined in ISO 4217. */
		currencyCode: FormControl<string | null | undefined>,

		/** Display name of the billing account. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Resource name of the billing account. Format: accounts/{account_id}/billingAccounts/{billing_account_id}. */
		name: FormControl<string | null | undefined>,

		/** Output only. The CLDR region code. */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1BillingAccountFormGroup() {
		return new FormGroup<GoogleCloudChannelV1BillingAccountFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a billing account that can be used to make a purchase. */
	export interface GoogleCloudChannelV1BillingAccountPurchaseInfo {

		/** Represents a billing account. */
		billingAccount?: GoogleCloudChannelV1BillingAccount;
	}

	/** Represents a billing account that can be used to make a purchase. */
	export interface GoogleCloudChannelV1BillingAccountPurchaseInfoFormProperties {
	}
	export function CreateGoogleCloudChannelV1BillingAccountPurchaseInfoFormGroup() {
		return new FormGroup<GoogleCloudChannelV1BillingAccountPurchaseInfoFormProperties>({
		});

	}


	/** Request message for CloudChannelService.CancelEntitlement. */
	export interface GoogleCloudChannelV1CancelEntitlementRequest {

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId?: string | null;
	}

	/** Request message for CloudChannelService.CancelEntitlement. */
	export interface GoogleCloudChannelV1CancelEntitlementRequestFormProperties {

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1CancelEntitlementRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1CancelEntitlementRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CloudChannelService.ChangeOffer. */
	export interface GoogleCloudChannelV1ChangeOfferRequest {

		/** Optional. The billing account resource name that is used to pay for this entitlement when setting up billing on a trial subscription. This field is only relevant for multi-currency accounts. It should be left empty for single currency accounts. */
		billingAccount?: string | null;

		/** Required. New Offer. Format: accounts/{account_id}/offers/{offer_id}. */
		offer?: string | null;

		/** Optional. Parameters needed to purchase the Offer. To view the available Parameters refer to the Offer.parameter_definitions from the desired offer. */
		parameters?: Array<GoogleCloudChannelV1Parameter>;

		/** Optional. Purchase order id provided by the reseller. */
		purchaseOrderId?: string | null;

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId?: string | null;
	}

	/** Request message for CloudChannelService.ChangeOffer. */
	export interface GoogleCloudChannelV1ChangeOfferRequestFormProperties {

		/** Optional. The billing account resource name that is used to pay for this entitlement when setting up billing on a trial subscription. This field is only relevant for multi-currency accounts. It should be left empty for single currency accounts. */
		billingAccount: FormControl<string | null | undefined>,

		/** Required. New Offer. Format: accounts/{account_id}/offers/{offer_id}. */
		offer: FormControl<string | null | undefined>,

		/** Optional. Purchase order id provided by the reseller. */
		purchaseOrderId: FormControl<string | null | undefined>,

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ChangeOfferRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ChangeOfferRequestFormProperties>({
			billingAccount: new FormControl<string | null | undefined>(undefined),
			offer: new FormControl<string | null | undefined>(undefined),
			purchaseOrderId: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition for extended entitlement parameters. */
	export interface GoogleCloudChannelV1Parameter {

		/** Output only. Specifies whether this parameter is allowed to be changed. For example, for a Google Workspace Business Starter entitlement in commitment plan, num_units is editable when entitlement is active. */
		editable?: boolean | null;

		/** Name of the parameter. */
		name?: string | null;

		/** Data type and value of a parameter. */
		value?: GoogleCloudChannelV1Value;
	}

	/** Definition for extended entitlement parameters. */
	export interface GoogleCloudChannelV1ParameterFormProperties {

		/** Output only. Specifies whether this parameter is allowed to be changed. For example, for a Google Workspace Business Starter entitlement in commitment plan, num_units is editable when entitlement is active. */
		editable: FormControl<boolean | null | undefined>,

		/** Name of the parameter. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ParameterFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ParameterFormProperties>({
			editable: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data type and value of a parameter. */
	export interface GoogleCloudChannelV1Value {

		/** Represents a boolean value. */
		boolValue?: boolean | null;

		/** Represents a double value. */
		doubleValue?: number | null;

		/** Represents an int64 value. */
		int64Value?: string | null;

		/** Represents an 'Any' proto value. */
		protoValue?: {[id: string]: any };

		/** Represents a string value. */
		stringValue?: string | null;
	}

	/** Data type and value of a parameter. */
	export interface GoogleCloudChannelV1ValueFormProperties {

		/** Represents a boolean value. */
		boolValue: FormControl<boolean | null | undefined>,

		/** Represents a double value. */
		doubleValue: FormControl<number | null | undefined>,

		/** Represents an int64 value. */
		int64Value: FormControl<string | null | undefined>,

		/** Represents an 'Any' proto value. */
		protoValue: FormControl<{[id: string]: any } | null | undefined>,

		/** Represents a string value. */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ValueFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ValueFormProperties>({
			boolValue: new FormControl<boolean | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			int64Value: new FormControl<string | null | undefined>(undefined),
			protoValue: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CloudChannelService.ChangeParametersRequest. */
	export interface GoogleCloudChannelV1ChangeParametersRequest {

		/** Required. Entitlement parameters to update. You can only change editable parameters. To view the available Parameters for a request, refer to the Offer.parameter_definitions from the desired offer. */
		parameters?: Array<GoogleCloudChannelV1Parameter>;

		/** Optional. Purchase order ID provided by the reseller. */
		purchaseOrderId?: string | null;

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId?: string | null;
	}

	/** Request message for CloudChannelService.ChangeParametersRequest. */
	export interface GoogleCloudChannelV1ChangeParametersRequestFormProperties {

		/** Optional. Purchase order ID provided by the reseller. */
		purchaseOrderId: FormControl<string | null | undefined>,

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ChangeParametersRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ChangeParametersRequestFormProperties>({
			purchaseOrderId: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CloudChannelService.ChangeRenewalSettings. */
	export interface GoogleCloudChannelV1ChangeRenewalSettingsRequest {

		/** Renewal settings for renewable Offers. */
		renewalSettings?: GoogleCloudChannelV1RenewalSettings;

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId?: string | null;
	}

	/** Request message for CloudChannelService.ChangeRenewalSettings. */
	export interface GoogleCloudChannelV1ChangeRenewalSettingsRequestFormProperties {

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ChangeRenewalSettingsRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ChangeRenewalSettingsRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Renewal settings for renewable Offers. */
	export interface GoogleCloudChannelV1RenewalSettings {

		/** If false, the plan will be completed at the end date. */
		enableRenewal?: boolean | null;

		/** Represents period in days/months/years. */
		paymentCycle?: GoogleCloudChannelV1Period;

		/** Describes how a reseller will be billed. */
		paymentPlan?: GoogleCloudChannelV1RenewalSettingsPaymentPlan | null;

		/** If true and enable_renewal = true, the unit (for example seats or licenses) will be set to the number of active units at renewal time. */
		resizeUnitCount?: boolean | null;
	}

	/** Renewal settings for renewable Offers. */
	export interface GoogleCloudChannelV1RenewalSettingsFormProperties {

		/** If false, the plan will be completed at the end date. */
		enableRenewal: FormControl<boolean | null | undefined>,

		/** Describes how a reseller will be billed. */
		paymentPlan: FormControl<GoogleCloudChannelV1RenewalSettingsPaymentPlan | null | undefined>,

		/** If true and enable_renewal = true, the unit (for example seats or licenses) will be set to the number of active units at renewal time. */
		resizeUnitCount: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1RenewalSettingsFormGroup() {
		return new FormGroup<GoogleCloudChannelV1RenewalSettingsFormProperties>({
			enableRenewal: new FormControl<boolean | null | undefined>(undefined),
			paymentPlan: new FormControl<GoogleCloudChannelV1RenewalSettingsPaymentPlan | null | undefined>(undefined),
			resizeUnitCount: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents period in days/months/years. */
	export interface GoogleCloudChannelV1Period {

		/** Total duration of Period Type defined. */
		duration?: number | null;

		/** Period Type. */
		periodType?: GoogleCloudChannelV1PeriodPeriodType | null;
	}

	/** Represents period in days/months/years. */
	export interface GoogleCloudChannelV1PeriodFormProperties {

		/** Total duration of Period Type defined. */
		duration: FormControl<number | null | undefined>,

		/** Period Type. */
		periodType: FormControl<GoogleCloudChannelV1PeriodPeriodType | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1PeriodFormGroup() {
		return new FormGroup<GoogleCloudChannelV1PeriodFormProperties>({
			duration: new FormControl<number | null | undefined>(undefined),
			periodType: new FormControl<GoogleCloudChannelV1PeriodPeriodType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1PeriodPeriodType { PERIOD_TYPE_UNSPECIFIED = 0, DAY = 1, MONTH = 2, YEAR = 3 }

	export enum GoogleCloudChannelV1RenewalSettingsPaymentPlan { PAYMENT_PLAN_UNSPECIFIED = 0, COMMITMENT = 1, FLEXIBLE = 2, FREE = 3, TRIAL = 4, OFFLINE = 5 }


	/** Entity representing a link between distributors and their indirect resellers in an n-tier resale channel. */
	export interface GoogleCloudChannelV1ChannelPartnerLink {

		/** Cloud Identity information for the Cloud Channel Customer. */
		channelPartnerCloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfo;

		/** Output only. Timestamp of when the channel partner link is created. */
		createTime?: string | null;

		/** Output only. URI of the web page where partner accepts the link invitation. */
		inviteLinkUri?: string | null;

		/** Required. State of the channel partner link. */
		linkState?: GoogleCloudChannelV1ChannelPartnerLinkLinkState | null;

		/** Output only. Resource name for the channel partner link, in the format accounts/{account_id}/channelPartnerLinks/{id}. */
		name?: string | null;

		/** Output only. Public identifier that a customer must use to generate a transfer token to move to this distributor-reseller combination. */
		publicId?: string | null;

		/** Required. Cloud Identity ID of the linked reseller. */
		resellerCloudIdentityId?: string | null;

		/** Output only. Timestamp of when the channel partner link is updated. */
		updateTime?: string | null;
	}

	/** Entity representing a link between distributors and their indirect resellers in an n-tier resale channel. */
	export interface GoogleCloudChannelV1ChannelPartnerLinkFormProperties {

		/** Output only. Timestamp of when the channel partner link is created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. URI of the web page where partner accepts the link invitation. */
		inviteLinkUri: FormControl<string | null | undefined>,

		/** Required. State of the channel partner link. */
		linkState: FormControl<GoogleCloudChannelV1ChannelPartnerLinkLinkState | null | undefined>,

		/** Output only. Resource name for the channel partner link, in the format accounts/{account_id}/channelPartnerLinks/{id}. */
		name: FormControl<string | null | undefined>,

		/** Output only. Public identifier that a customer must use to generate a transfer token to move to this distributor-reseller combination. */
		publicId: FormControl<string | null | undefined>,

		/** Required. Cloud Identity ID of the linked reseller. */
		resellerCloudIdentityId: FormControl<string | null | undefined>,

		/** Output only. Timestamp of when the channel partner link is updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ChannelPartnerLinkFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ChannelPartnerLinkFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			inviteLinkUri: new FormControl<string | null | undefined>(undefined),
			linkState: new FormControl<GoogleCloudChannelV1ChannelPartnerLinkLinkState | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			publicId: new FormControl<string | null | undefined>(undefined),
			resellerCloudIdentityId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cloud Identity information for the Cloud Channel Customer. */
	export interface GoogleCloudChannelV1CloudIdentityInfo {

		/** Output only. URI of Customer's Admin console dashboard. */
		adminConsoleUri?: string | null;

		/** The alternate email. */
		alternateEmail?: string | null;

		/** CustomerType indicates verification type needed for using services. */
		customerType?: GoogleCloudChannelV1CloudIdentityInfoCustomerType | null;

		/** Required Edu Attributes */
		eduData?: GoogleCloudChannelV1EduData;

		/** Output only. Whether the domain is verified. This field is not returned for a Customer's cloud_identity_info resource. Partners can use the domains.get() method of the Workspace SDK's Directory API, or listen to the PRIMARY_DOMAIN_VERIFIED Pub/Sub event in to track domain verification of their resolve Workspace customers. */
		isDomainVerified?: boolean | null;

		/** Language code. */
		languageCode?: string | null;

		/** Phone number associated with the Cloud Identity. */
		phoneNumber?: string | null;

		/** Output only. The primary domain name. */
		primaryDomain?: string | null;
	}

	/** Cloud Identity information for the Cloud Channel Customer. */
	export interface GoogleCloudChannelV1CloudIdentityInfoFormProperties {

		/** Output only. URI of Customer's Admin console dashboard. */
		adminConsoleUri: FormControl<string | null | undefined>,

		/** The alternate email. */
		alternateEmail: FormControl<string | null | undefined>,

		/** CustomerType indicates verification type needed for using services. */
		customerType: FormControl<GoogleCloudChannelV1CloudIdentityInfoCustomerType | null | undefined>,

		/** Output only. Whether the domain is verified. This field is not returned for a Customer's cloud_identity_info resource. Partners can use the domains.get() method of the Workspace SDK's Directory API, or listen to the PRIMARY_DOMAIN_VERIFIED Pub/Sub event in to track domain verification of their resolve Workspace customers. */
		isDomainVerified: FormControl<boolean | null | undefined>,

		/** Language code. */
		languageCode: FormControl<string | null | undefined>,

		/** Phone number associated with the Cloud Identity. */
		phoneNumber: FormControl<string | null | undefined>,

		/** Output only. The primary domain name. */
		primaryDomain: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1CloudIdentityInfoFormGroup() {
		return new FormGroup<GoogleCloudChannelV1CloudIdentityInfoFormProperties>({
			adminConsoleUri: new FormControl<string | null | undefined>(undefined),
			alternateEmail: new FormControl<string | null | undefined>(undefined),
			customerType: new FormControl<GoogleCloudChannelV1CloudIdentityInfoCustomerType | null | undefined>(undefined),
			isDomainVerified: new FormControl<boolean | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			primaryDomain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1CloudIdentityInfoCustomerType { CUSTOMER_TYPE_UNSPECIFIED = 0, DOMAIN = 1, TEAM = 2 }


	/** Required Edu Attributes */
	export interface GoogleCloudChannelV1EduData {

		/** Size of the institute. */
		instituteSize?: GoogleCloudChannelV1EduDataInstituteSize | null;

		/** Designated institute type of customer. */
		instituteType?: GoogleCloudChannelV1EduDataInstituteType | null;

		/** Web address for the edu customer's institution. */
		website?: string | null;
	}

	/** Required Edu Attributes */
	export interface GoogleCloudChannelV1EduDataFormProperties {

		/** Size of the institute. */
		instituteSize: FormControl<GoogleCloudChannelV1EduDataInstituteSize | null | undefined>,

		/** Designated institute type of customer. */
		instituteType: FormControl<GoogleCloudChannelV1EduDataInstituteType | null | undefined>,

		/** Web address for the edu customer's institution. */
		website: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1EduDataFormGroup() {
		return new FormGroup<GoogleCloudChannelV1EduDataFormProperties>({
			instituteSize: new FormControl<GoogleCloudChannelV1EduDataInstituteSize | null | undefined>(undefined),
			instituteType: new FormControl<GoogleCloudChannelV1EduDataInstituteType | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1EduDataInstituteSize { INSTITUTE_SIZE_UNSPECIFIED = 0, SIZE_1_100 = 1, SIZE_101_500 = 2, SIZE_501_1000 = 3, SIZE_1001_2000 = 4, SIZE_2001_5000 = 5, SIZE_5001_10000 = 6, SIZE_10001_OR_MORE = 7 }

	export enum GoogleCloudChannelV1EduDataInstituteType { INSTITUTE_TYPE_UNSPECIFIED = 0, K12 = 1, UNIVERSITY = 2 }

	export enum GoogleCloudChannelV1ChannelPartnerLinkLinkState { CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED = 0, INVITED = 1, ACTIVE = 2, REVOKED = 3, SUSPENDED = 4 }


	/** Configuration for how a distributor will rebill a channel partner (also known as a distributor-authorized reseller). */
	export interface GoogleCloudChannelV1ChannelPartnerRepricingConfig {

		/** Output only. Resource name of the ChannelPartnerRepricingConfig. Format: accounts/{account_id}/channelPartnerLinks/{channel_partner_id}/channelPartnerRepricingConfigs/{id}. */
		name?: string | null;

		/** Configuration for repricing a Google bill over a period of time. */
		repricingConfig?: GoogleCloudChannelV1RepricingConfig;

		/** Output only. Timestamp of an update to the repricing rule. If `update_time` is after RepricingConfig.effective_invoice_month then it indicates this was set mid-month. */
		updateTime?: string | null;
	}

	/** Configuration for how a distributor will rebill a channel partner (also known as a distributor-authorized reseller). */
	export interface GoogleCloudChannelV1ChannelPartnerRepricingConfigFormProperties {

		/** Output only. Resource name of the ChannelPartnerRepricingConfig. Format: accounts/{account_id}/channelPartnerLinks/{channel_partner_id}/channelPartnerRepricingConfigs/{id}. */
		name: FormControl<string | null | undefined>,

		/** Output only. Timestamp of an update to the repricing rule. If `update_time` is after RepricingConfig.effective_invoice_month then it indicates this was set mid-month. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ChannelPartnerRepricingConfigFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ChannelPartnerRepricingConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for repricing a Google bill over a period of time. */
	export interface GoogleCloudChannelV1RepricingConfig {

		/** A type that represents the various adjustments you can apply to a bill. */
		adjustment?: GoogleCloudChannelV1RepricingAdjustment;

		/** Applies the repricing configuration at the channel partner level. The channel partner value is derived from the resource name. Takes an empty json object. Deprecated: This is no longer supported. Use RepricingConfig.EntitlementGranularity instead. */
		channelPartnerGranularity?: GoogleCloudChannelV1RepricingConfigChannelPartnerGranularity;

		/** The conditional overrides to apply for this configuration. If you list multiple overrides, only the first valid override is used. If you don't list any overrides, the API uses the normal adjustment and rebilling basis. */
		conditionalOverrides?: Array<GoogleCloudChannelV1ConditionalOverride>;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		effectiveInvoiceMonth?: GoogleTypeDate;

		/** Applies the repricing configuration at the entitlement level. */
		entitlementGranularity?: GoogleCloudChannelV1RepricingConfigEntitlementGranularity;

		/** Required. The RebillingBasis to use for this bill. Specifies the relative cost based on repricing costs you will apply. */
		rebillingBasis?: GoogleCloudChannelV1ConditionalOverrideRebillingBasis | null;
	}

	/** Configuration for repricing a Google bill over a period of time. */
	export interface GoogleCloudChannelV1RepricingConfigFormProperties {

		/** Required. The RebillingBasis to use for this bill. Specifies the relative cost based on repricing costs you will apply. */
		rebillingBasis: FormControl<GoogleCloudChannelV1ConditionalOverrideRebillingBasis | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1RepricingConfigFormGroup() {
		return new FormGroup<GoogleCloudChannelV1RepricingConfigFormProperties>({
			rebillingBasis: new FormControl<GoogleCloudChannelV1ConditionalOverrideRebillingBasis | null | undefined>(undefined),
		});

	}


	/** A type that represents the various adjustments you can apply to a bill. */
	export interface GoogleCloudChannelV1RepricingAdjustment {

		/** An adjustment that applies a flat markup or markdown to an entire bill. */
		percentageAdjustment?: GoogleCloudChannelV1PercentageAdjustment;
	}

	/** A type that represents the various adjustments you can apply to a bill. */
	export interface GoogleCloudChannelV1RepricingAdjustmentFormProperties {
	}
	export function CreateGoogleCloudChannelV1RepricingAdjustmentFormGroup() {
		return new FormGroup<GoogleCloudChannelV1RepricingAdjustmentFormProperties>({
		});

	}


	/** An adjustment that applies a flat markup or markdown to an entire bill. */
	export interface GoogleCloudChannelV1PercentageAdjustment {

		/** A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html */
		percentage?: GoogleTypeDecimal;
	}

	/** An adjustment that applies a flat markup or markdown to an entire bill. */
	export interface GoogleCloudChannelV1PercentageAdjustmentFormProperties {
	}
	export function CreateGoogleCloudChannelV1PercentageAdjustmentFormGroup() {
		return new FormGroup<GoogleCloudChannelV1PercentageAdjustmentFormProperties>({
		});

	}


	/** A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html */
	export interface GoogleTypeDecimal {

		/** The decimal value, as a string. The string representation consists of an optional sign, `+` (`U+002B`) or `-` (`U+002D`), followed by a sequence of zero or more decimal digits ("the integer"), optionally followed by a fraction, optionally followed by an exponent. An empty string **should** be interpreted as `0`. The fraction consists of a decimal point followed by zero or more decimal digits. The string must contain at least one digit in either the integer or the fraction. The number formed by the sign, the integer and the fraction is referred to as the significand. The exponent consists of the character `e` (`U+0065`) or `E` (`U+0045`) followed by one or more decimal digits. Services **should** normalize decimal values before storing them by: - Removing an explicitly-provided `+` sign (`+2.5` -> `2.5`). - Replacing a zero-length integer value with `0` (`.5` -> `0.5`). - Coercing the exponent character to upper-case, with explicit sign (`2.5e8` -> `2.5E+8`). - Removing an explicitly-provided zero exponent (`2.5E0` -> `2.5`). Services **may** perform additional normalization based on its own needs and the internal decimal implementation selected, such as shifting the decimal point and exponent value together (example: `2.5E-1` <-> `0.25`). Additionally, services **may** preserve trailing zeroes in the fraction to indicate increased precision, but are not required to do so. Note that only the `.` character is supported to divide the integer and the fraction; `,` **should not** be supported regardless of locale. Additionally, thousand separators **should not** be supported. If a service does support them, values **must** be normalized. The ENBF grammar is: DecimalString = '' | [Sign] Significand [Exponent]; Sign = '+' | '-'; Significand = Digits '.' | [Digits] '.' Digits; Exponent = ('e' | 'E') [Sign] Digits; Digits = { '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' }; Services **should** clearly document the range of supported values, the maximum supported precision (total number of digits), and, if applicable, the scale (number of digits after the decimal point), as well as how it behaves when receiving out-of-bounds values. Services **may** choose to accept values passed as input even when the value has a higher precision or scale than the service supports, and **should** round the value to fit the supported scale. Alternatively, the service **may** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if precision would be lost. Services **should** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if the service receives a value outside of the supported range. */
		value?: string | null;
	}

	/** A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html */
	export interface GoogleTypeDecimalFormProperties {

		/** The decimal value, as a string. The string representation consists of an optional sign, `+` (`U+002B`) or `-` (`U+002D`), followed by a sequence of zero or more decimal digits ("the integer"), optionally followed by a fraction, optionally followed by an exponent. An empty string **should** be interpreted as `0`. The fraction consists of a decimal point followed by zero or more decimal digits. The string must contain at least one digit in either the integer or the fraction. The number formed by the sign, the integer and the fraction is referred to as the significand. The exponent consists of the character `e` (`U+0065`) or `E` (`U+0045`) followed by one or more decimal digits. Services **should** normalize decimal values before storing them by: - Removing an explicitly-provided `+` sign (`+2.5` -> `2.5`). - Replacing a zero-length integer value with `0` (`.5` -> `0.5`). - Coercing the exponent character to upper-case, with explicit sign (`2.5e8` -> `2.5E+8`). - Removing an explicitly-provided zero exponent (`2.5E0` -> `2.5`). Services **may** perform additional normalization based on its own needs and the internal decimal implementation selected, such as shifting the decimal point and exponent value together (example: `2.5E-1` <-> `0.25`). Additionally, services **may** preserve trailing zeroes in the fraction to indicate increased precision, but are not required to do so. Note that only the `.` character is supported to divide the integer and the fraction; `,` **should not** be supported regardless of locale. Additionally, thousand separators **should not** be supported. If a service does support them, values **must** be normalized. The ENBF grammar is: DecimalString = '' | [Sign] Significand [Exponent]; Sign = '+' | '-'; Significand = Digits '.' | [Digits] '.' Digits; Exponent = ('e' | 'E') [Sign] Digits; Digits = { '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' }; Services **should** clearly document the range of supported values, the maximum supported precision (total number of digits), and, if applicable, the scale (number of digits after the decimal point), as well as how it behaves when receiving out-of-bounds values. Services **may** choose to accept values passed as input even when the value has a higher precision or scale than the service supports, and **should** round the value to fit the supported scale. Alternatively, the service **may** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if precision would be lost. Services **should** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if the service receives a value outside of the supported range. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeDecimalFormGroup() {
		return new FormGroup<GoogleTypeDecimalFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Applies the repricing configuration at the channel partner level. The channel partner value is derived from the resource name. Takes an empty json object. Deprecated: This is no longer supported. Use RepricingConfig.EntitlementGranularity instead. */
	export interface GoogleCloudChannelV1RepricingConfigChannelPartnerGranularity {
	}

	/** Applies the repricing configuration at the channel partner level. The channel partner value is derived from the resource name. Takes an empty json object. Deprecated: This is no longer supported. Use RepricingConfig.EntitlementGranularity instead. */
	export interface GoogleCloudChannelV1RepricingConfigChannelPartnerGranularityFormProperties {
	}
	export function CreateGoogleCloudChannelV1RepricingConfigChannelPartnerGranularityFormGroup() {
		return new FormGroup<GoogleCloudChannelV1RepricingConfigChannelPartnerGranularityFormProperties>({
		});

	}


	/** Specifies the override to conditionally apply. */
	export interface GoogleCloudChannelV1ConditionalOverride {

		/** A type that represents the various adjustments you can apply to a bill. */
		adjustment?: GoogleCloudChannelV1RepricingAdjustment;

		/** Required. The RebillingBasis to use for the applied override. Shows the relative cost based on your repricing costs. */
		rebillingBasis?: GoogleCloudChannelV1ConditionalOverrideRebillingBasis | null;

		/** Represents the various repricing conditions you can use for a conditional override. */
		repricingCondition?: GoogleCloudChannelV1RepricingCondition;
	}

	/** Specifies the override to conditionally apply. */
	export interface GoogleCloudChannelV1ConditionalOverrideFormProperties {

		/** Required. The RebillingBasis to use for the applied override. Shows the relative cost based on your repricing costs. */
		rebillingBasis: FormControl<GoogleCloudChannelV1ConditionalOverrideRebillingBasis | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ConditionalOverrideFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ConditionalOverrideFormProperties>({
			rebillingBasis: new FormControl<GoogleCloudChannelV1ConditionalOverrideRebillingBasis | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1ConditionalOverrideRebillingBasis { REBILLING_BASIS_UNSPECIFIED = 0, COST_AT_LIST = 1, DIRECT_CUSTOMER_COST = 2 }


	/** Represents the various repricing conditions you can use for a conditional override. */
	export interface GoogleCloudChannelV1RepricingCondition {

		/** A condition that applies the override if a line item SKU is found in the SKU group. */
		skuGroupCondition?: GoogleCloudChannelV1SkuGroupCondition;
	}

	/** Represents the various repricing conditions you can use for a conditional override. */
	export interface GoogleCloudChannelV1RepricingConditionFormProperties {
	}
	export function CreateGoogleCloudChannelV1RepricingConditionFormGroup() {
		return new FormGroup<GoogleCloudChannelV1RepricingConditionFormProperties>({
		});

	}


	/** A condition that applies the override if a line item SKU is found in the SKU group. */
	export interface GoogleCloudChannelV1SkuGroupCondition {

		/** Specifies a SKU group (https://cloud.google.com/skus/sku-groups). Resource name of SKU group. Format: accounts/{account}/skuGroups/{sku_group}. Example: "accounts/C01234/skuGroups/3d50fd57-3157-4577-a5a9-a219b8490041". */
		skuGroup?: string | null;
	}

	/** A condition that applies the override if a line item SKU is found in the SKU group. */
	export interface GoogleCloudChannelV1SkuGroupConditionFormProperties {

		/** Specifies a SKU group (https://cloud.google.com/skus/sku-groups). Resource name of SKU group. Format: accounts/{account}/skuGroups/{sku_group}. Example: "accounts/C01234/skuGroups/3d50fd57-3157-4577-a5a9-a219b8490041". */
		skuGroup: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1SkuGroupConditionFormGroup() {
		return new FormGroup<GoogleCloudChannelV1SkuGroupConditionFormProperties>({
			skuGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDate {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeDateFormGroup() {
		return new FormGroup<GoogleTypeDateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Applies the repricing configuration at the entitlement level. */
	export interface GoogleCloudChannelV1RepricingConfigEntitlementGranularity {

		/** Resource name of the entitlement. Format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id} */
		entitlement?: string | null;
	}

	/** Applies the repricing configuration at the entitlement level. */
	export interface GoogleCloudChannelV1RepricingConfigEntitlementGranularityFormProperties {

		/** Resource name of the entitlement. Format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id} */
		entitlement: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1RepricingConfigEntitlementGranularityFormGroup() {
		return new FormGroup<GoogleCloudChannelV1RepricingConfigEntitlementGranularityFormProperties>({
			entitlement: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CloudChannelService.CheckCloudIdentityAccountsExist. */
	export interface GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest {

		/** Required. Domain to fetch for Cloud Identity account customers, including domained and domainless. */
		domain?: string | null;
	}

	/** Request message for CloudChannelService.CheckCloudIdentityAccountsExist. */
	export interface GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequestFormProperties {

		/** Required. Domain to fetch for Cloud Identity account customers, including domained and domainless. */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1CheckCloudIdentityAccountsExistRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequestFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CloudChannelService.CheckCloudIdentityAccountsExist. */
	export interface GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse {

		/** The Cloud Identity accounts associated with the domain. */
		cloudIdentityAccounts?: Array<GoogleCloudChannelV1CloudIdentityCustomerAccount>;
	}

	/** Response message for CloudChannelService.CheckCloudIdentityAccountsExist. */
	export interface GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponseFormProperties {
	}
	export function CreateGoogleCloudChannelV1CheckCloudIdentityAccountsExistResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponseFormProperties>({
		});

	}


	/** Entity representing a Cloud Identity account that may be associated with a Channel Services API partner. */
	export interface GoogleCloudChannelV1CloudIdentityCustomerAccount {

		/** If existing = true, the Cloud Identity ID of the customer. */
		customerCloudIdentityId?: string | null;

		/** If owned = true, the name of the customer that owns the Cloud Identity account. Customer_name uses the format: accounts/{account_id}/customers/{customer_id} */
		customerName?: string | null;

		/** Returns true if a Cloud Identity account exists for a specific domain. */
		existing?: boolean | null;

		/** Returns true if the Cloud Identity account is associated with a customer of the Channel Services partner. */
		owned?: boolean | null;
	}

	/** Entity representing a Cloud Identity account that may be associated with a Channel Services API partner. */
	export interface GoogleCloudChannelV1CloudIdentityCustomerAccountFormProperties {

		/** If existing = true, the Cloud Identity ID of the customer. */
		customerCloudIdentityId: FormControl<string | null | undefined>,

		/** If owned = true, the name of the customer that owns the Cloud Identity account. Customer_name uses the format: accounts/{account_id}/customers/{customer_id} */
		customerName: FormControl<string | null | undefined>,

		/** Returns true if a Cloud Identity account exists for a specific domain. */
		existing: FormControl<boolean | null | undefined>,

		/** Returns true if the Cloud Identity account is associated with a customer of the Channel Services partner. */
		owned: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1CloudIdentityCustomerAccountFormGroup() {
		return new FormGroup<GoogleCloudChannelV1CloudIdentityCustomerAccountFormProperties>({
			customerCloudIdentityId: new FormControl<string | null | undefined>(undefined),
			customerName: new FormControl<string | null | undefined>(undefined),
			existing: new FormControl<boolean | null | undefined>(undefined),
			owned: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The definition of a report column. Specifies the data properties in the corresponding position of the report rows. */
	export interface GoogleCloudChannelV1Column {

		/** The unique name of the column (for example, customer_domain, channel_partner, customer_cost). You can use column IDs in RunReportJobRequest.filter. To see all reports and their columns, call CloudChannelReportsService.ListReports. */
		columnId?: string | null;

		/** The type of the values for this column. */
		dataType?: GoogleCloudChannelV1ColumnDataType | null;

		/** The column's display name. */
		displayName?: string | null;
	}

	/** The definition of a report column. Specifies the data properties in the corresponding position of the report rows. */
	export interface GoogleCloudChannelV1ColumnFormProperties {

		/** The unique name of the column (for example, customer_domain, channel_partner, customer_cost). You can use column IDs in RunReportJobRequest.filter. To see all reports and their columns, call CloudChannelReportsService.ListReports. */
		columnId: FormControl<string | null | undefined>,

		/** The type of the values for this column. */
		dataType: FormControl<GoogleCloudChannelV1ColumnDataType | null | undefined>,

		/** The column's display name. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ColumnFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ColumnFormProperties>({
			columnId: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<GoogleCloudChannelV1ColumnDataType | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1ColumnDataType { DATA_TYPE_UNSPECIFIED = 0, STRING = 1, INT = 2, DECIMAL = 3, MONEY = 4, DATE = 5, DATE_TIME = 6 }


	/** Commitment settings for commitment-based offers. */
	export interface GoogleCloudChannelV1CommitmentSettings {

		/** Output only. Commitment end timestamp. */
		endTime?: string | null;

		/** Renewal settings for renewable Offers. */
		renewalSettings?: GoogleCloudChannelV1RenewalSettings;

		/** Output only. Commitment start timestamp. */
		startTime?: string | null;
	}

	/** Commitment settings for commitment-based offers. */
	export interface GoogleCloudChannelV1CommitmentSettingsFormProperties {

		/** Output only. Commitment end timestamp. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Commitment start timestamp. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1CommitmentSettingsFormGroup() {
		return new FormGroup<GoogleCloudChannelV1CommitmentSettingsFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the constraints for buying the Offer. */
	export interface GoogleCloudChannelV1Constraints {

		/** Represents constraints required to purchase the Offer for a customer. */
		customerConstraints?: GoogleCloudChannelV1CustomerConstraints;
	}

	/** Represents the constraints for buying the Offer. */
	export interface GoogleCloudChannelV1ConstraintsFormProperties {
	}
	export function CreateGoogleCloudChannelV1ConstraintsFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ConstraintsFormProperties>({
		});

	}


	/** Represents constraints required to purchase the Offer for a customer. */
	export interface GoogleCloudChannelV1CustomerConstraints {

		/** Allowed Customer Type. */
		allowedCustomerTypes?: Array<GoogleCloudChannelV1CloudIdentityInfoCustomerType>;

		/** Allowed geographical regions of the customer. */
		allowedRegions?: Array<string>;

		/** Allowed Promotional Order Type. Present for Promotional offers. */
		promotionalOrderTypes?: Array<string>;
	}

	/** Represents constraints required to purchase the Offer for a customer. */
	export interface GoogleCloudChannelV1CustomerConstraintsFormProperties {
	}
	export function CreateGoogleCloudChannelV1CustomerConstraintsFormGroup() {
		return new FormGroup<GoogleCloudChannelV1CustomerConstraintsFormProperties>({
		});

	}


	/** Contact information for a customer account. */
	export interface GoogleCloudChannelV1ContactInfo {

		/** Output only. The customer account contact's display name, formatted as a combination of the customer's first and last name. */
		displayName?: string | null;

		/** The customer account's contact email. Required for entitlements that create admin.google.com accounts, and serves as the customer's username for those accounts. Use this email to invite Team customers. */
		email?: string | null;

		/** The customer account contact's first name. Optional for Team customers. */
		firstName?: string | null;

		/** The customer account contact's last name. Optional for Team customers. */
		lastName?: string | null;

		/** The customer account's contact phone number. */
		phone?: string | null;

		/** Optional. The customer account contact's job title. */
		title?: string | null;
	}

	/** Contact information for a customer account. */
	export interface GoogleCloudChannelV1ContactInfoFormProperties {

		/** Output only. The customer account contact's display name, formatted as a combination of the customer's first and last name. */
		displayName: FormControl<string | null | undefined>,

		/** The customer account's contact email. Required for entitlements that create admin.google.com accounts, and serves as the customer's username for those accounts. Use this email to invite Team customers. */
		email: FormControl<string | null | undefined>,

		/** The customer account contact's first name. Optional for Team customers. */
		firstName: FormControl<string | null | undefined>,

		/** The customer account contact's last name. Optional for Team customers. */
		lastName: FormControl<string | null | undefined>,

		/** The customer account's contact phone number. */
		phone: FormControl<string | null | undefined>,

		/** Optional. The customer account contact's job title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ContactInfoFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ContactInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CloudChannelService.CreateEntitlement */
	export interface GoogleCloudChannelV1CreateEntitlementRequest {

		/** An entitlement is a representation of a customer's ability to use a service. */
		entitlement?: GoogleCloudChannelV1Entitlement;

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId?: string | null;
	}

	/** Request message for CloudChannelService.CreateEntitlement */
	export interface GoogleCloudChannelV1CreateEntitlementRequestFormProperties {

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1CreateEntitlementRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1CreateEntitlementRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An entitlement is a representation of a customer's ability to use a service. */
	export interface GoogleCloudChannelV1Entitlement {

		/** Association links that an entitlement has to other entitlements. */
		associationInfo?: GoogleCloudChannelV1AssociationInfo;

		/** Optional. The billing account resource name that is used to pay for this entitlement. */
		billingAccount?: string | null;

		/** Commitment settings for commitment-based offers. */
		commitmentSettings?: GoogleCloudChannelV1CommitmentSettings;

		/** Output only. The time at which the entitlement is created. */
		createTime?: string | null;

		/** Output only. Resource name of an entitlement in the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}. */
		name?: string | null;

		/** Required. The offer resource name for which the entitlement is to be created. Takes the form: accounts/{account_id}/offers/{offer_id}. */
		offer?: string | null;

		/** Extended entitlement parameters. When creating an entitlement, valid parameter names and values are defined in the Offer.parameter_definitions. For Google Workspace, the following Parameters may be accepted as input: - max_units: The maximum assignable units for a flexible offer OR - num_units: The total commitment for commitment-based offers The response may additionally include the following output-only Parameters: - assigned_units: The number of licenses assigned to users. For Google Cloud billing subaccounts, the following Parameter may be accepted as input: - display_name: The display name of the billing subaccount. */
		parameters?: Array<GoogleCloudChannelV1Parameter>;

		/** Service provisioned for an entitlement. */
		provisionedService?: GoogleCloudChannelV1ProvisionedService;

		/** Output only. Current provisioning state of the entitlement. */
		provisioningState?: GoogleCloudChannelV1EntitlementProvisioningState | null;

		/** Optional. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given, it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters. This is only supported for Google Workspace entitlements. */
		purchaseOrderId?: string | null;

		/** Output only. Enumerable of all current suspension reasons for an entitlement. */
		suspensionReasons?: Array<string>;

		/** Settings for trial offers. */
		trialSettings?: GoogleCloudChannelV1TrialSettings;

		/** Output only. The time at which the entitlement is updated. */
		updateTime?: string | null;
	}

	/** An entitlement is a representation of a customer's ability to use a service. */
	export interface GoogleCloudChannelV1EntitlementFormProperties {

		/** Optional. The billing account resource name that is used to pay for this entitlement. */
		billingAccount: FormControl<string | null | undefined>,

		/** Output only. The time at which the entitlement is created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Resource name of an entitlement in the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}. */
		name: FormControl<string | null | undefined>,

		/** Required. The offer resource name for which the entitlement is to be created. Takes the form: accounts/{account_id}/offers/{offer_id}. */
		offer: FormControl<string | null | undefined>,

		/** Output only. Current provisioning state of the entitlement. */
		provisioningState: FormControl<GoogleCloudChannelV1EntitlementProvisioningState | null | undefined>,

		/** Optional. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given, it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters. This is only supported for Google Workspace entitlements. */
		purchaseOrderId: FormControl<string | null | undefined>,

		/** Output only. The time at which the entitlement is updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1EntitlementFormGroup() {
		return new FormGroup<GoogleCloudChannelV1EntitlementFormProperties>({
			billingAccount: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			offer: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<GoogleCloudChannelV1EntitlementProvisioningState | null | undefined>(undefined),
			purchaseOrderId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Service provisioned for an entitlement. */
	export interface GoogleCloudChannelV1ProvisionedService {

		/** Output only. The product pertaining to the provisioning resource as specified in the Offer. */
		productId?: string | null;

		/** Output only. Provisioning ID of the entitlement. For Google Workspace, this is the underlying Subscription ID. For Google Cloud, this is the Billing Account ID of the billing subaccount. */
		provisioningId?: string | null;

		/** Output only. The SKU pertaining to the provisioning resource as specified in the Offer. */
		skuId?: string | null;
	}

	/** Service provisioned for an entitlement. */
	export interface GoogleCloudChannelV1ProvisionedServiceFormProperties {

		/** Output only. The product pertaining to the provisioning resource as specified in the Offer. */
		productId: FormControl<string | null | undefined>,

		/** Output only. Provisioning ID of the entitlement. For Google Workspace, this is the underlying Subscription ID. For Google Cloud, this is the Billing Account ID of the billing subaccount. */
		provisioningId: FormControl<string | null | undefined>,

		/** Output only. The SKU pertaining to the provisioning resource as specified in the Offer. */
		skuId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ProvisionedServiceFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ProvisionedServiceFormProperties>({
			productId: new FormControl<string | null | undefined>(undefined),
			provisioningId: new FormControl<string | null | undefined>(undefined),
			skuId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1EntitlementProvisioningState { PROVISIONING_STATE_UNSPECIFIED = 0, ACTIVE = 1, SUSPENDED = 2 }


	/** Settings for trial offers. */
	export interface GoogleCloudChannelV1TrialSettings {

		/** Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example [Epoch converter](https://www.epochconverter.com). */
		endTime?: string | null;

		/** Determines if the entitlement is in a trial or not: * `true` - The entitlement is in trial. * `false` - The entitlement is not in trial. */
		trial?: boolean | null;
	}

	/** Settings for trial offers. */
	export interface GoogleCloudChannelV1TrialSettingsFormProperties {

		/** Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example [Epoch converter](https://www.epochconverter.com). */
		endTime: FormControl<string | null | undefined>,

		/** Determines if the entitlement is in a trial or not: * `true` - The entitlement is in trial. * `false` - The entitlement is not in trial. */
		trial: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1TrialSettingsFormGroup() {
		return new FormGroup<GoogleCloudChannelV1TrialSettingsFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			trial: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Entity representing a customer of a reseller or distributor. */
	export interface GoogleCloudChannelV1Customer {

		/** Secondary contact email. You need to provide an alternate email to create different domains if a primary contact email already exists. Users will receive a notification with credentials when you create an admin.google.com account. Secondary emails are also recovery email addresses. Alternate emails are optional when you create Team customers. */
		alternateEmail?: string | null;

		/** Cloud Identity ID of the customer's channel partner. Populated only if a channel partner exists for this customer. */
		channelPartnerId?: string | null;

		/** Output only. The customer's Cloud Identity ID if the customer has a Cloud Identity resource. */
		cloudIdentityId?: string | null;

		/** Cloud Identity information for the Cloud Channel Customer. */
		cloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfo;

		/** Optional. External CRM ID for the customer. Populated only if a CRM ID exists for this customer. */
		correlationId?: string | null;

		/** Output only. Time when the customer was created. */
		createTime?: string | null;

		/** Required. The customer's primary domain. Must match the primary contact email's domain. */
		domain?: string | null;

		/** Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;

		/** Output only. Resource name of the customer. Format: accounts/{account_id}/customers/{customer_id} */
		name?: string | null;

		/** Required. Name of the organization that the customer entity represents. */
		orgDisplayName?: string | null;

		/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
		orgPostalAddress?: GoogleTypePostalAddress;

		/** Contact information for a customer account. */
		primaryContactInfo?: GoogleCloudChannelV1ContactInfo;

		/** Output only. Time when the customer was updated. */
		updateTime?: string | null;
	}

	/** Entity representing a customer of a reseller or distributor. */
	export interface GoogleCloudChannelV1CustomerFormProperties {

		/** Secondary contact email. You need to provide an alternate email to create different domains if a primary contact email already exists. Users will receive a notification with credentials when you create an admin.google.com account. Secondary emails are also recovery email addresses. Alternate emails are optional when you create Team customers. */
		alternateEmail: FormControl<string | null | undefined>,

		/** Cloud Identity ID of the customer's channel partner. Populated only if a channel partner exists for this customer. */
		channelPartnerId: FormControl<string | null | undefined>,

		/** Output only. The customer's Cloud Identity ID if the customer has a Cloud Identity resource. */
		cloudIdentityId: FormControl<string | null | undefined>,

		/** Optional. External CRM ID for the customer. Populated only if a CRM ID exists for this customer. */
		correlationId: FormControl<string | null | undefined>,

		/** Output only. Time when the customer was created. */
		createTime: FormControl<string | null | undefined>,

		/** Required. The customer's primary domain. Must match the primary contact email's domain. */
		domain: FormControl<string | null | undefined>,

		/** Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,

		/** Output only. Resource name of the customer. Format: accounts/{account_id}/customers/{customer_id} */
		name: FormControl<string | null | undefined>,

		/** Required. Name of the organization that the customer entity represents. */
		orgDisplayName: FormControl<string | null | undefined>,

		/** Output only. Time when the customer was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1CustomerFormGroup() {
		return new FormGroup<GoogleCloudChannelV1CustomerFormProperties>({
			alternateEmail: new FormControl<string | null | undefined>(undefined),
			channelPartnerId: new FormControl<string | null | undefined>(undefined),
			cloudIdentityId: new FormControl<string | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orgDisplayName: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478 */
	export interface GoogleTypePostalAddress {

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
	export interface GoogleTypePostalAddressFormProperties {

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
	export function CreateGoogleTypePostalAddressFormGroup() {
		return new FormGroup<GoogleTypePostalAddressFormProperties>({
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


	/** Represents Pub/Sub message content describing customer update. */
	export interface GoogleCloudChannelV1CustomerEvent {

		/** Resource name of the customer. Format: accounts/{account_id}/customers/{customer_id} */
		customer?: string | null;

		/** Type of event which happened on the customer. */
		eventType?: GoogleCloudChannelV1CustomerEventEventType | null;
	}

	/** Represents Pub/Sub message content describing customer update. */
	export interface GoogleCloudChannelV1CustomerEventFormProperties {

		/** Resource name of the customer. Format: accounts/{account_id}/customers/{customer_id} */
		customer: FormControl<string | null | undefined>,

		/** Type of event which happened on the customer. */
		eventType: FormControl<GoogleCloudChannelV1CustomerEventEventType | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1CustomerEventFormGroup() {
		return new FormGroup<GoogleCloudChannelV1CustomerEventFormProperties>({
			customer: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<GoogleCloudChannelV1CustomerEventEventType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1CustomerEventEventType { TYPE_UNSPECIFIED = 0, PRIMARY_DOMAIN_CHANGED = 1, PRIMARY_DOMAIN_VERIFIED = 2 }


	/** Configuration for how a reseller will reprice a Customer. */
	export interface GoogleCloudChannelV1CustomerRepricingConfig {

		/** Output only. Resource name of the CustomerRepricingConfig. Format: accounts/{account_id}/customers/{customer_id}/customerRepricingConfigs/{id}. */
		name?: string | null;

		/** Configuration for repricing a Google bill over a period of time. */
		repricingConfig?: GoogleCloudChannelV1RepricingConfig;

		/** Output only. Timestamp of an update to the repricing rule. If `update_time` is after RepricingConfig.effective_invoice_month then it indicates this was set mid-month. */
		updateTime?: string | null;
	}

	/** Configuration for how a reseller will reprice a Customer. */
	export interface GoogleCloudChannelV1CustomerRepricingConfigFormProperties {

		/** Output only. Resource name of the CustomerRepricingConfig. Format: accounts/{account_id}/customers/{customer_id}/customerRepricingConfigs/{id}. */
		name: FormControl<string | null | undefined>,

		/** Output only. Timestamp of an update to the repricing rule. If `update_time` is after RepricingConfig.effective_invoice_month then it indicates this was set mid-month. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1CustomerRepricingConfigFormGroup() {
		return new FormGroup<GoogleCloudChannelV1CustomerRepricingConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of usage or invoice date ranges. */
	export interface GoogleCloudChannelV1DateRange {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		invoiceEndDate?: GoogleTypeDate;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		invoiceStartDate?: GoogleTypeDate;

		/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
		usageEndDateTime?: GoogleTypeDateTime;

		/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
		usageStartDateTime?: GoogleTypeDateTime;
	}

	/** A representation of usage or invoice date ranges. */
	export interface GoogleCloudChannelV1DateRangeFormProperties {
	}
	export function CreateGoogleCloudChannelV1DateRangeFormGroup() {
		return new FormGroup<GoogleCloudChannelV1DateRangeFormProperties>({
		});

	}


	/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
	export interface GoogleTypeDateTime {

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
		timeZone?: GoogleTypeTimeZone;

		/** UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. */
		utcOffset?: string | null;

		/** Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. */
		year?: number | null;
	}

	/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
	export interface GoogleTypeDateTimeFormProperties {

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
	export function CreateGoogleTypeDateTimeFormGroup() {
		return new FormGroup<GoogleTypeDateTimeFormProperties>({
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
	export interface GoogleTypeTimeZone {

		/** IANA Time Zone Database time zone, e.g. "America/New_York". */
		id?: string | null;

		/** Optional. IANA Time Zone Database version number, e.g. "2019a". */
		version?: string | null;
	}

	/** Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). */
	export interface GoogleTypeTimeZoneFormProperties {

		/** IANA Time Zone Database time zone, e.g. "America/New_York". */
		id: FormControl<string | null | undefined>,

		/** Optional. IANA Time Zone Database version number, e.g. "2019a". */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeTimeZoneFormGroup() {
		return new FormGroup<GoogleTypeTimeZoneFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Change event entry for Entitlement order history */
	export interface GoogleCloudChannelV1EntitlementChange {

		/** The Entitlement's activation reason */
		activationReason?: GoogleCloudChannelV1EntitlementChangeActivationReason | null;

		/** Cancellation reason for the Entitlement. */
		cancellationReason?: GoogleCloudChannelV1EntitlementChangeCancellationReason | null;

		/** The change action type. */
		changeType?: GoogleCloudChannelV1EntitlementChangeChangeType | null;

		/** The submitted time of the change. */
		createTime?: string | null;

		/** Required. Resource name of an entitlement in the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id} */
		entitlement?: string | null;

		/** Required. Resource name of the Offer at the time of change. Takes the form: accounts/{account_id}/offers/{offer_id}. */
		offer?: string | null;

		/** Human-readable identifier that shows what operator made a change. When the operator_type is RESELLER, this is the user's email address. For all other operator types, this is empty. */
		operator?: string | null;

		/** Operator type responsible for the change. */
		operatorType?: GoogleCloudChannelV1EntitlementChangeOperatorType | null;

		/** e.g. purchase_number change reason, entered by CRS. */
		otherChangeReason?: string | null;

		/** Extended parameters, such as: purchase_order_number, gcp_details; internal_correlation_id, long_running_operation_id, order_id; etc. */
		parameters?: Array<GoogleCloudChannelV1Parameter>;

		/** Service provisioned for an entitlement. */
		provisionedService?: GoogleCloudChannelV1ProvisionedService;

		/** Suspension reason for the Entitlement. */
		suspensionReason?: GoogleCloudChannelV1EntitlementChangeSuspensionReason | null;
	}

	/** Change event entry for Entitlement order history */
	export interface GoogleCloudChannelV1EntitlementChangeFormProperties {

		/** The Entitlement's activation reason */
		activationReason: FormControl<GoogleCloudChannelV1EntitlementChangeActivationReason | null | undefined>,

		/** Cancellation reason for the Entitlement. */
		cancellationReason: FormControl<GoogleCloudChannelV1EntitlementChangeCancellationReason | null | undefined>,

		/** The change action type. */
		changeType: FormControl<GoogleCloudChannelV1EntitlementChangeChangeType | null | undefined>,

		/** The submitted time of the change. */
		createTime: FormControl<string | null | undefined>,

		/** Required. Resource name of an entitlement in the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id} */
		entitlement: FormControl<string | null | undefined>,

		/** Required. Resource name of the Offer at the time of change. Takes the form: accounts/{account_id}/offers/{offer_id}. */
		offer: FormControl<string | null | undefined>,

		/** Human-readable identifier that shows what operator made a change. When the operator_type is RESELLER, this is the user's email address. For all other operator types, this is empty. */
		operator: FormControl<string | null | undefined>,

		/** Operator type responsible for the change. */
		operatorType: FormControl<GoogleCloudChannelV1EntitlementChangeOperatorType | null | undefined>,

		/** e.g. purchase_number change reason, entered by CRS. */
		otherChangeReason: FormControl<string | null | undefined>,

		/** Suspension reason for the Entitlement. */
		suspensionReason: FormControl<GoogleCloudChannelV1EntitlementChangeSuspensionReason | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1EntitlementChangeFormGroup() {
		return new FormGroup<GoogleCloudChannelV1EntitlementChangeFormProperties>({
			activationReason: new FormControl<GoogleCloudChannelV1EntitlementChangeActivationReason | null | undefined>(undefined),
			cancellationReason: new FormControl<GoogleCloudChannelV1EntitlementChangeCancellationReason | null | undefined>(undefined),
			changeType: new FormControl<GoogleCloudChannelV1EntitlementChangeChangeType | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			entitlement: new FormControl<string | null | undefined>(undefined),
			offer: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<string | null | undefined>(undefined),
			operatorType: new FormControl<GoogleCloudChannelV1EntitlementChangeOperatorType | null | undefined>(undefined),
			otherChangeReason: new FormControl<string | null | undefined>(undefined),
			suspensionReason: new FormControl<GoogleCloudChannelV1EntitlementChangeSuspensionReason | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1EntitlementChangeActivationReason { ACTIVATION_REASON_UNSPECIFIED = 0, RESELLER_REVOKED_SUSPENSION = 1, CUSTOMER_ACCEPTED_PENDING_TOS = 2, RENEWAL_SETTINGS_CHANGED = 3, OTHER_ACTIVATION_REASON = 4 }

	export enum GoogleCloudChannelV1EntitlementChangeCancellationReason { CANCELLATION_REASON_UNSPECIFIED = 0, SERVICE_TERMINATED = 1, RELATIONSHIP_ENDED = 2, PARTIAL_TRANSFER = 3 }

	export enum GoogleCloudChannelV1EntitlementChangeChangeType { CHANGE_TYPE_UNSPECIFIED = 0, CREATED = 1, PRICE_PLAN_SWITCHED = 2, COMMITMENT_CHANGED = 3, RENEWED = 4, SUSPENDED = 5, ACTIVATED = 6, CANCELLED = 7, SKU_CHANGED = 8, RENEWAL_SETTING_CHANGED = 9, PAID_SUBSCRIPTION_STARTED = 10, LICENSE_CAP_CHANGED = 11, SUSPENSION_DETAILS_CHANGED = 12, TRIAL_END_DATE_EXTENDED = 13, TRIAL_STARTED = 14 }

	export enum GoogleCloudChannelV1EntitlementChangeOperatorType { OPERATOR_TYPE_UNSPECIFIED = 0, CUSTOMER_SERVICE_REPRESENTATIVE = 1, SYSTEM = 2, CUSTOMER = 3, RESELLER = 4 }

	export enum GoogleCloudChannelV1EntitlementChangeSuspensionReason { SUSPENSION_REASON_UNSPECIFIED = 0, RESELLER_INITIATED = 1, TRIAL_ENDED = 2, RENEWAL_WITH_TYPE_CANCEL = 3, PENDING_TOS_ACCEPTANCE = 4, OTHER = 5 }


	/** Represents Pub/Sub message content describing entitlement update. */
	export interface GoogleCloudChannelV1EntitlementEvent {

		/** Resource name of an entitlement of the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id} */
		entitlement?: string | null;

		/** Type of event which happened on the entitlement. */
		eventType?: GoogleCloudChannelV1EntitlementEventEventType | null;
	}

	/** Represents Pub/Sub message content describing entitlement update. */
	export interface GoogleCloudChannelV1EntitlementEventFormProperties {

		/** Resource name of an entitlement of the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id} */
		entitlement: FormControl<string | null | undefined>,

		/** Type of event which happened on the entitlement. */
		eventType: FormControl<GoogleCloudChannelV1EntitlementEventEventType | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1EntitlementEventFormGroup() {
		return new FormGroup<GoogleCloudChannelV1EntitlementEventFormProperties>({
			entitlement: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<GoogleCloudChannelV1EntitlementEventEventType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1EntitlementEventEventType { TYPE_UNSPECIFIED = 0, CREATED = 1, PRICE_PLAN_SWITCHED = 2, COMMITMENT_CHANGED = 3, RENEWED = 4, SUSPENDED = 5, ACTIVATED = 6, CANCELLED = 7, SKU_CHANGED = 8, RENEWAL_SETTING_CHANGED = 9, PAID_SERVICE_STARTED = 10, LICENSE_ASSIGNMENT_CHANGED = 11, LICENSE_CAP_CHANGED = 12 }


	/** Request message for CloudChannelReportsService.FetchReportResults. */
	export interface GoogleCloudChannelV1FetchReportResultsRequest {

		/** Optional. Requested page size of the report. The server may return fewer results than requested. If you don't specify a page size, the server uses a sensible default (may change over time). The maximum value is 30,000; the server will change larger values to 30,000. */
		pageSize?: number | null;

		/** Optional. A token that specifies a page of results beyond the first page. Obtained through FetchReportResultsResponse.next_page_token of the previous CloudChannelReportsService.FetchReportResults call. */
		pageToken?: string | null;

		/** Optional. List of keys specifying which report partitions to return. If empty, returns all partitions. */
		partitionKeys?: Array<string>;
	}

	/** Request message for CloudChannelReportsService.FetchReportResults. */
	export interface GoogleCloudChannelV1FetchReportResultsRequestFormProperties {

		/** Optional. Requested page size of the report. The server may return fewer results than requested. If you don't specify a page size, the server uses a sensible default (may change over time). The maximum value is 30,000; the server will change larger values to 30,000. */
		pageSize: FormControl<number | null | undefined>,

		/** Optional. A token that specifies a page of results beyond the first page. Obtained through FetchReportResultsResponse.next_page_token of the previous CloudChannelReportsService.FetchReportResults call. */
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1FetchReportResultsRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1FetchReportResultsRequestFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CloudChannelReportsService.FetchReportResults. Contains a tabular representation of the report results. */
	export interface GoogleCloudChannelV1FetchReportResultsResponse {

		/** Pass this token to FetchReportResultsRequest.page_token to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults. */
		reportMetadata?: GoogleCloudChannelV1ReportResultsMetadata;

		/** The report's lists of values. Each row follows the settings and ordering of the columns from `report_metadata`. */
		rows?: Array<GoogleCloudChannelV1Row>;
	}

	/** Response message for CloudChannelReportsService.FetchReportResults. Contains a tabular representation of the report results. */
	export interface GoogleCloudChannelV1FetchReportResultsResponseFormProperties {

		/** Pass this token to FetchReportResultsRequest.page_token to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1FetchReportResultsResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1FetchReportResultsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults. */
	export interface GoogleCloudChannelV1ReportResultsMetadata {

		/** A representation of usage or invoice date ranges. */
		dateRange?: GoogleCloudChannelV1DateRange;

		/** A representation of usage or invoice date ranges. */
		precedingDateRange?: GoogleCloudChannelV1DateRange;

		/** The ID and description of a report that was used to generate report data. For example, "Google Cloud Daily Spend", "Google Workspace License Activity", etc. */
		report?: GoogleCloudChannelV1Report;

		/** The total number of rows of data in the final report. */
		rowCount?: string | null;
	}

	/** The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults. */
	export interface GoogleCloudChannelV1ReportResultsMetadataFormProperties {

		/** The total number of rows of data in the final report. */
		rowCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ReportResultsMetadataFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ReportResultsMetadataFormProperties>({
			rowCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ID and description of a report that was used to generate report data. For example, "Google Cloud Daily Spend", "Google Workspace License Activity", etc. */
	export interface GoogleCloudChannelV1Report {

		/** The list of columns included in the report. This defines the schema of the report results. */
		columns?: Array<GoogleCloudChannelV1Column>;

		/** A description of other aspects of the report, such as the products it supports. */
		description?: string | null;

		/** A human-readable name for this report. */
		displayName?: string | null;

		/** Required. The report's resource name. Specifies the account and report used to generate report data. The report_id identifier is a UID (for example, `613bf59q`). Name uses the format: accounts/{account_id}/reports/{report_id} */
		name?: string | null;
	}

	/** The ID and description of a report that was used to generate report data. For example, "Google Cloud Daily Spend", "Google Workspace License Activity", etc. */
	export interface GoogleCloudChannelV1ReportFormProperties {

		/** A description of other aspects of the report, such as the products it supports. */
		description: FormControl<string | null | undefined>,

		/** A human-readable name for this report. */
		displayName: FormControl<string | null | undefined>,

		/** Required. The report's resource name. Specifies the account and report used to generate report data. The report_id identifier is a UID (for example, `613bf59q`). Name uses the format: accounts/{account_id}/reports/{report_id} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ReportFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ReportFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A row of report values. */
	export interface GoogleCloudChannelV1Row {

		/** The key for the partition this row belongs to. This field is empty if the report is not partitioned. */
		partitionKey?: string | null;

		/** The list of values in the row. */
		values?: Array<GoogleCloudChannelV1ReportValue>;
	}

	/** A row of report values. */
	export interface GoogleCloudChannelV1RowFormProperties {

		/** The key for the partition this row belongs to. This field is empty if the report is not partitioned. */
		partitionKey: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1RowFormGroup() {
		return new FormGroup<GoogleCloudChannelV1RowFormProperties>({
			partitionKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single report value. */
	export interface GoogleCloudChannelV1ReportValue {

		/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
		dateTimeValue?: GoogleTypeDateTime;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		dateValue?: GoogleTypeDate;

		/** A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html */
		decimalValue?: GoogleTypeDecimal;

		/** A value of type `int`. */
		intValue?: string | null;

		/** Represents an amount of money with its currency type. */
		moneyValue?: GoogleTypeMoney;

		/** A value of type `string`. */
		stringValue?: string | null;
	}

	/** A single report value. */
	export interface GoogleCloudChannelV1ReportValueFormProperties {

		/** A value of type `int`. */
		intValue: FormControl<string | null | undefined>,

		/** A value of type `string`. */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ReportValueFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ReportValueFormProperties>({
			intValue: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an amount of money with its currency type. */
	export interface GoogleTypeMoney {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode?: string | null;

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos?: number | null;

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units?: string | null;
	}

	/** Represents an amount of money with its currency type. */
	export interface GoogleTypeMoneyFormProperties {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode: FormControl<string | null | undefined>,

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos: FormControl<number | null | undefined>,

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeMoneyFormGroup() {
		return new FormGroup<GoogleTypeMoneyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CloudChannelService.ImportCustomer */
	export interface GoogleCloudChannelV1ImportCustomerRequest {

		/** Optional. The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details. */
		authToken?: string | null;

		/** Optional. Cloud Identity ID of a channel partner who will be the direct reseller for the customer's order. This field is required for 2-tier transfer scenarios and can be provided via the request Parent binding as well. */
		channelPartnerId?: string | null;

		/** Required. Customer's Cloud Identity ID */
		cloudIdentityId?: string | null;

		/** Optional. Specifies the customer that will receive imported Cloud Identity information. Format: accounts/{account_id}/customers/{customer_id} */
		customer?: string | null;

		/** Required. Customer domain. */
		domain?: string | null;

		/** Required. Choose to overwrite an existing customer if found. This must be set to true if there is an existing customer with a conflicting region code or domain. */
		overwriteIfExists?: boolean | null;
	}

	/** Request message for CloudChannelService.ImportCustomer */
	export interface GoogleCloudChannelV1ImportCustomerRequestFormProperties {

		/** Optional. The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details. */
		authToken: FormControl<string | null | undefined>,

		/** Optional. Cloud Identity ID of a channel partner who will be the direct reseller for the customer's order. This field is required for 2-tier transfer scenarios and can be provided via the request Parent binding as well. */
		channelPartnerId: FormControl<string | null | undefined>,

		/** Required. Customer's Cloud Identity ID */
		cloudIdentityId: FormControl<string | null | undefined>,

		/** Optional. Specifies the customer that will receive imported Cloud Identity information. Format: accounts/{account_id}/customers/{customer_id} */
		customer: FormControl<string | null | undefined>,

		/** Required. Customer domain. */
		domain: FormControl<string | null | undefined>,

		/** Required. Choose to overwrite an existing customer if found. This must be set to true if there is an existing customer with a conflicting region code or domain. */
		overwriteIfExists: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ImportCustomerRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ImportCustomerRequestFormProperties>({
			authToken: new FormControl<string | null | undefined>(undefined),
			channelPartnerId: new FormControl<string | null | undefined>(undefined),
			cloudIdentityId: new FormControl<string | null | undefined>(undefined),
			customer: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			overwriteIfExists: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response message for CloudChannelService.ListChannelPartnerLinks. */
	export interface GoogleCloudChannelV1ListChannelPartnerLinksResponse {

		/** The Channel partner links for a reseller. */
		channelPartnerLinks?: Array<GoogleCloudChannelV1ChannelPartnerLink>;

		/** A token to retrieve the next page of results. Pass to ListChannelPartnerLinksRequest.page_token to obtain that page. */
		nextPageToken?: string | null;
	}

	/** Response message for CloudChannelService.ListChannelPartnerLinks. */
	export interface GoogleCloudChannelV1ListChannelPartnerLinksResponseFormProperties {

		/** A token to retrieve the next page of results. Pass to ListChannelPartnerLinksRequest.page_token to obtain that page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ListChannelPartnerLinksResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ListChannelPartnerLinksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CloudChannelService.ListChannelPartnerRepricingConfigs. */
	export interface GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse {

		/** The repricing configs for this channel partner. */
		channelPartnerRepricingConfigs?: Array<GoogleCloudChannelV1ChannelPartnerRepricingConfig>;

		/** A token to retrieve the next page of results. Pass to ListChannelPartnerRepricingConfigsRequest.page_token to obtain that page. */
		nextPageToken?: string | null;
	}

	/** Response message for CloudChannelService.ListChannelPartnerRepricingConfigs. */
	export interface GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass to ListChannelPartnerRepricingConfigsRequest.page_token to obtain that page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CloudChannelService.ListCustomerRepricingConfigs. */
	export interface GoogleCloudChannelV1ListCustomerRepricingConfigsResponse {

		/** The repricing configs for this channel partner. */
		customerRepricingConfigs?: Array<GoogleCloudChannelV1CustomerRepricingConfig>;

		/** A token to retrieve the next page of results. Pass to ListCustomerRepricingConfigsRequest.page_token to obtain that page. */
		nextPageToken?: string | null;
	}

	/** Response message for CloudChannelService.ListCustomerRepricingConfigs. */
	export interface GoogleCloudChannelV1ListCustomerRepricingConfigsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass to ListCustomerRepricingConfigsRequest.page_token to obtain that page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ListCustomerRepricingConfigsResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ListCustomerRepricingConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CloudChannelService.ListCustomers. */
	export interface GoogleCloudChannelV1ListCustomersResponse {

		/** The customers belonging to a reseller or distributor. */
		customers?: Array<GoogleCloudChannelV1Customer>;

		/** A token to retrieve the next page of results. Pass to ListCustomersRequest.page_token to obtain that page. */
		nextPageToken?: string | null;
	}

	/** Response message for CloudChannelService.ListCustomers. */
	export interface GoogleCloudChannelV1ListCustomersResponseFormProperties {

		/** A token to retrieve the next page of results. Pass to ListCustomersRequest.page_token to obtain that page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ListCustomersResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ListCustomersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CloudChannelService.ListEntitlementChanges */
	export interface GoogleCloudChannelV1ListEntitlementChangesResponse {

		/** The list of entitlement changes. */
		entitlementChanges?: Array<GoogleCloudChannelV1EntitlementChange>;

		/** A token to list the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for CloudChannelService.ListEntitlementChanges */
	export interface GoogleCloudChannelV1ListEntitlementChangesResponseFormProperties {

		/** A token to list the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ListEntitlementChangesResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ListEntitlementChangesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CloudChannelService.ListEntitlements. */
	export interface GoogleCloudChannelV1ListEntitlementsResponse {

		/** The reseller customer's entitlements. */
		entitlements?: Array<GoogleCloudChannelV1Entitlement>;

		/** A token to list the next page of results. Pass to ListEntitlementsRequest.page_token to obtain that page. */
		nextPageToken?: string | null;
	}

	/** Response message for CloudChannelService.ListEntitlements. */
	export interface GoogleCloudChannelV1ListEntitlementsResponseFormProperties {

		/** A token to list the next page of results. Pass to ListEntitlementsRequest.page_token to obtain that page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ListEntitlementsResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ListEntitlementsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListOffers. */
	export interface GoogleCloudChannelV1ListOffersResponse {

		/** A token to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The list of Offers requested. */
		offers?: Array<GoogleCloudChannelV1Offer>;
	}

	/** Response message for ListOffers. */
	export interface GoogleCloudChannelV1ListOffersResponseFormProperties {

		/** A token to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ListOffersResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ListOffersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an offer made to resellers for purchase. An offer is associated with a Sku, has a plan for payment, a price, and defines the constraints for buying. */
	export interface GoogleCloudChannelV1Offer {

		/** Represents the constraints for buying the Offer. */
		constraints?: GoogleCloudChannelV1Constraints;

		/** The deal code of the offer to get a special promotion or discount. */
		dealCode?: string | null;

		/** Output only. End of the Offer validity time. */
		endTime?: string | null;

		/** Represents the marketing information for a Product, SKU or Offer. */
		marketingInfo?: GoogleCloudChannelV1MarketingInfo;

		/** Resource Name of the Offer. Format: accounts/{account_id}/offers/{offer_id} */
		name?: string | null;

		/** Parameters required to use current Offer to purchase. */
		parameterDefinitions?: Array<GoogleCloudChannelV1ParameterDefinition>;

		/** The payment plan for the Offer. Describes how to make a payment. */
		plan?: GoogleCloudChannelV1Plan;

		/** Price for each monetizable resource type. */
		priceByResources?: Array<GoogleCloudChannelV1PriceByResource>;

		/** Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs. */
		sku?: GoogleCloudChannelV1Sku;

		/** Start of the Offer validity time. */
		startTime?: string | null;
	}

	/** Represents an offer made to resellers for purchase. An offer is associated with a Sku, has a plan for payment, a price, and defines the constraints for buying. */
	export interface GoogleCloudChannelV1OfferFormProperties {

		/** The deal code of the offer to get a special promotion or discount. */
		dealCode: FormControl<string | null | undefined>,

		/** Output only. End of the Offer validity time. */
		endTime: FormControl<string | null | undefined>,

		/** Resource Name of the Offer. Format: accounts/{account_id}/offers/{offer_id} */
		name: FormControl<string | null | undefined>,

		/** Start of the Offer validity time. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1OfferFormGroup() {
		return new FormGroup<GoogleCloudChannelV1OfferFormProperties>({
			dealCode: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the marketing information for a Product, SKU or Offer. */
	export interface GoogleCloudChannelV1MarketingInfo {

		/** Represents media information. */
		defaultLogo?: GoogleCloudChannelV1Media;

		/** Human readable description. Description can contain HTML. */
		description?: string | null;

		/** Human readable name. */
		displayName?: string | null;
	}

	/** Represents the marketing information for a Product, SKU or Offer. */
	export interface GoogleCloudChannelV1MarketingInfoFormProperties {

		/** Human readable description. Description can contain HTML. */
		description: FormControl<string | null | undefined>,

		/** Human readable name. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1MarketingInfoFormGroup() {
		return new FormGroup<GoogleCloudChannelV1MarketingInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents media information. */
	export interface GoogleCloudChannelV1Media {

		/** URL of the media. */
		content?: string | null;

		/** Title of the media. */
		title?: string | null;

		/** Type of the media. */
		type?: GoogleCloudChannelV1MediaType | null;
	}

	/** Represents media information. */
	export interface GoogleCloudChannelV1MediaFormProperties {

		/** URL of the media. */
		content: FormControl<string | null | undefined>,

		/** Title of the media. */
		title: FormControl<string | null | undefined>,

		/** Type of the media. */
		type: FormControl<GoogleCloudChannelV1MediaType | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1MediaFormGroup() {
		return new FormGroup<GoogleCloudChannelV1MediaFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudChannelV1MediaType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1MediaType { MEDIA_TYPE_UNSPECIFIED = 0, MEDIA_TYPE_IMAGE = 1 }


	/** Parameter's definition. Specifies what parameter is required to use the current Offer to purchase. */
	export interface GoogleCloudChannelV1ParameterDefinition {

		/** If not empty, parameter values must be drawn from this list. For example, [us-west1, us-west2, ...] Applicable to STRING parameter type. */
		allowedValues?: Array<GoogleCloudChannelV1Value>;

		/** Data type and value of a parameter. */
		maxValue?: GoogleCloudChannelV1Value;

		/** Data type and value of a parameter. */
		minValue?: GoogleCloudChannelV1Value;

		/** Name of the parameter. */
		name?: string | null;

		/** If set to true, parameter is optional to purchase this Offer. */
		optional?: boolean | null;

		/** Data type of the parameter. Minimal value, Maximum value and allowed values will use specified data type here. */
		parameterType?: GoogleCloudChannelV1ParameterDefinitionParameterType | null;
	}

	/** Parameter's definition. Specifies what parameter is required to use the current Offer to purchase. */
	export interface GoogleCloudChannelV1ParameterDefinitionFormProperties {

		/** Name of the parameter. */
		name: FormControl<string | null | undefined>,

		/** If set to true, parameter is optional to purchase this Offer. */
		optional: FormControl<boolean | null | undefined>,

		/** Data type of the parameter. Minimal value, Maximum value and allowed values will use specified data type here. */
		parameterType: FormControl<GoogleCloudChannelV1ParameterDefinitionParameterType | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ParameterDefinitionFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ParameterDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			optional: new FormControl<boolean | null | undefined>(undefined),
			parameterType: new FormControl<GoogleCloudChannelV1ParameterDefinitionParameterType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1ParameterDefinitionParameterType { PARAMETER_TYPE_UNSPECIFIED = 0, INT64 = 1, STRING = 2, DOUBLE = 3, BOOLEAN = 4 }


	/** The payment plan for the Offer. Describes how to make a payment. */
	export interface GoogleCloudChannelV1Plan {

		/** Reseller Billing account to charge after an offer transaction. Only present for Google Cloud offers. */
		billingAccount?: string | null;

		/** Represents period in days/months/years. */
		paymentCycle?: GoogleCloudChannelV1Period;

		/** Describes how a reseller will be billed. */
		paymentPlan?: GoogleCloudChannelV1RenewalSettingsPaymentPlan | null;

		/** Specifies when the payment needs to happen. */
		paymentType?: GoogleCloudChannelV1PlanPaymentType | null;

		/** Represents period in days/months/years. */
		trialPeriod?: GoogleCloudChannelV1Period;
	}

	/** The payment plan for the Offer. Describes how to make a payment. */
	export interface GoogleCloudChannelV1PlanFormProperties {

		/** Reseller Billing account to charge after an offer transaction. Only present for Google Cloud offers. */
		billingAccount: FormControl<string | null | undefined>,

		/** Describes how a reseller will be billed. */
		paymentPlan: FormControl<GoogleCloudChannelV1RenewalSettingsPaymentPlan | null | undefined>,

		/** Specifies when the payment needs to happen. */
		paymentType: FormControl<GoogleCloudChannelV1PlanPaymentType | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1PlanFormGroup() {
		return new FormGroup<GoogleCloudChannelV1PlanFormProperties>({
			billingAccount: new FormControl<string | null | undefined>(undefined),
			paymentPlan: new FormControl<GoogleCloudChannelV1RenewalSettingsPaymentPlan | null | undefined>(undefined),
			paymentType: new FormControl<GoogleCloudChannelV1PlanPaymentType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1PlanPaymentType { PAYMENT_TYPE_UNSPECIFIED = 0, PREPAY = 1, POSTPAY = 2 }


	/** Represents price by resource type. */
	export interface GoogleCloudChannelV1PriceByResource {

		/** Represents the price of the Offer. */
		price?: GoogleCloudChannelV1Price;

		/** Specifies the price by time range. */
		pricePhases?: Array<GoogleCloudChannelV1PricePhase>;

		/** Resource Type. Example: SEAT */
		resourceType?: GoogleCloudChannelV1PriceByResourceResourceType | null;
	}

	/** Represents price by resource type. */
	export interface GoogleCloudChannelV1PriceByResourceFormProperties {

		/** Resource Type. Example: SEAT */
		resourceType: FormControl<GoogleCloudChannelV1PriceByResourceResourceType | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1PriceByResourceFormGroup() {
		return new FormGroup<GoogleCloudChannelV1PriceByResourceFormProperties>({
			resourceType: new FormControl<GoogleCloudChannelV1PriceByResourceResourceType | null | undefined>(undefined),
		});

	}


	/** Represents the price of the Offer. */
	export interface GoogleCloudChannelV1Price {

		/** Represents an amount of money with its currency type. */
		basePrice?: GoogleTypeMoney;

		/** Discount percentage, represented as decimal. For example, a 20% discount will be represent as 0.2. */
		discount?: number | null;

		/** Represents an amount of money with its currency type. */
		effectivePrice?: GoogleTypeMoney;

		/** Link to external price list, such as link to Google Voice rate card. */
		externalPriceUri?: string | null;
	}

	/** Represents the price of the Offer. */
	export interface GoogleCloudChannelV1PriceFormProperties {

		/** Discount percentage, represented as decimal. For example, a 20% discount will be represent as 0.2. */
		discount: FormControl<number | null | undefined>,

		/** Link to external price list, such as link to Google Voice rate card. */
		externalPriceUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1PriceFormGroup() {
		return new FormGroup<GoogleCloudChannelV1PriceFormProperties>({
			discount: new FormControl<number | null | undefined>(undefined),
			externalPriceUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the price by the duration of months. For example, a 20% discount for the first six months, then a 10% discount starting on the seventh month. */
	export interface GoogleCloudChannelV1PricePhase {

		/** Defines first period for the phase. */
		firstPeriod?: number | null;

		/** Defines first period for the phase. */
		lastPeriod?: number | null;

		/** Defines the phase period type. */
		periodType?: GoogleCloudChannelV1PeriodPeriodType | null;

		/** Represents the price of the Offer. */
		price?: GoogleCloudChannelV1Price;

		/** Price by the resource tiers. */
		priceTiers?: Array<GoogleCloudChannelV1PriceTier>;
	}

	/** Specifies the price by the duration of months. For example, a 20% discount for the first six months, then a 10% discount starting on the seventh month. */
	export interface GoogleCloudChannelV1PricePhaseFormProperties {

		/** Defines first period for the phase. */
		firstPeriod: FormControl<number | null | undefined>,

		/** Defines first period for the phase. */
		lastPeriod: FormControl<number | null | undefined>,

		/** Defines the phase period type. */
		periodType: FormControl<GoogleCloudChannelV1PeriodPeriodType | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1PricePhaseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1PricePhaseFormProperties>({
			firstPeriod: new FormControl<number | null | undefined>(undefined),
			lastPeriod: new FormControl<number | null | undefined>(undefined),
			periodType: new FormControl<GoogleCloudChannelV1PeriodPeriodType | null | undefined>(undefined),
		});

	}


	/** Defines price at resource tier level. For example, an offer with following definition : * Tier 1: Provide 25% discount for all seats between 1 and 25. * Tier 2: Provide 10% discount for all seats between 26 and 100. * Tier 3: Provide flat 15% discount for all seats above 100. Each of these tiers is represented as a PriceTier. */
	export interface GoogleCloudChannelV1PriceTier {

		/** First resource for which the tier price applies. */
		firstResource?: number | null;

		/** Last resource for which the tier price applies. */
		lastResource?: number | null;

		/** Represents the price of the Offer. */
		price?: GoogleCloudChannelV1Price;
	}

	/** Defines price at resource tier level. For example, an offer with following definition : * Tier 1: Provide 25% discount for all seats between 1 and 25. * Tier 2: Provide 10% discount for all seats between 26 and 100. * Tier 3: Provide flat 15% discount for all seats above 100. Each of these tiers is represented as a PriceTier. */
	export interface GoogleCloudChannelV1PriceTierFormProperties {

		/** First resource for which the tier price applies. */
		firstResource: FormControl<number | null | undefined>,

		/** Last resource for which the tier price applies. */
		lastResource: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1PriceTierFormGroup() {
		return new FormGroup<GoogleCloudChannelV1PriceTierFormProperties>({
			firstResource: new FormControl<number | null | undefined>(undefined),
			lastResource: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1PriceByResourceResourceType { RESOURCE_TYPE_UNSPECIFIED = 0, SEAT = 1, MAU = 2, GB = 3, LICENSED_USER = 4, MINUTES = 5, IAAS_USAGE = 6, SUBSCRIPTION = 7 }


	/** Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs. */
	export interface GoogleCloudChannelV1Sku {

		/** Represents the marketing information for a Product, SKU or Offer. */
		marketingInfo?: GoogleCloudChannelV1MarketingInfo;

		/** Resource Name of the SKU. Format: products/{product_id}/skus/{sku_id} */
		name?: string | null;

		/** A Product is the entity a customer uses when placing an order. For example, Google Workspace, Google Voice, etc. */
		product?: GoogleCloudChannelV1Product;
	}

	/** Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs. */
	export interface GoogleCloudChannelV1SkuFormProperties {

		/** Resource Name of the SKU. Format: products/{product_id}/skus/{sku_id} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1SkuFormGroup() {
		return new FormGroup<GoogleCloudChannelV1SkuFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Product is the entity a customer uses when placing an order. For example, Google Workspace, Google Voice, etc. */
	export interface GoogleCloudChannelV1Product {

		/** Represents the marketing information for a Product, SKU or Offer. */
		marketingInfo?: GoogleCloudChannelV1MarketingInfo;

		/** Resource Name of the Product. Format: products/{product_id} */
		name?: string | null;
	}

	/** A Product is the entity a customer uses when placing an order. For example, Google Workspace, Google Voice, etc. */
	export interface GoogleCloudChannelV1ProductFormProperties {

		/** Resource Name of the Product. Format: products/{product_id} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ProductFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ProductFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListProducts. */
	export interface GoogleCloudChannelV1ListProductsResponse {

		/** A token to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** List of Products requested. */
		products?: Array<GoogleCloudChannelV1Product>;
	}

	/** Response message for ListProducts. */
	export interface GoogleCloudChannelV1ListProductsResponseFormProperties {

		/** A token to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ListProductsResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ListProductsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListPurchasableOffers. */
	export interface GoogleCloudChannelV1ListPurchasableOffersResponse {

		/** A token to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The list of Offers requested. */
		purchasableOffers?: Array<GoogleCloudChannelV1PurchasableOffer>;
	}

	/** Response message for ListPurchasableOffers. */
	export interface GoogleCloudChannelV1ListPurchasableOffersResponseFormProperties {

		/** A token to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ListPurchasableOffersResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ListPurchasableOffersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Offer that you can purchase for a customer. This is used in the ListPurchasableOffer API response. */
	export interface GoogleCloudChannelV1PurchasableOffer {

		/** Represents an offer made to resellers for purchase. An offer is associated with a Sku, has a plan for payment, a price, and defines the constraints for buying. */
		offer?: GoogleCloudChannelV1Offer;
	}

	/** Offer that you can purchase for a customer. This is used in the ListPurchasableOffer API response. */
	export interface GoogleCloudChannelV1PurchasableOfferFormProperties {
	}
	export function CreateGoogleCloudChannelV1PurchasableOfferFormGroup() {
		return new FormGroup<GoogleCloudChannelV1PurchasableOfferFormProperties>({
		});

	}


	/** Response message for ListPurchasableSkus. */
	export interface GoogleCloudChannelV1ListPurchasableSkusResponse {

		/** A token to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The list of SKUs requested. */
		purchasableSkus?: Array<GoogleCloudChannelV1PurchasableSku>;
	}

	/** Response message for ListPurchasableSkus. */
	export interface GoogleCloudChannelV1ListPurchasableSkusResponseFormProperties {

		/** A token to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ListPurchasableSkusResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ListPurchasableSkusResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SKU that you can purchase. This is used in ListPurchasableSku API response. */
	export interface GoogleCloudChannelV1PurchasableSku {

		/** Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs. */
		sku?: GoogleCloudChannelV1Sku;
	}

	/** SKU that you can purchase. This is used in ListPurchasableSku API response. */
	export interface GoogleCloudChannelV1PurchasableSkuFormProperties {
	}
	export function CreateGoogleCloudChannelV1PurchasableSkuFormGroup() {
		return new FormGroup<GoogleCloudChannelV1PurchasableSkuFormProperties>({
		});

	}


	/** Response message for CloudChannelReportsService.ListReports. */
	export interface GoogleCloudChannelV1ListReportsResponse {

		/** Pass this token to FetchReportResultsRequest.page_token to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The reports available to the partner. */
		reports?: Array<GoogleCloudChannelV1Report>;
	}

	/** Response message for CloudChannelReportsService.ListReports. */
	export interface GoogleCloudChannelV1ListReportsResponseFormProperties {

		/** Pass this token to FetchReportResultsRequest.page_token to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ListReportsResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ListReportsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListSkuGroupBillableSkus. */
	export interface GoogleCloudChannelV1ListSkuGroupBillableSkusResponse {

		/** The list of billable SKUs in the requested SKU group. */
		billableSkus?: Array<GoogleCloudChannelV1BillableSku>;

		/** A token to retrieve the next page of results. Pass to ListSkuGroupBillableSkus.page_token to obtain that page. */
		nextPageToken?: string | null;
	}

	/** Response message for ListSkuGroupBillableSkus. */
	export interface GoogleCloudChannelV1ListSkuGroupBillableSkusResponseFormProperties {

		/** A token to retrieve the next page of results. Pass to ListSkuGroupBillableSkus.page_token to obtain that page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ListSkuGroupBillableSkusResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ListSkuGroupBillableSkusResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListSkuGroups. */
	export interface GoogleCloudChannelV1ListSkuGroupsResponse {

		/** A token to retrieve the next page of results. Pass to ListSkuGroups.page_token to obtain that page. */
		nextPageToken?: string | null;

		/** The list of SKU groups requested. */
		skuGroups?: Array<GoogleCloudChannelV1SkuGroup>;
	}

	/** Response message for ListSkuGroups. */
	export interface GoogleCloudChannelV1ListSkuGroupsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass to ListSkuGroups.page_token to obtain that page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ListSkuGroupsResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ListSkuGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the SKU group information. */
	export interface GoogleCloudChannelV1SkuGroup {

		/** Unique human readable identifier for the SKU group. */
		displayName?: string | null;

		/** Resource name of SKU group. Format: accounts/{account}/skuGroups/{sku_group}. Example: "accounts/C01234/skuGroups/3d50fd57-3157-4577-a5a9-a219b8490041". */
		name?: string | null;
	}

	/** Represents the SKU group information. */
	export interface GoogleCloudChannelV1SkuGroupFormProperties {

		/** Unique human readable identifier for the SKU group. */
		displayName: FormControl<string | null | undefined>,

		/** Resource name of SKU group. Format: accounts/{account}/skuGroups/{sku_group}. Example: "accounts/C01234/skuGroups/3d50fd57-3157-4577-a5a9-a219b8490041". */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1SkuGroupFormGroup() {
		return new FormGroup<GoogleCloudChannelV1SkuGroupFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListSkus. */
	export interface GoogleCloudChannelV1ListSkusResponse {

		/** A token to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The list of SKUs requested. */
		skus?: Array<GoogleCloudChannelV1Sku>;
	}

	/** Response message for ListSkus. */
	export interface GoogleCloudChannelV1ListSkusResponseFormProperties {

		/** A token to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ListSkusResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ListSkusResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response Message for ListSubscribers. */
	export interface GoogleCloudChannelV1ListSubscribersResponse {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of service accounts which have subscriber access to the topic. */
		serviceAccounts?: Array<string>;

		/** Name of the topic registered with the reseller. */
		topic?: string | null;
	}

	/** Response Message for ListSubscribers. */
	export interface GoogleCloudChannelV1ListSubscribersResponseFormProperties {

		/** A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Name of the topic registered with the reseller. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ListSubscribersResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ListSubscribersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CloudChannelService.ListTransferableOffers */
	export interface GoogleCloudChannelV1ListTransferableOffersRequest {

		/** Optional. The Billing Account to look up Offers for. Format: accounts/{account_id}/billingAccounts/{billing_account_id}. This field is only relevant for multi-currency accounts. It should be left empty for single currency accounts. */
		billingAccount?: string | null;

		/** Customer's Cloud Identity ID */
		cloudIdentityId?: string | null;

		/** A reseller should create a customer and use the resource name of that customer here. */
		customerName?: string | null;

		/** Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US". */
		languageCode?: string | null;

		/** Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 offers. The maximum value is 1000; the server will coerce values above 1000. */
		pageSize?: number | null;

		/** A token for a page of results other than the first page. Obtained using ListTransferableOffersResponse.next_page_token of the previous CloudChannelService.ListTransferableOffers call. */
		pageToken?: string | null;

		/** Required. The SKU to look up Offers for. */
		sku?: string | null;
	}

	/** Request message for CloudChannelService.ListTransferableOffers */
	export interface GoogleCloudChannelV1ListTransferableOffersRequestFormProperties {

		/** Optional. The Billing Account to look up Offers for. Format: accounts/{account_id}/billingAccounts/{billing_account_id}. This field is only relevant for multi-currency accounts. It should be left empty for single currency accounts. */
		billingAccount: FormControl<string | null | undefined>,

		/** Customer's Cloud Identity ID */
		cloudIdentityId: FormControl<string | null | undefined>,

		/** A reseller should create a customer and use the resource name of that customer here. */
		customerName: FormControl<string | null | undefined>,

		/** Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US". */
		languageCode: FormControl<string | null | undefined>,

		/** Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 offers. The maximum value is 1000; the server will coerce values above 1000. */
		pageSize: FormControl<number | null | undefined>,

		/** A token for a page of results other than the first page. Obtained using ListTransferableOffersResponse.next_page_token of the previous CloudChannelService.ListTransferableOffers call. */
		pageToken: FormControl<string | null | undefined>,

		/** Required. The SKU to look up Offers for. */
		sku: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ListTransferableOffersRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ListTransferableOffersRequestFormProperties>({
			billingAccount: new FormControl<string | null | undefined>(undefined),
			cloudIdentityId: new FormControl<string | null | undefined>(undefined),
			customerName: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CloudChannelService.ListTransferableOffers. */
	export interface GoogleCloudChannelV1ListTransferableOffersResponse {

		/** A token to retrieve the next page of results. Pass to ListTransferableOffersRequest.page_token to obtain that page. */
		nextPageToken?: string | null;

		/** Information about Offers for a customer that can be used for transfer. */
		transferableOffers?: Array<GoogleCloudChannelV1TransferableOffer>;
	}

	/** Response message for CloudChannelService.ListTransferableOffers. */
	export interface GoogleCloudChannelV1ListTransferableOffersResponseFormProperties {

		/** A token to retrieve the next page of results. Pass to ListTransferableOffersRequest.page_token to obtain that page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ListTransferableOffersResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ListTransferableOffersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TransferableOffer represents an Offer that can be used in Transfer. Read-only. */
	export interface GoogleCloudChannelV1TransferableOffer {

		/** Represents an offer made to resellers for purchase. An offer is associated with a Sku, has a plan for payment, a price, and defines the constraints for buying. */
		offer?: GoogleCloudChannelV1Offer;
	}

	/** TransferableOffer represents an Offer that can be used in Transfer. Read-only. */
	export interface GoogleCloudChannelV1TransferableOfferFormProperties {
	}
	export function CreateGoogleCloudChannelV1TransferableOfferFormGroup() {
		return new FormGroup<GoogleCloudChannelV1TransferableOfferFormProperties>({
		});

	}


	/** Request message for CloudChannelService.ListTransferableSkus */
	export interface GoogleCloudChannelV1ListTransferableSkusRequest {

		/** Optional. The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details. */
		authToken?: string | null;

		/** Customer's Cloud Identity ID */
		cloudIdentityId?: string | null;

		/** A reseller is required to create a customer and use the resource name of the created customer here. Customer_name uses the format: accounts/{account_id}/customers/{customer_id} */
		customerName?: string | null;

		/** The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US". Optional. */
		languageCode?: string | null;

		/** The requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 SKUs. The maximum value is 1000; the server will coerce values above 1000. Optional. */
		pageSize?: number | null;

		/** A token for a page of results other than the first page. Obtained using ListTransferableSkusResponse.next_page_token of the previous CloudChannelService.ListTransferableSkus call. Optional. */
		pageToken?: string | null;
	}

	/** Request message for CloudChannelService.ListTransferableSkus */
	export interface GoogleCloudChannelV1ListTransferableSkusRequestFormProperties {

		/** Optional. The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details. */
		authToken: FormControl<string | null | undefined>,

		/** Customer's Cloud Identity ID */
		cloudIdentityId: FormControl<string | null | undefined>,

		/** A reseller is required to create a customer and use the resource name of the created customer here. Customer_name uses the format: accounts/{account_id}/customers/{customer_id} */
		customerName: FormControl<string | null | undefined>,

		/** The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US". Optional. */
		languageCode: FormControl<string | null | undefined>,

		/** The requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 SKUs. The maximum value is 1000; the server will coerce values above 1000. Optional. */
		pageSize: FormControl<number | null | undefined>,

		/** A token for a page of results other than the first page. Obtained using ListTransferableSkusResponse.next_page_token of the previous CloudChannelService.ListTransferableSkus call. Optional. */
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ListTransferableSkusRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ListTransferableSkusRequestFormProperties>({
			authToken: new FormControl<string | null | undefined>(undefined),
			cloudIdentityId: new FormControl<string | null | undefined>(undefined),
			customerName: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CloudChannelService.ListTransferableSkus. */
	export interface GoogleCloudChannelV1ListTransferableSkusResponse {

		/** A token to retrieve the next page of results. Pass to ListTransferableSkusRequest.page_token to obtain that page. */
		nextPageToken?: string | null;

		/** Information about existing SKUs for a customer that needs a transfer. */
		transferableSkus?: Array<GoogleCloudChannelV1TransferableSku>;
	}

	/** Response message for CloudChannelService.ListTransferableSkus. */
	export interface GoogleCloudChannelV1ListTransferableSkusResponseFormProperties {

		/** A token to retrieve the next page of results. Pass to ListTransferableSkusRequest.page_token to obtain that page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ListTransferableSkusResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ListTransferableSkusResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TransferableSku represents information a reseller needs to view existing provisioned services for a customer that they do not own. Read-only. */
	export interface GoogleCloudChannelV1TransferableSku {

		/** Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs. */
		legacySku?: GoogleCloudChannelV1Sku;

		/** Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs. */
		sku?: GoogleCloudChannelV1Sku;

		/** Specifies transfer eligibility of a SKU. */
		transferEligibility?: GoogleCloudChannelV1TransferEligibility;
	}

	/** TransferableSku represents information a reseller needs to view existing provisioned services for a customer that they do not own. Read-only. */
	export interface GoogleCloudChannelV1TransferableSkuFormProperties {
	}
	export function CreateGoogleCloudChannelV1TransferableSkuFormGroup() {
		return new FormGroup<GoogleCloudChannelV1TransferableSkuFormProperties>({
		});

	}


	/** Specifies transfer eligibility of a SKU. */
	export interface GoogleCloudChannelV1TransferEligibility {

		/** Localized description if reseller is not eligible to transfer the SKU. */
		description?: string | null;

		/** Specified the reason for ineligibility. */
		ineligibilityReason?: GoogleCloudChannelV1TransferEligibilityIneligibilityReason | null;

		/** Whether reseller is eligible to transfer the SKU. */
		isEligible?: boolean | null;
	}

	/** Specifies transfer eligibility of a SKU. */
	export interface GoogleCloudChannelV1TransferEligibilityFormProperties {

		/** Localized description if reseller is not eligible to transfer the SKU. */
		description: FormControl<string | null | undefined>,

		/** Specified the reason for ineligibility. */
		ineligibilityReason: FormControl<GoogleCloudChannelV1TransferEligibilityIneligibilityReason | null | undefined>,

		/** Whether reseller is eligible to transfer the SKU. */
		isEligible: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1TransferEligibilityFormGroup() {
		return new FormGroup<GoogleCloudChannelV1TransferEligibilityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			ineligibilityReason: new FormControl<GoogleCloudChannelV1TransferEligibilityIneligibilityReason | null | undefined>(undefined),
			isEligible: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1TransferEligibilityIneligibilityReason { REASON_UNSPECIFIED = 0, PENDING_TOS_ACCEPTANCE = 1, SKU_NOT_ELIGIBLE = 2, SKU_SUSPENDED = 3, CHANNEL_PARTNER_NOT_AUTHORIZED_FOR_SKU = 4 }


	/** Provides contextual information about a google.longrunning.Operation. */
	export interface GoogleCloudChannelV1OperationMetadata {

		/** The RPC that initiated this Long Running Operation. */
		operationType?: GoogleCloudChannelV1OperationMetadataOperationType | null;
	}

	/** Provides contextual information about a google.longrunning.Operation. */
	export interface GoogleCloudChannelV1OperationMetadataFormProperties {

		/** The RPC that initiated this Long Running Operation. */
		operationType: FormControl<GoogleCloudChannelV1OperationMetadataOperationType | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1OperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudChannelV1OperationMetadataFormProperties>({
			operationType: new FormControl<GoogleCloudChannelV1OperationMetadataOperationType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1OperationMetadataOperationType { OPERATION_TYPE_UNSPECIFIED = 0, CREATE_ENTITLEMENT = 1, CHANGE_RENEWAL_SETTINGS = 2, START_PAID_SERVICE = 3, ACTIVATE_ENTITLEMENT = 4, SUSPEND_ENTITLEMENT = 5, CANCEL_ENTITLEMENT = 6, TRANSFER_ENTITLEMENTS = 7, TRANSFER_ENTITLEMENTS_TO_GOOGLE = 8, CHANGE_OFFER = 9, CHANGE_PARAMETERS = 10, PROVISION_CLOUD_IDENTITY = 11 }


	/** Request message for CloudChannelService.ProvisionCloudIdentity */
	export interface GoogleCloudChannelV1ProvisionCloudIdentityRequest {

		/** Cloud Identity information for the Cloud Channel Customer. */
		cloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfo;

		/** Information needed to create an Admin User for Google Workspace. */
		user?: GoogleCloudChannelV1AdminUser;

		/** Validate the request and preview the review, but do not post it. */
		validateOnly?: boolean | null;
	}

	/** Request message for CloudChannelService.ProvisionCloudIdentity */
	export interface GoogleCloudChannelV1ProvisionCloudIdentityRequestFormProperties {

		/** Validate the request and preview the review, but do not post it. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ProvisionCloudIdentityRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ProvisionCloudIdentityRequestFormProperties>({
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response message for QueryEligibleBillingAccounts. */
	export interface GoogleCloudChannelV1QueryEligibleBillingAccountsResponse {

		/** List of SKU purchase groups where each group represents a set of SKUs that must be purchased using the same billing account. Each SKU from [QueryEligibleBillingAccountsRequest.skus] will appear in exactly one SKU group. */
		skuPurchaseGroups?: Array<GoogleCloudChannelV1SkuPurchaseGroup>;
	}

	/** Response message for QueryEligibleBillingAccounts. */
	export interface GoogleCloudChannelV1QueryEligibleBillingAccountsResponseFormProperties {
	}
	export function CreateGoogleCloudChannelV1QueryEligibleBillingAccountsResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1QueryEligibleBillingAccountsResponseFormProperties>({
		});

	}


	/** Represents a set of SKUs that must be purchased using the same billing account. */
	export interface GoogleCloudChannelV1SkuPurchaseGroup {

		/** List of billing accounts that are eligible to purhcase these SKUs. */
		billingAccountPurchaseInfos?: Array<GoogleCloudChannelV1BillingAccountPurchaseInfo>;

		/** Resource names of the SKUs included in this group. Format: products/{product_id}/skus/{sku_id}. */
		skus?: Array<string>;
	}

	/** Represents a set of SKUs that must be purchased using the same billing account. */
	export interface GoogleCloudChannelV1SkuPurchaseGroupFormProperties {
	}
	export function CreateGoogleCloudChannelV1SkuPurchaseGroupFormGroup() {
		return new FormGroup<GoogleCloudChannelV1SkuPurchaseGroupFormProperties>({
		});

	}


	/** Request Message for RegisterSubscriber. */
	export interface GoogleCloudChannelV1RegisterSubscriberRequest {

		/** Required. Service account that provides subscriber access to the registered topic. */
		serviceAccount?: string | null;
	}

	/** Request Message for RegisterSubscriber. */
	export interface GoogleCloudChannelV1RegisterSubscriberRequestFormProperties {

		/** Required. Service account that provides subscriber access to the registered topic. */
		serviceAccount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1RegisterSubscriberRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1RegisterSubscriberRequestFormProperties>({
			serviceAccount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response Message for RegisterSubscriber. */
	export interface GoogleCloudChannelV1RegisterSubscriberResponse {

		/** Name of the topic the subscriber will listen to. */
		topic?: string | null;
	}

	/** Response Message for RegisterSubscriber. */
	export interface GoogleCloudChannelV1RegisterSubscriberResponseFormProperties {

		/** Name of the topic the subscriber will listen to. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1RegisterSubscriberResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1RegisterSubscriberResponseFormProperties>({
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a RunReportJob operation. Contains the name to use in FetchReportResultsRequest.report_job and the status of the operation. */
	export interface GoogleCloudChannelV1ReportJob {

		/** Required. The resource name of a report job. Name uses the format: `accounts/{account_id}/reportJobs/{report_job_id}` */
		name?: string | null;

		/** Status of a report generation process. */
		reportStatus?: GoogleCloudChannelV1ReportStatus;
	}

	/** The result of a RunReportJob operation. Contains the name to use in FetchReportResultsRequest.report_job and the status of the operation. */
	export interface GoogleCloudChannelV1ReportJobFormProperties {

		/** Required. The resource name of a report job. Name uses the format: `accounts/{account_id}/reportJobs/{report_job_id}` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ReportJobFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ReportJobFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status of a report generation process. */
	export interface GoogleCloudChannelV1ReportStatus {

		/** The report generation's completion time. */
		endTime?: string | null;

		/** The report generation's start time. */
		startTime?: string | null;

		/** The current state of the report generation process. */
		state?: GoogleCloudChannelV1ReportStatusState | null;
	}

	/** Status of a report generation process. */
	export interface GoogleCloudChannelV1ReportStatusFormProperties {

		/** The report generation's completion time. */
		endTime: FormControl<string | null | undefined>,

		/** The report generation's start time. */
		startTime: FormControl<string | null | undefined>,

		/** The current state of the report generation process. */
		state: FormControl<GoogleCloudChannelV1ReportStatusState | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1ReportStatusFormGroup() {
		return new FormGroup<GoogleCloudChannelV1ReportStatusFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudChannelV1ReportStatusState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1ReportStatusState { STATE_UNSPECIFIED = 0, STARTED = 1, WRITING = 2, AVAILABLE = 3, FAILED = 4 }


	/** Request message for CloudChannelReportsService.RunReportJob. */
	export interface GoogleCloudChannelV1RunReportJobRequest {

		/** A representation of usage or invoice date ranges. */
		dateRange?: GoogleCloudChannelV1DateRange;

		/** Optional. A structured string that defines conditions on dimension columns to restrict the report output. Filters support logical operators (AND, OR, NOT) and conditional operators (=, !=, <, >, <=, and >=) using `column_id` as keys. For example: `(customer:"accounts/C123abc/customers/S456def" OR customer:"accounts/C123abc/customers/S789ghi") AND invoice_start_date.year >= 2022` */
		filter?: string | null;

		/** Optional. The BCP-47 language code, such as "en-US". If specified, the response is localized to the corresponding language code if the original data sources support it. Default is "en-US". */
		languageCode?: string | null;
	}

	/** Request message for CloudChannelReportsService.RunReportJob. */
	export interface GoogleCloudChannelV1RunReportJobRequestFormProperties {

		/** Optional. A structured string that defines conditions on dimension columns to restrict the report output. Filters support logical operators (AND, OR, NOT) and conditional operators (=, !=, <, >, <=, and >=) using `column_id` as keys. For example: `(customer:"accounts/C123abc/customers/S456def" OR customer:"accounts/C123abc/customers/S789ghi") AND invoice_start_date.year >= 2022` */
		filter: FormControl<string | null | undefined>,

		/** Optional. The BCP-47 language code, such as "en-US". If specified, the response is localized to the corresponding language code if the original data sources support it. Default is "en-US". */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1RunReportJobRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1RunReportJobRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CloudChannelReportsService.RunReportJob. */
	export interface GoogleCloudChannelV1RunReportJobResponse {

		/** The result of a RunReportJob operation. Contains the name to use in FetchReportResultsRequest.report_job and the status of the operation. */
		reportJob?: GoogleCloudChannelV1ReportJob;

		/** The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults. */
		reportMetadata?: GoogleCloudChannelV1ReportResultsMetadata;
	}

	/** Response message for CloudChannelReportsService.RunReportJob. */
	export interface GoogleCloudChannelV1RunReportJobResponseFormProperties {
	}
	export function CreateGoogleCloudChannelV1RunReportJobResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1RunReportJobResponseFormProperties>({
		});

	}


	/** Request message for CloudChannelService.StartPaidService. */
	export interface GoogleCloudChannelV1StartPaidServiceRequest {

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId?: string | null;
	}

	/** Request message for CloudChannelService.StartPaidService. */
	export interface GoogleCloudChannelV1StartPaidServiceRequestFormProperties {

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1StartPaidServiceRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1StartPaidServiceRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information which resellers will get as part of notification from Pub/Sub. */
	export interface GoogleCloudChannelV1SubscriberEvent {

		/** Represents Pub/Sub message content describing customer update. */
		customerEvent?: GoogleCloudChannelV1CustomerEvent;

		/** Represents Pub/Sub message content describing entitlement update. */
		entitlementEvent?: GoogleCloudChannelV1EntitlementEvent;
	}

	/** Represents information which resellers will get as part of notification from Pub/Sub. */
	export interface GoogleCloudChannelV1SubscriberEventFormProperties {
	}
	export function CreateGoogleCloudChannelV1SubscriberEventFormGroup() {
		return new FormGroup<GoogleCloudChannelV1SubscriberEventFormProperties>({
		});

	}


	/** Request message for CloudChannelService.SuspendEntitlement. */
	export interface GoogleCloudChannelV1SuspendEntitlementRequest {

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId?: string | null;
	}

	/** Request message for CloudChannelService.SuspendEntitlement. */
	export interface GoogleCloudChannelV1SuspendEntitlementRequestFormProperties {

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1SuspendEntitlementRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1SuspendEntitlementRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CloudChannelService.TransferEntitlements. */
	export interface GoogleCloudChannelV1TransferEntitlementsRequest {

		/** The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details. */
		authToken?: string | null;

		/** Required. The new entitlements to create or transfer. */
		entitlements?: Array<GoogleCloudChannelV1Entitlement>;

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId?: string | null;
	}

	/** Request message for CloudChannelService.TransferEntitlements. */
	export interface GoogleCloudChannelV1TransferEntitlementsRequestFormProperties {

		/** The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details. */
		authToken: FormControl<string | null | undefined>,

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1TransferEntitlementsRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1TransferEntitlementsRequestFormProperties>({
			authToken: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CloudChannelService.TransferEntitlements. This is put in the response field of google.longrunning.Operation. */
	export interface GoogleCloudChannelV1TransferEntitlementsResponse {

		/** The transferred entitlements. */
		entitlements?: Array<GoogleCloudChannelV1Entitlement>;
	}

	/** Response message for CloudChannelService.TransferEntitlements. This is put in the response field of google.longrunning.Operation. */
	export interface GoogleCloudChannelV1TransferEntitlementsResponseFormProperties {
	}
	export function CreateGoogleCloudChannelV1TransferEntitlementsResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1TransferEntitlementsResponseFormProperties>({
		});

	}


	/** Request message for CloudChannelService.TransferEntitlementsToGoogle. */
	export interface GoogleCloudChannelV1TransferEntitlementsToGoogleRequest {

		/** Required. The entitlements to transfer to Google. */
		entitlements?: Array<GoogleCloudChannelV1Entitlement>;

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId?: string | null;
	}

	/** Request message for CloudChannelService.TransferEntitlementsToGoogle. */
	export interface GoogleCloudChannelV1TransferEntitlementsToGoogleRequestFormProperties {

		/** Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1TransferEntitlementsToGoogleRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1TransferEntitlementsToGoogleRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request Message for UnregisterSubscriber. */
	export interface GoogleCloudChannelV1UnregisterSubscriberRequest {

		/** Required. Service account to unregister from subscriber access to the topic. */
		serviceAccount?: string | null;
	}

	/** Request Message for UnregisterSubscriber. */
	export interface GoogleCloudChannelV1UnregisterSubscriberRequestFormProperties {

		/** Required. Service account to unregister from subscriber access to the topic. */
		serviceAccount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1UnregisterSubscriberRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1UnregisterSubscriberRequestFormProperties>({
			serviceAccount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response Message for UnregisterSubscriber. */
	export interface GoogleCloudChannelV1UnregisterSubscriberResponse {

		/** Name of the topic the service account subscriber access was removed from. */
		topic?: string | null;
	}

	/** Response Message for UnregisterSubscriber. */
	export interface GoogleCloudChannelV1UnregisterSubscriberResponseFormProperties {

		/** Name of the topic the service account subscriber access was removed from. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1UnregisterSubscriberResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1UnregisterSubscriberResponseFormProperties>({
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CloudChannelService.UpdateChannelPartnerLink */
	export interface GoogleCloudChannelV1UpdateChannelPartnerLinkRequest {

		/** Entity representing a link between distributors and their indirect resellers in an n-tier resale channel. */
		channelPartnerLink?: GoogleCloudChannelV1ChannelPartnerLink;

		/** Required. The update mask that applies to the resource. The only allowable value for an update mask is channel_partner_link.link_state. */
		updateMask?: string | null;
	}

	/** Request message for CloudChannelService.UpdateChannelPartnerLink */
	export interface GoogleCloudChannelV1UpdateChannelPartnerLinkRequestFormProperties {

		/** Required. The update mask that applies to the resource. The only allowable value for an update mask is channel_partner_link.link_state. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1UpdateChannelPartnerLinkRequestFormGroup() {
		return new FormGroup<GoogleCloudChannelV1UpdateChannelPartnerLinkRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Association links that an entitlement has to other entitlements. */
	export interface GoogleCloudChannelV1alpha1AssociationInfo {

		/** The name of the base entitlement, for which this entitlement is an add-on. */
		baseEntitlement?: string | null;
	}

	/** Association links that an entitlement has to other entitlements. */
	export interface GoogleCloudChannelV1alpha1AssociationInfoFormProperties {

		/** The name of the base entitlement, for which this entitlement is an add-on. */
		baseEntitlement: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1alpha1AssociationInfoFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1AssociationInfoFormProperties>({
			baseEntitlement: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents Pub/Sub messages about updates to a Channel Partner. You can retrieve updated values through the ChannelPartnerLinks API. */
	export interface GoogleCloudChannelV1alpha1ChannelPartnerEvent {

		/** Resource name for the Channel Partner Link. Channel_partner uses the format: accounts/{account_id}/channelPartnerLinks/{channel_partner_id} */
		channelPartner?: string | null;

		/** Type of event performed on the Channel Partner. */
		eventType?: GoogleCloudChannelV1alpha1ChannelPartnerEventEventType | null;
	}

	/** Represents Pub/Sub messages about updates to a Channel Partner. You can retrieve updated values through the ChannelPartnerLinks API. */
	export interface GoogleCloudChannelV1alpha1ChannelPartnerEventFormProperties {

		/** Resource name for the Channel Partner Link. Channel_partner uses the format: accounts/{account_id}/channelPartnerLinks/{channel_partner_id} */
		channelPartner: FormControl<string | null | undefined>,

		/** Type of event performed on the Channel Partner. */
		eventType: FormControl<GoogleCloudChannelV1alpha1ChannelPartnerEventEventType | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1alpha1ChannelPartnerEventFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1ChannelPartnerEventFormProperties>({
			channelPartner: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<GoogleCloudChannelV1alpha1ChannelPartnerEventEventType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1alpha1ChannelPartnerEventEventType { TYPE_UNSPECIFIED = 0, LINK_STATE_CHANGED = 1, PARTNER_ADVANTAGE_INFO_CHANGED = 2 }


	/** The definition of a report column. Specifies the data properties in the corresponding position of the report rows. */
	export interface GoogleCloudChannelV1alpha1Column {

		/** The unique name of the column (for example, customer_domain, channel_partner, customer_cost). You can use column IDs in RunReportJobRequest.filter. To see all reports and their columns, call CloudChannelReportsService.ListReports. */
		columnId?: string | null;

		/** The type of the values for this column. */
		dataType?: GoogleCloudChannelV1ColumnDataType | null;

		/** The column's display name. */
		displayName?: string | null;
	}

	/** The definition of a report column. Specifies the data properties in the corresponding position of the report rows. */
	export interface GoogleCloudChannelV1alpha1ColumnFormProperties {

		/** The unique name of the column (for example, customer_domain, channel_partner, customer_cost). You can use column IDs in RunReportJobRequest.filter. To see all reports and their columns, call CloudChannelReportsService.ListReports. */
		columnId: FormControl<string | null | undefined>,

		/** The type of the values for this column. */
		dataType: FormControl<GoogleCloudChannelV1ColumnDataType | null | undefined>,

		/** The column's display name. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1alpha1ColumnFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1ColumnFormProperties>({
			columnId: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<GoogleCloudChannelV1ColumnDataType | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Commitment settings for commitment-based offers. */
	export interface GoogleCloudChannelV1alpha1CommitmentSettings {

		/** Output only. Commitment end timestamp. */
		endTime?: string | null;

		/** Renewal settings for renewable Offers. */
		renewalSettings?: GoogleCloudChannelV1alpha1RenewalSettings;

		/** Output only. Commitment start timestamp. */
		startTime?: string | null;
	}

	/** Commitment settings for commitment-based offers. */
	export interface GoogleCloudChannelV1alpha1CommitmentSettingsFormProperties {

		/** Output only. Commitment end timestamp. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Commitment start timestamp. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1alpha1CommitmentSettingsFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1CommitmentSettingsFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Renewal settings for renewable Offers. */
	export interface GoogleCloudChannelV1alpha1RenewalSettings {

		/** If true, disables commitment-based offer on renewal and switches to flexible or pay as you go. Deprecated: Use `payment_plan` instead. */
		disableCommitment?: boolean | null;

		/** If false, the plan will be completed at the end date. */
		enableRenewal?: boolean | null;

		/** Represents period in days/months/years. */
		paymentCycle?: GoogleCloudChannelV1alpha1Period;

		/** Set if enable_renewal=true. Deprecated: Use `payment_cycle` instead. */
		paymentOption?: GoogleCloudChannelV1alpha1RenewalSettingsPaymentOption | null;

		/** Describes how a reseller will be billed. */
		paymentPlan?: GoogleCloudChannelV1RenewalSettingsPaymentPlan | null;

		/** If true and enable_renewal = true, the unit (for example seats or licenses) will be set to the number of active units at renewal time. */
		resizeUnitCount?: boolean | null;

		/** Output only. The offer resource name that the entitlement will renew on at the end date. Takes the form: accounts/{account_id}/offers/{offer_id}. */
		scheduledRenewalOffer?: string | null;
	}

	/** Renewal settings for renewable Offers. */
	export interface GoogleCloudChannelV1alpha1RenewalSettingsFormProperties {

		/** If true, disables commitment-based offer on renewal and switches to flexible or pay as you go. Deprecated: Use `payment_plan` instead. */
		disableCommitment: FormControl<boolean | null | undefined>,

		/** If false, the plan will be completed at the end date. */
		enableRenewal: FormControl<boolean | null | undefined>,

		/** Set if enable_renewal=true. Deprecated: Use `payment_cycle` instead. */
		paymentOption: FormControl<GoogleCloudChannelV1alpha1RenewalSettingsPaymentOption | null | undefined>,

		/** Describes how a reseller will be billed. */
		paymentPlan: FormControl<GoogleCloudChannelV1RenewalSettingsPaymentPlan | null | undefined>,

		/** If true and enable_renewal = true, the unit (for example seats or licenses) will be set to the number of active units at renewal time. */
		resizeUnitCount: FormControl<boolean | null | undefined>,

		/** Output only. The offer resource name that the entitlement will renew on at the end date. Takes the form: accounts/{account_id}/offers/{offer_id}. */
		scheduledRenewalOffer: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1alpha1RenewalSettingsFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1RenewalSettingsFormProperties>({
			disableCommitment: new FormControl<boolean | null | undefined>(undefined),
			enableRenewal: new FormControl<boolean | null | undefined>(undefined),
			paymentOption: new FormControl<GoogleCloudChannelV1alpha1RenewalSettingsPaymentOption | null | undefined>(undefined),
			paymentPlan: new FormControl<GoogleCloudChannelV1RenewalSettingsPaymentPlan | null | undefined>(undefined),
			resizeUnitCount: new FormControl<boolean | null | undefined>(undefined),
			scheduledRenewalOffer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents period in days/months/years. */
	export interface GoogleCloudChannelV1alpha1Period {

		/** Total duration of Period Type defined. */
		duration?: number | null;

		/** Period Type. */
		periodType?: GoogleCloudChannelV1PeriodPeriodType | null;
	}

	/** Represents period in days/months/years. */
	export interface GoogleCloudChannelV1alpha1PeriodFormProperties {

		/** Total duration of Period Type defined. */
		duration: FormControl<number | null | undefined>,

		/** Period Type. */
		periodType: FormControl<GoogleCloudChannelV1PeriodPeriodType | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1alpha1PeriodFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1PeriodFormProperties>({
			duration: new FormControl<number | null | undefined>(undefined),
			periodType: new FormControl<GoogleCloudChannelV1PeriodPeriodType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1alpha1RenewalSettingsPaymentOption { PAYMENT_OPTION_UNSPECIFIED = 0, ANNUAL = 1, MONTHLY = 2 }


	/** Represents Pub/Sub message content describing customer update. */
	export interface GoogleCloudChannelV1alpha1CustomerEvent {

		/** Resource name of the customer. Format: accounts/{account_id}/customers/{customer_id} */
		customer?: string | null;

		/** Type of event which happened on the customer. */
		eventType?: GoogleCloudChannelV1CustomerEventEventType | null;
	}

	/** Represents Pub/Sub message content describing customer update. */
	export interface GoogleCloudChannelV1alpha1CustomerEventFormProperties {

		/** Resource name of the customer. Format: accounts/{account_id}/customers/{customer_id} */
		customer: FormControl<string | null | undefined>,

		/** Type of event which happened on the customer. */
		eventType: FormControl<GoogleCloudChannelV1CustomerEventEventType | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1alpha1CustomerEventFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1CustomerEventFormProperties>({
			customer: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<GoogleCloudChannelV1CustomerEventEventType | null | undefined>(undefined),
		});

	}


	/** A representation of usage or invoice date ranges. */
	export interface GoogleCloudChannelV1alpha1DateRange {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		invoiceEndDate?: GoogleTypeDate;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		invoiceStartDate?: GoogleTypeDate;

		/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
		usageEndDateTime?: GoogleTypeDateTime;

		/** Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations. */
		usageStartDateTime?: GoogleTypeDateTime;
	}

	/** A representation of usage or invoice date ranges. */
	export interface GoogleCloudChannelV1alpha1DateRangeFormProperties {
	}
	export function CreateGoogleCloudChannelV1alpha1DateRangeFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1DateRangeFormProperties>({
		});

	}


	/** An entitlement is a representation of a customer's ability to use a service. */
	export interface GoogleCloudChannelV1alpha1Entitlement {

		/** The current number of users that are assigned a license for the product defined in provisioned_service.skuId. Read-only. Deprecated: Use `parameters` instead. */
		assignedUnits?: number | null;

		/** Association links that an entitlement has to other entitlements. */
		associationInfo?: GoogleCloudChannelV1alpha1AssociationInfo;

		/** Optional. The billing account resource name that is used to pay for this entitlement. */
		billingAccount?: string | null;

		/** Cloud Identity ID of a channel partner who will be the direct reseller for the customer's order. This field is generally used in 2-tier ordering, where the order is placed by a top-level distributor on behalf of their channel partner or reseller. Required for distributors. Deprecated: `channel_partner_id` has been moved to the Customer. */
		channelPartnerId?: string | null;

		/** Commitment settings for commitment-based offers. */
		commitmentSettings?: GoogleCloudChannelV1alpha1CommitmentSettings;

		/** Output only. The time at which the entitlement is created. */
		createTime?: string | null;

		/** Maximum number of units for a non commitment-based Offer, such as Flexible, Trial or Free entitlements. For commitment-based entitlements, this is a read-only field, which only the internal support team can update. Deprecated: Use `parameters` instead. */
		maxUnits?: number | null;

		/** Output only. Resource name of an entitlement in the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}. */
		name?: string | null;

		/** Number of units for a commitment-based Offer. For example, for seat-based Offers, this would be the number of seats; for license-based Offers, this would be the number of licenses. Required for creating commitment-based Offers. Deprecated: Use `parameters` instead. */
		numUnits?: number | null;

		/** Required. The offer resource name for which the entitlement is to be created. Takes the form: accounts/{account_id}/offers/{offer_id}. */
		offer?: string | null;

		/** Extended entitlement parameters. When creating an entitlement, valid parameter names and values are defined in the Offer.parameter_definitions. For Google Workspace, the following Parameters may be accepted as input: - max_units: The maximum assignable units for a flexible offer OR - num_units: The total commitment for commitment-based offers The response may additionally include the following output-only Parameters: - assigned_units: The number of licenses assigned to users. For Google Cloud billing subaccounts, the following Parameter may be accepted as input: - display_name: The display name of the billing subaccount. */
		parameters?: Array<GoogleCloudChannelV1alpha1Parameter>;

		/** Service provisioned for an entitlement. */
		provisionedService?: GoogleCloudChannelV1alpha1ProvisionedService;

		/** Output only. Current provisioning state of the entitlement. */
		provisioningState?: GoogleCloudChannelV1alpha1EntitlementProvisioningState | null;

		/** Optional. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given, it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters. This is only supported for Google Workspace entitlements. */
		purchaseOrderId?: string | null;

		/** Output only. Enumerable of all current suspension reasons for an entitlement. */
		suspensionReasons?: Array<GoogleCloudChannelV1EntitlementChangeSuspensionReason>;

		/** Settings for trial offers. */
		trialSettings?: GoogleCloudChannelV1alpha1TrialSettings;

		/** Output only. The time at which the entitlement is updated. */
		updateTime?: string | null;
	}

	/** An entitlement is a representation of a customer's ability to use a service. */
	export interface GoogleCloudChannelV1alpha1EntitlementFormProperties {

		/** The current number of users that are assigned a license for the product defined in provisioned_service.skuId. Read-only. Deprecated: Use `parameters` instead. */
		assignedUnits: FormControl<number | null | undefined>,

		/** Optional. The billing account resource name that is used to pay for this entitlement. */
		billingAccount: FormControl<string | null | undefined>,

		/** Cloud Identity ID of a channel partner who will be the direct reseller for the customer's order. This field is generally used in 2-tier ordering, where the order is placed by a top-level distributor on behalf of their channel partner or reseller. Required for distributors. Deprecated: `channel_partner_id` has been moved to the Customer. */
		channelPartnerId: FormControl<string | null | undefined>,

		/** Output only. The time at which the entitlement is created. */
		createTime: FormControl<string | null | undefined>,

		/** Maximum number of units for a non commitment-based Offer, such as Flexible, Trial or Free entitlements. For commitment-based entitlements, this is a read-only field, which only the internal support team can update. Deprecated: Use `parameters` instead. */
		maxUnits: FormControl<number | null | undefined>,

		/** Output only. Resource name of an entitlement in the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}. */
		name: FormControl<string | null | undefined>,

		/** Number of units for a commitment-based Offer. For example, for seat-based Offers, this would be the number of seats; for license-based Offers, this would be the number of licenses. Required for creating commitment-based Offers. Deprecated: Use `parameters` instead. */
		numUnits: FormControl<number | null | undefined>,

		/** Required. The offer resource name for which the entitlement is to be created. Takes the form: accounts/{account_id}/offers/{offer_id}. */
		offer: FormControl<string | null | undefined>,

		/** Output only. Current provisioning state of the entitlement. */
		provisioningState: FormControl<GoogleCloudChannelV1alpha1EntitlementProvisioningState | null | undefined>,

		/** Optional. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given, it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters. This is only supported for Google Workspace entitlements. */
		purchaseOrderId: FormControl<string | null | undefined>,

		/** Output only. The time at which the entitlement is updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1alpha1EntitlementFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1EntitlementFormProperties>({
			assignedUnits: new FormControl<number | null | undefined>(undefined),
			billingAccount: new FormControl<string | null | undefined>(undefined),
			channelPartnerId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			maxUnits: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			numUnits: new FormControl<number | null | undefined>(undefined),
			offer: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<GoogleCloudChannelV1alpha1EntitlementProvisioningState | null | undefined>(undefined),
			purchaseOrderId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition for extended entitlement parameters. */
	export interface GoogleCloudChannelV1alpha1Parameter {

		/** Output only. Specifies whether this parameter is allowed to be changed. For example, for a Google Workspace Business Starter entitlement in commitment plan, num_units is editable when entitlement is active. */
		editable?: boolean | null;

		/** Name of the parameter. */
		name?: string | null;

		/** Data type and value of a parameter. */
		value?: GoogleCloudChannelV1alpha1Value;
	}

	/** Definition for extended entitlement parameters. */
	export interface GoogleCloudChannelV1alpha1ParameterFormProperties {

		/** Output only. Specifies whether this parameter is allowed to be changed. For example, for a Google Workspace Business Starter entitlement in commitment plan, num_units is editable when entitlement is active. */
		editable: FormControl<boolean | null | undefined>,

		/** Name of the parameter. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1alpha1ParameterFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1ParameterFormProperties>({
			editable: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data type and value of a parameter. */
	export interface GoogleCloudChannelV1alpha1Value {

		/** Represents a boolean value. */
		boolValue?: boolean | null;

		/** Represents a double value. */
		doubleValue?: number | null;

		/** Represents an int64 value. */
		int64Value?: string | null;

		/** Represents an 'Any' proto value. */
		protoValue?: {[id: string]: any };

		/** Represents a string value. */
		stringValue?: string | null;
	}

	/** Data type and value of a parameter. */
	export interface GoogleCloudChannelV1alpha1ValueFormProperties {

		/** Represents a boolean value. */
		boolValue: FormControl<boolean | null | undefined>,

		/** Represents a double value. */
		doubleValue: FormControl<number | null | undefined>,

		/** Represents an int64 value. */
		int64Value: FormControl<string | null | undefined>,

		/** Represents an 'Any' proto value. */
		protoValue: FormControl<{[id: string]: any } | null | undefined>,

		/** Represents a string value. */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1alpha1ValueFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1ValueFormProperties>({
			boolValue: new FormControl<boolean | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			int64Value: new FormControl<string | null | undefined>(undefined),
			protoValue: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Service provisioned for an entitlement. */
	export interface GoogleCloudChannelV1alpha1ProvisionedService {

		/** Output only. The product pertaining to the provisioning resource as specified in the Offer. */
		productId?: string | null;

		/** Output only. Provisioning ID of the entitlement. For Google Workspace, this is the underlying Subscription ID. For Google Cloud, this is the Billing Account ID of the billing subaccount. */
		provisioningId?: string | null;

		/** Output only. The SKU pertaining to the provisioning resource as specified in the Offer. */
		skuId?: string | null;
	}

	/** Service provisioned for an entitlement. */
	export interface GoogleCloudChannelV1alpha1ProvisionedServiceFormProperties {

		/** Output only. The product pertaining to the provisioning resource as specified in the Offer. */
		productId: FormControl<string | null | undefined>,

		/** Output only. Provisioning ID of the entitlement. For Google Workspace, this is the underlying Subscription ID. For Google Cloud, this is the Billing Account ID of the billing subaccount. */
		provisioningId: FormControl<string | null | undefined>,

		/** Output only. The SKU pertaining to the provisioning resource as specified in the Offer. */
		skuId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1alpha1ProvisionedServiceFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1ProvisionedServiceFormProperties>({
			productId: new FormControl<string | null | undefined>(undefined),
			provisioningId: new FormControl<string | null | undefined>(undefined),
			skuId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1alpha1EntitlementProvisioningState { PROVISIONING_STATE_UNSPECIFIED = 0, ACTIVE = 1, CANCELED = 2, COMPLETE = 3, PENDING = 4, SUSPENDED = 5 }


	/** Settings for trial offers. */
	export interface GoogleCloudChannelV1alpha1TrialSettings {

		/** Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example [Epoch converter](https://www.epochconverter.com). */
		endTime?: string | null;

		/** Determines if the entitlement is in a trial or not: * `true` - The entitlement is in trial. * `false` - The entitlement is not in trial. */
		trial?: boolean | null;
	}

	/** Settings for trial offers. */
	export interface GoogleCloudChannelV1alpha1TrialSettingsFormProperties {

		/** Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example [Epoch converter](https://www.epochconverter.com). */
		endTime: FormControl<string | null | undefined>,

		/** Determines if the entitlement is in a trial or not: * `true` - The entitlement is in trial. * `false` - The entitlement is not in trial. */
		trial: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1alpha1TrialSettingsFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1TrialSettingsFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			trial: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents Pub/Sub message content describing entitlement update. */
	export interface GoogleCloudChannelV1alpha1EntitlementEvent {

		/** Resource name of an entitlement of the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id} */
		entitlement?: string | null;

		/** Type of event which happened on the entitlement. */
		eventType?: GoogleCloudChannelV1EntitlementEventEventType | null;
	}

	/** Represents Pub/Sub message content describing entitlement update. */
	export interface GoogleCloudChannelV1alpha1EntitlementEventFormProperties {

		/** Resource name of an entitlement of the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id} */
		entitlement: FormControl<string | null | undefined>,

		/** Type of event which happened on the entitlement. */
		eventType: FormControl<GoogleCloudChannelV1EntitlementEventEventType | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1alpha1EntitlementEventFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1EntitlementEventFormProperties>({
			entitlement: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<GoogleCloudChannelV1EntitlementEventEventType | null | undefined>(undefined),
		});

	}


	/** Provides contextual information about a google.longrunning.Operation. */
	export interface GoogleCloudChannelV1alpha1OperationMetadata {

		/** The RPC that initiated this Long Running Operation. */
		operationType?: GoogleCloudChannelV1alpha1OperationMetadataOperationType | null;
	}

	/** Provides contextual information about a google.longrunning.Operation. */
	export interface GoogleCloudChannelV1alpha1OperationMetadataFormProperties {

		/** The RPC that initiated this Long Running Operation. */
		operationType: FormControl<GoogleCloudChannelV1alpha1OperationMetadataOperationType | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1alpha1OperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1OperationMetadataFormProperties>({
			operationType: new FormControl<GoogleCloudChannelV1alpha1OperationMetadataOperationType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudChannelV1alpha1OperationMetadataOperationType { OPERATION_TYPE_UNSPECIFIED = 0, CREATE_ENTITLEMENT = 1, CHANGE_QUANTITY = 2, CHANGE_RENEWAL_SETTINGS = 3, CHANGE_PLAN = 4, START_PAID_SERVICE = 5, CHANGE_SKU = 6, ACTIVATE_ENTITLEMENT = 7, SUSPEND_ENTITLEMENT = 8, CANCEL_ENTITLEMENT = 9, TRANSFER_ENTITLEMENTS = 10, TRANSFER_ENTITLEMENTS_TO_GOOGLE = 11, CHANGE_OFFER = 12, CHANGE_PARAMETERS = 13, PROVISION_CLOUD_IDENTITY = 14 }


	/** The ID and description of a report that was used to generate report data. For example, "Google Cloud Daily Spend", "Google Workspace License Activity", etc. */
	export interface GoogleCloudChannelV1alpha1Report {

		/** The list of columns included in the report. This defines the schema of the report results. */
		columns?: Array<GoogleCloudChannelV1alpha1Column>;

		/** A description of other aspects of the report, such as the products it supports. */
		description?: string | null;

		/** A human-readable name for this report. */
		displayName?: string | null;

		/** Required. The report's resource name. Specifies the account and report used to generate report data. The report_id identifier is a UID (for example, `613bf59q`). Name uses the format: accounts/{account_id}/reports/{report_id} */
		name?: string | null;
	}

	/** The ID and description of a report that was used to generate report data. For example, "Google Cloud Daily Spend", "Google Workspace License Activity", etc. */
	export interface GoogleCloudChannelV1alpha1ReportFormProperties {

		/** A description of other aspects of the report, such as the products it supports. */
		description: FormControl<string | null | undefined>,

		/** A human-readable name for this report. */
		displayName: FormControl<string | null | undefined>,

		/** Required. The report's resource name. Specifies the account and report used to generate report data. The report_id identifier is a UID (for example, `613bf59q`). Name uses the format: accounts/{account_id}/reports/{report_id} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1alpha1ReportFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1ReportFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a RunReportJob operation. Contains the name to use in FetchReportResultsRequest.report_job and the status of the operation. */
	export interface GoogleCloudChannelV1alpha1ReportJob {

		/** Required. The resource name of a report job. Name uses the format: `accounts/{account_id}/reportJobs/{report_job_id}` */
		name?: string | null;

		/** Status of a report generation process. */
		reportStatus?: GoogleCloudChannelV1alpha1ReportStatus;
	}

	/** The result of a RunReportJob operation. Contains the name to use in FetchReportResultsRequest.report_job and the status of the operation. */
	export interface GoogleCloudChannelV1alpha1ReportJobFormProperties {

		/** Required. The resource name of a report job. Name uses the format: `accounts/{account_id}/reportJobs/{report_job_id}` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1alpha1ReportJobFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1ReportJobFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status of a report generation process. */
	export interface GoogleCloudChannelV1alpha1ReportStatus {

		/** The report generation's completion time. */
		endTime?: string | null;

		/** The report generation's start time. */
		startTime?: string | null;

		/** The current state of the report generation process. */
		state?: GoogleCloudChannelV1ReportStatusState | null;
	}

	/** Status of a report generation process. */
	export interface GoogleCloudChannelV1alpha1ReportStatusFormProperties {

		/** The report generation's completion time. */
		endTime: FormControl<string | null | undefined>,

		/** The report generation's start time. */
		startTime: FormControl<string | null | undefined>,

		/** The current state of the report generation process. */
		state: FormControl<GoogleCloudChannelV1ReportStatusState | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1alpha1ReportStatusFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1ReportStatusFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudChannelV1ReportStatusState | null | undefined>(undefined),
		});

	}


	/** The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults. */
	export interface GoogleCloudChannelV1alpha1ReportResultsMetadata {

		/** A representation of usage or invoice date ranges. */
		dateRange?: GoogleCloudChannelV1alpha1DateRange;

		/** A representation of usage or invoice date ranges. */
		precedingDateRange?: GoogleCloudChannelV1alpha1DateRange;

		/** The ID and description of a report that was used to generate report data. For example, "Google Cloud Daily Spend", "Google Workspace License Activity", etc. */
		report?: GoogleCloudChannelV1alpha1Report;

		/** The total number of rows of data in the final report. */
		rowCount?: string | null;
	}

	/** The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults. */
	export interface GoogleCloudChannelV1alpha1ReportResultsMetadataFormProperties {

		/** The total number of rows of data in the final report. */
		rowCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudChannelV1alpha1ReportResultsMetadataFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1ReportResultsMetadataFormProperties>({
			rowCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CloudChannelReportsService.RunReportJob. */
	export interface GoogleCloudChannelV1alpha1RunReportJobResponse {

		/** The result of a RunReportJob operation. Contains the name to use in FetchReportResultsRequest.report_job and the status of the operation. */
		reportJob?: GoogleCloudChannelV1alpha1ReportJob;

		/** The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults. */
		reportMetadata?: GoogleCloudChannelV1alpha1ReportResultsMetadata;
	}

	/** Response message for CloudChannelReportsService.RunReportJob. */
	export interface GoogleCloudChannelV1alpha1RunReportJobResponseFormProperties {
	}
	export function CreateGoogleCloudChannelV1alpha1RunReportJobResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1RunReportJobResponseFormProperties>({
		});

	}


	/** Represents information which resellers will get as part of notification from Pub/Sub. */
	export interface GoogleCloudChannelV1alpha1SubscriberEvent {

		/** Represents Pub/Sub messages about updates to a Channel Partner. You can retrieve updated values through the ChannelPartnerLinks API. */
		channelPartnerEvent?: GoogleCloudChannelV1alpha1ChannelPartnerEvent;

		/** Represents Pub/Sub message content describing customer update. */
		customerEvent?: GoogleCloudChannelV1alpha1CustomerEvent;

		/** Represents Pub/Sub message content describing entitlement update. */
		entitlementEvent?: GoogleCloudChannelV1alpha1EntitlementEvent;
	}

	/** Represents information which resellers will get as part of notification from Pub/Sub. */
	export interface GoogleCloudChannelV1alpha1SubscriberEventFormProperties {
	}
	export function CreateGoogleCloudChannelV1alpha1SubscriberEventFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1SubscriberEventFormProperties>({
		});

	}


	/** Response message for CloudChannelService.TransferEntitlements. This is put in the response field of google.longrunning.Operation. */
	export interface GoogleCloudChannelV1alpha1TransferEntitlementsResponse {

		/** The transferred entitlements. */
		entitlements?: Array<GoogleCloudChannelV1alpha1Entitlement>;
	}

	/** Response message for CloudChannelService.TransferEntitlements. This is put in the response field of google.longrunning.Operation. */
	export interface GoogleCloudChannelV1alpha1TransferEntitlementsResponseFormProperties {
	}
	export function CreateGoogleCloudChannelV1alpha1TransferEntitlementsResponseFormGroup() {
		return new FormGroup<GoogleCloudChannelV1alpha1TransferEntitlementsResponseFormProperties>({
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunningCancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunningCancelOperationRequestFormProperties {
	}
	export function CreateGoogleLongrunningCancelOperationRequestFormGroup() {
		return new FormGroup<GoogleLongrunningCancelOperationRequestFormProperties>({
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<GoogleLongrunningOperation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunningListOperationsResponseFormGroup() {
		return new FormGroup<GoogleLongrunningListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleLongrunningOperationFormGroup() {
		return new FormGroup<GoogleLongrunningOperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcStatusFormGroup() {
		return new FormGroup<GoogleRpcStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the Products the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.
		 * Get v1/products
		 * @param {string} account Required. The resource name of the reseller account. Format: accounts/{account_id}.
		 * @param {string} languageCode Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".
		 * @param {number} pageSize Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 Products. The maximum value is 1000; the server will coerce values above 1000.
		 * @param {string} pageToken Optional. A token for a page of results other than the first page.
		 * @return {GoogleCloudChannelV1ListProductsResponse} Successful response
		 */
		Cloudchannel_products_list(account: string | null | undefined, languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudChannelV1ListProductsResponse> {
			return this.http.get<GoogleCloudChannelV1ListProductsResponse>(this.baseUri + 'v1/products?account=' + (account == null ? '' : encodeURIComponent(account)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists service accounts with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: A list of service email addresses.
		 * Get v1/{account}:listSubscribers
		 * @param {string} account Required. Resource name of the account.
		 * @param {number} pageSize Optional. The maximum number of service accounts to return. The service may return fewer than this value. If unspecified, returns at most 100 service accounts. The maximum value is 1000; the server will coerce values above 1000.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListSubscribers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscribers` must match the call that provided the page token.
		 * @return {GoogleCloudChannelV1ListSubscribersResponse} Successful response
		 */
		Cloudchannel_accounts_listSubscribers(account: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudChannelV1ListSubscribersResponse> {
			return this.http.get<GoogleCloudChannelV1ListSubscribersResponse>(this.baseUri + 'v1/' + (account == null ? '' : encodeURIComponent(account)) + ':listSubscribers&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Registers a service account with subscriber privileges on the Cloud Pub/Sub topic for this Channel Services account. After you create a subscriber, you get the events through SubscriberEvent Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name with the registered service email address.
		 * Post v1/{account}:register
		 * @param {string} account Required. Resource name of the account.
		 * @return {GoogleCloudChannelV1RegisterSubscriberResponse} Successful response
		 */
		Cloudchannel_accounts_register(account: string, requestBody: GoogleCloudChannelV1RegisterSubscriberRequest): Observable<GoogleCloudChannelV1RegisterSubscriberResponse> {
			return this.http.post<GoogleCloudChannelV1RegisterSubscriberResponse>(this.baseUri + 'v1/' + (account == null ? '' : encodeURIComponent(account)) + ':register', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unregisters a service account with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. If there are no service accounts left with subscriber privileges, this deletes the topic. You can call ListSubscribers to check for these accounts. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name that unregistered the service email address. Returns a success response if the service email address wasn't registered with the topic.
		 * Post v1/{account}:unregister
		 * @param {string} account Required. Resource name of the account.
		 * @return {GoogleCloudChannelV1UnregisterSubscriberResponse} Successful response
		 */
		Cloudchannel_accounts_unregister(account: string, requestBody: GoogleCloudChannelV1UnregisterSubscriberRequest): Observable<GoogleCloudChannelV1UnregisterSubscriberResponse> {
			return this.http.post<GoogleCloudChannelV1UnregisterSubscriberResponse>(this.baseUri + 'v1/' + (account == null ? '' : encodeURIComponent(account)) + ':unregister', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the following: * Offers that you can purchase for a customer. * Offers that you can change for an entitlement. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller * The reseller is not authorized to transact on this Product. See https://support.google.com/channelservices/answer/9759265 * INVALID_ARGUMENT: Required request parameters are missing or invalid.
		 * Get v1/{customer}:listPurchasableOffers
		 * @param {string} customer Required. The resource name of the customer to list Offers for. Format: accounts/{account_id}/customers/{customer_id}.
		 * @param {string} changeOfferPurchase_billingAccount Optional. Resource name of the new target Billing Account. Provide this Billing Account when setting up billing for a trial subscription. Format: accounts/{account_id}/billingAccounts/{billing_account_id}. This field is only relevant for multi-currency accounts. It should be left empty for single currency accounts.
		 * @param {string} changeOfferPurchase_entitlement Required. Resource name of the entitlement. Format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}
		 * @param {string} changeOfferPurchase_newSku Optional. Resource name of the new target SKU. Provide this SKU when upgrading or downgrading an entitlement. Format: products/{product_id}/skus/{sku_id}
		 * @param {string} createEntitlementPurchase_billingAccount Optional. Billing account that the result should be restricted to. Format: accounts/{account_id}/billingAccounts/{billing_account_id}.
		 * @param {string} createEntitlementPurchase_sku Required. SKU that the result should be restricted to. Format: products/{product_id}/skus/{sku_id}.
		 * @param {string} languageCode Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".
		 * @param {number} pageSize Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 Offers. The maximum value is 1000; the server will coerce values above 1000.
		 * @param {string} pageToken Optional. A token for a page of results other than the first page.
		 * @return {GoogleCloudChannelV1ListPurchasableOffersResponse} Successful response
		 */
		Cloudchannel_accounts_customers_listPurchasableOffers(customer: string, changeOfferPurchase_billingAccount: string | null | undefined, changeOfferPurchase_entitlement: string | null | undefined, changeOfferPurchase_newSku: string | null | undefined, createEntitlementPurchase_billingAccount: string | null | undefined, createEntitlementPurchase_sku: string | null | undefined, languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudChannelV1ListPurchasableOffersResponse> {
			return this.http.get<GoogleCloudChannelV1ListPurchasableOffersResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + ':listPurchasableOffers&changeOfferPurchase_billingAccount=' + (changeOfferPurchase_billingAccount == null ? '' : encodeURIComponent(changeOfferPurchase_billingAccount)) + '&changeOfferPurchase_entitlement=' + (changeOfferPurchase_entitlement == null ? '' : encodeURIComponent(changeOfferPurchase_entitlement)) + '&changeOfferPurchase_newSku=' + (changeOfferPurchase_newSku == null ? '' : encodeURIComponent(changeOfferPurchase_newSku)) + '&createEntitlementPurchase_billingAccount=' + (createEntitlementPurchase_billingAccount == null ? '' : encodeURIComponent(createEntitlementPurchase_billingAccount)) + '&createEntitlementPurchase_sku=' + (createEntitlementPurchase_sku == null ? '' : encodeURIComponent(createEntitlementPurchase_sku)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists the following: * SKUs that you can purchase for a customer * SKUs that you can upgrade or downgrade for an entitlement. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid.
		 * Get v1/{customer}:listPurchasableSkus
		 * @param {string} customer Required. The resource name of the customer to list SKUs for. Format: accounts/{account_id}/customers/{customer_id}.
		 * @param {Cloudchannel_accounts_customers_listPurchasableSkusChangeOfferPurchase_changeType} changeOfferPurchase_changeType Required. Change Type for the entitlement.
		 * @param {string} changeOfferPurchase_entitlement Required. Resource name of the entitlement. Format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}
		 * @param {string} createEntitlementPurchase_product Required. List SKUs belonging to this Product. Format: products/{product_id}. Supports products/- to retrieve SKUs for all products.
		 * @param {string} languageCode Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".
		 * @param {number} pageSize Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 SKUs. The maximum value is 1000; the server will coerce values above 1000.
		 * @param {string} pageToken Optional. A token for a page of results other than the first page.
		 * @return {GoogleCloudChannelV1ListPurchasableSkusResponse} Successful response
		 */
		Cloudchannel_accounts_customers_listPurchasableSkus(customer: string, changeOfferPurchase_changeType: Cloudchannel_accounts_customers_listPurchasableSkusChangeOfferPurchase_changeType | null | undefined, changeOfferPurchase_entitlement: string | null | undefined, createEntitlementPurchase_product: string | null | undefined, languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudChannelV1ListPurchasableSkusResponse> {
			return this.http.get<GoogleCloudChannelV1ListPurchasableSkusResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + ':listPurchasableSkus&changeOfferPurchase_changeType=' + changeOfferPurchase_changeType + '&changeOfferPurchase_entitlement=' + (changeOfferPurchase_entitlement == null ? '' : encodeURIComponent(changeOfferPurchase_entitlement)) + '&createEntitlementPurchase_product=' + (createEntitlementPurchase_product == null ? '' : encodeURIComponent(createEntitlementPurchase_product)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Cloud Identity for the given customer using the customer's information, or the information provided here. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller. * You are not authorized to provision cloud identity id. See https://support.google.com/channelservices/answer/9759265 * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer was not found. * ALREADY_EXISTS: The customer's primary email already exists. Retry after changing the customer's primary contact email. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of OperationMetadata.
		 * Post v1/{customer}:provisionCloudIdentity
		 * @param {string} customer Required. Resource name of the customer. Format: accounts/{account_id}/customers/{customer_id}
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Cloudchannel_accounts_customers_provisionCloudIdentity(customer: string, requestBody: GoogleCloudChannelV1ProvisionCloudIdentityRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + ':provisionCloudIdentity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the billing accounts that are eligible to purchase particular SKUs for a given customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: Based on the provided list of SKUs, returns a list of SKU groups that must be purchased using the same billing account and the billing accounts eligible to purchase each SKU group.
		 * Get v1/{customer}:queryEligibleBillingAccounts
		 * @param {string} customer Required. The resource name of the customer to list eligible billing accounts for. Format: accounts/{account_id}/customers/{customer_id}.
		 * @param {Array<string>} skus Required. List of SKUs to list eligible billing accounts for. At least one SKU is required. Format: products/{product_id}/skus/{sku_id}.
		 * @return {GoogleCloudChannelV1QueryEligibleBillingAccountsResponse} Successful response
		 */
		Cloudchannel_accounts_customers_queryEligibleBillingAccounts(customer: string, skus: Array<string> | null | undefined): Observable<GoogleCloudChannelV1QueryEligibleBillingAccountsResponse> {
			return this.http.get<GoogleCloudChannelV1QueryEligibleBillingAccountsResponse>(this.baseUri + 'v1/' + (customer == null ? '' : encodeURIComponent(customer)) + ':queryEligibleBillingAccounts&' + skus?.map(z => `skus=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Returns the requested Offer resource. Possible error codes: * PERMISSION_DENIED: The entitlement doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement or offer was not found. Return value: The Offer resource.
		 * Get v1/{entitlement}:lookupOffer
		 * @param {string} entitlement Required. The resource name of the entitlement to retrieve the Offer. Entitlement uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}
		 * @return {GoogleCloudChannelV1Offer} Successful response
		 */
		Cloudchannel_accounts_customers_entitlements_lookupOffer(entitlement: string): Observable<GoogleCloudChannelV1Offer> {
			return this.http.get<GoogleCloudChannelV1Offer>(this.baseUri + 'v1/' + (entitlement == null ? '' : encodeURIComponent(entitlement)) + ':lookupOffer', {});
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Cloudchannel_operations_delete(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}
		 * @param {string} name The name of the operation's parent resource.
		 * @param {Cloudchannel_operations_listFilter} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Cloudchannel_operations_list(name: string, filter: Cloudchannel_operations_listFilter | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&filter=' + filter + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Updates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. This method overwrites the existing CustomerRepricingConfig. You can only update configs if the RepricingConfig.effective_invoice_month is a future month. To make changes to configs for the current month, use CreateCustomerRepricingConfig, taking note of its restrictions. You cannot update the RepricingConfig.effective_invoice_month. When updating a config in the future: * This config must already exist. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated CustomerRepricingConfig resource, otherwise returns an error.
		 * Patch v1/{name}
		 * @param {string} name Output only. Resource name of the CustomerRepricingConfig. Format: accounts/{account_id}/customers/{customer_id}/customerRepricingConfigs/{id}.
		 * @param {string} updateMask The update mask that applies to the resource. Optional.
		 * @return {GoogleCloudChannelV1CustomerRepricingConfig} Successful response
		 */
		Cloudchannel_accounts_customers_customerRepricingConfigs_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleCloudChannelV1CustomerRepricingConfig): Observable<GoogleCloudChannelV1CustomerRepricingConfig> {
			return this.http.patch<GoogleCloudChannelV1CustomerRepricingConfig>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Activates a previously suspended entitlement. Entitlements suspended for pending ToS acceptance can't be activated using this method. An entitlement activation is a long-running operation and it updates the state of the customer entitlement. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * SUSPENSION_NOT_RESELLER_INITIATED: Can only activate reseller-initiated suspensions and entitlements that have accepted the TOS. * NOT_SUSPENDED: Can only activate suspended entitlements not in an ACTIVE state. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
		 * Post v1/{name}:activate
		 * @param {string} name Required. The resource name of the entitlement to activate. Name uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Cloudchannel_accounts_customers_entitlements_activate(name: string, requestBody: GoogleCloudChannelV1ActivateEntitlementRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':activate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Cloudchannel_operations_cancel(name: string, requestBody: GoogleLongrunningCancelOperationRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the Offer for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Offer or Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
		 * Post v1/{name}:changeOffer
		 * @param {string} name Required. The resource name of the entitlement to update. Name uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Cloudchannel_accounts_customers_entitlements_changeOffer(name: string, requestBody: GoogleCloudChannelV1ChangeOfferRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':changeOffer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Change parameters of the entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. For example, the number of seats being changed is greater than the allowed number of max seats, or decreasing seats for a commitment based plan. * NOT_FOUND: Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
		 * Post v1/{name}:changeParameters
		 * @param {string} name Required. The name of the entitlement to update. Name uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Cloudchannel_accounts_customers_entitlements_changeParameters(name: string, requestBody: GoogleCloudChannelV1ChangeParametersRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':changeParameters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the renewal settings for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_COMMITMENT_PLAN: Renewal Settings are only applicable for a commitment plan. Can't enable or disable renewals for non-commitment plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
		 * Post v1/{name}:changeRenewalSettings
		 * @param {string} name Required. The name of the entitlement to update. Name uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Cloudchannel_accounts_customers_entitlements_changeRenewalSettings(name: string, requestBody: GoogleCloudChannelV1ChangeRenewalSettingsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':changeRenewalSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Begins generation of data for a given report. The report identifier is a UID (for example, `613bf59q`). Possible error codes: * PERMISSION_DENIED: The user doesn't have access to this report. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The report identifier was not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of OperationMetadata. To get the results of report generation, call CloudChannelReportsService.FetchReportResults with the RunReportJobResponse.report_job. Deprecated: Please use [Export Channel Services data to BigQuery](https://cloud.google.com/channel/docs/rebilling/export-data-to-bigquery) instead.
		 * Post v1/{name}:run
		 * @param {string} name Required. The report's resource name. Specifies the account and report used to generate report data. The report_id identifier is a UID (for example, `613bf59q`). Name uses the format: accounts/{account_id}/reports/{report_id}
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Cloudchannel_accounts_reports_run(name: string, requestBody: GoogleCloudChannelV1RunReportJobRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts paid service for a trial entitlement. Starts paid service for a trial entitlement immediately. This method is only applicable if a plan is set up for a trial entitlement but has some trial days remaining. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * FAILED_PRECONDITION/NOT_IN_TRIAL: This method only works for entitlement on trial plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
		 * Post v1/{name}:startPaidService
		 * @param {string} name Required. The name of the entitlement to start a paid service for. Name uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Cloudchannel_accounts_customers_entitlements_startPaidService(name: string, requestBody: GoogleCloudChannelV1StartPaidServiceRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':startPaidService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Suspends a previously fulfilled entitlement. An entitlement suspension is a long-running operation. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_ACTIVE: Entitlement is not active. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
		 * Post v1/{name}:suspend
		 * @param {string} name Required. The resource name of the entitlement to suspend. Name uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Cloudchannel_accounts_customers_entitlements_suspend(name: string, requestBody: GoogleCloudChannelV1SuspendEntitlementRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':suspend', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Billable SKUs in a given SKU group. Possible error codes: PERMISSION_DENIED: If the account making the request and the account being queried for are different, or the account doesn't exist. INVALID_ARGUMENT: Missing or invalid required parameters in the request. INTERNAL: Any non-user error related to technical issue in the backend. In this case, contact cloud channel support. Return Value: If successful, the BillableSku resources. The data for each resource is displayed in the ascending order of: * BillableSku.service_display_name * BillableSku.sku_display_name If unsuccessful, returns an error.
		 * Get v1/{parent}/billableSkus
		 * @param {string} parent Required. Resource name of the SKU group. Format: accounts/{account}/skuGroups/{sku_group}.
		 * @param {number} pageSize Optional. The maximum number of SKUs to return. The service may return fewer than this value. If unspecified, returns a maximum of 100000 SKUs. The maximum value is 100000; values above 100000 will be coerced to 100000.
		 * @param {string} pageToken Optional. A token identifying a page of results beyond the first page. Obtained through ListSkuGroupBillableSkus.next_page_token of the previous CloudChannelService.ListSkuGroupBillableSkus call.
		 * @return {GoogleCloudChannelV1ListSkuGroupBillableSkusResponse} Successful response
		 */
		Cloudchannel_accounts_skuGroups_billableSkus_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudChannelV1ListSkuGroupBillableSkusResponse> {
			return this.http.get<GoogleCloudChannelV1ListSkuGroupBillableSkusResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/billableSkus&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List ChannelPartnerLinks belonging to a distributor. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: The list of the distributor account's ChannelPartnerLink resources.
		 * Get v1/{parent}/channelPartnerLinks
		 * @param {string} parent Required. The resource name of the reseller account for listing channel partner links. Parent uses the format: accounts/{account_id}
		 * @param {number} pageSize Optional. Requested page size. Server might return fewer results than requested. If unspecified, server will pick a default size (25). The maximum value is 200; the server will coerce values above 200.
		 * @param {string} pageToken Optional. A token for a page of results other than the first page. Obtained using ListChannelPartnerLinksResponse.next_page_token of the previous CloudChannelService.ListChannelPartnerLinks call.
		 * @param {Cloudchannel_operations_listFilter} view Optional. The level of granularity the ChannelPartnerLink will display.
		 * @return {GoogleCloudChannelV1ListChannelPartnerLinksResponse} Successful response
		 */
		Cloudchannel_accounts_channelPartnerLinks_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Cloudchannel_operations_listFilter | null | undefined): Observable<GoogleCloudChannelV1ListChannelPartnerLinksResponse> {
			return this.http.get<GoogleCloudChannelV1ListChannelPartnerLinksResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/channelPartnerLinks&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Initiates a channel partner link between a distributor and a reseller, or between resellers in an n-tier reseller channel. Invited partners need to follow the invite_link_uri provided in the response to accept. After accepting the invitation, a link is set up between the two parties. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * ALREADY_EXISTS: The ChannelPartnerLink sent in the request already exists. * NOT_FOUND: No Cloud Identity customer exists for provided domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The new ChannelPartnerLink resource.
		 * Post v1/{parent}/channelPartnerLinks
		 * @param {string} parent Required. Create a channel partner link for the provided reseller account's resource name. Parent uses the format: accounts/{account_id}
		 * @return {GoogleCloudChannelV1ChannelPartnerLink} Successful response
		 */
		Cloudchannel_accounts_channelPartnerLinks_create(parent: string, requestBody: GoogleCloudChannelV1ChannelPartnerLink): Observable<GoogleCloudChannelV1ChannelPartnerLink> {
			return this.http.post<GoogleCloudChannelV1ChannelPartnerLink>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/channelPartnerLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about how a Reseller modifies their bill before sending it to a ChannelPartner. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * NOT_FOUND: The ChannelPartnerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the ChannelPartnerRepricingConfig resources. The data for each resource is displayed in the ascending order of: * Channel Partner ID * RepricingConfig.effective_invoice_month * ChannelPartnerRepricingConfig.update_time If unsuccessful, returns an error.
		 * Get v1/{parent}/channelPartnerRepricingConfigs
		 * @param {string} parent Required. The resource name of the account's ChannelPartnerLink. Parent uses the format: accounts/{account_id}/channelPartnerLinks/{channel_partner_id}. Supports accounts/{account_id}/channelPartnerLinks/- to retrieve configs for all channel partners.
		 * @param {string} filter Optional. A filter for [CloudChannelService.ListChannelPartnerRepricingConfigs] results (channel_partner_link only). You can use this filter when you support a BatchGet-like query. To use the filter, you must set `parent=accounts/{account_id}/channelPartnerLinks/-`. Example: `channel_partner_link = accounts/account_id/channelPartnerLinks/c1` OR `channel_partner_link = accounts/account_id/channelPartnerLinks/c2`.
		 * @param {number} pageSize Optional. The maximum number of repricing configs to return. The service may return fewer than this value. If unspecified, returns a maximum of 50 rules. The maximum value is 100; values above 100 will be coerced to 100.
		 * @param {string} pageToken Optional. A token identifying a page of results beyond the first page. Obtained through ListChannelPartnerRepricingConfigsResponse.next_page_token of the previous CloudChannelService.ListChannelPartnerRepricingConfigs call.
		 * @return {GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse} Successful response
		 */
		Cloudchannel_accounts_channelPartnerLinks_channelPartnerRepricingConfigs_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse> {
			return this.http.get<GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/channelPartnerRepricingConfigs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. You can only create configs if the RepricingConfig.effective_invoice_month is a future month. If needed, you can create a config for the current month, with some restrictions. When creating a config for a future month, make sure there are no existing configs for that RepricingConfig.effective_invoice_month. The following restrictions are for creating configs in the current month. * This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases. * The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours. * There is a limit of ten configs for any ChannelPartner or RepricingConfig.EntitlementGranularity.entitlement, for any RepricingConfig.effective_invoice_month. * The contained ChannelPartnerRepricingConfig.repricing_config value must be different from the value used in the current config for a ChannelPartner. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The ChannelPartnerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated ChannelPartnerRepricingConfig resource, otherwise returns an error.
		 * Post v1/{parent}/channelPartnerRepricingConfigs
		 * @param {string} parent Required. The resource name of the ChannelPartner that will receive the repricing config. Parent uses the format: accounts/{account_id}/channelPartnerLinks/{channel_partner_id}
		 * @return {GoogleCloudChannelV1ChannelPartnerRepricingConfig} Successful response
		 */
		Cloudchannel_accounts_channelPartnerLinks_channelPartnerRepricingConfigs_create(parent: string, requestBody: GoogleCloudChannelV1ChannelPartnerRepricingConfig): Observable<GoogleCloudChannelV1ChannelPartnerRepricingConfig> {
			return this.http.post<GoogleCloudChannelV1ChannelPartnerRepricingConfig>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/channelPartnerRepricingConfigs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about how a Reseller modifies their bill before sending it to a Customer. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the CustomerRepricingConfig resources. The data for each resource is displayed in the ascending order of: * Customer ID * RepricingConfig.EntitlementGranularity.entitlement * RepricingConfig.effective_invoice_month * CustomerRepricingConfig.update_time If unsuccessful, returns an error.
		 * Get v1/{parent}/customerRepricingConfigs
		 * @param {string} parent Required. The resource name of the customer. Parent uses the format: accounts/{account_id}/customers/{customer_id}. Supports accounts/{account_id}/customers/- to retrieve configs for all customers.
		 * @param {string} filter Optional. A filter for [CloudChannelService.ListCustomerRepricingConfigs] results (customer only). You can use this filter when you support a BatchGet-like query. To use the filter, you must set `parent=accounts/{account_id}/customers/-`. Example: customer = accounts/account_id/customers/c1 OR customer = accounts/account_id/customers/c2.
		 * @param {number} pageSize Optional. The maximum number of repricing configs to return. The service may return fewer than this value. If unspecified, returns a maximum of 50 rules. The maximum value is 100; values above 100 will be coerced to 100.
		 * @param {string} pageToken Optional. A token identifying a page of results beyond the first page. Obtained through ListCustomerRepricingConfigsResponse.next_page_token of the previous CloudChannelService.ListCustomerRepricingConfigs call.
		 * @return {GoogleCloudChannelV1ListCustomerRepricingConfigsResponse} Successful response
		 */
		Cloudchannel_accounts_customers_customerRepricingConfigs_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudChannelV1ListCustomerRepricingConfigsResponse> {
			return this.http.get<GoogleCloudChannelV1ListCustomerRepricingConfigsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customerRepricingConfigs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. You can only create configs if the RepricingConfig.effective_invoice_month is a future month. If needed, you can create a config for the current month, with some restrictions. When creating a config for a future month, make sure there are no existing configs for that RepricingConfig.effective_invoice_month. The following restrictions are for creating configs in the current month. * This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases. * The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours. * There is a limit of ten configs for any RepricingConfig.EntitlementGranularity.entitlement, for any RepricingConfig.effective_invoice_month. * The contained CustomerRepricingConfig.repricing_config value must be different from the value used in the current config for a RepricingConfig.EntitlementGranularity.entitlement. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated CustomerRepricingConfig resource, otherwise returns an error.
		 * Post v1/{parent}/customerRepricingConfigs
		 * @param {string} parent Required. The resource name of the customer that will receive this repricing config. Parent uses the format: accounts/{account_id}/customers/{customer_id}
		 * @return {GoogleCloudChannelV1CustomerRepricingConfig} Successful response
		 */
		Cloudchannel_accounts_customers_customerRepricingConfigs_create(parent: string, requestBody: GoogleCloudChannelV1CustomerRepricingConfig): Observable<GoogleCloudChannelV1CustomerRepricingConfig> {
			return this.http.post<GoogleCloudChannelV1CustomerRepricingConfig>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customerRepricingConfigs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Customers. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of Customers, or an empty list if there are no customers.
		 * Get v1/{parent}/customers
		 * @param {string} parent Required. The resource name of the reseller account to list customers from. Parent uses the format: accounts/{account_id}.
		 * @param {string} filter Optional. Filters applied to the [CloudChannelService.ListCustomers] results. See https://cloud.google.com/channel/docs/concepts/google-cloud/filter-customers for more information.
		 * @param {number} pageSize Optional. The maximum number of customers to return. The service may return fewer than this value. If unspecified, returns at most 10 customers. The maximum value is 50.
		 * @param {string} pageToken Optional. A token identifying a page of results other than the first page. Obtained through ListCustomersResponse.next_page_token of the previous CloudChannelService.ListCustomers call.
		 * @return {GoogleCloudChannelV1ListCustomersResponse} Successful response
		 */
		Cloudchannel_accounts_customers_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudChannelV1ListCustomersResponse> {
			return this.http.get<GoogleCloudChannelV1ListCustomersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customers&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Customer resource under the reseller or distributor account. Possible error codes: * PERMISSION_DENIED: * The reseller account making the request is different from the reseller account in the API request. * You are not authorized to create a customer. See https://support.google.com/channelservices/answer/9759265 * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * Domain field value doesn't match the primary email domain. Return value: The newly created Customer resource.
		 * Post v1/{parent}/customers
		 * @param {string} parent Required. The resource name of reseller account in which to create the customer. Parent uses the format: accounts/{account_id}
		 * @return {GoogleCloudChannelV1Customer} Successful response
		 */
		Cloudchannel_accounts_customers_create(parent: string, requestBody: GoogleCloudChannelV1Customer): Observable<GoogleCloudChannelV1Customer> {
			return this.http.post<GoogleCloudChannelV1Customer>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. If a linked Customer already exists and overwrite_if_exists is true, it will update that Customer's data. Possible error codes: * PERMISSION_DENIED: * The reseller account making the request is different from the reseller account in the API request. * You are not authorized to import the customer. See https://support.google.com/channelservices/answer/9759265 * NOT_FOUND: Cloud Identity doesn't exist or was deleted. * INVALID_ARGUMENT: Required parameters are missing, or the auth_token is expired or invalid. * ALREADY_EXISTS: A customer already exists and has conflicting critical fields. Requires an overwrite. Return value: The Customer.
		 * Post v1/{parent}/customers:import
		 * @param {string} parent Required. The resource name of the reseller's account. Parent takes the format: accounts/{account_id} or accounts/{account_id}/channelPartnerLinks/{channel_partner_id}
		 * @return {GoogleCloudChannelV1Customer} Successful response
		 */
		Cloudchannel_accounts_customers_import(parent: string, requestBody: GoogleCloudChannelV1ImportCustomerRequest): Observable<GoogleCloudChannelV1Customer> {
			return this.http.post<GoogleCloudChannelV1Customer>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customers:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Entitlements belonging to a customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's Entitlements.
		 * Get v1/{parent}/entitlements
		 * @param {string} parent Required. The resource name of the reseller's customer account to list entitlements for. Parent uses the format: accounts/{account_id}/customers/{customer_id}
		 * @param {number} pageSize Optional. Requested page size. Server might return fewer results than requested. If unspecified, return at most 50 entitlements. The maximum value is 100; the server will coerce values above 100.
		 * @param {string} pageToken Optional. A token for a page of results other than the first page. Obtained using ListEntitlementsResponse.next_page_token of the previous CloudChannelService.ListEntitlements call.
		 * @return {GoogleCloudChannelV1ListEntitlementsResponse} Successful response
		 */
		Cloudchannel_accounts_customers_entitlements_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudChannelV1ListEntitlementsResponse> {
			return this.http.get<GoogleCloudChannelV1ListEntitlementsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/entitlements&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an entitlement for a customer. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller. * The reseller is not authorized to transact on this Product. See https://support.google.com/channelservices/answer/9759265 * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * There is already a customer entitlement for a SKU from the same product family. * INVALID_VALUE: Make sure the OfferId is valid. If it is, contact Google Channel support for further troubleshooting. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: * The SKU was already purchased for the customer. * The customer's primary email already exists. Retry after changing the customer's primary contact email. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The domain required for purchasing a SKU has not been verified. * A pre-requisite SKU required to purchase an Add-On SKU is missing. For example, Google Workspace Business Starter is required to purchase Vault or Drive. * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
		 * Post v1/{parent}/entitlements
		 * @param {string} parent Required. The resource name of the reseller's customer account in which to create the entitlement. Parent uses the format: accounts/{account_id}/customers/{customer_id}
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Cloudchannel_accounts_customers_entitlements_create(parent: string, requestBody: GoogleCloudChannelV1CreateEntitlementRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/entitlements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Offers the reseller can sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.
		 * Get v1/{parent}/offers
		 * @param {string} parent Required. The resource name of the reseller account from which to list Offers. Parent uses the format: accounts/{account_id}.
		 * @param {string} filter Optional. The expression to filter results by name (name of the Offer), sku.name (name of the SKU), or sku.product.name (name of the Product). Example 1: sku.product.name=products/p1 AND sku.name!=products/p1/skus/s1 Example 2: name=accounts/a1/offers/o1
		 * @param {string} languageCode Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".
		 * @param {number} pageSize Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 500 Offers. The maximum value is 1000; the server will coerce values above 1000.
		 * @param {string} pageToken Optional. A token for a page of results other than the first page.
		 * @param {boolean} showFutureOffers Optional. A boolean flag that determines if a response returns future offers 30 days from now. If the show_future_offers is true, the response will only contain offers that are scheduled to be available 30 days from now.
		 * @return {GoogleCloudChannelV1ListOffersResponse} Successful response
		 */
		Cloudchannel_accounts_offers_list(parent: string, filter: string | null | undefined, languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, showFutureOffers: boolean | null | undefined): Observable<GoogleCloudChannelV1ListOffersResponse> {
			return this.http.get<GoogleCloudChannelV1ListOffersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/offers&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showFutureOffers=' + showFutureOffers, {});
		}

		/**
		 * Lists the reports that RunReportJob can run. These reports include an ID, a description, and the list of columns that will be in the result. Deprecated: Please use [Export Channel Services data to BigQuery](https://cloud.google.com/channel/docs/rebilling/export-data-to-bigquery) instead.
		 * Get v1/{parent}/reports
		 * @param {string} parent Required. The resource name of the partner account to list available reports for. Parent uses the format: accounts/{account_id}
		 * @param {string} languageCode Optional. The BCP-47 language code, such as "en-US". If specified, the response is localized to the corresponding language code if the original data sources support it. Default is "en-US".
		 * @param {number} pageSize Optional. Requested page size of the report. The server might return fewer results than requested. If unspecified, returns 20 reports. The maximum value is 100.
		 * @param {string} pageToken Optional. A token that specifies a page of results beyond the first page. Obtained through ListReportsResponse.next_page_token of the previous CloudChannelReportsService.ListReports call.
		 * @return {GoogleCloudChannelV1ListReportsResponse} Successful response
		 */
		Cloudchannel_accounts_reports_list(parent: string, languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudChannelV1ListReportsResponse> {
			return this.http.get<GoogleCloudChannelV1ListReportsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reports&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists the Rebilling supported SKU groups the account is authorized to sell. Reference: https://cloud.google.com/skus/sku-groups Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different, or the account doesn't exist. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the SkuGroup resources. The data for each resource is displayed in the alphabetical order of SKU group display name. The data for each resource is displayed in the ascending order of SkuGroup.display_name If unsuccessful, returns an error.
		 * Get v1/{parent}/skuGroups
		 * @param {string} parent Required. The resource name of the account from which to list SKU groups. Parent uses the format: accounts/{account}.
		 * @param {number} pageSize Optional. The maximum number of SKU groups to return. The service may return fewer than this value. If unspecified, returns a maximum of 1000 SKU groups. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Optional. A token identifying a page of results beyond the first page. Obtained through ListSkuGroups.next_page_token of the previous CloudChannelService.ListSkuGroups call.
		 * @return {GoogleCloudChannelV1ListSkuGroupsResponse} Successful response
		 */
		Cloudchannel_accounts_skuGroups_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudChannelV1ListSkuGroupsResponse> {
			return this.http.get<GoogleCloudChannelV1ListSkuGroupsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/skuGroups&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists the SKUs for a product the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.
		 * Get v1/{parent}/skus
		 * @param {string} parent Required. The resource name of the Product to list SKUs for. Parent uses the format: products/{product_id}. Supports products/- to retrieve SKUs for all products.
		 * @param {string} account Required. Resource name of the reseller. Format: accounts/{account_id}.
		 * @param {string} languageCode Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".
		 * @param {number} pageSize Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 SKUs. The maximum value is 1000; the server will coerce values above 1000.
		 * @param {string} pageToken Optional. A token for a page of results other than the first page. Optional.
		 * @return {GoogleCloudChannelV1ListSkusResponse} Successful response
		 */
		Cloudchannel_products_skus_list(parent: string, account: string | null | undefined, languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudChannelV1ListSkusResponse> {
			return this.http.get<GoogleCloudChannelV1ListSkusResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/skus&account=' + (account == null ? '' : encodeURIComponent(account)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INVALID_VALUE: Invalid domain value in the request. Return value: A list of CloudIdentityCustomerAccount resources for the domain (may be empty) Note: in the v1alpha1 version of the API, a NOT_FOUND error returns if no CloudIdentityCustomerAccount resources match the domain.
		 * Post v1/{parent}:checkCloudIdentityAccountsExist
		 * @param {string} parent Required. The reseller account's resource name. Parent uses the format: accounts/{account_id}
		 * @return {GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse} Successful response
		 */
		Cloudchannel_accounts_checkCloudIdentityAccountsExist(parent: string, requestBody: GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest): Observable<GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse> {
			return this.http.post<GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':checkCloudIdentityAccountsExist', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List entitlement history. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different. * INVALID_ARGUMENT: Missing or invalid required fields in the request. * NOT_FOUND: The parent resource doesn't exist. Usually the result of an invalid name parameter. * INTERNAL: Any non-user error related to a technical issue in the backend. In this case, contact CloudChannel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. In this case, contact Cloud Channel support. Return value: List of EntitlementChanges.
		 * Get v1/{parent}:listEntitlementChanges
		 * @param {string} parent Required. The resource name of the entitlement for which to list entitlement changes. The `-` wildcard may be used to match entitlements across a customer. Formats: * accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id} * accounts/{account_id}/customers/{customer_id}/entitlements/-
		 * @param {string} filter Optional. Filters applied to the list results.
		 * @param {number} pageSize Optional. The maximum number of entitlement changes to return. The service may return fewer than this value. If unspecified, returns at most 10 entitlement changes. The maximum value is 50; the server will coerce values above 50.
		 * @param {string} pageToken Optional. A page token, received from a previous CloudChannelService.ListEntitlementChanges call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to CloudChannelService.ListEntitlementChanges must match the call that provided the page token.
		 * @return {GoogleCloudChannelV1ListEntitlementChangesResponse} Successful response
		 */
		Cloudchannel_accounts_customers_entitlements_listEntitlementChanges(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudChannelV1ListEntitlementChangesResponse> {
			return this.http.get<GoogleCloudChannelV1ListEntitlementChangesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':listEntitlementChanges&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List TransferableOffers of a customer based on Cloud Identity ID or Customer Name in the request. Use this method when a reseller gets the entitlement information of an unowned customer. The reseller should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The customer provided incorrect reseller information when generating auth token. * The reseller account making the request is different from the reseller account in the query. * The reseller is not authorized to transact on this Product. See https://support.google.com/channelservices/answer/9759265 * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of TransferableOffer for the given customer and SKU.
		 * Post v1/{parent}:listTransferableOffers
		 * @param {string} parent Required. The resource name of the reseller's account.
		 * @return {GoogleCloudChannelV1ListTransferableOffersResponse} Successful response
		 */
		Cloudchannel_accounts_listTransferableOffers(parent: string, requestBody: GoogleCloudChannelV1ListTransferableOffersRequest): Observable<GoogleCloudChannelV1ListTransferableOffersResponse> {
			return this.http.post<GoogleCloudChannelV1ListTransferableOffersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':listTransferableOffers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List TransferableSkus of a customer based on the Cloud Identity ID or Customer Name in the request. Use this method to list the entitlements information of an unowned customer. You should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The supplied auth token is invalid. * The reseller account making the request is different from the reseller account in the query. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's TransferableSku.
		 * Post v1/{parent}:listTransferableSkus
		 * @param {string} parent Required. The reseller account's resource name. Parent uses the format: accounts/{account_id}
		 * @return {GoogleCloudChannelV1ListTransferableSkusResponse} Successful response
		 */
		Cloudchannel_accounts_listTransferableSkus(parent: string, requestBody: GoogleCloudChannelV1ListTransferableSkusRequest): Observable<GoogleCloudChannelV1ListTransferableSkusResponse> {
			return this.http.post<GoogleCloudChannelV1ListTransferableSkusResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':listTransferableSkus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Transfers customer entitlements to new reseller. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller. * The reseller is not authorized to transact on this Product. See https://support.google.com/channelservices/answer/9759265 * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * Specify all transferring entitlements. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.
		 * Post v1/{parent}:transferEntitlements
		 * @param {string} parent Required. The resource name of the reseller's customer account that will receive transferred entitlements. Parent uses the format: accounts/{account_id}/customers/{customer_id}
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Cloudchannel_accounts_customers_transferEntitlements(parent: string, requestBody: GoogleCloudChannelV1TransferEntitlementsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':transferEntitlements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Transfers customer entitlements from their current reseller to Google. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The response will contain google.protobuf.Empty on success. The Operation metadata will contain an instance of OperationMetadata.
		 * Post v1/{parent}:transferEntitlementsToGoogle
		 * @param {string} parent Required. The resource name of the reseller's customer account where the entitlements transfer from. Parent uses the format: accounts/{account_id}/customers/{customer_id}
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Cloudchannel_accounts_customers_transferEntitlementsToGoogle(parent: string, requestBody: GoogleCloudChannelV1TransferEntitlementsToGoogleRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':transferEntitlementsToGoogle', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves data generated by CloudChannelReportsService.RunReportJob. Deprecated: Please use [Export Channel Services data to BigQuery](https://cloud.google.com/channel/docs/rebilling/export-data-to-bigquery) instead.
		 * Post v1/{reportJob}:fetchReportResults
		 * @param {string} reportJob Required. The report job created by CloudChannelReportsService.RunReportJob. Report_job uses the format: accounts/{account_id}/reportJobs/{report_job_id}
		 * @return {GoogleCloudChannelV1FetchReportResultsResponse} Successful response
		 */
		Cloudchannel_accounts_reportJobs_fetchReportResults(reportJob: string, requestBody: GoogleCloudChannelV1FetchReportResultsRequest): Observable<GoogleCloudChannelV1FetchReportResultsResponse> {
			return this.http.post<GoogleCloudChannelV1FetchReportResultsResponse>(this.baseUri + 'v1/' + (reportJob == null ? '' : encodeURIComponent(reportJob)) + ':fetchReportResults', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Cloudchannel_accounts_customers_listPurchasableSkusChangeOfferPurchase_changeType { CHANGE_TYPE_UNSPECIFIED = 0, UPGRADE = 1, DOWNGRADE = 2 }

	export enum Cloudchannel_operations_listFilter { UNSPECIFIED = 0, BASIC = 1, FULL = 2 }

}

