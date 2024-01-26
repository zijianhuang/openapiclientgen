import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CountryObject {

		/** Readable country name. */
		countryDisplayName?: string | null;

		/** Readable country name. */
		countryName?: string | null;

		/** The currency that your account is being billed in (by default `Euros—EUR`). Can change in the Dashboard to US Dollars—USD. */
		currency?: string | null;

		/** The default price. */
		defaultPrice?: string | null;

		/** The dialling prefix. */
		dialingPrefix?: string | null;

		/** An array of network objects */
		networks?: Array<NetworkObject>;
	}
	export interface CountryObjectFormProperties {

		/** Readable country name. */
		countryDisplayName: FormControl<string | null | undefined>,

		/** Readable country name. */
		countryName: FormControl<string | null | undefined>,

		/** The currency that your account is being billed in (by default `Euros—EUR`). Can change in the Dashboard to US Dollars—USD. */
		currency: FormControl<string | null | undefined>,

		/** The default price. */
		defaultPrice: FormControl<string | null | undefined>,

		/** The dialling prefix. */
		dialingPrefix: FormControl<string | null | undefined>,
	}
	export function CreateCountryObjectFormGroup() {
		return new FormGroup<CountryObjectFormProperties>({
			countryDisplayName: new FormControl<string | null | undefined>(undefined),
			countryName: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			defaultPrice: new FormControl<string | null | undefined>(undefined),
			dialingPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetworkObject {

		/** The currency used for prices for this network. */
		currency?: string | null;

		/** The [Mobile Country Code](https://en.wikipedia.org/wiki/Mobile_country_code) of the operator. */
		mcc?: string | null;

		/** The Mobile Network Code of the operator. */
		mnc?: string | null;

		/** The Mobile Country Code and Mobile Network Code combined to give a unique reference for the operator. */
		networkCode?: string | null;

		/** The company/organisational name of the operator. */
		networkName?: string | null;

		/** The cost to send a message or make a call to this network */
		price?: string | null;

		/** The type of network: mobile or landline. */
		type?: string | null;
	}
	export interface NetworkObjectFormProperties {

		/** The currency used for prices for this network. */
		currency: FormControl<string | null | undefined>,

		/** The [Mobile Country Code](https://en.wikipedia.org/wiki/Mobile_country_code) of the operator. */
		mcc: FormControl<string | null | undefined>,

		/** The Mobile Network Code of the operator. */
		mnc: FormControl<string | null | undefined>,

		/** The Mobile Country Code and Mobile Network Code combined to give a unique reference for the operator. */
		networkCode: FormControl<string | null | undefined>,

		/** The company/organisational name of the operator. */
		networkName: FormControl<string | null | undefined>,

		/** The cost to send a message or make a call to this network */
		price: FormControl<string | null | undefined>,

		/** The type of network: mobile or landline. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNetworkObjectFormGroup() {
		return new FormGroup<NetworkObjectFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
			mcc: new FormControl<string | null | undefined>(undefined),
			mnc: new FormControl<string | null | undefined>(undefined),
			networkCode: new FormControl<string | null | undefined>(undefined),
			networkName: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PricingCountriesResponse {

		/** The number of countries retrieved. */
		count?: string | null;

		/** A list of countries. */
		countries?: Array<CountryObject>;
	}
	export interface PricingCountriesResponseFormProperties {

		/** The number of countries retrieved. */
		count: FormControl<string | null | undefined>,
	}
	export function CreatePricingCountriesResponseFormGroup() {
		return new FormGroup<PricingCountriesResponseFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PricingCountryResponse {

		/** Two letter country code. */
		countryCode?: string | null;

		/** Readable country name. */
		countryDisplayName?: string | null;

		/** Readable country name. */
		countryName?: string | null;

		/** The currency that your account is being billed in (by default `Euros—EUR`). Can change in the Dashboard to US Dollars—USD. */
		currency?: string | null;

		/** The default price. */
		defaultPrice?: string | null;

		/** The dialling prefix. */
		dialingPrefix?: string | null;

		/** An array of network objects */
		networks?: Array<NetworkObject>;
	}
	export interface PricingCountryResponseFormProperties {

		/** Two letter country code. */
		countryCode: FormControl<string | null | undefined>,

		/** Readable country name. */
		countryDisplayName: FormControl<string | null | undefined>,

		/** Readable country name. */
		countryName: FormControl<string | null | undefined>,

		/** The currency that your account is being billed in (by default `Euros—EUR`). Can change in the Dashboard to US Dollars—USD. */
		currency: FormControl<string | null | undefined>,

		/** The default price. */
		defaultPrice: FormControl<string | null | undefined>,

		/** The dialling prefix. */
		dialingPrefix: FormControl<string | null | undefined>,
	}
	export function CreatePricingCountryResponseFormGroup() {
		return new FormGroup<PricingCountryResponseFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined),
			countryDisplayName: new FormControl<string | null | undefined>(undefined),
			countryName: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			defaultPrice: new FormControl<string | null | undefined>(undefined),
			dialingPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve outbound pricing for all countries.
		 * Retrieves the pricing information for all countries.
		 * Get get-full-pricing/outbound/{type}
		 * @param {string} type The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.
		 * @param {string} api_key Your Nexmo API key.
		 * @param {string} api_secret Your Nexmo API secret.
		 * @return {PricingCountriesResponse} Pricing response
		 */
		RetrievePricingAllCountries(type: string, api_key: string, api_secret: string): Observable<PricingCountriesResponse> {
			return this.http.get<PricingCountriesResponse>(this.baseUri + 'get-full-pricing/outbound/' + (type == null ? '' : encodeURIComponent(type)) + '&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&api_secret=' + (api_secret == null ? '' : encodeURIComponent(api_secret)), {});
		}

		/**
		 * Retrieve outbound pricing for a specific dialing prefix.
		 * Retrieves the pricing information based on the dialing prefix.
		 * Get get-prefix-pricing/outbound/{type}
		 * @param {string} type The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.
		 * @param {string} api_key Your Nexmo API key.
		 * @param {string} api_secret Your Nexmo API secret.
		 * @param {string} prefix The numerical dialing prefix to look up pricing for. Examples include 44, 1 and so on.
		 * @return {PricingCountriesResponse} Pricing countries response
		 */
		RetrievePrefixPricing(type: string, api_key: string, api_secret: string, prefix: string): Observable<PricingCountriesResponse> {
			return this.http.get<PricingCountriesResponse>(this.baseUri + 'get-prefix-pricing/outbound/' + (type == null ? '' : encodeURIComponent(type)) + '&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&api_secret=' + (api_secret == null ? '' : encodeURIComponent(api_secret)) + '&prefix=' + (prefix == null ? '' : encodeURIComponent(prefix)), {});
		}

		/**
		 * Retrieve outbound pricing for a specific country.
		 * Retrieves the pricing information based on the specified country.
		 * Get get-pricing/outbound/{type}
		 * @param {string} type The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.
		 * @param {string} api_key Your Nexmo API key.
		 * @param {string} api_secret Your Nexmo API secret.
		 * @param {string} country A two letter [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). For example, `CA`.
		 * @return {PricingCountryResponse} Pricing information for a specific country.
		 */
		RetrievePricingCountry(type: string, api_key: string, api_secret: string, country: string): Observable<PricingCountryResponse> {
			return this.http.get<PricingCountryResponse>(this.baseUri + 'get-pricing/outbound/' + (type == null ? '' : encodeURIComponent(type)) + '&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&api_secret=' + (api_secret == null ? '' : encodeURIComponent(api_secret)) + '&country=' + (country == null ? '' : encodeURIComponent(country)), {});
		}
	}

}

