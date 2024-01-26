import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateScalingPlanResponse {

		/** Required */
		ScalingPlanVersion: number;
	}
	export interface CreateScalingPlanResponseFormProperties {

		/** Required */
		ScalingPlanVersion: FormControl<number | null | undefined>,
	}
	export function CreateCreateScalingPlanResponseFormGroup() {
		return new FormGroup<CreateScalingPlanResponseFormProperties>({
			ScalingPlanVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateScalingPlanRequest {

		/** Required */
		ScalingPlanName: string;

		/** Required */
		ApplicationSource: ApplicationSource;

		/** Required */
		ScalingInstructions: Array<ScalingInstruction>;
	}
	export interface CreateScalingPlanRequestFormProperties {

		/** Required */
		ScalingPlanName: FormControl<string | null | undefined>,
	}
	export function CreateCreateScalingPlanRequestFormGroup() {
		return new FormGroup<CreateScalingPlanRequestFormProperties>({
			ScalingPlanName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents an application source. */
	export interface ApplicationSource {
		CloudFormationStackARN?: string;
		TagFilters?: Array<TagFilter>;
	}

	/** Represents an application source. */
	export interface ApplicationSourceFormProperties {
		CloudFormationStackARN: FormControl<string | null | undefined>,
	}
	export function CreateApplicationSourceFormGroup() {
		return new FormGroup<ApplicationSourceFormProperties>({
			CloudFormationStackARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a tag. */
	export interface TagFilter {
		Key?: string;
		Values?: Array<string>;
	}

	/** Represents a tag. */
	export interface TagFilterFormProperties {
		Key: FormControl<string | null | undefined>,
	}
	export function CreateTagFilterFormGroup() {
		return new FormGroup<TagFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes a scaling instruction for a scalable resource in a scaling plan. Each scaling instruction applies to one resource.</p> <p>AWS Auto Scaling creates target tracking scaling policies based on the scaling instructions. Target tracking scaling policies adjust the capacity of your scalable resource as required to maintain resource utilization at the target value that you specified. </p> <p>AWS Auto Scaling also configures predictive scaling for your Amazon EC2 Auto Scaling groups using a subset of parameters, including the load metric, the scaling metric, the target value for the scaling metric, the predictive scaling mode (forecast and scale or forecast only), and the desired behavior when the forecast capacity exceeds the maximum capacity of the resource. With predictive scaling, AWS Auto Scaling generates forecasts with traffic predictions for the two days ahead and schedules scaling actions that proactively add and remove resource capacity to match the forecast. </p> <important> <p>We recommend waiting a minimum of 24 hours after creating an Auto Scaling group to configure predictive scaling. At minimum, there must be 24 hours of historical data to generate a forecast. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-best-practices.html">Best Practices for AWS Auto Scaling</a> in the <i>AWS Auto Scaling User Guide</i>.</p> </important> */
	export interface ScalingInstruction {

		/** Required */
		ServiceNamespace: ServiceNamespace;

		/** Required */
		ResourceId: string;

		/** Required */
		ScalableDimension: ScalableDimension;

		/** Required */
		MinCapacity: number;

		/** Required */
		MaxCapacity: number;

		/** Required */
		TargetTrackingConfigurations: Array<TargetTrackingConfiguration>;
		PredefinedLoadMetricSpecification?: PredefinedLoadMetricSpecification;
		CustomizedLoadMetricSpecification?: CustomizedLoadMetricSpecification;
		ScheduledActionBufferTime?: number | null;
		PredictiveScalingMaxCapacityBehavior?: PredictiveScalingMaxCapacityBehavior;
		PredictiveScalingMaxCapacityBuffer?: number | null;
		PredictiveScalingMode?: PredictiveScalingMode;
		ScalingPolicyUpdateBehavior?: ScalingPolicyUpdateBehavior;
		DisableDynamicScaling?: boolean | null;
	}

	/** <p>Describes a scaling instruction for a scalable resource in a scaling plan. Each scaling instruction applies to one resource.</p> <p>AWS Auto Scaling creates target tracking scaling policies based on the scaling instructions. Target tracking scaling policies adjust the capacity of your scalable resource as required to maintain resource utilization at the target value that you specified. </p> <p>AWS Auto Scaling also configures predictive scaling for your Amazon EC2 Auto Scaling groups using a subset of parameters, including the load metric, the scaling metric, the target value for the scaling metric, the predictive scaling mode (forecast and scale or forecast only), and the desired behavior when the forecast capacity exceeds the maximum capacity of the resource. With predictive scaling, AWS Auto Scaling generates forecasts with traffic predictions for the two days ahead and schedules scaling actions that proactively add and remove resource capacity to match the forecast. </p> <important> <p>We recommend waiting a minimum of 24 hours after creating an Auto Scaling group to configure predictive scaling. At minimum, there must be 24 hours of historical data to generate a forecast. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-best-practices.html">Best Practices for AWS Auto Scaling</a> in the <i>AWS Auto Scaling User Guide</i>.</p> </important> */
	export interface ScalingInstructionFormProperties {

		/** Required */
		ServiceNamespace: FormControl<ServiceNamespace | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ScalableDimension: FormControl<ScalableDimension | null | undefined>,

		/** Required */
		MinCapacity: FormControl<number | null | undefined>,

		/** Required */
		MaxCapacity: FormControl<number | null | undefined>,
		ScheduledActionBufferTime: FormControl<number | null | undefined>,
		PredictiveScalingMaxCapacityBehavior: FormControl<PredictiveScalingMaxCapacityBehavior | null | undefined>,
		PredictiveScalingMaxCapacityBuffer: FormControl<number | null | undefined>,
		PredictiveScalingMode: FormControl<PredictiveScalingMode | null | undefined>,
		ScalingPolicyUpdateBehavior: FormControl<ScalingPolicyUpdateBehavior | null | undefined>,
		DisableDynamicScaling: FormControl<boolean | null | undefined>,
	}
	export function CreateScalingInstructionFormGroup() {
		return new FormGroup<ScalingInstructionFormProperties>({
			ServiceNamespace: new FormControl<ServiceNamespace | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalableDimension: new FormControl<ScalableDimension | null | undefined>(undefined, [Validators.required]),
			MinCapacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaxCapacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ScheduledActionBufferTime: new FormControl<number | null | undefined>(undefined),
			PredictiveScalingMaxCapacityBehavior: new FormControl<PredictiveScalingMaxCapacityBehavior | null | undefined>(undefined),
			PredictiveScalingMaxCapacityBuffer: new FormControl<number | null | undefined>(undefined),
			PredictiveScalingMode: new FormControl<PredictiveScalingMode | null | undefined>(undefined),
			ScalingPolicyUpdateBehavior: new FormControl<ScalingPolicyUpdateBehavior | null | undefined>(undefined),
			DisableDynamicScaling: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ServiceNamespace { autoscaling = 0, ecs = 1, ec2 = 2, rds = 3, dynamodb = 4 }

	export enum ScalableDimension { 'autoscaling:autoScalingGroup:DesiredCapacity' = 0, 'ecs:service:DesiredCount' = 1, 'ec2:spot-fleet-request:TargetCapacity' = 2, 'rds:cluster:ReadReplicaCount' = 3, 'dynamodb:table:ReadCapacityUnits' = 4, 'dynamodb:table:WriteCapacityUnits' = 5, 'dynamodb:index:ReadCapacityUnits' = 6, 'dynamodb:index:WriteCapacityUnits' = 7 }


	/** Describes a target tracking configuration to use with AWS Auto Scaling. Used with <a>ScalingInstruction</a> and <a>ScalingPolicy</a>. */
	export interface TargetTrackingConfiguration {
		PredefinedScalingMetricSpecification?: PredefinedScalingMetricSpecification;
		CustomizedScalingMetricSpecification?: CustomizedScalingMetricSpecification;

		/** Required */
		TargetValue: number;
		DisableScaleIn?: boolean | null;
		ScaleOutCooldown?: number | null;
		ScaleInCooldown?: number | null;
		EstimatedInstanceWarmup?: number | null;
	}

	/** Describes a target tracking configuration to use with AWS Auto Scaling. Used with <a>ScalingInstruction</a> and <a>ScalingPolicy</a>. */
	export interface TargetTrackingConfigurationFormProperties {

		/** Required */
		TargetValue: FormControl<number | null | undefined>,
		DisableScaleIn: FormControl<boolean | null | undefined>,
		ScaleOutCooldown: FormControl<number | null | undefined>,
		ScaleInCooldown: FormControl<number | null | undefined>,
		EstimatedInstanceWarmup: FormControl<number | null | undefined>,
	}
	export function CreateTargetTrackingConfigurationFormGroup() {
		return new FormGroup<TargetTrackingConfigurationFormProperties>({
			TargetValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DisableScaleIn: new FormControl<boolean | null | undefined>(undefined),
			ScaleOutCooldown: new FormControl<number | null | undefined>(undefined),
			ScaleInCooldown: new FormControl<number | null | undefined>(undefined),
			EstimatedInstanceWarmup: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a predefined metric that can be used for dynamic scaling as part of a target tracking scaling policy. */
	export interface PredefinedScalingMetricSpecification {

		/** Required */
		PredefinedScalingMetricType: ScalingMetricType;
		ResourceLabel?: string;
	}

	/** Represents a predefined metric that can be used for dynamic scaling as part of a target tracking scaling policy. */
	export interface PredefinedScalingMetricSpecificationFormProperties {

		/** Required */
		PredefinedScalingMetricType: FormControl<ScalingMetricType | null | undefined>,
		ResourceLabel: FormControl<string | null | undefined>,
	}
	export function CreatePredefinedScalingMetricSpecificationFormGroup() {
		return new FormGroup<PredefinedScalingMetricSpecificationFormProperties>({
			PredefinedScalingMetricType: new FormControl<ScalingMetricType | null | undefined>(undefined, [Validators.required]),
			ResourceLabel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScalingMetricType { ASGAverageCPUUtilization = 0, ASGAverageNetworkIn = 1, ASGAverageNetworkOut = 2, DynamoDBReadCapacityUtilization = 3, DynamoDBWriteCapacityUtilization = 4, ECSServiceAverageCPUUtilization = 5, ECSServiceAverageMemoryUtilization = 6, ALBRequestCountPerTarget = 7, RDSReaderAverageCPUUtilization = 8, RDSReaderAverageDatabaseConnections = 9, EC2SpotFleetRequestAverageCPUUtilization = 10, EC2SpotFleetRequestAverageNetworkIn = 11, EC2SpotFleetRequestAverageNetworkOut = 12 }


	/** <p>Represents a CloudWatch metric of your choosing that can be used for dynamic scaling as part of a target tracking scaling policy. </p> <p>To create your customized scaling metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases. </p> </li> </ul> <p>For information about terminology, available metrics, or how to publish new metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p> */
	export interface CustomizedScalingMetricSpecification {

		/** Required */
		MetricName: string;

		/** Required */
		Namespace: string;
		Dimensions?: Array<MetricDimension>;

		/** Required */
		Statistic: MetricStatistic;
		Unit?: string;
	}

	/** <p>Represents a CloudWatch metric of your choosing that can be used for dynamic scaling as part of a target tracking scaling policy. </p> <p>To create your customized scaling metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases. </p> </li> </ul> <p>For information about terminology, available metrics, or how to publish new metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p> */
	export interface CustomizedScalingMetricSpecificationFormProperties {

		/** Required */
		MetricName: FormControl<string | null | undefined>,

		/** Required */
		Namespace: FormControl<string | null | undefined>,

		/** Required */
		Statistic: FormControl<MetricStatistic | null | undefined>,
		Unit: FormControl<string | null | undefined>,
	}
	export function CreateCustomizedScalingMetricSpecificationFormGroup() {
		return new FormGroup<CustomizedScalingMetricSpecificationFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Namespace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Statistic: new FormControl<MetricStatistic | null | undefined>(undefined, [Validators.required]),
			Unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a dimension for a customized metric. */
	export interface MetricDimension {

		/** Required */
		Name: string;

		/** Required */
		Value: string;
	}

	/** Represents a dimension for a customized metric. */
	export interface MetricDimensionFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateMetricDimensionFormGroup() {
		return new FormGroup<MetricDimensionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MetricStatistic { Average = 0, Minimum = 1, Maximum = 2, SampleCount = 3, Sum = 4 }


	/** <p>Represents a predefined metric that can be used for predictive scaling.</p> <p>After creating your scaling plan, you can use the AWS Auto Scaling console to visualize forecasts for the specified metric. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-create-scaling-plan.html#gs-view-resource">View Scaling Information for a Resource</a> in the <i>AWS Auto Scaling User Guide</i>.</p> */
	export interface PredefinedLoadMetricSpecification {

		/** Required */
		PredefinedLoadMetricType: LoadMetricType;
		ResourceLabel?: string;
	}

	/** <p>Represents a predefined metric that can be used for predictive scaling.</p> <p>After creating your scaling plan, you can use the AWS Auto Scaling console to visualize forecasts for the specified metric. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-create-scaling-plan.html#gs-view-resource">View Scaling Information for a Resource</a> in the <i>AWS Auto Scaling User Guide</i>.</p> */
	export interface PredefinedLoadMetricSpecificationFormProperties {

		/** Required */
		PredefinedLoadMetricType: FormControl<LoadMetricType | null | undefined>,
		ResourceLabel: FormControl<string | null | undefined>,
	}
	export function CreatePredefinedLoadMetricSpecificationFormGroup() {
		return new FormGroup<PredefinedLoadMetricSpecificationFormProperties>({
			PredefinedLoadMetricType: new FormControl<LoadMetricType | null | undefined>(undefined, [Validators.required]),
			ResourceLabel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LoadMetricType { ASGTotalCPUUtilization = 0, ASGTotalNetworkIn = 1, ASGTotalNetworkOut = 2, ALBTargetGroupRequestCount = 3 }


	/** <p>Represents a CloudWatch metric of your choosing that can be used for predictive scaling. </p> <p>For predictive scaling to work with a customized load metric specification, AWS Auto Scaling needs access to the <code>Sum</code> and <code>Average</code> statistics that CloudWatch computes from metric data.</p> <p>When you choose a load metric, make sure that the required <code>Sum</code> and <code>Average</code> statistics for your metric are available in CloudWatch and that they provide relevant data for predictive scaling. The <code>Sum</code> statistic must represent the total load on the resource, and the <code>Average</code> statistic must represent the average load per capacity unit of the resource. For example, there is a metric that counts the number of requests processed by your Auto Scaling group. If the <code>Sum</code> statistic represents the total request count processed by the group, then the <code>Average</code> statistic for the specified metric must represent the average request count processed by each instance of the group. </p> <p>If you publish your own metrics, you can aggregate the data points at a given interval and then publish the aggregated data points to CloudWatch. Before AWS Auto Scaling generates the forecast, it sums up all the metric data points that occurred within each hour to match the granularity period that is used in the forecast (60 minutes).</p> <p>For information about terminology, available metrics, or how to publish new metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p> <p>After creating your scaling plan, you can use the AWS Auto Scaling console to visualize forecasts for the specified metric. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-create-scaling-plan.html#gs-view-resource">View Scaling Information for a Resource</a> in the <i>AWS Auto Scaling User Guide</i>.</p> */
	export interface CustomizedLoadMetricSpecification {

		/** Required */
		MetricName: string;

		/** Required */
		Namespace: string;
		Dimensions?: Array<MetricDimension>;

		/** Required */
		Statistic: MetricStatistic;
		Unit?: string;
	}

	/** <p>Represents a CloudWatch metric of your choosing that can be used for predictive scaling. </p> <p>For predictive scaling to work with a customized load metric specification, AWS Auto Scaling needs access to the <code>Sum</code> and <code>Average</code> statistics that CloudWatch computes from metric data.</p> <p>When you choose a load metric, make sure that the required <code>Sum</code> and <code>Average</code> statistics for your metric are available in CloudWatch and that they provide relevant data for predictive scaling. The <code>Sum</code> statistic must represent the total load on the resource, and the <code>Average</code> statistic must represent the average load per capacity unit of the resource. For example, there is a metric that counts the number of requests processed by your Auto Scaling group. If the <code>Sum</code> statistic represents the total request count processed by the group, then the <code>Average</code> statistic for the specified metric must represent the average request count processed by each instance of the group. </p> <p>If you publish your own metrics, you can aggregate the data points at a given interval and then publish the aggregated data points to CloudWatch. Before AWS Auto Scaling generates the forecast, it sums up all the metric data points that occurred within each hour to match the granularity period that is used in the forecast (60 minutes).</p> <p>For information about terminology, available metrics, or how to publish new metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p> <p>After creating your scaling plan, you can use the AWS Auto Scaling console to visualize forecasts for the specified metric. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-create-scaling-plan.html#gs-view-resource">View Scaling Information for a Resource</a> in the <i>AWS Auto Scaling User Guide</i>.</p> */
	export interface CustomizedLoadMetricSpecificationFormProperties {

		/** Required */
		MetricName: FormControl<string | null | undefined>,

		/** Required */
		Namespace: FormControl<string | null | undefined>,

		/** Required */
		Statistic: FormControl<MetricStatistic | null | undefined>,
		Unit: FormControl<string | null | undefined>,
	}
	export function CreateCustomizedLoadMetricSpecificationFormGroup() {
		return new FormGroup<CustomizedLoadMetricSpecificationFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Namespace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Statistic: new FormControl<MetricStatistic | null | undefined>(undefined, [Validators.required]),
			Unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PredictiveScalingMaxCapacityBehavior { SetForecastCapacityToMaxCapacity = 0, SetMaxCapacityToForecastCapacity = 1, SetMaxCapacityAboveForecastCapacity = 2 }

	export enum PredictiveScalingMode { ForecastAndScale = 0, ForecastOnly = 1 }

	export enum ScalingPolicyUpdateBehavior { KeepExternalPolicies = 0, ReplaceExternalPolicies = 1 }

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface ConcurrentUpdateException {
	}
	export interface ConcurrentUpdateExceptionFormProperties {
	}
	export function CreateConcurrentUpdateExceptionFormGroup() {
		return new FormGroup<ConcurrentUpdateExceptionFormProperties>({
		});

	}

	export interface InternalServiceException {
	}
	export interface InternalServiceExceptionFormProperties {
	}
	export function CreateInternalServiceExceptionFormGroup() {
		return new FormGroup<InternalServiceExceptionFormProperties>({
		});

	}

	export interface DeleteScalingPlanResponse {
	}
	export interface DeleteScalingPlanResponseFormProperties {
	}
	export function CreateDeleteScalingPlanResponseFormGroup() {
		return new FormGroup<DeleteScalingPlanResponseFormProperties>({
		});

	}

	export interface DeleteScalingPlanRequest {

		/** Required */
		ScalingPlanName: string;

		/** Required */
		ScalingPlanVersion: number;
	}
	export interface DeleteScalingPlanRequestFormProperties {

		/** Required */
		ScalingPlanName: FormControl<string | null | undefined>,

		/** Required */
		ScalingPlanVersion: FormControl<number | null | undefined>,
	}
	export function CreateDeleteScalingPlanRequestFormGroup() {
		return new FormGroup<DeleteScalingPlanRequestFormProperties>({
			ScalingPlanName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalingPlanVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ObjectNotFoundException {
	}
	export interface ObjectNotFoundExceptionFormProperties {
	}
	export function CreateObjectNotFoundExceptionFormGroup() {
		return new FormGroup<ObjectNotFoundExceptionFormProperties>({
		});

	}

	export interface DescribeScalingPlanResourcesResponse {
		ScalingPlanResources?: Array<ScalingPlanResource>;
		NextToken?: string;
	}
	export interface DescribeScalingPlanResourcesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScalingPlanResourcesResponseFormGroup() {
		return new FormGroup<DescribeScalingPlanResourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a scalable resource. */
	export interface ScalingPlanResource {

		/** Required */
		ScalingPlanName: string;

		/** Required */
		ScalingPlanVersion: number;

		/** Required */
		ServiceNamespace: ServiceNamespace;

		/** Required */
		ResourceId: string;

		/** Required */
		ScalableDimension: ScalableDimension;
		ScalingPolicies?: Array<ScalingPolicy>;

		/** Required */
		ScalingStatusCode: ScalingStatusCode;
		ScalingStatusMessage?: string;
	}

	/** Represents a scalable resource. */
	export interface ScalingPlanResourceFormProperties {

		/** Required */
		ScalingPlanName: FormControl<string | null | undefined>,

		/** Required */
		ScalingPlanVersion: FormControl<number | null | undefined>,

		/** Required */
		ServiceNamespace: FormControl<ServiceNamespace | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ScalableDimension: FormControl<ScalableDimension | null | undefined>,

		/** Required */
		ScalingStatusCode: FormControl<ScalingStatusCode | null | undefined>,
		ScalingStatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateScalingPlanResourceFormGroup() {
		return new FormGroup<ScalingPlanResourceFormProperties>({
			ScalingPlanName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalingPlanVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ServiceNamespace: new FormControl<ServiceNamespace | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalableDimension: new FormControl<ScalableDimension | null | undefined>(undefined, [Validators.required]),
			ScalingStatusCode: new FormControl<ScalingStatusCode | null | undefined>(undefined, [Validators.required]),
			ScalingStatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a scaling policy. */
	export interface ScalingPolicy {

		/** Required */
		PolicyName: string;

		/** Required */
		PolicyType: PolicyType;
		TargetTrackingConfiguration?: TargetTrackingConfiguration;
	}

	/** Represents a scaling policy. */
	export interface ScalingPolicyFormProperties {

		/** Required */
		PolicyName: FormControl<string | null | undefined>,

		/** Required */
		PolicyType: FormControl<PolicyType | null | undefined>,
	}
	export function CreateScalingPolicyFormGroup() {
		return new FormGroup<ScalingPolicyFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyType: new FormControl<PolicyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PolicyType { TargetTrackingScaling = 0 }

	export enum ScalingStatusCode { Inactive = 0, PartiallyActive = 1, Active = 2 }

	export interface DescribeScalingPlanResourcesRequest {

		/** Required */
		ScalingPlanName: string;

		/** Required */
		ScalingPlanVersion: number;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeScalingPlanResourcesRequestFormProperties {

		/** Required */
		ScalingPlanName: FormControl<string | null | undefined>,

		/** Required */
		ScalingPlanVersion: FormControl<number | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScalingPlanResourcesRequestFormGroup() {
		return new FormGroup<DescribeScalingPlanResourcesRequestFormProperties>({
			ScalingPlanName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalingPlanVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface DescribeScalingPlansResponse {
		ScalingPlans?: Array<ScalingPlan>;
		NextToken?: string;
	}
	export interface DescribeScalingPlansResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScalingPlansResponseFormGroup() {
		return new FormGroup<DescribeScalingPlansResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a scaling plan. */
	export interface ScalingPlan {

		/** Required */
		ScalingPlanName: string;

		/** Required */
		ScalingPlanVersion: number;

		/** Required */
		ApplicationSource: ApplicationSource;

		/** Required */
		ScalingInstructions: Array<ScalingInstruction>;

		/** Required */
		StatusCode: ScalingPlanStatusCode;
		StatusMessage?: string;
		StatusStartTime?: Date;
		CreationTime?: Date;
	}

	/** Represents a scaling plan. */
	export interface ScalingPlanFormProperties {

		/** Required */
		ScalingPlanName: FormControl<string | null | undefined>,

		/** Required */
		ScalingPlanVersion: FormControl<number | null | undefined>,

		/** Required */
		StatusCode: FormControl<ScalingPlanStatusCode | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		StatusStartTime: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateScalingPlanFormGroup() {
		return new FormGroup<ScalingPlanFormProperties>({
			ScalingPlanName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalingPlanVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StatusCode: new FormControl<ScalingPlanStatusCode | null | undefined>(undefined, [Validators.required]),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			StatusStartTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ScalingPlanStatusCode { Active = 0, ActiveWithProblems = 1, CreationInProgress = 2, CreationFailed = 3, DeletionInProgress = 4, DeletionFailed = 5, UpdateInProgress = 6, UpdateFailed = 7 }

	export interface DescribeScalingPlansRequest {
		ScalingPlanNames?: Array<string>;
		ScalingPlanVersion?: number | null;
		ApplicationSources?: Array<ApplicationSource>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeScalingPlansRequestFormProperties {
		ScalingPlanVersion: FormControl<number | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScalingPlansRequestFormGroup() {
		return new FormGroup<DescribeScalingPlansRequestFormProperties>({
			ScalingPlanVersion: new FormControl<number | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetScalingPlanResourceForecastDataResponse {

		/** Required */
		Datapoints: Array<Datapoint>;
	}
	export interface GetScalingPlanResourceForecastDataResponseFormProperties {
	}
	export function CreateGetScalingPlanResourceForecastDataResponseFormGroup() {
		return new FormGroup<GetScalingPlanResourceForecastDataResponseFormProperties>({
		});

	}


	/** Represents a single value in the forecast data used for predictive scaling. */
	export interface Datapoint {
		Timestamp?: Date;
		Value?: number | null;
	}

	/** Represents a single value in the forecast data used for predictive scaling. */
	export interface DatapointFormProperties {
		Timestamp: FormControl<Date | null | undefined>,
		Value: FormControl<number | null | undefined>,
	}
	export function CreateDatapointFormGroup() {
		return new FormGroup<DatapointFormProperties>({
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetScalingPlanResourceForecastDataRequest {

		/** Required */
		ScalingPlanName: string;

		/** Required */
		ScalingPlanVersion: number;

		/** Required */
		ServiceNamespace: ServiceNamespace;

		/** Required */
		ResourceId: string;

		/** Required */
		ScalableDimension: ScalableDimension;

		/** Required */
		ForecastDataType: ForecastDataType;

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;
	}
	export interface GetScalingPlanResourceForecastDataRequestFormProperties {

		/** Required */
		ScalingPlanName: FormControl<string | null | undefined>,

		/** Required */
		ScalingPlanVersion: FormControl<number | null | undefined>,

		/** Required */
		ServiceNamespace: FormControl<ServiceNamespace | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ScalableDimension: FormControl<ScalableDimension | null | undefined>,

		/** Required */
		ForecastDataType: FormControl<ForecastDataType | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetScalingPlanResourceForecastDataRequestFormGroup() {
		return new FormGroup<GetScalingPlanResourceForecastDataRequestFormProperties>({
			ScalingPlanName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalingPlanVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ServiceNamespace: new FormControl<ServiceNamespace | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalableDimension: new FormControl<ScalableDimension | null | undefined>(undefined, [Validators.required]),
			ForecastDataType: new FormControl<ForecastDataType | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ForecastDataType { CapacityForecast = 0, LoadForecast = 1, ScheduledActionMinCapacity = 2, ScheduledActionMaxCapacity = 3 }

	export interface UpdateScalingPlanResponse {
	}
	export interface UpdateScalingPlanResponseFormProperties {
	}
	export function CreateUpdateScalingPlanResponseFormGroup() {
		return new FormGroup<UpdateScalingPlanResponseFormProperties>({
		});

	}

	export interface UpdateScalingPlanRequest {

		/** Required */
		ScalingPlanName: string;

		/** Required */
		ScalingPlanVersion: number;
		ApplicationSource?: ApplicationSource;
		ScalingInstructions?: Array<ScalingInstruction>;
	}
	export interface UpdateScalingPlanRequestFormProperties {

		/** Required */
		ScalingPlanName: FormControl<string | null | undefined>,

		/** Required */
		ScalingPlanVersion: FormControl<number | null | undefined>,
	}
	export function CreateUpdateScalingPlanRequestFormGroup() {
		return new FormGroup<UpdateScalingPlanRequestFormProperties>({
			ScalingPlanName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalingPlanVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a scaling plan.
		 * Post #X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan
		 * @return {CreateScalingPlanResponse} Success
		 */
		CreateScalingPlan(requestBody: CreateScalingPlanRequest): Observable<CreateScalingPlanResponse> {
			return this.http.post<CreateScalingPlanResponse>(this.baseUri + '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>
		 * Post #X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan
		 * @return {DeleteScalingPlanResponse} Success
		 */
		DeleteScalingPlan(requestBody: DeleteScalingPlanRequest): Observable<DeleteScalingPlanResponse> {
			return this.http.post<DeleteScalingPlanResponse>(this.baseUri + '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the scalable resources in the specified scaling plan.
		 * Post #X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources
		 * @return {DescribeScalingPlanResourcesResponse} Success
		 */
		DescribeScalingPlanResources(requestBody: DescribeScalingPlanResourcesRequest): Observable<DescribeScalingPlanResourcesResponse> {
			return this.http.post<DescribeScalingPlanResourcesResponse>(this.baseUri + '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes one or more of your scaling plans.
		 * Post #X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans
		 * @return {DescribeScalingPlansResponse} Success
		 */
		DescribeScalingPlans(requestBody: DescribeScalingPlansRequest): Observable<DescribeScalingPlansResponse> {
			return this.http.post<DescribeScalingPlansResponse>(this.baseUri + '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>
		 * Post #X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData
		 * @return {GetScalingPlanResourceForecastDataResponse} Success
		 */
		GetScalingPlanResourceForecastData(requestBody: GetScalingPlanResourceForecastDataRequest): Observable<GetScalingPlanResourceForecastDataResponse> {
			return this.http.post<GetScalingPlanResourceForecastDataResponse>(this.baseUri + '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>
		 * Post #X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan
		 * @return {UpdateScalingPlanResponse} Success
		 */
		UpdateScalingPlan(requestBody: UpdateScalingPlanRequest): Observable<UpdateScalingPlanResponse> {
			return this.http.post<UpdateScalingPlanResponse>(this.baseUri + '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateScalingPlanX_Amz_Target { 'AnyScaleScalingPlannerFrontendService.CreateScalingPlan' = 0 }

	export enum DeleteScalingPlanX_Amz_Target { 'AnyScaleScalingPlannerFrontendService.DeleteScalingPlan' = 0 }

	export enum DescribeScalingPlanResourcesX_Amz_Target { 'AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources' = 0 }

	export enum DescribeScalingPlansX_Amz_Target { 'AnyScaleScalingPlannerFrontendService.DescribeScalingPlans' = 0 }

	export enum GetScalingPlanResourceForecastDataX_Amz_Target { 'AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData' = 0 }

	export enum UpdateScalingPlanX_Amz_Target { 'AnyScaleScalingPlannerFrontendService.UpdateScalingPlan' = 0 }

}

