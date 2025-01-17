import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A JSON object representing a batch of unique event occurrences in your app. */
	export interface Event {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		eventType: string;

		/** Required */
		timestamp: string;

		/** Describes the session. Session information is required on ALL events. */
		session?: Session;

		/**
		 * Max length: 10
		 * Min length: 1
		 */
		version?: string | null;
		attributes?: MapOfStringToString;
		metrics?: MapOfStringToNumber;
	}

	/** A JSON object representing a batch of unique event occurrences in your app. */
	export interface EventFormProperties {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 1
		 */
		eventType: FormControl<string | null | undefined>,

		/** Required */
		timestamp: FormControl<string | null | undefined>,

		/**
		 * Max length: 10
		 * Min length: 1
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			eventType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
			timestamp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10)]),
		});

	}


	/** Describes the session. Session information is required on ALL events. */
	export interface Session {

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		id?: string | null;
		duration?: number | null;
		startTimestamp?: string | null;
		stopTimestamp?: string | null;
	}

	/** Describes the session. Session information is required on ALL events. */
	export interface SessionFormProperties {

		/**
		 * Max length: 50
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,
		duration: FormControl<number | null | undefined>,
		startTimestamp: FormControl<string | null | undefined>,
		stopTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			duration: new FormControl<number | null | undefined>(undefined),
			startTimestamp: new FormControl<string | null | undefined>(undefined),
			stopTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MapOfStringToString {
	}
	export interface MapOfStringToStringFormProperties {
	}
	export function CreateMapOfStringToStringFormGroup() {
		return new FormGroup<MapOfStringToStringFormProperties>({
		});

	}

	export interface MapOfStringToNumber {
	}
	export interface MapOfStringToNumberFormProperties {
	}
	export function CreateMapOfStringToNumberFormGroup() {
		return new FormGroup<MapOfStringToNumberFormProperties>({
		});

	}


	/** An exception object returned when a request fails. */
	export interface BadRequestException {
		message?: string | null;
	}

	/** An exception object returned when a request fails. */
	export interface BadRequestExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container for the data needed for a PutEvent operation */
	export interface PutEventsInput {

		/** Required */
		events: Array<Event>;
	}

	/** A container for the data needed for a PutEvent operation */
	export interface PutEventsInputFormProperties {
	}
	export function CreatePutEventsInputFormGroup() {
		return new FormGroup<PutEventsInputFormProperties>({
		});

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

		/**
		 * An array of Event JSON objects
		 * Required
		 */
		events: Array<Event>;
	}
	export interface PutEventsPostBodyFormProperties {
	}
	export function CreatePutEventsPostBodyFormGroup() {
		return new FormGroup<PutEventsPostBodyFormProperties>({
		});

	}

}

