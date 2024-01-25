import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Storage share. */
	export interface Share {

		/** Storage share properties. */
		properties?: ShareProperties;
	}

	/** Storage share. */
	export interface ShareFormProperties {
	}
	export function CreateShareFormGroup() {
		return new FormGroup<ShareFormProperties>({
		});

	}


	/** Storage share properties. */
	export interface ShareProperties {

		/** The free space of the storage share in bytes. */
		freeCapacity?: number | null;

		/** Current health status. */
		healthStatus?: SharePropertiesHealthStatus | null;

		/** The name of the storage share. */
		shareName?: string | null;

		/** The total capacity of the storage share in bytes. */
		totalCapacity?: number | null;

		/** The UNC path to the storage share. */
		uncPath?: string | null;

		/** The used capacity of the storage share in bytes. */
		usedCapacity?: number | null;
	}

	/** Storage share properties. */
	export interface SharePropertiesFormProperties {

		/** The free space of the storage share in bytes. */
		freeCapacity: FormControl<number | null | undefined>,

		/** Current health status. */
		healthStatus: FormControl<SharePropertiesHealthStatus | null | undefined>,

		/** The name of the storage share. */
		shareName: FormControl<string | null | undefined>,

		/** The total capacity of the storage share in bytes. */
		totalCapacity: FormControl<number | null | undefined>,

		/** The UNC path to the storage share. */
		uncPath: FormControl<string | null | undefined>,

		/** The used capacity of the storage share in bytes. */
		usedCapacity: FormControl<number | null | undefined>,
	}
	export function CreateSharePropertiesFormGroup() {
		return new FormGroup<SharePropertiesFormProperties>({
			freeCapacity: new FormControl<number | null | undefined>(undefined),
			healthStatus: new FormControl<SharePropertiesHealthStatus | null | undefined>(undefined),
			shareName: new FormControl<string | null | undefined>(undefined),
			totalCapacity: new FormControl<number | null | undefined>(undefined),
			uncPath: new FormControl<string | null | undefined>(undefined),
			usedCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SharePropertiesHealthStatus { Unknown = 0, Healthy = 1, Warning = 2, Critical = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of storage shares.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/shares
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {string} api_version REST Api Version.
		 * @return {Array<Share>} OK -- The list of storage shares has been returned.
		 */
		Shares_List(subscriptionId: string, resourceGroupName: string, farmId: string, api_version: string): Observable<Array<Share>> {
			return this.http.get<Array<Share>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '/shares&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a storage share.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/shares/{shareName}
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {string} shareName Share name.
		 * @param {string} api_version REST Api Version.
		 * @return {Share} OK -- The storage share has been returned.
		 */
		Shares_Get(subscriptionId: string, resourceGroupName: string, farmId: string, shareName: string, api_version: string): Observable<Share> {
			return this.http.get<Share>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a list of metric definitions for a storage share.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/shares/{shareName}/metricdefinitions
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {string} shareName Share name.
		 * @param {string} api_version REST Api Version.
		 * @return {Shares_ListMetricDefinitionsReturn} OK -- The list of metric definitions has been returned.
		 */
		Shares_ListMetricDefinitions(subscriptionId: string, resourceGroupName: string, farmId: string, shareName: string, api_version: string): Observable<Shares_ListMetricDefinitionsReturn> {
			return this.http.get<Shares_ListMetricDefinitionsReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/metricdefinitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a list of metrics for a storage share.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/shares/{shareName}/metrics
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} resourceGroupName Resource group name.
		 * @param {string} farmId Farm Id.
		 * @param {string} shareName Share name.
		 * @param {string} api_version REST Api Version.
		 * @return {Shares_ListMetricsReturn} OK -- The list of metrics has been returned.
		 */
		Shares_ListMetrics(subscriptionId: string, resourceGroupName: string, farmId: string, shareName: string, api_version: string): Observable<Shares_ListMetricsReturn> {
			return this.http.get<Shares_ListMetricsReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage.Admin/farms/' + (farmId == null ? '' : encodeURIComponent(farmId)) + '/shares/' + (shareName == null ? '' : encodeURIComponent(shareName)) + '/metrics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export interface Shares_ListMetricDefinitionsReturn {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of metric definitions. */
		Shares_ListMetricDefinitionsReturnValue?: Array<Shares_ListMetricDefinitionsReturnValue>;
	}
	export interface Shares_ListMetricDefinitionsReturnFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateShares_ListMetricDefinitionsReturnFormGroup() {
		return new FormGroup<Shares_ListMetricDefinitionsReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Shares_ListMetricDefinitionsReturnValue {

		/** Metric availabilities. */
		Shares_ListMetricDefinitionsReturnValueMetricAvailabilities?: Array<Shares_ListMetricDefinitionsReturnValueMetricAvailabilities>;

		/** Localizable string. */
		name?: Shares_ListMetricDefinitionsReturnValueName;

		/** Aggregate type. */
		primaryAggregationType?: Shares_ListMetricDefinitionsReturnValuePrimaryAggregationType | null;

		/** Metric unit. */
		unit?: Shares_ListMetricDefinitionsReturnValueUnit | null;
	}
	export interface Shares_ListMetricDefinitionsReturnValueFormProperties {

		/** Aggregate type. */
		primaryAggregationType: FormControl<Shares_ListMetricDefinitionsReturnValuePrimaryAggregationType | null | undefined>,

		/** Metric unit. */
		unit: FormControl<Shares_ListMetricDefinitionsReturnValueUnit | null | undefined>,
	}
	export function CreateShares_ListMetricDefinitionsReturnValueFormGroup() {
		return new FormGroup<Shares_ListMetricDefinitionsReturnValueFormProperties>({
			primaryAggregationType: new FormControl<Shares_ListMetricDefinitionsReturnValuePrimaryAggregationType | null | undefined>(undefined),
			unit: new FormControl<Shares_ListMetricDefinitionsReturnValueUnit | null | undefined>(undefined),
		});

	}

	export interface Shares_ListMetricDefinitionsReturnValueMetricAvailabilities {

		/** Retention of metric. */
		retention?: string | null;

		/** Time grain. */
		timeGrain?: string | null;
	}
	export interface Shares_ListMetricDefinitionsReturnValueMetricAvailabilitiesFormProperties {

		/** Retention of metric. */
		retention: FormControl<string | null | undefined>,

		/** Time grain. */
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateShares_ListMetricDefinitionsReturnValueMetricAvailabilitiesFormGroup() {
		return new FormGroup<Shares_ListMetricDefinitionsReturnValueMetricAvailabilitiesFormProperties>({
			retention: new FormControl<string | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Shares_ListMetricDefinitionsReturnValueName {

		/** Localized value of the string. */
		localizedValue?: string | null;

		/** Value of the string. */
		value?: string | null;
	}
	export interface Shares_ListMetricDefinitionsReturnValueNameFormProperties {

		/** Localized value of the string. */
		localizedValue: FormControl<string | null | undefined>,

		/** Value of the string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateShares_ListMetricDefinitionsReturnValueNameFormGroup() {
		return new FormGroup<Shares_ListMetricDefinitionsReturnValueNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Shares_ListMetricDefinitionsReturnValuePrimaryAggregationType { None = 0, Average = 1, Total = 2, Minimum = 3, Maximum = 4, Last = 5 }

	export enum Shares_ListMetricDefinitionsReturnValueUnit { Count = 0, Bytes = 1, Seconds = 2, CountPerSecond = 3, BytesPerSecond = 4 }

	export interface Shares_ListMetricsReturn {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of metrics. */
		Shares_ListMetricsReturnValue?: Array<Shares_ListMetricsReturnValue>;
	}
	export interface Shares_ListMetricsReturnFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateShares_ListMetricsReturnFormGroup() {
		return new FormGroup<Shares_ListMetricsReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Shares_ListMetricsReturnValue {

		/** Metric end time. */
		endTime?: Date | null;

		/** Metric unit. */
		metricUnit?: Shares_ListMetricDefinitionsReturnValueUnit | null;

		/** List of metric values. */
		Shares_ListMetricsReturnValueMetricValues?: Array<Shares_ListMetricsReturnValueMetricValues>;

		/** Localizable string. */
		name?: Shares_ListMetricsReturnValueName;

		/** Metric start time. */
		startTime?: Date | null;

		/** Metric time grain. */
		timeGrain?: string | null;
	}
	export interface Shares_ListMetricsReturnValueFormProperties {

		/** Metric end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Metric unit. */
		metricUnit: FormControl<Shares_ListMetricDefinitionsReturnValueUnit | null | undefined>,

		/** Metric start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Metric time grain. */
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateShares_ListMetricsReturnValueFormGroup() {
		return new FormGroup<Shares_ListMetricsReturnValueFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			metricUnit: new FormControl<Shares_ListMetricDefinitionsReturnValueUnit | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Shares_ListMetricsReturnValueMetricValues {

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
	export interface Shares_ListMetricsReturnValueMetricValuesFormProperties {

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
	export function CreateShares_ListMetricsReturnValueMetricValuesFormGroup() {
		return new FormGroup<Shares_ListMetricsReturnValueMetricValuesFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
			timeStamp: new FormControl<Date | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Shares_ListMetricsReturnValueName {

		/** Localized value of the string. */
		localizedValue?: string | null;

		/** Value of the string. */
		value?: string | null;
	}
	export interface Shares_ListMetricsReturnValueNameFormProperties {

		/** Localized value of the string. */
		localizedValue: FormControl<string | null | undefined>,

		/** Value of the string. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateShares_ListMetricsReturnValueNameFormGroup() {
		return new FormGroup<Shares_ListMetricsReturnValueNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

}

