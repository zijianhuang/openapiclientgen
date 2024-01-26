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
		 * DELETE
		 * Proxies a downstream DELETE request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
		 * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
		 * Delete proxy
		 * @return {any} Ok
		 */
		DeleteProxy(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'proxy', { observe: 'response', responseType: 'text' });
		}

		/**
		 * GET
		 * Proxies a downstream GET request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
		 * **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.
		 * Get proxy
		 * @return {any} Ok
		 */
		GetProxy(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'proxy', { observe: 'response', responseType: 'text' });
		}
	}

}

