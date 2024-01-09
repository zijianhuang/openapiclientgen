import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ResourceNotFound {
	}
	export interface ResourceNotFoundFormProperties {
	}
	export function CreateResourceNotFoundFormGroup() {
		return new FormGroup<ResourceNotFoundFormProperties>({
		});

	}

	export interface DeleteAnomalyDetectorOutput {
	}
	export interface DeleteAnomalyDetectorOutputFormProperties {
	}
	export function CreateDeleteAnomalyDetectorOutputFormGroup() {
		return new FormGroup<DeleteAnomalyDetectorOutputFormProperties>({
		});

	}


	/** Expands the identity of a metric. */
	export interface Dimension {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Value: string;
	}

	/** Expands the identity of a metric. */
	export interface DimensionFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
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

	export interface InternalServiceFault {
	}
	export interface InternalServiceFaultFormProperties {
	}
	export function CreateInternalServiceFaultFormGroup() {
		return new FormGroup<InternalServiceFaultFormProperties>({
		});

	}

	export interface InvalidParameterValueException {
	}
	export interface InvalidParameterValueExceptionFormProperties {
	}
	export function CreateInvalidParameterValueExceptionFormGroup() {
		return new FormGroup<InvalidParameterValueExceptionFormProperties>({
		});

	}

	export interface MissingRequiredParameterException {
	}
	export interface MissingRequiredParameterExceptionFormProperties {
	}
	export function CreateMissingRequiredParameterExceptionFormGroup() {
		return new FormGroup<MissingRequiredParameterExceptionFormProperties>({
		});

	}

	export interface DeleteDashboardsOutput {
	}
	export interface DeleteDashboardsOutputFormProperties {
	}
	export function CreateDeleteDashboardsOutputFormGroup() {
		return new FormGroup<DeleteDashboardsOutputFormProperties>({
		});

	}

	export interface DashboardNotFoundError {
	}
	export interface DashboardNotFoundErrorFormProperties {
	}
	export function CreateDashboardNotFoundErrorFormGroup() {
		return new FormGroup<DashboardNotFoundErrorFormProperties>({
		});

	}

	export interface DeleteInsightRulesOutput {
		Failures?: Array<PartialFailure>;
	}
	export interface DeleteInsightRulesOutputFormProperties {
	}
	export function CreateDeleteInsightRulesOutputFormGroup() {
		return new FormGroup<DeleteInsightRulesOutputFormProperties>({
		});

	}


	/** This array is empty if the API operation was successful for all the rules specified in the request. If the operation could not process one of the rules, the following data is returned for each of those rules. */
	export interface PartialFailure {
		FailureResource?: string | null;
		ExceptionType?: string | null;
		FailureCode?: string | null;
		FailureDescription?: string | null;
	}

	/** This array is empty if the API operation was successful for all the rules specified in the request. If the operation could not process one of the rules, the following data is returned for each of those rules. */
	export interface PartialFailureFormProperties {
		FailureResource: FormControl<string | null | undefined>,
		ExceptionType: FormControl<string | null | undefined>,
		FailureCode: FormControl<string | null | undefined>,
		FailureDescription: FormControl<string | null | undefined>,
	}
	export function CreatePartialFailureFormGroup() {
		return new FormGroup<PartialFailureFormProperties>({
			FailureResource: new FormControl<string | null | undefined>(undefined),
			ExceptionType: new FormControl<string | null | undefined>(undefined),
			FailureCode: new FormControl<string | null | undefined>(undefined),
			FailureDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAlarmHistoryOutput {
		AlarmHistoryItems?: Array<AlarmHistoryItem>;
		NextToken?: string | null;
	}
	export interface DescribeAlarmHistoryOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAlarmHistoryOutputFormGroup() {
		return new FormGroup<DescribeAlarmHistoryOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the history of a specific alarm. */
	export interface AlarmHistoryItem {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		AlarmName?: string | null;
		AlarmType?: AlarmHistoryItemAlarmType | null;
		Timestamp?: Date | null;
		HistoryItemType?: AlarmHistoryItemHistoryItemType | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		HistorySummary?: string | null;

		/**
		 * Max length: 4095
		 * Min length: 1
		 */
		HistoryData?: string | null;
	}

	/** Represents the history of a specific alarm. */
	export interface AlarmHistoryItemFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		AlarmName: FormControl<string | null | undefined>,
		AlarmType: FormControl<AlarmHistoryItemAlarmType | null | undefined>,
		Timestamp: FormControl<Date | null | undefined>,
		HistoryItemType: FormControl<AlarmHistoryItemHistoryItemType | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		HistorySummary: FormControl<string | null | undefined>,

		/**
		 * Max length: 4095
		 * Min length: 1
		 */
		HistoryData: FormControl<string | null | undefined>,
	}
	export function CreateAlarmHistoryItemFormGroup() {
		return new FormGroup<AlarmHistoryItemFormProperties>({
			AlarmName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			AlarmType: new FormControl<AlarmHistoryItemAlarmType | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			HistoryItemType: new FormControl<AlarmHistoryItemHistoryItemType | null | undefined>(undefined),
			HistorySummary: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			HistoryData: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4095), Validators.minLength(1)]),
		});

	}

	export enum AlarmHistoryItemAlarmType { CompositeAlarm = 0, MetricAlarm = 1 }

	export enum AlarmHistoryItemHistoryItemType { ConfigurationUpdate = 0, StateUpdate = 1, Action = 2 }

	export enum AlarmType { CompositeAlarm = 0, MetricAlarm = 1 }

	export interface InvalidNextToken {
	}
	export interface InvalidNextTokenFormProperties {
	}
	export function CreateInvalidNextTokenFormGroup() {
		return new FormGroup<InvalidNextTokenFormProperties>({
		});

	}

	export interface DescribeAlarmsOutput {
		CompositeAlarms?: Array<CompositeAlarm>;
		MetricAlarms?: Array<MetricAlarm>;
		NextToken?: string | null;
	}
	export interface DescribeAlarmsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAlarmsOutputFormGroup() {
		return new FormGroup<DescribeAlarmsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details about a composite alarm. */
	export interface CompositeAlarm {
		ActionsEnabled?: boolean | null;

		/** Maximum items: 5 */
		AlarmActions?: Array<string>;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		AlarmArn?: string | null;
		AlarmConfigurationUpdatedTimestamp?: Date | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		AlarmDescription?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		AlarmName?: string | null;

		/**
		 * Max length: 10240
		 * Min length: 1
		 */
		AlarmRule?: string | null;

		/** Maximum items: 5 */
		InsufficientDataActions?: Array<string>;

		/** Maximum items: 5 */
		OKActions?: Array<string>;

		/**
		 * Max length: 1023
		 * Min length: 0
		 */
		StateReason?: string | null;

		/**
		 * Max length: 4000
		 * Min length: 0
		 */
		StateReasonData?: string | null;
		StateUpdatedTimestamp?: Date | null;
		StateValue?: CompositeAlarmStateValue | null;
	}

	/** The details about a composite alarm. */
	export interface CompositeAlarmFormProperties {
		ActionsEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		AlarmArn: FormControl<string | null | undefined>,
		AlarmConfigurationUpdatedTimestamp: FormControl<Date | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		AlarmDescription: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		AlarmName: FormControl<string | null | undefined>,

		/**
		 * Max length: 10240
		 * Min length: 1
		 */
		AlarmRule: FormControl<string | null | undefined>,

		/**
		 * Max length: 1023
		 * Min length: 0
		 */
		StateReason: FormControl<string | null | undefined>,

		/**
		 * Max length: 4000
		 * Min length: 0
		 */
		StateReasonData: FormControl<string | null | undefined>,
		StateUpdatedTimestamp: FormControl<Date | null | undefined>,
		StateValue: FormControl<CompositeAlarmStateValue | null | undefined>,
	}
	export function CreateCompositeAlarmFormGroup() {
		return new FormGroup<CompositeAlarmFormProperties>({
			ActionsEnabled: new FormControl<boolean | null | undefined>(undefined),
			AlarmArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
			AlarmConfigurationUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			AlarmDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			AlarmName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			AlarmRule: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10240), Validators.minLength(1)]),
			StateReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1023), Validators.minLength(0)]),
			StateReasonData: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4000), Validators.minLength(0)]),
			StateUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			StateValue: new FormControl<CompositeAlarmStateValue | null | undefined>(undefined),
		});

	}

	export enum CompositeAlarmStateValue { OK = 0, ALARM = 1, INSUFFICIENT_DATA = 2 }


	/** The details about a metric alarm. */
	export interface MetricAlarm {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		AlarmName?: string | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		AlarmArn?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		AlarmDescription?: string | null;
		AlarmConfigurationUpdatedTimestamp?: Date | null;
		ActionsEnabled?: boolean | null;

		/** Maximum items: 5 */
		OKActions?: Array<string>;

		/** Maximum items: 5 */
		AlarmActions?: Array<string>;

		/** Maximum items: 5 */
		InsufficientDataActions?: Array<string>;
		StateValue?: CompositeAlarmStateValue | null;

		/**
		 * Max length: 1023
		 * Min length: 0
		 */
		StateReason?: string | null;

		/**
		 * Max length: 4000
		 * Min length: 0
		 */
		StateReasonData?: string | null;
		StateUpdatedTimestamp?: Date | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace?: string | null;
		Statistic?: MetricAlarmStatistic | null;
		ExtendedStatistic?: string | null;

		/** Maximum items: 10 */
		Dimensions?: Array<Dimension>;

		/** Minimum: 1 */
		Period?: number | null;
		Unit?: MetricAlarmUnit | null;

		/** Minimum: 1 */
		EvaluationPeriods?: number | null;

		/** Minimum: 1 */
		DatapointsToAlarm?: number | null;
		Threshold?: number | null;
		ComparisonOperator?: MetricAlarmComparisonOperator | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TreatMissingData?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		EvaluateLowSampleCountPercentile?: string | null;
		Metrics?: Array<MetricDataQuery>;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ThresholdMetricId?: string | null;
	}

	/** The details about a metric alarm. */
	export interface MetricAlarmFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		AlarmName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		AlarmArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		AlarmDescription: FormControl<string | null | undefined>,
		AlarmConfigurationUpdatedTimestamp: FormControl<Date | null | undefined>,
		ActionsEnabled: FormControl<boolean | null | undefined>,
		StateValue: FormControl<CompositeAlarmStateValue | null | undefined>,

		/**
		 * Max length: 1023
		 * Min length: 0
		 */
		StateReason: FormControl<string | null | undefined>,

		/**
		 * Max length: 4000
		 * Min length: 0
		 */
		StateReasonData: FormControl<string | null | undefined>,
		StateUpdatedTimestamp: FormControl<Date | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace: FormControl<string | null | undefined>,
		Statistic: FormControl<MetricAlarmStatistic | null | undefined>,
		ExtendedStatistic: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		Period: FormControl<number | null | undefined>,
		Unit: FormControl<MetricAlarmUnit | null | undefined>,

		/** Minimum: 1 */
		EvaluationPeriods: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		DatapointsToAlarm: FormControl<number | null | undefined>,
		Threshold: FormControl<number | null | undefined>,
		ComparisonOperator: FormControl<MetricAlarmComparisonOperator | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TreatMissingData: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		EvaluateLowSampleCountPercentile: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ThresholdMetricId: FormControl<string | null | undefined>,
	}
	export function CreateMetricAlarmFormGroup() {
		return new FormGroup<MetricAlarmFormProperties>({
			AlarmName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			AlarmArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
			AlarmDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			AlarmConfigurationUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ActionsEnabled: new FormControl<boolean | null | undefined>(undefined),
			StateValue: new FormControl<CompositeAlarmStateValue | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1023), Validators.minLength(0)]),
			StateReasonData: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4000), Validators.minLength(0)]),
			StateUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			Namespace: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[^:].*')]),
			Statistic: new FormControl<MetricAlarmStatistic | null | undefined>(undefined),
			ExtendedStatistic: new FormControl<string | null | undefined>(undefined),
			Period: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			Unit: new FormControl<MetricAlarmUnit | null | undefined>(undefined),
			EvaluationPeriods: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			DatapointsToAlarm: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			Threshold: new FormControl<number | null | undefined>(undefined),
			ComparisonOperator: new FormControl<MetricAlarmComparisonOperator | null | undefined>(undefined),
			TreatMissingData: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			EvaluateLowSampleCountPercentile: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			ThresholdMetricId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export enum MetricAlarmStatistic { SampleCount = 0, Average = 1, Sum = 2, Minimum = 3, Maximum = 4 }

	export enum MetricAlarmUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export enum MetricAlarmComparisonOperator { GreaterThanOrEqualToThreshold = 0, GreaterThanThreshold = 1, LessThanThreshold = 2, LessThanOrEqualToThreshold = 3, LessThanLowerOrGreaterThanUpperThreshold = 4, LessThanLowerThreshold = 5, GreaterThanUpperThreshold = 6 }


	/** <p>This structure is used in both <code>GetMetricData</code> and <code>PutMetricAlarm</code>. The supported use of this structure is different for those two operations.</p> <p>When used in <code>GetMetricData</code>, it indicates the metric data to return, and whether this call is just retrieving a batch set of data for one metric, or is performing a math expression on metric data. A single <code>GetMetricData</code> call can include up to 500 <code>MetricDataQuery</code> structures.</p> <p>When used in <code>PutMetricAlarm</code>, it enables you to create an alarm based on a metric math expression. Each <code>MetricDataQuery</code> in the array specifies either a metric to retrieve, or a math expression to be performed on retrieved metrics. A single <code>PutMetricAlarm</code> call can include up to 20 <code>MetricDataQuery</code> structures in the array. The 20 structures can include as many as 10 structures that contain a <code>MetricStat</code> parameter to retrieve a metric, and as many as 10 structures that contain the <code>Expression</code> parameter to perform a math expression. Of those <code>Expression</code> structures, one must have <code>True</code> as the value for <code>ReturnData</code>. The result of this expression is the value the alarm watches.</p> <p>Any expression used in a <code>PutMetricAlarm</code> operation must return a single time series. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Some of the parameters of this structure also have different uses whether you are using this structure in a <code>GetMetricData</code> operation or a <code>PutMetricAlarm</code> operation. These differences are explained in the following parameter list.</p> */
	export interface MetricDataQuery {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Id: string;

		/** This structure defines the metric to be returned, along with the statistics, period, and units. */
		MetricStat?: MetricStat;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Expression?: string | null;
		Label?: string | null;
		ReturnData?: boolean | null;

		/** Minimum: 1 */
		Period?: number | null;
	}

	/** <p>This structure is used in both <code>GetMetricData</code> and <code>PutMetricAlarm</code>. The supported use of this structure is different for those two operations.</p> <p>When used in <code>GetMetricData</code>, it indicates the metric data to return, and whether this call is just retrieving a batch set of data for one metric, or is performing a math expression on metric data. A single <code>GetMetricData</code> call can include up to 500 <code>MetricDataQuery</code> structures.</p> <p>When used in <code>PutMetricAlarm</code>, it enables you to create an alarm based on a metric math expression. Each <code>MetricDataQuery</code> in the array specifies either a metric to retrieve, or a math expression to be performed on retrieved metrics. A single <code>PutMetricAlarm</code> call can include up to 20 <code>MetricDataQuery</code> structures in the array. The 20 structures can include as many as 10 structures that contain a <code>MetricStat</code> parameter to retrieve a metric, and as many as 10 structures that contain the <code>Expression</code> parameter to perform a math expression. Of those <code>Expression</code> structures, one must have <code>True</code> as the value for <code>ReturnData</code>. The result of this expression is the value the alarm watches.</p> <p>Any expression used in a <code>PutMetricAlarm</code> operation must return a single time series. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Some of the parameters of this structure also have different uses whether you are using this structure in a <code>GetMetricData</code> operation or a <code>PutMetricAlarm</code> operation. These differences are explained in the following parameter list.</p> */
	export interface MetricDataQueryFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Expression: FormControl<string | null | undefined>,
		Label: FormControl<string | null | undefined>,
		ReturnData: FormControl<boolean | null | undefined>,

		/** Minimum: 1 */
		Period: FormControl<number | null | undefined>,
	}
	export function CreateMetricDataQueryFormGroup() {
		return new FormGroup<MetricDataQueryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			Expression: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			Label: new FormControl<string | null | undefined>(undefined),
			ReturnData: new FormControl<boolean | null | undefined>(undefined),
			Period: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** This structure defines the metric to be returned, along with the statistics, period, and units. */
	export interface MetricStat {

		/**
		 * Represents a specific metric.
		 * Required
		 */
		Metric: Metric;

		/**
		 * Required
		 * Minimum: 1
		 */
		Period: number;

		/** Required */
		Stat: string;
		Unit?: MetricStatUnit | null;
	}

	/** This structure defines the metric to be returned, along with the statistics, period, and units. */
	export interface MetricStatFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 */
		Period: FormControl<number | null | undefined>,

		/** Required */
		Stat: FormControl<string | null | undefined>,
		Unit: FormControl<MetricStatUnit | null | undefined>,
	}
	export function CreateMetricStatFormGroup() {
		return new FormGroup<MetricStatFormProperties>({
			Period: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			Stat: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Unit: new FormControl<MetricStatUnit | null | undefined>(undefined),
		});

	}


	/** Represents a specific metric. */
	export interface Metric {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName?: string | null;

		/** Maximum items: 10 */
		Dimensions?: Array<Dimension>;
	}

	/** Represents a specific metric. */
	export interface MetricFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			Namespace: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[^:].*')]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export enum MetricStatUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export interface DescribeAlarmsForMetricOutput {
		MetricAlarms?: Array<MetricAlarm>;
	}
	export interface DescribeAlarmsForMetricOutputFormProperties {
	}
	export function CreateDescribeAlarmsForMetricOutputFormGroup() {
		return new FormGroup<DescribeAlarmsForMetricOutputFormProperties>({
		});

	}

	export interface DescribeAnomalyDetectorsOutput {
		AnomalyDetectors?: Array<AnomalyDetector>;
		NextToken?: string | null;
	}
	export interface DescribeAnomalyDetectorsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAnomalyDetectorsOutputFormGroup() {
		return new FormGroup<DescribeAnomalyDetectorsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An anomaly detection model associated with a particular CloudWatch metric and statistic. You can use the model to display a band of expected normal values when the metric is graphed. */
	export interface AnomalyDetector {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName?: string | null;

		/** Maximum items: 10 */
		Dimensions?: Array<Dimension>;
		Stat?: string | null;

		/** The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model and the time zone to use for the metric. */
		Configuration?: AnomalyDetectorConfiguration;
		StateValue?: AnomalyDetectorStateValue | null;
	}

	/** An anomaly detection model associated with a particular CloudWatch metric and statistic. You can use the model to display a band of expected normal values when the metric is graphed. */
	export interface AnomalyDetectorFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,
		Stat: FormControl<string | null | undefined>,
		StateValue: FormControl<AnomalyDetectorStateValue | null | undefined>,
	}
	export function CreateAnomalyDetectorFormGroup() {
		return new FormGroup<AnomalyDetectorFormProperties>({
			Namespace: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[^:].*')]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			Stat: new FormControl<string | null | undefined>(undefined),
			StateValue: new FormControl<AnomalyDetectorStateValue | null | undefined>(undefined),
		});

	}


	/** The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model and the time zone to use for the metric. */
	export interface AnomalyDetectorConfiguration {
		ExcludedTimeRanges?: Array<Range>;

		/** Max length: 50 */
		MetricTimezone?: string | null;
	}

	/** The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model and the time zone to use for the metric. */
	export interface AnomalyDetectorConfigurationFormProperties {

		/** Max length: 50 */
		MetricTimezone: FormControl<string | null | undefined>,
	}
	export function CreateAnomalyDetectorConfigurationFormGroup() {
		return new FormGroup<AnomalyDetectorConfigurationFormProperties>({
			MetricTimezone: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.pattern('.*')]),
		});

	}


	/** Specifies one range of days or times to exclude from use for training an anomaly detection model. */
	export interface Range {

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;
	}

	/** Specifies one range of days or times to exclude from use for training an anomaly detection model. */
	export interface RangeFormProperties {

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateRangeFormGroup() {
		return new FormGroup<RangeFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AnomalyDetectorStateValue { PENDING_TRAINING = 0, TRAINED_INSUFFICIENT_DATA = 1, TRAINED = 2 }

	export interface DescribeInsightRulesOutput {
		NextToken?: string | null;
		InsightRules?: Array<InsightRule>;
	}
	export interface DescribeInsightRulesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeInsightRulesOutputFormGroup() {
		return new FormGroup<DescribeInsightRulesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This structure contains the definition for a Contributor Insights rule. */
	export interface InsightRule {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		State: string;

		/** Required */
		Schema: string;

		/**
		 * Required
		 * Max length: 8192
		 * Min length: 1
		 */
		Definition: string;
	}

	/** This structure contains the definition for a Contributor Insights rule. */
	export interface InsightRuleFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		State: FormControl<string | null | undefined>,

		/** Required */
		Schema: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 8192
		 * Min length: 1
		 */
		Definition: FormControl<string | null | undefined>,
	}
	export function CreateInsightRuleFormGroup() {
		return new FormGroup<InsightRuleFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\x20-\x7E]+')]),
			State: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(1), Validators.pattern('[\x20-\x7E]+')]),
			Schema: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Definition: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(8192), Validators.minLength(1), Validators.pattern('[\x00-\x7F]+')]),
		});

	}

	export interface DisableInsightRulesOutput {
		Failures?: Array<PartialFailure>;
	}
	export interface DisableInsightRulesOutputFormProperties {
	}
	export function CreateDisableInsightRulesOutputFormGroup() {
		return new FormGroup<DisableInsightRulesOutputFormProperties>({
		});

	}

	export interface EnableInsightRulesOutput {
		Failures?: Array<PartialFailure>;
	}
	export interface EnableInsightRulesOutputFormProperties {
	}
	export function CreateEnableInsightRulesOutputFormGroup() {
		return new FormGroup<EnableInsightRulesOutputFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface GetDashboardOutput {
		DashboardArn?: string | null;
		DashboardBody?: string | null;
		DashboardName?: string | null;
	}
	export interface GetDashboardOutputFormProperties {
		DashboardArn: FormControl<string | null | undefined>,
		DashboardBody: FormControl<string | null | undefined>,
		DashboardName: FormControl<string | null | undefined>,
	}
	export function CreateGetDashboardOutputFormGroup() {
		return new FormGroup<GetDashboardOutputFormProperties>({
			DashboardArn: new FormControl<string | null | undefined>(undefined),
			DashboardBody: new FormControl<string | null | undefined>(undefined),
			DashboardName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInsightRuleReportOutput {
		KeyLabels?: Array<string>;
		AggregationStatistic?: string | null;
		AggregateValue?: number | null;
		ApproximateUniqueCount?: number | null;
		Contributors?: Array<InsightRuleContributor>;
		MetricDatapoints?: Array<InsightRuleMetricDatapoint>;
	}
	export interface GetInsightRuleReportOutputFormProperties {
		AggregationStatistic: FormControl<string | null | undefined>,
		AggregateValue: FormControl<number | null | undefined>,
		ApproximateUniqueCount: FormControl<number | null | undefined>,
	}
	export function CreateGetInsightRuleReportOutputFormGroup() {
		return new FormGroup<GetInsightRuleReportOutputFormProperties>({
			AggregationStatistic: new FormControl<string | null | undefined>(undefined),
			AggregateValue: new FormControl<number | null | undefined>(undefined),
			ApproximateUniqueCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>One of the unique contributors found by a Contributor Insights rule. If the rule contains multiple keys, then a unique contributor is a unique combination of values from all the keys in the rule.</p> <p>If the rule contains a single key, then each unique contributor is each unique value for this key.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p> */
	export interface InsightRuleContributor {

		/** Required */
		Keys: Array<string>;

		/** Required */
		ApproximateAggregateValue: number;

		/** Required */
		Datapoints: Array<InsightRuleContributorDatapoint>;
	}

	/** <p>One of the unique contributors found by a Contributor Insights rule. If the rule contains multiple keys, then a unique contributor is a unique combination of values from all the keys in the rule.</p> <p>If the rule contains a single key, then each unique contributor is each unique value for this key.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p> */
	export interface InsightRuleContributorFormProperties {

		/** Required */
		ApproximateAggregateValue: FormControl<number | null | undefined>,
	}
	export function CreateInsightRuleContributorFormGroup() {
		return new FormGroup<InsightRuleContributorFormProperties>({
			ApproximateAggregateValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>One data point related to one contributor.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_InsightRuleContributor.html">InsightRuleContributor</a>.</p> */
	export interface InsightRuleContributorDatapoint {

		/** Required */
		Timestamp: Date;

		/** Required */
		ApproximateValue: number;
	}

	/** <p>One data point related to one contributor.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_InsightRuleContributor.html">InsightRuleContributor</a>.</p> */
	export interface InsightRuleContributorDatapointFormProperties {

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,

		/** Required */
		ApproximateValue: FormControl<number | null | undefined>,
	}
	export function CreateInsightRuleContributorDatapointFormGroup() {
		return new FormGroup<InsightRuleContributorDatapointFormProperties>({
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ApproximateValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>One data point from the metric time series returned in a Contributor Insights rule report.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p> */
	export interface InsightRuleMetricDatapoint {

		/** Required */
		Timestamp: Date;
		UniqueContributors?: number | null;
		MaxContributorValue?: number | null;
		SampleCount?: number | null;
		Average?: number | null;
		Sum?: number | null;
		Minimum?: number | null;
		Maximum?: number | null;
	}

	/** <p>One data point from the metric time series returned in a Contributor Insights rule report.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetInsightRuleReport.html">GetInsightRuleReport</a>.</p> */
	export interface InsightRuleMetricDatapointFormProperties {

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,
		UniqueContributors: FormControl<number | null | undefined>,
		MaxContributorValue: FormControl<number | null | undefined>,
		SampleCount: FormControl<number | null | undefined>,
		Average: FormControl<number | null | undefined>,
		Sum: FormControl<number | null | undefined>,
		Minimum: FormControl<number | null | undefined>,
		Maximum: FormControl<number | null | undefined>,
	}
	export function CreateInsightRuleMetricDatapointFormGroup() {
		return new FormGroup<InsightRuleMetricDatapointFormProperties>({
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			UniqueContributors: new FormControl<number | null | undefined>(undefined),
			MaxContributorValue: new FormControl<number | null | undefined>(undefined),
			SampleCount: new FormControl<number | null | undefined>(undefined),
			Average: new FormControl<number | null | undefined>(undefined),
			Sum: new FormControl<number | null | undefined>(undefined),
			Minimum: new FormControl<number | null | undefined>(undefined),
			Maximum: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetMetricDataOutput {
		MetricDataResults?: Array<MetricDataResult>;
		NextToken?: string | null;
		Messages?: Array<MessageData>;
	}
	export interface GetMetricDataOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetMetricDataOutputFormGroup() {
		return new FormGroup<GetMetricDataOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A <code>GetMetricData</code> call returns an array of <code>MetricDataResult</code> structures. Each of these structures includes the data points for that metric, along with the timestamps of those data points and other identifying information. */
	export interface MetricDataResult {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Id?: string | null;
		Label?: string | null;
		Timestamps?: Array<string>;
		Values?: Array<number>;
		StatusCode?: MetricDataResultStatusCode | null;
		Messages?: Array<MessageData>;
	}

	/** A <code>GetMetricData</code> call returns an array of <code>MetricDataResult</code> structures. Each of these structures includes the data points for that metric, along with the timestamps of those data points and other identifying information. */
	export interface MetricDataResultFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
		Label: FormControl<string | null | undefined>,
		StatusCode: FormControl<MetricDataResultStatusCode | null | undefined>,
	}
	export function CreateMetricDataResultFormGroup() {
		return new FormGroup<MetricDataResultFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			Label: new FormControl<string | null | undefined>(undefined),
			StatusCode: new FormControl<MetricDataResultStatusCode | null | undefined>(undefined),
		});

	}

	export enum MetricDataResultStatusCode { Complete = 0, InternalError = 1, PartialData = 2 }


	/** A message returned by the <code>GetMetricData</code>API, including a code and a description. */
	export interface MessageData {
		Code?: string | null;
		Value?: string | null;
	}

	/** A message returned by the <code>GetMetricData</code>API, including a code and a description. */
	export interface MessageDataFormProperties {
		Code: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateMessageDataFormGroup() {
		return new FormGroup<MessageDataFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMetricStatisticsOutput {
		Label?: string | null;
		Datapoints?: Array<Datapoint>;
	}
	export interface GetMetricStatisticsOutputFormProperties {
		Label: FormControl<string | null | undefined>,
	}
	export function CreateGetMetricStatisticsOutputFormGroup() {
		return new FormGroup<GetMetricStatisticsOutputFormProperties>({
			Label: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encapsulates the statistical data that CloudWatch computes from metric data. */
	export interface Datapoint {
		Timestamp?: Date | null;
		SampleCount?: number | null;
		Average?: number | null;
		Sum?: number | null;
		Minimum?: number | null;
		Maximum?: number | null;
		Unit?: DatapointUnit | null;
		ExtendedStatistics?: DatapointValueMap;
	}

	/** Encapsulates the statistical data that CloudWatch computes from metric data. */
	export interface DatapointFormProperties {
		Timestamp: FormControl<Date | null | undefined>,
		SampleCount: FormControl<number | null | undefined>,
		Average: FormControl<number | null | undefined>,
		Sum: FormControl<number | null | undefined>,
		Minimum: FormControl<number | null | undefined>,
		Maximum: FormControl<number | null | undefined>,
		Unit: FormControl<DatapointUnit | null | undefined>,
	}
	export function CreateDatapointFormGroup() {
		return new FormGroup<DatapointFormProperties>({
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			SampleCount: new FormControl<number | null | undefined>(undefined),
			Average: new FormControl<number | null | undefined>(undefined),
			Sum: new FormControl<number | null | undefined>(undefined),
			Minimum: new FormControl<number | null | undefined>(undefined),
			Maximum: new FormControl<number | null | undefined>(undefined),
			Unit: new FormControl<DatapointUnit | null | undefined>(undefined),
		});

	}

	export enum DatapointUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export interface DatapointValueMap {
	}
	export interface DatapointValueMapFormProperties {
	}
	export function CreateDatapointValueMapFormGroup() {
		return new FormGroup<DatapointValueMapFormProperties>({
		});

	}

	export enum Statistic { SampleCount = 0, Average = 1, Sum = 2, Minimum = 3, Maximum = 4 }

	export interface InvalidParameterCombinationException {
	}
	export interface InvalidParameterCombinationExceptionFormProperties {
	}
	export function CreateInvalidParameterCombinationExceptionFormGroup() {
		return new FormGroup<InvalidParameterCombinationExceptionFormProperties>({
		});

	}

	export interface GetMetricWidgetImageOutput {
		MetricWidgetImage?: string | null;
	}
	export interface GetMetricWidgetImageOutputFormProperties {
		MetricWidgetImage: FormControl<string | null | undefined>,
	}
	export function CreateGetMetricWidgetImageOutputFormGroup() {
		return new FormGroup<GetMetricWidgetImageOutputFormProperties>({
			MetricWidgetImage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDashboardsOutput {
		DashboardEntries?: Array<DashboardEntry>;
		NextToken?: string | null;
	}
	export interface ListDashboardsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDashboardsOutputFormGroup() {
		return new FormGroup<ListDashboardsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a specific dashboard. */
	export interface DashboardEntry {
		DashboardName?: string | null;
		DashboardArn?: string | null;
		LastModified?: Date | null;
		Size?: number | null;
	}

	/** Represents a specific dashboard. */
	export interface DashboardEntryFormProperties {
		DashboardName: FormControl<string | null | undefined>,
		DashboardArn: FormControl<string | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		Size: FormControl<number | null | undefined>,
	}
	export function CreateDashboardEntryFormGroup() {
		return new FormGroup<DashboardEntryFormProperties>({
			DashboardName: new FormControl<string | null | undefined>(undefined),
			DashboardArn: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMetricsOutput {
		Metrics?: Array<Metric>;
		NextToken?: string | null;
	}
	export interface ListMetricsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMetricsOutputFormGroup() {
		return new FormGroup<ListMetricsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents filters for a dimension. */
	export interface DimensionFilter {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Value?: string | null;
	}

	/** Represents filters for a dimension. */
	export interface DimensionFilterFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateDimensionFilterFormGroup() {
		return new FormGroup<DimensionFilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface ListTagsForResourceOutput {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceOutputFormProperties {
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
		});

	}


	/** A key-value pair associated with a CloudWatch resource. */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: string;
	}

	/** A key-value pair associated with a CloudWatch resource. */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(0)]),
		});

	}

	export interface PutAnomalyDetectorOutput {
	}
	export interface PutAnomalyDetectorOutputFormProperties {
	}
	export function CreatePutAnomalyDetectorOutputFormGroup() {
		return new FormGroup<PutAnomalyDetectorOutputFormProperties>({
		});

	}

	export interface LimitExceededFault {
	}
	export interface LimitExceededFaultFormProperties {
	}
	export function CreateLimitExceededFaultFormGroup() {
		return new FormGroup<LimitExceededFaultFormProperties>({
		});

	}

	export interface PutDashboardOutput {
		DashboardValidationMessages?: Array<DashboardValidationMessage>;
	}
	export interface PutDashboardOutputFormProperties {
	}
	export function CreatePutDashboardOutputFormGroup() {
		return new FormGroup<PutDashboardOutputFormProperties>({
		});

	}


	/** An error or warning for the operation. */
	export interface DashboardValidationMessage {
		DataPath?: string | null;
		Message?: string | null;
	}

	/** An error or warning for the operation. */
	export interface DashboardValidationMessageFormProperties {
		DataPath: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateDashboardValidationMessageFormGroup() {
		return new FormGroup<DashboardValidationMessageFormProperties>({
			DataPath: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DashboardInvalidInputError {
	}
	export interface DashboardInvalidInputErrorFormProperties {
	}
	export function CreateDashboardInvalidInputErrorFormGroup() {
		return new FormGroup<DashboardInvalidInputErrorFormProperties>({
		});

	}

	export interface PutInsightRuleOutput {
	}
	export interface PutInsightRuleOutputFormProperties {
	}
	export function CreatePutInsightRuleOutputFormGroup() {
		return new FormGroup<PutInsightRuleOutputFormProperties>({
		});

	}


	/** Encapsulates the information sent to either create a metric or add new values to be aggregated into an existing metric. */
	export interface MetricDatum {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: string;

		/** Maximum items: 10 */
		Dimensions?: Array<Dimension>;
		Timestamp?: Date | null;
		Value?: number | null;

		/** Represents a set of statistics that describes a specific metric. */
		StatisticValues?: StatisticSet;
		Values?: Array<number>;
		Counts?: Array<number>;
		Unit?: MetricDatumUnit | null;

		/** Minimum: 1 */
		StorageResolution?: number | null;
	}

	/** Encapsulates the information sent to either create a metric or add new values to be aggregated into an existing metric. */
	export interface MetricDatumFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,
		Timestamp: FormControl<Date | null | undefined>,
		Value: FormControl<number | null | undefined>,
		Unit: FormControl<MetricDatumUnit | null | undefined>,

		/** Minimum: 1 */
		StorageResolution: FormControl<number | null | undefined>,
	}
	export function CreateMetricDatumFormGroup() {
		return new FormGroup<MetricDatumFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
			Unit: new FormControl<MetricDatumUnit | null | undefined>(undefined),
			StorageResolution: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Represents a set of statistics that describes a specific metric.  */
	export interface StatisticSet {

		/** Required */
		SampleCount: number;

		/** Required */
		Sum: number;

		/** Required */
		Minimum: number;

		/** Required */
		Maximum: number;
	}

	/** Represents a set of statistics that describes a specific metric.  */
	export interface StatisticSetFormProperties {

		/** Required */
		SampleCount: FormControl<number | null | undefined>,

		/** Required */
		Sum: FormControl<number | null | undefined>,

		/** Required */
		Minimum: FormControl<number | null | undefined>,

		/** Required */
		Maximum: FormControl<number | null | undefined>,
	}
	export function CreateStatisticSetFormGroup() {
		return new FormGroup<StatisticSetFormProperties>({
			SampleCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Sum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Minimum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Maximum: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MetricDatumUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export interface InvalidFormatFault {
	}
	export interface InvalidFormatFaultFormProperties {
	}
	export function CreateInvalidFormatFaultFormGroup() {
		return new FormGroup<InvalidFormatFaultFormProperties>({
		});

	}

	export interface TagResourceOutput {
	}
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
		});

	}

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
		});

	}

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}

	export enum HistoryItemType { ConfigurationUpdate = 0, StateUpdate = 1, Action = 2 }

	export enum ComparisonOperator { GreaterThanOrEqualToThreshold = 0, GreaterThanThreshold = 1, LessThanThreshold = 2, LessThanOrEqualToThreshold = 3, LessThanLowerOrGreaterThanUpperThreshold = 4, LessThanLowerThreshold = 5, GreaterThanUpperThreshold = 6 }

	export enum StateValue { OK = 0, ALARM = 1, INSUFFICIENT_DATA = 2 }

	export enum StandardUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export interface DeleteAlarmsInput {

		/**
		 * Required
		 * Maximum items: 100
		 */
		AlarmNames: Array<string>;
	}
	export interface DeleteAlarmsInputFormProperties {
	}
	export function CreateDeleteAlarmsInputFormGroup() {
		return new FormGroup<DeleteAlarmsInputFormProperties>({
		});

	}

	export interface DeleteAnomalyDetectorInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: string;

		/** Maximum items: 10 */
		Dimensions?: Array<Dimension>;

		/** Required */
		Stat: string;
	}
	export interface DeleteAnomalyDetectorInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,

		/** Required */
		Stat: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAnomalyDetectorInputFormGroup() {
		return new FormGroup<DeleteAnomalyDetectorInputFormProperties>({
			Namespace: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[^:].*')]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			Stat: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDashboardsInput {

		/** Required */
		DashboardNames: Array<string>;
	}
	export interface DeleteDashboardsInputFormProperties {
	}
	export function CreateDeleteDashboardsInputFormGroup() {
		return new FormGroup<DeleteDashboardsInputFormProperties>({
		});

	}

	export interface DeleteInsightRulesInput {

		/** Required */
		RuleNames: Array<string>;
	}
	export interface DeleteInsightRulesInputFormProperties {
	}
	export function CreateDeleteInsightRulesInputFormGroup() {
		return new FormGroup<DeleteInsightRulesInputFormProperties>({
		});

	}

	export enum ScanBy { TimestampDescending = 0, TimestampAscending = 1 }

	export interface DescribeAlarmHistoryInput {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		AlarmName?: string | null;
		AlarmTypes?: Array<AlarmType>;
		HistoryItemType?: AlarmHistoryItemHistoryItemType | null;
		StartDate?: Date | null;
		EndDate?: Date | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxRecords?: number | null;
		NextToken?: string | null;
		ScanBy?: ScanBy | null;
	}
	export interface DescribeAlarmHistoryInputFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		AlarmName: FormControl<string | null | undefined>,
		HistoryItemType: FormControl<AlarmHistoryItemHistoryItemType | null | undefined>,
		StartDate: FormControl<Date | null | undefined>,
		EndDate: FormControl<Date | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxRecords: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		ScanBy: FormControl<ScanBy | null | undefined>,
	}
	export function CreateDescribeAlarmHistoryInputFormGroup() {
		return new FormGroup<DescribeAlarmHistoryInputFormProperties>({
			AlarmName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			HistoryItemType: new FormControl<AlarmHistoryItemHistoryItemType | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
			EndDate: new FormControl<Date | null | undefined>(undefined),
			MaxRecords: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			ScanBy: new FormControl<ScanBy | null | undefined>(undefined),
		});

	}

	export interface DescribeAlarmsForMetricInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace: string;
		Statistic?: MetricAlarmStatistic | null;
		ExtendedStatistic?: string | null;

		/** Maximum items: 10 */
		Dimensions?: Array<Dimension>;

		/** Minimum: 1 */
		Period?: number | null;
		Unit?: DescribeAlarmsForMetricInputUnit | null;
	}
	export interface DescribeAlarmsForMetricInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace: FormControl<string | null | undefined>,
		Statistic: FormControl<MetricAlarmStatistic | null | undefined>,
		ExtendedStatistic: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		Period: FormControl<number | null | undefined>,
		Unit: FormControl<DescribeAlarmsForMetricInputUnit | null | undefined>,
	}
	export function CreateDescribeAlarmsForMetricInputFormGroup() {
		return new FormGroup<DescribeAlarmsForMetricInputFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			Namespace: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[^:].*')]),
			Statistic: new FormControl<MetricAlarmStatistic | null | undefined>(undefined),
			ExtendedStatistic: new FormControl<string | null | undefined>(undefined),
			Period: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			Unit: new FormControl<DescribeAlarmsForMetricInputUnit | null | undefined>(undefined),
		});

	}

	export enum DescribeAlarmsForMetricInputUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export interface DescribeAlarmsInput {

		/** Maximum items: 100 */
		AlarmNames?: Array<string>;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		AlarmNamePrefix?: string | null;
		AlarmTypes?: Array<AlarmType>;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ChildrenOfAlarmName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ParentsOfAlarmName?: string | null;
		StateValue?: CompositeAlarmStateValue | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ActionPrefix?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxRecords?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeAlarmsInputFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		AlarmNamePrefix: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ChildrenOfAlarmName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ParentsOfAlarmName: FormControl<string | null | undefined>,
		StateValue: FormControl<CompositeAlarmStateValue | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		ActionPrefix: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxRecords: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAlarmsInputFormGroup() {
		return new FormGroup<DescribeAlarmsInputFormProperties>({
			AlarmNamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			ChildrenOfAlarmName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			ParentsOfAlarmName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			StateValue: new FormControl<CompositeAlarmStateValue | null | undefined>(undefined),
			ActionPrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			MaxRecords: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAnomalyDetectorsInput {
		NextToken?: string | null;

		/** Minimum: 1 */
		MaxResults?: number | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName?: string | null;

		/** Maximum items: 10 */
		Dimensions?: Array<Dimension>;
	}
	export interface DescribeAnomalyDetectorsInputFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAnomalyDetectorsInputFormGroup() {
		return new FormGroup<DescribeAnomalyDetectorsInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			Namespace: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[^:].*')]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface DescribeInsightRulesInput {
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		MaxResults?: number | null;
	}
	export interface DescribeInsightRulesInputFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeInsightRulesInputFormGroup() {
		return new FormGroup<DescribeInsightRulesInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
		});

	}

	export interface DisableAlarmActionsInput {

		/**
		 * Required
		 * Maximum items: 100
		 */
		AlarmNames: Array<string>;
	}
	export interface DisableAlarmActionsInputFormProperties {
	}
	export function CreateDisableAlarmActionsInputFormGroup() {
		return new FormGroup<DisableAlarmActionsInputFormProperties>({
		});

	}

	export interface DisableInsightRulesInput {

		/** Required */
		RuleNames: Array<string>;
	}
	export interface DisableInsightRulesInputFormProperties {
	}
	export function CreateDisableInsightRulesInputFormGroup() {
		return new FormGroup<DisableInsightRulesInputFormProperties>({
		});

	}

	export interface EnableAlarmActionsInput {

		/**
		 * Required
		 * Maximum items: 100
		 */
		AlarmNames: Array<string>;
	}
	export interface EnableAlarmActionsInputFormProperties {
	}
	export function CreateEnableAlarmActionsInputFormGroup() {
		return new FormGroup<EnableAlarmActionsInputFormProperties>({
		});

	}

	export interface EnableInsightRulesInput {

		/** Required */
		RuleNames: Array<string>;
	}
	export interface EnableInsightRulesInputFormProperties {
	}
	export function CreateEnableInsightRulesInputFormGroup() {
		return new FormGroup<EnableInsightRulesInputFormProperties>({
		});

	}

	export interface GetDashboardInput {

		/** Required */
		DashboardName: string;
	}
	export interface GetDashboardInputFormProperties {

		/** Required */
		DashboardName: FormControl<string | null | undefined>,
	}
	export function CreateGetDashboardInputFormGroup() {
		return new FormGroup<GetDashboardInputFormProperties>({
			DashboardName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetInsightRuleReportInput {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleName: string;

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;

		/**
		 * Required
		 * Minimum: 1
		 */
		Period: number;
		MaxContributorCount?: number | null;
		Metrics?: Array<string>;

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		OrderBy?: string | null;
	}
	export interface GetInsightRuleReportInputFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleName: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		Period: FormControl<number | null | undefined>,
		MaxContributorCount: FormControl<number | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		OrderBy: FormControl<string | null | undefined>,
	}
	export function CreateGetInsightRuleReportInputFormGroup() {
		return new FormGroup<GetInsightRuleReportInputFormProperties>({
			RuleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\x20-\x7E]+')]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Period: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			MaxContributorCount: new FormControl<number | null | undefined>(undefined),
			OrderBy: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.minLength(1), Validators.pattern('[\x20-\x7E]+')]),
		});

	}

	export interface GetMetricDataInput {

		/** Required */
		MetricDataQueries: Array<MetricDataQuery>;

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;
		NextToken?: string | null;
		ScanBy?: ScanBy | null;
		MaxDatapoints?: number | null;
	}
	export interface GetMetricDataInputFormProperties {

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		ScanBy: FormControl<ScanBy | null | undefined>,
		MaxDatapoints: FormControl<number | null | undefined>,
	}
	export function CreateGetMetricDataInputFormGroup() {
		return new FormGroup<GetMetricDataInputFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			ScanBy: new FormControl<ScanBy | null | undefined>(undefined),
			MaxDatapoints: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetMetricStatisticsInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: string;

		/** Maximum items: 10 */
		Dimensions?: Array<Dimension>;

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;

		/**
		 * Required
		 * Minimum: 1
		 */
		Period: number;

		/**
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		Statistics?: Array<Statistic>;

		/**
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		ExtendedStatistics?: Array<string>;
		Unit?: GetMetricStatisticsInputUnit | null;
	}
	export interface GetMetricStatisticsInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		Period: FormControl<number | null | undefined>,
		Unit: FormControl<GetMetricStatisticsInputUnit | null | undefined>,
	}
	export function CreateGetMetricStatisticsInputFormGroup() {
		return new FormGroup<GetMetricStatisticsInputFormProperties>({
			Namespace: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[^:].*')]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Period: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			Unit: new FormControl<GetMetricStatisticsInputUnit | null | undefined>(undefined),
		});

	}

	export enum GetMetricStatisticsInputUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export interface GetMetricWidgetImageInput {

		/** Required */
		MetricWidget: string;
		OutputFormat?: string | null;
	}
	export interface GetMetricWidgetImageInputFormProperties {

		/** Required */
		MetricWidget: FormControl<string | null | undefined>,
		OutputFormat: FormControl<string | null | undefined>,
	}
	export function CreateGetMetricWidgetImageInputFormGroup() {
		return new FormGroup<GetMetricWidgetImageInputFormProperties>({
			MetricWidget: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputFormat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDashboardsInput {
		DashboardNamePrefix?: string | null;
		NextToken?: string | null;
	}
	export interface ListDashboardsInputFormProperties {
		DashboardNamePrefix: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDashboardsInputFormGroup() {
		return new FormGroup<ListDashboardsInputFormProperties>({
			DashboardNamePrefix: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMetricsInput {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName?: string | null;

		/** Maximum items: 10 */
		Dimensions?: Array<DimensionFilter>;
		NextToken?: string | null;
	}
	export interface ListMetricsInputFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMetricsInputFormGroup() {
		return new FormGroup<ListMetricsInputFormProperties>({
			Namespace: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[^:].*')]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: string;
	}
	export interface ListTagsForResourceInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}

	export enum StatusCode { Complete = 0, InternalError = 1, PartialData = 2 }

	export interface PutAnomalyDetectorInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: string;

		/** Maximum items: 10 */
		Dimensions?: Array<Dimension>;

		/** Required */
		Stat: string;

		/** The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model and the time zone to use for the metric. */
		Configuration?: AnomalyDetectorConfiguration;
	}
	export interface PutAnomalyDetectorInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,

		/** Required */
		Stat: FormControl<string | null | undefined>,
	}
	export function CreatePutAnomalyDetectorInputFormGroup() {
		return new FormGroup<PutAnomalyDetectorInputFormProperties>({
			Namespace: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[^:].*')]),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			Stat: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutCompositeAlarmInput {
		ActionsEnabled?: boolean | null;

		/** Maximum items: 5 */
		AlarmActions?: Array<string>;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		AlarmDescription?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		AlarmName: string;

		/**
		 * Required
		 * Max length: 10240
		 * Min length: 1
		 */
		AlarmRule: string;

		/** Maximum items: 5 */
		InsufficientDataActions?: Array<string>;

		/** Maximum items: 5 */
		OKActions?: Array<string>;
		Tags?: Array<Tag>;
	}
	export interface PutCompositeAlarmInputFormProperties {
		ActionsEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		AlarmDescription: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		AlarmName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 10240
		 * Min length: 1
		 */
		AlarmRule: FormControl<string | null | undefined>,
	}
	export function CreatePutCompositeAlarmInputFormGroup() {
		return new FormGroup<PutCompositeAlarmInputFormProperties>({
			ActionsEnabled: new FormControl<boolean | null | undefined>(undefined),
			AlarmDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			AlarmName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			AlarmRule: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(10240), Validators.minLength(1)]),
		});

	}

	export interface PutDashboardInput {

		/** Required */
		DashboardName: string;

		/** Required */
		DashboardBody: string;
	}
	export interface PutDashboardInputFormProperties {

		/** Required */
		DashboardName: FormControl<string | null | undefined>,

		/** Required */
		DashboardBody: FormControl<string | null | undefined>,
	}
	export function CreatePutDashboardInputFormGroup() {
		return new FormGroup<PutDashboardInputFormProperties>({
			DashboardName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DashboardBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutInsightRuleInput {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleName: string;

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		RuleState?: string | null;

		/**
		 * Required
		 * Max length: 8192
		 * Min length: 1
		 */
		RuleDefinition: string;
		Tags?: Array<Tag>;
	}
	export interface PutInsightRuleInputFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		RuleName: FormControl<string | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 1
		 */
		RuleState: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 8192
		 * Min length: 1
		 */
		RuleDefinition: FormControl<string | null | undefined>,
	}
	export function CreatePutInsightRuleInputFormGroup() {
		return new FormGroup<PutInsightRuleInputFormProperties>({
			RuleName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('[\x20-\x7E]+')]),
			RuleState: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.minLength(1), Validators.pattern('[\x20-\x7E]+')]),
			RuleDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(8192), Validators.minLength(1), Validators.pattern('[\x00-\x7F]+')]),
		});

	}

	export interface PutMetricAlarmInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		AlarmName: string;

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		AlarmDescription?: string | null;
		ActionsEnabled?: boolean | null;

		/** Maximum items: 5 */
		OKActions?: Array<string>;

		/** Maximum items: 5 */
		AlarmActions?: Array<string>;

		/** Maximum items: 5 */
		InsufficientDataActions?: Array<string>;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace?: string | null;
		Statistic?: MetricAlarmStatistic | null;
		ExtendedStatistic?: string | null;

		/** Maximum items: 10 */
		Dimensions?: Array<Dimension>;

		/** Minimum: 1 */
		Period?: number | null;
		Unit?: PutMetricAlarmInputUnit | null;

		/**
		 * Required
		 * Minimum: 1
		 */
		EvaluationPeriods: number;

		/** Minimum: 1 */
		DatapointsToAlarm?: number | null;
		Threshold?: number | null;

		/** Required */
		ComparisonOperator: MetricAlarmComparisonOperator;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TreatMissingData?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		EvaluateLowSampleCountPercentile?: string | null;
		Metrics?: Array<MetricDataQuery>;
		Tags?: Array<Tag>;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ThresholdMetricId?: string | null;
	}
	export interface PutMetricAlarmInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		AlarmName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 0
		 */
		AlarmDescription: FormControl<string | null | undefined>,
		ActionsEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		MetricName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace: FormControl<string | null | undefined>,
		Statistic: FormControl<MetricAlarmStatistic | null | undefined>,
		ExtendedStatistic: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		Period: FormControl<number | null | undefined>,
		Unit: FormControl<PutMetricAlarmInputUnit | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		EvaluationPeriods: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		DatapointsToAlarm: FormControl<number | null | undefined>,
		Threshold: FormControl<number | null | undefined>,

		/** Required */
		ComparisonOperator: FormControl<MetricAlarmComparisonOperator | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		TreatMissingData: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		EvaluateLowSampleCountPercentile: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ThresholdMetricId: FormControl<string | null | undefined>,
	}
	export function CreatePutMetricAlarmInputFormGroup() {
		return new FormGroup<PutMetricAlarmInputFormProperties>({
			AlarmName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			AlarmDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			ActionsEnabled: new FormControl<boolean | null | undefined>(undefined),
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			Namespace: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[^:].*')]),
			Statistic: new FormControl<MetricAlarmStatistic | null | undefined>(undefined),
			ExtendedStatistic: new FormControl<string | null | undefined>(undefined),
			Period: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			Unit: new FormControl<PutMetricAlarmInputUnit | null | undefined>(undefined),
			EvaluationPeriods: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			DatapointsToAlarm: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			Threshold: new FormControl<number | null | undefined>(undefined),
			ComparisonOperator: new FormControl<MetricAlarmComparisonOperator | null | undefined>(undefined, [Validators.required]),
			TreatMissingData: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			EvaluateLowSampleCountPercentile: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			ThresholdMetricId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export enum PutMetricAlarmInputUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export interface PutMetricDataInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace: string;

		/** Required */
		MetricData: Array<MetricDatum>;
	}
	export interface PutMetricDataInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Namespace: FormControl<string | null | undefined>,
	}
	export function CreatePutMetricDataInputFormGroup() {
		return new FormGroup<PutMetricDataInputFormProperties>({
			Namespace: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('[^:].*')]),
		});

	}

	export interface SetAlarmStateInput {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		AlarmName: string;

		/** Required */
		StateValue: CompositeAlarmStateValue;

		/**
		 * Required
		 * Max length: 1023
		 * Min length: 0
		 */
		StateReason: string;

		/**
		 * Max length: 4000
		 * Min length: 0
		 */
		StateReasonData?: string | null;
	}
	export interface SetAlarmStateInputFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		AlarmName: FormControl<string | null | undefined>,

		/** Required */
		StateValue: FormControl<CompositeAlarmStateValue | null | undefined>,

		/**
		 * Required
		 * Max length: 1023
		 * Min length: 0
		 */
		StateReason: FormControl<string | null | undefined>,

		/**
		 * Max length: 4000
		 * Min length: 0
		 */
		StateReasonData: FormControl<string | null | undefined>,
	}
	export function CreateSetAlarmStateInputFormGroup() {
		return new FormGroup<SetAlarmStateInputFormProperties>({
			AlarmName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			StateValue: new FormControl<CompositeAlarmStateValue | null | undefined>(undefined, [Validators.required]),
			StateReason: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1023), Validators.minLength(0)]),
			StateReasonData: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4000), Validators.minLength(0)]),
		});

	}

	export interface TagResourceInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}

	export interface UntagResourceInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Deletes the specified alarms. You can delete up to 100 alarms in one operation. However, this total can include no more than one composite alarm. For example, you could delete 99 metric alarms and one composite alarms with one operation, but you can't delete two composite alarms with one operation.</p> <p> In the event of an error, no alarms are deleted.</p> <note> <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete.</p> <p>To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>False</code>. </p> <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. </p> </note>
		 * Get #Action=DeleteAlarms
		 * @param {Array<string>} AlarmNames The alarms to be deleted.
		 * @return {void} Success
		 */
		GET_DeleteAlarms(AlarmNames: Array<string>, Action: GET_DeleteAlarmsAction, Version: GET_DeleteAlarmsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteAlarms?' + AlarmNames.map(z => `AlarmNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified anomaly detection model from your account.
		 * Get #Action=DeleteAnomalyDetector
		 * @param {string} Namespace The namespace associated with the anomaly detection model to delete.
		 * @param {string} MetricName The metric name associated with the anomaly detection model to delete.
		 * @param {Array<Dimension>} Dimensions The metric dimensions associated with the anomaly detection model to delete.
		 * @param {string} Stat The statistic associated with the anomaly detection model to delete.
		 * @return {void} Success
		 */
		GET_DeleteAnomalyDetector(Namespace: string, MetricName: string, Dimensions: Array<Dimension> | null | undefined, Stat: string, Action: GET_DeleteAnomalyDetectorAction, Version: GET_DeleteAnomalyDetectorVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteAnomalyDetector?Namespace=' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '&MetricName=' + (MetricName == null ? '' : encodeURIComponent(MetricName)) + '&' + Dimensions?.map(z => `Dimensions=${z}`).join('&') + '&Stat=' + (Stat == null ? '' : encodeURIComponent(Stat)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes all dashboards that you specify. You may specify up to 100 dashboards to delete. If there is an error during this call, no dashboards are deleted.
		 * Get #Action=DeleteDashboards
		 * @param {Array<string>} DashboardNames The dashboards to be deleted. This parameter is required.
		 * @return {void} Success
		 */
		GET_DeleteDashboards(DashboardNames: Array<string>, Action: GET_DeleteDashboardsAction, Version: GET_DeleteDashboardsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteDashboards?' + DashboardNames.map(z => `DashboardNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Permanently deletes the specified Contributor Insights rules.</p> <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created may or may not be available.</p>
		 * Get #Action=DeleteInsightRules
		 * @param {Array<string>} RuleNames An array of the rule names to delete. If you need to find out the names of your rules, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html">DescribeInsightRules</a>.
		 * @return {void} Success
		 */
		GET_DeleteInsightRules(RuleNames: Array<string>, Action: GET_DeleteInsightRulesAction, Version: GET_DeleteInsightRulesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteInsightRules?' + RuleNames.map(z => `RuleNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for either all metric alarms or all composite alarms are returned.</p> <p>CloudWatch retains the history of an alarm even if you delete the alarm.</p>
		 * Get #Action=DescribeAlarmHistory
		 * @param {string} AlarmName The name of the alarm.
		 * @param {Array<AlarmType>} AlarmTypes Use this parameter to specify whether you want the operation to return metric alarms or composite alarms. If you omit this parameter, only metric alarms are returned.
		 * @param {AlarmHistoryItemHistoryItemType} HistoryItemType The type of alarm histories to retrieve.
		 * @param {Date} StartDate The starting date to retrieve alarm history.
		 * @param {Date} EndDate The ending date to retrieve alarm history.
		 * @param {number} MaxRecords The maximum number of alarm history records to retrieve.
		 * @param {string} NextToken The token returned by a previous call to indicate that there is more data available.
		 * @param {ScanBy} ScanBy Specified whether to return the newest or oldest alarm history first. Specify <code>TimestampDescending</code> to have the newest event history returned first, and specify <code>TimestampAscending</code> to have the oldest history returned first.
		 * @return {void} Success
		 */
		GET_DescribeAlarmHistory(AlarmName: string | null | undefined, AlarmTypes: Array<AlarmType> | null | undefined, HistoryItemType: AlarmHistoryItemHistoryItemType | null | undefined, StartDate: Date | null | undefined, EndDate: Date | null | undefined, MaxRecords: number | null | undefined, NextToken: string | null | undefined, ScanBy: ScanBy | null | undefined, Action: GET_DescribeAlarmHistoryAction, Version: GET_DescribeAlarmHistoryVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAlarmHistory?AlarmName=' + (AlarmName == null ? '' : encodeURIComponent(AlarmName)) + '&' + AlarmTypes?.map(z => `AlarmTypes=${z}`).join('&') + '&HistoryItemType=' + HistoryItemType + '&StartDate=' + StartDate?.toISOString() + '&EndDate=' + EndDate?.toISOString() + '&MaxRecords=' + MaxRecords + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&ScanBy=' + ScanBy + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the specified alarms. You can filter the results by specifying a a prefix for the alarm name, the alarm state, or a prefix for any action.
		 * Get #Action=DescribeAlarms
		 * @param {Array<string>} AlarmNames The names of the alarms to retrieve information about.
		 * @param {string} AlarmNamePrefix <p>An alarm name prefix. If you specify this parameter, you receive information about all alarms that have names that start with this prefix.</p> <p>If this parameter is specified, you cannot specify <code>AlarmNames</code>.</p>
		 * @param {Array<AlarmType>} AlarmTypes Use this parameter to specify whether you want the operation to return metric alarms or composite alarms. If you omit this parameter, only metric alarms are returned.
		 * @param {string} ChildrenOfAlarmName <p>If you use this parameter and specify the name of a composite alarm, the operation returns information about the "children" alarms of the alarm you specify. These are the metric alarms and composite alarms referenced in the <code>AlarmRule</code> field of the composite alarm that you specify in <code>ChildrenOfAlarmName</code>. Information about the composite alarm that you name in <code>ChildrenOfAlarmName</code> is not returned.</p> <p>If you specify <code>ChildrenOfAlarmName</code>, you cannot specify any other parameters in the request except for <code>MaxRecords</code> and <code>NextToken</code>. If you do so, you will receive a validation error.</p> <note> <p>Only the <code>Alarm Name</code>, <code>ARN</code>, <code>StateValue</code> (OK/ALARM/INSUFFICIENT_DATA), and <code>StateUpdatedTimestamp</code> information are returned by this operation when you use this parameter. To get complete information about these alarms, perform another <code>DescribeAlarms</code> operation and specify the parent alarm names in the <code>AlarmNames</code> parameter.</p> </note>
		 * @param {string} ParentsOfAlarmName <p>If you use this parameter and specify the name of a metric or composite alarm, the operation returns information about the "parent" alarms of the alarm you specify. These are the composite alarms that have <code>AlarmRule</code> parameters that reference the alarm named in <code>ParentsOfAlarmName</code>. Information about the alarm that you specify in <code>ParentsOfAlarmName</code> is not returned.</p> <p>If you specify <code>ParentsOfAlarmName</code>, you cannot specify any other parameters in the request except for <code>MaxRecords</code> and <code>NextToken</code>. If you do so, you will receive a validation error.</p> <note> <p>Only the Alarm Name and ARN are returned by this operation when you use this parameter. To get complete information about these alarms, perform another <code>DescribeAlarms</code> operation and specify the parent alarm names in the <code>AlarmNames</code> parameter.</p> </note>
		 * @param {CompositeAlarmStateValue} StateValue Specify this parameter to receive information only about alarms that are currently in the state that you specify.
		 * @param {string} ActionPrefix Use this parameter to filter the results of the operation to only those alarms that use a certain alarm action. For example, you could specify the ARN of an SNS topic to find all alarms that send notifications to that topic.
		 * @param {number} MaxRecords The maximum number of alarm descriptions to retrieve.
		 * @param {string} NextToken The token returned by a previous call to indicate that there is more data available.
		 * @return {void} Success
		 */
		GET_DescribeAlarms(AlarmNames: Array<string> | null | undefined, AlarmNamePrefix: string | null | undefined, AlarmTypes: Array<AlarmType> | null | undefined, ChildrenOfAlarmName: string | null | undefined, ParentsOfAlarmName: string | null | undefined, StateValue: CompositeAlarmStateValue | null | undefined, ActionPrefix: string | null | undefined, MaxRecords: number | null | undefined, NextToken: string | null | undefined, Action: GET_DescribeAlarmsAction, Version: GET_DescribeAlarmsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAlarms?' + AlarmNames?.map(z => `AlarmNames=${encodeURIComponent(z)}`).join('&') + '&AlarmNamePrefix=' + (AlarmNamePrefix == null ? '' : encodeURIComponent(AlarmNamePrefix)) + '&' + AlarmTypes?.map(z => `AlarmTypes=${z}`).join('&') + '&ChildrenOfAlarmName=' + (ChildrenOfAlarmName == null ? '' : encodeURIComponent(ChildrenOfAlarmName)) + '&ParentsOfAlarmName=' + (ParentsOfAlarmName == null ? '' : encodeURIComponent(ParentsOfAlarmName)) + '&StateValue=' + StateValue + '&ActionPrefix=' + (ActionPrefix == null ? '' : encodeURIComponent(ActionPrefix)) + '&MaxRecords=' + MaxRecords + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the alarms for the specified metric. To filter the results, specify a statistic, period, or unit.
		 * Get #Action=DescribeAlarmsForMetric
		 * @param {string} MetricName The name of the metric.
		 * @param {string} Namespace The namespace of the metric.
		 * @param {MetricAlarmStatistic} Statistic The statistic for the metric, other than percentiles. For percentile statistics, use <code>ExtendedStatistics</code>.
		 * @param {string} ExtendedStatistic The percentile statistic for the metric. Specify a value between p0.0 and p100.
		 * @param {Array<Dimension>} Dimensions The dimensions associated with the metric. If the metric has any associated dimensions, you must specify them in order for the call to succeed.
		 * @param {number} Period The period, in seconds, over which the statistic is applied.
		 * @param {GET_DescribeAlarmsForMetricUnit} Unit The unit for the metric.
		 * @return {void} Success
		 */
		GET_DescribeAlarmsForMetric(MetricName: string, Namespace: string, Statistic: MetricAlarmStatistic | null | undefined, ExtendedStatistic: string | null | undefined, Dimensions: Array<Dimension> | null | undefined, Period: number | null | undefined, Unit: GET_DescribeAlarmsForMetricUnit | null | undefined, Action: GET_DescribeAlarmsForMetricAction, Version: GET_DescribeAlarmsForMetricVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAlarmsForMetric?MetricName=' + (MetricName == null ? '' : encodeURIComponent(MetricName)) + '&Namespace=' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '&Statistic=' + Statistic + '&ExtendedStatistic=' + (ExtendedStatistic == null ? '' : encodeURIComponent(ExtendedStatistic)) + '&' + Dimensions?.map(z => `Dimensions=${z}`).join('&') + '&Period=' + Period + '&Unit=' + Unit + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the anomaly detection models that you have created in your account. You can list all models in your account or filter the results to only the models that are related to a certain namespace, metric name, or metric dimension.
		 * Get #Action=DescribeAnomalyDetectors
		 * @param {string} NextToken Use the token returned by the previous operation to request the next page of results.
		 * @param {number} MaxResults <p>The maximum number of results to return in one operation. The maximum value that you can specify is 100.</p> <p>To retrieve the remaining results, make another call with the returned <code>NextToken</code> value. </p>
		 * @param {string} Namespace Limits the results to only the anomaly detection models that are associated with the specified namespace.
		 * @param {string} MetricName Limits the results to only the anomaly detection models that are associated with the specified metric name. If there are multiple metrics with this name in different namespaces that have anomaly detection models, they're all returned.
		 * @param {Array<Dimension>} Dimensions Limits the results to only the anomaly detection models that are associated with the specified metric dimensions. If there are multiple metrics that have these dimensions and have anomaly detection models associated, they're all returned.
		 * @return {void} Success
		 */
		GET_DescribeAnomalyDetectors(NextToken: string | null | undefined, MaxResults: number | null | undefined, Namespace: string | null | undefined, MetricName: string | null | undefined, Dimensions: Array<Dimension> | null | undefined, Action: GET_DescribeAnomalyDetectorsAction, Version: GET_DescribeAnomalyDetectorsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAnomalyDetectors?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Namespace=' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '&MetricName=' + (MetricName == null ? '' : encodeURIComponent(MetricName)) + '&' + Dimensions?.map(z => `Dimensions=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of all the Contributor Insights rules in your account. All rules in your account are returned with a single operation.</p> <p>For more information about Contributor Insights, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p>
		 * Get #Action=DescribeInsightRules
		 * @param {string} NextToken Reserved for future use.
		 * @param {number} MaxResults This parameter is not currently used. Reserved for future use. If it is used in the future, the maximum value may be different.
		 * @return {void} Success
		 */
		GET_DescribeInsightRules(NextToken: string | null | undefined, MaxResults: number | null | undefined, Action: GET_DescribeInsightRulesAction, Version: GET_DescribeInsightRulesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeInsightRules?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes.
		 * Get #Action=DisableAlarmActions
		 * @param {Array<string>} AlarmNames The names of the alarms.
		 * @return {void} Success
		 */
		GET_DisableAlarmActions(AlarmNames: Array<string>, Action: GET_DisableAlarmActionsAction, Version: GET_DisableAlarmActionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DisableAlarmActions?' + AlarmNames.map(z => `AlarmNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables the specified Contributor Insights rules. When rules are disabled, they do not analyze log groups and do not incur costs.
		 * Get #Action=DisableInsightRules
		 * @param {Array<string>} RuleNames An array of the rule names to disable. If you need to find out the names of your rules, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html">DescribeInsightRules</a>.
		 * @return {void} Success
		 */
		GET_DisableInsightRules(RuleNames: Array<string>, Action: GET_DisableInsightRulesAction, Version: GET_DisableInsightRulesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DisableInsightRules?' + RuleNames.map(z => `RuleNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables the actions for the specified alarms.
		 * Get #Action=EnableAlarmActions
		 * @param {Array<string>} AlarmNames The names of the alarms.
		 * @return {void} Success
		 */
		GET_EnableAlarmActions(AlarmNames: Array<string>, Action: GET_EnableAlarmActionsAction, Version: GET_EnableAlarmActionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=EnableAlarmActions?' + AlarmNames.map(z => `AlarmNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables the specified Contributor Insights rules. When rules are enabled, they immediately begin analyzing log data.
		 * Get #Action=EnableInsightRules
		 * @param {Array<string>} RuleNames An array of the rule names to enable. If you need to find out the names of your rules, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeInsightRules.html">DescribeInsightRules</a>.
		 * @return {void} Success
		 */
		GET_EnableInsightRules(RuleNames: Array<string>, Action: GET_EnableInsightRulesAction, Version: GET_EnableInsightRulesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=EnableInsightRules?' + RuleNames.map(z => `RuleNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Displays the details of the dashboard that you specify.</p> <p>To copy an existing dashboard, use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code> to create the copy.</p>
		 * Get #Action=GetDashboard
		 * @param {string} DashboardName The name of the dashboard to be described.
		 * @return {void} Success
		 */
		GET_GetDashboard(DashboardName: string, Action: GET_GetDashboardAction, Version: GET_GetDashboardVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetDashboard?DashboardName=' + (DashboardName == null ? '' : encodeURIComponent(DashboardName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This operation returns the time series data collected by a Contributor Insights rule. The data includes the identity and number of contributors to the log group.</p> <p>You can also optionally return one or more statistics about each data point in the time series. These statistics can include the following:</p> <ul> <li> <p> <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p> </li> <li> <p> <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the contributor may change for each data point in the graph.</p> <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's <code>Value</code>, during that period.</p> </li> <li> <p> <code>SampleCount</code> -- the number of data points matched by the rule.</p> </li> <li> <p> <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p> </li> <li> <p> <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p> </li> </ul>
		 * Get #Action=GetInsightRuleReport
		 * @param {string} RuleName The name of the rule that you want to see data from.
		 * @param {Date} StartTime The start time of the data to use in the report. When used in a raw HTTP Query API, it is formatted as <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example, <code>2019-07-01T23:59:59</code>.
		 * @param {Date} EndTime The end time of the data to use in the report. When used in a raw HTTP Query API, it is formatted as <code>yyyy-MM-dd'T'HH:mm:ss</code>. For example, <code>2019-07-01T23:59:59</code>.
		 * @param {number} Period The period, in seconds, to use for the statistics in the <code>InsightRuleMetricDatapoint</code> results.
		 * @param {number} MaxContributorCount The maximum number of contributors to include in the report. The range is 1 to 100. If you omit this, the default of 10 is used.
		 * @param {Array<string>} Metrics <p>Specifies which metrics to use for aggregation of contributor values for the report. You can specify one or more of the following metrics:</p> <ul> <li> <p> <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p> </li> <li> <p> <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the contributor may change for each data point in the graph.</p> <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified by the rule's <code>Value</code>, during that period.</p> </li> <li> <p> <code>SampleCount</code> -- the number of data points matched by the rule.</p> </li> <li> <p> <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p> </li> <li> <p> <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p> </li> <li> <p> <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p> </li> </ul>
		 * @param {string} OrderBy Determines what statistic to use to rank the contributors. Valid values are SUM and MAXIMUM.
		 * @return {void} Success
		 */
		GET_GetInsightRuleReport(RuleName: string, StartTime: Date, EndTime: Date, Period: number, MaxContributorCount: number | null | undefined, Metrics: Array<string> | null | undefined, OrderBy: string | null | undefined, Action: GET_GetInsightRuleReportAction, Version: GET_GetInsightRuleReportVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetInsightRuleReport?RuleName=' + (RuleName == null ? '' : encodeURIComponent(RuleName)) + '&StartTime=' + StartTime.toISOString() + '&EndTime=' + EndTime.toISOString() + '&Period=' + Period + '&MaxContributorCount=' + MaxContributorCount + '&' + Metrics?.map(z => `Metrics=${encodeURIComponent(z)}`).join('&') + '&OrderBy=' + (OrderBy == null ? '' : encodeURIComponent(OrderBy)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>You can use the <code>GetMetricData</code> API to retrieve as many as 500 different metrics in a single request, with a total of as many as 100,800 data points. You can also optionally perform math expressions on the values of the returned statistics, to create new time series that represent new insights into your data. For example, using Lambda metrics, you could divide the Errors metric by the Invocations metric to get an error rate time series. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Calls to the <code>GetMetricData</code> API have a different pricing structure than calls to <code>GetMetricStatistics</code>. For more information about pricing, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> <p>Amazon CloudWatch retains metric data as follows:</p> <ul> <li> <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p> </li> <li> <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p> </li> <li> <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p> </li> <li> <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p> </li> </ul> <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour.</p> <p>If you omit <code>Unit</code> in your request, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p>
		 * Get #Action=GetMetricData
		 * @param {Array<MetricDataQuery>} MetricDataQueries The metric queries to be returned. A single <code>GetMetricData</code> call can include as many as 500 <code>MetricDataQuery</code> structures. Each of these structures can specify either a metric to retrieve, or a math expression to perform on retrieved data. 
		 * @param {Date} StartTime <p>The time stamp indicating the earliest data to be returned.</p> <p>The value specified is inclusive; results include data points with the specified time stamp. </p> <p>CloudWatch rounds the specified time stamp as follows:</p> <ul> <li> <p>Start time less than 15 days ago - Round down to the nearest whole minute. For example, 12:32:34 is rounded down to 12:32:00.</p> </li> <li> <p>Start time between 15 and 63 days ago - Round down to the nearest 5-minute clock interval. For example, 12:32:34 is rounded down to 12:30:00.</p> </li> <li> <p>Start time greater than 63 days ago - Round down to the nearest 1-hour clock interval. For example, 12:32:34 is rounded down to 12:00:00.</p> </li> </ul> <p>If you set <code>Period</code> to 5, 10, or 30, the start time of your request is rounded down to the nearest time that corresponds to even 5-, 10-, or 30-second divisions of a minute. For example, if you make a query at (HH:mm:ss) 01:05:23 for the previous 10-second period, the start time of your request is rounded down and you receive data from 01:05:10 to 01:05:20. If you make a query at 15:07:17 for the previous 5 minutes of data, using a period of 5 seconds, you receive data timestamped between 15:02:15 and 15:07:15. </p> <p>For better performance, specify <code>StartTime</code> and <code>EndTime</code> values that align with the value of the metric's <code>Period</code> and sync up with the beginning and end of an hour. For example, if the <code>Period</code> of a metric is 5 minutes, specifying 12:05 or 12:30 as <code>StartTime</code> can get a faster response from CloudWatch than setting 12:07 or 12:29 as the <code>StartTime</code>.</p>
		 * @param {Date} EndTime <p>The time stamp indicating the latest data to be returned.</p> <p>The value specified is exclusive; results include data points up to the specified time stamp.</p> <p>For better performance, specify <code>StartTime</code> and <code>EndTime</code> values that align with the value of the metric's <code>Period</code> and sync up with the beginning and end of an hour. For example, if the <code>Period</code> of a metric is 5 minutes, specifying 12:05 or 12:30 as <code>EndTime</code> can get a faster response from CloudWatch than setting 12:07 or 12:29 as the <code>EndTime</code>.</p>
		 * @param {string} NextToken Include this value, if it was returned by the previous call, to get the next set of data points.
		 * @param {ScanBy} ScanBy The order in which data points should be returned. <code>TimestampDescending</code> returns the newest data first and paginates when the <code>MaxDatapoints</code> limit is reached. <code>TimestampAscending</code> returns the oldest data first and paginates when the <code>MaxDatapoints</code> limit is reached.
		 * @param {number} MaxDatapoints The maximum number of data points the request should return before paginating. If you omit this, the default of 100,800 is used.
		 * @return {void} Success
		 */
		GET_GetMetricData(MetricDataQueries: Array<MetricDataQuery>, StartTime: Date, EndTime: Date, NextToken: string | null | undefined, ScanBy: ScanBy | null | undefined, MaxDatapoints: number | null | undefined, Action: GET_GetMetricDataAction, Version: GET_GetMetricDataVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetMetricData?' + MetricDataQueries.map(z => `MetricDataQueries=${z}`).join('&') + '&StartTime=' + StartTime.toISOString() + '&EndTime=' + EndTime.toISOString() + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&ScanBy=' + ScanBy + '&MaxDatapoints=' + MaxDatapoints + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets statistics for the specified metric.</p> <p>The maximum number of data points returned from a single call is 1,440. If you request more than 1,440 data points, CloudWatch returns an error. To reduce the number of data points, you can narrow the specified time range and make multiple requests across adjacent time ranges, or you can increase the specified period. Data points are not returned in chronological order.</p> <p>CloudWatch aggregates data points based on the length of the period that you specify. For example, if you request statistics with a one-hour period, CloudWatch aggregates all data points with time stamps that fall within each one-hour period. Therefore, the number of values aggregated by CloudWatch is larger than the number of data points returned.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:</p> <ul> <li> <p>The SampleCount value of the statistic set is 1.</p> </li> <li> <p>The Min and the Max values of the statistic set are equal.</p> </li> </ul> <p>Percentile statistics are not available for metrics when any of the metric values are negative numbers.</p> <p>Amazon CloudWatch retains metric data as follows:</p> <ul> <li> <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p> </li> <li> <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p> </li> <li> <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p> </li> <li> <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p> </li> </ul> <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available, but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with a resolution of 1 hour.</p> <p>CloudWatch started retaining 5-minute and 1-hour metric data as of July 9, 2016.</p> <p>For information about metrics and dimensions supported by AWS services, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html">Amazon CloudWatch Metrics and Dimensions Reference</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
		 * Get #Action=GetMetricStatistics
		 * @param {string} Namespace The namespace of the metric, with or without spaces.
		 * @param {string} MetricName The name of the metric, with or without spaces.
		 * @param {Array<Dimension>} Dimensions The dimensions. If the metric contains multiple dimensions, you must include a value for each dimension. CloudWatch treats each unique combination of dimensions as a separate metric. If a specific combination of dimensions was not published, you can't retrieve statistics for it. You must specify the same dimensions that were used when the metrics were created. For an example, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#dimension-combinations">Dimension Combinations</a> in the <i>Amazon CloudWatch User Guide</i>. For more information about specifying dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.
		 * @param {Date} StartTime <p>The time stamp that determines the first data point to return. Start times are evaluated relative to the time that CloudWatch receives the request.</p> <p>The value specified is inclusive; results include data points with the specified time stamp. In a raw HTTP query, the time stamp must be in ISO 8601 UTC format (for example, 2016-10-03T23:00:00Z).</p> <p>CloudWatch rounds the specified time stamp as follows:</p> <ul> <li> <p>Start time less than 15 days ago - Round down to the nearest whole minute. For example, 12:32:34 is rounded down to 12:32:00.</p> </li> <li> <p>Start time between 15 and 63 days ago - Round down to the nearest 5-minute clock interval. For example, 12:32:34 is rounded down to 12:30:00.</p> </li> <li> <p>Start time greater than 63 days ago - Round down to the nearest 1-hour clock interval. For example, 12:32:34 is rounded down to 12:00:00.</p> </li> </ul> <p>If you set <code>Period</code> to 5, 10, or 30, the start time of your request is rounded down to the nearest time that corresponds to even 5-, 10-, or 30-second divisions of a minute. For example, if you make a query at (HH:mm:ss) 01:05:23 for the previous 10-second period, the start time of your request is rounded down and you receive data from 01:05:10 to 01:05:20. If you make a query at 15:07:17 for the previous 5 minutes of data, using a period of 5 seconds, you receive data timestamped between 15:02:15 and 15:07:15. </p>
		 * @param {Date} EndTime <p>The time stamp that determines the last data point to return.</p> <p>The value specified is exclusive; results include data points up to the specified time stamp. In a raw HTTP query, the time stamp must be in ISO 8601 UTC format (for example, 2016-10-10T23:00:00Z).</p>
		 * @param {number} Period <p>The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a <code>PutMetricData</code> call that includes a <code>StorageResolution</code> of 1 second.</p> <p>If the <code>StartTime</code> parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:</p> <ul> <li> <p>Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).</p> </li> <li> <p>Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).</p> </li> <li> <p>Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).</p> </li> </ul>
		 * @param {Array<Statistic>} Statistics The metric statistics, other than percentile. For percentile statistics, use <code>ExtendedStatistics</code>. When calling <code>GetMetricStatistics</code>, you must specify either <code>Statistics</code> or <code>ExtendedStatistics</code>, but not both.
		 * @param {Array<string>} ExtendedStatistics The percentile statistics. Specify values between p0.0 and p100. When calling <code>GetMetricStatistics</code>, you must specify either <code>Statistics</code> or <code>ExtendedStatistics</code>, but not both. Percentile statistics are not available for metrics when any of the metric values are negative numbers.
		 * @param {GET_GetMetricStatisticsUnit} Unit The unit for a given metric. If you omit <code>Unit</code>, all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
		 * @return {void} Success
		 */
		GET_GetMetricStatistics(Namespace: string, MetricName: string, Dimensions: Array<Dimension> | null | undefined, StartTime: Date, EndTime: Date, Period: number, Statistics: Array<Statistic> | null | undefined, ExtendedStatistics: Array<string> | null | undefined, Unit: GET_GetMetricStatisticsUnit | null | undefined, Action: GET_GetMetricStatisticsAction, Version: GET_GetMetricStatisticsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetMetricStatistics?Namespace=' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '&MetricName=' + (MetricName == null ? '' : encodeURIComponent(MetricName)) + '&' + Dimensions?.map(z => `Dimensions=${z}`).join('&') + '&StartTime=' + StartTime.toISOString() + '&EndTime=' + EndTime.toISOString() + '&Period=' + Period + '&' + Statistics?.map(z => `Statistics=${z}`).join('&') + '&' + ExtendedStatistics?.map(z => `ExtendedStatistics=${encodeURIComponent(z)}`).join('&') + '&Unit=' + Unit + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph of one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this image into your services and products, such as wiki pages, reports, and documents. You could also retrieve images regularly, such as every minute, and create your own custom live dashboard.</p> <p>The graph you retrieve can include all CloudWatch metric graph features, including metric math and horizontal and vertical annotations.</p> <p>There is a limit of 20 transactions per second for this API. Each <code>GetMetricWidgetImage</code> action has the following limits:</p> <ul> <li> <p>As many as 100 metrics in the graph.</p> </li> <li> <p>Up to 100 KB uncompressed payload.</p> </li> </ul>
		 * Get #Action=GetMetricWidgetImage
		 * @param {string} MetricWidget <p>A JSON string that defines the bitmap graph to be retrieved. The string includes the metrics to include in the graph, statistics, annotations, title, axis limits, and so on. You can include only one <code>MetricWidget</code> parameter in each <code>GetMetricWidgetImage</code> call.</p> <p>For more information about the syntax of <code>MetricWidget</code> see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Metric-Widget-Structure.html">GetMetricWidgetImage: Metric Widget Structure and Syntax</a>.</p> <p>If any metric on the graph could not load all the requested data points, an orange triangle with an exclamation point appears next to the graph legend.</p>
		 * @param {string} OutputFormat <p>The format of the resulting image. Only PNG images are supported.</p> <p>The default is <code>png</code>. If you specify <code>png</code>, the API returns an HTTP response with the content-type set to <code>text/xml</code>. The image data is in a <code>MetricWidgetImage</code> field. For example:</p> <p> <code> &lt;GetMetricWidgetImageResponse xmlns=&lt;URLstring&gt;&gt;</code> </p> <p> <code> &lt;GetMetricWidgetImageResult&gt;</code> </p> <p> <code> &lt;MetricWidgetImage&gt;</code> </p> <p> <code> iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQEAYAAAAip...</code> </p> <p> <code> &lt;/MetricWidgetImage&gt;</code> </p> <p> <code> &lt;/GetMetricWidgetImageResult&gt;</code> </p> <p> <code> &lt;ResponseMetadata&gt;</code> </p> <p> <code> &lt;RequestId&gt;6f0d4192-4d42-11e8-82c1-f539a07e0e3b&lt;/RequestId&gt;</code> </p> <p> <code> &lt;/ResponseMetadata&gt;</code> </p> <p> <code>&lt;/GetMetricWidgetImageResponse&gt;</code> </p> <p>The <code>image/png</code> setting is intended only for custom HTTP requests. For most use cases, and all actions using an AWS SDK, you should use <code>png</code>. If you specify <code>image/png</code>, the HTTP response has a content-type set to <code>image/png</code>, and the body of the response is a PNG image. </p>
		 * @return {void} Success
		 */
		GET_GetMetricWidgetImage(MetricWidget: string, OutputFormat: string | null | undefined, Action: GET_GetMetricWidgetImageAction, Version: GET_GetMetricWidgetImageVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=GetMetricWidgetImage?MetricWidget=' + (MetricWidget == null ? '' : encodeURIComponent(MetricWidget)) + '&OutputFormat=' + (OutputFormat == null ? '' : encodeURIComponent(OutputFormat)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of the dashboards for your account. If you include <code>DashboardNamePrefix</code>, only those dashboards with names starting with the prefix are listed. Otherwise, all dashboards in your account are listed. </p> <p> <code>ListDashboards</code> returns up to 1000 results on one page. If there are more than 1000 dashboards, you can call <code>ListDashboards</code> again and include the value you received for <code>NextToken</code> in the first call, to receive the next 1000 results.</p>
		 * Get #Action=ListDashboards
		 * @param {string} DashboardNamePrefix If you specify this parameter, only the dashboards with names starting with the specified string are listed. The maximum length is 255, and valid characters are A-Z, a-z, 0-9, ".", "-", and "_". 
		 * @param {string} NextToken The token returned by a previous call to indicate that there is more data available.
		 * @return {void} Success
		 */
		GET_ListDashboards(DashboardNamePrefix: string | null | undefined, NextToken: string | null | undefined, Action: GET_ListDashboardsAction, Version: GET_ListDashboardsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListDashboards?DashboardNamePrefix=' + (DashboardNamePrefix == null ? '' : encodeURIComponent(DashboardNamePrefix)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>List the specified metrics. You can use the returned metrics with <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> to obtain statistical data.</p> <p>Up to 500 results are returned for any one call. To retrieve additional results, use the returned token with subsequent calls.</p> <p>After you create a metric, allow up to fifteen minutes before the metric appears. Statistics about the metric, however, are available sooner using <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>
		 * Get #Action=ListMetrics
		 * @param {string} Namespace The namespace to filter against.
		 * @param {string} MetricName The name of the metric to filter against.
		 * @param {Array<DimensionFilter>} Dimensions The dimensions to filter against.
		 * @param {string} NextToken The token returned by a previous call to indicate that there is more data available.
		 * @return {void} Success
		 */
		GET_ListMetrics(Namespace: string | null | undefined, MetricName: string | null | undefined, Dimensions: Array<DimensionFilter> | null | undefined, NextToken: string | null | undefined, Action: GET_ListMetricsAction, Version: GET_ListMetricsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListMetrics?Namespace=' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '&MetricName=' + (MetricName == null ? '' : encodeURIComponent(MetricName)) + '&' + Dimensions?.map(z => `Dimensions=${z}`).join('&') + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Displays the tags associated with a CloudWatch resource. Currently, alarms and Contributor Insights rules support tagging.
		 * Get #Action=ListTagsForResource
		 * @param {string} ResourceARN <p>The ARN of the CloudWatch resource that you want to view tags for.</p> <p>The ARN format of an alarm is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:alarm:<i>alarm-name</i> </code> </p> <p>The ARN format of a Contributor Insights rule is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:insight-rule:<i>insight-rule-name</i> </code> </p> <p>For more information on ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General Reference</i>.</p>
		 * @return {void} Success
		 */
		GET_ListTagsForResource(ResourceARN: string, Action: GET_ListTagsForResourceAction, Version: GET_ListTagsForResourceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ListTagsForResource?ResourceARN=' + (ResourceARN == null ? '' : encodeURIComponent(ResourceARN)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an anomaly detection model for a CloudWatch metric. You can use the model to display a band of expected normal values when the metric is graphed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html">CloudWatch Anomaly Detection</a>.</p>
		 * Get #Action=PutAnomalyDetector
		 * @param {string} Namespace The namespace of the metric to create the anomaly detection model for.
		 * @param {string} MetricName The name of the metric to create the anomaly detection model for.
		 * @param {Array<Dimension>} Dimensions The metric dimensions to create the anomaly detection model for.
		 * @param {string} Stat The statistic to use for the metric and the anomaly detection model.
		 * @param {GET_PutAnomalyDetectorConfiguration} Configuration <p>The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude when training and updating the model. You can specify as many as 10 time ranges.</p> <p>The configuration can also include the time zone to use for the metric.</p> <p>You can in</p>
		 * @return {void} Success
		 */
		GET_PutAnomalyDetector(Namespace: string, MetricName: string, Dimensions: Array<Dimension> | null | undefined, Stat: string, Configuration: GET_PutAnomalyDetectorConfiguration | null | undefined, Action: GET_PutAnomalyDetectorAction, Version: GET_PutAnomalyDetectorVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutAnomalyDetector?Namespace=' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '&MetricName=' + (MetricName == null ? '' : encodeURIComponent(MetricName)) + '&' + Dimensions?.map(z => `Dimensions=${z}`).join('&') + '&Stat=' + (Stat == null ? '' : encodeURIComponent(Stat)) + '&Configuration=' + Configuration + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates a <i>composite alarm</i>. When you create a composite alarm, you specify a rule expression for the alarm that takes into account the alarm states of other alarms that you have created. The composite alarm goes into ALARM state only if all conditions of the rule are met.</p> <p>The alarms specified in a composite alarm's rule expression can include metric alarms and other composite alarms.</p> <p>Using composite alarms can reduce alarm noise. You can create multiple metric alarms, and also create a composite alarm and set up alerts only for the composite alarm. For example, you could create a composite alarm that goes into ALARM state only when more than one of the underlying metric alarms are in ALARM state.</p> <p>Currently, the only alarm actions that can be taken by composite alarms are notifying SNS topics.</p> <note> <p>It is possible to create a loop or cycle of composite alarms, where composite alarm A depends on composite alarm B, and composite alarm B also depends on composite alarm A. In this scenario, you can't delete any composite alarm that is part of the cycle because there is always still a composite alarm that depends on that alarm that you want to delete.</p> <p>To get out of such a situation, you must break the cycle by changing the rule of one of the composite alarms in the cycle to remove a dependency that creates the cycle. The simplest change to make to break a cycle is to change the <code>AlarmRule</code> of one of the alarms to <code>False</code>. </p> <p>Additionally, the evaluation of composite alarms stops if CloudWatch detects a cycle in the evaluation path. </p> </note> <p>When this operation creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed. For a composite alarm, this initial time after creation is the only time that the alarm can be in <code>INSUFFICIENT_DATA</code> state.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</p>
		 * Get #Action=PutCompositeAlarm
		 * @param {boolean} ActionsEnabled Indicates whether actions should be executed during any changes to the alarm state of the composite alarm. The default is <code>TRUE</code>.
		 * @param {Array<string>} AlarmActions <p>The actions to execute when this alarm transitions to the <code>ALARM</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p> <p>Valid Values: <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i> </code> </p>
		 * @param {string} AlarmDescription The description for the composite alarm.
		 * @param {string} AlarmName The name for the composite alarm. This name must be unique within your AWS account.
		 * @param {string} AlarmRule <p>An expression that specifies which other alarms are to be evaluated to determine this composite alarm's state. For each alarm that you reference, you designate a function that specifies whether that alarm needs to be in ALARM state, OK state, or INSUFFICIENT_DATA state. You can use operators (AND, OR and NOT) to combine multiple functions in a single expression. You can use parenthesis to logically group the functions in your expression.</p> <p>You can use either alarm names or ARNs to reference the other alarms that are to be evaluated.</p> <p>Functions can include the following:</p> <ul> <li> <p> <code>ALARM("<i>alarm-name</i> or <i>alarm-ARN</i>")</code> is TRUE if the named alarm is in ALARM state.</p> </li> <li> <p> <code>OK("<i>alarm-name</i> or <i>alarm-ARN</i>")</code> is TRUE if the named alarm is in OK state.</p> </li> <li> <p> <code>INSUFFICIENT_DATA("<i>alarm-name</i> or <i>alarm-ARN</i>")</code> is TRUE if the named alarm is in INSUFFICIENT_DATA state.</p> </li> <li> <p> <code>TRUE</code> always evaluates to TRUE.</p> </li> <li> <p> <code>FALSE</code> always evaluates to FALSE.</p> </li> </ul> <p>TRUE and FALSE are useful for testing a complex <code>AlarmRule</code> structure, and for testing your alarm actions.</p> <p>Alarm names specified in <code>AlarmRule</code> can be surrounded with double-quotes ("), but do not have to be.</p> <p>The following are some examples of <code>AlarmRule</code>:</p> <ul> <li> <p> <code>ALARM(CPUUtilizationTooHigh) AND ALARM(DiskReadOpsTooHigh)</code> specifies that the composite alarm goes into ALARM state only if both CPUUtilizationTooHigh and DiskReadOpsTooHigh alarms are in ALARM state.</p> </li> <li> <p> <code>ALARM(CPUUtilizationTooHigh) AND NOT ALARM(DeploymentInProgress)</code> specifies that the alarm goes to ALARM state if CPUUtilizationTooHigh is in ALARM state and DeploymentInProgress is not in ALARM state. This example reduces alarm noise during a known deployment window.</p> </li> <li> <p> <code>(ALARM(CPUUtilizationTooHigh) OR ALARM(DiskReadOpsTooHigh)) AND OK(NetworkOutTooHigh)</code> goes into ALARM state if CPUUtilizationTooHigh OR DiskReadOpsTooHigh is in ALARM state, and if NetworkOutTooHigh is in OK state. This provides another example of using a composite alarm to prevent noise. This rule ensures that you are not notified with an alarm action on high CPU or disk usage if a known network problem is also occurring.</p> </li> </ul> <p>The <code>AlarmRule</code> can specify as many as 100 "children" alarms. The <code>AlarmRule</code> expression can have as many as 500 elements. Elements are child alarms, TRUE or FALSE statements, and parentheses.</p>
		 * @param {Array<string>} InsufficientDataActions <p>The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p> <p>Valid Values: <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i> </code> </p>
		 * @param {Array<string>} OKActions <p>The actions to execute when this alarm transitions to an <code>OK</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p> <p>Valid Values: <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i> </code> </p>
		 * @param {Array<Tag>} Tags <p>A list of key-value pairs to associate with the composite alarm. You can associate as many as 50 tags with an alarm.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p>
		 * @return {void} Success
		 */
		GET_PutCompositeAlarm(ActionsEnabled: boolean | null | undefined, AlarmActions: Array<string> | null | undefined, AlarmDescription: string | null | undefined, AlarmName: string, AlarmRule: string, InsufficientDataActions: Array<string> | null | undefined, OKActions: Array<string> | null | undefined, Tags: Array<Tag> | null | undefined, Action: GET_PutCompositeAlarmAction, Version: GET_PutCompositeAlarmVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutCompositeAlarm?ActionsEnabled=' + ActionsEnabled + '&' + AlarmActions?.map(z => `AlarmActions=${encodeURIComponent(z)}`).join('&') + '&AlarmDescription=' + (AlarmDescription == null ? '' : encodeURIComponent(AlarmDescription)) + '&AlarmName=' + (AlarmName == null ? '' : encodeURIComponent(AlarmName)) + '&AlarmRule=' + (AlarmRule == null ? '' : encodeURIComponent(AlarmRule)) + '&' + InsufficientDataActions?.map(z => `InsufficientDataActions=${encodeURIComponent(z)}`).join('&') + '&' + OKActions?.map(z => `OKActions=${encodeURIComponent(z)}`).join('&') + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard, the entire contents are replaced with what you specify here.</p> <p>All dashboards in your account are global, not region-specific.</p> <p>A simple way to create a dashboard using <code>PutDashboard</code> is to copy an existing dashboard. To copy an existing dashboard using the console, you can load the dashboard and then use the View/edit source command in the Actions menu to display the JSON block for that dashboard. Another way to copy a dashboard is to use <code>GetDashboard</code>, and then use the data returned within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code>.</p> <p>When you create a dashboard with <code>PutDashboard</code>, a good practice is to add a text widget at the top of the dashboard with a message that the dashboard was created by script and should not be changed in the console. This message could also point console users to the location of the <code>DashboardBody</code> script or the CloudFormation template used to create the dashboard.</p>
		 * Get #Action=PutDashboard
		 * @param {string} DashboardName The name of the dashboard. If a dashboard with this name already exists, this call modifies that dashboard, replacing its current contents. Otherwise, a new dashboard is created. The maximum length is 255, and valid characters are A-Z, a-z, 0-9, "-", and "_". This parameter is required.
		 * @param {string} DashboardBody <p>The detailed information about the dashboard in JSON format, including the widgets to include and their location on the dashboard. This parameter is required.</p> <p>For more information about the syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html">Dashboard Body Structure and Syntax</a>.</p>
		 * @return {void} Success
		 */
		GET_PutDashboard(DashboardName: string, DashboardBody: string, Action: GET_PutDashboardAction, Version: GET_PutDashboardVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutDashboard?DashboardName=' + (DashboardName == null ? '' : encodeURIComponent(DashboardName)) + '&DashboardBody=' + (DashboardBody == null ? '' : encodeURIComponent(DashboardBody)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a Contributor Insights rule. Rules evaluate log events in a CloudWatch Logs log group, enabling you to find contributor data for the log events in that log group. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html">Using Contributor Insights to Analyze High-Cardinality Data</a>.</p> <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time the rule was created may or may not be available.</p>
		 * Get #Action=PutInsightRule
		 * @param {string} RuleName A unique name for the rule.
		 * @param {string} RuleState The state of the rule. Valid values are ENABLED and DISABLED.
		 * @param {string} RuleDefinition The definition of the rule, as a JSON object. For details on the valid syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights-RuleSyntax.html">Contributor Insights Rule Syntax</a>.
		 * @param {Array<Tag>} Tags <p>A list of key-value pairs to associate with the Contributor Insights rule. You can associate as many as 50 tags with a rule.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only the resources that have certain tag values.</p> <p>To be able to associate tags with a rule, you must have the <code>cloudwatch:TagResource</code> permission in addition to the <code>cloudwatch:PutInsightRule</code> permission.</p> <p>If you are using this operation to update an existing Contributor Insights rule, any tags you specify in this parameter are ignored. To change the tags of an existing rule, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
		 * @return {void} Success
		 */
		GET_PutInsightRule(RuleName: string, RuleState: string | null | undefined, RuleDefinition: string, Tags: Array<Tag> | null | undefined, Action: GET_PutInsightRuleAction, Version: GET_PutInsightRuleVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutInsightRule?RuleName=' + (RuleName == null ? '' : encodeURIComponent(RuleName)) + '&RuleState=' + (RuleState == null ? '' : encodeURIComponent(RuleState)) + '&RuleDefinition=' + (RuleDefinition == null ? '' : encodeURIComponent(RuleDefinition)) + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates an alarm and associates it with the specified metric, metric math expression, or anomaly detection model.</p> <p>Alarms based on anomaly detection models cannot have Auto Scaling actions.</p> <p>When this operation creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.</p> <p>If you are an IAM user, you must have Amazon EC2 permissions for some alarm operations:</p> <ul> <li> <p> <code>iam:CreateServiceLinkedRole</code> for all alarms with EC2 actions</p> </li> <li> <p> <code>ec2:DescribeInstanceStatus</code> and <code>ec2:DescribeInstances</code> for all alarms on EC2 instance status metrics</p> </li> <li> <p> <code>ec2:StopInstances</code> for alarms with stop actions</p> </li> <li> <p> <code>ec2:TerminateInstances</code> for alarms with terminate actions</p> </li> <li> <p>No specific permissions are needed for alarms with recover actions</p> </li> </ul> <p>If you have read/write permissions for Amazon CloudWatch but not for Amazon EC2, you can still create an alarm, but the stop or terminate actions are not performed. However, if you are later granted the required permissions, the alarm actions that you created earlier are performed.</p> <p>If you are using an IAM role (for example, an EC2 instance profile), you cannot stop or terminate the instance using alarm actions. However, you can still see the alarm state and perform any other actions such as Amazon SNS notifications or Auto Scaling policies.</p> <p>If you are using temporary security credentials granted using AWS STS, you cannot stop or terminate an EC2 instance using alarm actions.</p> <p>The first time you create an alarm in the AWS Management Console, the CLI, or by using the PutMetricAlarm API, CloudWatch creates the necessary service-linked role for you. The service-linked role is called <code>AWSServiceRoleForCloudWatchEvents</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">AWS service-linked role</a>.</p>
		 * Get #Action=PutMetricAlarm
		 * @param {string} AlarmName The name for the alarm. This name must be unique within your AWS account.
		 * @param {string} AlarmDescription The description for the alarm.
		 * @param {boolean} ActionsEnabled Indicates whether actions should be executed during any changes to the alarm state. The default is <code>TRUE</code>.
		 * @param {Array<string>} OKActions <p>The actions to execute when this alarm transitions to an <code>OK</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p> <p>Valid Values: <code>arn:aws:automate:<i>region</i>:ec2:stop</code> | <code>arn:aws:automate:<i>region</i>:ec2:terminate</code> | <code>arn:aws:automate:<i>region</i>:ec2:recover</code> | <code>arn:aws:automate:<i>region</i>:ec2:reboot</code> | <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i> </code> | <code>arn:aws:autoscaling:<i>region</i>:<i>account-id</i>:scalingPolicy:<i>policy-id</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> <p>Valid Values (for use with IAM roles): <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Stop/1.0</code> | <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Terminate/1.0</code> | <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Reboot/1.0</code> </p>
		 * @param {Array<string>} AlarmActions <p>The actions to execute when this alarm transitions to the <code>ALARM</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p> <p>Valid Values: <code>arn:aws:automate:<i>region</i>:ec2:stop</code> | <code>arn:aws:automate:<i>region</i>:ec2:terminate</code> | <code>arn:aws:automate:<i>region</i>:ec2:recover</code> | <code>arn:aws:automate:<i>region</i>:ec2:reboot</code> | <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i> </code> | <code>arn:aws:autoscaling:<i>region</i>:<i>account-id</i>:scalingPolicy:<i>policy-id</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> <p>Valid Values (for use with IAM roles): <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Stop/1.0</code> | <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Terminate/1.0</code> | <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Reboot/1.0</code> </p>
		 * @param {Array<string>} InsufficientDataActions <p>The actions to execute when this alarm transitions to the <code>INSUFFICIENT_DATA</code> state from any other state. Each action is specified as an Amazon Resource Name (ARN).</p> <p>Valid Values: <code>arn:aws:automate:<i>region</i>:ec2:stop</code> | <code>arn:aws:automate:<i>region</i>:ec2:terminate</code> | <code>arn:aws:automate:<i>region</i>:ec2:recover</code> | <code>arn:aws:automate:<i>region</i>:ec2:reboot</code> | <code>arn:aws:sns:<i>region</i>:<i>account-id</i>:<i>sns-topic-name</i> </code> | <code>arn:aws:autoscaling:<i>region</i>:<i>account-id</i>:scalingPolicy:<i>policy-id</i>:autoScalingGroupName/<i>group-friendly-name</i>:policyName/<i>policy-friendly-name</i> </code> </p> <p>Valid Values (for use with IAM roles): <code>&gt;arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Stop/1.0</code> | <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Terminate/1.0</code> | <code>arn:aws:swf:<i>region</i>:<i>account-id</i>:action/actions/AWS_EC2.InstanceId.Reboot/1.0</code> </p>
		 * @param {string} MetricName <p>The name for the metric associated with the alarm. For each <code>PutMetricAlarm</code> operation, you must specify either <code>MetricName</code> or a <code>Metrics</code> array.</p> <p>If you are creating an alarm based on a math expression, you cannot specify this parameter, or any of the <code>Dimensions</code>, <code>Period</code>, <code>Namespace</code>, <code>Statistic</code>, or <code>ExtendedStatistic</code> parameters. Instead, you specify all this information in the <code>Metrics</code> array.</p>
		 * @param {string} Namespace The namespace for the metric associated specified in <code>MetricName</code>.
		 * @param {MetricAlarmStatistic} Statistic The statistic for the metric specified in <code>MetricName</code>, other than percentile. For percentile statistics, use <code>ExtendedStatistic</code>. When you call <code>PutMetricAlarm</code> and specify a <code>MetricName</code>, you must specify either <code>Statistic</code> or <code>ExtendedStatistic,</code> but not both.
		 * @param {string} ExtendedStatistic The percentile statistic for the metric specified in <code>MetricName</code>. Specify a value between p0.0 and p100. When you call <code>PutMetricAlarm</code> and specify a <code>MetricName</code>, you must specify either <code>Statistic</code> or <code>ExtendedStatistic,</code> but not both.
		 * @param {Array<Dimension>} Dimensions The dimensions for the metric specified in <code>MetricName</code>.
		 * @param {number} Period <p>The length, in seconds, used each time the metric specified in <code>MetricName</code> is evaluated. Valid values are 10, 30, and any multiple of 60.</p> <p> <code>Period</code> is required for alarms based on static thresholds. If you are creating an alarm based on a metric math expression, you specify the period for each metric within the objects in the <code>Metrics</code> array.</p> <p>Be sure to specify 10 or 30 only for metrics that are stored by a <code>PutMetricData</code> call with a <code>StorageResolution</code> of 1. If you specify a period of 10 or 30 for a metric that does not have sub-minute resolution, the alarm still attempts to gather data at the period rate that you specify. In this case, it does not receive data for the attempts that do not correspond to a one-minute data resolution, and the alarm may often lapse into INSUFFICENT_DATA status. Specifying 10 or 30 also sets this alarm as a high-resolution alarm, which has a higher charge than other alarms. For more information about pricing, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> <p>An alarm's total current evaluation period can be no longer than one day, so <code>Period</code> multiplied by <code>EvaluationPeriods</code> cannot be more than 86,400 seconds.</p>
		 * @param {GET_PutMetricAlarmUnit} Unit <p>The unit of measure for the statistic. For example, the units for the Amazon EC2 NetworkIn metric are Bytes because NetworkIn tracks the number of bytes that an instance receives on all network interfaces. You can also specify a unit when you create a custom metric. Units help provide conceptual meaning to your data. Metric data points that specify a unit of measure, such as Percent, are aggregated separately.</p> <p>If you don't specify <code>Unit</code>, CloudWatch retrieves all unit types that have been published for the metric and attempts to evaluate the alarm. Usually metrics are published with only one unit, so the alarm will work as intended.</p> <p>However, if the metric is published with multiple types of units and you don't specify a unit, the alarm's behavior is not defined and will behave un-predictably.</p> <p>We recommend omitting <code>Unit</code> so that you don't inadvertently specify an incorrect unit that is not published for this metric. Doing so causes the alarm to be stuck in the <code>INSUFFICIENT DATA</code> state.</p>
		 * @param {number} EvaluationPeriods <p>The number of periods over which data is compared to the specified threshold. If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an "M out of N" alarm, this value is the N.</p> <p>An alarm's total current evaluation period can be no longer than one day, so this number multiplied by <code>Period</code> cannot be more than 86,400 seconds.</p>
		 * @param {number} DatapointsToAlarm The number of data points that must be breaching to trigger the alarm. This is used only if you are setting an "M out of N" alarm. In that case, this value is the M. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation">Evaluating an Alarm</a> in the <i>Amazon CloudWatch User Guide</i>.
		 * @param {number} Threshold <p>The value against which the specified statistic is compared.</p> <p>This parameter is required for alarms based on static thresholds, but should not be used for alarms based on anomaly detection models.</p>
		 * @param {MetricAlarmComparisonOperator} ComparisonOperator <p> The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand.</p> <p>The values <code>LessThanLowerOrGreaterThanUpperThreshold</code>, <code>LessThanLowerThreshold</code>, and <code>GreaterThanUpperThreshold</code> are used only for alarms based on anomaly detection models.</p>
		 * @param {string} TreatMissingData <p> Sets how this alarm is to handle missing data points. If <code>TreatMissingData</code> is omitted, the default behavior of <code>missing</code> is used. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data">Configuring How CloudWatch Alarms Treats Missing Data</a>.</p> <p>Valid Values: <code>breaching | notBreaching | ignore | missing</code> </p>
		 * @param {string} EvaluateLowSampleCountPercentile <p> Used only for alarms based on percentiles. If you specify <code>ignore</code>, the alarm state does not change during periods with too few data points to be statistically significant. If you specify <code>evaluate</code> or omit this parameter, the alarm is always evaluated and possibly changes state no matter how many data points are available. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#percentiles-with-low-samples">Percentile-Based CloudWatch Alarms and Low Data Samples</a>.</p> <p>Valid Values: <code>evaluate | ignore</code> </p>
		 * @param {Array<MetricDataQuery>} Metrics <p>An array of <code>MetricDataQuery</code> structures that enable you to create an alarm based on the result of a metric math expression. For each <code>PutMetricAlarm</code> operation, you must specify either <code>MetricName</code> or a <code>Metrics</code> array.</p> <p>Each item in the <code>Metrics</code> array either retrieves a metric or performs a math expression.</p> <p>One item in the <code>Metrics</code> array is the expression that the alarm watches. You designate this expression by setting <code>ReturnValue</code> to true for this object in the array. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDataQuery.html">MetricDataQuery</a>.</p> <p>If you use the <code>Metrics</code> parameter, you cannot include the <code>MetricName</code>, <code>Dimensions</code>, <code>Period</code>, <code>Namespace</code>, <code>Statistic</code>, or <code>ExtendedStatistic</code> parameters of <code>PutMetricAlarm</code> in the same operation. Instead, you retrieve the metrics you are using in your math expression as part of the <code>Metrics</code> array.</p>
		 * @param {Array<Tag>} Tags <p>A list of key-value pairs to associate with the alarm. You can associate as many as 50 tags with an alarm.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p>
		 * @param {string} ThresholdMetricId <p>If this is an alarm based on an anomaly detection model, make this value match the ID of the <code>ANOMALY_DETECTION_BAND</code> function.</p> <p>For an example of how to use this parameter, see the <b>Anomaly Detection Model Alarm</b> example on this page.</p> <p>If your alarm uses this parameter, it cannot have Auto Scaling actions.</p>
		 * @return {void} Success
		 */
		GET_PutMetricAlarm(AlarmName: string, AlarmDescription: string | null | undefined, ActionsEnabled: boolean | null | undefined, OKActions: Array<string> | null | undefined, AlarmActions: Array<string> | null | undefined, InsufficientDataActions: Array<string> | null | undefined, MetricName: string | null | undefined, Namespace: string | null | undefined, Statistic: MetricAlarmStatistic | null | undefined, ExtendedStatistic: string | null | undefined, Dimensions: Array<Dimension> | null | undefined, Period: number | null | undefined, Unit: GET_PutMetricAlarmUnit | null | undefined, EvaluationPeriods: number, DatapointsToAlarm: number | null | undefined, Threshold: number | null | undefined, ComparisonOperator: MetricAlarmComparisonOperator, TreatMissingData: string | null | undefined, EvaluateLowSampleCountPercentile: string | null | undefined, Metrics: Array<MetricDataQuery> | null | undefined, Tags: Array<Tag> | null | undefined, ThresholdMetricId: string | null | undefined, Action: GET_PutMetricAlarmAction, Version: GET_PutMetricAlarmVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutMetricAlarm?AlarmName=' + (AlarmName == null ? '' : encodeURIComponent(AlarmName)) + '&AlarmDescription=' + (AlarmDescription == null ? '' : encodeURIComponent(AlarmDescription)) + '&ActionsEnabled=' + ActionsEnabled + '&' + OKActions?.map(z => `OKActions=${encodeURIComponent(z)}`).join('&') + '&' + AlarmActions?.map(z => `AlarmActions=${encodeURIComponent(z)}`).join('&') + '&' + InsufficientDataActions?.map(z => `InsufficientDataActions=${encodeURIComponent(z)}`).join('&') + '&MetricName=' + (MetricName == null ? '' : encodeURIComponent(MetricName)) + '&Namespace=' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '&Statistic=' + Statistic + '&ExtendedStatistic=' + (ExtendedStatistic == null ? '' : encodeURIComponent(ExtendedStatistic)) + '&' + Dimensions?.map(z => `Dimensions=${z}`).join('&') + '&Period=' + Period + '&Unit=' + Unit + '&EvaluationPeriods=' + EvaluationPeriods + '&DatapointsToAlarm=' + DatapointsToAlarm + '&Threshold=' + Threshold + '&ComparisonOperator=' + ComparisonOperator + '&TreatMissingData=' + (TreatMissingData == null ? '' : encodeURIComponent(TreatMissingData)) + '&EvaluateLowSampleCountPercentile=' + (EvaluateLowSampleCountPercentile == null ? '' : encodeURIComponent(EvaluateLowSampleCountPercentile)) + '&' + Metrics?.map(z => `Metrics=${z}`).join('&') + '&' + Tags?.map(z => `Tags=${z}`).join('&') + '&ThresholdMetricId=' + (ThresholdMetricId == null ? '' : encodeURIComponent(ThresholdMetricId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Publishes metric data points to Amazon CloudWatch. CloudWatch associates the data points with the specified metric. If the specified metric does not exist, CloudWatch creates the metric. When CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.</p> <p>You can publish either individual data points in the <code>Value</code> field, or arrays of values and the number of times each value occurred during the period by using the <code>Values</code> and <code>Counts</code> fields in the <code>MetricDatum</code> structure. Using the <code>Values</code> and <code>Counts</code> method enables you to publish up to 150 values per metric with one <code>PutMetricData</code> request, and supports retrieving percentile statistics on this data.</p> <p>Each <code>PutMetricData</code> request is limited to 40 KB in size for HTTP POST requests. You can send a payload compressed by gzip. Each request is also limited to no more than 20 different metrics.</p> <p>Although the <code>Value</code> parameter accepts numbers of type <code>Double</code>, CloudWatch rejects values that are either too small or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.</p> <p>You can use up to 10 dimensions per metric to further clarify what data the metric collects. Each dimension consists of a Name and Value pair. For more information about specifying dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Data points with time stamps from 24 hours ago or longer can take at least 48 hours to become available for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> from the time they are submitted. Data points with time stamps between 3 and 24 hours ago can take as much as 2 hours to become available for for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p> <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish data using a statistic set instead, you can only retrieve percentile statistics for this data if one of the following conditions is true:</p> <ul> <li> <p>The <code>SampleCount</code> value of the statistic set is 1 and <code>Min</code>, <code>Max</code>, and <code>Sum</code> are all equal.</p> </li> <li> <p>The <code>Min</code> and <code>Max</code> are equal, and <code>Sum</code> is equal to <code>Min</code> multiplied by <code>SampleCount</code>.</p> </li> </ul>
		 * Get #Action=PutMetricData
		 * @param {string} Namespace <p>The namespace for the metric data.</p> <p>To avoid conflicts with AWS service namespaces, you should not specify a namespace that begins with <code>AWS/</code> </p>
		 * @param {Array<MetricDatum>} MetricData The data for the metric. The array can include no more than 20 metrics per call.
		 * @return {void} Success
		 */
		GET_PutMetricData(Namespace: string, MetricData: Array<MetricDatum>, Action: GET_PutMetricDataAction, Version: GET_PutMetricDataVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutMetricData?Namespace=' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '&' + MetricData.map(z => `MetricData=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to <code>ALARM</code> sends an SNS message.</p> <p>Metric alarms returns to their actual state quickly, often within seconds. Because the metric alarm state change happens quickly, it is typically only visible in the alarm's <b>History</b> tab in the Amazon CloudWatch console or through <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_DescribeAlarmHistory.html">DescribeAlarmHistory</a>.</p> <p>If you use <code>SetAlarmState</code> on a composite alarm, the composite alarm is not guaranteed to return to its actual state. It will return to its actual state only once any of its children alarms change state. It is also re-evaluated if you update its configuration.</p> <p>If an alarm triggers EC2 Auto Scaling policies or application Auto Scaling policies, you must include information in the <code>StateReasonData</code> parameter to enable the policy to take the correct action.</p>
		 * Get #Action=SetAlarmState
		 * @param {string} AlarmName The name for the alarm. This name must be unique within the AWS account. The maximum length is 255 characters.
		 * @param {CompositeAlarmStateValue} StateValue The value of the state.
		 * @param {string} StateReason The reason that this alarm is set to this specific state, in text format.
		 * @param {string} StateReasonData <p>The reason that this alarm is set to this specific state, in JSON format.</p> <p>For SNS or EC2 alarm actions, this is just informational. But for EC2 Auto Scaling or application Auto Scaling alarm actions, the Auto Scaling policy uses the information in this field to take the correct action.</p>
		 * @return {void} Success
		 */
		GET_SetAlarmState(AlarmName: string, StateValue: CompositeAlarmStateValue, StateReason: string, StateReasonData: string | null | undefined, Action: GET_SetAlarmStateAction, Version: GET_SetAlarmStateVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetAlarmState?AlarmName=' + (AlarmName == null ? '' : encodeURIComponent(AlarmName)) + '&StateValue=' + StateValue + '&StateReason=' + (StateReason == null ? '' : encodeURIComponent(StateReason)) + '&StateReasonData=' + (StateReasonData == null ? '' : encodeURIComponent(StateReasonData)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Assigns one or more tags (key-value pairs) to the specified CloudWatch resource. Currently, the only CloudWatch resources that can be tagged are alarms and Contributor Insights rules.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with an alarm that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a CloudWatch resource.</p>
		 * Get #Action=TagResource
		 * @param {string} ResourceARN <p>The ARN of the CloudWatch resource that you're adding tags to.</p> <p>The ARN format of an alarm is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:alarm:<i>alarm-name</i> </code> </p> <p>The ARN format of a Contributor Insights rule is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:insight-rule:<i>insight-rule-name</i> </code> </p> <p>For more information on ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General Reference</i>.</p>
		 * @param {Array<Tag>} Tags The list of key-value pairs to associate with the alarm.
		 * @return {void} Success
		 */
		GET_TagResource(ResourceARN: string, Tags: Array<Tag>, Action: GET_TagResourceAction, Version: GET_TagResourceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=TagResource?ResourceARN=' + (ResourceARN == null ? '' : encodeURIComponent(ResourceARN)) + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes one or more tags from the specified resource.
		 * Get #Action=UntagResource
		 * @param {string} ResourceARN <p>The ARN of the CloudWatch resource that you're removing tags from.</p> <p>The ARN format of an alarm is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:alarm:<i>alarm-name</i> </code> </p> <p>The ARN format of a Contributor Insights rule is <code>arn:aws:cloudwatch:<i>Region</i>:<i>account-id</i>:insight-rule:<i>insight-rule-name</i> </code> </p> <p>For more information on ARN format, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html#amazoncloudwatch-resources-for-iam-policies"> Resource Types Defined by Amazon CloudWatch</a> in the <i>Amazon Web Services General Reference</i>.</p>
		 * @param {Array<string>} TagKeys The list of tag keys to remove from the resource.
		 * @return {void} Success
		 */
		GET_UntagResource(ResourceARN: string, TagKeys: Array<string>, Action: GET_UntagResourceAction, Version: GET_UntagResourceVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UntagResource?ResourceARN=' + (ResourceARN == null ? '' : encodeURIComponent(ResourceARN)) + '&' + TagKeys.map(z => `TagKeys=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_DeleteAlarmsAction { DeleteAlarms = 0 }

	export enum GET_DeleteAlarmsVersion { _2010_08_01 = 0 }

	export enum POST_DeleteAlarmsVersion { _2010_08_01 = 0 }

	export enum GET_DeleteAnomalyDetectorAction { DeleteAnomalyDetector = 0 }

	export enum GET_DeleteAnomalyDetectorVersion { _2010_08_01 = 0 }

	export enum POST_DeleteAnomalyDetectorVersion { _2010_08_01 = 0 }

	export enum GET_DeleteDashboardsAction { DeleteDashboards = 0 }

	export enum GET_DeleteDashboardsVersion { _2010_08_01 = 0 }

	export enum POST_DeleteDashboardsVersion { _2010_08_01 = 0 }

	export enum GET_DeleteInsightRulesAction { DeleteInsightRules = 0 }

	export enum GET_DeleteInsightRulesVersion { _2010_08_01 = 0 }

	export enum POST_DeleteInsightRulesVersion { _2010_08_01 = 0 }

	export enum GET_DescribeAlarmHistoryAction { DescribeAlarmHistory = 0 }

	export enum GET_DescribeAlarmHistoryVersion { _2010_08_01 = 0 }

	export enum POST_DescribeAlarmHistoryVersion { _2010_08_01 = 0 }

	export enum GET_DescribeAlarmsAction { DescribeAlarms = 0 }

	export enum GET_DescribeAlarmsVersion { _2010_08_01 = 0 }

	export enum POST_DescribeAlarmsVersion { _2010_08_01 = 0 }

	export enum GET_DescribeAlarmsForMetricUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export enum GET_DescribeAlarmsForMetricAction { DescribeAlarmsForMetric = 0 }

	export enum GET_DescribeAlarmsForMetricVersion { _2010_08_01 = 0 }

	export enum POST_DescribeAlarmsForMetricVersion { _2010_08_01 = 0 }

	export enum GET_DescribeAnomalyDetectorsAction { DescribeAnomalyDetectors = 0 }

	export enum GET_DescribeAnomalyDetectorsVersion { _2010_08_01 = 0 }

	export enum POST_DescribeAnomalyDetectorsVersion { _2010_08_01 = 0 }

	export enum GET_DescribeInsightRulesAction { DescribeInsightRules = 0 }

	export enum GET_DescribeInsightRulesVersion { _2010_08_01 = 0 }

	export enum POST_DescribeInsightRulesVersion { _2010_08_01 = 0 }

	export enum GET_DisableAlarmActionsAction { DisableAlarmActions = 0 }

	export enum GET_DisableAlarmActionsVersion { _2010_08_01 = 0 }

	export enum POST_DisableAlarmActionsVersion { _2010_08_01 = 0 }

	export enum GET_DisableInsightRulesAction { DisableInsightRules = 0 }

	export enum GET_DisableInsightRulesVersion { _2010_08_01 = 0 }

	export enum POST_DisableInsightRulesVersion { _2010_08_01 = 0 }

	export enum GET_EnableAlarmActionsAction { EnableAlarmActions = 0 }

	export enum GET_EnableAlarmActionsVersion { _2010_08_01 = 0 }

	export enum POST_EnableAlarmActionsVersion { _2010_08_01 = 0 }

	export enum GET_EnableInsightRulesAction { EnableInsightRules = 0 }

	export enum GET_EnableInsightRulesVersion { _2010_08_01 = 0 }

	export enum POST_EnableInsightRulesVersion { _2010_08_01 = 0 }

	export enum GET_GetDashboardAction { GetDashboard = 0 }

	export enum GET_GetDashboardVersion { _2010_08_01 = 0 }

	export enum POST_GetDashboardVersion { _2010_08_01 = 0 }

	export enum GET_GetInsightRuleReportAction { GetInsightRuleReport = 0 }

	export enum GET_GetInsightRuleReportVersion { _2010_08_01 = 0 }

	export enum POST_GetInsightRuleReportVersion { _2010_08_01 = 0 }

	export enum GET_GetMetricDataAction { GetMetricData = 0 }

	export enum GET_GetMetricDataVersion { _2010_08_01 = 0 }

	export enum POST_GetMetricDataVersion { _2010_08_01 = 0 }

	export enum GET_GetMetricStatisticsUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export enum GET_GetMetricStatisticsAction { GetMetricStatistics = 0 }

	export enum GET_GetMetricStatisticsVersion { _2010_08_01 = 0 }

	export enum POST_GetMetricStatisticsVersion { _2010_08_01 = 0 }

	export enum GET_GetMetricWidgetImageAction { GetMetricWidgetImage = 0 }

	export enum GET_GetMetricWidgetImageVersion { _2010_08_01 = 0 }

	export enum POST_GetMetricWidgetImageVersion { _2010_08_01 = 0 }

	export enum GET_ListDashboardsAction { ListDashboards = 0 }

	export enum GET_ListDashboardsVersion { _2010_08_01 = 0 }

	export enum POST_ListDashboardsVersion { _2010_08_01 = 0 }

	export enum GET_ListMetricsAction { ListMetrics = 0 }

	export enum GET_ListMetricsVersion { _2010_08_01 = 0 }

	export enum POST_ListMetricsVersion { _2010_08_01 = 0 }

	export enum GET_ListTagsForResourceAction { ListTagsForResource = 0 }

	export enum GET_ListTagsForResourceVersion { _2010_08_01 = 0 }

	export enum POST_ListTagsForResourceVersion { _2010_08_01 = 0 }

	export interface GET_PutAnomalyDetectorConfiguration {
		ExcludedTimeRanges?: Array<Range>;

		/** Max length: 50 */
		MetricTimezone?: string | null;
	}
	export interface GET_PutAnomalyDetectorConfigurationFormProperties {

		/** Max length: 50 */
		MetricTimezone: FormControl<string | null | undefined>,
	}
	export function CreateGET_PutAnomalyDetectorConfigurationFormGroup() {
		return new FormGroup<GET_PutAnomalyDetectorConfigurationFormProperties>({
			MetricTimezone: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.pattern('.*')]),
		});

	}

	export enum GET_PutAnomalyDetectorAction { PutAnomalyDetector = 0 }

	export enum GET_PutAnomalyDetectorVersion { _2010_08_01 = 0 }

	export enum POST_PutAnomalyDetectorVersion { _2010_08_01 = 0 }

	export enum GET_PutCompositeAlarmAction { PutCompositeAlarm = 0 }

	export enum GET_PutCompositeAlarmVersion { _2010_08_01 = 0 }

	export enum POST_PutCompositeAlarmVersion { _2010_08_01 = 0 }

	export enum GET_PutDashboardAction { PutDashboard = 0 }

	export enum GET_PutDashboardVersion { _2010_08_01 = 0 }

	export enum POST_PutDashboardVersion { _2010_08_01 = 0 }

	export enum GET_PutInsightRuleAction { PutInsightRule = 0 }

	export enum GET_PutInsightRuleVersion { _2010_08_01 = 0 }

	export enum POST_PutInsightRuleVersion { _2010_08_01 = 0 }

	export enum GET_PutMetricAlarmUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export enum GET_PutMetricAlarmAction { PutMetricAlarm = 0 }

	export enum GET_PutMetricAlarmVersion { _2010_08_01 = 0 }

	export enum POST_PutMetricAlarmVersion { _2010_08_01 = 0 }

	export enum GET_PutMetricDataAction { PutMetricData = 0 }

	export enum GET_PutMetricDataVersion { _2010_08_01 = 0 }

	export enum POST_PutMetricDataVersion { _2010_08_01 = 0 }

	export enum GET_SetAlarmStateAction { SetAlarmState = 0 }

	export enum GET_SetAlarmStateVersion { _2010_08_01 = 0 }

	export enum POST_SetAlarmStateVersion { _2010_08_01 = 0 }

	export enum GET_TagResourceAction { TagResource = 0 }

	export enum GET_TagResourceVersion { _2010_08_01 = 0 }

	export enum POST_TagResourceVersion { _2010_08_01 = 0 }

	export enum GET_UntagResourceAction { UntagResource = 0 }

	export enum GET_UntagResourceVersion { _2010_08_01 = 0 }

	export enum POST_UntagResourceVersion { _2010_08_01 = 0 }

}

