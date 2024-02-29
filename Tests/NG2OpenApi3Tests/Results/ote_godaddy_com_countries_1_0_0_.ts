import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Country {

		/** The calling code prefix used for phone numbers in this country */
		callingCode?: string | null;

		/** The ISO country-code */
		countryKey?: string | null;

		/** The localized name of the country */
		label?: string | null;

		/** List of states/provinces in this country */
		states?: Array<State>;
	}
	export interface CountryFormProperties {

		/** The calling code prefix used for phone numbers in this country */
		callingCode: FormControl<string | null | undefined>,

		/** The ISO country-code */
		countryKey: FormControl<string | null | undefined>,

		/** The localized name of the country */
		label: FormControl<string | null | undefined>,
	}
	export function CreateCountryFormGroup() {
		return new FormGroup<CountryFormProperties>({
			callingCode: new FormControl<string | null | undefined>(undefined),
			countryKey: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface State {

		/** The localized name of the state, province, or territory */
		label?: string | null;

		/** The state code */
		stateKey?: string | null;
	}
	export interface StateFormProperties {

		/** The localized name of the state, province, or territory */
		label: FormControl<string | null | undefined>,

		/** The state code */
		stateKey: FormControl<string | null | undefined>,
	}
	export function CreateStateFormGroup() {
		return new FormGroup<StateFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			stateKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CountrySummary {

		/** The calling code prefix used for phone numbers in this country */
		callingCode?: string | null;

		/** The ISO country-code */
		countryKey?: string | null;

		/** The localized name of the country */
		label?: string | null;
	}
	export interface CountrySummaryFormProperties {

		/** The calling code prefix used for phone numbers in this country */
		callingCode: FormControl<string | null | undefined>,

		/** The ISO country-code */
		countryKey: FormControl<string | null | undefined>,

		/** The localized name of the country */
		label: FormControl<string | null | undefined>,
	}
	export function CreateCountrySummaryFormGroup() {
		return new FormGroup<CountrySummaryFormProperties>({
			callingCode: new FormControl<string | null | undefined>(undefined),
			countryKey: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: string;

		/** List of the specific fields, and the errors found with their contents */
		fields?: Array<ErrorField>;

		/** Human-readable, English description of the error */
		message?: string | null;

		/**
		 * Stack trace indicating where the error occurred.<br/>
		 * NOTE: This attribute <strong>MAY</strong> be included for Development and Test environments.
		 * However, it <strong>MUST NOT</strong> be exposed from OTE nor Production systems
		 */
		stack?: Array<string>;
	}
	export interface ErrorFormProperties {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Human-readable, English description of the error */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorField {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: string;

		/** Human-readable, English description of the problem with the contents of the field */
		message?: string | null;

		/**
		 * JSONPath referring to the field within the submitted data containing an error
		 * Required
		 */
		path: string;
	}
	export interface ErrorFieldFormProperties {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Human-readable, English description of the problem with the contents of the field */
		message: FormControl<string | null | undefined>,

		/**
		 * JSONPath referring to the field within the submitted data containing an error
		 * Required
		 */
		path: FormControl<string | null | undefined>,
	}
	export function CreateErrorFieldFormGroup() {
		return new FormGroup<ErrorFieldFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ErrorLimit {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: string;

		/** List of the specific fields, and the errors found with their contents */
		fields?: Array<ErrorField>;

		/** Human-readable, English description of the error */
		message?: string | null;

		/**
		 * Number of seconds to wait before attempting a similar request
		 * Required
		 */
		retryAfterSec: string;

		/**
		 * Stack trace indicating where the error occurred.<br/>
		 * NOTE: This attribute <strong>MAY</strong> be included for Development and Test environments.
		 * However, it <strong>MUST NOT</strong> be exposed from OTE nor Production systems
		 */
		stack?: Array<string>;
	}
	export interface ErrorLimitFormProperties {

		/**
		 * Short identifier for the error, suitable for indicating the specific error within client code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Human-readable, English description of the error */
		message: FormControl<string | null | undefined>,

		/**
		 * Number of seconds to wait before attempting a similar request
		 * Required
		 */
		retryAfterSec: FormControl<string | null | undefined>,
	}
	export function CreateErrorLimitFormGroup() {
		return new FormGroup<ErrorLimitFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined),
			retryAfterSec: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves summary country information for the provided marketId and filters
		 * Authorization is not required
		 * Get v1/countries
		 * @param {string} marketId MarketId in which the request is being made, and for which responses should be localized
		 * @param {number} regionTypeId Restrict countries to this region type; required if regionName is supplied
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} regionName Restrict countries to this region name; required if regionTypeId is supplied
		 * @param {GetCountriesSort} sort The term to sort the result countries by.
		 * @param {GetCountriesOrder} order The direction to sort the result countries by.
		 * @return {Array<CountrySummary>} Request was successful
		 */
		GetCountries(marketId: string, regionTypeId: number | null | undefined, regionName: string | null | undefined, sort: GetCountriesSort | null | undefined, order: GetCountriesOrder | null | undefined): Observable<Array<CountrySummary>> {
			return this.http.get<Array<CountrySummary>>(this.baseUri + 'v1/countries?marketId=' + (marketId == null ? '' : encodeURIComponent(marketId)) + '&regionTypeId=' + regionTypeId + '&regionName=' + (regionName == null ? '' : encodeURIComponent(regionName)) + '&sort=' + sort + '&order=' + order, {});
		}

		/**
		 * Retrieves country and summary state information for provided countryKey
		 * Authorization is not required
		 * Get v1/countries/{countryKey}
		 * @param {string} countryKey The country key
		 * @param {string} marketId MarketId in which the request is being made, and for which responses should be localized
		 * @param {GetCountriesSort} sort The term to sort the result country states by.
		 * @param {GetCountriesOrder} order The direction to sort the result country states by.
		 * @return {Array<Country>} Request was successful
		 */
		GetCountry(countryKey: string, marketId: string, sort: GetCountriesSort | null | undefined, order: GetCountriesOrder | null | undefined): Observable<Array<Country>> {
			return this.http.get<Array<Country>>(this.baseUri + 'v1/countries/' + (countryKey == null ? '' : encodeURIComponent(countryKey)) + '&marketId=' + (marketId == null ? '' : encodeURIComponent(marketId)) + '&sort=' + sort + '&order=' + order, {});
		}
	}

	export enum GetCountriesSort { key = 'key', label = 'label' }

	export enum GetCountriesOrder { ascending = 'ascending', descending = 'descending' }

}

