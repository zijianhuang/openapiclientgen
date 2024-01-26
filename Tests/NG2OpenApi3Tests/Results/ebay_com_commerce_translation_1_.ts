import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This type defines the fields that can be returned in an error. */
	export interface Error {

		/** Identifies the type of erro. */
		category?: string | null;

		/** Name for the primary system where the error occurred. This is relevant for application errors. */
		domain?: string | null;

		/** A unique number to identify the error. */
		errorId?: number | null;

		/** An array of request elements most closely associated to the error. */
		inputRefIds?: Array<string>;

		/** A more detailed explanation of the error. */
		longMessage?: string | null;

		/** Information on how to correct the problem, in the end user's terms and language where applicable. */
		message?: string | null;

		/** An array of request elements most closely associated to the error. */
		outputRefIds?: Array<string>;

		/** An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned. */
		parameters?: Array<ErrorParameter>;

		/** Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc. */
		subdomain?: string | null;
	}

	/** This type defines the fields that can be returned in an error. */
	export interface ErrorFormProperties {

		/** Identifies the type of erro. */
		category: FormControl<string | null | undefined>,

		/** Name for the primary system where the error occurred. This is relevant for application errors. */
		domain: FormControl<string | null | undefined>,

		/** A unique number to identify the error. */
		errorId: FormControl<number | null | undefined>,

		/** A more detailed explanation of the error. */
		longMessage: FormControl<string | null | undefined>,

		/** Information on how to correct the problem, in the end user's terms and language where applicable. */
		message: FormControl<string | null | undefined>,

		/** Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc. */
		subdomain: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			errorId: new FormControl<number | null | undefined>(undefined),
			longMessage: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			subdomain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorParameter {

		/** The object of the error. */
		name?: string | null;

		/** The value of the object. */
		value?: string | null;
	}
	export interface ErrorParameterFormProperties {

		/** The object of the error. */
		name: FormControl<string | null | undefined>,

		/** The value of the object. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateErrorParameterFormGroup() {
		return new FormGroup<ErrorParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TranslateRequest {

		/** The language of the input text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a> */
		from?: string | null;

		/** The input text. */
		text?: Array<string>;

		/** The language to use for the translation of th einput text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a> */
		to?: string | null;

		/** The context of the translation. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/TranslationContextEnum.html'>eBay API documentation</a> */
		translationContext?: string | null;
	}
	export interface TranslateRequestFormProperties {

		/** The language of the input text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a> */
		from: FormControl<string | null | undefined>,

		/** The language to use for the translation of th einput text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a> */
		to: FormControl<string | null | undefined>,

		/** The context of the translation. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/TranslationContextEnum.html'>eBay API documentation</a> */
		translationContext: FormControl<string | null | undefined>,
	}
	export function CreateTranslateRequestFormGroup() {
		return new FormGroup<TranslateRequestFormProperties>({
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			translationContext: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TranslateResponse {

		/** The list of translations. */
		translations?: Array<Translation>;
	}
	export interface TranslateResponseFormProperties {
	}
	export function CreateTranslateResponseFormGroup() {
		return new FormGroup<TranslateResponseFormProperties>({
		});

	}

	export interface Translation {

		/** The language of the input text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a> */
		from?: string | null;

		/** Original text. */
		originalText?: string | null;

		/** The language to use for the translation of th einput text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a> */
		to?: string | null;

		/** Translated text. */
		translatedText?: string | null;
	}
	export interface TranslationFormProperties {

		/** The language of the input text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a> */
		from: FormControl<string | null | undefined>,

		/** Original text. */
		originalText: FormControl<string | null | undefined>,

		/** The language to use for the translation of th einput text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a> */
		to: FormControl<string | null | undefined>,

		/** Translated text. */
		translatedText: FormControl<string | null | undefined>,
	}
	export function CreateTranslationFormGroup() {
		return new FormGroup<TranslationFormProperties>({
			from: new FormControl<string | null | undefined>(undefined),
			originalText: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			translatedText: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Translates input text inot a given language.
		 * Post translate
		 * @return {TranslateResponse} OK
		 */
		Translate(requestBody: TranslateRequest): Observable<TranslateResponse> {
			return this.http.post<TranslateResponse>(this.baseUri + 'translate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

