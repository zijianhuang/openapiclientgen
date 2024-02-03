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
		 * Execute a SQLite SQL query against the content database
		 * Accepts SQLite SQL query, returns JSON. Does not allow PRAGMA statements.
		 * Get content.json
		 * @param {string} sql The SQL query to be executed
		 * @param {Query_shape} _shape The shape of the response data. Must be "array"
		 * @return {Array<string>} Successful SQL results
		 */
		Query(sql: string, _shape: Query_shape): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'content.json?sql=' + (sql == null ? '' : encodeURIComponent(sql)) + '&_shape=' + _shape, {});
		}
	}

	export enum Query_shape { array = 'array' }

}

