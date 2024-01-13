import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Defines an answer. */
	export interface Answer {
		followUpQueries?: Array<Query>;
	}

	/** Defines an answer. */
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

		/** The URL that you use to get the results of the related search. Before using the URL, you must append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header. Use this URL if you're displaying the results in your own user interface. Otherwise, use the webSearchUrl URL. */
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

		/** The URL that you use to get the results of the related search. Before using the URL, you must append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header. Use this URL if you're displaying the results in your own user interface. Otherwise, use the webSearchUrl URL. */
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


	/** The most generic kind of creative work, including books, movies, photographs, software programs, etc. */
	export interface CreativeWork {

		/** The date on which the CreativeWork was published. */
		datePublished?: string | null;

		/** The source of the creative work. */
		provider?: Array<Thing>;

		/** The URL to a thumbnail of the item. */
		thumbnailUrl?: string | null;

		/** Defines a video object that is relevant to the query. */
		video?: VideoObject;
	}

	/** The most generic kind of creative work, including books, movies, photographs, software programs, etc. */
	export interface CreativeWorkFormProperties {

		/** The date on which the CreativeWork was published. */
		datePublished: FormControl<string | null | undefined>,

		/** The URL to a thumbnail of the item. */
		thumbnailUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreativeWorkFormGroup() {
		return new FormGroup<CreativeWorkFormProperties>({
			datePublished: new FormControl<string | null | undefined>(undefined),
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a thing. */
	export interface Thing {

		/** An alias for the item */
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

	/** Defines a thing. */
	export interface ThingFormProperties {

		/** An alias for the item */
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


	/** Defines a media object. */
	export interface MediaObject {

		/** Original URL to retrieve the source (file) for the media object (e.g the source URL for the image). */
		contentUrl?: string | null;

		/** The height of the source media object, in pixels. */
		height?: number | null;

		/** The width of the source media object, in pixels. */
		width?: number | null;
	}

	/** Defines a media object. */
	export interface MediaObjectFormProperties {

		/** Original URL to retrieve the source (file) for the media object (e.g the source URL for the image). */
		contentUrl: FormControl<string | null | undefined>,

		/** The height of the source media object, in pixels. */
		height: FormControl<number | null | undefined>,

		/** The width of the source media object, in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateMediaObjectFormGroup() {
		return new FormGroup<MediaObjectFormProperties>({
			contentUrl: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines a news answer. */
	export interface News {

		/** Location of local news */
		location?: string | null;

		/**
		 * An array of NewsArticle objects that contain information about news articles that are relevant to the query. If there are no results to return for the request, the array is empty.
		 * Required
		 */
		value: Array<NewsArticle>;
	}

	/** Defines a news answer. */
	export interface NewsFormProperties {

		/** Location of local news */
		location: FormControl<string | null | undefined>,
	}
	export function CreateNewsFormGroup() {
		return new FormGroup<NewsFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a news article. */
	export interface NewsArticle {

		/** The news category that the article belongs to. For example, Sports. If the news category cannot be determined, the article does not include this field. */
		category?: string | null;

		/** A list of related news articles. */
		clusteredArticles?: Array<NewsArticle>;

		/** A Boolean value that indicates whether the news article is a headline. If true, the article is a headline. The article includes this field only for news categories requests that do not specify the category query parameter. */
		headline?: boolean | null;
	}

	/** Defines a news article. */
	export interface NewsArticleFormProperties {

		/** The news category that the article belongs to. For example, Sports. If the news category cannot be determined, the article does not include this field. */
		category: FormControl<string | null | undefined>,

		/** A Boolean value that indicates whether the news article is a headline. If true, the article is a headline. The article includes this field only for news categories requests that do not specify the category query parameter. */
		headline: FormControl<boolean | null | undefined>,
	}
	export function CreateNewsArticleFormGroup() {
		return new FormGroup<NewsArticleFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			headline: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface NewsTopic {

		/** A Boolean value that indicates whether the topic is considered breaking news. If the topic is considered breaking news, the value is true. */
		isBreakingNews?: boolean | null;

		/** The URL to the Bing News search results for the search query term */
		newsSearchUrl?: string | null;

		/** Defines a search query. */
		query?: Query;
	}
	export interface NewsTopicFormProperties {

		/** A Boolean value that indicates whether the topic is considered breaking news. If the topic is considered breaking news, the value is true. */
		isBreakingNews: FormControl<boolean | null | undefined>,

		/** The URL to the Bing News search results for the search query term */
		newsSearchUrl: FormControl<string | null | undefined>,
	}
	export function CreateNewsTopicFormGroup() {
		return new FormGroup<NewsTopicFormProperties>({
			isBreakingNews: new FormControl<boolean | null | undefined>(undefined),
			newsSearchUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines an organization. */
	export interface Organization {
	}

	/** Defines an organization. */
	export interface OrganizationFormProperties {
	}
	export function CreateOrganizationFormGroup() {
		return new FormGroup<OrganizationFormProperties>({
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


	/** Defines a search result answer. */
	export interface SearchResultsAnswer {

		/** The estimated number of webpages that are relevant to the query. Use this number along with the count and offset query parameters to page the results. */
		totalEstimatedMatches?: number | null;
	}

	/** Defines a search result answer. */
	export interface SearchResultsAnswerFormProperties {

		/** The estimated number of webpages that are relevant to the query. Use this number along with the count and offset query parameters to page the results. */
		totalEstimatedMatches: FormControl<number | null | undefined>,
	}
	export function CreateSearchResultsAnswerFormGroup() {
		return new FormGroup<SearchResultsAnswerFormProperties>({
			totalEstimatedMatches: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TrendingTopics {

		/**
		 * A list of trending news topics on Bing
		 * Required
		 */
		value: Array<NewsTopic>;
	}
	export interface TrendingTopicsFormProperties {
	}
	export function CreateTrendingTopicsFormGroup() {
		return new FormGroup<TrendingTopicsFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * The News Category API lets you search on Bing and get back a list of top news articles by category. This section provides technical details about the query parameters and headers that you use to request news and the JSON response objects that contain them.  For examples that show how to make requests, see [Searching the web for news](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-news-search/search-the-web).
		 * Get news
		 * @param {string} cc A 2-character country code of the country where the results come from. This API supports only the United States market. If you specify this query parameter, it must be set to us. If you set this parameter, you must also specify the Accept-Language header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the mkt query parameter are mutually exclusive—do not specify both.
		 * @param {string} category The category of articles to return. For example, Sports articles or Entertainment articles. For a list of possible categories, see [News Categories by Market](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#categories-by-market). Use this parameter only with News Category API. If you do not specify this parameter, the response includes both: Headline articles typically published in the last 24 hours from any category and articles from each parent category (up to four articles). If the article is a headline, the article's headline field is set to true. By default, the response includes up to 12 headline articles. To specify the number of headline articles to return, set the [headlineCount](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#headlineCount) query parameter.
		 * @param {number} count The number of news articles to return in the response. The actual number delivered may be less than requested. The default is 10 and the maximum value is 100. The actual number delivered may be less than requested.You may use this parameter along with the offset parameter to page results. For example, if your user interface displays 20 articles per page, set count to 20 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 20 (for example, 0, 20, 40). It is possible for multiple pages to include some overlap in results. If you do not specify the [category](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#category) parameter, Bing ignores this parameter.
		 * @param {number} headlineCount The number of headline articles to return in the response. The default is 12. Specify this parameter only if you do not specify the [category](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#category) parameter.
		 * @param {string} mkt The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. For example, en-US. The string is case insensitive. For a list of possible market values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#market-codes). NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#market-codes), Bing uses a best fit market code based on an internal mapping that is subject to change. This parameter and the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#cc) query parameter are mutually exclusive—do not specify both.
		 * @param {number} offset The zero-based offset that indicates the number of news to skip before returning news. The default is 0. The offset should be less than ([totalEstimatedMatches](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#news-totalmatches) - count). Use this parameter along with the count parameter to page results. For example, if your user interface displays 20 news per page, set count to 20 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 20 (for example, 0, 20, 40). It is possible for multiple pages to include some overlap in results. If you do not specify the [category](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#category) parameter, Bing ignores this parameter.
		 * @param {boolean} originalImg A Boolean value that determines whether the image's contentUrl contains a URL that points to a thumbnail of the original article's image or the image itself. If the article includes an image, and this parameter is set to true, the image's contentUrl property contains a URL that you may use to download the original image from the publisher's website. Otherwise, if this parameter is false, the image's contentUrl and thumbnailUrl URLs both point to the same thumbnail image. Use this parameter only with the News Search API or News Category API. Trending Topics API ignore this parameter.
		 * @param {News_CategorySafeSearch} safeSearch Filter news for adult content. The following are the possible filter values. Off: Return news articles with adult text, images, or videos. Moderate: Return news articles with adult text but not adult images or videos. Strict: Do not return news articles with adult text, images, or videos. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
		 * @param {string} setLang The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#acceptlanguage) header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
		 * @param {boolean} textDecorations A Boolean value that determines whether display strings contain decoration markers such as hit highlighting characters. If true, the strings may include markers. The default is false. To specify whether to use Unicode characters or HTML tags as the markers, see the [textFormat](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#textformat) query parameter. For information about hit highlighting, see [Hit Highlighting](https://docs.microsoft.com/azure/cognitive-services/bing-news-search/hit-highlighting).
		 * @param {News_CategoryTextFormat} textFormat The type of markers to use for text decorations (see the textDecorations query parameter). Possible values are Raw—Use Unicode characters to mark content that needs special formatting. The Unicode characters are in the range E000 through E019. For example, Bing uses E000 and E001 to mark the beginning and end of query terms for hit highlighting. HTML—Use HTML tags to mark content that needs special formatting. For example, use <b> tags to highlight query terms in display strings. The default is Raw. For display strings that contain escapable HTML characters such as <, >, and &, if textFormat is set to HTML, Bing escapes the characters as appropriate (for example, < is escaped to &lt;).
		 * @return {News} Success.
		 */
		News_Category(cc: string | null | undefined, category: string | null | undefined, count: number | null | undefined, headlineCount: number | null | undefined, mkt: string | null | undefined, offset: number | null | undefined, originalImg: boolean | null | undefined, safeSearch: News_CategorySafeSearch | null | undefined, setLang: string | null | undefined, textDecorations: boolean | null | undefined, textFormat: News_CategoryTextFormat | null | undefined): Observable<News> {
			return this.http.get<News>(this.baseUri + 'news?cc=' + (cc == null ? '' : encodeURIComponent(cc)) + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&count=' + count + '&headlineCount=' + headlineCount + '&mkt=' + (mkt == null ? '' : encodeURIComponent(mkt)) + '&offset=' + offset + '&originalImg=' + originalImg + '&safeSearch=' + safeSearch + '&setLang=' + (setLang == null ? '' : encodeURIComponent(setLang)) + '&textDecorations=' + textDecorations + '&textFormat=' + textFormat, {});
		}

		/**
		 * The News Search API lets you send a search query to Bing and get back a list of news that are relevant to the search query. This section provides technical details about the query parameters and headers that you use to request news and the JSON response objects that contain them.  For examples that show how to make requests, see [Searching the web for news](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-news-search/search-the-web).
		 * Get news/search
		 * @param {string} cc A 2-character country code of the country where the results come from. This API supports only the United States market. If you specify this query parameter, it must be set to us. If you set this parameter, you must also specify the Accept-Language header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the mkt query parameter are mutually exclusive—do not specify both.
		 * @param {number} count The number of news articles to return in the response. The actual number delivered may be less than requested. The default is 10 and the maximum value is 100. The actual number delivered may be less than requested.You may use this parameter along with the offset parameter to page results. For example, if your user interface displays 20 articles per page, set count to 20 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 20 (for example, 0, 20, 40). It is possible for multiple pages to include some overlap in results.
		 * @param {News_SearchFreshness} freshness Filter news by the date and time that Bing discovered the news. The following are the possible filter values. Day: Return news discovered within the last 24 hours. Week: Return news discovered within the last 7 days. Month: Return news discovered within the last 30 days. Use this parameter only with the News Search API. Do not specify this parameter when calling the News Category API or the Trending Topics API.
		 * @param {string} mkt The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. For example, en-US. The string is case insensitive. For a list of possible market values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#market-codes). NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#market-codes), Bing uses a best fit market code based on an internal mapping that is subject to change. This parameter and the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#cc) query parameter are mutually exclusive—do not specify both.
		 * @param {number} offset The zero-based offset that indicates the number of news to skip before returning news. The default is 0. The offset should be less than ([totalEstimatedMatches](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#news-totalmatches) - count). Use this parameter along with the count parameter to page results. For example, if your user interface displays 20 news per page, set count to 20 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 20 (for example, 0, 20, 40). It is possible for multiple pages to include some overlap in results.
		 * @param {boolean} originalImg A Boolean value that determines whether the image's contentUrl contains a URL that points to a thumbnail of the original article's image or the image itself. If the article includes an image, and this parameter is set to true, the image's contentUrl property contains a URL that you may use to download the original image from the publisher's website. Otherwise, if this parameter is false, the image's contentUrl and thumbnailUrl URLs both point to the same thumbnail image. Use this parameter only with the News Search API. Do not specify this parameter when calling the Trending Topics API or News Category API.
		 * @param {string} q The user's search query string. The query string cannot be empty. The query string may contain [Bing Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For example, to limit news to a specific domain, use the [site:](http://msdn.microsoft.com/library/ff795613.aspx) operator. Use this parameter only with the News Search API. Do not specify this parameter when calling the Trending Topics API or News Category API.
		 * @param {News_CategorySafeSearch} safeSearch Filter news for adult content. The following are the possible filter values. Off: Return news articles with adult text, images, or videos. Moderate: Return news articles with adult text but not adult images or videos. Strict: Do not return news articles with adult text, images, or videos. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
		 * @param {string} setLang The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#acceptlanguage) header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
		 * @param {string} sortBy The order to return the news in. The following are the possible case-insensitive values. Date: If the request is through the News Search API, the response returns news articles sorted by date from the most recent to the oldest. If the request is through the News Trending Topics API, the response returns trending topics sorted by date from the most recent to the oldest.
		 * @param {boolean} textDecorations A Boolean value that determines whether display strings contain decoration markers such as hit highlighting characters. If true, the strings may include markers. The default is false. To specify whether to use Unicode characters or HTML tags as the markers, see the [textFormat](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#textformat) query parameter. For information about hit highlighting, see [Hit Highlighting](https://docs.microsoft.com/azure/cognitive-services/bing-news-search/hit-highlighting).
		 * @param {News_CategoryTextFormat} textFormat The type of markers to use for text decorations (see the textDecorations query parameter). Possible values are Raw—Use Unicode characters to mark content that needs special formatting. The Unicode characters are in the range E000 through E019. For example, Bing uses E000 and E001 to mark the beginning and end of query terms for hit highlighting. HTML—Use HTML tags to mark content that needs special formatting. For example, use <b> tags to highlight query terms in display strings. The default is Raw. For display strings that contain escapable HTML characters such as <, >, and &, if textFormat is set to HTML, Bing escapes the characters as appropriate (for example, < is escaped to &lt;).
		 * @return {News} Success.
		 */
		News_Search(cc: string | null | undefined, count: number | null | undefined, freshness: News_SearchFreshness | null | undefined, mkt: string | null | undefined, offset: number | null | undefined, originalImg: boolean | null | undefined, q: string, safeSearch: News_CategorySafeSearch | null | undefined, setLang: string | null | undefined, sortBy: string | null | undefined, textDecorations: boolean | null | undefined, textFormat: News_CategoryTextFormat | null | undefined): Observable<News> {
			return this.http.get<News>(this.baseUri + 'news/search?cc=' + (cc == null ? '' : encodeURIComponent(cc)) + '&count=' + count + '&freshness=' + freshness + '&mkt=' + (mkt == null ? '' : encodeURIComponent(mkt)) + '&offset=' + offset + '&originalImg=' + originalImg + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&safeSearch=' + safeSearch + '&setLang=' + (setLang == null ? '' : encodeURIComponent(setLang)) + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&textDecorations=' + textDecorations + '&textFormat=' + textFormat, {});
		}

		/**
		 * The News Trending Topics API lets you search on Bing and get back a list of trending news topics that are currently trending on Bing. This section provides technical details about the query parameters and headers that you use to request news and the JSON response objects that contain them.  For examples that show how to make requests, see [Searching the web for news](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-news-search/search-the-web).
		 * Get news/trendingtopics
		 * @param {string} cc A 2-character country code of the country where the results come from. This API supports only the United States market. If you specify this query parameter, it must be set to us. If you set this parameter, you must also specify the Accept-Language header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the mkt query parameter are mutually exclusive—do not specify both.
		 * @param {number} count The number of news articles to return in the response. The actual number delivered may be less than requested. The default is 10 and the maximum value is 100. The actual number delivered may be less than requested.You may use this parameter along with the offset parameter to page results. For example, if your user interface displays 20 articles per page, set count to 20 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 20 (for example, 0, 20, 40). It is possible for multiple pages to include some overlap in results.
		 * @param {string} mkt The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. For example, en-US. The string is case insensitive. For a list of possible market values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#market-codes). NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#market-codes), Bing uses a best fit market code based on an internal mapping that is subject to change. This parameter and the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#cc) query parameter are mutually exclusive—do not specify both.
		 * @param {number} offset The zero-based offset that indicates the number of news to skip before returning news. The default is 0. The offset should be less than ([totalEstimatedMatches](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#news-totalmatches) - count). Use this parameter along with the count parameter to page results. For example, if your user interface displays 20 news per page, set count to 20 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 20 (for example, 0, 20, 40). It is possible for multiple pages to include some overlap in results.
		 * @param {News_CategorySafeSearch} safeSearch Filter news for adult content. The following are the possible filter values. Off: Return news articles with adult text, images, or videos. Moderate: Return news articles with adult text but not adult images or videos. Strict: Do not return news articles with adult text, images, or videos. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
		 * @param {string} setLang The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#acceptlanguage) header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
		 * @param {number} since The Unix epoch time (Unix timestamp) that Bing uses to select the trending topics. Bing returns trending topics that it discovered on or after the specified date and time, not the date the topic was published. To use this parameter, also specify the sortBy parameter. Use this parameter only with the News Trending Topics API. Do not specify this parameter when calling the News Search API or News Category API.
		 * @param {string} sortBy The order to return the news in. The following are the possible case-insensitive values. Date: If the request is through the News Search API, the response returns news articles sorted by date from the most recent to the oldest. If the request is through the News Trending Topics API, the response returns trending topics sorted by date from the most recent to the oldest.
		 * @param {boolean} textDecorations A Boolean value that determines whether display strings contain decoration markers such as hit highlighting characters. If true, the strings may include markers. The default is false. To specify whether to use Unicode characters or HTML tags as the markers, see the [textFormat](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#textformat) query parameter. For information about hit highlighting, see [Hit Highlighting](https://docs.microsoft.com/azure/cognitive-services/bing-news-search/hit-highlighting).
		 * @param {News_CategoryTextFormat} textFormat The type of markers to use for text decorations (see the textDecorations query parameter). Possible values are Raw—Use Unicode characters to mark content that needs special formatting. The Unicode characters are in the range E000 through E019. For example, Bing uses E000 and E001 to mark the beginning and end of query terms for hit highlighting. HTML—Use HTML tags to mark content that needs special formatting. For example, use <b> tags to highlight query terms in display strings. The default is Raw. For display strings that contain escapable HTML characters such as <, >, and &, if textFormat is set to HTML, Bing escapes the characters as appropriate (for example, < is escaped to &lt;).
		 * @return {TrendingTopics} Success.
		 */
		News_Trending(cc: string | null | undefined, count: number | null | undefined, mkt: string | null | undefined, offset: number | null | undefined, safeSearch: News_CategorySafeSearch | null | undefined, setLang: string | null | undefined, since: number | null | undefined, sortBy: string | null | undefined, textDecorations: boolean | null | undefined, textFormat: News_CategoryTextFormat | null | undefined): Observable<TrendingTopics> {
			return this.http.get<TrendingTopics>(this.baseUri + 'news/trendingtopics?cc=' + (cc == null ? '' : encodeURIComponent(cc)) + '&count=' + count + '&mkt=' + (mkt == null ? '' : encodeURIComponent(mkt)) + '&offset=' + offset + '&safeSearch=' + safeSearch + '&setLang=' + (setLang == null ? '' : encodeURIComponent(setLang)) + '&since=' + since + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&textDecorations=' + textDecorations + '&textFormat=' + textFormat, {});
		}
	}

	export enum News_CategoryX_BingApis_SDK { true = 0 }

	export enum News_CategorySafeSearch { Off = 0, Moderate = 1, Strict = 2 }

	export enum News_CategoryTextFormat { Raw = 0, Html = 1 }

	export enum News_SearchFreshness { Day = 0, Week = 1, Month = 2 }

}

