import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}


	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface Operation {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done?: boolean;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata?: {[id: string]: any };

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string;

		/**
		 * The normal response of the operation in case of success.  If the original
		 * method returns no data on success, such as `Delete`, the response is
		 * `google.protobuf.Empty`.  If the original method is standard
		 * `Get`/`Create`/`Update`, the response should be the resource.  For other
		 * methods, the response should have the type `XxxResponse`, where `Xxx`
		 * is the original method name.  For example, if the original method name
		 * is `TakeSnapshot()`, the inferred response type is
		 * `TakeSnapshotResponse`.
		 */
		response?: {[id: string]: any };
	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string;
	}


	/**
	 * Describes the progress of a long-running `LongRunningRecognize` call. It is
	 * included in the `metadata` field of the `Operation` returned by the
	 * `GetOperation` call of the `google::longrunning::Operations` service.
	 */
	export interface LongRunningRecognizeMetadata {

		/** Time of the most recent processing update. */
		lastUpdateTime?: string;

		/**
		 * Approximate percentage of audio processed thus far. Guaranteed to be 100
		 * when the audio is fully processed and the results are available.
		 */
		progressPercent?: number;

		/** Time when the request was received. */
		startTime?: string;

		/**
		 * Output only. The URI of the audio file being transcribed. Empty if the audio was sent
		 * as byte content.
		 */
		uri?: string;
	}


	/**
	 * The top-level message sent by the client for the `LongRunningRecognize`
	 * method.
	 */
	export interface LongRunningRecognizeRequest {

		/**
		 * Contains audio data in the encoding specified in the `RecognitionConfig`.
		 * Either `content` or `uri` must be supplied. Supplying both or neither
		 * returns google.rpc.Code.INVALID_ARGUMENT. See
		 * [content limits](https://cloud.google.com/speech-to-text/quotas#content).
		 */
		audio?: RecognitionAudio;

		/**
		 * Provides information to the recognizer that specifies how to process the
		 * request.
		 */
		config?: RecognitionConfig;
	}


	/**
	 * Contains audio data in the encoding specified in the `RecognitionConfig`.
	 * Either `content` or `uri` must be supplied. Supplying both or neither
	 * returns google.rpc.Code.INVALID_ARGUMENT. See
	 * [content limits](https://cloud.google.com/speech-to-text/quotas#content).
	 */
	export interface RecognitionAudio {

		/**
		 * The audio data bytes encoded as specified in
		 * `RecognitionConfig`. Note: as with all bytes fields, proto buffers use a
		 * pure binary representation, whereas JSON representations use base64.
		 */
		content?: string;

		/**
		 * URI that points to a file that contains audio data bytes as specified in
		 * `RecognitionConfig`. The file must not be compressed (for example, gzip).
		 * Currently, only Google Cloud Storage URIs are
		 * supported, which must be specified in the following format:
		 * `gs://bucket_name/object_name` (other URI formats return
		 * google.rpc.Code.INVALID_ARGUMENT). For more information, see
		 * [Request URIs](https://cloud.google.com/storage/docs/reference-uris).
		 */
		uri?: string;
	}


	/**
	 * Provides information to the recognizer that specifies how to process the
	 * request.
	 */
	export interface RecognitionConfig {

		/**
		 * The number of channels in the input audio data.
		 * ONLY set this for MULTI-CHANNEL recognition.
		 * Valid values for LINEAR16 and FLAC are `1`-`8`.
		 * Valid values for OGG_OPUS are '1'-'254'.
		 * Valid value for MULAW, AMR, AMR_WB and SPEEX_WITH_HEADER_BYTE is only `1`.
		 * If `0` or omitted, defaults to one channel (mono).
		 * Note: We only recognize the first channel by default.
		 * To perform independent recognition on each channel set
		 * `enable_separate_recognition_per_channel` to 'true'.
		 */
		audioChannelCount?: number;

		/** Config to enable speaker diarization. */
		diarizationConfig?: SpeakerDiarizationConfig;

		/**
		 * If 'true', adds punctuation to recognition result hypotheses.
		 * This feature is only available in select languages. Setting this for
		 * requests in other languages has no effect at all.
		 * The default 'false' value does not add punctuation to result hypotheses.
		 */
		enableAutomaticPunctuation?: boolean;

		/**
		 * This needs to be set to `true` explicitly and `audio_channel_count` > 1
		 * to get each channel recognized separately. The recognition result will
		 * contain a `channel_tag` field to state which channel that result belongs
		 * to. If this is not true, we will only recognize the first channel. The
		 * request is billed cumulatively for all channels recognized:
		 * `audio_channel_count` multiplied by the length of the audio.
		 */
		enableSeparateRecognitionPerChannel?: boolean;

		/**
		 * If `true`, the top result includes a list of words and
		 * the start and end time offsets (timestamps) for those words. If
		 * `false`, no word-level time offset information is returned. The default is
		 * `false`.
		 */
		enableWordTimeOffsets?: boolean;

		/**
		 * Encoding of audio data sent in all `RecognitionAudio` messages.
		 * This field is optional for `FLAC` and `WAV` audio files and required
		 * for all other audio formats. For details, see AudioEncoding.
		 */
		encoding?: RecognitionConfigEncoding;

		/**
		 * Required. The language of the supplied audio as a
		 * [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag.
		 * Example: "en-US".
		 * See [Language
		 * Support](https://cloud.google.com/speech-to-text/docs/languages) for a list
		 * of the currently supported language codes.
		 */
		languageCode?: string;

		/**
		 * Maximum number of recognition hypotheses to be returned.
		 * Specifically, the maximum number of `SpeechRecognitionAlternative` messages
		 * within each `SpeechRecognitionResult`.
		 * The server may return fewer than `max_alternatives`.
		 * Valid values are `0`-`30`. A value of `0` or `1` will return a maximum of
		 * one. If omitted, will return a maximum of one.
		 */
		maxAlternatives?: number;

		/** Description of audio data to be recognized. */
		metadata?: RecognitionMetadata;

		/**
		 * Which model to select for the given request. Select the model
		 * best suited to your domain to get best results. If a model is not
		 * explicitly specified, then we auto-select a model based on the parameters
		 * in the RecognitionConfig.
		 * <table>
		 * <tr>
		 * <td><b>Model</b></td>
		 * <td><b>Description</b></td>
		 * </tr>
		 * <tr>
		 * <td><code>command_and_search</code></td>
		 * <td>Best for short queries such as voice commands or voice search.</td>
		 * </tr>
		 * <tr>
		 * <td><code>phone_call</code></td>
		 * <td>Best for audio that originated from a phone call (typically
		 * recorded at an 8khz sampling rate).</td>
		 * </tr>
		 * <tr>
		 * <td><code>video</code></td>
		 * <td>Best for audio that originated from from video or includes multiple
		 * speakers. Ideally the audio is recorded at a 16khz or greater
		 * sampling rate. This is a premium model that costs more than the
		 * standard rate.</td>
		 * </tr>
		 * <tr>
		 * <td><code>default</code></td>
		 * <td>Best for audio that is not one of the specific audio models.
		 * For example, long-form audio. Ideally the audio is high-fidelity,
		 * recorded at a 16khz or greater sampling rate.</td>
		 * </tr>
		 * </table>
		 */
		model?: string;

		/**
		 * If set to `true`, the server will attempt to filter out
		 * profanities, replacing all but the initial character in each filtered word
		 * with asterisks, e.g. "f***". If set to `false` or omitted, profanities
		 * won't be filtered out.
		 */
		profanityFilter?: boolean;

		/**
		 * Sample rate in Hertz of the audio data sent in all
		 * `RecognitionAudio` messages. Valid values are: 8000-48000.
		 * 16000 is optimal. For best results, set the sampling rate of the audio
		 * source to 16000 Hz. If that's not possible, use the native sample rate of
		 * the audio source (instead of re-sampling).
		 * This field is optional for FLAC and WAV audio files, but is
		 * required for all other audio formats. For details, see AudioEncoding.
		 */
		sampleRateHertz?: number;

		/**
		 * Array of SpeechContext.
		 * A means to provide context to assist the speech recognition. For more
		 * information, see
		 * [speech
		 * adaptation](https://cloud.google.com/speech-to-text/docs/context-strength).
		 */
		speechContexts?: Array<SpeechContext>;

		/**
		 * Set to true to use an enhanced model for speech recognition.
		 * If `use_enhanced` is set to true and the `model` field is not set, then
		 * an appropriate enhanced model is chosen if an enhanced model exists for
		 * the audio.
		 * If `use_enhanced` is true and an enhanced version of the specified model
		 * does not exist, then the speech is recognized using the standard version
		 * of the specified model.
		 */
		useEnhanced?: boolean;
	}


	/** Config to enable speaker diarization. */
	export interface SpeakerDiarizationConfig {

		/**
		 * If 'true', enables speaker detection for each recognized word in
		 * the top alternative of the recognition result using a speaker_tag provided
		 * in the WordInfo.
		 */
		enableSpeakerDiarization?: boolean;

		/**
		 * Maximum number of speakers in the conversation. This range gives you more
		 * flexibility by allowing the system to automatically determine the correct
		 * number of speakers. If not set, the default value is 6.
		 */
		maxSpeakerCount?: number;

		/**
		 * Minimum number of speakers in the conversation. This range gives you more
		 * flexibility by allowing the system to automatically determine the correct
		 * number of speakers. If not set, the default value is 2.
		 */
		minSpeakerCount?: number;

		/** Output only. Unused. */
		speakerTag?: number;
	}

	export enum RecognitionConfigEncoding { ENCODING_UNSPECIFIED = 0, LINEAR16 = 1, FLAC = 2, MULAW = 3, AMR = 4, AMR_WB = 5, OGG_OPUS = 6, SPEEX_WITH_HEADER_BYTE = 7 }


	/** Description of audio data to be recognized. */
	export interface RecognitionMetadata {

		/**
		 * Description of the content. Eg. "Recordings of federal supreme court
		 * hearings from 2012".
		 */
		audioTopic?: string;

		/**
		 * The industry vertical to which this speech recognition request most
		 * closely applies. This is most indicative of the topics contained
		 * in the audio.  Use the 6-digit NAICS code to identify the industry
		 * vertical - see https://www.naics.com/search/.
		 */
		industryNaicsCodeOfAudio?: string;

		/** The use case most closely describing the audio content to be recognized. */
		interactionType?: RecognitionMetadataInteractionType;

		/** The audio type that most closely describes the audio being recognized. */
		microphoneDistance?: RecognitionMetadataMicrophoneDistance;

		/** The original media the speech was recorded on. */
		originalMediaType?: RecognitionMetadataOriginalMediaType;

		/**
		 * Mime type of the original audio file.  For example `audio/m4a`,
		 * `audio/x-alaw-basic`, `audio/mp3`, `audio/3gpp`.
		 * A list of possible audio mime types is maintained at
		 * http://www.iana.org/assignments/media-types/media-types.xhtml#audio
		 */
		originalMimeType?: string;

		/**
		 * The device used to make the recording.  Examples 'Nexus 5X' or
		 * 'Polycom SoundStation IP 6000' or 'POTS' or 'VoIP' or
		 * 'Cardioid Microphone'.
		 */
		recordingDeviceName?: string;

		/** The type of device the speech was recorded with. */
		recordingDeviceType?: RecognitionMetadataRecordingDeviceType;
	}

	export enum RecognitionMetadataInteractionType { INTERACTION_TYPE_UNSPECIFIED = 0, DISCUSSION = 1, PRESENTATION = 2, PHONE_CALL = 3, VOICEMAIL = 4, PROFESSIONALLY_PRODUCED = 5, VOICE_SEARCH = 6, VOICE_COMMAND = 7, DICTATION = 8 }

	export enum RecognitionMetadataMicrophoneDistance { MICROPHONE_DISTANCE_UNSPECIFIED = 0, NEARFIELD = 1, MIDFIELD = 2, FARFIELD = 3 }

	export enum RecognitionMetadataOriginalMediaType { ORIGINAL_MEDIA_TYPE_UNSPECIFIED = 0, AUDIO = 1, VIDEO = 2 }

	export enum RecognitionMetadataRecordingDeviceType { RECORDING_DEVICE_TYPE_UNSPECIFIED = 0, SMARTPHONE = 1, PC = 2, PHONE_LINE = 3, VEHICLE = 4, OTHER_OUTDOOR_DEVICE = 5, OTHER_INDOOR_DEVICE = 6 }


	/**
	 * Provides "hints" to the speech recognizer to favor specific words and phrases
	 * in the results.
	 */
	export interface SpeechContext {

		/**
		 * A list of strings containing words and phrases "hints" so that
		 * the speech recognition is more likely to recognize them. This can be used
		 * to improve the accuracy for specific words and phrases, for example, if
		 * specific commands are typically spoken by the user. This can also be used
		 * to add additional words to the vocabulary of the recognizer. See
		 * [usage limits](https://cloud.google.com/speech-to-text/quotas#content).
		 * List items can also be set to classes for groups of words that represent
		 * common concepts that occur in natural language. For example, rather than
		 * providing phrase hints for every month of the year, using the $MONTH class
		 * improves the likelihood of correctly transcribing audio that includes
		 * months.
		 */
		phrases?: Array<string>;
	}


	/**
	 * The only message returned to the client by the `LongRunningRecognize` method.
	 * It contains the result as zero or more sequential `SpeechRecognitionResult`
	 * messages. It is included in the `result.response` field of the `Operation`
	 * returned by the `GetOperation` call of the `google::longrunning::Operations`
	 * service.
	 */
	export interface LongRunningRecognizeResponse {

		/**
		 * Sequential list of transcription results corresponding to
		 * sequential portions of audio.
		 */
		results?: Array<SpeechRecognitionResult>;
	}


	/** A speech recognition result corresponding to a portion of the audio. */
	export interface SpeechRecognitionResult {

		/**
		 * May contain one or more recognition hypotheses (up to the
		 * maximum specified in `max_alternatives`).
		 * These alternatives are ordered in terms of accuracy, with the top (first)
		 * alternative being the most probable, as ranked by the recognizer.
		 */
		alternatives?: Array<SpeechRecognitionAlternative>;

		/**
		 * For multi-channel audio, this is the channel number corresponding to the
		 * recognized result for the audio from that channel.
		 * For audio_channel_count = N, its output values can range from '1' to 'N'.
		 */
		channelTag?: number;
	}


	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface SpeechRecognitionAlternative {

		/**
		 * The confidence estimate between 0.0 and 1.0. A higher number
		 * indicates an estimated greater likelihood that the recognized words are
		 * correct. This field is set only for the top alternative of a non-streaming
		 * result or, of a streaming result where `is_final=true`.
		 * This field is not guaranteed to be accurate and users should not rely on it
		 * to be always provided.
		 * The default of 0.0 is a sentinel value indicating `confidence` was not set.
		 */
		confidence?: number;

		/** Transcript text representing the words that the user spoke. */
		transcript?: string;

		/**
		 * A list of word-specific information for each recognized word.
		 * Note: When `enable_speaker_diarization` is true, you will see all the words
		 * from the beginning of the audio.
		 */
		words?: Array<WordInfo>;
	}


	/** Word-specific information for recognized words. */
	export interface WordInfo {

		/**
		 * Time offset relative to the beginning of the audio,
		 * and corresponding to the end of the spoken word.
		 * This field is only set if `enable_word_time_offsets=true` and only
		 * in the top hypothesis.
		 * This is an experimental feature and the accuracy of the time offset can
		 * vary.
		 */
		endTime?: string;

		/**
		 * Output only. A distinct integer value is assigned for every speaker within
		 * the audio. This field specifies which one of those speakers was detected to
		 * have spoken this word. Value ranges from '1' to diarization_speaker_count.
		 * speaker_tag is set if enable_speaker_diarization = 'true' and only in the
		 * top alternative.
		 */
		speakerTag?: number;

		/**
		 * Time offset relative to the beginning of the audio,
		 * and corresponding to the start of the spoken word.
		 * This field is only set if `enable_word_time_offsets=true` and only
		 * in the top hypothesis.
		 * This is an experimental feature and the accuracy of the time offset can
		 * vary.
		 */
		startTime?: string;

		/** The word corresponding to this set of information. */
		word?: string;
	}


	/** The top-level message sent by the client for the `Recognize` method. */
	export interface RecognizeRequest {

		/**
		 * Contains audio data in the encoding specified in the `RecognitionConfig`.
		 * Either `content` or `uri` must be supplied. Supplying both or neither
		 * returns google.rpc.Code.INVALID_ARGUMENT. See
		 * [content limits](https://cloud.google.com/speech-to-text/quotas#content).
		 */
		audio?: RecognitionAudio;

		/**
		 * Provides information to the recognizer that specifies how to process the
		 * request.
		 */
		config?: RecognitionConfig;
	}


	/**
	 * The only message returned to the client by the `Recognize` method. It
	 * contains the result as zero or more sequential `SpeechRecognitionResult`
	 * messages.
	 */
	export interface RecognizeResponse {

		/**
		 * Sequential list of transcription results corresponding to
		 * sequential portions of audio.
		 */
		results?: Array<SpeechRecognitionResult>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists operations that match the specified filter in the request. If the
		 * server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * NOTE: the `name` binding allows API services to override the binding
		 * to use different resource name schemes, such as `users/operations`. To
		 * override the binding, API services can add a binding such as
		 * `"/v1/{name=users/*}/operations"` to their service configuration.
		 * For backwards compatibility, the default name includes the operations
		 * collection id, however overriding users must ensure the name binding
		 * is the parent resource, without the operations collection id.
		 * Get v1/operations
		 * @param {string} filter The standard list filter.
		 * @param {string} name The name of the operation's parent resource.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Speech_operations_list(filter: string, name: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/operations?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the latest state of a long-running operation.  Clients can use this
		 * method to poll the operation result at intervals as recommended by the API
		 * service.
		 * Get v1/operations/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {void} Successful response
		 */
		Speech_operations_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/operations/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Performs asynchronous speech recognition: receive results via the
		 * google.longrunning.Operations interface. Returns either an
		 * `Operation.error` or an `Operation.response` which contains
		 * a `LongRunningRecognizeResponse` message.
		 * For more information on asynchronous speech recognition, see the
		 * [how-to](https://cloud.google.com/speech-to-text/docs/async-recognize).
		 * Post v1/speech:longrunningrecognize
		 * @return {void} Successful response
		 */
		Speech_speech_longrunningrecognize(requestBody: LongRunningRecognizeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/speech:longrunningrecognize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Performs synchronous speech recognition: receive results after all audio
		 * has been sent and processed.
		 * Post v1/speech:recognize
		 * @return {void} Successful response
		 */
		Speech_speech_recognize(requestBody: RecognizeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/speech:recognize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the latest state of a long-running operation.  Clients can use this
		 * method to poll the operation result at intervals as recommended by the API
		 * service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {void} Successful response
		 */
		Speech_projects_locations_operations_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the
		 * server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * NOTE: the `name` binding allows API services to override the binding
		 * to use different resource name schemes, such as `users/operations`. To
		 * override the binding, API services can add a binding such as
		 * `"/v1/{name=users/*}/operations"` to their service configuration.
		 * For backwards compatibility, the default name includes the operations
		 * collection id, however overriding users must ensure the name binding
		 * is the parent resource, without the operations collection id.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Speech_projects_locations_operations_list(name: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}
	}

}

