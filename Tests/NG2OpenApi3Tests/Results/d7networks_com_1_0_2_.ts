import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Bulk SMS Request */
	export interface BulkSMSRequest {

		/**
		 * Sendbatch message body
		 * Required
		 */
		messages: Array<Message>;
	}

	/** Bulk SMS Request */
	export interface BulkSMSRequestFormProperties {
	}
	export function CreateBulkSMSRequestFormGroup() {
		return new FormGroup<BulkSMSRequestFormProperties>({
		});

	}

	export interface Message {

		/** Required */
		content: string;

		/** Required */
		from: string;

		/**
		 * Destination Number
		 * Required
		 */
		to: Array<string>;
	}
	export interface MessageFormProperties {

		/** Required */
		content: FormControl<string | null | undefined>,

		/** Required */
		from: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Send SMS Request */
	export interface SendSMSRequest {

		/**
		 * Message Content
		 * Required
		 */
		content: string;

		/**
		 * Sender ID / Number
		 * Required
		 */
		from: string;

		/**
		 * Destination Mobile Number
		 * Required
		 */
		to: number;
	}

	/** Send SMS Request */
	export interface SendSMSRequestFormProperties {

		/**
		 * Message Content
		 * Required
		 */
		content: FormControl<string | null | undefined>,

		/**
		 * Sender ID / Number
		 * Required
		 */
		from: FormControl<string | null | undefined>,

		/**
		 * Destination Mobile Number
		 * Required
		 */
		to: FormControl<number | null | undefined>,
	}
	export function CreateSendSMSRequestFormGroup() {
		return new FormGroup<SendSMSRequestFormProperties>({
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Balance
		 * Check account balance
		 * Get balance
		 * @return {void} 
		 */
		BalanceGet(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'balance', { observe: 'response', responseType: 'text' });
		}

		/**
		 * SendSMS
		 * Send SMS  to recipients using D7 SMS Gateway
		 * Post send
		 * @param {SendSMSRequest} requestBody Message Body
		 * @return {void} 
		 */
		SendPost(requestBody: SendSMSRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'send', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Bulk SMS
		 * Send Bulk SMS  to multiple recipients using D7 SMS Gateway
		 * Post sendbatch
		 * @param {BulkSMSRequest} requestBody Message Body
		 * @return {void} 
		 */
		SendbatchPost(requestBody: BulkSMSRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sendbatch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

