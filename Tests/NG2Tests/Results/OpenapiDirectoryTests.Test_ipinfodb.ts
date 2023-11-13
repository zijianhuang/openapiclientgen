import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get location of an IP address
		 * Get v3/ip-city/
		 * @return {void} Get location information
		 */
		V3Ip_cityGetByIpAndFormatAndKey(ip: string, format: V3Ip_cityGetByIpAndFormatAndKeyFormat | null | undefined, key: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/ip-city/?ip=' + (ip == null ? '' : encodeURIComponent(ip)) + '&format=' + format + '&key=' + (key == null ? '' : encodeURIComponent(key)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get country of an IP address
		 * Get v3/ip-country/
		 * @return {void} Get country information
		 */
		V3Ip_countryGetByIpAndKeyAndFormat(ip: string, key: string, format: V3Ip_cityGetByIpAndFormatAndKeyFormat | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/ip-country/?ip=' + (ip == null ? '' : encodeURIComponent(ip)) + '&key=' + (key == null ? '' : encodeURIComponent(key)) + '&format=' + format, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum V3Ip_cityGetByIpAndFormatAndKeyFormat { json = 0, xml = 1 }

}

