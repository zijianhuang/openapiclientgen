import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Response returned by most Queue API calls. */
	export interface ApiResponse {

		/**
		 * Count of Queues or QueueMessages returned by the call.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/** Informative message intended for client. */
		message?: string | null;

		/** Queues Messages returned by the call, or empty if not applicable. */
		queueMessages?: Array<QueueMessage>;

		/** Queues returned but the call, or empty if not applicable. */
		queues?: Array<Queue>;
	}

	/** Response returned by most Queue API calls. */
	export interface ApiResponseFormProperties {

		/**
		 * Count of Queues or QueueMessages returned by the call.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/** Informative message intended for client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateApiResponseFormGroup() {
		return new FormGroup<ApiResponseFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Queue Message */
	export interface QueueMessage {

		/** Content-type of data associated with QueueMessage. */
		contentType?: string | null;

		/**
		 * Date that message was received by system.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		createDate?: string | null;

		/** Embedded JSON to be sent with Queue Message. */
		data?: string | null;

		/** URL of data associated with Queue Message (if not embedded JSON) */
		href?: string | null;

		/** UUID of Message Data associated with this Queue Message */
		messageId?: string | null;

		/** UUID of Queue Message in local region. */
		queueMessageId?: string | null;

		/**
		 * Name of Queue for message.
		 * Required
		 */
		queueName: string;

		/** Regions to which message will be sent */
		receivingRegion?: string | null;

		/** Region from which was sent */
		sendingRegion?: string | null;
	}

	/** A Queue Message */
	export interface QueueMessageFormProperties {

		/** Content-type of data associated with QueueMessage. */
		contentType: FormControl<string | null | undefined>,

		/**
		 * Date that message was received by system.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		createDate: FormControl<string | null | undefined>,

		/** Embedded JSON to be sent with Queue Message. */
		data: FormControl<string | null | undefined>,

		/** URL of data associated with Queue Message (if not embedded JSON) */
		href: FormControl<string | null | undefined>,

		/** UUID of Message Data associated with this Queue Message */
		messageId: FormControl<string | null | undefined>,

		/** UUID of Queue Message in local region. */
		queueMessageId: FormControl<string | null | undefined>,

		/**
		 * Name of Queue for message.
		 * Required
		 */
		queueName: FormControl<string | null | undefined>,

		/** Regions to which message will be sent */
		receivingRegion: FormControl<string | null | undefined>,

		/** Region from which was sent */
		sendingRegion: FormControl<string | null | undefined>,
	}
	export function CreateQueueMessageFormGroup() {
		return new FormGroup<QueueMessageFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			createDate: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			messageId: new FormControl<string | null | undefined>(undefined),
			queueMessageId: new FormControl<string | null | undefined>(undefined),
			queueName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			receivingRegion: new FormControl<string | null | undefined>(undefined),
			sendingRegion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the configuration for a Queue. */
	export interface Queue {

		/**
		 * Name of queue, must be unique.
		 * Required
		 */
		name: string;
	}

	/** Specifies the configuration for a Queue. */
	export interface QueueFormProperties {

		/**
		 * Name of queue, must be unique.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateQueueFormGroup() {
		return new FormGroup<QueueFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get list of all Queues.
		 * Get queues
		 * @return {ApiResponse} successful operation
		 */
		GetListOfQueues(): Observable<ApiResponse> {
			return this.http.get<ApiResponse>(this.baseUri + 'queues', {});
		}

		/**
		 * Create new queue.
		 * Post queues
		 * @return {ApiResponse} successful operation
		 */
		CreateQueue(): Observable<ApiResponse> {
			return this.http.post<ApiResponse>(this.baseUri + 'queues', null, {});
		}

		/**
		 * Delete Queue.
		 * Delete queues/{queueName}
		 * @return {ApiResponse} successful operation
		 */
		DeleteQueue(queueName: string, confirm: boolean | null | undefined): Observable<ApiResponse> {
			return this.http.delete<ApiResponse>(this.baseUri + 'queues/' + (queueName == null ? '' : encodeURIComponent(queueName)) + '&confirm=' + confirm, {});
		}

		/**
		 * Get Queue config.
		 * Get queues/{queueName}/config
		 * @param {string} queueName Name of Queue
		 * @return {ApiResponse} successful operation
		 */
		GetQueueConfig(queueName: string): Observable<ApiResponse> {
			return this.http.get<ApiResponse>(this.baseUri + 'queues/' + (queueName == null ? '' : encodeURIComponent(queueName)) + '/config', {});
		}

		/**
		 * Update Queue configuration.
		 * Put queues/{queueName}/config
		 * @return {ApiResponse} successful operation
		 */
		UpdateQueueConfig(queueName: string): Observable<ApiResponse> {
			return this.http.put<ApiResponse>(this.baseUri + 'queues/' + (queueName == null ? '' : encodeURIComponent(queueName)) + '/config', null, {});
		}

		/**
		 * Get data associated with a Queue Message.
		 * Get queues/{queueName}/data/{queueMessageId}
		 * @param {string} queueName Name of Queue
		 * @param {string} queueMessageId ID of Queue Message for which data is to be returned
		 * @return {void} successful operation
		 */
		GetMessageData(queueName: string, queueMessageId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'queues/' + (queueName == null ? '' : encodeURIComponent(queueName)) + '/data/' + (queueMessageId == null ? '' : encodeURIComponent(queueMessageId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get next Queue Messages from a Queue
		 * Get queues/{queueName}/messages
		 * @param {string} queueName Name of Queue
		 * @param {string} count Number of messages to get
		 * @return {ApiResponse} successful operation
		 */
		GetNextMessages(queueName: string, count: string | null | undefined): Observable<ApiResponse> {
			return this.http.get<ApiResponse>(this.baseUri + 'queues/' + (queueName == null ? '' : encodeURIComponent(queueName)) + '/messages&count=' + (count == null ? '' : encodeURIComponent(count)), {});
		}

		/**
		 * Acknowledge that Queue Message has been processed.
		 * Delete queues/{queueName}/messages/{queueMessageId}
		 * @param {string} queueName Name of Queue
		 * @param {string} queueMessageId ID of Queue Message to be acknowledged
		 * @return {ApiResponse} successful operation
		 */
		AckMessage(queueName: string, queueMessageId: string): Observable<ApiResponse> {
			return this.http.delete<ApiResponse>(this.baseUri + 'queues/' + (queueName == null ? '' : encodeURIComponent(queueName)) + '/messages/' + (queueMessageId == null ? '' : encodeURIComponent(queueMessageId)), {});
		}

		/**
		 * Status of webapp.
		 * Get status
		 * @return {string} successful operation
		 */
		Status(): Observable<string> {
			return this.http.get(this.baseUri + 'status', { responseType: 'text' });
		}
	}

}

