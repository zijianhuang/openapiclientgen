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
		 * Gets a city name standard for US and international cities
		 * Gets a pre-selected city name standard for US and international cities for various permutations of a given city name.
		 * Get getcitystandard
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} city City name from which to retrieve the standardized version
		 * @return {GetcitystandardReturn} Standardized city name data
		 */
		Getcitystandard(license: string, city: string): Observable<GetcitystandardReturn> {
			return this.http.get<GetcitystandardReturn>(this.baseUri + 'getcitystandard?license=' + (license == null ? '' : encodeURIComponent(license)) + '&city=' + (city == null ? '' : encodeURIComponent(city)), {});
		}
	}

	export interface GetcitystandardReturn {
		CityStandard?: string | null;
		Code?: string | null;
		Credits?: string | null;
	}
	export interface GetcitystandardReturnFormProperties {
		CityStandard: FormControl<string | null | undefined>,
		Code: FormControl<string | null | undefined>,
		Credits: FormControl<string | null | undefined>,
	}
	export function CreateGetcitystandardReturnFormGroup() {
		return new FormGroup<GetcitystandardReturnFormProperties>({
			CityStandard: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<string | null | undefined>(undefined),
			Credits: new FormControl<string | null | undefined>(undefined),
		});

	}

}

