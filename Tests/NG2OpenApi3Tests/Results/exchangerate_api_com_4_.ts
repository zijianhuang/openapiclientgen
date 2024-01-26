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
		 * Returns latest exchange rates in parameter-supplied base currency.
		 * Get latest/{base_currency}
		 * @param {string} base_currency **Base Currency**. *Example: USD*. You an use any of the ISO 4217 currency codes we support. See https://www.exchangerate-api.com/docs/supported-currencies
		 * @return {Latest_base_currencyGetReturn} Successful response
		 */
		Latest_base_currencyGet(base_currency: string, headersHandler?: () => HttpHeaders): Observable<Latest_base_currencyGetReturn> {
			return this.http.get<Latest_base_currencyGetReturn>(this.baseUri + 'latest/' + (base_currency == null ? '' : encodeURIComponent(base_currency)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export interface Latest_base_currencyGetReturn {

		/** The currency code you supplied as base in your request */
		base?: string | null;

		/** The date these exchange rates are for */
		date?: string | null;

		/** Each supported currency code in terms of the base currency */
		rates?: {[id: string]: number };

		/** The epoch time this set of exchange rates was generated */
		time_last_updated?: number | null;
	}
	export interface Latest_base_currencyGetReturnFormProperties {

		/** The currency code you supplied as base in your request */
		base: FormControl<string | null | undefined>,

		/** The date these exchange rates are for */
		date: FormControl<string | null | undefined>,

		/** Each supported currency code in terms of the base currency */
		rates: FormControl<{[id: string]: number } | null | undefined>,

		/** The epoch time this set of exchange rates was generated */
		time_last_updated: FormControl<number | null | undefined>,
	}
	export function CreateLatest_base_currencyGetReturnFormGroup() {
		return new FormGroup<Latest_base_currencyGetReturnFormProperties>({
			base: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			rates: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			time_last_updated: new FormControl<number | null | undefined>(undefined),
		});

	}

}

