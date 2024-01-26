import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DescribeDimensionKeysResponse {
		AlignedStartTime?: Date;
		AlignedEndTime?: Date;
		PartitionKeys?: Array<ResponsePartitionKey>;
		Keys?: Array<DimensionKeyDescription>;
		NextToken?: string;
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


	/** An object that includes the requested dimension key values and aggregated metric values within a dimension group. */
	export interface DimensionKeyDescription {
		Dimensions?: DimensionMap;
		Total?: number | null;
		AdditionalMetrics?: AdditionalMetricsMap;
		Partitions?: Array<number> | null;
	}

	/** An object that includes the requested dimension key values and aggregated metric values within a dimension group. */
	export interface DimensionKeyDescriptionFormProperties {
		Total: FormControl<number | null | undefined>,
	}
	export function CreateDimensionKeyDescriptionFormGroup() {
		return new FormGroup<DimensionKeyDescriptionFormProperties>({
			Total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdditionalMetricsMap {
	}
	export interface AdditionalMetricsMapFormProperties {
	}
	export function CreateAdditionalMetricsMapFormGroup() {
		return new FormGroup<AdditionalMetricsMapFormProperties>({
		});

	}

	export interface DescribeDimensionKeysRequest {

		/** Required */
		ServiceType: ServiceType;

		/** Required */
		Identifier: string;

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;

		/** Required */
		Metric: string;
		PeriodInSeconds?: number | null;

		/** Required */
		GroupBy: DimensionGroup;
		AdditionalMetrics?: Array<string>;
		PartitionBy?: DimensionGroup;
		Filter?: MetricQueryFilterMap;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeDimensionKeysRequestFormProperties {

		/** Required */
		ServiceType: FormControl<ServiceType | null | undefined>,

		/** Required */
		Identifier: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,

		/** Required */
		Metric: FormControl<string | null | undefined>,
		PeriodInSeconds: FormControl<number | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDimensionKeysRequestFormGroup() {
		return new FormGroup<DescribeDimensionKeysRequestFormProperties>({
			ServiceType: new FormControl<ServiceType | null | undefined>(undefined, [Validators.required]),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Metric: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PeriodInSeconds: new FormControl<number | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServiceType { RDS = 0, DOCDB = 1 }


	/** <p>A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions:</p> <ul> <li> <p> <code>db.sql.id</code> - The hash of a running SQL statement, generated by Performance Insights.</p> </li> <li> <p> <code>db.sql.db_id</code> - Either the SQL ID generated by the database engine, or a value generated by Performance Insights that begins with <code>pi-</code>.</p> </li> <li> <p> <code>db.sql.statement</code> - The full text of the SQL statement that is running, for example, <code>SELECT * FROM employees</code>.</p> </li> <li> <p> <code>db.sql_tokenized.id</code> - The hash of the SQL digest generated by Performance Insights.</p> </li> </ul> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note> */
	export interface DimensionGroup {

		/** Required */
		Group: string;
		Dimensions?: Array<string>;
		Limit?: number | null;
	}

	/** <p>A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions:</p> <ul> <li> <p> <code>db.sql.id</code> - The hash of a running SQL statement, generated by Performance Insights.</p> </li> <li> <p> <code>db.sql.db_id</code> - Either the SQL ID generated by the database engine, or a value generated by Performance Insights that begins with <code>pi-</code>.</p> </li> <li> <p> <code>db.sql.statement</code> - The full text of the SQL statement that is running, for example, <code>SELECT * FROM employees</code>.</p> </li> <li> <p> <code>db.sql_tokenized.id</code> - The hash of the SQL digest generated by Performance Insights.</p> </li> </ul> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note> */
	export interface DimensionGroupFormProperties {

		/** Required */
		Group: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDimensionGroupFormGroup() {
		return new FormGroup<DimensionGroupFormProperties>({
			Group: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Limit: new FormControl<number | null | undefined>(undefined),
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

	export interface InvalidArgumentException {
	}
	export interface InvalidArgumentExceptionFormProperties {
	}
	export function CreateInvalidArgumentExceptionFormGroup() {
		return new FormGroup<InvalidArgumentExceptionFormProperties>({
		});

	}

	export interface InternalServiceError {
	}
	export interface InternalServiceErrorFormProperties {
	}
	export function CreateInternalServiceErrorFormGroup() {
		return new FormGroup<InternalServiceErrorFormProperties>({
		});

	}

	export interface NotAuthorizedException {
	}
	export interface NotAuthorizedExceptionFormProperties {
	}
	export function CreateNotAuthorizedExceptionFormGroup() {
		return new FormGroup<NotAuthorizedExceptionFormProperties>({
		});

	}

	export interface GetDimensionKeyDetailsResponse {
		Dimensions?: Array<DimensionKeyDetail>;
	}
	export interface GetDimensionKeyDetailsResponseFormProperties {
	}
	export function CreateGetDimensionKeyDetailsResponseFormGroup() {
		return new FormGroup<GetDimensionKeyDetailsResponseFormProperties>({
		});

	}


	/** An object that describes the details for a specified dimension. */
	export interface DimensionKeyDetail {
		Value?: string;
		Dimension?: string;
		Status?: DetailStatus;
	}

	/** An object that describes the details for a specified dimension. */
	export interface DimensionKeyDetailFormProperties {
		Value: FormControl<string | null | undefined>,
		Dimension: FormControl<string | null | undefined>,
		Status: FormControl<DetailStatus | null | undefined>,
	}
	export function CreateDimensionKeyDetailFormGroup() {
		return new FormGroup<DimensionKeyDetailFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
			Dimension: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DetailStatus | null | undefined>(undefined),
		});

	}

	export enum DetailStatus { AVAILABLE = 0, PROCESSING = 1, UNAVAILABLE = 2 }

	export interface GetDimensionKeyDetailsRequest {

		/** Required */
		ServiceType: ServiceType;

		/** Required */
		Identifier: string;

		/** Required */
		Group: string;

		/** Required */
		GroupIdentifier: string;
		RequestedDimensions?: Array<string>;
	}
	export interface GetDimensionKeyDetailsRequestFormProperties {

		/** Required */
		ServiceType: FormControl<ServiceType | null | undefined>,

		/** Required */
		Identifier: FormControl<string | null | undefined>,

		/** Required */
		Group: FormControl<string | null | undefined>,

		/** Required */
		GroupIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateGetDimensionKeyDetailsRequestFormGroup() {
		return new FormGroup<GetDimensionKeyDetailsRequestFormProperties>({
			ServiceType: new FormControl<ServiceType | null | undefined>(undefined, [Validators.required]),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Group: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetResourceMetadataResponse {
		Identifier?: string;
		Features?: FeatureMetadataMap;
	}
	export interface GetResourceMetadataResponseFormProperties {
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceMetadataResponseFormGroup() {
		return new FormGroup<GetResourceMetadataResponseFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FeatureMetadataMap {
	}
	export interface FeatureMetadataMapFormProperties {
	}
	export function CreateFeatureMetadataMapFormGroup() {
		return new FormGroup<FeatureMetadataMapFormProperties>({
		});

	}

	export interface GetResourceMetadataRequest {

		/** Required */
		ServiceType: ServiceType;

		/** Required */
		Identifier: string;
	}
	export interface GetResourceMetadataRequestFormProperties {

		/** Required */
		ServiceType: FormControl<ServiceType | null | undefined>,

		/** Required */
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceMetadataRequestFormGroup() {
		return new FormGroup<GetResourceMetadataRequestFormProperties>({
			ServiceType: new FormControl<ServiceType | null | undefined>(undefined, [Validators.required]),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetResourceMetricsResponse {
		AlignedStartTime?: Date;
		AlignedEndTime?: Date;
		Identifier?: string;
		MetricList?: Array<MetricKeyDataPoints>;
		NextToken?: string;
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


	/** A time-ordered series of data points, corresponding to a dimension of a Performance Insights metric. */
	export interface MetricKeyDataPoints {
		Key?: ResponseResourceMetricKey;
		DataPoints?: Array<DataPoint>;
	}

	/** A time-ordered series of data points, corresponding to a dimension of a Performance Insights metric. */
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
		ServiceType: ServiceType;

		/** Required */
		Identifier: string;

		/** Required */
		MetricQueries: Array<MetricQuery>;

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;
		PeriodInSeconds?: number | null;
		MaxResults?: number | null;
		NextToken?: string;
		PeriodAlignment?: PeriodAlignment;
	}
	export interface GetResourceMetricsRequestFormProperties {

		/** Required */
		ServiceType: FormControl<ServiceType | null | undefined>,

		/** Required */
		Identifier: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
		PeriodInSeconds: FormControl<number | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		PeriodAlignment: FormControl<PeriodAlignment | null | undefined>,
	}
	export function CreateGetResourceMetricsRequestFormGroup() {
		return new FormGroup<GetResourceMetricsRequestFormProperties>({
			ServiceType: new FormControl<ServiceType | null | undefined>(undefined, [Validators.required]),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			PeriodInSeconds: new FormControl<number | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			PeriodAlignment: new FormControl<PeriodAlignment | null | undefined>(undefined),
		});

	}


	/** A single query to be processed. You must provide the metric to query. If no other parameters are specified, Performance Insights returns all data points for the specified metric. Optionally, you can request that the data points be aggregated by dimension group (<code>GroupBy</code>), and return only those data points that match your criteria (<code>Filter</code>). */
	export interface MetricQuery {

		/** Required */
		Metric: string;
		GroupBy?: DimensionGroup;
		Filter?: MetricQueryFilterMap;
	}

	/** A single query to be processed. You must provide the metric to query. If no other parameters are specified, Performance Insights returns all data points for the specified metric. Optionally, you can request that the data points be aggregated by dimension group (<code>GroupBy</code>), and return only those data points that match your criteria (<code>Filter</code>). */
	export interface MetricQueryFormProperties {

		/** Required */
		Metric: FormControl<string | null | undefined>,
	}
	export function CreateMetricQueryFormGroup() {
		return new FormGroup<MetricQueryFormProperties>({
			Metric: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PeriodAlignment { END_TIME = 0, START_TIME = 1 }

	export interface ListAvailableResourceDimensionsResponse {
		MetricDimensions?: Array<MetricDimensionGroups>;
		NextToken?: string;
	}
	export interface ListAvailableResourceDimensionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAvailableResourceDimensionsResponseFormGroup() {
		return new FormGroup<ListAvailableResourceDimensionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The available dimension information for a metric type. */
	export interface MetricDimensionGroups {
		Metric?: string;
		Groups?: Array<DimensionGroupDetail>;
	}

	/** The available dimension information for a metric type. */
	export interface MetricDimensionGroupsFormProperties {
		Metric: FormControl<string | null | undefined>,
	}
	export function CreateMetricDimensionGroupsFormGroup() {
		return new FormGroup<MetricDimensionGroupsFormProperties>({
			Metric: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about dimensions within a dimension group. */
	export interface DimensionGroupDetail {
		Group?: string;
		Dimensions?: Array<DimensionDetail>;
	}

	/** Information about dimensions within a dimension group. */
	export interface DimensionGroupDetailFormProperties {
		Group: FormControl<string | null | undefined>,
	}
	export function CreateDimensionGroupDetailFormGroup() {
		return new FormGroup<DimensionGroupDetailFormProperties>({
			Group: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The information about a dimension. */
	export interface DimensionDetail {
		Identifier?: string;
	}

	/** The information about a dimension. */
	export interface DimensionDetailFormProperties {
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateDimensionDetailFormGroup() {
		return new FormGroup<DimensionDetailFormProperties>({
			Identifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAvailableResourceDimensionsRequest {

		/** Required */
		ServiceType: ServiceType;

		/** Required */
		Identifier: string;

		/** Required */
		Metrics: Array<string>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListAvailableResourceDimensionsRequestFormProperties {

		/** Required */
		ServiceType: FormControl<ServiceType | null | undefined>,

		/** Required */
		Identifier: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAvailableResourceDimensionsRequestFormGroup() {
		return new FormGroup<ListAvailableResourceDimensionsRequestFormProperties>({
			ServiceType: new FormControl<ServiceType | null | undefined>(undefined, [Validators.required]),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAvailableResourceMetricsResponse {
		Metrics?: Array<ResponseResourceMetric>;
		NextToken?: string;
	}
	export interface ListAvailableResourceMetricsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAvailableResourceMetricsResponseFormGroup() {
		return new FormGroup<ListAvailableResourceMetricsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains the full name, description, and unit of a metric.  */
	export interface ResponseResourceMetric {
		Metric?: string;
		Description?: string;
		Unit?: string;
	}

	/** An object that contains the full name, description, and unit of a metric.  */
	export interface ResponseResourceMetricFormProperties {
		Metric: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Unit: FormControl<string | null | undefined>,
	}
	export function CreateResponseResourceMetricFormGroup() {
		return new FormGroup<ResponseResourceMetricFormProperties>({
			Metric: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAvailableResourceMetricsRequest {

		/** Required */
		ServiceType: ServiceType;

		/** Required */
		Identifier: string;

		/** Required */
		MetricTypes: Array<string>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListAvailableResourceMetricsRequestFormProperties {

		/** Required */
		ServiceType: FormControl<ServiceType | null | undefined>,

		/** Required */
		Identifier: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAvailableResourceMetricsRequestFormGroup() {
		return new FormGroup<ListAvailableResourceMetricsRequestFormProperties>({
			ServiceType: new FormControl<ServiceType | null | undefined>(undefined, [Validators.required]),
			Identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FeatureStatus { ENABLED = 0, DISABLED = 1, UNSUPPORTED = 2, ENABLED_PENDING_REBOOT = 3, DISABLED_PENDING_REBOOT = 4, UNKNOWN = 5 }


	/** The metadata for a feature. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance. */
	export interface FeatureMetadata {
		Status?: FeatureStatus;
	}

	/** The metadata for a feature. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance. */
	export interface FeatureMetadataFormProperties {
		Status: FormControl<FeatureStatus | null | undefined>,
	}
	export function CreateFeatureMetadataFormGroup() {
		return new FormGroup<FeatureMetadataFormProperties>({
			Status: new FormControl<FeatureStatus | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric. </p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
		 * Post #X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeDimensionKeysResponse} Success
		 */
		DescribeDimensionKeys(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeDimensionKeysRequest): Observable<DescribeDimensionKeysResponse> {
			return this.http.post<DescribeDimensionKeysResponse>(this.baseUri + '#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID. This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large SQL statement text.
		 * Post #X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails
		 * @return {GetDimensionKeyDetailsResponse} Success
		 */
		GetDimensionKeyDetails(requestBody: GetDimensionKeyDetailsRequest): Observable<GetDimensionKeyDetailsResponse> {
			return this.http.post<GetDimensionKeyDetailsResponse>(this.baseUri + '#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance.
		 * Post #X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata
		 * @return {GetResourceMetadataResponse} Success
		 */
		GetResourceMetadata(requestBody: GetResourceMetadataRequest): Observable<GetResourceMetadataResponse> {
			return this.http.post<GetResourceMetadataResponse>(this.baseUri + '#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
		 * Post #X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetResourceMetricsResponse} Success
		 */
		GetResourceMetrics(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetResourceMetricsRequest): Observable<GetResourceMetricsResponse> {
			return this.http.post<GetResourceMetricsResponse>(this.baseUri + '#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.
		 * Post #X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAvailableResourceDimensionsResponse} Success
		 */
		ListAvailableResourceDimensions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAvailableResourceDimensionsRequest): Observable<ListAvailableResourceDimensionsResponse> {
			return this.http.post<ListAvailableResourceDimensionsResponse>(this.baseUri + '#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceDimensions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve metrics of the specified types that can be queried for a specified DB instance.
		 * Post #X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAvailableResourceMetricsResponse} Success
		 */
		ListAvailableResourceMetrics(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAvailableResourceMetricsRequest): Observable<ListAvailableResourceMetricsResponse> {
			return this.http.post<ListAvailableResourceMetricsResponse>(this.baseUri + '#X-Amz-Target=PerformanceInsightsv20180227.ListAvailableResourceMetrics?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum DescribeDimensionKeysX_Amz_Target { 'PerformanceInsightsv20180227.DescribeDimensionKeys' = 0 }

	export enum GetDimensionKeyDetailsX_Amz_Target { 'PerformanceInsightsv20180227.GetDimensionKeyDetails' = 0 }

	export enum GetResourceMetadataX_Amz_Target { 'PerformanceInsightsv20180227.GetResourceMetadata' = 0 }

	export enum GetResourceMetricsX_Amz_Target { 'PerformanceInsightsv20180227.GetResourceMetrics' = 0 }

	export enum ListAvailableResourceDimensionsX_Amz_Target { 'PerformanceInsightsv20180227.ListAvailableResourceDimensions' = 0 }

	export enum ListAvailableResourceMetricsX_Amz_Target { 'PerformanceInsightsv20180227.ListAvailableResourceMetrics' = 0 }

}

