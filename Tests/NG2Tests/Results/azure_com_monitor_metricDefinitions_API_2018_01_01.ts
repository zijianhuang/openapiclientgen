import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** the aggregation type of the metric. */
	export enum AggregationType { None = 0, Average = 1, Count = 2, Minimum = 3, Maximum = 4, Total = 5 }


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

		/** the locale specific value. */
		localizedValue?: string | null;

		/**
		 * the invariant value.
		 * Required
		 */
		value: string;
	}

	/** The localizable string class. */
	export interface LocalizableStringFormProperties {

		/** the locale specific value. */
		localizedValue: FormControl<string | null | undefined>,

		/**
		 * the invariant value.
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


	/** Metric availability specifies the time grain (aggregation interval or frequency) and the retention period for that time grain. */
	export interface MetricAvailability {

		/** the retention period for the metric at the specified timegrain.  Expressed as a duration 'PT1M', 'P1D', etc. */
		retention?: string | null;

		/** the time grain specifies the aggregation interval for the metric. Expressed as a duration 'PT1M', 'P1D', etc. */
		timeGrain?: string | null;
	}

	/** Metric availability specifies the time grain (aggregation interval or frequency) and the retention period for that time grain. */
	export interface MetricAvailabilityFormProperties {

		/** the retention period for the metric at the specified timegrain.  Expressed as a duration 'PT1M', 'P1D', etc. */
		retention: FormControl<string | null | undefined>,

		/** the time grain specifies the aggregation interval for the metric. Expressed as a duration 'PT1M', 'P1D', etc. */
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateMetricAvailabilityFormGroup() {
		return new FormGroup<MetricAvailabilityFormProperties>({
			retention: new FormControl<string | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metric definition class specifies the metadata for a metric. */
	export interface MetricDefinition {

		/** the name and the display name of the dimension, i.e. it is a localizable string. */
		dimensions?: Array<LocalizableString>;

		/** the resource identifier of the metric definition. */
		id?: string | null;

		/** Flag to indicate whether the dimension is required. */
		isDimensionRequired?: boolean | null;

		/** the collection of what aggregation intervals are available to be queried. */
		metricAvailabilities?: Array<MetricAvailability>;

		/** The localizable string class. */
		name?: LocalizableString;

		/** the namespace the metric belongs to. */
		namespace?: string | null;

		/** the aggregation type of the metric. */
		primaryAggregationType?: AggregationType | null;

		/** the resource identifier of the resource that emitted the metric. */
		resourceId?: string | null;

		/** the collection of what aggregation types are supported. */
		supportedAggregationTypes?: Array<AggregationType>;

		/** the unit of the metric. */
		unit?: MetricDefinitionUnit | null;
	}

	/** Metric definition class specifies the metadata for a metric. */
	export interface MetricDefinitionFormProperties {

		/** the resource identifier of the metric definition. */
		id: FormControl<string | null | undefined>,

		/** Flag to indicate whether the dimension is required. */
		isDimensionRequired: FormControl<boolean | null | undefined>,

		/** the namespace the metric belongs to. */
		namespace: FormControl<string | null | undefined>,

		/** the aggregation type of the metric. */
		primaryAggregationType: FormControl<AggregationType | null | undefined>,

		/** the resource identifier of the resource that emitted the metric. */
		resourceId: FormControl<string | null | undefined>,

		/** the unit of the metric. */
		unit: FormControl<MetricDefinitionUnit | null | undefined>,
	}
	export function CreateMetricDefinitionFormGroup() {
		return new FormGroup<MetricDefinitionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			isDimensionRequired: new FormControl<boolean | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			primaryAggregationType: new FormControl<AggregationType | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<MetricDefinitionUnit | null | undefined>(undefined),
		});

	}

	export enum MetricDefinitionUnit { Count = 0, Bytes = 1, Seconds = 2, CountPerSecond = 3, BytesPerSecond = 4, Percent = 5, MilliSeconds = 6, ByteSeconds = 7, Unspecified = 8, Cores = 9, MilliCores = 10, NanoCores = 11, BitsPerSecond = 12 }


	/** Represents collection of metric definitions. */
	export interface MetricDefinitionCollection {

		/**
		 * the values for the metric definitions.
		 * Required
		 */
		value: Array<MetricDefinition>;
	}

	/** Represents collection of metric definitions. */
	export interface MetricDefinitionCollectionFormProperties {
	}
	export function CreateMetricDefinitionCollectionFormGroup() {
		return new FormGroup<MetricDefinitionCollectionFormProperties>({
		});

	}


	/** the unit of the metric. */
	export enum Unit { Count = 0, Bytes = 1, Seconds = 2, CountPerSecond = 3, BytesPerSecond = 4, Percent = 5, MilliSeconds = 6, ByteSeconds = 7, Unspecified = 8, Cores = 9, MilliCores = 10, NanoCores = 11, BitsPerSecond = 12 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the metric definitions for the resource.
		 * Get {resourceUri}/providers/microsoft.insights/metricDefinitions
		 * @param {string} resourceUri The identifier of the resource.
		 * @param {string} api_version Client Api Version.
		 * @param {string} metricnamespace Metric namespace to query metric definitions for.
		 * @return {MetricDefinitionCollection} Successful request to get the list of metric definitions
		 */
		MetricDefinitions_List(resourceUri: string, api_version: string, metricnamespace: string | null | undefined): Observable<MetricDefinitionCollection> {
			return this.http.get<MetricDefinitionCollection>(this.baseUri + (resourceUri == null ? '' : encodeURIComponent(resourceUri)) + '/providers/microsoft.insights/metricDefinitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&metricnamespace=' + (metricnamespace == null ? '' : encodeURIComponent(metricnamespace)) + '', {});
		}
	}

}

