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
		 * Bulk search of MD5 hashes in a JSON array with the key 'hashes'.
		 * Post bulk/md5
		 * @return {void} Success
		 */
		Post_bulkmd5(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'bulk/md5', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Bulk search of SHA1 hashes in a JSON array with the 'hashes'.
		 * Post bulk/sha1
		 * @return {void} Success
		 */
		Post_bulksha1(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'bulk/sha1', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return children from a given SHA1.  A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.
		 * Get children/{sha1}/{count}/{cursor}
		 * @return {void} Success
		 */
		Get_children(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'children/{sha1}/{count}/{cursor}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Info about the hashlookup database
		 * Get info
		 * @return {void} Success
		 */
		Get_info(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'info', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lookup MD5.
		 * Get lookup/md5/{md5}
		 * @return {void} Success
		 */
		Get_lookup_md5(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lookup/md5/{md5}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lookup SHA-1.
		 * Get lookup/sha1/{sha1}
		 * @return {void} Success
		 */
		Get_lookup_sha1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lookup/sha1/{sha1}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lookup SHA-256.
		 * Get lookup/sha256/{sha256}
		 * @return {void} Success
		 */
		Get_lookup_sha256(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lookup/sha256/{sha256}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return parents from a given SHA1. A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.
		 * Get parents/{sha1}/{count}/{cursor}
		 * @return {void} Success
		 */
		Get_parents(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'parents/{sha1}/{count}/{cursor}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a session key to keep search context. The session is attached to a name. After the session is created, the header `hashlookup_session` can be set to the session name.
		 * Get session/create/{name}
		 * @return {void} Success
		 */
		Get_session_create(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'session/create/{name}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return set of matching and non-matching hashes from a session.
		 * Get session/get/{name}
		 * @return {void} Success
		 */
		Get_session_matches(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'session/get/{name}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return the top 100 of most queried values.
		 * Get stats/top
		 * @return {void} Success
		 */
		Get_stattop(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'stats/top', { observe: 'response', responseType: 'text' });
		}
	}

}

