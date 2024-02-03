import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Mediav1media_processor {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the MediaProcessor resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The reason why a MediaProcessor ended. When a MediaProcessor is in progress, will be `null`. When a MediaProcessor is completed, can be `ended-via-api`, `max-duration-exceeded`, `error-loading-extension`, `error-streaming-media` or `internal-service-error`. See [ended reasons](/docs/live/api/mediaprocessors#mediaprocessor-ended-reason-values) for more details. */
		ended_reason?: string | null;

		/** The [Media Extension](/docs/live/media-extensions-overview) name or URL. Ex: `video-composer-v2` */
		extension?: string | null;

		/** The context of the Media Extension, represented as a JSON dictionary. See the documentation for the specific [Media Extension](/docs/live/media-extensions-overview) you are using for more information about the context to send. */
		extension_context?: string | null;

		/** The maximum time, in seconds, that the MediaProcessor can run before automatically ends. The default value is 300 seconds, and the maximum value is 90000 seconds. Once this maximum duration is reached, Twilio will end the MediaProcessor, regardless of whether media is still streaming. */
		max_duration?: number | null;

		/**
		 * The unique string generated to identify the MediaProcessor resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		status?: Mediav1media_processorStatus | null;

		/** The URL to which Twilio will send asynchronous webhook requests for every MediaProcessor event. See [Status Callbacks](/docs/live/api/status-callbacks) for details. */
		status_callback?: string | null;

		/** The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`. */
		status_callback_method?: Mediav1media_processorStatus_callback_method | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Mediav1media_processorFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the MediaProcessor resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The reason why a MediaProcessor ended. When a MediaProcessor is in progress, will be `null`. When a MediaProcessor is completed, can be `ended-via-api`, `max-duration-exceeded`, `error-loading-extension`, `error-streaming-media` or `internal-service-error`. See [ended reasons](/docs/live/api/mediaprocessors#mediaprocessor-ended-reason-values) for more details. */
		ended_reason: FormControl<string | null | undefined>,

		/** The [Media Extension](/docs/live/media-extensions-overview) name or URL. Ex: `video-composer-v2` */
		extension: FormControl<string | null | undefined>,

		/** The context of the Media Extension, represented as a JSON dictionary. See the documentation for the specific [Media Extension](/docs/live/media-extensions-overview) you are using for more information about the context to send. */
		extension_context: FormControl<string | null | undefined>,

		/** The maximum time, in seconds, that the MediaProcessor can run before automatically ends. The default value is 300 seconds, and the maximum value is 90000 seconds. Once this maximum duration is reached, Twilio will end the MediaProcessor, regardless of whether media is still streaming. */
		max_duration: FormControl<number | null | undefined>,

		/**
		 * The unique string generated to identify the MediaProcessor resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		status: FormControl<Mediav1media_processorStatus | null | undefined>,

		/** The URL to which Twilio will send asynchronous webhook requests for every MediaProcessor event. See [Status Callbacks](/docs/live/api/status-callbacks) for details. */
		status_callback: FormControl<string | null | undefined>,

		/** The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`. */
		status_callback_method: FormControl<Mediav1media_processorStatus_callback_method | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateMediav1media_processorFormGroup() {
		return new FormGroup<Mediav1media_processorFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			ended_reason: new FormControl<string | null | undefined>(undefined),
			extension: new FormControl<string | null | undefined>(undefined),
			extension_context: new FormControl<string | null | undefined>(undefined),
			max_duration: new FormControl<number | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZX[0-9a-fA-F]{32}$')]),
			status: new FormControl<Mediav1media_processorStatus | null | undefined>(undefined),
			status_callback: new FormControl<string | null | undefined>(undefined),
			status_callback_method: new FormControl<Mediav1media_processorStatus_callback_method | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Mediav1media_processorStatus { failed = 'failed', started = 'started', ended = 'ended' }

	export enum Mediav1media_processorStatus_callback_method { HEAD = 'HEAD', GET = 'GET', POST = 'POST', PATCH = 'PATCH', PUT = 'PUT', DELETE = 'DELETE' }

	export interface Mediav1media_recording {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the MediaRecording resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The duration of the MediaRecording in seconds. */
		duration?: number | null;
		format?: Mediav1media_recordingFormat | null;

		/** The URLs of related resources. */
		links?: string | null;

		/** The size of the recording media in bytes. */
		media_size?: number | null;

		/**
		 * The SID of the MediaProcessor resource which produced the MediaRecording.
		 * Max length: 34
		 * Min length: 34
		 */
		processor_sid?: string | null;

		/** The dimensions of the video image in pixels expressed as columns (width) and rows (height). */
		resolution?: string | null;

		/**
		 * The unique string generated to identify the MediaRecording resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/**
		 * The SID of the resource that generated the original media track(s) of the MediaRecording.
		 * Max length: 34
		 * Min length: 34
		 */
		source_sid?: string | null;
		status?: Mediav1media_recordingStatus | null;

		/** The URL to which Twilio will send asynchronous webhook requests for every MediaRecording event. See [Status Callbacks](/docs/live/api/status-callbacks) for more details. */
		status_callback?: string | null;

		/** The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`. */
		status_callback_method?: Mediav1media_processorStatus_callback_method | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Mediav1media_recordingFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the MediaRecording resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The duration of the MediaRecording in seconds. */
		duration: FormControl<number | null | undefined>,
		format: FormControl<Mediav1media_recordingFormat | null | undefined>,

		/** The URLs of related resources. */
		links: FormControl<string | null | undefined>,

		/** The size of the recording media in bytes. */
		media_size: FormControl<number | null | undefined>,

		/**
		 * The SID of the MediaProcessor resource which produced the MediaRecording.
		 * Max length: 34
		 * Min length: 34
		 */
		processor_sid: FormControl<string | null | undefined>,

		/** The dimensions of the video image in pixels expressed as columns (width) and rows (height). */
		resolution: FormControl<string | null | undefined>,

		/**
		 * The unique string generated to identify the MediaRecording resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the resource that generated the original media track(s) of the MediaRecording.
		 * Max length: 34
		 * Min length: 34
		 */
		source_sid: FormControl<string | null | undefined>,
		status: FormControl<Mediav1media_recordingStatus | null | undefined>,

		/** The URL to which Twilio will send asynchronous webhook requests for every MediaRecording event. See [Status Callbacks](/docs/live/api/status-callbacks) for more details. */
		status_callback: FormControl<string | null | undefined>,

		/** The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`. */
		status_callback_method: FormControl<Mediav1media_processorStatus_callback_method | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateMediav1media_recordingFormGroup() {
		return new FormGroup<Mediav1media_recordingFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			format: new FormControl<Mediav1media_recordingFormat | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			media_size: new FormControl<number | null | undefined>(undefined),
			processor_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZX[0-9a-fA-F]{32}$')]),
			resolution: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KV[0-9a-fA-F]{32}$')]),
			source_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^[a-zA-Z]{2}[0-9a-fA-F]{32}$')]),
			status: new FormControl<Mediav1media_recordingStatus | null | undefined>(undefined),
			status_callback: new FormControl<string | null | undefined>(undefined),
			status_callback_method: new FormControl<Mediav1media_processorStatus_callback_method | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Mediav1media_recordingFormat { mp4 = 'mp4', webm = 'webm' }

	export enum Mediav1media_recordingStatus { processing = 'processing', completed = 'completed', deleted = 'deleted', failed = 'failed' }

	export interface Mediav1player_streamer {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the PlayerStreamer resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;
		ended_reason?: Mediav1player_streamerEnded_reason | null;

		/** The URLs of related resources. */
		links?: string | null;

		/** The maximum time, in seconds, that the PlayerStreamer is active (`created` or `started`) before automatically ends. The default value is 300 seconds, and the maximum value is 90000 seconds. Once this maximum duration is reached, Twilio will end the PlayerStreamer, regardless of whether media is still streaming. */
		max_duration?: number | null;

		/**
		 * The unique string generated to identify the PlayerStreamer resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;
		status?: Mediav1player_streamerStatus | null;

		/** The URL to which Twilio will send asynchronous webhook requests for every PlayerStreamer event. See [Status Callbacks](/docs/live/api/status-callbacks) for more details. */
		status_callback?: string | null;

		/** The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`. */
		status_callback_method?: Mediav1media_processorStatus_callback_method | null;

		/** The absolute URL of the resource. */
		url?: string | null;

		/** Specifies whether the PlayerStreamer is configured to stream video. Defaults to `true`. */
		video?: boolean | null;
	}
	export interface Mediav1player_streamerFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the PlayerStreamer resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,
		ended_reason: FormControl<Mediav1player_streamerEnded_reason | null | undefined>,

		/** The URLs of related resources. */
		links: FormControl<string | null | undefined>,

		/** The maximum time, in seconds, that the PlayerStreamer is active (`created` or `started`) before automatically ends. The default value is 300 seconds, and the maximum value is 90000 seconds. Once this maximum duration is reached, Twilio will end the PlayerStreamer, regardless of whether media is still streaming. */
		max_duration: FormControl<number | null | undefined>,

		/**
		 * The unique string generated to identify the PlayerStreamer resource.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,
		status: FormControl<Mediav1player_streamerStatus | null | undefined>,

		/** The URL to which Twilio will send asynchronous webhook requests for every PlayerStreamer event. See [Status Callbacks](/docs/live/api/status-callbacks) for more details. */
		status_callback: FormControl<string | null | undefined>,

		/** The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`. */
		status_callback_method: FormControl<Mediav1media_processorStatus_callback_method | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,

		/** Specifies whether the PlayerStreamer is configured to stream video. Defaults to `true`. */
		video: FormControl<boolean | null | undefined>,
	}
	export function CreateMediav1player_streamerFormGroup() {
		return new FormGroup<Mediav1player_streamerFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			ended_reason: new FormControl<Mediav1player_streamerEnded_reason | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			max_duration: new FormControl<number | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^VJ[0-9a-fA-F]{32}$')]),
			status: new FormControl<Mediav1player_streamerStatus | null | undefined>(undefined),
			status_callback: new FormControl<string | null | undefined>(undefined),
			status_callback_method: new FormControl<Mediav1media_processorStatus_callback_method | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			video: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum Mediav1player_streamerEnded_reason { 'ended-via-api' = 'ended-via-api', 'max-duration-exceeded' = 'max-duration-exceeded', 'stream-disconnected-by-source' = 'stream-disconnected-by-source', 'unexpected-failure' = 'unexpected-failure' }

	export enum Mediav1player_streamerStatus { created = 'created', started = 'started', ended = 'ended', failed = 'failed' }

	export interface Mediav1player_streamerplayer_streamer_playback_grant {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The grant that authorizes the player sdk to connect to the livestream */
		grant?: any;

		/**
		 * The unique string generated to identify the PlayerStreamer resource that this PlaybackGrant authorizes views for.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the resource. */
		url?: string | null;
	}
	export interface Mediav1player_streamerplayer_streamer_playback_grantFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this resource.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The grant that authorizes the player sdk to connect to the livestream */
		grant: FormControl<any | null | undefined>,

		/**
		 * The unique string generated to identify the PlayerStreamer resource that this PlaybackGrant authorizes views for.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateMediav1player_streamerplayer_streamer_playback_grantFormGroup() {
		return new FormGroup<Mediav1player_streamerplayer_streamer_playback_grantFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			grant: new FormControl<any | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^VJ[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Media_processor_enum_order { asc = 'asc', desc = 'desc' }

	export enum Media_processor_enum_status { failed = 'failed', started = 'started', ended = 'ended' }

	export enum Media_processor_enum_update_status { ended = 'ended' }

	export enum Media_recording_enum_format { mp4 = 'mp4', webm = 'webm' }

	export enum Media_recording_enum_order { asc = 'asc', desc = 'desc' }

	export enum Media_recording_enum_status { processing = 'processing', completed = 'completed', deleted = 'deleted', failed = 'failed' }

	export enum Player_streamer_enum_ended_reason { 'ended-via-api' = 'ended-via-api', 'max-duration-exceeded' = 'max-duration-exceeded', 'stream-disconnected-by-source' = 'stream-disconnected-by-source', 'unexpected-failure' = 'unexpected-failure' }

	export enum Player_streamer_enum_order { asc = 'asc', desc = 'desc' }

	export enum Player_streamer_enum_status { created = 'created', started = 'started', ended = 'ended', failed = 'failed' }

	export enum Player_streamer_enum_update_status { ended = 'ended' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of MediaProcessors.
		 * Get v1/MediaProcessors
		 * @param {Media_processor_enum_order} Order The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default.
		 * @param {Mediav1media_processorStatus} Status Status to filter by, with possible values `started`, `ended` or `failed`.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListMediaProcessorReturn} OK
		 */
		ListMediaProcessor(Order: Media_processor_enum_order | null | undefined, Status: Mediav1media_processorStatus | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListMediaProcessorReturn> {
			return this.http.get<ListMediaProcessorReturn>(this.baseUri + 'v1/MediaProcessors?Order=' + Order + '&Status=' + Status + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Returns a single MediaProcessor resource identified by a SID.
		 * Get v1/MediaProcessors/{Sid}
		 * @param {string} Sid The SID of the MediaProcessor resource to fetch.
		 * @return {Mediav1media_processor} OK
		 */
		FetchMediaProcessor(Sid: string): Observable<Mediav1media_processor> {
			return this.http.get<Mediav1media_processor>(this.baseUri + 'v1/MediaProcessors/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Returns a list of MediaRecordings.
		 * Get v1/MediaRecordings
		 * @param {Media_processor_enum_order} Order The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default.
		 * @param {Mediav1media_recordingStatus} Status Status to filter by, with possible values `processing`, `completed`, `deleted`, or `failed`.
		 * @param {string} ProcessorSid SID of a MediaProcessor to filter by.
		 * @param {string} SourceSid SID of a MediaRecording source to filter by.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListMediaRecordingReturn} OK
		 */
		ListMediaRecording(Order: Media_processor_enum_order | null | undefined, Status: Mediav1media_recordingStatus | null | undefined, ProcessorSid: string | null | undefined, SourceSid: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListMediaRecordingReturn> {
			return this.http.get<ListMediaRecordingReturn>(this.baseUri + 'v1/MediaRecordings?Order=' + Order + '&Status=' + Status + '&ProcessorSid=' + (ProcessorSid == null ? '' : encodeURIComponent(ProcessorSid)) + '&SourceSid=' + (SourceSid == null ? '' : encodeURIComponent(SourceSid)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Deletes a MediaRecording resource identified by a SID.
		 * Delete v1/MediaRecordings/{Sid}
		 * @param {string} Sid The SID of the MediaRecording resource to delete.
		 * @return {void} 
		 */
		DeleteMediaRecording(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/MediaRecordings/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single MediaRecording resource identified by a SID.
		 * Get v1/MediaRecordings/{Sid}
		 * @param {string} Sid The SID of the MediaRecording resource to fetch.
		 * @return {Mediav1media_recording} OK
		 */
		FetchMediaRecording(Sid: string): Observable<Mediav1media_recording> {
			return this.http.get<Mediav1media_recording>(this.baseUri + 'v1/MediaRecordings/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Returns a list of PlayerStreamers.
		 * Get v1/PlayerStreamers
		 * @param {Media_processor_enum_order} Order The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default.
		 * @param {Mediav1player_streamerStatus} Status Status to filter by, with possible values `created`, `started`, `ended`, or `failed`.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListPlayerStreamerReturn} OK
		 */
		ListPlayerStreamer(Order: Media_processor_enum_order | null | undefined, Status: Mediav1player_streamerStatus | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListPlayerStreamerReturn> {
			return this.http.get<ListPlayerStreamerReturn>(this.baseUri + 'v1/PlayerStreamers?Order=' + Order + '&Status=' + Status + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Returns a single PlayerStreamer resource identified by a SID.
		 * Get v1/PlayerStreamers/{Sid}
		 * @param {string} Sid The SID of the PlayerStreamer resource to fetch.
		 * @return {Mediav1player_streamer} OK
		 */
		FetchPlayerStreamer(Sid: string): Observable<Mediav1player_streamer> {
			return this.http.get<Mediav1player_streamer>(this.baseUri + 'v1/PlayerStreamers/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * **This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.
		 * Get v1/PlayerStreamers/{Sid}/PlaybackGrant
		 * @param {string} Sid The SID of the PlayerStreamer resource to fetch.
		 * @return {Mediav1player_streamerplayer_streamer_playback_grant} OK
		 */
		FetchPlayerStreamerPlaybackGrant(Sid: string): Observable<Mediav1player_streamerplayer_streamer_playback_grant> {
			return this.http.get<Mediav1player_streamerplayer_streamer_playback_grant>(this.baseUri + 'v1/PlayerStreamers/' + (Sid == null ? '' : encodeURIComponent(Sid)) + '/PlaybackGrant', {});
		}
	}

	export interface ListMediaProcessorReturn {
		media_processors?: Array<Mediav1media_processor>;
		meta?: ListMediaProcessorReturnMeta;
	}
	export interface ListMediaProcessorReturnFormProperties {
	}
	export function CreateListMediaProcessorReturnFormGroup() {
		return new FormGroup<ListMediaProcessorReturnFormProperties>({
		});

	}

	export interface ListMediaProcessorReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListMediaProcessorReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListMediaProcessorReturnMetaFormGroup() {
		return new FormGroup<ListMediaProcessorReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMediaRecordingReturn {
		media_recordings?: Array<Mediav1media_recording>;
		meta?: ListMediaRecordingReturnMeta;
	}
	export interface ListMediaRecordingReturnFormProperties {
	}
	export function CreateListMediaRecordingReturnFormGroup() {
		return new FormGroup<ListMediaRecordingReturnFormProperties>({
		});

	}

	export interface ListMediaRecordingReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListMediaRecordingReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListMediaRecordingReturnMetaFormGroup() {
		return new FormGroup<ListMediaRecordingReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPlayerStreamerReturn {
		meta?: ListPlayerStreamerReturnMeta;
		player_streamers?: Array<Mediav1player_streamer>;
	}
	export interface ListPlayerStreamerReturnFormProperties {
	}
	export function CreateListPlayerStreamerReturnFormGroup() {
		return new FormGroup<ListPlayerStreamerReturnFormProperties>({
		});

	}

	export interface ListPlayerStreamerReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListPlayerStreamerReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListPlayerStreamerReturnMetaFormGroup() {
		return new FormGroup<ListPlayerStreamerReturnMetaFormProperties>({
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

