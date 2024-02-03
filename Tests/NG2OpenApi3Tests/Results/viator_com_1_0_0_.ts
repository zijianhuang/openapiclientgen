import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface _401_UNAUTHORIZED {
		code?: _401_UNAUTHORIZEDCode | null;
		message?: _401_UNAUTHORIZEDMessage | null;

		/**
		 * Timestamp of the request
		 * * e.g.: `2019-09-17T03:20:45.737043Z`
		 */
		timestamp?: string | null;

		/** Tracking identifier for this error response */
		trackingId?: string | null;
	}
	export interface _401_UNAUTHORIZEDFormProperties {
		code: FormControl<_401_UNAUTHORIZEDCode | null | undefined>,
		message: FormControl<_401_UNAUTHORIZEDMessage | null | undefined>,

		/**
		 * Timestamp of the request
		 * * e.g.: `2019-09-17T03:20:45.737043Z`
		 */
		timestamp: FormControl<string | null | undefined>,

		/** Tracking identifier for this error response */
		trackingId: FormControl<string | null | undefined>,
	}
	export function Create_401_UNAUTHORIZEDFormGroup() {
		return new FormGroup<_401_UNAUTHORIZEDFormProperties>({
			code: new FormControl<_401_UNAUTHORIZEDCode | null | undefined>(undefined),
			message: new FormControl<_401_UNAUTHORIZEDMessage | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum _401_UNAUTHORIZEDCode { UNAUTHORIZED = 'UNAUTHORIZED' }

	export enum _401_UNAUTHORIZEDMessage { 'Invalid API key' = 'Invalid API key' }

	export interface _406_NOT_ACCEPTABLE {
		code?: _406_NOT_ACCEPTABLECode | null;

		/** Describes which in-header parameter was not acceptable to this system; e.g., 'Invalid value for header: exp-api-key' */
		message?: string | null;

		/**
		 * Timestamp of the request
		 * * e.g.: `2019-09-17T03:20:45.737043Z`
		 */
		timestamp?: string | null;

		/** Tracking identifier for this error response */
		trackingId?: string | null;
	}
	export interface _406_NOT_ACCEPTABLEFormProperties {
		code: FormControl<_406_NOT_ACCEPTABLECode | null | undefined>,

		/** Describes which in-header parameter was not acceptable to this system; e.g., 'Invalid value for header: exp-api-key' */
		message: FormControl<string | null | undefined>,

		/**
		 * Timestamp of the request
		 * * e.g.: `2019-09-17T03:20:45.737043Z`
		 */
		timestamp: FormControl<string | null | undefined>,

		/** Tracking identifier for this error response */
		trackingId: FormControl<string | null | undefined>,
	}
	export function Create_406_NOT_ACCEPTABLEFormGroup() {
		return new FormGroup<_406_NOT_ACCEPTABLEFormProperties>({
			code: new FormControl<_406_NOT_ACCEPTABLECode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum _406_NOT_ACCEPTABLECode { INVALID_HEADER_VALUE = 'INVALID_HEADER_VALUE' }

	export interface _500_INTERNAL_SERVER_ERROR {
		code?: _500_INTERNAL_SERVER_ERRORCode | null;
		message?: _500_INTERNAL_SERVER_ERRORMessage | null;

		/**
		 * Timestamp of the request
		 * * e.g.: `2019-09-17T03:20:45.737043Z`
		 */
		timestamp?: string | null;

		/** Tracking identifier for this error response */
		trackingId?: string | null;
	}
	export interface _500_INTERNAL_SERVER_ERRORFormProperties {
		code: FormControl<_500_INTERNAL_SERVER_ERRORCode | null | undefined>,
		message: FormControl<_500_INTERNAL_SERVER_ERRORMessage | null | undefined>,

		/**
		 * Timestamp of the request
		 * * e.g.: `2019-09-17T03:20:45.737043Z`
		 */
		timestamp: FormControl<string | null | undefined>,

		/** Tracking identifier for this error response */
		trackingId: FormControl<string | null | undefined>,
	}
	export function Create_500_INTERNAL_SERVER_ERRORFormGroup() {
		return new FormGroup<_500_INTERNAL_SERVER_ERRORFormProperties>({
			code: new FormControl<_500_INTERNAL_SERVER_ERRORCode | null | undefined>(undefined),
			message: new FormControl<_500_INTERNAL_SERVER_ERRORMessage | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum _500_INTERNAL_SERVER_ERRORCode { INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR' }

	export enum _500_INTERNAL_SERVER_ERRORMessage { 'Internal server error' = 'Internal server error' }

	export interface _503_SERVICE_UNAVAILABLE {
		code?: _503_SERVICE_UNAVAILABLECode | null;
		message?: _500_INTERNAL_SERVER_ERRORMessage | null;

		/**
		 * Timestamp of the request
		 * e.g.: `2019-09-17T03:20:45.737043Z`
		 */
		timestamp?: string | null;

		/** Tracking identifier for this error response */
		trackingId?: string | null;
	}
	export interface _503_SERVICE_UNAVAILABLEFormProperties {
		code: FormControl<_503_SERVICE_UNAVAILABLECode | null | undefined>,
		message: FormControl<_500_INTERNAL_SERVER_ERRORMessage | null | undefined>,

		/**
		 * Timestamp of the request
		 * e.g.: `2019-09-17T03:20:45.737043Z`
		 */
		timestamp: FormControl<string | null | undefined>,

		/** Tracking identifier for this error response */
		trackingId: FormControl<string | null | undefined>,
	}
	export function Create_503_SERVICE_UNAVAILABLEFormGroup() {
		return new FormGroup<_503_SERVICE_UNAVAILABLEFormProperties>({
			code: new FormControl<_503_SERVICE_UNAVAILABLECode | null | undefined>(undefined),
			message: new FormControl<_500_INTERNAL_SERVER_ERRORMessage | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum _503_SERVICE_UNAVAILABLECode { SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE' }

	export interface CancelBookingQuoteResponse {

		/** The booking reference number, prepended with `BR-` */
		bookingId?: string | null;

		/**
		 * Details of the refund
		 * **Note**: Bookings that have not been confirmed by the supplier and have a status of `"PENDING"` will report an `itemPrice`, `refundAmount` and `refundPercentage` of `0`, as no fees are charged until the booking has been accepted by the supplier and its status is `"CONFIRMED"`.
		 */
		refundDetails?: RefundDetails;

		/**
		 * String indicating the cancellation status of this itinerary item:
		 * * `CANCELLABLE` - this booking is available to be cancelled
		 * * `CANCELLED` - this booking has already been cancelled
		 * * `NOT_CANCELLABLE` - this booking cannot be cancelled (because the product's operation date is now in the past)
		 */
		status?: CancelBookingQuoteResponseStatus | null;
	}
	export interface CancelBookingQuoteResponseFormProperties {

		/** The booking reference number, prepended with `BR-` */
		bookingId: FormControl<string | null | undefined>,

		/**
		 * String indicating the cancellation status of this itinerary item:
		 * * `CANCELLABLE` - this booking is available to be cancelled
		 * * `CANCELLED` - this booking has already been cancelled
		 * * `NOT_CANCELLABLE` - this booking cannot be cancelled (because the product's operation date is now in the past)
		 */
		status: FormControl<CancelBookingQuoteResponseStatus | null | undefined>,
	}
	export function CreateCancelBookingQuoteResponseFormGroup() {
		return new FormGroup<CancelBookingQuoteResponseFormProperties>({
			bookingId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CancelBookingQuoteResponseStatus | null | undefined>(undefined),
		});

	}


	/**
	 * Details of the refund
	 * **Note**: Bookings that have not been confirmed by the supplier and have a status of `"PENDING"` will report an `itemPrice`, `refundAmount` and `refundPercentage` of `0`, as no fees are charged until the booking has been accepted by the supplier and its status is `"CONFIRMED"`.
	 */
	export interface RefundDetails {

		/** Three-letter code indicating the currency in which `itemPrice` and `refundAmount` are displayed */
		currencyCode?: string | null;

		/** The merchant net price at the time this product was booked */
		itemPrice?: number | null;

		/** Numeric currency amount that will be refunded if this booking is cancelled now */
		refundAmount?: number | null;

		/** Percentage of the item price that will be refunded if this booking is cancelled now */
		refundPercentage?: number | null;
	}

	/**
	 * Details of the refund
	 * **Note**: Bookings that have not been confirmed by the supplier and have a status of `"PENDING"` will report an `itemPrice`, `refundAmount` and `refundPercentage` of `0`, as no fees are charged until the booking has been accepted by the supplier and its status is `"CONFIRMED"`.
	 */
	export interface RefundDetailsFormProperties {

		/** Three-letter code indicating the currency in which `itemPrice` and `refundAmount` are displayed */
		currencyCode: FormControl<string | null | undefined>,

		/** The merchant net price at the time this product was booked */
		itemPrice: FormControl<number | null | undefined>,

		/** Numeric currency amount that will be refunded if this booking is cancelled now */
		refundAmount: FormControl<number | null | undefined>,

		/** Percentage of the item price that will be refunded if this booking is cancelled now */
		refundPercentage: FormControl<number | null | undefined>,
	}
	export function CreateRefundDetailsFormGroup() {
		return new FormGroup<RefundDetailsFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			itemPrice: new FormControl<number | null | undefined>(undefined),
			refundAmount: new FormControl<number | null | undefined>(undefined),
			refundPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CancelBookingQuoteResponseStatus { CANCELLABLE = 'CANCELLABLE', CANCELLED = 'CANCELLED', NOT_CANCELLABLE = 'NOT_CANCELLABLE' }

	export interface CancelBookingResponse {

		/** Booking reference number for this booking, prepended with `BR-` */
		bookingId?: string | null;
		reason?: CancelBookingResponseReason | null;

		/**
		 * String indicating the outcome of the booking cancellation request.
		 * * `ACCEPTED`: The cancellation was successful
		 * * `DECLINED`: The cancellation failed
		 */
		status?: CancelBookingResponseStatus | null;
	}
	export interface CancelBookingResponseFormProperties {

		/** Booking reference number for this booking, prepended with `BR-` */
		bookingId: FormControl<string | null | undefined>,
		reason: FormControl<CancelBookingResponseReason | null | undefined>,

		/**
		 * String indicating the outcome of the booking cancellation request.
		 * * `ACCEPTED`: The cancellation was successful
		 * * `DECLINED`: The cancellation failed
		 */
		status: FormControl<CancelBookingResponseStatus | null | undefined>,
	}
	export function CreateCancelBookingResponseFormGroup() {
		return new FormGroup<CancelBookingResponseFormProperties>({
			bookingId: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<CancelBookingResponseReason | null | undefined>(undefined),
			status: new FormControl<CancelBookingResponseStatus | null | undefined>(undefined),
		});

	}

	export enum CancelBookingResponseReason { ALREADY_CANCELLED = 'ALREADY_CANCELLED', NOT_CANCELLABLE = 'NOT_CANCELLABLE' }

	export enum CancelBookingResponseStatus { ACCEPTED = 'ACCEPTED', DECLINED = 'DECLINED' }

	export interface CancellationReason {

		/** Machine-interpretable identification code for this cancellation */
		cancellationReasonCode?: string | null;

		/** Natural-language description of this cancellation reason */
		cancellationReasonText?: string | null;
	}
	export interface CancellationReasonFormProperties {

		/** Machine-interpretable identification code for this cancellation */
		cancellationReasonCode: FormControl<string | null | undefined>,

		/** Natural-language description of this cancellation reason */
		cancellationReasonText: FormControl<string | null | undefined>,
	}
	export function CreateCancellationReasonFormGroup() {
		return new FormGroup<CancellationReasonFormProperties>({
			cancellationReasonCode: new FormControl<string | null | undefined>(undefined),
			cancellationReasonText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CancellationReasonsResponse {

		/** Array of cancellation reason codes and their asssociated texts for display to the user */
		reasons?: Array<CancellationReason>;
	}
	export interface CancellationReasonsResponseFormProperties {
	}
	export function CreateCancellationReasonsResponseFormGroup() {
		return new FormGroup<CancellationReasonsResponseFormProperties>({
		});

	}

	export interface CancellationRequest {

		/** Machine-interpretable identification code for this cancellation reason, retrieved from [cancellationReasons](#operation/cancellationReasons) */
		reasonCode?: string | null;
	}
	export interface CancellationRequestFormProperties {

		/** Machine-interpretable identification code for this cancellation reason, retrieved from [cancellationReasons](#operation/cancellationReasons) */
		reasonCode: FormControl<string | null | undefined>,
	}
	export function CreateCancellationRequestFormGroup() {
		return new FormGroup<CancellationRequestFormProperties>({
			reasonCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchFreetextResponse {

		/**
		 * **indicator** of the entity type for *this* result that is *one of*:
		 * - `"PRODUCT"`: a tour / activity
		 * - `"DESTINATION"`: continent, country, city, region
		 * - `"ATTRACTION"`: an attraction within a destination (only available to partners with SEO access)
		 * - `"RECOMMENDATION"`: an attraction within a destination (only available to partners with SEO access)
		 */
		searchType?: SearchFreetextResponseSearchType | null;

		/** **sort order** for *this* data object */
		sortOrder?: number | null;
	}
	export interface SearchFreetextResponseFormProperties {

		/**
		 * **indicator** of the entity type for *this* result that is *one of*:
		 * - `"PRODUCT"`: a tour / activity
		 * - `"DESTINATION"`: continent, country, city, region
		 * - `"ATTRACTION"`: an attraction within a destination (only available to partners with SEO access)
		 * - `"RECOMMENDATION"`: an attraction within a destination (only available to partners with SEO access)
		 */
		searchType: FormControl<SearchFreetextResponseSearchType | null | undefined>,

		/** **sort order** for *this* data object */
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateSearchFreetextResponseFormGroup() {
		return new FormGroup<SearchFreetextResponseFormProperties>({
			searchType: new FormControl<SearchFreetextResponseSearchType | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SearchFreetextResponseSearchType { PRODUCT = 'PRODUCT', DESTINATION = 'DESTINATION', ATTRACTION = 'ATTRACTION', RECOMMENDATION = 'RECOMMENDATION' }

	export interface SearchFreetextResponseAttraction extends SearchFreetextResponse {

		/** **object** detailing **an attraction** that matches the search criteria */
		data?: SearchFreetextResponseAttractionData;
	}
	export interface SearchFreetextResponseAttractionFormProperties extends SearchFreetextResponseFormProperties {
	}
	export function CreateSearchFreetextResponseAttractionFormGroup() {
		return new FormGroup<SearchFreetextResponseAttractionFormProperties>({
			searchType: new FormControl<SearchFreetextResponseSearchType | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchFreetextResponseAttractionData {

		/** City in which this attraction is located */
		attractionCity?: number | null;

		/** Latitude of this attraction's location */
		attractionLatitude?: number | null;

		/** Longitude of this attraction's location */
		attractionLongitude?: number | null;

		/** State in which this attraction is located */
		attractionState?: number | null;

		/** Street address of this attraction */
		attractionStreetAddress?: number | null;

		/** Description introduction text */
		descriptionIntro?: string | null;

		/** Description of this attraction */
		descriptionText?: string | null;

		/** Destination ID for the destination in which this attraction is located */
		destinationId?: number | null;

		/** ignore (Viator only) */
		editorsPick?: boolean | null;

		/** ignore (Viator only) */
		keywordCount?: number | null;

		/** ignore (Viator only) */
		keywords?: Array<string>;

		/** HTML-formatted summary overview of this attraction */
		overviewSummary?: string | null;

		/** Language of the natural-language elements in this response */
		pagePrimaryLanguage?: string | null;

		/** Title of page */
		pageTitle?: string | null;

		/** URL path fragment for attraction */
		pageUrlName?: string | null;

		/** ignore (Viator only) */
		panoramaCount?: number | null;

		/** Number of photos available for this attraction */
		photoCount?: number | null;

		/** Primary destination ID for the destination in which this attraction is located */
		primaryDestinationId?: number | null;

		/** Primary destination ID for the destination in which this attraction is located */
		primaryDestinationName?: string | null;

		/** Name of primary destination for this attraction */
		primaryDestinationUrlName?: string | null;

		/** ignore (Viator only) */
		productCount?: number | null;

		/** ignore (Viator only) */
		publishedDate?: string | null;

		/** Numeric rating for this attraction */
		rating?: number | null;

		/** Number of reviews for this attraction */
		reviewCount?: number | null;

		/** ignore (Viator only) */
		seoId?: number | null;

		/** Type of result; i.e. `"ATTRACTION"` */
		seoType?: string | null;

		/** ignore (Viator only) */
		showPhotos?: boolean | null;

		/** ignore (Viator only) */
		showReviews?: boolean | null;

		/** ignore (Viator only) */
		sortOrder?: number | null;

		/** Tab title for this attraction */
		tabTitle?: string | null;

		/** URL for high-resolution image for this attraction */
		thumbnailHiResURL?: string | null;

		/** URL for medium-resolution image for this attraction */
		thumbnailURL?: string | null;

		/** Title of this attraction */
		title?: string | null;

		/** ignore (Viator only) */
		userName?: string | null;

		/** ignore (Viator only) */
		webURL?: string | null;
	}
	export interface SearchFreetextResponseAttractionDataFormProperties {

		/** City in which this attraction is located */
		attractionCity: FormControl<number | null | undefined>,

		/** Latitude of this attraction's location */
		attractionLatitude: FormControl<number | null | undefined>,

		/** Longitude of this attraction's location */
		attractionLongitude: FormControl<number | null | undefined>,

		/** State in which this attraction is located */
		attractionState: FormControl<number | null | undefined>,

		/** Street address of this attraction */
		attractionStreetAddress: FormControl<number | null | undefined>,

		/** Description introduction text */
		descriptionIntro: FormControl<string | null | undefined>,

		/** Description of this attraction */
		descriptionText: FormControl<string | null | undefined>,

		/** Destination ID for the destination in which this attraction is located */
		destinationId: FormControl<number | null | undefined>,

		/** ignore (Viator only) */
		editorsPick: FormControl<boolean | null | undefined>,

		/** ignore (Viator only) */
		keywordCount: FormControl<number | null | undefined>,

		/** HTML-formatted summary overview of this attraction */
		overviewSummary: FormControl<string | null | undefined>,

		/** Language of the natural-language elements in this response */
		pagePrimaryLanguage: FormControl<string | null | undefined>,

		/** Title of page */
		pageTitle: FormControl<string | null | undefined>,

		/** URL path fragment for attraction */
		pageUrlName: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		panoramaCount: FormControl<number | null | undefined>,

		/** Number of photos available for this attraction */
		photoCount: FormControl<number | null | undefined>,

		/** Primary destination ID for the destination in which this attraction is located */
		primaryDestinationId: FormControl<number | null | undefined>,

		/** Primary destination ID for the destination in which this attraction is located */
		primaryDestinationName: FormControl<string | null | undefined>,

		/** Name of primary destination for this attraction */
		primaryDestinationUrlName: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		productCount: FormControl<number | null | undefined>,

		/** ignore (Viator only) */
		publishedDate: FormControl<string | null | undefined>,

		/** Numeric rating for this attraction */
		rating: FormControl<number | null | undefined>,

		/** Number of reviews for this attraction */
		reviewCount: FormControl<number | null | undefined>,

		/** ignore (Viator only) */
		seoId: FormControl<number | null | undefined>,

		/** Type of result; i.e. `"ATTRACTION"` */
		seoType: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		showPhotos: FormControl<boolean | null | undefined>,

		/** ignore (Viator only) */
		showReviews: FormControl<boolean | null | undefined>,

		/** ignore (Viator only) */
		sortOrder: FormControl<number | null | undefined>,

		/** Tab title for this attraction */
		tabTitle: FormControl<string | null | undefined>,

		/** URL for high-resolution image for this attraction */
		thumbnailHiResURL: FormControl<string | null | undefined>,

		/** URL for medium-resolution image for this attraction */
		thumbnailURL: FormControl<string | null | undefined>,

		/** Title of this attraction */
		title: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		userName: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		webURL: FormControl<string | null | undefined>,
	}
	export function CreateSearchFreetextResponseAttractionDataFormGroup() {
		return new FormGroup<SearchFreetextResponseAttractionDataFormProperties>({
			attractionCity: new FormControl<number | null | undefined>(undefined),
			attractionLatitude: new FormControl<number | null | undefined>(undefined),
			attractionLongitude: new FormControl<number | null | undefined>(undefined),
			attractionState: new FormControl<number | null | undefined>(undefined),
			attractionStreetAddress: new FormControl<number | null | undefined>(undefined),
			descriptionIntro: new FormControl<string | null | undefined>(undefined),
			descriptionText: new FormControl<string | null | undefined>(undefined),
			destinationId: new FormControl<number | null | undefined>(undefined),
			editorsPick: new FormControl<boolean | null | undefined>(undefined),
			keywordCount: new FormControl<number | null | undefined>(undefined),
			overviewSummary: new FormControl<string | null | undefined>(undefined),
			pagePrimaryLanguage: new FormControl<string | null | undefined>(undefined),
			pageTitle: new FormControl<string | null | undefined>(undefined),
			pageUrlName: new FormControl<string | null | undefined>(undefined),
			panoramaCount: new FormControl<number | null | undefined>(undefined),
			photoCount: new FormControl<number | null | undefined>(undefined),
			primaryDestinationId: new FormControl<number | null | undefined>(undefined),
			primaryDestinationName: new FormControl<string | null | undefined>(undefined),
			primaryDestinationUrlName: new FormControl<string | null | undefined>(undefined),
			productCount: new FormControl<number | null | undefined>(undefined),
			publishedDate: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			reviewCount: new FormControl<number | null | undefined>(undefined),
			seoId: new FormControl<number | null | undefined>(undefined),
			seoType: new FormControl<string | null | undefined>(undefined),
			showPhotos: new FormControl<boolean | null | undefined>(undefined),
			showReviews: new FormControl<boolean | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
			tabTitle: new FormControl<string | null | undefined>(undefined),
			thumbnailHiResURL: new FormControl<string | null | undefined>(undefined),
			thumbnailURL: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
			webURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchFreetextResponseDestination extends SearchFreetextResponse {

		/** **object** detailing **a destination** that matches the search criteria */
		data?: SearchFreetextResponseDestinationData;
	}
	export interface SearchFreetextResponseDestinationFormProperties extends SearchFreetextResponseFormProperties {
	}
	export function CreateSearchFreetextResponseDestinationFormGroup() {
		return new FormGroup<SearchFreetextResponseDestinationFormProperties>({
			searchType: new FormControl<SearchFreetextResponseSearchType | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchFreetextResponseDestinationData {

		/** **currency code** for the currency in which pricing is displayed */
		defaultCurrencyCode?: string | null;

		/**
		 * **unique numeric identifier** of the destination
		 * - use this value as the `destId` input field for other Viator API services
		 */
		destinationId?: number | null;

		/** **natural-language name** of the destination */
		destinationName?: string | null;

		/**
		 * **destination type specifier**
		 * - `"COUNTRY"`: destination is a country
		 * - `"REGION"`: destination is a recognized region of a country, such as a state, island within a country, stretch of coastline, etc.
		 * - `"CITY"`: destination is a city
		 */
		destinationType?: SearchFreetextResponseDestinationDataDestinationType | null;

		/** ignore - (Viator only) */
		destinationUrlName?: string | null;

		/**
		 * **IATA airport code** for the destination
		 * - a three-letter code defined by the International Air Transport Association (IATA) used to identify many airports around the world
		 * - the IATA code is also known as an 'IATA location identifier', 'IATA station code' or simply a 'location identifier'
		 * - the IATA code is &lt;u&gt;not available&lt;/u&gt; for destinations with a destination type of `'COUNTRY'` or `'REGION'`, as there could be more than one airport within a destination
		 */
		iataCode?: string | null;

		/** **latitude component** of the destination's geolocation */
		latitude?: number | null;

		/** **longitude component** of the destination's geolocation */
		longitude?: number | null;

		/**
		 * **hierarchy location specifier** for the destination that is a concatenation of all `parentId` and `destinationId` codes
		 * - e.g. `'8.77.673'` for Chicago
		 * - format: [top level `parentId`].[any additional `parentId`].[`destinationId`]
		 */
		lookupId?: string | null;

		/** **unique numeric identifier** of the destination's parent destination */
		parentId?: number | null;

		/** ignore - (Viator only) */
		selectable?: boolean | null;

		/** **sort order** for this response */
		sortOrder?: number | null;

		/** **time zone** of the destination */
		timeZone?: string | null;
	}
	export interface SearchFreetextResponseDestinationDataFormProperties {

		/** **currency code** for the currency in which pricing is displayed */
		defaultCurrencyCode: FormControl<string | null | undefined>,

		/**
		 * **unique numeric identifier** of the destination
		 * - use this value as the `destId` input field for other Viator API services
		 */
		destinationId: FormControl<number | null | undefined>,

		/** **natural-language name** of the destination */
		destinationName: FormControl<string | null | undefined>,

		/**
		 * **destination type specifier**
		 * - `"COUNTRY"`: destination is a country
		 * - `"REGION"`: destination is a recognized region of a country, such as a state, island within a country, stretch of coastline, etc.
		 * - `"CITY"`: destination is a city
		 */
		destinationType: FormControl<SearchFreetextResponseDestinationDataDestinationType | null | undefined>,

		/** ignore - (Viator only) */
		destinationUrlName: FormControl<string | null | undefined>,

		/**
		 * **IATA airport code** for the destination
		 * - a three-letter code defined by the International Air Transport Association (IATA) used to identify many airports around the world
		 * - the IATA code is also known as an 'IATA location identifier', 'IATA station code' or simply a 'location identifier'
		 * - the IATA code is &lt;u&gt;not available&lt;/u&gt; for destinations with a destination type of `'COUNTRY'` or `'REGION'`, as there could be more than one airport within a destination
		 */
		iataCode: FormControl<string | null | undefined>,

		/** **latitude component** of the destination's geolocation */
		latitude: FormControl<number | null | undefined>,

		/** **longitude component** of the destination's geolocation */
		longitude: FormControl<number | null | undefined>,

		/**
		 * **hierarchy location specifier** for the destination that is a concatenation of all `parentId` and `destinationId` codes
		 * - e.g. `'8.77.673'` for Chicago
		 * - format: [top level `parentId`].[any additional `parentId`].[`destinationId`]
		 */
		lookupId: FormControl<string | null | undefined>,

		/** **unique numeric identifier** of the destination's parent destination */
		parentId: FormControl<number | null | undefined>,

		/** ignore - (Viator only) */
		selectable: FormControl<boolean | null | undefined>,

		/** **sort order** for this response */
		sortOrder: FormControl<number | null | undefined>,

		/** **time zone** of the destination */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateSearchFreetextResponseDestinationDataFormGroup() {
		return new FormGroup<SearchFreetextResponseDestinationDataFormProperties>({
			defaultCurrencyCode: new FormControl<string | null | undefined>(undefined),
			destinationId: new FormControl<number | null | undefined>(undefined),
			destinationName: new FormControl<string | null | undefined>(undefined),
			destinationType: new FormControl<SearchFreetextResponseDestinationDataDestinationType | null | undefined>(undefined),
			destinationUrlName: new FormControl<string | null | undefined>(undefined),
			iataCode: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			lookupId: new FormControl<string | null | undefined>(undefined),
			parentId: new FormControl<number | null | undefined>(undefined),
			selectable: new FormControl<boolean | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SearchFreetextResponseDestinationDataDestinationType { CITY = 'CITY', COUNTRY = 'COUNTRY', REGION = 'REGION' }

	export interface SearchFreetextResponseProduct extends SearchFreetextResponse {

		/** **object** detailing a **product** that matches the search criteria */
		data?: SearchFreetextResponseProductData;
	}
	export interface SearchFreetextResponseProductFormProperties extends SearchFreetextResponseFormProperties {
	}
	export function CreateSearchFreetextResponseProductFormGroup() {
		return new FormGroup<SearchFreetextResponseProductFormProperties>({
			searchType: new FormControl<SearchFreetextResponseSearchType | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchFreetextResponseProductData {

		/** ignore (Viator only) */
		admission?: string | null;

		/** ignore (Viator only) */
		attractionLatitude?: string | null;

		/** ignore (Viator only) */
		attractionLongitude?: string | null;

		/** ignore (Viator only) */
		available?: boolean | null;

		/**
		 * **booking type specifier** for *this* product that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made
		 * *one of* the following:
		 * - `"FreesaleBE"` – *this* product will be confirmed immediately and the supplier will be sent a notification
		 * - `"UnconditionalBE"` - *this* product will be confirmed immediately and the supplier will not be notified
		 * - `"DeferredCRMBE"` - *this* product is an on-request product and will not be confirmed immediately. *this* product will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services
		 * - `"FreesaleOnRequestBE"` - *this* product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.
		 * If a booking is made within the on-request period, *this* product will be an on-request product. Once the booking has been made, the `bookingEngineId` will change to either `"FreesaleOnRequestBE:OnRequest"` or `"FreesaleOnRequestBE:Freesold"` depending on the travel date and the on-request period
		 */
		bookingEngineId?: SearchFreetextResponseProductDataBookingEngineId | null;

		/**
		 * **list** of unique numeric product category identifiers
		 * - `categoryId` is available for the destination from the [/taxonomy/categories](#operation/taxonomyCategories) service
		 */
		catIds?: Array<number>;

		/** **unique alphanumeric identifier** of *this* product */
		code?: string | null;

		/** **currency** in which *this* product's pricing is displayed */
		currencyCode?: string | null;

		/** **natural-language duration** of *this* product */
		duration?: string | null;

		/** ignore (Viator only) */
		essential?: string | null;

		/**
		 * ignore (Viator only)
		 * For cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object
		 */
		merchantCancellable?: boolean | null;

		/**
		 * Numeric 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee; i.e. the merchant net rate
		 * For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)
		 */
		merchantNetPriceFrom?: number | null;

		/**
		 * Currency-formatted 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee (i.e. the merchant net rate)
		 * For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)
		 */
		merchantNetPriceFromFormatted?: string | null;

		/**
		 * **number** of hours before the travel date that *this* product will be 'on-request' for
		 * - this field will contain a value if the `bookingEngineId` is `'FreesaleOnRequestBE'`
		 * - an `onRequestPeriod` of 48 hours means that *this* product is freesale up until 48 hours before the travel date, and is on-request for 48 hours or less until the travel date
		 * - **note**: 'hours in advance' (the number of hours a product is available for booking before the travel date) may also affect this; however, this value is not available in the API
		 */
		onRequestPeriod?: number | null;

		/**
		 * Ignore (Viator only)
		 */
		onSale?: boolean | null;

		/** **number** of panoramic images available for *this* product */
		panoramaCount?: number | null;

		/**
		 * **object** detailing product availability
		 * - `pas` stands for Product Availability Schema
		 */
		pas?: string | null;

		/** **number** of user photos published for *this* product */
		photoCount?: number | null;

		/**
		 * **suggested sell ('from') price** for this product in the currency set in the `currencyCode` parameter. This is the cheapest sell price, taking into consideration off-peak periods and discounts on larger groups.
		 * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
		 */
		price?: number | null;

		/**
		 * **currency-formatted suggested sell ('from') price** for this product in the currency set in the `currencyCode` parameter
		 * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
		 */
		priceFormatted?: string | null;

		/** **unique numeric identifier** of *this* product's primary destination */
		primaryDestinationId?: number | null;

		/** **natural-language name** of *this* product's primary destination */
		primaryDestinationName?: string | null;

		/** **URL-formatted name** of *this* product's primary destination */
		primaryDestinationUrlName?: string | null;

		/** ignore (Viator only) */
		primaryGroupId?: string | null;

		/** **URL-formatted name** of *this* product */
		productURLName?: string | null;

		/** ignore (Viator only) */
		publishedDate?: string | null;

		/**
		 * **average user rating** of *this* product
		 * users rate products by assigning a star-rating from 1-5; this value shows the average of the star ratings provided by users;
		 * the `ratingCounts` associative array in this response provides a breakdown of how many submissions for each star rating have been received
		 */
		rating?: number | null;

		/**
		 * **number** of user reviews that have been submitted by users for *this* product
		 * If your account has been configured to limit the number of reviews you can receive, this value will never be higher than that. Otherwise, this value will show the total number of reviews available for this product. If there are more than 24 reviews available, you will need to use the [/product/reviews](#operation/productReviews) service to retrieve the remainder of the reviews.
		 */
		reviewCount?: number | null;

		/** **numeric original price** for this product if the product is on special / a discount has been applied. `0` if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information. */
		rrp?: number | null;

		/** **currency-formatted original price** for this product if the product is on special / a discount has been applied. Empty string if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information. */
		rrpformatted?: string | null;

		/**
		 * Ignore (Viator only)
		 */
		savingAmount?: string | null;

		/**
		 * Ignore (Viator only)
		 */
		savingAmountFormated?: string | null;

		/** **natural-language description** (shortened) of *this* product */
		shortDescription?: string | null;

		/** **natural-language title** (shortened) of *this* product */
		shortTitle?: string | null;

		/** ignore (Viator only) */
		sortOrder?: number | null;

		/** **indicator**: `true` if a special offer is available for *this* product. If `true` the `specialOffer` field will contain a text string providing details of the special offer which you may wish to display in your product search results. E.g. 'Book by May 27 to save 34% off our previously offered price!'. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information. */
		specialOfferAvailable?: boolean | null;

		/** ignore (Viator only) */
		specialReservation?: boolean | null;

		/** ignore (Viator only) */
		specialReservationDetails?: string | null;

		/** ignore (Viator only) */
		sslSupported?: boolean | null;

		/**
		 * **list** of unique numeric subcategory identifiers that *this* product falls under
		 * - `subcategoryId` is available from [/taxonomy/categories](#operation/taxonomyCategories) service"
		 */
		subCatIds?: Array<number>;

		/** **unique identifier** of *this* product's supplier */
		supplierCode?: string | null;

		/** **natural-language name** of *this* product's supplier */
		supplierName?: string | null;

		/** **high-resolution thumbnail image URL** for *this* product */
		thumbnailHiResURL?: string | null;

		/** **URL** of *this* product's thumbnail image */
		thumbnailURL?: string | null;

		/** **natural-language title** of *this* product */
		title?: string | null;

		/**
		 * **numeric indicator** of the language translation level for *this* product that is one of:
		 * - `0`: no translation (English only)
		 * - `80`: full machine translation
		 * - `100`: full human translation
		 * See: [Working with human and machine translations](#section/Appendices/Working-with-human-and-machine-translations) for more information
		 */
		translationLevel?: TranslationLevel;

		/** ignore (Viator only) */
		uniqueShortDescription?: string | null;

		/** ignore (Viator only) – videos are not available to partners */
		videoCount?: number | null;

		/** ignore (Viator only) */
		webURL?: string | null;
	}
	export interface SearchFreetextResponseProductDataFormProperties {

		/** ignore (Viator only) */
		admission: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		attractionLatitude: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		attractionLongitude: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		available: FormControl<boolean | null | undefined>,

		/**
		 * **booking type specifier** for *this* product that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made
		 * *one of* the following:
		 * - `"FreesaleBE"` – *this* product will be confirmed immediately and the supplier will be sent a notification
		 * - `"UnconditionalBE"` - *this* product will be confirmed immediately and the supplier will not be notified
		 * - `"DeferredCRMBE"` - *this* product is an on-request product and will not be confirmed immediately. *this* product will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services
		 * - `"FreesaleOnRequestBE"` - *this* product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.
		 * If a booking is made within the on-request period, *this* product will be an on-request product. Once the booking has been made, the `bookingEngineId` will change to either `"FreesaleOnRequestBE:OnRequest"` or `"FreesaleOnRequestBE:Freesold"` depending on the travel date and the on-request period
		 */
		bookingEngineId: FormControl<SearchFreetextResponseProductDataBookingEngineId | null | undefined>,

		/** **unique alphanumeric identifier** of *this* product */
		code: FormControl<string | null | undefined>,

		/** **currency** in which *this* product's pricing is displayed */
		currencyCode: FormControl<string | null | undefined>,

		/** **natural-language duration** of *this* product */
		duration: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		essential: FormControl<string | null | undefined>,

		/**
		 * ignore (Viator only)
		 * For cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object
		 */
		merchantCancellable: FormControl<boolean | null | undefined>,

		/**
		 * Numeric 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee; i.e. the merchant net rate
		 * For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)
		 */
		merchantNetPriceFrom: FormControl<number | null | undefined>,

		/**
		 * Currency-formatted 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee (i.e. the merchant net rate)
		 * For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)
		 */
		merchantNetPriceFromFormatted: FormControl<string | null | undefined>,

		/**
		 * **number** of hours before the travel date that *this* product will be 'on-request' for
		 * - this field will contain a value if the `bookingEngineId` is `'FreesaleOnRequestBE'`
		 * - an `onRequestPeriod` of 48 hours means that *this* product is freesale up until 48 hours before the travel date, and is on-request for 48 hours or less until the travel date
		 * - **note**: 'hours in advance' (the number of hours a product is available for booking before the travel date) may also affect this; however, this value is not available in the API
		 */
		onRequestPeriod: FormControl<number | null | undefined>,

		/**
		 * Ignore (Viator only)
		 */
		onSale: FormControl<boolean | null | undefined>,

		/** **number** of panoramic images available for *this* product */
		panoramaCount: FormControl<number | null | undefined>,

		/**
		 * **object** detailing product availability
		 * - `pas` stands for Product Availability Schema
		 */
		pas: FormControl<string | null | undefined>,

		/** **number** of user photos published for *this* product */
		photoCount: FormControl<number | null | undefined>,

		/**
		 * **suggested sell ('from') price** for this product in the currency set in the `currencyCode` parameter. This is the cheapest sell price, taking into consideration off-peak periods and discounts on larger groups.
		 * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
		 */
		price: FormControl<number | null | undefined>,

		/**
		 * **currency-formatted suggested sell ('from') price** for this product in the currency set in the `currencyCode` parameter
		 * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
		 */
		priceFormatted: FormControl<string | null | undefined>,

		/** **unique numeric identifier** of *this* product's primary destination */
		primaryDestinationId: FormControl<number | null | undefined>,

		/** **natural-language name** of *this* product's primary destination */
		primaryDestinationName: FormControl<string | null | undefined>,

		/** **URL-formatted name** of *this* product's primary destination */
		primaryDestinationUrlName: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		primaryGroupId: FormControl<string | null | undefined>,

		/** **URL-formatted name** of *this* product */
		productURLName: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		publishedDate: FormControl<string | null | undefined>,

		/**
		 * **average user rating** of *this* product
		 * users rate products by assigning a star-rating from 1-5; this value shows the average of the star ratings provided by users;
		 * the `ratingCounts` associative array in this response provides a breakdown of how many submissions for each star rating have been received
		 */
		rating: FormControl<number | null | undefined>,

		/**
		 * **number** of user reviews that have been submitted by users for *this* product
		 * If your account has been configured to limit the number of reviews you can receive, this value will never be higher than that. Otherwise, this value will show the total number of reviews available for this product. If there are more than 24 reviews available, you will need to use the [/product/reviews](#operation/productReviews) service to retrieve the remainder of the reviews.
		 */
		reviewCount: FormControl<number | null | undefined>,

		/** **numeric original price** for this product if the product is on special / a discount has been applied. `0` if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information. */
		rrp: FormControl<number | null | undefined>,

		/** **currency-formatted original price** for this product if the product is on special / a discount has been applied. Empty string if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information. */
		rrpformatted: FormControl<string | null | undefined>,

		/**
		 * Ignore (Viator only)
		 */
		savingAmount: FormControl<string | null | undefined>,

		/**
		 * Ignore (Viator only)
		 */
		savingAmountFormated: FormControl<string | null | undefined>,

		/** **natural-language description** (shortened) of *this* product */
		shortDescription: FormControl<string | null | undefined>,

		/** **natural-language title** (shortened) of *this* product */
		shortTitle: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		sortOrder: FormControl<number | null | undefined>,

		/** **indicator**: `true` if a special offer is available for *this* product. If `true` the `specialOffer` field will contain a text string providing details of the special offer which you may wish to display in your product search results. E.g. 'Book by May 27 to save 34% off our previously offered price!'. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information. */
		specialOfferAvailable: FormControl<boolean | null | undefined>,

		/** ignore (Viator only) */
		specialReservation: FormControl<boolean | null | undefined>,

		/** ignore (Viator only) */
		specialReservationDetails: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		sslSupported: FormControl<boolean | null | undefined>,

		/** **unique identifier** of *this* product's supplier */
		supplierCode: FormControl<string | null | undefined>,

		/** **natural-language name** of *this* product's supplier */
		supplierName: FormControl<string | null | undefined>,

		/** **high-resolution thumbnail image URL** for *this* product */
		thumbnailHiResURL: FormControl<string | null | undefined>,

		/** **URL** of *this* product's thumbnail image */
		thumbnailURL: FormControl<string | null | undefined>,

		/** **natural-language title** of *this* product */
		title: FormControl<string | null | undefined>,

		/**
		 * **numeric indicator** of the language translation level for *this* product that is one of:
		 * - `0`: no translation (English only)
		 * - `80`: full machine translation
		 * - `100`: full human translation
		 * See: [Working with human and machine translations](#section/Appendices/Working-with-human-and-machine-translations) for more information
		 */
		translationLevel: FormControl<TranslationLevel | null | undefined>,

		/** ignore (Viator only) */
		uniqueShortDescription: FormControl<string | null | undefined>,

		/** ignore (Viator only) – videos are not available to partners */
		videoCount: FormControl<number | null | undefined>,

		/** ignore (Viator only) */
		webURL: FormControl<string | null | undefined>,
	}
	export function CreateSearchFreetextResponseProductDataFormGroup() {
		return new FormGroup<SearchFreetextResponseProductDataFormProperties>({
			admission: new FormControl<string | null | undefined>(undefined),
			attractionLatitude: new FormControl<string | null | undefined>(undefined),
			attractionLongitude: new FormControl<string | null | undefined>(undefined),
			available: new FormControl<boolean | null | undefined>(undefined),
			bookingEngineId: new FormControl<SearchFreetextResponseProductDataBookingEngineId | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			essential: new FormControl<string | null | undefined>(undefined),
			merchantCancellable: new FormControl<boolean | null | undefined>(undefined),
			merchantNetPriceFrom: new FormControl<number | null | undefined>(undefined),
			merchantNetPriceFromFormatted: new FormControl<string | null | undefined>(undefined),
			onRequestPeriod: new FormControl<number | null | undefined>(undefined),
			onSale: new FormControl<boolean | null | undefined>(undefined),
			panoramaCount: new FormControl<number | null | undefined>(undefined),
			pas: new FormControl<string | null | undefined>(undefined),
			photoCount: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			priceFormatted: new FormControl<string | null | undefined>(undefined),
			primaryDestinationId: new FormControl<number | null | undefined>(undefined),
			primaryDestinationName: new FormControl<string | null | undefined>(undefined),
			primaryDestinationUrlName: new FormControl<string | null | undefined>(undefined),
			primaryGroupId: new FormControl<string | null | undefined>(undefined),
			productURLName: new FormControl<string | null | undefined>(undefined),
			publishedDate: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			reviewCount: new FormControl<number | null | undefined>(undefined),
			rrp: new FormControl<number | null | undefined>(undefined),
			rrpformatted: new FormControl<string | null | undefined>(undefined),
			savingAmount: new FormControl<string | null | undefined>(undefined),
			savingAmountFormated: new FormControl<string | null | undefined>(undefined),
			shortDescription: new FormControl<string | null | undefined>(undefined),
			shortTitle: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
			specialOfferAvailable: new FormControl<boolean | null | undefined>(undefined),
			specialReservation: new FormControl<boolean | null | undefined>(undefined),
			specialReservationDetails: new FormControl<string | null | undefined>(undefined),
			sslSupported: new FormControl<boolean | null | undefined>(undefined),
			supplierCode: new FormControl<string | null | undefined>(undefined),
			supplierName: new FormControl<string | null | undefined>(undefined),
			thumbnailHiResURL: new FormControl<string | null | undefined>(undefined),
			thumbnailURL: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			translationLevel: new FormControl<TranslationLevel | null | undefined>(undefined),
			uniqueShortDescription: new FormControl<string | null | undefined>(undefined),
			videoCount: new FormControl<number | null | undefined>(undefined),
			webURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SearchFreetextResponseProductDataBookingEngineId { FreesaleBE = 'FreesaleBE', UnconditionalBE = 'UnconditionalBE', DeferredCRMBE = 'DeferredCRMBE', FreesaleOnRequestBE = 'FreesaleOnRequestBE' }


	/**
	 * **numeric indicator** of the language translation level for *this* product that is one of:
	 * - `0`: no translation (English only)
	 * - `80`: full machine translation
	 * - `100`: full human translation
	 * See: [Working with human and machine translations](#section/Appendices/Working-with-human-and-machine-translations) for more information
	 */
	export enum TranslationLevel { _0 = 0, _80 = 1, _100 = 2 }

	export interface SearchFreetextResponseRecommendation extends SearchFreetextResponse {

		/** **object** detailing a **recommendation** that matches the search criteria */
		data?: SearchFreetextResponseRecommendationData;
	}
	export interface SearchFreetextResponseRecommendationFormProperties extends SearchFreetextResponseFormProperties {
	}
	export function CreateSearchFreetextResponseRecommendationFormGroup() {
		return new FormGroup<SearchFreetextResponseRecommendationFormProperties>({
			searchType: new FormControl<SearchFreetextResponseSearchType | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchFreetextResponseRecommendationData {

		/** ignore (Viator only) */
		attractionCity?: string | null;

		/** ignore (Viator only) */
		attractionLatitude?: number | null;

		/** ignore (Viator only) */
		attractionLongitude?: number | null;

		/** ignore (Viator only) */
		attractionState?: string | null;

		/** ignore (Viator only) */
		attractionStreetAddress?: string | null;

		/** Introductory text for this recommendation */
		descriptionIntro?: string | null;

		/** Text for this recommendation */
		descriptionText?: string | null;

		/** Destination Id for the destination of this recommendation */
		destinationId?: number | null;

		/** ignore (Viator only) */
		editorsPick?: boolean | null;

		/** ignore (Viator only) */
		keywordCount?: number | null;

		/** ignore (Viator only) */
		keywords?: Array<string>;

		/** HTML-formatted overview of recommendation */
		overviewSummary?: string | null;

		/** language for the natural-language text in this response */
		pagePrimaryLanguage?: string | null;

		/** Title of this page */
		pageTitle?: string | null;

		/** URL path fragment for this recommendation */
		pageUrlName?: string | null;

		/** ignore (Viator only) */
		panoramaCount?: number | null;

		/** ignore (Viator only) */
		photoCount?: number | null;

		/** Destination Id for the primary destination of this recommendation */
		primaryDestinationId?: number | null;

		/** Name of primary destination for this recommendation */
		primaryDestinationName?: string | null;

		/** ignore (Viator only) */
		primaryDestinationUrlName?: string | null;

		/** Number of products that this recommendation refers to */
		productCount?: number | null;

		/** ignore (Viator only) */
		publishedDate?: string | null;

		/** Numeric average rating for this recommendation */
		rating?: number | null;

		/** number of reviews for this recommendation */
		reviewCount?: number | null;

		/** ignore (Viator only) */
		seoId?: number | null;

		/** Type of response; i.e. `"RECOMMENDATION"` */
		seoType?: string | null;

		/** ignore (Viator only) */
		showPhotos?: boolean | null;

		/** ignore (Viator only) */
		showReviews?: boolean | null;

		/** ignore (Viator only) */
		sortOrder?: number | null;

		/** Tab-title for this recommendation */
		tabTitle?: string | null;

		/** URL for the high-resolution image for this recommendation */
		thumbnailHiResURL?: string | null;

		/** URL for medium-resolution image for this recommendation */
		thumbnailURL?: string | null;

		/** Title of this recommendation */
		title?: string | null;

		/** ignore (Viator only) */
		userName?: string | null;

		/** ignore (Viator only) */
		webURL?: string | null;
	}
	export interface SearchFreetextResponseRecommendationDataFormProperties {

		/** ignore (Viator only) */
		attractionCity: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		attractionLatitude: FormControl<number | null | undefined>,

		/** ignore (Viator only) */
		attractionLongitude: FormControl<number | null | undefined>,

		/** ignore (Viator only) */
		attractionState: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		attractionStreetAddress: FormControl<string | null | undefined>,

		/** Introductory text for this recommendation */
		descriptionIntro: FormControl<string | null | undefined>,

		/** Text for this recommendation */
		descriptionText: FormControl<string | null | undefined>,

		/** Destination Id for the destination of this recommendation */
		destinationId: FormControl<number | null | undefined>,

		/** ignore (Viator only) */
		editorsPick: FormControl<boolean | null | undefined>,

		/** ignore (Viator only) */
		keywordCount: FormControl<number | null | undefined>,

		/** HTML-formatted overview of recommendation */
		overviewSummary: FormControl<string | null | undefined>,

		/** language for the natural-language text in this response */
		pagePrimaryLanguage: FormControl<string | null | undefined>,

		/** Title of this page */
		pageTitle: FormControl<string | null | undefined>,

		/** URL path fragment for this recommendation */
		pageUrlName: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		panoramaCount: FormControl<number | null | undefined>,

		/** ignore (Viator only) */
		photoCount: FormControl<number | null | undefined>,

		/** Destination Id for the primary destination of this recommendation */
		primaryDestinationId: FormControl<number | null | undefined>,

		/** Name of primary destination for this recommendation */
		primaryDestinationName: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		primaryDestinationUrlName: FormControl<string | null | undefined>,

		/** Number of products that this recommendation refers to */
		productCount: FormControl<number | null | undefined>,

		/** ignore (Viator only) */
		publishedDate: FormControl<string | null | undefined>,

		/** Numeric average rating for this recommendation */
		rating: FormControl<number | null | undefined>,

		/** number of reviews for this recommendation */
		reviewCount: FormControl<number | null | undefined>,

		/** ignore (Viator only) */
		seoId: FormControl<number | null | undefined>,

		/** Type of response; i.e. `"RECOMMENDATION"` */
		seoType: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		showPhotos: FormControl<boolean | null | undefined>,

		/** ignore (Viator only) */
		showReviews: FormControl<boolean | null | undefined>,

		/** ignore (Viator only) */
		sortOrder: FormControl<number | null | undefined>,

		/** Tab-title for this recommendation */
		tabTitle: FormControl<string | null | undefined>,

		/** URL for the high-resolution image for this recommendation */
		thumbnailHiResURL: FormControl<string | null | undefined>,

		/** URL for medium-resolution image for this recommendation */
		thumbnailURL: FormControl<string | null | undefined>,

		/** Title of this recommendation */
		title: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		userName: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		webURL: FormControl<string | null | undefined>,
	}
	export function CreateSearchFreetextResponseRecommendationDataFormGroup() {
		return new FormGroup<SearchFreetextResponseRecommendationDataFormProperties>({
			attractionCity: new FormControl<string | null | undefined>(undefined),
			attractionLatitude: new FormControl<number | null | undefined>(undefined),
			attractionLongitude: new FormControl<number | null | undefined>(undefined),
			attractionState: new FormControl<string | null | undefined>(undefined),
			attractionStreetAddress: new FormControl<string | null | undefined>(undefined),
			descriptionIntro: new FormControl<string | null | undefined>(undefined),
			descriptionText: new FormControl<string | null | undefined>(undefined),
			destinationId: new FormControl<number | null | undefined>(undefined),
			editorsPick: new FormControl<boolean | null | undefined>(undefined),
			keywordCount: new FormControl<number | null | undefined>(undefined),
			overviewSummary: new FormControl<string | null | undefined>(undefined),
			pagePrimaryLanguage: new FormControl<string | null | undefined>(undefined),
			pageTitle: new FormControl<string | null | undefined>(undefined),
			pageUrlName: new FormControl<string | null | undefined>(undefined),
			panoramaCount: new FormControl<number | null | undefined>(undefined),
			photoCount: new FormControl<number | null | undefined>(undefined),
			primaryDestinationId: new FormControl<number | null | undefined>(undefined),
			primaryDestinationName: new FormControl<string | null | undefined>(undefined),
			primaryDestinationUrlName: new FormControl<string | null | undefined>(undefined),
			productCount: new FormControl<number | null | undefined>(undefined),
			publishedDate: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			reviewCount: new FormControl<number | null | undefined>(undefined),
			seoId: new FormControl<number | null | undefined>(undefined),
			seoType: new FormControl<string | null | undefined>(undefined),
			showPhotos: new FormControl<boolean | null | undefined>(undefined),
			showReviews: new FormControl<boolean | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
			tabTitle: new FormControl<string | null | undefined>(undefined),
			thumbnailHiResURL: new FormControl<string | null | undefined>(undefined),
			thumbnailURL: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
			webURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BasicErrorModel {

		/** **timestamp** of *this* response */
		dateStamp?: string | null;

		/**
		 * **array** of error codes pertaining to *this* error
		 * - See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes
		 */
		errorCodes?: Array<string>;

		/** **array** of error message strings */
		errorMessage?: Array<string>;

		/** **array** of error message strings in plain text */
		errorMessageText?: string | null;

		/** **name** of *this* type of error */
		errorName?: string | null;

		/** **reference number** of *this* error */
		errorReference?: string | null;

		/** **code** specifying the type of error */
		errorType?: string | null;

		/** ignore (Viator only) */
		extraInfo?: string | null;

		/** ignore (Viator only) */
		extraObject?: string | null;

		/**
		 * **boolean indicator** of *this* request's outcome
		 * - `true`: the request was successful with no errors
		 * - `false`: an error was encountered
		 */
		success?: boolean | null;

		/**
		 * **number** of results available for *this* service
		 */
		totalCount?: number | null;

		/** **unique numeric id** of the server that processed *this* request */
		vmid?: string | null;
	}
	export interface BasicErrorModelFormProperties {

		/** **timestamp** of *this* response */
		dateStamp: FormControl<string | null | undefined>,

		/** **array** of error message strings in plain text */
		errorMessageText: FormControl<string | null | undefined>,

		/** **name** of *this* type of error */
		errorName: FormControl<string | null | undefined>,

		/** **reference number** of *this* error */
		errorReference: FormControl<string | null | undefined>,

		/** **code** specifying the type of error */
		errorType: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		extraInfo: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		extraObject: FormControl<string | null | undefined>,

		/**
		 * **boolean indicator** of *this* request's outcome
		 * - `true`: the request was successful with no errors
		 * - `false`: an error was encountered
		 */
		success: FormControl<boolean | null | undefined>,

		/**
		 * **number** of results available for *this* service
		 */
		totalCount: FormControl<number | null | undefined>,

		/** **unique numeric id** of the server that processed *this* request */
		vmid: FormControl<string | null | undefined>,
	}
	export function CreateBasicErrorModelFormGroup() {
		return new FormGroup<BasicErrorModelFormProperties>({
			dateStamp: new FormControl<string | null | undefined>(undefined),
			errorMessageText: new FormControl<string | null | undefined>(undefined),
			errorName: new FormControl<string | null | undefined>(undefined),
			errorReference: new FormControl<string | null | undefined>(undefined),
			errorType: new FormControl<string | null | undefined>(undefined),
			extraInfo: new FormControl<string | null | undefined>(undefined),
			extraObject: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
			vmid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * **booking type specifier** for *this* product that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made
	 * *one of* the following:
	 * - `"FreesaleBE"` – *this* product will be confirmed immediately and the supplier will be sent a notification
	 * - `"UnconditionalBE"` - *this* product will be confirmed immediately and the supplier will not be notified
	 * - `"DeferredCRMBE"` - *this* product is an on-request product and will not be confirmed immediately. *this* product will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services
	 * - `"FreesaleOnRequestBE"` - *this* product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.
	 * If a booking is made within the on-request period, *this* product will be an on-request product. Once the booking has been made, the `bookingEngineId` will change to either `"FreesaleOnRequestBE:OnRequest"` or `"FreesaleOnRequestBE:Freesold"` depending on the travel date and the on-request period                        
	 */
	export enum BookingEngineId { FreesaleBE = 'FreesaleBE', UnconditionalBE = 'UnconditionalBE', DeferredCRMBE = 'DeferredCRMBE', FreesaleOnRequestBE = 'FreesaleOnRequestBE' }


	/**
	 * [booking type indicator](#section/Key-concepts/Booking-concepts) that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made
	 * *one of* the following:
	 * - `"UF"` (FreesaleBE and UnconditionalBE) – this booking will be confirmed immediately
	 * - `"OR"` (DeferredCRMBE) – the booked product is an on-request product, will not be confirmed immediately and will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services
	 * - `"FO"` (FreesaleOnRequestBE) – the booked product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.
	 */
	export enum BookingEngineId_response { UF = 'UF', OR = 'OR', FO = 'FO' }


	/** **object** containing item booking status information */
	export interface BookingStatus_item {

		/** **indicator**: `true` if *this* item's booking has been amended */
		amended?: boolean | null;

		/** **indicator**: `true` if *this* item's booking has been cancelled */
		cancelled?: boolean | null;

		/** **indicator**: `true` if *this* item's booking is confirmed */
		confirmed?: boolean | null;

		/** **indicator**: `true` if *this* item's booking has failed */
		failed?: boolean | null;

		/** **level** of *this* item's booking status */
		level?: BookingStatus_itemLevel | null;

		/** **indicator**: `true` if *this* item's booking is pending */
		pending?: boolean | null;

		/** **numeric identifier** of *this* item's booking status */
		status?: number | null;

		/** **natural-language description** of *this* item's booking status; e.g., 'Waiting to be booked' */
		text?: string | null;

		/**
		 * **specifier** of *this* item's booking status
		 * * See: [bookingStatus fields and meanings](#section/Appendices/bookingStatus-field-values-and-meanings)
		 */
		type?: BookingStatus_itemType | null;
	}

	/** **object** containing item booking status information */
	export interface BookingStatus_itemFormProperties {

		/** **indicator**: `true` if *this* item's booking has been amended */
		amended: FormControl<boolean | null | undefined>,

		/** **indicator**: `true` if *this* item's booking has been cancelled */
		cancelled: FormControl<boolean | null | undefined>,

		/** **indicator**: `true` if *this* item's booking is confirmed */
		confirmed: FormControl<boolean | null | undefined>,

		/** **indicator**: `true` if *this* item's booking has failed */
		failed: FormControl<boolean | null | undefined>,

		/** **level** of *this* item's booking status */
		level: FormControl<BookingStatus_itemLevel | null | undefined>,

		/** **indicator**: `true` if *this* item's booking is pending */
		pending: FormControl<boolean | null | undefined>,

		/** **numeric identifier** of *this* item's booking status */
		status: FormControl<number | null | undefined>,

		/** **natural-language description** of *this* item's booking status; e.g., 'Waiting to be booked' */
		text: FormControl<string | null | undefined>,

		/**
		 * **specifier** of *this* item's booking status
		 * * See: [bookingStatus fields and meanings](#section/Appendices/bookingStatus-field-values-and-meanings)
		 */
		type: FormControl<BookingStatus_itemType | null | undefined>,
	}
	export function CreateBookingStatus_itemFormGroup() {
		return new FormGroup<BookingStatus_itemFormProperties>({
			amended: new FormControl<boolean | null | undefined>(undefined),
			cancelled: new FormControl<boolean | null | undefined>(undefined),
			confirmed: new FormControl<boolean | null | undefined>(undefined),
			failed: new FormControl<boolean | null | undefined>(undefined),
			level: new FormControl<BookingStatus_itemLevel | null | undefined>(undefined),
			pending: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<BookingStatus_itemType | null | undefined>(undefined),
		});

	}

	export enum BookingStatus_itemLevel { ITEM = 'ITEM', ITINERARY = 'ITINERARY' }

	export enum BookingStatus_itemType { WAITING = 'WAITING', CONFIRMED = 'CONFIRMED', UNAVAILABLE = 'UNAVAILABLE', PENDING = 'PENDING', FAILED = 'FAILED', CANCELLED = 'CANCELLED', EXPIRED = 'EXPIRED', AMENDED = 'AMENDED', PENDING_AMEND = 'PENDING_AMEND', REJECTED = 'REJECTED', ON_HOLD = 'ON_HOLD' }


	/** **object** containing itinerary booking status information */
	export interface BookingStatus_itinerary {

		/** **indicator**: `true` if *this* itinerary's booking has been amended */
		amended?: boolean | null;

		/** **indicator**: `true` if *this* itinerary's booking has been cancelled */
		cancelled?: boolean | null;

		/** **indicator**: `true` if *this* itinerary's booking is confirmed */
		confirmed?: boolean | null;

		/** **indicator**: `true` if *this* itinerary's booking has failed */
		failed?: boolean | null;

		/** **level** of *this* itinerary's booking status */
		level?: BookingStatus_itemLevel | null;

		/** **indicator**: `true` if *this* itinerary's booking is pending */
		pending?: boolean | null;

		/** **numeric identifier** of *this* itinerary's booking status */
		status?: number | null;

		/** **natural-language description** of *this* itinerary's booking status */
		text?: string | null;

		/**
		 * **specifier** of *this* itinerary's booking status
		 * * See: [bookingStatus fields and meanings](#section/Appendices/bookingStatus-field-values-and-meanings)
		 */
		type?: BookingStatus_itineraryType | null;
	}

	/** **object** containing itinerary booking status information */
	export interface BookingStatus_itineraryFormProperties {

		/** **indicator**: `true` if *this* itinerary's booking has been amended */
		amended: FormControl<boolean | null | undefined>,

		/** **indicator**: `true` if *this* itinerary's booking has been cancelled */
		cancelled: FormControl<boolean | null | undefined>,

		/** **indicator**: `true` if *this* itinerary's booking is confirmed */
		confirmed: FormControl<boolean | null | undefined>,

		/** **indicator**: `true` if *this* itinerary's booking has failed */
		failed: FormControl<boolean | null | undefined>,

		/** **level** of *this* itinerary's booking status */
		level: FormControl<BookingStatus_itemLevel | null | undefined>,

		/** **indicator**: `true` if *this* itinerary's booking is pending */
		pending: FormControl<boolean | null | undefined>,

		/** **numeric identifier** of *this* itinerary's booking status */
		status: FormControl<number | null | undefined>,

		/** **natural-language description** of *this* itinerary's booking status */
		text: FormControl<string | null | undefined>,

		/**
		 * **specifier** of *this* itinerary's booking status
		 * * See: [bookingStatus fields and meanings](#section/Appendices/bookingStatus-field-values-and-meanings)
		 */
		type: FormControl<BookingStatus_itineraryType | null | undefined>,
	}
	export function CreateBookingStatus_itineraryFormGroup() {
		return new FormGroup<BookingStatus_itineraryFormProperties>({
			amended: new FormControl<boolean | null | undefined>(undefined),
			cancelled: new FormControl<boolean | null | undefined>(undefined),
			confirmed: new FormControl<boolean | null | undefined>(undefined),
			failed: new FormControl<boolean | null | undefined>(undefined),
			level: new FormControl<BookingStatus_itemLevel | null | undefined>(undefined),
			pending: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<BookingStatus_itineraryType | null | undefined>(undefined),
		});

	}

	export enum BookingStatus_itineraryType { WAITING = 'WAITING', CONFIRMED = 'CONFIRMED', PENDING = 'PENDING', FAILED = 'FAILED', CANCELLED = 'CANCELLED', AMENDED = 'AMENDED', PENDING_AMEND = 'PENDING_AMEND' }


	/**
	 * **destination type specifier**
	 * - `"COUNTRY"`: destination is a country
	 * - `"REGION"`: destination is a recognized region of a country, such as a state, island within a country, stretch of coastline, etc.
	 * - `"CITY"`: destination is a city
	 */
	export enum DestinationType { CITY = 'CITY', COUNTRY = 'COUNTRY', REGION = 'REGION' }


	/** **object** detailing a single photo from a user */
	export interface PhotoObject {

		/**
		 * **HTML-formatted caption** for *this* photograph
		 * - may contain basic HTML mark-up - e.g., br, li, b, u, p, i, ul and ol
		 */
		caption?: string | null;

		/** **indicator**: `true` if *this* photograph has been tagged as an *editor's pick*; i.e., can be given preference for display */
		editorsPick?: boolean | null;

		/** **URL** for the avatar image of the user that submitted *this* photograph */
		ownerAvatarURL?: string | null;

		/** **country** in which the owner of *this* photograph is located */
		ownerCountry?: string | null;

		/** **unique numeric identifier** of the user that owns the photograph */
		ownerId?: number | null;

		/** **handle** of the user that submitted *this* photograph; e.g., 'Husker1k' */
		ownerName?: string | null;

		/** **URL** of the high-resolution version of *this* photograph */
		photoHiResURL?: string | null;

		/** **unique numeric identifier** of *this* photograph */
		photoId?: number | null;

		/** **URL** of the medium-resolution version of *this* photograph */
		photoMediumResURL?: string | null;

		/** **URL** for the standard-resolution version of *this* photograph */
		photoURL?: string | null;

		/** **product code** for the product that *this* photograph is of */
		productCode?: string | null;

		/** **natural-language title** of the product associated with *this* photograph; e.g., 'Sydney and Bondi Hop-on Hop-off Tour' */
		productTitle?: string | null;

		/** **URL-formatted title** of the product associated with *this* photograph; e.g., `Sydney-and-Bondi-Hop-on-Hop-off-Tour` */
		productUrlName?: string | null;

		/** **sort order** for *this* photograph; e.g., `3` */
		sortOrder?: number | null;

		/** ignore (Viator only) */
		sslSupported?: boolean | null;

		/** **URL** of *this* product's thumbnail image */
		thumbnailURL?: string | null;

		/** **date** on which *this* photograph was submitted */
		timeUploaded?: string | null;

		/** **title** of *this* photograph */
		title?: string | null;
	}

	/** **object** detailing a single photo from a user */
	export interface PhotoObjectFormProperties {

		/**
		 * **HTML-formatted caption** for *this* photograph
		 * - may contain basic HTML mark-up - e.g., br, li, b, u, p, i, ul and ol
		 */
		caption: FormControl<string | null | undefined>,

		/** **indicator**: `true` if *this* photograph has been tagged as an *editor's pick*; i.e., can be given preference for display */
		editorsPick: FormControl<boolean | null | undefined>,

		/** **URL** for the avatar image of the user that submitted *this* photograph */
		ownerAvatarURL: FormControl<string | null | undefined>,

		/** **country** in which the owner of *this* photograph is located */
		ownerCountry: FormControl<string | null | undefined>,

		/** **unique numeric identifier** of the user that owns the photograph */
		ownerId: FormControl<number | null | undefined>,

		/** **handle** of the user that submitted *this* photograph; e.g., 'Husker1k' */
		ownerName: FormControl<string | null | undefined>,

		/** **URL** of the high-resolution version of *this* photograph */
		photoHiResURL: FormControl<string | null | undefined>,

		/** **unique numeric identifier** of *this* photograph */
		photoId: FormControl<number | null | undefined>,

		/** **URL** of the medium-resolution version of *this* photograph */
		photoMediumResURL: FormControl<string | null | undefined>,

		/** **URL** for the standard-resolution version of *this* photograph */
		photoURL: FormControl<string | null | undefined>,

		/** **product code** for the product that *this* photograph is of */
		productCode: FormControl<string | null | undefined>,

		/** **natural-language title** of the product associated with *this* photograph; e.g., 'Sydney and Bondi Hop-on Hop-off Tour' */
		productTitle: FormControl<string | null | undefined>,

		/** **URL-formatted title** of the product associated with *this* photograph; e.g., `Sydney-and-Bondi-Hop-on-Hop-off-Tour` */
		productUrlName: FormControl<string | null | undefined>,

		/** **sort order** for *this* photograph; e.g., `3` */
		sortOrder: FormControl<number | null | undefined>,

		/** ignore (Viator only) */
		sslSupported: FormControl<boolean | null | undefined>,

		/** **URL** of *this* product's thumbnail image */
		thumbnailURL: FormControl<string | null | undefined>,

		/** **date** on which *this* photograph was submitted */
		timeUploaded: FormControl<string | null | undefined>,

		/** **title** of *this* photograph */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePhotoObjectFormGroup() {
		return new FormGroup<PhotoObjectFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined),
			editorsPick: new FormControl<boolean | null | undefined>(undefined),
			ownerAvatarURL: new FormControl<string | null | undefined>(undefined),
			ownerCountry: new FormControl<string | null | undefined>(undefined),
			ownerId: new FormControl<number | null | undefined>(undefined),
			ownerName: new FormControl<string | null | undefined>(undefined),
			photoHiResURL: new FormControl<string | null | undefined>(undefined),
			photoId: new FormControl<number | null | undefined>(undefined),
			photoMediumResURL: new FormControl<string | null | undefined>(undefined),
			photoURL: new FormControl<string | null | undefined>(undefined),
			productCode: new FormControl<string | null | undefined>(undefined),
			productTitle: new FormControl<string | null | undefined>(undefined),
			productUrlName: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
			sslSupported: new FormControl<boolean | null | undefined>(undefined),
			thumbnailURL: new FormControl<string | null | undefined>(undefined),
			timeUploaded: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * **dictionary** of rating (stars) to number of reviews with each rating for *this* product"
	 * users rate products by assigning a star-rating from 1-5; these values show the total number of reviews for each of the star ratings (up to a maximum given in the `reviewCount` field in this response)
	 * - **note**: see response sample for structure
	 */
	export interface RatingCounts {

		/** Number of reviews with a one star rating */
		'1'?: number | null;

		/** Number of reviews with a two star rating */
		'2'?: number | null;

		/** Number of reviews with a three star rating */
		'3'?: number | null;

		/** Number of reviews with a four star rating */
		'4'?: number | null;

		/** Number of reviews with a five star rating */
		'5'?: number | null;
	}

	/**
	 * **dictionary** of rating (stars) to number of reviews with each rating for *this* product"
	 * users rate products by assigning a star-rating from 1-5; these values show the total number of reviews for each of the star ratings (up to a maximum given in the `reviewCount` field in this response)
	 * - **note**: see response sample for structure
	 */
	export interface RatingCountsFormProperties {

		/** Number of reviews with a one star rating */
		'1': FormControl<number | null | undefined>,

		/** Number of reviews with a two star rating */
		'2': FormControl<number | null | undefined>,

		/** Number of reviews with a three star rating */
		'3': FormControl<number | null | undefined>,

		/** Number of reviews with a four star rating */
		'4': FormControl<number | null | undefined>,

		/** Number of reviews with a five star rating */
		'5': FormControl<number | null | undefined>,
	}
	export function CreateRatingCountsFormGroup() {
		return new FormGroup<RatingCountsFormProperties>({
			'1': new FormControl<number | null | undefined>(undefined),
			'2': new FormControl<number | null | undefined>(undefined),
			'3': new FormControl<number | null | undefined>(undefined),
			'4': new FormControl<number | null | undefined>(undefined),
			'5': new FormControl<number | null | undefined>(undefined),
		});

	}


	/** **object** containing a single user review */
	export interface ReviewObject {

		/** **URL** of the reviewer's avatar image */
		ownerAvatarURL?: string | null;

		/** **country** in which the reviewer is located */
		ownerCountry?: string | null;

		/** **unique numeric identifier** of the user that submitted *this* review */
		ownerId?: number | null;

		/** **name** of the user that submitted *this* review */
		ownerName?: string | null;

		/** **product code** of the product that *this* review is about; e.g., `5010SYDNEY` */
		productCode?: string | null;

		/** **title** of the product that *this* review is about */
		productTitle?: string | null;

		/** **URL-formatted title** of the product that *this* review is about */
		productUrlName?: string | null;

		/** **date** that *this* review was published */
		publishedDate?: string | null;

		/** **rating** given by the reviewer */
		rating?: number | null;

		/**
		 * **HTML-formatted content** of the review
		 * - may contain basic HTML mark-up - e.g., br, li, b, u, p, i, ul and ol
		 */
		review?: string | null;

		/** **unique numeric identifier** of *this* review */
		reviewId?: number | null;

		/** **sort order** for *this* review */
		sortOrder?: number | null;

		/** ignore (Viator only) */
		sslSupported?: boolean | null;

		/** **date** that *this* review was submitted */
		submissionDate?: string | null;

		/** ignore (Viator only) */
		viatorFeedback?: string | null;

		/** ignore (Viator only) */
		viatorNotes?: string | null;
	}

	/** **object** containing a single user review */
	export interface ReviewObjectFormProperties {

		/** **URL** of the reviewer's avatar image */
		ownerAvatarURL: FormControl<string | null | undefined>,

		/** **country** in which the reviewer is located */
		ownerCountry: FormControl<string | null | undefined>,

		/** **unique numeric identifier** of the user that submitted *this* review */
		ownerId: FormControl<number | null | undefined>,

		/** **name** of the user that submitted *this* review */
		ownerName: FormControl<string | null | undefined>,

		/** **product code** of the product that *this* review is about; e.g., `5010SYDNEY` */
		productCode: FormControl<string | null | undefined>,

		/** **title** of the product that *this* review is about */
		productTitle: FormControl<string | null | undefined>,

		/** **URL-formatted title** of the product that *this* review is about */
		productUrlName: FormControl<string | null | undefined>,

		/** **date** that *this* review was published */
		publishedDate: FormControl<string | null | undefined>,

		/** **rating** given by the reviewer */
		rating: FormControl<number | null | undefined>,

		/**
		 * **HTML-formatted content** of the review
		 * - may contain basic HTML mark-up - e.g., br, li, b, u, p, i, ul and ol
		 */
		review: FormControl<string | null | undefined>,

		/** **unique numeric identifier** of *this* review */
		reviewId: FormControl<number | null | undefined>,

		/** **sort order** for *this* review */
		sortOrder: FormControl<number | null | undefined>,

		/** ignore (Viator only) */
		sslSupported: FormControl<boolean | null | undefined>,

		/** **date** that *this* review was submitted */
		submissionDate: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		viatorFeedback: FormControl<string | null | undefined>,

		/** ignore (Viator only) */
		viatorNotes: FormControl<string | null | undefined>,
	}
	export function CreateReviewObjectFormGroup() {
		return new FormGroup<ReviewObjectFormProperties>({
			ownerAvatarURL: new FormControl<string | null | undefined>(undefined),
			ownerCountry: new FormControl<string | null | undefined>(undefined),
			ownerId: new FormControl<number | null | undefined>(undefined),
			ownerName: new FormControl<string | null | undefined>(undefined),
			productCode: new FormControl<string | null | undefined>(undefined),
			productTitle: new FormControl<string | null | undefined>(undefined),
			productUrlName: new FormControl<string | null | undefined>(undefined),
			publishedDate: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			review: new FormControl<string | null | undefined>(undefined),
			reviewId: new FormControl<number | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
			sslSupported: new FormControl<boolean | null | undefined>(undefined),
			submissionDate: new FormControl<string | null | undefined>(undefined),
			viatorFeedback: new FormControl<string | null | undefined>(undefined),
			viatorNotes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * **sort order** in which to return the results that is *one of*:
	 *   - `'TOP_SELLERS'`: the top sellers
	 *   - `'REVIEW_AVG_RATING_A'`: ascending by average traveler rating (low -&gt; high)
	 *   - `'REVIEW_AVG_RATING_D'`: descending by average traveler rating (high -&gt; low)
	 *   - `'PRICE_FROM_A'`: ascending by price (low -&gt; high)
	 *   - `'PRICE_FROM_D'`: descending by price (high -&gt; low)
	 */
	export enum SortOrder { TOP_SELLERS = 'TOP_SELLERS', REVIEW_AVG_RATING_A = 'REVIEW_AVG_RATING_A', REVIEW_AVG_RATING_D = 'REVIEW_AVG_RATING_D', PRICE_FROM_A = 'PRICE_FROM_A', PRICE_FROM_D = 'PRICE_FROM_D' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * /available/products
		 * Find products that are available
		 * This endpoint returns available products filtered by product code, date range or number of adult travelers
		 * - **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server.
		 * Post available/products
		 * @return {BasicErrorModel} Success
		 */
		AvailableProducts(requestBody: AvailableProductsPostBody): Observable<BasicErrorModel> {
			return this.http.post<BasicErrorModel>(this.baseUri + 'available/products', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * /booking/availability
		 * Get the tour-grade with the lowest price that is available for a product on each day of the specified month
		 * This service:
		 * - returns
		 * - useful when displaying a calendar of available tours
		 * - For more information, see: [Availability services](#section/Key-concepts/Availability-services)
		 * - **Notes:**
		 * - [/booking/availability/dates](#operation/bookingAvailabilityDates) provides all availability in one call and is more suitable for calendars, etc.
		 * - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server.
		 * Post booking/availability
		 * @return {BasicErrorModel} Success
		 */
		BookingAvailability(requestBody: BookingAvailabilityPostBody): Observable<BasicErrorModel> {
			return this.http.post<BasicErrorModel>(this.baseUri + 'booking/availability', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * /booking/availability/dates
		 * Get dates on which a product is available
		 * This service:
		 * - retrieves all available dates for a product, excluding days it does not operate and blocked-out dates
		 * - returns a multi-dimensional array of year-month -&gt; days that have any availabile tour grade or traveler mix
		 * - useful to present the user with a list of dates for selection on which *this* product is available for booking
		 * - **Notes**:
		 * - The user's desired traveler mix may not be eligible for booking; these details can be displayed when you retrieve its list of tour grades
		 * - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server.
		 * Get booking/availability/dates
		 * @param {string} productCode **unique alphanumeric identifier** of the product
		 * @return {BasicErrorModel} Success
		 */
		BookingAvailabilityDates(productCode: string | null | undefined): Observable<BasicErrorModel> {
			return this.http.get<BasicErrorModel>(this.baseUri + 'booking/availability/dates?productCode=' + (productCode == null ? '' : encodeURIComponent(productCode)), {});
		}

		/**
		 * /booking/availability/tourgrades
		 * Get the tour grades of a product that are currently available
		 * This service reports:
		 * - all tour grades for the specified product, on the specified day, that are available for the specified age bands
		 * - the pricing breakdown and the total depending on the travel date and traveler mix
		 * **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server.
		 * Post booking/availability/tourgrades
		 * @return {BasicErrorModel} Success
		 */
		BookingAvailabilityTourgrades(requestBody: BookingAvailabilityTourgradesPostBody): Observable<BasicErrorModel> {
			return this.http.post<BasicErrorModel>(this.baseUri + 'booking/availability/tourgrades', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * /booking/availability/tourgrades/pricingmatrix
		 * Get a pricing matrix that includes availability and tour-grades for a product
		 * Given a month, this service returns days with available tour grades only (i.e., days which have at least one tourgrade available), and the pricing matrix for that tour grade for that day.
		 * - **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server.
		 * Post booking/availability/tourgrades/pricingmatrix
		 * @return {BasicErrorModel} Success
		 */
		BookingAvailabilityTourgradesPricingmatrix(requestBody: BookingAvailabilityTourgradesPricingmatrixPostBody): Observable<BasicErrorModel> {
			return this.http.post<BasicErrorModel>(this.baseUri + 'booking/availability/tourgrades/pricingmatrix', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * /booking/book
		 * Make a booking
		 * For more information, see:
		 * - [Cancellation policy](#section/Key-concepts/Cancellation-policy)
		 * - [Booking concepts](#section/Key-concepts/Booking-concepts)
		 * - [Booking process flow](#section/Common-workflows-and-data-validation/Booking-process-flow)
		 * - [Making a booking](#section/Common-workflows-and-data-validation/Making-a-booking)
		 * - [Supplier communications](#section/Key-concepts/Supplier-communications)
		 * Post booking/book
		 * @return {BasicErrorModel} Success
		 */
		BookingBook(requestBody: BookingBookPostBody): Observable<BasicErrorModel> {
			return this.http.post<BasicErrorModel>(this.baseUri + 'booking/book', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * /booking/calculateprice
		 * Confirm the price of a tour / activity prior to booking
		 * For more information, see: [Calculating prices](#section/Common-workflows-and-data-validation/Calculating-prices)
		 * - **Note**: Availability and pricing data is limited to a period of **six months** into the future from the present time
		 * Post booking/calculateprice
		 * @return {BasicErrorModel} Success
		 */
		BookingCalculateprice(requestBody: BookingCalculatepricePostBody): Observable<BasicErrorModel> {
			return this.http.post<BasicErrorModel>(this.baseUri + 'booking/calculateprice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * /booking/hotels
		 * Get hotel pick-ups
		 * Lists the hotel pickups available for either a product or a destination
		 * Get booking/hotels
		 * @param {string} productCode **unique alphanumeric identifier** of the product
		 * @param {number} destId **unique numeric identifier** of the destination
		 * @return {BasicErrorModel} Success
		 */
		BookingHotels(productCode: string | null | undefined, destId: number | null | undefined): Observable<BasicErrorModel> {
			return this.http.get<BasicErrorModel>(this.baseUri + 'booking/hotels?productCode=' + (productCode == null ? '' : encodeURIComponent(productCode)) + '&destId=' + destId, {});
		}

		/**
		 * /booking/mybookings
		 * Get a user's bookings with travel dates in the future.
		 * This service can also be used to check the status of a booking.
		 * **Provide either:**
		 * - A `voucherKey`, **or...**
		 * - An email address (`email`) and a booking reference (`itineraryOrItemId`) ([Booking Reference](#section/Key-concepts/Booking-references))
		 * Get booking/mybookings
		 * @param {string} voucherKey **voucher key** for the booking
		 * @param {string} email **email address** of the booker for the booking
		 * @param {string} itineraryOrItemId The booking reference number of the item
		 * - **Note**: For more information, see [Booking references](#section/Key-concepts/Booking-references)
		 * @return {BasicErrorModel} Success
		 */
		BookingMybookings(voucherKey: string | null | undefined, email: string | null | undefined, itineraryOrItemId: string | null | undefined): Observable<BasicErrorModel> {
			return this.http.get<BasicErrorModel>(this.baseUri + 'booking/mybookings?voucherKey=' + (voucherKey == null ? '' : encodeURIComponent(voucherKey)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&itineraryOrItemId=' + (itineraryOrItemId == null ? '' : encodeURIComponent(itineraryOrItemId)), {});
		}

		/**
		 * /booking/pastbooking
		 * Get the details of a single specific past booking based on the `voucherKey` or `itemId` and email address sent in the request.
		 * **Note**: this service will only return past bookings that were made with the same API key that was used to make the booking
		 * **Sample query parameters**:
		 * - email=apitest@viator.com&amp;itemId=580669678
		 * **or**
		 * - voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678
		 * **email**
		 * - The email address passed must match the email address associated with the booking
		 * **Departure details**
		 * - Departure details such as the `departurePoint`, `departurePointAddress` and `departurePointDirections` is included in the response.
		 * - These fields may contain HTML escape characters such as &amp;amp; and special characters that are escaped by a backslash. Ensure that these fields are parsed after receiving the response as it will cause your JSON to be invalid.
		 * For more information, see: [Reviewing bookings](#section/Common-workflows-and-data-validation/Reviewing-bookings)
		 * Get booking/pastbooking
		 * @param {string} voucherKey **specifier** of past booking type (use *one* of: `itemId` (booking reference) *and* `'voucherKey'` *or* `'email'`)
		 * @param {string} email **email address** by which to search for past bookings
		 * @param {string} itemId Search for a booking with this **unique booking-reference number**. See [Booking references](#section/Key-concepts/Booking-references) for more information.
		 * @return {BasicErrorModel} Success
		 */
		BookingPastbooking(voucherKey: string | null | undefined, email: string | null | undefined, itemId: string | null | undefined): Observable<BasicErrorModel> {
			return this.http.get<BasicErrorModel>(this.baseUri + 'booking/pastbooking?voucherKey=' + (voucherKey == null ? '' : encodeURIComponent(voucherKey)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&itemId=' + (itemId == null ? '' : encodeURIComponent(itemId)), {});
		}

		/**
		 * /booking/pricingmatrix
		 * Get the pricing matrix for tour-grades, product age bands and pax mixes
		 * For more information, see: [Get the tour-grade pricing matrix](#section/Common-workflows-and-data-validation/Get-the-tour-grade-pricing-matrix)
		 * Post booking/pricingmatrix
		 * @return {BasicErrorModel} Success
		 */
		BookingPricingmatrix(requestBody: BookingPricingmatrixPostBody): Observable<BasicErrorModel> {
			return this.http.post<BasicErrorModel>(this.baseUri + 'booking/pricingmatrix', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * /booking/status
		 * Get the booking status for multiple items based on different criteria
		 * This service:
		 * - is ideally be used in software for bulk updates of pending bookings
		 * - returns a maximum of 1000 bookings (narrow your search if you expect a greater number of results)
		 * - will return &lt;u&gt;both&lt;/u&gt; live &lt;u&gt;and&lt;/u&gt; test bookings
		 * - rate limited to &lt;u&gt;one request every 30 minutes&lt;/u&gt;
		 * - For more information, see: [Get the bookiing status for multiple items](#section/Common-workflows-and-data-validation/Get-the-booking-status-for-multiple-items)
		 * **Exceeding the rate limit**
		 * - You will receive the following error message if you exceed the rate limit allowed for this service. Set `test` to `true` to bypass this limit:
		 * ```javascript
		 * {
		 * "data": null
		 * "vmid": 221002
		 * "errorMessage": ["Access allowed every 30 minutes"]
		 * "errorType": "EXCEPTION"
		 * "dateStamp": "2013-03-26T10:28:51+0000"
		 * "errorReference": 55315512721712161381352771
		 * "errorMessageText": ["Access allowed every 30 minutes"]
		 * "success": false
		 * "totalCount": 1
		 * "errorName": "PollingDeniedException"
		 * }
		 * ```
		 * Post booking/status
		 * @return {BasicErrorModel} Success
		 */
		BookingStatus(requestBody: BookingStatusPostBody): Observable<BasicErrorModel> {
			return this.http.post<BasicErrorModel>(this.baseUri + 'booking/status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * /booking/status/items
		 * Get brief booking statuses
		 * This service is similar to [/booking/status](#operation/bookingStatus) in that it:
		 * - retrieves the booking status for multiple items based on different criteria
		 * - has the same request parameters as [/booking/status](#operation/bookingStatus)
		 * However, it differs in that it returns a multi-item array of booking items with less detail than what would be received from [/booking/status](#operation/bookingStatus).
		 * Post booking/status/items
		 * @return {BasicErrorModel} Success
		 */
		BookingStatusItems(requestBody: BookingStatusItemsPostBody): Observable<BasicErrorModel> {
			return this.http.post<BasicErrorModel>(this.baseUri + 'booking/status/items', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * /booking/voucher
		 * Get voucher details
		 * - Use this service to retrieve the voucher details of a booked item.
		 * - The data returned is HTML-formatted and can be wrapped in a header and/or footer.
		 * **Sample query parameters**
		 * - leadLastName=Simpson test&amp;itemId=580669678
		 * **or**
		 * - voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678&amp;fullHTML=true&amp;mobileVoucher=true
		 * Get booking/voucher
		 * @param {string} leadLastName **surname** of *this* lead traveler
		 * @param {number} itemId Booking-reference number generated by Viator
		 *   - **Note**: For more information, see: [Booking references](#section/Key-concepts/Booking-references)
		 * @param {boolean} embeddedResources ignore (Viator only)
		 * @param {string} voucherKey **identifier** for the voucher
		 * - **note**: use &lt;u&gt;either&lt;/u&gt; `voucherKey` &lt;u&gt;or&lt;/u&gt; the three separate parameters
		 * - if `voucherKey` is provided as well as the other parameters, then `voucherKey` overrides the other paramaters
		 * - `voucherKey` is obtained from [/booking/mybookings](#operation/bookingMybookings) or in the response from [/booking/book](#operation/bookingBook) when you make a booking
		 * @param {boolean} fullHTML **specifier**:
		 * - set to `true` if you wish to retrieve the full HTML-formatted voucher
		 * - set to `false` if you want the div fragment (optional)
		 * @param {boolean} mobileVoucher **specifier**: 
		 * - if set to `true`, the service returns the mobile (cut down) HTML-formatted voucher
		 * - if `false` the full voucher HTML is returned (ignoring `fullHTML`)
		 * - default: `true` 
		 * - this field should only be enabled for products that have a `voucherOption` of `'VOUCHER_E'`
		 * - do not enable `mobileVouchers` for paper vouchers (`voucherOption` of `'VOUCHER_PAPER_ONLY'`) as no barcode is returned
		 * - the voucher information is available in the response from [/product](#operation/product), [/booking/book](#operation/bookingBook), [/booking/pastbooking](#operation/bookingPastbooking), [/booking/mybookings](#operation/bookingMybookings) (it is also displayed under the 'Redemption Info' heading in this service)
		 * @return {BasicErrorModel} Success
		 */
		BookingVoucher(leadLastName: string | null | undefined, itemId: number | null | undefined, embeddedResources: boolean | null | undefined, voucherKey: string | null | undefined, fullHTML: boolean | null | undefined, mobileVoucher: boolean | null | undefined): Observable<BasicErrorModel> {
			return this.http.get<BasicErrorModel>(this.baseUri + 'booking/voucher?leadLastName=' + (leadLastName == null ? '' : encodeURIComponent(leadLastName)) + '&itemId=' + itemId + '&embeddedResources=' + embeddedResources + '&voucherKey=' + (voucherKey == null ? '' : encodeURIComponent(voucherKey)) + '&fullHTML=' + fullHTML + '&mobileVoucher=' + mobileVoucher, {});
		}

		/**
		 * /bookings/cancel-reasons
		 * Retrieves a dictionary of unique identification codes (`cancellationReasonCode`) and their associated natural-language descriptions (`cancellationReasonText`).
		 * For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)
		 * **Note**:
		 * * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
		 * * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/cancel-reasons`
		 * Get bookings/cancel-reasons
		 * @return {Array<CancellationReasonsResponse>} Success
		 */
		CancellationReasons(): Observable<Array<CancellationReasonsResponse>> {
			return this.http.get<Array<CancellationReasonsResponse>>(this.baseUri + 'bookings/cancel-reasons', {});
		}

		/**
		 * /bookings/{booking-reference}/cancel
		 * Submits a cancellation request for the specified booking
		 * For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)
		 * **Note**:
		 * * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
		 * * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel`
		 * Post bookings/{booking_reference}/cancel
		 * @param {string} booking_reference The ID of the booking
		 * @return {CancelBookingResponse} Success
		 */
		CancelBooking(booking_reference: string, requestBody: CancellationRequest): Observable<CancelBookingResponse> {
			return this.http.post<CancelBookingResponse>(this.baseUri + 'bookings/{booking_reference}/cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * /bookings/{booking-reference}/cancel-quote
		 * Retrieves a quote for the cancellation of a booking
		 * For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)
		 * **Note**:
		 * * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
		 * * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel-quote`
		 * Get bookings/{booking_reference}/cancel-quote
		 * @param {string} booking_reference Unique numeric identifier of the booking for which to retrieve a cancellation quote
		 * @return {CancelBookingQuoteResponse} Success
		 */
		CancelBookingQuote(booking_reference: string): Observable<CancelBookingQuoteResponse> {
			return this.http.get<CancelBookingQuoteResponse>(this.baseUri + 'bookings/{booking_reference}/cancel-quote', {});
		}

		/**
		 * /health/check
		 * Health check
		 * Use this service to determine whether the Viator API is presently online and that your API key is valid. You should receive a response identical to the example shown. If you have not yet received an API key, please request one from your business development partner. If you have not yet signed up as a Viator merchant partner and would like to, please visit our [distribution partner website](https://www.viator.com/distribution-partners?mcid=58463#api-solutions)."
		 * Get health/check
		 * @return {HealthCheckReturn} Success
		 */
		HealthCheck(): Observable<HealthCheckReturn> {
			return this.http.get<HealthCheckReturn>(this.baseUri + 'health/check', {});
		}

		/**
		 * /merchant/cancellation
		 * Cancel a booking
		 * **Note**: This service has been replaced by the [cancellationReasons](#operation/cancellationReasons), [bookingQuote](#operation/bookingQuote) and [cancelBooking](#operation/cancelBooking) endpoints
		 * Post merchant/cancellation
		 * @return {BasicErrorModel} Success
		 */
		MerchantCancellation(requestBody: MerchantCancellationPostBody): Observable<BasicErrorModel> {
			return this.http.post<BasicErrorModel>(this.baseUri + 'merchant/cancellation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * /product
		 * Get product information
		 * This service provides all product details required for a product display page, as well as information required for price checks and booking, such as:
		 * - age bands
		 * - tour grades
		 * - language options
		 * - booking questions
		 * - hotel pickup flags
		 * **currencyCode (in query):**
		 * - use this parameter to specify the currency in which product pricing should be displayed
		 * - the default currency is the currency of your account; or, if you have multi-currency enabled, US dollars
		 * - "multi-currency" allows pricing and booking in various currencies - please speak to the business development team if you'd like this enabled
		 * - **Note**: you will be billed in the currency in which the booking was made
		 * **Product photos**
		 * &lt;mark&gt;**&lt;u&gt;Update 13 Feb 2020&lt;/u&gt;**: All supplier-provided photos for the selected product are now available in the `productPhotos` array in this endpoint's response. Previously, only two supplier-provided photos were available – one in the `productPhotos` array and one in `thumbnailHiResURL`. &lt;/mark&gt;
		 * **Videos**
		 * - Videos are no longer provided via this API
		 * Get product
		 * @param {string} currencyCode **currency code** for the currency in which pricing is displayed
		 * - default=`'USD'`
		 * @param {ProductSortOrder} sortOrder **specifier** of the order in which to return reviews
		 * Sort order options:
		 *   - `"REVIEW_RATING_A"`: Traveler Rating (low→high) Average
		 *   - `"REVIEW_RATING_D"`: Traveler Rating (high→low) Average
		 *   - `"REVIEW_RATING_SUBMISSION_DATE_D"`: Most recent review
		 * @param {ProductVoucherOption} voucherOption - `"VOUCHER_PAPER_ONLY"`: Paper Vouchers only accepted
		 * - `"VOUCHER_E"`: EVouchers + Paper Vouchers accepted
		 * @param {string} code **unique alphanumeric identifier** of the product
		 * @param {boolean} showUnavailable **specifier** as to whether or not to show 'unavailable' products:
		 *   - `true`: return *both* available and unavailable products
		 *   - `false`: return *only* available products (default)
		 * @param {boolean} excludeTourGradeAvailability **specifier:** 
		 * - `true`: return **all** tour grades, including those that are not available
		 * - `false`: only display tour grades that *are* available
		 * @return {BasicErrorModel} Success
		 */
		Product(currencyCode: string | null | undefined, sortOrder: ProductSortOrder | null | undefined, voucherOption: ProductVoucherOption | null | undefined, code: string | null | undefined, showUnavailable: boolean | null | undefined, excludeTourGradeAvailability: boolean | null | undefined): Observable<BasicErrorModel> {
			return this.http.get<BasicErrorModel>(this.baseUri + 'product?currencyCode=' + (currencyCode == null ? '' : encodeURIComponent(currencyCode)) + '&sortOrder=' + sortOrder + '&voucherOption=' + voucherOption + '&code=' + (code == null ? '' : encodeURIComponent(code)) + '&showUnavailable=' + showUnavailable + '&excludeTourGradeAvailability=' + excludeTourGradeAvailability, {});
		}

		/**
		 * /product/photos
		 * Get photos of a product submitted by users
		 * Get product/photos
		 * @param {string} topX **start and end rows** to return in the format {start}-{end}
		 * - e.g. `'1-10'`, `'11-20'`
		 * **Note**: 
		 * - the maximum number of rows per request is 100; therefore, `'100-400'` will return the same as `'100-200'`
		 * - if `topX` is not specified, the default is `'1-100'`
		 * @param {string} code **unique alphanumeric identifier** of the product
		 * @param {boolean} showUnavailable **specifier** as to whether or not to show 'unavailable' products:
		 *   - `true`: return *both* available and unavailable products
		 *   - `false`: return *only* available products (default)
		 * @return {BasicErrorModel} Success
		 */
		ProductPhotos(topX: string | null | undefined, code: string | null | undefined, showUnavailable: boolean | null | undefined): Observable<BasicErrorModel> {
			return this.http.get<BasicErrorModel>(this.baseUri + 'product/photos?topX=' + (topX == null ? '' : encodeURIComponent(topX)) + '&code=' + (code == null ? '' : encodeURIComponent(code)) + '&showUnavailable=' + showUnavailable, {});
		}

		/**
		 * /product/reviews
		 * Get user-submitted reviews of a product
		 * **Note**:
		 * - The number of reviews that you can obtain via this service will depend on whether your account is limited in terms of the number of reviews you are entitled to receive.
		 * - The number of reviews available through this service is given in the `reviewCount` element in the response from [/product](#operation/product)
		 * - Please speak to your account manager if you wish to receive more reviews. If your account is not limited, you will be able to receive all available reviews for this product.
		 * - Only reviews in the language specified in the Accept-Language request header will be returned
		 * **Example:** "Get the first three reviews for product `5010SYDNEY` sorted by rating in ascending order":
		 * ```javascript
		 * https://viatorapi.sandbox.viator.com/service/product/reviews?sortOrder=REVIEW_RATING_A&amp;topX=1-3&amp;code=5010SYDNEY&amp;showUnavailable=false
		 * ```
		 * Get product/reviews
		 * @param {ProductSortOrder} sortOrder **specifier** of the order in which to return reviews
		 * Sort order options:
		 *   - `"REVIEW_RATING_A"`: Traveler Rating (low→high) Average
		 *   - `"REVIEW_RATING_D"`: Traveler Rating (high→low) Average
		 *   - `"REVIEW_RATING_SUBMISSION_DATE_D"`: Most recent review
		 * @param {string} topX **start and end rows** to return in the format {start}-{end}
		 * - e.g. `'1-10'`, `'11-20'`
		 * **Note**: 
		 * - the maximum number of rows per request is 100; therefore, `'100-400'` will return the same as `'100-200'`
		 * - if `topX` is not specified, the default is `'1-100'`
		 * @param {string} code **unique alphanumeric identifier** of the product
		 * @param {boolean} showUnavailable **specifier** as to whether or not to show 'unavailable' products:
		 *   - `true`: return *both* available and unavailable products
		 *   - `false`: return *only* available products (default)
		 * @return {BasicErrorModel} Success
		 */
		ProductReviews(sortOrder: ProductSortOrder | null | undefined, topX: string | null | undefined, code: string | null | undefined, showUnavailable: boolean | null | undefined): Observable<BasicErrorModel> {
			return this.http.get<BasicErrorModel>(this.baseUri + 'product/reviews?sortOrder=' + sortOrder + '&topX=' + (topX == null ? '' : encodeURIComponent(topX)) + '&code=' + (code == null ? '' : encodeURIComponent(code)) + '&showUnavailable=' + showUnavailable, {});
		}

		/**
		 * /search/freetext
		 * Free text search
		 * - This service provides a **free text search across all products and destinations**
		 * - The `text` parameter is required
		 * - **Note:** results include a type indicator (`type`) that you can use to display each result appropriately based on its content
		 * Post search/freetext
		 * @return {BasicErrorModel} Success
		 */
		SearchFreetext(requestBody: SearchFreetextPostBody): Observable<BasicErrorModel> {
			return this.http.post<BasicErrorModel>(this.baseUri + 'search/freetext', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * /search/products
		 * Search for products
		 * This service is used to search for products based on various criteria; such as:
		 * * the destination (locale) in which it operates
		 * * its association with a tourist attraction
		 * * its category and/or subcategory
		 * * the time period during which it operates
		 * The fields you include in the request body for this service determine the kind of search that will be performed.
		 * **&lt;u&gt;Note&lt;/u&gt;**:
		 * * You can search **EITHER** by destination (`destId`) **OR** by attraction-link (`seoId`), but not both.
		 * * The destination identifier (`destId`) can be retrieved from the [/taxonomy/destinations](#operation/taxonomyDestinations) service.
		 * * The category (`catId`) and subcategory (`subCatId`) identifiers can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service.
		 * * The attraction identifier (`seoId`) can be retrieved from the [/taxonomy/attractions](#operation/taxonomyAttractions) service.
		 * **&lt;u&gt;Examples&lt;/u&gt;**:
		 * **Search by destination**:
		 * * E.g., "Top ten highest-rated yoga classes operating in Las Vegas:
		 * ```javascript
		 * {
		 * "destId": 684,
		 * "subCatId": 26052,
		 * "sortOrder": "REVIEW_AVG_RATING_D",
		 * "topX": "1-3"
		 * }
		 * ```
		 * **Search by attraction-link**:
		 * * E.g., "Products related to Everglades National Park operating 21-26 May 2019 in order of descending price":
		 * ```javascript
		 * {
		 * "seoId": 1115,
		 * "sortOrder": "PRICE_FROM_D",
		 * "topX": "1-3"
		 * }
		 * ```
		 * **&lt;u&gt;'Freesale-only' merchants&lt;/u&gt;**:
		 * - Merchants with a "freesale only" key *must* pass `startDate` and `endDate` to this service to retrieve a list of all available 'freesale' products (and 'freesale/on-request' products that are currently 'freesale') in the destination.
		 * - E.g., the following request body will result in 'freesale/on-request' products within their on-request period not appearing in the results from this service.
		 * ```javascript
		 * {
		 * "destId": 684,
		 * "startDate": "2020-02-21",
		 * "endDate": "2020-03-21",
		 * "sortOrder": "PRICE_FROM_D",
		 * "topX": "1-3"
		 * }
		 * ```
		 * - If `startDate` and `endDate` are omitted, 'freesale/on-request' products that are presently within their on-request period may appear to be available to customers, but won't be available at the time of booking.
		 * Post search/products
		 * @return {BasicErrorModel} Success
		 */
		SearchProducts(requestBody: SearchProductsPostBody): Observable<BasicErrorModel> {
			return this.http.post<BasicErrorModel>(this.baseUri + 'search/products', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * /search/products/codes
		 * Search by product code
		 * - This service returns an array of products given an array of product identifiers that is useful for wishlist / shopping cart / user account display
		 * - **Note**: requesting an inactive or non-existent product code will return `0`, `null` and blank values (as per the 'invalid_product' example).
		 * Post search/products/codes
		 * @return {BasicErrorModel} Success
		 */
		SearchProductsCodes(requestBody: SearchProductsCodesPostBody): Observable<BasicErrorModel> {
			return this.http.post<BasicErrorModel>(this.baseUri + 'search/products/codes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * /taxonomy/attractions
		 * Get attractions
		 * - Retrieves a list of attractions (things like the Eiffel Tower or Empire State Building) and their associated unique numeric identifiers
		 * - The attraction's identifier (`seoId`) can be used as a means of searching for available products; for example, in the [/search/products](#operation/searchProducts) service.
		 * Post taxonomy/attractions
		 * @return {BasicErrorModel} Success
		 */
		TaxonomyAttractions(requestBody: TaxonomyAttractionsPostBody): Observable<BasicErrorModel> {
			return this.http.post<BasicErrorModel>(this.baseUri + 'taxonomy/attractions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * /taxonomy/categories
		 * Get all product categories
		 * - Retrieves a list of product categories for a destination that can be used as a means of filtering when searching for products using the [/search/products](/#operation/searchProducts) service
		 * - This service can be used to get a list of all categories and subcategories for a destination by including its `destId`, or you can omit the `destId` to get a list of all categories and subcategories
		 * - **Note:** If no `destId` is passed, `productCount` and `thumbnailURL` will be `null` as they are destination-specific fields
		 * Get taxonomy/categories
		 * @param {number} destId **unique numeric identifier** of the destination to enquire about (optional)
		 * - `destinationId` is returned by [/taxonomy/destinations](#operation/taxonomyDestinations)
		 * @return {BasicErrorModel} Success
		 */
		TaxonomyCategories(destId: number | null | undefined): Observable<BasicErrorModel> {
			return this.http.get<BasicErrorModel>(this.baseUri + 'taxonomy/categories?destId=' + destId, {});
		}

		/**
		 * /taxonomy/destinations
		 * Get details of all destinations supported by this API
		 * - Retrieves all the country taxonomy/city nodes as a flat list
		 * - Returns a complete list of Viator destinations, including destination names and parent identifiers
		 * - Used to provide navigation through drill down lists or combo boxes
		 * Get taxonomy/destinations
		 * @return {BasicErrorModel} Success
		 */
		TaxonomyDestinations(): Observable<BasicErrorModel> {
			return this.http.get<BasicErrorModel>(this.baseUri + 'taxonomy/destinations', {});
		}
	}

	export interface AvailableProductsPostBody {

		/**
		 * **currency** in which to display product pricing
		 * - default: `'USD'`
		 */
		currencyCode?: string | null;

		/** **end date** of the date range to search within (must be in the future) */
		endDate?: string | null;

		/**
		 * **number of adult travelers** who wish to participate
		 * - default: `1`
		 */
		numAdults?: number | null;

		/**
		 * **array of unique alphanumeric product identifiers** specifying which products to find the availability of
		 * - maximum: `50`
		 */
		productCodes?: Array<string>;

		/** **start date** of the date range to search within (must be in the future) */
		startDate?: string | null;
	}
	export interface AvailableProductsPostBodyFormProperties {

		/**
		 * **currency** in which to display product pricing
		 * - default: `'USD'`
		 */
		currencyCode: FormControl<string | null | undefined>,

		/** **end date** of the date range to search within (must be in the future) */
		endDate: FormControl<string | null | undefined>,

		/**
		 * **number of adult travelers** who wish to participate
		 * - default: `1`
		 */
		numAdults: FormControl<number | null | undefined>,

		/** **start date** of the date range to search within (must be in the future) */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateAvailableProductsPostBodyFormGroup() {
		return new FormGroup<AvailableProductsPostBodyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			numAdults: new FormControl<number | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BookingAvailabilityPostBody {

		/** **array of objects** specifying the age bands by which to to filter search results */
		BookingAvailabilityPostBodyAgeBands?: Array<BookingAvailabilityPostBodyAgeBands>;

		/** **currency code** for the currency in which to display tour grade pricing information */
		currencyCode?: string | null;

		/** **month component** (text format) of the start of the date range for which to retrieve tour grade availability information (must be in the future) */
		month?: string | null;

		/** **unique alphanumeric identifier** of the product for which you wish to retrieve tour grade availability information */
		productCode?: string | null;

		/** **year component** (text format) of the start of the date range for which to retrieve tour grade availability information (must be in the future) */
		year?: string | null;
	}
	export interface BookingAvailabilityPostBodyFormProperties {

		/** **currency code** for the currency in which to display tour grade pricing information */
		currencyCode: FormControl<string | null | undefined>,

		/** **month component** (text format) of the start of the date range for which to retrieve tour grade availability information (must be in the future) */
		month: FormControl<string | null | undefined>,

		/** **unique alphanumeric identifier** of the product for which you wish to retrieve tour grade availability information */
		productCode: FormControl<string | null | undefined>,

		/** **year component** (text format) of the start of the date range for which to retrieve tour grade availability information (must be in the future) */
		year: FormControl<string | null | undefined>,
	}
	export function CreateBookingAvailabilityPostBodyFormGroup() {
		return new FormGroup<BookingAvailabilityPostBodyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			month: new FormControl<string | null | undefined>(undefined),
			productCode: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BookingAvailabilityPostBodyAgeBands {

		/**
		 * **unique numeric identifier** for the age band
		 * - See: [Working with age bands](#section/Appendices/Working-with-age-bands)
		 */
		bandId?: number | null;

		/** **number of people** in *this* age band */
		count?: number | null;
	}
	export interface BookingAvailabilityPostBodyAgeBandsFormProperties {

		/**
		 * **unique numeric identifier** for the age band
		 * - See: [Working with age bands](#section/Appendices/Working-with-age-bands)
		 */
		bandId: FormControl<number | null | undefined>,

		/** **number of people** in *this* age band */
		count: FormControl<number | null | undefined>,
	}
	export function CreateBookingAvailabilityPostBodyAgeBandsFormGroup() {
		return new FormGroup<BookingAvailabilityPostBodyAgeBandsFormProperties>({
			bandId: new FormControl<number | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BookingAvailabilityTourgradesPostBody {

		/** **array** of ageBand objects */
		BookingAvailabilityTourgradesPostBodyAgeBands?: Array<BookingAvailabilityTourgradesPostBodyAgeBands>;

		/** **date** to enquire about available tour grades for *this* product (must be in the future) */
		bookingDate?: string | null;

		/** **currency code** for the currency in which to display pricing information */
		currencyCode?: string | null;
		productCode?: string | null;
	}
	export interface BookingAvailabilityTourgradesPostBodyFormProperties {

		/** **date** to enquire about available tour grades for *this* product (must be in the future) */
		bookingDate: FormControl<string | null | undefined>,

		/** **currency code** for the currency in which to display pricing information */
		currencyCode: FormControl<string | null | undefined>,
		productCode: FormControl<string | null | undefined>,
	}
	export function CreateBookingAvailabilityTourgradesPostBodyFormGroup() {
		return new FormGroup<BookingAvailabilityTourgradesPostBodyFormProperties>({
			bookingDate: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			productCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BookingAvailabilityTourgradesPostBodyAgeBands {

		/**
		 * **unique numeric identifier** for the age band
		 * - See: [Working with age bands](#section/Appendices/Working-with-age-bands)
		 */
		bandId?: number | null;

		/** **numeric count** of number of travelers in *this* age band */
		count?: number | null;
	}
	export interface BookingAvailabilityTourgradesPostBodyAgeBandsFormProperties {

		/**
		 * **unique numeric identifier** for the age band
		 * - See: [Working with age bands](#section/Appendices/Working-with-age-bands)
		 */
		bandId: FormControl<number | null | undefined>,

		/** **numeric count** of number of travelers in *this* age band */
		count: FormControl<number | null | undefined>,
	}
	export function CreateBookingAvailabilityTourgradesPostBodyAgeBandsFormGroup() {
		return new FormGroup<BookingAvailabilityTourgradesPostBodyAgeBandsFormProperties>({
			bandId: new FormControl<number | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BookingAvailabilityTourgradesPricingmatrixPostBody {

		/** **currency code** for the currency in which to display pricing details */
		currencyCode?: string | null;

		/** **month of year** (as text) by which to filter results (must be in the future) */
		month?: string | null;

		/** **alphanumeric identifier** of product about which to retrieve tour grade and pricing information */
		productCode?: string | null;

		/** **year** (as text) by which to filter results (must be in the future) */
		year?: string | null;
	}
	export interface BookingAvailabilityTourgradesPricingmatrixPostBodyFormProperties {

		/** **currency code** for the currency in which to display pricing details */
		currencyCode: FormControl<string | null | undefined>,

		/** **month of year** (as text) by which to filter results (must be in the future) */
		month: FormControl<string | null | undefined>,

		/** **alphanumeric identifier** of product about which to retrieve tour grade and pricing information */
		productCode: FormControl<string | null | undefined>,

		/** **year** (as text) by which to filter results (must be in the future) */
		year: FormControl<string | null | undefined>,
	}
	export function CreateBookingAvailabilityTourgradesPricingmatrixPostBodyFormGroup() {
		return new FormGroup<BookingAvailabilityTourgradesPricingmatrixPostBodyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			month: new FormControl<string | null | undefined>(undefined),
			productCode: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BookingBookPostBody {

		/** **object** containing details about the primary contact (**note**: this contact needn't be a traveller) */
		booker?: BookingBookPostBodyBooker;

		/** **currency code** for the currency the booking will be submitted in (you will be billed in this currency) */
		currencyCode?: string | null;

		/** **specifier**: `true` if this is a *demo* booking only (demos do not send any notifications, are automatically confirmed and OnRequest products become freesale products. Default value is true. Production must have `demo` set to `false`. */
		demo?: boolean | null;

		/** **array** of items to be booked */
		BookingBookPostBodyItems?: Array<BookingBookPostBodyItems>;

		/**
		 * Applicable only for extra partner detail for either partner or merchant partner for sending partner specific information
		 */
		partnerDetail?: BookingBookPostBodyPartnerDetail;
	}
	export interface BookingBookPostBodyFormProperties {

		/** **currency code** for the currency the booking will be submitted in (you will be billed in this currency) */
		currencyCode: FormControl<string | null | undefined>,

		/** **specifier**: `true` if this is a *demo* booking only (demos do not send any notifications, are automatically confirmed and OnRequest products become freesale products. Default value is true. Production must have `demo` set to `false`. */
		demo: FormControl<boolean | null | undefined>,
	}
	export function CreateBookingBookPostBodyFormGroup() {
		return new FormGroup<BookingBookPostBodyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			demo: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BookingBookPostBodyBooker {

		/**
		 * **telephone number** of the lead traveler
		 * **Note**:
		 * * Must be included to enable CLC communications
		 * * See [Supplier communications](#section/Merchant-APIs/Supplier-communications) for more information
		 */
		cellPhone?: string | null;

		/**
		 * **country code** for the telephone number of the lead traveler
		 * **Note**:
		 * * Must be included to enable CLC communications.
		 * * See [Supplier communications](#section/Merchant-APIs/Supplier-communications) for more information
		 */
		cellPhoneCountryCode?: string | null;

		/** **email address** of the primary contact */
		email?: string | null;

		/**
		 * **first name** of the primary contact
		 * Required
		 */
		firstname: string;

		/** **phone number** (home) of the primary contact */
		homePhone?: string | null;

		/**
		 * **surname** of the primary contact
		 * Required
		 */
		surname: string;

		/** **title** of the primary contact */
		title?: string | null;
	}
	export interface BookingBookPostBodyBookerFormProperties {

		/**
		 * **telephone number** of the lead traveler
		 * **Note**:
		 * * Must be included to enable CLC communications
		 * * See [Supplier communications](#section/Merchant-APIs/Supplier-communications) for more information
		 */
		cellPhone: FormControl<string | null | undefined>,

		/**
		 * **country code** for the telephone number of the lead traveler
		 * **Note**:
		 * * Must be included to enable CLC communications.
		 * * See [Supplier communications](#section/Merchant-APIs/Supplier-communications) for more information
		 */
		cellPhoneCountryCode: FormControl<string | null | undefined>,

		/** **email address** of the primary contact */
		email: FormControl<string | null | undefined>,

		/**
		 * **first name** of the primary contact
		 * Required
		 */
		firstname: FormControl<string | null | undefined>,

		/** **phone number** (home) of the primary contact */
		homePhone: FormControl<string | null | undefined>,

		/**
		 * **surname** of the primary contact
		 * Required
		 */
		surname: FormControl<string | null | undefined>,

		/** **title** of the primary contact */
		title: FormControl<string | null | undefined>,
	}
	export function CreateBookingBookPostBodyBookerFormGroup() {
		return new FormGroup<BookingBookPostBodyBookerFormProperties>({
			cellPhone: new FormControl<string | null | undefined>(undefined),
			cellPhoneCountryCode: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			homePhone: new FormControl<string | null | undefined>(undefined),
			surname: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BookingBookPostBodyItems {

		/**
		 * **array** of objects containing booking questions and the answers provided for them for *this* product
		 * - If a booking question is available in the `bookingQuestions` array in the response from [/product](#operation/product) for *this* product, the matching `bookingQuestionAnswers` must be passed to *this* service.
		 * - If a product does not have any booking questions, you can omit the `bookingQuestionAnswers` array in your request.
		 * - Any invalid or unrequired booking-question answers that are passed to *this* service will be ignored (and, no exceptions will be raised)
		 * - You will need to include this array if [/product](#operation/product) returns any questions in the `bookingQuestions` array.
		 */
		BookingBookPostBodyItemsBookingQuestionAnswers?: Array<BookingBookPostBodyItemsBookingQuestionAnswers>;

		/**
		 * **specifer** of the hotel
		 * If [/product](#operation/product) returns `hotelPickup`: `true` and a list of hotels is available for *this* product in [/booking/hotels](#operation/bookingHotels), a `hotelId` must be captured (as per the hotel service id field); or, use an alternative `hotelId`, such as:
		 * - `"notBooked"`: the customer has not yet booked their hotel
		 * - `"notListed"`: the customer's hotel is not listed
		 * If the customer chooses one of these options, the product supplier may need to correspond with the user to find out their pick-up location. The best way to do this is by enabling [Closed-Loop-Communication (CLC)](#section/Merchant-APIs/Supplier-communications).
		 */
		hotelId?: string | null;

		/** **specifier** of language service provided for this product that has been chosen for this booking (usually in the format langcode/Service eg en/SERVICE_GUIDE. If the product details service [/product](#operation/product) for the product returns a langService, this must be provided.) */
		languageOptionCode?: string | null;

		/** **object** containing partner details at a per-item level */
		partnerItemDetail?: BookingBookPostBodyItemsPartnerItemDetail;

		/** **details** about the hotel pick-up point (must be provided if the `hotelId` selected by the user is `'notListed'` or if no hotels are returned for *this* product in [/booking/hotels](#operation/bookingHotels) where `hotelPickup` is `true`. */
		pickupPoint?: string | null;

		/** **unique alphanumeric identifier** of the product to be booked */
		productCode?: string | null;

		/** **text field** to capture any additional requirements for the booking, such as dietary requirements or if a wheelchair is required */
		specialRequirements?: string | null;

		/** **specifier** of the tour grade to be booked (if tour grades are supplied in [/product](#operation/product), you must allow the customer to select a tour grade code. If no tour grades are available for *this* product, set this to `'DEFAULT'`.) */
		tourGradeCode?: string | null;

		/** **date** of travel for the item in format yyyy-mm-dd */
		travelDate?: string | null;

		/** **array** of traveler names, details and whether they are the lead traveller */
		BookingBookPostBodyItemsTravellers?: Array<BookingBookPostBodyItemsTravellers>;
	}
	export interface BookingBookPostBodyItemsFormProperties {

		/**
		 * **specifer** of the hotel
		 * If [/product](#operation/product) returns `hotelPickup`: `true` and a list of hotels is available for *this* product in [/booking/hotels](#operation/bookingHotels), a `hotelId` must be captured (as per the hotel service id field); or, use an alternative `hotelId`, such as:
		 * - `"notBooked"`: the customer has not yet booked their hotel
		 * - `"notListed"`: the customer's hotel is not listed
		 * If the customer chooses one of these options, the product supplier may need to correspond with the user to find out their pick-up location. The best way to do this is by enabling [Closed-Loop-Communication (CLC)](#section/Merchant-APIs/Supplier-communications).
		 */
		hotelId: FormControl<string | null | undefined>,

		/** **specifier** of language service provided for this product that has been chosen for this booking (usually in the format langcode/Service eg en/SERVICE_GUIDE. If the product details service [/product](#operation/product) for the product returns a langService, this must be provided.) */
		languageOptionCode: FormControl<string | null | undefined>,

		/** **details** about the hotel pick-up point (must be provided if the `hotelId` selected by the user is `'notListed'` or if no hotels are returned for *this* product in [/booking/hotels](#operation/bookingHotels) where `hotelPickup` is `true`. */
		pickupPoint: FormControl<string | null | undefined>,

		/** **unique alphanumeric identifier** of the product to be booked */
		productCode: FormControl<string | null | undefined>,

		/** **text field** to capture any additional requirements for the booking, such as dietary requirements or if a wheelchair is required */
		specialRequirements: FormControl<string | null | undefined>,

		/** **specifier** of the tour grade to be booked (if tour grades are supplied in [/product](#operation/product), you must allow the customer to select a tour grade code. If no tour grades are available for *this* product, set this to `'DEFAULT'`.) */
		tourGradeCode: FormControl<string | null | undefined>,

		/** **date** of travel for the item in format yyyy-mm-dd */
		travelDate: FormControl<string | null | undefined>,
	}
	export function CreateBookingBookPostBodyItemsFormGroup() {
		return new FormGroup<BookingBookPostBodyItemsFormProperties>({
			hotelId: new FormControl<string | null | undefined>(undefined),
			languageOptionCode: new FormControl<string | null | undefined>(undefined),
			pickupPoint: new FormControl<string | null | undefined>(undefined),
			productCode: new FormControl<string | null | undefined>(undefined),
			specialRequirements: new FormControl<string | null | undefined>(undefined),
			tourGradeCode: new FormControl<string | null | undefined>(undefined),
			travelDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BookingBookPostBodyItemsBookingQuestionAnswers {

		/**
		 * **answer** to the question for the `questionId` listed (recommended length for the answer is 500 characters)
		 * **Note**: To specify answers for each traveler, separate the values with a comma as in the per_person_booking_questions request example
		 */
		answer?: string | null;

		/** **numeric identifier** for the question (**note**: `questionId` can be retrieved from the [/product](#operation/product) service) */
		questionId?: number | null;
	}
	export interface BookingBookPostBodyItemsBookingQuestionAnswersFormProperties {

		/**
		 * **answer** to the question for the `questionId` listed (recommended length for the answer is 500 characters)
		 * **Note**: To specify answers for each traveler, separate the values with a comma as in the per_person_booking_questions request example
		 */
		answer: FormControl<string | null | undefined>,

		/** **numeric identifier** for the question (**note**: `questionId` can be retrieved from the [/product](#operation/product) service) */
		questionId: FormControl<number | null | undefined>,
	}
	export function CreateBookingBookPostBodyItemsBookingQuestionAnswersFormGroup() {
		return new FormGroup<BookingBookPostBodyItemsBookingQuestionAnswersFormProperties>({
			answer: new FormControl<string | null | undefined>(undefined),
			questionId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BookingBookPostBodyItemsPartnerItemDetail {

		/**
		 * **unique alphanumeric code** for the order ('itinerary') (merchant API partners must pass a `distributorItemRef` into the `partnerItemDetails` object for each item in *this* object
		 * - this code can be any alphanumeric string and is defined by the distributor
		 */
		distributorItemRef?: string | null;
	}
	export interface BookingBookPostBodyItemsPartnerItemDetailFormProperties {

		/**
		 * **unique alphanumeric code** for the order ('itinerary') (merchant API partners must pass a `distributorItemRef` into the `partnerItemDetails` object for each item in *this* object
		 * - this code can be any alphanumeric string and is defined by the distributor
		 */
		distributorItemRef: FormControl<string | null | undefined>,
	}
	export function CreateBookingBookPostBodyItemsPartnerItemDetailFormGroup() {
		return new FormGroup<BookingBookPostBodyItemsPartnerItemDetailFormProperties>({
			distributorItemRef: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BookingBookPostBodyItemsTravellers {

		/**
		 * **unique numeric identifier** for the age band
		 * - See: [Working with age bands](#section/Appendices/Working-with-age-bands)
		 */
		bandId?: number | null;

		/** **first name** of *this* traveller */
		firstname?: string | null;

		/** **indicator**: `true` if this traveler is the lead traveler */
		leadTraveller?: boolean | null;

		/** **surname** of *this* traveler */
		surname?: string | null;

		/** **title** of the traveler (e.g `'Mr'`, `'Mrs'`, `'Ms'`, `'Miss'`, `'Mstr'`, `'Dr'`) */
		title?: string | null;
	}
	export interface BookingBookPostBodyItemsTravellersFormProperties {

		/**
		 * **unique numeric identifier** for the age band
		 * - See: [Working with age bands](#section/Appendices/Working-with-age-bands)
		 */
		bandId: FormControl<number | null | undefined>,

		/** **first name** of *this* traveller */
		firstname: FormControl<string | null | undefined>,

		/** **indicator**: `true` if this traveler is the lead traveler */
		leadTraveller: FormControl<boolean | null | undefined>,

		/** **surname** of *this* traveler */
		surname: FormControl<string | null | undefined>,

		/** **title** of the traveler (e.g `'Mr'`, `'Mrs'`, `'Ms'`, `'Miss'`, `'Mstr'`, `'Dr'`) */
		title: FormControl<string | null | undefined>,
	}
	export function CreateBookingBookPostBodyItemsTravellersFormGroup() {
		return new FormGroup<BookingBookPostBodyItemsTravellersFormProperties>({
			bandId: new FormControl<number | null | undefined>(undefined),
			firstname: new FormControl<string | null | undefined>(undefined),
			leadTraveller: new FormControl<boolean | null | undefined>(undefined),
			surname: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BookingBookPostBodyPartnerDetail {

		/**
		 * **unique alphanumeric reference code** for the distributor
		 * - Merchant API partners must pass a `distributorRef` at the order (A.K.A. 'itinerary') level in the `partnerDetail` object. The `distributorRef` passed must be alphanumeric and unique to bookings made by the merchant.
		 * - Passing an existing `distributorRef`: If an existing `distributorRef` is passed, the booking with the matching `distributorRef` will be returned in the response and a new booking will not be made. The fields in the response are identical to the response for a new booking.
		 */
		distributorRef?: string | null;
	}
	export interface BookingBookPostBodyPartnerDetailFormProperties {

		/**
		 * **unique alphanumeric reference code** for the distributor
		 * - Merchant API partners must pass a `distributorRef` at the order (A.K.A. 'itinerary') level in the `partnerDetail` object. The `distributorRef` passed must be alphanumeric and unique to bookings made by the merchant.
		 * - Passing an existing `distributorRef`: If an existing `distributorRef` is passed, the booking with the matching `distributorRef` will be returned in the response and a new booking will not be made. The fields in the response are identical to the response for a new booking.
		 */
		distributorRef: FormControl<string | null | undefined>,
	}
	export function CreateBookingBookPostBodyPartnerDetailFormGroup() {
		return new FormGroup<BookingBookPostBodyPartnerDetailFormProperties>({
			distributorRef: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BookingCalculatepricePostBody {

		/** **currency code** for the currency in which to display pricing details */
		currencyCode?: string | null;

		/** **array** of travel detail objects */
		BookingCalculatepricePostBodyItems?: Array<BookingCalculatepricePostBodyItems>;
	}
	export interface BookingCalculatepricePostBodyFormProperties {

		/** **currency code** for the currency in which to display pricing details */
		currencyCode: FormControl<string | null | undefined>,
	}
	export function CreateBookingCalculatepricePostBodyFormGroup() {
		return new FormGroup<BookingCalculatepricePostBodyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BookingCalculatepricePostBodyItems {

		/** **unique alphanumeric identifier** of the product the total price for which you which to calculate */
		productCode?: string | null;

		/** **alphanumeric identifier** for the tour grade for which to calculate the total price */
		tourGradeCode?: string | null;

		/** **date** for which to calculate the total price (must be in the future) */
		travelDate?: string | null;

		/** **array of objects** detailing the age bands for which to calculate the total price */
		BookingCalculatepricePostBodyItemsTravellers?: Array<BookingCalculatepricePostBodyItemsTravellers>;
	}
	export interface BookingCalculatepricePostBodyItemsFormProperties {

		/** **unique alphanumeric identifier** of the product the total price for which you which to calculate */
		productCode: FormControl<string | null | undefined>,

		/** **alphanumeric identifier** for the tour grade for which to calculate the total price */
		tourGradeCode: FormControl<string | null | undefined>,

		/** **date** for which to calculate the total price (must be in the future) */
		travelDate: FormControl<string | null | undefined>,
	}
	export function CreateBookingCalculatepricePostBodyItemsFormGroup() {
		return new FormGroup<BookingCalculatepricePostBodyItemsFormProperties>({
			productCode: new FormControl<string | null | undefined>(undefined),
			tourGradeCode: new FormControl<string | null | undefined>(undefined),
			travelDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BookingCalculatepricePostBodyItemsTravellers {

		/**
		 * **unique numeric identifier** for the age band
		 * - See: [Working with age bands](#section/Appendices/Working-with-age-bands)
		 */
		bandId?: number | null;
	}
	export interface BookingCalculatepricePostBodyItemsTravellersFormProperties {

		/**
		 * **unique numeric identifier** for the age band
		 * - See: [Working with age bands](#section/Appendices/Working-with-age-bands)
		 */
		bandId: FormControl<number | null | undefined>,
	}
	export function CreateBookingCalculatepricePostBodyItemsTravellersFormGroup() {
		return new FormGroup<BookingCalculatepricePostBodyItemsTravellersFormProperties>({
			bandId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BookingPricingmatrixPostBody {

		/** **date** for which to retrieve pricing data  (must be in the future) (**note**: this is an optional parameter for normal products; if the date is *not* provided then the nearest available date is determined) */
		bookingDate?: string | null;

		/** **currency code** of the currency in which to display pricing information */
		currencyCode?: string | null;

		/** **unique alphanumeric identifier** of the product for which to retrieve the pricing matrix */
		productCode?: string | null;

		/** **alphanumeric identifier** of the product tour grade for which to retrieve the pricing matrix */
		tourGradeCode?: string | null;
	}
	export interface BookingPricingmatrixPostBodyFormProperties {

		/** **date** for which to retrieve pricing data  (must be in the future) (**note**: this is an optional parameter for normal products; if the date is *not* provided then the nearest available date is determined) */
		bookingDate: FormControl<string | null | undefined>,

		/** **currency code** of the currency in which to display pricing information */
		currencyCode: FormControl<string | null | undefined>,

		/** **unique alphanumeric identifier** of the product for which to retrieve the pricing matrix */
		productCode: FormControl<string | null | undefined>,

		/** **alphanumeric identifier** of the product tour grade for which to retrieve the pricing matrix */
		tourGradeCode: FormControl<string | null | undefined>,
	}
	export function CreateBookingPricingmatrixPostBodyFormGroup() {
		return new FormGroup<BookingPricingmatrixPostBodyFormProperties>({
			bookingDate: new FormControl<string | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			productCode: new FormControl<string | null | undefined>(undefined),
			tourGradeCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BookingStatusPostBody {

		/** **earliest date** for *this* booking (must be in the future) */
		bookingDateFrom?: string | null;

		/** **latest date** for *this* booking (must be in the future) */
		bookingDateTo?: string | null;

		/** **array** of partner-defined distributor item reference identifiers e.g. `['refItem1','refItem2','refItem3']` */
		distributorItemRefs?: Array<string>;

		/** **array** of partner-defined distributor reference identifiers */
		distributorRefs?: Array<string>;

		/** **array** of item identifiers to check */
		itemIds?: Array<number>;

		/** **first name** of the lead traveler */
		leadFirstName?: string | null;

		/** **surname** of the lead traveler */
		leadSurname?: string | null;

		/**
		 * **specifier**:
		 * - `true`: bypass the poll limit in the prelive environment only (recommended for testing)
		 * - `false`: (default)
		 */
		test?: boolean | null;
	}
	export interface BookingStatusPostBodyFormProperties {

		/** **earliest date** for *this* booking (must be in the future) */
		bookingDateFrom: FormControl<string | null | undefined>,

		/** **latest date** for *this* booking (must be in the future) */
		bookingDateTo: FormControl<string | null | undefined>,

		/** **first name** of the lead traveler */
		leadFirstName: FormControl<string | null | undefined>,

		/** **surname** of the lead traveler */
		leadSurname: FormControl<string | null | undefined>,

		/**
		 * **specifier**:
		 * - `true`: bypass the poll limit in the prelive environment only (recommended for testing)
		 * - `false`: (default)
		 */
		test: FormControl<boolean | null | undefined>,
	}
	export function CreateBookingStatusPostBodyFormGroup() {
		return new FormGroup<BookingStatusPostBodyFormProperties>({
			bookingDateFrom: new FormControl<string | null | undefined>(undefined),
			bookingDateTo: new FormControl<string | null | undefined>(undefined),
			leadFirstName: new FormControl<string | null | undefined>(undefined),
			leadSurname: new FormControl<string | null | undefined>(undefined),
			test: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BookingStatusItemsPostBody {

		/** **earliest date** for when the booking(s) in question were made (must be in the future) */
		bookingDateFrom?: string | null;

		/** **latest date** for when the booking(s) in question were made (must be in the future) */
		bookingDateTo?: string | null;

		/** **array** of partner-defined distributor item reference identifiers e.g. `['refItem1','refItem2','refItem3']` */
		distributorItemRefs?: Array<string>;

		/** **array** of partner-defined distributor reference identifiers */
		distributorRefs?: Array<string>;

		/**
		 * **array** of booking-reference numbers to check
		 * `itemId` (booking-reference provided by Viator). For more information, see [Booking references](#section/Key-concepts/Booking-references)
		 */
		itemIds?: Array<number>;

		/** **first name** of the lead traveler */
		leadFirstName?: string | null;

		/** **surname** of the lead traveler */
		leadSurname?: string | null;

		/**
		 * **specifier**:
		 * - `true`: bypass the poll limit in the prelive environment only
		 * - `false`: (default) make a *real* booking, not a test
		 */
		test?: boolean | null;
	}
	export interface BookingStatusItemsPostBodyFormProperties {

		/** **earliest date** for when the booking(s) in question were made (must be in the future) */
		bookingDateFrom: FormControl<string | null | undefined>,

		/** **latest date** for when the booking(s) in question were made (must be in the future) */
		bookingDateTo: FormControl<string | null | undefined>,

		/** **first name** of the lead traveler */
		leadFirstName: FormControl<string | null | undefined>,

		/** **surname** of the lead traveler */
		leadSurname: FormControl<string | null | undefined>,

		/**
		 * **specifier**:
		 * - `true`: bypass the poll limit in the prelive environment only
		 * - `false`: (default) make a *real* booking, not a test
		 */
		test: FormControl<boolean | null | undefined>,
	}
	export function CreateBookingStatusItemsPostBodyFormGroup() {
		return new FormGroup<BookingStatusItemsPostBodyFormProperties>({
			bookingDateFrom: new FormControl<string | null | undefined>(undefined),
			bookingDateTo: new FormControl<string | null | undefined>(undefined),
			leadFirstName: new FormControl<string | null | undefined>(undefined),
			leadSurname: new FormControl<string | null | undefined>(undefined),
			test: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface HealthCheckReturn {

		/** **indicator**: `true` signifies health */
		allGood?: boolean | null;

		/** **indicator**: `true` signifies health */
		capiOk?: boolean | null;

		/** **indicator**: `true` signifies health */
		dbOk?: boolean | null;

		/** **indicator**: `true` signifies health */
		memcachedOk?: boolean | null;

		/** **natural-language description** of any issues regarding the health of the API */
		message?: string | null;
	}
	export interface HealthCheckReturnFormProperties {

		/** **indicator**: `true` signifies health */
		allGood: FormControl<boolean | null | undefined>,

		/** **indicator**: `true` signifies health */
		capiOk: FormControl<boolean | null | undefined>,

		/** **indicator**: `true` signifies health */
		dbOk: FormControl<boolean | null | undefined>,

		/** **indicator**: `true` signifies health */
		memcachedOk: FormControl<boolean | null | undefined>,

		/** **natural-language description** of any issues regarding the health of the API */
		message: FormControl<string | null | undefined>,
	}
	export function CreateHealthCheckReturnFormGroup() {
		return new FormGroup<HealthCheckReturnFormProperties>({
			allGood: new FormControl<boolean | null | undefined>(undefined),
			capiOk: new FormControl<boolean | null | undefined>(undefined),
			dbOk: new FormControl<boolean | null | undefined>(undefined),
			memcachedOk: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MerchantCancellationPostBody {

		/** **array** of objects detailing itinerary items to cancel */
		MerchantCancellationPostBodyCancelItems?: Array<MerchantCancellationPostBodyCancelItems>;

		/** **itinerary reference identifier** (partner defined) for the booking to cancel */
		distributorRef?: string | null;

		/** **numeric identifier** for the itinerary */
		itineraryId?: number | null;
	}
	export interface MerchantCancellationPostBodyFormProperties {

		/** **itinerary reference identifier** (partner defined) for the booking to cancel */
		distributorRef: FormControl<string | null | undefined>,

		/** **numeric identifier** for the itinerary */
		itineraryId: FormControl<number | null | undefined>,
	}
	export function CreateMerchantCancellationPostBodyFormGroup() {
		return new FormGroup<MerchantCancellationPostBodyFormProperties>({
			distributorRef: new FormControl<string | null | undefined>(undefined),
			itineraryId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MerchantCancellationPostBodyCancelItems {

		/**
		 * **cancellation code** that describes the reason for the cancellation
		 * - see: [Suggested cancellation codes](#suggested-cancellation-codes)
		 */
		cancelCode?: string | null;

		/** **natural-language description** of the reason for cancellation (a reason must be provided if `cancelCode` is `62` or `66`) */
		cancelDescription?: string | null;

		/** **alphanumeric reference code** of the distributor item */
		distributorItemRef?: string | null;

		/** **numeric identifier** of item to cancel in itinerary */
		itemId?: number | null;
	}
	export interface MerchantCancellationPostBodyCancelItemsFormProperties {

		/**
		 * **cancellation code** that describes the reason for the cancellation
		 * - see: [Suggested cancellation codes](#suggested-cancellation-codes)
		 */
		cancelCode: FormControl<string | null | undefined>,

		/** **natural-language description** of the reason for cancellation (a reason must be provided if `cancelCode` is `62` or `66`) */
		cancelDescription: FormControl<string | null | undefined>,

		/** **alphanumeric reference code** of the distributor item */
		distributorItemRef: FormControl<string | null | undefined>,

		/** **numeric identifier** of item to cancel in itinerary */
		itemId: FormControl<number | null | undefined>,
	}
	export function CreateMerchantCancellationPostBodyCancelItemsFormGroup() {
		return new FormGroup<MerchantCancellationPostBodyCancelItemsFormProperties>({
			cancelCode: new FormControl<string | null | undefined>(undefined),
			cancelDescription: new FormControl<string | null | undefined>(undefined),
			distributorItemRef: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ProductSortOrder { REVIEW_RATING_A = 'REVIEW_RATING_A', REVIEW_RATING_D = 'REVIEW_RATING_D', REVIEW_RATING_SUBMISSION_DATE_D = 'REVIEW_RATING_SUBMISSION_DATE_D' }

	export enum ProductVoucherOption { VOUCHER_PAPER_ONLY = 'VOUCHER_PAPER_ONLY', VOUCHER_E = 'VOUCHER_E' }

	export interface SearchFreetextPostBody {

		/** **currency code** for the currency in which to display product pricing information */
		currencyCode?: string | null;

		/**
		 * **unique numeric identifier** of the destination to search within
		 * - `destinationId` can be retrieved from the [/taxonomy/destinations](#operation/taxonomyDestinations) service
		 */
		destId?: number | null;

		/**
		 * **array** of search domain specifiers where each item is *one of*:
		 * - `"PRODUCT"`: a tour / activity
		 * - `"DESTINATION"`: continent, country, city, region
		 * - `"ATTRACTION"`: an attraction within a destination (only available to partners with SEO access)
		 * - `"RECOMMENDATION"`: an attraction within a destination (only available to partners with SEO access)
		 */
		searchTypes?: Array<SearchFreetextResponseSearchType>;

		/**
		 * **sort order** in which to return the results that is *one of*:
		 * - `'TOP_SELLERS'`: the top sellers
		 * - `'REVIEW_AVG_RATING_A'`: ascending by average traveler rating (low -&gt; high)
		 * - `'REVIEW_AVG_RATING_D'`: descending by average traveler rating (high -&gt; low)
		 * - `'PRICE_FROM_A'`: ascending by price (low -&gt; high)
		 * - `'PRICE_FROM_D'`: descending by price (high -&gt; low)
		 */
		sortOrder?: SortOrder | null;

		/** **text** to search for */
		text?: string | null;

		/**
		 * **start and end rows** to return in the format {start}-{end}
		 * - e.g. `'1-10'`, `'11-20'`
		 * **Note**:
		 * - the maximum number of rows per request is 100; therefore, `'100-400'` will return the same as `'100-200'`
		 * - if `topX` is not specified, the default is `'1-100'`
		 */
		topX?: string | null;
	}
	export interface SearchFreetextPostBodyFormProperties {

		/** **currency code** for the currency in which to display product pricing information */
		currencyCode: FormControl<string | null | undefined>,

		/**
		 * **unique numeric identifier** of the destination to search within
		 * - `destinationId` can be retrieved from the [/taxonomy/destinations](#operation/taxonomyDestinations) service
		 */
		destId: FormControl<number | null | undefined>,

		/**
		 * **sort order** in which to return the results that is *one of*:
		 * - `'TOP_SELLERS'`: the top sellers
		 * - `'REVIEW_AVG_RATING_A'`: ascending by average traveler rating (low -&gt; high)
		 * - `'REVIEW_AVG_RATING_D'`: descending by average traveler rating (high -&gt; low)
		 * - `'PRICE_FROM_A'`: ascending by price (low -&gt; high)
		 * - `'PRICE_FROM_D'`: descending by price (high -&gt; low)
		 */
		sortOrder: FormControl<SortOrder | null | undefined>,

		/** **text** to search for */
		text: FormControl<string | null | undefined>,

		/**
		 * **start and end rows** to return in the format {start}-{end}
		 * - e.g. `'1-10'`, `'11-20'`
		 * **Note**:
		 * - the maximum number of rows per request is 100; therefore, `'100-400'` will return the same as `'100-200'`
		 * - if `topX` is not specified, the default is `'1-100'`
		 */
		topX: FormControl<string | null | undefined>,
	}
	export function CreateSearchFreetextPostBodyFormGroup() {
		return new FormGroup<SearchFreetextPostBodyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			destId: new FormControl<number | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			topX: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchProductsPostBody {

		/**
		 * **unique numeric identifier** of *this* product category to search within
		 * - `categoryId` can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service
		 * - at present, it is not possible to use `catId` in conjunction with `seoId`
		 */
		catId?: number | null;

		/** **currency** in which to display product prices */
		currencyCode?: string | null;

		/**
		 * **unique numeric identifier** of the destination in which to search for products
		 * - `destinationId` is available from the [/taxonomy/destinations](#operation/taxonomyDestinations) service
		 * - use **EITHER** `destId` **OR** `seoId`, but not both
		 */
		destId?: number | null;

		/**
		 * **end date delimiter** for the search (must be in the future)
		 * - e.g., `'2019-10-21'`
		 */
		endDate?: string | null;

		/**
		 * **search restriction specifier** for products associated with an attraction uniquely identified by `seoId`
		 * - use **EITHER** `destId` **OR** `seoId`, but not both
		 */
		seoId?: string | null;

		/**
		 * **sort order** in which to return the results that is *one of*:
		 * - `"TOP_SELLERS"`: the top sellers
		 * - `"REVIEW_AVG_RATING_A"`: ascending by average traveler rating (low -&gt; high)
		 * - `"REVIEW_AVG_RATING_D"`: descending by average traveler rating (high -&gt; low)
		 * - `"PRICE_FROM_A"`: ascending by price (low -&gt; high)
		 * - `"PRICE_FROM_D"`: descending by price (high -&gt; low)
		 */
		sortOrder?: SortOrder | null;

		/**
		 * **start date delimiter** for the search (must be in the future)
		 * - e.g., `'2018-10-21'`
		 */
		startDate?: string | null;

		/**
		 * **unique numeric identifier** of *this* product subcategory to search within
		 * - `subcategoryId` can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service
		 * - at present, it is not possible to use `subCatId` in conjunction with `seoId`
		 */
		subCatId?: number | null;

		/**
		 * **start and end rows** to return in the format {start}-{end}
		 * - e.g. `'1-10'`, `'11-20'`
		 * **Note**:
		 * - the maximum number of rows per request is 100; therefore, `'100-400'` will return the same as `'100-200'`
		 * - if `topX` is not specified, the default is `'1-100'`
		 */
		topX?: string | null;
	}
	export interface SearchProductsPostBodyFormProperties {

		/**
		 * **unique numeric identifier** of *this* product category to search within
		 * - `categoryId` can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service
		 * - at present, it is not possible to use `catId` in conjunction with `seoId`
		 */
		catId: FormControl<number | null | undefined>,

		/** **currency** in which to display product prices */
		currencyCode: FormControl<string | null | undefined>,

		/**
		 * **unique numeric identifier** of the destination in which to search for products
		 * - `destinationId` is available from the [/taxonomy/destinations](#operation/taxonomyDestinations) service
		 * - use **EITHER** `destId` **OR** `seoId`, but not both
		 */
		destId: FormControl<number | null | undefined>,

		/**
		 * **end date delimiter** for the search (must be in the future)
		 * - e.g., `'2019-10-21'`
		 */
		endDate: FormControl<string | null | undefined>,

		/**
		 * **search restriction specifier** for products associated with an attraction uniquely identified by `seoId`
		 * - use **EITHER** `destId` **OR** `seoId`, but not both
		 */
		seoId: FormControl<string | null | undefined>,

		/**
		 * **sort order** in which to return the results that is *one of*:
		 * - `"TOP_SELLERS"`: the top sellers
		 * - `"REVIEW_AVG_RATING_A"`: ascending by average traveler rating (low -&gt; high)
		 * - `"REVIEW_AVG_RATING_D"`: descending by average traveler rating (high -&gt; low)
		 * - `"PRICE_FROM_A"`: ascending by price (low -&gt; high)
		 * - `"PRICE_FROM_D"`: descending by price (high -&gt; low)
		 */
		sortOrder: FormControl<SortOrder | null | undefined>,

		/**
		 * **start date delimiter** for the search (must be in the future)
		 * - e.g., `'2018-10-21'`
		 */
		startDate: FormControl<string | null | undefined>,

		/**
		 * **unique numeric identifier** of *this* product subcategory to search within
		 * - `subcategoryId` can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service
		 * - at present, it is not possible to use `subCatId` in conjunction with `seoId`
		 */
		subCatId: FormControl<number | null | undefined>,

		/**
		 * **start and end rows** to return in the format {start}-{end}
		 * - e.g. `'1-10'`, `'11-20'`
		 * **Note**:
		 * - the maximum number of rows per request is 100; therefore, `'100-400'` will return the same as `'100-200'`
		 * - if `topX` is not specified, the default is `'1-100'`
		 */
		topX: FormControl<string | null | undefined>,
	}
	export function CreateSearchProductsPostBodyFormGroup() {
		return new FormGroup<SearchProductsPostBodyFormProperties>({
			catId: new FormControl<number | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			destId: new FormControl<number | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			seoId: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			subCatId: new FormControl<number | null | undefined>(undefined),
			topX: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchProductsCodesPostBody {

		/** **currency code** for the currency in which to display product pricing */
		currencyCode?: string | null;

		/** **array** of product codes to search for */
		productCodes?: Array<string>;
	}
	export interface SearchProductsCodesPostBodyFormProperties {

		/** **currency code** for the currency in which to display product pricing */
		currencyCode: FormControl<string | null | undefined>,
	}
	export function CreateSearchProductsCodesPostBodyFormGroup() {
		return new FormGroup<SearchProductsCodesPostBodyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaxonomyAttractionsPostBody {

		/** **unique numeric identifier** of the destination in which to search for attractions */
		destId?: number | null;

		/**
		 * **sort order** in which to return the results that is *one of*:
		 * * `"SEO_PUBLISHED_DATE_D"`: publish date (descending)
		 * * `"SEO_PUBLISHED_DATE_A"`: publish date (ascending)
		 * * `"SEO_REVIEW_AVG_RATING_D"`: traveler rating (high→low)
		 * * `"SEO_REVIEW_AVG_RATING_A"`: traveler rating (low→high)
		 * * `"SEO_ALPHABETICAL"`: alphabetical (A→Z)
		 */
		sortOrder?: TaxonomyAttractionsPostBodySortOrder | null;

		/**
		 * **start and end rows** to return in the format {start}-{end}
		 * - e.g. `'1-10'`, `'11-20'`
		 * **Note**:
		 * - the maximum number of rows per request is 100; therefore, `'100-400'` will return the same as `'100-200'`
		 * - if `topX` is not specified, the default is `'1-100'`
		 */
		topX?: string | null;
	}
	export interface TaxonomyAttractionsPostBodyFormProperties {

		/** **unique numeric identifier** of the destination in which to search for attractions */
		destId: FormControl<number | null | undefined>,

		/**
		 * **sort order** in which to return the results that is *one of*:
		 * * `"SEO_PUBLISHED_DATE_D"`: publish date (descending)
		 * * `"SEO_PUBLISHED_DATE_A"`: publish date (ascending)
		 * * `"SEO_REVIEW_AVG_RATING_D"`: traveler rating (high→low)
		 * * `"SEO_REVIEW_AVG_RATING_A"`: traveler rating (low→high)
		 * * `"SEO_ALPHABETICAL"`: alphabetical (A→Z)
		 */
		sortOrder: FormControl<TaxonomyAttractionsPostBodySortOrder | null | undefined>,

		/**
		 * **start and end rows** to return in the format {start}-{end}
		 * - e.g. `'1-10'`, `'11-20'`
		 * **Note**:
		 * - the maximum number of rows per request is 100; therefore, `'100-400'` will return the same as `'100-200'`
		 * - if `topX` is not specified, the default is `'1-100'`
		 */
		topX: FormControl<string | null | undefined>,
	}
	export function CreateTaxonomyAttractionsPostBodyFormGroup() {
		return new FormGroup<TaxonomyAttractionsPostBodyFormProperties>({
			destId: new FormControl<number | null | undefined>(undefined),
			sortOrder: new FormControl<TaxonomyAttractionsPostBodySortOrder | null | undefined>(undefined),
			topX: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TaxonomyAttractionsPostBodySortOrder { SEO_PUBLISHED_DATE_D = 'SEO_PUBLISHED_DATE_D', SEO_PUBLISHED_DATE_A = 'SEO_PUBLISHED_DATE_A', SEO_REVIEW_AVG_RATING_D = 'SEO_REVIEW_AVG_RATING_D', SEO_REVIEW_AVG_RATING_A = 'SEO_REVIEW_AVG_RATING_A', SEO_ALPHABETICAL = 'SEO_ALPHABETICAL' }

}

