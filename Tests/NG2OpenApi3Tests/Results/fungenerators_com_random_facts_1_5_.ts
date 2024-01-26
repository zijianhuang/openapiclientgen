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
		 * Delete a Fact entry identified by the id.
		 * Delete fact
		 * @param {string} id Fact ID
		 * @return {void} 200  response
		 */
		FactDeleteById(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'fact?id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Fact belonging to the id.
		 * Get fact
		 * @param {string} id ID of the fact to fetch
		 * @return {void} 200  response
		 */
		FactGetById(id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'fact?id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a Fact entry to the database (private collection).
		 * Put fact
		 * @param {string} fact Fact Text
		 * @param {string} category Category of the fact
		 * @param {string} subcategory Sub Category of the fact
		 * @param {string} tags Tags
		 * @return {void} 200  response
		 */
		FactPutByFactAndCategoryAndSubcategoryAndTags(fact: string, category: string, subcategory: string, tags: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'fact?fact=' + (fact == null ? '' : encodeURIComponent(fact)) + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&subcategory=' + (subcategory == null ? '' : encodeURIComponent(subcategory)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a random Fact.
		 * Get fact/categories
		 * @param {string} start start
		 * @return {void} 200  response
		 */
		FactCategoriesGetByStart(start: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'fact/categories?start=' + (start == null ? '' : encodeURIComponent(start)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get fact of the day for the given category.
		 * Get fact/fod
		 * @param {string} category Category to get the fact of the day from. Must be one from the list returned from /fact/fod/categories
		 * @return {void} 200  response
		 */
		FactFodGetByCategory(category: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'fact/fod?category=' + (category == null ? '' : encodeURIComponent(category)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the list of supported fact of the day categories.
		 * Get fact/fod/categories
		 * @return {void} 200  response
		 */
		FactFodCategoriesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'fact/fod/categories', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a random fact about a number
		 * Get fact/numbers
		 * @param {string} number Number value
		 * @return {void} 200 Success response
		 */
		FactNumbersGetByNumber(number: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'fact/numbers?number=' + (number == null ? '' : encodeURIComponent(number)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a random ( famous/ relatively famous ) person born on a given day and month
		 * Get fact/onthisday/born
		 * @param {string} month Optional month (1-12). Defaults to current month
		 * @param {string} day Optional day of the month (1- 28/30/31 based on the month). Defaults to current day of the month.
		 * @return {void} 200  response
		 */
		FactOnthisdayBornGetByMonthAndDay(month: string | null | undefined, day: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'fact/onthisday/born?month=' + (month == null ? '' : encodeURIComponent(month)) + '&day=' + (day == null ? '' : encodeURIComponent(day)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a random ( famous/ relatively famous ) person died on a given day and month
		 * Get fact/onthisday/died
		 * @param {string} month Optional month (1-12). Defaults to current month
		 * @param {string} day Optional day of the month (1- 28/30/31 based on the month). Defaults to current day of the month.
		 * @return {void} 200  response
		 */
		FactOnthisdayDiedGetByMonthAndDay(month: string | null | undefined, day: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'fact/onthisday/died?month=' + (month == null ? '' : encodeURIComponent(month)) + '&day=' + (day == null ? '' : encodeURIComponent(day)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a random ( famous/ relatively famous ) historic event on a given day and month
		 * Get fact/onthisday/event
		 * @param {string} month Optional month (1-12). Defaults to current month
		 * @param {string} day Optional day of the month (1- 28/30/31 based on the month). Defaults to current day of the month.
		 * @return {void} 200  response
		 */
		FactOnthisdayEventGetByMonthAndDay(month: string | null | undefined, day: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'fact/onthisday/event?month=' + (month == null ? '' : encodeURIComponent(month)) + '&day=' + (day == null ? '' : encodeURIComponent(day)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a random Fact for a given category(optional) and subcategory(optional).
		 * Get fact/random
		 * @param {string} category Category to get the fact from
		 * @param {string} subcategory Sub Category to get the fact from
		 * @return {void} 200  response
		 */
		FactRandomGetByCategoryAndSubcategory(category: string | null | undefined, subcategory: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'fact/random?category=' + (category == null ? '' : encodeURIComponent(category)) + '&subcategory=' + (subcategory == null ? '' : encodeURIComponent(subcategory)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search for random Fact which has the text in the query, for a given category(optional) and subcategory(optional).
		 * Get fact/search
		 * @param {string} query Text to search for in the facts
		 * @param {string} category Category to get the fact from
		 * @param {string} subcategory Sub Category to get the fact from
		 * @return {void} 200  response
		 */
		FactSearchGetByQueryAndCategoryAndSubcategory(query: string | null | undefined, category: string | null | undefined, subcategory: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'fact/search?query=' + (query == null ? '' : encodeURIComponent(query)) + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&subcategory=' + (subcategory == null ? '' : encodeURIComponent(subcategory)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

