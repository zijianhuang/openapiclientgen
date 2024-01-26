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
		 * Generate a PDF from HTML or URL.
		 * Post make-pdf
		 * @param {Make_pdfPostPostBody} requestBody Pass the API key from easypdfserver.com and either HTML or URL to generate your PDF.
		 * @return {void} Your PDF file
		 */
		Make_pdfPost(requestBody: Make_pdfPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'make-pdf', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

	export interface Make_pdfPostPostBody {
		html?: string | null;

		/** Required */
		key: string;
		url?: string | null;
	}
	export interface Make_pdfPostPostBodyFormProperties {
		html: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateMake_pdfPostPostBodyFormGroup() {
		return new FormGroup<Make_pdfPostPostBodyFormProperties>({
			html: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

}

