import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * OpenSearch description document
		 * Get description
		 * @return {void} Open Search Description
		 */
		DescriptionGet(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'description', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search results
		 * Get query
		 * @return {void} Search results
		 */
		QueryGetByQAndStartAndCount(q: string, start: number | null | undefined, count: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'query?q=' + (q == null ? '' : encodeURIComponent(q)) + '&start=' + start + '&count=' + count, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search results
		 * Get query.{extension}
		 * @param {QueryGetByExtensionAndQAndStartAndCountExtension} extension extension
		 * @return {void} Search results
		 */
		QueryGetByExtensionAndQAndStartAndCount(extension: QueryGetByExtensionAndQAndStartAndCountExtension, q: string, start: number | null | undefined, count: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'query.' + extension + '?q=' + (q == null ? '' : encodeURIComponent(q)) + '&start=' + start + '&count=' + count, { observe: 'response', responseType: 'text' });
		}
	}

	export enum QueryGetByExtensionAndQAndStartAndCountExtension { atom = 0, rss = 1, html = 2, json = 3 }

}

