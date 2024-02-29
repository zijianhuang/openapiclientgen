import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Response message includes the context and a list of matching results which contain the detail of associated entities. */
	export interface SearchResponse {

		/** The local context applicable for the response. See more details at http://www.w3.org/TR/json-ld/#context-definitions. */
		'@context'?: any;

		/** The schema type of top-level JSON-LD object, e.g. ItemList. */
		'@type'?: any;

		/** The item list of search results. */
		itemListElement?: Array<string>;
	}

	/** Response message includes the context and a list of matching results which contain the detail of associated entities. */
	export interface SearchResponseFormProperties {

		/** The local context applicable for the response. See more details at http://www.w3.org/TR/json-ld/#context-definitions. */
		'@context': FormControl<any | null | undefined>,

		/** The schema type of top-level JSON-LD object, e.g. ItemList. */
		'@type': FormControl<any | null | undefined>,
	}
	export function CreateSearchResponseFormGroup() {
		return new FormGroup<SearchResponseFormProperties>({
			'@context': new FormControl<any | null | undefined>(undefined),
			'@type': new FormControl<any | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Searches Knowledge Graph for entities that match the constraints. A list of matched entities will be returned in response, which will be in JSON-LD format and compatible with http://schema.org
		 * Get v1/entities:search
		 * @param {Array<string>} ids The list of entity id to be used for search instead of query string. To specify multiple ids in the HTTP request, repeat the parameter in the URL as in ...?ids=A&ids=B
		 * @param {boolean} indent Enables indenting of json results.
		 * @param {Array<string>} languages The list of language codes (defined in ISO 693) to run the query with, e.g. 'en'.
		 * @param {number} limit Limits the number of entities to be returned.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} prefix Enables prefix match against names and aliases of entities
		 * @param {string} query The literal query string for search.
		 * @param {Array<string>} types Restricts returned entities with these types, e.g. Person (as defined in http://schema.org/Person). If multiple types are specified, returned entities will contain one or more of these types.
		 * @return {SearchResponse} Successful response
		 */
		Kgsearch_entities_search(ids: Array<string> | null | undefined, indent: boolean | null | undefined, languages: Array<string> | null | undefined, limit: number | null | undefined, prefix: boolean | null | undefined, query: string | null | undefined, types: Array<string> | null | undefined): Observable<SearchResponse> {
			return this.http.get<SearchResponse>(this.baseUri + 'v1/entities:search?' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&indent=' + indent + '&' + languages?.map(z => `languages=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&prefix=' + prefix + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&' + types?.map(z => `types=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

}

