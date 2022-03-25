import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface DescribeDimensionKeysResponse {
		AlignedStartTime?: Date;
		AlignedEndTime?: Date;
		PartitionKeys?: Array<ResponsePartitionKey>;
		Keys?: Array<DimensionKeyDescription>;
		NextToken?: string;
	}


	/** If <code>PartitionBy</code> was specified in a <code>DescribeDimensionKeys</code> request, the dimensions are returned in an array. Each element in the array specifies one dimension.  */
	export interface ResponsePartitionKey {
		Dimensions: DimensionMap;
	}

	export interface DimensionMap {
	}


	/** An array of descriptions and aggregated values for each dimension within a dimension group. */
	export interface DimensionKeyDescription {
		Dimensions?: DimensionMap;
		Total?: number;
		Partitions?: Array<number>;
	}

	export interface DescribeDimensionKeysRequest {
		ServiceType: DescribeDimensionKeysRequestServiceType;
		Identifier: string;
		StartTime: Date;
		EndTime: Date;
		Metric: string;
		PeriodInSeconds?: number;

		/**
		 * A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>.
		 * Required
		 */
		GroupBy: DimensionGroup;

		/** A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>. */
		PartitionBy?: DimensionGroup;
		Filter?: MetricQueryFilterMap;
		MaxResults?: number;
		NextToken?: string;
	}

	export enum DescribeDimensionKeysRequestServiceType { RDS = 0 }


	/** A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>. */
	export interface DimensionGroup {
		Group: string;
		Dimensions?: Array<string>;
		Limit?: number;
	}

	export interface MetricQueryFilterMap {
	}


	/** One of the arguments provided is invalid for this request. */
	export interface InvalidArgumentException {
		Message?: string;
	}


	/** The request failed due to an unknown error. */
	export interface InternalServiceError {
		Message?: string;
	}


	/** The user is not authorized to perform this request. */
	export interface NotAuthorizedException {
		Message?: string;
	}

	export interface GetResourceMetricsResponse {
		AlignedStartTime?: Date;
		AlignedEndTime?: Date;
		Identifier?: string;
		MetricList?: Array<MetricKeyDataPoints>;
		NextToken?: string;
	}


	/** A time-ordered series of data points, correpsonding to a dimension of a Performance Insights metric. */
	export interface MetricKeyDataPoints {

		/** An object describing a Performance Insights metric and one or more dimensions for that metric. */
		Key?: ResponseResourceMetricKey;
		DataPoints?: Array<DataPoint>;
	}


	/** An object describing a Performance Insights metric and one or more dimensions for that metric. */
	export interface ResponseResourceMetricKey {
		Metric: string;
		Dimensions?: DimensionMap;
	}


	/** A timestamp, and a single numerical value, which together represent a measurement at a particular point in time. */
	export interface DataPoint {
		Timestamp: Date;
		Value: number;
	}

	export interface GetResourceMetricsRequest {
		ServiceType: DescribeDimensionKeysRequestServiceType;
		Identifier: string;
		MetricQueries: Array<MetricQuery>;
		StartTime: Date;
		EndTime: Date;
		PeriodInSeconds?: number;
		MaxResults?: number;
		NextToken?: string;
	}


	/** A single query to be processed. You must provide the metric to query. If no other parameters are specified, Performance Insights returns all of the data points for that metric. You can optionally request that the data points be aggregated by dimension group ( <code>GroupBy</code>), and return only those data points that match your criteria (<code>Filter</code>). */
	export interface MetricQuery {
		Metric: string;

		/** A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>. */
		GroupBy?: DimensionGroup;
		Filter?: MetricQueryFilterMap;
	}

	export enum ServiceType { RDS = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * For a specific time period, retrieve the top <code>N</code> dimension keys for a metric.
		 * Post #X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys
		 * @return {DescribeDimensionKeysResponse} Success
		 */
		DescribeDimensionKeys(requestBody: DescribeDimensionKeysRequest): Observable<DescribeDimensionKeysResponse> {
			return this.http.post<DescribeDimensionKeysResponse>(this.baseUri + '#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve Performance Insights metrics for a set of data sources, over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.
		 * Post #X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics
		 * @return {GetResourceMetricsResponse} Success
		 */
		GetResourceMetrics(requestBody: GetResourceMetricsRequest): Observable<GetResourceMetricsResponse> {
			return this.http.post<GetResourceMetricsResponse>(this.baseUri + '#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum DescribeDimensionKeysX_Amz_Target { PerformanceInsightsv20180227_DescribeDimensionKeys = 0 }

	export enum GetResourceMetricsX_Amz_Target { PerformanceInsightsv20180227_GetResourceMetrics = 0 }

}

