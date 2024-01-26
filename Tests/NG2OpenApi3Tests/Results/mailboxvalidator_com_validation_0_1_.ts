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
		 * The Single Validation API does validation on a single email address and returns all the validation results in either JSON or XML format.
		 * Get v1/validation/single
		 * @param {V1ValidationSingleGetByFormatAndEmailAndKeyFormat} format Return the result in json (default) or xml format.
		 * @param {string} email The email address to be validated.
		 * @param {string} key API key.
		 * @return {void} single email validation response
		 */
		V1ValidationSingleGetByFormatAndEmailAndKey(format: V1ValidationSingleGetByFormatAndEmailAndKeyFormat | null | undefined, email: string, key: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/validation/single?format=' + format + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&key=' + (key == null ? '' : encodeURIComponent(key)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum V1ValidationSingleGetByFormatAndEmailAndKeyFormat { json = 'json', xml = 'xml' }

}

