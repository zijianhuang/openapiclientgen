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
		 * The Free Email Checker API does validation on a single email address and returns if it is from a free email provider in either JSON or XML format.
		 * Get v1/email/free
		 * @param {V1EmailFreeGetByFormatAndEmailAndKeyFormat} format Return the result in json (default) or xml format.
		 * @param {string} email The email address to check if is from a free email provider.
		 * @param {string} key API key.
		 * @return {void} free email checker response
		 */
		V1EmailFreeGetByFormatAndEmailAndKey(format: V1EmailFreeGetByFormatAndEmailAndKeyFormat | null | undefined, email: string, key: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/email/free?format=' + format + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&key=' + (key == null ? '' : encodeURIComponent(key)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum V1EmailFreeGetByFormatAndEmailAndKeyFormat { json = 'json', xml = 'xml' }

}

