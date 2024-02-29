import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BulkCallParameters {

		/**
		 * Fully qualified URL which will provide the RestXML once the call connects
		 * Required
		 */
		AnswerUrl: string;

		/** Caller Name to be set for the call */
		CallerName?: string | null;

		/** DTMF tone the called party must send to accept the call */
		ConfirmKey?: string | null;

		/** Remote URL to fetch with POST HTTP request which must return a RestXML with Play, Wait and/or Speak Elements only (all others are ignored). This RESTXML is played to the called party when he answered */
		ConfirmSound?: string | null;

		/** Core UUID of the desired FreeSWITCH instance (an Eqivo extension) */
		CoreUUID?: string | null;

		/**
		 * Any character, except `/` and `,`, which will be used as a separator within several parameters
		 * Required
		 */
		Delimiter: string;

		/** Additional [channel variables](https://freeswitch.org/confluence/display/FREESWITCH/Channel+Variables) to be added to the originate FreeSWITCH API call. */
		ExtraDialString?: string | null;

		/**
		 * Phone number to be used as Caller ID
		 * Required
		 */
		From: string;

		/** List of codec(s) to be used for each gateway. Enclose codec groups in single quotes */
		GatewayCodecs?: string | null;

		/** List of maximum retry counts for each gateway */
		GatewayRetries?: string | null;

		/** List of maximum timeout amounts (in seconds) for each gateway */
		GatewayTimeouts?: string | null;

		/**
		 * Comma separated FreeSWITCH gateway strings. When multiple gateways are specified, they will be tried sequentially (failover)
		 * Required
		 */
		Gateways: string;

		/**
		 * Schedules the call's hangup at a given time offset (in seconds) after the destination starts ringing
		 * Minimum: 1
		 */
		HangupOnRing?: number | null;

		/** Fully qualified URL to which the call hangup notification will be POSTed. `HangupCause` is added to the usual call [call notification parameters](#/components/schemas/CallNotificationParameters) */
		HangupUrl?: string | null;

		/** Comma separated reject causes */
		RejectCauses?: string | null;

		/** Fully qualified URL to which the call ringing notification will be POSTed. `RequestUUID` and `CallUUID` is added to the usual [call notification parameters](#/components/schemas/CallNotificationParameters) */
		RingUrl?: string | null;

		/** DTMF tones to be sent when the call is answered. Each occurrence of `w` implies a 0.5 seconds delay whereas `W` will apply a whole second delay. To alter the tone duration (by default, 2000ms), append `@` and the length in milliseconds at the end of the string */
		SendDigits?: string | null;

		/** When set to `true`, DTMF tones will be sent as early media rather than when the call is answered */
		SendOnPreanswer?: boolean | null;

		/**
		 * Schedules the call's hangup at a given time offset (in seconds) after the call is answered
		 * Minimum: 1
		 */
		TimeLimit?: number | null;

		/**
		 * Phone number to be called
		 * Required
		 */
		To: string;
	}
	export interface BulkCallParametersFormProperties {

		/**
		 * Fully qualified URL which will provide the RestXML once the call connects
		 * Required
		 */
		AnswerUrl: FormControl<string | null | undefined>,

		/** Caller Name to be set for the call */
		CallerName: FormControl<string | null | undefined>,

		/** DTMF tone the called party must send to accept the call */
		ConfirmKey: FormControl<string | null | undefined>,

		/** Remote URL to fetch with POST HTTP request which must return a RestXML with Play, Wait and/or Speak Elements only (all others are ignored). This RESTXML is played to the called party when he answered */
		ConfirmSound: FormControl<string | null | undefined>,

		/** Core UUID of the desired FreeSWITCH instance (an Eqivo extension) */
		CoreUUID: FormControl<string | null | undefined>,

		/**
		 * Any character, except `/` and `,`, which will be used as a separator within several parameters
		 * Required
		 */
		Delimiter: FormControl<string | null | undefined>,

		/** Additional [channel variables](https://freeswitch.org/confluence/display/FREESWITCH/Channel+Variables) to be added to the originate FreeSWITCH API call. */
		ExtraDialString: FormControl<string | null | undefined>,

		/**
		 * Phone number to be used as Caller ID
		 * Required
		 */
		From: FormControl<string | null | undefined>,

		/** List of codec(s) to be used for each gateway. Enclose codec groups in single quotes */
		GatewayCodecs: FormControl<string | null | undefined>,

		/** List of maximum retry counts for each gateway */
		GatewayRetries: FormControl<string | null | undefined>,

		/** List of maximum timeout amounts (in seconds) for each gateway */
		GatewayTimeouts: FormControl<string | null | undefined>,

		/**
		 * Comma separated FreeSWITCH gateway strings. When multiple gateways are specified, they will be tried sequentially (failover)
		 * Required
		 */
		Gateways: FormControl<string | null | undefined>,

		/**
		 * Schedules the call's hangup at a given time offset (in seconds) after the destination starts ringing
		 * Minimum: 1
		 */
		HangupOnRing: FormControl<number | null | undefined>,

		/** Fully qualified URL to which the call hangup notification will be POSTed. `HangupCause` is added to the usual call [call notification parameters](#/components/schemas/CallNotificationParameters) */
		HangupUrl: FormControl<string | null | undefined>,

		/** Comma separated reject causes */
		RejectCauses: FormControl<string | null | undefined>,

		/** Fully qualified URL to which the call ringing notification will be POSTed. `RequestUUID` and `CallUUID` is added to the usual [call notification parameters](#/components/schemas/CallNotificationParameters) */
		RingUrl: FormControl<string | null | undefined>,

		/** DTMF tones to be sent when the call is answered. Each occurrence of `w` implies a 0.5 seconds delay whereas `W` will apply a whole second delay. To alter the tone duration (by default, 2000ms), append `@` and the length in milliseconds at the end of the string */
		SendDigits: FormControl<string | null | undefined>,

		/** When set to `true`, DTMF tones will be sent as early media rather than when the call is answered */
		SendOnPreanswer: FormControl<boolean | null | undefined>,

		/**
		 * Schedules the call's hangup at a given time offset (in seconds) after the call is answered
		 * Minimum: 1
		 */
		TimeLimit: FormControl<number | null | undefined>,

		/**
		 * Phone number to be called
		 * Required
		 */
		To: FormControl<string | null | undefined>,
	}
	export function CreateBulkCallParametersFormGroup() {
		return new FormGroup<BulkCallParametersFormProperties>({
			AnswerUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CallerName: new FormControl<string | null | undefined>(undefined),
			ConfirmKey: new FormControl<string | null | undefined>(undefined),
			ConfirmSound: new FormControl<string | null | undefined>(undefined),
			CoreUUID: new FormControl<string | null | undefined>(undefined),
			Delimiter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExtraDialString: new FormControl<string | null | undefined>(undefined),
			From: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GatewayCodecs: new FormControl<string | null | undefined>(undefined),
			GatewayRetries: new FormControl<string | null | undefined>(undefined),
			GatewayTimeouts: new FormControl<string | null | undefined>(undefined),
			Gateways: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HangupOnRing: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			HangupUrl: new FormControl<string | null | undefined>(undefined),
			RejectCauses: new FormControl<string | null | undefined>(undefined),
			RingUrl: new FormControl<string | null | undefined>(undefined),
			SendDigits: new FormControl<string | null | undefined>(undefined),
			SendOnPreanswer: new FormControl<boolean | null | undefined>(undefined),
			TimeLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			To: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BulkCallResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: BulkCallResponseMessage;

		/**
		 * Unique identifiers of each Call request (UUIDv4)
		 * Required
		 */
		RequestUUID: Array<string>;

		/**
		 * API server which handled this request (an Eqivo extension)
		 * Required
		 */
		RestApiServer: string;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface BulkCallResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<BulkCallResponseMessage | null | undefined>,

		/**
		 * API server which handled this request (an Eqivo extension)
		 * Required
		 */
		RestApiServer: FormControl<string | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateBulkCallResponseFormGroup() {
		return new FormGroup<BulkCallResponseFormProperties>({
			Message: new FormControl<BulkCallResponseMessage | null | undefined>(undefined, [Validators.required]),
			RestApiServer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BulkCallResponseMessage { 'BulkCalls Request Executed' = 'BulkCalls Request Executed', 'Mandatory Parameters Missing' = 'Mandatory Parameters Missing', 'This Delimiter is not allowed' = 'This Delimiter is not allowed', 'BulkCalls should be used for at least 2 numbers' = 'BulkCalls should be used for at least 2 numbers', '\'To\' parameter length does not match \'Gateways\' Length' = '\'To\' parameter length does not match \'Gateways\' Length', 'AnswerUrl is not Valid' = 'AnswerUrl is not Valid', 'HangupUrl is not Valid' = 'HangupUrl is not Valid', 'RingUrl is not Valid' = 'RingUrl is not Valid', 'Unknown Core UUID' = 'Unknown Core UUID' }

	export interface CallNotificationParameters {

		/** A leg call request's unique identifier */
		ALegRequestUUID?: string | null;

		/** A leg call's unique identifier, assigned by FreeSWITCH */
		ALegUUID?: string | null;

		/** Answering actor, when answering machine detection is enabled */
		AnsweredBy?: CallNotificationParametersAnsweredBy | null;

		/**
		 * Call's current status
		 * Required
		 */
		CallStatus: CallNotificationParametersCallStatus;

		/**
		 * Call's unique identifier, assigned by FreeSWITCH
		 * Required
		 */
		CallUUID: string;

		/**
		 * Caller name set for the call
		 * Required
		 */
		CallerName: string;

		/**
		 * FreeSWITCH's instance unique identifier (Eqivo extension)
		 * Required
		 */
		CoreUUID: string;

		/**
		 * Call's direction
		 * Required
		 */
		Direction: CallNotificationParametersDirection;

		/** Original call destination (before diversion) */
		ForwardedFrom?: string | null;

		/**
		 * Caller ID set for the call
		 * Required
		 */
		From: string;

		/**
		 * Actual answering machine detection assessment duration (in milliseconds)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MachineDetectionDuration?: number | null;

		/**
		 * Eqivo Rest API server which controls the call (Eqivo extension)
		 * Required
		 */
		RestApiServer: string;

		/** Unique identifier of the scheduled hangup task */
		ScheduledHangupId?: string | null;

		/**
		 * Called phone number
		 * Required
		 */
		To: string;
	}
	export interface CallNotificationParametersFormProperties {

		/** A leg call request's unique identifier */
		ALegRequestUUID: FormControl<string | null | undefined>,

		/** A leg call's unique identifier, assigned by FreeSWITCH */
		ALegUUID: FormControl<string | null | undefined>,

		/** Answering actor, when answering machine detection is enabled */
		AnsweredBy: FormControl<CallNotificationParametersAnsweredBy | null | undefined>,

		/**
		 * Call's current status
		 * Required
		 */
		CallStatus: FormControl<CallNotificationParametersCallStatus | null | undefined>,

		/**
		 * Call's unique identifier, assigned by FreeSWITCH
		 * Required
		 */
		CallUUID: FormControl<string | null | undefined>,

		/**
		 * Caller name set for the call
		 * Required
		 */
		CallerName: FormControl<string | null | undefined>,

		/**
		 * FreeSWITCH's instance unique identifier (Eqivo extension)
		 * Required
		 */
		CoreUUID: FormControl<string | null | undefined>,

		/**
		 * Call's direction
		 * Required
		 */
		Direction: FormControl<CallNotificationParametersDirection | null | undefined>,

		/** Original call destination (before diversion) */
		ForwardedFrom: FormControl<string | null | undefined>,

		/**
		 * Caller ID set for the call
		 * Required
		 */
		From: FormControl<string | null | undefined>,

		/**
		 * Actual answering machine detection assessment duration (in milliseconds)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		MachineDetectionDuration: FormControl<number | null | undefined>,

		/**
		 * Eqivo Rest API server which controls the call (Eqivo extension)
		 * Required
		 */
		RestApiServer: FormControl<string | null | undefined>,

		/** Unique identifier of the scheduled hangup task */
		ScheduledHangupId: FormControl<string | null | undefined>,

		/**
		 * Called phone number
		 * Required
		 */
		To: FormControl<string | null | undefined>,
	}
	export function CreateCallNotificationParametersFormGroup() {
		return new FormGroup<CallNotificationParametersFormProperties>({
			ALegRequestUUID: new FormControl<string | null | undefined>(undefined),
			ALegUUID: new FormControl<string | null | undefined>(undefined),
			AnsweredBy: new FormControl<CallNotificationParametersAnsweredBy | null | undefined>(undefined),
			CallStatus: new FormControl<CallNotificationParametersCallStatus | null | undefined>(undefined, [Validators.required]),
			CallUUID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CallerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CoreUUID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Direction: new FormControl<CallNotificationParametersDirection | null | undefined>(undefined, [Validators.required]),
			ForwardedFrom: new FormControl<string | null | undefined>(undefined),
			From: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MachineDetectionDuration: new FormControl<number | null | undefined>(undefined),
			RestApiServer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScheduledHangupId: new FormControl<string | null | undefined>(undefined),
			To: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CallNotificationParametersAnsweredBy { machine_start = 'machine_start', machine_end_beep = 'machine_end_beep', machine_end_other = 'machine_end_other', human = 'human', unknown = 'unknown' }

	export enum CallNotificationParametersCallStatus { ringing = 'ringing', 'early-media' = 'early-media', answer = 'answer', 'in-progress' = 'in-progress', completed = 'completed' }

	export enum CallNotificationParametersDirection { inbound = 'inbound', outbound = 'outbound' }

	export interface CallParameters {

		/**
		 * Fully qualified URL which will provide the RestXML once the call connects
		 * Required
		 */
		AnswerUrl: string;

		/** When set to `true`, the call flow execution is blocked until answering machine detection is complete (an Eqivo extension) */
		AsyncAMD?: boolean | null;

		/** Fully qualified URL to which the answering machine detection result will be sent. `AnsweredBy` and `MachineDetectionDuration` are appended to the usual [call notification parameters](#/components/schemas/CallNotificationParameters) (an Eqivo extension) */
		AsyncAmdStatusCallback?: string | null;

		/** HTTP method to be used when answering machine detection is completed (an Eqivo extension) */
		AsyncAmdStatusCallbackMethod?: CallParametersAsyncAmdStatusCallbackMethod | null;

		/** Caller Name to be set for the call */
		CallerName?: string | null;

		/** Core UUID of the desired FreeSWITCH instance (an Eqivo extension) */
		CoreUUID?: string | null;

		/** Additional [channel variables](https://freeswitch.org/confluence/display/FREESWITCH/Channel+Variables) to be added to the originate FreeSWITCH API call. */
		ExtraDialString?: string | null;

		/**
		 * Phone number to be used as Caller ID
		 * Required
		 */
		From: string;

		/** List of codec(s) to be used for each gateway. Enclose codec groups in single quotes */
		GatewayCodecs?: string | null;

		/** List of maximum retry counts for each gateway */
		GatewayRetries?: string | null;

		/** List of maximum timeout amounts (in seconds) for each gateway */
		GatewayTimeouts?: string | null;

		/**
		 * Comma separated FreeSWITCH gateway strings. When multiple gateways are specified, they will be tried sequentially (failover)
		 * Required
		 */
		Gateways: string;

		/**
		 * Schedules the call's hangup at a given time offset (in seconds) after the destination starts ringing
		 * Minimum: 1
		 */
		HangupOnRing?: number | null;

		/** Fully qualified URL to which the call hangup notification will be POSTed. `HangupCause` is added to the usual call [call notification parameters](#/components/schemas/CallNotificationParameters) */
		HangupUrl?: string | null;

		/** Enables answering machine detection; optionally, it waits until the greeting message has been played back (an Eqivo extension) */
		MachineDetection?: CallParametersMachineDetection | null;

		/**
		 * Initial silence threshold (in milliseconds, an Eqivo extension)
		 * Minimum: 2000
		 * Maximum: 10000
		 */
		MachineDetectionSilenceTimeout?: number | null;

		/**
		 * Silence threshold (in milliseconds, an Eqivo extension)
		 * Minimum: 500
		 * Maximum: 5000
		 */
		MachineDetectionSpeechEndThreshold?: number | null;

		/**
		 * Speech activity/utterance threshold (in milliseconds, an Eqivo extension)
		 * Minimum: 1000
		 * Maximum: 6000
		 */
		MachineDetectionSpeechThreshold?: number | null;

		/**
		 * Amount of time (in seconds) allotted for answering machine detection assessment (an Eqivo extension)
		 * Minimum: 3
		 * Maximum: 59
		 */
		MachineDetectionTimeout?: number | null;

		/** Fully qualified URL to which the call ringing notification will be POSTed. `RequestUUID` and `CallUUID` is added to the usual [call notification parameters](#/components/schemas/CallNotificationParameters) */
		RingUrl?: string | null;

		/** DTMF tones to be sent when the call is answered. Each occurrence of `w` implies a 0.5 seconds delay whereas `W` will apply a whole second delay. To alter the tone duration (by default, 2000ms), append `@` and the length in milliseconds at the end of the string */
		SendDigits?: string | null;

		/** When set to `true`, DTMF tones will be sent as early media rather than when the call is answered */
		SendOnPreanswer?: boolean | null;

		/**
		 * Schedules the call's hangup at a given time offset (in seconds) after the call is answered
		 * Minimum: 1
		 */
		TimeLimit?: number | null;

		/**
		 * Phone number to be called
		 * Required
		 */
		To: string;
	}
	export interface CallParametersFormProperties {

		/**
		 * Fully qualified URL which will provide the RestXML once the call connects
		 * Required
		 */
		AnswerUrl: FormControl<string | null | undefined>,

		/** When set to `true`, the call flow execution is blocked until answering machine detection is complete (an Eqivo extension) */
		AsyncAMD: FormControl<boolean | null | undefined>,

		/** Fully qualified URL to which the answering machine detection result will be sent. `AnsweredBy` and `MachineDetectionDuration` are appended to the usual [call notification parameters](#/components/schemas/CallNotificationParameters) (an Eqivo extension) */
		AsyncAmdStatusCallback: FormControl<string | null | undefined>,

		/** HTTP method to be used when answering machine detection is completed (an Eqivo extension) */
		AsyncAmdStatusCallbackMethod: FormControl<CallParametersAsyncAmdStatusCallbackMethod | null | undefined>,

		/** Caller Name to be set for the call */
		CallerName: FormControl<string | null | undefined>,

		/** Core UUID of the desired FreeSWITCH instance (an Eqivo extension) */
		CoreUUID: FormControl<string | null | undefined>,

		/** Additional [channel variables](https://freeswitch.org/confluence/display/FREESWITCH/Channel+Variables) to be added to the originate FreeSWITCH API call. */
		ExtraDialString: FormControl<string | null | undefined>,

		/**
		 * Phone number to be used as Caller ID
		 * Required
		 */
		From: FormControl<string | null | undefined>,

		/** List of codec(s) to be used for each gateway. Enclose codec groups in single quotes */
		GatewayCodecs: FormControl<string | null | undefined>,

		/** List of maximum retry counts for each gateway */
		GatewayRetries: FormControl<string | null | undefined>,

		/** List of maximum timeout amounts (in seconds) for each gateway */
		GatewayTimeouts: FormControl<string | null | undefined>,

		/**
		 * Comma separated FreeSWITCH gateway strings. When multiple gateways are specified, they will be tried sequentially (failover)
		 * Required
		 */
		Gateways: FormControl<string | null | undefined>,

		/**
		 * Schedules the call's hangup at a given time offset (in seconds) after the destination starts ringing
		 * Minimum: 1
		 */
		HangupOnRing: FormControl<number | null | undefined>,

		/** Fully qualified URL to which the call hangup notification will be POSTed. `HangupCause` is added to the usual call [call notification parameters](#/components/schemas/CallNotificationParameters) */
		HangupUrl: FormControl<string | null | undefined>,

		/** Enables answering machine detection; optionally, it waits until the greeting message has been played back (an Eqivo extension) */
		MachineDetection: FormControl<CallParametersMachineDetection | null | undefined>,

		/**
		 * Initial silence threshold (in milliseconds, an Eqivo extension)
		 * Minimum: 2000
		 * Maximum: 10000
		 */
		MachineDetectionSilenceTimeout: FormControl<number | null | undefined>,

		/**
		 * Silence threshold (in milliseconds, an Eqivo extension)
		 * Minimum: 500
		 * Maximum: 5000
		 */
		MachineDetectionSpeechEndThreshold: FormControl<number | null | undefined>,

		/**
		 * Speech activity/utterance threshold (in milliseconds, an Eqivo extension)
		 * Minimum: 1000
		 * Maximum: 6000
		 */
		MachineDetectionSpeechThreshold: FormControl<number | null | undefined>,

		/**
		 * Amount of time (in seconds) allotted for answering machine detection assessment (an Eqivo extension)
		 * Minimum: 3
		 * Maximum: 59
		 */
		MachineDetectionTimeout: FormControl<number | null | undefined>,

		/** Fully qualified URL to which the call ringing notification will be POSTed. `RequestUUID` and `CallUUID` is added to the usual [call notification parameters](#/components/schemas/CallNotificationParameters) */
		RingUrl: FormControl<string | null | undefined>,

		/** DTMF tones to be sent when the call is answered. Each occurrence of `w` implies a 0.5 seconds delay whereas `W` will apply a whole second delay. To alter the tone duration (by default, 2000ms), append `@` and the length in milliseconds at the end of the string */
		SendDigits: FormControl<string | null | undefined>,

		/** When set to `true`, DTMF tones will be sent as early media rather than when the call is answered */
		SendOnPreanswer: FormControl<boolean | null | undefined>,

		/**
		 * Schedules the call's hangup at a given time offset (in seconds) after the call is answered
		 * Minimum: 1
		 */
		TimeLimit: FormControl<number | null | undefined>,

		/**
		 * Phone number to be called
		 * Required
		 */
		To: FormControl<string | null | undefined>,
	}
	export function CreateCallParametersFormGroup() {
		return new FormGroup<CallParametersFormProperties>({
			AnswerUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AsyncAMD: new FormControl<boolean | null | undefined>(undefined),
			AsyncAmdStatusCallback: new FormControl<string | null | undefined>(undefined),
			AsyncAmdStatusCallbackMethod: new FormControl<CallParametersAsyncAmdStatusCallbackMethod | null | undefined>(undefined),
			CallerName: new FormControl<string | null | undefined>(undefined),
			CoreUUID: new FormControl<string | null | undefined>(undefined),
			ExtraDialString: new FormControl<string | null | undefined>(undefined),
			From: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GatewayCodecs: new FormControl<string | null | undefined>(undefined),
			GatewayRetries: new FormControl<string | null | undefined>(undefined),
			GatewayTimeouts: new FormControl<string | null | undefined>(undefined),
			Gateways: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HangupOnRing: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			HangupUrl: new FormControl<string | null | undefined>(undefined),
			MachineDetection: new FormControl<CallParametersMachineDetection | null | undefined>(undefined),
			MachineDetectionSilenceTimeout: new FormControl<number | null | undefined>(undefined, [Validators.min(2000), Validators.max(10000)]),
			MachineDetectionSpeechEndThreshold: new FormControl<number | null | undefined>(undefined, [Validators.min(500), Validators.max(5000)]),
			MachineDetectionSpeechThreshold: new FormControl<number | null | undefined>(undefined, [Validators.min(1000), Validators.max(6000)]),
			MachineDetectionTimeout: new FormControl<number | null | undefined>(undefined, [Validators.min(3), Validators.max(59)]),
			RingUrl: new FormControl<string | null | undefined>(undefined),
			SendDigits: new FormControl<string | null | undefined>(undefined),
			SendOnPreanswer: new FormControl<boolean | null | undefined>(undefined),
			TimeLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			To: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CallParametersAsyncAmdStatusCallbackMethod { POST = 'POST', GET = 'GET' }

	export enum CallParametersMachineDetection { Enable = 'Enable', DetectMessageEnd = 'DetectMessageEnd' }

	export interface CallResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: CallResponseMessage;

		/**
		 * Unique identifier of the Call request (UUIDv4)
		 * Required
		 */
		RequestUUID: string;

		/**
		 * API server which handled this request (an Eqivo extension)
		 * Required
		 */
		RestApiServer: string;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface CallResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<CallResponseMessage | null | undefined>,

		/**
		 * Unique identifier of the Call request (UUIDv4)
		 * Required
		 */
		RequestUUID: FormControl<string | null | undefined>,

		/**
		 * API server which handled this request (an Eqivo extension)
		 * Required
		 */
		RestApiServer: FormControl<string | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateCallResponseFormGroup() {
		return new FormGroup<CallResponseFormProperties>({
			Message: new FormControl<CallResponseMessage | null | undefined>(undefined, [Validators.required]),
			RequestUUID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RestApiServer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CallResponseMessage { 'Call Request Executed' = 'Call Request Executed', 'Mandatory Parameters Missing' = 'Mandatory Parameters Missing', 'AnswerUrl is not Valid' = 'AnswerUrl is not Valid', 'HangupUrl is not Valid' = 'HangupUrl is not Valid', 'RingUrl is not Valid' = 'RingUrl is not Valid', 'Unknown Core UUID' = 'Unknown Core UUID' }

	export interface CancelScheduledHangupParameters {

		/**
		 * Unique identifier returned when scheduled hangup was originally requested
		 * Required
		 */
		SchedHangupId: string;
	}
	export interface CancelScheduledHangupParametersFormProperties {

		/**
		 * Unique identifier returned when scheduled hangup was originally requested
		 * Required
		 */
		SchedHangupId: FormControl<string | null | undefined>,
	}
	export function CreateCancelScheduledHangupParametersFormGroup() {
		return new FormGroup<CancelScheduledHangupParametersFormProperties>({
			SchedHangupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelScheduledHangupResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: CancelScheduledHangupResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface CancelScheduledHangupResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<CancelScheduledHangupResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateCancelScheduledHangupResponseFormGroup() {
		return new FormGroup<CancelScheduledHangupResponseFormProperties>({
			Message: new FormControl<CancelScheduledHangupResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CancelScheduledHangupResponseMessage { 'Scheduled Hangup Cancelation Executed' = 'Scheduled Hangup Cancelation Executed', 'SchedHangupId Parameter must be present' = 'SchedHangupId Parameter must be present', 'Scheduled Hangup Cancelation Failed -- ID not found' = 'Scheduled Hangup Cancelation Failed -- ID not found', 'Scheduled Hangup Cancelation Failed' = 'Scheduled Hangup Cancelation Failed' }

	export interface CancelScheduledPlayParameters {

		/**
		 * Unique identifier returned when scheduled playback was originally requested
		 * Required
		 */
		SchedPlayId: string;
	}
	export interface CancelScheduledPlayParametersFormProperties {

		/**
		 * Unique identifier returned when scheduled playback was originally requested
		 * Required
		 */
		SchedPlayId: FormControl<string | null | undefined>,
	}
	export function CreateCancelScheduledPlayParametersFormGroup() {
		return new FormGroup<CancelScheduledPlayParametersFormProperties>({
			SchedPlayId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelScheduledPlayResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: CancelScheduledPlayResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface CancelScheduledPlayResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<CancelScheduledPlayResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateCancelScheduledPlayResponseFormGroup() {
		return new FormGroup<CancelScheduledPlayResponseFormProperties>({
			Message: new FormControl<CancelScheduledPlayResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CancelScheduledPlayResponseMessage { 'Scheduled Play Cancelation Executed' = 'Scheduled Play Cancelation Executed', 'SchedPlayId Parameter must be present' = 'SchedPlayId Parameter must be present', 'Scheduled Play Cancelation Failed -- ID not found' = 'Scheduled Play Cancelation Failed -- ID not found', 'Scheduled Play Cancelation Failed' = 'Scheduled Play Cancelation Failed' }

	export interface ConferenceDeafParameters {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: string;

		/**
		 * List of comma separated member IDs to be affected; `all` shorthand is available too.
		 * Required
		 */
		MemberID: string;
	}
	export interface ConferenceDeafParametersFormProperties {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: FormControl<string | null | undefined>,

		/**
		 * List of comma separated member IDs to be affected; `all` shorthand is available too.
		 * Required
		 */
		MemberID: FormControl<string | null | undefined>,
	}
	export function CreateConferenceDeafParametersFormGroup() {
		return new FormGroup<ConferenceDeafParametersFormProperties>({
			ConferenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MemberID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConferenceDeafResponse {

		/** List of affected members */
		Members?: Array<string>;

		/**
		 * Response message
		 * Required
		 */
		Message: ConferenceDeafResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface ConferenceDeafResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<ConferenceDeafResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateConferenceDeafResponseFormGroup() {
		return new FormGroup<ConferenceDeafResponseFormProperties>({
			Message: new FormControl<ConferenceDeafResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConferenceDeafResponseMessage { 'Conference Deaf Executed' = 'Conference Deaf Executed', 'ConferenceName Parameter must be present' = 'ConferenceName Parameter must be present', 'MemberID Parameter must be present' = 'MemberID Parameter must be present', 'Conference Deaf Failed -- Conference not found' = 'Conference Deaf Failed -- Conference not found' }

	export interface ConferenceHangupParameters {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: string;

		/**
		 * List of comma separated member IDs to be affected; `all` shorthand is available too.
		 * Required
		 */
		MemberID: string;
	}
	export interface ConferenceHangupParametersFormProperties {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: FormControl<string | null | undefined>,

		/**
		 * List of comma separated member IDs to be affected; `all` shorthand is available too.
		 * Required
		 */
		MemberID: FormControl<string | null | undefined>,
	}
	export function CreateConferenceHangupParametersFormGroup() {
		return new FormGroup<ConferenceHangupParametersFormProperties>({
			ConferenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MemberID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConferenceHangupResponse {

		/** List of affected members */
		Members?: Array<string>;

		/**
		 * Response message
		 * Required
		 */
		Message: ConferenceHangupResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface ConferenceHangupResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<ConferenceHangupResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateConferenceHangupResponseFormGroup() {
		return new FormGroup<ConferenceHangupResponseFormProperties>({
			Message: new FormControl<ConferenceHangupResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConferenceHangupResponseMessage { 'Conference Hangup Executed' = 'Conference Hangup Executed', 'ConferenceName Parameter must be present' = 'ConferenceName Parameter must be present', 'MemberID Parameter must be present' = 'MemberID Parameter must be present', 'Conference Hangup Failed -- Conference not found' = 'Conference Hangup Failed -- Conference not found' }

	export interface ConferenceKickParameters {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: string;

		/**
		 * List of comma separated member IDs to be affected; `all` shorthand is available too.
		 * Required
		 */
		MemberID: string;
	}
	export interface ConferenceKickParametersFormProperties {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: FormControl<string | null | undefined>,

		/**
		 * List of comma separated member IDs to be affected; `all` shorthand is available too.
		 * Required
		 */
		MemberID: FormControl<string | null | undefined>,
	}
	export function CreateConferenceKickParametersFormGroup() {
		return new FormGroup<ConferenceKickParametersFormProperties>({
			ConferenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MemberID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConferenceKickResponse {

		/** List of affected members */
		Members?: Array<string>;

		/**
		 * Response message
		 * Required
		 */
		Message: ConferenceKickResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface ConferenceKickResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<ConferenceKickResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateConferenceKickResponseFormGroup() {
		return new FormGroup<ConferenceKickResponseFormProperties>({
			Message: new FormControl<ConferenceKickResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConferenceKickResponseMessage { 'Conference Kick Executed' = 'Conference Kick Executed', 'ConferenceName Parameter must be present' = 'ConferenceName Parameter must be present', 'MemberID Parameter must be present' = 'MemberID Parameter must be present', 'Conference Kick Failed -- Conference not found' = 'Conference Kick Failed -- Conference not found' }

	export interface ConferenceListMembersParameters {

		/** Restricts listed calls to the provided values (comma separated call UUID list) */
		CallUUIDFilter?: string | null;

		/**
		 * Name of the conference
		 * Required
		 */
		ConferenceName: string;

		/** Restricts listed members to deaf ones */
		DeafFilter?: boolean | null;

		/** Restricts listed members to the provided values (comma separated member ID list) */
		MemberFilter?: string | null;

		/** Restricts listed members to muted ones */
		MutedFilter?: boolean | null;
	}
	export interface ConferenceListMembersParametersFormProperties {

		/** Restricts listed calls to the provided values (comma separated call UUID list) */
		CallUUIDFilter: FormControl<string | null | undefined>,

		/**
		 * Name of the conference
		 * Required
		 */
		ConferenceName: FormControl<string | null | undefined>,

		/** Restricts listed members to deaf ones */
		DeafFilter: FormControl<boolean | null | undefined>,

		/** Restricts listed members to the provided values (comma separated member ID list) */
		MemberFilter: FormControl<string | null | undefined>,

		/** Restricts listed members to muted ones */
		MutedFilter: FormControl<boolean | null | undefined>,
	}
	export function CreateConferenceListMembersParametersFormGroup() {
		return new FormGroup<ConferenceListMembersParametersFormProperties>({
			CallUUIDFilter: new FormControl<string | null | undefined>(undefined),
			ConferenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeafFilter: new FormControl<boolean | null | undefined>(undefined),
			MemberFilter: new FormControl<string | null | undefined>(undefined),
			MutedFilter: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ConferenceListMembersResponse {

		/**
		 * List of established conferences
		 * Required
		 */
		List: string;

		/**
		 * Response message
		 * Required
		 */
		Message: ConferenceListMembersResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface ConferenceListMembersResponseFormProperties {

		/**
		 * List of established conferences
		 * Required
		 */
		List: FormControl<string | null | undefined>,

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<ConferenceListMembersResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateConferenceListMembersResponseFormGroup() {
		return new FormGroup<ConferenceListMembersResponseFormProperties>({
			List: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<ConferenceListMembersResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConferenceListMembersResponseMessage { 'Conference ListMembers Executed' = 'Conference ListMembers Executed', 'ConferenceName Parameter must be present' = 'ConferenceName Parameter must be present', 'Conference ListMembers Failed to parse result' = 'Conference ListMembers Failed to parse result', 'Conference ListMembers Failed -- Conference not found' = 'Conference ListMembers Failed -- Conference not found' }

	export interface ConferenceListParameters {

		/** Restricts listed calls to the provided values (comma separated call UUID list) */
		CallUUIDFilter?: string | null;

		/** Restricts listed members to deaf ones */
		DeafFilter?: boolean | null;

		/** Restricts listed members to the provided values (comma separated member ID list) */
		MemberFilter?: string | null;

		/** Restricts listed members to muted ones */
		MutedFilter?: boolean | null;
	}
	export interface ConferenceListParametersFormProperties {

		/** Restricts listed calls to the provided values (comma separated call UUID list) */
		CallUUIDFilter: FormControl<string | null | undefined>,

		/** Restricts listed members to deaf ones */
		DeafFilter: FormControl<boolean | null | undefined>,

		/** Restricts listed members to the provided values (comma separated member ID list) */
		MemberFilter: FormControl<string | null | undefined>,

		/** Restricts listed members to muted ones */
		MutedFilter: FormControl<boolean | null | undefined>,
	}
	export function CreateConferenceListParametersFormGroup() {
		return new FormGroup<ConferenceListParametersFormProperties>({
			CallUUIDFilter: new FormControl<string | null | undefined>(undefined),
			DeafFilter: new FormControl<boolean | null | undefined>(undefined),
			MemberFilter: new FormControl<string | null | undefined>(undefined),
			MutedFilter: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ConferenceListResponse {

		/**
		 * List of established conferences
		 * Required
		 */
		List: string;

		/**
		 * Response message
		 * Required
		 */
		Message: ConferenceListResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface ConferenceListResponseFormProperties {

		/**
		 * List of established conferences
		 * Required
		 */
		List: FormControl<string | null | undefined>,

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<ConferenceListResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateConferenceListResponseFormGroup() {
		return new FormGroup<ConferenceListResponseFormProperties>({
			List: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<ConferenceListResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConferenceListResponseMessage { 'Conference List Executed' = 'Conference List Executed', 'Conference List Failed to parse result' = 'Conference List Failed to parse result' }

	export interface ConferenceMuteParameters {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: string;

		/**
		 * List of comma separated member IDs to be affected; `all` shorthand is available too.
		 * Required
		 */
		MemberID: string;
	}
	export interface ConferenceMuteParametersFormProperties {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: FormControl<string | null | undefined>,

		/**
		 * List of comma separated member IDs to be affected; `all` shorthand is available too.
		 * Required
		 */
		MemberID: FormControl<string | null | undefined>,
	}
	export function CreateConferenceMuteParametersFormGroup() {
		return new FormGroup<ConferenceMuteParametersFormProperties>({
			ConferenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MemberID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConferenceMuteResponse {

		/** List of affected members */
		Members?: Array<string>;

		/**
		 * Response message
		 * Required
		 */
		Message: ConferenceMuteResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface ConferenceMuteResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<ConferenceMuteResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateConferenceMuteResponseFormGroup() {
		return new FormGroup<ConferenceMuteResponseFormProperties>({
			Message: new FormControl<ConferenceMuteResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConferenceMuteResponseMessage { 'Conference Mute Executed' = 'Conference Mute Executed', 'ConferenceName Parameter must be present' = 'ConferenceName Parameter must be present', 'MemberID Parameter must be present' = 'MemberID Parameter must be present', 'Conference Mute Failed -- Conference not found' = 'Conference Mute Failed -- Conference not found' }

	export interface ConferencePlayParameters {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: string;

		/**
		 * Path/URI of the media file to be played
		 * Required
		 */
		FilePath: string;

		/**
		 * List of comma separated member IDs to be affected; `all` shorthand is available too.
		 * Required
		 */
		MemberID: string;
	}
	export interface ConferencePlayParametersFormProperties {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: FormControl<string | null | undefined>,

		/**
		 * Path/URI of the media file to be played
		 * Required
		 */
		FilePath: FormControl<string | null | undefined>,

		/**
		 * List of comma separated member IDs to be affected; `all` shorthand is available too.
		 * Required
		 */
		MemberID: FormControl<string | null | undefined>,
	}
	export function CreateConferencePlayParametersFormGroup() {
		return new FormGroup<ConferencePlayParametersFormProperties>({
			ConferenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FilePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MemberID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConferencePlayResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: ConferencePlayResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface ConferencePlayResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<ConferencePlayResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateConferencePlayResponseFormGroup() {
		return new FormGroup<ConferencePlayResponseFormProperties>({
			Message: new FormControl<ConferencePlayResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConferencePlayResponseMessage { 'Conference Play Executed' = 'Conference Play Executed', 'ConferenceName Parameter must be present' = 'ConferenceName Parameter must be present', 'FilePath Parameter must be present' = 'FilePath Parameter must be present', 'MemberID Parameter must be present' = 'MemberID Parameter must be present', 'Conference Play Failed -- Conference not found' = 'Conference Play Failed -- Conference not found', 'Conference Play Failed' = 'Conference Play Failed' }

	export interface ConferenceRecordStartParameters {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: string;

		/** File format (extension) */
		FileFormat?: ConferenceRecordStartParametersFileFormat | null;

		/** Recording file name (without extension); if empty, a timestamp based file name will be generated */
		FileName?: string | null;

		/** Directory path/URI where the recording file will be saved */
		FilePath?: string | null;
	}
	export interface ConferenceRecordStartParametersFormProperties {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: FormControl<string | null | undefined>,

		/** File format (extension) */
		FileFormat: FormControl<ConferenceRecordStartParametersFileFormat | null | undefined>,

		/** Recording file name (without extension); if empty, a timestamp based file name will be generated */
		FileName: FormControl<string | null | undefined>,

		/** Directory path/URI where the recording file will be saved */
		FilePath: FormControl<string | null | undefined>,
	}
	export function CreateConferenceRecordStartParametersFormGroup() {
		return new FormGroup<ConferenceRecordStartParametersFormProperties>({
			ConferenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FileFormat: new FormControl<ConferenceRecordStartParametersFileFormat | null | undefined>(undefined),
			FileName: new FormControl<string | null | undefined>(undefined),
			FilePath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConferenceRecordStartParametersFileFormat { wav = 'wav', mp3 = 'mp3' }

	export interface ConferenceRecordStartResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: ConferenceRecordStartResponseMessage;

		/**
		 * Directory path/URI where the recording file will be saved
		 * Required
		 */
		RecordFile: string;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface ConferenceRecordStartResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<ConferenceRecordStartResponseMessage | null | undefined>,

		/**
		 * Directory path/URI where the recording file will be saved
		 * Required
		 */
		RecordFile: FormControl<string | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateConferenceRecordStartResponseFormGroup() {
		return new FormGroup<ConferenceRecordStartResponseFormProperties>({
			Message: new FormControl<ConferenceRecordStartResponseMessage | null | undefined>(undefined, [Validators.required]),
			RecordFile: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConferenceRecordStartResponseMessage { 'Conference RecordStart Executed' = 'Conference RecordStart Executed', 'ConferenceName Parameter must be present' = 'ConferenceName Parameter must be present', 'FileFormat Parameter must be' = 'FileFormat Parameter must be', 'Conference RecordStart Failed' = 'Conference RecordStart Failed', 'Conference RecordStart Failed -- Conference not found' = 'Conference RecordStart Failed -- Conference not found' }

	export interface ConferenceRecordStopParameters {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: string;

		/**
		 * Full path to recording file, as returned by ConferenceRecordStart; `all` shorthand is also available
		 * Required
		 */
		RecordFile: string;
	}
	export interface ConferenceRecordStopParametersFormProperties {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: FormControl<string | null | undefined>,

		/**
		 * Full path to recording file, as returned by ConferenceRecordStart; `all` shorthand is also available
		 * Required
		 */
		RecordFile: FormControl<string | null | undefined>,
	}
	export function CreateConferenceRecordStopParametersFormGroup() {
		return new FormGroup<ConferenceRecordStopParametersFormProperties>({
			ConferenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecordFile: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConferenceRecordStopResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: ConferenceRecordStopResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface ConferenceRecordStopResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<ConferenceRecordStopResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateConferenceRecordStopResponseFormGroup() {
		return new FormGroup<ConferenceRecordStopResponseFormProperties>({
			Message: new FormControl<ConferenceRecordStopResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConferenceRecordStopResponseMessage { 'Conference RecordStop Executed' = 'Conference RecordStop Executed', 'ConferenceName Parameter must be present' = 'ConferenceName Parameter must be present', 'RecordFile Parameter must be present' = 'RecordFile Parameter must be present', 'Conference RecordStop Failed' = 'Conference RecordStop Failed', 'Conference RecordStop Failed -- Conference not found' = 'Conference RecordStop Failed -- Conference not found' }

	export interface ConferenceSpeakParameters {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: string;

		/**
		 * List of comma separated member IDs to be affected; `all` shorthand is available too.
		 * Required
		 */
		MemberID: string;

		/**
		 * Text to be synthesized
		 * Required
		 */
		Text: string;
	}
	export interface ConferenceSpeakParametersFormProperties {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: FormControl<string | null | undefined>,

		/**
		 * List of comma separated member IDs to be affected; `all` shorthand is available too.
		 * Required
		 */
		MemberID: FormControl<string | null | undefined>,

		/**
		 * Text to be synthesized
		 * Required
		 */
		Text: FormControl<string | null | undefined>,
	}
	export function CreateConferenceSpeakParametersFormGroup() {
		return new FormGroup<ConferenceSpeakParametersFormProperties>({
			ConferenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MemberID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConferenceSpeakResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: ConferenceSpeakResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface ConferenceSpeakResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<ConferenceSpeakResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateConferenceSpeakResponseFormGroup() {
		return new FormGroup<ConferenceSpeakResponseFormProperties>({
			Message: new FormControl<ConferenceSpeakResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConferenceSpeakResponseMessage { 'Conference Speak Executed' = 'Conference Speak Executed', 'ConferenceName Parameter must be present' = 'ConferenceName Parameter must be present', 'Text Parameter must be present' = 'Text Parameter must be present', 'MemberID Parameter must be present' = 'MemberID Parameter must be present', 'Conference Speak Failed -- Conference not found' = 'Conference Speak Failed -- Conference not found', 'Conference Speak Failed' = 'Conference Speak Failed' }

	export interface ConferenceUndeafParameters {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: string;

		/**
		 * List of comma separated member IDs to be affected; `all` shorthand is available too.
		 * Required
		 */
		MemberID: string;
	}
	export interface ConferenceUndeafParametersFormProperties {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: FormControl<string | null | undefined>,

		/**
		 * List of comma separated member IDs to be affected; `all` shorthand is available too.
		 * Required
		 */
		MemberID: FormControl<string | null | undefined>,
	}
	export function CreateConferenceUndeafParametersFormGroup() {
		return new FormGroup<ConferenceUndeafParametersFormProperties>({
			ConferenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MemberID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConferenceUndeafResponse {

		/** List of affected members */
		Members?: Array<string>;

		/**
		 * Response message
		 * Required
		 */
		Message: ConferenceUndeafResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface ConferenceUndeafResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<ConferenceUndeafResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateConferenceUndeafResponseFormGroup() {
		return new FormGroup<ConferenceUndeafResponseFormProperties>({
			Message: new FormControl<ConferenceUndeafResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConferenceUndeafResponseMessage { 'Conference Undeaf Executed' = 'Conference Undeaf Executed', 'ConferenceName Parameter must be present' = 'ConferenceName Parameter must be present', 'MemberID Parameter must be present' = 'MemberID Parameter must be present', 'Conference Undeaf Failed -- Conference not found' = 'Conference Undeaf Failed -- Conference not found' }

	export interface ConferenceUnmuteParameters {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: string;

		/**
		 * List of comma separated member IDs to be affected; `all` shorthand is available too.
		 * Required
		 */
		MemberID: string;
	}
	export interface ConferenceUnmuteParametersFormProperties {

		/**
		 * Name of the conference in question
		 * Required
		 */
		ConferenceName: FormControl<string | null | undefined>,

		/**
		 * List of comma separated member IDs to be affected; `all` shorthand is available too.
		 * Required
		 */
		MemberID: FormControl<string | null | undefined>,
	}
	export function CreateConferenceUnmuteParametersFormGroup() {
		return new FormGroup<ConferenceUnmuteParametersFormProperties>({
			ConferenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MemberID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConferenceUnmuteResponse {

		/** List of affected members */
		Members?: Array<string>;

		/**
		 * Response message
		 * Required
		 */
		Message: ConferenceUnmuteResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface ConferenceUnmuteResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<ConferenceUnmuteResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateConferenceUnmuteResponseFormGroup() {
		return new FormGroup<ConferenceUnmuteResponseFormProperties>({
			Message: new FormControl<ConferenceUnmuteResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConferenceUnmuteResponseMessage { 'Conference Unmute Executed' = 'Conference Unmute Executed', 'ConferenceName Parameter must be present' = 'ConferenceName Parameter must be present', 'MemberID Parameter must be present' = 'MemberID Parameter must be present', 'Conference Unmute Failed -- Conference not found' = 'Conference Unmute Failed -- Conference not found' }

	export interface GroupCallParameters {

		/**
		 * Fully qualified URL which will provide the RestXML once the call connects
		 * Required
		 */
		AnswerUrl: string;

		/** Caller Name to be set for the call */
		CallerName?: string | null;

		/** DTMF tone the called party must send to accept the call */
		ConfirmKey?: string | null;

		/** Remote URL to fetch with POST HTTP request which must return a RestXML with Play, Wait and/or Speak Elements only (all others are ignored). This RESTXML is played to the called party when he answered */
		ConfirmSound?: string | null;

		/** Core UUID of the desired FreeSWITCH instance (an Eqivo extension) */
		CoreUUID?: string | null;

		/**
		 * Any character, except `/` and `,`, which will be used as a separator within several parameters
		 * Required
		 */
		Delimiter: string;

		/** Additional [channel variables](https://freeswitch.org/confluence/display/FREESWITCH/Channel+Variables) to be added to the originate FreeSWITCH API call. */
		ExtraDialString?: string | null;

		/**
		 * Phone number to be used as Caller ID
		 * Required
		 */
		From: string;

		/** List of codec(s) to be used for each gateway. Enclose codec groups in single quotes */
		GatewayCodecs?: string | null;

		/** List of maximum retry counts for each gateway */
		GatewayRetries?: string | null;

		/** List of maximum timeout amounts (in seconds) for each gateway */
		GatewayTimeouts?: string | null;

		/**
		 * Comma separated FreeSWITCH gateway strings. When multiple gateways are specified, they will be tried sequentially (failover)
		 * Required
		 */
		Gateways: string;

		/**
		 * Schedules the call's hangup at a given time offset (in seconds) after the destination starts ringing
		 * Minimum: 1
		 */
		HangupOnRing?: number | null;

		/** Fully qualified URL to which the call hangup notification will be POSTed. `HangupCause` is added to the usual call [call notification parameters](#/components/schemas/CallNotificationParameters) */
		HangupUrl?: string | null;

		/** Comma separated reject causes */
		RejectCauses?: string | null;

		/** Fully qualified URL to which the call ringing notification will be POSTed. `RequestUUID` and `CallUUID` is added to the usual [call notification parameters](#/components/schemas/CallNotificationParameters) */
		RingUrl?: string | null;

		/** DTMF tones to be sent when the call is answered. Each occurrence of `w` implies a 0.5 seconds delay whereas `W` will apply a whole second delay. To alter the tone duration (by default, 2000ms), append `@` and the length in milliseconds at the end of the string */
		SendDigits?: string | null;

		/** When set to `true`, DTMF tones will be sent as early media rather than when the call is answered */
		SendOnPreanswer?: boolean | null;

		/**
		 * Schedules the call's hangup at a given time offset (in seconds) after the call is answered
		 * Minimum: 1
		 */
		TimeLimit?: number | null;

		/**
		 * Phone number to be called
		 * Required
		 */
		To: string;
	}
	export interface GroupCallParametersFormProperties {

		/**
		 * Fully qualified URL which will provide the RestXML once the call connects
		 * Required
		 */
		AnswerUrl: FormControl<string | null | undefined>,

		/** Caller Name to be set for the call */
		CallerName: FormControl<string | null | undefined>,

		/** DTMF tone the called party must send to accept the call */
		ConfirmKey: FormControl<string | null | undefined>,

		/** Remote URL to fetch with POST HTTP request which must return a RestXML with Play, Wait and/or Speak Elements only (all others are ignored). This RESTXML is played to the called party when he answered */
		ConfirmSound: FormControl<string | null | undefined>,

		/** Core UUID of the desired FreeSWITCH instance (an Eqivo extension) */
		CoreUUID: FormControl<string | null | undefined>,

		/**
		 * Any character, except `/` and `,`, which will be used as a separator within several parameters
		 * Required
		 */
		Delimiter: FormControl<string | null | undefined>,

		/** Additional [channel variables](https://freeswitch.org/confluence/display/FREESWITCH/Channel+Variables) to be added to the originate FreeSWITCH API call. */
		ExtraDialString: FormControl<string | null | undefined>,

		/**
		 * Phone number to be used as Caller ID
		 * Required
		 */
		From: FormControl<string | null | undefined>,

		/** List of codec(s) to be used for each gateway. Enclose codec groups in single quotes */
		GatewayCodecs: FormControl<string | null | undefined>,

		/** List of maximum retry counts for each gateway */
		GatewayRetries: FormControl<string | null | undefined>,

		/** List of maximum timeout amounts (in seconds) for each gateway */
		GatewayTimeouts: FormControl<string | null | undefined>,

		/**
		 * Comma separated FreeSWITCH gateway strings. When multiple gateways are specified, they will be tried sequentially (failover)
		 * Required
		 */
		Gateways: FormControl<string | null | undefined>,

		/**
		 * Schedules the call's hangup at a given time offset (in seconds) after the destination starts ringing
		 * Minimum: 1
		 */
		HangupOnRing: FormControl<number | null | undefined>,

		/** Fully qualified URL to which the call hangup notification will be POSTed. `HangupCause` is added to the usual call [call notification parameters](#/components/schemas/CallNotificationParameters) */
		HangupUrl: FormControl<string | null | undefined>,

		/** Comma separated reject causes */
		RejectCauses: FormControl<string | null | undefined>,

		/** Fully qualified URL to which the call ringing notification will be POSTed. `RequestUUID` and `CallUUID` is added to the usual [call notification parameters](#/components/schemas/CallNotificationParameters) */
		RingUrl: FormControl<string | null | undefined>,

		/** DTMF tones to be sent when the call is answered. Each occurrence of `w` implies a 0.5 seconds delay whereas `W` will apply a whole second delay. To alter the tone duration (by default, 2000ms), append `@` and the length in milliseconds at the end of the string */
		SendDigits: FormControl<string | null | undefined>,

		/** When set to `true`, DTMF tones will be sent as early media rather than when the call is answered */
		SendOnPreanswer: FormControl<boolean | null | undefined>,

		/**
		 * Schedules the call's hangup at a given time offset (in seconds) after the call is answered
		 * Minimum: 1
		 */
		TimeLimit: FormControl<number | null | undefined>,

		/**
		 * Phone number to be called
		 * Required
		 */
		To: FormControl<string | null | undefined>,
	}
	export function CreateGroupCallParametersFormGroup() {
		return new FormGroup<GroupCallParametersFormProperties>({
			AnswerUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CallerName: new FormControl<string | null | undefined>(undefined),
			ConfirmKey: new FormControl<string | null | undefined>(undefined),
			ConfirmSound: new FormControl<string | null | undefined>(undefined),
			CoreUUID: new FormControl<string | null | undefined>(undefined),
			Delimiter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExtraDialString: new FormControl<string | null | undefined>(undefined),
			From: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GatewayCodecs: new FormControl<string | null | undefined>(undefined),
			GatewayRetries: new FormControl<string | null | undefined>(undefined),
			GatewayTimeouts: new FormControl<string | null | undefined>(undefined),
			Gateways: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HangupOnRing: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			HangupUrl: new FormControl<string | null | undefined>(undefined),
			RejectCauses: new FormControl<string | null | undefined>(undefined),
			RingUrl: new FormControl<string | null | undefined>(undefined),
			SendDigits: new FormControl<string | null | undefined>(undefined),
			SendOnPreanswer: new FormControl<boolean | null | undefined>(undefined),
			TimeLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			To: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GroupCallResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: GroupCallResponseMessage;

		/**
		 * Unique identifier of the Call request (UUIDv4)
		 * Required
		 */
		RequestUUID: string;

		/**
		 * API server which handled this request (an Eqivo extension)
		 * Required
		 */
		RestApiServer: string;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface GroupCallResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<GroupCallResponseMessage | null | undefined>,

		/**
		 * Unique identifier of the Call request (UUIDv4)
		 * Required
		 */
		RequestUUID: FormControl<string | null | undefined>,

		/**
		 * API server which handled this request (an Eqivo extension)
		 * Required
		 */
		RestApiServer: FormControl<string | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateGroupCallResponseFormGroup() {
		return new FormGroup<GroupCallResponseFormProperties>({
			Message: new FormControl<GroupCallResponseMessage | null | undefined>(undefined, [Validators.required]),
			RequestUUID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RestApiServer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GroupCallResponseMessage { 'GroupCall Request Executed' = 'GroupCall Request Executed', 'Mandatory Parameters Missing' = 'Mandatory Parameters Missing', 'This Delimiter is not allowed' = 'This Delimiter is not allowed', 'GroupCall should be used for at least 2 numbers' = 'GroupCall should be used for at least 2 numbers', '\'To\' parameter length does not match \'Gateways\' Length' = '\'To\' parameter length does not match \'Gateways\' Length', 'AnswerUrl is not Valid' = 'AnswerUrl is not Valid', 'HangupUrl is not Valid' = 'HangupUrl is not Valid', 'RingUrl is not Valid' = 'RingUrl is not Valid', 'ConfirmSound is not Valid' = 'ConfirmSound is not Valid', 'Unknown Core UUID' = 'Unknown Core UUID', 'GroupCall Request Failed' = 'GroupCall Request Failed' }

	export interface HangupAllCallsParameters {
	}
	export interface HangupAllCallsParametersFormProperties {
	}
	export function CreateHangupAllCallsParametersFormGroup() {
		return new FormGroup<HangupAllCallsParametersFormProperties>({
		});

	}

	export interface HangupAllCallsResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: HangupAllCallsResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface HangupAllCallsResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<HangupAllCallsResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateHangupAllCallsResponseFormGroup() {
		return new FormGroup<HangupAllCallsResponseFormProperties>({
			Message: new FormControl<HangupAllCallsResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HangupAllCallsResponseMessage { 'All Calls Hungup' = 'All Calls Hungup', 'Hangup Call Failed' = 'Hangup Call Failed' }

	export interface HangupCallParameters {

		/** Unique identifier of the call (when established); this parameter is mutually exclusive with RequestUUID */
		CallUUID?: string | null;

		/** Unique identifier of the API request (when the call is not established yet); this parameter is mutually exclusive with CallUUID */
		RequestUUID?: string | null;
	}
	export interface HangupCallParametersFormProperties {

		/** Unique identifier of the call (when established); this parameter is mutually exclusive with RequestUUID */
		CallUUID: FormControl<string | null | undefined>,

		/** Unique identifier of the API request (when the call is not established yet); this parameter is mutually exclusive with CallUUID */
		RequestUUID: FormControl<string | null | undefined>,
	}
	export function CreateHangupCallParametersFormGroup() {
		return new FormGroup<HangupCallParametersFormProperties>({
			CallUUID: new FormControl<string | null | undefined>(undefined),
			RequestUUID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HangupCallResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: HangupCallResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface HangupCallResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<HangupCallResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateHangupCallResponseFormGroup() {
		return new FormGroup<HangupCallResponseFormProperties>({
			Message: new FormControl<HangupCallResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HangupCallResponseMessage { 'Hangup Call Executed' = 'Hangup Call Executed', 'CallUUID or RequestUUID Parameter must be present' = 'CallUUID or RequestUUID Parameter must be present', 'Both CallUUID and RequestUUID Parameters cannot be present' = 'Both CallUUID and RequestUUID Parameters cannot be present', 'Hangup Call Failed' = 'Hangup Call Failed' }

	export interface PlayParameters {

		/**
		 * Unique identifier of the call to play media into
		 * Required
		 */
		CallUUID: string;

		/** Call leg(s) for which the media will be played; `aleg` refers to the initial call leg, `bleg` refers to the bridged call leg, if applicable. */
		Legs?: PlayParametersLegs | null;

		/**
		 * Maximum amount of time (in seconds) to playback the media
		 * Minimum: 1
		 */
		Length?: number | null;

		/** Loops the media file(s) indefinitely */
		Loop?: boolean | null;

		/** Whether the media should be mixed with the call's audio stream */
		Mix?: boolean | null;

		/**
		 * Comma separated list of file paths/URIs to be played
		 * Required
		 */
		Sounds: string;
	}
	export interface PlayParametersFormProperties {

		/**
		 * Unique identifier of the call to play media into
		 * Required
		 */
		CallUUID: FormControl<string | null | undefined>,

		/** Call leg(s) for which the media will be played; `aleg` refers to the initial call leg, `bleg` refers to the bridged call leg, if applicable. */
		Legs: FormControl<PlayParametersLegs | null | undefined>,

		/**
		 * Maximum amount of time (in seconds) to playback the media
		 * Minimum: 1
		 */
		Length: FormControl<number | null | undefined>,

		/** Loops the media file(s) indefinitely */
		Loop: FormControl<boolean | null | undefined>,

		/** Whether the media should be mixed with the call's audio stream */
		Mix: FormControl<boolean | null | undefined>,

		/**
		 * Comma separated list of file paths/URIs to be played
		 * Required
		 */
		Sounds: FormControl<string | null | undefined>,
	}
	export function CreatePlayParametersFormGroup() {
		return new FormGroup<PlayParametersFormProperties>({
			CallUUID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Legs: new FormControl<PlayParametersLegs | null | undefined>(undefined),
			Length: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			Loop: new FormControl<boolean | null | undefined>(undefined),
			Mix: new FormControl<boolean | null | undefined>(undefined),
			Sounds: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PlayParametersLegs { aleg = 'aleg', bleg = 'bleg', both = 'both' }

	export interface PlayResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: PlayResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface PlayResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<PlayResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreatePlayResponseFormGroup() {
		return new FormGroup<PlayResponseFormProperties>({
			Message: new FormControl<PlayResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PlayResponseMessage { 'Play Executed' = 'Play Executed', 'CallUUID Parameter Missing' = 'CallUUID Parameter Missing', 'Sounds Parameter Missing' = 'Sounds Parameter Missing', 'Legs Parameter is Invalid' = 'Legs Parameter is Invalid', 'Length Parameter must be a positive integer' = 'Length Parameter must be a positive integer', 'Sounds Parameter is Invalid' = 'Sounds Parameter is Invalid', 'Play Failed -- Call not found' = 'Play Failed -- Call not found', 'Play Failed' = 'Play Failed' }

	export interface PlayStopParameters {

		/**
		 * Unique identifier of the call
		 * Required
		 */
		CallUUID: string;
	}
	export interface PlayStopParametersFormProperties {

		/**
		 * Unique identifier of the call
		 * Required
		 */
		CallUUID: FormControl<string | null | undefined>,
	}
	export function CreatePlayStopParametersFormGroup() {
		return new FormGroup<PlayStopParametersFormProperties>({
			CallUUID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PlayStopResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: PlayStopResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface PlayStopResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<PlayStopResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreatePlayStopResponseFormGroup() {
		return new FormGroup<PlayStopResponseFormProperties>({
			Message: new FormControl<PlayStopResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PlayStopResponseMessage { 'PlayStop Executed' = 'PlayStop Executed', 'CallUUID Parameter Missing' = 'CallUUID Parameter Missing', 'PlayStop Failed -- Call not found' = 'PlayStop Failed -- Call not found', 'PlayStop Failed' = 'PlayStop Failed' }

	export interface RecordStartParameters {

		/** Unique identifier of the call to be recorded */
		CallUUID?: string | null;

		/** File format (extension) */
		FileFormat?: ConferenceRecordStartParametersFileFormat | null;

		/** Recording file name (without extension); if empty, a timestamp based file name will be generated */
		FileName?: string | null;

		/** Directory path/URI where the recording file will be saved */
		FilePath?: string | null;

		/**
		 * Maximum recording length, in seconds
		 * Minimum: 1
		 */
		TimeLimit?: number | null;
	}
	export interface RecordStartParametersFormProperties {

		/** Unique identifier of the call to be recorded */
		CallUUID: FormControl<string | null | undefined>,

		/** File format (extension) */
		FileFormat: FormControl<ConferenceRecordStartParametersFileFormat | null | undefined>,

		/** Recording file name (without extension); if empty, a timestamp based file name will be generated */
		FileName: FormControl<string | null | undefined>,

		/** Directory path/URI where the recording file will be saved */
		FilePath: FormControl<string | null | undefined>,

		/**
		 * Maximum recording length, in seconds
		 * Minimum: 1
		 */
		TimeLimit: FormControl<number | null | undefined>,
	}
	export function CreateRecordStartParametersFormGroup() {
		return new FormGroup<RecordStartParametersFormProperties>({
			CallUUID: new FormControl<string | null | undefined>(undefined),
			FileFormat: new FormControl<ConferenceRecordStartParametersFileFormat | null | undefined>(undefined),
			FileName: new FormControl<string | null | undefined>(undefined),
			FilePath: new FormControl<string | null | undefined>(undefined),
			TimeLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface RecordStartResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: RecordStartResponseMessage;

		/**
		 * Directory path/URI where the recording file will be saved
		 * Required
		 */
		RecordFile: string;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface RecordStartResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<RecordStartResponseMessage | null | undefined>,

		/**
		 * Directory path/URI where the recording file will be saved
		 * Required
		 */
		RecordFile: FormControl<string | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateRecordStartResponseFormGroup() {
		return new FormGroup<RecordStartResponseFormProperties>({
			Message: new FormControl<RecordStartResponseMessage | null | undefined>(undefined, [Validators.required]),
			RecordFile: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RecordStartResponseMessage { 'RecordStart Executed' = 'RecordStart Executed', 'CallUUID Parameter must be present' = 'CallUUID Parameter must be present', 'FileFormat Parameter must be' = 'FileFormat Parameter must be', 'RecordStart Failed: invalid TimeLimit' = 'RecordStart Failed: invalid TimeLimit', 'RecordStart Failed -- Call not found' = 'RecordStart Failed -- Call not found', 'RecordStart Failed' = 'RecordStart Failed' }

	export interface RecordStopParameters {

		/**
		 * Unique identifier of the call
		 * Required
		 */
		CallUUID: string;

		/**
		 * Full path to recording file, as returned by RecordStart; `all` shorthand is also available
		 * Required
		 */
		RecordFile: string;
	}
	export interface RecordStopParametersFormProperties {

		/**
		 * Unique identifier of the call
		 * Required
		 */
		CallUUID: FormControl<string | null | undefined>,

		/**
		 * Full path to recording file, as returned by RecordStart; `all` shorthand is also available
		 * Required
		 */
		RecordFile: FormControl<string | null | undefined>,
	}
	export function CreateRecordStopParametersFormGroup() {
		return new FormGroup<RecordStopParametersFormProperties>({
			CallUUID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecordFile: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RecordStopResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: RecordStopResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface RecordStopResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<RecordStopResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateRecordStopResponseFormGroup() {
		return new FormGroup<RecordStopResponseFormProperties>({
			Message: new FormControl<RecordStopResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RecordStopResponseMessage { 'RecordStop Executed' = 'RecordStop Executed', 'CallUUID Parameter must be present' = 'CallUUID Parameter must be present', 'RecordFile Parameter must be present' = 'RecordFile Parameter must be present', 'RecordStop Failed -- Call not found' = 'RecordStop Failed -- Call not found', 'RecordStop Failed' = 'RecordStop Failed' }

	export interface ScheduleHangupParameters {

		/**
		 * Unique identifier of the call
		 * Required
		 */
		CallUUID: string;

		/**
		 * Time (in seconds) after which the call in question will be hung up
		 * Required
		 * Minimum: 1
		 */
		Time: number;
	}
	export interface ScheduleHangupParametersFormProperties {

		/**
		 * Unique identifier of the call
		 * Required
		 */
		CallUUID: FormControl<string | null | undefined>,

		/**
		 * Time (in seconds) after which the call in question will be hung up
		 * Required
		 * Minimum: 1
		 */
		Time: FormControl<number | null | undefined>,
	}
	export function CreateScheduleHangupParametersFormGroup() {
		return new FormGroup<ScheduleHangupParametersFormProperties>({
			CallUUID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Time: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export interface ScheduleHangupResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: ScheduleHangupResponseMessage;

		/**
		 * Unique identifier of the scheduled hangup request (UUIDv4)
		 * Required
		 */
		SchedHangupId: string;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface ScheduleHangupResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<ScheduleHangupResponseMessage | null | undefined>,

		/**
		 * Unique identifier of the scheduled hangup request (UUIDv4)
		 * Required
		 */
		SchedHangupId: FormControl<string | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateScheduleHangupResponseFormGroup() {
		return new FormGroup<ScheduleHangupResponseFormProperties>({
			Message: new FormControl<ScheduleHangupResponseMessage | null | undefined>(undefined, [Validators.required]),
			SchedHangupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScheduleHangupResponseMessage { 'ScheduleHangup Executed' = 'ScheduleHangup Executed', 'CallUUID Parameter must be present' = 'CallUUID Parameter must be present', 'Time Parameter must be present' = 'Time Parameter must be present', 'Time Parameter must be > 0!' = 'Time Parameter must be > 0!', 'ScheduleHangup Failed -- Call not found' = 'ScheduleHangup Failed -- Call not found', 'ScheduleHangup Failed' = 'ScheduleHangup Failed' }

	export interface SchedulePlayParameters {

		/**
		 * Unique identifier of the call to play media into
		 * Required
		 */
		CallUUID: string;

		/** Call leg(s) for which the media will be played; `aleg` refers to the initial call leg, `bleg` refers to the bridged call leg, if applicable. */
		Legs?: PlayParametersLegs | null;

		/**
		 * Maximum amount of time (in seconds) to playback the media
		 * Minimum: 1
		 */
		Length?: number | null;

		/** Loops the media file(s) indefinitely */
		Loop?: boolean | null;

		/** Whether the media should be mixed with the call's audio stream */
		Mix?: boolean | null;

		/**
		 * Comma separated list of file paths/URIs to be played
		 * Required
		 */
		Sounds: string;

		/**
		 * Time (in seconds) after which the media will be playedback
		 * Required
		 * Minimum: 1
		 */
		Time: number;
	}
	export interface SchedulePlayParametersFormProperties {

		/**
		 * Unique identifier of the call to play media into
		 * Required
		 */
		CallUUID: FormControl<string | null | undefined>,

		/** Call leg(s) for which the media will be played; `aleg` refers to the initial call leg, `bleg` refers to the bridged call leg, if applicable. */
		Legs: FormControl<PlayParametersLegs | null | undefined>,

		/**
		 * Maximum amount of time (in seconds) to playback the media
		 * Minimum: 1
		 */
		Length: FormControl<number | null | undefined>,

		/** Loops the media file(s) indefinitely */
		Loop: FormControl<boolean | null | undefined>,

		/** Whether the media should be mixed with the call's audio stream */
		Mix: FormControl<boolean | null | undefined>,

		/**
		 * Comma separated list of file paths/URIs to be played
		 * Required
		 */
		Sounds: FormControl<string | null | undefined>,

		/**
		 * Time (in seconds) after which the media will be playedback
		 * Required
		 * Minimum: 1
		 */
		Time: FormControl<number | null | undefined>,
	}
	export function CreateSchedulePlayParametersFormGroup() {
		return new FormGroup<SchedulePlayParametersFormProperties>({
			CallUUID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Legs: new FormControl<PlayParametersLegs | null | undefined>(undefined),
			Length: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			Loop: new FormControl<boolean | null | undefined>(undefined),
			Mix: new FormControl<boolean | null | undefined>(undefined),
			Sounds: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Time: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export interface SchedulePlayResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: SchedulePlayResponseMessage;

		/**
		 * Unique identifier of the scheduled playback request (UUIDv4)
		 * Required
		 */
		SchedPlayId: string;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface SchedulePlayResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<SchedulePlayResponseMessage | null | undefined>,

		/**
		 * Unique identifier of the scheduled playback request (UUIDv4)
		 * Required
		 */
		SchedPlayId: FormControl<string | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateSchedulePlayResponseFormGroup() {
		return new FormGroup<SchedulePlayResponseFormProperties>({
			Message: new FormControl<SchedulePlayResponseMessage | null | undefined>(undefined, [Validators.required]),
			SchedPlayId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SchedulePlayResponseMessage { 'Play Executed' = 'Play Executed', 'CallUUID Parameter Missing' = 'CallUUID Parameter Missing', 'Sounds Parameter Missing' = 'Sounds Parameter Missing', 'Time Parameter Missing' = 'Time Parameter Missing', 'Time Parameter must be > 0' = 'Time Parameter must be > 0', 'Legs Parameter is Invalid' = 'Legs Parameter is Invalid', 'Length Parameter must be a positive integer' = 'Length Parameter must be a positive integer', 'Sounds Parameter is Invalid' = 'Sounds Parameter is Invalid', 'Play Failed -- Call not found' = 'Play Failed -- Call not found', 'Play Failed' = 'Play Failed' }

	export interface SendDigitsParameters {

		/**
		 * Unique identifier of the call to send DTMF to
		 * Required
		 */
		CallUUID: string;

		/**
		 * DTMF tones to be sent; each occurrence of `w` implies a 0.5 seconds delay whereas `W` will apply a whole second delay. To alter the tone duration (by default, 2000ms), append `@` and the length in milliseconds at the end of the string
		 * Required
		 */
		Digits: string;

		/** Call leg(s) to which DTMFs will be sent; `aleg` refers to the initial call leg, `bleg` refers to the bridged call leg, if applicable. */
		Leg?: PlayParametersLegs | null;
	}
	export interface SendDigitsParametersFormProperties {

		/**
		 * Unique identifier of the call to send DTMF to
		 * Required
		 */
		CallUUID: FormControl<string | null | undefined>,

		/**
		 * DTMF tones to be sent; each occurrence of `w` implies a 0.5 seconds delay whereas `W` will apply a whole second delay. To alter the tone duration (by default, 2000ms), append `@` and the length in milliseconds at the end of the string
		 * Required
		 */
		Digits: FormControl<string | null | undefined>,

		/** Call leg(s) to which DTMFs will be sent; `aleg` refers to the initial call leg, `bleg` refers to the bridged call leg, if applicable. */
		Leg: FormControl<PlayParametersLegs | null | undefined>,
	}
	export function CreateSendDigitsParametersFormGroup() {
		return new FormGroup<SendDigitsParametersFormProperties>({
			CallUUID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Digits: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Leg: new FormControl<PlayParametersLegs | null | undefined>(undefined),
		});

	}

	export interface SendDigitsResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: SendDigitsResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface SendDigitsResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<SendDigitsResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateSendDigitsResponseFormGroup() {
		return new FormGroup<SendDigitsResponseFormProperties>({
			Message: new FormControl<SendDigitsResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SendDigitsResponseMessage { 'SendDigits Executed' = 'SendDigits Executed', 'CallUUID Parameter Missing' = 'CallUUID Parameter Missing', 'Digits Parameter Missing' = 'Digits Parameter Missing', 'Invalid Leg Parameter' = 'Invalid Leg Parameter', 'SendDigits Failed -- Call not found' = 'SendDigits Failed -- Call not found', 'SendDigits Failed' = 'SendDigits Failed' }

	export interface SoundTouchParameters {

		/** Media stream to be altered, incoming or outgoing */
		AudioDirection?: SoundTouchParametersAudioDirection | null;

		/**
		 * Unique identifier of the call to send DTMF to
		 * Required
		 */
		CallUUID: string;

		/**
		 * Adjust the pitch
		 * Minimum: 0
		 */
		Pitch?: number | null;

		/**
		 * Adjust the pitch in octaves
		 * Minimum: -1
		 * Maximum: 1
		 */
		PitchOctaves?: number | null;

		/**
		 * Adjust the pitch in semitones
		 * Minimum: -14
		 * Maximum: 14
		 */
		PitchSemiTones?: number | null;

		/**
		 * Adjust the rate
		 * Minimum: 0
		 */
		Rate?: number | null;

		/**
		 * Adjust the tempo
		 * Minimum: 0
		 */
		Tempo?: number | null;
	}
	export interface SoundTouchParametersFormProperties {

		/** Media stream to be altered, incoming or outgoing */
		AudioDirection: FormControl<SoundTouchParametersAudioDirection | null | undefined>,

		/**
		 * Unique identifier of the call to send DTMF to
		 * Required
		 */
		CallUUID: FormControl<string | null | undefined>,

		/**
		 * Adjust the pitch
		 * Minimum: 0
		 */
		Pitch: FormControl<number | null | undefined>,

		/**
		 * Adjust the pitch in octaves
		 * Minimum: -1
		 * Maximum: 1
		 */
		PitchOctaves: FormControl<number | null | undefined>,

		/**
		 * Adjust the pitch in semitones
		 * Minimum: -14
		 * Maximum: 14
		 */
		PitchSemiTones: FormControl<number | null | undefined>,

		/**
		 * Adjust the rate
		 * Minimum: 0
		 */
		Rate: FormControl<number | null | undefined>,

		/**
		 * Adjust the tempo
		 * Minimum: 0
		 */
		Tempo: FormControl<number | null | undefined>,
	}
	export function CreateSoundTouchParametersFormGroup() {
		return new FormGroup<SoundTouchParametersFormProperties>({
			AudioDirection: new FormControl<SoundTouchParametersAudioDirection | null | undefined>(undefined),
			CallUUID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Pitch: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			PitchOctaves: new FormControl<number | null | undefined>(undefined, [Validators.min(-1), Validators.max(1)]),
			PitchSemiTones: new FormControl<number | null | undefined>(undefined, [Validators.min(-14), Validators.max(14)]),
			Rate: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			Tempo: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export enum SoundTouchParametersAudioDirection { in = 'in', out = 'out' }

	export interface SoundTouchResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: SoundTouchResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface SoundTouchResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<SoundTouchResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateSoundTouchResponseFormGroup() {
		return new FormGroup<SoundTouchResponseFormProperties>({
			Message: new FormControl<SoundTouchResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SoundTouchResponseMessage { 'SoundTouch Executed' = 'SoundTouch Executed', 'CallUUID Parameter Missing' = 'CallUUID Parameter Missing', 'AudioDirection Parameter Must be \'in\' or \'out\'' = 'AudioDirection Parameter Must be \'in\' or \'out\'', 'PitchSemiTones Parameter must be float' = 'PitchSemiTones Parameter must be float', 'PitchSemiTones Parameter must be between -14 and 14' = 'PitchSemiTones Parameter must be between -14 and 14', 'PitchOctaves Parameter must be float' = 'PitchOctaves Parameter must be float', 'PitchOctaves Parameter must be between -1 and 1' = 'PitchOctaves Parameter must be between -1 and 1', 'Pitch Parameter must be float' = 'Pitch Parameter must be float', 'Pitch Parameter must be > 0' = 'Pitch Parameter must be > 0', 'Rate Parameter must be float' = 'Rate Parameter must be float', 'Rate Parameter must be > 0' = 'Rate Parameter must be > 0', 'Tempo Parameter must be float' = 'Tempo Parameter must be float', 'Tempo Parameter must be > 0' = 'Tempo Parameter must be > 0', 'SoundTouch Failed -- Call not found' = 'SoundTouch Failed -- Call not found', 'SoundTouch Failed' = 'SoundTouch Failed' }

	export interface SoundTouchStopParameters {

		/**
		 * Unique identifier of the call
		 * Required
		 */
		CallUUID: string;
	}
	export interface SoundTouchStopParametersFormProperties {

		/**
		 * Unique identifier of the call
		 * Required
		 */
		CallUUID: FormControl<string | null | undefined>,
	}
	export function CreateSoundTouchStopParametersFormGroup() {
		return new FormGroup<SoundTouchStopParametersFormProperties>({
			CallUUID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SoundTouchStopResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: SoundTouchStopResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface SoundTouchStopResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<SoundTouchStopResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateSoundTouchStopResponseFormGroup() {
		return new FormGroup<SoundTouchStopResponseFormProperties>({
			Message: new FormControl<SoundTouchStopResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SoundTouchStopResponseMessage { 'SoundTouchStop Executed' = 'SoundTouchStop Executed', 'CallUUID Parameter Missing' = 'CallUUID Parameter Missing', 'SoundTouchStop Failed -- Call not found' = 'SoundTouchStop Failed -- Call not found', 'SoundTouchStop Failed' = 'SoundTouchStop Failed' }

	export interface TransferCallParameters {

		/**
		 * Unique identifier of the call
		 * Required
		 */
		CallUUID: string;

		/**
		 * Absolute URL which will return the updated RestXML flow
		 * Required
		 */
		Url: string;
	}
	export interface TransferCallParametersFormProperties {

		/**
		 * Unique identifier of the call
		 * Required
		 */
		CallUUID: FormControl<string | null | undefined>,

		/**
		 * Absolute URL which will return the updated RestXML flow
		 * Required
		 */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateTransferCallParametersFormGroup() {
		return new FormGroup<TransferCallParametersFormProperties>({
			CallUUID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransferCallResponse {

		/**
		 * Response message
		 * Required
		 */
		Message: TransferCallResponseMessage;

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: boolean;
	}
	export interface TransferCallResponseFormProperties {

		/**
		 * Response message
		 * Required
		 */
		Message: FormControl<TransferCallResponseMessage | null | undefined>,

		/**
		 * Whether the request was successful or not
		 * Required
		 */
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateTransferCallResponseFormGroup() {
		return new FormGroup<TransferCallResponseFormProperties>({
			Message: new FormControl<TransferCallResponseMessage | null | undefined>(undefined, [Validators.required]),
			Success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TransferCallResponseMessage { 'Transfer Call Executed' = 'Transfer Call Executed', 'CallUUID Parameter must be present' = 'CallUUID Parameter must be present', 'Url Parameter must be present' = 'Url Parameter must be present', 'Url is not Valid' = 'Url is not Valid', 'Transfer Call Failed -- Call not found' = 'Transfer Call Failed -- Call not found', 'Transfer Call Failed' = 'Transfer Call Failed' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * /v0.1/HangupAllCalls/
		 * Hangs up all established calls
		 * Post v0.1/HangupAllCalls/
		 * @return {HangupAllCallsResponse} Response
		 */
		CallPost(): Observable<HangupAllCallsResponse> {
			return this.http.post<HangupAllCallsResponse>(this.baseUri + 'v0.1/HangupAllCalls/', null, {});
		}
	}

}

