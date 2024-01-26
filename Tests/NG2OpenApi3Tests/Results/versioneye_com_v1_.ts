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
		 * Retrieves all scans
		 * Get api/v1/scans
		 * @return {void} scans found
		 */
		ScansGetByNameAndPer_page(name: string | null | undefined, per_page: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/scans?name=' + (name == null ? '' : encodeURIComponent(name)) + '&per_page=' + (per_page == null ? '' : encodeURIComponent(per_page)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a project scan result
		 * Get api/v1/scans/{id}
		 * @return {void} scan found
		 */
		ScansGetById(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/scans/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a file object, containing information about dependencies in the file
		 * Get api/v1/scans/{id}/files/{file_id}
		 * @return {void} file found
		 */
		ScansGetByIdAndFile_idAndPer_page(id: string, file_id: string, per_page: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/scans/' + (id == null ? '' : encodeURIComponent(id)) + '/files/' + (file_id == null ? '' : encodeURIComponent(file_id)) + '&per_page=' + (per_page == null ? '' : encodeURIComponent(per_page)), { observe: 'response', responseType: 'text' });
		}
	}

}

