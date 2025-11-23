import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable({ providedIn: 'root' })
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = window.location.origin + '/', private http: HttpClient) {
		}

		/**
		 * Get {address}
		 * @return {any} OK
		 */
		_addressGet(address: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (address == null ? '' : encodeURIComponent(address)) + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

