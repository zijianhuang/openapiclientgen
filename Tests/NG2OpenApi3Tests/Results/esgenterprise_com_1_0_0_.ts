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
		 * List all company ESG Ratings
		 * Get search
		 * @param {string} q Company name or stock symbol
		 * @return {any} An array of ESG Ratings
		 */
		RatingGetByQ(q: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search?q=' + (q == null ? '' : encodeURIComponent(q)), { observe: 'response', responseType: 'text' });
		}
	}

}

