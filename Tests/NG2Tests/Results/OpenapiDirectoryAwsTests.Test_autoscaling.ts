import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface ResourceContentionFault {
	}

	export interface ServiceLinkedRoleFailure {
	}

	export interface AttachLoadBalancerTargetGroupsResultType {
	}

	export interface AttachLoadBalancersResultType {
	}

	export interface BatchDeleteScheduledActionAnswer {
		FailedScheduledActions?: Array<FailedScheduledUpdateGroupActionRequest>;
	}


	/** Describes a scheduled action that could not be created, updated, or deleted. */
	export interface FailedScheduledUpdateGroupActionRequest {
		ScheduledActionName: string;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	export interface BatchPutScheduledUpdateGroupActionAnswer {
		FailedScheduledUpdateGroupActions?: Array<FailedScheduledUpdateGroupActionRequest>;
	}


	/** <p>Describes information used for one or more scheduled scaling action updates in a <a>BatchPutScheduledUpdateGroupAction</a> operation.</p> <p>When updating a scheduled scaling action, all optional parameters are left unchanged if not specified.</p> */
	export interface ScheduledUpdateGroupActionRequest {
		ScheduledActionName: string;
		StartTime?: Date;
		EndTime?: Date;
		Recurrence?: string;
		MinSize?: number;
		MaxSize?: number;
		DesiredCapacity?: number;
	}

	export interface AlreadyExistsFault {
	}

	export interface LimitExceededFault {
	}

	export interface CompleteLifecycleActionAnswer {
	}


	/** <p>Describes a launch template and overrides.</p> <p>The overrides are used to override the instance type specified by the launch template with multiple instance types that can be used to launch On-Demand Instances and Spot Instances.</p> <p>When you update the launch template or overrides, existing Amazon EC2 instances continue to run. When scale out occurs, Amazon EC2 Auto Scaling launches instances to match the new settings. When scale in occurs, Amazon EC2 Auto Scaling terminates instances according to the group's termination policies.</p> */
	export interface LaunchTemplate {

		/** <p>Describes the Amazon EC2 launch template and the launch template version that can be used by an Auto Scaling group to configure Amazon EC2 instances.</p> <p>The launch template that is specified must be configured for use with an Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html">Creating a Launch Template for an Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
		LaunchTemplateSpecification?: LaunchTemplateSpecification;
		Overrides?: Array<LaunchTemplateOverrides>;
	}


	/** <p>Describes the Amazon EC2 launch template and the launch template version that can be used by an Auto Scaling group to configure Amazon EC2 instances.</p> <p>The launch template that is specified must be configured for use with an Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html">Creating a Launch Template for an Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface LaunchTemplateSpecification {
		LaunchTemplateId?: string;
		LaunchTemplateName?: string;
		Version?: string;
	}


	/** <p>Describes an override for a launch template. Currently, the only supported override is instance type.</p> <p>The maximum number of instance type overrides that can be associated with an Auto Scaling group is 20.</p> */
	export interface LaunchTemplateOverrides {
		InstanceType?: string;
		WeightedCapacity?: string;
	}


	/** <p>Describes an instances distribution for an Auto Scaling group with <a>MixedInstancesPolicy</a>.</p> <p>The instances distribution specifies the distribution of On-Demand Instances and Spot Instances, the maximum price to pay for Spot Instances, and how the Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacity.</p> <p>When you update <code>SpotAllocationStrategy</code>, <code>SpotInstancePools</code>, or <code>SpotMaxPrice</code>, this update action does not deploy any changes across the running Amazon EC2 instances in the group. Your existing Spot Instances continue to run as long as the maximum price for those instances is higher than the current Spot price. When scale out occurs, Amazon EC2 Auto Scaling launches instances based on the new settings. When scale in occurs, Amazon EC2 Auto Scaling terminates instances according to the group's termination policies.</p> */
	export interface InstancesDistribution {
		OnDemandAllocationStrategy?: string;
		OnDemandBaseCapacity?: number;
		OnDemandPercentageAboveBaseCapacity?: number;
		SpotAllocationStrategy?: string;
		SpotInstancePools?: number;
		SpotMaxPrice?: string;
	}


	/** <p>Describes information used to specify a lifecycle hook for an Auto Scaling group.</p> <p>A lifecycle hook tells Amazon EC2 Auto Scaling to perform an action on an instance when the instance launches (before it is put into service) or as the instance terminates (before it is fully terminated).</p> <p>This step is a part of the procedure for creating a lifecycle hook for an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p> <b>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</b> </p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.</p> </li> <li> <p>If you finish before the timeout period ends, complete the lifecycle action.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling Lifecycle Hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface LifecycleHookSpecification {
		LifecycleHookName: string;
		LifecycleTransition: string;
		NotificationMetadata?: string;
		HeartbeatTimeout?: number;
		DefaultResult?: string;
		NotificationTargetARN?: string;
		RoleARN?: string;
	}


	/** Describes a tag for an Auto Scaling group. */
	export interface Tag {
		ResourceId?: string;
		ResourceType?: string;
		Key: string;
		Value?: string;
		PropagateAtLaunch?: boolean;
	}


	/** Describes a block device mapping. */
	export interface BlockDeviceMapping {
		VirtualName?: string;
		DeviceName: string;

		/** Describes information used to set up an Amazon EBS volume specified in a block device mapping. */
		Ebs?: Ebs;
		NoDevice?: boolean;
	}


	/** Describes information used to set up an Amazon EBS volume specified in a block device mapping. */
	export interface Ebs {
		SnapshotId?: string;
		VolumeSize?: number;
		VolumeType?: string;
		DeleteOnTermination?: boolean;
		Iops?: number;
		Encrypted?: boolean;
	}

	export interface ResourceInUseFault {
	}

	export interface ScalingActivityInProgressFault {
	}

	export interface DeleteLifecycleHookAnswer {
	}

	export interface DescribeAccountLimitsAnswer {
		MaxNumberOfAutoScalingGroups?: number;
		MaxNumberOfLaunchConfigurations?: number;
		NumberOfAutoScalingGroups?: number;
		NumberOfLaunchConfigurations?: number;
	}

	export interface DescribeAdjustmentTypesAnswer {
		AdjustmentTypes?: Array<AdjustmentType>;
	}


	/** Describes a policy adjustment type. */
	export interface AdjustmentType {
		AdjustmentType1?: string;
	}

	export interface AutoScalingGroupsType {
		AutoScalingGroups: Array<AutoScalingGroup>;
		NextToken?: string;
	}


	/** Describes an Auto Scaling group. */
	export interface AutoScalingGroup {
		AutoScalingGroupName: string;
		AutoScalingGroupARN?: string;
		LaunchConfigurationName?: string;

		/** <p>Describes the Amazon EC2 launch template and the launch template version that can be used by an Auto Scaling group to configure Amazon EC2 instances.</p> <p>The launch template that is specified must be configured for use with an Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html">Creating a Launch Template for an Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
		LaunchTemplate?: LaunchTemplateSpecification;

		/** <p>Describes a mixed instances policy for an Auto Scaling group. With mixed instances, your Auto Scaling group can provision a combination of On-Demand Instances and Spot Instances across multiple instance types. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-purchase-options.html">Auto Scaling Groups with Multiple Instance Types and Purchase Options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can create a mixed instances policy for a new Auto Scaling group, or you can create it for an existing group by updating the group to specify <code>MixedInstancesPolicy</code> as the top-level parameter instead of a launch configuration or template. For more information, see <a>CreateAutoScalingGroup</a> and <a>UpdateAutoScalingGroup</a>.</p> */
		MixedInstancesPolicy?: MixedInstancesPolicy;
		MinSize: number;
		MaxSize: number;
		DesiredCapacity: number;
		DefaultCooldown: number;
		AvailabilityZones: Array<string>;
		LoadBalancerNames?: Array<string>;
		TargetGroupARNs?: Array<string>;
		HealthCheckType: string;
		HealthCheckGracePeriod?: number;
		Instances?: Array<Instance>;
		CreatedTime: Date;
		SuspendedProcesses?: Array<SuspendedProcess>;
		PlacementGroup?: string;
		VPCZoneIdentifier?: string;
		EnabledMetrics?: Array<EnabledMetric>;
		Status?: string;
		Tags?: Array<TagDescription>;
		TerminationPolicies?: Array<string>;
		NewInstancesProtectedFromScaleIn?: boolean;
		ServiceLinkedRoleARN?: string;
		MaxInstanceLifetime?: number;
	}


	/** <p>Describes a mixed instances policy for an Auto Scaling group. With mixed instances, your Auto Scaling group can provision a combination of On-Demand Instances and Spot Instances across multiple instance types. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-purchase-options.html">Auto Scaling Groups with Multiple Instance Types and Purchase Options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can create a mixed instances policy for a new Auto Scaling group, or you can create it for an existing group by updating the group to specify <code>MixedInstancesPolicy</code> as the top-level parameter instead of a launch configuration or template. For more information, see <a>CreateAutoScalingGroup</a> and <a>UpdateAutoScalingGroup</a>.</p> */
	export interface MixedInstancesPolicy {

		/** <p>Describes a launch template and overrides.</p> <p>The overrides are used to override the instance type specified by the launch template with multiple instance types that can be used to launch On-Demand Instances and Spot Instances.</p> <p>When you update the launch template or overrides, existing Amazon EC2 instances continue to run. When scale out occurs, Amazon EC2 Auto Scaling launches instances to match the new settings. When scale in occurs, Amazon EC2 Auto Scaling terminates instances according to the group's termination policies.</p> */
		LaunchTemplate?: LaunchTemplate;

		/** <p>Describes an instances distribution for an Auto Scaling group with <a>MixedInstancesPolicy</a>.</p> <p>The instances distribution specifies the distribution of On-Demand Instances and Spot Instances, the maximum price to pay for Spot Instances, and how the Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacity.</p> <p>When you update <code>SpotAllocationStrategy</code>, <code>SpotInstancePools</code>, or <code>SpotMaxPrice</code>, this update action does not deploy any changes across the running Amazon EC2 instances in the group. Your existing Spot Instances continue to run as long as the maximum price for those instances is higher than the current Spot price. When scale out occurs, Amazon EC2 Auto Scaling launches instances based on the new settings. When scale in occurs, Amazon EC2 Auto Scaling terminates instances according to the group's termination policies.</p> */
		InstancesDistribution?: InstancesDistribution;
	}


	/** Describes an EC2 instance. */
	export interface Instance {
		InstanceId: string;
		InstanceType?: string;
		AvailabilityZone: string;
		LifecycleState: InstanceLifecycleState;
		HealthStatus: string;
		LaunchConfigurationName?: string;

		/** <p>Describes the Amazon EC2 launch template and the launch template version that can be used by an Auto Scaling group to configure Amazon EC2 instances.</p> <p>The launch template that is specified must be configured for use with an Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html">Creating a Launch Template for an Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
		LaunchTemplate?: LaunchTemplateSpecification;
		ProtectedFromScaleIn: boolean;
		WeightedCapacity?: string;
	}

	export enum InstanceLifecycleState { Pending = 0, PendingWait = 1, PendingProceed = 2, Quarantined = 3, InService = 4, Terminating = 5, TerminatingWait = 6, TerminatingProceed = 7, Terminated = 8, Detaching = 9, Detached = 10, EnteringStandby = 11, Standby = 12 }


	/** <p>Describes an automatic scaling process that has been suspended.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types">Scaling Processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface SuspendedProcess {
		ProcessName?: string;
		SuspensionReason?: string;
	}


	/** Describes an enabled metric. */
	export interface EnabledMetric {
		Metric?: string;
		Granularity?: string;
	}


	/** Describes a tag for an Auto Scaling group. */
	export interface TagDescription {
		ResourceId?: string;
		ResourceType?: string;
		Key?: string;
		Value?: string;
		PropagateAtLaunch?: boolean;
	}

	export interface InvalidNextToken {
	}

	export interface AutoScalingInstancesType {
		AutoScalingInstances?: Array<AutoScalingInstanceDetails>;
		NextToken?: string;
	}


	/** Describes an EC2 instance associated with an Auto Scaling group. */
	export interface AutoScalingInstanceDetails {
		InstanceId: string;
		InstanceType?: string;
		AutoScalingGroupName: string;
		AvailabilityZone: string;
		LifecycleState: string;
		HealthStatus: string;
		LaunchConfigurationName?: string;

		/** <p>Describes the Amazon EC2 launch template and the launch template version that can be used by an Auto Scaling group to configure Amazon EC2 instances.</p> <p>The launch template that is specified must be configured for use with an Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html">Creating a Launch Template for an Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
		LaunchTemplate?: LaunchTemplateSpecification;
		ProtectedFromScaleIn: boolean;
		WeightedCapacity?: string;
	}

	export interface DescribeAutoScalingNotificationTypesAnswer {
		AutoScalingNotificationTypes?: Array<string>;
	}

	export interface LaunchConfigurationsType {
		LaunchConfigurations: Array<LaunchConfiguration>;
		NextToken?: string;
	}


	/** Describes a launch configuration. */
	export interface LaunchConfiguration {
		LaunchConfigurationName: string;
		LaunchConfigurationARN?: string;
		ImageId: string;
		KeyName?: string;
		SecurityGroups?: Array<string>;
		ClassicLinkVPCId?: string;
		ClassicLinkVPCSecurityGroups?: Array<string>;
		UserData?: string;
		InstanceType: string;
		KernelId?: string;
		RamdiskId?: string;
		BlockDeviceMappings?: Array<BlockDeviceMapping>;

		/** Describes whether detailed monitoring is enabled for the Auto Scaling instances. */
		InstanceMonitoring?: InstanceMonitoring;
		SpotPrice?: string;
		IamInstanceProfile?: string;
		CreatedTime: Date;
		EbsOptimized?: boolean;
		AssociatePublicIpAddress?: boolean;
		PlacementTenancy?: string;
	}


	/** Describes whether detailed monitoring is enabled for the Auto Scaling instances. */
	export interface InstanceMonitoring {
		Enabled?: boolean;
	}

	export interface DescribeLifecycleHookTypesAnswer {
		LifecycleHookTypes?: Array<string>;
	}

	export interface DescribeLifecycleHooksAnswer {
		LifecycleHooks?: Array<LifecycleHook>;
	}


	/** Describes a lifecycle hook, which tells Amazon EC2 Auto Scaling that you want to perform an action whenever it launches instances or terminates instances. */
	export interface LifecycleHook {
		LifecycleHookName?: string;
		AutoScalingGroupName?: string;
		LifecycleTransition?: string;
		NotificationTargetARN?: string;
		RoleARN?: string;
		NotificationMetadata?: string;
		HeartbeatTimeout?: number;
		GlobalTimeout?: number;
		DefaultResult?: string;
	}

	export interface DescribeLoadBalancerTargetGroupsResponse {
		LoadBalancerTargetGroups?: Array<LoadBalancerTargetGroupState>;
		NextToken?: string;
	}


	/** <p>Describes the state of a target group.</p> <p>If you attach a target group to an existing Auto Scaling group, the initial state is <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling instances are registered with the target group. If Elastic Load Balancing health checks are enabled, the state transitions to <code>InService</code> after at least one Auto Scaling instance passes the health check. If EC2 health checks are enabled instead, the target group remains in the <code>Added</code> state.</p> */
	export interface LoadBalancerTargetGroupState {
		LoadBalancerTargetGroupARN?: string;
		State?: string;
	}

	export interface DescribeLoadBalancersResponse {
		LoadBalancers?: Array<LoadBalancerState>;
		NextToken?: string;
	}


	/** <p>Describes the state of a Classic Load Balancer.</p> <p>If you specify a load balancer when creating the Auto Scaling group, the state of the load balancer is <code>InService</code>.</p> <p>If you attach a load balancer to an existing Auto Scaling group, the initial state is <code>Adding</code>. The state transitions to <code>Added</code> after all instances in the group are registered with the load balancer. If Elastic Load Balancing health checks are enabled for the load balancer, the state transitions to <code>InService</code> after at least one instance in the group passes the health check. If EC2 health checks are enabled instead, the load balancer remains in the <code>Added</code> state.</p> */
	export interface LoadBalancerState {
		LoadBalancerName?: string;
		State?: string;
	}

	export interface DescribeMetricCollectionTypesAnswer {
		Metrics?: Array<MetricCollectionType>;
		Granularities?: Array<MetricGranularityType>;
	}


	/** Describes a metric. */
	export interface MetricCollectionType {
		Metric?: string;
	}


	/** Describes a granularity of a metric. */
	export interface MetricGranularityType {
		Granularity?: string;
	}

	export interface DescribeNotificationConfigurationsAnswer {
		NotificationConfigurations: Array<NotificationConfiguration>;
		NextToken?: string;
	}


	/** Describes a notification. */
	export interface NotificationConfiguration {
		AutoScalingGroupName?: string;
		TopicARN?: string;
		NotificationType?: string;
	}

	export interface PoliciesType {
		ScalingPolicies?: Array<ScalingPolicy>;
		NextToken?: string;
	}


	/** Describes a scaling policy. */
	export interface ScalingPolicy {
		AutoScalingGroupName?: string;
		PolicyName?: string;
		PolicyARN?: string;
		PolicyType?: string;
		AdjustmentType?: string;
		MinAdjustmentStep?: number;
		MinAdjustmentMagnitude?: number;
		ScalingAdjustment?: number;
		Cooldown?: number;
		StepAdjustments?: Array<StepAdjustment>;
		MetricAggregationType?: string;
		EstimatedInstanceWarmup?: number;
		Alarms?: Array<Alarm>;

		/** Represents a target tracking scaling policy configuration to use with Amazon EC2 Auto Scaling. */
		TargetTrackingConfiguration?: TargetTrackingConfiguration;
		Enabled?: boolean;
	}


	/** <p>Describes information used to create a step adjustment for a step scaling policy.</p> <p>For the following examples, suppose that you have an alarm with a breach threshold of 50:</p> <ul> <li> <p>To trigger the adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of 0 and an upper bound of 10.</p> </li> <li> <p>To trigger the adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of -10 and an upper bound of 0.</p> </li> </ul> <p>There are a few rules for the step adjustments for your step policy:</p> <ul> <li> <p>The ranges of your step adjustments can't overlap or have a gap.</p> </li> <li> <p>At most, one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.</p> </li> <li> <p>At most, one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.</p> </li> <li> <p>The upper and lower bound can't be null in the same step adjustment.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-steps">Step Adjustments</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface StepAdjustment {
		MetricIntervalLowerBound?: number;
		MetricIntervalUpperBound?: number;
		ScalingAdjustment: number;
	}


	/** Describes an alarm. */
	export interface Alarm {
		AlarmName?: string;
		AlarmARN?: string;
	}


	/** Represents a target tracking scaling policy configuration to use with Amazon EC2 Auto Scaling. */
	export interface TargetTrackingConfiguration {

		/** Represents a predefined metric for a target tracking scaling policy to use with Amazon EC2 Auto Scaling. */
		PredefinedMetricSpecification?: PredefinedMetricSpecification;

		/** <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases.</p> </li> </ul> <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a>.</p> */
		CustomizedMetricSpecification?: CustomizedMetricSpecification;
		TargetValue: number;
		DisableScaleIn?: boolean;
	}


	/** Represents a predefined metric for a target tracking scaling policy to use with Amazon EC2 Auto Scaling. */
	export interface PredefinedMetricSpecification {
		PredefinedMetricType: PredefinedMetricSpecificationPredefinedMetricType;
		ResourceLabel?: string;
	}

	export enum PredefinedMetricSpecificationPredefinedMetricType { ASGAverageCPUUtilization = 0, ASGAverageNetworkIn = 1, ASGAverageNetworkOut = 2, ALBRequestCountPerTarget = 3 }


	/** <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases.</p> </li> </ul> <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a>.</p> */
	export interface CustomizedMetricSpecification {
		MetricName: string;
		Namespace: string;
		Dimensions?: Array<MetricDimension>;
		Statistic: CustomizedMetricSpecificationStatistic;
		Unit?: string;
	}


	/** Describes the dimension of a metric. */
	export interface MetricDimension {
		Name: string;
		Value: string;
	}

	export enum CustomizedMetricSpecificationStatistic { Average = 0, Minimum = 1, Maximum = 2, SampleCount = 3, Sum = 4 }

	export interface ActivitiesType {
		Activities: Array<Activity>;
		NextToken?: string;
	}


	/** Describes scaling activity, which is a long-running process that represents a change to your Auto Scaling group, such as changing its size or replacing an instance. */
	export interface Activity {
		ActivityId: string;
		AutoScalingGroupName: string;
		Description?: string;
		Cause: string;
		StartTime: Date;
		EndTime?: Date;
		StatusCode: ActivityStatusCode;
		StatusMessage?: string;
		Progress?: number;
		Details?: string;
	}

	export enum ActivityStatusCode { PendingSpotBidPlacement = 0, WaitingForSpotInstanceRequestId = 1, WaitingForSpotInstanceId = 2, WaitingForInstanceId = 3, PreInService = 4, InProgress = 5, WaitingForELBConnectionDraining = 6, MidLifecycleAction = 7, WaitingForInstanceWarmup = 8, Successful = 9, Failed = 10, Cancelled = 11 }

	export interface ProcessesType {
		Processes?: Array<ProcessType>;
	}


	/** <p>Describes a process type.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types">Scaling Processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface ProcessType {
		ProcessName: string;
	}

	export interface ScheduledActionsType {
		ScheduledUpdateGroupActions?: Array<ScheduledUpdateGroupAction>;
		NextToken?: string;
	}


	/** Describes a scheduled scaling action. */
	export interface ScheduledUpdateGroupAction {
		AutoScalingGroupName?: string;
		ScheduledActionName?: string;
		ScheduledActionARN?: string;
		Time?: Date;
		StartTime?: Date;
		EndTime?: Date;
		Recurrence?: string;
		MinSize?: number;
		MaxSize?: number;
		DesiredCapacity?: number;
	}

	export interface TagsType {
		Tags?: Array<TagDescription>;
		NextToken?: string;
	}


	/** <p>Describes a filter that is used to return a more specific list of results when describing tags.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html">Tagging Auto Scaling Groups and Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
	export interface Filter {
		Name?: string;
		Values?: Array<string>;
	}

	export interface DescribeTerminationPolicyTypesAnswer {
		TerminationPolicyTypes?: Array<string>;
	}

	export interface DetachInstancesAnswer {
		Activities?: Array<Activity>;
	}

	export interface DetachLoadBalancerTargetGroupsResultType {
	}

	export interface DetachLoadBalancersResultType {
	}

	export interface EnterStandbyAnswer {
		Activities?: Array<Activity>;
	}

	export interface ExitStandbyAnswer {
		Activities?: Array<Activity>;
	}

	export interface PutLifecycleHookAnswer {
	}


	/** Contains the output of PutScalingPolicy. */
	export interface PolicyARNType {
		PolicyARN?: string;
		Alarms?: Array<Alarm>;
	}

	export interface RecordLifecycleActionHeartbeatAnswer {
	}

	export interface SetInstanceProtectionAnswer {
	}

	export interface ActivityType {

		/** Describes scaling activity, which is a long-running process that represents a change to your Auto Scaling group, such as changing its size or replacing an instance. */
		Activity?: Activity;
	}

	export enum ScalingActivityStatusCode { PendingSpotBidPlacement = 0, WaitingForSpotInstanceRequestId = 1, WaitingForSpotInstanceId = 2, WaitingForInstanceId = 3, PreInService = 4, InProgress = 5, WaitingForELBConnectionDraining = 6, MidLifecycleAction = 7, WaitingForInstanceWarmup = 8, Successful = 9, Failed = 10, Cancelled = 11 }

	export interface AttachInstancesQuery {
		InstanceIds?: Array<string>;
		AutoScalingGroupName: string;
	}

	export interface AttachLoadBalancerTargetGroupsType {
		AutoScalingGroupName: string;
		TargetGroupARNs: Array<string>;
	}

	export interface AttachLoadBalancersType {
		AutoScalingGroupName: string;
		LoadBalancerNames: Array<string>;
	}

	export interface AutoScalingGroupNamesType {
		AutoScalingGroupNames?: Array<string>;
		NextToken?: string;
		MaxRecords?: number;
	}

	export interface BatchDeleteScheduledActionType {
		AutoScalingGroupName: string;
		ScheduledActionNames: Array<string>;
	}

	export interface BatchPutScheduledUpdateGroupActionType {
		AutoScalingGroupName: string;
		ScheduledUpdateGroupActions: Array<ScheduledUpdateGroupActionRequest>;
	}

	export interface CompleteLifecycleActionType {
		LifecycleHookName: string;
		AutoScalingGroupName: string;
		LifecycleActionToken?: string;
		LifecycleActionResult: string;
		InstanceId?: string;
	}

	export interface CreateAutoScalingGroupType {
		AutoScalingGroupName: string;
		LaunchConfigurationName?: string;

		/** <p>Describes the Amazon EC2 launch template and the launch template version that can be used by an Auto Scaling group to configure Amazon EC2 instances.</p> <p>The launch template that is specified must be configured for use with an Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html">Creating a Launch Template for an Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
		LaunchTemplate?: LaunchTemplateSpecification;

		/** <p>Describes a mixed instances policy for an Auto Scaling group. With mixed instances, your Auto Scaling group can provision a combination of On-Demand Instances and Spot Instances across multiple instance types. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-purchase-options.html">Auto Scaling Groups with Multiple Instance Types and Purchase Options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can create a mixed instances policy for a new Auto Scaling group, or you can create it for an existing group by updating the group to specify <code>MixedInstancesPolicy</code> as the top-level parameter instead of a launch configuration or template. For more information, see <a>CreateAutoScalingGroup</a> and <a>UpdateAutoScalingGroup</a>.</p> */
		MixedInstancesPolicy?: MixedInstancesPolicy;
		InstanceId?: string;
		MinSize: number;
		MaxSize: number;
		DesiredCapacity?: number;
		DefaultCooldown?: number;
		AvailabilityZones?: Array<string>;
		LoadBalancerNames?: Array<string>;
		TargetGroupARNs?: Array<string>;
		HealthCheckType?: string;
		HealthCheckGracePeriod?: number;
		PlacementGroup?: string;
		VPCZoneIdentifier?: string;
		TerminationPolicies?: Array<string>;
		NewInstancesProtectedFromScaleIn?: boolean;
		LifecycleHookSpecificationList?: Array<LifecycleHookSpecification>;
		Tags?: Array<Tag>;
		ServiceLinkedRoleARN?: string;
		MaxInstanceLifetime?: number;
	}

	export interface CreateLaunchConfigurationType {
		LaunchConfigurationName: string;
		ImageId?: string;
		KeyName?: string;
		SecurityGroups?: Array<string>;
		ClassicLinkVPCId?: string;
		ClassicLinkVPCSecurityGroups?: Array<string>;
		UserData?: string;
		InstanceId?: string;
		InstanceType?: string;
		KernelId?: string;
		RamdiskId?: string;
		BlockDeviceMappings?: Array<BlockDeviceMapping>;

		/** Describes whether detailed monitoring is enabled for the Auto Scaling instances. */
		InstanceMonitoring?: InstanceMonitoring;
		SpotPrice?: string;
		IamInstanceProfile?: string;
		EbsOptimized?: boolean;
		AssociatePublicIpAddress?: boolean;
		PlacementTenancy?: string;
	}

	export interface CreateOrUpdateTagsType {
		Tags: Array<Tag>;
	}

	export enum MetricStatistic { Average = 0, Minimum = 1, Maximum = 2, SampleCount = 3, Sum = 4 }

	export interface DeleteAutoScalingGroupType {
		AutoScalingGroupName: string;
		ForceDelete?: boolean;
	}

	export interface DeleteLifecycleHookType {
		LifecycleHookName: string;
		AutoScalingGroupName: string;
	}

	export interface DeleteNotificationConfigurationType {
		AutoScalingGroupName: string;
		TopicARN: string;
	}

	export interface DeletePolicyType {
		AutoScalingGroupName?: string;
		PolicyName: string;
	}

	export interface DeleteScheduledActionType {
		AutoScalingGroupName: string;
		ScheduledActionName: string;
	}

	export interface DeleteTagsType {
		Tags: Array<Tag>;
	}

	export interface DescribeAutoScalingInstancesType {
		InstanceIds?: Array<string>;
		MaxRecords?: number;
		NextToken?: string;
	}

	export interface DescribeLifecycleHooksType {
		AutoScalingGroupName: string;
		LifecycleHookNames?: Array<string>;
	}

	export interface DescribeLoadBalancerTargetGroupsRequest {
		AutoScalingGroupName: string;
		NextToken?: string;
		MaxRecords?: number;
	}

	export interface DescribeLoadBalancersRequest {
		AutoScalingGroupName: string;
		NextToken?: string;
		MaxRecords?: number;
	}

	export interface DescribeNotificationConfigurationsType {
		AutoScalingGroupNames?: Array<string>;
		NextToken?: string;
		MaxRecords?: number;
	}

	export interface DescribePoliciesType {
		AutoScalingGroupName?: string;
		PolicyNames?: Array<string>;
		PolicyTypes?: Array<string>;
		NextToken?: string;
		MaxRecords?: number;
	}

	export interface DescribeScalingActivitiesType {
		ActivityIds?: Array<string>;
		AutoScalingGroupName?: string;
		MaxRecords?: number;
		NextToken?: string;
	}

	export interface DescribeScheduledActionsType {
		AutoScalingGroupName?: string;
		ScheduledActionNames?: Array<string>;
		StartTime?: Date;
		EndTime?: Date;
		NextToken?: string;
		MaxRecords?: number;
	}

	export interface DescribeTagsType {
		Filters?: Array<Filter>;
		NextToken?: string;
		MaxRecords?: number;
	}

	export interface DetachInstancesQuery {
		InstanceIds?: Array<string>;
		AutoScalingGroupName: string;
		ShouldDecrementDesiredCapacity: boolean;
	}

	export interface DetachLoadBalancerTargetGroupsType {
		AutoScalingGroupName: string;
		TargetGroupARNs: Array<string>;
	}

	export interface DetachLoadBalancersType {
		AutoScalingGroupName: string;
		LoadBalancerNames: Array<string>;
	}

	export interface DisableMetricsCollectionQuery {
		AutoScalingGroupName: string;
		Metrics?: Array<string>;
	}

	export interface EnableMetricsCollectionQuery {
		AutoScalingGroupName: string;
		Metrics?: Array<string>;
		Granularity: string;
	}

	export interface EnterStandbyQuery {
		InstanceIds?: Array<string>;
		AutoScalingGroupName: string;
		ShouldDecrementDesiredCapacity: boolean;
	}

	export interface ExecutePolicyType {
		AutoScalingGroupName?: string;
		PolicyName: string;
		HonorCooldown?: boolean;
		MetricValue?: number;
		BreachThreshold?: number;
	}

	export interface ExitStandbyQuery {
		InstanceIds?: Array<string>;
		AutoScalingGroupName: string;
	}

	export enum LifecycleState { Pending = 0, PendingWait = 1, PendingProceed = 2, Quarantined = 3, InService = 4, Terminating = 5, TerminatingWait = 6, TerminatingProceed = 7, Terminated = 8, Detaching = 9, Detached = 10, EnteringStandby = 11, Standby = 12 }

	export interface LaunchConfigurationNameType {
		LaunchConfigurationName: string;
	}

	export interface LaunchConfigurationNamesType {
		LaunchConfigurationNames?: Array<string>;
		NextToken?: string;
		MaxRecords?: number;
	}

	export enum MetricType { ASGAverageCPUUtilization = 0, ASGAverageNetworkIn = 1, ASGAverageNetworkOut = 2, ALBRequestCountPerTarget = 3 }

	export interface PutLifecycleHookType {
		LifecycleHookName: string;
		AutoScalingGroupName: string;
		LifecycleTransition?: string;
		RoleARN?: string;
		NotificationTargetARN?: string;
		NotificationMetadata?: string;
		HeartbeatTimeout?: number;
		DefaultResult?: string;
	}

	export interface PutNotificationConfigurationType {
		AutoScalingGroupName: string;
		TopicARN: string;
		NotificationTypes: Array<string>;
	}

	export interface PutScalingPolicyType {
		AutoScalingGroupName: string;
		PolicyName: string;
		PolicyType?: string;
		AdjustmentType?: string;
		MinAdjustmentStep?: number;
		MinAdjustmentMagnitude?: number;
		ScalingAdjustment?: number;
		Cooldown?: number;
		MetricAggregationType?: string;
		StepAdjustments?: Array<StepAdjustment>;
		EstimatedInstanceWarmup?: number;

		/** Represents a target tracking scaling policy configuration to use with Amazon EC2 Auto Scaling. */
		TargetTrackingConfiguration?: TargetTrackingConfiguration;
		Enabled?: boolean;
	}

	export interface PutScheduledUpdateGroupActionType {
		AutoScalingGroupName: string;
		ScheduledActionName: string;
		Time?: Date;
		StartTime?: Date;
		EndTime?: Date;
		Recurrence?: string;
		MinSize?: number;
		MaxSize?: number;
		DesiredCapacity?: number;
	}

	export interface RecordLifecycleActionHeartbeatType {
		LifecycleHookName: string;
		AutoScalingGroupName: string;
		LifecycleActionToken?: string;
		InstanceId?: string;
	}

	export interface ScalingProcessQuery {
		AutoScalingGroupName: string;
		ScalingProcesses?: Array<string>;
	}

	export interface SetDesiredCapacityType {
		AutoScalingGroupName: string;
		DesiredCapacity: number;
		HonorCooldown?: boolean;
	}

	export interface SetInstanceHealthQuery {
		InstanceId: string;
		HealthStatus: string;
		ShouldRespectGracePeriod?: boolean;
	}

	export interface SetInstanceProtectionQuery {
		InstanceIds: Array<string>;
		AutoScalingGroupName: string;
		ProtectedFromScaleIn: boolean;
	}

	export interface TerminateInstanceInAutoScalingGroupType {
		InstanceId: string;
		ShouldDecrementDesiredCapacity: boolean;
	}

	export interface UpdateAutoScalingGroupType {
		AutoScalingGroupName: string;
		LaunchConfigurationName?: string;

		/** <p>Describes the Amazon EC2 launch template and the launch template version that can be used by an Auto Scaling group to configure Amazon EC2 instances.</p> <p>The launch template that is specified must be configured for use with an Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html">Creating a Launch Template for an Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> */
		LaunchTemplate?: LaunchTemplateSpecification;

		/** <p>Describes a mixed instances policy for an Auto Scaling group. With mixed instances, your Auto Scaling group can provision a combination of On-Demand Instances and Spot Instances across multiple instance types. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-purchase-options.html">Auto Scaling Groups with Multiple Instance Types and Purchase Options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can create a mixed instances policy for a new Auto Scaling group, or you can create it for an existing group by updating the group to specify <code>MixedInstancesPolicy</code> as the top-level parameter instead of a launch configuration or template. For more information, see <a>CreateAutoScalingGroup</a> and <a>UpdateAutoScalingGroup</a>.</p> */
		MixedInstancesPolicy?: MixedInstancesPolicy;
		MinSize?: number;
		MaxSize?: number;
		DesiredCapacity?: number;
		DefaultCooldown?: number;
		AvailabilityZones?: Array<string>;
		HealthCheckType?: string;
		HealthCheckGracePeriod?: number;
		PlacementGroup?: string;
		VPCZoneIdentifier?: string;
		TerminationPolicies?: Array<string>;
		NewInstancesProtectedFromScaleIn?: boolean;
		ServiceLinkedRoleARN?: string;
		MaxInstanceLifetime?: number;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Attaches one or more EC2 instances to the specified Auto Scaling group.</p> <p>When you attach instances, Amazon EC2 Auto Scaling increases the desired capacity of the group by the number of instances being attached. If the number of instances being attached plus the desired capacity of the group exceeds the maximum size of the group, the operation fails.</p> <p>If there is a Classic Load Balancer attached to your Auto Scaling group, the instances are also registered with the load balancer. If there are target groups attached to your Auto Scaling group, the instances are also registered with the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-instance-asg.html">Attach EC2 Instances to Your Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=AttachInstances
		 * @param {Array<string>} InstanceIds The IDs of the instances. You can specify up to 20 instances.
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @return {void} Success
		 */
		GET_AttachInstances(InstanceIds: Array<string>, AutoScalingGroupName: string, Action: GET_AttachInstancesAction, Version: GET_AttachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AttachInstances?' + InstanceIds.map(z => `InstanceIds=${encodeURIComponent(z)}`).join('&') + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Attaches one or more target groups to the specified Auto Scaling group.</p> <p>To describe the target groups for an Auto Scaling group, call the <a>DescribeLoadBalancerTargetGroups</a> API. To detach the target group from the Auto Scaling group, call the <a>DetachLoadBalancerTargetGroups</a> API.</p> <p>With Application Load Balancers and Network Load Balancers, instances are registered as targets with a target group. With Classic Load Balancers, instances are registered with the load balancer. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-load-balancer-asg.html">Attaching a Load Balancer to Your Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=AttachLoadBalancerTargetGroups
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {Array<string>} TargetGroupARNs The Amazon Resource Names (ARN) of the target groups. You can specify up to 10 target groups.
		 * @return {void} Success
		 */
		GET_AttachLoadBalancerTargetGroups(AutoScalingGroupName: string, TargetGroupARNs: Array<string>, Action: GET_AttachLoadBalancerTargetGroupsAction, Version: GET_AttachLoadBalancerTargetGroupsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AttachLoadBalancerTargetGroups?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + TargetGroupARNs.map(z => `TargetGroupARNs=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <note> <p>To attach an Application Load Balancer or a Network Load Balancer, use the <a>AttachLoadBalancerTargetGroups</a> API operation instead.</p> </note> <p>Attaches one or more Classic Load Balancers to the specified Auto Scaling group. Amazon EC2 Auto Scaling registers the running instances with these Classic Load Balancers.</p> <p>To describe the load balancers for an Auto Scaling group, call the <a>DescribeLoadBalancers</a> API. To detach the load balancer from the Auto Scaling group, call the <a>DetachLoadBalancers</a> API.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/attach-load-balancer-asg.html">Attaching a Load Balancer to Your Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=AttachLoadBalancers
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {Array<string>} LoadBalancerNames The names of the load balancers. You can specify up to 10 load balancers.
		 * @return {void} Success
		 */
		GET_AttachLoadBalancers(AutoScalingGroupName: string, LoadBalancerNames: Array<string>, Action: GET_AttachLoadBalancersAction, Version: GET_AttachLoadBalancersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=AttachLoadBalancers?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + LoadBalancerNames.map(z => `LoadBalancerNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes one or more scheduled actions for the specified Auto Scaling group.
		 * Get #Action=BatchDeleteScheduledAction
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {Array<string>} ScheduledActionNames The names of the scheduled actions to delete. The maximum number allowed is 50. 
		 * @return {void} Success
		 */
		GET_BatchDeleteScheduledAction(AutoScalingGroupName: string, ScheduledActionNames: Array<string>, Action: GET_BatchDeleteScheduledActionAction, Version: GET_BatchDeleteScheduledActionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=BatchDeleteScheduledAction?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + ScheduledActionNames.map(z => `ScheduledActionNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates or updates one or more scheduled scaling actions for an Auto Scaling group. If you leave a parameter unspecified when updating a scheduled scaling action, the corresponding value remains unchanged.
		 * Get #Action=BatchPutScheduledUpdateGroupAction
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {Array<ScheduledUpdateGroupActionRequest>} ScheduledUpdateGroupActions One or more scheduled actions. The maximum number allowed is 50.
		 * @return {void} Success
		 */
		GET_BatchPutScheduledUpdateGroupAction(AutoScalingGroupName: string, ScheduledUpdateGroupActions: Array<ScheduledUpdateGroupActionRequest>, Action: GET_BatchPutScheduledUpdateGroupActionAction, Version: GET_BatchPutScheduledUpdateGroupActionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=BatchPutScheduledUpdateGroupAction?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + ScheduledUpdateGroupActions.map(z => `ScheduledUpdateGroupActions=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Completes the lifecycle action for the specified token or instance with the specified result.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.</p> </li> <li> <p> <b>If you finish before the timeout period ends, complete the lifecycle action.</b> </p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling Lifecycle Hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=CompleteLifecycleAction
		 * @param {string} LifecycleHookName The name of the lifecycle hook.
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {string} LifecycleActionToken A universally unique identifier (UUID) that identifies a specific lifecycle action associated with an instance. Amazon EC2 Auto Scaling sends this token to the notification target you specified when you created the lifecycle hook.
		 * @param {string} LifecycleActionResult The action for the group to take. This parameter can be either <code>CONTINUE</code> or <code>ABANDON</code>.
		 * @param {string} InstanceId The ID of the instance.
		 * @return {void} Success
		 */
		GET_CompleteLifecycleAction(LifecycleHookName: string, AutoScalingGroupName: string, LifecycleActionToken: string, LifecycleActionResult: string, InstanceId: string, Action: GET_CompleteLifecycleActionAction, Version: GET_CompleteLifecycleActionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CompleteLifecycleAction?LifecycleHookName=' + (LifecycleHookName == null ? '' : encodeURIComponent(LifecycleHookName)) + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&LifecycleActionToken=' + (LifecycleActionToken == null ? '' : encodeURIComponent(LifecycleActionToken)) + '&LifecycleActionResult=' + (LifecycleActionResult == null ? '' : encodeURIComponent(LifecycleActionResult)) + '&InstanceId=' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an Auto Scaling group with the specified name and attributes.</p> <p>If you exceed your maximum limit of Auto Scaling groups, the call fails. To query this limit, call the <a>DescribeAccountLimits</a> API. For information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Amazon EC2 Auto Scaling Service Quotas</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For introductory exercises for creating an Auto Scaling group, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/GettingStartedTutorial.html">Getting Started with Amazon EC2 Auto Scaling</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-register-lbs-with-asg.html">Tutorial: Set Up a Scaled and Load-Balanced Application</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html">Auto Scaling Groups</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=CreateAutoScalingGroup
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group. This name must be unique per Region per account.
		 * @param {string} LaunchConfigurationName <p>The name of the launch configuration to use when an instance is launched. To get the launch configuration name, use the <a>DescribeLaunchConfigurations</a> API operation. New launch configurations can be created with the <a>CreateLaunchConfiguration</a> API.</p> <p>You must specify one of the following parameters in your request: <code>LaunchConfigurationName</code>, <code>LaunchTemplate</code>, <code>InstanceId</code>, or <code>MixedInstancesPolicy</code>.</p>
		 * @param {GET_CreateAutoScalingGroupLaunchTemplate} LaunchTemplate <p>Parameters used to specify the launch template and version to use when an instance is launched.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_LaunchTemplateSpecification.html">LaunchTemplateSpecification</a> in the <i>Amazon EC2 Auto Scaling API Reference</i>.</p> <p>You can alternatively associate a launch template to the Auto Scaling group by using the <code>MixedInstancesPolicy</code> parameter.</p> <p>You must specify one of the following parameters in your request: <code>LaunchConfigurationName</code>, <code>LaunchTemplate</code>, <code>InstanceId</code>, or <code>MixedInstancesPolicy</code>.</p>
		 * @param {GET_CreateAutoScalingGroupMixedInstancesPolicy} MixedInstancesPolicy <p>An embedded object that specifies a mixed instances policy. The required parameters must be specified. If optional parameters are unspecified, their default values are used.</p> <p>The policy includes parameters that not only define the distribution of On-Demand Instances and Spot Instances, the maximum price to pay for Spot Instances, and how the Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacity, but also the parameters that specify the instance configuration information—the launch template and instance types.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_MixedInstancesPolicy.html">MixedInstancesPolicy</a> in the <i>Amazon EC2 Auto Scaling API Reference</i> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-purchase-options.html">Auto Scaling Groups with Multiple Instance Types and Purchase Options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You must specify one of the following parameters in your request: <code>LaunchConfigurationName</code>, <code>LaunchTemplate</code>, <code>InstanceId</code>, or <code>MixedInstancesPolicy</code>.</p>
		 * @param {string} InstanceId <p>The ID of the instance used to create a launch configuration for the group. To get the instance ID, use the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html">DescribeInstances</a> API operation.</p> <p>When you specify an ID of an instance, Amazon EC2 Auto Scaling creates a new launch configuration and associates it with the group. This launch configuration derives its attributes from the specified instance, except for the block device mapping.</p> <p>You must specify one of the following parameters in your request: <code>LaunchConfigurationName</code>, <code>LaunchTemplate</code>, <code>InstanceId</code>, or <code>MixedInstancesPolicy</code>.</p>
		 * @param {number} MinSize The minimum size of the group.
		 * @param {number} MaxSize <p>The maximum size of the group.</p> <note> <p>With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to go above <code>MaxSize</code> to meet your capacity requirements. In this event, Amazon EC2 Auto Scaling will never go above <code>MaxSize</code> by more than your maximum instance weight (weights that define how many capacity units each instance contributes to the capacity of the group).</p> </note>
		 * @param {number} DesiredCapacity <p>The desired capacity is the initial capacity of the Auto Scaling group at the time of its creation and the capacity it attempts to maintain. It can scale beyond this capacity if you configure automatic scaling.</p> <p>This number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group. If you do not specify a desired capacity, the default is the minimum size of the group.</p>
		 * @param {number} DefaultCooldown <p>The amount of time, in seconds, after a scaling activity completes before another scaling activity can start. The default value is <code>300</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling Cooldowns</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * @param {Array<string>} AvailabilityZones <p>One or more Availability Zones for the group. This parameter is optional if you specify one or more subnets for <code>VPCZoneIdentifier</code>.</p> <p>Conditional: If your account supports EC2-Classic and VPC, this parameter is required to launch instances into EC2-Classic.</p>
		 * @param {Array<string>} LoadBalancerNames <p>A list of Classic Load Balancers associated with this Auto Scaling group. For Application Load Balancers and Network Load Balancers, specify a list of target groups using the <code>TargetGroupARNs</code> property instead.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Using a Load Balancer with an Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * @param {Array<string>} TargetGroupARNs <p>The Amazon Resource Names (ARN) of the target groups to associate with the Auto Scaling group. Instances are registered as targets in a target group, and traffic is routed to the target group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Using a Load Balancer with an Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * @param {string} HealthCheckType <p>The service to use for the health checks. The valid values are <code>EC2</code> and <code>ELB</code>. The default value is <code>EC2</code>. If you configure an Auto Scaling group to use ELB health checks, it considers the instance unhealthy if it fails either the EC2 status checks or the load balancer health checks.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health Checks for Auto Scaling Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * @param {number} HealthCheckGracePeriod <p>The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service. During this time, any health check failures for the instance are ignored. The default value is <code>0</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html#health-check-grace-period">Health Check Grace Period</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Conditional: This parameter is required if you are adding an <code>ELB</code> health check.</p>
		 * @param {string} PlacementGroup The name of the placement group into which to launch your instances, if any. A placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a placement group. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement Groups</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.
		 * @param {string} VPCZoneIdentifier <p>A comma-separated list of subnet IDs for your virtual private cloud (VPC).</p> <p>If you specify <code>VPCZoneIdentifier</code> with <code>AvailabilityZones</code>, the subnets that you specify for this parameter must reside in those Availability Zones.</p> <p>Conditional: If your account supports EC2-Classic and VPC, this parameter is required to launch instances into a VPC.</p>
		 * @param {Array<string>} TerminationPolicies <p>One or more termination policies used to select the instance to terminate. These policies are executed in the order that they are listed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html">Controlling Which Instances Auto Scaling Terminates During Scale In</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * @param {boolean} NewInstancesProtectedFromScaleIn <p>Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in.</p> <p>For more information about preventing instances from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection">Instance Protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * @param {Array<LifecycleHookSpecification>} LifecycleHookSpecificationList One or more lifecycle hooks.
		 * @param {Array<Tag>} Tags <p>One or more tags. You can tag your Auto Scaling group and propagate the tags to the Amazon EC2 instances it launches.</p> <p>Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template but use caution. If the launch template specifies an instance tag with a key that is also specified for the Auto Scaling group, Amazon EC2 Auto Scaling overrides the value of that instance tag with the value specified by the Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html">Tagging Auto Scaling Groups and Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * @param {string} ServiceLinkedRoleARN The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other AWS services on your behalf. By default, Amazon EC2 Auto Scaling uses a service-linked role named AWSServiceRoleForAutoScaling, which it creates if it does not exist. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-service-linked-role.html">Service-Linked Roles</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 * @param {number} MaxInstanceLifetime <p>The maximum amount of time, in seconds, that an instance can be in service. The default is null.</p> <p>This parameter is optional, but if you specify a value for it, you must specify a value of at least 604,800 seconds (7 days). To clear a previously set value, specify a new value of 0.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-max-instance-lifetime.html">Replacing Auto Scaling Instances Based on Maximum Instance Lifetime</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Valid Range: Minimum value of 0.</p>
		 * @return {void} Success
		 */
		GET_CreateAutoScalingGroup(AutoScalingGroupName: string, LaunchConfigurationName: string, LaunchTemplate: GET_CreateAutoScalingGroupLaunchTemplate, MixedInstancesPolicy: GET_CreateAutoScalingGroupMixedInstancesPolicy, InstanceId: string, MinSize: number, MaxSize: number, DesiredCapacity: number, DefaultCooldown: number, AvailabilityZones: Array<string>, LoadBalancerNames: Array<string>, TargetGroupARNs: Array<string>, HealthCheckType: string, HealthCheckGracePeriod: number, PlacementGroup: string, VPCZoneIdentifier: string, TerminationPolicies: Array<string>, NewInstancesProtectedFromScaleIn: boolean, LifecycleHookSpecificationList: Array<LifecycleHookSpecification>, Tags: Array<Tag>, ServiceLinkedRoleARN: string, MaxInstanceLifetime: number, Action: GET_CreateAutoScalingGroupAction, Version: GET_CreateAutoScalingGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateAutoScalingGroup?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&LaunchConfigurationName=' + (LaunchConfigurationName == null ? '' : encodeURIComponent(LaunchConfigurationName)) + '&LaunchTemplate=' + LaunchTemplate + '&MixedInstancesPolicy=' + MixedInstancesPolicy + '&InstanceId=' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&MinSize=' + MinSize + '&MaxSize=' + MaxSize + '&DesiredCapacity=' + DesiredCapacity + '&DefaultCooldown=' + DefaultCooldown + '&' + AvailabilityZones.map(z => `AvailabilityZones=${encodeURIComponent(z)}`).join('&') + '&' + LoadBalancerNames.map(z => `LoadBalancerNames=${encodeURIComponent(z)}`).join('&') + '&' + TargetGroupARNs.map(z => `TargetGroupARNs=${encodeURIComponent(z)}`).join('&') + '&HealthCheckType=' + (HealthCheckType == null ? '' : encodeURIComponent(HealthCheckType)) + '&HealthCheckGracePeriod=' + HealthCheckGracePeriod + '&PlacementGroup=' + (PlacementGroup == null ? '' : encodeURIComponent(PlacementGroup)) + '&VPCZoneIdentifier=' + (VPCZoneIdentifier == null ? '' : encodeURIComponent(VPCZoneIdentifier)) + '&' + TerminationPolicies.map(z => `TerminationPolicies=${encodeURIComponent(z)}`).join('&') + '&NewInstancesProtectedFromScaleIn=' + NewInstancesProtectedFromScaleIn + '&' + LifecycleHookSpecificationList.map(z => `LifecycleHookSpecificationList=${z}`).join('&') + '&' + Tags.map(z => `Tags=${z}`).join('&') + '&ServiceLinkedRoleARN=' + (ServiceLinkedRoleARN == null ? '' : encodeURIComponent(ServiceLinkedRoleARN)) + '&MaxInstanceLifetime=' + MaxInstanceLifetime + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a launch configuration.</p> <p>If you exceed your maximum limit of launch configurations, the call fails. To query this limit, call the <a>DescribeAccountLimits</a> API. For information about updating this limit, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Amazon EC2 Auto Scaling Service Quotas</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchConfiguration.html">Launch Configurations</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=CreateLaunchConfiguration
		 * @param {string} LaunchConfigurationName The name of the launch configuration. This name must be unique per Region per account.
		 * @param {string} ImageId <p>The ID of the Amazon Machine Image (AMI) that was assigned during registration. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html">Finding an AMI</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <p>If you do not specify <code>InstanceId</code>, you must specify <code>ImageId</code>.</p>
		 * @param {string} KeyName The name of the key pair. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Amazon EC2 Key Pairs</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.
		 * @param {Array<string>} SecurityGroups <p>A list that contains the security groups to assign to the instances in the Auto Scaling group.</p> <p>[EC2-VPC] Specify the security group IDs. For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html">Security Groups for Your VPC</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p> <p>[EC2-Classic] Specify either the security group names or the security group IDs. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 Security Groups</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
		 * @param {string} ClassicLinkVPCId <p>The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon EC2 User Guide for Linux Instances</i> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html#as-ClassicLink">Linking EC2-Classic Instances to a VPC</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>This parameter can only be used if you are launching EC2-Classic instances.</p>
		 * @param {Array<string>} ClassicLinkVPCSecurityGroups <p>The IDs of one or more security groups for the specified ClassicLink-enabled VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon EC2 User Guide for Linux Instances</i> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html#as-ClassicLink">Linking EC2-Classic Instances to a VPC</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you specify the <code>ClassicLinkVPCId</code> parameter, you must specify this parameter.</p>
		 * @param {string} UserData The Base64-encoded user data to make available to the launched EC2 instances. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance Metadata and User Data</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.
		 * @param {string} InstanceId <p>The ID of the instance to use to create the launch configuration. The new launch configuration derives attributes from the instance, except for the block device mapping.</p> <p>To create a launch configuration with a block device mapping or override any other instance attributes, specify them as part of the same request.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-lc-with-instanceID.html">Create a Launch Configuration Using an EC2 Instance</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you do not specify <code>InstanceId</code>, you must specify both <code>ImageId</code> and <code>InstanceType</code>.</p>
		 * @param {string} InstanceType <p>Specifies the instance type of the EC2 instance.</p> <p>For information about available instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#AvailableInstanceTypes">Available Instance Types</a> in the <i>Amazon EC2 User Guide for Linux Instances.</i> </p> <p>If you do not specify <code>InstanceId</code>, you must specify <code>InstanceType</code>.</p>
		 * @param {string} KernelId The ID of the kernel associated with the AMI.
		 * @param {string} RamdiskId The ID of the RAM disk to select.
		 * @param {Array<BlockDeviceMapping>} BlockDeviceMappings A block device mapping, which specifies the block devices for the instance. You can specify virtual devices and EBS volumes. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html">Block Device Mapping</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.
		 * @param {GET_CreateLaunchConfigurationInstanceMonitoring} InstanceMonitoring <p>Controls whether instances in this group are launched with detailed (<code>true</code>) or basic (<code>false</code>) monitoring.</p> <p>The default value is <code>true</code> (enabled).</p> <important> <p>When detailed monitoring is enabled, Amazon CloudWatch generates metrics every minute and your account is charged a fee. When you disable detailed monitoring, CloudWatch generates metrics every 5 minutes. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/latest/userguide/as-instance-monitoring.html#enable-as-instance-metrics">Configure Monitoring for Auto Scaling Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> </important>
		 * @param {string} SpotPrice <p>The maximum hourly price to be paid for any Spot Instance launched to fulfill the request. Spot Instances are launched when the price you specify exceeds the current Spot price. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-launch-spot-instances.html">Launching Spot Instances in Your Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <note> <p>When you change your maximum price by creating a new launch configuration, running instances will continue to run as long as the maximum price for those running instances is higher than the current Spot price.</p> </note>
		 * @param {string} IamInstanceProfile <p>The name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/us-iam-role.html">IAM Role for Applications That Run on Amazon EC2 Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * @param {boolean} EbsOptimized <p>Specifies whether the launch configuration is optimized for EBS I/O (<code>true</code>) or not (<code>false</code>). The optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization is not available with all instance types. Additional fees are incurred when you enable EBS optimization for an instance type that is not EBS-optimized by default. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html">Amazon EBS-Optimized Instances</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <p>The default value is <code>false</code>.</p>
		 * @param {boolean} AssociatePublicIpAddress <p>For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances. If you specify <code>true</code>, each instance in the Auto Scaling group receives a unique public IP address. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html">Launching Auto Scaling Instances in a VPC</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you specify this parameter, you must specify at least one subnet for <code>VPCZoneIdentifier</code> when you create your group.</p> <note> <p>If the instance is launched into a default subnet, the default is to assign a public IP address, unless you disabled the option to assign a public IP address on the subnet. If the instance is launched into a nondefault subnet, the default is not to assign a public IP address, unless you enabled the option to assign a public IP address on the subnet.</p> </note>
		 * @param {string} PlacementTenancy <p>The tenancy of the instance. An instance with <code>dedicated</code> tenancy runs on isolated, single-tenant hardware and can only be launched into a VPC.</p> <p>To launch dedicated instances into a shared tenancy VPC (a VPC with the instance placement tenancy attribute set to <code>default</code>), you must set the value of this parameter to <code>dedicated</code>.</p> <p>If you specify <code>PlacementTenancy</code>, you must specify at least one subnet for <code>VPCZoneIdentifier</code> when you create your group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html#as-vpc-tenancy">Instance Placement Tenancy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Valid Values: <code>default</code> | <code>dedicated</code> </p>
		 * @return {void} Success
		 */
		GET_CreateLaunchConfiguration(LaunchConfigurationName: string, ImageId: string, KeyName: string, SecurityGroups: Array<string>, ClassicLinkVPCId: string, ClassicLinkVPCSecurityGroups: Array<string>, UserData: string, InstanceId: string, InstanceType: string, KernelId: string, RamdiskId: string, BlockDeviceMappings: Array<BlockDeviceMapping>, InstanceMonitoring: GET_CreateLaunchConfigurationInstanceMonitoring, SpotPrice: string, IamInstanceProfile: string, EbsOptimized: boolean, AssociatePublicIpAddress: boolean, PlacementTenancy: string, Action: GET_CreateLaunchConfigurationAction, Version: GET_CreateLaunchConfigurationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateLaunchConfiguration?LaunchConfigurationName=' + (LaunchConfigurationName == null ? '' : encodeURIComponent(LaunchConfigurationName)) + '&ImageId=' + (ImageId == null ? '' : encodeURIComponent(ImageId)) + '&KeyName=' + (KeyName == null ? '' : encodeURIComponent(KeyName)) + '&' + SecurityGroups.map(z => `SecurityGroups=${encodeURIComponent(z)}`).join('&') + '&ClassicLinkVPCId=' + (ClassicLinkVPCId == null ? '' : encodeURIComponent(ClassicLinkVPCId)) + '&' + ClassicLinkVPCSecurityGroups.map(z => `ClassicLinkVPCSecurityGroups=${encodeURIComponent(z)}`).join('&') + '&UserData=' + (UserData == null ? '' : encodeURIComponent(UserData)) + '&InstanceId=' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&InstanceType=' + (InstanceType == null ? '' : encodeURIComponent(InstanceType)) + '&KernelId=' + (KernelId == null ? '' : encodeURIComponent(KernelId)) + '&RamdiskId=' + (RamdiskId == null ? '' : encodeURIComponent(RamdiskId)) + '&' + BlockDeviceMappings.map(z => `BlockDeviceMappings=${z}`).join('&') + '&InstanceMonitoring=' + InstanceMonitoring + '&SpotPrice=' + (SpotPrice == null ? '' : encodeURIComponent(SpotPrice)) + '&IamInstanceProfile=' + (IamInstanceProfile == null ? '' : encodeURIComponent(IamInstanceProfile)) + '&EbsOptimized=' + EbsOptimized + '&AssociatePublicIpAddress=' + AssociatePublicIpAddress + '&PlacementTenancy=' + (PlacementTenancy == null ? '' : encodeURIComponent(PlacementTenancy)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates tags for the specified Auto Scaling group.</p> <p>When you specify a tag with a key that already exists, the operation overwrites the previous tag definition, and you do not get an error message.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html">Tagging Auto Scaling Groups and Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=CreateOrUpdateTags
		 * @param {Array<Tag>} Tags One or more tags.
		 * @return {void} Success
		 */
		GET_CreateOrUpdateTags(Tags: Array<Tag>, Action: GET_CreateOrUpdateTagsAction, Version: GET_CreateOrUpdateTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=CreateOrUpdateTags?' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified Auto Scaling group.</p> <p>If the group has instances or scaling activities in progress, you must specify the option to force the deletion in order for it to succeed.</p> <p>If the group has policies, deleting the group deletes the policies, the underlying alarm actions, and any alarm that no longer has an associated action.</p> <p>To remove instances from the Auto Scaling group before deleting it, call the <a>DetachInstances</a> API with the list of instances and the option to decrement the desired capacity. This ensures that Amazon EC2 Auto Scaling does not launch replacement instances.</p> <p>To terminate all instances before deleting the Auto Scaling group, call the <a>UpdateAutoScalingGroup</a> API and set the minimum size and desired capacity of the Auto Scaling group to zero.</p>
		 * Get #Action=DeleteAutoScalingGroup
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {boolean} ForceDelete Specifies that the group is to be deleted along with all instances associated with the group, without waiting for all instances to be terminated. This parameter also deletes any lifecycle actions associated with the group.
		 * @return {void} Success
		 */
		GET_DeleteAutoScalingGroup(AutoScalingGroupName: string, ForceDelete: boolean, Action: GET_DeleteAutoScalingGroupAction, Version: GET_DeleteAutoScalingGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteAutoScalingGroup?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&ForceDelete=' + ForceDelete + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified launch configuration.</p> <p>The launch configuration must not be attached to an Auto Scaling group. When this call completes, the launch configuration is no longer available for use.</p>
		 * Get #Action=DeleteLaunchConfiguration
		 * @param {string} LaunchConfigurationName The name of the launch configuration.
		 * @return {void} Success
		 */
		GET_DeleteLaunchConfiguration(LaunchConfigurationName: string, Action: GET_DeleteLaunchConfigurationAction, Version: GET_DeleteLaunchConfigurationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteLaunchConfiguration?LaunchConfigurationName=' + (LaunchConfigurationName == null ? '' : encodeURIComponent(LaunchConfigurationName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified lifecycle hook.</p> <p>If there are any outstanding lifecycle actions, they are completed first (<code>ABANDON</code> for launching instances, <code>CONTINUE</code> for terminating instances).</p>
		 * Get #Action=DeleteLifecycleHook
		 * @param {string} LifecycleHookName The name of the lifecycle hook.
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @return {void} Success
		 */
		GET_DeleteLifecycleHook(LifecycleHookName: string, AutoScalingGroupName: string, Action: GET_DeleteLifecycleHookAction, Version: GET_DeleteLifecycleHookVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteLifecycleHook?LifecycleHookName=' + (LifecycleHookName == null ? '' : encodeURIComponent(LifecycleHookName)) + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified notification.
		 * Get #Action=DeleteNotificationConfiguration
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {string} TopicARN The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (Amazon SNS) topic.
		 * @return {void} Success
		 */
		GET_DeleteNotificationConfiguration(AutoScalingGroupName: string, TopicARN: string, Action: GET_DeleteNotificationConfigurationAction, Version: GET_DeleteNotificationConfigurationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteNotificationConfiguration?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&TopicARN=' + (TopicARN == null ? '' : encodeURIComponent(TopicARN)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified scaling policy.</p> <p>Deleting either a step scaling policy or a simple scaling policy deletes the underlying alarm action, but does not delete the alarm, even if it no longer has an associated action.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/deleting-scaling-policy.html">Deleting a Scaling Policy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=DeletePolicy
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {string} PolicyName The name or Amazon Resource Name (ARN) of the policy.
		 * @return {void} Success
		 */
		GET_DeletePolicy(AutoScalingGroupName: string, PolicyName: string, Action: GET_DeletePolicyAction, Version: GET_DeletePolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeletePolicy?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified scheduled action.
		 * Get #Action=DeleteScheduledAction
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {string} ScheduledActionName The name of the action to delete.
		 * @return {void} Success
		 */
		GET_DeleteScheduledAction(AutoScalingGroupName: string, ScheduledActionName: string, Action: GET_DeleteScheduledActionAction, Version: GET_DeleteScheduledActionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteScheduledAction?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&ScheduledActionName=' + (ScheduledActionName == null ? '' : encodeURIComponent(ScheduledActionName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified tags.
		 * Get #Action=DeleteTags
		 * @param {Array<Tag>} Tags One or more tags.
		 * @return {void} Success
		 */
		GET_DeleteTags(Tags: Array<Tag>, Action: GET_DeleteTagsAction, Version: GET_DeleteTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DeleteTags?' + Tags.map(z => `Tags=${z}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the current Amazon EC2 Auto Scaling resource quotas for your AWS account.</p> <p>For information about requesting an increase, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Amazon EC2 Auto Scaling Service Quotas</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=DescribeAccountLimits
		 * @return {void} Success
		 */
		GET_DescribeAccountLimits(Action: GET_DescribeAccountLimitsAction, Version: GET_DescribeAccountLimitsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAccountLimits?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the current Amazon EC2 Auto Scaling resource quotas for your AWS account.</p> <p>For information about requesting an increase, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-account-limits.html">Amazon EC2 Auto Scaling Service Quotas</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Post #Action=DescribeAccountLimits
		 * @return {void} Success
		 */
		POST_DescribeAccountLimits(Action: GET_DescribeAccountLimitsAction, Version: POST_DescribeAccountLimitsVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=DescribeAccountLimits?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the available adjustment types for Amazon EC2 Auto Scaling scaling policies. These settings apply to step scaling policies and simple scaling policies; they do not apply to target tracking scaling policies.</p> <p>The following adjustment types are supported:</p> <ul> <li> <p>ChangeInCapacity</p> </li> <li> <p>ExactCapacity</p> </li> <li> <p>PercentChangeInCapacity</p> </li> </ul>
		 * Get #Action=DescribeAdjustmentTypes
		 * @return {void} Success
		 */
		GET_DescribeAdjustmentTypes(Action: GET_DescribeAdjustmentTypesAction, Version: GET_DescribeAdjustmentTypesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAdjustmentTypes?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the available adjustment types for Amazon EC2 Auto Scaling scaling policies. These settings apply to step scaling policies and simple scaling policies; they do not apply to target tracking scaling policies.</p> <p>The following adjustment types are supported:</p> <ul> <li> <p>ChangeInCapacity</p> </li> <li> <p>ExactCapacity</p> </li> <li> <p>PercentChangeInCapacity</p> </li> </ul>
		 * Post #Action=DescribeAdjustmentTypes
		 * @return {void} Success
		 */
		POST_DescribeAdjustmentTypes(Action: GET_DescribeAdjustmentTypesAction, Version: POST_DescribeAdjustmentTypesVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=DescribeAdjustmentTypes?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes one or more Auto Scaling groups.
		 * Get #Action=DescribeAutoScalingGroups
		 * @param {Array<string>} AutoScalingGroupNames <p>The names of the Auto Scaling groups. Each name can be a maximum of 1600 characters. By default, you can only specify up to 50 names. You can optionally increase this limit using the <code>MaxRecords</code> parameter.</p> <p>If you omit this parameter, all Auto Scaling groups are described.</p>
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @param {number} MaxRecords The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.
		 * @return {void} Success
		 */
		GET_DescribeAutoScalingGroups(AutoScalingGroupNames: Array<string>, NextToken: string, MaxRecords: number, Action: GET_DescribeAutoScalingGroupsAction, Version: GET_DescribeAutoScalingGroupsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAutoScalingGroups?' + AutoScalingGroupNames.map(z => `AutoScalingGroupNames=${encodeURIComponent(z)}`).join('&') + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes one or more Auto Scaling instances.
		 * Get #Action=DescribeAutoScalingInstances
		 * @param {Array<string>} InstanceIds The IDs of the instances. You can specify up to <code>MaxRecords</code> IDs. If you omit this parameter, all Auto Scaling instances are described. If you specify an ID that does not exist, it is ignored with no error.
		 * @param {number} MaxRecords The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>50</code>.
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @return {void} Success
		 */
		GET_DescribeAutoScalingInstances(InstanceIds: Array<string>, MaxRecords: number, NextToken: string, Action: GET_DescribeAutoScalingInstancesAction, Version: GET_DescribeAutoScalingInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAutoScalingInstances?' + InstanceIds.map(z => `InstanceIds=${encodeURIComponent(z)}`).join('&') + '&MaxRecords=' + MaxRecords + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the notification types that are supported by Amazon EC2 Auto Scaling.
		 * Get #Action=DescribeAutoScalingNotificationTypes
		 * @return {void} Success
		 */
		GET_DescribeAutoScalingNotificationTypes(Action: GET_DescribeAutoScalingNotificationTypesAction, Version: GET_DescribeAutoScalingNotificationTypesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeAutoScalingNotificationTypes?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the notification types that are supported by Amazon EC2 Auto Scaling.
		 * Post #Action=DescribeAutoScalingNotificationTypes
		 * @return {void} Success
		 */
		POST_DescribeAutoScalingNotificationTypes(Action: GET_DescribeAutoScalingNotificationTypesAction, Version: POST_DescribeAutoScalingNotificationTypesVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=DescribeAutoScalingNotificationTypes?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes one or more launch configurations.
		 * Get #Action=DescribeLaunchConfigurations
		 * @param {Array<string>} LaunchConfigurationNames The launch configuration names. If you omit this parameter, all launch configurations are described.
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @param {number} MaxRecords The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.
		 * @return {void} Success
		 */
		GET_DescribeLaunchConfigurations(LaunchConfigurationNames: Array<string>, NextToken: string, MaxRecords: number, Action: GET_DescribeLaunchConfigurationsAction, Version: GET_DescribeLaunchConfigurationsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeLaunchConfigurations?' + LaunchConfigurationNames.map(z => `LaunchConfigurationNames=${encodeURIComponent(z)}`).join('&') + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the available types of lifecycle hooks.</p> <p>The following hook types are supported:</p> <ul> <li> <p>autoscaling:EC2_INSTANCE_LAUNCHING</p> </li> <li> <p>autoscaling:EC2_INSTANCE_TERMINATING</p> </li> </ul>
		 * Get #Action=DescribeLifecycleHookTypes
		 * @return {void} Success
		 */
		GET_DescribeLifecycleHookTypes(Action: GET_DescribeLifecycleHookTypesAction, Version: GET_DescribeLifecycleHookTypesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeLifecycleHookTypes?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the available types of lifecycle hooks.</p> <p>The following hook types are supported:</p> <ul> <li> <p>autoscaling:EC2_INSTANCE_LAUNCHING</p> </li> <li> <p>autoscaling:EC2_INSTANCE_TERMINATING</p> </li> </ul>
		 * Post #Action=DescribeLifecycleHookTypes
		 * @return {void} Success
		 */
		POST_DescribeLifecycleHookTypes(Action: GET_DescribeLifecycleHookTypesAction, Version: POST_DescribeLifecycleHookTypesVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=DescribeLifecycleHookTypes?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the lifecycle hooks for the specified Auto Scaling group.
		 * Get #Action=DescribeLifecycleHooks
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {Array<string>} LifecycleHookNames The names of one or more lifecycle hooks. If you omit this parameter, all lifecycle hooks are described.
		 * @return {void} Success
		 */
		GET_DescribeLifecycleHooks(AutoScalingGroupName: string, LifecycleHookNames: Array<string>, Action: GET_DescribeLifecycleHooksAction, Version: GET_DescribeLifecycleHooksVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeLifecycleHooks?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + LifecycleHookNames.map(z => `LifecycleHookNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the target groups for the specified Auto Scaling group.
		 * Get #Action=DescribeLoadBalancerTargetGroups
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @param {number} MaxRecords The maximum number of items to return with this call. The default value is <code>100</code> and the maximum value is <code>100</code>.
		 * @return {void} Success
		 */
		GET_DescribeLoadBalancerTargetGroups(AutoScalingGroupName: string, NextToken: string, MaxRecords: number, Action: GET_DescribeLoadBalancerTargetGroupsAction, Version: GET_DescribeLoadBalancerTargetGroupsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeLoadBalancerTargetGroups?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the load balancers for the specified Auto Scaling group.</p> <p>This operation describes only Classic Load Balancers. If you have Application Load Balancers or Network Load Balancers, use the <a>DescribeLoadBalancerTargetGroups</a> API instead.</p>
		 * Get #Action=DescribeLoadBalancers
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @param {number} MaxRecords The maximum number of items to return with this call. The default value is <code>100</code> and the maximum value is <code>100</code>.
		 * @return {void} Success
		 */
		GET_DescribeLoadBalancers(AutoScalingGroupName: string, NextToken: string, MaxRecords: number, Action: GET_DescribeLoadBalancersAction, Version: GET_DescribeLoadBalancersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeLoadBalancers?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.</p> <p>The <code>GroupStandbyInstances</code> metric is not returned by default. You must explicitly request this metric when calling the <a>EnableMetricsCollection</a> API.</p>
		 * Get #Action=DescribeMetricCollectionTypes
		 * @return {void} Success
		 */
		GET_DescribeMetricCollectionTypes(Action: GET_DescribeMetricCollectionTypesAction, Version: GET_DescribeMetricCollectionTypesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeMetricCollectionTypes?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.</p> <p>The <code>GroupStandbyInstances</code> metric is not returned by default. You must explicitly request this metric when calling the <a>EnableMetricsCollection</a> API.</p>
		 * Post #Action=DescribeMetricCollectionTypes
		 * @return {void} Success
		 */
		POST_DescribeMetricCollectionTypes(Action: GET_DescribeMetricCollectionTypesAction, Version: POST_DescribeMetricCollectionTypesVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=DescribeMetricCollectionTypes?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the notification actions associated with the specified Auto Scaling group.
		 * Get #Action=DescribeNotificationConfigurations
		 * @param {Array<string>} AutoScalingGroupNames The name of the Auto Scaling group.
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @param {number} MaxRecords The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.
		 * @return {void} Success
		 */
		GET_DescribeNotificationConfigurations(AutoScalingGroupNames: Array<string>, NextToken: string, MaxRecords: number, Action: GET_DescribeNotificationConfigurationsAction, Version: GET_DescribeNotificationConfigurationsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeNotificationConfigurations?' + AutoScalingGroupNames.map(z => `AutoScalingGroupNames=${encodeURIComponent(z)}`).join('&') + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the policies for the specified Auto Scaling group.
		 * Get #Action=DescribePolicies
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {Array<string>} PolicyNames The names of one or more policies. If you omit this parameter, all policies are described. If a group name is provided, the results are limited to that group. This list is limited to 50 items. If you specify an unknown policy name, it is ignored with no error.
		 * @param {Array<string>} PolicyTypes One or more policy types. The valid values are <code>SimpleScaling</code>, <code>StepScaling</code>, and <code>TargetTrackingScaling</code>.
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @param {number} MaxRecords The maximum number of items to be returned with each call. The default value is <code>50</code> and the maximum value is <code>100</code>.
		 * @return {void} Success
		 */
		GET_DescribePolicies(AutoScalingGroupName: string, PolicyNames: Array<string>, PolicyTypes: Array<string>, NextToken: string, MaxRecords: number, Action: GET_DescribePoliciesAction, Version: GET_DescribePoliciesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribePolicies?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + PolicyNames.map(z => `PolicyNames=${encodeURIComponent(z)}`).join('&') + '&' + PolicyTypes.map(z => `PolicyTypes=${encodeURIComponent(z)}`).join('&') + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes one or more scaling activities for the specified Auto Scaling group.
		 * Get #Action=DescribeScalingActivities
		 * @param {Array<string>} ActivityIds The activity IDs of the desired scaling activities. You can specify up to 50 IDs. If you omit this parameter, all activities for the past six weeks are described. If unknown activities are requested, they are ignored with no error. If you specify an Auto Scaling group, the results are limited to that group.
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {number} MaxRecords The maximum number of items to return with this call. The default value is <code>100</code> and the maximum value is <code>100</code>.
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @return {void} Success
		 */
		GET_DescribeScalingActivities(ActivityIds: Array<string>, AutoScalingGroupName: string, MaxRecords: number, NextToken: string, Action: GET_DescribeScalingActivitiesAction, Version: GET_DescribeScalingActivitiesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeScalingActivities?' + ActivityIds.map(z => `ActivityIds=${encodeURIComponent(z)}`).join('&') + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&MaxRecords=' + MaxRecords + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the scaling process types for use with the <a>ResumeProcesses</a> and <a>SuspendProcesses</a> APIs.
		 * Get #Action=DescribeScalingProcessTypes
		 * @return {void} Success
		 */
		GET_DescribeScalingProcessTypes(Action: GET_DescribeScalingProcessTypesAction, Version: GET_DescribeScalingProcessTypesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeScalingProcessTypes?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the scaling process types for use with the <a>ResumeProcesses</a> and <a>SuspendProcesses</a> APIs.
		 * Post #Action=DescribeScalingProcessTypes
		 * @return {void} Success
		 */
		POST_DescribeScalingProcessTypes(Action: GET_DescribeScalingProcessTypesAction, Version: POST_DescribeScalingProcessTypesVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=DescribeScalingProcessTypes?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the actions scheduled for your Auto Scaling group that haven't run or that have not reached their end time. To describe the actions that have already run, call the <a>DescribeScalingActivities</a> API.
		 * Get #Action=DescribeScheduledActions
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {Array<string>} ScheduledActionNames The names of one or more scheduled actions. You can specify up to 50 actions. If you omit this parameter, all scheduled actions are described. If you specify an unknown scheduled action, it is ignored with no error.
		 * @param {Date} StartTime The earliest scheduled start time to return. If scheduled action names are provided, this parameter is ignored.
		 * @param {Date} EndTime The latest scheduled start time to return. If scheduled action names are provided, this parameter is ignored.
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @param {number} MaxRecords The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.
		 * @return {void} Success
		 */
		GET_DescribeScheduledActions(AutoScalingGroupName: string, ScheduledActionNames: Array<string>, StartTime: Date, EndTime: Date, NextToken: string, MaxRecords: number, Action: GET_DescribeScheduledActionsAction, Version: GET_DescribeScheduledActionsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeScheduledActions?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + ScheduledActionNames.map(z => `ScheduledActionNames=${encodeURIComponent(z)}`).join('&') + '&StartTime=' + StartTime.toISOString() + '&EndTime=' + EndTime.toISOString() + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the specified tags.</p> <p>You can use filters to limit the results. For example, you can query for the tags for a specific Auto Scaling group. You can specify multiple values for a filter. A tag must match at least one of the specified values for it to be included in the results.</p> <p>You can also specify multiple filters. The result includes information for a particular tag only if it matches all the filters. If there's no match, no special message is returned.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html">Tagging Auto Scaling Groups and Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=DescribeTags
		 * @param {Array<Filter>} Filters One or more filters to scope the tags to return. The maximum number of filters per filter type (for example, <code>auto-scaling-group</code>) is 1000.
		 * @param {string} NextToken The token for the next set of items to return. (You received this token from a previous call.)
		 * @param {number} MaxRecords The maximum number of items to return with this call. The default value is <code>50</code> and the maximum value is <code>100</code>.
		 * @return {void} Success
		 */
		GET_DescribeTags(Filters: Array<Filter>, NextToken: string, MaxRecords: number, Action: GET_DescribeTagsAction, Version: GET_DescribeTagsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeTags?' + Filters.map(z => `Filters=${z}`).join('&') + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxRecords=' + MaxRecords + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html">Controlling Which Auto Scaling Instances Terminate During Scale In</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=DescribeTerminationPolicyTypes
		 * @return {void} Success
		 */
		GET_DescribeTerminationPolicyTypes(Action: GET_DescribeTerminationPolicyTypesAction, Version: GET_DescribeTerminationPolicyTypesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DescribeTerminationPolicyTypes?Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the termination policies supported by Amazon EC2 Auto Scaling.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html">Controlling Which Auto Scaling Instances Terminate During Scale In</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Post #Action=DescribeTerminationPolicyTypes
		 * @return {void} Success
		 */
		POST_DescribeTerminationPolicyTypes(Action: GET_DescribeTerminationPolicyTypesAction, Version: POST_DescribeTerminationPolicyTypesVersion): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#Action=DescribeTerminationPolicyTypes?Action=' + Action + '&Version=' + Version, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes one or more instances from the specified Auto Scaling group.</p> <p>After the instances are detached, you can manage them independent of the Auto Scaling group.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are detached.</p> <p>If there is a Classic Load Balancer attached to the Auto Scaling group, the instances are deregistered from the load balancer. If there are target groups attached to the Auto Scaling group, the instances are deregistered from the target groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/detach-instance-asg.html">Detach EC2 Instances from Your Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=DetachInstances
		 * @param {Array<string>} InstanceIds The IDs of the instances. You can specify up to 20 instances.
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {boolean} ShouldDecrementDesiredCapacity Indicates whether the Auto Scaling group decrements the desired capacity value by the number of instances detached.
		 * @return {void} Success
		 */
		GET_DetachInstances(InstanceIds: Array<string>, AutoScalingGroupName: string, ShouldDecrementDesiredCapacity: boolean, Action: GET_DetachInstancesAction, Version: GET_DetachInstancesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DetachInstances?' + InstanceIds.map(z => `InstanceIds=${encodeURIComponent(z)}`).join('&') + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&ShouldDecrementDesiredCapacity=' + ShouldDecrementDesiredCapacity + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Detaches one or more target groups from the specified Auto Scaling group.
		 * Get #Action=DetachLoadBalancerTargetGroups
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {Array<string>} TargetGroupARNs The Amazon Resource Names (ARN) of the target groups. You can specify up to 10 target groups.
		 * @return {void} Success
		 */
		GET_DetachLoadBalancerTargetGroups(AutoScalingGroupName: string, TargetGroupARNs: Array<string>, Action: GET_DetachLoadBalancerTargetGroupsAction, Version: GET_DetachLoadBalancerTargetGroupsVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DetachLoadBalancerTargetGroups?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + TargetGroupARNs.map(z => `TargetGroupARNs=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Detaches one or more Classic Load Balancers from the specified Auto Scaling group.</p> <p>This operation detaches only Classic Load Balancers. If you have Application Load Balancers or Network Load Balancers, use the <a>DetachLoadBalancerTargetGroups</a> API instead.</p> <p>When you detach a load balancer, it enters the <code>Removing</code> state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the load balancer using the <a>DescribeLoadBalancers</a> API call. The instances remain running.</p>
		 * Get #Action=DetachLoadBalancers
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {Array<string>} LoadBalancerNames The names of the load balancers. You can specify up to 10 load balancers.
		 * @return {void} Success
		 */
		GET_DetachLoadBalancers(AutoScalingGroupName: string, LoadBalancerNames: Array<string>, Action: GET_DetachLoadBalancersAction, Version: GET_DetachLoadBalancersVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DetachLoadBalancers?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + LoadBalancerNames.map(z => `LoadBalancerNames=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables group metrics for the specified Auto Scaling group.
		 * Get #Action=DisableMetricsCollection
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {Array<string>} Metrics <p>Specifies one or more of the following metrics:</p> <ul> <li> <p> <code>GroupMinSize</code> </p> </li> <li> <p> <code>GroupMaxSize</code> </p> </li> <li> <p> <code>GroupDesiredCapacity</code> </p> </li> <li> <p> <code>GroupInServiceInstances</code> </p> </li> <li> <p> <code>GroupPendingInstances</code> </p> </li> <li> <p> <code>GroupStandbyInstances</code> </p> </li> <li> <p> <code>GroupTerminatingInstances</code> </p> </li> <li> <p> <code>GroupTotalInstances</code> </p> </li> <li> <p> <code>GroupInServiceCapacity</code> </p> </li> <li> <p> <code>GroupPendingCapacity</code> </p> </li> <li> <p> <code>GroupStandbyCapacity</code> </p> </li> <li> <p> <code>GroupTerminatingCapacity</code> </p> </li> <li> <p> <code>GroupTotalCapacity</code> </p> </li> </ul> <p>If you omit this parameter, all metrics are disabled. </p>
		 * @return {void} Success
		 */
		GET_DisableMetricsCollection(AutoScalingGroupName: string, Metrics: Array<string>, Action: GET_DisableMetricsCollectionAction, Version: GET_DisableMetricsCollectionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=DisableMetricsCollection?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + Metrics.map(z => `Metrics=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables group metrics for the specified Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-monitoring.html">Monitoring Your Auto Scaling Groups and Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 * Get #Action=EnableMetricsCollection
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {Array<string>} Metrics <p>Specifies which group-level metrics to start collecting. You can specify one or more of the following metrics:</p> <ul> <li> <p> <code>GroupMinSize</code> </p> </li> <li> <p> <code>GroupMaxSize</code> </p> </li> <li> <p> <code>GroupDesiredCapacity</code> </p> </li> <li> <p> <code>GroupInServiceInstances</code> </p> </li> <li> <p> <code>GroupPendingInstances</code> </p> </li> <li> <p> <code>GroupStandbyInstances</code> </p> </li> <li> <p> <code>GroupTerminatingInstances</code> </p> </li> <li> <p> <code>GroupTotalInstances</code> </p> </li> </ul> <p>The instance weighting feature supports the following additional metrics: </p> <ul> <li> <p> <code>GroupInServiceCapacity</code> </p> </li> <li> <p> <code>GroupPendingCapacity</code> </p> </li> <li> <p> <code>GroupStandbyCapacity</code> </p> </li> <li> <p> <code>GroupTerminatingCapacity</code> </p> </li> <li> <p> <code>GroupTotalCapacity</code> </p> </li> </ul> <p>If you omit this parameter, all metrics are enabled. </p>
		 * @param {string} Granularity The granularity to associate with the metrics to collect. The only valid value is <code>1Minute</code>.
		 * @return {void} Success
		 */
		GET_EnableMetricsCollection(AutoScalingGroupName: string, Metrics: Array<string>, Granularity: string, Action: GET_EnableMetricsCollectionAction, Version: GET_EnableMetricsCollectionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=EnableMetricsCollection?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + Metrics.map(z => `Metrics=${encodeURIComponent(z)}`).join('&') + '&Granularity=' + (Granularity == null ? '' : encodeURIComponent(Granularity)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Moves the specified instances into the standby state.</p> <p>If you choose to decrement the desired capacity of the Auto Scaling group, the instances can enter standby as long as the desired capacity of the Auto Scaling group after the instances are placed into standby is equal to or greater than the minimum capacity of the group.</p> <p>If you choose not to decrement the desired capacity of the Auto Scaling group, the Auto Scaling group launches new instances to replace the instances on standby.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily Removing Instances from Your Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=EnterStandby
		 * @param {Array<string>} InstanceIds The IDs of the instances. You can specify up to 20 instances.
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {boolean} ShouldDecrementDesiredCapacity Indicates whether to decrement the desired capacity of the Auto Scaling group by the number of instances moved to <code>Standby</code> mode.
		 * @return {void} Success
		 */
		GET_EnterStandby(InstanceIds: Array<string>, AutoScalingGroupName: string, ShouldDecrementDesiredCapacity: boolean, Action: GET_EnterStandbyAction, Version: GET_EnterStandbyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=EnterStandby?' + InstanceIds.map(z => `InstanceIds=${encodeURIComponent(z)}`).join('&') + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&ShouldDecrementDesiredCapacity=' + ShouldDecrementDesiredCapacity + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Executes the specified policy.
		 * Get #Action=ExecutePolicy
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {string} PolicyName The name or ARN of the policy.
		 * @param {boolean} HonorCooldown <p>Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before executing the policy.</p> <p>This parameter is not supported if the policy type is <code>StepScaling</code> or <code>TargetTrackingScaling</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling Cooldowns</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * @param {number} MetricValue <p>The metric value to compare to <code>BreachThreshold</code>. This enables you to execute a policy of type <code>StepScaling</code> and determine which step adjustment to use. For example, if the breach threshold is 50 and you want to use a step adjustment with a lower bound of 0 and an upper bound of 10, you can set the metric value to 59.</p> <p>If you specify a metric value that doesn't correspond to a step adjustment for the policy, the call returns an error.</p> <p>Conditional: This parameter is required if the policy type is <code>StepScaling</code> and not supported otherwise.</p>
		 * @param {number} BreachThreshold <p>The breach threshold for the alarm.</p> <p>Conditional: This parameter is required if the policy type is <code>StepScaling</code> and not supported otherwise.</p>
		 * @return {void} Success
		 */
		GET_ExecutePolicy(AutoScalingGroupName: string, PolicyName: string, HonorCooldown: boolean, MetricValue: number, BreachThreshold: number, Action: GET_ExecutePolicyAction, Version: GET_ExecutePolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ExecutePolicy?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&HonorCooldown=' + HonorCooldown + '&MetricValue=' + MetricValue + '&BreachThreshold=' + BreachThreshold + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Moves the specified instances out of the standby state.</p> <p>After you put the instances back in service, the desired capacity is incremented.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enter-exit-standby.html">Temporarily Removing Instances from Your Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=ExitStandby
		 * @param {Array<string>} InstanceIds The IDs of the instances. You can specify up to 20 instances.
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @return {void} Success
		 */
		GET_ExitStandby(InstanceIds: Array<string>, AutoScalingGroupName: string, Action: GET_ExitStandbyAction, Version: GET_ExitStandbyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ExitStandby?' + InstanceIds.map(z => `InstanceIds=${encodeURIComponent(z)}`).join('&') + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p> <p>A lifecycle hook tells Amazon EC2 Auto Scaling to perform an action on an instance when the instance launches (before it is put into service) or as the instance terminates (before it is fully terminated).</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p> <b>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</b> </p> </li> <li> <p>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state using the <a>RecordLifecycleActionHeartbeat</a> API call.</p> </li> <li> <p>If you finish before the timeout period ends, complete the lifecycle action using the <a>CompleteLifecycleAction</a> API call.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling Lifecycle Hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling group, the call fails.</p> <p>You can view the lifecycle hooks for an Auto Scaling group using the <a>DescribeLifecycleHooks</a> API call. If you are no longer using a lifecycle hook, you can delete it by calling the <a>DeleteLifecycleHook</a> API.</p>
		 * Get #Action=PutLifecycleHook
		 * @param {string} LifecycleHookName The name of the lifecycle hook.
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {string} LifecycleTransition <p>The instance state to which you want to attach the lifecycle hook. The valid values are:</p> <ul> <li> <p>autoscaling:EC2_INSTANCE_LAUNCHING</p> </li> <li> <p>autoscaling:EC2_INSTANCE_TERMINATING</p> </li> </ul> <p>Conditional: This parameter is required for new lifecycle hooks, but optional when updating existing hooks.</p>
		 * @param {string} RoleARN <p>The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target, for example, an Amazon SNS topic or an Amazon SQS queue.</p> <p>Conditional: This parameter is required for new lifecycle hooks, but optional when updating existing hooks.</p>
		 * @param {string} NotificationTargetARN <p>The ARN of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in the transition state for the lifecycle hook. This target can be either an SQS queue or an SNS topic.</p> <p>If you specify an empty string, this overrides the current ARN.</p> <p>This operation uses the JSON format when sending notifications to an Amazon SQS queue, and an email key-value pair format when sending notifications to an Amazon SNS topic.</p> <p>When you specify a notification target, Amazon EC2 Auto Scaling sends it a test message. Test messages contain the following additional key-value pair: <code>"Event": "autoscaling:TEST_NOTIFICATION"</code>.</p>
		 * @param {string} NotificationMetadata Additional information that you want to include any time Amazon EC2 Auto Scaling sends a message to the notification target.
		 * @param {number} HeartbeatTimeout <p>The maximum time, in seconds, that can elapse before the lifecycle hook times out. The range is from <code>30</code> to <code>7200</code> seconds. The default value is <code>3600</code> seconds (1 hour).</p> <p>If the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the <code>DefaultResult</code> parameter. You can prevent the lifecycle hook from timing out by calling the <a>RecordLifecycleActionHeartbeat</a> API.</p>
		 * @param {string} DefaultResult Defines the action the Auto Scaling group should take when the lifecycle hook timeout elapses or if an unexpected failure occurs. This parameter can be either <code>CONTINUE</code> or <code>ABANDON</code>. The default value is <code>ABANDON</code>.
		 * @return {void} Success
		 */
		GET_PutLifecycleHook(LifecycleHookName: string, AutoScalingGroupName: string, LifecycleTransition: string, RoleARN: string, NotificationTargetARN: string, NotificationMetadata: string, HeartbeatTimeout: number, DefaultResult: string, Action: GET_PutLifecycleHookAction, Version: GET_PutLifecycleHookVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutLifecycleHook?LifecycleHookName=' + (LifecycleHookName == null ? '' : encodeURIComponent(LifecycleHookName)) + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&LifecycleTransition=' + (LifecycleTransition == null ? '' : encodeURIComponent(LifecycleTransition)) + '&RoleARN=' + (RoleARN == null ? '' : encodeURIComponent(RoleARN)) + '&NotificationTargetARN=' + (NotificationTargetARN == null ? '' : encodeURIComponent(NotificationTargetARN)) + '&NotificationMetadata=' + (NotificationMetadata == null ? '' : encodeURIComponent(NotificationMetadata)) + '&HeartbeatTimeout=' + HeartbeatTimeout + '&DefaultResult=' + (DefaultResult == null ? '' : encodeURIComponent(DefaultResult)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Configures an Auto Scaling group to send notifications when specified events take place. Subscribers to the specified topic can have messages delivered to an endpoint such as a web server or an email address.</p> <p>This configuration overwrites any existing configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ASGettingNotifications.html">Getting Amazon SNS Notifications When Your Auto Scaling Group Scales</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=PutNotificationConfiguration
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {string} TopicARN The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (Amazon SNS) topic.
		 * @param {Array<string>} NotificationTypes The type of event that causes the notification to be sent. To query the notification types supported by Amazon EC2 Auto Scaling, call the <a>DescribeAutoScalingNotificationTypes</a> API.
		 * @return {void} Success
		 */
		GET_PutNotificationConfiguration(AutoScalingGroupName: string, TopicARN: string, NotificationTypes: Array<string>, Action: GET_PutNotificationConfigurationAction, Version: GET_PutNotificationConfigurationVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutNotificationConfiguration?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&TopicARN=' + (TopicARN == null ? '' : encodeURIComponent(TopicARN)) + '&' + NotificationTypes.map(z => `NotificationTypes=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates a scaling policy for an Auto Scaling group.</p> <p>For more information about using scaling policies to scale your Auto Scaling group, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html">Target Tracking Scaling Policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html">Step and Simple Scaling Policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=PutScalingPolicy
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {string} PolicyName The name of the policy.
		 * @param {string} PolicyType The policy type. The valid values are <code>SimpleScaling</code>, <code>StepScaling</code>, and <code>TargetTrackingScaling</code>. If the policy type is null, the value is treated as <code>SimpleScaling</code>.
		 * @param {string} AdjustmentType <p>Specifies whether the <code>ScalingAdjustment</code> parameter is an absolute number or a percentage of the current capacity. The valid values are <code>ChangeInCapacity</code>, <code>ExactCapacity</code>, and <code>PercentChangeInCapacity</code>.</p> <p>Valid only if the policy type is <code>StepScaling</code> or <code>SimpleScaling</code>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-adjustment">Scaling Adjustment Types</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * @param {number} MinAdjustmentStep Available for backward compatibility. Use <code>MinAdjustmentMagnitude</code> instead.
		 * @param {number} MinAdjustmentMagnitude <p>The minimum value to scale by when scaling by percentages. For example, suppose that you create a step scaling policy to scale out an Auto Scaling group by 25 percent and you specify a <code>MinAdjustmentMagnitude</code> of 2. If the group has 4 instances and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a <code>MinAdjustmentMagnitude</code> of 2, Amazon EC2 Auto Scaling scales out the group by 2 instances. </p> <p>Valid only if the policy type is <code>StepScaling</code> or <code>SimpleScaling</code> and the adjustment type is <code>PercentChangeInCapacity</code>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-adjustment">Scaling Adjustment Types</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * @param {number} ScalingAdjustment <p>The amount by which a simple scaling policy scales the Auto Scaling group in response to an alarm breach. The adjustment is based on the value that you specified in the <code>AdjustmentType</code> parameter (either an absolute number or a percentage). A positive value adds to the current capacity and a negative value subtracts from the current capacity. For exact capacity, you must specify a positive value.</p> <p>Conditional: If you specify <code>SimpleScaling</code> for the policy type, you must specify this parameter. (Not used with any other policy type.) </p>
		 * @param {number} Cooldown <p>The amount of time, in seconds, after a scaling activity completes before any further dynamic scaling activities can start. If this parameter is not specified, the default cooldown period for the group applies.</p> <p>Valid only if the policy type is <code>SimpleScaling</code>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling Cooldowns</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * @param {string} MetricAggregationType <p>The aggregation type for the CloudWatch metrics. The valid values are <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code>. If the aggregation type is null, the value is treated as <code>Average</code>.</p> <p>Valid only if the policy type is <code>StepScaling</code>.</p>
		 * @param {Array<StepAdjustment>} StepAdjustments <p>A set of adjustments that enable you to scale based on the size of the alarm breach.</p> <p>Conditional: If you specify <code>StepScaling</code> for the policy type, you must specify this parameter. (Not used with any other policy type.) </p>
		 * @param {number} EstimatedInstanceWarmup <p>The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. The default is to use the value specified for the default cooldown period for the group.</p> <p>Valid only if the policy type is <code>StepScaling</code> or <code>TargetTrackingScaling</code>.</p>
		 * @param {GET_PutScalingPolicyTargetTrackingConfiguration} TargetTrackingConfiguration <p>A target tracking scaling policy. Includes support for predefined or customized metrics.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_TargetTrackingConfiguration.html">TargetTrackingConfiguration</a> in the <i>Amazon EC2 Auto Scaling API Reference</i>.</p> <p>Conditional: If you specify <code>TargetTrackingScaling</code> for the policy type, you must specify this parameter. (Not used with any other policy type.) </p>
		 * @param {boolean} Enabled Indicates whether the scaling policy is enabled or disabled. The default is enabled. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enable-disable-scaling-policy.html">Disabling a Scaling Policy for an Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 * @return {void} Success
		 */
		GET_PutScalingPolicy(AutoScalingGroupName: string, PolicyName: string, PolicyType: string, AdjustmentType: string, MinAdjustmentStep: number, MinAdjustmentMagnitude: number, ScalingAdjustment: number, Cooldown: number, MetricAggregationType: string, StepAdjustments: Array<StepAdjustment>, EstimatedInstanceWarmup: number, TargetTrackingConfiguration: GET_PutScalingPolicyTargetTrackingConfiguration, Enabled: boolean, Action: GET_PutScalingPolicyAction, Version: GET_PutScalingPolicyVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutScalingPolicy?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&PolicyName=' + (PolicyName == null ? '' : encodeURIComponent(PolicyName)) + '&PolicyType=' + (PolicyType == null ? '' : encodeURIComponent(PolicyType)) + '&AdjustmentType=' + (AdjustmentType == null ? '' : encodeURIComponent(AdjustmentType)) + '&MinAdjustmentStep=' + MinAdjustmentStep + '&MinAdjustmentMagnitude=' + MinAdjustmentMagnitude + '&ScalingAdjustment=' + ScalingAdjustment + '&Cooldown=' + Cooldown + '&MetricAggregationType=' + (MetricAggregationType == null ? '' : encodeURIComponent(MetricAggregationType)) + '&' + StepAdjustments.map(z => `StepAdjustments=${z}`).join('&') + '&EstimatedInstanceWarmup=' + EstimatedInstanceWarmup + '&TargetTrackingConfiguration=' + TargetTrackingConfiguration + '&Enabled=' + Enabled + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates a scheduled scaling action for an Auto Scaling group. If you leave a parameter unspecified when updating a scheduled scaling action, the corresponding value remains unchanged.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html">Scheduled Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=PutScheduledUpdateGroupAction
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {string} ScheduledActionName The name of this scaling action.
		 * @param {Date} Time This parameter is no longer used.
		 * @param {Date} StartTime <p>The date and time for this action to start, in YYYY-MM-DDThh:mm:ssZ format in UTC/GMT only and in quotes (for example, <code>"2019-06-01T00:00:00Z"</code>).</p> <p>If you specify <code>Recurrence</code> and <code>StartTime</code>, Amazon EC2 Auto Scaling performs the action at this time, and then performs the action based on the specified recurrence.</p> <p>If you try to schedule your action in the past, Amazon EC2 Auto Scaling returns an error message.</p>
		 * @param {Date} EndTime The date and time for the recurring schedule to end. Amazon EC2 Auto Scaling does not perform the action after this time.
		 * @param {string} Recurrence <p>The recurring schedule for this action, in Unix cron syntax format. This format consists of five fields separated by white spaces: [Minute] [Hour] [Day_of_Month] [Month_of_Year] [Day_of_Week]. The value must be in quotes (for example, <code>"30 0 1 1,6,12 *"</code>). For more information about this format, see <a href="http://crontab.org">Crontab</a>.</p> <p>When <code>StartTime</code> and <code>EndTime</code> are specified with <code>Recurrence</code>, they form the boundaries of when the recurring action starts and stops.</p>
		 * @param {number} MinSize The minimum size of the Auto Scaling group.
		 * @param {number} MaxSize The maximum size of the Auto Scaling group.
		 * @param {number} DesiredCapacity The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain. It can scale beyond this capacity if you add more scaling conditions. 
		 * @return {void} Success
		 */
		GET_PutScheduledUpdateGroupAction(AutoScalingGroupName: string, ScheduledActionName: string, Time: Date, StartTime: Date, EndTime: Date, Recurrence: string, MinSize: number, MaxSize: number, DesiredCapacity: number, Action: GET_PutScheduledUpdateGroupActionAction, Version: GET_PutScheduledUpdateGroupActionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=PutScheduledUpdateGroupAction?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&ScheduledActionName=' + (ScheduledActionName == null ? '' : encodeURIComponent(ScheduledActionName)) + '&Time=' + Time.toISOString() + '&StartTime=' + StartTime.toISOString() + '&EndTime=' + EndTime.toISOString() + '&Recurrence=' + (Recurrence == null ? '' : encodeURIComponent(Recurrence)) + '&MinSize=' + MinSize + '&MaxSize=' + MaxSize + '&DesiredCapacity=' + DesiredCapacity + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Records a heartbeat for the lifecycle action associated with the specified token or instance. This extends the timeout by the length of time defined using the <a>PutLifecycleHook</a> API call.</p> <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling group:</p> <ol> <li> <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates instances.</p> </li> <li> <p>(Optional) Create a notification target and an IAM role. The target can be either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish lifecycle notifications to the target.</p> </li> <li> <p>Create the lifecycle hook. Specify whether the hook is used when the instances launch or terminate.</p> </li> <li> <p> <b>If you need more time, record the lifecycle action heartbeat to keep the instance in a pending state.</b> </p> </li> <li> <p>If you finish before the timeout period ends, complete the lifecycle action.</p> </li> </ol> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroupLifecycle.html">Auto Scaling Lifecycle</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=RecordLifecycleActionHeartbeat
		 * @param {string} LifecycleHookName The name of the lifecycle hook.
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {string} LifecycleActionToken A token that uniquely identifies a specific lifecycle action associated with an instance. Amazon EC2 Auto Scaling sends this token to the notification target that you specified when you created the lifecycle hook.
		 * @param {string} InstanceId The ID of the instance.
		 * @return {void} Success
		 */
		GET_RecordLifecycleActionHeartbeat(LifecycleHookName: string, AutoScalingGroupName: string, LifecycleActionToken: string, InstanceId: string, Action: GET_RecordLifecycleActionHeartbeatAction, Version: GET_RecordLifecycleActionHeartbeatVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=RecordLifecycleActionHeartbeat?LifecycleHookName=' + (LifecycleHookName == null ? '' : encodeURIComponent(LifecycleHookName)) + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&LifecycleActionToken=' + (LifecycleActionToken == null ? '' : encodeURIComponent(LifecycleActionToken)) + '&InstanceId=' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Resumes the specified suspended automatic scaling processes, or all suspended process, for the specified Auto Scaling group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and Resuming Scaling Processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=ResumeProcesses
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {Array<string>} ScalingProcesses <p>One or more of the following processes. If you omit this parameter, all processes are specified.</p> <ul> <li> <p> <code>Launch</code> </p> </li> <li> <p> <code>Terminate</code> </p> </li> <li> <p> <code>HealthCheck</code> </p> </li> <li> <p> <code>ReplaceUnhealthy</code> </p> </li> <li> <p> <code>AZRebalance</code> </p> </li> <li> <p> <code>AlarmNotification</code> </p> </li> <li> <p> <code>ScheduledActions</code> </p> </li> <li> <p> <code>AddToLoadBalancer</code> </p> </li> </ul>
		 * @return {void} Success
		 */
		GET_ResumeProcesses(AutoScalingGroupName: string, ScalingProcesses: Array<string>, Action: GET_ResumeProcessesAction, Version: GET_ResumeProcessesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=ResumeProcesses?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + ScalingProcesses.map(z => `ScalingProcesses=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sets the size of the specified Auto Scaling group.</p> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-manual-scaling.html">Manual Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=SetDesiredCapacity
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {number} DesiredCapacity The desired capacity is the initial capacity of the Auto Scaling group after this operation completes and the capacity it attempts to maintain.
		 * @param {boolean} HonorCooldown Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before initiating a scaling activity to set your Auto Scaling group to its new capacity. By default, Amazon EC2 Auto Scaling does not honor the cooldown period during manual scaling activities.
		 * @return {void} Success
		 */
		GET_SetDesiredCapacity(AutoScalingGroupName: string, DesiredCapacity: number, HonorCooldown: boolean, Action: GET_SetDesiredCapacityAction, Version: GET_SetDesiredCapacityVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetDesiredCapacity?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&DesiredCapacity=' + DesiredCapacity + '&HonorCooldown=' + HonorCooldown + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Sets the health status of the specified instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health Checks for Auto Scaling Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=SetInstanceHealth
		 * @param {string} InstanceId The ID of the instance.
		 * @param {string} HealthStatus The health status of the instance. Set to <code>Healthy</code> to have the instance remain in service. Set to <code>Unhealthy</code> to have the instance be out of service. Amazon EC2 Auto Scaling terminates and replaces the unhealthy instance.
		 * @param {boolean} ShouldRespectGracePeriod <p>If the Auto Scaling group of the specified instance has a <code>HealthCheckGracePeriod</code> specified for the group, by default, this call respects the grace period. Set this to <code>False</code>, to have the call not respect the grace period associated with the group.</p> <p>For more information about the health check grace period, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_CreateAutoScalingGroup.html">CreateAutoScalingGroup</a> in the <i>Amazon EC2 Auto Scaling API Reference</i>.</p>
		 * @return {void} Success
		 */
		GET_SetInstanceHealth(InstanceId: string, HealthStatus: string, ShouldRespectGracePeriod: boolean, Action: GET_SetInstanceHealthAction, Version: GET_SetInstanceHealthVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetInstanceHealth?InstanceId=' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&HealthStatus=' + (HealthStatus == null ? '' : encodeURIComponent(HealthStatus)) + '&ShouldRespectGracePeriod=' + ShouldRespectGracePeriod + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the instance protection settings of the specified instances.</p> <p>For more information about preventing instances that are part of an Auto Scaling group from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection">Instance Protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=SetInstanceProtection
		 * @param {Array<string>} InstanceIds One or more instance IDs.
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {boolean} ProtectedFromScaleIn Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling in.
		 * @return {void} Success
		 */
		GET_SetInstanceProtection(InstanceIds: Array<string>, AutoScalingGroupName: string, ProtectedFromScaleIn: boolean, Action: GET_SetInstanceProtectionAction, Version: GET_SetInstanceProtectionVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SetInstanceProtection?' + InstanceIds.map(z => `InstanceIds=${encodeURIComponent(z)}`).join('&') + '&AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&ProtectedFromScaleIn=' + ProtectedFromScaleIn + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Suspends the specified automatic scaling processes, or all processes, for the specified Auto Scaling group.</p> <p>If you suspend either the <code>Launch</code> or <code>Terminate</code> process types, it can prevent other process types from functioning properly. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html">Suspending and Resuming Scaling Processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>To resume processes that have been suspended, call the <a>ResumeProcesses</a> API.</p>
		 * Get #Action=SuspendProcesses
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {Array<string>} ScalingProcesses <p>One or more of the following processes. If you omit this parameter, all processes are specified.</p> <ul> <li> <p> <code>Launch</code> </p> </li> <li> <p> <code>Terminate</code> </p> </li> <li> <p> <code>HealthCheck</code> </p> </li> <li> <p> <code>ReplaceUnhealthy</code> </p> </li> <li> <p> <code>AZRebalance</code> </p> </li> <li> <p> <code>AlarmNotification</code> </p> </li> <li> <p> <code>ScheduledActions</code> </p> </li> <li> <p> <code>AddToLoadBalancer</code> </p> </li> </ul>
		 * @return {void} Success
		 */
		GET_SuspendProcesses(AutoScalingGroupName: string, ScalingProcesses: Array<string>, Action: GET_SuspendProcessesAction, Version: GET_SuspendProcessesVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=SuspendProcesses?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&' + ScalingProcesses.map(z => `ScalingProcesses=${encodeURIComponent(z)}`).join('&') + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Terminates the specified instance and optionally adjusts the desired group size. </p> <p>This call simply makes a termination request. The instance is not terminated immediately. When an instance is terminated, the instance status changes to <code>terminated</code>. You can't connect to or start an instance after you've terminated it.</p> <p>If you do not specify the option to decrement the desired capacity, Amazon EC2 Auto Scaling launches instances to replace the ones that are terminated. </p> <p>By default, Amazon EC2 Auto Scaling balances instances across all Availability Zones. If you decrement the desired capacity, your Auto Scaling group can become unbalanced between Availability Zones. Amazon EC2 Auto Scaling tries to rebalance the group, and rebalancing might terminate instances in other zones. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html#AutoScalingBehavior.InstanceUsage">Rebalancing Activities</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * Get #Action=TerminateInstanceInAutoScalingGroup
		 * @param {string} InstanceId The ID of the instance.
		 * @param {boolean} ShouldDecrementDesiredCapacity Indicates whether terminating the instance also decrements the size of the Auto Scaling group.
		 * @return {void} Success
		 */
		GET_TerminateInstanceInAutoScalingGroup(InstanceId: string, ShouldDecrementDesiredCapacity: boolean, Action: GET_TerminateInstanceInAutoScalingGroupAction, Version: GET_TerminateInstanceInAutoScalingGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=TerminateInstanceInAutoScalingGroup?InstanceId=' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&ShouldDecrementDesiredCapacity=' + ShouldDecrementDesiredCapacity + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the configuration for the specified Auto Scaling group.</p> <p>To update an Auto Scaling group, specify the name of the group and the parameter that you want to change. Any parameters that you don't specify are not changed by this update request. The new settings take effect on any scaling activities after this call returns. </p> <p>If you associate a new launch configuration or template with an Auto Scaling group, all new instances will get the updated configuration. Existing instances continue to run with the configuration that they were originally launched with. When you update a group to specify a mixed instances policy instead of a launch configuration or template, existing instances may be replaced to match the new purchasing options that you specified in the policy. For example, if the group currently has 100% On-Demand capacity and the policy specifies 50% Spot capacity, this means that half of your instances will be gradually terminated and relaunched as Spot Instances. When replacing instances, Amazon EC2 Auto Scaling launches new instances before terminating the old ones, so that updating your group does not compromise the performance or availability of your application.</p> <p>Note the following about changing <code>DesiredCapacity</code>, <code>MaxSize</code>, or <code>MinSize</code>:</p> <ul> <li> <p>If a scale-in activity occurs as a result of a new <code>DesiredCapacity</code> value that is lower than the current size of the group, the Auto Scaling group uses its termination policy to determine which instances to terminate.</p> </li> <li> <p>If you specify a new value for <code>MinSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MinSize</code> is larger than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MinSize</code> value.</p> </li> <li> <p>If you specify a new value for <code>MaxSize</code> without specifying a value for <code>DesiredCapacity</code>, and the new <code>MaxSize</code> is smaller than the current size of the group, this sets the group's <code>DesiredCapacity</code> to the new <code>MaxSize</code> value.</p> </li> </ul> <p>To see which parameters have been set, call the <a>DescribeAutoScalingGroups</a> API. To view the scaling policies for an Auto Scaling group, call the <a>DescribePolicies</a> API. If the group has scaling policies, you can update them by calling the <a>PutScalingPolicy</a> API.</p>
		 * Get #Action=UpdateAutoScalingGroup
		 * @param {string} AutoScalingGroupName The name of the Auto Scaling group.
		 * @param {string} LaunchConfigurationName The name of the launch configuration. If you specify <code>LaunchConfigurationName</code> in your update request, you can't specify <code>LaunchTemplate</code> or <code>MixedInstancesPolicy</code>.
		 * @param {GET_UpdateAutoScalingGroupLaunchTemplate} LaunchTemplate <p>The launch template and version to use to specify the updates. If you specify <code>LaunchTemplate</code> in your update request, you can't specify <code>LaunchConfigurationName</code> or <code>MixedInstancesPolicy</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_LaunchTemplateSpecification.html">LaunchTemplateSpecification</a> in the <i>Amazon EC2 Auto Scaling API Reference</i>.</p>
		 * @param {GET_UpdateAutoScalingGroupMixedInstancesPolicy} MixedInstancesPolicy <p>An embedded object that specifies a mixed instances policy.</p> <p>In your call to <code>UpdateAutoScalingGroup</code>, you can make changes to the policy that is specified. All optional parameters are left unchanged if not specified.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_MixedInstancesPolicy.html">MixedInstancesPolicy</a> in the <i>Amazon EC2 Auto Scaling API Reference</i> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-purchase-options.html">Auto Scaling Groups with Multiple Instance Types and Purchase Options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * @param {number} MinSize The minimum size of the Auto Scaling group.
		 * @param {number} MaxSize <p>The maximum size of the Auto Scaling group.</p> <note> <p>With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to go above <code>MaxSize</code> to meet your capacity requirements. In this event, Amazon EC2 Auto Scaling will never go above <code>MaxSize</code> by more than your maximum instance weight (weights that define how many capacity units each instance contributes to the capacity of the group).</p> </note>
		 * @param {number} DesiredCapacity <p>The desired capacity is the initial capacity of the Auto Scaling group after this operation completes and the capacity it attempts to maintain.</p> <p>This number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group.</p>
		 * @param {number} DefaultCooldown <p>The amount of time, in seconds, after a scaling activity completes before another scaling activity can start. The default value is <code>300</code>. This cooldown period is not used when a scaling-specific cooldown is specified.</p> <p>Cooldown periods are not supported for target tracking scaling policies, step scaling policies, or scheduled scaling. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling Cooldowns</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * @param {Array<string>} AvailabilityZones One or more Availability Zones for the group.
		 * @param {string} HealthCheckType The service to use for the health checks. The valid values are <code>EC2</code> and <code>ELB</code>. If you configure an Auto Scaling group to use ELB health checks, it considers the instance unhealthy if it fails either the EC2 status checks or the load balancer health checks.
		 * @param {number} HealthCheckGracePeriod <p>The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service. The default value is <code>0</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html#health-check-grace-period">Health Check Grace Period</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Conditional: This parameter is required if you are adding an <code>ELB</code> health check.</p>
		 * @param {string} PlacementGroup The name of the placement group into which to launch your instances, if any. A placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a placement group. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement Groups</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.
		 * @param {string} VPCZoneIdentifier <p>A comma-separated list of subnet IDs for virtual private cloud (VPC).</p> <p>If you specify <code>VPCZoneIdentifier</code> with <code>AvailabilityZones</code>, the subnets that you specify for this parameter must reside in those Availability Zones.</p>
		 * @param {Array<string>} TerminationPolicies <p>A standalone termination policy or a list of termination policies used to select the instance to terminate. The policies are executed in the order that they are listed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html">Controlling Which Instances Auto Scaling Terminates During Scale In</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * @param {boolean} NewInstancesProtectedFromScaleIn <p>Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in.</p> <p>For more information about preventing instances from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection">Instance Protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
		 * @param {string} ServiceLinkedRoleARN The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other AWS services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-service-linked-role.html">Service-Linked Roles</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
		 * @param {number} MaxInstanceLifetime <p>The maximum amount of time, in seconds, that an instance can be in service. The default is null.</p> <p>This parameter is optional, but if you specify a value for it, you must specify a value of at least 604,800 seconds (7 days). To clear a previously set value, specify a new value of 0.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-max-instance-lifetime.html">Replacing Auto Scaling Instances Based on Maximum Instance Lifetime</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Valid Range: Minimum value of 0.</p>
		 * @return {void} Success
		 */
		GET_UpdateAutoScalingGroup(AutoScalingGroupName: string, LaunchConfigurationName: string, LaunchTemplate: GET_UpdateAutoScalingGroupLaunchTemplate, MixedInstancesPolicy: GET_UpdateAutoScalingGroupMixedInstancesPolicy, MinSize: number, MaxSize: number, DesiredCapacity: number, DefaultCooldown: number, AvailabilityZones: Array<string>, HealthCheckType: string, HealthCheckGracePeriod: number, PlacementGroup: string, VPCZoneIdentifier: string, TerminationPolicies: Array<string>, NewInstancesProtectedFromScaleIn: boolean, ServiceLinkedRoleARN: string, MaxInstanceLifetime: number, Action: GET_UpdateAutoScalingGroupAction, Version: GET_UpdateAutoScalingGroupVersion): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '#Action=UpdateAutoScalingGroup?AutoScalingGroupName=' + (AutoScalingGroupName == null ? '' : encodeURIComponent(AutoScalingGroupName)) + '&LaunchConfigurationName=' + (LaunchConfigurationName == null ? '' : encodeURIComponent(LaunchConfigurationName)) + '&LaunchTemplate=' + LaunchTemplate + '&MixedInstancesPolicy=' + MixedInstancesPolicy + '&MinSize=' + MinSize + '&MaxSize=' + MaxSize + '&DesiredCapacity=' + DesiredCapacity + '&DefaultCooldown=' + DefaultCooldown + '&' + AvailabilityZones.map(z => `AvailabilityZones=${encodeURIComponent(z)}`).join('&') + '&HealthCheckType=' + (HealthCheckType == null ? '' : encodeURIComponent(HealthCheckType)) + '&HealthCheckGracePeriod=' + HealthCheckGracePeriod + '&PlacementGroup=' + (PlacementGroup == null ? '' : encodeURIComponent(PlacementGroup)) + '&VPCZoneIdentifier=' + (VPCZoneIdentifier == null ? '' : encodeURIComponent(VPCZoneIdentifier)) + '&' + TerminationPolicies.map(z => `TerminationPolicies=${encodeURIComponent(z)}`).join('&') + '&NewInstancesProtectedFromScaleIn=' + NewInstancesProtectedFromScaleIn + '&ServiceLinkedRoleARN=' + (ServiceLinkedRoleARN == null ? '' : encodeURIComponent(ServiceLinkedRoleARN)) + '&MaxInstanceLifetime=' + MaxInstanceLifetime + '&Action=' + Action + '&Version=' + Version, { observe: 'response', responseType: 'text' });
		}
	}

	export enum GET_AttachInstancesAction { AttachInstances = 0 }

	export enum GET_AttachInstancesVersion { _2011_01_01 = 0 }

	export enum POST_AttachInstancesVersion { _2011_01_01 = 0 }

	export enum GET_AttachLoadBalancerTargetGroupsAction { AttachLoadBalancerTargetGroups = 0 }

	export enum GET_AttachLoadBalancerTargetGroupsVersion { _2011_01_01 = 0 }

	export enum POST_AttachLoadBalancerTargetGroupsVersion { _2011_01_01 = 0 }

	export enum GET_AttachLoadBalancersAction { AttachLoadBalancers = 0 }

	export enum GET_AttachLoadBalancersVersion { _2011_01_01 = 0 }

	export enum POST_AttachLoadBalancersVersion { _2011_01_01 = 0 }

	export enum GET_BatchDeleteScheduledActionAction { BatchDeleteScheduledAction = 0 }

	export enum GET_BatchDeleteScheduledActionVersion { _2011_01_01 = 0 }

	export enum POST_BatchDeleteScheduledActionVersion { _2011_01_01 = 0 }

	export enum GET_BatchPutScheduledUpdateGroupActionAction { BatchPutScheduledUpdateGroupAction = 0 }

	export enum GET_BatchPutScheduledUpdateGroupActionVersion { _2011_01_01 = 0 }

	export enum POST_BatchPutScheduledUpdateGroupActionVersion { _2011_01_01 = 0 }

	export enum GET_CompleteLifecycleActionAction { CompleteLifecycleAction = 0 }

	export enum GET_CompleteLifecycleActionVersion { _2011_01_01 = 0 }

	export enum POST_CompleteLifecycleActionVersion { _2011_01_01 = 0 }

	export interface GET_CreateAutoScalingGroupLaunchTemplate {
		LaunchTemplateId?: string;
		LaunchTemplateName?: string;
		Version?: string;
	}

	export interface GET_CreateAutoScalingGroupMixedInstancesPolicy {

		/** <p>Describes a launch template and overrides.</p> <p>The overrides are used to override the instance type specified by the launch template with multiple instance types that can be used to launch On-Demand Instances and Spot Instances.</p> <p>When you update the launch template or overrides, existing Amazon EC2 instances continue to run. When scale out occurs, Amazon EC2 Auto Scaling launches instances to match the new settings. When scale in occurs, Amazon EC2 Auto Scaling terminates instances according to the group's termination policies.</p> */
		LaunchTemplate?: LaunchTemplate;

		/** <p>Describes an instances distribution for an Auto Scaling group with <a>MixedInstancesPolicy</a>.</p> <p>The instances distribution specifies the distribution of On-Demand Instances and Spot Instances, the maximum price to pay for Spot Instances, and how the Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacity.</p> <p>When you update <code>SpotAllocationStrategy</code>, <code>SpotInstancePools</code>, or <code>SpotMaxPrice</code>, this update action does not deploy any changes across the running Amazon EC2 instances in the group. Your existing Spot Instances continue to run as long as the maximum price for those instances is higher than the current Spot price. When scale out occurs, Amazon EC2 Auto Scaling launches instances based on the new settings. When scale in occurs, Amazon EC2 Auto Scaling terminates instances according to the group's termination policies.</p> */
		InstancesDistribution?: InstancesDistribution;
	}

	export enum GET_CreateAutoScalingGroupAction { CreateAutoScalingGroup = 0 }

	export enum GET_CreateAutoScalingGroupVersion { _2011_01_01 = 0 }

	export enum POST_CreateAutoScalingGroupVersion { _2011_01_01 = 0 }

	export interface GET_CreateLaunchConfigurationInstanceMonitoring {
		Enabled?: boolean;
	}

	export enum GET_CreateLaunchConfigurationAction { CreateLaunchConfiguration = 0 }

	export enum GET_CreateLaunchConfigurationVersion { _2011_01_01 = 0 }

	export enum POST_CreateLaunchConfigurationVersion { _2011_01_01 = 0 }

	export enum GET_CreateOrUpdateTagsAction { CreateOrUpdateTags = 0 }

	export enum GET_CreateOrUpdateTagsVersion { _2011_01_01 = 0 }

	export enum POST_CreateOrUpdateTagsVersion { _2011_01_01 = 0 }

	export enum GET_DeleteAutoScalingGroupAction { DeleteAutoScalingGroup = 0 }

	export enum GET_DeleteAutoScalingGroupVersion { _2011_01_01 = 0 }

	export enum POST_DeleteAutoScalingGroupVersion { _2011_01_01 = 0 }

	export enum GET_DeleteLaunchConfigurationAction { DeleteLaunchConfiguration = 0 }

	export enum GET_DeleteLaunchConfigurationVersion { _2011_01_01 = 0 }

	export enum POST_DeleteLaunchConfigurationVersion { _2011_01_01 = 0 }

	export enum GET_DeleteLifecycleHookAction { DeleteLifecycleHook = 0 }

	export enum GET_DeleteLifecycleHookVersion { _2011_01_01 = 0 }

	export enum POST_DeleteLifecycleHookVersion { _2011_01_01 = 0 }

	export enum GET_DeleteNotificationConfigurationAction { DeleteNotificationConfiguration = 0 }

	export enum GET_DeleteNotificationConfigurationVersion { _2011_01_01 = 0 }

	export enum POST_DeleteNotificationConfigurationVersion { _2011_01_01 = 0 }

	export enum GET_DeletePolicyAction { DeletePolicy = 0 }

	export enum GET_DeletePolicyVersion { _2011_01_01 = 0 }

	export enum POST_DeletePolicyVersion { _2011_01_01 = 0 }

	export enum GET_DeleteScheduledActionAction { DeleteScheduledAction = 0 }

	export enum GET_DeleteScheduledActionVersion { _2011_01_01 = 0 }

	export enum POST_DeleteScheduledActionVersion { _2011_01_01 = 0 }

	export enum GET_DeleteTagsAction { DeleteTags = 0 }

	export enum GET_DeleteTagsVersion { _2011_01_01 = 0 }

	export enum POST_DeleteTagsVersion { _2011_01_01 = 0 }

	export enum GET_DescribeAccountLimitsAction { DescribeAccountLimits = 0 }

	export enum GET_DescribeAccountLimitsVersion { _2011_01_01 = 0 }

	export enum POST_DescribeAccountLimitsVersion { _2011_01_01 = 0 }

	export enum GET_DescribeAdjustmentTypesAction { DescribeAdjustmentTypes = 0 }

	export enum GET_DescribeAdjustmentTypesVersion { _2011_01_01 = 0 }

	export enum POST_DescribeAdjustmentTypesVersion { _2011_01_01 = 0 }

	export enum GET_DescribeAutoScalingGroupsAction { DescribeAutoScalingGroups = 0 }

	export enum GET_DescribeAutoScalingGroupsVersion { _2011_01_01 = 0 }

	export enum POST_DescribeAutoScalingGroupsVersion { _2011_01_01 = 0 }

	export enum GET_DescribeAutoScalingInstancesAction { DescribeAutoScalingInstances = 0 }

	export enum GET_DescribeAutoScalingInstancesVersion { _2011_01_01 = 0 }

	export enum POST_DescribeAutoScalingInstancesVersion { _2011_01_01 = 0 }

	export enum GET_DescribeAutoScalingNotificationTypesAction { DescribeAutoScalingNotificationTypes = 0 }

	export enum GET_DescribeAutoScalingNotificationTypesVersion { _2011_01_01 = 0 }

	export enum POST_DescribeAutoScalingNotificationTypesVersion { _2011_01_01 = 0 }

	export enum GET_DescribeLaunchConfigurationsAction { DescribeLaunchConfigurations = 0 }

	export enum GET_DescribeLaunchConfigurationsVersion { _2011_01_01 = 0 }

	export enum POST_DescribeLaunchConfigurationsVersion { _2011_01_01 = 0 }

	export enum GET_DescribeLifecycleHookTypesAction { DescribeLifecycleHookTypes = 0 }

	export enum GET_DescribeLifecycleHookTypesVersion { _2011_01_01 = 0 }

	export enum POST_DescribeLifecycleHookTypesVersion { _2011_01_01 = 0 }

	export enum GET_DescribeLifecycleHooksAction { DescribeLifecycleHooks = 0 }

	export enum GET_DescribeLifecycleHooksVersion { _2011_01_01 = 0 }

	export enum POST_DescribeLifecycleHooksVersion { _2011_01_01 = 0 }

	export enum GET_DescribeLoadBalancerTargetGroupsAction { DescribeLoadBalancerTargetGroups = 0 }

	export enum GET_DescribeLoadBalancerTargetGroupsVersion { _2011_01_01 = 0 }

	export enum POST_DescribeLoadBalancerTargetGroupsVersion { _2011_01_01 = 0 }

	export enum GET_DescribeLoadBalancersAction { DescribeLoadBalancers = 0 }

	export enum GET_DescribeLoadBalancersVersion { _2011_01_01 = 0 }

	export enum POST_DescribeLoadBalancersVersion { _2011_01_01 = 0 }

	export enum GET_DescribeMetricCollectionTypesAction { DescribeMetricCollectionTypes = 0 }

	export enum GET_DescribeMetricCollectionTypesVersion { _2011_01_01 = 0 }

	export enum POST_DescribeMetricCollectionTypesVersion { _2011_01_01 = 0 }

	export enum GET_DescribeNotificationConfigurationsAction { DescribeNotificationConfigurations = 0 }

	export enum GET_DescribeNotificationConfigurationsVersion { _2011_01_01 = 0 }

	export enum POST_DescribeNotificationConfigurationsVersion { _2011_01_01 = 0 }

	export enum GET_DescribePoliciesAction { DescribePolicies = 0 }

	export enum GET_DescribePoliciesVersion { _2011_01_01 = 0 }

	export enum POST_DescribePoliciesVersion { _2011_01_01 = 0 }

	export enum GET_DescribeScalingActivitiesAction { DescribeScalingActivities = 0 }

	export enum GET_DescribeScalingActivitiesVersion { _2011_01_01 = 0 }

	export enum POST_DescribeScalingActivitiesVersion { _2011_01_01 = 0 }

	export enum GET_DescribeScalingProcessTypesAction { DescribeScalingProcessTypes = 0 }

	export enum GET_DescribeScalingProcessTypesVersion { _2011_01_01 = 0 }

	export enum POST_DescribeScalingProcessTypesVersion { _2011_01_01 = 0 }

	export enum GET_DescribeScheduledActionsAction { DescribeScheduledActions = 0 }

	export enum GET_DescribeScheduledActionsVersion { _2011_01_01 = 0 }

	export enum POST_DescribeScheduledActionsVersion { _2011_01_01 = 0 }

	export enum GET_DescribeTagsAction { DescribeTags = 0 }

	export enum GET_DescribeTagsVersion { _2011_01_01 = 0 }

	export enum POST_DescribeTagsVersion { _2011_01_01 = 0 }

	export enum GET_DescribeTerminationPolicyTypesAction { DescribeTerminationPolicyTypes = 0 }

	export enum GET_DescribeTerminationPolicyTypesVersion { _2011_01_01 = 0 }

	export enum POST_DescribeTerminationPolicyTypesVersion { _2011_01_01 = 0 }

	export enum GET_DetachInstancesAction { DetachInstances = 0 }

	export enum GET_DetachInstancesVersion { _2011_01_01 = 0 }

	export enum POST_DetachInstancesVersion { _2011_01_01 = 0 }

	export enum GET_DetachLoadBalancerTargetGroupsAction { DetachLoadBalancerTargetGroups = 0 }

	export enum GET_DetachLoadBalancerTargetGroupsVersion { _2011_01_01 = 0 }

	export enum POST_DetachLoadBalancerTargetGroupsVersion { _2011_01_01 = 0 }

	export enum GET_DetachLoadBalancersAction { DetachLoadBalancers = 0 }

	export enum GET_DetachLoadBalancersVersion { _2011_01_01 = 0 }

	export enum POST_DetachLoadBalancersVersion { _2011_01_01 = 0 }

	export enum GET_DisableMetricsCollectionAction { DisableMetricsCollection = 0 }

	export enum GET_DisableMetricsCollectionVersion { _2011_01_01 = 0 }

	export enum POST_DisableMetricsCollectionVersion { _2011_01_01 = 0 }

	export enum GET_EnableMetricsCollectionAction { EnableMetricsCollection = 0 }

	export enum GET_EnableMetricsCollectionVersion { _2011_01_01 = 0 }

	export enum POST_EnableMetricsCollectionVersion { _2011_01_01 = 0 }

	export enum GET_EnterStandbyAction { EnterStandby = 0 }

	export enum GET_EnterStandbyVersion { _2011_01_01 = 0 }

	export enum POST_EnterStandbyVersion { _2011_01_01 = 0 }

	export enum GET_ExecutePolicyAction { ExecutePolicy = 0 }

	export enum GET_ExecutePolicyVersion { _2011_01_01 = 0 }

	export enum POST_ExecutePolicyVersion { _2011_01_01 = 0 }

	export enum GET_ExitStandbyAction { ExitStandby = 0 }

	export enum GET_ExitStandbyVersion { _2011_01_01 = 0 }

	export enum POST_ExitStandbyVersion { _2011_01_01 = 0 }

	export enum GET_PutLifecycleHookAction { PutLifecycleHook = 0 }

	export enum GET_PutLifecycleHookVersion { _2011_01_01 = 0 }

	export enum POST_PutLifecycleHookVersion { _2011_01_01 = 0 }

	export enum GET_PutNotificationConfigurationAction { PutNotificationConfiguration = 0 }

	export enum GET_PutNotificationConfigurationVersion { _2011_01_01 = 0 }

	export enum POST_PutNotificationConfigurationVersion { _2011_01_01 = 0 }

	export interface GET_PutScalingPolicyTargetTrackingConfiguration {

		/** Represents a predefined metric for a target tracking scaling policy to use with Amazon EC2 Auto Scaling. */
		PredefinedMetricSpecification?: PredefinedMetricSpecification;

		/** <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.</p> <p>To create your customized metric specification:</p> <ul> <li> <p>Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish Custom Metrics</a> in the <i>Amazon CloudWatch User Guide</i>.</p> </li> <li> <p>Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases.</p> </li> </ul> <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch Concepts</a>.</p> */
		CustomizedMetricSpecification?: CustomizedMetricSpecification;
		TargetValue: number;
		DisableScaleIn?: boolean;
	}

	export enum GET_PutScalingPolicyAction { PutScalingPolicy = 0 }

	export enum GET_PutScalingPolicyVersion { _2011_01_01 = 0 }

	export enum POST_PutScalingPolicyVersion { _2011_01_01 = 0 }

	export enum GET_PutScheduledUpdateGroupActionAction { PutScheduledUpdateGroupAction = 0 }

	export enum GET_PutScheduledUpdateGroupActionVersion { _2011_01_01 = 0 }

	export enum POST_PutScheduledUpdateGroupActionVersion { _2011_01_01 = 0 }

	export enum GET_RecordLifecycleActionHeartbeatAction { RecordLifecycleActionHeartbeat = 0 }

	export enum GET_RecordLifecycleActionHeartbeatVersion { _2011_01_01 = 0 }

	export enum POST_RecordLifecycleActionHeartbeatVersion { _2011_01_01 = 0 }

	export enum GET_ResumeProcessesAction { ResumeProcesses = 0 }

	export enum GET_ResumeProcessesVersion { _2011_01_01 = 0 }

	export enum POST_ResumeProcessesVersion { _2011_01_01 = 0 }

	export enum GET_SetDesiredCapacityAction { SetDesiredCapacity = 0 }

	export enum GET_SetDesiredCapacityVersion { _2011_01_01 = 0 }

	export enum POST_SetDesiredCapacityVersion { _2011_01_01 = 0 }

	export enum GET_SetInstanceHealthAction { SetInstanceHealth = 0 }

	export enum GET_SetInstanceHealthVersion { _2011_01_01 = 0 }

	export enum POST_SetInstanceHealthVersion { _2011_01_01 = 0 }

	export enum GET_SetInstanceProtectionAction { SetInstanceProtection = 0 }

	export enum GET_SetInstanceProtectionVersion { _2011_01_01 = 0 }

	export enum POST_SetInstanceProtectionVersion { _2011_01_01 = 0 }

	export enum GET_SuspendProcessesAction { SuspendProcesses = 0 }

	export enum GET_SuspendProcessesVersion { _2011_01_01 = 0 }

	export enum POST_SuspendProcessesVersion { _2011_01_01 = 0 }

	export enum GET_TerminateInstanceInAutoScalingGroupAction { TerminateInstanceInAutoScalingGroup = 0 }

	export enum GET_TerminateInstanceInAutoScalingGroupVersion { _2011_01_01 = 0 }

	export enum POST_TerminateInstanceInAutoScalingGroupVersion { _2011_01_01 = 0 }

	export interface GET_UpdateAutoScalingGroupLaunchTemplate {
		LaunchTemplateId?: string;
		LaunchTemplateName?: string;
		Version?: string;
	}

	export interface GET_UpdateAutoScalingGroupMixedInstancesPolicy {

		/** <p>Describes a launch template and overrides.</p> <p>The overrides are used to override the instance type specified by the launch template with multiple instance types that can be used to launch On-Demand Instances and Spot Instances.</p> <p>When you update the launch template or overrides, existing Amazon EC2 instances continue to run. When scale out occurs, Amazon EC2 Auto Scaling launches instances to match the new settings. When scale in occurs, Amazon EC2 Auto Scaling terminates instances according to the group's termination policies.</p> */
		LaunchTemplate?: LaunchTemplate;

		/** <p>Describes an instances distribution for an Auto Scaling group with <a>MixedInstancesPolicy</a>.</p> <p>The instances distribution specifies the distribution of On-Demand Instances and Spot Instances, the maximum price to pay for Spot Instances, and how the Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacity.</p> <p>When you update <code>SpotAllocationStrategy</code>, <code>SpotInstancePools</code>, or <code>SpotMaxPrice</code>, this update action does not deploy any changes across the running Amazon EC2 instances in the group. Your existing Spot Instances continue to run as long as the maximum price for those instances is higher than the current Spot price. When scale out occurs, Amazon EC2 Auto Scaling launches instances based on the new settings. When scale in occurs, Amazon EC2 Auto Scaling terminates instances according to the group's termination policies.</p> */
		InstancesDistribution?: InstancesDistribution;
	}

	export enum GET_UpdateAutoScalingGroupAction { UpdateAutoScalingGroup = 0 }

	export enum GET_UpdateAutoScalingGroupVersion { _2011_01_01 = 0 }

	export enum POST_UpdateAutoScalingGroupVersion { _2011_01_01 = 0 }

}

