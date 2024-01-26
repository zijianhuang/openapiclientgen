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
		 * Geolocate user's location information via IP address
		 * Get 
		 * @param {string} key API key.
		 * @param {string} ip IP address (IPv4 or IPv6) for reverse IP location lookup purposes. If not present, the server IP address will be used for the location lookup.
		 * @param {GetByKeyAndIpAndFormatAndLangFormat} format Format of the response message.
		 * @param {GetByKeyAndIpAndFormatAndLangLang} lang Translation information. The translation only applicable for continent, country, region and city name. This parameter is only available for Plus and Security plan only.
		 * @return {void} Get response from IP lookup
		 */
		GetByKeyAndIpAndFormatAndLang(key: string, ip: string, format: GetByKeyAndIpAndFormatAndLangFormat | null | undefined, lang: GetByKeyAndIpAndFormatAndLangLang | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '?key=' + (key == null ? '' : encodeURIComponent(key)) + '&ip=' + (ip == null ? '' : encodeURIComponent(ip)) + '&format=' + format + '&lang=' + lang, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum GetByKeyAndIpAndFormatAndLangFormat { json = 'json', xml = 'xml' }

	export enum GetByKeyAndIpAndFormatAndLangLang { ar = 'ar', cs = 'cs', da = 'da', de = 'de', en = 'en', es = 'es', et = 'et', fi = 'fi', fr = 'fr', ga = 'ga', it = 'it', ja = 'ja', ko = 'ko', ms = 'ms', nl = 'nl', pt = 'pt', ru = 'ru', sv = 'sv', tr = 'tr', vi = 'vi', 'zh-cn' = 'zh-cn', 'zh-tw' = 'zh-tw' }

}

