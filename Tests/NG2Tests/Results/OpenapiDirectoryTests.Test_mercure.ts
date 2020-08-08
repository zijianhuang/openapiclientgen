import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Subscribe to updates
		 * Get 
		 * @param {Array<string>} topic The topic to get updates from, can be a URI template (RFC6570).
		 * @param {string} Last_Event_ID The last received event id, to retrieve missed events.
		 * @return {void} Event stream opened.
		 */
		GetByTopicAndLast_Event_ID(topic: Array<string>, Last_Event_ID: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '?' + topic.map(z => `topic=${encodeURIComponent(z)}`).join('&') + '&Last_Event_ID=' + (Last_Event_ID == null ? '' : encodeURIComponent(Last_Event_ID)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

