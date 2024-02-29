import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes the amount unit including the currency code. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1Amount {

		/** Required. Amount in micros (1_000_000 micros = 1 currency unit) */
		amountMicros?: string | null;

		/** Required. Currency codes in accordance with [ISO-4217 Currency Codes] (https://en.wikipedia.org/wiki/ISO_4217). For example, USD. */
		currencyCode?: string | null;
	}

	/** Describes the amount unit including the currency code. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1AmountFormProperties {

		/** Required. Amount in micros (1_000_000 micros = 1 currency unit) */
		amountMicros: FormControl<string | null | undefined>,

		/** Required. Currency codes in accordance with [ISO-4217 Currency Codes] (https://en.wikipedia.org/wiki/ISO_4217). For example, USD. */
		currencyCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1AmountFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1AmountFormProperties>({
			amountMicros: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest {

		/** Optional. If true, Google will cancel the subscription immediately, and may or may not (based on the contract) issue a prorated refund for the remainder of the billing cycle. Otherwise, Google defers the cancelation at renewal_time, and will not issue a refund. */
		cancelImmediately?: boolean | null;

		/** Specifies the reason for the cancellation. */
		cancellationReason?: GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReason | null;
	}
	export interface GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestFormProperties {

		/** Optional. If true, Google will cancel the subscription immediately, and may or may not (based on the contract) issue a prorated refund for the remainder of the billing cycle. Otherwise, Google defers the cancelation at renewal_time, and will not issue a refund. */
		cancelImmediately: FormControl<boolean | null | undefined>,

		/** Specifies the reason for the cancellation. */
		cancellationReason: FormControl<GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReason | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestFormProperties>({
			cancelImmediately: new FormControl<boolean | null | undefined>(undefined),
			cancellationReason: new FormControl<GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReason | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReason { CANCELLATION_REASON_UNSPECIFIED = 'CANCELLATION_REASON_UNSPECIFIED', CANCELLATION_REASON_FRAUD = 'CANCELLATION_REASON_FRAUD', CANCELLATION_REASON_REMORSE = 'CANCELLATION_REASON_REMORSE', CANCELLATION_REASON_ACCIDENTAL_PURCHASE = 'CANCELLATION_REASON_ACCIDENTAL_PURCHASE', CANCELLATION_REASON_PAST_DUE = 'CANCELLATION_REASON_PAST_DUE', CANCELLATION_REASON_ACCOUNT_CLOSED = 'CANCELLATION_REASON_ACCOUNT_CLOSED', CANCELLATION_REASON_UPGRADE_DOWNGRADE = 'CANCELLATION_REASON_UPGRADE_DOWNGRADE', CANCELLATION_REASON_USER_DELINQUENCY = 'CANCELLATION_REASON_USER_DELINQUENCY', CANCELLATION_REASON_SYSTEM_ERROR = 'CANCELLATION_REASON_SYSTEM_ERROR', CANCELLATION_REASON_SYSTEM_CANCEL = 'CANCELLATION_REASON_SYSTEM_CANCEL', CANCELLATION_REASON_OTHER = 'CANCELLATION_REASON_OTHER' }

	export interface GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse {

		/** A Subscription resource managed by 3P Partners. */
		subscription?: GoogleCloudPaymentsResellerSubscriptionV1Subscription;
	}
	export interface GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponseFormProperties {
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponseFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponseFormProperties>({
		});

	}


	/** A Subscription resource managed by 3P Partners. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1Subscription {

		/** Describes the details of a cancelled or cancelling subscription. */
		cancellationDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails;

		/** Output only. System generated timestamp when the subscription is created. UTC timezone. */
		createTime?: string | null;

		/** Output only. The time at which the subscription is expected to be extended, in ISO 8061 format. UTC timezone. For example: "2019-08-31T17:28:54.564Z" */
		cycleEndTime?: string | null;

		/** Output only. Indicates if the subscription is entitled to the end user. */
		endUserEntitled?: boolean | null;

		/** Output only. End of the free trial period, in ISO 8061 format. For example, "2019-08-31T17:28:54.564Z". It will be set the same as createTime if no free trial promotion is specified. */
		freeTrialEndTime?: string | null;

		/** Required. The line items of the subscription. */
		lineItems?: Array<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem>;

		/** Optional. Resource name of the subscription. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}". This is available for authorizeAddon, but otherwise is response only. */
		name?: string | null;

		/** Required. Identifier of the end-user in partner’s system. The value is restricted to 63 ASCII characters at the maximum. */
		partnerUserToken?: string | null;

		/** Output only. Describes the processing state of the subscription. See more details at [the lifecycle of a subscription](/payments/reseller/subscription/reference/index/Receive.Notifications#payments-subscription-lifecycle). */
		processingState?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingState | null;

		/** Optional. Deprecated: consider using `line_items` as the input. Required. Resource name that identifies the purchased products. The format will be 'partners/{partner_id}/products/{product_id}'. */
		products?: Array<string>;

		/** Optional. Subscription-level promotions. Only free trial is supported on this level. It determines the first renewal time of the subscription to be the end of the free trial period. Specify the promotion resource name only when used as input. */
		promotionSpecs?: Array<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec>;

		/** Optional. Deprecated: consider using the top-level `promotion_specs` as the input. Optional. Resource name that identifies one or more promotions that can be applied on the product. A typical promotion for a subscription is Free trial. The format will be 'partners/{partner_id}/promotions/{promotion_id}'. */
		promotions?: Array<string>;

		/** Output only. The place where partners should redirect the end-user to after creation. This field might also be populated when creation failed. However, Partners should always prepare a default URL to redirect the user in case this field is empty. */
		redirectUri?: string | null;

		/** Output only. The time at which the subscription is expected to be renewed by Google - a new charge will be incurred and the service entitlement will be renewed. A non-immediate cancellation will take place at this time too, before which, the service entitlement for the end user will remain valid. UTC timezone in ISO 8061 format. For example: "2019-08-31T17:28:54.564Z" */
		renewalTime?: string | null;

		/** Describes a location of an end user. */
		serviceLocation?: GoogleCloudPaymentsResellerSubscriptionV1Location;

		/** Output only. Describes the state of the subscription. See more details at [the lifecycle of a subscription](/payments/reseller/subscription/reference/index/Receive.Notifications#payments-subscription-lifecycle). */
		state?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionState | null;

		/** Output only. System generated timestamp when the subscription is most recently updated. UTC timezone. */
		updateTime?: string | null;

		/** Details about the previous subscription that this new subscription upgrades/downgrades from. */
		upgradeDowngradeDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails;
	}

	/** A Subscription resource managed by 3P Partners. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1SubscriptionFormProperties {

		/** Output only. System generated timestamp when the subscription is created. UTC timezone. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time at which the subscription is expected to be extended, in ISO 8061 format. UTC timezone. For example: "2019-08-31T17:28:54.564Z" */
		cycleEndTime: FormControl<string | null | undefined>,

		/** Output only. Indicates if the subscription is entitled to the end user. */
		endUserEntitled: FormControl<boolean | null | undefined>,

		/** Output only. End of the free trial period, in ISO 8061 format. For example, "2019-08-31T17:28:54.564Z". It will be set the same as createTime if no free trial promotion is specified. */
		freeTrialEndTime: FormControl<string | null | undefined>,

		/** Optional. Resource name of the subscription. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}". This is available for authorizeAddon, but otherwise is response only. */
		name: FormControl<string | null | undefined>,

		/** Required. Identifier of the end-user in partner’s system. The value is restricted to 63 ASCII characters at the maximum. */
		partnerUserToken: FormControl<string | null | undefined>,

		/** Output only. Describes the processing state of the subscription. See more details at [the lifecycle of a subscription](/payments/reseller/subscription/reference/index/Receive.Notifications#payments-subscription-lifecycle). */
		processingState: FormControl<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingState | null | undefined>,

		/** Output only. The place where partners should redirect the end-user to after creation. This field might also be populated when creation failed. However, Partners should always prepare a default URL to redirect the user in case this field is empty. */
		redirectUri: FormControl<string | null | undefined>,

		/** Output only. The time at which the subscription is expected to be renewed by Google - a new charge will be incurred and the service entitlement will be renewed. A non-immediate cancellation will take place at this time too, before which, the service entitlement for the end user will remain valid. UTC timezone in ISO 8061 format. For example: "2019-08-31T17:28:54.564Z" */
		renewalTime: FormControl<string | null | undefined>,

		/** Output only. Describes the state of the subscription. See more details at [the lifecycle of a subscription](/payments/reseller/subscription/reference/index/Receive.Notifications#payments-subscription-lifecycle). */
		state: FormControl<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionState | null | undefined>,

		/** Output only. System generated timestamp when the subscription is most recently updated. UTC timezone. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1SubscriptionFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			cycleEndTime: new FormControl<string | null | undefined>(undefined),
			endUserEntitled: new FormControl<boolean | null | undefined>(undefined),
			freeTrialEndTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			partnerUserToken: new FormControl<string | null | undefined>(undefined),
			processingState: new FormControl<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingState | null | undefined>(undefined),
			redirectUri: new FormControl<string | null | undefined>(undefined),
			renewalTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the details of a cancelled or cancelling subscription. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails {

		/** The reason of the cancellation. */
		reason?: GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReason | null;
	}

	/** Describes the details of a cancelled or cancelling subscription. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsFormProperties {

		/** The reason of the cancellation. */
		reason: FormControl<GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReason | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsFormProperties>({
			reason: new FormControl<GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestCancellationReason | null | undefined>(undefined),
		});

	}


	/** Individual line item definition of a subscription. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem {

		/** Describes the amount unit including the currency code. */
		amount?: GoogleCloudPaymentsResellerSubscriptionV1Amount;

		/** The bundle details for a line item corresponding to a hard bundle. */
		bundleDetails?: SubscriptionLineItemBundleDetails;

		/** Output only. Description of this line item. */
		description?: string | null;

		/** Details for a subscriptiin line item with finite billing cycles. */
		finiteBillingCycleDetails?: GoogleCloudPaymentsResellerSubscriptionV1FiniteBillingCycleDetails;

		/** Output only. The free trial end time will be populated after the line item is successfully processed. End time of the line item free trial period, in ISO 8061 format. For example, "2019-08-31T17:28:54.564Z". It will be set the same as createTime if no free trial promotion is specified. */
		lineItemFreeTrialEndTime?: string | null;

		/**
		 * Output only. A unique index of the subscription line item.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lineItemIndex?: number | null;

		/** Optional. The promotions applied on the line item. It can be: - a free trial promotion, which overrides the subscription-level free trial promotion. - an introductory pricing promotion. When used as input in Create or Provision API, specify its resource name only. */
		lineItemPromotionSpecs?: Array<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec>;

		/** Details for a ONE_TIME recurrence line item. */
		oneTimeRecurrenceDetails?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails;

		/** Required. Product resource name that identifies one the line item The format is 'partners/{partner_id}/products/{product_id}'. */
		product?: string | null;

		/** Specifies product specific payload. */
		productPayload?: GoogleCloudPaymentsResellerSubscriptionV1ProductPayload;

		/** Output only. The recurrence type of the line item. */
		recurrenceType?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceType | null;

		/** Output only. The state of the line item. */
		state?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemState | null;
	}

	/** Individual line item definition of a subscription. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemFormProperties {

		/** Output only. Description of this line item. */
		description: FormControl<string | null | undefined>,

		/** Output only. The free trial end time will be populated after the line item is successfully processed. End time of the line item free trial period, in ISO 8061 format. For example, "2019-08-31T17:28:54.564Z". It will be set the same as createTime if no free trial promotion is specified. */
		lineItemFreeTrialEndTime: FormControl<string | null | undefined>,

		/**
		 * Output only. A unique index of the subscription line item.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lineItemIndex: FormControl<number | null | undefined>,

		/** Required. Product resource name that identifies one the line item The format is 'partners/{partner_id}/products/{product_id}'. */
		product: FormControl<string | null | undefined>,

		/** Output only. The recurrence type of the line item. */
		recurrenceType: FormControl<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceType | null | undefined>,

		/** Output only. The state of the line item. */
		state: FormControl<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemState | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			lineItemFreeTrialEndTime: new FormControl<string | null | undefined>(undefined),
			lineItemIndex: new FormControl<number | null | undefined>(undefined),
			product: new FormControl<string | null | undefined>(undefined),
			recurrenceType: new FormControl<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceType | null | undefined>(undefined),
			state: new FormControl<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemState | null | undefined>(undefined),
		});

	}


	/** The bundle details for a line item corresponding to a hard bundle. */
	export interface SubscriptionLineItemBundleDetails {

		/** The details for each element in the hard bundle. */
		bundleElementDetails?: Array<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemBundleDetailsBundleElementDetails>;
	}

	/** The bundle details for a line item corresponding to a hard bundle. */
	export interface SubscriptionLineItemBundleDetailsFormProperties {
	}
	export function CreateSubscriptionLineItemBundleDetailsFormGroup() {
		return new FormGroup<SubscriptionLineItemBundleDetailsFormProperties>({
		});

	}


	/** The details for an element in the hard bundle. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemBundleDetailsBundleElementDetails {

		/** Output only. Product resource name that identifies the bundle element. The format is 'partners/{partner_id}/products/{product_id}'. */
		product?: string | null;

		/** Output only. The time when this product is linked to an end user. */
		userAccountLinkedTime?: string | null;
	}

	/** The details for an element in the hard bundle. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemBundleDetailsBundleElementDetailsFormProperties {

		/** Output only. Product resource name that identifies the bundle element. The format is 'partners/{partner_id}/products/{product_id}'. */
		product: FormControl<string | null | undefined>,

		/** Output only. The time when this product is linked to an end user. */
		userAccountLinkedTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemBundleDetailsBundleElementDetailsFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemBundleDetailsBundleElementDetailsFormProperties>({
			product: new FormControl<string | null | undefined>(undefined),
			userAccountLinkedTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for a subscriptiin line item with finite billing cycles. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1FiniteBillingCycleDetails {

		/** Required. The number of a subscription line item billing cycles after which billing will stop automatically. */
		billingCycleCountLimit?: string | null;
	}

	/** Details for a subscriptiin line item with finite billing cycles. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1FiniteBillingCycleDetailsFormProperties {

		/** Required. The number of a subscription line item billing cycles after which billing will stop automatically. */
		billingCycleCountLimit: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1FiniteBillingCycleDetailsFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1FiniteBillingCycleDetailsFormProperties>({
			billingCycleCountLimit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the spec for one promotion. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec {

		/** Describes the length of a period of a time. */
		freeTrialDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;

		/** The details of a introductory pricing promotion. */
		introductoryPricingDetails?: GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails;

		/** Required. Promotion resource name that identifies a promotion. The format is 'partners/{partner_id}/promotions/{promotion_id}'. */
		promotion?: string | null;

		/** Output only. The type of the promotion for the spec. */
		type?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecType | null;
	}

	/** Describes the spec for one promotion. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecFormProperties {

		/** Required. Promotion resource name that identifies a promotion. The format is 'partners/{partner_id}/promotions/{promotion_id}'. */
		promotion: FormControl<string | null | undefined>,

		/** Output only. The type of the promotion for the spec. */
		type: FormControl<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecType | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecFormProperties>({
			promotion: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecType | null | undefined>(undefined),
		});

	}


	/** Describes the length of a period of a time. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1Duration {

		/**
		 * number of duration units to be included.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/** The unit used for the duration */
		unit?: GoogleCloudPaymentsResellerSubscriptionV1DurationUnit | null;
	}

	/** Describes the length of a period of a time. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1DurationFormProperties {

		/**
		 * number of duration units to be included.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/** The unit used for the duration */
		unit: FormControl<GoogleCloudPaymentsResellerSubscriptionV1DurationUnit | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1DurationFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1DurationFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<GoogleCloudPaymentsResellerSubscriptionV1DurationUnit | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudPaymentsResellerSubscriptionV1DurationUnit { UNIT_UNSPECIFIED = 'UNIT_UNSPECIFIED', MONTH = 'MONTH', DAY = 'DAY', HOUR = 'HOUR' }


	/** The details of a introductory pricing promotion. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails {

		/** Specifies the introductory pricing periods. */
		introductoryPricingSpecs?: Array<GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec>;
	}

	/** The details of a introductory pricing promotion. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsFormProperties {
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsFormProperties>({
		});

	}


	/** The duration of an introductory pricing promotion. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec {

		/** Describes the amount unit including the currency code. */
		discountAmount?: GoogleCloudPaymentsResellerSubscriptionV1Amount;

		/** Output only. The discount percentage in micros. For example, 50,000 represents 5%. */
		discountRatioMicros?: string | null;

		/**
		 * Output only. Output Only. The duration of an introductory offer in billing cycles.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		recurrenceCount?: number | null;

		/** Output only. 2-letter ISO region code where the product is available in. Ex. "US". */
		regionCode?: string | null;
	}

	/** The duration of an introductory pricing promotion. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecFormProperties {

		/** Output only. The discount percentage in micros. For example, 50,000 represents 5%. */
		discountRatioMicros: FormControl<string | null | undefined>,

		/**
		 * Output only. Output Only. The duration of an introductory offer in billing cycles.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		recurrenceCount: FormControl<number | null | undefined>,

		/** Output only. 2-letter ISO region code where the product is available in. Ex. "US". */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecFormProperties>({
			discountRatioMicros: new FormControl<string | null | undefined>(undefined),
			recurrenceCount: new FormControl<number | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecType { PROMOTION_TYPE_UNSPECIFIED = 'PROMOTION_TYPE_UNSPECIFIED', PROMOTION_TYPE_FREE_TRIAL = 'PROMOTION_TYPE_FREE_TRIAL', PROMOTION_TYPE_INTRODUCTORY_PRICING = 'PROMOTION_TYPE_INTRODUCTORY_PRICING' }


	/** Details for a ONE_TIME recurrence line item. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails {

		/** A description of what time period or moment in time the product or service is being delivered over. */
		servicePeriod?: GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod;
	}

	/** Details for a ONE_TIME recurrence line item. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetailsFormProperties {
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetailsFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetailsFormProperties>({
		});

	}


	/** A description of what time period or moment in time the product or service is being delivered over. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod {

		/** Optional. The end time of the service period. Time is exclusive. */
		endTime?: string | null;

		/** Required. The start time of the service period. Time is inclusive. */
		startTime?: string | null;
	}

	/** A description of what time period or moment in time the product or service is being delivered over. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1ServicePeriodFormProperties {

		/** Optional. The end time of the service period. Time is exclusive. */
		endTime: FormControl<string | null | undefined>,

		/** Required. The start time of the service period. Time is inclusive. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1ServicePeriodFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1ServicePeriodFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies product specific payload. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1ProductPayload {

		/** Payload specific to Google One products. */
		googleOnePayload?: GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload;

		/** Payload specific to Youtube products. */
		youtubePayload?: GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload;
	}

	/** Specifies product specific payload. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1ProductPayloadFormProperties {
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1ProductPayloadFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1ProductPayloadFormProperties>({
		});

	}


	/** Payload specific to Google One products. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload {

		/** Campaign attributed to sales of this subscription. */
		campaigns?: Array<string>;

		/** The type of offering the subscription was sold by the partner. e.g. VAS. */
		offering?: GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOffering | null;

		/** The type of sales channel through which the subscription was sold. */
		salesChannel?: GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannel | null;

		/** The identifier for the partner store where the subscription was sold. */
		storeId?: string | null;
	}

	/** Payload specific to Google One products. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadFormProperties {

		/** The type of offering the subscription was sold by the partner. e.g. VAS. */
		offering: FormControl<GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOffering | null | undefined>,

		/** The type of sales channel through which the subscription was sold. */
		salesChannel: FormControl<GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannel | null | undefined>,

		/** The identifier for the partner store where the subscription was sold. */
		storeId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadFormProperties>({
			offering: new FormControl<GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOffering | null | undefined>(undefined),
			salesChannel: new FormControl<GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannel | null | undefined>(undefined),
			storeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOffering { OFFERING_UNSPECIFIED = 'OFFERING_UNSPECIFIED', OFFERING_VAS_BUNDLE = 'OFFERING_VAS_BUNDLE', OFFERING_VAS_STANDALONE = 'OFFERING_VAS_STANDALONE', OFFERING_HARD_BUNDLE = 'OFFERING_HARD_BUNDLE', OFFERING_SOFT_BUNDLE = 'OFFERING_SOFT_BUNDLE' }

	export enum GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannel { CHANNEL_UNSPECIFIED = 'CHANNEL_UNSPECIFIED', CHANNEL_RETAIL = 'CHANNEL_RETAIL', CHANNEL_ONLINE_WEB = 'CHANNEL_ONLINE_WEB', CHANNEL_ONLINE_ANDROID_APP = 'CHANNEL_ONLINE_ANDROID_APP', CHANNEL_ONLINE_IOS_APP = 'CHANNEL_ONLINE_IOS_APP' }


	/** Payload specific to Youtube products. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload {

		/** Output only. The access expiration time for this line item. */
		accessEndTime?: string | null;

		/** The list of eligibility_ids which are applicable for the line item. */
		partnerEligibilityIds?: Array<string>;
	}

	/** Payload specific to Youtube products. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1YoutubePayloadFormProperties {

		/** Output only. The access expiration time for this line item. */
		accessEndTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1YoutubePayloadFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1YoutubePayloadFormProperties>({
			accessEndTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemRecurrenceType { LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED = 'LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED', LINE_ITEM_RECURRENCE_TYPE_PERIODIC = 'LINE_ITEM_RECURRENCE_TYPE_PERIODIC', LINE_ITEM_RECURRENCE_TYPE_ONE_TIME = 'LINE_ITEM_RECURRENCE_TYPE_ONE_TIME' }

	export enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemState { LINE_ITEM_STATE_UNSPECIFIED = 'LINE_ITEM_STATE_UNSPECIFIED', LINE_ITEM_STATE_ACTIVE = 'LINE_ITEM_STATE_ACTIVE', LINE_ITEM_STATE_INACTIVE = 'LINE_ITEM_STATE_INACTIVE', LINE_ITEM_STATE_NEW = 'LINE_ITEM_STATE_NEW', LINE_ITEM_STATE_ACTIVATING = 'LINE_ITEM_STATE_ACTIVATING', LINE_ITEM_STATE_DEACTIVATING = 'LINE_ITEM_STATE_DEACTIVATING', LINE_ITEM_STATE_WAITING_TO_DEACTIVATE = 'LINE_ITEM_STATE_WAITING_TO_DEACTIVATE', LINE_ITEM_STATE_OFF_CYCLE_CHARGING = 'LINE_ITEM_STATE_OFF_CYCLE_CHARGING' }

	export enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionProcessingState { PROCESSING_STATE_UNSPECIFIED = 'PROCESSING_STATE_UNSPECIFIED', PROCESSING_STATE_CANCELLING = 'PROCESSING_STATE_CANCELLING', PROCESSING_STATE_RECURRING = 'PROCESSING_STATE_RECURRING' }


	/** Describes a location of an end user. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1Location {

		/** The postal code this location refers to. Ex. "94043" */
		postalCode?: string | null;

		/** 2-letter ISO region code for current content region. Ex. “US” Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1 */
		regionCode?: string | null;
	}

	/** Describes a location of an end user. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1LocationFormProperties {

		/** The postal code this location refers to. Ex. "94043" */
		postalCode: FormControl<string | null | undefined>,

		/** 2-letter ISO region code for current content region. Ex. “US” Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1 */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1LocationFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1LocationFormProperties>({
			postalCode: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', STATE_CREATED = 'STATE_CREATED', STATE_ACTIVE = 'STATE_ACTIVE', STATE_CANCELLED = 'STATE_CANCELLED', STATE_IN_GRACE_PERIOD = 'STATE_IN_GRACE_PERIOD', STATE_CANCEL_AT_END_OF_CYCLE = 'STATE_CANCEL_AT_END_OF_CYCLE', STATE_SUSPENDED = 'STATE_SUSPENDED' }


	/** Details about the previous subscription that this new subscription upgrades/downgrades from. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails {

		/** Required. Specifies the billing cycle spec for the new upgraded/downgraded subscription. */
		billingCycleSpec?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpec | null;

		/** Required. The previous subscription id to be replaced. This is not the full resource name, use the subscription_id segment only. */
		previousSubscriptionId?: string | null;
	}

	/** Details about the previous subscription that this new subscription upgrades/downgrades from. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsFormProperties {

		/** Required. Specifies the billing cycle spec for the new upgraded/downgraded subscription. */
		billingCycleSpec: FormControl<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpec | null | undefined>,

		/** Required. The previous subscription id to be replaced. This is not the full resource name, use the subscription_id segment only. */
		previousSubscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsFormProperties>({
			billingCycleSpec: new FormControl<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpec | null | undefined>(undefined),
			previousSubscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsBillingCycleSpec { BILLING_CYCLE_SPEC_UNSPECIFIED = 'BILLING_CYCLE_SPEC_UNSPECIFIED', BILLING_CYCLE_SPEC_ALIGN_WITH_PREVIOUS_SUBSCRIPTION = 'BILLING_CYCLE_SPEC_ALIGN_WITH_PREVIOUS_SUBSCRIPTION', BILLING_CYCLE_SPEC_START_IMMEDIATELY = 'BILLING_CYCLE_SPEC_START_IMMEDIATELY' }


	/** Partner request for entitling the previously provisioned subscription to an end user. The end user identity is inferred from the request OAuth context. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest {

		/** Optional. The line items to be entitled. If unspecified, all line items will be entitled. */
		lineItemEntitlementDetails?: Array<GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequestLineItemEntitlementDetails>;
	}

	/** Partner request for entitling the previously provisioned subscription to an end user. The end user identity is inferred from the request OAuth context. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequestFormProperties {
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequestFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequestFormProperties>({
		});

	}


	/** The details of the line item to be entitled. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequestLineItemEntitlementDetails {

		/**
		 * Required. The index of the line item to be entitled.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lineItemIndex?: number | null;

		/** Optional. Only applicable if the line item corresponds to a hard bundle. Product resource names that identify the bundle elements to be entitled in the line item. If unspecified, all bundle elements will be entitled. The format is 'partners/{partner_id}/products/{product_id}'. */
		products?: Array<string>;
	}

	/** The details of the line item to be entitled. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequestLineItemEntitlementDetailsFormProperties {

		/**
		 * Required. The index of the line item to be entitled.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lineItemIndex: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequestLineItemEntitlementDetailsFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequestLineItemEntitlementDetailsFormProperties>({
			lineItemIndex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse {

		/** A Subscription resource managed by 3P Partners. */
		subscription?: GoogleCloudPaymentsResellerSubscriptionV1Subscription;
	}
	export interface GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponseFormProperties {
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponseFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponseFormProperties>({
		});

	}


	/** Request message for extending a Subscription resource. A new recurrence will be made based on the subscription schedule defined by the original product. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest {

		/** Describes the details of an extension request. */
		extension?: GoogleCloudPaymentsResellerSubscriptionV1Extension;

		/** Required. Restricted to 36 ASCII characters. A random UUID is recommended. The idempotency key for the request. The ID generation logic is controlled by the partner. request_id should be the same as on retries of the same request. A different request_id must be used for a extension of a different cycle. */
		requestId?: string | null;
	}

	/** Request message for extending a Subscription resource. A new recurrence will be made based on the subscription schedule defined by the original product. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequestFormProperties {

		/** Required. Restricted to 36 ASCII characters. A random UUID is recommended. The idempotency key for the request. The ID generation logic is controlled by the partner. request_id should be the same as on retries of the same request. A different request_id must be used for a extension of a different cycle. */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequestFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the details of an extension request. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1Extension {

		/** Describes the length of a period of a time. */
		duration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;

		/** Required. Identifier of the end-user in partner’s system. */
		partnerUserToken?: string | null;
	}

	/** Describes the details of an extension request. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1ExtensionFormProperties {

		/** Required. Identifier of the end-user in partner’s system. */
		partnerUserToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1ExtensionFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1ExtensionFormProperties>({
			partnerUserToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse {

		/** The time at which the subscription is expected to be extended, in ISO 8061 format. UTC timezone. Example, "cycleEndTime":"2019-08-31T17:28:54.564Z" */
		cycleEndTime?: string | null;

		/** End of the free trial period, in ISO 8061 format. UTC timezone. Example, "freeTrialEndTime":"2019-08-31T17:28:54.564Z" This time will be set the same as initial subscription creation time if no free trial period is offered to the partner. */
		freeTrialEndTime?: string | null;

		/** Output only. The time at which the subscription is expected to be renewed by Google - a new charge will be incurred and the service entitlement will be renewed. A non-immediate cancellation will take place at this time too, before which, the service entitlement for the end user will remain valid. UTC timezone in ISO 8061 format. For example: "2019-08-31T17:28:54.564Z" */
		renewalTime?: string | null;
	}
	export interface GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponseFormProperties {

		/** The time at which the subscription is expected to be extended, in ISO 8061 format. UTC timezone. Example, "cycleEndTime":"2019-08-31T17:28:54.564Z" */
		cycleEndTime: FormControl<string | null | undefined>,

		/** End of the free trial period, in ISO 8061 format. UTC timezone. Example, "freeTrialEndTime":"2019-08-31T17:28:54.564Z" This time will be set the same as initial subscription creation time if no free trial period is offered to the partner. */
		freeTrialEndTime: FormControl<string | null | undefined>,

		/** Output only. The time at which the subscription is expected to be renewed by Google - a new charge will be incurred and the service entitlement will be renewed. A non-immediate cancellation will take place at this time too, before which, the service entitlement for the end user will remain valid. UTC timezone in ISO 8061 format. For example: "2019-08-31T17:28:54.564Z" */
		renewalTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponseFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponseFormProperties>({
			cycleEndTime: new FormControl<string | null | undefined>(undefined),
			freeTrialEndTime: new FormControl<string | null | undefined>(undefined),
			renewalTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest {

		/** Optional. Specifies the filters for the promotion results. The syntax is defined in https://google.aip.dev/160 with the following caveats: - Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) - Only the following fields are supported: - `applicableProducts` - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` - Unless explicitly mentioned above, other features are not supported. Example: `applicableProducts:partners/partner1/products/product1 AND regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id` */
		filter?: string | null;

		/**
		 * Optional. The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize?: number | null;

		/** Optional. A page token, received from a previous `ListPromotions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotions` must match the call that provided the page token. */
		pageToken?: string | null;
	}
	export interface GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequestFormProperties {

		/** Optional. Specifies the filters for the promotion results. The syntax is defined in https://google.aip.dev/160 with the following caveats: - Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) - Only the following fields are supported: - `applicableProducts` - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` - Unless explicitly mentioned above, other features are not supported. Example: `applicableProducts:partners/partner1/products/product1 AND regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id` */
		filter: FormControl<string | null | undefined>,

		/**
		 * Optional. The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize: FormControl<number | null | undefined>,

		/** Optional. A page token, received from a previous `ListPromotions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotions` must match the call that provided the page token. */
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequestFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing the found promotions for the current user. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The promotions for the current user. */
		promotions?: Array<GoogleCloudPaymentsResellerSubscriptionV1Promotion>;
	}

	/** Response containing the found promotions for the current user. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponseFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Promotion resource that defines a promotion for a subscription that can be resold. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1Promotion {

		/** Output only. The product ids this promotion can be applied to. */
		applicableProducts?: Array<string>;

		/** Optional. Specifies the end time (exclusive) of the period that the promotion is available in. If unset, the promotion is available indefinitely. */
		endTime?: string | null;

		/** Describes the length of a period of a time. */
		freeTrialDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;

		/** The details of a introductory pricing promotion. */
		introductoryPricingDetails?: GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails;

		/** Output only. Response only. Resource name of the subscription promotion. It will have the format of "partners/{partner_id}/promotion/{promotion_id}" */
		name?: string | null;

		/** Output only. Output Only. Specifies the type of the promotion. */
		promotionType?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecType | null;

		/** Output only. 2-letter ISO region code where the promotion is available in. Ex. "US" Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1 */
		regionCodes?: Array<string>;

		/** Optional. Specifies the start time (inclusive) of the period that the promotion is available in. */
		startTime?: string | null;

		/** Output only. Localized human readable name of the promotion. */
		titles?: Array<GoogleTypeLocalizedText>;
	}

	/** A Promotion resource that defines a promotion for a subscription that can be resold. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1PromotionFormProperties {

		/** Optional. Specifies the end time (exclusive) of the period that the promotion is available in. If unset, the promotion is available indefinitely. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Response only. Resource name of the subscription promotion. It will have the format of "partners/{partner_id}/promotion/{promotion_id}" */
		name: FormControl<string | null | undefined>,

		/** Output only. Output Only. Specifies the type of the promotion. */
		promotionType: FormControl<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecType | null | undefined>,

		/** Optional. Specifies the start time (inclusive) of the period that the promotion is available in. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1PromotionFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1PromotionFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			promotionType: new FormControl<GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecType | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Localized variant of a text in a particular language. */
	export interface GoogleTypeLocalizedText {

		/** The text's BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode?: string | null;

		/** Localized string in the language corresponding to language_code below. */
		text?: string | null;
	}

	/** Localized variant of a text in a particular language. */
	export interface GoogleTypeLocalizedTextFormProperties {

		/** The text's BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. */
		languageCode: FormControl<string | null | undefined>,

		/** Localized string in the language corresponding to language_code below. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeLocalizedTextFormGroup() {
		return new FormGroup<GoogleTypeLocalizedTextFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The products for the specified partner. */
		products?: Array<GoogleCloudPaymentsResellerSubscriptionV1Product>;
	}
	export interface GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1ListProductsResponseFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Product resource that defines a subscription service that can be resold. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1Product {

		/** Details for a bundle product. */
		bundleDetails?: ProductBundleDetails;

		/** Details for a subscriptiin line item with finite billing cycles. */
		finiteBillingCycleDetails?: GoogleCloudPaymentsResellerSubscriptionV1FiniteBillingCycleDetails;

		/** Output only. Response only. Resource name of the product. It will have the format of "partners/{partner_id}/products/{product_id}" */
		name?: string | null;

		/** Output only. Price configs for the product in the available regions. */
		priceConfigs?: Array<GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig>;

		/** Output only. Output Only. Specifies the type of the product. */
		productType?: GoogleCloudPaymentsResellerSubscriptionV1ProductProductType | null;

		/** Output only. 2-letter ISO region code where the product is available in. Ex. "US" Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1 */
		regionCodes?: Array<string>;

		/** Describes the length of a period of a time. */
		subscriptionBillingCycleDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;

		/** Output only. Localized human readable name of the product. */
		titles?: Array<GoogleTypeLocalizedText>;
	}

	/** A Product resource that defines a subscription service that can be resold. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1ProductFormProperties {

		/** Output only. Response only. Resource name of the product. It will have the format of "partners/{partner_id}/products/{product_id}" */
		name: FormControl<string | null | undefined>,

		/** Output only. Output Only. Specifies the type of the product. */
		productType: FormControl<GoogleCloudPaymentsResellerSubscriptionV1ProductProductType | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1ProductFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1ProductFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			productType: new FormControl<GoogleCloudPaymentsResellerSubscriptionV1ProductProductType | null | undefined>(undefined),
		});

	}


	/** Details for a bundle product. */
	export interface ProductBundleDetails {

		/** The individual products that are included in the bundle. */
		bundleElements?: Array<GoogleCloudPaymentsResellerSubscriptionV1ProductBundleDetailsBundleElement>;

		/** The entitlement mode of the bundle product. */
		entitlementMode?: ProductBundleDetailsEntitlementMode | null;
	}

	/** Details for a bundle product. */
	export interface ProductBundleDetailsFormProperties {

		/** The entitlement mode of the bundle product. */
		entitlementMode: FormControl<ProductBundleDetailsEntitlementMode | null | undefined>,
	}
	export function CreateProductBundleDetailsFormGroup() {
		return new FormGroup<ProductBundleDetailsFormProperties>({
			entitlementMode: new FormControl<ProductBundleDetailsEntitlementMode | null | undefined>(undefined),
		});

	}


	/** The individual product that is included in the bundle. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1ProductBundleDetailsBundleElement {

		/** Required. Output only. Product resource name that identifies the bundle element. The format is 'partners/{partner_id}/products/{product_id}'. */
		product?: string | null;
	}

	/** The individual product that is included in the bundle. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1ProductBundleDetailsBundleElementFormProperties {

		/** Required. Output only. Product resource name that identifies the bundle element. The format is 'partners/{partner_id}/products/{product_id}'. */
		product: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1ProductBundleDetailsBundleElementFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1ProductBundleDetailsBundleElementFormProperties>({
			product: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProductBundleDetailsEntitlementMode { ENTITLEMENT_MODE_UNSPECIFIED = 'ENTITLEMENT_MODE_UNSPECIFIED', ENTITLEMENT_MODE_FULL = 'ENTITLEMENT_MODE_FULL', ENTITLEMENT_MODE_INCREMENTAL = 'ENTITLEMENT_MODE_INCREMENTAL' }


	/** Configs the prices in an available region. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig {

		/** Describes the amount unit including the currency code. */
		amount?: GoogleCloudPaymentsResellerSubscriptionV1Amount;

		/** Output only. 2-letter ISO region code where the product is available in. Ex. "US". */
		regionCode?: string | null;
	}

	/** Configs the prices in an available region. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfigFormProperties {

		/** Output only. 2-letter ISO region code where the product is available in. Ex. "US". */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfigFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfigFormProperties>({
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudPaymentsResellerSubscriptionV1ProductProductType { PRODUCT_TYPE_UNSPECIFIED = 'PRODUCT_TYPE_UNSPECIFIED', PRODUCT_TYPE_SUBSCRIPTION = 'PRODUCT_TYPE_SUBSCRIPTION', PRODUCT_TYPE_BUNDLE_SUBSCRIPTION = 'PRODUCT_TYPE_BUNDLE_SUBSCRIPTION' }

	export interface GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The promotions for the specified partner. */
		promotions?: Array<GoogleCloudPaymentsResellerSubscriptionV1Promotion>;
	}
	export interface GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponseFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to revoke a cancellation request. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionRequest {
	}

	/** Request to revoke a cancellation request. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionRequestFormProperties {
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionRequestFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionRequestFormProperties>({
		});

	}


	/** Response that contains the updated subscription resource. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse {

		/** A Subscription resource managed by 3P Partners. */
		subscription?: GoogleCloudPaymentsResellerSubscriptionV1Subscription;
	}

	/** Response that contains the updated subscription resource. */
	export interface GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponseFormProperties {
	}
	export function CreateGoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponseFormGroup() {
		return new FormGroup<GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Used by partners to get a subscription by id. It should be called directly by the partner using service accounts.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the subscription resource to retrieve. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}"
		 * @return {GoogleCloudPaymentsResellerSubscriptionV1Subscription} Successful response
		 */
		Paymentsresellersubscription_partners_subscriptions_get(name: string): Observable<GoogleCloudPaymentsResellerSubscriptionV1Subscription> {
			return this.http.get<GoogleCloudPaymentsResellerSubscriptionV1Subscription>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Used by partners to cancel a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.
		 * Post v1/{name}:cancel
		 * @param {string} name Required. The name of the subscription resource to be cancelled. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}"
		 * @return {GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse} Successful response
		 */
		Paymentsresellersubscription_partners_subscriptions_cancel(name: string, requestBody: GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest): Observable<GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse> {
			return this.http.post<GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Used by partners to entitle a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.
		 * Post v1/{name}:entitle
		 * @param {string} name Required. The name of the subscription resource that is entitled to the current end user. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}"
		 * @return {GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse} Successful response
		 */
		Paymentsresellersubscription_partners_subscriptions_entitle(name: string, requestBody: GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest): Observable<GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse> {
			return this.http.post<GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':entitle', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * [Opt-in only] Most partners should be on auto-extend by default. Used by partners to extend a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.
		 * Post v1/{name}:extend
		 * @param {string} name Required. The name of the subscription resource to be extended. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}".
		 * @return {GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse} Successful response
		 */
		Paymentsresellersubscription_partners_subscriptions_extend(name: string, requestBody: GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest): Observable<GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse> {
			return this.http.post<GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':extend', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Used by partners to revoke the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.
		 * Post v1/{name}:undoCancel
		 * @param {string} name Required. The name of the subscription resource whose pending cancellation needs to be undone. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}"
		 * @return {GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse} Successful response
		 */
		Paymentsresellersubscription_partners_subscriptions_undoCancel(name: string, requestBody: GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionRequest): Observable<GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse> {
			return this.http.post<GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':undoCancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * To retrieve the products that can be resold by the partner. It should be autenticated with a service account.
		 * Get v1/{parent}/products
		 * @param {string} parent Required. The parent, the partner that can resell. Format: partners/{partner}
		 * @param {string} filter Optional. Specifies the filters for the product results. The syntax is defined in https://google.aip.dev/160 with the following caveats: - Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) - Only the following fields are supported: - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` - Unless explicitly mentioned above, other features are not supported. Example: `regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id`
		 * @param {number} pageSize Optional. The maximum number of products to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A page token, received from a previous `ListProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProducts` must match the call that provided the page token.
		 * @return {GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse} Successful response
		 */
		Paymentsresellersubscription_partners_products_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse> {
			return this.http.get<GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/products&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * To retrieve the promotions, such as free trial, that can be used by the partner. It should be autenticated with a service account.
		 * Get v1/{parent}/promotions
		 * @param {string} parent Required. The parent, the partner that can resell. Format: partners/{partner}
		 * @param {string} filter Optional. Specifies the filters for the promotion results. The syntax is defined in https://google.aip.dev/160 with the following caveats: - Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) - Only the following fields are supported: - `applicableProducts` - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` - Unless explicitly mentioned above, other features are not supported. Example: `applicableProducts:partners/partner1/products/product1 AND regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id`
		 * @param {number} pageSize Optional. The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A page token, received from a previous `ListPromotions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotions` must match the call that provided the page token.
		 * @return {GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse} Successful response
		 */
		Paymentsresellersubscription_partners_promotions_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse> {
			return this.http.get<GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/promotions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * To find eligible promotions for the current user. The API requires user authorization via OAuth. The bare minimum oauth scope `openid` is sufficient, which will skip the consent screen.
		 * Post v1/{parent}/promotions:findEligible
		 * @param {string} parent Required. The parent, the partner that can resell. Format: partners/{partner}
		 * @return {GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse} Successful response
		 */
		Paymentsresellersubscription_partners_promotions_findEligible(parent: string, requestBody: GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest): Observable<GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse> {
			return this.http.post<GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/promotions:findEligible', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.
		 * Post v1/{parent}/subscriptions
		 * @param {string} parent Required. The parent resource name, which is the identifier of the partner. It will have the format of "partners/{partner_id}".
		 * @param {string} subscriptionId Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription was previously created with the same subscription_id, we will directly return that one.
		 * @return {GoogleCloudPaymentsResellerSubscriptionV1Subscription} Successful response
		 */
		Paymentsresellersubscription_partners_subscriptions_create(parent: string, subscriptionId: string | null | undefined, requestBody: GoogleCloudPaymentsResellerSubscriptionV1Subscription): Observable<GoogleCloudPaymentsResellerSubscriptionV1Subscription> {
			return this.http.post<GoogleCloudPaymentsResellerSubscriptionV1Subscription>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/subscriptions&subscriptionId=' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.
		 * Post v1/{parent}/subscriptions:provision
		 * @param {string} parent Required. The parent resource name, which is the identifier of the partner. It will have the format of "partners/{partner_id}".
		 * @param {string} subscriptionId Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription was previously created with the same subscription_id, we will directly return that one.
		 * @return {GoogleCloudPaymentsResellerSubscriptionV1Subscription} Successful response
		 */
		Paymentsresellersubscription_partners_subscriptions_provision(parent: string, subscriptionId: string | null | undefined, requestBody: GoogleCloudPaymentsResellerSubscriptionV1Subscription): Observable<GoogleCloudPaymentsResellerSubscriptionV1Subscription> {
			return this.http.post<GoogleCloudPaymentsResellerSubscriptionV1Subscription>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/subscriptions:provision&subscriptionId=' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

