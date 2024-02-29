import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum Annotation_enum_answered_by { unknown_answered_by = 'unknown_answered_by', human = 'human', machine = 'machine' }

	export enum Annotation_enum_connectivity_issue { unknown_connectivity_issue = 'unknown_connectivity_issue', no_connectivity_issue = 'no_connectivity_issue', invalid_number = 'invalid_number', caller_id = 'caller_id', dropped_call = 'dropped_call', number_reachability = 'number_reachability' }

	export enum Annotation_enum_quality_issues { unknown_quality_issue = 'unknown_quality_issue', no_quality_issue = 'no_quality_issue', low_volume = 'low_volume', choppy_robotic = 'choppy_robotic', echo = 'echo', dtmf = 'dtmf', latency = 'latency', owa = 'owa', static_noise = 'static_noise' }

	export enum Call_summaries_enum_answered_by { unknown = 'unknown', machine_start = 'machine_start', machine_end_beep = 'machine_end_beep', machine_end_silence = 'machine_end_silence', machine_end_other = 'machine_end_other', human = 'human', fax = 'fax' }

	export enum Call_summaries_enum_call_direction { outbound_api = 'outbound_api', outbound_dial = 'outbound_dial', inbound = 'inbound', trunking_originating = 'trunking_originating', trunking_terminating = 'trunking_terminating' }

	export enum Call_summaries_enum_call_state { ringing = 'ringing', completed = 'completed', busy = 'busy', fail = 'fail', noanswer = 'noanswer', canceled = 'canceled', answered = 'answered', undialed = 'undialed' }

	export enum Call_summaries_enum_call_type { carrier = 'carrier', sip = 'sip', trunking = 'trunking', client = 'client' }

	export enum Call_summaries_enum_processing_state { complete = 'complete', partial = 'partial' }

	export enum Call_summaries_enum_processing_state_request { completed = 'completed', started = 'started', partial = 'partial', all = 'all' }

	export enum Call_summaries_enum_sort_by { start_time = 'start_time', end_time = 'end_time' }

	export enum Conference_enum_conference_end_reason { last_participant_left = 'last_participant_left', conference_ended_via_api = 'conference_ended_via_api', participant_with_end_conference_on_exit_left = 'participant_with_end_conference_on_exit_left', last_participant_kicked = 'last_participant_kicked', participant_with_end_conference_on_exit_kicked = 'participant_with_end_conference_on_exit_kicked' }

	export enum Conference_enum_conference_status { in_progress = 'in_progress', not_started = 'not_started', completed = 'completed', summary_timeout = 'summary_timeout' }

	export enum Conference_enum_processing_state { complete = 'complete', in_progress = 'in_progress', timeout = 'timeout' }

	export enum Conference_enum_region { us1 = 'us1', au1 = 'au1', br1 = 'br1', ie1 = 'ie1', jp1 = 'jp1', sg1 = 'sg1', de1 = 'de1' }

	export enum Conference_enum_tag { invalid_requested_region = 'invalid_requested_region', duplicate_identity = 'duplicate_identity', start_failure = 'start_failure', region_configuration_issues = 'region_configuration_issues', quality_warnings = 'quality_warnings', participant_behavior_issues = 'participant_behavior_issues', high_packet_loss = 'high_packet_loss', high_jitter = 'high_jitter', high_latency = 'high_latency', low_mos = 'low_mos', detected_silence = 'detected_silence' }

	export enum Conference_participant_enum_call_direction { inbound = 'inbound', outbound = 'outbound' }

	export enum Conference_participant_enum_call_status { answered = 'answered', completed = 'completed', busy = 'busy', fail = 'fail', noanswer = 'noanswer', ringing = 'ringing', canceled = 'canceled' }

	export enum Conference_participant_enum_call_type { carrier = 'carrier', client = 'client', sip = 'sip' }

	export enum Conference_participant_enum_jitter_buffer_size { large = 'large', small = 'small', medium = 'medium', off = 'off' }

	export enum Conference_participant_enum_processing_state { complete = 'complete', in_progress = 'in_progress', timeout = 'timeout' }

	export enum Conference_participant_enum_region { us1 = 'us1', us2 = 'us2', au1 = 'au1', br1 = 'br1', ie1 = 'ie1', jp1 = 'jp1', sg1 = 'sg1', de1 = 'de1' }

	export enum Event_enum_level { UNKNOWN = 'UNKNOWN', DEBUG = 'DEBUG', INFO = 'INFO', WARNING = 'WARNING', ERROR = 'ERROR' }

	export enum Event_enum_twilio_edge { unknown_edge = 'unknown_edge', carrier_edge = 'carrier_edge', sip_edge = 'sip_edge', sdk_edge = 'sdk_edge', client_edge = 'client_edge' }

	export interface Insightsv1account_settings {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** A boolean flag indicating whether Advanced Features for Voice Insights are enabled. */
		advanced_features?: boolean | null;

		/** The URL of this resource. */
		url?: string | null;

		/** A boolean flag indicating whether Voice Trace is enabled. */
		voice_trace?: boolean | null;
	}
	export interface Insightsv1account_settingsFormProperties {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** A boolean flag indicating whether Advanced Features for Voice Insights are enabled. */
		advanced_features: FormControl<boolean | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,

		/** A boolean flag indicating whether Voice Trace is enabled. */
		voice_trace: FormControl<boolean | null | undefined>,
	}
	export function CreateInsightsv1account_settingsFormGroup() {
		return new FormGroup<Insightsv1account_settingsFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			advanced_features: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			voice_trace: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Insightsv1call {
		links?: string | null;

		/**
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;
		url?: string | null;
	}
	export interface Insightsv1callFormProperties {
		links: FormControl<string | null | undefined>,

		/**
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateInsightsv1callFormGroup() {
		return new FormGroup<Insightsv1callFormProperties>({
			links: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CA[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Insightsv1callannotation {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;
		answered_by?: Annotation_enum_answered_by | null;

		/**
		 * Specifies the Call Score, if available. This is of type integer. Use a range of 1-5 to indicate the call experience score, with the following mapping as a reference for rating the call [5: Excellent, 4: Good, 3 : Fair, 2 : Poor, 1: Bad].
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		call_score?: number | null;

		/**
		 * The unique SID identifier of the Call.
		 * Min length: 34
		 * Max length: 34
		 */
		call_sid?: string | null;

		/** Specifies any comments pertaining to the call. Twilio does not treat this field as PII, so no PII should be included in comments. */
		comment?: string | null;
		connectivity_issue?: Annotation_enum_connectivity_issue | null;

		/** Incident or support ticket associated with this call. The `incident` property is of type string with a maximum character limit of 100. Twilio does not treat this field as PII, so no PII should be included in `incident`. */
		incident?: string | null;

		/** Specifies if the call had any subjective quality issues. Possible values are one or more of `no_quality_issue`, `low_volume`, `choppy_robotic`, `echo`, `dtmf`, `latency`, `owa`, or `static_noise`. */
		quality_issues?: Array<string>;

		/** Specifies if the call was a spam call. Use this to provide feedback on whether calls placed from your account were marked as spam, or if inbound calls received by your account were unwanted spam. Is of type Boolean: true, false. Use true if the call was a spam call. */
		spam?: boolean | null;
		url?: string | null;
	}
	export interface Insightsv1callannotationFormProperties {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,
		answered_by: FormControl<Annotation_enum_answered_by | null | undefined>,

		/**
		 * Specifies the Call Score, if available. This is of type integer. Use a range of 1-5 to indicate the call experience score, with the following mapping as a reference for rating the call [5: Excellent, 4: Good, 3 : Fair, 2 : Poor, 1: Bad].
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		call_score: FormControl<number | null | undefined>,

		/**
		 * The unique SID identifier of the Call.
		 * Min length: 34
		 * Max length: 34
		 */
		call_sid: FormControl<string | null | undefined>,

		/** Specifies any comments pertaining to the call. Twilio does not treat this field as PII, so no PII should be included in comments. */
		comment: FormControl<string | null | undefined>,
		connectivity_issue: FormControl<Annotation_enum_connectivity_issue | null | undefined>,

		/** Incident or support ticket associated with this call. The `incident` property is of type string with a maximum character limit of 100. Twilio does not treat this field as PII, so no PII should be included in `incident`. */
		incident: FormControl<string | null | undefined>,

		/** Specifies if the call was a spam call. Use this to provide feedback on whether calls placed from your account were marked as spam, or if inbound calls received by your account were unwanted spam. Is of type Boolean: true, false. Use true if the call was a spam call. */
		spam: FormControl<boolean | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateInsightsv1callannotationFormGroup() {
		return new FormGroup<Insightsv1callannotationFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			answered_by: new FormControl<Annotation_enum_answered_by | null | undefined>(undefined),
			call_score: new FormControl<number | null | undefined>(undefined),
			call_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CA[0-9a-fA-F]{32}$')]),
			comment: new FormControl<string | null | undefined>(undefined),
			connectivity_issue: new FormControl<Annotation_enum_connectivity_issue | null | undefined>(undefined),
			incident: new FormControl<string | null | undefined>(undefined),
			spam: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Insightsv1callevent {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The unique SID identifier of the Call.
		 * Min length: 34
		 * Max length: 34
		 */
		call_sid?: string | null;

		/** Represents the connection between Twilio and our immediate carrier partners. The events here describe the call lifecycle as reported by Twilio's carrier media gateways. */
		carrier_edge?: any;

		/** Represents the Twilio media gateway for Client calls. The events here describe the call lifecycle as reported by Twilio's Voice SDK media gateways. */
		client_edge?: any;
		edge?: Event_enum_twilio_edge | null;

		/** Event group. */
		group?: string | null;
		level?: Event_enum_level | null;

		/** Event name. */
		name?: string | null;

		/** Represents the Voice SDK running locally in the browser or in the Android/iOS application. The events here are emitted by the Voice SDK in response to certain call progress events, network changes, or call quality conditions. */
		sdk_edge?: any;

		/** Represents the Twilio media gateway for SIP interface and SIP trunking calls. The events here describe the call lifecycle as reported by Twilio's public media gateways. */
		sip_edge?: any;

		/** Event time. */
		timestamp?: string | null;
	}
	export interface Insightsv1calleventFormProperties {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The unique SID identifier of the Call.
		 * Min length: 34
		 * Max length: 34
		 */
		call_sid: FormControl<string | null | undefined>,

		/** Represents the connection between Twilio and our immediate carrier partners. The events here describe the call lifecycle as reported by Twilio's carrier media gateways. */
		carrier_edge: FormControl<any | null | undefined>,

		/** Represents the Twilio media gateway for Client calls. The events here describe the call lifecycle as reported by Twilio's Voice SDK media gateways. */
		client_edge: FormControl<any | null | undefined>,
		edge: FormControl<Event_enum_twilio_edge | null | undefined>,

		/** Event group. */
		group: FormControl<string | null | undefined>,
		level: FormControl<Event_enum_level | null | undefined>,

		/** Event name. */
		name: FormControl<string | null | undefined>,

		/** Represents the Voice SDK running locally in the browser or in the Android/iOS application. The events here are emitted by the Voice SDK in response to certain call progress events, network changes, or call quality conditions. */
		sdk_edge: FormControl<any | null | undefined>,

		/** Represents the Twilio media gateway for SIP interface and SIP trunking calls. The events here describe the call lifecycle as reported by Twilio's public media gateways. */
		sip_edge: FormControl<any | null | undefined>,

		/** Event time. */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateInsightsv1calleventFormGroup() {
		return new FormGroup<Insightsv1calleventFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			call_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CA[0-9a-fA-F]{32}$')]),
			carrier_edge: new FormControl<any | null | undefined>(undefined),
			client_edge: new FormControl<any | null | undefined>(undefined),
			edge: new FormControl<Event_enum_twilio_edge | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<Event_enum_level | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sdk_edge: new FormControl<any | null | undefined>(undefined),
			sip_edge: new FormControl<any | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Insightsv1callmetric {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The unique SID identifier of the Call.
		 * Min length: 34
		 * Max length: 34
		 */
		call_sid?: string | null;

		/** Contains metrics and properties for the Twilio media gateway of a PSTN call. */
		carrier_edge?: any;

		/** Contains metrics and properties for the Twilio media gateway of a Client call. */
		client_edge?: any;
		direction?: Insightsv1callmetricDirection | null;
		edge?: Event_enum_twilio_edge | null;

		/** Contains metrics and properties for the SDK sensor library for Client calls. */
		sdk_edge?: any;

		/** Contains metrics and properties for the Twilio media gateway of a SIP Interface or Trunking call. */
		sip_edge?: any;

		/** Timestamp of metric sample. Samples are taken every 10 seconds and contain the metrics for the previous 10 seconds. */
		timestamp?: string | null;
	}
	export interface Insightsv1callmetricFormProperties {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The unique SID identifier of the Call.
		 * Min length: 34
		 * Max length: 34
		 */
		call_sid: FormControl<string | null | undefined>,

		/** Contains metrics and properties for the Twilio media gateway of a PSTN call. */
		carrier_edge: FormControl<any | null | undefined>,

		/** Contains metrics and properties for the Twilio media gateway of a Client call. */
		client_edge: FormControl<any | null | undefined>,
		direction: FormControl<Insightsv1callmetricDirection | null | undefined>,
		edge: FormControl<Event_enum_twilio_edge | null | undefined>,

		/** Contains metrics and properties for the SDK sensor library for Client calls. */
		sdk_edge: FormControl<any | null | undefined>,

		/** Contains metrics and properties for the Twilio media gateway of a SIP Interface or Trunking call. */
		sip_edge: FormControl<any | null | undefined>,

		/** Timestamp of metric sample. Samples are taken every 10 seconds and contain the metrics for the previous 10 seconds. */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateInsightsv1callmetricFormGroup() {
		return new FormGroup<Insightsv1callmetricFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			call_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CA[0-9a-fA-F]{32}$')]),
			carrier_edge: new FormControl<any | null | undefined>(undefined),
			client_edge: new FormControl<any | null | undefined>(undefined),
			direction: new FormControl<Insightsv1callmetricDirection | null | undefined>(undefined),
			edge: new FormControl<Event_enum_twilio_edge | null | undefined>(undefined),
			sdk_edge: new FormControl<any | null | undefined>(undefined),
			sip_edge: new FormControl<any | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Insightsv1callmetricDirection { unknown = 'unknown', inbound = 'inbound', outbound = 'outbound', both = 'both' }

	export interface Insightsv1callsummary {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** Programmatically labeled annotations for the Call. Developers can update the Call Summary records with Annotation during or after a Call. Annotations can be updated as long as the Call Summary record is addressable via the API. */
		annotation?: any;
		answered_by?: Call_summaries_enum_answered_by | null;

		/** Attributes capturing call-flow-specific details. */
		attributes?: any;

		/**
		 * The unique SID identifier of the Call.
		 * Min length: 34
		 * Max length: 34
		 */
		call_sid?: string | null;
		call_state?: Call_summaries_enum_call_state | null;
		call_type?: Call_summaries_enum_call_type | null;

		/** Contains metrics and properties for the Twilio media gateway of a PSTN call. */
		carrier_edge?: any;

		/** Contains metrics and properties for the Twilio media gateway of a Client call. */
		client_edge?: any;

		/**
		 * Duration between when the call was answered and when it ended
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		connect_duration?: number | null;

		/** The time at which the Call was created, given in ISO 8601 format. Can be different from `start_time` in the event of queueing due to CPS */
		created_time?: Date | null;

		/**
		 * Duration between when the call was initiated and the call was ended
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration?: number | null;

		/** The time at which the Call was ended, given in ISO 8601 format. */
		end_time?: Date | null;

		/** The calling party. */
		from?: any;
		processing_state?: Call_summaries_enum_processing_state | null;

		/** Contains edge-agnostic call-level details. */
		properties?: any;

		/** Contains metrics and properties for the SDK sensor library for Client calls. */
		sdk_edge?: any;

		/** Contains metrics and properties for the Twilio media gateway of a SIP Interface or Trunking call. */
		sip_edge?: any;

		/** The time at which the Call was started, given in ISO 8601 format. */
		start_time?: Date | null;

		/** Tags applied to calls by Voice Insights analysis indicating a condition that could result in subjective degradation of the call quality. */
		tags?: Array<string>;

		/** The called party. */
		to?: any;

		/** Contains trusted communications details including Branded Call and verified caller ID. */
		trust?: any;

		/** The URL of this resource. */
		url?: string | null;
	}
	export interface Insightsv1callsummaryFormProperties {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** Programmatically labeled annotations for the Call. Developers can update the Call Summary records with Annotation during or after a Call. Annotations can be updated as long as the Call Summary record is addressable via the API. */
		annotation: FormControl<any | null | undefined>,
		answered_by: FormControl<Call_summaries_enum_answered_by | null | undefined>,

		/** Attributes capturing call-flow-specific details. */
		attributes: FormControl<any | null | undefined>,

		/**
		 * The unique SID identifier of the Call.
		 * Min length: 34
		 * Max length: 34
		 */
		call_sid: FormControl<string | null | undefined>,
		call_state: FormControl<Call_summaries_enum_call_state | null | undefined>,
		call_type: FormControl<Call_summaries_enum_call_type | null | undefined>,

		/** Contains metrics and properties for the Twilio media gateway of a PSTN call. */
		carrier_edge: FormControl<any | null | undefined>,

		/** Contains metrics and properties for the Twilio media gateway of a Client call. */
		client_edge: FormControl<any | null | undefined>,

		/**
		 * Duration between when the call was answered and when it ended
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		connect_duration: FormControl<number | null | undefined>,

		/** The time at which the Call was created, given in ISO 8601 format. Can be different from `start_time` in the event of queueing due to CPS */
		created_time: FormControl<Date | null | undefined>,

		/**
		 * Duration between when the call was initiated and the call was ended
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration: FormControl<number | null | undefined>,

		/** The time at which the Call was ended, given in ISO 8601 format. */
		end_time: FormControl<Date | null | undefined>,

		/** The calling party. */
		from: FormControl<any | null | undefined>,
		processing_state: FormControl<Call_summaries_enum_processing_state | null | undefined>,

		/** Contains edge-agnostic call-level details. */
		properties: FormControl<any | null | undefined>,

		/** Contains metrics and properties for the SDK sensor library for Client calls. */
		sdk_edge: FormControl<any | null | undefined>,

		/** Contains metrics and properties for the Twilio media gateway of a SIP Interface or Trunking call. */
		sip_edge: FormControl<any | null | undefined>,

		/** The time at which the Call was started, given in ISO 8601 format. */
		start_time: FormControl<Date | null | undefined>,

		/** The called party. */
		to: FormControl<any | null | undefined>,

		/** Contains trusted communications details including Branded Call and verified caller ID. */
		trust: FormControl<any | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateInsightsv1callsummaryFormGroup() {
		return new FormGroup<Insightsv1callsummaryFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			annotation: new FormControl<any | null | undefined>(undefined),
			answered_by: new FormControl<Call_summaries_enum_answered_by | null | undefined>(undefined),
			attributes: new FormControl<any | null | undefined>(undefined),
			call_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CA[0-9a-fA-F]{32}$')]),
			call_state: new FormControl<Call_summaries_enum_call_state | null | undefined>(undefined),
			call_type: new FormControl<Call_summaries_enum_call_type | null | undefined>(undefined),
			carrier_edge: new FormControl<any | null | undefined>(undefined),
			client_edge: new FormControl<any | null | undefined>(undefined),
			connect_duration: new FormControl<number | null | undefined>(undefined),
			created_time: new FormControl<Date | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			end_time: new FormControl<Date | null | undefined>(undefined),
			from: new FormControl<any | null | undefined>(undefined),
			processing_state: new FormControl<Call_summaries_enum_processing_state | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
			sdk_edge: new FormControl<any | null | undefined>(undefined),
			sip_edge: new FormControl<any | null | undefined>(undefined),
			start_time: new FormControl<Date | null | undefined>(undefined),
			to: new FormControl<any | null | undefined>(undefined),
			trust: new FormControl<any | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Insightsv1call_summaries {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;
		annotation?: any;
		answered_by?: Call_summaries_enum_answered_by | null;

		/** Attributes capturing call-flow-specific details. */
		attributes?: any;

		/**
		 * The unique SID identifier of the Call.
		 * Min length: 34
		 * Max length: 34
		 */
		call_sid?: string | null;
		call_state?: Call_summaries_enum_call_state | null;
		call_type?: Call_summaries_enum_call_type | null;

		/** Contains metrics and properties for the Twilio media gateway of a PSTN call. */
		carrier_edge?: any;

		/** Contains metrics and properties for the Twilio media gateway of a Client call. */
		client_edge?: any;

		/**
		 * Duration between when the call was answered and when it ended
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		connect_duration?: number | null;

		/** The time at which the Call was created, given in ISO 8601 format. Can be different from `start_time` in the event of queueing due to CPS */
		created_time?: Date | null;

		/**
		 * Duration between when the call was initiated and the call was ended
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration?: number | null;

		/** The time at which the Call was ended, given in ISO 8601 format. */
		end_time?: Date | null;

		/** The calling party. */
		from?: any;
		processing_state?: Call_summaries_enum_processing_state | null;

		/** Contains edge-agnostic call-level details. */
		properties?: any;

		/** Contains metrics and properties for the SDK sensor library for Client calls. */
		sdk_edge?: any;

		/** Contains metrics and properties for the Twilio media gateway of a SIP Interface or Trunking call. */
		sip_edge?: any;

		/** The time at which the Call was started, given in ISO 8601 format. */
		start_time?: Date | null;

		/** Tags applied to calls by Voice Insights analysis indicating a condition that could result in subjective degradation of the call quality. */
		tags?: Array<string>;

		/** The called party. */
		to?: any;

		/** Contains trusted communications details including Branded Call and verified caller ID. */
		trust?: any;

		/** The URL of this resource. */
		url?: string | null;
	}
	export interface Insightsv1call_summariesFormProperties {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,
		annotation: FormControl<any | null | undefined>,
		answered_by: FormControl<Call_summaries_enum_answered_by | null | undefined>,

		/** Attributes capturing call-flow-specific details. */
		attributes: FormControl<any | null | undefined>,

		/**
		 * The unique SID identifier of the Call.
		 * Min length: 34
		 * Max length: 34
		 */
		call_sid: FormControl<string | null | undefined>,
		call_state: FormControl<Call_summaries_enum_call_state | null | undefined>,
		call_type: FormControl<Call_summaries_enum_call_type | null | undefined>,

		/** Contains metrics and properties for the Twilio media gateway of a PSTN call. */
		carrier_edge: FormControl<any | null | undefined>,

		/** Contains metrics and properties for the Twilio media gateway of a Client call. */
		client_edge: FormControl<any | null | undefined>,

		/**
		 * Duration between when the call was answered and when it ended
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		connect_duration: FormControl<number | null | undefined>,

		/** The time at which the Call was created, given in ISO 8601 format. Can be different from `start_time` in the event of queueing due to CPS */
		created_time: FormControl<Date | null | undefined>,

		/**
		 * Duration between when the call was initiated and the call was ended
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration: FormControl<number | null | undefined>,

		/** The time at which the Call was ended, given in ISO 8601 format. */
		end_time: FormControl<Date | null | undefined>,

		/** The calling party. */
		from: FormControl<any | null | undefined>,
		processing_state: FormControl<Call_summaries_enum_processing_state | null | undefined>,

		/** Contains edge-agnostic call-level details. */
		properties: FormControl<any | null | undefined>,

		/** Contains metrics and properties for the SDK sensor library for Client calls. */
		sdk_edge: FormControl<any | null | undefined>,

		/** Contains metrics and properties for the Twilio media gateway of a SIP Interface or Trunking call. */
		sip_edge: FormControl<any | null | undefined>,

		/** The time at which the Call was started, given in ISO 8601 format. */
		start_time: FormControl<Date | null | undefined>,

		/** The called party. */
		to: FormControl<any | null | undefined>,

		/** Contains trusted communications details including Branded Call and verified caller ID. */
		trust: FormControl<any | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateInsightsv1call_summariesFormGroup() {
		return new FormGroup<Insightsv1call_summariesFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			annotation: new FormControl<any | null | undefined>(undefined),
			answered_by: new FormControl<Call_summaries_enum_answered_by | null | undefined>(undefined),
			attributes: new FormControl<any | null | undefined>(undefined),
			call_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CA[0-9a-fA-F]{32}$')]),
			call_state: new FormControl<Call_summaries_enum_call_state | null | undefined>(undefined),
			call_type: new FormControl<Call_summaries_enum_call_type | null | undefined>(undefined),
			carrier_edge: new FormControl<any | null | undefined>(undefined),
			client_edge: new FormControl<any | null | undefined>(undefined),
			connect_duration: new FormControl<number | null | undefined>(undefined),
			created_time: new FormControl<Date | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			end_time: new FormControl<Date | null | undefined>(undefined),
			from: new FormControl<any | null | undefined>(undefined),
			processing_state: new FormControl<Call_summaries_enum_processing_state | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
			sdk_edge: new FormControl<any | null | undefined>(undefined),
			sip_edge: new FormControl<any | null | undefined>(undefined),
			start_time: new FormControl<Date | null | undefined>(undefined),
			to: new FormControl<any | null | undefined>(undefined),
			trust: new FormControl<any | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Insightsv1conference {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The unique SID identifier of the Conference.
		 * Min length: 34
		 * Max length: 34
		 */
		conference_sid?: string | null;

		/**
		 * Duration of the between conference start event and conference end event in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		connect_duration_seconds?: number | null;

		/** Conference creation date and time in ISO 8601 format. */
		create_time?: Date | null;

		/** Potential issues detected by Twilio during the conference. */
		detected_issues?: any;

		/**
		 * Conference duration in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration_seconds?: number | null;
		end_reason?: Conference_enum_conference_end_reason | null;

		/** Conference end date and time in ISO 8601 format. */
		end_time?: Date | null;

		/**
		 * Call SID of the participant whose actions ended the conference.
		 * Min length: 34
		 * Max length: 34
		 */
		ended_by?: string | null;

		/** Custom label for the conference resource, up to 64 characters. */
		friendly_name?: string | null;

		/** Contains a dictionary of URL links to nested resources of this Conference. */
		links?: string | null;

		/**
		 * Actual maximum number of concurrent participants in the conference.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_concurrent_participants?: number | null;

		/**
		 * Maximum number of concurrent participants as specified by the configuration.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_participants?: number | null;
		mixer_region?: Conference_enum_region | null;
		mixer_region_requested?: Conference_enum_region | null;
		processing_state?: Conference_enum_processing_state | null;

		/** Boolean. Indicates whether recording was enabled at the conference mixer. */
		recording_enabled?: boolean | null;

		/** Timestamp in ISO 8601 format when the conference started. Conferences do not start until at least two participants join, at least one of whom has startConferenceOnEnter=true. */
		start_time?: Date | null;
		status?: Conference_enum_conference_status | null;

		/** Object. Contains details about conference tags including severity. */
		tag_info?: any;

		/** Tags for detected conference conditions and participant behaviors which may be of interest. */
		tags?: Array<Conference_enum_tag>;

		/**
		 * Unique conference participants based on caller ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unique_participants?: number | null;

		/** The URL of this resource. */
		url?: string | null;
	}
	export interface Insightsv1conferenceFormProperties {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The unique SID identifier of the Conference.
		 * Min length: 34
		 * Max length: 34
		 */
		conference_sid: FormControl<string | null | undefined>,

		/**
		 * Duration of the between conference start event and conference end event in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		connect_duration_seconds: FormControl<number | null | undefined>,

		/** Conference creation date and time in ISO 8601 format. */
		create_time: FormControl<Date | null | undefined>,

		/** Potential issues detected by Twilio during the conference. */
		detected_issues: FormControl<any | null | undefined>,

		/**
		 * Conference duration in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration_seconds: FormControl<number | null | undefined>,
		end_reason: FormControl<Conference_enum_conference_end_reason | null | undefined>,

		/** Conference end date and time in ISO 8601 format. */
		end_time: FormControl<Date | null | undefined>,

		/**
		 * Call SID of the participant whose actions ended the conference.
		 * Min length: 34
		 * Max length: 34
		 */
		ended_by: FormControl<string | null | undefined>,

		/** Custom label for the conference resource, up to 64 characters. */
		friendly_name: FormControl<string | null | undefined>,

		/** Contains a dictionary of URL links to nested resources of this Conference. */
		links: FormControl<string | null | undefined>,

		/**
		 * Actual maximum number of concurrent participants in the conference.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_concurrent_participants: FormControl<number | null | undefined>,

		/**
		 * Maximum number of concurrent participants as specified by the configuration.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_participants: FormControl<number | null | undefined>,
		mixer_region: FormControl<Conference_enum_region | null | undefined>,
		mixer_region_requested: FormControl<Conference_enum_region | null | undefined>,
		processing_state: FormControl<Conference_enum_processing_state | null | undefined>,

		/** Boolean. Indicates whether recording was enabled at the conference mixer. */
		recording_enabled: FormControl<boolean | null | undefined>,

		/** Timestamp in ISO 8601 format when the conference started. Conferences do not start until at least two participants join, at least one of whom has startConferenceOnEnter=true. */
		start_time: FormControl<Date | null | undefined>,
		status: FormControl<Conference_enum_conference_status | null | undefined>,

		/** Object. Contains details about conference tags including severity. */
		tag_info: FormControl<any | null | undefined>,

		/**
		 * Unique conference participants based on caller ID.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unique_participants: FormControl<number | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateInsightsv1conferenceFormGroup() {
		return new FormGroup<Insightsv1conferenceFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			conference_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CF[0-9a-fA-F]{32}$')]),
			connect_duration_seconds: new FormControl<number | null | undefined>(undefined),
			create_time: new FormControl<Date | null | undefined>(undefined),
			detected_issues: new FormControl<any | null | undefined>(undefined),
			duration_seconds: new FormControl<number | null | undefined>(undefined),
			end_reason: new FormControl<Conference_enum_conference_end_reason | null | undefined>(undefined),
			end_time: new FormControl<Date | null | undefined>(undefined),
			ended_by: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CA[0-9a-fA-F]{32}$')]),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			max_concurrent_participants: new FormControl<number | null | undefined>(undefined),
			max_participants: new FormControl<number | null | undefined>(undefined),
			mixer_region: new FormControl<Conference_enum_region | null | undefined>(undefined),
			mixer_region_requested: new FormControl<Conference_enum_region | null | undefined>(undefined),
			processing_state: new FormControl<Conference_enum_processing_state | null | undefined>(undefined),
			recording_enabled: new FormControl<boolean | null | undefined>(undefined),
			start_time: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<Conference_enum_conference_status | null | undefined>(undefined),
			tag_info: new FormControl<any | null | undefined>(undefined),
			unique_participants: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Insightsv1conferenceconference_participant {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;
		call_direction?: Conference_participant_enum_call_direction | null;

		/**
		 * Unique SID identifier of the call that generated the Participant resource.
		 * Min length: 34
		 * Max length: 34
		 */
		call_sid?: string | null;
		call_status?: Conference_participant_enum_call_status | null;
		call_type?: Conference_participant_enum_call_type | null;

		/** Call SIDs coached by this participant. */
		coached_participants?: Array<string>;
		conference_region?: Conference_participant_enum_region | null;

		/**
		 * The unique SID identifier of the Conference.
		 * Min length: 34
		 * Max length: 34
		 */
		conference_sid?: string | null;

		/** ISO alpha-2 country code of the participant based on caller ID or called number. */
		country_code?: string | null;

		/**
		 * Participant durations in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration_seconds?: number | null;

		/** Object containing information of actions taken by participants. Contains a dictionary of URL links to nested resources of this Conference Participant. */
		events?: any;

		/** Caller ID of the calling party. */
		from?: string | null;

		/** Boolean. Indicated whether participant was a coach. */
		is_coach?: boolean | null;

		/** Boolean. Indicates whether participant had startConferenceOnEnter=true or endConferenceOnExit=true. */
		is_moderator?: boolean | null;
		jitter_buffer_size?: Conference_participant_enum_jitter_buffer_size | null;

		/** ISO 8601 timestamp of participant join event. */
		join_time?: Date | null;

		/** The user-specified label of this participant. */
		label?: string | null;

		/** ISO 8601 timestamp of participant leave event. */
		leave_time?: Date | null;

		/** Object. Contains participant call quality metrics. */
		metrics?: any;

		/**
		 * Add Participant API only. Estimated time in queue at call creation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		outbound_queue_length?: number | null;

		/**
		 * Add Participant API only. Actual time in queue in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		outbound_time_in_queue?: number | null;
		participant_region?: Conference_participant_enum_region | null;

		/**
		 * SID for this participant.
		 * Min length: 34
		 * Max length: 34
		 */
		participant_sid?: string | null;
		processing_state?: Conference_enum_processing_state | null;

		/** Participant properties and metadata. */
		properties?: any;

		/** Called party. */
		to?: string | null;

		/** The URL of this resource. */
		url?: string | null;
	}
	export interface Insightsv1conferenceconference_participantFormProperties {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,
		call_direction: FormControl<Conference_participant_enum_call_direction | null | undefined>,

		/**
		 * Unique SID identifier of the call that generated the Participant resource.
		 * Min length: 34
		 * Max length: 34
		 */
		call_sid: FormControl<string | null | undefined>,
		call_status: FormControl<Conference_participant_enum_call_status | null | undefined>,
		call_type: FormControl<Conference_participant_enum_call_type | null | undefined>,
		conference_region: FormControl<Conference_participant_enum_region | null | undefined>,

		/**
		 * The unique SID identifier of the Conference.
		 * Min length: 34
		 * Max length: 34
		 */
		conference_sid: FormControl<string | null | undefined>,

		/** ISO alpha-2 country code of the participant based on caller ID or called number. */
		country_code: FormControl<string | null | undefined>,

		/**
		 * Participant durations in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration_seconds: FormControl<number | null | undefined>,

		/** Object containing information of actions taken by participants. Contains a dictionary of URL links to nested resources of this Conference Participant. */
		events: FormControl<any | null | undefined>,

		/** Caller ID of the calling party. */
		from: FormControl<string | null | undefined>,

		/** Boolean. Indicated whether participant was a coach. */
		is_coach: FormControl<boolean | null | undefined>,

		/** Boolean. Indicates whether participant had startConferenceOnEnter=true or endConferenceOnExit=true. */
		is_moderator: FormControl<boolean | null | undefined>,
		jitter_buffer_size: FormControl<Conference_participant_enum_jitter_buffer_size | null | undefined>,

		/** ISO 8601 timestamp of participant join event. */
		join_time: FormControl<Date | null | undefined>,

		/** The user-specified label of this participant. */
		label: FormControl<string | null | undefined>,

		/** ISO 8601 timestamp of participant leave event. */
		leave_time: FormControl<Date | null | undefined>,

		/** Object. Contains participant call quality metrics. */
		metrics: FormControl<any | null | undefined>,

		/**
		 * Add Participant API only. Estimated time in queue at call creation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		outbound_queue_length: FormControl<number | null | undefined>,

		/**
		 * Add Participant API only. Actual time in queue in seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		outbound_time_in_queue: FormControl<number | null | undefined>,
		participant_region: FormControl<Conference_participant_enum_region | null | undefined>,

		/**
		 * SID for this participant.
		 * Min length: 34
		 * Max length: 34
		 */
		participant_sid: FormControl<string | null | undefined>,
		processing_state: FormControl<Conference_enum_processing_state | null | undefined>,

		/** Participant properties and metadata. */
		properties: FormControl<any | null | undefined>,

		/** Called party. */
		to: FormControl<string | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateInsightsv1conferenceconference_participantFormGroup() {
		return new FormGroup<Insightsv1conferenceconference_participantFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			call_direction: new FormControl<Conference_participant_enum_call_direction | null | undefined>(undefined),
			call_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CA[0-9a-fA-F]{32}$')]),
			call_status: new FormControl<Conference_participant_enum_call_status | null | undefined>(undefined),
			call_type: new FormControl<Conference_participant_enum_call_type | null | undefined>(undefined),
			conference_region: new FormControl<Conference_participant_enum_region | null | undefined>(undefined),
			conference_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CF[0-9a-fA-F]{32}$')]),
			country_code: new FormControl<string | null | undefined>(undefined),
			duration_seconds: new FormControl<number | null | undefined>(undefined),
			events: new FormControl<any | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			is_coach: new FormControl<boolean | null | undefined>(undefined),
			is_moderator: new FormControl<boolean | null | undefined>(undefined),
			jitter_buffer_size: new FormControl<Conference_participant_enum_jitter_buffer_size | null | undefined>(undefined),
			join_time: new FormControl<Date | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			leave_time: new FormControl<Date | null | undefined>(undefined),
			metrics: new FormControl<any | null | undefined>(undefined),
			outbound_queue_length: new FormControl<number | null | undefined>(undefined),
			outbound_time_in_queue: new FormControl<number | null | undefined>(undefined),
			participant_region: new FormControl<Conference_participant_enum_region | null | undefined>(undefined),
			participant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^CP[0-9a-fA-F]{32}$')]),
			processing_state: new FormControl<Conference_enum_processing_state | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Insightsv1video_room_summary {

		/**
		 * Account SID associated with this room.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** Codecs used by participants in the room. Can be `VP8`, `H264`, or `VP9`. */
		codecs?: Array<Video_room_summary_enum_codec>;

		/**
		 * Actual number of concurrent participants.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		concurrent_participants?: number | null;

		/** Creation time of the room. */
		create_time?: Date | null;
		created_method?: Insightsv1video_room_summaryCreated_method | null;

		/**
		 * Total room duration from create time to end time.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		duration_sec?: string | null;
		edge_location?: Insightsv1video_room_summaryEdge_location | null;
		end_reason?: Insightsv1video_room_summaryEnd_reason | null;

		/** End time for the room. */
		end_time?: Date | null;

		/** Room subresources. */
		links?: string | null;

		/**
		 * Maximum number of participants allowed in the room at the same time allowed by the application settings.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_concurrent_participants?: number | null;

		/**
		 * Max number of total participants allowed by the application settings.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_participants?: number | null;
		media_region?: Insightsv1video_room_summaryMedia_region | null;
		processing_state?: Insightsv1video_room_summaryProcessing_state | null;

		/** Boolean indicating if recording is enabled for the room. */
		recording_enabled?: boolean | null;

		/** Room friendly name. */
		room_name?: string | null;

		/**
		 * Unique identifier for the room.
		 * Min length: 34
		 * Max length: 34
		 */
		room_sid?: string | null;
		room_status?: Insightsv1video_room_summaryRoom_status | null;
		room_type?: Insightsv1video_room_summaryRoom_type | null;

		/** Webhook provided for status callbacks. */
		status_callback?: string | null;

		/** HTTP method provided for status callback URL. */
		status_callback_method?: Insightsv1video_room_summaryStatus_callback_method | null;

		/**
		 * Combined amount of participant time in the room.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		total_participant_duration_sec?: string | null;

		/**
		 * Combined amount of recorded seconds for participants in the room.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		total_recording_duration_sec?: string | null;

		/**
		 * Unique number of participant identities.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unique_participant_identities?: number | null;

		/**
		 * Number of participants. May include duplicate identities for participants who left and rejoined.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unique_participants?: number | null;

		/** URL for the room resource. */
		url?: string | null;
	}
	export interface Insightsv1video_room_summaryFormProperties {

		/**
		 * Account SID associated with this room.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * Actual number of concurrent participants.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		concurrent_participants: FormControl<number | null | undefined>,

		/** Creation time of the room. */
		create_time: FormControl<Date | null | undefined>,
		created_method: FormControl<Insightsv1video_room_summaryCreated_method | null | undefined>,

		/**
		 * Total room duration from create time to end time.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		duration_sec: FormControl<string | null | undefined>,
		edge_location: FormControl<Insightsv1video_room_summaryEdge_location | null | undefined>,
		end_reason: FormControl<Insightsv1video_room_summaryEnd_reason | null | undefined>,

		/** End time for the room. */
		end_time: FormControl<Date | null | undefined>,

		/** Room subresources. */
		links: FormControl<string | null | undefined>,

		/**
		 * Maximum number of participants allowed in the room at the same time allowed by the application settings.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_concurrent_participants: FormControl<number | null | undefined>,

		/**
		 * Max number of total participants allowed by the application settings.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_participants: FormControl<number | null | undefined>,
		media_region: FormControl<Insightsv1video_room_summaryMedia_region | null | undefined>,
		processing_state: FormControl<Insightsv1video_room_summaryProcessing_state | null | undefined>,

		/** Boolean indicating if recording is enabled for the room. */
		recording_enabled: FormControl<boolean | null | undefined>,

		/** Room friendly name. */
		room_name: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the room.
		 * Min length: 34
		 * Max length: 34
		 */
		room_sid: FormControl<string | null | undefined>,
		room_status: FormControl<Insightsv1video_room_summaryRoom_status | null | undefined>,
		room_type: FormControl<Insightsv1video_room_summaryRoom_type | null | undefined>,

		/** Webhook provided for status callbacks. */
		status_callback: FormControl<string | null | undefined>,

		/** HTTP method provided for status callback URL. */
		status_callback_method: FormControl<Insightsv1video_room_summaryStatus_callback_method | null | undefined>,

		/**
		 * Combined amount of participant time in the room.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		total_participant_duration_sec: FormControl<string | null | undefined>,

		/**
		 * Combined amount of recorded seconds for participants in the room.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		total_recording_duration_sec: FormControl<string | null | undefined>,

		/**
		 * Unique number of participant identities.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unique_participant_identities: FormControl<number | null | undefined>,

		/**
		 * Number of participants. May include duplicate identities for participants who left and rejoined.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unique_participants: FormControl<number | null | undefined>,

		/** URL for the room resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateInsightsv1video_room_summaryFormGroup() {
		return new FormGroup<Insightsv1video_room_summaryFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			concurrent_participants: new FormControl<number | null | undefined>(undefined),
			create_time: new FormControl<Date | null | undefined>(undefined),
			created_method: new FormControl<Insightsv1video_room_summaryCreated_method | null | undefined>(undefined),
			duration_sec: new FormControl<string | null | undefined>(undefined),
			edge_location: new FormControl<Insightsv1video_room_summaryEdge_location | null | undefined>(undefined),
			end_reason: new FormControl<Insightsv1video_room_summaryEnd_reason | null | undefined>(undefined),
			end_time: new FormControl<Date | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			max_concurrent_participants: new FormControl<number | null | undefined>(undefined),
			max_participants: new FormControl<number | null | undefined>(undefined),
			media_region: new FormControl<Insightsv1video_room_summaryMedia_region | null | undefined>(undefined),
			processing_state: new FormControl<Insightsv1video_room_summaryProcessing_state | null | undefined>(undefined),
			recording_enabled: new FormControl<boolean | null | undefined>(undefined),
			room_name: new FormControl<string | null | undefined>(undefined),
			room_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^RM[0-9a-fA-F]{32}$')]),
			room_status: new FormControl<Insightsv1video_room_summaryRoom_status | null | undefined>(undefined),
			room_type: new FormControl<Insightsv1video_room_summaryRoom_type | null | undefined>(undefined),
			status_callback: new FormControl<string | null | undefined>(undefined),
			status_callback_method: new FormControl<Insightsv1video_room_summaryStatus_callback_method | null | undefined>(undefined),
			total_participant_duration_sec: new FormControl<string | null | undefined>(undefined),
			total_recording_duration_sec: new FormControl<string | null | undefined>(undefined),
			unique_participant_identities: new FormControl<number | null | undefined>(undefined),
			unique_participants: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Video_room_summary_enum_codec { VP8 = 'VP8', H264 = 'H264', VP9 = 'VP9' }

	export enum Insightsv1video_room_summaryCreated_method { sdk = 'sdk', ad_hoc = 'ad_hoc', api = 'api' }

	export enum Insightsv1video_room_summaryEdge_location { ashburn = 'ashburn', dublin = 'dublin', frankfurt = 'frankfurt', singapore = 'singapore', sydney = 'sydney', sao_paulo = 'sao_paulo', roaming = 'roaming', umatilla = 'umatilla', tokyo = 'tokyo' }

	export enum Insightsv1video_room_summaryEnd_reason { room_ended_via_api = 'room_ended_via_api', timeout = 'timeout' }

	export enum Insightsv1video_room_summaryMedia_region { us1 = 'us1', us2 = 'us2', au1 = 'au1', br1 = 'br1', ie1 = 'ie1', jp1 = 'jp1', sg1 = 'sg1', in1 = 'in1', de1 = 'de1', gll = 'gll' }

	export enum Insightsv1video_room_summaryProcessing_state { complete = 'complete', in_progress = 'in_progress' }

	export enum Insightsv1video_room_summaryRoom_status { in_progress = 'in_progress', completed = 'completed' }

	export enum Insightsv1video_room_summaryRoom_type { go = 'go', peer_to_peer = 'peer_to_peer', group = 'group', group_small = 'group_small' }

	export enum Insightsv1video_room_summaryStatus_callback_method { HEAD = 'HEAD', GET = 'GET', POST = 'POST', PATCH = 'PATCH', PUT = 'PUT', DELETE = 'DELETE' }

	export interface Insightsv1video_room_summaryvideo_participant_summary {

		/**
		 * Account SID associated with the room.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** Codecs detected from the participant. Can be `VP8`, `H264`, or `VP9`. */
		codecs?: Array<Video_participant_summary_enum_codec>;

		/**
		 * Amount of time in seconds the participant was in the room.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		duration_sec?: string | null;
		edge_location?: Insightsv1video_room_summaryEdge_location | null;

		/** Reason the participant left the room. See [the list of possible values here](https://www.twilio.com/docs/video/troubleshooting/video-log-analyzer-api#end_reason). */
		end_reason?: string | null;

		/**
		 * Errors encountered by the participant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		error_code?: number | null;

		/** Twilio error code dictionary link. */
		error_code_url?: string | null;

		/** When the participant joined the room. */
		join_time?: Date | null;

		/** When the participant left the room. */
		leave_time?: Date | null;
		media_region?: Insightsv1video_room_summaryMedia_region | null;

		/** The application-defined string that uniquely identifies the participant within a Room. */
		participant_identity?: string | null;

		/**
		 * Unique identifier for the participant.
		 * Min length: 34
		 * Max length: 34
		 */
		participant_sid?: string | null;

		/** Object containing information about the participant's data from the room. See [below](https://www.twilio.com/docs/video/troubleshooting/video-log-analyzer-api#properties) for more information. */
		properties?: any;

		/** Object containing information about the SDK name and version. See [below](https://www.twilio.com/docs/video/troubleshooting/video-log-analyzer-api#publisher_info) for more information. */
		publisher_info?: any;

		/**
		 * Unique identifier for the room.
		 * Min length: 34
		 * Max length: 34
		 */
		room_sid?: string | null;
		status?: Insightsv1video_room_summaryRoom_status | null;

		/** URL of the participant resource. */
		url?: string | null;
	}
	export interface Insightsv1video_room_summaryvideo_participant_summaryFormProperties {

		/**
		 * Account SID associated with the room.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * Amount of time in seconds the participant was in the room.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		duration_sec: FormControl<string | null | undefined>,
		edge_location: FormControl<Insightsv1video_room_summaryEdge_location | null | undefined>,

		/** Reason the participant left the room. See [the list of possible values here](https://www.twilio.com/docs/video/troubleshooting/video-log-analyzer-api#end_reason). */
		end_reason: FormControl<string | null | undefined>,

		/**
		 * Errors encountered by the participant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		error_code: FormControl<number | null | undefined>,

		/** Twilio error code dictionary link. */
		error_code_url: FormControl<string | null | undefined>,

		/** When the participant joined the room. */
		join_time: FormControl<Date | null | undefined>,

		/** When the participant left the room. */
		leave_time: FormControl<Date | null | undefined>,
		media_region: FormControl<Insightsv1video_room_summaryMedia_region | null | undefined>,

		/** The application-defined string that uniquely identifies the participant within a Room. */
		participant_identity: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the participant.
		 * Min length: 34
		 * Max length: 34
		 */
		participant_sid: FormControl<string | null | undefined>,

		/** Object containing information about the participant's data from the room. See [below](https://www.twilio.com/docs/video/troubleshooting/video-log-analyzer-api#properties) for more information. */
		properties: FormControl<any | null | undefined>,

		/** Object containing information about the SDK name and version. See [below](https://www.twilio.com/docs/video/troubleshooting/video-log-analyzer-api#publisher_info) for more information. */
		publisher_info: FormControl<any | null | undefined>,

		/**
		 * Unique identifier for the room.
		 * Min length: 34
		 * Max length: 34
		 */
		room_sid: FormControl<string | null | undefined>,
		status: FormControl<Insightsv1video_room_summaryRoom_status | null | undefined>,

		/** URL of the participant resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateInsightsv1video_room_summaryvideo_participant_summaryFormGroup() {
		return new FormGroup<Insightsv1video_room_summaryvideo_participant_summaryFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			duration_sec: new FormControl<string | null | undefined>(undefined),
			edge_location: new FormControl<Insightsv1video_room_summaryEdge_location | null | undefined>(undefined),
			end_reason: new FormControl<string | null | undefined>(undefined),
			error_code: new FormControl<number | null | undefined>(undefined),
			error_code_url: new FormControl<string | null | undefined>(undefined),
			join_time: new FormControl<Date | null | undefined>(undefined),
			leave_time: new FormControl<Date | null | undefined>(undefined),
			media_region: new FormControl<Insightsv1video_room_summaryMedia_region | null | undefined>(undefined),
			participant_identity: new FormControl<string | null | undefined>(undefined),
			participant_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^PA[0-9a-fA-F]{32}$')]),
			properties: new FormControl<any | null | undefined>(undefined),
			publisher_info: new FormControl<any | null | undefined>(undefined),
			room_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^RM[0-9a-fA-F]{32}$')]),
			status: new FormControl<Insightsv1video_room_summaryRoom_status | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Video_participant_summary_enum_codec { VP8 = 'VP8', H264 = 'H264', VP9 = 'VP9' }

	export enum Metric_enum_stream_direction { unknown = 'unknown', inbound = 'inbound', outbound = 'outbound', both = 'both' }

	export enum Metric_enum_twilio_edge { unknown_edge = 'unknown_edge', carrier_edge = 'carrier_edge', sip_edge = 'sip_edge', sdk_edge = 'sdk_edge', client_edge = 'client_edge' }

	export enum Summary_enum_answered_by { unknown = 'unknown', machine_start = 'machine_start', machine_end_beep = 'machine_end_beep', machine_end_silence = 'machine_end_silence', machine_end_other = 'machine_end_other', human = 'human', fax = 'fax' }

	export enum Summary_enum_call_state { ringing = 'ringing', completed = 'completed', busy = 'busy', fail = 'fail', noanswer = 'noanswer', canceled = 'canceled', answered = 'answered', undialed = 'undialed' }

	export enum Summary_enum_call_type { carrier = 'carrier', sip = 'sip', trunking = 'trunking', client = 'client' }

	export enum Summary_enum_processing_state { complete = 'complete', partial = 'partial' }

	export enum Video_participant_summary_enum_edge_location { ashburn = 'ashburn', dublin = 'dublin', frankfurt = 'frankfurt', singapore = 'singapore', sydney = 'sydney', sao_paulo = 'sao_paulo', roaming = 'roaming', umatilla = 'umatilla', tokyo = 'tokyo' }

	export enum Video_participant_summary_enum_room_status { in_progress = 'in_progress', completed = 'completed' }

	export enum Video_participant_summary_enum_twilio_realm { us1 = 'us1', us2 = 'us2', au1 = 'au1', br1 = 'br1', ie1 = 'ie1', jp1 = 'jp1', sg1 = 'sg1', in1 = 'in1', de1 = 'de1', gll = 'gll' }

	export enum Video_room_summary_enum_created_method { sdk = 'sdk', ad_hoc = 'ad_hoc', api = 'api' }

	export enum Video_room_summary_enum_edge_location { ashburn = 'ashburn', dublin = 'dublin', frankfurt = 'frankfurt', singapore = 'singapore', sydney = 'sydney', sao_paulo = 'sao_paulo', roaming = 'roaming', umatilla = 'umatilla', tokyo = 'tokyo' }

	export enum Video_room_summary_enum_end_reason { room_ended_via_api = 'room_ended_via_api', timeout = 'timeout' }

	export enum Video_room_summary_enum_processing_state { complete = 'complete', in_progress = 'in_progress' }

	export enum Video_room_summary_enum_room_status { in_progress = 'in_progress', completed = 'completed' }

	export enum Video_room_summary_enum_room_type { go = 'go', peer_to_peer = 'peer_to_peer', group = 'group', group_small = 'group_small' }

	export enum Video_room_summary_enum_twilio_realm { us1 = 'us1', us2 = 'us2', au1 = 'au1', br1 = 'br1', ie1 = 'ie1', jp1 = 'jp1', sg1 = 'sg1', in1 = 'in1', de1 = 'de1', gll = 'gll' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get a list of Conference Summaries.
		 * Get v1/Conferences
		 * @param {string} ConferenceSid The SID of the conference.
		 * @param {string} FriendlyName Custom label for the conference resource, up to 64 characters.
		 * @param {string} Status Conference status.
		 * @param {string} CreatedAfter Conferences created after the provided timestamp specified in ISO 8601 format
		 * @param {string} CreatedBefore Conferences created before the provided timestamp specified in ISO 8601 format.
		 * @param {string} MixerRegion Twilio region where the conference media was mixed.
		 * @param {string} Tags Tags applied by Twilio for common potential configuration, quality, or performance issues.
		 * @param {string} Subaccount Account SID for the subaccount whose resources you wish to retrieve.
		 *     Min length: 34    Max length: 34
		 * @param {string} DetectedIssues Potential configuration, behavior, or performance issues detected during the conference.
		 * @param {string} EndReason Conference end reason; e.g. last participant left, modified by API, etc.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListConferenceReturn} OK
		 */
		ListConference(ConferenceSid: string | null | undefined, FriendlyName: string | null | undefined, Status: string | null | undefined, CreatedAfter: string | null | undefined, CreatedBefore: string | null | undefined, MixerRegion: string | null | undefined, Tags: string | null | undefined, Subaccount: string | null | undefined, DetectedIssues: string | null | undefined, EndReason: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListConferenceReturn> {
			return this.http.get<ListConferenceReturn>(this.baseUri + 'v1/Conferences?ConferenceSid=' + (ConferenceSid == null ? '' : encodeURIComponent(ConferenceSid)) + '&FriendlyName=' + (FriendlyName == null ? '' : encodeURIComponent(FriendlyName)) + '&Status=' + (Status == null ? '' : encodeURIComponent(Status)) + '&CreatedAfter=' + (CreatedAfter == null ? '' : encodeURIComponent(CreatedAfter)) + '&CreatedBefore=' + (CreatedBefore == null ? '' : encodeURIComponent(CreatedBefore)) + '&MixerRegion=' + (MixerRegion == null ? '' : encodeURIComponent(MixerRegion)) + '&Tags=' + (Tags == null ? '' : encodeURIComponent(Tags)) + '&Subaccount=' + (Subaccount == null ? '' : encodeURIComponent(Subaccount)) + '&DetectedIssues=' + (DetectedIssues == null ? '' : encodeURIComponent(DetectedIssues)) + '&EndReason=' + (EndReason == null ? '' : encodeURIComponent(EndReason)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get a specific Conference Summary.
		 * Get v1/Conferences/{ConferenceSid}
		 * @param {string} ConferenceSid The unique SID identifier of the Conference.
		 *     Min length: 34    Max length: 34
		 * @return {Insightsv1conference} OK
		 */
		FetchConference(ConferenceSid: string): Observable<Insightsv1conference> {
			return this.http.get<Insightsv1conference>(this.baseUri + 'v1/Conferences/' + (ConferenceSid == null ? '' : encodeURIComponent(ConferenceSid)), {});
		}

		/**
		 * Get a list of Conference Participants Summaries for a Conference.
		 * Get v1/Conferences/{ConferenceSid}/Participants
		 * @param {string} ConferenceSid The unique SID identifier of the Conference.
		 *     Min length: 34    Max length: 34
		 * @param {string} ParticipantSid The unique SID identifier of the Participant.
		 * @param {string} Label User-specified label for a participant.
		 * @param {string} Events Conference events generated by application or participant activity; e.g. `hold`, `mute`, etc.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListConferenceParticipantReturn} OK
		 */
		ListConferenceParticipant(ConferenceSid: string, ParticipantSid: string | null | undefined, Label: string | null | undefined, Events: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListConferenceParticipantReturn> {
			return this.http.get<ListConferenceParticipantReturn>(this.baseUri + 'v1/Conferences/' + (ConferenceSid == null ? '' : encodeURIComponent(ConferenceSid)) + '/Participants&ParticipantSid=' + (ParticipantSid == null ? '' : encodeURIComponent(ParticipantSid)) + '&Label=' + (Label == null ? '' : encodeURIComponent(Label)) + '&Events=' + (Events == null ? '' : encodeURIComponent(Events)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get a specific Conference Participant Summary for a Conference.
		 * Get v1/Conferences/{ConferenceSid}/Participants/{ParticipantSid}
		 * @param {string} ConferenceSid The unique SID identifier of the Conference.
		 *     Min length: 34    Max length: 34
		 * @param {string} ParticipantSid The unique SID identifier of the Participant.
		 *     Min length: 34    Max length: 34
		 * @param {string} Events Conference events generated by application or participant activity; e.g. `hold`, `mute`, etc.
		 * @param {string} Metrics Object. Contains participant call quality metrics.
		 * @return {Insightsv1conferenceconference_participant} OK
		 */
		FetchConferenceParticipant(ConferenceSid: string, ParticipantSid: string, Events: string | null | undefined, Metrics: string | null | undefined): Observable<Insightsv1conferenceconference_participant> {
			return this.http.get<Insightsv1conferenceconference_participant>(this.baseUri + 'v1/Conferences/' + (ConferenceSid == null ? '' : encodeURIComponent(ConferenceSid)) + '/Participants/' + (ParticipantSid == null ? '' : encodeURIComponent(ParticipantSid)) + '&Events=' + (Events == null ? '' : encodeURIComponent(Events)) + '&Metrics=' + (Metrics == null ? '' : encodeURIComponent(Metrics)), {});
		}

		/**
		 * Get a list of Programmable Video Rooms.
		 * Get v1/Video/Rooms
		 * @param {Array<Video_room_summary_enum_room_type>} RoomType Type of room. Can be `go`, `peer_to_peer`, `group`, or `group_small`.
		 * @param {Array<Video_room_summary_enum_codec>} Codec Codecs used by participants in the room. Can be `VP8`, `H264`, or `VP9`.
		 * @param {string} RoomName Room friendly name.
		 * @param {Date} CreatedAfter Only read rooms that started on or after this ISO 8601 timestamp.
		 * @param {Date} CreatedBefore Only read rooms that started before this ISO 8601 timestamp.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListVideoRoomSummaryReturn} OK
		 */
		ListVideoRoomSummary(RoomType: Array<Video_room_summary_enum_room_type> | null | undefined, Codec: Array<Video_room_summary_enum_codec> | null | undefined, RoomName: string | null | undefined, CreatedAfter: Date | null | undefined, CreatedBefore: Date | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListVideoRoomSummaryReturn> {
			return this.http.get<ListVideoRoomSummaryReturn>(this.baseUri + 'v1/Video/Rooms?' + RoomType?.map(z => `RoomType=${z}`).join('&') + '&' + Codec?.map(z => `Codec=${z}`).join('&') + '&RoomName=' + (RoomName == null ? '' : encodeURIComponent(RoomName)) + '&CreatedAfter=' + CreatedAfter?.toISOString() + '&CreatedBefore=' + CreatedBefore?.toISOString() + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get Video Log Analyzer data for a Room.
		 * Get v1/Video/Rooms/{RoomSid}
		 * @param {string} RoomSid The SID of the Room resource.
		 * @return {Insightsv1video_room_summary} OK
		 */
		FetchVideoRoomSummary(RoomSid: string): Observable<Insightsv1video_room_summary> {
			return this.http.get<Insightsv1video_room_summary>(this.baseUri + 'v1/Video/Rooms/' + (RoomSid == null ? '' : encodeURIComponent(RoomSid)), {});
		}

		/**
		 * Get a list of room participants.
		 * Get v1/Video/Rooms/{RoomSid}/Participants
		 * @param {string} RoomSid The SID of the Room resource.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListVideoParticipantSummaryReturn} OK
		 */
		ListVideoParticipantSummary(RoomSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListVideoParticipantSummaryReturn> {
			return this.http.get<ListVideoParticipantSummaryReturn>(this.baseUri + 'v1/Video/Rooms/' + (RoomSid == null ? '' : encodeURIComponent(RoomSid)) + '/Participants&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get Video Log Analyzer data for a Room Participant.
		 * Get v1/Video/Rooms/{RoomSid}/Participants/{ParticipantSid}
		 * @param {string} RoomSid The SID of the Room resource.
		 * @param {string} ParticipantSid The SID of the Participant resource.
		 * @return {Insightsv1video_room_summaryvideo_participant_summary} OK
		 */
		FetchVideoParticipantSummary(RoomSid: string, ParticipantSid: string): Observable<Insightsv1video_room_summaryvideo_participant_summary> {
			return this.http.get<Insightsv1video_room_summaryvideo_participant_summary>(this.baseUri + 'v1/Video/Rooms/' + (RoomSid == null ? '' : encodeURIComponent(RoomSid)) + '/Participants/' + (ParticipantSid == null ? '' : encodeURIComponent(ParticipantSid)), {});
		}

		/**
		 * Get the Voice Insights Settings.
		 * Get v1/Voice/Settings
		 * @param {string} SubaccountSid The unique SID identifier of the Subaccount.
		 *     Min length: 34    Max length: 34
		 * @return {Insightsv1account_settings} OK
		 */
		FetchAccountSettings(SubaccountSid: string | null | undefined): Observable<Insightsv1account_settings> {
			return this.http.get<Insightsv1account_settings>(this.baseUri + 'v1/Voice/Settings?SubaccountSid=' + (SubaccountSid == null ? '' : encodeURIComponent(SubaccountSid)), {});
		}

		/**
		 * Get a list of Call Summaries.
		 * Get v1/Voice/Summaries
		 * @param {string} From A calling party. Could be an E.164 number, a SIP URI, or a Twilio Client registered name.
		 * @param {string} To A called party. Could be an E.164 number, a SIP URI, or a Twilio Client registered name.
		 * @param {string} FromCarrier An origination carrier.
		 * @param {string} ToCarrier A destination carrier.
		 * @param {string} FromCountryCode A source country code based on phone number in From.
		 * @param {string} ToCountryCode A destination country code. Based on phone number in To.
		 * @param {boolean} Branded A boolean flag indicating whether or not the calls were branded using Twilio Branded Calls.
		 * @param {boolean} VerifiedCaller A boolean flag indicating whether or not the caller was verified using SHAKEN/STIR.
		 * @param {boolean} HasTag A boolean flag indicating the presence of one or more [Voice Insights Call Tags](https://www.twilio.com/docs/voice/voice-insights/api/call/details-call-tags).
		 * @param {string} StartTime A Start time of the calls. xm (x minutes), xh (x hours), xd (x days), 1w, 30m, 3d, 4w or datetime-ISO. Defaults to 4h.
		 * @param {string} EndTime An End Time of the calls. xm (x minutes), xh (x hours), xd (x days), 1w, 30m, 3d, 4w or datetime-ISO. Defaults to 0m.
		 * @param {string} CallType A Call Type of the calls. One of `carrier`, `sip`, `trunking` or `client`.
		 * @param {string} CallState A Call State of the calls. One of `ringing`, `completed`, `busy`, `fail`, `noanswer`, `canceled`, `answered`, `undialed`.
		 * @param {string} Direction A Direction of the calls. One of `outbound_api`, `outbound_dial`, `inbound`, `trunking_originating`, `trunking_terminating`.
		 * @param {Call_summaries_enum_processing_state_request} ProcessingState A Processing State of the Call Summaries. One of `completed`, `partial` or `all`.
		 * @param {Call_summaries_enum_sort_by} SortBy A Sort By criterion for the returned list of Call Summaries. One of `start_time` or `end_time`.
		 * @param {string} Subaccount A unique SID identifier of a Subaccount.
		 *     Min length: 34    Max length: 34
		 * @param {boolean} AbnormalSession A boolean flag indicating an abnormal session where the last SIP response was not 200 OK.
		 * @param {Call_summaries_enum_answered_by} AnsweredBy An Answered By value for the calls based on `Answering Machine Detection (AMD)`. One of `unknown`, `machine_start`, `machine_end_beep`, `machine_end_silence`, `machine_end_other`, `human` or `fax`.
		 * @param {string} AnsweredByAnnotation Either machine or human.
		 * @param {string} ConnectivityIssueAnnotation A Connectivity Issue with the calls. One of `no_connectivity_issue`, `invalid_number`, `caller_id`, `dropped_call`, or `number_reachability`.
		 * @param {string} QualityIssueAnnotation A subjective Quality Issue with the calls. One of `no_quality_issue`, `low_volume`, `choppy_robotic`, `echo`, `dtmf`, `latency`, `owa`, `static_noise`.
		 * @param {boolean} SpamAnnotation A boolean flag indicating spam calls.
		 * @param {string} CallScoreAnnotation A Call Score of the calls. Use a range of 1-5 to indicate the call experience score, with the following mapping as a reference for the rated call [5: Excellent, 4: Good, 3 : Fair, 2 : Poor, 1: Bad].
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListCallSummariesReturn} OK
		 */
		ListCallSummaries(From: string | null | undefined, To: string | null | undefined, FromCarrier: string | null | undefined, ToCarrier: string | null | undefined, FromCountryCode: string | null | undefined, ToCountryCode: string | null | undefined, Branded: boolean | null | undefined, VerifiedCaller: boolean | null | undefined, HasTag: boolean | null | undefined, StartTime: string | null | undefined, EndTime: string | null | undefined, CallType: string | null | undefined, CallState: string | null | undefined, Direction: string | null | undefined, ProcessingState: Call_summaries_enum_processing_state_request | null | undefined, SortBy: Call_summaries_enum_sort_by | null | undefined, Subaccount: string | null | undefined, AbnormalSession: boolean | null | undefined, AnsweredBy: Call_summaries_enum_answered_by | null | undefined, AnsweredByAnnotation: string | null | undefined, ConnectivityIssueAnnotation: string | null | undefined, QualityIssueAnnotation: string | null | undefined, SpamAnnotation: boolean | null | undefined, CallScoreAnnotation: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListCallSummariesReturn> {
			return this.http.get<ListCallSummariesReturn>(this.baseUri + 'v1/Voice/Summaries?From=' + (From == null ? '' : encodeURIComponent(From)) + '&To=' + (To == null ? '' : encodeURIComponent(To)) + '&FromCarrier=' + (FromCarrier == null ? '' : encodeURIComponent(FromCarrier)) + '&ToCarrier=' + (ToCarrier == null ? '' : encodeURIComponent(ToCarrier)) + '&FromCountryCode=' + (FromCountryCode == null ? '' : encodeURIComponent(FromCountryCode)) + '&ToCountryCode=' + (ToCountryCode == null ? '' : encodeURIComponent(ToCountryCode)) + '&Branded=' + Branded + '&VerifiedCaller=' + VerifiedCaller + '&HasTag=' + HasTag + '&StartTime=' + (StartTime == null ? '' : encodeURIComponent(StartTime)) + '&EndTime=' + (EndTime == null ? '' : encodeURIComponent(EndTime)) + '&CallType=' + (CallType == null ? '' : encodeURIComponent(CallType)) + '&CallState=' + (CallState == null ? '' : encodeURIComponent(CallState)) + '&Direction=' + (Direction == null ? '' : encodeURIComponent(Direction)) + '&ProcessingState=' + ProcessingState + '&SortBy=' + SortBy + '&Subaccount=' + (Subaccount == null ? '' : encodeURIComponent(Subaccount)) + '&AbnormalSession=' + AbnormalSession + '&AnsweredBy=' + AnsweredBy + '&AnsweredByAnnotation=' + (AnsweredByAnnotation == null ? '' : encodeURIComponent(AnsweredByAnnotation)) + '&ConnectivityIssueAnnotation=' + (ConnectivityIssueAnnotation == null ? '' : encodeURIComponent(ConnectivityIssueAnnotation)) + '&QualityIssueAnnotation=' + (QualityIssueAnnotation == null ? '' : encodeURIComponent(QualityIssueAnnotation)) + '&SpamAnnotation=' + SpamAnnotation + '&CallScoreAnnotation=' + (CallScoreAnnotation == null ? '' : encodeURIComponent(CallScoreAnnotation)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get the Annotation for a specific Call.
		 * Get v1/Voice/{CallSid}/Annotation
		 * @param {string} CallSid The unique SID identifier of the Call.
		 *     Min length: 34    Max length: 34
		 * @return {Insightsv1callannotation} OK
		 */
		FetchAnnotation(CallSid: string): Observable<Insightsv1callannotation> {
			return this.http.get<Insightsv1callannotation>(this.baseUri + 'v1/Voice/' + (CallSid == null ? '' : encodeURIComponent(CallSid)) + '/Annotation', {});
		}

		/**
		 * Get a list of Call Insight Events for a Call.
		 * Get v1/Voice/{CallSid}/Events
		 * @param {string} CallSid The unique SID identifier of the Call.
		 *     Min length: 34    Max length: 34
		 * @param {Event_enum_twilio_edge} Edge The Edge of this Event. One of `unknown_edge`, `carrier_edge`, `sip_edge`, `sdk_edge` or `client_edge`.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListEventReturn} OK
		 */
		ListEvent(CallSid: string, Edge: Event_enum_twilio_edge | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListEventReturn> {
			return this.http.get<ListEventReturn>(this.baseUri + 'v1/Voice/' + (CallSid == null ? '' : encodeURIComponent(CallSid)) + '/Events&Edge=' + Edge + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get a list of Call Metrics for a Call.
		 * Get v1/Voice/{CallSid}/Metrics
		 * @param {string} CallSid The unique SID identifier of the Call.
		 *     Min length: 34    Max length: 34
		 * @param {Event_enum_twilio_edge} Edge The Edge of this Metric. One of `unknown_edge`, `carrier_edge`, `sip_edge`, `sdk_edge` or `client_edge`.
		 * @param {Insightsv1callmetricDirection} Direction The Direction of this Metric. One of `unknown`, `inbound`, `outbound` or `both`.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListMetricReturn} OK
		 */
		ListMetric(CallSid: string, Edge: Event_enum_twilio_edge | null | undefined, Direction: Insightsv1callmetricDirection | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListMetricReturn> {
			return this.http.get<ListMetricReturn>(this.baseUri + 'v1/Voice/' + (CallSid == null ? '' : encodeURIComponent(CallSid)) + '/Metrics&Edge=' + Edge + '&Direction=' + Direction + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Get a specific Call Summary.
		 * Get v1/Voice/{CallSid}/Summary
		 * @param {string} CallSid The unique SID identifier of the Call.
		 *     Min length: 34    Max length: 34
		 * @param {Call_summaries_enum_processing_state} ProcessingState The Processing State of this Call Summary. One of `complete`, `partial` or `all`.
		 * @return {Insightsv1callsummary} OK
		 */
		FetchSummary(CallSid: string, ProcessingState: Call_summaries_enum_processing_state | null | undefined): Observable<Insightsv1callsummary> {
			return this.http.get<Insightsv1callsummary>(this.baseUri + 'v1/Voice/' + (CallSid == null ? '' : encodeURIComponent(CallSid)) + '/Summary&ProcessingState=' + ProcessingState, {});
		}

		/**
		 * Get v1/Voice/{Sid}
		 * @param {string} Sid Min length: 34
		 *     Max length: 34
		 * @return {Insightsv1call} OK
		 */
		FetchCall(Sid: string): Observable<Insightsv1call> {
			return this.http.get<Insightsv1call>(this.baseUri + 'v1/Voice/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}
	}

	export interface ListConferenceReturn {
		conferences?: Array<Insightsv1conference>;
		meta?: ListConferenceReturnMeta;
	}
	export interface ListConferenceReturnFormProperties {
	}
	export function CreateListConferenceReturnFormGroup() {
		return new FormGroup<ListConferenceReturnFormProperties>({
		});

	}

	export interface ListConferenceReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListConferenceReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListConferenceReturnMetaFormGroup() {
		return new FormGroup<ListConferenceReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConferenceParticipantReturn {
		meta?: ListConferenceParticipantReturnMeta;
		participants?: Array<Insightsv1conferenceconference_participant>;
	}
	export interface ListConferenceParticipantReturnFormProperties {
	}
	export function CreateListConferenceParticipantReturnFormGroup() {
		return new FormGroup<ListConferenceParticipantReturnFormProperties>({
		});

	}

	export interface ListConferenceParticipantReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListConferenceParticipantReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListConferenceParticipantReturnMetaFormGroup() {
		return new FormGroup<ListConferenceParticipantReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVideoRoomSummaryReturn {
		meta?: ListVideoRoomSummaryReturnMeta;
		rooms?: Array<Insightsv1video_room_summary>;
	}
	export interface ListVideoRoomSummaryReturnFormProperties {
	}
	export function CreateListVideoRoomSummaryReturnFormGroup() {
		return new FormGroup<ListVideoRoomSummaryReturnFormProperties>({
		});

	}

	export interface ListVideoRoomSummaryReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListVideoRoomSummaryReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListVideoRoomSummaryReturnMetaFormGroup() {
		return new FormGroup<ListVideoRoomSummaryReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVideoParticipantSummaryReturn {
		meta?: ListVideoParticipantSummaryReturnMeta;
		participants?: Array<Insightsv1video_room_summaryvideo_participant_summary>;
	}
	export interface ListVideoParticipantSummaryReturnFormProperties {
	}
	export function CreateListVideoParticipantSummaryReturnFormGroup() {
		return new FormGroup<ListVideoParticipantSummaryReturnFormProperties>({
		});

	}

	export interface ListVideoParticipantSummaryReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListVideoParticipantSummaryReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListVideoParticipantSummaryReturnMetaFormGroup() {
		return new FormGroup<ListVideoParticipantSummaryReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCallSummariesReturn {
		call_summaries?: Array<Insightsv1call_summaries>;
		meta?: ListCallSummariesReturnMeta;
	}
	export interface ListCallSummariesReturnFormProperties {
	}
	export function CreateListCallSummariesReturnFormGroup() {
		return new FormGroup<ListCallSummariesReturnFormProperties>({
		});

	}

	export interface ListCallSummariesReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListCallSummariesReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListCallSummariesReturnMetaFormGroup() {
		return new FormGroup<ListCallSummariesReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEventReturn {
		events?: Array<Insightsv1callevent>;
		meta?: ListEventReturnMeta;
	}
	export interface ListEventReturnFormProperties {
	}
	export function CreateListEventReturnFormGroup() {
		return new FormGroup<ListEventReturnFormProperties>({
		});

	}

	export interface ListEventReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListEventReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListEventReturnMetaFormGroup() {
		return new FormGroup<ListEventReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMetricReturn {
		meta?: ListMetricReturnMeta;
		metrics?: Array<Insightsv1callmetric>;
	}
	export interface ListMetricReturnFormProperties {
	}
	export function CreateListMetricReturnFormGroup() {
		return new FormGroup<ListMetricReturnFormProperties>({
		});

	}

	export interface ListMetricReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListMetricReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListMetricReturnMetaFormGroup() {
		return new FormGroup<ListMetricReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

}

