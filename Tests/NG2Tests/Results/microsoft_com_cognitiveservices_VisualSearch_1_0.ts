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


	/** Defines a thing. */
	export interface Thing {

		/** An alias for the item. */
		alternateName?: string | null;

		/** An ID that uniquely identifies this item. */
		bingId?: string | null;

		/** A short description of the item. */
		description?: string | null;

		/** Defines an image. */
		image?: ImageObject;

		/** The name of the thing represented by this object. */
		name?: string | null;

		/** The URL to get more information about the thing represented by this object. */
		url?: string | null;
	}

	/** Defines a thing. */
	export interface ThingFormProperties {

		/** An alias for the item. */
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


	/** Defines an image. */
	export interface ImageObject {

		/** A three-byte hexadecimal number that represents the color that dominates the image. Use the color as the temporary background in your client until the image is loaded. */
		accentColor?: string | null;

		/** Unique Id for the image. */
		imageId?: string | null;

		/** The token that you use in a subsequent call to Visual Search API to get additional information about the image. For information about using this token, see the imageInsightsToken field inside the knowledgeRequest request parameter. */
		imageInsightsToken?: string | null;

		/** Defines a count of the number of websites where you can shop or perform other actions related to the image. */
		insightsMetadata?: ImagesImageMetadata;

		/** Defines an image. */
		thumbnail?: ImageObject;

		/** For internal use only. */
		visualWords?: string | null;
	}

	/** Defines an image. */
	export interface ImageObjectFormProperties {

		/** A three-byte hexadecimal number that represents the color that dominates the image. Use the color as the temporary background in your client until the image is loaded. */
		accentColor: FormControl<string | null | undefined>,

		/** Unique Id for the image. */
		imageId: FormControl<string | null | undefined>,

		/** The token that you use in a subsequent call to Visual Search API to get additional information about the image. For information about using this token, see the imageInsightsToken field inside the knowledgeRequest request parameter. */
		imageInsightsToken: FormControl<string | null | undefined>,

		/** For internal use only. */
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

		/**
		 * The number of websites that offer recipes of the food seen in the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		recipeSourcesCount?: number | null;

		/**
		 * The number of websites that sell the products seen in the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		shoppingSourcesCount?: number | null;
	}

	/** Defines a count of the number of websites where you can shop or perform other actions related to the image. */
	export interface ImagesImageMetadataFormProperties {

		/**
		 * The number of websites that offer recipes of the food seen in the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		recipeSourcesCount: FormControl<number | null | undefined>,

		/**
		 * The number of websites that sell the products seen in the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		shoppingSourcesCount: FormControl<number | null | undefined>,
	}
	export function CreateImagesImageMetadataFormGroup() {
		return new FormGroup<ImagesImageMetadataFormProperties>({
			recipeSourcesCount: new FormControl<number | null | undefined>(undefined),
			shoppingSourcesCount: new FormControl<number | null | undefined>(undefined),
		});

	}


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

		/** The item's availability. The following are the possible values: Discontinued, InStock, InStoreOnly, LimitedAvailability, OnlineOnly, OutOfStock, PreOrder, SoldOut. */
		availability?: OfferAvailability | null;

		/** The last date that the offer was updated. The date is in the form YYYY-MM-DD. */
		lastUpdated?: string | null;

		/**
		 * The item's price.
		 * Type: float
		 */
		price?: number | null;

		/** The monetary currency. For example, USD. */
		priceCurrency?: OfferPriceCurrency | null;

		/** Defines an organization. */
		seller?: Organization;
	}

	/** Defines a merchant's offer. */
	export interface OfferFormProperties {

		/** The item's availability. The following are the possible values: Discontinued, InStock, InStoreOnly, LimitedAvailability, OnlineOnly, OutOfStock, PreOrder, SoldOut. */
		availability: FormControl<OfferAvailability | null | undefined>,

		/** The last date that the offer was updated. The date is in the form YYYY-MM-DD. */
		lastUpdated: FormControl<string | null | undefined>,

		/**
		 * The item's price.
		 * Type: float
		 */
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

		/**
		 * The number of times the recipe has been rated or reviewed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reviewCount?: number | null;
	}

	/** Defines the metrics that indicate how well an item was rated by others. */
	export interface AggregateRatingFormProperties {

		/**
		 * The number of times the recipe has been rated or reviewed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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


	/** The most generic kind of creative work, including books, movies, photographs, software programs, etc. */
	export interface CreativeWork {

		/** The date on which the CreativeWork was published. */
		datePublished?: string | null;

		/** The source of the creative work. */
		provider?: Array<Thing>;

		/** Text content of this creative work. */
		text?: string | null;

		/** The URL to a thumbnail of the item. */
		thumbnailUrl?: string | null;
	}

	/** The most generic kind of creative work, including books, movies, photographs, software programs, etc. */
	export interface CreativeWorkFormProperties {

		/** The date on which the CreativeWork was published. */
		datePublished: FormControl<string | null | undefined>,

		/** Text content of this creative work. */
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


	/** A JSON object consisting of coordinates specifying the four corners of a cropped rectangle within the input image. */
	export interface CropArea {

		/**
		 * The bottom coordinate of the region to be cropped. The coordinate is a fractional value of the original image's height and is measured from the top edge of the image. Specify the coordinate as a value from 0.0 through 1.0.
		 * Required
		 * Type: float
		 */
		bottom: number;

		/**
		 * The left coordinate of the region to be cropped. The coordinate is a fractional value of the original image's width and is measured from the left edge of the image. Specify the coordinate as a value from 0.0 through 1.0.
		 * Required
		 * Type: float
		 */
		left: number;

		/**
		 * The right coordinate of the region to be cropped. The coordinate is a fractional value of the original image's width and is measured from the left edge of the image. Specify the coordinate as a value from 0.0 through 1.0.
		 * Required
		 * Type: float
		 */
		right: number;

		/**
		 * The top coordinate of the region to be cropped. The coordinate is a fractional value of the original image's height and is measured from the top edge of the image. Specify the coordinate as a value from 0.0 through 1.0.
		 * Required
		 * Type: float
		 */
		top: number;
	}

	/** A JSON object consisting of coordinates specifying the four corners of a cropped rectangle within the input image. */
	export interface CropAreaFormProperties {

		/**
		 * The bottom coordinate of the region to be cropped. The coordinate is a fractional value of the original image's height and is measured from the top edge of the image. Specify the coordinate as a value from 0.0 through 1.0.
		 * Required
		 * Type: float
		 */
		bottom: FormControl<number | null | undefined>,

		/**
		 * The left coordinate of the region to be cropped. The coordinate is a fractional value of the original image's width and is measured from the left edge of the image. Specify the coordinate as a value from 0.0 through 1.0.
		 * Required
		 * Type: float
		 */
		left: FormControl<number | null | undefined>,

		/**
		 * The right coordinate of the region to be cropped. The coordinate is a fractional value of the original image's width and is measured from the left edge of the image. Specify the coordinate as a value from 0.0 through 1.0.
		 * Required
		 * Type: float
		 */
		right: FormControl<number | null | undefined>,

		/**
		 * The top coordinate of the region to be cropped. The coordinate is a fractional value of the original image's height and is measured from the top edge of the image. Specify the coordinate as a value from 0.0 through 1.0.
		 * Required
		 * Type: float
		 */
		top: FormControl<number | null | undefined>,
	}
	export function CreateCropAreaFormGroup() {
		return new FormGroup<CropAreaFormProperties>({
			bottom: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			left: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			right: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			top: new FormControl<number | null | undefined>(undefined, [Validators.required]),
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


	/** A key-value object consisting of filters that may be specified to limit the results returned by the API. Current available filters: site. */
	export interface Filters {

		/** The URL of the site to return similar images and similar products from. (e.g., "www.bing.com", "bing.com"). */
		site?: string | null;
	}

	/** A key-value object consisting of filters that may be specified to limit the results returned by the API. Current available filters: site. */
	export interface FiltersFormProperties {

		/** The URL of the site to return similar images and similar products from. (e.g., "www.bing.com", "bing.com"). */
		site: FormControl<string | null | undefined>,
	}
	export function CreateFiltersFormGroup() {
		return new FormGroup<FiltersFormProperties>({
			site: new FormControl<string | null | undefined>(undefined),
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


	/** Defines an image action. */
	export interface ImageAction {

		/** Specifies the sub-class of the action. */
		_type?: ImageAction_type | null;

		/** A string representing the type of action. */
		actionType?: string | null;
	}

	/** Defines an image action. */
	export interface ImageActionFormProperties {

		/** Specifies the sub-class of the action. */
		_type: FormControl<ImageAction_type | null | undefined>,

		/** A string representing the type of action. */
		actionType: FormControl<string | null | undefined>,
	}
	export function CreateImageActionFormGroup() {
		return new FormGroup<ImageActionFormProperties>({
			_type: new FormControl<ImageAction_type | null | undefined>(undefined),
			actionType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageAction_type { ImageEntityAction = 'ImageEntityAction', ImageModuleAction = 'ImageModuleAction', ImageRecipesAction = 'ImageRecipesAction', ImageRelatedSearchesAction = 'ImageRelatedSearchesAction', ImageShoppingSourcesAction = 'ImageShoppingSourcesAction' }


	/** Defines an entity action. */
	export interface ImageEntityAction {
	}

	/** Defines an entity action. */
	export interface ImageEntityActionFormProperties {
	}
	export function CreateImageEntityActionFormGroup() {
		return new FormGroup<ImageEntityActionFormProperties>({
		});

	}


	/** A JSON object that identities the image to get insights of . It also includes the optional crop area that you use to identify the region of interest in the image. */
	export interface ImageInfo {

		/** A JSON object consisting of coordinates specifying the four corners of a cropped rectangle within the input image. */
		cropArea?: CropArea;

		/** An image insights token. To get the insights token, call one of the Image Search APIs (for example, /images/search). In the search results, the [Image](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#image) object's [imageInsightsToken](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#image-imageinsightstoken) field contains the token. The imageInsightsToken and url fields mutually exclusive; do not specify both. Do not specify an insights token if the request includes the image form data. */
		imageInsightsToken?: string | null;

		/** The URL of the input image. The imageInsightsToken and url fields are mutually exclusive; do not specify both. Do not specify the URL if the request includes the image form data. */
		url?: string | null;
	}

	/** A JSON object that identities the image to get insights of . It also includes the optional crop area that you use to identify the region of interest in the image. */
	export interface ImageInfoFormProperties {

		/** An image insights token. To get the insights token, call one of the Image Search APIs (for example, /images/search). In the search results, the [Image](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#image) object's [imageInsightsToken](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#image-imageinsightstoken) field contains the token. The imageInsightsToken and url fields mutually exclusive; do not specify both. Do not specify an insights token if the request includes the image form data. */
		imageInsightsToken: FormControl<string | null | undefined>,

		/** The URL of the input image. The imageInsightsToken and url fields are mutually exclusive; do not specify both. Do not specify the URL if the request includes the image form data. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateImageInfoFormGroup() {
		return new FormGroup<ImageInfoFormProperties>({
			imageInsightsToken: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a visual search API response. */
	export interface ImageKnowledge {

		/** Defines an image. */
		image?: ImageObject;

		/** A list of visual search tags. */
		tags?: Array<ImageTag>;
	}

	/** Defines a visual search API response. */
	export interface ImageKnowledgeFormProperties {
	}
	export function CreateImageKnowledgeFormGroup() {
		return new FormGroup<ImageKnowledgeFormProperties>({
		});

	}


	/** A visual search tag. */
	export interface ImageTag {

		/** Actions within this tag. The order of the items denotes the default ranking order of these actions, with the first action being the most likely user intent. */
		actions?: Array<ImageAction>;

		/** Defines an image region relevant to the ImageTag. */
		boundingBox?: ImageTagRegion;

		/** Display name for this tag. For the default tag, the display name is empty. */
		displayName?: string | null;
	}

	/** A visual search tag. */
	export interface ImageTagFormProperties {

		/** Display name for this tag. For the default tag, the display name is empty. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateImageTagFormGroup() {
		return new FormGroup<ImageTagFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines an image region relevant to the ImageTag. */
	export interface ImageTagRegion {

		/**
		 * Defines a region of an image. The region is a convex quadrilateral defined by coordinates of its top left, top right, bottom left, and bottom right points. The coordinates are fractional values of the original image's width and height in the range 0.0 through 1.0.
		 * Required
		 */
		displayRectangle: NormalizedQuadrilateral;

		/**
		 * Defines a region of an image. The region is a convex quadrilateral defined by coordinates of its top left, top right, bottom left, and bottom right points. The coordinates are fractional values of the original image's width and height in the range 0.0 through 1.0.
		 * Required
		 */
		queryRectangle: NormalizedQuadrilateral;
	}

	/** Defines an image region relevant to the ImageTag. */
	export interface ImageTagRegionFormProperties {
	}
	export function CreateImageTagRegionFormGroup() {
		return new FormGroup<ImageTagRegionFormProperties>({
		});

	}


	/** Defines a region of an image. The region is a convex quadrilateral defined by coordinates of its top left, top right, bottom left, and bottom right points. The coordinates are fractional values of the original image's width and height in the range 0.0 through 1.0. */
	export interface NormalizedQuadrilateral {

		/**
		 * Defines a 2D point with X and Y coordinates.
		 * Required
		 */
		bottomLeft: Point2D;

		/**
		 * Defines a 2D point with X and Y coordinates.
		 * Required
		 */
		bottomRight: Point2D;

		/**
		 * Defines a 2D point with X and Y coordinates.
		 * Required
		 */
		topLeft: Point2D;

		/**
		 * Defines a 2D point with X and Y coordinates.
		 * Required
		 */
		topRight: Point2D;
	}

	/** Defines a region of an image. The region is a convex quadrilateral defined by coordinates of its top left, top right, bottom left, and bottom right points. The coordinates are fractional values of the original image's width and height in the range 0.0 through 1.0. */
	export interface NormalizedQuadrilateralFormProperties {
	}
	export function CreateNormalizedQuadrilateralFormGroup() {
		return new FormGroup<NormalizedQuadrilateralFormProperties>({
		});

	}


	/** Defines a 2D point with X and Y coordinates. */
	export interface Point2D {

		/**
		 * The x-coordinate of the point.
		 * Required
		 * Type: float
		 */
		x: number;

		/**
		 * The y-coordinate of the point.
		 * Required
		 * Type: float
		 */
		y: number;
	}

	/** Defines a 2D point with X and Y coordinates. */
	export interface Point2DFormProperties {

		/**
		 * The x-coordinate of the point.
		 * Required
		 * Type: float
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * The y-coordinate of the point.
		 * Required
		 * Type: float
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreatePoint2DFormGroup() {
		return new FormGroup<Point2DFormProperties>({
			x: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			y: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines an image list action. */
	export interface ImageModuleAction {

		/** Defines a list of images. */
		data?: ImagesModule;
	}

	/** Defines an image list action. */
	export interface ImageModuleActionFormProperties {
	}
	export function CreateImageModuleActionFormGroup() {
		return new FormGroup<ImageModuleActionFormProperties>({
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


	/** Defines an recipe action. */
	export interface ImageRecipesAction {

		/** Defines a list of recipes. */
		data?: RecipesModule;
	}

	/** Defines an recipe action. */
	export interface ImageRecipesActionFormProperties {
	}
	export function CreateImageRecipesActionFormGroup() {
		return new FormGroup<ImageRecipesActionFormProperties>({
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


	/** Defines an related search action. */
	export interface ImageRelatedSearchesAction {

		/** Defines a list of related searches. */
		data?: RelatedSearchesModule;
	}

	/** Defines an related search action. */
	export interface ImageRelatedSearchesActionFormProperties {
	}
	export function CreateImageRelatedSearchesActionFormGroup() {
		return new FormGroup<ImageRelatedSearchesActionFormProperties>({
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


	/** Defines a search query. */
	export interface Query {

		/** The display version of the query term. */
		displayText?: string | null;

		/** The URL that you use to get the results of the related search. Before using the URL, you must append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header. Use this URL if you're displaying the results in your own user interface. Otherwise, use the webSearchUrl URL. */
		searchLink?: string | null;

		/**
		 * The query string. Use this string as the query term in a new search request.
		 * Required
		 */
		text: string;

		/** Defines an image. */
		thumbnail?: ImageObject;

		/** The URL that takes the user to the Bing search results page for the query. */
		webSearchUrl?: string | null;
	}

	/** Defines a search query. */
	export interface QueryFormProperties {

		/** The display version of the query term. */
		displayText: FormControl<string | null | undefined>,

		/** The URL that you use to get the results of the related search. Before using the URL, you must append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header. Use this URL if you're displaying the results in your own user interface. Otherwise, use the webSearchUrl URL. */
		searchLink: FormControl<string | null | undefined>,

		/**
		 * The query string. Use this string as the query term in a new search request.
		 * Required
		 */
		text: FormControl<string | null | undefined>,

		/** The URL that takes the user to the Bing search results page for the query. */
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


	/** Defines a shopping sources action. */
	export interface ImageShoppingSourcesAction {

		/** Defines a list of offers from merchants that are related to the image. */
		data?: AggregateOffer;
	}

	/** Defines a shopping sources action. */
	export interface ImageShoppingSourcesActionFormProperties {
	}
	export function CreateImageShoppingSourcesActionFormGroup() {
		return new FormGroup<ImageShoppingSourcesActionFormProperties>({
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


	/** A JSON object containing information about the request, such as filters for the resulting actions. */
	export interface KnowledgeRequest {

		/** A key-value object consisting of filters that may be specified to limit the results returned by the API. Current available filters: site. */
		filters?: Filters;
	}

	/** A JSON object containing information about the request, such as filters for the resulting actions. */
	export interface KnowledgeRequestFormProperties {
	}
	export function CreateKnowledgeRequestFormGroup() {
		return new FormGroup<KnowledgeRequestFormProperties>({
		});

	}


	/** Defines a media object. */
	export interface MediaObject {

		/** Size of the media object content. Use format "value unit" (e.g., "1024 B"). */
		contentSize?: string | null;

		/** Original URL to retrieve the source (file) for the media object (e.g., the source URL for the image). */
		contentUrl?: string | null;

		/** Encoding format (e.g., png, gif, jpeg, etc). */
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

		/** Size of the media object content. Use format "value unit" (e.g., "1024 B"). */
		contentSize: FormControl<string | null | undefined>,

		/** Original URL to retrieve the source (file) for the media object (e.g., the source URL for the image). */
		contentUrl: FormControl<string | null | undefined>,

		/** Encoding format (e.g., png, gif, jpeg, etc). */
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

		/**
		 * The highest rated review. The possible values are 1.0 through 5.0.
		 * Type: float
		 */
		bestRating?: number | null;

		/**
		 * The mean (average) rating. The possible values are 1.0 through 5.0.
		 * Required
		 * Type: float
		 */
		ratingValue: number;
	}

	/** Defines a rating. */
	export interface RatingFormProperties {

		/**
		 * The highest rated review. The possible values are 1.0 through 5.0.
		 * Type: float
		 */
		bestRating: FormControl<number | null | undefined>,

		/**
		 * The mean (average) rating. The possible values are 1.0 through 5.0.
		 * Required
		 * Type: float
		 */
		ratingValue: FormControl<number | null | undefined>,
	}
	export function CreateRatingFormGroup() {
		return new FormGroup<RatingFormProperties>({
			bestRating: new FormControl<number | null | undefined>(undefined),
			ratingValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines a response. All schemas that return at the root of the response must inherit from this object. */
	export interface Response {

		/** The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header. */
		readLink?: string | null;

		/** The URL to Bing's search result for this item. */
		webSearchUrl?: string | null;
	}

	/** Defines a response. All schemas that return at the root of the response must inherit from this object. */
	export interface ResponseFormProperties {

		/** The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header. */
		readLink: FormControl<string | null | undefined>,

		/** The URL to Bing's search result for this item. */
		webSearchUrl: FormControl<string | null | undefined>,
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
			readLink: new FormControl<string | null | undefined>(undefined),
			webSearchUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response base. */
	export interface ResponseBase {
		_type?: string | null;
	}

	/** Response base. */
	export interface ResponseBaseFormProperties {
		_type: FormControl<string | null | undefined>,
	}
	export function CreateResponseBaseFormGroup() {
		return new FormGroup<ResponseBaseFormProperties>({
			_type: new FormControl<string | null | undefined>(undefined),
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


	/** A JSON object that contains information about the image to get insights of. Specify this object only in a knowledgeRequest form data. */
	export interface VisualSearchRequest {

		/** A JSON object that identities the image to get insights of . It also includes the optional crop area that you use to identify the region of interest in the image. */
		imageInfo?: ImageInfo;

		/** A JSON object containing information about the request, such as filters for the resulting actions. */
		knowledgeRequest?: KnowledgeRequest;
	}

	/** A JSON object that contains information about the image to get insights of. Specify this object only in a knowledgeRequest form data. */
	export interface VisualSearchRequestFormProperties {
	}
	export function CreateVisualSearchRequestFormGroup() {
		return new FormGroup<VisualSearchRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Visual Search API lets you discover insights about an image such as visually similar images, shopping sources, and related searches. The API can also perform text recognition, identify entities (people, places, things), return other topical content for the user to explore, and more. For more information, see [Visual Search Overview](https://docs.microsoft.com/azure/cognitive-services/bing-visual-search/overview).
		 * Post images/visualsearch
		 * @param {string} mkt The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. For example, en-US. The string is case insensitive. For a list of possible market values, see [Market Codes](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-visual-search/supported-countries-markets). NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in [Market Codes](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-visual-search/supported-countries-markets), Bing uses a best fit market code based on an internal mapping that is subject to change.
		 * @param {Images_VisualSearchSafeSearch} safeSearch Filter the image results in actions with type 'VisualSearch' for adult content. The following are the possible filter values. Off: May return images with adult content. Moderate: Do not return images with adult content. Strict: Do not return images with adult content. The default is Moderate. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: filter in the knowledge request, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
		 * @param {string} setLang The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
		 * @return {ImageKnowledge} Success.
		 */
		Images_VisualSearch(mkt: string | null | undefined, safeSearch: Images_VisualSearchSafeSearch | null | undefined, setLang: string | null | undefined, requestBody: Images_VisualSearchPostBody): Observable<ImageKnowledge> {
			return this.http.post<ImageKnowledge>(this.baseUri + 'images/visualsearch?mkt=' + (mkt == null ? '' : encodeURIComponent(mkt)) + '&safeSearch=' + safeSearch + '&setLang=' + (setLang == null ? '' : encodeURIComponent(setLang)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Images_VisualSearchX_BingApis_SDK { true = 'true' }

	export enum Images_VisualSearchSafeSearch { Off = 'Off', Moderate = 'Moderate', Strict = 'Strict' }

	export interface Images_VisualSearchPostBody {

		/** The form data is a JSON object that identifies the image using an insights token or URL to the image. The object may also include an optional crop area that identifies an area of interest in the image. The insights token and URL are mutually exclusive – do not specify both. You may specify knowledgeRequest form data and image form data in the same request only if knowledgeRequest form data specifies the cropArea field only (it must not include an insights token or URL). */
		knowledgeRequest?: string | null;

		/** The form data is an image binary. The Content-Disposition header's name parameter must be set to "image". You must specify an image binary if you do not use knowledgeRequest form data to specify the image; you may not use both forms to specify an image. You may specify knowledgeRequest form data and image form data in the same request only if knowledgeRequest form data specifies the cropArea field only  (it must not include an insights token or URL). */
		image?: string | null;
	}
	export interface Images_VisualSearchPostBodyFormProperties {

		/** The form data is a JSON object that identifies the image using an insights token or URL to the image. The object may also include an optional crop area that identifies an area of interest in the image. The insights token and URL are mutually exclusive – do not specify both. You may specify knowledgeRequest form data and image form data in the same request only if knowledgeRequest form data specifies the cropArea field only (it must not include an insights token or URL). */
		knowledgeRequest: FormControl<string | null | undefined>,

		/** The form data is an image binary. The Content-Disposition header's name parameter must be set to "image". You must specify an image binary if you do not use knowledgeRequest form data to specify the image; you may not use both forms to specify an image. You may specify knowledgeRequest form data and image form data in the same request only if knowledgeRequest form data specifies the cropArea field only  (it must not include an insights token or URL). */
		image: FormControl<string | null | undefined>,
	}
	export function CreateImages_VisualSearchPostBodyFormGroup() {
		return new FormGroup<Images_VisualSearchPostBodyFormProperties>({
			knowledgeRequest: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
		});

	}

}

