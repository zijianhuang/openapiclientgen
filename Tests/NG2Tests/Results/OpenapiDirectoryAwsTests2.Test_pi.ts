import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DescribeDimensionKeysResponse {
		AlignedStartTime?: Date | null;
		AlignedEndTime?: Date | null;
		PartitionKeys?: Array<ResponsePartitionKey>;
		Keys?: Array<DimensionKeyDescription>;
		NextToken?: string | null;
	}
	export interface DescribeDimensionKeysResponseFormProperties {
		AlignedStartTime: FormControl<Date | null | undefined>,
		AlignedEndTime: FormControl<Date | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDimensionKeysResponseFormGroup() {
		return new FormGroup<DescribeDimensionKeysResponseFormProperties>({
			AlignedStartTime: new FormControl<Date | null | undefined>(undefined),
			AlignedEndTime: new FormControl<Date | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** If <code>PartitionBy</code> was specified in a <code>DescribeDimensionKeys</code> request, the dimensions are returned in an array. Each element in the array specifies one dimension.  */
	export interface ResponsePartitionKey {

		/** Required */
		Dimensions: DimensionMap;
	}

	/** If <code>PartitionBy</code> was specified in a <code>DescribeDimensionKeys</code> request, the dimensions are returned in an array. Each element in the array specifies one dimension.  */
	export interface ResponsePartitionKeyFormProperties {
	}
	export function CreateResponsePartitionKeyFormGroup() {
		return new FormGroup<ResponsePartitionKeyFormProperties>({
		});

	}

	export interface DimensionMap {
	}
	export interface DimensionMapFormProperties {
	}
	export function CreateDimensionMapFormGroup() {
		return new FormGroup<DimensionMapFormProperties>({
		});

	}


	/** An array of descriptions and aggregated values for each dimension within a dimension group. */
	export interface DimensionKeyDescription {
		Dimensions?: DimensionMap;
		Total?: number | null;
		Partitions?: Array<number>;
	}

	/** An array of descriptions and aggregated values for each dimension within a dimension group. */
	export interface DimensionKeyDescriptionFormProperties {
		Total: FormControl<number | null | undefined>,
	}
	export function CreateDimensionKeyDescriptionFormGroup() {
		return new FormGroup<DimensionKeyDescriptionFormProperties>({
			Total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeDimensionKeysRequest {

		/** Required */
		ServiceType: DescribeDimensionKeysRequestServiceType;

		/** Required */
		Identifier: string;

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;

		/** Required */
		Metric: string;
		PeriodInSeconds?: number | null;

		/**
		 * A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>.
		 * Required
		 */
		GroupBy: DimensionGroup;

		/** A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>. */
		PartitionBy?: DimensionGroup;
		Filter?: MetricQueryFilterMap;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeDimensionKeysRequestFormProperties {

		/** Required */
		ServiceType: FormControl<DescribeDimensionKeysRequestServiceType | null | undefined>,

		/** Required */
		Identifier: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,

		/** Required */
		Metric: FormControl<string | null | undefined>,
		PeriodInSeconds: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDimensionKeysRequestFormGroup() {
		return new FormGroup<DescribeDimensionKeysRequestFormProperties>({
			ServiceType: new FormControl<DescribeDimensionKeysRequestServiceType | null | undefined>(undefined, [Validators.required]),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Metric: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PeriodInSeconds: new FormControl<number | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DescribeDimensionKeysRequestServiceType { RDS = 0 }


	/** A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>. */
	export interface DimensionGroup {

		/** Required */
		Group: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Dimensions?: Array<string>;

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		Limit?: number | null;
	}

	/** A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>. */
	export interface DimensionGroupFormProperties {

		/** Required */
		Group: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDimensionGroupFormGroup() {
		return new FormGroup<DimensionGroupFormProperties>({
			Group: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
		});

	}

	export interface MetricQueryFilterMap {
	}
	export interface MetricQueryFilterMapFormProperties {
	}
	export function CreateMetricQueryFilterMapFormGroup() {
		return new FormGroup<MetricQueryFilterMapFormProperties>({
		});

	}


	/** One of the arguments provided is invalid for this request. */
	export interface InvalidArgumentException {
		Message?: string | null;
	}

	/** One of the arguments provided is invalid for this request. */
	export interface InvalidArgumentExceptionFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidArgumentExceptionFormGroup() {
		return new FormGroup<InvalidArgumentExceptionFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request failed due to an unknown error. */
	export interface InternalServiceError {
		Message?: string | null;
	}

	/** The request failed due to an unknown error. */
	export interface InternalServiceErrorFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInternalServiceErrorFormGroup() {
		return new FormGroup<InternalServiceErrorFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The user is not authorized to perform this request. */
	export interface NotAuthorizedException {
		Message?: string | null;
	}

	/** The user is not authorized to perform this request. */
	export interface NotAuthorizedExceptionFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateNotAuthorizedExceptionFormGroup() {
		return new FormGroup<NotAuthorizedExceptionFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetResourceMetricsResponse {
		AlignedStartTime?: Date | null;
		AlignedEndTime?: Date | null;
		Identifier?: string | null;
		MetricList?: Array<MetricKeyDataPoints>;
		NextToken?: string | null;
	}
	export interface GetResourceMetricsResponseFormProperties {
		AlignedStartTime: FormControl<Date | null | undefined>,
		AlignedEndTime: FormControl<Date | null | undefined>,
		Identifier: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceMetricsResponseFormGroup() {
		return new FormGroup<GetResourceMetricsResponseFormProperties>({
			AlignedStartTime: new FormControl<Date | null | undefined>(undefined),
			AlignedEndTime: new FormControl<Date | null | undefined>(undefined),
			Identifier: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A time-ordered series of data points, correpsonding to a dimension of a Performance Insights metric. */
	export interface MetricKeyDataPoints {

		/** An object describing a Performance Insights metric and one or more dimensions for that metric. */
		Key?: ResponseResourceMetricKey;
		DataPoints?: Array<DataPoint>;
	}

	/** A time-ordered series of data points, correpsonding to a dimension of a Performance Insights metric. */
	export interface MetricKeyDataPointsFormProperties {
	}
	export function CreateMetricKeyDataPointsFormGroup() {
		return new FormGroup<MetricKeyDataPointsFormProperties>({
		});

	}


	/** An object describing a Performance Insights metric and one or more dimensions for that metric. */
	export interface ResponseResourceMetricKey {

		/** Required */
		Metric: string;
		Dimensions?: DimensionMap;
	}

	/** An object describing a Performance Insights metric and one or more dimensions for that metric. */
	export interface ResponseResourceMetricKeyFormProperties {

		/** Required */
		Metric: FormControl<string | null | undefined>,
	}
	export function CreateResponseResourceMetricKeyFormGroup() {
		return new FormGroup<ResponseResourceMetricKeyFormProperties>({
			Metric: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A timestamp, and a single numerical value, which together represent a measurement at a particular point in time. */
	export interface DataPoint {

		/** Required */
		Timestamp: Date;

		/** Required */
		Value: number;
	}

	/** A timestamp, and a single numerical value, which together represent a measurement at a particular point in time. */
	export interface DataPointFormProperties {

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,

		/** Required */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateDataPointFormGroup() {
		return new FormGroup<DataPointFormProperties>({
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetResourceMetricsRequest {

		/** Required */
		ServiceType: DescribeDimensionKeysRequestServiceType;

		/** Required */
		Identifier: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 15
		 */
		MetricQueries: Array<MetricQuery>;

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;
		PeriodInSeconds?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface GetResourceMetricsRequestFormProperties {

		/** Required */
		ServiceType: FormControl<DescribeDimensionKeysRequestServiceType | null | undefined>,

		/** Required */
		Identifier: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
		PeriodInSeconds: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceMetricsRequestFormGroup() {
		return new FormGroup<GetResourceMetricsRequestFormProperties>({
			ServiceType: new FormControl<DescribeDimensionKeysRequestServiceType | null | undefined>(undefined, [Validators.required]),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			PeriodInSeconds: new FormControl<number | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(20)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single query to be processed. You must provide the metric to query. If no other parameters are specified, Performance Insights returns all of the data points for that metric. You can optionally request that the data points be aggregated by dimension group ( <code>GroupBy</code>), and return only those data points that match your criteria (<code>Filter</code>). */
	export interface MetricQuery {

		/** Required */
		Metric: string;

		/** A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>. */
		GroupBy?: DimensionGroup;
		Filter?: MetricQueryFilterMap;
	}

	/** A single query to be processed. You must provide the metric to query. If no other parameters are specified, Performance Insights returns all of the data points for that metric. You can optionally request that the data points be aggregated by dimension group ( <code>GroupBy</code>), and return only those data points that match your criteria (<code>Filter</code>). */
	export interface MetricQueryFormProperties {

		/** Required */
		Metric: FormControl<string | null | undefined>,
	}
	export function CreateMetricQueryFormGroup() {
		return new FormGroup<MetricQueryFormProperties>({
			Metric: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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

	export enum DescribeDimensionKeysX_Amz_Target { 'PerformanceInsightsv20180227.DescribeDimensionKeys' = 0 }

	export enum GetResourceMetricsX_Amz_Target { 'PerformanceInsightsv20180227.GetResourceMetrics' = 0 }

}

