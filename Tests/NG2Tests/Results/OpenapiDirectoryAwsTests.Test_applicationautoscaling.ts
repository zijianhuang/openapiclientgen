import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface DeleteScalingPolicyResponse {
	}

	export interface DeleteScalingPolicyRequest {
		PolicyName: string;
		ServiceNamespace: DeleteScalingPolicyRequestServiceNamespace;
		ResourceId: string;
		ScalableDimension: DeleteScalingPolicyRequestScalableDimension;
	}

	export enum DeleteScalingPolicyRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DeleteScalingPolicyRequestScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export interface ValidationException {
	}

	export interface ObjectNotFoundException {
	}

	export interface ConcurrentUpdateException {
	}

	export interface InternalServiceException {
	}

	export interface DeleteScheduledActionResponse {
	}

	export interface DeleteScheduledActionRequest {
		ServiceNamespace: DeleteScheduledActionRequestServiceNamespace;
		ScheduledActionName: string;
		ResourceId: string;
		ScalableDimension: DeleteScheduledActionRequestScalableDimension;
	}

	export enum DeleteScheduledActionRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DeleteScheduledActionRequestScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export interface DeregisterScalableTargetResponse {
	}

	export interface DeregisterScalableTargetRequest {
		ServiceNamespace: DeregisterScalableTargetRequestServiceNamespace;
		ResourceId: string;
		ScalableDimension: DeregisterScalableTargetRequestScalableDimension;
	}

	export enum DeregisterScalableTargetRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DeregisterScalableTargetRequestScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export interface DescribeScalableTargetsResponse {
		ScalableTargets?: Array<ScalableTarget> | null;
		NextToken?: string | null;
	}


	/** Represents a scalable target. */
	export interface ScalableTarget {
		ServiceNamespace: ScalableTargetServiceNamespace;
		ResourceId: string;
		ScalableDimension: ScalableTargetScalableDimension;
		MinCapacity: number;
		MaxCapacity: number;
		RoleARN: string;
		CreationTime: Date;

		/** Specifies whether the scaling activities for a scalable target are in a suspended state. */
		SuspendedState?: SuspendedState | null;
	}

	export enum ScalableTargetServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum ScalableTargetScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }


	/** Specifies whether the scaling activities for a scalable target are in a suspended state.  */
	export interface SuspendedState {
		DynamicScalingInSuspended?: boolean | null;
		DynamicScalingOutSuspended?: boolean | null;
		ScheduledScalingSuspended?: boolean | null;
	}

	export interface DescribeScalableTargetsRequest {
		ServiceNamespace: DescribeScalableTargetsRequestServiceNamespace;
		ResourceIds?: Array<string> | null;
		ScalableDimension?: DescribeScalableTargetsRequestScalableDimension | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export enum DescribeScalableTargetsRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DescribeScalableTargetsRequestScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export interface InvalidNextTokenException {
	}

	export interface DescribeScalingActivitiesResponse {
		ScalingActivities?: Array<ScalingActivity> | null;
		NextToken?: string | null;
	}


	/** Represents a scaling activity. */
	export interface ScalingActivity {
		ActivityId: string;
		ServiceNamespace: ScalingActivityServiceNamespace;
		ResourceId: string;
		ScalableDimension: ScalingActivityScalableDimension;
		Description: string;
		Cause: string;
		StartTime: Date;
		EndTime?: Date | null;
		StatusCode: ScalingActivityStatusCode;
		StatusMessage?: string | null;
		Details?: string | null;
	}

	export enum ScalingActivityServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum ScalingActivityScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export enum ScalingActivityStatusCode { Pending = 0, InProgress = 1, Successful = 2, Overridden = 3, Unfulfilled = 4, Failed = 5 }

	export interface DescribeScalingActivitiesRequest {
		ServiceNamespace: DescribeScalingActivitiesRequestServiceNamespace;
		ResourceId?: string | null;
		ScalableDimension?: DescribeScalingActivitiesRequestScalableDimension | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export enum DescribeScalingActivitiesRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DescribeScalingActivitiesRequestScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export interface DescribeScalingPoliciesResponse {
		ScalingPolicies?: Array<ScalingPolicy> | null;
		NextToken?: string | null;
	}


	/** Represents a scaling policy to use with Application Auto Scaling. */
	export interface ScalingPolicy {
		PolicyARN: string;
		PolicyName: string;
		ServiceNamespace: ScalingPolicyServiceNamespace;
		ResourceId: string;
		ScalableDimension: ScalingPolicyScalableDimension;
		PolicyType: ScalingPolicyPolicyType;

		/** Represents a step scaling policy configuration to use with Application Auto Scaling. */
		StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration | null;

		/** Represents a target tracking scaling policy configuration to use with Application Auto Scaling. */
		TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration | null;
		Alarms?: Array<Alarm> | null;
		CreationTime: Date;
	}

	export enum ScalingPolicyServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum ScalingPolicyScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export enum ScalingPolicyPolicyType { StepScaling = 0, TargetTrackingScaling = 1 }


	/** Represents a step scaling policy configuration to use with Application Auto Scaling. */
	export interface StepScalingPolicyConfiguration {
		AdjustmentType?: StepScalingPolicyConfigurationAdjustmentType | null;
		StepAdjustments?: Array<StepAdjustment> | null;
		MinAdjustmentMagnitude?: number | null;
		Cooldown?: number | null;
		MetricAggregationType?: StepScalingPolicyConfigurationMetricAggregationType | null;
	}

	export enum StepScalingPolicyConfigurationAdjustmentType { ChangeInCapacity = 0, PercentChangeInCapacity = 1, ExactCapacity = 2 }


	/** <p>Represents a step adjustment for a <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_StepScalingPolicyConfiguration.html">StepScalingPolicyConfiguration</a>. Describes an adjustment based on the difference between the value of the aggregated CloudWatch metric and the breach threshold that you've defined for the alarm. </p> <p>For the following examples, suppose that you have an alarm with a breach threshold of 50:</p> <ul> <li> <p>To trigger the adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of 0 and an upper bound of 10.</p> </li> <li> <p>To trigger the adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of -10 and an upper bound of 0.</p> </li> </ul> <p>There are a few rules for the step adjustments for your step policy:</p> <ul> <li> <p>The ranges of your step adjustments can't overlap or have a gap.</p> </li> <li> <p>At most one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.</p> </li> <li> <p>At most one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.</p> </li> <li> <p>The upper and lower bound can't be null in the same step adjustment.</p> </li> </ul> */
	export interface StepAdjustment {
		MetricIntervalLowerBound?: number | null;
		MetricIntervalUpperBound?: number | null;
		ScalingAdjustment: number;
	}

	export enum StepScalingPolicyConfigurationMetricAggregationType { Average = 0, Minimum = 1, Maximum = 2 }


	/** Represents a target tracking scaling policy configuration to use with Application Auto Scaling. */
	export interface TargetTrackingScalingPolicyConfiguration {
		TargetValue: number;

		/** <p>Represents a predefined metric for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>Only the AWS services that you're using send metrics to Amazon CloudWatch. To determine whether a desired metric already exists by looking up its namespace and dimension using the CloudWatch metrics dashboard in the console, follow the procedure in <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html">Building Dashboards with CloudWatch</a> in the <i>Application Auto Scaling User Guide</i>.</p> */
		PredefinedMetricSpecification?: PredefinedMetricSpecification | null;

		/** <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>For information about the available metrics for a service, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">AWS Services That Publish CloudWatch Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases, and increase when capacity decreases. </p> </li> </ul> <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a>. </p> */
		CustomizedMetricSpecification?: CustomizedMetricSpecification | null;
		ScaleOutCooldown?: number | null;
		ScaleInCooldown?: number | null;
		DisableScaleIn?: boolean | null;
	}


	/** <p>Represents a predefined metric for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>Only the AWS services that you're using send metrics to Amazon CloudWatch. To determine whether a desired metric already exists by looking up its namespace and dimension using the CloudWatch metrics dashboard in the console, follow the procedure in <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html">Building Dashboards with CloudWatch</a> in the <i>Application Auto Scaling User Guide</i>.</p> */
	export interface PredefinedMetricSpecification {
		PredefinedMetricType: PredefinedMetricSpecificationPredefinedMetricType;
		ResourceLabel?: string | null;
	}

	export enum PredefinedMetricSpecificationPredefinedMetricType { DynamoDBReadCapacityUtilization = 0, DynamoDBWriteCapacityUtilization = 1, ALBRequestCountPerTarget = 2, RDSReaderAverageCPUUtilization = 3, RDSReaderAverageDatabaseConnections = 4, EC2SpotFleetRequestAverageCPUUtilization = 5, EC2SpotFleetRequestAverageNetworkIn = 6, EC2SpotFleetRequestAverageNetworkOut = 7, SageMakerVariantInvocationsPerInstance = 8, ECSServiceAverageCPUUtilization = 9, ECSServiceAverageMemoryUtilization = 10, AppStreamAverageCapacityUtilization = 11, ComprehendInferenceUtilization = 12, LambdaProvisionedConcurrencyUtilization = 13, CassandraReadCapacityUtilization = 14, CassandraWriteCapacityUtilization = 15 }


	/** <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>For information about the available metrics for a service, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">AWS Services That Publish CloudWatch Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases, and increase when capacity decreases. </p> </li> </ul> <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a>. </p> */
	export interface CustomizedMetricSpecification {
		MetricName: string;
		Namespace: string;
		Dimensions?: Array<MetricDimension> | null;
		Statistic: CustomizedMetricSpecificationStatistic;
		Unit?: string | null;
	}


	/** Describes the dimension names and values associated with a metric. */
	export interface MetricDimension {
		Name: string;
		Value: string;
	}

	export enum CustomizedMetricSpecificationStatistic { Average = 0, Minimum = 1, Maximum = 2, SampleCount = 3, Sum = 4 }


	/** Represents a CloudWatch alarm associated with a scaling policy. */
	export interface Alarm {
		AlarmName: string;
		AlarmARN: string;
	}

	export interface DescribeScalingPoliciesRequest {
		PolicyNames?: Array<string> | null;
		ServiceNamespace: DescribeScalingPoliciesRequestServiceNamespace;
		ResourceId?: string | null;
		ScalableDimension?: DescribeScalingPoliciesRequestScalableDimension | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export enum DescribeScalingPoliciesRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DescribeScalingPoliciesRequestScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export interface FailedResourceAccessException {
	}

	export interface DescribeScheduledActionsResponse {
		ScheduledActions?: Array<ScheduledAction> | null;
		NextToken?: string | null;
	}


	/** Represents a scheduled action. */
	export interface ScheduledAction {
		ScheduledActionName: string;
		ScheduledActionARN: string;
		ServiceNamespace: ScheduledActionServiceNamespace;
		Schedule: string;
		ResourceId: string;
		ScalableDimension?: ScheduledActionScalableDimension | null;
		StartTime?: Date | null;
		EndTime?: Date | null;

		/** Represents the minimum and maximum capacity for a scheduled action. */
		ScalableTargetAction?: ScalableTargetAction | null;
		CreationTime: Date;
	}

	export enum ScheduledActionServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum ScheduledActionScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }


	/** Represents the minimum and maximum capacity for a scheduled action. */
	export interface ScalableTargetAction {
		MinCapacity?: number | null;
		MaxCapacity?: number | null;
	}

	export interface DescribeScheduledActionsRequest {
		ScheduledActionNames?: Array<string> | null;
		ServiceNamespace: DescribeScheduledActionsRequestServiceNamespace;
		ResourceId?: string | null;
		ScalableDimension?: DescribeScheduledActionsRequestScalableDimension | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export enum DescribeScheduledActionsRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DescribeScheduledActionsRequestScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export interface PutScalingPolicyResponse {
		PolicyARN: string;
		Alarms?: Array<Alarm> | null;
	}

	export interface PutScalingPolicyRequest {
		PolicyName: string;
		ServiceNamespace: PutScalingPolicyRequestServiceNamespace;
		ResourceId: string;
		ScalableDimension: PutScalingPolicyRequestScalableDimension;
		PolicyType?: ScalingPolicyPolicyType | null;

		/** Represents a step scaling policy configuration to use with Application Auto Scaling. */
		StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration | null;

		/** Represents a target tracking scaling policy configuration to use with Application Auto Scaling. */
		TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration | null;
	}

	export enum PutScalingPolicyRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum PutScalingPolicyRequestScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export interface LimitExceededException {
	}

	export interface PutScheduledActionResponse {
	}

	export interface PutScheduledActionRequest {
		ServiceNamespace: PutScheduledActionRequestServiceNamespace;
		Schedule?: string | null;
		ScheduledActionName: string;
		ResourceId: string;
		ScalableDimension: PutScheduledActionRequestScalableDimension;
		StartTime?: Date | null;
		EndTime?: Date | null;

		/** Represents the minimum and maximum capacity for a scheduled action. */
		ScalableTargetAction?: ScalableTargetAction | null;
	}

	export enum PutScheduledActionRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum PutScheduledActionRequestScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export interface RegisterScalableTargetResponse {
	}

	export interface RegisterScalableTargetRequest {
		ServiceNamespace: RegisterScalableTargetRequestServiceNamespace;
		ResourceId: string;
		ScalableDimension: RegisterScalableTargetRequestScalableDimension;
		MinCapacity?: number | null;
		MaxCapacity?: number | null;
		RoleARN?: string | null;

		/** Specifies whether the scaling activities for a scalable target are in a suspended state. */
		SuspendedState?: SuspendedState | null;
	}

	export enum RegisterScalableTargetRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum RegisterScalableTargetRequestScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export enum AdjustmentType { ChangeInCapacity = 0, PercentChangeInCapacity = 1, ExactCapacity = 2 }

	export enum MetricStatistic { Average = 0, Minimum = 1, Maximum = 2, SampleCount = 3, Sum = 4 }

	export enum ServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum ScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export enum MetricAggregationType { Average = 0, Minimum = 1, Maximum = 2 }

	export enum MetricType { DynamoDBReadCapacityUtilization = 0, DynamoDBWriteCapacityUtilization = 1, ALBRequestCountPerTarget = 2, RDSReaderAverageCPUUtilization = 3, RDSReaderAverageDatabaseConnections = 4, EC2SpotFleetRequestAverageCPUUtilization = 5, EC2SpotFleetRequestAverageNetworkIn = 6, EC2SpotFleetRequestAverageNetworkOut = 7, SageMakerVariantInvocationsPerInstance = 8, ECSServiceAverageCPUUtilization = 9, ECSServiceAverageMemoryUtilization = 10, AppStreamAverageCapacityUtilization = 11, ComprehendInferenceUtilization = 12, LambdaProvisionedConcurrencyUtilization = 13, CassandraReadCapacityUtilization = 14, CassandraWriteCapacityUtilization = 15 }

	export enum PolicyType { StepScaling = 0, TargetTrackingScaling = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Deletes the specified scaling policy for an Application Auto Scaling scalable target.</p> <p>Deleting a step scaling policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html#delete-step-scaling-policy">Delete a Step Scaling Policy</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html#delete-target-tracking-policy">Delete a Target Tracking Scaling Policy</a> in the <i>Application Auto Scaling User Guide</i>.</p>
		 * Post #X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy
		 * @return {DeleteScalingPolicyResponse} Success
		 */
		DeleteScalingPolicy(requestBody: DeleteScalingPolicyRequest): Observable<DeleteScalingPolicyResponse> {
			return this.http.post<DeleteScalingPolicyResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified scheduled action for an Application Auto Scaling scalable target.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html#delete-scheduled-action">Delete a Scheduled Action</a> in the <i>Application Auto Scaling User Guide</i>.</p>
		 * Post #X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction
		 * @return {DeleteScheduledActionResponse} Success
		 */
		DeleteScheduledAction(requestBody: DeleteScheduledActionRequest): Observable<DeleteScheduledActionResponse> {
			return this.http.post<DeleteScheduledActionResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deregisters an Application Auto Scaling scalable target when you have finished using it. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. </p> <note> <p>Deregistering a scalable target deletes the scaling policies and the scheduled actions that are associated with it.</p> </note>
		 * Post #X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget
		 * @return {DeregisterScalableTargetResponse} Success
		 */
		DeregisterScalableTarget(requestBody: DeregisterScalableTargetRequest): Observable<DeregisterScalableTargetResponse> {
			return this.http.post<DeregisterScalableTargetResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information about the scalable targets in the specified namespace.</p> <p>You can filter the results using <code>ResourceIds</code> and <code>ScalableDimension</code>.</p>
		 * Post #X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeScalableTargetsResponse} Success
		 */
		DescribeScalableTargets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeScalableTargetsRequest): Observable<DescribeScalableTargetsResponse> {
			return this.http.post<DescribeScalableTargetsResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides descriptive information about the scaling activities in the specified namespace from the previous six weeks.</p> <p>You can filter the results using <code>ResourceId</code> and <code>ScalableDimension</code>.</p>
		 * Post #X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeScalingActivitiesResponse} Success
		 */
		DescribeScalingActivities(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeScalingActivitiesRequest): Observable<DescribeScalingActivitiesResponse> {
			return this.http.post<DescribeScalingActivitiesResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the Application Auto Scaling scaling policies for the specified service namespace.</p> <p>You can filter the results using <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>PolicyNames</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target Tracking Scaling Policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step Scaling Policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>
		 * Post #X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeScalingPoliciesResponse} Success
		 */
		DescribeScalingPolicies(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeScalingPoliciesRequest): Observable<DescribeScalingPoliciesResponse> {
			return this.http.post<DescribeScalingPoliciesResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the Application Auto Scaling scheduled actions for the specified service namespace.</p> <p>You can filter the results using the <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>ScheduledActionNames</code> parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
		 * Post #X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeScheduledActionsResponse} Success
		 */
		DescribeScheduledActions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeScheduledActionsRequest): Observable<DescribeScheduledActionsResponse> {
			return this.http.post<DescribeScheduledActionsResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates a scaling policy for an Application Auto Scaling scalable target.</p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scaling policy applies to the scalable target identified by those three attributes. You cannot create a scaling policy until you have registered the resource as a scalable target.</p> <p>Multiple scaling policies can be in force at the same time for the same scalable target. You can have one or more target tracking scaling policies, one or more step scaling policies, or both. However, there is a chance that multiple policies could conflict, instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives precedence to the policy that provides the largest capacity for both scale out and scale in. For example, if one policy increases capacity by 3, another policy increases capacity by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest calculated capacity (200% of 10 = 20) and scales out to 30. </p> <p>We recommend caution, however, when using target tracking scaling policies with step scaling policies because conflicts between these policies can cause undesirable behavior. For example, if the step scaling policy initiates a scale-in activity before the target tracking policy is ready to scale in, the scale-in activity will not be blocked. After the scale-in activity completes, the target tracking policy could instruct the scalable target to scale out again. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target Tracking Scaling Policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step Scaling Policies</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to execute scaling policies. Any scaling policies that were specified for the scalable target are deleted.</p> </note>
		 * Post #X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy
		 * @return {PutScalingPolicyResponse} Success
		 */
		PutScalingPolicy(requestBody: PutScalingPolicyRequest): Observable<PutScalingPolicyResponse> {
			return this.http.post<PutScalingPolicyResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates a scheduled action for an Application Auto Scaling scalable target.</p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scheduled action applies to the scalable target identified by those three attributes. You cannot create a scheduled action until you have registered the resource as a scalable target.</p> <p>When start and end times are specified with a recurring schedule using a cron expression or rates, they form the boundaries of when the recurring action starts and stops.</p> <p>To update a scheduled action, specify the parameters that you want to change. If you don't specify start and end times, the old values are deleted.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to run scheduled actions. Any scheduled actions that were specified for the scalable target are deleted.</p> </note>
		 * Post #X-Amz-Target=AnyScaleFrontendService.PutScheduledAction
		 * @return {PutScheduledActionResponse} Success
		 */
		PutScheduledAction(requestBody: PutScheduledActionRequest): Observable<PutScheduledActionResponse> {
			return this.http.post<PutScheduledActionResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers or updates a scalable target. </p> <p>A scalable target is a resource that Application Auto Scaling can scale out and scale in. Scalable targets are uniquely identified by the combination of resource ID, scalable dimension, and namespace. </p> <p>When you register a new scalable target, you must specify values for minimum and maximum capacity. Application Auto Scaling scaling policies will not scale capacity to values that are outside of this range.</p> <p>After you register a scalable target, you do not need to register it again to use other Application Auto Scaling operations. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. You can also view the scaling policies for a service namespace by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. If you no longer need a scalable target, you can deregister it by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html">DeregisterScalableTarget</a>.</p> <p>To update a scalable target, specify the parameters that you want to change. Include the parameters that identify the scalable target: resource ID, scalable dimension, and namespace. Any parameters that you don't specify are not changed by this update request. </p>
		 * Post #X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget
		 * @return {RegisterScalableTargetResponse} Success
		 */
		RegisterScalableTarget(requestBody: RegisterScalableTargetRequest): Observable<RegisterScalableTargetResponse> {
			return this.http.post<RegisterScalableTargetResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum DeleteScalingPolicyX_Amz_Target { AnyScaleFrontendService_DeleteScalingPolicy = 0 }

	export enum DeleteScheduledActionX_Amz_Target { AnyScaleFrontendService_DeleteScheduledAction = 0 }

	export enum DeregisterScalableTargetX_Amz_Target { AnyScaleFrontendService_DeregisterScalableTarget = 0 }

	export enum DescribeScalableTargetsX_Amz_Target { AnyScaleFrontendService_DescribeScalableTargets = 0 }

	export enum DescribeScalingActivitiesX_Amz_Target { AnyScaleFrontendService_DescribeScalingActivities = 0 }

	export enum DescribeScalingPoliciesX_Amz_Target { AnyScaleFrontendService_DescribeScalingPolicies = 0 }

	export enum DescribeScheduledActionsX_Amz_Target { AnyScaleFrontendService_DescribeScheduledActions = 0 }

	export enum PutScalingPolicyX_Amz_Target { AnyScaleFrontendService_PutScalingPolicy = 0 }

	export enum PutScheduledActionX_Amz_Target { AnyScaleFrontendService_PutScheduledAction = 0 }

	export enum RegisterScalableTargetX_Amz_Target { AnyScaleFrontendService_RegisterScalableTarget = 0 }

}

