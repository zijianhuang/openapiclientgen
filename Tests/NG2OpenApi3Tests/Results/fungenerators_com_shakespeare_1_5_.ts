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
		 * Generate random Shakespeare style insults.
		 * Get shakespeare/generate/insult
		 * @param {string} limit No of insults to generate
		 * @return {void} 200  response
		 */
		GenerationGetByLimit(limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shakespeare/generate/insult?limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate Shakespeare lorem ipsum.
		 * Get shakespeare/generate/lorem-ipsum
		 * @param {string} type Type of element to generate `paragraphs/sentences/words`.
		 * @param {string} limit No of elements to generate
		 * @return {void} 200  response
		 */
		GenerationGetByTypeAndLimit(type: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shakespeare/generate/lorem-ipsum?type=' + (type == null ? '' : encodeURIComponent(type)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate random Shakespearen names.
		 * Get shakespeare/generate/name
		 * @param {string} variation Variation to generate `male/female`.
		 * @param {string} limit No of names to generate
		 * @return {void} 200  response
		 */
		GenerationGetByVariationAndLimit(variation: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shakespeare/generate/name?variation=' + (variation == null ? '' : encodeURIComponent(variation)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a random Shakespeare quote.
		 * Get shakespeare/quote
		 * @return {void} 200  response
		 */
		WorksGet(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shakespeare/quote', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate from English to Shakespeare English.
		 * Get shakespeare/translate
		 * @param {string} text Text to translate to Shakespeare English.
		 * @return {void} 200  response
		 */
		TranslationGetByText(text: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'shakespeare/translate?text=' + (text == null ? '' : encodeURIComponent(text)), { observe: 'response', responseType: 'text' });
		}
	}

}

