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
		 * IP Geolocation with Confidence Area and Hazard Report API
		 * This API returns additional security hazard report in addition to confidence area and locality information.
		 * Get data/ip-geolocation-full
		 * @param {string} ip IPv4 IP address in a string or numeric format. If omitted, the caller’s IP address is assumed
		 * @param {string} localityLanguage Preferred language for locality names in ISO 639-1 format, such as 'en' for English, 'es' for Spanish etc. Please note: 147 common world languages are supported, full list here, but not all languages are available for every location. If requested language is not available for a requested location it will default to English, if no English is available, the native, local names will be provided
		 * @param {string} key Your API key
		 * @return {void} 
		 */
		IpGeolocationWithConfidenceAreaAndHazardReportApi(ip: string | null | undefined, localityLanguage: string | null | undefined, key: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'data/ip-geolocation-full?ip=' + (ip == null ? '' : encodeURIComponent(ip)) + '&localityLanguage=' + (localityLanguage == null ? '' : encodeURIComponent(localityLanguage)) + '&key=' + (key == null ? '' : encodeURIComponent(key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * IP Geolocation with Confidence Area API
		 * Returns list of geocoordinates which represents estimated geolocation confidence area.
		 * Get data/ip-geolocation-with-confidence
		 * @param {string} ip IPv4 IP address in a string or numeric format. If omitted, the caller’s IP address is assumed
		 * @param {string} localityLanguage Preferred language for locality names in ISO 639-1 format, such as 'en' for English, 'es' for Spanish etc. Please note: 147 common world languages are supported, full list here, but not all languages are available for every location. If requested language is not available for a requested location it will default to English, if no English is available, the native, local names will be provided
		 * @param {string} key Your API key
		 * @return {void} 
		 */
		IpGeolocationWithConfidenceAreaApi(ip: string | null | undefined, localityLanguage: string | null | undefined, key: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'data/ip-geolocation-with-confidence?ip=' + (ip == null ? '' : encodeURIComponent(ip)) + '&localityLanguage=' + (localityLanguage == null ? '' : encodeURIComponent(localityLanguage)) + '&key=' + (key == null ? '' : encodeURIComponent(key)), { observe: 'response', responseType: 'text' });
		}
	}

}

