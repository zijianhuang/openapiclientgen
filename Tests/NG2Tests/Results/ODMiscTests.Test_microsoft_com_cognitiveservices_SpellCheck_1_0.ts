import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Answer {
	}
	export interface AnswerFormProperties {
	}
	export function CreateAnswerFormGroup() {
		return new FormGroup<AnswerFormProperties>({
		});

	}


	/** Defines the error that occurred. */
	export interface Error {

		/**
		 * The error code that identifies the category of error.
		 * Required
		 */
		code: ErrorCode;

		/**
		 * A description of the error.
		 * Required
		 */
		message: string;

		/** A description that provides additional information about the error. */
		moreDetails?: string | null;

		/** The parameter in the request that caused the error. */
		parameter?: string | null;

		/** The error code that further helps to identify the error. */
		subCode?: ErrorSubCode | null;

		/** The parameter's value in the request that was not valid. */
		value?: string | null;
	}

	/** Defines the error that occurred. */
	export interface ErrorFormProperties {

		/**
		 * The error code that identifies the category of error.
		 * Required
		 */
		code: FormControl<ErrorCode | null | undefined>,

		/**
		 * A description of the error.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** A description that provides additional information about the error. */
		moreDetails: FormControl<string | null | undefined>,

		/** The parameter in the request that caused the error. */
		parameter: FormControl<string | null | undefined>,

		/** The error code that further helps to identify the error. */
		subCode: FormControl<ErrorSubCode | null | undefined>,

		/** The parameter's value in the request that was not valid. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<ErrorCode | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			moreDetails: new FormControl<string | null | undefined>(undefined),
			parameter: new FormControl<string | null | undefined>(undefined),
			subCode: new FormControl<ErrorSubCode | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { None = 0, ServerError = 1, InvalidRequest = 2, RateLimitExceeded = 3, InvalidAuthorization = 4, InsufficientAuthorization = 5 }

	export enum ErrorSubCode { UnexpectedError = 0, ResourceError = 1, NotImplemented = 2, ParameterMissing = 3, ParameterInvalidValue = 4, HttpNotAllowed = 5, Blocked = 6, AuthorizationMissing = 7, AuthorizationRedundancy = 8, AuthorizationDisabled = 9, AuthorizationExpired = 10 }


	/** The top-level response that represents a failed request. */
	export interface ErrorResponse {

		/**
		 * A list of errors that describe the reasons why the request failed.
		 * Required
		 */
		errors: Array<Error>;
	}

	/** The top-level response that represents a failed request. */
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


	/** Defines the identity of a resource. */
	export interface Identifiable {

		/** A String identifier. */
		id?: string | null;
	}

	/** Defines the identity of a resource. */
	export interface IdentifiableFormProperties {

		/** A String identifier. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateIdentifiableFormGroup() {
		return new FormGroup<IdentifiableFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a response. All schemas that could be returned at the root of a response should inherit from this */
	export interface Response {
	}

	/** Defines a response. All schemas that could be returned at the root of a response should inherit from this */
	export interface ResponseFormProperties {
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
		});

	}

	export interface ResponseBase {

		/** Required */
		_type: string;
	}
	export interface ResponseBaseFormProperties {

		/** Required */
		_type: FormControl<string | null | undefined>,
	}
	export function CreateResponseBaseFormGroup() {
		return new FormGroup<ResponseBaseFormProperties>({
			_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SpellCheck {

		/** Required */
		flaggedTokens: Array<SpellingFlaggedToken>;
	}
	export interface SpellCheckFormProperties {
	}
	export function CreateSpellCheckFormGroup() {
		return new FormGroup<SpellCheckFormProperties>({
		});

	}

	export interface SpellingFlaggedToken {

		/** Required */
		offset: number;
		pingUrlSuffix?: string | null;
		suggestions?: Array<SpellingTokenSuggestion>;

		/** Required */
		token: string;

		/** Required */
		type: SpellingFlaggedTokenType;
	}
	export interface SpellingFlaggedTokenFormProperties {

		/** Required */
		offset: FormControl<number | null | undefined>,
		pingUrlSuffix: FormControl<string | null | undefined>,

		/** Required */
		token: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<SpellingFlaggedTokenType | null | undefined>,
	}
	export function CreateSpellingFlaggedTokenFormGroup() {
		return new FormGroup<SpellingFlaggedTokenFormProperties>({
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pingUrlSuffix: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<SpellingFlaggedTokenType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SpellingTokenSuggestion {
		pingUrlSuffix?: string | null;
		score?: number | null;

		/** Required */
		suggestion: string;
	}
	export interface SpellingTokenSuggestionFormProperties {
		pingUrlSuffix: FormControl<string | null | undefined>,
		score: FormControl<number | null | undefined>,

		/** Required */
		suggestion: FormControl<string | null | undefined>,
	}
	export function CreateSpellingTokenSuggestionFormGroup() {
		return new FormGroup<SpellingTokenSuggestionFormProperties>({
			pingUrlSuffix: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			suggestion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SpellingFlaggedTokenType { UnknownToken = 0, RepeatedToken = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * The Bing Spell Check API lets you perform contextual grammar and spell checking. Bing has developed a web-based spell-checker that leverages machine learning and statistical machine translation to dynamically train a constantly evolving and highly contextual algorithm. The spell-checker is based on a massive corpus of web searches and documents.
		 * Post spellcheck
		 * @param {SpellCheckerActionType} ActionType A string that's used by logging to determine whether the request is coming from an interactive session or a page load. The following are the possible values. 1) Edit—The request is from an interactive session 2) Load—The request is from a page load
		 * @param {string} AppName The unique name of your app. The name must be known by Bing. Do not include this parameter unless you have previously contacted Bing to get a unique app name. To get a unique name, contact your Bing Business Development manager.
		 * @param {string} cc A 2-character country code of the country where the results come from. This API supports only the United States market. If you specify this query parameter, it must be set to us. If you set this parameter, you must also specify the Accept-Language header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the mkt query parameter are mutually exclusive—do not specify both.
		 * @param {string} ClientMachineName A unique name of the device that the request is being made from. Generate a unique value for each device (the value is unimportant). The service uses the ID to help debug issues and improve the quality of corrections.
		 * @param {string} DocId A unique ID that identifies the document that the text belongs to. Generate a unique value for each document (the value is unimportant). The service uses the ID to help debug issues and improve the quality of corrections.
		 * @param {string} mkt The market where the results come from. You are strongly encouraged to always specify the market, if known. Specifying the market helps Bing route the request and return an appropriate and optimal response. This parameter and the cc query parameter are mutually exclusive—do not specify both.
		 * @param {string} SessionId A unique ID that identifies this user session. Generate a unique value for each user session (the value is unimportant). The service uses the ID to help debug issues and improve the quality of corrections
		 * @param {string} SetLang The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the Accept-Language header are mutually exclusive—do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
		 * @param {string} UserId A unique ID that identifies the user. Generate a unique value for each user (the value is unimportant). The service uses the ID to help debug issues and improve the quality of corrections.
		 * @param {SpellCheckerMode} Mode The type of spelling and grammar checks to perform. The following are the possible values (the values are case insensitive). The default is Proof. 1) Proof—Finds most spelling and grammar mistakes. 2) Spell—Finds most spelling mistakes but does not find some of the grammar errors that Proof catches (for example, capitalization and repeated words)
		 * @param {string} PreContextText A string that gives context to the text string. For example, the text string petal is valid. However, if you set preContextText to bike, the context changes and the text string becomes not valid. In this case, the API suggests that you change petal to pedal (as in bike pedal). This text is not checked for grammar or spelling errors. The combined length of the text string, preContextText string, and postContextText string may not exceed 10,000 characters. You may specify this parameter in the query string of a GET request or in the body of a POST request.
		 * @param {string} PostContextText A string that gives context to the text string. For example, the text string read is valid. However, if you set postContextText to carpet, the context changes and the text string becomes not valid. In this case, the API suggests that you change read to red (as in red carpet). This text is not checked for grammar or spelling errors. The combined length of the text string, preContextText string, and postContextText string may not exceed 10,000 characters. You may specify this parameter in the query string of a GET request or in the body of a POST request.
		 * @param {string} Text The text string to check for spelling and grammar errors. The combined length of the text string, preContextText string, and postContextText string may not exceed 10,000 characters. You may specify this parameter in the query string of a GET request or in the body of a POST request. Because of the query string length limit, you'll typically use a POST request unless you're checking only short strings.
		 * @return {SpellCheck} Success.
		 */
		SpellChecker(ActionType: SpellCheckerActionType | null | undefined, AppName: string | null | undefined, cc: string | null | undefined, ClientMachineName: string | null | undefined, DocId: string | null | undefined, mkt: string | null | undefined, SessionId: string | null | undefined, SetLang: string | null | undefined, UserId: string | null | undefined, Mode: SpellCheckerMode | null | undefined, PreContextText: string | null | undefined, PostContextText: string | null | undefined, Text: string): Observable<SpellCheck> {
			return this.http.post<SpellCheck>(this.baseUri + 'spellcheck?ActionType=' + ActionType + '&AppName=' + (AppName == null ? '' : encodeURIComponent(AppName)) + '&cc=' + (cc == null ? '' : encodeURIComponent(cc)) + '&ClientMachineName=' + (ClientMachineName == null ? '' : encodeURIComponent(ClientMachineName)) + '&DocId=' + (DocId == null ? '' : encodeURIComponent(DocId)) + '&mkt=' + (mkt == null ? '' : encodeURIComponent(mkt)) + '&SessionId=' + (SessionId == null ? '' : encodeURIComponent(SessionId)) + '&SetLang=' + (SetLang == null ? '' : encodeURIComponent(SetLang)) + '&UserId=' + (UserId == null ? '' : encodeURIComponent(UserId)) + '&Mode=' + Mode + '&PreContextText=' + (PreContextText == null ? '' : encodeURIComponent(PreContextText)) + '&PostContextText=' + (PostContextText == null ? '' : encodeURIComponent(PostContextText)) + '&Text=' + (Text == null ? '' : encodeURIComponent(Text)), null, {});
		}
	}

	export enum SpellCheckerX_BingApis_SDK { true = 0 }

	export enum SpellCheckerActionType { Edit = 0, Load = 1 }

	export enum SpellCheckerMode { proof = 0, spell = 1 }

}

