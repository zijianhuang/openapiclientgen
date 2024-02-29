import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Pricingv2trunking_country {

		/** The name of the country. */
		country?: string | null;

		/** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Pricingv2trunking_countryFormProperties {

		/** The name of the country. */
		country: FormControl<string | null | undefined>,

		/** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePricingv2trunking_countryFormGroup() {
		return new FormGroup<Pricingv2trunking_countryFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv2trunking_country_instance {

		/** The name of the country. */
		country?: string | null;

		/** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country?: string | null;

		/** The list of [OriginatingCallPrice](https://www.twilio.com/docs/voice/pricing#inbound-call-price) records. */
		Pricingv2trunking_country_instanceOriginating_call_prices?: Array<Pricingv2trunking_country_instanceOriginating_call_prices>;

		/** The currency in which prices are measured, specified in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`). */
		price_unit?: string | null;

		/** The list of [TerminatingPrefixPrice](https://www.twilio.com/docs/voice/pricing#outbound-prefix-price-with-origin) records. */
		Pricingv2trunking_country_instanceTerminating_prefix_prices?: Array<Pricingv2trunking_country_instanceTerminating_prefix_prices>;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Pricingv2trunking_country_instanceFormProperties {

		/** The name of the country. */
		country: FormControl<string | null | undefined>,

		/** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country: FormControl<string | null | undefined>,

		/** The currency in which prices are measured, specified in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`). */
		price_unit: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePricingv2trunking_country_instanceFormGroup() {
		return new FormGroup<Pricingv2trunking_country_instanceFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			price_unit: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv2trunking_country_instanceOriginating_call_prices {

		/** Type: double */
		base_price?: number | null;

		/** Type: double */
		current_price?: number | null;
		number_type?: string | null;
	}
	export interface Pricingv2trunking_country_instanceOriginating_call_pricesFormProperties {

		/** Type: double */
		base_price: FormControl<number | null | undefined>,

		/** Type: double */
		current_price: FormControl<number | null | undefined>,
		number_type: FormControl<string | null | undefined>,
	}
	export function CreatePricingv2trunking_country_instanceOriginating_call_pricesFormGroup() {
		return new FormGroup<Pricingv2trunking_country_instanceOriginating_call_pricesFormProperties>({
			base_price: new FormControl<number | null | undefined>(undefined),
			current_price: new FormControl<number | null | undefined>(undefined),
			number_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv2trunking_country_instanceTerminating_prefix_prices {

		/** Type: double */
		base_price?: number | null;

		/** Type: double */
		current_price?: number | null;
		destination_prefixes?: Array<string>;
		friendly_name?: string | null;
		origination_prefixes?: Array<string>;
	}
	export interface Pricingv2trunking_country_instanceTerminating_prefix_pricesFormProperties {

		/** Type: double */
		base_price: FormControl<number | null | undefined>,

		/** Type: double */
		current_price: FormControl<number | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
	}
	export function CreatePricingv2trunking_country_instanceTerminating_prefix_pricesFormGroup() {
		return new FormGroup<Pricingv2trunking_country_instanceTerminating_prefix_pricesFormProperties>({
			base_price: new FormControl<number | null | undefined>(undefined),
			current_price: new FormControl<number | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv2trunking_number {

		/** The name of the country. */
		country?: string | null;

		/** The destination phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number. */
		destination_number?: string | null;

		/** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) */
		iso_country?: string | null;

		/** The [OriginatingCallPrice](https://www.twilio.com/docs/voice/pricing#inbound-call-price) record. */
		originating_call_price?: Pricingv2trunking_numberOriginating_call_price;

		/** The origination phone number in [[E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number. */
		origination_number?: string | null;

		/** The currency in which prices are measured, specified in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`). */
		price_unit?: string | null;
		Pricingv2trunking_numberTerminating_prefix_prices?: Array<Pricingv2trunking_numberTerminating_prefix_prices>;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Pricingv2trunking_numberFormProperties {

		/** The name of the country. */
		country: FormControl<string | null | undefined>,

		/** The destination phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number. */
		destination_number: FormControl<string | null | undefined>,

		/** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) */
		iso_country: FormControl<string | null | undefined>,

		/** The origination phone number in [[E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number. */
		origination_number: FormControl<string | null | undefined>,

		/** The currency in which prices are measured, specified in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`). */
		price_unit: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePricingv2trunking_numberFormGroup() {
		return new FormGroup<Pricingv2trunking_numberFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			destination_number: new FormControl<string | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			origination_number: new FormControl<string | null | undefined>(undefined),
			price_unit: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv2trunking_numberOriginating_call_price {

		/** Type: double */
		base_price?: number | null;

		/** Type: double */
		current_price?: number | null;
		number_type?: string | null;
	}
	export interface Pricingv2trunking_numberOriginating_call_priceFormProperties {

		/** Type: double */
		base_price: FormControl<number | null | undefined>,

		/** Type: double */
		current_price: FormControl<number | null | undefined>,
		number_type: FormControl<string | null | undefined>,
	}
	export function CreatePricingv2trunking_numberOriginating_call_priceFormGroup() {
		return new FormGroup<Pricingv2trunking_numberOriginating_call_priceFormProperties>({
			base_price: new FormControl<number | null | undefined>(undefined),
			current_price: new FormControl<number | null | undefined>(undefined),
			number_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv2trunking_numberTerminating_prefix_prices {

		/** Type: double */
		base_price?: number | null;

		/** Type: double */
		current_price?: number | null;
		destination_prefixes?: Array<string>;
		friendly_name?: string | null;
		origination_prefixes?: Array<string>;
	}
	export interface Pricingv2trunking_numberTerminating_prefix_pricesFormProperties {

		/** Type: double */
		base_price: FormControl<number | null | undefined>,

		/** Type: double */
		current_price: FormControl<number | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
	}
	export function CreatePricingv2trunking_numberTerminating_prefix_pricesFormGroup() {
		return new FormGroup<Pricingv2trunking_numberTerminating_prefix_pricesFormProperties>({
			base_price: new FormControl<number | null | undefined>(undefined),
			current_price: new FormControl<number | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv2voice {

		/** The URLs of the related Countries and Numbers resources. */
		links?: string | null;

		/** The resource name. */
		name?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Pricingv2voiceFormProperties {

		/** The URLs of the related Countries and Numbers resources. */
		links: FormControl<string | null | undefined>,

		/** The resource name. */
		name: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePricingv2voiceFormGroup() {
		return new FormGroup<Pricingv2voiceFormProperties>({
			links: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv2voicevoice_country {

		/** The name of the country. */
		country?: string | null;

		/** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Pricingv2voicevoice_countryFormProperties {

		/** The name of the country. */
		country: FormControl<string | null | undefined>,

		/** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePricingv2voicevoice_countryFormGroup() {
		return new FormGroup<Pricingv2voicevoice_countryFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv2voicevoice_country_instance {

		/** The name of the country. */
		country?: string | null;

		/** The list of [InboundCallPrice](https://www.twilio.com/docs/voice/pricing#inbound-call-price) records. */
		Pricingv2voicevoice_country_instanceInbound_call_prices?: Array<Pricingv2voicevoice_country_instanceInbound_call_prices>;

		/** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country?: string | null;

		/** The list of [OutboundPrefixPriceWithOrigin](https://www.twilio.com/docs/voice/pricing#outbound-prefix-price-with-origin) records. */
		Pricingv2voicevoice_country_instanceOutbound_prefix_prices?: Array<Pricingv2voicevoice_country_instanceOutbound_prefix_prices>;

		/** The currency in which prices are measured, specified in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`). */
		price_unit?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Pricingv2voicevoice_country_instanceFormProperties {

		/** The name of the country. */
		country: FormControl<string | null | undefined>,

		/** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country: FormControl<string | null | undefined>,

		/** The currency in which prices are measured, specified in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`). */
		price_unit: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePricingv2voicevoice_country_instanceFormGroup() {
		return new FormGroup<Pricingv2voicevoice_country_instanceFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			price_unit: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv2voicevoice_country_instanceInbound_call_prices {

		/** Type: double */
		base_price?: number | null;

		/** Type: double */
		current_price?: number | null;
		number_type?: string | null;
	}
	export interface Pricingv2voicevoice_country_instanceInbound_call_pricesFormProperties {

		/** Type: double */
		base_price: FormControl<number | null | undefined>,

		/** Type: double */
		current_price: FormControl<number | null | undefined>,
		number_type: FormControl<string | null | undefined>,
	}
	export function CreatePricingv2voicevoice_country_instanceInbound_call_pricesFormGroup() {
		return new FormGroup<Pricingv2voicevoice_country_instanceInbound_call_pricesFormProperties>({
			base_price: new FormControl<number | null | undefined>(undefined),
			current_price: new FormControl<number | null | undefined>(undefined),
			number_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv2voicevoice_country_instanceOutbound_prefix_prices {

		/** Type: double */
		base_price?: number | null;

		/** Type: double */
		current_price?: number | null;
		destination_prefixes?: Array<string>;
		friendly_name?: string | null;
		origination_prefixes?: Array<string>;
	}
	export interface Pricingv2voicevoice_country_instanceOutbound_prefix_pricesFormProperties {

		/** Type: double */
		base_price: FormControl<number | null | undefined>,

		/** Type: double */
		current_price: FormControl<number | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
	}
	export function CreatePricingv2voicevoice_country_instanceOutbound_prefix_pricesFormGroup() {
		return new FormGroup<Pricingv2voicevoice_country_instanceOutbound_prefix_pricesFormProperties>({
			base_price: new FormControl<number | null | undefined>(undefined),
			current_price: new FormControl<number | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv2voicevoice_number {

		/** The name of the country. */
		country?: string | null;

		/** The destination phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number. */
		destination_number?: string | null;

		/** The [InboundCallPrice](https://www.twilio.com/docs/voice/pricing#inbound-call-price) record. */
		inbound_call_price?: Pricingv2voicevoice_numberInbound_call_price;

		/** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) */
		iso_country?: string | null;

		/** The origination phone number in [[E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number. */
		origination_number?: string | null;

		/** The list of [OutboundCallPriceWithOrigin](https://www.twilio.com/docs/voice/pricing#outbound-call-price-with-origin) records. */
		Pricingv2voicevoice_numberOutbound_call_prices?: Array<Pricingv2voicevoice_numberOutbound_call_prices>;

		/** The currency in which prices are measured, specified in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`). */
		price_unit?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Pricingv2voicevoice_numberFormProperties {

		/** The name of the country. */
		country: FormControl<string | null | undefined>,

		/** The destination phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number. */
		destination_number: FormControl<string | null | undefined>,

		/** The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) */
		iso_country: FormControl<string | null | undefined>,

		/** The origination phone number in [[E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number. */
		origination_number: FormControl<string | null | undefined>,

		/** The currency in which prices are measured, specified in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`). */
		price_unit: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePricingv2voicevoice_numberFormGroup() {
		return new FormGroup<Pricingv2voicevoice_numberFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			destination_number: new FormControl<string | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			origination_number: new FormControl<string | null | undefined>(undefined),
			price_unit: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv2voicevoice_numberInbound_call_price {

		/** Type: double */
		base_price?: number | null;

		/** Type: double */
		current_price?: number | null;
		number_type?: string | null;
	}
	export interface Pricingv2voicevoice_numberInbound_call_priceFormProperties {

		/** Type: double */
		base_price: FormControl<number | null | undefined>,

		/** Type: double */
		current_price: FormControl<number | null | undefined>,
		number_type: FormControl<string | null | undefined>,
	}
	export function CreatePricingv2voicevoice_numberInbound_call_priceFormGroup() {
		return new FormGroup<Pricingv2voicevoice_numberInbound_call_priceFormProperties>({
			base_price: new FormControl<number | null | undefined>(undefined),
			current_price: new FormControl<number | null | undefined>(undefined),
			number_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv2voicevoice_numberOutbound_call_prices {

		/** Type: double */
		base_price?: number | null;

		/** Type: double */
		current_price?: number | null;
		origination_prefixes?: Array<string>;
	}
	export interface Pricingv2voicevoice_numberOutbound_call_pricesFormProperties {

		/** Type: double */
		base_price: FormControl<number | null | undefined>,

		/** Type: double */
		current_price: FormControl<number | null | undefined>,
	}
	export function CreatePricingv2voicevoice_numberOutbound_call_pricesFormGroup() {
		return new FormGroup<Pricingv2voicevoice_numberOutbound_call_pricesFormProperties>({
			base_price: new FormControl<number | null | undefined>(undefined),
			current_price: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get v2/Trunking/Countries
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListTrunkingCountryReturn} OK
		 */
		ListTrunkingCountry(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListTrunkingCountryReturn> {
			return this.http.get<ListTrunkingCountryReturn>(this.baseUri + 'v2/Trunking/Countries?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Fetch a specific Country.
		 * Get v2/Trunking/Countries/{IsoCountry}
		 * @param {string} IsoCountry The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the origin-based voice pricing information to fetch.
		 * @return {Pricingv2trunking_country_instance} OK
		 */
		FetchTrunkingCountry(IsoCountry: string): Observable<Pricingv2trunking_country_instance> {
			return this.http.get<Pricingv2trunking_country_instance>(this.baseUri + 'v2/Trunking/Countries/' + (IsoCountry == null ? '' : encodeURIComponent(IsoCountry)), {});
		}

		/**
		 * Fetch pricing information for a specific destination and, optionally, origination phone number.
		 * Get v2/Trunking/Numbers/{DestinationNumber}
		 * @param {string} DestinationNumber The destination phone number, in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, for which to fetch the origin-based voice pricing information. E.164 format consists of a + followed by the country code and subscriber number.
		 * @param {string} OriginationNumber The origination phone number, in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, for which to fetch the origin-based voice pricing information. E.164 format consists of a + followed by the country code and subscriber number.
		 * @return {Pricingv2trunking_number} OK
		 */
		FetchTrunkingNumber(DestinationNumber: string, OriginationNumber: string | null | undefined): Observable<Pricingv2trunking_number> {
			return this.http.get<Pricingv2trunking_number>(this.baseUri + 'v2/Trunking/Numbers/' + (DestinationNumber == null ? '' : encodeURIComponent(DestinationNumber)) + '&OriginationNumber=' + (OriginationNumber == null ? '' : encodeURIComponent(OriginationNumber)), {});
		}

		/**
		 * Get v2/Voice/Countries
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListVoiceCountryReturn} OK
		 */
		ListVoiceCountry(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListVoiceCountryReturn> {
			return this.http.get<ListVoiceCountryReturn>(this.baseUri + 'v2/Voice/Countries?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Fetch a specific Country.
		 * Get v2/Voice/Countries/{IsoCountry}
		 * @param {string} IsoCountry The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the origin-based voice pricing information to fetch.
		 * @return {Pricingv2voicevoice_country_instance} OK
		 */
		FetchVoiceCountry(IsoCountry: string): Observable<Pricingv2voicevoice_country_instance> {
			return this.http.get<Pricingv2voicevoice_country_instance>(this.baseUri + 'v2/Voice/Countries/' + (IsoCountry == null ? '' : encodeURIComponent(IsoCountry)), {});
		}

		/**
		 * Fetch pricing information for a specific destination and, optionally, origination phone number.
		 * Get v2/Voice/Numbers/{DestinationNumber}
		 * @param {string} DestinationNumber The destination phone number, in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, for which to fetch the origin-based voice pricing information. E.164 format consists of a + followed by the country code and subscriber number.
		 * @param {string} OriginationNumber The origination phone number, in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, for which to fetch the origin-based voice pricing information. E.164 format consists of a + followed by the country code and subscriber number.
		 * @return {Pricingv2voicevoice_number} OK
		 */
		FetchVoiceNumber(DestinationNumber: string, OriginationNumber: string | null | undefined): Observable<Pricingv2voicevoice_number> {
			return this.http.get<Pricingv2voicevoice_number>(this.baseUri + 'v2/Voice/Numbers/' + (DestinationNumber == null ? '' : encodeURIComponent(DestinationNumber)) + '&OriginationNumber=' + (OriginationNumber == null ? '' : encodeURIComponent(OriginationNumber)), {});
		}
	}

	export interface ListTrunkingCountryReturn {
		countries?: Array<Pricingv2trunking_country>;
		meta?: ListTrunkingCountryReturnMeta;
	}
	export interface ListTrunkingCountryReturnFormProperties {
	}
	export function CreateListTrunkingCountryReturnFormGroup() {
		return new FormGroup<ListTrunkingCountryReturnFormProperties>({
		});

	}

	export interface ListTrunkingCountryReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListTrunkingCountryReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListTrunkingCountryReturnMetaFormGroup() {
		return new FormGroup<ListTrunkingCountryReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVoiceCountryReturn {
		countries?: Array<Pricingv2voicevoice_country>;
		meta?: ListVoiceCountryReturnMeta;
	}
	export interface ListVoiceCountryReturnFormProperties {
	}
	export function CreateListVoiceCountryReturnFormGroup() {
		return new FormGroup<ListVoiceCountryReturnFormProperties>({
		});

	}

	export interface ListVoiceCountryReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListVoiceCountryReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListVoiceCountryReturnMetaFormGroup() {
		return new FormGroup<ListVoiceCountryReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

}

