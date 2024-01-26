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
		 * Generate a random UUID (v4).
		 * Get uuid
		 * @param {string} count Number of UUID's to generate (defaults to 1)
		 * @return {void} 200  response
		 */
		UUID_GenerationGetByCount(count: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'uuid?count=' + (count == null ? '' : encodeURIComponent(count)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Parse a UUID string and return its version and check whether it is valid.
		 * Post uuid
		 * @param {string} uuidstr UUID String to parse
		 * @return {void} 200  response
		 */
		UUID_ParsingPostByUuidstr(uuidstr: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'uuid?uuidstr=' + (uuidstr == null ? '' : encodeURIComponent(uuidstr)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate a random UUID (v4).
		 * Get uuid/version/{version}
		 * @param {string} count Number of UUID's to generate (defaults to 1)
		 * @param {string} version Version of the UUID spec to use. (0-5), Use '0' for nil (00000000-0000-0000-0000-000000000000) UUID.
		 * @param {string} type For v3 and v5 of UUID Spec you can supply the type (dns/url/oid/x500/nil).
		 * @param {string} text For v3 and v5 of UUID Spec supply the text value for the type specified dns/url/oid/x500/nil. For example specify a dns/domain string if the type is "dns"
		 * @return {void} 200  response
		 */
		UUID_GenerationGetByCountAndVersionAndTypeAndText(count: string | null | undefined, version: string, type: string | null | undefined, text: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'uuid/version/' + (version == null ? '' : encodeURIComponent(version)) + '?count=' + (count == null ? '' : encodeURIComponent(count)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&text=' + (text == null ? '' : encodeURIComponent(text)), { observe: 'response', responseType: 'text' });
		}
	}

}

