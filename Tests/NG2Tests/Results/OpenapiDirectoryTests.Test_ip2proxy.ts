import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Check if an IP address is proxy
		 * Get 
		 * @param {string} _package If not present, the web service will assume the PX1 package query.
		 * @param {string} ip IP address (IPv4) for lookup purpose. If not present, the server IP address will be used for the lookup.
		 * @param {GetBy_packageAndIpAndFormatAndKeyFormat} format If not present, json format will be returned as the search result.
		 * @param {string} key API key.
		 * @return {void} Get response from IP2Proxy
		 */
		GetBy_packageAndIpAndFormatAndKey(_package: string, ip: string, format: GetBy_packageAndIpAndFormatAndKeyFormat, key: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '?_package=' + (_package == null ? '' : encodeURIComponent(_package)) + '&ip=' + (ip == null ? '' : encodeURIComponent(ip)) + '&format=' + format + '&key=' + (key == null ? '' : encodeURIComponent(key)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum GetBy_packageAndIpAndFormatAndKeyFormat { json = 0, xml = 1 }

}

