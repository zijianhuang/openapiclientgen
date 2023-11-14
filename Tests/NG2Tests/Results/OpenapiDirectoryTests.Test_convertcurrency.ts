import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Converts amount in one currency to that of another
		 * Provide an amount in one currency (EUR, GBP, CNY, JPY, AUD, etc.), and also a second currency to convert it to. The API will return the result using current foreign exchange rates. See the API home page for a list of all supported currencies.
		 * Get convertcurrency
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} from Currency symbol for the converted from amount
		 * @param {string} to Currency symbol for the converted to amount
		 * @param {string} amount The amount of currency to be converted
		 * @return {ConvertcurrencyGetByLicenseAndFromAndToAndAmountReturn} Currency rate data to one US DOllar
		 */
		ConvertcurrencyGetByLicenseAndFromAndToAndAmount(license: string, from: string, to: string, amount: string, headersHandler?: () => HttpHeaders): Observable<ConvertcurrencyGetByLicenseAndFromAndToAndAmountReturn> {
			return this.http.get<ConvertcurrencyGetByLicenseAndFromAndToAndAmountReturn>(this.baseUri + 'convertcurrency?license=' + (license == null ? '' : encodeURIComponent(license)) + '&from=' + (from == null ? '' : encodeURIComponent(from)) + '&to=' + (to == null ? '' : encodeURIComponent(to)) + '&amount=' + (amount == null ? '' : encodeURIComponent(amount)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export interface ConvertcurrencyGetByLicenseAndFromAndToAndAmountReturn {
		Code?: string | null;
		Converted?: string | null;
		Credits?: string | null;
		Currency?: string | null;
	}

}

