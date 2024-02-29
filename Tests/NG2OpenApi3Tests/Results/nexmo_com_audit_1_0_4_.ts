import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AuditEvent {

		/** A link to this audit event object if you were to retrieve it individually. */
		_links?: EventLink;

		/** The NEXMO_API_KEY of the Vonage API account that the audit event is associated with. */
		account_id?: string | null;

		/** A valid JSON object with information detailing the context of the audit event. */
		context?: string | null;

		/**
		 * When the audit event was created.
		 * Type: DateOnly
		 */
		created_at?: Date | null;

		/** The type of the audit event. */
		event_type?: AuditEventEvent_type | null;

		/** A description of the event type */
		event_type_description?: string | null;

		/** UUID of the audit event */
		id?: string | null;

		/**
		 * The source of the event.
		 * CD: Customer Dashboard DEVAPI: via Developer API
		 */
		source?: AuditEventSource | null;

		/** ISO 3166-1 Alpha-2 country code recorded for the event. */
		source_country?: string | null;

		/** Description of the audit event source. */
		source_description?: AuditEventSource_description | null;

		/** The IP address used to make the account change. */
		source_ip?: string | null;

		/** Email of the user whose account the audit event is associated with. */
		user_email?: string | null;

		/**
		 * The ID of the user that the audit event is associated with.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		user_id?: number | null;
	}
	export interface AuditEventFormProperties {

		/** The NEXMO_API_KEY of the Vonage API account that the audit event is associated with. */
		account_id: FormControl<string | null | undefined>,

		/** A valid JSON object with information detailing the context of the audit event. */
		context: FormControl<string | null | undefined>,

		/**
		 * When the audit event was created.
		 * Type: DateOnly
		 */
		created_at: FormControl<Date | null | undefined>,

		/** The type of the audit event. */
		event_type: FormControl<AuditEventEvent_type | null | undefined>,

		/** A description of the event type */
		event_type_description: FormControl<string | null | undefined>,

		/** UUID of the audit event */
		id: FormControl<string | null | undefined>,

		/**
		 * The source of the event.
		 * CD: Customer Dashboard DEVAPI: via Developer API
		 */
		source: FormControl<AuditEventSource | null | undefined>,

		/** ISO 3166-1 Alpha-2 country code recorded for the event. */
		source_country: FormControl<string | null | undefined>,

		/** Description of the audit event source. */
		source_description: FormControl<AuditEventSource_description | null | undefined>,

		/** The IP address used to make the account change. */
		source_ip: FormControl<string | null | undefined>,

		/** Email of the user whose account the audit event is associated with. */
		user_email: FormControl<string | null | undefined>,

		/**
		 * The ID of the user that the audit event is associated with.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		user_id: FormControl<number | null | undefined>,
	}
	export function CreateAuditEventFormGroup() {
		return new FormGroup<AuditEventFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined),
			context: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			event_type: new FormControl<AuditEventEvent_type | null | undefined>(undefined),
			event_type_description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<AuditEventSource | null | undefined>(undefined),
			source_country: new FormControl<string | null | undefined>(undefined),
			source_description: new FormControl<AuditEventSource_description | null | undefined>(undefined),
			source_ip: new FormControl<string | null | undefined>(undefined),
			user_email: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A link to this audit event object if you were to retrieve it individually. */
	export interface EventLink {
		self?: any;
	}

	/** A link to this audit event object if you were to retrieve it individually. */
	export interface EventLinkFormProperties {
		self: FormControl<any | null | undefined>,
	}
	export function CreateEventLinkFormGroup() {
		return new FormGroup<EventLinkFormProperties>({
			self: new FormControl<any | null | undefined>(undefined),
		});

	}

	export enum AuditEventEvent_type { USER_STATUS = 'USER_STATUS', USER_UPDATE = 'USER_UPDATE', USER_BILLING_UPDATE = 'USER_BILLING_UPDATE', USER_CREATE = 'USER_CREATE', USER_LOGIN = 'USER_LOGIN', USER_LOGOUT = 'USER_LOGOUT', USER_PRODUCT_SEARCH = 'USER_PRODUCT_SEARCH', USER_API_KEYS_UPDATE = 'USER_API_KEYS_UPDATE', ACCOUNT_SECRET_DELETE = 'ACCOUNT_SECRET_DELETE', ACCOUNT_SECRET_CREATE = 'ACCOUNT_SECRET_CREATE', ACCOUNT_UPDATE_SPAMMER = 'ACCOUNT_UPDATE_SPAMMER', ACCOUNT_UPDATE_SETTINGS_API = 'ACCOUNT_UPDATE_SETTINGS_API', NUMBER_ASSIGN = 'NUMBER_ASSIGN', NUMBER_UPDATED = 'NUMBER_UPDATED', NUMBER_RELEASE = 'NUMBER_RELEASE', NUMBER_LINKED = 'NUMBER_LINKED', NUMBER_UNLINKED = 'NUMBER_UNLINKED', APP_CREATE = 'APP_CREATE', APP_UPDATE = 'APP_UPDATE', APP_DELETE = 'APP_DELETE', APP_DISABLE = 'APP_DISABLE', APP_ENABLE = 'APP_ENABLE', IP_WHITELIST_CREATE = 'IP_WHITELIST_CREATE', IP_WHITELIST_DELETE = 'IP_WHITELIST_DELETE', AUTORELOAD_ENABLE = 'AUTORELOAD_ENABLE', AUTORELOAD_UPDATE = 'AUTORELOAD_UPDATE', AUTORELOAD_DISABLE = 'AUTORELOAD_DISABLE' }

	export enum AuditEventSource { CD = 'CD', DEVAPI = 'DEVAPI' }

	export enum AuditEventSource_description { 'Customer Dashboard' = 'Customer Dashboard', 'Developer API' = 'Developer API' }

	export interface AuditEventType {

		/** A description of the event type */
		description?: string | null;

		/** The type of the audit event. */
		type?: AuditEventEvent_type | null;
	}
	export interface AuditEventTypeFormProperties {

		/** A description of the event type */
		description: FormControl<string | null | undefined>,

		/** The type of the audit event. */
		type: FormControl<AuditEventEvent_type | null | undefined>,
	}
	export function CreateAuditEventTypeFormGroup() {
		return new FormGroup<AuditEventTypeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AuditEventEvent_type | null | undefined>(undefined),
		});

	}

	export interface AuditEventTypesResp {

		/** An array of audit event types. */
		eventTypes?: Array<AuditEventType>;
	}
	export interface AuditEventTypesRespFormProperties {
	}
	export function CreateAuditEventTypesRespFormGroup() {
		return new FormGroup<AuditEventTypesRespFormProperties>({
		});

	}

	export interface AuditResp {

		/** Container containing the `events` array. */
		_embedded?: AuditResp_embedded;

		/** Container containing self, next and last page links. */
		_links?: PaginationLinks;

		/** Page containing results. */
		page?: PaginationData;
	}
	export interface AuditRespFormProperties {
	}
	export function CreateAuditRespFormGroup() {
		return new FormGroup<AuditRespFormProperties>({
		});

	}

	export interface AuditResp_embedded {
		events?: Array<AuditEvent>;
	}
	export interface AuditResp_embeddedFormProperties {
	}
	export function CreateAuditResp_embeddedFormGroup() {
		return new FormGroup<AuditResp_embeddedFormProperties>({
		});

	}


	/** Container containing self, next and last page links. */
	export interface PaginationLinks {
		last?: PaginationLinksLast;
		next?: PaginationLinksNext;
		self?: PaginationLinksSelf;
	}

	/** Container containing self, next and last page links. */
	export interface PaginationLinksFormProperties {
	}
	export function CreatePaginationLinksFormGroup() {
		return new FormGroup<PaginationLinksFormProperties>({
		});

	}

	export interface PaginationLinksLast {

		/** URI of the last document in the sequence. */
		href?: string | null;
	}
	export interface PaginationLinksLastFormProperties {

		/** URI of the last document in the sequence. */
		href: FormControl<string | null | undefined>,
	}
	export function CreatePaginationLinksLastFormGroup() {
		return new FormGroup<PaginationLinksLastFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaginationLinksNext {

		/** URI of the next document. */
		href?: string | null;
	}
	export interface PaginationLinksNextFormProperties {

		/** URI of the next document. */
		href: FormControl<string | null | undefined>,
	}
	export function CreatePaginationLinksNextFormGroup() {
		return new FormGroup<PaginationLinksNextFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaginationLinksSelf {

		/** URI of this document. */
		href?: string | null;
	}
	export interface PaginationLinksSelfFormProperties {

		/** URI of this document. */
		href: FormControl<string | null | undefined>,
	}
	export function CreatePaginationLinksSelfFormGroup() {
		return new FormGroup<PaginationLinksSelfFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Page containing results. */
	export interface PaginationData {

		/**
		 * Which page of the pagination sequence you are looking at.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number?: number | null;

		/**
		 * The total number of items in this response (page).
		 * Minimum: 1
		 * Maximum: 100
		 */
		size?: number | null;

		/**
		 * The total number of items across all pages.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalElements?: number | null;

		/**
		 * The number of pages of data in the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPages?: number | null;
	}

	/** Page containing results. */
	export interface PaginationDataFormProperties {

		/**
		 * Which page of the pagination sequence you are looking at.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number: FormControl<number | null | undefined>,

		/**
		 * The total number of items in this response (page).
		 * Minimum: 1
		 * Maximum: 100
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * The total number of items across all pages.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalElements: FormControl<number | null | undefined>,

		/**
		 * The number of pages of data in the response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreatePaginationDataFormGroup() {
		return new FormGroup<PaginationDataFormProperties>({
			number: new FormControl<number | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			totalElements: new FormControl<number | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CallbackUrl {

		/** The HTTP method used to make a callback to your application */
		method?: CallbackUrlMethod | null;

		/** The URL used for a callback to your application */
		url?: string | null;
	}
	export interface CallbackUrlFormProperties {

		/** The HTTP method used to make a callback to your application */
		method: FormControl<CallbackUrlMethod | null | undefined>,

		/** The URL used for a callback to your application */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCallbackUrlFormGroup() {
		return new FormGroup<CallbackUrlFormProperties>({
			method: new FormControl<CallbackUrlMethod | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CallbackUrlMethod { GET = 'GET', POST = 'POST' }

	export interface ContextAppCreate {

		/** UUID of the app that was created */
		appId?: string | null;
		created?: ContextAppCreateCreated;
	}
	export interface ContextAppCreateFormProperties {

		/** UUID of the app that was created */
		appId: FormControl<string | null | undefined>,
	}
	export function CreateContextAppCreateFormGroup() {
		return new FormGroup<ContextAppCreateFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContextAppCreateCreated {

		/** Which account the app is associated with */
		accountId?: string | null;
		answer_url?: CallbackUrl;

		/** UUID of the app that was created */
		appId?: string | null;
		event_url?: CallbackUrl;

		/** The name of the application created */
		name?: string | null;

		/** The type of application created */
		type?: string | null;
	}
	export interface ContextAppCreateCreatedFormProperties {

		/** Which account the app is associated with */
		accountId: FormControl<string | null | undefined>,

		/** UUID of the app that was created */
		appId: FormControl<string | null | undefined>,

		/** The name of the application created */
		name: FormControl<string | null | undefined>,

		/** The type of application created */
		type: FormControl<string | null | undefined>,
	}
	export function CreateContextAppCreateCreatedFormGroup() {
		return new FormGroup<ContextAppCreateCreatedFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContextNumberLinking {

		/** Which account the number is associated with */
		account?: string | null;

		/** UUID of the app the number is being linked/unlinked to */
		applicationId?: string | null;

		/** The country of the number */
		country?: string | null;

		/** The phone number linked/unlinked to your application */
		msisdn?: string | null;
	}
	export interface ContextNumberLinkingFormProperties {

		/** Which account the number is associated with */
		account: FormControl<string | null | undefined>,

		/** UUID of the app the number is being linked/unlinked to */
		applicationId: FormControl<string | null | undefined>,

		/** The country of the number */
		country: FormControl<string | null | undefined>,

		/** The phone number linked/unlinked to your application */
		msisdn: FormControl<string | null | undefined>,
	}
	export function CreateContextNumberLinkingFormGroup() {
		return new FormGroup<ContextNumberLinkingFormProperties>({
			account: new FormControl<string | null | undefined>(undefined),
			applicationId: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			msisdn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContextNumberUpdate {

		/** The country of the number */
		country?: string | null;

		/** The URL of the endpoint the number has been forwarded to */
		http?: string | null;

		/** The phone number linked/unlinked to your application */
		msisdn?: string | null;

		/** The type of endpoint the number has been forwarded to */
		'voice-type'?: ContextNumberUpdateVoice_type | null;

		/** The value of the endpoint the number has been forwarded to */
		'voice-value'?: string | null;
	}
	export interface ContextNumberUpdateFormProperties {

		/** The country of the number */
		country: FormControl<string | null | undefined>,

		/** The URL of the endpoint the number has been forwarded to */
		http: FormControl<string | null | undefined>,

		/** The phone number linked/unlinked to your application */
		msisdn: FormControl<string | null | undefined>,

		/** The type of endpoint the number has been forwarded to */
		'voice-type': FormControl<ContextNumberUpdateVoice_type | null | undefined>,

		/** The value of the endpoint the number has been forwarded to */
		'voice-value': FormControl<string | null | undefined>,
	}
	export function CreateContextNumberUpdateFormGroup() {
		return new FormGroup<ContextNumberUpdateFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			http: new FormControl<string | null | undefined>(undefined),
			msisdn: new FormControl<string | null | undefined>(undefined),
			'voice-type': new FormControl<ContextNumberUpdateVoice_type | null | undefined>(undefined),
			'voice-value': new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContextNumberUpdateVoice_type { tel = 'tel', sip = 'sip', vxml = 'vxml', app = 'app' }

	export interface ErrorBadRequest {

		/** A human readable description of the error */
		error?: string | null;

		/** A longer description of the error */
		message?: string | null;

		/**
		 * The HTTP Status code of the error
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;
	}
	export interface ErrorBadRequestFormProperties {

		/** A human readable description of the error */
		error: FormControl<string | null | undefined>,

		/** A longer description of the error */
		message: FormControl<string | null | undefined>,

		/**
		 * The HTTP Status code of the error
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateErrorBadRequestFormGroup() {
		return new FormGroup<ErrorBadRequestFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ErrorForbidden {

		/** A human readable description of the error */
		error?: string | null;

		/** A longer description of the error */
		message?: string | null;

		/**
		 * The HTTP Status code of the error
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;
	}
	export interface ErrorForbiddenFormProperties {

		/** A human readable description of the error */
		error: FormControl<string | null | undefined>,

		/** A longer description of the error */
		message: FormControl<string | null | undefined>,

		/**
		 * The HTTP Status code of the error
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateErrorForbiddenFormGroup() {
		return new FormGroup<ErrorForbiddenFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ErrorNotFound {

		/** A human readable description of the error XXX */
		error?: string | null;

		/** A longer description of the error YYY */
		message?: string | null;

		/**
		 * The HTTP Status code of the error
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;
	}
	export interface ErrorNotFoundFormProperties {

		/** A human readable description of the error XXX */
		error: FormControl<string | null | undefined>,

		/** A longer description of the error YYY */
		message: FormControl<string | null | undefined>,

		/**
		 * The HTTP Status code of the error
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateErrorNotFoundFormGroup() {
		return new FormGroup<ErrorNotFoundFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ErrorUnauthorized {

		/** A human readable description of the error */
		error?: string | null;

		/** A longer description of the error */
		message?: string | null;

		/**
		 * The HTTP Status code of the error
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;
	}
	export interface ErrorUnauthorizedFormProperties {

		/** A human readable description of the error */
		error: FormControl<string | null | undefined>,

		/** A longer description of the error */
		message: FormControl<string | null | undefined>,

		/**
		 * The HTTP Status code of the error
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateErrorUnauthorizedFormGroup() {
		return new FormGroup<ErrorUnauthorizedFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The type of the audit event. */
	export enum EventTypes { USER_STATUS = 'USER_STATUS', USER_UPDATE = 'USER_UPDATE', USER_BILLING_UPDATE = 'USER_BILLING_UPDATE', USER_CREATE = 'USER_CREATE', USER_LOGIN = 'USER_LOGIN', USER_LOGOUT = 'USER_LOGOUT', USER_PRODUCT_SEARCH = 'USER_PRODUCT_SEARCH', USER_API_KEYS_UPDATE = 'USER_API_KEYS_UPDATE', ACCOUNT_SECRET_DELETE = 'ACCOUNT_SECRET_DELETE', ACCOUNT_SECRET_CREATE = 'ACCOUNT_SECRET_CREATE', ACCOUNT_UPDATE_SPAMMER = 'ACCOUNT_UPDATE_SPAMMER', ACCOUNT_UPDATE_SETTINGS_API = 'ACCOUNT_UPDATE_SETTINGS_API', NUMBER_ASSIGN = 'NUMBER_ASSIGN', NUMBER_UPDATED = 'NUMBER_UPDATED', NUMBER_RELEASE = 'NUMBER_RELEASE', NUMBER_LINKED = 'NUMBER_LINKED', NUMBER_UNLINKED = 'NUMBER_UNLINKED', APP_CREATE = 'APP_CREATE', APP_UPDATE = 'APP_UPDATE', APP_DELETE = 'APP_DELETE', APP_DISABLE = 'APP_DISABLE', APP_ENABLE = 'APP_ENABLE', IP_WHITELIST_CREATE = 'IP_WHITELIST_CREATE', IP_WHITELIST_DELETE = 'IP_WHITELIST_DELETE', AUTORELOAD_ENABLE = 'AUTORELOAD_ENABLE', AUTORELOAD_UPDATE = 'AUTORELOAD_UPDATE', AUTORELOAD_DISABLE = 'AUTORELOAD_DISABLE' }

	export interface NoContent {

		/** A human readable description of the error AAA */
		error?: string | null;

		/** A longer description of the error BBB */
		message?: string | null;

		/**
		 * The HTTP Status code of the error
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;
	}
	export interface NoContentFormProperties {

		/** A human readable description of the error AAA */
		error: FormControl<string | null | undefined>,

		/** A longer description of the error BBB */
		message: FormControl<string | null | undefined>,

		/**
		 * The HTTP Status code of the error
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateNoContentFormGroup() {
		return new FormGroup<NoContentFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve audit events
		 * Get a series of audit events describing changes made to your Vonage API account over time.
		 * Get events
		 * @param {AuditEventEvent_type} event_type Filter results by this event type.
		 * @param {string} date_from Start of time range for audit events. DateTime in ISO-8601 format.
		 * @param {string} date_to End of time range for audit events. DateTime in ISO-8601 format.
		 * @param {string} search_text Return only audit events where the JSON object contains this search text. Must be legal text for a JSON attribute value, that is quotes and braces must be escaped.
		 * @param {string} page Page number starting with page 1.
		 * @param {number} size Number of elements per page.
		 *     Minimum: 1    Maximum: 100
		 * @return {AuditResp} OK
		 */
		GetEvents(event_type: AuditEventEvent_type | null | undefined, date_from: string | null | undefined, date_to: string | null | undefined, search_text: string | null | undefined, page: string | null | undefined, size: number | null | undefined): Observable<AuditResp> {
			return this.http.get<AuditResp>(this.baseUri + 'events?event_type=' + event_type + '&date_from=' + (date_from == null ? '' : encodeURIComponent(date_from)) + '&date_to=' + (date_to == null ? '' : encodeURIComponent(date_to)) + '&search_text=' + (search_text == null ? '' : encodeURIComponent(search_text)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&size=' + size, {});
		}

		/**
		 * Retrieve individual audit event
		 * Get the specified audit event.
		 * Get events/{id}
		 * @param {string} id The UUID of the audit event to retrieve
		 * @return {AuditEvent} OK
		 */
		GetEvent(id: string): Observable<AuditEvent> {
			return this.http.get<AuditEvent>(this.baseUri + 'events/' + (id == null ? '' : encodeURIComponent(id)), {});
		}
	}

}

