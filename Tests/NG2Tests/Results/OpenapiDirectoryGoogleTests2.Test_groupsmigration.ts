import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** JSON response template for groups migration API. */
	export interface Groups {

		/** The kind of insert resource this is. */
		kind?: string;

		/** The status of the insert request. */
		responseCode?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Inserts a new mail into the archive of the Google group.
		 * Post {groupId}/archive
		 * @param {string} groupId The group ID
		 * @return {void} Successful response
		 */
		Groupsmigration_archive_insert(groupId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (groupId == null ? '' : encodeURIComponent(groupId)) + '/archive', null, { observe: 'response', responseType: 'text' });
		}
	}

}

