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
		 * Discover the hosting provider for a web site
		 * Get Detect
		 * @param {string} url The url of the page to check
		 * @return {void} Status of the detection and list of any found hosting providers
		 */
		DetectGetByUrl(url: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Detect?url=' + (url == null ? '' : encodeURIComponent(url)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * View usage details for the current billing period
		 * Get Status
		 * @return {void} Status of the detection and list of any found hosting providers
		 */
		StatusGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Status', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

