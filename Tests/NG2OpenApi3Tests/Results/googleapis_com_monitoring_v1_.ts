import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes how to combine multiple time series to provide a different view of the data. Aggregation of time series is done in two steps. First, each time series in the set is aligned to the same time interval boundaries, then the set of time series is optionally reduced in number.Alignment consists of applying the per_series_aligner operation to each time series after its data has been divided into regular alignment_period time intervals. This process takes all of the data points in an alignment period, applies a mathematical transformation such as averaging, minimum, maximum, delta, etc., and converts them into a single data point per period.Reduction is when the aligned and transformed time series can optionally be combined, reducing the number of time series through similar mathematical transformations. Reduction involves applying a cross_series_reducer to all the time series, optionally sorting the time series into subsets with group_by_fields, and applying the reducer to each subset.The raw time series data can contain a huge amount of information from multiple sources. Alignment and reduction transforms this mass of data into a more manageable and representative collection of data, for example "the 95% latency across the average of all tasks in a cluster". This representative data can be more easily graphed and comprehended, and the individual time series data is still available for later drilldown. For more details, see Filtering and aggregation (https://cloud.google.com/monitoring/api/v3/aggregation). */
	export interface Aggregation {

		/** The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 2 years, or 104 weeks. */
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

		/** The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 2 years, or 104 weeks. */
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

	export enum AggregationCrossSeriesReducer { REDUCE_NONE = 0, REDUCE_MEAN = 1, REDUCE_MIN = 2, REDUCE_MAX = 3, REDUCE_SUM = 4, REDUCE_STDDEV = 5, REDUCE_COUNT = 6, REDUCE_COUNT_TRUE = 7, REDUCE_COUNT_FALSE = 8, REDUCE_FRACTION_TRUE = 9, REDUCE_PERCENTILE_99 = 10, REDUCE_PERCENTILE_95 = 11, REDUCE_PERCENTILE_50 = 12, REDUCE_PERCENTILE_05 = 13 }

	export enum AggregationPerSeriesAligner { ALIGN_NONE = 0, ALIGN_DELTA = 1, ALIGN_RATE = 2, ALIGN_INTERPOLATE = 3, ALIGN_NEXT_OLDER = 4, ALIGN_MIN = 5, ALIGN_MAX = 6, ALIGN_MEAN = 7, ALIGN_COUNT = 8, ALIGN_SUM = 9, ALIGN_STDDEV = 10, ALIGN_COUNT_TRUE = 11, ALIGN_COUNT_FALSE = 12, ALIGN_FRACTION_TRUE = 13, ALIGN_PERCENTILE_99 = 14, ALIGN_PERCENTILE_95 = 15, ALIGN_PERCENTILE_50 = 16, ALIGN_PERCENTILE_05 = 17, ALIGN_PERCENT_CHANGE = 18 }


	/** Preview: An identifier for an aggregation function. Aggregation functions are SQL functions that group or transform data from multiple points to a single point. This is a preview feature and may be subject to change before final release. */
	export interface AggregationFunction {

		/** Optional. Parameters applied to the aggregation function. Only used for functions that require them. */
		parameters?: Array<Parameter>;

		/** Required. The type of aggregation function, must be one of the following: "none" - no function. "percentile" - APPROX_QUANTILES() - 1 parameter numeric value "average" - AVG() "count" - COUNT() "count-distinct" - COUNT(DISTINCT) "count-distinct-approx" - APPROX_COUNT_DISTINCT() "max" - MAX() "min" - MIN() "sum" - SUM() */
		type?: string | null;
	}

	/** Preview: An identifier for an aggregation function. Aggregation functions are SQL functions that group or transform data from multiple points to a single point. This is a preview feature and may be subject to change before final release. */
	export interface AggregationFunctionFormProperties {

		/** Required. The type of aggregation function, must be one of the following: "none" - no function. "percentile" - APPROX_QUANTILES() - 1 parameter numeric value "average" - AVG() "count" - COUNT() "count-distinct" - COUNT(DISTINCT) "count-distinct-approx" - APPROX_COUNT_DISTINCT() "max" - MAX() "min" - MIN() "sum" - SUM() */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAggregationFunctionFormGroup() {
		return new FormGroup<AggregationFunctionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Preview: Parameter value applied to the aggregation function. This is a preview feature and may be subject to change before final release. */
	export interface Parameter {

		/** A floating-point parameter value. */
		doubleValue?: number | null;

		/** An integer parameter value. */
		intValue?: string | null;
	}

	/** Preview: Parameter value applied to the aggregation function. This is a preview feature and may be subject to change before final release. */
	export interface ParameterFormProperties {

		/** A floating-point parameter value. */
		doubleValue: FormControl<number | null | undefined>,

		/** An integer parameter value. */
		intValue: FormControl<string | null | undefined>,
	}
	export function CreateParameterFormGroup() {
		return new FormGroup<ParameterFormProperties>({
			doubleValue: new FormControl<number | null | undefined>(undefined),
			intValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A chart that displays alert policy data. */
	export interface AlertChart {

		/** Required. The resource name of the alert policy. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID] */
		name?: string | null;
	}

	/** A chart that displays alert policy data. */
	export interface AlertChartFormProperties {

		/** Required. The resource name of the alert policy. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID] */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAlertChartFormGroup() {
		return new FormGroup<AlertChartFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A chart axis. */
	export interface Axis {

		/** The label of the axis. */
		label?: string | null;

		/** The axis scale. By default, a linear scale is used. */
		scale?: AxisScale | null;
	}

	/** A chart axis. */
	export interface AxisFormProperties {

		/** The label of the axis. */
		label: FormControl<string | null | undefined>,

		/** The axis scale. By default, a linear scale is used. */
		scale: FormControl<AxisScale | null | undefined>,
	}
	export function CreateAxisFormGroup() {
		return new FormGroup<AxisFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			scale: new FormControl<AxisScale | null | undefined>(undefined),
		});

	}

	export enum AxisScale { SCALE_UNSPECIFIED = 0, LINEAR = 1, LOG10 = 2 }


	/** Preview: A breakdown is an aggregation applied to the measures over a specified column. A breakdown can result in multiple series across a category for the provided measure. This is a preview feature and may be subject to change before final release. */
	export interface Breakdown {

		/** Preview: An identifier for an aggregation function. Aggregation functions are SQL functions that group or transform data from multiple points to a single point. This is a preview feature and may be subject to change before final release. */
		aggregationFunction?: AggregationFunction;

		/** Required. The name of the column in the dataset containing the breakdown values. */
		column?: string | null;

		/** Required. A limit to the number of breakdowns. If set to zero then all possible breakdowns are applied. The list of breakdowns is dependent on the value of the sort_order field. */
		limit?: number | null;

		/** Required. The sort order is applied to the values of the breakdown column. */
		sortOrder?: BreakdownSortOrder | null;
	}

	/** Preview: A breakdown is an aggregation applied to the measures over a specified column. A breakdown can result in multiple series across a category for the provided measure. This is a preview feature and may be subject to change before final release. */
	export interface BreakdownFormProperties {

		/** Required. The name of the column in the dataset containing the breakdown values. */
		column: FormControl<string | null | undefined>,

		/** Required. A limit to the number of breakdowns. If set to zero then all possible breakdowns are applied. The list of breakdowns is dependent on the value of the sort_order field. */
		limit: FormControl<number | null | undefined>,

		/** Required. The sort order is applied to the values of the breakdown column. */
		sortOrder: FormControl<BreakdownSortOrder | null | undefined>,
	}
	export function CreateBreakdownFormGroup() {
		return new FormGroup<BreakdownFormProperties>({
			column: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			sortOrder: new FormControl<BreakdownSortOrder | null | undefined>(undefined),
		});

	}

	export enum BreakdownSortOrder { SORT_ORDER_UNSPECIFIED = 0, SORT_ORDER_NONE = 1, SORT_ORDER_ASCENDING = 2, SORT_ORDER_DESCENDING = 3 }


	/** Options to control visual rendering of a chart. */
	export interface ChartOptions {

		/** Preview: Configures whether the charted values are shown on the horizontal or vertical axis. By default, values are represented the vertical axis. This is a preview feature and may be subject to change before final release. */
		displayHorizontal?: boolean | null;

		/** The chart mode. */
		mode?: ChartOptionsMode | null;
	}

	/** Options to control visual rendering of a chart. */
	export interface ChartOptionsFormProperties {

		/** Preview: Configures whether the charted values are shown on the horizontal or vertical axis. By default, values are represented the vertical axis. This is a preview feature and may be subject to change before final release. */
		displayHorizontal: FormControl<boolean | null | undefined>,

		/** The chart mode. */
		mode: FormControl<ChartOptionsMode | null | undefined>,
	}
	export function CreateChartOptionsFormGroup() {
		return new FormGroup<ChartOptionsFormProperties>({
			displayHorizontal: new FormControl<boolean | null | undefined>(undefined),
			mode: new FormControl<ChartOptionsMode | null | undefined>(undefined),
		});

	}

	export enum ChartOptionsMode { MODE_UNSPECIFIED = 0, COLOR = 1, X_RAY = 2, STATS = 3 }


	/** A widget that groups the other widgets. All widgets that are within the area spanned by the grouping widget are considered member widgets. */
	export interface CollapsibleGroup {

		/** The collapsed state of the widget on first page load. */
		collapsed?: boolean | null;
	}

	/** A widget that groups the other widgets. All widgets that are within the area spanned by the grouping widget are considered member widgets. */
	export interface CollapsibleGroupFormProperties {

		/** The collapsed state of the widget on first page load. */
		collapsed: FormControl<boolean | null | undefined>,
	}
	export function CreateCollapsibleGroupFormGroup() {
		return new FormGroup<CollapsibleGroupFormProperties>({
			collapsed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Defines the layout properties and content for a column. */
	export interface Column {

		/** The relative weight of this column. The column weight is used to adjust the width of columns on the screen (relative to peers). Greater the weight, greater the width of the column on the screen. If omitted, a value of 1 is used while rendering. */
		weight?: string | null;

		/** The display widgets arranged vertically in this column. */
		widgets?: Array<Widget>;
	}

	/** Defines the layout properties and content for a column. */
	export interface ColumnFormProperties {

		/** The relative weight of this column. The column weight is used to adjust the width of columns on the screen (relative to peers). Greater the weight, greater the width of the column on the screen. If omitted, a value of 1 is used while rendering. */
		weight: FormControl<string | null | undefined>,
	}
	export function CreateColumnFormGroup() {
		return new FormGroup<ColumnFormProperties>({
			weight: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Widget contains a single dashboard component and configuration of how to present the component in the dashboard. */
	export interface Widget {

		/** A chart that displays alert policy data. */
		alertChart?: AlertChart;

		/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
		blank?: Empty;

		/** A widget that groups the other widgets. All widgets that are within the area spanned by the grouping widget are considered member widgets. */
		collapsibleGroup?: CollapsibleGroup;

		/** A widget that displays a list of error groups. */
		errorReportingPanel?: ErrorReportingPanel;

		/** Optional. The widget id. Ids may be made up of alphanumerics, dashes and underscores. Widget ids are optional. */
		id?: string | null;

		/** A widget that displays a list of incidents */
		incidentList?: IncidentList;

		/** A widget that displays a stream of log. */
		logsPanel?: LogsPanel;

		/** A widget that displays timeseries data as a pie or a donut. */
		pieChart?: PieChart;

		/** A widget showing the latest value of a metric, and how this value relates to one or more thresholds. */
		scorecard?: Scorecard;

		/** A widget that defines a new section header. Sections populate a table of contents and allow easier navigation of long-form content. */
		sectionHeader?: SectionHeader;

		/** A widget that groups the other widgets by using a dropdown menu. All widgets that are within the area spanned by the grouping widget are considered member widgets. */
		singleViewGroup?: SingleViewGroup;

		/** A widget that displays textual content. */
		text?: Text;

		/** A table that displays time series data. */
		timeSeriesTable?: TimeSeriesTable;

		/** Optional. The title of the widget. */
		title?: string | null;

		/** A chart that displays data on a 2D (X and Y axes) plane. */
		xyChart?: XyChart;
	}

	/** Widget contains a single dashboard component and configuration of how to present the component in the dashboard. */
	export interface WidgetFormProperties {

		/** Optional. The widget id. Ids may be made up of alphanumerics, dashes and underscores. Widget ids are optional. */
		id: FormControl<string | null | undefined>,

		/** Optional. The title of the widget. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateWidgetFormGroup() {
		return new FormGroup<WidgetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
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


	/** A widget that displays a list of error groups. */
	export interface ErrorReportingPanel {

		/** The resource name of the Google Cloud Platform project. Written as projects/{projectID} or projects/{projectNumber}, where {projectID} and {projectNumber} can be found in the Google Cloud console (https://support.google.com/cloud/answer/6158840).Examples: projects/my-project-123, projects/5551234. */
		projectNames?: Array<string>;

		/** An identifier of the service, such as the name of the executable, job, or Google App Engine service name. This field is expected to have a low number of values that are relatively stable over time, as opposed to version, which can be changed whenever new code is deployed.Contains the service name for error reports extracted from Google App Engine logs or default if the App Engine default service is used. */
		services?: Array<string>;

		/** Represents the source code version that the developer provided, which could represent a version label or a Git SHA-1 hash, for example. For App Engine standard environment, the version is set to the version of the app. */
		versions?: Array<string>;
	}

	/** A widget that displays a list of error groups. */
	export interface ErrorReportingPanelFormProperties {
	}
	export function CreateErrorReportingPanelFormGroup() {
		return new FormGroup<ErrorReportingPanelFormProperties>({
		});

	}


	/** A widget that displays a list of incidents */
	export interface IncidentList {

		/** Optional. The monitored resource for which incidents are listed. The resource doesn't need to be fully specified. That is, you can specify the resource type but not the values of the resource labels. The resource type and labels are used for filtering. */
		monitoredResources?: Array<MonitoredResource>;

		/** Optional. A list of alert policy names to filter the incident list by. Don't include the project ID prefix in the policy name. For example, use alertPolicies/utilization. */
		policyNames?: Array<string>;
	}

	/** A widget that displays a list of incidents */
	export interface IncidentListFormProperties {
	}
	export function CreateIncidentListFormGroup() {
		return new FormGroup<IncidentListFormProperties>({
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


	/** A widget that displays a stream of log. */
	export interface LogsPanel {

		/** A filter that chooses which log entries to return. See Advanced Logs Queries (https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries. */
		filter?: string | null;

		/** The names of logging resources to collect logs for. Currently only projects are supported. If empty, the widget will default to the host project. */
		resourceNames?: Array<string>;
	}

	/** A widget that displays a stream of log. */
	export interface LogsPanelFormProperties {

		/** A filter that chooses which log entries to return. See Advanced Logs Queries (https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries. */
		filter: FormControl<string | null | undefined>,
	}
	export function CreateLogsPanelFormGroup() {
		return new FormGroup<LogsPanelFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A widget that displays timeseries data as a pie or a donut. */
	export interface PieChart {

		/** Required. Indicates the visualization type for the PieChart. */
		chartType?: PieChartChartType | null;

		/** Required. The queries for the chart's data. */
		dataSets?: Array<PieChartDataSet>;

		/** Optional. Indicates whether or not the pie chart should show slices' labels */
		showLabels?: boolean | null;
	}

	/** A widget that displays timeseries data as a pie or a donut. */
	export interface PieChartFormProperties {

		/** Required. Indicates the visualization type for the PieChart. */
		chartType: FormControl<PieChartChartType | null | undefined>,

		/** Optional. Indicates whether or not the pie chart should show slices' labels */
		showLabels: FormControl<boolean | null | undefined>,
	}
	export function CreatePieChartFormGroup() {
		return new FormGroup<PieChartFormProperties>({
			chartType: new FormControl<PieChartChartType | null | undefined>(undefined),
			showLabels: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PieChartChartType { PIE_CHART_TYPE_UNSPECIFIED = 0, PIE = 1, DONUT = 2 }


	/** Groups a time series query definition. */
	export interface PieChartDataSet {

		/** A dimension is a structured label, class, or category for a set of measurements in your data. */
		dimensions?: Array<Dimension>;

		/** A measure is a measured value of a property in your data. For example, rainfall in inches, number of units sold, revenue gained, etc. */
		measures?: Array<Measure>;

		/** Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query. For example, if the data is published once every 10 minutes, the min_alignment_period should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals. */
		minAlignmentPeriod?: string | null;

		/** Optional. A template for the name of the slice. This name will be displayed in the legend and the tooltip of the pie chart. It replaces the auto-generated names for the slices. For example, if the template is set to ${resource.labels.zone}, the zone's value will be used for the name instead of the default name. */
		sliceNameTemplate?: string | null;

		/** TimeSeriesQuery collects the set of supported methods for querying time series data from the Stackdriver metrics API. */
		timeSeriesQuery?: TimeSeriesQuery;
	}

	/** Groups a time series query definition. */
	export interface PieChartDataSetFormProperties {

		/** Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query. For example, if the data is published once every 10 minutes, the min_alignment_period should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals. */
		minAlignmentPeriod: FormControl<string | null | undefined>,

		/** Optional. A template for the name of the slice. This name will be displayed in the legend and the tooltip of the pie chart. It replaces the auto-generated names for the slices. For example, if the template is set to ${resource.labels.zone}, the zone's value will be used for the name instead of the default name. */
		sliceNameTemplate: FormControl<string | null | undefined>,
	}
	export function CreatePieChartDataSetFormGroup() {
		return new FormGroup<PieChartDataSetFormProperties>({
			minAlignmentPeriod: new FormControl<string | null | undefined>(undefined),
			sliceNameTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A chart dimension. Dimensions are a structured labewl, class, or category for a set of measurements in your data. */
	export interface Dimension {

		/** The name of the column in the source SQL query that is used to chart the dimension. */
		column?: string | null;

		/** The type of the dimension column. This is relevant only if one of the bin_size fields is set. If it is empty, the type TIMESTAMP or INT64 will be assumed based on which bin_size field is set. If populated, this should be set to one of the following types: DATE, TIME, DATETIME, TIMESTAMP, BIGNUMERIC, INT64, NUMERIC, FLOAT64. */
		columnType?: string | null;

		/** float_bin_size is used when the column type used for a dimension is a floating point numeric column. */
		floatBinSize?: number | null;

		/** A limit to the number of bins generated. When 0 is specified, the maximum count is not enforced. */
		maxBinCount?: number | null;

		/** numeric_bin_size is used when the column type used for a dimension is numeric or string. */
		numericBinSize?: number | null;

		/** The column name to sort on for binning. This column can be the same column as this dimension or any other column used as a measure in the results. If sort_order is set to NONE, then this value is not used. */
		sortColumn?: string | null;

		/** The sort order applied to the sort column. */
		sortOrder?: BreakdownSortOrder | null;

		/** time_bin_size is used when the data type specified by column is a time type and the bin size is determined by a time duration. */
		timeBinSize?: string | null;
	}

	/** A chart dimension. Dimensions are a structured labewl, class, or category for a set of measurements in your data. */
	export interface DimensionFormProperties {

		/** The name of the column in the source SQL query that is used to chart the dimension. */
		column: FormControl<string | null | undefined>,

		/** The type of the dimension column. This is relevant only if one of the bin_size fields is set. If it is empty, the type TIMESTAMP or INT64 will be assumed based on which bin_size field is set. If populated, this should be set to one of the following types: DATE, TIME, DATETIME, TIMESTAMP, BIGNUMERIC, INT64, NUMERIC, FLOAT64. */
		columnType: FormControl<string | null | undefined>,

		/** float_bin_size is used when the column type used for a dimension is a floating point numeric column. */
		floatBinSize: FormControl<number | null | undefined>,

		/** A limit to the number of bins generated. When 0 is specified, the maximum count is not enforced. */
		maxBinCount: FormControl<number | null | undefined>,

		/** numeric_bin_size is used when the column type used for a dimension is numeric or string. */
		numericBinSize: FormControl<number | null | undefined>,

		/** The column name to sort on for binning. This column can be the same column as this dimension or any other column used as a measure in the results. If sort_order is set to NONE, then this value is not used. */
		sortColumn: FormControl<string | null | undefined>,

		/** The sort order applied to the sort column. */
		sortOrder: FormControl<BreakdownSortOrder | null | undefined>,

		/** time_bin_size is used when the data type specified by column is a time type and the bin size is determined by a time duration. */
		timeBinSize: FormControl<string | null | undefined>,
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
			column: new FormControl<string | null | undefined>(undefined),
			columnType: new FormControl<string | null | undefined>(undefined),
			floatBinSize: new FormControl<number | null | undefined>(undefined),
			maxBinCount: new FormControl<number | null | undefined>(undefined),
			numericBinSize: new FormControl<number | null | undefined>(undefined),
			sortColumn: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<BreakdownSortOrder | null | undefined>(undefined),
			timeBinSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A chart measure. Measures represent a measured property in your chart data such as rainfall in inches, number of units sold, revenue gained, etc. */
	export interface Measure {

		/** Preview: An identifier for an aggregation function. Aggregation functions are SQL functions that group or transform data from multiple points to a single point. This is a preview feature and may be subject to change before final release. */
		aggregationFunction?: AggregationFunction;

		/** The column name within the dataset used for the measure. */
		column?: string | null;
	}

	/** A chart measure. Measures represent a measured property in your chart data such as rainfall in inches, number of units sold, revenue gained, etc. */
	export interface MeasureFormProperties {

		/** The column name within the dataset used for the measure. */
		column: FormControl<string | null | undefined>,
	}
	export function CreateMeasureFormGroup() {
		return new FormGroup<MeasureFormProperties>({
			column: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TimeSeriesQuery collects the set of supported methods for querying time series data from the Stackdriver metrics API. */
	export interface TimeSeriesQuery {

		/** Preview: A query that produces an aggregated response and supporting data. This is a preview feature and may be subject to change before final release. */
		opsAnalyticsQuery?: OpsAnalyticsQuery;

		/** Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value.*Note: This could override the configured alignment period except for the cases where a series of data points are expected, like - XyChart - Scorecard's spark chart */
		outputFullDuration?: boolean | null;

		/** A query used to fetch time series with PromQL. */
		prometheusQuery?: string | null;

		/** A filter that defines a subset of time series data that is displayed in a widget. Time series data is fetched using the ListTimeSeries (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) method. */
		timeSeriesFilter?: TimeSeriesFilter;

		/** A pair of time series filters that define a ratio computation. The output time series is the pair-wise division of each aligned element from the numerator and denominator time series. */
		timeSeriesFilterRatio?: TimeSeriesFilterRatio;

		/** A query used to fetch time series with MQL. */
		timeSeriesQueryLanguage?: string | null;

		/** The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the unit (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in MetricDescriptor. */
		unitOverride?: string | null;
	}

	/** TimeSeriesQuery collects the set of supported methods for querying time series data from the Stackdriver metrics API. */
	export interface TimeSeriesQueryFormProperties {

		/** Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value.*Note: This could override the configured alignment period except for the cases where a series of data points are expected, like - XyChart - Scorecard's spark chart */
		outputFullDuration: FormControl<boolean | null | undefined>,

		/** A query used to fetch time series with PromQL. */
		prometheusQuery: FormControl<string | null | undefined>,

		/** A query used to fetch time series with MQL. */
		timeSeriesQueryLanguage: FormControl<string | null | undefined>,

		/** The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the unit (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in MetricDescriptor. */
		unitOverride: FormControl<string | null | undefined>,
	}
	export function CreateTimeSeriesQueryFormGroup() {
		return new FormGroup<TimeSeriesQueryFormProperties>({
			outputFullDuration: new FormControl<boolean | null | undefined>(undefined),
			prometheusQuery: new FormControl<string | null | undefined>(undefined),
			timeSeriesQueryLanguage: new FormControl<string | null | undefined>(undefined),
			unitOverride: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Preview: A query that produces an aggregated response and supporting data. This is a preview feature and may be subject to change before final release. */
	export interface OpsAnalyticsQuery {

		/** A SQL query to fetch time series, category series, or numeric series data. */
		sql?: string | null;
	}

	/** Preview: A query that produces an aggregated response and supporting data. This is a preview feature and may be subject to change before final release. */
	export interface OpsAnalyticsQueryFormProperties {

		/** A SQL query to fetch time series, category series, or numeric series data. */
		sql: FormControl<string | null | undefined>,
	}
	export function CreateOpsAnalyticsQueryFormGroup() {
		return new FormGroup<OpsAnalyticsQueryFormProperties>({
			sql: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter that defines a subset of time series data that is displayed in a widget. Time series data is fetched using the ListTimeSeries (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) method. */
	export interface TimeSeriesFilter {

		/** Describes how to combine multiple time series to provide a different view of the data. Aggregation of time series is done in two steps. First, each time series in the set is aligned to the same time interval boundaries, then the set of time series is optionally reduced in number.Alignment consists of applying the per_series_aligner operation to each time series after its data has been divided into regular alignment_period time intervals. This process takes all of the data points in an alignment period, applies a mathematical transformation such as averaging, minimum, maximum, delta, etc., and converts them into a single data point per period.Reduction is when the aligned and transformed time series can optionally be combined, reducing the number of time series through similar mathematical transformations. Reduction involves applying a cross_series_reducer to all the time series, optionally sorting the time series into subsets with group_by_fields, and applying the reducer to each subset.The raw time series data can contain a huge amount of information from multiple sources. Alignment and reduction transforms this mass of data into a more manageable and representative collection of data, for example "the 95% latency across the average of all tasks in a cluster". This representative data can be more easily graphed and comprehended, and the individual time series data is still available for later drilldown. For more details, see Filtering and aggregation (https://cloud.google.com/monitoring/api/v3/aggregation). */
		aggregation?: Aggregation;

		/** Required. The monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
		filter?: string | null;

		/** Describes a ranking-based time series filter. Each input time series is ranked with an aligner. The filter will allow up to num_time_series time series to pass through it, selecting them based on the relative ranking.For example, if ranking_method is METHOD_MEAN,direction is BOTTOM, and num_time_series is 3, then the 3 times series with the lowest mean values will pass through the filter. */
		pickTimeSeriesFilter?: PickTimeSeriesFilter;

		/** Describes how to combine multiple time series to provide a different view of the data. Aggregation of time series is done in two steps. First, each time series in the set is aligned to the same time interval boundaries, then the set of time series is optionally reduced in number.Alignment consists of applying the per_series_aligner operation to each time series after its data has been divided into regular alignment_period time intervals. This process takes all of the data points in an alignment period, applies a mathematical transformation such as averaging, minimum, maximum, delta, etc., and converts them into a single data point per period.Reduction is when the aligned and transformed time series can optionally be combined, reducing the number of time series through similar mathematical transformations. Reduction involves applying a cross_series_reducer to all the time series, optionally sorting the time series into subsets with group_by_fields, and applying the reducer to each subset.The raw time series data can contain a huge amount of information from multiple sources. Alignment and reduction transforms this mass of data into a more manageable and representative collection of data, for example "the 95% latency across the average of all tasks in a cluster". This representative data can be more easily graphed and comprehended, and the individual time series data is still available for later drilldown. For more details, see Filtering and aggregation (https://cloud.google.com/monitoring/api/v3/aggregation). */
		secondaryAggregation?: Aggregation;

		/** A filter that ranks streams based on their statistical relation to other streams in a request. Note: This field is deprecated and completely ignored by the API. */
		statisticalTimeSeriesFilter?: StatisticalTimeSeriesFilter;
	}

	/** A filter that defines a subset of time series data that is displayed in a widget. Time series data is fetched using the ListTimeSeries (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) method. */
	export interface TimeSeriesFilterFormProperties {

		/** Required. The monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
		filter: FormControl<string | null | undefined>,
	}
	export function CreateTimeSeriesFilterFormGroup() {
		return new FormGroup<TimeSeriesFilterFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a ranking-based time series filter. Each input time series is ranked with an aligner. The filter will allow up to num_time_series time series to pass through it, selecting them based on the relative ranking.For example, if ranking_method is METHOD_MEAN,direction is BOTTOM, and num_time_series is 3, then the 3 times series with the lowest mean values will pass through the filter. */
	export interface PickTimeSeriesFilter {

		/** How to use the ranking to select time series that pass through the filter. */
		direction?: PickTimeSeriesFilterDirection | null;

		/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive).The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
		interval?: Interval;

		/** How many time series to allow to pass through the filter. */
		numTimeSeries?: number | null;

		/** ranking_method is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
		rankingMethod?: PickTimeSeriesFilterRankingMethod | null;
	}

	/** Describes a ranking-based time series filter. Each input time series is ranked with an aligner. The filter will allow up to num_time_series time series to pass through it, selecting them based on the relative ranking.For example, if ranking_method is METHOD_MEAN,direction is BOTTOM, and num_time_series is 3, then the 3 times series with the lowest mean values will pass through the filter. */
	export interface PickTimeSeriesFilterFormProperties {

		/** How to use the ranking to select time series that pass through the filter. */
		direction: FormControl<PickTimeSeriesFilterDirection | null | undefined>,

		/** How many time series to allow to pass through the filter. */
		numTimeSeries: FormControl<number | null | undefined>,

		/** ranking_method is applied to each time series independently to produce the value which will be used to compare the time series to other time series. */
		rankingMethod: FormControl<PickTimeSeriesFilterRankingMethod | null | undefined>,
	}
	export function CreatePickTimeSeriesFilterFormGroup() {
		return new FormGroup<PickTimeSeriesFilterFormProperties>({
			direction: new FormControl<PickTimeSeriesFilterDirection | null | undefined>(undefined),
			numTimeSeries: new FormControl<number | null | undefined>(undefined),
			rankingMethod: new FormControl<PickTimeSeriesFilterRankingMethod | null | undefined>(undefined),
		});

	}

	export enum PickTimeSeriesFilterDirection { DIRECTION_UNSPECIFIED = 0, TOP = 1, BOTTOM = 2 }


	/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive).The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
	export interface Interval {

		/** Optional. Exclusive end of the interval.If specified, a Timestamp matching this interval will have to be before the end. */
		endTime?: string | null;

		/** Optional. Inclusive start of the interval.If specified, a Timestamp matching this interval will have to be the same or after the start. */
		startTime?: string | null;
	}

	/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive).The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
	export interface IntervalFormProperties {

		/** Optional. Exclusive end of the interval.If specified, a Timestamp matching this interval will have to be before the end. */
		endTime: FormControl<string | null | undefined>,

		/** Optional. Inclusive start of the interval.If specified, a Timestamp matching this interval will have to be the same or after the start. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateIntervalFormGroup() {
		return new FormGroup<IntervalFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PickTimeSeriesFilterRankingMethod { METHOD_UNSPECIFIED = 0, METHOD_MEAN = 1, METHOD_MAX = 2, METHOD_MIN = 3, METHOD_SUM = 4, METHOD_LATEST = 5 }


	/** A filter that ranks streams based on their statistical relation to other streams in a request. Note: This field is deprecated and completely ignored by the API. */
	export interface StatisticalTimeSeriesFilter {

		/** How many time series to output. */
		numTimeSeries?: number | null;

		/** rankingMethod is applied to a set of time series, and then the produced value for each individual time series is used to compare a given time series to others. These are methods that cannot be applied stream-by-stream, but rather require the full context of a request to evaluate time series. */
		rankingMethod?: StatisticalTimeSeriesFilterRankingMethod | null;
	}

	/** A filter that ranks streams based on their statistical relation to other streams in a request. Note: This field is deprecated and completely ignored by the API. */
	export interface StatisticalTimeSeriesFilterFormProperties {

		/** How many time series to output. */
		numTimeSeries: FormControl<number | null | undefined>,

		/** rankingMethod is applied to a set of time series, and then the produced value for each individual time series is used to compare a given time series to others. These are methods that cannot be applied stream-by-stream, but rather require the full context of a request to evaluate time series. */
		rankingMethod: FormControl<StatisticalTimeSeriesFilterRankingMethod | null | undefined>,
	}
	export function CreateStatisticalTimeSeriesFilterFormGroup() {
		return new FormGroup<StatisticalTimeSeriesFilterFormProperties>({
			numTimeSeries: new FormControl<number | null | undefined>(undefined),
			rankingMethod: new FormControl<StatisticalTimeSeriesFilterRankingMethod | null | undefined>(undefined),
		});

	}

	export enum StatisticalTimeSeriesFilterRankingMethod { METHOD_UNSPECIFIED = 0, METHOD_CLUSTER_OUTLIER = 1 }


	/** A pair of time series filters that define a ratio computation. The output time series is the pair-wise division of each aligned element from the numerator and denominator time series. */
	export interface TimeSeriesFilterRatio {

		/** Describes a query to build the numerator or denominator of a TimeSeriesFilterRatio. */
		denominator?: RatioPart;

		/** Describes a query to build the numerator or denominator of a TimeSeriesFilterRatio. */
		numerator?: RatioPart;

		/** Describes a ranking-based time series filter. Each input time series is ranked with an aligner. The filter will allow up to num_time_series time series to pass through it, selecting them based on the relative ranking.For example, if ranking_method is METHOD_MEAN,direction is BOTTOM, and num_time_series is 3, then the 3 times series with the lowest mean values will pass through the filter. */
		pickTimeSeriesFilter?: PickTimeSeriesFilter;

		/** Describes how to combine multiple time series to provide a different view of the data. Aggregation of time series is done in two steps. First, each time series in the set is aligned to the same time interval boundaries, then the set of time series is optionally reduced in number.Alignment consists of applying the per_series_aligner operation to each time series after its data has been divided into regular alignment_period time intervals. This process takes all of the data points in an alignment period, applies a mathematical transformation such as averaging, minimum, maximum, delta, etc., and converts them into a single data point per period.Reduction is when the aligned and transformed time series can optionally be combined, reducing the number of time series through similar mathematical transformations. Reduction involves applying a cross_series_reducer to all the time series, optionally sorting the time series into subsets with group_by_fields, and applying the reducer to each subset.The raw time series data can contain a huge amount of information from multiple sources. Alignment and reduction transforms this mass of data into a more manageable and representative collection of data, for example "the 95% latency across the average of all tasks in a cluster". This representative data can be more easily graphed and comprehended, and the individual time series data is still available for later drilldown. For more details, see Filtering and aggregation (https://cloud.google.com/monitoring/api/v3/aggregation). */
		secondaryAggregation?: Aggregation;

		/** A filter that ranks streams based on their statistical relation to other streams in a request. Note: This field is deprecated and completely ignored by the API. */
		statisticalTimeSeriesFilter?: StatisticalTimeSeriesFilter;
	}

	/** A pair of time series filters that define a ratio computation. The output time series is the pair-wise division of each aligned element from the numerator and denominator time series. */
	export interface TimeSeriesFilterRatioFormProperties {
	}
	export function CreateTimeSeriesFilterRatioFormGroup() {
		return new FormGroup<TimeSeriesFilterRatioFormProperties>({
		});

	}


	/** Describes a query to build the numerator or denominator of a TimeSeriesFilterRatio. */
	export interface RatioPart {

		/** Describes how to combine multiple time series to provide a different view of the data. Aggregation of time series is done in two steps. First, each time series in the set is aligned to the same time interval boundaries, then the set of time series is optionally reduced in number.Alignment consists of applying the per_series_aligner operation to each time series after its data has been divided into regular alignment_period time intervals. This process takes all of the data points in an alignment period, applies a mathematical transformation such as averaging, minimum, maximum, delta, etc., and converts them into a single data point per period.Reduction is when the aligned and transformed time series can optionally be combined, reducing the number of time series through similar mathematical transformations. Reduction involves applying a cross_series_reducer to all the time series, optionally sorting the time series into subsets with group_by_fields, and applying the reducer to each subset.The raw time series data can contain a huge amount of information from multiple sources. Alignment and reduction transforms this mass of data into a more manageable and representative collection of data, for example "the 95% latency across the average of all tasks in a cluster". This representative data can be more easily graphed and comprehended, and the individual time series data is still available for later drilldown. For more details, see Filtering and aggregation (https://cloud.google.com/monitoring/api/v3/aggregation). */
		aggregation?: Aggregation;

		/** Required. The monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
		filter?: string | null;
	}

	/** Describes a query to build the numerator or denominator of a TimeSeriesFilterRatio. */
	export interface RatioPartFormProperties {

		/** Required. The monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. */
		filter: FormControl<string | null | undefined>,
	}
	export function CreateRatioPartFormGroup() {
		return new FormGroup<RatioPartFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A widget showing the latest value of a metric, and how this value relates to one or more thresholds. */
	export interface Scorecard {

		/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
		blankView?: Empty;

		/** A gauge chart shows where the current value sits within a pre-defined range. The upper and lower bounds should define the possible range of values for the scorecard's query (inclusive). */
		gaugeView?: GaugeView;

		/** A sparkChart is a small chart suitable for inclusion in a table-cell or inline in text. This message contains the configuration for a sparkChart to show up on a Scorecard, showing recent trends of the scorecard's timeseries. */
		sparkChartView?: SparkChartView;

		/** The thresholds used to determine the state of the scorecard given the time series' current value. For an actual value x, the scorecard is in a danger state if x is less than or equal to a danger threshold that triggers below, or greater than or equal to a danger threshold that triggers above. Similarly, if x is above/below a warning threshold that triggers above/below, then the scorecard is in a warning state - unless x also puts it in a danger state. (Danger trumps warning.)As an example, consider a scorecard with the following four thresholds: { value: 90, category: 'DANGER', trigger: 'ABOVE', }, { value: 70, category: 'WARNING', trigger: 'ABOVE', }, { value: 10, category: 'DANGER', trigger: 'BELOW', }, { value: 20, category: 'WARNING', trigger: 'BELOW', } Then: values less than or equal to 10 would put the scorecard in a DANGER state, values greater than 10 but less than or equal to 20 a WARNING state, values strictly between 20 and 70 an OK state, values greater than or equal to 70 but less than 90 a WARNING state, and values greater than or equal to 90 a DANGER state. */
		thresholds?: Array<Threshold>;

		/** TimeSeriesQuery collects the set of supported methods for querying time series data from the Stackdriver metrics API. */
		timeSeriesQuery?: TimeSeriesQuery;
	}

	/** A widget showing the latest value of a metric, and how this value relates to one or more thresholds. */
	export interface ScorecardFormProperties {
	}
	export function CreateScorecardFormGroup() {
		return new FormGroup<ScorecardFormProperties>({
		});

	}


	/** A gauge chart shows where the current value sits within a pre-defined range. The upper and lower bounds should define the possible range of values for the scorecard's query (inclusive). */
	export interface GaugeView {

		/** The lower bound for this gauge chart. The value of the chart should always be greater than or equal to this. */
		lowerBound?: number | null;

		/** The upper bound for this gauge chart. The value of the chart should always be less than or equal to this. */
		upperBound?: number | null;
	}

	/** A gauge chart shows where the current value sits within a pre-defined range. The upper and lower bounds should define the possible range of values for the scorecard's query (inclusive). */
	export interface GaugeViewFormProperties {

		/** The lower bound for this gauge chart. The value of the chart should always be greater than or equal to this. */
		lowerBound: FormControl<number | null | undefined>,

		/** The upper bound for this gauge chart. The value of the chart should always be less than or equal to this. */
		upperBound: FormControl<number | null | undefined>,
	}
	export function CreateGaugeViewFormGroup() {
		return new FormGroup<GaugeViewFormProperties>({
			lowerBound: new FormControl<number | null | undefined>(undefined),
			upperBound: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A sparkChart is a small chart suitable for inclusion in a table-cell or inline in text. This message contains the configuration for a sparkChart to show up on a Scorecard, showing recent trends of the scorecard's timeseries. */
	export interface SparkChartView {

		/** The lower bound on data point frequency in the chart implemented by specifying the minimum alignment period to use in a time series query. For example, if the data is published once every 10 minutes it would not make sense to fetch and align data at one minute intervals. This field is optional and exists only as a hint. */
		minAlignmentPeriod?: string | null;

		/** Required. The type of sparkchart to show in this chartView. */
		sparkChartType?: SparkChartViewSparkChartType | null;
	}

	/** A sparkChart is a small chart suitable for inclusion in a table-cell or inline in text. This message contains the configuration for a sparkChart to show up on a Scorecard, showing recent trends of the scorecard's timeseries. */
	export interface SparkChartViewFormProperties {

		/** The lower bound on data point frequency in the chart implemented by specifying the minimum alignment period to use in a time series query. For example, if the data is published once every 10 minutes it would not make sense to fetch and align data at one minute intervals. This field is optional and exists only as a hint. */
		minAlignmentPeriod: FormControl<string | null | undefined>,

		/** Required. The type of sparkchart to show in this chartView. */
		sparkChartType: FormControl<SparkChartViewSparkChartType | null | undefined>,
	}
	export function CreateSparkChartViewFormGroup() {
		return new FormGroup<SparkChartViewFormProperties>({
			minAlignmentPeriod: new FormControl<string | null | undefined>(undefined),
			sparkChartType: new FormControl<SparkChartViewSparkChartType | null | undefined>(undefined),
		});

	}

	export enum SparkChartViewSparkChartType { SPARK_CHART_TYPE_UNSPECIFIED = 0, SPARK_LINE = 1, SPARK_BAR = 2 }


	/** Defines a threshold for categorizing time series values. */
	export interface Threshold {

		/** The state color for this threshold. Color is not allowed in a XyChart. */
		color?: ThresholdColor | null;

		/** The direction for the current threshold. Direction is not allowed in a XyChart. */
		direction?: ThresholdDirection | null;

		/** A label for the threshold. */
		label?: string | null;

		/** The target axis to use for plotting the threshold. Target axis is not allowed in a Scorecard. */
		targetAxis?: ThresholdTargetAxis | null;

		/** The value of the threshold. The value should be defined in the native scale of the metric. */
		value?: number | null;
	}

	/** Defines a threshold for categorizing time series values. */
	export interface ThresholdFormProperties {

		/** The state color for this threshold. Color is not allowed in a XyChart. */
		color: FormControl<ThresholdColor | null | undefined>,

		/** The direction for the current threshold. Direction is not allowed in a XyChart. */
		direction: FormControl<ThresholdDirection | null | undefined>,

		/** A label for the threshold. */
		label: FormControl<string | null | undefined>,

		/** The target axis to use for plotting the threshold. Target axis is not allowed in a Scorecard. */
		targetAxis: FormControl<ThresholdTargetAxis | null | undefined>,

		/** The value of the threshold. The value should be defined in the native scale of the metric. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateThresholdFormGroup() {
		return new FormGroup<ThresholdFormProperties>({
			color: new FormControl<ThresholdColor | null | undefined>(undefined),
			direction: new FormControl<ThresholdDirection | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			targetAxis: new FormControl<ThresholdTargetAxis | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ThresholdColor { COLOR_UNSPECIFIED = 0, YELLOW = 1, RED = 2 }

	export enum ThresholdDirection { DIRECTION_UNSPECIFIED = 0, ABOVE = 1, BELOW = 2 }

	export enum ThresholdTargetAxis { TARGET_AXIS_UNSPECIFIED = 0, Y1 = 1, Y2 = 2 }


	/** A widget that defines a new section header. Sections populate a table of contents and allow easier navigation of long-form content. */
	export interface SectionHeader {

		/** Whether to insert a divider below the section in the table of contents */
		dividerBelow?: boolean | null;

		/** The subtitle of the section */
		subtitle?: string | null;
	}

	/** A widget that defines a new section header. Sections populate a table of contents and allow easier navigation of long-form content. */
	export interface SectionHeaderFormProperties {

		/** Whether to insert a divider below the section in the table of contents */
		dividerBelow: FormControl<boolean | null | undefined>,

		/** The subtitle of the section */
		subtitle: FormControl<string | null | undefined>,
	}
	export function CreateSectionHeaderFormGroup() {
		return new FormGroup<SectionHeaderFormProperties>({
			dividerBelow: new FormControl<boolean | null | undefined>(undefined),
			subtitle: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A widget that groups the other widgets by using a dropdown menu. All widgets that are within the area spanned by the grouping widget are considered member widgets. */
	export interface SingleViewGroup {
	}

	/** A widget that groups the other widgets by using a dropdown menu. All widgets that are within the area spanned by the grouping widget are considered member widgets. */
	export interface SingleViewGroupFormProperties {
	}
	export function CreateSingleViewGroupFormGroup() {
		return new FormGroup<SingleViewGroupFormProperties>({
		});

	}


	/** A widget that displays textual content. */
	export interface Text {

		/** The text content to be displayed. */
		content?: string | null;

		/** How the text content is formatted. */
		format?: TextFormat | null;

		/** Properties that determine how the title and content are styled */
		style?: TextStyle;
	}

	/** A widget that displays textual content. */
	export interface TextFormProperties {

		/** The text content to be displayed. */
		content: FormControl<string | null | undefined>,

		/** How the text content is formatted. */
		format: FormControl<TextFormat | null | undefined>,
	}
	export function CreateTextFormGroup() {
		return new FormGroup<TextFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<TextFormat | null | undefined>(undefined),
		});

	}

	export enum TextFormat { FORMAT_UNSPECIFIED = 0, MARKDOWN = 1, RAW = 2 }


	/** Properties that determine how the title and content are styled */
	export interface TextStyle {

		/** The background color as a hex string. "#RRGGBB" or "#RGB" */
		backgroundColor?: string | null;

		/** Font sizes for both the title and content. The title will still be larger relative to the content. */
		fontSize?: TextStyleFontSize | null;

		/** The horizontal alignment of both the title and content */
		horizontalAlignment?: TextStyleHorizontalAlignment | null;

		/** The amount of padding around the widget */
		padding?: TextStylePadding | null;

		/** The pointer location for this widget (also sometimes called a "tail") */
		pointerLocation?: TextStylePointerLocation | null;

		/** The text color as a hex string. "#RRGGBB" or "#RGB" */
		textColor?: string | null;

		/** The vertical alignment of both the title and content */
		verticalAlignment?: TextStyleVerticalAlignment | null;
	}

	/** Properties that determine how the title and content are styled */
	export interface TextStyleFormProperties {

		/** The background color as a hex string. "#RRGGBB" or "#RGB" */
		backgroundColor: FormControl<string | null | undefined>,

		/** Font sizes for both the title and content. The title will still be larger relative to the content. */
		fontSize: FormControl<TextStyleFontSize | null | undefined>,

		/** The horizontal alignment of both the title and content */
		horizontalAlignment: FormControl<TextStyleHorizontalAlignment | null | undefined>,

		/** The amount of padding around the widget */
		padding: FormControl<TextStylePadding | null | undefined>,

		/** The pointer location for this widget (also sometimes called a "tail") */
		pointerLocation: FormControl<TextStylePointerLocation | null | undefined>,

		/** The text color as a hex string. "#RRGGBB" or "#RGB" */
		textColor: FormControl<string | null | undefined>,

		/** The vertical alignment of both the title and content */
		verticalAlignment: FormControl<TextStyleVerticalAlignment | null | undefined>,
	}
	export function CreateTextStyleFormGroup() {
		return new FormGroup<TextStyleFormProperties>({
			backgroundColor: new FormControl<string | null | undefined>(undefined),
			fontSize: new FormControl<TextStyleFontSize | null | undefined>(undefined),
			horizontalAlignment: new FormControl<TextStyleHorizontalAlignment | null | undefined>(undefined),
			padding: new FormControl<TextStylePadding | null | undefined>(undefined),
			pointerLocation: new FormControl<TextStylePointerLocation | null | undefined>(undefined),
			textColor: new FormControl<string | null | undefined>(undefined),
			verticalAlignment: new FormControl<TextStyleVerticalAlignment | null | undefined>(undefined),
		});

	}

	export enum TextStyleFontSize { FONT_SIZE_UNSPECIFIED = 0, FS_EXTRA_SMALL = 1, FS_SMALL = 2, FS_MEDIUM = 3, FS_LARGE = 4, FS_EXTRA_LARGE = 5 }

	export enum TextStyleHorizontalAlignment { HORIZONTAL_ALIGNMENT_UNSPECIFIED = 0, H_LEFT = 1, H_CENTER = 2, H_RIGHT = 3 }

	export enum TextStylePadding { PADDING_SIZE_UNSPECIFIED = 0, P_EXTRA_SMALL = 1, P_SMALL = 2, P_MEDIUM = 3, P_LARGE = 4, P_EXTRA_LARGE = 5 }

	export enum TextStylePointerLocation { POINTER_LOCATION_UNSPECIFIED = 0, PL_TOP = 1, PL_RIGHT = 2, PL_BOTTOM = 3, PL_LEFT = 4, PL_TOP_LEFT = 5, PL_TOP_RIGHT = 6, PL_RIGHT_TOP = 7, PL_RIGHT_BOTTOM = 8, PL_BOTTOM_RIGHT = 9, PL_BOTTOM_LEFT = 10, PL_LEFT_BOTTOM = 11, PL_LEFT_TOP = 12 }

	export enum TextStyleVerticalAlignment { VERTICAL_ALIGNMENT_UNSPECIFIED = 0, V_TOP = 1, V_CENTER = 2, V_BOTTOM = 3 }


	/** A table that displays time series data. */
	export interface TimeSeriesTable {

		/** Optional. The list of the persistent column settings for the table. */
		columnSettings?: Array<ColumnSettings>;

		/** Required. The data displayed in this table. */
		dataSets?: Array<TableDataSet>;

		/** Optional. Store rendering strategy */
		metricVisualization?: TimeSeriesTableMetricVisualization | null;
	}

	/** A table that displays time series data. */
	export interface TimeSeriesTableFormProperties {

		/** Optional. Store rendering strategy */
		metricVisualization: FormControl<TimeSeriesTableMetricVisualization | null | undefined>,
	}
	export function CreateTimeSeriesTableFormGroup() {
		return new FormGroup<TimeSeriesTableFormProperties>({
			metricVisualization: new FormControl<TimeSeriesTableMetricVisualization | null | undefined>(undefined),
		});

	}


	/** The persistent settings for a table's columns. */
	export interface ColumnSettings {

		/** Required. The id of the column. */
		column?: string | null;

		/** Required. Whether the column should be visible on page load. */
		visible?: boolean | null;
	}

	/** The persistent settings for a table's columns. */
	export interface ColumnSettingsFormProperties {

		/** Required. The id of the column. */
		column: FormControl<string | null | undefined>,

		/** Required. Whether the column should be visible on page load. */
		visible: FormControl<boolean | null | undefined>,
	}
	export function CreateColumnSettingsFormGroup() {
		return new FormGroup<ColumnSettingsFormProperties>({
			column: new FormControl<string | null | undefined>(undefined),
			visible: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Groups a time series query definition with table options. */
	export interface TableDataSet {

		/** Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query For example, if the data is published once every 10 minutes, the min_alignment_period should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals. */
		minAlignmentPeriod?: string | null;

		/** Table display options that can be reused. */
		tableDisplayOptions?: TableDisplayOptions;

		/** Optional. A template string for naming TimeSeries in the resulting data set. This should be a string with interpolations of the form ${label_name}, which will resolve to the label's value i.e. "${resource.labels.project_id}." */
		tableTemplate?: string | null;

		/** TimeSeriesQuery collects the set of supported methods for querying time series data from the Stackdriver metrics API. */
		timeSeriesQuery?: TimeSeriesQuery;
	}

	/** Groups a time series query definition with table options. */
	export interface TableDataSetFormProperties {

		/** Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query For example, if the data is published once every 10 minutes, the min_alignment_period should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals. */
		minAlignmentPeriod: FormControl<string | null | undefined>,

		/** Optional. A template string for naming TimeSeries in the resulting data set. This should be a string with interpolations of the form ${label_name}, which will resolve to the label's value i.e. "${resource.labels.project_id}." */
		tableTemplate: FormControl<string | null | undefined>,
	}
	export function CreateTableDataSetFormGroup() {
		return new FormGroup<TableDataSetFormProperties>({
			minAlignmentPeriod: new FormControl<string | null | undefined>(undefined),
			tableTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Table display options that can be reused. */
	export interface TableDisplayOptions {

		/** Optional. This field is unused and has been replaced by TimeSeriesTable.column_settings */
		shownColumns?: Array<string>;
	}

	/** Table display options that can be reused. */
	export interface TableDisplayOptionsFormProperties {
	}
	export function CreateTableDisplayOptionsFormGroup() {
		return new FormGroup<TableDisplayOptionsFormProperties>({
		});

	}

	export enum TimeSeriesTableMetricVisualization { METRIC_VISUALIZATION_UNSPECIFIED = 0, NUMBER = 1, BAR = 2 }


	/** A chart that displays data on a 2D (X and Y axes) plane. */
	export interface XyChart {

		/** Options to control visual rendering of a chart. */
		chartOptions?: ChartOptions;

		/** Required. The data displayed in this chart. */
		dataSets?: Array<DataSet>;

		/** Threshold lines drawn horizontally across the chart. */
		thresholds?: Array<Threshold>;

		/** The duration used to display a comparison chart. A comparison chart simultaneously shows values from two similar-length time periods (e.g., week-over-week metrics). The duration must be positive, and it can only be applied to charts with data sets of LINE plot type. */
		timeshiftDuration?: string | null;

		/** A chart axis. */
		xAxis?: Axis;

		/** A chart axis. */
		y2Axis?: Axis;

		/** A chart axis. */
		yAxis?: Axis;
	}

	/** A chart that displays data on a 2D (X and Y axes) plane. */
	export interface XyChartFormProperties {

		/** The duration used to display a comparison chart. A comparison chart simultaneously shows values from two similar-length time periods (e.g., week-over-week metrics). The duration must be positive, and it can only be applied to charts with data sets of LINE plot type. */
		timeshiftDuration: FormControl<string | null | undefined>,
	}
	export function CreateXyChartFormGroup() {
		return new FormGroup<XyChartFormProperties>({
			timeshiftDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Groups a time series query definition with charting options. */
	export interface DataSet {

		/** Optional. The collection of breakdowns to be applied to the dataset. */
		breakdowns?: Array<Breakdown>;

		/** Optional. A collection of dimension columns. */
		dimensions?: Array<Dimension>;

		/** A template string for naming TimeSeries in the resulting data set. This should be a string with interpolations of the form ${label_name}, which will resolve to the label's value. */
		legendTemplate?: string | null;

		/** Optional. A collection of measures. */
		measures?: Array<Measure>;

		/** Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query For example, if the data is published once every 10 minutes, the min_alignment_period should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals. */
		minAlignmentPeriod?: string | null;

		/** How this data should be plotted on the chart. */
		plotType?: DataSetPlotType | null;

		/** Optional. The target axis to use for plotting the metric. */
		targetAxis?: ThresholdTargetAxis | null;

		/** TimeSeriesQuery collects the set of supported methods for querying time series data from the Stackdriver metrics API. */
		timeSeriesQuery?: TimeSeriesQuery;
	}

	/** Groups a time series query definition with charting options. */
	export interface DataSetFormProperties {

		/** A template string for naming TimeSeries in the resulting data set. This should be a string with interpolations of the form ${label_name}, which will resolve to the label's value. */
		legendTemplate: FormControl<string | null | undefined>,

		/** Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query For example, if the data is published once every 10 minutes, the min_alignment_period should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals. */
		minAlignmentPeriod: FormControl<string | null | undefined>,

		/** How this data should be plotted on the chart. */
		plotType: FormControl<DataSetPlotType | null | undefined>,

		/** Optional. The target axis to use for plotting the metric. */
		targetAxis: FormControl<ThresholdTargetAxis | null | undefined>,
	}
	export function CreateDataSetFormGroup() {
		return new FormGroup<DataSetFormProperties>({
			legendTemplate: new FormControl<string | null | undefined>(undefined),
			minAlignmentPeriod: new FormControl<string | null | undefined>(undefined),
			plotType: new FormControl<DataSetPlotType | null | undefined>(undefined),
			targetAxis: new FormControl<ThresholdTargetAxis | null | undefined>(undefined),
		});

	}

	export enum DataSetPlotType { PLOT_TYPE_UNSPECIFIED = 0, LINE = 1, STACKED_AREA = 2, STACKED_BAR = 3, HEATMAP = 4 }


	/** A simplified layout that divides the available space into vertical columns and arranges a set of widgets vertically in each column. */
	export interface ColumnLayout {

		/** The columns of content to display. */
		columns?: Array<Column>;
	}

	/** A simplified layout that divides the available space into vertical columns and arranges a set of widgets vertically in each column. */
	export interface ColumnLayoutFormProperties {
	}
	export function CreateColumnLayoutFormGroup() {
		return new FormGroup<ColumnLayoutFormProperties>({
		});

	}


	/** A Google Stackdriver dashboard. Dashboards define the content and layout of pages in the Stackdriver web application. */
	export interface Dashboard {

		/** A simplified layout that divides the available space into vertical columns and arranges a set of widgets vertically in each column. */
		columnLayout?: ColumnLayout;

		/** Filters to reduce the amount of data charted based on the filter criteria. */
		dashboardFilters?: Array<DashboardFilter>;

		/** Required. The mutable, human-readable name. */
		displayName?: string | null;

		/** etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. An etag is returned in the response to GetDashboard, and users are expected to put that etag in the request to UpdateDashboard to ensure that their change will be applied to the same version of the Dashboard configuration. The field should not be passed during dashboard creation. */
		etag?: string | null;

		/** A basic layout divides the available space into vertical columns of equal width and arranges a list of widgets using a row-first strategy. */
		gridLayout?: GridLayout;

		/** Labels applied to the dashboard */
		labels?: {[id: string]: string };

		/** A mosaic layout divides the available space into a grid of blocks, and overlays the grid with tiles. Unlike GridLayout, tiles may span multiple grid blocks and can be placed at arbitrary locations in the grid. */
		mosaicLayout?: MosaicLayout;

		/** Identifier. The resource name of the dashboard. */
		name?: string | null;

		/** A simplified layout that divides the available space into rows and arranges a set of widgets horizontally in each row. */
		rowLayout?: RowLayout;
	}

	/** A Google Stackdriver dashboard. Dashboards define the content and layout of pages in the Stackdriver web application. */
	export interface DashboardFormProperties {

		/** Required. The mutable, human-readable name. */
		displayName: FormControl<string | null | undefined>,

		/** etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. An etag is returned in the response to GetDashboard, and users are expected to put that etag in the request to UpdateDashboard to ensure that their change will be applied to the same version of the Dashboard configuration. The field should not be passed during dashboard creation. */
		etag: FormControl<string | null | undefined>,

		/** Labels applied to the dashboard */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Identifier. The resource name of the dashboard. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDashboardFormGroup() {
		return new FormGroup<DashboardFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter to reduce the amount of data charted in relevant widgets. */
	export interface DashboardFilter {

		/** The specified filter type */
		filterType?: DashboardFilterFilterType | null;

		/** Required. The key for the label */
		labelKey?: string | null;

		/** A variable-length string value. */
		stringValue?: string | null;

		/** The placeholder text that can be referenced in a filter string or MQL query. If omitted, the dashboard filter will be applied to all relevant widgets in the dashboard. */
		templateVariable?: string | null;
	}

	/** A filter to reduce the amount of data charted in relevant widgets. */
	export interface DashboardFilterFormProperties {

		/** The specified filter type */
		filterType: FormControl<DashboardFilterFilterType | null | undefined>,

		/** Required. The key for the label */
		labelKey: FormControl<string | null | undefined>,

		/** A variable-length string value. */
		stringValue: FormControl<string | null | undefined>,

		/** The placeholder text that can be referenced in a filter string or MQL query. If omitted, the dashboard filter will be applied to all relevant widgets in the dashboard. */
		templateVariable: FormControl<string | null | undefined>,
	}
	export function CreateDashboardFilterFormGroup() {
		return new FormGroup<DashboardFilterFormProperties>({
			filterType: new FormControl<DashboardFilterFilterType | null | undefined>(undefined),
			labelKey: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
			templateVariable: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DashboardFilterFilterType { FILTER_TYPE_UNSPECIFIED = 0, RESOURCE_LABEL = 1, METRIC_LABEL = 2, USER_METADATA_LABEL = 3, SYSTEM_METADATA_LABEL = 4, GROUP = 5 }


	/** A basic layout divides the available space into vertical columns of equal width and arranges a list of widgets using a row-first strategy. */
	export interface GridLayout {

		/** The number of columns into which the view's width is divided. If omitted or set to zero, a system default will be used while rendering. */
		columns?: string | null;

		/** The informational elements that are arranged into the columns row-first. */
		widgets?: Array<Widget>;
	}

	/** A basic layout divides the available space into vertical columns of equal width and arranges a list of widgets using a row-first strategy. */
	export interface GridLayoutFormProperties {

		/** The number of columns into which the view's width is divided. If omitted or set to zero, a system default will be used while rendering. */
		columns: FormControl<string | null | undefined>,
	}
	export function CreateGridLayoutFormGroup() {
		return new FormGroup<GridLayoutFormProperties>({
			columns: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A mosaic layout divides the available space into a grid of blocks, and overlays the grid with tiles. Unlike GridLayout, tiles may span multiple grid blocks and can be placed at arbitrary locations in the grid. */
	export interface MosaicLayout {

		/** The number of columns in the mosaic grid. The number of columns must be between 1 and 12, inclusive. */
		columns?: number | null;

		/** The tiles to display. */
		tiles?: Array<Tile>;
	}

	/** A mosaic layout divides the available space into a grid of blocks, and overlays the grid with tiles. Unlike GridLayout, tiles may span multiple grid blocks and can be placed at arbitrary locations in the grid. */
	export interface MosaicLayoutFormProperties {

		/** The number of columns in the mosaic grid. The number of columns must be between 1 and 12, inclusive. */
		columns: FormControl<number | null | undefined>,
	}
	export function CreateMosaicLayoutFormGroup() {
		return new FormGroup<MosaicLayoutFormProperties>({
			columns: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A single tile in the mosaic. The placement and size of the tile are configurable. */
	export interface Tile {

		/** The height of the tile, measured in grid blocks. Tiles must have a minimum height of 1. */
		height?: number | null;

		/** Widget contains a single dashboard component and configuration of how to present the component in the dashboard. */
		widget?: Widget;

		/** The width of the tile, measured in grid blocks. Tiles must have a minimum width of 1. */
		width?: number | null;

		/** The zero-indexed position of the tile in grid blocks relative to the left edge of the grid. Tiles must be contained within the specified number of columns. x_pos cannot be negative. */
		xPos?: number | null;

		/** The zero-indexed position of the tile in grid blocks relative to the top edge of the grid. y_pos cannot be negative. */
		yPos?: number | null;
	}

	/** A single tile in the mosaic. The placement and size of the tile are configurable. */
	export interface TileFormProperties {

		/** The height of the tile, measured in grid blocks. Tiles must have a minimum height of 1. */
		height: FormControl<number | null | undefined>,

		/** The width of the tile, measured in grid blocks. Tiles must have a minimum width of 1. */
		width: FormControl<number | null | undefined>,

		/** The zero-indexed position of the tile in grid blocks relative to the left edge of the grid. Tiles must be contained within the specified number of columns. x_pos cannot be negative. */
		xPos: FormControl<number | null | undefined>,

		/** The zero-indexed position of the tile in grid blocks relative to the top edge of the grid. y_pos cannot be negative. */
		yPos: FormControl<number | null | undefined>,
	}
	export function CreateTileFormGroup() {
		return new FormGroup<TileFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
			xPos: new FormControl<number | null | undefined>(undefined),
			yPos: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A simplified layout that divides the available space into rows and arranges a set of widgets horizontally in each row. */
	export interface RowLayout {

		/** The rows of content to display. */
		rows?: Array<Row>;
	}

	/** A simplified layout that divides the available space into rows and arranges a set of widgets horizontally in each row. */
	export interface RowLayoutFormProperties {
	}
	export function CreateRowLayoutFormGroup() {
		return new FormGroup<RowLayoutFormProperties>({
		});

	}


	/** Defines the layout properties and content for a row. */
	export interface Row {

		/** The relative weight of this row. The row weight is used to adjust the height of rows on the screen (relative to peers). Greater the weight, greater the height of the row on the screen. If omitted, a value of 1 is used while rendering. */
		weight?: string | null;

		/** The display widgets arranged horizontally in this row. */
		widgets?: Array<Widget>;
	}

	/** Defines the layout properties and content for a row. */
	export interface RowFormProperties {

		/** The relative weight of this row. The row weight is used to adjust the height of rows on the screen (relative to peers). Greater the weight, greater the height of the row on the screen. If omitted, a value of 1 is used while rendering. */
		weight: FormControl<string | null | undefined>,
	}
	export function CreateRowFormGroup() {
		return new FormGroup<RowFormProperties>({
			weight: new FormControl<string | null | undefined>(undefined),
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

	export enum FieldCardinality { CARDINALITY_UNKNOWN = 0, CARDINALITY_OPTIONAL = 1, CARDINALITY_REQUIRED = 2, CARDINALITY_REPEATED = 3 }

	export enum FieldKind { TYPE_UNKNOWN = 0, TYPE_DOUBLE = 1, TYPE_FLOAT = 2, TYPE_INT64 = 3, TYPE_UINT64 = 4, TYPE_INT32 = 5, TYPE_FIXED64 = 6, TYPE_FIXED32 = 7, TYPE_BOOL = 8, TYPE_STRING = 9, TYPE_GROUP = 10, TYPE_MESSAGE = 11, TYPE_BYTES = 12, TYPE_UINT32 = 13, TYPE_ENUM = 14, TYPE_SFIXED32 = 15, TYPE_SFIXED64 = 16, TYPE_SINT32 = 17, TYPE_SINT64 = 18 }


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


	/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page.This message can be used both in streaming and non-streaming API methods in the request as well as the response.It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body.Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
	export interface HttpBody {

		/** The HTTP Content-Type header value specifying the content type of the body. */
		contentType?: string | null;

		/** The HTTP request/response body as raw binary. */
		data?: string | null;

		/** Application specific response metadata. Must be set in the first response for streaming APIs. */
		extensions?: Array<string>;
	}

	/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page.This message can be used both in streaming and non-streaming API methods in the request as well as the response.It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body.Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
	export interface HttpBodyFormProperties {

		/** The HTTP Content-Type header value specifying the content type of the body. */
		contentType: FormControl<string | null | undefined>,

		/** The HTTP request/response body as raw binary. */
		data: FormControl<string | null | undefined>,
	}
	export function CreateHttpBodyFormGroup() {
		return new FormGroup<HttpBodyFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ListDashboards request. */
	export interface ListDashboardsResponse {

		/** The list of requested dashboards. */
		dashboards?: Array<Dashboard>;

		/** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken?: string | null;
	}

	/** The ListDashboards request. */
	export interface ListDashboardsResponseFormProperties {

		/** If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDashboardsResponseFormGroup() {
		return new FormGroup<ListDashboardsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the ListMetricsScopesByMonitoredProject method. */
	export interface ListMetricsScopesByMonitoredProjectResponse {

		/** A set of all metrics scopes that the specified monitored project has been added to. */
		metricsScopes?: Array<MetricsScope>;
	}

	/** Response for the ListMetricsScopesByMonitoredProject method. */
	export interface ListMetricsScopesByMonitoredProjectResponseFormProperties {
	}
	export function CreateListMetricsScopesByMonitoredProjectResponseFormGroup() {
		return new FormGroup<ListMetricsScopesByMonitoredProjectResponseFormProperties>({
		});

	}


	/** Represents a Metrics Scope (https://cloud.google.com/monitoring/settings#concept-scope) in Cloud Monitoring, which specifies one or more Google projects and zero or more AWS accounts to monitor together. */
	export interface MetricsScope {

		/** Output only. The time when this Metrics Scope was created. */
		createTime?: string | null;

		/** Output only. The list of projects monitored by this Metrics Scope. */
		monitoredProjects?: Array<MonitoredProject>;

		/** Immutable. The resource name of the Monitoring Metrics Scope. On input, the resource name can be specified with the scoping project ID or number. On output, the resource name is specified with the scoping project number. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER} */
		name?: string | null;

		/** Output only. The time when this Metrics Scope record was last updated. */
		updateTime?: string | null;
	}

	/** Represents a Metrics Scope (https://cloud.google.com/monitoring/settings#concept-scope) in Cloud Monitoring, which specifies one or more Google projects and zero or more AWS accounts to monitor together. */
	export interface MetricsScopeFormProperties {

		/** Output only. The time when this Metrics Scope was created. */
		createTime: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the Monitoring Metrics Scope. On input, the resource name can be specified with the scoping project ID or number. On output, the resource name is specified with the scoping project number. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER} */
		name: FormControl<string | null | undefined>,

		/** Output only. The time when this Metrics Scope record was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateMetricsScopeFormGroup() {
		return new FormGroup<MetricsScopeFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A project being monitored (https://cloud.google.com/monitoring/settings/multiple-projects#create-multi) by a Metrics Scope. */
	export interface MonitoredProject {

		/** Output only. The time when this MonitoredProject was created. */
		createTime?: string | null;

		/** Immutable. The resource name of the MonitoredProject. On input, the resource name includes the scoping project ID and monitored project ID. On output, it contains the equivalent project numbers. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}/projects/{MONITORED_PROJECT_ID_OR_NUMBER} */
		name?: string | null;
	}

	/** A project being monitored (https://cloud.google.com/monitoring/settings/multiple-projects#create-multi) by a Metrics Scope. */
	export interface MonitoredProjectFormProperties {

		/** Output only. The time when this MonitoredProject was created. */
		createTime: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the MonitoredProject. On input, the resource name includes the scoping project ID and monitored project ID. On output, it contains the equivalent project numbers. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}/projects/{MONITORED_PROJECT_ID_OR_NUMBER} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMonitoredProjectFormGroup() {
		return new FormGroup<MonitoredProjectFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
		done?: boolean | null;

		/** The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


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

	export enum OperationMetadataState { STATE_UNSPECIFIED = 0, CREATED = 1, RUNNING = 2, DONE = 3, CANCELLED = 4 }


	/** QueryExemplarsRequest holds all parameters of the Prometheus upstream API for querying exemplars. */
	export interface QueryExemplarsRequest {

		/** The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
		end?: string | null;

		/** A PromQL query string. Query lanauge documentation: https://prometheus.io/docs/prometheus/latest/querying/basics/. */
		query?: string | null;

		/** The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
		start?: string | null;
	}

	/** QueryExemplarsRequest holds all parameters of the Prometheus upstream API for querying exemplars. */
	export interface QueryExemplarsRequestFormProperties {

		/** The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
		end: FormControl<string | null | undefined>,

		/** A PromQL query string. Query lanauge documentation: https://prometheus.io/docs/prometheus/latest/querying/basics/. */
		query: FormControl<string | null | undefined>,

		/** The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
		start: FormControl<string | null | undefined>,
	}
	export function CreateQueryExemplarsRequestFormGroup() {
		return new FormGroup<QueryExemplarsRequestFormProperties>({
			end: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** QueryInstantRequest holds all parameters of the Prometheus upstream instant query API plus GCM specific parameters. */
	export interface QueryInstantRequest {

		/** A PromQL query string. Query lanauge documentation: https://prometheus.io/docs/prometheus/latest/querying/basics/. */
		query?: string | null;

		/** The single point in time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
		time?: string | null;

		/** An upper bound timeout for the query. Either a Prometheus duration string (https://prometheus.io/docs/prometheus/latest/querying/basics/#time-durations) or floating point seconds. This non-standard encoding must be used for compatibility with the open source API. Clients may still implement timeouts at the connection level while ignoring this field. */
		timeout?: string | null;
	}

	/** QueryInstantRequest holds all parameters of the Prometheus upstream instant query API plus GCM specific parameters. */
	export interface QueryInstantRequestFormProperties {

		/** A PromQL query string. Query lanauge documentation: https://prometheus.io/docs/prometheus/latest/querying/basics/. */
		query: FormControl<string | null | undefined>,

		/** The single point in time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
		time: FormControl<string | null | undefined>,

		/** An upper bound timeout for the query. Either a Prometheus duration string (https://prometheus.io/docs/prometheus/latest/querying/basics/#time-durations) or floating point seconds. This non-standard encoding must be used for compatibility with the open source API. Clients may still implement timeouts at the connection level while ignoring this field. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateQueryInstantRequestFormGroup() {
		return new FormGroup<QueryInstantRequestFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** QueryLabelsRequest holds all parameters of the Prometheus upstream API for returning a list of label names. */
	export interface QueryLabelsRequest {

		/** The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
		end?: string | null;

		/** A list of matchers encoded in the Prometheus label matcher format to constrain the values to series that satisfy them. */
		match?: string | null;

		/** The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
		start?: string | null;
	}

	/** QueryLabelsRequest holds all parameters of the Prometheus upstream API for returning a list of label names. */
	export interface QueryLabelsRequestFormProperties {

		/** The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
		end: FormControl<string | null | undefined>,

		/** A list of matchers encoded in the Prometheus label matcher format to constrain the values to series that satisfy them. */
		match: FormControl<string | null | undefined>,

		/** The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
		start: FormControl<string | null | undefined>,
	}
	export function CreateQueryLabelsRequestFormGroup() {
		return new FormGroup<QueryLabelsRequestFormProperties>({
			end: new FormControl<string | null | undefined>(undefined),
			match: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** QueryRangeRequest holds all parameters of the Prometheus upstream range query API plus GCM specific parameters. */
	export interface QueryRangeRequest {

		/** The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
		end?: string | null;

		/** A PromQL query string. Query lanauge documentation: https://prometheus.io/docs/prometheus/latest/querying/basics/. */
		query?: string | null;

		/** The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
		start?: string | null;

		/** The resolution of query result. Either a Prometheus duration string (https://prometheus.io/docs/prometheus/latest/querying/basics/#time-durations) or floating point seconds. This non-standard encoding must be used for compatibility with the open source API. Clients may still implement timeouts at the connection level while ignoring this field. */
		step?: string | null;

		/** An upper bound timeout for the query. Either a Prometheus duration string (https://prometheus.io/docs/prometheus/latest/querying/basics/#time-durations) or floating point seconds. This non-standard encoding must be used for compatibility with the open source API. Clients may still implement timeouts at the connection level while ignoring this field. */
		timeout?: string | null;
	}

	/** QueryRangeRequest holds all parameters of the Prometheus upstream range query API plus GCM specific parameters. */
	export interface QueryRangeRequestFormProperties {

		/** The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
		end: FormControl<string | null | undefined>,

		/** A PromQL query string. Query lanauge documentation: https://prometheus.io/docs/prometheus/latest/querying/basics/. */
		query: FormControl<string | null | undefined>,

		/** The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
		start: FormControl<string | null | undefined>,

		/** The resolution of query result. Either a Prometheus duration string (https://prometheus.io/docs/prometheus/latest/querying/basics/#time-durations) or floating point seconds. This non-standard encoding must be used for compatibility with the open source API. Clients may still implement timeouts at the connection level while ignoring this field. */
		step: FormControl<string | null | undefined>,

		/** An upper bound timeout for the query. Either a Prometheus duration string (https://prometheus.io/docs/prometheus/latest/querying/basics/#time-durations) or floating point seconds. This non-standard encoding must be used for compatibility with the open source API. Clients may still implement timeouts at the connection level while ignoring this field. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateQueryRangeRequestFormGroup() {
		return new FormGroup<QueryRangeRequestFormProperties>({
			end: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
			step: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** QuerySeries holds all parameters of the Prometheus upstream API for querying series. */
	export interface QuerySeriesRequest {

		/** The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
		end?: string | null;

		/** The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
		start?: string | null;
	}

	/** QuerySeries holds all parameters of the Prometheus upstream API for querying series. */
	export interface QuerySeriesRequestFormProperties {

		/** The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
		end: FormControl<string | null | undefined>,

		/** The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp. */
		start: FormControl<string | null | undefined>,
	}
	export function CreateQuerySeriesRequestFormGroup() {
		return new FormGroup<QuerySeriesRequestFormProperties>({
			end: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
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

	export enum TypeSyntax { SYNTAX_PROTO2 = 0, SYNTAX_PROTO3 = 1, SYNTAX_EDITIONS = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of every Metrics Scope that a specific MonitoredProject has been added to. The metrics scope representing the specified monitored project will always be the first entry in the response.
		 * Get v1/locations/global/metricsScopes:listMetricsScopesByMonitoredProject
		 * @param {string} monitoredResourceContainer Required. The resource name of the Monitored Project being requested. Example: projects/{MONITORED_PROJECT_ID_OR_NUMBER}
		 * @return {ListMetricsScopesByMonitoredProjectResponse} Successful response
		 */
		Monitoring_locations_global_metricsScopes_listMetricsScopesByMonitoredProject(monitoredResourceContainer: string | null | undefined): Observable<ListMetricsScopesByMonitoredProjectResponse> {
			return this.http.get<ListMetricsScopesByMonitoredProjectResponse>(this.baseUri + 'v1/locations/global/metricsScopes:listMetricsScopesByMonitoredProject?monitoredResourceContainer=' + (monitoredResourceContainer == null ? '' : encodeURIComponent(monitoredResourceContainer)), {});
		}

		/**
		 * Deletes an existing custom dashboard.This method requires the monitoring.dashboards.delete permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
		 * Delete v1/{name}
		 * @param {string} name Required. The resource name of the Dashboard. The format is: projects/[PROJECT_ID_OR_NUMBER]/dashboards/[DASHBOARD_ID] 
		 * @return {Empty} Successful response
		 */
		Monitoring_projects_dashboards_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Fetches a specific dashboard.This method requires the monitoring.dashboards.get permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
		 * Get v1/{name}
		 * @param {string} name Required. The resource name of the Dashboard. The format is one of: dashboards/[DASHBOARD_ID] (for system dashboards) projects/[PROJECT_ID_OR_NUMBER]/dashboards/[DASHBOARD_ID] (for custom dashboards).
		 * @return {Dashboard} Successful response
		 */
		Monitoring_projects_dashboards_get(name: string): Observable<Dashboard> {
			return this.http.get<Dashboard>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Replaces an existing custom dashboard with a new definition.This method requires the monitoring.dashboards.update permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
		 * Patch v1/{name}
		 * @param {string} name Identifier. The resource name of the dashboard.
		 * @param {boolean} validateOnly If set, validate the request and preview the review, but do not actually save it.
		 * @return {Dashboard} Successful response
		 */
		Monitoring_projects_dashboards_patch(name: string, validateOnly: boolean | null | undefined, requestBody: Dashboard): Observable<Dashboard> {
			return this.http.patch<Dashboard>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists possible values for a given label name.
		 * Get v1/{name}/location/{location}/prometheus/api/v1/label/{label}/values
		 * @param {string} name The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER.
		 * @param {string} location Location of the resource information. Has to be "global" now.
		 * @param {string} label The label name for which values are queried.
		 * @param {string} end The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.
		 * @param {string} match A list of matchers encoded in the Prometheus label matcher format to constrain the values to series that satisfy them.
		 * @param {string} start The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.
		 * @return {HttpBody} Successful response
		 */
		Monitoring_projects_location_prometheus_api_v1_label_values(name: string, location: string, label: string, end: string | null | undefined, match: string | null | undefined, start: string | null | undefined): Observable<HttpBody> {
			return this.http.get<HttpBody>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/location/' + (location == null ? '' : encodeURIComponent(location)) + '/prometheus/api/v1/label/' + (label == null ? '' : encodeURIComponent(label)) + '/values&end=' + (end == null ? '' : encodeURIComponent(end)) + '&match=' + (match == null ? '' : encodeURIComponent(match)) + '&start=' + (start == null ? '' : encodeURIComponent(start)), {});
		}

		/**
		 * Lists labels for metrics.
		 * Post v1/{name}/location/{location}/prometheus/api/v1/labels
		 * @param {string} name The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER.
		 * @param {string} location Location of the resource information. Has to be "global" now.
		 * @return {HttpBody} Successful response
		 */
		Monitoring_projects_location_prometheus_api_v1_labels(name: string, location: string, requestBody: QueryLabelsRequest): Observable<HttpBody> {
			return this.http.post<HttpBody>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/location/' + (location == null ? '' : encodeURIComponent(location)) + '/prometheus/api/v1/labels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists metadata for metrics.
		 * Get v1/{name}/location/{location}/prometheus/api/v1/metadata
		 * @param {string} name Required. The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER.
		 * @param {string} location Location of the resource information. Has to be "global" for now.
		 * @param {string} limit Maximum number of metrics to return.
		 * @param {string} metric The metric name for which to query metadata. If unset, all metric metadata is returned.
		 * @return {HttpBody} Successful response
		 */
		Monitoring_projects_location_prometheus_api_v1_metadata_list(name: string, location: string, limit: string | null | undefined, metric: string | null | undefined): Observable<HttpBody> {
			return this.http.get<HttpBody>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/location/' + (location == null ? '' : encodeURIComponent(location)) + '/prometheus/api/v1/metadata&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&metric=' + (metric == null ? '' : encodeURIComponent(metric)), {});
		}

		/**
		 * Evaluate a PromQL query at a single point in time.
		 * Post v1/{name}/location/{location}/prometheus/api/v1/query
		 * @param {string} name The project on which to execute the request. Data associcated with the project's workspace stored under the The format is: projects/PROJECT_ID_OR_NUMBER. Open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine.
		 * @param {string} location Location of the resource information. Has to be "global" now.
		 * @return {HttpBody} Successful response
		 */
		Monitoring_projects_location_prometheus_api_v1_query(name: string, location: string, requestBody: QueryInstantRequest): Observable<HttpBody> {
			return this.http.post<HttpBody>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/location/' + (location == null ? '' : encodeURIComponent(location)) + '/prometheus/api/v1/query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists exemplars relevant to a given PromQL query,
		 * Post v1/{name}/location/{location}/prometheus/api/v1/query_exemplars
		 * @param {string} name The project on which to execute the request. Data associcated with the project's workspace stored under the The format is: projects/PROJECT_ID_OR_NUMBER. Open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine.
		 * @param {string} location Location of the resource information. Has to be "global" now.
		 * @return {HttpBody} Successful response
		 */
		Monitoring_projects_location_prometheus_api_v1_query_exemplars(name: string, location: string, requestBody: QueryExemplarsRequest): Observable<HttpBody> {
			return this.http.post<HttpBody>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/location/' + (location == null ? '' : encodeURIComponent(location)) + '/prometheus/api/v1/query_exemplars', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Evaluate a PromQL query with start, end time range.
		 * Post v1/{name}/location/{location}/prometheus/api/v1/query_range
		 * @param {string} name The project on which to execute the request. Data associcated with the project's workspace stored under the The format is: projects/PROJECT_ID_OR_NUMBER. Open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine.
		 * @param {string} location Location of the resource information. Has to be "global" now.
		 * @return {HttpBody} Successful response
		 */
		Monitoring_projects_location_prometheus_api_v1_query_range(name: string, location: string, requestBody: QueryRangeRequest): Observable<HttpBody> {
			return this.http.post<HttpBody>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/location/' + (location == null ? '' : encodeURIComponent(location)) + '/prometheus/api/v1/query_range', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists metadata for metrics.
		 * Post v1/{name}/location/{location}/prometheus/api/v1/series
		 * @param {string} name Required. The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER.
		 * @param {string} location Location of the resource information. Has to be "global" for now.
		 * @return {HttpBody} Successful response
		 */
		Monitoring_projects_location_prometheus_api_v1_series(name: string, location: string, requestBody: QuerySeriesRequest): Observable<HttpBody> {
			return this.http.post<HttpBody>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/location/' + (location == null ? '' : encodeURIComponent(location)) + '/prometheus/api/v1/series', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the existing dashboards.This method requires the monitoring.dashboards.list permission on the specified project. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
		 * Get v1/{parent}/dashboards
		 * @param {string} parent Required. The scope of the dashboards to list. The format is: projects/[PROJECT_ID_OR_NUMBER] 
		 * @param {number} pageSize A positive number that is the maximum number of results to return. If unspecified, a default of 1000 is used.
		 * @param {string} pageToken Optional. If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
		 * @return {ListDashboardsResponse} Successful response
		 */
		Monitoring_projects_dashboards_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDashboardsResponse> {
			return this.http.get<ListDashboardsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dashboards&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new custom dashboard. For examples on how you can use this API to create dashboards, see Managing dashboards by API (https://cloud.google.com/monitoring/dashboards/api-dashboard). This method requires the monitoring.dashboards.create permission on the specified project. For more information about permissions, see Cloud Identity and Access Management (https://cloud.google.com/iam).
		 * Post v1/{parent}/dashboards
		 * @param {string} parent Required. The project on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] The [PROJECT_ID_OR_NUMBER] must match the dashboard resource name.
		 * @param {boolean} validateOnly If set, validate the request and preview the review, but do not actually save it.
		 * @return {Dashboard} Successful response
		 */
		Monitoring_projects_dashboards_create(parent: string, validateOnly: boolean | null | undefined, requestBody: Dashboard): Observable<Dashboard> {
			return this.http.post<Dashboard>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dashboards&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a MonitoredProject with the given project ID to the specified Metrics Scope.
		 * Post v1/{parent}/projects
		 * @param {string} parent Required. The resource name of the existing Metrics Scope that will monitor this project. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}
		 * @return {Operation} Successful response
		 */
		Monitoring_locations_global_metricsScopes_projects_create(parent: string, requestBody: MonitoredProject): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

