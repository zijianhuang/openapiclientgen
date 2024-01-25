import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Error information returned by the API. */
	export interface APIError {

		/** The error code. */
		code?: APIErrorCode | null;

		/** A message explaining the error reported by the service. */
		message?: string | null;
	}

	/** Error information returned by the API. */
	export interface APIErrorFormProperties {

		/** The error code. */
		code: FormControl<APIErrorCode | null | undefined>,

		/** A message explaining the error reported by the service. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateAPIErrorFormGroup() {
		return new FormGroup<APIErrorFormProperties>({
			code: new FormControl<APIErrorCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum APIErrorCode { InvalidCustomInterval = 0, BadArgument = 1, InvalidGranularity = 2, InvalidPeriod = 3, InvalidModelArgument = 4, InvalidSeries = 5 }

	export interface EntireDetectResponse {

		/**
		 * ExpectedValues contain expected value for each input point. The index of the array is consistent with the input series.
		 * Required
		 */
		expectedValues: Array<number>;

		/**
		 * IsAnomaly contains anomaly properties for each input point. True means an anomaly either negative or positive has been detected. The index of the array is consistent with the input series.
		 * Required
		 */
		isAnomaly: Array<boolean>;

		/**
		 * IsNegativeAnomaly contains anomaly status in negative direction for each input point. True means a negative anomaly has been detected. A negative anomaly means the point is detected as an anomaly and its real value is smaller than the expected one. The index of the array is consistent with the input series.
		 * Required
		 */
		isNegativeAnomaly: Array<boolean>;

		/**
		 * IsPositiveAnomaly contain anomaly status in positive direction for each input point. True means a positive anomaly has been detected. A positive anomaly means the point is detected as an anomaly and its real value is larger than the expected one. The index of the array is consistent with the input series.
		 * Required
		 */
		isPositiveAnomaly: Array<boolean>;

		/**
		 * LowerMargins contain lower margin of each input point. LowerMargin is used to calculate lowerBoundary, which equals to expectedValue - (100 - sensitivity)*lowerMargin. Points between the boundary can be marked as normal ones in client side. The index of the array is consistent with the input series.
		 * Required
		 */
		lowerMargins: Array<number>;

		/**
		 * Frequency extracted from the series, zero means no recurrent pattern has been found.
		 * Required
		 */
		period: number;

		/**
		 * UpperMargins contain upper margin of each input point. UpperMargin is used to calculate upperBoundary, which equals to expectedValue + (100 - sensitivity)*upperMargin. Anomalies in response can be filtered by upperBoundary and lowerBoundary. By adjusting sensitivity value, less significant anomalies can be filtered in client side. The index of the array is consistent with the input series.
		 * Required
		 */
		upperMargins: Array<number>;
	}
	export interface EntireDetectResponseFormProperties {

		/**
		 * Frequency extracted from the series, zero means no recurrent pattern has been found.
		 * Required
		 */
		period: FormControl<number | null | undefined>,
	}
	export function CreateEntireDetectResponseFormGroup() {
		return new FormGroup<EntireDetectResponseFormProperties>({
			period: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LastDetectResponse {

		/** Expected value of the latest point. */
		expectedValue?: number | null;

		/** Anomaly status of the latest point, true means the latest point is an anomaly either in negative direction or positive direction. */
		isAnomaly?: boolean | null;

		/** Anomaly status in negative direction of the latest point. True means the latest point is an anomaly and its real value is smaller than the expected one. */
		isNegativeAnomaly?: boolean | null;

		/** Anomaly status in positive direction of the latest point. True means the latest point is an anomaly and its real value is larger than the expected one. */
		isPositiveAnomaly?: boolean | null;

		/** Lower margin of the latest point. LowerMargin is used to calculate lowerBoundary, which equals to expectedValue - (100 - sensitivity)*lowerMargin. */
		lowerMargin?: number | null;

		/** Frequency extracted from the series, zero means no recurrent pattern has been found. */
		period?: number | null;

		/** Suggested input series points needed for detecting the latest point. */
		suggestedWindow?: number | null;

		/** Upper margin of the latest point. UpperMargin is used to calculate upperBoundary, which equals to expectedValue + (100 - sensitivity)*upperMargin. If the value of latest point is between upperBoundary and lowerBoundary, it should be treated as normal value. By adjusting sensitivity value, anomaly status of latest point can be changed. */
		upperMargin?: number | null;
	}
	export interface LastDetectResponseFormProperties {

		/** Expected value of the latest point. */
		expectedValue: FormControl<number | null | undefined>,

		/** Anomaly status of the latest point, true means the latest point is an anomaly either in negative direction or positive direction. */
		isAnomaly: FormControl<boolean | null | undefined>,

		/** Anomaly status in negative direction of the latest point. True means the latest point is an anomaly and its real value is smaller than the expected one. */
		isNegativeAnomaly: FormControl<boolean | null | undefined>,

		/** Anomaly status in positive direction of the latest point. True means the latest point is an anomaly and its real value is larger than the expected one. */
		isPositiveAnomaly: FormControl<boolean | null | undefined>,

		/** Lower margin of the latest point. LowerMargin is used to calculate lowerBoundary, which equals to expectedValue - (100 - sensitivity)*lowerMargin. */
		lowerMargin: FormControl<number | null | undefined>,

		/** Frequency extracted from the series, zero means no recurrent pattern has been found. */
		period: FormControl<number | null | undefined>,

		/** Suggested input series points needed for detecting the latest point. */
		suggestedWindow: FormControl<number | null | undefined>,

		/** Upper margin of the latest point. UpperMargin is used to calculate upperBoundary, which equals to expectedValue + (100 - sensitivity)*upperMargin. If the value of latest point is between upperBoundary and lowerBoundary, it should be treated as normal value. By adjusting sensitivity value, anomaly status of latest point can be changed. */
		upperMargin: FormControl<number | null | undefined>,
	}
	export function CreateLastDetectResponseFormGroup() {
		return new FormGroup<LastDetectResponseFormProperties>({
			expectedValue: new FormControl<number | null | undefined>(undefined),
			isAnomaly: new FormControl<boolean | null | undefined>(undefined),
			isNegativeAnomaly: new FormControl<boolean | null | undefined>(undefined),
			isPositiveAnomaly: new FormControl<boolean | null | undefined>(undefined),
			lowerMargin: new FormControl<number | null | undefined>(undefined),
			period: new FormControl<number | null | undefined>(undefined),
			suggestedWindow: new FormControl<number | null | undefined>(undefined),
			upperMargin: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Point {

		/**
		 * Timestamp of a data point (ISO8601 format).
		 * Required
		 */
		timestamp: Date;

		/**
		 * The measurement of that point, should be float.
		 * Required
		 */
		value: number;
	}
	export interface PointFormProperties {

		/**
		 * Timestamp of a data point (ISO8601 format).
		 * Required
		 */
		timestamp: FormControl<Date | null | undefined>,

		/**
		 * The measurement of that point, should be float.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreatePointFormGroup() {
		return new FormGroup<PointFormProperties>({
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Request {

		/** Custom Interval is used to set non-standard time interval, for example, if the series is 5 minutes, request can be set as {"granularity":"minutely", "customInterval":5}. */
		customInterval?: number | null;

		/**
		 * Can only be one of yearly, monthly, weekly, daily, hourly or minutely. Granularity is used for verify whether input series is valid.
		 * Required
		 */
		granularity: RequestGranularity;

		/** Optional argument, advanced model parameter, max anomaly ratio in a time series. */
		maxAnomalyRatio?: number | null;

		/** Optional argument, periodic value of a time series. If the value is null or does not present, the API will determine the period automatically. */
		period?: number | null;

		/** Optional argument, advanced model parameter, between 0-99, the lower the value is, the larger the margin value will be which means less anomalies will be accepted. */
		sensitivity?: number | null;

		/**
		 * Time series data points. Points should be sorted by timestamp in ascending order to match the anomaly detection result. If the data is not sorted correctly or there is duplicated timestamp, the API will not work. In such case, an error message will be returned.
		 * Required
		 */
		series: Array<Point>;
	}
	export interface RequestFormProperties {

		/** Custom Interval is used to set non-standard time interval, for example, if the series is 5 minutes, request can be set as {"granularity":"minutely", "customInterval":5}. */
		customInterval: FormControl<number | null | undefined>,

		/**
		 * Can only be one of yearly, monthly, weekly, daily, hourly or minutely. Granularity is used for verify whether input series is valid.
		 * Required
		 */
		granularity: FormControl<RequestGranularity | null | undefined>,

		/** Optional argument, advanced model parameter, max anomaly ratio in a time series. */
		maxAnomalyRatio: FormControl<number | null | undefined>,

		/** Optional argument, periodic value of a time series. If the value is null or does not present, the API will determine the period automatically. */
		period: FormControl<number | null | undefined>,

		/** Optional argument, advanced model parameter, between 0-99, the lower the value is, the larger the margin value will be which means less anomalies will be accepted. */
		sensitivity: FormControl<number | null | undefined>,
	}
	export function CreateRequestFormGroup() {
		return new FormGroup<RequestFormProperties>({
			customInterval: new FormControl<number | null | undefined>(undefined),
			granularity: new FormControl<RequestGranularity | null | undefined>(undefined, [Validators.required]),
			maxAnomalyRatio: new FormControl<number | null | undefined>(undefined),
			period: new FormControl<number | null | undefined>(undefined),
			sensitivity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum RequestGranularity { yearly = 0, monthly = 1, weekly = 2, daily = 3, hourly = 4, minutely = 5 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Find anomalies for the entire series in batch.
		 * The operation will generate a model using the entire series, each point will be detected with the same model. In this method, points before and after a certain point will be used to determine whether it's an anomaly. The entire detection can give user an overall status of the time series.
		 * Post timeseries/entire/detect
		 * @param {Request} requestBody Time series points and period if needed. Advanced model parameters can also be set in the request.
		 * @return {EntireDetectResponse} Successful operation.
		 */
		EntireDetect(requestBody: Request): Observable<EntireDetectResponse> {
			return this.http.post<EntireDetectResponse>(this.baseUri + 'timeseries/entire/detect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detect anomaly status of the latest point in time series.
		 * The operation will generate a model using points before the latest one, In this method, only history points are used for determine whether the target point is an anomaly. Latest point detecting matches the scenario of real-time monitoring of business metrics.
		 * Post timeseries/last/detect
		 * @param {Request} requestBody Time series points and period if needed. Advanced model parameters can also be set in the request.
		 * @return {LastDetectResponse} Successful operation.
		 */
		LastDetect(requestBody: Request): Observable<LastDetectResponse> {
			return this.http.post<LastDetectResponse>(this.baseUri + 'timeseries/last/detect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

