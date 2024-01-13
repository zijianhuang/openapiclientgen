import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents an offering of services against which a subscription can be created. */
	export interface Offer {

		/** Description of offer. */
		description?: string | null;

		/** Display name of offer. */
		displayName?: string | null;

		/** The offer ID */
		id?: string | null;

		/** The name of the offer. */
		name?: string | null;
	}

	/** Represents an offering of services against which a subscription can be created. */
	export interface OfferFormProperties {

		/** Description of offer. */
		description: FormControl<string | null | undefined>,

		/** Display name of offer. */
		displayName: FormControl<string | null | undefined>,

		/** The offer ID */
		id: FormControl<string | null | undefined>,

		/** The name of the offer. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOfferFormGroup() {
		return new FormGroup<OfferFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of public offers. */
	export interface OfferList {

		/** URI to next page. */
		nextLink?: string | null;

		/** List of public offers. */
		value?: Array<Offer>;
	}

	/** List of public offers. */
	export interface OfferListFormProperties {

		/** URI to next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOfferListFormGroup() {
		return new FormGroup<OfferListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get the list of offers for the specified delegated provider.
		 * Get delegatedProviders/{delegatedProviderId}/offers
		 * @param {string} delegatedProviderId Id of the delegated provider.
		 * @param {string} api_version Client Api Version.
		 * @return {OfferList} OK
		 */
		DelegatedProviderOffers_List(delegatedProviderId: string, api_version: string): Observable<OfferList> {
			return this.http.get<OfferList>(this.baseUri + 'delegatedProviders/' + (delegatedProviderId == null ? '' : encodeURIComponent(delegatedProviderId)) + '/offers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the specified offer for the delegated provider.
		 * Get delegatedProviders/{delegatedProviderId}/offers/{offerName}
		 * @param {string} delegatedProviderId Id of the delegated provider.
		 * @param {string} offerName Name of the offer.
		 * @param {string} api_version Client Api Version.
		 * @return {Offer} OK
		 */
		DelegatedProviderOffers_Get(delegatedProviderId: string, offerName: string, api_version: string): Observable<Offer> {
			return this.http.get<Offer>(this.baseUri + 'delegatedProviders/' + (delegatedProviderId == null ? '' : encodeURIComponent(delegatedProviderId)) + '/offers/' + (offerName == null ? '' : encodeURIComponent(offerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the list of public offers for the root provider.
		 * Get offers
		 * @param {string} api_version Client Api Version.
		 * @return {OfferList} OK
		 */
		Offers_List(api_version: string): Observable<OfferList> {
			return this.http.get<OfferList>(this.baseUri + 'offers?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

