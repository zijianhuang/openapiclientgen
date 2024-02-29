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
		 * Compile New Document PDF
		 * Compile a PDF document from a specific template
		 * Post templates/{template_token}/compile
		 * @param {number} doc_url_expires_in The doc-url-expires-in is a numerical parameter which takes integers and describes after how many seconds the provided URL is available to download the document.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {CompileLatex_compiler} latex_compiler The latex-compiler parameter can take the following values:  pdflatex lualatex
		 * @param {number} latex_runs  The latex-runs is a numerical parameter and can take values of 1, 2 and 3. 
		 *     Minimum: 1    Maximum: 3
		 * @param {string} main_file_name The main-file-name is a string parameter which identifies the main file to compile.
		 * @param {string} doc_file_name The doc-file-name is a string parameter which determines the name of the file. Note that the extension of the file is not required.
		 * @param {string} requestBody Post the dynamic data for the template to compile the document PDF.
		 * @return {string} Document Status URL Created
		 */
		Compile(doc_url_expires_in: number | null | undefined, latex_compiler: CompileLatex_compiler | null | undefined, latex_runs : number | null | undefined, main_file_name: string | null | undefined, doc_file_name: string | null | undefined, requestBody: string): Observable<string> {
			return this.http.post(this.baseUri + 'templates/{template_token}/compile?doc_url_expires_in=' + doc_url_expires_in + '&latex_compiler=' + latex_compiler + '&latex_runs =' + latex_runs  + '&main_file_name=' + (main_file_name == null ? '' : encodeURIComponent(main_file_name)) + '&doc_file_name=' + (doc_file_name == null ? '' : encodeURIComponent(doc_file_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}
	}

	export enum CompileLatex_compiler { pdflatex = 'pdflatex', lualatex = 'lualatex' }

}

