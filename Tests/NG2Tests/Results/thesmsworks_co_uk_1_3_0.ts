import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** SMS Message Batch */
	export interface BatchMessage {

		/**
		 * Message to send to the recipient
		 * Required
		 */
		content: string;

		/**
		 * Telephone numbers of each of the recipients
		 * Required
		 */
		destinations: Array<string>;

		/**
		 * Date-time at which to send the batch. This is only used by the batch/schedule service.
		 * Required
		 */
		schedule: string;

		/**
		 * The sender of the message. Should be no longer than 11 characters for alphanumeric or 15 characters for numeric sender ID's. No spaces or special characters.
		 * Required
		 */
		sender: string;

		/** An identifying label for the message, which you can use to filter and report on messages you've sent later. Ideal for campaigns. A maximum of 280 characters. */
		tag?: string | null;

		/**
		 * The number of minutes before the message is deleted. Optional. Omit to prevent delivery report deletion. Integer.
		 * Type: double
		 */
		ttl?: number | null;
	}

	/** SMS Message Batch */
	export interface BatchMessageFormProperties {

		/**
		 * Message to send to the recipient
		 * Required
		 */
		content: FormControl<string | null | undefined>,

		/**
		 * Date-time at which to send the batch. This is only used by the batch/schedule service.
		 * Required
		 */
		schedule: FormControl<string | null | undefined>,

		/**
		 * The sender of the message. Should be no longer than 11 characters for alphanumeric or 15 characters for numeric sender ID's. No spaces or special characters.
		 * Required
		 */
		sender: FormControl<string | null | undefined>,

		/** An identifying label for the message, which you can use to filter and report on messages you've sent later. Ideal for campaigns. A maximum of 280 characters. */
		tag: FormControl<string | null | undefined>,

		/**
		 * The number of minutes before the message is deleted. Optional. Omit to prevent delivery report deletion. Integer.
		 * Type: double
		 */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateBatchMessageFormGroup() {
		return new FormGroup<BatchMessageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schedule: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sender: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tag: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BatchMessageResponse {

		/** Required */
		batchid: string;

		/** Required */
		status: string;
	}
	export interface BatchMessageResponseFormProperties {

		/** Required */
		batchid: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
	}
	export function CreateBatchMessageResponseFormGroup() {
		return new FormGroup<BatchMessageResponseFormProperties>({
			batchid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelledMessageResponse {

		/** Required */
		messageid: string;

		/** Required */
		status: string;
	}
	export interface CancelledMessageResponseFormProperties {

		/** Required */
		messageid: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
	}
	export function CreateCancelledMessageResponseFormGroup() {
		return new FormGroup<CancelledMessageResponseFormProperties>({
			messageid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreditsResponse {

		/**
		 * The number of remaining credits on your SMS Works account. Floating point number.
		 * Required
		 * Type: double
		 */
		credits: number;
	}
	export interface CreditsResponseFormProperties {

		/**
		 * The number of remaining credits on your SMS Works account. Floating point number.
		 * Required
		 * Type: double
		 */
		credits: FormControl<number | null | undefined>,
	}
	export function CreateCreditsResponseFormGroup() {
		return new FormGroup<CreditsResponseFormProperties>({
			credits: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ErrorModel {

		/** Required */
		message: string;
	}
	export interface ErrorModelFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorModelFormGroup() {
		return new FormGroup<ErrorModelFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExtendedErrorModel extends ErrorModel {

		/**
		 * Numeric code used to identify the error. Integer.
		 * Required
		 * Type: double
		 */
		errorCode: number;
		permanent?: boolean | null;

		/** Required */
		status: string;
	}
	export interface ExtendedErrorModelFormProperties extends ErrorModelFormProperties {

		/**
		 * Numeric code used to identify the error. Integer.
		 * Required
		 * Type: double
		 */
		errorCode: FormControl<number | null | undefined>,
		permanent: FormControl<boolean | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
	}
	export function CreateExtendedErrorModelFormGroup() {
		return new FormGroup<ExtendedErrorModelFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			errorCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			permanent: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** authorisation object */
	export interface Login {

		/** Your customer ID, available from your account area at https://thesmsworks.co.uk/user/login */
		customerid?: string | null;

		/** API Key, available from your account area at https://thesmsworks.co.uk/user/login */
		key?: string | null;

		/** API Secret, available from your account area at https://thesmsworks.co.uk/user/login */
		secret?: string | null;
	}

	/** authorisation object */
	export interface LoginFormProperties {

		/** Your customer ID, available from your account area at https://thesmsworks.co.uk/user/login */
		customerid: FormControl<string | null | undefined>,

		/** API Key, available from your account area at https://thesmsworks.co.uk/user/login */
		key: FormControl<string | null | undefined>,

		/** API Secret, available from your account area at https://thesmsworks.co.uk/user/login */
		secret: FormControl<string | null | undefined>,
	}
	export function CreateLoginFormGroup() {
		return new FormGroup<LoginFormProperties>({
			customerid: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SMS message object */
	export interface Message {

		/**
		 * Message to send to the recipient. Content can be up to 1280 characters in length. Messages of 160 characters or fewer are charged 1 credit. If your message is longer than 160 characters then it will be broken down in to chunks of 153 characters before being sent to the recipient's handset, and you will be charged 1 credit for each 153 characters. Messages sent to numbers registered outside the UK will be typically charged double credits, but for certain countries may be charged fractions of credits (e.g. 2.5). Please contact us for rates for each country.
		 * Required
		 */
		content: string;

		/**
		 * Telephone number of the recipient
		 * Required
		 */
		destination: string;
		metadata?: Array<string>;

		/** An optional list of email addresses to forward responses to this specific message to. An SMS Works Reply Number is required to use this feature. */
		responseemail?: Array<string>;

		/** Date at which to send the message. This is only used by the message/schedule service and can be left empty for other services. */
		schedule?: string | null;

		/**
		 * The sender of the message. Should be no longer than 11 characters for alphanumeric or 15 characters for numeric sender ID's. No spaces or special characters.
		 * Required
		 */
		sender: string;

		/** An identifying label for the message, which you can use to filter and report on messages you've sent later. Ideal for campaigns. A maximum of 280 characters. */
		tag?: string | null;

		/**
		 * The optional number of minutes before the message is deleted. Optional. Omit to prevent delivery report deletion. Integer.
		 * Type: double
		 */
		ttl?: number | null;
	}

	/** SMS message object */
	export interface MessageFormProperties {

		/**
		 * Message to send to the recipient. Content can be up to 1280 characters in length. Messages of 160 characters or fewer are charged 1 credit. If your message is longer than 160 characters then it will be broken down in to chunks of 153 characters before being sent to the recipient's handset, and you will be charged 1 credit for each 153 characters. Messages sent to numbers registered outside the UK will be typically charged double credits, but for certain countries may be charged fractions of credits (e.g. 2.5). Please contact us for rates for each country.
		 * Required
		 */
		content: FormControl<string | null | undefined>,

		/**
		 * Telephone number of the recipient
		 * Required
		 */
		destination: FormControl<string | null | undefined>,

		/** Date at which to send the message. This is only used by the message/schedule service and can be left empty for other services. */
		schedule: FormControl<string | null | undefined>,

		/**
		 * The sender of the message. Should be no longer than 11 characters for alphanumeric or 15 characters for numeric sender ID's. No spaces or special characters.
		 * Required
		 */
		sender: FormControl<string | null | undefined>,

		/** An identifying label for the message, which you can use to filter and report on messages you've sent later. Ideal for campaigns. A maximum of 280 characters. */
		tag: FormControl<string | null | undefined>,

		/**
		 * The optional number of minutes before the message is deleted. Optional. Omit to prevent delivery report deletion. Integer.
		 * Type: double
		 */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destination: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schedule: new FormControl<string | null | undefined>(undefined),
			sender: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tag: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MessageResponse {

		/** Required */
		batchid: string;

		/** Required */
		content: string;

		/** Required */
		created: string;

		/** Required */
		customerid: string;

		/**
		 * Required
		 * Type: double
		 */
		destination: number;
		failurereason?: MessageResponseFailurereason;
		id?: string | null;

		/** Required */
		keyword: string;

		/** Required */
		messageid: string;

		/** Required */
		modified: string;

		/** Required */
		schedule: string;

		/** Required */
		sender: string;

		/** Required */
		status: string;

		/** Required */
		tag: string;
	}
	export interface MessageResponseFormProperties {

		/** Required */
		batchid: FormControl<string | null | undefined>,

		/** Required */
		content: FormControl<string | null | undefined>,

		/** Required */
		created: FormControl<string | null | undefined>,

		/** Required */
		customerid: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		destination: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Required */
		keyword: FormControl<string | null | undefined>,

		/** Required */
		messageid: FormControl<string | null | undefined>,

		/** Required */
		modified: FormControl<string | null | undefined>,

		/** Required */
		schedule: FormControl<string | null | undefined>,

		/** Required */
		sender: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,

		/** Required */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateMessageResponseFormGroup() {
		return new FormGroup<MessageResponseFormProperties>({
			batchid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			customerid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destination: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			keyword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			messageid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modified: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schedule: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sender: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MessageResponseFailurereason {

		/**
		 * Numeric code that defines the error. Integer.
		 * Type: double
		 */
		code?: number | null;
		details?: string | null;
		permanent?: boolean | null;
	}
	export interface MessageResponseFailurereasonFormProperties {

		/**
		 * Numeric code that defines the error. Integer.
		 * Type: double
		 */
		code: FormControl<number | null | undefined>,
		details: FormControl<string | null | undefined>,
		permanent: FormControl<boolean | null | undefined>,
	}
	export function CreateMessageResponseFailurereasonFormGroup() {
		return new FormGroup<MessageResponseFailurereasonFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			permanent: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MessagesResponse {

		/** Required */
		messages: Array<string>;
	}
	export interface MessagesResponseFormProperties {
	}
	export function CreateMessagesResponseFormGroup() {
		return new FormGroup<MessagesResponseFormProperties>({
		});

	}


	/** Key/value pair that will be returned to you in the API call response. */
	export interface MetaData {

		/** key of the key/value pair */
		key?: string | null;

		/** value of the key/value pair */
		value?: string | null;
	}

	/** Key/value pair that will be returned to you in the API call response. */
	export interface MetaDataFormProperties {

		/** key of the key/value pair */
		key: FormControl<string | null | undefined>,

		/** value of the key/value pair */
		value: FormControl<string | null | undefined>,
	}
	export function CreateMetaDataFormGroup() {
		return new FormGroup<MetaDataFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** search parameters for querying the message database */
	export interface Query {

		/**
		 * The number of credits used on the message. Floating point number.
		 * Type: double
		 */
		credits?: number | null;

		/** The phone number of the recipient. Start UK numbers with 44 and drop the leading 0. */
		destination?: string | null;

		/** The date-time from which you would like matching messages */
		from?: string | null;

		/** The keyword used in the inbound message */
		keyword?: string | null;

		/** An array of objects containing metadata key/value pairs that have been saved on messages. */
		metadata?: Array<string>;

		/** The sender of the message (this can be the configured sender name for an outbound message or the senders phone number for an inbound message). */
		sender?: string | null;

		/** The status of the messages you would like returned (either 'SENT', 'DELIVERED', 'EXPIRED', 'UNDELIVERABLE', 'REJECTED' or 'INCOMING') */
		status?: string | null;

		/** The date-time to which you would like matching messages */
		to?: string | null;

		/** In queries for incoming messages ('status' is 'INCOMING'), specify whether you explicitly want unread messages (true) or read messages (false). Omit this parameter in other circumstances. */
		unread?: boolean | null;
	}

	/** search parameters for querying the message database */
	export interface QueryFormProperties {

		/**
		 * The number of credits used on the message. Floating point number.
		 * Type: double
		 */
		credits: FormControl<number | null | undefined>,

		/** The phone number of the recipient. Start UK numbers with 44 and drop the leading 0. */
		destination: FormControl<string | null | undefined>,

		/** The date-time from which you would like matching messages */
		from: FormControl<string | null | undefined>,

		/** The keyword used in the inbound message */
		keyword: FormControl<string | null | undefined>,

		/** The sender of the message (this can be the configured sender name for an outbound message or the senders phone number for an inbound message). */
		sender: FormControl<string | null | undefined>,

		/** The status of the messages you would like returned (either 'SENT', 'DELIVERED', 'EXPIRED', 'UNDELIVERABLE', 'REJECTED' or 'INCOMING') */
		status: FormControl<string | null | undefined>,

		/** The date-time to which you would like matching messages */
		to: FormControl<string | null | undefined>,

		/** In queries for incoming messages ('status' is 'INCOMING'), specify whether you explicitly want unread messages (true) or read messages (false). Omit this parameter in other circumstances. */
		unread: FormControl<boolean | null | undefined>,
	}
	export function CreateQueryFormGroup() {
		return new FormGroup<QueryFormProperties>({
			credits: new FormControl<number | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			keyword: new FormControl<string | null | undefined>(undefined),
			sender: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			unread: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ScheduledBatchResponse {

		/** Required */
		batchid: string;

		/** Required */
		status: string;
	}
	export interface ScheduledBatchResponseFormProperties {

		/** Required */
		batchid: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
	}
	export function CreateScheduledBatchResponseFormGroup() {
		return new FormGroup<ScheduledBatchResponseFormProperties>({
			batchid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ScheduledMessageResponse {

		/** Required */
		messageid: string;

		/** Required */
		status: string;
	}
	export interface ScheduledMessageResponseFormProperties {

		/** Required */
		messageid: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
	}
	export function CreateScheduledMessageResponseFormGroup() {
		return new FormGroup<ScheduledMessageResponseFormProperties>({
			messageid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SendMessageResponse {

		/**
		 * The number of remaining credits on your SMS Works account. Floating point number.
		 * Required
		 * Type: double
		 */
		credits: number;

		/**
		 * The number of credits used to send the message. Floating point number.
		 * Required
		 * Type: double
		 */
		creditsUsed: number;

		/** Required */
		messageid: string;

		/** Required */
		status: string;
	}
	export interface SendMessageResponseFormProperties {

		/**
		 * The number of remaining credits on your SMS Works account. Floating point number.
		 * Required
		 * Type: double
		 */
		credits: FormControl<number | null | undefined>,

		/**
		 * The number of credits used to send the message. Floating point number.
		 * Required
		 * Type: double
		 */
		creditsUsed: FormControl<number | null | undefined>,

		/** Required */
		messageid: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<string | null | undefined>,
	}
	export function CreateSendMessageResponseFormGroup() {
		return new FormGroup<SendMessageResponseFormProperties>({
			credits: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			creditsUsed: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			messageid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TestResponse {

		/** Required */
		message: string;
	}
	export interface TestResponseFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateTestResponseFormGroup() {
		return new FormGroup<TestResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TokenResponse {

		/** Required */
		token: string;
	}
	export interface TokenResponseFormProperties {

		/** Required */
		token: FormControl<string | null | undefined>,
	}
	export function CreateTokenResponseFormGroup() {
		return new FormGroup<TokenResponseFormProperties>({
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ApiKeyResponse {

		/** Required */
		key: string;

		/** Required */
		secret: string;
	}
	export interface ApiKeyResponseFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		secret: FormControl<string | null | undefined>,
	}
	export function CreateApiKeyResponseFormGroup() {
		return new FormGroup<ApiKeyResponseFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Utility method. Please generate your API key by following the instructions on your account page at https://thesmsworks.co.uk/user/login
		 * Get auth/getApiKey
		 * @param {string} customerid Utility method. Please generate your API key by following the instructions on your account page at https://thesmsworks.co.uk/user/login
		 * @return {void} 
		 */
		KeySecret(customerid: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'auth/getApiKey?customerid=' + (customerid == null ? '' : encodeURIComponent(customerid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates a JSON Web Token for including in the Authorization header of all your calls to the API. This only needs to be done once. Generate the customer ID, API Key & Secret required for this call from the API Key tab your account page.
		 * Post auth/token
		 * @param {Login} requestBody API Key & Secret
		 * @return {void} Success
		 */
		Login(requestBody: Login): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'auth/token', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Schedules a batch of SMS messages to be sent at the date time you specify
		 * Post batch/schedule
		 * @param {BatchMessage} requestBody Message properties
		 * @return {void} 
		 */
		ScheduleBatch(requestBody: BatchMessage): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'batch/schedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Send a single SMS message to multiple recipients
		 * Post batch/send
		 * @param {BatchMessage} requestBody Message properties
		 * @return {void} 
		 */
		SendBatch(requestBody: BatchMessage): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'batch/send', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve all messages in a batch with the given batch ID
		 * Get batch/{batchid}
		 * @param {string} batchid The ID of the batch you would like returned
		 * @return {void} Success
		 */
		GetBatchById(batchid: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'batch/' + (batchid == null ? '' : encodeURIComponent(batchid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a scheduled SMS message
		 * Delete batches/schedule/{batchid}
		 * @param {string} batchid The ID of the batch you would like returned
		 * @return {void} Success
		 */
		CancelScheduledBatchJob(batchid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'batches/schedule/' + (batchid == null ? '' : encodeURIComponent(batchid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the number of credits currently available on the account
		 * Get credits/balance
		 * @return {void} Success
		 */
		Credits(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'credits/balance', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Schedules an SMS message to be sent at the date-time you specify
		 * Post message/schedule
		 * @param {Message} requestBody Message properties
		 * @return {void} 
		 */
		ScheduleMessage(requestBody: Message): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'message/schedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sends an SMS message
		 * Post message/send
		 * @param {Message} requestBody Message properties
		 * @return {void} 
		 */
		SendMessage(requestBody: Message): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'message/send', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get messages matching your search criteria
		 * Post messages
		 * @return {void} Success
		 */
		GetMessages(requestBody: Query): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'messages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get unread uncoming messages matching your search criteria
		 * Post messages/inbox
		 * @return {void} Success
		 */
		GetInboxMessages(requestBody: Query): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'messages/inbox', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a scheduled SMS message
		 * Delete messages/schedule/{messageid}
		 * @param {string} messageid The ID of the message you would like returned
		 * @return {void} Success
		 */
		CancelScheduledJob(messageid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'messages/schedule/' + (messageid == null ? '' : encodeURIComponent(messageid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a logged message by the message ID
		 * Get messages/{messageid}
		 * @param {string} messageid The ID of the message you would like returned
		 * @return {void} Success
		 */
		GetMessageById(messageid: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'messages/' + (messageid == null ? '' : encodeURIComponent(messageid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a sample error object for the given error code. Useful for designing code to react to errors when they occur for real.
		 * Get utils/errors/{errorcode}
		 * @param {string} errorcode The code of the error you would like returned
		 * @return {void} 
		 */
		GetError(errorcode: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'utils/errors/' + (errorcode == null ? '' : encodeURIComponent(errorcode)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the customer ID to the caller
		 * Get utils/test
		 * @return {void} Success
		 */
		Test(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'utils/test', { observe: 'response', responseType: 'text' });
		}
	}

}

