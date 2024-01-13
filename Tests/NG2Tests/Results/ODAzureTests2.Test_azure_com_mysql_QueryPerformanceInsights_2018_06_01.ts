import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface QueryStatistic {
	}
	export interface QueryStatisticFormProperties {
	}
	export function CreateQueryStatisticFormGroup() {
		return new FormGroup<QueryStatisticFormProperties>({
		});

	}


	/** The properties of a query statistic. */
	export interface QueryStatisticProperties {

		/** Aggregation function name. */
		aggregationFunction?: string | null;

		/** The list of database names. */
		databaseNames?: Array<string>;

		/** Observation end time. */
		endTime?: Date | null;

		/** Metric display name. */
		metricDisplayName?: string | null;

		/** Metric name. */
		metricName?: string | null;

		/** Metric value. */
		metricValue?: number | null;

		/** Metric value unit. */
		metricValueUnit?: string | null;

		/** Number of query executions in this time interval. */
		queryExecutionCount?: number | null;

		/** Database query identifier. */
		queryId?: string | null;

		/** Observation start time. */
		startTime?: Date | null;
	}

	/** The properties of a query statistic. */
	export interface QueryStatisticPropertiesFormProperties {

		/** Aggregation function name. */
		aggregationFunction: FormControl<string | null | undefined>,

		/** Observation end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Metric display name. */
		metricDisplayName: FormControl<string | null | undefined>,

		/** Metric name. */
		metricName: FormControl<string | null | undefined>,

		/** Metric value. */
		metricValue: FormControl<number | null | undefined>,

		/** Metric value unit. */
		metricValueUnit: FormControl<string | null | undefined>,

		/** Number of query executions in this time interval. */
		queryExecutionCount: FormControl<number | null | undefined>,

		/** Database query identifier. */
		queryId: FormControl<string | null | undefined>,

		/** Observation start time. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateQueryStatisticPropertiesFormGroup() {
		return new FormGroup<QueryStatisticPropertiesFormProperties>({
			aggregationFunction: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			metricDisplayName: new FormControl<string | null | undefined>(undefined),
			metricName: new FormControl<string | null | undefined>(undefined),
			metricValue: new FormControl<number | null | undefined>(undefined),
			metricValueUnit: new FormControl<string | null | undefined>(undefined),
			queryExecutionCount: new FormControl<number | null | undefined>(undefined),
			queryId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface QueryText {
	}
	export interface QueryTextFormProperties {
	}
	export function CreateQueryTextFormGroup() {
		return new FormGroup<QueryTextFormProperties>({
		});

	}


	/** The properties of a query text. */
	export interface QueryTextProperties {

		/** Query identifier unique to the server. */
		queryId?: string | null;

		/** Query text. */
		queryText?: string | null;
	}

	/** The properties of a query text. */
	export interface QueryTextPropertiesFormProperties {

		/** Query identifier unique to the server. */
		queryId: FormControl<string | null | undefined>,

		/** Query text. */
		queryText: FormControl<string | null | undefined>,
	}
	export function CreateQueryTextPropertiesFormGroup() {
		return new FormGroup<QueryTextPropertiesFormProperties>({
			queryId: new FormControl<string | null | undefined>(undefined),
			queryText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of query texts. */
	export interface QueryTextsResultList {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** The list of query texts. */
		value?: Array<QueryText>;
	}

	/** A list of query texts. */
	export interface QueryTextsResultListFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateQueryTextsResultListFormGroup() {
		return new FormGroup<QueryTextsResultListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input to get top query statistics */
	export interface TopQueryStatisticsInput {

		/**
		 * The properties for input to get top query statistics
		 * Required
		 */
		properties: TopQueryStatisticsInputProperties;
	}

	/** Input to get top query statistics */
	export interface TopQueryStatisticsInputFormProperties {
	}
	export function CreateTopQueryStatisticsInputFormGroup() {
		return new FormGroup<TopQueryStatisticsInputFormProperties>({
		});

	}


	/** The properties for input to get top query statistics */
	export interface TopQueryStatisticsInputProperties {

		/**
		 * Aggregation function name.
		 * Required
		 */
		aggregationFunction: string;

		/**
		 * Aggregation interval type in ISO 8601 format.
		 * Required
		 */
		aggregationWindow: string;

		/**
		 * Max number of top queries to return.
		 * Required
		 */
		numberOfTopQueries: number;

		/**
		 * Observation end time.
		 * Required
		 */
		observationEndTime: Date;

		/**
		 * Observation start time.
		 * Required
		 */
		observationStartTime: Date;

		/**
		 * Observed metric name.
		 * Required
		 */
		observedMetric: string;
	}

	/** The properties for input to get top query statistics */
	export interface TopQueryStatisticsInputPropertiesFormProperties {

		/**
		 * Aggregation function name.
		 * Required
		 */
		aggregationFunction: FormControl<string | null | undefined>,

		/**
		 * Aggregation interval type in ISO 8601 format.
		 * Required
		 */
		aggregationWindow: FormControl<string | null | undefined>,

		/**
		 * Max number of top queries to return.
		 * Required
		 */
		numberOfTopQueries: FormControl<number | null | undefined>,

		/**
		 * Observation end time.
		 * Required
		 */
		observationEndTime: FormControl<Date | null | undefined>,

		/**
		 * Observation start time.
		 * Required
		 */
		observationStartTime: FormControl<Date | null | undefined>,

		/**
		 * Observed metric name.
		 * Required
		 */
		observedMetric: FormControl<string | null | undefined>,
	}
	export function CreateTopQueryStatisticsInputPropertiesFormGroup() {
		return new FormGroup<TopQueryStatisticsInputPropertiesFormProperties>({
			aggregationFunction: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			aggregationWindow: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numberOfTopQueries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			observationEndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			observationStartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			observedMetric: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of query statistics. */
	export interface TopQueryStatisticsResultList {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** The list of top query statistics. */
		value?: Array<QueryStatistic>;
	}

	/** A list of query statistics. */
	export interface TopQueryStatisticsResultListFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateTopQueryStatisticsResultListFormGroup() {
		return new FormGroup<TopQueryStatisticsResultListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WaitStatistic {
	}
	export interface WaitStatisticFormProperties {
	}
	export function CreateWaitStatisticFormGroup() {
		return new FormGroup<WaitStatisticFormProperties>({
		});

	}


	/** The properties of a wait statistic. */
	export interface WaitStatisticProperties {

		/** Wait event count observed in this time interval. */
		count?: number | null;

		/** Database Name. */
		databaseName?: string | null;

		/** Observation end time. */
		endTime?: Date | null;

		/** Wait event name. */
		eventName?: string | null;

		/** Wait event type name. */
		eventTypeName?: string | null;

		/** Database query identifier. */
		queryId?: number | null;

		/** Observation start time. */
		startTime?: Date | null;

		/** Total time of wait in milliseconds in this time interval. */
		totalTimeInMs?: number | null;

		/** Database user identifier. */
		userId?: number | null;
	}

	/** The properties of a wait statistic. */
	export interface WaitStatisticPropertiesFormProperties {

		/** Wait event count observed in this time interval. */
		count: FormControl<number | null | undefined>,

		/** Database Name. */
		databaseName: FormControl<string | null | undefined>,

		/** Observation end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Wait event name. */
		eventName: FormControl<string | null | undefined>,

		/** Wait event type name. */
		eventTypeName: FormControl<string | null | undefined>,

		/** Database query identifier. */
		queryId: FormControl<number | null | undefined>,

		/** Observation start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Total time of wait in milliseconds in this time interval. */
		totalTimeInMs: FormControl<number | null | undefined>,

		/** Database user identifier. */
		userId: FormControl<number | null | undefined>,
	}
	export function CreateWaitStatisticPropertiesFormGroup() {
		return new FormGroup<WaitStatisticPropertiesFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			eventName: new FormControl<string | null | undefined>(undefined),
			eventTypeName: new FormControl<string | null | undefined>(undefined),
			queryId: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			totalTimeInMs: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Input to get wait statistics */
	export interface WaitStatisticsInput {

		/**
		 * The properties for input to get wait statistics
		 * Required
		 */
		properties: WaitStatisticsInputProperties;
	}

	/** Input to get wait statistics */
	export interface WaitStatisticsInputFormProperties {
	}
	export function CreateWaitStatisticsInputFormGroup() {
		return new FormGroup<WaitStatisticsInputFormProperties>({
		});

	}


	/** The properties for input to get wait statistics */
	export interface WaitStatisticsInputProperties {

		/**
		 * Aggregation interval type in ISO 8601 format.
		 * Required
		 */
		aggregationWindow: string;

		/**
		 * Observation end time.
		 * Required
		 */
		observationEndTime: Date;

		/**
		 * Observation start time.
		 * Required
		 */
		observationStartTime: Date;
	}

	/** The properties for input to get wait statistics */
	export interface WaitStatisticsInputPropertiesFormProperties {

		/**
		 * Aggregation interval type in ISO 8601 format.
		 * Required
		 */
		aggregationWindow: FormControl<string | null | undefined>,

		/**
		 * Observation end time.
		 * Required
		 */
		observationEndTime: FormControl<Date | null | undefined>,

		/**
		 * Observation start time.
		 * Required
		 */
		observationStartTime: FormControl<Date | null | undefined>,
	}
	export function CreateWaitStatisticsInputPropertiesFormGroup() {
		return new FormGroup<WaitStatisticsInputPropertiesFormProperties>({
			aggregationWindow: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			observationEndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			observationStartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of wait statistics. */
	export interface WaitStatisticsResultList {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** The list of wait statistics. */
		value?: Array<WaitStatistic>;
	}

	/** A list of wait statistics. */
	export interface WaitStatisticsResultListFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWaitStatisticsResultListFormGroup() {
		return new FormGroup<WaitStatisticsResultListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve the Query-Store query texts for specified queryIds.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/queryTexts
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} serverName The name of the server.
		 * @param {Array<string>} queryIds The query identifiers
		 * @return {QueryTextsResultList} OK
		 */
		QueryTexts_ListByServer(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, queryIds: Array<string>): Observable<QueryTextsResultList> {
			return this.http.get<QueryTextsResultList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMySQL/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/queryTexts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&' + queryIds.map(z => `queryIds=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Retrieve the Query-Store query texts for the queryId.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/queryTexts/{queryId}
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} serverName The name of the server.
		 * @param {string} queryId The Query-Store query identifier.
		 * @return {QueryText} OK
		 */
		QueryTexts_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, queryId: string): Observable<QueryText> {
			return this.http.get<QueryText>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMySQL/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/queryTexts/' + (queryId == null ? '' : encodeURIComponent(queryId)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the Query-Store top queries for specified metric and aggregation.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/topQueryStatistics
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} serverName The name of the server.
		 * @return {TopQueryStatisticsResultList} OK
		 */
		TopQueryStatistics_ListByServer(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string): Observable<TopQueryStatisticsResultList> {
			return this.http.get<TopQueryStatisticsResultList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMySQL/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/topQueryStatistics?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve the query statistic for specified identifier.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/topQueryStatistics/{queryStatisticId}
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} serverName The name of the server.
		 * @param {string} queryStatisticId The Query Statistic identifier.
		 * @return {QueryStatistic} OK
		 */
		TopQueryStatistics_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, queryStatisticId: string): Observable<QueryStatistic> {
			return this.http.get<QueryStatistic>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMySQL/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/topQueryStatistics/' + (queryStatisticId == null ? '' : encodeURIComponent(queryStatisticId)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve wait statistics for specified aggregation window.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/waitStatistics
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} serverName The name of the server.
		 * @return {WaitStatisticsResultList} OK
		 */
		WaitStatistics_ListByServer(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string): Observable<WaitStatisticsResultList> {
			return this.http.get<WaitStatisticsResultList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMySQL/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/waitStatistics?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve wait statistics for specified identifier.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/waitStatistics/{waitStatisticsId}
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} serverName The name of the server.
		 * @param {string} waitStatisticsId The Wait Statistic identifier.
		 * @return {WaitStatistic} OK
		 */
		WaitStatistics_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, waitStatisticsId: string): Observable<WaitStatistic> {
			return this.http.get<WaitStatistic>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMySQL/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/waitStatistics/' + (waitStatisticsId == null ? '' : encodeURIComponent(waitStatisticsId)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

