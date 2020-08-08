import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** The request message for language detection. */
	export interface DetectLanguageRequest {

		/**
		 * The input text upon which to perform language detection. Repeat this
		 * parameter to perform language detection on multiple text inputs.
		 */
		q?: Array<string>;
	}

	export interface DetectionsListResponse {

		/** A detections contains detection results of several text */
		detections?: Array<Array<DetectionsResourceElement>>;
	}

	export interface DetectionsResourceElement {

		/** The confidence of the detection result of this language. */
		confidence?: number;

		/** A boolean to indicate is the language detection result reliable. */
		isReliable?: boolean;

		/** The language we detected. */
		language?: string;
	}


	/** The request message for discovering supported languages. */
	export interface GetSupportedLanguagesRequest {

		/**
		 * The language to use to return localized, human readable names of supported
		 * languages.
		 */
		target?: string;
	}

	export interface LanguagesListResponse {

		/** List of source/target languages supported by the translation API. If target parameter is unspecified, the list is sorted by the ASCII code point order of the language code. If target parameter is specified, the list is sorted by the collation order of the language name in the target language. */
		languages?: Array<LanguagesResource>;
	}

	export interface LanguagesResource {

		/**
		 * Supported language code, generally consisting of its ISO 639-1
		 * identifier. (E.g. 'en', 'ja'). In certain cases, BCP-47 codes including
		 * language + region identifiers are returned (e.g. 'zh-TW' and 'zh-CH')
		 */
		language?: string;

		/** Human readable name of the language localized to the target language. */
		name?: string;
	}


	/** The main translation request message for the Cloud Translation API. */
	export interface TranslateTextRequest {

		/**
		 * The format of the source text, in either HTML (default) or plain-text. A
		 * value of "html" indicates HTML and a value of "text" indicates plain-text.
		 */
		format?: string;

		/**
		 * The `model` type requested for this translation. Valid values are
		 * listed in public documentation.
		 */
		model?: string;

		/**
		 * The input text to translate. Repeat this parameter to perform translation
		 * operations on multiple text inputs.
		 */
		q?: Array<string>;

		/**
		 * The language of the source text, set to one of the language codes listed in
		 * Language Support. If the source language is not specified, the API will
		 * attempt to identify the source language automatically and return it within
		 * the response.
		 */
		source?: string;

		/**
		 * The language to use for translation of the input text, set to one of the
		 * language codes listed in Language Support.
		 */
		target?: string;
	}


	/** The main language translation response message. */
	export interface TranslationsListResponse {

		/** Translations contains list of translation results of given text */
		translations?: Array<TranslationsResource>;
	}

	export interface TranslationsResource {

		/**
		 * The source language of the initial request, detected automatically, if
		 * no source language was passed within the initial request. If the
		 * source language was passed, auto-detection of the language will not
		 * occur and this field will be empty.
		 */
		detectedSourceLanguage?: string;

		/**
		 * The `model` type used for this translation. Valid values are
		 * listed in public documentation. Can be different from requested `model`.
		 * Present only if specific model type was explicitly requested.
		 */
		model?: string;

		/** Text translated into the target language. */
		translatedText?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Translates input text, returning translated text.
		 * Get v2
		 * @param {Array<string>} q The input text to translate. Repeat this parameter to perform translation
		 * operations on multiple text inputs.
		 * @param {string} target The language to use for translation of the input text, set to one of the
		 * language codes listed in Language Support.
		 * @param {Array<string>} cid The customization id for translate
		 * @param {Language_translations_listFormat} format The format of the source text, in either HTML (default) or plain-text. A
		 * value of "html" indicates HTML and a value of "text" indicates plain-text.
		 * @param {string} model The `model` type requested for this translation. Valid values are
		 * listed in public documentation.
		 * @param {string} source The language of the source text, set to one of the language codes listed in
		 * Language Support. If the source language is not specified, the API will
		 * attempt to identify the source language automatically and return it within
		 * the response.
		 * @return {void} Successful response
		 */
		Language_translations_list(q: Array<string>, target: string, cid: Array<string>, format: Language_translations_listFormat, model: string, source: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2?' + q.map(z => `q=${encodeURIComponent(z)}`).join('&') + '&target=' + (target == null ? '' : encodeURIComponent(target)) + '&' + cid.map(z => `cid=${encodeURIComponent(z)}`).join('&') + '&format=' + format + '&model=' + (model == null ? '' : encodeURIComponent(model)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Translates input text, returning translated text.
		 * Post v2
		 * @return {void} Successful response
		 */
		Language_translations_translate(requestBody: TranslateTextRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Detects the language of text within a request.
		 * Get v2/detect
		 * @param {Array<string>} q The input text upon which to perform language detection. Repeat this
		 * parameter to perform language detection on multiple text inputs.
		 * @return {void} Successful response
		 */
		Language_detections_list(q: Array<string>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/detect?' + q.map(z => `q=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Detects the language of text within a request.
		 * Post v2/detect
		 * @return {void} Successful response
		 */
		Language_detections_detect(requestBody: DetectLanguageRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/detect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of supported languages for translation.
		 * Get v2/languages
		 * @param {string} model The model type for which supported languages should be returned.
		 * @param {string} target The language to use to return localized, human readable names of supported
		 * languages.
		 * @return {void} Successful response
		 */
		Language_languages_list(model: string, target: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/languages?model=' + (model == null ? '' : encodeURIComponent(model)) + '&target=' + (target == null ? '' : encodeURIComponent(target)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Language_translations_listFormat { html = 0, text = 1 }

}

