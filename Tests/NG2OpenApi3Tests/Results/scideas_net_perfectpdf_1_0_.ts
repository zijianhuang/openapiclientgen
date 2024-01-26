import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Inline_response_200 {
	}
	export interface Inline_response_200FormProperties {
	}
	export function CreateInline_response_200FormGroup() {
		return new FormGroup<Inline_response_200FormProperties>({
		});

	}

	export interface Perfectpdf_api_body {

		/**
		 * api key
		 * Required
		 */
		api_key: string;

		/**
		 * html/css markup
		 * Required
		 */
		html: string;
	}
	export interface Perfectpdf_api_bodyFormProperties {

		/**
		 * api key
		 * Required
		 */
		api_key: FormControl<string | null | undefined>,

		/**
		 * html/css markup
		 * Required
		 */
		html: FormControl<string | null | undefined>,
	}
	export function CreatePerfectpdf_api_bodyFormGroup() {
		return new FormGroup<Perfectpdf_api_bodyFormProperties>({
			api_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			html: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns PDF document.
		 * Post perfectpdf/api
		 * @return {void} Either a PDF document or an error message
		 */
		PerfectpdfApiPost(requestBody: Perfectpdf_api_body, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'perfectpdf/api', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

}

