import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Aggregate type. */
	export enum AggregateType { None = 'None', Average = 'Average', Total = 'Total', Minimum = 'Minimum', Maximum = 'Maximum', Last = 'Last' }


	/** Contains the localized display information for this particular operation / action. */
	export interface Display {

		/** The localized friendly description for the operation, as it should be shown to the user. It should be thorough, yet concise – it will be used in tool tips and detailed views. */
		description?: string | null;

		/** The localized friendly name for the operation, as it should be shown to the user. */
		operation?: string | null;

		/** The localized friendly form of the resource provider name – it is expected to also include the publisher/company responsible. It should use Title Casing and begin with "Microsoft" for 1st party services. e.g. "Microsoft Monitoring Insights" or "Microsoft Compute." */
		provider?: string | null;

		/** The localized friendly form of the resource type related to this action/operation – it should match the public documentation for the resource provider. */
		resource?: string | null;
	}

	/** Contains the localized display information for this particular operation / action. */
	export interface DisplayFormProperties {

		/** The localized friendly description for the operation, as it should be shown to the user. It should be thorough, yet concise – it will be used in tool tips and detailed views. */
		description: FormControl<string | null | undefined>,

		/** The localized friendly name for the operation, as it should be shown to the user. */
		operation: FormControl<string | null | undefined>,

		/** The localized friendly form of the resource provider name – it is expected to also include the publisher/company responsible. It should use Title Casing and begin with "Microsoft" for 1st party services. e.g. "Microsoft Monitoring Insights" or "Microsoft Compute." */
		provider: FormControl<string | null | undefined>,

		/** The localized friendly form of the resource type related to this action/operation – it should match the public documentation for the resource provider. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateDisplayFormGroup() {
		return new FormGroup<DisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Current health status. */
	export enum HealthStatus { Unknown = 'Unknown', Healthy = 'Healthy', Warning = 'Warning', Critical = 'Critical' }


	/** Localizable string. */
	export interface LocalizableString {

		/** Localized value of the string. */
		localizedValue?: string | null;

		/** Value of the string. */
		value?: string | null;
	}

	/** Localizable string. */
	export interface LocalizableStringFormProperties {

		/** Localized value of the string. */
		localizedValue: FormControl<string | null | undefined>,

		/** Value of the string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateLocalizableStringFormGroup() {
		return new FormGroup<LocalizableStringFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metric information. */
	export interface Metric {

		/** Metric end time. */
		endTime?: Date | null;

		/** Metric unit. */
		metricUnit?: MetricMetricUnit | null;

		/** List of metric values. */
		metricValues?: Array<MetricValue>;

		/** Localizable string. */
		name?: LocalizableString;

		/** Metric start time. */
		startTime?: Date | null;

		/** Metric time grain. */
		timeGrain?: string | null;
	}

	/** Metric information. */
	export interface MetricFormProperties {

		/** Metric end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Metric unit. */
		metricUnit: FormControl<MetricMetricUnit | null | undefined>,

		/** Metric start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Metric time grain. */
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			metricUnit: new FormControl<MetricMetricUnit | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MetricMetricUnit { Count = 'Count', Bytes = 'Bytes', Seconds = 'Seconds', CountPerSecond = 'CountPerSecond', BytesPerSecond = 'BytesPerSecond' }


	/** Metric value. */
	export interface MetricValue {

		/**
		 * Average value of metric.
		 * Type: float
		 */
		average?: number | null;

		/**
		 * Count of metric values.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/**
		 * Maximum value of metric.
		 * Type: float
		 */
		maximum?: number | null;

		/**
		 * Minimum value of metric.
		 * Type: float
		 */
		minimum?: number | null;

		/** Metric value properties. */
		properties?: string | null;

		/** Timestamp of metric value. */
		timeStamp?: Date | null;

		/**
		 * Total value of metric.
		 * Type: float
		 */
		total?: number | null;
	}

	/** Metric value. */
	export interface MetricValueFormProperties {

		/**
		 * Average value of metric.
		 * Type: float
		 */
		average: FormControl<number | null | undefined>,

		/**
		 * Count of metric values.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Maximum value of metric.
		 * Type: float
		 */
		maximum: FormControl<number | null | undefined>,

		/**
		 * Minimum value of metric.
		 * Type: float
		 */
		minimum: FormControl<number | null | undefined>,

		/** Metric value properties. */
		properties: FormControl<string | null | undefined>,

		/** Timestamp of metric value. */
		timeStamp: FormControl<Date | null | undefined>,

		/**
		 * Total value of metric.
		 * Type: float
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateMetricValueFormGroup() {
		return new FormGroup<MetricValueFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
			timeStamp: new FormControl<Date | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metric availability. */
	export interface MetricAvailability {

		/** Retention of metric. */
		retention?: string | null;

		/** Time grain. */
		timeGrain?: string | null;
	}

	/** Metric availability. */
	export interface MetricAvailabilityFormProperties {

		/** Retention of metric. */
		retention: FormControl<string | null | undefined>,

		/** Time grain. */
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateMetricAvailabilityFormGroup() {
		return new FormGroup<MetricAvailabilityFormProperties>({
			retention: new FormControl<string | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metric definition. */
	export interface MetricDefinition {

		/** Metric availabilities. */
		metricAvailabilities?: Array<MetricAvailability>;

		/** Localizable string. */
		name?: LocalizableString;

		/** Aggregate type. */
		primaryAggregationType?: AggregateType | null;

		/** Metric unit. */
		unit?: MetricMetricUnit | null;
	}

	/** Metric definition. */
	export interface MetricDefinitionFormProperties {

		/** Aggregate type. */
		primaryAggregationType: FormControl<AggregateType | null | undefined>,

		/** Metric unit. */
		unit: FormControl<MetricMetricUnit | null | undefined>,
	}
	export function CreateMetricDefinitionFormGroup() {
		return new FormGroup<MetricDefinitionFormProperties>({
			primaryAggregationType: new FormControl<AggregateType | null | undefined>(undefined),
			unit: new FormControl<MetricMetricUnit | null | undefined>(undefined),
		});

	}


	/** Pageable list of metric definitions. */
	export interface MetricDefinitionList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of metric definitions. */
		value?: Array<MetricDefinition>;
	}

	/** Pageable list of metric definitions. */
	export interface MetricDefinitionListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateMetricDefinitionListFormGroup() {
		return new FormGroup<MetricDefinitionListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pageable list of metrics. */
	export interface MetricList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of metrics. */
		value?: Array<Metric>;
	}

	/** Pageable list of metrics. */
	export interface MetricListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateMetricListFormGroup() {
		return new FormGroup<MetricListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metric unit. */
	export enum MetricUnit { Count = 'Count', Bytes = 'Bytes', Seconds = 'Seconds', CountPerSecond = 'CountPerSecond', BytesPerSecond = 'BytesPerSecond' }


	/** Describes the supported REST operation. */
	export interface Operation {

		/** Contains the localized display information for this particular operation / action. */
		display?: Display;

		/** The name of the operation being performed on this particular object. It should match the action name that appears in RBAC / the event service. */
		name?: string | null;
	}

	/** Describes the supported REST operation. */
	export interface OperationFormProperties {

		/** The name of the operation being performed on this particular object. It should match the action name that appears in RBAC / the event service. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pageable list of supported operations. */
	export interface OperationList {

		/** URI to the next page of operations. */
		nextLink?: string | null;

		/** List of operations */
		value?: Array<Operation>;
	}

	/** Pageable list of supported operations. */
	export interface OperationListFormProperties {

		/** URI to the next page of operations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListFormGroup() {
		return new FormGroup<OperationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Base resource object. */
	export interface Resource {

		/** Resource ID. */
		id?: string | null;

		/** Resource location. */
		location?: string | null;

		/** Resource Name. */
		name?: string | null;

		/** Resource tags. */
		tags?: {[id: string]: string };

		/** Resource type. */
		type?: string | null;
	}

	/** Base resource object. */
	export interface ResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource location. */
		location: FormControl<string | null | undefined>,

		/** Resource Name. */
		name: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Storage service. */
	export interface Service {

		/** Current health status. */
		healthStatus?: HealthStatus | null;

		/** Storage service version. */
		version?: string | null;
	}

	/** Storage service. */
	export interface ServiceFormProperties {

		/** Current health status. */
		healthStatus: FormControl<HealthStatus | null | undefined>,

		/** Storage service version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			healthStatus: new FormControl<HealthStatus | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings of storage services. */
	export interface WritableServiceSettings {

		/**
		 * The HTTP port of the storage service front end.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndHttpListenPort?: number | null;

		/**
		 * The HTTPs port of the storage service front end.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndHttpsListenPort?: number | null;
	}

	/** Settings of storage services. */
	export interface WritableServiceSettingsFormProperties {

		/**
		 * The HTTP port of the storage service front end.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndHttpListenPort: FormControl<number | null | undefined>,

		/**
		 * The HTTPs port of the storage service front end.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndHttpsListenPort: FormControl<number | null | undefined>,
	}
	export function CreateWritableServiceSettingsFormGroup() {
		return new FormGroup<WritableServiceSettingsFormProperties>({
			frontEndHttpListenPort: new FormControl<number | null | undefined>(undefined),
			frontEndHttpsListenPort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Storage service settings. */
	export interface WritableSettings {

		/**
		 * Front end callback threads count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndCallbackThreadsCount?: number | null;

		/**
		 * Interval (in second) of CPU monitor for front end CPU based keep-alive throttling.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndCpuBasedKeepAliveThrottlingCpuMonitorIntervalInSeconds?: number | null;

		/** Switch of front end CPU based keep-alive throttling. */
		frontEndCpuBasedKeepAliveThrottlingEnabled?: boolean | null;

		/**
		 * Threshold (% percentage) of front end CPU based keep-alive throttling.
		 * Type: float
		 */
		frontEndCpuBasedKeepAliveThrottlingPercentCpuThreshold?: number | null;

		/**
		 * Threshold (% percentage) of requests to throttle in front end CPU based keep-alive throttling.
		 * Type: float
		 */
		frontEndCpuBasedKeepAliveThrottlingPercentRequestsToThrottle?: number | null;

		/**
		 * Maximum interval (in millisecond) between memory samples of front end.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndMaxMillisecondsBetweenMemorySamples?: number | null;

		/** Front end memory throttle threshold settings. */
		frontEndMemoryThrottleThresholdSettings?: string | null;

		/** Switch of front end memory throttling. */
		frontEndMemoryThrottlingEnabled?: boolean | null;

		/**
		 * Front end minimum number of threads in thread pool.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndMinThreadPoolThreads?: number | null;

		/**
		 * Threshold of front end thread pool based keep-alive IO completion.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndThreadPoolBasedKeepAliveIOCompletionThreshold?: number | null;

		/**
		 * Monitor interval (in seconds) of front end thread pool based keep-alive monitor.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndThreadPoolBasedKeepAliveMonitorIntervalInSeconds?: number | null;

		/**
		 * Percentage (%) of front end thread pool based keep-alive.
		 * Type: float
		 */
		frontEndThreadPoolBasedKeepAlivePercentage?: number | null;

		/**
		 * Threshold of front end thread pool based keep-alive worker thread.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndThreadPoolBasedKeepAliveWorkerThreadThreshold?: number | null;

		/** Switch of whether front end uses SLA time in availability. */
		frontEndUseSlaTimeInAvailability?: boolean | null;
	}

	/** Storage service settings. */
	export interface WritableSettingsFormProperties {

		/**
		 * Front end callback threads count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndCallbackThreadsCount: FormControl<number | null | undefined>,

		/**
		 * Interval (in second) of CPU monitor for front end CPU based keep-alive throttling.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndCpuBasedKeepAliveThrottlingCpuMonitorIntervalInSeconds: FormControl<number | null | undefined>,

		/** Switch of front end CPU based keep-alive throttling. */
		frontEndCpuBasedKeepAliveThrottlingEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Threshold (% percentage) of front end CPU based keep-alive throttling.
		 * Type: float
		 */
		frontEndCpuBasedKeepAliveThrottlingPercentCpuThreshold: FormControl<number | null | undefined>,

		/**
		 * Threshold (% percentage) of requests to throttle in front end CPU based keep-alive throttling.
		 * Type: float
		 */
		frontEndCpuBasedKeepAliveThrottlingPercentRequestsToThrottle: FormControl<number | null | undefined>,

		/**
		 * Maximum interval (in millisecond) between memory samples of front end.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndMaxMillisecondsBetweenMemorySamples: FormControl<number | null | undefined>,

		/** Front end memory throttle threshold settings. */
		frontEndMemoryThrottleThresholdSettings: FormControl<string | null | undefined>,

		/** Switch of front end memory throttling. */
		frontEndMemoryThrottlingEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Front end minimum number of threads in thread pool.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndMinThreadPoolThreads: FormControl<number | null | undefined>,

		/**
		 * Threshold of front end thread pool based keep-alive IO completion.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndThreadPoolBasedKeepAliveIOCompletionThreshold: FormControl<number | null | undefined>,

		/**
		 * Monitor interval (in seconds) of front end thread pool based keep-alive monitor.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndThreadPoolBasedKeepAliveMonitorIntervalInSeconds: FormControl<number | null | undefined>,

		/**
		 * Percentage (%) of front end thread pool based keep-alive.
		 * Type: float
		 */
		frontEndThreadPoolBasedKeepAlivePercentage: FormControl<number | null | undefined>,

		/**
		 * Threshold of front end thread pool based keep-alive worker thread.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndThreadPoolBasedKeepAliveWorkerThreadThreshold: FormControl<number | null | undefined>,

		/** Switch of whether front end uses SLA time in availability. */
		frontEndUseSlaTimeInAvailability: FormControl<boolean | null | undefined>,
	}
	export function CreateWritableSettingsFormGroup() {
		return new FormGroup<WritableSettingsFormProperties>({
			frontEndCallbackThreadsCount: new FormControl<number | null | undefined>(undefined),
			frontEndCpuBasedKeepAliveThrottlingCpuMonitorIntervalInSeconds: new FormControl<number | null | undefined>(undefined),
			frontEndCpuBasedKeepAliveThrottlingEnabled: new FormControl<boolean | null | undefined>(undefined),
			frontEndCpuBasedKeepAliveThrottlingPercentCpuThreshold: new FormControl<number | null | undefined>(undefined),
			frontEndCpuBasedKeepAliveThrottlingPercentRequestsToThrottle: new FormControl<number | null | undefined>(undefined),
			frontEndMaxMillisecondsBetweenMemorySamples: new FormControl<number | null | undefined>(undefined),
			frontEndMemoryThrottleThresholdSettings: new FormControl<string | null | undefined>(undefined),
			frontEndMemoryThrottlingEnabled: new FormControl<boolean | null | undefined>(undefined),
			frontEndMinThreadPoolThreads: new FormControl<number | null | undefined>(undefined),
			frontEndThreadPoolBasedKeepAliveIOCompletionThreshold: new FormControl<number | null | undefined>(undefined),
			frontEndThreadPoolBasedKeepAliveMonitorIntervalInSeconds: new FormControl<number | null | undefined>(undefined),
			frontEndThreadPoolBasedKeepAlivePercentage: new FormControl<number | null | undefined>(undefined),
			frontEndThreadPoolBasedKeepAliveWorkerThreadThreshold: new FormControl<number | null | undefined>(undefined),
			frontEndUseSlaTimeInAvailability: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get the list of support rest operations.
		 * Get providers/Microsoft.Storage.Admin/operations
		 * @param {string} api_version REST Api Version.
		 * @return {OperationList} OK -- The list of operations has been returned.
		 */
		Operations_List(api_version: string): Observable<OperationList> {
			return this.http.get<OperationList>(this.baseUri + 'providers/Microsoft.Storage.Admin/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

