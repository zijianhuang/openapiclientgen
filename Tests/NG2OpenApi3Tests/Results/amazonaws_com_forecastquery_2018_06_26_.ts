import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface QueryForecastResponse {
		Forecast?: Forecast;
	}
	export interface QueryForecastResponseFormProperties {
	}
	export function CreateQueryForecastResponseFormGroup() {
		return new FormGroup<QueryForecastResponseFormProperties>({
		});

	}


	/** Provides information about a forecast. Returned as part of the <a>QueryForecast</a> response. */
	export interface Forecast {
		Predictions?: Predictions;
	}

	/** Provides information about a forecast. Returned as part of the <a>QueryForecast</a> response. */
	export interface ForecastFormProperties {
	}
	export function CreateForecastFormGroup() {
		return new FormGroup<ForecastFormProperties>({
		});

	}

	export interface Predictions {
	}
	export interface PredictionsFormProperties {
	}
	export function CreatePredictionsFormGroup() {
		return new FormGroup<PredictionsFormProperties>({
		});

	}

	export interface QueryForecastRequest {

		/** Required */
		ForecastArn: string;
		StartDate?: string;
		EndDate?: string;

		/** Required */
		Filters: Filters;
		NextToken?: string;
	}
	export interface QueryForecastRequestFormProperties {

		/** Required */
		ForecastArn: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		EndDate: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryForecastRequestFormGroup() {
		return new FormGroup<QueryForecastRequestFormProperties>({
			ForecastArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartDate: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Filters {
	}
	export interface FiltersFormProperties {
	}
	export function CreateFiltersFormGroup() {
		return new FormGroup<FiltersFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}

	export interface InvalidInputException {
	}
	export interface InvalidInputExceptionFormProperties {
	}
	export function CreateInvalidInputExceptionFormGroup() {
		return new FormGroup<InvalidInputExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface QueryWhatIfForecastResponse {

		/** Provides information about a forecast. Returned as part of the <a>QueryForecast</a> response. */
		Forecast?: Forecast;
	}
	export interface QueryWhatIfForecastResponseFormProperties {
	}
	export function CreateQueryWhatIfForecastResponseFormGroup() {
		return new FormGroup<QueryWhatIfForecastResponseFormProperties>({
		});

	}

	export interface QueryWhatIfForecastRequest {

		/** Required */
		WhatIfForecastArn: string;
		StartDate?: string;
		EndDate?: string;

		/** Required */
		Filters: Filters;
		NextToken?: string;
	}
	export interface QueryWhatIfForecastRequestFormProperties {

		/** Required */
		WhatIfForecastArn: FormControl<string | null | undefined>,
		StartDate: FormControl<string | null | undefined>,
		EndDate: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryWhatIfForecastRequestFormGroup() {
		return new FormGroup<QueryWhatIfForecastRequestFormProperties>({
			WhatIfForecastArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartDate: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The forecast value for a specific date. Part of the <a>Forecast</a> object. */
	export interface DataPoint {
		Timestamp?: string;
		Value?: number | null;
	}

	/** The forecast value for a specific date. Part of the <a>Forecast</a> object. */
	export interface DataPointFormProperties {
		Timestamp: FormControl<string | null | undefined>,
		Value: FormControl<number | null | undefined>,
	}
	export function CreateDataPointFormGroup() {
		return new FormGroup<DataPointFormProperties>({
			Timestamp: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Retrieves a forecast for a single item, filtered by the supplied criteria.</p> <p>The criteria is a key-value pair. The key is either <code>item_id</code> (or the equivalent non-timestamp, non-target field) from the <code>TARGET_TIME_SERIES</code> dataset, or one of the forecast dimensions specified as part of the <code>FeaturizationConfig</code> object.</p> <p>By default, <code>QueryForecast</code> returns the complete date range for the filtered forecast. You can request a specific date range.</p> <p>To get the full forecast, use the <a href="https://docs.aws.amazon.com/en_us/forecast/latest/dg/API_CreateForecastExportJob.html">CreateForecastExportJob</a> operation.</p> <note> <p>The forecasts generated by Amazon Forecast are in the same timezone as the dataset that was used to create the predictor.</p> </note>
		 * Post #X-Amz-Target=AmazonForecastRuntime.QueryForecast
		 * @return {QueryForecastResponse} Success
		 */
		QueryForecast(requestBody: QueryForecastRequest): Observable<QueryForecastResponse> {
			return this.http.post<QueryForecastResponse>(this.baseUri + '#X-Amz-Target=AmazonForecastRuntime.QueryForecast', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a what-if forecast.
		 * Post #X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast
		 * @return {QueryWhatIfForecastResponse} Success
		 */
		QueryWhatIfForecast(requestBody: QueryWhatIfForecastRequest): Observable<QueryWhatIfForecastResponse> {
			return this.http.post<QueryWhatIfForecastResponse>(this.baseUri + '#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum QueryForecastX_Amz_Target { 'AmazonForecastRuntime.QueryForecast' = 'AmazonForecastRuntime.QueryForecast' }

	export enum QueryWhatIfForecastX_Amz_Target { 'AmazonForecastRuntime.QueryWhatIfForecast' = 'AmazonForecastRuntime.QueryWhatIfForecast' }

}

