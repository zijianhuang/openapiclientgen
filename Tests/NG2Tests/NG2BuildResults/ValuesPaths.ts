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
		 * Get api/Values
		 * @return {Array<string>} Success
		 */
		ValuesGet(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/Values', {});
		}

		/**
		 * Post api/Values
		 * @return {string} Success
		 */
		ValuesPost(requestBody: string): Observable<string> {
			return this.http.post(this.baseUri + 'api/Values', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get api/Values/{id}
		 * @return {string} Success
		 */
		ValuesGetById(id: number): Observable<string> {
			return this.http.get(this.baseUri + 'api/Values/' + id, { responseType: 'text' });
		}

		/**
		 * Put api/Values/{id}
		 * @return {void} Success
		 */
		ValuesPutById(id: number, requestBody: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Values/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete api/Values/{id}
		 * @return {void} Success
		 */
		ValuesDeleteById(id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/Values/' + id, { observe: 'response', responseType: 'text' });
		}
	}

}

