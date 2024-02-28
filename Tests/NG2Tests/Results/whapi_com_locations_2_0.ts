import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Address {

		/** The name of the postal city/town */
		city?: string | null;

		/** The name of the county */
		county?: string | null;

		/** The customer’s complete address including postcode */
		fullAddress?: string | null;

		/** The postcode of the address */
		postCode?: string | null;

		/** The name of the street including the house number/house name */
		street?: string | null;
	}
	export interface AddressFormProperties {

		/** The name of the postal city/town */
		city: FormControl<string | null | undefined>,

		/** The name of the county */
		county: FormControl<string | null | undefined>,

		/** The customer’s complete address including postcode */
		fullAddress: FormControl<string | null | undefined>,

		/** The postcode of the address */
		postCode: FormControl<string | null | undefined>,

		/** The name of the street including the house number/house name */
		street: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			county: new FormControl<string | null | undefined>(undefined),
			fullAddress: new FormControl<string | null | undefined>(undefined),
			postCode: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Addresses {
		addresses?: Array<Address>;
	}
	export interface AddressesFormProperties {
	}
	export function CreateAddressesFormGroup() {
		return new FormGroup<AddressesFormProperties>({
		});

	}

	export interface Countries {
		countries?: Array<Country>;
	}
	export interface CountriesFormProperties {
	}
	export function CreateCountriesFormGroup() {
		return new FormGroup<CountriesFormProperties>({
		});

	}

	export interface Country {

		/** The code of the country */
		code?: string | null;

		/** The currency code */
		currencyCode?: string | null;

		/** The dial code of the country */
		dialCode?: string | null;

		/** The name of the country */
		name?: string | null;
	}
	export interface CountryFormProperties {

		/** The code of the country */
		code: FormControl<string | null | undefined>,

		/** The currency code */
		currencyCode: FormControl<string | null | undefined>,

		/** The dial code of the country */
		dialCode: FormControl<string | null | undefined>,

		/** The name of the country */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCountryFormGroup() {
		return new FormGroup<CountryFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			dialCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Currencies {
		currencies?: Array<Currency>;
	}
	export interface CurrenciesFormProperties {
	}
	export function CreateCurrenciesFormGroup() {
		return new FormGroup<CurrenciesFormProperties>({
		});

	}

	export interface Currency {

		/** The code of the currency */
		code?: string | null;

		/**
		 * The exchange rate for the currency
		 * Type: double
		 */
		exchangeRate?: number | null;

		/**
		 * The maximum deposit for the currency
		 * Type: double
		 */
		maxDeposit?: number | null;

		/**
		 * The maximum withdrawl for the currency
		 * Type: double
		 */
		maxWithdrawal?: number | null;

		/**
		 * The minimum deposit for the currency
		 * Type: double
		 */
		minDeposit?: number | null;

		/**
		 * The minimum withdrawal for the currency
		 * Type: double
		 */
		minWithdrawal?: number | null;

		/** The name of the currency */
		name?: string | null;
	}
	export interface CurrencyFormProperties {

		/** The code of the currency */
		code: FormControl<string | null | undefined>,

		/**
		 * The exchange rate for the currency
		 * Type: double
		 */
		exchangeRate: FormControl<number | null | undefined>,

		/**
		 * The maximum deposit for the currency
		 * Type: double
		 */
		maxDeposit: FormControl<number | null | undefined>,

		/**
		 * The maximum withdrawl for the currency
		 * Type: double
		 */
		maxWithdrawal: FormControl<number | null | undefined>,

		/**
		 * The minimum deposit for the currency
		 * Type: double
		 */
		minDeposit: FormControl<number | null | undefined>,

		/**
		 * The minimum withdrawal for the currency
		 * Type: double
		 */
		minWithdrawal: FormControl<number | null | undefined>,

		/** The name of the currency */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCurrencyFormGroup() {
		return new FormGroup<CurrencyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			exchangeRate: new FormControl<number | null | undefined>(undefined),
			maxDeposit: new FormControl<number | null | undefined>(undefined),
			maxWithdrawal: new FormControl<number | null | undefined>(undefined),
			minDeposit: new FormControl<number | null | undefined>(undefined),
			minWithdrawal: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {

		/** A unique William Hill identifier for the error */
		code?: string | null;

		/** To help pinpoint the exact parameter where a request has failed */
		field?: string | null;

		/** A unique William Hill text string to enable you to identify the error (in English only) */
		message?: string | null;
	}
	export interface ErrorFormProperties {

		/** A unique William Hill identifier for the error */
		code: FormControl<string | null | undefined>,

		/** To help pinpoint the exact parameter where a request has failed */
		field: FormControl<string | null | undefined>,

		/** A unique William Hill text string to enable you to identify the error (in English only) */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocationsErrors {
		errors?: Array<Error>;
	}
	export interface LocationsErrorsFormProperties {
	}
	export function CreateLocationsErrorsFormGroup() {
		return new FormGroup<LocationsErrorsFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves a list of addresses when supplied with a house number or name and a postcode. It is generally used during customer registration to provide a list of possible addresses from where the customer can select their own address details.
		 * Get address/lookup/
		 * @param {string} houseNum House number or name of the address.
		 * @param {string} postCode Postcode of the address, no spaces required.
		 * @return {Addresses} Success
		 */
		AddressLookup(houseNum: string, postCode: string): Observable<Addresses> {
			return this.http.get<Addresses>(this.baseUri + 'address/lookup/?houseNum=' + (houseNum == null ? '' : encodeURIComponent(houseNum)) + '&postCode=' + (postCode == null ? '' : encodeURIComponent(postCode)), {});
		}

		/**
		 * Retrieves a list of countries and its currencies.
		 * Get countries/
		 * @return {Countries} Successful response
		 */
		GetCountries(): Observable<Countries> {
			return this.http.get<Countries>(this.baseUri + 'countries/', {});
		}

		/**
		 * Retrieves the specified country and its currency.
		 * Get countries/{countryCode}
		 * @param {string} countryCode Code of the country
		 * @return {Country} Success
		 */
		GetCountry(countryCode: string): Observable<Country> {
			return this.http.get<Country>(this.baseUri + 'countries/' + (countryCode == null ? '' : encodeURIComponent(countryCode)), {});
		}

		/**
		 * Retreives the list of currencies.
		 * Get currencies/
		 * @return {Currencies} Success
		 */
		GetCurrencies(): Observable<Currencies> {
			return this.http.get<Currencies>(this.baseUri + 'currencies/', {});
		}

		/**
		 * Retreives the specified currency.
		 * Get currencies/{currencyCode}
		 * @param {string} currencyCode Code of the currency
		 * @return {Currency} Success
		 */
		GetCurrency(currencyCode: string): Observable<Currency> {
			return this.http.get<Currency>(this.baseUri + 'currencies/' + (currencyCode == null ? '' : encodeURIComponent(currencyCode)), {});
		}
	}

}

