import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An InappPurchase resource indicates the status of a user's inapp product purchase. */
	export interface InappPurchase {

		/**
		 * The consumption state of the inapp product. Possible values are:
		 * - Yet to be consumed
		 * - Consumed
		 */
		consumptionState?: number | null;

		/** A developer-specified string that contains supplemental information about an order. */
		developerPayload?: string | null;

		/** This kind represents an inappPurchase object in the androidpublisher service. */
		kind?: string | null;

		/** The order id associated with the purchase of the inapp product. */
		orderId?: string | null;

		/**
		 * The purchase state of the order. Possible values are:
		 * - Purchased
		 * - Canceled
		 * - Pending
		 */
		purchaseState?: number | null;

		/** The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970). */
		purchaseTime?: string | null;

		/**
		 * The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are:
		 * - Test (i.e. purchased from a license testing account)
		 * - Promo (i.e. purchased using a promo code)
		 * - Rewarded (i.e. from watching a video ad instead of paying)
		 */
		purchaseType?: number | null;
	}

	/** An InappPurchase resource indicates the status of a user's inapp product purchase. */
	export interface InappPurchaseFormProperties {

		/**
		 * The consumption state of the inapp product. Possible values are:
		 * - Yet to be consumed
		 * - Consumed
		 */
		consumptionState: FormControl<number | null | undefined>,

		/** A developer-specified string that contains supplemental information about an order. */
		developerPayload: FormControl<string | null | undefined>,

		/** This kind represents an inappPurchase object in the androidpublisher service. */
		kind: FormControl<string | null | undefined>,

		/** The order id associated with the purchase of the inapp product. */
		orderId: FormControl<string | null | undefined>,

		/**
		 * The purchase state of the order. Possible values are:
		 * - Purchased
		 * - Canceled
		 * - Pending
		 */
		purchaseState: FormControl<number | null | undefined>,

		/** The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970). */
		purchaseTime: FormControl<string | null | undefined>,

		/**
		 * The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are:
		 * - Test (i.e. purchased from a license testing account)
		 * - Promo (i.e. purchased using a promo code)
		 * - Rewarded (i.e. from watching a video ad instead of paying)
		 */
		purchaseType: FormControl<number | null | undefined>,
	}
	export function CreateInappPurchaseFormGroup() {
		return new FormGroup<InappPurchaseFormProperties>({
			consumptionState: new FormControl<number | null | undefined>(undefined),
			developerPayload: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			purchaseState: new FormControl<number | null | undefined>(undefined),
			purchaseTime: new FormControl<string | null | undefined>(undefined),
			purchaseType: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A SubscriptionPurchase resource indicates the status of a user's subscription purchase. */
	export interface SubscriptionPurchase {

		/** Whether the subscription will automatically be renewed when it reaches its current expiry time. */
		autoRenewing?: boolean | null;

		/** Time at which the subscription was granted, in milliseconds since the Epoch. */
		initiationTimestampMsec?: string | null;

		/** This kind represents a subscriptionPurchase object in the androidpublisher service. */
		kind?: string | null;

		/** Time at which the subscription will expire, in milliseconds since the Epoch. */
		validUntilTimestampMsec?: string | null;
	}

	/** A SubscriptionPurchase resource indicates the status of a user's subscription purchase. */
	export interface SubscriptionPurchaseFormProperties {

		/** Whether the subscription will automatically be renewed when it reaches its current expiry time. */
		autoRenewing: FormControl<boolean | null | undefined>,

		/** Time at which the subscription was granted, in milliseconds since the Epoch. */
		initiationTimestampMsec: FormControl<string | null | undefined>,

		/** This kind represents a subscriptionPurchase object in the androidpublisher service. */
		kind: FormControl<string | null | undefined>,

		/** Time at which the subscription will expire, in milliseconds since the Epoch. */
		validUntilTimestampMsec: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionPurchaseFormGroup() {
		return new FormGroup<SubscriptionPurchaseFormProperties>({
			autoRenewing: new FormControl<boolean | null | undefined>(undefined),
			initiationTimestampMsec: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			validUntilTimestampMsec: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Checks the purchase and consumption status of an inapp item.
		 * Get {packageName}/inapp/{productId}/purchases/{token}
		 * @param {string} packageName The package name of the application the inapp product was sold in (for example, 'com.some.thing').
		 * @param {string} productId The inapp product SKU (for example, 'com.some.thing.inapp1').
		 * @param {string} token The token provided to the user's device when the inapp product was purchased.
		 * @return {void} Successful response
		 */
		Androidpublisher_inapppurchases_get(packageName: string, productId: string, token: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/inapp/' + (productId == null ? '' : encodeURIComponent(productId)) + '/purchases/' + (token == null ? '' : encodeURIComponent(token)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Checks whether a user's subscription purchase is valid and returns its expiry time.
		 * Get {packageName}/subscriptions/{subscriptionId}/purchases/{token}
		 * @param {string} packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
		 * @param {string} subscriptionId The purchased subscription ID (for example, 'monthly001').
		 * @param {string} token The token provided to the user's device when the subscription was purchased.
		 * @return {void} Successful response
		 */
		Androidpublisher_purchases_get(packageName: string, subscriptionId: string, token: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/purchases/' + (token == null ? '' : encodeURIComponent(token)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
		 * Post {packageName}/subscriptions/{subscriptionId}/purchases/{token}/cancel
		 * @param {string} packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
		 * @param {string} subscriptionId The purchased subscription ID (for example, 'monthly001').
		 * @param {string} token The token provided to the user's device when the subscription was purchased.
		 * @return {void} Successful response
		 */
		Androidpublisher_purchases_cancel(packageName: string, subscriptionId: string, token: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (packageName == null ? '' : encodeURIComponent(packageName)) + '/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/purchases/' + (token == null ? '' : encodeURIComponent(token)) + '/cancel', null, { observe: 'response', responseType: 'text' });
		}
	}

}

