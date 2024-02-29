import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateCallRequestAnswerUrl {
	}
	export interface CreateCallRequestAnswerUrlFormProperties {
	}
	export function CreateCreateCallRequestAnswerUrlFormGroup() {
		return new FormGroup<CreateCallRequestAnswerUrlFormProperties>({
		});

	}

	export interface CreateCallRequestBase {

		/** The HTTP method used to send event information to `event_url`. */
		event_method?: CreateCallRequestBaseEvent_method | null;

		/**
		 * **Required** unless `event_url` is configured at the application
		 * level, see [Create an Application](/api/application.v2#createApplication)
		 * The webhook endpoint where call progress events are
		 * sent to. For more information about the values sent, see
		 * [Event webhook](/voice/voice-api/webhook-reference#event-webhook).
		 */
		event_url?: Array<string>;

		/**
		 * Connect to a Phone (PSTN) number
		 * Required
		 */
		from: EndpointPhoneFrom;

		/**
		 * Set the number of seconds that elapse before Vonage hangs up after the call state changes to answered.
		 * Minimum: 1
		 * Maximum: 7200
		 */
		length_timer?: number | null;

		/** Configure the behavior when Vonage detects that the call is answered by voicemail. If `continue`, Vonage sends an HTTP request to `event_url` with the Call event machine. If `hangup`, Vonage ends the call. */
		machine_detection?: CreateCallRequestBaseMachine_detection | null;

		/** Set to `true` to use random phone number as `from`. The number will be selected from the list of the numbers assigned to the current application. `random_from_number: true` cannot be used together with `from`. */
		random_from_number?: boolean | null;

		/**
		 * Set the number of seconds that elapse before Vonage hangs up after the call state changes to ‘ringing’.
		 * Minimum: 1
		 * Maximum: 120
		 */
		ringing_timer?: number | null;

		/** Required */
		to: Array<string>;
	}
	export interface CreateCallRequestBaseFormProperties {

		/** The HTTP method used to send event information to `event_url`. */
		event_method: FormControl<CreateCallRequestBaseEvent_method | null | undefined>,

		/**
		 * Set the number of seconds that elapse before Vonage hangs up after the call state changes to answered.
		 * Minimum: 1
		 * Maximum: 7200
		 */
		length_timer: FormControl<number | null | undefined>,

		/** Configure the behavior when Vonage detects that the call is answered by voicemail. If `continue`, Vonage sends an HTTP request to `event_url` with the Call event machine. If `hangup`, Vonage ends the call. */
		machine_detection: FormControl<CreateCallRequestBaseMachine_detection | null | undefined>,

		/** Set to `true` to use random phone number as `from`. The number will be selected from the list of the numbers assigned to the current application. `random_from_number: true` cannot be used together with `from`. */
		random_from_number: FormControl<boolean | null | undefined>,

		/**
		 * Set the number of seconds that elapse before Vonage hangs up after the call state changes to ‘ringing’.
		 * Minimum: 1
		 * Maximum: 120
		 */
		ringing_timer: FormControl<number | null | undefined>,
	}
	export function CreateCreateCallRequestBaseFormGroup() {
		return new FormGroup<CreateCallRequestBaseFormProperties>({
			event_method: new FormControl<CreateCallRequestBaseEvent_method | null | undefined>(undefined),
			length_timer: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(7200)]),
			machine_detection: new FormControl<CreateCallRequestBaseMachine_detection | null | undefined>(undefined),
			random_from_number: new FormControl<boolean | null | undefined>(undefined),
			ringing_timer: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(120)]),
		});

	}

	export enum CreateCallRequestBaseEvent_method { POST = 'POST', GET = 'GET' }


	/** Connect to a Phone (PSTN) number */
	export interface EndpointPhoneFrom {

		/**
		 * The phone number to connect to
		 * Required
		 * Min length: 7
		 * Max length: 15
		 */
		number: string;

		/**
		 * The type of connection. Must be `phone`
		 * Required
		 */
		type: string;
	}

	/** Connect to a Phone (PSTN) number */
	export interface EndpointPhoneFromFormProperties {

		/**
		 * The phone number to connect to
		 * Required
		 * Min length: 7
		 * Max length: 15
		 */
		number: FormControl<string | null | undefined>,

		/**
		 * The type of connection. Must be `phone`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEndpointPhoneFromFormGroup() {
		return new FormGroup<EndpointPhoneFromFormProperties>({
			number: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(7), Validators.maxLength(15), Validators.pattern('\d{7,15}')]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateCallRequestBaseMachine_detection { continue = 'continue', hangup = 'hangup' }

	export interface CreateCallRequestNcco {
	}
	export interface CreateCallRequestNccoFormProperties {
	}
	export function CreateCreateCallRequestNccoFormGroup() {
		return new FormGroup<CreateCallRequestNccoFormProperties>({
		});

	}

	export interface CreateCallResponse {

		/** The unique identifier for the conversation this call leg is part of. */
		conversation_uuid?: string | null;

		/** Possible values are `outbound` or `inbound` */
		direction?: CreateCallResponseDirection | null;

		/** The status of the call. [See possible values](https://developer.nexmo.com/voice/voice-api/guides/call-flow#event-objects) */
		status?: string | null;

		/** The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls */
		uuid?: string | null;
	}
	export interface CreateCallResponseFormProperties {

		/** The unique identifier for the conversation this call leg is part of. */
		conversation_uuid: FormControl<string | null | undefined>,

		/** Possible values are `outbound` or `inbound` */
		direction: FormControl<CreateCallResponseDirection | null | undefined>,

		/** The status of the call. [See possible values](https://developer.nexmo.com/voice/voice-api/guides/call-flow#event-objects) */
		status: FormControl<string | null | undefined>,

		/** The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateCreateCallResponseFormGroup() {
		return new FormGroup<CreateCallResponseFormProperties>({
			conversation_uuid: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<CreateCallResponseDirection | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateCallResponseDirection { outbound = 'outbound', inbound = 'inbound' }

	export interface DTMFRequest {

		/** The digits to send */
		digits?: string | null;
	}
	export interface DTMFRequestFormProperties {

		/** The digits to send */
		digits: FormControl<string | null | undefined>,
	}
	export function CreateDTMFRequestFormGroup() {
		return new FormGroup<DTMFRequestFormProperties>({
			digits: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DTMFResponse {

		/** Description of the action taken */
		message?: string | null;

		/** The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls */
		uuid?: string | null;
	}
	export interface DTMFResponseFormProperties {

		/** Description of the action taken */
		message: FormControl<string | null | undefined>,

		/** The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateDTMFResponseFormGroup() {
		return new FormGroup<DTMFResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Connect to an App User */
	export interface EndpointApp {

		/**
		 * The type of connection. Must be `app`
		 * Required
		 */
		type: string;

		/**
		 * The username to connect to
		 * Required
		 */
		user: string;
	}

	/** Connect to an App User */
	export interface EndpointAppFormProperties {

		/**
		 * The type of connection. Must be `app`
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * The username to connect to
		 * Required
		 */
		user: FormControl<string | null | undefined>,
	}
	export function CreateEndpointAppFormGroup() {
		return new FormGroup<EndpointAppFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Connect to a Phone (PSTN) number */
	export interface EndpointPhoneTo {

		/** Provide [DTMF digits](https://developer.nexmo.com/voice/voice-api/guides/dtmf) to send when the call is answered */
		dtmfAnswer?: string | null;

		/**
		 * The phone number to connect to
		 * Required
		 * Min length: 7
		 * Max length: 15
		 */
		number: string;

		/**
		 * The type of connection. Must be `phone`
		 * Required
		 */
		type: string;
	}

	/** Connect to a Phone (PSTN) number */
	export interface EndpointPhoneToFormProperties {

		/** Provide [DTMF digits](https://developer.nexmo.com/voice/voice-api/guides/dtmf) to send when the call is answered */
		dtmfAnswer: FormControl<string | null | undefined>,

		/**
		 * The phone number to connect to
		 * Required
		 * Min length: 7
		 * Max length: 15
		 */
		number: FormControl<string | null | undefined>,

		/**
		 * The type of connection. Must be `phone`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEndpointPhoneToFormGroup() {
		return new FormGroup<EndpointPhoneToFormProperties>({
			dtmfAnswer: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(7), Validators.maxLength(15), Validators.pattern('\d{7,15}')]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Connect to a SIP Endpoint */
	export interface EndpointSip {

		/**
		 * The type of connection. Must be `sip`
		 * Required
		 */
		type: string;

		/**
		 * The SIP URI to connect to
		 * Min length: 1
		 * Max length: 50
		 */
		uri?: string | null;
	}

	/** Connect to a SIP Endpoint */
	export interface EndpointSipFormProperties {

		/**
		 * The type of connection. Must be `sip`
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * The SIP URI to connect to
		 * Min length: 1
		 * Max length: 50
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateEndpointSipFormGroup() {
		return new FormGroup<EndpointSipFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
		});

	}


	/** Connect to a VBC extension */
	export interface EndpointVBCExtension {

		/** Required */
		extension: string;

		/**
		 * The type of connection. Must be `vbc`
		 * Required
		 */
		type: string;
	}

	/** Connect to a VBC extension */
	export interface EndpointVBCExtensionFormProperties {

		/** Required */
		extension: FormControl<string | null | undefined>,

		/**
		 * The type of connection. Must be `vbc`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEndpointVBCExtensionFormGroup() {
		return new FormGroup<EndpointVBCExtensionFormProperties>({
			extension: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Connect to a Websocket */
	export interface EndpointWebsocket {

		/** Required */
		'content-type': EndpointWebsocketContent_type;

		/** Details of the Websocket you want to connect to */
		headers?: EndpointWebsocketHeaders;

		/**
		 * The type of connection. Must be `websocket`
		 * Required
		 */
		type: string;

		/**
		 * Min length: 1
		 * Max length: 50
		 */
		uri?: string | null;
	}

	/** Connect to a Websocket */
	export interface EndpointWebsocketFormProperties {

		/** Required */
		'content-type': FormControl<EndpointWebsocketContent_type | null | undefined>,

		/**
		 * The type of connection. Must be `websocket`
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 50
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateEndpointWebsocketFormGroup() {
		return new FormGroup<EndpointWebsocketFormProperties>({
			'content-type': new FormControl<EndpointWebsocketContent_type | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
		});

	}

	export enum EndpointWebsocketContent_type { 'audio/l16;rate=8000' = 'audio/l16;rate=8000', 'audio/l16;rate=16000' = 'audio/l16;rate=16000' }

	export interface EndpointWebsocketHeaders {

		/** This is an example header. You can provide any headers you may need */
		customer_id?: string | null;
	}
	export interface EndpointWebsocketHeadersFormProperties {

		/** This is an example header. You can provide any headers you may need */
		customer_id: FormControl<string | null | undefined>,
	}
	export function CreateEndpointWebsocketHeadersFormGroup() {
		return new FormGroup<EndpointWebsocketHeadersFormProperties>({
			customer_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCallResponse {
		_links?: GetCallResponse_links;

		/** The unique identifier for the conversation this call leg is part of. */
		conversation_uuid?: string | null;

		/** Possible values are `outbound` or `inbound` */
		direction?: CreateCallResponseDirection | null;

		/** The time elapsed for the call to take place in seconds. This is only sent if `status` is `completed`. */
		duration?: string | null;

		/** The time the call started in the following format: `YYYY-MM-DD HH:MM:SS`. For xample, `2020-01-01 12:00:00`. This is only sent if `status` is `completed`. */
		end_time?: string | null;

		/** The endpoint you called from. Possible values are the same as `to`. */
		from?: From;

		/** The Mobile Country Code Mobile Network Code ([MCCMNC](https://en.wikipedia.org/wiki/Mobile_country_code)) for the carrier network used to make this call. This is only sent if `status` is `completed`. */
		network?: string | null;

		/** The total price charged for this call. This is only sent if `status` is `completed`. */
		price?: string | null;

		/** The price per minute for this call. This is only sent if `status` is `completed`. */
		rate?: string | null;

		/** The time the call started in the following format: `YYYY-MM-DD HH:MM:SS`. For example, `2020-01-01 12:00:00`. This is only sent if `status` is `completed`. */
		start_time?: string | null;

		/** The status of the call. [See possible values](https://developer.nexmo.com/voice/voice-api/guides/call-flow#event-objects) */
		status?: string | null;

		/** The single or mixed collection of endpoint types you connected to */
		to?: To;

		/** The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls */
		uuid?: string | null;
	}
	export interface GetCallResponseFormProperties {

		/** The unique identifier for the conversation this call leg is part of. */
		conversation_uuid: FormControl<string | null | undefined>,

		/** Possible values are `outbound` or `inbound` */
		direction: FormControl<CreateCallResponseDirection | null | undefined>,

		/** The time elapsed for the call to take place in seconds. This is only sent if `status` is `completed`. */
		duration: FormControl<string | null | undefined>,

		/** The time the call started in the following format: `YYYY-MM-DD HH:MM:SS`. For xample, `2020-01-01 12:00:00`. This is only sent if `status` is `completed`. */
		end_time: FormControl<string | null | undefined>,

		/** The Mobile Country Code Mobile Network Code ([MCCMNC](https://en.wikipedia.org/wiki/Mobile_country_code)) for the carrier network used to make this call. This is only sent if `status` is `completed`. */
		network: FormControl<string | null | undefined>,

		/** The total price charged for this call. This is only sent if `status` is `completed`. */
		price: FormControl<string | null | undefined>,

		/** The price per minute for this call. This is only sent if `status` is `completed`. */
		rate: FormControl<string | null | undefined>,

		/** The time the call started in the following format: `YYYY-MM-DD HH:MM:SS`. For example, `2020-01-01 12:00:00`. This is only sent if `status` is `completed`. */
		start_time: FormControl<string | null | undefined>,

		/** The status of the call. [See possible values](https://developer.nexmo.com/voice/voice-api/guides/call-flow#event-objects) */
		status: FormControl<string | null | undefined>,

		/** The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateGetCallResponseFormGroup() {
		return new FormGroup<GetCallResponseFormProperties>({
			conversation_uuid: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<CreateCallResponseDirection | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			end_time: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			rate: new FormControl<string | null | undefined>(undefined),
			start_time: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCallResponse_links {
		self?: GetCallResponse_linksSelf;
	}
	export interface GetCallResponse_linksFormProperties {
	}
	export function CreateGetCallResponse_linksFormGroup() {
		return new FormGroup<GetCallResponse_linksFormProperties>({
		});

	}

	export interface GetCallResponse_linksSelf {
		href?: string | null;
	}
	export interface GetCallResponse_linksSelfFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateGetCallResponse_linksSelfFormGroup() {
		return new FormGroup<GetCallResponse_linksSelfFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The endpoint you called from. Possible values are the same as `to`. */
	export interface From {
		number?: string | null;
		type?: string | null;
	}

	/** The endpoint you called from. Possible values are the same as `to`. */
	export interface FromFormProperties {
		number: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateFromFormGroup() {
		return new FormGroup<FromFormProperties>({
			number: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The single or mixed collection of endpoint types you connected to */
	export interface To {
		number?: string | null;
		type?: string | null;
	}

	/** The single or mixed collection of endpoint types you connected to */
	export interface ToFormProperties {
		number: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateToFormGroup() {
		return new FormGroup<ToFormProperties>({
			number: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCallsResponse {

		/** A list of call objects. See the [get details of a specific call](#getCall) response fields for a description of the nested objects */
		_embedded?: GetCallsResponse_embedded;
		_links?: GetCallsResponse_links;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		record_index?: number | null;
	}
	export interface GetCallsResponseFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		record_index: FormControl<number | null | undefined>,
	}
	export function CreateGetCallsResponseFormGroup() {
		return new FormGroup<GetCallsResponseFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			record_index: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetCallsResponse_embedded {
		calls?: Array<GetCallResponse>;
	}
	export interface GetCallsResponse_embeddedFormProperties {
	}
	export function CreateGetCallsResponse_embeddedFormGroup() {
		return new FormGroup<GetCallsResponse_embeddedFormProperties>({
		});

	}

	export interface GetCallsResponse_links {
		self?: GetCallsResponse_linksSelf;
	}
	export interface GetCallsResponse_linksFormProperties {
	}
	export function CreateGetCallsResponse_linksFormGroup() {
		return new FormGroup<GetCallsResponse_linksFormProperties>({
		});

	}

	export interface GetCallsResponse_linksSelf {
		href?: string | null;
	}
	export interface GetCallsResponse_linksSelfFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateGetCallsResponse_linksSelfFormGroup() {
		return new FormGroup<GetCallsResponse_linksSelfFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Transfer the call to a new NCCO */
	export enum RequestTransferActionParam { transfer = 'transfer' }

	export interface StartStreamRequest {

		/** Set the audio level of the stream in the range `-1 >= level <= 1` with a precision of 0.1. The default value is 0. */
		level?: string | null;

		/**
		 * the number of times to play the file, 0 for infinite
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		loop?: number | null;

		/** Required */
		stream_url: Array<string>;
	}
	export interface StartStreamRequestFormProperties {

		/** Set the audio level of the stream in the range `-1 >= level <= 1` with a precision of 0.1. The default value is 0. */
		level: FormControl<string | null | undefined>,

		/**
		 * the number of times to play the file, 0 for infinite
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		loop: FormControl<number | null | undefined>,
	}
	export function CreateStartStreamRequestFormGroup() {
		return new FormGroup<StartStreamRequestFormProperties>({
			level: new FormControl<string | null | undefined>(undefined),
			loop: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StartStreamResponse {

		/** Description of the action taken */
		message?: string | null;

		/** The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls */
		uuid?: string | null;
	}
	export interface StartStreamResponseFormProperties {

		/** Description of the action taken */
		message: FormControl<string | null | undefined>,

		/** The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateStartStreamResponseFormGroup() {
		return new FormGroup<StartStreamResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartTalkRequest {

		/** The language to use */
		language?: StartTalkRequestLanguage | null;

		/** The volume level that the speech is played. This can be any value between `-1` to `1` in `0.1` increments, with `0` being the default. */
		level?: string | null;

		/**
		 * The number of times to repeat the text the file, 0 for infinite
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		loop?: number | null;

		/** Set to true to use the premium version of the specified style if available, otherwise the standard version will be used. The default value is false. You can find more information about Premium Voices in the [Text-To-Speech guide](/voice/voice-api/guides/text-to-speech#premium-voices). */
		premium?: boolean | null;

		/**
		 * The vocal style (vocal range, tessitura, and timbre) to use
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		style?: number | null;

		/**
		 * The text to read
		 * Required
		 */
		text: string;

		/** <strong>DEPRECATED</strong> The voice & language to use */
		voice_name?: StartTalkRequestVoice_name | null;
	}
	export interface StartTalkRequestFormProperties {

		/** The language to use */
		language: FormControl<StartTalkRequestLanguage | null | undefined>,

		/** The volume level that the speech is played. This can be any value between `-1` to `1` in `0.1` increments, with `0` being the default. */
		level: FormControl<string | null | undefined>,

		/**
		 * The number of times to repeat the text the file, 0 for infinite
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		loop: FormControl<number | null | undefined>,

		/** Set to true to use the premium version of the specified style if available, otherwise the standard version will be used. The default value is false. You can find more information about Premium Voices in the [Text-To-Speech guide](/voice/voice-api/guides/text-to-speech#premium-voices). */
		premium: FormControl<boolean | null | undefined>,

		/**
		 * The vocal style (vocal range, tessitura, and timbre) to use
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		style: FormControl<number | null | undefined>,

		/**
		 * The text to read
		 * Required
		 */
		text: FormControl<string | null | undefined>,

		/** <strong>DEPRECATED</strong> The voice & language to use */
		voice_name: FormControl<StartTalkRequestVoice_name | null | undefined>,
	}
	export function CreateStartTalkRequestFormGroup() {
		return new FormGroup<StartTalkRequestFormProperties>({
			language: new FormControl<StartTalkRequestLanguage | null | undefined>(undefined),
			level: new FormControl<string | null | undefined>(undefined),
			loop: new FormControl<number | null | undefined>(undefined),
			premium: new FormControl<boolean | null | undefined>(undefined),
			style: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			voice_name: new FormControl<StartTalkRequestVoice_name | null | undefined>(undefined),
		});

	}

	export enum StartTalkRequestLanguage { ar = 'ar', 'ca-ES' = 'ca-ES', 'cmn-CN' = 'cmn-CN', 'cmn-TW' = 'cmn-TW', 'cs-CZ' = 'cs-CZ', 'cy-GB' = 'cy-GB', 'da-DK' = 'da-DK', 'de-DE' = 'de-DE', 'el-GR' = 'el-GR', 'en-AU' = 'en-AU', 'en-GB' = 'en-GB', 'en-GB-WLS' = 'en-GB-WLS', 'en-IN' = 'en-IN', 'en-US' = 'en-US', 'en-ZA' = 'en-ZA', 'es-ES' = 'es-ES', 'es-MX' = 'es-MX', 'es-US' = 'es-US', 'eu-ES' = 'eu-ES', 'fi-FI' = 'fi-FI', 'fil-PH' = 'fil-PH', 'fr-CA' = 'fr-CA', 'fr-FR' = 'fr-FR', 'he-IL' = 'he-IL', 'hi-IN' = 'hi-IN', 'hu-HU' = 'hu-HU', 'id-ID' = 'id-ID', 'is-IS' = 'is-IS', 'it-IT' = 'it-IT', 'ja-JP' = 'ja-JP', 'ko-KR' = 'ko-KR', 'nb-NO' = 'nb-NO', 'nl-NL' = 'nl-NL', 'no-NO' = 'no-NO', 'pl-PL' = 'pl-PL', 'pt-BR' = 'pt-BR', 'pt-PT' = 'pt-PT', 'ro-RO' = 'ro-RO', 'ru-RU' = 'ru-RU', 'sk-SK' = 'sk-SK', 'sv-SE' = 'sv-SE', 'th-TH' = 'th-TH', 'tr-TR' = 'tr-TR', 'uk-UA' = 'uk-UA', 'vi-VN' = 'vi-VN', 'yue-CN' = 'yue-CN' }

	export enum StartTalkRequestVoice_name { Aditi = 'Aditi', Agnieszka = 'Agnieszka', Alva = 'Alva', Amy = 'Amy', Astrid = 'Astrid', Bianca = 'Bianca', Brian = 'Brian', Carla = 'Carla', Carmen = 'Carmen', Carmit = 'Carmit', Catarina = 'Catarina', Celine = 'Celine', Cem = 'Cem', Chantal = 'Chantal', Chipmunk = 'Chipmunk', Conchita = 'Conchita', Cristiano = 'Cristiano', Damayanti = 'Damayanti', Dora = 'Dora', Emma = 'Emma', Empar = 'Empar', Enrique = 'Enrique', Eric = 'Eric', Ewa = 'Ewa', Felipe = 'Felipe', Filiz = 'Filiz', Geraint = 'Geraint', Giorgio = 'Giorgio', Gwyneth = 'Gwyneth', Hans = 'Hans', Henrik = 'Henrik', Ines = 'Ines', Ioana = 'Ioana', Iveta = 'Iveta', Ivy = 'Ivy', Jacek = 'Jacek', Jan = 'Jan', Jennifer = 'Jennifer', Joana = 'Joana', Joanna = 'Joanna', Joey = 'Joey', Jordi = 'Jordi', Justin = 'Justin', Kanya = 'Kanya', Karl = 'Karl', Kendra = 'Kendra', Kimberly = 'Kimberly', Laila = 'Laila', Laura = 'Laura', Lea = 'Lea', Lekha = 'Lekha', Liv = 'Liv', Lotte = 'Lotte', Lucia = 'Lucia', Luciana = 'Luciana', Mads = 'Mads', Maged = 'Maged', Maja = 'Maja', Mariska = 'Mariska', Marlene = 'Marlene', Mathieu = 'Mathieu', Matthew = 'Matthew', Maxim = 'Maxim', 'Mei-Jia' = 'Mei-Jia', Melina = 'Melina', Mia = 'Mia', Miguel = 'Miguel', Miren = 'Miren', Mizuki = 'Mizuki', Montserrat = 'Montserrat', Naja = 'Naja', Nicole = 'Nicole', Nikos = 'Nikos', Nora = 'Nora', Oskar = 'Oskar', Penelope = 'Penelope', Raveena = 'Raveena', Ricardo = 'Ricardo', Ruben = 'Ruben', Russell = 'Russell', Salli = 'Salli', Satu = 'Satu', Seoyeon = 'Seoyeon', 'Sin-Ji' = 'Sin-Ji', Sora = 'Sora', Takumi = 'Takumi', Tarik = 'Tarik', Tatyana = 'Tatyana', Tessa = 'Tessa', 'Tian-Tian' = 'Tian-Tian', Vicki = 'Vicki', Vitoria = 'Vitoria', Yelda = 'Yelda', Zeina = 'Zeina', Zhiyu = 'Zhiyu', Zuzana = 'Zuzana' }

	export interface StartTalkResponse {

		/** Description of the action taken */
		message?: string | null;

		/** The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls */
		uuid?: string | null;
	}
	export interface StartTalkResponseFormProperties {

		/** Description of the action taken */
		message: FormControl<string | null | undefined>,

		/** The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateStartTalkResponseFormGroup() {
		return new FormGroup<StartTalkResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopStreamResponse {

		/** Description of the action taken */
		message?: string | null;

		/** The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls */
		uuid?: string | null;
	}
	export interface StopStreamResponseFormProperties {

		/** Description of the action taken */
		message: FormControl<string | null | undefined>,

		/** The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateStopStreamResponseFormGroup() {
		return new FormGroup<StopStreamResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopTalkResponse {

		/** Description of the action taken */
		message?: string | null;

		/** The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls */
		uuid?: string | null;
	}
	export interface StopTalkResponseFormProperties {

		/** Description of the action taken */
		message: FormControl<string | null | undefined>,

		/** The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateStopTalkResponseFormGroup() {
		return new FormGroup<StopTalkResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCallRequestEarmuff {

		/** Prevent the specified UUID from hearing audio */
		action?: UpdateCallRequestEarmuffAction | null;
	}
	export interface UpdateCallRequestEarmuffFormProperties {

		/** Prevent the specified UUID from hearing audio */
		action: FormControl<UpdateCallRequestEarmuffAction | null | undefined>,
	}
	export function CreateUpdateCallRequestEarmuffFormGroup() {
		return new FormGroup<UpdateCallRequestEarmuffFormProperties>({
			action: new FormControl<UpdateCallRequestEarmuffAction | null | undefined>(undefined),
		});

	}

	export enum UpdateCallRequestEarmuffAction { earmuff = 'earmuff' }

	export interface UpdateCallRequestHangup {

		/** End the call for the specified UUID */
		action?: UpdateCallRequestHangupAction | null;
	}
	export interface UpdateCallRequestHangupFormProperties {

		/** End the call for the specified UUID */
		action: FormControl<UpdateCallRequestHangupAction | null | undefined>,
	}
	export function CreateUpdateCallRequestHangupFormGroup() {
		return new FormGroup<UpdateCallRequestHangupFormProperties>({
			action: new FormControl<UpdateCallRequestHangupAction | null | undefined>(undefined),
		});

	}

	export enum UpdateCallRequestHangupAction { hangup = 'hangup' }

	export interface UpdateCallRequestMute {

		/** Mute the specified UUID */
		action?: UpdateCallRequestMuteAction | null;
	}
	export interface UpdateCallRequestMuteFormProperties {

		/** Mute the specified UUID */
		action: FormControl<UpdateCallRequestMuteAction | null | undefined>,
	}
	export function CreateUpdateCallRequestMuteFormGroup() {
		return new FormGroup<UpdateCallRequestMuteFormProperties>({
			action: new FormControl<UpdateCallRequestMuteAction | null | undefined>(undefined),
		});

	}

	export enum UpdateCallRequestMuteAction { mute = 'mute' }

	export interface UpdateCallRequestTransferAnswerUrl {

		/**
		 * Transfer the call to a new NCCO
		 * Required
		 */
		action: RequestTransferActionParam;

		/** Required */
		destination: UpdateCallRequestTransferAnswerUrlDestination;
	}
	export interface UpdateCallRequestTransferAnswerUrlFormProperties {

		/**
		 * Transfer the call to a new NCCO
		 * Required
		 */
		action: FormControl<RequestTransferActionParam | null | undefined>,
	}
	export function CreateUpdateCallRequestTransferAnswerUrlFormGroup() {
		return new FormGroup<UpdateCallRequestTransferAnswerUrlFormProperties>({
			action: new FormControl<RequestTransferActionParam | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCallRequestTransferAnswerUrlDestination {

		/**
		 * Always `ncco`
		 * Required
		 */
		type: string;

		/**
		 * The URL that Vonage makes a request to. Must return an NCCO.
		 * Required
		 */
		url: Array<string>;
	}
	export interface UpdateCallRequestTransferAnswerUrlDestinationFormProperties {

		/**
		 * Always `ncco`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCallRequestTransferAnswerUrlDestinationFormGroup() {
		return new FormGroup<UpdateCallRequestTransferAnswerUrlDestinationFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCallRequestTransferNcco {

		/**
		 * Transfer the call to a new NCCO
		 * Required
		 */
		action: RequestTransferActionParam;

		/** Required */
		destination: UpdateCallRequestTransferNccoDestination;
	}
	export interface UpdateCallRequestTransferNccoFormProperties {

		/**
		 * Transfer the call to a new NCCO
		 * Required
		 */
		action: FormControl<RequestTransferActionParam | null | undefined>,
	}
	export function CreateUpdateCallRequestTransferNccoFormGroup() {
		return new FormGroup<UpdateCallRequestTransferNccoFormProperties>({
			action: new FormControl<RequestTransferActionParam | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCallRequestTransferNccoDestination {

		/**
		 * Refer to the [NCCO Guide](https://developer.nexmo.com/voice/voice-api/ncco-reference) for a description of possible NCCO parameters.
		 * Required
		 */
		ncco: Array<string>;

		/**
		 * Always `ncco`
		 * Required
		 */
		type: string;
	}
	export interface UpdateCallRequestTransferNccoDestinationFormProperties {

		/**
		 * Always `ncco`
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCallRequestTransferNccoDestinationFormGroup() {
		return new FormGroup<UpdateCallRequestTransferNccoDestinationFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCallRequestUnearmuff {

		/** Allow the specified UUID to hear audio */
		action?: UpdateCallRequestUnearmuffAction | null;
	}
	export interface UpdateCallRequestUnearmuffFormProperties {

		/** Allow the specified UUID to hear audio */
		action: FormControl<UpdateCallRequestUnearmuffAction | null | undefined>,
	}
	export function CreateUpdateCallRequestUnearmuffFormGroup() {
		return new FormGroup<UpdateCallRequestUnearmuffFormProperties>({
			action: new FormControl<UpdateCallRequestUnearmuffAction | null | undefined>(undefined),
		});

	}

	export enum UpdateCallRequestUnearmuffAction { unearmuff = 'unearmuff' }

	export interface UpdateCallRequestUnmute {

		/** Unmute the specified UUID */
		action?: UpdateCallRequestMuteAction | null;
	}
	export interface UpdateCallRequestUnmuteFormProperties {

		/** Unmute the specified UUID */
		action: FormControl<UpdateCallRequestMuteAction | null | undefined>,
	}
	export function CreateUpdateCallRequestUnmuteFormGroup() {
		return new FormGroup<UpdateCallRequestUnmuteFormProperties>({
			action: new FormControl<UpdateCallRequestMuteAction | null | undefined>(undefined),
		});

	}


	/** Possible values are `outbound` or `inbound` */
	export enum Direction { outbound = 'outbound', inbound = 'inbound' }


	/** The language to use */
	export enum Language { ar = 'ar', 'ca-ES' = 'ca-ES', 'cmn-CN' = 'cmn-CN', 'cmn-TW' = 'cmn-TW', 'cs-CZ' = 'cs-CZ', 'cy-GB' = 'cy-GB', 'da-DK' = 'da-DK', 'de-DE' = 'de-DE', 'el-GR' = 'el-GR', 'en-AU' = 'en-AU', 'en-GB' = 'en-GB', 'en-GB-WLS' = 'en-GB-WLS', 'en-IN' = 'en-IN', 'en-US' = 'en-US', 'en-ZA' = 'en-ZA', 'es-ES' = 'es-ES', 'es-MX' = 'es-MX', 'es-US' = 'es-US', 'eu-ES' = 'eu-ES', 'fi-FI' = 'fi-FI', 'fil-PH' = 'fil-PH', 'fr-CA' = 'fr-CA', 'fr-FR' = 'fr-FR', 'he-IL' = 'he-IL', 'hi-IN' = 'hi-IN', 'hu-HU' = 'hu-HU', 'id-ID' = 'id-ID', 'is-IS' = 'is-IS', 'it-IT' = 'it-IT', 'ja-JP' = 'ja-JP', 'ko-KR' = 'ko-KR', 'nb-NO' = 'nb-NO', 'nl-NL' = 'nl-NL', 'no-NO' = 'no-NO', 'pl-PL' = 'pl-PL', 'pt-BR' = 'pt-BR', 'pt-PT' = 'pt-PT', 'ro-RO' = 'ro-RO', 'ru-RU' = 'ru-RU', 'sk-SK' = 'sk-SK', 'sv-SE' = 'sv-SE', 'th-TH' = 'th-TH', 'tr-TR' = 'tr-TR', 'uk-UA' = 'uk-UA', 'vi-VN' = 'vi-VN', 'yue-CN' = 'yue-CN' }


	/** <strong>DEPRECATED</strong> The voice & language to use */
	export enum Voice_name { Aditi = 'Aditi', Agnieszka = 'Agnieszka', Alva = 'Alva', Amy = 'Amy', Astrid = 'Astrid', Bianca = 'Bianca', Brian = 'Brian', Carla = 'Carla', Carmen = 'Carmen', Carmit = 'Carmit', Catarina = 'Catarina', Celine = 'Celine', Cem = 'Cem', Chantal = 'Chantal', Chipmunk = 'Chipmunk', Conchita = 'Conchita', Cristiano = 'Cristiano', Damayanti = 'Damayanti', Dora = 'Dora', Emma = 'Emma', Empar = 'Empar', Enrique = 'Enrique', Eric = 'Eric', Ewa = 'Ewa', Felipe = 'Felipe', Filiz = 'Filiz', Geraint = 'Geraint', Giorgio = 'Giorgio', Gwyneth = 'Gwyneth', Hans = 'Hans', Henrik = 'Henrik', Ines = 'Ines', Ioana = 'Ioana', Iveta = 'Iveta', Ivy = 'Ivy', Jacek = 'Jacek', Jan = 'Jan', Jennifer = 'Jennifer', Joana = 'Joana', Joanna = 'Joanna', Joey = 'Joey', Jordi = 'Jordi', Justin = 'Justin', Kanya = 'Kanya', Karl = 'Karl', Kendra = 'Kendra', Kimberly = 'Kimberly', Laila = 'Laila', Laura = 'Laura', Lea = 'Lea', Lekha = 'Lekha', Liv = 'Liv', Lotte = 'Lotte', Lucia = 'Lucia', Luciana = 'Luciana', Mads = 'Mads', Maged = 'Maged', Maja = 'Maja', Mariska = 'Mariska', Marlene = 'Marlene', Mathieu = 'Mathieu', Matthew = 'Matthew', Maxim = 'Maxim', 'Mei-Jia' = 'Mei-Jia', Melina = 'Melina', Mia = 'Mia', Miguel = 'Miguel', Miren = 'Miren', Mizuki = 'Mizuki', Montserrat = 'Montserrat', Naja = 'Naja', Nicole = 'Nicole', Nikos = 'Nikos', Nora = 'Nora', Oskar = 'Oskar', Penelope = 'Penelope', Raveena = 'Raveena', Ricardo = 'Ricardo', Ruben = 'Ruben', Russell = 'Russell', Salli = 'Salli', Satu = 'Satu', Seoyeon = 'Seoyeon', 'Sin-Ji' = 'Sin-Ji', Sora = 'Sora', Takumi = 'Takumi', Tarik = 'Tarik', Tatyana = 'Tatyana', Tessa = 'Tessa', 'Tian-Tian' = 'Tian-Tian', Vicki = 'Vicki', Vitoria = 'Vitoria', Yelda = 'Yelda', Zeina = 'Zeina', Zhiyu = 'Zhiyu', Zuzana = 'Zuzana' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get details of your calls
		 * Get details of your calls
		 * Get 
		 * @param {GetCallsStatus} status Filter by call status
		 * @param {Date} date_start Return the records that occurred after this point in time
		 * @param {Date} date_end Return the records that occurred before this point in time
		 * @param {number} page_size Return this amount of records in the response
		 *     Minimum: 1    Maximum: 100
		 * @param {number} record_index Return calls from this index in the response
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {GetCallsOrder} order Either ascending or  descending order.
		 * @param {string} conversation_uuid Return all the records associated with a specific conversation.
		 * @return {GetCallsResponse} OK
		 */
		GetCalls(status: GetCallsStatus | null | undefined, date_start: Date | null | undefined, date_end: Date | null | undefined, page_size: number | null | undefined, record_index: number | null | undefined, order: GetCallsOrder | null | undefined, conversation_uuid: string | null | undefined): Observable<GetCallsResponse> {
			return this.http.get<GetCallsResponse>(this.baseUri + '?status=' + status + '&date_start=' + date_start?.toISOString() + '&date_end=' + date_end?.toISOString() + '&page_size=' + page_size + '&record_index=' + record_index + '&order=' + order + '&conversation_uuid=' + (conversation_uuid == null ? '' : encodeURIComponent(conversation_uuid)), {});
		}

		/**
		 * Create an outbound call
		 * Create an outbound Call
		 * Post 
		 * @param {CreateCallRequestNcco} requestBody Call Details
		 * @return {void} 
		 */
		CreateCall(requestBody: CreateCallRequestNcco): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get detail of a specific call
		 * Get detail of a specific call
		 * Get {uuid}
		 * @return {GetCallResponse} Ok
		 */
		GetCall(): Observable<GetCallResponse> {
			return this.http.get<GetCallResponse>(this.baseUri + '{uuid}', {});
		}

		/**
		 * Modify an in progress call
		 * Modify an in progress call
		 * Put {uuid}
		 * @return {void} 
		 */
		UpdateCall(requestBody: UpdateCallRequestTransferNcco): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '{uuid}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Play DTMF tones into a call
		 * Play DTMF tones into a call
		 * Put {uuid}/dtmf
		 * @param {DTMFRequest} requestBody action to perform
		 * @return {DTMFResponse} Ok
		 */
		StartDTMF(requestBody: DTMFRequest): Observable<DTMFResponse> {
			return this.http.put<DTMFResponse>(this.baseUri + '{uuid}/dtmf', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stop playing an audio file into a call
		 * Stop playing an audio file into a call
		 * Delete {uuid}/stream
		 * @return {StopStreamResponse} Ok
		 */
		StopStream(): Observable<StopStreamResponse> {
			return this.http.delete<StopStreamResponse>(this.baseUri + '{uuid}/stream', {});
		}

		/**
		 * Play an audio file into a call
		 * Play an audio file into a call
		 * Put {uuid}/stream
		 * @param {StartStreamRequest} requestBody action to perform
		 * @return {StartStreamResponse} Ok
		 */
		StartStream(requestBody: StartStreamRequest): Observable<StartStreamResponse> {
			return this.http.put<StartStreamResponse>(this.baseUri + '{uuid}/stream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stop text to speech in a call
		 * Stop text to speech in a call
		 * Delete {uuid}/talk
		 * @return {StopTalkResponse} Ok
		 */
		StopTalk(): Observable<StopTalkResponse> {
			return this.http.delete<StopTalkResponse>(this.baseUri + '{uuid}/talk', {});
		}

		/**
		 * Play text to speech into a call
		 * Play text to speech into a call
		 * Put {uuid}/talk
		 * @param {StartTalkRequest} requestBody Action to perform
		 * @return {StartTalkResponse} Ok
		 */
		StartTalk(requestBody: StartTalkRequest): Observable<StartTalkResponse> {
			return this.http.put<StartTalkResponse>(this.baseUri + '{uuid}/talk', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum GetCallsStatus { started = 'started', ringing = 'ringing', answered = 'answered', machine = 'machine', completed = 'completed', busy = 'busy', cancelled = 'cancelled', failed = 'failed', rejected = 'rejected', timeout = 'timeout', unanswered = 'unanswered' }

	export enum GetCallsOrder { asc = 'asc', desc = 'desc' }

}

