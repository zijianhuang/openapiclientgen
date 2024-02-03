import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BulkSmsRequest {

		/** Max length: 20 */
		clientBatchId?: string | null;
		includeMessagesInResponse?: boolean | null;

		/** Required */
		messages: Array<SmsRequest>;
		template?: SmsTemplate;
	}
	export interface BulkSmsRequestFormProperties {

		/** Max length: 20 */
		clientBatchId: FormControl<string | null | undefined>,
		includeMessagesInResponse: FormControl<boolean | null | undefined>,
	}
	export function CreateBulkSmsRequestFormGroup() {
		return new FormGroup<BulkSmsRequestFormProperties>({
			clientBatchId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(20)]),
			includeMessagesInResponse: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SmsRequest {

		/** Max length: 20 */
		clientMessageId?: string | null;

		/** Required */
		destination: string;
		encoding?: SmsRequestEncoding | null;
		expiry?: Date | null;
		scheduled?: Date | null;

		/** Max length: 16 */
		source?: string | null;
		text?: string | null;
	}
	export interface SmsRequestFormProperties {

		/** Max length: 20 */
		clientMessageId: FormControl<string | null | undefined>,

		/** Required */
		destination: FormControl<string | null | undefined>,
		encoding: FormControl<SmsRequestEncoding | null | undefined>,
		expiry: FormControl<Date | null | undefined>,
		scheduled: FormControl<Date | null | undefined>,

		/** Max length: 16 */
		source: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateSmsRequestFormGroup() {
		return new FormGroup<SmsRequestFormProperties>({
			clientMessageId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(20)]),
			destination: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\+{0,1}[1-9]{1}[0-9]{6,14}$')]),
			encoding: new FormControl<SmsRequestEncoding | null | undefined>(undefined),
			expiry: new FormControl<Date | null | undefined>(undefined),
			scheduled: new FormControl<Date | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16)]),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SmsRequestEncoding { AUTO = 'AUTO', GSM7bit = 'GSM7bit', UNICODE = 'UNICODE' }

	export interface SmsTemplate {
		encoding?: SmsRequestEncoding | null;
		expiry?: Date | null;
		scheduled?: Date | null;

		/** Max length: 16 */
		source?: string | null;
		text?: string | null;
	}
	export interface SmsTemplateFormProperties {
		encoding: FormControl<SmsRequestEncoding | null | undefined>,
		expiry: FormControl<Date | null | undefined>,
		scheduled: FormControl<Date | null | undefined>,

		/** Max length: 16 */
		source: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateSmsTemplateFormGroup() {
		return new FormGroup<SmsTemplateFormProperties>({
			encoding: new FormControl<SmsRequestEncoding | null | undefined>(undefined),
			expiry: new FormControl<Date | null | undefined>(undefined),
			scheduled: new FormControl<Date | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(16)]),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BulkSmsRequestCompact {

		/** Max length: 20 */
		clientBatchId?: string | null;

		/** Required */
		destinations: Array<string>;
		includeMessagesInResponse?: boolean | null;

		/** Required */
		template: SmsTemplate;
	}
	export interface BulkSmsRequestCompactFormProperties {

		/** Max length: 20 */
		clientBatchId: FormControl<string | null | undefined>,
		includeMessagesInResponse: FormControl<boolean | null | undefined>,
	}
	export function CreateBulkSmsRequestCompactFormGroup() {
		return new FormGroup<BulkSmsRequestCompactFormProperties>({
			clientBatchId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(20)]),
			includeMessagesInResponse: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BulkSmsResponse {
		acceptedCount?: number | null;
		batchId?: string | null;
		clientBatchId?: string | null;
		messages?: Array<SmsResponse>;
		rejectedCount?: number | null;
	}
	export interface BulkSmsResponseFormProperties {
		acceptedCount: FormControl<number | null | undefined>,
		batchId: FormControl<string | null | undefined>,
		clientBatchId: FormControl<string | null | undefined>,
		rejectedCount: FormControl<number | null | undefined>,
	}
	export function CreateBulkSmsResponseFormGroup() {
		return new FormGroup<BulkSmsResponseFormProperties>({
			acceptedCount: new FormControl<number | null | undefined>(undefined),
			batchId: new FormControl<string | null | undefined>(undefined),
			clientBatchId: new FormControl<string | null | undefined>(undefined),
			rejectedCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SmsResponse {
		clientMessageId?: string | null;
		destination?: string | null;
		status?: SmsStatus;
		umid?: string | null;
	}
	export interface SmsResponseFormProperties {
		clientMessageId: FormControl<string | null | undefined>,
		destination: FormControl<string | null | undefined>,
		umid: FormControl<string | null | undefined>,
	}
	export function CreateSmsResponseFormGroup() {
		return new FormGroup<SmsResponseFormProperties>({
			clientMessageId: new FormControl<string | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
			umid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SmsStatus {
		code?: string | null;
		description?: string | null;
	}
	export interface SmsStatusFormProperties {
		code: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateSmsStatusFormGroup() {
		return new FormGroup<SmsStatusFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorResponse {
		code?: number | null;
		errorId?: string | null;
		message?: string | null;
		timestamp?: Date | null;
	}
	export interface ErrorResponseFormProperties {
		code: FormControl<number | null | undefined>,
		errorId: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			errorId: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get sms/v1/status
		 * @return {void} 
		 */
		SmsV1StatusGet(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sms/v1/status', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post sms/v1/{subAccountId}/many
		 * @return {void} OK
		 */
		SendManyMessages(subAccountId: string, requestBody: BulkSmsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sms/v1/' + (subAccountId == null ? '' : encodeURIComponent(subAccountId)) + '/many', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post sms/v1/{subAccountId}/many/compact
		 * @return {void} OK
		 */
		SendManyMessagesInCompactForm(subAccountId: string, requestBody: BulkSmsRequestCompact): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sms/v1/' + (subAccountId == null ? '' : encodeURIComponent(subAccountId)) + '/many/compact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post sms/v1/{subAccountId}/single
		 * @return {void} OK
		 */
		SendSingleMessage(subAccountId: string, requestBody: SmsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sms/v1/' + (subAccountId == null ? '' : encodeURIComponent(subAccountId)) + '/single', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

