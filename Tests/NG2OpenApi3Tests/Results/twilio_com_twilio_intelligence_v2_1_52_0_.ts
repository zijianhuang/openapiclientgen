import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Intelligencev2service {

		/**
		 * The unique SID identifier of the Account the Service belongs to.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** Instructs the Speech Recognition service to automatically redact PII from all transcripts made on this service. */
		auto_redaction?: boolean | null;

		/** Instructs the Speech Recognition service to automatically transcribe all recordings made on the account. */
		auto_transcribe?: boolean | null;

		/**
		 * Data logging allows Twilio to improve the quality of the speech recognition & language understanding services through using customer data to refine, fine tune and evaluate machine learning models.
		 * Note: Data logging cannot be activated via API, only via www.twilio.com, as it requires additional consent.
		 */
		data_logging?: boolean | null;

		/** The date that this Service was created, given in ISO 8601 format. */
		date_created?: Date | null;

		/** The date that this Service was updated, given in ISO 8601 format. */
		date_updated?: Date | null;

		/** A human readable description of this resource, up to 64 characters. */
		friendly_name?: string | null;

		/** The default language code of the audio. */
		language_code?: string | null;

		/** Instructs the Speech Recognition service to automatically redact PII from all transcripts media made on this service. The auto_redaction flag must be enabled, results in error otherwise. */
		media_redaction?: boolean | null;

		/** A 34 character string that uniquely identifies this Service. */
		sid?: string | null;

		/** Provides a unique and addressable name to be assigned to this Service, assigned by the developer, to be optionally used in addition to SID. */
		unique_name?: string | null;

		/** The URL of this resource. */
		url?: string | null;

		/**
		 * The version number of this Service.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version?: number | null;
		webhook_http_method?: Intelligencev2serviceWebhook_http_method | null;

		/** The URL Twilio will request when executing the Webhook. */
		webhook_url?: string | null;
	}
	export interface Intelligencev2serviceFormProperties {

		/**
		 * The unique SID identifier of the Account the Service belongs to.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** Instructs the Speech Recognition service to automatically redact PII from all transcripts made on this service. */
		auto_redaction: FormControl<boolean | null | undefined>,

		/** Instructs the Speech Recognition service to automatically transcribe all recordings made on the account. */
		auto_transcribe: FormControl<boolean | null | undefined>,

		/**
		 * Data logging allows Twilio to improve the quality of the speech recognition & language understanding services through using customer data to refine, fine tune and evaluate machine learning models.
		 * Note: Data logging cannot be activated via API, only via www.twilio.com, as it requires additional consent.
		 */
		data_logging: FormControl<boolean | null | undefined>,

		/** The date that this Service was created, given in ISO 8601 format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date that this Service was updated, given in ISO 8601 format. */
		date_updated: FormControl<Date | null | undefined>,

		/** A human readable description of this resource, up to 64 characters. */
		friendly_name: FormControl<string | null | undefined>,

		/** The default language code of the audio. */
		language_code: FormControl<string | null | undefined>,

		/** Instructs the Speech Recognition service to automatically redact PII from all transcripts media made on this service. The auto_redaction flag must be enabled, results in error otherwise. */
		media_redaction: FormControl<boolean | null | undefined>,

		/** A 34 character string that uniquely identifies this Service. */
		sid: FormControl<string | null | undefined>,

		/** Provides a unique and addressable name to be assigned to this Service, assigned by the developer, to be optionally used in addition to SID. */
		unique_name: FormControl<string | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,

		/**
		 * The version number of this Service.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,
		webhook_http_method: FormControl<Intelligencev2serviceWebhook_http_method | null | undefined>,

		/** The URL Twilio will request when executing the Webhook. */
		webhook_url: FormControl<string | null | undefined>,
	}
	export function CreateIntelligencev2serviceFormGroup() {
		return new FormGroup<Intelligencev2serviceFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			auto_redaction: new FormControl<boolean | null | undefined>(undefined),
			auto_transcribe: new FormControl<boolean | null | undefined>(undefined),
			data_logging: new FormControl<boolean | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			language_code: new FormControl<string | null | undefined>(undefined),
			media_redaction: new FormControl<boolean | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
			webhook_http_method: new FormControl<Intelligencev2serviceWebhook_http_method | null | undefined>(undefined),
			webhook_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Intelligencev2serviceWebhook_http_method { GET = 'GET', POST = 'POST', NULL = 'NULL' }

	export interface Intelligencev2transcript {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** Media Channel describing Transcript Source and Participant Mapping */
		channel?: any;
		customer_key?: string | null;

		/**
		 * Data logging allows Twilio to improve the quality of the speech recognition & language understanding services through using customer data to refine, fine tune and evaluate machine learning models.
		 * Note: Data logging cannot be activated via API, only via www.twilio.com, as it requires additional consent.
		 */
		data_logging?: boolean | null;

		/** The date that this Transcript was created, given in ISO 8601 format. */
		date_created?: Date | null;

		/** The date that this Transcript was updated, given in ISO 8601 format. */
		date_updated?: Date | null;

		/**
		 * The duration of this Transcript's source
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration?: number | null;

		/** The default language code of the audio. */
		language_code?: string | null;
		links?: string | null;

		/** The date that this Transcript's media was started, given in ISO 8601 format. */
		media_start_time?: Date | null;

		/** If the transcript has been redacted, a redacted alternative of the transcript will be available. */
		redaction?: boolean | null;

		/**
		 * The unique SID identifier of the Service.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid?: string | null;

		/**
		 * A 34 character string that uniquely identifies this Transcript.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;
		status?: Intelligencev2transcriptStatus | null;

		/** The URL of this resource. */
		url?: string | null;
	}
	export interface Intelligencev2transcriptFormProperties {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** Media Channel describing Transcript Source and Participant Mapping */
		channel: FormControl<any | null | undefined>,
		customer_key: FormControl<string | null | undefined>,

		/**
		 * Data logging allows Twilio to improve the quality of the speech recognition & language understanding services through using customer data to refine, fine tune and evaluate machine learning models.
		 * Note: Data logging cannot be activated via API, only via www.twilio.com, as it requires additional consent.
		 */
		data_logging: FormControl<boolean | null | undefined>,

		/** The date that this Transcript was created, given in ISO 8601 format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date that this Transcript was updated, given in ISO 8601 format. */
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * The duration of this Transcript's source
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		duration: FormControl<number | null | undefined>,

		/** The default language code of the audio. */
		language_code: FormControl<string | null | undefined>,
		links: FormControl<string | null | undefined>,

		/** The date that this Transcript's media was started, given in ISO 8601 format. */
		media_start_time: FormControl<Date | null | undefined>,

		/** If the transcript has been redacted, a redacted alternative of the transcript will be available. */
		redaction: FormControl<boolean | null | undefined>,

		/**
		 * The unique SID identifier of the Service.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * A 34 character string that uniquely identifies this Transcript.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,
		status: FormControl<Intelligencev2transcriptStatus | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateIntelligencev2transcriptFormGroup() {
		return new FormGroup<Intelligencev2transcriptFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			channel: new FormControl<any | null | undefined>(undefined),
			customer_key: new FormControl<string | null | undefined>(undefined),
			data_logging: new FormControl<boolean | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			language_code: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			media_start_time: new FormControl<Date | null | undefined>(undefined),
			redaction: new FormControl<boolean | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^GA[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^GT[0-9a-fA-F]{32}$')]),
			status: new FormControl<Intelligencev2transcriptStatus | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Intelligencev2transcriptStatus { queued = 'queued', 'in-progress' = 'in-progress', completed = 'completed', failed = 'failed', canceled = 'canceled' }

	export interface Intelligencev2transcriptmedia {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** Downloadable URL for media, if stored in Twilio AI. */
		media_url?: string | null;

		/**
		 * The unique SID identifier of the Service.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique SID identifier of the Transcript.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** The URL of this resource. */
		url?: string | null;
	}
	export interface Intelligencev2transcriptmediaFormProperties {

		/**
		 * The unique SID identifier of the Account.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** Downloadable URL for media, if stored in Twilio AI. */
		media_url: FormControl<string | null | undefined>,

		/**
		 * The unique SID identifier of the Service.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique SID identifier of the Transcript.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateIntelligencev2transcriptmediaFormGroup() {
		return new FormGroup<Intelligencev2transcriptmediaFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			media_url: new FormControl<string | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^GA[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^GT[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Intelligencev2transcriptoperator_result {

		/** Boolean to tell if extract Language Understanding Processing model matches results. */
		extract_match?: boolean | null;

		/** List of text extraction results. This might be available on classify-extract model outputs. */
		extract_results?: any;

		/** The labels probabilities. This might be available on conversation classify model outputs. */
		label_probabilities?: any;

		/**
		 * Percentage of 'matching' class needed to consider a sentence matches
		 * Type: double
		 */
		match_probability?: number | null;

		/** The name of the applied Language Understanding. */
		name?: string | null;

		/** Normalized output of extraction stage which matches Label. */
		normalized_result?: string | null;

		/**
		 * A 34 character string that identifies this Language Understanding operator sid.
		 * Min length: 34
		 * Max length: 34
		 */
		operator_sid?: string | null;
		operator_type?: Intelligencev2transcriptoperator_resultOperator_type | null;

		/** The 'matching' class. This might be available on conversation classify model outputs. */
		predicted_label?: string | null;

		/**
		 * Percentage of 'matching' class needed to consider a sentence matches.
		 * Type: double
		 */
		predicted_probability?: number | null;

		/** Output of a text generation operator for example Conversation Sumamary. */
		text_generation_results?: any;

		/**
		 * A 34 character string that uniquely identifies this Transcript.
		 * Min length: 34
		 * Max length: 34
		 */
		transcript_sid?: string | null;

		/** The URL of this resource. */
		url?: string | null;

		/** Boolean to tell if Utterance matches results. */
		utterance_match?: boolean | null;

		/** List of mapped utterance object which matches sentences. */
		utterance_results?: Array<string>;
	}
	export interface Intelligencev2transcriptoperator_resultFormProperties {

		/** Boolean to tell if extract Language Understanding Processing model matches results. */
		extract_match: FormControl<boolean | null | undefined>,

		/** List of text extraction results. This might be available on classify-extract model outputs. */
		extract_results: FormControl<any | null | undefined>,

		/** The labels probabilities. This might be available on conversation classify model outputs. */
		label_probabilities: FormControl<any | null | undefined>,

		/**
		 * Percentage of 'matching' class needed to consider a sentence matches
		 * Type: double
		 */
		match_probability: FormControl<number | null | undefined>,

		/** The name of the applied Language Understanding. */
		name: FormControl<string | null | undefined>,

		/** Normalized output of extraction stage which matches Label. */
		normalized_result: FormControl<string | null | undefined>,

		/**
		 * A 34 character string that identifies this Language Understanding operator sid.
		 * Min length: 34
		 * Max length: 34
		 */
		operator_sid: FormControl<string | null | undefined>,
		operator_type: FormControl<Intelligencev2transcriptoperator_resultOperator_type | null | undefined>,

		/** The 'matching' class. This might be available on conversation classify model outputs. */
		predicted_label: FormControl<string | null | undefined>,

		/**
		 * Percentage of 'matching' class needed to consider a sentence matches.
		 * Type: double
		 */
		predicted_probability: FormControl<number | null | undefined>,

		/** Output of a text generation operator for example Conversation Sumamary. */
		text_generation_results: FormControl<any | null | undefined>,

		/**
		 * A 34 character string that uniquely identifies this Transcript.
		 * Min length: 34
		 * Max length: 34
		 */
		transcript_sid: FormControl<string | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,

		/** Boolean to tell if Utterance matches results. */
		utterance_match: FormControl<boolean | null | undefined>,
	}
	export function CreateIntelligencev2transcriptoperator_resultFormGroup() {
		return new FormGroup<Intelligencev2transcriptoperator_resultFormProperties>({
			extract_match: new FormControl<boolean | null | undefined>(undefined),
			extract_results: new FormControl<any | null | undefined>(undefined),
			label_probabilities: new FormControl<any | null | undefined>(undefined),
			match_probability: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			normalized_result: new FormControl<string | null | undefined>(undefined),
			operator_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^LY[0-9a-fA-F]{32}$')]),
			operator_type: new FormControl<Intelligencev2transcriptoperator_resultOperator_type | null | undefined>(undefined),
			predicted_label: new FormControl<string | null | undefined>(undefined),
			predicted_probability: new FormControl<number | null | undefined>(undefined),
			text_generation_results: new FormControl<any | null | undefined>(undefined),
			transcript_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^GT[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			utterance_match: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum Intelligencev2transcriptoperator_resultOperator_type { conversation_classify = 'conversation_classify', utterance_classify = 'utterance_classify', extract = 'extract', extract_normalize = 'extract_normalize', pii_extract = 'pii_extract' }

	export interface Intelligencev2transcriptsentence {

		/** Type: double */
		confidence?: number | null;

		/**
		 * Offset from the beginning of the transcript when this sentence ends.
		 * Type: double
		 */
		end_time?: number | null;

		/**
		 * The channel number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		media_channel?: number | null;

		/**
		 * The index of the sentence in the transcript.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sentence_index?: number | null;

		/**
		 * A 34 character string that uniquely identifies this Sentence.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/**
		 * Offset from the beginning of the transcript when this sentence starts.
		 * Type: double
		 */
		start_time?: number | null;

		/** Transcript text. */
		transcript?: string | null;
	}
	export interface Intelligencev2transcriptsentenceFormProperties {

		/** Type: double */
		confidence: FormControl<number | null | undefined>,

		/**
		 * Offset from the beginning of the transcript when this sentence ends.
		 * Type: double
		 */
		end_time: FormControl<number | null | undefined>,

		/**
		 * The channel number.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		media_channel: FormControl<number | null | undefined>,

		/**
		 * The index of the sentence in the transcript.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sentence_index: FormControl<number | null | undefined>,

		/**
		 * A 34 character string that uniquely identifies this Sentence.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/**
		 * Offset from the beginning of the transcript when this sentence starts.
		 * Type: double
		 */
		start_time: FormControl<number | null | undefined>,

		/** Transcript text. */
		transcript: FormControl<string | null | undefined>,
	}
	export function CreateIntelligencev2transcriptsentenceFormGroup() {
		return new FormGroup<Intelligencev2transcriptsentenceFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			end_time: new FormControl<number | null | undefined>(undefined),
			media_channel: new FormControl<number | null | undefined>(undefined),
			sentence_index: new FormControl<number | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^GX[0-9a-fA-F]{32}$')]),
			start_time: new FormControl<number | null | undefined>(undefined),
			transcript: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Operator_result_enum_operator_type { conversation_classify = 'conversation_classify', utterance_classify = 'utterance_classify', extract = 'extract', extract_normalize = 'extract_normalize', pii_extract = 'pii_extract' }

	export enum Service_enum_http_method { GET = 'GET', POST = 'POST', NULL = 'NULL' }

	export enum Transcript_enum_call_direction { inbound = 'inbound', outbound = 'outbound', internal = 'internal', unknown = 'unknown' }

	export enum Transcript_enum_status { queued = 'queued', 'in-progress' = 'in-progress', completed = 'completed', failed = 'failed', canceled = 'canceled' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves a list of all Services for an account.
		 * Get v2/Services
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListServiceReturn} OK
		 */
		ListService(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListServiceReturn> {
			return this.http.get<ListServiceReturn>(this.baseUri + 'v2/Services?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete a specific Service.
		 * Delete v2/Services/{Sid}
		 * @param {string} Sid A 34 character string that uniquely identifies this Service.
		 * @return {void} 
		 */
		DeleteService(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/Services/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a specific Service.
		 * Get v2/Services/{Sid}
		 * @param {string} Sid A 34 character string that uniquely identifies this Service.
		 * @return {Intelligencev2service} OK
		 */
		FetchService(Sid: string): Observable<Intelligencev2service> {
			return this.http.get<Intelligencev2service>(this.baseUri + 'v2/Services/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve a list of Transcripts for a given service.
		 * Get v2/Transcripts
		 * @param {string} ServiceSid The unique SID identifier of the Service.
		 *     Min length: 34    Max length: 34
		 * @param {string} BeforeStartTime Filter by before StartTime.
		 * @param {string} AfterStartTime Filter by after StartTime.
		 * @param {string} BeforeDateCreated Filter by before DateCreated.
		 * @param {string} AfterDateCreated Filter by after DateCreated.
		 * @param {string} Status Filter by status.
		 * @param {string} LanguageCode Filter by Language Code.
		 * @param {string} SourceSid Filter by SourceSid.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListTranscriptReturn} OK
		 */
		ListTranscript(ServiceSid: string | null | undefined, BeforeStartTime: string | null | undefined, AfterStartTime: string | null | undefined, BeforeDateCreated: string | null | undefined, AfterDateCreated: string | null | undefined, Status: string | null | undefined, LanguageCode: string | null | undefined, SourceSid: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListTranscriptReturn> {
			return this.http.get<ListTranscriptReturn>(this.baseUri + 'v2/Transcripts?ServiceSid=' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '&BeforeStartTime=' + (BeforeStartTime == null ? '' : encodeURIComponent(BeforeStartTime)) + '&AfterStartTime=' + (AfterStartTime == null ? '' : encodeURIComponent(AfterStartTime)) + '&BeforeDateCreated=' + (BeforeDateCreated == null ? '' : encodeURIComponent(BeforeDateCreated)) + '&AfterDateCreated=' + (AfterDateCreated == null ? '' : encodeURIComponent(AfterDateCreated)) + '&Status=' + (Status == null ? '' : encodeURIComponent(Status)) + '&LanguageCode=' + (LanguageCode == null ? '' : encodeURIComponent(LanguageCode)) + '&SourceSid=' + (SourceSid == null ? '' : encodeURIComponent(SourceSid)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete a specific Transcript.
		 * Delete v2/Transcripts/{Sid}
		 * @param {string} Sid A 34 character string that uniquely identifies this Transcript.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeleteTranscript(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/Transcripts/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a specific Transcript.
		 * Get v2/Transcripts/{Sid}
		 * @param {string} Sid A 34 character string that uniquely identifies this Transcript.
		 *     Min length: 34    Max length: 34
		 * @return {Intelligencev2transcript} OK
		 */
		FetchTranscript(Sid: string): Observable<Intelligencev2transcript> {
			return this.http.get<Intelligencev2transcript>(this.baseUri + 'v2/Transcripts/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Get download URLs for media if possible
		 * Get v2/Transcripts/{Sid}/Media
		 * @param {string} Sid The unique SID identifier of the Transcript.
		 *     Min length: 34    Max length: 34
		 * @param {boolean} Redacted Grant access to PII Redacted/Unredacted Media. If redaction is enabled, the default is `true` to access redacted media.
		 * @return {Intelligencev2transcriptmedia} OK
		 */
		FetchMedia(Sid: string, Redacted: boolean | null | undefined): Observable<Intelligencev2transcriptmedia> {
			return this.http.get<Intelligencev2transcriptmedia>(this.baseUri + 'v2/Transcripts/' + (Sid == null ? '' : encodeURIComponent(Sid)) + '/Media&Redacted=' + Redacted, {});
		}

		/**
		 * Retrieve a list of Operator Results for the given Transcript.
		 * Get v2/Transcripts/{TranscriptSid}/OperatorResults
		 * @param {string} TranscriptSid A 34 character string that uniquely identifies this Transcript.
		 *     Min length: 34    Max length: 34
		 * @param {boolean} Redacted Grant access to PII redacted/unredacted Language Understanding operator. If redaction is enabled, the default is True.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListOperatorResultReturn} OK
		 */
		ListOperatorResult(TranscriptSid: string, Redacted: boolean | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListOperatorResultReturn> {
			return this.http.get<ListOperatorResultReturn>(this.baseUri + 'v2/Transcripts/' + (TranscriptSid == null ? '' : encodeURIComponent(TranscriptSid)) + '/OperatorResults&Redacted=' + Redacted + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Fetch a specific Operator Result for the given Transcript.
		 * Get v2/Transcripts/{TranscriptSid}/OperatorResults/{OperatorSid}
		 * @param {string} TranscriptSid A 34 character string that uniquely identifies this Transcript.
		 *     Min length: 34    Max length: 34
		 * @param {string} OperatorSid A 34 character string that identifies this Language Understanding operator sid.
		 *     Min length: 34    Max length: 34
		 * @param {boolean} Redacted Grant access to PII redacted/unredacted Language Understanding operator. If redaction is enabled, the default is True.
		 * @return {Intelligencev2transcriptoperator_result} OK
		 */
		FetchOperatorResult(TranscriptSid: string, OperatorSid: string, Redacted: boolean | null | undefined): Observable<Intelligencev2transcriptoperator_result> {
			return this.http.get<Intelligencev2transcriptoperator_result>(this.baseUri + 'v2/Transcripts/' + (TranscriptSid == null ? '' : encodeURIComponent(TranscriptSid)) + '/OperatorResults/' + (OperatorSid == null ? '' : encodeURIComponent(OperatorSid)) + '&Redacted=' + Redacted, {});
		}

		/**
		 * Get all Transcript Sentences by TranscriptSid
		 * Get v2/Transcripts/{TranscriptSid}/Sentences
		 * @param {string} TranscriptSid The unique SID identifier of the Transcript.
		 *     Min length: 34    Max length: 34
		 * @param {boolean} Redacted Grant access to PII Redacted/Unredacted Sentences. If redaction is enabled, the default is `true` to access redacted sentences.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListSentenceReturn} OK
		 */
		ListSentence(TranscriptSid: string, Redacted: boolean | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListSentenceReturn> {
			return this.http.get<ListSentenceReturn>(this.baseUri + 'v2/Transcripts/' + (TranscriptSid == null ? '' : encodeURIComponent(TranscriptSid)) + '/Sentences&Redacted=' + Redacted + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}
	}

	export interface ListServiceReturn {
		meta?: ListServiceReturnMeta;
		services?: Array<Intelligencev2service>;
	}
	export interface ListServiceReturnFormProperties {
	}
	export function CreateListServiceReturnFormGroup() {
		return new FormGroup<ListServiceReturnFormProperties>({
		});

	}

	export interface ListServiceReturnMeta {
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
	export interface ListServiceReturnMetaFormProperties {
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
	export function CreateListServiceReturnMetaFormGroup() {
		return new FormGroup<ListServiceReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTranscriptReturn {
		meta?: ListTranscriptReturnMeta;
		transcripts?: Array<Intelligencev2transcript>;
	}
	export interface ListTranscriptReturnFormProperties {
	}
	export function CreateListTranscriptReturnFormGroup() {
		return new FormGroup<ListTranscriptReturnFormProperties>({
		});

	}

	export interface ListTranscriptReturnMeta {
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
	export interface ListTranscriptReturnMetaFormProperties {
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
	export function CreateListTranscriptReturnMetaFormGroup() {
		return new FormGroup<ListTranscriptReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOperatorResultReturn {
		meta?: ListOperatorResultReturnMeta;
		operator_results?: Array<Intelligencev2transcriptoperator_result>;
	}
	export interface ListOperatorResultReturnFormProperties {
	}
	export function CreateListOperatorResultReturnFormGroup() {
		return new FormGroup<ListOperatorResultReturnFormProperties>({
		});

	}

	export interface ListOperatorResultReturnMeta {
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
	export interface ListOperatorResultReturnMetaFormProperties {
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
	export function CreateListOperatorResultReturnMetaFormGroup() {
		return new FormGroup<ListOperatorResultReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSentenceReturn {
		meta?: ListSentenceReturnMeta;
		sentences?: Array<Intelligencev2transcriptsentence>;
	}
	export interface ListSentenceReturnFormProperties {
	}
	export function CreateListSentenceReturnFormGroup() {
		return new FormGroup<ListSentenceReturnFormProperties>({
		});

	}

	export interface ListSentenceReturnMeta {
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
	export interface ListSentenceReturnMetaFormProperties {
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
	export function CreateListSentenceReturnMetaFormGroup() {
		return new FormGroup<ListSentenceReturnMetaFormProperties>({
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

