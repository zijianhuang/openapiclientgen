import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchPutMetricsResponse {
		Errors?: Array<BatchPutMetricsError>;
	}
	export interface BatchPutMetricsResponseFormProperties {
	}
	export function CreateBatchPutMetricsResponseFormGroup() {
		return new FormGroup<BatchPutMetricsResponseFormProperties>({
		});

	}


	/** An error that occured when putting the metric data. */
	export interface BatchPutMetricsError {
		Code?: PutMetricsErrorCode;
		MetricIndex?: number | null;
	}

	/** An error that occured when putting the metric data. */
	export interface BatchPutMetricsErrorFormProperties {
		Code: FormControl<PutMetricsErrorCode | null | undefined>,
		MetricIndex: FormControl<number | null | undefined>,
	}
	export function CreateBatchPutMetricsErrorFormGroup() {
		return new FormGroup<BatchPutMetricsErrorFormProperties>({
			Code: new FormControl<PutMetricsErrorCode | null | undefined>(undefined),
			MetricIndex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PutMetricsErrorCode { METRIC_LIMIT_EXCEEDED = 'METRIC_LIMIT_EXCEEDED', INTERNAL_ERROR = 'INTERNAL_ERROR', VALIDATION_ERROR = 'VALIDATION_ERROR', CONFLICT_ERROR = 'CONFLICT_ERROR' }


	/** The raw metric data to associate with the resource. */
	export interface RawMetricData {

		/** Required */
		MetricName: string;

		/** Required */
		Timestamp: Date;
		Step?: number | null;

		/** Required */
		Value: number;
	}

	/** The raw metric data to associate with the resource. */
	export interface RawMetricDataFormProperties {

		/** Required */
		MetricName: FormControl<string | null | undefined>,

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,
		Step: FormControl<number | null | undefined>,

		/** Required */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateRawMetricDataFormGroup() {
		return new FormGroup<RawMetricDataFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Step: new FormControl<number | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchPutMetricsRequest {

		/** Required */
		TrialComponentName: string;

		/** Required */
		MetricData: Array<RawMetricData>;
	}
	export interface BatchPutMetricsRequestFormProperties {

		/** Required */
		TrialComponentName: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutMetricsRequestFormGroup() {
		return new FormGroup<BatchPutMetricsRequestFormProperties>({
			TrialComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Used to ingest training metrics into SageMaker. These metrics can be visualized in SageMaker Studio and retrieved with the <code>GetMetrics</code> API.
		 * Put BatchPutMetrics
		 * @return {BatchPutMetricsResponse} Success
		 */
		BatchPutMetrics(requestBody: BatchPutMetricsPutBody): Observable<BatchPutMetricsResponse> {
			return this.http.put<BatchPutMetricsResponse>(this.baseUri + 'BatchPutMetrics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface BatchPutMetricsPutBody {

		/**
		 * The name of the Trial Component to associate with the metrics.
		 * Required
		 * Max length: 120
		 * Min length: 1
		 */
		TrialComponentName: string;

		/**
		 * A list of raw metric values to put.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		MetricData: Array<RawMetricData>;
	}
	export interface BatchPutMetricsPutBodyFormProperties {

		/**
		 * The name of the Trial Component to associate with the metrics.
		 * Required
		 * Max length: 120
		 * Min length: 1
		 */
		TrialComponentName: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutMetricsPutBodyFormGroup() {
		return new FormGroup<BatchPutMetricsPutBodyFormProperties>({
			TrialComponentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(120), Validators.pattern('^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,119}')]),
		});

	}

}

