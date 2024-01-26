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
		 * Gets a similarity key for matching purposes for city name data
		 * Gets a similarity key for matching purposes for city name data.
		 * Get getcitymatch
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} city City name from which to generate similarity key
		 * @return {GetcitymatchReturn} Generated similarity key for city name data
		 */
		Getcitymatch(license: string, city: string): Observable<GetcitymatchReturn> {
			return this.http.get<GetcitymatchReturn>(this.baseUri + 'getcitymatch?license=' + (license == null ? '' : encodeURIComponent(license)) + '&city=' + (city == null ? '' : encodeURIComponent(city)), {});
		}
	}

	export interface GetcitymatchReturn {
		Code?: string | null;
		Credits?: string | null;
		Simkey?: string | null;
	}
	export interface GetcitymatchReturnFormProperties {
		Code: FormControl<string | null | undefined>,
		Credits: FormControl<string | null | undefined>,
		Simkey: FormControl<string | null | undefined>,
	}
	export function CreateGetcitymatchReturnFormGroup() {
		return new FormGroup<GetcitymatchReturnFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Credits: new FormControl<string | null | undefined>(undefined),
			Simkey: new FormControl<string | null | undefined>(undefined),
		});

	}

}

