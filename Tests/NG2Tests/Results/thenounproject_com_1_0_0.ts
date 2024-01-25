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
		 * Get collection by id
		 * Returns a single collection
		 * Get collection/{id}
		 * @param {number} id Collection id
		 * @return {void} No response was specified
		 */
		GetCollectionById(id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'collection/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get collection icons by id
		 * Returns a list of icons associated with a collection
		 * Get collection/{id}/icons
		 * @param {number} id Collection id
		 * @param {number} limit Maximum number of results
		 * @param {number} offset Number of results to displace or skip over
		 * @param {number} page Number of results of limit length to displace or skip over
		 * @return {void} No response was specified
		 */
		GetCollectionIconsById(id: number, limit: number | null | undefined, offset: number | null | undefined, page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'collection/' + id + '/icons?limit=' + limit + '&offset=' + offset + '&page=' + page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get collection by slug
		 * Returns a single collection
		 * Get collection/{slug}
		 * @param {string} slug Collection slug
		 * @return {void} No response was specified
		 */
		GetCollectionBySlug(slug: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'collection/' + (slug == null ? '' : encodeURIComponent(slug)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get collection icons by slug
		 * Returns a list of icons associated with a collection
		 * Get collection/{slug}/icons
		 * @param {string} slug Collection slug
		 * @param {number} limit Maximum number of results
		 * @param {number} offset Number of results to displace or skip over
		 * @param {number} page Number of results of limit length to displace or skip over
		 * @return {void} No response was specified
		 */
		GetCollectionIconsBySlug(slug: string, limit: number | null | undefined, offset: number | null | undefined, page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'collection/' + (slug == null ? '' : encodeURIComponent(slug)) + '/icons&limit=' + limit + '&offset=' + offset + '&page=' + page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all collections
		 * Return's a list of all collections
		 * Get collections
		 * @param {number} limit Maximum number of results
		 * @param {number} offset Number of results to displace or skip over
		 * @param {number} page Number of results of limit length to displace or skip over
		 * @return {void} No response was specified
		 */
		GetAllCollections(limit: number | null | undefined, offset: number | null | undefined, page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'collections?limit=' + limit + '&offset=' + offset + '&page=' + page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get icon by id
		 * Returns a single icon
		 * Get icon/{id}
		 * @param {number} id Icon id
		 * @return {void} No response was specified
		 */
		GetIconById(id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'icon/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get icon by term
		 * Returns a single icon
		 * Get icon/{term}
		 * @param {string} term Icon term
		 * @return {void} No response was specified
		 */
		GetIconByTerm(term: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'icon/' + (term == null ? '' : encodeURIComponent(term)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get recent icons
		 * Returns list of most recently uploaded icons
		 * Get icons/recent_uploads
		 * @param {number} limit Maximum number of results
		 * @param {number} offset Number of results to displace or skip over
		 * @param {number} page Number of results of limit length to displace or skip over
		 * @return {void} No response was specified
		 */
		GetRecentIcons(limit: number | null | undefined, offset: number | null | undefined, page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'icons/recent_uploads?limit=' + limit + '&offset=' + offset + '&page=' + page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get icons by term
		 * Returns a list of icons
		 * Get icons/{term}
		 * @param {string} term Icon term
		 * @param {number} limit_to_public_domain Limit results to public domain icons only
		 * @param {number} limit Maximum number of results
		 * @param {number} offset Number of results to displace or skip over
		 * @param {number} page Number of results of limit length to displace or skip over
		 * @return {void} No response was specified
		 */
		GetIconsByTerm(term: string, limit_to_public_domain: number | null | undefined, limit: number | null | undefined, offset: number | null | undefined, page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'icons/' + (term == null ? '' : encodeURIComponent(term)) + '&limit_to_public_domain=' + limit_to_public_domain + '&limit=' + limit + '&offset=' + offset + '&page=' + page, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api quota status
		 * Returns current oauth usage and limits
		 * Get oauth/usage
		 * @return {void} No response was specified
		 */
		GetApiQuotaStatus(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'oauth/usage', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get user collections
		 * Returns a list of collections associated with a user
		 * Get user/{user_id}/collections
		 * @param {number} user_id User id
		 * @return {void} No response was specified
		 */
		GetUserCollections(user_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'user/' + user_id + '/collections', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get user collection
		 * Returns a single collection associated with a user
		 * Get user/{user_id}/collections/{slug}
		 * @param {number} user_id User id
		 * @param {string} slug Collection slug
		 * @return {void} No response was specified
		 */
		GetUserCollection(user_id: number, slug: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'user/' + user_id + '/collections/' + (slug == null ? '' : encodeURIComponent(slug)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get user uploads with user
		 * Returns a list of uploads associated with a user
		 * Get user/{username}/uploads
		 * @param {string} username Username
		 * @param {number} limit Maximum number of results
		 * @param {number} offset Number of results to displace or skip over
		 * @param {number} page Number of results of limit length to displace or skip over
		 * @return {void} No response was specified
		 */
		GetUserUploadsWithUser(username: string, limit: number | null | undefined, offset: number | null | undefined, page: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'user/' + (username == null ? '' : encodeURIComponent(username)) + '/uploads&limit=' + limit + '&offset=' + offset + '&page=' + page, { observe: 'response', responseType: 'text' });
		}
	}

}

