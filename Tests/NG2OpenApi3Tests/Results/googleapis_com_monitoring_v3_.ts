import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes how to combine multiple time series to provide a different view of the data. Aggregation of time series is done in two steps. First, each time series in the set is aligned to the same time interval boundaries, then the set of time series is optionally reduced in number.Alignment consists of applying the per_series_aligner operation to each time series after its data has been divided into regular alignment_period time intervals. This process takes all of the data points in an alignment period, applies a mathematical transformation such as averaging, minimum, maximum, delta, etc., and converts them into a single data point per period.Reduction is when the aligned and transformed time series can optionally be combined, reducing the number of time series through similar mathematical transformations. Reduction involves applying a cross_series_reducer to all the time series, optionally sorting the time series into subsets with group_by_fields, and applying the reducer to each subset.The raw time series data can contain a huge amount of information from multiple sources. Alignment and reduction transforms this mass of data into a more manageable and representative collection of data, for example "the 95% latency across the average of all tasks in a cluster". This representative data can be more easily graphed and comprehended, and the individual time series data is still available for later drilldown. For more details, see Filtering and aggregation (https://cloud.google.com/monitoring/api/v3/aggregation). */
	export interface Aggregation {

		/** The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies. */
		alignmentPeriod?: string | null;

		/** The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned. */
		crossSeriesReducer?: AggregationCrossSeriesReducer | null;

		/** The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored. */
		groupByFields?: Array<string>;

		/** An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned. */
		perSeriesAligner?: AggregationPerSeriesAligner | null;
	}

	/** Describes how to combine multiple time series to provide a different view of the data. Aggregation of time series is done in two steps. First, each time series in the set is aligned to the same time interval boundaries, then the set of time series is optionally reduced in number.Alignment consists of applying the per_series_aligner operation to each time series after its data has been divided into regular alignment_period time intervals. This process takes all of the data points in an alignment period, applies a mathematical transformation such as averaging, minimum, maximum, delta, etc., and converts them into a single data point per period.Reduction is when the aligned and transformed time series can optionally be combined, reducing the number of time series through similar mathematical transformations. Reduction involves applying a cross_series_reducer to all the time series, optionally sorting the time series into subsets with group_by_fields, and applying the reducer to each subset.The raw time series data can contain a huge amount of information from multiple sources. Alignment and reduction transforms this mass of data into a more manageable and representative collection of data, for example "the 95% latency across the average of all tasks in a cluster". This representative data can be more easily graphed and comprehended, and the individual time series data is still available for later drilldown. For more details, see Filtering and aggregation (https://cloud.google.com/monitoring/api/v3/aggregation). */
	export interface AggregationFormProperties {

		/** The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies. */
		alignmentPeriod: FormControl<string | null | undefined>,

		/** The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned. */
		crossSeriesReducer: FormControl<AggregationCrossSeriesReducer | null | undefined>,

		/** An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned. */
		perSeriesAligner: FormControl<AggregationPerSeriesAligner | null | undefined>,
	}
	export function CreateAggregationFormGroup() {
		return new FormGroup<AggregationFormProperties>({
			alignmentPeriod: new FormControl<string | null | undefined>(undefined),
			crossSeriesReducer: new FormControl<AggregationCrossSeriesReducer | null | undefined>(undefined),
			perSeriesAligner: new FormControl<AggregationPerSeriesAligner | null | undefined>(undefined),
		});

	}

	export enum AggregationCrossSeriesReducer { REDUCE_NONE = 'REDUCE_NONE', REDUCE_MEAN = 'REDUCE_MEAN', REDUCE_MIN = 'REDUCE_MIN', REDUCE_MAX = 'REDUCE_MAX', REDUCE_SUM = 'REDUCE_SUM', REDUCE_STDDEV = 'REDUCE_STDDEV', REDUCE_COUNT = 'REDUCE_COUNT', REDUCE_COUNT_TRUE = 'REDUCE_COUNT_TRUE', REDUCE_COUNT_FALSE = 'REDUCE_COUNT_FALSE', REDUCE_FRACTION_TRUE = 'REDUCE_FRACTION_TRUE', REDUCE_PERCENTILE_99 = 'REDUCE_PERCENTILE_99', REDUCE_PERCENTILE_95 = 'REDUCE_PERCENTILE_95', REDUCE_PERCENTILE_50 = 'REDUCE_PERCENTILE_50', REDUCE_PERCENTILE_05 = 'REDUCE_PERCENTILE_05' }

	export enum AggregationPerSeriesAligner { ALIGN_NONE = 'ALIGN_NONE', ALIGN_DELTA = 'ALIGN_DELTA', ALIGN_RATE = 'ALIGN_RATE', ALIGN_INTERPOLATE = 'ALIGN_INTERPOLATE', ALIGN_NEXT_OLDER = 'ALIGN_NEXT_OLDER', ALIGN_MIN = 'ALIGN_MIN', ALIGN_MAX = 'ALIGN_MAX', ALIGN_MEAN = 'ALIGN_MEAN', ALIGN_COUNT = 'ALIGN_COUNT', ALIGN_SUM = 'ALIGN_SUM', ALIGN_STDDEV = 'ALIGN_STDDEV', ALIGN_COUNT_TRUE = 'ALIGN_COUNT_TRUE', ALIGN_COUNT_FALSE = 'ALIGN_COUNT_FALSE', ALIGN_FRACTION_TRUE = 'ALIGN_FRACTION_TRUE', ALIGN_PERCENTILE_99 = 'ALIGN_PERCENTILE_99', ALIGN_PERCENTILE_95 = 'ALIGN_PERCENTILE_95', ALIGN_PERCENTILE_50 = 'ALIGN_PERCENTILE_50', ALIGN_PERCENTILE_05 = 'ALIGN_PERCENTILE_05', ALIGN_PERCENT_CHANGE = 'ALIGN_PERCENT_CHANGE' }


	/** A description of the conditions under which some aspect of your system is considered to be "unhealthy" and the ways to notify people or services about this state. For an overview of alert policies, see Introduction to Alerting (https://cloud.google.com/monitoring/alerts/). */
	export interface AlertPolicy {

		/** Control over how the notification channels in notification_channels are notified when this alert fires. */
		alertStrategy?: AlertStrategy;

		/** How to combine the results of multiple conditions to determine if an incident should be opened. If condition_time_series_query_language is present, this must be COMBINE_UNSPECIFIED. */
		combiner?: AlertPolicyCombiner | null;

		/** A list of conditions for the policy. The conditions are combined by AND or OR according to the combiner field. If the combined conditions evaluate to true, then an incident is created. A policy can have from one to six conditions. If condition_time_series_query_language is present, it must be the only condition. If condition_monitoring_query_language is present, it must be the only condition. */
		conditions?: Array<Condition>;

		/** Describes a change made to a configuration. */
		creationRecord?: MutationRecord;

		/** A short name or phrase used to identify the policy in dashboards, notifications, and incidents. To avoid confusion, don't use the same display name for multiple policies in the same project. The name is limited to 512 Unicode characters.The convention for the display_name of a PrometheusQueryLanguageCondition is "{rule group name}/{alert name}", where the {rule group name} and {alert name} should be taken from the corresponding Prometheus configuration file. This convention is not enforced. In any case the display_name is not a unique key of the AlertPolicy. */
		displayName?: string | null;

		/** A content string and a MIME type that describes the content string's format. */
		documentation?: Documentation;

		/** Whether or not the policy is enabled. On write, the default interpretation if unset is that the policy is enabled. On read, clients should not make any assumption about the state if it has not been populated. The field should always be populated on List and Get operations, unless a field projection has been specified that strips it out. */
		enabled?: boolean | null;

		/** Describes a change made to a configuration. */
		mutationRecord?: MutationRecord;

		/** Required if the policy exists. The resource name for this policy. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID] [ALERT_POLICY_ID] is assigned by Cloud Monitoring when the policy is created. When calling the alertPolicies.create method, do not include the name field in the alerting policy passed as part of the request. */
		name?: string | null;

		/** Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident. Each element of this array corresponds to the name field in each of the NotificationChannel objects that are returned from the ListNotificationChannels method. The format of the entries in this field is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] */
		notificationChannels?: Array<string>;

		/** Optional. The severity of an alert policy indicates how important incidents generated by that policy are. The severity level will be displayed on the Incident detail page and in notifications. */
		severity?: AlertPolicySeverity | null;

		/** User-supplied key/value data to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.Note that Prometheus {alert name} is a valid Prometheus label names (https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels), whereas Prometheus {rule group} is an unrestricted UTF-8 string. This means that they cannot be stored as-is in user labels, because they may contain characters that are not allowed in user-label values. */
		userLabels?: {[id: string]: string };

		/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
		validity?: Status;
	}

	/** A description of the conditions under which some aspect of your system is considered to be "unhealthy" and the ways to notify people or services about this state. For an overview of alert policies, see Introduction to Alerting (https://cloud.google.com/monitoring/alerts/). */
	export interface AlertPolicyFormProperties {

		/** How to combine the results of multiple conditions to determine if an incident should be opened. If condition_time_series_query_language is present, this must be COMBINE_UNSPECIFIED. */
		combiner: FormControl<AlertPolicyCombiner | null | undefined>,

		/** A short name or phrase used to identify the policy in dashboards, notifications, and incidents. To avoid confusion, don't use the same display name for multiple policies in the same project. The name is limited to 512 Unicode characters.The convention for the display_name of a PrometheusQueryLanguageCondition is "{rule group name}/{alert name}", where the {rule group name} and {alert name} should be taken from the corresponding Prometheus configuration file. This convention is not enforced. In any case the display_name is not a unique key of the AlertPolicy. */
		displayName: FormControl<string | null | undefined>,

		/** Whether or not the policy is enabled. On write, the default interpretation if unset is that the policy is enabled. On read, clients should not make any assumption about the state if it has not been populated. The field should always be populated on List and Get operations, unless a field projection has been specified that strips it out. */
		enabled: FormControl<boolean | null | undefined>,

		/** Required if the policy exists. The resource name for this policy. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID] [ALERT_POLICY_ID] is assigned by Cloud Monitoring when the policy is created. When calling the alertPolicies.create method, do not include the name field in the alerting policy passed as part of the request. */
		name: FormControl<string | null | undefined>,

		/** Optional. The severity of an alert policy indicates how important incidents generated by that policy are. The severity level will be displayed on the Incident detail page and in notifications. */
		severity: FormControl<AlertPolicySeverity | null | undefined>,

		/** User-supplied key/value data to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.Note that Prometheus {alert name} is a valid Prometheus label names (https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels), whereas Prometheus {rule group} is an unrestricted UTF-8 string. This means that they cannot be stored as-is in user labels, because they may contain characters that are not allowed in user-label values. */
		userLabels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAlertPolicyFormGroup() {
		return new FormGroup<AlertPolicyFormProperties>({
			combiner: new FormControl<AlertPolicyCombiner | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<AlertPolicySeverity | null | undefined>(undefined),
			userLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Control over how the notification channels in notification_channels are notified when this alert fires. */
	export interface AlertStrategy {

		/** If an alert policy that was active has no data for this long, any open incidents will close */
		autoClose?: string | null;

		/** Control how notifications will be sent out, on a per-channel basis. */
		notificationChannelStrategy?: Array<NotificationChannelStrategy>;

		/** Control over the rate of notifications sent to this alert policy's notification channels. */
		notificationRateLimit?: NotificationRateLimit;
	}

	/** Control over how the notification channels in notification_channels are notified when this alert fires. */
	export interface AlertStrategyFormProperties {

		/** If an alert policy that was active has no data for this long, any open incidents will close */
		autoClose: FormControl<string | null | undefined>,
	}
	export function CreateAlertStrategyFormGroup() {
		return new FormGroup<AlertStrategyFormProperties>({
			autoClose: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Control over how the notification channels in notification_channels are notified when this alert fires, on a per-channel basis. */
	export interface NotificationChannelStrategy {

		/** The full REST resource name for the notification channels that these settings apply to. Each of these correspond to the name field in one of the NotificationChannel objects referenced in the notification_channels field of this AlertPolicy. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] */
		notificationChannelNames?: Array<string>;

		/** The frequency at which to send reminder notifications for open incidents. */
		renotifyInterval?: string | null;
	}

	/** Control over how the notification channels in notification_channels are notified when this alert fires, on a per-channel basis. */
	export interface NotificationChannelStrategyFormProperties {

		/** The frequency at which to send reminder notifications for open incidents. */
		renotifyInterval: FormControl<string | null | undefined>,
	}
	export function CreateNotificationChannelStrategyFormGroup() {
		return new FormGroup<NotificationChannelStrategyFormProperties>({
			renotifyInterval: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Control over the rate of notifications sent to this alert policy's notification channels. */
	export interface NotificationRateLimit {

		/** Not more than one notification per period. */
		period?: string | null;
	}

	/** Control over the rate of notifications sent to this alert policy's notification channels. */
	export interface NotificationRateLimitFormProperties {

		/** Not more than one notification per period. */
		period: FormControl<string | null | undefined>,
	}
	export function CreateNotificationRateLimitFormGroup() {
		return new FormGroup<NotificationRateLimitFormProperties>({
			period: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AlertPolicyCombiner { COMBINE_UNSPECIFIED = 'COMBINE_UNSPECIFIED', AND = 'AND', OR = 'OR', AND_WITH_MATCHING_RESOURCE = 'AND_WITH_MATCHING_RESOURCE' }


	/** A condition is a true/false test that determines when an alerting policy should open an incident. If a condition evaluates to true, it signifies that something is wrong. */
	export interface Condition {

		/** A condition type that checks that monitored resources are reporting data. The configuration defines a metric and a set of monitored resources. The predicate is considered in violation when a time series for the specified metric of a monitored resource does not include any data in the specified duration. */
		conditionAbsent?: MetricAbsence;

		/** A condition type that checks whether a log message in the scoping project (https://cloud.google.com/monitoring/api/v3#project_name) satisfies the given filter. Logs from other projects in the metrics scope are not evaluated. */
		conditionMatchedLog?: LogMatch;

		/** A condition type that allows alert policies to be defined using Monitoring Query Language (https://cloud.google.com/monitoring/mql). */
		conditionMonitoringQueryLanguage?: MonitoringQueryLanguageCondition;

		/** A condition type that allows alert policies to be defined using Prometheus Query Language (PromQL) (https://prometheus.io/docs/prometheus/latest/querying/basics/).The PrometheusQueryLanguageCondition message contains information from a Prometheus alerting rule and its associated rule group.A Prometheus alerting rule is described here (https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/). The semantics of a Prometheus alerting rule is described here (https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/#rule).A Prometheus rule group is described here (https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/). The semantics of a Prometheus rule group is described here (https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/#rule_group).Because Cloud Alerting has no representation of a Prometheus rule group resource, we must embed the information of the parent rule group inside each of the conditions that refer to it. We must also update the contents of all Prometheus alerts in case the information of their rule group changes.The PrometheusQueryLanguageCondition protocol buffer combines the information of the corresponding rule group and alerting rule. The structure of the PrometheusQueryLanguageCondition protocol buffer does NOT mimic the structure of the Prometheus rule group and alerting rule YAML declarations. The PrometheusQueryLanguageCondition protocol buffer may change in the future to support future rule group and/or alerting rule features. There are no new such features at the present time (2023-06-26). */
		conditionPrometheusQueryLanguage?: PrometheusQueryLanguageCondition;

		/** A condition type that compares a collection of time series against a threshold. */
		conditionThreshold?: MetricThreshold;

		/** A short name or phrase used to identify the condition in dashboards, notifications, and incidents. To avoid confusion, don't use the same display name for multiple conditions in the same policy. */
		displayName?: string | null;

		/** Required if the condition exists. The unique resource name for this condition. Its format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[POLICY_ID]/conditions/[CONDITION_ID] [CONDITION_ID] is assigned by Cloud Monitoring when the condition is created as part of a new or updated alerting policy.When calling the alertPolicies.create method, do not include the name field in the conditions of the requested alerting policy. Cloud Monitoring creates the condition identifiers and includes them in the new policy.When calling the alertPolicies.update method to update a policy, including a condition name causes the existing condition to be updated. Conditions without names are added to the updated policy. Existing conditions are deleted if they are not updated.Best practice is to preserve [CONDITION_ID] if you make only small changes, such as those to condition thresholds, durations, or trigger values. Otherwise, treat the change as a new condition and let the existing condition be deleted. */
		name?: string | null;
	}

	/** A condition is a true/false test that determines when an alerting policy should open an incident. If a condition evaluates to true, it signifies that something is wrong. */
	export interface ConditionFormProperties {

		/** A short name or phrase used to identify the condition in dashboards, notifications, and incidents. To avoid confusion, don't use the same display name for multiple conditions in the same policy. */
		displayName: FormControl<string | null | undefined>,

		/** Required if the condition exists. The unique resource name for this condition. Its format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[POLICY_ID]/conditions/[CONDITION_ID] [CONDITION_ID] is assigned by Cloud Monitoring when the condition is created as part of a new or updated alerting policy.When calling the alertPolicies.create method, do not include the name field in the conditions of the requested alerting policy. Cloud Monitoring creates the condition identifiers and includes them in the new policy.When calling the alertPolicies.update method to update a policy, including a condition name causes the existing condition to be updated. Conditions without names are added to the updated policy. Existing conditions are deleted if they are not updated.Best practice is to preserve [CONDITION_ID] if you make only small changes, such as those to condition thresholds, durations, or trigger values. Otherwise, treat the change as a new condition and let the existing condition be deleted. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateConditionFormGroup() {
		return new FormGroup<ConditionFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A condition type that checks that monitored resources are reporting data. The configuration defines a metric and a set of monitored resources. The predicate is considered in violation when a time series for the specified metric of a monitored resource does not include any data in the specified duration. */
	export interface MetricAbsence {

		/** Specifies the alignment of data points in individual time series as well as how to combine the retrieved time series together (such as when aggregating multiple streams on each resource to a single stream for each resource or when aggregating streams across all members of a group of resources). Multiple aggregations are applied in the order specified.This field is similar to the one in the ListTimeSeries request (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list). It is advisable to use the ListTimeSeries method when debugging this field. */
		aggregations?: Array<Aggregation>;

		/** The amount of time that a time series must fail to report new data to be considered failing. The minimum value of this field is 120 seconds. Larger values that are a multiple of a minute--for example, 240 or 300 seconds--are supported. If an invalid value is given, an error will be returned. The Duration.nanos field is ignored. */
		duration?: string | null;

		/** Required. A filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the ListTimeSeries request (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) (that call is useful to verify the time series that will be retrieved / processed). The filter must specify the metric type and the resource type. Optionally, it can specify resource labels and metric labels. This field must not exceed 2048 Unicode characters in length. */
		filter?: string | null;

		/** Specifies how many time series must fail a predicate to trigger a condition. If not specified, then a {count: 1} trigger is used. */
		trigger?: Trigger;
	}

	/** A condition type that checks that monitored resources are reporting data. The configuration defines a metric and a set of monitored resources. The predicate is considered in violation when a time series for the specified metric of a monitored resource does not include any data in the specified duration. */
	export interface MetricAbsenceFormProperties {

		/** The amount of time that a time series must fail to report new data to be considered failing. The minimum value of this field is 120 seconds. Larger values that are a multiple of a minute--for example, 240 or 300 seconds--are supported. If an invalid value is given, an error will be returned. The Duration.nanos field is ignored. */
		duration: FormControl<string | null | undefined>,

		/** Required. A filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the ListTimeSeries request (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) (that call is useful to verify the time series that will be retrieved / processed). The filter must specify the metric type and the resource type. Optionally, it can specify resource labels and metric labels. This field must not exceed 2048 Unicode characters in length. */
		filter: FormControl<string | null | undefined>,
	}
	export function CreateMetricAbsenceFormGroup() {
		return new FormGroup<MetricAbsenceFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies how many time series must fail a predicate to trigger a condition. If not specified, then a {count: 1} trigger is used. */
	export interface Trigger {

		/** The absolute number of time series that must fail the predicate for the condition to be triggered. */
		count?: number | null;

		/** The percentage of time series that must fail the predicate for the condition to be triggered. */
		percent?: number | null;
	}

	/** Specifies how many time series must fail a predicate to trigger a condition. If not specified, then a {count: 1} trigger is used. */
	export interface TriggerFormProperties {

		/** The absolute number of time series that must fail the predicate for the condition to be triggered. */
		count: FormControl<number | null | undefined>,

		/** The percentage of time series that must fail the predicate for the condition to be triggered. */
		percent: FormControl<number | null | undefined>,
	}
	export function CreateTriggerFormGroup() {
		return new FormGroup<TriggerFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			percent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A condition type that checks whether a log message in the scoping project (https://cloud.google.com/monitoring/api/v3#project_name) satisfies the given filter. Logs from other projects in the metrics scope are not evaluated. */
	export interface LogMatch {

		/** Required. A logs-based filter. See Advanced Logs Queries (https://cloud.google.com/logging/docs/view/advanced-queries) for how this filter should be constructed. */
		filter?: string | null;

		/** Optional. A map from a label key to an extractor expression, which is used to extract the value for this label key. Each entry in this map is a specification for how data should be extracted from log entries that match filter. Each combination of extracted values is treated as a separate rule for the purposes of triggering notifications. Label keys and corresponding values can be used in notifications generated by this condition.Please see the documentation on logs-based metric valueExtractors (https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.metrics#LogMetric.FIELDS.value_extractor) for syntax and examples. */
		labelExtractors?: {[id: string]: string };
	}

	/** A condition type that checks whether a log message in the scoping project (https://cloud.google.com/monitoring/api/v3#project_name) satisfies the given filter. Logs from other projects in the metrics scope are not evaluated. */
	export interface LogMatchFormProperties {

		/** Required. A logs-based filter. See Advanced Logs Queries (https://cloud.google.com/logging/docs/view/advanced-queries) for how this filter should be constructed. */
		filter: FormControl<string | null | undefined>,

		/** Optional. A map from a label key to an extractor expression, which is used to extract the value for this label key. Each entry in this map is a specification for how data should be extracted from log entries that match filter. Each combination of extracted values is treated as a separate rule for the purposes of triggering notifications. Label keys and corresponding values can be used in notifications generated by this condition.Please see the documentation on logs-based metric valueExtractors (https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.metrics#LogMetric.FIELDS.value_extractor) for syntax and examples. */
		labelExtractors: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateLogMatchFormGroup() {
		return new FormGroup<LogMatchFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			labelExtractors: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A condition type that allows alert policies to be defined using Monitoring Query Language (https://cloud.google.com/monitoring/mql). */
	export interface MonitoringQueryLanguageCondition {

		/** The amount of time that a time series must violate the threshold to be considered failing. Currently, only values that are a multiple of a minute--e.g., 0, 60, 120, or 300 seconds--are supported. If an invalid value is given, an error will be returned. When choosing a duration, it is useful to keep in mind the frequency of the underlying time series data (which may also be affected by any alignments specified in the aggregations field); a good duration is long enough so that a single outlier does not generate spurious alerts, but short enough that unhealthy states are detected and alerted on quickly. */
		duration?: string | null;

		/** A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. */
		evaluationMissingData?: MonitoringQueryLanguageConditionEvaluationMissingData | null;

		/** Monitoring Query Language (https://cloud.google.com/monitoring/mql) query that outputs a boolean stream. */
		query?: string | null;

		/** Specifies how many time series must fail a predicate to trigger a condition. If not specified, then a {count: 1} trigger is used. */
		trigger?: Trigger;
	}

	/** A condition type that allows alert policies to be defined using Monitoring Query Language (https://cloud.google.com/monitoring/mql). */
	export interface MonitoringQueryLanguageConditionFormProperties {

		/** The amount of time that a time series must violate the threshold to be considered failing. Currently, only values that are a multiple of a minute--e.g., 0, 60, 120, or 300 seconds--are supported. If an invalid value is given, an error will be returned. When choosing a duration, it is useful to keep in mind the frequency of the underlying time series data (which may also be affected by any alignments specified in the aggregations field); a good duration is long enough so that a single outlier does not generate spurious alerts, but short enough that unhealthy states are detected and alerted on quickly. */
		duration: FormControl<string | null | undefined>,

		/** A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. */
		evaluationMissingData: FormControl<MonitoringQueryLanguageConditionEvaluationMissingData | null | undefined>,

		/** Monitoring Query Language (https://cloud.google.com/monitoring/mql) query that outputs a boolean stream. */
		query: FormControl<string | null | undefined>,
	}
	export function CreateMonitoringQueryLanguageConditionFormGroup() {
		return new FormGroup<MonitoringQueryLanguageConditionFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			evaluationMissingData: new FormControl<MonitoringQueryLanguageConditionEvaluationMissingData | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MonitoringQueryLanguageConditionEvaluationMissingData { EVALUATION_MISSING_DATA_UNSPECIFIED = 'EVALUATION_MISSING_DATA_UNSPECIFIED', EVALUATION_MISSING_DATA_INACTIVE = 'EVALUATION_MISSING_DATA_INACTIVE', EVALUATION_MISSING_DATA_ACTIVE = 'EVALUATION_MISSING_DATA_ACTIVE', EVALUATION_MISSING_DATA_NO_OP = 'EVALUATION_MISSING_DATA_NO_OP' }


	/** A condition type that allows alert policies to be defined using Prometheus Query Language (PromQL) (https://prometheus.io/docs/prometheus/latest/querying/basics/).The PrometheusQueryLanguageCondition message contains information from a Prometheus alerting rule and its associated rule group.A Prometheus alerting rule is described here (https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/). The semantics of a Prometheus alerting rule is described here (https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/#rule).A Prometheus rule group is described here (https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/). The semantics of a Prometheus rule group is described here (https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/#rule_group).Because Cloud Alerting has no representation of a Prometheus rule group resource, we must embed the information of the parent rule group inside each of the conditions that refer to it. We must also update the contents of all Prometheus alerts in case the information of their rule group changes.The PrometheusQueryLanguageCondition protocol buffer combines the information of the corresponding rule group and alerting rule. The structure of the PrometheusQueryLanguageCondition protocol buffer does NOT mimic the structure of the Prometheus rule group and alerting rule YAML declarations. The PrometheusQueryLanguageCondition protocol buffer may change in the future to support future rule group and/or alerting rule features. There are no new such features at the present time (2023-06-26). */
	export interface PrometheusQueryLanguageCondition {

		/** Optional. The alerting rule name of this alert in the corresponding Prometheus configuration file.Some external tools may require this field to be populated correctly in order to refer to the original Prometheus configuration file. The rule group name and the alert name are necessary to update the relevant AlertPolicies in case the definition of the rule group changes in the future.This field is optional. If this field is not empty, then it must be a valid Prometheus label name (https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels). This field may not exceed 2048 Unicode characters in length. */
		alertRule?: string | null;

		/** Optional. Alerts are considered firing once their PromQL expression was evaluated to be "true" for this long. Alerts whose PromQL expression was not evaluated to be "true" for long enough are considered pending. Must be a non-negative duration or missing. This field is optional. Its default value is zero. */
		duration?: string | null;

		/** Optional. How often this rule should be evaluated. Must be a positive multiple of 30 seconds or missing. This field is optional. Its default value is 30 seconds. If this PrometheusQueryLanguageCondition was generated from a Prometheus alerting rule, then this value should be taken from the enclosing rule group. */
		evaluationInterval?: string | null;

		/** Optional. Labels to add to or overwrite in the PromQL query result. Label names must be valid (https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels). Label values can be templatized by using variables (https://cloud.google.com/monitoring/alerts/doc-variables). The only available variable names are the names of the labels in the PromQL result, including "__name__" and "value". "labels" may be empty. */
		labels?: {[id: string]: string };

		/** Required. The PromQL expression to evaluate. Every evaluation cycle this expression is evaluated at the current time, and all resultant time series become pending/firing alerts. This field must not be empty. */
		query?: string | null;

		/** Optional. The rule group name of this alert in the corresponding Prometheus configuration file.Some external tools may require this field to be populated correctly in order to refer to the original Prometheus configuration file. The rule group name and the alert name are necessary to update the relevant AlertPolicies in case the definition of the rule group changes in the future.This field is optional. If this field is not empty, then it must contain a valid UTF-8 string. This field may not exceed 2048 Unicode characters in length. */
		ruleGroup?: string | null;
	}

	/** A condition type that allows alert policies to be defined using Prometheus Query Language (PromQL) (https://prometheus.io/docs/prometheus/latest/querying/basics/).The PrometheusQueryLanguageCondition message contains information from a Prometheus alerting rule and its associated rule group.A Prometheus alerting rule is described here (https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/). The semantics of a Prometheus alerting rule is described here (https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/#rule).A Prometheus rule group is described here (https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/). The semantics of a Prometheus rule group is described here (https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/#rule_group).Because Cloud Alerting has no representation of a Prometheus rule group resource, we must embed the information of the parent rule group inside each of the conditions that refer to it. We must also update the contents of all Prometheus alerts in case the information of their rule group changes.The PrometheusQueryLanguageCondition protocol buffer combines the information of the corresponding rule group and alerting rule. The structure of the PrometheusQueryLanguageCondition protocol buffer does NOT mimic the structure of the Prometheus rule group and alerting rule YAML declarations. The PrometheusQueryLanguageCondition protocol buffer may change in the future to support future rule group and/or alerting rule features. There are no new such features at the present time (2023-06-26). */
	export interface PrometheusQueryLanguageConditionFormProperties {

		/** Optional. The alerting rule name of this alert in the corresponding Prometheus configuration file.Some external tools may require this field to be populated correctly in order to refer to the original Prometheus configuration file. The rule group name and the alert name are necessary to update the relevant AlertPolicies in case the definition of the rule group changes in the future.This field is optional. If this field is not empty, then it must be a valid Prometheus label name (https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels). This field may not exceed 2048 Unicode characters in length. */
		alertRule: FormControl<string | null | undefined>,

		/** Optional. Alerts are considered firing once their PromQL expression was evaluated to be "true" for this long. Alerts whose PromQL expression was not evaluated to be "true" for long enough are considered pending. Must be a non-negative duration or missing. This field is optional. Its default value is zero. */
		duration: FormControl<string | null | undefined>,

		/** Optional. How often this rule should be evaluated. Must be a positive multiple of 30 seconds or missing. This field is optional. Its default value is 30 seconds. If this PrometheusQueryLanguageCondition was generated from a Prometheus alerting rule, then this value should be taken from the enclosing rule group. */
		evaluationInterval: FormControl<string | null | undefined>,

		/** Optional. Labels to add to or overwrite in the PromQL query result. Label names must be valid (https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels). Label values can be templatized by using variables (https://cloud.google.com/monitoring/alerts/doc-variables). The only available variable names are the names of the labels in the PromQL result, including "__name__" and "value". "labels" may be empty. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The PromQL expression to evaluate. Every evaluation cycle this expression is evaluated at the current time, and all resultant time series become pending/firing alerts. This field must not be empty. */
		query: FormControl<string | null | undefined>,

		/** Optional. The rule group name of this alert in the corresponding Prometheus configuration file.Some external tools may require this field to be populated correctly in order to refer to the original Prometheus configuration file. The rule group name and the alert name are necessary to update the relevant AlertPolicies in case the definition of the rule group changes in the future.This field is optional. If this field is not empty, then it must contain a valid UTF-8 string. This field may not exceed 2048 Unicode characters in length. */
		ruleGroup: FormControl<string | null | undefined>,
	}
	export function CreatePrometheusQueryLanguageConditionFormGroup() {
		return new FormGroup<PrometheusQueryLanguageConditionFormProperties>({
			alertRule: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			evaluationInterval: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			ruleGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A condition type that compares a collection of time series against a threshold. */
	export interface MetricThreshold {

		/** Specifies the alignment of data points in individual time series as well as how to combine the retrieved time series together (such as when aggregating multiple streams on each resource to a single stream for each resource or when aggregating streams across all members of a group of resources). Multiple aggregations are applied in the order specified.This field is similar to the one in the ListTimeSeries request (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list). It is advisable to use the ListTimeSeries method when debugging this field. */
		aggregations?: Array<Aggregation>;

		/** The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value). The comparison is applied on each time series, with the time series on the left-hand side and the threshold on the right-hand side.Only COMPARISON_LT and COMPARISON_GT are supported currently. */
		comparison?: MetricThresholdComparison | null;

		/** Specifies the alignment of data points in individual time series selected by denominatorFilter as well as how to combine the retrieved time series together (such as when aggregating multiple streams on each resource to a single stream for each resource or when aggregating streams across all members of a group of resources).When computing ratios, the aggregations and denominator_aggregations fields must use the same alignment period and produce time series that have the same periodicity and labels. */
		denominatorAggregations?: Array<Aggregation>;

		/** A filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies a time series that should be used as the denominator of a ratio that will be compared with the threshold. If a denominator_filter is specified, the time series specified by the filter field will be used as the numerator.The filter must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length. */
		denominatorFilter?: string | null;

		/** The amount of time that a time series must violate the threshold to be considered failing. Currently, only values that are a multiple of a minute--e.g., 0, 60, 120, or 300 seconds--are supported. If an invalid value is given, an error will be returned. When choosing a duration, it is useful to keep in mind the frequency of the underlying time series data (which may also be affected by any alignments specified in the aggregations field); a good duration is long enough so that a single outlier does not generate spurious alerts, but short enough that unhealthy states are detected and alerted on quickly. */
		duration?: string | null;

		/** A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. */
		evaluationMissingData?: MonitoringQueryLanguageConditionEvaluationMissingData | null;

		/** Required. A filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the ListTimeSeries request (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) (that call is useful to verify the time series that will be retrieved / processed). The filter must specify the metric type and the resource type. Optionally, it can specify resource labels and metric labels. This field must not exceed 2048 Unicode characters in length. */
		filter?: string | null;

		/** Options used when forecasting the time series and testing the predicted value against the threshold. */
		forecastOptions?: ForecastOptions;

		/** A value against which to compare the time series. */
		thresholdValue?: number | null;

		/** Specifies how many time series must fail a predicate to trigger a condition. If not specified, then a {count: 1} trigger is used. */
		trigger?: Trigger;
	}

	/** A condition type that compares a collection of time series against a threshold. */
	export interface MetricThresholdFormProperties {

		/** The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value). The comparison is applied on each time series, with the time series on the left-hand side and the threshold on the right-hand side.Only COMPARISON_LT and COMPARISON_GT are supported currently. */
		comparison: FormControl<MetricThresholdComparison | null | undefined>,

		/** A filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies a time series that should be used as the denominator of a ratio that will be compared with the threshold. If a denominator_filter is specified, the time series specified by the filter field will be used as the numerator.The filter must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length. */
		denominatorFilter: FormControl<string | null | undefined>,

		/** The amount of time that a time series must violate the threshold to be considered failing. Currently, only values that are a multiple of a minute--e.g., 0, 60, 120, or 300 seconds--are supported. If an invalid value is given, an error will be returned. When choosing a duration, it is useful to keep in mind the frequency of the underlying time series data (which may also be affected by any alignments specified in the aggregations field); a good duration is long enough so that a single outlier does not generate spurious alerts, but short enough that unhealthy states are detected and alerted on quickly. */
		duration: FormControl<string | null | undefined>,

		/** A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. */
		evaluationMissingData: FormControl<MonitoringQueryLanguageConditionEvaluationMissingData | null | undefined>,

		/** Required. A filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the ListTimeSeries request (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) (that call is useful to verify the time series that will be retrieved / processed). The filter must specify the metric type and the resource type. Optionally, it can specify resource labels and metric labels. This field must not exceed 2048 Unicode characters in length. */
		filter: FormControl<string | null | undefined>,

		/** A value against which to compare the time series. */
		thresholdValue: FormControl<number | null | undefined>,
	}
	export function CreateMetricThresholdFormGroup() {
		return new FormGroup<MetricThresholdFormProperties>({
			comparison: new FormControl<MetricThresholdComparison | null | undefined>(undefined),
			denominatorFilter: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			evaluationMissingData: new FormControl<MonitoringQueryLanguageConditionEvaluationMissingData | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			thresholdValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MetricThresholdComparison { COMPARISON_UNSPECIFIED = 'COMPARISON_UNSPECIFIED', COMPARISON_GT = 'COMPARISON_GT', COMPARISON_GE = 'COMPARISON_GE', COMPARISON_LT = 'COMPARISON_LT', COMPARISON_LE = 'COMPARISON_LE', COMPARISON_EQ = 'COMPARISON_EQ', COMPARISON_NE = 'COMPARISON_NE' }


	/** Options used when forecasting the time series and testing the predicted value against the threshold. */
	export interface ForecastOptions {

		/** Required. The length of time into the future to forecast whether a time series will violate the threshold. If the predicted value is found to violate the threshold, and the violation is observed in all forecasts made for the configured duration, then the time series is considered to be failing. The forecast horizon can range from 1 hour to 60 hours. */
		forecastHorizon?: string | null;
	}

	/** Options used when forecasting the time series and testing the predicted value against the threshold. */
	export interface ForecastOptionsFormProperties {

		/** Required. The length of time into the future to forecast whether a time series will violate the threshold. If the predicted value is found to violate the threshold, and the violation is observed in all forecasts made for the configured duration, then the time series is considered to be failing. The forecast horizon can range from 1 hour to 60 hours. */
		forecastHorizon: FormControl<string | null | undefined>,
	}
	export function CreateForecastOptionsFormGroup() {
		return new FormGroup<ForecastOptionsFormProperties>({
			forecastHorizon: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a change made to a configuration. */
	export interface MutationRecord {

		/** When the change occurred. */
		mutateTime?: string | null;

		/** The email address of the user making the change. */
		mutatedBy?: string | null;
	}

	/** Describes a change made to a configuration. */
	export interface MutationRecordFormProperties {

		/** When the change occurred. */
		mutateTime: FormControl<string | null | undefined>,

		/** The email address of the user making the change. */
		mutatedBy: FormControl<string | null | undefined>,
	}
	export function CreateMutationRecordFormGroup() {
		return new FormGroup<MutationRecordFormProperties>({
			mutateTime: new FormControl<string | null | undefined>(undefined),
			mutatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A content string and a MIME type that describes the content string's format. */
	export interface Documentation {

		/** The body of the documentation, interpreted according to mime_type. The content may not exceed 8,192 Unicode characters and may not exceed more than 10,240 bytes when encoded in UTF-8 format, whichever is smaller. This text can be templatized by using variables (https://cloud.google.com/monitoring/alerts/doc-variables). */
		content?: string | null;

		/** The format of the content field. Presently, only the value "text/markdown" is supported. See Markdown (https://en.wikipedia.org/wiki/Markdown) for more information. */
		mimeType?: string | null;

		/** Optional. The subject line of the notification. The subject line may not exceed 10,240 bytes. In notifications generated by this policy, the contents of the subject line after variable expansion will be truncated to 255 bytes or shorter at the latest UTF-8 character boundary. The 255-byte limit is recommended by this thread (https://stackoverflow.com/questions/1592291/what-is-the-email-subject-length-limit). It is both the limit imposed by some third-party ticketing products and it is common to define textual fields in databases as VARCHAR(255).The contents of the subject line can be templatized by using variables (https://cloud.google.com/monitoring/alerts/doc-variables). If this field is missing or empty, a default subject line will be generated. */
		subject?: string | null;
	}

	/** A content string and a MIME type that describes the content string's format. */
	export interface DocumentationFormProperties {

		/** The body of the documentation, interpreted according to mime_type. The content may not exceed 8,192 Unicode characters and may not exceed more than 10,240 bytes when encoded in UTF-8 format, whichever is smaller. This text can be templatized by using variables (https://cloud.google.com/monitoring/alerts/doc-variables). */
		content: FormControl<string | null | undefined>,

		/** The format of the content field. Presently, only the value "text/markdown" is supported. See Markdown (https://en.wikipedia.org/wiki/Markdown) for more information. */
		mimeType: FormControl<string | null | undefined>,

		/** Optional. The subject line of the notification. The subject line may not exceed 10,240 bytes. In notifications generated by this policy, the contents of the subject line after variable expansion will be truncated to 255 bytes or shorter at the latest UTF-8 character boundary. The 255-byte limit is recommended by this thread (https://stackoverflow.com/questions/1592291/what-is-the-email-subject-length-limit). It is both the limit imposed by some third-party ticketing products and it is common to define textual fields in databases as VARCHAR(255).The contents of the subject line can be templatized by using variables (https://cloud.google.com/monitoring/alerts/doc-variables). If this field is missing or empty, a default subject line will be generated. */
		subject: FormControl<string | null | undefined>,
	}
	export function CreateDocumentationFormGroup() {
		return new FormGroup<DocumentationFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AlertPolicySeverity { SEVERITY_UNSPECIFIED = 'SEVERITY_UNSPECIFIED', CRITICAL = 'CRITICAL', ERROR = 'ERROR', WARNING = 'WARNING' }


	/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** App Engine service. Learn more at https://cloud.google.com/appengine. */
	export interface AppEngine {

		/** The ID of the App Engine module underlying this service. Corresponds to the module_id resource label in the gae_app monitored resource (https://cloud.google.com/monitoring/api/resources#tag_gae_app). */
		moduleId?: string | null;
	}

	/** App Engine service. Learn more at https://cloud.google.com/appengine. */
	export interface AppEngineFormProperties {

		/** The ID of the App Engine module underlying this service. Corresponds to the module_id resource label in the gae_app monitored resource (https://cloud.google.com/monitoring/api/resources#tag_gae_app). */
		moduleId: FormControl<string | null | undefined>,
	}
	export function CreateAppEngineFormGroup() {
		return new FormGroup<AppEngineFormProperties>({
			moduleId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Future parameters for the availability SLI. */
	export interface AvailabilityCriteria {
	}

	/** Future parameters for the availability SLI. */
	export interface AvailabilityCriteriaFormProperties {
	}
	export function CreateAvailabilityCriteriaFormGroup() {
		return new FormGroup<AvailabilityCriteriaFormProperties>({
		});

	}


	/** The authentication parameters to provide to the specified resource or URL that requires a username and password. Currently, only Basic HTTP authentication (https://tools.ietf.org/html/rfc7617) is supported in Uptime checks. */
	export interface BasicAuthentication {

		/** The password to use when authenticating with the HTTP server. */
		password?: string | null;

		/** The username to use when authenticating with the HTTP server. */
		username?: string | null;
	}

	/** The authentication parameters to provide to the specified resource or URL that requires a username and password. Currently, only Basic HTTP authentication (https://tools.ietf.org/html/rfc7617) is supported in Uptime checks. */
	export interface BasicAuthenticationFormProperties {

		/** The password to use when authenticating with the HTTP server. */
		password: FormControl<string | null | undefined>,

		/** The username to use when authenticating with the HTTP server. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateBasicAuthenticationFormGroup() {
		return new FormGroup<BasicAuthenticationFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A well-known service type, defined by its service type and service labels. Documentation and examples here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli). */
	export interface BasicService {

		/** Labels that specify the resource that emits the monitoring data which is used for SLO reporting of this Service. Documentation and valid values for given service types here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli). */
		serviceLabels?: {[id: string]: string };

		/** The type of service that this basic service defines, e.g. APP_ENGINE service type. Documentation and valid values here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli). */
		serviceType?: string | null;
	}

	/** A well-known service type, defined by its service type and service labels. Documentation and examples here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli). */
	export interface BasicServiceFormProperties {

		/** Labels that specify the resource that emits the monitoring data which is used for SLO reporting of this Service. Documentation and valid values for given service types here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli). */
		serviceLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of service that this basic service defines, e.g. APP_ENGINE service type. Documentation and valid values here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli). */
		serviceType: FormControl<string | null | undefined>,
	}
	export function CreateBasicServiceFormGroup() {
		return new FormGroup<BasicServiceFormProperties>({
			serviceLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			serviceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An SLI measuring performance on a well-known service type. Performance will be computed on the basis of pre-defined metrics. The type of the service_resource determines the metrics to use and the service_resource.labels and metric_labels are used to construct a monitoring filter to filter that metric down to just the data relevant to this service. */
	export interface BasicSli {

		/** Future parameters for the availability SLI. */
		availability?: AvailabilityCriteria;

		/** Parameters for a latency threshold SLI. */
		latency?: LatencyCriteria;

		/** OPTIONAL: The set of locations to which this SLI is relevant. Telemetry from other locations will not be used to calculate performance for this SLI. If omitted, this SLI applies to all locations in which the Service has activity. For service types that don't support breaking down by location, setting this field will result in an error. */
		location?: Array<string>;

		/** OPTIONAL: The set of RPCs to which this SLI is relevant. Telemetry from other methods will not be used to calculate performance for this SLI. If omitted, this SLI applies to all the Service's methods. For service types that don't support breaking down by method, setting this field will result in an error. */
		method?: Array<string>;

		/** OPTIONAL: The set of API versions to which this SLI is relevant. Telemetry from other API versions will not be used to calculate performance for this SLI. If omitted, this SLI applies to all API versions. For service types that don't support breaking down by version, setting this field will result in an error. */
		version?: Array<string>;
	}

	/** An SLI measuring performance on a well-known service type. Performance will be computed on the basis of pre-defined metrics. The type of the service_resource determines the metrics to use and the service_resource.labels and metric_labels are used to construct a monitoring filter to filter that metric down to just the data relevant to this service. */
	export interface BasicSliFormProperties {
	}
	export function CreateBasicSliFormGroup() {
		return new FormGroup<BasicSliFormProperties>({
		});

	}


	/** Parameters for a latency threshold SLI. */
	export interface LatencyCriteria {

		/** Good service is defined to be the count of requests made to this service that return in no more than threshold. */
		threshold?: string | null;
	}

	/** Parameters for a latency threshold SLI. */
	export interface LatencyCriteriaFormProperties {

		/** Good service is defined to be the count of requests made to this service that return in no more than threshold. */
		threshold: FormControl<string | null | undefined>,
	}
	export function CreateLatencyCriteriaFormGroup() {
		return new FormGroup<LatencyCriteriaFormProperties>({
			threshold: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BucketOptions describes the bucket boundaries used to create a histogram for the distribution. The buckets can be in a linear sequence, an exponential sequence, or each bucket can be specified explicitly. BucketOptions does not include the number of values in each bucket.A bucket has an inclusive lower bound and exclusive upper bound for the values that are counted for that bucket. The upper bound of a bucket must be strictly greater than the lower bound. The sequence of N buckets for a distribution consists of an underflow bucket (number 0), zero or more finite buckets (number 1 through N - 2) and an overflow bucket (number N - 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the same as the upper bound of bucket i - 1. The buckets span the whole range of finite values: lower bound of the underflow bucket is -infinity and the upper bound of the overflow bucket is +infinity. The finite buckets are so-called because both bounds are finite. */
	export interface BucketOptions {

		/** Specifies a set of buckets with arbitrary widths.There are size(bounds) + 1 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): boundsi Lower bound (1 <= i < N); boundsi - 1The bounds field must contain at least one element. If bounds has only one element, then there are no finite buckets, and that single element is the common boundary of the overflow and underflow buckets. */
		explicitBuckets?: Explicit;

		/** Specifies an exponential sequence of buckets that have a width that is proportional to the value of the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): scale * (growth_factor ^ i).Lower bound (1 <= i < N): scale * (growth_factor ^ (i - 1)). */
		exponentialBuckets?: Exponential;

		/** Specifies a linear sequence of buckets that all have the same width (except overflow and underflow). Each bucket represents a constant absolute uncertainty on the specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): offset + (width * i).Lower bound (1 <= i < N): offset + (width * (i - 1)). */
		linearBuckets?: Linear;
	}

	/** BucketOptions describes the bucket boundaries used to create a histogram for the distribution. The buckets can be in a linear sequence, an exponential sequence, or each bucket can be specified explicitly. BucketOptions does not include the number of values in each bucket.A bucket has an inclusive lower bound and exclusive upper bound for the values that are counted for that bucket. The upper bound of a bucket must be strictly greater than the lower bound. The sequence of N buckets for a distribution consists of an underflow bucket (number 0), zero or more finite buckets (number 1 through N - 2) and an overflow bucket (number N - 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the same as the upper bound of bucket i - 1. The buckets span the whole range of finite values: lower bound of the underflow bucket is -infinity and the upper bound of the overflow bucket is +infinity. The finite buckets are so-called because both bounds are finite. */
	export interface BucketOptionsFormProperties {
	}
	export function CreateBucketOptionsFormGroup() {
		return new FormGroup<BucketOptionsFormProperties>({
		});

	}


	/** Specifies a set of buckets with arbitrary widths.There are size(bounds) + 1 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): boundsi Lower bound (1 <= i < N); boundsi - 1The bounds field must contain at least one element. If bounds has only one element, then there are no finite buckets, and that single element is the common boundary of the overflow and underflow buckets. */
	export interface Explicit {

		/** The values must be monotonically increasing. */
		bounds?: Array<number>;
	}

	/** Specifies a set of buckets with arbitrary widths.There are size(bounds) + 1 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): boundsi Lower bound (1 <= i < N); boundsi - 1The bounds field must contain at least one element. If bounds has only one element, then there are no finite buckets, and that single element is the common boundary of the overflow and underflow buckets. */
	export interface ExplicitFormProperties {
	}
	export function CreateExplicitFormGroup() {
		return new FormGroup<ExplicitFormProperties>({
		});

	}


	/** Specifies an exponential sequence of buckets that have a width that is proportional to the value of the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): scale * (growth_factor ^ i).Lower bound (1 <= i < N): scale * (growth_factor ^ (i - 1)). */
	export interface Exponential {

		/** Must be greater than 1. */
		growthFactor?: number | null;

		/** Must be greater than 0. */
		numFiniteBuckets?: number | null;

		/** Must be greater than 0. */
		scale?: number | null;
	}

	/** Specifies an exponential sequence of buckets that have a width that is proportional to the value of the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): scale * (growth_factor ^ i).Lower bound (1 <= i < N): scale * (growth_factor ^ (i - 1)). */
	export interface ExponentialFormProperties {

		/** Must be greater than 1. */
		growthFactor: FormControl<number | null | undefined>,

		/** Must be greater than 0. */
		numFiniteBuckets: FormControl<number | null | undefined>,

		/** Must be greater than 0. */
		scale: FormControl<number | null | undefined>,
	}
	export function CreateExponentialFormGroup() {
		return new FormGroup<ExponentialFormProperties>({
			growthFactor: new FormControl<number | null | undefined>(undefined),
			numFiniteBuckets: new FormControl<number | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies a linear sequence of buckets that all have the same width (except overflow and underflow). Each bucket represents a constant absolute uncertainty on the specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): offset + (width * i).Lower bound (1 <= i < N): offset + (width * (i - 1)). */
	export interface Linear {

		/** Must be greater than 0. */
		numFiniteBuckets?: number | null;

		/** Lower bound of the first bucket. */
		offset?: number | null;

		/** Must be greater than 0. */
		width?: number | null;
	}

	/** Specifies a linear sequence of buckets that all have the same width (except overflow and underflow). Each bucket represents a constant absolute uncertainty on the specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): offset + (width * i).Lower bound (1 <= i < N): offset + (width * (i - 1)). */
	export interface LinearFormProperties {

		/** Must be greater than 0. */
		numFiniteBuckets: FormControl<number | null | undefined>,

		/** Lower bound of the first bucket. */
		offset: FormControl<number | null | undefined>,

		/** Must be greater than 0. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateLinearFormGroup() {
		return new FormGroup<LinearFormProperties>({
			numFiniteBuckets: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Cloud Endpoints service. Learn more at https://cloud.google.com/endpoints. */
	export interface CloudEndpoints {

		/** The name of the Cloud Endpoints service underlying this service. Corresponds to the service resource label in the api monitored resource (https://cloud.google.com/monitoring/api/resources#tag_api). */
		service?: string | null;
	}

	/** Cloud Endpoints service. Learn more at https://cloud.google.com/endpoints. */
	export interface CloudEndpointsFormProperties {

		/** The name of the Cloud Endpoints service underlying this service. Corresponds to the service resource label in the api monitored resource (https://cloud.google.com/monitoring/api/resources#tag_api). */
		service: FormControl<string | null | undefined>,
	}
	export function CreateCloudEndpointsFormGroup() {
		return new FormGroup<CloudEndpointsFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Synthetic Monitor deployed to a Cloud Functions V2 instance. */
	export interface CloudFunctionV2Target {

		/** An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "project_id", "instance_id" and "zone": { "type": "gce_instance", "labels": { "project_id": "my-project", "instance_id": "12345678901234", "zone": "us-central1-a" }} */
		cloudRunRevision?: MonitoredResource;

		/** Required. Fully qualified GCFv2 resource name i.e. projects/{project}/locations/{location}/functions/{function} Required. */
		name?: string | null;
	}

	/** A Synthetic Monitor deployed to a Cloud Functions V2 instance. */
	export interface CloudFunctionV2TargetFormProperties {

		/** Required. Fully qualified GCFv2 resource name i.e. projects/{project}/locations/{location}/functions/{function} Required. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCloudFunctionV2TargetFormGroup() {
		return new FormGroup<CloudFunctionV2TargetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "project_id", "instance_id" and "zone": { "type": "gce_instance", "labels": { "project_id": "my-project", "instance_id": "12345678901234", "zone": "us-central1-a" }}  */
	export interface MonitoredResource {

		/** Required. Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels "project_id", "instance_id", and "zone". */
		labels?: {[id: string]: string };

		/** Required. The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor object. For example, the type of a Compute Engine VM instance is gce_instance. For a list of types, see Monitoring resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list). */
		type?: string | null;
	}

	/** An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "project_id", "instance_id" and "zone": { "type": "gce_instance", "labels": { "project_id": "my-project", "instance_id": "12345678901234", "zone": "us-central1-a" }}  */
	export interface MonitoredResourceFormProperties {

		/** Required. Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels "project_id", "instance_id", and "zone". */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor object. For example, the type of a Compute Engine VM instance is gce_instance. For a list of types, see Monitoring resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMonitoredResourceFormGroup() {
		return new FormGroup<MonitoredResourceFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cloud Run service. Learn more at https://cloud.google.com/run. */
	export interface CloudRun {

		/** The location the service is run. Corresponds to the location resource label in the cloud_run_revision monitored resource (https://cloud.google.com/monitoring/api/resources#tag_cloud_run_revision). */
		location?: string | null;

		/** The name of the Cloud Run service. Corresponds to the service_name resource label in the cloud_run_revision monitored resource (https://cloud.google.com/monitoring/api/resources#tag_cloud_run_revision). */
		serviceName?: string | null;
	}

	/** Cloud Run service. Learn more at https://cloud.google.com/run. */
	export interface CloudRunFormProperties {

		/** The location the service is run. Corresponds to the location resource label in the cloud_run_revision monitored resource (https://cloud.google.com/monitoring/api/resources#tag_cloud_run_revision). */
		location: FormControl<string | null | undefined>,

		/** The name of the Cloud Run service. Corresponds to the service_name resource label in the cloud_run_revision monitored resource (https://cloud.google.com/monitoring/api/resources#tag_cloud_run_revision). */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateCloudRunFormGroup() {
		return new FormGroup<CloudRunFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Istio service scoped to a single Kubernetes cluster. Learn more at https://istio.io. Clusters running OSS Istio will have their services ingested as this type. */
	export interface ClusterIstio {

		/** The name of the Kubernetes cluster in which this Istio service is defined. Corresponds to the cluster_name resource label in k8s_cluster resources. */
		clusterName?: string | null;

		/** The location of the Kubernetes cluster in which this Istio service is defined. Corresponds to the location resource label in k8s_cluster resources. */
		location?: string | null;

		/** The name of the Istio service underlying this service. Corresponds to the destination_service_name metric label in Istio metrics. */
		serviceName?: string | null;

		/** The namespace of the Istio service underlying this service. Corresponds to the destination_service_namespace metric label in Istio metrics. */
		serviceNamespace?: string | null;
	}

	/** Istio service scoped to a single Kubernetes cluster. Learn more at https://istio.io. Clusters running OSS Istio will have their services ingested as this type. */
	export interface ClusterIstioFormProperties {

		/** The name of the Kubernetes cluster in which this Istio service is defined. Corresponds to the cluster_name resource label in k8s_cluster resources. */
		clusterName: FormControl<string | null | undefined>,

		/** The location of the Kubernetes cluster in which this Istio service is defined. Corresponds to the location resource label in k8s_cluster resources. */
		location: FormControl<string | null | undefined>,

		/** The name of the Istio service underlying this service. Corresponds to the destination_service_name metric label in Istio metrics. */
		serviceName: FormControl<string | null | undefined>,

		/** The namespace of the Istio service underlying this service. Corresponds to the destination_service_namespace metric label in Istio metrics. */
		serviceNamespace: FormControl<string | null | undefined>,
	}
	export function CreateClusterIstioFormGroup() {
		return new FormGroup<ClusterIstioFormProperties>({
			clusterName: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			serviceNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of data points sent from a collectd-based plugin. See the collectd documentation for more information. */
	export interface CollectdPayload {

		/** The end time of the interval. */
		endTime?: string | null;

		/** The measurement metadata. Example: "process_id" -> 12345 */
		metadata?: {[id: string]: TypedValue };

		/** The name of the plugin. Example: "disk". */
		plugin?: string | null;

		/** The instance name of the plugin Example: "hdcl". */
		pluginInstance?: string | null;

		/** The start time of the interval. */
		startTime?: string | null;

		/** The measurement type. Example: "memory". */
		type?: string | null;

		/** The measurement type instance. Example: "used". */
		typeInstance?: string | null;

		/** The measured values during this time interval. Each value must have a different data_source_name. */
		values?: Array<CollectdValue>;
	}

	/** A collection of data points sent from a collectd-based plugin. See the collectd documentation for more information. */
	export interface CollectdPayloadFormProperties {

		/** The end time of the interval. */
		endTime: FormControl<string | null | undefined>,

		/** The measurement metadata. Example: "process_id" -> 12345 */
		metadata: FormControl<{[id: string]: TypedValue } | null | undefined>,

		/** The name of the plugin. Example: "disk". */
		plugin: FormControl<string | null | undefined>,

		/** The instance name of the plugin Example: "hdcl". */
		pluginInstance: FormControl<string | null | undefined>,

		/** The start time of the interval. */
		startTime: FormControl<string | null | undefined>,

		/** The measurement type. Example: "memory". */
		type: FormControl<string | null | undefined>,

		/** The measurement type instance. Example: "used". */
		typeInstance: FormControl<string | null | undefined>,
	}
	export function CreateCollectdPayloadFormGroup() {
		return new FormGroup<CollectdPayloadFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: TypedValue } | null | undefined>(undefined),
			plugin: new FormControl<string | null | undefined>(undefined),
			pluginInstance: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			typeInstance: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single strongly-typed value. */
	export interface TypedValue {

		/** A Boolean value: true or false. */
		boolValue?: boolean | null;

		/** Distribution contains summary statistics for a population of values. It optionally contains a histogram representing the distribution of those values across a set of buckets.The summary statistics are the count, mean, sum of the squared deviation from the mean, the minimum, and the maximum of the set of population of values. The histogram is based on a sequence of buckets and gives a count of values that fall into each bucket. The boundaries of the buckets are given either explicitly or by formulas for buckets of fixed or exponentially increasing widths.Although it is not forbidden, it is generally a bad idea to include non-finite values (infinities or NaNs) in the population of values, as this will render the mean and sum_of_squared_deviation fields meaningless. */
		distributionValue?: Distribution;

		/** A 64-bit double-precision floating-point number. Its magnitude is approximately ±10±300 and it has 16 significant digits of precision. */
		doubleValue?: number | null;

		/** A 64-bit integer. Its range is approximately ±9.2x1018. */
		int64Value?: string | null;

		/** A variable-length string value. */
		stringValue?: string | null;
	}

	/** A single strongly-typed value. */
	export interface TypedValueFormProperties {

		/** A Boolean value: true or false. */
		boolValue: FormControl<boolean | null | undefined>,

		/** A 64-bit double-precision floating-point number. Its magnitude is approximately ±10±300 and it has 16 significant digits of precision. */
		doubleValue: FormControl<number | null | undefined>,

		/** A 64-bit integer. Its range is approximately ±9.2x1018. */
		int64Value: FormControl<string | null | undefined>,

		/** A variable-length string value. */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateTypedValueFormGroup() {
		return new FormGroup<TypedValueFormProperties>({
			boolValue: new FormControl<boolean | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			int64Value: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Distribution contains summary statistics for a population of values. It optionally contains a histogram representing the distribution of those values across a set of buckets.The summary statistics are the count, mean, sum of the squared deviation from the mean, the minimum, and the maximum of the set of population of values. The histogram is based on a sequence of buckets and gives a count of values that fall into each bucket. The boundaries of the buckets are given either explicitly or by formulas for buckets of fixed or exponentially increasing widths.Although it is not forbidden, it is generally a bad idea to include non-finite values (infinities or NaNs) in the population of values, as this will render the mean and sum_of_squared_deviation fields meaningless. */
	export interface Distribution {

		/** Required in the Cloud Monitoring API v3. The values for each bucket specified in bucket_options. The sum of the values in bucketCounts must equal the value in the count field of the Distribution object. The order of the bucket counts follows the numbering schemes described for the three bucket types. The underflow bucket has number 0; the finite buckets, if any, have numbers 1 through N-2; and the overflow bucket has number N-1. The size of bucket_counts must not be greater than N. If the size is less than N, then the remaining buckets are assigned values of zero. */
		bucketCounts?: Array<string>;

		/** BucketOptions describes the bucket boundaries used to create a histogram for the distribution. The buckets can be in a linear sequence, an exponential sequence, or each bucket can be specified explicitly. BucketOptions does not include the number of values in each bucket.A bucket has an inclusive lower bound and exclusive upper bound for the values that are counted for that bucket. The upper bound of a bucket must be strictly greater than the lower bound. The sequence of N buckets for a distribution consists of an underflow bucket (number 0), zero or more finite buckets (number 1 through N - 2) and an overflow bucket (number N - 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the same as the upper bound of bucket i - 1. The buckets span the whole range of finite values: lower bound of the underflow bucket is -infinity and the upper bound of the overflow bucket is +infinity. The finite buckets are so-called because both bounds are finite. */
		bucketOptions?: BucketOptions;

		/** The number of values in the population. Must be non-negative. This value must equal the sum of the values in bucket_counts if a histogram is provided. */
		count?: string | null;

		/** Must be in increasing order of value field. */
		exemplars?: Array<Exemplar>;

		/** The arithmetic mean of the values in the population. If count is zero then this field must be zero. */
		mean?: number | null;

		/** The range of the population values. */
		range?: Range;

		/** The sum of squared deviations from the mean of the values in the population. For values x_i this is: Sum[i=1..n]((x_i - mean)^2) Knuth, "The Art of Computer Programming", Vol. 2, page 232, 3rd edition describes Welford's method for accumulating this sum in one pass.If count is zero then this field must be zero. */
		sumOfSquaredDeviation?: number | null;
	}

	/** Distribution contains summary statistics for a population of values. It optionally contains a histogram representing the distribution of those values across a set of buckets.The summary statistics are the count, mean, sum of the squared deviation from the mean, the minimum, and the maximum of the set of population of values. The histogram is based on a sequence of buckets and gives a count of values that fall into each bucket. The boundaries of the buckets are given either explicitly or by formulas for buckets of fixed or exponentially increasing widths.Although it is not forbidden, it is generally a bad idea to include non-finite values (infinities or NaNs) in the population of values, as this will render the mean and sum_of_squared_deviation fields meaningless. */
	export interface DistributionFormProperties {

		/** The number of values in the population. Must be non-negative. This value must equal the sum of the values in bucket_counts if a histogram is provided. */
		count: FormControl<string | null | undefined>,

		/** The arithmetic mean of the values in the population. If count is zero then this field must be zero. */
		mean: FormControl<number | null | undefined>,

		/** The sum of squared deviations from the mean of the values in the population. For values x_i this is: Sum[i=1..n]((x_i - mean)^2) Knuth, "The Art of Computer Programming", Vol. 2, page 232, 3rd edition describes Welford's method for accumulating this sum in one pass.If count is zero then this field must be zero. */
		sumOfSquaredDeviation: FormControl<number | null | undefined>,
	}
	export function CreateDistributionFormGroup() {
		return new FormGroup<DistributionFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			mean: new FormControl<number | null | undefined>(undefined),
			sumOfSquaredDeviation: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Exemplars are example points that may be used to annotate aggregated distribution values. They are metadata that gives information about a particular value added to a Distribution bucket, such as a trace ID that was active when a value was added. They may contain further information, such as a example values and timestamps, origin, etc. */
	export interface Exemplar {

		/** Contextual information about the example value. Examples are:Trace: type.googleapis.com/google.monitoring.v3.SpanContextLiteral string: type.googleapis.com/google.protobuf.StringValueLabels dropped during aggregation: type.googleapis.com/google.monitoring.v3.DroppedLabelsThere may be only a single attachment of any given message type in a single exemplar, and this is enforced by the system. */
		attachments?: Array<string>;

		/** The observation (sampling) time of the above value. */
		timestamp?: string | null;

		/** Value of the exemplar point. This value determines to which bucket the exemplar belongs. */
		value?: number | null;
	}

	/** Exemplars are example points that may be used to annotate aggregated distribution values. They are metadata that gives information about a particular value added to a Distribution bucket, such as a trace ID that was active when a value was added. They may contain further information, such as a example values and timestamps, origin, etc. */
	export interface ExemplarFormProperties {

		/** The observation (sampling) time of the above value. */
		timestamp: FormControl<string | null | undefined>,

		/** Value of the exemplar point. This value determines to which bucket the exemplar belongs. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateExemplarFormGroup() {
		return new FormGroup<ExemplarFormProperties>({
			timestamp: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The range of the population values. */
	export interface Range {

		/** The maximum of the population values. */
		max?: number | null;

		/** The minimum of the population values. */
		min?: number | null;
	}

	/** The range of the population values. */
	export interface RangeFormProperties {

		/** The maximum of the population values. */
		max: FormControl<number | null | undefined>,

		/** The minimum of the population values. */
		min: FormControl<number | null | undefined>,
	}
	export function CreateRangeFormGroup() {
		return new FormGroup<RangeFormProperties>({
			max: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A single data point from a collectd-based plugin. */
	export interface CollectdValue {

		/** The data source for the collectd value. For example, there are two data sources for network measurements: "rx" and "tx". */
		dataSourceName?: string | null;

		/** The type of measurement. */
		dataSourceType?: CollectdValueDataSourceType | null;

		/** A single strongly-typed value. */
		value?: TypedValue;
	}

	/** A single data point from a collectd-based plugin. */
	export interface CollectdValueFormProperties {

		/** The data source for the collectd value. For example, there are two data sources for network measurements: "rx" and "tx". */
		dataSourceName: FormControl<string | null | undefined>,

		/** The type of measurement. */
		dataSourceType: FormControl<CollectdValueDataSourceType | null | undefined>,
	}
	export function CreateCollectdValueFormGroup() {
		return new FormGroup<CollectdValueFormProperties>({
			dataSourceName: new FormControl<string | null | undefined>(undefined),
			dataSourceType: new FormControl<CollectdValueDataSourceType | null | undefined>(undefined),
		});

	}

	export enum CollectdValueDataSourceType { UNSPECIFIED_DATA_SOURCE_TYPE = 'UNSPECIFIED_DATA_SOURCE_TYPE', GAUGE = 'GAUGE', COUNTER = 'COUNTER', DERIVE = 'DERIVE', ABSOLUTE = 'ABSOLUTE' }


	/** Describes the error status for payloads that were not written. */
	export interface CollectdPayloadError {

		/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** The zero-based index in CreateCollectdTimeSeriesRequest.collectd_payloads. */
		index?: number | null;

		/** Records the error status for values that were not written due to an error.Failed payloads for which nothing is written will not include partial value errors. */
		valueErrors?: Array<CollectdValueError>;
	}

	/** Describes the error status for payloads that were not written. */
	export interface CollectdPayloadErrorFormProperties {

		/** The zero-based index in CreateCollectdTimeSeriesRequest.collectd_payloads. */
		index: FormControl<number | null | undefined>,
	}
	export function CreateCollectdPayloadErrorFormGroup() {
		return new FormGroup<CollectdPayloadErrorFormProperties>({
			index: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the error status for values that were not written. */
	export interface CollectdValueError {

		/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** The zero-based index in CollectdPayload.values within the parent CreateCollectdTimeSeriesRequest.collectd_payloads. */
		index?: number | null;
	}

	/** Describes the error status for values that were not written. */
	export interface CollectdValueErrorFormProperties {

		/** The zero-based index in CollectdPayload.values within the parent CreateCollectdTimeSeriesRequest.collectd_payloads. */
		index: FormControl<number | null | undefined>,
	}
	export function CreateCollectdValueErrorFormGroup() {
		return new FormGroup<CollectdValueErrorFormProperties>({
			index: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Optional. Used to perform content matching. This allows matching based on substrings and regular expressions, together with their negations. Only the first 4 MB of an HTTP or HTTPS check's response (and the first 1 MB of a TCP check's response) are examined for purposes of content matching. */
	export interface ContentMatcher {

		/** String, regex or JSON content to match. Maximum 1024 bytes. An empty content string indicates no content matching is to be performed. */
		content?: string | null;

		/** Information needed to perform a JSONPath content match. Used for ContentMatcherOption::MATCHES_JSON_PATH and ContentMatcherOption::NOT_MATCHES_JSON_PATH. */
		jsonPathMatcher?: JsonPathMatcher;

		/** The type of content matcher that will be applied to the server output, compared to the content string when the check is run. */
		matcher?: ContentMatcherMatcher | null;
	}

	/** Optional. Used to perform content matching. This allows matching based on substrings and regular expressions, together with their negations. Only the first 4 MB of an HTTP or HTTPS check's response (and the first 1 MB of a TCP check's response) are examined for purposes of content matching. */
	export interface ContentMatcherFormProperties {

		/** String, regex or JSON content to match. Maximum 1024 bytes. An empty content string indicates no content matching is to be performed. */
		content: FormControl<string | null | undefined>,

		/** The type of content matcher that will be applied to the server output, compared to the content string when the check is run. */
		matcher: FormControl<ContentMatcherMatcher | null | undefined>,
	}
	export function CreateContentMatcherFormGroup() {
		return new FormGroup<ContentMatcherFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			matcher: new FormControl<ContentMatcherMatcher | null | undefined>(undefined),
		});

	}


	/** Information needed to perform a JSONPath content match. Used for ContentMatcherOption::MATCHES_JSON_PATH and ContentMatcherOption::NOT_MATCHES_JSON_PATH. */
	export interface JsonPathMatcher {

		/** The type of JSONPath match that will be applied to the JSON output (ContentMatcher.content) */
		jsonMatcher?: JsonPathMatcherJsonMatcher | null;

		/** JSONPath within the response output pointing to the expected ContentMatcher::content to match against. */
		jsonPath?: string | null;
	}

	/** Information needed to perform a JSONPath content match. Used for ContentMatcherOption::MATCHES_JSON_PATH and ContentMatcherOption::NOT_MATCHES_JSON_PATH. */
	export interface JsonPathMatcherFormProperties {

		/** The type of JSONPath match that will be applied to the JSON output (ContentMatcher.content) */
		jsonMatcher: FormControl<JsonPathMatcherJsonMatcher | null | undefined>,

		/** JSONPath within the response output pointing to the expected ContentMatcher::content to match against. */
		jsonPath: FormControl<string | null | undefined>,
	}
	export function CreateJsonPathMatcherFormGroup() {
		return new FormGroup<JsonPathMatcherFormProperties>({
			jsonMatcher: new FormControl<JsonPathMatcherJsonMatcher | null | undefined>(undefined),
			jsonPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JsonPathMatcherJsonMatcher { JSON_PATH_MATCHER_OPTION_UNSPECIFIED = 'JSON_PATH_MATCHER_OPTION_UNSPECIFIED', EXACT_MATCH = 'EXACT_MATCH', REGEX_MATCH = 'REGEX_MATCH' }

	export enum ContentMatcherMatcher { CONTENT_MATCHER_OPTION_UNSPECIFIED = 'CONTENT_MATCHER_OPTION_UNSPECIFIED', CONTAINS_STRING = 'CONTAINS_STRING', NOT_CONTAINS_STRING = 'NOT_CONTAINS_STRING', MATCHES_REGEX = 'MATCHES_REGEX', NOT_MATCHES_REGEX = 'NOT_MATCHES_REGEX', MATCHES_JSON_PATH = 'MATCHES_JSON_PATH', NOT_MATCHES_JSON_PATH = 'NOT_MATCHES_JSON_PATH' }


	/** The CreateCollectdTimeSeries request. */
	export interface CreateCollectdTimeSeriesRequest {

		/** The collectd payloads representing the time series data. You must not include more than a single point for each time series, so no two payloads can have the same values for all of the fields plugin, plugin_instance, type, and type_instance. */
		collectdPayloads?: Array<CollectdPayload>;

		/** The version of collectd that collected the data. Example: "5.3.0-192.el6". */
		collectdVersion?: string | null;

		/** An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "project_id", "instance_id" and "zone": { "type": "gce_instance", "labels": { "project_id": "my-project", "instance_id": "12345678901234", "zone": "us-central1-a" }} */
		resource?: MonitoredResource;
	}

	/** The CreateCollectdTimeSeries request. */
	export interface CreateCollectdTimeSeriesRequestFormProperties {

		/** The version of collectd that collected the data. Example: "5.3.0-192.el6". */
		collectdVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateCollectdTimeSeriesRequestFormGroup() {
		return new FormGroup<CreateCollectdTimeSeriesRequestFormProperties>({
			collectdVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The CreateCollectdTimeSeries response. */
	export interface CreateCollectdTimeSeriesResponse {

		/** Records the error status for points that were not written due to an error in the request.Failed requests for which nothing is written will return an error response instead. Requests where data points were rejected by the backend will set summary instead. */
		payloadErrors?: Array<CollectdPayloadError>;

		/** Summary of the result of a failed request to write data to a time series. */
		summary?: CreateTimeSeriesSummary;
	}

	/** The CreateCollectdTimeSeries response. */
	export interface CreateCollectdTimeSeriesResponseFormProperties {
	}
	export function CreateCreateCollectdTimeSeriesResponseFormGroup() {
		return new FormGroup<CreateCollectdTimeSeriesResponseFormProperties>({
		});

	}


	/** Summary of the result of a failed request to write data to a time series. */
	export interface CreateTimeSeriesSummary {

		/** The number of points that failed to be written. Order is not guaranteed. */
		errors?: Array<Error>;

		/** The number of points that were successfully written. */
		successPointCount?: number | null;

		/** The number of points in the request. */
		totalPointCount?: number | null;
	}

	/** Summary of the result of a failed request to write data to a time series. */
	export interface CreateTimeSeriesSummaryFormProperties {

		/** The number of points that were successfully written. */
		successPointCount: FormControl<number | null | undefined>,

		/** The number of points in the request. */
		totalPointCount: FormControl<number | null | undefined>,
	}
	export function CreateCreateTimeSeriesSummaryFormGroup() {
		return new FormGroup<CreateTimeSeriesSummaryFormProperties>({
			successPointCount: new FormControl<number | null | undefined>(undefined),
			totalPointCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Detailed information about an error category. */
	export interface Error {

		/** The number of points that couldn't be written because of status. */
		pointCount?: number | null;

		/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
		status?: Status;
	}

	/** Detailed information about an error category. */
	export interface ErrorFormProperties {

		/** The number of points that couldn't be written because of status. */
		pointCount: FormControl<number | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			pointCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The CreateTimeSeries request. */
	export interface CreateTimeSeriesRequest {

		/** Required. The new data to be added to a list of time series. Adds at most one data point to each of several time series. The new data point must be more recent than any other point in its time series. Each TimeSeries value must fully specify a unique time series by supplying all label values for the metric and the monitored resource.The maximum number of TimeSeries objects per Create request is 200. */
		timeSeries?: Array<TimeSeries>;
	}

	/** The CreateTimeSeries request. */
	export interface CreateTimeSeriesRequestFormProperties {
	}
	export function CreateCreateTimeSeriesRequestFormGroup() {
		return new FormGroup<CreateTimeSeriesRequestFormProperties>({
		});

	}


	/** A collection of data points that describes the time-varying values of a metric. A time series is identified by a combination of a fully-specified monitored resource and a fully-specified metric. This type is used for both listing and creating time series. */
	export interface TimeSeries {

		/** Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message. */
		metadata?: MonitoredResourceMetadata;

		/** A specific metric, identified by specifying values for all of the labels of a MetricDescriptor. */
		metric?: Metric;

		/** The metric kind of the time series. When listing time series, this metric kind might be different from the metric kind of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the metric kind of the associated metric. If the associated metric's descriptor must be auto-created, then this field specifies the metric kind of the new descriptor and must be either GAUGE (the default) or CUMULATIVE. */
		metricKind?: TimeSeriesMetricKind | null;

		/** The data points of this time series. When listing time series, points are returned in reverse time order.When creating a time series, this field must contain exactly one point and the point's type must be the same as the value type of the associated metric. If the associated metric's descriptor must be auto-created, then the value type of the descriptor is determined by the point's type, which must be BOOL, INT64, DOUBLE, or DISTRIBUTION. */
		points?: Array<Point>;

		/** An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "project_id", "instance_id" and "zone": { "type": "gce_instance", "labels": { "project_id": "my-project", "instance_id": "12345678901234", "zone": "us-central1-a" }} */
		resource?: MonitoredResource;

		/** The units in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of the stored metric values. */
		unit?: string | null;

		/** The value type of the time series. When listing time series, this value type might be different from the value type of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the type of the data in the points field. */
		valueType?: TimeSeriesValueType | null;
	}

	/** A collection of data points that describes the time-varying values of a metric. A time series is identified by a combination of a fully-specified monitored resource and a fully-specified metric. This type is used for both listing and creating time series. */
	export interface TimeSeriesFormProperties {

		/** The metric kind of the time series. When listing time series, this metric kind might be different from the metric kind of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the metric kind of the associated metric. If the associated metric's descriptor must be auto-created, then this field specifies the metric kind of the new descriptor and must be either GAUGE (the default) or CUMULATIVE. */
		metricKind: FormControl<TimeSeriesMetricKind | null | undefined>,

		/** The units in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of the stored metric values. */
		unit: FormControl<string | null | undefined>,

		/** The value type of the time series. When listing time series, this value type might be different from the value type of the associated metric if this time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as the type of the data in the points field. */
		valueType: FormControl<TimeSeriesValueType | null | undefined>,
	}
	export function CreateTimeSeriesFormGroup() {
		return new FormGroup<TimeSeriesFormProperties>({
			metricKind: new FormControl<TimeSeriesMetricKind | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			valueType: new FormControl<TimeSeriesValueType | null | undefined>(undefined),
		});

	}


	/** Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message. */
	export interface MonitoredResourceMetadata {

		/** Output only. Values for predefined system metadata labels. System labels are a kind of metadata extracted by Google, including "machine_image", "vpc", "subnet_id", "security_group", "name", etc. System label values can be only strings, Boolean values, or a list of strings. For example: { "name": "my-test-instance", "security_group": ["a", "b", "c"], "spot_instance": false } */
		systemLabels?: {[id: string]: any };

		/** Output only. A map of user-defined metadata labels. */
		userLabels?: {[id: string]: string };
	}

	/** Auxiliary metadata for a MonitoredResource object. MonitoredResource objects contain the minimum set of information to uniquely identify a monitored resource instance. There is some other useful auxiliary metadata. Monitoring and Logging use an ingestion pipeline to extract metadata for cloud resources of all types, and store the metadata in this message. */
	export interface MonitoredResourceMetadataFormProperties {

		/** Output only. Values for predefined system metadata labels. System labels are a kind of metadata extracted by Google, including "machine_image", "vpc", "subnet_id", "security_group", "name", etc. System label values can be only strings, Boolean values, or a list of strings. For example: { "name": "my-test-instance", "security_group": ["a", "b", "c"], "spot_instance": false } */
		systemLabels: FormControl<{[id: string]: any } | null | undefined>,

		/** Output only. A map of user-defined metadata labels. */
		userLabels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateMonitoredResourceMetadataFormGroup() {
		return new FormGroup<MonitoredResourceMetadataFormProperties>({
			systemLabels: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			userLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A specific metric, identified by specifying values for all of the labels of a MetricDescriptor. */
	export interface Metric {

		/** The set of label values that uniquely identify this metric. All labels listed in the MetricDescriptor must be assigned values. */
		labels?: {[id: string]: string };

		/** An existing metric type, see google.api.MetricDescriptor. For example, custom.googleapis.com/invoice/paid/amount. */
		type?: string | null;
	}

	/** A specific metric, identified by specifying values for all of the labels of a MetricDescriptor. */
	export interface MetricFormProperties {

		/** The set of label values that uniquely identify this metric. All labels listed in the MetricDescriptor must be assigned values. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** An existing metric type, see google.api.MetricDescriptor. For example, custom.googleapis.com/invoice/paid/amount. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TimeSeriesMetricKind { METRIC_KIND_UNSPECIFIED = 'METRIC_KIND_UNSPECIFIED', GAUGE = 'GAUGE', DELTA = 'DELTA', CUMULATIVE = 'CUMULATIVE' }


	/** A single data point in a time series. */
	export interface Point {

		/** Describes a time interval: Reads: A half-open time interval. It includes the end time but excludes the start time: (startTime, endTime]. The start time must be specified, must be earlier than the end time, and should be no older than the data retention period for the metric. Writes: A closed time interval. It extends from the start time to the end time, and includes both: [startTime, endTime]. Valid time intervals depend on the MetricKind (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors#MetricKind) of the metric value. The end time must not be earlier than the start time, and the end time must not be more than 25 hours in the past or more than five minutes in the future. For GAUGE metrics, the startTime value is technically optional; if no value is specified, the start time defaults to the value of the end time, and the interval represents a single point in time. If both start and end times are specified, they must be identical. Such an interval is valid only for GAUGE metrics, which are point-in-time measurements. The end time of a new interval must be at least a millisecond after the end time of the previous interval. For DELTA metrics, the start time and end time must specify a non-zero interval, with subsequent points specifying contiguous and non-overlapping intervals. For DELTA metrics, the start time of the next interval must be at least a millisecond after the end time of the previous interval. For CUMULATIVE metrics, the start time and end time must specify a non-zero interval, with subsequent points specifying the same start time and increasing end times, until an event resets the cumulative value to zero and sets a new start time for the following points. The new start time must be at least a millisecond after the end time of the previous interval. The start time of a new interval must be at least a millisecond after the end time of the previous interval because intervals are closed. If the start time of a new interval is the same as the end time of the previous interval, then data written at the new start time could overwrite data written at the previous end time. */
		interval?: TimeInterval;

		/** A single strongly-typed value. */
		value?: TypedValue;
	}

	/** A single data point in a time series. */
	export interface PointFormProperties {
	}
	export function CreatePointFormGroup() {
		return new FormGroup<PointFormProperties>({
		});

	}


	/** Describes a time interval: Reads: A half-open time interval. It includes the end time but excludes the start time: (startTime, endTime]. The start time must be specified, must be earlier than the end time, and should be no older than the data retention period for the metric. Writes: A closed time interval. It extends from the start time to the end time, and includes both: [startTime, endTime]. Valid time intervals depend on the MetricKind (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors#MetricKind) of the metric value. The end time must not be earlier than the start time, and the end time must not be more than 25 hours in the past or more than five minutes in the future. For GAUGE metrics, the startTime value is technically optional; if no value is specified, the start time defaults to the value of the end time, and the interval represents a single point in time. If both start and end times are specified, they must be identical. Such an interval is valid only for GAUGE metrics, which are point-in-time measurements. The end time of a new interval must be at least a millisecond after the end time of the previous interval. For DELTA metrics, the start time and end time must specify a non-zero interval, with subsequent points specifying contiguous and non-overlapping intervals. For DELTA metrics, the start time of the next interval must be at least a millisecond after the end time of the previous interval. For CUMULATIVE metrics, the start time and end time must specify a non-zero interval, with subsequent points specifying the same start time and increasing end times, until an event resets the cumulative value to zero and sets a new start time for the following points. The new start time must be at least a millisecond after the end time of the previous interval. The start time of a new interval must be at least a millisecond after the end time of the previous interval because intervals are closed. If the start time of a new interval is the same as the end time of the previous interval, then data written at the new start time could overwrite data written at the previous end time. */
	export interface TimeInterval {

		/** Required. The end of the time interval. */
		endTime?: string | null;

		/** Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time. */
		startTime?: string | null;
	}

	/** Describes a time interval: Reads: A half-open time interval. It includes the end time but excludes the start time: (startTime, endTime]. The start time must be specified, must be earlier than the end time, and should be no older than the data retention period for the metric. Writes: A closed time interval. It extends from the start time to the end time, and includes both: [startTime, endTime]. Valid time intervals depend on the MetricKind (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors#MetricKind) of the metric value. The end time must not be earlier than the start time, and the end time must not be more than 25 hours in the past or more than five minutes in the future. For GAUGE metrics, the startTime value is technically optional; if no value is specified, the start time defaults to the value of the end time, and the interval represents a single point in time. If both start and end times are specified, they must be identical. Such an interval is valid only for GAUGE metrics, which are point-in-time measurements. The end time of a new interval must be at least a millisecond after the end time of the previous interval. For DELTA metrics, the start time and end time must specify a non-zero interval, with subsequent points specifying contiguous and non-overlapping intervals. For DELTA metrics, the start time of the next interval must be at least a millisecond after the end time of the previous interval. For CUMULATIVE metrics, the start time and end time must specify a non-zero interval, with subsequent points specifying the same start time and increasing end times, until an event resets the cumulative value to zero and sets a new start time for the following points. The new start time must be at least a millisecond after the end time of the previous interval. The start time of a new interval must be at least a millisecond after the end time of the previous interval because intervals are closed. If the start time of a new interval is the same as the end time of the previous interval, then data written at the new start time could overwrite data written at the previous end time. */
	export interface TimeIntervalFormProperties {

		/** Required. The end of the time interval. */
		endTime: FormControl<string | null | undefined>,

		/** Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateTimeIntervalFormGroup() {
		return new FormGroup<TimeIntervalFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TimeSeriesValueType { VALUE_TYPE_UNSPECIFIED = 'VALUE_TYPE_UNSPECIFIED', BOOL = 'BOOL', INT64 = 'INT64', DOUBLE = 'DOUBLE', STRING = 'STRING', DISTRIBUTION = 'DISTRIBUTION', MONEY = 'MONEY' }


	/** Criteria specific to the AlertPolicys that this Snooze applies to. The Snooze will suppress alerts that come from one of the AlertPolicys whose names are supplied. */
	export interface Criteria {

		/** The specific AlertPolicy names for the alert that should be snoozed. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[POLICY_ID] There is a limit of 16 policies per snooze. This limit is checked during snooze creation. */
		policies?: Array<string>;
	}

	/** Criteria specific to the AlertPolicys that this Snooze applies to. The Snooze will suppress alerts that come from one of the AlertPolicys whose names are supplied. */
	export interface CriteriaFormProperties {
	}
	export function CreateCriteriaFormGroup() {
		return new FormGroup<CriteriaFormProperties>({
		});

	}


	/** Use a custom service to designate a service that you want to monitor when none of the other service types (like App Engine, Cloud Run, or a GKE type) matches your intended service. */
	export interface Custom {
	}

	/** Use a custom service to designate a service that you want to monitor when none of the other service types (like App Engine, Cloud Run, or a GKE type) matches your intended service. */
	export interface CustomFormProperties {
	}
	export function CreateCustomFormGroup() {
		return new FormGroup<CustomFormProperties>({
		});

	}


	/** A DistributionCut defines a TimeSeries and thresholds used for measuring good service and total service. The TimeSeries must have ValueType = DISTRIBUTION and MetricKind = DELTA or MetricKind = CUMULATIVE. The computed good_service will be the estimated count of values in the Distribution that fall within the specified min and max. */
	export interface DistributionCut {

		/** A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries aggregating values. Must have ValueType = DISTRIBUTION and MetricKind = DELTA or MetricKind = CUMULATIVE. */
		distributionFilter?: string | null;

		/** Range of numerical values within min and max. */
		range?: GoogleMonitoringV3Range;
	}

	/** A DistributionCut defines a TimeSeries and thresholds used for measuring good service and total service. The TimeSeries must have ValueType = DISTRIBUTION and MetricKind = DELTA or MetricKind = CUMULATIVE. The computed good_service will be the estimated count of values in the Distribution that fall within the specified min and max. */
	export interface DistributionCutFormProperties {

		/** A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries aggregating values. Must have ValueType = DISTRIBUTION and MetricKind = DELTA or MetricKind = CUMULATIVE. */
		distributionFilter: FormControl<string | null | undefined>,
	}
	export function CreateDistributionCutFormGroup() {
		return new FormGroup<DistributionCutFormProperties>({
			distributionFilter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Range of numerical values within min and max. */
	export interface GoogleMonitoringV3Range {

		/** Range maximum. */
		max?: number | null;

		/** Range minimum. */
		min?: number | null;
	}

	/** Range of numerical values within min and max. */
	export interface GoogleMonitoringV3RangeFormProperties {

		/** Range maximum. */
		max: FormControl<number | null | undefined>,

		/** Range minimum. */
		min: FormControl<number | null | undefined>,
	}
	export function CreateGoogleMonitoringV3RangeFormGroup() {
		return new FormGroup<GoogleMonitoringV3RangeFormProperties>({
			max: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A set of (label, value) pairs that were removed from a Distribution time series during aggregation and then added as an attachment to a Distribution.Exemplar.The full label set for the exemplars is constructed by using the dropped pairs in combination with the label values that remain on the aggregated Distribution time series. The constructed full label set can be used to identify the specific entity, such as the instance or job, which might be contributing to a long-tail. However, with dropped labels, the storage requirements are reduced because only the aggregated distribution values for a large group of time series are stored.Note that there are no guarantees on ordering of the labels from exemplar-to-exemplar and from distribution-to-distribution in the same stream, and there may be duplicates. It is up to clients to resolve any ambiguities. */
	export interface DroppedLabels {

		/** Map from label to its value, for all labels dropped in any aggregation. */
		label?: {[id: string]: string };
	}

	/** A set of (label, value) pairs that were removed from a Distribution time series during aggregation and then added as an attachment to a Distribution.Exemplar.The full label set for the exemplars is constructed by using the dropped pairs in combination with the label values that remain on the aggregated Distribution time series. The constructed full label set can be used to identify the specific entity, such as the instance or job, which might be contributing to a long-tail. However, with dropped labels, the storage requirements are reduced because only the aggregated distribution values for a large group of time series are stored.Note that there are no guarantees on ordering of the labels from exemplar-to-exemplar and from distribution-to-distribution in the same stream, and there may be duplicates. It is up to clients to resolve any ambiguities. */
	export interface DroppedLabelsFormProperties {

		/** Map from label to its value, for all labels dropped in any aggregation. */
		label: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDroppedLabelsFormGroup() {
		return new FormGroup<DroppedLabelsFormProperties>({
			label: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }  */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }  */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** A single field of a message type. */
	export interface Field {

		/** The field cardinality. */
		cardinality?: FieldCardinality | null;

		/** The string value of the default value of this field. Proto2 syntax only. */
		defaultValue?: string | null;

		/** The field JSON name. */
		jsonName?: string | null;

		/** The field type. */
		kind?: FieldKind | null;

		/** The field name. */
		name?: string | null;

		/** The field number. */
		number?: number | null;

		/** The index of the field type in Type.oneofs, for message or enumeration types. The first type has index 1; zero means the type is not in the list. */
		oneofIndex?: number | null;

		/** The protocol buffer options. */
		options?: Array<Option>;

		/** Whether to use alternative packed wire representation. */
		packed?: boolean | null;

		/** The field type URL, without the scheme, for message or enumeration types. Example: "type.googleapis.com/google.protobuf.Timestamp". */
		typeUrl?: string | null;
	}

	/** A single field of a message type. */
	export interface FieldFormProperties {

		/** The field cardinality. */
		cardinality: FormControl<FieldCardinality | null | undefined>,

		/** The string value of the default value of this field. Proto2 syntax only. */
		defaultValue: FormControl<string | null | undefined>,

		/** The field JSON name. */
		jsonName: FormControl<string | null | undefined>,

		/** The field type. */
		kind: FormControl<FieldKind | null | undefined>,

		/** The field name. */
		name: FormControl<string | null | undefined>,

		/** The field number. */
		number: FormControl<number | null | undefined>,

		/** The index of the field type in Type.oneofs, for message or enumeration types. The first type has index 1; zero means the type is not in the list. */
		oneofIndex: FormControl<number | null | undefined>,

		/** Whether to use alternative packed wire representation. */
		packed: FormControl<boolean | null | undefined>,

		/** The field type URL, without the scheme, for message or enumeration types. Example: "type.googleapis.com/google.protobuf.Timestamp". */
		typeUrl: FormControl<string | null | undefined>,
	}
	export function CreateFieldFormGroup() {
		return new FormGroup<FieldFormProperties>({
			cardinality: new FormControl<FieldCardinality | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
			jsonName: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<FieldKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			oneofIndex: new FormControl<number | null | undefined>(undefined),
			packed: new FormControl<boolean | null | undefined>(undefined),
			typeUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FieldCardinality { CARDINALITY_UNKNOWN = 'CARDINALITY_UNKNOWN', CARDINALITY_OPTIONAL = 'CARDINALITY_OPTIONAL', CARDINALITY_REQUIRED = 'CARDINALITY_REQUIRED', CARDINALITY_REPEATED = 'CARDINALITY_REPEATED' }

	export enum FieldKind { TYPE_UNKNOWN = 'TYPE_UNKNOWN', TYPE_DOUBLE = 'TYPE_DOUBLE', TYPE_FLOAT = 'TYPE_FLOAT', TYPE_INT64 = 'TYPE_INT64', TYPE_UINT64 = 'TYPE_UINT64', TYPE_INT32 = 'TYPE_INT32', TYPE_FIXED64 = 'TYPE_FIXED64', TYPE_FIXED32 = 'TYPE_FIXED32', TYPE_BOOL = 'TYPE_BOOL', TYPE_STRING = 'TYPE_STRING', TYPE_GROUP = 'TYPE_GROUP', TYPE_MESSAGE = 'TYPE_MESSAGE', TYPE_BYTES = 'TYPE_BYTES', TYPE_UINT32 = 'TYPE_UINT32', TYPE_ENUM = 'TYPE_ENUM', TYPE_SFIXED32 = 'TYPE_SFIXED32', TYPE_SFIXED64 = 'TYPE_SFIXED64', TYPE_SINT32 = 'TYPE_SINT32', TYPE_SINT64 = 'TYPE_SINT64' }


	/** A protocol buffer option, which can be attached to a message, field, enumeration, etc. */
	export interface Option {

		/** The option's name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, "map_entry". For custom options, it should be the fully-qualified name. For example, "google.api.http". */
		name?: string | null;

		/** The option's value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type. */
		value?: {[id: string]: any };
	}

	/** A protocol buffer option, which can be attached to a message, field, enumeration, etc. */
	export interface OptionFormProperties {

		/** The option's name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, "map_entry". For custom options, it should be the fully-qualified name. For example, "google.api.http". */
		name: FormControl<string | null | undefined>,

		/** The option's value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type. */
		value: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOptionFormGroup() {
		return new FormGroup<OptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The GetNotificationChannelVerificationCode request. */
	export interface GetNotificationChannelVerificationCodeRequest {

		/** The desired expiration time. If specified, the API will guarantee that the returned code will not be valid after the specified timestamp; however, the API cannot guarantee that the returned code will be valid for at least as long as the requested time (the API puts an upper bound on the amount of time for which a code may be valid). If omitted, a default expiration will be used, which may be less than the max permissible expiration (so specifying an expiration may extend the code's lifetime over omitting an expiration, even though the API does impose an upper limit on the maximum expiration that is permitted). */
		expireTime?: string | null;
	}

	/** The GetNotificationChannelVerificationCode request. */
	export interface GetNotificationChannelVerificationCodeRequestFormProperties {

		/** The desired expiration time. If specified, the API will guarantee that the returned code will not be valid after the specified timestamp; however, the API cannot guarantee that the returned code will be valid for at least as long as the requested time (the API puts an upper bound on the amount of time for which a code may be valid). If omitted, a default expiration will be used, which may be less than the max permissible expiration (so specifying an expiration may extend the code's lifetime over omitting an expiration, even though the API does impose an upper limit on the maximum expiration that is permitted). */
		expireTime: FormControl<string | null | undefined>,
	}
	export function CreateGetNotificationChannelVerificationCodeRequestFormGroup() {
		return new FormGroup<GetNotificationChannelVerificationCodeRequestFormProperties>({
			expireTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The GetNotificationChannelVerificationCode request. */
	export interface GetNotificationChannelVerificationCodeResponse {

		/** The verification code, which may be used to verify other channels that have an equivalent identity (i.e. other channels of the same type with the same fingerprint such as other email channels with the same email address or other sms channels with the same number). */
		code?: string | null;

		/** The expiration time associated with the code that was returned. If an expiration was provided in the request, this is the minimum of the requested expiration in the request and the max permitted expiration. */
		expireTime?: string | null;
	}

	/** The GetNotificationChannelVerificationCode request. */
	export interface GetNotificationChannelVerificationCodeResponseFormProperties {

		/** The verification code, which may be used to verify other channels that have an equivalent identity (i.e. other channels of the same type with the same fingerprint such as other email channels with the same email address or other sms channels with the same number). */
		code: FormControl<string | null | undefined>,

		/** The expiration time associated with the code that was returned. If an expiration was provided in the request, this is the minimum of the requested expiration in the request and the max permitted expiration. */
		expireTime: FormControl<string | null | undefined>,
	}
	export function CreateGetNotificationChannelVerificationCodeResponseFormGroup() {
		return new FormGroup<GetNotificationChannelVerificationCodeResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** GKE Namespace. The field names correspond to the resource metadata labels on monitored resources that fall under a namespace (for example, k8s_container or k8s_pod). */
	export interface GkeNamespace {

		/** The name of the parent cluster. */
		clusterName?: string | null;

		/** The location of the parent cluster. This may be a zone or region. */
		location?: string | null;

		/** The name of this namespace. */
		namespaceName?: string | null;

		/** Output only. The project this resource lives in. For legacy services migrated from the Custom type, this may be a distinct project from the one parenting the service itself. */
		projectId?: string | null;
	}

	/** GKE Namespace. The field names correspond to the resource metadata labels on monitored resources that fall under a namespace (for example, k8s_container or k8s_pod). */
	export interface GkeNamespaceFormProperties {

		/** The name of the parent cluster. */
		clusterName: FormControl<string | null | undefined>,

		/** The location of the parent cluster. This may be a zone or region. */
		location: FormControl<string | null | undefined>,

		/** The name of this namespace. */
		namespaceName: FormControl<string | null | undefined>,

		/** Output only. The project this resource lives in. For legacy services migrated from the Custom type, this may be a distinct project from the one parenting the service itself. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateGkeNamespaceFormGroup() {
		return new FormGroup<GkeNamespaceFormProperties>({
			clusterName: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** GKE Service. The "service" here represents a Kubernetes service object (https://kubernetes.io/docs/concepts/services-networking/service). The field names correspond to the resource labels on k8s_service monitored resources (https://cloud.google.com/monitoring/api/resources#tag_k8s_service). */
	export interface GkeService {

		/** The name of the parent cluster. */
		clusterName?: string | null;

		/** The location of the parent cluster. This may be a zone or region. */
		location?: string | null;

		/** The name of the parent namespace. */
		namespaceName?: string | null;

		/** Output only. The project this resource lives in. For legacy services migrated from the Custom type, this may be a distinct project from the one parenting the service itself. */
		projectId?: string | null;

		/** The name of this service. */
		serviceName?: string | null;
	}

	/** GKE Service. The "service" here represents a Kubernetes service object (https://kubernetes.io/docs/concepts/services-networking/service). The field names correspond to the resource labels on k8s_service monitored resources (https://cloud.google.com/monitoring/api/resources#tag_k8s_service). */
	export interface GkeServiceFormProperties {

		/** The name of the parent cluster. */
		clusterName: FormControl<string | null | undefined>,

		/** The location of the parent cluster. This may be a zone or region. */
		location: FormControl<string | null | undefined>,

		/** The name of the parent namespace. */
		namespaceName: FormControl<string | null | undefined>,

		/** Output only. The project this resource lives in. For legacy services migrated from the Custom type, this may be a distinct project from the one parenting the service itself. */
		projectId: FormControl<string | null | undefined>,

		/** The name of this service. */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateGkeServiceFormGroup() {
		return new FormGroup<GkeServiceFormProperties>({
			clusterName: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod). */
	export interface GkeWorkload {

		/** The name of the parent cluster. */
		clusterName?: string | null;

		/** The location of the parent cluster. This may be a zone or region. */
		location?: string | null;

		/** The name of the parent namespace. */
		namespaceName?: string | null;

		/** Output only. The project this resource lives in. For legacy services migrated from the Custom type, this may be a distinct project from the one parenting the service itself. */
		projectId?: string | null;

		/** The name of this workload. */
		topLevelControllerName?: string | null;

		/** The type of this workload (for example, "Deployment" or "DaemonSet") */
		topLevelControllerType?: string | null;
	}

	/** A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod). */
	export interface GkeWorkloadFormProperties {

		/** The name of the parent cluster. */
		clusterName: FormControl<string | null | undefined>,

		/** The location of the parent cluster. This may be a zone or region. */
		location: FormControl<string | null | undefined>,

		/** The name of the parent namespace. */
		namespaceName: FormControl<string | null | undefined>,

		/** Output only. The project this resource lives in. For legacy services migrated from the Custom type, this may be a distinct project from the one parenting the service itself. */
		projectId: FormControl<string | null | undefined>,

		/** The name of this workload. */
		topLevelControllerName: FormControl<string | null | undefined>,

		/** The type of this workload (for example, "Deployment" or "DaemonSet") */
		topLevelControllerType: FormControl<string | null | undefined>,
	}
	export function CreateGkeWorkloadFormGroup() {
		return new FormGroup<GkeWorkloadFormProperties>({
			clusterName: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			namespaceName: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			topLevelControllerName: new FormControl<string | null | undefined>(undefined),
			topLevelControllerType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The description of a dynamic collection of monitored resources. Each group has a filter that is matched against monitored resources and their associated metadata. If a group's filter matches an available monitored resource, then that resource is a member of that group. Groups can contain any number of monitored resources, and each monitored resource can be a member of any number of groups.Groups can be nested in parent-child hierarchies. The parentName field identifies an optional parent for each group. If a group has a parent, then the only monitored resources available to be matched by the group's filter are the resources contained in the parent group. In other words, a group contains the monitored resources that match its filter and the filters of all the group's ancestors. A group without a parent can contain any monitored resource.For example, consider an infrastructure running a set of instances with two user-defined tags: "environment" and "role". A parent group has a filter, environment="production". A child of that parent group has a filter, role="transcoder". The parent group contains all instances in the production environment, regardless of their roles. The child group contains instances that have the transcoder role and are in the production environment.The monitored resources contained in a group can change at any moment, depending on what resources exist and what filters are associated with the group and its ancestors. */
	export interface Group {

		/** A user-assigned name for this group, used only for display purposes. */
		displayName?: string | null;

		/** The filter used to determine which monitored resources belong to this group. */
		filter?: string | null;

		/** If true, the members of this group are considered to be a cluster. The system can perform additional analysis on groups that are clusters. */
		isCluster?: boolean | null;

		/** Output only. The name of this group. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] When creating a group, this field is ignored and a new name is created consisting of the project specified in the call to CreateGroup and a unique [GROUP_ID] that is generated automatically. */
		name?: string | null;

		/** The name of the group's parent, if it has one. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] For groups with no parent, parent_name is the empty string, "". */
		parentName?: string | null;
	}

	/** The description of a dynamic collection of monitored resources. Each group has a filter that is matched against monitored resources and their associated metadata. If a group's filter matches an available monitored resource, then that resource is a member of that group. Groups can contain any number of monitored resources, and each monitored resource can be a member of any number of groups.Groups can be nested in parent-child hierarchies. The parentName field identifies an optional parent for each group. If a group has a parent, then the only monitored resources available to be matched by the group's filter are the resources contained in the parent group. In other words, a group contains the monitored resources that match its filter and the filters of all the group's ancestors. A group without a parent can contain any monitored resource.For example, consider an infrastructure running a set of instances with two user-defined tags: "environment" and "role". A parent group has a filter, environment="production". A child of that parent group has a filter, role="transcoder". The parent group contains all instances in the production environment, regardless of their roles. The child group contains instances that have the transcoder role and are in the production environment.The monitored resources contained in a group can change at any moment, depending on what resources exist and what filters are associated with the group and its ancestors. */
	export interface GroupFormProperties {

		/** A user-assigned name for this group, used only for display purposes. */
		displayName: FormControl<string | null | undefined>,

		/** The filter used to determine which monitored resources belong to this group. */
		filter: FormControl<string | null | undefined>,

		/** If true, the members of this group are considered to be a cluster. The system can perform additional analysis on groups that are clusters. */
		isCluster: FormControl<boolean | null | undefined>,

		/** Output only. The name of this group. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] When creating a group, this field is ignored and a new name is created consisting of the project specified in the call to CreateGroup and a unique [GROUP_ID] that is generated automatically. */
		name: FormControl<string | null | undefined>,

		/** The name of the group's parent, if it has one. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] For groups with no parent, parent_name is the empty string, "". */
		parentName: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			isCluster: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information involved in an HTTP/HTTPS Uptime check request. */
	export interface HttpCheck {

		/** If present, the check will only pass if the HTTP response status code is in this set of status codes. If empty, the HTTP status code will only pass if the HTTP status code is 200-299. */
		acceptedResponseStatusCodes?: Array<ResponseStatusCode>;

		/** The authentication parameters to provide to the specified resource or URL that requires a username and password. Currently, only Basic HTTP authentication (https://tools.ietf.org/html/rfc7617) is supported in Uptime checks. */
		authInfo?: BasicAuthentication;

		/** The request body associated with the HTTP POST request. If content_type is URL_ENCODED, the body passed in must be URL-encoded. Users can provide a Content-Length header via the headers field or the API will do so. If the request_method is GET and body is not empty, the API will return an error. The maximum byte size is 1 megabyte.Note: If client libraries aren't used (which performs the conversion automatically) base64 encode your body data since the field is of bytes type. */
		body?: string | null;

		/** The content type header to use for the check. The following configurations result in errors: 1. Content type is specified in both the headers field and the content_type field. 2. Request method is GET and content_type is not TYPE_UNSPECIFIED 3. Request method is POST and content_type is TYPE_UNSPECIFIED. 4. Request method is POST and a "Content-Type" header is provided via headers field. The content_type field should be used instead. */
		contentType?: HttpCheckContentType | null;

		/** A user provided content type header to use for the check. The invalid configurations outlined in the content_type field apply to custom_content_type, as well as the following: 1. content_type is URL_ENCODED and custom_content_type is set. 2. content_type is USER_PROVIDED and custom_content_type is not set. */
		customContentType?: string | null;

		/** The list of headers to send as part of the Uptime check request. If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described at https://www.w3.org/Protocols/rfc2616/rfc2616.txt (page 31). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second. The maximum number of headers allowed is 100. */
		headers?: {[id: string]: string };

		/** Boolean specifying whether to encrypt the header information. Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if mask_headers is set to true then the headers will be obscured with ******. */
		maskHeaders?: boolean | null;

		/** Optional (defaults to "/"). The path to the page against which to run the check. Will be combined with the host (specified within the monitored_resource) and port to construct the full URL. If the provided path does not begin with "/", a "/" will be prepended automatically. */
		path?: string | null;

		/** Information involved in sending ICMP pings alongside public HTTP/TCP checks. For HTTP, the pings are performed for each part of the redirect chain. */
		pingConfig?: PingConfig;

		/** Optional (defaults to 80 when use_ssl is false, and 443 when use_ssl is true). The TCP port on the HTTP server against which to run the check. Will be combined with host (specified within the monitored_resource) and path to construct the full URL. */
		port?: number | null;

		/** The HTTP request method to use for the check. If set to METHOD_UNSPECIFIED then request_method defaults to GET. */
		requestMethod?: HttpCheckRequestMethod | null;

		/** If true, use HTTPS instead of HTTP to run the check. */
		useSsl?: boolean | null;

		/** Boolean specifying whether to include SSL certificate validation as a part of the Uptime check. Only applies to checks where monitored_resource is set to uptime_url. If use_ssl is false, setting validate_ssl to true has no effect. */
		validateSsl?: boolean | null;
	}

	/** Information involved in an HTTP/HTTPS Uptime check request. */
	export interface HttpCheckFormProperties {

		/** The request body associated with the HTTP POST request. If content_type is URL_ENCODED, the body passed in must be URL-encoded. Users can provide a Content-Length header via the headers field or the API will do so. If the request_method is GET and body is not empty, the API will return an error. The maximum byte size is 1 megabyte.Note: If client libraries aren't used (which performs the conversion automatically) base64 encode your body data since the field is of bytes type. */
		body: FormControl<string | null | undefined>,

		/** The content type header to use for the check. The following configurations result in errors: 1. Content type is specified in both the headers field and the content_type field. 2. Request method is GET and content_type is not TYPE_UNSPECIFIED 3. Request method is POST and content_type is TYPE_UNSPECIFIED. 4. Request method is POST and a "Content-Type" header is provided via headers field. The content_type field should be used instead. */
		contentType: FormControl<HttpCheckContentType | null | undefined>,

		/** A user provided content type header to use for the check. The invalid configurations outlined in the content_type field apply to custom_content_type, as well as the following: 1. content_type is URL_ENCODED and custom_content_type is set. 2. content_type is USER_PROVIDED and custom_content_type is not set. */
		customContentType: FormControl<string | null | undefined>,

		/** The list of headers to send as part of the Uptime check request. If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described at https://www.w3.org/Protocols/rfc2616/rfc2616.txt (page 31). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second. The maximum number of headers allowed is 100. */
		headers: FormControl<{[id: string]: string } | null | undefined>,

		/** Boolean specifying whether to encrypt the header information. Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if mask_headers is set to true then the headers will be obscured with ******. */
		maskHeaders: FormControl<boolean | null | undefined>,

		/** Optional (defaults to "/"). The path to the page against which to run the check. Will be combined with the host (specified within the monitored_resource) and port to construct the full URL. If the provided path does not begin with "/", a "/" will be prepended automatically. */
		path: FormControl<string | null | undefined>,

		/** Optional (defaults to 80 when use_ssl is false, and 443 when use_ssl is true). The TCP port on the HTTP server against which to run the check. Will be combined with host (specified within the monitored_resource) and path to construct the full URL. */
		port: FormControl<number | null | undefined>,

		/** The HTTP request method to use for the check. If set to METHOD_UNSPECIFIED then request_method defaults to GET. */
		requestMethod: FormControl<HttpCheckRequestMethod | null | undefined>,

		/** If true, use HTTPS instead of HTTP to run the check. */
		useSsl: FormControl<boolean | null | undefined>,

		/** Boolean specifying whether to include SSL certificate validation as a part of the Uptime check. Only applies to checks where monitored_resource is set to uptime_url. If use_ssl is false, setting validate_ssl to true has no effect. */
		validateSsl: FormControl<boolean | null | undefined>,
	}
	export function CreateHttpCheckFormGroup() {
		return new FormGroup<HttpCheckFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<HttpCheckContentType | null | undefined>(undefined),
			customContentType: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			maskHeaders: new FormControl<boolean | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			requestMethod: new FormControl<HttpCheckRequestMethod | null | undefined>(undefined),
			useSsl: new FormControl<boolean | null | undefined>(undefined),
			validateSsl: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A status to accept. Either a status code class like "2xx", or an integer status code like "200". */
	export interface ResponseStatusCode {

		/** A class of status codes to accept. */
		statusClass?: ResponseStatusCodeStatusClass | null;

		/** A status code to accept. */
		statusValue?: number | null;
	}

	/** A status to accept. Either a status code class like "2xx", or an integer status code like "200". */
	export interface ResponseStatusCodeFormProperties {

		/** A class of status codes to accept. */
		statusClass: FormControl<ResponseStatusCodeStatusClass | null | undefined>,

		/** A status code to accept. */
		statusValue: FormControl<number | null | undefined>,
	}
	export function CreateResponseStatusCodeFormGroup() {
		return new FormGroup<ResponseStatusCodeFormProperties>({
			statusClass: new FormControl<ResponseStatusCodeStatusClass | null | undefined>(undefined),
			statusValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ResponseStatusCodeStatusClass { STATUS_CLASS_UNSPECIFIED = 'STATUS_CLASS_UNSPECIFIED', STATUS_CLASS_1XX = 'STATUS_CLASS_1XX', STATUS_CLASS_2XX = 'STATUS_CLASS_2XX', STATUS_CLASS_3XX = 'STATUS_CLASS_3XX', STATUS_CLASS_4XX = 'STATUS_CLASS_4XX', STATUS_CLASS_5XX = 'STATUS_CLASS_5XX', STATUS_CLASS_ANY = 'STATUS_CLASS_ANY' }

	export enum HttpCheckContentType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', URL_ENCODED = 'URL_ENCODED', USER_PROVIDED = 'USER_PROVIDED' }


	/** Information involved in sending ICMP pings alongside public HTTP/TCP checks. For HTTP, the pings are performed for each part of the redirect chain. */
	export interface PingConfig {

		/** Number of ICMP pings. A maximum of 3 ICMP pings is currently supported. */
		pingsCount?: number | null;
	}

	/** Information involved in sending ICMP pings alongside public HTTP/TCP checks. For HTTP, the pings are performed for each part of the redirect chain. */
	export interface PingConfigFormProperties {

		/** Number of ICMP pings. A maximum of 3 ICMP pings is currently supported. */
		pingsCount: FormControl<number | null | undefined>,
	}
	export function CreatePingConfigFormGroup() {
		return new FormGroup<PingConfigFormProperties>({
			pingsCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum HttpCheckRequestMethod { METHOD_UNSPECIFIED = 'METHOD_UNSPECIFIED', GET = 'GET', POST = 'POST' }


	/** An internal checker allows Uptime checks to run on private/internal GCP resources. */
	export interface InternalChecker {

		/** The checker's human-readable name. The display name should be unique within a Cloud Monitoring Metrics Scope in order to make it easier to identify; however, uniqueness is not enforced. */
		displayName?: string | null;

		/** The GCP zone the Uptime check should egress from. Only respected for internal Uptime checks, where internal_network is specified. */
		gcpZone?: string | null;

		/** A unique resource name for this InternalChecker. The format is: projects/[PROJECT_ID_OR_NUMBER]/internalCheckers/[INTERNAL_CHECKER_ID] [PROJECT_ID_OR_NUMBER] is the Cloud Monitoring Metrics Scope project for the Uptime check config associated with the internal checker. */
		name?: string | null;

		/** The GCP VPC network (https://cloud.google.com/vpc/docs/vpc) where the internal resource lives (ex: "default"). */
		network?: string | null;

		/** The GCP project ID where the internal checker lives. Not necessary the same as the Metrics Scope project. */
		peerProjectId?: string | null;

		/** The current operational state of the internal checker. */
		state?: InternalCheckerState | null;
	}

	/** An internal checker allows Uptime checks to run on private/internal GCP resources. */
	export interface InternalCheckerFormProperties {

		/** The checker's human-readable name. The display name should be unique within a Cloud Monitoring Metrics Scope in order to make it easier to identify; however, uniqueness is not enforced. */
		displayName: FormControl<string | null | undefined>,

		/** The GCP zone the Uptime check should egress from. Only respected for internal Uptime checks, where internal_network is specified. */
		gcpZone: FormControl<string | null | undefined>,

		/** A unique resource name for this InternalChecker. The format is: projects/[PROJECT_ID_OR_NUMBER]/internalCheckers/[INTERNAL_CHECKER_ID] [PROJECT_ID_OR_NUMBER] is the Cloud Monitoring Metrics Scope project for the Uptime check config associated with the internal checker. */
		name: FormControl<string | null | undefined>,

		/** The GCP VPC network (https://cloud.google.com/vpc/docs/vpc) where the internal resource lives (ex: "default"). */
		network: FormControl<string | null | undefined>,

		/** The GCP project ID where the internal checker lives. Not necessary the same as the Metrics Scope project. */
		peerProjectId: FormControl<string | null | undefined>,

		/** The current operational state of the internal checker. */
		state: FormControl<InternalCheckerState | null | undefined>,
	}
	export function CreateInternalCheckerFormGroup() {
		return new FormGroup<InternalCheckerFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			gcpZone: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			peerProjectId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<InternalCheckerState | null | undefined>(undefined),
		});

	}

	export enum InternalCheckerState { UNSPECIFIED = 'UNSPECIFIED', CREATING = 'CREATING', RUNNING = 'RUNNING' }


	/** Canonical service scoped to an Istio mesh. Anthos clusters running ASM >= 1.6.8 will have their services ingested as this type. */
	export interface IstioCanonicalService {

		/** The name of the canonical service underlying this service. Corresponds to the destination_canonical_service_name metric label in label in Istio metrics (https://cloud.google.com/monitoring/api/metrics_istio). */
		canonicalService?: string | null;

		/** The namespace of the canonical service underlying this service. Corresponds to the destination_canonical_service_namespace metric label in Istio metrics (https://cloud.google.com/monitoring/api/metrics_istio). */
		canonicalServiceNamespace?: string | null;

		/** Identifier for the Istio mesh in which this canonical service is defined. Corresponds to the mesh_uid metric label in Istio metrics (https://cloud.google.com/monitoring/api/metrics_istio). */
		meshUid?: string | null;
	}

	/** Canonical service scoped to an Istio mesh. Anthos clusters running ASM >= 1.6.8 will have their services ingested as this type. */
	export interface IstioCanonicalServiceFormProperties {

		/** The name of the canonical service underlying this service. Corresponds to the destination_canonical_service_name metric label in label in Istio metrics (https://cloud.google.com/monitoring/api/metrics_istio). */
		canonicalService: FormControl<string | null | undefined>,

		/** The namespace of the canonical service underlying this service. Corresponds to the destination_canonical_service_namespace metric label in Istio metrics (https://cloud.google.com/monitoring/api/metrics_istio). */
		canonicalServiceNamespace: FormControl<string | null | undefined>,

		/** Identifier for the Istio mesh in which this canonical service is defined. Corresponds to the mesh_uid metric label in Istio metrics (https://cloud.google.com/monitoring/api/metrics_istio). */
		meshUid: FormControl<string | null | undefined>,
	}
	export function CreateIstioCanonicalServiceFormGroup() {
		return new FormGroup<IstioCanonicalServiceFormProperties>({
			canonicalService: new FormControl<string | null | undefined>(undefined),
			canonicalServiceNamespace: new FormControl<string | null | undefined>(undefined),
			meshUid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of a label. */
	export interface LabelDescriptor {

		/** A human-readable description for the label. */
		description?: string | null;

		/** The key for this label. The key must meet the following criteria: Does not exceed 100 characters. Matches the following regular expression: [a-zA-Z][a-zA-Z0-9_]* The first character must be an upper- or lower-case letter. The remaining characters must be letters, digits, or underscores. */
		key?: string | null;

		/** The type of data that can be assigned to the label. */
		valueType?: LabelDescriptorValueType | null;
	}

	/** A description of a label. */
	export interface LabelDescriptorFormProperties {

		/** A human-readable description for the label. */
		description: FormControl<string | null | undefined>,

		/** The key for this label. The key must meet the following criteria: Does not exceed 100 characters. Matches the following regular expression: [a-zA-Z][a-zA-Z0-9_]* The first character must be an upper- or lower-case letter. The remaining characters must be letters, digits, or underscores. */
		key: FormControl<string | null | undefined>,

		/** The type of data that can be assigned to the label. */
		valueType: FormControl<LabelDescriptorValueType | null | undefined>,
	}
	export function CreateLabelDescriptorFormGroup() {
		return new FormGroup<LabelDescriptorFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			valueType: new FormControl<LabelDescriptorValueType | null | undefined>(undefined),
		});

	}

	export enum LabelDescriptorValueType { STRING = 'STRING', BOOL = 'BOOL', INT64 = 'INT64' }


	/** A label value. */
	export interface LabelValue {

		/** A bool label value. */
		boolValue?: boolean | null;

		/** An int64 label value. */
		int64Value?: string | null;

		/** A string label value. */
		stringValue?: string | null;
	}

	/** A label value. */
	export interface LabelValueFormProperties {

		/** A bool label value. */
		boolValue: FormControl<boolean | null | undefined>,

		/** An int64 label value. */
		int64Value: FormControl<string | null | undefined>,

		/** A string label value. */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateLabelValueFormGroup() {
		return new FormGroup<LabelValueFormProperties>({
			boolValue: new FormControl<boolean | null | undefined>(undefined),
			int64Value: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The protocol for the ListAlertPolicies response. */
	export interface ListAlertPoliciesResponse {

		/** The returned alert policies. */
		alertPolicies?: Array<AlertPolicy>;

		/** If there might be more results than were returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken?: string | null;

		/** The total number of alert policies in all pages. This number is only an estimate, and may change in subsequent pages. https://aip.dev/158 */
		totalSize?: number | null;
	}

	/** The protocol for the ListAlertPolicies response. */
	export interface ListAlertPoliciesResponseFormProperties {

		/** If there might be more results than were returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of alert policies in all pages. This number is only an estimate, and may change in subsequent pages. https://aip.dev/158 */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListAlertPoliciesResponseFormGroup() {
		return new FormGroup<ListAlertPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The ListGroupMembers response. */
	export interface ListGroupMembersResponse {

		/** A set of monitored resources in the group. */
		members?: Array<MonitoredResource>;

		/** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken?: string | null;

		/** The total number of elements matching this request. */
		totalSize?: number | null;
	}

	/** The ListGroupMembers response. */
	export interface ListGroupMembersResponseFormProperties {

		/** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of elements matching this request. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListGroupMembersResponseFormGroup() {
		return new FormGroup<ListGroupMembersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The ListGroups response. */
	export interface ListGroupsResponse {

		/** The groups that match the specified filters. */
		group?: Array<Group>;

		/** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken?: string | null;
	}

	/** The ListGroups response. */
	export interface ListGroupsResponseFormProperties {

		/** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsResponseFormGroup() {
		return new FormGroup<ListGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ListMetricDescriptors response. */
	export interface ListMetricDescriptorsResponse {

		/** The metric descriptors that are available to the project and that match the value of filter, if present. */
		metricDescriptors?: Array<MetricDescriptor>;

		/** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken?: string | null;
	}

	/** The ListMetricDescriptors response. */
	export interface ListMetricDescriptorsResponseFormProperties {

		/** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMetricDescriptorsResponseFormGroup() {
		return new FormGroup<ListMetricDescriptorsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable. */
	export interface MetricDescriptor {

		/** A detailed description of the metric, which can be used in documentation. */
		description?: string | null;

		/** A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count". This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota. */
		displayName?: string | null;

		/** The set of labels that can be used to describe a specific instance of this metric type. For example, the appengine.googleapis.com/http/server/response_latencies metric type has a label for the HTTP response code, response_code, so you can look at latencies for successful responses or just for responses that failed. */
		labels?: Array<LabelDescriptor>;

		/** Optional. The launch stage of the metric definition. */
		launchStage?: MetricDescriptorLaunchStage | null;

		/** Additional annotations that can be used to guide the usage of a metric. */
		metadata?: MetricDescriptorMetadata;

		/** Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metric_kind and value_type might not be supported. */
		metricKind?: TimeSeriesMetricKind | null;

		/** Read-only. If present, then a time series, which is identified partially by a metric type and a MonitoredResourceDescriptor, that is associated with this metric type can only be associated with one of the monitored resource types listed here. */
		monitoredResourceTypes?: Array<string>;

		/** The resource name of the metric descriptor. */
		name?: string | null;

		/** The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined metric types have the DNS name custom.googleapis.com or external.googleapis.com. Metric types should use a natural hierarchical grouping. For example: "custom.googleapis.com/invoice/paid/amount" "external.googleapis.com/prometheus/up" "appengine.googleapis.com/http/server/response_latencies" */
		type?: string | null;

		/** The units in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of the stored metric values.Different systems might scale the values to be more easily displayed (so a value of 0.02kBy might be displayed as 20By, and a value of 3523kBy might be displayed as 3.5MBy). However, if the unit is kBy, then the value of the metric is always in thousands of bytes, no matter how it might be displayed.If you want a custom metric to record the exact number of CPU-seconds used by a job, you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently 1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as 12005.Alternatively, if you want a custom metric to record data in a more granular way, you can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value 12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).The supported units are a subset of The Unified Code for Units of Measure (https://unitsofmeasure.org/ucum.html) standard:Basic units (UNIT) bit bit By byte s second min minute h hour d day 1 dimensionlessPrefixes (PREFIX) k kilo (10^3) M mega (10^6) G giga (10^9) T tera (10^12) P peta (10^15) E exa (10^18) Z zetta (10^21) Y yotta (10^24) m milli (10^-3) u micro (10^-6) n nano (10^-9) p pico (10^-12) f femto (10^-15) a atto (10^-18) z zepto (10^-21) y yocto (10^-24) Ki kibi (2^10) Mi mebi (2^20) Gi gibi (2^30) Ti tebi (2^40) Pi pebi (2^50)GrammarThe grammar also includes these connectors: / division or ratio (as an infix operator). For examples, kBy/{email} or MiBy/10ms (although you should almost never have /s in a metric unit; rates should always be computed at query time from the underlying cumulative or delta value). . multiplication or composition (as an infix operator). For examples, GBy.d or k{watt}.h.The grammar for a unit is as follows: Expression = Component { "." Component } { "/" Component } ; Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ] | Annotation | "1" ; Annotation = "{" NAME "}" ; Notes: Annotation is just a comment if it follows a UNIT. If the annotation is used alone, then the unit is equivalent to 1. For examples, {request}/s == 1/s, By{transmitted}/s == By/s. NAME is a sequence of non-blank printable ASCII characters not containing { or }. 1 represents a unitary dimensionless unit (https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such as in 1/s. It is typically used when none of the basic units are appropriate. For example, "new users per day" can be represented as 1/d or {new-users}/d (and a metric value 5 would mean "5 new users). Alternatively, "thousands of page views per day" would be represented as 1000/d or k1/d or k{page_views}/d (and a metric value of 5.3 would mean "5300 page views per day"). % represents dimensionless value of 1/100, and annotates values giving a percentage (so the metric values are typically in the range of 0..100, and a metric value 3 means "3 percent"). 10^2.% indicates a metric contains a ratio, typically in the range 0..1, that will be multiplied by 100 and displayed as a percentage (so a metric value 0.03 means "3 percent"). */
		unit?: string | null;

		/** Whether the measurement is an integer, a floating-point number, etc. Some combinations of metric_kind and value_type might not be supported. */
		valueType?: TimeSeriesValueType | null;
	}

	/** Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable. */
	export interface MetricDescriptorFormProperties {

		/** A detailed description of the metric, which can be used in documentation. */
		description: FormControl<string | null | undefined>,

		/** A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count". This field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. The launch stage of the metric definition. */
		launchStage: FormControl<MetricDescriptorLaunchStage | null | undefined>,

		/** Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metric_kind and value_type might not be supported. */
		metricKind: FormControl<TimeSeriesMetricKind | null | undefined>,

		/** The resource name of the metric descriptor. */
		name: FormControl<string | null | undefined>,

		/** The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined metric types have the DNS name custom.googleapis.com or external.googleapis.com. Metric types should use a natural hierarchical grouping. For example: "custom.googleapis.com/invoice/paid/amount" "external.googleapis.com/prometheus/up" "appengine.googleapis.com/http/server/response_latencies" */
		type: FormControl<string | null | undefined>,

		/** The units in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of the stored metric values.Different systems might scale the values to be more easily displayed (so a value of 0.02kBy might be displayed as 20By, and a value of 3523kBy might be displayed as 3.5MBy). However, if the unit is kBy, then the value of the metric is always in thousands of bytes, no matter how it might be displayed.If you want a custom metric to record the exact number of CPU-seconds used by a job, you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently 1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as 12005.Alternatively, if you want a custom metric to record data in a more granular way, you can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value 12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).The supported units are a subset of The Unified Code for Units of Measure (https://unitsofmeasure.org/ucum.html) standard:Basic units (UNIT) bit bit By byte s second min minute h hour d day 1 dimensionlessPrefixes (PREFIX) k kilo (10^3) M mega (10^6) G giga (10^9) T tera (10^12) P peta (10^15) E exa (10^18) Z zetta (10^21) Y yotta (10^24) m milli (10^-3) u micro (10^-6) n nano (10^-9) p pico (10^-12) f femto (10^-15) a atto (10^-18) z zepto (10^-21) y yocto (10^-24) Ki kibi (2^10) Mi mebi (2^20) Gi gibi (2^30) Ti tebi (2^40) Pi pebi (2^50)GrammarThe grammar also includes these connectors: / division or ratio (as an infix operator). For examples, kBy/{email} or MiBy/10ms (although you should almost never have /s in a metric unit; rates should always be computed at query time from the underlying cumulative or delta value). . multiplication or composition (as an infix operator). For examples, GBy.d or k{watt}.h.The grammar for a unit is as follows: Expression = Component { "." Component } { "/" Component } ; Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ] | Annotation | "1" ; Annotation = "{" NAME "}" ; Notes: Annotation is just a comment if it follows a UNIT. If the annotation is used alone, then the unit is equivalent to 1. For examples, {request}/s == 1/s, By{transmitted}/s == By/s. NAME is a sequence of non-blank printable ASCII characters not containing { or }. 1 represents a unitary dimensionless unit (https://en.wikipedia.org/wiki/Dimensionless_quantity) of 1, such as in 1/s. It is typically used when none of the basic units are appropriate. For example, "new users per day" can be represented as 1/d or {new-users}/d (and a metric value 5 would mean "5 new users). Alternatively, "thousands of page views per day" would be represented as 1000/d or k1/d or k{page_views}/d (and a metric value of 5.3 would mean "5300 page views per day"). % represents dimensionless value of 1/100, and annotates values giving a percentage (so the metric values are typically in the range of 0..100, and a metric value 3 means "3 percent"). 10^2.% indicates a metric contains a ratio, typically in the range 0..1, that will be multiplied by 100 and displayed as a percentage (so a metric value 0.03 means "3 percent"). */
		unit: FormControl<string | null | undefined>,

		/** Whether the measurement is an integer, a floating-point number, etc. Some combinations of metric_kind and value_type might not be supported. */
		valueType: FormControl<TimeSeriesValueType | null | undefined>,
	}
	export function CreateMetricDescriptorFormGroup() {
		return new FormGroup<MetricDescriptorFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			launchStage: new FormControl<MetricDescriptorLaunchStage | null | undefined>(undefined),
			metricKind: new FormControl<TimeSeriesMetricKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			valueType: new FormControl<TimeSeriesValueType | null | undefined>(undefined),
		});

	}

	export enum MetricDescriptorLaunchStage { LAUNCH_STAGE_UNSPECIFIED = 'LAUNCH_STAGE_UNSPECIFIED', UNIMPLEMENTED = 'UNIMPLEMENTED', PRELAUNCH = 'PRELAUNCH', EARLY_ACCESS = 'EARLY_ACCESS', ALPHA = 'ALPHA', BETA = 'BETA', GA = 'GA', DEPRECATED = 'DEPRECATED' }


	/** Additional annotations that can be used to guide the usage of a metric. */
	export interface MetricDescriptorMetadata {

		/** The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors. */
		ingestDelay?: string | null;

		/** Deprecated. Must use the MetricDescriptor.launch_stage instead. */
		launchStage?: MetricDescriptorLaunchStage | null;

		/** The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period. */
		samplePeriod?: string | null;
	}

	/** Additional annotations that can be used to guide the usage of a metric. */
	export interface MetricDescriptorMetadataFormProperties {

		/** The delay of data points caused by ingestion. Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors. */
		ingestDelay: FormControl<string | null | undefined>,

		/** Deprecated. Must use the MetricDescriptor.launch_stage instead. */
		launchStage: FormControl<MetricDescriptorLaunchStage | null | undefined>,

		/** The sampling period of metric data points. For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period. */
		samplePeriod: FormControl<string | null | undefined>,
	}
	export function CreateMetricDescriptorMetadataFormGroup() {
		return new FormGroup<MetricDescriptorMetadataFormProperties>({
			ingestDelay: new FormControl<string | null | undefined>(undefined),
			launchStage: new FormControl<MetricDescriptorLaunchStage | null | undefined>(undefined),
			samplePeriod: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ListMonitoredResourceDescriptors response. */
	export interface ListMonitoredResourceDescriptorsResponse {

		/** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken?: string | null;

		/** The monitored resource descriptors that are available to this project and that match filter, if present. */
		resourceDescriptors?: Array<MonitoredResourceDescriptor>;
	}

	/** The ListMonitoredResourceDescriptors response. */
	export interface ListMonitoredResourceDescriptorsResponseFormProperties {

		/** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMonitoredResourceDescriptorsResponseFormGroup() {
		return new FormGroup<ListMonitoredResourceDescriptorsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of "gce_instance" and specifies the use of the labels "instance_id" and "zone" to identify particular VM instances.Different APIs can support different monitored resource types. APIs generally provide a list method that returns the monitored resource descriptors used by the API. */
	export interface MonitoredResourceDescriptor {

		/** Optional. A detailed description of the monitored resource type that might be used in documentation. */
		description?: string | null;

		/** Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, "Google Cloud SQL Database". */
		displayName?: string | null;

		/** Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is identified by values for the labels "database_id" and "zone". */
		labels?: Array<LabelDescriptor>;

		/** Optional. The launch stage of the monitored resource definition. */
		launchStage?: MetricDescriptorLaunchStage | null;

		/** Optional. The resource name of the monitored resource descriptor: "projects/{project_id}/monitoredResourceDescriptors/{type}" where {type} is the value of the type field in this object and {project_id} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format "monitoredResourceDescriptors/{type}". */
		name?: string | null;

		/** Required. The monitored resource type. For example, the type "cloudsql_database" represents databases in Google Cloud SQL. For a list of types, see Monitored resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list). */
		type?: string | null;
	}

	/** An object that describes the schema of a MonitoredResource object using a type name and a set of labels. For example, the monitored resource descriptor for Google Compute Engine VM instances has a type of "gce_instance" and specifies the use of the labels "instance_id" and "zone" to identify particular VM instances.Different APIs can support different monitored resource types. APIs generally provide a list method that returns the monitored resource descriptors used by the API. */
	export interface MonitoredResourceDescriptorFormProperties {

		/** Optional. A detailed description of the monitored resource type that might be used in documentation. */
		description: FormControl<string | null | undefined>,

		/** Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without any article or other determiners. For example, "Google Cloud SQL Database". */
		displayName: FormControl<string | null | undefined>,

		/** Optional. The launch stage of the monitored resource definition. */
		launchStage: FormControl<MetricDescriptorLaunchStage | null | undefined>,

		/** Optional. The resource name of the monitored resource descriptor: "projects/{project_id}/monitoredResourceDescriptors/{type}" where {type} is the value of the type field in this object and {project_id} is a project ID that provides API-specific context for accessing the type. APIs that do not use project information can use the resource name format "monitoredResourceDescriptors/{type}". */
		name: FormControl<string | null | undefined>,

		/** Required. The monitored resource type. For example, the type "cloudsql_database" represents databases in Google Cloud SQL. For a list of types, see Monitored resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMonitoredResourceDescriptorFormGroup() {
		return new FormGroup<MonitoredResourceDescriptorFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			launchStage: new FormControl<MetricDescriptorLaunchStage | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ListNotificationChannelDescriptors response. */
	export interface ListNotificationChannelDescriptorsResponse {

		/** The monitored resource descriptors supported for the specified project, optionally filtered. */
		channelDescriptors?: Array<NotificationChannelDescriptor>;

		/** If not empty, indicates that there may be more results that match the request. Use the value in the page_token field in a subsequent request to fetch the next set of results. If empty, all results have been returned. */
		nextPageToken?: string | null;
	}

	/** The ListNotificationChannelDescriptors response. */
	export interface ListNotificationChannelDescriptorsResponseFormProperties {

		/** If not empty, indicates that there may be more results that match the request. Use the value in the page_token field in a subsequent request to fetch the next set of results. If empty, all results have been returned. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListNotificationChannelDescriptorsResponseFormGroup() {
		return new FormGroup<ListNotificationChannelDescriptorsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of a notification channel. The descriptor includes the properties of the channel and the set of labels or fields that must be specified to configure channels of a given type. */
	export interface NotificationChannelDescriptor {

		/** A human-readable description of the notification channel type. The description may include a description of the properties of the channel and pointers to external documentation. */
		description?: string | null;

		/** A human-readable name for the notification channel type. This form of the name is suitable for a user interface. */
		displayName?: string | null;

		/** The set of labels that must be defined to identify a particular channel of the corresponding type. Each label includes a description for how that field should be populated. */
		labels?: Array<LabelDescriptor>;

		/** The product launch stage for channels of this type. */
		launchStage?: MetricDescriptorLaunchStage | null;

		/** The full REST resource name for this descriptor. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannelDescriptors/[TYPE] In the above, [TYPE] is the value of the type field. */
		name?: string | null;

		/** The tiers that support this notification channel; the project service tier must be one of the supported_tiers. */
		supportedTiers?: Array<string>;

		/** The type of notification channel, such as "email" and "sms". To view the full list of channels, see Channel descriptors (https://cloud.google.com/monitoring/alerts/using-channels-api#ncd). Notification channel types are globally unique. */
		type?: string | null;
	}

	/** A description of a notification channel. The descriptor includes the properties of the channel and the set of labels or fields that must be specified to configure channels of a given type. */
	export interface NotificationChannelDescriptorFormProperties {

		/** A human-readable description of the notification channel type. The description may include a description of the properties of the channel and pointers to external documentation. */
		description: FormControl<string | null | undefined>,

		/** A human-readable name for the notification channel type. This form of the name is suitable for a user interface. */
		displayName: FormControl<string | null | undefined>,

		/** The product launch stage for channels of this type. */
		launchStage: FormControl<MetricDescriptorLaunchStage | null | undefined>,

		/** The full REST resource name for this descriptor. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannelDescriptors/[TYPE] In the above, [TYPE] is the value of the type field. */
		name: FormControl<string | null | undefined>,

		/** The type of notification channel, such as "email" and "sms". To view the full list of channels, see Channel descriptors (https://cloud.google.com/monitoring/alerts/using-channels-api#ncd). Notification channel types are globally unique. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNotificationChannelDescriptorFormGroup() {
		return new FormGroup<NotificationChannelDescriptorFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			launchStage: new FormControl<MetricDescriptorLaunchStage | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ListNotificationChannels response. */
	export interface ListNotificationChannelsResponse {

		/** If not empty, indicates that there may be more results that match the request. Use the value in the page_token field in a subsequent request to fetch the next set of results. If empty, all results have been returned. */
		nextPageToken?: string | null;

		/** The notification channels defined for the specified project. */
		notificationChannels?: Array<NotificationChannel>;

		/** The total number of notification channels in all pages. This number is only an estimate, and may change in subsequent pages. https://aip.dev/158 */
		totalSize?: number | null;
	}

	/** The ListNotificationChannels response. */
	export interface ListNotificationChannelsResponseFormProperties {

		/** If not empty, indicates that there may be more results that match the request. Use the value in the page_token field in a subsequent request to fetch the next set of results. If empty, all results have been returned. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of notification channels in all pages. This number is only an estimate, and may change in subsequent pages. https://aip.dev/158 */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListNotificationChannelsResponseFormGroup() {
		return new FormGroup<ListNotificationChannelsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A NotificationChannel is a medium through which an alert is delivered when a policy violation is detected. Examples of channels include email, SMS, and third-party messaging applications. Fields containing sensitive information like authentication tokens or contact info are only partially populated on retrieval. */
	export interface NotificationChannel {

		/** Describes a change made to a configuration. */
		creationRecord?: MutationRecord;

		/** An optional human-readable description of this notification channel. This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters. */
		description?: string | null;

		/** An optional human-readable name for this notification channel. It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters. */
		displayName?: string | null;

		/** Whether notifications are forwarded to the described channel. This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future. */
		enabled?: boolean | null;

		/** Configuration fields that define the channel and its behavior. The permissible and required labels are specified in the NotificationChannelDescriptor.labels of the NotificationChannelDescriptor corresponding to the type field. */
		labels?: {[id: string]: string };

		/** Records of the modification of this channel. */
		mutationRecords?: Array<MutationRecord>;

		/** The full REST resource name for this channel. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] The [CHANNEL_ID] is automatically assigned by the server on creation. */
		name?: string | null;

		/** The type of the notification channel. This field matches the value of the NotificationChannelDescriptor.type field. */
		type?: string | null;

		/** User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. */
		userLabels?: {[id: string]: string };

		/** Indicates whether this channel has been verified or not. On a ListNotificationChannels or GetNotificationChannel operation, this field is expected to be populated.If the value is UNVERIFIED, then it indicates that the channel is non-functioning (it both requires verification and lacks verification); otherwise, it is assumed that the channel works.If the channel is neither VERIFIED nor UNVERIFIED, it implies that the channel is of a type that does not require verification or that this specific channel has been exempted from verification because it was created prior to verification being required for channels of this type.This field cannot be modified using a standard UpdateNotificationChannel operation. To change the value of this field, you must call VerifyNotificationChannel. */
		verificationStatus?: NotificationChannelVerificationStatus | null;
	}

	/** A NotificationChannel is a medium through which an alert is delivered when a policy violation is detected. Examples of channels include email, SMS, and third-party messaging applications. Fields containing sensitive information like authentication tokens or contact info are only partially populated on retrieval. */
	export interface NotificationChannelFormProperties {

		/** An optional human-readable description of this notification channel. This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters. */
		description: FormControl<string | null | undefined>,

		/** An optional human-readable name for this notification channel. It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters. */
		displayName: FormControl<string | null | undefined>,

		/** Whether notifications are forwarded to the described channel. This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future. */
		enabled: FormControl<boolean | null | undefined>,

		/** Configuration fields that define the channel and its behavior. The permissible and required labels are specified in the NotificationChannelDescriptor.labels of the NotificationChannelDescriptor corresponding to the type field. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The full REST resource name for this channel. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID] The [CHANNEL_ID] is automatically assigned by the server on creation. */
		name: FormControl<string | null | undefined>,

		/** The type of the notification channel. This field matches the value of the NotificationChannelDescriptor.type field. */
		type: FormControl<string | null | undefined>,

		/** User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. */
		userLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** Indicates whether this channel has been verified or not. On a ListNotificationChannels or GetNotificationChannel operation, this field is expected to be populated.If the value is UNVERIFIED, then it indicates that the channel is non-functioning (it both requires verification and lacks verification); otherwise, it is assumed that the channel works.If the channel is neither VERIFIED nor UNVERIFIED, it implies that the channel is of a type that does not require verification or that this specific channel has been exempted from verification because it was created prior to verification being required for channels of this type.This field cannot be modified using a standard UpdateNotificationChannel operation. To change the value of this field, you must call VerifyNotificationChannel. */
		verificationStatus: FormControl<NotificationChannelVerificationStatus | null | undefined>,
	}
	export function CreateNotificationChannelFormGroup() {
		return new FormGroup<NotificationChannelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			userLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			verificationStatus: new FormControl<NotificationChannelVerificationStatus | null | undefined>(undefined),
		});

	}

	export enum NotificationChannelVerificationStatus { VERIFICATION_STATUS_UNSPECIFIED = 'VERIFICATION_STATUS_UNSPECIFIED', UNVERIFIED = 'UNVERIFIED', VERIFIED = 'VERIFIED' }


	/** The ListServiceLevelObjectives response. */
	export interface ListServiceLevelObjectivesResponse {

		/** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken?: string | null;

		/** The ServiceLevelObjectives matching the specified filter. */
		serviceLevelObjectives?: Array<ServiceLevelObjective>;
	}

	/** The ListServiceLevelObjectives response. */
	export interface ListServiceLevelObjectivesResponseFormProperties {

		/** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceLevelObjectivesResponseFormGroup() {
		return new FormGroup<ListServiceLevelObjectivesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Service-Level Objective (SLO) describes a level of desired good service. It consists of a service-level indicator (SLI), a performance goal, and a period over which the objective is to be evaluated against that goal. The SLO can use SLIs defined in a number of different manners. Typical SLOs might include "99% of requests in each rolling week have latency below 200 milliseconds" or "99.5% of requests in each calendar month return successfully." */
	export interface ServiceLevelObjective {

		/** A calendar period, semantically "since the start of the current ". At this time, only DAY, WEEK, FORTNIGHT, and MONTH are supported. */
		calendarPeriod?: ServiceLevelObjectiveCalendarPeriod | null;

		/** Name used for UI elements listing this SLO. */
		displayName?: string | null;

		/** The fraction of service that must be good in order for this objective to be met. 0 < goal <= 0.999. */
		goal?: number | null;

		/** Resource name for this ServiceLevelObjective. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME] */
		name?: string | null;

		/** A rolling time period, semantically "in the past ". Must be an integer multiple of 1 day no larger than 30 days. */
		rollingPeriod?: string | null;

		/** A Service-Level Indicator (SLI) describes the "performance" of a service. For some services, the SLI is well-defined. In such cases, the SLI can be described easily by referencing the well-known SLI and providing the needed parameters. Alternatively, a "custom" SLI can be defined with a query to the underlying metric store. An SLI is defined to be good_service / total_service over any queried time interval. The value of performance always falls into the range 0 <= performance <= 1. A custom SLI describes how to compute this ratio, whether this is by dividing values from a pair of time series, cutting a Distribution into good and bad counts, or counting time windows in which the service complies with a criterion. For separation of concerns, a single Service-Level Indicator measures performance for only one aspect of service quality, such as fraction of successful queries or fast-enough queries. */
		serviceLevelIndicator?: ServiceLevelIndicator;

		/** Labels which have been used to annotate the service-level objective. Label keys must start with a letter. Label keys and values may contain lowercase letters, numbers, underscores, and dashes. Label keys and values have a maximum length of 63 characters, and must be less than 128 bytes in size. Up to 64 label entries may be stored. For labels which do not have a semantic value, the empty string may be supplied for the label value. */
		userLabels?: {[id: string]: string };
	}

	/** A Service-Level Objective (SLO) describes a level of desired good service. It consists of a service-level indicator (SLI), a performance goal, and a period over which the objective is to be evaluated against that goal. The SLO can use SLIs defined in a number of different manners. Typical SLOs might include "99% of requests in each rolling week have latency below 200 milliseconds" or "99.5% of requests in each calendar month return successfully." */
	export interface ServiceLevelObjectiveFormProperties {

		/** A calendar period, semantically "since the start of the current ". At this time, only DAY, WEEK, FORTNIGHT, and MONTH are supported. */
		calendarPeriod: FormControl<ServiceLevelObjectiveCalendarPeriod | null | undefined>,

		/** Name used for UI elements listing this SLO. */
		displayName: FormControl<string | null | undefined>,

		/** The fraction of service that must be good in order for this objective to be met. 0 < goal <= 0.999. */
		goal: FormControl<number | null | undefined>,

		/** Resource name for this ServiceLevelObjective. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME] */
		name: FormControl<string | null | undefined>,

		/** A rolling time period, semantically "in the past ". Must be an integer multiple of 1 day no larger than 30 days. */
		rollingPeriod: FormControl<string | null | undefined>,

		/** Labels which have been used to annotate the service-level objective. Label keys must start with a letter. Label keys and values may contain lowercase letters, numbers, underscores, and dashes. Label keys and values have a maximum length of 63 characters, and must be less than 128 bytes in size. Up to 64 label entries may be stored. For labels which do not have a semantic value, the empty string may be supplied for the label value. */
		userLabels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateServiceLevelObjectiveFormGroup() {
		return new FormGroup<ServiceLevelObjectiveFormProperties>({
			calendarPeriod: new FormControl<ServiceLevelObjectiveCalendarPeriod | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			goal: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rollingPeriod: new FormControl<string | null | undefined>(undefined),
			userLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum ServiceLevelObjectiveCalendarPeriod { CALENDAR_PERIOD_UNSPECIFIED = 'CALENDAR_PERIOD_UNSPECIFIED', DAY = 'DAY', WEEK = 'WEEK', FORTNIGHT = 'FORTNIGHT', MONTH = 'MONTH', QUARTER = 'QUARTER', HALF = 'HALF', YEAR = 'YEAR' }


	/** A Service-Level Indicator (SLI) describes the "performance" of a service. For some services, the SLI is well-defined. In such cases, the SLI can be described easily by referencing the well-known SLI and providing the needed parameters. Alternatively, a "custom" SLI can be defined with a query to the underlying metric store. An SLI is defined to be good_service / total_service over any queried time interval. The value of performance always falls into the range 0 <= performance <= 1. A custom SLI describes how to compute this ratio, whether this is by dividing values from a pair of time series, cutting a Distribution into good and bad counts, or counting time windows in which the service complies with a criterion. For separation of concerns, a single Service-Level Indicator measures performance for only one aspect of service quality, such as fraction of successful queries or fast-enough queries. */
	export interface ServiceLevelIndicator {

		/** An SLI measuring performance on a well-known service type. Performance will be computed on the basis of pre-defined metrics. The type of the service_resource determines the metrics to use and the service_resource.labels and metric_labels are used to construct a monitoring filter to filter that metric down to just the data relevant to this service. */
		basicSli?: BasicSli;

		/** Service Level Indicators for which atomic units of service are counted directly. */
		requestBased?: RequestBasedSli;

		/** A WindowsBasedSli defines good_service as the count of time windows for which the provided service was of good quality. Criteria for determining if service was good are embedded in the window_criterion. */
		windowsBased?: WindowsBasedSli;
	}

	/** A Service-Level Indicator (SLI) describes the "performance" of a service. For some services, the SLI is well-defined. In such cases, the SLI can be described easily by referencing the well-known SLI and providing the needed parameters. Alternatively, a "custom" SLI can be defined with a query to the underlying metric store. An SLI is defined to be good_service / total_service over any queried time interval. The value of performance always falls into the range 0 <= performance <= 1. A custom SLI describes how to compute this ratio, whether this is by dividing values from a pair of time series, cutting a Distribution into good and bad counts, or counting time windows in which the service complies with a criterion. For separation of concerns, a single Service-Level Indicator measures performance for only one aspect of service quality, such as fraction of successful queries or fast-enough queries. */
	export interface ServiceLevelIndicatorFormProperties {
	}
	export function CreateServiceLevelIndicatorFormGroup() {
		return new FormGroup<ServiceLevelIndicatorFormProperties>({
		});

	}


	/** Service Level Indicators for which atomic units of service are counted directly. */
	export interface RequestBasedSli {

		/** A DistributionCut defines a TimeSeries and thresholds used for measuring good service and total service. The TimeSeries must have ValueType = DISTRIBUTION and MetricKind = DELTA or MetricKind = CUMULATIVE. The computed good_service will be the estimated count of values in the Distribution that fall within the specified min and max. */
		distributionCut?: DistributionCut;

		/** A TimeSeriesRatio specifies two TimeSeries to use for computing the good_service / total_service ratio. The specified TimeSeries must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. The TimeSeriesRatio must specify exactly two of good, bad, and total, and the relationship good_service + bad_service = total_service will be assumed. */
		goodTotalRatio?: TimeSeriesRatio;
	}

	/** Service Level Indicators for which atomic units of service are counted directly. */
	export interface RequestBasedSliFormProperties {
	}
	export function CreateRequestBasedSliFormGroup() {
		return new FormGroup<RequestBasedSliFormProperties>({
		});

	}


	/** A TimeSeriesRatio specifies two TimeSeries to use for computing the good_service / total_service ratio. The specified TimeSeries must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. The TimeSeriesRatio must specify exactly two of good, bad, and total, and the relationship good_service + bad_service = total_service will be assumed. */
	export interface TimeSeriesRatio {

		/** A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries quantifying bad service, either demanded service that was not provided or demanded service that was of inadequate quality. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. */
		badServiceFilter?: string | null;

		/** A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries quantifying good service provided. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. */
		goodServiceFilter?: string | null;

		/** A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries quantifying total demanded service. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. */
		totalServiceFilter?: string | null;
	}

	/** A TimeSeriesRatio specifies two TimeSeries to use for computing the good_service / total_service ratio. The specified TimeSeries must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. The TimeSeriesRatio must specify exactly two of good, bad, and total, and the relationship good_service + bad_service = total_service will be assumed. */
	export interface TimeSeriesRatioFormProperties {

		/** A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries quantifying bad service, either demanded service that was not provided or demanded service that was of inadequate quality. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. */
		badServiceFilter: FormControl<string | null | undefined>,

		/** A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries quantifying good service provided. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. */
		goodServiceFilter: FormControl<string | null | undefined>,

		/** A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries quantifying total demanded service. Must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. */
		totalServiceFilter: FormControl<string | null | undefined>,
	}
	export function CreateTimeSeriesRatioFormGroup() {
		return new FormGroup<TimeSeriesRatioFormProperties>({
			badServiceFilter: new FormControl<string | null | undefined>(undefined),
			goodServiceFilter: new FormControl<string | null | undefined>(undefined),
			totalServiceFilter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A WindowsBasedSli defines good_service as the count of time windows for which the provided service was of good quality. Criteria for determining if service was good are embedded in the window_criterion. */
	export interface WindowsBasedSli {

		/** A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries with ValueType = BOOL. The window is good if any true values appear in the window. */
		goodBadMetricFilter?: string | null;

		/** A PerformanceThreshold is used when each window is good when that window has a sufficiently high performance. */
		goodTotalRatioThreshold?: PerformanceThreshold;

		/** A MetricRange is used when each window is good when the value x of a single TimeSeries satisfies range.min <= x <= range.max. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. */
		metricMeanInRange?: MetricRange;

		/** A MetricRange is used when each window is good when the value x of a single TimeSeries satisfies range.min <= x <= range.max. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. */
		metricSumInRange?: MetricRange;

		/** Duration over which window quality is evaluated. Must be an integer fraction of a day and at least 60s. */
		windowPeriod?: string | null;
	}

	/** A WindowsBasedSli defines good_service as the count of time windows for which the provided service was of good quality. Criteria for determining if service was good are embedded in the window_criterion. */
	export interface WindowsBasedSliFormProperties {

		/** A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries with ValueType = BOOL. The window is good if any true values appear in the window. */
		goodBadMetricFilter: FormControl<string | null | undefined>,

		/** Duration over which window quality is evaluated. Must be an integer fraction of a day and at least 60s. */
		windowPeriod: FormControl<string | null | undefined>,
	}
	export function CreateWindowsBasedSliFormGroup() {
		return new FormGroup<WindowsBasedSliFormProperties>({
			goodBadMetricFilter: new FormControl<string | null | undefined>(undefined),
			windowPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A PerformanceThreshold is used when each window is good when that window has a sufficiently high performance. */
	export interface PerformanceThreshold {

		/** An SLI measuring performance on a well-known service type. Performance will be computed on the basis of pre-defined metrics. The type of the service_resource determines the metrics to use and the service_resource.labels and metric_labels are used to construct a monitoring filter to filter that metric down to just the data relevant to this service. */
		basicSliPerformance?: BasicSli;

		/** Service Level Indicators for which atomic units of service are counted directly. */
		performance?: RequestBasedSli;

		/** If window performance >= threshold, the window is counted as good. */
		threshold?: number | null;
	}

	/** A PerformanceThreshold is used when each window is good when that window has a sufficiently high performance. */
	export interface PerformanceThresholdFormProperties {

		/** If window performance >= threshold, the window is counted as good. */
		threshold: FormControl<number | null | undefined>,
	}
	export function CreatePerformanceThresholdFormGroup() {
		return new FormGroup<PerformanceThresholdFormProperties>({
			threshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A MetricRange is used when each window is good when the value x of a single TimeSeries satisfies range.min <= x <= range.max. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. */
	export interface MetricRange {

		/** Range of numerical values within min and max. */
		range?: GoogleMonitoringV3Range;

		/** A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window quality. */
		timeSeries?: string | null;
	}

	/** A MetricRange is used when each window is good when the value x of a single TimeSeries satisfies range.min <= x <= range.max. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE. */
	export interface MetricRangeFormProperties {

		/** A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying the TimeSeries to use for evaluating window quality. */
		timeSeries: FormControl<string | null | undefined>,
	}
	export function CreateMetricRangeFormGroup() {
		return new FormGroup<MetricRangeFormProperties>({
			timeSeries: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ListServices response. */
	export interface ListServicesResponse {

		/** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken?: string | null;

		/** The Services matching the specified filter. */
		services?: Array<Service>;
	}

	/** The ListServices response. */
	export interface ListServicesResponseFormProperties {

		/** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServicesResponseFormGroup() {
		return new FormGroup<ListServicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible. */
	export interface Service {

		/** App Engine service. Learn more at https://cloud.google.com/appengine. */
		appEngine?: AppEngine;

		/** A well-known service type, defined by its service type and service labels. Documentation and examples here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli). */
		basicService?: BasicService;

		/** Cloud Endpoints service. Learn more at https://cloud.google.com/endpoints. */
		cloudEndpoints?: CloudEndpoints;

		/** Cloud Run service. Learn more at https://cloud.google.com/run. */
		cloudRun?: CloudRun;

		/** Istio service scoped to a single Kubernetes cluster. Learn more at https://istio.io. Clusters running OSS Istio will have their services ingested as this type. */
		clusterIstio?: ClusterIstio;

		/** Use a custom service to designate a service that you want to monitor when none of the other service types (like App Engine, Cloud Run, or a GKE type) matches your intended service. */
		custom?: Custom;

		/** Name used for UI elements listing this Service. */
		displayName?: string | null;

		/** GKE Namespace. The field names correspond to the resource metadata labels on monitored resources that fall under a namespace (for example, k8s_container or k8s_pod). */
		gkeNamespace?: GkeNamespace;

		/** GKE Service. The "service" here represents a Kubernetes service object (https://kubernetes.io/docs/concepts/services-networking/service). The field names correspond to the resource labels on k8s_service monitored resources (https://cloud.google.com/monitoring/api/resources#tag_k8s_service). */
		gkeService?: GkeService;

		/** A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod). */
		gkeWorkload?: GkeWorkload;

		/** Canonical service scoped to an Istio mesh. Anthos clusters running ASM >= 1.6.8 will have their services ingested as this type. */
		istioCanonicalService?: IstioCanonicalService;

		/** Istio service scoped to an Istio mesh. Anthos clusters running ASM < 1.6.8 will have their services ingested as this type. */
		meshIstio?: MeshIstio;

		/** Resource name for this Service. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID] */
		name?: string | null;

		/** Configuration for how to query telemetry on a Service. */
		telemetry?: Telemetry;

		/** Labels which have been used to annotate the service. Label keys must start with a letter. Label keys and values may contain lowercase letters, numbers, underscores, and dashes. Label keys and values have a maximum length of 63 characters, and must be less than 128 bytes in size. Up to 64 label entries may be stored. For labels which do not have a semantic value, the empty string may be supplied for the label value. */
		userLabels?: {[id: string]: string };
	}

	/** A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible. */
	export interface ServiceFormProperties {

		/** Name used for UI elements listing this Service. */
		displayName: FormControl<string | null | undefined>,

		/** Resource name for this Service. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID] */
		name: FormControl<string | null | undefined>,

		/** Labels which have been used to annotate the service. Label keys must start with a letter. Label keys and values may contain lowercase letters, numbers, underscores, and dashes. Label keys and values have a maximum length of 63 characters, and must be less than 128 bytes in size. Up to 64 label entries may be stored. For labels which do not have a semantic value, the empty string may be supplied for the label value. */
		userLabels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			userLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Istio service scoped to an Istio mesh. Anthos clusters running ASM < 1.6.8 will have their services ingested as this type. */
	export interface MeshIstio {

		/** Identifier for the mesh in which this Istio service is defined. Corresponds to the mesh_uid metric label in Istio metrics. */
		meshUid?: string | null;

		/** The name of the Istio service underlying this service. Corresponds to the destination_service_name metric label in Istio metrics. */
		serviceName?: string | null;

		/** The namespace of the Istio service underlying this service. Corresponds to the destination_service_namespace metric label in Istio metrics. */
		serviceNamespace?: string | null;
	}

	/** Istio service scoped to an Istio mesh. Anthos clusters running ASM < 1.6.8 will have their services ingested as this type. */
	export interface MeshIstioFormProperties {

		/** Identifier for the mesh in which this Istio service is defined. Corresponds to the mesh_uid metric label in Istio metrics. */
		meshUid: FormControl<string | null | undefined>,

		/** The name of the Istio service underlying this service. Corresponds to the destination_service_name metric label in Istio metrics. */
		serviceName: FormControl<string | null | undefined>,

		/** The namespace of the Istio service underlying this service. Corresponds to the destination_service_namespace metric label in Istio metrics. */
		serviceNamespace: FormControl<string | null | undefined>,
	}
	export function CreateMeshIstioFormGroup() {
		return new FormGroup<MeshIstioFormProperties>({
			meshUid: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			serviceNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for how to query telemetry on a Service. */
	export interface Telemetry {

		/** The full name of the resource that defines this service. Formatted as described in https://cloud.google.com/apis/design/resource_names. */
		resourceName?: string | null;
	}

	/** Configuration for how to query telemetry on a Service. */
	export interface TelemetryFormProperties {

		/** The full name of the resource that defines this service. Formatted as described in https://cloud.google.com/apis/design/resource_names. */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateTelemetryFormGroup() {
		return new FormGroup<TelemetryFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The results of a successful ListSnoozes call, containing the matching Snoozes. */
	export interface ListSnoozesResponse {

		/** Page token for repeated calls to ListSnoozes, to fetch additional pages of results. If this is empty or missing, there are no more pages. */
		nextPageToken?: string | null;

		/** Snoozes matching this list call. */
		snoozes?: Array<Snooze>;
	}

	/** The results of a successful ListSnoozes call, containing the matching Snoozes. */
	export interface ListSnoozesResponseFormProperties {

		/** Page token for repeated calls to ListSnoozes, to fetch additional pages of results. If this is empty or missing, there are no more pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSnoozesResponseFormGroup() {
		return new FormGroup<ListSnoozesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Snooze will prevent any alerts from being opened, and close any that are already open. The Snooze will work on alerts that match the criteria defined in the Snooze. The Snooze will be active from interval.start_time through interval.end_time. */
	export interface Snooze {

		/** Criteria specific to the AlertPolicys that this Snooze applies to. The Snooze will suppress alerts that come from one of the AlertPolicys whose names are supplied. */
		criteria?: Criteria;

		/** Required. A display name for the Snooze. This can be, at most, 512 unicode characters. */
		displayName?: string | null;

		/** Describes a time interval: Reads: A half-open time interval. It includes the end time but excludes the start time: (startTime, endTime]. The start time must be specified, must be earlier than the end time, and should be no older than the data retention period for the metric. Writes: A closed time interval. It extends from the start time to the end time, and includes both: [startTime, endTime]. Valid time intervals depend on the MetricKind (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors#MetricKind) of the metric value. The end time must not be earlier than the start time, and the end time must not be more than 25 hours in the past or more than five minutes in the future. For GAUGE metrics, the startTime value is technically optional; if no value is specified, the start time defaults to the value of the end time, and the interval represents a single point in time. If both start and end times are specified, they must be identical. Such an interval is valid only for GAUGE metrics, which are point-in-time measurements. The end time of a new interval must be at least a millisecond after the end time of the previous interval. For DELTA metrics, the start time and end time must specify a non-zero interval, with subsequent points specifying contiguous and non-overlapping intervals. For DELTA metrics, the start time of the next interval must be at least a millisecond after the end time of the previous interval. For CUMULATIVE metrics, the start time and end time must specify a non-zero interval, with subsequent points specifying the same start time and increasing end times, until an event resets the cumulative value to zero and sets a new start time for the following points. The new start time must be at least a millisecond after the end time of the previous interval. The start time of a new interval must be at least a millisecond after the end time of the previous interval because intervals are closed. If the start time of a new interval is the same as the end time of the previous interval, then data written at the new start time could overwrite data written at the previous end time. */
		interval?: TimeInterval;

		/** Required. The name of the Snooze. The format is: projects/[PROJECT_ID_OR_NUMBER]/snoozes/[SNOOZE_ID] The ID of the Snooze will be generated by the system. */
		name?: string | null;
	}

	/** A Snooze will prevent any alerts from being opened, and close any that are already open. The Snooze will work on alerts that match the criteria defined in the Snooze. The Snooze will be active from interval.start_time through interval.end_time. */
	export interface SnoozeFormProperties {

		/** Required. A display name for the Snooze. This can be, at most, 512 unicode characters. */
		displayName: FormControl<string | null | undefined>,

		/** Required. The name of the Snooze. The format is: projects/[PROJECT_ID_OR_NUMBER]/snoozes/[SNOOZE_ID] The ID of the Snooze will be generated by the system. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSnoozeFormGroup() {
		return new FormGroup<SnoozeFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ListTimeSeries response. */
	export interface ListTimeSeriesResponse {

		/** Query execution errors that may have caused the time series data returned to be incomplete. */
		executionErrors?: Array<Status>;

		/** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken?: string | null;

		/** One or more time series that match the filter included in the request. */
		timeSeries?: Array<TimeSeries>;

		/** The unit in which all time_series point values are reported. unit follows the UCUM format for units as seen in https://unitsofmeasure.org/ucum.html. If different time_series have different units (for example, because they come from different metric types, or a unit is absent), then unit will be "{not_a_unit}". */
		unit?: string | null;
	}

	/** The ListTimeSeries response. */
	export interface ListTimeSeriesResponseFormProperties {

		/** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The unit in which all time_series point values are reported. unit follows the UCUM format for units as seen in https://unitsofmeasure.org/ucum.html. If different time_series have different units (for example, because they come from different metric types, or a unit is absent), then unit will be "{not_a_unit}". */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateListTimeSeriesResponseFormGroup() {
		return new FormGroup<ListTimeSeriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The protocol for the ListUptimeCheckConfigs response. */
	export interface ListUptimeCheckConfigsResponse {

		/** This field represents the pagination token to retrieve the next page of results. If the value is empty, it means no further results for the request. To retrieve the next page of results, the value of the next_page_token is passed to the subsequent List method call (in the request message's page_token field). */
		nextPageToken?: string | null;

		/** The total number of Uptime check configurations for the project, irrespective of any pagination. */
		totalSize?: number | null;

		/** The returned Uptime check configurations. */
		uptimeCheckConfigs?: Array<UptimeCheckConfig>;
	}

	/** The protocol for the ListUptimeCheckConfigs response. */
	export interface ListUptimeCheckConfigsResponseFormProperties {

		/** This field represents the pagination token to retrieve the next page of results. If the value is empty, it means no further results for the request. To retrieve the next page of results, the value of the next_page_token is passed to the subsequent List method call (in the request message's page_token field). */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of Uptime check configurations for the project, irrespective of any pagination. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListUptimeCheckConfigsResponseFormGroup() {
		return new FormGroup<ListUptimeCheckConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This message configures which resources and services to monitor for availability. */
	export interface UptimeCheckConfig {

		/** The type of checkers to use to execute the Uptime check. */
		checkerType?: UptimeCheckConfigCheckerType | null;

		/** The content that is expected to appear in the data returned by the target server against which the check is run. Currently, only the first entry in the content_matchers list is supported, and additional entries will be ignored. This field is optional and should only be specified if a content match is required as part of the/ Uptime check. */
		contentMatchers?: Array<ContentMatcher>;

		/** A human-friendly name for the Uptime check configuration. The display name should be unique within a Cloud Monitoring Workspace in order to make it easier to identify; however, uniqueness is not enforced. Required. */
		displayName?: string | null;

		/** Information involved in an HTTP/HTTPS Uptime check request. */
		httpCheck?: HttpCheck;

		/** The internal checkers that this check will egress from. If is_internal is true and this list is empty, the check will egress from all the InternalCheckers configured for the project that owns this UptimeCheckConfig. */
		internalCheckers?: Array<InternalChecker>;

		/** If this is true, then checks are made only from the 'internal_checkers'. If it is false, then checks are made only from the 'selected_regions'. It is an error to provide 'selected_regions' when is_internal is true, or to provide 'internal_checkers' when is_internal is false. */
		isInternal?: boolean | null;

		/** An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource's schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "project_id", "instance_id" and "zone": { "type": "gce_instance", "labels": { "project_id": "my-project", "instance_id": "12345678901234", "zone": "us-central1-a" }} */
		monitoredResource?: MonitoredResource;

		/** Identifier. A unique resource name for this Uptime check configuration. The format is: projects/[PROJECT_ID_OR_NUMBER]/uptimeCheckConfigs/[UPTIME_CHECK_ID] [PROJECT_ID_OR_NUMBER] is the Workspace host project associated with the Uptime check.This field should be omitted when creating the Uptime check configuration; on create, the resource name is assigned by the server and included in the response. */
		name?: string | null;

		/** How often, in seconds, the Uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 60s. */
		period?: string | null;

		/** The resource submessage for group checks. It can be used instead of a monitored resource, when multiple resources are being monitored. */
		resourceGroup?: ResourceGroup;

		/** The list of regions from which the check will be run. Some regions contain one location, and others contain more than one. If this field is specified, enough regions must be provided to include a minimum of 3 locations. Not specifying this field will result in Uptime checks running from all available regions. */
		selectedRegions?: Array<string>;

		/** Describes a Synthetic Monitor to be invoked by Uptime. */
		syntheticMonitor?: SyntheticMonitorTarget;

		/** Information required for a TCP Uptime check request. */
		tcpCheck?: TcpCheck;

		/** The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). Required. */
		timeout?: string | null;

		/** User-supplied key/value data to be used for organizing and identifying the UptimeCheckConfig objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. */
		userLabels?: {[id: string]: string };
	}

	/** This message configures which resources and services to monitor for availability. */
	export interface UptimeCheckConfigFormProperties {

		/** The type of checkers to use to execute the Uptime check. */
		checkerType: FormControl<UptimeCheckConfigCheckerType | null | undefined>,

		/** A human-friendly name for the Uptime check configuration. The display name should be unique within a Cloud Monitoring Workspace in order to make it easier to identify; however, uniqueness is not enforced. Required. */
		displayName: FormControl<string | null | undefined>,

		/** If this is true, then checks are made only from the 'internal_checkers'. If it is false, then checks are made only from the 'selected_regions'. It is an error to provide 'selected_regions' when is_internal is true, or to provide 'internal_checkers' when is_internal is false. */
		isInternal: FormControl<boolean | null | undefined>,

		/** Identifier. A unique resource name for this Uptime check configuration. The format is: projects/[PROJECT_ID_OR_NUMBER]/uptimeCheckConfigs/[UPTIME_CHECK_ID] [PROJECT_ID_OR_NUMBER] is the Workspace host project associated with the Uptime check.This field should be omitted when creating the Uptime check configuration; on create, the resource name is assigned by the server and included in the response. */
		name: FormControl<string | null | undefined>,

		/** How often, in seconds, the Uptime check is performed. Currently, the only supported values are 60s (1 minute), 300s (5 minutes), 600s (10 minutes), and 900s (15 minutes). Optional, defaults to 60s. */
		period: FormControl<string | null | undefined>,

		/** The maximum amount of time to wait for the request to complete (must be between 1 and 60 seconds). Required. */
		timeout: FormControl<string | null | undefined>,

		/** User-supplied key/value data to be used for organizing and identifying the UptimeCheckConfig objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. */
		userLabels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUptimeCheckConfigFormGroup() {
		return new FormGroup<UptimeCheckConfigFormProperties>({
			checkerType: new FormControl<UptimeCheckConfigCheckerType | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			isInternal: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			period: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
			userLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum UptimeCheckConfigCheckerType { CHECKER_TYPE_UNSPECIFIED = 'CHECKER_TYPE_UNSPECIFIED', STATIC_IP_CHECKERS = 'STATIC_IP_CHECKERS', VPC_CHECKERS = 'VPC_CHECKERS' }


	/** The resource submessage for group checks. It can be used instead of a monitored resource, when multiple resources are being monitored. */
	export interface ResourceGroup {

		/** The group of resources being monitored. Should be only the [GROUP_ID], and not the full-path projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]. */
		groupId?: string | null;

		/** The resource type of the group members. */
		resourceType?: ResourceGroupResourceType | null;
	}

	/** The resource submessage for group checks. It can be used instead of a monitored resource, when multiple resources are being monitored. */
	export interface ResourceGroupFormProperties {

		/** The group of resources being monitored. Should be only the [GROUP_ID], and not the full-path projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID]. */
		groupId: FormControl<string | null | undefined>,

		/** The resource type of the group members. */
		resourceType: FormControl<ResourceGroupResourceType | null | undefined>,
	}
	export function CreateResourceGroupFormGroup() {
		return new FormGroup<ResourceGroupFormProperties>({
			groupId: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<ResourceGroupResourceType | null | undefined>(undefined),
		});

	}

	export enum ResourceGroupResourceType { RESOURCE_TYPE_UNSPECIFIED = 'RESOURCE_TYPE_UNSPECIFIED', INSTANCE = 'INSTANCE', AWS_ELB_LOAD_BALANCER = 'AWS_ELB_LOAD_BALANCER' }


	/** Describes a Synthetic Monitor to be invoked by Uptime. */
	export interface SyntheticMonitorTarget {

		/** A Synthetic Monitor deployed to a Cloud Functions V2 instance. */
		cloudFunctionV2?: CloudFunctionV2Target;
	}

	/** Describes a Synthetic Monitor to be invoked by Uptime. */
	export interface SyntheticMonitorTargetFormProperties {
	}
	export function CreateSyntheticMonitorTargetFormGroup() {
		return new FormGroup<SyntheticMonitorTargetFormProperties>({
		});

	}


	/** Information required for a TCP Uptime check request. */
	export interface TcpCheck {

		/** Information involved in sending ICMP pings alongside public HTTP/TCP checks. For HTTP, the pings are performed for each part of the redirect chain. */
		pingConfig?: PingConfig;

		/** The TCP port on the server against which to run the check. Will be combined with host (specified within the monitored_resource) to construct the full URL. Required. */
		port?: number | null;
	}

	/** Information required for a TCP Uptime check request. */
	export interface TcpCheckFormProperties {

		/** The TCP port on the server against which to run the check. Will be combined with host (specified within the monitored_resource) to construct the full URL. Required. */
		port: FormControl<number | null | undefined>,
	}
	export function CreateTcpCheckFormGroup() {
		return new FormGroup<TcpCheckFormProperties>({
			port: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The protocol for the ListUptimeCheckIps response. */
	export interface ListUptimeCheckIpsResponse {

		/** This field represents the pagination token to retrieve the next page of results. If the value is empty, it means no further results for the request. To retrieve the next page of results, the value of the next_page_token is passed to the subsequent List method call (in the request message's page_token field). NOTE: this field is not yet implemented */
		nextPageToken?: string | null;

		/** The returned list of IP addresses (including region and location) that the checkers run from. */
		uptimeCheckIps?: Array<UptimeCheckIp>;
	}

	/** The protocol for the ListUptimeCheckIps response. */
	export interface ListUptimeCheckIpsResponseFormProperties {

		/** This field represents the pagination token to retrieve the next page of results. If the value is empty, it means no further results for the request. To retrieve the next page of results, the value of the next_page_token is passed to the subsequent List method call (in the request message's page_token field). NOTE: this field is not yet implemented */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListUptimeCheckIpsResponseFormGroup() {
		return new FormGroup<ListUptimeCheckIpsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the region, location, and list of IP addresses where checkers in the location run from. */
	export interface UptimeCheckIp {

		/** The IP address from which the Uptime check originates. This is a fully specified IP address (not an IP address range). Most IP addresses, as of this publication, are in IPv4 format; however, one should not rely on the IP addresses being in IPv4 format indefinitely, and should support interpreting this field in either IPv4 or IPv6 format. */
		ipAddress?: string | null;

		/** A more specific location within the region that typically encodes a particular city/town/metro (and its containing state/province or country) within the broader umbrella region category. */
		location?: string | null;

		/** A broad region category in which the IP address is located. */
		region?: UptimeCheckIpRegion | null;
	}

	/** Contains the region, location, and list of IP addresses where checkers in the location run from. */
	export interface UptimeCheckIpFormProperties {

		/** The IP address from which the Uptime check originates. This is a fully specified IP address (not an IP address range). Most IP addresses, as of this publication, are in IPv4 format; however, one should not rely on the IP addresses being in IPv4 format indefinitely, and should support interpreting this field in either IPv4 or IPv6 format. */
		ipAddress: FormControl<string | null | undefined>,

		/** A more specific location within the region that typically encodes a particular city/town/metro (and its containing state/province or country) within the broader umbrella region category. */
		location: FormControl<string | null | undefined>,

		/** A broad region category in which the IP address is located. */
		region: FormControl<UptimeCheckIpRegion | null | undefined>,
	}
	export function CreateUptimeCheckIpFormGroup() {
		return new FormGroup<UptimeCheckIpFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<UptimeCheckIpRegion | null | undefined>(undefined),
		});

	}

	export enum UptimeCheckIpRegion { REGION_UNSPECIFIED = 'REGION_UNSPECIFIED', USA = 'USA', EUROPE = 'EUROPE', SOUTH_AMERICA = 'SOUTH_AMERICA', ASIA_PACIFIC = 'ASIA_PACIFIC', USA_OREGON = 'USA_OREGON', USA_IOWA = 'USA_IOWA', USA_VIRGINIA = 'USA_VIRGINIA' }


	/** Contains metadata for longrunning operation for the edit Metrics Scope endpoints. */
	export interface OperationMetadata {

		/** The time when the batch request was received. */
		createTime?: string | null;

		/** Current state of the batch operation. */
		state?: OperationMetadataState | null;

		/** The time when the operation result was last updated. */
		updateTime?: string | null;
	}

	/** Contains metadata for longrunning operation for the edit Metrics Scope endpoints. */
	export interface OperationMetadataFormProperties {

		/** The time when the batch request was received. */
		createTime: FormControl<string | null | undefined>,

		/** Current state of the batch operation. */
		state: FormControl<OperationMetadataState | null | undefined>,

		/** The time when the operation result was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<OperationMetadataState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OperationMetadataState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATED = 'CREATED', RUNNING = 'RUNNING', DONE = 'DONE', CANCELLED = 'CANCELLED' }


	/** A point's value columns and time interval. Each point has one or more point values corresponding to the entries in point_descriptors field in the TimeSeriesDescriptor associated with this object. */
	export interface PointData {

		/** Describes a time interval: Reads: A half-open time interval. It includes the end time but excludes the start time: (startTime, endTime]. The start time must be specified, must be earlier than the end time, and should be no older than the data retention period for the metric. Writes: A closed time interval. It extends from the start time to the end time, and includes both: [startTime, endTime]. Valid time intervals depend on the MetricKind (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors#MetricKind) of the metric value. The end time must not be earlier than the start time, and the end time must not be more than 25 hours in the past or more than five minutes in the future. For GAUGE metrics, the startTime value is technically optional; if no value is specified, the start time defaults to the value of the end time, and the interval represents a single point in time. If both start and end times are specified, they must be identical. Such an interval is valid only for GAUGE metrics, which are point-in-time measurements. The end time of a new interval must be at least a millisecond after the end time of the previous interval. For DELTA metrics, the start time and end time must specify a non-zero interval, with subsequent points specifying contiguous and non-overlapping intervals. For DELTA metrics, the start time of the next interval must be at least a millisecond after the end time of the previous interval. For CUMULATIVE metrics, the start time and end time must specify a non-zero interval, with subsequent points specifying the same start time and increasing end times, until an event resets the cumulative value to zero and sets a new start time for the following points. The new start time must be at least a millisecond after the end time of the previous interval. The start time of a new interval must be at least a millisecond after the end time of the previous interval because intervals are closed. If the start time of a new interval is the same as the end time of the previous interval, then data written at the new start time could overwrite data written at the previous end time. */
		timeInterval?: TimeInterval;

		/** The values that make up the point. */
		values?: Array<TypedValue>;
	}

	/** A point's value columns and time interval. Each point has one or more point values corresponding to the entries in point_descriptors field in the TimeSeriesDescriptor associated with this object. */
	export interface PointDataFormProperties {
	}
	export function CreatePointDataFormGroup() {
		return new FormGroup<PointDataFormProperties>({
		});

	}


	/** The QueryTimeSeries request. */
	export interface QueryTimeSeriesRequest {

		/** A positive number that is the maximum number of time_series_data to return. */
		pageSize?: number | null;

		/** If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call. */
		pageToken?: string | null;

		/** Required. The query in the Monitoring Query Language (https://cloud.google.com/monitoring/mql/reference) format. The default time zone is in UTC. */
		query?: string | null;
	}

	/** The QueryTimeSeries request. */
	export interface QueryTimeSeriesRequestFormProperties {

		/** A positive number that is the maximum number of time_series_data to return. */
		pageSize: FormControl<number | null | undefined>,

		/** If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call. */
		pageToken: FormControl<string | null | undefined>,

		/** Required. The query in the Monitoring Query Language (https://cloud.google.com/monitoring/mql/reference) format. The default time zone is in UTC. */
		query: FormControl<string | null | undefined>,
	}
	export function CreateQueryTimeSeriesRequestFormGroup() {
		return new FormGroup<QueryTimeSeriesRequestFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The QueryTimeSeries response. */
	export interface QueryTimeSeriesResponse {

		/** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken?: string | null;

		/** Query execution errors that may have caused the time series data returned to be incomplete. The available data will be available in the response. */
		partialErrors?: Array<Status>;

		/** The time series data. */
		timeSeriesData?: Array<TimeSeriesData>;

		/** A descriptor for the labels and points in a time series. */
		timeSeriesDescriptor?: TimeSeriesDescriptor;
	}

	/** The QueryTimeSeries response. */
	export interface QueryTimeSeriesResponseFormProperties {

		/** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryTimeSeriesResponseFormGroup() {
		return new FormGroup<QueryTimeSeriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the values of a time series associated with a TimeSeriesDescriptor. */
	export interface TimeSeriesData {

		/** The values of the labels in the time series identifier, given in the same order as the label_descriptors field of the TimeSeriesDescriptor associated with this object. Each value must have a value of the type given in the corresponding entry of label_descriptors. */
		labelValues?: Array<LabelValue>;

		/** The points in the time series. */
		pointData?: Array<PointData>;
	}

	/** Represents the values of a time series associated with a TimeSeriesDescriptor. */
	export interface TimeSeriesDataFormProperties {
	}
	export function CreateTimeSeriesDataFormGroup() {
		return new FormGroup<TimeSeriesDataFormProperties>({
		});

	}


	/** A descriptor for the labels and points in a time series. */
	export interface TimeSeriesDescriptor {

		/** Descriptors for the labels. */
		labelDescriptors?: Array<LabelDescriptor>;

		/** Descriptors for the point data value columns. */
		pointDescriptors?: Array<ValueDescriptor>;
	}

	/** A descriptor for the labels and points in a time series. */
	export interface TimeSeriesDescriptorFormProperties {
	}
	export function CreateTimeSeriesDescriptorFormGroup() {
		return new FormGroup<TimeSeriesDescriptorFormProperties>({
		});

	}


	/** A descriptor for the value columns in a data point. */
	export interface ValueDescriptor {

		/** The value key. */
		key?: string | null;

		/** The value stream kind. */
		metricKind?: TimeSeriesMetricKind | null;

		/** The unit in which time_series point values are reported. unit follows the UCUM format for units as seen in https://unitsofmeasure.org/ucum.html. unit is only valid if value_type is INTEGER, DOUBLE, DISTRIBUTION. */
		unit?: string | null;

		/** The value type. */
		valueType?: TimeSeriesValueType | null;
	}

	/** A descriptor for the value columns in a data point. */
	export interface ValueDescriptorFormProperties {

		/** The value key. */
		key: FormControl<string | null | undefined>,

		/** The value stream kind. */
		metricKind: FormControl<TimeSeriesMetricKind | null | undefined>,

		/** The unit in which time_series point values are reported. unit follows the UCUM format for units as seen in https://unitsofmeasure.org/ucum.html. unit is only valid if value_type is INTEGER, DOUBLE, DISTRIBUTION. */
		unit: FormControl<string | null | undefined>,

		/** The value type. */
		valueType: FormControl<TimeSeriesValueType | null | undefined>,
	}
	export function CreateValueDescriptorFormGroup() {
		return new FormGroup<ValueDescriptorFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			metricKind: new FormControl<TimeSeriesMetricKind | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			valueType: new FormControl<TimeSeriesValueType | null | undefined>(undefined),
		});

	}


	/** The SendNotificationChannelVerificationCode request. */
	export interface SendNotificationChannelVerificationCodeRequest {
	}

	/** The SendNotificationChannelVerificationCode request. */
	export interface SendNotificationChannelVerificationCodeRequestFormProperties {
	}
	export function CreateSendNotificationChannelVerificationCodeRequestFormGroup() {
		return new FormGroup<SendNotificationChannelVerificationCodeRequestFormProperties>({
		});

	}


	/** SourceContext represents information about the source of a protobuf element, like the file in which it is defined. */
	export interface SourceContext {

		/** The path-qualified name of the .proto file that contained the associated protobuf element. For example: "google/protobuf/source_context.proto". */
		fileName?: string | null;
	}

	/** SourceContext represents information about the source of a protobuf element, like the file in which it is defined. */
	export interface SourceContextFormProperties {

		/** The path-qualified name of the .proto file that contained the associated protobuf element. For example: "google/protobuf/source_context.proto". */
		fileName: FormControl<string | null | undefined>,
	}
	export function CreateSourceContextFormGroup() {
		return new FormGroup<SourceContextFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The context of a span. This is attached to an Exemplar in Distribution values during aggregation.It contains the name of a span with format: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID]  */
	export interface SpanContext {

		/** The resource name of the span. The format is: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] [TRACE_ID] is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array.[SPAN_ID] is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. */
		spanName?: string | null;
	}

	/** The context of a span. This is attached to an Exemplar in Distribution values during aggregation.It contains the name of a span with format: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID]  */
	export interface SpanContextFormProperties {

		/** The resource name of the span. The format is: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] [TRACE_ID] is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array.[SPAN_ID] is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. */
		spanName: FormControl<string | null | undefined>,
	}
	export function CreateSpanContextFormGroup() {
		return new FormGroup<SpanContextFormProperties>({
			spanName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A protocol buffer message type. */
	export interface Type {

		/** The source edition string, only valid when syntax is SYNTAX_EDITIONS. */
		edition?: string | null;

		/** The list of fields. */
		fields?: Array<Field>;

		/** The fully qualified message name. */
		name?: string | null;

		/** The list of types appearing in oneof definitions in this type. */
		oneofs?: Array<string>;

		/** The protocol buffer options. */
		options?: Array<Option>;

		/** SourceContext represents information about the source of a protobuf element, like the file in which it is defined. */
		sourceContext?: SourceContext;

		/** The source syntax. */
		syntax?: TypeSyntax | null;
	}

	/** A protocol buffer message type. */
	export interface TypeFormProperties {

		/** The source edition string, only valid when syntax is SYNTAX_EDITIONS. */
		edition: FormControl<string | null | undefined>,

		/** The fully qualified message name. */
		name: FormControl<string | null | undefined>,

		/** The source syntax. */
		syntax: FormControl<TypeSyntax | null | undefined>,
	}
	export function CreateTypeFormGroup() {
		return new FormGroup<TypeFormProperties>({
			edition: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			syntax: new FormControl<TypeSyntax | null | undefined>(undefined),
		});

	}

	export enum TypeSyntax { SYNTAX_PROTO2 = 'SYNTAX_PROTO2', SYNTAX_PROTO3 = 'SYNTAX_PROTO3', SYNTAX_EDITIONS = 'SYNTAX_EDITIONS' }


	/** The VerifyNotificationChannel request. */
	export interface VerifyNotificationChannelRequest {

		/** Required. The verification code that was delivered to the channel as a result of invoking the SendNotificationChannelVerificationCode API method or that was retrieved from a verified channel via GetNotificationChannelVerificationCode. For example, one might have "G-123456" or "TKNZGhhd2EyN3I1MnRnMjRv" (in general, one is only guaranteed that the code is valid UTF-8; one should not make any assumptions regarding the structure or format of the code). */
		code?: string | null;
	}

	/** The VerifyNotificationChannel request. */
	export interface VerifyNotificationChannelRequestFormProperties {

		/** Required. The verification code that was delivered to the channel as a result of invoking the SendNotificationChannelVerificationCode API method or that was retrieved from a verified channel via GetNotificationChannelVerificationCode. For example, one might have "G-123456" or "TKNZGhhd2EyN3I1MnRnMjRv" (in general, one is only guaranteed that the code is valid UTF-8; one should not make any assumptions regarding the structure or format of the code). */
		code: FormControl<string | null | undefined>,
	}
	export function CreateVerifyNotificationChannelRequestFormGroup() {
		return new FormGroup<VerifyNotificationChannelRequestFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the list of IP addresses that checkers run from
		 * Get v3/uptimeCheckIps
		 * @param {number} pageSize The maximum number of results to return in a single response. The server may further constrain the maximum number of results returned in a single page. If the page_size is <=0, the server will decide the number of results to be returned. NOTE: this field is not yet implemented
		 * @param {string} pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call. NOTE: this field is not yet implemented
		 * @return {ListUptimeCheckIpsResponse} Successful response
		 */
		Monitoring_uptimeCheckIps_list(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListUptimeCheckIpsResponse> {
			return this.http.get<ListUptimeCheckIpsResponse>(this.baseUri + 'v3/uptimeCheckIps?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Delete the given ServiceLevelObjective.
		 * Delete v3/{name}
		 * @param {string} name Required. Resource name of the ServiceLevelObjective to delete. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME] 
		 * @param {boolean} force If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel). If false, channels that are still referenced by an existing alerting policy will fail to be deleted in a delete operation.
		 * @return {Empty} Successful response
		 */
		Monitoring_services_serviceLevelObjectives_delete(name: string, force: boolean | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '&force=' + force, {});
		}

		/**
		 * Get a ServiceLevelObjective by name.
		 * Get v3/{name}
		 * @param {string} name Required. Resource name of the ServiceLevelObjective to get. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME] 
		 * @param {Monitoring_services_serviceLevelObjectives_getView} view View of the ServiceLevelObjective to return. If DEFAULT, return the ServiceLevelObjective as originally defined. If EXPLICIT and the ServiceLevelObjective is defined in terms of a BasicSli, replace the BasicSli with a RequestBasedSli spelling out how the SLI is computed.
		 * @return {ServiceLevelObjective} Successful response
		 */
		Monitoring_services_serviceLevelObjectives_get(name: string, view: Monitoring_services_serviceLevelObjectives_getView | null | undefined): Observable<ServiceLevelObjective> {
			return this.http.get<ServiceLevelObjective>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, {});
		}

		/**
		 * Update the given ServiceLevelObjective.
		 * Patch v3/{name}
		 * @param {string} name Resource name for this ServiceLevelObjective. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]/serviceLevelObjectives/[SLO_NAME] 
		 * @param {string} updateMask A set of field paths defining which fields to use for the update.
		 * @return {ServiceLevelObjective} Successful response
		 */
		Monitoring_services_serviceLevelObjectives_patch(name: string, updateMask: string | null | undefined, requestBody: ServiceLevelObjective): Observable<ServiceLevelObjective> {
			return this.http.patch<ServiceLevelObjective>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing group. You can change any group attributes except name.
		 * Put v3/{name}
		 * @param {string} name Output only. The name of this group. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] When creating a group, this field is ignored and a new name is created consisting of the project specified in the call to CreateGroup and a unique [GROUP_ID] that is generated automatically.
		 * @param {boolean} validateOnly If true, validate this request but do not update the existing group.
		 * @return {Group} Successful response
		 */
		Monitoring_projects_groups_update(name: string, validateOnly: boolean | null | undefined, requestBody: Group): Observable<Group> {
			return this.http.put<Group>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the existing alerting policies for the workspace.
		 * Get v3/{name}/alertPolicies
		 * @param {string} name Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) whose alert policies are to be listed. The format is: projects/[PROJECT_ID_OR_NUMBER] Note that this field names the parent container in which the alerting policies to be listed are stored. To retrieve a single alerting policy by name, use the GetAlertPolicy operation, instead.
		 * @param {string} filter If provided, this field specifies the criteria that must be met by alert policies to be included in the response.For more details, see sorting and filtering (https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
		 * @param {string} orderBy A comma-separated list of fields by which to sort the result. Supports the same set of field references as the filter field. Entries can be prefixed with a minus sign to sort by the field in descending order.For more details, see sorting and filtering (https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
		 * @param {number} pageSize The maximum number of results to return in a single response.
		 * @param {string} pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call.
		 * @return {ListAlertPoliciesResponse} Successful response
		 */
		Monitoring_projects_alertPolicies_list(name: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAlertPoliciesResponse> {
			return this.http.get<ListAlertPoliciesResponse>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/alertPolicies&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.
		 * Post v3/{name}/alertPolicies
		 * @param {string} name Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is: projects/[PROJECT_ID_OR_NUMBER] Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form /alertPolicies/[ALERT_POLICY_ID], identifying the policy in the container.
		 * @return {AlertPolicy} Successful response
		 */
		Monitoring_projects_alertPolicies_create(name: string, requestBody: AlertPolicy): Observable<AlertPolicy> {
			return this.http.post<AlertPolicy>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/alertPolicies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.
		 * Post v3/{name}/collectdTimeSeries
		 * @param {string} name The project (https://cloud.google.com/monitoring/api/v3#project_name) in which to create the time series. The format is: projects/[PROJECT_ID_OR_NUMBER] 
		 * @return {CreateCollectdTimeSeriesResponse} Successful response
		 */
		Monitoring_projects_collectdTimeSeries_create(name: string, requestBody: CreateCollectdTimeSeriesRequest): Observable<CreateCollectdTimeSeriesResponse> {
			return this.http.post<CreateCollectdTimeSeriesResponse>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/collectdTimeSeries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the existing groups.
		 * Get v3/{name}/groups
		 * @param {string} name Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) whose groups are to be listed. The format is: projects/[PROJECT_ID_OR_NUMBER] 
		 * @param {string} ancestorsOfGroup A group name. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] Returns groups that are ancestors of the specified group. The groups are returned in order, starting with the immediate parent and ending with the most distant ancestor. If the specified group has no immediate parent, the results are empty.
		 * @param {string} childrenOfGroup A group name. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] Returns groups whose parent_name field contains the group name. If no groups have this parent, the results are empty.
		 * @param {string} descendantsOfGroup A group name. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] Returns the descendants of the specified group. This is a superset of the results returned by the children_of_group filter, and includes children-of-children, and so forth.
		 * @param {number} pageSize A positive number that is the maximum number of results to return.
		 * @param {string} pageToken If this field is not empty then it must contain the next_page_token value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
		 * @return {ListGroupsResponse} Successful response
		 */
		Monitoring_projects_groups_list(name: string, ancestorsOfGroup: string | null | undefined, childrenOfGroup: string | null | undefined, descendantsOfGroup: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListGroupsResponse> {
			return this.http.get<ListGroupsResponse>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/groups&ancestorsOfGroup=' + (ancestorsOfGroup == null ? '' : encodeURIComponent(ancestorsOfGroup)) + '&childrenOfGroup=' + (childrenOfGroup == null ? '' : encodeURIComponent(childrenOfGroup)) + '&descendantsOfGroup=' + (descendantsOfGroup == null ? '' : encodeURIComponent(descendantsOfGroup)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new group.
		 * Post v3/{name}/groups
		 * @param {string} name Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) in which to create the group. The format is: projects/[PROJECT_ID_OR_NUMBER] 
		 * @param {boolean} validateOnly If true, validate this request but do not create the group.
		 * @return {Group} Successful response
		 */
		Monitoring_projects_groups_create(name: string, validateOnly: boolean | null | undefined, requestBody: Group): Observable<Group> {
			return this.http.post<Group>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/groups&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the monitored resources that are members of a group.
		 * Get v3/{name}/members
		 * @param {string} name Required. The group whose members are listed. The format is: projects/[PROJECT_ID_OR_NUMBER]/groups/[GROUP_ID] 
		 * @param {string} filter An optional list filter (https://cloud.google.com/monitoring/api/learn_more#filtering) describing the members to be returned. The filter may reference the type, labels, and metadata of monitored resources that comprise the group. For example, to return only resources representing Compute Engine VM instances, use this filter: `resource.type = "gce_instance"` 
		 * @param {string} interval_endTime Required. The end of the time interval.
		 * @param {string} interval_startTime Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
		 * @param {number} pageSize A positive number that is the maximum number of results to return.
		 * @param {string} pageToken If this field is not empty then it must contain the next_page_token value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
		 * @return {ListGroupMembersResponse} Successful response
		 */
		Monitoring_projects_groups_members_list(name: string, filter: string | null | undefined, interval_endTime: string | null | undefined, interval_startTime: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListGroupMembersResponse> {
			return this.http.get<ListGroupMembersResponse>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/members&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&interval_endTime=' + (interval_endTime == null ? '' : encodeURIComponent(interval_endTime)) + '&interval_startTime=' + (interval_startTime == null ? '' : encodeURIComponent(interval_startTime)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists metric descriptors that match a filter.
		 * Get v3/{name}/metricDescriptors
		 * @param {string} name Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] 
		 * @param {string} filter If this field is empty, all custom and system-defined metric descriptors are returned. Otherwise, the filter (https://cloud.google.com/monitoring/api/v3/filters) specifies which metric descriptors are to be returned. For example, the following filter matches all custom metrics (https://cloud.google.com/monitoring/custom-metrics): metric.type = starts_with("custom.googleapis.com/") 
		 * @param {number} pageSize A positive number that is the maximum number of results to return. The default and maximum value is 10,000. If a page_size <= 0 or > 10,000 is submitted, will instead return a maximum of 10,000 results.
		 * @param {string} pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
		 * @return {ListMetricDescriptorsResponse} Successful response
		 */
		Monitoring_projects_metricDescriptors_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListMetricDescriptorsResponse> {
			return this.http.get<ListMetricDescriptorsResponse>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/metricDescriptors&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.
		 * Post v3/{name}/metricDescriptors
		 * @param {string} name Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: 4 projects/PROJECT_ID_OR_NUMBER
		 * @return {MetricDescriptor} Successful response
		 */
		Monitoring_projects_metricDescriptors_create(name: string, requestBody: MetricDescriptor): Observable<MetricDescriptor> {
			return this.http.post<MetricDescriptor>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/metricDescriptors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists monitored resource descriptors that match a filter.
		 * Get v3/{name}/monitoredResourceDescriptors
		 * @param {string} name Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] 
		 * @param {string} filter An optional filter (https://cloud.google.com/monitoring/api/v3/filters) describing the descriptors to be returned. The filter can reference the descriptor's type and labels. For example, the following filter returns only Google Compute Engine descriptors that have an id label: resource.type = starts_with("gce_") AND resource.label:id 
		 * @param {number} pageSize A positive number that is the maximum number of results to return.
		 * @param {string} pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
		 * @return {ListMonitoredResourceDescriptorsResponse} Successful response
		 */
		Monitoring_projects_monitoredResourceDescriptors_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListMonitoredResourceDescriptorsResponse> {
			return this.http.get<ListMonitoredResourceDescriptorsResponse>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/monitoredResourceDescriptors&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.
		 * Get v3/{name}/notificationChannelDescriptors
		 * @param {string} name Required. The REST resource name of the parent from which to retrieve the notification channel descriptors. The expected syntax is: projects/[PROJECT_ID_OR_NUMBER] Note that this names (https://cloud.google.com/monitoring/api/v3#project_name) the parent container in which to look for the descriptors; to retrieve a single descriptor by name, use the GetNotificationChannelDescriptor operation, instead.
		 * @param {number} pageSize The maximum number of results to return in a single response. If not set to a positive number, a reasonable value will be chosen by the service.
		 * @param {string} pageToken If non-empty, page_token must contain a value returned as the next_page_token in a previous response to request the next set of results.
		 * @return {ListNotificationChannelDescriptorsResponse} Successful response
		 */
		Monitoring_projects_notificationChannelDescriptors_list(name: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListNotificationChannelDescriptorsResponse> {
			return this.http.get<ListNotificationChannelDescriptorsResponse>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/notificationChannelDescriptors&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists the notification channels that have been created for the project. To list the types of notification channels that are supported, use the ListNotificationChannelDescriptors method.
		 * Get v3/{name}/notificationChannels
		 * @param {string} name Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] This names the container in which to look for the notification channels; it does not name a specific channel. To query a specific channel by REST resource name, use the GetNotificationChannel operation.
		 * @param {string} filter If provided, this field specifies the criteria that must be met by notification channels to be included in the response.For more details, see sorting and filtering (https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
		 * @param {string} orderBy A comma-separated list of fields by which to sort the result. Supports the same set of fields as in filter. Entries can be prefixed with a minus sign to sort in descending rather than ascending order.For more details, see sorting and filtering (https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
		 * @param {number} pageSize The maximum number of results to return in a single response. If not set to a positive number, a reasonable value will be chosen by the service.
		 * @param {string} pageToken If non-empty, page_token must contain a value returned as the next_page_token in a previous response to request the next set of results.
		 * @return {ListNotificationChannelsResponse} Successful response
		 */
		Monitoring_projects_notificationChannels_list(name: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListNotificationChannelsResponse> {
			return this.http.get<ListNotificationChannelsResponse>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/notificationChannels&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.
		 * Post v3/{name}/notificationChannels
		 * @param {string} name Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] This names the container into which the channel will be written, this does not name the newly created channel. The resulting channel's name will have a normalized version of this field as a prefix, but will add /notificationChannels/[CHANNEL_ID] to identify the channel.
		 * @return {NotificationChannel} Successful response
		 */
		Monitoring_projects_notificationChannels_create(name: string, requestBody: NotificationChannel): Observable<NotificationChannel> {
			return this.http.post<NotificationChannel>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/notificationChannels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists time series that match a filter.
		 * Get v3/{name}/timeSeries
		 * @param {string} name Required. The project (https://cloud.google.com/monitoring/api/v3#project_name), organization or folder on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] organizations/[ORGANIZATION_ID] folders/[FOLDER_ID] 
		 * @param {string} aggregation_alignmentPeriod The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies.
		 * @param {AggregationCrossSeriesReducer} aggregation_crossSeriesReducer The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned.
		 * @param {Array<string>} aggregation_groupByFields The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored.
		 * @param {AggregationPerSeriesAligner} aggregation_perSeriesAligner An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned.
		 * @param {string} filter Required. A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) that specifies which time series should be returned. The filter must specify a single metric type, and can additionally specify metric labels and other information. For example: metric.type = "compute.googleapis.com/instance/cpu/usage_time" AND metric.labels.instance_name = "my-instance-name" 
		 * @param {string} interval_endTime Required. The end of the time interval.
		 * @param {string} interval_startTime Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
		 * @param {string} orderBy Unsupported: must be left blank. The points in each time series are currently returned in reverse time order (most recent to oldest).
		 * @param {number} pageSize A positive number that is the maximum number of results to return. If page_size is empty or more than 100,000 results, the effective page_size is 100,000 results. If view is set to FULL, this is the maximum number of Points returned. If view is set to HEADERS, this is the maximum number of TimeSeries returned.
		 * @param {string} pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
		 * @param {string} secondaryAggregation_alignmentPeriod The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 104 weeks (2 years) for charts, and 90,000 seconds (25 hours) for alerting policies.
		 * @param {AggregationCrossSeriesReducer} secondaryAggregation_crossSeriesReducer The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned.
		 * @param {Array<string>} secondaryAggregation_groupByFields The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored.
		 * @param {AggregationPerSeriesAligner} secondaryAggregation_perSeriesAligner An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned.
		 * @param {Monitoring_projects_timeSeries_listView} view Required. Specifies which information is returned about the time series.
		 * @return {ListTimeSeriesResponse} Successful response
		 */
		Monitoring_projects_timeSeries_list(name: string, aggregation_alignmentPeriod: string | null | undefined, aggregation_crossSeriesReducer: AggregationCrossSeriesReducer | null | undefined, aggregation_groupByFields: Array<string> | null | undefined, aggregation_perSeriesAligner: AggregationPerSeriesAligner | null | undefined, filter: string | null | undefined, interval_endTime: string | null | undefined, interval_startTime: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, secondaryAggregation_alignmentPeriod: string | null | undefined, secondaryAggregation_crossSeriesReducer: AggregationCrossSeriesReducer | null | undefined, secondaryAggregation_groupByFields: Array<string> | null | undefined, secondaryAggregation_perSeriesAligner: AggregationPerSeriesAligner | null | undefined, view: Monitoring_projects_timeSeries_listView | null | undefined): Observable<ListTimeSeriesResponse> {
			return this.http.get<ListTimeSeriesResponse>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/timeSeries&aggregation_alignmentPeriod=' + (aggregation_alignmentPeriod == null ? '' : encodeURIComponent(aggregation_alignmentPeriod)) + '&aggregation_crossSeriesReducer=' + aggregation_crossSeriesReducer + '&' + aggregation_groupByFields?.map(z => `aggregation.groupByFields=${encodeURIComponent(z)}`).join('&') + '&aggregation_perSeriesAligner=' + aggregation_perSeriesAligner + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&interval_endTime=' + (interval_endTime == null ? '' : encodeURIComponent(interval_endTime)) + '&interval_startTime=' + (interval_startTime == null ? '' : encodeURIComponent(interval_startTime)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&secondaryAggregation_alignmentPeriod=' + (secondaryAggregation_alignmentPeriod == null ? '' : encodeURIComponent(secondaryAggregation_alignmentPeriod)) + '&secondaryAggregation_crossSeriesReducer=' + secondaryAggregation_crossSeriesReducer + '&' + secondaryAggregation_groupByFields?.map(z => `secondaryAggregation.groupByFields=${encodeURIComponent(z)}`).join('&') + '&secondaryAggregation_perSeriesAligner=' + secondaryAggregation_perSeriesAligner + '&view=' + view, {});
		}

		/**
		 * Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This method does not support resource locations constraint of an organization policy (https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations#setting_the_organization_policy).
		 * Post v3/{name}/timeSeries
		 * @param {string} name Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] 
		 * @return {Empty} Successful response
		 */
		Monitoring_projects_timeSeries_create(name: string, requestBody: CreateTimeSeriesRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/timeSeries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.
		 * Post v3/{name}/timeSeries:createService
		 * @param {string} name Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] 
		 * @return {Empty} Successful response
		 */
		Monitoring_projects_timeSeries_createService(name: string, requestBody: CreateTimeSeriesRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/timeSeries:createService', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Queries time series using Monitoring Query Language.
		 * Post v3/{name}/timeSeries:query
		 * @param {string} name Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] 
		 * @return {QueryTimeSeriesResponse} Successful response
		 */
		Monitoring_projects_timeSeries_query(name: string, requestBody: QueryTimeSeriesRequest): Observable<QueryTimeSeriesResponse> {
			return this.http.post<QueryTimeSeriesResponse>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '/timeSeries:query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.
		 * Post v3/{name}:getVerificationCode
		 * @param {string} name Required. The notification channel for which a verification code is to be generated and retrieved. This must name a channel that is already verified; if the specified channel is not verified, the request will fail.
		 * @return {GetNotificationChannelVerificationCodeResponse} Successful response
		 */
		Monitoring_projects_notificationChannels_getVerificationCode(name: string, requestBody: GetNotificationChannelVerificationCodeRequest): Observable<GetNotificationChannelVerificationCodeResponse> {
			return this.http.post<GetNotificationChannelVerificationCodeResponse>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + ':getVerificationCode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.
		 * Post v3/{name}:sendVerificationCode
		 * @param {string} name Required. The notification channel to which to send a verification code.
		 * @return {Empty} Successful response
		 */
		Monitoring_projects_notificationChannels_sendVerificationCode(name: string, requestBody: SendNotificationChannelVerificationCodeRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + ':sendVerificationCode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.
		 * Post v3/{name}:verify
		 * @param {string} name Required. The notification channel to verify.
		 * @return {NotificationChannel} Successful response
		 */
		Monitoring_projects_notificationChannels_verify(name: string, requestBody: VerifyNotificationChannelRequest): Observable<NotificationChannel> {
			return this.http.post<NotificationChannel>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + ':verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the ServiceLevelObjectives for the given Service.
		 * Get v3/{parent}/serviceLevelObjectives
		 * @param {string} parent Required. Resource name of the parent containing the listed SLOs, either a project or a Monitoring Metrics Scope. The formats are: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID] workspaces/[HOST_PROJECT_ID_OR_NUMBER]/services/- 
		 * @param {string} filter A filter specifying what ServiceLevelObjectives to return.
		 * @param {number} pageSize A non-negative number that is the maximum number of results to return. When 0, use default page size.
		 * @param {string} pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
		 * @param {Monitoring_services_serviceLevelObjectives_getView} view View of the ServiceLevelObjectives to return. If DEFAULT, return each ServiceLevelObjective as originally defined. If EXPLICIT and the ServiceLevelObjective is defined in terms of a BasicSli, replace the BasicSli with a RequestBasedSli spelling out how the SLI is computed.
		 * @return {ListServiceLevelObjectivesResponse} Successful response
		 */
		Monitoring_services_serviceLevelObjectives_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Monitoring_services_serviceLevelObjectives_getView | null | undefined): Observable<ListServiceLevelObjectivesResponse> {
			return this.http.get<ListServiceLevelObjectivesResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/serviceLevelObjectives&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Create a ServiceLevelObjective for the given Service.
		 * Post v3/{parent}/serviceLevelObjectives
		 * @param {string} parent Required. Resource name of the parent Service. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID] 
		 * @param {string} serviceLevelObjectiveId Optional. The ServiceLevelObjective id to use for this ServiceLevelObjective. If omitted, an id will be generated instead. Must match the pattern ^[a-zA-Z0-9-_:.]+$
		 * @return {ServiceLevelObjective} Successful response
		 */
		Monitoring_services_serviceLevelObjectives_create(parent: string, serviceLevelObjectiveId: string | null | undefined, requestBody: ServiceLevelObjective): Observable<ServiceLevelObjective> {
			return this.http.post<ServiceLevelObjective>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/serviceLevelObjectives&serviceLevelObjectiveId=' + (serviceLevelObjectiveId == null ? '' : encodeURIComponent(serviceLevelObjectiveId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Services for this Metrics Scope.
		 * Get v3/{parent}/services
		 * @param {string} parent Required. Resource name of the parent containing the listed services, either a project (https://cloud.google.com/monitoring/api/v3#project_name) or a Monitoring Metrics Scope. The formats are: projects/[PROJECT_ID_OR_NUMBER] workspaces/[HOST_PROJECT_ID_OR_NUMBER] 
		 * @param {string} filter A filter specifying what Services to return. The filter supports filtering on a particular service-identifier type or one of its attributes.To filter on a particular service-identifier type, the identifier_case refers to which option in the identifier field is populated. For example, the filter identifier_case = "CUSTOM" would match all services with a value for the custom field. Valid options include "CUSTOM", "APP_ENGINE", "MESH_ISTIO", and the other options listed at https://cloud.google.com/monitoring/api/ref_v3/rest/v3/services#ServiceTo filter on an attribute of a service-identifier type, apply the filter name by using the snake case of the service-identifier type and the attribute of that service-identifier type, and join the two with a period. For example, to filter by the meshUid field of the MeshIstio service-identifier type, you must filter on mesh_istio.mesh_uid = "123" to match all services with mesh UID "123". Service-identifier types and their attributes are described at https://cloud.google.com/monitoring/api/ref_v3/rest/v3/services#Service
		 * @param {number} pageSize A non-negative number that is the maximum number of results to return. When 0, use default page size.
		 * @param {string} pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
		 * @return {ListServicesResponse} Successful response
		 */
		Monitoring_services_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListServicesResponse> {
			return this.http.get<ListServicesResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a Service.
		 * Post v3/{parent}/services
		 * @param {string} parent Required. Resource name (https://cloud.google.com/monitoring/api/v3#project_name) of the parent Metrics Scope. The format is: projects/[PROJECT_ID_OR_NUMBER] 
		 * @param {string} serviceId Optional. The Service id to use for this Service. If omitted, an id will be generated instead. Must match the pattern [a-z0-9\-]+
		 * @return {Service} Successful response
		 */
		Monitoring_services_create(parent: string, serviceId: string | null | undefined, requestBody: Service): Observable<Service> {
			return this.http.post<Service>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&serviceId=' + (serviceId == null ? '' : encodeURIComponent(serviceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Snoozes associated with a project. Can optionally pass in filter, which specifies predicates to match Snoozes.
		 * Get v3/{parent}/snoozes
		 * @param {string} parent Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) whose Snoozes should be listed. The format is: projects/[PROJECT_ID_OR_NUMBER] 
		 * @param {string} filter Optional. Optional filter to restrict results to the given criteria. The following fields are supported. interval.start_time interval.end_timeFor example: ``` interval.start_time > "2022-03-11T00:00:00-08:00" AND interval.end_time < "2022-03-12T00:00:00-08:00" ``` 
		 * @param {number} pageSize Optional. The maximum number of results to return for a single query. The server may further constrain the maximum number of results returned in a single page. The value should be in the range 1, 1000. If the value given is outside this range, the server will decide the number of results to be returned.
		 * @param {string} pageToken Optional. The next_page_token from a previous call to ListSnoozesRequest to get the next page of results.
		 * @return {ListSnoozesResponse} Successful response
		 */
		Monitoring_projects_snoozes_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSnoozesResponse> {
			return this.http.get<ListSnoozesResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/snoozes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Snooze that will prevent alerts, which match the provided criteria, from being opened. The Snooze applies for a specific time interval.
		 * Post v3/{parent}/snoozes
		 * @param {string} parent Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) in which a Snooze should be created. The format is: projects/[PROJECT_ID_OR_NUMBER] 
		 * @return {Snooze} Successful response
		 */
		Monitoring_projects_snoozes_create(parent: string, requestBody: Snooze): Observable<Snooze> {
			return this.http.post<Snooze>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/snoozes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).
		 * Get v3/{parent}/uptimeCheckConfigs
		 * @param {string} parent Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) whose Uptime check configurations are listed. The format is: projects/[PROJECT_ID_OR_NUMBER] 
		 * @param {string} filter If provided, this field specifies the criteria that must be met by uptime checks to be included in the response.For more details, see Filtering syntax (https://cloud.google.com/monitoring/api/v3/sorting-and-filtering#filter_syntax).
		 * @param {number} pageSize The maximum number of results to return in a single response. The server may further constrain the maximum number of results returned in a single page. If the page_size is <=0, the server will decide the number of results to be returned.
		 * @param {string} pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return more results from the previous method call.
		 * @return {ListUptimeCheckConfigsResponse} Successful response
		 */
		Monitoring_projects_uptimeCheckConfigs_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListUptimeCheckConfigsResponse> {
			return this.http.get<ListUptimeCheckConfigsResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/uptimeCheckConfigs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Uptime check configuration.
		 * Post v3/{parent}/uptimeCheckConfigs
		 * @param {string} parent Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) in which to create the Uptime check. The format is: projects/[PROJECT_ID_OR_NUMBER] 
		 * @return {UptimeCheckConfig} Successful response
		 */
		Monitoring_projects_uptimeCheckConfigs_create(parent: string, requestBody: UptimeCheckConfig): Observable<UptimeCheckConfig> {
			return this.http.post<UptimeCheckConfig>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/uptimeCheckConfigs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Monitoring_services_serviceLevelObjectives_getView { VIEW_UNSPECIFIED = 'VIEW_UNSPECIFIED', FULL = 'FULL', EXPLICIT = 'EXPLICIT' }

	export enum Monitoring_projects_timeSeries_listView { FULL = 'FULL', HEADERS = 'HEADERS' }

}

