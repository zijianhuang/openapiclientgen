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
		 * Lookup WHOIS information
		 * Get 
		 * @param {string} domain Domain name for lookup purpose.
		 * @param {string} key API key.
		 * @param {string} format Returns the API response in json (default) or xml format.
		 * @return {void} Get response from IP2WHOIS
		 */
		GetByDomainAndKeyAndFormat(domain: string, key: string, format: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&key=' + (key == null ? '' : encodeURIComponent(key)) + '&format=' + (format == null ? '' : encodeURIComponent(format)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}
