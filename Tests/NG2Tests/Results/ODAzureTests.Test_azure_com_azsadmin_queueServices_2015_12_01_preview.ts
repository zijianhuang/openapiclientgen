import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Queue service. */
	export interface QueueService {

		/** Queue service properties. */
		properties?: QueueServiceProperties;
	}

	/** Queue service. */
	export interface QueueServiceFormProperties {
	}
	export function CreateQueueServiceFormGroup() {
		return new FormGroup<QueueServiceFormProperties>({
		});

	}


	/** Queue service properties. */
	export interface QueueServiceProperties {

		/** Settings of storage services. */
		settings?: QueueServicePropertiesSettings;
	}

	/** Queue service properties. */
	export interface QueueServicePropertiesFormProperties {
	}
	export function CreateQueueServicePropertiesFormGroup() {
		return new FormGroup<QueueServicePropertiesFormProperties>({
		});

	}

	export interface QueueServicePropertiesSettings {

		/** The HTTP port of the storage service front end. */
		frontEndHttpListenPort?: number | null;

		/** The HTTPs port of the storage service front end. */
		frontEndHttpsListenPort?: number | null;
	}
	export interface QueueServicePropertiesSettingsFormProperties {

		/** The HTTP port of the storage service front end. */
		frontEndHttpListenPort: FormControl<number | null | undefined>,

		/** The HTTPs port of the storage service front end. */
		frontEndHttpsListenPort: FormControl<number | null | undefined>,
	}
	export function CreateQueueServicePropertiesSettingsFormGroup() {
		return new FormGroup<QueueServicePropertiesSettingsFormProperties>({
			frontEndHttpListenPort: new FormControl<number | null | undefined>(undefined),
			frontEndHttpsListenPort: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the queue service.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/queueservices/{serviceType}
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {QueueServices_GetServiceType} serviceType The service type.
		 * @param {string} api_version REST Api Version.
		 * @return {QueueService} OK -- Queue service has been returned.
		 */
		QueueServices_Get(subscriptionId: string, resourceGroupName: string, farmId: string, serviceType: QueueServices_GetServiceType, api_version: string): Observable<QueueService> {
			return this.http.get<QueueService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '/queueservices/' + serviceType + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a list of metric definitions for queue service.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/queueservices/{serviceType}/metricdefinitions
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {QueueServices_GetServiceType} serviceType The service type.
		 * @param {string} api_version REST Api Version.
		 * @return {QueueServices_ListMetricDefinitionsReturn} OK -- The list of metric definitions has been returned.
		 */
		QueueServices_ListMetricDefinitions(subscriptionId: string, resourceGroupName: string, farmId: string, serviceType: QueueServices_GetServiceType, api_version: string): Observable<QueueServices_ListMetricDefinitionsReturn> {
			return this.http.get<QueueServices_ListMetricDefinitionsReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '/queueservices/' + serviceType + '/metricdefinitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a list of metrics for the queue service.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/queueservices/{serviceType}/metrics
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {QueueServices_GetServiceType} serviceType The service type.
		 * @param {string} api_version REST Api Version.
		 * @return {QueueServices_ListMetricsReturn} OK -- The list of metrics has been returned.
		 */
		QueueServices_ListMetrics(subscriptionId: string, resourceGroupName: string, farmId: string, serviceType: QueueServices_GetServiceType, api_version: string): Observable<QueueServices_ListMetricsReturn> {
			return this.http.get<QueueServices_ListMetricsReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '/queueservices/' + serviceType + '/metrics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export enum QueueServices_GetServiceType { default = 0 }

	export interface QueueServices_ListMetricDefinitionsReturn {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of metric definitions. */
		QueueServices_ListMetricDefinitionsReturnValue?: Array<QueueServices_ListMetricDefinitionsReturnValue>;
	}
	export interface QueueServices_ListMetricDefinitionsReturnFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateQueueServices_ListMetricDefinitionsReturnFormGroup() {
		return new FormGroup<QueueServices_ListMetricDefinitionsReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueueServices_ListMetricDefinitionsReturnValue {

		/** Metric availabilities. */
		QueueServices_ListMetricDefinitionsReturnValueMetricAvailabilities?: Array<QueueServices_ListMetricDefinitionsReturnValueMetricAvailabilities>;

		/** Localizable string. */
		name?: QueueServices_ListMetricDefinitionsReturnName;

		/** Aggregate type. */
		primaryAggregationType?: QueueServices_ListMetricDefinitionsReturnValuePrimaryAggregationType | null;

		/** Metric unit. */
		unit?: QueueServices_ListMetricDefinitionsReturnValueUnit | null;
	}
	export interface QueueServices_ListMetricDefinitionsReturnValueFormProperties {

		/** Aggregate type. */
		primaryAggregationType: FormControl<QueueServices_ListMetricDefinitionsReturnValuePrimaryAggregationType | null | undefined>,

		/** Metric unit. */
		unit: FormControl<QueueServices_ListMetricDefinitionsReturnValueUnit | null | undefined>,
	}
	export function CreateQueueServices_ListMetricDefinitionsReturnValueFormGroup() {
		return new FormGroup<QueueServices_ListMetricDefinitionsReturnValueFormProperties>({
			primaryAggregationType: new FormControl<QueueServices_ListMetricDefinitionsReturnValuePrimaryAggregationType | null | undefined>(undefined),
			unit: new FormControl<QueueServices_ListMetricDefinitionsReturnValueUnit | null | undefined>(undefined),
		});

	}

	export interface QueueServices_ListMetricDefinitionsReturnValueMetricAvailabilities {

		/** Retention of metric. */
		retention?: string | null;

		/** Time grain. */
		timeGrain?: string | null;
	}
	export interface QueueServices_ListMetricDefinitionsReturnValueMetricAvailabilitiesFormProperties {

		/** Retention of metric. */
		retention: FormControl<string | null | undefined>,

		/** Time grain. */
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateQueueServices_ListMetricDefinitionsReturnValueMetricAvailabilitiesFormGroup() {
		return new FormGroup<QueueServices_ListMetricDefinitionsReturnValueMetricAvailabilitiesFormProperties>({
			retention: new FormControl<string | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueueServices_ListMetricDefinitionsReturnName {

		/** Localized value of the string. */
		localizedValue?: string | null;

		/** Value of the string. */
		value?: string | null;
	}
	export interface QueueServices_ListMetricDefinitionsReturnNameFormProperties {

		/** Localized value of the string. */
		localizedValue: FormControl<string | null | undefined>,

		/** Value of the string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateQueueServices_ListMetricDefinitionsReturnNameFormGroup() {
		return new FormGroup<QueueServices_ListMetricDefinitionsReturnNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QueueServices_ListMetricDefinitionsReturnValuePrimaryAggregationType { None = 0, Average = 1, Total = 2, Minimum = 3, Maximum = 4, Last = 5 }

	export enum QueueServices_ListMetricDefinitionsReturnValueUnit { Count = 0, Bytes = 1, Seconds = 2, CountPerSecond = 3, BytesPerSecond = 4 }

	export interface QueueServices_ListMetricsReturn {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of metrics. */
		QueueServices_ListMetricsReturnValue?: Array<QueueServices_ListMetricsReturnValue>;
	}
	export interface QueueServices_ListMetricsReturnFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateQueueServices_ListMetricsReturnFormGroup() {
		return new FormGroup<QueueServices_ListMetricsReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueueServices_ListMetricsReturnValue {

		/** Metric end time. */
		endTime?: Date | null;

		/** Metric unit. */
		metricUnit?: QueueServices_ListMetricDefinitionsReturnValueUnit | null;

		/** List of metric values. */
		QueueServices_ListMetricsReturnValueMetricValues?: Array<QueueServices_ListMetricsReturnValueMetricValues>;

		/** Localizable string. */
		name?: QueueServices_ListMetricsReturnName;

		/** Metric start time. */
		startTime?: Date | null;

		/** Metric time grain. */
		timeGrain?: string | null;
	}
	export interface QueueServices_ListMetricsReturnValueFormProperties {

		/** Metric end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Metric unit. */
		metricUnit: FormControl<QueueServices_ListMetricDefinitionsReturnValueUnit | null | undefined>,

		/** Metric start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Metric time grain. */
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateQueueServices_ListMetricsReturnValueFormGroup() {
		return new FormGroup<QueueServices_ListMetricsReturnValueFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			metricUnit: new FormControl<QueueServices_ListMetricDefinitionsReturnValueUnit | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueueServices_ListMetricsReturnValueMetricValues {

		/** Average value of metric. */
		average?: number | null;

		/** Count of metric values. */
		count?: number | null;

		/** Maximum value of metric. */
		maximum?: number | null;

		/** Minimum value of metric. */
		minimum?: number | null;

		/** Metric value properties. */
		properties?: string | null;

		/** Timestamp of metric value. */
		timeStamp?: Date | null;

		/** Total value of metric. */
		total?: number | null;
	}
	export interface QueueServices_ListMetricsReturnValueMetricValuesFormProperties {

		/** Average value of metric. */
		average: FormControl<number | null | undefined>,

		/** Count of metric values. */
		count: FormControl<number | null | undefined>,

		/** Maximum value of metric. */
		maximum: FormControl<number | null | undefined>,

		/** Minimum value of metric. */
		minimum: FormControl<number | null | undefined>,

		/** Metric value properties. */
		properties: FormControl<string | null | undefined>,

		/** Timestamp of metric value. */
		timeStamp: FormControl<Date | null | undefined>,

		/** Total value of metric. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateQueueServices_ListMetricsReturnValueMetricValuesFormGroup() {
		return new FormGroup<QueueServices_ListMetricsReturnValueMetricValuesFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
			timeStamp: new FormControl<Date | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QueueServices_ListMetricsReturnName {

		/** Localized value of the string. */
		localizedValue?: string | null;

		/** Value of the string. */
		value?: string | null;
	}
	export interface QueueServices_ListMetricsReturnNameFormProperties {

		/** Localized value of the string. */
		localizedValue: FormControl<string | null | undefined>,

		/** Value of the string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateQueueServices_ListMetricsReturnNameFormGroup() {
		return new FormGroup<QueueServices_ListMetricsReturnNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

}

