import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface GetRawMessageContentResponse {
		messageContent: string;
	}

	export interface ResourceNotFoundException {
	}

	export interface GetRawMessageContentRequest {
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves the raw content of an in-transit email message, in MIME format.
		 * Get messages/{messageId}
		 * @param {string} messageId The identifier of the email message to retrieve.
		 * @return {GetRawMessageContentResponse} Success
		 */
		GetRawMessageContent(messageId: string): Observable<GetRawMessageContentResponse> {
			return this.http.get<GetRawMessageContentResponse>(this.baseUri + 'messages/' + (messageId == null ? '' : encodeURIComponent(messageId)), {});
		}
	}

}

