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
		 * Gets a foreign currency rate for one US Dollar
		 * Use a currency symbol (EUR, GBP, CNY, JPY, AUD, etc.) to obtain a live currency foreign exchange rate for one US Dollar. See the API home page for list of all supported currencies.
		 * Get getcurrencyrate
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} symbol Currency symbol to retrieve current rate for
		 * @return {GetcurrencyrateReturn} Currency rate data to one US Dollar
		 */
		Getcurrencyrate(license: string, symbol: string): Observable<GetcurrencyrateReturn> {
			return this.http.get<GetcurrencyrateReturn>(this.baseUri + 'getcurrencyrate?license=' + (license == null ? '' : encodeURIComponent(license)) + '&symbol=' + (symbol == null ? '' : encodeURIComponent(symbol)), {});
		}
	}

	export interface GetcurrencyrateReturn {
		Code?: string | null;
		Country?: string | null;
		Credits?: string | null;
		Name?: string | null;
		Rate?: string | null;
		Symbol?: string | null;
	}
	export interface GetcurrencyrateReturnFormProperties {
		Code: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		Credits: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Rate: FormControl<string | null | undefined>,
		Symbol: FormControl<string | null | undefined>,
	}
	export function CreateGetcurrencyrateReturnFormGroup() {
		return new FormGroup<GetcurrencyrateReturnFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			Credits: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Rate: new FormControl<string | null | undefined>(undefined),
			Symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

}

