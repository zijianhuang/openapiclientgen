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
		 * Returns Analytics report data for a view (profile).
		 * Get data
		 * @param {string} ids Unique table ID for retrieving report data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
		 * @param {string} start_date Start date for fetching report data. All requests should specify a start date formatted as YYYY-MM-DD.
		 * @param {string} end_date End date for fetching report data. All requests should specify an end date formatted as YYYY-MM-DD.
		 * @param {string} metrics A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified to retrieve a valid Analytics report.
		 * @param {string} dimensions A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
		 * @param {string} filters A comma-separated list of dimension or metric filters to be applied to the report data.
		 * @param {number} max_results The maximum number of entries to include in this feed.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} segment An Analytics advanced segment to be applied to the report data.
		 * @param {string} sort A comma-separated list of dimensions or metrics that determine the sort order for the report data.
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 *     Minimum: 1
		 * @return {void} Successful response
		 */
		Analytics_data_get(ids: string, start_date: string, end_date: string, metrics: string, dimensions: string | null | undefined, filters: string | null | undefined, max_results: number | null | undefined, segment: string | null | undefined, sort: string | null | undefined, start_index: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'data?ids=' + (ids == null ? '' : encodeURIComponent(ids)) + '&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&metrics=' + (metrics == null ? '' : encodeURIComponent(metrics)) + '&dimensions=' + (dimensions == null ? '' : encodeURIComponent(dimensions)) + '&filters=' + (filters == null ? '' : encodeURIComponent(filters)) + '&max_results=' + max_results + '&segment=' + (segment == null ? '' : encodeURIComponent(segment)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all accounts to which the user has access.
		 * Get management/accounts
		 * @param {number} max_results The maximum number of accounts to include in this response.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} start_index An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 *     Minimum: 1
		 * @return {void} Successful response
		 */
		Analytics_management_accounts_list(max_results: number | null | undefined, start_index: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts?max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists web properties to which the user has access.
		 * Get management/accounts/{accountId}/webproperties
		 * @param {string} accountId Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
		 * @param {number} max_results The maximum number of web properties to include in this response.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 *     Minimum: 1
		 * @return {void} Successful response
		 */
		Analytics_management_webproperties_list(accountId: string, max_results: number | null | undefined, start_index: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties&max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists views (profiles) to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles
		 * @param {string} accountId Account ID for the views (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
		 * @param {string} webPropertyId Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
		 * @param {number} max_results The maximum number of views (profiles) to include in this response.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} start_index An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 *     Minimum: 1
		 * @return {void} Successful response
		 */
		Analytics_management_profiles_list(accountId: string, webPropertyId: string, max_results: number | null | undefined, start_index: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles&max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists goals to which the user has access.
		 * Get management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals
		 * @param {string} accountId Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
		 * @param {string} webPropertyId Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
		 * @param {string} profileId View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
		 * @param {number} max_results The maximum number of goals to include in this response.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} start_index An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 *     Minimum: 1
		 * @return {void} Successful response
		 */
		Analytics_management_goals_list(accountId: string, webPropertyId: string, profileId: string, max_results: number | null | undefined, start_index: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/webproperties/' + (webPropertyId == null ? '' : encodeURIComponent(webPropertyId)) + '/profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/goals&max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists advanced segments to which the user has access.
		 * Get management/segments
		 * @param {number} max_results The maximum number of advanced segments to include in this response.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} start_index An index of the first advanced segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
		 *     Minimum: 1
		 * @return {void} Successful response
		 */
		Analytics_management_segments_list(max_results: number | null | undefined, start_index: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'management/segments?max_results=' + max_results + '&start_index=' + start_index, { observe: 'response', responseType: 'text' });
		}
	}

}

