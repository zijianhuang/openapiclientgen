import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The request message for language detection. */
	export interface DetectLanguageRequest {

		/**
		 * The input text upon which to perform language detection. Repeat this
		 * parameter to perform language detection on multiple text inputs.
		 */
		q?: Array<string>;
	}

	/** The request message for language detection. */
	export interface DetectLanguageRequestFormProperties {
	}
	export function CreateDetectLanguageRequestFormGroup() {
		return new FormGroup<DetectLanguageRequestFormProperties>({
		});

	}

	export interface DetectionsListResponse {

		/** A detections contains detection results of several text */
		detections?: Array<Array<DetectionsResourceElement>>;
	}
	export interface DetectionsListResponseFormProperties {
	}
	export function CreateDetectionsListResponseFormGroup() {
		return new FormGroup<DetectionsListResponseFormProperties>({
		});

	}

	export interface DetectionsResourceElement {

		/** The confidence of the detection result of this language. */
		confidence?: number | null;

		/** A boolean to indicate is the language detection result reliable. */
		isReliable?: boolean | null;

		/** The language we detected. */
		language?: string | null;
	}
	export interface DetectionsResourceElementFormProperties {

		/** The confidence of the detection result of this language. */
		confidence: FormControl<number | null | undefined>,

		/** A boolean to indicate is the language detection result reliable. */
		isReliable: FormControl<boolean | null | undefined>,

		/** The language we detected. */
		language: FormControl<string | null | undefined>,
	}
	export function CreateDetectionsResourceElementFormGroup() {
		return new FormGroup<DetectionsResourceElementFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			isReliable: new FormControl<boolean | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for discovering supported languages. */
	export interface GetSupportedLanguagesRequest {

		/**
		 * The language to use to return localized, human readable names of supported
		 * languages.
		 */
		target?: string | null;
	}

	/** The request message for discovering supported languages. */
	export interface GetSupportedLanguagesRequestFormProperties {

		/**
		 * The language to use to return localized, human readable names of supported
		 * languages.
		 */
		target: FormControl<string | null | undefined>,
	}
	export function CreateGetSupportedLanguagesRequestFormGroup() {
		return new FormGroup<GetSupportedLanguagesRequestFormProperties>({
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LanguagesListResponse {

		/** List of source/target languages supported by the translation API. If target parameter is unspecified, the list is sorted by the ASCII code point order of the language code. If target parameter is specified, the list is sorted by the collation order of the language name in the target language. */
		languages?: Array<LanguagesResource>;
	}
	export interface LanguagesListResponseFormProperties {
	}
	export function CreateLanguagesListResponseFormGroup() {
		return new FormGroup<LanguagesListResponseFormProperties>({
		});

	}

	export interface LanguagesResource {

		/**
		 * Supported language code, generally consisting of its ISO 639-1
		 * identifier. (E.g. 'en', 'ja'). In certain cases, BCP-47 codes including
		 * language + region identifiers are returned (e.g. 'zh-TW' and 'zh-CH')
		 */
		language?: string | null;

		/** Human readable name of the language localized to the target language. */
		name?: string | null;
	}
	export interface LanguagesResourceFormProperties {

		/**
		 * Supported language code, generally consisting of its ISO 639-1
		 * identifier. (E.g. 'en', 'ja'). In certain cases, BCP-47 codes including
		 * language + region identifiers are returned (e.g. 'zh-TW' and 'zh-CH')
		 */
		language: FormControl<string | null | undefined>,

		/** Human readable name of the language localized to the target language. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLanguagesResourceFormGroup() {
		return new FormGroup<LanguagesResourceFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The main translation request message for the Cloud Translation API. */
	export interface TranslateTextRequest {

		/**
		 * The format of the source text, in either HTML (default) or plain-text. A
		 * value of "html" indicates HTML and a value of "text" indicates plain-text.
		 */
		format?: string | null;

		/**
		 * The `model` type requested for this translation. Valid values are
		 * listed in public documentation.
		 */
		model?: string | null;

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
		source?: string | null;

		/**
		 * The language to use for translation of the input text, set to one of the
		 * language codes listed in Language Support.
		 */
		target?: string | null;
	}

	/** The main translation request message for the Cloud Translation API. */
	export interface TranslateTextRequestFormProperties {

		/**
		 * The format of the source text, in either HTML (default) or plain-text. A
		 * value of "html" indicates HTML and a value of "text" indicates plain-text.
		 */
		format: FormControl<string | null | undefined>,

		/**
		 * The `model` type requested for this translation. Valid values are
		 * listed in public documentation.
		 */
		model: FormControl<string | null | undefined>,

		/**
		 * The language of the source text, set to one of the language codes listed in
		 * Language Support. If the source language is not specified, the API will
		 * attempt to identify the source language automatically and return it within
		 * the response.
		 */
		source: FormControl<string | null | undefined>,

		/**
		 * The language to use for translation of the input text, set to one of the
		 * language codes listed in Language Support.
		 */
		target: FormControl<string | null | undefined>,
	}
	export function CreateTranslateTextRequestFormGroup() {
		return new FormGroup<TranslateTextRequestFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The main language translation response message. */
	export interface TranslationsListResponse {

		/** Translations contains list of translation results of given text */
		translations?: Array<TranslationsResource>;
	}

	/** The main language translation response message. */
	export interface TranslationsListResponseFormProperties {
	}
	export function CreateTranslationsListResponseFormGroup() {
		return new FormGroup<TranslationsListResponseFormProperties>({
		});

	}

	export interface TranslationsResource {

		/**
		 * The source language of the initial request, detected automatically, if
		 * no source language was passed within the initial request. If the
		 * source language was passed, auto-detection of the language will not
		 * occur and this field will be empty.
		 */
		detectedSourceLanguage?: string | null;

		/**
		 * The `model` type used for this translation. Valid values are
		 * listed in public documentation. Can be different from requested `model`.
		 * Present only if specific model type was explicitly requested.
		 */
		model?: string | null;

		/** Text translated into the target language. */
		translatedText?: string | null;
	}
	export interface TranslationsResourceFormProperties {

		/**
		 * The source language of the initial request, detected automatically, if
		 * no source language was passed within the initial request. If the
		 * source language was passed, auto-detection of the language will not
		 * occur and this field will be empty.
		 */
		detectedSourceLanguage: FormControl<string | null | undefined>,

		/**
		 * The `model` type used for this translation. Valid values are
		 * listed in public documentation. Can be different from requested `model`.
		 * Present only if specific model type was explicitly requested.
		 */
		model: FormControl<string | null | undefined>,

		/** Text translated into the target language. */
		translatedText: FormControl<string | null | undefined>,
	}
	export function CreateTranslationsResourceFormGroup() {
		return new FormGroup<TranslationsResourceFormProperties>({
			detectedSourceLanguage: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			translatedText: new FormControl<string | null | undefined>(undefined),
		});

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
		 * @return {TranslationsListResponse} Successful response
		 */
		Language_translations_list(q: Array<string>, target: string, cid: Array<string> | null | undefined, format: Language_translations_listFormat | null | undefined, model: string | null | undefined, source: string | null | undefined): Observable<TranslationsListResponse> {
			return this.http.get<TranslationsListResponse>(this.baseUri + 'v2?' + q.map(z => `q=${encodeURIComponent(z)}`).join('&') + '&target=' + (target == null ? '' : encodeURIComponent(target)) + '&' + cid?.map(z => `cid=${encodeURIComponent(z)}`).join('&') + '&format=' + format + '&model=' + (model == null ? '' : encodeURIComponent(model)) + '&source=' + (source == null ? '' : encodeURIComponent(source)), {});
		}

		/**
		 * Translates input text, returning translated text.
		 * Post v2
		 * @return {TranslationsListResponse} Successful response
		 */
		Language_translations_translate(requestBody: TranslateTextRequest): Observable<TranslationsListResponse> {
			return this.http.post<TranslationsListResponse>(this.baseUri + 'v2', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detects the language of text within a request.
		 * Get v2/detect
		 * @param {Array<string>} q The input text upon which to perform language detection. Repeat this
		 * parameter to perform language detection on multiple text inputs.
		 * @return {DetectionsListResponse} Successful response
		 */
		Language_detections_list(q: Array<string>): Observable<DetectionsListResponse> {
			return this.http.get<DetectionsListResponse>(this.baseUri + 'v2/detect?' + q.map(z => `q=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Detects the language of text within a request.
		 * Post v2/detect
		 * @return {DetectionsListResponse} Successful response
		 */
		Language_detections_detect(requestBody: DetectLanguageRequest): Observable<DetectionsListResponse> {
			return this.http.post<DetectionsListResponse>(this.baseUri + 'v2/detect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of supported languages for translation.
		 * Get v2/languages
		 * @param {string} model The model type for which supported languages should be returned.
		 * @param {string} target The language to use to return localized, human readable names of supported
		 * languages.
		 * @return {LanguagesListResponse} Successful response
		 */
		Language_languages_list(model: string | null | undefined, target: string | null | undefined): Observable<LanguagesListResponse> {
			return this.http.get<LanguagesListResponse>(this.baseUri + 'v2/languages?model=' + (model == null ? '' : encodeURIComponent(model)) + '&target=' + (target == null ? '' : encodeURIComponent(target)), {});
		}
	}

	export enum Language_translations_listFormat { html = 0, text = 1 }

}

