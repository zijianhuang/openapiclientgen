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
		 * Gets a similarity key for matching purposes for country name data
		 * Gets a similarity key to use for matching purposes for country name data
		 * Get getcountrymatch
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} country Country name from which to generate similarity key
		 * @return {GetcountrymatchReturn} Generated similarity key for country name data
		 */
		Getcountrymatch(license: string, country: string): Observable<GetcountrymatchReturn> {
			return this.http.get<GetcountrymatchReturn>(this.baseUri + 'getcountrymatch?license=' + (license == null ? '' : encodeURIComponent(license)) + '&country=' + (country == null ? '' : encodeURIComponent(country)), {});
		}
	}

	export interface GetcountrymatchReturn {
		Code?: string | null;
		Credits?: string | null;
		Simkey?: string | null;
	}
	export interface GetcountrymatchReturnFormProperties {
		Code: FormControl<string | null | undefined>,
		Credits: FormControl<string | null | undefined>,
		Simkey: FormControl<string | null | undefined>,
	}
	export function CreateGetcountrymatchReturnFormGroup() {
		return new FormGroup<GetcountrymatchReturnFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Credits: new FormControl<string | null | undefined>(undefined),
			Simkey: new FormControl<string | null | undefined>(undefined),
		});

	}

}

