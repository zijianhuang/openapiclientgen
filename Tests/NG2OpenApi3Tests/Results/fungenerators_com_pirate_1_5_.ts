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
		 * Generate random pirate insults.
		 * Get pirate/generate/insult
		 * @param {string} limit No of insults to generate
		 * @return {void} 200  response
		 */
		GenerationGetByLimit(limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'pirate/generate/insult?limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate pirate lorem ipsum.
		 * Get pirate/generate/lorem-ipsum
		 * @param {string} type Type of element to generate `paragraphs/sentences/words`.
		 * @param {string} limit No of elements to generate
		 * @return {void} 200  response
		 */
		GenerationGetByTypeAndLimit(type: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'pirate/generate/lorem-ipsum?type=' + (type == null ? '' : encodeURIComponent(type)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate random pirate names.
		 * Get pirate/generate/name
		 * @param {string} variation Variation to generate `male/female`.
		 * @param {string} limit No of names to generate
		 * @return {void} 200  response
		 */
		GenerationGetByVariationAndLimit(variation: string | null | undefined, limit: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'pirate/generate/name?variation=' + (variation == null ? '' : encodeURIComponent(variation)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Translate from English to pirate.
		 * Get pirate/translate
		 * @param {string} text Text to translate to pirate lingo.
		 * @return {void} 200  response
		 */
		TranslationGetByText(text: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'pirate/translate?text=' + (text == null ? '' : encodeURIComponent(text)), { observe: 'response', responseType: 'text' });
		}
	}

}

