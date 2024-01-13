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
		 * View the facet information corresponding to a search
		 * In the NSIDC Search and Arctic Data Explorer interfaces, this endpoint is used in conjunction with /OpenSearch whenever a user submits a new search. Consequently, it has the same parameters as /OpenSearch.
		 * Get Facets
		 * @param {string} searchTerms URL-encoded keyword or keywords desired by the client; OpenSearch 1.1
		 * @param {number} count The number of search results per page desired by the client; OpenSearch 1.1
		 * @param {number} startIndex First search result desired by the search client; OpenSearch 1.1
		 * @param {string} spatial 4 comma separated values - W, S, E, N; OpenSearch-Geo 1.0, "box" parameter
		 * @param {FacetsSortKeys} sortKeys Sort the results by most relevant (default), smallest or largest spatial area, shortest or longest temporal duration, or most recently updated; partial implementation of OpenSearch SRU 1.0
		 * @param {Date} startDate The start date in yyyy-mm-dd format
		 * @param {Date} endDate The end date in yyyy-mm-dd format
		 * @param {string} facetFilters Describes faceted restrictions on the search. A URL-encoded JSON object where the keys are the names of the facet, and the values are arrays of the selected facet values
		 * @param {FacetsSource} source Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC
		 * @return {void} OK
		 */
		Facets(searchTerms: string | null | undefined, count: number | null | undefined, startIndex: number | null | undefined, spatial: string | null | undefined, sortKeys: FacetsSortKeys | null | undefined, startDate: Date | null | undefined, endDate: Date | null | undefined, facetFilters: string | null | undefined, source: FacetsSource | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Facets?searchTerms=' + (searchTerms == null ? '' : encodeURIComponent(searchTerms)) + '&count=' + count + '&startIndex=' + startIndex + '&spatial=' + (spatial == null ? '' : encodeURIComponent(spatial)) + '&sortKeys=' + sortKeys + '&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&facetFilters=' + (facetFilters == null ? '' : encodeURIComponent(facetFilters)) + '&source=' + source, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Search documents using the OpenSearch 1.1 Specification
		 * This endpoint uses parameters from the OpenSearch 1.1 specification, as well as parameters from the OpenSearch Geo (1.0) and SRU (1.0) extensions.
		 * Get OpenSearch
		 * @param {string} searchTerms URL-encoded keyword or keywords desired by the client; OpenSearch 1.1
		 * @param {number} count The number of search results per page desired by the client; OpenSearch 1.1
		 * @param {number} startIndex First search result desired by the search client; OpenSearch 1.1
		 * @param {string} spatial 4 comma separated values - W, S, E, N; OpenSearch-Geo 1.0, "box" parameter
		 * @param {Open_searchSortKeys} sortKeys Sort the results by most relevant (default), smallest or largest spatial area, shortest or longest temporal duration, or most recently updated; partial implementation of OpenSearch SRU 1.0
		 * @param {Date} startDate The start date in yyyy-mm-dd format
		 * @param {Date} endDate The end date in yyyy-mm-dd format
		 * @param {string} facetFilters Describes faceted restrictions on the search. A URL-encoded JSON object where the keys are the names of the facet, and the values are arrays of the selected facet values
		 * @param {FacetsSource} source Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC
		 * @return {void} OK
		 */
		Open_search(searchTerms: string | null | undefined, count: number | null | undefined, startIndex: number | null | undefined, spatial: string | null | undefined, sortKeys: Open_searchSortKeys | null | undefined, startDate: Date | null | undefined, endDate: Date | null | undefined, facetFilters: string | null | undefined, source: FacetsSource | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'OpenSearch?searchTerms=' + (searchTerms == null ? '' : encodeURIComponent(searchTerms)) + '&count=' + count + '&startIndex=' + startIndex + '&spatial=' + (spatial == null ? '' : encodeURIComponent(spatial)) + '&sortKeys=' + sortKeys + '&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&facetFilters=' + (facetFilters == null ? '' : encodeURIComponent(facetFilters)) + '&source=' + source, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the web interface of NSIDC's data search engine
		 * Get OpenSearchDescription
		 * @return {void} Success
		 */
		Opensearch_description(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'OpenSearchDescription', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Suggest search terms based on a partial query
		 * In NSIDC Search and the Arctic Data Explorer, this endpoint is queried whenever the user types into the search terms box, and the returned suggestions are displayed in a dropdown beneath the search terms box. The q parameter and returned JSON follow the specifications of the OpenSearch Suggestions 1.0 extension.
		 * Get suggest
		 * @param {string} q Search terms typed into the interface (minimum two characters)
		 * @param {FacetsSource} source Custom parameter for selecting which source to use; the Arctic Data Explorer (ADE) uses data aggregated from many sources, including, but not limited to, NSIDC
		 * @return {void} OK
		 */
		Id(q: string, source: FacetsSource): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'suggest?q=' + (q == null ? '' : encodeURIComponent(q)) + '&source=' + source, { observe: 'response', responseType: 'text' });
		}
	}

	export enum FacetsSortKeys { 'score,,desc' = 0, 'spatial_area,,asc' = 1, 'spatial_area,,desc' = 2, 'temporal_duration,,asc' = 3, 'temporal_duration,,desc' = 4, 'updated,,desc' = 5 }

	export enum FacetsSource { NSIDC = 0, ADE = 1 }

	export enum Open_searchSortKeys { 'score,,desc' = 0, 'spatial_area,,asc' = 1, 'spatial_area,,desc' = 2, 'temporal_duration,,asc' = 3, 'temporal_duration,,desc' = 4, 'updated,,desc' = 5 }

}

