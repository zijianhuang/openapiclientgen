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
		 * Get geolocation information via IP address
		 * Get 
		 * @param {GetBy_packageAndAddonAndIpAndFormatAndLangAndKeyPackage} _package Web service package of different granularity of return information.
		 * @param {Array<string>} addon Extra information in addition to the above selected package.
		 * @param {string} ip IP address (IPv4 or IPv6) for reverse IP location lookup purpose. If not present, the server IP address will be used for the location lookup.
		 * @param {GetBy_packageAndAddonAndIpAndFormatAndLangAndKeyFormat} format Format of the response message.
		 * @param {GetBy_packageAndAddonAndIpAndFormatAndLangAndKeyLang} lang Translation information. The translation only applicable for continent, country, region and city name for the addon package.
		 * @param {string} key API Key. Please sign up free trial license key at ip2location.com
		 * @return {void} Get response from IP lookup
		 */
		GetBy_packageAndAddonAndIpAndFormatAndLangAndKey(_package: GetBy_packageAndAddonAndIpAndFormatAndLangAndKeyPackage | null | undefined, addon: Array<string> | null | undefined, ip: string, format: GetBy_packageAndAddonAndIpAndFormatAndLangAndKeyFormat | null | undefined, lang: GetBy_packageAndAddonAndIpAndFormatAndLangAndKeyLang | null | undefined, key: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '?_package=' + _package + '&' + addon?.map(z => `addon=${encodeURIComponent(z)}`).join('&') + '&ip=' + (ip == null ? '' : encodeURIComponent(ip)) + '&format=' + format + '&lang=' + lang + '&key=' + (key == null ? '' : encodeURIComponent(key)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum GetBy_packageAndAddonAndIpAndFormatAndLangAndKeyPackage { WS1 = 'WS1', WS2 = 'WS2', WS3 = 'WS3', WS4 = 'WS4', WS5 = 'WS5', WS6 = 'WS6', WS7 = 'WS7', WS8 = 'WS8', WS9 = 'WS9', WS10 = 'WS10', WS11 = 'WS11', WS12 = 'WS12', WS13 = 'WS13', WS14 = 'WS14', WS15 = 'WS15', WS16 = 'WS16', WS17 = 'WS17', WS18 = 'WS18', WS19 = 'WS19', WS20 = 'WS20', WS21 = 'WS21', WS22 = 'WS22', WS23 = 'WS23', WS24 = 'WS24', WS25 = 'WS25' }

	export enum GetBy_packageAndAddonAndIpAndFormatAndLangAndKeyFormat { json = 'json', xml = 'xml' }

	export enum GetBy_packageAndAddonAndIpAndFormatAndLangAndKeyLang { ar = 'ar', cs = 'cs', da = 'da', de = 'de', en = 'en', es = 'es', et = 'et', fi = 'fi', fr = 'fr', ga = 'ga', it = 'it', ja = 'ja', ko = 'ko', ms = 'ms', nl = 'nl', pt = 'pt', ru = 'ru', sv = 'sv', tr = 'tr', vi = 'vi', 'zh-cn' = 'zh-cn', 'zh-tw' = 'zh-tw' }

}

