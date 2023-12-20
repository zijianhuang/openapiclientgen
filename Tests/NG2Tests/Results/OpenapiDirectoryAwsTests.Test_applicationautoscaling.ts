import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DeleteScalingPolicyResponse {
	}
	export interface DeleteScalingPolicyResponseFormProperties {
	}
	export function CreateDeleteScalingPolicyResponseFormGroup() {
		return new FormGroup<DeleteScalingPolicyResponseFormProperties>({
		});

	}

	export interface DeleteScalingPolicyRequest {
		PolicyName: string;
		ServiceNamespace: DeleteScalingPolicyRequestServiceNamespace;
		ResourceId: string;
		ScalableDimension: DeleteScalingPolicyRequestScalableDimension;
	}
	export interface DeleteScalingPolicyRequestFormProperties {
		PolicyName: FormControl<string | null | undefined>,
		ServiceNamespace: FormControl<DeleteScalingPolicyRequestServiceNamespace | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ScalableDimension: FormControl<DeleteScalingPolicyRequestScalableDimension | null | undefined>,
	}
	export function CreateDeleteScalingPolicyRequestFormGroup() {
		return new FormGroup<DeleteScalingPolicyRequestFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined),
			ServiceNamespace: new FormControl<DeleteScalingPolicyRequestServiceNamespace | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ScalableDimension: new FormControl<DeleteScalingPolicyRequestScalableDimension | null | undefined>(undefined),
		});

	}

	export enum DeleteScalingPolicyRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DeleteScalingPolicyRequestScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface DeleteScheduledActionResponse {
	}
	export interface DeleteScheduledActionResponseFormProperties {
	}
	export function CreateDeleteScheduledActionResponseFormGroup() {
		return new FormGroup<DeleteScheduledActionResponseFormProperties>({
		});

	}

	export interface DeleteScheduledActionRequest {
		ServiceNamespace: DeleteScheduledActionRequestServiceNamespace;
		ScheduledActionName: string;
		ResourceId: string;
		ScalableDimension: DeleteScheduledActionRequestScalableDimension;
	}
	export interface DeleteScheduledActionRequestFormProperties {
		ServiceNamespace: FormControl<DeleteScheduledActionRequestServiceNamespace | null | undefined>,
		ScheduledActionName: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ScalableDimension: FormControl<DeleteScheduledActionRequestScalableDimension | null | undefined>,
	}
	export function CreateDeleteScheduledActionRequestFormGroup() {
		return new FormGroup<DeleteScheduledActionRequestFormProperties>({
			ServiceNamespace: new FormControl<DeleteScheduledActionRequestServiceNamespace | null | undefined>(undefined),
			ScheduledActionName: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ScalableDimension: new FormControl<DeleteScheduledActionRequestScalableDimension | null | undefined>(undefined),
		});

	}

	export enum DeleteScheduledActionRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DeleteScheduledActionRequestScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export interface DeregisterScalableTargetResponse {
	}
	export interface DeregisterScalableTargetResponseFormProperties {
	}
	export function CreateDeregisterScalableTargetResponseFormGroup() {
		return new FormGroup<DeregisterScalableTargetResponseFormProperties>({
		});

	}

	export interface DeregisterScalableTargetRequest {
		ServiceNamespace: DeregisterScalableTargetRequestServiceNamespace;
		ResourceId: string;
		ScalableDimension: DeregisterScalableTargetRequestScalableDimension;
	}
	export interface DeregisterScalableTargetRequestFormProperties {
		ServiceNamespace: FormControl<DeregisterScalableTargetRequestServiceNamespace | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ScalableDimension: FormControl<DeregisterScalableTargetRequestScalableDimension | null | undefined>,
	}
	export function CreateDeregisterScalableTargetRequestFormGroup() {
		return new FormGroup<DeregisterScalableTargetRequestFormProperties>({
			ServiceNamespace: new FormControl<DeregisterScalableTargetRequestServiceNamespace | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ScalableDimension: new FormControl<DeregisterScalableTargetRequestScalableDimension | null | undefined>(undefined),
		});

	}

	export enum DeregisterScalableTargetRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DeregisterScalableTargetRequestScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export interface DescribeScalableTargetsResponse {
		ScalableTargets?: Array<ScalableTarget>;
		NextToken?: string | null;
	}
	export interface DescribeScalableTargetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScalableTargetsResponseFormGroup() {
		return new FormGroup<DescribeScalableTargetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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
		SuspendedState?: SuspendedState;
	}

	/** Represents a scalable target. */
	export interface ScalableTargetFormProperties {
		ServiceNamespace: FormControl<ScalableTargetServiceNamespace | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ScalableDimension: FormControl<ScalableTargetScalableDimension | null | undefined>,
		MinCapacity: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateScalableTargetFormGroup() {
		return new FormGroup<ScalableTargetFormProperties>({
			ServiceNamespace: new FormControl<ScalableTargetServiceNamespace | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ScalableDimension: new FormControl<ScalableTargetScalableDimension | null | undefined>(undefined),
			MinCapacity: new FormControl<number | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ScalableTargetServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum ScalableTargetScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }


	/** Specifies whether the scaling activities for a scalable target are in a suspended state.  */
	export interface SuspendedState {
		DynamicScalingInSuspended?: boolean | null;
		DynamicScalingOutSuspended?: boolean | null;
		ScheduledScalingSuspended?: boolean | null;
	}

	/** Specifies whether the scaling activities for a scalable target are in a suspended state.  */
	export interface SuspendedStateFormProperties {
		DynamicScalingInSuspended: FormControl<boolean | null | undefined>,
		DynamicScalingOutSuspended: FormControl<boolean | null | undefined>,
		ScheduledScalingSuspended: FormControl<boolean | null | undefined>,
	}
	export function CreateSuspendedStateFormGroup() {
		return new FormGroup<SuspendedStateFormProperties>({
			DynamicScalingInSuspended: new FormControl<boolean | null | undefined>(undefined),
			DynamicScalingOutSuspended: new FormControl<boolean | null | undefined>(undefined),
			ScheduledScalingSuspended: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeScalableTargetsRequest {
		ServiceNamespace: DescribeScalableTargetsRequestServiceNamespace;
		ResourceIds?: Array<string>;
		ScalableDimension?: DescribeScalableTargetsRequestScalableDimension | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeScalableTargetsRequestFormProperties {
		ServiceNamespace: FormControl<DescribeScalableTargetsRequestServiceNamespace | null | undefined>,
		ScalableDimension: FormControl<DescribeScalableTargetsRequestScalableDimension | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScalableTargetsRequestFormGroup() {
		return new FormGroup<DescribeScalableTargetsRequestFormProperties>({
			ServiceNamespace: new FormControl<DescribeScalableTargetsRequestServiceNamespace | null | undefined>(undefined),
			ScalableDimension: new FormControl<DescribeScalableTargetsRequestScalableDimension | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DescribeScalableTargetsRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DescribeScalableTargetsRequestScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface DescribeScalingActivitiesResponse {
		ScalingActivities?: Array<ScalingActivity>;
		NextToken?: string | null;
	}
	export interface DescribeScalingActivitiesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScalingActivitiesResponseFormGroup() {
		return new FormGroup<DescribeScalingActivitiesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Represents a scaling activity. */
	export interface ScalingActivityFormProperties {
		ActivityId: FormControl<string | null | undefined>,
		ServiceNamespace: FormControl<ScalingActivityServiceNamespace | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ScalableDimension: FormControl<ScalingActivityScalableDimension | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Cause: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		StatusCode: FormControl<ScalingActivityStatusCode | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		Details: FormControl<string | null | undefined>,
	}
	export function CreateScalingActivityFormGroup() {
		return new FormGroup<ScalingActivityFormProperties>({
			ActivityId: new FormControl<string | null | undefined>(undefined),
			ServiceNamespace: new FormControl<ScalingActivityServiceNamespace | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ScalableDimension: new FormControl<ScalingActivityScalableDimension | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Cause: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			StatusCode: new FormControl<ScalingActivityStatusCode | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			Details: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface DescribeScalingActivitiesRequestFormProperties {
		ServiceNamespace: FormControl<DescribeScalingActivitiesRequestServiceNamespace | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ScalableDimension: FormControl<DescribeScalingActivitiesRequestScalableDimension | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScalingActivitiesRequestFormGroup() {
		return new FormGroup<DescribeScalingActivitiesRequestFormProperties>({
			ServiceNamespace: new FormControl<DescribeScalingActivitiesRequestServiceNamespace | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ScalableDimension: new FormControl<DescribeScalingActivitiesRequestScalableDimension | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DescribeScalingActivitiesRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DescribeScalingActivitiesRequestScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export interface DescribeScalingPoliciesResponse {
		ScalingPolicies?: Array<ScalingPolicy>;
		NextToken?: string | null;
	}
	export interface DescribeScalingPoliciesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScalingPoliciesResponseFormGroup() {
		return new FormGroup<DescribeScalingPoliciesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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
		StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;

		/** Represents a target tracking scaling policy configuration to use with Application Auto Scaling. */
		TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
		Alarms?: Array<Alarm>;
		CreationTime: Date;
	}

	/** Represents a scaling policy to use with Application Auto Scaling. */
	export interface ScalingPolicyFormProperties {
		PolicyARN: FormControl<string | null | undefined>,
		PolicyName: FormControl<string | null | undefined>,
		ServiceNamespace: FormControl<ScalingPolicyServiceNamespace | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ScalableDimension: FormControl<ScalingPolicyScalableDimension | null | undefined>,
		PolicyType: FormControl<ScalingPolicyPolicyType | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateScalingPolicyFormGroup() {
		return new FormGroup<ScalingPolicyFormProperties>({
			PolicyARN: new FormControl<string | null | undefined>(undefined),
			PolicyName: new FormControl<string | null | undefined>(undefined),
			ServiceNamespace: new FormControl<ScalingPolicyServiceNamespace | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ScalableDimension: new FormControl<ScalingPolicyScalableDimension | null | undefined>(undefined),
			PolicyType: new FormControl<ScalingPolicyPolicyType | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ScalingPolicyServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum ScalingPolicyScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export enum ScalingPolicyPolicyType { StepScaling = 0, TargetTrackingScaling = 1 }


	/** Represents a step scaling policy configuration to use with Application Auto Scaling. */
	export interface StepScalingPolicyConfiguration {
		AdjustmentType?: StepScalingPolicyConfigurationAdjustmentType | null;
		StepAdjustments?: Array<StepAdjustment>;
		MinAdjustmentMagnitude?: number | null;
		Cooldown?: number | null;
		MetricAggregationType?: StepScalingPolicyConfigurationMetricAggregationType | null;
	}

	/** Represents a step scaling policy configuration to use with Application Auto Scaling. */
	export interface StepScalingPolicyConfigurationFormProperties {
		AdjustmentType: FormControl<StepScalingPolicyConfigurationAdjustmentType | null | undefined>,
		MinAdjustmentMagnitude: FormControl<number | null | undefined>,
		Cooldown: FormControl<number | null | undefined>,
		MetricAggregationType: FormControl<StepScalingPolicyConfigurationMetricAggregationType | null | undefined>,
	}
	export function CreateStepScalingPolicyConfigurationFormGroup() {
		return new FormGroup<StepScalingPolicyConfigurationFormProperties>({
			AdjustmentType: new FormControl<StepScalingPolicyConfigurationAdjustmentType | null | undefined>(undefined),
			MinAdjustmentMagnitude: new FormControl<number | null | undefined>(undefined),
			Cooldown: new FormControl<number | null | undefined>(undefined),
			MetricAggregationType: new FormControl<StepScalingPolicyConfigurationMetricAggregationType | null | undefined>(undefined),
		});

	}

	export enum StepScalingPolicyConfigurationAdjustmentType { ChangeInCapacity = 0, PercentChangeInCapacity = 1, ExactCapacity = 2 }


	/** <p>Represents a step adjustment for a <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_StepScalingPolicyConfiguration.html">StepScalingPolicyConfiguration</a>. Describes an adjustment based on the difference between the value of the aggregated CloudWatch metric and the breach threshold that you've defined for the alarm. </p> <p>For the following examples, suppose that you have an alarm with a breach threshold of 50:</p> <ul> <li> <p>To trigger the adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of 0 and an upper bound of 10.</p> </li> <li> <p>To trigger the adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of -10 and an upper bound of 0.</p> </li> </ul> <p>There are a few rules for the step adjustments for your step policy:</p> <ul> <li> <p>The ranges of your step adjustments can't overlap or have a gap.</p> </li> <li> <p>At most one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.</p> </li> <li> <p>At most one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.</p> </li> <li> <p>The upper and lower bound can't be null in the same step adjustment.</p> </li> </ul> */
	export interface StepAdjustment {
		MetricIntervalLowerBound?: number | null;
		MetricIntervalUpperBound?: number | null;
		ScalingAdjustment: number;
	}

	/** <p>Represents a step adjustment for a <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_StepScalingPolicyConfiguration.html">StepScalingPolicyConfiguration</a>. Describes an adjustment based on the difference between the value of the aggregated CloudWatch metric and the breach threshold that you've defined for the alarm. </p> <p>For the following examples, suppose that you have an alarm with a breach threshold of 50:</p> <ul> <li> <p>To trigger the adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of 0 and an upper bound of 10.</p> </li> <li> <p>To trigger the adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of -10 and an upper bound of 0.</p> </li> </ul> <p>There are a few rules for the step adjustments for your step policy:</p> <ul> <li> <p>The ranges of your step adjustments can't overlap or have a gap.</p> </li> <li> <p>At most one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.</p> </li> <li> <p>At most one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.</p> </li> <li> <p>The upper and lower bound can't be null in the same step adjustment.</p> </li> </ul> */
	export interface StepAdjustmentFormProperties {
		MetricIntervalLowerBound: FormControl<number | null | undefined>,
		MetricIntervalUpperBound: FormControl<number | null | undefined>,
		ScalingAdjustment: FormControl<number | null | undefined>,
	}
	export function CreateStepAdjustmentFormGroup() {
		return new FormGroup<StepAdjustmentFormProperties>({
			MetricIntervalLowerBound: new FormControl<number | null | undefined>(undefined),
			MetricIntervalUpperBound: new FormControl<number | null | undefined>(undefined),
			ScalingAdjustment: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum StepScalingPolicyConfigurationMetricAggregationType { Average = 0, Minimum = 1, Maximum = 2 }


	/** Represents a target tracking scaling policy configuration to use with Application Auto Scaling. */
	export interface TargetTrackingScalingPolicyConfiguration {
		TargetValue: number;

		/** <p>Represents a predefined metric for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>Only the AWS services that you're using send metrics to Amazon CloudWatch. To determine whether a desired metric already exists by looking up its namespace and dimension using the CloudWatch metrics dashboard in the console, follow the procedure in <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html">Building Dashboards with CloudWatch</a> in the <i>Application Auto Scaling User Guide</i>.</p> */
		PredefinedMetricSpecification?: PredefinedMetricSpecification;

		/** <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>For information about the available metrics for a service, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">AWS Services That Publish CloudWatch Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases, and increase when capacity decreases. </p> </li> </ul> <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a>. </p> */
		CustomizedMetricSpecification?: CustomizedMetricSpecification;
		ScaleOutCooldown?: number | null;
		ScaleInCooldown?: number | null;
		DisableScaleIn?: boolean | null;
	}

	/** Represents a target tracking scaling policy configuration to use with Application Auto Scaling. */
	export interface TargetTrackingScalingPolicyConfigurationFormProperties {
		TargetValue: FormControl<number | null | undefined>,
		ScaleOutCooldown: FormControl<number | null | undefined>,
		ScaleInCooldown: FormControl<number | null | undefined>,
		DisableScaleIn: FormControl<boolean | null | undefined>,
	}
	export function CreateTargetTrackingScalingPolicyConfigurationFormGroup() {
		return new FormGroup<TargetTrackingScalingPolicyConfigurationFormProperties>({
			TargetValue: new FormControl<number | null | undefined>(undefined),
			ScaleOutCooldown: new FormControl<number | null | undefined>(undefined),
			ScaleInCooldown: new FormControl<number | null | undefined>(undefined),
			DisableScaleIn: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Represents a predefined metric for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>Only the AWS services that you're using send metrics to Amazon CloudWatch. To determine whether a desired metric already exists by looking up its namespace and dimension using the CloudWatch metrics dashboard in the console, follow the procedure in <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html">Building Dashboards with CloudWatch</a> in the <i>Application Auto Scaling User Guide</i>.</p> */
	export interface PredefinedMetricSpecification {
		PredefinedMetricType: PredefinedMetricSpecificationPredefinedMetricType;
		ResourceLabel?: string | null;
	}

	/** <p>Represents a predefined metric for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>Only the AWS services that you're using send metrics to Amazon CloudWatch. To determine whether a desired metric already exists by looking up its namespace and dimension using the CloudWatch metrics dashboard in the console, follow the procedure in <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html">Building Dashboards with CloudWatch</a> in the <i>Application Auto Scaling User Guide</i>.</p> */
	export interface PredefinedMetricSpecificationFormProperties {
		PredefinedMetricType: FormControl<PredefinedMetricSpecificationPredefinedMetricType | null | undefined>,
		ResourceLabel: FormControl<string | null | undefined>,
	}
	export function CreatePredefinedMetricSpecificationFormGroup() {
		return new FormGroup<PredefinedMetricSpecificationFormProperties>({
			PredefinedMetricType: new FormControl<PredefinedMetricSpecificationPredefinedMetricType | null | undefined>(undefined),
			ResourceLabel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PredefinedMetricSpecificationPredefinedMetricType { DynamoDBReadCapacityUtilization = 0, DynamoDBWriteCapacityUtilization = 1, ALBRequestCountPerTarget = 2, RDSReaderAverageCPUUtilization = 3, RDSReaderAverageDatabaseConnections = 4, EC2SpotFleetRequestAverageCPUUtilization = 5, EC2SpotFleetRequestAverageNetworkIn = 6, EC2SpotFleetRequestAverageNetworkOut = 7, SageMakerVariantInvocationsPerInstance = 8, ECSServiceAverageCPUUtilization = 9, ECSServiceAverageMemoryUtilization = 10, AppStreamAverageCapacityUtilization = 11, ComprehendInferenceUtilization = 12, LambdaProvisionedConcurrencyUtilization = 13, CassandraReadCapacityUtilization = 14, CassandraWriteCapacityUtilization = 15 }


	/** <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>For information about the available metrics for a service, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">AWS Services That Publish CloudWatch Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases, and increase when capacity decreases. </p> </li> </ul> <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a>. </p> */
	export interface CustomizedMetricSpecification {
		MetricName: string;
		Namespace: string;
		Dimensions?: Array<MetricDimension>;
		Statistic: CustomizedMetricSpecificationStatistic;
		Unit?: string | null;
	}

	/** <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>For information about the available metrics for a service, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">AWS Services That Publish CloudWatch Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases, and increase when capacity decreases. </p> </li> </ul> <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a>. </p> */
	export interface CustomizedMetricSpecificationFormProperties {
		MetricName: FormControl<string | null | undefined>,
		Namespace: FormControl<string | null | undefined>,
		Statistic: FormControl<CustomizedMetricSpecificationStatistic | null | undefined>,
		Unit: FormControl<string | null | undefined>,
	}
	export function CreateCustomizedMetricSpecificationFormGroup() {
		return new FormGroup<CustomizedMetricSpecificationFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined),
			Namespace: new FormControl<string | null | undefined>(undefined),
			Statistic: new FormControl<CustomizedMetricSpecificationStatistic | null | undefined>(undefined),
			Unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the dimension names and values associated with a metric. */
	export interface MetricDimension {
		Name: string;
		Value: string;
	}

	/** Describes the dimension names and values associated with a metric. */
	export interface MetricDimensionFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateMetricDimensionFormGroup() {
		return new FormGroup<MetricDimensionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CustomizedMetricSpecificationStatistic { Average = 0, Minimum = 1, Maximum = 2, SampleCount = 3, Sum = 4 }


	/** Represents a CloudWatch alarm associated with a scaling policy. */
	export interface Alarm {
		AlarmName: string;
		AlarmARN: string;
	}

	/** Represents a CloudWatch alarm associated with a scaling policy. */
	export interface AlarmFormProperties {
		AlarmName: FormControl<string | null | undefined>,
		AlarmARN: FormControl<string | null | undefined>,
	}
	export function CreateAlarmFormGroup() {
		return new FormGroup<AlarmFormProperties>({
			AlarmName: new FormControl<string | null | undefined>(undefined),
			AlarmARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeScalingPoliciesRequest {
		PolicyNames?: Array<string>;
		ServiceNamespace: DescribeScalingPoliciesRequestServiceNamespace;
		ResourceId?: string | null;
		ScalableDimension?: DescribeScalingPoliciesRequestScalableDimension | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeScalingPoliciesRequestFormProperties {
		ServiceNamespace: FormControl<DescribeScalingPoliciesRequestServiceNamespace | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ScalableDimension: FormControl<DescribeScalingPoliciesRequestScalableDimension | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScalingPoliciesRequestFormGroup() {
		return new FormGroup<DescribeScalingPoliciesRequestFormProperties>({
			ServiceNamespace: new FormControl<DescribeScalingPoliciesRequestServiceNamespace | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ScalableDimension: new FormControl<DescribeScalingPoliciesRequestScalableDimension | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DescribeScalingPoliciesRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DescribeScalingPoliciesRequestScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export interface FailedResourceAccessException {
	}
	export interface FailedResourceAccessExceptionFormProperties {
	}
	export function CreateFailedResourceAccessExceptionFormGroup() {
		return new FormGroup<FailedResourceAccessExceptionFormProperties>({
		});

	}

	export interface DescribeScheduledActionsResponse {
		ScheduledActions?: Array<ScheduledAction>;
		NextToken?: string | null;
	}
	export interface DescribeScheduledActionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScheduledActionsResponseFormGroup() {
		return new FormGroup<DescribeScheduledActionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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
		ScalableTargetAction?: ScalableTargetAction;
		CreationTime: Date;
	}

	/** Represents a scheduled action. */
	export interface ScheduledActionFormProperties {
		ScheduledActionName: FormControl<string | null | undefined>,
		ScheduledActionARN: FormControl<string | null | undefined>,
		ServiceNamespace: FormControl<ScheduledActionServiceNamespace | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ScalableDimension: FormControl<ScheduledActionScalableDimension | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateScheduledActionFormGroup() {
		return new FormGroup<ScheduledActionFormProperties>({
			ScheduledActionName: new FormControl<string | null | undefined>(undefined),
			ScheduledActionARN: new FormControl<string | null | undefined>(undefined),
			ServiceNamespace: new FormControl<ScheduledActionServiceNamespace | null | undefined>(undefined),
			Schedule: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ScalableDimension: new FormControl<ScheduledActionScalableDimension | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ScheduledActionServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum ScheduledActionScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }


	/** Represents the minimum and maximum capacity for a scheduled action. */
	export interface ScalableTargetAction {
		MinCapacity?: number | null;
		MaxCapacity?: number | null;
	}

	/** Represents the minimum and maximum capacity for a scheduled action. */
	export interface ScalableTargetActionFormProperties {
		MinCapacity: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
	}
	export function CreateScalableTargetActionFormGroup() {
		return new FormGroup<ScalableTargetActionFormProperties>({
			MinCapacity: new FormControl<number | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeScheduledActionsRequest {
		ScheduledActionNames?: Array<string>;
		ServiceNamespace: DescribeScheduledActionsRequestServiceNamespace;
		ResourceId?: string | null;
		ScalableDimension?: DescribeScheduledActionsRequestScalableDimension | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface DescribeScheduledActionsRequestFormProperties {
		ServiceNamespace: FormControl<DescribeScheduledActionsRequestServiceNamespace | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ScalableDimension: FormControl<DescribeScheduledActionsRequestScalableDimension | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScheduledActionsRequestFormGroup() {
		return new FormGroup<DescribeScheduledActionsRequestFormProperties>({
			ServiceNamespace: new FormControl<DescribeScheduledActionsRequestServiceNamespace | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ScalableDimension: new FormControl<DescribeScheduledActionsRequestScalableDimension | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DescribeScheduledActionsRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum DescribeScheduledActionsRequestScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export interface PutScalingPolicyResponse {
		PolicyARN: string;
		Alarms?: Array<Alarm>;
	}
	export interface PutScalingPolicyResponseFormProperties {
		PolicyARN: FormControl<string | null | undefined>,
	}
	export function CreatePutScalingPolicyResponseFormGroup() {
		return new FormGroup<PutScalingPolicyResponseFormProperties>({
			PolicyARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutScalingPolicyRequest {
		PolicyName: string;
		ServiceNamespace: PutScalingPolicyRequestServiceNamespace;
		ResourceId: string;
		ScalableDimension: PutScalingPolicyRequestScalableDimension;
		PolicyType?: ScalingPolicyPolicyType | null;

		/** Represents a step scaling policy configuration to use with Application Auto Scaling. */
		StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;

		/** Represents a target tracking scaling policy configuration to use with Application Auto Scaling. */
		TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
	}
	export interface PutScalingPolicyRequestFormProperties {
		PolicyName: FormControl<string | null | undefined>,
		ServiceNamespace: FormControl<PutScalingPolicyRequestServiceNamespace | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ScalableDimension: FormControl<PutScalingPolicyRequestScalableDimension | null | undefined>,
		PolicyType: FormControl<ScalingPolicyPolicyType | null | undefined>,
	}
	export function CreatePutScalingPolicyRequestFormGroup() {
		return new FormGroup<PutScalingPolicyRequestFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined),
			ServiceNamespace: new FormControl<PutScalingPolicyRequestServiceNamespace | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ScalableDimension: new FormControl<PutScalingPolicyRequestScalableDimension | null | undefined>(undefined),
			PolicyType: new FormControl<ScalingPolicyPolicyType | null | undefined>(undefined),
		});

	}

	export enum PutScalingPolicyRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum PutScalingPolicyRequestScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface PutScheduledActionResponse {
	}
	export interface PutScheduledActionResponseFormProperties {
	}
	export function CreatePutScheduledActionResponseFormGroup() {
		return new FormGroup<PutScheduledActionResponseFormProperties>({
		});

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
		ScalableTargetAction?: ScalableTargetAction;
	}
	export interface PutScheduledActionRequestFormProperties {
		ServiceNamespace: FormControl<PutScheduledActionRequestServiceNamespace | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
		ScheduledActionName: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ScalableDimension: FormControl<PutScheduledActionRequestScalableDimension | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreatePutScheduledActionRequestFormGroup() {
		return new FormGroup<PutScheduledActionRequestFormProperties>({
			ServiceNamespace: new FormControl<PutScheduledActionRequestServiceNamespace | null | undefined>(undefined),
			Schedule: new FormControl<string | null | undefined>(undefined),
			ScheduledActionName: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ScalableDimension: new FormControl<PutScheduledActionRequestScalableDimension | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PutScheduledActionRequestServiceNamespace { ecs = 0, elasticmapreduce = 1, ec2 = 2, appstream = 3, dynamodb = 4, rds = 5, sagemaker = 6, custom_resource = 7, comprehend = 8, lambda = 9, cassandra = 10 }

	export enum PutScheduledActionRequestScalableDimension { ecsserviceDesiredCount = 0, ec2spot_fleet_requestTargetCapacity = 1, elasticmapreduceinstancegroupInstanceCount = 2, appstreamfleetDesiredCapacity = 3, dynamodbtableReadCapacityUnits = 4, dynamodbtableWriteCapacityUnits = 5, dynamodbindexReadCapacityUnits = 6, dynamodbindexWriteCapacityUnits = 7, rdsclusterReadReplicaCount = 8, sagemakervariantDesiredInstanceCount = 9, custom_resourceResourceTypeProperty = 10, comprehenddocument_classifier_endpointDesiredInferenceUnits = 11, lambdafunctionProvisionedConcurrency = 12, cassandratableReadCapacityUnits = 13, cassandratableWriteCapacityUnits = 14 }

	export interface RegisterScalableTargetResponse {
	}
	export interface RegisterScalableTargetResponseFormProperties {
	}
	export function CreateRegisterScalableTargetResponseFormGroup() {
		return new FormGroup<RegisterScalableTargetResponseFormProperties>({
		});

	}

	export interface RegisterScalableTargetRequest {
		ServiceNamespace: RegisterScalableTargetRequestServiceNamespace;
		ResourceId: string;
		ScalableDimension: RegisterScalableTargetRequestScalableDimension;
		MinCapacity?: number | null;
		MaxCapacity?: number | null;
		RoleARN?: string | null;

		/** Specifies whether the scaling activities for a scalable target are in a suspended state. */
		SuspendedState?: SuspendedState;
	}
	export interface RegisterScalableTargetRequestFormProperties {
		ServiceNamespace: FormControl<RegisterScalableTargetRequestServiceNamespace | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ScalableDimension: FormControl<RegisterScalableTargetRequestScalableDimension | null | undefined>,
		MinCapacity: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateRegisterScalableTargetRequestFormGroup() {
		return new FormGroup<RegisterScalableTargetRequestFormProperties>({
			ServiceNamespace: new FormControl<RegisterScalableTargetRequestServiceNamespace | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ScalableDimension: new FormControl<RegisterScalableTargetRequestScalableDimension | null | undefined>(undefined),
			MinCapacity: new FormControl<number | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
		});

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

