import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A set of errors */
	export interface Error_400 {
		Error_400Errors?: Array<Error_400Errors>;
	}

	/** A set of errors */
	export interface Error_400FormProperties {
	}
	export function CreateError_400FormGroup() {
		return new FormGroup<Error_400FormProperties>({
		});

	}

	export interface Error_400Errors {

		/** A machine-readable error code from the Amadeus Canned Messages table, that will enable the API Consumers code to handle this type of error */
		code?: number | null;

		/** An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized. */
		detail?: string | null;
		source?: Error_400ErrorsSource;

		/** The [HTTP status code](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml) of this response. This is present only in terminal errors which cause an unsuccessful response. In the case of multiple errors, they must all have the same status. */
		status?: number | null;

		/** An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized */
		title?: string | null;
	}
	export interface Error_400ErrorsFormProperties {

		/** A machine-readable error code from the Amadeus Canned Messages table, that will enable the API Consumers code to handle this type of error */
		code: FormControl<number | null | undefined>,

		/** An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized. */
		detail: FormControl<string | null | undefined>,

		/** The [HTTP status code](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml) of this response. This is present only in terminal errors which cause an unsuccessful response. In the case of multiple errors, they must all have the same status. */
		status: FormControl<number | null | undefined>,

		/** An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized */
		title: FormControl<string | null | undefined>,
	}
	export function CreateError_400ErrorsFormGroup() {
		return new FormGroup<Error_400ErrorsFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error_400ErrorsSource {

		/** A sample input to guide the user when resolving this issue */
		example?: string | null;

		/** The key of the URI path or query parameter that caused the error */
		parameter?: string | null;

		/** A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error */
		pointer?: string | null;
	}
	export interface Error_400ErrorsSourceFormProperties {

		/** A sample input to guide the user when resolving this issue */
		example: FormControl<string | null | undefined>,

		/** The key of the URI path or query parameter that caused the error */
		parameter: FormControl<string | null | undefined>,

		/** A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error */
		pointer: FormControl<string | null | undefined>,
	}
	export function CreateError_400ErrorsSourceFormGroup() {
		return new FormGroup<Error_400ErrorsSourceFormProperties>({
			example: new FormControl<string | null | undefined>(undefined),
			parameter: new FormControl<string | null | undefined>(undefined),
			pointer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of errors */
	export interface Error_500 {
		Error_500Errors?: Array<Error_500Errors>;
	}

	/** A set of errors */
	export interface Error_500FormProperties {
	}
	export function CreateError_500FormGroup() {
		return new FormGroup<Error_500FormProperties>({
		});

	}

	export interface Error_500Errors {

		/** A machine-readable error code from the Amadeus Canned Messages table, that will enable the API Consumers code to handle this type of error */
		code?: number | null;

		/** An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized. */
		detail?: string | null;
		source?: Error_500ErrorsSource;

		/** The [HTTP status code](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml) of this response. This is present only in terminal errors which cause an unsuccessful response. In the case of multiple errors, they must all have the same status. */
		status?: number | null;

		/** An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized */
		title?: string | null;
	}
	export interface Error_500ErrorsFormProperties {

		/** A machine-readable error code from the Amadeus Canned Messages table, that will enable the API Consumers code to handle this type of error */
		code: FormControl<number | null | undefined>,

		/** An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized. */
		detail: FormControl<string | null | undefined>,

		/** The [HTTP status code](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml) of this response. This is present only in terminal errors which cause an unsuccessful response. In the case of multiple errors, they must all have the same status. */
		status: FormControl<number | null | undefined>,

		/** An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized */
		title: FormControl<string | null | undefined>,
	}
	export function CreateError_500ErrorsFormGroup() {
		return new FormGroup<Error_500ErrorsFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error_500ErrorsSource {

		/** A sample input to guide the user when resolving this issue */
		example?: string | null;

		/** The key of the URI path or query parameter that caused the error */
		parameter?: string | null;

		/** A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error */
		pointer?: string | null;
	}
	export interface Error_500ErrorsSourceFormProperties {

		/** A sample input to guide the user when resolving this issue */
		example: FormControl<string | null | undefined>,

		/** The key of the URI path or query parameter that caused the error */
		parameter: FormControl<string | null | undefined>,

		/** A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error */
		pointer: FormControl<string | null | undefined>,
	}
	export function CreateError_500ErrorsSourceFormGroup() {
		return new FormGroup<Error_500ErrorsSourceFormProperties>({
			example: new FormControl<string | null | undefined>(undefined),
			parameter: new FormControl<string | null | undefined>(undefined),
			pointer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Warning Definition */
	export interface Warning {

		/**
		 * A machine-readable error code from the Canned Messages table, that will enable the API Consumers code to handle this type of error
		 * Required
		 */
		code: number;

		/** An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized. */
		detail?: string | null;

		/** The Warning Source Definition */
		source?: WarningSource;

		/**
		 * An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized
		 * Required
		 */
		title: string;
	}

	/** The Warning Definition */
	export interface WarningFormProperties {

		/**
		 * A machine-readable error code from the Canned Messages table, that will enable the API Consumers code to handle this type of error
		 * Required
		 */
		code: FormControl<number | null | undefined>,

		/** An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized. */
		detail: FormControl<string | null | undefined>,

		/**
		 * An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateWarningFormGroup() {
		return new FormGroup<WarningFormProperties>({
			code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			detail: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WarningSource {

		/** A sample input to guide the user when resolving this issu */
		example?: string | null;

		/** The key of the URI path or query parameter that caused the error */
		parameter?: string | null;

		/** A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error */
		pointer?: string | null;
	}
	export interface WarningSourceFormProperties {

		/** A sample input to guide the user when resolving this issu */
		example: FormControl<string | null | undefined>,

		/** The key of the URI path or query parameter that caused the error */
		parameter: FormControl<string | null | undefined>,

		/** A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error */
		pointer: FormControl<string | null | undefined>,
	}
	export function CreateWarningSourceFormGroup() {
		return new FormGroup<WarningSourceFormProperties>({
			example: new FormControl<string | null | undefined>(undefined),
			parameter: new FormControl<string | null | undefined>(undefined),
			pointer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** price metric */
	export interface Itinerary_price_metric {

		/**
		 * currency of the prices.
		 * Currency is specified in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, e.g. EUR for Euro
		 */
		currencyCode?: string | null;

		/**
		 * The date on which the traveler will depart from the origin to go to the destination.
		 * Dates are specified in the[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format.
		 */
		departureDate?: string | null;

		/** Description of a particular point or place in physical space */
		destination?: Itinerary_price_metricDestination;

		/**
		 * true for a one way trip,
		 * false for a round trip
		 */
		oneWay?: boolean | null;

		/** Description of a particular point or place in physical space */
		origin?: Itinerary_price_metricOrigin;
		Itinerary_price_metricPriceMetrics?: Array<Itinerary_price_metricPriceMetrics>;

		/** transportation type */
		transportType?: Itinerary_price_metricTransportType | null;

		/** ressource type - always price-metrics */
		type?: string | null;
	}

	/** price metric */
	export interface Itinerary_price_metricFormProperties {

		/**
		 * currency of the prices.
		 * Currency is specified in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, e.g. EUR for Euro
		 */
		currencyCode: FormControl<string | null | undefined>,

		/**
		 * The date on which the traveler will depart from the origin to go to the destination.
		 * Dates are specified in the[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format.
		 */
		departureDate: FormControl<string | null | undefined>,

		/**
		 * true for a one way trip,
		 * false for a round trip
		 */
		oneWay: FormControl<boolean | null | undefined>,

		/** transportation type */
		transportType: FormControl<Itinerary_price_metricTransportType | null | undefined>,

		/** ressource type - always price-metrics */
		type: FormControl<string | null | undefined>,
	}
	export function CreateItinerary_price_metricFormGroup() {
		return new FormGroup<Itinerary_price_metricFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			departureDate: new FormControl<string | null | undefined>(undefined),
			oneWay: new FormControl<boolean | null | undefined>(undefined),
			transportType: new FormControl<Itinerary_price_metricTransportType | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Itinerary_price_metricDestination {

		/** IATA location code */
		iataCode?: string | null;
	}
	export interface Itinerary_price_metricDestinationFormProperties {

		/** IATA location code */
		iataCode: FormControl<string | null | undefined>,
	}
	export function CreateItinerary_price_metricDestinationFormGroup() {
		return new FormGroup<Itinerary_price_metricDestinationFormProperties>({
			iataCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Itinerary_price_metricOrigin {

		/** IATA location code */
		iataCode?: string | null;
	}
	export interface Itinerary_price_metricOriginFormProperties {

		/** IATA location code */
		iataCode: FormControl<string | null | undefined>,
	}
	export function CreateItinerary_price_metricOriginFormGroup() {
		return new FormGroup<Itinerary_price_metricOriginFormProperties>({
			iataCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Itinerary_price_metricPriceMetrics {

		/** Defines the monetary value with decimal position. It can be in cash or miles. */
		amount?: string | null;
		quartileRanking?: Itinerary_price_metricPriceMetricsQuartileRanking | null;
	}
	export interface Itinerary_price_metricPriceMetricsFormProperties {

		/** Defines the monetary value with decimal position. It can be in cash or miles. */
		amount: FormControl<string | null | undefined>,
		quartileRanking: FormControl<Itinerary_price_metricPriceMetricsQuartileRanking | null | undefined>,
	}
	export function CreateItinerary_price_metricPriceMetricsFormGroup() {
		return new FormGroup<Itinerary_price_metricPriceMetricsFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			quartileRanking: new FormControl<Itinerary_price_metricPriceMetricsQuartileRanking | null | undefined>(undefined),
		});

	}

	export enum Itinerary_price_metricPriceMetricsQuartileRanking { MINIMUM = 0, FIRST = 1, MEDIUM = 2, THIRD = 3, MAXIMUM = 4 }

	export enum Itinerary_price_metricTransportType { FLIGHT = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * GET itinerary price metric
		 * Get analytics/itinerary-price-metrics
		 * @param {string} originIataCode airport code, following [IATA standard](http://www.iata.org/publications/Pages/code-search.aspx), from which the traveler will depart
		 * @param {string} destinationIataCode airport code, following [IATA standard](http://www.iata.org/publications/Pages/code-search.aspx), to which the traveler is going.
		 * @param {string} departureDate The date on which the traveler will depart from the origin to go to the destination. 
		 * Dates are specified in the[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format.
		 * @param {string} currencyCode the preferred currency for display. Currency is specified in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, e.g. EUR for Euro
		 * @param {boolean} oneWay true to get price metrics for a one way trip,
		 * false to get price metrics for a round trip
		 * @return {void} Successful reply
		 */
		Get_itinerary_price_metrics(originIataCode: string, destinationIataCode: string, departureDate: string, currencyCode: string | null | undefined, oneWay: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'analytics/itinerary-price-metrics?originIataCode=' + (originIataCode == null ? '' : encodeURIComponent(originIataCode)) + '&destinationIataCode=' + (destinationIataCode == null ? '' : encodeURIComponent(destinationIataCode)) + '&departureDate=' + (departureDate == null ? '' : encodeURIComponent(departureDate)) + '&currencyCode=' + (currencyCode == null ? '' : encodeURIComponent(currencyCode)) + '&oneWay=' + oneWay, { observe: 'response', responseType: 'text' });
		}
	}

}

