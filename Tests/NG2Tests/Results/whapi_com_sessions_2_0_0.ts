import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Error {

		/** A unique William Hill identifier for the error */
		code?: string | null;

		/** To help pinpoint the exact parameter where a request has failed */
		field?: string | null;

		/** A unique William Hill text string to enable you to identify the error */
		message?: string | null;
	}
	export interface ErrorFormProperties {

		/** A unique William Hill identifier for the error */
		code: FormControl<string | null | undefined>,

		/** To help pinpoint the exact parameter where a request has failed */
		field: FormControl<string | null | undefined>,

		/** A unique William Hill text string to enable you to identify the error */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LoginRequest {

		/** Whether extended login or normal login is required. If the parameter is set to Y your application will generate an authentication ticket valid for a period of 60 days, without expiring due to inactivity. If the parameter is left blank or set to N this means your application will support the normal expiry times for tickets: The ticket expires after 2 hours of inactivity. The ticket is valid for a maximum of 8 hours after it has been issued. */
		extended?: boolean | null;

		/**
		 * Customer Password
		 * Required
		 */
		password: string;

		/**
		 * Customer Username
		 * Required
		 */
		username: string;
	}
	export interface LoginRequestFormProperties {

		/** Whether extended login or normal login is required. If the parameter is set to Y your application will generate an authentication ticket valid for a period of 60 days, without expiring due to inactivity. If the parameter is left blank or set to N this means your application will support the normal expiry times for tickets: The ticket expires after 2 hours of inactivity. The ticket is valid for a maximum of 8 hours after it has been issued. */
		extended: FormControl<boolean | null | undefined>,

		/**
		 * Customer Password
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * Customer Username
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateLoginRequestFormGroup() {
		return new FormGroup<LoginRequestFormProperties>({
			extended: new FormControl<boolean | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9_\-]{6,15}$')]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z0-9_@\ \.]{5,15}$')]),
		});

	}

	export interface Logoutresponse {
		success?: boolean | null;
	}
	export interface LogoutresponseFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateLogoutresponseFormGroup() {
		return new FormGroup<LogoutresponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ServiceTicket {

		/** This is the URL of the target service sent in the request. This is a combination of the endpoint and the ticket for future operations such as DELETE. */
		location?: string | null;

		/**
		 * The TGT ticket
		 * Required
		 */
		ticket: string;
	}
	export interface ServiceTicketFormProperties {

		/** This is the URL of the target service sent in the request. This is a combination of the endpoint and the ticket for future operations such as DELETE. */
		location: FormControl<string | null | undefined>,

		/**
		 * The TGT ticket
		 * Required
		 */
		ticket: FormControl<string | null | undefined>,
	}
	export function CreateServiceTicketFormGroup() {
		return new FormGroup<ServiceTicketFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			ticket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Session {

		/**
		 * The UTC time when the ticket expires.
		 * Required
		 */
		expiryDateTime: string;

		/** The value you have selected previous to executing the request. If the value is Y, this enables your application to generate a ticket valid for 60 days without expiring due to inactivity. */
		extended?: boolean | null;

		/** This is the URL of the target service sent in the request. This is a combination of the endpoint and the ticket for future operations such as DELETE. */
		location?: string | null;

		/** Indicates that the account has a temporary password set and hence the user must be prompted to change their password. */
		temporaryPassword?: boolean | null;

		/** Url for user to change password. A TGT must be added to the URL */
		temporaryPasswordUrl?: string | null;

		/**
		 * The TGT ticket
		 * Required
		 */
		ticket: string;
	}
	export interface SessionFormProperties {

		/**
		 * The UTC time when the ticket expires.
		 * Required
		 */
		expiryDateTime: FormControl<string | null | undefined>,

		/** The value you have selected previous to executing the request. If the value is Y, this enables your application to generate a ticket valid for 60 days without expiring due to inactivity. */
		extended: FormControl<boolean | null | undefined>,

		/** This is the URL of the target service sent in the request. This is a combination of the endpoint and the ticket for future operations such as DELETE. */
		location: FormControl<string | null | undefined>,

		/** Indicates that the account has a temporary password set and hence the user must be prompted to change their password. */
		temporaryPassword: FormControl<boolean | null | undefined>,

		/** Url for user to change password. A TGT must be added to the URL */
		temporaryPasswordUrl: FormControl<string | null | undefined>,

		/**
		 * The TGT ticket
		 * Required
		 */
		ticket: FormControl<string | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			expiryDateTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			extended: new FormControl<boolean | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			temporaryPassword: new FormControl<boolean | null | undefined>(undefined),
			temporaryPasswordUrl: new FormControl<string | null | undefined>(undefined),
			ticket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SessionsErrors {
		errors?: Array<Error>;
	}
	export interface SessionsErrorsFormProperties {
	}
	export function CreateSessionsErrorsFormGroup() {
		return new FormGroup<SessionsErrorsFormProperties>({
		});

	}

	export interface Ticketvalidityresponse {
		valid?: boolean | null;
	}
	export interface TicketvalidityresponseFormProperties {
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreateTicketvalidityresponseFormGroup() {
		return new FormGroup<TicketvalidityresponseFormProperties>({
			valid: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Logs in a customer and obtains an authentication ticket.
		 * Logs in a customer by obtaining an authentication ticket. It can then be used directly with the other William Hill APIs to access a customer’s sportsbook account, place a bet, etc.
		 * Post tickets
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma Separated List)
		 * @param {string} languageAsPerTerritory Defines response field name language, true (default) returns in language defined by territory, false returns in English
		 * @param {LoginRequest} requestBody Login request object
		 * @return {Session} Success
		 */
		LogIn(fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined, languageAsPerTerritory: string | null | undefined, requestBody: LoginRequest): Observable<Session> {
			return this.http.post<Session>(this.baseUri + 'tickets?' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&') + '&languageAsPerTerritory=' + (languageAsPerTerritory == null ? '' : encodeURIComponent(languageAsPerTerritory)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks the validity of a session ticket.
		 * Checks the validity of a session ticket.
		 * Get tickets/{tgt}
		 * @param {string} tgt Ticket Granting Ticket obtained from a previous request
		 * @param {string} languageAsPerTerritory Defines response field name language, true (default) returns in language defined by territory, false returns in English
		 * @return {void} The validity status of the tgt
		 */
		ValidateSession(tgt: string, languageAsPerTerritory: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tickets/' + (tgt == null ? '' : encodeURIComponent(tgt)) + '&languageAsPerTerritory=' + (languageAsPerTerritory == null ? '' : encodeURIComponent(languageAsPerTerritory)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Log out a customer.
		 * Logs out a customer.
		 * Delete tickets/{tgt}
		 * @param {string} tgt Ticket Granting Ticket obtained from a previous request
		 * @param {string} languageAsPerTerritory Defines response field name language, true (default) returns in language defined by territory, false returns in English
		 * @return {Logoutresponse} Success - Logout
		 */
		LogOut(tgt: string, languageAsPerTerritory: string | null | undefined): Observable<Logoutresponse> {
			return this.http.delete<Logoutresponse>(this.baseUri + 'tickets/' + (tgt == null ? '' : encodeURIComponent(tgt)) + '&languageAsPerTerritory=' + (languageAsPerTerritory == null ? '' : encodeURIComponent(languageAsPerTerritory)), {});
		}

		/**
		 * Obtains a one-time Service Ticket that can be used to access other William Hill services.
		 * Obtains a one-time Service Ticket that can be used to access other CAS enabled William Hill services that are not available through the standard suite of APIs. You first need to have logged in a customer to obtain an Authentication Ticket.
		 * Get tickets/{tgt}/serviceTicket
		 * @param {string} tgt Ticket Granting Ticket obtained from a previous request
		 * @param {string} languageAsPerTerritory Defines response field name language, true (default) returns in language defined by territory, false returns in English
		 * @param {string} target The target URL of the CAS enabled service that you want to use with the service ticket.
		 * @param {Array<string>} fields Specify an absolute field list to return (Comma Separated List)
		 * @param {Array<string>} include Specify fields in addition to the default to return (Comma Separated List)
		 * @param {Array<string>} exclude Specify fields from the default to exclude (Comma Separated List)
		 * @return {ServiceTicket} Success - Service Ticket created
		 */
		GetServiceTicket(tgt: string, languageAsPerTerritory: string | null | undefined, target: string, fields: Array<string> | null | undefined, include: Array<string> | null | undefined, exclude: Array<string> | null | undefined): Observable<ServiceTicket> {
			return this.http.get<ServiceTicket>(this.baseUri + 'tickets/' + (tgt == null ? '' : encodeURIComponent(tgt)) + '/serviceTicket&languageAsPerTerritory=' + (languageAsPerTerritory == null ? '' : encodeURIComponent(languageAsPerTerritory)) + '&target=' + (target == null ? '' : encodeURIComponent(target)) + '&' + fields?.map(z => `fields=${encodeURIComponent(z)}`).join('&') + '&' + include?.map(z => `include=${encodeURIComponent(z)}`).join('&') + '&' + exclude?.map(z => `exclude=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

}

