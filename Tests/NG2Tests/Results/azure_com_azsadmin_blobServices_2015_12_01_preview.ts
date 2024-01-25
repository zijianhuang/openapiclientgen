import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The BLOB service. */
	export interface BlobService {

		/** Blob service properties. */
		properties?: BlobServiceProperties;
	}

	/** The BLOB service. */
	export interface BlobServiceFormProperties {
	}
	export function CreateBlobServiceFormGroup() {
		return new FormGroup<BlobServiceFormProperties>({
		});

	}


	/** Blob service properties. */
	export interface BlobServiceProperties {

		/** Blob service settings. */
		settings?: BlobServiceSettings;
	}

	/** Blob service properties. */
	export interface BlobServicePropertiesFormProperties {
	}
	export function CreateBlobServicePropertiesFormGroup() {
		return new FormGroup<BlobServicePropertiesFormProperties>({
		});

	}


	/** Blob service settings. */
	export interface BlobServiceSettings {
	}

	/** Blob service settings. */
	export interface BlobServiceSettingsFormProperties {
	}
	export function CreateBlobServiceSettingsFormGroup() {
		return new FormGroup<BlobServiceSettingsFormProperties>({
		});

	}


	/** Settings of BLOB service. */
	export interface BlobServiceWritableSettings {

		/** The interval, in seconds, of container garbage collection. */
		blobSvcContainerGcInterval?: number | null;

		/** The interval ,in seconds, of shallow garbage collection. */
		blobSvcShallowGcInterval?: number | null;

		/** The minimal container occupancy percent for stream mapping. */
		blobSvcStreamMapMinContainerOccupancyPercent?: number | null;
	}

	/** Settings of BLOB service. */
	export interface BlobServiceWritableSettingsFormProperties {

		/** The interval, in seconds, of container garbage collection. */
		blobSvcContainerGcInterval: FormControl<number | null | undefined>,

		/** The interval ,in seconds, of shallow garbage collection. */
		blobSvcShallowGcInterval: FormControl<number | null | undefined>,

		/** The minimal container occupancy percent for stream mapping. */
		blobSvcStreamMapMinContainerOccupancyPercent: FormControl<number | null | undefined>,
	}
	export function CreateBlobServiceWritableSettingsFormGroup() {
		return new FormGroup<BlobServiceWritableSettingsFormProperties>({
			blobSvcContainerGcInterval: new FormControl<number | null | undefined>(undefined),
			blobSvcShallowGcInterval: new FormControl<number | null | undefined>(undefined),
			blobSvcStreamMapMinContainerOccupancyPercent: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the BLOB service.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/blobservices/{serviceType}
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {BlobServices_GetServiceType} serviceType The service type.
		 * @param {string} api_version REST Api Version.
		 * @return {BlobService} OK -- The BLOB service has been returned.
		 */
		BlobServices_Get(subscriptionId: string, resourceGroupName: string, farmId: string, serviceType: BlobServices_GetServiceType, api_version: string): Observable<BlobService> {
			return this.http.get<BlobService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '/blobservices/' + serviceType + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the list of metric definitions for BLOB service.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/blobservices/{serviceType}/metricdefinitions
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {BlobServices_GetServiceType} serviceType The service type.
		 * @param {string} api_version REST Api Version.
		 * @return {BlobServices_ListMetricDefinitionsReturn} OK -- The list of metric definitions for the BLOB service has been returned.
		 */
		BlobServices_ListMetricDefinitions(subscriptionId: string, resourceGroupName: string, farmId: string, serviceType: BlobServices_GetServiceType, api_version: string): Observable<BlobServices_ListMetricDefinitionsReturn> {
			return this.http.get<BlobServices_ListMetricDefinitionsReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '/blobservices/' + serviceType + '/metricdefinitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a list of metrics for BLOB service.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/blobservices/{serviceType}/metrics
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {BlobServices_GetServiceType} serviceType The service type.
		 * @param {string} api_version REST Api Version.
		 * @return {BlobServices_ListMetricsReturn} OK -- The list of metrics has been returned.
		 */
		BlobServices_ListMetrics(subscriptionId: string, resourceGroupName: string, farmId: string, serviceType: BlobServices_GetServiceType, api_version: string): Observable<BlobServices_ListMetricsReturn> {
			return this.http.get<BlobServices_ListMetricsReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '/blobservices/' + serviceType + '/metrics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export enum BlobServices_GetServiceType { default = 0 }

	export interface BlobServices_ListMetricDefinitionsReturn {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of metric definitions. */
		BlobServices_ListMetricDefinitionsReturnValue?: Array<BlobServices_ListMetricDefinitionsReturnValue>;
	}
	export interface BlobServices_ListMetricDefinitionsReturnFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateBlobServices_ListMetricDefinitionsReturnFormGroup() {
		return new FormGroup<BlobServices_ListMetricDefinitionsReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BlobServices_ListMetricDefinitionsReturnValue {

		/** Metric availabilities. */
		BlobServices_ListMetricDefinitionsReturnValueMetricAvailabilities?: Array<BlobServices_ListMetricDefinitionsReturnValueMetricAvailabilities>;

		/** Localizable string. */
		name?: BlobServices_ListMetricDefinitionsReturnValueName;

		/** Aggregate type. */
		primaryAggregationType?: BlobServices_ListMetricDefinitionsReturnValuePrimaryAggregationType | null;

		/** Metric unit. */
		unit?: BlobServices_ListMetricDefinitionsReturnValueUnit | null;
	}
	export interface BlobServices_ListMetricDefinitionsReturnValueFormProperties {

		/** Aggregate type. */
		primaryAggregationType: FormControl<BlobServices_ListMetricDefinitionsReturnValuePrimaryAggregationType | null | undefined>,

		/** Metric unit. */
		unit: FormControl<BlobServices_ListMetricDefinitionsReturnValueUnit | null | undefined>,
	}
	export function CreateBlobServices_ListMetricDefinitionsReturnValueFormGroup() {
		return new FormGroup<BlobServices_ListMetricDefinitionsReturnValueFormProperties>({
			primaryAggregationType: new FormControl<BlobServices_ListMetricDefinitionsReturnValuePrimaryAggregationType | null | undefined>(undefined),
			unit: new FormControl<BlobServices_ListMetricDefinitionsReturnValueUnit | null | undefined>(undefined),
		});

	}

	export interface BlobServices_ListMetricDefinitionsReturnValueMetricAvailabilities {

		/** Retention of metric. */
		retention?: string | null;

		/** Time grain. */
		timeGrain?: string | null;
	}
	export interface BlobServices_ListMetricDefinitionsReturnValueMetricAvailabilitiesFormProperties {

		/** Retention of metric. */
		retention: FormControl<string | null | undefined>,

		/** Time grain. */
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateBlobServices_ListMetricDefinitionsReturnValueMetricAvailabilitiesFormGroup() {
		return new FormGroup<BlobServices_ListMetricDefinitionsReturnValueMetricAvailabilitiesFormProperties>({
			retention: new FormControl<string | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BlobServices_ListMetricDefinitionsReturnValueName {

		/** Localized value of the string. */
		localizedValue?: string | null;

		/** Value of the string. */
		value?: string | null;
	}
	export interface BlobServices_ListMetricDefinitionsReturnValueNameFormProperties {

		/** Localized value of the string. */
		localizedValue: FormControl<string | null | undefined>,

		/** Value of the string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateBlobServices_ListMetricDefinitionsReturnValueNameFormGroup() {
		return new FormGroup<BlobServices_ListMetricDefinitionsReturnValueNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BlobServices_ListMetricDefinitionsReturnValuePrimaryAggregationType { None = 0, Average = 1, Total = 2, Minimum = 3, Maximum = 4, Last = 5 }

	export enum BlobServices_ListMetricDefinitionsReturnValueUnit { Count = 0, Bytes = 1, Seconds = 2, CountPerSecond = 3, BytesPerSecond = 4 }

	export interface BlobServices_ListMetricsReturn {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of metrics. */
		BlobServices_ListMetricsReturnValue?: Array<BlobServices_ListMetricsReturnValue>;
	}
	export interface BlobServices_ListMetricsReturnFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateBlobServices_ListMetricsReturnFormGroup() {
		return new FormGroup<BlobServices_ListMetricsReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BlobServices_ListMetricsReturnValue {

		/** Metric end time. */
		endTime?: Date | null;

		/** Metric unit. */
		metricUnit?: BlobServices_ListMetricDefinitionsReturnValueUnit | null;

		/** List of metric values. */
		BlobServices_ListMetricsReturnValueMetricValues?: Array<BlobServices_ListMetricsReturnValueMetricValues>;

		/** Localizable string. */
		name?: BlobServices_ListMetricsReturnValueName;

		/** Metric start time. */
		startTime?: Date | null;

		/** Metric time grain. */
		timeGrain?: string | null;
	}
	export interface BlobServices_ListMetricsReturnValueFormProperties {

		/** Metric end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Metric unit. */
		metricUnit: FormControl<BlobServices_ListMetricDefinitionsReturnValueUnit | null | undefined>,

		/** Metric start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Metric time grain. */
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateBlobServices_ListMetricsReturnValueFormGroup() {
		return new FormGroup<BlobServices_ListMetricsReturnValueFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			metricUnit: new FormControl<BlobServices_ListMetricDefinitionsReturnValueUnit | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BlobServices_ListMetricsReturnValueMetricValues {

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
	export interface BlobServices_ListMetricsReturnValueMetricValuesFormProperties {

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
	export function CreateBlobServices_ListMetricsReturnValueMetricValuesFormGroup() {
		return new FormGroup<BlobServices_ListMetricsReturnValueMetricValuesFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
			timeStamp: new FormControl<Date | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BlobServices_ListMetricsReturnValueName {

		/** Localized value of the string. */
		localizedValue?: string | null;

		/** Value of the string. */
		value?: string | null;
	}
	export interface BlobServices_ListMetricsReturnValueNameFormProperties {

		/** Localized value of the string. */
		localizedValue: FormControl<string | null | undefined>,

		/** Value of the string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateBlobServices_ListMetricsReturnValueNameFormGroup() {
		return new FormGroup<BlobServices_ListMetricsReturnValueNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

}

