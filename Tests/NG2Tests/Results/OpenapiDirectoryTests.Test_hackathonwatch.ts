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
		 * @return {void} No response was specified
		 */
		HackathonsComing_jsonGetByPage(page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hackathons/coming.json?page=' + page, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return the detail of a given hackathon
		 * Get hackathons/{id}.json
		 * @param {number} id ID of the hackathon for detail information
		 * @return {void} No response was specified
		 */
		Hackathons_id_jsonGet(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hackathons/' + id + '.json', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Swagger compatible API description
		 * Get swagger_doc.json
		 * @return {void} No response was specified
		 */
		Swagger_doc_jsonGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'swagger_doc.json', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Swagger compatible API description for specific API
		 * Get swagger_doc/{name}.json
		 * @param {string} name Resource name of mounted API
		 * @return {void} No response was specified
		 */
		Swagger_doc_name_jsonGet(name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'swagger_doc/' + (name == null ? '' : encodeURIComponent(name)) + '.json', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

