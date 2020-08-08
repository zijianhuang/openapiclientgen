import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** A JSON object representing a batch of unique event occurrences in your app. */
	export interface Event {
		eventType: string;
		timestamp: string;

		/** Describes the session. Session information is required on ALL events. */
		session?: Session;
		version?: string;
		attributes?: MapOfStringToString;
		metrics?: MapOfStringToNumber;
	}


	/** Describes the session. Session information is required on ALL events. */
	export interface Session {
		id?: string;
		duration?: number;
		startTimestamp?: string;
		stopTimestamp?: string;
	}

	export interface MapOfStringToString {
	}

	export interface MapOfStringToNumber {
	}


	/** An exception object returned when a request fails. */
	export interface BadRequestException {
		message?: string;
	}


	/** A container for the data needed for a PutEvent operation */
	export interface PutEventsInput {
		events: Array<Event>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * The PutEvents operation records one or more events. You can have up to 1,500 unique custom events per app, any combination of up to 40 attributes and metrics per custom event, and any number of attribute or metric values.
		 * Post 2014-06-05/events#x-amz-Client-Context
		 * @return {void} 
		 */
		PutEvents(requestBody: PutEventsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '2014-06-05/events#x-amz-Client-Context', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface PutEventsPostBody {

		/** An array of Event JSON objects */
		events: Array<Event>;
	}

}

