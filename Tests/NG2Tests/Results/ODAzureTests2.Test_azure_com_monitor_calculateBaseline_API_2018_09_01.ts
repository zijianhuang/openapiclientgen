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

	export enum BaselineSensitivity { Low = 0, Medium = 1, High = 2 }


	/** The response to a calculate baseline call. */
	export interface CalculateBaselineResponse {

		/**
		 * The baseline values for each sensitivity.
		 * Required
		 */
		baseline: Array<Baseline>;

		/** The array of timestamps of the baselines. */
		timestamps?: Array<string>;

		/**
		 * The resource type of the baseline resource.
		 * Required
		 */
		type: string;
	}

	/** The response to a calculate baseline call. */
	export interface CalculateBaselineResponseFormProperties {

		/**
		 * The resource type of the baseline resource.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCalculateBaselineResponseFormGroup() {
		return new FormGroup<CalculateBaselineResponseFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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


	/** The time series info needed for calculating the baseline. */
	export interface TimeSeriesInformation {

		/**
		 * The list of sensitivities for calculating the baseline.
		 * Required
		 */
		sensitivities: Array<string>;

		/** The array of timestamps of the baselines. */
		timestamps?: Array<string>;

		/**
		 * The metric values to calculate the baseline.
		 * Required
		 */
		values: Array<number>;
	}

	/** The time series info needed for calculating the baseline. */
	export interface TimeSeriesInformationFormProperties {
	}
	export function CreateTimeSeriesInformationFormGroup() {
		return new FormGroup<TimeSeriesInformationFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * **Lists the baseline values for a resource**.
		 * Post {resourceUri}/providers/microsoft.insights/calculatebaseline
		 * @param {string} resourceUri The identifier of the resource. It has the following structure: subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}. For example: subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1
		 * @param {string} api_version Client Api Version.
		 * @param {TimeSeriesInformation} requestBody Information that need to be specified to calculate a baseline on a time series.
		 * @return {CalculateBaselineResponse} Successful request to get the list of metric values.
		 */
		MetricBaseline_CalculateBaseline(resourceUri: string, api_version: string, requestBody: TimeSeriesInformation): Observable<CalculateBaselineResponse> {
			return this.http.post<CalculateBaselineResponse>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/microsoft.insights/calculatebaseline&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

