import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface GoneException {
	}

	export interface LimitExceededException {
	}

	export interface ForbiddenException {
	}

	export interface GetConnectionResponse {
		ConnectedAt?: Date;
		Identity?: Identity;
		LastActiveAt?: Date;
	}

	export interface Identity {
		SourceIp: string;
		UserAgent: string;
	}

	export interface PayloadTooLargeException {
	}

	export interface DeleteConnectionRequest {
	}

	export interface GetConnectionRequest {
	}

	export interface PostToConnectionRequest {

		/**
		 * The data to be sent to the client specified by its connection id.
		 * Required
		 * Max length: 131072
		 */
		Data: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete the connection with the provided id.
		 * Delete @connections/{connectionId}
		 * @return {void} 
		 */
		DeleteConnection(connectionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '@connections/' + (connectionId == null ? '' : encodeURIComponent(connectionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get information about the connection with the provided id.
		 * Get @connections/{connectionId}
		 * @return {GetConnectionResponse} Success
		 */
		GetConnection(connectionId: string): Observable<GetConnectionResponse> {
			return this.http.get<GetConnectionResponse>(this.baseUri + '@connections/' + (connectionId == null ? '' : encodeURIComponent(connectionId)), {});
		}

		/**
		 * Sends the provided data to the specified connection.
		 * Post @connections/{connectionId}
		 * @param {string} connectionId The identifier of the connection that a specific client is using.
		 * @return {void} Success
		 */
		PostToConnection(connectionId: string, requestBody: PostToConnectionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '@connections/' + (connectionId == null ? '' : encodeURIComponent(connectionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface PostToConnectionPostBody {

		/**
		 * The data to be sent to the client specified by its connection id.
		 * Required
		 * Max length: 131072
		 */
		Data: string;
	}

}

