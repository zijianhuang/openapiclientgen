import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the state of the offer */
	export enum AccessibilityState { Private = 'Private', Public = 'Public', Decommissioned = 'Decommissioned' }


	/** The delegated provider offer. */
	export interface DelegatedProviderOffer {

		/** Properties for an delegated provider. */
		properties?: DelegatedProviderOfferProperties;
	}

	/** The delegated provider offer. */
	export interface DelegatedProviderOfferFormProperties {
	}
	export function CreateDelegatedProviderOfferFormGroup() {
		return new FormGroup<DelegatedProviderOfferFormProperties>({
		});

	}


	/** Properties for an delegated provider. */
	export interface DelegatedProviderOfferProperties {

		/** Represents the state of the offer */
		accessibilityState?: AccessibilityState | null;

		/** The delegated offer identifier. */
		delegatedOfferId?: string | null;

		/** Description of offer. */
		description?: string | null;

		/** Display name of offer. */
		displayName?: string | null;

		/** External reference identifier. */
		externalReferenceId?: string | null;

		/**
		 * Current subscription count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subscriptionCount?: number | null;
	}

	/** Properties for an delegated provider. */
	export interface DelegatedProviderOfferPropertiesFormProperties {

		/** Represents the state of the offer */
		accessibilityState: FormControl<AccessibilityState | null | undefined>,

		/** The delegated offer identifier. */
		delegatedOfferId: FormControl<string | null | undefined>,

		/** Description of offer. */
		description: FormControl<string | null | undefined>,

		/** Display name of offer. */
		displayName: FormControl<string | null | undefined>,

		/** External reference identifier. */
		externalReferenceId: FormControl<string | null | undefined>,

		/**
		 * Current subscription count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subscriptionCount: FormControl<number | null | undefined>,
	}
	export function CreateDelegatedProviderOfferPropertiesFormGroup() {
		return new FormGroup<DelegatedProviderOfferPropertiesFormProperties>({
			accessibilityState: new FormControl<AccessibilityState | null | undefined>(undefined),
			delegatedOfferId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			externalReferenceId: new FormControl<string | null | undefined>(undefined),
			subscriptionCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List of delegated provider offers. */
	export interface DelegatedProviderOfferList {

		/** Continuation token */
		nextLink?: string | null;

		/** Array of delegated provider offers. */
		value?: Array<DelegatedProviderOffer>;
	}

	/** List of delegated provider offers. */
	export interface DelegatedProviderOfferListFormProperties {

		/** Continuation token */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDelegatedProviderOfferListFormGroup() {
		return new FormGroup<DelegatedProviderOfferListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get the list of delegated provider offers.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/delegatedProviders/{delegatedProviderSubscriptionId}/offers
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
		 * @param {string} delegatedProviderSubscriptionId Delegated provider subscription identifier.
		 * @param {string} api_version Client Api Version.
		 * @return {DelegatedProviderOfferList} OK
		 */
		DelegatedProviderOffers_List(subscriptionId: string, delegatedProviderSubscriptionId: string, api_version: string): Observable<DelegatedProviderOfferList> {
			return this.http.get<DelegatedProviderOfferList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Subscriptions.Admin/delegatedProviders/' + (delegatedProviderSubscriptionId == null ? '' : encodeURIComponent(delegatedProviderSubscriptionId)) + '/offers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the specified delegated provider offer.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/delegatedProviders/{delegatedProviderSubscriptionId}/offers/{offer}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
		 * @param {string} delegatedProviderSubscriptionId Delegated provider subscription identifier.
		 * @param {string} offer Name of an offer.
		 * @param {string} api_version Client Api Version.
		 * @return {DelegatedProviderOffer} OK
		 */
		DelegatedProviderOffers_Get(subscriptionId: string, delegatedProviderSubscriptionId: string, offer: string, api_version: string): Observable<DelegatedProviderOffer> {
			return this.http.get<DelegatedProviderOffer>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Subscriptions.Admin/delegatedProviders/' + (delegatedProviderSubscriptionId == null ? '' : encodeURIComponent(delegatedProviderSubscriptionId)) + '/offers/' + (offer == null ? '' : encodeURIComponent(offer)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

