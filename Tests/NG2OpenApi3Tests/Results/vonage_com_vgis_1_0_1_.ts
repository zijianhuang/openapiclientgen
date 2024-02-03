import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Account {

		/** Unique identifier of the account */
		id?: number | null;

		/** Name of the account */
		name?: string | null;

		/** Organization of the account */
		org?: string | null;

		/** Status of the account */
		status?: AccountStatus | null;
		AccountUcis?: Array<AccountUcis>;
	}
	export interface AccountFormProperties {

		/** Unique identifier of the account */
		id: FormControl<number | null | undefined>,

		/** Name of the account */
		name: FormControl<string | null | undefined>,

		/** Organization of the account */
		org: FormControl<string | null | undefined>,

		/** Status of the account */
		status: FormControl<AccountStatus | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			org: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AccountStatus | null | undefined>(undefined),
		});

	}

	export enum AccountStatus { PENDING = 'PENDING', ACTIVE = 'ACTIVE', DELETED = 'DELETED', ARCHIVED = 'ARCHIVED' }

	export interface AccountUcis {
		health?: AccountUcisHealth;
		id?: number | null;
		type?: string | null;
		ucpAccountId?: string | null;
		ucpLabel?: string | null;
	}
	export interface AccountUcisFormProperties {
		id: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
		ucpAccountId: FormControl<string | null | undefined>,
		ucpLabel: FormControl<string | null | undefined>,
	}
	export function CreateAccountUcisFormGroup() {
		return new FormGroup<AccountUcisFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			ucpAccountId: new FormControl<string | null | undefined>(undefined),
			ucpLabel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountUcisHealth {
		message?: string | null;
		status?: string | null;
	}
	export interface AccountUcisHealthFormProperties {
		message: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateAccountUcisHealthFormGroup() {
		return new FormGroup<AccountUcisHealthFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Call {

		/**
		 * Unique identifier of the account
		 * Required
		 */
		accountId: number;

		/** Time to answer the call */
		answerTime?: Date | null;

		/** Remote caller ID */
		callerId?: string | null;

		/**
		 * Direction of the call
		 * Required
		 */
		direction: CallDirection;

		/**
		 * Duration of the call in milliseconds
		 * Required
		 */
		duration: number;

		/** End time of the call */
		endTime?: Date | null;

		/** External identifier of the call */
		externalId?: string | null;

		/**
		 * Unique identifier of the call
		 * Required
		 */
		id: number;

		/**
		 * Unique identifier of the account
		 * Required
		 */
		phoneNumber: string;

		/**
		 * Start time of the call
		 * Required
		 */
		startTime: Date;

		/**
		 * Status of the call
		 * Required
		 */
		state: CallState;

		/**
		 * Record type
		 * Required
		 */
		type: CallType;

		/**
		 * Unique identifier of communications provider
		 * Required
		 */
		uciId: number;

		/**
		 * Unique identifier of the user
		 * Required
		 */
		userId: number;
	}
	export interface CallFormProperties {

		/**
		 * Unique identifier of the account
		 * Required
		 */
		accountId: FormControl<number | null | undefined>,

		/** Time to answer the call */
		answerTime: FormControl<Date | null | undefined>,

		/** Remote caller ID */
		callerId: FormControl<string | null | undefined>,

		/**
		 * Direction of the call
		 * Required
		 */
		direction: FormControl<CallDirection | null | undefined>,

		/**
		 * Duration of the call in milliseconds
		 * Required
		 */
		duration: FormControl<number | null | undefined>,

		/** End time of the call */
		endTime: FormControl<Date | null | undefined>,

		/** External identifier of the call */
		externalId: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the call
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the account
		 * Required
		 */
		phoneNumber: FormControl<string | null | undefined>,

		/**
		 * Start time of the call
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * Status of the call
		 * Required
		 */
		state: FormControl<CallState | null | undefined>,

		/**
		 * Record type
		 * Required
		 */
		type: FormControl<CallType | null | undefined>,

		/**
		 * Unique identifier of communications provider
		 * Required
		 */
		uciId: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the user
		 * Required
		 */
		userId: FormControl<number | null | undefined>,
	}
	export function CreateCallFormGroup() {
		return new FormGroup<CallFormProperties>({
			accountId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			answerTime: new FormControl<Date | null | undefined>(undefined),
			callerId: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<CallDirection | null | undefined>(undefined, [Validators.required]),
			duration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			phoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<CallState | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CallType | null | undefined>(undefined, [Validators.required]),
			uciId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CallDirection { INBOUND = 'INBOUND', OUTBOUND = 'OUTBOUND' }

	export enum CallState { INITIALIZING = 'INITIALIZING', RINGING = 'RINGING', ACTIVE = 'ACTIVE', HELD = 'HELD', REMOTE_HELD = 'REMOTE_HELD', DETACHED = 'DETACHED', REJECTED = 'REJECTED', CANCELLED = 'CANCELLED', ANSWERED = 'ANSWERED', MISSED = 'MISSED' }

	export enum CallType { CALL = 'CALL' }

	export interface CallCreate {

		/**
		 * Phone number to call
		 * Required
		 */
		phoneNumber: string;
	}
	export interface CallCreateFormProperties {

		/**
		 * Phone number to call
		 * Required
		 */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateCallCreateFormGroup() {
		return new FormGroup<CallCreateFormProperties>({
			phoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CallTransfer {

		/**
		 * Phone number to transfer to
		 * Required
		 */
		phoneNumber: string;
	}
	export interface CallTransferFormProperties {

		/**
		 * Phone number to transfer to
		 * Required
		 */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateCallTransferFormGroup() {
		return new FormGroup<CallTransferFormProperties>({
			phoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Error {
		field?: string | null;
		message?: string | null;
	}
	export interface ErrorFormProperties {
		field: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorResponse {
		errorCode?: string | null;
		errorMessage?: string | null;
		errors?: Array<Error>;
	}
	export interface ErrorResponseFormProperties {
		errorCode: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Event {

		/**
		 * Unique identifier of the account
		 * Required
		 */
		accountId: number;

		/** Time to answer the event */
		answerTime?: Date | null;

		/** Remote caller ID */
		callerId?: string | null;

		/**
		 * Direction of the event
		 * Required
		 */
		direction: CallDirection;

		/** Duration of the call in milliseconds */
		duration?: number | null;

		/** End time of the event */
		endTime?: Date | null;

		/** External identifier of the event */
		externalId?: string | null;

		/**
		 * Unique identifier of the event
		 * Required
		 */
		id: number;

		/**
		 * Unique identifier of the account
		 * Required
		 */
		phoneNumber: string;
		smsData?: string | null;

		/**
		 * Start time of the event
		 * Required
		 */
		startTime: Date;

		/**
		 * Status of the event
		 * Required
		 */
		state: CallState;

		/**
		 * Record type
		 * Required
		 */
		type: CallType;

		/**
		 * Unique identifier of communications provider
		 * Required
		 */
		uciId: number;

		/**
		 * Unique identifier of the user
		 * Required
		 */
		userId: number;
	}
	export interface EventFormProperties {

		/**
		 * Unique identifier of the account
		 * Required
		 */
		accountId: FormControl<number | null | undefined>,

		/** Time to answer the event */
		answerTime: FormControl<Date | null | undefined>,

		/** Remote caller ID */
		callerId: FormControl<string | null | undefined>,

		/**
		 * Direction of the event
		 * Required
		 */
		direction: FormControl<CallDirection | null | undefined>,

		/** Duration of the call in milliseconds */
		duration: FormControl<number | null | undefined>,

		/** End time of the event */
		endTime: FormControl<Date | null | undefined>,

		/** External identifier of the event */
		externalId: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the event
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the account
		 * Required
		 */
		phoneNumber: FormControl<string | null | undefined>,
		smsData: FormControl<string | null | undefined>,

		/**
		 * Start time of the event
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * Status of the event
		 * Required
		 */
		state: FormControl<CallState | null | undefined>,

		/**
		 * Record type
		 * Required
		 */
		type: FormControl<CallType | null | undefined>,

		/**
		 * Unique identifier of communications provider
		 * Required
		 */
		uciId: FormControl<number | null | undefined>,

		/**
		 * Unique identifier of the user
		 * Required
		 */
		userId: FormControl<number | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			accountId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			answerTime: new FormControl<Date | null | undefined>(undefined),
			callerId: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<CallDirection | null | undefined>(undefined, [Validators.required]),
			duration: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			phoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			smsData: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<CallState | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CallType | null | undefined>(undefined, [Validators.required]),
			uciId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EventsCount {

		/** Number of events found */
		count?: number | null;
	}
	export interface EventsCountFormProperties {

		/** Number of events found */
		count: FormControl<number | null | undefined>,
	}
	export function CreateEventsCountFormGroup() {
		return new FormGroup<EventsCountFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface User {

		/** Unique identifier of the user's account */
		accountId?: number | null;

		/** The name of the user's account */
		acountLabel?: string | null;

		/** Contact number of the user */
		contactNumber?: string | null;

		/** Email address of the user */
		emailAddress?: string | null;

		/** First name of the user */
		firstName?: string | null;

		/** Unique identifier of the user */
		id?: number | null;

		/** Last name of the user */
		lastName?: string | null;
		UserRoles?: Array<UserRoles>;

		/** Status of the user */
		status?: AccountStatus | null;
		UserUcis?: Array<UserUcis>;
	}
	export interface UserFormProperties {

		/** Unique identifier of the user's account */
		accountId: FormControl<number | null | undefined>,

		/** The name of the user's account */
		acountLabel: FormControl<string | null | undefined>,

		/** Contact number of the user */
		contactNumber: FormControl<string | null | undefined>,

		/** Email address of the user */
		emailAddress: FormControl<string | null | undefined>,

		/** First name of the user */
		firstName: FormControl<string | null | undefined>,

		/** Unique identifier of the user */
		id: FormControl<number | null | undefined>,

		/** Last name of the user */
		lastName: FormControl<string | null | undefined>,

		/** Status of the user */
		status: FormControl<AccountStatus | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			accountId: new FormControl<number | null | undefined>(undefined),
			acountLabel: new FormControl<string | null | undefined>(undefined),
			contactNumber: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AccountStatus | null | undefined>(undefined),
		});

	}

	export interface UserRoles {

		/** Code for the role */
		code?: string | null;

		/** Name for the role */
		name?: string | null;
	}
	export interface UserRolesFormProperties {

		/** Code for the role */
		code: FormControl<string | null | undefined>,

		/** Name for the role */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserRolesFormGroup() {
		return new FormGroup<UserRolesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserUcis {
		health?: UserUcisHealth;
		id?: number | null;
		type?: string | null;
		ucpLabel?: string | null;
	}
	export interface UserUcisFormProperties {
		id: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
		ucpLabel: FormControl<string | null | undefined>,
	}
	export function CreateUserUcisFormGroup() {
		return new FormGroup<UserUcisFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			ucpLabel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserUcisHealth {
		message?: string | null;
		status?: string | null;
	}
	export interface UserUcisHealthFormProperties {
		message: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateUserUcisHealthFormGroup() {
		return new FormGroup<UserUcisHealthFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Webhook {

		/** Unique identifier of the account */
		accountId?: string | null;

		/** Created time for the webhook */
		createdAt?: string | null;

		/** Subscribed events for the webhook */
		events?: Array<CallType>;

		/** Expiration time for the webhook */
		expireAt?: string | null;

		/** Unique identifier for the webhook */
		id?: string | null;

		/** Metadata policy for the webhook */
		metadataPolicy?: WebhookMetadataPolicy | null;

		/** Scheduled purge time for the webhook */
		purgeAt?: string | null;

		/** Last renewed time for the webhook */
		renewedAt?: string | null;

		/** Signing algorithm for the webhook */
		signingAlgo?: WebhookSigningAlgo | null;

		/** Signing key for the webhook */
		signingKey?: string | null;
		statistics?: WebhookStatistics;

		/** Status for the webhook */
		status?: WebhookStatus | null;

		/** Destination URL for events */
		url?: string | null;

		/** Unique identifier of the user */
		userId?: string | null;
	}
	export interface WebhookFormProperties {

		/** Unique identifier of the account */
		accountId: FormControl<string | null | undefined>,

		/** Created time for the webhook */
		createdAt: FormControl<string | null | undefined>,

		/** Expiration time for the webhook */
		expireAt: FormControl<string | null | undefined>,

		/** Unique identifier for the webhook */
		id: FormControl<string | null | undefined>,

		/** Metadata policy for the webhook */
		metadataPolicy: FormControl<WebhookMetadataPolicy | null | undefined>,

		/** Scheduled purge time for the webhook */
		purgeAt: FormControl<string | null | undefined>,

		/** Last renewed time for the webhook */
		renewedAt: FormControl<string | null | undefined>,

		/** Signing algorithm for the webhook */
		signingAlgo: FormControl<WebhookSigningAlgo | null | undefined>,

		/** Signing key for the webhook */
		signingKey: FormControl<string | null | undefined>,

		/** Status for the webhook */
		status: FormControl<WebhookStatus | null | undefined>,

		/** Destination URL for events */
		url: FormControl<string | null | undefined>,

		/** Unique identifier of the user */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateWebhookFormGroup() {
		return new FormGroup<WebhookFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<string | null | undefined>(undefined),
			expireAt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			metadataPolicy: new FormControl<WebhookMetadataPolicy | null | undefined>(undefined),
			purgeAt: new FormControl<string | null | undefined>(undefined),
			renewedAt: new FormControl<string | null | undefined>(undefined),
			signingAlgo: new FormControl<WebhookSigningAlgo | null | undefined>(undefined),
			signingKey: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<WebhookStatus | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WebhookMetadataPolicy { NONE = 'NONE', HEADER = 'HEADER', BODY = 'BODY' }

	export enum WebhookSigningAlgo { HMAC_SHA256 = 'HMAC_SHA256', NONE = 'NONE' }

	export interface WebhookStatistics {

		/** Current delivery status */
		failed?: boolean | null;

		/** Total delivery attempts */
		totalAttempts?: number | null;

		/** Total failed deliveries */
		totalFailures?: number | null;

		/** Total successful deliveries */
		totalSuccesses?: number | null;
	}
	export interface WebhookStatisticsFormProperties {

		/** Current delivery status */
		failed: FormControl<boolean | null | undefined>,

		/** Total delivery attempts */
		totalAttempts: FormControl<number | null | undefined>,

		/** Total failed deliveries */
		totalFailures: FormControl<number | null | undefined>,

		/** Total successful deliveries */
		totalSuccesses: FormControl<number | null | undefined>,
	}
	export function CreateWebhookStatisticsFormGroup() {
		return new FormGroup<WebhookStatisticsFormProperties>({
			failed: new FormControl<boolean | null | undefined>(undefined),
			totalAttempts: new FormControl<number | null | undefined>(undefined),
			totalFailures: new FormControl<number | null | undefined>(undefined),
			totalSuccesses: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum WebhookStatus { ACTIVE = 'ACTIVE', PAUSED = 'PAUSED' }

	export interface WebhookCreate {

		/** Events to subscribe to the webhook */
		events?: Array<CallType>;

		/** Metadata policy for the webhook */
		metadataPolicy?: WebhookMetadataPolicy | null;

		/** Signing algorithm for the webhook */
		signingAlgo?: WebhookCreateSigningAlgo | null;

		/** Signing key for the webhook */
		signingKey?: string | null;

		/** Destination URL for events */
		url?: string | null;
	}
	export interface WebhookCreateFormProperties {

		/** Metadata policy for the webhook */
		metadataPolicy: FormControl<WebhookMetadataPolicy | null | undefined>,

		/** Signing algorithm for the webhook */
		signingAlgo: FormControl<WebhookCreateSigningAlgo | null | undefined>,

		/** Signing key for the webhook */
		signingKey: FormControl<string | null | undefined>,

		/** Destination URL for events */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebhookCreateFormGroup() {
		return new FormGroup<WebhookCreateFormProperties>({
			metadataPolicy: new FormControl<WebhookMetadataPolicy | null | undefined>(undefined),
			signingAlgo: new FormControl<WebhookCreateSigningAlgo | null | undefined>(undefined),
			signingKey: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WebhookCreateSigningAlgo { HMAC_SHA256 = 'HMAC_SHA256' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * User info
		 * Get self
		 * @return {User} Success
		 */
		GetUser(): Observable<User> {
			return this.http.get<User>(this.baseUri + 'self', {});
		}

		/**
		 * Account info
		 * Get self/account
		 * @return {Account} Successful
		 */
		GetAccount(): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'self/account', {});
		}

		/**
		 * List active calls
		 * Lists currently active calls
		 * Get self/calls
		 * @param {number} fromDate Return calls that occurred after this point in time
		 * @param {number} toDate Return calls that occurred before this point in time
		 * @param {CallDirection} direction Filter by call direction. For multiple criteria, seperate values by a comma.
		 * @param {ListCallsStates} states Filter calls by state. For multiple criteria, seperate values by a comma.
		 * @param {number} offset Page number of calls to return
		 * @param {number} size Return this amount of calls in the response
		 * @param {ListCallsOrder} order Sort in either ascending or descending order
		 * @param {string} sort Sort calls by property
		 * @return {Array<Call>} Successful
		 */
		ListCalls(fromDate: number | null | undefined, toDate: number | null | undefined, direction: CallDirection | null | undefined, states: ListCallsStates | null | undefined, offset: number | null | undefined, size: number | null | undefined, order: ListCallsOrder | null | undefined, sort: string | null | undefined): Observable<Array<Call>> {
			return this.http.get<Array<Call>>(this.baseUri + 'self/calls?fromDate=' + fromDate + '&toDate=' + toDate + '&direction=' + direction + '&states=' + states + '&offset=' + offset + '&size=' + size + '&order=' + order + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Place a call
		 * Post self/calls
		 * @param {CallCreate} requestBody Place call parameters
		 * @return {void} 
		 */
		CreateCall(requestBody: CallCreate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'self/calls', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get calls count
		 * Get self/calls/count
		 * @param {number} fromDate Return calls that occurred after this point in time
		 * @param {number} toDate Return calls that occurred before this point in time
		 * @param {CallDirection} direction Filter by call direction. For multiple criteria, seperate values by a comma.
		 * @param {ListCallsStates} states Filter calls by state. For multiple criteria, seperate values by a comma.
		 * @return {EventsCount} Successful
		 */
		GetCallsCount(fromDate: number | null | undefined, toDate: number | null | undefined, direction: CallDirection | null | undefined, states: ListCallsStates | null | undefined): Observable<EventsCount> {
			return this.http.get<EventsCount>(this.baseUri + 'self/calls/count?fromDate=' + fromDate + '&toDate=' + toDate + '&direction=' + direction + '&states=' + states, {});
		}

		/**
		 * End a call
		 * Delete self/calls/{id}
		 * @param {string} id Unique identifier of the call
		 * @return {Array<Call>} Successful
		 */
		DestroyCall(id: string): Observable<Array<Call>> {
			return this.http.delete<Array<Call>>(this.baseUri + 'self/calls/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get a call
		 * Get self/calls/{id}
		 * @param {string} id Unique identifier of the call
		 * @return {Array<Call>} Successful
		 */
		GetRoles(id: string): Observable<Array<Call>> {
			return this.http.get<Array<Call>>(this.baseUri + 'self/calls/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Answer call (On supported devices)
		 * Put self/calls/{id}/answer
		 * @param {string} id Unique identifier of the call
		 * @return {Call} Successful
		 */
		CallAnswer(id: string): Observable<Call> {
			return this.http.put<Call>(this.baseUri + 'self/calls/' + (id == null ? '' : encodeURIComponent(id)) + '/answer', null, {});
		}

		/**
		 * Unhold
		 * Delete self/calls/{id}/hold
		 * @param {string} id Unique identifier of the call
		 * @return {Call} Successful
		 */
		CallUnold(id: string): Observable<Call> {
			return this.http.delete<Call>(this.baseUri + 'self/calls/' + (id == null ? '' : encodeURIComponent(id)) + '/hold', {});
		}

		/**
		 * Put call on hold
		 * Put self/calls/{id}/hold
		 * @param {string} id Unique identifier of the call
		 * @return {Call} Successful
		 */
		CallHold(id: string): Observable<Call> {
			return this.http.put<Call>(this.baseUri + 'self/calls/' + (id == null ? '' : encodeURIComponent(id)) + '/hold', null, {});
		}

		/**
		 * Transfer call
		 * Post self/calls/{id}/transfer
		 * @param {string} id Unique identifier of the call
		 * @param {CallTransfer} requestBody Call transfer parameters
		 * @return {Call} Successful
		 */
		CallTransfer(id: string, requestBody: CallTransfer): Observable<Call> {
			return this.http.post<Call>(this.baseUri + 'self/calls/' + (id == null ? '' : encodeURIComponent(id)) + '/transfer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Send call to voicemail
		 * Put self/calls/{id}/vmtransfer
		 * @param {string} id Unique identifier of the call
		 * @return {Call} Successful
		 */
		CallVMTransfer(id: string): Observable<Call> {
			return this.http.put<Call>(this.baseUri + 'self/calls/' + (id == null ? '' : encodeURIComponent(id)) + '/vmtransfer', null, {});
		}

		/**
		 * List events
		 * Get self/events
		 * @param {CallType} types Record type
		 * @param {number} fromDate Return events that occurred after this point in time
		 * @param {number} toDate Return events that occurred before this point in time
		 * @param {CallDirection} direction Filter by event direction
		 * @param {CallState} states Filter events by state
		 * @param {number} offset Page number of events to return
		 * @param {number} size Return this amount of events in the response
		 * @param {ListCallsOrder} order Sort in either ascending or descending order'
		 * @param {string} sort Sort events by property
		 * @return {Array<Event>} Successful
		 */
		ListEvents(types: CallType | null | undefined, fromDate: number | null | undefined, toDate: number | null | undefined, direction: CallDirection | null | undefined, states: CallState | null | undefined, offset: number | null | undefined, size: number | null | undefined, order: ListCallsOrder | null | undefined, sort: string | null | undefined): Observable<Array<Event>> {
			return this.http.get<Array<Event>>(this.baseUri + 'self/events?types=' + types + '&fromDate=' + fromDate + '&toDate=' + toDate + '&direction=' + direction + '&states=' + states + '&offset=' + offset + '&size=' + size + '&order=' + order + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}

		/**
		 * Get events count
		 * Get self/events/count
		 * @param {number} fromDate Return events that occurred after this point in time
		 * @param {number} toDate Return events that occurred before this point in time
		 * @param {CallDirection} direction Filter by event direction
		 * @param {ListCallsStates} states Filter events by state
		 * @return {EventsCount} Successful
		 */
		GetEventsCount(fromDate: number | null | undefined, toDate: number | null | undefined, direction: CallDirection | null | undefined, states: ListCallsStates | null | undefined): Observable<EventsCount> {
			return this.http.get<EventsCount>(this.baseUri + 'self/events/count?fromDate=' + fromDate + '&toDate=' + toDate + '&direction=' + direction + '&states=' + states, {});
		}

		/**
		 * Get event
		 * Get self/events/{id}
		 * @param {string} id Unique identifier of the event
		 * @return {Array<Event>} Successful
		 */
		GetEvent(id: string): Observable<Array<Event>> {
			return this.http.get<Array<Event>>(this.baseUri + 'self/events/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * List web hooks
		 * Get self/webhooks
		 * @return {Array<Webhook>} Successful
		 */
		ListWebhooks(): Observable<Array<Webhook>> {
			return this.http.get<Array<Webhook>>(this.baseUri + 'self/webhooks', {});
		}

		/**
		 * Create a new webhook subscription
		 * Post self/webhooks
		 * @param {WebhookCreate} requestBody Webhook create parameters
		 * @return {void} 
		 */
		CreateWebhook(requestBody: WebhookCreate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'self/webhooks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a web hook
		 * Delete self/webhooks/{id}
		 * @param {string} id Unique identifier of the webhook
		 * @return {void} 
		 */
		DestroyWebhook(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/webhooks/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get web hook details
		 * Get self/webhooks/{id}
		 * @param {string} id Unique identifier of the webhook
		 * @return {Webhook} Successful
		 */
		ViewWebhook(id: string): Observable<Webhook> {
			return this.http.get<Webhook>(this.baseUri + 'self/webhooks/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Renews a web hook
		 * Put self/webhooks/{id}/renew
		 * @param {string} id Webhook ID
		 * @return {Webhook} Successful
		 */
		RenewWebhook(id: string): Observable<Webhook> {
			return this.http.put<Webhook>(this.baseUri + 'self/webhooks/' + (id == null ? '' : encodeURIComponent(id)) + '/renew', null, {});
		}
	}

	export enum ListCallsStates { INITIALIZING = 'INITIALIZING', RINGING = 'RINGING', ACTIVE = 'ACTIVE', HELD = 'HELD', REMOTE_HELD = 'REMOTE_HELD' }

	export enum ListCallsOrder { DESC = 'DESC', ASC = 'ASC' }

}

