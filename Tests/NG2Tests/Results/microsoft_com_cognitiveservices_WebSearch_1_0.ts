import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Answer {
		followUpQueries?: Array<Query>;
	}
	export interface AnswerFormProperties {
	}
	export function CreateAnswerFormGroup() {
		return new FormGroup<AnswerFormProperties>({
		});

	}


	/** Defines a search query. */
	export interface Query {

		/** The display version of the query term. This version of the query term may contain special characters that highlight the search term found in the query string. The string contains the highlighting characters only if the query enabled hit highlighting */
		displayText?: string | null;
		searchLink?: string | null;

		/**
		 * The query string. Use this string as the query term in a new search request.
		 * Required
		 */
		text: string;

		/** Defines an image */
		thumbnail?: ImageObject;

		/** The URL that takes the user to the Bing search results page for the query.Only related search results include this field. */
		webSearchUrl?: string | null;
	}

	/** Defines a search query. */
	export interface QueryFormProperties {

		/** The display version of the query term. This version of the query term may contain special characters that highlight the search term found in the query string. The string contains the highlighting characters only if the query enabled hit highlighting */
		displayText: FormControl<string | null | undefined>,
		searchLink: FormControl<string | null | undefined>,

		/**
		 * The query string. Use this string as the query term in a new search request.
		 * Required
		 */
		text: FormControl<string | null | undefined>,

		/** The URL that takes the user to the Bing search results page for the query.Only related search results include this field. */
		webSearchUrl: FormControl<string | null | undefined>,
	}
	export function CreateQueryFormGroup() {
		return new FormGroup<QueryFormProperties>({
			displayText: new FormControl<string | null | undefined>(undefined),
			searchLink: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			webSearchUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines an image */
	export interface ImageObject {

		/** Defines an image */
		thumbnail?: ImageObject;
	}

	/** Defines an image */
	export interface ImageObjectFormProperties {
	}
	export function CreateImageObjectFormGroup() {
		return new FormGroup<ImageObjectFormProperties>({
		});

	}

	export interface Article {

		/** The number of words in the text of the Article. */
		wordCount?: number | null;
	}
	export interface ArticleFormProperties {

		/** The number of words in the text of the Article. */
		wordCount: FormControl<number | null | undefined>,
	}
	export function CreateArticleFormGroup() {
		return new FormGroup<ArticleFormProperties>({
			wordCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines an expression and its answer */
	export interface Computation {

		/**
		 * The math or conversion expression. If the query contains a request to convert units of measure (for example, meters to feet), this field contains the from units and value contains the to units. If the query contains a mathematical expression such as 2+2, this field contains the expression and value contains the answer. Note that mathematical expressions may be normalized. For example, if the query was sqrt(4^2+8^2), the normalized expression may be sqrt((4^2)+(8^2)). If the user's query is a math question and the textDecorations query parameter is set to true, the expression string may include formatting markers. For example, if the user's query is log(2), the normalized expression includes the subscript markers. For more information, see Hit Highlighting.
		 * Required
		 */
		expression: string;

		/**
		 * The expression's answer.
		 * Required
		 */
		value: string;
	}

	/** Defines an expression and its answer */
	export interface ComputationFormProperties {

		/**
		 * The math or conversion expression. If the query contains a request to convert units of measure (for example, meters to feet), this field contains the from units and value contains the to units. If the query contains a mathematical expression such as 2+2, this field contains the expression and value contains the answer. Note that mathematical expressions may be normalized. For example, if the query was sqrt(4^2+8^2), the normalized expression may be sqrt((4^2)+(8^2)). If the user's query is a math question and the textDecorations query parameter is set to true, the expression string may include formatting markers. For example, if the user's query is log(2), the normalized expression includes the subscript markers. For more information, see Hit Highlighting.
		 * Required
		 */
		expression: FormControl<string | null | undefined>,

		/**
		 * The expression's answer.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateComputationFormGroup() {
		return new FormGroup<ComputationFormProperties>({
			expression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreativeWork {

		/** The source of the creative work. */
		provider?: Array<Thing>;
		text?: string | null;

		/** The URL to a thumbnail of the item. */
		thumbnailUrl?: string | null;
	}
	export interface CreativeWorkFormProperties {
		text: FormControl<string | null | undefined>,

		/** The URL to a thumbnail of the item. */
		thumbnailUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreativeWorkFormGroup() {
		return new FormGroup<CreativeWorkFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Thing {

		/** An ID that uniquely identifies this item. */
		bingId?: string | null;

		/** A short description of the item. */
		description?: string | null;

		/** Defines an image */
		image?: ImageObject;

		/** The name of the thing represented by this object. */
		name?: string | null;

		/** The URL to get more information about the thing represented by this object. */
		url?: string | null;
	}
	export interface ThingFormProperties {

		/** An ID that uniquely identifies this item. */
		bingId: FormControl<string | null | undefined>,

		/** A short description of the item. */
		description: FormControl<string | null | undefined>,

		/** The name of the thing represented by this object. */
		name: FormControl<string | null | undefined>,

		/** The URL to get more information about the thing represented by this object. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateThingFormGroup() {
		return new FormGroup<ThingFormProperties>({
			bingId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
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

	export enum ErrorCode { None = 'None', ServerError = 'ServerError', InvalidRequest = 'InvalidRequest', RateLimitExceeded = 'RateLimitExceeded', InvalidAuthorization = 'InvalidAuthorization', InsufficientAuthorization = 'InsufficientAuthorization' }

	export enum ErrorSubCode { UnexpectedError = 'UnexpectedError', ResourceError = 'ResourceError', NotImplemented = 'NotImplemented', ParameterMissing = 'ParameterMissing', ParameterInvalidValue = 'ParameterInvalidValue', HttpNotAllowed = 'HttpNotAllowed', Blocked = 'Blocked', AuthorizationMissing = 'AuthorizationMissing', AuthorizationRedundancy = 'AuthorizationRedundancy', AuthorizationDisabled = 'AuthorizationDisabled', AuthorizationExpired = 'AuthorizationExpired' }


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


	/** Defines an image answer */
	export interface Images {
		nextOffset?: number | null;
		queryExpansions?: Array<Query>;
		relatedSearches?: Array<Query>;
		similarTerms?: Array<Query>;

		/**
		 * A list of image objects that are relevant to the query. If there are no results, the List is empty.
		 * Required
		 */
		value: Array<ImageObject>;
	}

	/** Defines an image answer */
	export interface ImagesFormProperties {
		nextOffset: FormControl<number | null | undefined>,
	}
	export function CreateImagesFormGroup() {
		return new FormGroup<ImagesFormProperties>({
			nextOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Intangible {
	}
	export interface IntangibleFormProperties {
	}
	export function CreateIntangibleFormGroup() {
		return new FormGroup<IntangibleFormProperties>({
		});

	}

	export interface MediaObject {

		/** Original URL to retrieve the source (file) for the media object (e.g the source URL for the image). */
		contentUrl?: string | null;

		/** The height of the source media object, in pixels. */
		height?: number | null;

		/** URL of the page that hosts the media object. */
		hostPageUrl?: string | null;

		/** The width of the source media object, in pixels. */
		width?: number | null;
	}
	export interface MediaObjectFormProperties {

		/** Original URL to retrieve the source (file) for the media object (e.g the source URL for the image). */
		contentUrl: FormControl<string | null | undefined>,

		/** The height of the source media object, in pixels. */
		height: FormControl<number | null | undefined>,

		/** URL of the page that hosts the media object. */
		hostPageUrl: FormControl<string | null | undefined>,

		/** The width of the source media object, in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateMediaObjectFormGroup() {
		return new FormGroup<MediaObjectFormProperties>({
			contentUrl: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			hostPageUrl: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines a news answer. */
	export interface News {
		location?: string | null;

		/**
		 * An array of NewsArticle objects that contain information about news articles that are relevant to the query. If there are no results to return for the request, the array is empty.
		 * Required
		 */
		value: Array<NewsArticle>;
	}

	/** Defines a news answer. */
	export interface NewsFormProperties {
		location: FormControl<string | null | undefined>,
	}
	export function CreateNewsFormGroup() {
		return new FormGroup<NewsFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a news article. */
	export interface NewsArticle {
	}

	/** Defines a news article. */
	export interface NewsArticleFormProperties {
	}
	export function CreateNewsArticleFormGroup() {
		return new FormGroup<NewsArticleFormProperties>({
		});

	}


	/** Defines a local entity answer. */
	export interface Places {

		/**
		 * A list of local entities, such as restaurants or hotels.
		 * Required
		 */
		value: Array<Thing>;
	}

	/** Defines a local entity answer. */
	export interface PlacesFormProperties {
	}
	export function CreatePlacesFormGroup() {
		return new FormGroup<PlacesFormProperties>({
		});

	}


	/** Defines the query context that Bing used for the request. */
	export interface QueryContext {

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
			adultIntent: new FormControl<boolean | null | undefined>(undefined),
			alterationOverrideQuery: new FormControl<string | null | undefined>(undefined),
			alteredQuery: new FormControl<string | null | undefined>(undefined),
			askUserForLocation: new FormControl<boolean | null | undefined>(undefined),
			isTransactional: new FormControl<boolean | null | undefined>(undefined),
			originalQuery: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a search results group, such as mainline. */
	export interface RankingRankingGroup {

		/**
		 * A list of search result items to display in the group.
		 * Required
		 */
		items: Array<RankingRankingItem>;
	}

	/** Defines a search results group, such as mainline. */
	export interface RankingRankingGroupFormProperties {
	}
	export function CreateRankingRankingGroupFormGroup() {
		return new FormGroup<RankingRankingGroupFormProperties>({
		});

	}


	/** Defines a search result item to display */
	export interface RankingRankingItem {

		/**
		 * The answer that contains the item to display. Use the type to find the answer in the SearchResponse object. The type is the name of a SearchResponse field.
		 * Required
		 */
		answerType: RankingRankingItemAnswerType;
		htmlIndex?: number | null;

		/** A zero-based index of the item in the answer.If the item does not include this field, display all items in the answer. For example, display all news articles in the News answer. */
		resultIndex?: number | null;
		screenshotIndex?: number | null;
		textualIndex?: number | null;

		/** Defines the identity of a resource. */
		value?: Identifiable;
	}

	/** Defines a search result item to display */
	export interface RankingRankingItemFormProperties {

		/**
		 * The answer that contains the item to display. Use the type to find the answer in the SearchResponse object. The type is the name of a SearchResponse field.
		 * Required
		 */
		answerType: FormControl<RankingRankingItemAnswerType | null | undefined>,
		htmlIndex: FormControl<number | null | undefined>,

		/** A zero-based index of the item in the answer.If the item does not include this field, display all items in the answer. For example, display all news articles in the News answer. */
		resultIndex: FormControl<number | null | undefined>,
		screenshotIndex: FormControl<number | null | undefined>,
		textualIndex: FormControl<number | null | undefined>,
	}
	export function CreateRankingRankingItemFormGroup() {
		return new FormGroup<RankingRankingItemFormProperties>({
			answerType: new FormControl<RankingRankingItemAnswerType | null | undefined>(undefined, [Validators.required]),
			htmlIndex: new FormControl<number | null | undefined>(undefined),
			resultIndex: new FormControl<number | null | undefined>(undefined),
			screenshotIndex: new FormControl<number | null | undefined>(undefined),
			textualIndex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum RankingRankingItemAnswerType { WebPages = 'WebPages', Images = 'Images', SpellSuggestions = 'SpellSuggestions', News = 'News', RelatedSearches = 'RelatedSearches', Videos = 'Videos', Computation = 'Computation', TimeZone = 'TimeZone' }


	/** Defines where on the search results page content should be placed and in what order. */
	export interface RankingRankingResponse {

		/** Defines a search results group, such as mainline. */
		mainline?: RankingRankingGroup;

		/** Defines a search results group, such as mainline. */
		pole?: RankingRankingGroup;

		/** Defines a search results group, such as mainline. */
		sidebar?: RankingRankingGroup;
	}

	/** Defines where on the search results page content should be placed and in what order. */
	export interface RankingRankingResponseFormProperties {
	}
	export function CreateRankingRankingResponseFormGroup() {
		return new FormGroup<RankingRankingResponseFormProperties>({
		});

	}


	/** Defines a list of related queries made by others. */
	export interface RelatedSearchesRelatedSearchAnswer {

		/**
		 * A list of related queries that were made by others.
		 * Required
		 */
		value: Array<Query>;
	}

	/** Defines a list of related queries made by others. */
	export interface RelatedSearchesRelatedSearchAnswerFormProperties {
	}
	export function CreateRelatedSearchesRelatedSearchAnswerFormGroup() {
		return new FormGroup<RelatedSearchesRelatedSearchAnswerFormProperties>({
		});

	}


	/** Defines a response. All schemas that could be returned at the root of a response should inherit from this */
	export interface Response {

		/** The URL To Bing's search result for this item. */
		webSearchUrl?: string | null;
	}

	/** Defines a response. All schemas that could be returned at the root of a response should inherit from this */
	export interface ResponseFormProperties {

		/** The URL To Bing's search result for this item. */
		webSearchUrl: FormControl<string | null | undefined>,
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
			webSearchUrl: new FormControl<string | null | undefined>(undefined),
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


	/** Defines the top-level object that the response includes when the request succeeds. */
	export interface SearchResponse {

		/** Defines an expression and its answer */
		computation?: Computation;

		/** Defines an image answer */
		images?: Images;

		/** Defines a news answer. */
		news?: News;

		/** Defines the query context that Bing used for the request. */
		queryContext?: QueryContext;

		/** Defines where on the search results page content should be placed and in what order. */
		rankingResponse?: RankingRankingResponse;

		/** Defines a list of related queries made by others. */
		relatedSearches?: RelatedSearchesRelatedSearchAnswer;

		/** Defines a suggested query string that likely represents the user's intent. The search results include this response if Bing determines that the user may have intended to search for something different. For example, if the user searches for alon brown, Bing may determine that the user likely intended to search for Alton Brown instead (based on past searches by others of Alon Brown). */
		spellSuggestions?: SpellSuggestions;

		/** Defines the data and time of one or more geographic locations. */
		timeZone?: TimeZone;

		/** Defines a video answer. */
		videos?: Videos;

		/** Defines a list of relevant webpage links. */
		webPages?: WebWebAnswer;
	}

	/** Defines the top-level object that the response includes when the request succeeds. */
	export interface SearchResponseFormProperties {
	}
	export function CreateSearchResponseFormGroup() {
		return new FormGroup<SearchResponseFormProperties>({
		});

	}


	/** Defines a suggested query string that likely represents the user's intent. The search results include this response if Bing determines that the user may have intended to search for something different. For example, if the user searches for alon brown, Bing may determine that the user likely intended to search for Alton Brown instead (based on past searches by others of Alon Brown). */
	export interface SpellSuggestions {

		/**
		 * A list of suggested query strings that may represent the user's intention. The list contains only one Query object.
		 * Required
		 */
		value: Array<Query>;
	}

	/** Defines a suggested query string that likely represents the user's intent. The search results include this response if Bing determines that the user may have intended to search for something different. For example, if the user searches for alon brown, Bing may determine that the user likely intended to search for Alton Brown instead (based on past searches by others of Alon Brown). */
	export interface SpellSuggestionsFormProperties {
	}
	export function CreateSpellSuggestionsFormGroup() {
		return new FormGroup<SpellSuggestionsFormProperties>({
		});

	}


	/** Defines the data and time of one or more geographic locations. */
	export interface TimeZone {

		/** A list of dates and times of nearby time zones. */
		otherCityTimes?: Array<TimeZoneTimeZoneInformation>;

		/**
		 * Defines a date and time for a geographical location.
		 * Required
		 */
		primaryCityTime: TimeZoneTimeZoneInformation;
	}

	/** Defines the data and time of one or more geographic locations. */
	export interface TimeZoneFormProperties {
	}
	export function CreateTimeZoneFormGroup() {
		return new FormGroup<TimeZoneFormProperties>({
		});

	}


	/** Defines a date and time for a geographical location. */
	export interface TimeZoneTimeZoneInformation {

		/**
		 * The name of the geographical location.For example, County; City; City, State; City, State, Country; or Time Zone.
		 * Required
		 */
		location: string;

		/**
		 * The data and time specified in the form, YYYY-MM-DDThh;mm:ss.ssssssZ.
		 * Required
		 */
		time: string;

		/**
		 * The offset from UTC. For example, UTC-7.
		 * Required
		 */
		utcOffset: string;
	}

	/** Defines a date and time for a geographical location. */
	export interface TimeZoneTimeZoneInformationFormProperties {

		/**
		 * The name of the geographical location.For example, County; City; City, State; City, State, Country; or Time Zone.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * The data and time specified in the form, YYYY-MM-DDThh;mm:ss.ssssssZ.
		 * Required
		 */
		time: FormControl<string | null | undefined>,

		/**
		 * The offset from UTC. For example, UTC-7.
		 * Required
		 */
		utcOffset: FormControl<string | null | undefined>,
	}
	export function CreateTimeZoneTimeZoneInformationFormGroup() {
		return new FormGroup<TimeZoneTimeZoneInformationFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			utcOffset: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a video answer. */
	export interface Videos {
		nextOffset?: number | null;
		queryExpansions?: Array<Query>;
		relatedSearches?: Array<Query>;

		/**
		 * A list of video objects that are relevant to the query.
		 * Required
		 */
		value: Array<VideoObject>;
	}

	/** Defines a video answer. */
	export interface VideosFormProperties {
		nextOffset: FormControl<number | null | undefined>,
	}
	export function CreateVideosFormGroup() {
		return new FormGroup<VideosFormProperties>({
			nextOffset: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines a video object that is relevant to the query. */
	export interface VideoObject {
		allowHttpsEmbed?: boolean | null;
		allowMobileEmbed?: boolean | null;
		embedHtml?: string | null;
		isSuperfresh?: boolean | null;
		motionThumbnailId?: string | null;
		motionThumbnailUrl?: string | null;

		/** Defines an image */
		thumbnail?: ImageObject;
		videoId?: string | null;
		viewCount?: number | null;
	}

	/** Defines a video object that is relevant to the query. */
	export interface VideoObjectFormProperties {
		allowHttpsEmbed: FormControl<boolean | null | undefined>,
		allowMobileEmbed: FormControl<boolean | null | undefined>,
		embedHtml: FormControl<string | null | undefined>,
		isSuperfresh: FormControl<boolean | null | undefined>,
		motionThumbnailId: FormControl<string | null | undefined>,
		motionThumbnailUrl: FormControl<string | null | undefined>,
		videoId: FormControl<string | null | undefined>,
		viewCount: FormControl<number | null | undefined>,
	}
	export function CreateVideoObjectFormGroup() {
		return new FormGroup<VideoObjectFormProperties>({
			allowHttpsEmbed: new FormControl<boolean | null | undefined>(undefined),
			allowMobileEmbed: new FormControl<boolean | null | undefined>(undefined),
			embedHtml: new FormControl<string | null | undefined>(undefined),
			isSuperfresh: new FormControl<boolean | null | undefined>(undefined),
			motionThumbnailId: new FormControl<string | null | undefined>(undefined),
			motionThumbnailUrl: new FormControl<string | null | undefined>(undefined),
			videoId: new FormControl<string | null | undefined>(undefined),
			viewCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines a list of relevant webpage links. */
	export interface WebWebAnswer {

		/** A Boolean value that indicates whether the response excluded some results from the answer. If Bing excluded some results, the value is true. */
		someResultsRemoved?: boolean | null;

		/**
		 * A list of webpages that are relevant to the query.
		 * Required
		 */
		value: Array<WebPage>;
	}

	/** Defines a list of relevant webpage links. */
	export interface WebWebAnswerFormProperties {

		/** A Boolean value that indicates whether the response excluded some results from the answer. If Bing excluded some results, the value is true. */
		someResultsRemoved: FormControl<boolean | null | undefined>,
	}
	export function CreateWebWebAnswerFormGroup() {
		return new FormGroup<WebWebAnswerFormProperties>({
			someResultsRemoved: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Defines a webpage that is relevant to the query. */
	export interface WebPage {

		/** The last time that Bing crawled the webpage. The date is in the form, YYYY-MM-DDTHH:MM:SS. For example, 2015-04-13T05:23:39. */
		dateLastCrawled?: string | null;

		/** A list of links to related content that Bing found in the website that contains this webpage. The Webpage object in this context includes only the name, url, urlPingSuffix, and snippet fields. */
		deepLinks?: Array<WebPage>;

		/** The display URL of the webpage. The URL is meant for display purposes only and is not well formed. */
		displayUrl?: string | null;

		/** Defines an image */
		primaryImageOfPage?: ImageObject;

		/** A list of search tags that the webpage owner specified on the webpage. The API returns only indexed search tags. The name field of the MetaTag object contains the indexed search tag. Search tags begin with search.* (for example, search.assetId). The content field contains the tag's value. */
		searchTags?: Array<WebMetaTag>;

		/** A snippet of text from the webpage that describes its contents. */
		snippet?: string | null;
	}

	/** Defines a webpage that is relevant to the query. */
	export interface WebPageFormProperties {

		/** The last time that Bing crawled the webpage. The date is in the form, YYYY-MM-DDTHH:MM:SS. For example, 2015-04-13T05:23:39. */
		dateLastCrawled: FormControl<string | null | undefined>,

		/** The display URL of the webpage. The URL is meant for display purposes only and is not well formed. */
		displayUrl: FormControl<string | null | undefined>,

		/** A snippet of text from the webpage that describes its contents. */
		snippet: FormControl<string | null | undefined>,
	}
	export function CreateWebPageFormGroup() {
		return new FormGroup<WebPageFormProperties>({
			dateLastCrawled: new FormControl<string | null | undefined>(undefined),
			displayUrl: new FormControl<string | null | undefined>(undefined),
			snippet: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a webpage's metadata. */
	export interface WebMetaTag {

		/** The name of the metadata. */
		content?: string | null;

		/** The metadata. */
		name?: string | null;
	}

	/** Defines a webpage's metadata. */
	export interface WebMetaTagFormProperties {

		/** The name of the metadata. */
		content: FormControl<string | null | undefined>,

		/** The metadata. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateWebMetaTagFormGroup() {
		return new FormGroup<WebMetaTagFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchResultsAnswer {
		isFamilyFriendly?: boolean | null;

		/** Defines the query context that Bing used for the request. */
		queryContext?: QueryContext;

		/** The estimated number of webpages that are relevant to the query. Use this number along with the count and offset query parameters to page the results. */
		totalEstimatedMatches?: number | null;
	}
	export interface SearchResultsAnswerFormProperties {
		isFamilyFriendly: FormControl<boolean | null | undefined>,

		/** The estimated number of webpages that are relevant to the query. Use this number along with the count and offset query parameters to page the results. */
		totalEstimatedMatches: FormControl<number | null | undefined>,
	}
	export function CreateSearchResultsAnswerFormGroup() {
		return new FormGroup<SearchResultsAnswerFormProperties>({
			isFamilyFriendly: new FormControl<boolean | null | undefined>(undefined),
			totalEstimatedMatches: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StructuredValue {
	}
	export interface StructuredValueFormProperties {
	}
	export function CreateStructuredValueFormGroup() {
		return new FormGroup<StructuredValueFormProperties>({
		});

	}

	export interface WebWebGrouping {

		/** Required */
		_type: string;

		/** Required */
		webPages: Array<WebPage>;
	}
	export interface WebWebGroupingFormProperties {

		/** Required */
		_type: FormControl<string | null | undefined>,
	}
	export function CreateWebWebGroupingFormGroup() {
		return new FormGroup<WebWebGroupingFormProperties>({
			_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * The Web Search API lets you send a search query to Bing and get back search results that include links to webpages, images, and more.
		 * Get search
		 * @param {number} answerCount The number of answers that you want the response to include. The answers that Bing returns are based on ranking. For example, if Bing returns webpages, images, videos, and relatedSearches for a request and you set this parameter to two (2), the response includes webpages and images.If you included the responseFilter query parameter in the same request and set it to webpages and news, the response would include only webpages.
		 * @param {string} cc A 2-character country code of the country where the results come from. This API supports only the United States market. If you specify this query parameter, it must be set to us. If you set this parameter, you must also specify the Accept-Language header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the mkt query parameter are mutually exclusive—do not specify both.
		 * @param {number} count The number of search results to return in the response. The default is 10 and the maximum value is 50. The actual number delivered may be less than requested.Use this parameter along with the offset parameter to page results.For example, if your user interface displays 10 search results per page, set count to 10 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 10 (for example, 0, 10, 20). It is possible for multiple pages to include some overlap in results.
		 * @param {Web_SearchFreshness} freshness Filter search results by the following age values: Day—Return webpages that Bing discovered within the last 24 hours. Week—Return webpages that Bing discovered within the last 7 days. Month—Return webpages that discovered within the last 30 days. This filter applies only to webpage results and not to the other results such as news and images.
		 * @param {string} mkt The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. For example, en-US. The string is case insensitive. If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in Market Codes, Bing uses a best fit market code based on an internal mapping that is subject to change. This parameter and the cc query parameter are mutually exclusive—do not specify both.
		 * @param {number} offset The zero-based offset that indicates the number of search results to skip before returning results. The default is 0. The offset should be less than (totalEstimatedMatches - count). Use this parameter along with the count parameter to page results. For example, if your user interface displays 10 search results per page, set count to 10 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 10 (for example, 0, 10, 20). it is possible for multiple pages to include some overlap in results.
		 * @param {Array<RankingRankingItemAnswerType>} promote A comma-delimited list of answers that you want the response to include regardless of their ranking. For example, if you set answerCount) to two (2) so Bing returns the top two ranked answers, but you also want the response to include news, you'd set promote to news. If the top ranked answers are webpages, images, videos, and relatedSearches, the response includes webpages and images because news is not a ranked answer. But if you set promote to video, Bing would promote the video answer into the response and return webpages, images, and videos. The answers that you want to promote do not count against the answerCount limit. For example, if the ranked answers are news, images, and videos, and you set answerCount to 1 and promote to news, the response contains news and images. Or, if the ranked answers are videos, images, and news, the response contains videos and news. Possible values are Computation, Images, News, RelatedSearches, SpellSuggestions, TimeZone, Videos, Webpages. Use only if you specify answerCount.
		 * @param {string} q The user's search query term. The term may not be empty. The term may contain Bing Advanced Operators. For example, to limit results to a specific domain, use the site: operator.
		 * @param {Array<RankingRankingItemAnswerType>} responseFilter A comma-delimited list of answers to include in the response. If you do not specify this parameter, the response includes all search answers for which there's relevant data. Possible filter values are Computation, Images, News, RelatedSearches, SpellSuggestions, TimeZone, Videos, Webpages. Although you may use this filter to get a single answer, you should instead use the answer-specific endpoint in order to get richer results. For example, to receive only images, send the request to one of the Image Search API endpoints. The RelatedSearches and SpellSuggestions answers do not support a separate endpoint like the Image Search API does (only the Web Search API returns them). To include answers that would otherwise be excluded because of ranking, see the promote query parameter.
		 * @param {Web_SearchSafeSearch} safeSearch A filter used to filter adult content. Off: Return webpages with adult text, images, or videos. Moderate: Return webpages with adult text, but not adult images or videos. Strict: Do not return webpages with adult text, images, or videos. The default is Moderate. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
		 * @param {string} setLang The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the Accept-Language header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
		 * @param {boolean} textDecorations A Boolean value that determines whether display strings should contain decoration markers such as hit highlighting characters. If true, the strings may include markers. The default is false. To specify whether to use Unicode characters or HTML tags as the markers, see the textFormat query parameter.
		 * @param {Web_SearchTextFormat} textFormat The type of markers to use for text decorations (see the textDecorations query parameter). Possible values are Raw—Use Unicode characters to mark content that needs special formatting. The Unicode characters are in the range E000 through E019. For example, Bing uses E000 and E001 to mark the beginning and end of query terms for hit highlighting. HTML—Use HTML tags to mark content that needs special formatting. For example, use <b> tags to highlight query terms in display strings. The default is Raw. For display strings that contain escapable HTML characters such as <, >, and &, if textFormat is set to HTML, Bing escapes the characters as appropriate (for example, < is escaped to &lt;).
		 * @return {SearchResponse} Success.
		 */
		Web_Search(answerCount: number | null | undefined, cc: string | null | undefined, count: number | null | undefined, freshness: Web_SearchFreshness | null | undefined, mkt: string | null | undefined, offset: number | null | undefined, promote: Array<RankingRankingItemAnswerType> | null | undefined, q: string, responseFilter: Array<RankingRankingItemAnswerType> | null | undefined, safeSearch: Web_SearchSafeSearch | null | undefined, setLang: string | null | undefined, textDecorations: boolean | null | undefined, textFormat: Web_SearchTextFormat | null | undefined): Observable<SearchResponse> {
			return this.http.get<SearchResponse>(this.baseUri + 'search?answerCount=' + answerCount + '&cc=' + (cc == null ? '' : encodeURIComponent(cc)) + '&count=' + count + '&freshness=' + freshness + '&mkt=' + (mkt == null ? '' : encodeURIComponent(mkt)) + '&offset=' + offset + '&' + promote?.map(z => `promote=${z}`).join('&') + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&' + responseFilter?.map(z => `responseFilter=${z}`).join('&') + '&safeSearch=' + safeSearch + '&setLang=' + (setLang == null ? '' : encodeURIComponent(setLang)) + '&textDecorations=' + textDecorations + '&textFormat=' + textFormat, {});
		}
	}

	export enum Web_SearchX_BingApis_SDK { true = 'true' }

	export enum Web_SearchFreshness { Day = 'Day', Week = 'Week', Month = 'Month' }

	export enum Web_SearchSafeSearch { Off = 'Off', Moderate = 'Moderate', Strict = 'Strict' }

	export enum Web_SearchTextFormat { Raw = 'Raw', Html = 'Html' }

}

