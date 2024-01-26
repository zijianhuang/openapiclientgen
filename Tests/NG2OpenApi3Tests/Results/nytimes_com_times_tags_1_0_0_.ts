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
		 * Get timestags
		 * @param {string} query Your search query
		 * @param {TimestagsGetByQueryAndFilterAndMaxFilter} filter If you do not specify a value for filter (see the Optional Parameters), your query will be matched to tags in all four Times dictionaries: subject, geographic location, organization and person. To use more than one, separate with commas.
		 * @param {number} max Sets the maximum number of results
		 * @return {Array<string>} An array of tags
		 */
		TimestagsGetByQueryAndFilterAndMax(query: string, filter: TimestagsGetByQueryAndFilterAndMaxFilter | null | undefined, max: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'timestags?query=' + (query == null ? '' : encodeURIComponent(query)) + '&filter=' + filter + '&max=' + max, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export enum TimestagsGetByQueryAndFilterAndMaxFilter { Des = 'Des', Geo = 'Geo', Org = 'Org', Per = 'Per' }

}

