import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Database metrics. */
	export interface Metric {

		/** The end time for the metric (ISO-8601 format). */
		endTime?: Date | null;

		/** The metric values for the specified time window and timestep. */
		metricValues?: Array<MetricValue>;

		/** A database metric name. */
		name?: MetricName;

		/** The start time for the metric (ISO-8601 format). */
		startTime?: Date | null;

		/** The time step to be used to summarize the metric values. */
		timeGrain?: string | null;

		/** The unit of the metric. */
		unit?: MetricUnit | null;
	}

	/** Database metrics. */
	export interface MetricFormProperties {

		/** The end time for the metric (ISO-8601 format). */
		endTime: FormControl<Date | null | undefined>,

		/** The start time for the metric (ISO-8601 format). */
		startTime: FormControl<Date | null | undefined>,

		/** The time step to be used to summarize the metric values. */
		timeGrain: FormControl<string | null | undefined>,

		/** The unit of the metric. */
		unit: FormControl<MetricUnit | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<MetricUnit | null | undefined>(undefined),
		});

	}


	/** Represents database metrics. */
	export interface MetricValue {

		/** The average value of the metric. */
		average?: number | null;

		/** The number of values for the metric. */
		count?: string | null;

		/** The max value of the metric. */
		maximum?: number | null;

		/** The min value of the metric. */
		minimum?: number | null;

		/** The metric timestamp (ISO-8601 format). */
		timestamp?: Date | null;

		/** The total value of the metric. */
		total?: number | null;
	}

	/** Represents database metrics. */
	export interface MetricValueFormProperties {

		/** The average value of the metric. */
		average: FormControl<number | null | undefined>,

		/** The number of values for the metric. */
		count: FormControl<string | null | undefined>,

		/** The max value of the metric. */
		maximum: FormControl<number | null | undefined>,

		/** The min value of the metric. */
		minimum: FormControl<number | null | undefined>,

		/** The metric timestamp (ISO-8601 format). */
		timestamp: FormControl<Date | null | undefined>,

		/** The total value of the metric. */
		total: FormControl<number | null | undefined>,
	}
	export function CreateMetricValueFormGroup() {
		return new FormGroup<MetricValueFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			count: new FormControl<string | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MetricUnit { count = 0, bytes = 1, seconds = 2, percent = 3, countPerSecond = 4, bytesPerSecond = 5 }


	/** A metric availability value. */
	export interface MetricAvailability {

		/** The length of retention for the database metric. */
		retention?: string | null;

		/** The granularity of the database metric. */
		timeGrain?: string | null;
	}

	/** A metric availability value. */
	export interface MetricAvailabilityFormProperties {

		/** The length of retention for the database metric. */
		retention: FormControl<string | null | undefined>,

		/** The granularity of the database metric. */
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateMetricAvailabilityFormGroup() {
		return new FormGroup<MetricAvailabilityFormProperties>({
			retention: new FormControl<string | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A database metric definition. */
	export interface MetricDefinition {

		/** The list of database metric availabilities for the metric. */
		metricAvailabilities?: Array<MetricAvailability>;

		/** A database metric name. */
		name?: MetricName;

		/** The primary aggregation type defining how metric values are displayed. */
		primaryAggregationType?: MetricDefinitionPrimaryAggregationType | null;

		/** The resource uri of the database. */
		resourceUri?: string | null;

		/** The unit of the metric. */
		unit?: MetricDefinitionUnit | null;
	}

	/** A database metric definition. */
	export interface MetricDefinitionFormProperties {

		/** The primary aggregation type defining how metric values are displayed. */
		primaryAggregationType: FormControl<MetricDefinitionPrimaryAggregationType | null | undefined>,

		/** The resource uri of the database. */
		resourceUri: FormControl<string | null | undefined>,

		/** The unit of the metric. */
		unit: FormControl<MetricDefinitionUnit | null | undefined>,
	}
	export function CreateMetricDefinitionFormGroup() {
		return new FormGroup<MetricDefinitionFormProperties>({
			primaryAggregationType: new FormControl<MetricDefinitionPrimaryAggregationType | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<MetricDefinitionUnit | null | undefined>(undefined),
		});

	}

	export enum MetricDefinitionPrimaryAggregationType { None = 0, Average = 1, Count = 2, Minimum = 3, Maximum = 4, Total = 5 }

	export enum MetricDefinitionUnit { Count = 0, Bytes = 1, Seconds = 2, Percent = 3, CountPerSecond = 4, BytesPerSecond = 5 }


	/** The response to a list database metric definitions request. */
	export interface MetricDefinitionListResult {

		/**
		 * The list of metric definitions for the database.
		 * Required
		 */
		value: Array<MetricDefinition>;
	}

	/** The response to a list database metric definitions request. */
	export interface MetricDefinitionListResultFormProperties {
	}
	export function CreateMetricDefinitionListResultFormGroup() {
		return new FormGroup<MetricDefinitionListResultFormProperties>({
		});

	}


	/** The response to a list database metrics request. */
	export interface MetricListResult {

		/**
		 * The list of metrics for the database.
		 * Required
		 */
		value: Array<Metric>;
	}

	/** The response to a list database metrics request. */
	export interface MetricListResultFormProperties {
	}
	export function CreateMetricListResultFormGroup() {
		return new FormGroup<MetricListResultFormProperties>({
		});

	}


	/** A database metric name. */
	export interface MetricName {

		/** The friendly name of the database metric. */
		localizedValue?: string | null;

		/** The name of the database metric. */
		value?: string | null;
	}

	/** A database metric name. */
	export interface MetricNameFormProperties {

		/** The friendly name of the database metric. */
		localizedValue: FormControl<string | null | undefined>,

		/** The name of the database metric. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateMetricNameFormGroup() {
		return new FormGroup<MetricNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns database metric definitions.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/metricDefinitions
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @return {MetricDefinitionListResult} OK
		 */
		Databases_ListMetricDefinitions(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string): Observable<MetricDefinitionListResult> {
			return this.http.get<MetricDefinitionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/metricDefinitions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns database metrics.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/metrics
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} filter An OData filter expression that describes a subset of metrics to return.
		 * @return {MetricListResult} OK
		 */
		Databases_ListMetrics(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, filter: string): Observable<MetricListResult> {
			return this.http.get<MetricListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/metrics?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Returns elastic pool metric definitions.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/metricDefinitions
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} elasticPoolName The name of the elastic pool.
		 * @return {MetricDefinitionListResult} OK
		 */
		ElasticPools_ListMetricDefinitions(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, elasticPoolName: string): Observable<MetricDefinitionListResult> {
			return this.http.get<MetricDefinitionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/elasticPools/' + (elasticPoolName == null ? '' : encodeURIComponent(elasticPoolName)) + '/metricDefinitions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns elastic pool  metrics.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/metrics
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} elasticPoolName The name of the elastic pool.
		 * @param {string} filter An OData filter expression that describes a subset of metrics to return.
		 * @return {MetricListResult} OK
		 */
		ElasticPools_ListMetrics(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, elasticPoolName: string, filter: string): Observable<MetricListResult> {
			return this.http.get<MetricListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/elasticPools/' + (elasticPoolName == null ? '' : encodeURIComponent(elasticPoolName)) + '/metrics?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}
	}

}

