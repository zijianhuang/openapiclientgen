import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The baseline values for a single sensitivity value. */
	export interface Baseline {

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
		 * The sensitivity of the baseline.
		 * Required
		 */
		sensitivity: BaselineSensitivity;
	}

	/** The baseline values for a single sensitivity value. */
	export interface BaselineFormProperties {

		/**
		 * The sensitivity of the baseline.
		 * Required
		 */
		sensitivity: FormControl<BaselineSensitivity | null | undefined>,
	}
	export function CreateBaselineFormGroup() {
		return new FormGroup<BaselineFormProperties>({
			sensitivity: new FormControl<BaselineSensitivity | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BaselineSensitivity { Low = 'Low', Medium = 'Medium', High = 'High' }


	/** Represents a baseline metadata value. */
	export interface BaselineMetadataValue {

		/** The localizable string class. */
		name?: LocalizableString;

		/** The value of the metadata. */
		value?: string | null;
	}

	/** Represents a baseline metadata value. */
	export interface BaselineMetadataValueFormProperties {

		/** The value of the metadata. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateBaselineMetadataValueFormGroup() {
		return new FormGroup<BaselineMetadataValueFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The baseline properties class. */
	export interface BaselineProperties {

		/** The aggregation type of the metric. */
		aggregation?: string | null;

		/** The baseline values for each sensitivity. */
		baseline?: Array<Baseline>;

		/** The interval (window size) for which the metric data was returned in.  This may be adjusted in the future and returned back from what was originally requested.  This is not present if a metadata request was made. */
		interval?: string | null;

		/** The baseline metadata values. */
		metadata?: Array<BaselineMetadataValue>;

		/** The timespan for which the data was retrieved. Its value consists of two datetimes concatenated, separated by '/'.  This may be adjusted in the future and returned back from what was originally requested. */
		timespan?: string | null;

		/** The array of timestamps of the baselines. */
		timestamps?: Array<string>;
	}

	/** The baseline properties class. */
	export interface BaselinePropertiesFormProperties {

		/** The aggregation type of the metric. */
		aggregation: FormControl<string | null | undefined>,

		/** The interval (window size) for which the metric data was returned in.  This may be adjusted in the future and returned back from what was originally requested.  This is not present if a metadata request was made. */
		interval: FormControl<string | null | undefined>,

		/** The timespan for which the data was retrieved. Its value consists of two datetimes concatenated, separated by '/'.  This may be adjusted in the future and returned back from what was originally requested. */
		timespan: FormControl<string | null | undefined>,
	}
	export function CreateBaselinePropertiesFormGroup() {
		return new FormGroup<BaselinePropertiesFormProperties>({
			aggregation: new FormControl<string | null | undefined>(undefined),
			interval: new FormControl<string | null | undefined>(undefined),
			timespan: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to a baseline query. */
	export interface BaselineResponse {

		/** The metric baseline ID. */
		id?: string | null;

		/** The localizable string class. */
		name?: LocalizableString;

		/** The baseline properties class. */
		properties?: BaselineProperties;

		/** The resource type of the baseline resource. */
		type?: string | null;
	}

	/** The response to a baseline query. */
	export interface BaselineResponseFormProperties {

		/** The metric baseline ID. */
		id: FormControl<string | null | undefined>,

		/** The resource type of the baseline resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateBaselineResponseFormGroup() {
		return new FormGroup<BaselineResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
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


	/** The localizable string class. */
	export interface LocalizableString {

		/** The locale specific value. */
		localizedValue?: string | null;

		/**
		 * The invariant value.
		 * Required
		 */
		value: string;
	}

	/** The localizable string class. */
	export interface LocalizableStringFormProperties {

		/** The locale specific value. */
		localizedValue: FormControl<string | null | undefined>,

		/**
		 * The invariant value.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateLocalizableStringFormGroup() {
		return new FormGroup<LocalizableStringFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * **Gets the baseline values for a resource**.
		 * Get {resourceUri}/providers/microsoft.insights/baseline
		 * @param {string} resourceUri The identifier of the resource. It has the following structure: subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}. For example: subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1
		 * @param {string} metricnames The names of the metrics (comma separated) to retrieve.
		 * @param {string} timespan The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'.
		 * @param {string} interval The interval (i.e. timegrain) of the query.
		 * @param {string} aggregation The aggregation type of the metric to retrieve the baseline for.
		 * @param {string} sensitivities The list of sensitivities (comma separated) to retrieve.
		 * @param {Baseline_GetResultType} resultType Allows retrieving only metadata of the baseline. On data request all information is retrieved.
		 * @param {string} api_version Client Api Version.
		 * @param {string} metricnamespace Metric namespace to query metric definitions for.
		 * @param {string} filter The **$filter** is used to describe a set of dimensions with their concrete values which produce a specific metric's time series, in which a baseline is requested for.
		 * @return {BaselineResponse} Successful request to get the list of metric values.
		 */
		Baseline_Get(resourceUri: string, metricnames: string | null | undefined, timespan: string | null | undefined, interval: string | null | undefined, aggregation: string | null | undefined, sensitivities: string | null | undefined, resultType: Baseline_GetResultType | null | undefined, api_version: string, metricnamespace: string | null | undefined, filter: string | null | undefined): Observable<BaselineResponse> {
			return this.http.get<BaselineResponse>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/microsoft.insights/baseline&metricnames=' + (metricnames == null ? '' : encodeURIComponent(metricnames)) + '&timespan=' + (timespan == null ? '' : encodeURIComponent(timespan)) + '&interval=' + (interval == null ? '' : encodeURIComponent(interval)) + '&aggregation=' + (aggregation == null ? '' : encodeURIComponent(aggregation)) + '&sensitivities=' + (sensitivities == null ? '' : encodeURIComponent(sensitivities)) + '&resultType=' + resultType + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&metricnamespace=' + (metricnamespace == null ? '' : encodeURIComponent(metricnamespace)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '', {});
		}

		/**
		 * **Gets the baseline values for a specific metric**.
		 * Get {resourceUri}/providers/microsoft.insights/baseline/{metricName}
		 * @param {string} resourceUri The identifier of the resource. It has the following structure: subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}. For example: subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1
		 * @param {string} metricName The name of the metric to retrieve the baseline for.
		 * @param {string} timespan The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'.
		 * @param {string} interval The interval (i.e. timegrain) of the query.
		 * @param {string} aggregation The aggregation type of the metric to retrieve the baseline for.
		 * @param {string} sensitivities The list of sensitivities (comma separated) to retrieve.
		 * @param {Baseline_GetResultType} resultType Allows retrieving only metadata of the baseline. On data request all information is retrieved.
		 * @param {string} api_version Client Api Version.
		 * @param {string} metricnamespace Metric namespace to query metric definitions for.
		 * @param {string} filter The **$filter** is used to describe a set of dimensions with their concrete values which produce a specific metric's time series, in which a baseline is requested for.
		 * @return {BaselineResponse} Successful request to get the list of metric values.
		 */
		MetricBaseline_Get(resourceUri: string, metricName: string, timespan: string | null | undefined, interval: string | null | undefined, aggregation: string | null | undefined, sensitivities: string | null | undefined, resultType: Baseline_GetResultType | null | undefined, api_version: string, metricnamespace: string | null | undefined, filter: string | null | undefined): Observable<BaselineResponse> {
			return this.http.get<BaselineResponse>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/microsoft.insights/baseline/' + (metricName == null ? '' : encodeURIComponent(metricName)) + '&timespan=' + (timespan == null ? '' : encodeURIComponent(timespan)) + '&interval=' + (interval == null ? '' : encodeURIComponent(interval)) + '&aggregation=' + (aggregation == null ? '' : encodeURIComponent(aggregation)) + '&sensitivities=' + (sensitivities == null ? '' : encodeURIComponent(sensitivities)) + '&resultType=' + resultType + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&metricnamespace=' + (metricnamespace == null ? '' : encodeURIComponent(metricnamespace)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '', {});
		}
	}

	export enum Baseline_GetResultType { Data = 'Data', Metadata = 'Metadata' }

}

