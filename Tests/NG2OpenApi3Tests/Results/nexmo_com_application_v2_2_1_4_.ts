import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ApplicationResponse {

		/** Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API. */
		capabilities?: Capabilities;

		/** The application's ID */
		id?: string | null;

		/** Friendly identifier for your application. This is not unique */
		name?: string | null;

		/** Application privacy config */
		privacy?: ApplicationResponsePrivacy;
	}
	export interface ApplicationResponseFormProperties {

		/** The application's ID */
		id: FormControl<string | null | undefined>,

		/** Friendly identifier for your application. This is not unique */
		name: FormControl<string | null | undefined>,
	}
	export function CreateApplicationResponseFormGroup() {
		return new FormGroup<ApplicationResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API. */
	export interface Capabilities {

		/** Meetings related configuration */
		meetings?: MeetingsCapability;

		/** Messages / Dispatch related configuration */
		messages?: MessagesCapability;

		/** RTC / Conversation Service related configuration */
		rtc?: RtcCapability;

		/** Specify the `vbc` capability to enable zero-rated calls for VBC number programmability service applications. This is always an empty object. */
		vbc?: string | null;

		/** Two factor authentication related configuration */
		verify?: VerifyCapability;

		/** Voice related configuration */
		voice?: VoiceCapability;
	}

	/** Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API. */
	export interface CapabilitiesFormProperties {

		/** Specify the `vbc` capability to enable zero-rated calls for VBC number programmability service applications. This is always an empty object. */
		vbc: FormControl<string | null | undefined>,
	}
	export function CreateCapabilitiesFormGroup() {
		return new FormGroup<CapabilitiesFormProperties>({
			vbc: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Meetings related configuration */
	export interface MeetingsCapability {
		webhooks?: MeetingsCapabilityWebhooks;
	}

	/** Meetings related configuration */
	export interface MeetingsCapabilityFormProperties {
	}
	export function CreateMeetingsCapabilityFormGroup() {
		return new FormGroup<MeetingsCapabilityFormProperties>({
		});

	}

	export interface MeetingsCapabilityWebhooks {

		/** Vonage will send recording changed events to this URL */
		recording_changed?: MeetingsCapabilityWebhooksRecording_changed;

		/** Vonage will send call room changed events to this URL */
		room_changed?: MeetingsCapabilityWebhooksRoom_changed;

		/** Vonage will send call session changed events to this URL */
		session_changed?: MeetingsCapabilityWebhooksSession_changed;
	}
	export interface MeetingsCapabilityWebhooksFormProperties {
	}
	export function CreateMeetingsCapabilityWebhooksFormGroup() {
		return new FormGroup<MeetingsCapabilityWebhooksFormProperties>({
		});

	}

	export interface MeetingsCapabilityWebhooksRecording_changed {
		address?: string | null;
		http_method?: MeetingsCapabilityWebhooksRecording_changedHttp_method | null;
	}
	export interface MeetingsCapabilityWebhooksRecording_changedFormProperties {
		address: FormControl<string | null | undefined>,
		http_method: FormControl<MeetingsCapabilityWebhooksRecording_changedHttp_method | null | undefined>,
	}
	export function CreateMeetingsCapabilityWebhooksRecording_changedFormGroup() {
		return new FormGroup<MeetingsCapabilityWebhooksRecording_changedFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			http_method: new FormControl<MeetingsCapabilityWebhooksRecording_changedHttp_method | null | undefined>(undefined),
		});

	}

	export enum MeetingsCapabilityWebhooksRecording_changedHttp_method { GET = 'GET', POST = 'POST', PUT = 'PUT' }

	export interface MeetingsCapabilityWebhooksRoom_changed {
		address?: string | null;
		http_method?: MeetingsCapabilityWebhooksRecording_changedHttp_method | null;
	}
	export interface MeetingsCapabilityWebhooksRoom_changedFormProperties {
		address: FormControl<string | null | undefined>,
		http_method: FormControl<MeetingsCapabilityWebhooksRecording_changedHttp_method | null | undefined>,
	}
	export function CreateMeetingsCapabilityWebhooksRoom_changedFormGroup() {
		return new FormGroup<MeetingsCapabilityWebhooksRoom_changedFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			http_method: new FormControl<MeetingsCapabilityWebhooksRecording_changedHttp_method | null | undefined>(undefined),
		});

	}

	export interface MeetingsCapabilityWebhooksSession_changed {
		address?: string | null;
		http_method?: MeetingsCapabilityWebhooksRecording_changedHttp_method | null;
	}
	export interface MeetingsCapabilityWebhooksSession_changedFormProperties {
		address: FormControl<string | null | undefined>,
		http_method: FormControl<MeetingsCapabilityWebhooksRecording_changedHttp_method | null | undefined>,
	}
	export function CreateMeetingsCapabilityWebhooksSession_changedFormGroup() {
		return new FormGroup<MeetingsCapabilityWebhooksSession_changedFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			http_method: new FormControl<MeetingsCapabilityWebhooksRecording_changedHttp_method | null | undefined>(undefined),
		});

	}


	/** Messages / Dispatch related configuration */
	export interface MessagesCapability {

		/** If not populated will be set to v1 */
		version?: string | null;
		webhooks?: MessagesCapabilityWebhooks;
	}

	/** Messages / Dispatch related configuration */
	export interface MessagesCapabilityFormProperties {

		/** If not populated will be set to v1 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateMessagesCapabilityFormGroup() {
		return new FormGroup<MessagesCapabilityFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessagesCapabilityWebhooks {

		/** Vonage will forward inbound messages to this URL */
		inbound_url?: MessagesCapabilityWebhooksInbound_url;

		/** Vonage will send message status updates (e.g. `delivered`, `seen`) to this URL */
		status_url?: MessagesCapabilityWebhooksStatus_url;
	}
	export interface MessagesCapabilityWebhooksFormProperties {
	}
	export function CreateMessagesCapabilityWebhooksFormGroup() {
		return new FormGroup<MessagesCapabilityWebhooksFormProperties>({
		});

	}

	export interface MessagesCapabilityWebhooksInbound_url {
		address?: string | null;
		http_method?: MessagesCapabilityWebhooksInbound_urlHttp_method | null;
	}
	export interface MessagesCapabilityWebhooksInbound_urlFormProperties {
		address: FormControl<string | null | undefined>,
		http_method: FormControl<MessagesCapabilityWebhooksInbound_urlHttp_method | null | undefined>,
	}
	export function CreateMessagesCapabilityWebhooksInbound_urlFormGroup() {
		return new FormGroup<MessagesCapabilityWebhooksInbound_urlFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			http_method: new FormControl<MessagesCapabilityWebhooksInbound_urlHttp_method | null | undefined>(undefined),
		});

	}

	export enum MessagesCapabilityWebhooksInbound_urlHttp_method { POST = 'POST' }

	export interface MessagesCapabilityWebhooksStatus_url {
		address?: string | null;
		http_method?: MessagesCapabilityWebhooksInbound_urlHttp_method | null;
	}
	export interface MessagesCapabilityWebhooksStatus_urlFormProperties {
		address: FormControl<string | null | undefined>,
		http_method: FormControl<MessagesCapabilityWebhooksInbound_urlHttp_method | null | undefined>,
	}
	export function CreateMessagesCapabilityWebhooksStatus_urlFormGroup() {
		return new FormGroup<MessagesCapabilityWebhooksStatus_urlFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			http_method: new FormControl<MessagesCapabilityWebhooksInbound_urlHttp_method | null | undefined>(undefined),
		});

	}


	/** RTC / Conversation Service related configuration */
	export interface RtcCapability {

		/**
		 * Minimum: 1
		 * Maximum: 31
		 */
		leg_persistence_time?: number | null;
		signed_callbacks?: boolean | null;
		webhooks?: RtcCapabilityWebhooks;
	}

	/** RTC / Conversation Service related configuration */
	export interface RtcCapabilityFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 31
		 */
		leg_persistence_time: FormControl<number | null | undefined>,
		signed_callbacks: FormControl<boolean | null | undefined>,
	}
	export function CreateRtcCapabilityFormGroup() {
		return new FormGroup<RtcCapabilityFormProperties>({
			leg_persistence_time: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(31)]),
			signed_callbacks: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RtcCapabilityWebhooks {

		/** Vonage will send RTC events to this URL */
		event_url?: RtcCapabilityWebhooksEvent_url;
	}
	export interface RtcCapabilityWebhooksFormProperties {
	}
	export function CreateRtcCapabilityWebhooksFormGroup() {
		return new FormGroup<RtcCapabilityWebhooksFormProperties>({
		});

	}

	export interface RtcCapabilityWebhooksEvent_url {
		address?: string | null;
		http_method?: RtcCapabilityWebhooksEvent_urlHttp_method | null;
	}
	export interface RtcCapabilityWebhooksEvent_urlFormProperties {
		address: FormControl<string | null | undefined>,
		http_method: FormControl<RtcCapabilityWebhooksEvent_urlHttp_method | null | undefined>,
	}
	export function CreateRtcCapabilityWebhooksEvent_urlFormGroup() {
		return new FormGroup<RtcCapabilityWebhooksEvent_urlFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			http_method: new FormControl<RtcCapabilityWebhooksEvent_urlHttp_method | null | undefined>(undefined),
		});

	}

	export enum RtcCapabilityWebhooksEvent_urlHttp_method { GET = 'GET', POST = 'POST' }


	/** Two factor authentication related configuration */
	export interface VerifyCapability {

		/** Verify current version. If specified must be set to v2 */
		version?: VerifyCapabilityVersion | null;
		webhooks?: VerifyCapabilityWebhooks;
	}

	/** Two factor authentication related configuration */
	export interface VerifyCapabilityFormProperties {

		/** Verify current version. If specified must be set to v2 */
		version: FormControl<VerifyCapabilityVersion | null | undefined>,
	}
	export function CreateVerifyCapabilityFormGroup() {
		return new FormGroup<VerifyCapabilityFormProperties>({
			version: new FormControl<VerifyCapabilityVersion | null | undefined>(undefined),
		});

	}

	export enum VerifyCapabilityVersion { v2 = 'v2' }

	export interface VerifyCapabilityWebhooks {

		/** Vonage will send request status events (e.g. `progress`, `complete`) to this URL */
		status_url?: VerifyCapabilityWebhooksStatus_url;
	}
	export interface VerifyCapabilityWebhooksFormProperties {
	}
	export function CreateVerifyCapabilityWebhooksFormGroup() {
		return new FormGroup<VerifyCapabilityWebhooksFormProperties>({
		});

	}

	export interface VerifyCapabilityWebhooksStatus_url {
		address?: string | null;
		http_method?: MessagesCapabilityWebhooksInbound_urlHttp_method | null;
	}
	export interface VerifyCapabilityWebhooksStatus_urlFormProperties {
		address: FormControl<string | null | undefined>,
		http_method: FormControl<MessagesCapabilityWebhooksInbound_urlHttp_method | null | undefined>,
	}
	export function CreateVerifyCapabilityWebhooksStatus_urlFormGroup() {
		return new FormGroup<VerifyCapabilityWebhooksStatus_urlFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			http_method: new FormControl<MessagesCapabilityWebhooksInbound_urlHttp_method | null | undefined>(undefined),
		});

	}


	/** Voice related configuration */
	export interface VoiceCapability {

		/**
		 * ttl used by the NCCO in case you’re using a conversation action (is set in hours and is 48 by default)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		conversation_ttl?: number | null;

		/** encompass all the payment related fields */
		payments?: VoiceCapabilityPayments;

		/** verify that a request is coming from Vonage servers (a jwt token will be sent on the callback authorization header) */
		signed_callbacks?: boolean | null;
		webhooks?: VoiceCapabilityWebhooks;
	}

	/** Voice related configuration */
	export interface VoiceCapabilityFormProperties {

		/**
		 * ttl used by the NCCO in case you’re using a conversation action (is set in hours and is 48 by default)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		conversation_ttl: FormControl<number | null | undefined>,

		/** verify that a request is coming from Vonage servers (a jwt token will be sent on the callback authorization header) */
		signed_callbacks: FormControl<boolean | null | undefined>,
	}
	export function CreateVoiceCapabilityFormGroup() {
		return new FormGroup<VoiceCapabilityFormProperties>({
			conversation_ttl: new FormControl<number | null | undefined>(undefined),
			signed_callbacks: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface VoiceCapabilityPayments {

		/** payment gateways like Stripe */
		VoiceCapabilityPaymentsGateways?: Array<VoiceCapabilityPaymentsGateways>;
	}
	export interface VoiceCapabilityPaymentsFormProperties {
	}
	export function CreateVoiceCapabilityPaymentsFormGroup() {
		return new FormGroup<VoiceCapabilityPaymentsFormProperties>({
		});

	}

	export interface VoiceCapabilityPaymentsGateways {

		/** used to identify the gateway in the credentials service */
		credential?: string | null;

		/** determines if the user has completed the integration with the gateway */
		mode?: VoiceCapabilityPaymentsGatewaysMode | null;

		/** payment gateway type (Stripe, Azure) */
		type?: string | null;
	}
	export interface VoiceCapabilityPaymentsGatewaysFormProperties {

		/** used to identify the gateway in the credentials service */
		credential: FormControl<string | null | undefined>,

		/** determines if the user has completed the integration with the gateway */
		mode: FormControl<VoiceCapabilityPaymentsGatewaysMode | null | undefined>,

		/** payment gateway type (Stripe, Azure) */
		type: FormControl<string | null | undefined>,
	}
	export function CreateVoiceCapabilityPaymentsGatewaysFormGroup() {
		return new FormGroup<VoiceCapabilityPaymentsGatewaysFormProperties>({
			credential: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<VoiceCapabilityPaymentsGatewaysMode | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VoiceCapabilityPaymentsGatewaysMode { test = 'test', live = 'live' }

	export interface VoiceCapabilityWebhooks {
		answer_url?: VoiceCapabilityWebhooksAnswer_url;

		/** Vonage will send call events (e.g. `ringing`, `answered`) to this URL */
		event_url?: VoiceCapabilityWebhooksEvent_url;
		fallback_answer_url?: VoiceCapabilityWebhooksFallback_answer_url;
	}
	export interface VoiceCapabilityWebhooksFormProperties {
	}
	export function CreateVoiceCapabilityWebhooksFormGroup() {
		return new FormGroup<VoiceCapabilityWebhooksFormProperties>({
		});

	}

	export interface VoiceCapabilityWebhooksAnswer_url {

		/** The URL that Vonage requests when a call is placed/received. Must return an NCCO */
		address?: string | null;

		/**
		 * If Vonage can't connect to the webhook URL for this specified amount of time, then Vonage makes one additional attempt to connect to the webhook endpoint. This is an integer value specified in milliseconds.
		 * Minimum: 300
		 * Maximum: 1000
		 */
		connection_timeout?: number | null;

		/** The HTTP method used to fetch your NCCO from your `answer_url` */
		http_method?: RtcCapabilityWebhooksEvent_urlHttp_method | null;

		/**
		 * If a response from the webhook URL can't be read for this specified amount of time, then Vonage makes one additional attempt to read the webhook endpoint. This is an integer value specified in milliseconds.
		 * Minimum: 1000
		 * Maximum: 5000
		 */
		socket_timeout?: number | null;
	}
	export interface VoiceCapabilityWebhooksAnswer_urlFormProperties {

		/** The URL that Vonage requests when a call is placed/received. Must return an NCCO */
		address: FormControl<string | null | undefined>,

		/**
		 * If Vonage can't connect to the webhook URL for this specified amount of time, then Vonage makes one additional attempt to connect to the webhook endpoint. This is an integer value specified in milliseconds.
		 * Minimum: 300
		 * Maximum: 1000
		 */
		connection_timeout: FormControl<number | null | undefined>,

		/** The HTTP method used to fetch your NCCO from your `answer_url` */
		http_method: FormControl<RtcCapabilityWebhooksEvent_urlHttp_method | null | undefined>,

		/**
		 * If a response from the webhook URL can't be read for this specified amount of time, then Vonage makes one additional attempt to read the webhook endpoint. This is an integer value specified in milliseconds.
		 * Minimum: 1000
		 * Maximum: 5000
		 */
		socket_timeout: FormControl<number | null | undefined>,
	}
	export function CreateVoiceCapabilityWebhooksAnswer_urlFormGroup() {
		return new FormGroup<VoiceCapabilityWebhooksAnswer_urlFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			connection_timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(300), Validators.max(1000)]),
			http_method: new FormControl<RtcCapabilityWebhooksEvent_urlHttp_method | null | undefined>(undefined),
			socket_timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1000), Validators.max(5000)]),
		});

	}

	export interface VoiceCapabilityWebhooksEvent_url {

		/** The URL that Vonage sends events related to your call to */
		address?: string | null;

		/**
		 * If Vonage can't connect to the webhook URL for this specified amount of time, then Vonage makes one additional attempt to connect to the webhook endpoint. This is an integer value specified in milliseconds.
		 * Minimum: 300
		 * Maximum: 1000
		 */
		connection_timeout?: number | null;

		/** The HTTP method used to send events to your server */
		http_method?: RtcCapabilityWebhooksEvent_urlHttp_method | null;

		/**
		 * If a response from the webhook URL can't be read for this specified amount of time, then Vonage makes one additional attempt to read the webhook endpoint. This is an integer value specified in milliseconds.
		 * Minimum: 1000
		 * Maximum: 10000
		 */
		socket_timeout?: number | null;
	}
	export interface VoiceCapabilityWebhooksEvent_urlFormProperties {

		/** The URL that Vonage sends events related to your call to */
		address: FormControl<string | null | undefined>,

		/**
		 * If Vonage can't connect to the webhook URL for this specified amount of time, then Vonage makes one additional attempt to connect to the webhook endpoint. This is an integer value specified in milliseconds.
		 * Minimum: 300
		 * Maximum: 1000
		 */
		connection_timeout: FormControl<number | null | undefined>,

		/** The HTTP method used to send events to your server */
		http_method: FormControl<RtcCapabilityWebhooksEvent_urlHttp_method | null | undefined>,

		/**
		 * If a response from the webhook URL can't be read for this specified amount of time, then Vonage makes one additional attempt to read the webhook endpoint. This is an integer value specified in milliseconds.
		 * Minimum: 1000
		 * Maximum: 10000
		 */
		socket_timeout: FormControl<number | null | undefined>,
	}
	export function CreateVoiceCapabilityWebhooksEvent_urlFormGroup() {
		return new FormGroup<VoiceCapabilityWebhooksEvent_urlFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			connection_timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(300), Validators.max(1000)]),
			http_method: new FormControl<RtcCapabilityWebhooksEvent_urlHttp_method | null | undefined>(undefined),
			socket_timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1000), Validators.max(10000)]),
		});

	}

	export interface VoiceCapabilityWebhooksFallback_answer_url {

		/**
		 * If your `answer_url` is offline or returns a HTTP error code, Vonage will make a request to a
		 * `fallback_answer_url` if it is set. This URL must return an NCCO.
		 */
		address?: string | null;

		/**
		 * If Vonage can't connect to the webhook URL for this specified amount of time, then Vonage makes one additional attempt to connect to the webhook endpoint. This is an integer value specified in milliseconds.
		 * Minimum: 300
		 * Maximum: 1000
		 */
		connection_timeout?: number | null;

		/** The HTTP method used to fetch your NCCO from your `answer_url` */
		http_method?: RtcCapabilityWebhooksEvent_urlHttp_method | null;

		/**
		 * If a response from the webhook URL can't be read for this specified amount of time, then Vonage makes one additional attempt to read the webhook endpoint. This is an integer value specified in milliseconds.
		 * Minimum: 1000
		 * Maximum: 5000
		 */
		socket_timeout?: number | null;
	}
	export interface VoiceCapabilityWebhooksFallback_answer_urlFormProperties {

		/**
		 * If your `answer_url` is offline or returns a HTTP error code, Vonage will make a request to a
		 * `fallback_answer_url` if it is set. This URL must return an NCCO.
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * If Vonage can't connect to the webhook URL for this specified amount of time, then Vonage makes one additional attempt to connect to the webhook endpoint. This is an integer value specified in milliseconds.
		 * Minimum: 300
		 * Maximum: 1000
		 */
		connection_timeout: FormControl<number | null | undefined>,

		/** The HTTP method used to fetch your NCCO from your `answer_url` */
		http_method: FormControl<RtcCapabilityWebhooksEvent_urlHttp_method | null | undefined>,

		/**
		 * If a response from the webhook URL can't be read for this specified amount of time, then Vonage makes one additional attempt to read the webhook endpoint. This is an integer value specified in milliseconds.
		 * Minimum: 1000
		 * Maximum: 5000
		 */
		socket_timeout: FormControl<number | null | undefined>,
	}
	export function CreateVoiceCapabilityWebhooksFallback_answer_urlFormGroup() {
		return new FormGroup<VoiceCapabilityWebhooksFallback_answer_urlFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			connection_timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(300), Validators.max(1000)]),
			http_method: new FormControl<RtcCapabilityWebhooksEvent_urlHttp_method | null | undefined>(undefined),
			socket_timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1000), Validators.max(5000)]),
		});

	}

	export interface ApplicationResponsePrivacy {

		/** If set to `true`, Vonage may store and use your content and data for the improvement of Vonage's AI based services and technologies. */
		improve_ai?: boolean | null;
	}
	export interface ApplicationResponsePrivacyFormProperties {

		/** If set to `true`, Vonage may store and use your content and data for the improvement of Vonage's AI based services and technologies. */
		improve_ai: FormControl<boolean | null | undefined>,
	}
	export function CreateApplicationResponsePrivacyFormGroup() {
		return new FormGroup<ApplicationResponsePrivacyFormProperties>({
			improve_ai: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ApplicationResponseCollection {

		/** A list of applications matching your existing filters */
		_embedded?: ApplicationResponseCollection_embedded;

		/**
		 * The current page number (starts at 1)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page?: number | null;

		/**
		 * The number of applications per page
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page_size?: number | null;

		/**
		 * The total number of applications
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_items?: number | null;

		/**
		 * The total number of pages returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_pages?: number | null;
	}
	export interface ApplicationResponseCollectionFormProperties {

		/**
		 * The current page number (starts at 1)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * The number of applications per page
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page_size: FormControl<number | null | undefined>,

		/**
		 * The total number of applications
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_items: FormControl<number | null | undefined>,

		/**
		 * The total number of pages returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_pages: FormControl<number | null | undefined>,
	}
	export function CreateApplicationResponseCollectionFormGroup() {
		return new FormGroup<ApplicationResponseCollectionFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			total_items: new FormControl<number | null | undefined>(undefined),
			total_pages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApplicationResponseCollection_embedded {
		applications?: Array<ApplicationResponse>;
	}
	export interface ApplicationResponseCollection_embeddedFormProperties {
	}
	export function CreateApplicationResponseCollection_embeddedFormGroup() {
		return new FormGroup<ApplicationResponseCollection_embeddedFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List available applications
		 * Get 
		 * @param {number} page_size The number of applications per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page The current page number (starts at 1)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ApplicationResponseCollection} Success
		 */
		ListApplication(page_size: number | null | undefined, page: number | null | undefined): Observable<ApplicationResponseCollection> {
			return this.http.get<ApplicationResponseCollection>(this.baseUri + '?page_size=' + page_size + '&page=' + page, {});
		}

		/**
		 * Create an application
		 * Post 
		 * @return {void} 
		 */
		CreateApplication(requestBody: any): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an application
		 * Deleting an application **cannot be undone**.
		 * Delete {id}
		 * @return {void} 
		 */
		DeleteApplication(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an application
		 * Get {id}
		 * @return {ApplicationResponse} Success
		 */
		GetApplication(): Observable<ApplicationResponse> {
			return this.http.get<ApplicationResponse>(this.baseUri + '{id}', {});
		}

		/**
		 * Update an application
		 * Put {id}
		 * @return {ApplicationResponse} Success
		 */
		UpdateApplication(requestBody: any): Observable<ApplicationResponse> {
			return this.http.put<ApplicationResponse>(this.baseUri + '{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

