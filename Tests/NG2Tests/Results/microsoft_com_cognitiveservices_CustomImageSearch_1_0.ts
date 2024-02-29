import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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

		/** The source of the creative work. */
		provider?: Array<Thing>;

		/** Text content of this creative work */
		text?: string | null;

		/** The URL to a thumbnail of the item. */
		thumbnailUrl?: string | null;
	}

	/** The most generic kind of creative work, including books, movies, photographs, software programs, etc. */
	export interface CreativeWorkFormProperties {

		/** Text content of this creative work */
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


	/** Defines an image */
	export interface ImageObject {

		/** A three-byte hexadecimal number that represents the color that dominates the image. Use the color as the temporary background in your client until the image is loaded. */
		accentColor?: string | null;

		/** Unique Id for the image */
		imageId?: string | null;

		/** The token that you use in a subsequent call to the Image Search API to get additional information about the image. For information about using this token, see the insightsToken query parameter. */
		imageInsightsToken?: string | null;

		/** Defines an image */
		thumbnail?: ImageObject;

		/** Visual representation of the image. Used for getting more sizes */
		visualWords?: string | null;
	}

	/** Defines an image */
	export interface ImageObjectFormProperties {

		/** A three-byte hexadecimal number that represents the color that dominates the image. Use the color as the temporary background in your client until the image is loaded. */
		accentColor: FormControl<string | null | undefined>,

		/** Unique Id for the image */
		imageId: FormControl<string | null | undefined>,

		/** The token that you use in a subsequent call to the Image Search API to get additional information about the image. For information about using this token, see the insightsToken query parameter. */
		imageInsightsToken: FormControl<string | null | undefined>,

		/** Visual representation of the image. Used for getting more sizes */
		visualWords: FormControl<string | null | undefined>,
	}
	export function CreateImageObjectFormGroup() {
		return new FormGroup<ImageObjectFormProperties>({
			accentColor: new FormControl<string | null | undefined>(undefined),
			imageId: new FormControl<string | null | undefined>(undefined),
			imageInsightsToken: new FormControl<string | null | undefined>(undefined),
			visualWords: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * Used as part of deduping. Tells client the next offset that client should use in the next pagination request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nextOffset?: number | null;

		/**
		 * A list of image objects that are relevant to the query. If there are no results, the List is empty.
		 * Required
		 */
		value: Array<ImageObject>;
	}

	/** Defines an image answer */
	export interface ImagesFormProperties {

		/**
		 * Used as part of deduping. Tells client the next offset that client should use in the next pagination request
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nextOffset: FormControl<number | null | undefined>,
	}
	export function CreateImagesFormGroup() {
		return new FormGroup<ImagesFormProperties>({
			nextOffset: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines a media object. */
	export interface MediaObject {

		/** Size of the media object content (use format "value unit" e.g "1024 B"). */
		contentSize?: string | null;

		/** Original URL to retrieve the source (file) for the media object (e.g the source URL for the image). */
		contentUrl?: string | null;

		/** Encoding format (e.g mp3, mp4, jpeg, etc). */
		encodingFormat?: string | null;

		/**
		 * The height of the media object, in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/** Display URL of the page that hosts the media object. */
		hostPageDisplayUrl?: string | null;

		/** URL of the page that hosts the media object. */
		hostPageUrl?: string | null;

		/**
		 * The width of the media object, in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}

	/** Defines a media object. */
	export interface MediaObjectFormProperties {

		/** Size of the media object content (use format "value unit" e.g "1024 B"). */
		contentSize: FormControl<string | null | undefined>,

		/** Original URL to retrieve the source (file) for the media object (e.g the source URL for the image). */
		contentUrl: FormControl<string | null | undefined>,

		/** Encoding format (e.g mp3, mp4, jpeg, etc). */
		encodingFormat: FormControl<string | null | undefined>,

		/**
		 * The height of the media object, in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/** Display URL of the page that hosts the media object. */
		hostPageDisplayUrl: FormControl<string | null | undefined>,

		/** URL of the page that hosts the media object. */
		hostPageUrl: FormControl<string | null | undefined>,

		/**
		 * The width of the media object, in pixels.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateMediaObjectFormGroup() {
		return new FormGroup<MediaObjectFormProperties>({
			contentSize: new FormControl<string | null | undefined>(undefined),
			contentUrl: new FormControl<string | null | undefined>(undefined),
			encodingFormat: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			hostPageDisplayUrl: new FormControl<string | null | undefined>(undefined),
			hostPageUrl: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
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


	/** Defines a response. All schemas that could be returned at the root of a response should inherit from this */
	export interface Response {

		/** The URL that returns this resource. */
		readLink?: string | null;

		/** The URL To Bing's search result for this item. */
		webSearchUrl?: string | null;
	}

	/** Defines a response. All schemas that could be returned at the root of a response should inherit from this */
	export interface ResponseFormProperties {

		/** The URL that returns this resource. */
		readLink: FormControl<string | null | undefined>,

		/** The URL To Bing's search result for this item. */
		webSearchUrl: FormControl<string | null | undefined>,
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
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


	/** Defines a search result answer. */
	export interface SearchResultsAnswer {

		/**
		 * The estimated number of webpages that are relevant to the query. Use this number along with the count and offset query parameters to page the results.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalEstimatedMatches?: string | null;
	}

	/** Defines a search result answer. */
	export interface SearchResultsAnswerFormProperties {

		/**
		 * The estimated number of webpages that are relevant to the query. Use this number along with the count and offset query parameters to page the results.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalEstimatedMatches: FormControl<string | null | undefined>,
	}
	export function CreateSearchResultsAnswerFormGroup() {
		return new FormGroup<SearchResultsAnswerFormProperties>({
			totalEstimatedMatches: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a webpage that is relevant to the query. */
	export interface WebPage {
	}

	/** Defines a webpage that is relevant to the query. */
	export interface WebPageFormProperties {
	}
	export function CreateWebPageFormGroup() {
		return new FormGroup<WebPageFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * The Custom Image Search API lets you send an image search query to Bing and get image results found in your custom view of the web.
		 * Get images/search
		 * @param {string} customConfig The identifier for the custom search configuration
		 * @param {CustomInstance_ImageSearchAspect} aspect Filter images by the following aspect ratios. All: Do not filter by aspect.Specifying this value is the same as not specifying the aspect parameter. Square: Return images with standard aspect ratio. Wide: Return images with wide screen aspect ratio. Tall: Return images with tall aspect ratio.
		 * @param {CustomInstance_ImageSearchColor} color Filter images by the following color options. ColorOnly: Return color images. Monochrome: Return black and white images. Return images with one of the following dominant colors: Black, Blue, Brown, Gray, Green, Orange, Pink, Purple, Red, Teal, White, Yellow
		 * @param {string} cc A 2-character country code of the country where the results come from. For a list of possible values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#market-codes). If you set this parameter, you must also specify the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#acceptlanguage) header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the [mkt](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#mkt) query parameter are mutually exclusive—do not specify both.
		 * @param {number} count The number of images to return in the response. The actual number delivered may be less than requested. The default is 35. The maximum value is 150. You use this parameter along with the offset parameter to page results.For example, if your user interface displays 20 images per page, set count to 20 and offset to 0 to get the first page of results.For each subsequent page, increment offset by 20 (for example, 0, 20, 40). Use this parameter only with the Image Search API.Do not specify this parameter when calling the Insights, Trending Images, or Web Search APIs.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {CustomInstance_ImageSearchFreshness} freshness Filter images by the following discovery options. Day: Return images discovered by Bing within the last 24 hours. Week: Return images discovered by Bing within the last 7 days. Month: Return images discovered by Bing within the last 30 days.
		 * @param {number} height Filter images that have the specified height, in pixels. You may use this filter with the size filter to return small images that have a height of 150 pixels.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} id An ID that uniquely identifies an image. Use this parameter to ensure that the specified image is the first image in the list of images that Bing returns. The [Image](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#image) object's imageId field contains the ID that you set this parameter to.
		 * @param {CustomInstance_ImageSearchImageContent} imageContent Filter images by the following content types. Face: Return images that show only a person's face. Portrait: Return images that show only a person's head and shoulders.
		 * @param {CustomInstance_ImageSearchImageType} imageType Filter images by the following image types. AnimatedGif: Return only animated GIFs. Clipart: Return only clip art images. Line: Return only line drawings. Photo: Return only photographs(excluding line drawings, animated Gifs, and clip art). Shopping: Return only images that contain items where Bing knows of a merchant that is selling the items. This option is valid in the en - US market only.Transparent: Return only images with a transparent background.
		 * @param {CustomInstance_ImageSearchLicense} license Filter images by the following license types. All: Do not filter by license type.Specifying this value is the same as not specifying the license parameter. Any: Return images that are under any license type. The response doesn't include images that do not specify a license or the license is unknown. Public: Return images where the creator has waived their exclusive rights, to the fullest extent allowed by law. Share: Return images that may be shared with others. Changing or editing the image might not be allowed. Also, modifying, sharing, and using the image for commercial purposes might not be allowed. Typically, this option returns the most images. ShareCommercially: Return images that may be shared with others for personal or commercial purposes. Changing or editing the image might not be allowed. Modify: Return images that may be modified, shared, and used. Changing or editing the image might not be allowed. Modifying, sharing, and using the image for commercial purposes might not be allowed. ModifyCommercially: Return images that may be modified, shared, and used for personal or commercial purposes. Typically, this option returns the fewest images. For more information about these license types, see [Filter Images By License Type](http://go.microsoft.com/fwlink/?LinkId=309768).
		 * @param {string} mkt The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. For example, en-US. The string is case insensitive. For a list of possible market values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#market-codes). NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#market-codes), Bing uses a best fit market code based on an internal mapping that is subject to change. This parameter and the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#cc) query parameter are mutually exclusive—do not specify both.
		 * @param {string} maxFileSize Filter images that are less than or equal to the specified file size. The maximum file size that you may specify is 520,192 bytes. If you specify a larger value, the API uses 520,192. It is possible that the response may include images that are slightly larger than the specified maximum. You may specify this filter and minFileSize to filter images within a range of file sizes.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} maxHeight Filter images that have a height that is less than or equal to the specified height. Specify the height in pixels. You may specify this filter and minHeight to filter images within a range of heights. This filter and the height filter are mutually exclusive.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} maxWidth Filter images that have a width that is less than or equal to the specified width. Specify the width in pixels. You may specify this filter and maxWidth to filter images within a range of widths. This filter and the width filter are mutually exclusive.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} minFileSize Filter images that are greater than or equal to the specified file size. The maximum file size that you may specify is 520,192 bytes. If you specify a larger value, the API uses 520,192. It is possible that the response may include images that are slightly smaller than the specified minimum. You may specify this filter and maxFileSize to filter images within a range of file sizes.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} minHeight Filter images that have a height that is greater than or equal to the specified height. Specify the height in pixels. You may specify this filter and maxHeight to filter images within a range of heights. This filter and the height filter are mutually exclusive.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} minWidth Filter images that have a width that is greater than or equal to the specified width. Specify the width in pixels. You may specify this filter and maxWidth to filter images within a range of widths. This filter and the width filter are mutually exclusive.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} offset The zero-based offset that indicates the number of images to skip before returning images. The default is 0. The offset should be less than ([totalEstimatedMatches](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#totalestimatedmatches) - count). Use this parameter along with the count parameter to page results. For example, if your user interface displays 20 images per page, set count to 20 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 20 (for example, 0, 20, 40). It is possible for multiple pages to include some overlap in results. To prevent duplicates, see [nextOffset](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#nextoffset). Use this parameter only with the Image API. Do not specify this parameter when calling the Trending Images API or the Web Search API.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} q The user's search query term. The term cannot be empty. The term may contain [Bing Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For example, to limit images to a specific domain, use the [site:](http://msdn.microsoft.com/library/ff795613.aspx) operator. To help improve relevance of an insights query (see [insightsToken](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#insightstoken)), you should always include the user's query term. Use this parameter only with the Image Search API.Do not specify this parameter when calling the Trending Images API.
		 * @param {CustomInstance_ImageSearchSafeSearch} safeSearch Filter images for adult content. The following are the possible filter values. Off: May return images with adult content. If the request is through the Image Search API, the response includes thumbnail images that are clear (non-fuzzy). However, if the request is through the Web Search API, the response includes thumbnail images that are pixelated (fuzzy). Moderate: If the request is through the Image Search API, the response doesn't include images with adult content. If the request is through the Web Search API, the response may include images with adult content (the thumbnail images are pixelated (fuzzy)). Strict: Do not return images with adult content. The default is Moderate. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
		 * @param {CustomInstance_ImageSearchSize} size Filter images by the following sizes. All: Do not filter by size. Specifying this value is the same as not specifying the size parameter. Small: Return images that are less than 200x200 pixels. Medium: Return images that are greater than or equal to 200x200 pixels but less than 500x500 pixels. Large: Return images that are 500x500 pixels or larger. Wallpaper: Return wallpaper images. You may use this parameter along with the height or width parameters. For example, you may use height and size to request small images that are 150 pixels tall.
		 * @param {string} setLang The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#acceptlanguage) header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
		 * @param {number} width Filter images that have the specified width, in pixels. You may use this filter with the size filter to return small images that have a width of 150 pixels.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Images} Success.
		 */
		CustomInstance_ImageSearch(customConfig: string, aspect: CustomInstance_ImageSearchAspect | null | undefined, color: CustomInstance_ImageSearchColor | null | undefined, cc: string | null | undefined, count: number | null | undefined, freshness: CustomInstance_ImageSearchFreshness | null | undefined, height: number | null | undefined, id: string | null | undefined, imageContent: CustomInstance_ImageSearchImageContent | null | undefined, imageType: CustomInstance_ImageSearchImageType | null | undefined, license: CustomInstance_ImageSearchLicense | null | undefined, mkt: string | null | undefined, maxFileSize: string | null | undefined, maxHeight: string | null | undefined, maxWidth: string | null | undefined, minFileSize: string | null | undefined, minHeight: string | null | undefined, minWidth: string | null | undefined, offset: string | null | undefined, q: string, safeSearch: CustomInstance_ImageSearchSafeSearch | null | undefined, size: CustomInstance_ImageSearchSize | null | undefined, setLang: string | null | undefined, width: number | null | undefined): Observable<Images> {
			return this.http.get<Images>(this.baseUri + 'images/search?customConfig=' + (customConfig == null ? '' : encodeURIComponent(customConfig)) + '&aspect=' + aspect + '&color=' + color + '&cc=' + (cc == null ? '' : encodeURIComponent(cc)) + '&count=' + count + '&freshness=' + freshness + '&height=' + height + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&imageContent=' + imageContent + '&imageType=' + imageType + '&license=' + license + '&mkt=' + (mkt == null ? '' : encodeURIComponent(mkt)) + '&maxFileSize=' + maxFileSize + '&maxHeight=' + maxHeight + '&maxWidth=' + maxWidth + '&minFileSize=' + minFileSize + '&minHeight=' + minHeight + '&minWidth=' + minWidth + '&offset=' + offset + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&safeSearch=' + safeSearch + '&size=' + size + '&setLang=' + (setLang == null ? '' : encodeURIComponent(setLang)) + '&width=' + width, {});
		}
	}

	export enum CustomInstance_ImageSearchX_BingApis_SDK { true = 'true' }

	export enum CustomInstance_ImageSearchAspect { All = 'All', Square = 'Square', Wide = 'Wide', Tall = 'Tall' }

	export enum CustomInstance_ImageSearchColor { ColorOnly = 'ColorOnly', Monochrome = 'Monochrome', Black = 'Black', Blue = 'Blue', Brown = 'Brown', Gray = 'Gray', Green = 'Green', Orange = 'Orange', Pink = 'Pink', Purple = 'Purple', Red = 'Red', Teal = 'Teal', White = 'White', Yellow = 'Yellow' }

	export enum CustomInstance_ImageSearchFreshness { Day = 'Day', Week = 'Week', Month = 'Month' }

	export enum CustomInstance_ImageSearchImageContent { Face = 'Face', Portrait = 'Portrait' }

	export enum CustomInstance_ImageSearchImageType { AnimatedGif = 'AnimatedGif', Clipart = 'Clipart', Line = 'Line', Photo = 'Photo', Shopping = 'Shopping', Transparent = 'Transparent' }

	export enum CustomInstance_ImageSearchLicense { All = 'All', Any = 'Any', Public = 'Public', Share = 'Share', ShareCommercially = 'ShareCommercially', Modify = 'Modify', ModifyCommercially = 'ModifyCommercially' }

	export enum CustomInstance_ImageSearchSafeSearch { Off = 'Off', Moderate = 'Moderate', Strict = 'Strict' }

	export enum CustomInstance_ImageSearchSize { All = 'All', Small = 'Small', Medium = 'Medium', Large = 'Large', Wallpaper = 'Wallpaper' }

}

