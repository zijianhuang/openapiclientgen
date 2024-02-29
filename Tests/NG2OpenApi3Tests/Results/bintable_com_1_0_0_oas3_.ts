import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ResponseItem {

		/** Required */
		data: string;

		/** Required */
		message: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		result: number;
	}
	export interface ResponseItemFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		result: FormControl<number | null | undefined>,
	}
	export function CreateResponseItemFormGroup() {
		return new FormGroup<ResponseItemFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Check Balance
		 * Get Account balance and expiry
		 * Get balance
		 * @param {string} api_key The API key, which you can get from bintable.com website.
		 * @return {void} Balance reponse
		 */
		BalanceLookup(api_key: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'balance?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lookup for bin
		 * By passing in the appropriate BIN, you can lookup for
		 * card meta data in bintable.com API
		 * Get {bin}
		 * @param {string} bin pass the required BIN code
		 * @param {string} api_key The API key, which you can get from bintable.com website.
		 * @return {Array<ResponseItem>} BIN data response
		 */
		BinLookup(bin: string, api_key: string): Observable<Array<ResponseItem>> {
			return this.http.get<Array<ResponseItem>>(this.baseUri + (bin == null ? '' : encodeURIComponent(bin)) + '&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '', {});
		}
	}

}

