import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the progress of a long-running `LongRunningRecognize` call. It is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface LongRunningRecognizeMetadata {

		/** Output only. Time of the most recent processing update. */
		lastUpdateTime?: string | null;

		/**
		 * Output only. Approximate percentage of audio processed thus far. Guaranteed to be 100 when the audio is fully processed and the results are available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		progressPercent?: number | null;

		/** Output only. Time when the request was received. */
		startTime?: string | null;

		/** The URI of the audio file being transcribed. Empty if the audio was sent as byte content. */
		uri?: string | null;
	}

	/** Describes the progress of a long-running `LongRunningRecognize` call. It is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface LongRunningRecognizeMetadataFormProperties {

		/** Output only. Time of the most recent processing update. */
		lastUpdateTime: FormControl<string | null | undefined>,

		/**
		 * Output only. Approximate percentage of audio processed thus far. Guaranteed to be 100 when the audio is fully processed and the results are available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		progressPercent: FormControl<number | null | undefined>,

		/** Output only. Time when the request was received. */
		startTime: FormControl<string | null | undefined>,

		/** The URI of the audio file being transcribed. Empty if the audio was sent as byte content. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateLongRunningRecognizeMetadataFormGroup() {
		return new FormGroup<LongRunningRecognizeMetadataFormProperties>({
			lastUpdateTime: new FormControl<string | null | undefined>(undefined),
			progressPercent: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The only message returned to the client by the `LongRunningRecognize` method. It contains the result as zero or more sequential SpeechRecognitionResult messages. It is included in the `result.response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface LongRunningRecognizeResponse {

		/** Output only. Sequential list of transcription results corresponding to sequential portions of audio. */
		results?: Array<SpeechRecognitionResult>;
	}

	/** The only message returned to the client by the `LongRunningRecognize` method. It contains the result as zero or more sequential SpeechRecognitionResult messages. It is included in the `result.response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface LongRunningRecognizeResponseFormProperties {
	}
	export function CreateLongRunningRecognizeResponseFormGroup() {
		return new FormGroup<LongRunningRecognizeResponseFormProperties>({
		});

	}


	/** A speech recognition result corresponding to a portion of the audio. */
	export interface SpeechRecognitionResult {

		/** Output only. May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer. */
		alternatives?: Array<SpeechRecognitionAlternative>;

		/**
		 * Output only. For multi-channel audio, this is the channel number corresponding to the recognized result for the audio from that channel. For `audio_channel_count` = N, its output values can range from `1` to `N`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		channelTag?: number | null;

		/** Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio. */
		languageCode?: string | null;
	}

	/** A speech recognition result corresponding to a portion of the audio. */
	export interface SpeechRecognitionResultFormProperties {

		/**
		 * Output only. For multi-channel audio, this is the channel number corresponding to the recognized result for the audio from that channel. For `audio_channel_count` = N, its output values can range from `1` to `N`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		channelTag: FormControl<number | null | undefined>,

		/** Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio. */
		languageCode: FormControl<string | null | undefined>,
	}
	export function CreateSpeechRecognitionResultFormGroup() {
		return new FormGroup<SpeechRecognitionResultFormProperties>({
			channelTag: new FormControl<number | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface SpeechRecognitionAlternative {

		/**
		 * Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative of a non-streaming result or, of a streaming result where `is_final=true`. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
		 * Type: float
		 */
		confidence?: number | null;

		/** Output only. Transcript text representing the words that the user spoke. */
		transcript?: string | null;

		/** Output only. A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is true, you will see all the words from the beginning of the audio. */
		words?: Array<WordInfo>;
	}

	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface SpeechRecognitionAlternativeFormProperties {

		/**
		 * Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative of a non-streaming result or, of a streaming result where `is_final=true`. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** Output only. Transcript text representing the words that the user spoke. */
		transcript: FormControl<string | null | undefined>,
	}
	export function CreateSpeechRecognitionAlternativeFormGroup() {
		return new FormGroup<SpeechRecognitionAlternativeFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			transcript: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Word-specific information for recognized words. */
	export interface WordInfo {

		/**
		 * Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative of a non-streaming result or, of a streaming result where `is_final=true`. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
		 * Type: float
		 */
		confidence?: number | null;

		/** Output only. Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		endOffset?: string | null;

		/**
		 * Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from `1` to `diarization_config.max_speaker_count` . `speaker_tag` is set if `diarization_config.enable_speaker_diarization` = `true` and only in the top alternative.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		speakerTag?: number | null;

		/** Output only. Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		startOffset?: string | null;

		/** Output only. The word corresponding to this set of information. */
		word?: string | null;
	}

	/** Word-specific information for recognized words. */
	export interface WordInfoFormProperties {

		/**
		 * Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative of a non-streaming result or, of a streaming result where `is_final=true`. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set.
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** Output only. Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		endOffset: FormControl<string | null | undefined>,

		/**
		 * Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from `1` to `diarization_config.max_speaker_count` . `speaker_tag` is set if `diarization_config.enable_speaker_diarization` = `true` and only in the top alternative.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		speakerTag: FormControl<number | null | undefined>,

		/** Output only. Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		startOffset: FormControl<string | null | undefined>,

		/** Output only. The word corresponding to this set of information. */
		word: FormControl<string | null | undefined>,
	}
	export function CreateWordInfoFormGroup() {
		return new FormGroup<WordInfoFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			endOffset: new FormControl<string | null | undefined>(undefined),
			speakerTag: new FormControl<number | null | undefined>(undefined),
			startOffset: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v2beta1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Speech_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v2beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
		 * Get v2beta1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Speech_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v2beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

