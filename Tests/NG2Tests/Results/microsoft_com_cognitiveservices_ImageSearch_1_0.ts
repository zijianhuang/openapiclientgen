import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Defines a list of offers from merchants that are related to the image. */
	export interface AggregateOffer {

		/** A list of offers from merchants that have offerings related to the image. */
		offers?: Array<Offer>;
	}

	/** Defines a list of offers from merchants that are related to the image. */
	export interface AggregateOfferFormProperties {
	}
	export function CreateAggregateOfferFormGroup() {
		return new FormGroup<AggregateOfferFormProperties>({
		});

	}


	/** Defines a merchant's offer. */
	export interface Offer {

		/** Defines the metrics that indicate how well an item was rated by others. */
		aggregateRating?: AggregateRating;

		/** The item's availability. The following are the possible values: Discontinued, InStock, InStoreOnly, LimitedAvailability, OnlineOnly, OutOfStock, PreOrder, SoldOut */
		availability?: OfferAvailability | null;

		/** The last date that the offer was updated. The date is in the form YYYY-MM-DD. */
		lastUpdated?: string | null;

		/** The item's price. */
		price?: number | null;

		/** The monetary currency. For example, USD. */
		priceCurrency?: OfferPriceCurrency | null;

		/** Defines an organization. */
		seller?: Organization;
	}

	/** Defines a merchant's offer. */
	export interface OfferFormProperties {

		/** The item's availability. The following are the possible values: Discontinued, InStock, InStoreOnly, LimitedAvailability, OnlineOnly, OutOfStock, PreOrder, SoldOut */
		availability: FormControl<OfferAvailability | null | undefined>,

		/** The last date that the offer was updated. The date is in the form YYYY-MM-DD. */
		lastUpdated: FormControl<string | null | undefined>,

		/** The item's price. */
		price: FormControl<number | null | undefined>,

		/** The monetary currency. For example, USD. */
		priceCurrency: FormControl<OfferPriceCurrency | null | undefined>,
	}
	export function CreateOfferFormGroup() {
		return new FormGroup<OfferFormProperties>({
			availability: new FormControl<OfferAvailability | null | undefined>(undefined),
			lastUpdated: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			priceCurrency: new FormControl<OfferPriceCurrency | null | undefined>(undefined),
		});

	}


	/** Defines the metrics that indicate how well an item was rated by others. */
	export interface AggregateRating {

		/** The number of times the recipe has been rated or reviewed. */
		reviewCount?: number | null;
	}

	/** Defines the metrics that indicate how well an item was rated by others. */
	export interface AggregateRatingFormProperties {

		/** The number of times the recipe has been rated or reviewed. */
		reviewCount: FormControl<number | null | undefined>,
	}
	export function CreateAggregateRatingFormGroup() {
		return new FormGroup<AggregateRatingFormProperties>({
			reviewCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum OfferAvailability { Discontinued = 'Discontinued', InStock = 'InStock', InStoreOnly = 'InStoreOnly', LimitedAvailability = 'LimitedAvailability', OnlineOnly = 'OnlineOnly', OutOfStock = 'OutOfStock', PreOrder = 'PreOrder', SoldOut = 'SoldOut' }

	export enum OfferPriceCurrency { USD = 'USD', CAD = 'CAD', GBP = 'GBP', EUR = 'EUR', COP = 'COP', JPY = 'JPY', CNY = 'CNY', AUD = 'AUD', INR = 'INR', AED = 'AED', AFN = 'AFN', ALL = 'ALL', AMD = 'AMD', ANG = 'ANG', AOA = 'AOA', ARS = 'ARS', AWG = 'AWG', AZN = 'AZN', BAM = 'BAM', BBD = 'BBD', BDT = 'BDT', BGN = 'BGN', BHD = 'BHD', BIF = 'BIF', BMD = 'BMD', BND = 'BND', BOB = 'BOB', BOV = 'BOV', BRL = 'BRL', BSD = 'BSD', BTN = 'BTN', BWP = 'BWP', BYR = 'BYR', BZD = 'BZD', CDF = 'CDF', CHE = 'CHE', CHF = 'CHF', CHW = 'CHW', CLF = 'CLF', CLP = 'CLP', COU = 'COU', CRC = 'CRC', CUC = 'CUC', CUP = 'CUP', CVE = 'CVE', CZK = 'CZK', DJF = 'DJF', DKK = 'DKK', DOP = 'DOP', DZD = 'DZD', EGP = 'EGP', ERN = 'ERN', ETB = 'ETB', FJD = 'FJD', FKP = 'FKP', GEL = 'GEL', GHS = 'GHS', GIP = 'GIP', GMD = 'GMD', GNF = 'GNF', GTQ = 'GTQ', GYD = 'GYD', HKD = 'HKD', HNL = 'HNL', HRK = 'HRK', HTG = 'HTG', HUF = 'HUF', IDR = 'IDR', ILS = 'ILS', IQD = 'IQD', IRR = 'IRR', ISK = 'ISK', JMD = 'JMD', JOD = 'JOD', KES = 'KES', KGS = 'KGS', KHR = 'KHR', KMF = 'KMF', KPW = 'KPW', KRW = 'KRW', KWD = 'KWD', KYD = 'KYD', KZT = 'KZT', LAK = 'LAK', LBP = 'LBP', LKR = 'LKR', LRD = 'LRD', LSL = 'LSL', LYD = 'LYD', MAD = 'MAD', MDL = 'MDL', MGA = 'MGA', MKD = 'MKD', MMK = 'MMK', MNT = 'MNT', MOP = 'MOP', MRO = 'MRO', MUR = 'MUR', MVR = 'MVR', MWK = 'MWK', MXN = 'MXN', MXV = 'MXV', MYR = 'MYR', MZN = 'MZN', NAD = 'NAD', NGN = 'NGN', NIO = 'NIO', NOK = 'NOK', NPR = 'NPR', NZD = 'NZD', OMR = 'OMR', PAB = 'PAB', PEN = 'PEN', PGK = 'PGK', PHP = 'PHP', PKR = 'PKR', PLN = 'PLN', PYG = 'PYG', QAR = 'QAR', RON = 'RON', RSD = 'RSD', RUB = 'RUB', RWF = 'RWF', SAR = 'SAR', SBD = 'SBD', SCR = 'SCR', SDG = 'SDG', SEK = 'SEK', SGD = 'SGD', SHP = 'SHP', SLL = 'SLL', SOS = 'SOS', SRD = 'SRD', SSP = 'SSP', STD = 'STD', SYP = 'SYP', SZL = 'SZL', THB = 'THB', TJS = 'TJS', TMT = 'TMT', TND = 'TND', TOP = 'TOP', TRY = 'TRY', TTD = 'TTD', TWD = 'TWD', TZS = 'TZS', UAH = 'UAH', UGX = 'UGX', UYU = 'UYU', UZS = 'UZS', VEF = 'VEF', VND = 'VND', VUV = 'VUV', WST = 'WST', XAF = 'XAF', XCD = 'XCD', XOF = 'XOF', XPF = 'XPF', YER = 'YER', ZAR = 'ZAR', ZMW = 'ZMW' }


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


	/** Defines a link to a webpage that contains a collection. */
	export interface CollectionPage {
	}

	/** Defines a link to a webpage that contains a collection. */
	export interface CollectionPageFormProperties {
	}
	export function CreateCollectionPageFormGroup() {
		return new FormGroup<CollectionPageFormProperties>({
		});

	}


	/** The most generic kind of creative work, including books, movies, photographs, software programs, etc. */
	export interface CreativeWork {

		/** The date on which the CreativeWork was published. */
		datePublished?: string | null;

		/** The source of the creative work. */
		provider?: Array<Thing>;

		/** Text content of this creative work */
		text?: string | null;

		/** The URL to a thumbnail of the item. */
		thumbnailUrl?: string | null;
	}

	/** The most generic kind of creative work, including books, movies, photographs, software programs, etc. */
	export interface CreativeWorkFormProperties {

		/** The date on which the CreativeWork was published. */
		datePublished: FormControl<string | null | undefined>,

		/** Text content of this creative work */
		text: FormControl<string | null | undefined>,

		/** The URL to a thumbnail of the item. */
		thumbnailUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreativeWorkFormGroup() {
		return new FormGroup<CreativeWorkFormProperties>({
			datePublished: new FormControl<string | null | undefined>(undefined),
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

		/** Defines a count of the number of websites where you can shop or perform other actions related to the image. */
		insightsMetadata?: ImagesImageMetadata;

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


	/** Defines a count of the number of websites where you can shop or perform other actions related to the image. */
	export interface ImagesImageMetadata {

		/** Defines a list of offers from merchants that are related to the image. */
		aggregateOffer?: AggregateOffer;

		/** The number of websites that offer recipes of the food seen in the image. */
		recipeSourcesCount?: number | null;

		/** The number of websites that offer goods of the products seen in the image. */
		shoppingSourcesCount?: number | null;
	}

	/** Defines a count of the number of websites where you can shop or perform other actions related to the image. */
	export interface ImagesImageMetadataFormProperties {

		/** The number of websites that offer recipes of the food seen in the image. */
		recipeSourcesCount: FormControl<number | null | undefined>,

		/** The number of websites that offer goods of the products seen in the image. */
		shoppingSourcesCount: FormControl<number | null | undefined>,
	}
	export function CreateImagesImageMetadataFormGroup() {
		return new FormGroup<ImagesImageMetadataFormProperties>({
			recipeSourcesCount: new FormControl<number | null | undefined>(undefined),
			shoppingSourcesCount: new FormControl<number | null | undefined>(undefined),
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


	/** Defines a link to a webpage that contains a collection of related images. */
	export interface ImageGallery {

		/** The number of users on the social network that follow the creator. */
		followersCount?: number | null;

		/** The number of related images found in the collection. */
		imagesCount?: number | null;

		/** The publisher or social network where the images were found. You must attribute the publisher as the source where the collection was found. */
		source?: string | null;
	}

	/** Defines a link to a webpage that contains a collection of related images. */
	export interface ImageGalleryFormProperties {

		/** The number of users on the social network that follow the creator. */
		followersCount: FormControl<number | null | undefined>,

		/** The number of related images found in the collection. */
		imagesCount: FormControl<number | null | undefined>,

		/** The publisher or social network where the images were found. You must attribute the publisher as the source where the collection was found. */
		source: FormControl<string | null | undefined>,
	}
	export function CreateImageGalleryFormGroup() {
		return new FormGroup<ImageGalleryFormProperties>({
			followersCount: new FormControl<number | null | undefined>(undefined),
			imagesCount: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The top-level object that the response includes when an image insights request succeeds. For information about requesting image insights, see the [insightsToken](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#insightstoken) query parameter. The modules query parameter affects the fields that Bing includes in the response. If you set [modules](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#modulesrequested) to only Caption, then this object includes only the imageCaption field. */
	export interface ImageInsights {

		/** Defines a search query. */
		bestRepresentativeQuery?: Query;

		/** Defines an image's caption. */
		imageCaption?: ImageInsightsImageCaption;

		/** A token that you use in a subsequent call to the Image Search API to get more information about the image. For information about using this token, see the insightsToken query parameter. This token has the same usage as the token in the Image object. */
		imageInsightsToken?: string | null;

		/** Defines the characteristics of content found in an image. */
		imageTags?: ImageTagsModule;

		/** Defines a list of images. */
		pagesIncluding?: ImagesModule;

		/** Defines a list of recipes. */
		recipes?: RecipesModule;

		/** Defines a list of previously recognized entities. */
		recognizedEntityGroups?: RecognizedEntitiesModule;

		/** Defines a list of webpages that contain related images. */
		relatedCollections?: RelatedCollectionsModule;

		/** Defines a list of related searches. */
		relatedSearches?: RelatedSearchesModule;

		/** Defines a list of offers from merchants that are related to the image. */
		shoppingSources?: AggregateOffer;

		/** Defines a list of images. */
		visuallySimilarImages?: ImagesModule;

		/** Defines a list of images. */
		visuallySimilarProducts?: ImagesModule;
	}

	/** The top-level object that the response includes when an image insights request succeeds. For information about requesting image insights, see the [insightsToken](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#insightstoken) query parameter. The modules query parameter affects the fields that Bing includes in the response. If you set [modules](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#modulesrequested) to only Caption, then this object includes only the imageCaption field. */
	export interface ImageInsightsFormProperties {

		/** A token that you use in a subsequent call to the Image Search API to get more information about the image. For information about using this token, see the insightsToken query parameter. This token has the same usage as the token in the Image object. */
		imageInsightsToken: FormControl<string | null | undefined>,
	}
	export function CreateImageInsightsFormGroup() {
		return new FormGroup<ImageInsightsFormProperties>({
			imageInsightsToken: new FormControl<string | null | undefined>(undefined),
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


	/** Defines an image's caption. */
	export interface ImageInsightsImageCaption {

		/**
		 * A caption about the image.
		 * Required
		 */
		caption: string;

		/**
		 * The URL to the website where the caption was found. You must attribute the caption to the source. For example, by displaying the domain name from the URL next to the caption and using the URL to link to the source website.
		 * Required
		 */
		dataSourceUrl: string;

		/**
		 * A list of entities found in the caption. Use the contents of the Query object to find the entity in the caption and create a link. The link takes the user to images of the entity.
		 * Required
		 */
		relatedSearches: Array<Query>;
	}

	/** Defines an image's caption. */
	export interface ImageInsightsImageCaptionFormProperties {

		/**
		 * A caption about the image.
		 * Required
		 */
		caption: FormControl<string | null | undefined>,

		/**
		 * The URL to the website where the caption was found. You must attribute the caption to the source. For example, by displaying the domain name from the URL next to the caption and using the URL to link to the source website.
		 * Required
		 */
		dataSourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateImageInsightsImageCaptionFormGroup() {
		return new FormGroup<ImageInsightsImageCaptionFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSourceUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines the characteristics of content found in an image. */
	export interface ImageTagsModule {

		/**
		 * A list of tags that describe the characteristics of the content found in the image. For example, if the image is of a musical artist, the list might include Female, Dress, and Music to indicate the person is female music artist that's wearing a dress.
		 * Required
		 */
		value: Array<InsightsTag>;
	}

	/** Defines the characteristics of content found in an image. */
	export interface ImageTagsModuleFormProperties {
	}
	export function CreateImageTagsModuleFormGroup() {
		return new FormGroup<ImageTagsModuleFormProperties>({
		});

	}


	/** Defines a characteristic of the content found in the image. */
	export interface InsightsTag {

		/** The name of the characteristic. For example, cat, kitty, calico cat. */
		name?: string | null;
	}

	/** Defines a characteristic of the content found in the image. */
	export interface InsightsTagFormProperties {

		/** The name of the characteristic. For example, cat, kitty, calico cat. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateInsightsTagFormGroup() {
		return new FormGroup<InsightsTagFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a list of images. */
	export interface ImagesModule {

		/** A list of images. */
		value?: Array<ImageObject>;
	}

	/** Defines a list of images. */
	export interface ImagesModuleFormProperties {
	}
	export function CreateImagesModuleFormGroup() {
		return new FormGroup<ImagesModuleFormProperties>({
		});

	}


	/** Defines a list of recipes. */
	export interface RecipesModule {

		/** A list of recipes. */
		value?: Array<Recipe>;
	}

	/** Defines a list of recipes. */
	export interface RecipesModuleFormProperties {
	}
	export function CreateRecipesModuleFormGroup() {
		return new FormGroup<RecipesModuleFormProperties>({
		});

	}


	/** Defines a cooking recipe. */
	export interface Recipe {

		/** The amount of time the food takes to cook. For example, PT25M. For information about the time format, see http://en.wikipedia.org/wiki/ISO_8601#Durations. */
		cookTime?: string | null;

		/** The amount of time required to prepare the ingredients. For example, PT15M. For information about the time format, see http://en.wikipedia.org/wiki/ISO_8601#Durations. */
		prepTime?: string | null;

		/** The total amount of time it takes to prepare and cook the recipe. For example, PT45M. For information about the time format, see http://en.wikipedia.org/wiki/ISO_8601#Durations. */
		totalTime?: string | null;
	}

	/** Defines a cooking recipe. */
	export interface RecipeFormProperties {

		/** The amount of time the food takes to cook. For example, PT25M. For information about the time format, see http://en.wikipedia.org/wiki/ISO_8601#Durations. */
		cookTime: FormControl<string | null | undefined>,

		/** The amount of time required to prepare the ingredients. For example, PT15M. For information about the time format, see http://en.wikipedia.org/wiki/ISO_8601#Durations. */
		prepTime: FormControl<string | null | undefined>,

		/** The total amount of time it takes to prepare and cook the recipe. For example, PT45M. For information about the time format, see http://en.wikipedia.org/wiki/ISO_8601#Durations. */
		totalTime: FormControl<string | null | undefined>,
	}
	export function CreateRecipeFormGroup() {
		return new FormGroup<RecipeFormProperties>({
			cookTime: new FormControl<string | null | undefined>(undefined),
			prepTime: new FormControl<string | null | undefined>(undefined),
			totalTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a list of previously recognized entities. */
	export interface RecognizedEntitiesModule {

		/** A list of recognized entities. */
		value?: Array<RecognizedEntityGroup>;
	}

	/** Defines a list of previously recognized entities. */
	export interface RecognizedEntitiesModuleFormProperties {
	}
	export function CreateRecognizedEntitiesModuleFormGroup() {
		return new FormGroup<RecognizedEntitiesModuleFormProperties>({
		});

	}


	/** Defines a group of previously recognized entities. */
	export interface RecognizedEntityGroup {

		/**
		 * The name of the group where images of the entity were also found. The following are possible groups. CelebRecognitionAnnotations: Similar to CelebrityAnnotations but provides a higher probability of an accurate match. CelebrityAnnotations: Contains celebrities such as actors, politicians, athletes, and historical figures.
		 * Required
		 */
		name: string;

		/**
		 * The regions of the image that contain entities.
		 * Required
		 */
		recognizedEntityRegions: Array<RecognizedEntityRegion>;
	}

	/** Defines a group of previously recognized entities. */
	export interface RecognizedEntityGroupFormProperties {

		/**
		 * The name of the group where images of the entity were also found. The following are possible groups. CelebRecognitionAnnotations: Similar to CelebrityAnnotations but provides a higher probability of an accurate match. CelebrityAnnotations: Contains celebrities such as actors, politicians, athletes, and historical figures.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRecognizedEntityGroupFormGroup() {
		return new FormGroup<RecognizedEntityGroupFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a region of the image where an entity was found and a list of entities that might match it. */
	export interface RecognizedEntityRegion {

		/** A list of entities that Bing believes match the entity found in the region. The entities are in descending order of confidence (see the matchConfidence field of RecognizedEntity). */
		matchingEntities?: Array<RecognizedEntity>;

		/** Defines a region of an image. The region is defined by the coordinates of the top, left corner and bottom, right corner of the region. The coordinates are fractional values of the original image's width and height in the range 0.0 through 1.0. */
		region?: NormalizedRectangle;
	}

	/** Defines a region of the image where an entity was found and a list of entities that might match it. */
	export interface RecognizedEntityRegionFormProperties {
	}
	export function CreateRecognizedEntityRegionFormGroup() {
		return new FormGroup<RecognizedEntityRegionFormProperties>({
		});

	}


	/** Defines a recognized entity. */
	export interface RecognizedEntity {

		/** Defines a thing. */
		entity?: Thing;

		/** The confidence that Bing has that the entity in the image matches this entity. The confidence ranges from 0.0 through 1.0 with 1.0 being very confident. */
		matchConfidence?: number | null;
	}

	/** Defines a recognized entity. */
	export interface RecognizedEntityFormProperties {

		/** The confidence that Bing has that the entity in the image matches this entity. The confidence ranges from 0.0 through 1.0 with 1.0 being very confident. */
		matchConfidence: FormControl<number | null | undefined>,
	}
	export function CreateRecognizedEntityFormGroup() {
		return new FormGroup<RecognizedEntityFormProperties>({
			matchConfidence: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines a region of an image. The region is defined by the coordinates of the top, left corner and bottom, right corner of the region. The coordinates are fractional values of the original image's width and height in the range 0.0 through 1.0. */
	export interface NormalizedRectangle {

		/**
		 * The bottom coordinate
		 * Required
		 */
		bottom: number;

		/**
		 * The left coordinate.
		 * Required
		 */
		left: number;

		/**
		 * The right coordinate
		 * Required
		 */
		right: number;

		/**
		 * The top coordinate
		 * Required
		 */
		top: number;
	}

	/** Defines a region of an image. The region is defined by the coordinates of the top, left corner and bottom, right corner of the region. The coordinates are fractional values of the original image's width and height in the range 0.0 through 1.0. */
	export interface NormalizedRectangleFormProperties {

		/**
		 * The bottom coordinate
		 * Required
		 */
		bottom: FormControl<number | null | undefined>,

		/**
		 * The left coordinate.
		 * Required
		 */
		left: FormControl<number | null | undefined>,

		/**
		 * The right coordinate
		 * Required
		 */
		right: FormControl<number | null | undefined>,

		/**
		 * The top coordinate
		 * Required
		 */
		top: FormControl<number | null | undefined>,
	}
	export function CreateNormalizedRectangleFormGroup() {
		return new FormGroup<NormalizedRectangleFormProperties>({
			bottom: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			left: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			right: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			top: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a list of webpages that contain related images. */
	export interface RelatedCollectionsModule {

		/** A list of webpages that contain related images. */
		value?: Array<ImageGallery>;
	}

	/** Defines a list of webpages that contain related images. */
	export interface RelatedCollectionsModuleFormProperties {
	}
	export function CreateRelatedCollectionsModuleFormGroup() {
		return new FormGroup<RelatedCollectionsModuleFormProperties>({
		});

	}


	/** Defines a list of related searches. */
	export interface RelatedSearchesModule {

		/** A list of related searches. */
		value?: Array<Query>;
	}

	/** Defines a list of related searches. */
	export interface RelatedSearchesModuleFormProperties {
	}
	export function CreateRelatedSearchesModuleFormGroup() {
		return new FormGroup<RelatedSearchesModuleFormProperties>({
		});

	}


	/** Defines an image answer */
	export interface Images {

		/** Used as part of deduping. Tells client the next offset that client should use in the next pagination request */
		nextOffset?: number | null;

		/** A list of segments in the original query. For example, if the query was Red Flowers, Bing might segment the query into Red and Flowers. The Flowers pivot may contain query suggestions such as Red Peonies and Red Daisies, and the Red pivot may contain query suggestions such as Green Flowers and Yellow Flowers. */
		pivotSuggestions?: Array<PivotSuggestions>;

		/** A list of expanded queries that narrows the original query. For example, if the query was Microsoft Surface, the expanded queries might be: Microsoft Surface Pro 3, Microsoft Surface RT, Microsoft Surface Phone, and Microsoft Surface Hub. */
		queryExpansions?: Array<Query>;

		/** A list of terms that are similar in meaning to the user's query term. */
		similarTerms?: Array<Query>;

		/**
		 * A list of image objects that are relevant to the query. If there are no results, the List is empty.
		 * Required
		 */
		value: Array<ImageObject>;
	}

	/** Defines an image answer */
	export interface ImagesFormProperties {

		/** Used as part of deduping. Tells client the next offset that client should use in the next pagination request */
		nextOffset: FormControl<number | null | undefined>,
	}
	export function CreateImagesFormGroup() {
		return new FormGroup<ImagesFormProperties>({
			nextOffset: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines the pivot segment. */
	export interface PivotSuggestions {

		/**
		 * The segment from the original query to pivot on.
		 * Required
		 */
		pivot: string;

		/**
		 * A list of suggested queries for the pivot.
		 * Required
		 */
		suggestions: Array<Query>;
	}

	/** Defines the pivot segment. */
	export interface PivotSuggestionsFormProperties {

		/**
		 * The segment from the original query to pivot on.
		 * Required
		 */
		pivot: FormControl<string | null | undefined>,
	}
	export function CreatePivotSuggestionsFormGroup() {
		return new FormGroup<PivotSuggestionsFormProperties>({
			pivot: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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


	/** Defines a media object. */
	export interface MediaObject {

		/** Size of the media object content (use format "value unit" e.g "1024 B"). */
		contentSize?: string | null;

		/** Original URL to retrieve the source (file) for the media object (e.g the source URL for the image). */
		contentUrl?: string | null;

		/** Encoding format (e.g mp3, mp4, jpeg, etc). */
		encodingFormat?: string | null;

		/** The height of the source media object, in pixels. */
		height?: number | null;

		/** Display URL of the page that hosts the media object. */
		hostPageDisplayUrl?: string | null;

		/** URL of the page that hosts the media object. */
		hostPageUrl?: string | null;

		/** The width of the source media object, in pixels. */
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

		/** The height of the source media object, in pixels. */
		height: FormControl<number | null | undefined>,

		/** Display URL of the page that hosts the media object. */
		hostPageDisplayUrl: FormControl<string | null | undefined>,

		/** URL of the page that hosts the media object. */
		hostPageUrl: FormControl<string | null | undefined>,

		/** The width of the source media object, in pixels. */
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


	/** Defines a person. */
	export interface Person {

		/** The person's job title. */
		jobTitle?: string | null;

		/** The URL of the person's twitter profile. */
		twitterProfile?: string | null;
	}

	/** Defines a person. */
	export interface PersonFormProperties {

		/** The person's job title. */
		jobTitle: FormControl<string | null | undefined>,

		/** The URL of the person's twitter profile. */
		twitterProfile: FormControl<string | null | undefined>,
	}
	export function CreatePersonFormGroup() {
		return new FormGroup<PersonFormProperties>({
			jobTitle: new FormControl<string | null | undefined>(undefined),
			twitterProfile: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines an item. */
	export interface PropertiesItem {

		/** Required */
		_type: string;

		/** Text representation of an item. */
		text?: string | null;
	}

	/** Defines an item. */
	export interface PropertiesItemFormProperties {

		/** Required */
		_type: FormControl<string | null | undefined>,

		/** Text representation of an item. */
		text: FormControl<string | null | undefined>,
	}
	export function CreatePropertiesItemFormGroup() {
		return new FormGroup<PropertiesItemFormProperties>({
			_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a rating. */
	export interface Rating {

		/** The highest rated review. The possible values are 1.0 through 5.0. */
		bestRating?: number | null;

		/**
		 * The mean (average) rating. The possible values are 1.0 through 5.0.
		 * Required
		 */
		ratingValue: number;
	}

	/** Defines a rating. */
	export interface RatingFormProperties {

		/** The highest rated review. The possible values are 1.0 through 5.0. */
		bestRating: FormControl<number | null | undefined>,

		/**
		 * The mean (average) rating. The possible values are 1.0 through 5.0.
		 * Required
		 */
		ratingValue: FormControl<number | null | undefined>,
	}
	export function CreateRatingFormGroup() {
		return new FormGroup<RatingFormProperties>({
			bestRating: new FormControl<number | null | undefined>(undefined),
			ratingValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
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

	export interface StructuredValue {
	}
	export interface StructuredValueFormProperties {
	}
	export function CreateStructuredValueFormGroup() {
		return new FormGroup<StructuredValueFormProperties>({
		});

	}


	/** The top-level object that the response includes when a trending images request succeeds. */
	export interface TrendingImages {

		/**
		 * A list that identifies categories of images and a list of trending images in that category.
		 * Required
		 */
		categories: Array<TrendingImagesCategory>;
	}

	/** The top-level object that the response includes when a trending images request succeeds. */
	export interface TrendingImagesFormProperties {
	}
	export function CreateTrendingImagesFormGroup() {
		return new FormGroup<TrendingImagesFormProperties>({
		});

	}


	/** Defines the category of trending images. */
	export interface TrendingImagesCategory {

		/**
		 * A list of images that are trending in the category. Each tile contains an image and a URL that returns more images of the subject. For example, if the category is Popular People Searches, the image is of a popular person and the URL would return more images of that person.
		 * Required
		 */
		tiles: Array<TrendingImagesTile>;

		/**
		 * The name of the image category. For example, Popular People Searches.
		 * Required
		 */
		title: string;
	}

	/** Defines the category of trending images. */
	export interface TrendingImagesCategoryFormProperties {

		/**
		 * The name of the image category. For example, Popular People Searches.
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateTrendingImagesCategoryFormGroup() {
		return new FormGroup<TrendingImagesCategoryFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines an image tile. */
	export interface TrendingImagesTile {

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

	/** Defines an image tile. */
	export interface TrendingImagesTileFormProperties {
	}
	export function CreateTrendingImagesTileFormGroup() {
		return new FormGroup<TrendingImagesTileFormProperties>({
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
		 * The Image Detail Search API lets you search on Bing and get back insights about an image, such as webpages that include the image. This section provides technical details about the query parameters and headers that you use to request insights of images and the JSON response objects that contain them. For examples that show how to make requests, see [Searching the Web for Images](https://docs.microsoft.com/azure/cognitive-services/bing-image-search/search-the-web).
		 * Get images/details
		 * @param {number} cab The bottom coordinate of the region to crop. The coordinate is a fractional value of the original image's height and is measured from the top, left corner of the image. Specify the coordinate as a value from 0.0 through 1.0. Use this parameter only with the Insights API. Do not specify this parameter when calling the Images, Trending Images, or Web Search APIs.
		 * @param {number} cal The left coordinate of the region to crop. The coordinate is a fractional value of the original image's height and is measured from the top, left corner of the image. Specify the coordinate as a value from 0.0 through 1.0. Use this parameter only with the Insights API. Do not specify this parameter when calling the Images, Trending Images, or Web Search APIs.
		 * @param {number} car The right coordinate of the region to crop. The coordinate is a fractional value of the original image's height and is measured from the top, left corner of the image. Specify the coordinate as a value from 0.0 through 1.0. Use this parameter only with the Insights API. Do not specify this parameter when calling the Images, Trending Images, or Web Search APIs.
		 * @param {number} cat The top coordinate of the region to crop. The coordinate is a fractional value of the original image's height and is measured from the top, left corner of the image. Specify the coordinate as a value from 0.0 through 1.0. Use this parameter only with the Insights API. Do not specify this parameter when calling the Images, Trending Images, or Web Search APIs.
		 * @param {Images_DetailsCt} ct The crop type to use when cropping the image based on the coordinates specified in the cal, cat, car, and cab parameters. The following are the possible values. 0: Rectangular (default). Use this parameter only with the Insights API. Do not specify this parameter when calling the Images, Trending Images, or Web Search APIs.
		 * @param {string} cc A 2-character country code of the country where the results come from. For a list of possible values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#market-codes). If you set this parameter, you must also specify the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#acceptlanguage) header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the [mkt](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#mkt) query parameter are mutually exclusive—do not specify both.
		 * @param {string} id An ID that uniquely identifies an image. Use this parameter to ensure that the specified image is the first image in the list of images that Bing returns. The [Image](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#image) object's imageId field contains the ID that you set this parameter to.
		 * @param {string} imgUrl The URL of an image that you want to get insights of. Use this parameter as an alternative to using the insightsToken parameter to specify the image. You may also specify the image by placing the binary of the image in the body of a POST request. If you use the binary option, see the [Content-Type](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#contenttype) header. The maximum supported image size is 1 MB. Use this parameter only with the Insights API. Do not specify this parameter when calling the Images, Trending Images, or Web Search APIs.
		 * @param {string} insightsToken An image token. The [Image](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#image) object's [imageInsightsToken](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#image-imageinsightstoken) contains the token. Specify this parameter to get additional information about an image, such as a caption or shopping source. For a list of the additional information about an image that you can get, see the [modules](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#modulesrequested) query parameter. Use this parameter only with the Insights API. Do not specify this parameter when calling the Images, Trending Images, or Web Search APIs.
		 * @param {Array<string>} modules A comma-delimited list of insights to request. The following are the possible case-insensitive values. All: Return all insights, if available, except RecognizedEntities. BRQ: Best representative query. The query term that best describes the image. Caption: A caption that provides information about the image. If the caption contains entities, the response may include links to images of those entities. Collections: A list of related images. Recipes: A list of recipes for cooking the food shown in the images. PagesIncluding: A list of webpages that include the image. RecognizedEntities: A list of entities (people) that were recognized in the image. NOTE: You may not specify this module with any other module. If you specify it with other modules, the response doesn't include recognized entities. RelatedSearches: A list of related searches made by others. ShoppingSources: A list of merchants where you can buy related offerings. SimilarImages: A list of images that are visually similar to the original image. SimilarProducts: A list of images that contain a product that is similar to a product found in the original image. Tags: Provides characteristics of the type of content found in the image. For example, if the image is of a person, the tags might indicate the person's gender and type of clothes they're wearing. If you specify a module and there is no data for the module, the response object doesn't include the related field. For example, if you specify Caption and it does not exist, the response doesn't include the imageCaption field. To include related searches, the request must include the original query string. Although the original query string is not required for similar images or products, you should always include it because it can help improve relevance and the results. Use this parameter only with the Insights API. Do not specify this parameter when calling the Images, Trending Images, or Web Search APIs.
		 * @param {string} mkt The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. For example, en-US. The string is case insensitive. For a list of possible market values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#market-codes). NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#market-codes), Bing uses a best fit market code based on an internal mapping that is subject to change. This parameter and the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#cc) query parameter are mutually exclusive—do not specify both.
		 * @param {string} q The user's search query term. The term cannot be empty. The term may contain [Bing Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For example, to limit images to a specific domain, use the [site:](http://msdn.microsoft.com/library/ff795613.aspx) operator. To help improve relevance of an insights query (see [insightsToken](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#insightstoken)), you should always include the user's query term. Use this parameter only with the Image Search API.Do not specify this parameter when calling the Trending Images API.
		 * @param {Images_DetailsSafeSearch} safeSearch Filter images for adult content. The following are the possible filter values. Off: May return images with adult content. If the request is through the Image Search API, the response includes thumbnail images that are clear (non-fuzzy). However, if the request is through the Web Search API, the response includes thumbnail images that are pixelated (fuzzy). Moderate: If the request is through the Image Search API, the response doesn't include images with adult content. If the request is through the Web Search API, the response may include images with adult content (the thumbnail images are pixelated (fuzzy)). Strict: Do not return images with adult content. The default is Moderate. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
		 * @param {string} setLang The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#acceptlanguage) header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
		 * @return {ImageInsights} Success.
		 */
		Images_Details(cab: number | null | undefined, cal: number | null | undefined, car: number | null | undefined, cat: number | null | undefined, ct: Images_DetailsCt | null | undefined, cc: string | null | undefined, id: string | null | undefined, imgUrl: string | null | undefined, insightsToken: string | null | undefined, modules: Array<string> | null | undefined, mkt: string | null | undefined, q: string, safeSearch: Images_DetailsSafeSearch | null | undefined, setLang: string | null | undefined): Observable<ImageInsights> {
			return this.http.get<ImageInsights>(this.baseUri + 'images/details?cab=' + cab + '&cal=' + cal + '&car=' + car + '&cat=' + cat + '&ct=' + ct + '&cc=' + (cc == null ? '' : encodeURIComponent(cc)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&imgUrl=' + (imgUrl == null ? '' : encodeURIComponent(imgUrl)) + '&insightsToken=' + (insightsToken == null ? '' : encodeURIComponent(insightsToken)) + '&' + modules?.map(z => `modules=${encodeURIComponent(z)}`).join('&') + '&mkt=' + (mkt == null ? '' : encodeURIComponent(mkt)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&safeSearch=' + safeSearch + '&setLang=' + (setLang == null ? '' : encodeURIComponent(setLang)), {});
		}

		/**
		 * The Image Search API lets you send a search query to Bing and get back a list of relevant images. This section provides technical details about the query parameters and headers that you use to request images and the JSON response objects that contain them. For examples that show how to make requests, see [Searching the Web for Images](https://docs.microsoft.com/azure/cognitive-services/bing-image-search/search-the-web).
		 * Get images/search
		 * @param {Images_SearchAspect} aspect Filter images by the following aspect ratios. All: Do not filter by aspect.Specifying this value is the same as not specifying the aspect parameter. Square: Return images with standard aspect ratio. Wide: Return images with wide screen aspect ratio. Tall: Return images with tall aspect ratio.
		 * @param {Images_SearchColor} color Filter images by the following color options. ColorOnly: Return color images. Monochrome: Return black and white images. Return images with one of the following dominant colors: Black, Blue, Brown, Gray, Green, Orange, Pink, Purple, Red, Teal, White, Yellow
		 * @param {string} cc A 2-character country code of the country where the results come from. For a list of possible values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#market-codes). If you set this parameter, you must also specify the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#acceptlanguage) header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the [mkt](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#mkt) query parameter are mutually exclusive—do not specify both.
		 * @param {number} count The number of images to return in the response. The actual number delivered may be less than requested. The default is 35. The maximum value is 150. You use this parameter along with the offset parameter to page results.For example, if your user interface displays 20 images per page, set count to 20 and offset to 0 to get the first page of results.For each subsequent page, increment offset by 20 (for example, 0, 20, 40). Use this parameter only with the Image Search API.Do not specify this parameter when calling the Insights, Trending Images, or Web Search APIs.
		 * @param {Images_SearchFreshness} freshness Filter images by the following discovery options. Day: Return images discovered by Bing within the last 24 hours. Week: Return images discovered by Bing within the last 7 days. Month: Return images discovered by Bing within the last 30 days.
		 * @param {number} height Filter images that have the specified height, in pixels. You may use this filter with the size filter to return small images that have a height of 150 pixels.
		 * @param {string} id An ID that uniquely identifies an image. Use this parameter to ensure that the specified image is the first image in the list of images that Bing returns. The [Image](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#image) object's imageId field contains the ID that you set this parameter to.
		 * @param {Images_SearchImageContent} imageContent Filter images by the following content types. Face: Return images that show only a person's face. Portrait: Return images that show only a person's head and shoulders.
		 * @param {Images_SearchImageType} imageType Filter images by the following image types. AnimatedGif: Return only animated GIFs. Clipart: Return only clip art images. Line: Return only line drawings. Photo: Return only photographs(excluding line drawings, animated Gifs, and clip art). Shopping: Return only images that contain items where Bing knows of a merchant that is selling the items. This option is valid in the en - US market only.Transparent: Return only images with a transparent background.
		 * @param {Images_SearchLicense} license Filter images by the following license types. All: Do not filter by license type.Specifying this value is the same as not specifying the license parameter. Any: Return images that are under any license type. The response doesn't include images that do not specify a license or the license is unknown. Public: Return images where the creator has waived their exclusive rights, to the fullest extent allowed by law. Share: Return images that may be shared with others. Changing or editing the image might not be allowed. Also, modifying, sharing, and using the image for commercial purposes might not be allowed. Typically, this option returns the most images. ShareCommercially: Return images that may be shared with others for personal or commercial purposes. Changing or editing the image might not be allowed. Modify: Return images that may be modified, shared, and used. Changing or editing the image might not be allowed. Modifying, sharing, and using the image for commercial purposes might not be allowed. ModifyCommercially: Return images that may be modified, shared, and used for personal or commercial purposes. Typically, this option returns the fewest images. For more information about these license types, see [Filter Images By License Type](http://go.microsoft.com/fwlink/?LinkId=309768).
		 * @param {string} mkt The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. For example, en-US. The string is case insensitive. For a list of possible market values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#market-codes). NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#market-codes), Bing uses a best fit market code based on an internal mapping that is subject to change. This parameter and the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#cc) query parameter are mutually exclusive—do not specify both.
		 * @param {number} maxFileSize Filter images that are less than or equal to the specified file size. The maximum file size that you may specify is 520,192 bytes. If you specify a larger value, the API uses 520,192. It is possible that the response may include images that are slightly larger than the specified maximum. You may specify this filter and minFileSize to filter images within a range of file sizes.
		 * @param {number} maxHeight Filter images that have a height that is less than or equal to the specified height. Specify the height in pixels. You may specify this filter and minHeight to filter images within a range of heights. This filter and the height filter are mutually exclusive.
		 * @param {number} maxWidth Filter images that have a width that is less than or equal to the specified width. Specify the width in pixels. You may specify this filter and maxWidth to filter images within a range of widths. This filter and the width filter are mutually exclusive.
		 * @param {number} minFileSize Filter images that are greater than or equal to the specified file size. The maximum file size that you may specify is 520,192 bytes. If you specify a larger value, the API uses 520,192. It is possible that the response may include images that are slightly smaller than the specified minimum. You may specify this filter and maxFileSize to filter images within a range of file sizes.
		 * @param {number} minHeight Filter images that have a height that is greater than or equal to the specified height. Specify the height in pixels. You may specify this filter and maxHeight to filter images within a range of heights. This filter and the height filter are mutually exclusive.
		 * @param {number} minWidth Filter images that have a width that is greater than or equal to the specified width. Specify the width in pixels. You may specify this filter and maxWidth to filter images within a range of widths. This filter and the width filter are mutually exclusive.
		 * @param {number} offset The zero-based offset that indicates the number of images to skip before returning images. The default is 0. The offset should be less than ([totalEstimatedMatches](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#totalestimatedmatches) - count). Use this parameter along with the count parameter to page results. For example, if your user interface displays 20 images per page, set count to 20 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 20 (for example, 0, 20, 40). It is possible for multiple pages to include some overlap in results. To prevent duplicates, see [nextOffset](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#nextoffset). Use this parameter only with the Image API. Do not specify this parameter when calling the Trending Images API or the Web Search API.
		 * @param {string} q The user's search query term. The term cannot be empty. The term may contain [Bing Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For example, to limit images to a specific domain, use the [site:](http://msdn.microsoft.com/library/ff795613.aspx) operator. To help improve relevance of an insights query (see [insightsToken](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#insightstoken)), you should always include the user's query term. Use this parameter only with the Image Search API.Do not specify this parameter when calling the Trending Images API.
		 * @param {Images_DetailsSafeSearch} safeSearch Filter images for adult content. The following are the possible filter values. Off: May return images with adult content. If the request is through the Image Search API, the response includes thumbnail images that are clear (non-fuzzy). However, if the request is through the Web Search API, the response includes thumbnail images that are pixelated (fuzzy). Moderate: If the request is through the Image Search API, the response doesn't include images with adult content. If the request is through the Web Search API, the response may include images with adult content (the thumbnail images are pixelated (fuzzy)). Strict: Do not return images with adult content. The default is Moderate. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
		 * @param {Images_SearchSize} size Filter images by the following sizes. All: Do not filter by size. Specifying this value is the same as not specifying the size parameter. Small: Return images that are less than 200x200 pixels. Medium: Return images that are greater than or equal to 200x200 pixels but less than 500x500 pixels. Large: Return images that are 500x500 pixels or larger. Wallpaper: Return wallpaper images. You may use this parameter along with the height or width parameters. For example, you may use height and size to request small images that are 150 pixels tall.
		 * @param {string} setLang The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#acceptlanguage) header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
		 * @param {number} width Filter images that have the specified width, in pixels. You may use this filter with the size filter to return small images that have a width of 150 pixels.
		 * @return {Images} Success.
		 */
		Images_Search(aspect: Images_SearchAspect | null | undefined, color: Images_SearchColor | null | undefined, cc: string | null | undefined, count: number | null | undefined, freshness: Images_SearchFreshness | null | undefined, height: number | null | undefined, id: string | null | undefined, imageContent: Images_SearchImageContent | null | undefined, imageType: Images_SearchImageType | null | undefined, license: Images_SearchLicense | null | undefined, mkt: string | null | undefined, maxFileSize: number | null | undefined, maxHeight: number | null | undefined, maxWidth: number | null | undefined, minFileSize: number | null | undefined, minHeight: number | null | undefined, minWidth: number | null | undefined, offset: number | null | undefined, q: string, safeSearch: Images_DetailsSafeSearch | null | undefined, size: Images_SearchSize | null | undefined, setLang: string | null | undefined, width: number | null | undefined): Observable<Images> {
			return this.http.get<Images>(this.baseUri + 'images/search?aspect=' + aspect + '&color=' + color + '&cc=' + (cc == null ? '' : encodeURIComponent(cc)) + '&count=' + count + '&freshness=' + freshness + '&height=' + height + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&imageContent=' + imageContent + '&imageType=' + imageType + '&license=' + license + '&mkt=' + (mkt == null ? '' : encodeURIComponent(mkt)) + '&maxFileSize=' + maxFileSize + '&maxHeight=' + maxHeight + '&maxWidth=' + maxWidth + '&minFileSize=' + minFileSize + '&minHeight=' + minHeight + '&minWidth=' + minWidth + '&offset=' + offset + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&safeSearch=' + safeSearch + '&size=' + size + '&setLang=' + (setLang == null ? '' : encodeURIComponent(setLang)) + '&width=' + width, {});
		}

		/**
		 * The Image Trending Search API lets you search on Bing and get back a list of images that are trending based on search requests made by others. The images are broken out into different categories. For example, Popular People Searches. For a list of markets that support trending images, see [Trending Images](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-image-search/trending-images).
		 * Get images/trending
		 * @param {string} cc A 2-character country code of the country where the results come from. This API supports only the United States, Canada, Australia, and China markets. If you specify this query parameter, it must be set to us, ca, au, or cn. If you set this parameter, you must also specify the Accept-Language header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the mkt query parameter are mutually exclusive—do not specify both.
		 * @param {string} mkt The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. For example, en-US. The string is case insensitive. For a list of possible market values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#market-codes). NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#market-codes), Bing uses a best fit market code based on an internal mapping that is subject to change. This parameter and the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#cc) query parameter are mutually exclusive—do not specify both.
		 * @param {Images_DetailsSafeSearch} safeSearch Filter images for adult content. The following are the possible filter values. Off: May return images with adult content. If the request is through the Image Search API, the response includes thumbnail images that are clear (non-fuzzy). However, if the request is through the Web Search API, the response includes thumbnail images that are pixelated (fuzzy). Moderate: If the request is through the Image Search API, the response doesn't include images with adult content. If the request is through the Web Search API, the response may include images with adult content (the thumbnail images are pixelated (fuzzy)). Strict: Do not return images with adult content. The default is Moderate. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
		 * @param {string} setLang The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#acceptlanguage) header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
		 * @return {TrendingImages} Success.
		 */
		Images_Trending(cc: string | null | undefined, mkt: string | null | undefined, safeSearch: Images_DetailsSafeSearch | null | undefined, setLang: string | null | undefined): Observable<TrendingImages> {
			return this.http.get<TrendingImages>(this.baseUri + 'images/trending?cc=' + (cc == null ? '' : encodeURIComponent(cc)) + '&mkt=' + (mkt == null ? '' : encodeURIComponent(mkt)) + '&safeSearch=' + safeSearch + '&setLang=' + (setLang == null ? '' : encodeURIComponent(setLang)), {});
		}
	}

	export enum Images_DetailsX_BingApis_SDK { true = 'true' }

	export enum Images_DetailsCt { Rectangular = 'Rectangular' }

	export enum Images_DetailsSafeSearch { Off = 'Off', Moderate = 'Moderate', Strict = 'Strict' }

	export enum Images_SearchAspect { All = 'All', Square = 'Square', Wide = 'Wide', Tall = 'Tall' }

	export enum Images_SearchColor { ColorOnly = 'ColorOnly', Monochrome = 'Monochrome', Black = 'Black', Blue = 'Blue', Brown = 'Brown', Gray = 'Gray', Green = 'Green', Orange = 'Orange', Pink = 'Pink', Purple = 'Purple', Red = 'Red', Teal = 'Teal', White = 'White', Yellow = 'Yellow' }

	export enum Images_SearchFreshness { Day = 'Day', Week = 'Week', Month = 'Month' }

	export enum Images_SearchImageContent { Face = 'Face', Portrait = 'Portrait' }

	export enum Images_SearchImageType { AnimatedGif = 'AnimatedGif', Clipart = 'Clipart', Line = 'Line', Photo = 'Photo', Shopping = 'Shopping', Transparent = 'Transparent' }

	export enum Images_SearchLicense { All = 'All', Any = 'Any', Public = 'Public', Share = 'Share', ShareCommercially = 'ShareCommercially', Modify = 'Modify', ModifyCommercially = 'ModifyCommercially' }

	export enum Images_SearchSize { All = 'All', Small = 'Small', Medium = 'Medium', Large = 'Large', Wallpaper = 'Wallpaper' }

}

