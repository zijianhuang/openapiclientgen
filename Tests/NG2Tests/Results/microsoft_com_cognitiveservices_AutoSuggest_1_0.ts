import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Action {
		displayName?: string | null;
		isTopAction?: boolean | null;
		result?: Array<Thing>;
		serviceUrl?: string | null;
	}
	export interface ActionFormProperties {
		displayName: FormControl<string | null | undefined>,
		isTopAction: FormControl<boolean | null | undefined>,
		serviceUrl: FormControl<string | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			isTopAction: new FormControl<boolean | null | undefined>(undefined),
			serviceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a thing. */
	export interface Thing {

		/** The URL to get more information about the thing represented by this object. */
		url?: string | null;
	}

	/** Defines a thing. */
	export interface ThingFormProperties {

		/** The URL to get more information about the thing represented by this object. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateThingFormGroup() {
		return new FormGroup<ThingFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines an answer. */
	export interface Answer {
	}

	/** Defines an answer. */
	export interface AnswerFormProperties {
	}
	export function CreateAnswerFormGroup() {
		return new FormGroup<AnswerFormProperties>({
		});

	}


	/** The most generic kind of creative work, including books, movies, photographs, software programs, etc. */
	export interface CreativeWork {

		/** For internal use only. */
		about?: Array<Thing>;
		commentCount?: number | null;

		/** Defines a thing. */
		copyrightHolder?: Thing;
		copyrightYear?: number | null;

		/** Defines a thing. */
		creator?: Thing;
		disclaimer?: string | null;
		discussionUrl?: string | null;
		genre?: Array<string>;
		headLine?: string | null;
		isAccessibleForFree?: boolean | null;
		isFamilyFriendly?: boolean | null;

		/** Defines a thing. */
		mainEntity?: Thing;

		/** For internal use only. */
		mentions?: Array<Thing>;

		/** The source of the creative work. */
		provider?: Array<Thing>;

		/** Text content of this creative work */
		text?: string | null;

		/** The URL to a thumbnail of the item. */
		thumbnailUrl?: string | null;
	}

	/** The most generic kind of creative work, including books, movies, photographs, software programs, etc. */
	export interface CreativeWorkFormProperties {
		commentCount: FormControl<number | null | undefined>,
		copyrightYear: FormControl<number | null | undefined>,
		disclaimer: FormControl<string | null | undefined>,
		discussionUrl: FormControl<string | null | undefined>,
		headLine: FormControl<string | null | undefined>,
		isAccessibleForFree: FormControl<boolean | null | undefined>,
		isFamilyFriendly: FormControl<boolean | null | undefined>,

		/** Text content of this creative work */
		text: FormControl<string | null | undefined>,

		/** The URL to a thumbnail of the item. */
		thumbnailUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreativeWorkFormGroup() {
		return new FormGroup<CreativeWorkFormProperties>({
			commentCount: new FormControl<number | null | undefined>(undefined),
			copyrightYear: new FormControl<number | null | undefined>(undefined),
			disclaimer: new FormControl<string | null | undefined>(undefined),
			discussionUrl: new FormControl<string | null | undefined>(undefined),
			headLine: new FormControl<string | null | undefined>(undefined),
			isAccessibleForFree: new FormControl<boolean | null | undefined>(undefined),
			isFamilyFriendly: new FormControl<boolean | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the error that occurred. */
	export interface Error {

		/** Required */
		_type: string;

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

		/** The parameter's value in the request that was not valid. */
		value?: string | null;
	}

	/** Defines the error that occurred. */
	export interface ErrorFormProperties {

		/** Required */
		_type: FormControl<string | null | undefined>,

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

		/** The parameter's value in the request that was not valid. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<ErrorCode | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			moreDetails: new FormControl<string | null | undefined>(undefined),
			parameter: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { None = 'None', ServerError = 'ServerError', InvalidRequest = 'InvalidRequest', RateLimitExceeded = 'RateLimitExceeded', InvalidAuthorization = 'InvalidAuthorization', InsufficientAuthorization = 'InsufficientAuthorization' }


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


	/** Defines the query context that Bing used for the request. */
	export interface QueryContext {

		/** Required */
		_type: string;

		/** A Boolean value that indicates whether the specified query has adult intent. The value is true if the query has adult intent; otherwise, false. */
		adultIntent?: boolean | null;

		/** The query string to use to force Bing to use the original string. For example, if the query string is "saling downwind", the override query string will be "+saling downwind". Remember to encode the query string which results in "%2Bsaling+downwind". This field is included only if the original query string contains a spelling mistake. */
		alterationOverrideQuery?: string | null;

		/** The query string used by Bing to perform the query. Bing uses the altered query string if the original query string contained spelling mistakes. For example, if the query string is "saling downwind", the altered query string will be "sailing downwind". This field is included only if the original query string contains a spelling mistake. */
		alteredQuery?: string | null;

		/** A Boolean value that indicates whether Bing requires the user's location to provide accurate results. If you specified the user's location by using the X-MSEdge-ClientIP and X-Search-Location headers, you can ignore this field. For location aware queries, such as "today's weather" or "restaurants near me" that need the user's location to provide accurate results, this field is set to true. For location aware queries that include the location (for example, "Seattle weather"), this field is set to false. This field is also set to false for queries that are not location aware, such as "best sellers". */
		askUserForLocation?: boolean | null;
		isTransactional?: boolean | null;

		/**
		 * The query string as specified in the request.
		 * Required
		 */
		originalQuery: string;
	}

	/** Defines the query context that Bing used for the request. */
	export interface QueryContextFormProperties {

		/** Required */
		_type: FormControl<string | null | undefined>,

		/** A Boolean value that indicates whether the specified query has adult intent. The value is true if the query has adult intent; otherwise, false. */
		adultIntent: FormControl<boolean | null | undefined>,

		/** The query string to use to force Bing to use the original string. For example, if the query string is "saling downwind", the override query string will be "+saling downwind". Remember to encode the query string which results in "%2Bsaling+downwind". This field is included only if the original query string contains a spelling mistake. */
		alterationOverrideQuery: FormControl<string | null | undefined>,

		/** The query string used by Bing to perform the query. Bing uses the altered query string if the original query string contained spelling mistakes. For example, if the query string is "saling downwind", the altered query string will be "sailing downwind". This field is included only if the original query string contains a spelling mistake. */
		alteredQuery: FormControl<string | null | undefined>,

		/** A Boolean value that indicates whether Bing requires the user's location to provide accurate results. If you specified the user's location by using the X-MSEdge-ClientIP and X-Search-Location headers, you can ignore this field. For location aware queries, such as "today's weather" or "restaurants near me" that need the user's location to provide accurate results, this field is set to true. For location aware queries that include the location (for example, "Seattle weather"), this field is set to false. This field is also set to false for queries that are not location aware, such as "best sellers". */
		askUserForLocation: FormControl<boolean | null | undefined>,
		isTransactional: FormControl<boolean | null | undefined>,

		/**
		 * The query string as specified in the request.
		 * Required
		 */
		originalQuery: FormControl<string | null | undefined>,
	}
	export function CreateQueryContextFormGroup() {
		return new FormGroup<QueryContextFormProperties>({
			_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			adultIntent: new FormControl<boolean | null | undefined>(undefined),
			alterationOverrideQuery: new FormControl<string | null | undefined>(undefined),
			alteredQuery: new FormControl<string | null | undefined>(undefined),
			askUserForLocation: new FormControl<boolean | null | undefined>(undefined),
			isTransactional: new FormControl<boolean | null | undefined>(undefined),
			originalQuery: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a response. All schemas that could be returned at the root of a response should inherit from this */
	export interface Response {
		adaptiveCard?: string | null;
		immediateAction?: Array<Action>;
		potentialAction?: Array<Action>;
		preferredClickthroughUrl?: string | null;

		/** The URL that returns this resource. */
		readLink?: string | null;

		/** The URL To Bing's search result for this item. */
		webSearchUrl?: string | null;
	}

	/** Defines a response. All schemas that could be returned at the root of a response should inherit from this */
	export interface ResponseFormProperties {
		adaptiveCard: FormControl<string | null | undefined>,
		preferredClickthroughUrl: FormControl<string | null | undefined>,

		/** The URL that returns this resource. */
		readLink: FormControl<string | null | undefined>,

		/** The URL To Bing's search result for this item. */
		webSearchUrl: FormControl<string | null | undefined>,
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
			adaptiveCard: new FormControl<string | null | undefined>(undefined),
			preferredClickthroughUrl: new FormControl<string | null | undefined>(undefined),
			readLink: new FormControl<string | null | undefined>(undefined),
			webSearchUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response base */
	export interface ResponseBase {

		/** Required */
		_type: string;
	}

	/** Response base */
	export interface ResponseBaseFormProperties {

		/** Required */
		_type: FormControl<string | null | undefined>,
	}
	export function CreateResponseBaseFormGroup() {
		return new FormGroup<ResponseBaseFormProperties>({
			_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchAction {
		displayText?: string | null;
		query?: string | null;
		searchKind?: SearchActionSearchKind | null;
	}
	export interface SearchActionFormProperties {
		displayText: FormControl<string | null | undefined>,
		query: FormControl<string | null | undefined>,
		searchKind: FormControl<SearchActionSearchKind | null | undefined>,
	}
	export function CreateSearchActionFormGroup() {
		return new FormGroup<SearchActionFormProperties>({
			displayText: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			searchKind: new FormControl<SearchActionSearchKind | null | undefined>(undefined),
		});

	}

	export enum SearchActionSearchKind { WebSearch = 'WebSearch', HistorySearch = 'HistorySearch', DocumentSearch = 'DocumentSearch', TagSearch = 'TagSearch', LocationSearch = 'LocationSearch', CustomSearch = 'CustomSearch' }


	/** Defines a search result answer. */
	export interface SearchResultsAnswer {

		/** Defines the query context that Bing used for the request. */
		queryContext?: QueryContext;
	}

	/** Defines a search result answer. */
	export interface SearchResultsAnswerFormProperties {
	}
	export function CreateSearchResultsAnswerFormGroup() {
		return new FormGroup<SearchResultsAnswerFormProperties>({
		});

	}

	export interface Suggestions {

		/** Required */
		suggestionGroups: Array<SuggestionsSuggestionGroup>;
	}
	export interface SuggestionsFormProperties {
	}
	export function CreateSuggestionsFormGroup() {
		return new FormGroup<SuggestionsFormProperties>({
		});

	}

	export interface SuggestionsSuggestionGroup {

		/** Required */
		_type: string;

		/** Required */
		name: SuggestionsSuggestionGroupName;

		/** Required */
		searchSuggestions: Array<SearchAction>;
	}
	export interface SuggestionsSuggestionGroupFormProperties {

		/** Required */
		_type: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<SuggestionsSuggestionGroupName | null | undefined>,
	}
	export function CreateSuggestionsSuggestionGroupFormGroup() {
		return new FormGroup<SuggestionsSuggestionGroupFormProperties>({
			_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<SuggestionsSuggestionGroupName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SuggestionsSuggestionGroupName { Unknown = 'Unknown', Web = 'Web', StoreApps = 'StoreApps', SearchHistory = 'SearchHistory', PersonalSearchDocuments = 'PersonalSearchDocuments', PersonalSearchTags = 'PersonalSearchTags', Custom = 'Custom' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * The AutoSuggest API lets you send a search query to Bing and get back a list of query suggestions. This section provides technical details about the query parameters and headers that you use to request suggestions and the JSON response objects that contain them.
		 * Get Suggestions
		 * @param {string} cc A 2-character country code of the country where the results come from. This API supports only the United States market. If you specify this query parameter, it must be set to us. If you set this parameter, you must also specify the Accept-Language header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the mkt query parameter are mutually exclusive—do not specify both.
		 * @param {string} mkt The market where the results come from. You are strongly encouraged to always specify the market, if known. Specifying the market helps Bing route the request and return an appropriate and optimal response. This parameter and the cc query parameter are mutually exclusive—do not specify both.
		 * @param {string} q The user's search term.
		 * @param {AutoSuggestSafeSearch} safeSearch Filter suggestions for adult content. The following are the possible filter values. Off: Return suggestions with adult text, images, or videos. Moderate: Return suggestion with adult text but not adult images or videos. Strict: Do not return news articles with adult text, images, or videos. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
		 * @param {string} setLang The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the Accept-Language header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
		 * @param {Array<string>} ResponseFormat The media type to use for the response. The following are the possible case-insensitive values: JSON, JSONLD. The default is JSON. If you specify JSONLD, the response body includes JSON-LD objects that contain the search results.
		 * @return {Suggestions} Success.
		 */
		AutoSuggest(cc: string | null | undefined, mkt: string | null | undefined, q: string, safeSearch: AutoSuggestSafeSearch | null | undefined, setLang: string | null | undefined, ResponseFormat: Array<string> | null | undefined): Observable<Suggestions> {
			return this.http.get<Suggestions>(this.baseUri + 'Suggestions?cc=' + (cc == null ? '' : encodeURIComponent(cc)) + '&mkt=' + (mkt == null ? '' : encodeURIComponent(mkt)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&safeSearch=' + safeSearch + '&setLang=' + (setLang == null ? '' : encodeURIComponent(setLang)) + '&' + ResponseFormat?.map(z => `ResponseFormat=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export enum AutoSuggestX_BingApis_SDK { true = 'true' }

	export enum AutoSuggestSafeSearch { Off = 'Off', Moderate = 'Moderate', Strict = 'Strict' }

}

