import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateScalingPlanResponse {
		ScalingPlanVersion: number;
	}

	export interface CreateScalingPlanRequest {
		ScalingPlanName: string;

		/**
		 * Represents an application source.
		 * Required
		 */
		ApplicationSource: ApplicationSource;
		ScalingInstructions: Array<ScalingInstruction>;
	}


	/** Represents an application source. */
	export interface ApplicationSource {
		CloudFormationStackARN?: string;
		TagFilters?: Array<TagFilter>;
	}


	/** Represents a tag. */
	export interface TagFilter {
		Key?: string;
		Values?: Array<string>;
	}


	/** <p>Describes a scaling instruction for a scalable resource.</p> <p>The scaling instruction is used in combination with a scaling plan, which is a set of instructions for configuring dynamic scaling and predictive scaling for the scalable resources in your application. Each scaling instruction applies to one resource.</p> <p>AWS Auto Scaling creates target tracking scaling policies based on the scaling instructions. Target tracking scaling policies adjust the capacity of your scalable resource as required to maintain resource utilization at the target value that you specified. </p> <p>AWS Auto Scaling also configures predictive scaling for your Amazon EC2 Auto Scaling groups using a subset of parameters, including the load metric, the scaling metric, the target value for the scaling metric, the predictive scaling mode (forecast and scale or forecast only), and the desired behavior when the forecast capacity exceeds the maximum capacity of the resource. With predictive scaling, AWS Auto Scaling generates forecasts with traffic predictions for the two days ahead and schedules scaling actions that proactively add and remove resource capacity to match the forecast. </p> <p>We recommend waiting a minimum of 24 hours after creating an Auto Scaling group to configure predictive scaling. At minimum, there must be 24 hours of historical data to generate a forecast.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/auto-scaling-getting-started.html">Getting Started with AWS Auto Scaling</a>.</p> */
	export interface ScalingInstruction {
		ServiceNamespace: ScalingInstructionServiceNamespace;
		ResourceId: string;
		ScalableDimension: ScalingInstructionScalableDimension;
		MinCapacity: number;
		MaxCapacity: number;
		TargetTrackingConfigurations: Array<TargetTrackingConfiguration>;

		/** Represents a predefined metric that can be used for predictive scaling. */
		PredefinedLoadMetricSpecification?: PredefinedLoadMetricSpecification;

		/** <p>Represents a CloudWatch metric of your choosing that can be used for predictive scaling. </p> <p>For predictive scaling to work with a customized load metric specification, AWS Auto Scaling needs access to the <code>Sum</code> and <code>Average</code> statistics that CloudWatch computes from metric data. Statistics are calculations used to aggregate data over specified time periods.</p> <p>When you choose a load metric, make sure that the required <code>Sum</code> and <code>Average</code> statistics for your metric are available in CloudWatch and that they provide relevant data for predictive scaling. The <code>Sum</code> statistic must represent the total load on the resource, and the <code>Average</code> statistic must represent the average load per capacity unit of the resource. For example, there is a metric that counts the number of requests processed by your Auto Scaling group. If the <code>Sum</code> statistic represents the total request count processed by the group, then the <code>Average</code> statistic for the specified metric must represent the average request count processed by each instance of the group.</p> <p>For information about terminology, available metrics, or how to publish new metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p> */
		CustomizedLoadMetricSpecification?: CustomizedLoadMetricSpecification;
		ScheduledActionBufferTime?: number;
		PredictiveScalingMaxCapacityBehavior?: ScalingInstructionPredictiveScalingMaxCapacityBehavior;
		PredictiveScalingMaxCapacityBuffer?: number;
		PredictiveScalingMode?: ScalingInstructionPredictiveScalingMode;
		ScalingPolicyUpdateBehavior?: ScalingInstructionScalingPolicyUpdateBehavior;
		DisableDynamicScaling?: boolean;
	}

	export enum ScalingInstructionServiceNamespace { autoscaling = 0, ecs = 1, ec2 = 2, rds = 3, dynamodb = 4 }

	export enum ScalingInstructionScalableDimension { autoscalingautoScalingGroupDesiredCapacity = 0, ecsserviceDesiredCount = 1, ec2spot_fleet_requestTargetCapacity = 2, rdsclusterReadReplicaCount = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7 }


	/** Describes a target tracking configuration to use with AWS Auto Scaling. Used with <a>ScalingInstruction</a> and <a>ScalingPolicy</a>. */
	export interface TargetTrackingConfiguration {

		/** Represents a predefined metric that can be used for dynamic scaling as part of a target tracking scaling policy. */
		PredefinedScalingMetricSpecification?: PredefinedScalingMetricSpecification;

		/** <p>Represents a CloudWatch metric of your choosing that can be used for dynamic scaling as part of a target tracking scaling policy. </p> <p>To create your customized scaling metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases. </p> </li> </ul> <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a>. </p> */
		CustomizedScalingMetricSpecification?: CustomizedScalingMetricSpecification;
		TargetValue: number;
		DisableScaleIn?: boolean;
		ScaleOutCooldown?: number;
		ScaleInCooldown?: number;
		EstimatedInstanceWarmup?: number;
	}


	/** Represents a predefined metric that can be used for dynamic scaling as part of a target tracking scaling policy. */
	export interface PredefinedScalingMetricSpecification {
		PredefinedScalingMetricType: PredefinedScalingMetricSpecificationPredefinedScalingMetricType;
		ResourceLabel?: string;
	}

	export enum PredefinedScalingMetricSpecificationPredefinedScalingMetricType { ASGAverageCPUUtilization = 0, ASGAverageNetworkIn = 1, ASGAverageNetworkOut = 2, DynamoDBReadCapacityUtilization = 3, DynamoDBWriteCapacityUtilization = 4, ECSServiceAverageCPUUtilization = 5, ECSServiceAverageMemoryUtilization = 6, ALBRequestCountPerTarget = 7, RDSReaderAverageCPUUtilization = 8, RDSReaderAverageDatabaseConnections = 9, EC2SpotFleetRequestAverageCPUUtilization = 10, EC2SpotFleetRequestAverageNetworkIn = 11, EC2SpotFleetRequestAverageNetworkOut = 12 }


	/** <p>Represents a CloudWatch metric of your choosing that can be used for dynamic scaling as part of a target tracking scaling policy. </p> <p>To create your customized scaling metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases. </p> </li> </ul> <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a>. </p> */
	export interface CustomizedScalingMetricSpecification {
		MetricName: string;
		Namespace: string;
		Dimensions?: Array<MetricDimension>;
		Statistic: CustomizedScalingMetricSpecificationStatistic;
		Unit?: string;
	}


	/** Represents a dimension for a customized metric. */
	export interface MetricDimension {
		Name: string;
		Value: string;
	}

	export enum CustomizedScalingMetricSpecificationStatistic { Average = 0, Minimum = 1, Maximum = 2, SampleCount = 3, Sum = 4 }


	/** Represents a predefined metric that can be used for predictive scaling.  */
	export interface PredefinedLoadMetricSpecification {
		PredefinedLoadMetricType: PredefinedLoadMetricSpecificationPredefinedLoadMetricType;
		ResourceLabel?: string;
	}

	export enum PredefinedLoadMetricSpecificationPredefinedLoadMetricType { ASGTotalCPUUtilization = 0, ASGTotalNetworkIn = 1, ASGTotalNetworkOut = 2, ALBTargetGroupRequestCount = 3 }


	/** <p>Represents a CloudWatch metric of your choosing that can be used for predictive scaling. </p> <p>For predictive scaling to work with a customized load metric specification, AWS Auto Scaling needs access to the <code>Sum</code> and <code>Average</code> statistics that CloudWatch computes from metric data. Statistics are calculations used to aggregate data over specified time periods.</p> <p>When you choose a load metric, make sure that the required <code>Sum</code> and <code>Average</code> statistics for your metric are available in CloudWatch and that they provide relevant data for predictive scaling. The <code>Sum</code> statistic must represent the total load on the resource, and the <code>Average</code> statistic must represent the average load per capacity unit of the resource. For example, there is a metric that counts the number of requests processed by your Auto Scaling group. If the <code>Sum</code> statistic represents the total request count processed by the group, then the <code>Average</code> statistic for the specified metric must represent the average request count processed by each instance of the group.</p> <p>For information about terminology, available metrics, or how to publish new metrics, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p> */
	export interface CustomizedLoadMetricSpecification {
		MetricName: string;
		Namespace: string;
		Dimensions?: Array<MetricDimension>;
		Statistic: CustomizedScalingMetricSpecificationStatistic;
		Unit?: string;
	}

	export enum ScalingInstructionPredictiveScalingMaxCapacityBehavior { SetForecastCapacityToMaxCapacity = 0, SetMaxCapacityToForecastCapacity = 1, SetMaxCapacityAboveForecastCapacity = 2 }

	export enum ScalingInstructionPredictiveScalingMode { ForecastAndScale = 0, ForecastOnly = 1 }

	export enum ScalingInstructionScalingPolicyUpdateBehavior { KeepExternalPolicies = 0, ReplaceExternalPolicies = 1 }

	export interface ValidationException {
	}

	export interface LimitExceededException {
	}

	export interface ConcurrentUpdateException {
	}

	export interface InternalServiceException {
	}

	export interface DeleteScalingPlanResponse {
	}

	export interface DeleteScalingPlanRequest {
		ScalingPlanName: string;
		ScalingPlanVersion: number;
	}

	export interface ObjectNotFoundException {
	}

	export interface DescribeScalingPlanResourcesResponse {
		ScalingPlanResources?: Array<ScalingPlanResource>;
		NextToken?: string;
	}


	/** Represents a scalable resource. */
	export interface ScalingPlanResource {
		ScalingPlanName: string;
		ScalingPlanVersion: number;
		ServiceNamespace: ScalingInstructionServiceNamespace;
		ResourceId: string;
		ScalableDimension: ScalingPlanResourceScalableDimension;
		ScalingPolicies?: Array<ScalingPolicy>;
		ScalingStatusCode: ScalingPlanResourceScalingStatusCode;
		ScalingStatusMessage?: string;
	}

	export enum ScalingPlanResourceScalableDimension { autoscalingautoScalingGroupDesiredCapacity = 0, ecsserviceDesiredCount = 1, ec2spot_fleet_requestTargetCapacity = 2, rdsclusterReadReplicaCount = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7 }


	/** Represents a scaling policy. */
	export interface ScalingPolicy {
		PolicyName: string;
		PolicyType: ScalingPolicyPolicyType;

		/** Describes a target tracking configuration to use with AWS Auto Scaling. Used with <a>ScalingInstruction</a> and <a>ScalingPolicy</a>. */
		TargetTrackingConfiguration?: TargetTrackingConfiguration;
	}

	export enum ScalingPolicyPolicyType { TargetTrackingScaling = 0 }

	export enum ScalingPlanResourceScalingStatusCode { Inactive = 0, PartiallyActive = 1, Active = 2 }

	export interface DescribeScalingPlanResourcesRequest {
		ScalingPlanName: string;
		ScalingPlanVersion: number;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface InvalidNextTokenException {
	}

	export interface DescribeScalingPlansResponse {
		ScalingPlans?: Array<ScalingPlan>;
		NextToken?: string;
	}


	/** Represents a scaling plan. */
	export interface ScalingPlan {
		ScalingPlanName: string;
		ScalingPlanVersion: number;

		/**
		 * Represents an application source.
		 * Required
		 */
		ApplicationSource: ApplicationSource;
		ScalingInstructions: Array<ScalingInstruction>;
		StatusCode: ScalingPlanStatusCode;
		StatusMessage?: string;
		StatusStartTime?: Date;
		CreationTime?: Date;
	}

	export enum ScalingPlanStatusCode { Active = 0, ActiveWithProblems = 1, CreationInProgress = 2, CreationFailed = 3, DeletionInProgress = 4, DeletionFailed = 5, UpdateInProgress = 6, UpdateFailed = 7 }

	export interface DescribeScalingPlansRequest {
		ScalingPlanNames?: Array<string>;
		ScalingPlanVersion?: number;
		ApplicationSources?: Array<ApplicationSource>;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface GetScalingPlanResourceForecastDataResponse {
		Datapoints: Array<Datapoint>;
	}


	/** Represents a single value in the forecast data used for predictive scaling. */
	export interface Datapoint {
		Timestamp?: Date;
		Value?: number;
	}

	export interface GetScalingPlanResourceForecastDataRequest {
		ScalingPlanName: string;
		ScalingPlanVersion: number;
		ServiceNamespace: ScalingInstructionServiceNamespace;
		ResourceId: string;
		ScalableDimension: GetScalingPlanResourceForecastDataRequestScalableDimension;
		ForecastDataType: GetScalingPlanResourceForecastDataRequestForecastDataType;
		StartTime: Date;
		EndTime: Date;
	}

	export enum GetScalingPlanResourceForecastDataRequestScalableDimension { autoscalingautoScalingGroupDesiredCapacity = 0, ecsserviceDesiredCount = 1, ec2spot_fleet_requestTargetCapacity = 2, rdsclusterReadReplicaCount = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7 }

	export enum GetScalingPlanResourceForecastDataRequestForecastDataType { CapacityForecast = 0, LoadForecast = 1, ScheduledActionMinCapacity = 2, ScheduledActionMaxCapacity = 3 }

	export interface UpdateScalingPlanResponse {
	}

	export interface UpdateScalingPlanRequest {
		ScalingPlanName: string;
		ScalingPlanVersion: number;

		/** Represents an application source. */
		ApplicationSource?: ApplicationSource;
		ScalingInstructions?: Array<ScalingInstruction>;
	}

	export enum MetricStatistic { Average = 0, Minimum = 1, Maximum = 2, SampleCount = 3, Sum = 4 }

	export enum ForecastDataType { CapacityForecast = 0, LoadForecast = 1, ScheduledActionMinCapacity = 2, ScheduledActionMaxCapacity = 3 }

	export enum ServiceNamespace { autoscaling = 0, ecs = 1, ec2 = 2, rds = 3, dynamodb = 4 }

	export enum ScalableDimension { autoscalingautoScalingGroupDesiredCapacity = 0, ecsserviceDesiredCount = 1, ec2spot_fleet_requestTargetCapacity = 2, rdsclusterReadReplicaCount = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7 }

	export enum LoadMetricType { ASGTotalCPUUtilization = 0, ASGTotalNetworkIn = 1, ASGTotalNetworkOut = 2, ALBTargetGroupRequestCount = 3 }

	export enum PolicyType { TargetTrackingScaling = 0 }

	export enum ScalingMetricType { ASGAverageCPUUtilization = 0, ASGAverageNetworkIn = 1, ASGAverageNetworkOut = 2, DynamoDBReadCapacityUtilization = 3, DynamoDBWriteCapacityUtilization = 4, ECSServiceAverageCPUUtilization = 5, ECSServiceAverageMemoryUtilization = 6, ALBRequestCountPerTarget = 7, RDSReaderAverageCPUUtilization = 8, RDSReaderAverageDatabaseConnections = 9, EC2SpotFleetRequestAverageCPUUtilization = 10, EC2SpotFleetRequestAverageNetworkIn = 11, EC2SpotFleetRequestAverageNetworkOut = 12 }

	export enum PredictiveScalingMaxCapacityBehavior { SetForecastCapacityToMaxCapacity = 0, SetMaxCapacityToForecastCapacity = 1, SetMaxCapacityAboveForecastCapacity = 2 }

	export enum PredictiveScalingMode { ForecastAndScale = 0, ForecastOnly = 1 }

	export enum ScalingPolicyUpdateBehavior { KeepExternalPolicies = 0, ReplaceExternalPolicies = 1 }

	export enum ScalingStatusCode { Inactive = 0, PartiallyActive = 1, Active = 2 }

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

	export enum CreateScalingPlanX_Amz_Target { AnyScaleScalingPlannerFrontendService_CreateScalingPlan = 0 }

	export enum DeleteScalingPlanX_Amz_Target { AnyScaleScalingPlannerFrontendService_DeleteScalingPlan = 0 }

	export enum DescribeScalingPlanResourcesX_Amz_Target { AnyScaleScalingPlannerFrontendService_DescribeScalingPlanResources = 0 }

	export enum DescribeScalingPlansX_Amz_Target { AnyScaleScalingPlannerFrontendService_DescribeScalingPlans = 0 }

	export enum GetScalingPlanResourceForecastDataX_Amz_Target { AnyScaleScalingPlannerFrontendService_GetScalingPlanResourceForecastData = 0 }

	export enum UpdateScalingPlanX_Amz_Target { AnyScaleScalingPlannerFrontendService_UpdateScalingPlan = 0 }

}

