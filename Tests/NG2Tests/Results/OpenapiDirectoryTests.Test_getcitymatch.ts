import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
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
		 * @return {GetcitymatchGetByLicenseAndCityReturn} Generated similarity key for city name data
		 */
		GetcitymatchGetByLicenseAndCity(license: string, city: string, headersHandler?: () => HttpHeaders): Observable<GetcitymatchGetByLicenseAndCityReturn> {
			return this.http.get<GetcitymatchGetByLicenseAndCityReturn>(this.baseUri + 'getcitymatch?license=' + (license == null ? '' : encodeURIComponent(license)) + '&city=' + (city == null ? '' : encodeURIComponent(city)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export interface GetcitymatchGetByLicenseAndCityReturn {
		Code?: string | null;
		Credits?: string | null;
		Simkey?: string | null;
	}

}

