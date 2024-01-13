import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Defines an action. */
	export interface Action {

		/** A display name for the action. */
		displayName?: string | null;

		/** A Boolean representing whether this result is the top action. */
		isTopAction?: boolean | null;
		location?: Array<Place>;

		/** The result produced in the action. */
		result?: Array<Thing>;

		/** Use this URL to get additional data to determine how to take the appropriate action. For example, the serviceUrl might return JSON along with an image URL. */
		serviceUrl?: string | null;
	}

	/** Defines an action. */
	export interface ActionFormProperties {

		/** A display name for the action. */
		displayName: FormControl<string | null | undefined>,

		/** A Boolean representing whether this result is the top action. */
		isTopAction: FormControl<boolean | null | undefined>,

		/** Use this URL to get additional data to determine how to take the appropriate action. For example, the serviceUrl might return JSON along with an image URL. */
		serviceUrl: FormControl<string | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			isTopAction: new FormControl<boolean | null | undefined>(undefined),
			serviceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines information about a local entity, such as a restaurant or hotel. */
	export interface Place {

		/** Defines a postal address. */
		address?: PostalAddress;
		geo?: GeoCoordinates;
		routablePoint?: GeoCoordinates;

		/** The entity's telephone number */
		telephone?: string | null;
	}

	/** Defines information about a local entity, such as a restaurant or hotel. */
	export interface PlaceFormProperties {

		/** The entity's telephone number */
		telephone: FormControl<string | null | undefined>,
	}
	export function CreatePlaceFormGroup() {
		return new FormGroup<PlaceFormProperties>({
			telephone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a postal address. */
	export interface PostalAddress {

		/** The country/region where the street address is located. This could be the two-letter ISO code. For example, US, or the full name, United States. */
		addressCountry?: string | null;

		/** The city where the street address is located. For example, Seattle. */
		addressLocality?: string | null;

		/** The state or province code where the street address is located. This could be the two-letter code. For example, WA, or the full name , Washington. */
		addressRegion?: string | null;

		/** Region Abbreviation. For example, WA. */
		addressRegionAbbreviation?: string | null;
		addressSubregion?: string | null;

		/** The two letter ISO code of this country. For example, US. */
		countryIso?: string | null;
		formattingRuleId?: string | null;
		houseNumber?: string | null;

		/** The neighborhood where the street address is located. For example, Westlake. */
		neighborhood?: string | null;
		postOfficeBoxNumber?: string | null;

		/** The zip code or postal code where the street address is located. For example, 98052. */
		postalCode?: string | null;
		streetAddress?: string | null;
		streetName?: string | null;

		/** The complete address. For example, 2100 Westlake Ave N, Bellevue, WA 98052. */
		text?: string | null;
	}

	/** Defines a postal address. */
	export interface PostalAddressFormProperties {

		/** The country/region where the street address is located. This could be the two-letter ISO code. For example, US, or the full name, United States. */
		addressCountry: FormControl<string | null | undefined>,

		/** The city where the street address is located. For example, Seattle. */
		addressLocality: FormControl<string | null | undefined>,

		/** The state or province code where the street address is located. This could be the two-letter code. For example, WA, or the full name , Washington. */
		addressRegion: FormControl<string | null | undefined>,

		/** Region Abbreviation. For example, WA. */
		addressRegionAbbreviation: FormControl<string | null | undefined>,
		addressSubregion: FormControl<string | null | undefined>,

		/** The two letter ISO code of this country. For example, US. */
		countryIso: FormControl<string | null | undefined>,
		formattingRuleId: FormControl<string | null | undefined>,
		houseNumber: FormControl<string | null | undefined>,

		/** The neighborhood where the street address is located. For example, Westlake. */
		neighborhood: FormControl<string | null | undefined>,
		postOfficeBoxNumber: FormControl<string | null | undefined>,

		/** The zip code or postal code where the street address is located. For example, 98052. */
		postalCode: FormControl<string | null | undefined>,
		streetAddress: FormControl<string | null | undefined>,
		streetName: FormControl<string | null | undefined>,

		/** The complete address. For example, 2100 Westlake Ave N, Bellevue, WA 98052. */
		text: FormControl<string | null | undefined>,
	}
	export function CreatePostalAddressFormGroup() {
		return new FormGroup<PostalAddressFormProperties>({
			addressCountry: new FormControl<string | null | undefined>(undefined),
			addressLocality: new FormControl<string | null | undefined>(undefined),
			addressRegion: new FormControl<string | null | undefined>(undefined),
			addressRegionAbbreviation: new FormControl<string | null | undefined>(undefined),
			addressSubregion: new FormControl<string | null | undefined>(undefined),
			countryIso: new FormControl<string | null | undefined>(undefined),
			formattingRuleId: new FormControl<string | null | undefined>(undefined),
			houseNumber: new FormControl<string | null | undefined>(undefined),
			neighborhood: new FormControl<string | null | undefined>(undefined),
			postOfficeBoxNumber: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			streetAddress: new FormControl<string | null | undefined>(undefined),
			streetName: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GeoCoordinates {

		/** Required */
		_type: string;
		elevation?: number | null;

		/** Required */
		latitude: number;

		/** Required */
		longitude: number;
	}
	export interface GeoCoordinatesFormProperties {

		/** Required */
		_type: FormControl<string | null | undefined>,
		elevation: FormControl<number | null | undefined>,

		/** Required */
		latitude: FormControl<number | null | undefined>,

		/** Required */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateGeoCoordinatesFormGroup() {
		return new FormGroup<GeoCoordinatesFormProperties>({
			_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			elevation: new FormControl<number | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a thing. */
	export interface Thing {

		/** Defines additional information about an entity such as type hints. */
		entityPresentationInfo?: EntitiesEntityPresentationInfo;

		/** The name of the thing represented by this object. */
		name?: string | null;

		/** The URL to get more information about the thing represented by this object. */
		url?: string | null;
	}

	/** Defines a thing. */
	export interface ThingFormProperties {

		/** The name of the thing represented by this object. */
		name: FormControl<string | null | undefined>,

		/** The URL to get more information about the thing represented by this object. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateThingFormGroup() {
		return new FormGroup<ThingFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines additional information about an entity such as type hints. */
	export interface EntitiesEntityPresentationInfo {

		/** Required */
		_type: string;

		/**
		 * The supported scenario.
		 * Required
		 */
		entityScenario: EntitiesEntityPresentationInfoEntityScenario;
		entitySubTypeHints?: Array<string>;

		/** A display version of the entity hint. For example, if entityTypeHints is Artist, this field may be set to American Singer. */
		entityTypeDisplayHint?: string | null;

		/** A list of hints that indicate the entity's type. The list could contain a single hint such as Movie or a list of hints such as Place, LocalBusiness, Restaurant. Each successive hint in the array narrows the entity's type. */
		entityTypeHints?: Array<string>;
		query?: string | null;
	}

	/** Defines additional information about an entity such as type hints. */
	export interface EntitiesEntityPresentationInfoFormProperties {

		/** Required */
		_type: FormControl<string | null | undefined>,

		/**
		 * The supported scenario.
		 * Required
		 */
		entityScenario: FormControl<EntitiesEntityPresentationInfoEntityScenario | null | undefined>,

		/** A display version of the entity hint. For example, if entityTypeHints is Artist, this field may be set to American Singer. */
		entityTypeDisplayHint: FormControl<string | null | undefined>,
		query: FormControl<string | null | undefined>,
	}
	export function CreateEntitiesEntityPresentationInfoFormGroup() {
		return new FormGroup<EntitiesEntityPresentationInfoFormProperties>({
			_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			entityScenario: new FormControl<EntitiesEntityPresentationInfoEntityScenario | null | undefined>(undefined, [Validators.required]),
			entityTypeDisplayHint: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EntitiesEntityPresentationInfoEntityScenario { DominantEntity = 0, DisambiguationItem = 1, ListItem = 2 }


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

		/** The error code that further helps to identify the error. */
		subCode?: ErrorSubCode | null;

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

		/** The error code that further helps to identify the error. */
		subCode: FormControl<ErrorSubCode | null | undefined>,

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


	/** A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc. */
	export interface Intangible {
	}

	/** A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc. */
	export interface IntangibleFormProperties {
	}
	export function CreateIntangibleFormGroup() {
		return new FormGroup<IntangibleFormProperties>({
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

		/** Required */
		_type: string;

		/** A Boolean value that indicates whether the specified query has adult intent. The value is true if the query has adult intent; otherwise, false. */
		adultIntent?: boolean | null;

		/** AlteredQuery that is formatted for display purpose. The query string in the AlterationDisplayQuery can be html-escaped and can contain hit-highlighting characters */
		alterationDisplayQuery?: string | null;

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

		/** AlteredQuery that is formatted for display purpose. The query string in the AlterationDisplayQuery can be html-escaped and can contain hit-highlighting characters */
		alterationDisplayQuery: FormControl<string | null | undefined>,

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
			alterationDisplayQuery: new FormControl<string | null | undefined>(undefined),
			alterationOverrideQuery: new FormControl<string | null | undefined>(undefined),
			alteredQuery: new FormControl<string | null | undefined>(undefined),
			askUserForLocation: new FormControl<boolean | null | undefined>(undefined),
			isTransactional: new FormControl<boolean | null | undefined>(undefined),
			originalQuery: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a response. All schemas that return at the root of the response must inherit from this object. */
	export interface Response {
		adaptiveCard?: string | null;
		immediateAction?: Array<Action>;
		potentialAction?: Array<Action>;
		preferredClickthroughUrl?: string | null;

		/** The URL that returns this resource. */
		readLink?: string | null;

		/** The URL to Bing's search result for this item. */
		webSearchUrl?: string | null;
	}

	/** Defines a response. All schemas that return at the root of the response must inherit from this object. */
	export interface ResponseFormProperties {
		adaptiveCard: FormControl<string | null | undefined>,
		preferredClickthroughUrl: FormControl<string | null | undefined>,

		/** The URL that returns this resource. */
		readLink: FormControl<string | null | undefined>,

		/** The URL to Bing's search result for this item. */
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
		formattingRuleId?: string | null;
		query?: string | null;
		richContent?: Array<Answer>;
	}
	export interface SearchActionFormProperties {
		displayText: FormControl<string | null | undefined>,
		formattingRuleId: FormControl<string | null | undefined>,
		query: FormControl<string | null | undefined>,
	}
	export function CreateSearchActionFormGroup() {
		return new FormGroup<SearchActionFormProperties>({
			displayText: new FormControl<string | null | undefined>(undefined),
			formattingRuleId: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the top-level object that the response includes when the request succeeds. */
	export interface SearchResponse {

		/** Defines a search result answer. */
		lottery?: SearchResultsAnswer;

		/** Defines a local entity answer. */
		places?: Places;

		/** Defines the query context that Bing used for the request. */
		queryContext?: QueryContext;
		searchResultsConfidenceScore?: number | null;
	}

	/** Defines the top-level object that the response includes when the request succeeds. */
	export interface SearchResponseFormProperties {
		searchResultsConfidenceScore: FormControl<number | null | undefined>,
	}
	export function CreateSearchResponseFormGroup() {
		return new FormGroup<SearchResponseFormProperties>({
			searchResultsConfidenceScore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines a search result answer. */
	export interface SearchResultsAnswer {
		isFamilyFriendly?: boolean | null;

		/** Defines the query context that Bing used for the request. */
		queryContext?: QueryContext;

		/** The estimated number of webpages that are relevant to the query. Use this number along with the count and offset query parameters to page the results. */
		totalEstimatedMatches?: number | null;
	}

	/** Defines a search result answer. */
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * The Local Search API lets you send a search query to Bing and get back search results that include local businesses such as restaurants, hotels, retail stores, or other local businesses. The query can specify the name of the local business or it can ask for a list (for example, restaurants near me).
		 * Get v7.0/localbusinesses/search
		 * @param {string} cc A 2-character country code of the country where the results come from. This API supports only the United States market. If you specify this query parameter, it must be set to us. If you set this parameter, you must also specify the Accept-Language header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the mkt query parameter are mutually exclusive—do not specify both.
		 * @param {string} mkt The market where the results come from. You are strongly encouraged to always specify the market, if known. Specifying the market helps Bing route the request and return an appropriate and optimal response. This parameter and the cc query parameter are mutually exclusive—do not specify both.
		 * @param {string} q The user's search term.
		 * @param {string} localcategories comma-delimited list of business categories to search for. Supported categories can be high-level such as EatDrink, Shop, SeeDo.
		 * @param {string} localcircularview Preferred location to search around, expressed as Latitude, longitude and radius in meters. For example 47.61503,-122.1719,5000. Note that circular view should only be used to indicate a search around a point on the map, not as an approximation for a view port of a map rectangle.
		 * @param {string} localmapview Preferred bounding box for results, specified in NW_latitude, NW_Longitude, SE_Latitude, SE_Longitude format. For example 47.64,-122.13,47.63,-122.12. These values are lat, long pairs for the Northwest corner and the Southeast corner of a rectangle.
		 * @param {string} count Preferred number of results to return. If not specified, then Bing returns 1-20 of the most relevant results.
		 * @param {string} first First result to return. zero-based. default is 0.
		 * @param {Array<string>} ResponseFormat The media type to use for the response. The following are the possible case-insensitive values: JSON, JSONLD. The default is JSON. If you specify JSONLD, the response body includes JSON-LD objects that contain the search results.
		 * @param {Local_SearchSafeSearch} SafeSearch A filter used to filter adult content. Off: Return webpages with adult text, images, or videos. Moderate: Return webpages with adult text, but not adult images or videos. Strict: Do not return webpages with adult text, images, or videos. The default is Moderate. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
		 * @param {string} SetLang The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the Accept-Language header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
		 * @return {SearchResponse} Success.
		 */
		Local_Search(cc: string | null | undefined, mkt: string | null | undefined, q: string, localcategories: string | null | undefined, localcircularview: string | null | undefined, localmapview: string | null | undefined, count: string | null | undefined, first: string | null | undefined, ResponseFormat: Array<string> | null | undefined, SafeSearch: Local_SearchSafeSearch | null | undefined, SetLang: string | null | undefined): Observable<SearchResponse> {
			return this.http.get<SearchResponse>(this.baseUri + 'v7.0/localbusinesses/search?cc=' + (cc == null ? '' : encodeURIComponent(cc)) + '&mkt=' + (mkt == null ? '' : encodeURIComponent(mkt)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&localcategories=' + (localcategories == null ? '' : encodeURIComponent(localcategories)) + '&localcircularview=' + (localcircularview == null ? '' : encodeURIComponent(localcircularview)) + '&localmapview=' + (localmapview == null ? '' : encodeURIComponent(localmapview)) + '&count=' + (count == null ? '' : encodeURIComponent(count)) + '&first=' + (first == null ? '' : encodeURIComponent(first)) + '&' + ResponseFormat?.map(z => `ResponseFormat=${encodeURIComponent(z)}`).join('&') + '&SafeSearch=' + SafeSearch + '&SetLang=' + (SetLang == null ? '' : encodeURIComponent(SetLang)), {});
		}
	}

	export enum Local_SearchX_BingApis_SDK { true = 0 }

	export enum Local_SearchSafeSearch { Off = 0, Moderate = 1, Strict = 2 }

}

