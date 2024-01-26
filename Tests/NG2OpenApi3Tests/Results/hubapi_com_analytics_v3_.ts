import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BehavioralEventHttpCompletionRequest {

		/** Email of visitor */
		email?: string | null;

		/**
		 * Internal name of the event-type to trigger
		 * Required
		 */
		eventName: string;

		/** The object id that this event occurred on. Could be a contact id or a visitor id. */
		objectId?: string | null;

		/** The time when this event occurred (if any). If this isn't set, the current time will be used */
		occurredAt?: Date | null;

		/** Map of properties for the event in the format property internal name - property value */
		properties?: {[id: string]: string };

		/** User token */
		utk?: string | null;
		uuid?: string | null;
	}
	export interface BehavioralEventHttpCompletionRequestFormProperties {

		/** Email of visitor */
		email: FormControl<string | null | undefined>,

		/**
		 * Internal name of the event-type to trigger
		 * Required
		 */
		eventName: FormControl<string | null | undefined>,

		/** The object id that this event occurred on. Could be a contact id or a visitor id. */
		objectId: FormControl<string | null | undefined>,

		/** The time when this event occurred (if any). If this isn't set, the current time will be used */
		occurredAt: FormControl<Date | null | undefined>,

		/** Map of properties for the event in the format property internal name - property value */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** User token */
		utk: FormControl<string | null | undefined>,
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateBehavioralEventHttpCompletionRequestFormGroup() {
		return new FormGroup<BehavioralEventHttpCompletionRequestFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			eventName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			objectId: new FormControl<string | null | undefined>(undefined),
			occurredAt: new FormControl<Date | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			utk: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {

		/**
		 * The error category
		 * Required
		 */
		category: string;

		/** Context about the error condition */
		context?: {[id: string]: Array<string> };

		/**
		 * A unique identifier for the request. Include this value with any error reports or support tickets
		 * Required
		 */
		correlationId: string;

		/** further information about the error */
		errors?: Array<ErrorDetail>;

		/** A map of link names to associated URIs containing documentation about the error or recommended remediation steps */
		links?: {[id: string]: string };

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: string;

		/** A specific category that contains more specific detail about the error */
		subCategory?: string | null;
	}
	export interface ErrorFormProperties {

		/**
		 * The error category
		 * Required
		 */
		category: FormControl<string | null | undefined>,

		/** Context about the error condition */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * A unique identifier for the request. Include this value with any error reports or support tickets
		 * Required
		 */
		correlationId: FormControl<string | null | undefined>,

		/** A map of link names to associated URIs containing documentation about the error or recommended remediation steps */
		links: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A specific category that contains more specific detail about the error */
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorDetail {

		/** The status code associated with the error detail */
		code?: string | null;

		/** Context about the error condition */
		context?: {[id: string]: Array<string> };

		/** The name of the field or parameter in which the error was found. */
		in?: string | null;

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: string;

		/** A specific category that contains more specific detail about the error */
		subCategory?: string | null;
	}
	export interface ErrorDetailFormProperties {

		/** The status code associated with the error detail */
		code: FormControl<string | null | undefined>,

		/** Context about the error condition */
		context: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/** The name of the field or parameter in which the error was found. */
		in: FormControl<string | null | undefined>,

		/**
		 * A human readable message describing the error along with remediation steps where appropriate
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A specific category that contains more specific detail about the error */
		subCategory: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			context: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			in: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subCategory: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Sends Custom Behavioral Event
		 * Endpoint to send an instance of a behavioral event
		 * Post events/v3/send
		 * @return {void} 
		 */
		Post_SlasheventsSlashv3Slashsend(requestBody: BehavioralEventHttpCompletionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'events/v3/send', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

