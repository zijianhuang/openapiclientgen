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
		 * Gets page load (or an API call) performance from a specified global geography such as Paris, Tokyo, Virginia, Mumbai, Frankfurt, London, Seoul, California, Sao Paolo, and many more.
		 * Gets page load performance from a specified geography
		 * Get globalpageload
		 * @param {string} license Your Interzoid license API key. Register at www.interzoid.com/register
		 * @param {string} origin Geographic location to perform the measurement from (Paris, Hong Kong, Seoul, Mumbai, Sao Paolo, London, etc. see API home page for full list)
		 * @param {string} url specific URL to perform load test time
		 * @return {GlobalpageloadReturn} Page load performance measurement response
		 */
		Globalpageload(license: string, origin: string, url: string): Observable<GlobalpageloadReturn> {
			return this.http.get<GlobalpageloadReturn>(this.baseUri + 'globalpageload?license=' + (license == null ? '' : encodeURIComponent(license)) + '&origin=' + (origin == null ? '' : encodeURIComponent(origin)) + '&url=' + (url == null ? '' : encodeURIComponent(url)), {});
		}
	}

	export interface GlobalpageloadReturn {
		Code?: string | null;
		Contents?: string | null;
		Credits?: string | null;
		Origin?: string | null;
		PageResponseStatus?: string | null;
		Seconds?: string | null;
	}
	export interface GlobalpageloadReturnFormProperties {
		Code: FormControl<string | null | undefined>,
		Contents: FormControl<string | null | undefined>,
		Credits: FormControl<string | null | undefined>,
		Origin: FormControl<string | null | undefined>,
		PageResponseStatus: FormControl<string | null | undefined>,
		Seconds: FormControl<string | null | undefined>,
	}
	export function CreateGlobalpageloadReturnFormGroup() {
		return new FormGroup<GlobalpageloadReturnFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Contents: new FormControl<string | null | undefined>(undefined),
			Credits: new FormControl<string | null | undefined>(undefined),
			Origin: new FormControl<string | null | undefined>(undefined),
			PageResponseStatus: new FormControl<string | null | undefined>(undefined),
			Seconds: new FormControl<string | null | undefined>(undefined),
		});

	}

}

