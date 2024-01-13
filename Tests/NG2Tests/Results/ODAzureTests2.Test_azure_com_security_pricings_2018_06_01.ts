import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Azure Security Center is provided in two pricing tiers: free and standard, with the standard tier available with a trial period. The standard tier offers advanced security capabilities, while the free tier offers basic security features. */
	export interface Pricing {

		/** Pricing properties for the relevant scope */
		properties?: PricingProperties;
	}

	/** Azure Security Center is provided in two pricing tiers: free and standard, with the standard tier available with a trial period. The standard tier offers advanced security capabilities, while the free tier offers basic security features. */
	export interface PricingFormProperties {
	}
	export function CreatePricingFormGroup() {
		return new FormGroup<PricingFormProperties>({
		});

	}


	/** Pricing properties for the relevant scope */
	export interface PricingProperties {

		/** The duration left for the subscriptions free trial period - in ISO 8601 format (e.g. P3Y6M4DT12H30M5S). */
		freeTrialRemainingTime?: string | null;

		/**
		 * The pricing tier value. Azure Security Center is provided in two pricing tiers: free and standard, with the standard tier available with a trial period. The standard tier offers advanced security capabilities, while the free tier offers basic security features.
		 * Required
		 */
		pricingTier: PricingPropertiesPricingTier;
	}

	/** Pricing properties for the relevant scope */
	export interface PricingPropertiesFormProperties {

		/** The duration left for the subscriptions free trial period - in ISO 8601 format (e.g. P3Y6M4DT12H30M5S). */
		freeTrialRemainingTime: FormControl<string | null | undefined>,

		/**
		 * The pricing tier value. Azure Security Center is provided in two pricing tiers: free and standard, with the standard tier available with a trial period. The standard tier offers advanced security capabilities, while the free tier offers basic security features.
		 * Required
		 */
		pricingTier: FormControl<PricingPropertiesPricingTier | null | undefined>,
	}
	export function CreatePricingPropertiesFormGroup() {
		return new FormGroup<PricingPropertiesFormProperties>({
			freeTrialRemainingTime: new FormControl<string | null | undefined>(undefined),
			pricingTier: new FormControl<PricingPropertiesPricingTier | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PricingPropertiesPricingTier { Free = 0, Standard = 1 }


	/** List of pricing configurations response. */
	export interface PricingList {

		/**
		 * List of pricing configurations
		 * Required
		 */
		value: Array<Pricing>;
	}

	/** List of pricing configurations response. */
	export interface PricingListFormProperties {
	}
	export function CreatePricingListFormGroup() {
		return new FormGroup<PricingListFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists Security Center pricing configurations in the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/pricings
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @return {PricingList} OK
		 */
		Pricings_List(api_version: string, subscriptionId: string): Observable<PricingList> {
			return this.http.get<PricingList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/pricings?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a provided Security Center pricing configuration in the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/pricings/{pricingName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} pricingName name of the pricing configuration
		 * @return {Pricing} OK
		 */
		Pricings_Get(api_version: string, subscriptionId: string, pricingName: string): Observable<Pricing> {
			return this.http.get<Pricing>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/pricings/' + (pricingName == null ? '' : encodeURIComponent(pricingName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates a provided Security Center pricing configuration in the subscription.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Security/pricings/{pricingName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} pricingName name of the pricing configuration
		 * @param {Pricing} requestBody Pricing object
		 * @return {Pricing} OK
		 */
		Pricings_Update(api_version: string, subscriptionId: string, pricingName: string, requestBody: Pricing): Observable<Pricing> {
			return this.http.put<Pricing>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/pricings/' + (pricingName == null ? '' : encodeURIComponent(pricingName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

