import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Description of audio data to be synthesized. */
	export interface AudioConfig {

		/** Required. The format of the audio byte stream. */
		audioEncoding?: AudioConfigAudioEncoding | null;

		/**
		 * Optional. Input only. An identifier which selects 'audio effects' profiles
		 * that are applied on (post synthesized) text to speech. Effects are applied
		 * on top of each other in the order they are given. See
		 * [audio
		 * profiles](https://cloud.google.com/text-to-speech/docs/audio-profiles) for
		 * current supported profile ids.
		 */
		effectsProfileId?: Array<string> | null;

		/**
		 * Optional. Input only. Speaking pitch, in the range [-20.0, 20.0]. 20 means
		 * increase 20 semitones from the original pitch. -20 means decrease 20
		 * semitones from the original pitch.
		 */
		pitch?: number | null;

		/**
		 * Optional. The synthesis sample rate (in hertz) for this audio. When this is
		 * specified in SynthesizeSpeechRequest, if this is different from the voice's
		 * natural sample rate, then the synthesizer will honor this request by
		 * converting to the desired sample rate (which might result in worse audio
		 * quality), unless the specified sample rate is not supported for the
		 * encoding chosen, in which case it will fail the request and return
		 * google.rpc.Code.INVALID_ARGUMENT.
		 */
		sampleRateHertz?: number | null;

		/**
		 * Optional. Input only. Speaking rate/speed, in the range [0.25, 4.0]. 1.0 is
		 * the normal native speed supported by the specific voice. 2.0 is twice as
		 * fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0
		 * speed. Any other values < 0.25 or > 4.0 will return an error.
		 */
		speakingRate?: number | null;

		/**
		 * Optional. Input only. Volume gain (in dB) of the normal native volume
		 * supported by the specific voice, in the range [-96.0, 16.0]. If unset, or
		 * set to a value of 0.0 (dB), will play at normal native signal amplitude. A
		 * value of -6.0 (dB) will play at approximately half the amplitude of the
		 * normal native signal amplitude. A value of +6.0 (dB) will play at
		 * approximately twice the amplitude of the normal native signal amplitude.
		 * Strongly recommend not to exceed +10 (dB) as there's usually no effective
		 * increase in loudness for any value greater than that.
		 */
		volumeGainDb?: number | null;
	}

	export enum AudioConfigAudioEncoding { AUDIO_ENCODING_UNSPECIFIED = 0, LINEAR16 = 1, MP3 = 2, OGG_OPUS = 3 }


	/** The message returned to the client by the `ListVoices` method. */
	export interface ListVoicesResponse {

		/** The list of voices. */
		voices?: Array<Voice> | null;
	}


	/** Description of a voice supported by the TTS service. */
	export interface Voice {

		/**
		 * The languages that this voice supports, expressed as
		 * [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tags (e.g.
		 * "en-US", "es-419", "cmn-tw").
		 */
		languageCodes?: Array<string> | null;

		/** The name of this voice.  Each distinct voice has a unique name. */
		name?: string | null;

		/** The natural sample rate (in hertz) for this voice. */
		naturalSampleRateHertz?: number | null;

		/** The gender of this voice. */
		ssmlGender?: VoiceSsmlGender | null;
	}

	export enum VoiceSsmlGender { SSML_VOICE_GENDER_UNSPECIFIED = 0, MALE = 1, FEMALE = 2, NEUTRAL = 3 }


	/**
	 * Contains text input to be synthesized. Either `text` or `ssml` must be
	 * supplied. Supplying both or neither returns
	 * google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000
	 * characters.
	 */
	export interface SynthesisInput {

		/**
		 * The SSML document to be synthesized. The SSML document must be valid
		 * and well-formed. Otherwise the RPC will fail and return
		 * google.rpc.Code.INVALID_ARGUMENT. For more information, see
		 * [SSML](/speech/text-to-speech/docs/ssml).
		 */
		ssml?: string | null;

		/** The raw text to be synthesized. */
		text?: string | null;
	}


	/** The top-level message sent by the client for the `SynthesizeSpeech` method. */
	export interface SynthesizeSpeechRequest {

		/** Description of audio data to be synthesized. */
		audioConfig?: AudioConfig | null;

		/**
		 * Contains text input to be synthesized. Either `text` or `ssml` must be
		 * supplied. Supplying both or neither returns
		 * google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000
		 * characters.
		 */
		input?: SynthesisInput | null;

		/** Description of which voice to use for a synthesis request. */
		voice?: VoiceSelectionParams | null;
	}


	/** Description of which voice to use for a synthesis request. */
	export interface VoiceSelectionParams {

		/**
		 * Required. The language (and potentially also the region) of the voice expressed as a
		 * [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag, e.g.
		 * "en-US". This should not include a script tag (e.g. use
		 * "cmn-cn" rather than "cmn-Hant-cn"), because the script will be inferred
		 * from the input provided in the SynthesisInput.  The TTS service
		 * will use this parameter to help choose an appropriate voice.  Note that
		 * the TTS service may choose a voice with a slightly different language code
		 * than the one selected; it may substitute a different region
		 * (e.g. using en-US rather than en-CA if there isn't a Canadian voice
		 * available), or even a different language, e.g. using "nb" (Norwegian
		 * Bokmal) instead of "no" (Norwegian)".
		 */
		languageCode?: string | null;

		/**
		 * The name of the voice. If not set, the service will choose a
		 * voice based on the other parameters such as language_code and gender.
		 */
		name?: string | null;

		/**
		 * The preferred gender of the voice. If not set, the service will
		 * choose a voice based on the other parameters such as language_code and
		 * name. Note that this is only a preference, not requirement; if a
		 * voice of the appropriate gender is not available, the synthesizer should
		 * substitute a voice with a different gender rather than failing the request.
		 */
		ssmlGender?: VoiceSsmlGender | null;
	}


	/** The message returned to the client by the `SynthesizeSpeech` method. */
	export interface SynthesizeSpeechResponse {

		/**
		 * The audio data bytes encoded as specified in the request, including the
		 * header for encodings that are wrapped in containers (e.g. MP3, OGG_OPUS).
		 * For LINEAR16 audio, we include the WAV header. Note: as
		 * with all bytes fields, protobuffers use a pure binary representation,
		 * whereas JSON representations use base64.
		 */
		audioContent?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Synthesizes speech synchronously: receive results after all text input
		 * has been processed.
		 * Post v1/text:synthesize
		 * @return {void} Successful response
		 */
		Texttospeech_text_synthesize(requestBody: SynthesizeSpeechRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/text:synthesize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of Voice supported for synthesis.
		 * Get v1/voices
		 * @param {string} languageCode Optional. Recommended.
		 * [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. If
		 * specified, the ListVoices call will only return voices that can be used to
		 * synthesize this language_code. E.g. when specifying "en-NZ", you will get
		 * supported "en-*" voices; when specifying "no", you will get supported
		 * "no-*" (Norwegian) and "nb-*" (Norwegian Bokmal) voices; specifying "zh"
		 * will also get supported "cmn-*" voices; specifying "zh-hk" will also get
		 * supported "yue-*" voices.
		 * @return {void} Successful response
		 */
		Texttospeech_voices_list(languageCode: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/voices?languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)), { observe: 'response', responseType: 'text' });
		}
	}

}

