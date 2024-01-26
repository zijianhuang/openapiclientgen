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
		 * Retrieves the latest news whose content contains the query string.
		 * Get ai/news
		 * @param {string} query Used to query news articles on their title and body. For example, ?query=apple will return news stories that have 'apple' in their title or body.
		 * @return {void} OK
		 */
		GetNews(query: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ai/news?query=' + (query == null ? '' : encodeURIComponent(query)), { observe: 'response', responseType: 'text' });
		}
	}

}

