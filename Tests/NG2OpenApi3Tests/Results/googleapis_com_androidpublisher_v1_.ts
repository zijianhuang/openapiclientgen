import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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

