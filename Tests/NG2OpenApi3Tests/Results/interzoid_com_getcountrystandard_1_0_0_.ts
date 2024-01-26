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
		 * Gets country name standard
		 * Gets a pre-selected country name standard for various permutations of a given country name.
		 * Get getcountrystandard
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} country Country name from which to retrieve the standardized version
		 * @return {GetcountrystandardReturn} Standardized country name data
		 */
		Getcountrystandard(license: string, country: string): Observable<GetcountrystandardReturn> {
			return this.http.get<GetcountrystandardReturn>(this.baseUri + 'getcountrystandard?license=' + (license == null ? '' : encodeURIComponent(license)) + '&country=' + (country == null ? '' : encodeURIComponent(country)), {});
		}
	}

	export interface GetcountrystandardReturn {
		Code?: string | null;
		CountryStandard?: string | null;
		Credits?: string | null;
	}
	export interface GetcountrystandardReturnFormProperties {
		Code: FormControl<string | null | undefined>,
		CountryStandard: FormControl<string | null | undefined>,
		Credits: FormControl<string | null | undefined>,
	}
	export function CreateGetcountrystandardReturnFormGroup() {
		return new FormGroup<GetcountrystandardReturnFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			CountryStandard: new FormControl<string | null | undefined>(undefined),
			Credits: new FormControl<string | null | undefined>(undefined),
		});

	}

}

