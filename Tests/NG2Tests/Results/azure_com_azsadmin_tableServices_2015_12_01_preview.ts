import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Table service. */
	export interface TableService {

		/** Table service properties. */
		properties?: TableServiceProperties;
	}

	/** Table service. */
	export interface TableServiceFormProperties {
	}
	export function CreateTableServiceFormGroup() {
		return new FormGroup<TableServiceFormProperties>({
		});

	}


	/** Table service properties. */
	export interface TableServiceProperties {

		/** Settings of storage services. */
		settings?: TableServicePropertiesSettings;
	}

	/** Table service properties. */
	export interface TableServicePropertiesFormProperties {
	}
	export function CreateTableServicePropertiesFormGroup() {
		return new FormGroup<TableServicePropertiesFormProperties>({
		});

	}

	export interface TableServicePropertiesSettings {

		/** The HTTP port of the storage service front end. */
		frontEndHttpListenPort?: number | null;

		/** The HTTPs port of the storage service front end. */
		frontEndHttpsListenPort?: number | null;
	}
	export interface TableServicePropertiesSettingsFormProperties {

		/** The HTTP port of the storage service front end. */
		frontEndHttpListenPort: FormControl<number | null | undefined>,

		/** The HTTPs port of the storage service front end. */
		frontEndHttpsListenPort: FormControl<number | null | undefined>,
	}
	export function CreateTableServicePropertiesSettingsFormGroup() {
		return new FormGroup<TableServicePropertiesSettingsFormProperties>({
			frontEndHttpListenPort: new FormControl<number | null | undefined>(undefined),
			frontEndHttpsListenPort: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the table service.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/tableservices/{serviceType}
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {TableServices_GetServiceType} serviceType The service type.
		 * @param {string} api_version REST Api Version.
		 * @return {TableService} OK -- Table service has been returned.
		 */
		TableServices_Get(subscriptionId: string, resourceGroupName: string, farmId: string, serviceType: TableServices_GetServiceType, api_version: string): Observable<TableService> {
			return this.http.get<TableService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '/tableservices/' + serviceType + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a list of metric definitions for table service.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/tableservices/{serviceType}/metricdefinitions
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {TableServices_GetServiceType} serviceType The service type.
		 * @param {string} api_version REST Api Version.
		 * @return {TableServices_ListMetricDefinitionsReturn} OK -- The list of metric definitions has been returned.
		 */
		TableServices_ListMetricDefinitions(subscriptionId: string, resourceGroupName: string, farmId: string, serviceType: TableServices_GetServiceType, api_version: string): Observable<TableServices_ListMetricDefinitionsReturn> {
			return this.http.get<TableServices_ListMetricDefinitionsReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '/tableservices/' + serviceType + '/metricdefinitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a list of metrics for table service.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/tableservices/{serviceType}/metrics
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {TableServices_GetServiceType} serviceType The service type.
		 * @param {string} api_version REST Api Version.
		 * @return {TableServices_ListMetricsReturn} OK -- The list of metrics has been returned.
		 */
		TableServices_ListMetrics(subscriptionId: string, resourceGroupName: string, farmId: string, serviceType: TableServices_GetServiceType, api_version: string): Observable<TableServices_ListMetricsReturn> {
			return this.http.get<TableServices_ListMetricsReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '/tableservices/' + serviceType + '/metrics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export enum TableServices_GetServiceType { default = 'default' }

	export interface TableServices_ListMetricDefinitionsReturn {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of metric definitions. */
		TableServices_ListMetricDefinitionsReturnValue?: Array<TableServices_ListMetricDefinitionsReturnValue>;
	}
	export interface TableServices_ListMetricDefinitionsReturnFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateTableServices_ListMetricDefinitionsReturnFormGroup() {
		return new FormGroup<TableServices_ListMetricDefinitionsReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableServices_ListMetricDefinitionsReturnValue {

		/** Metric availabilities. */
		TableServices_ListMetricDefinitionsReturnValueMetricAvailabilities?: Array<TableServices_ListMetricDefinitionsReturnValueMetricAvailabilities>;

		/** Localizable string. */
		name?: TableServices_ListMetricDefinitionsReturnValueName;

		/** Aggregate type. */
		primaryAggregationType?: TableServices_ListMetricDefinitionsReturnValuePrimaryAggregationType | null;

		/** Metric unit. */
		unit?: TableServices_ListMetricDefinitionsReturnValueUnit | null;
	}
	export interface TableServices_ListMetricDefinitionsReturnValueFormProperties {

		/** Aggregate type. */
		primaryAggregationType: FormControl<TableServices_ListMetricDefinitionsReturnValuePrimaryAggregationType | null | undefined>,

		/** Metric unit. */
		unit: FormControl<TableServices_ListMetricDefinitionsReturnValueUnit | null | undefined>,
	}
	export function CreateTableServices_ListMetricDefinitionsReturnValueFormGroup() {
		return new FormGroup<TableServices_ListMetricDefinitionsReturnValueFormProperties>({
			primaryAggregationType: new FormControl<TableServices_ListMetricDefinitionsReturnValuePrimaryAggregationType | null | undefined>(undefined),
			unit: new FormControl<TableServices_ListMetricDefinitionsReturnValueUnit | null | undefined>(undefined),
		});

	}

	export interface TableServices_ListMetricDefinitionsReturnValueMetricAvailabilities {

		/** Retention of metric. */
		retention?: string | null;

		/** Time grain. */
		timeGrain?: string | null;
	}
	export interface TableServices_ListMetricDefinitionsReturnValueMetricAvailabilitiesFormProperties {

		/** Retention of metric. */
		retention: FormControl<string | null | undefined>,

		/** Time grain. */
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateTableServices_ListMetricDefinitionsReturnValueMetricAvailabilitiesFormGroup() {
		return new FormGroup<TableServices_ListMetricDefinitionsReturnValueMetricAvailabilitiesFormProperties>({
			retention: new FormControl<string | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableServices_ListMetricDefinitionsReturnValueName {

		/** Localized value of the string. */
		localizedValue?: string | null;

		/** Value of the string. */
		value?: string | null;
	}
	export interface TableServices_ListMetricDefinitionsReturnValueNameFormProperties {

		/** Localized value of the string. */
		localizedValue: FormControl<string | null | undefined>,

		/** Value of the string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTableServices_ListMetricDefinitionsReturnValueNameFormGroup() {
		return new FormGroup<TableServices_ListMetricDefinitionsReturnValueNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TableServices_ListMetricDefinitionsReturnValuePrimaryAggregationType { None = 'None', Average = 'Average', Total = 'Total', Minimum = 'Minimum', Maximum = 'Maximum', Last = 'Last' }

	export enum TableServices_ListMetricDefinitionsReturnValueUnit { Count = 'Count', Bytes = 'Bytes', Seconds = 'Seconds', CountPerSecond = 'CountPerSecond', BytesPerSecond = 'BytesPerSecond' }

	export interface TableServices_ListMetricsReturn {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of metrics. */
		TableServices_ListMetricsReturnValue?: Array<TableServices_ListMetricsReturnValue>;
	}
	export interface TableServices_ListMetricsReturnFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateTableServices_ListMetricsReturnFormGroup() {
		return new FormGroup<TableServices_ListMetricsReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableServices_ListMetricsReturnValue {

		/** Metric end time. */
		endTime?: Date | null;

		/** Metric unit. */
		metricUnit?: TableServices_ListMetricDefinitionsReturnValueUnit | null;

		/** List of metric values. */
		TableServices_ListMetricsReturnValueMetricValues?: Array<TableServices_ListMetricsReturnValueMetricValues>;

		/** Localizable string. */
		name?: TableServices_ListMetricsReturnValueName;

		/** Metric start time. */
		startTime?: Date | null;

		/** Metric time grain. */
		timeGrain?: string | null;
	}
	export interface TableServices_ListMetricsReturnValueFormProperties {

		/** Metric end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Metric unit. */
		metricUnit: FormControl<TableServices_ListMetricDefinitionsReturnValueUnit | null | undefined>,

		/** Metric start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Metric time grain. */
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateTableServices_ListMetricsReturnValueFormGroup() {
		return new FormGroup<TableServices_ListMetricsReturnValueFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			metricUnit: new FormControl<TableServices_ListMetricDefinitionsReturnValueUnit | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableServices_ListMetricsReturnValueMetricValues {

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
	export interface TableServices_ListMetricsReturnValueMetricValuesFormProperties {

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
	export function CreateTableServices_ListMetricsReturnValueMetricValuesFormGroup() {
		return new FormGroup<TableServices_ListMetricsReturnValueMetricValuesFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
			timeStamp: new FormControl<Date | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TableServices_ListMetricsReturnValueName {

		/** Localized value of the string. */
		localizedValue?: string | null;

		/** Value of the string. */
		value?: string | null;
	}
	export interface TableServices_ListMetricsReturnValueNameFormProperties {

		/** Localized value of the string. */
		localizedValue: FormControl<string | null | undefined>,

		/** Value of the string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTableServices_ListMetricsReturnValueNameFormGroup() {
		return new FormGroup<TableServices_ListMetricsReturnValueNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

}

