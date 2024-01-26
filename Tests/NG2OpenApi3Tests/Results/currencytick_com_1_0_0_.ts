import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Healthcheck
		 * Check that the service is up. If everything is okay, you'll get a 200 OK response.
		 * Otherwise, the request will fail with a 400 error, and a response listing the failed services.
		 * Get healthcheck
		 * @return {HealthcheckReturn} 
		 */
		Healthcheck(): Observable<HealthcheckReturn> {
			return this.http.get<HealthcheckReturn>(this.baseUri + 'healthcheck', {});
		}

		/**
		 * Historical Exchange Rate
		 * Get the exchange rate on a specific date
		 * Get historical
		 * @param {string} apikey Authentication key.
		 * @param {string} base The source currency.
		 * @param {string} target The target currency.
		 * @param {string} date The date to get the exchange rate.
		 * @return {HistoricalExchangeRateReturn} Success
		 */
		HistoricalExchangeRate(apikey: string, base: string, target: string, date: string): Observable<HistoricalExchangeRateReturn> {
			return this.http.get<HistoricalExchangeRateReturn>(this.baseUri + 'historical?apikey=' + (apikey == null ? '' : encodeURIComponent(apikey)) + '&base=' + (base == null ? '' : encodeURIComponent(base)) + '&target=' + (target == null ? '' : encodeURIComponent(target)) + '&date=' + (date == null ? '' : encodeURIComponent(date)), {});
		}

		/**
		 * Live currency exchange rate
		 * Get the exchange rate between two currencies.
		 * Get live
		 * @param {string} apikey Authentication key.
		 * @param {string} base The source currency.
		 * @param {string} target The target currency.
		 * @param {number} amount optional The amount to convert.
		 * @return {LiveCurrencyExchangeRateReturn} Success
		 */
		LiveCurrencyExchangeRate(apikey: string, base: string, target: string, amount: number | null | undefined): Observable<LiveCurrencyExchangeRateReturn> {
			return this.http.get<LiveCurrencyExchangeRateReturn>(this.baseUri + 'live?apikey=' + (apikey == null ? '' : encodeURIComponent(apikey)) + '&base=' + (base == null ? '' : encodeURIComponent(base)) + '&target=' + (target == null ? '' : encodeURIComponent(target)) + '&amount=' + amount, {});
		}

		/**
		 * List of supported currencies
		 * Get the list of supported currencies, currently 220 currencies are supported.
		 * Get supported_currencies
		 * @param {string} apikey Authentication key.
		 * @return {string} Success
		 */
		ListOfSupportedCurrencies(apikey: string): Observable<string> {
			return this.http.get(this.baseUri + 'supported_currencies?apikey=' + (apikey == null ? '' : encodeURIComponent(apikey)), { responseType: 'text' });
		}
	}

	export interface HealthcheckReturn {

		/** The status of this API (`up` or `down`). */
		status?: string | null;
	}
	export interface HealthcheckReturnFormProperties {

		/** The status of this API (`up` or `down`). */
		status: FormControl<string | null | undefined>,
	}
	export function CreateHealthcheckReturnFormGroup() {
		return new FormGroup<HealthcheckReturnFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HistoricalExchangeRateReturn {
		amount?: string | null;
		date?: string | null;
		from?: string | null;
		rate?: number | null;
		to?: string | null;
	}
	export interface HistoricalExchangeRateReturnFormProperties {
		amount: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		rate: FormControl<number | null | undefined>,
		to: FormControl<string | null | undefined>,
	}
	export function CreateHistoricalExchangeRateReturnFormGroup() {
		return new FormGroup<HistoricalExchangeRateReturnFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LiveCurrencyExchangeRateReturn {
		amount?: string | null;
		date?: string | null;
		from?: string | null;
		rate?: number | null;
		to?: string | null;
	}
	export interface LiveCurrencyExchangeRateReturnFormProperties {
		amount: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		rate: FormControl<number | null | undefined>,
		to: FormControl<string | null | undefined>,
	}
	export function CreateLiveCurrencyExchangeRateReturnFormGroup() {
		return new FormGroup<LiveCurrencyExchangeRateReturnFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

}

