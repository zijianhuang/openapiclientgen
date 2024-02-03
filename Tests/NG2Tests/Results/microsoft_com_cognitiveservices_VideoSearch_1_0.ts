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
		alternateName?: string | null;

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
		alternateName: FormControl<string | null | undefined>,

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
			alternateName: new FormControl<string | null | undefined>(undefined),
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

	export interface PivotSuggestions {

		/** Required */
		pivot: string;

		/** Required */
		suggestions: Array<Query>;
	}
	export interface PivotSuggestionsFormProperties {

		/** Required */
		pivot: FormControl<string | null | undefined>,
	}
	export function CreatePivotSuggestionsFormGroup() {
		return new FormGroup<PivotSuggestionsFormProperties>({
			pivot: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface SearchResultsAnswer {
		isFamilyFriendly?: boolean | null;

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

	export interface TrendingVideos {

		/** Required */
		bannerTiles: Array<TrendingVideosTile>;

		/** Required */
		categories: Array<TrendingVideosCategory>;
	}
	export interface TrendingVideosFormProperties {
	}
	export function CreateTrendingVideosFormGroup() {
		return new FormGroup<TrendingVideosFormProperties>({
		});

	}

	export interface TrendingVideosTile {

		/**
		 * Defines an image
		 * Required
		 */
		image: ImageObject;

		/**
		 * Defines a search query.
		 * Required
		 */
		query: Query;
	}
	export interface TrendingVideosTileFormProperties {
	}
	export function CreateTrendingVideosTileFormGroup() {
		return new FormGroup<TrendingVideosTileFormProperties>({
		});

	}

	export interface TrendingVideosCategory {

		/** Required */
		subcategories: Array<TrendingVideosSubcategory>;

		/** Required */
		title: string;
	}
	export interface TrendingVideosCategoryFormProperties {

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateTrendingVideosCategoryFormGroup() {
		return new FormGroup<TrendingVideosCategoryFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TrendingVideosSubcategory {

		/** Required */
		tiles: Array<TrendingVideosTile>;

		/** Required */
		title: string;
	}
	export interface TrendingVideosSubcategoryFormProperties {

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateTrendingVideosSubcategoryFormGroup() {
		return new FormGroup<TrendingVideosSubcategoryFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VideoDetails {
		relatedVideos?: VideosModule;

		/** Defines a video object that is relevant to the query. */
		videoResult?: VideoObject;
	}
	export interface VideoDetailsFormProperties {
	}
	export function CreateVideoDetailsFormGroup() {
		return new FormGroup<VideoDetailsFormProperties>({
		});

	}

	export interface VideosModule {
		value?: Array<VideoObject>;
	}
	export interface VideosModuleFormProperties {
	}
	export function CreateVideosModuleFormGroup() {
		return new FormGroup<VideosModuleFormProperties>({
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


	/** Defines a video answer. */
	export interface Videos {
		nextOffset?: number | null;
		pivotSuggestions?: Array<PivotSuggestions>;
		queryExpansions?: Array<Query>;
		scenario?: VideosScenario | null;

		/**
		 * A list of video objects that are relevant to the query.
		 * Required
		 */
		value: Array<VideoObject>;
	}

	/** Defines a video answer. */
	export interface VideosFormProperties {
		nextOffset: FormControl<number | null | undefined>,
		scenario: FormControl<VideosScenario | null | undefined>,
	}
	export function CreateVideosFormGroup() {
		return new FormGroup<VideosFormProperties>({
			nextOffset: new FormControl<number | null | undefined>(undefined),
			scenario: new FormControl<VideosScenario | null | undefined>(undefined),
		});

	}

	export enum VideosScenario { List = 'List', SingleDominantVideo = 'SingleDominantVideo' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * The Video Detail Search API lets you search on Bing and get back insights about a video, such as related videos. This section provides technical details about the query parameters and headers that you use to request insights of videos and the JSON response objects that contain them. For examples that show how to make requests, see [Searching the Web for Videos](https://docs.microsoft.com/azure/cognitive-services/bing-video-search/search-the-web).
		 * Get videos/details
		 * @param {string} cc A 2-character country code of the country where the results come from. This API supports only the United States market. If you specify this query parameter, it must be set to us. If you set this parameter, you must also specify the Accept-Language header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the mkt query parameter are mutually exclusive—do not specify both.
		 * @param {string} id An ID that uniquely identifies a video. The [Video](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v7-reference#video) object's videoId field contains the ID that you set this parameter to. You use this parameter to identify the video to get insights of.
		 * @param {Array<string>} modules A comma-delimited list of insights to request. The following are the possible case-insensitive values. All: Return all available insights. RelatedVideos: Return a list of videos that are similar to the video specified by the id query parameter. VideoResult: Return the video that you're requesting insights of (this is the video that you set the id query parameter to in your insights request). If you specify an insight and there is no data for it, the response object does not include the related field. For example, if you specify RelatedVideos and none exist, the response does not include the relatedVideos field. Although the user's query term is not required, you should always include it because it helps to improve relevance and the results.
		 * @param {string} mkt The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. For example, en-US. The string is case insensitive. For a list of possible market values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v7-reference#market-codes). NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v7-reference#market-codes), Bing uses a best fit market code based on an internal mapping that is subject to change. This parameter and the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v7-reference#cc) query parameter are mutually exclusive—do not specify both.
		 * @param {string} q The user's search query string. The query string cannot be empty. The query string may contain [Bing Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For example, to limit videos to a specific domain, use the [site:](http://msdn.microsoft.com/library/ff795613.aspx) operator. Use this parameter only with the Video Search API. Do not specify this parameter when calling the Trending Videos API.
		 * @param {Videos_DetailsResolution} resolution Filter videos by the following resolutions: SD480p: Return videos with a 480p or higher resolution. HD720p: Return videos with a 720p or higher resolution. HD1080p: Return videos with a 1080p or higher resolution. All: Do not filter by resolution.Specifying this value is the same as not specifying the resolution parameter.
		 * @param {Videos_DetailsSafeSearch} safeSearch Filter videos for adult content. The following are the possible filter values. Off: If the request is through the Video Search API, the response includes adult videos and the thumbnail images of the videos are clear (non-fuzzy). If the request is through the Web Search API, the response includes adult videos but the thumbnail images of the videos are pixelated (fuzzy). Moderate: If the request is through the Video Search API, the response does not include videos with adult content. If the request is through the Web Search API, the response may include videos with adult content but the thumbnail images of the videos are pixelated (fuzzy). Strict: Does not return videos with adult content. The default is Moderate. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
		 * @param {string} setLang The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v7-reference#acceptlanguage) header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
		 * @param {boolean} textDecorations A Boolean value that determines whether display strings contain decoration markers such as hit highlighting characters. If true, the strings may include markers. The default is false. To specify whether to use Unicode characters or HTML tags as the markers, see the [textFormat](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v7-reference#textformat) query parameter. For information about hit highlighting, see [Hit Highlighting](https://docs.microsoft.com/azure/cognitive-services/bing-news-search/hit-highlighting).
		 * @param {Videos_DetailsTextFormat} textFormat The type of markers to use for text decorations (see the textDecorations query parameter). Possible values are Raw—Use Unicode characters to mark content that needs special formatting. The Unicode characters are in the range E000 through E019. For example, Bing uses E000 and E001 to mark the beginning and end of query terms for hit highlighting. HTML—Use HTML tags to mark content that needs special formatting. For example, use <b> tags to highlight query terms in display strings. The default is Raw. For display strings that contain escapable HTML characters such as <, >, and &, if textFormat is set to HTML, Bing escapes the characters as appropriate (for example, < is escaped to &lt;).
		 * @return {VideoDetails} Success.
		 */
		Videos_Details(cc: string | null | undefined, id: string | null | undefined, modules: Array<string> | null | undefined, mkt: string | null | undefined, q: string, resolution: Videos_DetailsResolution | null | undefined, safeSearch: Videos_DetailsSafeSearch | null | undefined, setLang: string | null | undefined, textDecorations: boolean | null | undefined, textFormat: Videos_DetailsTextFormat | null | undefined): Observable<VideoDetails> {
			return this.http.get<VideoDetails>(this.baseUri + 'videos/details?cc=' + (cc == null ? '' : encodeURIComponent(cc)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&' + modules?.map(z => `modules=${encodeURIComponent(z)}`).join('&') + '&mkt=' + (mkt == null ? '' : encodeURIComponent(mkt)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&resolution=' + resolution + '&safeSearch=' + safeSearch + '&setLang=' + (setLang == null ? '' : encodeURIComponent(setLang)) + '&textDecorations=' + textDecorations + '&textFormat=' + textFormat, {});
		}

		/**
		 * The Video Search API lets you send a search query to Bing and get back a list of videos that are relevant to the search query. This section provides technical details about the query parameters and headers that you use to request videos and the JSON response objects that contain them. For examples that show how to make requests, see [Searching the Web for Videos](https://docs.microsoft.com/azure/cognitive-services/bing-video-search/search-the-web).
		 * Get videos/search
		 * @param {string} cc A 2-character country code of the country where the results come from. This API supports only the United States market. If you specify this query parameter, it must be set to us. If you set this parameter, you must also specify the Accept-Language header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the mkt query parameter are mutually exclusive—do not specify both.
		 * @param {number} count The number of videos to return in the response. The actual number delivered may be less than requested. The default is 35. The maximum is 105. You may use this parameter along with the offset parameter to page results. For example, if your user interface presents 20 videos per page, set count to 20 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 20 (for example, 0, 20, 40). Use this parameter only with the Video Search API. Do not specify this parameter when calling the Trending Videos API or the Web Search API.
		 * @param {Videos_SearchFreshness} freshness Filter videos by the date and time that Bing discovered the video. The following are the possible filter values. Day: Return videos discovered within the last 24 hours. Week: Return videos discovered within the last 7 days. Month: Return videos discovered within the last 30 days.
		 * @param {string} id An ID that uniquely identifies a video. The [Video](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v7-reference#video) object's videoId field contains the ID that you set this parameter to. You use this parameter to ensure that the specified video is the first video in the list of videos that Bing returns.
		 * @param {Videos_SearchLength} length Filter videos by the following lengths: Short: Return videos that are less than 5 minutes. Medium: Return videos that are between 5 and 20 minutes, inclusive. Long: Return videos that are longer than 20 minutes. All: Do not filter by length.Specifying this value is the same as not specifying the videoLength parameter.
		 * @param {string} mkt The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. For example, en-US. The string is case insensitive. For a list of possible market values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v7-reference#market-codes). NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v7-reference#market-codes), Bing uses a best fit market code based on an internal mapping that is subject to change. This parameter and the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v7-reference#cc) query parameter are mutually exclusive—do not specify both.
		 * @param {number} offset The zero-based offset that indicates the number of videos to skip before returning videos. The default is 0. The offset should be less than ([totalEstimatedMatches](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v7-reference#videos-totalmatches) - count). Use this parameter along with the count parameter to page results. For example, if your user interface displays 20 videos per page, set count to 20 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 20 (for example, 0, 20, 40). It is possible for multiple pages to include some overlap in results. To prevent duplicates, see [nextOffset](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v7-reference#videos-nextoffset). Use this parameter only with the Video Search API.
		 * @param {Videos_SearchPricing} pricing Filter videos by the following pricing options: Free: Return videos that are free to view. Paid: Return videos that require a subscription or payment to view. All: Do not filter by pricing.Specifying this value is the same as not specifying the pricing parameter.
		 * @param {string} q The user's search query string. The query string cannot be empty. The query string may contain [Bing Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For example, to limit videos to a specific domain, use the [site:](http://msdn.microsoft.com/library/ff795613.aspx) operator. Use this parameter only with the Video Search API. Do not specify this parameter when calling the Trending Videos API.
		 * @param {Videos_DetailsResolution} resolution Filter videos by the following resolutions: SD480p: Return videos with a 480p or higher resolution. HD720p: Return videos with a 720p or higher resolution. HD1080p: Return videos with a 1080p or higher resolution. All: Do not filter by resolution.Specifying this value is the same as not specifying the resolution parameter.
		 * @param {Videos_DetailsSafeSearch} safeSearch Filter videos for adult content. The following are the possible filter values. Off: If the request is through the Video Search API, the response includes adult videos and the thumbnail images of the videos are clear (non-fuzzy). If the request is through the Web Search API, the response includes adult videos but the thumbnail images of the videos are pixelated (fuzzy). Moderate: If the request is through the Video Search API, the response does not include videos with adult content. If the request is through the Web Search API, the response may include videos with adult content but the thumbnail images of the videos are pixelated (fuzzy). Strict: Does not return videos with adult content. The default is Moderate. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
		 * @param {string} setLang The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v7-reference#acceptlanguage) header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
		 * @param {boolean} textDecorations A Boolean value that determines whether display strings contain decoration markers such as hit highlighting characters. If true, the strings may include markers. The default is false. To specify whether to use Unicode characters or HTML tags as the markers, see the [textFormat](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v7-reference#textformat) query parameter. For information about hit highlighting, see [Hit Highlighting](https://docs.microsoft.com/azure/cognitive-services/bing-news-search/hit-highlighting).
		 * @param {Videos_DetailsTextFormat} textFormat The type of markers to use for text decorations (see the textDecorations query parameter). Possible values are Raw—Use Unicode characters to mark content that needs special formatting. The Unicode characters are in the range E000 through E019. For example, Bing uses E000 and E001 to mark the beginning and end of query terms for hit highlighting. HTML—Use HTML tags to mark content that needs special formatting. For example, use <b> tags to highlight query terms in display strings. The default is Raw. For display strings that contain escapable HTML characters such as <, >, and &, if textFormat is set to HTML, Bing escapes the characters as appropriate (for example, < is escaped to &lt;).
		 * @return {Videos} Success.
		 */
		Videos_Search(cc: string | null | undefined, count: number | null | undefined, freshness: Videos_SearchFreshness | null | undefined, id: string | null | undefined, length: Videos_SearchLength | null | undefined, mkt: string | null | undefined, offset: number | null | undefined, pricing: Videos_SearchPricing | null | undefined, q: string, resolution: Videos_DetailsResolution | null | undefined, safeSearch: Videos_DetailsSafeSearch | null | undefined, setLang: string | null | undefined, textDecorations: boolean | null | undefined, textFormat: Videos_DetailsTextFormat | null | undefined): Observable<Videos> {
			return this.http.get<Videos>(this.baseUri + 'videos/search?cc=' + (cc == null ? '' : encodeURIComponent(cc)) + '&count=' + count + '&freshness=' + freshness + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&length=' + length + '&mkt=' + (mkt == null ? '' : encodeURIComponent(mkt)) + '&offset=' + offset + '&pricing=' + pricing + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&resolution=' + resolution + '&safeSearch=' + safeSearch + '&setLang=' + (setLang == null ? '' : encodeURIComponent(setLang)) + '&textDecorations=' + textDecorations + '&textFormat=' + textFormat, {});
		}

		/**
		 * The Video Trending Search API lets you search on Bing and get back a list of videos that are trending based on search requests made by others. The videos are broken out into different categories. For example, Top Music Videos. For a list of markets that support trending videos, see [Trending Videos](https://docs.microsoft.com/azure/cognitive-services/bing-video-search/trending-videos).
		 * Get videos/trending
		 * @param {string} cc A 2-character country code of the country where the results come from. This API supports only the United States market. If you specify this query parameter, it must be set to us. If you set this parameter, you must also specify the Accept-Language header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the mkt query parameter are mutually exclusive—do not specify both.
		 * @param {string} mkt The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. For example, en-US. The string is case insensitive. For a list of possible market values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v7-reference#market-codes). NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v7-reference#market-codes), Bing uses a best fit market code based on an internal mapping that is subject to change. This parameter and the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v7-reference#cc) query parameter are mutually exclusive—do not specify both.
		 * @param {Videos_DetailsSafeSearch} safeSearch Filter videos for adult content. The following are the possible filter values. Off: If the request is through the Video Search API, the response includes adult videos and the thumbnail images of the videos are clear (non-fuzzy). If the request is through the Web Search API, the response includes adult videos but the thumbnail images of the videos are pixelated (fuzzy). Moderate: If the request is through the Video Search API, the response does not include videos with adult content. If the request is through the Web Search API, the response may include videos with adult content but the thumbnail images of the videos are pixelated (fuzzy). Strict: Does not return videos with adult content. The default is Moderate. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
		 * @param {string} setLang The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v7-reference#acceptlanguage) header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
		 * @param {boolean} textDecorations A Boolean value that determines whether display strings contain decoration markers such as hit highlighting characters. If true, the strings may include markers. The default is false. To specify whether to use Unicode characters or HTML tags as the markers, see the [textFormat](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-video-api-v7-reference#textformat) query parameter. For information about hit highlighting, see [Hit Highlighting](https://docs.microsoft.com/azure/cognitive-services/bing-news-search/hit-highlighting).
		 * @param {Videos_DetailsTextFormat} textFormat The type of markers to use for text decorations (see the textDecorations query parameter). Possible values are Raw—Use Unicode characters to mark content that needs special formatting. The Unicode characters are in the range E000 through E019. For example, Bing uses E000 and E001 to mark the beginning and end of query terms for hit highlighting. HTML—Use HTML tags to mark content that needs special formatting. For example, use <b> tags to highlight query terms in display strings. The default is Raw. For display strings that contain escapable HTML characters such as <, >, and &, if textFormat is set to HTML, Bing escapes the characters as appropriate (for example, < is escaped to &lt;).
		 * @return {TrendingVideos} Success.
		 */
		Videos_Trending(cc: string | null | undefined, mkt: string | null | undefined, safeSearch: Videos_DetailsSafeSearch | null | undefined, setLang: string | null | undefined, textDecorations: boolean | null | undefined, textFormat: Videos_DetailsTextFormat | null | undefined): Observable<TrendingVideos> {
			return this.http.get<TrendingVideos>(this.baseUri + 'videos/trending?cc=' + (cc == null ? '' : encodeURIComponent(cc)) + '&mkt=' + (mkt == null ? '' : encodeURIComponent(mkt)) + '&safeSearch=' + safeSearch + '&setLang=' + (setLang == null ? '' : encodeURIComponent(setLang)) + '&textDecorations=' + textDecorations + '&textFormat=' + textFormat, {});
		}
	}

	export enum Videos_DetailsX_BingApis_SDK { true = 'true' }

	export enum Videos_DetailsResolution { All = 'All', SD480p = 'SD480p', HD720p = 'HD720p', HD1080p = 'HD1080p' }

	export enum Videos_DetailsSafeSearch { Off = 'Off', Moderate = 'Moderate', Strict = 'Strict' }

	export enum Videos_DetailsTextFormat { Raw = 'Raw', Html = 'Html' }

	export enum Videos_SearchFreshness { Day = 'Day', Week = 'Week', Month = 'Month' }

	export enum Videos_SearchLength { All = 'All', Short = 'Short', Medium = 'Medium', Long = 'Long' }

	export enum Videos_SearchPricing { All = 'All', Free = 'Free', Paid = 'Paid' }

}

