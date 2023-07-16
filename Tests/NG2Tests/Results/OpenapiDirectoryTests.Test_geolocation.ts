import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get geolocation information via IP address
		 * Get 
		 * @param {string} _package Web service package of different granularity of return information.
		 * @param {GetBy_packageAndAddonAndIpAndFormatAndLangAndKeyAddon} addon Extra information in addition to the above selected package.
		 * @param {string} ip IP address (IPv4 or IPv6) for reverse IP location lookup purpose. If not present, the server IP address will be used for the location lookup.
		 * @param {GetBy_packageAndAddonAndIpAndFormatAndLangAndKeyFormat} format Format of the response message.
		 * @param {GetBy_packageAndAddonAndIpAndFormatAndLangAndKeyLang} lang Translation information. The translation only applicable for continent, country, region and city name for the addon package.
		 * @param {string} key API Key.
		 * @return {void} Get response from IP lookup
		 */
		GetBy_packageAndAddonAndIpAndFormatAndLangAndKey(_package: string, addon: GetBy_packageAndAddonAndIpAndFormatAndLangAndKeyAddon, ip: string, format: GetBy_packageAndAddonAndIpAndFormatAndLangAndKeyFormat, lang: GetBy_packageAndAddonAndIpAndFormatAndLangAndKeyLang, key: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '?_package=' + (_package == null ? '' : encodeURIComponent(_package)) + '&addon=' + addon + '&ip=' + (ip == null ? '' : encodeURIComponent(ip)) + '&format=' + format + '&lang=' + lang + '&key=' + (key == null ? '' : encodeURIComponent(key)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum GetBy_packageAndAddonAndIpAndFormatAndLangAndKeyAddon { continent = 0, country = 1, region = 2, city = 3, geotargeting = 4, country_groupings = 5, time_zone_info = 6 }

	export enum GetBy_packageAndAddonAndIpAndFormatAndLangAndKeyFormat { json = 0, xml = 1 }

	export enum GetBy_packageAndAddonAndIpAndFormatAndLangAndKeyLang { ar = 0, cs = 1, da = 2, de = 3, en = 4, es = 5, et = 6, fi = 7, fr = 8, ga = 9, it = 10, ja = 11, ko = 12, ms = 13, nl = 14, pt = 15, ru = 16, sv = 17, tr = 18, vi = 19, zh_cn = 20, zh_tw = 21 }

}

