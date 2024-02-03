import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Description of audio data to be synthesized. */
	export interface AudioConfig {

		/** Required. The format of the audio byte stream. */
		audioEncoding?: AudioConfigAudioEncoding | null;

		/** Optional. Input only. An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. Effects are applied on top of each other in the order they are given. See [audio profiles](https://cloud.google.com/text-to-speech/docs/audio-profiles) for current supported profile ids. */
		effectsProfileId?: Array<string>;

		/** Optional. Input only. Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch. */
		pitch?: number | null;

		/** Optional. The synthesis sample rate (in hertz) for this audio. When this is specified in SynthesizeSpeechRequest, if this is different from the voice's natural sample rate, then the synthesizer will honor this request by converting to the desired sample rate (which might result in worse audio quality), unless the specified sample rate is not supported for the encoding chosen, in which case it will fail the request and return google.rpc.Code.INVALID_ARGUMENT. */
		sampleRateHertz?: number | null;

		/** Optional. Input only. Speaking rate/speed, in the range [0.25, 4.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any other values < 0.25 or > 4.0 will return an error. */
		speakingRate?: number | null;

		/** Optional. Input only. Volume gain (in dB) of the normal native volume supported by the specific voice, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. Strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that. */
		volumeGainDb?: number | null;
	}

	/** Description of audio data to be synthesized. */
	export interface AudioConfigFormProperties {

		/** Required. The format of the audio byte stream. */
		audioEncoding: FormControl<AudioConfigAudioEncoding | null | undefined>,

		/** Optional. Input only. Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch. */
		pitch: FormControl<number | null | undefined>,

		/** Optional. The synthesis sample rate (in hertz) for this audio. When this is specified in SynthesizeSpeechRequest, if this is different from the voice's natural sample rate, then the synthesizer will honor this request by converting to the desired sample rate (which might result in worse audio quality), unless the specified sample rate is not supported for the encoding chosen, in which case it will fail the request and return google.rpc.Code.INVALID_ARGUMENT. */
		sampleRateHertz: FormControl<number | null | undefined>,

		/** Optional. Input only. Speaking rate/speed, in the range [0.25, 4.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any other values < 0.25 or > 4.0 will return an error. */
		speakingRate: FormControl<number | null | undefined>,

		/** Optional. Input only. Volume gain (in dB) of the normal native volume supported by the specific voice, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. Strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that. */
		volumeGainDb: FormControl<number | null | undefined>,
	}
	export function CreateAudioConfigFormGroup() {
		return new FormGroup<AudioConfigFormProperties>({
			audioEncoding: new FormControl<AudioConfigAudioEncoding | null | undefined>(undefined),
			pitch: new FormControl<number | null | undefined>(undefined),
			sampleRateHertz: new FormControl<number | null | undefined>(undefined),
			speakingRate: new FormControl<number | null | undefined>(undefined),
			volumeGainDb: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AudioConfigAudioEncoding { AUDIO_ENCODING_UNSPECIFIED = 'AUDIO_ENCODING_UNSPECIFIED', LINEAR16 = 'LINEAR16', MP3 = 'MP3', OGG_OPUS = 'OGG_OPUS', MULAW = 'MULAW', ALAW = 'ALAW' }


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

	}


	/** Description of the custom voice to be synthesized. */
	export interface CustomVoiceParams {

		/** Required. The name of the AutoML model that synthesizes the custom voice. */
		model?: string | null;

		/** Optional. Deprecated. The usage of the synthesized audio to be reported. */
		reportedUsage?: CustomVoiceParamsReportedUsage | null;
	}

	/** Description of the custom voice to be synthesized. */
	export interface CustomVoiceParamsFormProperties {

		/** Required. The name of the AutoML model that synthesizes the custom voice. */
		model: FormControl<string | null | undefined>,

		/** Optional. Deprecated. The usage of the synthesized audio to be reported. */
		reportedUsage: FormControl<CustomVoiceParamsReportedUsage | null | undefined>,
	}
	export function CreateCustomVoiceParamsFormGroup() {
		return new FormGroup<CustomVoiceParamsFormProperties>({
			model: new FormControl<string | null | undefined>(undefined),
			reportedUsage: new FormControl<CustomVoiceParamsReportedUsage | null | undefined>(undefined),
		});

	}

	export enum CustomVoiceParamsReportedUsage { REPORTED_USAGE_UNSPECIFIED = 'REPORTED_USAGE_UNSPECIFIED', REALTIME = 'REALTIME', OFFLINE = 'OFFLINE' }


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Metadata for response returned by the `SynthesizeLongAudio` method. */
	export interface GoogleCloudTexttospeechV1SynthesizeLongAudioMetadata {

		/** The progress of the most recent processing update in percentage, ie. 70.0%. */
		progressPercentage?: number | null;

		/** Time when the request was received. */
		startTime?: string | null;
	}

	/** Metadata for response returned by the `SynthesizeLongAudio` method. */
	export interface GoogleCloudTexttospeechV1SynthesizeLongAudioMetadataFormProperties {

		/** The progress of the most recent processing update in percentage, ie. 70.0%. */
		progressPercentage: FormControl<number | null | undefined>,

		/** Time when the request was received. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudTexttospeechV1SynthesizeLongAudioMetadataFormGroup() {
		return new FormGroup<GoogleCloudTexttospeechV1SynthesizeLongAudioMetadataFormProperties>({
			progressPercentage: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


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

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
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

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
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

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
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


	/** The message returned to the client by the `ListVoices` method. */
	export interface ListVoicesResponse {

		/** The list of voices. */
		voices?: Array<Voice>;
	}

	/** The message returned to the client by the `ListVoices` method. */
	export interface ListVoicesResponseFormProperties {
	}
	export function CreateListVoicesResponseFormGroup() {
		return new FormGroup<ListVoicesResponseFormProperties>({
		});

	}


	/** Description of a voice supported by the TTS service. */
	export interface Voice {

		/** The languages that this voice supports, expressed as [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tags (e.g. "en-US", "es-419", "cmn-tw"). */
		languageCodes?: Array<string>;

		/** The name of this voice. Each distinct voice has a unique name. */
		name?: string | null;

		/** The natural sample rate (in hertz) for this voice. */
		naturalSampleRateHertz?: number | null;

		/** The gender of this voice. */
		ssmlGender?: VoiceSsmlGender | null;
	}

	/** Description of a voice supported by the TTS service. */
	export interface VoiceFormProperties {

		/** The name of this voice. Each distinct voice has a unique name. */
		name: FormControl<string | null | undefined>,

		/** The natural sample rate (in hertz) for this voice. */
		naturalSampleRateHertz: FormControl<number | null | undefined>,

		/** The gender of this voice. */
		ssmlGender: FormControl<VoiceSsmlGender | null | undefined>,
	}
	export function CreateVoiceFormGroup() {
		return new FormGroup<VoiceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			naturalSampleRateHertz: new FormControl<number | null | undefined>(undefined),
			ssmlGender: new FormControl<VoiceSsmlGender | null | undefined>(undefined),
		});

	}

	export enum VoiceSsmlGender { SSML_VOICE_GENDER_UNSPECIFIED = 'SSML_VOICE_GENDER_UNSPECIFIED', MALE = 'MALE', FEMALE = 'FEMALE', NEUTRAL = 'NEUTRAL' }


	/** Contains text input to be synthesized. Either `text` or `ssml` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000 bytes. */
	export interface SynthesisInput {

		/** The SSML document to be synthesized. The SSML document must be valid and well-formed. Otherwise the RPC will fail and return google.rpc.Code.INVALID_ARGUMENT. For more information, see [SSML](https://cloud.google.com/text-to-speech/docs/ssml). */
		ssml?: string | null;

		/** The raw text to be synthesized. */
		text?: string | null;
	}

	/** Contains text input to be synthesized. Either `text` or `ssml` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000 bytes. */
	export interface SynthesisInputFormProperties {

		/** The SSML document to be synthesized. The SSML document must be valid and well-formed. Otherwise the RPC will fail and return google.rpc.Code.INVALID_ARGUMENT. For more information, see [SSML](https://cloud.google.com/text-to-speech/docs/ssml). */
		ssml: FormControl<string | null | undefined>,

		/** The raw text to be synthesized. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateSynthesisInputFormGroup() {
		return new FormGroup<SynthesisInputFormProperties>({
			ssml: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for response returned by the `SynthesizeLongAudio` method. */
	export interface SynthesizeLongAudioMetadata {

		/** The progress of the most recent processing update in percentage, ie. 70.0%. */
		progressPercentage?: number | null;

		/** Time when the request was received. */
		startTime?: string | null;
	}

	/** Metadata for response returned by the `SynthesizeLongAudio` method. */
	export interface SynthesizeLongAudioMetadataFormProperties {

		/** The progress of the most recent processing update in percentage, ie. 70.0%. */
		progressPercentage: FormControl<number | null | undefined>,

		/** Time when the request was received. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateSynthesizeLongAudioMetadataFormGroup() {
		return new FormGroup<SynthesizeLongAudioMetadataFormProperties>({
			progressPercentage: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The top-level message sent by the client for the `SynthesizeLongAudio` method. */
	export interface SynthesizeLongAudioRequest {

		/** Description of audio data to be synthesized. */
		audioConfig?: AudioConfig;

		/** Contains text input to be synthesized. Either `text` or `ssml` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000 bytes. */
		input?: SynthesisInput;

		/** Required. Specifies a Cloud Storage URI for the synthesis results. Must be specified in the format: `gs://bucket_name/object_name`, and the bucket must already exist. */
		outputGcsUri?: string | null;

		/** Description of which voice to use for a synthesis request. */
		voice?: VoiceSelectionParams;
	}

	/** The top-level message sent by the client for the `SynthesizeLongAudio` method. */
	export interface SynthesizeLongAudioRequestFormProperties {

		/** Required. Specifies a Cloud Storage URI for the synthesis results. Must be specified in the format: `gs://bucket_name/object_name`, and the bucket must already exist. */
		outputGcsUri: FormControl<string | null | undefined>,
	}
	export function CreateSynthesizeLongAudioRequestFormGroup() {
		return new FormGroup<SynthesizeLongAudioRequestFormProperties>({
			outputGcsUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of which voice to use for a synthesis request. */
	export interface VoiceSelectionParams {

		/** Description of the custom voice to be synthesized. */
		customVoice?: CustomVoiceParams;

		/** Required. The language (and potentially also the region) of the voice expressed as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag, e.g. "en-US". This should not include a script tag (e.g. use "cmn-cn" rather than "cmn-Hant-cn"), because the script will be inferred from the input provided in the SynthesisInput. The TTS service will use this parameter to help choose an appropriate voice. Note that the TTS service may choose a voice with a slightly different language code than the one selected; it may substitute a different region (e.g. using en-US rather than en-CA if there isn't a Canadian voice available), or even a different language, e.g. using "nb" (Norwegian Bokmal) instead of "no" (Norwegian)". */
		languageCode?: string | null;

		/** The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and gender. */
		name?: string | null;

		/** The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement; if a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request. */
		ssmlGender?: VoiceSsmlGender | null;
	}

	/** Description of which voice to use for a synthesis request. */
	export interface VoiceSelectionParamsFormProperties {

		/** Required. The language (and potentially also the region) of the voice expressed as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag, e.g. "en-US". This should not include a script tag (e.g. use "cmn-cn" rather than "cmn-Hant-cn"), because the script will be inferred from the input provided in the SynthesisInput. The TTS service will use this parameter to help choose an appropriate voice. Note that the TTS service may choose a voice with a slightly different language code than the one selected; it may substitute a different region (e.g. using en-US rather than en-CA if there isn't a Canadian voice available), or even a different language, e.g. using "nb" (Norwegian Bokmal) instead of "no" (Norwegian)". */
		languageCode: FormControl<string | null | undefined>,

		/** The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and gender. */
		name: FormControl<string | null | undefined>,

		/** The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement; if a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request. */
		ssmlGender: FormControl<VoiceSsmlGender | null | undefined>,
	}
	export function CreateVoiceSelectionParamsFormGroup() {
		return new FormGroup<VoiceSelectionParamsFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ssmlGender: new FormControl<VoiceSsmlGender | null | undefined>(undefined),
		});

	}


	/** The top-level message sent by the client for the `SynthesizeSpeech` method. */
	export interface SynthesizeSpeechRequest {

		/** Description of audio data to be synthesized. */
		audioConfig?: AudioConfig;

		/** Contains text input to be synthesized. Either `text` or `ssml` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000 bytes. */
		input?: SynthesisInput;

		/** Description of which voice to use for a synthesis request. */
		voice?: VoiceSelectionParams;
	}

	/** The top-level message sent by the client for the `SynthesizeSpeech` method. */
	export interface SynthesizeSpeechRequestFormProperties {
	}
	export function CreateSynthesizeSpeechRequestFormGroup() {
		return new FormGroup<SynthesizeSpeechRequestFormProperties>({
		});

	}


	/** The message returned to the client by the `SynthesizeSpeech` method. */
	export interface SynthesizeSpeechResponse {

		/** The audio data bytes encoded as specified in the request, including the header for encodings that are wrapped in containers (e.g. MP3, OGG_OPUS). For LINEAR16 audio, we include the WAV header. Note: as with all bytes fields, protobuffers use a pure binary representation, whereas JSON representations use base64. */
		audioContent?: string | null;
	}

	/** The message returned to the client by the `SynthesizeSpeech` method. */
	export interface SynthesizeSpeechResponseFormProperties {

		/** The audio data bytes encoded as specified in the request, including the header for encodings that are wrapped in containers (e.g. MP3, OGG_OPUS). For LINEAR16 audio, we include the WAV header. Note: as with all bytes fields, protobuffers use a pure binary representation, whereas JSON representations use base64. */
		audioContent: FormControl<string | null | undefined>,
	}
	export function CreateSynthesizeSpeechResponseFormGroup() {
		return new FormGroup<SynthesizeSpeechResponseFormProperties>({
			audioContent: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Synthesizes speech synchronously: receive results after all text input has been processed.
		 * Post v1/text:synthesize
		 * @return {SynthesizeSpeechResponse} Successful response
		 */
		Texttospeech_text_synthesize(requestBody: SynthesizeSpeechRequest): Observable<SynthesizeSpeechResponse> {
			return this.http.post<SynthesizeSpeechResponse>(this.baseUri + 'v1/text:synthesize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of Voice supported for synthesis.
		 * Get v1/voices
		 * @param {string} languageCode Optional. Recommended. [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. If not specified, the API will return all supported voices. If specified, the ListVoices call will only return voices that can be used to synthesize this language_code. For example, if you specify `"en-NZ"`, all `"en-NZ"` voices will be returned. If you specify `"no"`, both `"no-\*"` (Norwegian) and `"nb-\*"` (Norwegian Bokmal) voices will be returned.
		 * @return {ListVoicesResponse} Successful response
		 */
		Texttospeech_voices_list(languageCode: string | null | undefined): Observable<ListVoicesResponse> {
			return this.http.get<ListVoicesResponse>(this.baseUri + 'v1/voices?languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)), {});
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {Empty} Successful response
		 */
		Texttospeech_operations_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Texttospeech_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Texttospeech_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Texttospeech_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Synthesizes long form text asynchronously.
		 * Post v1/{parent}:synthesizeLongAudio
		 * @param {string} parent The resource states of the request in the form of `projects/locations/*`.
		 * @return {Operation} Successful response
		 */
		Texttospeech_projects_locations_synthesizeLongAudio(parent: string, requestBody: SynthesizeLongAudioRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':synthesizeLongAudio', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

