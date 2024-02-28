import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface RegionHealth {
	}
	export interface RegionHealthFormProperties {
	}
	export function CreateRegionHealthFormGroup() {
		return new FormGroup<RegionHealthFormProperties>({
		});

	}


	/** Pageable list of region health items. */
	export interface RegionHealthList {

		/** URI to next page. */
		nextLink?: string | null;

		/** Array of region health items */
		value?: Array<RegionHealth>;
	}

	/** Pageable list of region health items. */
	export interface RegionHealthListFormProperties {

		/** URI to next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRegionHealthListFormGroup() {
		return new FormGroup<RegionHealthListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information related to the health of a region. */
	export interface RegionHealthModel {

		/** Summary of the alerts. */
		alertSummary?: any;

		/** List of usage metrics for the region. */
		RegionHealthModelUsageMetrics?: Array<RegionHealthModelUsageMetrics>;
	}

	/** Contains information related to the health of a region. */
	export interface RegionHealthModelFormProperties {

		/** Summary of the alerts. */
		alertSummary: FormControl<any | null | undefined>,
	}
	export function CreateRegionHealthModelFormGroup() {
		return new FormGroup<RegionHealthModelFormProperties>({
			alertSummary: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface RegionHealthModelUsageMetrics {

		/** List of usage metrics. */
		RegionHealthModelUsageMetricsMetricsValue?: Array<RegionHealthModelUsageMetricsMetricsValue>;

		/** Name of the usage metric. */
		name?: string | null;
	}
	export interface RegionHealthModelUsageMetricsFormProperties {

		/** Name of the usage metric. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRegionHealthModelUsageMetricsFormGroup() {
		return new FormGroup<RegionHealthModelUsageMetricsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegionHealthModelUsageMetricsMetricsValue {

		/** Name of the counter. */
		maCounterName?: string | null;

		/** Name of the usage metric. */
		name?: string | null;

		/** Time counter was observed. */
		observedTimestamp?: Date | null;

		/** The origin of the metric. */
		sourceName?: RegionHealthModelUsageMetricsMetricsValueSourceName | null;

		/** Type of the source. */
		sourceType?: string | null;

		/** The unit of the metric. */
		unit?: RegionHealthModelUsageMetricsMetricsValueUnit | null;

		/**
		 * Name of the usage metric.
		 * Type: double
		 */
		value?: number | null;
	}
	export interface RegionHealthModelUsageMetricsMetricsValueFormProperties {

		/** Name of the counter. */
		maCounterName: FormControl<string | null | undefined>,

		/** Name of the usage metric. */
		name: FormControl<string | null | undefined>,

		/** Time counter was observed. */
		observedTimestamp: FormControl<Date | null | undefined>,

		/** The origin of the metric. */
		sourceName: FormControl<RegionHealthModelUsageMetricsMetricsValueSourceName | null | undefined>,

		/** Type of the source. */
		sourceType: FormControl<string | null | undefined>,

		/** The unit of the metric. */
		unit: FormControl<RegionHealthModelUsageMetricsMetricsValueUnit | null | undefined>,

		/**
		 * Name of the usage metric.
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateRegionHealthModelUsageMetricsMetricsValueFormGroup() {
		return new FormGroup<RegionHealthModelUsageMetricsMetricsValueFormProperties>({
			maCounterName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			observedTimestamp: new FormControl<Date | null | undefined>(undefined),
			sourceName: new FormControl<RegionHealthModelUsageMetricsMetricsValueSourceName | null | undefined>(undefined),
			sourceType: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<RegionHealthModelUsageMetricsMetricsValueUnit | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum RegionHealthModelUsageMetricsMetricsValueSourceName { PhysicalNode = 'PhysicalNode', VirtualMachine = 'VirtualMachine', ResourceProvider = 'ResourceProvider' }

	export enum RegionHealthModelUsageMetricsMetricsValueUnit { One = 'One', Percentage = 'Percentage', B = 'B', KB = 'KB', MB = 'MB', GB = 'GB', TB = 'TB' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the list of all health status for the region.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.InfrastructureInsights.Admin/regionHealths
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client API Version.
		 * @param {string} filter OData filter parameter.
		 * @return {RegionHealthList} OK
		 */
		RegionHealths_List(subscriptionId: string, resourceGroupName: string, api_version: string, filter: string | null | undefined): Observable<RegionHealthList> {
			return this.http.get<RegionHealthList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.InfrastructureInsights.Admin/regionHealths&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Returns the requested health status of a region.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.InfrastructureInsights.Admin/regionHealths/{location}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} location Name of the region
		 * @param {string} api_version Client API Version.
		 * @return {RegionHealth} OK
		 */
		RegionHealths_Get(subscriptionId: string, resourceGroupName: string, location: string, api_version: string): Observable<RegionHealth> {
			return this.http.get<RegionHealth>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.InfrastructureInsights.Admin/regionHealths/' + (location == null ? '' : encodeURIComponent(location)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

