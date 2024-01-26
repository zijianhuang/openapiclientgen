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
		 * The Disposable Email Checker API does checking on a single email address and returns if it is from a disposable email provider in either JSON or XML format.
		 * Get v1/email/disposable
		 * @param {V1EmailDisposableGetByFormatAndEmailAndKeyFormat} format Return the result in json (default) or xml format.
		 * @param {string} email The email address to check if is from a disposable email provider.
		 * @param {string} key API key.
		 * @return {void} disposable email checker response
		 */
		V1EmailDisposableGetByFormatAndEmailAndKey(format: V1EmailDisposableGetByFormatAndEmailAndKeyFormat | null | undefined, email: string, key: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/email/disposable?format=' + format + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&key=' + (key == null ? '' : encodeURIComponent(key)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum V1EmailDisposableGetByFormatAndEmailAndKeyFormat { json = 'json', xml = 'xml' }

}

