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
		 * @param {number} start Type: double
		 * @param {number} count Type: double
		 * @return {void} Search results
		 */
		QueryGetByQAndStartAndCountAndSubdomainsAndInUrlPrefixes(q: string, start: number | null | undefined, count: number | null | undefined, subdomains: string | null | undefined, inUrlPrefixes: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'query?q=' + (q == null ? '' : encodeURIComponent(q)) + '&start=' + start + '&count=' + count + '&subdomains=' + (subdomains == null ? '' : encodeURIComponent(subdomains)) + '&inUrlPrefixes=' + (inUrlPrefixes == null ? '' : encodeURIComponent(inUrlPrefixes)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search results
		 * Get query.{extension}
		 * @param {QueryGetByExtensionAndQAndStartAndCountAndSubdomainsAndInUrlPrefixesExtension} extension extension
		 * @param {number} start Type: double
		 * @param {number} count Type: double
		 * @return {void} Search results
		 */
		QueryGetByExtensionAndQAndStartAndCountAndSubdomainsAndInUrlPrefixes(extension: QueryGetByExtensionAndQAndStartAndCountAndSubdomainsAndInUrlPrefixesExtension, q: string, start: number | null | undefined, count: number | null | undefined, subdomains: string | null | undefined, inUrlPrefixes: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'query.' + extension + '?q=' + (q == null ? '' : encodeURIComponent(q)) + '&start=' + start + '&count=' + count + '&subdomains=' + (subdomains == null ? '' : encodeURIComponent(subdomains)) + '&inUrlPrefixes=' + (inUrlPrefixes == null ? '' : encodeURIComponent(inUrlPrefixes)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum QueryGetByExtensionAndQAndStartAndCountAndSubdomainsAndInUrlPrefixesExtension { atom = 'atom', rss = 'rss', html = 'html', json = 'json' }

}

