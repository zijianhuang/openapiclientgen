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
		 * Create a random Riddle entry.
		 * Delete riddle
		 * @param {string} id Riddle ID
		 * @return {void} 200  response
		 */
		Private_RiddlesDeleteById(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'riddle?id=' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Riddle entry for a given id. Retrieves a riddle question and answer based on the id.
		 * Get riddle
		 * @param {string} id ID of the riddle to fetch
		 * @return {void} 200  response
		 */
		Private_RiddlesGetById(id: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'riddle?id=' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a random Riddle entry. Same as 'PUT' but can be used when some of the client libraries don't support 'PUT'.
		 * Post riddle
		 * @param {string} question Riddle Question
		 * @param {string} category Category of the riddle
		 * @param {string} answer Answer(s) to the riddle question
		 * @return {void} 200  response
		 */
		Private_RiddlesPostByQuestionAndCategoryAndAnswer(question: string, category: string, answer: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'riddle?question=' + (question == null ? '' : encodeURIComponent(question)) + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&answer=' + (answer == null ? '' : encodeURIComponent(answer)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a random Riddle entry.
		 * Put riddle
		 * @param {string} question Riddle Question
		 * @param {string} category Category of the riddle
		 * @param {string} answer Answer(s) to the riddle question
		 * @return {void} 200  response
		 */
		Private_RiddlesPutByQuestionAndCategoryAndAnswer(question: string, category: string, answer: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'riddle?question=' + (question == null ? '' : encodeURIComponent(question)) + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&answer=' + (answer == null ? '' : encodeURIComponent(answer)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a random riddle for a given category(optional)
		 * Get riddle/random
		 * @param {string} category Category to get the riddle from
		 * @return {void} 200  response
		 */
		Random_RiddleGetByCategory(category: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'riddle/random?category=' + (category == null ? '' : encodeURIComponent(category)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search for random riddle which has the text in the query, for a given category(optional).
		 * Get riddle/search
		 * @param {string} query Text to search for in the riddle
		 * @param {string} category Category to get the riddle from
		 * @return {void} 200  response
		 */
		Random_RiddleGetByQueryAndCategory(query: string | null | undefined, category: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'riddle/search?query=' + (query == null ? '' : encodeURIComponent(query)) + '&category=' + (category == null ? '' : encodeURIComponent(category)), { observe: 'response', responseType: 'text' });
		}
	}

}

