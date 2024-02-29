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
		 * Return a list of coming hackathons
		 * Get hackathons/coming.json
		 * @param {number} page Specify the page of coming hackathons.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} No response was specified
		 */
		GET_hackathons_coming___format_(page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hackathons/coming.json?page=' + page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return the detail of a given hackathon
		 * Get hackathons/{id}.json
		 * @param {number} id ID of the hackathon for detail information
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} No response was specified
		 */
		GET_hackathons__id___format_(id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hackathons/' + id + '.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Swagger compatible API description
		 * Get swagger_doc.json
		 * @return {void} No response was specified
		 */
		GET_swagger_doc___format_(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'swagger_doc.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Swagger compatible API description for specific API
		 * Get swagger_doc/{name}.json
		 * @param {string} name Resource name of mounted API
		 * @return {void} No response was specified
		 */
		GET_swagger_doc__name___format_(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'swagger_doc/' + (name == null ? '' : encodeURIComponent(name)) + '.json', { observe: 'response', responseType: 'text' });
		}
	}

}

