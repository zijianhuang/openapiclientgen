import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ApiError {

		/** Gets or sets the azure metrics error code */
		code?: string | null;

		/** Gets or sets the azure metrics error message */
		message?: string | null;
	}
	export interface ApiErrorFormProperties {

		/** Gets or sets the azure metrics error code */
		code: FormControl<string | null | undefined>,

		/** Gets or sets the azure metrics error message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateApiErrorFormGroup() {
		return new FormGroup<ApiErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiFailureResponse {
		error?: ApiError;
	}
	export interface ApiFailureResponseFormProperties {
	}
	export function CreateApiFailureResponseFormGroup() {
		return new FormGroup<ApiFailureResponseFormProperties>({
		});

	}

	export interface AzureMetricsBaseData {

		/** Gets or sets the list of dimension names (optional) */
		dimNames?: Array<string>;

		/**
		 * Gets or sets the Metric name
		 * Required
		 */
		metric: string;

		/**
		 * Gets or sets the Metric namespace
		 * Required
		 */
		namespace: string;

		/**
		 * Gets or sets the list of time series data for the metric (one per unique dimension combination)
		 * Required
		 */
		series: Array<AzureTimeSeriesData>;
	}
	export interface AzureMetricsBaseDataFormProperties {

		/**
		 * Gets or sets the Metric name
		 * Required
		 */
		metric: FormControl<string | null | undefined>,

		/**
		 * Gets or sets the Metric namespace
		 * Required
		 */
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateAzureMetricsBaseDataFormGroup() {
		return new FormGroup<AzureMetricsBaseDataFormProperties>({
			metric: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			namespace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AzureTimeSeriesData {

		/**
		 * Gets or sets Count value
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;

		/** Gets or sets dimension values */
		dimValues?: Array<string>;

		/**
		 * Gets or sets Max value
		 * Required
		 * Type: double
		 */
		max: number;

		/**
		 * Gets or sets Min value
		 * Required
		 * Type: double
		 */
		min: number;

		/**
		 * Gets or sets Sum value
		 * Required
		 * Type: double
		 */
		sum: number;
	}
	export interface AzureTimeSeriesDataFormProperties {

		/**
		 * Gets or sets Count value
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Gets or sets Max value
		 * Required
		 * Type: double
		 */
		max: FormControl<number | null | undefined>,

		/**
		 * Gets or sets Min value
		 * Required
		 * Type: double
		 */
		min: FormControl<number | null | undefined>,

		/**
		 * Gets or sets Sum value
		 * Required
		 * Type: double
		 */
		sum: FormControl<number | null | undefined>,
	}
	export function CreateAzureTimeSeriesDataFormGroup() {
		return new FormGroup<AzureTimeSeriesDataFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			max: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			min: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AzureMetricsData {

		/** Required */
		baseData: AzureMetricsBaseData;
	}
	export interface AzureMetricsDataFormProperties {
	}
	export function CreateAzureMetricsDataFormGroup() {
		return new FormGroup<AzureMetricsDataFormProperties>({
		});

	}

	export interface AzureMetricsDocument {

		/** Required */
		data: AzureMetricsData;

		/**
		 * Gets or sets Time property (in ISO 8601 format)
		 * Required
		 */
		time: string;
	}
	export interface AzureMetricsDocumentFormProperties {

		/**
		 * Gets or sets Time property (in ISO 8601 format)
		 * Required
		 */
		time: FormControl<string | null | undefined>,
	}
	export function CreateAzureMetricsDocumentFormGroup() {
		return new FormGroup<AzureMetricsDocumentFormProperties>({
			time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AzureMetricsResult {
		apiFailureResponse?: ApiFailureResponse;

		/**
		 * Http status code response
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;
	}
	export interface AzureMetricsResultFormProperties {

		/**
		 * Http status code response
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateAzureMetricsResultFormGroup() {
		return new FormGroup<AzureMetricsResultFormProperties>({
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * **Post the metric values for a resource**.
		 * Post subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProvider}/{resourceTypeName}/{resourceName}/metrics
		 * @param {string} subscriptionId The azure subscription id
		 * @param {string} resourceGroupName The ARM resource group name
		 * @param {string} resourceProvider The ARM resource provider name
		 * @param {string} resourceTypeName The ARM resource type name
		 * @param {string} resourceName The ARM resource name
		 * @param {AzureMetricsDocument} requestBody The Azure metrics document json payload
		 * @return {AzureMetricsResult} The azure metrics publish succeeded
		 */
		Metrics_Create(subscriptionId: string, resourceGroupName: string, resourceProvider: string, resourceTypeName: string, resourceName: string, requestBody: AzureMetricsDocument): Observable<AzureMetricsResult> {
			return this.http.post<AzureMetricsResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceProvider == null ? '' : encodeURIComponent(resourceProvider)) + '/' + (resourceTypeName == null ? '' : encodeURIComponent(resourceTypeName)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/metrics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

