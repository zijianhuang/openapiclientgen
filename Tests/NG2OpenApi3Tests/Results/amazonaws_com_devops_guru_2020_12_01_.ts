import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddNotificationChannelResponse {

		/** Required */
		Id: string;
	}
	export interface AddNotificationChannelResponseFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateAddNotificationChannelResponseFormGroup() {
		return new FormGroup<AddNotificationChannelResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p> Contains the Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to send it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p> */
	export interface SnsChannelConfig {
		TopicArn?: string;
	}

	/** <p> Contains the Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to send it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p> */
	export interface SnsChannelConfigFormProperties {
		TopicArn: FormControl<string | null | undefined>,
	}
	export function CreateSnsChannelConfigFormGroup() {
		return new FormGroup<SnsChannelConfigFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The filter configurations for the Amazon SNS notification topic you use with DevOps Guru. You can choose to specify which events or message types to receive notifications for. You can also choose to specify which severity levels to receive notifications for.  */
	export interface NotificationFilterConfig {
		Severities?: Array<InsightSeverity>;
		MessageTypes?: Array<NotificationMessageType>;
	}

	/**  The filter configurations for the Amazon SNS notification topic you use with DevOps Guru. You can choose to specify which events or message types to receive notifications for. You can also choose to specify which severity levels to receive notifications for.  */
	export interface NotificationFilterConfigFormProperties {
	}
	export function CreateNotificationFilterConfigFormGroup() {
		return new FormGroup<NotificationFilterConfigFormProperties>({
		});

	}

	export enum InsightSeverity { LOW = 0, MEDIUM = 1, HIGH = 2 }

	export enum NotificationMessageType { NEW_INSIGHT = 0, CLOSED_INSIGHT = 1, NEW_ASSOCIATION = 2, SEVERITY_UPGRADED = 3, NEW_RECOMMENDATION = 4 }

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface DeleteInsightResponse {
	}
	export interface DeleteInsightResponseFormProperties {
	}
	export function CreateDeleteInsightResponseFormGroup() {
		return new FormGroup<DeleteInsightResponseFormProperties>({
		});

	}

	export interface DescribeAccountHealthResponse {

		/** Required */
		OpenReactiveInsights: number;

		/** Required */
		OpenProactiveInsights: number;

		/** Required */
		MetricsAnalyzed: number;

		/** Required */
		ResourceHours: number;
		AnalyzedResourceCount?: number | null;
	}
	export interface DescribeAccountHealthResponseFormProperties {

		/** Required */
		OpenReactiveInsights: FormControl<number | null | undefined>,

		/** Required */
		OpenProactiveInsights: FormControl<number | null | undefined>,

		/** Required */
		MetricsAnalyzed: FormControl<number | null | undefined>,

		/** Required */
		ResourceHours: FormControl<number | null | undefined>,
		AnalyzedResourceCount: FormControl<number | null | undefined>,
	}
	export function CreateDescribeAccountHealthResponseFormGroup() {
		return new FormGroup<DescribeAccountHealthResponseFormProperties>({
			OpenReactiveInsights: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			OpenProactiveInsights: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MetricsAnalyzed: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ResourceHours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			AnalyzedResourceCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeAccountOverviewResponse {

		/** Required */
		ReactiveInsights: number;

		/** Required */
		ProactiveInsights: number;

		/** Required */
		MeanTimeToRecoverInMilliseconds: number;
	}
	export interface DescribeAccountOverviewResponseFormProperties {

		/** Required */
		ReactiveInsights: FormControl<number | null | undefined>,

		/** Required */
		ProactiveInsights: FormControl<number | null | undefined>,

		/** Required */
		MeanTimeToRecoverInMilliseconds: FormControl<number | null | undefined>,
	}
	export function CreateDescribeAccountOverviewResponseFormGroup() {
		return new FormGroup<DescribeAccountOverviewResponseFormProperties>({
			ReactiveInsights: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ProactiveInsights: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MeanTimeToRecoverInMilliseconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAnomalyResponse {
		ProactiveAnomaly?: ProactiveAnomaly;
		ReactiveAnomaly?: ReactiveAnomaly;
	}
	export interface DescribeAnomalyResponseFormProperties {
	}
	export function CreateDescribeAnomalyResponseFormGroup() {
		return new FormGroup<DescribeAnomalyResponseFormProperties>({
		});

	}


	/** Information about an anomaly. This object is returned by <code>ListAnomalies</code>. */
	export interface ProactiveAnomaly {
		Id?: string;
		Severity?: InsightSeverity;
		Status?: AnomalyStatus;
		UpdateTime?: Date;

		/** A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies the time range when DevOps Guru opens and then closes an anomaly. */
		AnomalyTimeRange?: AnomalyTimeRange;
		AnomalyReportedTimeRange?: AnomalyReportedTimeRange;

		/** The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur. */
		PredictionTimeRange?: PredictionTimeRange;
		SourceDetails?: AnomalySourceDetails;
		AssociatedInsightId?: string;

		/** A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
		ResourceCollection?: ResourceCollection;
		Limit?: number | null;
		SourceMetadata?: AnomalySourceMetadata;
		AnomalyResources?: Array<AnomalyResource>;
		Description?: string;
	}

	/** Information about an anomaly. This object is returned by <code>ListAnomalies</code>. */
	export interface ProactiveAnomalyFormProperties {
		Id: FormControl<string | null | undefined>,
		Severity: FormControl<InsightSeverity | null | undefined>,
		Status: FormControl<AnomalyStatus | null | undefined>,
		UpdateTime: FormControl<Date | null | undefined>,
		AssociatedInsightId: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateProactiveAnomalyFormGroup() {
		return new FormGroup<ProactiveAnomalyFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<InsightSeverity | null | undefined>(undefined),
			Status: new FormControl<AnomalyStatus | null | undefined>(undefined),
			UpdateTime: new FormControl<Date | null | undefined>(undefined),
			AssociatedInsightId: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AnomalyStatus { ONGOING = 0, CLOSED = 1 }


	/**  A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies the time range when DevOps Guru opens and then closes an anomaly.  */
	export interface AnomalyTimeRange {

		/** Required */
		StartTime: Date;
		EndTime?: Date;
	}

	/**  A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies the time range when DevOps Guru opens and then closes an anomaly.  */
	export interface AnomalyTimeRangeFormProperties {

		/** Required */
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateAnomalyTimeRangeFormGroup() {
		return new FormGroup<AnomalyTimeRangeFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  A time range that specifies when DevOps Guru opens and then closes an anomaly. This is different from <code>AnomalyTimeRange</code>, which specifies the time range when DevOps Guru actually observes the anomalous behavior.  */
	export interface AnomalyReportedTimeRange {

		/** Required */
		OpenTime: Date;
		CloseTime?: Date;
	}

	/**  A time range that specifies when DevOps Guru opens and then closes an anomaly. This is different from <code>AnomalyTimeRange</code>, which specifies the time range when DevOps Guru actually observes the anomalous behavior.  */
	export interface AnomalyReportedTimeRangeFormProperties {

		/** Required */
		OpenTime: FormControl<Date | null | undefined>,
		CloseTime: FormControl<Date | null | undefined>,
	}
	export function CreateAnomalyReportedTimeRangeFormGroup() {
		return new FormGroup<AnomalyReportedTimeRangeFormProperties>({
			OpenTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CloseTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.  */
	export interface PredictionTimeRange {

		/** Required */
		StartTime: Date;
		EndTime?: Date;
	}

	/**  The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.  */
	export interface PredictionTimeRangeFormProperties {

		/** Required */
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreatePredictionTimeRangeFormGroup() {
		return new FormGroup<PredictionTimeRangeFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  Details about the source of the anomalous operational data that triggered the anomaly. */
	export interface AnomalySourceDetails {
		CloudWatchMetrics?: Array<CloudWatchMetricsDetail>;
		PerformanceInsightsMetrics?: Array<PerformanceInsightsMetricsDetail>;
	}

	/**  Details about the source of the anomalous operational data that triggered the anomaly. */
	export interface AnomalySourceDetailsFormProperties {
	}
	export function CreateAnomalySourceDetailsFormGroup() {
		return new FormGroup<AnomalySourceDetailsFormProperties>({
		});

	}


	/**  Information about an Amazon CloudWatch metric.  */
	export interface CloudWatchMetricsDetail {
		MetricName?: string;
		Namespace?: string;
		Dimensions?: Array<CloudWatchMetricsDimension>;
		Stat?: CloudWatchMetricsStat;
		Unit?: string;
		Period?: number | null;
		MetricDataSummary?: CloudWatchMetricsDataSummary;
	}

	/**  Information about an Amazon CloudWatch metric.  */
	export interface CloudWatchMetricsDetailFormProperties {
		MetricName: FormControl<string | null | undefined>,
		Namespace: FormControl<string | null | undefined>,
		Stat: FormControl<CloudWatchMetricsStat | null | undefined>,
		Unit: FormControl<string | null | undefined>,
		Period: FormControl<number | null | undefined>,
	}
	export function CreateCloudWatchMetricsDetailFormGroup() {
		return new FormGroup<CloudWatchMetricsDetailFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined),
			Namespace: new FormControl<string | null | undefined>(undefined),
			Stat: new FormControl<CloudWatchMetricsStat | null | undefined>(undefined),
			Unit: new FormControl<string | null | undefined>(undefined),
			Period: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The dimension of an Amazon CloudWatch metric that is used when DevOps Guru analyzes the resources in your account for operational problems and anomalous behavior. A dimension is a name/value pair that is part of the identity of a metric. A metric can have up to 10 dimensions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension">Dimensions</a> in the <i>Amazon CloudWatch User Guide</i>.  */
	export interface CloudWatchMetricsDimension {
		Name?: string;
		Value?: string;
	}

	/**  The dimension of an Amazon CloudWatch metric that is used when DevOps Guru analyzes the resources in your account for operational problems and anomalous behavior. A dimension is a name/value pair that is part of the identity of a metric. A metric can have up to 10 dimensions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension">Dimensions</a> in the <i>Amazon CloudWatch User Guide</i>.  */
	export interface CloudWatchMetricsDimensionFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchMetricsDimensionFormGroup() {
		return new FormGroup<CloudWatchMetricsDimensionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloudWatchMetricsStat { Sum = 0, Average = 1, SampleCount = 2, Minimum = 3, Maximum = 4, p99 = 5, p90 = 6, p50 = 7 }


	/** Contains information about the analyzed metrics that displayed anomalous behavior.  */
	export interface CloudWatchMetricsDataSummary {
		TimestampMetricValuePairList?: Array<TimestampMetricValuePair>;
		StatusCode?: CloudWatchMetricDataStatusCode;
	}

	/** Contains information about the analyzed metrics that displayed anomalous behavior.  */
	export interface CloudWatchMetricsDataSummaryFormProperties {
		StatusCode: FormControl<CloudWatchMetricDataStatusCode | null | undefined>,
	}
	export function CreateCloudWatchMetricsDataSummaryFormGroup() {
		return new FormGroup<CloudWatchMetricsDataSummaryFormProperties>({
			StatusCode: new FormControl<CloudWatchMetricDataStatusCode | null | undefined>(undefined),
		});

	}


	/** A pair that contains metric values at the respective timestamp. */
	export interface TimestampMetricValuePair {
		Timestamp?: Date;
		MetricValue?: number | null;
	}

	/** A pair that contains metric values at the respective timestamp. */
	export interface TimestampMetricValuePairFormProperties {
		Timestamp: FormControl<Date | null | undefined>,
		MetricValue: FormControl<number | null | undefined>,
	}
	export function CreateTimestampMetricValuePairFormGroup() {
		return new FormGroup<TimestampMetricValuePairFormProperties>({
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			MetricValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CloudWatchMetricDataStatusCode { Complete = 0, InternalError = 1, PartialData = 2 }


	/** <p>Details about Performance Insights metrics.</p> <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host. </p> <ul> <li> <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>. </p> </li> </ul> */
	export interface PerformanceInsightsMetricsDetail {
		MetricDisplayName?: string;
		Unit?: string;
		MetricQuery?: PerformanceInsightsMetricQuery;
		ReferenceData?: Array<PerformanceInsightsReferenceData>;
		StatsAtAnomaly?: Array<PerformanceInsightsStat>;
		StatsAtBaseline?: Array<PerformanceInsightsStat>;
	}

	/** <p>Details about Performance Insights metrics.</p> <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host. </p> <ul> <li> <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>. </p> </li> </ul> */
	export interface PerformanceInsightsMetricsDetailFormProperties {
		MetricDisplayName: FormControl<string | null | undefined>,
		Unit: FormControl<string | null | undefined>,
	}
	export function CreatePerformanceInsightsMetricsDetailFormGroup() {
		return new FormGroup<PerformanceInsightsMetricsDetailFormProperties>({
			MetricDisplayName: new FormControl<string | null | undefined>(undefined),
			Unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A single query to be processed. Use these parameters to query the Performance Insights <code>GetResourceMetrics</code> API to retrieve the metrics for an anomaly. For more information, see <code> <a href="https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetResourceMetrics.html">GetResourceMetrics</a> </code> in the <i>Amazon RDS Performance Insights API Reference</i>.</p> <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host. </p> <ul> <li> <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>. </p> </li> </ul> */
	export interface PerformanceInsightsMetricQuery {
		Metric?: string;
		GroupBy?: PerformanceInsightsMetricDimensionGroup;
		Filter?: PerformanceInsightsMetricFilterMap;
	}

	/** <p>A single query to be processed. Use these parameters to query the Performance Insights <code>GetResourceMetrics</code> API to retrieve the metrics for an anomaly. For more information, see <code> <a href="https://docs.aws.amazon.com/performance-insights/latest/APIReference/API_GetResourceMetrics.html">GetResourceMetrics</a> </code> in the <i>Amazon RDS Performance Insights API Reference</i>.</p> <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host. </p> <ul> <li> <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>. </p> </li> </ul> */
	export interface PerformanceInsightsMetricQueryFormProperties {
		Metric: FormControl<string | null | undefined>,
	}
	export function CreatePerformanceInsightsMetricQueryFormGroup() {
		return new FormGroup<PerformanceInsightsMetricQueryFormProperties>({
			Metric: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note> <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host. </p> <ul> <li> <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>. </p> </li> </ul> */
	export interface PerformanceInsightsMetricDimensionGroup {
		Group?: string;
		Dimensions?: Array<string>;
		Limit?: number | null;
	}

	/** <p>A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note> <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host. </p> <ul> <li> <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>. </p> </li> <li> <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>. </p> </li> </ul> */
	export interface PerformanceInsightsMetricDimensionGroupFormProperties {
		Group: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreatePerformanceInsightsMetricDimensionGroupFormGroup() {
		return new FormGroup<PerformanceInsightsMetricDimensionGroupFormProperties>({
			Group: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PerformanceInsightsMetricFilterMap {
	}
	export interface PerformanceInsightsMetricFilterMapFormProperties {
	}
	export function CreatePerformanceInsightsMetricFilterMapFormGroup() {
		return new FormGroup<PerformanceInsightsMetricFilterMapFormProperties>({
		});

	}


	/** Reference data used to evaluate Performance Insights to determine if its performance is anomalous or not. */
	export interface PerformanceInsightsReferenceData {
		Name?: string;
		ComparisonValues?: PerformanceInsightsReferenceComparisonValues;
	}

	/** Reference data used to evaluate Performance Insights to determine if its performance is anomalous or not. */
	export interface PerformanceInsightsReferenceDataFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreatePerformanceInsightsReferenceDataFormGroup() {
		return new FormGroup<PerformanceInsightsReferenceDataFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reference scalar values and other metrics that DevOps Guru displays on a graph in its console along with the actual metrics it analyzed. Compare these reference values to your actual metrics to help you understand anomalous behavior that DevOps Guru detected. */
	export interface PerformanceInsightsReferenceComparisonValues {
		ReferenceScalar?: PerformanceInsightsReferenceScalar;
		ReferenceMetric?: PerformanceInsightsReferenceMetric;
	}

	/** Reference scalar values and other metrics that DevOps Guru displays on a graph in its console along with the actual metrics it analyzed. Compare these reference values to your actual metrics to help you understand anomalous behavior that DevOps Guru detected. */
	export interface PerformanceInsightsReferenceComparisonValuesFormProperties {
	}
	export function CreatePerformanceInsightsReferenceComparisonValuesFormGroup() {
		return new FormGroup<PerformanceInsightsReferenceComparisonValuesFormProperties>({
		});

	}


	/** A reference value to compare Performance Insights metrics against to determine if the metrics demonstrate anomalous behavior. */
	export interface PerformanceInsightsReferenceScalar {
		Value?: number | null;
	}

	/** A reference value to compare Performance Insights metrics against to determine if the metrics demonstrate anomalous behavior. */
	export interface PerformanceInsightsReferenceScalarFormProperties {
		Value: FormControl<number | null | undefined>,
	}
	export function CreatePerformanceInsightsReferenceScalarFormGroup() {
		return new FormGroup<PerformanceInsightsReferenceScalarFormProperties>({
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a reference metric used to evaluate Performance Insights. */
	export interface PerformanceInsightsReferenceMetric {
		MetricQuery?: PerformanceInsightsMetricQuery;
	}

	/** Information about a reference metric used to evaluate Performance Insights. */
	export interface PerformanceInsightsReferenceMetricFormProperties {
	}
	export function CreatePerformanceInsightsReferenceMetricFormGroup() {
		return new FormGroup<PerformanceInsightsReferenceMetricFormProperties>({
		});

	}


	/** A statistic in a Performance Insights collection. */
	export interface PerformanceInsightsStat {
		Type?: string;
		Value?: number | null;
	}

	/** A statistic in a Performance Insights collection. */
	export interface PerformanceInsightsStatFormProperties {
		Type: FormControl<string | null | undefined>,
		Value: FormControl<number | null | undefined>,
	}
	export function CreatePerformanceInsightsStatFormGroup() {
		return new FormGroup<PerformanceInsightsStatFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks.  */
	export interface ResourceCollection {
		CloudFormation?: CloudFormationCollection;
		Tags?: Array<TagCollection>;
	}

	/**  A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks.  */
	export interface ResourceCollectionFormProperties {
	}
	export function CreateResourceCollectionFormGroup() {
		return new FormGroup<ResourceCollectionFormProperties>({
		});

	}


	/**  Information about Amazon Web Services CloudFormation stacks. You can use up to 500 stacks to specify which Amazon Web Services resources in your account to analyze. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>Amazon Web Services CloudFormation User Guide</i>.  */
	export interface CloudFormationCollection {
		StackNames?: Array<string>;
	}

	/**  Information about Amazon Web Services CloudFormation stacks. You can use up to 500 stacks to specify which Amazon Web Services resources in your account to analyze. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>Amazon Web Services CloudFormation User Guide</i>.  */
	export interface CloudFormationCollectionFormProperties {
	}
	export function CreateCloudFormationCollectionFormGroup() {
		return new FormGroup<CloudFormationCollectionFormProperties>({
		});

	}


	/** <p>A collection of Amazon Web Services tags.</p> <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging best practices</a> whitepaper. </p> <p>Each Amazon Web Services tag has two parts. </p> <ul> <li> <p>A tag <i>key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag <i>keys</i> are case-sensitive.</p> </li> <li> <p>An optional field known as a tag <i>value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag <i>value</i> is the same as using an empty string. Like tag <i>keys</i>, tag <i>values</i> are case-sensitive.</p> </li> </ul> <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p> <important> <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the prefix <code>Devops-guru-</code>. The tag <i>key</i> might be <code>DevOps-Guru-deployment-application</code> or <code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive. For example, DevOps Guru works with a <i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named <code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your application might be <code>Devops-Guru-production-application/RDS</code> or <code>Devops-Guru-production-application/containers</code>.</p> </important> */
	export interface TagCollection {

		/** Required */
		AppBoundaryKey: string;

		/** Required */
		TagValues: Array<string>;
	}

	/** <p>A collection of Amazon Web Services tags.</p> <p>Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web Services services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more information about using tags, see the <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html">Tagging best practices</a> whitepaper. </p> <p>Each Amazon Web Services tag has two parts. </p> <ul> <li> <p>A tag <i>key</i> (for example, <code>CostCenter</code>, <code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag <i>keys</i> are case-sensitive.</p> </li> <li> <p>An optional field known as a tag <i>value</i> (for example, <code>111122223333</code>, <code>Production</code>, or a team name). Omitting the tag <i>value</i> is the same as using an empty string. Like tag <i>keys</i>, tag <i>values</i> are case-sensitive.</p> </li> </ul> <p>Together these are known as <i>key</i>-<i>value</i> pairs.</p> <important> <p>The string used for a <i>key</i> in a tag that you use to define your resource coverage must begin with the prefix <code>Devops-guru-</code>. The tag <i>key</i> might be <code>DevOps-Guru-deployment-application</code> or <code>devops-guru-rds-application</code>. When you create a <i>key</i>, the case of characters in the <i>key</i> can be whatever you choose. After you create a <i>key</i>, it is case-sensitive. For example, DevOps Guru works with a <i>key</i> named <code>devops-guru-rds</code> and a <i>key</i> named <code>DevOps-Guru-RDS</code>, and these act as two different <i>keys</i>. Possible <i>key</i>/<i>value</i> pairs in your application might be <code>Devops-Guru-production-application/RDS</code> or <code>Devops-Guru-production-application/containers</code>.</p> </important> */
	export interface TagCollectionFormProperties {

		/** Required */
		AppBoundaryKey: FormControl<string | null | undefined>,
	}
	export function CreateTagCollectionFormGroup() {
		return new FormGroup<TagCollectionFormProperties>({
			AppBoundaryKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Metadata about the detection source that generates proactive anomalies. The anomaly is detected using analysis of the metric data&#x2028; over a period of time */
	export interface AnomalySourceMetadata {
		Source?: string;
		SourceResourceName?: string;
		SourceResourceType?: string;
	}

	/** Metadata about the detection source that generates proactive anomalies. The anomaly is detected using analysis of the metric data&#x2028; over a period of time */
	export interface AnomalySourceMetadataFormProperties {
		Source: FormControl<string | null | undefined>,
		SourceResourceName: FormControl<string | null | undefined>,
		SourceResourceType: FormControl<string | null | undefined>,
	}
	export function CreateAnomalySourceMetadataFormGroup() {
		return new FormGroup<AnomalySourceMetadataFormProperties>({
			Source: new FormControl<string | null | undefined>(undefined),
			SourceResourceName: new FormControl<string | null | undefined>(undefined),
			SourceResourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon Web Services resources in which DevOps Guru detected unusual behavior that resulted in the generation of an anomaly. When DevOps Guru detects multiple related anomalies, it creates and insight with details about the anomalous behavior and suggestions about how to correct the problem. */
	export interface AnomalyResource {
		Name?: string;
		Type?: string;
	}

	/** The Amazon Web Services resources in which DevOps Guru detected unusual behavior that resulted in the generation of an anomaly. When DevOps Guru detects multiple related anomalies, it creates and insight with details about the anomalous behavior and suggestions about how to correct the problem. */
	export interface AnomalyResourceFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAnomalyResourceFormGroup() {
		return new FormGroup<AnomalyResourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a reactive anomaly. This object is returned by <code>ListAnomalies</code>. */
	export interface ReactiveAnomaly {
		Id?: string;
		Severity?: InsightSeverity;
		Status?: AnomalyStatus;

		/** A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies the time range when DevOps Guru opens and then closes an anomaly. */
		AnomalyTimeRange?: AnomalyTimeRange;
		AnomalyReportedTimeRange?: AnomalyReportedTimeRange;
		SourceDetails?: AnomalySourceDetails;
		AssociatedInsightId?: string;

		/** A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
		ResourceCollection?: ResourceCollection;
		Type?: AnomalyType;
		Name?: string;
		Description?: string;
		CausalAnomalyId?: string;
		AnomalyResources?: Array<AnomalyResource>;
	}

	/** Details about a reactive anomaly. This object is returned by <code>ListAnomalies</code>. */
	export interface ReactiveAnomalyFormProperties {
		Id: FormControl<string | null | undefined>,
		Severity: FormControl<InsightSeverity | null | undefined>,
		Status: FormControl<AnomalyStatus | null | undefined>,
		AssociatedInsightId: FormControl<string | null | undefined>,
		Type: FormControl<AnomalyType | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CausalAnomalyId: FormControl<string | null | undefined>,
	}
	export function CreateReactiveAnomalyFormGroup() {
		return new FormGroup<ReactiveAnomalyFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<InsightSeverity | null | undefined>(undefined),
			Status: new FormControl<AnomalyStatus | null | undefined>(undefined),
			AssociatedInsightId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<AnomalyType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CausalAnomalyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AnomalyType { CAUSAL = 0, CONTEXTUAL = 1 }

	export interface DescribeEventSourcesConfigResponse {
		EventSources?: EventSourcesConfig;
	}
	export interface DescribeEventSourcesConfigResponseFormProperties {
	}
	export function CreateDescribeEventSourcesConfigResponseFormGroup() {
		return new FormGroup<DescribeEventSourcesConfigResponseFormProperties>({
		});

	}


	/** Information about the integration of DevOps Guru as consumer with another AWS service, such as AWS CodeGuru Profiler via EventBridge. */
	export interface EventSourcesConfig {
		AmazonCodeGuruProfiler?: AmazonCodeGuruProfilerIntegration;
	}

	/** Information about the integration of DevOps Guru as consumer with another AWS service, such as AWS CodeGuru Profiler via EventBridge. */
	export interface EventSourcesConfigFormProperties {
	}
	export function CreateEventSourcesConfigFormGroup() {
		return new FormGroup<EventSourcesConfigFormProperties>({
		});

	}


	/** Information about your account's integration with Amazon CodeGuru Profiler. This returns whether DevOps Guru is configured to consume recommendations generated from Amazon CodeGuru Profiler. */
	export interface AmazonCodeGuruProfilerIntegration {
		Status?: EventSourceOptInStatus;
	}

	/** Information about your account's integration with Amazon CodeGuru Profiler. This returns whether DevOps Guru is configured to consume recommendations generated from Amazon CodeGuru Profiler. */
	export interface AmazonCodeGuruProfilerIntegrationFormProperties {
		Status: FormControl<EventSourceOptInStatus | null | undefined>,
	}
	export function CreateAmazonCodeGuruProfilerIntegrationFormGroup() {
		return new FormGroup<AmazonCodeGuruProfilerIntegrationFormProperties>({
			Status: new FormControl<EventSourceOptInStatus | null | undefined>(undefined),
		});

	}

	export enum EventSourceOptInStatus { ENABLED = 0, DISABLED = 1 }

	export interface DescribeFeedbackResponse {

		/** Information about insight feedback received from a customer. */
		InsightFeedback?: InsightFeedback;
	}
	export interface DescribeFeedbackResponseFormProperties {
	}
	export function CreateDescribeFeedbackResponseFormGroup() {
		return new FormGroup<DescribeFeedbackResponseFormProperties>({
		});

	}


	/**  Information about insight feedback received from a customer.  */
	export interface InsightFeedback {
		Id?: string;
		Feedback?: InsightFeedbackOption;
	}

	/**  Information about insight feedback received from a customer.  */
	export interface InsightFeedbackFormProperties {
		Id: FormControl<string | null | undefined>,
		Feedback: FormControl<InsightFeedbackOption | null | undefined>,
	}
	export function CreateInsightFeedbackFormGroup() {
		return new FormGroup<InsightFeedbackFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Feedback: new FormControl<InsightFeedbackOption | null | undefined>(undefined),
		});

	}

	export enum InsightFeedbackOption { VALID_COLLECTION = 0, RECOMMENDATION_USEFUL = 1, ALERT_TOO_SENSITIVE = 2, DATA_NOISY_ANOMALY = 3, DATA_INCORRECT = 4 }

	export interface DescribeInsightResponse {
		ProactiveInsight?: ProactiveInsight;
		ReactiveInsight?: ReactiveInsight;
	}
	export interface DescribeInsightResponseFormProperties {
	}
	export function CreateDescribeInsightResponseFormGroup() {
		return new FormGroup<DescribeInsightResponseFormProperties>({
		});

	}


	/** Details about a proactive insight. This object is returned by <code>ListInsights</code>. */
	export interface ProactiveInsight {
		Id?: string;
		Name?: string;
		Severity?: InsightSeverity;
		Status?: AnomalyStatus;

		/** A time ranged that specifies when the observed behavior in an insight started and ended. */
		InsightTimeRange?: InsightTimeRange;

		/** The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur. */
		PredictionTimeRange?: PredictionTimeRange;

		/** A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
		ResourceCollection?: ResourceCollection;
		SsmOpsItemId?: string;
		Description?: string;
	}

	/** Details about a proactive insight. This object is returned by <code>ListInsights</code>. */
	export interface ProactiveInsightFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Severity: FormControl<InsightSeverity | null | undefined>,
		Status: FormControl<AnomalyStatus | null | undefined>,
		SsmOpsItemId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateProactiveInsightFormGroup() {
		return new FormGroup<ProactiveInsightFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<InsightSeverity | null | undefined>(undefined),
			Status: new FormControl<AnomalyStatus | null | undefined>(undefined),
			SsmOpsItemId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A time ranged that specifies when the observed behavior in an insight started and ended.  */
	export interface InsightTimeRange {

		/** Required */
		StartTime: Date;
		EndTime?: Date;
	}

	/**  A time ranged that specifies when the observed behavior in an insight started and ended.  */
	export interface InsightTimeRangeFormProperties {

		/** Required */
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateInsightTimeRangeFormGroup() {
		return new FormGroup<InsightTimeRangeFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  Information about a reactive insight. This object is returned by <code>ListInsights</code>.  */
	export interface ReactiveInsight {
		Id?: string;
		Name?: string;
		Severity?: InsightSeverity;
		Status?: AnomalyStatus;

		/** A time ranged that specifies when the observed behavior in an insight started and ended. */
		InsightTimeRange?: InsightTimeRange;

		/** A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
		ResourceCollection?: ResourceCollection;
		SsmOpsItemId?: string;
		Description?: string;
	}

	/**  Information about a reactive insight. This object is returned by <code>ListInsights</code>.  */
	export interface ReactiveInsightFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Severity: FormControl<InsightSeverity | null | undefined>,
		Status: FormControl<AnomalyStatus | null | undefined>,
		SsmOpsItemId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateReactiveInsightFormGroup() {
		return new FormGroup<ReactiveInsightFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<InsightSeverity | null | undefined>(undefined),
			Status: new FormControl<AnomalyStatus | null | undefined>(undefined),
			SsmOpsItemId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeOrganizationHealthResponse {

		/** Required */
		OpenReactiveInsights: number;

		/** Required */
		OpenProactiveInsights: number;

		/** Required */
		MetricsAnalyzed: number;

		/** Required */
		ResourceHours: number;
	}
	export interface DescribeOrganizationHealthResponseFormProperties {

		/** Required */
		OpenReactiveInsights: FormControl<number | null | undefined>,

		/** Required */
		OpenProactiveInsights: FormControl<number | null | undefined>,

		/** Required */
		MetricsAnalyzed: FormControl<number | null | undefined>,

		/** Required */
		ResourceHours: FormControl<number | null | undefined>,
	}
	export function CreateDescribeOrganizationHealthResponseFormGroup() {
		return new FormGroup<DescribeOrganizationHealthResponseFormProperties>({
			OpenReactiveInsights: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			OpenProactiveInsights: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MetricsAnalyzed: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ResourceHours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeOrganizationOverviewResponse {

		/** Required */
		ReactiveInsights: number;

		/** Required */
		ProactiveInsights: number;
	}
	export interface DescribeOrganizationOverviewResponseFormProperties {

		/** Required */
		ReactiveInsights: FormControl<number | null | undefined>,

		/** Required */
		ProactiveInsights: FormControl<number | null | undefined>,
	}
	export function CreateDescribeOrganizationOverviewResponseFormGroup() {
		return new FormGroup<DescribeOrganizationOverviewResponseFormProperties>({
			ReactiveInsights: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ProactiveInsights: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeOrganizationResourceCollectionHealthResponse {
		CloudFormation?: Array<CloudFormationHealth>;
		Service?: Array<ServiceHealth>;
		Account?: Array<AccountHealth>;
		NextToken?: string;
		Tags?: Array<TagHealth>;
	}
	export interface DescribeOrganizationResourceCollectionHealthResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeOrganizationResourceCollectionHealthResponseFormGroup() {
		return new FormGroup<DescribeOrganizationResourceCollectionHealthResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about the health of Amazon Web Services resources in your account that are specified by an Amazon Web Services CloudFormation stack.  */
	export interface CloudFormationHealth {
		StackName?: string;
		Insight?: InsightHealth;
		AnalyzedResourceCount?: number | null;
	}

	/**  Information about the health of Amazon Web Services resources in your account that are specified by an Amazon Web Services CloudFormation stack.  */
	export interface CloudFormationHealthFormProperties {
		StackName: FormControl<string | null | undefined>,
		AnalyzedResourceCount: FormControl<number | null | undefined>,
	}
	export function CreateCloudFormationHealthFormGroup() {
		return new FormGroup<CloudFormationHealthFormProperties>({
			StackName: new FormControl<string | null | undefined>(undefined),
			AnalyzedResourceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  Information about the number of open reactive and proactive insights that can be used to gauge the health of your system.  */
	export interface InsightHealth {
		OpenProactiveInsights?: number | null;
		OpenReactiveInsights?: number | null;
		MeanTimeToRecoverInMilliseconds?: number | null;
	}

	/**  Information about the number of open reactive and proactive insights that can be used to gauge the health of your system.  */
	export interface InsightHealthFormProperties {
		OpenProactiveInsights: FormControl<number | null | undefined>,
		OpenReactiveInsights: FormControl<number | null | undefined>,
		MeanTimeToRecoverInMilliseconds: FormControl<number | null | undefined>,
	}
	export function CreateInsightHealthFormGroup() {
		return new FormGroup<InsightHealthFormProperties>({
			OpenProactiveInsights: new FormControl<number | null | undefined>(undefined),
			OpenReactiveInsights: new FormControl<number | null | undefined>(undefined),
			MeanTimeToRecoverInMilliseconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the health of an Amazon Web Services service. */
	export interface ServiceHealth {
		ServiceName?: ServiceName;
		Insight?: ServiceInsightHealth;
		AnalyzedResourceCount?: number | null;
	}

	/** Represents the health of an Amazon Web Services service. */
	export interface ServiceHealthFormProperties {
		ServiceName: FormControl<ServiceName | null | undefined>,
		AnalyzedResourceCount: FormControl<number | null | undefined>,
	}
	export function CreateServiceHealthFormGroup() {
		return new FormGroup<ServiceHealthFormProperties>({
			ServiceName: new FormControl<ServiceName | null | undefined>(undefined),
			AnalyzedResourceCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ServiceName { API_GATEWAY = 0, APPLICATION_ELB = 1, AUTO_SCALING_GROUP = 2, CLOUD_FRONT = 3, DYNAMO_DB = 4, EC2 = 5, ECS = 6, EKS = 7, ELASTIC_BEANSTALK = 8, ELASTI_CACHE = 9, ELB = 10, ES = 11, KINESIS = 12, LAMBDA = 13, NAT_GATEWAY = 14, NETWORK_ELB = 15, RDS = 16, REDSHIFT = 17, ROUTE_53 = 18, S3 = 19, SAGE_MAKER = 20, SNS = 21, SQS = 22, STEP_FUNCTIONS = 23, SWF = 24 }


	/** Contains the number of open proactive and reactive insights in an analyzed Amazon Web Services service. */
	export interface ServiceInsightHealth {
		OpenProactiveInsights?: number | null;
		OpenReactiveInsights?: number | null;
	}

	/** Contains the number of open proactive and reactive insights in an analyzed Amazon Web Services service. */
	export interface ServiceInsightHealthFormProperties {
		OpenProactiveInsights: FormControl<number | null | undefined>,
		OpenReactiveInsights: FormControl<number | null | undefined>,
	}
	export function CreateServiceInsightHealthFormGroup() {
		return new FormGroup<ServiceInsightHealthFormProperties>({
			OpenProactiveInsights: new FormControl<number | null | undefined>(undefined),
			OpenReactiveInsights: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account.  */
	export interface AccountHealth {
		AccountId?: string;
		Insight?: AccountInsightHealth;
	}

	/**  Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account.  */
	export interface AccountHealthFormProperties {
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateAccountHealthFormGroup() {
		return new FormGroup<AccountHealthFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about the number of open reactive and proactive insights that can be used to gauge the health of your system.  */
	export interface AccountInsightHealth {
		OpenProactiveInsights?: number | null;
		OpenReactiveInsights?: number | null;
	}

	/**  Information about the number of open reactive and proactive insights that can be used to gauge the health of your system.  */
	export interface AccountInsightHealthFormProperties {
		OpenProactiveInsights: FormControl<number | null | undefined>,
		OpenReactiveInsights: FormControl<number | null | undefined>,
	}
	export function CreateAccountInsightHealthFormGroup() {
		return new FormGroup<AccountInsightHealthFormProperties>({
			OpenProactiveInsights: new FormControl<number | null | undefined>(undefined),
			OpenReactiveInsights: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  Information about the health of Amazon Web Services resources in your account that are specified by an Amazon Web Services tag <i>key</i>.  */
	export interface TagHealth {
		AppBoundaryKey?: string;
		TagValue?: string;
		Insight?: InsightHealth;
		AnalyzedResourceCount?: number | null;
	}

	/**  Information about the health of Amazon Web Services resources in your account that are specified by an Amazon Web Services tag <i>key</i>.  */
	export interface TagHealthFormProperties {
		AppBoundaryKey: FormControl<string | null | undefined>,
		TagValue: FormControl<string | null | undefined>,
		AnalyzedResourceCount: FormControl<number | null | undefined>,
	}
	export function CreateTagHealthFormGroup() {
		return new FormGroup<TagHealthFormProperties>({
			AppBoundaryKey: new FormControl<string | null | undefined>(undefined),
			TagValue: new FormControl<string | null | undefined>(undefined),
			AnalyzedResourceCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeResourceCollectionHealthResponse {
		CloudFormation?: Array<CloudFormationHealth>;
		Service?: Array<ServiceHealth>;
		NextToken?: string;
		Tags?: Array<TagHealth>;
	}
	export interface DescribeResourceCollectionHealthResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResourceCollectionHealthResponseFormGroup() {
		return new FormGroup<DescribeResourceCollectionHealthResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeServiceIntegrationResponse {

		/** Information about the integration of DevOps Guru with another Amazon Web Services service, such as Amazon Web Services Systems Manager. */
		ServiceIntegration?: ServiceIntegrationConfig;
	}
	export interface DescribeServiceIntegrationResponseFormProperties {
	}
	export function CreateDescribeServiceIntegrationResponseFormGroup() {
		return new FormGroup<DescribeServiceIntegrationResponseFormProperties>({
		});

	}


	/**  Information about the integration of DevOps Guru with another Amazon Web Services service, such as Amazon Web Services Systems Manager.  */
	export interface ServiceIntegrationConfig {
		OpsCenter?: OpsCenterIntegration;
		LogsAnomalyDetection?: LogsAnomalyDetectionIntegration;
		KMSServerSideEncryption?: KMSServerSideEncryptionIntegration;
	}

	/**  Information about the integration of DevOps Guru with another Amazon Web Services service, such as Amazon Web Services Systems Manager.  */
	export interface ServiceIntegrationConfigFormProperties {
	}
	export function CreateServiceIntegrationConfigFormGroup() {
		return new FormGroup<ServiceIntegrationConfigFormProperties>({
		});

	}


	/**  Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight.  */
	export interface OpsCenterIntegration {
		OptInStatus?: EventSourceOptInStatus;
	}

	/**  Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight.  */
	export interface OpsCenterIntegrationFormProperties {
		OptInStatus: FormControl<EventSourceOptInStatus | null | undefined>,
	}
	export function CreateOpsCenterIntegrationFormGroup() {
		return new FormGroup<OpsCenterIntegrationFormProperties>({
			OptInStatus: new FormControl<EventSourceOptInStatus | null | undefined>(undefined),
		});

	}


	/**  Information about the integration of DevOps Guru with CloudWatch log groups for log anomaly detection.  */
	export interface LogsAnomalyDetectionIntegration {
		OptInStatus?: EventSourceOptInStatus;
	}

	/**  Information about the integration of DevOps Guru with CloudWatch log groups for log anomaly detection.  */
	export interface LogsAnomalyDetectionIntegrationFormProperties {
		OptInStatus: FormControl<EventSourceOptInStatus | null | undefined>,
	}
	export function CreateLogsAnomalyDetectionIntegrationFormGroup() {
		return new FormGroup<LogsAnomalyDetectionIntegrationFormProperties>({
			OptInStatus: new FormControl<EventSourceOptInStatus | null | undefined>(undefined),
		});

	}


	/**  Information about the KMS encryption used with DevOps Guru.  */
	export interface KMSServerSideEncryptionIntegration {
		KMSKeyId?: string;
		OptInStatus?: EventSourceOptInStatus;
		Type?: ServerSideEncryptionType;
	}

	/**  Information about the KMS encryption used with DevOps Guru.  */
	export interface KMSServerSideEncryptionIntegrationFormProperties {
		KMSKeyId: FormControl<string | null | undefined>,
		OptInStatus: FormControl<EventSourceOptInStatus | null | undefined>,
		Type: FormControl<ServerSideEncryptionType | null | undefined>,
	}
	export function CreateKMSServerSideEncryptionIntegrationFormGroup() {
		return new FormGroup<KMSServerSideEncryptionIntegrationFormProperties>({
			KMSKeyId: new FormControl<string | null | undefined>(undefined),
			OptInStatus: new FormControl<EventSourceOptInStatus | null | undefined>(undefined),
			Type: new FormControl<ServerSideEncryptionType | null | undefined>(undefined),
		});

	}

	export enum ServerSideEncryptionType { CUSTOMER_MANAGED_KEY = 0, AWS_OWNED_KMS_KEY = 1 }

	export interface GetCostEstimationResponse {
		ResourceCollection?: CostEstimationResourceCollectionFilter;
		Status?: CostEstimationStatus;
		Costs?: Array<ServiceResourceCost>;
		TimeRange?: CostEstimationTimeRange;
		TotalCost?: number | null;
		NextToken?: string;
	}
	export interface GetCostEstimationResponseFormProperties {
		Status: FormControl<CostEstimationStatus | null | undefined>,
		TotalCost: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCostEstimationResponseFormGroup() {
		return new FormGroup<GetCostEstimationResponseFormProperties>({
			Status: new FormControl<CostEstimationStatus | null | undefined>(undefined),
			TotalCost: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a filter used to specify which Amazon Web Services resources are analyzed to create a monthly DevOps Guru cost estimate. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.  */
	export interface CostEstimationResourceCollectionFilter {
		CloudFormation?: CloudFormationCostEstimationResourceCollectionFilter;
		Tags?: Array<TagCostEstimationResourceCollectionFilter>;
	}

	/** Information about a filter used to specify which Amazon Web Services resources are analyzed to create a monthly DevOps Guru cost estimate. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.  */
	export interface CostEstimationResourceCollectionFilterFormProperties {
	}
	export function CreateCostEstimationResourceCollectionFilterFormGroup() {
		return new FormGroup<CostEstimationResourceCollectionFilterFormProperties>({
		});

	}


	/** Information about an Amazon Web Services CloudFormation stack used to create a monthly cost estimate for DevOps Guru to analyze Amazon Web Services resources. The maximum number of stacks you can specify for a cost estimate is one. The estimate created is for the cost to analyze the Amazon Web Services resources defined by the stack. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>Amazon Web Services CloudFormation User Guide</i>. */
	export interface CloudFormationCostEstimationResourceCollectionFilter {
		StackNames?: Array<string>;
	}

	/** Information about an Amazon Web Services CloudFormation stack used to create a monthly cost estimate for DevOps Guru to analyze Amazon Web Services resources. The maximum number of stacks you can specify for a cost estimate is one. The estimate created is for the cost to analyze the Amazon Web Services resources defined by the stack. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>Amazon Web Services CloudFormation User Guide</i>. */
	export interface CloudFormationCostEstimationResourceCollectionFilterFormProperties {
	}
	export function CreateCloudFormationCostEstimationResourceCollectionFilterFormGroup() {
		return new FormGroup<CloudFormationCostEstimationResourceCollectionFilterFormProperties>({
		});

	}


	/** Information about a collection of Amazon Web Services resources that are identified by an Amazon Web Services tag. This collection of resources is used to create a monthly cost estimate for DevOps Guru to analyze Amazon Web Services resources. The maximum number of tags you can specify for a cost estimate is one. The estimate created is for the cost to analyze the Amazon Web Services resources defined by the tag. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>Amazon Web Services CloudFormation User Guide</i>. */
	export interface TagCostEstimationResourceCollectionFilter {

		/** Required */
		AppBoundaryKey: string;

		/** Required */
		TagValues: Array<string>;
	}

	/** Information about a collection of Amazon Web Services resources that are identified by an Amazon Web Services tag. This collection of resources is used to create a monthly cost estimate for DevOps Guru to analyze Amazon Web Services resources. The maximum number of tags you can specify for a cost estimate is one. The estimate created is for the cost to analyze the Amazon Web Services resources defined by the tag. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>Amazon Web Services CloudFormation User Guide</i>. */
	export interface TagCostEstimationResourceCollectionFilterFormProperties {

		/** Required */
		AppBoundaryKey: FormControl<string | null | undefined>,
	}
	export function CreateTagCostEstimationResourceCollectionFilterFormGroup() {
		return new FormGroup<TagCostEstimationResourceCollectionFilterFormProperties>({
			AppBoundaryKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CostEstimationStatus { ONGOING = 0, COMPLETED = 1 }


	/** An object that contains information about the estimated monthly cost to analyze an Amazon Web Services resource. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>. */
	export interface ServiceResourceCost {
		Type?: string;
		State?: CostEstimationServiceResourceState;
		Count?: number | null;
		UnitCost?: number | null;
		Cost?: number | null;
	}

	/** An object that contains information about the estimated monthly cost to analyze an Amazon Web Services resource. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>. */
	export interface ServiceResourceCostFormProperties {
		Type: FormControl<string | null | undefined>,
		State: FormControl<CostEstimationServiceResourceState | null | undefined>,
		Count: FormControl<number | null | undefined>,
		UnitCost: FormControl<number | null | undefined>,
		Cost: FormControl<number | null | undefined>,
	}
	export function CreateServiceResourceCostFormGroup() {
		return new FormGroup<ServiceResourceCostFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<CostEstimationServiceResourceState | null | undefined>(undefined),
			Count: new FormControl<number | null | undefined>(undefined),
			UnitCost: new FormControl<number | null | undefined>(undefined),
			Cost: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CostEstimationServiceResourceState { ACTIVE = 0, INACTIVE = 1 }


	/** The time range of a cost estimation. */
	export interface CostEstimationTimeRange {
		StartTime?: Date;
		EndTime?: Date;
	}

	/** The time range of a cost estimation. */
	export interface CostEstimationTimeRangeFormProperties {
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateCostEstimationTimeRangeFormGroup() {
		return new FormGroup<CostEstimationTimeRangeFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetResourceCollectionResponse {
		ResourceCollection?: ResourceCollectionFilter;
		NextToken?: string;
	}
	export interface GetResourceCollectionResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetResourceCollectionResponseFormGroup() {
		return new FormGroup<GetResourceCollectionResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about a filter used to specify which Amazon Web Services resources are analyzed for anomalous behavior by DevOps Guru.  */
	export interface ResourceCollectionFilter {
		CloudFormation?: CloudFormationCollectionFilter;
		Tags?: Array<TagCollectionFilter>;
	}

	/**  Information about a filter used to specify which Amazon Web Services resources are analyzed for anomalous behavior by DevOps Guru.  */
	export interface ResourceCollectionFilterFormProperties {
	}
	export function CreateResourceCollectionFilterFormGroup() {
		return new FormGroup<ResourceCollectionFilterFormProperties>({
		});

	}


	/**  Information about Amazon Web Services CloudFormation stacks. You can use up to 500 stacks to specify which Amazon Web Services resources in your account to analyze. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>Amazon Web Services CloudFormation User Guide</i>.  */
	export interface CloudFormationCollectionFilter {
		StackNames?: Array<string>;
	}

	/**  Information about Amazon Web Services CloudFormation stacks. You can use up to 500 stacks to specify which Amazon Web Services resources in your account to analyze. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html">Stacks</a> in the <i>Amazon Web Services CloudFormation User Guide</i>.  */
	export interface CloudFormationCollectionFilterFormProperties {
	}
	export function CreateCloudFormationCollectionFilterFormGroup() {
		return new FormGroup<CloudFormationCollectionFilterFormProperties>({
		});

	}


	/** A collection of Amazon Web Services tags used to filter insights. This is used to return insights generated from only resources that contain the tags in the tag collection. */
	export interface TagCollectionFilter {

		/** Required */
		AppBoundaryKey: string;

		/** Required */
		TagValues: Array<string>;
	}

	/** A collection of Amazon Web Services tags used to filter insights. This is used to return insights generated from only resources that contain the tags in the tag collection. */
	export interface TagCollectionFilterFormProperties {

		/** Required */
		AppBoundaryKey: FormControl<string | null | undefined>,
	}
	export function CreateTagCollectionFilterFormGroup() {
		return new FormGroup<TagCollectionFilterFormProperties>({
			AppBoundaryKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAnomaliesForInsightResponse {
		ProactiveAnomalies?: Array<ProactiveAnomalySummary>;
		ReactiveAnomalies?: Array<ReactiveAnomalySummary>;
		NextToken?: string;
	}
	export interface ListAnomaliesForInsightResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnomaliesForInsightResponseFormGroup() {
		return new FormGroup<ListAnomaliesForInsightResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a proactive anomaly. This object is returned by <code>DescribeAnomaly.</code>  */
	export interface ProactiveAnomalySummary {
		Id?: string;
		Severity?: InsightSeverity;
		Status?: AnomalyStatus;
		UpdateTime?: Date;

		/** A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies the time range when DevOps Guru opens and then closes an anomaly. */
		AnomalyTimeRange?: AnomalyTimeRange;
		AnomalyReportedTimeRange?: AnomalyReportedTimeRange;

		/** The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur. */
		PredictionTimeRange?: PredictionTimeRange;
		SourceDetails?: AnomalySourceDetails;
		AssociatedInsightId?: string;

		/** A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
		ResourceCollection?: ResourceCollection;
		Limit?: number | null;
		SourceMetadata?: AnomalySourceMetadata;
		AnomalyResources?: Array<AnomalyResource>;
		Description?: string;
	}

	/** Details about a proactive anomaly. This object is returned by <code>DescribeAnomaly.</code>  */
	export interface ProactiveAnomalySummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Severity: FormControl<InsightSeverity | null | undefined>,
		Status: FormControl<AnomalyStatus | null | undefined>,
		UpdateTime: FormControl<Date | null | undefined>,
		AssociatedInsightId: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateProactiveAnomalySummaryFormGroup() {
		return new FormGroup<ProactiveAnomalySummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<InsightSeverity | null | undefined>(undefined),
			Status: new FormControl<AnomalyStatus | null | undefined>(undefined),
			UpdateTime: new FormControl<Date | null | undefined>(undefined),
			AssociatedInsightId: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a reactive anomaly. This object is returned by <code>DescribeAnomaly.</code>  */
	export interface ReactiveAnomalySummary {
		Id?: string;
		Severity?: InsightSeverity;
		Status?: AnomalyStatus;

		/** A time range that specifies when the observed unusual behavior in an anomaly started and ended. This is different from <code>AnomalyReportedTimeRange</code>, which specifies the time range when DevOps Guru opens and then closes an anomaly. */
		AnomalyTimeRange?: AnomalyTimeRange;
		AnomalyReportedTimeRange?: AnomalyReportedTimeRange;
		SourceDetails?: AnomalySourceDetails;
		AssociatedInsightId?: string;

		/** A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
		ResourceCollection?: ResourceCollection;
		Type?: AnomalyType;
		Name?: string;
		Description?: string;
		CausalAnomalyId?: string;
		AnomalyResources?: Array<AnomalyResource>;
	}

	/** Details about a reactive anomaly. This object is returned by <code>DescribeAnomaly.</code>  */
	export interface ReactiveAnomalySummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Severity: FormControl<InsightSeverity | null | undefined>,
		Status: FormControl<AnomalyStatus | null | undefined>,
		AssociatedInsightId: FormControl<string | null | undefined>,
		Type: FormControl<AnomalyType | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CausalAnomalyId: FormControl<string | null | undefined>,
	}
	export function CreateReactiveAnomalySummaryFormGroup() {
		return new FormGroup<ReactiveAnomalySummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<InsightSeverity | null | undefined>(undefined),
			Status: new FormControl<AnomalyStatus | null | undefined>(undefined),
			AssociatedInsightId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<AnomalyType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CausalAnomalyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of the names of Amazon Web Services services. */
	export interface ServiceCollection {
		ServiceNames?: Array<ServiceName>;
	}

	/** A collection of the names of Amazon Web Services services. */
	export interface ServiceCollectionFormProperties {
	}
	export function CreateServiceCollectionFormGroup() {
		return new FormGroup<ServiceCollectionFormProperties>({
		});

	}

	export interface ListAnomalousLogGroupsResponse {

		/** Required */
		InsightId: string;

		/** Required */
		AnomalousLogGroups: Array<AnomalousLogGroup>;
		NextToken?: string;
	}
	export interface ListAnomalousLogGroupsResponseFormProperties {

		/** Required */
		InsightId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnomalousLogGroupsResponseFormGroup() {
		return new FormGroup<ListAnomalousLogGroupsResponseFormProperties>({
			InsightId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  An Amazon CloudWatch log group that contains log anomalies and is used to generate an insight.  */
	export interface AnomalousLogGroup {
		LogGroupName?: string;
		ImpactStartTime?: Date;
		ImpactEndTime?: Date;
		NumberOfLogLinesScanned?: number | null;
		LogAnomalyShowcases?: Array<LogAnomalyShowcase>;
	}

	/**  An Amazon CloudWatch log group that contains log anomalies and is used to generate an insight.  */
	export interface AnomalousLogGroupFormProperties {
		LogGroupName: FormControl<string | null | undefined>,
		ImpactStartTime: FormControl<Date | null | undefined>,
		ImpactEndTime: FormControl<Date | null | undefined>,
		NumberOfLogLinesScanned: FormControl<number | null | undefined>,
	}
	export function CreateAnomalousLogGroupFormGroup() {
		return new FormGroup<AnomalousLogGroupFormProperties>({
			LogGroupName: new FormControl<string | null | undefined>(undefined),
			ImpactStartTime: new FormControl<Date | null | undefined>(undefined),
			ImpactEndTime: new FormControl<Date | null | undefined>(undefined),
			NumberOfLogLinesScanned: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  A cluster of similar anomalous log events found within a log group.  */
	export interface LogAnomalyShowcase {
		LogAnomalyClasses?: Array<LogAnomalyClass>;
	}

	/**  A cluster of similar anomalous log events found within a log group.  */
	export interface LogAnomalyShowcaseFormProperties {
	}
	export function CreateLogAnomalyShowcaseFormGroup() {
		return new FormGroup<LogAnomalyShowcaseFormProperties>({
		});

	}


	/**  Information about an anomalous log event found within a log group.  */
	export interface LogAnomalyClass {
		LogStreamName?: string;
		LogAnomalyType?: LogAnomalyType;
		LogAnomalyToken?: string;
		LogEventId?: string;
		Explanation?: string;
		NumberOfLogLinesOccurrences?: number | null;
		LogEventTimestamp?: Date;
	}

	/**  Information about an anomalous log event found within a log group.  */
	export interface LogAnomalyClassFormProperties {
		LogStreamName: FormControl<string | null | undefined>,
		LogAnomalyType: FormControl<LogAnomalyType | null | undefined>,
		LogAnomalyToken: FormControl<string | null | undefined>,
		LogEventId: FormControl<string | null | undefined>,
		Explanation: FormControl<string | null | undefined>,
		NumberOfLogLinesOccurrences: FormControl<number | null | undefined>,
		LogEventTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateLogAnomalyClassFormGroup() {
		return new FormGroup<LogAnomalyClassFormProperties>({
			LogStreamName: new FormControl<string | null | undefined>(undefined),
			LogAnomalyType: new FormControl<LogAnomalyType | null | undefined>(undefined),
			LogAnomalyToken: new FormControl<string | null | undefined>(undefined),
			LogEventId: new FormControl<string | null | undefined>(undefined),
			Explanation: new FormControl<string | null | undefined>(undefined),
			NumberOfLogLinesOccurrences: new FormControl<number | null | undefined>(undefined),
			LogEventTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum LogAnomalyType { KEYWORD = 0, KEYWORD_TOKEN = 1, FORMAT = 2, HTTP_CODE = 3, BLOCK_FORMAT = 4, NUMERICAL_POINT = 5, NUMERICAL_NAN = 6, NEW_FIELD_NAME = 7 }

	export interface ListEventsResponse {

		/** Required */
		Events: Array<Event>;
		NextToken?: string;
	}
	export interface ListEventsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventsResponseFormGroup() {
		return new FormGroup<ListEventsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  An Amazon Web Services resource event. Amazon Web Services resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions.  */
	export interface Event {

		/** A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
		ResourceCollection?: ResourceCollection;
		Id?: string;
		Time?: Date;
		EventSource?: string;
		Name?: string;
		DataSource?: EventDataSource;
		EventClass?: EventClass;
		Resources?: Array<EventResource>;
	}

	/**  An Amazon Web Services resource event. Amazon Web Services resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions.  */
	export interface EventFormProperties {
		Id: FormControl<string | null | undefined>,
		Time: FormControl<Date | null | undefined>,
		EventSource: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		DataSource: FormControl<EventDataSource | null | undefined>,
		EventClass: FormControl<EventClass | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Time: new FormControl<Date | null | undefined>(undefined),
			EventSource: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			DataSource: new FormControl<EventDataSource | null | undefined>(undefined),
			EventClass: new FormControl<EventClass | null | undefined>(undefined),
		});

	}

	export enum EventDataSource { AWS_CLOUD_TRAIL = 0, AWS_CODE_DEPLOY = 1 }

	export enum EventClass { INFRASTRUCTURE = 0, DEPLOYMENT = 1, SECURITY_CHANGE = 2, CONFIG_CHANGE = 3, SCHEMA_CHANGE = 4 }


	/**  The Amazon Web Services resource that emitted an event. Amazon Web Services resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions.  */
	export interface EventResource {
		Type?: string;
		Name?: string;
		Arn?: string;
	}

	/**  The Amazon Web Services resource that emitted an event. Amazon Web Services resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions.  */
	export interface EventResourceFormProperties {
		Type: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateEventResourceFormGroup() {
		return new FormGroup<EventResourceFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The time range during which an Amazon Web Services event occurred. Amazon Web Services resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions.  */
	export interface EventTimeRange {

		/** Required */
		FromTime: Date;

		/** Required */
		ToTime: Date;
	}

	/**  The time range during which an Amazon Web Services event occurred. Amazon Web Services resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions.  */
	export interface EventTimeRangeFormProperties {

		/** Required */
		FromTime: FormControl<Date | null | undefined>,

		/** Required */
		ToTime: FormControl<Date | null | undefined>,
	}
	export function CreateEventTimeRangeFormGroup() {
		return new FormGroup<EventTimeRangeFormProperties>({
			FromTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ToTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListInsightsResponse {
		ProactiveInsights?: Array<ProactiveInsightSummary>;
		ReactiveInsights?: Array<ReactiveInsightSummary>;
		NextToken?: string;
	}
	export interface ListInsightsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInsightsResponseFormGroup() {
		return new FormGroup<ListInsightsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a proactive insight. This object is returned by <code>DescribeInsight.</code>  */
	export interface ProactiveInsightSummary {
		Id?: string;
		Name?: string;
		Severity?: InsightSeverity;
		Status?: AnomalyStatus;

		/** A time ranged that specifies when the observed behavior in an insight started and ended. */
		InsightTimeRange?: InsightTimeRange;

		/** The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur. */
		PredictionTimeRange?: PredictionTimeRange;

		/** A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
		ResourceCollection?: ResourceCollection;
		ServiceCollection?: ServiceCollection;
		AssociatedResourceArns?: Array<string>;
	}

	/** Details about a proactive insight. This object is returned by <code>DescribeInsight.</code>  */
	export interface ProactiveInsightSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Severity: FormControl<InsightSeverity | null | undefined>,
		Status: FormControl<AnomalyStatus | null | undefined>,
	}
	export function CreateProactiveInsightSummaryFormGroup() {
		return new FormGroup<ProactiveInsightSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<InsightSeverity | null | undefined>(undefined),
			Status: new FormControl<AnomalyStatus | null | undefined>(undefined),
		});

	}


	/**  Information about a reactive insight. This object is returned by <code>DescribeInsight.</code>  */
	export interface ReactiveInsightSummary {
		Id?: string;
		Name?: string;
		Severity?: InsightSeverity;
		Status?: AnomalyStatus;

		/** A time ranged that specifies when the observed behavior in an insight started and ended. */
		InsightTimeRange?: InsightTimeRange;

		/** A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
		ResourceCollection?: ResourceCollection;
		ServiceCollection?: ServiceCollection;
		AssociatedResourceArns?: Array<string>;
	}

	/**  Information about a reactive insight. This object is returned by <code>DescribeInsight.</code>  */
	export interface ReactiveInsightSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Severity: FormControl<InsightSeverity | null | undefined>,
		Status: FormControl<AnomalyStatus | null | undefined>,
	}
	export function CreateReactiveInsightSummaryFormGroup() {
		return new FormGroup<ReactiveInsightSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<InsightSeverity | null | undefined>(undefined),
			Status: new FormControl<AnomalyStatus | null | undefined>(undefined),
		});

	}


	/**  Used to filter for insights that have the status <code>ONGOING</code>.  */
	export interface ListInsightsOngoingStatusFilter {

		/** Required */
		Type: InsightType;
	}

	/**  Used to filter for insights that have the status <code>ONGOING</code>.  */
	export interface ListInsightsOngoingStatusFilterFormProperties {

		/** Required */
		Type: FormControl<InsightType | null | undefined>,
	}
	export function CreateListInsightsOngoingStatusFilterFormGroup() {
		return new FormGroup<ListInsightsOngoingStatusFilterFormProperties>({
			Type: new FormControl<InsightType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InsightType { REACTIVE = 0, PROACTIVE = 1 }


	/**  Used to filter for insights that have the status <code>CLOSED</code>.  */
	export interface ListInsightsClosedStatusFilter {

		/** Required */
		Type: InsightType;

		/** Required */
		EndTimeRange: EndTimeRange;
	}

	/**  Used to filter for insights that have the status <code>CLOSED</code>.  */
	export interface ListInsightsClosedStatusFilterFormProperties {

		/** Required */
		Type: FormControl<InsightType | null | undefined>,
	}
	export function CreateListInsightsClosedStatusFilterFormGroup() {
		return new FormGroup<ListInsightsClosedStatusFilterFormProperties>({
			Type: new FormControl<InsightType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  A range of time that specifies when anomalous behavior in an anomaly or insight ended.  */
	export interface EndTimeRange {
		FromTime?: Date;
		ToTime?: Date;
	}

	/**  A range of time that specifies when anomalous behavior in an anomaly or insight ended.  */
	export interface EndTimeRangeFormProperties {
		FromTime: FormControl<Date | null | undefined>,
		ToTime: FormControl<Date | null | undefined>,
	}
	export function CreateEndTimeRangeFormGroup() {
		return new FormGroup<EndTimeRangeFormProperties>({
			FromTime: new FormControl<Date | null | undefined>(undefined),
			ToTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  Used to filter for insights that have any status.  */
	export interface ListInsightsAnyStatusFilter {

		/** Required */
		Type: InsightType;

		/** Required */
		StartTimeRange: StartTimeRange;
	}

	/**  Used to filter for insights that have any status.  */
	export interface ListInsightsAnyStatusFilterFormProperties {

		/** Required */
		Type: FormControl<InsightType | null | undefined>,
	}
	export function CreateListInsightsAnyStatusFilterFormGroup() {
		return new FormGroup<ListInsightsAnyStatusFilterFormProperties>({
			Type: new FormControl<InsightType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  A time range used to specify when the behavior of an insight or anomaly started.  */
	export interface StartTimeRange {
		FromTime?: Date;
		ToTime?: Date;
	}

	/**  A time range used to specify when the behavior of an insight or anomaly started.  */
	export interface StartTimeRangeFormProperties {
		FromTime: FormControl<Date | null | undefined>,
		ToTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartTimeRangeFormGroup() {
		return new FormGroup<StartTimeRangeFormProperties>({
			FromTime: new FormControl<Date | null | undefined>(undefined),
			ToTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListMonitoredResourcesResponse {

		/** Required */
		MonitoredResourceIdentifiers: Array<MonitoredResourceIdentifier>;
		NextToken?: string;
	}
	export interface ListMonitoredResourcesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMonitoredResourcesResponseFormGroup() {
		return new FormGroup<ListMonitoredResourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about the resource that is being monitored, including the name of the resource, the type of resource, and whether or not permission is given to DevOps Guru to access that resource.  */
	export interface MonitoredResourceIdentifier {
		MonitoredResourceName?: string;
		Type?: string;
		ResourcePermission?: ResourcePermission;
		LastUpdated?: Date;

		/** A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
		ResourceCollection?: ResourceCollection;
	}

	/**  Information about the resource that is being monitored, including the name of the resource, the type of resource, and whether or not permission is given to DevOps Guru to access that resource.  */
	export interface MonitoredResourceIdentifierFormProperties {
		MonitoredResourceName: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		ResourcePermission: FormControl<ResourcePermission | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
	}
	export function CreateMonitoredResourceIdentifierFormGroup() {
		return new FormGroup<MonitoredResourceIdentifierFormProperties>({
			MonitoredResourceName: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			ResourcePermission: new FormControl<ResourcePermission | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ResourcePermission { FULL_PERMISSION = 0, MISSING_PERMISSION = 1 }

	export enum ResourceTypeFilter { LOG_GROUPS = 0, CLOUDFRONT_DISTRIBUTION = 1, DYNAMODB_TABLE = 2, EC2_NAT_GATEWAY = 3, ECS_CLUSTER = 4, ECS_SERVICE = 5, EKS_CLUSTER = 6, ELASTIC_BEANSTALK_ENVIRONMENT = 7, ELASTIC_LOAD_BALANCER_LOAD_BALANCER = 8, ELASTIC_LOAD_BALANCING_V2_LOAD_BALANCER = 9, ELASTIC_LOAD_BALANCING_V2_TARGET_GROUP = 10, ELASTICACHE_CACHE_CLUSTER = 11, ELASTICSEARCH_DOMAIN = 12, KINESIS_STREAM = 13, LAMBDA_FUNCTION = 14, OPEN_SEARCH_SERVICE_DOMAIN = 15, RDS_DB_INSTANCE = 16, RDS_DB_CLUSTER = 17, REDSHIFT_CLUSTER = 18, ROUTE53_HOSTED_ZONE = 19, ROUTE53_HEALTH_CHECK = 20, S3_BUCKET = 21, SAGEMAKER_ENDPOINT = 22, SNS_TOPIC = 23, SQS_QUEUE = 24, STEP_FUNCTIONS_ACTIVITY = 25, STEP_FUNCTIONS_STATE_MACHINE = 26 }

	export interface ListNotificationChannelsResponse {
		Channels?: Array<NotificationChannel>;
		NextToken?: string;
	}
	export interface ListNotificationChannelsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNotificationChannelsResponseFormGroup() {
		return new FormGroup<ListNotificationChannelsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p> Information about a notification channel. A notification channel is used to notify you when DevOps Guru creates an insight. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to send it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p> */
	export interface NotificationChannel {
		Id?: string;
		Config?: NotificationChannelConfig;
	}

	/** <p> Information about a notification channel. A notification channel is used to notify you when DevOps Guru creates an insight. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to send it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p> */
	export interface NotificationChannelFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateNotificationChannelFormGroup() {
		return new FormGroup<NotificationChannelFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). */
	export interface NotificationChannelConfig {

		/** Required */
		Sns: SnsChannelConfig;
		Filters?: NotificationFilterConfig;
	}

	/**  Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). */
	export interface NotificationChannelConfigFormProperties {
	}
	export function CreateNotificationChannelConfigFormGroup() {
		return new FormGroup<NotificationChannelConfigFormProperties>({
		});

	}

	export interface ListOrganizationInsightsResponse {
		ProactiveInsights?: Array<ProactiveOrganizationInsightSummary>;
		ReactiveInsights?: Array<ReactiveOrganizationInsightSummary>;
		NextToken?: string;
	}
	export interface ListOrganizationInsightsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrganizationInsightsResponseFormGroup() {
		return new FormGroup<ListOrganizationInsightsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a proactive insight. This object is returned by <code>DescribeInsight</code>. */
	export interface ProactiveOrganizationInsightSummary {
		Id?: string;
		AccountId?: string;
		OrganizationalUnitId?: string;
		Name?: string;
		Severity?: InsightSeverity;
		Status?: AnomalyStatus;

		/** A time ranged that specifies when the observed behavior in an insight started and ended. */
		InsightTimeRange?: InsightTimeRange;

		/** The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur. */
		PredictionTimeRange?: PredictionTimeRange;

		/** A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
		ResourceCollection?: ResourceCollection;

		/** A collection of the names of Amazon Web Services services. */
		ServiceCollection?: ServiceCollection;
	}

	/** Details about a proactive insight. This object is returned by <code>DescribeInsight</code>. */
	export interface ProactiveOrganizationInsightSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		OrganizationalUnitId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Severity: FormControl<InsightSeverity | null | undefined>,
		Status: FormControl<AnomalyStatus | null | undefined>,
	}
	export function CreateProactiveOrganizationInsightSummaryFormGroup() {
		return new FormGroup<ProactiveOrganizationInsightSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			OrganizationalUnitId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<InsightSeverity | null | undefined>(undefined),
			Status: new FormControl<AnomalyStatus | null | undefined>(undefined),
		});

	}


	/** Information about a reactive insight. This object is returned by <code>DescribeInsight</code>. */
	export interface ReactiveOrganizationInsightSummary {
		Id?: string;
		AccountId?: string;
		OrganizationalUnitId?: string;
		Name?: string;
		Severity?: InsightSeverity;
		Status?: AnomalyStatus;

		/** A time ranged that specifies when the observed behavior in an insight started and ended. */
		InsightTimeRange?: InsightTimeRange;

		/** A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
		ResourceCollection?: ResourceCollection;

		/** A collection of the names of Amazon Web Services services. */
		ServiceCollection?: ServiceCollection;
	}

	/** Information about a reactive insight. This object is returned by <code>DescribeInsight</code>. */
	export interface ReactiveOrganizationInsightSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		OrganizationalUnitId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Severity: FormControl<InsightSeverity | null | undefined>,
		Status: FormControl<AnomalyStatus | null | undefined>,
	}
	export function CreateReactiveOrganizationInsightSummaryFormGroup() {
		return new FormGroup<ReactiveOrganizationInsightSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			OrganizationalUnitId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Severity: new FormControl<InsightSeverity | null | undefined>(undefined),
			Status: new FormControl<AnomalyStatus | null | undefined>(undefined),
		});

	}

	export interface ListRecommendationsResponse {
		Recommendations?: Array<Recommendation>;
		NextToken?: string;
	}
	export interface ListRecommendationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecommendationsResponseFormGroup() {
		return new FormGroup<ListRecommendationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Recommendation information to help you remediate detected anomalous behavior that generated an insight.  */
	export interface Recommendation {
		Description?: string;
		Link?: string;
		Name?: string;
		Reason?: string;
		RelatedEvents?: Array<RecommendationRelatedEvent>;
		RelatedAnomalies?: Array<RecommendationRelatedAnomaly>;
		Category?: string;
	}

	/**  Recommendation information to help you remediate detected anomalous behavior that generated an insight.  */
	export interface RecommendationFormProperties {
		Description: FormControl<string | null | undefined>,
		Link: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Reason: FormControl<string | null | undefined>,
		Category: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationFormGroup() {
		return new FormGroup<RecommendationFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Link: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Reason: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about an event that is related to a recommendation.  */
	export interface RecommendationRelatedEvent {
		Name?: string;
		Resources?: Array<RecommendationRelatedEventResource>;
	}

	/**  Information about an event that is related to a recommendation.  */
	export interface RecommendationRelatedEventFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationRelatedEventFormGroup() {
		return new FormGroup<RecommendationRelatedEventFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about an Amazon Web Services resource that emitted and event that is related to a recommendation in an insight.  */
	export interface RecommendationRelatedEventResource {
		Name?: string;
		Type?: string;
	}

	/**  Information about an Amazon Web Services resource that emitted and event that is related to a recommendation in an insight.  */
	export interface RecommendationRelatedEventResourceFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationRelatedEventResourceFormGroup() {
		return new FormGroup<RecommendationRelatedEventResourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about an anomaly that is related to a recommendation.  */
	export interface RecommendationRelatedAnomaly {
		Resources?: Array<RecommendationRelatedAnomalyResource>;
		SourceDetails?: Array<RecommendationRelatedAnomalySourceDetail>;
		AnomalyId?: string;
	}

	/**  Information about an anomaly that is related to a recommendation.  */
	export interface RecommendationRelatedAnomalyFormProperties {
		AnomalyId: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationRelatedAnomalyFormGroup() {
		return new FormGroup<RecommendationRelatedAnomalyFormProperties>({
			AnomalyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about a resource in which DevOps Guru detected anomalous behavior.  */
	export interface RecommendationRelatedAnomalyResource {
		Name?: string;
		Type?: string;
	}

	/**  Information about a resource in which DevOps Guru detected anomalous behavior.  */
	export interface RecommendationRelatedAnomalyResourceFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationRelatedAnomalyResourceFormGroup() {
		return new FormGroup<RecommendationRelatedAnomalyResourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Contains an array of <code>RecommendationRelatedCloudWatchMetricsSourceDetail</code> objects that contain the name and namespace of an Amazon CloudWatch metric.  */
	export interface RecommendationRelatedAnomalySourceDetail {
		CloudWatchMetrics?: Array<RecommendationRelatedCloudWatchMetricsSourceDetail>;
	}

	/**  Contains an array of <code>RecommendationRelatedCloudWatchMetricsSourceDetail</code> objects that contain the name and namespace of an Amazon CloudWatch metric.  */
	export interface RecommendationRelatedAnomalySourceDetailFormProperties {
	}
	export function CreateRecommendationRelatedAnomalySourceDetailFormGroup() {
		return new FormGroup<RecommendationRelatedAnomalySourceDetailFormProperties>({
		});

	}


	/**  Information about an Amazon CloudWatch metric that is analyzed by DevOps Guru. It is one of many analyzed metrics that are used to generate insights.  */
	export interface RecommendationRelatedCloudWatchMetricsSourceDetail {
		MetricName?: string;
		Namespace?: string;
	}

	/**  Information about an Amazon CloudWatch metric that is analyzed by DevOps Guru. It is one of many analyzed metrics that are used to generate insights.  */
	export interface RecommendationRelatedCloudWatchMetricsSourceDetailFormProperties {
		MetricName: FormControl<string | null | undefined>,
		Namespace: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationRelatedCloudWatchMetricsSourceDetailFormGroup() {
		return new FormGroup<RecommendationRelatedCloudWatchMetricsSourceDetailFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined),
			Namespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutFeedbackResponse {
	}
	export interface PutFeedbackResponseFormProperties {
	}
	export function CreatePutFeedbackResponseFormGroup() {
		return new FormGroup<PutFeedbackResponseFormProperties>({
		});

	}

	export interface RemoveNotificationChannelResponse {
	}
	export interface RemoveNotificationChannelResponseFormProperties {
	}
	export function CreateRemoveNotificationChannelResponseFormGroup() {
		return new FormGroup<RemoveNotificationChannelResponseFormProperties>({
		});

	}

	export interface SearchInsightsResponse {
		ProactiveInsights?: Array<ProactiveInsightSummary>;
		ReactiveInsights?: Array<ReactiveInsightSummary>;
		NextToken?: string;
	}
	export interface SearchInsightsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchInsightsResponseFormGroup() {
		return new FormGroup<SearchInsightsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InsightStatus { ONGOING = 0, CLOSED = 1 }

	export interface SearchOrganizationInsightsResponse {
		ProactiveInsights?: Array<ProactiveInsightSummary>;
		ReactiveInsights?: Array<ReactiveInsightSummary>;
		NextToken?: string;
	}
	export interface SearchOrganizationInsightsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchOrganizationInsightsResponseFormGroup() {
		return new FormGroup<SearchOrganizationInsightsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartCostEstimationResponse {
	}
	export interface StartCostEstimationResponseFormProperties {
	}
	export function CreateStartCostEstimationResponseFormGroup() {
		return new FormGroup<StartCostEstimationResponseFormProperties>({
		});

	}

	export interface UpdateEventSourcesConfigResponse {
	}
	export interface UpdateEventSourcesConfigResponseFormProperties {
	}
	export function CreateUpdateEventSourcesConfigResponseFormGroup() {
		return new FormGroup<UpdateEventSourcesConfigResponseFormProperties>({
		});

	}

	export interface UpdateResourceCollectionResponse {
	}
	export interface UpdateResourceCollectionResponseFormProperties {
	}
	export function CreateUpdateResourceCollectionResponseFormGroup() {
		return new FormGroup<UpdateResourceCollectionResponseFormProperties>({
		});

	}


	/**  Contains the names of Amazon Web Services CloudFormation stacks used to update a collection of stacks. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
	export interface UpdateCloudFormationCollectionFilter {
		StackNames?: Array<string>;
	}

	/**  Contains the names of Amazon Web Services CloudFormation stacks used to update a collection of stacks. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
	export interface UpdateCloudFormationCollectionFilterFormProperties {
	}
	export function CreateUpdateCloudFormationCollectionFilterFormGroup() {
		return new FormGroup<UpdateCloudFormationCollectionFilterFormProperties>({
		});

	}


	/** A new collection of Amazon Web Services resources that are defined by an Amazon Web Services tag or tag <i>key</i>/<i>value</i> pair. */
	export interface UpdateTagCollectionFilter {

		/** Required */
		AppBoundaryKey: string;

		/** Required */
		TagValues: Array<string>;
	}

	/** A new collection of Amazon Web Services resources that are defined by an Amazon Web Services tag or tag <i>key</i>/<i>value</i> pair. */
	export interface UpdateTagCollectionFilterFormProperties {

		/** Required */
		AppBoundaryKey: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTagCollectionFilterFormGroup() {
		return new FormGroup<UpdateTagCollectionFilterFormProperties>({
			AppBoundaryKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateServiceIntegrationResponse {
	}
	export interface UpdateServiceIntegrationResponseFormProperties {
	}
	export function CreateUpdateServiceIntegrationResponseFormGroup() {
		return new FormGroup<UpdateServiceIntegrationResponseFormProperties>({
		});

	}


	/**  Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight. You can use this to update the configuration. */
	export interface OpsCenterIntegrationConfig {
		OptInStatus?: EventSourceOptInStatus;
	}

	/**  Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight. You can use this to update the configuration. */
	export interface OpsCenterIntegrationConfigFormProperties {
		OptInStatus: FormControl<EventSourceOptInStatus | null | undefined>,
	}
	export function CreateOpsCenterIntegrationConfigFormGroup() {
		return new FormGroup<OpsCenterIntegrationConfigFormProperties>({
			OptInStatus: new FormControl<EventSourceOptInStatus | null | undefined>(undefined),
		});

	}


	/**  Information about the integration of DevOps Guru with CloudWatch log groups for log anomaly detection. You can use this to update the configuration.  */
	export interface LogsAnomalyDetectionIntegrationConfig {
		OptInStatus?: EventSourceOptInStatus;
	}

	/**  Information about the integration of DevOps Guru with CloudWatch log groups for log anomaly detection. You can use this to update the configuration.  */
	export interface LogsAnomalyDetectionIntegrationConfigFormProperties {
		OptInStatus: FormControl<EventSourceOptInStatus | null | undefined>,
	}
	export function CreateLogsAnomalyDetectionIntegrationConfigFormGroup() {
		return new FormGroup<LogsAnomalyDetectionIntegrationConfigFormProperties>({
			OptInStatus: new FormControl<EventSourceOptInStatus | null | undefined>(undefined),
		});

	}


	/**  Information about whether DevOps Guru is configured to encrypt server-side data using KMS.  */
	export interface KMSServerSideEncryptionIntegrationConfig {
		KMSKeyId?: string;
		OptInStatus?: EventSourceOptInStatus;
		Type?: ServerSideEncryptionType;
	}

	/**  Information about whether DevOps Guru is configured to encrypt server-side data using KMS.  */
	export interface KMSServerSideEncryptionIntegrationConfigFormProperties {
		KMSKeyId: FormControl<string | null | undefined>,
		OptInStatus: FormControl<EventSourceOptInStatus | null | undefined>,
		Type: FormControl<ServerSideEncryptionType | null | undefined>,
	}
	export function CreateKMSServerSideEncryptionIntegrationConfigFormGroup() {
		return new FormGroup<KMSServerSideEncryptionIntegrationConfigFormProperties>({
			KMSKeyId: new FormControl<string | null | undefined>(undefined),
			OptInStatus: new FormControl<EventSourceOptInStatus | null | undefined>(undefined),
			Type: new FormControl<ServerSideEncryptionType | null | undefined>(undefined),
		});

	}

	export interface AddNotificationChannelRequest {

		/** Required */
		Config: NotificationChannelConfig;
	}
	export interface AddNotificationChannelRequestFormProperties {
	}
	export function CreateAddNotificationChannelRequestFormGroup() {
		return new FormGroup<AddNotificationChannelRequestFormProperties>({
		});

	}

	export enum AnomalySeverity { LOW = 0, MEDIUM = 1, HIGH = 2 }

	export interface DeleteInsightRequest {
	}
	export interface DeleteInsightRequestFormProperties {
	}
	export function CreateDeleteInsightRequestFormGroup() {
		return new FormGroup<DeleteInsightRequestFormProperties>({
		});

	}

	export interface DescribeAccountHealthRequest {
	}
	export interface DescribeAccountHealthRequestFormProperties {
	}
	export function CreateDescribeAccountHealthRequestFormGroup() {
		return new FormGroup<DescribeAccountHealthRequestFormProperties>({
		});

	}

	export interface DescribeAccountOverviewRequest {

		/** Required */
		FromTime: Date;
		ToTime?: Date;
	}
	export interface DescribeAccountOverviewRequestFormProperties {

		/** Required */
		FromTime: FormControl<Date | null | undefined>,
		ToTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeAccountOverviewRequestFormGroup() {
		return new FormGroup<DescribeAccountOverviewRequestFormProperties>({
			FromTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ToTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeAnomalyRequest {
	}
	export interface DescribeAnomalyRequestFormProperties {
	}
	export function CreateDescribeAnomalyRequestFormGroup() {
		return new FormGroup<DescribeAnomalyRequestFormProperties>({
		});

	}

	export interface DescribeEventSourcesConfigRequest {
	}
	export interface DescribeEventSourcesConfigRequestFormProperties {
	}
	export function CreateDescribeEventSourcesConfigRequestFormGroup() {
		return new FormGroup<DescribeEventSourcesConfigRequestFormProperties>({
		});

	}

	export interface DescribeFeedbackRequest {
		InsightId?: string;
	}
	export interface DescribeFeedbackRequestFormProperties {
		InsightId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFeedbackRequestFormGroup() {
		return new FormGroup<DescribeFeedbackRequestFormProperties>({
			InsightId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeInsightRequest {
	}
	export interface DescribeInsightRequestFormProperties {
	}
	export function CreateDescribeInsightRequestFormGroup() {
		return new FormGroup<DescribeInsightRequestFormProperties>({
		});

	}

	export interface DescribeOrganizationHealthRequest {
		AccountIds?: Array<string>;
		OrganizationalUnitIds?: Array<string>;
	}
	export interface DescribeOrganizationHealthRequestFormProperties {
	}
	export function CreateDescribeOrganizationHealthRequestFormGroup() {
		return new FormGroup<DescribeOrganizationHealthRequestFormProperties>({
		});

	}

	export interface DescribeOrganizationOverviewRequest {

		/** Required */
		FromTime: Date;
		ToTime?: Date;
		AccountIds?: Array<string>;
		OrganizationalUnitIds?: Array<string>;
	}
	export interface DescribeOrganizationOverviewRequestFormProperties {

		/** Required */
		FromTime: FormControl<Date | null | undefined>,
		ToTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeOrganizationOverviewRequestFormGroup() {
		return new FormGroup<DescribeOrganizationOverviewRequestFormProperties>({
			FromTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ToTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum OrganizationResourceCollectionType { AWS_CLOUD_FORMATION = 0, AWS_SERVICE = 1, AWS_ACCOUNT = 2, AWS_TAGS = 3 }

	export interface DescribeOrganizationResourceCollectionHealthRequest {

		/** Required */
		OrganizationResourceCollectionType: OrganizationResourceCollectionType;
		AccountIds?: Array<string>;
		OrganizationalUnitIds?: Array<string>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeOrganizationResourceCollectionHealthRequestFormProperties {

		/** Required */
		OrganizationResourceCollectionType: FormControl<OrganizationResourceCollectionType | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeOrganizationResourceCollectionHealthRequestFormGroup() {
		return new FormGroup<DescribeOrganizationResourceCollectionHealthRequestFormProperties>({
			OrganizationResourceCollectionType: new FormControl<OrganizationResourceCollectionType | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ResourceCollectionType { AWS_CLOUD_FORMATION = 0, AWS_SERVICE = 1, AWS_TAGS = 2 }

	export interface DescribeResourceCollectionHealthRequest {
	}
	export interface DescribeResourceCollectionHealthRequestFormProperties {
	}
	export function CreateDescribeResourceCollectionHealthRequestFormGroup() {
		return new FormGroup<DescribeResourceCollectionHealthRequestFormProperties>({
		});

	}

	export interface DescribeServiceIntegrationRequest {
	}
	export interface DescribeServiceIntegrationRequestFormProperties {
	}
	export function CreateDescribeServiceIntegrationRequestFormGroup() {
		return new FormGroup<DescribeServiceIntegrationRequestFormProperties>({
		});

	}

	export interface GetCostEstimationRequest {
	}
	export interface GetCostEstimationRequestFormProperties {
	}
	export function CreateGetCostEstimationRequestFormGroup() {
		return new FormGroup<GetCostEstimationRequestFormProperties>({
		});

	}

	export interface GetResourceCollectionRequest {
	}
	export interface GetResourceCollectionRequestFormProperties {
	}
	export function CreateGetResourceCollectionRequestFormGroup() {
		return new FormGroup<GetResourceCollectionRequestFormProperties>({
		});

	}


	/**  Specifies if DevOps Guru is enabled to create an Amazon Web Services Systems Manager OpsItem for each created insight.  */
	export enum OptInStatus { ENABLED = 0, DISABLED = 1 }


	/**  Specifies one or more service names that are used to list anomalies.  */
	export interface ListAnomaliesForInsightFilters {

		/** A collection of the names of Amazon Web Services services. */
		ServiceCollection?: ServiceCollection;
	}

	/**  Specifies one or more service names that are used to list anomalies.  */
	export interface ListAnomaliesForInsightFiltersFormProperties {
	}
	export function CreateListAnomaliesForInsightFiltersFormGroup() {
		return new FormGroup<ListAnomaliesForInsightFiltersFormProperties>({
		});

	}

	export interface ListAnomaliesForInsightRequest {
		StartTimeRange?: StartTimeRange;
		MaxResults?: number | null;
		NextToken?: string;
		AccountId?: string;
		Filters?: ListAnomaliesForInsightFilters;
	}
	export interface ListAnomaliesForInsightRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateListAnomaliesForInsightRequestFormGroup() {
		return new FormGroup<ListAnomaliesForInsightRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAnomalousLogGroupsRequest {

		/** Required */
		InsightId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListAnomalousLogGroupsRequestFormProperties {

		/** Required */
		InsightId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnomalousLogGroupsRequestFormGroup() {
		return new FormGroup<ListAnomalousLogGroupsRequestFormProperties>({
			InsightId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Filters you can use to specify which events are returned when <code>ListEvents</code> is called.  */
	export interface ListEventsFilters {
		InsightId?: string;
		EventTimeRange?: EventTimeRange;
		EventClass?: EventClass;
		EventSource?: string;
		DataSource?: EventDataSource;

		/** A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
		ResourceCollection?: ResourceCollection;
	}

	/**  Filters you can use to specify which events are returned when <code>ListEvents</code> is called.  */
	export interface ListEventsFiltersFormProperties {
		InsightId: FormControl<string | null | undefined>,
		EventClass: FormControl<EventClass | null | undefined>,
		EventSource: FormControl<string | null | undefined>,
		DataSource: FormControl<EventDataSource | null | undefined>,
	}
	export function CreateListEventsFiltersFormGroup() {
		return new FormGroup<ListEventsFiltersFormProperties>({
			InsightId: new FormControl<string | null | undefined>(undefined),
			EventClass: new FormControl<EventClass | null | undefined>(undefined),
			EventSource: new FormControl<string | null | undefined>(undefined),
			DataSource: new FormControl<EventDataSource | null | undefined>(undefined),
		});

	}

	export interface ListEventsRequest {

		/** Required */
		Filters: ListEventsFilters;
		MaxResults?: number | null;
		NextToken?: string;
		AccountId?: string;
	}
	export interface ListEventsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateListEventsRequestFormGroup() {
		return new FormGroup<ListEventsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  A filter used by <code>ListInsights</code> to specify which insights to return.  */
	export interface ListInsightsStatusFilter {
		Ongoing?: ListInsightsOngoingStatusFilter;
		Closed?: ListInsightsClosedStatusFilter;
		Any?: ListInsightsAnyStatusFilter;
	}

	/**  A filter used by <code>ListInsights</code> to specify which insights to return.  */
	export interface ListInsightsStatusFilterFormProperties {
	}
	export function CreateListInsightsStatusFilterFormGroup() {
		return new FormGroup<ListInsightsStatusFilterFormProperties>({
		});

	}

	export interface ListInsightsRequest {

		/** Required */
		StatusFilter: ListInsightsStatusFilter;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListInsightsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInsightsRequestFormGroup() {
		return new FormGroup<ListInsightsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Filters to determine which monitored resources you want to retrieve. You can filter by resource type or resource permission status.  */
	export interface ListMonitoredResourcesFilters {

		/** Required */
		ResourcePermission: ResourcePermission;

		/** Required */
		ResourceTypeFilters: Array<ResourceTypeFilter>;
	}

	/**  Filters to determine which monitored resources you want to retrieve. You can filter by resource type or resource permission status.  */
	export interface ListMonitoredResourcesFiltersFormProperties {

		/** Required */
		ResourcePermission: FormControl<ResourcePermission | null | undefined>,
	}
	export function CreateListMonitoredResourcesFiltersFormGroup() {
		return new FormGroup<ListMonitoredResourcesFiltersFormProperties>({
			ResourcePermission: new FormControl<ResourcePermission | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListMonitoredResourcesRequest {
		Filters?: ListMonitoredResourcesFilters;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListMonitoredResourcesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMonitoredResourcesRequestFormGroup() {
		return new FormGroup<ListMonitoredResourcesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNotificationChannelsRequest {
		NextToken?: string;
	}
	export interface ListNotificationChannelsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNotificationChannelsRequestFormGroup() {
		return new FormGroup<ListNotificationChannelsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOrganizationInsightsRequest {

		/**
		 * A filter used by <code>ListInsights</code> to specify which insights to return.
		 * Required
		 */
		StatusFilter: ListInsightsStatusFilter;
		MaxResults?: number | null;
		AccountIds?: Array<string>;
		OrganizationalUnitIds?: Array<string>;
		NextToken?: string;
	}
	export interface ListOrganizationInsightsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrganizationInsightsRequestFormGroup() {
		return new FormGroup<ListOrganizationInsightsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Locale { DE_DE = 0, EN_US = 1, EN_GB = 2, ES_ES = 3, FR_FR = 4, IT_IT = 5, JA_JP = 6, KO_KR = 7, PT_BR = 8, ZH_CN = 9, ZH_TW = 10 }

	export interface ListRecommendationsRequest {

		/** Required */
		InsightId: string;
		NextToken?: string;
		Locale?: Locale;
		AccountId?: string;
	}
	export interface ListRecommendationsRequestFormProperties {

		/** Required */
		InsightId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Locale: FormControl<Locale | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateListRecommendationsRequestFormGroup() {
		return new FormGroup<ListRecommendationsRequestFormProperties>({
			InsightId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Locale: new FormControl<Locale | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutFeedbackRequest {
		InsightFeedback?: InsightFeedback;
	}
	export interface PutFeedbackRequestFormProperties {
	}
	export function CreatePutFeedbackRequestFormGroup() {
		return new FormGroup<PutFeedbackRequestFormProperties>({
		});

	}

	export interface RemoveNotificationChannelRequest {
	}
	export interface RemoveNotificationChannelRequestFormProperties {
	}
	export function CreateRemoveNotificationChannelRequestFormGroup() {
		return new FormGroup<RemoveNotificationChannelRequestFormProperties>({
		});

	}


	/** Specifies values used to filter responses when searching for insights. You can use a <code>ResourceCollection</code>, <code>ServiceCollection</code>, array of severities, and an array of status values. Each filter type contains one or more values to search for. If you specify multiple filter types, the filter types are joined with an <code>AND</code>, and the request returns only results that match all of the specified filters. */
	export interface SearchInsightsFilters {
		Severities?: Array<InsightSeverity>;
		Statuses?: Array<InsightStatus>;

		/** A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
		ResourceCollection?: ResourceCollection;
		ServiceCollection?: ServiceCollection;
	}

	/** Specifies values used to filter responses when searching for insights. You can use a <code>ResourceCollection</code>, <code>ServiceCollection</code>, array of severities, and an array of status values. Each filter type contains one or more values to search for. If you specify multiple filter types, the filter types are joined with an <code>AND</code>, and the request returns only results that match all of the specified filters. */
	export interface SearchInsightsFiltersFormProperties {
	}
	export function CreateSearchInsightsFiltersFormGroup() {
		return new FormGroup<SearchInsightsFiltersFormProperties>({
		});

	}

	export interface SearchInsightsRequest {

		/** Required */
		StartTimeRange: StartTimeRange;
		Filters?: SearchInsightsFilters;
		MaxResults?: number | null;
		NextToken?: string;

		/** Required */
		Type: InsightType;
	}
	export interface SearchInsightsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<InsightType | null | undefined>,
	}
	export function CreateSearchInsightsRequestFormGroup() {
		return new FormGroup<SearchInsightsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<InsightType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Filters you can use to specify which events are returned when <code>ListEvents</code> is called.  */
	export interface SearchOrganizationInsightsFilters {
		Severities?: Array<InsightSeverity>;
		Statuses?: Array<InsightStatus>;

		/** A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
		ResourceCollection?: ResourceCollection;

		/** A collection of the names of Amazon Web Services services. */
		ServiceCollection?: ServiceCollection;
	}

	/**  Filters you can use to specify which events are returned when <code>ListEvents</code> is called.  */
	export interface SearchOrganizationInsightsFiltersFormProperties {
	}
	export function CreateSearchOrganizationInsightsFiltersFormGroup() {
		return new FormGroup<SearchOrganizationInsightsFiltersFormProperties>({
		});

	}

	export interface SearchOrganizationInsightsRequest {

		/** Required */
		AccountIds: Array<string>;

		/**
		 * A time range used to specify when the behavior of an insight or anomaly started.
		 * Required
		 */
		StartTimeRange: StartTimeRange;
		Filters?: SearchOrganizationInsightsFilters;
		MaxResults?: number | null;
		NextToken?: string;

		/** Required */
		Type: InsightType;
	}
	export interface SearchOrganizationInsightsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<InsightType | null | undefined>,
	}
	export function CreateSearchOrganizationInsightsRequestFormGroup() {
		return new FormGroup<SearchOrganizationInsightsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<InsightType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartCostEstimationRequest {

		/** Required */
		ResourceCollection: CostEstimationResourceCollectionFilter;
		ClientToken?: string;
	}
	export interface StartCostEstimationRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartCostEstimationRequestFormGroup() {
		return new FormGroup<StartCostEstimationRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEventSourcesConfigRequest {
		EventSources?: EventSourcesConfig;
	}
	export interface UpdateEventSourcesConfigRequestFormProperties {
	}
	export function CreateUpdateEventSourcesConfigRequestFormGroup() {
		return new FormGroup<UpdateEventSourcesConfigRequestFormProperties>({
		});

	}

	export enum UpdateResourceCollectionAction { ADD = 0, REMOVE = 1 }


	/**  Contains information used to update a collection of Amazon Web Services resources.  */
	export interface UpdateResourceCollectionFilter {
		CloudFormation?: UpdateCloudFormationCollectionFilter;
		Tags?: Array<UpdateTagCollectionFilter>;
	}

	/**  Contains information used to update a collection of Amazon Web Services resources.  */
	export interface UpdateResourceCollectionFilterFormProperties {
	}
	export function CreateUpdateResourceCollectionFilterFormGroup() {
		return new FormGroup<UpdateResourceCollectionFilterFormProperties>({
		});

	}

	export interface UpdateResourceCollectionRequest {

		/** Required */
		Action: UpdateResourceCollectionAction;

		/**
		 * Contains information used to update a collection of Amazon Web Services resources.
		 * Required
		 */
		ResourceCollection: UpdateResourceCollectionFilter;
	}
	export interface UpdateResourceCollectionRequestFormProperties {

		/** Required */
		Action: FormControl<UpdateResourceCollectionAction | null | undefined>,
	}
	export function CreateUpdateResourceCollectionRequestFormGroup() {
		return new FormGroup<UpdateResourceCollectionRequestFormProperties>({
			Action: new FormControl<UpdateResourceCollectionAction | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Information about updating the integration status of an Amazon Web Services service, such as Amazon Web Services Systems Manager, with DevOps Guru.  */
	export interface UpdateServiceIntegrationConfig {

		/** Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight. You can use this to update the configuration. */
		OpsCenter?: OpsCenterIntegrationConfig;
		LogsAnomalyDetection?: LogsAnomalyDetectionIntegrationConfig;
		KMSServerSideEncryption?: KMSServerSideEncryptionIntegrationConfig;
	}

	/**  Information about updating the integration status of an Amazon Web Services service, such as Amazon Web Services Systems Manager, with DevOps Guru.  */
	export interface UpdateServiceIntegrationConfigFormProperties {
	}
	export function CreateUpdateServiceIntegrationConfigFormGroup() {
		return new FormGroup<UpdateServiceIntegrationConfigFormProperties>({
		});

	}

	export interface UpdateServiceIntegrationRequest {

		/** Required */
		ServiceIntegration: UpdateServiceIntegrationConfig;
	}
	export interface UpdateServiceIntegrationRequestFormProperties {
	}
	export function CreateUpdateServiceIntegrationRequestFormGroup() {
		return new FormGroup<UpdateServiceIntegrationRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p> Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to send it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>
		 * Put channels
		 * @return {AddNotificationChannelResponse} Success
		 */
		AddNotificationChannel(requestBody: AddNotificationChannelPutBody): Observable<AddNotificationChannelResponse> {
			return this.http.put<AddNotificationChannelResponse>(this.baseUri + 'channels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
		 * Post channels
		 * @param {string} NextToken Pagination token
		 * @return {ListNotificationChannelsResponse} Success
		 */
		ListNotificationChannels(NextToken: string | null | undefined, requestBody: ListNotificationChannelsPostBody): Observable<ListNotificationChannelsResponse> {
			return this.http.post<ListNotificationChannelsResponse>(this.baseUri + 'channels?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the insight along with the associated anomalies, events and recommendations.
		 * Delete insights/{Id}
		 * @param {string} Id The ID of the insight.
		 * @return {DeleteInsightResponse} Success
		 */
		DeleteInsight(Id: string): Observable<DeleteInsightResponse> {
			return this.http.delete<DeleteInsightResponse>(this.baseUri + 'insights/' + (Id == null ? '' : encodeURIComponent(Id)), {});
		}

		/**
		 * Returns details about an insight that you specify using its ID.
		 * Get insights/{Id}
		 * @param {string} Id  The ID of the insight. 
		 * @param {string} AccountId The ID of the member account in the organization.
		 * @return {DescribeInsightResponse} Success
		 */
		DescribeInsight(Id: string, AccountId: string | null | undefined): Observable<DescribeInsightResponse> {
			return this.http.get<DescribeInsightResponse>(this.baseUri + 'insights/' + (Id == null ? '' : encodeURIComponent(Id)) + '&AccountId=' + (AccountId == null ? '' : encodeURIComponent(AccountId)), {});
		}

		/**
		 * Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account.
		 * Get accounts/health
		 * @return {DescribeAccountHealthResponse} Success
		 */
		DescribeAccountHealth(): Observable<DescribeAccountHealthResponse> {
			return this.http.get<DescribeAccountHealthResponse>(this.baseUri + 'accounts/health', {});
		}

		/**
		 * For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights.
		 * Post accounts/overview
		 * @return {DescribeAccountOverviewResponse} Success
		 */
		DescribeAccountOverview(requestBody: DescribeAccountOverviewPostBody): Observable<DescribeAccountOverviewResponse> {
			return this.http.post<DescribeAccountOverviewResponse>(this.baseUri + 'accounts/overview', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns details about an anomaly that you specify using its ID.
		 * Get anomalies/{Id}
		 * @param {string} Id  The ID of the anomaly. 
		 * @param {string} AccountId The ID of the member account.
		 * @return {DescribeAnomalyResponse} Success
		 */
		DescribeAnomaly(Id: string, AccountId: string | null | undefined): Observable<DescribeAnomalyResponse> {
			return this.http.get<DescribeAnomalyResponse>(this.baseUri + 'anomalies/' + (Id == null ? '' : encodeURIComponent(Id)) + '&AccountId=' + (AccountId == null ? '' : encodeURIComponent(AccountId)), {});
		}

		/**
		 * Returns the integration status of services that are integrated with DevOps Guru as Consumer via EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.
		 * Post event-sources
		 * @return {DescribeEventSourcesConfigResponse} Success
		 */
		DescribeEventSourcesConfig(): Observable<DescribeEventSourcesConfigResponse> {
			return this.http.post<DescribeEventSourcesConfigResponse>(this.baseUri + 'event-sources', null, {});
		}

		/**
		 * Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.
		 * Put event-sources
		 * @return {UpdateEventSourcesConfigResponse} Success
		 */
		UpdateEventSourcesConfig(requestBody: UpdateEventSourcesConfigPutBody): Observable<UpdateEventSourcesConfigResponse> {
			return this.http.put<UpdateEventSourcesConfigResponse>(this.baseUri + 'event-sources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the most recent feedback submitted in the current Amazon Web Services account and Region.
		 * Post feedback
		 * @return {DescribeFeedbackResponse} Success
		 */
		DescribeFeedback(requestBody: DescribeFeedbackPostBody): Observable<DescribeFeedbackResponse> {
			return this.http.post<DescribeFeedbackResponse>(this.baseUri + 'feedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Collects customer feedback about the specified insight.
		 * Put feedback
		 * @return {PutFeedbackResponse} Success
		 */
		PutFeedback(requestBody: PutFeedbackPutBody): Observable<PutFeedbackResponse> {
			return this.http.put<PutFeedbackResponse>(this.baseUri + 'feedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns active insights, predictive insights, and resource hours analyzed in last hour.
		 * Post organization/health
		 * @return {DescribeOrganizationHealthResponse} Success
		 */
		DescribeOrganizationHealth(requestBody: DescribeOrganizationHealthPostBody): Observable<DescribeOrganizationHealthResponse> {
			return this.http.post<DescribeOrganizationHealthResponse>(this.baseUri + 'organization/health', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an overview of your organization's history based on the specified time range. The overview includes the total reactive and proactive insights.
		 * Post organization/overview
		 * @return {DescribeOrganizationOverviewResponse} Success
		 */
		DescribeOrganizationOverview(requestBody: DescribeOrganizationOverviewPostBody): Observable<DescribeOrganizationOverviewResponse> {
			return this.http.post<DescribeOrganizationOverviewResponse>(this.baseUri + 'organization/overview', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides an overview of your system's health. If additional member accounts are part of your organization, you can filter those accounts using the <code>AccountIds</code> field.
		 * Post organization/health/resource-collection
		 * @param {string} NextToken Pagination token
		 * @return {DescribeOrganizationResourceCollectionHealthResponse} Success
		 */
		DescribeOrganizationResourceCollectionHealth(NextToken: string | null | undefined, requestBody: DescribeOrganizationResourceCollectionHealthPostBody): Observable<DescribeOrganizationResourceCollectionHealthResponse> {
			return this.http.post<DescribeOrganizationResourceCollectionHealthResponse>(this.baseUri + 'organization/health/resource-collection?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in resource collections in your account. You specify the type of Amazon Web Services resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks.
		 * Get accounts/health/resource-collection/{ResourceCollectionType}
		 * @param {ResourceCollectionType} ResourceCollectionType  An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. 
		 * @param {string} NextToken The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * @return {DescribeResourceCollectionHealthResponse} Success
		 */
		DescribeResourceCollectionHealth(ResourceCollectionType: ResourceCollectionType, NextToken: string | null | undefined): Observable<DescribeResourceCollectionHealthResponse> {
			return this.http.get<DescribeResourceCollectionHealthResponse>(this.baseUri + 'accounts/health/resource-collection/' + ResourceCollectionType + '?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight.
		 * Get service-integrations
		 * @return {DescribeServiceIntegrationResponse} Success
		 */
		DescribeServiceIntegration(): Observable<DescribeServiceIntegrationResponse> {
			return this.http.get<DescribeServiceIntegrationResponse>(this.baseUri + 'service-integrations', {});
		}

		/**
		 * Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight.
		 * Put service-integrations
		 * @return {UpdateServiceIntegrationResponse} Success
		 */
		UpdateServiceIntegration(requestBody: UpdateServiceIntegrationPutBody): Observable<UpdateServiceIntegrationResponse> {
			return this.http.put<UpdateServiceIntegrationResponse>(this.baseUri + 'service-integrations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.
		 * Get cost-estimation
		 * @param {string} NextToken The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * @return {GetCostEstimationResponse} Success
		 */
		GetCostEstimation(NextToken: string | null | undefined): Observable<GetCostEstimationResponse> {
			return this.http.get<GetCostEstimationResponse>(this.baseUri + 'cost-estimation?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services resources.
		 * Put cost-estimation
		 * @return {StartCostEstimationResponse} Success
		 */
		StartCostEstimation(requestBody: StartCostEstimationPutBody): Observable<StartCostEstimationResponse> {
			return this.http.put<StartCostEstimationResponse>(this.baseUri + 'cost-estimation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks.
		 * Get resource-collections/{ResourceCollectionType}
		 * @param {ResourceCollectionType} ResourceCollectionType  The type of Amazon Web Services resource collections to return. The one valid value is <code>CLOUD_FORMATION</code> for Amazon Web Services CloudFormation stacks. 
		 * @param {string} NextToken The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * @return {GetResourceCollectionResponse} Success
		 */
		GetResourceCollection(ResourceCollectionType: ResourceCollectionType, NextToken: string | null | undefined): Observable<GetResourceCollectionResponse> {
			return this.http.get<GetResourceCollectionResponse>(this.baseUri + 'resource-collections/' + ResourceCollectionType + '?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns a list of the anomalies that belong to an insight that you specify using its ID.
		 * Post anomalies/insight/{InsightId}
		 * @param {string} InsightId  The ID of the insight. The returned anomalies belong to this insight. 
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAnomaliesForInsightResponse} Success
		 */
		ListAnomaliesForInsight(InsightId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAnomaliesForInsightPostBody): Observable<ListAnomaliesForInsightResponse> {
			return this.http.post<ListAnomaliesForInsightResponse>(this.baseUri + 'anomalies/insight/' + (InsightId == null ? '' : encodeURIComponent(InsightId)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of log groups that contain log anomalies.
		 * Post list-log-anomalies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAnomalousLogGroupsResponse} Success
		 */
		ListAnomalousLogGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAnomalousLogGroupsPostBody): Observable<ListAnomalousLogGroupsResponse> {
			return this.http.post<ListAnomalousLogGroupsResponse>(this.baseUri + 'list-log-anomalies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned.
		 * Post events
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEventsResponse} Success
		 */
		ListEvents(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListEventsPostBody): Observable<ListEventsResponse> {
			return this.http.post<ListEventsResponse>(this.baseUri + 'events?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time and status (<code>ONGOING</code>, <code>CLOSED</code>, or <code>ANY</code>).
		 * Post insights
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListInsightsResponse} Success
		 */
		ListInsights(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListInsightsPostBody): Observable<ListInsightsResponse> {
			return this.http.post<ListInsightsResponse>(this.baseUri + 'insights?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of all log groups that are being monitored and tagged by DevOps Guru.
		 * Post monitoredResources
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMonitoredResourcesResponse} Success
		 */
		ListMonitoredResources(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMonitoredResourcesPostBody): Observable<ListMonitoredResourcesResponse> {
			return this.http.post<ListMonitoredResourcesResponse>(this.baseUri + 'monitoredResources?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of insights associated with the account or OU Id.
		 * Post organization/insights
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListOrganizationInsightsResponse} Success
		 */
		ListOrganizationInsights(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListOrganizationInsightsPostBody): Observable<ListOrganizationInsightsResponse> {
			return this.http.post<ListOrganizationInsightsResponse>(this.baseUri + 'organization/insights?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events.
		 * Post recommendations
		 * @param {string} NextToken Pagination token
		 * @return {ListRecommendationsResponse} Success
		 */
		ListRecommendations(NextToken: string | null | undefined, requestBody: ListRecommendationsPostBody): Observable<ListRecommendationsResponse> {
			return this.http.post<ListRecommendationsResponse>(this.baseUri + 'recommendations?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations.
		 * Delete channels/{Id}
		 * @param {string} Id  The ID of the notification channel to be removed. 
		 * @return {RemoveNotificationChannelResponse} Success
		 */
		RemoveNotificationChannel(Id: string): Observable<RemoveNotificationChannelResponse> {
			return this.http.delete<RemoveNotificationChannelResponse>(this.baseUri + 'channels/' + (Id == null ? '' : encodeURIComponent(Id)), {});
		}

		/**
		 * <p> Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code> or <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>
		 * Post insights/search
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchInsightsResponse} Success
		 */
		SearchInsights(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchInsightsPostBody): Observable<SearchInsightsResponse> {
			return this.http.post<SearchInsightsResponse>(this.baseUri + 'insights/search?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Returns a list of insights in your organization. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code>, <code>CLOSED</code>, and <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>
		 * Post organization/insights/search
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchOrganizationInsightsResponse} Success
		 */
		SearchOrganizationInsights(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchOrganizationInsightsPostBody): Observable<SearchOrganizationInsightsResponse> {
			return this.http.post<SearchOrganizationInsightsResponse>(this.baseUri + 'organization/insights/search?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru.
		 * Put resource-collections
		 * @return {UpdateResourceCollectionResponse} Success
		 */
		UpdateResourceCollection(requestBody: UpdateResourceCollectionPutBody): Observable<UpdateResourceCollectionResponse> {
			return this.http.put<UpdateResourceCollectionResponse>(this.baseUri + 'resource-collections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AddNotificationChannelPutBody {

		/**
		 * Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
		 * Required
		 */
		Config: AddNotificationChannelPutBodyConfig;
	}
	export interface AddNotificationChannelPutBodyFormProperties {
	}
	export function CreateAddNotificationChannelPutBodyFormGroup() {
		return new FormGroup<AddNotificationChannelPutBodyFormProperties>({
		});

	}

	export interface AddNotificationChannelPutBodyConfig {
		Sns?: SnsChannelConfig;
		Filters?: NotificationFilterConfig;
	}
	export interface AddNotificationChannelPutBodyConfigFormProperties {
	}
	export function CreateAddNotificationChannelPutBodyConfigFormGroup() {
		return new FormGroup<AddNotificationChannelPutBodyConfigFormProperties>({
		});

	}

	export interface ListNotificationChannelsPostBody {

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken?: string | null;
	}
	export interface ListNotificationChannelsPostBodyFormProperties {

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNotificationChannelsPostBodyFormGroup() {
		return new FormGroup<ListNotificationChannelsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
		});

	}

	export interface DescribeAccountOverviewPostBody {

		/**
		 * The start of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred after this day.
		 * Required
		 */
		FromTime: Date;

		/** The end of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred before this day. If this is not specified, then the current day is used. */
		ToTime?: Date | null;
	}
	export interface DescribeAccountOverviewPostBodyFormProperties {

		/**
		 * The start of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred after this day.
		 * Required
		 */
		FromTime: FormControl<Date | null | undefined>,

		/** The end of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred before this day. If this is not specified, then the current day is used. */
		ToTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeAccountOverviewPostBodyFormGroup() {
		return new FormGroup<DescribeAccountOverviewPostBodyFormProperties>({
			FromTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ToTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateEventSourcesConfigPutBody {

		/** Information about the integration of DevOps Guru as consumer with another AWS service, such as AWS CodeGuru Profiler via EventBridge. */
		EventSources?: UpdateEventSourcesConfigPutBodyEventSources;
	}
	export interface UpdateEventSourcesConfigPutBodyFormProperties {
	}
	export function CreateUpdateEventSourcesConfigPutBodyFormGroup() {
		return new FormGroup<UpdateEventSourcesConfigPutBodyFormProperties>({
		});

	}

	export interface UpdateEventSourcesConfigPutBodyEventSources {
		AmazonCodeGuruProfiler?: AmazonCodeGuruProfilerIntegration;
	}
	export interface UpdateEventSourcesConfigPutBodyEventSourcesFormProperties {
	}
	export function CreateUpdateEventSourcesConfigPutBodyEventSourcesFormGroup() {
		return new FormGroup<UpdateEventSourcesConfigPutBodyEventSourcesFormProperties>({
		});

	}

	export interface DescribeFeedbackPostBody {

		/**
		 * The ID of the insight for which the feedback was provided.
		 * Max length: 100
		 * Min length: 1
		 */
		InsightId?: string | null;
	}
	export interface DescribeFeedbackPostBodyFormProperties {

		/**
		 * The ID of the insight for which the feedback was provided.
		 * Max length: 100
		 * Min length: 1
		 */
		InsightId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFeedbackPostBodyFormGroup() {
		return new FormGroup<DescribeFeedbackPostBodyFormProperties>({
			InsightId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[\w-]*$')]),
		});

	}

	export interface PutFeedbackPutBody {

		/** Information about insight feedback received from a customer. */
		InsightFeedback?: PutFeedbackPutBodyInsightFeedback;
	}
	export interface PutFeedbackPutBodyFormProperties {
	}
	export function CreatePutFeedbackPutBodyFormGroup() {
		return new FormGroup<PutFeedbackPutBodyFormProperties>({
		});

	}

	export interface PutFeedbackPutBodyInsightFeedback {
		Id?: string;
		Feedback?: InsightFeedbackOption;
	}
	export interface PutFeedbackPutBodyInsightFeedbackFormProperties {
		Id: FormControl<string | null | undefined>,
		Feedback: FormControl<InsightFeedbackOption | null | undefined>,
	}
	export function CreatePutFeedbackPutBodyInsightFeedbackFormGroup() {
		return new FormGroup<PutFeedbackPutBodyInsightFeedbackFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Feedback: new FormControl<InsightFeedbackOption | null | undefined>(undefined),
		});

	}

	export interface DescribeOrganizationHealthPostBody {

		/**
		 * The ID of the Amazon Web Services account.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		AccountIds?: Array<string>;

		/**
		 * The ID of the organizational unit.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		OrganizationalUnitIds?: Array<string>;
	}
	export interface DescribeOrganizationHealthPostBodyFormProperties {
	}
	export function CreateDescribeOrganizationHealthPostBodyFormGroup() {
		return new FormGroup<DescribeOrganizationHealthPostBodyFormProperties>({
		});

	}

	export interface DescribeOrganizationOverviewPostBody {

		/**
		 * The start of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred after this day.
		 * Required
		 */
		FromTime: Date;

		/** The end of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred before this day. If this is not specified, then the current day is used. */
		ToTime?: Date | null;

		/**
		 * The ID of the Amazon Web Services account.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		AccountIds?: Array<string>;

		/**
		 * The ID of the organizational unit.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		OrganizationalUnitIds?: Array<string>;
	}
	export interface DescribeOrganizationOverviewPostBodyFormProperties {

		/**
		 * The start of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred after this day.
		 * Required
		 */
		FromTime: FormControl<Date | null | undefined>,

		/** The end of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred before this day. If this is not specified, then the current day is used. */
		ToTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeOrganizationOverviewPostBodyFormGroup() {
		return new FormGroup<DescribeOrganizationOverviewPostBodyFormProperties>({
			FromTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ToTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeOrganizationResourceCollectionHealthPostBody {

		/**
		 * An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks.
		 * Required
		 */
		OrganizationResourceCollectionType: OrganizationResourceCollectionType;

		/**
		 * The ID of the Amazon Web Services account.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		AccountIds?: Array<string>;

		/**
		 * The ID of the organizational unit.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		OrganizationalUnitIds?: Array<string>;

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		MaxResults?: number | null;
	}
	export interface DescribeOrganizationResourceCollectionHealthPostBodyFormProperties {

		/**
		 * An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web Services resources are defined. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks.
		 * Required
		 */
		OrganizationResourceCollectionType: FormControl<OrganizationResourceCollectionType | null | undefined>,

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeOrganizationResourceCollectionHealthPostBodyFormGroup() {
		return new FormGroup<DescribeOrganizationResourceCollectionHealthPostBodyFormProperties>({
			OrganizationResourceCollectionType: new FormControl<OrganizationResourceCollectionType | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface UpdateServiceIntegrationPutBody {

		/**
		 * Information about updating the integration status of an Amazon Web Services service, such as Amazon Web Services Systems Manager, with DevOps Guru.
		 * Required
		 */
		ServiceIntegration: UpdateServiceIntegrationPutBodyServiceIntegration;
	}
	export interface UpdateServiceIntegrationPutBodyFormProperties {
	}
	export function CreateUpdateServiceIntegrationPutBodyFormGroup() {
		return new FormGroup<UpdateServiceIntegrationPutBodyFormProperties>({
		});

	}

	export interface UpdateServiceIntegrationPutBodyServiceIntegration {

		/** Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight. You can use this to update the configuration. */
		OpsCenter?: OpsCenterIntegrationConfig;
		LogsAnomalyDetection?: LogsAnomalyDetectionIntegrationConfig;
		KMSServerSideEncryption?: KMSServerSideEncryptionIntegrationConfig;
	}
	export interface UpdateServiceIntegrationPutBodyServiceIntegrationFormProperties {
	}
	export function CreateUpdateServiceIntegrationPutBodyServiceIntegrationFormGroup() {
		return new FormGroup<UpdateServiceIntegrationPutBodyServiceIntegrationFormProperties>({
		});

	}

	export interface StartCostEstimationPutBody {

		/**
		 * Information about a filter used to specify which Amazon Web Services resources are analyzed to create a monthly DevOps Guru cost estimate. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.
		 * Required
		 */
		ResourceCollection: StartCostEstimationPutBodyResourceCollection;

		/**
		 * The idempotency token used to identify each cost estimate request.
		 * Max length: 100
		 * Min length: 1
		 */
		ClientToken?: string | null;
	}
	export interface StartCostEstimationPutBodyFormProperties {

		/**
		 * The idempotency token used to identify each cost estimate request.
		 * Max length: 100
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartCostEstimationPutBodyFormGroup() {
		return new FormGroup<StartCostEstimationPutBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9]+[a-zA-Z0-9-]*$')]),
		});

	}

	export interface StartCostEstimationPutBodyResourceCollection {
		CloudFormation?: CloudFormationCostEstimationResourceCollectionFilter;
		Tags?: Array<TagCostEstimationResourceCollectionFilter>;
	}
	export interface StartCostEstimationPutBodyResourceCollectionFormProperties {
	}
	export function CreateStartCostEstimationPutBodyResourceCollectionFormGroup() {
		return new FormGroup<StartCostEstimationPutBodyResourceCollectionFormProperties>({
		});

	}

	export interface ListAnomaliesForInsightPostBody {

		/** A time range used to specify when the behavior of an insight or anomaly started. */
		StartTimeRange?: ListAnomaliesForInsightPostBodyStartTimeRange;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		MaxResults?: number | null;

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken?: string | null;

		/**
		 * The ID of the Amazon Web Services account.
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId?: string | null;

		/** Specifies one or more service names that are used to list anomalies. */
		Filters?: ListAnomaliesForInsightPostBodyFilters;
	}
	export interface ListAnomaliesForInsightPostBodyFormProperties {

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 500
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The ID of the Amazon Web Services account.
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateListAnomaliesForInsightPostBodyFormGroup() {
		return new FormGroup<ListAnomaliesForInsightPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^\d{12}$')]),
		});

	}

	export interface ListAnomaliesForInsightPostBodyStartTimeRange {
		FromTime?: Date;
		ToTime?: Date;
	}
	export interface ListAnomaliesForInsightPostBodyStartTimeRangeFormProperties {
		FromTime: FormControl<Date | null | undefined>,
		ToTime: FormControl<Date | null | undefined>,
	}
	export function CreateListAnomaliesForInsightPostBodyStartTimeRangeFormGroup() {
		return new FormGroup<ListAnomaliesForInsightPostBodyStartTimeRangeFormProperties>({
			FromTime: new FormControl<Date | null | undefined>(undefined),
			ToTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAnomaliesForInsightPostBodyFilters {

		/** A collection of the names of Amazon Web Services services. */
		ServiceCollection?: ServiceCollection;
	}
	export interface ListAnomaliesForInsightPostBodyFiltersFormProperties {
	}
	export function CreateListAnomaliesForInsightPostBodyFiltersFormGroup() {
		return new FormGroup<ListAnomaliesForInsightPostBodyFiltersFormProperties>({
		});

	}

	export interface ListAnomalousLogGroupsPostBody {

		/**
		 * The ID of the insight containing the log groups.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InsightId: string;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults?: number | null;

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken?: string | null;
	}
	export interface ListAnomalousLogGroupsPostBodyFormProperties {

		/**
		 * The ID of the insight containing the log groups.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InsightId: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnomalousLogGroupsPostBodyFormGroup() {
		return new FormGroup<ListAnomalousLogGroupsPostBodyFormProperties>({
			InsightId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[\w-]*$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(200)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
		});

	}

	export interface ListEventsPostBody {

		/**
		 * Filters you can use to specify which events are returned when <code>ListEvents</code> is called.
		 * Required
		 */
		Filters: ListEventsPostBodyFilters;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults?: number | null;

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken?: string | null;

		/**
		 * The ID of the Amazon Web Services account.
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId?: string | null;
	}
	export interface ListEventsPostBodyFormProperties {

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 200
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The ID of the Amazon Web Services account.
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateListEventsPostBodyFormGroup() {
		return new FormGroup<ListEventsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(200)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^\d{12}$')]),
		});

	}

	export interface ListEventsPostBodyFilters {
		InsightId?: string;
		EventTimeRange?: EventTimeRange;
		EventClass?: EventClass;
		EventSource?: string;
		DataSource?: EventDataSource;

		/** A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
		ResourceCollection?: ResourceCollection;
	}
	export interface ListEventsPostBodyFiltersFormProperties {
		InsightId: FormControl<string | null | undefined>,
		EventClass: FormControl<EventClass | null | undefined>,
		EventSource: FormControl<string | null | undefined>,
		DataSource: FormControl<EventDataSource | null | undefined>,
	}
	export function CreateListEventsPostBodyFiltersFormGroup() {
		return new FormGroup<ListEventsPostBodyFiltersFormProperties>({
			InsightId: new FormControl<string | null | undefined>(undefined),
			EventClass: new FormControl<EventClass | null | undefined>(undefined),
			EventSource: new FormControl<string | null | undefined>(undefined),
			DataSource: new FormControl<EventDataSource | null | undefined>(undefined),
		});

	}

	export interface ListInsightsPostBody {

		/**
		 * A filter used by <code>ListInsights</code> to specify which insights to return.
		 * Required
		 */
		StatusFilter: ListInsightsPostBodyStatusFilter;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken?: string | null;
	}
	export interface ListInsightsPostBodyFormProperties {

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListInsightsPostBodyFormGroup() {
		return new FormGroup<ListInsightsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
		});

	}

	export interface ListInsightsPostBodyStatusFilter {
		Ongoing?: ListInsightsOngoingStatusFilter;
		Closed?: ListInsightsClosedStatusFilter;
		Any?: ListInsightsAnyStatusFilter;
	}
	export interface ListInsightsPostBodyStatusFilterFormProperties {
	}
	export function CreateListInsightsPostBodyStatusFilterFormGroup() {
		return new FormGroup<ListInsightsPostBodyStatusFilterFormProperties>({
		});

	}

	export interface ListMonitoredResourcesPostBody {

		/** Filters to determine which monitored resources you want to retrieve. You can filter by resource type or resource permission status. */
		Filters?: ListMonitoredResourcesPostBodyFilters;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken?: string | null;
	}
	export interface ListMonitoredResourcesPostBodyFormProperties {

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMonitoredResourcesPostBodyFormGroup() {
		return new FormGroup<ListMonitoredResourcesPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
		});

	}

	export interface ListMonitoredResourcesPostBodyFilters {
		ResourcePermission?: ResourcePermission;
		ResourceTypeFilters?: Array<ResourceTypeFilter>;
	}
	export interface ListMonitoredResourcesPostBodyFiltersFormProperties {
		ResourcePermission: FormControl<ResourcePermission | null | undefined>,
	}
	export function CreateListMonitoredResourcesPostBodyFiltersFormGroup() {
		return new FormGroup<ListMonitoredResourcesPostBodyFiltersFormProperties>({
			ResourcePermission: new FormControl<ResourcePermission | null | undefined>(undefined),
		});

	}

	export interface ListOrganizationInsightsPostBody {

		/**
		 * A filter used by <code>ListInsights</code> to specify which insights to return.
		 * Required
		 */
		StatusFilter: ListOrganizationInsightsPostBodyStatusFilter;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * The ID of the Amazon Web Services account.
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		AccountIds?: Array<string>;

		/**
		 * The ID of the organizational unit.
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		OrganizationalUnitIds?: Array<string>;

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken?: string | null;
	}
	export interface ListOrganizationInsightsPostBodyFormProperties {

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrganizationInsightsPostBodyFormGroup() {
		return new FormGroup<ListOrganizationInsightsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
		});

	}

	export interface ListOrganizationInsightsPostBodyStatusFilter {
		Ongoing?: ListInsightsOngoingStatusFilter;
		Closed?: ListInsightsClosedStatusFilter;
		Any?: ListInsightsAnyStatusFilter;
	}
	export interface ListOrganizationInsightsPostBodyStatusFilterFormProperties {
	}
	export function CreateListOrganizationInsightsPostBodyStatusFilterFormGroup() {
		return new FormGroup<ListOrganizationInsightsPostBodyStatusFilterFormProperties>({
		});

	}

	export interface ListRecommendationsPostBody {

		/**
		 * The ID of the requested insight.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InsightId: string;

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken?: string | null;

		/** A locale that specifies the language to use for recommendations. */
		Locale?: Locale | null;

		/**
		 * The ID of the Amazon Web Services account.
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId?: string | null;
	}
	export interface ListRecommendationsPostBodyFormProperties {

		/**
		 * The ID of the requested insight.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InsightId: FormControl<string | null | undefined>,

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken: FormControl<string | null | undefined>,

		/** A locale that specifies the language to use for recommendations. */
		Locale: FormControl<Locale | null | undefined>,

		/**
		 * The ID of the Amazon Web Services account.
		 * Max length: 12
		 * Min length: 12
		 */
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateListRecommendationsPostBodyFormGroup() {
		return new FormGroup<ListRecommendationsPostBodyFormProperties>({
			InsightId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[\w-]*$')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
			Locale: new FormControl<Locale | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^\d{12}$')]),
		});

	}

	export interface SearchInsightsPostBody {

		/**
		 * A time range used to specify when the behavior of an insight or anomaly started.
		 * Required
		 */
		StartTimeRange: SearchInsightsPostBodyStartTimeRange;

		/** Specifies values used to filter responses when searching for insights. You can use a <code>ResourceCollection</code>, <code>ServiceCollection</code>, array of severities, and an array of status values. Each filter type contains one or more values to search for. If you specify multiple filter types, the filter types are joined with an <code>AND</code>, and the request returns only results that match all of the specified filters. */
		Filters?: SearchInsightsPostBodyFilters;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken?: string | null;

		/**
		 * The type of insights you are searching for (<code>REACTIVE</code> or <code>PROACTIVE</code>).
		 * Required
		 */
		Type: InsightType;
	}
	export interface SearchInsightsPostBodyFormProperties {

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The type of insights you are searching for (<code>REACTIVE</code> or <code>PROACTIVE</code>).
		 * Required
		 */
		Type: FormControl<InsightType | null | undefined>,
	}
	export function CreateSearchInsightsPostBodyFormGroup() {
		return new FormGroup<SearchInsightsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
			Type: new FormControl<InsightType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchInsightsPostBodyStartTimeRange {
		FromTime?: Date;
		ToTime?: Date;
	}
	export interface SearchInsightsPostBodyStartTimeRangeFormProperties {
		FromTime: FormControl<Date | null | undefined>,
		ToTime: FormControl<Date | null | undefined>,
	}
	export function CreateSearchInsightsPostBodyStartTimeRangeFormGroup() {
		return new FormGroup<SearchInsightsPostBodyStartTimeRangeFormProperties>({
			FromTime: new FormControl<Date | null | undefined>(undefined),
			ToTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SearchInsightsPostBodyFilters {
		Severities?: Array<InsightSeverity>;
		Statuses?: Array<InsightStatus>;

		/** A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
		ResourceCollection?: ResourceCollection;
		ServiceCollection?: ServiceCollection;
	}
	export interface SearchInsightsPostBodyFiltersFormProperties {
	}
	export function CreateSearchInsightsPostBodyFiltersFormGroup() {
		return new FormGroup<SearchInsightsPostBodyFiltersFormProperties>({
		});

	}

	export interface SearchOrganizationInsightsPostBody {

		/**
		 * The ID of the Amazon Web Services account.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		AccountIds: Array<string>;

		/**
		 * A time range used to specify when the behavior of an insight or anomaly started.
		 * Required
		 */
		StartTimeRange: SearchOrganizationInsightsPostBodyStartTimeRange;

		/** Filters you can use to specify which events are returned when <code>ListEvents</code> is called. */
		Filters?: SearchOrganizationInsightsPostBodyFilters;

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken?: string | null;

		/**
		 * The type of insights you are searching for (<code>REACTIVE</code> or <code>PROACTIVE</code>).
		 * Required
		 */
		Type: InsightType;
	}
	export interface SearchOrganizationInsightsPostBodyFormProperties {

		/**
		 * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 36
		 * Min length: 36
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The type of insights you are searching for (<code>REACTIVE</code> or <code>PROACTIVE</code>).
		 * Required
		 */
		Type: FormControl<InsightType | null | undefined>,
	}
	export function CreateSearchOrganizationInsightsPostBodyFormGroup() {
		return new FormGroup<SearchOrganizationInsightsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$')]),
			Type: new FormControl<InsightType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchOrganizationInsightsPostBodyStartTimeRange {
		FromTime?: Date;
		ToTime?: Date;
	}
	export interface SearchOrganizationInsightsPostBodyStartTimeRangeFormProperties {
		FromTime: FormControl<Date | null | undefined>,
		ToTime: FormControl<Date | null | undefined>,
	}
	export function CreateSearchOrganizationInsightsPostBodyStartTimeRangeFormGroup() {
		return new FormGroup<SearchOrganizationInsightsPostBodyStartTimeRangeFormProperties>({
			FromTime: new FormControl<Date | null | undefined>(undefined),
			ToTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SearchOrganizationInsightsPostBodyFilters {
		Severities?: Array<InsightSeverity>;
		Statuses?: Array<InsightStatus>;

		/** A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. */
		ResourceCollection?: ResourceCollection;

		/** A collection of the names of Amazon Web Services services. */
		ServiceCollection?: ServiceCollection;
	}
	export interface SearchOrganizationInsightsPostBodyFiltersFormProperties {
	}
	export function CreateSearchOrganizationInsightsPostBodyFiltersFormGroup() {
		return new FormGroup<SearchOrganizationInsightsPostBodyFiltersFormProperties>({
		});

	}

	export interface UpdateResourceCollectionPutBody {

		/**
		 * Specifies if the resource collection in the request is added or deleted to the resource collection.
		 * Required
		 */
		Action: UpdateResourceCollectionAction;

		/**
		 * Contains information used to update a collection of Amazon Web Services resources.
		 * Required
		 */
		ResourceCollection: UpdateResourceCollectionPutBodyResourceCollection;
	}
	export interface UpdateResourceCollectionPutBodyFormProperties {

		/**
		 * Specifies if the resource collection in the request is added or deleted to the resource collection.
		 * Required
		 */
		Action: FormControl<UpdateResourceCollectionAction | null | undefined>,
	}
	export function CreateUpdateResourceCollectionPutBodyFormGroup() {
		return new FormGroup<UpdateResourceCollectionPutBodyFormProperties>({
			Action: new FormControl<UpdateResourceCollectionAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateResourceCollectionPutBodyResourceCollection {
		CloudFormation?: UpdateCloudFormationCollectionFilter;
		Tags?: Array<UpdateTagCollectionFilter>;
	}
	export interface UpdateResourceCollectionPutBodyResourceCollectionFormProperties {
	}
	export function CreateUpdateResourceCollectionPutBodyResourceCollectionFormGroup() {
		return new FormGroup<UpdateResourceCollectionPutBodyResourceCollectionFormProperties>({
		});

	}

}

