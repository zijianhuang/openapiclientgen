import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ValidationResult {

		/** Required */
		openapi: string;
	}
	export interface ValidationResultFormProperties {

		/** Required */
		openapi: FormControl<string | null | undefined>,
	}
	export function CreateValidationResultFormGroup() {
		return new FormGroup<ValidationResultFormProperties>({
			openapi: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Return a redirect to a badge svg file depending on a source definition's validity
		 * Get badge
		 * @param {string} url The URL to retrieve the OpenAPI 3.0.x definition from
		 * @return {void} 
		 */
		GetBadge(url: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'badge?url=' + (url == null ? '' : encodeURIComponent(url)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL
		 * Get convert
		 * @param {string} url The URL to retrieve the OpenAPI 2.0 definition from
		 * @return {any} default
		 */
		ConvertUrl(url: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'convert?url=' + (url == null ? '' : encodeURIComponent(url)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the status of the API
		 * Get status
		 * @return {any} default
		 */
		GetStatus(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'status', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Validate an OpenAPI 3.0.x definition
		 * Get validate
		 * @param {string} url The URL to retrieve the OpenAPI 3.0.x definition from
		 * @return {ValidationResult} default
		 */
		ValidateUrl(url: string): Observable<ValidationResult> {
			return this.http.get<ValidationResult>(this.baseUri + 'validate?url=' + (url == null ? '' : encodeURIComponent(url)), {});
		}
	}

}

