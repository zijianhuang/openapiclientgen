import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Account {

		/** Unique identifier of the account */
		id?: number;

		/** Name of the account */
		name?: string;

		/** Organization of the account */
		org?: string;

		/** Status of the account */
		status?: AccountStatus;
		AccountUcis?: Array<AccountUcis>;
	}

	export enum AccountStatus { PENDING = 0, ACTIVE = 1, DELETED = 2, ARCHIVED = 3 }

	export interface AccountUcis {
		health?: AccountHealth;
		id?: number;
		type?: string;
		ucpAccountId?: string;
		ucpLabel?: string;
	}

	export interface AccountHealth {
		message?: string;
		status?: string;
	}

	export interface Call {

		/** Unique identifier of the account */
		accountId: number;

		/** Time to answer the call */
		answerTime?: Date;

		/** Remote caller ID */
		callerId?: string;

		/** Direction of the call */
		direction: CallDirection;

		/** Duration of the call in milliseconds */
		duration: number;

		/** End time of the call */
		endTime?: Date;

		/** External identifier of the call */
		externalId?: string;

		/** Unique identifier of the call */
		id: number;

		/** Unique identifier of the account */
		phoneNumber: string;

		/** Start time of the call */
		startTime: Date;

		/** Status of the call */
		state: CallState;

		/** Record type */
		type: CallType;

		/** Unique identifier of communications provider */
		uciId: number;

		/** Unique identifier of the user */
		userId: number;
	}

	export enum CallDirection { INBOUND = 0, OUTBOUND = 1 }

	export enum CallState { INITIALIZING = 0, RINGING = 1, ACTIVE = 2, HELD = 3, REMOTE_HELD = 4, DETACHED = 5, REJECTED = 6, CANCELLED = 7, ANSWERED = 8, MISSED = 9 }

	export enum CallType { CALL = 0 }

	export interface CallCreate {

		/** Phone number to call */
		phoneNumber: string;
	}

	export interface CallTransfer {

		/** Phone number to transfer to */
		phoneNumber: string;
	}

	export interface Error {
		field?: string;
		message?: string;
	}

	export interface ErrorResponse {
		errorCode?: string;
		errorMessage?: string;
		errors?: Array<Error>;
	}

	export interface Event {

		/** Unique identifier of the account */
		accountId: number;

		/** Time to answer the event */
		answerTime?: Date;

		/** Remote caller ID */
		callerId?: string;

		/** Direction of the event */
		direction: CallDirection;

		/** Duration of the call in milliseconds */
		duration?: number;

		/** End time of the event */
		endTime?: Date;

		/** External identifier of the event */
		externalId?: string;

		/** Unique identifier of the event */
		id: number;

		/** Unique identifier of the account */
		phoneNumber: string;
		smsData?: string;

		/** Start time of the event */
		startTime: Date;

		/** Status of the event */
		state: CallState;

		/** Record type */
		type: CallType;

		/** Unique identifier of communications provider */
		uciId: number;

		/** Unique identifier of the user */
		userId: number;
	}

	export interface EventsCount {

		/** Number of events found */
		count?: number;
	}

	export interface User {

		/** Unique identifier of the user's account */
		accountId?: number;

		/** The name of the user's account */
		acountLabel?: string;

		/** Contact number of the user */
		contactNumber?: string;

		/** Email address of the user */
		emailAddress?: string;

		/** First name of the user */
		firstName?: string;

		/** Unique identifier of the user */
		id?: number;

		/** Last name of the user */
		lastName?: string;
		UserRoles?: Array<UserRoles>;

		/** Status of the user */
		status?: AccountStatus;
		UserUcis?: Array<UserUcis>;
	}

	export interface UserRoles {

		/** Code for the role */
		code?: string;

		/** Name for the role */
		name?: string;
	}

	export interface UserUcis {
		health?: UserHealth;
		id?: number;
		type?: string;
		ucpLabel?: string;
	}

	export interface UserHealth {
		message?: string;
		status?: string;
	}

	export interface Webhook {

		/** Unique identifier of the account */
		accountId?: string;

		/** Created time for the webhook */
		createdAt?: string;

		/** Subscribed events for the webhook */
		events?: Array<CallType>;

		/** Expiration time for the webhook */
		expireAt?: string;

		/** Unique identifier for the webhook */
		id?: string;

		/** Metadata policy for the webhook */
		metadataPolicy?: WebhookMetadataPolicy;

		/** Scheduled purge time for the webhook */
		purgeAt?: string;

		/** Last renewed time for the webhook */
		renewedAt?: string;

		/** Signing algorithm for the webhook */
		signingAlgo?: WebhookSigningAlgo;

		/** Signing key for the webhook */
		signingKey?: string;
		statistics?: WebhookStatistics;

		/** Status for the webhook */
		status?: WebhookStatus;

		/** Destination URL for events */
		url?: string;

		/** Unique identifier of the user */
		userId?: string;
	}

	export enum WebhookMetadataPolicy { NONE = 0, HEADER = 1, BODY = 2 }

	export enum WebhookSigningAlgo { HMAC_SHA256 = 0, NONE = 1 }

	export interface WebhookStatistics {

		/** Current delivery status */
		failed?: boolean;

		/** Total delivery attempts */
		totalAttempts?: number;

		/** Total failed deliveries */
		totalFailures?: number;

		/** Total successful deliveries */
		totalSuccesses?: number;
	}

	export enum WebhookStatus { ACTIVE = 0, PAUSED = 1 }

	export interface WebhookCreate {

		/** Events to subscribe to the webhook */
		events?: Array<CallType>;

		/** Metadata policy for the webhook */
		metadataPolicy?: WebhookMetadataPolicy;

		/** Signing algorithm for the webhook */
		signingAlgo?: WebhookCreateSigningAlgo;

		/** Signing key for the webhook */
		signingKey?: string;

		/** Destination URL for events */
		url?: string;
	}

	export enum WebhookCreateSigningAlgo { HMAC_SHA256 = 0 }

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
		ListCalls(fromDate: number, toDate: number, direction: CallDirection, states: ListCallsStates, offset: number, size: number, order: ListCallsOrder, sort: string): Observable<Array<Call>> {
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
		GetCallsCount(fromDate: number, toDate: number, direction: CallDirection, states: ListCallsStates): Observable<EventsCount> {
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
		ListEvents(types: CallType, fromDate: number, toDate: number, direction: CallDirection, states: CallState, offset: number, size: number, order: ListCallsOrder, sort: string): Observable<Array<Event>> {
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
		GetEventsCount(fromDate: number, toDate: number, direction: CallDirection, states: ListCallsStates): Observable<EventsCount> {
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

	export enum ListCallsStates { INITIALIZING = 0, RINGING = 1, ACTIVE = 2, HELD = 3, REMOTE_HELD = 4 }

	export enum ListCallsOrder { DESC = 0, ASC = 1 }

}

