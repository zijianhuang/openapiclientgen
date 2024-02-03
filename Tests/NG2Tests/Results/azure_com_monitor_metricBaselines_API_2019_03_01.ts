import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents a baseline metadata value. */
	export interface BaselineMetadata {

		/**
		 * Name of the baseline metadata.
		 * Required
		 */
		name: string;

		/**
		 * Value of the baseline metadata.
		 * Required
		 */
		value: string;
	}

	/** Represents a baseline metadata value. */
	export interface BaselineMetadataFormProperties {

		/**
		 * Name of the baseline metadata.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Value of the baseline metadata.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateBaselineMetadataFormGroup() {
		return new FormGroup<BaselineMetadataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the format of Error response. */
	export interface ErrorResponse {

		/** Error code */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Describes the format of Error response. */
	export interface ErrorResponseFormProperties {

		/** Error code */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to a metric baselines query. */
	export interface MetricBaselinesProperties {

		/**
		 * The baseline for each time series that was queried.
		 * Required
		 */
		baselines: Array<TimeSeriesBaseline>;

		/**
		 * The interval (window size) for which the metric data was returned in.  This may be adjusted in the future and returned back from what was originally requested.  This is not present if a metadata request was made.
		 * Required
		 */
		interval: string;

		/** The namespace of the metrics been queried. */
		namespace?: string | null;

		/**
		 * The timespan for which the data was retrieved. Its value consists of two datetimes concatenated, separated by '/'.  This may be adjusted in the future and returned back from what was originally requested.
		 * Required
		 */
		timespan: string;
	}

	/** The response to a metric baselines query. */
	export interface MetricBaselinesPropertiesFormProperties {

		/**
		 * The interval (window size) for which the metric data was returned in.  This may be adjusted in the future and returned back from what was originally requested.  This is not present if a metadata request was made.
		 * Required
		 */
		interval: FormControl<string | null | undefined>,

		/** The namespace of the metrics been queried. */
		namespace: FormControl<string | null | undefined>,

		/**
		 * The timespan for which the data was retrieved. Its value consists of two datetimes concatenated, separated by '/'.  This may be adjusted in the future and returned back from what was originally requested.
		 * Required
		 */
		timespan: FormControl<string | null | undefined>,
	}
	export function CreateMetricBaselinesPropertiesFormGroup() {
		return new FormGroup<MetricBaselinesPropertiesFormProperties>({
			interval: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			namespace: new FormControl<string | null | undefined>(undefined),
			timespan: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The baseline values for a single time series. */
	export interface TimeSeriesBaseline {

		/**
		 * The aggregation type of the metric.
		 * Required
		 */
		aggregation: string;

		/**
		 * The baseline values for each sensitivity.
		 * Required
		 */
		data: Array<SingleBaseline>;

		/** The dimensions of this time series. */
		dimensions?: Array<MetricSingleDimension>;

		/** The baseline metadata values. */
		metadata?: Array<BaselineMetadata>;

		/**
		 * The list of timestamps of the baselines.
		 * Required
		 */
		timestamps: Array<string>;
	}

	/** The baseline values for a single time series. */
	export interface TimeSeriesBaselineFormProperties {

		/**
		 * The aggregation type of the metric.
		 * Required
		 */
		aggregation: FormControl<string | null | undefined>,
	}
	export function CreateTimeSeriesBaselineFormGroup() {
		return new FormGroup<TimeSeriesBaselineFormProperties>({
			aggregation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The baseline values for a single sensitivity value. */
	export interface SingleBaseline {

		/**
		 * The high thresholds of the baseline.
		 * Required
		 */
		highThresholds: Array<number>;

		/**
		 * The low thresholds of the baseline.
		 * Required
		 */
		lowThresholds: Array<number>;

		/**
		 * the sensitivity of the baseline.
		 * Required
		 */
		sensitivity: SingleBaselineSensitivity;
	}

	/** The baseline values for a single sensitivity value. */
	export interface SingleBaselineFormProperties {

		/**
		 * the sensitivity of the baseline.
		 * Required
		 */
		sensitivity: FormControl<SingleBaselineSensitivity | null | undefined>,
	}
	export function CreateSingleBaselineFormGroup() {
		return new FormGroup<SingleBaselineFormProperties>({
			sensitivity: new FormControl<SingleBaselineSensitivity | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SingleBaselineSensitivity { Low = 'Low', Medium = 'Medium', High = 'High' }


	/** The metric dimension name and value. */
	export interface MetricSingleDimension {

		/**
		 * Name of the dimension.
		 * Required
		 */
		name: string;

		/**
		 * Value of the dimension.
		 * Required
		 */
		value: string;
	}

	/** The metric dimension name and value. */
	export interface MetricSingleDimensionFormProperties {

		/**
		 * Name of the dimension.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Value of the dimension.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateMetricSingleDimensionFormGroup() {
		return new FormGroup<MetricSingleDimensionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of metric baselines. */
	export interface MetricBaselinesResponse {

		/** The list of metric baselines. */
		value?: Array<SingleMetricBaseline>;
	}

	/** A list of metric baselines. */
	export interface MetricBaselinesResponseFormProperties {
	}
	export function CreateMetricBaselinesResponseFormGroup() {
		return new FormGroup<MetricBaselinesResponseFormProperties>({
		});

	}


	/** The baseline results of a single metric. */
	export interface SingleMetricBaseline {

		/**
		 * The metric baseline Id.
		 * Required
		 */
		id: string;

		/**
		 * The name of the metric for which the baselines were retrieved.
		 * Required
		 */
		name: string;

		/**
		 * The response to a metric baselines query.
		 * Required
		 */
		properties: MetricBaselinesProperties;

		/**
		 * The resource type of the metric baseline resource.
		 * Required
		 */
		type: string;
	}

	/** The baseline results of a single metric. */
	export interface SingleMetricBaselineFormProperties {

		/**
		 * The metric baseline Id.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the metric for which the baselines were retrieved.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The resource type of the metric baseline resource.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSingleMetricBaselineFormGroup() {
		return new FormGroup<SingleMetricBaselineFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * **Lists the metric baseline values for a resource**.
		 * Get {resourceUri}/providers/microsoft.insights/metricBaselines
		 * @param {string} resourceUri The identifier of the resource.
		 * @param {string} metricnames The names of the metrics (comma separated) to retrieve.
		 * @param {string} metricnamespace Metric namespace to query metric definitions for.
		 * @param {string} timespan The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'.
		 * @param {string} interval The interval (i.e. timegrain) of the query.
		 * @param {string} aggregation The list of aggregation types (comma separated) to retrieve.
		 * @param {string} sensitivities The list of sensitivities (comma separated) to retrieve.
		 * @param {string} filter The **$filter** is used to reduce the set of metric data returned.<br>Example:<br>Metric contains metadata A, B and C.<br>- Return all time series of C where A = a1 and B = b1 or b2<br>**$filter=A eq ‘a1’ and B eq ‘b1’ or B eq ‘b2’ and C eq ‘*’**<br>- Invalid variant:<br>**$filter=A eq ‘a1’ and B eq ‘b1’ and C eq ‘*’ or B = ‘b2’**<br>This is invalid because the logical or operator cannot separate two different metadata names.<br>- Return all time series where A = a1, B = b1 and C = c1:<br>**$filter=A eq ‘a1’ and B eq ‘b1’ and C eq ‘c1’**<br>- Return all time series where A = a1<br>**$filter=A eq ‘a1’ and B eq ‘*’ and C eq ‘*’**.
		 * @param {Baselines_ListResultType} resultType Allows retrieving only metadata of the baseline. On data request all information is retrieved.
		 * @param {string} api_version Client Api Version.
		 * @return {MetricBaselinesResponse} Successful request to get the list of metric baseline values.
		 */
		Baselines_List(resourceUri: string, metricnames: string | null | undefined, metricnamespace: string | null | undefined, timespan: string | null | undefined, interval: string | null | undefined, aggregation: string | null | undefined, sensitivities: string | null | undefined, filter: string | null | undefined, resultType: Baselines_ListResultType | null | undefined, api_version: string): Observable<MetricBaselinesResponse> {
			return this.http.get<MetricBaselinesResponse>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/microsoft.insights/metricBaselines&metricnames=' + (metricnames == null ? '' : encodeURIComponent(metricnames)) + '&metricnamespace=' + (metricnamespace == null ? '' : encodeURIComponent(metricnamespace)) + '&timespan=' + (timespan == null ? '' : encodeURIComponent(timespan)) + '&interval=' + (interval == null ? '' : encodeURIComponent(interval)) + '&aggregation=' + (aggregation == null ? '' : encodeURIComponent(aggregation)) + '&sensitivities=' + (sensitivities == null ? '' : encodeURIComponent(sensitivities)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&resultType=' + resultType + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}
	}

	export enum Baselines_ListResultType { Data = 'Data', Metadata = 'Metadata' }

}

