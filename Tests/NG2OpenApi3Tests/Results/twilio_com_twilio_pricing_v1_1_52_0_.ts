import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Pricingv1messaging {
		links?: string | null;
		name?: string | null;
		url?: string | null;
	}
	export interface Pricingv1messagingFormProperties {
		links: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreatePricingv1messagingFormGroup() {
		return new FormGroup<Pricingv1messagingFormProperties>({
			links: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv1messagingmessaging_country {

		/** The name of the country. */
		country?: string | null;

		/** The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Pricingv1messagingmessaging_countryFormProperties {

		/** The name of the country. */
		country: FormControl<string | null | undefined>,

		/** The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePricingv1messagingmessaging_countryFormGroup() {
		return new FormGroup<Pricingv1messagingmessaging_countryFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv1messagingmessaging_country_instance {

		/** The name of the country. */
		country?: string | null;

		/** The list of [InboundPrice](https://www.twilio.com/docs/sms/api/pricing#inbound-price) records that describe the price to receive an inbound SMS to the different Twilio phone number types supported in this country */
		Pricingv1messagingmessaging_country_instanceInbound_sms_prices?: Array<Pricingv1messagingmessaging_country_instanceInbound_sms_prices>;

		/** The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country?: string | null;

		/** The list of [OutboundSMSPrice](https://www.twilio.com/docs/sms/api/pricing#outbound-sms-price) records that represent the price to send a message for each MCC/MNC applicable in this country. */
		Pricingv1messagingmessaging_country_instanceOutbound_sms_prices?: Array<Pricingv1messagingmessaging_country_instanceOutbound_sms_prices>;

		/** The currency in which prices are measured, specified in [ISO 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`). */
		price_unit?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Pricingv1messagingmessaging_country_instanceFormProperties {

		/** The name of the country. */
		country: FormControl<string | null | undefined>,

		/** The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country: FormControl<string | null | undefined>,

		/** The currency in which prices are measured, specified in [ISO 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`). */
		price_unit: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePricingv1messagingmessaging_country_instanceFormGroup() {
		return new FormGroup<Pricingv1messagingmessaging_country_instanceFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			price_unit: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv1messagingmessaging_country_instanceInbound_sms_prices {

		/** Type: double */
		base_price?: number | null;

		/** Type: double */
		current_price?: number | null;
		number_type?: string | null;
	}
	export interface Pricingv1messagingmessaging_country_instanceInbound_sms_pricesFormProperties {

		/** Type: double */
		base_price: FormControl<number | null | undefined>,

		/** Type: double */
		current_price: FormControl<number | null | undefined>,
		number_type: FormControl<string | null | undefined>,
	}
	export function CreatePricingv1messagingmessaging_country_instanceInbound_sms_pricesFormGroup() {
		return new FormGroup<Pricingv1messagingmessaging_country_instanceInbound_sms_pricesFormProperties>({
			base_price: new FormControl<number | null | undefined>(undefined),
			current_price: new FormControl<number | null | undefined>(undefined),
			number_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv1messagingmessaging_country_instanceOutbound_sms_prices {
		carrier?: string | null;
		mcc?: string | null;
		mnc?: string | null;
		Pricingv1messagingmessaging_country_instanceOutbound_sms_pricesPrices?: Array<Pricingv1messagingmessaging_country_instanceOutbound_sms_pricesPrices>;
	}
	export interface Pricingv1messagingmessaging_country_instanceOutbound_sms_pricesFormProperties {
		carrier: FormControl<string | null | undefined>,
		mcc: FormControl<string | null | undefined>,
		mnc: FormControl<string | null | undefined>,
	}
	export function CreatePricingv1messagingmessaging_country_instanceOutbound_sms_pricesFormGroup() {
		return new FormGroup<Pricingv1messagingmessaging_country_instanceOutbound_sms_pricesFormProperties>({
			carrier: new FormControl<string | null | undefined>(undefined),
			mcc: new FormControl<string | null | undefined>(undefined),
			mnc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv1messagingmessaging_country_instanceOutbound_sms_pricesPrices {

		/** Type: double */
		base_price?: number | null;

		/** Type: double */
		current_price?: number | null;
		number_type?: string | null;
	}
	export interface Pricingv1messagingmessaging_country_instanceOutbound_sms_pricesPricesFormProperties {

		/** Type: double */
		base_price: FormControl<number | null | undefined>,

		/** Type: double */
		current_price: FormControl<number | null | undefined>,
		number_type: FormControl<string | null | undefined>,
	}
	export function CreatePricingv1messagingmessaging_country_instanceOutbound_sms_pricesPricesFormGroup() {
		return new FormGroup<Pricingv1messagingmessaging_country_instanceOutbound_sms_pricesPricesFormProperties>({
			base_price: new FormControl<number | null | undefined>(undefined),
			current_price: new FormControl<number | null | undefined>(undefined),
			number_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv1phone_number {
		links?: string | null;
		name?: string | null;
		url?: string | null;
	}
	export interface Pricingv1phone_numberFormProperties {
		links: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreatePricingv1phone_numberFormGroup() {
		return new FormGroup<Pricingv1phone_numberFormProperties>({
			links: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv1phone_numberphone_number_country {

		/** The name of the country. */
		country?: string | null;

		/** The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Pricingv1phone_numberphone_number_countryFormProperties {

		/** The name of the country. */
		country: FormControl<string | null | undefined>,

		/** The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePricingv1phone_numberphone_number_countryFormGroup() {
		return new FormGroup<Pricingv1phone_numberphone_number_countryFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv1phone_numberphone_number_country_instance {

		/** The name of the country. */
		country?: string | null;

		/** The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country?: string | null;

		/** The list of [PhoneNumberPrice](https://www.twilio.com/docs/phone-numbers/pricing#phone-number-price) records. */
		Pricingv1phone_numberphone_number_country_instancePhone_number_prices?: Array<Pricingv1phone_numberphone_number_country_instancePhone_number_prices>;

		/** The currency in which prices are measured, specified in [ISO 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`). */
		price_unit?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Pricingv1phone_numberphone_number_country_instanceFormProperties {

		/** The name of the country. */
		country: FormControl<string | null | undefined>,

		/** The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country: FormControl<string | null | undefined>,

		/** The currency in which prices are measured, specified in [ISO 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`). */
		price_unit: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePricingv1phone_numberphone_number_country_instanceFormGroup() {
		return new FormGroup<Pricingv1phone_numberphone_number_country_instanceFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			price_unit: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv1phone_numberphone_number_country_instancePhone_number_prices {

		/** Type: double */
		base_price?: number | null;

		/** Type: double */
		current_price?: number | null;
		number_type?: string | null;
	}
	export interface Pricingv1phone_numberphone_number_country_instancePhone_number_pricesFormProperties {

		/** Type: double */
		base_price: FormControl<number | null | undefined>,

		/** Type: double */
		current_price: FormControl<number | null | undefined>,
		number_type: FormControl<string | null | undefined>,
	}
	export function CreatePricingv1phone_numberphone_number_country_instancePhone_number_pricesFormGroup() {
		return new FormGroup<Pricingv1phone_numberphone_number_country_instancePhone_number_pricesFormProperties>({
			base_price: new FormControl<number | null | undefined>(undefined),
			current_price: new FormControl<number | null | undefined>(undefined),
			number_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv1voice {
		links?: string | null;
		name?: string | null;
		url?: string | null;
	}
	export interface Pricingv1voiceFormProperties {
		links: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreatePricingv1voiceFormGroup() {
		return new FormGroup<Pricingv1voiceFormProperties>({
			links: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv1voicevoice_country {

		/** The name of the country. */
		country?: string | null;

		/** The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Pricingv1voicevoice_countryFormProperties {

		/** The name of the country. */
		country: FormControl<string | null | undefined>,

		/** The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePricingv1voicevoice_countryFormGroup() {
		return new FormGroup<Pricingv1voicevoice_countryFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv1voicevoice_country_instance {

		/** The name of the country. */
		country?: string | null;

		/** The list of [InboundCallPrice](https://www.twilio.com/docs/voice/pricing#inbound-call-price) records. */
		Pricingv1voicevoice_country_instanceInbound_call_prices?: Array<Pricingv1voicevoice_country_instanceInbound_call_prices>;

		/** The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country?: string | null;

		/** The list of OutboundPrefixPrice records, which include a list of the `prefixes`, the `friendly_name`, `base_price`, and the   `current_price` for those prefixes. */
		Pricingv1voicevoice_country_instanceOutbound_prefix_prices?: Array<Pricingv1voicevoice_country_instanceOutbound_prefix_prices>;

		/** The currency in which prices are measured, specified in [ISO 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`). */
		price_unit?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Pricingv1voicevoice_country_instanceFormProperties {

		/** The name of the country. */
		country: FormControl<string | null | undefined>,

		/** The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country: FormControl<string | null | undefined>,

		/** The currency in which prices are measured, specified in [ISO 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`). */
		price_unit: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePricingv1voicevoice_country_instanceFormGroup() {
		return new FormGroup<Pricingv1voicevoice_country_instanceFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			price_unit: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv1voicevoice_country_instanceInbound_call_prices {

		/** Type: double */
		base_price?: number | null;

		/** Type: double */
		current_price?: number | null;
		number_type?: string | null;
	}
	export interface Pricingv1voicevoice_country_instanceInbound_call_pricesFormProperties {

		/** Type: double */
		base_price: FormControl<number | null | undefined>,

		/** Type: double */
		current_price: FormControl<number | null | undefined>,
		number_type: FormControl<string | null | undefined>,
	}
	export function CreatePricingv1voicevoice_country_instanceInbound_call_pricesFormGroup() {
		return new FormGroup<Pricingv1voicevoice_country_instanceInbound_call_pricesFormProperties>({
			base_price: new FormControl<number | null | undefined>(undefined),
			current_price: new FormControl<number | null | undefined>(undefined),
			number_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv1voicevoice_country_instanceOutbound_prefix_prices {

		/** Type: double */
		base_price?: number | null;

		/** Type: double */
		current_price?: number | null;
		friendly_name?: string | null;
		prefixes?: Array<string>;
	}
	export interface Pricingv1voicevoice_country_instanceOutbound_prefix_pricesFormProperties {

		/** Type: double */
		base_price: FormControl<number | null | undefined>,

		/** Type: double */
		current_price: FormControl<number | null | undefined>,
		friendly_name: FormControl<string | null | undefined>,
	}
	export function CreatePricingv1voicevoice_country_instanceOutbound_prefix_pricesFormGroup() {
		return new FormGroup<Pricingv1voicevoice_country_instanceOutbound_prefix_pricesFormProperties>({
			base_price: new FormControl<number | null | undefined>(undefined),
			current_price: new FormControl<number | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv1voicevoice_number {

		/** The name of the country. */
		country?: string | null;

		/** The [InboundCallPrice](https://www.twilio.com/docs/voice/pricing#inbound-call-price) record. If `null`, the Phone Number is not a Twilio number owned by this account. */
		inbound_call_price?: Pricingv1voicevoice_numberInbound_call_price;

		/** The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country?: string | null;

		/** The phone number. */
		number?: string | null;

		/** The OutboundCallPrice record, which includes a list of `origination_prefixes` and the `base_price` and `current_price` for those prefixes. */
		outbound_call_price?: Pricingv1voicevoice_numberOutbound_call_price;

		/** The currency in which prices are measured, specified in [ISO 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`). */
		price_unit?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Pricingv1voicevoice_numberFormProperties {

		/** The name of the country. */
		country: FormControl<string | null | undefined>,

		/** The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
		iso_country: FormControl<string | null | undefined>,

		/** The phone number. */
		number: FormControl<string | null | undefined>,

		/** The currency in which prices are measured, specified in [ISO 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`). */
		price_unit: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePricingv1voicevoice_numberFormGroup() {
		return new FormGroup<Pricingv1voicevoice_numberFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			iso_country: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			price_unit: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv1voicevoice_numberInbound_call_price {

		/** Type: double */
		base_price?: number | null;

		/** Type: double */
		current_price?: number | null;
		number_type?: string | null;
	}
	export interface Pricingv1voicevoice_numberInbound_call_priceFormProperties {

		/** Type: double */
		base_price: FormControl<number | null | undefined>,

		/** Type: double */
		current_price: FormControl<number | null | undefined>,
		number_type: FormControl<string | null | undefined>,
	}
	export function CreatePricingv1voicevoice_numberInbound_call_priceFormGroup() {
		return new FormGroup<Pricingv1voicevoice_numberInbound_call_priceFormProperties>({
			base_price: new FormControl<number | null | undefined>(undefined),
			current_price: new FormControl<number | null | undefined>(undefined),
			number_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pricingv1voicevoice_numberOutbound_call_price {

		/** Type: double */
		base_price?: number | null;

		/** Type: double */
		current_price?: number | null;
	}
	export interface Pricingv1voicevoice_numberOutbound_call_priceFormProperties {

		/** Type: double */
		base_price: FormControl<number | null | undefined>,

		/** Type: double */
		current_price: FormControl<number | null | undefined>,
	}
	export function CreatePricingv1voicevoice_numberOutbound_call_priceFormGroup() {
		return new FormGroup<Pricingv1voicevoice_numberOutbound_call_priceFormProperties>({
			base_price: new FormControl<number | null | undefined>(undefined),
			current_price: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get v1/Messaging/Countries
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListMessagingCountryReturn} OK
		 */
		ListMessagingCountry(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListMessagingCountryReturn> {
			return this.http.get<ListMessagingCountryReturn>(this.baseUri + 'v1/Messaging/Countries?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/Messaging/Countries/{IsoCountry}
		 * @param {string} IsoCountry The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the pricing information to fetch.
		 * @return {Pricingv1messagingmessaging_country_instance} OK
		 */
		FetchMessagingCountry(IsoCountry: string): Observable<Pricingv1messagingmessaging_country_instance> {
			return this.http.get<Pricingv1messagingmessaging_country_instance>(this.baseUri + 'v1/Messaging/Countries/' + (IsoCountry == null ? '' : encodeURIComponent(IsoCountry)), {});
		}

		/**
		 * Get v1/PhoneNumbers/Countries
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListPhoneNumberCountryReturn} OK
		 */
		ListPhoneNumberCountry(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListPhoneNumberCountryReturn> {
			return this.http.get<ListPhoneNumberCountryReturn>(this.baseUri + 'v1/PhoneNumbers/Countries?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/PhoneNumbers/Countries/{IsoCountry}
		 * @param {string} IsoCountry The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the pricing information to fetch.
		 * @return {Pricingv1phone_numberphone_number_country_instance} OK
		 */
		FetchPhoneNumberCountry(IsoCountry: string): Observable<Pricingv1phone_numberphone_number_country_instance> {
			return this.http.get<Pricingv1phone_numberphone_number_country_instance>(this.baseUri + 'v1/PhoneNumbers/Countries/' + (IsoCountry == null ? '' : encodeURIComponent(IsoCountry)), {});
		}

		/**
		 * Get v1/Voice/Countries
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListVoiceCountryReturn} OK
		 */
		ListVoiceCountry(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListVoiceCountryReturn> {
			return this.http.get<ListVoiceCountryReturn>(this.baseUri + 'v1/Voice/Countries?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get v1/Voice/Countries/{IsoCountry}
		 * @param {string} IsoCountry The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the pricing information to fetch.
		 * @return {Pricingv1voicevoice_country_instance} OK
		 */
		FetchVoiceCountry(IsoCountry: string): Observable<Pricingv1voicevoice_country_instance> {
			return this.http.get<Pricingv1voicevoice_country_instance>(this.baseUri + 'v1/Voice/Countries/' + (IsoCountry == null ? '' : encodeURIComponent(IsoCountry)), {});
		}

		/**
		 * Get v1/Voice/Numbers/{Number}
		 * @param {string} Number The phone number to fetch.
		 * @return {Pricingv1voicevoice_number} OK
		 */
		FetchVoiceNumber(Number: string): Observable<Pricingv1voicevoice_number> {
			return this.http.get<Pricingv1voicevoice_number>(this.baseUri + 'v1/Voice/Numbers/' + (Number == null ? '' : encodeURIComponent(Number)), {});
		}
	}

	export interface ListMessagingCountryReturn {
		countries?: Array<Pricingv1messagingmessaging_country>;
		meta?: ListMessagingCountryReturnMeta;
	}
	export interface ListMessagingCountryReturnFormProperties {
	}
	export function CreateListMessagingCountryReturnFormGroup() {
		return new FormGroup<ListMessagingCountryReturnFormProperties>({
		});

	}

	export interface ListMessagingCountryReturnMeta {
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
	export interface ListMessagingCountryReturnMetaFormProperties {
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
	export function CreateListMessagingCountryReturnMetaFormGroup() {
		return new FormGroup<ListMessagingCountryReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPhoneNumberCountryReturn {
		countries?: Array<Pricingv1phone_numberphone_number_country>;
		meta?: ListPhoneNumberCountryReturnMeta;
	}
	export interface ListPhoneNumberCountryReturnFormProperties {
	}
	export function CreateListPhoneNumberCountryReturnFormGroup() {
		return new FormGroup<ListPhoneNumberCountryReturnFormProperties>({
		});

	}

	export interface ListPhoneNumberCountryReturnMeta {
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
	export interface ListPhoneNumberCountryReturnMetaFormProperties {
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
	export function CreateListPhoneNumberCountryReturnMetaFormGroup() {
		return new FormGroup<ListPhoneNumberCountryReturnMetaFormProperties>({
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
		countries?: Array<Pricingv1voicevoice_country>;
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

