import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A database query. */
	export interface QueryInterval {

		/** The number of times the query was executed during this interval. */
		executionCount?: string | null;

		/** The start time of the measurement interval (ISO8601 format). */
		intervalStartTime?: Date | null;

		/** The list of query metrics during this interval. */
		metrics?: Array<QueryMetric>;
	}

	/** A database query. */
	export interface QueryIntervalFormProperties {

		/** The number of times the query was executed during this interval. */
		executionCount: FormControl<string | null | undefined>,

		/** The start time of the measurement interval (ISO8601 format). */
		intervalStartTime: FormControl<Date | null | undefined>,
	}
	export function CreateQueryIntervalFormGroup() {
		return new FormGroup<QueryIntervalFormProperties>({
			executionCount: new FormControl<string | null | undefined>(undefined),
			intervalStartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A database query. */
	export interface QueryMetric {

		/** The name of the metric for display in user interface */
		displayName?: string | null;

		/** The name of the metric */
		name?: string | null;

		/** The unit of measurement */
		unit?: QueryMetricUnit | null;

		/** The measured value */
		value?: number | null;
	}

	/** A database query. */
	export interface QueryMetricFormProperties {

		/** The name of the metric for display in user interface */
		displayName: FormControl<string | null | undefined>,

		/** The name of the metric */
		name: FormControl<string | null | undefined>,

		/** The unit of measurement */
		unit: FormControl<QueryMetricUnit | null | undefined>,

		/** The measured value */
		value: FormControl<number | null | undefined>,
	}
	export function CreateQueryMetricFormGroup() {
		return new FormGroup<QueryMetricFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<QueryMetricUnit | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum QueryMetricUnit { percentage = 'percentage', KB = 'KB', microseconds = 'microseconds' }


	/** A database query. */
	export interface QueryStatistic {

		/** The list of query intervals. */
		intervals?: Array<QueryInterval>;

		/** The id of the query */
		queryId?: string | null;
	}

	/** A database query. */
	export interface QueryStatisticFormProperties {

		/** The id of the query */
		queryId: FormControl<string | null | undefined>,
	}
	export function CreateQueryStatisticFormGroup() {
		return new FormGroup<QueryStatisticFormProperties>({
			queryId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response to a get query request. */
	export interface QueryStatisticListResult {

		/**
		 * The query.
		 * Required
		 */
		value: Array<QueryStatistic>;
	}

	/** Represents the response to a get query request. */
	export interface QueryStatisticListResultFormProperties {
	}
	export function CreateQueryStatisticListResultFormGroup() {
		return new FormGroup<QueryStatisticListResultFormProperties>({
		});

	}

	export interface QueryText {

		/** Resource name. */
		name?: string | null;

		/** Query text. */
		queryText?: string | null;

		/** Resource type. */
		type?: string | null;
	}
	export interface QueryTextFormProperties {

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Query text. */
		queryText: FormControl<string | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateQueryTextFormGroup() {
		return new FormGroup<QueryTextFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			queryText: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the response to a get query text request. */
	export interface QueryTextListResult {

		/**
		 * The query text.
		 * Required
		 */
		value: Array<QueryText>;
	}

	/** Represents the response to a get query text request. */
	export interface QueryTextListResultFormProperties {
	}
	export function CreateQueryTextListResultFormGroup() {
		return new FormGroup<QueryTextListResultFormProperties>({
		});

	}


	/** A database query. */
	export interface TopQueries {

		/** The function that is used to aggregate each query's metrics. */
		aggregationFunction?: TopQueriesAggregationFunction | null;

		/** The execution type that is used to filter the query instances that are returned. */
		executionType?: TopQueriesExecutionType | null;

		/** The duration of the interval (ISO8601 duration format). */
		intervalType?: string | null;

		/** The number of requested queries. */
		numberOfTopQueries?: string | null;

		/** The end time for queries that are returned (ISO8601 format) */
		observationEndTime?: Date | null;

		/** The start time for queries that are returned (ISO8601 format) */
		observationStartTime?: Date | null;

		/** The type of metric to use for ordering the top metrics. */
		observedMetric?: TopQueriesObservedMetric | null;

		/** The list of queries. */
		queries?: Array<QueryStatistic>;
	}

	/** A database query. */
	export interface TopQueriesFormProperties {

		/** The function that is used to aggregate each query's metrics. */
		aggregationFunction: FormControl<TopQueriesAggregationFunction | null | undefined>,

		/** The execution type that is used to filter the query instances that are returned. */
		executionType: FormControl<TopQueriesExecutionType | null | undefined>,

		/** The duration of the interval (ISO8601 duration format). */
		intervalType: FormControl<string | null | undefined>,

		/** The number of requested queries. */
		numberOfTopQueries: FormControl<string | null | undefined>,

		/** The end time for queries that are returned (ISO8601 format) */
		observationEndTime: FormControl<Date | null | undefined>,

		/** The start time for queries that are returned (ISO8601 format) */
		observationStartTime: FormControl<Date | null | undefined>,

		/** The type of metric to use for ordering the top metrics. */
		observedMetric: FormControl<TopQueriesObservedMetric | null | undefined>,
	}
	export function CreateTopQueriesFormGroup() {
		return new FormGroup<TopQueriesFormProperties>({
			aggregationFunction: new FormControl<TopQueriesAggregationFunction | null | undefined>(undefined),
			executionType: new FormControl<TopQueriesExecutionType | null | undefined>(undefined),
			intervalType: new FormControl<string | null | undefined>(undefined),
			numberOfTopQueries: new FormControl<string | null | undefined>(undefined),
			observationEndTime: new FormControl<Date | null | undefined>(undefined),
			observationStartTime: new FormControl<Date | null | undefined>(undefined),
			observedMetric: new FormControl<TopQueriesObservedMetric | null | undefined>(undefined),
		});

	}

	export enum TopQueriesAggregationFunction { min = 'min', max = 'max', avg = 'avg', sum = 'sum' }

	export enum TopQueriesExecutionType { any = 'any', regular = 'regular', irregular = 'irregular', aborted = 'aborted', exception = 'exception' }

	export enum TopQueriesObservedMetric { cpu = 'cpu', io = 'io', logio = 'logio', duration = 'duration', executionCount = 'executionCount' }


	/** Represents the response to a get top queries request. */
	export interface TopQueriesListResult {

		/**
		 * The list of top queries.
		 * Required
		 */
		value: Array<TopQueries>;
	}

	/** Represents the response to a get top queries request. */
	export interface TopQueriesListResultFormProperties {
	}
	export function CreateTopQueriesListResultFormGroup() {
		return new FormGroup<TopQueriesListResultFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of top queries by database.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/topQueries
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @return {TopQueriesListResult} OK
		 */
		Queries_ListByDatabase(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string): Observable<TopQueriesListResult> {
			return this.http.get<TopQueriesListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/topQueries?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a query's text.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/topQueries/{queryId}/queryText
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} queryId The id of the query
		 * @return {QueryTextListResult} OK
		 */
		QueryTexts_ListByQuery(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, queryId: string): Observable<QueryTextListResult> {
			return this.http.get<QueryTextListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/topQueries/' + (queryId == null ? '' : encodeURIComponent(queryId)) + '/queryText?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists a query's statistics.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/topQueries/{queryId}/statistics
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} queryId The id of the query
		 * @return {QueryStatisticListResult} OK
		 */
		QueryStatistics_ListByQuery(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, queryId: string): Observable<QueryStatisticListResult> {
			return this.http.get<QueryStatisticListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/topQueries/' + (queryId == null ? '' : encodeURIComponent(queryId)) + '/statistics?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

