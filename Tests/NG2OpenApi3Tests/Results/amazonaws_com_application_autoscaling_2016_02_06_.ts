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

		/** Required */
		PolicyName: string;

		/** Required */
		ServiceNamespace: ServiceNamespace;

		/** Required */
		ResourceId: string;

		/** Required */
		ScalableDimension: ScalableDimension;
	}
	export interface DeleteScalingPolicyRequestFormProperties {

		/** Required */
		PolicyName: FormControl<string | null | undefined>,

		/** Required */
		ServiceNamespace: FormControl<ServiceNamespace | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ScalableDimension: FormControl<ScalableDimension | null | undefined>,
	}
	export function CreateDeleteScalingPolicyRequestFormGroup() {
		return new FormGroup<DeleteScalingPolicyRequestFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceNamespace: new FormControl<ServiceNamespace | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalableDimension: new FormControl<ScalableDimension | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ServiceNamespace { ecs = 'ecs', elasticmapreduce = 'elasticmapreduce', ec2 = 'ec2', appstream = 'appstream', dynamodb = 'dynamodb', rds = 'rds', sagemaker = 'sagemaker', 'custom-resource' = 'custom-resource', comprehend = 'comprehend', lambda = 'lambda', cassandra = 'cassandra', kafka = 'kafka', elasticache = 'elasticache', neptune = 'neptune' }

	export enum ScalableDimension { 'ecs:service:DesiredCount' = 'ecs:service:DesiredCount', 'ec2:spot-fleet-request:TargetCapacity' = 'ec2:spot-fleet-request:TargetCapacity', 'elasticmapreduce:instancegroup:InstanceCount' = 'elasticmapreduce:instancegroup:InstanceCount', 'appstream:fleet:DesiredCapacity' = 'appstream:fleet:DesiredCapacity', 'dynamodb:table:ReadCapacityUnits' = 'dynamodb:table:ReadCapacityUnits', 'dynamodb:table:WriteCapacityUnits' = 'dynamodb:table:WriteCapacityUnits', 'dynamodb:index:ReadCapacityUnits' = 'dynamodb:index:ReadCapacityUnits', 'dynamodb:index:WriteCapacityUnits' = 'dynamodb:index:WriteCapacityUnits', 'rds:cluster:ReadReplicaCount' = 'rds:cluster:ReadReplicaCount', 'sagemaker:variant:DesiredInstanceCount' = 'sagemaker:variant:DesiredInstanceCount', 'custom-resource:ResourceType:Property' = 'custom-resource:ResourceType:Property', 'comprehend:document-classifier-endpoint:DesiredInferenceUnits' = 'comprehend:document-classifier-endpoint:DesiredInferenceUnits', 'comprehend:entity-recognizer-endpoint:DesiredInferenceUnits' = 'comprehend:entity-recognizer-endpoint:DesiredInferenceUnits', 'lambda:function:ProvisionedConcurrency' = 'lambda:function:ProvisionedConcurrency', 'cassandra:table:ReadCapacityUnits' = 'cassandra:table:ReadCapacityUnits', 'cassandra:table:WriteCapacityUnits' = 'cassandra:table:WriteCapacityUnits', 'kafka:broker-storage:VolumeSize' = 'kafka:broker-storage:VolumeSize', 'elasticache:replication-group:NodeGroups' = 'elasticache:replication-group:NodeGroups', 'elasticache:replication-group:Replicas' = 'elasticache:replication-group:Replicas', 'neptune:cluster:ReadReplicaCount' = 'neptune:cluster:ReadReplicaCount', 'sagemaker:variant:DesiredProvisionedConcurrency' = 'sagemaker:variant:DesiredProvisionedConcurrency' }

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

		/** Required */
		ServiceNamespace: ServiceNamespace;

		/** Required */
		ScheduledActionName: string;

		/** Required */
		ResourceId: string;

		/** Required */
		ScalableDimension: ScalableDimension;
	}
	export interface DeleteScheduledActionRequestFormProperties {

		/** Required */
		ServiceNamespace: FormControl<ServiceNamespace | null | undefined>,

		/** Required */
		ScheduledActionName: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ScalableDimension: FormControl<ScalableDimension | null | undefined>,
	}
	export function CreateDeleteScheduledActionRequestFormGroup() {
		return new FormGroup<DeleteScheduledActionRequestFormProperties>({
			ServiceNamespace: new FormControl<ServiceNamespace | null | undefined>(undefined, [Validators.required]),
			ScheduledActionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalableDimension: new FormControl<ScalableDimension | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterScalableTargetResponse {
	}
	export interface DeregisterScalableTargetResponseFormProperties {
	}
	export function CreateDeregisterScalableTargetResponseFormGroup() {
		return new FormGroup<DeregisterScalableTargetResponseFormProperties>({
		});

	}

	export interface DeregisterScalableTargetRequest {

		/** Required */
		ServiceNamespace: ServiceNamespace;

		/** Required */
		ResourceId: string;

		/** Required */
		ScalableDimension: ScalableDimension;
	}
	export interface DeregisterScalableTargetRequestFormProperties {

		/** Required */
		ServiceNamespace: FormControl<ServiceNamespace | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ScalableDimension: FormControl<ScalableDimension | null | undefined>,
	}
	export function CreateDeregisterScalableTargetRequestFormGroup() {
		return new FormGroup<DeregisterScalableTargetRequestFormProperties>({
			ServiceNamespace: new FormControl<ServiceNamespace | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalableDimension: new FormControl<ScalableDimension | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeScalableTargetsResponse {
		ScalableTargets?: Array<ScalableTarget>;
		NextToken?: string;
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
		RoleARN: string;

		/** Required */
		CreationTime: Date;
		SuspendedState?: SuspendedState;
		ScalableTargetARN?: string;
	}

	/** Represents a scalable target. */
	export interface ScalableTargetFormProperties {

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

		/** Required */
		RoleARN: FormControl<string | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
		ScalableTargetARN: FormControl<string | null | undefined>,
	}
	export function CreateScalableTargetFormGroup() {
		return new FormGroup<ScalableTargetFormProperties>({
			ServiceNamespace: new FormControl<ServiceNamespace | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalableDimension: new FormControl<ScalableDimension | null | undefined>(undefined, [Validators.required]),
			MinCapacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaxCapacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RoleARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ScalableTargetARN: new FormControl<string | null | undefined>(undefined),
		});

	}


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

		/** Required */
		ServiceNamespace: ServiceNamespace;
		ResourceIds?: Array<string>;
		ScalableDimension?: ScalableDimension;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeScalableTargetsRequestFormProperties {

		/** Required */
		ServiceNamespace: FormControl<ServiceNamespace | null | undefined>,
		ScalableDimension: FormControl<ScalableDimension | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScalableTargetsRequestFormGroup() {
		return new FormGroup<DescribeScalableTargetsRequestFormProperties>({
			ServiceNamespace: new FormControl<ServiceNamespace | null | undefined>(undefined, [Validators.required]),
			ScalableDimension: new FormControl<ScalableDimension | null | undefined>(undefined),
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

	export interface DescribeScalingActivitiesResponse {
		ScalingActivities?: Array<ScalingActivity>;
		NextToken?: string;
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

		/** Required */
		ActivityId: string;

		/** Required */
		ServiceNamespace: ServiceNamespace;

		/** Required */
		ResourceId: string;

		/** Required */
		ScalableDimension: ScalableDimension;

		/** Required */
		Description: string;

		/** Required */
		Cause: string;

		/** Required */
		StartTime: Date;
		EndTime?: Date;

		/** Required */
		StatusCode: ScalingActivityStatusCode;
		StatusMessage?: string;
		Details?: string;
		NotScaledReasons?: Array<NotScaledReason>;
	}

	/** Represents a scaling activity. */
	export interface ScalingActivityFormProperties {

		/** Required */
		ActivityId: FormControl<string | null | undefined>,

		/** Required */
		ServiceNamespace: FormControl<ServiceNamespace | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ScalableDimension: FormControl<ScalableDimension | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		Cause: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,

		/** Required */
		StatusCode: FormControl<ScalingActivityStatusCode | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		Details: FormControl<string | null | undefined>,
	}
	export function CreateScalingActivityFormGroup() {
		return new FormGroup<ScalingActivityFormProperties>({
			ActivityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceNamespace: new FormControl<ServiceNamespace | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalableDimension: new FormControl<ScalableDimension | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Cause: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			StatusCode: new FormControl<ScalingActivityStatusCode | null | undefined>(undefined, [Validators.required]),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			Details: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScalingActivityStatusCode { Pending = 'Pending', InProgress = 'InProgress', Successful = 'Successful', Overridden = 'Overridden', Unfulfilled = 'Unfulfilled', Failed = 'Failed' }


	/** Describes the reason for an activity that isn't scaled (<i>not scaled activity</i>), in machine-readable format. For help interpreting the not scaled reason details, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>. */
	export interface NotScaledReason {

		/** Required */
		Code: string;
		MaxCapacity?: number | null;
		MinCapacity?: number | null;
		CurrentCapacity?: number | null;
	}

	/** Describes the reason for an activity that isn't scaled (<i>not scaled activity</i>), in machine-readable format. For help interpreting the not scaled reason details, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>. */
	export interface NotScaledReasonFormProperties {

		/** Required */
		Code: FormControl<string | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		MinCapacity: FormControl<number | null | undefined>,
		CurrentCapacity: FormControl<number | null | undefined>,
	}
	export function CreateNotScaledReasonFormGroup() {
		return new FormGroup<NotScaledReasonFormProperties>({
			Code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			MinCapacity: new FormControl<number | null | undefined>(undefined),
			CurrentCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeScalingActivitiesRequest {

		/** Required */
		ServiceNamespace: ServiceNamespace;
		ResourceId?: string;
		ScalableDimension?: ScalableDimension;
		MaxResults?: number | null;
		NextToken?: string;
		IncludeNotScaledActivities?: boolean | null;
	}
	export interface DescribeScalingActivitiesRequestFormProperties {

		/** Required */
		ServiceNamespace: FormControl<ServiceNamespace | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ScalableDimension: FormControl<ScalableDimension | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		IncludeNotScaledActivities: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeScalingActivitiesRequestFormGroup() {
		return new FormGroup<DescribeScalingActivitiesRequestFormProperties>({
			ServiceNamespace: new FormControl<ServiceNamespace | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ScalableDimension: new FormControl<ScalableDimension | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			IncludeNotScaledActivities: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeScalingPoliciesResponse {
		ScalingPolicies?: Array<ScalingPolicy>;
		NextToken?: string;
	}
	export interface DescribeScalingPoliciesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScalingPoliciesResponseFormGroup() {
		return new FormGroup<DescribeScalingPoliciesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Represents a scaling policy to use with Application Auto Scaling.</p> <p>For more information about configuring scaling policies for a specific service, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/integrated-services-list.html">Amazon Web Services services that you can use with Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p> */
	export interface ScalingPolicy {

		/** Required */
		PolicyARN: string;

		/** Required */
		PolicyName: string;

		/** Required */
		ServiceNamespace: ServiceNamespace;

		/** Required */
		ResourceId: string;

		/** Required */
		ScalableDimension: ScalableDimension;

		/** Required */
		PolicyType: PolicyType;
		StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;
		TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
		Alarms?: Array<Alarm>;

		/** Required */
		CreationTime: Date;
	}

	/** <p>Represents a scaling policy to use with Application Auto Scaling.</p> <p>For more information about configuring scaling policies for a specific service, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/integrated-services-list.html">Amazon Web Services services that you can use with Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p> */
	export interface ScalingPolicyFormProperties {

		/** Required */
		PolicyARN: FormControl<string | null | undefined>,

		/** Required */
		PolicyName: FormControl<string | null | undefined>,

		/** Required */
		ServiceNamespace: FormControl<ServiceNamespace | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ScalableDimension: FormControl<ScalableDimension | null | undefined>,

		/** Required */
		PolicyType: FormControl<PolicyType | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateScalingPolicyFormGroup() {
		return new FormGroup<ScalingPolicyFormProperties>({
			PolicyARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceNamespace: new FormControl<ServiceNamespace | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalableDimension: new FormControl<ScalableDimension | null | undefined>(undefined, [Validators.required]),
			PolicyType: new FormControl<PolicyType | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PolicyType { StepScaling = 'StepScaling', TargetTrackingScaling = 'TargetTrackingScaling' }


	/** <p>Represents a step scaling policy configuration to use with Application Auto Scaling.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p> */
	export interface StepScalingPolicyConfiguration {
		AdjustmentType?: AdjustmentType;
		StepAdjustments?: Array<StepAdjustment>;
		MinAdjustmentMagnitude?: number | null;
		Cooldown?: number | null;
		MetricAggregationType?: MetricAggregationType;
	}

	/** <p>Represents a step scaling policy configuration to use with Application Auto Scaling.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p> */
	export interface StepScalingPolicyConfigurationFormProperties {
		AdjustmentType: FormControl<AdjustmentType | null | undefined>,
		MinAdjustmentMagnitude: FormControl<number | null | undefined>,
		Cooldown: FormControl<number | null | undefined>,
		MetricAggregationType: FormControl<MetricAggregationType | null | undefined>,
	}
	export function CreateStepScalingPolicyConfigurationFormGroup() {
		return new FormGroup<StepScalingPolicyConfigurationFormProperties>({
			AdjustmentType: new FormControl<AdjustmentType | null | undefined>(undefined),
			MinAdjustmentMagnitude: new FormControl<number | null | undefined>(undefined),
			Cooldown: new FormControl<number | null | undefined>(undefined),
			MetricAggregationType: new FormControl<MetricAggregationType | null | undefined>(undefined),
		});

	}

	export enum AdjustmentType { ChangeInCapacity = 'ChangeInCapacity', PercentChangeInCapacity = 'PercentChangeInCapacity', ExactCapacity = 'ExactCapacity' }


	/** <p>Represents a step adjustment for a <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_StepScalingPolicyConfiguration.html">StepScalingPolicyConfiguration</a>. Describes an adjustment based on the difference between the value of the aggregated CloudWatch metric and the breach threshold that you've defined for the alarm. </p> <p>For the following examples, suppose that you have an alarm with a breach threshold of 50:</p> <ul> <li> <p>To initiate the adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of <code>0</code> and an upper bound of <code>10</code>.</p> </li> <li> <p>To initiate the adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of <code>-10</code> and an upper bound of <code>0</code>.</p> </li> </ul> <p>There are a few rules for the step adjustments for your step policy:</p> <ul> <li> <p>The ranges of your step adjustments can't overlap or have a gap.</p> </li> <li> <p>At most one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.</p> </li> <li> <p>At most one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.</p> </li> <li> <p>The upper and lower bound can't be null in the same step adjustment.</p> </li> </ul> */
	export interface StepAdjustment {
		MetricIntervalLowerBound?: number | null;
		MetricIntervalUpperBound?: number | null;

		/** Required */
		ScalingAdjustment: number;
	}

	/** <p>Represents a step adjustment for a <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_StepScalingPolicyConfiguration.html">StepScalingPolicyConfiguration</a>. Describes an adjustment based on the difference between the value of the aggregated CloudWatch metric and the breach threshold that you've defined for the alarm. </p> <p>For the following examples, suppose that you have an alarm with a breach threshold of 50:</p> <ul> <li> <p>To initiate the adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of <code>0</code> and an upper bound of <code>10</code>.</p> </li> <li> <p>To initiate the adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of <code>-10</code> and an upper bound of <code>0</code>.</p> </li> </ul> <p>There are a few rules for the step adjustments for your step policy:</p> <ul> <li> <p>The ranges of your step adjustments can't overlap or have a gap.</p> </li> <li> <p>At most one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.</p> </li> <li> <p>At most one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.</p> </li> <li> <p>The upper and lower bound can't be null in the same step adjustment.</p> </li> </ul> */
	export interface StepAdjustmentFormProperties {
		MetricIntervalLowerBound: FormControl<number | null | undefined>,
		MetricIntervalUpperBound: FormControl<number | null | undefined>,

		/** Required */
		ScalingAdjustment: FormControl<number | null | undefined>,
	}
	export function CreateStepAdjustmentFormGroup() {
		return new FormGroup<StepAdjustmentFormProperties>({
			MetricIntervalLowerBound: new FormControl<number | null | undefined>(undefined),
			MetricIntervalUpperBound: new FormControl<number | null | undefined>(undefined),
			ScalingAdjustment: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MetricAggregationType { Average = 'Average', Minimum = 'Minimum', Maximum = 'Maximum' }


	/** <p>Represents a target tracking scaling policy configuration to use with Application Auto Scaling.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p> */
	export interface TargetTrackingScalingPolicyConfiguration {

		/** Required */
		TargetValue: number;
		PredefinedMetricSpecification?: PredefinedMetricSpecification;
		CustomizedMetricSpecification?: CustomizedMetricSpecification;
		ScaleOutCooldown?: number | null;
		ScaleInCooldown?: number | null;
		DisableScaleIn?: boolean | null;
	}

	/** <p>Represents a target tracking scaling policy configuration to use with Application Auto Scaling.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p> */
	export interface TargetTrackingScalingPolicyConfigurationFormProperties {

		/** Required */
		TargetValue: FormControl<number | null | undefined>,
		ScaleOutCooldown: FormControl<number | null | undefined>,
		ScaleInCooldown: FormControl<number | null | undefined>,
		DisableScaleIn: FormControl<boolean | null | undefined>,
	}
	export function CreateTargetTrackingScalingPolicyConfigurationFormGroup() {
		return new FormGroup<TargetTrackingScalingPolicyConfigurationFormProperties>({
			TargetValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ScaleOutCooldown: new FormControl<number | null | undefined>(undefined),
			ScaleInCooldown: new FormControl<number | null | undefined>(undefined),
			DisableScaleIn: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Represents a predefined metric for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>Only the Amazon Web Services that you're using send metrics to Amazon CloudWatch. To determine whether a desired metric already exists by looking up its namespace and dimension using the CloudWatch metrics dashboard in the console, follow the procedure in <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html">Building dashboards with CloudWatch</a> in the <i>Application Auto Scaling User Guide</i>.</p> */
	export interface PredefinedMetricSpecification {

		/** Required */
		PredefinedMetricType: MetricType;
		ResourceLabel?: string;
	}

	/** <p>Represents a predefined metric for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>Only the Amazon Web Services that you're using send metrics to Amazon CloudWatch. To determine whether a desired metric already exists by looking up its namespace and dimension using the CloudWatch metrics dashboard in the console, follow the procedure in <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/monitoring-cloudwatch.html">Building dashboards with CloudWatch</a> in the <i>Application Auto Scaling User Guide</i>.</p> */
	export interface PredefinedMetricSpecificationFormProperties {

		/** Required */
		PredefinedMetricType: FormControl<MetricType | null | undefined>,
		ResourceLabel: FormControl<string | null | undefined>,
	}
	export function CreatePredefinedMetricSpecificationFormGroup() {
		return new FormGroup<PredefinedMetricSpecificationFormProperties>({
			PredefinedMetricType: new FormControl<MetricType | null | undefined>(undefined, [Validators.required]),
			ResourceLabel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MetricType { DynamoDBReadCapacityUtilization = 'DynamoDBReadCapacityUtilization', DynamoDBWriteCapacityUtilization = 'DynamoDBWriteCapacityUtilization', ALBRequestCountPerTarget = 'ALBRequestCountPerTarget', RDSReaderAverageCPUUtilization = 'RDSReaderAverageCPUUtilization', RDSReaderAverageDatabaseConnections = 'RDSReaderAverageDatabaseConnections', EC2SpotFleetRequestAverageCPUUtilization = 'EC2SpotFleetRequestAverageCPUUtilization', EC2SpotFleetRequestAverageNetworkIn = 'EC2SpotFleetRequestAverageNetworkIn', EC2SpotFleetRequestAverageNetworkOut = 'EC2SpotFleetRequestAverageNetworkOut', SageMakerVariantInvocationsPerInstance = 'SageMakerVariantInvocationsPerInstance', ECSServiceAverageCPUUtilization = 'ECSServiceAverageCPUUtilization', ECSServiceAverageMemoryUtilization = 'ECSServiceAverageMemoryUtilization', AppStreamAverageCapacityUtilization = 'AppStreamAverageCapacityUtilization', ComprehendInferenceUtilization = 'ComprehendInferenceUtilization', LambdaProvisionedConcurrencyUtilization = 'LambdaProvisionedConcurrencyUtilization', CassandraReadCapacityUtilization = 'CassandraReadCapacityUtilization', CassandraWriteCapacityUtilization = 'CassandraWriteCapacityUtilization', KafkaBrokerStorageUtilization = 'KafkaBrokerStorageUtilization', ElastiCachePrimaryEngineCPUUtilization = 'ElastiCachePrimaryEngineCPUUtilization', ElastiCacheReplicaEngineCPUUtilization = 'ElastiCacheReplicaEngineCPUUtilization', ElastiCacheDatabaseMemoryUsageCountedForEvictPercentage = 'ElastiCacheDatabaseMemoryUsageCountedForEvictPercentage', NeptuneReaderAverageCPUUtilization = 'NeptuneReaderAverageCPUUtilization', SageMakerVariantProvisionedConcurrencyUtilization = 'SageMakerVariantProvisionedConcurrencyUtilization', ElastiCacheDatabaseCapacityUsageCountedForEvictPercentage = 'ElastiCacheDatabaseCapacityUsageCountedForEvictPercentage' }


	/** <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>For information about the available metrics for a service, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">Amazon Web Services services that publish CloudWatch metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish custom metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases, and increase when capacity decreases. </p> </li> </ul> <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p> */
	export interface CustomizedMetricSpecification {
		MetricName?: string;
		Namespace?: string;
		Dimensions?: Array<MetricDimension>;
		Statistic?: MetricStatistic;
		Unit?: string;
		Metrics?: Array<TargetTrackingMetricDataQuery>;
	}

	/** <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Application Auto Scaling.</p> <p>For information about the available metrics for a service, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">Amazon Web Services services that publish CloudWatch metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish custom metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases, and increase when capacity decreases. </p> </li> </ul> <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch concepts</a> in the <i>Amazon CloudWatch User Guide</i>. </p> */
	export interface CustomizedMetricSpecificationFormProperties {
		MetricName: FormControl<string | null | undefined>,
		Namespace: FormControl<string | null | undefined>,
		Statistic: FormControl<MetricStatistic | null | undefined>,
		Unit: FormControl<string | null | undefined>,
	}
	export function CreateCustomizedMetricSpecificationFormGroup() {
		return new FormGroup<CustomizedMetricSpecificationFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined),
			Namespace: new FormControl<string | null | undefined>(undefined),
			Statistic: new FormControl<MetricStatistic | null | undefined>(undefined),
			Unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the dimension names and values associated with a metric. */
	export interface MetricDimension {

		/** Required */
		Name: string;

		/** Required */
		Value: string;
	}

	/** Describes the dimension names and values associated with a metric. */
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

	export enum MetricStatistic { Average = 'Average', Minimum = 'Minimum', Maximum = 'Maximum', SampleCount = 'SampleCount', Sum = 'Sum' }


	/** <p>The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.</p> <p>For more information and examples, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking-metric-math.html">Create a target tracking scaling policy for Application Auto Scaling using metric math</a> in the <i>Application Auto Scaling User Guide</i>.</p> */
	export interface TargetTrackingMetricDataQuery {
		Expression?: string;

		/** Required */
		Id: string;
		Label?: string;
		MetricStat?: TargetTrackingMetricStat;
		ReturnData?: boolean | null;
	}

	/** <p>The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.</p> <p>For more information and examples, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking-metric-math.html">Create a target tracking scaling policy for Application Auto Scaling using metric math</a> in the <i>Application Auto Scaling User Guide</i>.</p> */
	export interface TargetTrackingMetricDataQueryFormProperties {
		Expression: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		Label: FormControl<string | null | undefined>,
		ReturnData: FormControl<boolean | null | undefined>,
	}
	export function CreateTargetTrackingMetricDataQueryFormGroup() {
		return new FormGroup<TargetTrackingMetricDataQueryFormProperties>({
			Expression: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Label: new FormControl<string | null | undefined>(undefined),
			ReturnData: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>This structure defines the CloudWatch metric to return, along with the statistic, period, and unit.</p> <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch concepts</a> in the <i>Amazon CloudWatch User Guide</i>.</p> */
	export interface TargetTrackingMetricStat {

		/** Required */
		Metric: TargetTrackingMetric;

		/** Required */
		Stat: string;
		Unit?: string;
	}

	/** <p>This structure defines the CloudWatch metric to return, along with the statistic, period, and unit.</p> <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch concepts</a> in the <i>Amazon CloudWatch User Guide</i>.</p> */
	export interface TargetTrackingMetricStatFormProperties {

		/** Required */
		Stat: FormControl<string | null | undefined>,
		Unit: FormControl<string | null | undefined>,
	}
	export function CreateTargetTrackingMetricStatFormGroup() {
		return new FormGroup<TargetTrackingMetricStatFormProperties>({
			Stat: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Represents a specific metric.</p> <p>Metric is a property of the <a>TargetTrackingMetricStat</a> object.</p> */
	export interface TargetTrackingMetric {
		Dimensions?: Array<TargetTrackingMetricDimension>;
		MetricName?: string;
		Namespace?: string;
	}

	/** <p>Represents a specific metric.</p> <p>Metric is a property of the <a>TargetTrackingMetricStat</a> object.</p> */
	export interface TargetTrackingMetricFormProperties {
		MetricName: FormControl<string | null | undefined>,
		Namespace: FormControl<string | null | undefined>,
	}
	export function CreateTargetTrackingMetricFormGroup() {
		return new FormGroup<TargetTrackingMetricFormProperties>({
			MetricName: new FormControl<string | null | undefined>(undefined),
			Namespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the dimension of a metric. */
	export interface TargetTrackingMetricDimension {

		/** Required */
		Name: string;

		/** Required */
		Value: string;
	}

	/** Describes the dimension of a metric. */
	export interface TargetTrackingMetricDimensionFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTargetTrackingMetricDimensionFormGroup() {
		return new FormGroup<TargetTrackingMetricDimensionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a CloudWatch alarm associated with a scaling policy. */
	export interface Alarm {

		/** Required */
		AlarmName: string;

		/** Required */
		AlarmARN: string;
	}

	/** Represents a CloudWatch alarm associated with a scaling policy. */
	export interface AlarmFormProperties {

		/** Required */
		AlarmName: FormControl<string | null | undefined>,

		/** Required */
		AlarmARN: FormControl<string | null | undefined>,
	}
	export function CreateAlarmFormGroup() {
		return new FormGroup<AlarmFormProperties>({
			AlarmName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AlarmARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeScalingPoliciesRequest {
		PolicyNames?: Array<string>;

		/** Required */
		ServiceNamespace: ServiceNamespace;
		ResourceId?: string;
		ScalableDimension?: ScalableDimension;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeScalingPoliciesRequestFormProperties {

		/** Required */
		ServiceNamespace: FormControl<ServiceNamespace | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ScalableDimension: FormControl<ScalableDimension | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScalingPoliciesRequestFormGroup() {
		return new FormGroup<DescribeScalingPoliciesRequestFormProperties>({
			ServiceNamespace: new FormControl<ServiceNamespace | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ScalableDimension: new FormControl<ScalableDimension | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

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
		NextToken?: string;
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

		/** Required */
		ScheduledActionName: string;

		/** Required */
		ScheduledActionARN: string;

		/** Required */
		ServiceNamespace: ServiceNamespace;

		/** Required */
		Schedule: string;
		Timezone?: string;

		/** Required */
		ResourceId: string;
		ScalableDimension?: ScalableDimension;
		StartTime?: Date;
		EndTime?: Date;
		ScalableTargetAction?: ScalableTargetAction;

		/** Required */
		CreationTime: Date;
	}

	/** Represents a scheduled action. */
	export interface ScheduledActionFormProperties {

		/** Required */
		ScheduledActionName: FormControl<string | null | undefined>,

		/** Required */
		ScheduledActionARN: FormControl<string | null | undefined>,

		/** Required */
		ServiceNamespace: FormControl<ServiceNamespace | null | undefined>,

		/** Required */
		Schedule: FormControl<string | null | undefined>,
		Timezone: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
		ScalableDimension: FormControl<ScalableDimension | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,

		/** Required */
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateScheduledActionFormGroup() {
		return new FormGroup<ScheduledActionFormProperties>({
			ScheduledActionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScheduledActionARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceNamespace: new FormControl<ServiceNamespace | null | undefined>(undefined, [Validators.required]),
			Schedule: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Timezone: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalableDimension: new FormControl<ScalableDimension | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


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

		/** Required */
		ServiceNamespace: ServiceNamespace;
		ResourceId?: string;
		ScalableDimension?: ScalableDimension;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeScheduledActionsRequestFormProperties {

		/** Required */
		ServiceNamespace: FormControl<ServiceNamespace | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ScalableDimension: FormControl<ScalableDimension | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScheduledActionsRequestFormGroup() {
		return new FormGroup<DescribeScheduledActionsRequestFormProperties>({
			ServiceNamespace: new FormControl<ServiceNamespace | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ScalableDimension: new FormControl<ScalableDimension | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface PutScalingPolicyResponse {

		/** Required */
		PolicyARN: string;
		Alarms?: Array<Alarm>;
	}
	export interface PutScalingPolicyResponseFormProperties {

		/** Required */
		PolicyARN: FormControl<string | null | undefined>,
	}
	export function CreatePutScalingPolicyResponseFormGroup() {
		return new FormGroup<PutScalingPolicyResponseFormProperties>({
			PolicyARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutScalingPolicyRequest {

		/** Required */
		PolicyName: string;

		/** Required */
		ServiceNamespace: ServiceNamespace;

		/** Required */
		ResourceId: string;

		/** Required */
		ScalableDimension: ScalableDimension;
		PolicyType?: PolicyType;
		StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration;
		TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration;
	}
	export interface PutScalingPolicyRequestFormProperties {

		/** Required */
		PolicyName: FormControl<string | null | undefined>,

		/** Required */
		ServiceNamespace: FormControl<ServiceNamespace | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ScalableDimension: FormControl<ScalableDimension | null | undefined>,
		PolicyType: FormControl<PolicyType | null | undefined>,
	}
	export function CreatePutScalingPolicyRequestFormGroup() {
		return new FormGroup<PutScalingPolicyRequestFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceNamespace: new FormControl<ServiceNamespace | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalableDimension: new FormControl<ScalableDimension | null | undefined>(undefined, [Validators.required]),
			PolicyType: new FormControl<PolicyType | null | undefined>(undefined),
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

	export interface PutScheduledActionResponse {
	}
	export interface PutScheduledActionResponseFormProperties {
	}
	export function CreatePutScheduledActionResponseFormGroup() {
		return new FormGroup<PutScheduledActionResponseFormProperties>({
		});

	}

	export interface PutScheduledActionRequest {

		/** Required */
		ServiceNamespace: ServiceNamespace;
		Schedule?: string;
		Timezone?: string;

		/** Required */
		ScheduledActionName: string;

		/** Required */
		ResourceId: string;

		/** Required */
		ScalableDimension: ScalableDimension;
		StartTime?: Date;
		EndTime?: Date;
		ScalableTargetAction?: ScalableTargetAction;
	}
	export interface PutScheduledActionRequestFormProperties {

		/** Required */
		ServiceNamespace: FormControl<ServiceNamespace | null | undefined>,
		Schedule: FormControl<string | null | undefined>,
		Timezone: FormControl<string | null | undefined>,

		/** Required */
		ScheduledActionName: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ScalableDimension: FormControl<ScalableDimension | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreatePutScheduledActionRequestFormGroup() {
		return new FormGroup<PutScheduledActionRequestFormProperties>({
			ServiceNamespace: new FormControl<ServiceNamespace | null | undefined>(undefined, [Validators.required]),
			Schedule: new FormControl<string | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
			ScheduledActionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalableDimension: new FormControl<ScalableDimension | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface RegisterScalableTargetResponse {
		ScalableTargetARN?: string;
	}
	export interface RegisterScalableTargetResponseFormProperties {
		ScalableTargetARN: FormControl<string | null | undefined>,
	}
	export function CreateRegisterScalableTargetResponseFormGroup() {
		return new FormGroup<RegisterScalableTargetResponseFormProperties>({
			ScalableTargetARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterScalableTargetRequest {

		/** Required */
		ServiceNamespace: ServiceNamespace;

		/** Required */
		ResourceId: string;

		/** Required */
		ScalableDimension: ScalableDimension;
		MinCapacity?: number | null;
		MaxCapacity?: number | null;
		RoleARN?: string;
		SuspendedState?: SuspendedState;
		Tags?: TagMap;
	}
	export interface RegisterScalableTargetRequestFormProperties {

		/** Required */
		ServiceNamespace: FormControl<ServiceNamespace | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		ScalableDimension: FormControl<ScalableDimension | null | undefined>,
		MinCapacity: FormControl<number | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		RoleARN: FormControl<string | null | undefined>,
	}
	export function CreateRegisterScalableTargetRequestFormGroup() {
		return new FormGroup<RegisterScalableTargetRequestFormProperties>({
			ServiceNamespace: new FormControl<ServiceNamespace | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScalableDimension: new FormControl<ScalableDimension | null | undefined>(undefined, [Validators.required]),
			MinCapacity: new FormControl<number | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			RoleARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Deletes the specified scaling policy for an Application Auto Scaling scalable target.</p> <p>Deleting a step scaling policy deletes the underlying alarm action, but does not delete the CloudWatch alarm associated with the scaling policy, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html#delete-step-scaling-policy">Delete a step scaling policy</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html#delete-target-tracking-policy">Delete a target tracking scaling policy</a> in the <i>Application Auto Scaling User Guide</i>.</p>
		 * Post #X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy
		 * @return {DeleteScalingPolicyResponse} Success
		 */
		DeleteScalingPolicy(requestBody: DeleteScalingPolicyRequest): Observable<DeleteScalingPolicyResponse> {
			return this.http.post<DeleteScalingPolicyResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified scheduled action for an Application Auto Scaling scalable target.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html#delete-scheduled-action">Delete a scheduled action</a> in the <i>Application Auto Scaling User Guide</i>.</p>
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
		 * <p>Provides descriptive information about the scaling activities in the specified namespace from the previous six weeks.</p> <p>You can filter the results using <code>ResourceId</code> and <code>ScalableDimension</code>.</p> <p>For information about viewing scaling activities using the Amazon Web Services CLI, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>.</p>
		 * Post #X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeScalingActivitiesResponse} Success
		 */
		DescribeScalingActivities(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeScalingActivitiesRequest): Observable<DescribeScalingActivitiesResponse> {
			return this.http.post<DescribeScalingActivitiesResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the Application Auto Scaling scaling policies for the specified service namespace.</p> <p>You can filter the results using <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>PolicyNames</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p>
		 * Post #X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeScalingPoliciesResponse} Success
		 */
		DescribeScalingPolicies(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeScalingPoliciesRequest): Observable<DescribeScalingPoliciesResponse> {
			return this.http.post<DescribeScalingPoliciesResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the Application Auto Scaling scheduled actions for the specified service namespace.</p> <p>You can filter the results using the <code>ResourceId</code>, <code>ScalableDimension</code>, and <code>ScheduledActionNames</code> parameters.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/scheduled-scaling-additional-cli-commands.html">Managing scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
		 * Post #X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeScheduledActionsResponse} Success
		 */
		DescribeScheduledActions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeScheduledActionsRequest): Observable<DescribeScheduledActionsResponse> {
			return this.http.post<DescribeScheduledActionsResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns all the tags on the specified Application Auto Scaling scalable target.</p> <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p>
		 * Post #X-Amz-Target=AnyScaleFrontendService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates a scaling policy for an Application Auto Scaling scalable target.</p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scaling policy applies to the scalable target identified by those three attributes. You cannot create a scaling policy until you have registered the resource as a scalable target.</p> <p>Multiple scaling policies can be in force at the same time for the same scalable target. You can have one or more target tracking scaling policies, one or more step scaling policies, or both. However, there is a chance that multiple policies could conflict, instructing the scalable target to scale out or in at the same time. Application Auto Scaling gives precedence to the policy that provides the largest capacity for both scale out and scale in. For example, if one policy increases capacity by 3, another policy increases capacity by 200 percent, and the current capacity is 10, Application Auto Scaling uses the policy with the highest calculated capacity (200% of 10 = 20) and scales out to 30. </p> <p>We recommend caution, however, when using target tracking scaling policies with step scaling policies because conflicts between these policies can cause undesirable behavior. For example, if the step scaling policy initiates a scale-in activity before the target tracking policy is ready to scale in, the scale-in activity will not be blocked. After the scale-in activity completes, the target tracking policy could instruct the scalable target to scale out again. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html">Target tracking scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html">Step scaling policies</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to use scaling policies. Any scaling policies that were specified for the scalable target are deleted.</p> </note>
		 * Post #X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy
		 * @return {PutScalingPolicyResponse} Success
		 */
		PutScalingPolicy(requestBody: PutScalingPolicyRequest): Observable<PutScalingPolicyResponse> {
			return this.http.post<PutScalingPolicyResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates a scheduled action for an Application Auto Scaling scalable target. </p> <p>Each scalable target is identified by a service namespace, resource ID, and scalable dimension. A scheduled action applies to the scalable target identified by those three attributes. You cannot create a scheduled action until you have registered the resource as a scalable target.</p> <p>When you specify start and end times with a recurring schedule using a cron expression or rates, they form the boundaries for when the recurring action starts and stops.</p> <p>To update a scheduled action, specify the parameters that you want to change. If you don't specify start and end times, the old values are deleted.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html">Scheduled scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p> <note> <p>If a scalable target is deregistered, the scalable target is no longer available to run scheduled actions. Any scheduled actions that were specified for the scalable target are deleted.</p> </note>
		 * Post #X-Amz-Target=AnyScaleFrontendService.PutScheduledAction
		 * @return {PutScheduledActionResponse} Success
		 */
		PutScheduledAction(requestBody: PutScheduledActionRequest): Observable<PutScheduledActionResponse> {
			return this.http.post<PutScheduledActionResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers or updates a scalable target, which is the resource that you want to scale.</p> <p>Scalable targets are uniquely identified by the combination of resource ID, scalable dimension, and namespace, which represents some capacity dimension of the underlying service.</p> <p>When you register a new scalable target, you must specify values for the minimum and maximum capacity. If the specified resource is not active in the target service, this operation does not change the resource's current capacity. Otherwise, it changes the resource's current capacity to a value that is inside of this range.</p> <p>If you add a scaling policy, current capacity is adjustable within the specified range when scaling starts. Application Auto Scaling scaling policies will not scale capacity to values that are outside of the minimum and maximum range.</p> <p>After you register a scalable target, you do not need to register it again to use other Application Auto Scaling operations. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. You can also view the scaling policies for a service namespace by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. If you no longer need a scalable target, you can deregister it by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html">DeregisterScalableTarget</a>.</p> <p>To update a scalable target, specify the parameters that you want to change. Include the parameters that identify the scalable target: resource ID, scalable dimension, and namespace. Any parameters that you don't specify are not changed by this update request. </p> <note> <p>If you call the <code>RegisterScalableTarget</code> API operation to create a scalable target, there might be a brief delay until the operation achieves <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. You might become aware of this brief delay if you get unexpected errors when performing sequential operations. The typical strategy is to retry the request, and some Amazon Web Services SDKs include automatic backoff and retry logic.</p> <p>If you call the <code>RegisterScalableTarget</code> API operation to update an existing scalable target, Application Auto Scaling retrieves the current capacity of the resource. If it's below the minimum capacity or above the maximum capacity, Application Auto Scaling adjusts the capacity of the scalable target to place it within these bounds, even if you don't include the <code>MinCapacity</code> or <code>MaxCapacity</code> request parameters.</p> </note>
		 * Post #X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget
		 * @return {RegisterScalableTargetResponse} Success
		 */
		RegisterScalableTarget(requestBody: RegisterScalableTargetRequest): Observable<RegisterScalableTargetResponse> {
			return this.http.post<RegisterScalableTargetResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds or edits tags on an Application Auto Scaling scalable target.</p> <p>Each tag consists of a tag key and a tag value, which are both case-sensitive strings. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value.</p> <p>You can use this operation to tag an Application Auto Scaling scalable target, but you cannot tag a scaling policy or scheduled action.</p> <p>You can also add tags to an Application Auto Scaling scalable target while creating it (<code>RegisterScalableTarget</code>).</p> <p>For general information about tags, including the format and syntax, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>Use tags to control access to a scalable target. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/resource-tagging-support.html">Tagging support for Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
		 * Post #X-Amz-Target=AnyScaleFrontendService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes tags from an Application Auto Scaling scalable target. To delete a tag, specify the tag key and the Application Auto Scaling scalable target.
		 * Post #X-Amz-Target=AnyScaleFrontendService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AnyScaleFrontendService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum DeleteScalingPolicyX_Amz_Target { 'AnyScaleFrontendService.DeleteScalingPolicy' = 'AnyScaleFrontendService.DeleteScalingPolicy' }

	export enum DeleteScheduledActionX_Amz_Target { 'AnyScaleFrontendService.DeleteScheduledAction' = 'AnyScaleFrontendService.DeleteScheduledAction' }

	export enum DeregisterScalableTargetX_Amz_Target { 'AnyScaleFrontendService.DeregisterScalableTarget' = 'AnyScaleFrontendService.DeregisterScalableTarget' }

	export enum DescribeScalableTargetsX_Amz_Target { 'AnyScaleFrontendService.DescribeScalableTargets' = 'AnyScaleFrontendService.DescribeScalableTargets' }

	export enum DescribeScalingActivitiesX_Amz_Target { 'AnyScaleFrontendService.DescribeScalingActivities' = 'AnyScaleFrontendService.DescribeScalingActivities' }

	export enum DescribeScalingPoliciesX_Amz_Target { 'AnyScaleFrontendService.DescribeScalingPolicies' = 'AnyScaleFrontendService.DescribeScalingPolicies' }

	export enum DescribeScheduledActionsX_Amz_Target { 'AnyScaleFrontendService.DescribeScheduledActions' = 'AnyScaleFrontendService.DescribeScheduledActions' }

	export enum ListTagsForResourceX_Amz_Target { 'AnyScaleFrontendService.ListTagsForResource' = 'AnyScaleFrontendService.ListTagsForResource' }

	export enum PutScalingPolicyX_Amz_Target { 'AnyScaleFrontendService.PutScalingPolicy' = 'AnyScaleFrontendService.PutScalingPolicy' }

	export enum PutScheduledActionX_Amz_Target { 'AnyScaleFrontendService.PutScheduledAction' = 'AnyScaleFrontendService.PutScheduledAction' }

	export enum RegisterScalableTargetX_Amz_Target { 'AnyScaleFrontendService.RegisterScalableTarget' = 'AnyScaleFrontendService.RegisterScalableTarget' }

	export enum TagResourceX_Amz_Target { 'AnyScaleFrontendService.TagResource' = 'AnyScaleFrontendService.TagResource' }

	export enum UntagResourceX_Amz_Target { 'AnyScaleFrontendService.UntagResource' = 'AnyScaleFrontendService.UntagResource' }

}

